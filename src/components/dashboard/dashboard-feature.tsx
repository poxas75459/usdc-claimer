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
    "KwEjXQ1hEJNYk4D6w7eUw7iXMpqnSM1sjiFyuAuzWKJmKDSFYfe434EMAr8L5fQwffk48kzWGKw2XGAbRi7VRQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gFjqEvMK2MbwTMeR4wGX5H46VvoPnf3Yw4PXh7xe58rtwSifu9gtnnZChnrHogG9koVu36oXKr81syQXpp9Fb5w",
  "key1": "4whKcoRBzcqUcVRoCncLxMwFcHciFz33K8Vbawko8LR3AFjhXMyBowuVKSPSQym4toP81VibNiNzCCTZLg3yF6mj",
  "key2": "3GH9cbAUgcK5NFoRcnuZYQvjV6Ya4sSRkteuviLUJq8qzG7yKRUhQc8w1Y9B38NebwV5NDTTKm1EXBTmbuDxgJfW",
  "key3": "3wCDdwELx5ziAsghRrcBha8T6UDd7b6M9fxcoR4KMh7kXw8Z1tmEo3ZdWx6iqFe8S69r29eQAFFoXtUgb3QVPK6t",
  "key4": "56yJtKy3yKEEaouHLgAqbbbFsj9NhXRzwckaW5HvzpG57zWboqRt5U3EFpg1EtUp86rJyJfxckCtapfF18VQwgjV",
  "key5": "5wnu7cszv6dC9wb6eaBhGRGQ1DjXVwC2BCjp3UvK1PvDZFTukwLK7U3MXW3HidECWkXMbw2S7xSQxWauvF4nyk6M",
  "key6": "4hKcZyWHQQUyJQTQ592WbZ33uU48z2kyJbavEXJbJWhREkxY1tRLsiDr4Cd2WZTKhyDQT5QFBS2MfXBWrFHPZyYz",
  "key7": "9jYfZez9haW9KkmgPgZm6baLPRajuHdgUjApModASSyxtvgSTmwhSNhNuGrFrMnsu8B1XREwTJ5Edz3juJ6BbJc",
  "key8": "yuUhuaDzdrQxExPExbvHax9QVCZybn7pza1sbBuChcBYNkQ4aYC9X5CMGkdNjcUc7xGYVnU4U5j93HU15pec4Sj",
  "key9": "46qWFXUa7R64bJCNVAPCnpuSiiCMvCJTuYQwHMYpWJvQC29H7BRKChWWhg46gYp6isMof1HopdWja4FoCvAqgH6f",
  "key10": "egA9F5SLyVbCJ7aBaJC9o6fVVk1Q2c8BjTWoPs6t9TRGWD4vQ5XYZqNJDVnQxdKzog7dgwmLaS2V2BowR3axct8",
  "key11": "NVz25SsySwWZbemZn94hwtpvVuEhMsc3GA5Wc9rj8XLDWTzmzdXAaXigT8yuPZ1jFWNEccsxRv6bkgeyWaQ14CW",
  "key12": "5mUiQvv623BUDmh8o9i81ztGqPrPhYJgQzBP1KTR2u1YK5V7RWixX5Z8VvyPFjeDkHv7eTkJm4ufnaCz8KjeGAju",
  "key13": "3orwyNagSGo2MQkobRDMF1qitpQR2tZDKnGFSLAzqzmJYyNNwMrUHLBY9FbkanTrzhPnwu5Akm8oaLShQcaMPZXz",
  "key14": "u4tK5epAiTrte4kgrn1h43xg9BBtPRJCAMx7kwX1hQktUpYcmvgp1P7ca4Hz6Ks4XMDGhFL2d3s8P4VphG4Vr22",
  "key15": "DPBwWtxpdzCjGMc9ESDD39T5oqW8Y4Yb6PFd1DqmLM3pvwQNDVCfEJWK2XXVq8xMLtjiCiQgvg6Kocuti9Vt3ob",
  "key16": "3Uhw6Yv5xEFDV6QzYmDiUgFT9HrHYdmiLhgJnur8YuRGi6F11c5vYX5LTZfFYjnvfobKk5tXCWUmgrjQVWAjpJb9",
  "key17": "FMWT16o61rXSd2Wcm2BN82omBS63Geeaw4rDayfeKqRoRjihJiRcAvNEnQWT7oRJARxbxrPwgUDayY8GShJrjhX",
  "key18": "3SD7HFKBnTZ2AC2m25kgpapnje9JcBV3U1JWLQUnjzyAgedZNAkNjK7Kzy6CU1vJQuy9uv8vTYUw7wmgU32E5JxL",
  "key19": "3yvcTyQumfpUAs15KtiLMjJWaScRMMFusBQN5xNKgTaeyk1vCFYAD6zL3r2Y8h8x6UAxYxTtd3EDW7aYUVLw5akh",
  "key20": "NLa7LPFkGZ4Mne3RKvg7jb75TpeT21WU9wZjmnDhNgDRd4JowvMPWETRwk6xuzwbDcn76LPmBqVePPSotVNbUid",
  "key21": "5KqYzgbGLFF1aX2UjxupsBFygrspQQWeC38C3CqAAKoTirx7cMkzYyAGbiBkurfNNUvfa2xGCho8jRS4HnhyLLF5",
  "key22": "4ckUBogRXhB1DBAyEE26WxPAbJrCwuZv8R2DiEDrqQaDsd2kEAesiorDCvkc5Vrr1kFRoKxitAkByM5y7YDZSpsN",
  "key23": "CNquESre9fnr7aZrdann3hqojHstJbmXDppzw94k476Fg4TMn8a2NrBMX5mEFDhjbiye6VHBLunDxDS34mfsKgx",
  "key24": "4X6zbKmmszTrkSVtKuQL79UFVyAr9ADApZo3LysUwqihUog9vyNe6xZgpQvm4w5bRgCJSzehB66EKKfkfjpH8Eu9",
  "key25": "2RQVSZ4gEZi6Amo64JmWsvab72TmHnrwM7eEiTJKKddp7VCVYVUFJAd8NdfZXCaviok8MiswNszt9ZEoo9RvQNdR",
  "key26": "2YSqrHcFsKrYsM51r9fb8NbCmGznde4cBUmjtwFE1bwB13eQ35EVJmLLLc4hcEv6VRsFmAmhqWsTCLzP8y5y6wfA",
  "key27": "2q2AyonKzCYsbQkYerZbuxQWWzC5tDRjCzbsisav9baCpXDFBqt59LLbsFmewtzXsDrXov9HQX4KAZLfu6UHdzxR",
  "key28": "H8bteseQJq3eamu9hfeahHDy2YXYE5awwPMbLGzqwCynTnhbidcPDcREq4D3hrExaUFGANVTARWVfLUp3umNezJ",
  "key29": "2NNuDPkdPfdft4JAkaLwY7WysKcYutW2TkDUu1prkowM1iePNeqvz8DUus7EeHi5X2sYLh35P9f1RZMWUY5qQz71",
  "key30": "qrTGN25sWJie3erNsk9BuTXYXcr6s4kKk8D211RZAB7a3QCXNmsofDSgMpHuhXPakYCwzJS7xwaErfdK4ZokFBf",
  "key31": "2cNmd1h9TURqRUZS26iuYQTHfhcMwnV6y3H7cVaRAhMe9ZP4R96tecrjWzJqDyrzTq6bgixytKqCkLySRLK3AxBi",
  "key32": "2BjyTAQZqTurrC7K4wJvQstdRLktD4LQHCCqcVVoQkyAkyzhtQh7wUEPpSAmBmiM9fTwLUeem57tJPVmPp6Cfn5y",
  "key33": "34LzXcReu2Fbyr4fqkc1q1MMHpN29LPikEge7dSHCsRrqMqXjnfzQvFo9gX9HKs9sVHyqVpV1CT41DUzKuTyCvip",
  "key34": "4i6ZfVkXizukWLVbvJJbX7wzL9dkWXmwRnc93VXhsHCx7HSRkQHAZGM2d7JQEZUf7gk6ZbtwrsLitt8sDUZAL781",
  "key35": "3oWYM2jKiNYEFBcVzVNShxRUhrJ2imX25XU46XWKeJNgDB7skrF8oFMDW1oFL7B6bjKbMVLdBcSyaonaU4UGXjk3",
  "key36": "3koRMPMv3EyZVPCLB4vKoPmr5vM5Z1P7HKGemrJsjD8ZoTRRYuHxdhfhDChvNGMx7JXB9CFkVniZuUi6K98rGRJs",
  "key37": "32ELjRbJpKe5NCQCxazVdoUXYTRFt2cv22CucwmyAt7NAATeUA7XrDkH7sHzG5SGjL5ywyBXNGu6hzxwsUVDgrYy",
  "key38": "55LdWRYCicmcG7fMS546DzVXBVXQXkSG4ZXG8jGaqpwZvm6xjXFTp4wTVH7oo15tFzK68DZLsN1i3NX91Tk8LkN5",
  "key39": "5ZR5yShMLZN8ZMegtqo4x8hYjGA2t8Cz3CEWKWrrbPjWnQxL32ZsBoQZpZ3M7qAvoYgyihuzyyuzjmUWdzmMW1ix",
  "key40": "2NZsSfouWXDarXAu5M1XdqQfC1weFnoLSvcCdZrGiG3Zc5Mgmz2BwcNcgryuKTCRTbjW9oLAxPmvZWwWj9jFBRep",
  "key41": "655KWgk5YzsdXUaE4Zt54CGydXvmwGgmFwRDHLCaXgSjbqKQ6V5eLA9SisDwcugGtTkuyUY2gi3Gw3vBrjyFEf4H",
  "key42": "4VdYzMk2juPENJBynjLvNr3SxcWQgpWuWaA5sHTLbZxzAmUDKzJyW8YhFAH5LTx65ThKz9u6tFDoWmxng38tS45y",
  "key43": "3ihkWrBXsX5sPmsS3TfRo2EzT1ZHGLkyqHSGZm5ruNZRXWndtHjBaXHz5rFQrjrthgLCBYtHeJVzjqp2poEXsvJo",
  "key44": "b26FDpGrkkoCUhqa847D1uqLLW5mB7H74r419e79GuEz5vQZHUVtwjFvwGx3bo79CZcxGV6aYGYWkLxWjrCayyj",
  "key45": "rvCkRs4sau3RWvLn2exeoSDr7FmiaUFsF8ts44Cg7K2gWRgpuwe2px3oJDCf7BFEWnK4jVj3Zc9JxwsnrcRSd7g",
  "key46": "56z7R7Yd7F9Dnn8i8dqNCNa67b9HrZhhjw1M62wtf48uR3qZtXHZy8MNFUSiU3aFScQqwvJkF3hduzVNxTidha8V",
  "key47": "gwYo6unnjEUyH5wYxyqavVHk5uqhSAsqHZP8C5EtgupyYYPci8dpf3BXyVp5YUTEh7AvcpJPkj5WZrmQt7eLQVP",
  "key48": "NU2zwYQGnWaFsMbcHejBhCM6YMGeVgmnL77ehBDyAV7M86kuhTf4wWYPq1Ut886mW8Tufay2aeF381kgnocbooW",
  "key49": "4nDtCZp3bw3c3r56wAKV6tAubQZwtu47UXwkzYRiDvaF8WtGb9eNqdYbHZ6EZWGgqFCKVzixuANwdbooapCvom3r"
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
