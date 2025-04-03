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
    "4gdX6DVYMq2teZ1dxFDYzH7JoHY5Xgc8Am5K9cnYnDmxzgH4oa8S9LeTcQPx5R6rtExMb3r62GQmvGKtSJBWhozj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gQ5Ntn8rZXU2YbkLonnKVsPTCEVtRfYaVm4Z7Ur1LgWHXfj3SsZD2mkDFxY9sKiuEmshtU6y8C9qobi3cxWCSDT",
  "key1": "5tp6LwHF8rJ6rJeCT3hrE54cXnM24JZeQ9iSFetxSHfsgmMf9Jwo2TPta7L7sxAhVo9yVQzzC1evy89dZqrFLfv9",
  "key2": "4VXj8cHrpyVvntToYs4JJQFYKZZuivVwoA6kP18eykp5vuyfvyWEKrmaEojd5UXz32abvMxf2DbTQZeHd2ikr8Uq",
  "key3": "9Z2hE3S5AD6zThnMa2XsWqjU9cXeHqChYDEm74vzUwTw7HQ8PzvKF6EPe9fH69VhsmtLgJps9w8f3Vk5eehT6K8",
  "key4": "4FmYDLRx5G3qNCnbf716pERADnaoWMwgBEAdEcn9kGcfQ2BUaLHmCsLaMVboGbBW4GL5U79cqrutPfmDEvkgYEvq",
  "key5": "5rnHY1ifYEW9XpMYyYtXG338uRz38RfY8L6Lrb3cxhJWzEUeQmZcNCjBD89UxRYYqvBKBaWyxaZ9wALc5w3SQ9cd",
  "key6": "5gYs19jjisLdYrkJ1zQ2bok3C7Ca6rMioW6DRt9XDQEdnJvHYX4GffeENbfiugHdQosZjM4bKZ1MJcSRAzy8NW3Z",
  "key7": "2DMjrXz3eSrsJm2QWKsyMcMcKRTAH6J5N3exvcSvSrsKn66a2MN85ZphpiQ22XK3FXFxeniS2GEVqixZs9TANWPv",
  "key8": "2MCdfBaCtK12z95BJoFDiSUewn4uKeZ43PcvgMxnbaTQTk3quL1p51jATf6qCciyKPoSu7BSsCgBEJpkj2ZyfjDb",
  "key9": "5EQc2BDfXjFZnf5g6X87K5BgmoLnwvwn1YxZD81YyhZamomKRhwtnbkdyJFrHEiqfe1SMF9dNZjuquxGcjZxKDmw",
  "key10": "4TsZjPs57V7uXuwAe89wpWGsYMUpRbVsxnRRRr1DXb5L9LBY92Wzuc3HNVSUHthqfrBwDftWuX3d36YSy6PwyBwN",
  "key11": "5gMyKZpUEkkgMYtCHzUWEUSWmFNXvMdupE7LsPo6qsgPE4fMMZUwDNn8i8QkVL3PgS7euatBn6tUGUPFq23HmFtz",
  "key12": "4FpFzo4SSTXp53vBmTcXPnTqv5XQP28osmucfxADmUmigJDKKbvgJ3M4xhjqDpjzUETSL3NaF4jAfNL2FYnR2KQE",
  "key13": "44gwnFFajFp2EeaDrrNFi15LpwcvNSbp81kUuXr7EYSxQAgLnsUC29WzLQQZkbz6VbuKrKe631t64hjf42gZvLbr",
  "key14": "66juc2xai34BytMDrAG3YPZiqoh3gBRLHPvXCdGCqxtHaveaGYA4vjQukhpRVqcXTbSpJ1kZt3y7xfhrxZhZ9G2g",
  "key15": "3hCY47D8Z1z2z9FY5GPPYZHwebzis2wHPzPy7dS3JrfzqcukME55Tqooptty6JpbcUDXP3uWxMgDpbpZErK4x5j",
  "key16": "CfuKHzS7m69AjrmczxZ7miYtqVf9qBgjRAWUcN39LxkQk8SPvbrV64V6LQC2LRqcWgynsWsG3PFCGkk7Kz8qAE6",
  "key17": "43GwhkYgeNSUghv5wT4tYKi1oKTm2RWVxMqhLnkVVdNZVPWHgRoSWEEzJLea5ViHmvZrpQcqkRkUw83HyHu1kgtP",
  "key18": "3s67AS5Cf9Wpx3qyUZPL4QFnHScEKxUCGjWadSw37fBJcdtcHZGJdCsjkcjDzMeBUNMaYg4e1u3mcW8kRZRRMF6M",
  "key19": "E9pU6tgwTkVru2qjzqTSjYkK9aYmgzE3kfzGE91TmeeVai4N1PRvqWe2fPkkEWqkXdpN8HdGgzNk82UfRDh41Hf",
  "key20": "4sCx3gg8Ky1YAFs5RjsouA7cWgAMgxvJAvZ4jAHYuTYpYioAvGvpUoUa9eH3mSjVdF4UXZN37gLEWuX4atNV2qan",
  "key21": "2KZTZWCrMNB7movmsEVvjhmbXG1yP1dC4VfxmbKD2ALNnCukcFtWco89DeFRqua3RNRuYuu2PjtmwThRm1prnXKR",
  "key22": "2Wa5yMAuLTxkXwXibg3u6ZWdEpba1urhJQTSFYRomEgGR7V4rWm515x2cnw8gotXksT2QDC1aPxyX4n3MgXrQokn",
  "key23": "7T3ARc3PWgUJzq49fuocoUeXoubKE86caF8P6EFJwfPhwmKJaw4TxwzFPU4SUfyCBqe6MC3z5WvFgBxQy7iLoiL",
  "key24": "5ZRAm9sYGfS6RhxAdAZ7PCJdNqMckFjo9RDiHt12CBExNWuM7SMcHRSQpdZSiD91kt5Uz7rEpMgtMWXa9xAV8kjL",
  "key25": "5oGMzYKejFwJSQgzDeFcWxvfDEw8QMN3RX9JNVWGQYH4PJFSTyYFJbrgrDCURTF4kbpXj6uCcrE17UmXxxgvmf3Q",
  "key26": "4Hai7eehPGTxbJgDrgNn7punBrXitqc1o52hPxc7dXNjDQ23XBv2VCUbVqQavkb61bZRyCWw4S8Q5TvgkgNebKwN",
  "key27": "4RTB3rPe8cbBLXRkAhAewwZqKAQhxyqKoHBDWCUc8evuw3WqsntWAKya8PqTZPtDQ293M1VffY3e46TJNvQTemd9",
  "key28": "2ksCKrKm2syt3GRd5LqUNkVf89JyooHdr18JzABbsP6pCUYrLMJULETehYB2SRURnjoJmWmWTc3i4U6pb3szbXXc",
  "key29": "5ecniQtSJ4dM2HhbebT76w8KRUgSYFUDc8QWZaukotkakdE5rRekb31UR3i8nMKUjuTy3Aojpb3z7CXWBnpMqNER",
  "key30": "3BeFt5NEGfe35Q5WEcZS5VW2NFrMHRLKrGiLDd67QczNBSZD8DHBqMCAaSJdxNArUBg3k91Mjh9DzCJd6YraMLdf",
  "key31": "5ZbfjCTwECa7y5bJLkAMydrHKkok5NzbLj1eUCNsasySzbP3i59RoFajXLNcT7aKwAYL5L5mKA6Kcrj1sLNH4oYr"
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
