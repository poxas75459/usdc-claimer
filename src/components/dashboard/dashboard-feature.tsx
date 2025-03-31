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
    "4wz7nwsBkujPM4r9EzWYv8RAyMpQ3aL2iVQfs8jdNzf273hq4qcqjSsxmmSHrC69KK9LL1baMQ7ojb55AmBscsBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QZpRxDYsJg7GGh8Ky3difizXSWcKpQULF9Qm5VTqXL7zp4a83ZKtaCajkv1pSqFfnpjcg9yZRECW31hMJ6b8p1q",
  "key1": "mDFagsMkwZmHsdn1517Nm4jUPbq52MhjzJNY2PHYP5K2ez3meTGXNAsfsrAFuMwJUdmyMm7GSDKDmJxqYjbcmNg",
  "key2": "MNYMAJv62iCsP4YhtiZ8ibSsYq8qCX6ybrq8z7Gm3PXHVwiLsQL1CuCF4ZhejUZuCSeXxWeQSQhUigYaFyvAj51",
  "key3": "4ZYzQ7awESUGG4W19cSsC8JB3EywavCh4G3FK3sXUUTwUC4yKDVzrBvTefbaw6tg4oXQLrbNny6GgAuTGijQGBVY",
  "key4": "5897gTKUBptrneYb8n3HnJYQ5Yoe5HoBsMxhtZA3APg5gLaNYo8yH1kihA1XrjkhJETDCQy8CU4cMM7g7qAmPGNj",
  "key5": "3Vsw77M8K1fxDb57ft385dFfgyKQNsht5HrcEdpH7UpBdVYCh1m7yEGJrL4FbhuU8W1mMxwwutDARKjumKzarRHe",
  "key6": "2KnQvpLY6FE2dC4Zv1EB4CSz5MRBHVDGyarGbNcDshukhqUJQTFm5YUcURYikTp3U4kLD9piDyspsKJPArGooGMA",
  "key7": "eRhtEjtRwniBUkkZLkaMTw4ps8wXdbxoshf2mRSE8ECwCetH9m4Bw6YeBxgBY55hQSF6R1PtU15GyFYZkZv9kex",
  "key8": "27VWLhHcegE5tVUYGaFSjDnZC8Z15ZzwJvK2bS8BupsBuscuAjKRXUg4mLnLNgYAM5PSSzyyoUBC4ndx5eDqFvSc",
  "key9": "2K45ZYkDeQ8HsFZ81fJTEAdo6vvptk8KDSPv1zcM5ghN23WcLp2ZoSjYMbam8anzEnmQ4xbf65K3d3mhPMEJY4cN",
  "key10": "4dCKDSp3YzqrAabDnr5H5HAbdrmqGcwPxEcmuhrKfavak4Y5PtsDndP6EmWYi7zBFvZBk7QwQwvoCzqyKFJj9aZz",
  "key11": "2CMdeNxW8Cx1fCmVv6CrkPeCicojDiWLe3WHcP3Cq451XRoZ5URQsCCfxXZQZPyJj1kDHeA9TSb6UcW2WZQfGA3N",
  "key12": "HGN9Fo8qAwhhuV41bGviejUSmHUAgydRqa52tJLQNCrVgMYaPuCL26ig9en9iLDF5FWQPrh2vod9m7zubGof4Y1",
  "key13": "51wUGLvEsXcYDhhaQQUudrxtsy246PkbQiqvmkGjRaF7D28PGgu676ztRtACwiC66vheqFzG63eZWhRwuLsj78hm",
  "key14": "Kfr6DbgBjCTXn1KJPhyVkG1DvrGYDvRX2rseTaT7fr5Frgh2umbt4E699WrgGZzjoR2MMcLh2FoBPAPHjwQsqqh",
  "key15": "bxvNAfikpnmXNnQ1d4jG68MxaPTzhh81sa5ocpuzTSdjNCgddWqvXpJanT8n1HZjb9YokfT5ADXp6U47QEX3NDU",
  "key16": "29Kvdjs2BmZUZLZkhr95RF2DwL6g4cB32q5bidsz2E458WTZHuQ543uHk9AVtMvWhzfLY3Deqkx1KtJV8KTKXQcL",
  "key17": "286youqognKMBqU5gZqzchVzzTxf6ow3M74gJumwfdaJH98DryRymDisHknRa92DZh3Vjw9v7TutV8DRJqR5yVhA",
  "key18": "vz3En5AnhsVq8rb79sTP8vSzu9n4RABE5ZauvRPuPhgV6Efh54cLNPwiiLXUzarL95ph6oCNCyKdCwkDTKtmZ9n",
  "key19": "5KDKrEp4Rn79SVd4Dd7hviHHVH18KmMBSEWVkZNHdHg7u5sFu5odYvot9dnMefSPhrHufCxCEaoW7J282KxbvTee",
  "key20": "5XtAx63kk9yJjgRiFCX9MmtoDh4G9n1fAAQm7fpnVMmhLJN8h735fDfFdPYpSH7iu3UNZHGTKJykCDoZ2MfzGYRR",
  "key21": "7jFGGWZQWj3AjnWYndmDt94zjEMCMdsyhyFuM7YciFxaEWnFR4mc4FsxE4uixu7CSYWJV46Mam1zHDJKix8fpgD",
  "key22": "35Q2djx5fvLjYjhKeYCsDkT6ej96t1kaCbiEj9AqESH8wNkFYp7vd59tiYBv2hVPp6WEWabjoBfxC5v3ZXA9b6Y6",
  "key23": "4yLyvD744k7srMxjkH8fQe2X2Mwdqfthh2amS7bKA8DCzugRg62QUsXgTHbq6WAK71e8eRXo5TS6sGb78TNAnHRr",
  "key24": "4KDYckw6ZJCmnaEbtbfnw7Brpp7bNFF88Ye3p2YZpPnhK7GVoFXwrjkwGjXaizP7mhiWQ86z11z7EXjZZ91XHdFa",
  "key25": "pBJN1VmLVnXu2vyC82a3bAM1KQTQjiEcJo7Ad37qZQMzabz3bet3vkPdwZEiYAgfi9armboojT8SjXUg15WgPn4",
  "key26": "2MFekopmQHnn1sCSbxJqiiAPvLQurGixgLQmNXAy6oaVw5BCzz6K6gfwmDM9yifCKwpFnpUVHzaBjJU1iJMAU3Ea",
  "key27": "4KpzShrYTXvuhpc6AgeH9Jdvk8WcdrS2htqocNKuhAWQcLa3uUw9s43zopPbfoZpuS7wbXjY5RopBoCgkVbicQsj",
  "key28": "3Z9jZ2SBms7tkS3RbxMzt388BL4kSEiZS9yPLDBWfv4oQocDpxK5W65zY38avYUSFfGHDhYQRNscfyURp1xhbowg",
  "key29": "4kTHyhyfMrxJLjVmcM52io7uZWcgLPyVqBZkNu9yfh6VHtY8iMSpjSU8TNchQXNBU87TUhBRViP1PXALgn69XuZc",
  "key30": "3w3zfZ9PrhGJuzKGnEgiVeGeuiwTFGeDo8RFymSiU9PmBJg6GQFtbF8PYP2R2V9jAYqTAxRWX8ZiuWFiicPsjguy",
  "key31": "5bg2xF4214at9hVeJKoJRq4i7U5h4cbKrX75bpe1ogGtswATmwyvuDxKvg8P86SyfKnmLJkKm8CdXKvijokhEw4p",
  "key32": "51QP9vKYYwMJaFtBqaYwkqicUYbs8Q4UX3xXBe6B6c6GC5ZxWGQtZNkNwgQpwJi58teUocwWwqQynwFEdpUrmmWw",
  "key33": "rHgGXfQqoERuRec58ibg7qSrUC6Lq2a9nwgEziWCigNp9o4nehLzrzGuMxzqsFFpaPLVkQLChgx75dAPoyJLsKD",
  "key34": "4zQreQQcAWEXWdmdDfsNUNnbD4TEZDCDaShDcHeKVke2vRXwheUcMHqQMtrULTzuHkGegAjpR2StyxatBy5aQgaj",
  "key35": "4z8WctsWYuFZbNnjSnjcsroXyzubpcc1JsCxiDDMxtRTjq7avV9BbjQEmWUiSHxuPRTd9XR1qop6RWZMQ8dcUXJ4",
  "key36": "2n7VFcRC5rBwKcdwiHvAkoHUe1g9seJdVbJFkSJM3qqsaciRPPdxqfetFtt7mMPdG6uZGYQGv6m67cgdF7E8bkaz"
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
