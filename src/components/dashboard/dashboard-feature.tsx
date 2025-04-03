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
    "3zHidPvrENWfXZF5U5d3edpmEmLgmR1Cn3H8xvLbTm5TPn9nJFPqw5HhmdfJ98SVqKdnF21UBatDb3Re9tXEyvBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DJWzVqunW1YBmsKHWMb5WGMfrB6NPfzMmiTePCK3FvzjCBuBjRVcQv1crV3nyVbvQZ2vb5BCd2jBsYmE1iuvL3q",
  "key1": "3948RyyGzkVj6DTX9k4HVXh23niNHh3gR4Gw8UWZtRYAzNGcG67D8dp5YR8678wVJsqk25eWNqcpbHKk94YwvdZF",
  "key2": "45aeaxdP4p6p6YJGa9XjoZXGdsVgptHrWyd98GWrPxWUHpfnmen8eciFFfDAcjJDLQ8bXNUDaTkDC6rjuYHvdahk",
  "key3": "2sqR9Yp7VDdXYQP48nyXW8gXyGw7iSRbTAbDUR1KbHK389D5N6YunN5fBzdWYB88WkjSfNZDBreGMgwa8dmgfc4u",
  "key4": "3CFN156VdvkooKpgRDYFhndpJSbmKWBxScKzGw2sKpuxdwtq6KH9SJB59Fcb6SzpX63sULaoGvnNjYqiKUA1HDqv",
  "key5": "59K74RSBgrxawiQZmyT8aVhcu1fiXGHqjyTwikdFZxLSvZuhrHpUmc8ZaDfWLTeNg1Rn2miMTCedjvqbtDvjS48z",
  "key6": "2UZQ1kK7JHWG1bVyWWxBesKFtbtLLyJBBuuU45hd8geHsQy1ZGvXvpvoMHt8xJJpT1fUP5xBieUrnZdrMdcbLFc8",
  "key7": "4X6piypwEdko5SPfC1C5sspY5tJ11jFMtqBcgjsYZ1bE4DfrRGEQJXRQZWGQnSya6ZNJUNTZiCqommk6ufuTwCUp",
  "key8": "AVcBv5TTFzd8JajMfWSVJd74qxcPGPLhjKyF65KKJtyjpBnVdAdoXtoTZ3u4NxQAKzDfzVf77QKgJ2YwhTuk1sx",
  "key9": "5fdkFXcsBXpu59sJ5frSLo5fzMiJqEdE4G4nsxzoVVYqjQfHN68nv8nhWjvCMQkd3RDir9AMpQpTd9Woh4t4jGBK",
  "key10": "3ykAA6MDnuhVHKFpUWPLN2EoFkM3Tz3vtjqBkdTvRv1NeRHpE37he8pmCyYCESuhAW9RcftkhWUjJKHJ3WFaBXdg",
  "key11": "3Esx1UYUa9cdyKb7qDUfm5bZZEX2r7gtw8RK1sa2TLR5JUUKhv8ji5t2ansLdk8GeuSwLqm2h3E3wUtxp1vSAU51",
  "key12": "2NGS8SAvPkMXM6xBzAAkcAHmXiGnCKvRieQcWSpncGLTjuSH4HKTF4QK22KkiufYgWdJrqK6ZEJZWb9shZ8DpYk4",
  "key13": "57Kco6njt3VQbzD5QRRR8kKzDHLDL741mapka8JvbkpPfgtkSzxN3WdoYrqnrRZ7q2webxrtCsKa6fvjksCbWNev",
  "key14": "3rtoikE8DAM1cj1TbGNJG4mrSQhdzNMwt3Kj1hZ9dn96nLdcJHUFSRGr6y2e1KPTfpKP4YqsSYdkYDn4ZUrmx8q2",
  "key15": "2PVKXkjmonKGeJHuR1ydUaFbM7pJiCZtV8BX7EPtCPYxzyadkM9eteBUQxLYmtfHYuGsxhHZwn8WJuPGpxR7kSEd",
  "key16": "4J3ZFEXQKsXDTR6gef7H5rRqf4au95quzr5ihEftojwEzzYHALTVtpRDJPjc5cQCNDCBxFwoMYuKWpGU7sT7XT1m",
  "key17": "2R8BKYiHuZX7N5DF2diu7DnAJtUte6vkdEZoomokz96nSz6eTwAer7gACbFHFHJAxjtqWXqLry5ssvf2YAgsoXB",
  "key18": "46zRM396KShpS4p7NK5gAoK2MEWkgd8hFK9JByYtZv3PRMwEjksLQSQzBA2RoHSHHYa33y8fF9Cnwnt1ooYTeSpF",
  "key19": "5TpwubhwCqXxwFbv1hREQKD167Mpzb1UTG4vb65oAzASJ5ab7ckwwk9jQ3dgzqeCbJkhGsu6yvNt41xTHEH2cJVW",
  "key20": "4ztdQBBitym4tXAba246WhGpPnVnxD3GT6A8tX5Zt88ujgcb9Si5a7Xzd92nkJoihAXuzaLXnexK8WPwy1vdAjmN",
  "key21": "4KoVU4toEkxbShEyhZJ6gHvu77EqmyeSsQWNLU6G4uLszaGy1Fi1aZwAfPwLjz2t4LMjg7GDvRyX6WP1AXCuFPwu",
  "key22": "2eeKqz4SFsKSHZx5dqXrtQTELhmznsRFubUo1Czch81oN2zdPnfq9k2CVyUDSVyxkzUXfA1kPRQBxXzvUiBnGY6J",
  "key23": "2nxoJdXYmjwqAfaDWLA2vE1r92QZ8YMjPm5BwXYky3SmUPY3kYyH31hWcC6osqXPjyaNCAjBo6BZFVyT5LpKiA3V",
  "key24": "331tnyBjm74E9K2gQsV5rfUevMLR2STCCGu9nMus2Cgx1CCHhpZ4N2zYPux1woVDLd8MVuCVutEgKwm2KfPuL3pZ",
  "key25": "KnR3hftkLV2ZFkSTw1MyWZo9FvMs9spC3dcvCZw6rPDtcB6SgJvMzYExUYXwEUfQpd6JTGfdaHgntqb9rXcyx31"
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
