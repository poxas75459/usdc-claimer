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
    "2WcTsD8Fig3V6AG895AsLPaD9dY7MfdNfaRjd5LZFVhJJqJ3Q4cmM4cDfgEFgGbMHBHbJSuYN8zUZTpvMXDPqm5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cgLk8tPAG45gUYw7bmLqTiXqKRjeHw6NJXbYahV6LoFG3ij13pAjVS7f4wshvcnJNCd6S1xHk2BK2jsC4wundwP",
  "key1": "2tpQwT4xEaS4bM1NCcuiVDCC6EvPvMCFjp9PwwSdNVffXcAsqLeLtVaZ48TJkHuvF71esgTRwzSztyDq4fUQ6zJT",
  "key2": "5Dj696jY1GZ9oVKkvZg3euYQaf3XVphDFfNmV88t9UBxKAy2WU1y5R16bzWQ9Dh1FfnYZBybjkxsP2xP2Rbo49ND",
  "key3": "3ubrvWTbNWWcVdmwq4m8wWAP5C3TLNKFUmDrR6o5JiLK8ZyAxeHzTdKTN9BeGSPHhg7G1GWFpqTnVAk45UiSQ7jB",
  "key4": "3QJ5pUgVmHq9fin26zTcYeHK9pVEwRh5HP2dwAwU4dHusu6i1fgV2YnLjeqh4KDLEbdBRrKLnQjWJDxZ3i8hbUvR",
  "key5": "AbdcRDPVQnaLx5uuaTCJNie8tuw33RsM976hTXsdB9J4UndxANQA3NwKndqkfKCofFXXn8SxnoTYhvofiLudjoq",
  "key6": "46jxaUJSeJgWcuRjkXo8qte7oWGmQiGtAqPnL24sisBgrk5jmobj6Kp3VUcnVP1TXjXE5z62baYa3FaeGtvPBGrn",
  "key7": "5cfks7KHWuhcZ9zekgg67cvAcMsBEC3RyfhSnLCcdBaUwQTwanh9E8g1XqHQfn9mSRwWLbwUuzEc6eow9M9A7GZZ",
  "key8": "vbkPj8t2BwrCKy2v8GiJ1X3bw8ngu1p9xKXzUnyCEN6b5BoDzYQgesFPwpTmmYTuLjrHiGyQZVYATJ3JrvVhKSg",
  "key9": "3DK6rFmk9h61JHTbHiD7T2LUwJo2AzQ9joHpUbtPDNeq3QowXsjgqrDujhmzQENxbw2TbFvtNNKN1pCGu2oKKwh9",
  "key10": "1EE1yd4AMrqvQbSByjEzofPN1wsUgwsbvNzdVAGubWKGtenKdewj3fmFM9dCKQfBUPPZKTqSzLeEXpCa5w7P9iP",
  "key11": "5LDePXyV7JSqciSQkAXYeXC783J3u9Bo8kZVLcRwGVUiaVCKxvEPVawFGgbCprzsWKWtL8pDJNK3y2h2uRH7UxKv",
  "key12": "4gQ6XEowHWbHTirho9JxkmaYw5H1uqrYtvUNcKBWpgiMuCfNwbFaFdrdxsDSc8YdUF7mkWESar5BHgkp2WoFcwqf",
  "key13": "4TM2nWp9qkf741zzCNNWGR3Bgxn1pTmPtgQxDkurNJXEWzw76Yy5AQE5PasbVPqr7iu8anypBFjHScdorr9SiYe5",
  "key14": "rjMiFt75J7r6cj5EtKSW5UHyNrvqgTacubuW5LX1JLLetUTr9CrtWYkVAxjgUgERgCEfE5rzHwjkavuYYTSUUpt",
  "key15": "2H4cotwP58Wxz8YdhKyzxxuG5eG9LWKXMbnvcemQVDzw64rju7NzzEFMYqqR5b8qr3sfhYYMPSDKhVg78GPhF7cw",
  "key16": "21hEeCc9EaH8VcuYdB9EdHeTd9e7mg1z7w1UdEgcMMDxyZ4RFU52vc5WFUxh1asGsbmXC1wizT9CuEjNRB17fFxv",
  "key17": "486xkfv6KHGTA15ee2so48UYweJkVSU3hQW1JsqYr5R9ZwzVb2HN4MBBcjbp7gMKT7YjQ1KenJoQhxVaK1vds7Vw",
  "key18": "3rrvAqEAeeUaDUgon5BDrdppM1w7EAG4brWMfCvwJwrX8pNwEdkQEzvU79n84gtG385G8bcaa1YF5dy6pzTiqWRJ",
  "key19": "5xBZqsCiwARJXyUQUS6iy2jjGkbymKr3ktbt9QnBFCw1XKgx8F2xpUe81oRouorFP3GjZL1A4RkopqrANi4gkLjd",
  "key20": "4ns2GjixniWZj2AWJZeER2LXTzhtBTSZBPTzvDs2FoYC8HDCS3kfHoDKG96h12gTzxKkaWL66qQamHJrUDA6ZVEV",
  "key21": "2p31f446DsjsSoGpAkgdfTp93RnG8dQsvCw8VC6bkoVRSxx5ZdoQzB7LBcBwvgebkvA7bJjV9pzzF4ZRBTQuzDyw",
  "key22": "LXEEzHz7yAHpkhybTmaEN6V7R3qWYED7P6ApuKhNdxDges8FYpmccMVD5zKWUbvGoPtjo9DonnEiXYH79o68ZrV",
  "key23": "5x3Sxi9mWrxx2zVxFtnThStyusFFNXjj9bqXm7tBd8Kv3KVK17NM1yVFLAeopKEM6CpYur66q5Z8iZQeMjqveuVM",
  "key24": "4XpH4rYP8k49esP4NvALyy3n8YQh6Tou8kXUiSZduznpMNhFQPCmTxxzxxHtV4GjbqK7CzpwSWbBaLUy6WtYeX7J",
  "key25": "2CznPYPUJmhqdFdayzdCxpMUoBqo11vNKTUpQVnyUNTeQ5NPmT3H3YWftobBen5CD5CTe3EBxSxMbh9GAfgrHCNU",
  "key26": "2oMAbBMjVTwgufx8acZECFvWiTSE8GPSmv3KkAX3q3ood5BmjycMMrs1H2VRax5BTvx8V6NhUUmRuKAR1aoYmhQs",
  "key27": "4hcN3U3Mtg9ywZhdFvCAnDQPX6WZTDmvk1kjm9RPKBwUGUeoDNJYsdRXqCQn9JALeZnkwoUrRGFyErqa86Z44YBV",
  "key28": "1KiWf69q6ZrcukJTzh2nCR22G8SJxRr6SKQjMV6QVcqmEAYpLfvvHk1RcNJ2zxWzHF8xRjN6ut7vqkqakYezWeN",
  "key29": "Xh7CvfbVVdWyCEgeqvBxbPgVWDcCcAmPS8qCNuTnJUneYkutFWrK64jgXZ3gaVAXFLuHAftkW3QPHAdc3Pinfuo",
  "key30": "5DJ6C6jQz5yWncwboYw7Vjfe9h1mt85CKsAa2xbHkR13hEZZvayAPfiLrqiyxh1xKUbR1zTipqXUd3vcU7b8bmFs",
  "key31": "5syKQNTxghDK2K4Ti8tkm7zLph7ftdqhNC9dFpxeeVJuk98dBkzoADnjZquBJjS52y8ZVz5oVeADFYe6AYqWxGV4",
  "key32": "58JzU94CrcvoLyegy6cyEcqz84VT2dWfqVUaGV13JdszFwsDXq5kygAwDRcRg4WW7xs4V5JFbjo8KXZ4DRDmNYjb",
  "key33": "35mCP796YX72tCViaQmeuLBW4g9Mu3qohHbdMnJGJAxBrXCajV9c3ap552HDdSUu5Hj48XJKUprtvTGBrA6Hxr5W",
  "key34": "2P8twuCnoh9Knvngcg3iRseagwVce7Y1XTAT6S8SN8odZHCmF8mhGuXhsEJbuE1zLTeFtk1s31q3VsLaNzMkzN4M",
  "key35": "2UkRT495KnUetqbKH64J5YkW5cGDuPD9sKufuFR7ejBW7jWHQ9eQQoo5mz8ZSHEYQc84MxA9AVgcjg925469Roau",
  "key36": "5jZirHZzo79fhWYnvu1QCjgFj6UrrPiVi2kh7z2KLf8bsXeVDPqJZuU9jPWUdzqV9hRVzRPe7PgBuE1xaA1n5azx",
  "key37": "4x6xCtSoHiiZscZcYQsqi9jMHv9EJFZQ7kxV8PgV9oYRDvqwQiLmYnrUhj6GqeU9i769iqrQAa6uqKT735Y3Vdwx",
  "key38": "5FsiCWhRxooAkKSWrqTnL7NmrTSKibPdXvdXqtnDaKWxeTDm9jJm3cMVwGYzwTzt78cfBUAJkcnc5axJ5KmUNg16",
  "key39": "5MuZ2RZEGaeSSTHwUXzoKj7tkdCNXGpGYUBtAnzxBaSRhV2bTBcBafKjh6ZXBXUt3zN1iWq255UvKJHrtro8p4bF",
  "key40": "5pC3b24GjxxS2sMZRhNXjFRfhSbiFcEnXYBo8WRYkC8USrWV7T9QRuAxjvogU5vMc2KxPQESX41EvWdW695JwsSr",
  "key41": "4C7MZZ5miBwKScr7yjWLXmRA77ycxF4vPqhZgZMwqQAsbee4CV52QzL8s67GX66w8kMzscW1s2AQKx8AfrEVmMQL",
  "key42": "gtgZ68isjN2gcEe159cnriyX86EKZh1shGg2JvBow2T7SVp4ZeVEE6XvVfpXrjrnmwX5CCHmDg2up4wn1a3m6GW",
  "key43": "hbcc5b8eWyZrBk8ufMfv84nzgG93BiYq8szNsqR3LHnikhPY9HFQqFR8eAWjcyhN4z6oXz7Yssj2755zzVoLhXH",
  "key44": "3P8ddSctbjuJvz44qMCgDN9FSW2PebL1UvzK3zMfk2snhdJgdVHqAs52kMdb2fvHX2BhKFBnz2kpL4SKnWPovp14",
  "key45": "3qd1yYAce4Ydhcz5tz14PA3mJCvNw15ofC9potyb2PNHqw5TPoWNA1dRApZVET4a5YLWUNdjZcsjWZTPNozn7gqj"
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
