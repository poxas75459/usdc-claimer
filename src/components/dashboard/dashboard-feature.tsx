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
    "3FmJ9H68kCJCuNw8qc46X2cBU6jznL5tQ1Xec4MLY468xkAN9PdHqmoD74bN7kPRMyRT86g6mno9XvvtUs6TFkrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pxMwu8fnm6BpLApMvdMsrpvqUcK9KE1XPnS11JkqMyqdcAuKb4B3rfxJ9M536fV7bW9ekdBLjg29wYEVCTQVZSR",
  "key1": "327MMENDTvKa7G6x26NBkbJWGXMpFY6qvG48bksnrj3byKQ1Kyz2hNCxdh697wNzGGX9ueR4pfwMiC1xw6WeuJv8",
  "key2": "4utjjGGezCuBcQv36yvgYGb7G5VWrDThAHGY43BbUmu3i57t4vRzXaGDWQcay1qckwRs9uGfBthBFLGa2m6gz17v",
  "key3": "AZamHECG2qT42oUtUfqhUWtUdBJF8FMcP1bgx8mhVzaBAjMNekaRYRLQxkjVetZqRnETEdcKEQoPzKa6jtFdTve",
  "key4": "48raYUT4US2JuRDADKAXiC6VA1r9RmNP6sfU6byx62piTX3wwxRPHS3LoAB2Ezn6dP47MizxJVQ3jKHynPVqii6d",
  "key5": "2xaJh5zrErAihaMjToGzAtGa52wXdVwHh5W8xTVyRa2i6t7CvpB9uVkkvSgrfDUBtu7VdC2rxanXTxf6h2Ht8rFx",
  "key6": "t1CeA84JWEHUWkLVw3uCB2NAbnhfTaQEcVKgyFbJtr42kEqr9LH4hYP6ivmbMPY5CzbYfb79GsnD1VZ7A2MZMzn",
  "key7": "3VJab3DSmN4YTWdCoDUo2uCa1DSae8WzEYkDxb5dT4M2Lrz5NQD1c1kyajRpbxsQZxf9yQsuVbrS2HfwXebDFhhx",
  "key8": "39BDWLaYk8HgxXaRA5GjnsPHWKTrpjEGFK3MXxgq7VY5GB41D315RYR4G26KFdj71zqBaw68KYSeSrjtkhYfR39S",
  "key9": "RE3oyMGF93smxxWg6LU2dKqA4wvv18hjmE7FE1t7Uh5xaAtn6yD2RnCFKuPYXEeuMSpdY7veZ6rzs2zGi4GwXSr",
  "key10": "pUzZEXn6Z69qf9X6i1bpZ8isV4ieHKUvUUjGgyHhz4a5m3QrumCpWRuNyY2hAabk128TiUkXQLi9qKj6yAEmXoy",
  "key11": "622v7BHMXqH7qPhcPi1ukQycS4utmsaJwruBYhfDrsbJgXi9g8HyAhEmPmi6cRrnx8mwfwULaLQg3X62UKSjpxQc",
  "key12": "5W42z3pWqexS9yG58bHYRhqSBbQVSf7FYhy2duac2vhqQVQ1BoucopRr3JX1xDDc5ywHgk88R1GyxPm8b9yuuB7t",
  "key13": "5zCrKe7JSyG7rHXH3QLAgcvNodKHqBb7FytPsvnNr1p5QAAw1HyaJsMmJicmTpiE8kBxV4r6rGAtoCCkAVkSnPKK",
  "key14": "33ar27M5DdqWjF33S1sfucUjfEr1XYcyuWXVeAQFPbZ4FTYbhttVd2bYxuHnb9BmXcbuzxA3ch9aaTcpYpuKgTCt",
  "key15": "5EVsVkxqL3APioqBCQp4bHshrzbH4gWXJ87TW9Hjf12KX7hZMHGZq2dni7bY8pTBR92SWJXr8kKfAr8A6rqUxsqt",
  "key16": "2P2pjn8MkfYMB1isdvEq6psZ4Mf2Kx6GTNfJtWUEef6bWLcWMnSeoUNXjf4LRMawd665F3cnT3XJhVx69NtExEu8",
  "key17": "4c9yvQZsvFFcYk9pxDVQK6kVtFFFM1pNvjuz1GjESEmMrRCDh1XgN6rKEM8p4QEm2s74r7HfcfeJyzXrF8NZ2vw3",
  "key18": "26cK1oAST79QiYWN3nGNL88Tnkk1zCeyTqASikCrWc6Pj1oTAoGSYi4ALQusZsm2782Wz8fkumWo2dEnqTGqHyXd",
  "key19": "dWP8aekiWtQSvy5eZJQAFRMvrZozXy2Sc6uSzq9kZSpabM3NC95xUWbBVULrBPuKe7SXy4zscFr3EKkF51M8Fk1",
  "key20": "vt3XmRvCm6TX5VKzrjTUxzsG8KJ2SuZxzqMBw1of5Y65is5vNXajrbY8pTghxpJ8wFpUp6Q5FNWwHFgvEwm4SrU",
  "key21": "4ArpiC28guTEzXxxqtZXCeF4S63JNf3UCGqaV92E3AKRoXS6cCsdG9nZo2fXj5tMCN7a2s5byXyMDFsvEtNTJKAG",
  "key22": "34TYPEJtKYZSkvoKBSa9dMxGgi8mLNJ3r4sEegBQFEyaGVFY7ZkorJ5Sr1Dfgjh85gYo5FLsiYpGCKiP7akpn4K3",
  "key23": "5y4X1NBgL1hj1qnZg2idWKehsb2cUUTs4Fjj8SHKEmoVSYsijCriNLNhra2dFrLMd8DDYCX1VCj5M92VxVXB2qyk",
  "key24": "5S1LaAZ9VgWkdNabrA7CYLj3443qgfF7N3efQLjv3LNriGQGngjPj81nrTtXtJ5YJEabay6CJ5FYq67mvL7Accqg",
  "key25": "2RjR7SLKaKNyqULNbzSuBRhZS8BMBTxpjhqjBptZotXZFdKJ5HHKmQsRLrnvkZh7XJWaDMjsMXy2r6euz4tk6SiJ",
  "key26": "4P663BtQtqWGzC2WEqtdVJMA4hKR6JVAEwxHVZvhe1r5AqSLM7zgp7V8rodyMqRZgeW2tU1oxqzBGJw35a2hHe8b",
  "key27": "QoEbYhsQBphn4qKKLmu2pmaQSvTCowU4xVNjH6ZR9BhqcVCP1K7X8FifkWYueG3oeNqWPxNniUNmx2gJVdmJQbQ",
  "key28": "3YFn1onELLFPnbnR7wV2WiXJWoQmZ26WcDZ8gdtbyoAckEP2jSQYn43xGbyQ3Bn45pqMmhzcRcoDZg4DQym5KB11",
  "key29": "S6jNPKN2eneKW14uvCqEHANb4TuKeKhjCyGHSkTDRCtzKSwFt1V8GZACiB6vzYvhsxqffh6GeB2ti4FxwsmWwg9",
  "key30": "52YyCnoRoWo7ZBvHi3r59sorjqsoVNdTCZoZ3AiJeiES88AfUpxA2M9HWvYhbEbD4uvbKTVUPyfEN5MkQoYckCk6",
  "key31": "5WYCdqU8zexN2rJgRk1ihQtmHZmDwuG7kt1yeuJServaWwBVA4TvXae3YRs5CZhsCkdNEw3ckCYgAntviKQfZCG4",
  "key32": "3EyP5V2WU1dqnKrhrs9cwWLwEv7kZ8i8KG5vWgcebtGq7V22ofvSqcoUXSUiUVAzifumu5QbpqpSsiM3Dj7eMokb"
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
