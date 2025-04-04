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
    "3Qkeg2ViFgrjXx9aK6GHMxzK4JYVC4iiVeGFYJ8iSFkknXBmpyUnAKcGk84UgJ68jVDofdBCoQb9rBNxGNZQChaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DPTJ2TR961CJjDCS6PqkkTKjh5dgHXiz2Qay2BfhpwuGEixBQurygpfYChzeFJqi2JtjhABTituXn2zf3jVQDmv",
  "key1": "4bZtGbhiuYwyLDAAt7CNV828y84ET5RmTjMwz8hkVyP6YeSVTDia7yZZUrgVKnJA3hBbuYxTwEYwTPruZsJbPqUn",
  "key2": "2oEfLyvNcPjigZmdsouwmLGB5dfcDkiwRLR4r3UC8Cu1wJheR9BbG15nzHd4FfoL5PKb7aHN5vv5gxVz8KkH8dNN",
  "key3": "2qA46ag5oW9E4KpbaGLxhiPUXWezV348ercpmrye3D98st5CLydWq23DCxQKXv2A9istniyyv6FLLhr8dmyyT52W",
  "key4": "SukdWSyz5MyvKafNXUCMXCVeysQSKSNisdBq73qxHoQrsAcRq3xmRhrcYRJomGn2ESuhcQipekHXML3cw4gPhCJ",
  "key5": "2f55x81s3arsM19Pp6SGu3o15ftN86hQ7GUzZn71eicncfC1NWhBtfjnz9zrNyBG6ife89AyUPKZ7UXq8TKkFS7G",
  "key6": "4yqmPu17cActkCTbEKB5MdwzE64gVRk4QFs6EFBmwYGAfmwhpRzLd2T79Q5dXsdBV1fkZRkcrj5cwcCATaAUi2Nz",
  "key7": "37pvfJBPa9c2URYNNTgPwJnjJppqZnBmEyNdPbqvbSEM8TmagQqcpVtANZcvgp9wQh6yjM4JyfmzjHmFGALHP8HP",
  "key8": "4QWENzQxqwKSBEWAQtpcJmxockhsZpyCCUcgzQ6ewgYPTma4UTWqPPUemxhRQX8gSPyLw9ZGoExKDgVMjPwQPDMi",
  "key9": "2Cq1urn82WNU7WfCBm8Xsghn3B3WQY1AsPuqXmsYK1qLtWPrGjAKA74NtpX1hAgEArgCBZM4q3rRN3oxVdYXMJPa",
  "key10": "RZY8RCEJqL1YwHbGWtT3LyGuqhYkSaopGvAn8poaWp339QQZiuhF4bFdjBrYtFN6SyYtmCLAFbE8HVLszPbXYyB",
  "key11": "3pG4Ms55e9HMD6pDWArzW5yCZiUsCkQWQEw4XdmAX3m9cNRZj8zoWvngc7KYS1yGV7ZoVTPSfoFwkvQms29LAxXF",
  "key12": "4iN5pBoQKsqfvDXAehLmRr2iH3RN8xz74FpRazhZMUhvVVfYieb6G5dhYdxMpwecaWXKX5GgGoHr9v4EeQj4ixL7",
  "key13": "2cPEiTYgaj3qkcvbN2VFFH553X5htntp2vpvfnhm7Ue7EU7E2qZJudHvdQDWdX8P2XYCYQ1ADzqtdN77KtVitwnm",
  "key14": "4HqyV9DC8TRDVJx1CTqwuuyYvrJxt8uENZYEU49Vwhy5th6tkzqnxYLPGoiGW8r1eCoJ3WVmC5dUorVNSWzhVmBj",
  "key15": "sHfT2xKhvyXkCLm6Ait4BnJgJVw36oagBeUbdXaF4uKVtGZRsVkP3hnkQPv2VDscQjL8s7e623yCUwvjAhRCEnj",
  "key16": "26jcHh5g3qGTM5BB5FqwYUa2tVXFMg1q7S1xvtd94dV7wGwHA4HJC5A4rk9CtvM7AvighfbQC9jMSXWuJsquND2x",
  "key17": "ZsDbT6xj5QVEA5rRNdHGr5oRk2mYvYEx7YhbvzCAnZ6Ge6YPH92U3hS9CL5qUdpUayBg2hm9vF1ibPZgQgqEszf",
  "key18": "2HjahKt2TFatksdAqba4UvhnbZUbtTSEeC8LPsZ6JiU1qVBm18E6vTAFKAsezV5fbUP8nxLG9pPF5uaWhcbCEVA6",
  "key19": "4w3fTDAELKcAqezi44XF5peAZqVz7VEas5ZUnVU538waPWbnVoZKPR4JhR2iQWVg4m8sZ5fjHtQR9FkRxsmfrmaZ",
  "key20": "5GnZZFk8dboSSe6XzzTM1Fwytb9GkFaMEXRBfE4hP7tNWkbF7vjv1rP7dNHLfZLQajR7yiurjRzvDR9sS2Ln4L4D",
  "key21": "43fJg5P3zcj3PhPEbKfxPRDM6DvrJBvXjGtm3nuD7scBS2cRuMepL6m7Hz5PabXh3u6To1Fpp77cE7Grk66MDWfj",
  "key22": "3jQ68DN4DHbQJvUkskWjtz5gpjPUaR6hHx6jz3AC2qLScGdYKUFDPMAVXH5euJKb9oRN7bngBBMtaZZMSHCd3CqK",
  "key23": "xSK2FQEcoP6fVAMEr6x81FU6MKhvinppYXyZ1kE4XgQf2y162tHZV1vABzkEcLyvwunZem8k3USYPNQzSUNe7ab",
  "key24": "2o7JKvAomFtCjUKCdEpTqYFf7NVwRozQTGyn5Tp9Hr35MsHDap1FEaqGDjWZvzM8vgJ4Rrx4emMLQ2n7fuTw4Gcy",
  "key25": "27jyAm5zu79UozvdLTQsEk33f3tHCQpXNG89xjvyP2u8jdGrHkgoP4uoxhBtSVgkDvKRRxgLtQpgnUJrXY5zTjki",
  "key26": "3utNyV9dVtfVdbcds1YSBzCQvD9SucJ38otsFyEcTTq9XwaVTVuhuWmX7aNqZmHdu8m3hR5bwL3vaN1oTQVkvgqD",
  "key27": "3kzLB18Uex3iD8qq9r3AD6rHf4KY4u6GykNDArpx5rnH2EgG25dK1DRBYVkVs8L1MQETRFpuYuXZhzetfarorG1f",
  "key28": "3ESfUjRxDH3hCvVsBDs4YHcL59uNvvYiDQQPRjBWfUnpNvJiHkhvCMKFtN658zzstA2RGtFNDjfZdY1aqP3ZumCU",
  "key29": "2XcXmzZ5ShFZAzosxnMZQyRd22tmaBLXNWQvTDDaQ1GgVMAcz4pmaPm6ofcUxmTuFWQPwVv7Jgp1TDdWJbvfSCig",
  "key30": "NCW6UYaeU1yiRqNoB6K4nH75AmTv3EVAMjbPpoGoawz4ukA59ViTAMwEaNYGfLoMd2bLhha1V3jmzupNYk63QRD",
  "key31": "3JSPb1tBwTFJLomb4hBQEJZBwveUo1mP38hTtApt7UaMYaTRQSabwhhWoA7nLy4i2HwbLgBniygXEWwQ4VeXTkBR",
  "key32": "2vK6VaanrroS8DeecCbNAYmtkSsKU9ZuJj5VLdrgCNQPPz9G5h25kCPxa3r4fk7T9V5z3GDdP6LWihUpAPrrGZSZ",
  "key33": "3JDetngg11C2Qv5RiPC31Wzt5pk18RoAsBkFUSWHtVMxH5L8kuMepGqivXnYXdJ4ZP5a6NHGmuUKacpsKCBqwGDT",
  "key34": "5fYg5T5ZuycTUGpkhPAArfcVLry843QsXzAB873KmE12YJML99Aqg5RH8vRxeGnB4omwDfJQUe5hVdhuLMzdS7Ea",
  "key35": "4i4FqDN4qEezA4j3XsRctFZP4XUprjLtZnG26Bc7Q6L33V6WaXSoYFj5RRU7Rv3xwBbTMVFfETPBjNv6Czjc9LHN",
  "key36": "RDRecQgwvUNU3XH5ZZdfRBwtwLjWZ9HNmZDxJxTRkFyFRq9HrYAbPUUecGMkCNdPKZ8NzKNsdZ5kNatDCkZP7W4",
  "key37": "3hPUupefNpiCS8QVtroGxx44d47STkrjknzquMGaAktYj7RpoDxBJNm9wdPF8QM93zzQUALMctXfU94YSrcpoQXU",
  "key38": "ZGamCkD86UHrT6aZHYazYnueyh8eSSnnEFkkvNfSNAswdf4td7n5sUYZrYWYbgPhHmeGStnonUAqnCEncMhZzJz",
  "key39": "dkLVCwDTHkr33nRHFzaKGenrKCJUeXsSRoTCm6zuLgNx2MP3dRFES8CZtH2s9HCBY7hMGXSemtaNEg9kAJsJEDM",
  "key40": "3iPWSbgaEVzYyc456S2yyu231boK1p8hje62zVKHZ9soqwLQD4SKZs6GbP2xJ1SGQzQSRwvb1nhUNfFdys4ayZhY",
  "key41": "2zXmFFpircMcPvXAm134PTwmEdtC4mUac7nqrUjWX9aNirhdZAezk1v5qzjqkApvPSbgwuakEvtwFUZkLtrQLyg2",
  "key42": "3dGDyubMTQ3LdJbJBrteTGB2mUvqUy5PxMq5VWdsxHH2dyQHZJfLCmRYaPKHLQ5LWq4Y3yxB2ZBHSpjUNyzh9EwY",
  "key43": "4KNF59B7qoHxJ35UkdsU4tj7gQUq7mTbQa6gpfbvKCrU1QhRUjQhqyPMwdu6jhuDAvTnR6ejVfZVjh64nFJRLnn8",
  "key44": "8s5Wm32ZqvB7SvkD94RmVJ7yKFd82FVTTq9tv2BFfWnxrs272JMUBbc3iih9jKdcpB1Nwq7HQqWYHUjGvQLQXUc"
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
