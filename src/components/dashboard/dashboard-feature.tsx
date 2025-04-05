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
    "kU3auEYUUdPHPKQE32mcHUAgCoxrjn2SXd2f8pxgQBb4Z1ihfW6tfnQ2RVY5cxXgU1ZpPJ4iFj4kjCmYAnyofwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SQYdxADgRXehXWkR3u6n5m9BEbmYTQqAYKZ9f4gEnNGgfoAX57pj2kJJ1rb6r1iA4kpN27X8eDMamX4P3G3mrxj",
  "key1": "2dEMkpLuYHxBXYwbJDmNieZogZWjan3p5sciX1ruRt9mGpxN5mgQ9FzwACUVqsqD2xvn2MS53LRxUPL9fTxhkSVJ",
  "key2": "hbYVPuaHXy7BiyMREcBqCs8Q2aPH4A9c5DbrbHVrqVKJPuXnCq3BsLpq2W5i5FHnWbWHAppu7hXLL1DB6hhqTbV",
  "key3": "25N9BbboWXZsm57xpqBzMuA9ncCAAYvA9rtkZkj6fKoyACqH7eohnfY8og8gHcwabyKNCTj9Qa3j8BCYWTDGjGx1",
  "key4": "4Ea3mZBgMbUBS6siQ6MZJNfh8i4PcrZEypypQSiXeBv2ngm1TVoW2bqL7HipG5dP79A5WRqNSjfNMYEb3P4FSA8h",
  "key5": "2sW3KmX6zj8pFu2mCG6EDTcfsoToucxsGJPuSHp1cZMGhpaoa3KahheHjLYZhEUdAMKbGtrxXs4mZ3HpVK2H1EEV",
  "key6": "3Af8Vsridb5xNCnTbs85XAigjYp5pK8xptxxrkuUN6enzMBziY7WayGeEjNf4LtnMWMqfmWht3pcvDtZEyKubhdR",
  "key7": "5mgquWD48hcAzPp5iEtwyNkxigibe8hEXCiEkoecxpCiYwtcshCvJsq94xwfvLrrWLzekb9Dn1WUx7GY1Dqs7VEz",
  "key8": "GqYTAFqiCSBVhZDQCinwFVFtkPyUaDAdYKDFnigjz1Z715q91Ro9K35tBAT8zGSmXpgXrLQeEdqh7E2prjSQzrb",
  "key9": "5SCFiVoZvM74rKSpYuXyASvJRGaZ8tUcnPyM6Dx4Zzkh6F2TsUnNXFqLh7nYBWXRqZY36KE2CivLNb87iMZEmkQK",
  "key10": "3GoCh8wUA9j7RZSpwhUjJGmTUQnqWNEWUrmVWLEttPocCdx5YXzV9DoQA4UbHqZrx1cseBUXd8SC5qURJw5op6UM",
  "key11": "vcLGdDewcsKGUH4z1uo8wbbMW6fVJ9BNVFovYe4aso4j8C1rU1W1gPpM5cjvaSur1ga46VTYaYWDy3ewyUKoFwh",
  "key12": "RfcELxWzHd22bfap7giwjiBiEB8U6Ea45bPuoNXS5KXWTVjeh58ysx6iRfu4m1KgqYnQ3FLYRGjvfGWq5WAAw6a",
  "key13": "58di17wr23bUBoxcNyarcjA64UZ2dvG2S3vNmbsEqnVXCq7WjERVRcNo7b4YLZwiPnQJay6CZGqCCZaTTJiv3oTd",
  "key14": "3VmAB891wgeB7ewZuYByHdsYc669LX9rEmp9rKoXjHeiufoy3kD175EQZtuwhR4A3rNzkTDin58kjYf6MaX2NV7F",
  "key15": "5AwvvbfS3dfQiPR4iuTRVyr8qy5jiKveFESe1RnXyzub1tn1akVqwwdntY1mHd35AHBvVPBHXgwb72x81qg6vQub",
  "key16": "2t75tRCp5kmbnissADEVeBqgTTh4BUeecP4S2zfvPnwXGF9wGore9tCH16crNbMusH2KeGHCV9qaK2YdFpQoUywy",
  "key17": "37E39cpB8FXrCyBY8ncmoFTg32GWi2tLXq3BqBFsQozM9MTLDav3kANKt4jQs3Po3QrJYx26vrU53HgVveUs5VPe",
  "key18": "GFbimzYhwC4hQi9UCR6LSgxGkW8NJk5GixdoMiZSpjaKiGd2YkZvouEKFgHnWtofro6iLEQtuqLGUfmatiU31EU",
  "key19": "44LYJeAEydtjuqM4M8P4AmAckz3vZuxBeNzmdTjYypaci4zLnfcm2J62eXHEvEmU2j72a6JWrrnAQmGqqqVWX16z",
  "key20": "24NBCsGpjA2n3mfQuFqNX8bHQr2pB3dQCfhjaaXqHJdoKCETnzBu1w5poJSgUZppQsVQgtY4JcqsjfsMcsTsqPY7",
  "key21": "2cZYpkNtQMyiFxXyPC5w2fcWqRwyW9QFdKqSApaLrrFYMfyFEJ8ARxnRBzcCa5ocGuYKS8FesofNbrvuUTFk6TjS",
  "key22": "5TUX8PSDydZe8CvTg52FXzxZmJzibG6esLm76sGKctACdxLgAeGkaftRjLq46Ef9osoTJGbmd3cGUb3WwTGaUZvA",
  "key23": "4opFm6sok3iBzgM2ZHEJsAsRZXtji3HbkstbF3u2P3i3RYHBFBGjBcTuerDx5wMQeuEM1LzXhwDGGJ4WmziywQ1D",
  "key24": "5dvzysqGbVMNs8oVW1WwyTfxLjX3mUqimbHGLnXz2NM7sELAPQg4pTc3UeA7a6Wf3rhhuTFJLjEqRuz6VpRDxtTE"
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
