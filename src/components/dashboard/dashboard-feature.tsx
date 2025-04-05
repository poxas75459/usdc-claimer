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
    "3Q4A6H3kHH7cb6MuHRf2csQ5zXMXPiDGNdDGUSjJT6NwfiovXDBrTU5hvyjoWXwXJm1d43MPBgKTqBqWiecKk4jw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cSxd4K33yMcbgnkJb3nosu4nttjzUwdRB1dmJQNHZ58jvgutEPon4vGic7szpF7Pm76rNFkntdKSTtecW31qYck",
  "key1": "Ci38UQh6wuJWiCSTUK9xvJg2dDF8FuVJGfKKB15Mk5GyrEJo9iVCL4Z6tvXqKZRKaHeM84XQyR7dRy6FJwyTyg6",
  "key2": "4ts1sWQdQetgpSdoVwibz6J2xMXUQ6rtFU84n13gko7cWEge6jWUnPnr89FQGSYVQLBtHeo5oxbZcfyoDVcnTonr",
  "key3": "Q4caWhUMVuZR3wHqtgEjrDNwgxZvDSNvYUCG8zA12L7hUHjXWFhVfiHomJcG5EDX8NEX3SisrAKZL2MMLR7hvJF",
  "key4": "2TndMdAmzoXow4oHB6aJgTxKrmk3heNucpzehUVHBMA7yf4stQuM9GEFBXwMRyphxsbMCWYnBSpqQhsJMDpm7WgB",
  "key5": "5ChVsHjuLNC4nntkCTFhHyLzwytvwxpZ5VBwmAJ2ih55nhCzisj1hEKvvmNPxM9z27HYG9Je9LSjvVuzJduFiYdk",
  "key6": "5KaEGStooRgVFTrTSTq5cDqS7NLmaGb1B5pu862Wcts8GzRad7uZ3nd38CerRNp4qgBW7F6qNtQNnizYvA7FV64e",
  "key7": "2b2KVK4fgd7FMAgYpL3m3KDfWNGoBcWgE1ZX7aHfX5FFipiSJa1qpwUxpcKunJP9auvzv3yhBjf6fwYPD5kFVsih",
  "key8": "5LusYb6fBeG7eomK14XdPxe2StnNXoCTR8chhQJ46fe7AhjXqSsdw8xiUpczkPSGQQseAseKv7Sqvmrnc8aw1vf6",
  "key9": "3XzBa5NGfSVrcK9r17TFJJLhUtnUmfrnKBmxhf3PwCvcai5oQQ8hJ7hvTETu25AoTznngfcTPex51zM8LVjUcoYd",
  "key10": "2hEMQN9uqq9oaSN2aCRjXVfZwfNsFsVqPHpzwhtqLW5UqYxKXW2QVDTQXJ4vWzmCNCGYSTX6x9tWj5WJuoFfUZ6V",
  "key11": "32rCUHidnjWCwez26JJH92CjYpFYzo1ZJsrLLpt8zpmaFmyHxWwydKkUg8tgc1zEQos4wkDBe9ENW8539GVxHVcA",
  "key12": "4VXQhkUGAgsMwWz1gHPdakMD1EgcWcqwXJrAzQhCuGSe6LTPW8o4y5b4sR5VL5JZZQNZHQk5hRZhkht6pBTG2ZY6",
  "key13": "h8mcSMYXCAZ1DNDX3jZHEux8P9cpXXyKaPEZryTgtk1NLpVGoKqvmNhJGbmgftLuTP1Z2cXqt5c1qCPfnCrrCfh",
  "key14": "u6mGk8Gp8vL65yX8JDWJuPnA3QBTh7DdZWjkUEXuZteJCSfqkHYDAJHPKc8VMX6YhYmjNKNJeQYgHXgnT5UzTe5",
  "key15": "369XCcNCeRJpn9z2HjxrQMMu9BXW8tYdDZeD34bXZsZeUfN1QUGpLNysJcExumBtGDyGptFgzaYgHRi6ycWvviqS",
  "key16": "36EJoYjQCHQf6hiiurC9TZizWMu3BGirak598psDAu2SGt9BEUB4cHLmLwsC8N7ijrwVnieTSyQZqY2Wfeh47MSR",
  "key17": "mjmjZgXYkPvH8q1ZEotzcyogiqQXcAwDzu3BnCitJK35fgvQELMrrNtLEsShJZ1onZq8LqaD97g9gKBH7NLDVBv",
  "key18": "5nRtpNPZDGcoGMUfLeq9jR1jsy2GHYFU8W7JUbCFpekCwdjBFd7bLie5vrUZqpcmoU3f9MAhNNz1TT7xYE6TkNz8",
  "key19": "5fyJkNrnpXtQmpF21FCc8ta1fu2fjfXCtEumrD3uZ6trx47CPvcuigfmnRFgLJTk58iRP3VcGCr6khQy7VZ9Qrq2",
  "key20": "5qCv5KT9WbDBbNgSJgoeZMpdP8SVjYx5fm4fxFhyFquQDJ5ciqkKKttCK8GubvM8RVqyCtoc35CihmAHk7UTLS9e",
  "key21": "2ncbiqdu3TWZgvSKJqunrRe6TjUd1zA8yQmT1c12HAmaEh41QftoYnznz4uyqS1N7eNqSfoEGJqJ3kp2dWmWkuvp",
  "key22": "4tYdkkVpRER4CHvPMBhEMwhscGHRRnXaSFVn8kUs8ZVsGWZqyKCBUubtjjGXf8F9RGRDBoSU5juX3MQbkrjD33xq",
  "key23": "47TV6GiLuNQaKwKNCFEF1quqWkhJdDehmhyifU9SgSbqN2wRJfD43fVv1Q1qtxZn85kbA2nNm4VXnN29eVxvh11j",
  "key24": "4v5EpxiGonS2aQZqFzn2HBjBsb3yQRFMXMedHdfi99jaKnWuetFk4enh616YXXq1GnybJZJHgHwHs25XfpjXnJtV",
  "key25": "2YQmmiqbSAWe1uLZFvtgbdUE6UFB5713GJmp1kLEeEBivHLYhiiNeKVqpVs97GLZqZHG8mwH6wnJV63DYvthvJbw",
  "key26": "3RTKyEgThMm8CQnBReDtn1mLSvjFrT5sXNZ731rPG3KAprgsNuarEYom7fDYjxx2rtpY3F9yhJwFRoA3XU1zzcTa",
  "key27": "4N3h9trMeoVcRXK9owf8PUzbbicbUt97HrqLCT2ym9HDt3yGkDPX5RTnVT8pFwQijSj492peMBedXFh4fR67ZSzv",
  "key28": "21Sa3K1EWLTe7B2jC4mVgyQGqE6i1qpksHT8uJ2D2mswQRXZdqoxnUdofoTTfv83u1urNAMDEaWuBfrorcwixQQN",
  "key29": "42wFL1p2sQ3kGTV6qPtn7ZnuKPMpTvUETBmwF4usC54rper5Fp6p48Gt2orWBMxV51um6QBHJ84bTcNbHdbmTRLj"
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
