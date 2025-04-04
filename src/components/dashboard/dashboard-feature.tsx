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
    "2mhuAWrzgSP5ASyKqeYpihmNk1gJdZ2x8aVs1uaMBLFH8TvM8bep9iwksL1C8zaET2batbw9R3wDK6syf4x8dB2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4834NWDmx3rSsax9k1JFYoX5iNFEJtyTN1WpGuTe9Qswi97YeebSj5EecGRs5hDp5KZxNmHeBBQDTHcSkRkUbC9z",
  "key1": "GbyFStmUXtorvoYoq5NRbNfAeJsvRgtXneqmgPJVdnywSvRy8LaavP8LJEZZMsG565nKqvYWoPRq7FyMQzted42",
  "key2": "b2f2m5yeB71QZDKQ6vT6aqcq8S1wP75qjGPg9J6m7DiFBaGHQqAy4vyCGBd4ecZjjzurE4CrhXxosNUDGhJ6K2z",
  "key3": "5d1fUouttisj5j2N6uPh5UVnok5wR9mKfa4aMEgModf3oM4teaWdjt7HVCNgh3mxCjjLJn9pUDyiSck3E4SQcuUb",
  "key4": "3c9LhtBmJcXsuj4pPmrSUcWdc6aRNRoPCr8kBoRc3JjQT3tf2beY5fTiuSADSr2EvdaADdYeiAMQUK2fVjKQH4X5",
  "key5": "5jFfDWNXEwqrHiSy5oGsW3irdrppyScZAQ1zqdLPKN7XHb91GR4y5peyn2C9AuA362Ca8aetGCR4Vym6r3NdYJJv",
  "key6": "A2QN4TQJroSLDUfzFkeQkqAZBEGgPE3xU1eF7jqfAAj9cepQEVQ5toFXKWwUjNw3myN5t6p99nM8BYCKNw7p2fA",
  "key7": "3nbL8TW3hBZsiM7U46ju2zeXtM3zaLMTs222dWFRQtAFS4PnQEmH5LJF2vEBxpiBcL38y5EkUYTjCbkQHG8mY6gw",
  "key8": "2oavhvMsFmbehY19Sw8Q8e8sSE5HWsSEGCS7iWLr5gQ1ajbmxNWrGgKez7mrgnma6NriVejMSBXYDeQrPMyYGcTf",
  "key9": "298yLo7fPCnRLmzmxMcSneDEcCw4nQkFsszLZqQzhwP4d8DWnPtAnDfHRUAcqNhvDNdQuyifY8FMVrnrLPb1nk58",
  "key10": "62sfdQSV2J6zSS37eJngnTQhF83fcHHBqqvRWFwmiyQpfG7MDC7exHSJbLn7hciM2QFt3nKMJNpWfX2K4DnjKBWJ",
  "key11": "2zCspn5Z6dL8o9oECHikQwN2465cAkeDnQHXrdkDosu9BN6NKmenWZc5F1iFdko24CBtNkxhAQSoAQbGw7u4yGRU",
  "key12": "5Ybwet2i7ESpMjYJ9DpChwb4Mw8oauMJ3zoTqx7HAG6d1LcdNAdsj42kFBMeq8dzrrVQEgDtDRYmY7m62rJDkFja",
  "key13": "QHKaSkXHpRwVNXWGxabgfLLhZrd8BbYXsbCrXTcYFYjNyctnCmssAFSmfdjt147dFGyZSHP5LuJuigDb29d7syg",
  "key14": "49bzKtbCV9oNgr5xjPsXmsmuGH1XfuCh4htfquH5R1gjvqyCnfF2Fe52nkQXTiXuhUAwDYDG7nHM53KYvDqgUzL5",
  "key15": "3CB9WLx9zDhPkb7yremuBqkqb2a39xeX9qvSQT5CUfW7XoJJwSzXm8BYU68vjxKzUujaJMyqUPqXvtynfXMvHczA",
  "key16": "35imwXCaExPBQSuJAtgy9eA5V3eTuJ7rTXGzqadM6Tr2914iGMi9zqE5qGPtQr6GvtyW48uqR5Bvey4hNJFLfLTh",
  "key17": "4B36o9oGpFnsXk9juxMuWkfL4BvXXS5xZkKgWmFuy9bNU5eQvJu511ZYvX95XbRp1fCa7TbjjxvCriEZt3tHPyH6",
  "key18": "2DkF31e2TP6GiHwZJiv3DEirYhHbLV3Du8wSDK5n2sX9818w5ZebVaLkT6TKxJz1VLdNQPJkLw2xSrXHvoqvQSHm",
  "key19": "66f6KYgMsWwnbew4cf6iG6xaKrxHer13EVkSoyWL8UF6GD9EtNu94UHWXKAjm8rRosuWsTdreY55vxcDxBgap1Te",
  "key20": "55FGHfNr7E2sPp6rn7S3ZsDxKtTbx8yzj6dKBj66Mps5oSdvw8nUwJnDjaZrpAfd4ejv4NRncsVp6ZJhgD4mENHU",
  "key21": "4jcH3YmvuvRxszo24vUGLo5EiBjNymNVSsX7NotyBUH3Qd53FQ1knu3QyFgW9vwy9YjiEVnpX9zrh36v7AYckiC9",
  "key22": "312UrGopvxbsQn9TyQcPn16eMEua8FZ72H7BK6LHDV42gZP2UMUJE8F4epRfajmaADga49GP1CbQDUqCX7jDYQRy",
  "key23": "4vr9mQyctBMkixkwPFAeNv9kuQDW9XC7iBw6YfrT1ymxrRJ4BFac849UqUzcfq31FBwbiVDZvaZbh12s31vak1Ey",
  "key24": "2AU7sgyCu8KJYyyohXRYUVfvtZ1PVockXrzh5CtV4ACcQTPdbgm6ZUrwcT1FJRKpSrBop5avLFDLudwjQEoiXgvR",
  "key25": "4z2riPq9k6JDmSEH8o7Q73vKg9kRfAxfxfBuMiRgFzc9QcWToE3ggyGajZeGhvKzANftr5EhSju1hTvUhDRWh2QC",
  "key26": "RMeYFjkgiZGVqrmPsgyVav1ujtiVK8pKvACjNDstsUL45S4ce6BGEAksHDRi9vmT39cNTH53DP2BPqQAqyURNu6",
  "key27": "3jkzkx6u8d3QZxGy3swyuxwnBfZpw6JVtidZXXAENbdFmh2UPaXJXcs6NQStWFoCHyfAjAEr86Vch9zK31jGYyri",
  "key28": "5VBRkVLseD6XnzKWJ4J5vSoNYAx77KXFw7EHsTBtohBHfYKaymCoX3V4b9wvN6t3kiPpGXcu4pTYD13HNLxUELTt",
  "key29": "61sj1BvWG12TXgzNdaRfkf4Zw9y62QT5rbSfsyx7JvjPBSHQ1psYHfRaQmMe8Gns8HqDH8XSbEeEC2KY1J3AENSL",
  "key30": "3pHSDoBRt8DEML4yR5dmR6JgZ5nwzKWhFqKkX911NALBXY5duZ5tUto5xxCKmKvDFaX4FoxghgPxaMrkVgxJeVTJ",
  "key31": "zyEvspnWhWiyZPW4u1QbQXjn2tCcWEaT61wMiCN6YmYXCo6LP5ryouLArzNCjYeHGomxFv25NPGS8miCBrophD5",
  "key32": "8po4X5nfCApYqgqHUbqcbaBtrPGe6ALn2gozBFpfajBJH9YPcJRfUXkXQefubYFgjunjQ5sy7Ccd9APFzTCnWuf",
  "key33": "26y1h8FjMZ3qwsXmZuFyEVijN62BGLTyUw1jopyz1d3vxBybqXZk54xTPUDFEcAx52YDHPbB8q33a3iZM9z3GPxk",
  "key34": "5VFcvfEey3xasFW3ceAqyWEEe2EQvWqr76y2BsnjUVqCDgyqLGVnQ8W8Re77Rmxt1GMiWC7PfNRmFXmjoP6RJnyR"
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
