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
    "4nGLD31RsktqFdfK7vfxJXFaxo1ae94LHGn862DiktXn4bfgmnLunE9agzubVb4t4WvVtDdJ65sWWbECyS3REX2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ePdYrBxbK178WHFdGWBtPhB9cD8UNHrhePpfDvdsJjxBjtrnvNZh3iNuTra6aa4WwrRTEHBoUainA9eqsFLfvCf",
  "key1": "Mf2N5NRYmBJRCRFLZpK2B8yLKda7LLRYy5NVQhHUaRvirSA3P45BnLEqtBUHkNW5Pk7dQwSpvHyUR4op5UpTsk2",
  "key2": "3VZQD2uzVoYjYspDfFiPwohJYYqkgBmJUkqWg7LF4Lj9r5ozesbsTi1GfMAnTxUyj4xXW5S5nvAPHjctcJ1oiUYy",
  "key3": "irr2sNj6KDrtkziGttCu7ZCXu2APsS15QCmwrnrCZquwgqfcYq6gtzGMunmd2ryH1rtKB5Z9cH4NgATKpKSiE8D",
  "key4": "3nxMcvGvdVhfRjn2sVbNRbg5jjFWR8gBGKksrBpDHvdVhoTe1Jw87D84Vjw9DBEb7Bggb8TjGGkP2vuQjXP8q1z8",
  "key5": "5xxF6rYRsXq7dDXonxwi74E4veVyLQL8BBURE4Rn6uyPKkagjXF4tX16chqvKAJACFgTfqeTN15PT3p4gn3V9HCt",
  "key6": "3U4yaa8MMGXhhXUnYvooUBzNWGVfMvXsTY74tMZeiPwvSjcFn4FebvKuvhqxtJtbR9Ht5k1sSnpLFWkaRk79dZo3",
  "key7": "tCSpMqJbG56Hhv2LmPmWPR6ioWX9XDLQNqG8ZPeyMXBTHR7CrgmPrnW6SX4qyJP3PjUKoszDSLfJUfzhp7BCfcH",
  "key8": "4oqaDQjG6XsHhfFMq4sX5yy9SeKFUnXMq9LSWeWfg9RG5kaRZnUDBQqh34vmBdk7x69QRUEN45DfyJkEXdfcHmi",
  "key9": "6pbfWLNWoXvGy3AooZu3EQLcoyLPCB2yYppqF2HDCMohPZYsqjtDGuERNcZEeGpm4WzzKmeUWY667Df5db4DfiU",
  "key10": "2iNn898P2vjNr3h6F8bqCx8JHRjkNw19MWwTaFyhYDdcKMRhYjb2yCjyUgvKExm8p1inF2yQaDYpez1YSBtK4ucT",
  "key11": "66TfHZSonMKcDcKycEzskvyp4r1MNzxYzY724JiGDxxuq4ARUZtrBHHtUFDbyggKnDGbzd9kpRMuFdmHneauDb9s",
  "key12": "iLT4XU7xiXfg5mWvJ6XievvhDufS7hkPUFyS8sCa2bazmtJEcEGMEzm5pfR27Pfp3M2WjoYEbWbjheZgAjWTWZU",
  "key13": "2baXWi6NC3bSpyDhRMLEYKH1guMKVH9dLyGgVdcKvyMCEJt8KfCcgY5ufMu9odsNWuoxVT24RXJ5MffPgsPdiWcH",
  "key14": "3LskFS1v7KL8xJwM92ViTGtQ4HYxRCPemyxA5evw3e1jBvTbFTTFHKj2ycfEXitL4VDk3vFjxjTxDpFNuRa3U4f2",
  "key15": "5kvE6jWym1xR79bM7SmJvjmgvhooZQBWmYbrM9Zp2GycMnsk8t7Fj6nCBWxAMM4EdEA6oCCvwWUkHP6UvNDmYjhu",
  "key16": "2p4jKwUbknVK9udh8UuVB6z7LabCR3Jveoxz6LeY3etcoVJ13NzQHNqrfC9khRP8mu9UcH151DR8JMFpNYBaqyzn",
  "key17": "tBKjhyMcqB3we12mMSR91WDkNbAAg9euwHPdFPqMZDPXoF92AwoP4ZzrDfmyFNPTryQcEQBb3QBcto7TFNYTNEj",
  "key18": "3KHx3zHWC5fCCKZeneh193TNbbg6bPSzV8H3vwNsjwJD25EDUhy5Vtysx7qMoY8zG4oRhH9xMvW6TnTKBmsNcHba",
  "key19": "3CVYjFeuoTV3BeUsj1Mh3hH8o8MX9FpBZvxdtaGNvUQh6eAvUgwUDu96bx96mHfTktidcZcU7hRTiJ1Fs4WF9Cwp",
  "key20": "5ggLpGZHfdjm7ZqwhgYjTi1yqqbNVyZ9ybS9CbQSZ7tFLzJhLhRxiEJ8pozm2e9tJN1B11Dk4yvBCA5ary5qKpmJ",
  "key21": "3K7DR98iyFNPPCXtAxCJnWtPu3HaTD4zTQXYXY3GsC1Pyv5KeKr3YkVTwtM91fH77wsLS7y2WvaNyQW6xUG3hhnG",
  "key22": "5k4yypBusDc8FZzgav9kaDNeQjgQXG9uUDU9d3gDQzBL3QVSsTNixYXncfRiZk9cfXD44GsPuc7bgQUzbzr2RK5b",
  "key23": "5c2FG2yue51T9FmHPogu5gWk6rq9u3B6Jz1cPiKxWAsXnXazKJT4YhcDFXbW69DHWj8qdsJXRrYeujjWpK6iBW7k",
  "key24": "96i8BqDfRjycETgQ8egwQ6j6ZnTdaFzrXZM97fRSndY44PyxcADMGR2ULmQxEpkfo3CXVBaxMYy5GEdeECogjLK",
  "key25": "5mXDxVatdWgTNWY99Xvt7niUALVVoZnZLQoo9jk2XeyGZJot3rXqecXDAy9Tg8vtcLtw2fK9uxz5VvYK2rVe1LEC",
  "key26": "5uaA8zRXcA9A3Bq9xvDm41brBSN2U89uM6JGd7qDLoVpkj7Ann3oJNha9h9cxYG94Z1SutXQHFbGT91aEXH9qSNh",
  "key27": "2RFWVnAu37ua5ha25G1GQ5Qjbo68fusa2sAieZ9iVwF8qNj99DKwbkfRi8u69UCWDQsUFNrabcjoyhFxhgY5F96P",
  "key28": "4R8xubgvpsSQX7WzVMKG2pmWgCUen5KSwhT2mQ5hhVSG7VCwfz9Ua7Uxh64yZy8eNGFVE9WfcvBVidTGcDTENr1v"
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
