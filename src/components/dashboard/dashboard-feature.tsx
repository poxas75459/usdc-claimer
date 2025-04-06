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
    "4qViTogcFgM3ggou7dmyerNEeWQpLkCjCnUWBwN3LGBJbKZCgzAycopstFzNJFziSMRrXp8RRx2uc3H2Dxv6uNvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QmGXmuZ4M3rPZ1kiYs7ds5gcegYLSc4qDqzJuKSqN5e6GbjRVLSCcHcCgatnWS2bJ837KwbuMV64NYqcvMB5Z1Z",
  "key1": "cS28GCjwndBegtjTMgg8WcJTwQnFFeysxyRXBnKvUUXW34mmZDnHpVqAxbXrnT77eqQzJwFn2Xy4oomXMarRR8Q",
  "key2": "hwUZyuNaFnCPjfTHsyJD9BwDUvZ29YpAmwiSw5iEm2F9kUKET8NLC4p2KYf7WWwxenghatABGshXMvRyrHAA4aH",
  "key3": "3Wni55Mse71n6rf8N1knHJ9L9JkwQ2J5keiJq5hrCivrBnP1393XfouA3Xd11MTpoVytq2cXSrqiaei5etMqtkUf",
  "key4": "3BWJEF7gfRNDArF8xH3SNHafBNxSA5kzrqKEeS6TDhgL8r2DmZh8UPxmGMvzqisAsisidZxyYUkjj48bE5iZSyrw",
  "key5": "oFDJmLhKKBcLoibFKFUhbDwP5XtnyPayJhsUbWBQQLiQZNCnvcUNg2G3Y8kiSgVxJTTk6VDRzQTSVNYspgNE9xT",
  "key6": "4Q7rMV9Hz8hRgNp2HXQBFR7Xw6pmcXcYnwVU5Q8eNbzkNv69Gxwk255U8Ygxy5KSzZ7xkMVbugkNoUe3L8XjiLEL",
  "key7": "4QPXodRVk9krCS5r11pPsErtXwCdqDuxpKWLfEmCEztbPmvCJ23gNkNezugYPHd5VUU1LiGAE3CLQNQTXtqgHtrk",
  "key8": "9xkqejX3j3y84hdG5CXQiEsCPQUyx6dwzz5PrhxQD44XnmjX6zUTBUawNPy3gaQyJzJ1bocZvPGDEZ2gwY4mqdT",
  "key9": "MP6ERfFE1dVWH9Juj9kXD4kNKmzK2tqhgimtGM7iTvw6KfyUaVyniSymm8AkfsGmuCve3A41eDw1bF61kY9hvQL",
  "key10": "4g9DicTCaF8ohnnqjFm2EKqxtTjZwze5ziRjFLkvya9KQPFwEpcQCFiH3Q6W4q5WeiiiU4sexZJYHouviiFPBZs8",
  "key11": "47SfzEPn3157hGfozALJP5L62jgauU5dC55hhdNfmxdsyktkaJxWp5t9ktG294pDPGxn5bM9kEg3bLL8vzgMnhJ4",
  "key12": "21pYuBwhEisSkGV6kLhLTBugnnsETpSTRJzhnMot1js3hbqstmRp9mxB5pSPfRzXxXnjgA24yTugooaaBZPcmwXG",
  "key13": "2TbNSV1JV14DeNsYZyHcuM9QTcGq6m5NfujsA2iS6ZkzamBrTMZDWPyRauchywQc5oG8DPbYhzPCnM7pnmPHvz8v",
  "key14": "2fK89QdQYEgw19HJxYQvdjUftMum2tiRK9Wcc28wMbMW4RuC4b9VTC6BzDRGBLtHLgN8hdeHDZWSEqtbxmjHwdVV",
  "key15": "5s6BFHfw6HY4wfGzK92KX5N1eRffyjTSHcoMUtx5nSRneJ3VKhqoHeQ36qPZ2Pe77AQKG8a63ZRbqVB41xkPhZgX",
  "key16": "3bHpZ2joemS8GwcbFUKbCTNhnH4nJw6np8gdh2ChD7jN4zJVmKkZPknM9KvZTtbeULHZquXjeuwKjdcSxVXnqhG6",
  "key17": "2ARzYS6hfFsuxzq2Tjp8TRCfAVmE2M58hniZTENdkUkbkpEBUdoCt9WbsLciNwCLLFkXpDg8yNJRyDv7gFcqvNnE",
  "key18": "61uBx6YnFzCweTx5gcyLmAdvURXyq9yHDkP9dH8qewP5cd2LtycFi2yfr7ZhFGjWUj7uW6AJveo56ZW6a2XbNYEy",
  "key19": "38j8neZH5rK9s7MgGj2Dv4QQGQSCeJh7mjsKffeEBmEFkpy8mYZi29JWMPtJ1aMuLSmZjVCeyKdwvkqpNNVpqR49",
  "key20": "4Bf3e6saqFASFDqFFhMydpby7fWQg5KRnKSp5x3A4g4BnFhkw9zasSHuMD5JcMZHsYweJHyKoVQgBLnMFDDUm4u4",
  "key21": "4VDtMUAZrqBgQaKecY76yCWzX4D3HPbzF4ECQPVrfmEiAEodnowhepocWeAhZDLKQNHYfnEw3NSJb9knHL2NSDJK",
  "key22": "3eqMagDEVgwYmz8WW4q9DSAy3Xn6aXUiGBbCoMiZC9LYr8y1FwRx8z7KLHZWuAq98qkw2hMoB4fycgxr8y7AmLQG",
  "key23": "3wUP5Mxz7hP5Wpb9uV2jg5D2L7sKDhwbGL5Qa88DZkm5oUncCYFW4bYqQ7KjtuN7R9s47ysuE4MyRMmXH8iqZasS",
  "key24": "3NoSeojNDXQ5JXTCEEJCKyTrWxahpz1yiPwvSi58djyPAweEUDCk3jrQ4qSLiRN1CFRm2uEay5omL5t5aejMoVR",
  "key25": "2NKrxqntW4BfdyDNKxupLgfptkWTUn1LdEdSWCPGTKHuuGdiGj4J7SpgR5djCLMfYDYQS63JoRHoVmY2DyFtx2xT",
  "key26": "2LGgiqznd92eh9SJ6UiKoiNuF7Ni6ioDVnKUbPy4DfTmhMEbJA4b5jxuex6E6JEL9B6fEkXGe4Zy48XkZspG3zAt",
  "key27": "EBnYCSh4g1w1yVF21d2DaQAdHRiBGt7YJcKJh3eqHwrX1X46nfDocLC64vqpTh7B8Z2B985Ts4QtkcoKvdMy68Y",
  "key28": "3cMQ68vHTw9J9sJPqMs5inQhoTrU5moihs8Dk8GsX4SgktWE7YC6y6YWRukQ9DDjnJuTFpQAN35HvTg2CsUYmjce",
  "key29": "2AjRnD7CVnJuZoWCa23h96C178TpDBzSvK83Ce1qqSWEQBuEcbt7WdtVBFfvgnZWcGWVrrGQMJ59v9MjBZrvVJPx",
  "key30": "3wypZJ3125kCZNeK6QFPtFJdaj9nUJoBtSiPau3261NyiEFKVpd3uuXQaU5euddGBjSeJyjojaZ8NCvDjnY4gBDd",
  "key31": "2WKmwQJBVP8jPnFj9NZY3zmnUwSyYNNCRZHqvSLVNgFPaVGPEqZac5inqbxG6vXncEuEQ6ZoX4n5TBXpnd2kwpf1",
  "key32": "2Usc6E7yaanoozpozVdnLsxNherNcxmUjcwUfQCVnr8nVn6pHQvQCWg4eD99hPaWnBiZ66WkevnwHCWfr4ALr6Ww",
  "key33": "3whHMbrMNEp1p8i13y7DGaXjjQqLwU4b9U9srzw19mLELFifqmh3Xhj5tfdM42uNyRUHjFintYQzXiWcxVZJrUoB",
  "key34": "3XQ3Vdze24Yf69zQ48kF9HqVckv33vYKsV4HbYViPcrDsiUzpdbcAKZ6JTRWQAHLoDuvC491Mov9UKXwTn56n97L",
  "key35": "3eDZ1qafq7qTabaFb5qC5VKHGDYG3QW68m8bZC2S446kSJo1BXTcUpZvx9JDy6UwGHMVmiAoFNG46TzNngoG9bPZ",
  "key36": "59ZHqrTvGnfUKytPnuunmVXeHHZYGuV1tDQuKFVHkKuegLzeju15XZMEXurXh9WyUyg7VfrjErpbua8SqLCYeqMS",
  "key37": "3At4WkqzBhVWNKz5KkoqcSvVvhTMA31fNFM1Sg9kx19yUqwidRMiCCfzwLSqRii4pZ7qC4XUUboKpCECTxL4FYU4",
  "key38": "3PBoss4AmVMnaRWRxY8AVHGHkw18YTi93B1WCBgEpmKnzkk9LZwDiiYG9wLvCUgqysVuDi7SVKzQN2e7kUXb7jMn",
  "key39": "3tgnNjRGDSGcJLMZY2mvmwuCaft1ynDaZbt5BqVBL9yh25W5mzPYbaLzqqPHQcdDPXgMogQV2aGD3nKhsW8QvxES",
  "key40": "3FZ6hK1smiDZDr5zEUYxWSFvWeT5Afw82xxkwTwuprBdQ28yLrLZ1GwVYykX7gAny6CZe4abLj8ahpXtawJSqb8Z",
  "key41": "5TxcZdPnm26Cw7MB6BLw6TTSxVVK3RMEuVYCAHX5E2XVwZDkgp2hnADAaFbyv1hdAWGSM8EmiNqXv27rnqF7rbP3",
  "key42": "si5rBwXQR89NZJj8wBC4Wzi7oeQYtQYE7jo1hYDztFBafpbrfyhVpoQ9WrSr8yWK9Q9JPz6oYb4NkeWgyepGKwC"
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
