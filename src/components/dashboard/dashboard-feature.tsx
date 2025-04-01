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
    "2ii9Db4G3kCxaKk8fujGGgG37TnzSVR6Cx7xtMmoK51XupWJJbDbQBcNd4PvQmmcu45687oie8xAH31Cczjcc6FB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GQMuCBHPPjPPiNCzuGCK5vK52hqy6wd2j2AWDyZMFdUWUcKd2tESF5AsTpLoAE8aa8AA9dKWU6DrXRh2BFN2e9W",
  "key1": "G3XZj7w6KdqKpX7n36Jxd4HqrXJexd7qeDFX39sxSTobGb9DGeGKNNHfd8rbNcvs9M4Yvcd1S5YXmAmzeoEEoap",
  "key2": "3J5dXRey4qajycnJkB9BFkQXRsJf9kCafWCiNNJs8rpjVwX3svHvA2dHjpMDEoW6NUoVkANzrp2jdzhdHkXjNjcn",
  "key3": "xVZMApEgvUUB5S3ZU3CvEVdE45iZqrqpRAD6XUyFHp6dZBvmpsfjditVA8C2w8V6GUqJRT4T2uhzSVzmVK9iDvo",
  "key4": "4nCv1e8dZdeKEhdoyHovxySfSnBLyUiDMhTHP1SPdu57xH6yy7DaVfsmueb2MHkeJQpKhrqgANqvrC5V5WV14vuL",
  "key5": "295RCm261FFJy5ozCa1HdudrnxGoRxEtG8n8UB1mPmHeUgX4ruesPu16GhRSUWvVM4iPjMDyqgEdEDrqBs7H6iJ8",
  "key6": "ZhkztH6nTnEtq9Ve84KBRyuFnEiQsps9L6UvbeQiGvJGi1Xhbik1ZPtzwp1N1FRt2MyMc3cpdRKgkRGvpTKGxnT",
  "key7": "2pCAbWdaTa8i8wEW32sbwANmS3KgwvVX3NvZ4Yb7fG3NFuvmYiY4z3XKP6RGy67VkQvAnxsmhe3reAc7PzN2sMV1",
  "key8": "3rnuThJwytkTNMvXz2LYiZyDZt8tZMXiwhZwbAp1Ad4uTW7mDRzLWaY4ma2oVm9LyxGUqWtPC7m1Q7Bm6VeCjCtH",
  "key9": "256rHzNj56Eu5HzyMtt3NrHUG41wbFCtCyE1PNcNPpuuwE2Q8oDeWBcHYw2sgoGqMvLZGnmrCLhA7ZBNn9x2P99s",
  "key10": "eTsHG5Fz3RQvv3f4gsgf4N2N6bri3sz1AMcvFzoxTeiNsgCk32BgtRyufKrhG6TzxygXD6nLGhFAT73EkY2gUiX",
  "key11": "4K7vvWFTMpdu8HwuJnXW4pNJyGFcmwbV1dJFYoSGBxLgMiXGiyxRimpSevK4MBjtoc2KiBcFhzgf4ESCCp5aQPrh",
  "key12": "1MstDCdmJ5huCrPVmVpVu8JamA1jv12U9W8wdyxmE2v3kLDdUHcpYMJSngLcyRscBRZfvSVPKL7osWFvS9FmKWx",
  "key13": "tiwfL32YtorDtKVvVpYYd5fXa9uyMPdR9Z5fs5RXj2pQaDGmLJrgyGsUKjHTk3sDdMvDk67HNzMZzhRae6mvXyx",
  "key14": "2j5RS92PMME5LXYNot4k281kmZvHyXRDpmi84dKox2yuXSmbnDfNAVvT83WFaef2QzHZeYZjZPL3tn4HyDfqTqjr",
  "key15": "6HLx6dhgWVyketvkrmyTkV5TuFEGpnvA2ntEeG7EKEcG1B5JaMgyYFPo2UmBnNVZRks5TWsPz6wwprpUwFHWysC",
  "key16": "23w3o4zrkS8REJJvDjyGFcfnmkTgf6HmXPg2GeokcNrb2nBwqivWkBkb9RfRBiYCmshxqGdpbMX72muWzJy1RxTf",
  "key17": "63XZzCzGRoobCoD6JXnyC5dKTA3mLvnuBnNt2NE1eHt8TBoBV83irBAvYgHeuiqL1d3Jh6PbQJ4QDt7A1t4wLvHV",
  "key18": "5Hx6eX8szYfRXjDfegm6CYmE5KAPZfZ9Z2o2CXDW28Fu2pehVdsq4d3TQkUeACLKCkU4w6JREDksBCGb8ZPvD8QK",
  "key19": "5hqWECo5S5WuKge3VMiebh2WRLFaVcwefWB4q4TkKjNVLtt73m79SpW1QFy8CJm9Ess4WhrB9iun2GYFbaCrug8z",
  "key20": "4yhmiw8pvUVBDPzV1LU9a1D3ubyVpzrJs8LW3T9YBxRtp1r2oByFHKnhCR15hSye8teRwTMd9TErPXVmKwyjuty7",
  "key21": "4kXJCUWBc8q4yfGMgYpfva35oxQwiaWwStn3pakVbazmUH2VciPRNHzTLDVTJ1VorbJapvDE2ShskRSbkMp3BccF",
  "key22": "66RXmKYLvKgQdYDYjUUd4oyLdQnK7UJ7sw4Qqb6RNk5DK118KcUrmARp4hZd9FWo88F2VNvU1MnJW9z1CBUaoMph",
  "key23": "67EpDUCzLsW1UF6UQJtK5t1wpZJKeq2yVTStKvDKPStCKJM7Fd8oP2P11e7qGqrFuxnhMsNXmfGmxyuCAkbWmE4D",
  "key24": "BwCb1cfBJiKHT2BQngbsNQn1bxdAh7kEQSw1si7nnj4qCfQYyD9wc79tpRVNZMCcGZdhNDkgCGgC2VtnQ7VtXje",
  "key25": "3yw5GHdZMisdBr8Wi7vv91EKn2TUu3emtmYjcvD2AazaqqeBMBpDJwJykUrVmk9pWSAKMRNr8GYg4nVeHJzjEyUW",
  "key26": "3nb7FtjMd8cELsvuQCDsLZ162fmnPrbzAMveNUxgGbCuRGgF2p2ZeEgYytFHdqmeSMMPLeojcMCy7McwVcNZr1Gi",
  "key27": "tgN4EoW8E79tSKEJmCtkaGiW3hzTFddkPvbtWDBBPUFacnii6dVsNW4Kratjy2B7qyNHd4B5JNnX43LZyjjb72S",
  "key28": "4phmLNzgzLQWjoqnzB79zcNvbhtNrawKs8ursY1ymxCpSZbhbrhvoDqS9hS5zF2YxmAwGD99FAhXc9Jyz6NoTxCU",
  "key29": "3QGMNa3AFMtgybJ7KAF8P29dEq1U3NZSjqWwucYaUpLEs4u45zB2QXJbuzAVukrNhQ3BUgM3Kru5BqtpxstajwR3",
  "key30": "p38vByqgfsU4LVxXVDrHufiHuZUyYBqsiTvVDGGvb8eReJ7iwcASHbfREj3S3pmKosuj534dCwmAEHh2uV9rimu",
  "key31": "2DxkeM6gd2wSQrqqWMQDYQAqmf7RR2kW3uq948wjzHKQg7XrYcw4mvnfC4q5QTPiE1nQtg91rBec8yfRHNxGjLK6",
  "key32": "5dvbNTXK2Sb58BvkMbQa7MKqg9u46aLDUdGTTKybcugfKwn6WXT8cbAMpo4dQB6dYKQZi1TdbtkQScFba2wC3EY6",
  "key33": "58GM4npRJUTH17i98D71rBWtXaro3BFSpo3npvEVpCZMKqCUkmzZfHX1fhZV2R7HQhkxzihbhQisMqzcjL6T89C7",
  "key34": "57wkhvit8xS4keYPMkzpXxMnmRWFBus4M65ZGAwwyu8YzTcF374jiFeXvt1rT3d1XpTxfz3vWkZYXuQXYpoenQM2",
  "key35": "NX88CX4HbYQiee91sqn4abzeqGpD2AL7Sry2D8k9GfbuF1sbCeAB3QZFpzEWdMN3RqAovjCny3M8gyQxSL4ibVB",
  "key36": "4o5CdsYemSi6o5VxF1qm7oNBvcPJC53aYcFi8vXjxRXXTLQfYF1rTmo45yPPVrWRcf918CfEXg2UNtKaYbJ8JXfc",
  "key37": "4G7AjjBLJZHrhYMozs8C99rezmSmk3C7ZmDYGhKJG24s3u8HzGTAqErWh7RwG8wLwpAdzN3tkqsmQFFrA8uNhZjV",
  "key38": "3AfLobW7yswkgMv1z4NTCidr3xg8JfZv6CJeVXepmBVXk2pmhikmLt7JAKrAx5ZEp7g9mGrSJYX3MGN9YiZ2fG7D",
  "key39": "2NYRavHKpfR37r8b7X5mbShTCnRcYXXuTSRFBdpXWzX7oyPYvC8Y8SJRmM73qJXRVDMNU7vaHgrJGZ1SPgkXAy1P",
  "key40": "23JpSyxnrD9XhZxXxMDzYwgH3w2tdcaohFr4B5gdgvgdrVXKcHdjKFCVQEm6z2G6mqM6dfiP7jPbuY4M82T8EoTU",
  "key41": "2M346wvpDEJ67GxSBjqPF6VpU9JCw9fYMogF2Dvzu2T9y6HeWMtAmXV8WwdWvSff37jfbAuamBKAWtEFDJc2HMD2",
  "key42": "2L5x6TTQBqmzXY1LJoAkW4MFvoPr5LnFmDMijaN4i4jocCSb7M12Po1f7FcvRWPVDwRLNEuUjZSXBDoRi7JXiBvj",
  "key43": "311iwFyABTDM52uQ5K9RoZ85Kh3Ru95xGLGg55SexFZVK8983FCDt9nib41iReKLhCd8j4ciHqJj96xgKBsQy28",
  "key44": "43ui6bC17zAm7W8rTs7Uiy7QPhUffJvZ6LvvdtuuWpbsmZmLDhPk76T43QwBrc2JhVozLXDpxbsBTVVh4op9XzCB",
  "key45": "3Bava7cwj9378XZYRUw81BK4TQMPkAhp1Qj8DAbmwDjR4XDNunXF5rGFhLjZvJWhMwdYsmPTHJeitvjyKXnwY5sQ"
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
