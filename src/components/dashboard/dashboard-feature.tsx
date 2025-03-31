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
    "5LqRzsb32Nxc66bcXphF3qbhbtfre5DBA36hF7BrCwaudx4LsRsmNxJ452Qwrep5ZmDFmSP7oUvJ31QCMEcPwbGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PEQv8eLTtzhb1vCPqCWfj4o5BAzYeNbUEje6x32eWYgLuhytq8icnQ7FzbHG57kWhkAA5wYUm9HWoBoYeokwaT9",
  "key1": "63bC6qo1iMHe47zWRy4qVF1qJC9x9ARDmw8qtpN7MS9Yh5cXnVYeb5mnraUG1B5XBXMPXQAWvYvrCj4CPC4uS12g",
  "key2": "5EXHVR2JZw6oj3FVbiWBGsBzeDsVVxmh9dsqf8u3Ek8vFEXCWuxFFwWr5MuyvxY9Zmt1KnpzAE1zpEkVjoD7YuW3",
  "key3": "3AUY2iTgwXBKvoE2Vizyakza7UvBhBcPALc2qxEhrS5mxrTVqazM2egBFFKbjRuDtbUes4zbNyTUXqDJkmwWboG3",
  "key4": "2p3Fu8MMDkVDs2ueNgUsnc4FBXEfZfnWTZTztT46MQyEqcUoBkRnzXkTws6fHnSjfZLJH1rj2TWz13RdyP9g9CLs",
  "key5": "4CFFWA2F4HMHHKi3axdu6GcXg52m5NVrhcRU81JDyDBam84g5KXr9oJeYHWCevUph8UTjhQ7KXJb3DdVxVBdu5K1",
  "key6": "4QcCN2PusHRnC4TvqLvUfRyGHcf13aN5h5T8vAafhNm56MzY1azoCHdAvGxEHLoWyhVn4ZayTy4rg9nksWCeaw8Z",
  "key7": "JgCfvSXf2viTaUMnWvm72acs7CXmuSJwWYapk5bVg78T7P6SbPgScvxuqTvkLqVmjQ6dunXYztPQnBaLLAMruaN",
  "key8": "3aqPK7363MuAPHkiYKY8MxNvMhtu84Xi6AyNidAG8cYuJgsnUb9WBcosJhWrr8tWeCT3tKbf21uudkVFz4uCuLbp",
  "key9": "2XxH3p9cTned4nFSuoK4AV7jwVRvW5PD1CsStTb6rGmbWmPratsBmbnfiMCaZ8CCHRky27dbFkHax13GmEAWF9YT",
  "key10": "5kGJ8gbNYJ7moAmnXDR4zpVGe8ZqNu5gKVPRf7zkZoeNvUyiEV5cdYjooH6SvfkJfVxBveEY3cMsneTeaG8QJf68",
  "key11": "5HCimukKjuwMvHbcKeimCJ7Gdxsz3ZHecHiCDcnr2B4vk65a7JWGp8GVEYbEnMNnCffs1viiRddXffT8weocvFDQ",
  "key12": "3FaatThJAC4dTzfufunmptitP3X5fUouDr78SskwcJ8icKGe7JnJH5BJZNYv1w3DFnujb5vuQ1czpoggmZBsec5s",
  "key13": "mU7BYpMN8bdFdehwjFPwHfL9AdsebxqdCEp61SnmBNJJf6LXsvzM5kVSfcZgsqMbMqbxKUotkGgE8hGX5ecC8Xt",
  "key14": "2oxCYQxYVdJGuu1QyhYEHUYsNFBPNMScdyhLsv9bnFbtP1pxqqUBcMXWAdyYbWDsipkxKBHTKNRSVr5wHG55ZugB",
  "key15": "2rJQSmmm3gTLcJ5HFXPaSFb8Dn6KVZpj87Lh5F3QBGRgFcvVETAZ4DBoxfCxtMXts2jdHxXsYnUiHNnFuW7JgBA9",
  "key16": "2Ud67N1LLY4ZajGJ4FMwRuK2V5wJawCsJiJppwnVpQfnbfUSmsPPg4NwrV3NSYymhhrRVxhfLbMENWb2GnC87dxS",
  "key17": "1h4VcP54ShKNr85aEx6Fckf3WbRrrofUcayanCewErPQz8PpTBA9bFbjtGowxMnXeWBpijcMk2vW3Kw9iZmfGJp",
  "key18": "4byQpjEZC53UVGyDXpzzCoDX7yLgAi5SS8MY3yqgdisC45iN6xBtyn6jkQQNbxZyAZdVFg7GaaUc8oGVbNAmxVx2",
  "key19": "5L9JrQgwdnE6am2mXrWBVzo7VzgeTw9uKSeUN5uX3CxmnNg3m1ik7ecgqhNNg8cbsrMhMdxjYT6uQ4YuWnDXorPk",
  "key20": "3DvZzEq4yduB1qhFAhweP7FUe6bWEoFP1ak1oVJFbe2G46CBAS7QMkhopMdYrhy512ybkkBaDaCx1Z5UaZhyZg3o",
  "key21": "2rjNTzJNQyFgoUxiiPvL2xLsDdxXDHM382NjyS9eTRsK5CqUz22JPZXGVbVZBvCb5JjqsTRRrHvhUCdH8hseKXZz",
  "key22": "3MPW2hr8NJ6fyPMbcqM6vUNp9LAx529M5H2eCN6ExL38XHVGBkVoAsP2bgSkfgNLbDR2J9sfn8gwMR4aKGv2rQnR",
  "key23": "4X24sBf71bg5eAbG8GzsnLYuA9ERvcKXiikkvDLjtTzdhVawJZ6xqwwVkFUKU9sJm2RP7AiVp4atnPm3WCVgAn3a",
  "key24": "5fjGpgKPnHQms5qGDZELFZ7PEyXigbyHoZqo5WdkSxSYabAg7qjjUxqpnHjVyzn8Rio4j9mcjbKY1ikfciji6rTR",
  "key25": "26DddWPLmkbwoqFpwTfLKAPyW4Cc8LKeg5q7At6UGXtefzsBzLjdVar3Xk5Pq14nBWMhYuvDRGsG5qK4z8ykzFrs",
  "key26": "3mr2KffGgCijoQR1BgMrz5vMsinRciMR1FDG3ux4HtfZECFRaNC3U7LmDMW4x1Q5TECg5EarQcE71cgF2QwcoXnB",
  "key27": "26DRAUo2y3Pri9GYeR5eewiPVsbmE1D127VimqmQy7F2Ly39TCqRfKVD54dxUGKRLiXSTMMuadzD19wjMw3jN3K6"
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
