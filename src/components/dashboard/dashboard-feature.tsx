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
    "2Ys6DrAy5RpSEis5vNHnUGZvxBfm2upVndzRHpdiWdSTHzCg67smJkq9grW779nM7HmrvbFbjTq6eY3FEUZVwrGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JT2Fth8otxySTuxEBBrz69EfyjkohbdxZgwEcUbo39micgWDdGdjNV2Hwnc426DKCm4twL6EnsWQZoDMBoB2t9j",
  "key1": "Vt4rNRrRoznt5BWd3ZzEu3EoHYQGtwDNF5LFMEDVrpPMLpff1chbTQUC6EZpVmkVSHFCEZjonpCf9dwUKUtoKfQ",
  "key2": "4BuHYdQcrvn1w4qKM5UYzTbFU5heNn6P9keLfegCc5VddttutV1jsc5G6sdnMMRySZPfmXwng3J71cAfjyUJzE7E",
  "key3": "2VMLpRsNfovhHDVkqT5CfztCwJS1Z1LbUs9R1St5JqvGU8K3ntVM7m5XUv3HHEhCFTfuGaXyVqtBxmEtNmuAu172",
  "key4": "5o3i8QkfXr2h4qgqpktmYYiVjb1Ctp72Wh7RtfanDG165kVR14yPb1HUrisqNbVQTun18irbdnQpfeo6kFq946U2",
  "key5": "54EYUeNr8G7Jc5hVqt294iChiqrcdjCksuyDQeStrJX3y6v5H9qwzaMmHhVZomwCPS6CubQo8jxGAbUTEpZB7XHi",
  "key6": "2YMoncMYRvwkYMkcADEY1Qa6SfjtFpmJ4ECyoeJZvEv5TvB6HS3Mxe1StP2rhD6ViGzJ7uXwPHyRCa8xAT7qgH3i",
  "key7": "3PknP7uWSYu2MxQXeg8m3qZThRemJgGaKKNboV1zrwS7tmLsDbWwpEZXowFR4uYA933bD2LuiaJnZqLYL4Dg2pRg",
  "key8": "3Mcpjx1iMXsKs74LVM3PoGNokdvNnRdhSjmHGvC9zfqsziJwRctPB1oNEjWuZvPHHKTxNpKExGmrr8L5PqS1nCvv",
  "key9": "4hSm3e5iRt511xNBUyXW7QYeGPLmiSgLrNYdikzfPTCTWKR7HrqzvWjeVzwmfveHir7v6GeH6cK8Hhi1ZYwpN4K9",
  "key10": "4SjoUB8pY45Yf3mk1G1mxaCQoqckBsedU6szHk5deySJqa9fMUZNnzVxfwvF5gM6ZwH4JTRMECdg13WqavPWGnNx",
  "key11": "5pKzddQUY24PfHMHnC3iAdRgedqRrdUWbAWYXXYFKyxvQq7DTHsrvgvR4uMcv8EgUWJWuB4Qq6WiM6HbBwMeb8Y",
  "key12": "CEemE8B6nsaXqoQoszJ5a8j6oonJ1uzVTVJVQtwyYozJwxynayM2rHrY8UNHww27yBVKe5fvux351dsRyrc4ozW",
  "key13": "5Zi6wj6gTxxHSfwMYNsqtkjuS6LGWDBf7uqsXBV8pLrockGHZ3YkxJQhW5eimh228uYPsMv5n2yL5qXDRtat6mLM",
  "key14": "43VdTuSj19sxyao9nRKGgaJVy46cNiG9E7iXACRrLs8Vup1B5vVrk11kF7dyKdEg2eKPMa3QJt7Z9gDD442UyRgh",
  "key15": "2LDNVJg94QEJw2bY8X2z4YZu2zfQtpKNCyTkZA3eYUrySmLYdiwCGQ4ZUgmJUDimVxmyn7kgwCfM4HD2XpUMyQK8",
  "key16": "PyTNiXGCSE6qGZL4DzT3Uw5cVHe5xbnj8LuV1JZT1jxJZNFfkf1oGo1DtfirUurx25e1EszQepUSyoV3Ji7Dz8E",
  "key17": "d11rXaeEaVGsHmzjYKfxua1Ecj7CXSrAU5ZfUe91rGFEqiZdffKJSyKhvpFCjQEmaS8GGHthg9LccSngbZyRQXd",
  "key18": "3bqiqKptipwYA3ULR1vpZTFpdTDR5ZoSvbvieLhYPWc3xuxb45X8fyn6VTBs4h2RZopNumAyPNcp1krkrBFmWC8C",
  "key19": "2k2jnEyvu7rQcvh9nf1Zu7QK9SJE9UBMtPQ8zcAKUER74RJcGw1zJEP8ZXVbrh7hLoUQmBibC2MY2S1hJ7vp7uyc",
  "key20": "2g572RPVKc6yrtNgRKkNgNRpYXy2YpMvFcBdTaW9o2fnERqXCDg6s32bcbSqz2iv9sXoGVBvwgGZ6dwKKc2U3pj8",
  "key21": "2JvMqXrzKsZtVJSPzrWP4iB32y77p8u2sf7MynWzTd8hMDhiYFXh62iphPSWp8pWS59f1FVZd2V4miW1nTkM6zHd",
  "key22": "4Ug2uSKF7hzDW5JcY9My7orHbNwXkhhDCJTCpVf9FyyvyA5FRG8Lf7ZMK4oeQnGrggPXT9YfejrKHgJwsbuT2MzA",
  "key23": "3K6RdkamDYjo3vMc5DqGpDoqU9sYugFr4p4gfiYYGxffg6gFqNntYTScdjFdtbqH6oRM6JSFh2ufqoj48nt3M4S2",
  "key24": "3zYZqHFEyyKumsNEWyoZSWDEW6mRVG4PtkL4TkVfF4jCcSs1QfBiwqJxmZNpAQtFQ1U4CLfvWnLa55nuVVKoddYA",
  "key25": "32dBF8GDhXa2fbgk3h2DqjRXtURPmTVEPxnzihzzhKJzhaHgAT6NGt81SqbosH77YeKtBapjjF9BXDf23ad9BrCn",
  "key26": "3ME4t3d93nSovRiX8jeNLhqjKfhb6ZsQnm7TieibhgfhsV1y4tezsSyk6vcoqSobUjKNw7jNadJc3EkbRdGSaF4s",
  "key27": "5mHiHyd1E13oW66aAMdPWa2oNZkqtTqSK84eDLPwHUYra54sZN2T8RgMiMZ5KHuRwGnKQfPFiAtasK6rRCmzzdip",
  "key28": "61B5RgeYN728XB3jyoj2gN9bU8pbf7PEvMouEs3VB7Yr1pjuMYRnKiGA2yyedc6HSXpJ4eamxG1WgukPqQoH1VrG",
  "key29": "2SAcZUvEjRgWJnBQmNSkjA6pQSpMPtjZJ6GwibudYSgt5r7Czwed9G1yYGX5BCPk4E3LExMjACUdUhx7eMrirKGg",
  "key30": "57v1LAHY7dZ4dRQoAeiPe3k7rJa5RBaGdd3k8rwixvWdrVVprgcpo3d6QpnQgRogYmv6pkkGwe2RhwNHgtWtF7Zj",
  "key31": "4W8H9tTqVETP8gKYVCmT8GKLmJLKDRuqV8kHtU81wvva5nUs9mWXnC4Zr135WiY7aMt9g8HDqk1FL6Yc8s1F6Wj7"
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
