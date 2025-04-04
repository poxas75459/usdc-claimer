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
    "4BQPaihGbnYzRKf3PpAgH28SZvZ3MdhNb5LZ886WUfUHgd9y8ZcR2Urd7WEvtgcaxPZdAb8VJQH4koXEaoPs2BMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S8Fn6VWyecy4gXJfvJNhpCBQQoYamNSumgWN9GCKXL9LELx5PMNXGX56c2rFXSxsrtVir1FBGkcJAdmj6kSRYhX",
  "key1": "24GDPxAswJjGiAvcxRUJE48vxLhA6amKYLHgHE6KDJfwLfJEbg9jPqcfGYZjHxcSYo1HJ5M93fevMXuR4uG6EX9D",
  "key2": "5va9LFMHR1yREEVeUMTSUGtHvvHwDnWpt56Z89wow4NmMjuMGRutR3wvsAjEqADheJs39shjig9qUfDfgBiMB1st",
  "key3": "4w7ZqQ5mNHbjquT9EqsZw5deNTpYB1pqU5SQD7Nm8zv2QBAEy2D3whCVZULxYNK28TRzmzVvvxmW98kje5Zk3ZRW",
  "key4": "3tGcEoKdLLTS8UwAcEAnKMexr1RTQFCqQpJnwLybmjzpPWAXpBK1kSaP3rPhfs7nh97uZdqZcj5drZWH36QeFaGw",
  "key5": "5nxz4oRs5E8U3953DgNJctcG8hC1o1NJzWKSeyJZLULKhnDLjM2LadoyHCs7PZ1mRfgystgsHLwqZsr4GuVrB1tV",
  "key6": "2URwceYMDFY2XqT74cNfQhsVWUP1riNZEVkXBmhWeXL8Bv13tmZc79f1QakzXCQHb1XddYNjRHPiXLkCRDRNCTQN",
  "key7": "4f2EtTnvGUeT2gR8YHtDskH5Cpj1coKTqpyfbvLETtNUT1LzNWTewmTd9oBxgxK7Lq34P7MrsyuPHL83CuJSnBuS",
  "key8": "z3cgKqDxV1bJJUVJUsnyDZzoCXb9BAVz5nMT5Za2kfeapMis5ai4zaqXtTLP6YtZEhvBqkKDiCuJc4jcmPK5SQG",
  "key9": "2zSmgM3wuxyEkC45Ns8Y8Cj644uWRaCPaZv3vfmVaxMwYLPCCxpHCVfUdqvALf7BSStr9GHYwY4enBL9zSBvG8r4",
  "key10": "339Pjrj8cAEe4Zf5dE85W3pQfFfzubjZF5LmGDnkxFd1nM4kGhuLUPNoHdDsb16sRNUvrRLiPPG1RexrGRDrpR8p",
  "key11": "2PpAXMrrXfPzav3trLJCeLYbokHnn4BiXSUuv6RxqWsyztnD9MLc48BjfM5X95fgjaRJDftRHyBFvYwXZtpkP351",
  "key12": "Ui7QEyeSX6ZLyzUqQUDfj8sXyBiz7enhVRWx4Tz9F4RG8a5G31G6wx5Wg2sCfdaTz3YtDpVRaNVLoiC7cmAGArj",
  "key13": "9J4ntzcNSQbYN34NvAACL9QzzdjTx6iT4hju5jQxS3NX5JJLTXjic4cPUJoTKBm4cjeUWHywPVTyDcuPgsEvxrr",
  "key14": "5tWSzhhPGpg2ygxPeCD9FntbfZBGAJHoxmv2tXV1WX6XoXpQ6LSRxRjtnwRPgcyTf9YQ8WwUcSdeghcBMo4QsQQJ",
  "key15": "5PifiEJzQ5i8VpbsRwnRwp87WDCSgZwtVjHW6avx2YXFwgK7FkyhR4E4qYZLyHevCFHkgqnM8kQPT5R2HgnEDuFE",
  "key16": "2VXPXHThjskAZpBuvs8zSG3QC4b8iHdsJ6ecKrhZKekfJMeVnJHFyS8jpCQFdZpUEXmmELArEVcde1z9h3bKTeKY",
  "key17": "5bCC26PWLjXsDcBrAaGGJ5Mj5zykMVJtnLrYYZ2DrBBYADodZ8fMsgAeWythqWQW1mR5PUSUiSoy6SB6a3a4nY3X",
  "key18": "3mgqvHNP4xyMbySoCwfbAVYU2oYavHZux244sN41Nqn3EVLPo8rfRnuNDoK7GEyKAXLFEvavZtZmoZYVowHsxMDd",
  "key19": "3Jmx7SHdP8PSuu32oZMaezRMBzEruqfpZdALcpgBBYosCSi9kyPDLjHYdNdAk1Vz4T9eYUVwV6tCuVQSRj1thaen",
  "key20": "4Ukd1r89uRwooUj2SGZeNCQz8YqLMY7o4D2TPSJceLJ8gJZpudkjsJcjcs4kNjNA1AuiLfgYZgWmg2fdtSfnkbM8",
  "key21": "462HqNQHDRp4JM4ri9f7yzuZC7KuDrihj9x65bvunrki9sNzE3XmArUVxubHaGG2YcXxJGG2DM6Xx4c16s373eFZ",
  "key22": "4jSjBdLUiD4VToi3b4BhZGjikg9kWgk3WCuDs2em3tVTMCviVwhwRxcftnqpHfhPocEyJwHyYgo3A8ouNxyn9z3c",
  "key23": "4ejtxRpZesHau9RRjxopRSxEWz1Mk96ufJc3Zw21vrSavetUgNoceGgjNoiuBoJZFdxo5cJESsFQXYQe6zy3MVr4",
  "key24": "U8pyGcxuHnwCZqH3JLe1Svq3TvXRM9JJTeSYmH8dV9BUUgLoJHuWMiTQAXXhrS9WqHiMcWquew4n4SRWGqyxg1Q",
  "key25": "5kuEWqk9nAKt6tEXwuo2Ksi3Ru8jbXPiTbKX6AS3K8iGSpGMfab6P1qHNv1fYUFyjUp4feYffjEgYsyB7r2nsNdS",
  "key26": "5VkZhyXbB7Bi6g5ZNntbfpkusAxTokijGBVjusHqUSZBbpjbaLMxdrSQC4h4XUcXV1zvUVnAyrNJnMkexoyTzJ9Z",
  "key27": "5VP7ByQ3525ULrk3hx2Wwv4wKqyJnorfM9Gi6MterGSB6mnGNnXt9SW9a7AHpRJegL3zPrXgf5JRNfRhLYUF5upE",
  "key28": "5ecDEz1BV5jpWB1o2ZRqudaFPyKK538GLaV6WEMk7YRLRVX9t81zyMpuXeYuGVUE3BMdbxi3dbkJ7FG6GXjK3Jfb",
  "key29": "qE5k9in72vQgvpejiW5Lq9UEpgUx4j7bdmYvKQXeosL7jmET7H7t4c1iwpLDs6L6AWbdYwzussbezyNjEFRhJY7",
  "key30": "5WRPCyZW49RPDhhzVD4TufTJz8uRcFE7c8oKTe3HVsEWnvV53LXquk96xxNQrdioPvJduY7EQZuyz92TLNakcP8s",
  "key31": "5mroY52F6X6PwCCnxaKCqevWXssw7AoKrpncWTSuixe6v5h68icBsQPftENTsDS5CEyZ3xu64pUvEK77qDJqGM8U",
  "key32": "52jk4Hx273Hkmn7VRR2JgerxXNbcqZwdi1yYrt6tB5APWrfQDyFHbgrbroc9WwMjanuRAuxzj2YxRATZSoY2Fwh3"
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
