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
    "3cnWnEP1CPGPqaaac2xmQKccCd2YLrDyX3Myv6vzTty1vM66Ve8Jh9ZDYtdik1Hz7MDhHYMxY6LQ53s8NVYrga4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TUgx127qqKpiaHVw9rEBaU4DU11WRzHqjr2SVUAydkHH7pG1hzhyXwyLqh6ZV5SaRWJ45Y6XFbi2zxfVe32zeRe",
  "key1": "64iHo753LYnWdBY4rMhKAU86syq8hnhbbxLNvafbaj6483Kne576wwfY3mYPfdhy4kQ8BzGxnbad9C42EKPAcjcf",
  "key2": "4LXvASUSzWxdZoR9D6RM7Vov7jAxNRyYDmHaQ8P6CF1LeAy7bDkQi5n9FZY6xLEXMmoBY7ytxAHzZfdFhZTzH5aK",
  "key3": "662NHtLDvoVKUEAE1mivBz74565siTdmp9JUCim7m7jhfTA3oGjyipVCSckLPzhdxdWG9ZhzJo3MACQZ6Sa1sB3s",
  "key4": "45t3X8Rb64KZbaW2XJWngsp9SS7ZmD6CxP8MRbLEShhZpT1NUpYB4heiP7D33LmiRAaUF3u7MLGsk6L7stfgcEq",
  "key5": "64MMwSKgYY4E64rrzbrThdYxWJQ3jvjPD7VmzZsg9tNjaWfzskpX9H9oqta6VcfmstpqrCLNhK2WS5RTuh8LakSr",
  "key6": "2kya3e8uPwU1FSnZakiRjGYNjJdcxXkXYmvXDxDwnyzFhX51aQEwuGc5EwgWXKTU41ugn8vckn385NWVt8a7sGfB",
  "key7": "eAivAZCgtcyYv64JhoLhCs7YEBESB1kJyh9hpjE7i7KkLBMEvDCSH4LV4teiEvbxvHmzQDSy8GrLFueBrJsSTkM",
  "key8": "4boqax8a7H7uewJzSWLaoUikFg5xHTYFpPCennZivkJgDwaXsDGiPGPYXd1ayNpA9b8EGysB6c72Cu8eEpn56GY7",
  "key9": "51SZrh6nd6qUtRyQ8jNbXd5A2W4jkqMZvgEyNZWQ7M81NFssS6oM16iUJAw3KmboaBZ7cXnN6TCmGZypWsBeHyqs",
  "key10": "5avE5T14vFqSs64wycdAk8aXktCEtxJpTSgZEWP9q9fdRF9cbWenpGuvXGNocS9Hcc9TcDPnpPQU57RETqTdhjPv",
  "key11": "2zSQvn2kb8zmHZocdahw19dc4JyJ9UyTzQpKeyZauMSLu2iqmu8PMgb2zYUdocaMvALmvDyMCzhXTBif95HZeudz",
  "key12": "41FBGYyz6DYwR97U4eMKG2sGqSpLrhxo22YjDf3hrJf9xBAPLMnmsRHtz3RDYXjAUEYtn5cd1WmTMb6MuiNYN8WP",
  "key13": "2YRuXHrqBF6RBmzxWqEe5ggCkq8R7RsMjR5a6hCqFDF339Yz9rsFpW6wQM61CGzuBe19XPb9EYi2pU14hKeLv4rk",
  "key14": "8kDWuYBA22wJXhn9hqeQKrxHEdY2bgU1W1em4gAs8LjazLWtYVKMPBXJWma2Bq8akiayryz82eCw2T1KHDtW79A",
  "key15": "2WHWWumvAHbHWCswbeKwPipghuE8satBnHY9jzNRtkiVqDcYJ3zGNJKFejwYxLHUhQDgYjyj4p1cFRFVwSFpEBPx",
  "key16": "4fRCrfWTxPMd9xyNmMdwXhJciEHm7FXczE2hFSDxP7UzWryraGBdscJexUnbQ3h6oFDFRXJ3TQj428PaBkiFKs8L",
  "key17": "5FLaMJ8P5f5pqmHSRVAUrJ1HPLcdxBJmUZcVpj9f2XdJ5qXNBEDTvQkL7vgj76BL5Gi3h2PZYHUerUnmeRNdq5tc",
  "key18": "2wMqpNGUg5pzY2Mip6JfavJ6PzoaqmXJKSwDMrLfzqq3qmHrHnjAM5RvBLoHHo5pwsD7xa4GP9FzXDZK25JAd5b",
  "key19": "4UHKJzytbVphJLG1UU34hcWgmu4cYyQvG9fdNVJ12feNX8wYpSXrHW13jyMKhprD2jexqJfhFE1n3dAejgu2msqS",
  "key20": "3sLhqzXVU5K4ydMqo4XAMBVtY9qxSDkqrq9iyYa9JuLWGgxx9tUvzSYjJFtwkEuJdohJTvT2rje4BaQUwGcGTpQ1",
  "key21": "2was1rm9RNmH2eo7q66PAMfBdo1fu6Wt7LjCWrea959CsEmXDnwMHZZTgx649XkmhSjBqg8WHyL8YKsWMUqkkCx7",
  "key22": "8BP9TKkevT9XGwNGjdwuYLRiL6BJ6op9v63ZkRjJP74MNsj5qcNrYXS2MCxGpqFXvwRbZKgNzBm2eWSpSHvaRmH",
  "key23": "xkJu9TJxmv4itxcSzvHzXKMT8CiaitUSpnjpbdiePbwqCAZNxfASoRzX5ndA3QGdJxi4zzKhpLW64Z47n4HZg7D",
  "key24": "5XUrCZ42ZqdpFAHLXGMWwnTE85w17V1zwHfEJSqfekfzttgfMdFRMbdeNDiQSJQUQa8o53wQ23KgXkbTGrLvqnaF",
  "key25": "PBHPScVext3jVYNqLTJpgfQurQcYZnapCk7jev1jQvMXiKnRHt3UDqc36mBDQ7E2CuL3LQ1z9LZxbEAgBHn7Kc4",
  "key26": "ctJxoYUFYGmRqHJA1SPEAwj4ofageZUKrWHFsHWfWKkedW4aR3dFNkxurUpp9EHfeK3XEi9cCpPwAJA36fy6B5c",
  "key27": "5MUypRutAzfzsitNRGVtMfGh8WUSEa4e6LSh2ARdFs9GKhyGw8q6dPLabNf2r3X4uZy2L7h73DRBd5M3XYs55hr1",
  "key28": "E7bpTvVxhitt2gmLtygHuebHxUT6fZ12kP4c8FmATdbQxboG5RZ6U618uYm75Rw9DXizaFGyC2eAhgXSWHeqAUB",
  "key29": "zuVHyqff7hnYnQZvrQJQnTANu7T6tauR4rNb27ozPLZ8rkWGWs4nKVHo2umFTNdQHgbCKcM3zuJYbMmoyaiGob3"
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
