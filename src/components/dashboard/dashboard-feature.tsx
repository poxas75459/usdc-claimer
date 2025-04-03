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
    "hNtzBEMGqHqfTA3sSNugdHAEfEQL3FvpxdPDNCWu5zfEngez3akxkW8ukL1XBkjSBvsmH3bettCseccwweLchFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43CCEtJ2WdTmtqKLVRDnv5QfhiTSXqTEo5jobY6qxvDiwsLtYTR1nbricM1HGZYoov3U4aEMvZ1UbmcV23BPDnzP",
  "key1": "4bxvege5YcpKVQv4DtYmP5NScrYVokSaQV67odff9zwq9AxuvVx5YLYsuD6J22RptGQvvW6oHHbERUdmnRRAonBp",
  "key2": "4HXWy7fmy8awmyX1wnN73F8pW6MNSsyd59ivV2k48D2wdjNR2Km21UmZ95vgDqJeTTfNUSYrHKHCLakpiDyDt7Kz",
  "key3": "32UbuBJFwHJn2n5eZubaPUgEYXzqkhVhCji1VUwqVDwJaTyTAvtmfgrfVv9rJFmdq9FKAbpFj24TnTQfXfFVgJcL",
  "key4": "4uTx6Az9RAC4J92TywwcNdJBGuSopDREHxv5u3LM4FsebjZp3VxPDqsZfeg14PgtypA1ue5J9mqdRRsYFqzCkrri",
  "key5": "5SBrMZstDZGfvBAgjwVWQMwokUaz5zp7vHhj1G7rbEvir84KzMTGgFV6WFWpSxaaRhVBbEcqrjz7aRnenSckNitR",
  "key6": "3EcTPGJPTQeowuUYAfevsMv8YENqRPQcgRF9obcQLBmTHNBZybNrgAZAnV6Cq2HFAB381KNipufEg3iqMi43NXkB",
  "key7": "66UWMQqZmtDbvBemNTqSriegEyew7HgnGm6LfbwzeSgcdnVc5c8aFg2CR2ggS4y86HijpSB1GupLPE4eyo1fu2q5",
  "key8": "s3uM4i16TJVerVe3GwzEbvskdBWJrJuVN2wsnYC4thTciE9nqaiHTeeyu6LAQN2kisz5D8c5DR8V2hoCFgfq7nu",
  "key9": "2aDc73gyCrv8khXyB8T3U9yqaniWNR7H1u2tjvSX38YF4AuTMLq7mR6MaxHs9X3Q5KATFMXeGM4uQAfaZn7oR6B9",
  "key10": "42KYfKNUMTU1zmMxXDMB3d4rF6p84XyHmLf1AvW39Kx8iNDK6uULuKAupT7c8Qmzibc1gBGEmVmjyTJbxRi7pMqN",
  "key11": "226UiXDkytNX6ZVJXc2XePMxznfZP3rRZPhA8cT8BCr4kReotpZwmPQFeQwjeSUwnV8r2hobNfRRArijmu1CK5j6",
  "key12": "2sz6s9zG7Gu17nDL8m75xzjrzJS7JmZ3WPYDZCCdE65Tt6N2r4qzeBD2mp6nteYi7qs6DRhbDhhianfAFb1YZSmX",
  "key13": "ZPPtmg8vRJo5tD7FPVcGygqRav1jBGJSQH9YgLpNfrcWBkXhtNHXtqw5twPQnu1adZ1BSyFUzcARouxvjD6YHmK",
  "key14": "4VRZMNBePY2KPns84PQ5qasHDRdCWQeUcML65V4USkLsLRjXRa8meBVYnfzsWmdfTo62NP4frbtZ18kfMFoZ9M5A",
  "key15": "3118hW1BwYZAcNy9vjZiR1gp6GhVUjjeQ2opNEoTFM7RDjC3MPqk7zTqh72W72mkjo6hKjpdNGWaMxJ2UDFb86Hp",
  "key16": "5P8Gq56szWn48wyLUKhm3G3SowE7jxiQzx5tRJ3PnVQUPT3MeYecfFgmAPDoE32bYEGASP7o6ViVX2BMy2B1uPzt",
  "key17": "Uj9F7HeM6TbvFShH9pSD97p7B9i8hGC3mVw2kRy3y7AM8A5UR3BRXbagrWqmSWyMLhyk8aiqgS4E2Cp2WeSCj4X",
  "key18": "3XWpXCZZRseqoKHjxhvDnKQTG3Q98nxBoGx5jhmiPKw7q21pHbX9JFcaT3xVfPJWBRT63L8WtJcMRBfSegANJV7c",
  "key19": "AS7M8AVcVuNaXce5c4QRS12dn9WoRMbN3VYUdF7YSjAKWyubW6aV2zoYSYPk8uTdBwCuYo582cMkcn12icgbDtL",
  "key20": "59KWLenJZqRxiuRS6BLTAUY5oTU74dp25naibuFVoRdTEwpLeeonQ74FZZRuF5M9YysLn7r4CJAooS7xYM2RUtw5",
  "key21": "5JQoMYTaUAGGTBhVvWvXpcTQr8nA8dmGT6DSS7EZz7FPus1mC1i9jEcwoC6popgQfbEhQwmqYQxN2UEWNvb4JNEf",
  "key22": "4DDAzSFcQBfRRp6goRjbx2oicxx4jGFCKuYyH4dfU1y8HU3exCqkzQuft6DHP4ZgHTVkzs9JKwpUiayCGXiRHYUh",
  "key23": "5iGZ5YhHiTcHwpA2jX1pneJBZgZ81QHgc6GBjxBW3w6pwArdV84fMTCyo3PhDykT2Ya2gfwduk2syXumdfqbeN8G",
  "key24": "3qCsvWC5R1BxZ6MkBSJdL7z5u8msr7FRt12zgrPBR1Ad2ZNLjNvBnm9gWAZXimuSMeCUCqnW39pLpEDLHwmSwMHh",
  "key25": "3cwPH8ZDGrNfMruzqDMDQTBrJ8matMT8cuP8LirKfkVTtiw8M8JLptKuUyuPfRkGVPF5Ld9b2iybdTJijZ6YDt3A",
  "key26": "2s8JMeiJsCUaKLsVNR44X2aew2bspZV1HV7667G68GiV6RD7uDUqK1CawFDLdT5qX9UYo4vCBuvWzmwRSUquN5Z4",
  "key27": "5bhAyh2QJNXegpro6TToKq2rVaY5MuzY2WZCdr2vavNhv5B3VQoTmd6rGbzBmof6grdHuTwnG3gySiF2kxdStAg8",
  "key28": "37yamr8igptbGBTzyTA2FB1snmEXsrUezsgnnqvP7HZU4qnBJp7cEZuBsrFf44q6qDudGrvbshfv5qiKZLJkG285",
  "key29": "5bAPYGET35SnYKRgMiBTyyM4f7tosLBXJbTSawzsfkrdHEki8kW91UgUjE3qnGXZg25JSwQ7JAUZLxHzrLSBVjHT",
  "key30": "3qFqMrKUK85QrDtrg8fWDGiB47wMqYtntQKFHHHf1DCdC59YHxmxSRA4LUMeBVBYiu5aLuEedWnCBtQFGeZeBQPy",
  "key31": "ve6vtL5vxpHAu9qGZyafgFW7RgwSgn4ZH6CFwq5AoNxsLDpgQL5H9WeZymZbnbb8BjAAdgKz8po2pwex5eMTpv8",
  "key32": "4QWDx3rVjRaxFLZ716DJ9eMschQSBhiWQPm4dTczeHFaHEvyf9tdQrYaBvovCkoAqyVw85gkxnhtRQFtmCuru6ma",
  "key33": "3MFYWzNBAj7qpfHrEzXyozaoun38hU1skcgXNMHK6qjnZKkJpEv7Lc8hcFzRqkq8J2HYyFXBRLyQpB85Z5oQaA6v",
  "key34": "2iZmqWEJ36vbdY1Ko5My3pkbeZit93oxSJn97PrmwUgVYLTTxSaUth7hdAEgYeMtmqvQvkD9zdQprKVGYzf9i5xx",
  "key35": "5gcuP5Qj3ic7S4z6ZzCdckNcNwvyg91Pj4WYnKB9rGz222NArs9E33SoiNTa5iGXJfB1Bj34RPtbeYXQaAtjwExY",
  "key36": "8p6dzZyWFBD9Z3PcazqKyKJSEeHNLGU3EtnysGc9YJ89CUskKM22AZi6owdpR5HMeRDgQWP1Wmo8nfhBgNkWcHz",
  "key37": "2cK89QvCjeSEdBy9asxhoLcjBQdNGVd5aKdE19PKo1weVVwrRbVPLkpLSuLzMR9zqmajEnqesFZTq92sJ1b4DFSD",
  "key38": "2ocQE9iqreMFSfgUVbWnV5L3huPuGFQSSqHA5Pv4dRkrypybDW8LFKxVvHKn2cg1vf5bkxp9rnwe4WaxeC6D4Ups",
  "key39": "2wkxYbaFaVrv3YBU7kjwTQ1SCAAyqtnK7SuzqsVZd6r7ycfKFef1UqkSWdZsZ2UuxGaeKFbUP5TGyFvmcedvrrYG",
  "key40": "51hQ1ZjdCPmLCe6B7KD1jNPk56LfBGwRGbb7c5WLidLBg8vZ2zRd1rnSaXK7QcveQtxHzRhwzCJZDnewcTcKzThx",
  "key41": "3pkcjcK2obJmK6CTDjGxndCoGN947esJL1bGR6PqXbJB9RKv3kQ5s46J9yCrECBUQohMfyCVL49iF5oWkNTHSod3",
  "key42": "2KnkwXgXNdtZWpnqWxHoe6KtuK6dqou6Bq4c9AhzYNb6AGuAo5gynArYumd44kUWeXEaAmvoK4MS3ZK5cRGEXJQm",
  "key43": "MvUmufpa9R8A1oZCdiBg8VsBu5quDhpKWwfrPzHWLQkXaGzGEpirQ7k46ehAbCctKGCo2yMZSCrx52K86sSGmqP",
  "key44": "5c1i8kp4VxR35519LsnYVKbsWr9hdtfRh6QRM1dYtucZpdzKCDUDATAS8G7y2tMpzdSyHWoERF736NBbYjyRKs1L",
  "key45": "5iwCNMzkee7HJLAgCbjRbrzdc4soTzkq6BQgGVdRsDfMF9stziHPPTRBeJHBkJa1MPium4u2ySak2ZBY3rV6cK9f",
  "key46": "5THyyF1j4YkbWBT6vCZsq4XRfQ8tiLbFeGK9UtqvLWmgKqGKZK9wrDQRdKCtjY9LBokicZxdjPUYNtNJsGo3DdAp",
  "key47": "4mQRBDJ3Z3eSLEtCoDpXFuWWBEiMuGeqFCvzRuF63DG61Ev9YJnfUgU74xvryoCaBX9qGM5R2HfBsbuRiZD8ossJ"
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
