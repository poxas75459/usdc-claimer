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
    "2xvMZBb8EPU5c23ajY7zNUNEMaiGHGzaUtucgLRotoYdbVFfxwtZ2HaC3YAqWdU2NUa7Jb9ayYvdhELzvF2LAxqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P39kVhpberwN7Y76mBRM5PUw814Htg5U9HyW3JU3ZEmGFb1Npj54nRxmuRSVGE8QcZLKZdxbTHjk4LPYn3mqAKt",
  "key1": "3MKSm1FU4WHqi1YnzM3Nv3SRa1ZEcnZG9reeUPwvuwbopy4WqAR1mHa2ibXumWurixP5gHde33nDPAcrtynkWH4e",
  "key2": "3dJjcjyZv7xYw7z3qW4pyWauLWTtY6VdqcpY6REN2eMidoRqSt7x39dv5p8Az3JJUnGVuujsXUTf7XRCQDTYQP7m",
  "key3": "2DZiSJHqVVtR9vWXfJmVgw5uEXmaX89ZvetLNiqYrEiBSu2QjFvAuvadJNCMLArhWbLZadgxwfNzMpFHBnUAsNbQ",
  "key4": "5gzEWtEFJzqu5VkPnp41ctLBxZJ7j6jzw5izGUrBV8CVvgy4AD4NPqZBRLgyxGCBtkmgKky4Rn52rQL4jkUpNJZB",
  "key5": "25oQzFGXeDmMeYCKeJ1dBgAQo5X8XhCMKAkDTXzGcwjRZfuz6daPY9zgsQW9issYYHaTzsGjx5JHQyVvAJvVyi1c",
  "key6": "5aMDySprXXrT19p72xx9hQ7PQGumxXADdfaSS3JwBLUCemMzDTxpd9GcsfMARtRPNyBBdXmeDQ3fuHqmLtJ7bNxP",
  "key7": "BzC1LXPtENvPuLvRS3h3fgaptvyJ2UGzubfVh1wxYvkJQCdN8RA1ab8MqZK5Ff7JvkrwJsj9rx1emgWwTTxvcUr",
  "key8": "ykukhPiD15VDWwmQMBWpbLVLnFz7hX8EJbfWnxF8b28ggNkr925n1LbWMmEVBPaFZNmNNqD28ijyDkZUqaiuF7m",
  "key9": "2McVydNBxzRNF6s3gSCUCEzbSBsdECnmwh9cfuuuDdyydibebTi8aHP7UVU8zFys2aMBHRHAu8VHxQCGoPkT4fCG",
  "key10": "JxW3kYYNJkn2io83LZ8ddUjfsPZv7yn94vCUy9spwT8zih8j98ydzeo6Yjuizn7LEJcpUQQTyTjqktbkdU4sRa1",
  "key11": "4Xbph6b7j2WK3WaCjgSr6DLQhzH6h7r6odDyDTKNNDrnDeKhMae7urse4yHDcpjJLs4fuW5jdU2ctiLjqWRUj5Y8",
  "key12": "4n4j1pRMtN5MsuFSctHTRgzpaFmyQpsZqGSvpHW4LyatAbdTLcHpyntaPfj39Pib7eYjaf9YxN6QmWT9oEvW474n",
  "key13": "4xx3pdZqpSD1HsQSLwCZUdeGjLfRA8SetP47jybA6cgoL8kDtXyTrwGqiy9tPQBVEaqDkivVkbsLjrrcyyLWs7NA",
  "key14": "3nmZFSnXkYgpzqHxU2uH1oXTLyLN7Cpr9JTDsT2ayAQMHeoVoyYGHeWZCasVaupnyz8iC3jmpcaDCQRE2ba7yLdt",
  "key15": "2mHLP7BmC7qQ33oUwPv3i4LZob4aYNDswCWdZpRDaXXtyciV4VnPTevS1jjQES5KbCDbNXJ234psZFjMKZaNBdUo",
  "key16": "3WUBj7xLY16HucWFC7mzejw8wAjBUTEGKrQ9mgpuXpvRPRnYxQcoy8n1wbV1jUimVacvjyCPnhEFGrVJkoYtbNu1",
  "key17": "z6zhZzzdJCGV344yT5xLBCHyPRJsVPHSxKZWBycKwCiqfS5k1LrTmpUHZnKUG4ekRaq8Zy84HN5soVdhV9qjE8S",
  "key18": "2auArYsptiMkxCBdwW9tiiw4zX9LJBoAu7KbgeGLQxCvAPVhGeuY4hxYkuknro82Zv6P5hYbNNibN2Urd2nQ2LEd",
  "key19": "4onLJJaxuYSnfqa6mqTrrJN3Naacu581qs1Xn2EqvyQURuXNcJfTUkp3PH3MWSAxWjLoh4x7rUseQYWc2PiDQofm",
  "key20": "26fyDd45kMjLSwhmBhamyq9jDgi34bKX9SVukn7aAswqnzQ478p6bNCQ5fg45ckCXqFhNsaM47P3qrYG8kVgqL1K",
  "key21": "5Xcgi2fuhjj9XYWMCevkKMxoydpmirfVNx3MCQVA49ogVhEp26Qp518A1z1jCmK4R9RpgJP7jPg1YdbtC5oRtH4j",
  "key22": "52bNERK9AefAFZVJdL47Dw1PkjxZeoqZVUfekoiJnbB3FzzMJRXuuFPypuMYeTLp7DcjsXpTaK1H3nwdUiPXvJg8",
  "key23": "kdUu8JsjGm1dLZN26RTSpUyWC6U7p813qscwb2YqeDihNgvyK4nzdjj9yf1AR5P9me9mG9DqzGfUbsW8iHFZmpT",
  "key24": "5RNZNtubvGrxYQiSvtuRaSvGXmwoCdK4w25CXvsdtfZiWTVPi5Desx8xEkQrHKUe11otogjqZ3yUhteLrqqAiC2M"
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
