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
    "3iXDsNa5KnRrwfEaE5AAiCnQj6mFPqQqafS8X472GZXYPUZLs5hE3dv1V7y8BZGU1XnS2XQr93FHN3UKgs6jcE8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qQ2AbyiAfz6JH3YWTGiPe6djfTGxC3uSHVFbCNLuFd42CCFW9azXswrHHFGDwm3HLurXX6bJvJr83U7n3V2fx3v",
  "key1": "59BzV4VHQ3e8F2XR11AKZi6UjW84FTx85efZskjchoBENfVB3i9ZABAHuezqEC8tWZVJ5858da8mhD2RMRwUh1KV",
  "key2": "4j3MURnxBgcUUJcGweM4jzj32KHCSFbY936AaQHNLXf76XZjx2dMW1x9Uvf9S5UD2xADpoTPXkWNRdXSVDm5Phxz",
  "key3": "4EyeqmDsMTZ4MdGqCfNynXbK9z9dt9858XUL15SchYqCC74aqfFYiZJi7TLn14UNaMktiBBd6iqog1De969NyFDH",
  "key4": "2mYbAjZcU9FHqhCDEGmAT1bmdhWhhzHqSZ32wJ5LbTudmcAB3n4FGuWN9GhpaFuveiq3BDPw9Y8MAAbTVffU7VMk",
  "key5": "4aM57NGRB8gK8LgAVoJ2YNwXg3q6wmgaWW931x2H3degsa5iik5fsRZXi4K3B1Xg6DqN2qeaNTxeXzgUGkT6APbC",
  "key6": "46qwgmXxhyBRtekZywpvNwLCoemuoqqqhPx6r4cPM1naDN2GeEpr3HfLM8ivA7nqBAzR9BY2r9j6idsoPHwcuyy5",
  "key7": "iWayohNSWRUiau9WtWcV6myNx25HZYGCNpKTukip9PiwUw5ASqrtJEvAsc3TbgDgWzjkggCr3XXvvWo2diDtbBn",
  "key8": "2TBg91ZE8F4uToCx8CWBYtQmVonJNqgCfYq85LH5iHuhpXPqNf25KEMPDkvwb8RdtPb3M5u4nuyZdKtsY7uwVXxu",
  "key9": "3tjL5vh6GWSHt7y97woJwkDs2yDfHFyBWNceHRmDgPWaddJC5S16bTzmbTzJk3zpyPwFgMCATKfqSNPdmM8Hr1Uj",
  "key10": "5YX3CBpy7qpR4FkmiUWG4KYAgzekXy3cNCpyuASqcqGWWK14e1K6dguhnhxzotTzPkjw3K9CKkE6PXA5LXPVqU7q",
  "key11": "5JRUwZ1RFZ9yiyqsaYCJnK3CP5Vkinbs8tGw6Ch5Ph4MZNRDa13j5SH2HrjfK1aMMVR38VrX57C3bMVcPDn9K5Hq",
  "key12": "5k9HK61urrTrMhDbyzcidtmH1ALTeRp1MRaigB66QqDV1TzB3cxxvh4hFFVbNeLNjp4XwoPFtVCPsh4HPCeK4tab",
  "key13": "5seGbRfKdmHBhLUCim1Y6Mkr7UTt12Q1DecWZrdcfz5PYq7o3Gbg3feNuAKC3AWbSrqekeuQUYK8m9npu2EDqMUs",
  "key14": "63mT2u9M9kQpjZBaxDw69LVdvChuS5SgoERuggZtKQD88UTrerzkzTGHppAY2ciMqmdhScGhBMDrnSUAgWk96cPr",
  "key15": "28FfC8QwFxQxVuQzEacy4iU771wQZ4s1GzDr7H3REF84WmG5QRwFhxmnByi8tcUsDPQiUmfhCGEKjnaw8AuPxMK3",
  "key16": "5MVF7oZFQncztYvHqhqK1ic7wYVG5S4BVJXjcSmjraepBvdR3Zfsp7Q4osvmhHXg724663cX3hLTFCToWcTV4dUH",
  "key17": "5XYNGfY5mhMogXoGy5i9v8Dpxt7NKCJ6NMWSG1oFfmjwgdrN9fEYP5s4Hj37X3E7899X3XN3QEhZzLeWD4eGfEBA",
  "key18": "5wEegJFQa4RZueT8tv3DdmWoPiX43t2icTDbv4HG99XSvrh4Bxj6sHg1ZhCN8VZRMtopPEM3bCiBmTm61dT7aRLX",
  "key19": "36AqPoCHYu1QmWmwH6s2pJicspNTscwfSZ1fHaQeJMU3dbe1xG823DhgwQB5LxR1hKot3KUU88QL9Wy2i6J3cEZh",
  "key20": "3cxvHYbdmHXvbuSNUqEmnkgw57JRtGjjbYS9eeFv4Qv5YhaoZRotJZ3eyifRQfELSPvRqxVZ2Q9YPqL7QFHp1AtG",
  "key21": "2MUu9wzskBhqhz7nLvXDRRX53SsRzr8prLobezQ8T93aHE6kowq2MNPkGDKF695TbD6nvc7tF4NN5xqEwxydx31p",
  "key22": "3y2qbXxxQZFTCBFYcyD5eWuNHXaQmsMxKPwS7bfNA6yspSqxuxm4TkKD7UN8QGgcGY7ghV3m21ZAxrmKRGmKJHWK",
  "key23": "5XquHzXkSd6Gpz3cRrh9jikTckxuqfGYMxjvgsBXcZUWRPDkUJFEyRwvHgmvE55ibc9RyatospAwF1sy7sTaLmfh",
  "key24": "5bcYZNGT8vH4ychpzSx3Uf48CfScDQoD3mGzex8NYTscHq2iFsDJqCgVFPLUJZEbgpALtvXzwgtnBT9T1hGCKdAj",
  "key25": "4vQ7wfGD9Zj2fGw2LXV5qAvu1TbjEEqN76gzqX2uBwp9sYQ1ivrgaNveYt8ah1FFKAMxDD5EpkowZ4f6NE1LMNPm",
  "key26": "5fmEQrMMNMWPXX1mUR5WwWD96P3JUgaVyTag6m5Y1ZSpNne52R2Ra6oaagktcBa9ZUwPMiHs4TqFhNUgCQ5YRfzx",
  "key27": "rtUEovxxZPDBxhuUX5z47BmZKaAFm2eKmQGfBJpzM23GPNUcwLrZk3iq1gzySFZKZxZxs3w9951SLagJAJNBLcp",
  "key28": "5k5bWnp2pmi7r9jvX36eoogAsN3BS1QvGSThR3rK4kiURVX6URB4yMbhDyzFbhYVcf7sz7SvCe9Yx539VEBRMGi6",
  "key29": "MpXzehx1UD2zVGGaGuoke7SfEqCnCBn9zo2tBxjy7DTc3TUznfL13chXNZEYZQvFbvTdoGcHoopryNDi7RNYKS6",
  "key30": "65WsMRwxmGvab8Qq5Browy573U2mvPucUy3LYAemZnoeBMGCV5QgH92nJzD4L3hocuuw2rKS4TzPFWnJdS4Mu3JV",
  "key31": "26UUabdC9WqSpJKKzqirJaYUqRENRHUsbbdi2zw7mLXqarJPv3kckEdTj5uahUzDyZAGNLSZ6UaHx6n53NQVDpKd",
  "key32": "4E1UDGpQtuGwX9mGqtjDuihYzWc7LsinpbRZPaxrLGzVnAXAWpbBc2ESUgpXz7z9bjNkxgkwwjrDUnzFhYtwQc6P"
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
