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
    "32BYgdUdAo9V97ym5VgCxY4fp58R4kgqCeZbTx8nTKTL2psBZQcQGKTqWgmm2A6tByL5kwDNFUMuUCUZeR47YcLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KHgvycGHvsdymkqG7ugcU1KrxRmLoLuVh9ZpPj2pMAqH22L8nMRDtv6PwoLUZVfi7DzxGCWgGN3dGG74THkU7ik",
  "key1": "3LQAgn3GeQwHRp5W6RBrL56xRRFRdQo8Sb4MveP5aMHABweRZ7r1FTGwgxPh4ovoaoedkwtnvd5FF96jUbJ6UfSS",
  "key2": "4w9UtEySdpwCo8jJXj1iZLvvbVkCyhKtQef8ksDXyJ9NnZ47WLRBx6YPQ4UTaxDMj5xXbP78fQTUt2E3p2JcmKeE",
  "key3": "3ApiYPtUgqhDE3B5RtxeDtvi9SbLJthvK8UDQ8dX5XoY4t831Y5e1DkSCqhtLdyExdGxoFKanNBqTKDe13VzRoL7",
  "key4": "65q2EwiLTrmyzrvSBY33Fnv7NN6W8Wh36xhMpQxyWETHfCZacrPwuV432PewP68Cd7HPGfzcJL4udRofcbvji1Ve",
  "key5": "5UNauDMxfJwvF51Ta8HeAdgtB33FKypFBJ463HDQXR382i2q545ygJo8x6iWC8cdh5twLQL7dZynbdvt2c6E2DV1",
  "key6": "3VuLqXArgf1RjTP7tkwxg6dttzQPVJWUg7G6w5MRDvoXZL2wQi3BPtmQPQCH8azv9d1eBJntGEACKKXrLjjAEX1y",
  "key7": "Yp2w13U3RsMaK8B7XGCKApsEcbRdF2Hf2fvEYgeXVJqebud5q5unmkjU49AL77SFiwmerLjuab4zHwxvEXZeJVr",
  "key8": "65EAtQLqpnhswZKha5SW6y8Un34YrMJ93baX9S2JGoM8GQef7npY5QkTMGMeJkhbq4zhUssGKgTXf5mxao1RoFio",
  "key9": "2U95Dj3E4i1D6o883yz36zgiracv5cEZWa6H4XQ6zEZov7fFuLCPqX86QkD9L1Lf7kFhr7VNtsuB6HGvLNjVVBgu",
  "key10": "3fHkUB7re9c3RxmLMRTB7WQWmY9eZjdyufDiGTKS3yZmbE4PtcfW3o6NinzNKGXE5eMw6F669MX8o2moUGApbqeW",
  "key11": "4wjLicrfzF5p6JA2ijEjwUTTVDfNp5vQAZdsP2KtNgAEguDpYKDhiRfAKZFyqN4SfWo3LbwBD1BtZY21J3wqME4u",
  "key12": "3uF3rTomj28qYsm278Hm4B7pZh8hHJUnzEpsNVa9Avg1ePtvnFpGpqMgKXqbdHVvLUr62rMKBqEkcmrfjgwturK1",
  "key13": "3aF2qvwLrxcT5usnnbv8FA7ej1w6dSQPoQDBMp85CSZsh7FYQ1dLcc2A1eZ3iJjtUJLARLidViSPikAwRTDuEuNo",
  "key14": "2dTGjLXeMw2JeoPqh6AtENftZipp76iE8QBGn1qfKYzCpX7U7hGPEbjToz4UcezB9Q9jcJ77axVJ9Yx2BgLFJkdx",
  "key15": "4KrqZihVbqwqTcaxFgtwjSdQfLbkWcQRWL35TLW2b14w3iHzEcTjj7R6tBj3NzsHi1D7oxYkp8Rx7wrkWdoL28u8",
  "key16": "2dJisEBT6o7MqxF8zwcSFqNwgvnG3KSS5JuWZeBih9tEaD8HvS6ikDunCmRzcujbVzTtMYdKvHpxyGXWGswhMqyR",
  "key17": "3i3QQxd9mE9mGp14uttdQMSbE6EPpbsnBQq6cdejFsgYksjxfpggUKE8NoRnpf1W4T97cfwqdpEmEn6az6VYT5y7",
  "key18": "pZVirxYgYZvPgTR4x9oBfP19r8Z65kdJhCHehQRTGrPP6G3xzcwuHGyXADcAKVmv6mytbwpT1QuKMWDH5V3VsEB",
  "key19": "49h7hpEG4yndCV696nYJha5aqzKVqynUF5d1aaZvEDGm5UFDxiXLcSgBxN8jkaeB23CWWPgqANqVhz3CX6ksPG7P",
  "key20": "3iTg2YudmuPgPVPVk6cCoBmNvjEvnJjpNogBX2UcfrmgftVQyCT1arX62EwZ7uvYF8jgJoQ7mEh3koz2pEjrvLNK",
  "key21": "4C1wmaWb7yDXxBpWD7BKU7SL3xnzDcMsCtBbWMJAifqMqivXk4W6wfhHShA4jt5uCuNiUVgViShmTqch4zkprjj1",
  "key22": "R5wPMZQJTZqLpF9jKkPTrSo3DfKMf84YpG4T9RcdenzkxdTZ85b1RkPZft1Jq6nZfgGGK32w3UR2N3rkjYR2ESR",
  "key23": "2WbFZnSZ6fDiwK8QFfa3MC488D7BuQDSDY6vBqtxbeEho2g9B6BrAyqbqWW3fvpYbMNuZn6FXxXr7BdTqd6ojfa8",
  "key24": "4NKonyoh6n2kknpkErHBv55brahiqcUozfKbh8WmXcPKCBodyTUB85n6DEtZ4JQat9v5PdUk3w1TVAr2qFUcQin1",
  "key25": "5nh6Hnra2vLXmbkY6NvwD3HyKB8PJRAvRfUP1ZzRnYGvPwJtLmGJCyjQ8z9nXvy9t9MDqZCYCR69Qv4WN8Fo4nQP",
  "key26": "GjHyLtSibTZpFdGkY27Tkj9XiXiyLGgu4nVvNDXSh9pE9E3jbbf59Xce7diCR5QXSiNC5Mia2RGQrHFc9cgVnoG",
  "key27": "5hXt2xoAiU2hkJeVAH3eFSQb5of8L1H3cE1f1MQysGSvxDwRt3PMECg2GJg2t16rPZQLBZvKWgxLbn8H62MtWuWq",
  "key28": "2fWmn3oRLDomXVFHm6W2BbydyhUq8MCsoo718wcrPjtMnJLDaK9hWmzfFS7akLLnVina9vtq4JpzC2nTbaomvSvX",
  "key29": "FY1wxY5yjHQkpHzaknwhyPXbxGCsiurn22gcb3jXBKYnvkTcm2SaETxpg3am35SfhZvryKjVmKnhcTKG199Xu7Z",
  "key30": "4Nkik6dtKMXRMg7WtKFFHu6WtfREAvF5H511PvCVRuEWV9Axt6waz4DecDcg2VQBF6ctn8vF3ixQVT6sa1k5zsWx",
  "key31": "4zAbLTieBc5FR7V39ZVwESmhewF2a4qqeeNMSKK2MGLiXpefVXZgopoj1RpSv76BSSvHL4RZYtCDNEFR8zqP2rQq",
  "key32": "5D8R5HuPew4W2t4UHqj2CLSXcRaZAiEp1mioiKHHp6URiW3WHxohc4ToaCtp19gaeAwc2cchF2rNAfWFaXFErW7V",
  "key33": "vCvfyDtXdh6JnSabMGCb9rySxguekJrdWS55o7Bo3cF8zch3L8LP3S8XrzFKjesaNFQKXRrR3dZpUs2ycJRMNRv",
  "key34": "63t7ajDsbfoiNqqiJjs4L3Np2xF1dth7h9qYTVBs8NzdKr4VuTipmcBhUEGv9nnv658E8b2GiEopZwJq5arDfEu8",
  "key35": "2MhwE9fbQLFmjTLyd8snJ6M4SyUGewWBfdeBBMkaXv4gJDySccRuWDyfs5eExMBFhEAiDm1Km1QPoHKQnCsb4Zgh",
  "key36": "3rHHpC1WeH7hQfDF8hMGqq5L8yt7uuTUYojDsxn4RZ7sXLxpkKSc9HKu6br9ZbCCzkuTC8f6ga7ne4shqkJEf6RB",
  "key37": "P6vzMQxHfkT4eNzHd3z3LfqVUMDRXry1HEWaK9f21R6hvmZeewMm49nChGqMQdMRj7gLiNNrUqNUinxuSvWJzKj"
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
