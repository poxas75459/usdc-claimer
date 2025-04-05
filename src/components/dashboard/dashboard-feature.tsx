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
    "2czSCeF6kpw3MqLQS3qyNSqPsz8bi3hBvE12HwSY9QdeXbdUSHN87oez3mshQFGkv3UFNRiSLH8cXVm2L18dLMRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TsijyQABV6epbP2JC3troTYSXpD7bj3ZwGzQUE8FdjerjY3JhqgnHGAxf66L9afATtUVsDQ39FHQXmQ48XrCikL",
  "key1": "4qp7jExcSWxJWHwSCeehHPyMLBpmKCKdTHScpmKZJFV7zbUCTJQEcrrNgcmd27a8wZtU6U2pQHU8tF9Y5eZNSbqB",
  "key2": "49rHmAj1VXnuMmGUxPb8xpsxT3AYCehartas1qznzy9zqUwsyq9rWEWLDRPZxsP36LkGkuXiYxL3MokeCLR6MGJ5",
  "key3": "3rjZSbJdqsfbzVomUxzAieQ9SkxUGFkgufUFZtEs3wAhnThPHbspFuVmC4L6jVK4B6KYktZksM7yWceyj2qjStHu",
  "key4": "4USC3gTNEoxbykYsNx6ch4bTMzT3qExUoUsM8ERVcoRpPjnXLXai2GYhyXRKnAkANhdZxizBr53VWqVArpfA1AQa",
  "key5": "VFTgScPKYcZttvgq8f6QKkdX58JyvJiVs66yknGmtWrCkQoLnJ7xGjdEscKvV2rmTzZnvKzT5FLksMAzSkBU6qo",
  "key6": "2iPnBturonyKBE5pcPYuV7WKNdAJRiVa5bxCedQVRgAGKqWvB6y4sxpiVBLJkGxwvsVUEAK6nX8APfGYYdmkxRwE",
  "key7": "4dVcpDbNX2BcWwGBbiGrZr9pWhoZcGCwKA8Fwjiit83m2E6kaYqQLfQffVN2Jwv2yL3DjaZJefhG57RH2K6HCqRY",
  "key8": "219qiEFwVH9e3j2MqVpJCYZb5P1by5rMrGcWFVS5cLUaxTdcStkWdmze1Lj7nGwr6Mg6NR9R8o2G6QLFUdqSdtAT",
  "key9": "4SWv5R9wYUe7RDR59jWvmrrnjMsQLSh4AMExVWDajPvg8wgvTkxExN3njgUqMLyGcSRxiBzscUKRCMXyayzghUKw",
  "key10": "5k3HA9pscVPuew8uxyhqX4QAXMVYexFpvjg6Gi9XjKSSpZAya1gHz4CLmkp2UWBtLgq7GyCq1sryBNkU8UWkGgh7",
  "key11": "2RBtWfoCzThzxgYzD5g7Eh9fMS3a9k5KwAi42aEpZCaG1pxQEdeb72k7dGTKRiWMrNvDcmN2BnpxrK22kisoN4Pu",
  "key12": "5D7ufxhweLx4mHR5ZZxs4GfnNZ2mD1VnWU524nHHnwLV6iRiBmGrAzUBV2tTx9qcyEkaUgUtzp8jQ751BADRgUc8",
  "key13": "K6tShEjzEo7vWxv8HPiW1oun7L5aSwFF2nsCuKb5A827chETGReGnfbvZhd1yV8ZMwZXoeJpLW2FekDkimjtBM6",
  "key14": "4ZEiU4ocVWnrwnLXdRX4TPUPLMAaVcThEUFQdgy344MDwA6hDysXQZap4K6QYSVXQA8qkv7J5PCj67TQC7vwcQ7n",
  "key15": "3kNvaCN7k33DqW5LkwE4YQLfub8R96DN4nc1UFYGBKc6vdeiUuDAHfPc337mrkqHhkVRpDaNi5XV64uwC1TaC78f",
  "key16": "3eDVSQYRKQ4SGxrCWbg786tB9r6PcbUBbkgt16n8DSRRuQfc7LQYLRMQkWNom7TUC2LWdLMsohHsYGJYRHFcRZ9d",
  "key17": "5EbP4hGDonozXiZLM8F2G8vWXQ2gXgTaYb9WUvqHs6vMNVTgEbmcPcg6wQUSPjjuof4o3PDy9n8M4ndvVntNT33R",
  "key18": "5xNTQvtQF8q6rQseEjzH3Dfj6gQ1BqUxGiCcTPKFrQj9R726GzWvxRP6yt1YbYzcFjCrDgfAVr3hw11v5R37kDyU",
  "key19": "3NsCfTUyaFP3ePg5XR3zUB9XYBEH6B5ccXWWPoQU76kPb8zK3sQwGCuh28p9RYXMJeZMq9tBs4VKJ2TCvehLokAn",
  "key20": "5s8XufQ6JsGqgNXvJerzqtFGKgX75TRXhFr3ch6X4ZVSome72vsqWWfR5a6TRMGFrovJt5ScCmzp9zQUKfWazcJW",
  "key21": "3c5BYpMqKip6NtrtAAEaR97mQKFqF4YRvqcDXUYVSSXmTwE8xZQCCXoTFPk4L5p6s19Cmn5YfDfAXquhmLAkY96m",
  "key22": "386jLYCZzHaGoZpyFzeYJjQ16yx62LWT12KHhkPaGpzNmnMSLoY9Fo6MwofyEg933Hew5ZXfa4F7hdgNLENQ2fLg",
  "key23": "5tEk7uHTNg6BXmpRxtxThWWqsih13T6Pu8zDDDQyydfWu7aQo99f4qZw9HRAvg9xa67jpyLUufRvxbToiCBg5EgQ",
  "key24": "3nTuSTv2qCUdb68M86Ztd2Dc5chuXdnB2tSwuSywDUe9iT4w9yvxMTrGa7xjT3FbYvvC9tVRYDg2rkYKcJq9JfnG",
  "key25": "EqURmPfzWDWx1jtqm86f1WB9cJCkupbAyz59FQoCVvqYPJDSj2tQLgsgw2Hj3Bb7ENTJzkEqbbMGZNumHnkX5N7",
  "key26": "5YiSDxT7nGne8mfcCHuGu2t2DJJQvEqTtZKruyWABuPGFCgbn9yQJEkj8dZSzbY4ZRJYozYwYjjBQfLDCtb8uPXL",
  "key27": "4vDLbesG3bBT74nS1mZSbQ4vuiUocHzR6Qrm11u8wj8phgMeaUX4sQc6mhtb5BqKmkMnBP5BovBw1CAzCQNtCr2k",
  "key28": "2bUtoaHhSYToV16wPhgWsCo8E3xtVirazxj513G6qbtGKWDj3FuHfcoRBwXzX1DKygKS29T14Q4NScjBFxtr2CTC",
  "key29": "45bpcxpcaQyMXbw1rxK2XwSJStzpVLisQRJ6x4faaJKEnevzLBF26T9Hf2m1kwUXCEyHZnzxpm14cUMqBC6CDj3q",
  "key30": "2pstygCwXriMa7b7mkMpsBkyB8PSX5Vw8yuipH3VsMaHh3AXf1imYzjiWZwCdogfNi6413X8LHuR9MuM5u4mhpA9",
  "key31": "5EhAQAYBvJjE6skSJ8SkFLdV4kBRsKvJxJGKiJMfrL1fTVD4y9a5mGB9RtMehTWqkToThjBMawYqGKqSys3Na4sn",
  "key32": "5ub8P8eGeBJb6yoHcos8SWpYZS9LTzSQmxxxmP8LdqRkzQWfgdopuVSTRcXFi57uA6zXByTZgXKkqQGfwWfipVDs",
  "key33": "67idJNdbGXuTPdZLVsEwtxzgsQ8fw9teLjAkHWhzCg5i2uXjusrJtSqLbtXZmzemPQ1bvoyaUq76KGbJQkMGQJDC",
  "key34": "3ceyQADzynDueoG5crDnvV22e5LhFq6TRufaJq1khGD9a3tcffZMw7BMCVRUJbpiy2rcRA6bpn5McE3Wa18Uf6qz",
  "key35": "4TopiN4YAPwUUtKkXNKYn8mcpyj9Mu6G2Kmj46q9tUC8A8ya4mipqPcQXFC37c2nPtZQoDUro9U3jYGRELcHrQZb",
  "key36": "3GeQjMKnWQPy8UUhgBwz7dmrDLvsME3tVZMsXyAa2Cc9A56vUUBbgaH7ZPtXCpz47FNkvCscVA5dJg5BKmNUyHpJ",
  "key37": "3bmRszo1sbCnY9W66XCztwa4mwehMZQeN8P4Y3cruHGkwEbi2Ggo9Ki91yNPUkVCtn7rSd7iUGFViGrXDGQakVQq"
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
