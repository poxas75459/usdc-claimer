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
    "UFaFU977xehht1NUm1G5Qm9WqqHohUi4P4vM3YjcmxjDTWza6hHoFknyA9h95xauPH7X3FkwnWCf558t7MqAiF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55pVZu84rE3WZAUajVobbv176spKCoiRtzo17fR67VY587G1z32MPqnfNALEeJJtUZGhiuNaBvt1d7S3J2xp2ZB3",
  "key1": "kFrLQtmxXjKvnYP7TKZYUaX4F135cpGUH2ZYg6GTpmsebExxKnhzdHpR9k8nNcrpJjimGdLMdK8meA2sDmkQKTq",
  "key2": "3wEXWspEfPKMjRpqrGNm7TQ194khgNWfrkhABRep9kn1TkDZgc5GjdSEPcCKMkun6YGbGHbudVBXZykNEGcc7ePj",
  "key3": "4PuJHRk6PkVMRykBKhPFZyueHrMiyPwgqeyDFZtNZ4F8bLDAQPRgACnQe8VCC7VRQNCQ2gsV5Dtq8n7xnjPYBBRD",
  "key4": "pU2ykGTj5ZPc9bWZeWKcpz187TGChLyoqBLEJrUhGbAtcekoM2W2jcMmi5PB91cpiJzpMGqpgvGdLt7S9REzyQh",
  "key5": "4ZMQ7TvjZfU7sv2aocghXJzCk5fqoqofmCTD5C4wzhhB4kJ4QshSwRQXygJ7LrXjadrykrVH17h1Em5VN5NppvYk",
  "key6": "3CjvfwXPhu7rKRTrn7krN5Dh6cefw6qcc4kA5D5UfzabMzMkW9hwyUQPdvethvUZCJMFcpWFiJ26qazYv3xvHP7Y",
  "key7": "2f5jpzGEq5Fi29E7vAggXyWQcGYWY3UsXkiytQtx4wkiYCdVuwKZvBBuDrqgmdzN4RTLsjmxk4pNTeUYWeKUg46j",
  "key8": "3d1k3r5ZDZBYLSCFBFrVDUVtWDQ3sL3HV7ubssMrMwpU9ph5u4VoRUkc6tDC1gyvX5xSikAFe61rqHyYGUd2zZBy",
  "key9": "39XY8CU7oUfHWYStzXekddetkVToEuurqzayR5JsmQNHutCgB7YpkHo3Chi11dMsmvC3hd9EYH9YJMhHeejKe4Pv",
  "key10": "4Cp1MNLWK8GGao1jdRnroFY1TjAj4MBauVyEqPcud9eEbMa42zviRDYaPMCtib1nUiYnmUy1U1Y84QwN4z99GRgc",
  "key11": "2mAcQ4J3AdTUG2NBT2TkSZW6Ri1oXWL8MAS3LgRW56kF8XW98RyRGGo3HmNQt6WEVMiVFbG6tgNxUiAaGx7gxKpH",
  "key12": "xV73BCgdPkAcYziX5joHb49gKMCqo6PJWTUYaUfukMhzKa5Ev14yfq8Q23gMLwwg8ihv1BL9jv1hep1S7xwMZQn",
  "key13": "4AJpvPJmEvC9H7CJnwcgPjqJ6LevvZpfFtgE1zk5vmTbrhzFcqdmhme6FFK4axhTkmaPZ9w2gB5kTEM19UaJq1fj",
  "key14": "5fCNEtaxj6UgTwTbzB6vCQZyADy29m7tgE1bDgErXotqp9Gqpt7XAY16ihqMy1xAZmKcXoWzvvThfnNRcDBC7twf",
  "key15": "5BZtsjy8VVKXNQAi42amTai8TUsqEkev6sFYKguSb7etYfcwcoh4RHsNtFNRm1vdhvJPUqN5XP4bbgq6rvhDaT9Z",
  "key16": "527WsrqE7h3SA1TYYWkrutkQKpHMCVadjus6Ahah9LNSUaiSmcTjq1BacDTfnkZ9hQgc8ipbyL2afhqf7iPXKs1X",
  "key17": "32Q9dwGtTs1WTLQWGSniUYscfYZGo6QgSNid1xapMap2EKAjEPb1X9DVfs74F6RXddikf6hNddsF1ikfip5niEFk",
  "key18": "5zBXThjM2VKDESny8vU3aaS92JNyxkQ19gyA5fGg9fudDTtGFP3RgUVnX8W9L2LKK5AbKhzcwqiFXpFsnwQo1unc",
  "key19": "3FR1wUrtWiok27NVnb7ayYdKS7rCy5WGTjNwbnjAPW68Ri5zcWXJezFBrBGGuQKy5hwU55JTx45pGZ55SvEFBeAp",
  "key20": "3GW7XbJQ14RZEgRAfifn3g7WNGBX26DU1XVALKwUDSceSrMy5STxcCXxyStgYXW7X8yHV7doQHJ1gwGZRdfRqp4g",
  "key21": "P8Fa4FGf4vinoZSRUqP2JPq5rpQQdX2U2qzyj5r2ZmhPyG48SFP8bJDfNU13HZ22hNTC5DGFj2vXJ6X1FirnpcM",
  "key22": "2vXRQp7pJ42d2odXk7N9dBBToupB8bTAjpobLpFhSExkt4zrCYJJjJCfA5Dk9eTenEGK7QYTX6rZZ5xAJ1PfEVqT",
  "key23": "53pXGk1UpzmQVVkJB5M1GQrzty5uB9zqVZjMWvMEm5CwKV5aeieT8JSsXzxKEd5wYEsKXNZxzaMjgH4oVx93AzNr",
  "key24": "4Z5bQLgLCYqhMkv2mAPjBRRRQaLWbBMaMTEsMs8FyRJnsMsnqGCrryLqbsEzEHkyCwgT4HZJXkymT6MJAz7G8PdE",
  "key25": "2fjNqZtGadMeQuiLBQAX4g7iP5vkzNoM5jVuD4MgjxQwhWMDqYsmAgvJgbn25o5vSNLvFP5sXKxeqAtocryVee6y",
  "key26": "5gMpQUWKxkbrBbgLs6urHyRhVJMaye24eKcDLfzrFCF2MP8tJV2X4N1B8h6btENmiqMFWmoWgqmZyzVJ4xut5Ljd"
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
