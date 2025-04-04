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
    "3rUpiPzA1MQz7iE4D4Zyk7UAwN9NqBVWcMA5gKaXick73WWkA1N6pGSDF1utwJCjXhtLDnGwnEwsGxSzXrcjyQNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VNEAQePx5Cbuz7X5GuKBaix55esZvSXYcLTLRdfFyruNGUnht5vtJonpZMjNdrRRVpzunNreo9SzDdW7PK3SPmR",
  "key1": "2Uy6KF2vk2xvWfuYRemdzipsgy1uEDLD2in9uTYmsq6TYcd6SoSmGktvxv5jhwnUHoLpRNudX1zPBJN6ub78ja23",
  "key2": "2zfNQaHfubioUgfE79ffSn2MR2a8xWwBFSk2uCsUFBHBYDahqgvJk2z4mNZQzsSBKW8DzV6HsxDnm4HdhkGNBfVz",
  "key3": "4A4As29aC1qzTV8REXTgB2sz6nbQVSh4qZbtx48dPLidwAy564WKz39rJesL736wYTKatDNuFAwHBn6JNvjs3Pkq",
  "key4": "4vLYGN7kXo6QgAKyubyx9g5pmnyAQZpzy8PAz9tGCtAzctvuahThzsDiLKCCBCn1EvpWAhwqgJTX6ngATUWh4Tq2",
  "key5": "gvXEA3LeezghmYUfeMPQcmixYQsry81535p6RmTpT1SLq3RTivDWbVThdx4cSFzSKfEhs5cihQ7MZDhhyYEnGxK",
  "key6": "3hSKDyLEKUXmhnpGYHVwQB4Cuf3aDzuxk7yZMH9j56XtqmyX6jnUkr1Zf3dKBJGE2XEtqVg2zUvrZzoouRZfo3oR",
  "key7": "3uUw4Uzed62wcZM8ibyFnmZNBp7Ub8Y8FSBaD4j1VDsoskcCkdHHqdym5iVb4bqLNwF8EA96uwTb6NJBXsfXpzWa",
  "key8": "4zPtGK4Ra84Wutvvytnuqpxm4MBCjTAh3DvathaMZDhbpsBnEGDvhzak3KGA1Kf8skZ1P3zgzkR42t543nEJZD9L",
  "key9": "nxjLQkGpUXuPcYyNDpS5w2pbHdzS3MvmXHgTUaY4wXmzu6uf6Nx5P4nJPJwrLGNUrm2gKgpGhN4vSDxw3R3hYSp",
  "key10": "4MzPYUbURHvLKC7R4782MDQzy1sUunVLn6MVrEm8DhnHbpdKcR4xAifDCtqwE8u3CEvytKbUn1qUmp6xTBMy5Fai",
  "key11": "49f7jQQ7xr1ji6XXH51DPQ16SjPtxEeN88FwQdzNm4Pqo2ocqE1tpHshfb29N5wMHwBeicud5aYu1pWHickkArpX",
  "key12": "3Cz9oLSnJiy6XKNz6wXwMeaJDfNJLgYLHyRZxmtgktef57izcGgL1PfuSSmZQHtoHXHodnDAfUmxyhqyAVNAnNus",
  "key13": "sFmoJRGU27LRptzMkcRGrpcYdTcMxc3ouJwt5CiL9E5goYpFubVmarJJmzH2Si9X8ui9C8ZNtgVq6BYL91FjcY7",
  "key14": "3hGX2KqjVKSCGTq5NKLvzCXNLtgLr5VfE2F7Mr6G8uq54LWToXoFQheSBqnCVpnUUMgJNdYTpTUhSm6ophcfDmVW",
  "key15": "PVmHxvxpQrbJuRSF19p5nL2BELWrhuqp3XYJ6ZrpU7VSAaoFGaX4kHWYvdKzbUXNAFGkYmQY5YLkcSteK5uv37E",
  "key16": "5xahwCWbwM5FhkRUqa24PiS4zh2pWqYc467yYxnCbfQDm4ePd1ehuwRufk35B6U1wdb9azEQiPcswgthrMKcK6pD",
  "key17": "41hrwMsfXqcHQerzBww721WCBMptY4MJS9kYnHsUqdDu27pHna1Yc1ksW114BXunsHq3FtsnYWTXMvDhNBAccCuw",
  "key18": "jqhPZFTxU6kuYre5Y2Mo5BerB5EhHCJ6QFvFnoXqguBcL4dnLhz3vR3AzgNDwnP71fXXbqmxnL3zFwFx8Vkdr46",
  "key19": "54FCnCMTyqPiFQJq32M91EKJ5BZrNvKMrdWnnrjopC95qfh3BBtyNBKmUDToPPGBBxLuKFjP1QfcVjS26HdjSmsE",
  "key20": "5JE1CoE7hBxnuA1KvbdhJUNKYWeFdqbweXPQZL86wevyMHYndAMHV5SVC1evDbjT9MBdkAHKv2GHPb9jTTWxssVZ",
  "key21": "zSFEvbXYsjYCKA9vSmtziv1HjR72LHnCFZ78uUgo8zowoPkd6qDMLQTJtZ2zViXh6QxcSWxwnUBbLfy7bPKN8sj",
  "key22": "38m79gYYszwHnVofzftqovQnu2NAG91ZFZQyw8VcRZHAf87PuxumxEBKJXaJMVJmXHdPzQ9MvXGJsgy9NkhskJvD",
  "key23": "7zpSLxf1p12mK7qMCEXR84iqz3RhiVrGx6XnNuH693zAFpB9MMSYA1D3MgKVpS3biJVvMerBFeo18Rv1tQ6GWu8",
  "key24": "oR7qKkmgKYDmcMm68vXEj4WW77PWueEBwewZSyhbEbd56Kmk1kia2PjLhpjTGbBvXyDeNpyumjBiCsgy5LRNos8",
  "key25": "4S6iZcYTaRHScbT6ZEbzhzDGSdkPzgHRDMcy22STTtbkGHRy5nF3aXiKf88xTUsHDR8XBa5ef42d2CM2Grb3TvLd",
  "key26": "2B53iTXDxYq3MZYmCD6kvhdoASBiV6pvMUtzh6gpVP1rhuN3AguKG2bb6p7J52sAxdZFudLiG8AMttA1Xgn55L8X",
  "key27": "2uydurDGUkB4nrjDsfFTsN5i33zLEAq22TWz2qqCqUjNgbV9eAMKnMacDt3bfD5zJ7kJDssPNp4RrDMSbbz4uGUr",
  "key28": "28XPwpcpXRTAWGdayfjovgWbHswQxXVrbn83hW6cUjPSALqgsBGrLrhBoxXrpCVV4nqnWZE68zSJvkYRaJFFRKri",
  "key29": "2socT4njydiNte6BunHgyrpqTfQmJ6x2VNvMDgkYmEgsVLk2YdBNZ1wh3CMFjT7yJjWy7bwzjJQd43q1kTgecXuu",
  "key30": "5DryudihBktNcau8QfeK9JwaGHBekkX3JU4rkzp9xzgt24pFnVRTTceJ1APcwPzf6tQJhCE6ngTGVkXjfDn6RFR2",
  "key31": "2G6oH1HP14abNwPT1YZVSpdCZ5chBKxZ3VeSfwVGxsSMFwiZsdkVUtJqSBacckDr896zfNfh7hgXTvTpEvWxrg3t"
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
