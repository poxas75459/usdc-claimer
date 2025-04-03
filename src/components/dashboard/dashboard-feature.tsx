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
    "5qcEUv4QwrBfBMpgGNUeSDEpkCpbTPBjqhEggWWB1UzYsAhkG9seht6unnXDASGUPbg2d8yEMRPFCFWt9uT6zhCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38KUxZxFbwVUbtFA8oYUtVQWS9MUsE7cos2jzC8vd3VVDfN84ACrykxaqMj4SMnn2kkuhahRNyjySwQgFARYHm4H",
  "key1": "3j8utLuEYRJgMyehJMoDgZYiku7KyHj368fYofm6RuiJHA6igWLy46JfymCGLYFG92YBoAQBNJH1Esa4XujTQMSP",
  "key2": "455Qr4T9mepndx9aop1xdsDPxm7oT6KZPH8qaocoEoeCcmVzZaAHTpx879vDF5KEKt6mVQwJrjah2firvKfbYjBb",
  "key3": "5RWeNbWnhvJNFoRSqTM8G3jLbmaFD2gaWRwfmb8JMtqNcF2KCte1ctjmxQvcE1P64sNrvU6PbptxhHxAoC7X2WU8",
  "key4": "2Nr11jmL24yaPDhECBytu1XxYNcjoahUYJ8JwPXxKNXzKEyqJuESW5wkAm6XGFdvVh3HbdVnNEQ64tKQV5ewK2Y1",
  "key5": "5v7cgY2uKjaMxMzhi1fAT1LaVf8vejnE2ZdjkR6DgL1iX8ASVtYLktwxuN9dYBBvWngNqjJoStyJYbTNvCjcUwm2",
  "key6": "27zz45nAipGCRo9brn9Zzan2yem48g7aP8abx7HJ7TjkvCWSfTcETGR9r1PfE3ZZuRBqn6r7JuyzwEUsZniJkBoe",
  "key7": "3ExUi46hUw3rQkwmtNw2Pyh6WipNHgTA9oMcHzeSj6hw3uqAjiNKnvcdQLrx48755DkSQNz4CqVejzCVeTdeWcBW",
  "key8": "2AWv7VwizphohGZ9FqF5Uc7YYocXVQSVXwfqFzWUJ1ub4k4tmrEQWdj7s1koTm9w9uQnogbFjuHd9g15Uc3dudQL",
  "key9": "6UveH7kPT1KKQe7skWYZdvNQXdhatZ1mZXweLpvQXMp9gGxeJWgS7ytbxTCoy47nhBsKe55CXjLxfSHXUv1MJEP",
  "key10": "ZE8PUiXbFXH2GCWXCpEoSzJ95614KHZszf6M92eUwioG7PvR1ogUVHUpoZtHgvcK9ShFK4QiT7RS3vxjz6XJMJW",
  "key11": "3vLHS2i9kN4cySTbX5amTwTVFp17jbFZERuCfFMFC4NDjBRsvzZiC6pddDvk9476QKzwTomxys9wPFgBpi1KAMdp",
  "key12": "5mCF6B85zKrQUABuTvHo6ATtCZWUMUxMcG7BysDFGma8NasyYEMFqvzSfinDcMKcwT1EKnXdBUkE9KLp9cBqouCk",
  "key13": "2hXo6ezqLz74WZTSzpMri2on723vXWggirkyEYU4K1FBX3AjrwURZSArVFwcbFyN5th9DPNYcTqrFCHpDPmQ5j3B",
  "key14": "4k25cVUQu2VKabN9fD9CRUTY4FV7WWnA3v3UbJTdFxpNf2WXJNWzcznC7GYrXKhD8p3WAMgK4T8Gkq6eV6urK1d6",
  "key15": "2kjJNJnK6VWLSamB5fc14Xyn6xDZ498mi5zdPEJnDmFpmWywSQ761iLw4bgjRZHR42jkrz1Cw1U1sWmdGiJfzDpy",
  "key16": "5fBRAab5GKKdNLdUokzQYfk9LtuuE6WJAQZcDFVLnqCiDQyp3KGUZn49MmGTXM5BsqNSpDSvsVn8AXmpgyLnUvWJ",
  "key17": "5h6TFoHKmT5HwojcWJzLz86yF1ATvbbN5vHQQWJkeEvqCrKsNCu56z6rDaKoMLjuE4n98RRyj8HXfM6nKWEiznUV",
  "key18": "5KDedxyhKncuWXNUkmyfvXth4FmvqFawmgU1u5jmipxtXWzKi6NemY1hTko7vcEzafwY4rm4QaMN31CCxyyMhsRm",
  "key19": "464NrXAS8u21VBQ2KKeSozf2XneYh1mN1creuMt4Qv2YwEkqfGBrsHkzeN58U6Jb5Zqehit5h8Ui9GcGkrpJj8Jw",
  "key20": "2Ug3fMhCBYuSyMDsmE19BEpaoAxe6ZwaPvGzrUo8qSHjmGmfuwSyzmSq2o9cimydRytK7uMNrBz6xT61KxcVxZWW",
  "key21": "3yRZhH8oGrAZCfT4XS7qB4WzJUPkeL19tSQSjYEGkutzqxm3CjYeBqRGrgKre9BpdDr7SpxXeutvhLfxxNV2K13T",
  "key22": "2ZbXmPa4tsTSJW5cCmbfKcshCcjWbWWtS1LCSYgDtSbUMBgff1pbT88XAiExbTh5r55VziPyd1gADVGheqp35j5P",
  "key23": "3UMXEEqvhoC4GhXbKDJXUcUiQxbDAhv8DMqsCtCGnbbFTAkJ9P6oG7hWTpAvgKhHERESzt7THwthdZLBcrrC45Uo",
  "key24": "25rrWDpGaogQ7dBWwbWmcyBJ5ugiYesGAe86tXnbWPf23uCEBKuauSmmu2N6dWTgMyrFTMQgcTuEJPf2Wj5pCVtR",
  "key25": "5z74eCgrNe3HG3ws8eTGBSsPwaMsab2X31ixUF8uTczr2heLMEyH92KLHUFUSS8W8bJcTZ8QuWDxNWBhEdphKF5h",
  "key26": "tXRoFB5oJnXGmbYLnHnBdshfpGy2R5uHYtWQzP5AnHLVABwNmeNFJawDX8BWqGEQ5wZmP4uy8MqJy4JKsueMdDj",
  "key27": "2QothALLjLqZsLpoQzfZ5pYCQhLG8WTb1b2x6xPPBVbvhwfoRg8zofh3pUHGBh8ZucayUUdEYEy7f7uW7eXFUKwC",
  "key28": "43xte8fpfYaLrKdkXKF6dF45xXdsKgrse1Gn4GvLiXfBrD5kUhRfcvZDeLGw3TyU6fWgaKTvW6WdHLodoiYqge7f",
  "key29": "2Po64dq4Typ7DVJYeygEdfSmSypWXX6kYzGdqYAVFiLXyuDbwAkCiuq7neFi1MQeb3JrdrmmTP2a6Q3e4trqxDjv",
  "key30": "2D7mxpWLUVBQrMdP9er9UY4MLKnnf8gEeB8fUV8LGPfJHFsuNVScEW9QHRqxwbM9mAUL4GUV1mkZyZkmMqVjEYex",
  "key31": "ArfHwxVovLAqMqxYN1nxGQFsFL1aetRQKJyeiju9ECG84RtLi3KYS1YUaNxxwG2BAnoR9DThy6mduehNEpDVpcj",
  "key32": "5skTqbEHTczKc7prpDjMTifwwTT2TXGH8JWD1vfNyQc3h71KfkxubbBCRLSxZSgWBcwgXMg4NJCRAgKCH5G983vp",
  "key33": "3JtVCSt632VwKq6HyijXd1fp9x3mTo7xV9Hab2b5LkmBfUKm2QkEmkrKEMdDFw5rQuWnLnBivfhpCkvCsFiDeJG5",
  "key34": "vsqLcFS46ZrLGjFGQug4qVFJApVEQqzNxyvR9CAE9MT42FGLaSsZVHGGsK4C8hPRQ7XT18XeWvwro7ANVLiv8wL",
  "key35": "4bEuhPqD83mGwmBhSajr3dH8dTD3kuKfA8qS6iLFqs54KNkCSkDF8BdiWdEMPr7UMt6X6mp1tXffCEQP7dqNWJ5h",
  "key36": "2TgopRaWsZJZ4nm76nVgCDhgwGrXc5HyEYBiyqdhrMTgfj4AtmWqirLoVtdUzf47M1qDJQxgarLLonqamxJSLiuH",
  "key37": "3fbrwZmGhYY8rrD6X5wpdpHPqWfHTvrpzcw299Ep5A5e8g1HQzkL4FLwrfdetVPbSzKHM8pqEb2ZfV6tX7CQ2fZk",
  "key38": "uGygWhk13eUPMKwmHsHrujqSUNEd9bqsRwCc27qtkwsiyqyeTCv7jiFQ3TM1bvrrkRi7rxaqXRfFjzVVEyHBtqK",
  "key39": "3V3L8MVwhMpXc9im23HQfBo1NnbNxmfB3TMLYiMN9U5xrzuqPiYGmYeoGvf5M5cbvMwfsRvzvMVjZD4QVAg4QeR7",
  "key40": "2CFUBXEKjsUcp5bSQBLRyyPQZEQCa1Y6fs34MTZNkRadHt4WQpZnU9cvKoHXLUPGUyv44H9e5TzjF3hxv5jd8a1P",
  "key41": "4H7HByf9HHSQmfrffcTKe9fiEg9xbH1nLQiX41Fh8yHQaihRsrLfzMLeiGUeSUcVC3RYEPNmYK9Qc2LbYwjEpmMF",
  "key42": "3MRjEMHbTojNy7GVmpqon5fYatnS7rzbd8X5VchdUu37Cnq7vEwiGpUJnZmvRBbVUqPGFqoEc9TMbn7r9uyw2ULD",
  "key43": "4LYfrAVBw7HYven9Do2aPBSLWCrPyQynsJT8LjEngsjH8zDfMS2x4FgRQqr1ayA4ZdkyP4HWNwkatPrLPNbk6nrB",
  "key44": "3J8YYrU3G3HpjRZnpvJfXWpbU3ehrZPSBVNbEB7SGqFJtnh3s1oqMAZZdfcUEw67Krsa6ec268Nztca6jrHkWrj3",
  "key45": "2gqapy3rGpQXRmgeRGtznJiTc5RctFkcroJvouENKHqhbuvAzuqxhAp94kHexDRzoj6QJaYw7V66czgPjrZu8Xgx",
  "key46": "z7xtARC98GAw24spmSotxYccZrpe42vUArghjRw5ugmPBtFWkL7UjpTU37AEZMdomAhTMncnBFmMmABAowVvatC",
  "key47": "iBqD5aCGcH1r27qHTAFEej26Lbrs5vKdw3uCkFYWpUVmGVnVBvaWSfBtzWoPV9gPUTbc4cmytsmNnPer3MfB4bB"
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
