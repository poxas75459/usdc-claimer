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
    "3EEzJxq4qrMq9r2QLnmLjEFmbDS1aJwLLFWUUT179Xgk6Pb2jAkuWgFPp1wPtQcog73fpjiEQ1hogngHffK4wSro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "293zATmkgUn8RWMvzAYH3BG2doxFHwejscimiGXR2QAurJKNngEFeJzfKNaoWXNhSd563j11eKLcLkaPoLAhWvmz",
  "key1": "34uF7WQoZym1FfSjsU4g6NsUhKCVtveqHoFGyEgn6bfS9euQZE8vW1Q79Yn9LVzaeRfhntcq2Dc6G2AYoxpkmzQH",
  "key2": "3kAxQZe8s3hWMx9TqUYyjhULGCn65cgG2RdgY84oxdqGD3Lc8Jto31khd6DMmwwkhmTRmNDKQSSpCNdchv2hbPFi",
  "key3": "4eJaLJUYaHzfqY1VdCVvsNXGLYvz5PdpEfMofWszZfbXgiyCfxR2NF2as8kqv9ThDBGxmCcan4bgTP1jVfaoJ3fX",
  "key4": "7CLMGZChmkPqguixzWXviQkReBuEZLKY72FJ55nXVD6Wqbpdu9uhSvn37RVVd1FuJeV5zRCLiJBY8YwwD2NSNsg",
  "key5": "5pxVsjQ5gMv4oo6dyQghwoKQ9giChYyetitH5u4YqAGZqcbYr7pDn4U2wje37XVxKqK3zvGa6yxFqxaBg8tyV5iF",
  "key6": "CbtHiTqUSx7LrYARszkbahoPcSR6a7VvPDDV2jPU3EdWN95mRSty5zrGn2HAF833VDMqNSoaFbSrvQVv69yvWuJ",
  "key7": "5rsShiFJ8HTfQQFCii7QTuscfDVCwRhT4oCnF9HJfxYrT9vQDGii1gkrJ1dxvNqoDQPXLUtD7wxV3vm1GLwJhBbV",
  "key8": "3AxGYfF6mvetxVZfv8NY72CJmzidtJnkGEKH4sabJY6f1XQRvycM5LRcBuD8hhAhQ8WqawRHL2xh1zwXiAPztU5q",
  "key9": "5mzck2vqR3UZXYGbkgHvsfG6sQy7rW86nQEWf8Yi62NEnC595o8TUrTKQErrakJ5DkvEhizUpduJAGLEdPA5X9vc",
  "key10": "618mc8ukhTRKRhbt6gjYebbxnBKTtkPyV4afu2Q4qPN7NZUhoPQviA2J8Ck3W9uHjTCwnsYaNU2HmhEEZouxaPTg",
  "key11": "2XAbYzCqr1noKQeRz5Gx4cFnfeMZUQn1n7D6c7yRmVuLDkXXYFMmMC3KE5rCh8a2HdbXQTTGiEsph2fVZsNBCcnu",
  "key12": "4NRzD7zG4gZJXfu5a6MPeAxB5XR8PJsrHatZA5oyRaAxY6HpfT5ijf9ZGG8USscytmgrbCXLvQ7tLUWMAeEkg7RB",
  "key13": "5Wsyb1UzN2wz23Hw1s6mAqfduQ1bKSdCRuX65RAJzakKNSbA3xfk2sDEAAuCedKLAsctTiNpeaDCVxFo29oYz2F8",
  "key14": "56j13pPUWDmJCtkDoruzZ3NxKHUPob8mhKuYfESR984HbP2bVqRman8BD2qFm5gKkCcAyfVQb835gesmT94jNSqY",
  "key15": "3RYWibEkKgAFq6H5H7UNnw1PA5utsLn5Nr6iGr9E9EPxT3L5ZWBPvYkVjQzfPeqpR2HujjoFs8wBpTmQfw9LuLNg",
  "key16": "2y2c7iEtTwZfbmiZbvVrVEtsYQu76R2HuaQ2ipwbYD1V8KDqTf2b2fUUuC9tbEZ3JJp4UkkD4VtPC8Y9XafwXG5w",
  "key17": "2fyRW7TdduRkqh5LGgVRTmAPKZBhnVcrF7SUoo14agXKsStYnakbpopnG1GdR89pfS66vjfPUfa1PCHHuG8TWcm6",
  "key18": "3nRQGu2MBMsRAmh3q4ZpC92D8cLy74YHUYGS3TbgzAvE3pc2Goedebc2szZegyFSw835gs97XceiWn32XBdrcGz8",
  "key19": "4t6x7pJ5CYze2nuNSbAvHnLWwpd6wMEVLxa5FgiK2EY9YdxtExxBPqRddAz636tEcupaWMLBaZK8LZ8dqNd9XRRx",
  "key20": "2WCYrnJF4FwV1a8wZ2S6d9mAgJhe71LTtUF76bAqxF5S7ZzNZfCVLGz3ec2LmSEcmiYohiehuM4Fszu6WJzdjNsU",
  "key21": "5LR2MmPZPZU8BTSEWpgL6BpVGrNdfccCRxS2KPqWd62NQdDHYbBiSRhJ1W6UvjqGb3UKvtEYsHkw39Ed7VbVMPSq",
  "key22": "2AbKcBoLe6KhjsDZ2rUagmN3owfqUMJQ8nZguoSQq2qvJoDL5ekYNUbEFhHmmbdUXg5MDAyyb2W7LmxHChM4Vz4o",
  "key23": "M88MNf96He3xooybzmMRN32ufG2iNboEi9CMRqcGAiAZPJNWisaYTXZvNPdEWqnMTzDx6kvgSyYcC4sVHpCX5m3",
  "key24": "2RdPhZjZPhY7t15u4DphcTYynmhseyNAPXGb5GooM3kPkbMf4TQmhKcSpzESCZWgPyVmeyJFHhdfkkPHD5F1J3Lu",
  "key25": "4Fj2uEYzEENER5VWqZHvtu4LEt6PQRqBCkqPmhsutsRmjgiyBp9zTiPZKQvY8EyzHQMgAxX4GfHsGca2B4q673FP",
  "key26": "263GHKx8D1TyKrCsjsTDMZtZifAa3nvAya41WUtohqotDMWd1YvEXV3kbq3jkKgjudBvn7u8ey2wkS4e1Aaoo2TP",
  "key27": "rsnPzwL9AzRnk8LJHEW1yoje4iVDiKPJZnUwBTDxDcBZ6JjfS9hVB4TRRnqfbKkh76jDzDkinHVYQSGUFH5A2De",
  "key28": "4f6A7gd898fNDQwUPvLpog9BYyPuK4pENLBMjEHmWS3W7inQPKG1upikxaR6bqgmfaLaS7xj1c3Qkis8ogWqP7Pn",
  "key29": "2EzErmgSVAapTwdp2jje9RiPzXP4sXrFKfrWVbkPK3hsTw96PUuGkYLeHKdVjm4br7WAQdUqWFM8mp12iUDvfkTs",
  "key30": "4zAQunJReyMnGqAwFh7AoqfBnDxbBD5WiHXxzkymLGmyA6NYgeziKkyu4Sxp1DL2Z3MmTmcNHdMNBqG9ovWuvit4"
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
