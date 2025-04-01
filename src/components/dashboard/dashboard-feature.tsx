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
    "2AcYa2v6bBVCGLnkEA8MPUARe7SSZV5znfYVRbzGuJBmwW21fkKyq9wtvfLbMDtgCA4UpLrm3mQXk2G8NoQHuH4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jASJPfS1ADggE5hUKTCfxTdcrHuQTXSUbmsGzKY3iM8gkbrJmzD4BgcQLYiToJLZsturJQmZ6t8VzvyNTD1AqHR",
  "key1": "4yx9HWJ7TGPaJ24YBUwqSWr4F444jNe9jpifbx4iLSU7QnJBARUReT5nZKSHTScfwjXxWHU1F5d6zyAdKG2FRZw2",
  "key2": "5oTEKL4ETVhR85JJUAjTFYwyju5f3BAS7gup8a2fh1VGFDvKZePMznKEae65AQMBx8t7Rf2tdsXWU4qHbkFok6ez",
  "key3": "2kGD8DCeEeZG8WQiGNkCrZbeniR5CARPf2xmmZFU8JcMwenLEcDHqMKqVomhPALYr6G4aYE2hPYk2qjGRay5NBvG",
  "key4": "2xcJam5WPYn6Hq5wwaVxWM6kehQK3X9pyT2BWJBG1ACdwpustJ1ZhJKoJkg3NsJFGBBNuqkHW7yp59a3MBz5ggES",
  "key5": "3ADriLVUuLHVtj2bf39kMszA5DqraTwYNXcHf2ow7959s284N5W1U8Z17stKEiHztxTV6W1XhvAK7PAX6buKZECa",
  "key6": "4hL95ft216pxhTaitHUwWZCeBmZKqtx3NVJd5Skmj7zDvYetspTSDovoJyZTjn9n1ADaFbnV77JNzZ3oD7t9irME",
  "key7": "5uWAV2z8mQgZepX6aAxsPznmpVk5jCquSLgo3brZW8Yhj9pnDwA9rsJNStLkfsTtceBDeodEmSaTEB6kyGjVe4t3",
  "key8": "2tLybHENso1cY6RZbPTH8S1w2MvwwKTvFizt8TLndspJcDKmVtFyeabdQSmYzMLx8bPbxxywZZbVcZHwjjs59LFc",
  "key9": "6U871dS3AXNTFSurmKM34dkYBYDSAnBQvZBziSk6NLxUcCyWQmQgRJ5fu9xZxMYuDFdVdRj9XApYqDjejiEsdDc",
  "key10": "2ddRTX5wKdGK4Suyj8KqQWe94nkiCVmx9d4xvuond1RPaGar2YqnurVZXxPEw9v2vGSvdD3ZT7crUmiusKmjL2rp",
  "key11": "3cgTkF4UVLg11bNVgtXG4DgHbiDZnaRnxUXuEdAo4q4PQt6XnTVqjkQmTVSHrpdbCGx1dm6iZgPG6Y6BoLj8XR9W",
  "key12": "3AAFc6s7GB8epKd4SHyPtcjSP4rjjThH99YPesgQ7BgYGkegupDhWfFjyBi1tG4RmgCdxGgFNQu8D4jfz3wT172T",
  "key13": "2zC5AsgnSZLTtYkNLEXmGCTXqY3ppcq6Px7fYWJikLHXHKypSvo5Q1E1zYMdB5AgK7JH4jPoS8cShBuEDWpsDh5e",
  "key14": "3K8zocnFhuSWW6dE64Y7cyaqG4ktVf5HKSGXUGZy4EKbQ5BuwLgMZH9Q1j3N9kFvKJQLnkn3ApJbNhrS4g9Knnjh",
  "key15": "4EBPys7FVk9E29DxU4DUNeK8rrsoXH2HydtwEstwM4347UJMbrwYTXQgZn3KxSHVH1nevFa4qaoUUXP8qSUZ73sd",
  "key16": "u8fB1u59P2p5QLMetE8KzBDUqmGAXbfV6C5XLL6ADmZr9VDbjcwM6FSDZvMk8Est2rmA6x8NKvo2CFs5XQqpCid",
  "key17": "5mB6c6WnAxC3FAAwG7t3cZ9trvKbAP9zBmy1aBW7UZ36AyY2pVXki6HynSgmZorj7FqqLCkoFTUYA5Et7ByWTVVo",
  "key18": "52wg6UqQPHvGCZpvNHiMQZi2iMMRNNbzpx6H4xK4Q17v39pCjfF8B257Ez4QiVYnFLuHLaLrbsRVLtTDsp6uSMA1",
  "key19": "4KNttQjPUQNM7XxyG6eguzYkMgQVXo2CMvDWvaUr6DyKPcyXDf5PezkBBW1xH4eBrHCW9XFDQUMV8dVNQ1H3pzEQ",
  "key20": "4tQ1KZzETwpEfUFLh7hgMhrNGWFX5iujqZHzBPYdJ6F7YVo6L4y1zW7ChxRxKZ187qYP4wnfbpXmTyrmcKJoXY1R",
  "key21": "255MuHachDtqqU2qVHEC32QEQfWUQZaF1mLAHieatar564WYh88wQhCZGLh4pAEfeLdH7nBrWsTiST6DF5SDbr9s",
  "key22": "2aDYzgRMXGrMrd3nPegiataXzFf8fbzFkuVgUmtnoP3xB3yhzzLC9oJSVccHm653AaH76SWxRV78bh4HKwMnQY3U",
  "key23": "2U4pJTX5s1bzcFbfTzTpjncvfvPVZPH1NTxQZrHgZtUxBWQDgWKd8AW7wUb9pZB1MYZqEMeVYyNGYh2n5xSxcXg3",
  "key24": "4YNPe19jy4LQuBGDhA7VV6NKzoMtjoFsYG81gjifyBLSLnnnQnyneoPmAQHGeEZbkNAghPEiSXHABbGBpv9XbJSb",
  "key25": "23pyBdJLYyLo4YGWc7qirb9cZJaXu7NvE5XhMTPKL8uHNAWBS8vdJkoTL6m1mXkYJWcEBkdQoEJvsMCHsSvLJHBk",
  "key26": "hGC4VLpzhQWkuZF5552HVhQhDv9fb6uGU68WKEAXxNhY6RNG84N64cEa9SXsnyA8sWRzRHJGv3DrUkfpjUt5QQC",
  "key27": "3uLaZGdnoasjiypzAzxCPVwxXyUcQSJn1BVE1YScy6hpNfCuzoizJV9DHEjqEYgEs7oTTwatWhnV3GxPrF6RrC1r",
  "key28": "5PDoq58RdiDkqwupgW2yCv9fTeZWz1Q1VuMnqotcogAwdahcqCrnggedR6LmjzqKqtqeuiprFjEViBeG9mZzVVSD",
  "key29": "rm213eaUXt2EErc9RM3kWHHJufuCuL1jTE9rpD3w5nD4iNAAUarKZQdTGn4oCxw1x9rsUAn3mb3ucEWyqBk4Lfd",
  "key30": "3BEQh5Y8yMzbkMR81FzQHf7Fh4sAda2SRCD6pWt1P52oH6WCanMx5Hz7Y5bBkzyuKCgGqmBs9C7AZqPTRy29v6g7",
  "key31": "2BFGb34qpXSERmDWiLKePLM5AyUA36TNUeqdxGrZWuTPyVCc5ALwAQb6873uWW7AKCRKUWixw3oF2Em7KqW4eihT",
  "key32": "TzPPfQ8Myc9Y94vPJa4P6ZucL9QyuDkswy9Q95Y8i4VU9LVwhiuM2z18N88dyUFsmb65tT2314Y7wdACNzYtdQh",
  "key33": "5pBufbApcFkqgc715YZazUMoTSJBqMr1ofHc9BB3QArDeKA5KWTVogv8FrrNfk7WKbNiJcs5LRKGDH4qM5mZ3gcJ",
  "key34": "5Ns1FZf1YHesZYG1i5cWDvUMx2LhTVFxLKpSU3xjidZfisGD5j6JHWJ7Jks8S7DFq6e6PAY1pMtPYLHt4B5czAE9",
  "key35": "4D7qS9aKyonY4XNEZTcMdiLyGbkoDkFBfEimbU1Jx8yybxgKDr5cVwqG3X9E9gWMPEFMnGJtaTThD4KYY5KrDVFt",
  "key36": "4URWwJ9dCKFdFjinuBgkxiY4Eer8qAQZin5MYViPLct24sXpjWySmpNxKBzuLm6h7JsSPiCbtgbFMaZcvPzfe3vg",
  "key37": "5oo2TvkSrcr4RCuYY4fC2Nirge1i9qF6zhPnoyaxquHSEfxSSnX3BrFa2Jme8ZBVKBmraDdWmM5mu5tfKGysK2QJ",
  "key38": "3FsoqZXwmUmPB4dhTTR5nD6z1788EaTWh3KLN7haYyyQWBvBjSDMJPT8keHULxAzKxzEGredhFxbS9RNbaiv8gev",
  "key39": "4Sd4Aac7Qft5fjqekXZVocrqfb6p9cV81RWYZhVMvd1npB74z99YVPQf77c4FwrjuBULtbMbUQo6Nwf3Rv1eyee8"
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
