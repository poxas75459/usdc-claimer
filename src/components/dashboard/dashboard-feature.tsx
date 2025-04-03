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
    "61EmmfYQDNARzXPLsNKcqeHyokZNNNbQRvt4sbGcfjvREQd4LRFhJP7i51U9uvuwCVDtiHpJFWu9PVpMcPPXomke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UQuxD29774djQsRdzFDQyJXAZKauDVVQaR2N1WSmH5jmBHxbBcoUKbY5qwebJacdUzjNF9tGSPzP1HrXeH5prny",
  "key1": "3wwuL7CraPLVP91u3AjKTt85knEhUnZqrALufqFRBogLEJXDg78zjbvsJZwP1pVxpH7rZrotz11FzKGKdadckyBL",
  "key2": "3RqEyQsY3mkBsGWxtdCXHRCCUaA2N9Jpz5R3pNUaMRZoChXnJ2kyETZ9DoaaLTJCJYprn66MVUME8HX13DH6xGuh",
  "key3": "2yFzRZP4RwavYBUb8w8fNxYQmExaqryKvUXJR8uvhjPJJJN9bcF999yqJdrWsLBFiP5cZLYM2J1dAKeot7H5m2k1",
  "key4": "5Ki9hCVWCAT7QZwTsMS3hjBsATs8BSoo53VUDo24qb7aySU4raw1Jzx2gmWBdQsjy7h54YdWJLSKiKuarasPb8RY",
  "key5": "2iKF7oZbegmMSA9hFaFJv9R2uwYCFD4n9F4UsJjyWA7VLHjdQZfY48A8HqBHVQNRTQxQi4CZh1K9hVEwim4FYnMh",
  "key6": "5gDEM1WGfzwDeJw9dsP468X8FyAZWnaZGPidrLgEcMbozvSU8yAggoyDX5tExwxryZLxPD8cqQDKDpqV4Z8uQ96k",
  "key7": "vUkmndxF9qszG95ToFe1QixsdUvg9S8N2FZ2Ww6VMcpMCRGwpfQUrT3YVfmXVz8Q3rBEEvePwbufjptG85t9Biy",
  "key8": "c2dx9Peog9HXuYkiTyrY3XghxSqPVXBwegBSjh1v6kHoGBd1eYAynpzSw7orB986jNhPA2fW1aCd1WcpTy8pehR",
  "key9": "5vb68ZtK834BLjmFnK3hcEG6vfBZ9sUC8H94yHhuZB5tjcbur9dKt8MYXLxBKxoVjufZkMMpqXcv7KNqsTdupsEK",
  "key10": "5t5xRzCbPUdVQjE8ozLuoVHqEZDUUzQNo2R245RjFQa3MjUnLkJ9yvVfkxfaBoyQqBrhMNgPa25gGriuJyGW8FZP",
  "key11": "ZgjVzNEk5oaxaV69jiMBrRDuEAmCrKG6h4V3JtNC3yS8ZF8an1YjNbNR1HHGpov5T5Fp85GH5nQN2iA1ca5p9K6",
  "key12": "4MBJBvocxC9CLGMdpVsYx5dc51jdG2pw54rq9fUwFjcwANQygbbSZmKsXXphuyd9Nt9pFw5PpjggfQS2av7tm4Um",
  "key13": "2bYgtCKtngYgqfUe4RjZgzmMERzDTK5T4pQ6ctX25N2DpbxH9G9MLZ1yUUPaw3FnA5w9J2qzteYrCBSDPSojEq6c",
  "key14": "3pDWei1ThCqJBeTjywfrgwt3f8JbqQLkeocNhzmLQmfZRBS6FVYTa9tRDThWVBhn4QXYGJ2J3wSHvXcykU9Je9C",
  "key15": "4mRVV8guZWWz6bYYuSUrXhqqtLfUWz1pz7H51PwtQoKvFKkePwALvrqX47kjcRgzu7RJ7STDtTUtEnApAEg3yab",
  "key16": "4Tsxrnd1E4L92nLrLXqg89HbGDdpHekdoS4JtEcA6WQUoNBTetuGRKuYNcrAmS7kgcn5LRgpwTp5mWJfXBwbhZMY",
  "key17": "5sLYSXvgdEo8sA8qMwfjHzrQi9hRXKUWADPoWZp8AGkfvsdDsLUgPG6E5Mt1239fCCFG9wztzdJ8oh88mphVDkf4",
  "key18": "3wXWQaQb4bQeTSvf2qtRbkGnyYCXNxdcizmPEYKN3E8keFfeNwrrbuZ2gCZDHXqbZSojc8wMSTRdxEPTfse34iCZ",
  "key19": "64c5oFvnjG62EpLTEecpbA3HUeNhSzNfu8nbfL7sVy3VZGmiKgVrAesPE1PhqD93bzknqTgPZSwV7UcbkPFymU3F",
  "key20": "it1C87X2pXuYc72yUh18GUUoqAog6QeMuRzzUMgBkMf7frw54cFjwBDtksfoShHBahSVhBmYvxpfitRDYheXttQ",
  "key21": "2g3SEVpCUmB6YwH9sTJBq3J73UHGCnXsQwv7RXB9dPyib7MX8kcscpbavM7kZVhrjfCtP1VCovag81XpdPHKqAZS",
  "key22": "3UKcVYUqyeGX5JnEmsvoeRNGXufKkjZovqmdZ4Ht2rz8wsWzRVD7macgLLZWiNFDPz4kRTvyC8axbi5TWnAN7uvz",
  "key23": "5CrHsiHZDUXoWeba2m5dvRfcHjESZa2ptLeZejqDaEuhYiVeRGU6np7zaT9Xq8u4Ettd3g9kGo99wgDGg95KJuNn",
  "key24": "24j4Xk4EjjBwaCP6yA8kXmpAvKeYfJrVMKEbUj6ZchUEiaJoM2UX1q11UCML8b541WC9adgeRcsFbJGutjZ2fRou",
  "key25": "3iYkwKxzfNbqt3LDkUt96VqN1u1GAfRtVzefL1RDwrpPqJPGn47u7ykSCqEgPS8oxt2umUiXy4PjMNJK6Lp6FQA9",
  "key26": "3fEMTNAVUidQMddZ7x2wRh3tJrwwwrqSjgY4ibJbMqHkf2ikgR3ywjFpoTZTqLKX94K8RiTToi9yuQipsApXZMT1",
  "key27": "3YkxrUGjbsP5HoFWaGz9BurtRcMKohGB61KkS7sBkViXBYhT3cCb45BqfFoRnQx8aLy3sjHU8pZHn3E9nEP4xMwu",
  "key28": "4zN5iUnYZmDBPRMbAxU499xCPXytJBQaAdeCRwvmV2s7kJ66mij5S2hmieBu32Mt5SdFAbKDnWqPPWJWb8NQzemX",
  "key29": "3rNDpUMG8mmSJ27Qrad2aky8eTZbcLqe5hqFNaVmdoDnXGiyN6FXyt9w4po5veMLB1WMyyLDxrBqiU2kmnTqAZza",
  "key30": "5AJhvJrhn5BZixrf3D4gnKHkqkeXsLpRyzVYccwny1JPhfuTF5DgAeUyZhiThjesXXzpBuJ2Kom4gUT6D99ngZep",
  "key31": "2szyqCdLE4z5ZrgJAjE3mAD5zuGgXfGVt7M2HbwZbbaf7P6c8SFDPkhj7xakztsJJb5c5tgPdtAvBTA4opj28vRA",
  "key32": "4qwypYQGrrVXfTPnkyRmASWvwhnoQubYsE8rdDXSf21MYERrdN2VvXM2HemALepoUPqynn3xf1kDMaCmqMYMDu5j",
  "key33": "3JvEzDsQt8hUcvJzjHt15nPu4s6KyJMbmqLndK9BsSXCLzEBt5z5JmiarBS4g27vEWubuou4FnsTY6YZP3oAR1pz",
  "key34": "58ZrvW9zDqnXnYfnkkDzDXJ73bwH4Et63nJYv6H62mVBoHGhfcy8yZ7LoyW2a9cttVtmF9pagf2GxuvzkoTzkNud",
  "key35": "63q3jA1t3q1FFtfQURc6ECCnkDqSdTDHMYCwEXDuUCF8fjV3P6Jfe6vp8Mtico8JnCsJ5tW9HYZcNugxKjVNe68E",
  "key36": "3Uqk5TUoL7qnDSqrWQcEbzS5gr9cPS6HzcPh2KARnPa2ZjgX9L8WkS2NEuDjBLARDmJ6QoZ2ht3gMbWjdyVimeY2",
  "key37": "qVG6TaZqvTxVbVFG1rmGe1v3qEYAVKZUtKH7zK8t9ThAFkc7HYDrW6H15uTvmk6L5fPeCru8sjq5B9y7VUGkEXp",
  "key38": "MH8brZfuoCyJtHk6YcQc5H6cAJALDntBZmqcrAvfjKDTNtD2pwpyhCw2bYEgF4t42MRKBjHLNBdFiLkT51DPSSw",
  "key39": "mS2cYU8cWJKLBexpM3W74RHmu9QeZuW51t7rdaXecQADaQJtHB5nm5jAUAA4yzSRxpS18WQvHn248pBS1T9LXWf",
  "key40": "2iQzNNvSgzgHVRRqNtQGkohXvChTV6EVisFgb7UtgcVTrm8GX9FMwQjqqb7KtwS2YBXqGhMJfNsYC3DepYxNKbAS",
  "key41": "687KEhFrnkuSPVnRciGeGnJhgN1yyWiqWRKfiYGxLGghRBugmw7MkdePDn7gWzzTzqEf8DPBJ6d1NweWq53i7MY",
  "key42": "3off9Unt2LYfY8rSYpZmDHzJ6ToaT9prSGwSvR2eXf6dpGftAeHmgsMcWVTvmkcEsDT2tiUgCtxeMKR6euss2Bgk",
  "key43": "5q4PYBo4T6jFs5TNUNg54MxJKC2N46uvmR9wE2VXJ8VVeGxuNtiYA1KNsHzahLEwnJB8fZvMbb7D3LjH5qEYdT43",
  "key44": "5Q2H2Z9xu4iYGeANhD6vDvP3dYPDquQXCiaUU9wmm4DY7hXVYa4wLAW1rp5stGBhioXtME4kqX3cricdMrMNUVvE"
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
