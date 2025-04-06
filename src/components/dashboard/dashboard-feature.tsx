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
    "3mHKo73xWuX92yxMSHV8VnCoXaVyTSaZPwxc7dYhYUAGR9Lj3xq18XsgzKzGxRKfRctrEJsYPmaRmkcWjZwDeG1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HwTpFdC6eYvPZerPzbJgqaSr7Jjo4YLebunxk32Vbj6NqBYVyKFwjbbVfJCE4BuDK8DgCWzEJUFmHsadf4DjUq7",
  "key1": "5fBfQoV1QuoknszaynA6ANAaWdBavo4MX88MrTrE15F49pQwqRe65Pd1tRisi4NmyYBiNgRR9RTsqPLcdUpU93m",
  "key2": "2KMQBTTPFg1DedMrjbG52ueRHvRWcfT5ExX77JMsw6P6betJ6Z2s9JbLGVPdrxLoB2LXo31E29qb8C8T4XGV3rq4",
  "key3": "3RxYssqn3EuPuJ7Coc8dvHL9LRHmbe7aq3sEcXXQBdiPoodbvbmyE6g9ZxTFQWxZR8MtB2QUZ6KLkZKDgYmbL5VD",
  "key4": "2xw4Kwx9EwZWFgcfydRHjSFY2sgnF2xmXwLYbWnrdiHUc68j7YrLviKWFDHnvnpiFq17oBoW1A2JfSoPicrv9TnR",
  "key5": "4egirrncE5Nd67JsxtKP4S1yw3SeUSuzaTt6y9uHkAPj2spC58rWVLH3LUBTJSeoFyJDiWr34XuexBCx4WL4Ycsn",
  "key6": "4EUkVwzoxUr51HhiLLXm495zTeZUQ5szhG2RbsSRRfN1Ji2jbVoghaabS7jkD4RswxWCkS9mo35fLvohoFaAztkT",
  "key7": "39rUkBddh2cArLfZ2cRBKkwfWJTu1AkcL6Q7XdBR2KTHaykgtg6stdzpFmnvsjfWpSX2F9NzEKNhb2W9oVZCdM1D",
  "key8": "9AeKMoUzViyJhKgW7VpStoTn3jUAFao2wUYzT8sbCSZpvJimqFigeLymzvw1THC7TvX2tLommixefd9ZYAeh2X3",
  "key9": "2vcRKpLwurQttps3epDQWAiWL3523y3YzMoXYBz17Y6tzFW3HSrdzRmhzrsFaSerVveJqrbw1wAXv1PxK4svw67Z",
  "key10": "5b5SvCqh4i8R9dr9B4pqvLV61398bgFCWXH7CRjEPKvbPrQtSs5dbYATtSRFTWyUN8xtNu66KHML5SjZcPZYBm23",
  "key11": "yi76fMWRRkTsvS1tDj6qhah2xSBz4gGCGdVEvMJvNv1yx8gGiQKRP4WSEaUaouCZH6PqW2ifSDjVVSFD1tQ9bUF",
  "key12": "MNt9n38BPAEAKgYw6buGSeMZjSEHrppVZBrLj1zRnqgmLo4AvVzy8DZf5ddSE4NECJSJhV7UTKYMLmkf1Le8oTj",
  "key13": "4ZiRLr6jtzGqGonBqdBuqj27xSAJDPkJLk1HkJVhCMCnusX6mykGuoxkV7BhMbbj3TM7B6r6AoWzheyxD6A9xzTX",
  "key14": "33vgADhsaZYojS9VEZAAzWL214sdjPG5Av5qYjYufCzA4Nqfjyd9uAJMqPUJscwX8dn3FxicsjP8HibmyaQyL5UH",
  "key15": "28HLX3ETAuAt4tTmfcub8y2ShWrKWkKPRDEp4XGgK3hDb4c9CXkBQaN2kbB4F1r3qYPH8LsSeKd9ms2ZiLmmetCk",
  "key16": "5D6MDMHAjXSRHbNryVS81ijNw4prcH64yTPekdYM23VtBNaxN8oUZ4Vsk9Byeubte2wQZDARJiHpMmuErEjnYPd6",
  "key17": "4Z13mLoZTv542WqMKu8eXdMcF1zoAsbvtd12Ux9MK8kNagYUR4oUeHy1LKEmAq8EyWWVNMj6SHWy9AMbsqJ3TwL8",
  "key18": "5sHnMuQURSKMCiP2oV2Ps3dnHGq1EaWuumtbToLZxEHJ1oYMiBdodzrAERjs9h7hWikJnh3jyvQrnag2AgGWFbcP",
  "key19": "5KjiVgZZZ9SEHM2sDcCeNew8MjH3MSDQ9EGtXrzpkXKx3zQxGAdvFbmKpo34qhM1xgfNAN1BbTEwADC4dMxdYUfG",
  "key20": "kCZHAo5qDJvnrb34KxMfF7KopJaTdV99gtSSERk2XXe12ruVJc4ECzDksphvDLES9cHtuaSj21zV41YUrnZfd1z",
  "key21": "V2m7HDpHn7VAytHWQCQBrgB36R9aF39Ly1WJVrcREpKNk573QkpmxAGUv9HYoGJUNNkWMzxdAEqu2Ch6ESyU2uC",
  "key22": "57sgY4YrB4yQ9Cy6YNVnuybA5mnPANV6QMWenZHrPYq4ofXZ5oPhNBULkeCoJAEAE32m8j3zAwAi5rbUSEouQc8N",
  "key23": "3FPEETsji4qjnYpocFxfSMUF5NMUaWSr9p5xiGCgUwezpsQnKUHtVnfC8YiGkPhusJvT5KzzDv3tmKNHyRx75cfk",
  "key24": "hrTXbFsABdbHmzVydrDaZ4WjME8wt3mrKfYCrjrKtxLNqNLB2CRFFz3uAuZ5R2WyRC4poD8b6PkgpYzFCASoNJW",
  "key25": "4z8qFAf3dMYcj5mGJKf9P2VamwvWvFmG4QM1SJYFmwCmCEchc9jR6xCm5cB58gJJjvDoZeMW2EPq7dagdJ3Qrvic",
  "key26": "4QAzBegqMWe6zXg5MmiJbcZQWN2kftsHVTfmNJ6nDz26TSKQgAYFA7WZyXPpVsrgVVUSyeTFf3GzkcxLbjyowj8y",
  "key27": "3wgPvuH6Leu3r2QJyHM6c7X1eSmWL2pRCstt8vStAajzEfPWM5AcJkmzwSbhXxREeALzySaXjLHr6saWWdnUJyT4",
  "key28": "3S4Ahh3dYvCSMfrqULQLQm3jxv6FWU3eaB3ZxjYYqTVtGZZqfXFGFSSkCPttXzAaAiM51e7mqQtg7t9BpTZeoUYf",
  "key29": "Df4BSoS8LXrMHYbvMKeLBUF2s8PTNge5g9epGbT27w8yiz2T9DPRu4pDEGMG1mf69S3toDc7hzoYgtVK4FEutyr",
  "key30": "4Y9rY3Ugn1os4PjcyZaurySWFEeiFxXNEMByE2h4mRUsUcYNmap6DasHYFyUEQW3WhKsHuqfqPewwpSbbuuJJyGg",
  "key31": "5Hf4FPTvBLAHYqSjTAndFkQTazq7Bm52iqYmKhAVi184YsrrfCQpdeK3wS5MtQGtXKS3DTT5MHfyCjc4GantaoF1",
  "key32": "34j81WTaveRkGAa5crFyJ8R9fW4o5EhhsRZStWhLEeouSvBEgXrvyr29DLeB4iQnPF5FKzHDJZfWwwV1kcpN82A3",
  "key33": "5ry5SQRZKH1iucdvvVViSb1Vj9zFc1mzgrSJkUrG97Riq8ogu1GgcXaJKQbx5Y7obvV1fmgYWcUPeMCPsC9ji4f",
  "key34": "4gAqm1Q1qe9Qdj3eP3zHdFsp2Gd9TvKqasqVf5T7ZTt1Mg43WcNdDVwQGzxJoZabFxZpwBpBDjjGYdE4s3kpCdxY",
  "key35": "4kWmULmkAmWcHEeyqvfnRYTzYBcGmRN685zrFAm8ftcUxLgTtMQGyEgpMC1tTHHNsDhrGKRnm7wkfStqfrm9ftRV",
  "key36": "4RR2SEGYNTqCASwkjpMwLv5Y6YER2RGW1hNy7TZGmL8b9wa5t1i1njp5KJ2PfLnbiwS6Bi5qCjCTQ2FxqDxL3P2a",
  "key37": "4xswyGsMwTktPj8TCnTy2yMTFZqB3krkEjmqTrUMnn5kzyrWPqH6kjd5n3C6AmDpKdNqTkWZHoYWT3xm3ZqBbVeN"
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
