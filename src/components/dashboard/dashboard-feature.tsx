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
    "5sbpzHZe7TW5RyaZ9e143YmtQGnGK3Hy7Hw7M5FoLB6fki6aqBUKgT2pZiWH3VqjhSQJnR2PQDYfhgDXBAWV8bUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EVnyfHEVJRaZzpWo8paB6LWYnPEQVxRyLv2BkxJ2nmHzmwYDKnEZagim4v3R6kNj9QsEsXXCnnKB558vyLBT8Ez",
  "key1": "4MzfCiYwX52x3RGWQDVmUVFavT5JstQuVRfUmvqNK79qdbDyVYD7TXp37EVBrNEjhXNAHwBh5tVHX4En24dEk8RQ",
  "key2": "5P8Sg6mgXo4ckxLSNYHSh3EdeL4JF71d5y5d1PTPc5iDjTaASGg9ivrjrTNsH24y4YCyymGM6NN9CL8mwSBCqvCn",
  "key3": "5eHNthwnWr4KMeyKouWp6vJGFH678qaWQRXmQH24ve7DBY4ivTUfsBT9RtdCv1Tf9ehfLh2kGEzRoX8tYtTXY87z",
  "key4": "5P2zJBcWNgToyRWGCwjyYmNE8MowEk5qhTDQAk46ZJZNbhTujyyQLndbRy9HwptCNYjy2pktyYgwMZ9evVfTkoH",
  "key5": "4zWwxzCXZrB7mkahE1V3K12mBo18gvBWZYZPFica47jViHk5smBhFH4oVaaMSPU3xVMp7SsJkuRUXRTKuHGcfbEr",
  "key6": "2jUxZrtBvXGqazErb8YFXLm82BbP1iqJhUM9RuVi5KiBYHBTZvjNghzXoJ1fv2DNLUPfNEnine5wC5PaMrpddFQY",
  "key7": "4uD8iSjATP4xJENHxhXcWGbZNSGXVZEFB8t9souLNUfpVX5XMPZJkELop36ZiGWKirYWU1jodLPBAj9HNv4sD4jN",
  "key8": "4PoUtZqrqMff9EoU2mmBdrQ3MhFBjxvcGG8vpT8Ss3DtzpxiXk378xF3jGYUMNLrsZJfYtB12GLwgcVqJoEeHCMP",
  "key9": "2RTf1Hc2Hj5F2SQFU24HMK8SaQyUYWpZ3o9SLf4RVgH4LUiaCNWxKSmVKMGmAZF187ampwqt67oSM46JQ9Tf1sbz",
  "key10": "3cZgLbutJHJrTvoEbjtN1Y3XgqzNroBzMsMSkVn5fPDfCm7PoNEGMksWGEjqKxoEGnADTZLHEqvSAxEXqDzcNCmk",
  "key11": "3vup8UDuweAKLeUt9zendLp4ghp6ccVBu1f5DDBKC7LdjLgyd4wvELfQjWvGas8mYxdSKWPajQgyBa4AmrY6oGVq",
  "key12": "3WUUdZvQ7WS22vdw5ea9CBFPmmPR7YWC9zskFLq7f2tQ6ZBmnNiJ8hqjjtdjDFfPrfTSFZm9oqEu1FgzjUo1AstG",
  "key13": "xdp3KamDCjMBKusNvhcoYbzDzNCptAtCXzUUgv5y495ZEwfY7BvrgsxpKSTqvmVVV24tHQarBnAnQBeVk8s3zFL",
  "key14": "2dnAAwcP1N6R9hfR5NmfnfNqfzoj2m1J3sLdhL5Z4zXkbpEhunKWSrhV1NGBJJrTcpokCJkpJVqGLFTFpazFTMQX",
  "key15": "3GW2ssBhXvDcqYfkAY3a3nBQpc3nAWpZtNwkLCovpKvZ61MTzm1oFZ1tjLeVFjyaVxypSD1WReNB3CGfDcV6j8Ho",
  "key16": "51QxoeLZFUQK3LF7cZGdsvw2HpFSJ9rxtoDr3kTrFrpytBFbg7CiShK9n64mTmWKtBFYKgXGY2Z6TQmQbEYWR74U",
  "key17": "2miRMhADwWWC16GTqRBiNxCVMDSJHkyWZig44y1BDRggcZpdJknATcR3K6gyDxXUrkYkh9QKVQ15jm7tUkagxFRy",
  "key18": "cFDNVnvidqiKQGHCDsY9J9jqy2KC4RRVRAxQzbw3Vr1K8LmHh34rUGz5baLBXEmBVmmGorodWtmi8suvMZTb2Ki",
  "key19": "4cWjACJhsPdjjVjPC7MDxQeLkrXvomJm9hipKihqCQgLSS91hCxq9ed35tmQaZMWbngFxb21RxDL97XB5RBhWvLQ",
  "key20": "5L3N7xKT7q51Rzs2mSPUDSYgDBAQL6e3tKzE1rTdca2d13EGubYTqUt6AbiNv7d7RBBPWHa3jKEMPoZENyftoWae",
  "key21": "5Z1LQwpCiRS7U8P5fv2qAc8PXxGPay9RNpAawBS6iub5t2TGrrMyNYaxixbj8B7fBWTpjtQKzx2C3rrFXDHjkW7Y",
  "key22": "631vfVP3pue5JdoBL6ekjq3gvu5yXW8oruVT3NZ3JEYXyGNriKUvpxYSQ7kpzNGVdNQtQqWt5ivW1KbYh2DvjQi3",
  "key23": "42zF41swvPUw7vV9ZJpTtFKMez7cZTgzscraGdZedNK8aHhhuxu1qKxgYyvs5ja8J7Gtvab6JgSqnkDZhuyDbTq4",
  "key24": "2ybDb5azn8ytvugNacMdfJV6szzu85ikxXqtfS6pbbryMHFi4epe6AhRMc1RAmYTm4FHq2jbfZxL7Z3kNiPmyHEH",
  "key25": "3FPGGuq71Pcj5uvRAcCuvjvzVmnfjdaHU467YQfRW2LNjV4eyuEjzsnK6vEYo728yPQbPGTxKs7sbxhUsTZmWYyw",
  "key26": "4igSavVkT5yyKkymxFPBD77e6JxiNEycVxuPoE6PZ7UDXELxeroGWLVQntmg9fiqFEZzXXsh6x6vsLKW5wrTDNMo",
  "key27": "49fAzSS9AVMpUEmryQRy9QxFrsBLBDpgj53uB3uPbdutg1EZPrpwU2JtcQYpGB9xcqAi5SDUPAUuu8hHahXkqtSC",
  "key28": "2Efknb9EaSDSnzrP4wSpTke7AJTSfRXx3nnMx1dF6JLSykdD8bCR7U8dsD6DY19fQCKFVyTu3ibdbcoFmvxhTFX8",
  "key29": "2umzXX2Dd8AQewtfDJEMHrwW9WwrXvxYBV8Fi5SGKZYnTVf8U7JvFSBNr2J7sLtWU1xosnRmZtp3by34dHznsnCa",
  "key30": "5SDW8gdbvCmTD6hdo4yt9UHcWNTsNz2GGcuGDah1jPFBsd49TFZfeTZxksKtEv9Rwi1i3GU1VUJhMAwsUR7bygbo",
  "key31": "R7snxDkxZSxYFGNDJJrnv3qY3em1aFWfNJL5Nc5gQu1cd14PNNpBhH9WvTS5tXpmpc4NsZs9QGBpzoaE9o1Dd9k"
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
