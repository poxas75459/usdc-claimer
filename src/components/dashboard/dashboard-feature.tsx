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
    "49yoFnCwhKcgnR9JdR26aeByKUG5AZvgDzXRXhAfSMPbkiBdFne3BLb8YfLYxqiyyP9tmfiT1gD26iigdmEUZZjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "495V4BEZH1xwRwou7M2Tfcvkfw8xW5ArVcUvfbojhpPhRFpQH9cgoaabEApLPDHjeumP355JS5Wx57yRVa2io9WL",
  "key1": "5XzZfBQiuSKYd3uQKdUF94cnZsEM3BY6s7Jr3jchLiUp5PR8JFDLbr5TAhYkD8qjChTe5V5i9gyPqP5FuiV5xM3t",
  "key2": "2bc4HhvqG4hnoj9E8mWTfr6ojr1QieWLZTijhbcEKb1dQ7x1fGuZR81CYRMauitbrQTruEE5crxYh3ip4NGEe2ii",
  "key3": "4mPkcdxMC3pJgXfFJAVkdmVMhsJ19hYMNQabYJqMm9J3fCKTCinGi7XNfGzxTnoE8WMNms977PpFfYKDkBtzJbT4",
  "key4": "4FCEWyAiv1wVyowCsWNCHs9R3GsqvJJPT7bsWB3KjwQpcXKG43djV1jDacvDMDLhpvPpbbpwpH9PHgCDmxbQDCh2",
  "key5": "2uDB2jeTCAk8tSEKBdnJfpwvuxDnSjCJaK1NA4bnUzR4Fdixrk5ci9SdGDchT8bFzr8KZaty6iAwuZNtoFo2Fd8",
  "key6": "2237iMCmx75AoC5TrvT9nTrdGKLVvjRpJELqD2mvUdk9cEfho4Hc7ng3auWybJ68A3bUBng3oUvwYgumqAXZiQ4X",
  "key7": "hjZHJVWiwZsAQRxKFCg9LgRHzWqat2nFXvX23vfxX1d7x28n2EcXrFJhneh8TceinBfAGc5a5SAZA7EELVLaq5e",
  "key8": "4FHbR2PB9krytCBeamAwUe9iZ7fRcM45XrvXjrFVSCGiQM87w3rfvw9PsT66QbYKopJfVAZT3JyrxewayL7JEn9o",
  "key9": "223SFyiHHPZzgcG6yACXjHZnMf8e5XiZxyJ4ptRzTJ4j3veKYPvbRtwQaLGK464MAx1vhgGR7oZCDeUUbfiKg8er",
  "key10": "5evAYMZcXy4B8BXUt8WyybwPWAbyzYSTrhttUz8sRYSTLn6uVdJbE3pFtjsxsDsKrfJCp9Wp7oYueFCpGJYNEqED",
  "key11": "33m6jBamTUAJ5bZoZw8W2zuxSKauCsrHCg3qrCB2iGdeo5KefXsd7LXcjFko2DbfUvP9czq2hyssFG57EV67VbZA",
  "key12": "2vgockaim3SherWRc8k8o9FwzigGRTMx6i2zEpSDw7Vk9KRHoi13EsUSnUWByYE1wJCATmTrAQ2n6B5yda7VmQeX",
  "key13": "3WDPWZ3DamGGsQsRH6Ne8TJ6LzFTtYMnv1z7q4nymN9h2sNa7ZKcmZgFBUVFaFH8HWzadm5Nzvat7oAmb7B5vorH",
  "key14": "5emjAxUEZ85fPzvbCNQBYkyc2zNbLUpwpXWC1cGhXE64e7uvqwmXRnWjk8fu8zqVvUtFMmFipGqFkwR5CA9nWnL9",
  "key15": "3aTAs7WETCC3DAUgKW9bRCwGDQRfsDzuShTruiJxPuzQTfeAz6pBPSveEU9kMxzBPLGkAduQXfQjyAgcJ4UxgPze",
  "key16": "4yRgKz3vdJ5covNvWPyNYydEgBWzjK8M3AgJFCLf1jmrt3GFhoB8MZz7L8YmYqpzhrpgYaV4a1y8bjf9Bc7KUFoa",
  "key17": "55ZP9swAg8pv2kErR3duUM5Qow8HYkJQfPsH7qxkZGhkuEynpLxmawBUj4nx7zhuaBSnTQLLpSdV6Z3UoDv4iLGA",
  "key18": "4Tp6nY8vY3PRfHerzvhWcNzXga7HgGDpdHvDt9fUkFWd2iAtLeL88KVbESUbzu7NZaYQs6ANvJGpeBAYSFvEDzjK",
  "key19": "dE9zFkDBRtdAxLLWkr19bWJEY1jdGRhtv3yxBDgNye1pLLjQFgcbrqhkbM2HkT56eoVVyzgDSmGU1bNPGCkiFuK",
  "key20": "4GpEV85Cu98h9MKhgEZiLVX6X4VysymigtRf561wCTCw52yxSPAx86QBqqRMMMRYDpc9z9c716UsaaahjWtR6Q6N",
  "key21": "239m827z1EUeQQjxTLpYkmQuENEZJhAQX5iv7MVqLANY85mH2GhhhFL65D8QU6richTRaYVqTxwbufcNQSQQH3Nj",
  "key22": "45Sr6gGNCXu2yq1LqaHCU4yFH1VWm8MJXwJkfhNNwbCPeBhNURTANqTmy7x7t1EvPyVWFaaqoGZMeKbqaWxFCcyx",
  "key23": "3GWBsn1tqd82AGBvtR4ZpxU6DWLFNnHvZ9rjBRnuDj3Dfm81rYh9AnmE1iqwHQeGW7u3PjwUUDZX4KNDds9P8tHe",
  "key24": "3r37Mjb9cESgHSYQPptbgJknCemwxGociJN2kgmmqwhSfeDyJ7wuTxRH5tv59q4oJwy7PZKP4iYrZ9rm2E1DD6YA",
  "key25": "3gEh6hnfE2w6GzvsK3Br7JhxLav7CANJzErEUu8FQ6U6xG1Zaqp68nG7Htc6rztLK22ydn1XjSxBzvftJbyW4f21",
  "key26": "5d2wTSdt4pssp2BgxxEwZ2BjuK78U5wdEfMEqGxM91iB15JQCKDJ5JyuBsZhzqYSNdPJjFb7mie8NuqCVcYgeaoM",
  "key27": "eRX5Xr9WkuAZDVHpeohTc5PMBTkeMWJy5JBJabC9Fe3ut1ksEyHkRNhYh45ZurPeACKefxTzpnrAJRB5mEQfK1h",
  "key28": "4zQuwvmi9AosejXa1K9pSBVRFJF1eLUBpmawdtFrKrcUpQPcGmWFbqF99PfUgVqrzdxPyzvm1dDFjKruCjixyduo",
  "key29": "4TzvZMpzsYsSuqaT1cgjWiKRoys1UVLP8fEdZpBXcTnJn7coYZD52kyEwV8VMppP9v2rZJNtuD5cm4ivDTx8XTFY"
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
