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
    "3CfSY2W4dKUNQmAAUpBCrD2oc7xwJdqJbWm734gVfJpWU8BsaHcBzdwHR9Y8FyueKr1z7ZWrXwLXCnAkoX8SgWPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NBve1a9YwyqkwGGFdDKKWahYtw5VXeZrxyYAXvZ1g9BY5PjX1of52sHxtoUpjHsh6UaXYwDEewLFkujBgXtoN2S",
  "key1": "5aVMZ2sJ3bqRQRXDd4juBUHfPqZEwK3DcqRrzo1HaqQPqu6bZ818kjbJCUgg5gZkoz7Ho6ChRGqtW3A5QYFwGJzH",
  "key2": "4uhEEswfu1Tge47KE74Vsx8RZtrFaGQrENDJG5zvA7pMoDbzxx461En4mZ3kKWUwyQLv7Wu43pMF5HWUsFaxyfbR",
  "key3": "2U26rVpXghJm2e2o3t8E2iJPXQ7VQyaYyw5xnqwUQm1eHe5jsSRxumxvnyDaPRHsjhMW8Z6V5ZBpW3GpR28XSDTC",
  "key4": "5gmauAhu6yDnNHafuN2cpaJqvrbfHtoPSP1FPBdEhPzs185svh2z9CZPwY6Jz8GcE9hoDXYkbg9Ab6FdnrU76G1E",
  "key5": "32rgXdpeqzK7f9ab4h6bkKxJKG6L3kmUdPZShYdpzzqXAFczC7Wuu2BhcEBPVLFYrMtF3bfb2AXJ6GChgFSNDXgw",
  "key6": "4RgirXKdHAek7JYozekuVTRXNxeRUGCGNu5PRaM3g9PFzWUmH7j7WPDSiSM3n6r21Mx7ZKRQ3U3SckhA7Q9D39rx",
  "key7": "jxw55X4fVYk79iKngSTzfPC4bPCjjtzGdaBb8aU7yKMrmPZYDwjAWoxjgKhp4byu7k6mwwn9oM9B5euobi5c5WH",
  "key8": "4tTvyJn4ftCcfjKUcwRWGQYb1W4avX9CzEsW75t6ZUbcBSkZJJQ33poeQHVoUAqfgc2xwoBKoRw6mu8kgbVDVkgg",
  "key9": "2Fi8chwBLwEpSQaH6tkDQnPkvbepx94srpuYBeBW1LHtZuT2jZ5TebNuW8nf2CoVotNB3RdL2ZWX2nU792DLVwyt",
  "key10": "4euNRYU7f41WgTY2LevMPagGArKyQwDsa2vPJXhG8GPwK6eB74THvumAiJBavuARHY84UXRkDo57GCMtTAjdJ76s",
  "key11": "2it8DQFi43vWRY9FpY83zzi4fMzCN6MteBPzprGKPiNnE9hS6sZc2FdSwzoiE91A9puBrpr2XoQQdBa1iTW9Nfmr",
  "key12": "vc9UaZzFRghiPG2tyKuzp6EHKLS6c7sgJ9WkZjmp28nMhtsLNwKsKibT5WCHTapmBBkgjovADjPQeYnSN387bYj",
  "key13": "PVvJtJb5AWVN678RDhHNNPCaepbqCmmEMj4VgqjFgcc1Vis9mDHDchDfqL7x3jS76u5zsjpYGuQE4wwcRMbeiKh",
  "key14": "5Vc9ZFrKUFjLt8e9ip1irQCMNtX32ui9rHkXqPmgpQimAi9DntTTMPw4mqaAkDUUuAcvsXzhubKkBxFj3K6G97Uf",
  "key15": "4hWTZtjRy3m6V6pahcNevJbkb9M1YP56Zh1S5wajRBGBXJDBeuaGBavMm14qoNNBmPUhzibfWky1v8i1sekon4d1",
  "key16": "25Uwy8Paef9afW6qNqkHXUdWvyDQFpNmdtbN5abq8qRvzXY2wZ1GAPmzfaiNzPWYcbfv2Avb87HDo6wHDtHZtHhs",
  "key17": "2UijCGcTycqQY6FqNahbXeqADT1GEzGWHToqX4SZB7xnyo6hg2QNy6NUdgAp4LZ1kwdoeZaLaftKoWVYqcpxYPjR",
  "key18": "d4xRSB9se6S1mDtebbVnF5WCxWLrpuSboHGTwZh81T7fUvMnevJeDbStshKj82hqWJFJdk7N6MESbpG3xZmGudo",
  "key19": "ha2TyWVexy4TcKmBT1GUn8jYqWvhrgcmHMTHjjv6qphkW21zoj7jMPq87MYtWaKuR3zmDT4zzUow3C9rb4s872F",
  "key20": "4CGqtPp5KkUY18mVuYNgbL3E8YrYfBNpB73L12s466GFMq3W3UxSQ5TCnW1VRvcxHtdgZsE3TfgLxB2ZMuiUdS8w",
  "key21": "24uJjryRy3VkfdfCrPawYEfkbraAUsGMp8pHL7Q33pRt2gkaFpwbohSvpyF2jRvy4YR6SMgw61JuJuVVDkuH8kH5",
  "key22": "4uigL9be9t1BHFd8CfFgh4wS87nnSo1xHL3KYdhmHG7yeza6J5U2SH51qNyVNQAnrjXYDoTPdWLhEMD1EQem2zgo",
  "key23": "3dpJCkHzT83CovPFxcn7C8Js6uHSJG7vZg2S85RtoPqt7daAE1cNZy1V1Pmy2b9frNMhY4aHGxeuVMkiJDGntXye",
  "key24": "28h5yGWBtHGza4h6tyFWw4mVLv2mzV43eCG5zVgfDvXD7aJPXC6qhcVo1TR3vfaj3NtmjesVSL12Ktiqb8fyCZtX",
  "key25": "amMFNoepizFAXoRydx5xbcr2USPRd4FBrhVksZSpcXQW4VtV1g3nJY5qP3CE5GaA2xJp8x2DknPGeUrQ38zJTGz",
  "key26": "F8PfCM292mFcushvE23Erboo5U1pQuRdrCGRwUXPFF6VB8AmLYbuN7cbn3PH3DWnzwkt5ajv8SQQV55BhDNdx3t",
  "key27": "51oCrRys3szSCwbBRwd96hhzF3LXV29rJ1k9b55yqcq8mMS7k9cU4mNjBGG9pgdQ3owbh636hYrMMkDQkcuEeHUw",
  "key28": "33v9N5vwSS1gtJhE4pF84MLTLMnuEuPdduzc5maAG8VJS8srtMvQgrp2S5rUJX8hUq2h6FxJAXWTX14eHyz17rqR",
  "key29": "du88XrrFaE3dyZdTKS4DCzniwN8cqnby4aTQ55jqpMrP4xcf1TKF8VCrVS7pqPbQxyHrTdaoQbtg6QzoPMnzg5T"
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
