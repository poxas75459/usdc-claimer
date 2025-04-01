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
    "sujBj6zFFQyc2u9v2nQni1Khyh9zBHSA6PYrVakVf41vUPTWz618fijA11UTqMUefykJmTGvRxsUkKHh1YGJbSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "533ayviwAer74CHz77B93VGpqw1BN89wWe3DHCjJg9n2pkWVZtWyaeWVe82L3f19HCKpbMvgysqnvNcAcLYM1RAL",
  "key1": "4hDD9Jpmt35BVgRhP7X2t46J2S9vjAJ3quEbTktEp53AbYm4Px8LWdUw6RYXdxduCrom6bFQGrhFcPucJxsTXYgS",
  "key2": "527cfggr9C165xMTvw9v8rUETbfJ6iqQFhpUdiAaSuYqbwgimDA4ZXjLoiuRXv7rgEZyBSf92tHUzJVfUvEUk2Vy",
  "key3": "5nWp9dDCSTPtzDQsVuMbpqx6WFYpcwYR5npJj9qtUQUDf66wHiRrXCoDscx17EnZedVfrtiud2cRJiUS5VS5hZD3",
  "key4": "3cAxYWbigVmwWaKAdBCkiv6vmjtnU3yZib9Rw7M4qzKCob6hALugZoTLSi7WqYBeFfnio8GwBH7zRvm3tv5L9Ko8",
  "key5": "3HgwZ5PH8NGDRuxhXnbowmjg4TpQL9LNXim7QxRzLhiKeFP6urtbKfxmC9zRbzWwyrSfrzeRvMbopHhFcKRTK2a4",
  "key6": "3Ly7QGCnScxXNCQfzJCiAJPYRxGN4nYVRjpAFRyApNGLdUH2ti5ZSaL1cq3xr1aQy6CAJb8kgkHt2PEJxLatJ9C3",
  "key7": "CGQUsnckGJVoDzm2KQCBdZDpV8iY6fhJ2q1zT941qE4GUQyPPgVVE233N67tU6QQugEpVup3AWfWA5CBYgDwoan",
  "key8": "24i5c4DxF2oogC5NQKAciszc87hZPMKZUdPvkZeHJGWReLBtFdrKjez7jMf6WtWajNzGZmhB8yGaQqcrqCLiRQuN",
  "key9": "2QEHySMEr6vXBV8kuSS9sfdFTYBN5NGhDtreCNtXoTcGUTSfgjdfxbEJhUZ8vBeKYWgVEXkDFHz1tQk6xcohXdcA",
  "key10": "9CPqrqoyfxnueXd9wG3ckiyzuM5Cz32Knc45BmY6bwkz2dQKaU9v5fJT6MjpywyF8aJdA7Zde3TTcFBpezXtgQD",
  "key11": "55pzZGqEwLmAYe6BJvF54Df9a4hU4zUqP5JgT9mD9qyQncxWcnL5shkAvoh6cq3X35E6md1wja5XxKoCtn92cvjY",
  "key12": "284xkqDnZxY5SEc71vrJMSKnvwzYnrryCyCLSEe3FUd3myN8KekshRQkhmPRFEeaYydwNzLJzaqXrHa7e9uos3rr",
  "key13": "3hRfzguyoRspDunDCA3VZLeZJfxdpad68xY29qtZYwzEARKexgTK6EKFu3oWwfGEQVjNcNrdkFNafvBbE6ZgrtEh",
  "key14": "2ctm4g2fxy1dAwAtNbozD8ncApog1SyKfR4wmnCPz375Dy3echkqGXv8XDz34ThYNQxxUKy9i297f14hdhTpZbub",
  "key15": "3NSWqKR3BQ1aai1nCmea5MMUxeTJHiAyTjykhTnucLXCk24biUW9LSJxEZtFMNYaELFkMM45PoqJUTBF5mPY8iWH",
  "key16": "3cqawLtY1ZYH8xgghKL1MnNm7k5tHCmDeSBpN5mRErbEmDSSsD9EiCzrbyX3LHKjkUdDxUMBzX4zcE8mh1UMbXw9",
  "key17": "u7ctdVfKRZaCPzSAjKjT8bRfnRRh6G8KKt1fwGLhuoXWTu4zWiXAyZkL2nNDFvTuHyPQix8GZnPrth3uMfFVHyD",
  "key18": "13QKkgE2hHna9bAvmHfwXSA33VYZJBsHm1LqPQjLPG7dbctZGfCfnfptBLNEt6aVJUwKdxK2zeRLy4zkHjiJiuH",
  "key19": "4jjf1JakAiCUNRSdjnucPj1yPWjDkie44GX85sJdTSFbF7fKJsx15ToYjeUAvH4rpVCWkppyVG8W1BupsJhfwW5T",
  "key20": "61tRgPT4qFJ84sNcSeisJ7HMQ3MhM5wbYhRiNVVwgP2inPce5xddM9xZy8KNz3tVpU7GeeoCyMiNPzm4DZJu515y",
  "key21": "2fYQi7WfjkDBRtFv2nh6SZ5XbRwqeR5iDG8AXFsDTkNAi7KywJ64GxjsSy23YYL8HfB48vXkZiCucnfGTTr74VVW",
  "key22": "56caKaysS9rshfeunoBmcHggnthAFVaguz6EAeVw2wASA6xSZELY43L9YK4i9z9tQNFFSDFfNPXEViNcMoDckNzg",
  "key23": "QhzFucgGM8Tvrpf81jTEUPGjLmNKxjBvk2pr5dSS5jddK1XbfuhW98d4Gb1FyX2syYA6SboHRzVG7P9dZpnMhpk",
  "key24": "52W8z4UYXvfVvCgg7jAMH333vwnbpwkvo9fVhULpkCRbE9BY7BwZNWtJiUChvBpcJLwDBTJXD2J6SNSYvh75dXfA",
  "key25": "2hP1tLiE5jpp9G4Q6ADDVNEaQSxzqfqk8mQFf36bqWvNyY7CfRPeV1DdNWUPvvpdv1RNAUBwp64NJ23hNibK29sk",
  "key26": "53i5bKsFVgAXPgxfkUHXguRMj7c7JY1y8mbsFKFbindWco9odtZNCv9RTNQrFLfRqg4khFwkz8WUccdJjH4c8Y97"
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
