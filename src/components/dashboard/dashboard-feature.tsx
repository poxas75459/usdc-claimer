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
    "4wwUxhFEyAe3uwDgxxbMo9jaFBZFrjPvqVpKJoDRfC4ybyzv9GErtAvvE9STR3eZjZYvWsf9kiRScZsbN81GfWXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hzYpTxKpMQNoimZcbggwBGuYcXDWmr5kysxXn8YMPUmPV5NhZw5ig7wS1Qyio6Lh783ZvPeKTdnVUepAm1zDDCo",
  "key1": "3tYvrpaFHYjoFshxpik7isKJy7VeHMyCk6viLSXYR87ozktt1F2HbEXJ32A6g34xfHoL2PdT7hbsEEeVQK1s98v2",
  "key2": "2LUXuaSq9L2xEMANdiL8QazVmMcD64Jm3TfFRQSwbiaTV8fAGjwaP3AtQ29eumtxr1kJuN3B3Kkz3P2H821wBAf5",
  "key3": "PeJBrJkwjpyAeFM8xpsKcS7eYh1PaQNjXXcZyj2iTexkr5erBcUL7PMQVqDSjEM4SsMtVFbbrfJuz663sBhB2qb",
  "key4": "3k86MuJAbjAnBpSR5Mx3mcS3h7p9TXocw4YPYaPjqXXgzE2R6VvyDRhYPvgSdwZSq4AkLpCoZWFDY71ccbX65DMg",
  "key5": "ogfZmqnpH2gztgub4PBTaY3RF7VeCeCsbqwMZBjfHpjsdSPsENZV5fhHXy6nqbnFWZRv9mqhgJgg1Nqr9qiC4oo",
  "key6": "3zupr2VAgWEXt6vVRZek7BvAF4zJ58jcwTk1AeeMKCMCJkMJk9umWAzaNbPAkcXPzygkcjLgsFaQ5iCQuqs5qv3m",
  "key7": "5UMvkJ8M7PtiGKvqkCPTSJLJivCjSJf4aiov8yU13aJRLa4NMom1JzsFk4CfU7RtuPxP2bHxRDSYy7pJgkEepHom",
  "key8": "2kTyatGXWv9TfMHgXzBbZWaWtquzjL7BnGmkYYBz37taL8HqWfm9UvSumugZSDWF31P7ErJXzQGfFLr9J257tdXK",
  "key9": "5AjUAWnJ1tkEWFiHUUrBZsFFGEoqqEwheUdWdWny2qwaipLonMs5qqzuMiR4R1z5NRjF9iCfnhangGemozj5drSu",
  "key10": "3yH3Zb9w7aRn39VjHmUQuFhrJcgmzNQt17CEGXGBBqwFe7hUtMh2PqsYART5NgbKVLLy9WThQZ7Kd3nRm6JpFdZk",
  "key11": "3NTDZ5XzZHA6yc6hoCmmYBYdVhgD9cCmeGaA9QceWdGXzqGtztnvAZeXnJYzmBKD6hDDmEWJSpHy9ES73QTMTcqw",
  "key12": "475NEDXz3Gy1tWWTzwBAbMMfzthPkU4RwQhJ1qVz8KSXCNCN1zy945gCnLRpCkqk1i4zpgH7mh6PNkYqRA26U5ym",
  "key13": "59gf1YZQfvEKKjBQjZkYS3j4QJrgNG4xcycXBhEBY5aqrpoorzUAx8N4vDX9KfeDVftmVq7jUmWe56CtazCyK82v",
  "key14": "2vxqq9UZPTmPvZPJWzBfoH1DeizqjEm9b3nYZ5S8TsYYbzvWxsVt4XJRi2ApJCvAxW74Y8a8RwQMubnZKjkZzsJZ",
  "key15": "67nZowek5KYn3dsjQaLSthXL84ng9fwiPxU11sDTnW7NqtXSw53a6u8HjmmeCgC1Hgc2ggKEKK5JRTa3NxjwwN3N",
  "key16": "5Ynoy9VfjNdGaqBNdReVpqRxLarpYPdNETt2aHrLUdXFieGii4cHY7YPfEzEj64U6u7z5Rm3SUpqQ9qBrdjZZW4s",
  "key17": "M6H27uJ5JwGgKBciKV532F95kv1J2qhBHRVEJnQcYb7Dqpbzy2TWtabsv6edqXeKxDEFk6DT9mhrTUCdoipHz9T",
  "key18": "3bgo9ftrARz2mWahkbvowsB4umc65FQEFB8aTqre12HuXVKVCXfd4ixYaXrvZa4C4znoGH9DpzNv9TFkyPim8JXz",
  "key19": "2uKs6WzE4tyibFoWdftLhKsdVnZh5hDJokdHmCqUHTbZ7AQYEaYFWVUsoootoJeSUyEVrDKLKKycLUPTQ2acs1an",
  "key20": "2sniYRmsBVchB25e9KzP9ZKR1jNAW6FArGBUgQJtS7hL7x4Trk6SBGX8NjCAttMFfWMeHvVajCjM2ibgwcv83oic",
  "key21": "2hBShzDJgYqCtmhRwWGukUpQsu4jFLPSeEwDgyjzVwjpBA66xLShPkPrBFyfoBksxtCMCw9bZRt8NYJJzUL6tKJ7",
  "key22": "saMKxVgquNcmMRpPHjmRRx2qV9aWVFrvLGech631YhCGvMZaFF3eRdR2QK7aSNY5e3WmNtDPj6p5BYzKEPQzzwa",
  "key23": "2hDeXgcjfay3ebLnV7N9dXqqLma1LNYKMMapgsohx2LLy63tChPLHedbpezVBKUYZScWEUzZodpbp4R5zMCpKF6k",
  "key24": "236ZKwTj2NoYYsXB2sdNi4YovQxUGR8YMCb5AfXZqFCBZTifqomvBbrUGX34zEf5GkHcTqCStMe4J8t33NRspUXR",
  "key25": "4G1NYWfsnY7qxdGLmy6YJVPMi3KSvbiUKMYKDSftZMKhBUSzLB2MkfmJ56sEVD72onXAoAz1wJFYYg8UqNcTrcf1",
  "key26": "5KpTLb5gXxjRrAgC85YvbeHBJiBC9mmASrXdkUewqr6P3ejUwz1tN6uR8vVTV4TuAwKCWGbrsBtXWgDYC1LR23VJ",
  "key27": "5eMNpEp2RPMMo2vdYKQAKWi9pE2b5SEWNLn6ooQLJ8W3a7GUcF2N9QxD2kTh5GDosA2zijnKHsQA8z7hEjhwF6yx",
  "key28": "5ZMGnkQPy9bkZuDa6nE8nWNKW7z1FfDZ7g75fqSWHXpewoRSPzec2bPt7jcscXpMycfEmGEnNfrXmSFhECJ8WWmP",
  "key29": "jXE2hgf912x6biC7xZY1aFeFGZsdMAM1CFqzEyVv5288heoHDVXUAf7w52CAcWpLAh9wPtaUu5yHeWBhBHLhvGq",
  "key30": "3rdWpuehH41F9wEozPHf1s25FmMCQyTspVWvot6oDMVhBcGrCmt61PBtWanxU6c2bKdBsTqndiaH3Dg5aFUKDa6m",
  "key31": "v1C4sMNnPgJQoS4H26fEby3qr3t4QFtbmCWExjq8fwQFzav8e6Wan7ZUAKEJPac7MaxPKf7YFV4numo7DQ5FULe",
  "key32": "4J4XSZnTcs42qLgiPzFj5zkhVewq8tzPtamYAk6kybdaMmXBWuA1HxedsvLysFZGpURLy4eNncRw4N68op2yjBDx",
  "key33": "LxbkctcS7X4Fhn1G6YduYNZn3ekUZAVXvyvudu6qv2EFrfenCnHxQpF68Yi858Gx6957pGs6Wzzbgn4YUUiNmoi",
  "key34": "LpiuNC9umCYpRt9VW81wUSMd1Z6c5mVXmRJWZZZAyxGckJzNgPzYGBRsyMCUSfW3W9Q13ErhhsKibrU861B6Xdi",
  "key35": "4FJKeQz4iEqG6zgwJGkdb4h3NcqQYYPRiT5Zgh7LKB8GN63ACSrkxxTivbY4Y377C3h6LbjV1GzMex9agXgYWo7J",
  "key36": "5xKQzLrC1vFTzwVRnP32JVfJgLrhZwHafmAkv1pEvKxrabK79cmmeZgUfrmjgzRrXTMe6Ls5wYYRr3MF2x2mVZqs"
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
