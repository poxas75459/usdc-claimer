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
    "3tg67xsqc41Y9xQP23izdQGGBSBvRQNyLXJnYy2SMjwwUYfTeY6wnozWcUBgQaoHKPiH768nfrBuc6rrQxVhCzSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o24ciPPh57HgPZHkDrQMSDWSbBBXKexUh9BH2hWycWEeNUpFVzMewvRUTvxPmUChXTfdj6srujiVPqq7PTD2ucG",
  "key1": "3QfpKVqrP3ztRrdFnU6an1hFsDu1edA68TqevzY8URnxKzt7dNWLTThWR41g5oWfHcTTs5LxysbDFYoubyoWrFnQ",
  "key2": "4BnqyUebeeVezZNvX6cyC7GAkWJNX2h4MtikHvZ2wJWcJzB5s8SxPKYBqKg2SVvybMUzFr8UEuomhT2hwWZewZ3g",
  "key3": "5dAajfR5SDqQQokHxmrV4E9LTs1gdYz1VHrR5zU1qmiExBV6WYwVL3QDmzqMN6YoeXKsS1xWtrsFn4Nbr66orNDq",
  "key4": "okLLxepsDiVtMo7JggBu21rtDf7iZr8cXJhtikEUcDTb3db7ZUkhwcFfvsyaqGJxhWBZJT7nMpAJtUZVKxzygXn",
  "key5": "4BnZrEFDnr1MSsMfJk23GRJBN25FHSVFakjiE3N1oRzAuzGCPemKp2FE3ABK1hAkHxrCqjGRJM4Ei4b9fjuPRA6S",
  "key6": "2u71MNCxQY7o99w6ejW5DMWxvteno8tstmYVKV2s7b2axQ5XjfvZmvXr4V2w7mCiEzyeY5t71C9GhEYAgR77vqkh",
  "key7": "64M7S7rpu3j7DGYb5s6wUWkeK68Jb5JykvZAvcfNaBsfSGKFgNUH3iVuXm8xua5YBPmq3yuhjTMeur2PwxpeQawF",
  "key8": "TMh34LQHSz6Z7BXo5Mx1U1Xb9ifsqi1EHT1pDhuc9ohn3XBSuDy3fAAZTE4LYqvc2hcB2kEBBXYGrsrFNGxdUs6",
  "key9": "4nEz2SM1eTcbzDqormfc5PxKebgqRQusqgQe5WxN7WgTEzzHjEXxPCmATiYeNRj8azXgvwGPfJc7cPgU8EdjCdeJ",
  "key10": "2GX5U78kMx8QwJtgggG2Q7wqyftq8iVLvUXDZz1QiAubQLecAE13pCt8C4EEh9xRMZh5cy1zeG65sJhEbNNEhfK3",
  "key11": "3znjPoWucTHJUHnFoxTiKB386Qz7AC6wyVSqc9WtCTwLgSNRu7VFrcWRiKgs5TvrjcHFyQNEf2YzMFgfe87stCmy",
  "key12": "2CWFPntcY7hnvEUhZ6FhEgqKoZz7gz56HFPLcc9wayu8jH9K6QQUcWPQA3koYFf88XgPv2gYsC3jvbCgZiv9ah9m",
  "key13": "3FaCRrCMF5416YEJ7h3Ck3uHoaUmNfbipZo6K7eWA54Kcos213Ld6ovKDkLaUfQZBstUdWTzmazH1KSuA8ZsiGTi",
  "key14": "4EH6baDdY4aX75rottpRrVwSQFHzX3ML1ocm7bGRXVq97Hws3FpPLG26VyLwCn4HU3sq8LnuJcEJkKAh8cQxcWAd",
  "key15": "5f3AwsML8SbvYtPV2kdjdihC3ERxxNM15fhvp8HVgiQfxiLuKvaTgtoc6c2gzTSfcY712pij66AhRyghqGZxyPAT",
  "key16": "2fBpmdkUCGJJQGvHBarFa3UhVqaBhTvvVxgqGzACwX6ngr4VnpTwpxyPjhoh2dwyAo6YmapjmMaHpDafZzoCYLnh",
  "key17": "61XdZ35YEdQb1ryx6htjUAoExwtiopgR4wkNPsBEt5HuSEzpQEZg3MUXhjSGQDoUBr66piF2M6go696kg1MXktc2",
  "key18": "dRXhmFExobCL2GeRB7Kxe1QcPQpqAT6NmJhhs5Mwcu3CKP1uEG8gNrQvgrxp2ujimzmEJcJ2jwxooEwtWFLkkrs",
  "key19": "3Syc5u5HqsGtqD7JHP4qk8kkZXiAaBQJnBXabA8EezszXczzvpe7RwNyRwWqR5u55vXHULCwRDFRGRXFF3v5S9wa",
  "key20": "4MgMfPtF2gmtiKzwbqEe6MciRLLgkK2dyexMy7yTt5kByJBoMRcpoJKY8q86ANk3w65r5uBP4tJx2jCGypvnURxb",
  "key21": "2G6Yi3ookAPBKXSLGVC61cEL5cZvb8E1jx17hmQmY4oZ6LXnb1TZE6fTf4rpNEES23reKynY2Jr1q6z7HhNMiQ4Z",
  "key22": "5DLmhyAKb7B1koj1LKtG4kBPnoZbV45Bu4BQmLiKTmESjZQ5DpG3PHbnTD5wdC5DR2EnoEhvTtKCvucnnKtqKaYa",
  "key23": "36vr4yAsUzzhmbCGoCe7VygmEczsP7h1b39Xgozrh33tXiYmmJC4haQeeeELq23giLaEbAWPsPXXEkaqYxx3682q",
  "key24": "42gmKxtru7vfnxqUmR2A8e3SBaPT8oChUxhnK4f2yuBaZsCmwGcxhEyEvkLMARgbjdUeZq6Bn3pxC4rE7yKTy2CV"
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
