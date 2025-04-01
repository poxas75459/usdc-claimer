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
    "49nDrzeZjxFx4iKBbDjDAL9Bke9kNPwoBf6XD7F9TarBuVdN6To5Cp6hBHBDHaFhFKjpdXUHJF2xXzFVwsTpR54h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KYXrmGnc2PzHcuqL27NZSaFqYazZQzSi8K3EUucbb28W7bb2F2ePHB6DbeStTzKxmsaQeAo8HWXcweLkn62h1aF",
  "key1": "5AbmuEJw59eFZRvtVT2VHSEo9hBXj6QwQCVQChNdtuFdms4DfFuFvPptAYhzRAysqaRpTVieJ5AStapdowpAGtqB",
  "key2": "3LZmSC1Jb3UH6ChJSmBtNcMAhbx2VKT3vN2xyUwmsqD9BYUV29n75T5U5KLFL7mhg8AcG6vVYdkW9byMaTtUvE9v",
  "key3": "4PknHqobdAjCaPwynPKD2z6Q6WEDTaJYTf5LBrCddLncuhz2QKj67bo74SBAxjgD62ewqhWbitzfj2uassPLpbR7",
  "key4": "52tm86tr2Jn7do91H11tREQ9Sdvnj7EkQTyHYgAThe5VMPfXAzFeRWnb3UDKtjece1k4jxqN4kKtcEt92bVjQM3b",
  "key5": "2v7Y5zJkfuKmqfte4NrA3EFX8MTLZK3WREmZzL42BNXnZbqk8hXRi12HDDEdH2gWRyeS8drmzXgoqNhF5DmwPDpc",
  "key6": "zf5VHvBVYoQQPUyKUjqQKTxC16uGtRzvRoRHYEdxcYm99vAFtUBfopwYYipZ3hMmwcVfZL1BsWp66XS1FXv27zv",
  "key7": "4y9xBde2Cn2vgYjc5yGMTtcV155hqofEfKaPpezXpqLiVbSt1nAafZrL3v4VKZ8t2auNN7QbVhzAhpgF1Y27XsPw",
  "key8": "3YtdyZtkcnvvurEjVAMkWtU1Jk4RzCRuLg1YHv7KErMZM9nJwNNGWrTEpc2FDzwZYiqKdzBhARe3q4s95RhHbiKr",
  "key9": "4B8NLLfekai8gC6qWEHNWKUxFGx4remJsUzXijCceLvUTteWsAW7fjNZdpvcWV6Hispor8ePgCyDYjrs9CFquJdr",
  "key10": "2mAauoPVuB4AHHrWohryXLfixhEzna8eQFPpoXaMTPGGu5BhCVUNSqznFKhdCWMJ5T2Ub6rQ724fXzu9vVGBzHYp",
  "key11": "4eZnGpQs3XGY1yQ7iujsYStp3n2cVgXeMuWgiAWdHfQeXCcXupHRfFmNozV61Hv4hXsj6jJcRsoM12KtKFbGv8vn",
  "key12": "5ay3ffqULfMhE5mKRfyi2WRJqNEVWBan1Gc5Fe28XHvcZ3Zma8NxuEyZjx6S8kHDkYiEBizrq6w4x6zwPG1anVQ5",
  "key13": "2PJciwWHPzSspxgPQxnxzgxHUqEhB6HdRXvNSrfuXLWmBinF5CK9UogeXXt34qUJwNxXkSFVK8fPYSg3cyXUsHj1",
  "key14": "5G8chCQywdoaivwcCmvzafmZ1heZwhR4qKXRZKfDnwahNptcQsrL9xyMqyecMYCTzfK7s4FjK23P9YBk7DK327VQ",
  "key15": "3qQyyaiTazqiZNPXXcUgwM6VZuXjqYeS4maxLEtmWm9fv2Yri65pP3uFA1ucUqbnoRP2UwsNhvZnsmpS8g7cFpkr",
  "key16": "31Ma35z1kTngczpsnRGwVABZ3quD9pCi5qCdUQEQdcyrRPcBRQ8fNFbi1VDGuKWeCUu7wkwy7dY34Di3VQBU7A7A",
  "key17": "2MXgopYn8McKW9EtNaCSrHJ1UNyeN3jTpasVSFKxy5rcaZiwhWY27uCu9TbDJRq1vVbwwdAo5R7tasjTU3tFb9CM",
  "key18": "5v8rchdSf78BGeRKfUyVvPDkiGU1EEopNQcq8P3KtVywjrBwZ8tvVkxiYmRH6gh6E2Cbihjg9uSusuh2Jk2YVe4Q",
  "key19": "5awNTKoLs5e5ReLDVyE147aqv3LLHQoVpa7PtPWYoJeAXE5uYWhMxkJRZoMsd7J2jaoVxGELBKD28PtTgjGR4Ka1",
  "key20": "5M18i3wX72Q5TxSLjba1k5sNTjfxximHNsH5oLsAGipVt7jRYqMCn4BEH6cjq9xxFRAPnfBuKtntdCTHqi4UUXcm",
  "key21": "KBuhZuPRaeVTLiq18qJjpEuutq1FHucVhRHBetE1vWuiaVgTBBuMwkGDW6jS32JqipMo3v2prVqvqP99cddjADo",
  "key22": "5eaAiSdDS111qvRGFR9zRvx1xPonTq4AxiwLE4gqt5Aker3Rz4VsSNT2BvTMZfCH3DTBJkvKBTzZsZEbc26yGePb",
  "key23": "8rYmt1QFpiBMVZzqgr5wEnDb7tVRM9LDuFoeEK4CGGxtsynYV2WNVH2LUnt2sfQHwbP9PSD2sfeSv9qBandXc61",
  "key24": "2wdXFkqKApAcxeKEYj7hrBDXPs3mgVhxk36EZ8a6WyXTd9ZQnXEh1FrmWG4HppkWu8kxAbvTwKmcuNhnLyrjpoYK",
  "key25": "5LBtqeJmtmmtEXrn4qn7S2PzkqTNBj1t7vjwfQUKaJeTke7jxnR1uqk9NN5vtH6XYYG1i41pso9bLJigExhSde1R",
  "key26": "58sGCNPn7yVM9SVaiaG5DBuqKf4spmWtzjGij6znuudb4s4ndo5Rw1c1wv35k6sCJRwNQY6GZAQ8R9UhVJbauayz",
  "key27": "5AUDnLicn5tWjEDD9xZy5J1ErTfY6dcBdfKH35dyK81tMEsDgvCXtJHexhCm162aWbnGYMQxLJtaKy2tD6LJkGQv",
  "key28": "2RmbDtAD2B7yd5tkbRcwcG7tYf6Eu1dqB6MovCrwWbHqiNnQAW74AuoHxNSnkp9g9EJ6E9kt3ALqNd2LzyDiEfSv",
  "key29": "4tsVfEJmGVWqzi9UFP2vMyUvvyv8iFp3hCoKLXE3BCGQyk8tfFjLbi1WgsNzvs3CzchTUpuWvtJwZAfjYyZanvVQ",
  "key30": "4RJWZAZtmdo7eCGha9CNFe6xPoVUPbaSWpgvZK1kK5cio52mdmYCGTwmWsZfDKEmoMo7EcrsAnU9zikyXfM1AzA1",
  "key31": "3Door8mMeWSFNyg3pDwYDR1NoMjy9ZHQEM2x3vTCgEEPWcPkq5ZVhMgn7bYb8UsRYvoFUhqdNw8ehtQKhhRtL3gH",
  "key32": "4Ubi8uTbwDrpVNbDhPKrxNMAYaPGSqWSzec3VY1yD2Gwk9YeRgFb23vVsSCrGUcmzz1TR6ZjdhLUokhwsu4w6nP1",
  "key33": "37uyXvB6EEJ4DxajJuZKfGH1DeKiGeYSTWuUHhkSvJX6YFgWEAZ9q4AQD5ULeLDopLLar5ZQE7PM8hTWDfiD4syp",
  "key34": "4e9erMGw2tDqLwMXFWuajafrNnenmxESFFHdPQ5otKaTyjVRqmoDphvdhjPGb3rFnwph687Hz6QGedz3jEAZ1QMF",
  "key35": "2XoVLYAXVX2ao37kdknGTkTNfPgoNoBWh42XUGaUDRGx93cMyBXCGbzVzXYd2eZP3wwRLqqcrtfZG6XGAfXxpC6R",
  "key36": "4ufAeD8Cg8mAPhMWitfWzxqZ4EtTt3qviDW8Wbj9vu2JuN9mAmHsMLE8GKTd6zfxySQuVNzVK54fqXTyRe6JtA5X",
  "key37": "54sUQDS65xryH2o8YdGcRSHiqDg3pTKC46UqFXQrHikwwhwtAMUszUt5rh5wpp5niZhBEh4oFETf1kgeb2LZQJ6e",
  "key38": "3u8Hti5nH74ieeXryakStbUx6bCoTjnnnLWkM6zXo5Tep8EyBNvdtJQFQA76td2LwNjwm7R3THse5NQGA9heH4X8",
  "key39": "5QU4pjkqvDH3gt13U3HXVNTsW8Bgri38nZb8YmZPfZ8s6Uw2CUxfGq6AbN3jbwPq27YJMvGKdpBNdjNg3gT54rt9",
  "key40": "ZPopQuTgdPmw6RmcjH8i6Xs6hebjRTkRjBVeDBZ9pt5Fy4nBVZJWz9BYVWa2MP14MqDtsjzj15Do21E3DR85XkB",
  "key41": "2LcV2Pi94wyw4putPyPpVpcaucAqGiePfYHn5oTRb9bnQivuHgdzBKKvK5pRYhFhmiSuEDM4PQxc7KaHYVkREDQH",
  "key42": "2x4Jau5gtceANwX7kvAiDg49zxVV7nopFPw1oVTBBy1Pw1a3mYDYKSU87FDatDiDVcFaC9QEXMr8nbsQ8ziFyJj3"
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
