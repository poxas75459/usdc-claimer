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
    "4y7BG6TwHYa2mCiBt7kUzFcFaRQNCij32xpnAmzB1h3PbpcN8d46LYiCCi7a4rQJyvwPMFEECeaQGbLPzhhfcZt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CoESNroCQttUNYF5XvjVbaAAsfvwcUMbatopA2RHEox3gvPo2qSL7gGvuAp4DXwZvWZdBGSNWB4amgevk5WMsCH",
  "key1": "5cE1pipwCDS1GbAT7eouYxYpmYaeNpHX1TDyLDkuLLHJeHkUySDjgFqbiAeTMqxEZGKUsY33FhV3b96ECNPbWsE8",
  "key2": "4svccxSjt71kWKsiKWrAFHDfNGcZ8SU5ZYo8u7aFVam8MwfgKJaBw9RzFgCVLtR4pDZr5mh6ifUsqCYvQSduenmw",
  "key3": "45ttZX2nri3cixn8P9FT4aDMSdtyPYfGDSnetPSgMAHcKf6bQFfPAuDgctCvfeS1F5pAUq12sztH8CsGWvSQb3ex",
  "key4": "2eQNbYUnJMXHR19RRX6aFakyYCC5NoRS4WELWLTaZK38SBWgGjPj4uWJ1AnBp15YnCKMRmAxRfZ2WGL6z55ZcYXz",
  "key5": "5feoENKUoBAcsBVUEH6QHEn75n27tZnMfeeELt8FKfagGLSqCkgPBNVF86Gx6Fuv2EKZm4K9agU6tPr6FoCs4WwT",
  "key6": "39h6TgNjz3egv8n4LZ5hDg5a2wFEPB7bfcHWMSYRjw4KwScLjszKVJ45WEwX5AfJKivffuqNNCbzNybLp46JwJsr",
  "key7": "GJc9UNdJMSuUrernjfYsKqrYJUjk28YrJL9QcxmiEEQ5iA2Kjd68xAzu14fiAj3hq8bq1KjLN12ijesYWhsRWhC",
  "key8": "3gneqp13QfnU7RUNjka2RBDjNrsgsz5T4ebBdv7Y8HXWwa5prwDNmXZJnFrUWETa4AW4oHNWcc1gDqn2kVs5xbtY",
  "key9": "3eonDia84S2kGaCgB8mj3ziACHMFh98JFt1E95rnAM5qb3PBehqv3FxsX4VwtJpFMFvPm8FPgyvAFAe6mRizP9EF",
  "key10": "3yWA1XGvgj2HmThNaCEGDe2qNBh81kZ9nArc5SyetXkc7mHVV5HRo5UfsEPmrdkuuvtZ21Z5T1fQPyV8LuQQbS3i",
  "key11": "5x17SeCziMvJbknVMX8r5c5ucJD9WwDDBsgR1ZC43atdFFgjnQEV7o1E8bs5dzNXLXsF32CpYP2jVLihRND8vSgM",
  "key12": "67F8rNgx4NZpbnDDSykia1mqumL5R5JD2bmieXHVzMcxMDq5cam3emedAgijM7hp159Tan56GZhYdVG8eZtpsoMH",
  "key13": "L1H5CdS7tV1fiP6iYgYQxoUqhGGcsnC2LYAA4poLysuA61rTekd6hP3DWq2Yvnvg5PeukCCNVaQKgz8umAP59Vu",
  "key14": "5tuxkDQGZyXo6FvbKmrdCo8FbKonh5yPAR3bae2qBMPKUKz9CbJywfpT5AN51c3aWtMKDryeTJkjph2Hw91UKnRG",
  "key15": "4QWBhMEBdaLVEVgzANYNUf9BfY946DuVLmcsLr3CchfrUPT8ucaA7rRernMNvQfja928ZzUjXfcbY3Fip3au62VN",
  "key16": "4WeZuFpB6sgujvrdXf4XK42s3tYVL2aDL9CAstGEQaVgmEcFZAZ2GstCgiJqtfoSBG6mpzdRYP6Lhx2uSRhTGJEt",
  "key17": "4W3tAq5zB4QXrJfBJh7CtsRyrJM8r8S3AcQitX6hX7jEGQ4fYxjCJPvJJqEAjtmGBVN4NRtuWr8tfdaDZwdZDeMH",
  "key18": "5hvFdD27hQCSfz2ocuQxmFWYRtudc4zEoNyhQYx9jD6ZHccNfTK8AG83zVA5oLKojiRCYWP8vKtiqgXa3peLhQGQ",
  "key19": "4ed7zGosWbCmjjXp4fHXXSs8pL6iNrJNhrgKxYeUoA4qyUTXC7nbT1sWYxbVpV7ooxCawaP5V6zkaL8NDiyA3o8a",
  "key20": "4GzWhW3zDHruJk6GBgZagVwmRQgTWwoi81wZqd8ANB3iEe4VyS2rDBRE5bnXbtDrK9Fx1CFGrwfNcwTNgTYJD4Q5",
  "key21": "5gFoyFNS8SrTMNeEmXYXtF8Zb2qs6LemwZUaWG4QYbpFfrDH5UXJNEG3iUz937SFdDVhzpg2zCw7qsKidxJpdbo9",
  "key22": "1R6Yr5KCYfbvUFfy9XWGPSeU2GmJ5ukTywzDjs3cQcgfBVt833Rg68AnkchA6AF64wC9VF4kXDRtyZRc6uye98J",
  "key23": "4yZAEvhdgVFkjempuCPWzU4FdLhrCAcfyiAomZyM2teat4F6EVjoJnmGAqNmky4faaSTexLvGg1Kf7y31Z9ZkEz8",
  "key24": "5BbPRYGBYgLvwFKM2qC3rJ6ADBUyhcg36iUpBuCL8HdxVa6kuHaavJ5MFABi4LxG7eprSybMLjQnDmEbhfVrnywG",
  "key25": "44eRXAkyf319aKguie2iNSyuSgUSQtkP2SbRPoVYea1N1tXevs2LkBHS6wZGcoRVubgpukrYdUqiG51saXCngxqb",
  "key26": "235kNCtwR82mAQvixp7AvTESHpL3uAoarh56Nnavt3dYB4936bjEwoZD4LqMJMFNG3r9SUChE5z5vFN5CXKoWJ7G",
  "key27": "3knmWcLFLPCnUZ8mKaRaprwKBjqzvb1JKBEUckwEEk579c8vLDYW3sCzG7QiWa8qnPsvzRyZJCeFRXK4wXW1pKED",
  "key28": "2ctAcgv6k8QLLCrVkUP8pNekBNKBfGTa2SFRgyfvqpyY4ybLZYH4H2dGUfHz58dUqzBqG7PBsDya4iixUH82n636",
  "key29": "5QrYGRbV9uJj864UxSeEY3BdzHrz4SWUqWwWcLKWwtGzJZqn6mfpzQA5m6fdjEU3XusCHSFFsEpfrVwoPeEVrh9b",
  "key30": "3SRftMww995mXQ6fpET4YSek3sLgpzdE4nywQHNuL3izrUHhAWd1pMwUHF1eTjuM7KfESbpZUSBjd5SACcEazjyt"
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
