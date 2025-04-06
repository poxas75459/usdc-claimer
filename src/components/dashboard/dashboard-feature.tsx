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
    "3X3bAhTEquKonLCeRYUeHBSAdxYKS3DeNcsMMhoEBKj1fUCt8kSQRVbBw36Wdg3kFyCU8LVNL2cAm7U5U2LaVFtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2maGhe4jK1toKAEvrywyrUbJ1eCsh2ruhxHPkt15xKtXTTZRGfzMZQmTD6BaCroAdJJZtWmtzqNyzmQGWMbHimRD",
  "key1": "35yE8DCo5ehvF9cTLhPiQEq6DHPshDVhepzcCVkfpCgTCaCfFftGffnPHUfzaKUVU4jvghkrxJ5YUAPoWMJmvz67",
  "key2": "25k1Snkzscq3msXdi2BuSE1Tz6RysWQxkvgaPH3Rwx8iL9pLRP5kB2Tzqu8grijZmoQxD7BbEib76bza7oQtwe2W",
  "key3": "3VAkbFnuKEyP21U3xhk15U5L99QZ3Ff5LxdsRPio8tzmokYoZ9hNzDUqot1tEAez7kxPsLvmxJ3bedN2ZwfZ6kWM",
  "key4": "51SjgP86eUN18zTKooch8WdJdCFwnxTLVAvQCZHKBaw6Wquyi8iDr9kjqxeNmyMzCg1duFJgA5HBM2K344p2kc8g",
  "key5": "5cKdgHuQ715fN2dKndFhdtUad5nH29S5mQ4HbX8aUgamdM111bvvxjUgPNLcMBSxxtXcoqKzUV8VQ34TchpNcYbo",
  "key6": "3iwSWKKHgLHU1xTi4eEK5jCnsmDM4nfSzffiwPAekwrBr6CYvww5oezeZHBkBFVe4sJfAepJV93jmin7xbXi7s3d",
  "key7": "4eA6B3Zvy7Y58uMykBeG35guA5DGbtaW9RtcfiEZKYVq67mkNv8n6y2spa3EWCgeutjoQZbn6bhTu75CaWxx12Y9",
  "key8": "2D7hkZnkNNBj5yoC664YcGLgivLpUMU9PdbmcoUvHVVjHKrmnmK1gHVCuuHteKBgcASWUWg7M2SuuyLfgzEpGmvL",
  "key9": "4GucDtpsVrhMy1teMGwfUP6AYUw5bc1uasBCqUwqVSJyLphLzJcmTt33gBA31Umj11R2D43JZLTykpyJApaowkZj",
  "key10": "4vWPRbexmEkMEHZinFBYBaCPs4H97xLSvVhszCMSZximD3QrKZqPdBZoNrWxMQ4RzzwTzaDmU8Tb2SxR7RWy7wMx",
  "key11": "3pCKejg6y3m2C57oBWie4FryJQSyiDWZeBXtmvDva9yAAzgknksXQaQG6ifPRaHmxeoggoted1ewyxDpph8Qcybx",
  "key12": "3Ag1Dkuf84sJWMczoKT2jMAsRzSUYxLHRh9qM3ozbxErdkpN2hRT7BreomH3Um8knytt43XhqoLvLj3mVGPP5P9n",
  "key13": "5CU3gf5orGdpVqcyYr7w5kYvMm9jrgwyaxiHHFdFfmQUqbfoq3ecmyVHigaTtvG22Ki79C4obuM6mNHd9uLrGmxe",
  "key14": "2XVC4AKGMeAHAua6uUhyxyLnp43vbmxXcXgWvW7uvinyoyLx8MicVXwE4k8CbSzVPDrcg5uyvZH1sM4NgFqmwJm2",
  "key15": "42FivTXB61DNVEbVwfFcKqzWEH7YJUmmzf9dLQf1zNqkNZXLmsRK7hWaZvWv7ZRoMy3Nkm4wgLBg3Xk7qVUL9wT2",
  "key16": "5ttyzQRVEGQYB5ACAKAsYU6Rcuoq5BbU9zDswaRxKyQRHULEvNo7c4qJMkTHgNPJB5dRoVtw3HTiMo3uB4wbaiiP",
  "key17": "3GUVAYoLLqWkhwGoxPCC4BZUcmn785QoUz1LhzJd9YzC7LqfVznMeXfmAD84nn4ZzJLKBsm2yXTEeofaZfgXHYPD",
  "key18": "2CpguYi39V97Vm4YQpZSH9wYbG2SWUYeE1d9SdDQ3LZ1FawUCEUeitBHPtuoh2afhyXRpkTnyp97oLjcmcRCAwqU",
  "key19": "5CgG6xxKd4JdUDDTJc66fgUgg55U6E3fqnYD2DQUDwTQYcSsYbZcpgk4h1AFNZsjz51fVU3BfuKxbDtAt7JTZqMQ",
  "key20": "5Rxv3VUbfECSrhZJYd9bkRw2KMbriG1unFL7pBNDPWU1M3wSsDwL9nY5y9UCW5wzLwLvwJJEn2BiaVEzzGasZY7c",
  "key21": "4jCejAXDzJBk1UKPj8BR2Pj7PJZtykeMaQYwjevihgpW93MLYs5Uj8XP83kDEtZZauAwYUyNvtAH8FwP9dLS1TYc",
  "key22": "3F8ZD19xm8xqf2xNRSBXw6VLe1zJLKssEbcGYUv9krTvDhagV7Ai9fhbQemvbtBeXN2VFBGmC2zny6f9Phg9sWzH",
  "key23": "3cBVJRQYEPEadgXn5cVBPUwpoq1Lb4UYi9wfYix7g6WU5ptsApBccgWWKPfadDCVpYxnGGkEjdPj7wVS1Rynwfc",
  "key24": "3C2urbgqqLd9SN84Q7rMYFXVtmKpUByGzrbW6CUCJG5XwJkj6QsoDCkdzUDnokhgxA1uq2fZPKMKqGvPJK1HCWAt",
  "key25": "YzTS8fDaVZKLsNmCpbR1HVaBEo1ZG4L1cy2L3xz3ziqoDVYhzZ8QQUQfgpfiMJnwU1FhmsJDGECv4QpkbQ9XqBh",
  "key26": "w4aBSPpqEyQyDRokPk3rQ6yCnK5Uno89bnMRuHZ83nsUD7QuBGM9hNCcEZwviRNn9HJdLJtp4BFkJpBpJXc34wV",
  "key27": "2993q5UEooJwtjXifFbxNAjwZ3thMyxQspWgA9KbdhWmr5yBLuToBxAmEV4sWLitTGpfSA4AQ6zBGsSQRgtQMhCu",
  "key28": "33qwHBsBHczavSyUfkixd71UH4A2b3faxgJGVta2y3Jz7Eom4v3sb2usU95QZV1mPPkbRnj1pQ43gcvCXmZQPv4h",
  "key29": "22BnaDHvhnqHfNxG7hy21GkAVuqAoDr1qpcJRUbyrB89AHCom1vmT94Bz57tdLohceXVrEaPk991819ftVrGuxrq",
  "key30": "56LXNcu5vpUC1RnzVVZ5oT1Jsgiwkmw8BAA6ayzrn9D85smvapBMBLMwYKffVm9RHWEc4DJmhVd3v7dxsqNSv8Ww",
  "key31": "WfaBVw9h1qPmm5uRRArexRbV4cvrCqKfYmpHWvNfnz9sXADwfnkjxhphwPo7Xm1jWcCbMSZCHWBf3aeMVQ2v179",
  "key32": "3tHRLE79rJ1Ju15cXsdBKxcsug6fzmFBJbkkpZx7PSCagj9aWCpxYDc6tNyvaJHt4BG72WqoKVoXTWqWsAyRjU61",
  "key33": "75dWAas5QDZwogLT8rDzhMqCuqXN2HZiLrAiiSza2xRpcpHe2YRMr2WxPtBnoskZ5w3B75N95KMXNimtwvv3j1s",
  "key34": "ET2rmYC56bvMJZxFdTkaDXDfZDLsnbwcULkKFjGFabbwcTsg6YWKENUjdf1oiwBQhZh5FsdYRsUWhLS9QVMCNcE",
  "key35": "4ZmfKuuMZT5NENy7crbmuwg6BruVDnysCDA9U39bWNoMtS2cnQqoGvJSyaa3Ci2HpYCNmywNrh5Czn5K2n8zNGXP",
  "key36": "5M2vEtp9jiqS3CZCz7bK6afgwUEt1dsVrFxAB3RhNzRdjQq5AFA8AKT4H59nLd14jzwtdRADzh9VqYXwrgSq6odZ",
  "key37": "2vyLCX8LUDx4NZd1zU147mKcQ2FY1JbYHGRRs1iqwCWHuB2kf8qudEkENFpXi97th54bwtW4oUMUQN7MHKBHKx2Z",
  "key38": "5ST8ctUqc6uWmbBcSbL6xXYhLQqjZxCfvRpCtoDpfWjBCjWKdwpGp9fUFixN5ZYGsNvCFopmDw3uNKSRB9Qstfiv",
  "key39": "2H2EMZ38qkDSBkWhPCDwNLTMgwcMgv5V1mmSucE7SsS5D7FTUHmfbAM8d6hEMt37suFNwKoMsPuZLwrWhRsYYZU8",
  "key40": "4DYfftEsua4mpGC8pHusgxvYKeSYdG85EWFwnLqU3vSz68Y6KE5HmDfPQ4tYJigHrE4UbaKRkXKBphpK6hx2SaJB",
  "key41": "6KDzwYHX1EA6u3BvTjGZqsAMQaL5amHCdGwqRhzB1beBwvzAYfiiSMf6gxU3yQfXHd4MwDqq62FXCJhh3iFTtYh",
  "key42": "4oCa6j9f6PGyoYQmSfLyPmBi5jwxqLuWnejsYwLT1saF88xvMhNgEGJLsNrF183qWdtRy3iJ2M9eBd9s9dmijeqi"
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
