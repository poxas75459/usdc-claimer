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
    "3CDZjukSCAux2keG7zB7z29TCWa4DSzK3KvGhjZvywz9NWDjiLhVfZe9ECmduVVLthXXQ2nifStyK4uPgiusXY84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qtpiNWfahUnVBxwgXte7C74HgeGDkQ6TCxfUf1sYkxrpjLXJ9PfPwc4BY8oFCYSAmtR8p5VTCLU7VQckrPKVf9o",
  "key1": "2MivA3AQKjGZQoNAN5egRfvtkgigiiStRe28z4BVxpT7xBDQZutrExS3dzxLFc8Nhv7q8rG1uceQpnofKKjiJZPy",
  "key2": "4hz1qeUvsnr7Mh1bbynwnqR8xVTbxSmyPVxqvTUdhR3J3yhWEnLgDtvwQB1UnTRZmkRiqUcRrgDzLngq5GFYuU7z",
  "key3": "2akUJViegrj8snjYMaZFnY5sgdSyYWsQyGkB4Su5FNqQcf6jaFRqXrDLaDBwz7zgV6ZBKTvR3UgNe5J6CTw5KExJ",
  "key4": "59BX9c2qENWxwnHeraxVy2AHBJBoinnG32JrU459CJpCvgBNSd5ejgmqXWd5YdMsqNiniN3NWUF1M8ismmMA5gR",
  "key5": "be2B4PjFZ8HXoJY8gApA7KPuZVhgoinu84pQEnvMnBqpN8MSg1MGCehktkCTZKSfTWgpHhZmNKhPb8ubkt1Z7Db",
  "key6": "2uDsEBqqoE8hycmwTTuWBkAXYbToVNTAvB6ntAv57sySP1KLoe2MYfMZzcnikSc1WUN4PczQ5L2JKk9tean9WeK4",
  "key7": "4r7P9rEeC7Mkob86Ubrx5LPdJFcLFFFarrG2WopFzsXd2pPoQVPBCWFyyim2AVuUBveLUYcJW83f4LXZT7keQvGt",
  "key8": "5BfCR8F78NKwwTgbYd759u21em1bhkd5WKGcBeeXLMFa2amyCWULsYHYkQpPQoB4BWE3sSCfuXYKKMdd8SX8kLMk",
  "key9": "VYeGJEXZYJ84zXoWWKWTZQSkceeSsHudCj1ApvJ6N6q7JM8ZMWRHzg6NJMZd3wfUrjUtuQRccBaziMvYxhWen5e",
  "key10": "56TmvLcBaFoyKF9KJdR1Wv72MAoxXhhoyDmPMsTog6emnFYi1uPE9k7VE5xjWmsXP4C1ASQ5F7XUbVyxscp5tgVC",
  "key11": "4MF9QdHXAU8T3kkYBWUkLsKrG75iGnZUpM4bvBRhtkJ6SXFA3Zq3XsdEtu5M983H9izwiRujfByUAik1QH8DdKaS",
  "key12": "3rdeMyZ68bqaMWsDzHG7hqXgYR7Fh4hQqTYUMFgT9GkhjaLgpvisiuPYDEDfqhcUmPL6R1MzjrmnFni1SdskJL8d",
  "key13": "5U3rCVjovrwLb4s762KakeGJ9sQ4ZbAT4tFjbLYSVFUqEf86rCb4Tw6xcKTtU8pxioNQ8nmh7YNmLxjPE4AeVou3",
  "key14": "2HQTxvDT4h2x1hDexNzXdnq7mbWaHvYh7mBzq4x8xqxNgU8DHTXAPvYJ8FnhtwZu4Vi7twkwW4kaUBgfURaXAdRJ",
  "key15": "2iUueqRnSQdgdx5cwo8MVqivPh2B4Q8yrEUXquvJ4bdKCDcptT6xWAbBBchjfdq1jxLMEvSpGmKxb3GvPW6yfh7t",
  "key16": "3GpUaagEUETKAicGyuHwN4TwJq7mUjZ39FgJ95k39nPREmzeFmFnuuEVyQYVPSAhuvazJY1Ydxs8fzm1ogFZLVe2",
  "key17": "dbXEj9FsvakMGgmPtSyDRahSrRinWAyVxPHKJwETSqbxGhfatf1Lkmw1fHo8isz7fiLunTFdY5WdZQkPQbQhaTU",
  "key18": "4HZwhfySv4hE9nqc6WuJFDjLUXw4w7xbDwBNEFfwvTsVeij75vpjzUx4dYtjoxeaaFESj8HiGiyB1JN865896RLS",
  "key19": "3ZZiVQHD61Ma8vCK86MNtCN3eaZPdCM49CZQiXaMTv47bTwfbR9pUoN11PaobWrVMrzQdEFUNSAqQXNTTZo7337p",
  "key20": "4ZDj1WJUVK1wxWj7o7j8jieFqsK8tbS18FRfqudrRsyep8eo5AzxDeEMs5UzdQS9PEVztYLe6fBWNv9A5YDYfkWM",
  "key21": "2Bb6EcFLMuNwFy13azk4R9eUAzwumauVTQx8jAb1oHWRxkmRKqJ9duCCRjTkQq966AwxyLrRijPNWPy9hUHu5nr2",
  "key22": "2kdeCcXmPE7VFv5q56xxcY24TTtoqGXRrMxvY37kJerMhHid2n6zfMALHFqZbtV4SPkv8HHQmQX2mqR2KCb9aUcC",
  "key23": "QU16N3WnAipSCeqVRinbwHuVDSdxjhVKKKvggL4pyUkkRuwyywZtjbVVuHaVaN2qEnqdmASEXk4pMNqjmmjwpyC",
  "key24": "2N4nCMk4Hj3tGQUJoAv1ZYeA8WSpcAfCHE4pbcP7gupkmqxuP7xgDajMqtA3kVCsbL9JYSzMcyNtzEDdEnheY2SK",
  "key25": "4eRMhsBaaniJcPhNoHq8FEQyXt2heEa5CmtWdKHnvZDN3Tn2uu7zBwzibcHo5WYXvQsdBDQ7rNgzFmK42D2tZyXB",
  "key26": "3gT6AHUzyawMFjXCRXdCJkkdL4pD8qAMLgp89bcGLnfEXD1NAChVwf4F5HK2mGvVzsSEBVzEWrk8axSRqyd6F5SW",
  "key27": "47AnWFbfEFG8cdi8r29SJowRAugiTnTBYSUyiUKqLJg7CdGJiTLnDVkUMS15CKcjVuGYcW8sX1zGsoTNJsNt9xKF",
  "key28": "43YeJf9f1sRqDzjxL9eVuWaU7U3TVTmkafLrkjhTRamJhGqrBJBqfuWYUUiAD71izgbsYKAB7x6XLYiScF48YSxb",
  "key29": "53r8Enfa38aEksr7kJRGdG2aexLTgsttGLC8GEqykfAYA6cM1wxjm1SFVHsiBhEejVm8v2Nh7TB8u4e3a88bhgPZ",
  "key30": "2Z2KTq7Kb611JGumQ7k6fF8sACyGTdBDBTJcKmuNbikV4t9DHoN7gbrA4gogsPvYMtj89aQvKU7ZS6jPTLBAQW5W",
  "key31": "5mG6jSDx8Tmc7WKNJhm6JUYYdHW6yDUuEk8iBVZb8uMphVXkijKzzokBrRxEZqtGJUuY9Yo2q85VC7VVxXj5jEsW",
  "key32": "32EdVKUbFW4TR3mhmu1gmshZiVS1jCxN8SS9eSZpXb3jehWvdABwsxe4tRCcoKfxkL6xumZScmKh2RGztf4qajTp",
  "key33": "4VBQufzKpSK3PHs9kh1fpGyFi3WKcebb6Joz2vRNbdFfo9yph2wz4yhKSv8WbPKXGHRgGJrjvpUWDLjh3yZpw7s",
  "key34": "4WYiVZHgeuAJ2TgWKxZgMTYPaXW9GQVeewf7Wuv5gRW7wpgmfAPSdaeV7WbZ9XcCtZ85PQafJuFjLkbqMNeaYfMs",
  "key35": "1gfCVr4z8Pdpngep21uFq1tLq97oYkckfLUdgT1wjAFfmzp47JfYyLtHDmPVjhxg5LAzzbvSLh2WNkEjzSiRAhk",
  "key36": "5tHBr3XUN4TbVt1axv3NHpBhNGbsNLS7ciWPHQzJx2zCu2HSoPQY1rrK89ixLwBWmjnbGipV4XXogh4DDvou71HC",
  "key37": "31J2pQx22VgCYcAd3koxKmNDXajCy17FxFxSRdk7sHZ74ACoNb2bTQtJbBWuPHCpwoR3Xs2fTruYJvZFm8RCXqEx",
  "key38": "2gGFxSkWy3vNmmAnzgYw1noFsbjX8zu67nrhKvcDajykDLDagRE9KsDacqtu12QDNXXjSx71ohQU5VrmmhsyHRPB",
  "key39": "385r7oo4GKit5NTxTST6imf8P1KFbUveaoMdjTB1dmBuNTsmc2ox2V5bkTh2kmFhJp7beGWBZEQ5MB14ENg6zdZF",
  "key40": "2dtvYVkCz1vw4z2ZkNUKGP9RnawXgA5f12sYL2ruxVC1ypRxHWMkZxijU6kphHg8kS9eZB9Tq1MYPtPrXNMKMqsV",
  "key41": "4umR6ZWsbU79NcsS9yhNVRWLwKoChrkUdtYCgs3YoSQhcVjmcJSeEyxi87RV2AuEUyFRZLeY2exQsEwKLARs2iNi",
  "key42": "4c22VkmfpExRG4w3CQ2VTxtXfV4mxarz2Ny12zZmBSMGExc3pzNMAtfFe8oGPrXXW4AWAqTX4rXGTvRwDTqKJyzH",
  "key43": "3Mqku4VDmbmB24qnqC3eFxFS2YajR5jcahTD9MAvnokNHMH7mYs5qa8NKXQYc1BKNoZB8S5L3BQtqnWtRGWeMCBC",
  "key44": "5AdQ3dSBYCANjJe1GUsXSHMLYkNAM9bxKJ8tVptnsufHUanm4NFtx4LzbWHGEBp9t9jbrpi5EydSGj9EFR4Lx1zg",
  "key45": "51fjvG9dp4QXJh5mqp5fe1mByNX9QqR9c18KDAmsPkP5jnNxXDp6fk6KPHpvczp56G1xMC6PkAGrBH8Xnz3ftKwm",
  "key46": "5ErmSZh4qB4Ddu1jjHpJqbVGeVeX43fnTyPF7wDh5A9KRaFvjtZgUrEwLfqQBWcRHXEesnjACgsLk7DvkUtf61Gq",
  "key47": "3LVzBQmPVEd496MzQFEoRSNLCR61oSzpYUBxaDr7ZBET49iXZ3sbw5Augv8Q7btc7qZRfV3p9BorWngbRZdQjWVm",
  "key48": "4df8ho7PzKJAyK8uE9NkYZ57oSf3fgHAWrxxkCiyENpfncEugraSKv5f4zxS6jpoCC3gidJswdEoekRdYJPNkQBx"
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
