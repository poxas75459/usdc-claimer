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
    "kSh5LxwSX2RGW2RASKYGw1bdRVtfaMBaNRRrUvPviXJdGcqgT8bpY9bwryz8MLrE9NpYhvKAbj1gWigdy6WoXr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K5CtDCxKb9LxcS3RDSQ6FtCpJfJUH856ssjHS3xr9UKVrEN9RA9y6PppEej9KuCY3PHaTbco2k5xbGSJ9NFSQss",
  "key1": "62iQhXS2HBEAyNfAkwZkPTbReran255NRCjpYzSapgb1YBYSmhZQ9q5MEkFZazZD8yyC7WukZjpNbqBCt9kpS8Ne",
  "key2": "5TgtHpD8nLQ5Cd22oB5MSBwFTTSx4V3CxMvvmjwGDZomV96nUfAtCm27W2xURQPHeBq6eBFY8zPumyfSjrnMS27C",
  "key3": "21YiJLb58WETfqUQaAP2gkWb1kv5EXReKhrWjqFQpQjYNv3ReVmY5wmZzpqVi9D8uR9UDD8xiBSvBFGfuF5Tw9vm",
  "key4": "66xX1mPGdmj8e5Q3k9Bu4oXGZPdC2T8Rv7r4dsKMpBZgv2BvKC87XbjbQoHR1UtejBfdhk51vSvhiRMyUTG63xLy",
  "key5": "Pqa6dspCPuFrvaww71L6EMnYyNGVPHuBYtby6GETK52vhVbmqCLfMQx95bsBye3J5tHtGJQGhjZ7v8DyHqcwDFp",
  "key6": "4HmPniqg38AZZhyxkvP6ohBYja9bpc552FW8tDjVAc3CGWpY5nn8hL8r5X4fRYvaoQnThdHE4jRPxgjp7WAXic57",
  "key7": "3oLMV4asYt7ozQCgvPLL5FRdRAP5zpBDUytjQyc2EDsc3iNbLu1Kv3RnzZbGLEqgJS8jZRTC48cXvfd8BYuDvsKi",
  "key8": "4mu7ANWRkkvFnRo4YsZANoJhTgZyN2dWS5LANY3XBHtutYbTARhDJfbZRk1WQA1oFyWW3kzeygJuxsU38HXUAxy6",
  "key9": "5uEQDsvi75pcN6npbW3rBYh1ATgwFRLkYSDxoJ9ie6B5GwLDMDMGcWmA8RJQa7RuhaLQ3RkNEw9CDefAzPTwJpkD",
  "key10": "jUtS8nHLX71Cc5RuuuXc6LiLsMw8jUYYSDyfSfrPRxskoZK35QWF138oRXnXzGgyx7iewCFpKVYq9iqMQArV1cm",
  "key11": "2d51sB9whsQTdMjSDoMqVsaX1Wk2zp4MR8MHpVAnkz7uqQeK5yxC8jaCMfSXTCFriJEbizWfixLswXVKHqMRRc8B",
  "key12": "3mCn21frcTkCqfDCjxMpgDpWe1LJrMba5zjYasQ7XMLdjSosiZMgZSe8V5E5r3aujveLk9NBT4M4UGF148Z1L4Qk",
  "key13": "3FzYMfSnuJkACe8cqNiNLobJ8G44kHxQDTLzTXbMZR8ceCoX28VLXgfd4w8me6mu7B6ZK5jo97ZTMsCJMQg8JXs9",
  "key14": "4w8DKYpyJZdTx8E1yenBMv8CKSChqwxRfzoKvJfqqLwiVFTpG62wjb8Cu2RDNWrEo1qq7UqhgDmRPPyHBpo257Qz",
  "key15": "5dmca6owMGqy6fcqYFJFAnhA7R5xnNqUi3jo3E94MS8Vm6WwGGLfDBt1oxWbXP5nbsVW4xqm2AvWvN6uNm21vR4w",
  "key16": "5Kz4zrYVDwyDCJAENmN61SKZfQZGGfeaBNoGRYUQXoqfdhMZJpWaGpnkWzT6fX1ejjKRH4TsQdDU3tXVdB2pD3VY",
  "key17": "Cs1sPkF2gQaQ1mnP5d99f4e2tWNshnnV5aFJdio3wFHHngK6juoyZkqdvyisbWqpJ7i7ZyDxxpZBKR3av8JJSa3",
  "key18": "AoFVDADYgg3hJHEXvcksN975p93wRUeLcoE5K2abVNUUetrpU3ccEWr7nVd3jPecv59fh1zJsLZbuZ2LEvBZqcD",
  "key19": "2VjroXxvfLncUCvgTJL3AdCGyFVoEJ6XsdWqRbmG7sjpAwWMaMnyUg33T6qQMzLFw6JPDEkbEPAVwC9hPhNiiiFn",
  "key20": "2b16D6W2vwgSuFYTXrzBLTXaBXmLWEvW6rJyaDgiiHB7ZNZZ8qFeKMBSw8qtfBaPtbqwshfdvut6UGmBePmYVCQx",
  "key21": "4UKBrTSdG5sgNkLA9Yd6Y9ccXjTnDJajkZjJPwhBcsQB7C7fsSJcuoAWTYpCwd6WBwP4eZV9ELKGuFA4sGCf7wJB",
  "key22": "2ydKbtYMU9jeqtgeCApomsKBKwtRoAGSxukmWbqffPvUhjXEKwj8isigu4YTUWATJ2Tyy7DZJLJQ2gzCr6e5ZH39",
  "key23": "2rLqBD6u2ZoYbN4AU7KeF8QXE6LGw9yvrCLEFtL3czXEGPNZLJBZZdoGbHXvtQGSQi8TFgvwfdUWqMuHrdvebZzQ",
  "key24": "5yVE6NgohUtgrSY1stpFW7xKzszsrLLNAjUPxxtJ4dMZ2A5yJkTD9eHX3QmKzHVYk8aYQrkYqcYaTFGHrcm71ZWg",
  "key25": "2G7vekscW2GMESL7GdQUWQnGkWCZvByLRHGeGxzMy6KcVa9PppiSxEy6KrEyvauBQGkPmntc1SpooUzGdhqFuzLp",
  "key26": "5T44ffJ47uCUMmXcQZtbJ7EGaaHNjwcfWCbLvywQBveWpsgsSY9ae8srDC25xcAU654mNzRrVmGEksgsAMu3zSa6",
  "key27": "jNfz4jdn2izBnVbZAHihFyygnFJGgkeHKCAeoN4rg33ofYBtDKEUHtQJs1M5LLo83veEVd9L57LSbsrqrj1qd72",
  "key28": "5afrSbMLbi14JDHLY5y4PyEeEW97ocwCrMZpAcr5ajA9agd36UYB3oTitTPLXiwjCrdZcYpVcagrWM6zYY7ZzrSW",
  "key29": "2AFnhbJNxeKrQFe8JDksE39A9YhdmxBZqya2vzEmNMAtz7zhQSWG9mv8x74NL5zUjuMrmkEhSmbgX9X1BdHxLPcC",
  "key30": "2umCcm3BVfQdR7Rm9MiXmuxBn4ucQ9uAzwUwzBBrjqj4Zn63YUpG92w6wy2qUyaDTUCM52y8YyHpuAgWKuK8o8fi",
  "key31": "4zqHnehYT6fbFsQ7YsAfyhaTgtJq6ChMGBujexe8kkq5dPEgBZk4UMjkXi3MKyNs6WjcQXsZbG94EBSnjZQMbFLh",
  "key32": "5oMq5zRKKZsRkV8jPRHEWdpyq2bVA8zQ4h92zUWWABrihBfjx86Nx55BMvZ6ZDZjyqkx42SRemBXdfuAjJAgFpv",
  "key33": "5o23jT7oDWCcZrTGx9mGagW7hft4dDoDgiKT472a9CGDPNFJN12jixKH5gtadn7dZX4ARTQRerLxR27xJ2cExREw",
  "key34": "2GJikNV36wsKSXqo7zH1ENgWJem6R4CSitHhYGUgxD8egjY92Nmbm3ocXur6WKCjxJQXgbZdUQdP3zKiD4QkX7C9",
  "key35": "yfc2ASye3fWAfnwYuNDd2WuEsbhnaEpCgMzLnveBBhjsmrkicXGtD9vCEs3pqRLqfcJqmgXm2K8yKGBgs44rG5n",
  "key36": "5XEAaaq1yjLCvD4mPYFxyqZZNYMvgpw1Mqb5DjvsCJzYrUJQypVVbm6TYnALWjcYY7R4aiQP91c5Gs2S3CcCSD5U",
  "key37": "5fF9so8EW2bWNUMZqrzES4Y2SBdsiZuKD4Hv4cT7xfuJU7uHtkAKeKMe5xfC3iN3zeDeFzg5YjCmdxowt9RaaJMn",
  "key38": "63ExvDYgL6HiHxquWkHu7YA3TA1ssVCZsXpCJeYaErCWj2iMNPbJA8a4oDGjJ256qVis6gMzFw9QSTtsbKB34bHC",
  "key39": "3vRfoKCwAK2GQ2WXKKU3RwdfjPusrvq87atkmCMimKK78GmKuPYgCYtD7nUbkCJy4xJYj3FrwEDe3YZTMaeC6wDH",
  "key40": "4RXfiYxZcAC5WE69dCBDDo3sQajTcaYuVEbcYAqBErrDpTK2q9P9CNqKiwtyq55d7kgxcq5tMvmppEigbm6NdPTS",
  "key41": "4R5kcv8k7v9LMMNPTkUCmjpZ9ypoam4mwgWjwpUxWTk7rNBJcB9KYbvjp9iAgDorSZAr8i8JiXQEAB6csyofaXfu",
  "key42": "4N84CzqYrLj67Zctgki5UnVK95siPPVQ9qAXb8eG4pF6NqAJTNqm2DWs4q8PFzVGn13ua2o8YpxksSZY8LeGWhb5"
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
