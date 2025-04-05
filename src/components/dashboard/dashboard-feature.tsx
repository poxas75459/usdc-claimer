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
    "5Ezq9RgTU3urR2WjJrF4z8PjPZZQqx85Q1XkVJV8UgSpSAR9R7VuMc8T5xg1aTEM6FSyLiBrdPn93CtnxeKYQKhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5URxEiUqW2qFrn1gfkZosb6RdRN7be378S4QczvcT6SYR2TxofJyyqXa6GWHYEMjEriQWUuYhZPZLEpf1v2hFeXS",
  "key1": "46ZQn9yx4JbjoSL9XzsymJLHWCnCQPPwEFJa3FovkXEcaadDyGs1EXRdu6UqmwRQL4viPxuB8yKbA2gHuM24NApy",
  "key2": "373FWQVPQNbpizuNdMgmRRSUovpGHW4bHeZWP48Ty4nSXvsoYNSxJwcm6hcukKEeeexexGHYwMtugJCDgFYKTCyx",
  "key3": "3i6JY4ahndrf7X8JAtissavZ8cHeNjB6ZqWyh3pZoanarEZqAef2znEUkH1uovjtgCuFf9ckncCGQHvh26VJzSUZ",
  "key4": "2W6S32E7osCJ1goY6EiQzPCDQi9hiuoFwa4rnU2dpKJqUhQTXRC2GwqwAdj15aRVQ197b4D6x3nvwJdRBhX9BQw4",
  "key5": "2PVjWoASE1ZYFt5TadYKJtTz4RNBjxzZaoyqxEtUpn6ZBwbgvsUjdtqcs2iGkp7qmsywx6Bbpu8QSHHh8JMohazR",
  "key6": "xSoMUb36iEav5FTzPGtMqDHz24rFbdRWyzKNuyUmCr95k51ponG6UuGvuL1TXwebRuJDVoavksvnAqh6K1GgdUv",
  "key7": "nMoac4BSv5a4w5up1hyaMX9LHkmaoqsYGi8ajFCm7mnicYTSmQxfuiUHwKkaWK8Z8kupmoJU8e3STPUrVn6cW5C",
  "key8": "UgqP26ibHmxfhnGGF6Koqka3Weap4of3Dd1MiupY2e7dMK5sDGvM1nn6evSQAnoNtbWus4bf8dosUU4G7ZHeiQN",
  "key9": "3TKwAKyk4iZ4NWHMKQWhXaQpsMwpeW8n34SnPSsNEtGit4psVmF9T7dKWYfdksCCVop3QmwoSUNJNxo26kq5bHvR",
  "key10": "3vgXUQ4zNB9dPLaWian8NdnEJX4rTYchg7D2qnDtcHxEWbeDuWs6JyBgetzMbFNt2a7tb3t7SMTJg4g75Rks1gBq",
  "key11": "3ts8EPAEMUr6QjdHd9f2QFrSefhFeYCuSFh3L5hwgAT7LFq23Y3KQ7CzLCVF6kxVKftxhuLfBhpHUhm5e2k34FpD",
  "key12": "58rqrgeFJyyYAHXd7x88TRVpMN61NM6J2g8VM2zseLDuVbrXFGwoJS1fmX2AWpEEqJ1dd9KDk5e48pus5pN5kkQA",
  "key13": "h115e6ZNp5hwz3vhnLkQnpZk2vbUs9bCXXYuBHtFBxoHq3aew1Snc1QQXgBFPb1SWcMmm57HwpdGDHzGPYht8VG",
  "key14": "2wM1hxpJ7vtKFyUDzSibrVLtCZ8EQd7ScQ2hKxgjTCzRZpTJ7Hyj7E3M9YfQSQgDYYkPMTxqaC1efjQE3G2PnLoA",
  "key15": "57B2pPCaSS59CSmDtqfJFeXvxbH9mWMCxC5dXXoFRHdz3Hx4ux7aSWKyRjMRrNqohp7FJ5KDZAfnZyM8fMHz128A",
  "key16": "3uywstxd9xppuxZ1zMLd5UCBpGsY9cVHyQ6QvsfW3eUB9qbkD5JvZ12B5KVUfefRgF39rCgcZVRM51Ly3QW6rnnh",
  "key17": "be7fLYb9dQQNTSEgf5GBkoo5gtYwKt2HqToy3v7wZ3VYML2jgrHqXa1NkB6Z8HzL1DS2iMGa7DL7wtbQi1eWMfx",
  "key18": "622UeCgnrZ4pgu3tYZNbe34H54nbtNGTvtAjyXish5bMYWPvypN31okfUL3nLYSEm9ar4oia9KeRXVyW775s2xny",
  "key19": "5rbeDMPfZTt8eUFoi4PJ2M2zWsGq5UqYB4G9vcrUt4GgJoAmTSMvMEfP8h4uSk244gysFEQF5RfZqabsvurBa7SW",
  "key20": "SB9LtQbXMGb7rCNLwr8ktwdWTTisv3QQbgEz7sD9mpWrmz3sZjWRrowpL3FxNyZQoVSxH9ZtPPyK1om8AmyV8Lu",
  "key21": "28aEebsSwMD882oNsA1NmiYk492FZfEUQo8ktweu34689qu6Mtxn7nK6MKUhgca2L8WTywP5vHVAuGjUzuuF7vna",
  "key22": "3i1NFwZCwmkqH3ykwGiqxgD9caq2JQhwWYgPv26f2jCZvAafQjt4Y8JPhDYznLCL7wLcErsbgvEX8nJZ9RiKEtD9",
  "key23": "3P4QW768yJjgP89o3kcy6f5LagDnqDes7LNgYPWEvt5VivqWtKSYz83hVGXPisLuGVkLFVbCADe2erVqJEmJfmBT",
  "key24": "2jaLfiZmDpAwRsaZYRP61wSbeu7DUhsBQ2nGgrymhFG1BXTMzTMjbgHz2cg5rsKcTSfFJR1m6QDNJSwSQp7Q8qrc",
  "key25": "2dS8BBxsjTzHbrXr69C85SVwZtf1o9q88SZU9ZG6CXchnsq3UXcjNRxry2cTmUNcoXcaS6oc6PN46789eb8QWKZv"
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
