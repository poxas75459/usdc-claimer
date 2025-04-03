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
    "54YD86kPmEgutSbQ3tsugbWLQKHGtza3dopwed5mStCExHJMuvPnMxM3QNkVeeZztQz1Yb1WJLUi3aU1aCrUxqDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iKXKSi8GUcipFFDdZqdwXxSsVNHg8CHibMV4D2zCMYgYReERqyHvhcSkmHSu9B9k72MfcHY5RW2Q7mJ8VyPnwRE",
  "key1": "2QPtEhjLEraDpHyne2PScYUMV4ujKaLhTBSSLU3BtLuzN34s8qesCyBPDE3X7LBUkzfv2jADnrUBQpWvm7QiYo3D",
  "key2": "5TF6r5tmR1vSFoVMVT7WbZZED7NSDzan5CHR3ArmZ2ULWt6udctgw9LW12cWZrsfW3konKsa2emd7Gd9NbeWmzRv",
  "key3": "2iEZc13dnzAA3FatbjqYox3stXRZAdsYKNAf71sEWGiP64oT7yajYDKWNjwWNgHwxH3HGQqvknu2fN6LZD16eTo8",
  "key4": "T9boMS7eBCBaSFxmnzEvvhVhc1gUGmZy3W17USCqvSJpRE2o11w7z2gEu46GUFq5YZtRvv6XSACrJbhf4JpR2wJ",
  "key5": "3NHnqdnLUbN2WJhNeNYyDs6jJPYnBoDCrZEaf8a5wfCifKAphmKRsukjmsvGcCnHNPpspRdUJnAzoPNEAqwB8K8K",
  "key6": "2NPNGzHeDtxAd8BRmrMWP62dhMQ3E2huUEEGQgcEmd7kzqk7PXyokCxnZf7Y4wnTQTxe1vgimBKSQoo7fb1zeqwM",
  "key7": "5JQc5UNM88xtpoXsTt6Sj6gm74EDoXKQR5vgFW4QHejkwGiSHimC3Ci3QtvqdCKvjNNU7vEi6oZW39kaeitTJ61r",
  "key8": "3ATsXCNRtyYqSiwSCMvjENVxBpab6hv1QUC4BFar94zEX8QAGPvecTqb41CuT51ACvE5EufrjmEN9uj3NbPUjgKG",
  "key9": "367TGbsDx39UGgNPrLUfDRCwHZqvtXePWBumJGdAMam9MBHsvFVKUe62jBHTj3HJa91CG8XJKEHvcSkTf1JgEqee",
  "key10": "2B4Vk43Rh9S7AzmUoHAggGPwW7vnxmcpo93D9ZzHvTQJTPJ5YK7CuF8psxo5HmnwgNTrN2E59GoSQda4nD7it2Uk",
  "key11": "4dQVe3xRWVayLye6rZsGFDAPtUjzirwWXNV79e2WnBnEJR6cmoeT348UmLsvRJaMzoTNrJxDxHZyBcQhvhEBEwg7",
  "key12": "2Yg6UFJsuNfF771ruAeAnH3KLnkNA7gijzjCgTR9UNKqpWNdJdWQ2sTJ3vd439zoYDwK8ZBCKQZSNSHumLkir4S",
  "key13": "3VCWCPXb45RMcFskVLiCJ4EuwLUoDTmmmRDQzkjq3GHFGUobB2oUC5TKzX7kY3RuBKRsHZi7FMgcYvHEav3DThvd",
  "key14": "2eEvmirdJLekE1xqm6ccH1WkUVm9HcsqGp5pQkrAwrWJeSB8RGseDLf5Pw5B2xfcHM4wrvKP8xQpzCRCJe8T5dHF",
  "key15": "544AunBRSWVYbmLT3GifiENK5Qae4R4fxzFfgt3uw4oqAyvUX5KwqwenAB6aRa4fYBvxreuY4kwvB7sZsqitseW4",
  "key16": "1KVW4hM41csvnoeisYcibiptGQNyG5GG3TTiWqCrumUNHYSh91sT5hj8vb6tMDQ97NPA8HgmhZ1U4uCT3gG8m5N",
  "key17": "5eMnqnGVmQNjTcUgs9UgXmJoMFgcyMK64S8Mmh2PbabC2aeMmEVuuQmvJDPX6h6TTydjPLsT3D4n3iHZ9imKxMCx",
  "key18": "353dbbk3d3QVUURefy16ydNVz8EAuL2zToAGzndW1MqgUHqBdhTfUSZ9SLmCLJvraDcXrb14VUzEE8jzWS36BtVq",
  "key19": "5K6XvuAgUTTzhydnQcwhSuLwz6FB7WBo1ypDf6jbm2HBKY2F5SBpVj9BhQJ6DxzUdH3MBygW9sqZYDezd2T4rPhU",
  "key20": "YWx7y5Yh1sfFyDU6cPcAgXup3oQUu64BfAGMAVvtQD49bd9ZPZftiaxwBii2DEoWMXNCFfjuWGJ7fUHahiRCyJr",
  "key21": "5tqWQiR7QkraELCiDoqEkgr1nXY3ALSJb4xXwBD5VwLKSFqCLUrZWGZJfRFtwknRJTfBnjZr9DpsqMaJ4X4VjDCG",
  "key22": "5yXZaCeDvtaCYn9mjMmC2xgkY5tJTWpiGDatS4CFaquGT4mYiw9r2JcC6AhLxp99GmdWowiNr4bSShnKW19aZetV",
  "key23": "27fU3G3bghM97FakAA9bAUuw2vsLVVkbV4LixxEdYe7nKdm59LQBWkTwHQjmdXQAk1XUKkKk4zqBjkZEFiSMAwEh",
  "key24": "pFpMoeaDvYWyitP7UmBXeDSduMYWvPMHrQr75bw1EEbwFwsweR7YakutioY7w4sgdvKW7mDqRxDJGViM8d8FkXo",
  "key25": "3Jx7v2HLVntf4X8wqvLrXy9vLajfDxYFJPfYDcnyPA5WREF2u3WzvBEeLYowEak81VBRCR4uQgLvUJWzWxGEKETw",
  "key26": "4agyPxJEL5STtH47raAcsEa3tfVcY414vpeojYLjsJAfSeXfkZqL4tyAzRWkCjAL5m83jSNZFmsCtjfCSxqWvS68",
  "key27": "35tUCDfDGk68mGL2E15JKc6fbbbPA8qzLDBEw197p96HfCwtk5uoYbpWyLSDb5zJQByig7veYbGjrcKpP5B13DfC",
  "key28": "7AcaRjoG9hVbrVyuia8PeKsn2PrU4jV6YjynmHsXxb8ofKm9YcCCRVke7Kw3KTJaKguvHiVT9cTQ2ghVmcaeRzf",
  "key29": "2TQcAkg9XJn4x88aDnB382Lv5FUJDCadKgUzGNGe16gXJG9QDCSnJXZV3tiuwFu1RyxeASLYh1GcefFuFRYQMqWR",
  "key30": "59hDs74SuUARFxuAkucMn1SVPPbk9uYvba3ZYQE4oZzZzR1ZjaAWLd5135TaaGqre4jZo487CvqLZRsJAMXUbTYj",
  "key31": "5ohx51NijDdpJFuQBhStSnyRCbNm9BtXdWuCA1PuxMM6YRFw7qyPPkAHVjRZFENGX9r6PoAP5KAe2DPvdvFDrBGo",
  "key32": "3AyuwhMuoY3t2Vhzi6N7ucpfUde2hzXcVyi4UHXT3cRae5Wj5nq1AE2ycWBJ53MW8dkG9WVsUnrphKze8ksSx3Vj",
  "key33": "3yRjPxGcXsjLCpxi2ewKDktEiHZ6H2hB8YWmTYxBk8KWiLLqznxvh8GVYhbAC1rYBuXooY571276MfZxN3i8NQ5v",
  "key34": "2YKYYnn1podHyMhYwvryXLv7rtEZ9BWSTAzbqdXaa9Y3RMnzHEyPmrPdK2hfNEDErEeyJchR7jfgqB5qARSNxXHs",
  "key35": "5znnxBopE5qsSiFFgh12D3UYDw9tp72wrQfogG8CXC2DkCHUPiKgwX4aEYvzj8NmsFQ7et3BZfKj7ou7tDwcXb3H",
  "key36": "3J44KiEKAfeLXfuewADXsPZvwrtFcG7K5EEiDeXaZCkQR8YgynY4JCLwLZBwP6Tof8wY4bMMYVohWVkdVTdhAvRh",
  "key37": "58MfjMm1oa65omBsBqhtw1wd5rovLnvSsnb364BoqheHdx5zGjwuGanpxdV9cXYMvnymKPMLZHz7Yw3hASwaJpZd",
  "key38": "24cZXXF2G8gAkqYXQtxHmPhcrpqBYjcXT5CB7FXS9Zp5UXPpGcKTAnKupnbADFYZQxa8oZKe97M2RpPp33VSK16T",
  "key39": "2qN8oU7v1AcFFw6Vtw5etNomFf45NncAsTcDvzfb2kdwcAi4EJQ9hE7K5xu3prHqHpshBmEZ1cJydS9e564TfUYH",
  "key40": "5NR9Mr64fbmz3BY6DTNCxk5fSA6kGHhrQfPBypv3KyJtoJmWeTLR9aXDEEjfYyGDa1h6uAyf8P9wHjBcyjYFJaRS",
  "key41": "4J2pe6NTK1RCojWRghxmUjzbTTjVQ3b6JfCY9YDH3CvasJqF1pMLV4Mko1WmRjPHDHF2ewDYUie2oGNiGCVZNZxk",
  "key42": "2HDx1SJ7wi7c5JMEzinJA8uNnvfMMh2drQrjqggrueiJkenuL9DS5ipY3VoPsivGhPDTHLfMbULjGV41jNiG5fBW",
  "key43": "4MTzfDoAWhrz6KgNqRoUFJxoqgpRNnwtnp4jhdxJZProMqBrYmGJN5xs4QcrDMWnSMwdp69LBrjVqefvtnJbHaWR",
  "key44": "8LfhznSDpqgjJ9rjy4WRVNPPDnArqpYUVWCX6mkQxA41Kh2BNukCkP5dveZPWrvg8SF6YJXartTDHMHCQe461wa",
  "key45": "fDGhjXHTHiEdePnUKPaDJiJGU3csEQKhrKqMV6Y6w6NLaK2brRb5VyeBwPpikMJLhmKS3JnUSHfiaA6a2eY3AG4",
  "key46": "5HoqG9BHxagkW1k7ayQeEw2TP5RwEapM6DgjajhmEqpgDNXV6R9TPwag3f3YpXv4pcztQkm64Z639LnUz7jvtBju",
  "key47": "W2Yd72yQBRpzerqqV4D9epBsTxZKTpx7jPVaGwrboA4vNjM1f8JwP29FPkGhjqY3mHvJSQj4sDu26UuKBMS287c",
  "key48": "4i8J2iPva2DuYj5bK4wKmqzNrtPJyZ8GBvtTXXMFsiSHJfMtiR6fxpLjHMEDTid9cmMmxNvYh4YA3pZVVzFMRXKC"
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
