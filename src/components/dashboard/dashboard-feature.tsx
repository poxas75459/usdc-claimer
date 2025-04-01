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
    "2dPkapSqoSmqqjS6b7BuFufb4debieQuoqFHrm4CgwxGdJF9nZb4ve39JL9zhk6AamD4zMwcmuu7EwKoCcLf4mDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nygQLrbW8RugVhR1G8cWcWgXNGWrhDZMngE23sgNgfyNJbb6maGgRqMCtUzXDUenGGMKKf7xHXeCNkbtxfTLpLW",
  "key1": "4onCBKzbFWJNdcCctDoVvbzxAqUVd6XZYcUqTx8xfhSMQT5J1EAzJAVDdR1qQQEDjUHpEA5FFgjAQXR5An2aA4An",
  "key2": "5px33BzbxADZs9rNKHECdY1SiRR8xYCSBoXvTSQGjHtZG9ejhoAMy5n3Uv8sNTVFfM3CaN17nznKdxmAGp2SEwzn",
  "key3": "4expPJZYSRRbUQH5X2BQZrGnR6VgWRxUufKpqJg96iZsABBrZJ4rN5kHkSfNJxeW1mgX6QXHTTdK5wg8d3SVCQCx",
  "key4": "yGG1w8stf7eN4EVwodf3U6Q1jMwfajARsQSArD9JFbk3KYs9ZxUsJEp9ipFB989rARbRDi8Snyz1Z7J3MJdqkFE",
  "key5": "4xXLFBhMgg3UGPWoFkzNBoQZrPFEzJqfFtRVQY9KPi63V15VLNuM1dy4a4d3RWqHH8v3682YticmakrZ58oYQiep",
  "key6": "3zQ9CUZQdmKU5t7mt7JF7NCUgyV2pmvnqLyGmh3CVxx4v9Q5dLNC2dLbEtcEbZJWX8S1MQdVp9LDty9Puc9KPkqi",
  "key7": "DAdSbJDwKxHqdPvUD7fnpHeC4f2xgMmyShH2nYGCv6VnzRnWZjYWAJieNsXnH9CJUFydomrxUEMG3ibEPJRXLtm",
  "key8": "3oLNJsXqLgBeWLHkwd1Ry5R4eRYvVkHsiDmjPba4FMWky8CCPsT2MEuRq3U2e9JiRfRowi6uH7Hmuhg4WNYnV7zk",
  "key9": "2DPsgUHTtATDzTcTbcKN23HGBh3rYe21kJmkWqf2CiQzcigo7SMSYarGtXdD7JigPssd9iiCRp7CoT9SgwDks4sW",
  "key10": "2TwxphRnFDx4wrvcECZRUHs3MVpHiUA1ucGucZ5oAQyeiXNdYpKdLoHJuzxPA34q59hL3udJHndnBBoWNDdaz94o",
  "key11": "4dRgmDwR3TwiRQVtwAfFcAdwgNCJPn9TUvCDGggcMrGLrwzRPjZPvHTp5X3v3HcPdKvQAdpASAvBwLErprNtxKJG",
  "key12": "4EkLLbPZs5BW3rnLBCNwfoDFzkEtzWSz9NGHWMRwwYx5tjWc17yHqTt5reZAFUWNf5NkYArFhGCAv6dkFqFi5Dek",
  "key13": "4vsuQeHSwu7acSVzgPHDQmMVubG3H1VmcJgNXNHYu5ypPyo6DsLgMhMyZAB6iDN4wwMV1qZNKqAwneGeS7P54rq4",
  "key14": "3sU1YXTodSXF8ppzZodKh4pEFpM81EGWkzG2XsgDCZ4HDS1uvsvxyKqwnkSpaXjjiWjd5esJ2VMiKidsSv54Etr2",
  "key15": "5DUPxBytdB2WZW645s2695jtmetQoQbE4kx8wCvvSiGqi5qePHVJ83BERGd6JNmjrf1zQw978MrfXjjJgb39dPDE",
  "key16": "5PjdTdkj63y9gGMFyf3rNiKLyegDxTNySW6kGQw26JMuLZ2yguvzgPk2LaAF1cMHuLujADrVDV7Y8iey2Ww94o18",
  "key17": "4vjAfRu2iLQFyLDNYRsdXq5vd3YcdSzyn9m6xv8JvVnpuvR3c6kZGLEALj1RRzkmXUshygEJ2MAu398SxLN82VMH",
  "key18": "7sfxp6miExy9ZLsj1qQSas7UGQpjJAyQAFefVa9j6A6BimiPv71K86G3pSFtEdGgm1jv4RsnvNiG9nUM1GhyFeg",
  "key19": "5PJxscV3nUMW2d43D5dnSC7TNzwh9WrmrC33gZdCSn3EpSAZ9kkVb4KWmciPC32rCxXyDMekcxhL1TdcdDjJJBSY",
  "key20": "2kvsYkWGsHni8VNamLrUczHSwU6NX6uPq7maZpN3XdMMHHLU2om6Km6Dni5bTc8oKZtY9omXZr7Rt6djTWc4rhtv",
  "key21": "2zLtBvjmV7D2NvvixpPrLrLopkC8JsvPLmTrjXw8TjZUKq3FVNfH2pUvs3pL1TDuJycbUnHZhifLXnPvPcQY1toA",
  "key22": "5R5kfJ9sQCBYAcGNsMxcpDjPfVe9eE28tHDAnp4JVUXMUbrVnxtTHWayutV3ctg4aAAbGVsQMwQbsR3GxpAdj4z",
  "key23": "j2XbDLiV62KAcGLAd2FxEY5jNfqyR4AxgbgWmjTCoJPjLS8VJhFiX37hKF6kRNo851p8rK7KCfMHjv34rCZaqdg",
  "key24": "2F2GYBznyn8x6sZKaAru9BS8neeXXAF3dF2cM79haKFifSCG5uA4cBGU4bsRj826asg8XKMA9zXJbPnQmd3KwDAh",
  "key25": "5gxrH567twpjGazRKkoeCR55oBoJ869TxGWzVNZB88FDcgVsEKzFVghKXfjRjDUwTeYNPXxmoRfDbTYE2v6AwAkp",
  "key26": "3aVSGgUNYMXjjD2sfBQUAWPtha1AsYAG8y6tpiJNFhXwnvfeBsA7mvUW6j6ebQJYvnj5tP3AKAhkTicBsiFWns8q",
  "key27": "3K8sVEGUaDG55GubBFQx4m349qidX9xfj2urKvrFDV7N9CKHsDGbVuQC1LLFgLkZDuDMzHJnEhi2jdNixX1Z2XtZ",
  "key28": "36KtB3646MWLULzq3DdFDm8jSXyiX4P3g4dg9kjXvbF2DiZmeoj2kM7b4FRsM44Lt2duqTYbuiazK1ZCmfoSW3j7",
  "key29": "5ctAw1QBcgVZnRKTkeYw3xnyL8pxchXkCfWZ8BvFTBarCL7QKAPxJdTTe8gaznALHx7vRnZ2fUmY1wiw25JhoE1N",
  "key30": "4MYuDqTXC9hJLuYWNrB1xNjvjMXTcu54vLLv5BaQHXnU3KoH9bbhe35frrGNmEpcW86SZ937vAmBA2NRkaz7VHqc"
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
