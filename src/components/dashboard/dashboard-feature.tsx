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
    "4vvFtbB4FU7vroH9yjdtBYwjNcBtZmNWbJGQGUBP7Awp9uZSG5KuB2R4mcTcCD4dsweY9Azkpi9SZKBURLcjxWZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jWw2y6Sg4oP3oGnkXkMrHJxwW7zjBUt6Tc7X74JdbqqRWXpJinT4bG6mrr79zkRQLgyUbkqHCTmMtEtx1KqaX63",
  "key1": "2RxToewdCX7Eh8GYiz6fd6GmdMEo9ytuqq9RVxoaSmt28CfZPiApoP2FN1ZtTGtwvPt2Crk82oYZpjkvVAMhzsE6",
  "key2": "45KeQT4rb1miqKcG6JB5TjrH72SJyBcq4pAvDxQVBnRuztiQxVDKuoLDVMykFdYBu195N1vCy8qYDL6nXZRej3oM",
  "key3": "DnwnSLU9aUGihbJNLUQpFFNb7cSpr5u5E7gqXZ6g5Mzw2amBQ9MLUMi2KxgdPccUx1aid6KKZRibgkgmDgZ3rfn",
  "key4": "4hZL7FTUsgUwdFca9Xtbe5iMyReKxi6jtM5GEY5LKSsQTLYt9DJ5PgcC5FE8ZbCdXkdztWPvLh3dSfipN1NDGJq6",
  "key5": "36QCGtWuSLE3My2WkoSeb7hyhhk6sHAoqBDQVdM4FMAqp5w8rvsHEj5xa4ecjsD2favUQ8jmEus1Ljn2Uc15kdNh",
  "key6": "gn6u16yokhNykiuqGm8KENB9iwqbcvPGvwfRaNAS9HgWdR5CVimMEnBq8br1oJpb4WVzqsfTccTidChHpowJCuE",
  "key7": "35xiYmgB5vppuVE7SkyJVetVBcpMrcQCEhmzYFpsqJZNVG88ipr2dPDLtu2gfAi9SthfHKp4EQHRXu6sPse77V3P",
  "key8": "48wiPJcLB42BYabquSn7h2bjADsE9jiQGYLyQbMc6SXR6B9ps8V7ShJp6bZLiwtPjNxUSXMEvdBvQhnzwQ5yc7cx",
  "key9": "3vrHEf8ptDM1nLogezhpQQRD8rP1rdNDzktEWPbGkHn2HV7phsNJouM7ZghEMnKFVDu68VnxShPnmdx5VwAAjGwu",
  "key10": "5ijponJJCEmZSJKdpab6iHBam1pSLRniAokAbYUhG2D4dwybuPtinZJqKyRuMjr9aajBqkjyYWPhPZjQu3UwmyLV",
  "key11": "4xNV2F8shojDN9RdrPPFq5sod2PtBnxbQ5Cmf6xq3rJJYxmzAAmiGUWBYtKc6duKF8zJQTmMEMPtcNpCgxm7wke6",
  "key12": "5EYk3JtXDHxihqbseCXwf4XfXJRzBnw7PSeY6oG9cfhN4MZC7npN8i2u636V1jYSN3RjavYkvwaWWbMey2apSwNB",
  "key13": "4jQmrP6ds6vCRUgCZqLaYDQEVF427qHVrT4vgJ8QB6ypccHDFAfyQQj7in1tjAwjfGLYQA9LpaKVP3ChiGGwoiFu",
  "key14": "3hQAiLeNPEv47k1kjic1M9L5RPhJpnwS9Cc6hMWFdFK2BTRuYsrZXqmU9mB1kNP288gg5wZNv23XPCQV9T8hVuxZ",
  "key15": "2pCVjzLpWiW4b2uvnoetwLSgM1JQbA5VredeHheHvfyxXnBrBRLow9cbPrPFxvaMYc65T5hTyysGq6m584DnJ5WN",
  "key16": "2yRmH4rc1SLVuLAW5UYVBebfFf4JkomZZ4i68LHjkDCwYYSRjfbhmo3dKTWwsae9JXG55vTXQhNpJ1dsXNZsvass",
  "key17": "7H6XPsYtThMuyxXYEgoy22b7hypbkv7M9m8mSDGxzMNS2x14ZNrfMjHAhqpqEbK2ki4ogGe6JJemVQN4jp9mcpG",
  "key18": "2YDv1jd5TMWc9TofzSnLJ6GKTeAZb2DC1dAEp5JQqGWe1xD845jNZTFxeJHvpc8CvcHxHjTqcDk1AMaGQuCQwTNz",
  "key19": "3WuHyVNkAkvwhidBGQUt35YhtTAeiUrR46osRAU9d5rrNB537qu9uvaUbni3A4sYg97xEsXaLAdx8yDLe4Lo592u",
  "key20": "nrC7ww7gFRgXUFHuoCcFzTxn2s2AnrmnL6YxvA1bXu5tZBWX4UT96xwF9j5k2kBVctkhRjCztKjqi4pc43ksdct",
  "key21": "3rrjnGRPqYt6S9raps4SUZZNxZ2tozrgwzHBNLy3FATeXUTTnnPfVMuEpbieT5sDHFRLEp9KhXd5HENzoEhRGgxs",
  "key22": "4h2aa3JFPswDycfkRijS4DgaxNdnh7Pgh4D4QTFXBfdHNu1LS3ig4w6mtLx6gdB1BBMZtLCBwU9hpMTMLVY9z9VM",
  "key23": "3XE5AuqsmhSiukJXypiv5JHWRMcRCMAWWEg2tFRP7pKsMAxdgmLbyEEoL3939J9hvDkKcLwFcuagnqRAN5ByCPn6",
  "key24": "5gTm5uUgEz7NmrVMhsN5HJVRqbgGi3EzthLnRN2HaqC9yNxduVEoBxKnCVAyg1dVNYyfrTpcX755epg14df8UQJW",
  "key25": "5FqsutdaKMv3UVKfFe6PtFoSXbsa9cPnn3oFouugMw7fmhP15AzWUGPJomvbW9jGcA5tR8tBeqEozM88xgk8ssvi",
  "key26": "LPTqEoHPa1bzKYuNRyVNdZd5rNgYqBvULVCDpzUTVLjZ17YdycijHiPm2y6tZVCDi69771XGjpcY96UgbufzjAL",
  "key27": "4DBxQxob1J1j1F57qexSPriZ1nq3Z1qzDrh4eJspf8ePf7PgkcoMbWz6SbiLfk5meGwHKXGXfJit5gVV36ZFH59S",
  "key28": "4Gh53yGrZwhYKMHa7YXjMV49Sk4D88akfVxD7gkK5jNY2rtwYKWef8nPyuXp8pT8JdMJwV7eNBtWktk893m3tr4D",
  "key29": "5DZqCMe68zwoF5Sv4tbx19GqvuChPSqvTwi4WWbsY231NbsqrystSAYLdqJNBv7gSSM96jad1yLXPZ1ipZnLPm9j",
  "key30": "pH91qahy17qFBi7BwaoRP7qbLgQ22wGyZgFSp2JS1PGdyKU2W3XhWP3FdqrjHQLbeJZth9cNTiNNWCpPwsNYicz",
  "key31": "5rV6fNAR3DXiVyv2pVSrc5mJcLgQFXwsqGFNHBv7HB6z6t9Pzf1TfEi456Hv27rvyo6ggFmNiDaRXXbrDfPRMwed",
  "key32": "5RFT968MmWBPB4oAb2p3GqbSSN9cbTt3uHK4dUwCmjC99FF7qcBxuJdy9xroMNmKkvDBQ2Rcc5C6TwAteDW52Jrp",
  "key33": "446XdYvfe5wARixXp7yPWNaa67i8sKitCpnoGXb9kD3m7hMjkijhGUGqupQ2reCTFMKzj6wAwXPvmzU3aQridHPo",
  "key34": "3t3cc9A8g4pGj37i6q4eZjHRw528ok23PELKaz1W9YXHfRaPvnXbpXT1nommzKUgzr76zJR2TXHLuLrXc8uK5SJc",
  "key35": "czHYAHjFK6ZzKRpt5pe2yXWJnrq7wpbhSqnSnqG4sTMSJ5PUMVRFuXdcGYdj8DjPBsar5tDio7R7aN3PTg1xZoG",
  "key36": "oxqV2W5H8fCH2975yw5yCY58bKZNaN68xRayMSEFssm2SYvVv4tVatNSWc6yowLmg6C1rPWaMUQXeVpEHZeBVFF",
  "key37": "3y9kR8GfuTyULst3CXXX84nuETVfxCWsFj3HeUtbq3nC8D1HmHxYYtHSsXCZEjkaEK7UxXWrBZZrhY4tyykvXECQ",
  "key38": "FiuApBFUiEkkQy3SQxrrzSy3dCahCtpw59Aqkx48vuoHFiqQkPAT9dHySXjdpk9bAhAP3nU7mszppEE1mukaa68",
  "key39": "4MSoxxgZgvWmSgEnGpG9QUKcXntpfh4ji8kLc6hpTq2XJCfhvQLjXKnnavnhiCK3cNeb7q2QN1qtXRYZaNgRAh8N",
  "key40": "5Wp8bYtRrVCa7K77EqEosQFdojoVVU1nPKwzGnhQEeo9Jr8V74GdbFgMCHS1jAxXzMy84oWqfK535iqUCrsqd1kH",
  "key41": "34Tg9k64sPGjb9sF8HqaNu5piuenNNqmke9PMjAdWBTJbkgjjoF5rZc64FYLHGfx8ivPqSQcPHSWafYTewunNqp9",
  "key42": "4qZHnmUuKCUbxUqc5kxkePESR1WuD9nT8iaER9XyB8nJ9Pcx6pU5YB7Gpryszm7XVH72n5YTAnpG4xM2jLhtfNrd",
  "key43": "2WmXPqPnvE2K49CiawUpeGqqkBKZJSdyjjbcbFgSD8NBWyvEKQmvzvrNzuKUKSVFzqEL3spC2VZhc9Q83eg9uYUZ"
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
