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
    "39sjkmSuHoxDuWC1cBGH8gLXL7QdXrNcNkZFpD8U5FLS3415u4uN4ijwEPyghQ1gSJ6PmhU4ATuCeVfbUd6oU9o2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QKMGg4MqTLsLfubipopSiwoJtXK2TBmhAHUmjqw9UyT71SXgwMw85hpN6j41BFRNrykfYpBpcZYVgp45KxKUheE",
  "key1": "4Jgxdu7zvkC3MYmeXD8rEHtWJdkGPhk8ZQXj7Av2ZN3byfBVB5zE6TWP4LuVnhoCNwVP1qVP7tMxEhYQbQiEgwbV",
  "key2": "3A6Gq6cyDKJdLjw6wiQgSyzVFGyD3RNvF8cq9SRnXaHcT7tqsphNsdfwW7cb98r5aXSy5DA7AMGPLMy9MK4mVa2e",
  "key3": "49a3BYJH5h54nDknjRx9evHYjtaGGczQk27pL1bcwTERwQcgUvXfK81K8ZuT6qKq84wZmnHs49Buis1E2JmJYxMY",
  "key4": "2XaUbytMgFr6q5JTjDpFXtHuXiHdrST4ErPdUyzqTmfhrodCKXEhNvx3GAjwH31rnWfmmc9WypUtN2m5Exinfmx5",
  "key5": "4b9jkJYYV9H6AR4PYUA2dyUYmr5ypHi5ZHJkDFGQ5X4r4QHmj9xqR1tWwLUV1UbnNo6jYzTkoTVqLXAxWaChMeAG",
  "key6": "5wCr6d5knTiFi7uZ4V4NBXbjUKcnjMxKmfV4NBD3nZYZFf1nVsdvLcCh9CtWGRLj7CYVEEwSzNiTkXstGsYGTM8K",
  "key7": "3QMJgdYJGtUYAAr8HjRedLWb5NBwHmX4memPhMWWyrXeie1w5tGgeLHnQS1LU2kiA1MhBRN4R7kPzHfETxdcJuTD",
  "key8": "3TU3cqGfLznw9C73ugBjhUNDxxrDgVMVx5bGypAAeZpzVRMTVhiDZ2zqeXSbwHcqxUjLMXHfeKSQeqL4X2oAsRAD",
  "key9": "5gU25YWdk9Mb8mEACbQhKWdPnekeCcdg2SmyBBZUcPcbYbKHGoAok5gLwS98QvFqPtTDx2sVkrwXSy8dGionYCTJ",
  "key10": "25vr43xexRghEoHL9ZSztZhCVQmcshUupxrSpR8LNEoqj9nD72QwzV1HCEDuaWmoXztWzqHt2ByZx12cgxnuvuh6",
  "key11": "5FeGzWSC1hQCqjCdAyXuuxw7FceWW1Q2LUYTWeXLaB1iv1TF9RL7RFK3M2D6yLiXMjz7ZHSeuiFnB68Sn9cdA7Hp",
  "key12": "KEzMRNDBmHxvqPkHYSCvVvm4cHTRPT7DZQckbsrpbRXaq56dBaNd7uzjXuN1yACWRkw9WzGNGmwDNViYqTt6ris",
  "key13": "2KYZCRNe3sUP16zHaXuVyTqFggAgyh1CAN3V8To4tL7jrTtYSbFZt9KiJuwuGnxBBVZwYWQq5y4P3osTNW9AXcT9",
  "key14": "CtB1UCymUeFNeK6B6BtpRr7sQw42V16fS1AXXvxiuCVA59PfWEjC7vAJjeZcqfV3cjCYALXaxUorxAc7Na3KMGR",
  "key15": "29Pq6YcX1LrNascq91m48C7Hip1LVSEVvzgsu3WMihLRPYcG34fAWa2kpNZmzo2ghK3CKVJdoYTYDGZsNUy6h7DM",
  "key16": "5dSUGMy1YJvDPJ6ubiDbMJMFFep27dmpNKTDLVJ8mX3kJdrLiUmwpQeyJDK6EF3NNb3hgwZ48aHehD9xxJDoN9zB",
  "key17": "5yqpa9R7kkS3ake4yv3kgVpLBAXYxUr2QawAFWWLPnFoFrFnfePU3Gb1EDTP9MrE5TetgTQsZwDjnjdqSnDY7Wst",
  "key18": "SxtNDXwR9Dfjmx5bT8iimnux66zdLZpsoVQVEvxVKyFtE78JQPDHQodRvqvoq9BiDESx63Y3cfqeRYvJHr8HQLE",
  "key19": "318fByyGdQNxEAPVuZ3qVy1bs8gbhjMWJpNDp8ptiGUwPx8yyLwVBcBmdtqN5zMPiy42y7QL1D4LJbX7gg7A4s7R",
  "key20": "jhViU6PGqHKaWAMaU4Jox3vVVUYAy8PAr1p8ARbYCqMvZ7ToFnW6BDp2DtiR555qyE3LcAXQ3fnhg1uLQLCsEUu",
  "key21": "27QEm3NrSvZRmuQQAib35qbp8jYaajqfYjwUwNKDvrCUCxv8PTfB4QyHLUWYzoL9NUNhEzqYymHxoWLbMZSpa1gV",
  "key22": "yt45bX5ckepYtasHgDAmBDp2DTMVP5pkrLoa3HsCALM3g1fmBG925jfKUMRFN9ks9WzqozSnRET7kR1cjaamACe",
  "key23": "5vXtkveU3y3bKrUGys6mLGuVLAyLK12KnMJeyDs4oiMZjpVesXBeUBtK9bYvuFsmJwJvkSpQFwDaQ1bv4cMNjNds",
  "key24": "3WW3CcwkW7ATTN6L7dCKAMw4mTqc8TtV51RbxnA4RYFVEvY99LfZWMzfDJVEsCbiiWt6PeLVyVwrJzWzjKqxraWg",
  "key25": "3vLVnzEVoPAwPEggqzQ1HEiTiHCZDfBzDdHUh8DRsccVH5Y1xY1DPDRqQMqQMuyLk2PhDaqpZH8tkNhh2sgnLNiH",
  "key26": "5UjHwTgFdtR6VKGnzm3dGbK7KA1C87mLbGETB92GKaNWYrAFu6pbXVQHVMhLoNJsJLny7izDafe6e5Ce9HQjd7Gr",
  "key27": "66KyQKwVx3hCeofMucUaQmLZGT7xhTbPb2LmjxuFu5SWGrteECPAghUfb2oykHMX4fpVX2R8pii81Kx6vE1ERHk3",
  "key28": "SWSQHcVsQ671VTeqqBMJ5B2yVfKnPj7hvPZ474HPksfk6JTax1a2ioo9WMfpvwSq1xp8ofkBcrzbpZdLeNwxEX6",
  "key29": "4CMKsTqoJFd3zmVwtbDcQLUfHaUftWtTdSEf6A6VMNuEeHwcaDgZXcskucQE2RroGTT2rw6DkFmTgfmbkBGczXhL",
  "key30": "PBxYxSnyCWxNZEvdNuCNxqvKqv3csLZGP3GtQxCpBkY35SeKeuFWrSQy9VMn7zUZCfbVfVePuNfYT3iEtpcpCUL",
  "key31": "2A6zRe9iFfKS13XSrGAwqepo1orxUcx7MA8TDywUobhxjzJPVC1sigBfFgkntv9fpfub8zUC2SVR92FeUDWwdoV3",
  "key32": "3kQCPGSoKE3DnKgsY3ZpLL7Vibk11Q5Q8jy77z2etK68wCYpcoTossTQtmyCga8AoG6YzKwqWyMuSTVNfbV7ZM1j",
  "key33": "5cbfEFfTZvVNamMtR7vM1rJDSg3NuEysw3o8TUmzsGLj36AxtAdex1BkVNYdiXJhYeMeLDtRYJLFAxW8hzvVN9us",
  "key34": "7qnZTHW7NFSQRJBwcVKUBtrx7LjHSRmascMP2CvYF4G6GtM5myXXx7Hv8LFCrPXJurfi9BBvxnfwi6BeRGrqWaz",
  "key35": "5jvFQeGPfe2tQAxh16VjixpEzPRyAjH7y2Nmswx5XY5aMvDyt1iRMZWeet6V7ZPaSRA5hthN8gATeq9adY1tqezd",
  "key36": "2wGheyFYBKrQHTb9H4b6nQGW9ugpvBwCn8tNmcSVSFoUsdyz6kp8NBwad6pPNQVH3HSa5Rb2Dp12GTakv54urAns",
  "key37": "5zKVnYyk9aEBEw7FEBcq4nMRBzUWfUkak74KYwjtsNp36mR3PJhuw8pom1PfgTEVvrhMAPmyAmC1rgWmjMKua3P5",
  "key38": "2rKUifBmjJi3zc1H9Lv1PXXXsP25r4DM9SU8os44x9Pm1ozLmExUz9UQBtdRm2qtGxwdCEUUjGzqPSjsurSkmTjD",
  "key39": "5dD1ZUkwkGwMFwVhcjXYdA5H5YHkMxRT5bmZZzxsnEm6c4qvvXXNWg61TmLFXEGAeyxgVtqKNax9XY2yLsd2p6x9",
  "key40": "faityYDyp5h6ztdS6RkGkE6pwDgGmzxmXLGCZ4JLKqtQ3L6MxQHrfKzxWB8Vc6XPrEZA3PxroU8rvGSFGNSxQRQ",
  "key41": "4nzJJSwQ3W1bFjvftD9Au2ufhVXYFFQzNTp5GScMGABHk5ah56RokhCHTHe8jtR63NFHCmoazDUwDCUC7MygeF28",
  "key42": "2cA9Kk7oNfAmBiUXU4L3JNJD1Qp4a4HgspbTgi1EehjjAyAqv3UaR7Y88mh9QCwVYD5SHP9qDNyQ3a5Kob6ogKYH",
  "key43": "34VSA26MhffyZ3HjDhiuE58KJe4sLL5HryNhUk9sVRXdTpDs6LszkT7XaXPde7jFu63MtRThJB48Y9fzk9jGvH1Y",
  "key44": "2UKQZEevsbanHjwmUsp5t2JEryddSQz9giKr9SpcUSKPWbxPPC4w61fMmKzmcV6ceCy4hHiKpyYpmumWc7VxaGfi",
  "key45": "2Hw9DZ8pUWXtWTrPm25ioeEEhQnououuEUHJZ8faPdJoqP12wPGpCs6aemubL1L3xSwSTFauvcYQWgvmb3xtqZcL",
  "key46": "3qkRZUqKbi8UieWq5r7xzsnGhZsdqhpcgksP85FU9QvDmjz9cWAVb8ixQymys6izXBAgg4NtYLumYn1UtgJc2RDF"
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
