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
    "385jBoJnr3P2FSuBdRaoLTFWFCL4eXuVE3D1wXBePXRK475D1JK2ivSQJHRAXLbMyzpWM5gvFz7ALdyYHZfC73fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49BdxkfUR1KC7pFDxdVud3S8rURBJjwkLhyVbTTHL6j6cqqnUonCqRZrxQpgyEzHTFxqDm1B2ChZ4PxWni8QjxD1",
  "key1": "3KF8b1jU8fGGN4YwEWuChJNouqPKJiWJFvziqpVsZKkVEyeffH4c1vTtTMfZTwuLYpSBCFcTVph6uv6ZcxH5tWh8",
  "key2": "5evYCriqVVsjrvzxQaKtvWyFzPuR6N3T3gUJzpQq76RytMMMH8oFjkHCKB7RNZzXQgq1SCyxjSxTjRjSJqS9ycKT",
  "key3": "4kBQCbbnWyH1tzNJwYCAQ5T8GTRmBs9ezJe1hLiH7B2Zg1HRDEh6CFdHMhZQjTn7yizccTyWs6j2u1b77En2Lvbz",
  "key4": "P9ErPSwvqp3wbE2usBD3AH7bxwef3iTs8H2c8tqeo3M4dAZKxUyoiF5DiWkQAD1WkR6E5Utg9sjuTMRCPXq3tp6",
  "key5": "55Ge4FddSNrEHwap9psjPn4iWd6yKVsfcftC3s5xPYyCDTh4wYdo22HGZK6aU7EdbYyN6JbAMps29qasw4E2YRNK",
  "key6": "5jGfkAJTXPrDHcTD6SAjeb58jtNUBMLmDpZmgZk8V5njAGupAtJvMxvrVR5PoGuQcrnVVms8cPqP8ANpSr7HwRve",
  "key7": "3NXEUREpnTbYNwpNhFN8e4sG2fZitu8FmWUgzYjfjeSigXBEMVeZqugz2i4VSht8GVvM2koYUZPPpBzBthzF1Yy7",
  "key8": "4Y6xH7JkHTSsTqHXM18SACsCpBX99wrFY1CdnAVtV55j26FmtmLXckKEsgdxvBPKQ8t61rmFLYLn3bM2Mgez36kg",
  "key9": "PUrwBSDg9iWj5oFM89RzN6ob7oEJ5UXb7yB7922FdQjJ2oDphds8bwdSsRN5y4N6Lafd3z2FwLGMW1GXsKGfupZ",
  "key10": "4iaTXu8ufiiXKUmfimLtzjX9oBShgzD91SbkSwR1CCx2sfLsbBTywoHrPTMfre4CXREkd4agNndeW8ZKi4AgrXWw",
  "key11": "47NqN21nVnyYzBfYgL1SdAELa7x1Fqzqz59x3XY3fkLjt6iKf6VAEcbNDRLXrJGg6QGLwfZBh7PrBYEZnov89srd",
  "key12": "4W1d7CVAXBBtkP1tuN6UWFYpC2siDkPFVQNz8yTVTAfQraGdDLXpxyJfgHsyQGvaidwVTgMwiY7v7BAz84EVEBUw",
  "key13": "2jxq9ruy6zsMYRaLKZw4w2561iYksm6iX41VpbKRkuDEfsjc4s8QUkhve1ZDBaKrESF9vpAunrsHQ3bvQxFJ5pNH",
  "key14": "2Yf3u25hkoYeu4agfadWYjLsRwh1GK6jGRZDi2n5CJrhibn8y2QHqfgkhYXvuq422q7z6EezF8bkTe4T6gLKaqB9",
  "key15": "5NQfC3ZSM4KvRBR4SFSoy7dzdv5gKtnWMTT5vvom6CDe2dw1Lv13mgVKC8tXbtbVCmw5y25WpbZTQZVMX1XVgHvg",
  "key16": "5YSE5GeQpxj2rBMD6gVeDqmJsV6xfWKQw4dYZqrANW6C8XEnNZ8QVMDDpQhevdrNDpFrnqwVLvF6yBbbTKi6XZZS",
  "key17": "3vWv7vQjaPWhvy25hwpHMFGigVUn7UATwPmLCVogX8hwxwLEsqMh42RxA9dNCPB6Uz4mNLJX53qJo2FG5dQEjadv",
  "key18": "2BuGAXYjKpaBtPU46bfv89D94wQtg23Eu4Axer7mzqPHrCuTK6yNREPjh1s5FUcQh5rJtgRTsdgBKsnr3Qo4yTpU",
  "key19": "5v5DmcJFrXP78F6HByTv76WBAdyzSTbGtgj68nMV7kyDedDeKGZZqfviKv4j75dq2Qw5UMskrGRTvYgrzzuFf5dL",
  "key20": "3eWfvVj7KoDiZEPW52cCv2ibp4XT5CiM496JCaJpab73CZtB22R7QycR9cEaQBS8AK9Xvckesz1CLBcadwZQBNuP",
  "key21": "6MD479zuDYnubfedn7rgZYGpn2znMDEVPqXgq8SkPEXGW69tdoiZfa5m8dzSeoirj4g7hXes7EgWZesd42YkeWF",
  "key22": "5NzNpcCfs1Z76i5LiD4G6ZpyNEAthEBqvKBfHfWkUNipiRNA7wNrggxxWnF4ZWNMudn3fNXr76VAiLVA8QpdzCZ3",
  "key23": "cs9mecttbb7WL7iP6w9rmJL3GqHp6WUZgjSvWTrsYbcdx3gLgDNJ6EQWNwqT5iRBL9LcufRNwjZUDYJbRj5yErB",
  "key24": "3CVBnb7kstaLGEqxLX4gxMRFXmtCzbvj7UMtD4nZhgWWt7dZSMc6MqwwuMWdN2RWZj4RrZFG2gedfs815ZUTYN1M",
  "key25": "4Yid3q1W1CsehAX3wQVwic7zWJpGfYh5WTiF5552MVpo7UBmjmTqtW8ZcmxQCYSLBhQeTMno54TuVkocFDb7ZRXJ",
  "key26": "ogUxHMTTsPMBXreAirmLouPKyhhWKGSBPMfePztXkb6JLe9TiqpT7EYBCYSnM5D6ykxWXH27QDXJ1qsAK21CaK9",
  "key27": "2U1eBRUeNcRHvshpofiL7Wpqche1VH8exiZAS1ApzzAo8nqMuuRXHm6ir1x7mM34DdJfqVguyRGGC6pvjJ5GMh2a",
  "key28": "3PZD7KtLLSusYduRUzt9jCjdFNigPMr2htiXdZDJuC4p971VNYakwgC9BD1u4YSKeUfRVHByVZ9D5Qqw6yTvMpTB",
  "key29": "479ozx9fVDVQHknriY3F6B9imzz74KvmH4g2b1k1ebyS6hgQAt9RFvErHpGqeccM9USMXZc5JmwQw2vVeRiFhwyj",
  "key30": "27yygm8RRSQhCTXkyd9yKq6o2nwVdNoxvHG8GLb6fJjrw7bmM5UGyW9uVQsxaGfjGrg6VEz8KGLH77fKN4P4gaFV",
  "key31": "poHii7B4wC1KkLsfsiUi3Zk1kGkB83xwFbqbWeSa5YPmc9XhrCyVmE5nV8pUKgWTHQ4WRrARw1crLEfWFpVjRSd",
  "key32": "MR4hZshiiJRwCK89sfYnkDrWesCLkE3ya68ib7afayWDSVwhiQYwwYsYEes7A4DLeGMKuvJnUyVCmNQTpB5HkoP",
  "key33": "54S12q6Xgr6brRUAN5AmzaKyyGaf6cHFW6dT3Tfb3AZzJcovPHbimMYFT6yjy2t5AZDTp2VnqkXvtv8dggCzpZxg",
  "key34": "WtqSgoanMaRXjjFcsnSe6wpkhM8d1nZ6NuN2YR2PYXbyuVWC1S8uDb2xjLPfQfj1uEN11f4Uw1jjnSvUreXqbvP",
  "key35": "3nkn6FfG5RLnmCiArf1Ku8VERbUjdJbmSmAtyUoHN6ssb3dbUNBgCqDmj5abPbue4Bxzsetk8e2hZP3X1vWdowj3",
  "key36": "59Ynuz5Spgatk3DERCuNPmyQVjbQus64zZwy4bTVoHtnb7Frie1xqX8nNNYAF3Fqe2jWbiHmBb69E51UGbB3HL7P",
  "key37": "3JJ8RsKmdXNrb1vauEvnrh78AUUabecCb8fJrfAYP8bebKiXuyRbqJVnVmXWPf25GGN48gZkb3tx3X5Hx7DScbvK",
  "key38": "2Pu1XV6QcqFwiuDkaLbMVcfGKS1kKdUBqTRpdDFmamsWX3mcHRMG9ACujT7zAh2zhZNhr7wAhLjv8q5TDjVRzbnG",
  "key39": "5dn6TdCZ7Bf1TBwDZcun5STEWqd5wKiAKZnyxrrEvu8ysKprzDdjnza6R7xMmuoisCqx8FUpQbK4eAXZ4iexhs4o",
  "key40": "49Mieojgg7T3hbqd9VtbE4F783riFiKycxPjmULy42RjN2A6ntxazsVutoBBHHfT3qPzatKisUqXQduNVCn2CG6B",
  "key41": "hWhWnzRYFMd4zCdVBdQqtQXqgD3WraqwKT1C853aWrGxfJaU6u6J6TQAu61sJvQ1GCdmU4RXbW3DL6JjwiwRErY",
  "key42": "3CZeRk6LvhvYMLtho1kteqguaqbfDh5oCejL1aVdteFLNpzH3X7wa2tMCbHLBBkTQbt4UZt9PbCfqizYfpSA5m8C",
  "key43": "SgwLLvpQbRmybapbH87aFDnMvru5PXgYc9UctLC7UtrZkhvnQS91SRAmaJvKiFF8UYfAmTh5pnUWdJBjNMsjjyj",
  "key44": "5UxvbQHbqYjHaFEpx9ko3Sg4rrBFzrpjfc6qqvAvc4FtxyaQxfp2GtWdNtAVfHCC4RXZLgqZV1SL4Wf4eEWGAFah",
  "key45": "2HNLeswRh1w755FvvoQ6Poobzj4Qtstze229qTjmMfvjEbp6KEwu4y1sSh2MJFsbweus5uxjq3zadjA4rFHR7d7o",
  "key46": "3ha1cAJtPCYHycaYhc4fdXADvtjD8a2roSLEToAEkKdF3LpVemBQsMRpFst813Af8Bt6MF3nt8sNZBSQhTgR5ArY"
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
