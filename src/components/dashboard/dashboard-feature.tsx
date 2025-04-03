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
    "2oQmokPTEK7CuDMurrShn4XkizTutVcYSc4FKZDxfAF9C42n6kvXifQo2hFajdZwKMS7afh8k2GhRRcK4t2PVkzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XZSL9Lqt1PrCbcvECN23ZAP1cta6uE4gP7Q2yikxgief3wqbThXSDW3o6GMfyu6FYiBy8zTDTgqDpiHAavR4gi9",
  "key1": "3XhUGfMrZzB9rmhpLBu8bNcz8VAC7Y9pJg1APD4bSA643AMPfgPbSu3Q79vymgFGCgxhEZNiuJRARehTk36PyH1F",
  "key2": "67kkUswbsMZqP6LK4To9bipzX6bjrb3oasnEYtnfSMzpy5RNmA9TMX74XLZiMAyPAArpR6Sh3iTZdnhhadbXH8Sq",
  "key3": "48TpUSDmJrDAzYXvanS6znuqruxnPt5ACVYtvwu76LprPrTp4utZPmA9GrcLaQNhFZDvhXrh8GyihxZDwZPU3Q66",
  "key4": "5wG3sghspCSGWj6YL2nGboKCWdVYPsHNGqp9CnbpHeFCkKeP8HdTNdETj9BZgXKZqfEjMbriHyzFPRa49x4N7NxU",
  "key5": "2h6cRuLYPyr7BYSkgyGGwMhfFWG1b8WR2dJCjgHHe2HNXW9SbLaVJbdNr2UUiygniDe5tH4Fm19DigHsHapQz1AS",
  "key6": "5ksrG5LKgW3zRvfGFHcN1tmNwP226P5t1tBbgSt9RaacWjEv99on682iLCiVesnXNd2VPpCuMxLfQmGrWjeDEtxX",
  "key7": "3BopfJvWvzquauY18gr5JS3XZkRCeCcKdMFuB662eFyLmipPKhrj9cVLCpnr8wEo5jBerqD9mqhJdMUeJS28F4up",
  "key8": "9HZxfs8ZB43Vk6i8tNduGu6h4ukhEkBBGx5DsaRm5AghMs4h8pCimJkRTtmwB1eEwDsK58UmiEw62aQtod9qLfD",
  "key9": "2d3TSoxAgMWB2PVZBT2gFwhLQ9GwW1L4g5usNevuQgRz3nhazAN8W6AzBXRgzfC92w2fN52jBoQ23miFjFLUAynd",
  "key10": "5omjM5AJs7dwbE2hDXzRj5qJ69HDqQR9XpQA14X1gnBCCTdtdzdjN2zDGozGJ5eKPbeTFn6zbDdw8RxsqLmAHyFq",
  "key11": "VUxvmbaJpnTmfqSpsB1rFtPZxCqWY4jvpp7JShcBoBSbRraGJ91LiJeJJtbpxJUTjgiWfXxN6qfq5xNUcRPmbxM",
  "key12": "X9CVFcyKrRYaw1mcdg98pz7btWJGvLG6XF6iFLwXf1BE8dLTy7Uyj2Qd7m54v3ykeNc9kVsiYMk1grMhbaow2Fn",
  "key13": "2zfaL54EgHefzXUU2uVUU4U9ovWBsAYShnUf1dJXXRbP3JrQNvzCHKnvepgdVgAMv6kM56nWF9cQxCFgxgftyvCe",
  "key14": "2ktKctL8kEcK5btumDmZz7q97kX1Mugm1VuMYuaZpeT34rvaP2TuSyeqME1YaxBs9rJP7MgKozuQRD5RFke1RwEV",
  "key15": "2RBuGpjiZGwAPWfDPQzS5E1nmLY6dGiZ6SXRzpr4DkKWXoT5sjS66tpCrMUfmfLw8d4wTKrUc6cYDV8Skg14WSVC",
  "key16": "5K2LSkF9WTjir5nobHRVsVbEhF2Vr21vixTqgBTW5JKwfVgtViSU4xPkRi6V1bViEZ52pSYfdfy6zof6URpAwMWF",
  "key17": "2dC7odFGeQQyfn4tnD7FfWznjS3ij1WqstXiVwcGHtgfksfCbYsAoju9Nu2y6j8PQsfWjGSGCBNx5PHHyjtTdfa9",
  "key18": "4pruwtr5nKfsWgeB3RzP9dsRAicTL6KZEKT6DWod4vXB4oocH18XvsoqTx93TLf6QWD7RNUxM8JwdK3sF1wD8Het",
  "key19": "4NDi2gU5UTAQtMc75wMUL4aqRBYEyUHiKhbKMsBiZ7JU764Y3WkEETA6eiLJESgG1x6MSG2ujHhSBJsGs6TTTk3T",
  "key20": "2xdukSEjDdgx6QryRhCDjtLymHd2qiBnPiJ3QiRLiCT1BkhKapie4LkzRdNVFE6pxbuTz7cUt3qgxNcrMovGww6u",
  "key21": "FbWZWnHy5vNJ78xaTZjCYeGRrCfeo48AjVwnH8s7iwL74C3gSJxzStWFJF6wGGFgYAwCQ5R8H3PYJe2nF6qdVPi",
  "key22": "98BegcngWP51iPBe94xDJxNecPpkcTntaKraGTSDTcEroL8L619e7yFxzxtqCnYL8aWF8TwGcq9qj3zTD7dVzpt",
  "key23": "2diUQEVm2HynjrjfC2SJcoo2L7pDxm9kaLR8JRbDYt6hMA4edZA3gi9pAp3AiWTSH5jsf4Fw22Y8GryhYJyuH4rT",
  "key24": "44q2L8J6MFSZtgu4CTfBuxKfCQuryjdxBeTgiAxu7uFUUE4igBxa68SZB1uppGUDg6B1hYRdkeUJZofSbm65R9t6",
  "key25": "P4kC6bVQ7WkLKbWLHpSM6iSTeEr1TDBqd38fsuSpxqVjDdLHXu7poRFnUzoeqC7fdJMKC5osUZbFpBD9PGt3ucz",
  "key26": "b8jy2FWNVSxWeUWzAi3wPMmcCUt2V5WAzkZsMv5vmGoEWDNdQAjUWfw2pt2YbNKabK9FiYkQ7nxBkdwRnKyqAZv",
  "key27": "37fiZtTj7T9Lz9jKgKfDf1ysBUvmoGwjKXFoPQNGVHwzEpVsNVHXg2L3Mv7oU2yxKcg3At3CNLGnmBrxg1XPa7NF",
  "key28": "4GB8695DWsGqEfvWHREobGMynnwSnVHR2L3DdddBoh5kor4ePztcn8GCjJsMmeVn1hKV6rdmVKijFLdPoLfPH5ph",
  "key29": "5bPcXaP6FpTCpKEZEZXGDRDhUA7RSjcWjpvjSCzKLqRoeXuCTLXJ2RyzjdgU8o7QrCD5TmDYsb2x8qFtBdtS46kE"
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
