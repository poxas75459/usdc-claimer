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
    "2v1ku1GQZK448vsjYG4M8hCLGTv43aGfzzAY2pMZ9GSMaxKZdB49D5N4GPxNjrn5BYyQzLJ1xBazqkPb19244Les"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T1yUq16gUdxs7uHYsU6VA8YFaHyAKZMiF7c9R2XvbFivHDt7G6jNZRrxr7J19eUAprQ9jPU1HD6hKnhcPQ4eG2N",
  "key1": "2AfT5B4bKhjdXMi4wJGAB2JatompecUL2oF5V6rbdFxZur2APbUx4CfeHghdFqFdkZunFcgj9MebBkrT1u5LvEo6",
  "key2": "5aMnXrLJyiLGSyYEoH2wvSrtjNeX63mL9AHDYmfAtViMqeB9a2vkYw8XmRxVzsrX85YwhNTE87U38VQYsjwc8fb2",
  "key3": "24QdNTveJQg98ByBF8HH2LABRnTrxEzUYSNBy7Mmx87zQcMDtEv3PdTXXGfpnJFJHDfSceB5ar4uNr37xmzusrxX",
  "key4": "3ncQ5E3Nj6pJA8QdQHw1sF4Ec3mzKDfF5EYnEb5mGZjsxGjzQFUfW35eKA9VowR9wdXHnPJSEfiv2u5k4VeqdMEm",
  "key5": "3xzUhfeCbhxaQff7r4nmkKUMzUJnX4mQkW8mJbfYUz1GsbfpQ9fGWrinpAv6FvfMY8ij4UrEDLwqBdi4o28TKUGq",
  "key6": "5SehW5EdwLfATkEqQd9Dj21MydPTz4KpQxypVMXooKU31qdH4kiP1FxFyUgsGbHdXevCYujRMGniZZMxugFy4faU",
  "key7": "2HNdkQsMUTph7bbchnevx7VyEvcZUNSRCYoxoDjUgLjdqSYbfws21mfQ5sKePPW9xpx5ViE34ycgPqKxDYW2Xw9e",
  "key8": "35rHvPefgg7JPk8QMG91h8hUy4R4jHNafMjsvGhywZtY6G58KiPDRRLJ9wEQSFvJ927GpnUztvgwMKxGY6ZKKnjA",
  "key9": "55qWHkUTkbCWJC3xiyebNSZurLpKrrJrMLyEcX7Vx7B6VK9HHgXedJFhhuT4PTeUzgfMCs9LrMRAUmsJyb974BVW",
  "key10": "4TCTYnLx4BASQhq5fC3FUfPQ3qxQFF2TF6fuBJKLS3GFaVdCrUvWLadrz2zuxLpmDWdhRYhbQexuh69aEn26bt5z",
  "key11": "67hQVqPQdEbYR3inSXtbSw2eNT3hmUJAzHBdUfg8R1CnV4jgCpBFMjYRVYzKJhkAyNBCgDffTTKGWSb5pJvYVrjG",
  "key12": "2gbDdP5auEUuetYubm9KSHhXikkvxv6EGr8cDeuPKpC2TmDD2qhV5pABfg5RGEqvuRdRwkt3qGZsXhYocWb21Kop",
  "key13": "3x8Akahq1N7q4pSQo9WhbTsYjoQ5ZCicefuxLrtrNBGKMHwxpzQFoxsgjBcwjswASE8VMa6Ab7dHjGeCaGQby4h",
  "key14": "4CcTtJcHLfBNzBUPU8U7LWtyqHtqM2xpmeUknMwYFp3dUdqSA2tatdm2FAqRvMxoHtjQAjQFGdK2wQR5pfRFE71U",
  "key15": "54M3CpG37HJKiMyiVKpybm88aTVjB29PobTSMa7w6RCZvEy4nQBw8jx348MsCnE7ZUfYm91LNSeZB5m3Hk2TWquC",
  "key16": "4VRzChHtenUzREpuNJD1p9ewLFfV2nnLZxNQfvUNGA5U4346rsnQ5U6tWV5ekCwCxUUP7whkGYK6GHiqYe66dvvg",
  "key17": "3idjZTH3hDD2YWWzdMeTVWbwuZkdmkMTbard26n7dPqYMUFoVdQFU48CkWhjBg4pK9pCf6vLDhzLKTPsbbBzJLJr",
  "key18": "2M38SPuPTT2G8VevzPMt2wPrNT8rAzPzcnMf4yij4WnHz4Kuas94NYV3yTAHa2Tag5h6JK6ZhRvN9XR1VCTtHmNz",
  "key19": "3jb6r4XJy9bzbAZyFQndF6oN4qWcBEt77rSBkMXPwmeDMgEUiLmEy4gyGzc1AMt4PgPDazULrSc1J5HGCGMTJH7h",
  "key20": "5wstRKiYztJnMqkE5SS55Fisvt613VU7xf8PWFf3kXBGt7beZ4jmRjigJGJomdKUvmFFA8frzo9Khu3mEaryK9km",
  "key21": "AHmAVattUKEFpQjew96Gi9v7JAyEFatEyfKpYtEUxarMdT8vwCA9nAAgvHBLuRcCFvRgxyTZmcZQRpR2uYNpHki",
  "key22": "4KWNCPDmnw7EMkBQ5CyMDeLn6ZFZkgFNWJFMtLvwBYqdmstdTmMEBY1wedrPcGMGwDry27AkRoqfzq9JHWujXzG",
  "key23": "7TDwquptf2Fvsfguhktc5EzG2piXb7UenzfkJzaJUMXqg312HNWd5WnNAGsaXiWCZ9Dpx66vsB174RgQyyR7Q6g",
  "key24": "2kdWEE8pALU3wd9W5YV7sVnUthR1fQHp2HbzKwno2RgweQYN1Tk7MVMZnwgQZgj4xyP6hNGFcXyne4DiYXnF7eaM",
  "key25": "3msrCyw6WKjpEitZLRkkNNTK4ThBf3pxZectUr2M2huafMtZYrxwKBcEjcaEQpBP35CryAoYBHTPJEHQvAryTnet",
  "key26": "3mHEWoi4LDs2tEPvTV7wRYmSP3tnaDgLrKXj3bQCT2YH7SyBBG9vU1hFaaPvR4BkRK3tkRDfRosBzndxsv6qEjJX",
  "key27": "58ZB6YRCpoFfjntet7P9LfkpEuEge1gui99ynhdG2KvZe67pgTiiDVQSfd66NAyw5vDCAAzrFb6QJRxy6DoEckFK",
  "key28": "4X95bJmHZdzMNCPfoMVqu7rND9c1Za77eVygyCA6cdAQZcF25KZ8U9dnggkXFsyDrEvyECr2tF8CsBfd4X6ay2yL",
  "key29": "4rJEyCn9ADrCrczGQp4Pk1A9d4SNHFmTW6SJnCPc3DvSQJvc6xDifuCdh4EzW1wuMNCfrEuKAkJogKDnK2m1Wajm",
  "key30": "2HhdAEr8RNgEEKpTvZJaVF2aWkjXu73MxkvGvE59nWtETTUP6doBVMDNJyiHzJR529tu6GV7SXiGxVAhArz2U2Mq",
  "key31": "3Ck4fEXZsDzD3F4jAUN5qUMLmh42vJsiUz4ASafhcgLRLY6TzgZxmHUZVC2GPHib4qnBA1Wv3uTKk32kKxoQQ8GQ",
  "key32": "3HE9qCaxGqqvNQVBQfj4bADU7qbd78tuE1MVrfgCN6cwDtbbQJzwWHpRAexDxtHx1GtuFjGsDku4z6z7nQpdYCH1",
  "key33": "5o5jheoC6DFueiZqeYGmE5U2eftBepP3ruvRgRouefDDkPrzcB2bYipNLwwUpzWqmgPBSnBfarc1k7ht6ei6MNUs",
  "key34": "54mWPZ3E4srfpD7eZN9L3YPaaejKFmTPxVeaNmrPVNUmhJdwVbRTs6EfyJE8M34bFesDdamyr8noeJ6VzrwXw2dR",
  "key35": "4dr5nvCjLAyjh3fQMii6KHtYwKSJdUu6nZkZwxUq3wBy7Pg782KvZ9PR5qXvevwEJfcLMWCG19RDZKcfGhhGp8p2",
  "key36": "2i16XHnAT96Q3xrZcrdhWV9SQEBE93LFqDWwzUL8vrmK6bCprTJK5vH1bRarjuA4ewL64mdn8R53sUP63s1RuWcM",
  "key37": "4HQRLarh8RQk5R5gnjDzP1jnPPmPQzUiR8ddwCtoUHZTQfPgyzTF5XU6Kn7YNKbdEAsz2UYMzyZ5u1WmRLcrnsqL",
  "key38": "wnn3C124Zr4uV9qLvjJbza7pG5ChhV9YirV1vesTib7jgY5ySYAG2NH7AFuf2Ysga7RBhtHUVVKy34TzC7gYHHV",
  "key39": "4R6bx1633tvvULEgpfL3BuU7WN8WuuvUr4RSqWnmwcEHnkfCY6uF16GYzzgtAysEVypd21GR9dKeZHftNFqP2hvo",
  "key40": "45wRKiAGAHE5GyFAiN5CKqBLb2xtgpzwvRwySe5Df7BMo6iAJpT4eb43DDZqKYkRWNuwQ7AKTJ7XPdtS1LKrj1sa"
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
