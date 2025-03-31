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
    "4j4ypAkvL7uYgG88JWZejhjt5bVrYUrXnPBNLm1LjaMuHNY7Garen9iutFpUCejMDyrSvYMDRNsapmhnCpMhjxvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yg1pQy3CwfE7FRY7zw811J5UYejcGz2xuB2U4ez5SUsBbEmonkeeRvEoJ6n6UvFnd3rkEVFJqZF9vgrUXsDAoQQ",
  "key1": "4iSDwbw3sQdAunWoyHwygMDU7SeMQwTvSrJC3nMiKMh7x9K1QjJf65U4CethS2KPB4vyVYQiGx739LY9ktxgk9Xe",
  "key2": "4t8ym5JRAPMWMtAc8gYJpSAeLcJXZZgUhBtBDNABeaLv7rTCtPNwUu8LGP9uinDTdiojdCUxV5XjUiuYRxVRSwPz",
  "key3": "3izfprom73wv9KWpqWVAHzTexB3G2NJx3HH32eAL1cr8iTgFZs8RPkJL4aRQEQLJYsy7Eq9gyoxrQGkoPjrYkBD8",
  "key4": "3SUtePUxm5u2fNe1CvWFFYzGHNFWtEJvfjHx6Ga6nrDjJCWJmrLm4Zm9dupxQ4ip9NRiEg2thW9AJPH9S65UW6Ug",
  "key5": "22KPf4HMGmB8EV1jWqiLz97yfKk9vnPVwGEs6Mk1qw5VvEMCNg2yEL532ZL6na9VZYVGtovXbJdyA4yypgVLYtJj",
  "key6": "3e1f5VMjXAocRprFVMHMZr7iXYJbuBis8skZQvbP4V5T9Vf9WepxDwvMmdNpA7poxt9GFC2HExxdPbSMg82QPg2u",
  "key7": "3K5YB57KTQJ1h9ishJKh855FpFywzRXq69kTUgGbvmujcFvKV9y3Ag3GT4nMPPR4YVQg5wh7EVUT7NJ5QGmC6mJF",
  "key8": "2E5MAoT7n4jkRiVcsqoygwSXxNNDwMvn52xciXeoQsvP243xuBBZ5nMW7UVQj4utfq6QHmh8RiHv5PnuUqv75fBM",
  "key9": "jcKF457DMyvp7FSGnjA3SHBMRLXjaVkfei7qYK4FUxWeZNrFP9gLR1JkuULToMt7BengeJoK1PjSbUXAnHvr2qG",
  "key10": "2jGimYf2j6BCPXnvHZhw41ztrgUASKrvwxGehZp2ioFCCqBhSwG93jboi95vuJvCm2Fd5oWXhjx4zHEDt8S7Cu6H",
  "key11": "3jYdCeS4GG2cn5XzmpC3izeVcYjjwBQ5qeBVFRqD87Ra8LVbFaMbRHqCaVqzHXei8iCxBjvcniu8MHJJ8sYMoAmy",
  "key12": "4eDJk111e7HoX8WEyxXJX3cQ9br75HpZ5GkpXUHuGVG2bR5wVMKU828EQ4UxyBbQQz4MKq8YTHmBkmZfoRFYY7rE",
  "key13": "4T7uprdfr6rtM57wxc1BPW82SJrte3j6UpQxonWKyXp2c5CRcqfeiEUp48wCtokhQbZHBCZkA5JEDAos11LXzCxp",
  "key14": "5oGQe6XRxQc1GhKtttVad2Q26TD2BnwEp6gwD9S7WzAV73TkqDkpeBqKSEm5MpuqHochVGjbc3rzVx7oSuwEaTmn",
  "key15": "kcCyE2je9kPndqWC5xqDwkQJZgeKNzo75XnLQULhSD6cSAVgMB2inYytB1V7Ht1aY2KtM49mKzo6Fmy6weHHW3C",
  "key16": "MosrrgLPu9yLTYdFox2iXDD9HL4snE3jHiLMryenwSLKYZ53yrbFbPf1PZ3ubd6D3DZ4PiFoP99sfEjsaKTfw2L",
  "key17": "3bJEheLBVJrTZvBhjVtazdB4gfzvucCwfmxzrYQQmrMMQsyfy1efVJsGxsRbr6gS5JmAaZAmiWnDJFSiBW9wUgMx",
  "key18": "4CcwrkcHc1rtqrLYoxZszGgxCmY6ic2bEqzCjxbHLvJKtW1tTYmKfubLmhehbKcjZa46KjXoWZyufTvFCp6mt85u",
  "key19": "5L59cDE6fKUxCR6bQzEvJMG81uGLSBAuNTE4RjRMMMcFYj88x2X7WBBhQztarbAQiqp8iYb7aCptstZWTd9ewPB5",
  "key20": "3BuFRi7XUhFqvckbNCxV3hx1tTsXHAJtYbVJKJ52bTxDAtET6eWBHS95EEGPfFZEtE8oMpY8rWTeSuz7G6VUyG7J",
  "key21": "4DHeryJw18ENsZvddYAia2hPsxFE5dVQBQpzMAy6V8PwNmA6oXcpgjnsYBYFPFPiopZQxM4468FUKnFkMGvZPKA7",
  "key22": "AfeudDVZLRrrDbVcJxuVhKqNQCNSDt58rVPNzRfPm3zTthdsZQCUdSTZo8e8z1wJjWmKxfFyz5FuY54gdvrUACY",
  "key23": "2x13jy2sviufuZT3VxAoHzdb3q7694d6L88Usw2SQzeocNoVGZWPu3tj5AP4wQ22LXYq5Y9J7Y3FjXLEwRncZHqQ",
  "key24": "3oMVuAoccn7d5uyVB7VbxyATr7jdifFuWvgc26DAhtYp1YypZMsFcPPuFDvTbK1CU9wz2cRezHqo7NaobiQ56BMD",
  "key25": "5XwsRgfhLc7FwYVA2iuCcMnmCpkdyrfgtfsPEkkdWY6egAqoyfwnu6L5GyxLzbJa2B8fLa4rgsNZS5ChCQoJrZSA",
  "key26": "adL7HAohANmRqCoTCfV81SxcN5f3VJFEmtSRunZ6RHyimWaCPEyYquAKs9L1VuiRbSB14jNaV8JyZ6GEgFHTJWZ",
  "key27": "5v8ntza4fEuBLsheqgLQU6AGafgTZioYCD3hfce3aaDA3nMgqPppERiHafFp8vkA9jpw6AnnFqGHXhHHHZgjVxvY",
  "key28": "d9RQP3hw3SLN5PVgEhEWiGi7P6yfmvmtXTBUJTb7wMeSVveeZXt5Mww1B3cVZaGGzkiLgbJk3BdveKbXTwS7ANf",
  "key29": "4yW4WQVXNiGa9PpM65rQcFP4b3kVnC7qFxFiMotJonjfwMPbHJnLN5CbM6gWTQm2SEsnuDwDQv5TX1mH9dv4xXUe",
  "key30": "45TaYyzuBkvgmyfef2ju497Q1woKtkZfrAKaXwdDQgfDefyo2xnxzX9b1aP1FEgPw328bqGStRSYg8hXTaPNTfW8",
  "key31": "3UeWdQXN9k6izPzCuHHDTh53mD6ec5wh7VfvGenaReXfzZ4iTGHPQERvdGeNorQ9XS3CjUkNSeEgdHq54XDyvFpV",
  "key32": "39z7gkw1zUgQg6ko6ZbyTdnAexYcZekRqKwxZPWRYypnRx7T5deB8DpGdKwYkGz8bhEUisAqwrWK74jyDgA7erDw",
  "key33": "618AQP76Xt5DgomfuuqNu2nHrPmxy3YFWzJu6bo2nnnDE3FdcTFGCwL7nMZU6LTragGLkSqotj2fMQJqKGUpNqWn",
  "key34": "VghY4SST3qN25Aj4bdr33VeXDoae5tPNomLmr7G1XPPy7wXXxDsLjURBRb7LJhGX8KskKpsChf1i74GxPfP6NzW",
  "key35": "2Wrw2Qfzqw2SdH2vYpSeseYySGRH25j877Sk2EDB7ybL1eZ9YmUpygkiNXeAbH1GaAYFXNa2WFVobEFkwcPnPUGs",
  "key36": "5nUqQFWyYHYbmJLxQLXWbSX6q5qsQ2eJcxaFdvif6G7wR79489Y4SvdYmwYkE7NkLpcnCdrorRHjGz5tAtFFFThv",
  "key37": "3s4qcDtBUX8UTRgUnw4cY3wu4FQ8YjmGpepG5n5bX1LYQYxWpCgvdtvq7UMSUQuFnd61kZGKLu9RYHf3hdDVn7hZ",
  "key38": "5Z5d4GfEt4skB9mGVoZ5UGZpgLH5q3nnginubkufRXhUD87cXHNA216FuLsrDhTwA9x9gYjJtZY5FccvJ3ubeHju",
  "key39": "3omT4SbGf5H91jg2QTX5Bv1zQRbPcs5P7ymNwrXzuQymcXWpurr8mjp6KPL9QM2dwMCg6F99mJghJgNKL5C6v7bU",
  "key40": "3NVNfvAzATT8V8Tu9wtYHejL7awwKbcvfrUmeFmARMxgrAAyCkpU3rkHXHUg3D4XN1bNBwYn49cBwsEFfnnB2ed2",
  "key41": "2pNBxb4gG57dXmCZuN414zUKYz9gDyqePxmSuqxWGQakZEi9QMKBmzqK62JKEnGkfzuKLYp2vqbdLtiVtMTemL2t",
  "key42": "3MEbZf3Ua399qJgWnADMwgwjzxL8JHgvr4GzKEcg6MFEm8Bidtw9zUNuhzM9W4XugX6VYGcmSFnoVVZ4TqUJpSex"
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
