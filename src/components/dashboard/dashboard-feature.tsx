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
    "32Mn1trYCjrgHeAitiByATcgVvs8bnV5ZMGh4cpK3Ge12tVru8WaowhrAzH9xwP9VRq9kEwndBBEBRAxFzM48fmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jECpT1mzi8qWNVM9Bvdk8XaProNfvDj7z4mhJe8r3E61GBJn3QFNifDs4oMrNtbbL2VCH52oaFk6mz3whqdB3x2",
  "key1": "4vr1bJHFmyMvxhwUFdM8ZobLuSGix66s4kfCYa9c6vJnxwMwXmx881WNh3QdqBeTH714UPzVHem6H5jqVyhDz9HW",
  "key2": "2Z1HDNbnYL3igptxWfrztvjMXtJg2pa5fc8jVwYFtew8o7FPKBBVNUgAXVYZ8pDGjc45NQMAPc7PCiT8wm5QJ6aw",
  "key3": "3VwjDJu2jHrecs77SqxNfSQiTdhErxuxupMagmJyKYvA8uTKSSJCJVmyfa4MKnYPC57ZQaqiQr7teGwdhUA5XxyV",
  "key4": "4bgn9qeQJT5o9SqVaiep5hoMerB7dd8qf5mwqujtYmznUomcNToSgzx52fN1ZgxBVzj7xAM3B2kBd2yFMtAeh4Dm",
  "key5": "n8tuDHdzVqDqfWVr4PJ3cqKTNvbr8S1GiuNXJ3pXr9hcd6bGa3caPLG2TazDVXSPZ7j8sowtZL2t2fdv5UShd5F",
  "key6": "2yPhRFVCnSj832KbPSTP4exDppJxvg5xnBRs6xP2FSfEcDuBJws2HF1MRu9aGnYUwpRfxymrvvwaRoRsz15MELrh",
  "key7": "31VxMx8y2AeB95uQAvwQLrKfAdRaMTGRtavXcqEZXXjXFZD5oKNP3GpQP6TUKhj4L13G7XqEofy85LBExamZgCpR",
  "key8": "3wHXfebBXsJpLR6TE6sChYx2rRKgivKKzZCVMKUKU9Gd46iDRzAcEirwqXo3SxhNTNF4wrAojrmmR1dPPNrj9VfG",
  "key9": "27eTCSaRHVBApP7zR5ZuzHS8emhHBcPR3iAkU2ut6BQ279zr2uaVZZGiVmftZqacamwFoA8nWFMgRwW4vLHJYRpb",
  "key10": "3W7A8fe54mEzZiLGNFdoiNWrQMdQpfT9tzxSbMKdYDaMuKez84fgjNzgNRVLPh3qkvVENdfTZyivtG2kVRZ3towx",
  "key11": "4rua4pBTEXhBndor8B82ykbMv1TfMm4qi5J92MFJ67jwJUQo1A15aoT8Fcf2KEMX2w5fMVxvQ7asJWmNQ3n5tRGc",
  "key12": "4h3frGXXAAu8vVDN4WwHcRDLGzsbL6oi4by11UYWPe289pG8JW85LFF2xo2kD8hXUhr2ymCbiD9Hq5H15JV8FpAL",
  "key13": "4gzKBPRZuocS2wTGBH91NKdoRtmcsnzaYcchN24KFWqcYh8Y9yVaWWxLgGSa2VEaJ4M4FPhZwzAP3D4zgqXgspDG",
  "key14": "ubXfs9sHWLZMqpbYtJBix89sXUfM9LRGrZkuYnbRKCHHzr3SoVfQT8dyX7MRfxKSC973rMMWzWfQ6dU3UEb96R1",
  "key15": "41WYhi9n31N9cGcVNGYaUKfu7sEDbCo3WhSQc5rVkypGTLXUU9dwhizUrKYP9oSDX4h454jXqdGmGeDJGrUZmu2R",
  "key16": "5zc7RoCuWssn9fL26r87tuGoGAGJdTk1K2c7YphGwTDkSyUwP8pLMFci7JtfURkn8dMy8jrpPXCPX4qipJhuYEbc",
  "key17": "28JZjexZUWbQ3SSXyAAyPmSZnVSeSLisRpt11j5yJTeF7WAZyvSrktL4zzHzTR9bC2aoUVc3YaTcoyXfPoUEXmFQ",
  "key18": "5MgJnHS5PmguYuSYswjBi5oymx8BDwEd8oYQZ9s3XcmZF6nDZGSYnfzL3uT4n5KiQAcUhAy9sEAwrU68QHjcQ6DU",
  "key19": "2n3G6GJULcGKzPyCViwmwVJMX21PsbTYxwdoGT6Q3gX3HLnLGGkgHgQRGrf2kYzTqTBH8wVmtLH845LeAoZ5bdxX",
  "key20": "54VW44FpwHjXiRNjhVA2gPUiqukaxPrsjVB6SGTNxyahMnYARXXvGSnA5cKx1b1zQ2nNf9RsYoHhVJreBjNL1sKc",
  "key21": "5Tu1ziTKFtLXaZCJ6a2T8XeAhF2Pey4iEpcaGPbn7DNY69Dt1CsW9ohyF4oYLRwJHSiMFsj2C7UWNPkKk7doNXAc",
  "key22": "2wasF4PpNY2eCV9UZ5bjq41oNd8dM628xXzYm3eCzTifGWVqwumqvLVV6zDTA7nE5c5cihiR7AYALATqy8b4XDXN",
  "key23": "2X5L1rtxEavVbpCkwczBBnTDASxGFCZBJk2qef6SY66fY84vChbZYeS1bMeXzA1efVB1nLtCXHJqCZmcRZXLA5m5",
  "key24": "iio2MjTjKS3uB9jXLwsHoWZr8RMPJpYDifoAzsWVJY46xAjCnzhhHpypxyyAvyVAVJCf2PtVG9MW2nvpwfw6tLb",
  "key25": "wXhtqCPf1EPkiXS8EP6Wd2D9sXKDDk98UssUQ2zWdbiFWN5J2XR2uEVjSWds7PHK7gdBr4tPsRZPhvheChzpyLy",
  "key26": "pxi6JYM5Fw7eTAv92NZRVMehExPqwRrG4dqjUhpxGCatVaFiVQcotuHdCTvsS7LymvvYCpEFfRsKWvQzvcbQQRL",
  "key27": "5TbY5oGPVX7ThodZu6qson7uZJHF684Sa8WBhqNHNydNcT9x92haPVi1hh6AFN6gm76SswLCnBmLmU6FNVqd3FL3",
  "key28": "3HygjzkTV9Y4TNqToqMzXoQZEZS9QD6yfT2ESobfoChrEQhJcNZbpMyEeSVXBoc44AaZNAm7M15tu9wZNph1zjJ5",
  "key29": "merzQz6nDwNmL2v7hhwpikGDgrzeePgdiuVqzck8iZLEqudGxpx36rUhJt8Lx5ZWfhSFpjxqhQeqMgnnAS1oA5f",
  "key30": "4bQxHQvy3oeZvkMUDP5i2RrbrzPJ5J3FnHZY5iNs6aahYYKN4qKHu5bhutsr192YfVzezN7adD3erbgG3vKvqkPw",
  "key31": "4RyqedJ88zSnfB15ymaBNVJKMgfEindx5DWF2nc7S6kq3WvtBpEWXrerEzjvnDKibqiaidyvKiQua2HPzF5TPSTZ",
  "key32": "3PmKoeVxVhcMSSdaBz36HTkPG5wLRcBn5DP1SsRzEAmRAqJ5G6KBMgHnnPnfQH6Bf31kRhwtV4egYwGDgwshaW2H",
  "key33": "4gyg1qgk9UZcGNahJjNXWqAKjHgJoeABGqXunt5dH9oXrs1RJP9YvFDAf5arMSmHbYMNoGzXhLwNk9Ff6GE7pPoc",
  "key34": "3CXEc6H5GMiuh9XzTrmkk5LX4mesFrnmJV3ZvLqaHnskSJCQvat5SzKn4n84rsmPawHJbDFhsuauHRYKN4svtFjD",
  "key35": "2NLDMBHDD1KoURThuMkjAfFJTcei8EuPxfxwA8NaTRs9EP91gZJ1t7DQQ6owdjayQdPk6QFhTeVaJEvkVRkBaeaA",
  "key36": "4mLxbx5sR5nEMEvBHmFUsNhoevE1e7UizZsoUSMoeX8s4dZF7wWyC5ZeTLDX3oaij6UqGUhMmh9Fv1ouF73kdXqN",
  "key37": "j82Q3xxrLZoshnDfawyeKWBFv2XXohYBjwakGie18YfVEcUiXxuVvG21PXVCDBst6Nx7Ycg2gzkfz5vJ59Pj78M",
  "key38": "rqjPnHDaRCWT9Lr2TZNsoA8DwdJz7qrMfbrK8Ushci37Pb783rtGBdd4asp4SLVwSsiw3dd6We6VBP1BJfAjN27",
  "key39": "5TmRm1yfoxPxjUVLRntA5jJn86tXKGT2VCdqBy8kwpayFAnYTAFwUXTVB1JP1HGMkWU9fUsieTxm1BdXh1wfKkRH",
  "key40": "4er5ur4BceWuMxievuEnurqbU2s8KBkkcZZ7z4rm9sajSqn4cGBxbtNgdJvSGmQ76znFXuuM6jb6gQNLqkyysJWX",
  "key41": "3a3PFfrQTWffunNPzqrXFvwaXMYQ8jm7VwKYaZxcoo6NMR52kv26mD4q7FL2zGT6B9WBpXVdQzc5MkegbrZbfHyn",
  "key42": "5b2LPJGxw5YB2Kok88TxMdfwzG15wkFz7kg3GGBJKzHNy9nhJpEWL29c8Ds8CQP7bji6bBGbgWwMhQtrpWFbb2Hi",
  "key43": "MpfWrTuPJz47W3b3W14wpnbHitaAz5SRLZEmjjSagUgzfGDkdnxLXJVLGEZkcBX2gav62Gd3XM4sMVVu4y5rZ5r",
  "key44": "28DqXdBcNuNHJw93BUr4otTnj7r6qMhjJbiD3XX1sfukSrnKHCWBd2dpXo65PEsY2wxLGV9azJbfyxUq7AKL31t4",
  "key45": "ygv47drpR8MpeKmF5LSZuTLhyUKngJo1J41dw9eBNtbH3SNBSv8WkJWZXaYKC7pMxtW4vzn8KGnzmN7B52BsQcM",
  "key46": "4tLMmqxJ4eeDMUCrLh3RLGBmQaZKdfRomviDPFSC4Cg3Rw8Q5iTHyCcXMu6ujcT9L96g6TnmChwfgcPpyW9jUFyX",
  "key47": "2d5evEmtx84xPHWUoq8ojM73V4cmeH9XAikwWtTb6zLQfkmEkFh8QiB7rWMTc53mbGLKC2BQJ8WMFNoVLkVm6qgB",
  "key48": "5h61FaeFbRXqv5GBZmLJYnhttmJeYkkmw4bMqAk2eCi8PAsCEAYvLR6G1U7kPHQ1NDMo2xFuQn4uW9GaZ1hFLGpF"
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
