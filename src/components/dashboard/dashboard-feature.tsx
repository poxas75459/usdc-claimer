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
    "39QJs9hgyEzQq589P2mHvjKXHpee5qEk98rYTdaS2uKjumdphXNHgjoGc7Pt5XG3xFYdShXFGV9ckfsfQ7Uhvgsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uha761NuyEUMZq5ew58ftmXFRiVqGA2coEz2TYgK37zwMnvrYiDkZ27f3a7fGDJFMoWnNmybheAx7xE6F5BKFUu",
  "key1": "4jAt3TfDHhXqHsPKpQFUQsTtgySZLSGCGu28tJUdasQ2a62ceT3CtxTkhLibHcZ7wj4fUJHcqUcBcVxFUvUyq6Vj",
  "key2": "2ac1xF7ZwoEjCyQiW9f3HTkJJfo8gdS4DTmpo8uwZb1FiWorcUD9r3XwpigfMEA6szy4dkHVbmK1CbGVrnCFWb1Y",
  "key3": "5VbxQriHBw4tQS66unLcBkYRpwXFw3ehJe2xAc6PLzo8XizMjUnTatsV2HnxxW5DedmCtU8diLknET2Kp4LS93j7",
  "key4": "4Lk3BcCgPnbWfzLw9yAxXQygrp5ktQjBw5J3nPhy14q62qLvH65AcLsFyRruxaAqbcNTGL2SKgi2TKWTCwQrvvUo",
  "key5": "4yXg5LFUpaPNtLuChwsWSMoWdE4JNv9Dm8SxYrDfWCFF3XHxHWvjZ2texqEiaEmAB6iokBfgHB6UUpmGXrwLQhh",
  "key6": "4UVj72rpfdv6Pt1WBNrGwZW7NQLquedHMvZCfvuuS6vjcVxrPhyxqEXeQcroPWjqwMG4BUGFqC2seqQrKXhgUfHj",
  "key7": "3FNPURgomtqepGJQzqH7DyW11Z6c15KPEY9PfWPYpzQ8znBWXxmgaYCy7N9XHvG2B328yU1vMWaynGrQ8PCvvAaD",
  "key8": "2iKzVEJ2XvW7ZS6jWN91Yw7rHH7JLZL3BJASGaBrJAKqNMTkTJTMX4g2uHatsB194AurvEf6nScNTAumcTs3DGcx",
  "key9": "5p5PZLFb3KiAjdDY68weBS2Cf9xtCUi9jE1pU6hUSG8bCLPWnmxxifS3RkMhBHWSFATasPi9S9EWNUARHbppoQ5J",
  "key10": "htmsPyhdbcVWbmX6ZL4T9dR9oLxpKNFVuf4GU4svZbSHrmK52XKPaUTm5nwxbQ3sQ6dyb2ke3Y16cUS6sPaESKx",
  "key11": "5mBiKt6bug1auF23s58R4GdhnjbB4kJKFW7v1pzTicw24deGFnHxMiB1Zkn1ouwxfB9DEsN2gvuigCYKkNA6vhwC",
  "key12": "3z4jVCWoFG63UgqrQxivmfL74Q6JRttC9faSi1nRTG2yAfaiYwmaAs9nS9sVKbodwj1QJYLx4bCZ43cdZ2RVqHr8",
  "key13": "5AsvH9hhMSJqdXWBB9cM9RrFxmYiKwJBCzDcPNFeMsidZ2y3RCmTfG3Dw1AkckapKw3CpiErdHQ7AXbPsnJzrJTW",
  "key14": "CgC9Xofpw5kGN83pd4tsVBj28oxUDH6yyo5UyeXZECMGG9KdndYF8J2M1baMTLNAuJJwtoo2jJykBnRumA5SkoH",
  "key15": "BGEFPgakMKAwLTqjZhBhMyC7UMEnFK24dxDSA5bDjvmjTqCjmCq3XdwqnGRCjrCrBFowEjE3miKLUoi1NxQXunV",
  "key16": "3XbZKT2GHkm5HargdZDrAhqPWzD6FzeS9CHukvTe5AjBySaPi6PHpuVFxQ6JsswGq1EXdaD4arKHNw3iKHwXGXNU",
  "key17": "PXfbZwkFcadGsfvMEup9P5Zvv1Xhgjb5szMegYJDewHRgqJ6EdQy2YFTHcRj4fWnJMRQ3yFiKq3pRHKfqXVU3Kz",
  "key18": "5yq74B8uguoxFRvLzcWeB3FCeDnbLTaKbZXHqswLZLyvSaBGJDJkU5ASD9dMZ8eEyHsBEfdcMJ5WeeEtVqgWqATY",
  "key19": "2mRemexCVeyybXHcSu2YFsNmxgN3VC9m4igNKzTdhiWAUdaQLQ89jCToaSDYEDH17D8fmN5jrRPWsQiQm83G3bLZ",
  "key20": "WboZzHu8Gptsuy7gs4bb3zj92CyVCAxVndpvRVjVYc5dbfThrrsH93WTzkVm89NEgFVYn8AoKDEvxyeTa1pLfrS",
  "key21": "4Av6sEYkzWSHuUsp2xRvhzCNVrkoJ6LPK5FPy1Ax7JbY1jtCn1YLbnLQCqx2TUDqq9ArQzeMswQQtpmEcFijq6Um",
  "key22": "xRv95KKKCFpRKevK9XP1sJfQkJQqM6ezJ2Jy6CKMVtyZ9cbGoYE81NXGoQNtPZB6TBpGCPogNwRGuJcQyYJjss7",
  "key23": "3Nd6kZfG32RdAY2JfjtNXHATs2hEThwKPbT9ePEJ6MG7rzx8aJdaWeswC5auAetnsmsUKqb44H7C5WC2EMHLS6UU",
  "key24": "2dX9f3innV24UNitFuNaSbfTCcYPUHfWApryceFBAZwjog58e5drhHYNQobzmWRBcYHVURLm5KNWaTKorX7fujPS",
  "key25": "bvS56uDZVYfpitQNjGp7mNNRWewVQ67FHaoSZBjp2vgYpPrppFMnQ2Lo1AcsUBdNbQQn8nhN3THHooEhCi82i2n",
  "key26": "sokdpSLrpWNGK3DmYDdHWRUszEWVqviwirJmLbbj5jakMHv6qPiHceW44BvhP1pTUK1WoGMyDD4vM4SgfFx8hYF",
  "key27": "3C9am6DNC6cdw8aZDfFMQF9jtzpdDdE2LRby28PrWojAXYqAX3JmksYYYNTJBVwtcrZDMKkrqLaGduqKBhP9Z3Fh",
  "key28": "3Wed2WDP3ozteHDfWe9Hvp477FvavCCyaMdzkEtBFQkFi9hnUiebbgd4CBVXijXBBh3xfmpqAEdqBCD5LE3ojr54",
  "key29": "2dWSaNuNVKK9KEah478AgrRTYuopooRR11k1pH7eMNyBQ9fQBdhxWfdjv3PqR8tPWPPP1afbEFrBb2S7igEp8oX8",
  "key30": "5r9KNRdRGHpM8cZbqbZqLdhbrdEAMRpSkkthVv32sVtmSTgFeYiPQpbK5zwWDRwXhEGjABQtywx3NZ62wwkxyark",
  "key31": "88Qgv1pmdwNjfBFfzYhPg7ebrH3ouk4Kq2Z9yADSYCS6ZaRMFuacbD2RrTMMNeaAywYHr96rc1G6GCmVfpccKNm",
  "key32": "3k1tgydPmpvjJg1DxkTHNBVnyemHKWCwtS9DzHS1jHqKCUh2CdB5yvmXHHgSSUaBk3WArnfZXFCgrvNabfmDBQiT"
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
