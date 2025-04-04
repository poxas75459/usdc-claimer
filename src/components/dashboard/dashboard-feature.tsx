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
    "3QLHHSnhcnCok53ousjMWx55LWgPX799qBStf6BShefHWnyUtKC5vYPRPsgG1HKHCEgpvxcypR1Lc8yPVie7Kqjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wa6tJyYbZjnfcpSba5oD18Hobhu7f5ep5KXxEbFLPspR6PQSUL36uTRNFvajnYWJoKFxmoGwDXbYHe2muApx6H5",
  "key1": "2VPpsPcGekj466RZPziS5wzqaUqopYujkCqNeDZ1zLDsn3uCobZav75dYwMkaH9tvF6BisAv93yWW79rWnQ76Q1f",
  "key2": "4ne9eJJ6oHiA4YNwGXhxmQDKSj6RsgchDKXWYCUSa527ZBYmwPcEDJnJ5h5mjHJamU8KCN9gd6BVGg2AoP3s4DRa",
  "key3": "wpx1r77uDfCe8buJeEo9qtnbMnKXYXXaoAn7sw2yMFTnhHZ5mLEPnHJLMUmzpBZu8WkxUsp92p4gqdZ3CG72ENi",
  "key4": "MmepCBtoxTci9Gr6wR8cQSfRSZ6QEDn9Qh1WqAfZfsW74uWcjF4CKcCLe7nCmmNETDpSSwP4TBTubVcUc5x9Cj3",
  "key5": "13czPAXExNm3dmxatJz2pFaXBx3DP5RrJa2zfShbeYM3fwX74CNmkAatcUm1XawC2poYHRu5vzaNwdsZuDJ27Mt",
  "key6": "4cSpU1Q7feMtBQDqCTvH7e2C5eAqm6eqE1F987o2ejEZuo7NP1AttDtdZ5fhx7y5ArnpZg4SjzQDSKFBr33HSgw8",
  "key7": "shKwwdtXSrYebWmM8QQeEww6fhkpjpomvnjMkdqtXYsEvTpx9vCyzknfSKAaUZBN751PHnKguMDaGyLFpqFQ1aT",
  "key8": "2hJDWuZVRVhHymrXg76cuKMCgNYtRqRXcHcAUHLFczdeTyAXq6irJ72bw8Atbijq59LwLFk1ayaU9sqwTzfkbi5x",
  "key9": "yCFjapVf3cjsEPVTWGT1AemwZCzgN4jBRSresho2BpaUYAtnzsaDrcTG69Jfbyq5u3u4TDszVph2eiLh6tWzYtj",
  "key10": "25bob15rHAMmxCyqu23SeMM4967jAQCWnUZTKZG7WEiPiLPyjm7QYWPyhdKmvuZeJPBfswrAZJrT62WQzAsJ4HC8",
  "key11": "28TFrhRKSHZxnjEPssn1BHfsnu2VRvCy8iJAuxEpkw6gY9RFHaT4i5ZHjX9eZKXxFyyULFTqLevR6psd5JjVVsAN",
  "key12": "5oYVvyusWUbCauaHjzJWFvMQhMdNTbzuVSv9rS1erkEKFz1t3StVouAfADvJrhMHSZ9c2AHkfwcSr9Y4iCHJFND9",
  "key13": "4FHwW3nnhQDgyQJGKNoJXmVAaVeEotQg5wkVnpAVdoFbDyaRgaqKy8KHJUSUFDy7qfkThUi9MpMyyu3csdHmUWFZ",
  "key14": "kcYywX17WGq1hgDV3Mhd8x3gwZfsr1czMLZgHaJv4Z6cxoUsmbKNUpr4A1GGti9YY7xCV4p856qrYYmG1GhWeHN",
  "key15": "5LGjZUbUa8z7DFfwxzWm4zQtqVtmqjD1u4huJMPxesBerwJyY7pofZKqjjMLynXc4ngY5obE4sr2HqeUMhrLfkmo",
  "key16": "3bGwoiSi7YXemKXVLarobBB3e6pDuQPdo9wjjbhoHajCAA7xcCwdXcTqL5meeGgQcr84zwibthGWVJmGC4ho1nar",
  "key17": "42FXXx6GqdLW6RTGLS3NEWLr5NEGgBwRhJV61w7vEdEprC6YuuG57SVsWw5jUSY4S7V7Tkvz41W9P5Z85fQtLsff",
  "key18": "5D8mWiv3ESBQ7xX5MfYzudp6vQYAa3zf39wRsuZQdtfiGpymSxU8DRg7vGkzTykPhtav4xkMBjDsVZBk3Boca5yT",
  "key19": "2y6a8n9XBaTnNknAh56ANeaA3vEWzoucZY64wk8qzYan5njYyKkvoGHAwcG2Z6KbeY1axqa9oV1QyuwzJD8a8V68",
  "key20": "5ECgdredwMuWmfip2z9BNwu9MYBxknhQM6CqGdqdKhhEzApnSdCAv5ZJjbbpxBRAnPnXEo78K2UTw717Lx9NVdBR",
  "key21": "TQLiVXDrz24jduVxW8uBAg1UZtoo6NnWtexp3rbAhQnUFHB6Bn67azrESuzCjAK7AtyXSmn5SXX5vuRSfevPHme",
  "key22": "35gGevE9tUcMrqnEJQxVL8CncXegfQ2yKh5xBQQsnPSMZ3qmFXax6sybuGDPbvGCGYZg2A9jBHmBVj6PDiPKBHc6",
  "key23": "2SoSjs2tMRbY3gRKdvs92vjJGYsQVoAMjyiBhvGfjE1ps8mqRXav8MohpLU94ofJhK1EMK68X8KYceqLov5o35v4",
  "key24": "2rgwafGGRcJoxdiDpYrvFhtzCHaWPRGp6rHpmBnpA4v4NWzNi3nFG6bdzs34a4JHR6LqBz9p4QuQ3eDSio3YXaiv",
  "key25": "5fdpxsm3Kn8JsJPMHfjkfgLppkQt7oBBDEgem1gz1RwGhE9yykQTosnPvr8dxEBLESzWtEcZKkefQxNCafB5q1Da",
  "key26": "2bDaMbUkr6h34rEmtGK7DJdDkjLF2ord131FCaPJ2h6LxpxAk47HoBtazjXKTBdm9gwZtxfSxByYsgQmmwvi4faW",
  "key27": "2mooZLdtgwgF9EwGSsjPWeNqW4ddsCjhjVGuQEw5ivg98JjUBdtpeZtqciGqKd8NBmkSd9AEpMFeyqnSwZ2bxJtZ",
  "key28": "29i2GLcZgmaG9Xpv9knGyiCcT5ArBSr2yH4RZeGTwVoRTagYVpXAJfbUtAjeSD4dEcsBunbPQEzDwhCGAidSUvoK",
  "key29": "ZKqbPJYbmQ2zP1a38ceeL9UzeFheyNpcYt9cFaJLTizHp921FcJAy9cvGG2VTdYKtDJAaYrvtL88hwMhM3koi4B",
  "key30": "66xdPaSyFGcVySbionHGhAV64EUWn3qbQYyHTGmKanhgjZ8fSMevkZyCLbYz3bu53cS12BUgNmg5Ui3RqTTjY3za",
  "key31": "5ii5FeHi8d3xqNojdtojVcM3Y3cLXKAwRHPMZZnTCVkdMk25imnBH5H3Pe4CMLQmvv2WR75nU8s6ZKyxJ6yCga6u",
  "key32": "oY7YWBPSuJe5AFu7VwSx9fWASgrSAd5c7qdmFe5NRu4aHVyd1ufLY2rEErAumXSsA3dgqJGJnsFp7tpo8LnsqAc",
  "key33": "4XJHdHSmh8cQcmyRE24WBW3zTaiktCsXcVk26esyiiDrx5h5JQNwXnrn9DGgWkBiuvjcihrArZrEMCUmZ7NJzmZd",
  "key34": "4LesmnTpfrehwuc7ZoKWXaKHdCf82du8XVW4yKDWL9HTRNr8RNmhSCSQzu4sKev6bU5a3BcsQUvNNdEPH5okhvZq",
  "key35": "45hucbdxkKFS13uRQd1mmNX5m22WSRyUScxkRnVUoKRh2YUQ8cLoCnKubFFYeqvvD2cxqURLUMZ2Yv4wGKPWf9Jt",
  "key36": "bKjsfVoR6UVCtN5u55Lhp5V6PMY1uqY5K3A1fWY6H7Pvk7hLAabcqcgAhhNMogbrvH8bTEvxRhTcEmrJbPL3A6r"
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
