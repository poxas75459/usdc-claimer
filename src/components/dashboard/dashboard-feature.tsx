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
    "2cfHHzt1F8pZSwE5WfZf84gWq1yGoUKfp1i9sKaCXaMQpE26AEx915SgtHx5vhuzG5gHuLkSrCZ3DTvHkCQ4jRAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v9Ehk2FjVjRTtW3Dj918FvQF6t2xxs1ZUzz6jyv2gEWZg1rF628YAQK9mjUfTi2vU1qVoUiXRXnAZm6PFxaAD5f",
  "key1": "3GynCesGRAXdHnYxQMgvJEGPbBWpETdKZyDtQEJ5U8Kog5N9uWS96PvRynR8j6qsPCjGeH274sb7vt5e8EEpSSWA",
  "key2": "5UkY55gV57a8w7cU7R1wZmqKHKwds5hR3TjY8YC4K1THM5UzMcvxm6QqjDSNdfmQuYZmyCgmPPhcQzNmGBvgL1m6",
  "key3": "4YXmDSxKLhUbpuP3eudrYCa3rrZGwVNNpr4nwstkx3iRV1rncHjPFoP5byYmzjaLEs72dtDq7iUNVw3vRASoYw1Z",
  "key4": "43Ebc4p5L5KXaHzKZQGZhEvP8V9bvuB9haEronagAMSiFz2Q9ZjpfRTou285fLYkBUKXPQnBZ5bJHXTHmyGg5E6G",
  "key5": "27Y3vp9bjuJ3WxHydexyqMteHK3jkGzGWNEMgFSrttTzztaNwDjhcatWCkeazcxeepdaz3fT9mdKJetFYEQnrW15",
  "key6": "3QawH5Pf7mma363LwKsQmHpERq2k3vzupkVMmpCHg93Lzg3nsKskf5ZmEuPqkAeK6NovQ5ycBrFYxiPUPcViurzC",
  "key7": "5XF15uvsPMWSSHoDdaMpRWKMLeGK5w3HgFUeGM7EAUDNvPXNisjZMagBW9ekrj9tontw5SXxJopP5UF6sjFmUeYV",
  "key8": "36kd96muoUivhAeiRib4h6JjZrhtA9TsMEio9E1mUtemy3JKed3US7N1rtRzh99EaXmNnhMA2kQVK2SHk2H4C3GB",
  "key9": "2PAqTqC2CxR6apPf3NQchqQbkfHvADt84LziXuSGiafuMpRBNbVBe5tJ4TB2bgb32t7qHdHDvM9PxgJdcWSxvxZw",
  "key10": "3w8VmmQVsUYf4mGkaLsPkUc7JW441fLLt3BAQ14yjcbAPeagALSvzmb19vBevAaWDhHfJzPYVafuhAom96gMkA5k",
  "key11": "5bqQTGp9p6QFwBRRYduhs1yEvirGug5yBWCyjg3nnceZRBPPYFr9SssjUGF4kMCe3WWXMNd1SYLUYsAVkbXceK2Q",
  "key12": "52j1bqzPepmp6ExKkuWebQyEgdVN97yKQ2B3u1oXwk4oJXjFdTJCW5f8RBP42tBerN7K7BjaXgk9aiqTpCV7FdNW",
  "key13": "2dQK2k33c2RPaVFFgUq7E5wUQqkfZGcdY5zMsRco4KiP99PsPQ49nxQEHrD77iULFmPDoTNikTEgCnSabq46C5NY",
  "key14": "2snKKuTwhhkXeMaGAVZuN5dczw57JhCpxfan7CaZiKkuJhLHphgsjT5XMnHBW9Aex26kf5utq7ebNNKM7S421W9k",
  "key15": "2ES6FZuzGEx1mqcXKe1B5hHyarKiXzEA3s1v2bianV5zeqMsh6rfeM8BdTTVCSWHm43DnVjZgNWhR9qT4Qi7Pcsa",
  "key16": "11Fi8gGjmEiMu6V8g2feLQRcdUm6hNNrCTokoFqktAsVsk2GmBdGHAGbjgE5moNcGJTGXgPKvNNoPXMVnpmuzWc",
  "key17": "3eb8TcM7pPeA7HzvsyjzYi9BiBHKBwiZXN5DN9HT8VihTVWTSrf8owi5Esh9DqUqM86f2VGdss7JCuBesHxwedBc",
  "key18": "2ZsvrYXgWKCQQ9pKAwsHzsxDRMPQRt2xEw92JbmLzDnDahesU6iEotSretsrhtjbjNxp8bnzNAfyTJ2hd4vSHbX9",
  "key19": "62ztyid6jhpVV3SZgFLFzBTGinfoHKCftE9xqyneu858GDqQBuhgRiKAi637jkhXapc2UpR9ZqfaDaZh1ZgD4XeR",
  "key20": "4F2bMPtZyQ1jUMyCHseMYjJG3ewnXKJwHKjSTxCVxE3MRpdJiEvopQn4KSiKyksKigUrcdPDQMCYcqoKEyWed8r6",
  "key21": "2vR8DwBqdGhuMAYZayJPLQ5B18JZPimEQtGYCDGpFycx6aX8zeJy5h6MsBZ3TQcm9m2nk2QP83op4HR7DG23jU9N",
  "key22": "3HWhFk7wMBUEZwjVhyhANAshzEHxkJ99jYERRUHMYRur92S6vzFE97PvF4ebzCWoHEaE5viLRQjX1eiwkyNGZzTH",
  "key23": "3gyTELMHdobxaChuoX7t1kAZE2vcwtaXRHB9FC46DeV1NyWP2D6XuWtsoLohLQtdxF1oLhbWqNtjPGgeV9AFRyL7",
  "key24": "4qSseeVATZmra5w3TxRoGVipaZUyHwcCDJCwdoJ5ocpy2x4BW8HiVMHT5ZUiQPruVeq92cKGpiwp4i7dKWSGsxkQ",
  "key25": "5qTp6Kf5TtScMCQUg1aY282R7kehirUkq4iWKVufnZiFL96pF4TvmLqR1akWjMuVHVQzSs1zPxcwtr8z43K6DM11",
  "key26": "4bQZkitNhjgnC6bbMpESX4iU84KAPtRm25n3UyeT8pStK9Eecn9ZocVdJFHdrCeiC27swPsFqxukbLJvxSteGYVz",
  "key27": "aRHsRUva9j4cBce3jZPzXgA9UTLa8sr2WZAhe8Go4yAAP4hkxjyZtf7tMAG8UPdFdD8UvvWqspVySzSAMTC2o3c",
  "key28": "4ddYNdXsePZ3wZu2xWRCrVn83RTashaxHRvMDsEjaHVHgYDsUXTTVpxkWbVrmwhyHJA4hn2CyLcuK5pxCea4c9uD",
  "key29": "2toxee7TWWGCy1EELCjN5JXfYYECHRYMG8hCaw3XPxBjkuARRj1dQykVxp9iS6A1yrYwybUWaKxZPKaT7Q6V5sGo",
  "key30": "5x2Da6gUPm3F7eXwhwKVcBRRYs92etUPkBKfU2x8cUG6EzPKmctmSybmELEaPsaYKJkYCf7hbeTFLt1riw9grvgq",
  "key31": "4mBzoK6RmgHMtEg8WLN57JqbW21S3rtMeG9pft3Qnxt7eWD9Ca1qNg5VbaxTW5ayxq9wPSpPnh3eXfqivJMEtJXM",
  "key32": "21MSRw33UejoPm7N6yQH8BvSLvbrYpR8FteGygWiH6J4VjFqHKjb4kXsb6hysksuZXxDtKe1RUAtEhbDbu6sdure",
  "key33": "4hxxpVSoSMQqaYA3oc6vQKESZmbwB9nnNginA7Jgs7wSJ8LGGpcuKAcyJtLvJ4scUrXynvJrk47zFdeSEAkiauuu",
  "key34": "4quyxYSNPkL9CouBuDAF2Ly5QDkCxq5cHQNQ1ZPnDYT6feRcPyvewxiRJr5s1p43xrXWb4PqnSRFcs4YR8ugpGLT",
  "key35": "2NrRf2yHsjmRquJw6uW8KKsunYxc2FhKxJZCyxYGG3MzfHg86XrMCZWG5g1kFBh4jUnKARumcXuqq62HH8dsv1gH",
  "key36": "3PjPLucX1e1XU7kUcgEB2FfgzTXiEdHe9F79o326tLmufbWATD1KPonnz6gCLVaizawF6sELksKztHa2t1B6Xmq3",
  "key37": "5Az5RrmqATg3Qh2ySF1AEZ7tbjhRFnhuNotGiQ7d7gAZe6pVxMagShLvPMMBKkQ17mEEZrkNYhCRMRtM2A1qUDXV",
  "key38": "4TMAswLW5J8ZXYFNaqvX4UzLSVZ9F8nqGwpemUEumBRAyjL8sufLed88RABz1k5RNzkopahKfP4TuF4MPh8GZrCZ",
  "key39": "2su2Xu5KtkUW8d498kxGDYwk4utLYJ2WTRDMSLdR6GVp1RtiBy7oYVXLW3GWNH7Z8qAd4LRfJwjcGuG9y3Pi1tM9",
  "key40": "4NurgquVgNCdx67rq9dFAiJ8JMLaV5BCr57pczHr9oRHWhd3S2CzEMYC3b7xY3TGHJdGN7cB5puBu1R1pMRVY1Ph",
  "key41": "5etZsiWjo7ztkLXMfZUdx6tbfwVZa98j9CEXRK4snAtwdXU31vqQ5bSzJzosJqT9CgEXVdT99ocBT3bL8wMAtsD7",
  "key42": "2FhLmCRZwuPi7PuSTVJPN4sVwUZwwHZgySQg3hz7iNBo2UmqXusF86FgwJvkQjmXykySLcoKJEavbHsCJEgov2y9"
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
