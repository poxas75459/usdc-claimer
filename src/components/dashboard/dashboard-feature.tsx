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
    "jK7kpA2qWRvvB1yoVYLDxp9w2fpkxTSHaAdd4vT5E4FaLgXWJu3i45Lev8McEwwW4qZNxAsmEcDapamEdR6ky9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WYQui5DLba5fZYRZr1WopstDUiBDPbs5BjPLLWvfABPNKTCixbNCS8WbnufTN9LmhTnPuibbUfqc96SATRKDS8z",
  "key1": "2kYXM928Bw9b1tCfBtMH9ttfFoMTXLd6w9f7KpkPhzTPJLei6ZcdsuhFvs8DZ3m9TJiFfqRyABPpcn1FqakfsVY7",
  "key2": "5iRkYMLEtxcRbeSjnrVvb328kNuufkgTUeanGHL7GnYcrRUg6vWK8hqMfCoZsVj9NUYWK8MY9uJi9dU1oQ9n3EA8",
  "key3": "38afLmGbrBN7Piw5HTP7iHmmTiqTbffk3BBz6kFKap4Qa3926EgdKzGhL5LmqoUwHat4fcpy26hL3rGf8K7174E7",
  "key4": "3u9EUAQvgoCzKxUd6RQ6AuL87ushe1f7Eq8Z8ekRcF6tyY2b8tnSbCdhirV2ChBtWjmg4h492vsfoJjX43NaKsRR",
  "key5": "5f4jNmp9AtEySqb3hSU9Lj3GgYmoq1Vowu9K7jUpQSAbikwWwYCthRQtcU1Pypj5WEqoG9DW9RAR8cDYGmTxHHrv",
  "key6": "4kHK4oEwV6cuhTiVNik5ZJ6vMEkHwdJBMMC5X7F2knPqtNFAFmDb4sn4HCTttjJowmCLDAHi1dAJLppZHHWJLhoo",
  "key7": "rbgdAMxB8cqjsXLc1HPgKEqb4Y8mXCJjyxNeJXWyKFGFfvTJKPkZxFCsGLBXW9Fg1ZprUG8eivA6vUs65YnkKJE",
  "key8": "4KfaQtuhvtJHjQQR78ryJE3ZNQhh1MNgmEfktZxZiY7rha1CobNayNXXCK9cyj42zDJU7N6AsPoAhY6cSgoAwbkF",
  "key9": "37H9GGcMmXs74QnDaJsVLioJAUMu9kedXxswaUmiVthYmRpCvvnVd5CAJpcAbTrTwaW7LzCVqnmRe4b4EsPG8nPc",
  "key10": "WKaDBUmr27YV44Z87qwjygd86KAfBbBnd1SWSozpZxkynehauE5KPRtBi3iLYAX5wBJxTYJNyToeDnhqnYdzgVo",
  "key11": "GFGoJ1xKKVEyck7dW7u8HKSB5w8VJtRjZwmpK8TJ7pKJP6UApbEKnURQSrdsTr6azcyBzpkcswYWzygirFW4ZbK",
  "key12": "4VeJJVW1zQ5EkFvQT8pM7eoNF9vpxpREU9n3w4FcFkiPxQsbLDd7t2DBNUppYtbb1aKzrnf1FCf4WMtGgiEtBjnx",
  "key13": "5qzhaWqWhYkGVT3K6TQAHtxVNPQtHnojzp5tuv3YZWQmwk3MvvN4Xq71BLAbjxJrNjcLLKgnwcdRjYHS7mw9YsQP",
  "key14": "4pr8mo1ejxascge5LAik1HnFRAkCjcibAwCwHqSGEL7ZPNTDgHkTgNKAygwQsvgG6eDCi7VSroptgrBfp6KUiGtF",
  "key15": "6GSDjEcAG4KvuX71UnGAYUiNKKq1KTRm1teoGor8VyUmBn7uivecywzpSaDMSn1y8dGSkVa8P8CLpcacNkcbGan",
  "key16": "4BwTjYMhrWo8MA1n9AhapVdFCuJ62YHBH3KZ6dwy73s7RDT4ij7rgmdFVp7ejLQiRQW7NXPpMERkzsfFabhJYPVt",
  "key17": "4EEzNB1xG2ThqK4pdwxV3De37fCPWnavsUFs4KRN5jJMM54jS16f3hMyf2fkZGZiyurDBBV5mwEnVrAozRmhjD5w",
  "key18": "s5MMNGKubDK5rsxHDrKaEHqe1QNc67GxdHE79WTD9q98BrcEPppG86FEhKumjTckNVFXaRrAfzX6uhRVbraDref",
  "key19": "63bGygBPqnqqfAhP378i7XcPrEpo6bMTdK5ftv3hLe8u8TFT7sKjL3zu87uGtcnm8yceK8UbBmc5fq9Mv69GoTDF",
  "key20": "3CHMGJe7EkaYx4wD139VJ7QeBrmpTKzRVcr5LE6jMBtFKJQLpMBoWgc8wMqKXpZgQdS3qYkHkrCRQKJ1G1Y4qgcg",
  "key21": "5xvu6XabK55svcCDUPS6bfgEudYhnBcwmTracG2F7y8UMgBAJS8t1HEQrPnx8fwinwhvknoincQzeFQ77LPErCiU",
  "key22": "36eWQb5fXkHKLKLpAua3J7Lybp4qg6adk5KKfUbNXArcp7utnQunRA57Fb69daGr8sc6QSbzwRQSMoGXXmNMrowi",
  "key23": "4z6LffNcJNmTNEiAHXpALsLwQjVBP2FE5wKDCHH4gzPzd9ioTp91YNY3ocGRLkyHzp1bjg9fWbJWHPB1GysAmeX7",
  "key24": "5iLbshFBxufHahxCNAwvVnmbq6DvehznbMgrVEeKWD5GMEA7hs3BQe6YZYy3PjqurZba3ySez1soT1gHasZFCP5F",
  "key25": "4s36K6Ct3g41ZfNWwUKaYNWdNVhV2oLWZCUCz4BVPMWGx1aouwBzsEntD2yr9eTPWBzh6PLDBzEGoVHGjc4eJJLR",
  "key26": "4Nq1KeszoHDTb9LEiuTm3jGfAEvRctZKpRZjJVTYUXNyuD1bAGj6MHUqWkxqQGCtuRCdoTyuZuDwRJXghgzFVn3T"
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
