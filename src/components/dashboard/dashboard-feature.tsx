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
    "5NL2h11yXw7CHaQskEtbw62bVrNW9bvKJXvRLqqWcZ9CRyUkMkFsnVU8TD1K2sH1vLq8r1q1dANyYqEiwqDaReiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W4Vxtp1eP6Rs9mDfmx1DgLVV6iHZSi8PL1usVirzSo3RVWvjGFohj7HjkTgTBqp6XUHFKC9NowgJAkEHp9dFLxj",
  "key1": "2KQhCN1uiKSF7qSdY6LZ29JGmyLh2rnX5HjmRqy26QppdUP5iMR2FjntNVoWTSEaofyUz3B6v68yxyGVVHdYTjG9",
  "key2": "2uWNxmAxHnQn1nLD7arHaqh3krvuwUH8AuJDXqPgZPBCvUyFugExUWnwCV4etzhzWqFPH4PmubMXLNrguMgU6R1c",
  "key3": "NmtV26JjekhkhkpRpqV8rJEDenNDS6Enq7gt3G3GbrKozyZagkYwVfKtDHoQqecCh12hBFYDEoHEL9AxX8Xz3tB",
  "key4": "21rrXf1WTzCe9GvRPdEoqZQpJurCRGfGojo7yve8fRy5VNXmrt6gT3yGiFripDJQNkERWJE2T9mqt9KuHPYuWjrC",
  "key5": "5A8R6axs4EqYA96WLxVnKwsxaE19mVsxnGrqv7piyYxA6y3LfLK9SBZvghsS33zgMN43UdkhfQoV44mq8KoAvgR5",
  "key6": "64dtGXA6zsabccyvMZayM9bxPuo6RZrpYrbcM5MqjhA2M6b7Fu3nw8HFXJQbrQtEArZjiRSa8o1ELMPQGbpasQ79",
  "key7": "2Nb9GDit1QoTcLYhoAvaZfPsGtkgYwbdQbnERPNT2bD9Lrd5RrG4QyYddkRgdiYwdk9zXC3zAAPgNEAs2jq8GSg8",
  "key8": "6761Shmwusa8iAxNy2CcAuFkmzcr99wFWwS9jfZMpYbBS9RQK6go57Mt4DhBPbDZmkk2j4u9n5CTbEvdcaqigYuL",
  "key9": "2iKTKAFknZmcCeLh13BgoFdKmEnYBzcmiCcMY8v5dQShmrRYRnvKwdBxdpm5US1bQqd3p2BGNGtUSN8Pv5XcfuKt",
  "key10": "2gFcQ3vDhRkb5brCDsLf8sUmahUXUY9DQLr12xuW5R2QdyCJfDkAZaW312EQD4UjfdrqhzUbxRky7qf49BtEWdN9",
  "key11": "41takChsgrr3ZRzBaBgwxZey6WUtKTX2dQDxjMJ9YJhXH4nxCJcGFn4hNuQeoyFavhgxJB1UcaDnsbE1FWj5Efsc",
  "key12": "3MmW16XCLF36kRwsdg2PXkAbizqRQqEamq4zQKTPFYrgU2x7BHmzF58T4TfqLxE8PB1JCcKKb8XZJrSbWNUjoB1m",
  "key13": "3QHXRPTVQad4LvfVErpQPXqVnReVcUW48jjcsxPBuYmFbkiSwGtAbECVkPFCxVUW1deSDjwjZYktLuvzsQKAM29W",
  "key14": "4RCg3mwVecBDQbb2o6DzPHtGGnCyLsUrJuNw2U2mWUztTn1k483DHDrtndfimN2MU3t2bJzoKX4hrtW7FMdf75xx",
  "key15": "4w8UoSheU8ZYoLMokosfzN8ZXEa5zfW9M7m3jMw1HzmMDCeQpbQaj7mdv4WDuXrDo69qQhD7WcEjdiugdSSQDXpY",
  "key16": "2w2LqBjYpzpahEKhyC64ZbHU9CamGfnbWKGvXcajNGqQz7VXwk6zXnPAto2pkbKuQ4uG2kjw1aTtGHyNd8dfKL4f",
  "key17": "wPwz5xDNQiSUW1MoLyiddkK2qh3SNU8G6rdPFY1ANnyvokxfCyx42mWNDL15VZZuZyQfyEXNZQJpsCc7vE4VPQE",
  "key18": "3ZTFiaf5PvKbSqiF1ZkLT6ApTeepeyVnYag3vzaJ5VdScscxY66FAuyePqnSGrJ6BeuwB1VXuAJ2yQLBxY2fFucL",
  "key19": "BeJbmboKHbBF8fHsk6WPW1nSoD1Rq9LDkqSwRVbhJStoZTbNsaSE52m2hDsGw8i9JqaoTczv3d8srbMUo6wBV9W",
  "key20": "5ed8x6kiSyLV8wWsoR7VXfMH7PP5oshVSS3VX6AwfeFb9isoVUXc6KcEpavQTwA2rjT6rndGonmk2UjUQoMv9Pvy",
  "key21": "5zK1tTFvZQH9Ndgrr2jipx7eWvrtDzG3mif8SVYNRpCAY8c2v1gypwm1sPGWbo4RzwRrhTYBHpsPH8rN94PMcwM6",
  "key22": "3D6G1hVhYchwM99Wyay7MEmmqvhqpeKnTCjFZ7etmHKKd83vVdsqNEeHrenE8YK4BAFjgachQTLnaRo7GJ3LWyKo",
  "key23": "Jd2vk4NBe7UTKiXeLBMig1DVZjE3KBWzN6AdeZE4npvy5Ur48F36jLmrar6UKFfx5yyy62beu7qKyiGhn1GCg4e",
  "key24": "3H6A1iDL2THUeqdPQnXf6Xeec7juPE43EFwqRxpH7RzUdDmQrSSoqjuDRxF3RS6HA5bs51t2jMDF2dhJwgEzSNvJ",
  "key25": "quQqSGqSaLNzTP9c1B72zy1vRejCtmyht4d8DDAcceisNQM68YtYsf3DGaZF6LLX2poVER2ge3ZyhPz44h58Ydi",
  "key26": "5CKzYgCUo5F4hW2HDU6pkH8aGYbeqTLZAVUWTfYqdX4YCCHsFVvJG2ekUADnucdDN16D3MTCGsvqoseFLdiAUJ86",
  "key27": "4fJPmuqgDVsogU12ew3ehZ2JPTqA1EGtXPAMpDMi1h7f8mjr2UkrsyT5SU6czWgwMwnHfEnuTABcnx5WXCKLDcwA",
  "key28": "4GwJMbaPLrGKgMY9AkPEA3UfVZARrvHBfz4YfNCpp8wBZi9hDqy4bVaZoFXcPKRKY3HY31mPjgPGsV24f5oeTKMK",
  "key29": "h2H2C2fEttykLrAas63hBbJoCRufxqfrxsAi3DCsmBNzChMXB8bmzNvgbhpfr3rMQXdDg29eg8NJJyd3U6CCjeM",
  "key30": "sca9gG1EpJzZLfCAfueQd7bxZaLiWr3AczJqyVK5gqkV5xEiS22ecPTNU6gnVbtBqT5CpdGrPzDJEcwwK31oHiQ",
  "key31": "65cqKH7FavVHzGEvJNYShJAN6T42qczVsaRawVzSC8hmWR4kFgEHATfpLkzJnyo2QZr6bLwWR4vFQQRTjxXPoNdp",
  "key32": "4gF2qVMFxM5NCBdPzQu3KU3Rw9vGqoMi78pzPVDPG3S4gY6eHhhjU7nSAsdyvJ1ujJFQa8h3BkdnzZaEvuF7Fuu4",
  "key33": "uKNw3ecT83Yvs2a3eK7WsWvp4yHEXpiEGBp26C7B1ajxu1JbTmLiAB7wxGKabGNbyvK4GnTZVM191XeJtNx1sDs",
  "key34": "5hz9vdr1Lrj6tbXZW8qpxvFLENG4fANp5ZLwxNJz246juTJFJiYUvh1p8syiNCShumtDcZCDFkfRKbW4g9c3Bk38",
  "key35": "21soGGGtYcZpA7Dz7KgwDSJTfw3b6qzKi81gsKGtrG3hLtbgtfN2PK41JpMpK8M9kiij5nSPT1yShBEZz5XjKMtC",
  "key36": "54xksaKgahAd1AuuvUzSyJrXCRPxqacwFyLey4SfrnmG3ugkM9T19tBZqxuVW87Qk91irzbTdzLdiqBU4jbwwdcY",
  "key37": "2i9Ms7edPz36cBzSgTVVaWgNVsANG67P58rUShzhLSJUk9xnUWMxJt6g4C7Cht6vdw6PeBjph2n2WZcLwyA1QGWt",
  "key38": "3wep94QTUH1VmJ4hZ1c7D9MSRTTJT239i42fXCh5aR61vyYHj2NrAfsov11jdSL9anVk7CRk2A3NHfjqWVn3WTbG",
  "key39": "2FMpSWMjDeVLwpPB224DsHBC7WmNDQz8nzoPEaBqRkudnKRdFPUESzfECbagdpqHFMawNHGUfCDNNrjGUucroyaL",
  "key40": "3p9tqG3SPx9gCf4h7CGY7eyq553tpe1CnNRhiuX3pwyMGsSW1uW3a8NrZjEdpPkuerxX8LRKxwmPepZXXaChTo4b",
  "key41": "4J5YHWr7fg7uNuz2FKnt48QaGHR7hW6WWWhPHwao7w7eXmyL24LKj972GKWKBVWNEMEA9H4EzM3zHNeTy6GZUqvV",
  "key42": "56vZZ8s5XbgQiusK3LHGhQmKahej5DhzVAJhBKytMiLJRmoXVSVoHF43qQBRr3naGxnnWiQJXjuJhbVdX4YjoMzy"
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
