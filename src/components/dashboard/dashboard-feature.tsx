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
    "2HNu2wqeHrn7FiJXub7zMGDqHk3n2wsCubpCnWWKgyohdfjfLrnhoUb956sgZbNP1tym81MFwXMJBRD1umbSntGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rR7cPVUCHmwaDvGxeGErSj3SZrAU1F9giebZHRMmThL5aKtdNwnwz3nav145nUMWybM9DwbCgAkuEiQ6NvqqpAS",
  "key1": "MkmEMLGkzGFMvJuUbKTeNMjijwmeSZ9ubGXqomq2iSAEkb8bqbe9zdNnimS6otRkCmAqXkbknpBnhMjwDhq4mc2",
  "key2": "5goo4S2QP3FTu5t9F9q34BAzJ834SzyDLvM4VcKeQQNYX6HJr4gct4Ldbz5pgxNLLzkqzvedZvLkS4rwSdavnSV7",
  "key3": "45usaaDemt74MTtxZFj7gPccu4DWH3g6zct8NPVcZPzoYciuoSxyrupZFGVt2pLrV3CyawJYZSth3wnRn4kPFXRD",
  "key4": "22Vfq5TszX91jLjHLu2JH9duFAhXT3pnExnXC47WaSs9183HcKwuCCtAnUtyfpuSfPYMbmdiYYwuwJ3FDuakbfkB",
  "key5": "2AeYLkgvmNyArBU4cY9RvYdgykn5BRzK6Esv6y4wGRbQpSwN4HJSJKRshRQnii2YAWaeWPLLqFggbur6x2BRE5JK",
  "key6": "4TbWUT4eEGAq8Ts7fYfwdEwKgbmAyYSNvcZYzK5Ni8ELem5oBkFb1P7QUx4Cf23uN58PHoT5bCr3YGxe2YxFf9cE",
  "key7": "4w9DRwzxctDmzA4218H5LPnv6y5p3vvBJnTiJZnGYMc9Q6g87TypjziobVpxx2ZJrUoNoVMUrtTTsh2sWMVQJmsF",
  "key8": "4RJLZJ8yrHqyePiW36CLb7KkrZ8yyGAqNBnvq8Sai5KicG1KnsN7NSqhJgGDCUA3DZz2p4oiCZvETvQit2T2NE1q",
  "key9": "2SZwHJoxoavxuKyK39XyipeE6pQxvKnx1cAQ4AQXmjjWK6CvFtYdbbxzgkxLc2nw74k9kHfXHmUG9qaKtizYAYmf",
  "key10": "5JVNT9EKpJ1UGDAqBbTA6aBN352KNjRn4miZvdJfvDBEBmZyZUcZsidmch89yC9zFd2fgtAYYMjVQzMAEFJLhWgv",
  "key11": "3g3MKYZNPjLXX2PCdQeNNNVLCPjEpqyqyYxWKLNHaxKTCW5tQdKD64THipiDpMozRt4mzCrmeFjoT6USLM8LvA47",
  "key12": "5BFXF8AqF6n3sRbddrtY3JgFeCDzbQc2WD1jpNAzcsHafhXgkk58kp258pbw3w55td97NMt1tDJpLsK4K8NncFyu",
  "key13": "4qCmoWd2ap5gKSmM9wWszb1TV1Xs8D233iAWnYUejWhtuTmbQyj5jJ6MuVhFvG6mL6VLqFYJcTnrdgCeCyc2vR6r",
  "key14": "3frQgMe8fRh9yHEQre4zdSwS7RJCAP6nKp63MbK4RpwtibvfRa3PypGsAC5rrNV7arHKsob3oWcaXDswHkQM7aS8",
  "key15": "4k3JEHcEM6ZJ8zSAc3bPrm8e5XWvYgCGrZtQ8ecsnCEAo74rmieaphBjeDmfncfFXW81NRNF69q9B9jLAwHrr3yA",
  "key16": "5sW8poZmWN9aaJd9GYn3YZDqHHMP1sHnE2BhcC2c1Cw3LP5Smqdx7c6n2uXqqAqr7HVAyMJBmtPwuGMQEgHvBXbA",
  "key17": "5K3fxW1GfhwiXwU5AuSJZQ9xkFhVho7Kn3RDNg7iKXJTiA9QiiA4NGF9pbYHkziUL2SL9GMEtpQwtHHz1sA8AHQs",
  "key18": "2c3rScosUAYoTZPLtve84X72xoTeQiJMpYcJRwYQUbmRQPCWfb4FAcvD9mdSFSK5uQbXfQjCVP9FMcqttdVzDRoJ",
  "key19": "fADBmMh9NWSnHBVQqafzcCS3RSCunAJcpzK6RYhD8BNu9ztKGXGG8CqfpxAZvCG5Z3tXETWdDn6Yi7UUogE8Vy2",
  "key20": "ptmUhF6j46MtW4CeEfnJaJpWJgnQ67Q2eJsBLC6XfE3WTiBJNu7WEH97qizhuChNdZs7EPytqKBSHoohh8ecXdg",
  "key21": "2CFAMSoobA13QUBDrraQqpk8Uzs8Hq2rQkVyFdYDV6ymow2KCJnG8k2MJSC7Vf3LmAo1BSbKBRcQ65njfLKu5J4w",
  "key22": "4qFLGYYiQSZHa6rXTTPDg5ZzFaYjg9FsKVpe1d8am4uBhq9veTVc9cnnvdhaHuinXGqDzQbfoB9bFDjG9k2a1DPV",
  "key23": "3kA4niKsLPNdggDbsDeENEv85qmY2tVGnHW2JZGbfN6Nk8eirAutR55acXAjUbujKMG8BsGuPdKxHLk8ENanftQj",
  "key24": "5TY4A31aHwyL4kCzspfEG3mfFiJg4CKrSefecp3FLDpr3ePiaSRpoi8B16QeNUc8S13uw771uzDz33N5tsKz5bwU",
  "key25": "4i93H15C3AeB33pffYDmqwxSJwiboGuZqvrHw7qfaTiZXeLyzNCC6v74ngS4kgUKNs1QVuqJrT6oHK3d5Aj5UYfk",
  "key26": "uyGJUPwggi43H6G1AdSm5tZXqWbz2cQCMCmBxCfkJ9NjGjCZLuTkmqW4vuJYLaJvWHgFdhFrXf6mVPCuNtocazP",
  "key27": "3AmCoyLwJKCZABZvDmUNB8sry3888UyqUfjGayRie2AxzZdcbBkY8BXRb1sGonrhJPpwdoDzfSwT1nQugs9wiAxb",
  "key28": "3mJ8PttGo6YVKLrhFVeQ2FBARm3LJeQrdpX8rqmgdBtnovmRfEcmqU8ZHEwmCftqvtST6hPUPdkbnqPuqUxLyR4P",
  "key29": "5VRMFB9xamargXUPGxCNMLPvkGdc6EcQApF7LBz2jvLUQ88Gv1yNGadBLnBjZkzCkvbZ2nyhyeQsjxYzhB79yMaH",
  "key30": "4PjzinrDJL4tev3Mv7ku3oVZdyPawt79RGxx3jDMQWJd2kRhEhheV2nMWukPwH5bFzoUNn9qgsDv9VKYzj7JUDZq",
  "key31": "487XbNowHvRakTUo2o4QSmwrrQji9Pp8Uu7aSuWX38msDUu1juH7J7ZAZopUf35DMzS1aNoaDj2ehEjZWeJaTAj4",
  "key32": "kjtV6GayjuFeHc9TuKxANxPfqigd6KzcbrvGJSeh7AWD2nKZNj96Hrr7GoKVfhn9FWqKnWaYWXqKjCw8irfg1oY",
  "key33": "CKwpQEN6bity4LAa5Ac5Ed497FXRpxiSRbS7bfvdYViEzMPo33RCXnfD7XM3xWPxANd3XbWp1CX1TWwd9fpX8KE",
  "key34": "4UiuqYG7oQUp1Rqtf47kUqaBBaY2t4unoT5mvgDV4qJQC4MD1WQy156fkW7LTmTbbCuEKGX4MZQAcHvwTWi7E7F5",
  "key35": "GBRVMZEipDjR5xaicvhBHwXeJ7yv9EcTZzwdpJBFTMbRV1rVwkzSvEkhjdhCmhaokuQ2EmtQSitVqiv7neypcx7",
  "key36": "KyAriF7LSvLzfLRZmtJ8ALJZeW4xSXYLpaJXnXtLjokTzfFB8NBJkfKkQaKyion7vwqZKAddk1S2C9LRXETYKnx",
  "key37": "4XwTZjfMijRsJASQgcHpMRQSyHcASZxWhbx4wb97tYghFDxnXZa1Bvasurrg9uisGkogtxCrZ6AzquZPPnQQqxcZ",
  "key38": "48wYPv1xf75oTcVL4yVeaGD7ZCzNnzEmDajoY7j7hcz1pvfBKAV18PbGN1bo3LNscU7xgYSgP5L73m4tdAVe4M1q",
  "key39": "3hmWb6K3tte8tWq6o3eUhGAsquH4aAD9bpNkd12oRCdEzzkSVwHjmQaDxZzzYPkMoPWCgrRPKQga6Edte546jwGP",
  "key40": "shNWBTS57U8b4zF6GY47K5WsDagLSxiS3RWstepBa8v1RLHzK8kZfdwxf7oBFyBUPXuavT4VFS4HPa9YZ2MZVMG",
  "key41": "2PR5GtAPkEssHuEhCPejQF3BdYRU9kYvREcr2413WhJUYF9k7eGPpAznBuX2ZE3MRR3UcpZHYg58nzwvkkPQqzGK"
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
