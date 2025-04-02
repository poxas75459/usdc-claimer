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
    "N6WLTTQUjx1UipYV7RBmZi5sdmW9KZExnrnenWx2Z954N3yCrUe6oB8GaK6snya9F4CVJ7osgbFrKR8uDKyb8HK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ZgKXoBgvaZp2YuoKpuvxv2jUvwHVuD8BuFtrMjeKnUZzU34nhjA8oBYz8TV3hoNnCowZpjwryMzWid412dBXHF",
  "key1": "WzQGe4AjU27C7xmVQwWnC8auiQ96gL2aBokrBev7v8ShNZ7UxvQpkLKqsDo6W4Jxax8f9CueuQsMTYRxctTVMD8",
  "key2": "nu5CegFA9vVufCF97Q6Hm33ugo6MrhUkt3nXSth2LjAxcn5nzJySdVL93XrvHieEjWcnnBjfBiFdZCQLv5G8uKY",
  "key3": "3Ry47mmQaLrYmzeA73pFziX8jSTmZRErBetjponDoVHStnK8W1H51nth7eG686zsN1dzSTbgHj2eZZ9sSiUk2vxb",
  "key4": "3W66qaBbWMgUEZRyRh4S3W16YrEvuzPVsfUydPraBvUE3cTd8YPMrew3sucojmWuRVBJvrQKqWMhoVASk3QA5fXr",
  "key5": "3Avi3aDeYGyW5hLxZNPAArz2JcRfDJiGCe6GV2i8R3L8d5jm8qN8wLDoKzpFM9b4zzqaNnhfXnaogRmwc5KXn6Rt",
  "key6": "2LMpgfPYXJEbxidkQvHy3Z49JwAo83fhAY68DKdAHYhuK5C5AHCsjk3Kn9RK8zfDaJPx97nbPRa1gkNRQwMg7z3m",
  "key7": "28R821a33cj3ncb4YW8up9sCRD3sr9mTY8GM7GrHYf2Pv9oxLiTxG3d2nMn2Ma6ByZzieqpBmiJnhZ3bB9Wos7Dn",
  "key8": "2itkyfBjhw4bQderhQ6FKWAEk1mhfgrs7CV8qbRj7E49NtxEAVCHpMXAi3hPfySYY4pxqzeBkWjP2vhmecAt2heR",
  "key9": "4XcFBcZWFjwLGBZ4BkpVFQHsX2qpmrEygMXdwXTf8PMnhGVypt5UjYvRk55pU5eoN3MkkBuT1ohM82ydcsTE8QvM",
  "key10": "3k1F9GShtVU72LLcKfD3jwSLUirCqNUYEeXeZh8hVxrJ5StYYsetaJF4zhBZ7cPCJLFVwhzVMp2psYpyWZVERUnY",
  "key11": "39tMciyy7ksH49oDXq2vyQinFWQEb4tQ7GGsQSviBkTGydWBVAABkhvCu9vDH3j7UtcU2Zc8iyTcq92XwiCPKCpC",
  "key12": "3Erpgem7AsSizkdRFrb6EBVBXRDoNAHLTTJUbEna8d1PHKhCAebsMPT6i2EqkP7Ekt8GMuVrr94ttqk8KqVShjBb",
  "key13": "XmFs3irWF9Qm2XvtpuipadpzH7F5Te9sVbsBgUUUTVctPyKYyazHwiKQU2FB5NjzeMuY1pXMJzZH6qQMY13eARu",
  "key14": "4NUH26VH9eBNuBK41RSJ4jmn9PGRSA4YXdP5XSTARj6197cSbPheBTTHzpy26axhYABVwZProZR3X3W1pKdcKy4V",
  "key15": "Dq3u9S2SE9avvQe111E2jSMkXFyKes8bqHY1QayYHugmkQA9R2JemDavb1wmqhf6WPFrkxzqLtwaFPHjtzxFnUx",
  "key16": "5Lzv7xHJCQCpBDkdM8YSvSAHFLHPMwyrpPKLSTWrThE3jhJPGXRPYFZKDJV6JYKyPHBsM7skBDZ7wPDYLMQTqPVR",
  "key17": "56fxFy3Cvig8qUKwtSFxyHMoq6B1wHGFqBpsPy6YZKBJcAu5uvJDo83Fqxcqy1MA6W1UqgJF1hPAM6UQ2tzHP1KV",
  "key18": "2tDhfT153eCTzHJVEn3mYGkLHPPsfiaRxw7kuzXU17gSYzYrfSpo1bivhxLohjYpsh67c88GuU132hf2kjZLJnLX",
  "key19": "2WAcePZbJ2YfGz8bTtq9jLWge9SwgnqfhGyVcShugwyFUXggE1hYxbrVk8c56WKywVRvS3jGFbsQgG1FXWCxQEte",
  "key20": "5dW2CQkParvCdKXLB2Feupb4KvhrNKZrpkPX1EosadwgA7MKCKG6gwqwGxwPXSQq3L1M6EfWrQK1bk2Ng5b4Ezy2",
  "key21": "Lh6FNr8WygmPCnTUDQrH3asJnk7HmHKZRLFdp9YqnKfndyT1sUNpcdkpZQRjDwTEfw7jyaCYGSzHStpUeNFkoXn",
  "key22": "5KmzY339GRshEDUcq1jsEAcaK9dmXBDJQooEUSHYQCgggr2YwX3NNymV8verMogo6JGeMudcSd5TFsMZ9GfRSrxD",
  "key23": "458RG8xU3mcmcqxuZrazpFAgU5xZppU9GNAeUdk7ghMGRjsSPHaoCCNcUWaNERJNVNNQmkokoHPpdXYFafe5NGUC",
  "key24": "3g3e31J5Byt3RKJ1TUjH9ZKUQwhUxWhETEwWW2M88FRwxmktvrZWLD44JKTxx6LvkMaGLmtCi3ubx9vyZ1sdbihW",
  "key25": "CMF5MXEigRbqzuTTQS6u1etpGiD7P6JabMjzpBBrpyVfx5EnG4SYY819ktrAtuvbNS8YxUYCu3twrZWD42qvTmZ",
  "key26": "4XVPVbCUFJAjjSpNzUbgvUDpm2kSzwUq14Nhq37LtLhMGmrFX2gjnDgoRoCteNjzxHHV4BLMR3YoM8h55Q3xYWuf",
  "key27": "9NHEkH7WZpWHP1kFrpZNXU9pVEUEFsAXnb2Nwcag99Z14o5bXzYkahEUG24NCGM9ufTgtbsUrJYKz3sM6MQofkZ",
  "key28": "2cTixPZ9QnhR7KtJHLXMbNo5yW5HS86GR2jT9fwZ8W5wtMxjQaPHu37cLjdeicuq1vvUVB6zHwuReum2d9dgQm2E",
  "key29": "3y2JhbyeC5x7ACmd7v6zMU3ZektykQ89VhW88dDVd1HW9TfQDEsZXwuBxxZ8snCXY1hRHdbXRCbcaw8EUKxrFg4S",
  "key30": "4zPdyGV1686WGPq6SFE1bCGPW1ZDDFHvpFGMja1jr3w7AHnEsEHkAQGoRezJgC85XZ5BRSFuKA6iWxFLuMVaucn3",
  "key31": "5CeCSQm88Eyt3ZDSVK6SUpaPrf57sMrjJp752hN8NFJDBuZJV3pDKVUbHBSSLWpfKTZxNwc8PtwKDRgPUuiTqNNv",
  "key32": "2UddeCnut1ApYczn2Tnv83dLcHum8jF8xWmUnGaj4DvYLPPcqNDqHknWmPn8s3CDgRHzik1HPzKcQSB6wbtHXtQJ",
  "key33": "5nZagyD8ubyR8y5dLvFp5CiA1gpYMmz2vtFnX4j7RX9n8Jf8169Ybcthd3eL59xNRnYoJk22dh7YQMuCgZ3LG7EP",
  "key34": "3T737ks1JUQjfHHBB98xwUJkuJV6q7CTYKfZwp7LPtDBW3UcsCVNXnQ1K42BwiaYUYS37cuZ5T3HaFcy7L5BACMy",
  "key35": "3oACvXJfUtFD5ek3y3MmQMv3XFN7rUoSRys4bBFaqSKku9F4rjJ7wfqZtKAzYNCizpuYGLirRxip1gumm4HoMTJu",
  "key36": "4Rrh5vzemTAgWAR2wxU9nhiG4Rstwe1iKjGmQz9SkD8EjTsdWarpeCNKs9N68DKDdaaTsmR9T5U5MpqY2iXzwmAK",
  "key37": "4cVYZ7FhoVWM6rCC454JgreNMmTWGFysgc6jX7ovo9eKTvM52h5GRFb2nE51fLRTPGQAYChBJDBYB4NQAKCBzXMf",
  "key38": "5iPpvzqnBhfFLJyMPudXh42vtDfhwq2CSGioFEcfm7jc1tehYTFm2hjMi17njC6KYbf46SEtSpZuYAPz2y121RVC",
  "key39": "e6B5scFjNm1vhhN7gk1w67aUxpeZYZjZxB8jaBbYCcZ49eR5sC6hA6V98mBg4u6r7TS6PoB4eaaMexiAZ8edQU9",
  "key40": "2bZo6rd3PUepzT65KP45sCX8q8RvM1FyP8piVczumzd2CDjWDJPYUc4t33fvretfzLkGuvi6tUxq2GKWtkBrJTe9",
  "key41": "4WtEaf1pjapqS74KHaXEGFhdjW3exVZHsuxTc1QsTBdUhz4AxScEpndbnfXJqG5sMXh6aHmajQEjaA2EpbUubH43",
  "key42": "5iCCkMC6KntKTdmWVvmDospG7ComFPjmXc7QS4eEB7tuqADN3CaPCfG7nacKK5cb4JUMV6vd5Zg62KVb2qTRqbSo",
  "key43": "52JkfgucseAu8PtPCqrdNZAdM6a5o2oNnWYTH3FQB4AubXgKCy3mVZFcTCEmrNY1b1voZNg8DQzMkYbQFvqfWoV6",
  "key44": "2SFNin9RC4dXSsJa79drReWRaw1sdtrrzGgt9XgyGR2du99rRdQyUcM1ooVdTRmAj7k6ts3yYHnSSacWHmrrFZTo"
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
