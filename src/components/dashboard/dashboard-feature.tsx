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
    "3KxwxPwi36YCQNSYMZiy2EwavGHNatTHta1QqgYcAQwG2pH86LvpZf6FFHd736sswWsz6cePd2qcH8HZkYkMPMjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FtBqFXisHXZf8qA63TvzPXDL5NoFpQ4JqdKkv4cnw6oBUC4pY8z4SubQ2yhDFX6pwXv6DmnXSmGzZFgusyojVDp",
  "key1": "354o1ZqBypSUFCVyEqcr22B9Yvpxz1pikrWZeKMYS5J57JxjKwpNVEPcmSCxPxUxEu9FqUxLZXJCYd3QyuHSuJB6",
  "key2": "3Qd3RaRADaA4FU1sn2Eb8pXdRZc6yiwbMCZvEUGAjqq5XK5cWwqgvX7d2wgMHsdDMatzzJcTye3AgSidpsjiFC1m",
  "key3": "2LT1TnhaHyGLSJd2xm44imaJFHgNnygSHhDanidt1hHqTjCuohNSsxfWyzCJd8tHF5yLqJu7Dq2pMcugTfSsJS6S",
  "key4": "4tR16vQHFPLrCXqyiqdNezDdgLaQzWjre457MVMC5Redc6jzb9fSvTtmAJZWrzXCNXhJyog1Tv6Y82Jc4GnaResM",
  "key5": "u8SWqk4HTWnQdGf1Xz4HngKjMnsd9r3LFmPfhjDuQGVc1RzQcZinPA4nG4DV5LJVVsf6SFQ1b4UTC1AeHZ7rjrS",
  "key6": "t2k7YYPpHMJ2UjjDzPzHfeSGd5enB7opFpb7oZrp8VZECzD3Ug7YtFYVsz6V7a1Q75HZ19nSC53XEps6nWd9Bpv",
  "key7": "2ts3doEFaMSC1iZjkSHi2MeA22J7enqA1retAqMBEr7RGoX9eEahGpgDvNWKrMkMt4V6oZqPf2Z7yoAxcLZTJFfw",
  "key8": "3SAPJQwhjy8MVFbSK2nQhptJavJ481MgyQzn8KD32C1ouhvZi3SC7FKVTDnKMRNaoCVPZ6EcxiA6JmzYw7XSivWe",
  "key9": "2BRCsTJxQR4o9ZYpDhqh4kTR5Ecb9Lb2g4t7bamVpVR95wbCY8U1N8rgLwRSddJx46nbdS1P5eghQxG9ywEetAx9",
  "key10": "3D45x66VSr1ivFmvv8XKCAEg7WkPBbFG6ypJFG5JcE1R6KSxyiFZBEonKHrxHCGpbyG3jTGuEhs16vAZPfJYyqGZ",
  "key11": "3HpPTruCrPgkqX9oFVY2xWUBjbru1VQX8g9SnPPGv7Wti9Td4fieCqU3fvpKrFFfZfzXkwrcGeCUh6B1CfueNVM3",
  "key12": "5kCah52oQzWnzEY8gvejaHoUSvKCWSURZrc8i7F5nBLHe9cRRtcjxa5L2m5fdwHRE78bdh22eKR7h9UQbPnJw3g6",
  "key13": "4VV8dqxWK9CrwPVKL2ptEURrRJUuxZcDo7hbm4oujDHfDzqHqCn3DBwM9nnyskLDH7vjX4aSmqC13Cz3cHJCAqjK",
  "key14": "5k1LuSDXNzQF5aw1HZQjUf2M3BX8mkHWkDs6NezxH9RaRtmzcWYaXihPmb9GeajfXNMpy9tgGsnBU9dYiX1BKMjx",
  "key15": "7UhXKCqji1C6oMCAMhYU8Ja4F1seiYvVgVcV7CFWLX3pdKaL1jhmWE5PVCBHyzBxYXzu9wDFG9MgD1G6ciQdhRg",
  "key16": "2ZK2sMEgSdppGvYjRxR9niDgVhE2jrcjLZ71NUYEtBg4YrVruLsoikf1RBhdBNSytpwJ3gSZXXaivrSnHsHvg19z",
  "key17": "3NFL4WEA4SFbArSGpRciUYY7RqAvkbHN3wdEd762FWSPZvfwG7ndeuWwMijVWSapsBH3S3YLG2qi6SJ3wf3Ct6kP",
  "key18": "5ymfGby3FJdVtzDLwKm9qz8yPSsurZxp6yEydvtneaZGAeHjUfzooaSwzfwk3st8rURgVXarfUjnsJgTHfRjgL3A",
  "key19": "3ayc3mDxacrQz2YGFfETJZjUn5VChR22uwcR51ccZmK2HBCFN1bLZK1X2cwB7oU34L2xeCFxGRkagGJxvbGzYJyj",
  "key20": "2q8o7yT5ZeBkLizCvbgKSnb7UTgo4iJaZM3t3MXo5tm2By3zyhWffYAVnN5wsnPsZYxMKVDDvEQAuf2BaNXXbCpg",
  "key21": "tqudF6kzZZrPe4zsRgKCRa6sR9WFsAPxSnPk9EGdr2kmWjXK4MUFSjaUVFdK8d1Hf5NtueQFiiXFxu6zZ24KQ4i",
  "key22": "5ifVLEhxGN64SFKw8qV7fBkQam8d3y2Q5jjHK2eUKKWF5cz9gV2wbrmqN3axB4VHtPPg4N5qPURQ5uSbh7pBDNha",
  "key23": "4e8dy2o64vowtg28bq9PTrdJ9EBunHUgoqKCtL4kpQMecvNAJa9518XWj4eCvwNaVLzTw6TjMk1Bvnb5ZrkMoo44",
  "key24": "ULVEJTh44ivXgBgkgMvQ7F5dnF9Pv7SnmUTScm35PuZTaYmxQXMFk6CdT8DsGTctATRqKPJQZQUQdbrw7nacGYv",
  "key25": "4dtwa6WZU7BosiS3uvxUzkCcDjjyRPRmaRaRCT7RxJJ1Xc7Xiy5UWh2L5iozbK74WHqEqsyq1g4KGFigJzuDHVMs",
  "key26": "3HV8CWQP7n7dA6Sko367PJrJKE14T4N1MsBibevDPEuGXdvgBfNNheMFQs5cgWwTAMRsoq87DZtRt4zvaqnb5b6c",
  "key27": "66HxJ15GUAGSi5CU5fh2tDoijS3Va7Qv2hbGEPxxiDHAUwU16T1GcDS7cs9zSxXGboir7ntbHEcFzKXyxrbjBnNj",
  "key28": "3fsq9SQK4AJ8G72MDNjhcFsrD87yMkgueap2PTbrW8MNBSDXBQt5SZjkcAdpx1VtWMo8Y4fLvLyVEJtakzBouug9",
  "key29": "79PXrSebJQgXfGzEBbQGQbD65FeNGduCHAHFV44e8apu8Uc5nbwv4SSXzv4sTKGcyrmGsxDU9oB4kgnf2rMMNvR",
  "key30": "41xWKtjUdAHXQKarkfVmc2f1yzq3YmzRVJvXSKub36jUKyCbXhdkqVF6wVuS3K84q7s5SKtHfXggRNN7v1yL8s68",
  "key31": "3M1HMoEf9XLRhtQZrfHEW2Z8MAwExommQHQRixrXXHjwqxZKcEEYeV5NxeYxVLSUM5jx4XUb4JLe6LGJLYM2y2bt",
  "key32": "fxBLwow6u7pugYNcFjXuTqX5sFo7dfNtVZ6Z448EvmaF3uEqewM7WGfLunQ2or7bSX9x8wmLv9AC7ZBr3vm9Lbv",
  "key33": "3ojc3oiJP7TkAnsuhMFTyC1fNRy781rz7fjU4LfXAGMSC35iAchxBsGudfugsXPP11ew4gKWYbAtA4iDmgf65av8",
  "key34": "5MuQ4eP597ooy5yyULcmpr9Eg2BVQ74w9bc7UY4aqQaJZMqqqpaaGZwNDGtfhFZbedYmMsCireJU5tj9KXVDGkUD",
  "key35": "yzuGrPmZtSkosiH7UfQBcR12NEi4M3aX2LacWnwuPcpDEYvkkL4Qfk5koEyDCcS1CF5URiKTWfocq7BPzWT9oHE",
  "key36": "5RZqWuVXDhaXKWaLiTzCpYhyG4s8QqbcqTcWtxsoUHb45CVUx6w84WnD1ZfckstvEY6gFwVcootmChvrNY7j33o8",
  "key37": "48nVR8fm4uXLjaS8dosEmexSydEQ3AGUtH7uayAo3ciFJxfRE4QRPtBKfjnowvs1ucY4SFC1nRPuksWj1qaE6PDR",
  "key38": "vESyw2Ttd2pXi6vNaa1xdXmhQqEAqTLfKWsn2c2nEepAdD19HJSSe3LpT3NLukpihAtkGjKeeR2K2GK3anZYpaE",
  "key39": "3V2whWvCT2PdhCmRbVqXt4t5hnSciAxkf8UqfCCx7aQWThxkgRqcz8QDFS5FDQppHrEAVVByr8hcquwsa6F4Lvos",
  "key40": "3uvkiUeQuNSnEjxBwPEoz5zsS82hrEakm1aQypNzMDcLPdsy2V6qeEVSHizzgKq9Sf1xqk9wF7F25U8W1bS7Ex7v",
  "key41": "5tswTHdgMZs9f9ytqFvmCFnbLCuDN3ZuDMe8ZS9Sbyrk2uJCQb527s8i7uTwwDZMhR8ha74Uoai5DkqKTioZTYtD",
  "key42": "5ku813wTe7vcRFeNeFBh1AiTUuKtaVoXEq6eYEzqwEJTAi8TLtTcdNhMLkFMh2RAPNYupQBRCPPttjnya7XGvoft",
  "key43": "4ugyAVAbAoUZLzbcpTSaV4brbj2cQ2mudLLYvCwz1xSNJoKQCTfacdqT6EHKk1UNzdpt2ogoWkUYKEmMDL87a718",
  "key44": "28wyUPfsv7vtA6XKvjFFJjXiJ6Fu3Qaj3YPjNRCzvDEa59qCvi8hzmAaZruVXsGMH7EDCH3Vc1VifQCjhmFU5gAr"
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
