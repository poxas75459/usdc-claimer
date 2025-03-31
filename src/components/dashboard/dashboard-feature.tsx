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
    "2nkPpq2t7Q6q7ShFJmm1aYKnAMntQqSPsZ3sP9WWbj7fACdgHwNQo6zu85BDBHp7dhAxuUkPDXdG89cYKNxD2jC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c4ZFegWmoUf9d4AzWJVajE3qqAeEHkiz5xAgH91D7GgiUUPiqxwAWR8AQ7ykJeAXVP4ZGVpigqnmRCJagwXT8vf",
  "key1": "ZH7FbdFMgAniv7CmZ3kCARz28p59UTzKc1z636iLeqeCUoNBLueTdQhsMU1PQLLmxPy4oH2THrXDhyVw5sP1E38",
  "key2": "3NvHUA7L9WHcfAH8MGfv88zKh89QfoRNNaH9HUVvPxi46DNtMbV4V4ZFyXAN68BvDD2RYRfc4tbhRDs16FMvedd7",
  "key3": "4WoGSFwj7C7HpxGgEhWXbpsN9fF9wKdus6kk1hMFfyg6vFK9j4s6wkjNUyScocXXcXqArF6G8SKurvZmkJGbcHVT",
  "key4": "bQLGkPnBiw6gf2yVpCcquKR35okKih5Uc6h1ZE6Nmwtu86q4rMG6sgDREPbNz8H8cMa9pcLUjUBXtAabPYwJYSc",
  "key5": "2FGQ9a7iDf8ku2hdghYjTmiGEy96N4puyjgdSsujDSHKWHkuk2NBZQNxyc8A27A1Dwc9HB5pqNGMmna6Y2jcCpLM",
  "key6": "5syJrFed2hQVvmS8uDY1LdANGPszd5ApHZ3dFfy9a3CXf77QNcqhua1zU8mUth3vdQnQNd1pcGbEpBHDy5AzD5Tj",
  "key7": "23CiA2gP6dfywrDo5FzkCFxN57UeaereiP7cPwFtsKHZYnLnRKar6oQiYtbrAVJ9uN4azr7gEciZwTmSq7UDRUcL",
  "key8": "2xATupgrbwKxLT2TKcFnFZU1znXtwFauRBycdwwSTTG2g14s9yzAQn7B9e3x8K8LVHAqHSrRHS4ejnsmYAKEvSxy",
  "key9": "5pLNEbdnRFMtLX9WQ5t2PR27UQS6hYFPGcQAYL6BZ8UJnETNfBQGGczkDTxiErzWHMxczHa9Kmbu9ECXY4eNHUcm",
  "key10": "4Z29sMyvnRHLcBeconty3fbeRVxieQwueHUsStGNZbVfvLR3TPFZeQFD7hApBBRbwwadGSxYwSjUx7oGGb8GuEuX",
  "key11": "43KgfYrKFYAoQk6QcsDbFhKwTdoPPjvzjZe4EsM7rdJsJrGS88pYkyNHLUETmzxNPPNoaAqM6otmDVff5F2mx7Tg",
  "key12": "5qYLtFgTMLpaAsiqXoF2EyF9Pb36tdsk8kd27ikAnAzAiMXRXw4SCXxiKRPxjCCk4NSPYFj2FGxBKxY8ykmCwbfj",
  "key13": "MuBZuQV4ZJfpdGAUbXsmsLVFVZTVsBQbMLJCZBu9hNeUzG6ndZYjsgE9BgGbrXof6FfWHXCwbFT5v4HCNhuVggQ",
  "key14": "4ztPtAPV4KEzFdBGL6pHF1nqjkTRDT1xL4XhZzwYB9bk3eG6zayAKjFPw2z52T9jvU21MYQ5ef74VpMGH1CwSTUs",
  "key15": "5iSrUEipNKtuMJhHZjusSNfnej7x1np6oMvXRMsiiCkXL9v3J7ZCx17zgdu4XQHucnvxpgjVQ5L8K5DaKivxbfey",
  "key16": "ngJhMZMc4ioconF2wonjH91TMi8PBSXuFgkhprc12nuVGAAueRW9bzp2WcEySxpeV2UhL6RSym7XegbtncT3ext",
  "key17": "3zwKTHrqPwtYiMG3j947vxR5RLjwPaK8X6jwf7Bj7V72RYU8ckmZc1xqShHGwJJvdXtG4vffHaqRs3zitVkWq8UB",
  "key18": "cXzDrmnwhbv7SQTMQtJy8hhgGTnqSKD5165UGvYeACXSFM95A4PKLAt3ckfXDBg8SPnuUkGEK1aXYc4Y3edMsUd",
  "key19": "4uY6asYaumZkwTp2eZ1CnnuYdfxC61JUpmkzrFUb1HvRp7mUq6TwZKcau5dFyDTouXSLSFCSdg5S56simCCvmHfE",
  "key20": "558te9yigCztohvpAe7okjBN81oqt1c2ZGBoXxPfysFxqFF5Uq5JfhJxoCRmsv26Q2tVN7YF3ZLwj8vJGYDnjxYg",
  "key21": "4Azq1TN9hcz5TJTDSpjLhAnzvY7ZsBiKU7BKbA7hns9xBVZUqRQwxe76zvzYDzo7vSQQhPovHoKvs78SpF2GzZ4X",
  "key22": "M1L6HCPeo7CbcL52PjYtuyaHdq9t6HxamfwwyzAAg5EstgGLNQs66KvGWwDLgBvs9HBQooByTsRMRMSx5fcwRSu",
  "key23": "aYWtFC2p2ovqhP8ZCrEtDUxoRdNuQdMg15HkLEaJVJt1QkwKZUbCPVh8uuzD1ighSjAVwxrcNnbUxhNJ4kownJc",
  "key24": "3XMw7EgYd86w8V7Kk1HKCx6iNaru49P2LdTmCdzVNoeZY37qyQEjvaR7zYyh6K6Aww3r9Ao7w58wfJHMhdKtTzgq",
  "key25": "4ifK26LzsiHEDp24Udd8zHaScw6c5f1MEEfaavZMWJXfe5Lnu7B8qezvjJHoG7quZ3tPQF6xaXoSTDvGyxSg8D1u",
  "key26": "3h3wyuvT8KueFWBY6jRtVHk17Zeo6t16D16oZY8ZmAKh4331oUiSYZpE3JntS2eA5e2DpLLkcfuYZ5FEVb5CtSzA",
  "key27": "2ybJCVuZg4xmnPAMyDWAtxrhFw6oh4DeDFdCSHJyaaBjGgsC2amusqwxnz6bmPGdMfmTxSkueN9WKLW9WzFu9eax",
  "key28": "26FsAwZxBQpnx26DzfKSWQftd5tA42jX75ekG4VqLwkTWc648Hxc2SCVyfVV3avByMi11iyM1e4dfBPzhD2TXrjs",
  "key29": "2sH9zEDT5g7fBTCWyJ7V1XcUvQuCaoUoqXCVjV47V5iJF48XaRtgYKjqYwAn15oSraBcWVso19Di5h9SEgvZddPP",
  "key30": "4jJ6w5Vw1V23BAY2UrAMbRY8STZXcrw8zf6oYpXTQngBiVEX1mrKN1HKRSNm1Rbt9qvqujjay7ggNDR9Nr9k6REJ",
  "key31": "SDQrr939D9qpABvLC6RbudukRVZFknZ32dvdsYGTT9LsvWjcad7upgkUx72cpMRLDah1MGwt78WGk8a6WHkKGTz",
  "key32": "5hofY8STxyJEpusbPujdXRtrKNuaGCrUWczxq34Jwe3tv8xovko8e43Ba1bCYpAGUEEz3f32kTzv7ua2QnSEwb1M",
  "key33": "5r8G73xKH1gxSKKwyqjkLpSGdBPWrEtupYB7rFyabYkTocgR6mZ76GShZoySZqkkn7iuaQ84tBkBnvdMJHGPtJwd",
  "key34": "NKaSPDnDLY2nxMEnqaGqtCYU5QLb9B4FakSyP3h5m4mnirf4pS5CRtp6GhM7R9m7pApWuPRDySjNxaKhyPDrnP4"
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
