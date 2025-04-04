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
    "4imXHYfKnLKYjN8R2ZnTTbd5KjKoc9B8EB4yBeAcjP6gVKDpdKXND7GuVH9JFQEWWqfJmCWmStkMFVQC4NfCejbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E7uwoqSoSgFv8eTX64ns9cPczAD5EXTKSSDT4jJDrYr7NeyJpJqZwFTjHMSeXuSfsf1dmCAjHneXTVexMX8eNhC",
  "key1": "49QPqTn2UAp8mDg1M3jsuLKypnu5jNzPxqwSp1inxccgGoC17KW5aRXii2xGw7CLKcByzUAx2bN9usg5L2fAp3uq",
  "key2": "uanetxmmGwgieX8rzpUFrYxp8qn7ZqUV3waM1u65EADBd6yxGvkktwcvVC9bmjD86VgzXWjZGkhXBg7s7pgmAZa",
  "key3": "3jexwYeHMn3JrfXQmEwKLJhS6EtoRsMvzTRLFzhmJLzAQ1DenmUzxiceQzh1GLxz4RupVAzMi5c6PTJ76gCF7rnY",
  "key4": "34NWR63CLRDajrrVreKBzLF8SrEwqdFGVJuTfHwS6mky9pVv53eFWrKEHULMhSVcA5y6uRknwsfo8hYPUwC9jLvU",
  "key5": "4peHo7cWTtp7SYkJcfACMiSW8w6Z7RrPC2w2qqbHWAA21SuHvchn6rYzTo5Dkqsy8vkWbBvoaA2JoQ15rsksuo5Y",
  "key6": "5enuiekwkQm6RM1Hk4HgFjdLBq6VmpqVS4e6JinJdLPq26JopAyHNUxtcmTPmWBxmvF5fDvy8rFoBnQbCxw2bDHQ",
  "key7": "2eREiKRdMSbsA3G5XYCqRvneRPB3CSGc9jkVJu9cx52LL9R9DmTA3bLf6W7GPVgX5hqNCU17xQY95dvvWVxa9SX6",
  "key8": "3524YzY9WKp5utpyzbrkeXi6xjowiXaqg1S4tGU4WCJxNY1XSXoxcHu3FGUVDvPhzHyWFqRuUz87oagawjxDDfsg",
  "key9": "2BSPfampcKAmcDxg5aCwTpqm1BgqquJPnAfPoE4DLc3FFTmW1ngjBn2YU62pZKugRWCjjj8dQ7mHhiGPHu98NGmk",
  "key10": "w13RqDU2EPNP1dqLB91R86h2VHeZkpJXycciEgqFdzVp9SBdwD9RmdpZZx3VB8kpYRFFxo3i6d7KxS5GmtVbinV",
  "key11": "491wt7BZ9QtKaSSZei2pMDcbhUfHBSPJEEAjAMSZFXrP1NVBxbVqZsgMjESyFMtSJE4AKigurdg9xZovpzQctHL9",
  "key12": "2KMtSMrCHQPBTSER638wg95PFrMiyFJUrEo4b46nMQE5qgEns2nnkw57AouFkAiyBJXfiGfVzuC4n9nz9zbvzBZR",
  "key13": "5WH4Wyx3daxWCBZyAB58t8KgR2DaEVd8ExADkc73WuihRZ3JH8cWABiYP7Bc222ri2gLRFTFJGZ2YfGFWVCU4xrG",
  "key14": "4SBaYwGK5JEBYzRxjANL2x1QaAZDZGZ4vciuSQvpJxfPP48eXSLPyFuXipLy3AGsBD9o1D8T5De5RsNM6ZxDLrZg",
  "key15": "5VcvnEGUdnA5wdsErKvU7mheAjH42ouRko3XBPV2HHxbYbc9wWjc5CCzL1eUq2ruf12h9exDKzEAWjLpegyJk5U7",
  "key16": "3e5BjEb3oUYzwbvEHcfLhRW3NeLqxYzyCAUSChmuK9iHxdVZX5eoJJr4NJz5P4q5oHRZmHTmG1gurJf7eoAA6nn7",
  "key17": "39Z7E7NCPCcZf5yCKgYz2xECt279s6dBv9EznW2rD9JyzBvRZLTv9R1ijPCogJE1EunaLGAdz12MPzspmGXZRCSp",
  "key18": "4ggjHiFt8eUVyvGEKLxzrHSTDJTb9yuh5W2XA3Zi9aaZ6UAiGWmxnqszukTffDY91NvDNmxNTWkAUm1z2pvTFKtE",
  "key19": "61Qhu3CHtEZ9JUye5ZMnHUmL452FEsJb1QSfXo96K6k9KuMXovqosXLfWhzUCk2rqZKTm1QJZTHUzqiygYsZCrMZ",
  "key20": "m1R4Zzm7M3i6wXGVc6W9zDy3WyTdkUNdPm2w8yh7Nkbi3e7E5DPcEbMiZ2feAVHTw3aT67vMe5bLKHbcaMwGbHq",
  "key21": "5V1yMpTfL3zWmCTnPwecMAXbsecXm9mGS8BsrrjZDRYY9mh5KEaqsJweYHvn4YH2Lx3cwYTTnAjPyRPtFGgn7Chp",
  "key22": "4AaChnmB8PxBi6zaoEqNFed3XHH16WUXeBn3knbfDueQiufDr3CnhiUcfsEPbzFnAxQgLXqYcxSqgd1ykf6P9fzs",
  "key23": "unc6moXZue5AUf6nJv5ZTJ1REjFzGYCFebh4ek1L391qiARiLdXiFuALHoVAcMjFVPLMYinSAnQV7NVfLoaZ8cW",
  "key24": "3CdkJdndoLfVmbTBrwMp7qbKgJhx1kD7zhmUZhquDykraqP3CivFDxnUEMKdVnCvVezWgcF8Lw6PPgCnoyXC4ofa",
  "key25": "2D65YNKQTCnHqA8SiBsnP5ZdCyzaAMw1w77DTzjBK5Z6wyMgUZKLnFq1ftNh1XSJ7Hkjit7EBQHKnn92PsQuvVKp",
  "key26": "23vvaoRnzxrBBYgPEmR1RsNdQUqmww5q3xftzwdPmnyvzi8AvANjdcUtj2AsFSjsr2s4sR4vbhPZmHiGLnXATDYe",
  "key27": "5KiNGMSBPUewErauhvRNcQbcvKuxuqZ3TNnk6gTEFPW3ZGGxAgf1pKjQSkzZyNLGhPh1ozEhfJPWmsUa5bdcRYzX"
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
