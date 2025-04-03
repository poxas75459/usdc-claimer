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
    "2WAbpwAnNZcAPd4xQREu9azh7ZC67aSH74BvPnU5Nb7X3NET6v3LPZb4TU6iZmAgsH8ojizeBWo6rbKLAVSisua1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vS9k1ALWmmf3tZyALeCkjB92yj5mjq5A4dCZw5tW1Y8asZ4L7jwurtGddx67qLkeyAB3QvftoT7veftS49eRDra",
  "key1": "4AuQQqK6j2dS1CVuozt8QyGoDnqJCY6CPRHMis4fz9CEuxfhYikABTM2eZB99ZCSeGNq6Efz5QsfeBqvAknHBMuZ",
  "key2": "2GW2gKGcGPSfiJmtSKPU6UcvMJuhpnGbqiL8REYyzFjYdP5aQd2qzGCHCg9uyRgYU3SebBTJh47FeTkVBZs5HsBw",
  "key3": "4skuek5wNaw2qKubJGBSd3Ku7C2z3gwsfK9Q5HhZMwMFUuBJotxcYm4JwsKTMKMA37wVm29tYm8jEZPwPA6b5cbx",
  "key4": "5R42maA18LrvFXpPuSdQfAivjR1KKHPnBXwg82J2PZBGEZhpKxrNsdkKbFUewNvDEMRTNqew97bc41cmBN6131n4",
  "key5": "4T5Rwk98b17KerXpKBFKCbjA9CRjqQKXjih1kqk9UaoqdHTchBnVLJr4Wo3bApRPLodTPACLkisCkr975XWkEYTh",
  "key6": "2kb13x6ECvjEvJgGRmznSF3sc7Cb25tkvvasJMkUc2TENUajJikxrLyLfMS6Y6SG9HsSBBiiHpSmrerCqJy3ieGw",
  "key7": "hyDj2wv1PYP64BT5TomVz3gGnVv7AFuNRDVGxoA3JJs35ut8Dbmf1KyyYZPTo6rS6qndWSXvwNBQtVfyLgkPp9e",
  "key8": "4KjHcXvjSAB8kZ8bWq7Y3xwNaME8pVpepdC77aunJBiL6EpZXucaBNiwYsuEh4BuZg5dJTkkFYdxp8ZBBv7Z8Eyt",
  "key9": "4ju6SExShB3HmfNocFsBdhjj89ixeu4evtjVrCjHZ5xmZws6WQTms92k7WvkYCV8fFq1qbZ1F8tDkzqpdS6ZtwC5",
  "key10": "32V4gsbg12Zxj9hYdd8Mw3h2tHVNmQpnUswau5ccgse9a8TQUGhzxExwqpqeiSNXZn6fbXCk1mybfJsNQNytvA34",
  "key11": "2f7Rb59AiYHDtjpaRpZkDfzfTRY3Qzs5F5UgvHXhi1edCMaBPGhFan1DhyDd9uGWzpWWER9Jj9aoo6rJeLMZU4px",
  "key12": "5Vd3adX3GYuCnSKQ98VBwkvTGpHyjnKf8pJeVvq7fZnM6LgoPE4v61ccDqGNPptwuJuQhWFbndCidhZ2HK5VatC1",
  "key13": "5HgpAgoGHodMH8J78ywYKnEPjPYcvhPxXqgHhSCG2jf9oL4jtE72ExijEWPAxH8eQ5xKscuQnJpiRWSEijdkHDta",
  "key14": "zXyt8iEzTEgEXoQqUD76h4Ev18RpmV3dhcbmGurwUWwPEEDNyS1s2LgniUNb6nXwLPawMKyA3RAxuxuviju7MCz",
  "key15": "63A9n1kLEBp2vL5vU8YuTVbVQNyxG2nC4kSPFpxyeostetkkccNgK37AtRqqrd69RSfEz85ohFTHWTgeQWPZrNo8",
  "key16": "5AGgT925Jtpfj6J96nArCZnk8G532SQwmHebXWCccBV66R1GLLFaqN6rsnk1QhZKGQppJWwsZfgLXiNGTyYDoqYS",
  "key17": "2HsHcoJkJtQkaDymrCVj4PaVqyHcR77J41s8ZAqL35tcZmYVPLUC9yDPkSx5GoJTeXVx97TyLDrL3bEQzXyNAQq7",
  "key18": "RUZPtMoSQBEsRKvQnjJkn9HPdB1SSRYsYK7iRJ7dqkaKT569iLyKsWZo4FGYR4eLBDT2qCURtMWaDWuNWA34K3L",
  "key19": "5QpBWR14AkRsGJmDpW2etUTtnYLu1WxQAKzTYKhQHqZ3eq2N1gAmGHCSv1k3x2yku9PFtQQoZ1ubXiE4wKk972Qb",
  "key20": "4mTSfHk3k6urz7FjnArM5F7nzoG1csPskSqsT4c1E7aLpn3qoUUKo7Bk93N71FSmzRewJWGLHiA216mbVDdiEpHb",
  "key21": "2duuyMaypC3a2ALJpbkHjCQGgJqUd7TfgDE4LHrHP4N5ARNqefNy5j7wDccsckUrM58Aiq6HJgBf4b2rMh9h4Ghc",
  "key22": "5ND6qGLKZbBfPZTzzvJRCYAVt9C9acCHkuPyzok9pGuyNNTP1xXmyiXGSAtPxxzYwTdUESzN7yRrn8ZS2yVFsFT8",
  "key23": "mqecZbowENdj7wgorese6M9Zdetcynd3XYsQRy3qAkqRi7xFE7Pn7vmwyBJE6RHpHkWGTFG4PCJxvKuGAB2ypnw",
  "key24": "3GtuWtdLFQxn6ECauGq1DY47i2kpTSAymCSagggQoN5vqZDUhQ3Eqc9yB5ScLG5jRhGYiTd7cGog6mL9VBN9yDcB",
  "key25": "5QJjD1poeNasD65rVnUTcdxKkvWz4sUvbhSLnZuYzfmANzSZi4P1CuAtvHpuhHmiBCgAnx9nAENF34DH4xG7aS39",
  "key26": "gPbjyFVe9rGPdE2Gz5eoR1vMvGtFpNhamQZjTeheh97GozLsNqjU7Hmcx2YM6CJosMD2wmQcaxa7MTC5J9M1cXF",
  "key27": "fZcdH6FS67FsMGkXwf3rPQh2aLhXsPXrYYFyWgBKVM8bHHCXUwPJVmxnZBsFBpsTasWLRZ8BWaHLSmkAGBBEKon",
  "key28": "4wzG2XxqBzHGhrZK4UtTPHzrF5EZG36MnsmeTyTJ614MZJrCkrmC7Q5p6BZAQE4du6Pa55fJ5dq4AL6bGohq2YY3",
  "key29": "5QzfRZkBYXEc4zoUTSY7gkmaqkjiZqypcMVwYps6H94twbtknE5MfsBcjsu6h3Q44woN3Ab3RLyfrhFL92ftB7j4",
  "key30": "62uQuhU2EkBjuvADo1WNA7QWXZhgXGV2fFzoGpRjPCaRa3Qxsnfb8fQst1wzzRYB7iwyDG7qWXgMi9CJG1gKewag",
  "key31": "61or2bHdEvgd3KeuzkyumR8XdsTXrJjL64tW7sy4vecQ1D99HqnP8wGcToeQEyQbBTnkexLXXpmKtk1m4Vogo9MH"
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
