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
    "4fa2K4p1TPDjLzG1Gbx2oXNjA9kA1PXVCqiEage5VmeNruBvTvUzUKSJ9iTdjP8SnLzWwaJ71w1MzcW88jesLH6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wJ8bFHyqUTspeSAaxyH372tTqNQZJwM4dt7U3Cj9KkQQAoGzwcpuo5JUBMdgeoMbmdpPKwyrcqc5xWB6jzG9uHd",
  "key1": "4fkuB7J6d5qgcD5s21Yj9qwEhsF4tKzxF2pCkbaRGR5RH64yAHjS5zZPBGTTWVYpK847ATT9QnEHc7GdmN7v1PqE",
  "key2": "4mY5nZEP8G4iDKegscRQQqeqSyo4nBK8peBMk2NXSpF1reY7dVxXGi2URih8d5mu5PJrXdaRrXy5YkefXbcUAyuJ",
  "key3": "5JYtpSHukakfzWnXK3HW5RGDeiNTxMBHM4yPfo8nw6ArNvCjFKGeY3kS5izjXUAG1NG3XnTiHcwHK2nNx4SrW8Zv",
  "key4": "3NEJsmxpMV6myH5pneEXZ9E7u3NPeziUhPmgDnANhQeFR9GiD3TpU4hwwAmeKKr8vGuTYyYwHg8yxEHV2Z45Nter",
  "key5": "5Rsw2W5NU8LvT8gEVJMMje5UPqocGuTLtUu5i73cyqb1nCPQTsqgDWdcj48Nqtt4HD5mKMrmUriiJsSCjKb5Dsng",
  "key6": "2LZXSLX4tV6jFKhMwkorJm2w8UgW9haG2frzUMWgD2yYPriw8ChfQ1KmkwHmR3zAsJiQ2w6VfrNmwJNp1v9NDqUc",
  "key7": "3QN1eJSXuE3HaxDVVNqo7XaXpr8DaWekvyNoKvKTAYcEDCmocEZq4U43MGMVVoWnGSga1VT7qrgaNCTamc5XQRdw",
  "key8": "3jgJJ899E5ixJhLqbK8dNWLC8xF8i5zc2m1f9tNUvYSy1VDaGGLsqLRCFwQS4s3PJn9fuLg1nMcEpFwLJwjxpMjK",
  "key9": "9YXsxYMD9XEcYbduY8ctTqNL6VvdLzss9VmK3UEGfVoczt7WCi9KF7LcJTZ36w5a2gh6Ts8qyQLrNhUSHm366Eo",
  "key10": "3adhd93Uwxicfqdp4eeuEEdxwSSa3NoNx6t4seaViMq3DzxVTjpMxDXYmyhQHPTnsZ69k6VuskfxqhWoDxp9PEGb",
  "key11": "2jMJskJAxawoie7dGmENFr9aR3t3PBfkH6nhP6QHNgrjZMg7fjH2PTbTygSKKjwHVYroe9LZT7gDqwUVcMpaoBSh",
  "key12": "3Lff1fs41df9S4nWYnr4kPxo2tiPeumwcSd8z1kF7PJA3M6wREU1v1hcgMLTTJewAmMy2oXtJtMG3YN9AmVQByDR",
  "key13": "2ZaLntUd7SfirF3jvCcTsASGW8fTty3FwkiLRTWVSc3nnF7CouSdUUQAou8wMUMs6j81PYogNc8einZ5zyRcC4hi",
  "key14": "4KtdJE35iFyXACTCoE6ZvyDqTnqP2S64xRtgYRWEreS1Md4xdfbZZbDsocs2zTvs77g22DLAMntXsv8rHJTAJxvB",
  "key15": "YFHSX9x5rJADfVpBQqHsueT8gxLMDAy7knPWoziQaop6xHMXgYGdLcxjhN1Qt8sUoggzYhF3WsUBUvCes8JgDX1",
  "key16": "5WHVAkgN676gpBn3tMX465j56cN6Nk8vfYEHEgfSQDojpU4GztFv9vQpDyaRJ9jLXTm2Z53J4FZMhWFG7rusouND",
  "key17": "4AHSa81Z1fBKNrABoX17tZKQdQ4jWwpnxDAuEdEEf8oAokYo5hvqfAbtGyWm4nobVZkd9EJGP65kjD2U1orTt29q",
  "key18": "2tLH8sS2WBhqTXWC31C8ZCzAEVQrbaa8SZWWh5ov6imGuZJph1VhEtzDceDpdbNuuGU6ZsnYtGP1U6zpiD4us4mS",
  "key19": "j34Y5SdNrX9f64FYWmTUQC51wMropuKnu8Enue8VZRTgYz1Hn37G2snGmh9vYEb2iTUd6nWkuisNXphAg9mvmnW",
  "key20": "pZQor1zdSNLAJmhzqzQdDG34oAGh6J7qW7yuWVqSuuGCvqNbo3F36CyRCrWVjyKBexp3VS8AP7rnUequyyACGb3",
  "key21": "oJ9oSTnUe1tdqcoC42279gykZDYgDBVv5CWnpwy3KJdPXQjtDNjgj7yHXr6Zj1UB9VpxgAZi2jx4dEJ3xZyW3XV",
  "key22": "5x2ccD7rGcmSAwMB68RmPTvraYDmAb5aZjcaeXt3DyEtG3UHquRYQ2jtXs4Gv2NNJeLmo3akdJMUcsPP1FDL9uGW",
  "key23": "3RFkbfHACpS21BSRgCsyCxYHwQWbgWfATGFtv9MjG3MSQHw8foQYJnvdry3iBTxjK9CXXaHkds2pGGNHQ1L6JUqi",
  "key24": "3F5PqW6b8EqJ5t4uwbY11tSB52cqz5xwHzKAQmPwXqKdcAuyCe3DkXMRGiCiKKxfrFkHDE36kh3XNTva7VrJaCkT",
  "key25": "xpQAFqyzwkG6fw2WDWZLfjzDXEWTYpCNUWB62AyocYb45Jxe8JdHGZaZmeTmdfJMwjr2A4jRRNzppmhQH5NCBKN",
  "key26": "3kbjQyMihivwXLayfmohyac4UHQKN4qBcvqQirA2YH2dsVEmwYjtgcBKcGBfuPpHPeHA4cRUimjnH6QqwWL6v4J6",
  "key27": "2y7KNj4DMqBxLiLb9zrbe5v2dsQX5H1a9U4nFw17WB4NC8QSMSRfGMcxrtrDKLRZQEzqYTZhx15KFrQa5XUC1JJu",
  "key28": "2XYNxmMYj7PzvcccXECnVLPEgjWWQgguAaXu4i8T4oVzsXcMA49ZexL6n7cAD4jGwyEQTowDhuesrtfgYGuMgdsp",
  "key29": "2jTFD2EpXhaqegcHJFs7enGW5wDMV731fMpSPaGEJ66DX46UyEdRmX8oCkpvTMAzmuf7PNn34f8whUAQH1u1pMUL",
  "key30": "5as2wMzmbtgmdohmhMho1X3PfpuDyuLm9U5oHgM4YFGwk5a6mgQzVRQuZuLfGPEoJy2oQnF8C3MnmoNQ64KWeMT5",
  "key31": "2f6pC8qNJe8FJfXBHxYjGJVPfWZp8DZYujjeNnqCi5PSPwj2dEZ4XZqxRae2hvAdw88teNV1AjTuGEXaVYGz6GUV",
  "key32": "3aGeYzhn2zQvMvrMwyxUjH2dQWy843Emh3EXPMQBDH77xpJYsfBaotE9vJcgoeiTvr5pmjWtg9MLEGoXxvLnGLPL",
  "key33": "22hyBLZDof4bdosnR9qiwKJR3iY4wkLZHkjYBoTojHR9AwEuc2AKBCzEcdB82fEKMBxTtDrbCd6BXvxWGW9SBPxw",
  "key34": "g7CjmceaBw4dECSxDwBYcERNgwLgfLXEbsejp7o76cf9c7ewgjGGGeiMZo2hWFS16zcvbZsHQ9rccbkY7xutUgG",
  "key35": "6jAaf7LZW1v3VdyUoAe6uVrHHnFoBSzUgw7MmPuuxVhcdGx5s7cWiaEKDxq8jD7zK6auPQkbugesAaofYpBMuW4",
  "key36": "3yM78CV8dDrSMmAsWyaJrKiH61qmPXQ7VjnhE494ZVfRcDTyq52kXnYBWKSkBDLURbJPme7LrdFAB6svvaenk9pH",
  "key37": "3YMrEFXmoKCUZo9eL2px4C6CTdqtcC7x6EGxGR1TrZJ5Pqw3bYjaLts8xBd8n57iQYaVrx5Bth3qZFoPViU5NbXq"
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
