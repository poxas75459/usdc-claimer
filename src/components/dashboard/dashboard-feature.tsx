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
    "4gTFXZD22B8aTookog85z5dovkrMQYQXqDYEQCVXwSBPZKFNmMeTeHDMgoxwLP1MxpHYbuYC2YHDuusKTBEATHBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vC4Wy4Qzfky1nm2m4bd1bxHnudaSsAW44nJB8byAfC3BbvSS76VxpfEx1Jvt3VZWvFhxk6zGs8wt6C5r1FrUBgo",
  "key1": "4Fhnf259XBFPCDWApkNHA9AhYAdeELKyuMXm9YCFy1pbGe9ACrdXEZw9mjkeE6UhhCczQ1nU1qacuXFPqcvmP7RK",
  "key2": "4MhKahbJks6C6BzA1a7zj8E8JHs9LEvy9xzuEXye8seqUayahLNRZqApw63fzcZpXzaAwSgUJmj3MxnSxrW2uHyP",
  "key3": "ftUV4gcLMNW9cZstzuPkJV9FmF7c7nHSXCudWB3WgCL8s9X39sA3zoQkPTEtP5bmLE4kv2opVVz2gyoE9H5jNwJ",
  "key4": "3ZVhWiam6szwD2HMmyDtBvqxbkS6i5zxUzugP34zXmASmNUZM7nvmqQXA2nPdVMEHAivvfqSHdJYnT6xNbr7RVsv",
  "key5": "3WdD8tXmhR5Hx1iHVMenhw1zt5T5B6TwFhCc9QbM5q7DH2vsDZw4WWcVSsXyE5Evc5nFYYUcTS5KZci3P3NnqSpN",
  "key6": "637jrmLL689KSLWnVCfQaHTj4E6NnDviKmkHevqGem5QW8bWiZPhZsXeatJtuSJSydd92qKX8t3oH6Y43jS6dQ7h",
  "key7": "47njEHDxbyghj5TVM4oAPjDaZm4FuM84gz4Ay8L39SFGY2owk9N9mMLL4hPHE9PnjUPJv9YAstKwTZFXM8xVvjgD",
  "key8": "3EDk2ckcp3Cc9vGC22zTn1v7fdkFu2cy1QqZ8Ui1Q46vCW9oeYb2pFBN6oNZfMEWWAh2XssmkXHnMGf4nbkmw15T",
  "key9": "2xGuxfvsQ8NzkS6dPfjRwpsNWNxxFVuF6wcjJjo4LzLtXvnnJcrXhNVRVDNd7BZCXeBgAQNVdSWs2ZgBbQot6vaV",
  "key10": "3sridJCAttW3R7GBsQSBBZs3Uo7R8eABZHg6fszLsyrTf2jmYkBHbmwp4CqBEMianB5ZFwTpfYd6kH2Nuy3ndzyA",
  "key11": "3wjX3mksXkA5Z9py1j7YDXoKHGefag7i622As6abGrZgWgh6HJCAtaKyXncZ6LhVtuGsTpF3BhJ2et8PtxL7hteU",
  "key12": "5G7j1uSFXPBNUV43fi3Mr7kkQ4vuXsCxvzVmwLVT8HRjZtKD3pSHEJ2G11V33sfPYkZhEXYRbMXfANQuuXDWrzL4",
  "key13": "4gttYbyFnF8YaTD8YNFb4xFobKfYtX1YPyeVv4h7vZHsEsUbVkmiWouWBpwfYbcBvEG4BWSSNdy8DQX8ntv7HcaQ",
  "key14": "5LAfnDBbGza6GAxzr3sd3sTczmsz6PkgQ3JEh3rUsAvNtS8qjzSCEnovnYfp8ntnrQ1akYDuKbuoabiXBiMm6VMC",
  "key15": "44dmuKqsJ3rVrufL9gEwYmgBRCphaHWDn9pYexNwwaHTvXNBVkiZXJ2cG9haLitE8ppfUA4AjR5UQib9JuRpSKpR",
  "key16": "4c7SZK6vbSUkrDDrHkZTT7QLcQEgPentV5b5d7yGNYnHBP7XjcVP5b1GzE6B8Gc6XQxnaMLHQTDrK8QkozzAGzXW",
  "key17": "3zJqAUQ9KjLZA2qrAaqKG4FJEQKhkRC63Vnx4LJ9dz54fmZNevt2LaymLqTcqi6ukMuxXmrbwkDkqpe87BXX6dEx",
  "key18": "Wz8xSZsjZnUq6ahqo5avZMJtou9r86eo65HJxUanakdKcJ6gsbWojCgkBfgvKev5nEydBAzj7PPhAPgiTyC9N6i",
  "key19": "4BjNzxYLE8tEMVgATsb3TZ3Sc1nAmCy4BZJXm6XJhn4v2fntVLyw9v9V6JjwpSwwrw8Hg3N22feRgSPg4YoCtz1R",
  "key20": "65FHDL9dEWnDXDuL4jH6tYGvzPVQGepW7ZzKx9f9qyA38WUpCeruDRS1wpB5jgT8tQvpBMnF7ZrMQPnzn8V765Eo",
  "key21": "4WVPDsYgF2XnkPr6SXvsQ9u8RxFfn4bnqKZXC6ciTWzuiYJ8RKAGe1u4qkGRfuupQoaTYUZew2GLFDsDdUCxSFFe",
  "key22": "5D5xwzFfhzN88mTEoM1ktZQt15pLYVJNLi6BrpMRNABVohTDUgnvLxHhUSa1sSmjQb5ARzpD8wqyCHm8dZAcfzvK",
  "key23": "2hLzoKH4CpJbZFGmCmUeET1GD2anhRHc35W5vbD64heKmQTS5U98FXGZ9ghwhvCjdPqETMmtotUarxE9BtwhV3VN",
  "key24": "239AJfsoBKk8q5hf1yRYY8brJEiCcucRwKuyEGpLwJrN1SFmJxyk2patCe6y9bhiZe8ktEKG33c3CoabYowGuAF9",
  "key25": "CGrg6YYGQGSU42kGFCAZjuwzcgqF1UDXDntAa7W2fytfXw2BeteUmErvaafKwAGHJohw3EZd4heynyaBAPbhymB",
  "key26": "5hbvLEyL3E2BXYbhRgvw6QiHkRXRKju9ghDEubTD7jW8nYL5xRNX9LigkXiPqjEm3EL5Pyf47TdQ1KDn4eYisPfq",
  "key27": "xLSBLFsLH8E4jZTTnCop4TCgYnsWJ8oJwJt81HQMabgt1VSYRmqAKLxPQxYjedaauBfJMBnc6prDoV1WjwUcGJ6",
  "key28": "5MvaTSTtckToZj7iF8JQMQBwsKJ9cSvBLkPqbubvm94F7csX1e2XgT7LeFYkPcBG53KjUfRJ7X8HTHFjHuBUuZpb",
  "key29": "4JNBTxaySqNwujjKEraoTTzyLTPX1HLdhG1NPW84oBCLY7Ww1mtLU6a5PEbJeyZZ9d11LFEwnj9MJTdh1izMxWJM",
  "key30": "5qZGfB1Dap54iMWDbUwDcwrcnruVsQUguFQmVoNqUDD67zMsHsUiaYekLdsVVJLMa8NcHBjFiZn3cKL4DwfE2hey",
  "key31": "2bj9W8pAa5QY7E66uw7U4U37FuDNwCLSDWQpmb1e1nPommyG51HLdfdFYC3YRYp1SQg42kSuCydUFXHy1aHzgKvJ",
  "key32": "5wkF5P41DdL6S3nFv2RaAb7Gtur8eoXZwrNrRbj5CqyYieYddfuFNN3MRS9bxGbAVVcWMvPCFARcYeaedJNZiwXy",
  "key33": "5xbDdN3psrU8CCT7sL8Fu1GAMu9ACAuaJfvfj4equhYRwbfuByGjFQqZpyUkXJLfK6HGXXjHKojCmdq9ZgUSv6Mc",
  "key34": "2RHQ2QuSHoffXbfwfndG6tsutuMkyko2Nk6bVRjNd5UYhoRagiyud6KhgKnVZeqkgZGAYRwAc5rAGLngQN2ZKJDY",
  "key35": "3Vu16qbbmGPNeXw8NJM5nzt7D2Qc68w87KLRqRgrzJMPf8X7nHDQmKdvYMpgnmroQEfE1JQorM5d1NmxtdJ6UthU",
  "key36": "z8zTWR2miztsNpD35PQsGLBSi6dDytQbyCexDhfHQb3M7CEoYbMJedVQidLBZFCcyAK8yuRmtq9uEs1gFjzDLj1",
  "key37": "3sesjmsjVa3LyKFb3d7XV2ijEMmnSiHjZAUq9d3RoNBRVoNZVau5k86xUQ23a4xa7FCW77eedWQX1eC3iWzmvjvH",
  "key38": "46MX1J7yDwqMM5tRjYiTbjrKkcunigMdeAteBYSWnoXt8LaZUxRc7g2z9fXMPRkd1dkSf9xG2Hvyg42V4BNiuSD3",
  "key39": "3F9Kucas47jh8RcBeV98ZMkK7C4sR4sPA97cxnYodmT17NZdrcES3jjcSH2iVgymzm5imjr832AbShQRzCpGmFkS",
  "key40": "2b632tnr1nMWRmc6MzsScGnoJhYxrAmqPBmx4a3jgVF6ZUHMsAKZiy16ni3z7bwMZPCoH1LftPAWXSjte1daVrzZ",
  "key41": "i1DDQPZpcCuWtHj3U5iQALhiSmPEvsoC8h6vBytheVUrH7MHnBgfzg2dqqi969xX36hWbeMHRfSWzpri5491Pa3"
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
