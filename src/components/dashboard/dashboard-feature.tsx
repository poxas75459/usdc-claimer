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
    "3qHbhpEg8Yy7EhK1tJ5eJambSQhHFH1MmUVMA6h693BxgzhJNz8Jdmg6JSKjAL2v2h5gzDik8nBhE3nYryTpHiBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TbPi8wqCZPSor8sTVXWwNiYjnowrEGmj3t6xxGMihmgCRbzEgkb4f4RHuQ6sWGarXhTXdVkuKWHdMqd5bRQgQvw",
  "key1": "EKg9g1dsRFS7C3aPiFHVQUZmBZydqkEThY3hCmuPzPeN4G9gVgLi5zDdvXAH1p89pvKhrDb1zQHv8hJk2Eu9Sn5",
  "key2": "MhKuZ8E1qticCpYt3CXwCubeZigsQZqa6ZkuQiW6WnD5N8f82DyQAR7cuf5QMAAw3YGwHb7hUHmP3QQ5kvcX27p",
  "key3": "5GZZcUAAb1krKirCfWAd5xSVfASDJzPkrD12kzPyEw1iTUZPibp8McqumJYoPnHfwSHX4c5h459rFhMvr11qLct2",
  "key4": "3n8XPqH1oqcQjimUqnMKsJA9Xe7f3hhzAzPqQUnajzTiLxTZqjinaJjj2FJMTW4GjshVWEQX9DmFwcVF9UuEwUSm",
  "key5": "5LCsB3MdF6KhztpVqG8EBrUkjWZgZ3EYdhT5vtjHaPzcwkyE2Srs7zPgPZA1rvRnFAF4d8NRshk5r3SGp2qjwnAV",
  "key6": "4p73uNuWx2n6vAFryWYn5BJTNpN7BR2pp6qtF8vsV6RF325xrGv9PzQWKQVasGEX45yhHVnE8WHzuf3gupYw3NRL",
  "key7": "4xvTCdWRGiHQSSA9EyhpAAaNAm9tY6XQTKYRCFKMg3JyuhYfTQAHUzARHSnN4vYK2DWJV8omPD8JygzLG1bUXNh7",
  "key8": "51HJH4t4wu386ZVDLBY8U9XE1Qvkw6unxdHJ8D79t2bRQbg5TBdxn2QEUwvscFoWbEDuwuurn6ggqUYGoe9vrFmS",
  "key9": "Qoxk8o645168t53zmF1xhPeAnTs47Qvm8S77UeFUKX8GRrFEk22ZkH2srgoJRJRhkZZPYmRwtMzNPi5W3sXehcK",
  "key10": "4EcNWwEfmAW3VkF4nCWnKm8VXxybMJMPc3n6zWAxMDZBXMyFazoffdehzFbr8K7JHNJaahpbsJ3hiYbqcPj3worQ",
  "key11": "3zEuEk1Auo7X1KSrhZo6NXoCyFh96PTywfCbmaHKaxH7fQWgcURxdYPoh6E1PvdUSK2AMzTXKRHJDSMS5AdP4iMH",
  "key12": "3oJgNSzKC8jBHtKHaQDYBQo9s1UzgMFzizZoCeotYmNYCynVshg9kxr27fKotEUVoTnjeLKJJcEritAAWag9ceoD",
  "key13": "3UcQvUGZNY5JBe7XNLzmtXBbyST6DsijTDHNjKrYJb96neszfozHU1i3zZMCJDnnxaiXwkaABMqjUU4DFk53rMRs",
  "key14": "2LXSMwUmtfwLwP4o5ALfnn1x2cP3PDFxabkXZkUFj96W7csMmF69HwoTzGJ5b8LqrJCurwVEiKDu94ZQV6f6N29x",
  "key15": "4bqHsr3MvHnDMULGh7afvc6nqX3YL5gvMgcQBUi1LL2NTQA4mZ5PHAV1enPSWk5S3g7MbKtUTzuKSuCkFVQFYsz9",
  "key16": "4zrWQU4XzeWcWcaXST7PG1YRi7iP3bYG1ReyUTiSCFjAr9xoPNi89kuo3yXrvGgkQB2wbjqvgiKhPF6CwR3zm4y9",
  "key17": "653bMdVxudh3cPUyJf7t9VpRcih2o5FGzyKk3U9cMRm11AcQaYPvkgVcjJKyxWoeJpVMKtYHoLvRLxnswWKM3Fjn",
  "key18": "3zQdkD7fb3TRVzBrxrRxKGC9mP5mZnxmpWjMU2qrzPMdKMJ12jSbwKrTzsAmUACZcZXbQcHNGGhLbnVRJYCjHXji",
  "key19": "H33syMWKKRzZp6NoM7L1KApu1ebh8RdNhCBN3jvcdbyqLchMDPv1WSBeUR1b1vRLHQdwESTo17fsMBA1QdTeySM",
  "key20": "tTGX3iAmDU38621dwPJnQT5ZS5qLNG3kxqGT3VugyDDBaeazKTSSqcR9dr564ixWe2fyTMSQiursSucSFsmyV8f",
  "key21": "34RZo9noPPgR74oEnfdsXo1Nunjk9iuqHZnnUPApYUDxnBmM8KJkmffHtiGqfxe6YsJ2rpfDjxxDnCJXmQTgZ9VZ",
  "key22": "4bKzKYPRdpJU54yojNnpC2perodwh7dptnrhF79dw5UL4eymNHjtHn8SRoYVMHakV6HTGauDsAUyDiWRrrXNJ5jL",
  "key23": "4Z6qGyAJeyim4duWLkkemSLLNUi8y1X924AkUaRcoEviziCYkJaQx6AEL82Qhkmk1rDB37XJACy6VXg6YnjgzPbn",
  "key24": "35HUFUJv7GRCBYbs4pxhbaywDSPaE7P8Ji5snu7twnMSwigfT4VoWYyoPGnERjcHm9ZN6j4u7WkQn2uFEDTRq9vS",
  "key25": "4d6PkgmmRJ7ej1GFsP7diGnt1aCsAfuEV8QYZ6mGRqtpiJy8rcyu6gPgfMhRkK4csjSwQM7sVmP69AHk7HkxP3XE",
  "key26": "2WS6xEE3WGnYn1bKaeC38D7QQLc96BeY1PzgfxbfUBvTLU82J48MjSK2Fva6LwN2hZfyFmBswNjNRPkmQv8hYz3s",
  "key27": "5TWpTUz9WBWgy1x3MBfrV3o65sa7Msf428LcH2Tg3H9nf2d1veFaqVsoeEDDYC7YdQE2oMbYnUqmHByqCKeXTDrD",
  "key28": "3uVc4dj4Nef2PcxBuQQAsQuGAPjZnZbKCdgHRy11Y7LC7bYe4aqTBVwSFPnWum49KhiEGFLybGyyX57Gw7igQqGh",
  "key29": "4GK9f2DyYmKDs9wu8DgE6hAKmSCbNtfGdukeKuYexbLCPQtot8QHKpM6oDhJeLWsLQU5ZkBxR8aKcBvXi7Ptjjvd",
  "key30": "5Z3omjKRDdhhf1p9Zc57g46yjs2Yd5XM6bPDbjL4ZJ3M1Q5MJeM68tRD6Td6nnTaChQEtwxe4Q6CEK2PjtoFiMVK",
  "key31": "3jhRkzBAjPrDq6LrLiV1WExn6gAis4RjERao6158MrbXpzHP79PfYq5r3QyKCJFjbcjipFwWbgpxt9x48aDa6Cv6",
  "key32": "2RCc46s6ZBkQPRB229P7KZmvCyS9RpK5Bm1K74TZHcogCJs59vZ8QEGuX3h4h3DUTxjHxibdSMq1vg6u4yvd6hd",
  "key33": "4GaFwFQbkopPtvrALacmS68dKoUiYTVHa3npxLUCJMjSZLZ4rzcpNmx1ki6qmBbjUQmW4sZKHvXi7DcnxTsLhBiv",
  "key34": "2anbYJr1MfCnF4PeM6bwthKeFG8SNDBMtiwjzkbFCCB3G86Yxkj1q2wKBx8aTiLhF7SzrQwWiwYrBS5L9BZq8UAV",
  "key35": "3FgJKN8kmLREXT2xYH6kDMUpzgRqFQPWz6rBAUdTjEg9ne3xekv56D3nuChPgyx89x7YUsFx7si5J117teGYdREP",
  "key36": "5Jcht6S2PzYsraoGLYtF9JgjPTDxQjZDnzmFkyTTk2T38wjX7x4Hijd1Bhp7STtxGAahGbVjJNLYzMtigyDAWbfu",
  "key37": "3YtkFfc4DyG1yv6DCK9U72UGoERWUFYURi4qKsGGm6scGTDdGA33RoiERY7f2tw8kcqKPMLcGyTAZdZtjw5qEXdr"
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
