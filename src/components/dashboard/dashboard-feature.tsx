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
    "2fQ5ZiqBzHMse8ztyw5DBXRqzqkCCNpxA94HCpXk21Y6KgFMh1Voj2HprXxuk534GgUmz3VzBJebeZXcZ6rznJ5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A1UVLstporwG7U66JytCc8geMWZVw2PfNEeoPG9uWoTCorZJSx3XXhG9F9atvqp4Dz8SScuZs2vAEdZqjDW28aF",
  "key1": "3SZCAwnKrhj9KdAMM5FoU2KoscS8BNeesMBa9mk2ghS8oeNJYPYAS2TaDzSQMecQSPBvp6nfxNBpYFTTiUUMSQqa",
  "key2": "5eEsRg5gS8KsZuUyzTaugkx97KHYad5EYgKFcV3YtbBxK3qsLQZBJ8DQbfzfoHCt8ydnKja19ew96qWC4b31aygR",
  "key3": "62ShiJu6WCrLtLVWRSQqjaRsChFEzEcbSYSxrqBwZ23hGamaUyUeurvfwBSishzDAXNebKsMj1qwg233YuZmmpt5",
  "key4": "672Eg2FUN8rWnYF6FDY3C13Pugmqf3e7dDfuUb3tB3Fc77eUfMLHGGXmsDYgMTJ3gNabpmXV4XCRhzXgHkmDauR7",
  "key5": "3UUEED1f8mhVQfvWL4oa4S14uRDR5byYQZTYa8PnCgNHiTZM1zXWGdkRmy1yRVme6C52SRxZa6U7Avu85YnKz7xE",
  "key6": "3JWSTCwdXwEonCeyjxmgRDF3K5RCw4S1NTARYpigbq2uSWsiPAxEP2L3i1YKuNxE2yrDEt8eGF4sArAbinxTkyn5",
  "key7": "3zExPoHYSLZXEZtB9g26N4qUL9jMBKTYEZ3bo5ULB7eiDjpkYKZKAsxj9T9JNE5zH8wm4JseWaeatYrKKX8JTCTv",
  "key8": "5rWzoWGKcL3mUm7XAMcXqz1skXMP7QpKJSBpUNdLrbfqjuLX5WeKh1jB2s5ERMubwJBn4spzDJ1RcLhRcZBEpL7p",
  "key9": "329CEZDbpJfb4sGfX6pqHWy828bPC1pr3EQVZpABX7t4nGg3uYTHkCFcQDNKfVFDySVGCHNQpWj6H47f3Ubsv4qV",
  "key10": "2LGtZaYYupiKFCmYQCkrLVeo42saL4C7WPt7a8ZNGr1g5CkhT53oAc4Jw6q6Vc6yprPxrYAdNpa2YbqPEPnMPQjJ",
  "key11": "5VsaCNKqVboNpoYDCq9JTAmemwVsMbZbVFbFBorhoHyNRmga89No3GTHsCcrtutkni7zmQuct9Kk5LyBDnTt5Thu",
  "key12": "2zxeAUHv7y4LzHuswktQofoWhu9nqCnoBpCLbCrrxwr8auqWqMrmAdFyhw4m8UT5XYeYrkWD95RgyMbhMaS4JaXG",
  "key13": "3NmKkkrS9TaJFpD57sH3WmQhvrFdH31WAZKyt9NssYDMyTeA2jbw5wn2n4UmsVkr68HjkpC7irNSh7DKyYEwazpS",
  "key14": "21DpDoLfSThJqwaJuggY8UzyjjSDnr5FazhaZSHamCWuErFcZh3abV1jhAjmxgHQ6JZ8AeJpKMr1AqfRETeq3wfb",
  "key15": "3E7v9c4yFWYearjp18GbGTq6o11K2fLKYWTsFFHy2wrEYkmnHBY7sxsfY5sL1fnYeevnKtqpaMpr1M3t3BdAbJQa",
  "key16": "35s7JqKYghzU4soeqjpJWs18kCxaheLvtiPLyh2G5pK5SPKZSRZmZpyfL1wk5PVFvxJP6EC6TPV8JQPw7QLJawki",
  "key17": "2tr3JZQ69Quji4QpmS8u7WMsfNwLMFnZCZGVfy4wBXpmrskDyLeNVYEU4ucvmFZGhYM8ffD7QnU3yCN8URjPNvzg",
  "key18": "4D3GRxGVEheDpL4tPDAoALXfaa9nLTmXyS2VUUTiLVTJgBpTNFycVwegX3SCWqjLnmiNN7TQjopkPmEprgw39iSm",
  "key19": "26M6tZwiwCoKiPZKW5fQ6EuQggMf7rF7KMPqPZ8nGzX2TTrVBzqAiAbMoGmmBjqP5Ld2GkRXHH4NYetiWqQVhyyD",
  "key20": "4a2nvtZUan7xGcALMLtG9yBxS7BHdKLuYSkGFfHyboVgmjTzQDG2W7ntr67qH3LmxdJRseQjxGwcBAyFtTFFGmQ6",
  "key21": "5P37oV4x3XeLTk6zYrtke6oRCLWAnCLyDfGFedzNLbAvrprCxtQEXEppbHsoQnLQ8qLYN3Gcur5kmruiqLn9K7TD",
  "key22": "5hh3HaRyiGPFuySQKUs27c1iyrMid1Ng8wKX4N4SzwubcroKMGtsoFBWs5p7wm8JfT2kVqnacYrJkbtNwGnbg9U",
  "key23": "5ZwnPQjdfsHcHWKSiLEuChHFVR6125PXgMUUdkWt3FsEpXptxHBJz8QsbtmaaBfxmhDRgyt89cSdsGRU3tVhBXSL",
  "key24": "5TbFwhL8eubmospxYSEkTTS4CSy4iqxoF6Zf99aLAVEYLwt24i8RikXwCquHg9E5R1EBn5SBPsuimFsdRVnJbjmk",
  "key25": "h7S87WxjZspYVrfxh1ySJr71bW2f4dzfMAfPVfUkwYLTuvuBw8gA9v7c7UwExMD3xBcRGb5oWLAVvQY8KHcQmCP",
  "key26": "4zKn1T9d3WRJu8UW5g4Hkbw8QMwvp1SvicfJbdTM3Q2t5aPnrrF7EPAecgEunxoi2rCUFBziYgHexxnzq1GRfSSf",
  "key27": "3fts73ieR5TAhDapnzfu3ArfWHH5ugqRZX5qPh1xPhK7hjSX5XX7zuq2SSZiBmQVkG6e4G8zdVxUNk8yjnqkd7CE",
  "key28": "4q8KfzUr5A7Y6PW8tCg2FpBnErYNfgDQJw6vs6ft9ddg2tz95jz7pT6k6pTb3y32N5YER25xk3BUHpVk3c5Qzeki",
  "key29": "4CQhgjursg8djTK2cXUDikWwkucRaCU85B9vJbGYCQpmbhGJeW2L43vS87LVfrYs76eQmQounFVj1CqVB6X66NnR",
  "key30": "5bDTs2bFxSwAaNJ9zR8SAmaJZAr63KVPMcZmajYtEGCExAFoZEeJeNqttBJrpjKvirrnz17c3ndriJ4FwKjiqRhK",
  "key31": "WVpEZ7f1Fw8H63GuBW2Rjd1euRBoo4Hu5PGqrLBxec4LTxdVQ6ukfUGC1z3rNyBxQ62nQppyX93DRwpbYnU9a6G",
  "key32": "3G59CYsEa2mzFw64zZFcqQz1pNv8N913qXffAx3ynBy5jYcs7e7GLwn5paUrH2G53WyGEjtuUMx92rmXg22GJarN",
  "key33": "5CBLurZjxXyfHWV135bZdVvvJ2yLw1oPABSmpCE7RToHZD3yMxxj221thrZtiJxYAJfQeX9Jp7NUDkMYhwsqVAT",
  "key34": "3Ypm4sypP8ZpyFnC4fjSF7QRTZAktLzZLsyHyUVX8EsSopHRgrcbtj2cEvEy3gxVTaufecWaxdPKQBBCQ61P34JE",
  "key35": "5gdiu4hUHd4GYyJBkDG1htBV1EKFt5Aw8W5bnq1b41kLZ5jbKwN2pdESnUhZoM41ck2y1NUcmHTzFJacd7SdMRRc",
  "key36": "sgd6zYYLYR1gEGSu5zYVvuax4w2Nqy7iCqmzo8TE3M4yKdy1c5bs3A8XJGnu74rj4kk8ArSrMMcUiAtrQSd1U2H",
  "key37": "3VUnB2XynvUAiTF36MgAeq4ekbWBdi56LpmRsXdC9kDGSdDcvtAvkctnaFkFJ4yG16MhhrRmkckA1MLAFi4L3hzd",
  "key38": "4y2VKkv2opmBfq3nDQVPNka4qMw7CeapDbqRkaAhR3LpiVhKrn8Nmbhu2VyubwKoMJEjHusp4w3c6zhi6NvtW1BH",
  "key39": "2F8rFqTeSsnwe8RSsmT1Z3Nmtx2Tdybe6cnvUh8rKSjTnaJ5LvFpkwByHw5pwczFoRQ7FpHqT9BCN9AK9Bmg9Hxr",
  "key40": "4rv7sYtzL6ay31JnU2BRjtqc1jG8ZMmjLu4KJJwNfeWkmb5D86ZhGUgJG9qXgtiksBqknJuTWq59ZSErzSTwU8Vb",
  "key41": "3GMhVLVy7scgwWceP2pcbgmZsD4MztvYpGDTh6hKNQXsA1sr2W7VdLmmeeW5kU1SShR7xpBaHGP7cjtCBjnu3Mtw",
  "key42": "3mRQQEgknHxeUgooSrGb8xMwRGUA8SfkxDt5KJwYiRtAnFAHLrPQVSQGa7u6guVSCWWbmVBey7FsK19VCZywxiv7",
  "key43": "2bVGT3eR4QSN4PpZy2Q53pyd3YukWZ14uPtdq5hwUKKExjSN64RwzW8BVxYUxu8UhRJqEwWUMpQF1H96JKV6UCHt",
  "key44": "4krHznkYVEWXZHghd8YpgzrKQwPp8zTcC2FwChowQyzKRBmaxTxnyGSPeq2LuoyZ7smGRDavjzvyMXYkySQqPDtE",
  "key45": "2tYJtf5ZQxvzsiE79QixLZ74RPe9nKcmrnnqsMD6AfYKdoJwiDXKv2i8ozmW2B9GDL6qnBzCXEu67r7tEkdB46p2",
  "key46": "5afHsMiw3G1xbRwT7bFczAwctjrYSdh9sr1yVnN56QyvMzU9RgaDWoq8zPwAWuLhKevYoWD47SEmf7ybEsimAFVG"
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
