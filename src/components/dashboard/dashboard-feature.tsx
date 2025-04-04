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
    "4Q99wxy1V6o5S6wqt2xAuYKnciXtC96UYtZCXhZZqiNS67zF69mFwo5U1y2ozzeuEAZFGGfVnTK4RhzEYhRFq1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ca67cMsTq792Asp1jadGR2kmyjgbtkyyXLthnrHNf2k9nXpnBRXpxYF3G5u7ipCwsFAX5mABJcWMZVKtrPHTgzL",
  "key1": "3BpH5hkAFkc7eRZqHW5iwhFiMgZrWGKTpPXAwPmnZ2V3VpiAUejL35yHFpWnT4gXcces4kdHh6KF7q7gYyBeRSL1",
  "key2": "4yt2ENcJT9fd4EWD8pKFGJz3HsQunxHxgs5acgZ3UVUNBTzFCXGH21Rppc2rWkrGk9EGyMGNTnbRFQQWvX8psvEy",
  "key3": "4aqaJd3QrmeoFyWkDjKThFhKWTa9L59aUA2PURhARAPN3Dqg6yPJFnRUjCVqALzYf2Dj3BK7oSrqNBhfBYkDdqVD",
  "key4": "p1bKHaLkJ8DALsBU7r1wjADgRA2MdJEFvLNFbSAYuWwDemAsgUjq3LD1yPHKovj9p7pgbAYdB9b4mVGSZgFDcUb",
  "key5": "4tWnRF2YraFBaVYnKMUce1L56hyhtvLaXTN9PRipV7AVgt862n5f1hniRpziwxCBfqHyNnQRH63s1rzhY2v3tjDL",
  "key6": "3gH3dqqLAxHEh9hctdNmvKaWYDBt1YhSBhRiwztRhNe3HHfBvEdWS2DeMzQ6WKxCxLP6ZigonTst983zzUdsGgF5",
  "key7": "4LJNfZnCBFmGmqH5CgiapYjy6vkCJtGaVX2fR95WnDFytvD44bovoL2aryhAYEkDFFGHRgNsrHXpVsKPZy2ebFbq",
  "key8": "5HCQfmcRvTrr6yEvT53kzQXr1WxqpGuDwuGtnQydcTp5MPnewiKK2CqgbT9co4W45CAkFzSBNYHRRnM5ZZJedDQz",
  "key9": "2qyAK4uh1EXmvdfFH74AGs4jeKkRNRmQTPw97S2U4k8UjP5uJSnBYtHCcYC2XELXR2jVcEjmyczGCKpPgxNRtkfB",
  "key10": "2gm9zEKZF2GHdt9SENVfpnNq7XrA67x3oiZ8cqtfBVRrbc81SaEXKZj1gkF4EdKkJscKjXWwbPnFZj95bLDVBQwB",
  "key11": "2nrzpdgkcek72TdAHnz5HhDnAap7TbF84BZdKYZPfpakdL37sCBiWPEsrCy2zAJi6cNiXFR8aQ7iSfMpightDpjB",
  "key12": "54BzNLs2vyrLyFUMPRnnGQc9XKF4H6fr8J83TtAqhLovChqtUdznioc44drARExR2RMnpCn1mGd7kQAWHnew85fo",
  "key13": "5CkUeP3vqw8gG7CdD8hvdzmsPpzLmVg7YcR7JyifAsLN7CM7ErTgHYDaAYc5WJbsCubFLdNkGzJhyNJDeL7D592W",
  "key14": "n3CpFxX6xiMUDCcgV5VTwX8ifw6YGJ3WqpxeeNM1atYDVcA3SzJrJY8VwED2MhWpvdXzyDT98NCddaxxy1pTuAT",
  "key15": "2M3sEmwg4NL2iP4JKj2zLmBS3ZnEXp6vUhU3TDesbZGjEDm2vtQ4X3EcyRWBvpmDvBCkgLqcdjcTwHEcYvy48PJm",
  "key16": "5SLhCUo4uSBd1AvwH6W9sm1QCkKta7xiQUhm8u46AJqFm1bVgpwEh75VTLKfb1vS3jGuUwpNbZpbjXCxxgWg52wq",
  "key17": "FLib4CBujAbPocswESWNXnQsWREJihZ4m7Tjr3EEv4b7CAyTwvatRSu73feEC7JzkV74emW1zmvbY3imxZxxE8p",
  "key18": "2G3MCbPv7Mtj8RzfvdhNWgqmn2BXD8JVrKeNzaMAjnJPiV4QNsUWAbZPmuo3svwkncvbMk4y3LwezuHYYGTgnuvU",
  "key19": "Z8YZ5X7BKpUWLSj39t8wjhCerTFoJZVvKbgn9Vfwb7F9ZgefhgmMJ8sZB9xcqx7V9xrLiAocQWT2QXX158vwJTr",
  "key20": "5jZNiumGPm1uiHB9oxLopCfyNtgoLSd6nmnwrudZmUh4nVRSE1iXjpyDyhmJpMoYE6HYLnRQRPhbhD2x28XdKosk",
  "key21": "5FtyrEKkvkKULoACjqF73pY4gWZGrZyWy8voHn5Yy6EA7nQk6NfpaFfVTKbohDTQ1io2oNuCAAWFxAL4ZibdY7So",
  "key22": "4p6ZqZSRcEp1GqWs5J6DYiiV7apgq1dYjPb7tBdmyUBQP7sfxyXqgzX22hzwJ5pzHixxuW9uUzVJUB9vJXdWwSnP",
  "key23": "HjPt8JkerjYiX9XJpHA8PxqtDSNg9L63VPwegdADfiXeMzoscwLYE7sNakwHJpffa42axz7qeXr2BYCrj5bvAm1",
  "key24": "2E2x8orjvBJ3zC5Fk8jJ75RBoLDxwUZP9W8k8qF2N7QtY2hosud48We3yZ9xhZoGda6y265GbiHFkFqXTadYdqQi",
  "key25": "2nLj6niHgjfH3Z6vEL2PLeLEyJnQUyGSLuBFoXxxmwio9Q86fP3xZExw7Wb6A6ESdgedDzA2wNv1hTN7ynDsqJL5",
  "key26": "2tRTKg4szRZ7CmrBJ4fUWb9kzhy8VQzazv1AejBcF6eHfd9T8JEGMt1Db3nA6fWPjwhVMZVq25JN94kXcVDykeD2",
  "key27": "zFxA4mBFWCX2D8cbK8TcWeCn6kqXuCWzHgEsNbbbk3MyzBQw5G1FLLVDitqZ7umvZGWBGbgxw7MErmutxpWhGPv",
  "key28": "2ZoCbguwiY11sdCfboTz2mmHTunYt4DKKhViroyd5Fr3vFz9QXj5kLTY3YPjtK66aHbhZ1r5DSe3xGMsg9T4pQNY",
  "key29": "3DhB4hMuG5eZTGwNSSs7WENgQVNtKp3c7tgAxiq9Nbmj1DvdzshbQpBN7fuNkd5XFoKthbuPDRVy8gpesSZEtbeX",
  "key30": "AjUWeH7jPTi48dae9m5GVvGrdYVNrjNA1myMsj7f3hxMMfLj9ZPqxL7vzMsXmf42o462JaqBw7Y6PuWyMoe4VAB",
  "key31": "Uq7WNoGSVS5LnzmBiJTbHK3GJr2Le1pHjVynqhKk8eoAJ5QeVMrhs6QRLUoE4Qsyf4rjpuFiyHE2kcmuqfsqF48",
  "key32": "4Ujz3StFqjkppaWVkT24jVwSZPFqKVhBRbLmw7rgV2ZsoA7u3edLRix3suydnrWgUJ9iKHxW2ZNg2ZTGBURy4FZG",
  "key33": "3Cjh9oiukHoY4iB6t83UkTfEHpU3NSA3GdGhXdQ81Uszsy9JG1F517HjQJJAKHV8H9w9QF5aQhMbndjoDoCR4eWe",
  "key34": "37HQktazGohF2AJPFjYUniHmCtAWyLiQUtDRHnetHNvimNp9WGQMPAEWCCa1o56RRXyHbSmW7gdJRmzw9PM4aVf2",
  "key35": "2vd12qbkjrhBoVyrfpenuZRhNZHkDAqZBEmUTC1Db12jJd3MZ2mnwCoZLdRKTxQmiwiudEppHU9W3gr2YAUUYBVk",
  "key36": "3U4gEHwc7EHFJ9w8jgcPhjUL2dMrT3gZU6sXnajEMNAoiMRLAHeiXudyDqodmmsQR9AdHLwboNXhT3QsVpS4PQAU",
  "key37": "2Fce9snDVPjdvFS2tff7dgHuvzequHoP8nvCNsLSJg7XkAw1iKvmroKmvNiWPzcic791JNuqXMimbMh1X1kjjFKv",
  "key38": "2k1SSDrQEqdHeC53TGv1TFzJxyabrhsouvgG91xR2t83mvy8mKbS2zFaZU6ociRmT7pASBtXcqwogcdM2n9iy1mx",
  "key39": "4n4qa2TJzk9kTTrR21dFWauSUtEb1HXC2e8mss6MKxDivVS9UzHH5au9cr6L4S18xL1x5x6244RR7Qh5x3X6AwYX",
  "key40": "5QKo7JLuMkB7b66zibt1f5cCZtZJ69yRdZPuGef2k9Y9HEbwjTzn6Ewez2MPNMXxRRHLR9zr1AVc8Q1SLFPmJ4GE",
  "key41": "32i121Eh8ZyNs8JxEWN6tnmRWaP9akroNXSSPqp9LoRJgusxMvrwnNUENih3cgXBqrNQm855tC15LS8vb81DiCaM",
  "key42": "5BBwGzHYx9WDe73bCu7CC5jXiRsgi4K1moYYt2k1HeniLD9wmbVRGKcU83XF31Fr89avdH9CVkwYt9kAskDa6VqG",
  "key43": "4xbbzp2ru6dBR1ZvPpSyZD7v4Wzz5CALFFiZfiA1pv5mKYbyLwZdaSYNpbte4SMrmvGmscEJ6uHVyToSdDwikfS2",
  "key44": "5BecyGo2unMREtKLr2qeg343ivWDBSj6kYx1YGurumUwq5oGENbLM1iyWw3KLq82G27tUUPboKZNpreCrKtmX1tA"
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
