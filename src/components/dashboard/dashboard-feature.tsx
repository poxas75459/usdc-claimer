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
    "2WBMVUS1FsohkDWVcd3eGXRJJqjh5cDxpuVnCbUkUhCNE4JzEj29psr1VzSa5o8mXr2TSh9yGQUgnKSrm86otgcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BR7RdH5QRfJP3Tey3kj38tuzKy7nsSR4ogcXD9NUU4oAxDefjYfPzy4wqyUqwEsdNEiDVigbotSpWVwtaPmTbr9",
  "key1": "rqLFdPJUn3K1sbMuUBH4Yqbh28hcvePiNq9wWKs741zjbvHiLskckJFc2UVcokmdJCS5jjEaD165RVZrtfhdC8j",
  "key2": "4PoCVxr3eC6g9hKatgdn1tCXgdqcyAdhyyt7nTmBhqAGqQg3FSSnSAyXApX9vtmPKF5Qqo4Akxu6hbStDTDfSDrk",
  "key3": "5xvwFSPD6nGEwuDnsTug9FtDVvduVcvuqU1YMTji6BZW5hy2tM1zzkR35SdBxehpGvEqRaXf4uqnNCgdxLRAvSi3",
  "key4": "5fqXPxQQt5prWghQcjXaPgyRNEFcw3YW3Z4gxgybq8GooxRxuFkcbHSzm56DxiZgiU4LB4ggSLQnVmZaH3QUoAVG",
  "key5": "qdR1FgsYwj5vFYuwDiCSs75MrhL8TaXTzdJSMM66vbdVPhSi7foSzfjn7RVeC1KnxhP7KHqvYzdh97iyWw1pJ6X",
  "key6": "49wdEh7xZbFc9e37NpfFozdANnRPmouC9AX2kp7FNk3aEkoWh8gLtLAhMM7fR3teR6W7GRncFbW7ezXbvjYzUEEu",
  "key7": "3Q7tiTN6v9sKYywRZgFPtpeEsx79mx4xN7TfjgeHVeHnWj1HxEzJEe68GtZcNdD7HyB7SQWcZey7KT1qXtwuPTV7",
  "key8": "5tfkkV7hMY3tJ9mUHthZ6ryDUfstW21k1e7V1YY82hqFVkHVeJq8b4wXKWuo7DZy3gcoJvyQSWFsUztccRQb4rkj",
  "key9": "3WY9n5H17NEnd5vniUmpkqXjALs8oDuvnV23bcQxNz4FUMvHBc7EsQKHJyrhbe39mkcxcS7aPE1dNeWjws46wFSY",
  "key10": "quCA1MRHvJUKifgDFkuZwLXFKWTTgtYrhinfYFYTqFgxAaCsiEAU9df2nQ9WPCEmV6UU21f4fQBGNFyx1VME5LF",
  "key11": "3CAJ9DBQsVPrdS7puhARjhJw5cDgf6schL5JpqGD7uZUseniDXUeTfdEvhYLSLvmY4XrV5tyAfrkrGzPYZaMj3j6",
  "key12": "5khFSJDah9zbLBKL18SQ3bJ8GADzdqLGGkhTTbuyAeYgF7fKYXNQAUsJvwEizLaPLRn85MrFUUtnf1KDNMBmNrxr",
  "key13": "4UqPwmyKR9n4S98pVBQZCwGV3xEci2UDj4qXeBjCsyE6g57GYn6ug4txt6MrbzPhfHGhLJNT44HbZyS3qQUa2w7i",
  "key14": "4G2Pp76fu3dsRBKwSznk49qgpxPeB6Rzbex9oNn54vG1rBSzCEFmiNTdDuivEYbL8FaaoKV7UJnFi8BRy7U52kVf",
  "key15": "656DLA4eHQciAzkGepTR7tJ5uPtfg9jftGrnaJ1Dx3Ty9qJkwAZi6rBAez7r2Kgfr75qkZkCGRx5oeatwTEua1Hn",
  "key16": "321F95HoCJdFbbUQSTgQXgCndDZbrRJxi9UtRR8KZ9gxc2XhRGrnqqgV8agmueftREmCySGatUwRkWhB6sHn97Hx",
  "key17": "NDfQLrdWqcT9nXseXTdLc9kPqscgZgDqzWy9xhWq8qWaknYcCbAoegFVg25NwAZp93HM9NeLbjMrJ7GiR6zb5ay",
  "key18": "2XSxzYDoXZJtgYyHMRsZBocXfzuDEyUYH8cxgDKjsSht1nsLUAxyvroCgZDzd3bQzva3cVH2BPT2xayHV96VszVL",
  "key19": "iACUmzGT8KKF3j5avwyw4vgQsTQkqthJY9FToEm4HeBNp1YL8EH84qHJB1YH71jYeh65XHXsfNH39dQ2XzegSbc",
  "key20": "2o5ijYCK2r5k6yskQQXQ69mzM3aSfdqMME6xMnXvrqeLz3UiC3psf4y3Fyh8swUkR1JJaJVPDqh8ZWqXyNYrFuJw",
  "key21": "2t3YFpJnGVCxN8fKVnpFC4CedansD73XwiW9q73NVjxHmgiGrji7sV7YPFzKJ9MYLzEWEKD1wq6mKw6GXq2QnAFs",
  "key22": "5MeqNsqtD7Tc1738PDiS8Zzu29QXiN7Hm9pmrEdZbMZTeoiTT4VVc5cGfGQxDH3iH43zJpemMZW16FbVyCxB4aNp",
  "key23": "5TjKUforXC3jCkyxghpEi8enBxKMCkAarwbYYZRu8kCAQQiGEhcQjRJafftCKr2BhZw9tHzWoc5skmTHBh2fzauh",
  "key24": "rN4zkbF1MzAkPf262MWWJBMctA3fzFX33ro61UQjCxVocezmSfhi2CgutuATy7sNj9J6z6mjYvvrtW25zT7He9u",
  "key25": "2BaR4JHRd23cGP1WwdrvpcAfwgqHjrK6tNNcZKNG8gUGiKYg1jtc9bPjTEh1r3xvmHzVyR17Z3hc6nfDB1EXiAnu",
  "key26": "2ceyBfEqMx9BZPsrtbMdFyAN2iCH21cdEYzozvP5jo6fdoQhBiAgB3XM2KeDHGoCKfak3bXcy1WB2hkj3jWT7Dzf",
  "key27": "5uFbdR4GPYbzG1J1RgXpqYgKwzggxQUQttRKtw4fiYTHaA8NHwsVUcKWtkd3q6bno9Qi3WBgxb5Y5WdavRqRNDSL",
  "key28": "27JJ1NeJi6ZeRuxHxj5sKzZq3Q44Gitb2eqRfpcVNE1BPbUsVw1F9vQ75kZY1skHGDETc8yJxdmdMtyiRyBU93jR",
  "key29": "2K4i3AqXYoN8fWQotenzSAi89FZ52MmqnC6Vn9DxFqMASbeVkzFBPLiHVfRM1RvsMTyiAk5L4T2Vr8fsXXX9ixKE",
  "key30": "5Ju1NbZSD3zwRrbhMA5KWQnbnMEu77aimJxRBqhUK5u1a1AsdzRTWJczDZMBzVR8xsWMSvsZCttYNv4sHnNmXST8",
  "key31": "3duZVhEroPKx3mkXehekTBDwtB3mXviJZevsbnvH74aB2Vym5CAZ9FiPtX9UEjanP7BXMmFJPJnVHa3i6dQHy1qc",
  "key32": "2Yy6Mvq6V8TMBNRSLeiBbLRXyVppBF4w56U3zBmvaC9Pe1YWmQWhYAQ3qkqnDqAWtJ8QwcrMEJz2tumLFkE9wdQp",
  "key33": "2i2P683pTyZsQpYvwoCLcZzZJz7Kf5RnujgdQSxENaeikQp3GKmf3hZSquDoFw46mga4pxcny819enhhFwSTRk9g",
  "key34": "4GVSh43ju8wQyy9nGEK2qzvsVr3iL4PmWkKzxQWxewxF7NLDARk9wKEWxJVJVrHWjqn6iy8HH158UahPYDACKCdv",
  "key35": "c6wnUpNLVfeEoKviAtuf5L89fn67aez7yMTofSwG999AK7yKg2ZRFzKXVDus7MhbsA8NoGYsGC2BFRuiwG15GCE",
  "key36": "46LXuDGEcwexEo7a4vhKf4VqUL2Pnq12y98nWYabVTK9UzpYWgFN3B7sHPUx2xnX71QiDcMNoeBGjMYfFVHcq8rC",
  "key37": "2AtLsFbMR3t5zExTGbSMPm3ZJdkmeMAuvWbkbzS9Hh8MZosWbjMpSQdhDweqS6rty4GgNXZC44187Q7LsbuzmQZj",
  "key38": "5mbLZzzYaqyvUkeGAN6FGWGnK9ydKzM877cq3ysLGkaVTQ7QjDkQhJ29ZtDpCHFQkfiRR2ke3zUM955rWTd8fQwd",
  "key39": "4TghCKSNgbXzHjj5T86XcVtrFZEZAh8o4pR3jJSE7rTnyYe1C6eJJ8v3DFUKSwhCkjWtx8Ftp2nLPh1nL4ZPnpsb",
  "key40": "6CqcoEof3rY1JYkGjdENnfKc4rTs3imKQqL2WddLRBPySsuq3iVoB46dpxxuwaiDDV4y8CYAdXVY5t587xYDsak",
  "key41": "3iSjudKc4ZbXyzYX5yJmh9jnmYjGPLqQs5somaSbgnHExptCJe578TeUsV8mXNWuViWQmXkQZJkVJTvUHjzv5gZe"
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
