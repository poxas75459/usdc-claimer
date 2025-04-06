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
    "3soSicT7BhKQdqFfKHG1d6s7hZUmbWt4oyCiUt3ArPTLzosi42SK7whuz3sJqM67Zh6h933WjjLFezXH77R9rudX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PsA545U6tB82a2rPWs5FU1WwkDWe5edLyfasrgpKQBUn8Nun78b66v4GzufPpaCvSaknvcehyQJoLpcHYtbUaVs",
  "key1": "keqfnJWWeNNv9PQ7BJNo8FYWtEDdTnLRJiHtY8ZgdvhNFAZ5oSeXz4t2hse1mje1qZeD9QM3q6erB2pcTiZsj5v",
  "key2": "LKhNpoiqUVeHMjKphWhDrQvKAQVBYEsJ7pZMrfi4ftidzf7iaVB6uVqqiUuphuWyozR4cyT3emdDziAThR2Tv1q",
  "key3": "4hZwVaV5WFTbcdRAE5qwvoctfyR9g244wpFyUUkJL2ugDoT7P3JKKarNv2XgRhCXaUT3HxvaiZGH6DAmqYsCYT3N",
  "key4": "5QPNoSp4C4Vv4PQqfzvZ6nPB2QUQPW9ZNjfJjMhpuxaXcekHR29y1zqcy2q28j5LVJdJ3tMo3vAbAj6FyEcQTMg",
  "key5": "5wUCocsTL6LhWen2CugnLNGRRnm9vJvgJRmrYQ5D5vyZW9LnqkrhqdZdR1H1xyyybsSbtTjF6kgvsYurcEr8UJPU",
  "key6": "4sQsyn4FmMN6JZ1FA5j5XF5H7R2Lv5nXBAbsAdFxTVVEfphKL2bqe8skknaSMQ2WqgborjpWCCgim5AuNS3a1poe",
  "key7": "5G9i7YXx1BEjrzs4gf3tKrpqqe4NqWMzZ4JNYz8EzJizG86QwtzJai8kuTTjCQUvxYW9UToKQxcYvBaGbPhJR3ws",
  "key8": "2atYSiW8nMCLjQx32nxfA9cb6ph2yx3kMb4Nvb6C3adVp1Q1DVyzcFd3wPML3338fv3PLago51BArS5U625xe3nK",
  "key9": "2D8KXtWBa1TAokg3Ji4QtnujbKiq1UCu98qypP6QpyUpFC1rz1eqQuTDgsxHLe32irJAYKcTCHWVdcNNBSnwfyFZ",
  "key10": "5GKgLQNJtKq9Hrw8hSKvCMzeTvZR371xfPBbwsBc3aFvmgjjnxwW1feT88TxEAsE5GEiDugmvJqDR1k4dyJQS72U",
  "key11": "21BD6RX4VUjP5VoL7eKQ6RpBAnnP9dnXNuGE5eZ1AWhEcqZvsKyk3FEoWNtnvC8fKSsE1v2mqyMpPzFao62B9wd2",
  "key12": "WshH53QAK6hXFR4hgvGqe72yHo9ifbKPfHU9jgbdnbGo6Gy65jtPqo3BEGWrghqnAAyaipWgdmXEo2ctRbbtRwz",
  "key13": "2ycNVxeWLcE4fqESJkVFkUTe3wnopjuqjjkLS4cX518i2W3nojmQoUfASRH7yM1Nhm8UiPpeFeu7MWPWoVYkvg4W",
  "key14": "wqDQfAjZ2iuY3NQWQgYMzGD2os2VPvGLxcgR2M2kJJXjqPvK6srKYevUyLB1LePeCR9Ngh6HP1en44v3PW3jYQN",
  "key15": "5iA7NAonL5sKgTjQMV7iUMFXSHg8pkfnbm6JqRDtcEcVk8UzCu9iBQnhWEjpddaTP1qwyrgyZ7naDk5KYZd6qHiZ",
  "key16": "5AFDsfokqh9nTadyJLydfnq8HtFJYt21KafgMPmymByBCGrJZjYTEjpe93YTe5Rh2ZPZ247KC5nsheGkmW9H9Uyx",
  "key17": "4z3sFCGLTFGLXehbAWd3wqKUfRYepFy6ztCCFKFiYGTK9uWMEBEjFJAWWU5DPdGzAWsG2ZnZhfUGFtY65Pfzmb5J",
  "key18": "3Vx3DiJhMPJRPya3JwC6LPfaWFmgCsRmUjmUUFfm7PnvGJsmfvMuhY3qLbEdsYxcHU8qf9eNeP58vnBvQcMxyxcf",
  "key19": "4JUpHYRJo2N8TFRx6zHUBUwdCuGaPw5aVk3jA9Lj6DHxg1WAS7MiHWDj9xVyciSJaZJgvV5S6bJJKjatDccyXJmC",
  "key20": "4Npn7xryfAHeeBfHJcwCPEXTgp1Kja7YsXYAf9sWG7xvmKRDwHb1E4gEjkgNs5vRqQ1qQ6ErXmqpgCTQiRyRL43Z",
  "key21": "3fPwKmJdC1cNaqsWdXQ3BPwSW6btG6ooehNzoDV3meDjd1Ur2R1YvvB7eiucCWURiETkdvSS8SYHdw4mR3ar95JL",
  "key22": "2XxWQjYC2cABDwkwwwbHNsLTsbaPQDBeWs1Q3F48VNF7KkZyVJ8FqYQnLAwvKnzZdKSK5N3NviGJ8nqzYWkRMMWg",
  "key23": "4QpCiSTbo73brePcVkspUXS32syyABVdbaa9oYbyhYqcxbqfEm1jFSD7Ecg6um4WwGAEVPYu68SCAsvdRpJWdwRB",
  "key24": "2Z3cj2zC9asJKgb2kkCcwAFQUtXRQNTHdadRwbanVTMD86ncjSs7HJvUWqx4XjA3F3uhdbTpg3btP3pJY4pqRgQi",
  "key25": "vVoDpXn3UicepN6rwyVpaqjea4zdjTmcLyEotdgWxzaxsyiAWzFH7qrn29cRjahr7bKTdkLtbZNhrb5MzxMFiSp",
  "key26": "4V4tNtztYRuZRVTx4173nE4nE7nkvKpq3vFj71uNW3jBCesyE9W6M2dvwwdQgEiqkWKp21TCW2jPprAUjXcTbzFM",
  "key27": "4f7gtMZUMhr4Yq5W5XRcAZkuGuWmrpR4QLthLhsz3ioztjkmsMN3QEij4Npen7NtKmhbA6SdFNzvVZETPWwNLRZk",
  "key28": "2rmZeKmfhmbtQvknKTxBvfwpA2FfkSW7eG5qKm4k1xQ7hydBvuCEm8Dn9h3GzfDnfoCHL29ZtyCc3PscEKpHc7Gu",
  "key29": "4WcpBHrFc2uG8xdjWAgR1FwXrGnM5hiQv5MCgTKwkewABYJ2C5nDUz4Ud4gVUhwtc49YszEAh7MPP1LKxs4xFkmb",
  "key30": "5p7A5YLnYiegJtDpDMu26rRwZgTyoSCoAoNvwNijufXPMXLnZD5w8SDDcithALisCE4n5TMK3Nn43kFEAiwPBuCN",
  "key31": "QUmiksiFFJLiui79owZ6WMigNuJNaQscBjdYFZ8sKJhy6JW6YNJ74SdpKKq9djCCJz6xjHAtofXpWVYStqCweRz",
  "key32": "ppw79pdN9BMjxexVtJhCBGzGgMJLvNN1PxiqM4h43p6TqKhurvhNWYLEL4xbcKT6NAYS43jqwirsPZeVskqWg7Q",
  "key33": "3W8RJMYDSSidnBWByufLenKGW1vTGymSYExtmWVUXwsZRMHySFvtY6ud2ZjNE8ks1xpvg2zALWDeayutiTLGp51z",
  "key34": "2aNNFgaVsBwgH4UmyDb31Qurz6L3wutvcZcQJjUkiA7iTc6h6wBGkrJRoiRc2q7ntVQSHbBxxybkcHEB2KA436gT",
  "key35": "5Ypbmnq1xTpB1jfz4N4yDr7r2V6fPDZdqeBqRmrXgjdE44jb3HmZbGbzHA8fdZQgdw3FNuja1VqwVF4S6iseCg1c",
  "key36": "2yL6ANY9pRWaY3MyvKXcf76y8tQa9jJApe4f4eAXKpHTBGwyNwDtkJuZqqke6bJ9J1nUkSkyPaG1NksxU6GPVKTT",
  "key37": "5cRAxJ74dyG5Y4W5fEAFfdhmFuPyQMRiK3ym7MBdtejWS7E9X4PPEQx2kbgcHMSJLf8zrUiP8dNUxLaTZz9EbQBT",
  "key38": "23H723T7GmTW8wfFpPjjNL3daf6GvNAPNAqQLW7f2WnPT2EZnHYKSVnQdmCXbv8r1X6MBq3KLebUdDbrWg8upctr"
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
