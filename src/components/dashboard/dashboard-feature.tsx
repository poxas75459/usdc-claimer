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
    "4ctLBnkGb8tcTqquTTLt5m4JFdFQeKb75TS4DU1usRqxCknM45pK3CrVpEKuqJ2EP6V1PTDu8X8DtdX3bhMqQ9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZXxGxgjpDh76vYsK5ShVmUgeyyBaU769ZCfPLGczwcPP1od3bbsGczJRYtSGgZGbAdrXCHbF8Ei9FPV9dptNYH7",
  "key1": "38UsSEe9EAAYzTyvfopd3771cjfDgytv2TC2dQUEEQrzbyisZJAm4juqeiSAT6Ucry4XfkEtHRmo6eFzGLSXoJyw",
  "key2": "2BHWCqQbZyPByXjers1kJEY7HjdZK5sEPoNMQJSKbFqyYGXwNDh3VVra9VuRofWA72iVyQtwnutvm46wjiZ154LY",
  "key3": "4PPn2TbyGYdQbDeMayCZRdRwByZt1Ju9kzUabiJgV7GyLLpo5Y6mr8GYP5TJ8EaB3xh4Xr2vDWUFNxJMB79Fc1AQ",
  "key4": "3LHoDsKrPEWaCqpuhgq9BXTjjL6GxiXSfk3aofZrr5heLTZA8QgBYAkdUwjdRdgsrobKo2uJ2dqDVxSQzvSbJ4Nz",
  "key5": "3bpZ7e7Q7RHQdhBeY7Zd7aQwW6vkAbQznWRB7X7esVy5qr2vPoyYeVTpaSUuebWP3Z5yr6RXxAArKHh4WJrAAp8B",
  "key6": "5SWc9Yf4YM3kNK1nkBwmasiu8gaWxzssyp5MEh3raiK37HHYQtea6B76qyxrkpuBPpyYkFp1RBcVysCQN8gr8vv1",
  "key7": "3oE3puwuZpDNJbCpA3wndWAhJnv7uKxJmBdbarq2qHzk8u9wbhRKULPTvFmED4zzvqkAp1weH4iJ1rFXQaGcytGF",
  "key8": "4WLKT9xYhLNRYqsaCe9Fw4xK23pY2yPvpjJE7z4GR6gW82JJnWAMtJfrKsoMphyU7btRVQs8NiuhvaroAhgZioq3",
  "key9": "mSNWtcwz2EpMjWW8cYXKwXLfUKrBvZZtCFWj6DDLy2iKn3jLa3szxiHoBiKNRRg1sqeqo2AA3jsoWPzFFsU6Q3H",
  "key10": "51Agb2W3b3Y6PxcBG7e9apDiwdfLwCunVn3B5uLFXyDNM537fZ59mh7DMCPsoDnjSv4PZPHin9wWfUN1oz1K3AzC",
  "key11": "2J5ecN36Z1TcV2mFTcnb1uaHquD4y55jgps5HAoaAzFYh6C5rvvqt8H2TT4CiL4xxKeyAFcNLjkUMnvjBPnXZx6j",
  "key12": "3FBcLbhsMrasDveMra5RVM6C3VrmGnjefJFqnvpTzteduCDQZWpgkYamkuUCsGzyEFpv1Zn49wnWofYuCCj96DeB",
  "key13": "64P2LWWNfbuf538fDKYp27GHbmQViDxr2qwcmaPCG1YE7ikgetZ5tQ1zfqaHbLfdbhs9fdxP3s1CxSfMfdetATx",
  "key14": "4UjLfr4BCsYMUe8WXNLM2Ggtam2nZKeYaYnYuGzuVzYPNbH56PpSDXcTkcRdyXyYHyFeQqmEGz78Pb59BuXbH4ra",
  "key15": "2gqSxfHNhbtwmuXYkvsW9n7yHMQWWsJePo3q5ofn9qqkML8b2PdYFW6iDEztqqXWYRfUVEGpejiABhWsNRqMRwQt",
  "key16": "3LYqhGDCiH6pHccqibd2nQ2wZouhqUrFVuXiFcEzesScG2xMhXpfyj4p1Dc8Lr7RR25NTDbto3wa7EXA5u12rxJK",
  "key17": "2VqJzTeW4Jh6Pup6UpffM2ZNqGHRNDYy44qJdCPtzgvQnqiutG44wK6PfqRUSnJb13h47hHEvxwd3f16KtuNxzSc",
  "key18": "4jaLKLLv1T9jkBCbB1th4gVa4EnLo8hK41Yuf2k5RbP9E6uQyQ9HmBxS4n3KuiJaR1vtYhehniUyjV9xthiEwH6r",
  "key19": "4oaUfRYcWPugiQF5aYmWxyZDK1KLjYNLM9L8nJPBEp7W3V5U52yEmr1vHC2YmPbH4cJebNy57WwX2rjB2ZkHNtZu",
  "key20": "4sbeMvRiNa7X57uMGmW2xWGHBv91Mzith2GvVcbe8ADi2ncxzuJoWADSNANaXah9ERpEK4WPxaiUTFGjHQPRgfHa",
  "key21": "o6oyAhPoaze3vx3A58JY7Dhu4ZnqNc8mwwUBqfrCxLGs3a75vmFKv4Ud2N3Ko9MkdUr91izdUVyZFt9G3XKRn7m",
  "key22": "2gQDw8s7JYhjfsaPhcLxDusZ1S3tkaHo1kB4DxUgDrbnMf2QLpUePC9CzSzTM6WyZyuzafUWsaEWYkfSEXWjkhy9",
  "key23": "3ApouGMni76ddbpH3aCHpLCMNopTtWUSbTVotwd5kUsHMbnCWZHKzvo5n78KE9rqWUFiMqHFJHGzyTJoUKizNb4b",
  "key24": "3Dt4xrB3AmSy5YJCFbcAndP66bLhRMWdioai1G6evUvNFH3qx2zcLVcToGUaz3i6dd19k2QQd84ZknLpGxh7a3id",
  "key25": "3MQeq99oqR57EYKJrCUhwmWJwD19nJ4sth5ew2dW9FDoY3cLGfJvXnNmqofDTFknuKAqcTdp8kaRh6Lc86mRs58M",
  "key26": "3ZKwfp9w2236y7fn3tMwVXPWasXU43RionxEqvQP4oB8sd2vtaproN7tsWpJ1tx78znsjHEynfSZwkyXjYVz73fm",
  "key27": "4opJ8HPe4F48hdKkFnuzqA7yMP3pPbZzgjgqDo2XPXqSFNjwjeTywKBcT8qGDKQi8KtPpnXp7GuBWwkb66M1kUaT",
  "key28": "4zuFiMwkes22NyryrAtzggGKvPxXYXGkxERR311VpLyvj57CnyCw1JbdPtvcRAmAyBfbuH4B7tdhTg5KayZ26sR",
  "key29": "2tryNQyxYeMm4Nuc4YHsYcLwH2TZ6bwSJAJjBBdvwuhUJR7uvNbVQbcv4VLVcpTiv5LmrM7KpgTfKXSj33wmapW5",
  "key30": "4hfGeKdVNsNLinbWTGSqEF4HSrjmV7pi6TqUpWczzXQJDoG7hb81harxhaF6Ys8fUjGSzsGCQWBhxMTaJ5RuecZ6",
  "key31": "26Fc1dycUHTcaSNXq3C16EbaGUPPTgtYFXr8ddtGSrWH99fppuRXzvX5XXJvPesuEHBMYSaeKoExkkeoSJv4gm3k",
  "key32": "4JaWvmYM2Vd9hCe8HfkpArCeKW892VXTMn4kL4NzpeB6Gveb848q4vBVeSWuDihu2DCNGNHtNr5J9Cg9ghhy96PG",
  "key33": "2TYs5LBjxPPHvkVvt6gcR5FLecE4QnTEF1rWf6GGCnenis2JDoT158AAU3bf8a7SZULHfjAkmU7FPvZ1EGiq1oG6",
  "key34": "5UmSH5UzSbvZxANLKctrfBT2cGBLU3rst6zFUKjvjeRwckZdnf7hgMiHXSRFuxY2HaLs61zYPhKWGPFWNZhEc6gJ",
  "key35": "2enqDoWjmq1FzeG9wRfgCF4ia26nvRbgUE2Drudy76uCJCnAfsaMU4Mmg2iFqnwywvsDNZaNq4yZN3V7WrAPM6xH",
  "key36": "5nijv74LRpEzF6zTaHHdaZbqKPGDUGsPjRHGJZ7tN1u6haq36fAZ6VBrqvNm6vA1irCvfqthEVk63494sHu7iCDp",
  "key37": "4CXnK9g2u3noA3SntVj7PTb8NeG2yArFHSdjAy22CzeHvBf3Bfnd9cQaJpbjiVfb2rYkKFaaHRFCizsqZgMV5pN6",
  "key38": "62s7GSFcqhdpMqh7sTVphfQAThfRoFbPWp1PLLtc2ieKpu7UohfXnSnwaWY7jVCheNo7fedj5u2NH41RBehij8BS",
  "key39": "5PTKGSQyfJKdEmaAfyKcDhv9j3EZFKrTPsrKFzzCgLkk3MVaWmNVBkGPfm33shXs57UQm1PvE7kTzmHRhtmptGyT",
  "key40": "5JoSRR7LCoaMLCif11akUwkgxSoMWxMjn4tNRzXm8jbUadx71xgnpxLxz8NrjmcYaT9vAzd1Rni6vkM6JX2Lgshk",
  "key41": "256C7hrQQSPCWts5SZZNe4PuspVc3urp8Cb8dacpd8iDBcbM6WbfCFfgMkFFQ8eRhBeXN6Prg26cxjzkn5Z16Hub",
  "key42": "44XS7sF3qW7Bzz39QGkriraXtK2dPUFtu3FmycvH7qpmDPfcLe67dWD7jc7f2ykCo3PJTA3Etnc8cdon25WbBUEs"
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
