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
    "32BH4LGyGZxbuCE6WLesshhjKDpTAurfY1cRSskr7hUuWLF4CeZcMhcn5Ek3V2wcD56EJGwbbLxu58iepdWqviS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23c7KwKjUzPy4KqKQS1NSA7p1KoeNu7JLJWiuJefuj91RSDGpgZkZSsrapVRCit88vY4bMAfpRND8UzBmLiCHo2D",
  "key1": "2t51igeYg9H2Xwyit3HHTfyeKW7rpn6oTJFCynZvozJoyiuKiVZmxqccpKUVwLYFzJVr2B8BT7rb8cxnumU2Z8zj",
  "key2": "35QGngNJens1FQZJfFLJ1HwveZ5UVhc8aViyyXo9YnqE4uQmKF7cqHbYwqcdGUvT1wkrVnpg7KPmvuAsgTKyVqzG",
  "key3": "5qdjSV9PWssFsWJQqrhad6rZC6DPgaauz6JnkH3fU6w8c5vw2yT1mPRmivCYr73LVbioPmeaHhCWdpaa3udWSxFv",
  "key4": "21frGts1grRrfYRsUZUh1SD8w44nZJmViYnTvystNnwjx8YC7EfZNvXB7A8RikKbfTeKykhtd3rt3zsbBxNo4c9R",
  "key5": "49Eujyp7gNNoTTQbopbySPiFysbeq61FyzHTpAe6StyWcweM3sd53GJgKUvRc7dJjhqNmvPZ646NsMD3M8579PvW",
  "key6": "5KKjPTcHu9uJuj9VnrRY8WsvEwjpqhqdNJtpP7tRfdHhE1BPW9uayDSWcn13ychHSDp4ozh9rigrwsmSG7mxPQ3s",
  "key7": "4x6pH1rRZ6DcB9Hczps4cRrbBQ5YEksmM9uGT7UQZsEFxseUdkz6GZN4N2ASPScbePcqAN9Cdnb64aD3ku7cLGnM",
  "key8": "28AMrWeNTouGQFVD1CzXmz3yX1vidbiueL6QAVZUspiUi3ibDZPT8zo7uKYQSd4dGWVc6EVeRP8BjuQPxSYWK98i",
  "key9": "4mi7ZKwR4Ys82Zf3k1PJQA4JzJoHJc1Vv4vCaHMSuvZk4SsTfBsHkUui28hc3PdBCHEzaAak3oeULNLLrn5TycrJ",
  "key10": "3CWoymYHhFniM2pwSb2isrobxyKy8kAnz6gG2zziPutFhgdxbwR3qasGwcYdb11GF2VH7aH5JviH3sh3KXh9rGPb",
  "key11": "2Apmy4jWUwmKVFaY22qoo9C2DkVWYy2WZu6PLfeLZWd1xRLDUwmvHg5gfBCz6BRrehLUJ4sGUUgZqcRPpktfhF27",
  "key12": "65edkFginBrLaSQrGSDmJ9TMPStipSFfN39DX42fyiMe3ETSTYkA7nFwPvCntJrCG3bWmWC884yr8tVtYqiat2fw",
  "key13": "4Zc8YyTLJxQLjexqRZyvCuQ5F1vzGnp4ZyDzC4HtrzjVQ5jm2qinXLtYtCK6qo9poAuzVkB6nM1w3PDigPR4wcQz",
  "key14": "4KF9bSGUi2rYZ8iuNfEAGuv3DBLJguoxNEu36ErC2yNqtAdwMysz6i1CuAzV9nHAem81fwpZbyoNr2rbEttSPdQY",
  "key15": "AccUFnVeU7tw1A8PU4soRQu1fSxKVdncguQ92syTSf6nuqqc6mxLbP2tHVBDvR79k5J7VUjdmMQovfawWrngvLv",
  "key16": "3SF38NV2AVeCPgSjGcnNATMAiWvaYDw2rYVa9vsFdTaDhYJYQ5zqDZqtVJsuH1W9XLzK1XrhFfEn4GdNx8meo2yL",
  "key17": "5PNJCsKKrnMa454jem3wL7FiKPg9fuXKDgkmaRx72vyETyERjBauELzRJkYabZYcru8vs3nSVezZqr2DnDYBNhvi",
  "key18": "y6qigr7CGtdZDpJokEax2xABYW9gqsunvFswvnvmmtH23ni3yeHGvBc2Py9ipQoke3H6pYCCGcH5NqMvbKYBujb",
  "key19": "4YhLweBvimiWmLQyewg33oodqhyptffzFnZiDn33ep5YaUHpQJVCVoYar4y9VAFMwuNSdsdjELbLTzBpHem3EJhQ",
  "key20": "NymLZeXJYVpfTpK5AmBG3jGtwM9YGqjfZk9Q98gqUzAx95vojgmU3KnZtKaxr1L7jeSkCwnVz1DhNXHxmdhdPzw",
  "key21": "57dmsqykdNswJpktqopbdw3coiiU8GF55e1aDv8nYx11dzcF74b6yzSxXGAFRrMydL2vySutWiQn34YfE1CeS58h",
  "key22": "4m1tqhRFiq9P5SyCQhyfbtwVTUpYM6bXwJfbbW8K2PaViETbBZMJbpARDQJu94QNb4Wesj49KXKFsp9yfM9qkpaf",
  "key23": "3h8AoPwM5JfVTYJUJtc5vWZLwY8Vf1BHtK1yBYSvkZ4ZgVe3qB1vZP6gqpVSjcLQ9q5zC8a4qbY1p8xainbhUMWc",
  "key24": "5r4AefQ6jhwzCNBY2D1xx7ABDGRtNS7vyHWv5zYBKnwwUpRTm2LDrRtJ6kCB31uaxABpriMQyssRtVkezzJPxKcc",
  "key25": "3XeNKd1zjXziMVvoXBvHV6G14MjDzzVw7g4vRn2FzdB78tYgAJpE7CGpbVtFG64iG3n7rjmgTX62u27YUcYtiKK3",
  "key26": "2yxrMEZUbGgDA819iTvfGhtggZEuTxCrNNLzyapTpZKegNMytxRwHLytyCa3JjGXZiuK9eHXx9cP9J2F7n9jj2ju",
  "key27": "4FNRR2Uy3inEX3fEkU9DDBrbEzzDReS9PaN5oDfrxHReu5HLRaszrBVk1A9XtGxm5Z875gcaiMsLf7shCN485ZYP",
  "key28": "3MHKiZPstND5b21aSED87j6SktXzrECpzsbuxEqhy4kfgtRRN7fZ63D15j4JGdJRREm78V3469XXKqtQCnrEDXZR",
  "key29": "5mxkaoxkN3rXmoqyL8UcqN7qxmNKo1XV94KSCJ12K2qxhcJyQvZdPF7P5heeSHfdbVqbHVbVKHdkgS2tf1U8GRX8",
  "key30": "5ods9ewz7kzrGfeA2KAr19gx1Yverq8nkBy7T2Xz44Mnr7C3Uekt4sQrFLHp1RU8CdWambU31pHeoXR5w4tBE2LD",
  "key31": "2sR4KUdD8BFzksfxbMBYFKZC3sBkpCVAMCE4nLcBwEoNv9YFG9vGDfGbwh9GoKGLJ58vJNLtojoPoGiVcMAHNUCN",
  "key32": "3pvpZ46KafkrWuyUdPtQnkbDcxBP8FYNa8o7PL87YXhbjdh1Fpa6b1WKE2hwvgWXfergFMRnqa1Wz5CZDtDrEamH",
  "key33": "26X9YygaAQXNq6uibsKLJXGQGRKj1ckUDSDePaMi8cDzYS9iFhnHTTasizmc7E3Nn4y19uuKS7vJLL2LhCfuAScb",
  "key34": "2JMd4kHoeNRzd8E795R5ZU3aZEgNinfc5unCWGQibpiEMDKLxbDdyJMcDLk7p8sQWHZ6hDeHTtK9bLnVFMrXHsEs",
  "key35": "3oqAANd37xaDWiefyf3FGfjHxftcD7QCY9ob4QAxPmLDmFGN3WUCNbaM8m6GNW2UKAsxktiGNx912tUeYNfoC2qe"
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
