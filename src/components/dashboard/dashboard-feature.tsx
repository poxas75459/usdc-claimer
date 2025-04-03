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
    "5jFgeiGSLHGDBKjLArYZYyxYgAhpWEBRA54d1ujUveLj9mVyTPQoULTBT9z7NmWUkZ8yH9FMkUvNQMr4GDscM9Pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JfcX7aXvThsQg3FyXvXeconsEaYFhXtbFsgowmPocRjrzXPjNYwq59oxeNZV5zTRzodUvVQXfWRMsC6grzp36Xw",
  "key1": "HLmD698FM7i1JpViEr2LK1EBRFo6JMy7nCog93synAuGvNAACzeJkZ82wXNHVKmQSghJcABsH76CGPePhPE7hfH",
  "key2": "5mhGyLmwfsq4Xk4K2iafQDU7ZpUPRncPMtDppSg5s17GzZroxdDWvGLigDe5mec3ds5afeB81jUebim6MuPiarAk",
  "key3": "5VZkjKUnUDeaxbpFH8dbi4tEp3eLfVMbWjvAdDJxzvpKUk6V3iNvTi5Ce9N93sF3bco6BMhks2bwDjBqmguTM9J5",
  "key4": "5UpwJzsUWTf5B8afiACAeG8BSdbxbK6zrmRPbWopaCKTd6RZ8PVQMXC9fHp7xos1WscVWXFQ1yo8Uhg1tWPyh7B3",
  "key5": "5H5ux3K6uXYxMwDfsorRg4ZVhRcFcwfhZa4m2RGsJiiXobrjufbCwk7uTYSHc9yheGDVPvkBVW8hv9dpDVMusboj",
  "key6": "4jcSTWxvN6uNUHcFue8FWfZcDRvSyzox5qN3ZNqSLwTCDKevL1WFywKxrxymtifSbAnJaZehNnYyqnG2hS6ffn93",
  "key7": "4Hj2zHU7rabAWogHMcpzZxTzjWALwB6C3WF2vs8dCC2CiY1r5VQZyZDtXt4sRkedAVQQV1EeAbrh34n3ZWCue52e",
  "key8": "dyE14WoyXn7YY5L4eXfty9dpML5AqzgST4ZCAhBGHdKj6JJrA925vQPSPNw59PFAFedGqZGNL1FNDwesb85GFLG",
  "key9": "4Eqixy18CbAtad9HuNtqjad7A7BayZxGintTm1YAgUdBpr11rAjLVgyWd4fA6qc1g2GNUJHVLzRuS5BgsCUz357o",
  "key10": "4qLd8PshUKYcsyuEVBpcg5PjNazoaYxxEyFuMbNhvmyUphDvokLrD8hysQYnKiqYsbPwmXoYRmz9h4hF9mddWDdz",
  "key11": "2mHFqU71ys6YCKHLx4q5A2RqqL8QVoFhDnJRTCMHABXU8DpVmdkAZHnwS7VYgkR2Bv2Rs5rJaRJ1dqB9Nq3PeF5J",
  "key12": "5U95c3hvMY5hpVpJ4HSv3CaB4MbbJb6QeG7BfWaXk5uqQzKusT2pXmbf9kbuuU3RRRkcc65w5BTT2qL84jxeipL8",
  "key13": "5pZAvAY76jhNWJp77iWBRZbCsw8dkgWUVYNcyYgiVPZdRdpxLMXpFKqHksJCV1LSTWjYuvTYQhYpG7rmGMnienbT",
  "key14": "5Uz2qTbXurfdabHofXtd8dbdaVioopy8tP7Jvftc2aW4JiR29x68JhRD6ip8ToKKBz3Q42q813ooFfixe6fz7CLB",
  "key15": "2GaUYZHDZNaofgG8ddYH2WQNcbUAdi1Ndm1fAXb2A3Lgp7yc4mJGCmiWSuoHoDRZCuxDtCjwep4fDdMyNDYoCWT3",
  "key16": "RipKXJsJ7Y3LNAzDUQkR4sM4f5XkRnZzPje9XruG5vTnD1pLTVLF887W5xp7t2VR7XZ5ctUdwcUo2oesx8SdxTL",
  "key17": "2n1Br5EFqcHtq3spx4gf8cAN7Z4Sx5aWabUpnwwowzzkR9HoFpAY5a7S61MHLTscmxcvqAHEDeBkaApUNsNejjs5",
  "key18": "4n9oqa8robbQbTFYPgUYsuX9x4g21Veho1bNTZrTQDeFFPUjZ62ENEEAJwA1t42ki4YhRXSPowVLt5ws1PwoE5va",
  "key19": "4888uVMUTwPtTqn2em7bEXmeKzEqek45MhM18QZnKuQ3HQFzxxaTz1mWTuo5Ed4DzKo9fzKmW3Uxrdf5KrAwo61L",
  "key20": "625a6YzFtUYTMhBEwjRoi6yR3GrGJma5n1qFari3PoZsZTVSxbWaJpH5fFKpj1X9TAMBngm3csXdNvJQXTPTbDCK",
  "key21": "5FvbjDtHLbS5fh7msuV7rfmqUYMbxDaBcw5vzqXwfXHM6vou7oSf8hXDbBtKznzAdLdZCpFHVvXaBEgfNzBzMe9r",
  "key22": "42rm7CxAxdkpNPkkKNPYAapzCJ58RbgLZ3yrEu6WfyY9Z7WhCojqvrHqrR3LbGczPyHb5cJ7g3pgb3RcVaVw9DzD",
  "key23": "5Ye46eXM1bb1AYe6bnFKmRWhvNn4HP2vedjWYu4os5Dg8oiytxu41XxJ41TDf4cxAupPbcMFvqTcWAokUknQKbkt",
  "key24": "3T8NNnxUmWN7J8d6SqPoqDpjL1F89TjAEJz7ryGEprJNsxYG1cLpJFyuumdYmGNwET2ZKEaJFTvSw4SfejKH3fe9",
  "key25": "5dySdDq9mTMTFP7ktGkKrLzBoxaiX1tFyvgn22FYWjwCH3q77cfQk7xapVJzHMGZFVV2cBTHNHgGkEwKqarDFNdT",
  "key26": "56bcPQwmGYc4Yf4kNCnjQaP4BpvE87iJ8W2umeTKNxchofpim3w9f4oSxiZod5mjUVZ6ws1EMoSvZbmM22hZVobo",
  "key27": "5RVuoHm5dYdY5CRVy5p2K7NTAQwVFZW5MRWNtAgbNxJHknE1mZ7kHPafW7tAfQ1ToKTdu3DpAGDs6GJV1V48V92D",
  "key28": "4NqKg14VRAZV76jo7bmbnhufMjjhU9j9U7RMafcpJoVU5TqoFRkutoVSspgiEEfnMzrd2Rj8vU1eDBA4XYvo6SRj",
  "key29": "596cyPFHmV4YcMbUWCLzJfuKiYyV6yW9HnqpYSVGzywSd7wWMhWjZPXNdHLvg8ttqNHBJQBAHmUF3qV8QYwmAtgt",
  "key30": "3adtRdEmAwGDkQuVKLzH8zJsuyPQnPcEiihTPrWCCVHUFXPeNex4zs9Q9gh4eQvDR9Cm6aJob9de2Hwea7vPSTVe",
  "key31": "466rELSwXbpcGsePGwC7FFBnuA8D5o5cse7fz8knUf9aQpVWAF3yHtL6QoQM24C5LnrSLADDZF5BRBCKU8YG51X2",
  "key32": "3hvYG4V1VPZzbYAgnRoa3AVSLqgEoj8Xvpnt2VaMxKU7w3AiFgqGcM7EtYYqJy4zozUYWY1v6LS9LPRJS2mqn49J",
  "key33": "3R4fsmo4TuCBaR4XMK5LwU1jinySLCMFN1prbMrWZ5bwxkFeYGDFJyaX9uHSSA1gsMiZrbneLcxDS8WUB8ujXseg",
  "key34": "4NgCV4pPAStiyxRAT3qco9zDNuw8i1MbBLJcmkQbQFdiDUbhgjyqx99G8Rr3YVwrHqPmR9cs4Xt791YHTcyRmNSH",
  "key35": "2Qdce23uq1BrzJS5oyo3fW3544X35V6eaATkTXQ25yj1RjQLvkWUGKfupHPQVCXbZUA1CkSiRUSQ12SJgqJygDwG",
  "key36": "5bTyQc1wXbye75Y87V3AEtcNP2vEtrp1fFxYwTjiAeAvSTQNjrAVMnGQAyhsq3EFb8nKXKUDeDp5apkpSjoPkCXT",
  "key37": "2izDVWTsyapSGmYmPTXmQ6qphjBuTF66n6htgXwodmaKcZ8az2k7FDSaEjvkM9Xs6oVR4PQ2W8SxrpNWqh8QnJPC",
  "key38": "3NKF2UGXSydAQLnZRaQtvJqEckjM5M33aQ6wz7g3hUDdV6j1JmoGVDNNHU8WW4FYhB1vHx9LmkaeQQ7GaFN3k6vZ",
  "key39": "2Gnd22LPgzSiYXo4tTi6BPFAaAEsqzmDnabfWqCHD7gqrEPio3HRqydPVcWL5yZ9j2UqRbPtmaJ4usH67N4tiWQ6",
  "key40": "XvmccySM3aBoJRo8XKcDFcXccCw93KFAp1qs5ovfyEGL1FteYALtRny2LN9YLyqB35DsNv5tepwNpUmssPdYqhz"
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
