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
    "5sohbZStSBvLJoGvuFLLEBGtdB5rQD6SSXqQqR12Na3AcS3aw1is1PjsrL3pJWGkE12j1jJv7BPDoMVCR7wALnsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oTdjvJrRRe6HyCLZgHAPBECs6Htfvvu9j1r8ViwHbRBfQeVYaUYgDqaExNba3NDviuv4HBaGnKTtfD72A4wULoB",
  "key1": "4MhoBWEngvR6s9uSFWfpEjo5cWintH5UKA3P7DHW5SPz9f841XU2X4EsMYaGStHcitFkncfPtB2oTskkjfMmQXtD",
  "key2": "h3v9fhKeVTzSEshNUSUZegL6XgvufBD4E2rAZ8126CGsmtf3HQ4zAgtqJ1Xjs7yvNyudt5UQMVnvi3rvGWByVQ2",
  "key3": "3fLKrV255mDBcFSxrAsRy88pA6dfMHrpYKSm8D2x2ghDQmNBPkr23QnUBBRkoQxWcNtSWv8ANRjcHVdGDwLgnRai",
  "key4": "5LjPhKp9LWjVdQdekUMsmMKgu1NzN9fXdLLWnJciTzzPyGtHcQFhkXcXXQV2LmEmswvd6DpbJhgBhfnVQPJneH37",
  "key5": "5cP7KPmCK7tiXt6VDav2z8HD9kYYxhz3xixJ4me76AC7HdAK1Vm1Edbu6tmDrVrZGR3vQtZv7BsZNSwrnhmNbvDA",
  "key6": "211CPq3KNqAh2j1cAV5BP1Rcf41kwR5kZjqspjQvHmZSFZHHVXdBw3sSTZt8G539nc3swFpCLtHJruiRnnFiyPWD",
  "key7": "3bLegKKfvjpS6JDPvAsuSQV2qvpHBHkm4f8V7gSTTDtiDpVh6jcPKBNsmMMyXf1iJbg5yWkjXsuB8JLij4VZ99zn",
  "key8": "2MiyZ3jZBy4FuTeaiXkScQazcdstGCG7FkvXQtbhKctMbA1TDcvttwiXutwj1WyRzXHsfD3TspeFvXoz7q74NimG",
  "key9": "5Pr5yM7UVntUdyiRgApzEtMZmFsCekSYHN429uPmcPV1wV9oHHnAPwNQhsSMjK4jovp9SbF1qAgxAGV3gLxZp6ez",
  "key10": "4Yn5BNwsBdyRFFtr3VH6dAxx1cW133fCaSeQdMSUAHi744WUobLYkqhwrK5G3MxH2S3HCc5wcUWUm7V94qgv4v9m",
  "key11": "3j94QJMg2uD9UzPcHJkvTwJf82cyZxnLnPZhmMzpJWEFAHCynfNdgfDhjJqrbEJ9nQajb6znmZBq4tKdYsD9tn2C",
  "key12": "5URZ9VKdDDGJojp6eiH2BfRy4rkE3BZAeDCGqay8fo4thuZGHfYod1geVbbhwT8nK5BVSzhtLJy9cXEkZ7yWWffS",
  "key13": "5GRKKc9ETSAmWcgAjc8MnN1oZVguXZ1a2CZLaMHgjX3wxmikijVFG1t6Bz6HWgXQYerADi9AQC8rNjDTrBJH9qUc",
  "key14": "ySQkx48HeRTF98EunFX1hxyGFisqNPL8L2Q9zxQqcQDdxunS2pThFDYvVighPzuxkcVGDfzwFAKhGHw3bThKXBt",
  "key15": "2gN6BgQKKjcrXpTPVi5nfToG8JTYaSdotmNP6gub2QMPd7P9bwxiNdJ5vA4ekNCKFLy51NHgBhcReTeMCMuZuoir",
  "key16": "2NRsyNptJRj9Dvv3z6VoYUFY6D8RqTyB7XcftLggPS3tJ6t84d44GJjZSzH89G6Q7g998m8wnARsWz5wwGJwjYzo",
  "key17": "5Nyoh3YPqrMUwtieNUExEeMSyj6SkYDQAGZ1us6C3JFDzukffoMfzurGZTdSNARXPpfqcVDnK3Ywfm2ufph3jFAa",
  "key18": "5uYLVwbYG4vcwiSts1YQhkbaXKXEK88Vkgu8P9oYigputwipwZ7AJBZQ7iMikqi3JABZZyUNV1Z6B2hC8WtZhmUY",
  "key19": "q9h9UHHYidWWnSZ7jEy9ryjRikEsLNyBGQycGWfrCcZtjKJ23pP3KmyWERmbBiqczPezMg6WMtt8aHFVntWnLUy",
  "key20": "42SWoRLr9h8jCWHRZ1igvCMKmRkqGSeAyWVrtX5M74knojMh4ht199743cf4Z7D9bLBMLhi2L4Xk4UEcVttCzBa6",
  "key21": "3bxAwkCmZYKFoRB9ZHhLsiZH5BxEspqsaonqQLhEh9VYgS8mS1wtfkJEbw4S3kGDVxrJYN846rb2uWS46t9Pfrgc",
  "key22": "5T46NWoNKEWdb5sa4P2LgjK3HxaXVo6NLmngF6a3bQiQNfk53v8sTUAeRHM8tcWpXxaZ4xPzGYiqZFmhUdtLuktQ",
  "key23": "4dmzKY44jx3cEJrWsr2N7KLEvzqHtQVNppL9C5SXaBH1vWgkAeKwmU6WV7g1K2vVjGm4SDucF9cFypgPagXGSJj1",
  "key24": "4YfR2x1avgZMTPCuk7LJBqBfkLvK9Dm35NXjiW4qjmpWMNzMe4ckLaj4PpFSDbzQdLQgdn5n4464PqJkdyPDyDF5",
  "key25": "2vEPzYGFYnBC9K7JiApcLrrEfePRxQDeyKn6qHdRbqpHwLddBcUE6Lw6eMndnpqovhJ9oaSNBtpQ4XM1jFJNmZcP",
  "key26": "5yoSFFFQo8FLgA3coKYVYy1QgtzdBHqWfMUeejLE7twWWX5Ve6qnqArz64rdRNYNJNKbv3Te8KQRe5tMNpZHCvqk"
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
