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
    "29rWGiNpRr78JSVPBfRw2uYNBSaFAmawZowENgfi7vUAP9fm6KxPNmdrueaVgDUbcC3QtfySjN4VsF13kN88Tfkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FQ8BTgSbSFE74QwirWHngvmM548feBG2pooGB7yBQw2SirSbTsstYDi9NJ59wgsBfitCEnkufTiF79wuvQsiwZb",
  "key1": "tj5ndoqTAy2m6uyBCYcGE4fKfMxWB8Q2XUSq4ai5663ZWfeGk1rKB7ezaUmaSMhMqUq5vwD5q5jBJA3W7gm3gWn",
  "key2": "2Cg1jNa2yHiCG3Y47v8PBzTaRZFDMaock8yph8v7u18argkZ9DYHZXBMa8HdqDNbLnJRQ8xh3ZdUT9khUCsVn544",
  "key3": "Bc3RFcJX54LExymkgw93s24M5KAbidDtoubeMgF5LP3wBD7Mzkg1jom76RWrL2iBVKsNzMDojJrh6fACGdZbPfM",
  "key4": "54imjQ7F8yxTzsKEK1cktALhi8S9kCNQLqF6oU6GmrF2Sq6teEoxd8MVmwfaQV56sttxyPFeB93zHhsavKsUU5Lv",
  "key5": "2BmcYZRDwixU4By8AvCLvsStr5V7XBgf1eRTBMxetr6BRPAxEgv8zeJk9N7XwfXv4GKDboGttYCCfMXChS1GAneV",
  "key6": "6pSdrUUHGeaJ1RLvnnXwPtkYXjW9waYGYW5i8XjtrmRYDHY5nawSqTbJxv6WgqWUzji9wqMx8vDq2A8g6caCwbA",
  "key7": "61hx5qk9cesEhYyGXgd9MFAgf7XCd2WsPZQdGwbdf3CtKANUQNCsR4ZJL4aqyzxtqh3Bm97JcPyQzJifGDCMRdcX",
  "key8": "3xXoviMefKdcaXQ6ZX8xFsJWz9kRD9F6TX6JjC1ui2FjDDbMSQnSSUU2k1SxmDhnDVtWM6cLkaN8rAkiXJRT5PVR",
  "key9": "2gpDF3xDkDjnFABKEHyBLQd8VuYpNng6XucKzhycjnzsEEnfpXQu16RLscD2Avp11WzmJ9LTFAjoq3DavwaKqww3",
  "key10": "3u6sAbvfFh7zCaUtMCw8SfnyuFUwY4L6iPgE2xBizHs5F9ptEQ3egkN4o9vdc6NxkXJf8tU49rtkYXQoMYiJnfTe",
  "key11": "3pwPHDV2prLmuwXzA5vAP5JqyeUi9wsv4suFNkwYTNw6jRUmjAQit6byipsKMV3brV7JZNpeRaQrVd1VG4xdERhf",
  "key12": "2PMEPaptM1QKPU8BqQbwosaqAbRM4cbWkjHNGp5gHkdNyACcZ5JHTYGduEAWDQ8vjMeKqepauzyoBUw9rkw4JXUc",
  "key13": "24cMU2rPFffDkyNXAfCtBtNn2Zm2MSHYwmyW4rjGxwErC5qzLkHgFk5AbUHh3n1zLLH1aUAE4qZKrsLPYYKJmTcL",
  "key14": "34JtDFTEGDjPHpoxuGSDTpxscBvkU9zZAnubpoK1R6EezPpuDTuxETspFT3kFPNxfiR3M1RciLPkXJYtjcY1JceS",
  "key15": "2yPdbpYJ3VtcQzs1ayRXR2wNRXfwmpPvtyLkSc82tnb5UWc2fyzhrgPweN4byfE5BUboiT6zhXYUA69ctcypbDk2",
  "key16": "4EZy7SCQ9Reqxq9b5ho8Q2myquaZt6DkHsgqvnroUVorU9L7NGiXXjHMHkurNz7c8A88fqS6JtXsRozoXLTG92o1",
  "key17": "5L24brcVELQqwt4tXZwaZzD4LmN48TwDiqQ26XYWt84v82oyLxkAq6ur8cvsPnyzSMBQr5fYwyjiodzCRJauTz8v",
  "key18": "3zd8nXpKbi1TWJh3g77qAVLC2BhcxUAQRuZnVhRCfWsgrbk1n7ZDK8y4squyzNKJ12gSnXduStUT5g6cuJeeurrD",
  "key19": "ArsqugNcZnQu1GVBh4vrHso8U5qiCSeCYpJRFMaAXmkHzgAdddynrJGML3RyQ3ZmkPw4rfaqye8yyG8tHvpNHYk",
  "key20": "58nqjSEA9uw6tLmkmpbyfaKKN9KUcZqQYad5fQcE2cZWR5TiVqLpLFowGgfN69Fhb8HLR5qXhVtQv2vkUPV8fRmm",
  "key21": "4qGA1CwCYPrXp1pTqipZQd6HLcKgruGQMKeQYKbjquA5YDkWXKYgHkN3qemjzcn8X5dBDUrYro1aveDTNqG1gKxy",
  "key22": "4QG19HVThfzSGiTLBikY5H9uLRtRXfAp3inNxnRLEmQ3TeEmpxSNGgULRNrYvy8A6kB9nHBJ2kw8TC5fJsr4udyG",
  "key23": "2JrzXwWy4XE11y8wDmdZF89MkRPvmxYz3nwRJSURQuv9ejNvQ22hXsSi3Fgs4vgkfrNFd6AUyvs1jQc1Vbf9RGp5",
  "key24": "4VErW9H7KBVESjo6mnC8EJshHcHrH4tQGK66QUZodQPG1oWsjMUvRa3LwzdgCcAp4jRJYFvSrGjaEuWPQiFkDa6E",
  "key25": "2QryHgxxwXe2wCoGQM62rUwX9AtzsnPSaoHZiFQ1pQ7iopJdjsEuz45rPNqvUjzWH4H8ht35buz9SWXKWoyzdiGZ",
  "key26": "tZxFdXptszqChy43XKBeswwhCyEusHPtooKy3UGeTZzz2RYVUzuWAozrEBe5dpXDitHyBytKuBq5KkwHgsbcqr3",
  "key27": "5zif2NCCtPQtsAqwdLkytv7UdkYuikS6S4fKtXA9BcDYEowUcKFSwTirvDghyYJdwNZBg8S2Aax3i97DB886f9Fd",
  "key28": "5sVNuJgBDSDRQCkPWE2QzuXYo2LVkbnaCwLg3LvmnTF7bHppApp8MBdsEM4jE8jmQyULNaMooWEPfpQ6ym3msPYC",
  "key29": "3cyNS9p8rWKgjDUc7eYFGHSkmQCG9wAQYeWYmD7BugReM6yAauu97uvt7Wt5cRgfKcu5CEsQHG3EaU7VQMR5WSG3",
  "key30": "4HJco2SrkcQYfQRMJyhvkdj6HZkkz5VH5tRu18V8gtvboHmyuMvHyAZpWjCh12PU4vqoU9VxmiK5puTNXDnqm32J",
  "key31": "5smM3aYHWvryESJewT2pL7jd87RLRZVR9KZ9pw8jxVfCkD8tkQQo4ZGBSGumQFLbxheCFVWzM4atMBPNXC8p3nK5",
  "key32": "41AqAkdt8k4BojTCgUan14KwKPsuPK3hijaBaq2hk7uymp9JbijTPqqDvUZD7PhXCoTLshgarGe9oc6gtbjSJ5Ux",
  "key33": "41mcRgunpa9bXfdyQYW7HrqNhdFnWYTFHkSHHziG6XFTJuQRFKJ4VDo6G5Svf3ncJTRxFrngvwAVax9yq35vWe2",
  "key34": "VQrPt1WzFUFaKpFjEBJ1Sj8sDhDTy9UbiUKYwr6bigGVAmNe3obLAuzSWRYAptscJfPBjvP1T1gYg6ZJByijDov",
  "key35": "iV1r8YKoshkL43CZF1eG7ZntMXgBiUxY4iFbrSWaEwGmyHAa2hZuUYeiK5fUGYvPzoJe1Ta3iJGTHTJFQJZNGp7",
  "key36": "3KuUR5uXfCWsr6L6Ry6FF5zYZR5qEi38noEagHFJLXxQj4d8L2DxoVKfE3Eg39BYa8Du3mXDe9ceSMZfuNAaFfHU",
  "key37": "3F2Ut37Y31ZwnNjubKE2tzi9KFqxSWYbpmhxQFb9cKFjicDMMqFKCFrCACrkmR5jXk9EQpCY5RkhZTtahUNp2g98",
  "key38": "2yuTyXFAy2wAfukYWPxwfCL8mQTVZiy6SgAQHs2f33EX4emX6AJfBjvG4kv6ndQazaBNqvxUDdWYyebwnNqpJM1q",
  "key39": "2GEMqfwARYt7f26v12C5pkHHTP7ApDF1KgDDDHkD6ig6ToyrSpvvwCvSjZwztTXr3VZeLaVxbfgrVpnJCZnN9Q4b",
  "key40": "5R5ahjHwTNqwcJy8xocu7vV1xm8uCGzfZSe9YSHtA947zHwwWvyeZJAYoAfYsQCAzUUqr19aRntAtkvvH42zxTBq",
  "key41": "3m9pcm7yu4wwfjfb5zYrV5Hr4Bp2k2oNNKe39BgggzHc5kFr6VRHD1tUjP6zTEJe9ZtqNM7Hb7PknNCaUEQHug1v",
  "key42": "52MQWTYn2XLkEwt6snfGy3mw8KcGEsC2AmsM7xbGuwWyRuEg2fQgSQefsEVrCVBhqjjXK4sgBWjFejaUbXxW2ByQ",
  "key43": "2wt7Z3shZM2MefAN2tVWQmhodpAYSgkHzjXS5UcihugA3ajrjSeMzvx3q2uvjWTNkyHaqVXDpXW1P4cjFmuHMd5G",
  "key44": "5gS2Wd1G1UsqFnPTTW9x6GX6pZEEecfbUkyQCLtci9CfMcUkSd5zynyBZykp6ZLpvjDV6CdAxmBGHJir9CSa2smS",
  "key45": "kteCRV1fYUkE3qZnPtoTdyXDhiY9ZmWKJvW5K9gg1ZLxGGjM8hi5CLZkFuVwVJkWNfEjLuF1z4SnuWZQ2LMvHnV",
  "key46": "226w4xCrdwdcrX6KKPtjPNGEy5qbHn7xax4B43UsEPWCyk5WH9ZxY7SHucpa1tbGSoJrSjz6MsL5eDs7GBewSUkW",
  "key47": "4NdskGzGRKZuJMuay6AM2n1BWYjVBb9gnWxFhqxZB8538pLEMVjpWovXcGSDSEZwA4BGYfwZEisdzKSGskTk2wVe",
  "key48": "5j64kcmQXQpib3jKtsykdr8k71jzm28vf6a25dqciL3WETLkvtMfj8ZXPBsAjuYCUdgeKZzfCa2bamB2vxevDANC"
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
