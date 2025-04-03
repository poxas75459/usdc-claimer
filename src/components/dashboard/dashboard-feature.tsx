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
    "4Fhguk9s95TYmnoE6YFhGZWcuG8wVyzeELDjphv24wNAUcPAwN4XcP3kNKVxxWYGCpMzcju5P3zHftkv7ii7b1ox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5So3SDUWmtSMaSx4dgxFBFLpNUKDNJBV3uXmdRD4ivBABZk1vJMH25osqSD1VSxQ5XKmR5xiDzTUHEdfd4wHbM33",
  "key1": "yY6qTUTLWuRyyQW9CTNUFWBgd6aC25mBQZUhVGwnEYN7KcpmVMTF5rpVWhsb6L9h6LCjx7CkFLpQLuzVx5ty17K",
  "key2": "51wjaLxg1mbX7F8b3y7DcdKLphRLpUKZyEneDKkixwzfR6q2vATHmSyVGiNUj1SUtK2fZAAWjqkwbdUfQDefx11",
  "key3": "2TaSX9Ru4bNxTizD2fgoMdG2JMPSSo99FLAyj4UhZ6V3XPuPHnfvbRLcX7wqsdZ69G3HXM3ndVHa3ggMGxYndtSe",
  "key4": "X6vHEJVRoJK36XxN7Gt9Yh6NtgDuwAeMEt1bZXdhCri3YzTuPt7JqoLxiHee45FZQt4Tid8FDCEmpaqQRnoE1du",
  "key5": "5tGgKJAAMeBurG2KEyAGLb2Md2vaaU5MHZsSMoRfGENmsQyX7nypHsBuW8KXGJY3SqcPSiZyYdyYvr5GyikcV1rn",
  "key6": "8VUEzXXirQLhYVJKyQiA9Qv3wzEiLJFeaxYGBBy8Lif3UWBWwqKjKFMekDoAjq39QMWBmdXZVvVM9WhHtgE7rGs",
  "key7": "3CcjPAyibTWiRFqbQTYxDu6t2JpLAFADji4NbTpHzRNoqhrTKsV9Z8xKeEuF55T1Z393sn9xHdb5r68dHgg1cvkx",
  "key8": "66LPtHuN1wscM2Q13mku2GDsi2H9PXEbYkdyTT2EDP3iYXuseJESLdxvB8zBJTAz16ewT9RSvUEGDBZGhwym2asf",
  "key9": "2Sd1yre5baWKR1u2WPAZvLE9qUxsUPEkf1hxco1yfqhDPaQwhmEHHzYNXKSS7FeZrr1unvFSTErGRLAyiY9ody58",
  "key10": "4MhcVeQANbdMk3U2Bz1yEYmqUkhmKnB5ia8Kjn2ingh12YvPBgK4hdjZdexmsiaSQtoq6GpW4ZiMJJ7s5tne7TVX",
  "key11": "tMJmcyTqMm2PyBpqUAEP5DGZZDfDxbzpvfoRXbjRe9rs1Xsy2iZJZKUawDWi8jjZ3wyUQPvtSRP9EymwKiE4oN6",
  "key12": "5DRjXc3ks6qPAzsB3CoSDiYc49jFAFdGprUviAeeGwLfNokBTEhJoa8xt5dLN8SUHK28Zmf43fPCAqjZc3v9RL2X",
  "key13": "UPwXRfe7NPtUs1HJPWfmhcBq54hbRC4vhHKhJDMv3j1Uy7LPyLcqDxJTomjyawfDLddV6rdgKydvRYwc6c6ZA2m",
  "key14": "TPh8kDf961bdcnSuNSGbz7y31C9XRA7tHSD68VV4xM1mvZupF9aTj7ZQtXeSpuuGF7uGhuR1fGBd7TNxhaw8CzM",
  "key15": "5rLETcKf94gwfP8s2M35G88CkvdQ49YXTedu7mHpkkuo4ro9QksKWNtvuVQde8e8w6ziArjasmWMUvnCBCh7iumu",
  "key16": "2PFbovaJkXB398ph4zF7x3AZQKXShLADcdT7q7XAyCgH8oHeq3RJXYnm9YqgFE72ZeNWxSRi4K5WjKKPw4BjGQho",
  "key17": "5qopeFN1vyednuK7aFL4Qf5GNHvUdMjGigqGfqaHdhCriNfFrxnFV2mNK3dunZoBTZ883hj53HhtHA9fcsmaTouQ",
  "key18": "2YtSfzGa27VETw5Cnu2XHYHvmr3o6KgSVhb2pDBPybPvCrgK1F5TeoaLoCB9VLAg1FX1Jx7nh4mYDt8FtFXN8qU",
  "key19": "2KFPGGGMaHntJztbJT3jcRqhLMmjXqhgmp75rJ7qVPkQ8tnhX8hJGiadANvZNry8PYRtwzxRsA9mwCjntkmbkZTS",
  "key20": "3dZbfNfaUzb7S5Vg5Myx43dhtTmdznqMNiCyaUWZY6y4qKedDJJFVW6DsenFfzQSycrJgqmprvXJ6HWxYLa4oKpF",
  "key21": "4V8kfrSFWD9N5yLXDpokvpTwa9YbdG8bnHXghpm5L93DGE3Z12LaV6dumE3bbcqQ2VsBtDX3NqFRcVt1hQTkLGF6",
  "key22": "3Td5isPbfbEDGwyDnimogSz5p8UQEQFmawcYiLfATFMV2uMovx3GbRMBWBoEsW4KtrUMhihXQ3RqR7XvHxAZecSv",
  "key23": "4Ts9vCtKqGP1jzTVHsmQqMDknefQjWzEr1cSpPUmHm2TkTaB82XZG5cxFtMkhTgu2bzT9eMxQPoT33TKcNG5QqdC",
  "key24": "2K3K1ici3aZyYrdp7ZTg16J3BmfUDFZtMeatdkRu4KmT5UbUzZCFi2V8nKsZhUNJmcHaAuXp35agfLN6NCwPmEeC",
  "key25": "bVCwhjJZeGDCcXyGJvKfuEBBCa2wRDfgGeMCfNj3g5WfgrycB9jJKsyBTwj77TqrADSd4qqwSyMToa2hHTvhnAu",
  "key26": "3BFH55rtytMFPdHFVkmGDyqu49WYt2sVxdpeS7PVwdZPhTYcdwhfEhDrG1Tv6USuK7dxG2JaHZwFJTp1GXwgBVVH",
  "key27": "3jMGfoHhAfJ9Ljy1uN6QDoeLcgfePGCAsqpQyeoXyJ3gpLzvu96cTxXTq5QUYMrXt1gRrfmvRhRzLWWk16qPgNF2",
  "key28": "6713vbKgEc6rSwZ9BNWouWMG3Zdi5tfiayJ1AWtGhmSruwWCk6bprqde7QFhWCL428vUAVgfS9qa4dtbBRMf8bFm",
  "key29": "4qfQX3sEa3Cn6RL7mJEi7CJHDa43auGx5VaQZ2S3UfiT2ZsSm5vbFL6MdkWMz5XTd4L4kMchiNrAmUKT5bRF7MiP",
  "key30": "59bvHcK2UdhCzCuKFFU33mkgtKsXns6EpkBCsNL5wGg43YMoizqRLSqRP5FcR8eC2qfgJ5khRXYs56fFiTnwrzK6",
  "key31": "3hJBaWC3QVgkxKnxmvBV9iHw5wHX4P9xV4iUgNBrMufReGhJDBRaMHfFkX4vWy7663k3Q2QTyDeoPniTpnEEuzAF",
  "key32": "qi7nmPCRHKHbsXpoW9Qx3c9QKZT9JSVXBmAK1eyqq9mpKPkMC8gG9cYwD4nrxFttnHBNMZZDJpGaBgZqFG86raj",
  "key33": "26c2Uoy9ERWn1kB3xkKab5zbeo6NAiL4ry2TsWgW6N9mV23miY62czcHwK1Yr61jfHShBVruqkvjuj23Z9XWnDQe",
  "key34": "61fNTghrm9FS6eqDBPXuE6cEteJ6ZdfSDTJSS6CuCZNphFS7dyitiptcPV93bUjR6eMtc9ekh96YakSoTd3GxuBw",
  "key35": "4YU3hZ7EW58jQUsAjq5QvAbFaHdKrPSLLdCNT6yd8abwxJDdZ8sfiHy1cqQHvihhCM1E44iyU5eE3ys3kNRH1G4A",
  "key36": "2mLt2ygC9bLUUvVMAK7bDQ8coN7gyK24JGZigNvDLnfYRZXxubzTC5F7Q3gdoj5zJ55YjUrFCet6mRoFt9g41Yox",
  "key37": "pZESxJrGc1whG8B41DKdxZfrwHY6KzJD1bUft6SrJj1VgivvfsmHYxSTH64go8u9mBkptXrhBAfUPjQ7Ai66zSN",
  "key38": "CwjEkvqDXm4BgPx5x5XET4yYJL3AgDdqSEFmPdmfVLE6pNrihHYgLR4ydEzrJmJ4kLD1fZee7WseiUx5LUREKjx",
  "key39": "51ykSiiSTFw8fSw7sCY8BvBroqUXWSXgkrvPAregEFncaEzWQk32LUqUToSFtyWUWsvNcrn4L3GHCDvYN6UFRRNV",
  "key40": "1iAtXTmo1Uu2JTdQasfLxmywdj7nSgKXeGs9o86c9anG7twyZxB7qddyGdk27dYTNKV7vJK2tR9pK8Crcv392tv",
  "key41": "5MhX4es5cfbZZn2MF1jbpAjXCZxMwkjo1ZPffLWhMgqsKxYjqCQgHs5j2vqtLW9paaHz9ihjYZMbtaSfK6JZceMM",
  "key42": "DTNttXB4eSW9xzgEEZjqxjR1vzhRwBDqtDqqzrD889HppoWD17jyZbWHwbwbJmH1bmH4xERTeR95qboWWZzoQmo",
  "key43": "3Dk7KeLuy7c8AcZ3Uvjc3HqmD7NFRrpoyjDsi3E4G13TF9aNey3QjhdkdppvD8yynzq4Y67SF9gBz587owRiwe41",
  "key44": "3fiUUMFDwYgfUmvm8TGBZySbr9mWpBRCwBQXtCxSnYxueEavENeqiSQXhLySyuwXEF44noppiF1vUye1LyqiFGz2",
  "key45": "52xYugeFPCacDokdpNAZBp8zYCjmzgUqkN9Rrk61fPm6pwnnj91kC51pQPfiH51TtUCfHuvBb2GSfiKh1bLE1hos",
  "key46": "3DG5M4FM4jWF5nJTkcAAqoYsaE75cHK8RqKh9izijmdzXeEWi9bs6YEVFZ1oHhZ7SPTpwpPyMiLhnvJP2m2BQy5x",
  "key47": "JuEYxJ4cdHBvh2fPjByfg8ZWwRDs8HUN9UHJc5Pp6x58YPoeLKJxgofyVGWYS1PUmNuQkRyxn8UcANp3aEFt7fv"
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
