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
    "3ByQ9QvUngpwQcUJLB92jo4UhK4ryLKT7cDrW2ScKSR5w4LsZFT6pzfr66c66GzR2Nvoz4Qh15cJNVb2Vp6AdnDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aEkXzbtg4zCt6A5KpwDMDQHZ7ixQhB3KmkQx85TyN6DDzMDeanV7d8GgFfNfGedq3USwWYMCHcu7nXGrVXUEBA3",
  "key1": "4Pf1ZFJt9H5vF3gcjmPGaohTMfcZnuTZYEmsvLAsJmFf7ZpzWeYUDBXRNmWqTQSB3aqARc3b6gAg1Htqu8cpUbs5",
  "key2": "3hS6SgqMs1ax6YJvvtCXUVNaX9KmoPygzwBfHRyKEAnsMJDfdFGEYmDCffU3VCzdDdtjA3Qc4tKEpw623cckahZv",
  "key3": "3f4SBcJdeiU3Akh1YKSYcZVrUcKVwVy9iUT4jFh7QMYQT3vgbuXapiedGwkAk3YDf3iC1Tbq5FTyg3FkUWfVik6g",
  "key4": "45Tusgd339vpbcb5rLA6SwGGmFN3Xsh2oRve2NSQPX8uumX8pD6zLQ9wUbD4N6D5PxxxGJ2ZPQEG8ZszTUC6rVKm",
  "key5": "51ktiHxReRZeRtDJguAJGrKygAemDpQtgygmL8dKqUJgDRWF666KhkY25NCsLJxc82Q5RLVXHAGdygUG6v9uJC8X",
  "key6": "4iuKke5JyBojfTjzCCQJBaXmLtWAHYhZcL8iftr8HQdsv6XnmsxCTxrEUkfWW8NUNLYhnbTpozSFj5SADiBkHg4B",
  "key7": "QBX7B1zSYmp6Y46vsRXBJ3KGTvxGYC13tkeJzdhTmgPYnDm5wXxNQ3Vy171McZ4o24gPq2QX8ikmGzZTA7VeMLs",
  "key8": "4unx9pbrzwTTNbT8w9isDschzuVYx4WFqrB9jPHPDQayuNUrHhxKCaF2bmSpL6RFkWT2PjTpa7aXKSQgjJPV96hm",
  "key9": "477h6nrKUAbnoWYoM5SSUCDHMP6tNZ9mnZeSuwaadZ2KRPqQWbNzD1tLs7j8NjJSaL3q1Yp9AUcrUYngmiHWLU38",
  "key10": "5ttw9y2kmxhryVWNAs2PaN5nuX6GQA5niG5PRak1HBbsjsrpS4EiJ1tf1Lgog87EpfXP4NzLKzPEv4eVz6YCTYXX",
  "key11": "4qTEectn3iHTAaQwVjaZp8LwHQwmyNGTUgPKcMXm5gKiMB822Q3u5AeEfPaWDBoWM33C8NJnxGM2qwYgM6KdcDv",
  "key12": "29rto9RWdh2KSftMXTXuP9rMh3Easn1zFf4iGNDyKEpRtkKETTLSxdcnask7onN6rkJbAonY5fWwTg9hCBWdFJZc",
  "key13": "2BPHhpUEJyFJBZhB8cce8Lgceue22m6KT4hf9wKFitEc67ZwPsD6ZZe8d9ydMEQPVxFJxxkipPtpPJLd5MN7an6C",
  "key14": "5bqpVa3AVYmbJWgemjHUBDgLr6ihcXScFmq94yPP8KFtmv83T29stfuLWmemRQL18pQBhMSLD7eHeekvf99ZpbBp",
  "key15": "3gFAPpz7WRYcoV2heRyHtXP6T5TDpB5adBti6DNwTkeZWGh66fYk8xQaFNq4NSHm3VQX7r7R6aW8btMoh8tjNcGi",
  "key16": "ywn47CTkQmtWAtfyP7ejHVPspbDBCmXnic835e74TuBmc9upfdnB4RAv7j4Fv6SwEp5cxAUxjtfA43KL5heaPZJ",
  "key17": "2iP3H1NVUYQuTKyhX6DhiDHF4BVgMLJM6q6X1fBp7BMVFqSGLYaVG6R9Csj8MChRErTi7qBhRawQ3yYBEV6VoJFj",
  "key18": "2sfD7oCJg1wiDV8DpdHKm5A5vE8AG6HoUDpYJhPXHM74T7spGgJ3Jmhmtn2L9U6mjofEGCAV72ZEBE8mZ9Q2Nip7",
  "key19": "mCQ5EHKRQHW21eEATL5f4Twszebj8ZzVYuTsuCpuMGu5rJ3R9nkaQJQaRCbWtPZQrS9D4vxFm7v5LnkEdJpTKtP",
  "key20": "SqDKuTs4NB2cQ6WwdZYbwRMBuVzcSYHaZkC6Ms6uvHjWbi6X6D94WFDC7gSAgwgKmLxwCvdHq4eHceqyPoTSTvB",
  "key21": "2o8jBhC4qiJyFukrmY3tbr37mseoHiMQaiMxbtA6wMyJCMSVhQnTuZ1EkzVA4iFD18nq5NyVPyP8jMdZF5G3k7EA",
  "key22": "QjsMyb2Rxr55JintW2kc1ZiHVPEZJ8PjHF22yD3AzKureK1n1UTAroYxMqN68GKWTGgnRDJiiKLZnRBkc9ajBGD",
  "key23": "4dnjqejQvdxWwvTaqS43wfhCk3M2oQQjEGJS8tJCvwqJa7aJVWVSXxJ9A7FemdHp8dCDqg2vcidV4FrD6CvQJesY",
  "key24": "5kcodhzv8mCa4xjiaa9CZU6MhyWy1HtdT27k2XdzG6DJb7b8gG987RQphppc4R5DiBUcCKp4ZR53gvRSe3RFqVDg",
  "key25": "2y3pEQPXBcQtvsZA571nDGzLHPPvQ3aKxwWchxmhvHuuDVAmfn7E9acf6RiM5PL1kDknfT6rycMQ71fkbtibqu78",
  "key26": "5k3ybksrpS3ET2cLAUtVjgdBfD3nj6G4hKjXM3PY9VL2gxbddN3Rn7As5WeRKM7yf3AZR8pZXzbvQ9dkCyjLNx1u",
  "key27": "2D3ufmcCwbJ5Kcbax9VrU8Cao6dhMuCQKLxxXXhHzjDcoGJVKKA58PFryjmTkv9KgyN6qGEubTSFEzqH3YxUo2DZ",
  "key28": "EWTuwvonfQCr8ZwiP5SSzQGmg4aa71sapfvFCRLSPmcoodRv2EmE6zrN1ZqTpX6gwhsErC1oyMX1sEr7bgnCUD8",
  "key29": "3wGu7HGpEd8uQjNK9gTgnnBTy2W4AidULfNA3ze38PBZMwtHtsKJZLrNq7kS5TXXtjsKigWMuHr9am7dp9zouMU4",
  "key30": "5udHrVuy9xjn6QFTjbuAnq5fu76ExgRDkJV7RgH5zwaewP6WtUSav2J5Je7nSdRabHEgszeVWbc7bFkgMRTHHCNw",
  "key31": "2iEidsFNetyYv2Dy4uWrWHPZ47qrTvwYgQtvAqjSM1dQU3ii3Fd2WBxSNdEEVHJp9fQ1f3KzSD5WAxaf69yBevPq",
  "key32": "rbPeB72poJhax1L6sCbNJ2YkswKZyVKDEdZzgDN5PnPRFgNtEzRpKA8F4tZxhWy5jrgc9bYWxzcKv1mnf9Vq23h",
  "key33": "3WXXXZFXKSEJXMNpJhrKdVXv8GH4EnNDSqzLZyYhn4rMaRnPcwfCdWinzyVvpX9Mvx5vXCTaGYht5JieAEgYPiEq",
  "key34": "4rBCNBBZsmzc7zbX2puCSAEACcpc7JWG19q5YTSq15D968MeGrdSnQ4TK7CkC9cMcWKHTLoCGGrgsQ5aJcizzrPX",
  "key35": "s7qRFzqvjyaNYgr6yMR9PxdVfj1qF6iewautBo7XTfxonJoc8d8Ea4J7shAtufhscbA3er5nb7QDzpYr9vTZYAp",
  "key36": "3ZqhurjJXZBUYcZm4wfvoq37wDFMNspfYkjFn5eLD8qvZA1hWn3X3sEP4sgRA2vpuFv5Wss2NQADkwY4yBXdoRZc",
  "key37": "4nFEhSgyrRGbndfdq7MWFSwvcWr3xeh15Mvx4hmQbK8xtjPDos8KgK8wdEvup6eGrV897d245YhqzFjtZuaM2xVR",
  "key38": "4UkwQGbPRsoBxDeGeDAzdPURA2eGCYxUXhBvkbNa7Bq9Nqfyevp4UULBNhiDV5yeAtzjuGVJR26K7Aa2RcYKhKaa",
  "key39": "4QEtdjKPf7x75ZFFffC2ki2U2wNnZ6AH53oaVYGM95GbnGrENp5VXyKVXHpU13z1PuqyfrGPXXjnnxcM9du5APzn"
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
