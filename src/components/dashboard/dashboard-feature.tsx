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
    "45QtmbeCxgVNHCHSfChv6oqnABKCfwzBrXyGCseM3X9ZWc3zhnUPTZib3Zs3dLETURTWbZrwKDsQdBiVGX9RSFFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44t9AaRiw6Yozq3WYeLAPhTP1MvnB6skJq1UwfEzf3mN95wKucx1srYqFcHRWNVgcMYTgYe41Qkcu1dEZN4YUCrJ",
  "key1": "4xo88nBFhy6ADidHCbNuX4PR7iXDfRnfFcaMxptCbfczH1pfczoGtARntr3brfg7tPGuNrWwJNYCCECkr7SfPxLA",
  "key2": "21rdQwM8bMqsCum6uyWen1sADvCeqQ2FCZGE9iDdiYdWyUZTA6HW5gfWyBuvuCHjAne7zMBzB3fW8qWxirbj3Xzq",
  "key3": "25tvYxUhdm1Vedq1J4xWWrNZnnWE8pq2YdTCFDfbuXPorB69PY8rTmNh7ewib7SPFpBGJWQfrBttTmFqAbaESSX5",
  "key4": "2im7fxWJM8A55izdDVVvfkx6UMtqRbrSYx31JYZBm1Swxu1nd8HcQ8m8s3PS9jhFp4HFb6NS8Nd4YiogA94FSvCh",
  "key5": "3NESKgNq9Ky2UR2ApVH41fNwktLpNeQQZ7xhrXBr3Y2fse1LfgrBx9G6fxc2uPmAHcoXUy5N7RUhyXBKyvjd3Foy",
  "key6": "4YyeKAr65w9JzmUDHCKVS4MXWYqN5JRJCTFyYdTuNLnXRBhMeKjCHEc2koJBsQJkNJwX7Js2YyjV5kzTAXWncXBv",
  "key7": "4P22GCMwtAwHbSxXG17eYo7HiYDtDuH1sGwAUg4kiKy4X4QY8PdpiCfuDkdjYQxDfkVrmMv8d283VPNbQp1J4wFH",
  "key8": "48ko8yxRwveKrixcomxLk3E3kTSd91pfqsXrgyAUABSWtggUtuxcMjusB8HwitALQDd8RgDeYw7m1bWMDqpG7dSZ",
  "key9": "4452wPVBaaHRvGv2uWo5zyVK8K8Xm32B57UrMJmer7E9xBLYvpZJxEtc2VWJVWL1UJKsADzkdmogtqGtn7ZPbwXL",
  "key10": "2L75F9JSS3FaDUUKf3a8DVzG8MEn1AV1zg6KPmUEKRZoh6AtYFoEiWgkbTWKPokyqApVpa8bUDjoxcZaiX3Qgv6b",
  "key11": "5atpZ5auDbFCcSZkZZ4GyvgKGDrjQ9xAnJsPQVika7Y8qPvhkoNL8hLv8uASAVdtoNhoXeiLcukjDFaESDqXCYK5",
  "key12": "63DPe6haRsv6r57py6rRSGm8BPtKcwwSVEPPHF9ZEsbg26D91pGzFdBz7cPfu6rnftfrmQ1sAGLJgFuGDXNJooP9",
  "key13": "65qnTkR4e8Pz88V9RT48KwbqtxFrjt88QYydeT7nSLGo6rhWyhc2Pf8ZfRVeaynFSy552SpibmS8rScmCN5Gg6gS",
  "key14": "7giW8zGvgqY4oTxFw6AUTpG7QHk1scDqWzpTjZ43qeVQPLq2TJLb7aMaVaUk8RgWC4mn5pGmdcZJph13ydtX8M6",
  "key15": "4BzbSQa9PYu5EPGSuwQn2cFLdXetTYYChF7ch55LZRHKKPCYXiJvQWCbf88GGYzVNL9CWZBwUovz2iha2W6VdJcC",
  "key16": "5bSnc9Tka7PoiL15YLyPj4hemGVoRbcoWMwbj3yMV5iciajdECzw9EV8hFaFNgR5v4B6nfcSWvwbn2Gt6dUCb6yn",
  "key17": "2pc2gAmc9fbufUbiPyQdcYRb3bLBzcfetqNJab8MTRUN9UH6hcdATy1aPJWbxV8tYpsZtjMMjaEiS5q8Y3iW449A",
  "key18": "63QxkrJb4CJapXXYY1f11RCXi47bM8hco2WQjDJgktc9F3eNnaLuVoE6XmYAF75xsXVqfkstryWDcuUZYHxvwXMf",
  "key19": "2EkzYN49CZKYfmpLd3iKRoYDQjemY4NwHsTbyKa8JkcUNF3sL1ZRJo2QUp1fe1LmUoczSgAcHbbpVRGFb78AkaiZ",
  "key20": "3aerFCWWp7cBiG9urZcb1JY8RRqsmruPen7CrFpXKhXdsekA2UP9LZVcoj52Mq2oymMW2yVnu9w3fhkuZ32LPvFg",
  "key21": "4qNdLgJbxEXZfRYcF94kw79cP8FAi3fdkMxZVauXcLJ7dfbt9eub39upCtRUq4kQn7QL3f1nS77jJMYCjV7uASfe",
  "key22": "67RHmz4r3bRWxiKdm3sBgTYW8iVwJNeRGQWx1scNeyCmvufuzkCJyNncfbTR6YbzjxML3jzNko5oJ1o4e9BWbVP5",
  "key23": "2r18Y3P9nYQuB2gQqf2oP8zC24xW93qRmeXaNDZGHgGtfPwT9S5hK4ftbvSGDx5mb5LVRFLF3yyzEPgRV7vMYhbP",
  "key24": "5wDU7qb3bNQhYcEbeK14WtoNWCNJkwm4zPyyDt8LXh5FroMX8HgcNMazmCq7MyyqiPmWg5rN9o8yLQ56nRcxBqZ"
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
