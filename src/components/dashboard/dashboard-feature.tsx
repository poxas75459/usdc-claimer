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
    "3LwT8hNcmULSaBi2PCbQ2YdWUeXVQu9HVFhKqw1K2XFtogLs6JzV191HB9ZJVkQCMSWqbvf65cq9xsT5CHHLjjuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PT66Hgeap22o8Cs8rEkUxJoDv1gi2WuvCVFw27jCRQvXRKGnxe3f9sGnRAqMkyWQ6gM2QLPfJCjA66cH5GmAF69",
  "key1": "3DeN22g6xLJd62C7DYn5AirSPR4tU94DzDB4bR1u5L3YTCmTkFvdqKbWnF3Jojn9n8YrLvDFeGZrhxQoSdPPcGzo",
  "key2": "9RTUnhNCvVoUyj57cXfqeoELrakoyEaSxnLT5FwmSzC7rh2ZbdhRvG6Q91FHcRQYBYNwVotjHecvyYApWpXBHFw",
  "key3": "2tPm2jzGqBmKwKP8X5Zh9M89qptmSXjYSuXtsQcdQmhGa7A3ZuNbV8EKguZXLszqNTLVawVHt9zyd2Zme7BXx2BQ",
  "key4": "56sRBP51YiPcqsKDHPbjn9psEoJhoeXVxk44P2SfjbDBj3c2n7HASbBFBDiD1mxzWDs5RLxvmKkCTtQg5XmUST7V",
  "key5": "3p66eKAdQqNRo2RKR6Hx8YR9DntjCAuDK1soU7qVN3chaLW8EpcWgR3t5yTDT2JWiEdtNPZRb8xRVBydnZMDXVXk",
  "key6": "35JU6dqJUnvhqNc284Hb5DU3YAEy5ReqL8VS7ic999VxyYjdg7Z9Gf5jLzbeBScRoPMxXQz2Htt9nTXezBU3Ajg4",
  "key7": "3US8f9nRa74a6dZPUJCZoPocG4bEcKsre52tv6KxppRcJytL98UiZKs5gotKoCPSTfbZJy537rGLBqRM96DKpZH5",
  "key8": "mioA4WyiAA6aX9g46tpe7VPfYYb7nADnieXNT3UzWF2UQmV6F7AD23vSyaCybh1tkanVLx6PS2aDtD5Vw55kezZ",
  "key9": "3ewCNnkw9G8mv2hZ2FQzurM2n8xJBjVasS1Yrp9JD9YdduMMvG2kTLFSP6tXMLfVJGb81dEnuLHZxc8F8EuKpAFH",
  "key10": "5sFApAc34r825RyBmWVhkBorhRSLZBAo17uXyZoRx6MiXcbJ7T8M7mLiihaPw4bt2FcSTfrPAvdmwdU7VvjL6orh",
  "key11": "2yW3NnRKHQrF1chYp53W4ZK33rxEayXp6p4mm5LRjAmfzcX77AxQjTD9QkwAHn3RHMRsFodaPDRC6P54zP7qbqLH",
  "key12": "4jPCjKo8TPtfXq5LxX2NHxhQUky6G9Vhm3b8szn3zBQ9rZPvcTwhxKQhzmmYpMz88Wbu89qVjQBxcguhGW1d5P98",
  "key13": "2RFvDrrTYtZVU91j2HZdYrUDbFD6xaWnerrXqCVoytq8RdrVCp5f8WoiNfSV6CEFQgoNhRNoEHTF7C3sv98NCH9p",
  "key14": "4t9AgR7H2C1xNoqT8rdrL14e8WvzhQtckDPynVCkAb4fV5zmnouBd2aWSurneTH4fQvZtJerZJcvQB9BAh1mzs2u",
  "key15": "5HGu761mRck1VepPwvFo8JMrSUhgga6J4XJbSLb5uPGig4qyjEdcU3WvUFhDYY62hnBuKxSrptTdzg7wAQCze7Pu",
  "key16": "2jjwsFjd8EBC34hjxgkmUj6GbF7Sk4LBuRUhb8WenUxzNY6Pe86v3zYi3p2D7bQE1xgMzMyKNDh7v2eirozE83cX",
  "key17": "46Q1WYDScHRAMqTmSRp8AmQDEDRnSkiMrX52av59ThXMTmhMsrgU3eHLf5FriroxbWXnUBUuzWFaq4eCE14nDw5a",
  "key18": "3c9L4S8RvuqAGkmK74twAHgcaxEQoKcfSdAnoyUPoKT7VmbRSMWL8XAzZwQUGRfJ5pHWkxTYKXyEAFHCtK6obe7r",
  "key19": "4V7GnLhJTM3GRP9nLVPUMSqWGzWqCPPemj6FvGxyAdCE5oYKYD5UVitUc3buR7kTBZ6gviCoQYnpfW2qWiwx8h7t",
  "key20": "48AxK2bnGBU84mtmZsojXdDpbzQTs647SZg3AMXvY1gFKjg6TZBxPKmz9dYGixHLfPjajNnkWVkqPd5Z3y4xXdEt",
  "key21": "2aM8aemJT717AB7qXkxrfbh6XRxfVyhLmtgumq8araFzbZTJjx6vexgLuFTdS1tXHxHne726YTJkbNvKTVQswT4y",
  "key22": "5dzMdQdSfQUc62Yqo6GZduQFLEuVSWCEf6oavJphj8jAyWR7c6sMDTvc9X76Q5RkJPSeCjzxDmYzpKvcBPZ3Trgf",
  "key23": "53kqxamHXW84iv6FQLVy2LxEmsJPza4LoSDF4htN3bTERpQ8hkmfYzJ6yMn3j9WmaSucSDDVYt2V684qNy1ZS8Ah",
  "key24": "jPDrMHvxwSmZfLMmB196YuLayFE9niWXaoiRNJ1yXP7UAoVDhNMXHKhCQKbsaoDHdESdkYo5MiVjojagXxfSwfr",
  "key25": "5mQEihfwCC5RPaVSXaQzJbh9UVdDsYTVB8AoHsM2G6wefDguddmgy1QXBv3s1i6yWR1FP27AB1MtEG9VJo2jn2rX",
  "key26": "22QWQqLXQQ8AYV96kzFjswxLjkBQyHW3kWv7URMp283kDNpY8qnBTA84U2GVwhenKUecy3cnyBLaQsXnGmvDd3VS",
  "key27": "5hk278rD97LxhkE8sr6g2E6G6kwBwP6x3V5R2BFjcY6A4yGTTNYMewmAUqZvntTiNSVpmbiuWe1dUkHtzRakr937",
  "key28": "4ZPobxQSe7keKWMisSAhbbTLN3AHKJYqXxSzVapkWRF32aVnCeHzruRnifTG7tofjnPzxRfDcCw3c3TMET68gDtR",
  "key29": "3KdYQ3QnbfkFonNyGL8L6o8LyaLTbHqPsFDNtD4s3T9Hq8sAj32eipeDk2yyjDYYdcKW95UbBQ3EXwEgFkPXyPkB",
  "key30": "nb8aieefY1YHBqmPnuMx954M3r1RzRVVfU5v2anBuu21JpGfqW6fuPW2ng3zuTbcA3Kph9gMPNbAQdYr7rY4iUZ",
  "key31": "MxbNBAumqNFDL6m6XtGGzvNprFJey2KUmkbBjXz28SSZrgMEKRAGRF42yGZR8L9vRqL253iXfUcscPHFAjcLHoA",
  "key32": "5fiJnvU9MzWzwVVJsv1MtTPqUYvRzhgRJx4u6gwA6iu6f8dUJQPTK3R8zf7LmqkS5wTdx8fvQ5TVwD4JsynUtqXs",
  "key33": "vUqYbb1AUXMjMRbRbNXjmxJrncskscYK5kca5yv7bz4B7PByvnVQphdhfreZek242aPeEAZaHkHzUhhuUuXTCCd",
  "key34": "3YTqtQxMoGpGyGopbwKNshkLjefZoGcxnt2crTkmjwe5vgKHjkbqtkj7cXvKZJDpfvUyvqxjLuiB7ZMmkdx1deuh",
  "key35": "5pqD7rWYGzat1SdFgqVxQdHzAHnytVmkCrCHPhpn8mBhhswxUe7QYDZMBDc2LUvyF1zdTjn7niiWm642saSNX4fD",
  "key36": "4uHbxdpGix4zCNckJzxrfNP6kLBKLVcMtgggQANmtLWkpJg33F6ER6PP44ohvNu8GqZaZJkPv2aJRGF8QhmdhFpt",
  "key37": "3B4iC1WDz3X6MN7CHqJeJr28G6vtpjK6JfHsZuAZn1Y1PG9zHVqBmwTmzx8e6ieDvY8xJS2yNd2BXhx1RLKS2dPU",
  "key38": "2vK6CdcQ8h9EXeDgwE8aMDRKzSqLonbCZ5GqbRxNAZoMEc8VAxZkj3DJLHzDs4xqd8oL5KHA1Zwdr3Yk6PohADMM",
  "key39": "5byPPS98Ac7Z4YE4R4m41g9Qwitw6UK2DQzDeqwuactnpZEjn48DpwxVNM5VHhbTZoaCkD1a96J6vgxhop5XLGVh",
  "key40": "3cbjgYZFEtiWxgRC4ZKi735Nn9b4BipjT6ySKvcJq4vWBLzNTPBze3jewEvoMDrag5AVfDUmJ2jrKneDfnwc7Doe",
  "key41": "3iioSz73faATrFjjbZMSg3Lk4PQDDbuR1UfN6fJVmUUZHMXEESkjmF8CeAtZqHvPUqSJdQjjczcUE7szv5VYq5Zq",
  "key42": "pdpMvhwj5Un11yShhvK8fVFUzU9aZnAd6gMbBFtwpMdUWZXxF8BRi6GhF18ci3nd9kMoRAKU8UD5zHjvBJGh4H5",
  "key43": "3p6WX8G4AVmfuujc4YQTa3JJaAMAa8yDVxKMcGG6qagua2EsVHAHW4TxiBmP2cYF5KXQ6KJh2xYeTdaLP9DnA2fJ",
  "key44": "4GL5k7RMNFdovyKbFGbPUCJZXNAvyHSDVJQzePhzyjnsDCXbjpyHDrWmigxsaCH84AtMhA6MZFwudjNseTLDSSpU"
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
