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
    "5jBabQ2meWamRvzxH1aPqmMSLFbtTGbyCgPmhG5nkUnJJdBJmuH44QAv5QdshNpph7rezs3WaRauv62Gdy8hp3PF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WJjZhbeZ68WRH7yXGbTyKQZL1svaJM32wDu8Rpf6yfjzb1zzjU22EwyjwhhsDKwcgjS66416Pv33FS7gEXAyvuo",
  "key1": "3fZ886XuipKovSxFfyxP5c5yW9zy9q2X6fMordXX9Jfpioo9pBW2qugcYNgZJxvDQP4YyAGt2pBMGWNneC28Rafr",
  "key2": "2JWaRaZMufHTuM8UxJczFxuT42CQxcon66UASffT6TMirGvS9w8J2wLNHVqP4pe7EtCtceVQFwTf1xuNbqwUQpmT",
  "key3": "ukiUTxDxSowrGLuWooXTMSFUhxzjjm6egA4MCRi9TjpgwqCFuM8BMmpoETfNZQDxSTbGcFL34nPsDx7JuBnbM9R",
  "key4": "KGW2vzngizr5ekp8Xar7nUvL8E6G7baYzutHPfSnAjjG7MxSLHUpoSyYsLJioenig8Z5FCKib3bvnKpEXbHEony",
  "key5": "5m1dNaCg1grqLDVqVSvgT2t4AcWTKKZ34sUxoCbw1iCxcBTmbUYyWEGMajgSBduehVkFTwLmqWrDVsTnDUJ1vuT4",
  "key6": "5RTjiqHZ9FhUMLkuq55SAEksdyiSN495BN9SwwMjunkNYoEN538FsZfb4ZHCs98Yr6GfKTqiWRsHMu8494nyTS8T",
  "key7": "Se8nBtMC5XzqEHmQdaAuTeRREbKF4rGftiidMs2jcd9gt4fc45wdEKCJeev637emrank9TWN4W8Eqzq86vsrmNQ",
  "key8": "2vX8oTFkxMwcfcKFX3svci1fXe3cmgLd2cKdjAkqxhJUvvGjLtU2971VZ2Ajk81QNKME4tMeiA9sTJvpJRzw6vio",
  "key9": "3b1cBBuHCvMCuMAX8Y4c1SGhZtGqEDgAxBYpWtB4h3Msa8koBxUvTZwsMhKQRe5NkZvrHjSUiArVqS9SAyypn41f",
  "key10": "53R1xFVJJdcB3qw6g6o4YGYERPVFwz4tSgQr4uKFe1y6kUJNncDFaRcTPGErJCS1YCgQNh2kDGHjzooRu5xtx8sX",
  "key11": "38MqquWBKDxMZYJGJzpUojTBkAGFyTGUyPDdT5YGDqsbfDFb47HwCJNPy1JXG1ram6Mnf1D3oDkKxB8bPvPToquj",
  "key12": "5ZiRp2qkTnisvv2P6ptwJEQC6U87Pkv2LyKdtLF3yQyAmRHNqvLNLsAPuqxv5NyBy3kdg8c8zSM7smxDrvh9oLGK",
  "key13": "5m7wBS4QpKySdGLgoqShfCjnJp5M4aEUvmuupaLrXbkVr7aKKKN5SNfqG9BGoH2C8XkDjdPA6duvPHDQQeMivFaX",
  "key14": "2zPgP1xYHr3bHY9Quxiv3NZY2wW8y5Ac3dAiMR5NfuS7Y8StMDYaHjfrVjh3vcCmvi8BaMDBcSXBHndvRtc18Zju",
  "key15": "3WZPvxn9qqeiX3jEkxnJ3M48FRQbNZkRGgmZdHoiX9G2CyFfgZS3tJ4QMBQ7vbz3UkL1tH6M41gk8wstPXzZjjPA",
  "key16": "5zpWXFch1pTJ3ZnwaWL2zMwYp4kJKRrE3TNwV9HxwC4mKJy7Fnwzr5yNDXtMVGZAvZwX3mJvSCrJSP2s5FeQsVGy",
  "key17": "Kk2baXAEjykAyAD1zf6cN7bcNffKc8DxgJuYvWCYiBB9y6i8mRs9DD8Fdcr58AMbj2nfQte93oAu6v3rDfaTntT",
  "key18": "2EZoA5sLvLphVV1CjYrxBC1GaqGCG5ePjoruasSzFANPzxFU9t1umZrfYF3KadKF6RN55v6yJBmDnaY8GGqnxaZj",
  "key19": "wXQu2rFbsULxbtv8tcR9A1k36GDxwrceDXBKHyZtGx2qjYEvA9SMFzqBuciyQmLhBoLiU5GC9J3HTUWru1CnpE7",
  "key20": "5qexgiRa7edrEqJUVS3iQhi5WU5oz3nNkoyxJr3uxUvgEEcacPy1QpoaAm74tDkSnp6ryhs4uivQdo6551tEMrg7",
  "key21": "3zmaWEEJ4kM8WANCyH3zVeCkyqb8FtxnzaLkJiNw1wGXPdfxKP3c9WFachhL3dW3HFJZGPgy8f1BrTB7PdvZ62yB",
  "key22": "35zAZXwcs7rE3g5CHPkSrj2u6iWXoaweTkc2wGLHBEfBt63cR2DPspFuJev5MAuBF6AgM8zg7Wu22HZC6UWCQ7pZ",
  "key23": "4YTEsLwDmpRfijvLUSPXCG854cixkAeNSz649pyusdYTDYkF25P9EKZU5Z79thM7sZCf45c4f4e7rVkoGBrdJxwS",
  "key24": "3a6TQM49FWegVVi5qqpTmVe4erXV774j8MwkQojXScg6Xqbd9pMT1Z1hNUMgxnvz4H9h2mtHDruaZBMTHiyXv3qX",
  "key25": "5dcvaUaCHpTEpt5KaA6AzfhgqZkvxV1QZxfsr8aTmT8TAd6fyXYrLMBSZdUp1BL6U4SCmJ2LAa3h389BM4q2CaRN",
  "key26": "DJtAEBzEpGzW9PmxZeXKsV6Y6xgurAkocsS9PqU6uGL7ng2W8KA1fc7u2X16ntyCsy3wRDKzev2AM5sGPDHCRjU",
  "key27": "3ayXMUeCuna1R2iDYR6mw9nUQ3ZaeQwwzwANs7jgYtpjHFhvRVmD8LFiHnTkDrHbYUXTVic3L9m9SswdP519h4io",
  "key28": "2LsCovz73KgAqf3dJdiZeH3yYpbmFK5Be4EB2rgD4yBD6KrWZ4qfjMEGidMksmqMyCL33713mJQqFuFKzTaauf6P"
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
