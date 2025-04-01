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
    "2gzy9cSgbTzioct8WtCNwhq8YRrLfWzDbtAeXuvR2wxxSXN8KTUeTyjQjCsEJXUHmUQ36pafWHroase6GLk4JspU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2khYSKW5JA4dktH3EaxBATv6b1t9kQExBbdBd2z8K4ETcttSZnrukxpthS3ZhcrsW17EnwNuF8Y8jaJqpDRurPht",
  "key1": "2zs4QBJjdjkAa6DH9sWkFzKq2FHNgfnekydnA9LvG6NQkQiZpHWoCnWvwEzrvZEGsKTA8Tb6PPjyQjrhEjBkTY8d",
  "key2": "4zbtVi83rJmuQsaVnYhayBZjnLASgR5ee9BGaRHdZjt2CLKcsZUsPt8WcRxeCfXRTVVTwUS48rnv9yYFgQ4vD8oy",
  "key3": "EvZpX3C8iopEeHXeJLFjFC3NyEeTWup8h7pXZxvqYq8jDMN32esbteKnfSRDoKz7ASVmTYY4zQKAySdU8kDuC1w",
  "key4": "3dk6hRgxbNKZ7H5b5KKBJdLHRpU6fi8rzxyLD9YGJoBwRNufZ37yRUJnyRdYFf2EtY1wQbJXNEJasowTEE4DeCpA",
  "key5": "4foUJuw9PbzkcsKEyde3GYMH2cQMbqeNuuuyigt9jAA4iJ9c4XTgG4dTS933g3ZFYv6UP7BCm7gjFdahsuRjhymc",
  "key6": "3tMBmVbcmPojvPJtSBbhkzwYLrMF6zCg3ohyRe84BLBCGuT6USMHHje3XPgeR7pzV77jgG6dVb5hsLZRFJ8yEDYW",
  "key7": "4M2bfHBSPijBbfFFTnCuM7U8pJhp6D6DBXeXqBLUUfaLuSyewCarQCzpVcbvRgM6aQJ6ZxSbenz2M8j8GCRqjzfN",
  "key8": "4WH6Lwn66YWGjz84zgYym2tFrxM15yXMoxUZg12LKYi44hzzWXE51CrzBP1kTDAE9EaF1Szudw3sPjMiHr19K9y7",
  "key9": "2EuGpLxGQQM2ehAhVw5LcpJkuxhcNFvQdCGw557VBvLEb3uNznh3K1a5pRDWsshXjuBk6bLEWRCvNqraysVY6Jxq",
  "key10": "3zgUUZfk39MP3n31bmR36dmdMCD5jcT6Am8g3KnvTHpaDQzV1wePNVRLoweSD3xrgNa8233Hc9didZDSsimBzW9H",
  "key11": "5T18Ep99BnQZCYCuLuKRzbLVsp9jDg6h3HLwoQi35bLR6ySkHksUQUipuQ5XTWkDCcTHc37ibmghHoE6J7xaKVwZ",
  "key12": "2PHDhvnDRkocMPiFb1Trk2FxPXhGqw7fPfNEkgYGxvDGTb9dGa8raH2EeprdWxRL7jNeKEJyVX3EQ6BiqJbGrhUf",
  "key13": "kHWqjiaHeGcaV8FFcA3byANkVNSh19gKM2ovWoctcMnG3D2qBWChPBXg6btFamazwGDRhXzJxUQzHkpEXYHUzU2",
  "key14": "4pRazreVrvtDm3eVwb78vvgLW5HC7Pahc6cWXJVfCj94m4SXNdYiLHMnTbq59JckWK4iywQDgSFYnkkXtimqxCdu",
  "key15": "3DAQXfe95Afrshd4odHSUsRLq6sCnuSuHBS2PwjANTW342A28mZnXjB3k2eg1WPGwNnnKJMTdb2xHmLUpYe9dDKS",
  "key16": "5vQVLnAyBiWZHk2m2PEGAzw1AGKQJ1WPBAJFrHRju24GpjgVZjCSg4fCqovksLEovTKLuZgmNX9BtDouNoa5pCA6",
  "key17": "aT1T8REb61BUSVQKALyixK37tyuye7fU9DAXKVdLzXyJAsQjZatPhQm2ZqM9iPWRU4pEATgHT5GTSzfThppK7kk",
  "key18": "4UNGeZ8nmuzEnF66JigX79eA6aUxuHUwXvmuBpaTYdrbfr37GjYivXJ5BRTaY5AcsCii74rYavziVfQp8oqLrisY",
  "key19": "51HkfAz5TtwWAKcYEtgCP4ATT2SrTQbh4rgNiBV7SX8XN13frwS29DZki1h4YHqNmnikUy2BHY7CuQa2hrsqPrHn",
  "key20": "45NdaUS6ehV6ej3zpYX6T6cvvybVTr44FeHFubmKzwqFNYKhXu9yuKVkkTFdjwXy4HBfck5iWtJQfmPpjsYiQE9d",
  "key21": "5tFPSbMzRfL8QFayckexjC5NpM5mJJTWLZSN8kWLy6pNKuF5wacwF7BrgYNVDWcF4i4KpKW1ibk5ns6DhnAzc9nw",
  "key22": "3Kx39SvmSvsDcMhqPZXHst6waxiPKg831xDoXYLZ3m8v8DQsSHx2CFhauyb2A2uJBC67VxsSkdcA5kjoRVCPiYhU",
  "key23": "7sioUwm61kM4JbX6TtiBGLVGKXZjAVKFfq5NwNZtvVZ8sM1Y3DSVWkxHheg3FRciTv9Tv2F5LgSh9DtzSNoNxzF",
  "key24": "3AVJkD6Y2MRG6terZR3hZjJuaUx93LDEbxQhkDNB6GFSr5rLDS4NX1SDExCGuDRytQoNVqdqZnPBXdBCTzSwP9MA",
  "key25": "gnCWopt6xMKNx3DQnbccv8i4P8h3idL71PxSQKoAXCATXb3oUarnLP9r2GoL62YofyCHkcmurek7znox6Ew7eEL",
  "key26": "2KMYtRaBu6NaHt1i249B5jwW6suEornMBiSs7uAutxEtN7eaJXYmhkhxJP3Fh5v7yWy8BEqtFgYFD66LxN9exsJR",
  "key27": "5sV3FSWaUYNG6m9298TW9Vig1NruCkjPYpnCG1UrdDCtYZxmMMszZVa5PgrkGJUAFY6Jn1RyjzN5EH2VP19qQduB",
  "key28": "qKecikNFkYDdN83csFNvfqSFaCSauJKpe5bA7c6sVK9HvojfYdFzyMYEVYUeJ7zGvVeff1fMKkKDHsRVMcDrUyj",
  "key29": "5BY6F7QjNABXfnyQfpN4fc1xWD8NP3ZQB6K8975G5iof8nDdiNuDqttKWWzbv8JHDUBF1hCuxPe2hET3Gx4K2szq",
  "key30": "62AZfL5fJwhSSifFDqMXJKcoEqR4DvzXcW5je5wq8wajE32y1oYWPJHbYiMptFTK5mX1ycHjmDJXTXh7kU5sjaa7",
  "key31": "coyorhECq7ZUu7nHxy1iagaWfQgUDECCkFT4EmxE1oD6sYPG37NdFfMDUyvYvLVKcFZ4dQFdeshH3q8scJ7dAjf",
  "key32": "57EJwv1nMNHCcTuPa9t8dj1463nDB2SLTJ6PNWuZkPA5yK5NaG7BL5K5bJ5H9cVNrkKHdcUkHSnRwwYwkCCrSgJG",
  "key33": "3tTznfb7Hq1Cv1naXnDM4CFHw14jiJYLvdWPhFb1p5KxQsv4oA96EaNBLqpDG7zJQqrBHK2aLCJaADHwVh66hedc",
  "key34": "3DdRWVaemAbKKxmWHNR89ZQdH3e9XHhmtsJdMnqYmHCKFdVDjiKGmkKhwBSXtFwBHbbzz21AVc7S6gJEGsxxoXTM",
  "key35": "EGZVViLSEj2sB7FqErECKesr9hggoztdhpAgAaGGMWgz2Q6cAXwqXsRMTzjKFk7gBHf6ouvQNs1sygXiuGZ1Vd2",
  "key36": "5NtJMuPREfxViPNbn5AwyMd8hD6uHdVsRATzn7jvfCU4gmP1L9te8PVYBebe6obrgZ7N6sB4hfhromZyGGvdMATw",
  "key37": "AoNWAR1TXmPDnbeVDh5E3GRRmz1hBdSz5mN9QHRerbjSMgMP1zXq6YJ4GbjDuXLeFos9MHeq3brwSWrEykTWEke",
  "key38": "8pfdKFdyApDvKjaepoebpvx97cutB8wqZRaMtiwoedcFw1JUJi3pXvrTQwE13or2sUapaSsBcw2VKm9B3Qhdqpe",
  "key39": "2A2TacN7QTQZfWNaV2Cw8ECdXDr4t4hLRAkRi2WbTTVHSeCy9g7qtyPXqCdGMgiz4SPQjhYReCUDQ6pc6JmAnQRi",
  "key40": "4VH2EW6CYQL1doeJor48WKHYZ1euBgFRstm7fZi7W3QUh7cuT89R6bkqtAfmzTCWNFZ6oRHNnrNzYRUwWkNHzKqG",
  "key41": "4MaJ125AkegSGfPWZuHSbxt7vDsxbJBbdkG88h8Pp1Sn2BqB4H4BJhv7m6utoEgA8vTarbsCW8T56HUisy9YUpGQ",
  "key42": "4qGhyZ2WU2XvuSREedzhyJf4y6MaKzwSv97ohb8AnjiZhU9cMrLbn1ogNN4M9netuq3SFKxpq8hvtmekZVRZWnVK",
  "key43": "2jboVqXGRDReYKzxCpyFE4eWVPixjCg5NqZHAtwWJcx74pzpAvrft2syJUvx4LUx4CZv5DrAYqSxvXF6QHjRNu4t",
  "key44": "4gy1smsedRpRThbMVza2pQyTqwv7TLncJyH3qsEG4aN1QXeNVg8Pa3SMsZUjTCqYyWeLnqV15NHGN5hKkhCouEs3",
  "key45": "37YwU6rMW6GiE5YpcSPm426SFHUX9fiRUSuRqaYN51nHHnVSUFDtY1BbBcqKBhRH7puGpgrxWMLQTKu8kDnzkRKK",
  "key46": "4y8Gt9FXtKVhqEsioui7E3yWku4S2Jf99T4ofCVGKDXKcw5uhTiK44VXkG6JCK1N19ZMHAcf5PmWmgrTjAgjjfwE",
  "key47": "4p4L3aK5qxpxe6c1CY8Fn81bdqVbH5wxn1bmubBjgoQYEZHJfXuhPBVQdbp5uzxS1mnvZDrGvb8Tv5rb2TmkMAfM",
  "key48": "4Ln5VxtZaCJJH6a6T5KTCucxpfWryEoCiSeakTe4jNvqV4m4Han8nsRSPsWpeVtKNpBH4zFE7Dm4oiPjGp2SefGD",
  "key49": "4b54vpX3LPetgKGqEsWwZ55hCzudQQp1PBAbbzU9Qt4Vf9utakYptHxsVpkYxvGajh46Yvv1e8CDoMdeZgaFAwDK"
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
