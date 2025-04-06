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
    "2FUehQCVPZukBntzDxBXdQUbb7LL5nAhWYSfANQZRiXdLbvFzhdW5XfyUEE4S1Cf3jSfGrs1278hBjHvxpvZWM7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CrnwdWKwqdMU6Je3KzXVwx87SPq6amh8gaGghKeHjHvKqHVfujDRAfzeKUs9NatS7NpkcSHhg3CZnB5rsU76zqP",
  "key1": "4c7DeEwSaWJPuNBvtp2rFeJVZmQRdezdw8aaBMdACgVPN7eSt35PAYXYDBokfebbYLPnEpdBbQxayYVQKc5ACALt",
  "key2": "QkZGm5Yqtmn8N5oG7pzS9GnFApeMHj5QYsTNhgt2pMz5APdUXsKcUA3Cvf7rYVU2aUZWDZDZVRCQXjTAVPddJ88",
  "key3": "3HJ9F53iv9mSqwzLJ9CtAQYbrjyjvnxQUfqSx7d6LgZmVJSpky9m8JJa2Q6ivQ6o2p3KxukVkKtQfvFBesN4uQ88",
  "key4": "23L4ZDqnrMPyKq6YDECgxaaqir2XrWkLXkfPViDZkHi5TXgAa5nycjQVX9fZBcoLGRJZNZY5tpGD152wDPkpPtYC",
  "key5": "33nXMzrqGscUGMe1PZSwy3ndtVVzfgPnWB4hFUqNUhT2Y3mmuMKqwA3DHV6BGDYEsmKNeScGfmewfa39UjuhHxgZ",
  "key6": "3GJHuvgfforZtkWixg3gEGxEGL2AKvqJjUmDsHFhsDPUG4HmwCuMeK8hU3CQYxdjcmTPAdpr9wcTNmApRQcAHB19",
  "key7": "4tfPCwgejYqvV1WwC3wW7DQjY3kMyFyq6ij8cWR27W2Xbdv7zSikmCZ4LCvAaK7So8gmkn6hXsffwL8941ExvToQ",
  "key8": "3akthCy5PY9o6mUzfKSnhxJNZkeyki5xFuYhrRbrVexrimNssL3idFGShEuVrqbn1m1mrsPLGRLP45facQx29i4H",
  "key9": "3eE1Tminu4Fkmitkv5fkxyvQbsniyCHJugHVSEcuh3vRN1Ms9cEygMqgP4MuYbDuaHYkJFfJbydxJZbQ7RTxyJV9",
  "key10": "F2728HvJ8NHKusc7BmJGV9Ao931xkxy2xtbftTrA7cTU7Z6VNZsXkscwwKhKzrhFzuBMXxnENJXh1wcuQADEwY9",
  "key11": "2wDig9hRsMxrvDzaGUUeRqCBWzs73EZ9kYJeYa9xgCvaoVUMHF7UafXEXLfArq31fy3ZqKKuDRkyLzB5rNkkvP6y",
  "key12": "ieBmnRR7wxtLbZ133mmeFYp571fhCM7CYxSfFT86d6mkoDEnrUzJv43Z4WhbUFBBCtBRuisohExGum1D7mYfCNR",
  "key13": "3azCkWFLJpDUW2HMozEcRxMgfD6shcg2cav9Ma42fuBtFJZJ19J2STdnSSv9Xeh2KTqFwCm9wP985wKyYyEUDZc8",
  "key14": "5sCL7ZUT25h7FPtpww7zUTcdp8YFR1Bw7A9Cw2bsHFhgaTdvwwQaRZpYePh9Lm7EufM5ZGnZLpR8cqcnc9GwxRBU",
  "key15": "5E5Bjqguyk4m2QvZfWxfumBSDmnx3Bug2kTgzyjCBuMo2q3BAX7WymJ9VJEXWdpZLPZA495w4f6mxUoBBthxzRep",
  "key16": "A3CkufRwqnp6ZUkAe8XKYS6doX5DrHBSyAq5o1xifhYBNsurSQvScwcTtF8TnRUxn4cLZnezN5MGE7Xyy55CwxY",
  "key17": "Xn7s8q6W8U5pyyH5QBoGmXtU66qNejzrmajUZo2KkkhReEn9JkF51KmvzYavKfP9onN4m47ziMF8qm56QbNXaCT",
  "key18": "Bu14sttwcJzeq9A9eQ9GmiaHdCvj6AGhGcbH7iMNZy6vUBUkPndgv8afmsFHSVx6BVWQZoET9pDeErmRgd8E5qu",
  "key19": "2FzRJ97Z6BRUrNCZRUVpm94RxNtYZA4WkQHUX2gx6yGPR8svJypjykqr8C5Eo3Yuohg8j9s7gbaLEF9w6KYgirEY",
  "key20": "3JB5ZY3eGE2bG887BvpkUNJbtZ9foyC8mxGTc27BHZqCVEtnYae36m8ZDUkR1h6WuXyUnSxpxpgnFj4Dvmxhb87x",
  "key21": "3wcozsgWLVJ6qXSWDw7PQeATsdGbL9opFHw8FR8LEfREgLHPjqUvfPPHff2cLpGvUgdAN6L3JXqCkFKxxTTszfwq",
  "key22": "5EH1HkguEwaprYEPg4uE6esAuBQKKwUSscXwTACV5Wsp7oqGcEGwH6Z7tB7BSGkfZu9Gddk361GWvKaeanrvXw5W",
  "key23": "2vsCeZnHZSAhviGz9LFPpuqJj5tL76bocja4gUugR2XTR1d1RcG7ynSNMtXqfLpeZKaMyKyJLnRCGpz5GHPYfGgW",
  "key24": "5rxibqookerJsLYSagKJ5M3qF1aMj5xvPMhKWUq2K2zSFgeGi3xP34A2EoNasBHuxFwHdmDGE4bhNSNKAWJ9Bt5B",
  "key25": "4CES1XoNbYeDLAcGLqTskCXUjhJU6o8SynRZhA4Yw81eviRPouEgM239fSmbah1BTkKkfBFDamikJwgLoACUwXHu",
  "key26": "4DqxtgJ7m4wionjyjm2VPxJB8imF889Td2RQAmT4n1TxezXz8qA1n5JHysEndGohEhDA3f7BdF7a3srn4HGyYQua"
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
