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
    "2ACcWEkWQ5P1mfqLAR9YXJfAfXvWEyPnVPQvJNMeXc5g8QGy9FBaU9mvXksJceF2ZMsmE2fNLZytZ9m81oMZ3YJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mg9Gt2oa3NaWoPSz5DJFUsohtbKmVZjYEfWT3M5BSfk6QApj8J6u58KsHL3T4gM1jH1anXzwmpKSxJGr35V6ftn",
  "key1": "3YESSHbhVCpTERtTWa6AYKc5HvLptzjxrzbMXocQvoPBUiYo95JrpJJfudR1kD1X1RTd2iDcBNRoEhF3JkFqVgR",
  "key2": "4PfJF6qcAGppJM7vvBJnyEav7p7q1wVYrNLgDeBdNrs8E64Q3Hhq7g7uSESE8sB6huu9MnYAWs1kaVdA2Z4arT6d",
  "key3": "4LDZSNDGvHLbUtvq6PsiYmZHdtUyt2Z9rDoQvMvhb57LqrzG2HmHVxNKPQHvXWwKe5KJ6wbk97jv37BoMXReJsrU",
  "key4": "3pSqAER19qP7yTFUbfV15SwTiXApACEzo2hGtWhcjkGxjLTkduD18gq8szpe5reRAKkBs4p84hyuHZMQTstLgESV",
  "key5": "3rcgiv5g1uNogYMPhSXiUjVhbf86w4BrqPuCiZJWwktX629TWgccF3k7mdUAvshDpT65w6yRP4Mef32kZoPTCtPM",
  "key6": "3tEjRgg6T1CxkQwpTyuoVGnh61oVpXP7yoF97dQWkHCGiqHcpye2UMo5piGiMAaRTtrKqN9cn3fj1KbizPyN25sg",
  "key7": "5cKB2LjK6FsZ1YhcFcAePqdswDHWmpqPVwXGLM5bQPHzBgCsFhEKYDZTR1kWrm9SJ9awWThpRBJajK4tshcsaUqX",
  "key8": "3Yx1jyGVYV5fLTewf7ioQu9dDLjBD8Jsfcmu3pB2uRG317rRPbcrCSNEbhq8Amk3L9LbxA7JvKNMYFYAQSGSXTwz",
  "key9": "dVbYZLZnZLbL8Gf4xHWiuq3aESvNefJDRjDaocecr6dQqqPKNh4JBfHcaoDs8uPRB1CqdecZVajmQBHpZvDKC5Q",
  "key10": "2jK819XpcJScKJPRjBa8oKSVSdQreeRxFUmnSzsSc4j1AhpL8KBAf32oEs2U5TF9Yt4FHvfauPRvbNRZsYvVSfsC",
  "key11": "3FMRxNe56D4Hm2Mcwm3mX3w8QPbwf8nEexb4YNevmNKuqQm26RKK9HFGBTiZgYxJkg7T4L35ktbc14T89G4axeVE",
  "key12": "f8ujNHq6yQjSQu57CR5sZhnvGx8eFrvwPawVeBMjERtfks3PwWJ255k6QBBfBKnGhnWvvVi1mQc926Kr6b5yEEM",
  "key13": "Un6T5njkZaQH5bMFS3wCfQytn9erSNxFdF3pPDQhc4tz3kQi2c51BKtAyitWN6evSvjEUBKMft3bAeAisFx3bWH",
  "key14": "MMt2SmVNKudD73rHtmDo8TR6LjzsPg3fhJRvdt6FK7fJw1otEAJX77HorU7SBQjUXuFNSoxj1o6fW35eNfmJidu",
  "key15": "4aVXvBuD5g98kjtGxBHUUGdjm3W2CFvtteMNCL7mz8j5SXRhCgybLVkV5ZDoEiFyoJWEKEGrq2pRNRoWwbnYQk4t",
  "key16": "3gBQ8aJZwrKNuZZaFirvPU82zn1oJRsENkXUGgWvQ82RasT1wQqWBUWeNyJuHGeqQ4EirXojph8k3cqDmyw9yTFd",
  "key17": "5CAkBcpe3mFvRsdQjNVTdL9x8tBhwWe7KKNQR7FVVZwRhDM2mSXcg9jjJSGSk1fgAVQqcVjPbf4RghvUDYJrVNs3",
  "key18": "2a73Kw2G8eeeiS2aQG5t56WVFjKMW6mfsJwDTPhxkvFCijTWrEGjMSw5P7zFH5nXK5MWUMDEwVSjNgejzfurd4xV",
  "key19": "3Q2Sjid6GSTsiJDYmoM99mNkg2yDxHpJtMSUT2BjcjAkhrzWbJ38tc8xYEMVTcsLrvuwQTLN7rG6V1DceRdwqBMg",
  "key20": "45vT7JFVoMe57AjMdwATrSA6X8j9hXDWTXqyvd9D86rpUpfEiiPmykYonYWjhN68eQVxkEDJgtNsCcdQf72ghLkQ",
  "key21": "hL85p3DnkBik8W9jvRnkUTLZTr1DPTnaPCU3GR4hgWE9aBCaerFEcC7BQvmUZLDb44kQvF9Go15FhoEfUD4aHgD",
  "key22": "4ZYPR3eVZpgq8akoZtRMciesUQkFPfXJrctRBHLsZGMYedmigmQKjm7Vb6fqwHwR8CCTSmsn57Fg1LStM6zeVBKd",
  "key23": "XsBgWvrJimf5fHMJmQuKjPoAHWs29xVDkS4i6612Uk62cN9RStj9uVZQe2wnXtn1EfRueuACF1Qd5DA7Ftx9vWf",
  "key24": "4SPgK143kt7smnhc7DZS8F7Pzxs4YFfWeZr7c19EYahfiqLgvRvCeAq213p64HBHkyAXZpSWTQFgq1BmNgfN1qBj",
  "key25": "3xifzqyMPiGgURMKf1V3poCGQdbk3EW69teEzZybs3WT3Ng72xKj7vTz7rJQG2jeUgFnKDa2zXS4CGdS59R815w3",
  "key26": "2cL4vxUGQR3WsDeaq9QoPkoypNi34snvNhbstdXNxp9YsKHhRf17ka5vztgyS59mAqZFsKd4o3BmTJ5AkoQhgJ2Q",
  "key27": "4XEoPX9dSwjJgYC5VpGqzCmSTDnmRnzUnqQvcFdCJoY7GbZc5q624zZs8Aywjefp58SvX62d4CNGzu96gr19dSFJ",
  "key28": "4qBp26Wxdfrfy8RLiZFsGeLFnek3G6ZTRP41invsBfGExyTN4KQMdfQe9c83kqir7jTgv9Lg9y65utqKexWmJRTv",
  "key29": "4nUxefUUP36pwd6KVAWg1RY5ZR1NMfSW2qcQZmfPSNXx6dXr74zos2zQnzgEvNjS4DTuGrRgYgFgEoDYDFLqTq7n",
  "key30": "43fu43e4AuCDPD5sUXanDrw8hHJe8LuEsB1as2mXHxRPyrH94b9cQ6kVAdB5pgidjyYrZk17F6qdJssZ4sDHBLSd",
  "key31": "4J4YbvRiYv31y41tDhJKXC8apsR4uAYmWwg2Xr8HiChK6egmEySitHcn4UGFYsHiT3Y43QVhuQvV6M2drxS2GAZo",
  "key32": "4qtjzyDSPEKYyRj4Y6A8Gqs2D6GgwZxaS1iKtUK2p8Bh6ygcsBaQ6XSHPjRKzgz6BD624GpJ89epTWxVM7m2MBFh",
  "key33": "3w6pdvZdYL7RYX1RLdLczx7qGFTdwFiyGFv2kXSogT1Cfhfom7MrqJekfxeSLtmnmWP9AtPEMcxMHQqKo2AU58oc"
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
