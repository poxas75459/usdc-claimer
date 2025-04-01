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
    "33oTQT34rZBjasRnDWyGwNb47NpzgW1HgMFG2fnohtJGdRcBXprBJpyf3fGCTRHFcA5HC5QP9BFafkgGBPSqiLzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WCx1CYBaV1sVMPYgvZafwdkPzExYhC1pyv2EM9QofV1aKH34gKvPhkJVL2dnx2VeLXNL1freqpaGZuX4sfyYBSE",
  "key1": "2uvZz7ch1vbAmxmAXs6FNLuDVT2WbxM79WaGYjCvD6VwKJ4ZKffKHqXmTaqCDiJJyDipNiRNeUYAZpNUoXenV9iD",
  "key2": "xX1SpXXEvYaGDixcS3kiX6vr1tYd8yBJVSkatYuNmfgXrQq9kLsj19xvHucKAiAAM8Zc86hagadaivuaixKiuJX",
  "key3": "J3hYtwZTniQRQ9mdh9tZUFh4xWv2gYmW1YsmLS8ZNFv4AAawvqvmHFsECVRTJaCiXR6pvzdAVMWEdiMYCxkdAR8",
  "key4": "KFMvMUqLGcy4V2gm2GdxErmjG5B1p4pUngvqVgB48T9ioJsvnk9ZUVqmtfehKnvNKvY88f6Jvy5L1Dsdewt6nKv",
  "key5": "37NYnvecj5c7cNJYZoMgzzyf75G7726HptRf25vBj5m32vgAH7jRaa25yVNEDqV5BZnp91d5P2j9t4yMzBTJLB63",
  "key6": "5bLxrbSSmgfSM4VVcXmGmkvmSvpwD8Dtj4X4LoebycxeVaGfFsqAFoXPcApmnY94Z7zxRXwARHrsoN92gTuycMJT",
  "key7": "34sVPNWpGxjpoiJFQ7C7XT2UGVFLQZ2Z1enY174GypLCoFntooHVA2Ax5SZPToxnbPuqjP5kB7CLQ3JGMwCznYm",
  "key8": "2FA2pgjg6SLyNNn6mPJezACyxJu84v3gS9EBwVkfQLgoid59MT9NPU7EMN1FhugJVBT3y4PidexM9HzpSaMhuugm",
  "key9": "2rkDsi4eLY4eezechbP1UQZqhtQAfTYpS15SskHBzWov92rtwkAPAvcZZR6T333JYKNVYoTefFdN4YHhdvUWbojp",
  "key10": "2E3rfvt6eyoY9DLFbU5k9We1AhTCXVbzpRAdRubAkF2as1V9KXF6kcyk9JoejZQ8sNsbNz3STNP2aXq5oRVTWQmP",
  "key11": "23HghRDt5r5MTkF3waxpQFGQXL6pPLNuXBE7NYZHVpuLc3xgqdjtXfHfnDnxgch34pukiXLFYa3271xpoqbZzgYF",
  "key12": "3WHpCVWBKMnnxU7CWkSWWThRx8aPaSYgQjCj7GfkhSswktoHQeFE9WSvTM5emaNbN4FVGbNSKFemYDmD5EQKMY9G",
  "key13": "5mxTBjhCCADbwzKpLzu6oo64bB4Nzrg8LiGiMGzkjaKweA66BpF43L5EC3oRikiqLhN72Uzgx2vacZhXvSJNr6fC",
  "key14": "5LYWxfBkcEYQXvKTt2hmak9SxVNiJ91XKmbrcGuzH3jzAhEXi2zQSN95zPqDz8wNQFZPXgNJPyri581Ck27fR7Cu",
  "key15": "5wjFyx4baQjj2cSMhTFiNmR7MXs75q6Nw72UVvNYL7wxLF4ssVGDDWK8twGNH83mH66ZSYRAnLrTwP3aP4HvHsZm",
  "key16": "5vbYiQzgnjy9vaKzDQ6QVCatqon4ik6FtRR3m64eRicE1EkfvAjFNRVxwWf7NB8nNJE3scBV2PYmLbTR1WNKVKf",
  "key17": "2hQ6GYxKnUX98HzehEpw9T1RS5vjDsYETz3ncXrTXQfFD2bUjU76N7vKxb94fEJ5sBjv4h3m9nX2wyphpeJ4SK7X",
  "key18": "3SnYZwXZPSZh2EAhYT2utynQqJyF5M5ZTxZ25BeRmLNby7GTv5FecS8hd2Ur23iJhhAsyeeXLVbNCt9ZRbwn9KH6",
  "key19": "377NCwtiD8EjCrjiEr88e88u6ignP9iRiSVDwb429pLsr2rzhtgyFL3z8G9hWv677eHZg6U84pTAL1x6mHd1QCK",
  "key20": "5biE5Y3TZPUU44EF1N7XUm2X3Qsg9tvPkL1BmLv9Cd1Y3KHWox4XaGPQoZaTEmq1WjrMxALYcGE9n4jsjhto9oc6",
  "key21": "xdFieprkvKq21r8he4BXX63toy511qJvwV28UsoW5hWC6HBnDmSXfb1MrNcuQi7CN7xRv5ZmeGaWWhK5q1J23XH",
  "key22": "58Si1jvyq4kqaVqwzG35cuBkdLoKrTYzFiRtz4N7JY9RYaHJsXJtBSPWft7GB9B9GhciukEtL9sqZc9psUXmnNh2",
  "key23": "4a7w5vP7LHrcH4nS2oLaQGCqsx8W9uFRJWpgaMwE7Xcd4FAWjGBUkpQRgkZcio3HaPe6gAYHCu1qbXjrmnd4qdyW",
  "key24": "vdChuScXYNx75p3Ez42TVLMmMqGstkTKqppHXDbU4sF6Zqov8Di7kkaT54qgpqo41ePQCRqwoVy1isFd7QtxARJ",
  "key25": "3cVsdpaxN5RKDcBEGbbiJAFtEX3mTWjABqFBzpKRrFftqYHpP2joB8gUKqgi5ZP9Fx9qxTXMoY5AapfS4efFCuNr",
  "key26": "Am4JhmciD4zD3ZkSBB4TXzWHLYkdaRswS8TnBP2REctMbr51EKkQ5nrPW7sQyScYaUhjesn7Wypyt6q1GLyQHtM",
  "key27": "7TCa85pigGiHUjehnKwoGv9FLvAmZAwaWvkghKbf3Jr7oJUwscrFLwDNacD5Fu3dyUF3PQLB7b1YeXLLM46BBeZ",
  "key28": "8HbgrqeB4qrsG6Wrs8HQVKvo1e7tEUNDYL3mkSunnDaUpWuUJz5VK9gaE8whFKPm7M4iMvTzSCU3gXVrfRKTs9f",
  "key29": "q4VwjcqAWyqrRzA6bZnTGLDeLHXCSm1ivq1guAMBybN3MwCcXoyES4uEvF8y6qt6iKt1UQDpP58nzoQL6o29Znc",
  "key30": "4ZUPy8GL1jS2GVdHXxUmBZF2aRVkBivTtEVtdgf286GYmbpHqsPPfaFG7QjR7AqTiD9jSWqevughxE8KF2YJSUAP",
  "key31": "62fJVifrgqKULqNdRrB3qmx8w9duAPe5VRus1nij1AsaUMNeHsiAunTjt9ENEdnFbwX1CNoBMHnnAunLVJqFsM2C",
  "key32": "42qRwaa5DCcFN3UvkU1LUVs9jSmYMpHR1oXarn9SYGLBUAthjJEZay5mEpuAV33owBQh4TVvGDtMwr3W5wDqgSPF",
  "key33": "5xeXFixsYcPhyFWuSNdqEfRktf3xyR7dUqGYC6KUZ4iuf1HM6wHw7zzjAe2dBfvuWHHbCMmx27T3XhcznRQFH7gC",
  "key34": "51qWoM93aRm1aZn8Mbm4aggvzv2Evn2TMJeQxBsm3dMXTR7XQt8MqGmFVNEpLccX6KHahft3bwkNjx7uT4XzFWGN"
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
