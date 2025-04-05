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
    "5xiCCVMidgTDkZMarVWrzmrkCdQi59QDgABqJmMTZwSdkwQ7xv2yUNVpNX3ryCi2KtVLdGtKP2GMk22rn3sqsYyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Di3yCb8sKktN3pcgKapUfUoptQiXYXkvmz5JFgLoMRSeuoKJeM6YyrK6gywKJU7966CKiKEKzoYghoxeTQA14wZ",
  "key1": "3uNyyegqK58TQrdqg4jYjaeSwQd3Z6XZXR3h5FcHcHgWmBd6fopc58hT3jqB18VXekmb6f2CsDXDwK6CcNgc17rT",
  "key2": "iM5GLQ6CzvMBNqaPnjBgLnBP7Wu7DFYFrD2WEWR9sHnqWdaqBkWpTLp7qeLyqvqacWkRr4gJWurFSkyMqyqqM2W",
  "key3": "q8AYeqrEn7aaurs7ddChqxv4YN8rsZUgTL2C7QQiUCLtYBk75Jvh96Mtff7dZGVg4u2vWr4hwjhbWkCa4y6pdDf",
  "key4": "3x5wjn7Lp3n4PuycuRZd21yseQFUFMxs91ogv1b3F2gDpParMB9kCwxG6zze4xw2QNhE32whNsuPjbGB5Vsczhjc",
  "key5": "3tmcy3jwuGqnAkHGqRjqeVYZFPpnhSAjZzXVPjLmwHijcbf3nG3J8yJoJ2JkUrhQC2aybsY8niThvjgKsgXdwh8t",
  "key6": "3rnpGpztqPmHmZAEpfC5U7ozTES9DuobV13aWa6ov4eUkdRYuAbq3sNz89RkZwjDULnWN4FHZSysHFmAwpYT6BBy",
  "key7": "tN4aCkeXeu3S684EEnwLzfpj3SRnrdTaA8JYZfawj2kGLssdW4xfTt1drCemyvDV1AFfAKgXJDSisWW9hifJJrP",
  "key8": "5yNez4YE165M6xJTeZYYvVpKVj23GBKVA58EYrKXd2K8hRX7onu1LS3U3m2mWuhJJHwSPY54ttPbfTNFqnW3ioZR",
  "key9": "sMfTFxqbwE8jzFDg8YfNKfvpXZ7wPtUXhrhSqeK3bP7Bp9q5wqbVn3Bn3JztEuW3No9igyv1CYCFoSCX45ZGyZX",
  "key10": "5agKjDMr8jxREVUt7PBC9h1tZxtWuXDhTqMNS3qoV3vhXGTTbTMHjAw2VTf8YGYcrdoyd7CuNypuhVMHkJVrrxJ9",
  "key11": "2qXP6WTPuLphQEBQk2A5yqYxmdcfwvegELk3rnhMZ1tmvS1nYGcTZ9CVXRHRmpVhTkNoMoUubLzqzF9Shemq7vsQ",
  "key12": "3dvwG9R2CCvVSMti1AD9aEttrqRoc2s1hZ9MJ9AtUDF5t1W9wrneUctMe6CcXPjGUQwddiyY7rBtCTU2n5GmGAAg",
  "key13": "36gRpJxTPbjUb3cCbjQ5a218vX7e72YpG8o8XxrFZBqVp7kswgef2ZenRweA1FkEczkvk4YMVj21YssPZbYsgJqH",
  "key14": "jKV8sfhrFE2KjNv1HEKEsiq277Cr5L8qJ7Zp7mhonLVWtnetzz1bKpfEfJwFwazH2415TkDSz8gRxcc6ro8XpM9",
  "key15": "4eQKu2vtTjL8eotY78Ekd9y3A1FvUhGRqNxw2Y2Ufcu7Y4z1yByAWJdC6F7XdKjHVUH8USpyykdRbwLgvCJrbkdf",
  "key16": "6mgSndqPJVSW6k4AsVniFcfjBRNdn98QCwFZCZVBotCSvmHVpKuvqM5B3kP4WGyMaNgUpcXzTP2tEdCVQbkexKC",
  "key17": "2aipMTLDVPCtew2vYdGraqTGwEQkF1ds8yPTyHgAQQkLGst5miTSgkqK3xUQMMmkFeEEx3y7VjJAdfSRbfq1Nr1w",
  "key18": "5CyXiREBQqtKCeZdNG3FVqyKTswLE2AnDKwGX2mmeojXqwEsawAU6Rx1FwbZtiKSafwM1vVGsvzAdZuKi1Jq9fux",
  "key19": "3SN6pUc5Vp6jqTNGdGtdE1d2PCJHxgruHUmMMw4ph5e8nVcrmnBNewc2Huekw9fugUnEzjZPcXdDTGVTEfUWXHps",
  "key20": "3krW4DS7z6SHH9fEuQKxtnrhPTqHaG9hUBgnpaF6JgP4rm7ef2CuDfrRTK1V63D31tom8vmcfFktMfS5CQ3AvkQr",
  "key21": "2vT5QfSCSUQnKDm5gWDdmeNapCxPz9fzJc6ddo9crxtG4xhUvLg9TGW4Pa1FTewhWBLEZmMqG2F9wYfn8da2xDW5",
  "key22": "3kFhf1uPaCxt944dhESrvECPgwhddxAawWKzwxZ1F1cNovm3rNbMR2hRbwEarSbbQAD7pHDhXwJemD8qe5MJn49m",
  "key23": "2phqV9SJEeVDhouNsbQX3okrxTVWoZJcaEFuCBqai5UmK7aA3afg5QmKutgqfZjr1yr4vHSWtD6CxQKRAGd2HwAz",
  "key24": "4DQrtS2MLhRrhAUrZjKshdMf4xY3zB9yENoNANp2dm64Tvs1CA27uoYPfBYecebFdnc1qMF6denRbA9jisFtBvhF",
  "key25": "2FMVxSctA28fvyhourR5E8FYx5axbmbxmMNpPjjJwXLHkxeQNvDWZcqFmEMUXqYSpBvxAofz9fgJJh6Qgn2CFUs1",
  "key26": "3U8HXdDE8evtD1q4kEF1XqxBrgY3docpa68wsZk3G3RQ1B5q3eUKBj8QENtbdaFUezp4734JTHtSMf4i6t6KHd7s",
  "key27": "3NvJmUHYCuGLgqQxUnxoypXQCQA8feKvHBsF2ZTnBNkheLonr4pci9NquG1r18qapXYUA9kNDt9faHgwzX9JAccA",
  "key28": "5Yq5S5Em1XZ481Xdy6c8GqCibdMVkZUqEN3a4iew2DfsqqSASdhFCJATfwMRWiAs4ogJDoLhTzx5mtsUYMxDxJw8",
  "key29": "5zmkFo8119ozaynruBbvWwCFDeE2udYf5vfRAjT24EY6Zkpq7vsEnqzQDKWUEVrLdHKwgQKDmPsjPTSJ53mAcros",
  "key30": "AsDViMbdJkuUbuL6Z34yAsPWBD1q4DcP4g4YSzrCm37jLCnKoegUnzZyKEkyDcWaUrScekKtcuWFysK1euVCxVQ",
  "key31": "S5oiuSYQKJkGfBXozn7EenAsaH6pza1PkAmCCb2bLW79uVzNZ5atK2L3jRKQc2MPoPq6Ae3D2Y2prbKA3bcxJdM",
  "key32": "3QS17Qo4TV4t7XcxRSwHJqPSB2Exr5t8f1wnoaASkvbe29fMpE7rEdqt6MPBSGn54wQNPaKUT5iiiQ87gjqydMtK",
  "key33": "4gW424Y4v85pd18fhGJhir6jkRis923sLpD8k9tb3o9kmtFpqdg1g9aguhT3HLdNA3LSQd1hQMSKFJkQunPQ973R",
  "key34": "UkasZXjt1F3jNSVtLTucvuBDYkzb1AhxL2B9t23LJReJVLmpfvVf9nPcFNXsLR54qRZaNX1mhZEkhacfinUSmHu",
  "key35": "3QEdmN5TKcCqduGZBhEi5vkaMcP9ACyAdMKm8zuQrk8jMGFaspcLcC9AHyaG7ACCZQcKndMSKHXj5XrC1ntZEkqq",
  "key36": "4ENXbQiw32BqB3d3Aei1XGWNMSDg6rknvVXVn6nvGpftBbA9BZ9EisNCP5BFp4kafhyxdU9svYCSwDrEMDyt7An9",
  "key37": "61jE3eEUGEFdWaBgF69bJNRqzXNpXUNQV29Ggdgt82gx6k44bJJTjQjTsZtTu2A1gxu49ppG4KJat56xVnqinPv",
  "key38": "Bg6s1xq7VY7Mfrp7oKWAG8kBJjbssX4kS4dMSuwVd9dRPw8JMbpEZ8t9g7s1gWZeV4cV4R7i2toCzKA8CRsB8Gg",
  "key39": "zU7kyX1eRMR89PeWC7keAbLuMLTF8zYQ3CrJeisJee5ojXu98wVtkckcLrPUytiZzMfwsmfX97CBro94fEZz24K",
  "key40": "4SjCgMXVQRakkycKFNcxvF9fDPg8DWHhQ2nPBydCriTZKz8A6Dmwz3mf8r4i8vAhsMqgbmpebJ98H3PQa4hZhGgS",
  "key41": "2xz7v1aLtRn55LFa7Thi6emWeeZh8FmJ1dPrnihU5XoY97QL6gDFpJXMj7Un7wfHDX52yaA8B3ccfTg5GpZgZ2VK",
  "key42": "3kQVFJ7ZivvMQBRTLeSmCeVtL1H7CnTs2mKsDUtDMKMuQZv9wHjhhyojxhrjQW1koLPMvPJqk1egKWmAwAbyNcNT",
  "key43": "LpPt5fEgkzfsaxRpHG5S8T2UdEwiXCi7za5uhwLJkda2zTWBKu2kSiZ8gRpqEi6drWrRyeoGbJnxu7mGVZAKUny",
  "key44": "wFja6wVPsvvTY5WZFzu88yfUEpY4TyBDpzDAZA58fXW7s3QzshSKGV4qzAaAwLuKNoit3zvgubMN5MvQ8oy4d9J",
  "key45": "4DmpayvZemcuoCv9c8jxdpcsZqA5JX8nnikVBS2JKUKTD358duSBun1zdpvjXFEinF7mhGZrZvjW9cxnAnf9chvf"
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
