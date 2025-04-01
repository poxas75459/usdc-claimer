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
    "F2imifz4prYUokUoTa9ZPWQvuuhcS1bjYTSoPrVNWgxdfb5RyAPjsmrdpNfg1yVHB1g28vnPF9W18zWMSYqek6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EpmED7cFaQWbeB6Ejpxpe9c8pRJsTU4PbeA1cce3aXKyDCid4b6QztoCZDFBXaUUkanfaejSm1UVC2RfyaM6BML",
  "key1": "2DqnVbz47T9vddazNnJfK9LXJZtsW9VUKwX6hKiAAhxjahBen559fiXZDuYXb1xKmE7UMjazdSXnsHxgRRN23SGF",
  "key2": "2P64JdeBC7VcXrGKDajTwMm3e3HunEBm2vmV9cJqry8ipSLqbX9inioHuoxV2PQoWLQEzjcksHcBAVMHD685BLFF",
  "key3": "3nCYztrGetUEegxuGJCZSe5HdBQvHCrqQ8RH3AWQ4q7KebtHT6NtFBEQWKtTpkHT7VzBw4qvLVg1yWTXoPaGYA5M",
  "key4": "AJFm6vXykJRgZ8Qn4ER6vniDHmA3FMcD7JLNvNwJC7f9Ag3rP3Cfr1yGGcdWNg6MFiBSNDsAmJ9Am28gsFRiFV5",
  "key5": "43GtP6FugWxGBmSaxtwQkLou6DxHjtr6yn7suNbaBvSbCZKnwVTcwLRPeBowgEptzmJQkhtarUXo86MBCvJhGc87",
  "key6": "nHyMVwzhMWianVEK82s4CQbcXsuX5cZNbJQ6CszznSQrRL62u3QisMaeorS3gzgcP7K7UmWfaNmuvusj7p3Tdwr",
  "key7": "5k8FFn7eMU1bf3TUxAfo97EZYC6Gvuhvn8mNguCYnbiEeHJtwVdBg8XgmBcYYMHiTm61dhjffUkjHmHXmCPZoB5W",
  "key8": "4fAW494zaZH4aFmgY4hxG3zBFRqM6m5gDQuzwVEneCNRSGpCESR1oCSp8MrjbtChVgjaKHGg9A44Dx49AL9seBMr",
  "key9": "4mDXPK46mrkw3f8SMDC1bqR2GWYpLgfW8U2APwXD6UEi5RWBqHemubBy5yBKHPyy1mCERsGbCzBTkGasLGjEr6bS",
  "key10": "3wjmzYhbNyCLUApJnxeKXS5nz98bsjG5pUFhYQPceZcmNEmrJFbCH5tfs6Ah2zSZrYvQahmWf2QXMBrghv8JN9o2",
  "key11": "GVUaahxZS7ifgft62LJy6D7meejMPTTGstBugzsTUMX5YPVxGPnNmcNBjRhjTDj2EdM4pPsidfEeboo6x9iadmR",
  "key12": "4L7cNz5WTG2dfehmC4AY4JcXXPb6Ukt2vv69K8hzJMU3d8qgdJi1DG9vNvfnzMUk9pD7L7P47pB6CvZTvBUA2m2n",
  "key13": "HjRFMcwSXVtbvNNXE9Ur9xJ9wpVu4XGgR2fCmE7vDSRAJgj8XvXtxUD6PJnrFSvbSoLtufyzddNapuKVUkGeowQ",
  "key14": "5NJJ4yZrRU4T86K2Dtv8SL6vgeTiJtoSA5T1brVx1JTiSjdpY1X7iKgUS9TKULowQwzEcZ8JUry6F5dJ9MT3MYYA",
  "key15": "5Uhxdz27gCAsiLoJbTkabfgymfMMtt8jx5ZW7NwPVzPWXZUUQM7GqwnXUcshopsfhRfLVMgWFf5b7ccZNxb6TxAZ",
  "key16": "5yN6LpYjBqHvWiFySnJ3tc91uDVryFr3X8KSdFhRRHabJV6Cuv7JqsoBUnV6jRma92TpV8m9a6xUkLRBYtYqbjkg",
  "key17": "54a9B62UzVRk6YkQctGk85tYM1zGdSmugN3TAzNPyjtuGD8P5zVvq7vtJcWuW8E6oMHRTbQC9iDJWEWtLXjmpxVM",
  "key18": "226qrjGLjGcq7FXK6j41fWT9vmBqxdYb8ZC4hp2KygYruRtB5qmGSGvCcbLrbKpwvovJpUdcNKf5gBZgHFvhr3GU",
  "key19": "2e9ADUrsJZFUbxZ4n75oXkChQS8bxoBkHksHMKfZ4BFUz5qYXix2LHaRpuNECF5aZxxFz5oPsmghZP9dhiRpUcoZ",
  "key20": "2iVTgfYghmPdS2LERBSJvNhy5cD8SqTCi3j9Qjj2MYPM3pkzKzc1LkfN2heRxL4DkQkBx15uGt9C3hudDhtAAMPf",
  "key21": "2iCfZc6FM2gvxXPjqzrssAFzbNTyKWpya31kHLPYWPu6snLvteB8Cn44QVSt99W9MbSCrDSf1WHE5z9iGdZnZQiA",
  "key22": "qfBvico43wJBpDGNECFJYnA8Em3hw5FzKGm5u2Tks3HARuyrd4WtsWaDCpbgB61z7cL6i6nFU4Bpxg9b7pZvQsj",
  "key23": "3jo5oqXowxiS5PAAVhRWcKUarVEf4DjWuSziEecqUDL5M53zbcX8q4b8kyoTt9V6jdWqkcME4ucAhTe5rCDD46Po",
  "key24": "5FJNyv53Fgn6BxEp5ea1x9pypn5ErnZc8qnsYkRZfxPcJ24YZodK1mVuFE59DtvPriHD1YSwMHY497f5VqG4GvP2",
  "key25": "4wVSkNTGmd8NUd6nJ789WSu8KH2ztV1KRsDaDwAiAPwbhXNfZPSvkyAKQcA91myfCZ6mBi4UbvxRet7MNShr7AmB",
  "key26": "2bXEfYnmvk7PDwnRXpGAZkaq7MmoMUYuxp7AMbAaFnB3FsETW3Z333QGoJnizUTbf2SrxekM6RAdqUx4ash8nUyn",
  "key27": "2Kqve5Hpvps4EvRnjjASxeuUHgMGVZWBTooJd9XEaLc5EqCCSL3HSSsCgRGJMmMZjTpbqMfCx95qdMUYJxjoPoTy",
  "key28": "2NwvrsyXS7uJjPstQq6SQWbGbYZdWRySxYhJDnUmScDHeWzp6kAHRunyfrwLCz669WCfa7jSAPd3tWy9ytvtNFdT",
  "key29": "4AddRzd3KpsvPUKB6VSoBwnS1FwoEfoHqy1ZjjskYEZHmqXmxv4EydwU255r3DxUrXJ2sq8M6hdjjfyfnMn1e5u7",
  "key30": "4UCNc1PMZ4n5urWsuyoEkzyTVzAihj6AYQPzJcnYNk7MEcmp2uuhMVDnubY1Dh6pTstaY5PsGrQh6wiNHBu4NhzJ",
  "key31": "5PnxSqyHWV2YKCACe6PVbawwuV5LvcykJBkH7ekLNdLycwuhAVFBoyfYg1o65DkeyDHH359VpSSYjMF4BB6TnfD9",
  "key32": "8RY8sw1FkNyrKo28L2EKHmzZx4GhkGkLEq2By6ms5d9XhpFoMjVsxqr1a5zoTbeWZ7xP4qiWDkPAWjWbqwpXkuj",
  "key33": "3PwknbUjzZpqubUhaYMmFYhaUypHLsmXm4wxot9HFcpVdFK2MwnGQEXFDTnLsXg7DJNmcRXVYbpZdxmzbzrW9ptY",
  "key34": "5MTc5nVuCbHszydYbwULCWcSpDQxPrfpoShGABYszdk7yYvwNCvJyi3j6NgswjqQ3KLA9c9rjhxh9Xt5N7eXKCSU",
  "key35": "3WQByYDYzaFG9cDpsGjkA7Af2QAQVAFYGzcbDmYnSmJWdzdApKvYZJ6PrTEhesZmLGs6zk8YYK2D2B36QZMfVzro",
  "key36": "2NrF3VcSfApEMVFASZy9oZecP52XeykxAv2rRPsfhpsK98Z2QxC2LKbyV37dXEkamryu9e5csjxVohoMXfHSTJJ8",
  "key37": "tf6c8zGiJtq37mWMuUzKdFggZcbtHe2DpcvqG61ZEqCdYePBjkongyHKLFpvccXEXVhGAeT18fEAtZ8FA7G6nzB",
  "key38": "4uxFfXfuPKUWbLt2kDpPqjGBWUDorGcuQW1ptDSZTsAW8T94zVuABaAF8i5m2uBQTE2SHZNHivLA8Bwcg7jxCH6G",
  "key39": "2fjWzRfEgLgsUQzSUHqPvRSLE4mJJqBdGFi3ikBJNNr4igoQzroSgYwW7LFnC3HkaQYYqVR742kWuRDb7n9gv6Tf",
  "key40": "3M2NmSkvYBtqXnjK2NinJGGZHwVyBDK96sRRfTUgTtQbRHQWrwWbmy7Zoy7LNnj1ijAWW4gsjsXem6qbyPVaCGGb",
  "key41": "2gxECZbUmw2VMf6wLDcWLaojuBdE3fpd8XgfZy2VKSL5H1DUB8vGwTM1Zp2akMxXY8eJLjiBtZwttZdpUQG9MBbj",
  "key42": "53VG9gLRF1FBYvLSqiyfAjhgJSYoBFQnDAkMVSwGDxg28DjaXNNxSJCEyXqvLWHSxiKxzQhfhDkEP9yeYoF1isgB",
  "key43": "2sPo4HcSHCWmwa2npY3bZy9CGnLFq94mUuhd9bPNheFRqg7ERaXvpUjGbS4PGjTNRE151xkPcTF1JNx842m5Xjmm",
  "key44": "37AQ5pbu9NfbGtwpsdfZNDbtBcFS64x4xk4yR5ii2oUhZPhfdjWDdAdKXpxLsJyqJHvwouSCqg723sFsMYwg9dhE",
  "key45": "2ALsbncZ2P4oooHDpSeE6CBbT87Fg9rCjUcbbq4sX5Fi73gcKDd8Kz1uKVak1Fj3oVDih4xhcHTzWR5nxK8cB68j",
  "key46": "2kHDoBMSi9bwjRUj8inQbJk1uqS8yvMXJgNYD9DC1r2N6WPjDb3oN2ZkpnUxH3JbdBpaVwBosPxAAKPrXdkWbwK2",
  "key47": "jRDyuApcobvfg3NAJB8C2QQXM67vapo65zc12BXskCQPvrgfWaEMCNAgawdsVSaHDUNvXfZqSs9ahzqYCZGzzzM",
  "key48": "2aXg3fsKmEwDZNHVuHaMVXAFW8trf9hi6n9xcLheB4QiHp61wXBPKmAhk1oBtB3cbJDh7VDWGBsj7RCCt8eRALgq"
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
