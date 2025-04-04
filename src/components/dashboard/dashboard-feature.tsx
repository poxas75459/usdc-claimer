/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2ZrrBXCZoB89P5EjCzqEUe3Dc3QBsKe2MzT7cYa1twSPf4VVWRFu8KMzeyfGJNL6spRnVBRdPLhq8A3cV8WSWfdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66AZAeS6hrxQHzN4W95oUFHKxEMEjUn9Xjgyb3v7eAc6AJaFmtoWUWnMBZnawscEQySzbMD5CQw5Ufw9CMKmyqfs",
  "key1": "3AmfWF86VSSNk4FeXfHV7ZWobxVZ4CLegQUbBu9QN16Vp7eSu1ZnMBqCo7i9LABkeUbrEgYm6zGTSFXmS1nUchvd",
  "key2": "551M1L6zHiciMpauKaz7TGqkWWUQYxgMg6PfFBKdPjssdnGJzRzF6hfzvmhpBfFEq5WxKF5UZ1uDSCnMGSYe9LRF",
  "key3": "SoLTfsS7hxLhPzWZvCqkFqPzkVhuWAfCNqDv8xdXMuwrMjDgNMUGKVupu1FyhC5CxEXUrdb7xGr9YPSfsHu6xnU",
  "key4": "5x1NErBzjTWDbe4GRAYQg4YQCB2zrvBajW6iwCsR9aPawEqiift3tQzDpdNfv9rCTSg7sUC4Ykj86VmEQdUdz59L",
  "key5": "4LK9z5neZox9M7AkyaDvGuCDzrrgzYx5CEkTqAWD6EESrvMxkey5yqWgSK1sy9qdEo4f4p4VadJkMwLrLd52ScGW",
  "key6": "1udvu1xkc8zKxYJphSA7K6wd9e4xopZToj7H7vHE5ioDjUZFTVWbeUiQ2G37ZzjPcPVX1JJqcTcjuoSQ2Mvn7Nj",
  "key7": "2AJH1FWyeBYpWF6NyaE7xnaAhx2A8ek6LTynvoDXm4eQJUj2XEwaC5v8LJbVQ5mtNe3YeBX351VW3vP2DXX5P2G",
  "key8": "5uYWeTFtGXboDCmgibiCqjTQoZhsECGWEYNar85ig1zeW7X7F1wYzh1rdoXoGcg6Gi2oCPxmmfp9LzWyCCQMHPGJ",
  "key9": "5DUayZqPraCae9jwqZdtPWKZW3aYgHgdDgV7hs4dSn1E8JGi5FPdKKpTdqUWAVaFSki2yrt2GChigT8jBRiPCTzj",
  "key10": "d99peVmozG4dKuEDw2zCRzfX662T3cYKgBgDxMPLWHfoEhPsahimNtnYuwCWyQ5mwkDF7vn4RAZReXMob8wh5so",
  "key11": "32Poz6FQE63ViJwzNeT5EvTvTQbxeFZDdboiA849kTReUN1Y5Vjc2abUV3rCnoUdF5jLHqdVFzdy2yinXfyokkCy",
  "key12": "dcV3uY6xVyWuN11t3a4m2pPSW2iZLQvgzDLqqusL61D1fR3qBuSQ3tL5Hzq5PBVMJ3zLSnuZs3Wy2XN7pMCA8Wg",
  "key13": "3qTdsuP9qn2YyWiVH5vUfmeyPjgYWVchhJthnbPdrNNQuY4WFjEocAizJAP69M2WHLCMa7eQerFJMCCJ5oL3XP8u",
  "key14": "2ka1R8p85zP32gj2oDS5arX5NhrZrf5rCkoyRk3SxRpnAFsQ9BKUpr2A7ZEkMe2fhfrMaYqv6bPfeSihDpcVENjS",
  "key15": "G9n9mkbVtd8uyRjBp5wJf6e8cpLKZELpCCiuRwTfLmUWcBaBE6LZT5DmZTarDE976CbX9bUY2tdHVXZE2KRAAUy",
  "key16": "4CeKuGyPWAecetxdXSceEr1wkKkGTNymAAwvAFJQL4r4EHefPjZ1ZD3XU9TepTLNY8A5iseLSvqyDm3kaN7ckHEQ",
  "key17": "4pH9jRb11QjKEiQRGc3Wc9k5xFWWZsM8xv5yhsiCsHnznZUByX3hJZ7kN3JkfLbuJV3tJFzZHwNVitL7FB17zhJ4",
  "key18": "5HswALFR3pvjyNcdcnknkp2kkzodA63qfGas1XuGRjLjub3NbG7Df6YzHroRWSEcVKzi3h1fYYx6e7T4cFq7Ub4x",
  "key19": "4cJSWMs5KXgbsgriYcELn3PQRKcMvNGWUJsmCNbyKyPvVnaFECxEMAk6Z9L1wuEyZgF2eff52kNsZBZSvaUvr3qN",
  "key20": "LiWdBeWZPkLHLdp8h7fYUajWMHfkt1tMjCNWvYJrP1qq54cx6CbXfFdiD1E2ccihqwK3m4XVEHu3oWBJoFdXUn1",
  "key21": "2SKTrxiutLWXFZ5NAedGr882465fdEaR1SR9Fo3j5Fi4sKq8J6JhyX42oXSV7AtHN1rrTqCsyH31sCzVnW174NG3",
  "key22": "2MaUjK9v1BqESgRUTJ5brhne5YMKaggyxzCGX4njmdb16KbF5rikn3Sc58ASCjjM8TkKjvctQv2FJJ6XKWggveUY",
  "key23": "3YxEj1rQmnrowSkKGZbioZAq2r5rydPTaqSUBNxRNu7JRnZG1BSEJHv5nu47hQmwRbyRLvBiYUzysJRtpsHqLrNP",
  "key24": "5GC6T3kmrYUuZAaqEsZ8sMZFver8myVBc6GKA9h53pxbt8s2426EtCuk63q6tfj9sfAfqp5XVSsp3K2UPi7FGe54",
  "key25": "5B92Afi3b6VLWtAV4wakEimNL1MJDAJj7jw27CchpWzh3kbfvrT3gCAfRk7ABuokRMwof3sfY7RSrVxWS9mwnJcj",
  "key26": "3zCpXuXXyqSpp1pXcg7dh1iqWZFewcnxJhsU3MGffFgbaJeQf25KWejqSwjRKCVVt4dvFaaaHnzF5D8CJEc75jMv",
  "key27": "3MXjWvn37U7yCgm97SS3sPkYXwmtm9bkcQMHTkKq1zVUk3YVXyqi7pe2ydDAcNRookLQWYBBJufbi3GPstcH1QG6",
  "key28": "4ZejmA5LwQneca46R8DPvMJXa7CrrPMJm7djkjoHoo2C7ShAeWAbkr6YzsSmKtFNLw78PEwH6njsB1Syg4mXq9DK",
  "key29": "AeJcU2vUDznjXVG3ByqvSvcJkbQysCNxCo6zxoJRnLuz9qPosbqyzt9TyaAyiHScGDvWz1bqjjGivovVgFhK8s4",
  "key30": "57qT1wMC2EnPQdubztprLS2JxJhye1vp1TTLhP8i2A8PtuHvC3YxQnKt8Pmpz5JxXvE9SHng1DxTpB844maqTK4P",
  "key31": "4JKXc4vtnJuqPodhN44Yg89CBkE72Q4BPgqdTELFbxNgtHSnaiHGvgcK5gZa7nd3NfhhPeZqWyYQioS6t6D6u3BV",
  "key32": "Y5ocrns6i6ekdEDCyzMPodxMrVrPTscTSdPRaggTQScLWu5hopRmvWD3BZ7azx5qSFbx3kyPrRQsev43pbgAtJA"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
