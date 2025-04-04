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
    "3eg3gn4ZseidSyjgRP5aUF437GzLGauVbzysscTXFQ3NqYRqTBvQ38ed7HMKM8Wytt7TBpDBgFcqs58eHiqsos78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YzUyngSAG568P7GVyXViBKUzZx55ELRJfyJQT9jEvxWoxfu457j9HdPcnMDJGg4hvP2J5XsMvvGzQjTpSBB4TUM",
  "key1": "43KpvTTCE2DzUnLxQKshnbNRqFoE5jry21ZiYbFjm4GeSgMfpZ7VdiqRpjpKkbi4k77yRSX8WcbNopK2MoA3RWCy",
  "key2": "41Y2cuwdYzomyrcQL197snZBEu54wTH6i5CSLGdTzchRcpDRqte43rsuC3sKVKjKCRoHbsA4U46hBVfPQTXzcDXf",
  "key3": "2wbnJXskmc9BGZAEBTBgfR8f6jJxb7LgLMC4NX3ZXtBucRNLupbNJ6cou85Mz334gBtPEkdYMWk1gTv5BpmB96Ce",
  "key4": "d1tK2WmuPT9rfax7ukMjpmHL5Z6VCa96s95xpu2dePZcYJQZEJfughv7J9vWkJQ6pAqVHs6emXAWC9fecpEyDyj",
  "key5": "4cUWxmCFX6tjG17AdD9WrbkMfQ3YLqgS3j1aCnhceH21kToJjTyZ3TThx3pNSmFpWjEgBFTMGnEZmBCtBGrxBMoL",
  "key6": "5BKTG3YWJhbY5ccdGrFBeJ8bk6zpTikQ1PRDKpnSNsnExHNrBeMxZEXb3yL6fJFzRMPGXq2Xw6CwxbzEJqHwhUAZ",
  "key7": "aiM93krqHCqmR2jwCsNnqgaCE6GNyAaaSixDHqgkGx9rtVGWstg3kFnwDkAVaBp4K8671RVCyaSUxcE44r1iQXh",
  "key8": "4VHLRZnvT6Jn1ZKnaqb7WDH2aw7Y9mNMVdQeDUrosMCKQmhHtdoD5kDho4GnVoLPUHESkZpYSfr1tSA75Y86iVmn",
  "key9": "4Yc1Vd815V2sfDvQnqNa4kUU9zjQXJD3eNksM33TgJ96a2zdDZQHu85MXigxAGq2f7Ru1o75Y7mobXc6sigPGwHu",
  "key10": "3BpXWctBYST1prypbb9cxPa3Djc63JY757s2shzepNQqtpGai2jiYFd3Vp6Lgzia23bavRq9s6kcwJTyYt9yu9mt",
  "key11": "4T6EjvaadYWF7WNUNuQy9tbNp3Xao96u48PSXWC4GkprGXScBtgnJE1gpt6D1Vzq5qjW8aGMpj1qDtWYW5hNaZwz",
  "key12": "Z3BXq1WxDZJEYp8LaRHKxyiXKiWGhaMvVBLaF5Lwe14WhBVU9fxbdrvDmmRoAmeY1xMspbVTKG2jFsi4L8n9Rna",
  "key13": "iYFBrz4H43nmosirKHR4APR9E6QboMer2Jg5qe39XywyyRhV8kDx3bU8fwqQiNAhUMEZb9JcEuwjzxfcDKAyUKn",
  "key14": "2YXK13BnWckFqSYY7TBzZi96Y75N8FesZK8o5mXLhF9avpcEuPfWo3M1BNtMaYEiEzB91B8hUqWhtuaM3GP7aEsw",
  "key15": "4E7cPeLYXUDkqjL82FRWGd8MTA8dfifPGgiT4Af7r7ciJniSdVy7nkB9Ek7BKLPGfpcKFChRwTkmFbuBP77vmJVY",
  "key16": "27qy7tZZAxSdAFJbDU3Gts1dFuSacyYf1mye39PJZ4teNTDZoxKvYrqPvhtjJPgJeLDxBwQczJurpjridVV99k7X",
  "key17": "2Pa2hKCN1XEjkAdrFioX7DtnxWr9JxavneTbtv7vTc6TkCELwS8pJmCLa2oJSrJ957pjFVuL11xD6ujtEUL67VLs",
  "key18": "5Z9nVSiAE7bxYXRSXxZBftsbmNqJXnraRxYaTZWLZh2t29ytEqmn5jApi8uqbqZfFg1y8WiEqoHcHAs9RxD7mfeQ",
  "key19": "3SFshteNTUfK3s8dJGYoL9NAQGhGDBov54EeQeB6aQMB1bQ7MebqNvKv8rEBGbCqj5cEeFixNz5daiyiXPUHQRL6",
  "key20": "25PZ4Ce9JpWsCpNEh2B5LPWBiUeRTQ6emGrKRvyjuXci1dhrb1BRe8c85KsvRUZ8UsMoLPchQ3ABeqBX7B9uxehC",
  "key21": "5BeUHWfQjiXCRApzzupdZrStSvGpH17C1vsto3sUDsrm4DpdKqKUNdZNMJYDciF1jAyue32imsjpcasDs9rs52TC",
  "key22": "2DwzFnWkYyRAWGi7tUegDofiLFjZ4KMFWKqNu2zpV5QuVPzi94TfxzV31JVJFyoevKenY4sdqFVwQfCnuWbZZnX7",
  "key23": "5cmwxMf7Pe1qdL621s7sto1mPEfqGciRCwzN4ja4yoqWB7zyXZ4jMRL8BQnvhPAzzqPy4VGDv8E5okVRaCwD9zdt",
  "key24": "4UByYouxM2tyhw2C5LV155Rc9KPm3LoQDJeHjWxXHfHKJRbLTtAhdGBPEFhVeLokz8GJ1ohpgSQSCWJzXkMFRoVi",
  "key25": "3Cr9apTU57oHMy2Hmqow9BreMDP6BThs9jpDJpzXnGMz9CmhDN482rFTrbFG1TWUZ6sSLCtd2sRVFVBV57YmVkb4",
  "key26": "5QUwKaze3o6PKinEc38z4DiGGkM4DbawQh733J2fB16Gherv1KeF3Ekiu4B8VbrtwdGVwzbrw53c3WhpQQfpRSB3"
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
