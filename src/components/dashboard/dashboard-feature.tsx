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
    "57nySJBsF9Qx2ZPdios6GPdemHAUQvTMij9DUfEAV9uY9a3CSEBea3NXCwcZB1WgJH49vJo9AwKpoxJcs27HXDuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43zTvkGgnE1TEFy1FquLsS6HsWjUSUQ9uVnU2SUk2fgGGtSH5hj8nmq4CjxX4gJnkATHoaC9hUD8t1bKszu4kq1a",
  "key1": "29ctjimstDJWzbhqStwanexX56wWd6h3q6ghbTWvpoK5ZVsqaTGk7ZKJTXXvGaSdqhGu5FJUUmu6L6pRFLDZyNd2",
  "key2": "2vN1QZj9s639nzPR2ztwwWrLnrf8jEfH3KVmBRGQj4yBVCF6pZL1L9DDn5mtD7E8M7CxesnbikjpKt89iKd9VRZ4",
  "key3": "3W4hGpVn8yr4vwvD8oiD3fgBpdP8qqkMjTMZZQXicM4YM3qKq3TXDhYzgFYCwQRR6A6znQJgazYWcrvFtkiRCiRv",
  "key4": "3inDoJRseYbsppek9S3refSmT5MimbZraj2a6rPCLf9eLHZfuVq9fUxxK68hD364XHTzkE8at3f8PteecEQJ5kC7",
  "key5": "3D2j9GvmNnWp1NM7xr7Cs7s2SWAE2XxqfSrZHPtvxnYowvEcApuN5zEiNr86fiEtg8FYjRL6HJnxw1KheebU3wYq",
  "key6": "4rmMxVx3rjDwjuKrJmk2Mk3RErWrFnNaR5nk9mJcvTUn22TJytooL5x1K7nGH7VVKuo3b1rqxsHFkbks788VbdCx",
  "key7": "46Tm7PLnRKGvMYxryUhZzx9tjQDPAWMheMkDKoYdeLdkRX3ZQm17qCVt2V76bPKL4JrGysydaJYkpYsebfv4z7KC",
  "key8": "2gTZMxNw2KnUC2HbiYAvms1YECr8qt6F6CZDZnf12mDFN2Nnfc7eCDu5cRQq8jRKpENXNbJMpGzMSRYSPSHQMrDx",
  "key9": "3DY5we2tfqpJTXZF4DuC8TBnTFg6gYu6d5mfMEc6778PHTzhW2sf4RsXPyYZLPPEGjdT8oFFQYcqgnuYrRE8Dstt",
  "key10": "5f2CbJyTSLGtPaWUaPXXb8y3dXbTE6cjhgkvBa1G5igcZ4wEXjMFLLV9B8Ysj1Lo6fYWsoH4VzkAG2PkC2EfcRQQ",
  "key11": "4sGFmdSMqqxaH6sasKGbnrY2ztpVhV65PwBuYzhcA3M87C6TvJTzWFYEExjgSDutw5GvdaFiHpnkMfdNUiiTQinv",
  "key12": "5pUcPeYMggESC4s8bHf4W4qFFDcgvgbd4AjuQiADnYdPKoSToCXdrt1RFR2bpzTkygsn5S2Ytipq9nuop3dopg1M",
  "key13": "34VxnxnimCF5QhFR34J7x2hdW9Y5ZUtHwsGFTy81ch6J4gZNxEgFjJeJASPXp2ZxVae1AqdLdVVRopcEvAxGaT8U",
  "key14": "4hRmZifz514VtMrbPx9UoNQHEeongFCGtFbzk6CKGMUJ7YZ9F55i19rYZFPVeftjvLCfgEtzrTwrfmSjfDrKYPH4",
  "key15": "3zhonfp6DJPkXnSuyptdfHpGKdwBgsAQk9vL3gmkAqE8AFkznpmWhh3demT6y6Aavv9ZGo3pCV6UpYfKQaVAZsRZ",
  "key16": "2jXRZaYE4QzEsyuQtVFpocw8wWKkbtp4aL6XnYYowbJiPPXsueBW1mx7u9PRXQTmy96Qxds1LG23zgrrgCqDtzvT",
  "key17": "4W19S7iYu14RP13qEQWV1eg3WgDwMQ6hHEAZCktx6WXF9wAUMFxxx5R228NJgtVUG9GpebuBHDoEiTMCBqjqdSzH",
  "key18": "2aht8wM8Y1cUmG2beYMaHN8whLVfJehQe4mFq6vKgZubemyJM8PMV8TCFsYvYoUbKm6qeHiaBKaS4VAMjxWoDta8",
  "key19": "6v9grWd9Ethmnema49uKgYtHBoJYUQaELHbtS3mpFdLU2eBsnxbsgTkatTPpMHVwGKREcFxWoQDHM6riLKxn4ie",
  "key20": "53me3FMnYJSFpSRQLxvGRersTkXYCPJh1Hk6Wrp3cM6FVSdwFNpdFS1ooDBVFbx1w6YQDoTmXM41JVttc8PCZF5d",
  "key21": "2GhXHAUFeFdrs9ujK13YwQED3ZHEjsP1cCo3Dt4mLrMqSQAFVkYuSchbGgaoav4mMW3dzsf9nWpWUeoscCi7Z7m7",
  "key22": "5de7gpvtHdNUGWQs8y87YCbasVvqVCpu1epYTgemHUiVji3Xc6SGfQDpw6PHxBSmqHeKpbyS3foEjAgnXuD8xaj9",
  "key23": "3DdnScqvfuR1pFikTajRw1M4fcg43m2RLQpXktpecg4zZdDuAQe8vRVd8eJijfubF2QHUf7e4VuVsyNdvmJsonvd",
  "key24": "4zaLErvVjmwa7oEDsu6UDPNxTXyNumqW24R4wBHwrVCdmNUnYe61WJSWZuvjgzGHx6F3pA5fKrnFUBexaMioEAak",
  "key25": "4PtLqh6DZGCWtVh9nvRPpPuKDp99CbPKdQFV9iSXWE5ZvKSUVhqJJ7dzg5NDoY5FHTrJNGkUPjQa8k3jmQjQ8ix5",
  "key26": "AQtzRAEquWH5NWxbvAiykvUrM3Lc3rTPQNSGBrjtBV47KDgN2Mmr5e7PEoAtFXiZwF2KHsYpu782NG22JPWDRrU",
  "key27": "4tTh6xb88Fz1NdTsJA36ZVphpY3D24XTKmMCmwmwN3vSgYq4MKgxiht2Gd3GCUsm1puKBR7gQYVrySyhbD3VHhFC",
  "key28": "5GxsqzpfQdYsM8Z8mT7kFCSLDYKwJcU3pxVj2XVn1VcWJty8t4RZHYEterpbnKYzzwGyLyGbUS6kxcBdxPsakWMi",
  "key29": "2emGvgUP8W1RY5vsE67sBrD8QKnRSuzRL3qaT2drVK7eaUky8rPjQxgdDuiz3MoMLuWG6KaLQA6wd7KoCAKnEe38",
  "key30": "3tBHMqQ5H2uYtiLnAYtFFS3pSsETkjNuJHD35P1D95Es2g5F5668yrg3FThUxs1ZXu8fnT16GmQ4bsTSZi6sNgN",
  "key31": "CPMWW85HafYJQAbd9E4PRcALD2EMpvhGHhAwPxxet6aYqfzQLqmZn8eFrP2eey3PTboR5SPUCsCr3d6Beun9GQd",
  "key32": "52sgjH4uYx5s7o71PGm1zLBZmj1vPsgQA7qS8x5Yv7KkgDENppiSVa9fbj7CPi96DjDdurnJRhwauJ41rUf2ERNr",
  "key33": "4v3DHvphun3QaiiDftBFDVvrvoqBFir7ro7Qw29qtJjYMcmCnJPYe9Z98V1mGQL3f9kKaABjBZLeBgWeWeaZbsKX",
  "key34": "5pkn83vqxhxbc1d5ZFiTN1ZGH9SGGqrrou991urUQ3AcnWeHnWuAnx23YdS4B5L1S3KzkTHWYfSYTfbbmj7RAV2e"
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
