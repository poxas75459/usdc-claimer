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
    "A2s4GzVaoHHZeqsoYYNAeTGxNqfoF1nidi9G9rvimHtrjk9Nzu35wBi4t1rrt51yPufdNgcd6wf6d8SWvn9oTcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ati5tz6JN1GG1xC3SFuQbScycUk8H83EUEdX8aBZruKxgxbCJMSyoDW2zMftwUZno5cCYKJGkAEV5eC3cX71AQS",
  "key1": "64py6p1bG7YitbzBE8di1W49DGidSnogFZcdRV7Vx4DiBmhtzVaM7ReQibZoEVv9mWbN6jMkE3vYtmxbv3tTCra6",
  "key2": "5YAYhvJye78jAfvisdeZ5tYPkYtRkSrVppYC7BBx4K2dmkD8fi6X4DhyZ7hHdYhhgzVjP92twrGdo1uijwRNFWz7",
  "key3": "66fyfAHYFg1qiPEAGxFJLwPBwBfcVDRhZhwT7wmtckMPRc84ygq1Xisnhhh6Z4pUuWhwTREMG5Y5hzhBSEFzrz9t",
  "key4": "2Fq3BMxhpBVTi6Lc7FArkSBRF7FQtvKSpwEbA1qLJdnQ9D9wbt3KZ51vzVBns4tCeiQuQ5QA3ER3bG7Z2b3DFtpf",
  "key5": "EfUzhefmE9bYYk9UGK7n3G1Arj1mB61R73CiE4nrgugtPeMV8oXHxcvXasAgvihs1twXVFTnrvvC1KYC4c3Pozd",
  "key6": "2cjUsf4uJqRGKdcKQJPpteTAioukYA3zrv3ZcfBc8oTcP29e5WMHvCvXuNN1b3JnrD5HsHa8Medx7gn9UHgSSqWm",
  "key7": "5KihwFpiTKY9vddBHdrxaUh6qMTcBTs4ytpH3xGWgyzv6T5TiTAsnXkYnofPNE4zkTPiPNVTRL2gkiQv9HAiTLgz",
  "key8": "2WfG8jmVxf3TPPcaTLJoKAXrnvMB3FZWGUU4UyWkCfhFWmcnqqJ45F7ceFaKcdamrZDD6FG3nukMvBjztupqpAbU",
  "key9": "3Uh5HB85jaDLfUjVSqHEEvC8eLD4nvPvr5dzvjsehyKADf781EESnvhSa6hmMLoMMJysK5obsVKHZ1hdmucq5nNG",
  "key10": "5jap6tLsXKoDA9iDu5kQyevv2HjbnMf8g1w72SVcVZheU5LCjHj4Wubwr41suht9zKQF9b6AV72jAYyF5BNr8DAx",
  "key11": "2Puk3mTqmDxwfajnD5rQLhQXBtjZW1zw2GwhxuVy5g3UXfkdXiH5niD4ihhKkv5QjFrTUbFt4TSvUhWfBRffbE81",
  "key12": "Ygxm6X6LWRi9cqXyrd8V7Wf7S8UY4ySZ2Q18fPKASw4qAupSZsoSENhjPNXz9VKyivHTFoC5W4jDdL8Bp2PodFF",
  "key13": "4mFsJ65RxxxsbsKS5kXFKXPV5gNSD2RzQ7qVMjihpq9eZK2mWa28KGd5BtLQJfjY1M3m1Q7GHuEE27XypjjYq9Cr",
  "key14": "4B5ReQGHLoK19kDUxZjwxYkDhFRFHrraVqEt6oFAgxZxeqEAGzcJ7W3mtUQEXUiYeUJbGBFbrC4sE5fd93NNnByM",
  "key15": "5K1tF8HRYhTVWAhuMhuTNFJVSGJmKhPYhNLrNdbPSaLTydYXtqc6yP414a6pbndfW5cBipvvWtDcujZAb8oUFHMB",
  "key16": "J3Bce2554SAVinbwWnYkgLYBrE5MqAzNn4wmWuiWnPDEQuAXygJujpADPWhcoXdtEpSjqBHrrwMvK3qttAB9GGT",
  "key17": "RXgwVvbD9qBHNumwVXYH9VGgwu2npX2NsfDcApzfT23YHfWDJoxvvus4sqfMageVM9TyQ1XUVdFHj8KstVixpAD",
  "key18": "2RtfDYqbHad6BeTEq5GBYm7HXaqq7qRTBz8ZPPA4KxFUaiwgq3vfQjCW2Buy5X5fQ1JjwjCNWR2Jpk2hJCow7r4q",
  "key19": "5Rh4iTuGRSMEdTHJ8wJiCFojUGrPLFDPvmWCHsbkPuR1iaBZYjjKkGgCncjtxp9TaPGeP3ncMEojb52vHUE3em5R",
  "key20": "4hhm6Y9iBQBtQhnT1zbURz23KJKZskHdJYaKQ3XqmnRTnJh1p1QUapPcjiezVmvmQwZt9mc6pZHTtmT8t45tE128",
  "key21": "8HtFWnaaFzJeG5eo2KNNfgBtNPnQrs8zD7U9vW7SazG8kM3pYU8HMCSDZevsrE82jT8RNGda1zSFJXrkAWhJmdr",
  "key22": "2wp2bQuHswhm53fAxbnKSwxMfJXb9baeieoT3syWY94wiwG2uJJpjoRRY8Tbjc9GHo5ppqJzVB9GxA7xbEzg61i9",
  "key23": "5w1n7k4D3mZfi1L9HXU8WEVAf2s6nmhptwERMjZckEhC7oG7kZ5B96dHfnawRaAa4q7JZHvo2FbS771NSEaBFunK",
  "key24": "2yNrH6G8XSWErKM6HtdzY2F7udKRypwAoNAzU7tara6UsgzFQ3yU1gxtPELUxBS7gKmh11e4QhJk8tiNDy3BZw8U",
  "key25": "58YLb5fEymexTFYArSBuBoU33zXJny7PkpDbN4xEi1NJQN3THND3kjgra5raEZGeHxNNjyDKRtut4DjEzRMfegN6",
  "key26": "3ML9kyCkeNPJ2AQcStG2hLrT5gQZwt9ndy2vQMSSbL52CCzvHwf1KSSSZhkzyZbPAy8cyQ6MDQusTZz69eDnrNs4"
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
