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
    "hkc2GzvjhPHYfBFwedPx1N8nbGncFupi8jLR7yo7Jew6vkVUqHhQ4bK7Lb4dtBYGFSyW2h4dPYeXMf6P7EJzFgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ofsezbbHwod94JF4phxQ1CwEkTKQDein4SX7XA1S6k2cKgVMwMt14z7QXqFPEaorRPm9mPEcZi473TF34E5zvEJ",
  "key1": "qGpi1S6yNcMQewqZF5xof2YovdQUAyq2gytMLWtGJvbt72PLTfpoCgVADVat4sSAYWSd4LezVhe8XNpwwW4M92r",
  "key2": "36BTrhiMzLXNDmWEHUnyv8jKMYa1GmZhrLZgqcwrUZAVxz9HpaReKUSw7PhC4xhaQyVoVJmcCxmHyNxLKB9Qk1wr",
  "key3": "28vqJmM7NVowofuqNLx41knLhWovcgeE4yb8gV9FBv6TwMMfsrsGgbpoKNeNojcCLqcWQLWsd4QgZLyQEDnwRbHe",
  "key4": "3z7ZrmoHj7thYK8uafX9jwTt6B17KqKDBT38H8YCeNeW4Ju8KgK3JB7TygiAW1KrGJiK5cMUxXB6iffPrwGrHdj4",
  "key5": "4tD99s6N7DVwuWCdHREtv2nXQzJt64UUbBZW2Gg8KvT11hfoBSfjcVSEpp4zTdXmSLEXz17ZDXqQnmUUrayN95wk",
  "key6": "3YuxJF9YuefHMUTcWbNN9J37jrDWkRDYVSXnsofNi84WbdoRVT9P1TV8BkuXG5YmU1isxMtmgD9w3tEKvvRjpUCd",
  "key7": "4U7nviiYEqaVRc8wLAXmb2nMF3hbUvt2WqdQqwhhM4m5AZxoowjwPfGHQth9Q1G1Nd6Sn6wv6kSBWBpbKVByzX7G",
  "key8": "4mSACWrsGUpBT3Lp4i7S2Ufr2hWZGbpqdiqmJbg4rtHMugDYwBuq8nXS89fAVrtrU1LkS1BKKucxnA3uxqCUYQff",
  "key9": "5a6kxUk3VVezxBdzNhrfNHttixixm9CXjaREiA1sJfEzz29xY2ZnDFzBx8tDdvDmzwVrY4fTVGXJZcDEtygZZMbR",
  "key10": "5uSdmfLEjSQGhMw1kHy9UcyKSyFfu3Q5P4Spn1Ci4LTUo2tzDMvgwVvSheuKPHGBVFUu3NQgSzY4FVCSME7JhZfj",
  "key11": "2SnVDeUXQpRwVhpMTbAK5thgRia8DNixmrYLDk8MVrDXpVrY47Vp5nNZNExkWXYQJQHK8Xw3xZrA7FCHzx4Y8EbP",
  "key12": "2uoR5PAwnKaitgU8UqcgjqQZ1sPZMnYA4YsTCJ8rNiBsvawHBB1ZmTSnyczzfPJSxoGCBmi5y44p4WnAVkQDA7NY",
  "key13": "5Jdo3RbBwamYPYULHysfhJmLrxwk17nWPp6PfEiH7eaE1kgg4cVZhAeRyWoqf3MP7kcs87rHJPfDSPXiEHpzTbWR",
  "key14": "4L7qrUywx94TukbBKeJ2E6hvq6ce7mx1S8XeX9kh6o8z3i6UdWBBYw5nKgnbLQxENHNuzuQyfQkbv2kiirWdwrpZ",
  "key15": "FYWtJ9Rs9E4W2trTCrtBz4MxrSrY4PPYEZrxELF6aLcivFjhUyrj69FCzHqCTm2M2vcVQX6juw8pZq7FZHdvLYY",
  "key16": "9FjZ6Uy35yiWxAj3S9rBrr7kd1yVtAkvUXhazMNvZJj6cFRxDwuBds4qPNvBN7XQ5L9dAiTwF1XLbTJrGoEL4Am",
  "key17": "58EMf2wEtLkH6z6J5MLqZpDNRigPBiQpDi16BL2JXogyU6U3dhhqr1jP96qHhZodxCXxMfmszq7hBLg2s6RvVfUT",
  "key18": "2W12ihc9BHBVzWntoHUrCqhkFm6wsoKesmUcuTRHPpKRHhsxTp1ZeCKrPv51jq7xR86F56VvTBM9rw7PXtDXQxkb",
  "key19": "3wKLopSteSaUku21Zus5c4sveg3DojVBwyqzJ2YwHRe1R3jSuhaP6hGrr4UYvzCjASdSgA6Ghyn2Dnuo1wQCAyoe",
  "key20": "5JE2d6dMLTdKop4vjLMJYoRr8c1ZwZJXjdoJWtexJ3pUiimJ9MYeWzkgrQtwd3gVhVqKGF4hoziohP88sWryP363",
  "key21": "JQSqfThS7RRNbDo8h9QPi5RGEoUdQGxCvZZRftBjdKmynFxisH3wWExUXJX6gdLupZtR9XemK1q7QUAEt2eoHuQ",
  "key22": "3kugzWeLyB9hQwBM2j1dcYr3j9N6vk1rdvF5tSPqZnZqw5mXTMNgrx7uWzy2BMYaLW7MH45uFnYwdjBmPoiJfFSX",
  "key23": "5H9uN18dMjr2JtnGWWXKRChFSVJXX4mkSAUjV3NMF1NaqedH2cnYHxdnPCCrTFcJQowhitLRQvTJxmzubTQLPkKB",
  "key24": "2sbkdWsU8rXZrEJ2aAoatsjZJoRcaTvvS5rQ4WnrMB3xeSsD6i5oqUANmSaRyDL2xp5PirBCP2AwRLt6y74pbUEj",
  "key25": "2FCQrBDFg6zNqzF8NcC2kToYDnc3tpzT5GS2xSy9CkfQzJsRguH6Dzs5U46FxiYmXdTywcV4VmrfdiCiVZAXDheg"
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
