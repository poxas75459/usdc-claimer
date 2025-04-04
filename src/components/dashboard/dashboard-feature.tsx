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
    "478mVQ4QzdUE8JuzSq44zcychUN9GYhjPatxvNZRDgcpT9wXLxGMZRhfjD8yp6M5kFNT59hBmThugAdmjgykZPW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kvrbK8jXLXdfLSY9xRa76f8c1JjZUuKsUNKvCH4Fxibta5v6S9bkfp8BnQ41vApgh8sQUCh4hCWxXNmafnfchGT",
  "key1": "4KxQV9FbRv8595LkqwaiqbTdDUqiwxWyyBnSLLe73eddwbBqXx6gFKTT5Fy9gncR4MhovxaesmyU9rGFNZWCN1La",
  "key2": "48kXdA8Y6MmvvzGmXMfRNmVARUS1LFS2NQzvoGror7hzyUGYMgdSboxrqWkbLXbkQwLAt446A76qgN3usqL1zZXs",
  "key3": "3qatkSJBnsiLzwEigsYpMVKycKTJPSKRp4SZDfuft9snFagCL6xuch3xweybudtpgQZwhSCGYKy9DJpXt23BXZBk",
  "key4": "2Lo2dJd31oWFQcU8VXfx5m9HQd3SWtsLVVvL5poiVh27SEfXqofvR8LJ2XBdMFhTmT9YyqBTcoU96TSX4SQLcve2",
  "key5": "56ULUMD6SMpHmQH8LSJyWyrDvNhMhkpxnARsmiYp76eNZ7C6x3i68d56uj8fqkfFKNXhSAopazgVrbE8AGq6HHMi",
  "key6": "2CSshzda3NGPxNeKygvjDJtUdGiXkquCkHTpikiguXuu6hop8Tfpx2726sd6CjGy1gmYqCCTuidbX7Xmxzv6mcRo",
  "key7": "4VzUKpuA2yuvbXNgceGHANhuQu6haU8Mx6LzHZHaEPK2Zt6T5iYcTe1zzj7ap9zntQADDBpWvFhdzGP57HNd4zvR",
  "key8": "zvBXL5SXJe94cAhj2TcLFrmi76Qo61CJjs3CMpdzXjjt9iFEFfRQnJom9aaQMpvk8EZG5oyRBSHv5NkWajfTwqa",
  "key9": "kweXtcnznofM31HWmyHG9a1oLa3jCnCb1fXGLSWymxcyqua4bxywQQuigFH1fPti11PMqDvh4tbBsqd14UfhP2J",
  "key10": "2vXma92frZiB98U1CxngASW7S6QKXXeNF8j72GPpTGKN5tqu6uj5D4h6xADuwYCRwh9htP42JWcfPKFeGgb6pXjK",
  "key11": "42u3Fu49DHscaB6N2Tjf9dCjhnGMesogwMFHoenqDPoKgQ5BgZoPBhoR9oFkAWc6hJMyjDASjx8EGd8bqYe5aCks",
  "key12": "2AodZpiXP8PqKvcww6wpnFud45BJBS4v1muETZXEeLTAKv1Sm32FeYcaotrb8GnqkKWzkxTyRBgxJDKR8QXGoWz3",
  "key13": "24YEc1uHq5qMDqjyKXXZBVmcVb8fApPsFFxcFv24EGm7DKbGqFQ1CBpwHGMzfM9LpLZBiHojNSZQ4tAREg8RwtNz",
  "key14": "2GStpRQKUQKKDvQbvVpzQF6qtngbp9s3DjTie7f8d63qdrkKJQ5d1vdpUqCDQrvtrSjRdWmGVi2vj5K6Q8Qr84Qx",
  "key15": "4qx5NNJQoDur1cYhvRZTkTiFafDfNq5BRXFtgjXvQiScAHDX9KLJer8qJJdCr8Xd3Do51ePr8YAgzYNR47ANSThK",
  "key16": "5ckcUxwaCyqPcAfFHKXaRjWjPhCPR8dUa1boymgCjXmy7vv1QEEFvJABsbFGiuqFaoQoMiwbiYgUxpkuYNxgw6Ar",
  "key17": "DZtPFaYCNkevrEj2sVHKKuaecyV4kuCBtYLb87guxuRAQuCjsP49DXT5vsgWuuJKgS3jDniVwBKu6xUVYGf9Fgq",
  "key18": "kan4vKtXuBotvA7qWkUpVp5bbAdHhbAQ4YJ2VDvqaTwzXMLZiJUJgMJ78Mb3xHPFNwKFeQcTjo4ogD5ETyKfBN5",
  "key19": "2H2QADa4W3zhLZrYDKeXvVGCbCb66zA71gjzyhg5g7SXuMYnur6GHmtkctpbFLdaHR4hguVE24b5A32HB1aMLBUg",
  "key20": "4f4coW7KN1kYFdqsxZBRkE29NG7fxiMN3Dt3axDoffF1jUGgUML7CN7UMrbYxHsTkxn7N99C3cvvwv3PHJgfSuKh",
  "key21": "3p7XuFPK35ZSHHGe3zJHXN5NBCwkM2k1iZV3chbsbb6NTL1UPUvnLSPNMpG9eqCc5vZhAKghw3vBZQQh8ucBjBAe",
  "key22": "4BiCzxSZCddMQ2jMEmXgSgT5nYYd8WUfUi9YGRHZEQ1mx1D3WJGbvC8Y7GoSkYDEqHaAfNuQNrQXnQEsAg8GPF6E",
  "key23": "3YmKzPTHUBGgghUcvu93VcJ1LvR4G2aaa4C7EBkuHaMRt2dH3TvnLMCbfapB1Y2prbqNiTdKEz2zR3HSETDujTHU",
  "key24": "3xgCNd3w5XbP3hoRt1N7Gk9PFFcwQqdrY3JkuW7e1qU4prk6iHPkTcrT5ti9BUYAzdqgLqLr6siSAuaeZyPJsPKh",
  "key25": "28MAcGksmgoZcBudGf8wa4DX2XHzcfhT8ctvdd2uP92n6dXfaTJezqXj2K9gFP6K4Mpm4pk9nc2rx7pi9PCHLQXi",
  "key26": "Y4sm9uqHJU2StM5mb7M1wyHZH9x2Vcjjdv9dtLGLQtG3CcR9abx8PznhoGFnYLkxrUXbHhvJ4rpzR9tzkiT2yMM"
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
