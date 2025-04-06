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
    "3ESNQPw5nwYPjmUKyH43A1jykSCJtdzhwuEWjcydndTYFMr51MYbxykSGkj9kcLZtdLb4imYuY8UxgS2HGURRZjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VsmtnLKUBfCAuMtfbHjGG5gSp2R2jzXC32qW9H9u4WHb3Zh8PYJZd5kJi669FMGg4n44qTHZUqbQjr41q9wVzb",
  "key1": "4EcX5kL4eF2dJ2DCbY26E5Jd224EgGLJoPUe9WHWr1fr4WMooMwiRRPoG1263qkGPXZrXwgqkXD2y3XdhnSUJdbR",
  "key2": "3DmogPsrNhhgT8Wpj2XUDrabA2BqBMeavnYrARBgQowWqCxEynpHbyS3RGR7cgHZ6HaBfwXZTJG3gnVzEh5tEA1q",
  "key3": "5vJMQcWxsnaVMYKjwDoS1mkYMx4jLarYd4GB6rvenQhqoy1UHTYqT8mV7DaLFZ3Mei64JNvtHbXELexNdKxRLYDo",
  "key4": "3VTXHraoxadah94XTV4DiaDFh1bRkbWgqeotTwoaZUdPkBEBbttyDWPPsRDZN5hUkVQ1h4pd8WeiygN6KqMeJW8n",
  "key5": "jurf8XyGShYLHTPPrUhX8B7XqcTeBFUtGhyvGABZTNVDkRjBs34GW8Ya2sDdWj8LS6xZa42psKaDZSq8gdJdJY4",
  "key6": "MgaauQUustQDDjrohUTVV3CyCk82Mgvu5fESDJ3PRo2iHJZ3fCBW8jAxHnQquM2bFXCwXLdLc1K9ir9njFtSynm",
  "key7": "35BoXFMsk8LNrPxeed9tNAoVLRhox82yoi34pmyrf8witokeMtQRWskzqc5MUCLaSuu9woU57PKc5syuFQTJET8E",
  "key8": "5LDw9kkNwDsNzSGdQu9vqxmWJyYm8doUdTjQ5G6iD9ZBLxv1991DuvuJTwSxhzEJaScmRmmphoFHe4UGrbz67GYs",
  "key9": "41QtEPCcXbE61cZf99yjufVqGE87z5dQdcrp3UL5EPj82rvN66PW51tYGNnhYVVFLeYeFV182zdxess6mTvA8Z8t",
  "key10": "384anWfyHmkgtrKwAzfuspULJPFiKEQafXE9JxifPHgE1o2sCwRohNFBfSbNTZ929M6P8iixL7yvjr7y8rTgAkPb",
  "key11": "9LfSeSTP1sYiM1sDkrQTRafwWFEg3RSrZfAkaSmiHwxAJpFVcg7nMnXiuC59wp4fjqfE65KWhoFMdPBD64KF6s9",
  "key12": "2JWWvF8eyzJNzS8ndgQKa4RpgJWRbpmaRTXuZv1HJHEbxFauyz4gC37trG6hbUguN39MV1wAdip9tk8kk76tQQr8",
  "key13": "3RVVZpkUZRc1bPgjVdEYqDjcc9V2nUjx8p2ssao94T9wAiG5TL2JmMP7btUihv7ic4QkZgiBpaoAV4p1grYgKZ2C",
  "key14": "4rSdLr7BmgsC3vNS5TuL3PdBnNJcSBNUPtFwJ22WRvejvBhLxRQXFQx4MoeLxKnHgcJotXjCcGsLmeqMCVMV7ypW",
  "key15": "5nxez4c3nFkcxXRH1io8c8no1RDUqiKKWzKSSjVuv2TGSZKERYmk8RLsyU6intuMe1expe6LNoYnrURvqHPzcTNc",
  "key16": "NJ5T4F1o9bYJF9rVwD76FJvWsudDgMTNzgWsgfK9Tq3oBTSGM85eeScknv7vwJcqNTBeauVJfTNQ1pe5WefK9Qi",
  "key17": "XGqSQXbCPT1PycD23ELdaQBE241TMLcLNLm16PwDPAqVZMTKnxzWbqXKucH6hRDKHwo3NBLixahm4TTzziMPD5Y",
  "key18": "XQkStm2c1Qv2fVeZx7iLkPVm2c3F2Kifg8AAXnNgUN9n48upXoRE665d6yoe5LqmaamDC7cUMPgF1NcLZxM6b8s",
  "key19": "5PsG9UEpo9A5cGtwbRXK4T4eAQjX5iEihE3KBBGRs6kDa9koP5rLGxEjprJRih8YdRgk9KV1wLUU8MEL6whijYqz",
  "key20": "5SAjfToSFxw6CoirWcCDbYDPkqRGbxMWQqa4aLfxW74swmu8TP9kYtbCip7nTdCVFwdaMhMTpRuWKKNvRDP7meX7",
  "key21": "3jF2wQ7nAAtMEh7qKdSRhMopBwJPjZUi4SH3WaqDGBCiX35wf2jAzAWYUYtzQDJiKzgecQnXWJs7XWqYQZR8bGKP",
  "key22": "3RzjjVRWEt1M4RxERctKm1NWTdL7TvqMvAbtDE6eRB927Zbp9LoPH9TvgtTFUUmkmmcGr3KSnJSZW71TacFZtSF6",
  "key23": "4Z1TtogyBNBTTYJea6CzJEbvwU4MY4AJh37QWLAdPmTVWtWVYdQDfkb6obcfgsW8Tffup52vSGVBYe2h5Ppb57cq",
  "key24": "53P2zHKKYP5SQZzUXMquo2V5xwfsb9HnP4AwzvrzrkQhpGaM1UawfQmMLHeDCy41vjnWQua2i1vzXiZDrJvxYGAu"
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
