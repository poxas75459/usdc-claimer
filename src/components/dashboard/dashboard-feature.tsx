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
    "3MrD7oSTcfyyemq6rjkZ3uT7Bh6z23HnZDoh3NyDQpz7sFhHwAYrRZQgqDRzDmedfMjs2MzxH3QgamKWnCVPEmMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fi7dJy9tFPRVmDQ9HZaDP9dk1cac9UbHjvvDsVAeUKoorCpzNf8JrDmNqHGyrZRyFVgqjMKfBiU1tgnAu72sCTW",
  "key1": "4WLzwQ5Ssg5z7jh1MtSUKxnXtdwhHbdPh6Dg57T6y9sauaXWGizEFzeYQeQ2wS2gS1JN2dRR5DFhG98W3EKsL22t",
  "key2": "5cbaNugXERjJ9VKp5ZV75mnBNFCQjLeWbGo2wVXgvPbgVEvzUubUj4ruZUXoe2XjWmRQbtAvBvxe2iCb3sk5jqDu",
  "key3": "yhdV99FSJ2ohS922yS39vcW3orfEKdEGHo9o9rNAzWRdyKu4g3HWf9itJmtcgxRkHJuj5CmVVhBdrjGmEM9iEf5",
  "key4": "2ahGB6UK35Sof1Uc9zY5c6BMWfvdaiPxMVkktpeoxGKfHDnbMeVZrAmK3qFPRrHR4nHvEnCPTBVmaLcNDeaxPeQh",
  "key5": "4b91uN1gLZ7ofPrj5T84sqXxcLubpqaRFkTwRs6PhG69KKoctBi1FUdgKSYsHpA5uJDtVnB8sUMWXkrWiBgVDLBz",
  "key6": "59VrUavZKeXPYL8ASUEX3JZtzygjTKh1qfYsNaW1zPHnLcwmjhL7dgigKpMQM4HMBYXzN14thB62wgsqWtuxfday",
  "key7": "26DLRAJ6bCSdxeFzqzSZPH4abTvgyFVwKdP4ZZEstyHCP2fRsmDrSRaiqHPWKpozbaCuc5z5vFhgfwQzH1RzC4AP",
  "key8": "2Ba23odUbCG7Jvh53wBp5yGbmKYkmZRerSn18X2xGeKcrDjHo67zpWyQKB3ZhnEqRoDpfrtou5rDpeGZP9E8aAXi",
  "key9": "2gAd25dr2v5bRBPcGPzR8tn1yBahWJELsYJ4XJ72837gTTLa96yb4QCBdkG2Utcnckbp6qBCgsQjwRXcHaEyFySX",
  "key10": "2ocshNrLvUmo7kPLdVrbntxH7hrvxaVy4mchx764UJcLCFFcd987W2gwXYFYXsNVyXNqx2SPuFhyFEFCqXWHbAt2",
  "key11": "4kAXmyq1jewsztAUee6SfkuiwinWpQZmRSQxHqAGELHMrz4e75K4bUbyvJJuBV1EsuGjEW8LhA1EhbADMPKZnYfP",
  "key12": "kDgpgEL1q7cevXi76c7nYvgULrmh9fbKChPLtXRPgcuxHLTVfkDwQLTT1DadP8hTsRLzVYp23vPhX1MR8me37KS",
  "key13": "2q8vNwQbWj7AHzxKPVC9mTADFS5esiew7q2cuyRuaEhjZRuRVjT86sAU15keufgJ6DKxX62pBZgG3usVkBubdqoG",
  "key14": "2nNMeEeVGFrsVKfKBU8aCACY5iH9afP3ZiKyb56mBZs34NvySrVrWLC9TZ15GCnHrUusgD4YczuoUJFAaRZcUzVx",
  "key15": "2cWHWFvu7xKQQaHjFzeaiBUNPuxHbic76iYVfxe8qUCM6An1NLSmQQdTNHL3ZvAAX9K31YnSSkzqWGc4DtKE1qnS",
  "key16": "64pB46mZ3w2tD94GusEwCLQ3zaimDDAoj16tSXKFR9f8j55T56ctLeupNyoQgV9Y5ezPf6sD3176qQHAUT92Vz6C",
  "key17": "hgsqXLT4cPzCfwjDtqP4ZzqVvygxovjMbSAm25zzcMooZhsu92X8t4ug3hDEnAbwdkxCyFdwZHKWYWVeuqGr5Ph",
  "key18": "5JVaMHEoEzyEUyphWhqdqu34tkAyYo7C8WUp4x9pbxSb3ssCR1tfGXn8Nzpk2RvkjvewB6Bok8TnW4qVwJuVBSUx",
  "key19": "4kEB1WdgKzGt9PtJitcMiYGXdPGdFNJVNk38hwRR7hQzBa32bWoNNXRWRWW15WkLyGarpbe9Te4teZCwZ9iADcAe",
  "key20": "3wnScFfKChuFf41oHZqD2ZEtE51vPASUhSW1h55Kwkn5MMACETvkdg7rZQJJ433BfKRevrAoXL1GntW2xQvhCPkk",
  "key21": "3YTV2Y92fAYD3BBeo53mXNajMxARNaYehZj4keqnHSGA42CN88ZPzphHLtnbYQbDGjxQPoUqUdZEa5KcDocmvmDT",
  "key22": "5Hp7eqxpQSybJzyCWPnegusp82ugnHQ8Gea3RhRuavtW9kzdH7C77WHDDAsSgpVEAq5vM1kZ8dw4XRHFmr27nsG6",
  "key23": "2AGWUmTzQ2eNnbsQgywJjDQoQe71GBNELRbB9gQm9jmypjZ1nLaLajNQdyEXAs1mVmCENNnShAZS6dCFmrYnVK2x",
  "key24": "mRcKuqeJEs91hnhq5iiRZTZPkQdLpuYvyHWThnJ95YmoLQZDvoMF3ANC4BtNiFvntk48GgtfqL2or5xMCvcYq2G",
  "key25": "4USaydR97NUXxzEU1wKzganUzkyrWk6Wjd1URsN63NHVLSYw7EkCNgGvwLYW1SifJU3uNC18NX1PfoCS8xgrPKpf",
  "key26": "4PunQ63cfyJbb7Rgb2HgahawF4ku9uiwiWzFs5EgXEov5FTNZ3Fmp6p92aCxxSybBm6ZJwSiGoq3XMkMRMAshAvd",
  "key27": "2LbGXSeZFQBXAtwkyWY6dGcE5Ev3EbRdi3sRMx9JNDYZRPM2jPykLaTfEKboWAN794yWxjQ4auMdK9TcG4d6h7a",
  "key28": "6N3sZEHgUYpYBt2g3GEi5L8uvMPaAyD3nh93hC7rNTXagiHAv4cB23ned2ikEvJguASEwRbDMVWLXRKsHD6mv6F",
  "key29": "5bgvbKkZb9sb31fDLWvP4demqu4szg573AFuHR1Tue4Xohvn2QzVFFNcPzxWTGdUjVcFekpP4fqRysLgSUUowaAS",
  "key30": "4csD2gpgDSqdbuzQra1Jm7ThUE8VtQMVmvJSiMRknNqgoqALQbwz3zh4b6hsS7TCmY5w3ZBi3GuEzG83UAYSdfSp",
  "key31": "3eA9SRqaYDCfWkVbDVdDTEWa6Uhp6iV9fEAG8X7DoRUma3T2Qkz3TPmfEpEMpvyxyhDnnWwpQ9eKoPwR2UkrGfeH",
  "key32": "5JGiowZSPfbCbkP4auhZSt8BxbdK4USC7V8VDpytGHnaEwqxq6d1uxKTGnpaZCkjmwcxYHJs6MZgTk7JnEL1LNqM",
  "key33": "3MLdEc3M3C1qFnesMjT65L8ruamVov1y6yPRMQ7kWwEfpJo8ntEt6Lu6uXoY1PtZ5KFwXUohsMgBTu9JWLa8Fgiu",
  "key34": "5Mvs4D4xJa9qVsG2F8RiSeoYKZRehmeCAXr9xfGBWJuagMUVqYAc3ik9epku6o6HpShkY6hoBFw8BYHqQg8JU21W",
  "key35": "4D5uKhQoKN6WvoHbtNRSxLhif2nURmcAnkrjptgNH2Hb5Ae5yxzUB8oVnK8bvu5PKKhEUL6LR7N1DkMMfKY7PYV9",
  "key36": "N3yrWsueLwy36JWeLR5JJJHgZfSbfRb8BcM2HMs3mV99BfbF9JbfUBePMezDGWH1fJ5idf1fWvDWsrvN2aNzP1w",
  "key37": "3xsA2Mrsx387WqfHMwutExMwBN8ezqxxfsBA9UtFnLFmdBbjUFMGMbYYAVBLrWbzGy8SA7caURgcbFVqbcaitvLu",
  "key38": "3K1Ub9MDW1aenprmnhAPQ9oqwdf5xVtrnoEC5wPXfvSB5AXaE2NRwpK9czUeoLnqcvgZJWEQhiV3bfSGdAMQv8Y2",
  "key39": "4mymEgzm8i87cieA5bvMdfMcZU4L9KN7m6FsYjb12BNtUZHHFy3ibpTBTq5jsxcMdsFp7uqypiox7EVWqSYVXv8f",
  "key40": "5N3KjKJAo1xvn3eSzwsEABVH2AyHSRgV4C9kFuVJRacMnZ7WpbQ9vneC4wDL4cPyKNtRZypBzqZpXygZ6wT1Xod3",
  "key41": "3TvP2WUCQYtXRqayMyBsSP2TBjEgRq5cjozCQVUWvc1t2emZMHAc5aYZiLpD8sKdAWke3SFB2nb6Sgk5gcJPaFNc",
  "key42": "26JSG1K7NRAnDtJ4WqK5vtXfTrDL577NZVtGS22pqSLqFzRSKoM942k7APTBSN1TpYykknXopdj9v6JSQMUDsB71",
  "key43": "3P1mbTp9z4VU6FuYjZcnLvHYDXAsQyi5NBZfv9DcKobVWDDSy2h5e3Vq9X46VMJu7MfnZ9XKx39pD3kCkt6zMN8n",
  "key44": "3oVDQYn3nL5dBnzTf9rzV65yUWZrmew2wqhzmhtV2e7cpc3jXCvredFTrcAe63BSfFiqe4ePVdt8oXPUtfWg9918",
  "key45": "5g7hZtyjKgmEaZVsiHfpgiBeKJiBJjAfK7Mk3g4aiRVF8B61QfsHiCFhWYmfKFZyJze1byjHjTZuiJyNcwaNs8VH",
  "key46": "4J25Lf6RLMSjfE6mYh4J7gacv3Vo4nEr8WUBLHKniPGGcNN7bR2B6CFHcLwYN8bSdBm8S7mGLSfJTZJ4mpGhiWDL"
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
