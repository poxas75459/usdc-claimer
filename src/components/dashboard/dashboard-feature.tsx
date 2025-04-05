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
    "9azSjcPh3ZTZ8aXrohLJEekgViMq5rDRBSv7pxRdD44VwN8uKbBSsh7JhhcmedP9dUoJpabYr6G4kXrwhw1ts7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WdwjbUDmYyDYZiWd1kDRip4phQVvqcZUnScEWjYr6uwCE6W578zQUX1p1Vgt62MGYjvgygzaksmugWo57ZfLBVL",
  "key1": "5HtvSfKo94CaAKivuphJiDXrdamDaonzKVVBJNoVzamwT3u6KS1YVqbBUjt5tTdMzLRyHM6RLdmfv9oqNdZrgVuZ",
  "key2": "k7r6NgaBuD3htGaoVXa4Q7kY5RH26wG4dutYbgva6LmykuoJRGxMQWwpWY4JaRAzVKiwSWp3ei5E12sgcqjrrFo",
  "key3": "uk8eU8JthEc75UtyRTHHddLsyBcCXg8SVXAgUwsendzBBSC8wgu4oHwJzcGTqnWYiDAEChL16T2v8dsqaNNXncy",
  "key4": "2RJtoqCP8C1c2rCJ5Xn5j3LsnyCThi5z2BaBGMYCu6KimmR7k46rQryBUHrRYB7EFGxqhM6Nrd1dUrw2XfZfNGAH",
  "key5": "3fKvqYf6YpoxQbNXd5WiyNzncNH41o6j5gGoQLoYwXH76BTttRVdjNUTGVxvjdyJiXC6Yf7sTMHJbnynBj24qzYx",
  "key6": "4L1KxnJPrsBTMNs9jLuhw95vuqDcRJ3z2JHxmaiJra49efW411oNbGznaVFXiFURZgzSJTjpLHwUpx2LcPAsHY1c",
  "key7": "48Vhbcm748nR4RiHoZicFUB1Wed9M9GqUas2qZjSc6WFGG1wqoFkJ3bUnooBVgjHf6yRnJTtRV6UVikTocaLxCHo",
  "key8": "5s9eUEYNr4TbpRgckxHCBDMUxRxfown3MbknjALxpqMU3MEKXr973QWq5ZaM4728HkHkLv3FAuEzSQ3eA8hReMd6",
  "key9": "2QPHN5vigw77vHYuKm89G5iGdntiX5EwfVSSU1Dk1DGhcpHpA8swP98Jkfjp4TjgdM3dmwh8QnmdoQJVLMPQay6A",
  "key10": "2KXSSPaTEPt759Hvev2qpetEePB8JPhbhBjQp2Uhj1orjeiJYrBbFraauSV7Hz9i8jDD74JtU3uq8PFi9XoFcdgQ",
  "key11": "5wfAmTMtcnPGhmUJNbfLbkpwD1wsLNMQGLDa5pRzUxx1VqaD1HvRZv6ahkBrco6KNp6rSkFjSc2A3uRRrNUhADen",
  "key12": "5dzymovDKXcMGbG87ozWJ5daUqvvgzEYUPna3pFowKCMoaGbW7ZUeqfmj7woyfTX7rruZfRm9bysoubr4DvrtkzL",
  "key13": "5vkgBQj6FLrfdsTw57Q95xfJymAhAo4MGomDSDUvtJWWuodKheGJVHXuzRsBwD1r551GTtEZe7k6ASzvhHJrhGj2",
  "key14": "3SmPJEh3TCfibcG9mwfr85SducdxRbq4HNnjTHfBEXxAJKEgnZhVBDb8yhfdndnx44ENbhjoRPVrCJgB7QZwpv7u",
  "key15": "37UkQcuERzMMk8qBHdymks1Mx2tSm1EfCxKhYLFsBQisthAxxKHJd6m5XG7m8j2nufzhStHmRz6uXYm5EjEWpYum",
  "key16": "3Pv9mGyoumNbKK6f6KVaQy7nRreAhPUqkEZsS7PKPz9oEcyQN4wjAqQUXEns6GFqT8bfVYP3Y6xyafHhfkrybG7Q",
  "key17": "GVXVh7Dr4QURgsTYhqFzUQxBdm6nYa9VMyaEGZ6NXiqFxk2XTw7UxdT3w9dxTo8QCsG4W3gYW8ndQ27r8A6cD1W",
  "key18": "4Cb8tAR8i3L5WcTW1ZSuN4nfgjTTq5hVKQzDJYgLmgftHMUKBuPCqyxFx6278UxL4cH9uzMiLseGtWJjd7u5qM6L",
  "key19": "2bAvSGU9Y3sw3w7wdcH2uEG9kbEU4EvkE1LW2VKUroLRc44PPBHgvggRSV8XTtVuZ21jrKvpf8jH4jdYinMQqXrS",
  "key20": "4NhK5Zfbh3fthdMaLAUQ9eLfu49agCVDEvipBMW3UDxNhK2A1JNasLo32mab5teXd6dz59qe7pH5XLzwQE2273b5",
  "key21": "4aoUQiNncaxQW1tGXqh94rWY8fxfSYhBgBBRGga9swdK3QQrdUB1NmWjSiuBbXYiBqBuf2wwsMVr9BhQtTH9MSxF",
  "key22": "5yzPfqJdskfU1ZAqpCn9C6FZPF7zK5hNNiuVMD73M3Jdt3xAr7YdXzMS2g8nCiRQWHauoDK5tzR8fgC1Urt5Fegf",
  "key23": "ibwVqfSA8r9xCryKWabAhd68vMWDY5nE2fVmqxAYW32VejNxSjySwJuR2niDwQachvW1jWfmdRyALbJEagpsdrC",
  "key24": "39rz8xVCDqpXifWPuVXzK9SsbMYEUzZmkbygNZjBWyY8iuBsYAkQSZ5TbPgF9ZCjr48aLpScU9qnCQU8DBCq7794",
  "key25": "54zyRov5ycMswS4DJUCW7EuovciudwamJqgsai94SM8xdoq8iTBjHp3Tjqu2XR4pck5dPsZxWp1EQcjME7Z1mJgv",
  "key26": "yfKurXNHy9FERyaBqVikxptducCVUavXEMXA63C27yTjVZ6ALNopSXHmFyTzuAos6uNpcKV3vc3suDEWUgUTSfB",
  "key27": "224WqKTs8kSTgNRGU1ZyEbCMDgjeWSRYh1rBXJARYKiT5y87pou5EYN7WbLf6iprLVkNctjvUT8wqaKEgu43eeZx",
  "key28": "5d7KBfZHDCiUsS2RxiRryD3i1M4yGRCfoEnv7HmfZhZ6Lq6FYu4rdaLKqRssJDbcdnozFJXHDCPAxoPEHvpAFZYm",
  "key29": "2rGgfnmDjgUhs2d9RDF3Vjirbx7i8LUXKd95wJePvnHKksVDVfwNhxnj73FNX46WyGjEnsXqwerVx4Mhd4mJKLsJ"
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
