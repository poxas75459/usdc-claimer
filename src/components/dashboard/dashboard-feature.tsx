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
    "5H6JYZASM3EdFpEd5xjHzNPDntAez8eY2sMYUQQDJzt7b9wMh8uVN8zhK9sQ11GLW6GdNXMBcTjQvsFHNFMqp27P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51VAk8Kp2mPTc4Qs1trtnApVA961225cJaooUsBxd8GNm7Yf5bYFviUVKLK3hPgjuuKVGpPwpucP4ERE139cuanE",
  "key1": "2zELcyzwn4YEtWeoHHSszqA8CdbXyhmkAPxuPuKHgAi3juLoCK3EUQuUk8gXgt3TarPkeYuQiXANisY52RXdJzJQ",
  "key2": "5ePFqJKcijhZib3Jp9pfxNXXV2dQHN2avxC2PaJpoE4dwwGL3Hr2xajv8Z5fY4NALHYcUbxXDtUoVkJhhfkiqzbF",
  "key3": "Z2W119uYZhXWvhENXNzgdT3Mr3an4hEPYnnisqxjsU4M5cRPfJqhyk35KbQXCrhgABa2V8XbKnAiF6BiFzJk6Su",
  "key4": "4JkaTgEgtSiY6QrVy1SuLZuLXgRQKwdSESMEyHHdj2hWpdo5J4mvzkT2hadVcdavTPzMMDyNiVzM63ZCZooSHL9s",
  "key5": "Z8y6gdQRfBdz2zX1Su9GT1NQXX3JR9AYRHW4JXoshXTc9j1Qt9hyY129iG3sy2AYYLH4hY2jaH74j3B8nRJtYA5",
  "key6": "3MSzQSkLttLU6QyrcrZAJAmwrEJRMEGzMrPkKTAksBPArAUxr7HfNKWWkk4ePCuaLKbBJZqUAdGzEBbzDakfPQi4",
  "key7": "34Z1VY6WR5qbeynovUohhhez9VCqdHgzPo8ovL4Sb1YJZdRYmCMi2rdvwWj66ksmhgkFKoYQ8foemBUbSAAhNVAo",
  "key8": "zTcSvuD7SHEvn9t6fcepaVFYaVHhLk11pE8jkaFg28rWa8xR5QLdyd71gUE82KzXn8Z9Z8WBCkaZqZJVoS1djsq",
  "key9": "2bV5uGiNZLk3pKAiZC4iJdRKgFQ5ReJHrKgMWbPwn5sRvsMrCaVt7Ah2pQkqxQTEDXyD5Rgms2VxvLZFDafXK5h7",
  "key10": "4zXgYC3izscW6YYxYye8mLHYMRCJkcKmJpkrwou9KTtCPBAqAJqLpFhsj4E5LyfTXTkRjkwDeXG1evJQRPavj91U",
  "key11": "RZEacg6tDTSyW2o1LWqcgZqUP8fb68BAWNajkt13YmYAZM2U9yAuSKM1jRKahqVXAMEbiGv6Lras9N8JKPV8FiX",
  "key12": "2YxaeuZGfF3aZ4wMm4TjMG3TpMaaNiqbAj3xE8JiU8VFxazKREuQYW46HseAUMT7sMFeKaXgsM8MrPcu9cVctZvR",
  "key13": "5aFTSCCWAaQBJFSYoUahUxPJ1U15o9ZrQPsuyVAXS6iLZovb5YA1RCpWRy1pv3yjmp56DEQtQR7yLKQxDcpJ2Ddk",
  "key14": "3Vj18ESo7pcsV8tSqgsRCoHMyoGK7fEzNoP1upYAGfcdUcHCPskMxU4cuCGaaquw9RMaCyTbE7KyhEeaeTCfyPB6",
  "key15": "53WrSWUcHxKwSrUGqwd1SSshBpvdPzCiH5iAPhS5JVRnBTpAxFx7via7qsCDChVLq9RsE5bxERk2EDiFhJqZzjSR",
  "key16": "XPRq9x9KTEHxnp85zCunaq7mSAFyvZB8DF1F2XYGpVFrEZfBj8z1AdpJs1KSgRviM1GwwJRWU6CHrk2Gcv3uQdt",
  "key17": "2oWnf6HZTZhVxwcRjfiyXAAkbnX427pfvkyNUvtQ7xwH34moza7JkNVcv5w9c72M1YY21gNNW3ii4cLBcnCHCQxD",
  "key18": "3AM3utFxzBoG1vHHJiV3uU7BAzwihMYLNYEGQjSqLWw6viK6FJcCC7YFWqsDueh85jDpewDMMCnnhNhNyhfcsvdh",
  "key19": "3E2dbp9poy32Lpw3ZVTUQjgq9NxGDGre1Ak18mXvgwGR1yv9YVoExJQTe3LDYsaKiY4tXTtcaujUYABsphu8DpCW",
  "key20": "42f8Y91H2zh34By1XQXYKvbmsZyi4dqNE19qcSWBS4t17RhAqLpwHAhHyPdnArWwMDaURt4YgDMxYqRWa4UVqSba",
  "key21": "5StU8hpp631jCgNcg5oxVHzz2iVPWXa4qmAovDnpWZSDjruP9YnjnqqYw41XyzuTBVnvT8ypVqy5FFwjNqC9eNs",
  "key22": "43xnf7LAq9Ruvx99iQRQz2DPezjQUtzoPv7nV4iKa9hN4ka7Kdb3Ytk3veZrgiDBTvooBgMKNsTK9RPo9RF8GBue",
  "key23": "3mVfJMJoXTQuJF5UmeK1hQoZPpdgXAFRyZBH6ck24ZneTUh4YQTTzyEh37sYyWcG9UDiGwUp4DoA1vfBbfkoXm6B",
  "key24": "5RimpiQ6jMHhDbC3miqywUCmJqbY9TwC8Dz7cb6doEwXYmhAbkS2cqBHQUp5Rt7Ax7kQx5zQikwjZEpPB3N7j6tT",
  "key25": "39awut5jSP32K8XSsKgdQKN1eWam5sAQZ85mrgycDsj6e7nJyy4tdjp3mnHv1LyCLwSYrM8bRViajBPUpFKENXza",
  "key26": "5P6dSkBugZZ8vYZ6B4hFoafPyVwkKv4G4eegvFTFEa8yHe86pDksvpWepandc4S6WkMypex7eVGr3mcMxwuEdxzC",
  "key27": "v7D3FoMwueDfkN9bRFbLLSaWMfFzoSznk7a3NTH8ybWLvasHxnkwgy1SLMk7Gx2bBFMkBQWZ8NTb8VyJV5hHbn4",
  "key28": "4CMSBRAGLP5eRrgEbfn3Asppqut967QRLotDebJbotYxUpBNmGwpjnJL6YGQ7Z1pTt5BhBBEQnw1VxLEBEUxiTdD",
  "key29": "5chKbkdzhs1i9SQZno5FfZG6tLVbS9pwDhmrPG9QmGjD6TRB5VCuEEPcw3xdrFUjyQhWapMbtfuknY2WLkbVs7iD",
  "key30": "5MB7PuikQz6e3DFfNFthT794ktbTgRi432CKcqjJMzWU82aYbPJedCpj9Jdxu2PkrhkQYDRvcJRmvC1K8DaCG4Bq",
  "key31": "3Hx8JPsFP7wXMK9pfwQUNXiXwNvaRdS6stAwWgwVTkiNknAvMg7Kxaaxr6kBUJmAPm9fcZfB6jP7B9KUMhcaCj1L",
  "key32": "SS1gL9y6gA7ar5p9fdtcrJKuS81uf3h3Lz4FeP54jZZR7r7rGxdbFHXcFoMvd2adZ8Hg3z6K2PtCuKawYJETyep",
  "key33": "3bVrwqAhrSnzQ3hXMoiWu9zmUjKNXdbZxRdmJsEuTTcJ14qFzYWbV6fiTg1dEZNdfzHWyoGDwwwmfWCVNMyveqp6",
  "key34": "mU6zZPGGNHNLMQgxbi1bcBSmbiq5kbeWiAvXpRFYmRkyhweGkkeZjDyKqCEWNVNSZceruz9X6vcscBDRjtjdebb",
  "key35": "33kUv3ayXVnxV1HVMmSE8t7fhZQiUqe1WXVihVvuhPdjZaHJq255aEVDHJAHqhJaXYNnBfnqT1PyHMHfmLtzL431",
  "key36": "2WinCwHBWVieF6Up4gWEJf9Jwf3iPhAkqdT8jr2rMja91wnP7sbf8FfXYTKdEcFWfgRkTvfc3Ti8cfJwV7zhwda3",
  "key37": "4jqP9L61QSD56oBSbFKnbrtrdsxgFh2JHJoNRDs9wPi9VjrqxzCK3uHKNSuYTFuZBAKyxZQPpD4b1av9DHiKjxbi",
  "key38": "4WQyYWPvF1ZNZCTkCEZnEXqr3LgAj2Yp8XJfvAnLpPN1BGhRyN3Q9qrL2q1qQie6BN8gDPt4pFNcpQGiFDWNN4yg",
  "key39": "2QvZdR1RoDK6Wy6k54DEEkRziU4pVLRPNHggfxyMSAzak2rThb63YHkGxajwwTjEY4pKLyMppPTTkvMTkv7goCxp",
  "key40": "5KryrY37WR9KEfUARcUb7edQNyBCfS6nvDWJaScJMvpxwFhCmKNF9Q5Mvykcjz8qPX8bQEiEPAuag1XdQZvdAozm",
  "key41": "3YLkTGn81AxcWzeroMF8DzUPcmfuCTPsqXHMVoRjTZ3rU3xhkACrxTbys3mgiSEpmY9quWNi7zXLcLpQnS2yreDw",
  "key42": "F6EPAxaYF4txjfaSAEymLPyWk9MKWispmvqLsb2MJ5wMVEixMm2UJAhbvFupXZj8MA55j3HHVsqZdxeJ4PWjFSL",
  "key43": "3BupUeu6tJhmUTpC57BMaSxsXpKAbynVQBDzFYsnuBgAvFCqWS64bBqxJubVLncQQ4X7QmHesNnfmFx3AzAYdP4J",
  "key44": "4KfN3KnkPLCdMBaAh1LQ2AMydJu2SVaX9rr3GbsG9e4HhV3AYnP32JvYJH5s6phJXJwJVHmjkhqr7GygLUYLb4NU",
  "key45": "25g2SEQpHDAYtroKjnN9kqx8yVnUvM5Vd7v2KXvZFdheoBq74sm7TsD5DSQ3w9MNL8UkiadVseSZKRtSTwc1FttV",
  "key46": "5nr4k13GEMPRsURMyUVsaC3ktqCY2sKZ5m6YmdmHX1m7a2149vcTVgTNddm5AMmtdPEE82QyciNeP2dHWpshs8wx"
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
