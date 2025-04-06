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
    "33d2HmFrRCaCgr7Q6KrhZ5S61h9tBp3uoXfvc3USjctPtLwRyuMHivBuMttY6JtUVEkQaoCnXC557QtyLd1UhUPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pthu17aPBN4iQVJ5QZGmcySz43BkEJFxMJEWp2Q3j5nZwTyCzDpjqyeiLNWR8RwzjLk2tBTRCsdShjnYyeF1NDn",
  "key1": "2oyTAy311pogbbB1rENTBjg585jkEWND3YUVb6imrgtFA7SbBd8ZHcHs4LQhaR9R31j8GAYyq53RwQ74dPwBcdP4",
  "key2": "3Rhe4CrZj2swNv8i7yzsG3PbkQkrhvRVZirRqdZckSRb2UZsioNxXqvpSFTub4JZW7XYWNvyJooPXHzdhZhvbDag",
  "key3": "44i9yVz1ceLigvYCUsqAP2MS7eyo8JSkmW35dbhcJyKkjkD8eiRfciP1bHZL45hnN2jFt66LEQSmKotoUZvQWvmT",
  "key4": "aBh2SHQxtsm6RSoQREe7DQAxGSm46dMXGxxSQbtNAapWRJhYXXffoKmoizJ26AbRQXKo3YdDemXdzgLnBtLhp37",
  "key5": "g7nVyKMQ2ZSoBtthaCM9Dyr19dtHUCr4oxFLu4kQxsFD6Kb1WY4bHyw6tPW1QELGR6YrgQFBmgRV4f9eS9ibzxq",
  "key6": "4aFaEKwWzkKq2Rv67rMWJJUquQxmEfMVXYJYgbfCUddeESn5jPzxnRxT784c3Qyz1AydSotRWUsrHyPjhizvtMd7",
  "key7": "5jyLkbZ2C3GwzT6LGyeqLtJLz6wAkLt4ZQ7Zujm4d9KE7WQDM2tU3hPZXzz6swuz6JaQfTpjT27QW6YHgKMt6qLq",
  "key8": "3rKXjHQGX2P5tWMZZysZPUptEU3GdumRPQ2tdZySNaxRHsiyuA86HXNw7sPnwynqMbbSuPyGSBasg2madxLMEV9k",
  "key9": "5rGbZbhUqehBb1ZnuKv4LvdcPheS1BfbPe8jmN33FwYuWVTQB9w6iLZNfHVybzppZHqrpdkoLRxtyaCrvsbquckH",
  "key10": "39w18hrYfsSgV6G12bmaGbQiKpfLEQ3vm7dCoFwuZ7DfihvHjGNJ6eE4DeAzPozrbSsgZxfLxNrroEJEGNTwu8L9",
  "key11": "5Grrj4mGKq61fZ4FeozeaLokSydpTuSbAJ3JRFwKFtUJNfVjWhN2tdzS3UfkiRSrw76s1x48qCjwwtevu4BRP1bC",
  "key12": "2dSzsJ12oAv1LHVZUUPvHos6B5R7H1axsH7qQVQp2fCV9XARKo2NNUUZYFzZToJqxwjJhXm6fgo4f43VE4EJUsAb",
  "key13": "Y9g3UWk18JsW4pK2YdTxKAihski4T2cB1fNX9PsYd6J8uCqeGU4TopsyTafb94EfEAATkPQPmnMxRowBp7rU9SK",
  "key14": "53vP1ZynWnbMtn83DibpXJwy6tPw3KVvDk3e7fst3GvRYsckPSMAfBsSvYLwVgr2i91Zo4b677VS4vHVeuFFKUYA",
  "key15": "62kvdV1KozSjeoxvVovwTh6pDi8ErymbPojDU4cHrtd7LnzQWNvf1chvAmQUTK9T3F8wLRV6yQxLxDuLwffdnPCL",
  "key16": "QaigNh8dZFu3NDdTKtRkQFaaJaTwQiWicrzQZLy2pqavWy2UXkSroxNQiXbEALp9SK1HRL4mZb7wT6J6pBADbYR",
  "key17": "2UDZdbcv9tSsQSzunpNWNjE1bvduT74A3tpkWp6jumgn5aWQFgVRbA7eLawyrZSmW3JkfPZtHVFjmVwbncztNmfc",
  "key18": "qGDhbiJBdFWaPye9uFuMBEFYZm2imgCUJ7Khf2gRLWcPVGwb6TVXYYxe5pJQKjfHAEimV6wxqdBvjh15B2xgCZk",
  "key19": "3NkE6PhYeZ3iEjj9VojGXovLBCMoHAbSDUo3V66V1krohhJ8MAAKT2392j8mj79Mr9rFLgutb2FtfXeDQfPj1pH9",
  "key20": "5qBLTZLWshBiRfDB8YuDMhz2UkPevgpjm9k4AyPB5qHxvMqH3K25rabzPV19yCMaX9rrGP1DguBcRY2UKyaswEZp",
  "key21": "3qg3GTUSBwza3zFkXSGPWL6w6Q92trahxAUdCFfPgKS2ZrqQsjyDj7T9KaeycRfw1F55DeuG8Vud8S5ZbGozSmSB",
  "key22": "mZD5EoVpNN7gQCWDs3qkuwRE74kNWYKpMv7v5o2FbQ6wJcuua6ZWkGazCStbRpPBq3hGPSUho5P3iKv46uWgNKE",
  "key23": "jBuAmuBnKqoisX8L5XquZZSknWutue6pzfN1971KfjpFGkXSiRjXNiYMrcZpf3vYQXJt6MwWH45HzyeSkkx2tjL",
  "key24": "4rnXehdJyAQxqhEBXW6DEXnQ1kA8HG1e4iF6nFerbtVvXdqHpF6cKRhYCWdZtyzrnXdDBsxEf14LdGaUjNXskBm7",
  "key25": "4iidDM8xrnDRYZcHn2suhpoSFGKuJcLSVSkgNjzy7N1PAjKNnY3ZwC7C1uCKPbx1becE653xgrMWRnbzyZYCt922",
  "key26": "56VAoFgqyzGYXxzmvgP2FDsR2MGLv3F9t2e9hnpDTNdWRHYaRQ6BMqP6w1jarjiZfYipns2bcuhPR59ite3X1W4p",
  "key27": "3ZNoucgSokQ8vYQ4uCJ2RbLD1jbUqjPkmoD5DhwYDqGEwo94qAK2WWTMqd85B4vDim12FCVQmj6E5ijR7vW3NonV",
  "key28": "zkkYmfrcveF7c2pvycb8DpN2NdGD1XgmYBdvGqqvY2mUGBC8gQFy3CfPiamXCFZLnaANTWa25HaKb4V1TL7r9Dx",
  "key29": "2PJEJwrHWULwCcg9pJrugXc39mmAyTcR6QnxTLj8iLR5ptTM3SkvDN3HP5nx8CK1D1L3b3ZDRcmFXiMq7bxQHngg",
  "key30": "38hPWwkatdjhKQwftMWSV33oYb9UrsMPC6RoEvwZ8GsbcHt1tJHsgeiHw9nxMRyk3iJabYNPHwtSWfvHwKokUKuF",
  "key31": "2vXwoqW2GHauuTpYMAdkWRcvZEDcAiFkF5KmR86CbSLAHJQMqBfJyP79EsYn9CoaSouygkKG1smFC4RnAwSfWaZW",
  "key32": "21EWee5i7pR12LpfiJXSohrxegnpfcrzqnwp3ojSDQ3yiXF1XBHdvSQMAvMbkrWsvWoMcwp44kPgx9ynqX7FoVen",
  "key33": "4SWEQPRX88dFKtcgs6p4o65uDnt2X4xrBq4GQLSwuA7Mamhk6eqXD6Up863ZXPGKowj2t8ynRED6dyRZNoGVvVUq",
  "key34": "2uhQucjcjCMePeGytvNRh6wLcrTLXQT9Sb41ZsRKY8v4UJqpytfmwJwn173WEhPNNbK3944Ar6SFCUUhtLhAgUE5",
  "key35": "MbEbH3MHXLLQgqWTMTwmGknE9KD3gGUMZEthLpKWYoaEnyXmwgECUFiSzqkhV5A8tVPBjvRQ13gyJupUq8hQhwa",
  "key36": "QZSZdfAY2AYm5fZNQwRxme4s8HjD3KUWq48qTfMbFRvKjAhSiQXuZsoBvUmDq1LHmnsEF5ozjDtRcXpxEsiqUsc",
  "key37": "5Q6K4h3vU2Gk2ApzxU3cS2NMVR9ZwQeW8MVfvr6HEm9bFaiNXZcWZZbg69Nzftd5ALtBuuexhYCk3xk7iyNEga9j",
  "key38": "3DUiRxFxh7CMuWz9NMX3fcURr1LeS9pcxjo7BZ9ea7qTMRRzXyxFJxBMgXyM3XEUSdcgV7isKUvH6fhyFVi4wAm1",
  "key39": "3Jd9N8S49mvNhfaCuym6FUMDgT5cKZ1gCLV44nSMg1Xq8zfBnhpDvTpiFAX62qnNTadJc7189WJHGNSQytYX4Zke"
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
