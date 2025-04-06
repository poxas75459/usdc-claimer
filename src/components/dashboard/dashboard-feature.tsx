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
    "3uz4EtULqJB9wGnfcDvsrzaJjTrv8ed784mZUxUtAXm3RwiQ2yRw9szm8sLC4oA3Z3dTMA9Bj9TeMNLaiRSx9wX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Ec4CenfkrFQc8vxbc5MsmYo3X8fFwmurwSun2fRddAWnQBU9tyDZB6u66DW2CeK9XwgZvn9BNy6HHVp1pFwzS5",
  "key1": "3nm4VzC4d4iWmeMZfb4D9qmziNkM8dKeDsvjsDmD6eDnupKu358B8BEhbQ2cCthnSsguFrRTa7yX3v12b1RoQpK",
  "key2": "PLSGhvMGK7bVUYZzKjAm3UgEFPm2pz5tVS63ics7aVi2ibJ19VQ98k7A2LjPQQiZjTQAeDJWrZvUXskVHfM6L5V",
  "key3": "3ofBAmrz5RdLmn5U3tDfMBVQjm42LcTg6ErcYvvBBmv9Q91bp3Z8628qQfxaCinPk1NNfjWxGww4KsLvHY3mMYZJ",
  "key4": "3JxQaCNbzTSqeDFjSzMZfqJ1aZ9pu3186yoGHLZ7QU4FkmD7nMF5Attpfq4RsP9fR8PG7NtoyTfpSPJwFVqm9f1L",
  "key5": "4kXNKmVAoe4LivG53uQ9iApXeEtBR4jUMc1wdjf86X9xZGdopsRjcaFJogrimcN7rFLGHqSzZF95QFWTJrBgCFpL",
  "key6": "2VMs3BWcUm6VmbDuwfCjP1CzDfRcNGf6dqzcKRAoAzenRUKtZ7YxjFSavT65UeBvxs5k8xxkeWK1t5ft64FxejzR",
  "key7": "3uZ7qt8v4ChTKYrHD5ffVTwiVkoQwesyvms669dhTTgrqz7GHM1dAoz5gHqCZuhms2TZHmSW8NGNuSGsSg2UQYUS",
  "key8": "29Gdd9mYkpy1kG6UkuiM9GXWh4sdqSVdDukVTXqP2fhYagC2rkWFvxWyWboE5sSM9Csr36CREhkef6EsYoZnWmex",
  "key9": "4PEd2KaC8NTNUTVQtRrS988oZhRT3EunfpZ2W4784u6b55RwNaKrreJwRtvfdmVoBY8nrii9txpgx3sB88PfRAh7",
  "key10": "3izZiT33Y2U1tTmZAe3bdQg5ajQe2BKsCrqZvQoBum3rZjzkB4z6XsfzDtocHDFTXpqrLWg8yM4RHmk2bQa5PmWw",
  "key11": "4fDGAWpv56bbK8FnNH2J7dzxS7vUUJSn1uUJiuEfBJZDoZbFhKW18YocDacZPx3YnHqkndCCVyqkxJA1TGvN1PrA",
  "key12": "2bktatqdpquAN6dtDytva6ABHMRF8qQL458XBqT862oVNaTojbiY7tx56bfEVM9ZHcaYJNYGKLjYyp3WmK9gnaT9",
  "key13": "P1KiXnpgVaxZiiitWP4pgpkgu7nt8eTcLfx6HSZwiM9Bw14z98n4Z75Z2AaFrvYYUSw5Ms5WDhLLyvE9D9Sp5TP",
  "key14": "ARKGzceu6kdBLbkHD5Vc1uGgmyiNnoapVk8mCtoF4TpmnShSEQcoTxJJNWRbCujvoL7JmkLykZF8VLQv224xzoX",
  "key15": "w28g83ZCD48VobSR53hchYXC5yK1qk2DipRP7xbwJoVjYuyFSxmWdHtxLCBYyu7rGUGtAoZ65Z9A9kQFws6wD9y",
  "key16": "32kcXUxxfSpcRW1wri1zYyYJUL59seRkcromVzVfm645kCZckeCJQPRRE69XN7HZ9ErqGZs714FwxxXGmxK8HC9N",
  "key17": "3nYXVyPtaArzP5vpRo2byMTEBgeLdZLdb4meiRzMLsREfBH4D27BDvh1pQ5aW8THBBCtmV1r7UVj1nnNiBvc4N7D",
  "key18": "35TQq8HgEj8HoJfBPFDF6a25AgpHjj3nQPAbLZkiRFN4DvnRxnrNbt5iAiDcnNjn78mtJsMLi3rsSKbjzNmCp5fB",
  "key19": "5Zn4rvdpmGLkg75Be2AjJ63KCHMUZnGNoqLJsfsx3gVsnAn6qEwEk3oz9nujwY5Xep834PMH3KRYiTyxCZnHzFMa",
  "key20": "4xKPak5dVW4ZiYviY1wZpDSCyDgGFZqX9ADhYtYUfRmVDxiky1BimaCmfz3UrFfGDDpHWuc8JL36yf34CCYZQwae",
  "key21": "22r8fdcuWXFsxYMiKn6qtB2kQAF3UVn8uUHynyP8ziAuEE6t4YUHdr4kgY3Wu8Wf1GECsuBkYq9U3pKxiuXV2UYn",
  "key22": "2Zk9R6PbDEGTLTaeWRRaQvM4J9UB94jpg8VpDMuqdsjVvd784uLGZNWdV2nCspxN7j335xaFQvyTKJwfjwB5emFc",
  "key23": "Z7HPekD1s79b2jSiTzuP51pgSr6sYhxv9XqP8YBGhpkaRuRhV9nJhwsmGkjykd8tTntsJzMMHhWjSZWcjJwfVz2",
  "key24": "4SoKaDXf6YX3KLmHmpGjn1Fx7buk9FWYyH8pefkWCCvqan46yPBxW327ohmBKp4jgpSNsnGqG2Py9khXZJJkAogk",
  "key25": "mGoxXapYUJgiNxWMqAKzNVULidn3Bu661a2KYsMBfeqpn8gKDTMvK1Z4AJdkQmB4FJXgBX9oNWRaMFVV8YAL39j",
  "key26": "3d45GmjfQ4Nhcomfvz1G4uFxy3GyrMxSZenBN2Znnf15vGTZg688acq4joRug5YebFrY3qADsDX1Shb7mgf99hwN",
  "key27": "2MrGM1z77BcSxgMWSyBKK4kcpYcqUmbDs2LQTsbu153p5dFaUqPRSc17RvJ1JeZkDBLmEULQxR9K32ZhCq6c9FSB",
  "key28": "28M7xeagqs3f7StpSQc2QKMPPfYFJ6YVFm3Vq5wSpRcBb2xeojXXd5x415xwWwH8PqLpdchbeGvZwoKsHTL3WK7e"
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
