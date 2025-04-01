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
    "5C98r7Bq6JarGfjYNAegVGreATZjoqLGaAsPsDgsq4QDpgRmgjBtiYRfSkDvCDq5xBPQggKGsWDohDgBXcriKtb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W2YjhaPrQzU9ye2Qc1WRamUyNviwZGG4TqbhWawWGFEejgwLQiczg26qfYaoTRZQ4wpDKoRpdJr7KKVMpvuvNDL",
  "key1": "5RJdiZXQmqETRCZhtZtW7o5jrU2cm38DvFufpCpHUDppWhKfCHZbSZ4BQtayPZndBPsjZaf6BbSkiTWTRJVvGN4",
  "key2": "4rp6EyR6DVM49vQNPzJhCxpsHSqkjgHXCzXvd5oo6K5UM3AMPrb8Ns5738tZPN1NqQn6wgWZJRf8PB5yQhojtYFq",
  "key3": "3d153doBvbyRKLtNpuYvtreSfDtLvnTRugs5k8YBwxjE4tjkaqqZaa4dAJYuVrfFxrL1Uiv9DpMvg8Arb5DKqu5Q",
  "key4": "a3frjewC5eCBszxg7bFRyktWeTLpthwT5HbhLRPVabgiYbTkay63HAprA9MabXvUKC3tKpkkALLHmArZjcnpZun",
  "key5": "48qRuzmMM57oXaegY7wWyFjNCR96asGS9Dysd1kmM8UzpWECVKjrJEzGw7ABbj9cfT3N5FTasm5vLdmfhi8CVBsB",
  "key6": "3zxEkQDUHNZj3yduKsmG93hChbHGD5xtKyFRSn2JtJB3YoQ5kqUqzHxJMuodoCg1jgEFPC5nTD2koMbcftJQKwkU",
  "key7": "3zzadLNsnBcmhDtZ5CDY3VCQFjw2s7MbKQiuZ8DbABN7nXTnMSM3gTt8vAniHHDM7T2c3F6KjvLcwDH8wxgMyWG6",
  "key8": "WeqbyPJkkM8EHkhNiw4CLPxavizu87LdwGGV3Uz8r5uCRf8z3UDq1vSqtThvb5HfWivfxdYeM1GJdqUvKWC3shc",
  "key9": "4HuSbaFXbQEKPWa5toGvE3puwCdaQkUrAzEwRkVBx9gh6o5DPKb4FtYXLUHwxpG3KMV8UVptBAmBPrL6K4nSkNAm",
  "key10": "2hoLu8o6Dn1X7MYU4Us82qcE1bUHugvfRGHLM94shPZXsVK4D2qcbG9aW516NccQYZogzknCo1CEhNY9WNuTZjzW",
  "key11": "3xyv4qRNbhuTn6V6VopVf6q31RTap9bAJHSYgeeGG6ncxQVbx649SfmKFUzpyia3Ya3U6d8GDyQEWT3jRxUqemoC",
  "key12": "2nKQmdQT2e3dipdVg4TmWdNP5ZwBMLYANDXX5oU3uijjAUTpbJi3s27GvRkBkzoTXvF5Pk8UkbG3UMF96bDMU9rm",
  "key13": "2Vt17ttcWHNA1U36cz4KxtHp9Mb2FL89tCoh6qs3FLvHsaA3WLTma1LdWjZFsnjporT7FA76anFbK27DzZpcXYK",
  "key14": "4xWFPCtEJJGhfLeqmjuW1K92JsCQQZcFdywkYnMzsbGoa6SRoh4Y5iQyfQh16hqCAX4WoejGnMK13G3NVzyBq4ga",
  "key15": "2Tu3KEwXEye49UB1NaoibzNmTqDZe98N8WrGMecshhkrVMMeUnfFyfWtPZj2guh78htLFZ3U2S1cjN4kXuSzmEoa",
  "key16": "4HyvWajTzegQDbPLooPwr2hoxSjnGcop6vrVYeoc3odmyno8FKCeYjaEE9P99r7uf4FjJzxHmMGjjqwBwP3gvDqe",
  "key17": "32bAR1g5jeonxYN5BwzqFuRrNEZBndNd7uH2Fs6GjphG9wEbTm9CMzPxBC8HSW2jierWuthzDrDm3t3nPdCpNZ4N",
  "key18": "5U7ziu8B6hittpDAvEaeVy3twqaF1JSx3AxmtfjPwqFRMbVakF2R9JABdVF5Y6Dh9hdynFbaMVNBCmGLMazXA6y9",
  "key19": "2LmpY1xsA1mwVEfUvRWygZWrBYjoix3LJqNGsUHkLVgBezjLQb9896m4eG3ePeh73EKJq8zbgWi3d7xZxJFcf2NP",
  "key20": "5wg4GeXSR8NVX697YURhkT32qbZrt1K6GvC9TGS77aY1s7otrcm4gmsNrP5LRKXGtBDXTBcNTRdTut3kN9hPgJP5",
  "key21": "3PxWXzA4byS1sXQmfQ4825vh4ksS3Z88my7dWgAAebaPMfYZyYVemLVHCdi9GHnjnYgZAfrF98wkA94JpkeaEt8B",
  "key22": "5Kq4TSycyfA22yd6oTA7K5fwpCwQqKZHo3M3vWYbEGPvQ3649J3XHpTjjQcYFpT6aW2rWB2jtAPUPGykTUzaQVFm",
  "key23": "3LMrXfUnetbtACS9gpsbFridmnkSQDztZwDdtcpZhwnCdjMghbMTh2JX8gU4m9GizxCE6LkMa7Y2TKgsi4prFiWn",
  "key24": "3HxmBPwsR4DYYu6cmtXBfiM17v7a3Lkwa7vatiHS4s8mCZs2iPgaKNGqTnPkaouviRsY3Ue8RdhGRNzaYB5J4CPL",
  "key25": "3NVXu1g7C2HF41WkiSPuxa4nLuYzHyZJkRf1aUNXycC2NYWmAQnM69dY1cXTuaHDTh9RLxReaBwyBgXpfp2srDeV",
  "key26": "51RNBKRttCsg9JjmC11RsrtbvgqrgRbbHtxsFbMrsgwes2KE6Le3kd9AtQjFQGwD1ezgoa9UVYRzbxuJKsoNnXWG",
  "key27": "3eSqhioC46NvngtisUBi6fwMc94bjZPnMBwT8zM8wvyuZ2LSNmdHdik8KtNb2K49NTUqQjyXLufSEKbTtpgoPyy3",
  "key28": "MybeXWC2dnSvqfCZrTn54GaQL8JpbYARbCCj3tGWo9N5HrW1xCrwv2tD8ouJJcrXGk9is9XAFxiQhCGVyetHxPW",
  "key29": "gt9FYp6bgVVSMKUMKqN8GUxy8Stvf58gpyQAaPQxBagPc9JZqsikvEGsHDdWi3Ck2646Rfa6Ata5g8RrYNuSY68",
  "key30": "3Z4VEJyrnhYyMr8Cv85xmm4jDkuobLherSPZrWTKzq1VqqXPhUzN6ykjf6QqMNehcdMCCfZzmb5Qw5foBrNo8aqZ",
  "key31": "4iEEVQG6XBHkQ4N2CLzbtrmxiHoSiJPDhNnA5jZ44cLuhDg2BVz3GDKVdhvui9NJLE6gc8bdF2Cw7nQBendXRqM",
  "key32": "3rRjhZDiVjxjcpjogoG3B6Ypf6W4r2BgniC5BrnW3FctSEbddWW31hDmUK9x5Dpg7J9zyWF8jj4fnfFCWouaFUDF",
  "key33": "DKcsNZcyJEj71vMtnEhgbJksdQTZJ4KPWSygAMFRaJBCprHCo6YdsN7FvEKL2w78VXcSoJn6KX6DPrt9aREjRva",
  "key34": "451dJz8jW4bMDSeiSjxLriRhfba3yNf7NbHYT7bisANhdGVhguCPYrigj1HaurjkCf6KM34pSzCt83X2XMRCRqYJ",
  "key35": "2tfsigrGhC9VRwdVTLwZzFngFaS7KGJ3uJpMVdjoAJcZ7RKwxzF6yKrbutxg6vutVHTfh9zuU8TSP9UEAXZ1MxJE",
  "key36": "5kkThoW9cjAkLdjV1vHzDdEzjTwwCi4qcGqeUosKG3kWWypEN3k4W7qBC8RZmvUVm3u9VR5qyHmZUqwzKzUszCcV",
  "key37": "XU9r3U3h3Pgt9njyzwQW6ye5XqTmGyzmwXj1SUiEBipqcjNZN922xThYNXmgT4qaW9NTyASDdUki4v5R692Uf3c",
  "key38": "4N3VwygWec7zf3sDUBgmmXNWm8HHcLQ5YabzQughFNu3JsBjU8qEEM1DybGHKZrXbat5KwLv8pwSSjcCkzjshH4X",
  "key39": "3ZZs4HFM6nqSyQpS68HVDufkN6LgBF8inRNSiLUkCpgJ4vFWcwWxhgzWGd4aYgcGPSWWbPXo6FGsFpSTSHRSm2cb",
  "key40": "2J4Gn6moAJ7CxCesp2Y3XcJiZXZQy2mCf7SogLciEiE4hSvSdxsu6BWeXchc9UVvoP4iS4NAWZ9DgcvVfHJNPLju",
  "key41": "5y1W8YZ84yR3SfDYTvnNvH71ffmcKh3zp27EznQJfni1ydZLMWjzivsg4WxxcijxLnFJQJPq7karhqZyz8x25xqS",
  "key42": "5eRQaNfCEwT5Asc9HCEFv8VHEhPR76xXESadAF1tBvqVYHNuWfkf29axD5EXdDeT5PMFsTec7JFPFMZTNxoy4QW5",
  "key43": "46g3iDkMpEjn9pKtRdT6u5QBx2HSux8NZw2aWpZ2LgJPdYmexetgBiRJAeHH15sXaFuUmnTr7WWWry44UX7ScM3e",
  "key44": "4StDGWsdz1Uux4wgvgEGg4qdXqsn33Yg2nH5raSGAATTGhfLT8bnTW2rcDmBFLJLPkzpu1XUuE2kJXVbKL4xVWxH",
  "key45": "4gJ3BUkrDEhm7EbnB9VqfFsJxnyuexjutXnuR53h1VkJwzVqA6PpJpDZMc4U6Y3F3hVWdE46FwhMjjEgBAUZhDtY",
  "key46": "3SEvzBS7bRFRKR2fHVEr11ZUxxdbwLzkuoLTLZ5gcjGj6vHLwWjRBgdmpn1p8ZDV4SBpwBjLzuzuJPTqZmoshUc5",
  "key47": "4oX1acj2oirDrn4szYmzLRPyA1FoB1j5aapYKfpZw8CXxFzSbp7Bn5EpCnDqfHZZ2iX9zmaaBCTdfVDNe1EogGhw"
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
