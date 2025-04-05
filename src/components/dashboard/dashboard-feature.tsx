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
    "dQ7qMnEqAGFsMZGBwN4xeh1LbUCCAgpH9tCgj5LRFNrfeXoKYbtjEJh1ZwD2T9JNmzAXr3XjaPPsG5fpFAqKQLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58rotjvs9faCzoZLzcPoYEh3pZdrYzNn7RJpr4rRbVRqBRAo5UcBvxbBeQRnQ5fB6JY6gXP3UcfCNJ2P3XopNuXB",
  "key1": "125KtRXjHVe28r1sVGFMVsCcRqeFJ45BeYCYz5T5yLqjuwSmmxMnFpYvTf8vx4LgJbvGvxcrvaEpXsU4JTTfBugb",
  "key2": "3wbgE2h4d6uCmuHvfET38cPZjjsBXkoPPgRaeVJ7bBnrk1MSsnHFtURsXg7qjqasFz9CrzvLxqSZJfvgCQVXt616",
  "key3": "5b8pBUMLMn8EbYa3oYxPE7m1t98BwnUnq5nYGM7Dsv5XoduH7nSJf8QixdxYKtNiPE6TYWhEpr2cqSMm7ZwLRbGv",
  "key4": "3QUkZbbtraFj2YigzVvW43jzB6GynmkBkCw7N9ziCBSVaEpQATZsryTMsDEMnkEG7QpyKmkVZBDeMSqSAoPLu4GN",
  "key5": "4QjivKSAULxj2QhgBMdogSZpZ82oRFMuei2FhHtLg1bxPcTFREowb28XedCT87SnaocQvVnATyrb9c9HWQ2fbAdN",
  "key6": "PwBfgtRNpqtVSmPizeFa8pEhpxDYGMb86Wve222sc1svnqMSvv8wnu6pD7CPeat2AWWZd8EKyQYmPqXtMBu1b1t",
  "key7": "4Dd2kCJWnnwio11BUaP3T3JfY2VrPNUBahQV2usncyACTifxEaFfbBNwCNJx1KGg3fARvz8B6ywHdoi879jc4y3W",
  "key8": "4Rp8NbhghSon5gbhjPGgnhZZYY3uqSUWHKtWR8Ve7fmZvjuL5h5zgPbsZ8k8oCxGi4J7fNm3hGbookCTNKpt1wU4",
  "key9": "5awUWmZV5edHS74XZA7QLFfQ2c5MY16dfWE5cduFQuYjUmDyCRFoLjYkpBi8uHUcwE2gVVhrZ5budgHWZvkHhK1x",
  "key10": "2WFVqzb9vboqgZtXwiwp3473QQcuj56nQwUBgZKhVraSBMdCeTKjxvYEGeS7ZRtUXje6AiCSxkp7nvyXaDgvRBUc",
  "key11": "r8D84t2jhhbZBgJkEfeKQtrfmKwHuwZmqHKcg86CMJfRywMMQKHt3F3TLcHz11HKGigZU4ixFktmHxF4JZVww29",
  "key12": "9LqrT7fY8c1NKon7GkaQj8poVEfKxVfA2cURNqdEs3UcyUaRbAjwqaxARJU68txjJPcSyLcrRTwdqPmyB2X3SAL",
  "key13": "4mPscmajfz58aWUgDGnatkvh6mdtcCfbtc3oaRrt7jVjhH6wgQ9qS8x4EzeAZG9havhSJBfTRaReXWHCoVDVsjXp",
  "key14": "5MQNhfjrwFvgQ2eRkQxZ4CPi1Bc1rn1fQRKuR2z8b278cCtuWJtCnNGDWLqMjPdWv5rUHMRH19mZtnp29Lq5yh5a",
  "key15": "2F8wUwk9MCXN5KVKuAxXVdixFwLk7bCc5sLmzw4Dz1mUAzqjptJM6xCUPYW97BFEcw3X3AZ6ZaK4fdJygJdHdUQa",
  "key16": "5AkrGrJo1r3mJr3zFY7oe8Wy2mQ9GsrWw9d8HqHfMv8SY1RxszDNNKv5KRGaESepYYQg4BT8iUcHZzhybDHj5hUL",
  "key17": "4a9wN1hjeDwcW9GdZnKWobuZYihgVMTH8axGe5AoB4K1Gxn2T3ydpXHLWx4Ay7Vmsf5EvwzKqmRrBLBp46g1A6Zg",
  "key18": "3G4bxiFrmxz22naXGC8ap9eS2KdKfUJMQG432HeTTWLEufrcPK9yf4zXeHyMtvAJg1FM2oCPPmBnvTZCsv6wkkf3",
  "key19": "2TMDVyp1P4N74sPobvhxfCo7qeFtPD7bWoWmQHqqEgx3z8Pwkg6HmtLhXRygqRWFYxQXreL9aoePmXXPm44mFwz3",
  "key20": "4nQFqZAvGiZtLT11ZTrsqbi1aFN3nUx23Fvtru2ZGcW8PyPGSk8gfLjWtYuBDyYJ5HjwZZxjPaadWd1pxxpiL68C",
  "key21": "5X6rE5BpBVh3EmiNsZnigy6p121bMrJt1MHNu5xsUZoreZyVg7yM9gKvQScNYutP3j1kinrNAjwRnvAQgPEHFb2B",
  "key22": "385cXbEcVNnGFNAeG1ZFRCoSDsnkcneoFEH1sm7TAwTfXLFni13dT6AhExAci67UVUHxYNZy1on2J4L5NZph7JCv",
  "key23": "4B4aHSeRPUXUHsM5TLgMvytNZC4EML1Vyb8SCgQ6VjoRbuV9y6Gii6Fktys4ULVBL5e46r9ezPwpxrcrKtwAaqo2",
  "key24": "4iM84N2tPuXp7T5qYGcET5sC3sS7wYztp1DFwzLxJMtpmgpD3DtqPNfDPAaKWGUq3fNYpQb22gLHXXkzMsgFP5xB",
  "key25": "656Msbcgi3V5ZfbVvoPJ5QdbLMQfKH1guCuvorvp9HkD4MbT1SFs2c5h1GBrUJhGWi2zXLqSci592kxnkd6XJpAw",
  "key26": "2nRDyHpTb6LCJi7gwpnVJbvrtWYwS2zohpqLFaJCgv9B2jqc9yDe2gpoE36BGen3aBowbvVDjq8KX1znDbf13NnB"
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
