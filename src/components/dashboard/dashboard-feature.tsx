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
    "67dJaLxTPe3SKzVfv1EP8soFCKL84NPqGw1t9YKdCWWfHZ23GZazpsrFcvGN769m4k4WeFf5iTeRk2wBPSpP5PDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JAAua8EUmJnPr9BCQtgyqC3PRFgkjoM67uh4kmmmKVNXmJfeRAdkDrZ4dv2hHiA1TTDX4sNNjiH8yVVo2HpesJ5",
  "key1": "3S1NjZb871zHnkKuDyHprYuhwGwxzpaP5UGD6wYZVJwQXgSg1ckEAUoxaUWPuxHA6H8RXn2RasHkkYLKAufqz6pq",
  "key2": "2NPibwiNgEjG6Tjz8x2taAU7QxG43bDoDuj2aHbmT3xFB3WXaf6Q4S4QcoYuc5JZiSPoVAJyjoo7gLoGkm16sp6m",
  "key3": "3JLb6jfF2QMC7UEBcgZ6rEimRQkDMUBiLjT24nwYkJxEk1ZjHC2qJ5eQ81rAeThJVhS1bFYK4jh21dJANjhAR2yj",
  "key4": "47CAY54j9FcHQhfbfL1EKBBDGiXQbmbhTJKe4nn6KjxuQkstZAiu3XRVLy6RFAVR4Sk9P77khNH97QoXRik9edEu",
  "key5": "3fW5V8m6thktZoVnKeGtFw6L5zDfpgsfKgp1w2K8WW1DKgDENM9pR9VQhbStDTE8Ck4QhXcjKaMvq5k93TMTtW5K",
  "key6": "2a44U37SB9kC3smMAv5eqQvaa3mpiqW1guBhaxUBPS5x5sHG8EdJPYpD1h3HSxMA3SjMWjdjtvBZTSEafj8VJDDS",
  "key7": "3QKnsXqkFEQRKi6AemS2JaQkfG989i3PUiLwQq636HvAduZduMrfM7UwmX3tX3tBVt6xiqBxN3QEpXMAyFQW9ZCw",
  "key8": "4Wa74KerP6hXyqT5hmHygpokDHCRdid8vJsHxrcRTR2Tg57kinSStB2ZAgwBmRTXrUhUHG5HmWA3kf8AreYxUCE3",
  "key9": "27uZq353BhjQn9qPfgirTg2zA6DzAUiD58VzCdafvrWH4SRkv4j5Y14qqMWuGcVRjhfTbmEBBC6s9Pzm6Hev8Jdc",
  "key10": "2GCaFF4Ys1ABrTab4U4HiXbzwH2mEfBN1Dq9oEUtTZhvqXPeY5gU5ri3EFW6HR538nTPZE2L4we9TiVX7SZexrJ9",
  "key11": "2kyJkf4g6vXEKjUYP4qH486rQWxTMVwteoG8wmGiqWKj4dodtnmFZ9KBbz5xhBtcWKiyCEp5X4qwkMCca5NDugwn",
  "key12": "5qywzVmYtAXe7chygDfGgCpuFD8xe1UMwmrSMmFqJW1MFMpHYXJQiq54JKBUrnrpfwTaKkiznUKESQgHb47jREni",
  "key13": "YgEDjJXwaTAscjnSbQ5Jn6JprKs4cBxaoAziUzEQxU96GEbZ6BSeD1WNjDd1mbizkfwWKQuAaJ4C46a81NVPkrq",
  "key14": "JUuSr421QRjuJMF9irpYtvWFvsCguMu2VmWRwLJS4zidSSrWsdDtsX4mw7rrLSPsPRmNqXzNJkp1TdMfysStmug",
  "key15": "5HYqBZmKUrCvDKc74Y25rMJNaKLB3zM7JxvfBYstJy1pA4PgXPVEJJjQX5w9eqa9YjaQo8VgEu5iJDmMSnKTc6Cz",
  "key16": "6ZwkX8hgWyExTFcqqKVVKyxmczn75Tsh2GC1RvvH6naWfyHgf496Xdybu7ixfCPi3kiHtKzPzE26nn7MLgewDCg",
  "key17": "3ojwqmFgfHbAWinYt9TuLrHsUC69WpRu2tzs4rr5kqNYcGe4DV1gjQRAM7XV4QpVMdtcbrvLWGPC4pbyazbuy5bS",
  "key18": "aNFwZiCFKnTJBuUH1AnL8ngthCsCZ4iN2d1uzxwTFLPJaF8hcfkd7CUkWjfnc7MuQX9nNSHnyHVgTjARemq67r2",
  "key19": "2zvwZvvbqoWTocftv2VnEQ2DKvjoY3zxiwem9ufz4BXU9UN8nrVXhM7sqAYQznW4YfEnLXCQaBipxmeU8Vyg23ve",
  "key20": "mfnFaBYfgvaeLGBrF8aGXrS7AhU1pFrDV86iP963Xdj1meYZaKMfEP8koLe8LJa4sUdVGpbDo8RnkSXEzgkaJYN",
  "key21": "31zzPQpojZfUgLWxZrqNMKErxULLiEZxeZw5Va7hSzQq7J9fUWtJ8GCu6gEFeFGsWibXgCAXeyjhUyM4gAi2LYzU",
  "key22": "4cGAZTiWK94PvrpeXGpMRZF8tSgCuqTX1RgFLLh9CzHptif8D36HS2e3Fr85n3tZ6CSXSr4VuDTfduyzXxPUKsaG",
  "key23": "2E2yrQgZ7y5q4UFJUTXZetCLHrzk2Ajeje6bcfpJswVkMfNpa38Kb2AQ5PfMxnBS7fH7XHLgf97ANHdyio175qKi",
  "key24": "2fi3ajbowBVvWUjD5h9zXrWhrtgoRah2ZLJfYAdK4RtA5Eovu1CDVacfqkVM8GVsADVdhgxAy6PdjZ6vkbGRzjLx",
  "key25": "3rfA5zTWSDByHqSUcC5nrsG3PTnsrSBX3RESyXhMm3qPGQvYMPEXBW3WcvzSKkdmuG3CXEokTtK7ri9asN6UyySb",
  "key26": "5F3SCPFtFSxbEJtfEpYb1Re9tb4dRAQa7Eu1AUFoGAkY7dhKqW44q3sGNyN8Km5hE6dRLt8ki9tM28UJ4JmpsXf9",
  "key27": "2d8i2CpQqWbqNVDZznZ7pbiYsTvpgCFhYshtxjg1yCFd2AMQqCYuDRyfRHgqRT1wGxu1BiWqf8jz3WVZjhYNs3Sk",
  "key28": "5dsgGBX7obBByQHbeVRb4qwSvJe9Wv3qYgbji86kUtFy4pkJB1evCtUrAxz6RvQKM7A7SvCUjdUwzWpddjnEsyWj",
  "key29": "4FkhFkAP8ysPNMwkJtGjxxN2x8T5K5hAwuzpto7sfrRcJBpLuatbRXgBNXK63RFLo7cEWDeoQwNcA9KwB8MgfNNH",
  "key30": "VKoePKgdiQNojq7mYd8wrWeg5iW2cktyZyTzx6JSECeewt7r3nRcrjtrsZQA1EZJ8rRHNDSRTUgMzDSm3XsFvSD",
  "key31": "49aGu3F4c5JXpmaM7oxzKdfqNNniU4S18qgUFb2JxDS2AeMW7wbMtRZr7RN4gH9oMHPRWmGZewZdsLHCHVW6ipi3",
  "key32": "2m9GPaWESNTNuMAtjSk7rRevPW3wSA57g8GyKVApaPpzXHy1db24WgA3dyWjWi1c86W3PSDjDaQhwFQsRa6Vx3nF"
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
