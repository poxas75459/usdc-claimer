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
    "3L3RgdDW9eK7pDNgY1k4rRDZYDZ6HFj86EUjhBB2yz7kfbhcnX1fsk1CfRGtrt1UiBwTNabiG99fdSq1Qei75vig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LBag5g2DNKv4jDkaK32X3jxEmZkX9x6brGgLFPivPVyDzu7gWCYhdJoxzTxbGqzsXjgCDREPsT9GF4oYpzUoqpp",
  "key1": "2LTtGyVAHXYqyCr34E7knm7wAsQZYtxiEXHnSD6LXP7MyacQbWrbXiYqhvtAQtmdhHDPLJxRKNTbhsqAwvRhY6hP",
  "key2": "52PBbsNCUVnBG9RkhkAFSHgM6RpxToYjGym4FbrY7o6pwxg6uFviC9HxUGgkiKiG87BeARmb7yhR8Hq2juohSK8r",
  "key3": "4uxvMLzK9YkX2vGGJj7uzoYpLF2QbT3egWxQfFFsHwJaWzc88kq81tcqyACVvBeaQj1u22FDHqPRXd5C1jnD4kP5",
  "key4": "Vb73U1Fbz5twU3BJbspLVkx5tUivreJYkVFbGCSY37CYthAHstfA9Wd2DbQgAzQTufgBJYbdX1AYFjkg2z8bJzi",
  "key5": "Le6fmoNEKthyAz3q7oyrteVxRFLPS8UDGPmZYT976TX4GH5VcB9uQRygE5GdztPbGY56rBrJzUNrgkK8fqcadrT",
  "key6": "2heY3PyqN4ne1EbWestRrBoLJXYPiQav988UmSHmR7Xi2e8yzacF6AeghydkpS82rRg4QpjQSiKexFyN53aH4QN4",
  "key7": "22SLBt5kx3uTyCoCK1uDxZEFk99qzn4xnjH83T2kCqHo2MeS8uLgsrXFtRy29dgMPKSTx9KafPSQStFsBaMr3FyN",
  "key8": "CGWePkcjpbtNYBmWfhpEQNSesE6uewRNQbcxejTemdhJ5fU9VkZoZqw3kRS1qFyFGAW6FZ8f5CLVpZwZCk3kRpJ",
  "key9": "3zf22EYinQkG7iswkSLHHBxeFkxMQkgHUxQRBA3oSsY4CZfxw8CqPDaaYCaRXjbrRftGpipUkqHacCxavwzdHsgy",
  "key10": "4wnPUCvieW5UGdi3xva9AXXr56ei7NdXkd23Hwo5rUwY92g7T2kYU7rR5JrBQc8rispvpSv8wTnvR1T6sxugZ4Q1",
  "key11": "PSCGKNZcNQcRHmRyWrZVCpWQMeroV3gjgx2jMPHoR7qfZgQN6CqzvXyoPeqVeZBDwfYk64ZAnq6Ymk8a3zrunt3",
  "key12": "4avB7pmozin6exjJc1kSsUWpyryer84rBwvbK3C4KanG2huxrt8t5KHaNDa2L3hWdjMfTCcEVggNRYZgdDWkG2i5",
  "key13": "3eYGRLsGmH9a1GRodxedSPcQMyaP5URwYKgF72CVxpVBTFGE43XYeznRM2FRHRpc68pE6GVrXUiK8JsbTAcao8oj",
  "key14": "2b31bmhpXwi2PTqLmWCA4jNPUdVUncbtSZ4MsGLPmoLGeCq1fmK7NXsraBi6TwkXYnyT5uTxK6LSLjDaeMWV3Jf6",
  "key15": "4zcMALg7nPKPB1oGqrD8CUBZiFcbkZAPuV38NcrzfMVgn1K8V5kWCLVagurYBev2QuSFyeqYhNfeqQ76qrNJJWMK",
  "key16": "5LE7kk5H2pQcu7ApHg4L6N8KyhkznQuSpBjTNAiuDavVGqhjFn8kXtKg473Q7M8cmNZ3JtLiASv8N3UiYtw85BAV",
  "key17": "3dGm5vmYYHaCHYKFxs98pzaT71EhAETVhWiywebTKWGUcFVmfzEEtpYWYkk1CewggK4UUyar1wVqGBscATwY3p9S",
  "key18": "2AZ4WfGsBJEm2XRy5jwpsf8L5DAuYRuJMTsikurVLMeGLL4hps7qBj1T6giYcG3yxyuV7nwrHUocmJjzjJHrCunH",
  "key19": "4CP8DVEx6oSqiD13Ahx9awYKL3VXY3xyPvjgu1YM7img42JMcuML86yBpkjZG3iQ3G3FWrJ6BByLBCkywfiKiJru",
  "key20": "3GnFCuXBiGGzwamqSNo84CKKKwkbaMrui3DwC82fKQvcreR4jukSV6nyGHnr5YujmeCdvB6cNwRKFD52ar9i4GQD",
  "key21": "28WRPWXHNrLcB3sSsz5U7EdG3xPPKPZcKnv8XqRiizGCitQSMpA7yP2mXffPEYjisRTEd5urauvGUrLCyUrjKYPk",
  "key22": "36uDcaHcRyEycCk6oTXc5LG3bu4eSoTj2upn4YnkJiLqFCiAfLn5RbRNuipKwvZTvWRTAj85FJ7JyK7UKHT57BiA",
  "key23": "4DSMuKg4cj3wrSbnXtFkDdE9VDXcVjrGEE8zxDWEcYm7tqcswxKVujVuhq3k5QFaoN2qn6sC9wWEsYfq7AxPaGb7",
  "key24": "3RWEzRyAiqi7qLBrJfYVoK2krt7zjrFRM7GHTKAC8F766NUvXjHShpMTJa6LyGLTNDknVSWVM52FzdRMAcxYx2ja",
  "key25": "5RMtpv91PeMWa3TPKv1SsUbCLCYwd5wdyxJBZ6mwASb2Dxsf5jfJntqL3ZrsDHV8mRuSa73jiCFi1DkWjzNpA1w4",
  "key26": "5bEZbLi6dqUUvveN18Sk8u7mueh2YiJCFy8Cphrn7smvEoJexE7e6NZcbp2Jx6PFxjpXYdCJT6faKM5Df5FiTmKv",
  "key27": "4RoUh5VYSNP3U1Bypo9DVpWzVQ5Soytn42yJZ2XCGnbYf6SAodadDjVFob7urAngzYgd3uKkQb1apMKK7unQ8cEq",
  "key28": "AuYV4GZjfjRBrSaYmgqELegMdf52aUBpJmj4ACy3EmvB18WBsYCyV1uBF6dyHRLH2Ctx4acF8JFNKjVBr7Q8fae",
  "key29": "5KdvV6vdF52gBgWFdDT8NU15pGtu4xWMLpqV3BdX4NbPEWhbuVj3EV9pcKSoajLKTvFyTKpRcxfxcnvyF3YiyLkX",
  "key30": "3CUt57kFPGQyh7Yu6cwR52L5fkeyGXhJSrgFHnnsautnCwsu2qYU4rTHFoo6p4DoQkuZbnCjPuhoc3GUWEGjJG8Q",
  "key31": "1sjYaKm7o9YvZML8Xr6dnPZo7s9HPXzcqELVyEKKPtzRt8YnbLaBrVCAgujzJfmSUHUXGktVj3vvwZcrX9UYJRC",
  "key32": "3pgGDdHHmW9Bh2ZgGneyfKhsAYto6kPAcQHEUKN95PTpmKvJyHBRzytD7wpKFbbaeK7xjeqvqLRXtagpwg2hrk3A",
  "key33": "4JvNXQwJFAQDvzgUAQGjrVPXp3vs9o68kQxotv3weZrhn4LLNT49mScR7BP2aGrPH1GSgDG1qzXjuDdYQaj1uJHb",
  "key34": "w9V3cHucg4SMdQWH4msFTRU3UM1ECm1hjFxVF8WKU5mmHYHY97Ut9H7QTMTyus536LtV6ywioECyHe9jTSX48cX",
  "key35": "2PW41tgoPYXePuCWZUmhoWefsGQ3uAoa4FETkj1wHFnDV7g9aQeZSemfMoNPgyrLAEbPiYcjip8W5Zjc66q1GPb8",
  "key36": "4HQYe4ucP1CKRerG8KRC5u2c5id897GjoBHJnRfjvgQ7NBfj2tAKpF7N7jg3EizTB5ZNeiK94VAcmivJZrH8UxXs",
  "key37": "5PF93t4nd2yNLAGDg6FE6AuiFdD6GGQfYMKSTA4uxcMvE68vkTZdPaxGrijH3aacoHURBDuT7J3AT1UCy7rQ4g2s",
  "key38": "67J2g2hwdAbn2M4sjRijNndMnukPrgWHT2rgMasaNhukzzfMgVYKPE7DV3YRy6L3rs8BgE3jTBmyqJ1QQRXzaCyz",
  "key39": "5EDTRhLpbErggNKa7ZVafFXfoKnm7SrZzMKd3gzB1wrsPUsrWPUrPJicP7Etih81v2kfcrmweCGGnMiahi6G2zw2",
  "key40": "msNv2yPM6aDQ4HcLAhhxRNphDU8SQmGEmbosgkJkeKi6MuWQfoBC8KmBELWNnnAMHyF1i4DWJKKRNZqYzkimf3z",
  "key41": "2Da28QvwFVnWuG3UsLwBn9r4ZsdgZXYMqQiNWMRt6z4mHyaXPQHaZUbEzKCMm2SvmkFqvFirzZAHngQoYQepXWZX",
  "key42": "YVuqxHTqJehhLMkXY1TuH2LxanjHxPbofZBmDKfHAxmQ4gQf7gko47iQUiFavvGeKDq9ti7LtCcc3YhZQ8ypwZi",
  "key43": "22VuYjiPjGoMRaZu4vrnLxFK1CJSRwGH2sbb8fv1GiDRhic6J2YsVuRRfUwLoJppzQsyC9zJBDie3j7nJQw1Xmpp",
  "key44": "5Ue1HvbBjZX6syZdaeFmPSTy5WEEKomPingdZbjzrR4T1q49228ztDK55yELg8jFk3Wr1Gf45nfMZhnQvis5At8a",
  "key45": "5YzrvShQF4XVj6KsWUUAXqSTEUE27Q6FsL8mF4ixmhx6dpePzLMsV9Nt6EobAHx75TYTCJjddPFJJc9rWm8TYnjS",
  "key46": "4k1sV2RWmz37ySeYfomc4FRqNXefTUWj5ewT3bMc7qbhVLvCoGo4zyRBEkW3fmLtWDbvFVQBqVKCSwgx4oM76Dfq",
  "key47": "2ycsFUs9xkeRX1X9hmVTh1vY2LCDYiNaybCFq2uQzqiAg5ywoPfwDYVhhfPUDefWo7CWvMSyNRC7NaNBPgzdDrbQ",
  "key48": "Qkw7Vnv2HpVsKjcxyqzwNCvGkLtNmVFUaGYbRFVmsUciDwomK6khUzgwF87myoKnVAAZarZNqSukp4AYLnrvxmz",
  "key49": "3mcUhfwFjph2VamPLh7Bp97ADLbYvApc4xsb8KqMzvAzJPnc93UjS3k9J6jipUSnJxtRQ77VfQweiRL3J6Yt527p"
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
