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
    "2Qu5q8MPp3jtyQLLYGgZ3gQ22k5swJFZmPA9W9oBVVQPfARB2KLXbgrM8XBBMC7CKa5oiZpzghcwCPpDdPh2d1JT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GMTvLYqefaXBWwmKtvfoXrfmUjp3PuoMpYdVVp4dRNxdZDcXGkvr7W566oMo6P4M3gWuDBNBkKVbwixKFo8DdUq",
  "key1": "3oBJDZ2jGq1u44w6hRGhgfmPgmLjJrjq4ovjtghS33eYyG4stn9sVoboYwrJWCF3vMKBHMKEhk29uUnEakK5EKZv",
  "key2": "r487UxjwMLdPLcSU5pFomoizt2G3trxPn5A2erXM8RhuigiEitwzu93ay7G9uUVtTSnRx6oudrKmUkfYUxnFEGs",
  "key3": "4rL3MxqJntjbgPEU9QPkBdH8XUmfLz3GNB1W5dwkQ7ikRnCG2Ngwk6AhoA3YAd9BSv9DtAvresMxwew1YjPR6hmG",
  "key4": "2eMKSEdP4a9NsPTyCu3fnPv1j6sYmWjYm8471jwtJ5BceDLMgvykfMhsDBHUqAZCfawc6W7t3KLh1tTscY7rrRQt",
  "key5": "wSByHEGHMHerDFZiA3afTXPiX8NPV8joxs5six5b9uJKtkaiu4RzmzayZ1oPB6B3BQEEqpWsnssWsSq1rZWiTDf",
  "key6": "5TKboAUb6xvcjorxQkkpjFuP3TMZaqDjCRci8BcZf8oYcxgqocr6nmAcKhSNmnuVkvzZsk2GXjjX3r2HjeciuQjU",
  "key7": "3ZUcDx6qKQvbGsMiMSMu5H3kA81zpEWm7RC4V5gisWkS2XBhGx7m2png1p2w9ZZVPmsqqbDxtaF9aWU3oPEW1pKA",
  "key8": "3P72RkTsuTaHa7xoCcHLsmq8AqRo1EX55f1dgonuUsSZFWki1gmnbQ6Ss1qgE8dDYsf1Bi3NKTDrywFYVvQ2adDL",
  "key9": "53jzWkxze6wX1dpTTkSdEuX5rdpgZNjqdHfknnYzopFoYvs64qmyeKAVCZqsAJhVn1sV5RsEKPaZyHq53nztQQji",
  "key10": "34bkD1277NqG5doEP5jBdzsoEQyJtdsFQfxQX6EhJjT6QUKXyMVbsWhfY2XLZ7PkovqLBRCDmSwCqsu4zKZJCMYR",
  "key11": "QheeHqP8f4fZrMfnq71ruPKBau5CSXpqq2x8W6St4aVzwn15s5N2AAMspr2nhAx8PKPY2jcu1c4851mLqfHoRgZ",
  "key12": "4RsoBDATADUdVFQ32Ps7X14cbNr71hpdgFUURAimsUxNz5MXip9paw5AHTgj1vRfWxhL4qmXjnUDx2z7a7RrrNNq",
  "key13": "NrWQZCBspiMjFf7vM1uQKgXupqBBKXfVDKgpkCx5rqUib7K2sisyfSrQ3xSS1uG9MfFmMSU51E6HNph5JQSYAJF",
  "key14": "3kU2GTfqH7dezdCkNz2mM5j35SPrabAztApRV4Ei1xTsSMe8yVzovUNZYQocqXdx2od3o1LeNCwnxSPuauHvUaTk",
  "key15": "3YyjCNJmmSLy4BwoQzpyuUYZmZzUREQF64A5y4vczJpkpKnzm1mj5zYnNo2mfKiTP2aqPgxW2CfWX9RmUwYtSywS",
  "key16": "2avkq2RQLE1BXye1PJQdcWv9k1MpQf7WBr9SJ4pj3MGuqqS5tZ8GKHnnmbjPRN9akcudspQ2fBZcZuL2FrXV82B3",
  "key17": "LvNyrp6RL7ctg7eULvxx857gP7Qo7EzPcByEV9u3fudbB3aU2FqSybUX9vpSFBuUWAodaoEx43CG5eqozWNtE89",
  "key18": "jHTsyQdgaMNMNwDx9VfMCGXDUDCxw7qVrcsyGi6iBuRqC6zdox6hJVrhusNJMvGDtnK9SWmwrYSpm7yzQP3FwCE",
  "key19": "33xReaqdcfGzf2KEeUNGCNB6foACdt8Q3yjso5eW6PaiiQqjTWyZuaqDN6mhsb2RvAsbBz4MyfKttSs3Ew7SvoBz",
  "key20": "51qQgezDRSjmGEG9kY5nH1cGjbimVqt76KjE7DqVja6G6JTNsGuB3Z7Y5nahH8eQHzBTLp5Y26EjfZVTgrUkDjc6",
  "key21": "5eiRAXaPNpctNi78KYAp2BardShYegbtJQJbHUrD6wfoR7HAs5xto46cSXsBB3pVbuiHs6MMBAEnBdcwrggPNiPg",
  "key22": "gyGT8Gbz1KckNc2kap9rSuxMP7jzLuxpfssaS9kVeUAiCCoLFcCEYcSnFmMwdirdAYBPQZfxCF46VQndgFM7ZC4",
  "key23": "5QfDZ8DEsxAxmccPZPLzDbqGcX2Ni9j8hkmym9TrZyQq64g35gSeUnGoynaNNT8nxUG2ujb3jxXovdXWVoW5Md2h",
  "key24": "uekMarjuDpSQu4a1hp5S4sjDXMUzKZ5mdLhbWcj44Cz8KPZzdv2XpHwdRcaGAP82h68oGcCNuQTLNw8vLXPDaLo"
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
