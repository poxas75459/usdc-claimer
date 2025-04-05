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
    "653Uqo426TWaB3yT8jvEagExRr3jMvUp9oD2GorHF7rCFm2ueCpwLBGeZwjwsNdE6xyKWA612HssnyL33AGF23LK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62YNaQFX37gKVjN7AVk9C3ppNqUWjhxkS87HQb5B56N4ymh8L2NQ6fkou2BWDAddC8CGEbcwjovSvAUzjiqZqNAG",
  "key1": "5k8HvoeUKmuHfzm5Tn6xvNyX6QTDa1B4DoY813hmWDm9Dm7n8PGLMsNX4XzZN6TBdpeGEd1arRUqQPC3voGCWcEq",
  "key2": "5EgP6uiSNzXRLTcb8BCgYoKRxy41xeiJ9oj8cCA28qxJ6JH8i1cFFCXKGjK7s6v3m1nbXqPSGStMBdXQxVTgQEUT",
  "key3": "4U7ejipD36nBwdDAVSKc2UJSGbrtrvdqNJDUok22L3Cr9jxVmaXt2zhy8v6fwKHa18VzkTWTKqmZPxJP26Gq6bGU",
  "key4": "4RW4rTk76mWXizVPGAqLofgRbHR1XAiGknmkhqpUFMpFw6w411jPKceAv5ciGDNKE3gFjRyAc4NE125P12NfpJLi",
  "key5": "4GDXjHmnb9DbTzSxA1Q8UtpPLD3TnGGaAzn7pg8q2fZj7Ue5uvpry3i6FCBBVbxi7m5JfG4vSKoWoTiudR9Bjw7q",
  "key6": "5mXXo42ZyFg3xH7F5gZfYug9k3tzG4yMKkAwiB46TVHk4aHLD3AAYnXcSWLru3TXch9sbMCPT2Z19DVXXx7rbbqv",
  "key7": "2xGghs4MymXqVyq56bKBdUv8YidFgnACxWj7D5xrChRYe7r7qFP1o9913WRvaYXE8j2x1VCq9pLHpu6Kp2kfSBc6",
  "key8": "4NpvkieABtu82VPi41ZXxRmVe8N3jN3xQAKQdoRFgxX2Z8YeMHQmAg55YDGYzPd8Xjda2fpXpUiSd1Cip8CGiyig",
  "key9": "9iKSgp37y8iMXyfSsNEms3jmCuzc1nf3HxJRmzsnJjLCbQ8AZWtcsVgSMbWHyRkM3cbuY8ei4be96UmG11fxmmX",
  "key10": "5A8V6gPq198cZRf2Y2sq5WPFhgS8Hi7K8VYeehxMc311h92pyW4oUiQ3Gg3WHHXE7sjrmmfNzw2E6V91rAtRFuwZ",
  "key11": "3kV5zpAwGF7SerNbhCNu7UTqLm37dXbMSdJfVc4o1sGzmBerx6g2q1t1d6zzjXo8knCG2px8CwJu5NAKjLA1sKSY",
  "key12": "dZiMg5JP2MM8hSd3EozfskdBuRtQjpsVrubPWcaKkCjMSpFtXirqKXcJqc7pbAjFxvW8Ftxfpju4Rx2Fx7j1b1E",
  "key13": "2qkiAf5rG62e94xJpjEZS8FXTGinLaqcsjTNvjKAmUrqy2zaLDqaLZHfgESFYqh4EKK29sC6yDw65pRztuuFe1JL",
  "key14": "2PJLx2iJkkwSU1JnsvRrwspi8yUTTvEg75omPr217cS5SRgtHVjM1ivmJvP5cb9Cn28caJsZHegkqmeMn86BoeZH",
  "key15": "5z1TbQeRcXNvmPchFyeeMpo81AkkHWB7hFyD2vqZn5z8dew8zWpPx1c8LHzTTGh4rs4uBtVkFn54mqbA5e3VgABn",
  "key16": "64p5w2DfaT5XHfbbbReUwatSa6hdVh7UA9r2f97SFsUweY8S1uTutf2Y5dFq7aU4ALiTBUdN1G82dn9EVWTgH4Xq",
  "key17": "5JpEbw88UNM8xx9bMf8z3sQryARyxPCir1nmNyJM6MbEuokpiXZQz629WeibUzW8t6kBVkGv36MAd66GNtrbTSis",
  "key18": "4bUMdivagoSa3QWyMaUhGhcptTjBW6Uj1whQJE7eY44i6KuUoBQVXL3zdz9smBF4vg3pGKjkAZ7ZB9YA6h6dkj6P",
  "key19": "3ANvMVj8d2RrypLYkqFct1ZDPjve8uzeHGkwdQ8zo7jDAKkb5CWAtFs7sgKy3XzFK3zpBRL5g2rPZHCqUJKKhRCT",
  "key20": "4Fy97e97rRL5ChGqA7fuiwwEtTe7mqsyG2eR9BuR7RWqc3r12usiW9DqVwTnHLoxf2jDMSdgPAQRg3ekrSZFj51w",
  "key21": "2ZFwg44PyZ4w26G7qT6UuvmBrXHS8e32RHozwjQwokk26Bfqvu4ycKGHfjQQNgBgfT6RwvM5CAivzALCDTzkCQKx",
  "key22": "2TrM2F6kRgx3BbNWdyg52xf8VdTP5b5TwjxrUF73dLgLUWrxiay7KXpdjoUSJYohkAoCRHwUxCWxaTckR6koaUBE",
  "key23": "iLoQvnhKDrF7o6D5a4qXneSA9mtRSPQFU1Yh1y11dFHMNSdEMXbd2d6vdiYAbho3hezvQZKESP5UUR7AeN3mqL6",
  "key24": "5aHTZEMU6SwVvLSuUidaTaLZg5Kj7pmxkuJBH7m6ohKNcfkWF14RoCsxG2xV5uwGTpdaJxPtVjq4i7vvJqPydXxm",
  "key25": "5w5wCcC4r1eCkLTJDAR2VSp1vN4SQ91LR7AxrkVDtKEWH2ahwbGjCzzu3mhkVNMKyqjeTo11getMZRDyMJhA4GtL",
  "key26": "WzXdBctRie8nRBxCqihFrRJyFbS5kT1wvme2x1bBwgZdmVW4yDvcbqKN34P9KnESCUqDLq3pofkUTwR9qqrc9kk",
  "key27": "53i5umUKn7AKv1htauUnRrF1abejqE8RvrinnbpnKth8kqhypHpw9TitBQBykbS3C91j5ZsnbwwpDHKiEu1DcHYR",
  "key28": "2HwahtSE68eDMhARF86Ge2gZmmV193na8EDaTbVV4hnuEAbp7zADjbeL3CgrQ1e2w5N86Fm8GyggUkhQU7LpFyLX",
  "key29": "3hnvXGkW7KmqjABZjUpnXfC6Cf6GFjk9fHUYxwZpE6qmftsDaaRuqtRLe9dXMAqggaVHCLcTHSuckSND89Lr54bh",
  "key30": "5ak1nRWnguruHv9R3mNgQBmraEgakTpYHK3gT8EzuJqb2KacY9L5Ksvwgw1K1GeXF1mtmq7hQtsU7qXYVAfXXtr2",
  "key31": "WuwEHLbFkTS921hgZvPJi9Wn6rfMBC6ZteZ2SY7juns3vQUZ8BpGJF4QbxyuewxiTwyfwbwpcS1KgxuM1E2bRLC",
  "key32": "HjTHjy4txrZEtxdfdL9xoqs2LA6U9BVwHMWkcYoQs4z89XhaJqZL1mS45yWshVCYBMmj3PjmZx5sDM7tJVRDoFQ",
  "key33": "5zzP7JtmVkhuAJtRzjDhcJSRdGifLFvKrVe31KJA3PAMThWf9eK1BL2ieJT2DBaHxwkZfCh5hy3uRtzTPQ3uwzTN",
  "key34": "4QbaiNx7m36Wj3J5Bs6kkD8S8RSoX9grDxTkXYjmor3oQc7AEJJ6feHvPxcKF5frzdodpma4EL9S3hB6qnJuRRND",
  "key35": "3LFkEHrfsx83aeKRv6kzKXPhQn8BzxeDJNVQD2PBTzomKxoXL2G63xNUrGQrNJePYJFEtsFPivtGP3uaz8teE8Wa",
  "key36": "5Kf7Uq2Ky8AkzbSr2t6QJiJAiSLgaggNFWhJKtowwpbzCfQ8TnUqBNxqxFQiDZzr6Esxnk8zH298GXYQKmT9guQ2",
  "key37": "5AWMd9aLPxvyWCCMavDXMR6xtEAK3S4WrZFQEXz8Zz8w62wd1vhcziozuJhCybLPX7XSTdMgACY5f6nh8nN7w6tT",
  "key38": "JWURVXjXdEeMrEDPSPFf2XKAESZQFejEahW4JDQCDMK7Qnz4JQcLNBVgQCWCZYyHiDFJidQfvuwFRAS3bxUgRnX",
  "key39": "2dWMeZSAAH6ToK5MjvAB5nhME2CGrxpPPb247gHL5VxbXqHtxqBAhbXEq6cSGn21uRUvHHpUY2sCMTV2YmzF9v2t",
  "key40": "5LJerDhdD57s2gv2YCRaFsda8x6XnV61E7ERxDkGdhJCcrvW4sRv6TvZCh3sxMxxZwBaxqNUhCmGsUFeoFn3idPE",
  "key41": "4kyo7xYv9sUSQoJVdeYo12gTA7iDDfyXhnvNCq1YHteRdTg1es3LXELgA4p8yyKrxksdU1fzUJY4WMHQLnkiB2Px",
  "key42": "4XcTMVJFHbLne7cAv1eounKbt8SWWQdhS62kAyhqTyexr3KjQj938ZkxcChhDYSwgsXf5E7s9fMHv16MzVzH1dSY",
  "key43": "3fgdEDvfdJJzyQYotKu3fxibDdV57njxfwzz4g2i6n5ocASWT7CwGxbxR3MPrpc6BPgcuTa3ZoaAVJP4L69QeTNW",
  "key44": "3LkujeHUh87dwq8K9rBFp6STjoCcF56Qz5PURD9NuiajrfLK5Pb2nMo8f9XBii5zVb4oCJdGWccyHPjKGfUyHDUL",
  "key45": "5Jsp52AJp44zjD3BiCLCMPukt5t128xMviQJDpMZF75s9vUR46z1uXBJyKZrY4XiDNiiT1Wpkyyh2mY6PPTgRsHU",
  "key46": "3PJ6KmTjDHVZKWLVNmJkxnVjcG2JX5SsKg9HC8UScYiBqcEmijX4STDbUFz1ui9RxDZruW8MMdMSZxPSXe5Ax1i2",
  "key47": "Yu2pKeVhDoodpHuWoDvLocgemZZznwEub7ZcEZkfab3HAT72f56U9SXQ4mGzLjGsRYgpZC9TmceHyynMLe8uy3w"
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
