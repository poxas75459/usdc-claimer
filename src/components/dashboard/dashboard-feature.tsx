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
    "JwVKKPXMVpcMi4uQzkBxgUEHXTVLjoGDRqqad8bBvdrFVo8GpN3pzSK69BWvkcJtsKJ68cNmYM7dtw8AquYo44N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zUbaGh78zTqVzzsjg3uNnvQhkz8cEK9fgmTSrpeFP17xqcViNy2ifdzYNvksjdG9gmqAPLMdcfZziMkVAAkoufU",
  "key1": "65W9wtWuTrXYm2JA5U1ACdhzDHCXmd9C7muPvRmqN9HDKNKCkGF7XX1kCDCrXFTWGZKcSS8XrBm2q7nfBs9AewJJ",
  "key2": "5K2Xea7VVYmA6wP17GKmJZixbrM7z3PDDGXD7JQBzt9CXoXFYPSAykac6TLxo3eFqCfB3MYiAj8qgUvUWUEAkAPK",
  "key3": "2LL6iwi9x4dxo2EjEJk38xfahN7jNVeUDvif2vfLAHu18apgUFoUvkAAorwqw53jTMRyebRadM8KM2b98jpP56XD",
  "key4": "28fGExrfX8sKAh3viE7mAJBPgc65eHnuBFW3mrnjNPsHQf66EaUNsfz1PLcT5UhHBDmwNjp9owpJwtcZRvCXymyS",
  "key5": "qgJoWCpQSRXPha7QnT948dvDFDbSagyQMerVGF2JUisMLttQDBMeFYGXmdMYXBNkDStYRVfTsdteKy7RDskRjEf",
  "key6": "2e55GAZ4oEoy6K3SPczvC5kCrDQQ9yD4uuGtFQv4DA8cHurchk7P1qsWw7CvRaD4wkBZwu4e7B88ChpWjHGzQSuu",
  "key7": "W2NJ54GLVGgmHdg4CCqQEeLnQUffnDWiRBme2S3wwEw2GvewZcGfGi8SxDGBmPDPyHoDBWstDhFSZpyGjYFwvrT",
  "key8": "2NuT1FpBDp5mKqBXbxSxzjPaLFYtJL98GdTsv5nkoqyizcuQ9HPP2kxnYUrT2eosHmzzFbtgHyuJbHDDSZt8SRZX",
  "key9": "4kD5Nk6V2yJFAJwwPWja1syEmJxAnnpS63ky6MauBBdiKeGEqqLv15piHF4FTeF3GSgnPGJ6gJRKaN8Dwm3i6UNa",
  "key10": "3m4ntK3Dgx7QjNC71fAePq6SaV8vjs1XdG895pH4AZAXcY45yVzPgkfDWAFjGcCCrd8dK85zzRmrjNJ9q7N89BDW",
  "key11": "2gR8KjTQYwh7vt4VKtLMH2PAegzwWH2fpHBnDqeDDkxHpcxn1PywJDFvZ363SE1aDMYTm7n99VzzCBJitTgB1GsH",
  "key12": "5XgPcwai375ACFRLZLUU4BaRL7vnizu9qxPTZkqmhdGvYK3PQnbzmMR6grtyx4gSS8WF3e2Tv1gjAxG6DwPqZ2wP",
  "key13": "4sLQjAiKFoPAPUnVgZiDNSjcCjwKHePjDRL6R1MBLJ4sUj2qp1YQhcorwZB54CL1scoTc6ukjg9Yc5mAciXXAvaF",
  "key14": "4fZox2rX26VQX5phx19vZQNro1FXyu8frvHeuUfw2zpvomJL4nYJmZqvnfxL1WbPWC2yE91VkkuwWSxn3oauQEnX",
  "key15": "P9ABqoMAJ64a2B37cUCxEA7b22AqzdhLpxVrYZ8bdJh131ExUJY6z83y3VxzguSPTXk7YQ7wPMFaN7CiUqgiW8T",
  "key16": "5aYxsBAmcQ1GCqEdkiF92ryRi4Ng1Yfv3cn8Z87ZJodrFyrHh7MGJStCWvHzBcYtuF1BnBTzfZKovKyxGMXJrmXd",
  "key17": "3pGguPZVM3WK5xFGtMFahaSyTrPK7ngBcfyoBaz7E9xpeo8moGqDGngnPeAZxSm8rXR6kVr1tjdEahQWriHu8yrK",
  "key18": "2K2VQWvAzYnheTLsxpT6XZPYfAcZMmg2zYDub8FNFDz56oBSaaHm2exh2o2PLF2RcY3CoLBokrdWZgt7NNZfaUT1",
  "key19": "nmdFeAi6qz1y6sa8SVcBXkfSQKEddE12ZFsVq6oV8gXFhSyJcJRwHyGV3jjcVp6ZQrihqaAQZhKuHpuHBEG7tMj",
  "key20": "5M6XAzStKgZFnFtVzFj7LgYFqFQVq8gE86N8JU3zdTyJor9qRzziapQfrFn9o4157nsBFhpdx2R1qdTAhGu8TtaY",
  "key21": "J3akMLvSeBmAeGgDf1sJ6yVFgA464LAd7GW8BXtBajULDAaZB1oDA2HeSAp3SbrF6LLct8WtNnRySseai3xdJFL",
  "key22": "3DRp3FRgepaMf9q8ZR3AhqZfv46eqzrtntJgGBDRmCDRgeBCknUkCfsBAn2fNAMqyaUt6svh7mokTNacQRzYHM8w",
  "key23": "2KDmvJ365MHZc1n7CkhSDiPu7aaNVZKdA1ugB3BGjJxXsE38cQA8xaUpnn5eNMLvSJgtL5tuAntLR6p54HEXgkrW",
  "key24": "4QKxjCRLUsXioVyu1foBXLCyUzgEXxdUL5AqJ6opvSwg1aaE2MfeZf375G46ADU9K747eXw1RSNdvvKSD4w4owDX",
  "key25": "4Tg2ZPHzM9E3Mmj2QAMUgZBG8PYcWpe3uYfJDyFVNPDGQZsBoxkUrYCmxoeqYNShiXPJhViNDqUxi2o1MkXUawHm"
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
