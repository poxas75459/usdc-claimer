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
    "4UxTjhpBwZYPeL59j25u45hgRbyCS1ZsTP7dHU6mxQWAmCP9stfLdG5ch1tzL5j2A1cYHNErmksoFPB1Za9AAFJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r1ujyxTfUoGdpGmNaDJkVNuEQmPJo1HRWqFcqFc4C2TB8KKu8GBwvJvh7jXS8N9McZvxrTVq8f6y8GVfQH4Pnie",
  "key1": "55hXbD88cVLrhNZte8RKBqJ7gqkzCEhD7ycF7JvMnW5VVUNdxgqLW6vsZrxh9YWb7vaUfUJEuH8TxKTQCYETFiGB",
  "key2": "aHXF7GiPyjxJS3TThm6cm1JiughVvcm4qbrGXB1RreL9PXfs7LKz3rghp7pbCfcdEdiNY7W9UbGRLms5kh5BRcY",
  "key3": "5SsqS1KQkd1uh1tRfLaEdPVsTCMvwpDmBtWpNrt8zQmJvTVicpvYAVdHmDm82E1cU7pGu7Lqus4umtELMvmebv5v",
  "key4": "2bJsQMLRzXwRKBqLqVsy5QzLgnHwnQPCzkEtzZ5g6sUvcVbD4nMkTaYDgja95uo7LKN6yBgsmYCR93VMUeb565c4",
  "key5": "F6DGBXG3gfyKzpyF6DaBJaRd9bkxgmke5W1iqRQJLj91dTqbJEsgdcPBthfkcgRzQJdcBQvJRzjuYDxRwEgtLNA",
  "key6": "4HXJ197SZMNs4v8DaZpgvFqS3pE1JNjt6iGWc4tzseJwosufJRAcdveEKZ3RB7bobkNHhQhJfVsjU9FUvFaMrQhR",
  "key7": "31Xesyx1cYk5mPJgkgzjAaYzvFwG34Jn7wdasrh38uewdiE68yMxwnt3KJzYt4J7X9PQK2WBKasia74BoFnESUrD",
  "key8": "456qLje8jAvXd5VN9snBC9Lg6gnYdHb9KshxbVFaBirWe1gMTCSzBXoCsg54waPQyEvGvtwEQR8zrYLzyJUpvFKD",
  "key9": "3WimaVptjjUUgscf76wVhT3STwzVoqojAh5NzQPpXB4bzCBSJXQR3mGTVeKdXdoijqaaxJdUYjPzYBKhxHiAEfBD",
  "key10": "3RAz65MLKf1nRLLVMY2knKte4wkVgLkfQBPVTCDK43YExcHGKe2gUG2mxCQuzncB97ZZ7D83CUWq181TBQvjMMxm",
  "key11": "2LuCYdigaLBcZE5ju47wnzSmBTDEgoMtQ28JdszuHZtwgqRURgNTGHCMsy9RQAE2phd7ssG9JVrf32RLW3KDtM4m",
  "key12": "3M6ENjF4nQJZJSXmtLg2FTvLirKV3sg6zCSpXxCmnsbm5GC2HzgcfCJYumeFr26F8vQobYRiQWwBwcWoTp3oQZ7A",
  "key13": "4jQw33YveUZW1DorViubRpXQPD3tFfLUKXLVN7ajEqVQRXdPPjEYvtWnm3Uq6iT6U9iHsbRLPU7d6hYf6JpExGZw",
  "key14": "5xYg69qopNxQYbQ5Sq2qVqvKmXcEgJiEYAefeQ38XpenbefWXHvdFvM9sQBN9bRZj753kGU9bDhxj3cpA9RtKfqr",
  "key15": "23ipW6v5nqUkw8eX6TgmHJjDbhvmfzi4uHG6cXEB3JauzZhk8AanA7WDUbJgTujfLSSyqXeHFN27oLwWYfE7nnhN",
  "key16": "3T3FoTR3Gb27nvzW1kBtYubDXuTnuNcrqsM7nTcbPaESmWnniAmUMXpgo7aKhojd3xNGbwNNNiKYXGmSfQ7J3du9",
  "key17": "4XAG5hwphhx2Ncu7icmdQcX94j5Mnwp6XatPx9QRr7Sg3742sUcFeAUUpSXtFN61No346VDtYuhDSGCpzhDqv2xz",
  "key18": "4wPgyXWpCWA8Vy8nYAwvE64KbExmYoWpts7rKsfvtf116KKrj6XPDWeX6HduJB3tz3a8cTZ3PNo1XXvmLXhY1Xa1",
  "key19": "2hwNz9gpawZYosYKcNSsKVWPkn1oiaf3iHtrXnbKd1bP78grVrgaXMTVmgr1sQhd7MrDGjESY5bsrfrSDK9CBzT",
  "key20": "24YKefCBbNxcQL3aptcR6z1PNUGVj3aswgbz4psC6oWX7K6u6agTZ2AtmEasvQVvK5ZdUAWiyTBvF9uwyBwyyeLr",
  "key21": "5XtESbYCSNXRQ3jYJHNC3Pz1MuBfHrshH4awR89Amt1JPWnk3bepXE2knbFMpNeKZL8Cjw2KkEcogd34hj3Hd28Z",
  "key22": "TvLF5qV18rPU5VMN7zCKpqAve8G3bHmeQk4VVSNwWFfYzuwrFyqLuDJLKyYEdkP1vCmPgHuaWvHc7Pj2nBCZqm8",
  "key23": "2R3LBbvtYLhzHCUE6Pw1VmceeUaoaXUvnDxqMFX9eZP6CBttkLAqZSYSpFU3687yVB4J2wZ7KrvMyJj1wQ4CAHYt",
  "key24": "ybuxGEjZpm3siJQvsBwQ6aoPsdcdBtMQ4tBydZrcZr274mNLhnpnWT15UbUCJQ3cYZWrFZgyUDrVWHppx6uXRrJ",
  "key25": "4aGLi6neZdcq6n7bdMrjTuvWYLrBNGz8dvhmrnAarCFWBfArAy3BPoHL3Y9Y2Ze4rjjRFiZCdTaGg1oqyvuReXf2",
  "key26": "5bCpmuvt3inYJn5CgSUHxLdJXHXwGBhKn89Mm9jCxSq8EtqJ7cP9grEcn81UGHuiukacSxgZWDrQi13Bb6UTP4p9",
  "key27": "2mnN2JEBDxS98HZeUZS3hQ99iTZkJJqbVhsMFoH7SpemuSvetjHjDkvG9odJVmZ4yvkUhqsYkYu9zxRQt62tVDqF",
  "key28": "47PAHdfV16ZZLB4Ki5GCG7oZifZs8hQgdUwRLuRcywb3vjGLMKqco3A8LpzqhTaYBgYm6Dp9ocQFajuMr6KYB3V2",
  "key29": "2gBvef6pxeX2qBnANV4QcWRkVPCm4JM4qMjVuTKpRxtEr6rhzznBcYPdNsHTRav7kxa7JnJ4suTS7kp6FS44UrRu",
  "key30": "3qzRRr5QaLjNrQkK7Ab8cnbkTogC1jABEqRajWSH2pZ3tQTFmmECNvzhPYmeVvsVBddsWw8Sij2YHKUf2budzBbn",
  "key31": "2t8McfWjakcud5jxSQr5YbNEVoyv88AKc164VqeKW91ASCCDVxyxSiWrYnu1hfGTriGAwzGqT48mbwGJvxQfdPpf",
  "key32": "4khYj9DQN65NQb9dZ9jeqRApGDjm8N5JxFZVhhijSgQFkgnZ7xqCvmeMf3rnbaDGaymdZPk7ojhVjyoaec4rbfsN",
  "key33": "61dQS6afrfVhmDCW1nSLTvdq9aD5Q7ztzLKqQvBPwAp3edPgV46QTNhke5keBUHZfiHstizk5ie9jiveJigFV6dn",
  "key34": "5gc2BXg2d9FfQ58V8ChpVdeU6FpQszrzEFs6BnsuXDey5FgYWF7ZMGeaiUwKGZpB1cod86iBb1nUGqDTnaSZxh4b",
  "key35": "4Po7AEjvjXtfqjGC2YzuVwdx6F7GhKbo3mTrB1GuNd8xXHLSbnhsP32AbbuJgbvuHLDWfdYKc8ASSoa8xAKs6X7e",
  "key36": "F8G7sBa4bAewc2KZ4vA7B5mwJrGBNeo7jYzKDUR6yxNkRHAdiwLrNm4ECTz1HAUD61w6qjV4JRADM9HN5VfeidU",
  "key37": "Zo9JrxhuuAC6BdEGdM8GnmXb6MddgLQukEFjKEc8vgvyYwbwhVHGokj7utz8FKucAJk828hGkJXUEFCEBuXtPfG",
  "key38": "5BXAgmP2RdRaTZVq7ufCbZgxXm2neytejEkHv4qcsM6vpVoJSsWqqNMu9oQpqzsWuw6hG3UPseYELxfU3ubw4TAy",
  "key39": "3UnVMGgRCarh6w3GL8D8jrivrSJQJGm5ud92FVwkczkKpapAgTEP4zg2o2X68fbUiB3KzkdzT4JbqXTYqmVQxunx",
  "key40": "3Zg3EfZmNRfXw1nsDjvm2gmdv6qTuPFJPKgk6Wf4DYGLHK8LTv4dmEDTG2y2Zamq4AAPVcWxN8bpcJgtWhpARCqb",
  "key41": "3ZMY2WTuBQenPS9HcrL1pyKhBaRvVugPWPB87aa2NmesnxYLdFzSy8bPazvkGhS6BRoe2fgJ5q6neXwY4eF4ZsFu",
  "key42": "4zqSYAVJYDFAP5dC6UoXpdrpQxkUvzr1n364m5y8JgUsDG4vLedvvUbPTv5Lz3nqioVnChEQ4x2CAko4QYAzTnwe",
  "key43": "B3REPbJAckjBUNRTD6vuoPTrXd9G8TJTyuNkD21rLPPGqzookQJgaJjuvxf3i2jLjv84jJErnSmvJjWH7KUgw8m",
  "key44": "3sTNenbpTWVgJNncArVgyZ49oT8JfP4TH7eSEsjTm7BmJHKKCVprrMjs8QeGQrjhMHycfaaRkxdb2Y7G2qcpW8NS",
  "key45": "4YQcFpB6cXQfQ7bXfdquwomBRSHftXdx8RQrWuJSEhYTQo1svmsjXavRHoSD3KnjH1Ydd89WALU2K8r9nuTdthzd",
  "key46": "64PniP3W9nKu5JHMnW92KrjfbRPyD34Yvp7NoXsCi6njiP4gC44rbq5qVLosYdTp8G38N5qpGPkE7niFRX3gbyQo",
  "key47": "Dtya5H4927uFDcUaUHi2DmehTwQkbNFFtC6WbEbm9yLeWuLDMrkdvTmyJLBkiasQ8RpMjAMHYToGku8ndJ2Y6xY"
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
