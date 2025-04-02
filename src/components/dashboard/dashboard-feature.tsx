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
    "3xUXJXDfKT3EZMAFYcYQLYjCotHtkr9akeBoCirckZLCtwrRXhwmv6T3DfjhY6TBM66LqbzyRiS7nimC64rcBGTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z2aj7zxuH2DvG9bGbL4tyzPVu3STXqWSivywjsiuRj7boHHXgNVapNcm8ZteXJGiZpJACBtmmbf9efMHaYRVTiH",
  "key1": "33mdU2kDS6LTGiG3w2oZ6KcRuj3QUQBzwEbpyF7JqfUnG7T4HgrxaQhZAh7v8DHHEupACUSnNzBCsJAFkn78ZhPZ",
  "key2": "tFyqyUWFCNemrWaLmJ9ZykR1nzKtCS4wYZswfbJsL3xoo8jTq2yo5we78CX1XPNgk8D7FMQ8kGAqwEn6n6WP4we",
  "key3": "oaurGXXEAtJnyh6RjdSq45mN8jzziknP4RMCKX74gi6NtFtk4Poew3tbch8iEUpFXCKeVmxvPLxh8y9Hracetmt",
  "key4": "3xCiJrt3koVpJkvBxmTouQuGfy1oKAyV2h1vjDQW5VdLmpRWwSemSRTuoVwEKBAbsSGyW8jcEEvCwDwn9zKsU1oK",
  "key5": "5srVgdD7FvADZanZBW562e2zCDct3oEGHr2ebx6KWtxdGFVbytFt8mq74NxciuYHw6WzQaf28nrWFsGGDbHHWz5j",
  "key6": "5KWd8PHfWHo9XmdyHQu7DgmQDvUqtQtrU8xoFDM8nyotnXC79Dfm1D4StMvtodsy57V1dHGSZ1ZmZSDJiCZdKGA5",
  "key7": "4SaBMc9hFrRk8uQjB8QCqwxv3orxfLx76j2eFr36MK3X5raevQ4Fht1y2jKJZyUmPcS9DUdVUF7QVPeGkBqaghag",
  "key8": "3q2x9JDeZELAwsXM5RJtDSV7RkfpwZkSco2jaH4kSkC6nh1oyEP3YLN8AbM6iPmJx1JedXHa9Lo7E71cEfujjMjp",
  "key9": "XT1aHbvAJ9CjB1vA8m64zs6seuKQqHdbqiTUmUd2hAzBSNMTXV4yH9bkk5BnK3sKLjdLhRN68q9C89aBMYekxu8",
  "key10": "2QuX4rWGy4F9kbWdBBb1d2NSN1AnjJAKhBHnZcLekkG6UBYptYQwj5sKB3nZzzAB5Fq1P3ATcJ3Hn9PK7h4Bj2on",
  "key11": "3gK84bm1moZnLR9tAK7pCe4xKKf2Lhyvio3MYVUaYbc5irkRgLsp4QeeBjqnMu5LRpG37KVRgZd4R4i9BpqgV6nL",
  "key12": "3tJhWvJwtCVn3o5JTaZQPkUsG9L7WEKyCvXRddSC3osgGXbxzV3zCEcuoqVMcu4sj4Akp186bSZaksJ1N9EmFeoQ",
  "key13": "5yMW8qabrTgvWQv25qfohoH28qTxjPsHiB3HWeb2Vo23vBiQoF2aRq1VwXZqSGzm3SkEzy5FmEiAWADocdf8Uzhx",
  "key14": "5sHZcytHPTxrKF2T2jm8eGuhQU8k4wVvir2mG8JH6cWChwCP5RWHkA4rM5rSqTqGK69qjjoUo5YAsP4ZEszoJ1Jf",
  "key15": "4etf8sNKUNa3sfxXbQ4k9cKBwzkSFAqZq1hQY7NyHUFHqfLFQA5MPeeDNxxa3vykJ7GcUaUmjeUoJmC5SNWXQenD",
  "key16": "JKGdtXtshsPYuGqUeg3znP6ERLoArQRZnGPgV4LrgFwzpYgQvpaAR4mL5VQYGVfPtW75WFcgm2QvwcgPAsQspR7",
  "key17": "GRq8rkk363Bx9bUdpQ9nGtgfEoAPSvHtgfWq1ZTUpsGFZxy6QpAWAk3XaUGfWPbYinbtd2WhPc5a7KreE1MxiWE",
  "key18": "5PdW49Cz9RdCHBack6kiqiytcXYocEZMGVNxnKEefoH8ZkNojeS9519ZrhmZdV981BSJxhPyYt5njYna44uBSYqT",
  "key19": "4zFhni4C2WvVvfAKs68iausSRn8aGqYzWCa3yTVYUgdXH2R121QiwhHQCD9YeKGx9oPfPQwyWHGcjJczC7cdfYjd",
  "key20": "WXFG1sEMvZFJZWXExBSWsBefjFhcqV64KyuhZ6znH2BLZHAbs6C23BbGZBQ2R8VMk87NsCdnCRSd4uZ4797KKim",
  "key21": "3WkT9KT9xBVbi3XRREef8p7WkHV5nu3bg5hz7ebMk5kujXNxjPr22bt25gzPrfuCiiEE7m2KFF4fn6RMZw7KaUR6",
  "key22": "4j5DD8hW3GB9uGQMJu8bniL9EixZXuGhJ64A3Knyi1eDAETHMG29JnZ4oHGsu6McSwEPwr2arH4DDyGUYzqekNeg",
  "key23": "5a87yyNoaGFWvkBzfHkxYFdpExqYR98AfbqUsMS69Zn5jPZr3BwkkM1LMiUCML8XuaB9CwQfCvg9SmEsZUrWZaxf",
  "key24": "5mxKq7rqQkMmkFgSJn5xSPRAMrP3ePV84veXw6idhgRzw7dfwsooUreJskT1PFvMvc2zg7hLyqtawfN83oGsYhK4",
  "key25": "5GP5uQxS6fNossVHd2ssgHcBibEefvnD9xwssBKA4qpRjF6hNkCz6qtDHC2ZQyvD6kJeHKGUrSPAcdkRfM5dcouB",
  "key26": "2zEf6QqwcNmYCtS7c7Wvza7KPwKkc4nY4kCWBS9xjhdeqn55q25N36TCdsMdZ9WMyN2VudhqvSqYvNwWWkNcNuqg",
  "key27": "2bmVTeqC2zZZF8WRZzCjeyxFcumpyq7VefDqsA62ashWXJaHZFuBQcvBu7vHuozgHb17DrsaXEqzcumFw6Xw94Vc",
  "key28": "4zEmQUzQrTfxgP69UZPUjGvyYV4CdcqPXLYThpxJgXmDvvfihNhMbs9PFXw24CdkLChkr27AyrPhPQV84FaNinGU",
  "key29": "2uWjLccDJ38WAqiJk5oz9Fe2afcm5xMr9ZAoRqZmDsfFpY2KWV2szCbTg44zpqB9TMrNyG1mKNXzksFFpyZ4QSgA",
  "key30": "2wCJZXbs45wavctw66kEVPmu5cPnNsBUGQq2P1EbmoRP6vHecZLgfLAUWickthE5cWxFbN5BN63HLvt2PHwS5SRc",
  "key31": "nEq99V2rA9BNdYKR7a6yLY2Dx2r6Qpo5MMjPZDkb9p9EUZUUywfvNcEfFnekHjDywxDKDKEYMP3uNe1WvfRgmKY",
  "key32": "4EWhygbteeijbEzPn4Twp9KvLLAVDkqmBbKHkeXLgyhEq5Kx3q5q7tCSPSs4qgNsdiwmCqsUDgFSJktS4U7n7zDy",
  "key33": "4MsJMaksBpvxB7Zx9rFtJJ35VdLechTen9BvUg6pKhiBLoEuufiZzSaWUaA3p28MZ1de4D39est2EYMT2BMw3En",
  "key34": "5YapLbvss6m15y78C6sgMxatbGc7KsubzSRfJSmMfWQ5dfZ65smPtT7hfZcMeyM73uby8B9j8td48fowu1L5ZtQd",
  "key35": "4Wnv8bnqgFVJ7yhvTvJFfcsnxK3Y3rVgKAXQHXKfa97t8cJeeyNm5SWAvrhJCBhUx1tMBPG4rMLAHQCyr46E1qX9",
  "key36": "56jNgTvgtYRCNE7XwwPUABsBXSxEBSR3vRQ84kdkpQFR6GnZtTC8SuPjmmfqNEUX4aqhLDW9LiWdjUm2VjsNbmS2"
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
