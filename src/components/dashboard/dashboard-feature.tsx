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
    "4zxk9rbE8883RGtUWY9DiMHdwqa6Qbbd78SSrNLkwqawXTaQyB8JS42JqBQgHXgbZWr2KQTnoYsgeDn8QRPLcq3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G7ZP4tb3eF46tFJWmUYMkds7bsg2LTJqLK69GcixBH8iGUL6dquiorWc2gtZPEp7VCJVkDwAhpBehoKqvcPkBiq",
  "key1": "5iGSLB7Mb5nyrgh9YnysWBD5j5HM1Evr6aZg8zzvSSTrzb8aqxC4gU9GnU5SynVjSAX4xuozvg7Yg2vYjJMj7MyZ",
  "key2": "3ukjmpMfywDDfimGdzQXUi3LYRLj4rJTEbo3Hcku1gibE5V6MvSQR9poUet77hCWJXZJp7gZbRFSgtkM4z9Kh64D",
  "key3": "3HMLeQoErz2P7aDB3PU4RpyvkCRbExRdbgrp9pnjKusGy8nvkyBbmYpHp6nS5Ai5nchFCVsDawyAV6H7ZD184xu1",
  "key4": "3HiNtBkLbuDEeSYbTGrzQR2PdrSSSnaM1L8nD5EHsa43atm88xWdvSGVHMQCdGnE7ZccwmAjPFu9PohNyirrLRwi",
  "key5": "56cKLJ2kC5wiSmeq6okPEz4mYqLZh7bzPfXoPe136tE9ZfTnFMAWoi33bGfWWphDfhvNfxPo2sYNHZvWspDeqSJj",
  "key6": "5VMUzY7DBdnNutNKhhG7hXrmgCZtKbtT3toDpD86rrCZAbpaUumAxHEtXtrcf1GkYDgS3n1b2RqaCnPk9hgXU6fW",
  "key7": "3GYEMt8zNZQ9o3AWqzodJbu1rwdy76NJ5vuoqoavjVGQXVH9teNzeJvVkToakKz5WP5Zu9ehufR2ziNBTiKhfwzh",
  "key8": "dqdd6eL8562C7AybE82ozke2r4cVHrs3PaLowPARxUi14VgTuFqXtCY34NZwXDNzrJMDGQAPV9jWH3fUz6ciQJ6",
  "key9": "4T1U3DXrjVdybDKqMgzpKw3JTFq3nHZRG7GNzp6wJ2SCfxQpqAAhjM8Bf2UYURBrR9tDBxBZ5xvjrXHbjfpA526k",
  "key10": "TVJKuYgPXwhpPhwrTaUm44iT9poEzYQRrYofBrPstAgfVrLuKtPSt4AzFdGX3e8Rb4UVSMAZnAGJ47DtcAEAahv",
  "key11": "5JEmxr5BA7UR624ZUoy8rBuMpv7RLAAEimJC6MmSAk4eJ2vMxEiqHhbfvh7fhmtmMiU7Q5vsz4gxkfHN7G6p17SC",
  "key12": "2f8gmtWS2vJZc2kbdGNfMsegNvVJYW45mFHjvLz7c6eydrNNzAe4T2k2zGkJZiRiTEW3LXZSWjP7UtfeX4MHKGEN",
  "key13": "4LFLHRsTAs8YSdRPoUYsjR9rBWMRjxD71yhAPUehr8hPe3fiCUtje6FwjYMXy3soKj6tQmqyrrx497bMDXKGVos",
  "key14": "46EUhNCHUz5i6hu7EwpTHDNjqAq5NTExhLUgRbqmZxFvZdXaUfDG8nmRhj8yKVKSmjbzJAXrfSo49x6aqgn4MGg6",
  "key15": "22i1MoiF5kq2rwnRfp9NSFEPjLkVZkxNsm5BMoJb7WAtdQLkbHJv9SE39GwLspQ4djVLAvEpRWYFKKPsqjMhisJW",
  "key16": "39rWZjYb6CAvZuGutszgT9mHkKw7gh8oAEqccZYocDmVdrNpjmuMbpucTAUE8ZWSexkXLSfLsZTvp79NTjztxu7P",
  "key17": "L5ngE6KHgdjyNASrdGFNjsPyE6iyBSXV23jx65h57z42B58axbvT9BbqCfQ7XksCGANA2TiwVVqYB8yPCkgC8RP",
  "key18": "3aSkk17aTtVx3Y5YmwBJCXqJzx5rhgnDnopp5UG5dNSy3vUcDpiDextSD3PYkxzcY9PauPb2ao8fAv6Nx1q3nANE",
  "key19": "BQv9aXvyJSuBEXEu56MtcgetvsXUHBPB9jpzHykK8dA6ivoxMVWTNsEEeFhogEj4eemqBMjMRGm6Xvd2HJ9wnSZ",
  "key20": "5pku8N6ZAU7CQECbzLrehSpwhPvTRRBikbxdaqMG4txZsxLLjKpaA2wjJVyT3Y85P7hfNrrYQMgComEXVsUBgthm",
  "key21": "21jQYc8ozxfoUaQqZGmHNsi4gTdfqBaVDG5pwhoq1uSPwxApyhyspiEKP4SvLM1TJrYbhFEFsAy46w5eRtkmZftq",
  "key22": "3Jg59iDBr5oSkzaBSFahHAggvSBvg9qSjb5LMk7X2FeFEom9jr7mjZFCcZmxdiDi2XNp9YrUYu4sWrmyMCZ8HB8G",
  "key23": "2NMhGisn3abSEUdKjC4JnE3ZV2wPYSwppUqtLrad5SFQ65qW1L72tThcgfZCFj3WAZ4gXHxf7FtEpXFGHihDUu8v",
  "key24": "4Cm5bfCs9c6G3M4rC1e7aexY4yWSDQLYJwFK6pf6q7Gr9QkuFEgu7nvFCnDWbotrZyF399VpmJr7ky2WgRjTXn4W",
  "key25": "5qZ1a61XpQxhC9JwC9VASMMbabXG5fw2jcQxwSvMzk27msWAqHV9arzvWTD7VaD9oN6T81HpHrynzfZHrRo4q6j9",
  "key26": "4cSQ3Q2P79gaWFDisNzHUo9Ca34TqC8MPAMYUcCNXqZweQAD6V5YHZBkrCx16iE3UkkWUKLpFCozrambdLEq9Bd4",
  "key27": "2JhJyUxMJzvF9bbxQKAF8anfu7mk5BRzpirgUn6pqLhsMjmGUruJVZX4BhDfYnTNoEjjQf8PDPmamjN8DS27AzN1",
  "key28": "5LhcfzzJJTi4PnrK9qTxJk1QwnHv5wPs5JsJeLyooSGJuUuRBeXsTsBd6RTHNQ8jeam3wbxhFPS25Ap7hmVZhPhf",
  "key29": "21pVDPoiHgwMnUvwKwkEF9grsXTKH69QR3wxfRGo1LdUXSYE6uGPdL3XcCj3pMZJRVx1tVmWBMEWRYJNiLhP3ac1",
  "key30": "UsL4tpPpgxFvbBU1N2CGQpxnJweGRfWcSwStgv5MJNPj6CG9vbVwAh8bTbSmnFovqQsmCCeSDmWxb2ZtRkJ561S",
  "key31": "4gjcE6BqL6obvHdz5XF4mpFD4wmL2jbuEVdLhLXi1T1qgZ1kWtvM8K4XUL4jTAAKNmWEm9TqjuG57WrG1SefViN6",
  "key32": "5vHZNABo8UDEBXK1LnyAZWvL2UuMHRVdQ47HLto8mYJBGmPvc6JfEg8z1uPGSpML7c5htjZKhtn4PAmhfTSXWCgC"
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
