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
    "27rX64EFYUg8pnCqLwkzqKyqetSuajcG8oRnJKTzbUAk1FEBPWuFkdYRwh7mihax9WApNDMBykW9aqPN8mPrFYHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56XDo38kWk23ZYoRxA9J1ZuaTv3d6FBWW9yWChN98T2BifWhdqWL14M4uzoaMiCdmyFH5dgVwLRxEECk9YMySdwe",
  "key1": "N2VcdMvgmt26km4sX87BkNWU2QAas13et9NotZsHkhfSXRhHfZycwbXq8e2gaaXxkr5TLSMCbAyDvLBZsRuY5QW",
  "key2": "5ShJXff9sozbAU52W5b7xUGtxxUpBGcjiTxtvbduT6xrjJm4KDv6csVZn6Y4t95QmNBfnwaECxA13EiKuQ4VDU6S",
  "key3": "5j4s24nMzBkqeGjL2Y1YBGhPXB9xvTYx22yeei6eM16XSa8ieVfoAdustVb482qsV5jU6PuugES5h4BmEYt3p9Yu",
  "key4": "5TDjurY4DhMGGjxbNwEjsr2aAxmyMhPghSNfh7syJaupvN1KQWgs3JHM9yTdjXr9R9wq1PGEoY4JN7sqktGBA9qk",
  "key5": "5Kiy67sQ8VetXZyYZgiy1e4HxshBBHVJtcYranPH5XmRqtrJP6XiKjYoiWzRxLP6PmaafFxUmSRt5FLRar7HZqKe",
  "key6": "ZPhDWDcwAjpYZnYXQVmWBVCfo4vdUYXMH9Q7zBwXKXqmf9xjU2YUzRZSy3BnywFhCWj6Kmv4ieu9hFacCVCNSfB",
  "key7": "5MfBv7ZQPn8heaep9xPyEjESgeVNwMN3bzXxBoa3r5vTwghMy5SZ1ayi57SE7QyeGs4eLwXRjP7X5tcHdoHVtJAU",
  "key8": "iHZetf2mf8tK7QnNyccMcxyZs93px2q6799fcniqZrYwDMARwboQrfiSrdNwsMQa3YnWEMw8YMBkmquvZXqhAYx",
  "key9": "qxy7sRYGktZMK7rQh5qzR6cYsi2Q7mo85Y8Vkyyyrum5kYTdgb4TM2AvXAPt9J9cjK8eWgHw7KEyrc6czT9g7fD",
  "key10": "3r7g4HJ5G581YxY4vmmPMmnp4adTJHiM2pDZPxonekKrXdpr2aLCqXBq6prFZ4AMJqCtbwXqH4HgGv7Rddmit51K",
  "key11": "4JcMEj3Q5y3VbbJzqHN2hsHpjgrJpUxhNLyt2DSvK1W9haavo1tqwXMixXy1Rt8bX1AdC2jeuiaZpMAxfYmJbxAy",
  "key12": "1YKd8Wwxo9iP5qqa2jgSQ3UJJQEygUcW4ELaDvLaVFxfcMtopfWtvjNEQV7uW2FndZQh8BTWVd6i8wStegsu7FJ",
  "key13": "3xcXNiYEBSh9JuQgaiQPwM6ZWSqFzn2huwSR4AvAXYknH5HgaWiZ6GU8Rzk1ByWihDhBoG5SY7cTLGGbKuxxZ3WJ",
  "key14": "3iyKXJ2PQ4iv3d6wL5JX5wykZh3MZYZGHA9tm8L47g6wo12LzaoieVLcSV3J7CWeTDQgKheGC5gSo2nmycnrQSYZ",
  "key15": "4hXP86TJXwL5HsbyrF5LjZ8x2QS7wR5RE7tPpSjByqgFLpae6dkPMHwtdrZ2nvqCa6Zpr9wXbJio9zt4D87bxVyN",
  "key16": "3zRstTMVPybaAakuPxNSuWcDf3gzu9yFahwEJ4B73AjyD5QJED9nZzs2qbzNEHaC16gUxQ8N2fw5g5hpX7x2EMK5",
  "key17": "4QwgY9VGbyQRbaT4zqzc33mJhAbXKU8Ryvb8Tx6XdtNJetLcSofnwoBFtCprVLapynjgDZxD4xFHQL2QFaGuco5Y",
  "key18": "5KRZ7bPJuKSitff8awFuksE49Rub4xDgc8mgkH8t8cG6M3NVGt4csC4umRTkHakZQ5FuBeMeUTdxQVXHk4rsnXxK",
  "key19": "5pWs4AGwmEGJzYm8HuP12NMnM4CgmMjqTw6XU41i2M4itpBnw9qDXWYe4zDNHP95WiNixZqh3LcFo1G5RrFFpStG",
  "key20": "5pZGhKvpBsBZjUgp6EXvBN9ZayWAv3UQM66gvF7G7Pz6UmMCr779YGXdrgVo9dTV23woN5X4NFczoJ6RWJrhnzpM",
  "key21": "2pvAdKyq3sDXnmkq2invvcW3SNeiDNzTrJi9GpEwj8vrqaCte3YNXepAy5eVqrJKCN7yu16LqnnB2P6WahaHotsF",
  "key22": "2usTwFcc8M415G9DWjGHacMmNJ4kZryuEy2rKYevfCXioUX62jmXz3We8M4Vfcp2SC68gfZybt5ok6NxNPJzfD2J",
  "key23": "3ffnBJbDXVMHNnCaAaXg6FmycNvdE2hUzpc8rgk6FPF5QA3Vw7SZt8DmakKkbso3dRfF1BJ7ULJvb1WjX5BDqccA",
  "key24": "4HzY9XqJ2KhkYfdeTZTG7htShorxxwh3BtXDTGozehSNHADdHPEkEFQZEKyy1UjQ9fakiPMBQuChju7ADQW89hpo",
  "key25": "2TdxNCdqYtmZbHP3o4DHwErZRQBMmVwNAEUC8j3FxxqKJbecUb2RJswFzKVge7Sy2jRGnQefJiaUHp6RwhVs8xDG",
  "key26": "4CzzMRvRJP7W6JLyebHsm3NFANS7uandgPdkEmEyRcSMyWrvkLr4VTRGyjtfabdaFABd1jeUJ5neNPcRMusoLe8v",
  "key27": "5GGK1eTSrCG2AEM4qD5bENgi8qkzAo4c1yAfEywNnQA3JCzTru99Q5XbJHRsWCinKHv1kgDoyHBZDyn1RKdNuD3M",
  "key28": "5Rsao4XTYRgDEG2998JoUMFQxkyqn6f7vrD7GtGUv5PbddrGXkySVxmWkUcxtEvt8LEXr1y2ThFfaWkSuCQosLTE",
  "key29": "3dms3x9U4nJafLsraVz7i7qhYWy1Fz1wQuQhB1cNmawYLH8BiUrAyQKviwzw6ieyqCg7Z4kNuZhtAmEtzJ43YaJx",
  "key30": "BRFUAGj3ATbxseEXTdQcYBe1ty4ZpsaMqJc9vzxfVJH9eUnv7Ero4w1NthaxQCcbu7VY82XYjBuwXoKV6Ype5wE",
  "key31": "cjkmUxN5BqsPMZ11JUp3uu2rPtss26ctV8jssn2KProZzHrYhSEVYGSfwiq2EzF7kQFLj4TPQYvWNSCJbxY7us3",
  "key32": "4JCwtf4ngehB1QWSqJGABCZPAFRJKM91afk79esJueohNQZFRGMLLzvALwCz4BBiySSkWwZk5k357TJrUs3g92bT",
  "key33": "2jxTdNCdqncv76BnXyEknrKkV3mHCHXptiXTUaBBjpmQbbKqwJASYuqB7NDTVjTycRK7DYCr7FHzxAuuuBnjqGhY",
  "key34": "3TsPj4Lz1oKgqP3tZB3daTDLL7mdxMPWWJBMK8xgztvHrtdSmpgNwrxBDB49QpaT7jwRrLrSmZbzTd7x4ZU8eMQp",
  "key35": "6BZd6mJzpMvP5RQXXsnsWLbfKdbwEhma8NLc8kzaZ2iUFvpVnSqVpHH8wNcUwrUZsZksnNXcmSmR6Le9jSA4son",
  "key36": "2ejsrV8tfRET3EHxBtr88Y3xZujmd8T5nrb8zybYNNUqwBu4CJryrq8d6k9Vh38X745dzcyKKSp6ecYiK3HBLHbP",
  "key37": "WghraJohHSydHf8gD4R9ZF7Fut1CjQJZUD6gYQPz5F8soVWwTBbLSTjd5DqfHKGKaa8eJd4ATMurpMMqBcsqUa2",
  "key38": "2yxgvEKqarL9mD8QWt3gLCZveLixigu19FdKrrfmp8AECuCv4ESPmUSj9YdbgWTw4VWBv3pKDujTVfTeiCNKGTzF",
  "key39": "3bRfPNtCvLPjShHuEgEZ1KUb8VGKar9QQ6VFKET8ytogtHpV9sKGR4Whri2KHt7erctmimHAPkwgMJrvdpTDJR26",
  "key40": "5W9U3xscVeeuQeTBxCJdNFotwmwbTvFKYCLhKxsKG8x4w9MYBeFUDPUM5LuaKWgPgcwkfiiVgQ2r33A3dVatSADP",
  "key41": "4mTDCMoBCpHK8G2GQoNiF2y8Cqim23BB3QnnNHw4JWcAzyXJ8bzv25fCpwArxsXG7kGpv7jjo2wviS8n4CbZLkGi",
  "key42": "4fdJiKiQNfUHMgyM7FP5Mw5nF8cprMpJGpva954sPzMPwpJgRbssRWr7UpMjMG97NeeJGrSFu9vQuwgpwPkGbwwy",
  "key43": "kYGA6nABWVm2cXp43pGo4SLWPGJLSZ4uRyLFWafUxx8ejyFD9cqpgWDMmQUEFVFg5FgwwLUm6EoepF2YTyPF9zC",
  "key44": "5vZeeWnafKY6t2aKLvKZJbPyzUdnvbGscTCFgRuuZpy3TaLPMLgeJd8vCnav9ih62AgB7ZpUd1m77HiXUAhkaSkt",
  "key45": "5FVDydNbVyettzDzXkDiQnDfbzebyPRr74oZVYHJ8jfQUXRurPiHr4TgmKQ3Pgxo8xRWdrYb6cQDNKtPqWUkd74o",
  "key46": "35N9PQQ4cViuttMRF1dj59qtw73TSWec1Un4psVwtsPhC77suWkfvyZCkJFyYhbcy9GWwVhncu1qW47ZU6E4jQ5u",
  "key47": "3rrMzGs1HND6BReDdwJru95BsYG4cFTUMjcsbGQrzt8Wuc9JcS1qZmTTWJuKDoqfxgSudibzTtgppEAJ68ef3A97",
  "key48": "4VU9kFxdJtb2DKqUSVSuLt6nXthyAUg7Bys9fqspHufxQfAsqAmQT6DpBk9kGXLU6Kgt3pHVs5yCQdFAztnW1ZYD",
  "key49": "5ZE9vg9fo6nxdAJyiDL2AeDdkEX8V6ZZLyCnN9rKVWTU19FmNgs1QNy1rMdvxPo94USUTH8M5F6krySyjFGNJvaq"
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
