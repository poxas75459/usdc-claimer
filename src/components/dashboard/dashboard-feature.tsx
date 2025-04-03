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
    "3dQr7cjBznayD51ZDryGyJPckC2nKdDMQA4zzfdrWKKqfHgAujyov2wNqcXyko4vXSynBenNhx8AGG4nXgVx6PNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pi5qiX4H8cuMi41M2LeUcvmuzTaeMNskMx3pDAzmRLDA542jB7EkLapYLNPgYyvkysXBF4hmTC5MC7sYECqQUbT",
  "key1": "5qRJovGmdyqkJLHZpHBCCncwTLxFvzgqruJa9CL8wuH7LCBVEYEXCdfD9GKzkevLi7CiHZUCcbhmDx7kN7Ti5axd",
  "key2": "41cp8U3QsLKU4eqjahxYksheUxu6YUg4NcqWg42FoB6VsgDowqpn6yQ1mK8ZqD7tqEG45AoTecuwRJaJbdkkfUWv",
  "key3": "3HS9wE9oykFhXyrwhejWVG7TkzSqWAEBHDoQV3bCoQsWyEZeysvhjFQEjSX8SHHWC6a42hC8HoRakWfqcj3fJVZY",
  "key4": "3KAPTSkwwz3gaxzSSAbrBg6vmXDinrMcMVWM5TiR5TjRAzbGyMyZcREeknzS8NNVHGaQG2jrZxK6L52gXaZgNXjK",
  "key5": "2VQziiicTMD3T2XDB1kz3HSx8J785AR6hc9iXL1KWC2hqUeCDdY3uBaA9czBdCsmxiJ9Y4swKVdaC2RacZ2rNMGR",
  "key6": "5GqhTPj55BfRwaby2xTdSc7hmJgUG6jBpBU2NsW5MTAvcQJx9g9s8F6NK9ZbD7mwemF8AnEoY13RQWZTV5UoNEXH",
  "key7": "5eYwgX7AGyPnuRJMPu7SmNba2ZzyNDA6Ki7Um2kRk97VCr1hCzGGkg2sK1SVkBp4DDben6dj8c3je8w92pv68CpP",
  "key8": "5NUaf7wrAAECg4y45rE7JiAbaatPA7Qwd7M21toAAzUvgNzurDPQ6UxAG9rXvToyp8a7hzRkgsJNTeBZnSecE9cz",
  "key9": "3h3Jc8NhDAm5HVMWbmKkYbuPDozrxELAhVYex2pSstHCk5zj8nzyBK1mJbuYDUL5J2zqYF6DzhFSV8HZdNsY4wiq",
  "key10": "3sne7AWJ3bNFg9LR7KhDxU1cD4tudJLWRvButtGtYaMWbMnC2UJTDkg5qFZSads7qH3GDLLTFyUnobLPcq6V16xD",
  "key11": "64trjdpDXs4zMKYac8Rv8nF14dmySBX2dzWbUMA2Q3cKFydFJeX4EQMiY8TuDXrXSEsXBMj6qJcRK8bWiSaSctgR",
  "key12": "2kmQtgMC5ZMZk2AcAZvZucKzWu3fw5Wp6TzU7gfwpXNGiEruuF4NWweiFq1LDxHHcJEszssgMyA4JGieqQst9FJK",
  "key13": "4xbywimcfggyLNSoRXBVqJ9jp9vnFAmPeKn4hs9rZWSXcsSWzW1N6H7BjSxJmMjqRfDvsZhnoEFw9pq9ToBMYdfE",
  "key14": "2XnsuQUM1CGBUKFqFVD5d1KxedA72ig5DJ5hUgnof8NtcjZSSFnxwBWUhHiDTrDMJdvr6hwcbd1QARVDaRjG2XXo",
  "key15": "3fSozuL4WqBWcEDQqhD8X98HE9xY2Ry1fhuwzJGyGJmwSgeiUi4GRJ6TX7HPTGhfi9765bMwbp7ynogLQbSicBQL",
  "key16": "4Qg8u3xw9vctEMcBVZjaxNoge8txvyALFVVAdokxqivTgTqQKSS4xmnoXstfpWJ8rvvt3FLtWjKy9JmodPqASzv6",
  "key17": "2y4G6MXvoybQVddmQRDN7FpJZzoi4RQF8KiQLDPuSquHAnWrs7wR6maMVbNnHqSFFxVTn5AkKsrfmxcqAdcswWfC",
  "key18": "3UUjSNw1pJxbJMTDyBjfnjvnHtPDjMinrBLrgX6K1sBYKLBhmbPCrBGfYRyiK9th4i3AyUrpeMWJiyH9L1WNNMW6",
  "key19": "5TVDpQfthJgqjHX5TGaNfLUU7WXLe7R93rvoz6ZpkkLPeTRPxEpVTQYS5zwFnCSYcfRvNCXHcQSJcTZC5wVp5Fu4",
  "key20": "2zvA37XfRonAJC3mCKod4bQ8Cv6NmKvPvtd4vtas3j8BsNE5oVPjf1m546uZcP5JXVXxtQETj2B74bsdReFnm6dr",
  "key21": "3qWJonnyQYhYf8hr4UTmAUcp5Gwdw1uUK9puwFUzYS1P1qjNaxoJsRQo6NpLGo5mHEnCWawEmBJKg9z1Nt3TqXLL",
  "key22": "3MjSUU8SGpnJNHaoh5U4FJwvxaE4SrDcHdgpnJxga8kqD67cAeHJroVZvvBig43sfH6KYtwCDGJGAC3ac586wVcL",
  "key23": "EJ6ReRjZ8kN9uhXjvms2npbpg9pi6cFFix5CyhCDTxG4jXT1H98zxciFuj5DxrHzZizraZEimgbMtC6qDdC2j3X",
  "key24": "2DR1bGaummYkdvURnrPnkfwg499ErQei91XZe31kvi6fixWPafpsAgiXKJp3TCxmuHXb5McmJMFFfYBjyDHp6VNg",
  "key25": "3uNSeViLnr1TCVTiH1YmFyFEVGputh2VpQ1h76ZXz9vkbq2dnyZTL12N7J1CSxLfduNSxWxKUyC1iADhMP2Kd6QL",
  "key26": "5WaBxziszoQ67fVw5o6SjSTW67grPpa534XWmv8qoM4aTrxgGJdRiSaBc6jc4uNFsu8vpfqJUfwBxWT5VnUJHCSZ",
  "key27": "3PpZwEa2yizjeCZ4fUwdBkUApqYNmGgDL6B8MHt5qLDYeEq5dmxoNGKh3nwYFMd7JeYsjDC4ZjSKi7njh3Ts4Gut",
  "key28": "56AN2wWRZXrBkbg8AqqVo2bWLJJEtCxxTnztgo5HGS9WX64gsSV7E5b1KSm6j81p59Ct7KrFk7ug24H3tygKMN4p",
  "key29": "YWqHCSzMrVNqbsKydnM2P8v5ommNRfTURsSqEpaomV4F8pey5dBThus4SwW3HuccpDfrY9MFqsLgCXCapjtJDr1",
  "key30": "4PtBy8EBPR6a4EK9ATz5cKDiu6tQzoymaUWcH394mX3uG7KxQvxesxdLNrp7EqaGfNVSSUVMs6WmR1fP5pmmCg1A",
  "key31": "3JgEv3igCKa3zz4xQsvKF1GHnPjAGeppCNLwRmTDyxy4wgKB2iDjhf9ugT87RapFn1zv3p1aYg619eC547QVD17j",
  "key32": "53GnaMvYkRub1pjq1PQLvf5UYWbaf3dJi5kVfjCT4FUHqFReDioBPPh1grZoB9yKAKfSTMSchB4LNpEopPWZb8T2",
  "key33": "2NgikjY2mSurwXCQoL4ZJRs7x9Jrp4L3cBpYZEW463j17RmAfPQTkcbiizXFgeoaGSHSt1HzCnmdEnZTWb8i8JwU",
  "key34": "qYiFJW4NV4C6dH1ATfU2AsnAcAzvxEtS5DQGfxxi3sdzmXgeNyHa91XuH4kppjUjeW23jqJmiFxRK1bZNB16abS",
  "key35": "5muubXZdUCVvDWAqzKUrfLCUVujBXHhNhmqfqTwHuM4AENSnTHmLqtcV5iGaf6BksV6J1hEHUF7nLkThmzT7z8KU",
  "key36": "2CtRKrV45sh7ZCEqt2N5Azv7CYfQvMiCv9ei9wUwFMhXxy2Jbc8Ku8fx4bYFGYkaRkvy3nh6NYtUur8C91bgfqaM"
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
