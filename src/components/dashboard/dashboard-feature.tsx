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
    "4M3gx1MTJFooCBnSJCCtynf714eveYCYhLrUoSc2eKAEdcfobo8QL6BhsGBYsbns716NLDQhPjfpbpqCm97boia9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SizWvCabNLr6Yv8b83cMWUUKBu8dMmVsY1aatSARAE6eyEpHsGgnT4Pv3yWz93BjN5JwPWgchCiU5kk9pHusyqT",
  "key1": "ZTPKMZ2oxcKsUoeZx7TvAMZCqVn3QFvfPxrjaZxNDJSP8hExMz5HbbzPRi61iQPkr462ozsBz6zCLjesMtHJhTi",
  "key2": "3uT7kavAemRwnoeXaRQYuQ2FH7CFed7NSS43sTxmYj7qQU31BsSJH2umwDGF5w2wJdRt75mURfDRCF8KjsEHJ1MB",
  "key3": "43BDmzeUUmuUeAebCo6jNa5jXUgGwGrCaSN3MxdzuwiGQ1HuyS3aofjfF9qLxSAtP94kgR6eCGGzKTT14ZM5QZE3",
  "key4": "4eoStk5qDsLXFybedCY5ZuaoJ2G7pTLTb1gQkef53LF65h7XbevsAVuTY5sjJpBDRGoYDWnkSgGEaVY6kPFHpSBj",
  "key5": "r8wLtPW32qoPA9iznSKCVSoYZgqtr3UGnB1rdZ2pZsiFd1de3zGqA8GX89iTusWj6sqWcGcK4LcYaxbp1c9YT4o",
  "key6": "64cmWDJLMuMkZBBthHBNthMCtYamwrN4iysPa8sjoh8ZFEAtobabHEaoe99yrYtjVkrNkpAvSiLMYx7BB36r6RqD",
  "key7": "5aNbGY27QXwWorT9yaF4BGFu3B8BdFdu1aV58h7vMi6SPNw4ifDWcyA61roENDHFt9s8p4MD9p2hgsfRkwd7Ekm",
  "key8": "ZqEHPSsU4Rv5xft4V8EzUArDA2tetpWbzEBGbN9uCNCJ1meMLyLuT2HrnqSjmWEqoaJeQjo3FJj4yZTXfhs4qBZ",
  "key9": "344AvnZsh9S3wTXQGRkosKr7BMvEPvXMRkBjJJzBq9LLbiYXjd5R9ozbBtFms4ASXNVxofvRVaN9ceJyN52Tcrim",
  "key10": "4nvQpHFFMEnH5RJDUthKSHPutxwCaB7oxrDK1GNP65rBoGb5QzvNUqxVA6gthYAWV7NW5Qg2SyvLhd6Qz7uHRPGQ",
  "key11": "5TLnzGLE2Wfyho6QbJ2XgdCYNSDE4xNA7fSerfS3SpJdC66DHxuuA7Ra87tjHbjN8rbmmEp3VYHNCvHaEFCp6faq",
  "key12": "27V29uAVNpLZanBmG9b9bvHhKYEoiKjUcVqJRfCBhN3bqdTKdPveNNaZv7gGPAXrn7uVALDVPm5UikkYxynQ9geU",
  "key13": "iBPhVV8X8spFEJ41bUr243bcWuuitfgqZXCdceXcBEPyc47i9brb5bB18r51GpTTwENvhb27LfUNmDT5vX3RUJx",
  "key14": "4bgLLgxbjgxU5JksTKsqwHuLryg96PEr72J4Mw74q3ndNvLELNnuz9sWgDTNS1MfXBnbnr3MAzLdwY2YKdGdDmVc",
  "key15": "3LvEndLuqA1dmZju3tQubNN4F8Kwo5HG9WTaa7v7pFYnmRHTeU3mVzZLX6EBcp8AkRgRXa1QXi5SP1Nupt4yFa1e",
  "key16": "5m3vQAqHaripb6GCi9bCcNVcn8EWYvCaL7XBzcaamzwbdAT7e15Ab16fW7qkpWF3hp3XUcYWNR2kjxVgmWFHJEv9",
  "key17": "65GmWg8MTTNTVQgpec2nyfbKrAc6WJXutDpZpy5iEqbtHi2MmWmxq3FcwfrpKEaqz8z2tt1idGaNBMdg9sishjMu",
  "key18": "27btqEth74J6jbW52Z9HjtmdjLLYJJ2t6se2Bf22vbHXum6Gcan2XQwufdVCcybQAACBjvgBqtiuJUW4uujiVWcG",
  "key19": "Pgf96pfpA3oohwW3fi8k32RWMNRCvkPDfnQ4ggU6oL2RSqUFNTfB66H8mQHEWqdbQ6XusGrSVM7Ew2vgfvYqVWX",
  "key20": "5wqt1yETFStvNREFk1BW7c695MKVkREg31GAUdZAGHFWQzQm8GPAy9Rwt2oKBjU1UK59y6SrXgKJ3YmSu2GXnmN2",
  "key21": "452camQiTFqM7oXeNJGnpgJ8McRxTFxK54BaQmwLpMCMEthcPSR58WkVsW8jJd7pVSxhpoVUB1YkipcsfsSVNRYe",
  "key22": "5q1t7g82nMNt9i7mhbKxd61tytkcM7MvEGKnfqbQ7a5ZLibqoYkNJqBBAjBy2rkhGToFr2ZWD7L5akBwiqvU73CY",
  "key23": "5arB82nJ7KKjbMVbMTfDaFLPr4eBhhXodk2xz34rhxXYyN57Pks466d6b785rY88viNot92jSLLYMjcDZxipjpUG",
  "key24": "4qeV2ubMssDBpZLhtd2xfVgEo8aynqS8PNi81MmYzFuhVUUpxupgcLFFrccjynZnWyLoD3KhJg5wPqtgdLkRZrXE",
  "key25": "3nMSzEQhK9ENyvQ3gxfgEv6MeoxBoj2gZtzBT7GeTmi4QD8HX465MHKKxrDXo7AXx4oGjL5cm1ZPdHU3chgBnwaa",
  "key26": "MeFwJxxWu65YSXwz7FG6LhHca2n9w3SXk2KQoTky4CxHfNm6o6Luou4EVmSBSsJbjsQ4RMm1uhjeizZ9Bw68afd",
  "key27": "AdrC4f4E4xX7wH9xCafxbPrCqFtbxNBs2bG92LUzfEjkK2e412MPuHuaxNB1SRU6WHy1koxn9mNekron2gA7Pnm",
  "key28": "6268xDooZr9NLNmPiWd2zM5qR4RTHE2exeacnABx7Ny9w9CnDLoTWHw7TwidpXVrJoPUfvjS3mqAU4erS5FYfiXC",
  "key29": "39GrGmYweVBRhw2a677cfmdriSZD7RNaaYjmhbTbkAKJKHMmkVKzh6iHk3s6am5c18pQtTTzFHYqELMMhW9jEguM",
  "key30": "2Ghf8DzjH4mp3Ypz6BMpzVPkWdh5j2hAXxJjfYYRxioaS9m5oXMoMqfmnsdMMXyYG9zMguvWUkcvA42HSxJpNApv"
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
