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
    "5Nk6WLaNqN3u8yCtqRXNXuhg8e3XUxKRfr8CCcwUZ6zuavfXBVyjimQjVs47R5HtQ2DM9hJ7Y1upN7q5SBpvKHMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zo7nYnj2zWmAX33FwnKWUTZUqQKv64GrcPCYekT1f5cvbExTtTYSBbDdoNFbMM2DzDjBMZpDnd5bMSuddz8Lpx6",
  "key1": "415YJXWbsrvE99n71HYuVRJgaGsrY29JSiUgn4cBvPJLw3AMpmnzu6Fs8cfQCzjPkPm7Rd3WGGVz5QsHyi4qyPQg",
  "key2": "3H7GYCexShByqiwQw5eiAGD5Jqr9Kqh8uhqMaJYbWNvooqwM1DyrMf3Gco2H71wGMd6YtCK8mwjx3YXMbyqunQhk",
  "key3": "MoMkDY85rbSpMisUwgynsoT27TkSjWzWkQLdhy3BdKoBhLqvppF4HdynU8xZoABz16CiXf3WKAZq4QxAGFCTNj7",
  "key4": "4wsmf2MYJcGUfo3FwoxJhoLeGeZDoAtsmUSWPdPyQxL1F7Gztw6a6VGcDhhSdyqfRHQkxEy67vne9xs6kSVoiWXN",
  "key5": "QMTWANzmmtbfFf6bkSASt3aNmr6JaEXF2YfVRGy8hvzCbxNK2tzU7dGyNEfLrqyHycVSmbFMYXDLMXGGyTFLtUr",
  "key6": "2esP2EqZjFBJgCRJS26RsrbgCCDh7QSi5nU8UQecThepWJ5YiXA9HMkUb1i6Q9Xw34DNsUevhkKeGhsysusqjoL4",
  "key7": "42zVxkv56HwTB5xJg1dfEzL7yFyJcVyhmDrq7jTbXAoH1Jvu3GNpS31DUwh2AGhWj64NRhWxJigGQurDyqUYXm6S",
  "key8": "39Ximc66JqSDCL9rJUGFXKb2VL7ya21Qfc2TTmZzuSUQSotZj3Q97SjfxzXzdHC7eTDyram3NJAMd2BqK6vaPDNA",
  "key9": "3YEAMRo8LJGpdvr4mMKgVUsCQ6hsan4Yu8syvzoPWJaUG1iTg5YExbjkponRBZ2u9Knt7aimMTPCmA9BDZApogk",
  "key10": "56sjfr3xqAqDDGwZYj3ErXKSxvb8Y7wokCVVq5pzihec6udyJSdQ83EDUydKMYuJHU61mKm5rejUHLyQPEkEd7Qq",
  "key11": "4cov8x7xUpyfHVAwTBst9VfkWADavubNQt7gixavwV2TqDoeKiE2veutRsRHzELo8zHZWjTwHrqb219XpSVJUDSu",
  "key12": "hYdE6XWRnPmbWyok6yAsvSRuPhxxcUQYYBSyAMbDXyR2ZP96s94vu1RJ49xASP6rgYbHrkmFRBMsCXQchRHN8vi",
  "key13": "2Lw2WLtiY7buzv7myQuXVd4vVuMoKp4yZccbigMMQUTcWqD5TuLnoG238NX5875DK9Ku4evrXsriE6yc8tUhEE5X",
  "key14": "5LyeePq7W9eqtmTgTZnw4XqDyYe2WLjzLqSjU82gHSox7FpYhVNKeF7Q2QMTFriz5G651DHVtezt9v33E1mvBttm",
  "key15": "VqMwkJxhyVtWC54Zty7chGFjfutkVGCWNphTzjzgT9tZSC7deukdKdhqL3fByjsKYSGPxwyVfMNfDR4FKLzbqQX",
  "key16": "5pHcKN9jJYeMrvjRLZ7NU6218mah59q4T53YSWTPdwuvJ7QmXRceg8tab1rZJcnps92tkjC59SXjTiSMDDWU1BKp",
  "key17": "3ibs4Lu1faxefiv9iGtEUoUq2ZXjD78S21ZLKYmbCayFc4rbaMLrxCrYjMVA3QQToxGF1RudPndeGSDgKvfsEc1W",
  "key18": "5oaJ1CXPcHj75ir99Zo7HJaHRv7wZJkNPco6YxUZxmFWStTKHRGCMHrg1DDVpmrv7KNikdTqbc7Q5fyHTxF6oEdh",
  "key19": "4j6haKvQNdigDhas2eEEuSeQr2ACmAKf792sNsK2XD1xVV1LUvAGz3btdzyDuWHo8PKsuJo7pzxj3vySPrg2x4CT",
  "key20": "b2cUJJpnWBvUw4SoBd2gePBjhFKYkGj77Rqg7tnNFHbzTPHy6utKiCHAs7hyPwH5vecu28Enznsx5u5o7DS3RVR",
  "key21": "3e4aEkKt4bJxxQDVhbYHgNoCQmvmJfpm4DBAbVTodM4MHv92Jfu7NZbagvaNGbyg35JGFxXFmGmwGQbe7RdVQKXL",
  "key22": "4naja1g9iXm2PQcxmU9mu361R9Se7GvqRDwnB9iDGb3SJzKNok9fMy2zeLhoSJJw84w9jbw42YYD1JUg3ThVUmJL",
  "key23": "62qnvAyo4oJGEsQhyKzA4Vs2Q3dGmbSCUBS64n46aWkt5HM5dV3kh2pTtMBWNncfVg415aaAZZH336Ti43WYFfAs",
  "key24": "2yRg6p715oeJEemQcixSktKvoRRW5knK3xRhwbQv4kTrjwgas17TZYzL4f1KYaHhevEMjtJHAWrDN4UM3td22Bg9",
  "key25": "3z4n8j98c9Eqt7wUErJgzLyVVq9v8YqVYZijBh1yF9Z1Sy9WvyxK6b8pn9qmwCgBC7jDh3jwzGxGog9byxR9dmMW",
  "key26": "horqzGZgYvqSfVUYQ3fENAoQv1DojaJfDV81YyZds3EM5fkJMKMst2HyBBaKkxohjeAKo6JDgyyGzwGTWz3namQ",
  "key27": "5tCGvfJ8zCL2CSPzauQity9bqgLzXf7YuqqHJSeHNNLbHi33wAz4LFux4wT5o4QAtMZQjUcgQJTjBL4xBiDejcy9",
  "key28": "2C8zQTvEif4CWo6XZuaAncvym1snFFrGjPagB6B6ymfAnWEdvE4GQEXyzsV77HteaV8QdS3Phm6gfxExVGNvaE8D",
  "key29": "2wogY1vnriKFzfj9EKDjswceKds5ACocZqerNmvbPX1RK9BrzX944xjxt2tcmMzwcyKeSv7RVb61RZXTE9n6udyF",
  "key30": "LYNYnWbs2hBW4oCPzHTFBFVSoygbWqEQCQfR6V2joCS2v1jVmNkqsbqK59f3h9tdjzB2RbLNJxoDAxhikF2RNo2",
  "key31": "4R3JxLR2AqEqjYjrXRQJVFw26xCvy4FchkKiUmPqp6yjqts9BMEdBaMuzdEjLRaoM8ZiJdhXFfEAZJVYAXMBy8WL",
  "key32": "5vZTeXLpBK5L9mcR7GfsT2mquAVwbVEep2vm31rKR5witbvrTXT8hfg7qtTFksPf5Ce7QUKAev3Fc2sMr5yZD4sf",
  "key33": "2xEJyH2RCZm4P6ZXug99yftjQ1Lzp3veuyVnwxLXp35d4y3Y9JKUjqGtoAjPf2AcnmuPBKeddUQPLYbwziyppHFW",
  "key34": "5FxK8bDPiqcMHzouaNDthqFm5256aihH7Vk2zhiPX2zULy3Xke6ajv3oT9WJVSydNmU92gBDxsryLbozQRqneBJk",
  "key35": "3SUCv4fvtc8QoX8RVMgy6bcSPSm3HaVcgZ1hi3A8GHoHNSyR2HVGedkPDMM2zM3gUSuudXGkRD1jMp26mjcCuES8",
  "key36": "3JeV8JNo7YCK6cv2qivY35rq1fJaN74eH8LkRnzh6uarPhnSWzzmNL9LafvRK3KFGPPNiYsUxFMXqZdZ4GqqNv2F",
  "key37": "58mPRNt31SxDDQ5xfrxsbuqJxfsyG1NxZrRtPWcCyYetbQdLwrQadPkPcy9JzSwP8dEoDj4kDwRSgarLuEGRh4Mi",
  "key38": "2Y5RMzqMu2pLHmKxMzMaSEc4vHAox9P7295qcmhNMdhYNKaHgATxWsXqeKL3vHLpRuugxCAecRGynu5oqDUQ3B8x",
  "key39": "q6KociiA2MXLJSb22NgL5ZAmVU5QYseAfFz5xdoQYrGaybyxyAD59pXwYsPyTy7oHG3oHC72rRBQrbrQSSnEHCu",
  "key40": "5aFiGzBXAb3zGk3Zspm44bmqHaPJfL2LVGEwxpFTuMdu589uXCzEeSGLZXr4xsVAB7giPE7zx5A7QmdF5XUoKiTF"
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
