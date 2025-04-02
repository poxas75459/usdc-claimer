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
    "5nUFrt2SJuHUJnccaThxptmdS5B2YS9QBeH9ckQCXPew838odrHpMq6xfmrxHc575BiFJHNmxm2VnJs23SVmU4u5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qFbhNfGdXsyW6MFAW3fanTanfuVpbBLRH4HCLeBc8gvoyNWFazBG3txvhVExk2KmPwCpmLiQsF78Be4GaZgRXc3",
  "key1": "3AJHxMtNh7PT2JdVRkBbmWP49Ku8ExF9p9q3FxFyjF62j3FZ176A98jFpknpESHUiSzgS953CWgnEAipbb5Z2pRB",
  "key2": "9aYhQZ4bKSuzCDRUs5v8rpCge2KqPVuM3GreTs1Var7HscWZB62iL1GHFFQ7ZNkTnrrQjTUsuteEeZnQ9XaLJye",
  "key3": "616t442VTry4MTyoeCcRWJoKvEhFD8VRjnu5gd7dAZfU7zemy7qezBe3bQ9ZNUBkwquHgVY1S2Co3oXJLzD7V8FL",
  "key4": "5SREH2zSK5pmB2bp3KNbJwyJyniLgy1d6eYdQFXg5uUVgqjMDtTiFsDitJxGt6cFYXbRbZXrMT3FFUovkGBZ3mQw",
  "key5": "4C5WwNmCNcsn7q3fL7twjHbwnxFu5fduBDeKVXhKzw3oySmWQgQnXV3KoBBjaNcZKKKM1B8zyC3N19Eee1o6DzLZ",
  "key6": "3nMm1pVrA1r5ySFEXqGRaddwYsPmQKasUmSP4VdYFqWFp13cMsZN2Z6qPpFoZYvPKfQemZahaXwXNviDHUZUu6eJ",
  "key7": "4ryYLQSE9QADUvfauxLxBQrzFuUyVDv4ZWd8PdGZdDtSUam6fEBsrBDABzUYuBqGc9YCWnsJWXmgbcYfJKXGbCzA",
  "key8": "Uk2FQF46vXK43xYTtQTki8Sr4qXys1t2v5QcUbKhkL4gWHrJcWAS6LD4KwP6vPdePrize6ceBUD1u5Pccy1KoBU",
  "key9": "3nZNw4MBSpB13wpGpRnSkZguUPnBie27eEqeaF67NeWVtLLubHfS6CCaeBSq9uaBHikd74R6tcEDWZBH4ybU2MKG",
  "key10": "4A4rQ2EngkUtNDPYAtDL9NW9q4M61kVAHQaMu1zEYzP4uohFGvM8PDfocrZxThzxr8NSTYHDXrNmYgSVYsLUpqXJ",
  "key11": "dExMAdbUFbw8nYi6v88D54GjU8Wjsq91xy1VbtmwL6b5KMBCU5KZyfqWi6seHW6ufa7HBHrnDFX8N9oV5ApaJx2",
  "key12": "3ZRxViZPHy7RjKGsdKjdD3Qj2Y4vLyM7BJfes68zVhXgx8nHaWCQ3BNmXHQUAcvFRb86AWJcXtvyEX8d7GvYsb9M",
  "key13": "2G7cdSs2js4H6ij9BbJWix81YhxBr9G5UhjobvNKcLHpmfD5LrB6XZsQV3zJrSyE1nUzVR9X9rFeJigpmHi1oEQi",
  "key14": "QyvNhADfjUXS39Fmm9em7qNUtw6oggyLem3kPbDU5mYiRsEvijubGq42Bb3Mk7gfhHqgVBeGARgw4bMT2J3fYui",
  "key15": "5oaGfwe2RvBf2mhVrgFPJedH8USYtF5SzwwG5WqBQ7Jd1XU12S84T3GyvuTN9HAq5J2QDmo1Xj42uGxSiHP8ntWR",
  "key16": "2STUTHreaR9XVF9XVG3V39zk5LbaBPeT58Ct1TcQmHgMB1ADmWg7BbWwYZpa1RVye7qPUvAjkewVZD1aNzTBri9W",
  "key17": "4bqaZ1zKdsQkr77p5hbJFPiKpURbH82W3Mg5QysqehWqEBmkqJsWMeBSzV4UrjUzX8srHRNXWAtxsgHDfUvrDoid",
  "key18": "5rkC5JVG3dtLWzf4odtSb4SAxTPbMpDqrvmunmky46shgBmfmjNCxUQqXdaWpE1TqcckVknXwk7XCEXQuR6PWBGc",
  "key19": "hjrKPSfF1zouTG5TjQBXPtNhfJnA3qzhfjHb9xnBtSajjz9e1D21U4wjBJpFM27j9S4dcnu7AmSVYqkamvjEchk",
  "key20": "ahoeC7tSMcnvsGpRU6BL3T4K6XjEJTiENHhTwtZE5wJbPFmEKCNJiHy48f7CqXwcgoKUjMqARWTTuowenvNG4Vy",
  "key21": "2ZT2Pb6tAv31ZaEWhRzwhVqpap3yYMzEjV5F5UfHi3NXT6MS55p2TX1XmNs9DJWXJPtR8ejYyJtShq4hRovn6GzA",
  "key22": "3x6yfC2XpGK3cq4C8LW6BhxmoJYwVVwcfF7DLZqqAPwji4jzERNvb8hJJNkvfLKhJfESPnCis4eU1yFzGr6xdxiv",
  "key23": "2Z94dNPd6ewVVsrFpsxYSzckEaCVXuUbubJA7hd2ZUrkhD3HWTTSK91hY7qA96QKnnT57CnMV3VUdNHofBJXyx9s",
  "key24": "s3Y2GERDJrVo5EQdayaeyMcRK5U3swGEwJdEpx7S63Sg7oDsqNMG8tWRMV7Q6Xy5yUYidqP2UDoddZJHbhweRTw",
  "key25": "3c7Qcki2k7rXSmZFYvvWzWjD6YvXkC7ASG2y6E4P4GVaTY78EAvZr6RZaMADMtdkWbzFFTvyuBWVdZE8Fc5sjBTg",
  "key26": "26hhzUCbizmqfQUqhqD1tdQ3AaCmVvGrFjgkfXPp8AxYiB5WnaX4nRMEReHyruY8QEcxy5pKsvVpWqu7BbNV9nJV",
  "key27": "2YN8E6TJt8XEULuwQHSi7dyMFRAUNKzG5Se9EzwJFJjeDTjJqsALSXiRZWbMVWfZB2qs45z5RMyqFjWqKLWT3i4r",
  "key28": "EkhJZEKBRL2ATqDBn3AEvEBYiJbP5me3ttncas7A37gRZTrPs7kke9M9vLrdjEUFAUt9G8WGWLP7JuaQwDJ7xXs",
  "key29": "3gB8SwphHLN74fTXqDgexykvuS7LRnBxhS9PznrV7zBjgmbwsPHMXRdeGXHCBodhDfGoMmcgfaLhZnrUeke9EjzQ",
  "key30": "3tc2XF9vUKd1oSxz4fcU4QGiuBf3zhUz63tgpUmsRFUAmzeeB9ojacMQ8NcyLKssz5hgFgT2DCp3E6npvAdfeiND",
  "key31": "3ckGNkoVEVeNWMeDiWzdzerbTVgsK7sgUSA7STqkxrRVnDVwEAv7Bgnu26qnMPGxwdk23StbJfGQgxBMKFmpFUAQ",
  "key32": "3NvF7jz4SMKTos22uoHYyBwAxMiSLfbNUZZyQGgC3ddTDcNLqnjGEoLh2EXkcUzJG2C6xuyAthAxoVb1suFZffdm",
  "key33": "64xcUcGzGh4d2fFsDDKzvS2bzx1bN8PsqSLFsmgprXAhRne88gtxHNnY2MY5GNgDSRH2Q17yBeWPpx2VCB3f9F4y",
  "key34": "4ZNNp6urvjKWCXuvS4dm4XqWYoS2dhHjJLw2DnE8VHwCDj5TBf2zgYGEPDjQFJ6J3Hn1mTwQ4c1PeErCRvTYdMEd",
  "key35": "42FZhmU6VBg8uwK9JpDnJDEx35g5tRZcFFRsQpER1RAT9pNZSj5GLomiiqFyYMFYphDB6Vy1NAdpLHrJUcovsDfm",
  "key36": "634o7EhxrRfXUEpuVm4o7saGie7rsdS4yGZv4478hxmewtM7XwM4uStFGNJFtnQRdP359T5uJvhtCG2iwYPcdkRX",
  "key37": "qHhCb1Nvd75dKy69qpPCcprRDeN2T6oBT9Xq9xYpw4znbq4u4YfEkYgjKHbkm7CyyFuYDgy9J79b7EWz7ADyXXT",
  "key38": "5sj4uYawp9spiSawubNKGGEXsGSTuk9wXotzeKUDDPNQwBDrCJha5V9aGBSkqx7Kos2RHAursnmxfz5ymj1PRGmc",
  "key39": "4mntQCP2B2oURUvwFBUq2NPtq1Ph3T55r6qqtLuZqxwKNCUc24WjTD1Qegczjq8EkWeUaB1aLC9SERAyFkEGKgpj",
  "key40": "TuF76wh3zuWKNRiFNLMVTvEUopZmFMoWc68yyyuzHXwHFWF9YU9dcHLcVudcW3eR8RpGJo2FKKiKZmQ7eZ4A4BT",
  "key41": "3YcPmpV6JNnQ4KzV5FHj2tuFPodtxNTpbRyrvpdsn8EKeExR2LZR355o6KkgXKCdz8FBqeZx3sw7aiBaJ4tQJ1vr"
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
