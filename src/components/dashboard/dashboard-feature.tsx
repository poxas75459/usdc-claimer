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
    "2z7KTbuouS5N8HSnmnS6ubS4WK7nGeqt3nTNsF8nhsZHSwrE1CTzaT4yutpn6WL4iTsaKTTgHwGux3aHweBDoFe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uA59jtFmhaDcncq3XAR6mSUUiMxYo8NbFbGakrujbQex6P99eiKcq77B94UyVAWeBsxJnFDJpSmmXk48asFVpBe",
  "key1": "4QYLxmATXiS7QzgooooSS3EAiVvWEvs2UedsqoFajhwVmtVFpj5LV3sib9PeKKQBRzwtBt3LKqMQdWExu8dsFuaZ",
  "key2": "pPBD17HxGBwDH3Z6ukf4QcWfVVmYwv2NGbaNf3raAhyrsbgYFxdNvpUXXUYGGNPL6FXs75ABjK9uRD7Htrmu2Qy",
  "key3": "5ywECsLvSRDqSrbiaGQnNia9HcUHhtynQxgm8Sv9KSm8jqpRSCVyomGDoSoyhpgYn8vHhQudwTW7C7j5s96sa64v",
  "key4": "3scMZH5s5GspD2Xe8EHDixBGSnpmdkE7iCr9sWCkAZj8NZ8g6sKaDgMJ9CqZZeW88MKAubBKfhVmUoHXor9eh9z9",
  "key5": "EWCpLCd53mqjgzD8kaB8N5zib7T51V8DRXxBNWjE1sU3PywBvrrhuq1Byhb731EFZK1UWkF8qi1s8iohKZBxh2A",
  "key6": "5fVBGrGFWSbS82iQgbAN8wjZpUZ3KL95kcBjy6ShRonGkYqAeC53wKHtj72sCY6odx5NwqFrUKhSi8nuETaAxXSs",
  "key7": "4Ma1juRvVofK14BMzCqA2cmUTSXPEDnowzKfkYBfP426k7rQkuxAMXbRQ5NFew7rUz6rVHtxTTRg8SXnbhdawSFV",
  "key8": "3qTR4XGV6ffHpnvjezm8yVbzRRYxokjVF8ME3JquNYVfJ7JYRDuw3oXsPoJuYN3bkVmveCniGZreBnsKrWLNpgNp",
  "key9": "NCPgDkK3jB6bNEBrK9mrwdb5CJSruny7mvwzBU6LFW3D1AmPFJdhLxwYpXTrgaUGvDAsuA97SVytsAKnVFg64Ud",
  "key10": "2TGNk8n1VycZDssdyzundAxgaYi67dvyfWLyV4fwPt1RMGoyYkwyJ1C2xLMQWufbysgdeFqKuMrsjAXUKMbdt9kN",
  "key11": "2jkruVw8RcBvT7CeDJNizvdEHk9RtkM8m9qrLm99Syxs4B5ZiskmtvKV9c7ksuYDB7WrvmmPg9wiPGGphTAJEWHQ",
  "key12": "3ko1jMTFL83GHjT3JLY4hvzyg5eF9PWVvAiFNrcmRYUiRazAFmm2nnwdvxZDw6NSK2uWSW4WQiBvpv6H3r7KLDQ8",
  "key13": "5hyN7fNVRvmrWarqcdYsRhyHPnSGvy2s4pHqEStVm1mfwyP3W7bQUFM9FdrStvn8dv9Gym3Kbid92zp1TMgxeWS6",
  "key14": "2LScXfQF4X5Pim8mRawu3iZUZ2RDy7bNh5SUVnDhDRJWYMt8Y7yktzrPL9utnLfzAcUERm7Sd3J2mHX3f9FJPigq",
  "key15": "4wQkTL3aSxhUY9LRzuUG21DhomA8FsUgehab9M1aZffso3xsB5VS6HwZsvir9duBxQhvP4acXhgTbfE7TXgfioPK",
  "key16": "23jPAMLfR3b4DpoE2TNo8AhnoGUXkipoJ27cPqyyKYKuWVEgmZmvxX1C8mE8ed8YLKcfGXgvc8aJMEZHMZSTZLD4",
  "key17": "2gYAdFki8Kk5qmn9t7C4RiaMCvhU8WNqLtqVQ958e1Skus7LG1xtX1p13BsjGX2k1krvxMGRjQcsgoT2P7q34E2D",
  "key18": "4QYvrhHkaQVs86bkpyb9R6UzmMWb7nTug7bfovQjKXyEP8hreTVht2MfC91z7vW7Jp2KRPbWJo1VtH5K7boMVFsL",
  "key19": "5TKeHno9rbzhvYGXiVTrY6DsBe8bADfQuxsXgBE8H9RA21PaDo58ThzRcPcn8rFruDugZjsda3ucx1Za27CSVnRj",
  "key20": "3UY1ASkuK5gEVXrph91hHMtmLLCUhAZbZSDXB3zMXwkGYnfpTDdXZWEpjvdoA93ZQBZjdzKLiMHAuFbukw9V1dke",
  "key21": "2vPNyVKrFkMweq51D6PrRTLSSvncZR6YZXhHRzQVtuD5pq4GnJRtTHKy4p6bswPFmbjDEm78gePgZeEdBQN7xbvF",
  "key22": "2bPQSmRid67Q5LYQ2WyZgKaRG3TGBSRGdempnVWjzSp31fRh9MokDDeYjNGcHzgVYLAGcMkbjat6EQGdoi1Lmu1W",
  "key23": "2ZUuRX98Da2QdPC5M7tWW2StscKqexDPa6wbMgJ7CRLXke9aZBALzsRgTQ2d29jjCo9xzdGaVRLUtgYafovfMGwa",
  "key24": "cxDDM3xVJF21dPyTa5em4GaEo4HwCDWD2384nRw1nLDuZz3jQN7fq6BK2EpqZtfP1PtDC6fo9EUpmt2bwLWgobT",
  "key25": "3rqvbxzUnWyVer19qnGrGCempaRVpr3Y3N938XMjNUfMZjdqjAScAiRhXgHgSsZ4z2TDkXmxHSv1v8E5YXiTihvV",
  "key26": "62tJUZqp8Zwk3MRiNTbgKG1yLbSF3ANNLCZNzsBkywwgQNG5WRRuyPhVMRBbpVe8DXUvRQ9VCGPcHNvWgijT33XH",
  "key27": "4Za2yjbD9o6t9CHnYBKDRcj3XUL4K4Se6MVtdRKKNVZXT2DNuhiEjxaCPhV4FKuMAoQNjQfb2QXd1y19MfLCD83E",
  "key28": "4iPk8YgvFV5An4Dk6bYerQ9jQvMd256CQA3pbD3GixJ3ezrmruW2JJQwsJNdCryJ79eQeSV9nAa7zNFynceeQrc8",
  "key29": "2HKSNNgXLMTthQa66YHqVqaFWuWW6h4TS62ytPTr8cmN2qYfhuu363yM9MyfUm43FvubhW8B3Tqgb29ikU2PLbGB",
  "key30": "5iE4HJbtP8d6EreqTMeEQwFUUsvUKh7HxDTPPArH7rVie5zxmwLEeupNAYBdGc9qksEnuyLG7rxZ6DXyXsE3yuXd",
  "key31": "9Xq4Vji2xYnGBxXaJYmMY4CZV6m4uas9yfFJ5Ptd913wYyM9HDyvJg6xR4wcBa9ypAn4hSBrDXRRoxrem3pRx5s",
  "key32": "3A4xa1SrXT1x5GwmQc9eqgNHJcBtkwg3DgpeDjVbSycypoKpdQSg242tuEbJXFznuzDTMxvmoAnFCEvrH1ehNAZa",
  "key33": "4EZZhTchm1FuUB8QY9Y1uigif9D3mKHE7rwsgnZ7Paf6VR5oLcxCCeSbGmngCnFmfX3aB5WKZu65kHwHxm8kaSnt"
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
