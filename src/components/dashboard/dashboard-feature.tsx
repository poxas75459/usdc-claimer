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
    "2BdYapZStzkUfbicU7pdk7Weq59aHwJ3efZNz9ms3vVsnz5fbEweJjJRTERyiShFA26AtL68f5JUi7s72enLjaYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oMaFqFq8JYqAjpW23eHBqjQ4JdPe2U95qvGzCJgBUK1KaXFT3cZGsVjizgenJL4URza5GqQK5KBxb9eJRJj8uKL",
  "key1": "4CPj3pobPEvMFXXC1B3odmCBwmuu6uEBcyb4GfFpaFHomuQzx7n2hN2pecvZpA7zN71csNvvgVhjv1NdGq7oCWE8",
  "key2": "4G7kGA9BNZ7LAuMifGeNxNvtkDHzbNC3AmmhrzjuhumXyp2sWrybq7MftqQinAXQAebHGmCUNdgNbxnisTbkhwtD",
  "key3": "66YSscPtKeHAaXze77FwXeijAhJgESzvoyrxrT6AmmeBk2d5Bvuf99XaQtWrJbqhxRKw9PtDCbffVt1o8ASS6Lv5",
  "key4": "64H7XUQWoUfC7sqemYWqMngUMZsLqX5M6eDSWjYLqjj9xEL18uPxTmTYYfDHKY9b4ePqubQ9acY2pAGG7moshdQm",
  "key5": "4AYqqHgeaYC7QpFy61NxpNEC9kBtfHPra6WtZ9hqQpnqxn3fCXmErS3mswrZWL8C95jwWZ2kmnnPpM11bCAEFFQe",
  "key6": "4GHfsEdzdVqyUxEardqXv35ypPUordJVx6bqQ4PEmhutyCRQKERbKCr8Wp9AEnXrSzvc4wj6aPbZwcyhrwMTMT4q",
  "key7": "2Jf2BZUaTZdtUvFTLsmma3Jq5SSGEnVWoJFZ72NSp1ptJ1tYMngQNuyq2n5eDxxZERMBgPA5YmmjhsxAyJ8fPfaj",
  "key8": "2uUa34auXqM9zSndf27aPrg76z5cXVvFFi4kr1JGG3PDmMK2anC2oyRnTXSvZn85KXpyX3H9w8qyXHeeoa5825dE",
  "key9": "62GMDKiHjuKCCdsFcy5iqYfJNjqvqY8zTmMoDKPYRwGwKBChmXnLWsEcFMc4UNxovhVeo9v7xdKjgLiD4KR5V2xk",
  "key10": "5gPAwUTury6ojHcUPfK8xu2MRxHyVUfAEgnptt2eHznSHtu2zbivDpFeTCe4hRnV4vPXMwTYsPB9Qf8XSepVVPcA",
  "key11": "3Td3pUDDcycYgMwwYi15Li2kFVt6niRsPWsmqmdUnmcZ1ma2mCnNawN75EMpwfdMrjCecFUiDsv9mprTyHhHSKJQ",
  "key12": "2Xxf9bVUmSgdM6cisHvjKXmvxbnkRoUYgJJQH1eTnGMvzjTfGc5Q1CY89Yx1xexCEVfkXaoctX8ajLmAsoVnnfiU",
  "key13": "4mYz2qgLPtjFmPdPhUEWzMVR3Nc1c4izigw2r4UhntRWQeqrHdoLP7unhc8DoxdXgTHRo1KFnhFd1DTXaZBYu61Z",
  "key14": "5U2ARwvF7YGfJSb5RaZpNiFK6SuNK6bRFSDSYTZJUm87ee8NeiedbsEx6yfgRT73kmuU5cWcFNsgA5zxkGRAyuSV",
  "key15": "3jdj5uBT4nzL6ra2bHZekjVhdSPxHmpx7Ndk3WoefNstUGt9zrUKoyxpjN7XH5dNRvSHtdaTEPiZqQ8McvMYG1kr",
  "key16": "3J8tAfaKfS6KdTDvz4fvcVn2PEAwTPWB4jqWLRwWt5GkUkiGyT8FWa4hrehGW6yyGnEUV9ozZPwmAJh7tLrd42vu",
  "key17": "2BXt1MxaUHXcNg23uRfN1nmi5dnCT7kkeEKvmBMLo7W7gtuge8tH8qpcxe39BN3aSTsLSriz5yRaU9wayDVASs9R",
  "key18": "3RYHHK4fqxt8oTgm77PnL5Zv2d88VsvHSR79sd9C36J2XUXzpT6wa3gKZEqRR7Q2SGeM2gTQCFyBub8kpWNjEMwi",
  "key19": "rNcZN1k1NTdoEgczRTNu2XB9a3Ug88mUocsnpzBPFqQfUaxQVYvDpviw358FfAvcUyXULa3z3pRbtkug5kUSVS5",
  "key20": "WBDhFLEaUXTRWcmFskzDJKBA48Cy5QAvRx2dVLbacuUhzVbogxo2wpJpwSNGeP9Lto4YCcztXxMJG9HxFdJsi3r",
  "key21": "4wN7gYx7ix5KXXv3jVMiM6tkvDDGDYNPqFDfrem2mf4wBvYzNEDVEGqJZX6ZZ2WkvFKvB1hNXvdCx6YXvEs7hZrX",
  "key22": "3nH57v9PchxgMiyWQxCb5QDJYE5nbLiyGEXjyyVDi8TMcNL7GwessPPNZLQ6MndR485VKccSYAiKXh3BXovpLRwk",
  "key23": "34CUGWwYZoPaUDD6wo4NFX6h5zCp6C1h3VcBbPdaTdPSdcrPeFZdPyZsuzdgVRRZKsM89hGeurTKYp3DKz7DD3Jg",
  "key24": "49JYZVn4iwEKo1x89rXDBvuorF6yChAjGiNYe2woHf5v9FwNBKYc2tYAtgeWEZsceMNVeoQDmuF1dBXQrL1CYX5z",
  "key25": "5BM6LWEj4ZWbSRMezXSz9qW197zdMTNCn1zL458khTuKNrKhAyN8meGZaERCfRbbCuGZnsTsFnwsm1tzFwpKN43H",
  "key26": "3sh28ZthBPxZHk3L4xTF3qmQctQvZYRyfyzRD2uEc2JcsujVCY4xFPvmoDQXgrf7xwnbuGh2hbKYi858GxUJkBMS",
  "key27": "2CQTNF3yDFXEsPuYKL33mK69a1y5ExFs3vUmTaeRehWo4S9awPuay9NrKayzQymrUwnV6JJjqVsQKVVFLuDFrECx",
  "key28": "2vvqgodnHEqGtHgM4dS3j5ytzGDAPQzUHZhRovBjY87zuyXea3Y6MB6jTbr93vLe2Vcjj2rRyERsPoeCuMFEDp5n",
  "key29": "3ch3RDFeuQuf7dmSnJ3hhkFysSGSyd5QTpZLmkfcHxZ4MWyWitqTAFWyYXrdcWbPWSL4ho8DFTuHm7g4wnkBHb5H",
  "key30": "5T9Hbqbyy45MsB8a3dEqFjVSwxR2MWqrMZZ7GKBivLho7CYLqr3ENmU8dgc4YzkSBjdXtcKrdQdhkYGxWvZSkLNs",
  "key31": "4TN9GdCbECke1yVsrP6z5HNji5mnxn5ecp4tdcQghjragqzhb56DnwpBLR81ituXdgUjTyc5YXaTosGvQp1JNvn",
  "key32": "3a7y8YWtnT5isNraSaNFs5YYBKsBTi8FZd23f2bXRSUNJH7oSoiSrGjXm4pkkBq8PpDZ7f73vrhtomnFtZC9broD",
  "key33": "TjUMNAFb3jSAnGrbyD3P3d5LwNLQD3xjVYa5dXvDE32VVqQrZUR5etkNVaz1wRW9FVB6yr5tr7LtyQfpGSGSDHy",
  "key34": "MvA8LoBUhsAVUbHdWCcPH7nP8mgjVnY43TGHGcsDPYmryvRMx8to9mHVa6dvGZTxUsjb7sgaZhWkf7gp2udaZ4c",
  "key35": "exkSLRGMXWvwHGJrwuuGgVh2aLAYqiioDcj5NzZyA392sCwjWZ1YcBUAM4fMfLWNjhQV2CNi6qKH5X7yrT539cY",
  "key36": "3Lq3GK9VSeR5GXdZNeYG99wQPpeLFYxE1oUDjAAJs2vo5fxMXw7RTbxNR3YHM2C2e4yHyr1tQLZt2rn3JaeHLPVk",
  "key37": "kwqFoFstmYdpps4Ji9M2haEZNKUmYFFNTREikETkK7P1vKe9KG8w8Ju6Hj5qTVRA4JAUqxQiPjr894www36VqVA",
  "key38": "5GVmTNpdDDYiusYEuiQnrENAHGSM8vqyCVLfbaFbeMYfsQdFK69CekkftHcinAd76VqZxjGUD2rB5pqi8Hhg8da8"
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
