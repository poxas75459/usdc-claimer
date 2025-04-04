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
    "63Gdrf48aQKf1eo7moDWeqfScCr19CE3oX2QJzVKdCqktXkNujFrjLKyMiMfWEJY3YjebsWwTNsXqt4vdxaGyGRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PUL74zXWXRRn9SuAnqDvoChoyonNEg6sNsvczXwQMsGGR5nuHo7axGFa3khAvZvdfpHW8zLMNxkwmpPdM7zE5eJ",
  "key1": "h6s5vWqRxktjeohAVwGNvUsBK8BSjSeH3t83gxGwYG1ATyeE8fuzdbFVTuc32LoPvxGEMjyjkdVQo4dDBnwWYSL",
  "key2": "492kA87QuLNgHR7ft1oHjH8n4Hj9YTE1RYvtGUdvtyXTG4y5eDJ4Ap46TAY2M2Q9kafUVheedjiPztkajDTp275c",
  "key3": "5QFzDHG9ryrRxbtJXfLnfqYDAGVEzN2iNc1cY8UeH8jH6Gje2TRWWSL1SEv2dchovxzN3ssr25rBxwMTtK7uSdo",
  "key4": "5sZ4t3rsxb9uZGBamNZRssM7pANp34HoBEkMDoVuyH72qEvNNTUyiKiHCxyRcUk4TSGSvXn5ViDBo3xTdvGNGksK",
  "key5": "3Dc449aKdgNbKDrq9HZytNkRbfDG2HbE6PGrE9aEkY73EfxX9nPMnb3ubvWoZU5bvBbffKJDv268yf4SNV5QWGao",
  "key6": "oeZBoFMjpB7rqynYB3ZKxjzNBfLkKNNcayT8GWqiK32QsLGm2PFCvzD4xd912eX4TgSadvwXFNjhPWSW9zRUZyh",
  "key7": "2XLdKi1C9qNy4scsyh6MZyfiMF2YZaXAnenpdKuez1UNATPGh1DC6o2vzf4MHGXvLqJTminzxSbbjceKUSWHs9GE",
  "key8": "F8GwZtmUpC9g7WcHGya1PQsy7whD5Y9g62AjRrWvAjrraA5na4ceYYAVTrF1sVLcoYPMK2JWyWzN8R1312eqR7P",
  "key9": "5QPrjWnDQcvXhJBWx5v5aKGdodpfUf6hWPcH4SfiT11QD3gAFYbYVmMjnFiMHQvyWMnRrFDHuh2wKnmHgYV8QLQs",
  "key10": "38KxwGsoTDTcjUkSa6fHysCbksTzL4TCBR1gGJVAM1xYUPzvoKMveDcCv5JcGuUWQg8djZBnunApRMgxgaPo9eLN",
  "key11": "5xm9RiX3okcBryKw7QyFpgX1n5imqmxQanbDAYiBRuwkVr25DySgvCgV71EEJZv4nxdpo6Pw1g8bxw5MJmT2yZwv",
  "key12": "4Zv53zE7S1rkNdye4UJngmm3EYTLoLZxS39SFNRbawL2N83QhZRpgyZquHfpH6fU5SD2QW5VcD8jU6fM8zXd4dCU",
  "key13": "3FJKrSxBY6ux25tn2VmnDzmuJKzHCiS3fG41UY5tTiGMrCK9LbJ2kv1z2mCssUq9bk1foprPzZjwciKw9waxqq8W",
  "key14": "4hkHP6Z6URBKR2yvfwHzpVK1rzjnZ7gJ8kmfUoUo1pGsVp21rsyVswu9TqdsWcx2m3fSJmghQw3TmPhmFCQNRb6a",
  "key15": "5DCt3yhuD3zeDAsNgbue5kUP3qUrwKNshkNPV2RrP9RkDmcime8yhocajAegwDrrR1V1AgZR2rHeMDrLWrgthTtB",
  "key16": "5nVhap3VMUa39BTdKqKHsdCU4aoHFYZzSnQH9zAy4VTocMroEPzmDzWXw5jsgM42W3twjtTPpQZjvCdetwyZbvVb",
  "key17": "64a3uoaswsQ25TVB6Q3VnKWCbik3LPM7Pc9yJFRAqmsECJ3Y77WxMwodK12SUGscmwqu4W4bNyzN2rW8qt8HVivZ",
  "key18": "4ndqQJ9MzQ2J5Bek43ZrNFGYWxUqQqHCrhDVHnKVqdaPRF2941Yt763DTq9xVdndPnAX1R13tgTdcBQpyiaK4MN2",
  "key19": "ZfSqXXQuDsenHupMiYdrK7E1XZcaDCwCUEHdbXqbjYfFofCJngvJXyNN3w4xB5QEcRRHpm632kXYJFV34nYXYMs",
  "key20": "2uGkYEHgk1i9Jpd1TwBs6GzA6z2ADvkjuBkgxstP6LYHGbZhCEaPVC84bxH9VyQF3fggmzeg4yMGvF9XhXAWZWpf",
  "key21": "2B7bmVKntgDAjTRmj8MdvtKhRehTT8wBH98sckA26e73zGpcu3egTLhKeYrAaLVpAauQrP1j2syvxiQtUEEYzNJU",
  "key22": "4LE56ADkDe8JKetpehrFtcqjVveR7Fq6R6pNKyVCkagGwZbraa8CPXgbTxnhZ9nJZbCekHQBjXMYUEuhnN1RgtZb",
  "key23": "2p5qU1M8RSf3LnCMSxmuEGqs76x8fUdu6ooz6GkgaokjkffTQakHNcbZKcjFaB1Vqxf1HDAawHgYLbKcsCGLqfhC",
  "key24": "612qMAtLDDYQKxZcUxxW9Ta6xRs4aJR4ffVkN9rfZUqHzTD7C9uxFSMZKdzNWrbtYwm7oC4pumHkAFY3idaXNCi",
  "key25": "3Rut7PgAhcNhPQJeLKRK5hKQGx41UPRdnRxja5wEut8SKcpd27GBd5xh5tdZjwp7XghbNe62r61V8Fu35LETLgw3"
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
