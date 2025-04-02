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
    "dnQv22YRxJZcFZLdPhoBSUMgn1azb3k2SdRmm1EYS2nAVzzsbq7jR1vHdC83cz4jBaLkgZQX7VLNLTrQnmCb3CK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aUBoCsS3PW75pjPtWf4ps8Ud5AqvjceVDYRg2ePkTmzWXSXbXUhyDUYucWqkfUdqmWRPGZWwBz8XnUrww4Hrhyh",
  "key1": "tw1tUhbCytJqByNrnyXjLochAc2V6NFE1p6kgUx8ea1QpcJvxX4yCYCsWzh22XVJXqkBqo1YNN4KD6R8gRMYaJu",
  "key2": "5ZtcPgBgRj62JVdN5JBiKyc5JURcBcLU3DH52ZTxFgUXdvXcANG8iwQW7nXyjGKB1PTab1iUQQPzHza7qmANDzyL",
  "key3": "zu61EhvMP94vGvmaq5dTwDbz1ZT4fPaJJYRdYEr16GWSW4duTCAjz5fRG4dmL4vVP1xnq6399CEs1bFxbFs2sXr",
  "key4": "5GZBZVxSp3FD4jdG4nrzU8m7kLyXbti8H4vjnSZgFNNgwoev6N3fJ9V5vAdsGywwjnfdZb4BAuPf5NuF62vTjMaU",
  "key5": "FszhZZXmdG8SqsXEDej8r3WZfCepym8r6mDrWNWU4m8SRFM7NT1S2C4nksSuDPU9pz9MFeaa5JXaNswKNgHPF2n",
  "key6": "gy4fq7mZTuPGL78J2vWxY7otA5CTTWVrpzuNHf2XsGuqiNcqXU1vP9HHa2B2U4qmJdYDATksPRtRBQw4pQ8vyeZ",
  "key7": "2XhJKNzDFxjEAgFvMRhk6aT7NuM1MRbwS9qcxd4WM8cNWQqW1tn8aDfAe9DPwUT4zhCXQGzkfZ6DFf2tWEyHjoba",
  "key8": "4hMrvvngQLThQ6Ms1vKoCsBL9g6gmxusYF6aGNoqw2hc1PxTnn4d6hmeE6ey7qPvYLg62tnxbKHQ5zYoM4JevdJt",
  "key9": "48JkDuN6HcS6QkmmcbragJodunCUaFwknyhnsodYStcfMCGA7EFAyj7Ma6jpgrqc3G56r1TWKbmzXm6ejLL3VVTH",
  "key10": "5PQHik4bhNRLwXPkTSm4D5BPZnWi7wNgCck8RijKhhGy4fDBAK67VpbuY4XG4ffFCpYkFCVUGpKnAYEvkUUP4H6M",
  "key11": "3UzQEhP2JJgzjSiqHhUJgmcV9VtGLv4919wMhCovnaLj3P538v1seEYWbFGc5eEe58n1KkysHv69Mi5jdJE4cGvx",
  "key12": "4YhDYMyaDnCg1VCX1VPiUn1PGmRyJyHx8GTkUCxJM6F6fqsUJp1RAWM7XR4Skiu8Mi8mMpxYPdDmiYDnTQget7Jf",
  "key13": "4i6N68HqaSorzCzKczFut2KkFmC57ehHLur9Vy4RBXkcxz1MoX4RtnXrYFvQGj9udJ1qVJ5RAVMWhmNGJUwMtc6P",
  "key14": "5Bsw89xT3PUwrgc2pycYhioaFpLymHNqyZcKpjoEQ2yRg12pdoh3qisKGQZ5QrZ9t2DuUqeqAEE43Z4p1hncBrMo",
  "key15": "3rjSemYWSC73Gmm8Gkw3Frt3CLBDP56TomeTz5MjE2MbGjqcqUNBobiKFyKkyouCzLtpspQCSiCS5dgJUaN6RFcS",
  "key16": "5E9qXdXZVPYjAcpej7gzhrX4U1P3yt6Z52XFM6tovw9hef7kaMM1MJt2s8e7RfdnXR1vvSfBpW23Y5aQFKgBxvWv",
  "key17": "4b6sv8XnBCg3JndK34A7kMm72Cxg8dfj1ZHc16RmFXFyXg5hj9xN17CQzNK2iFaGS8WkEMfbz3Wss7g1A477VUM1",
  "key18": "3dVXKndvQWrr3kp7g3CUPqcBDRynQhdgvEZuxHhN6FhsUVHBhfP6SAxvKopUqgtYMvcwhdQnRjfmgRu89GkJYvLM",
  "key19": "67VFoFSR4JStbz5dSfCYnUQKiWSGHmPv9n9SppGDhSsQNEcrKa4nCjRNFUMQ2Dm5oHThrziTvDpYWacr5qwTir39",
  "key20": "4CCasDv4jF4Z4RFG5w1GFhQSBMbsVgGwbw9Gg13bWSYgsUfL93jYEn6X11eWSJ6u1xMPLTr9XxXJQdqERoxTRBw7",
  "key21": "4X4kWvFxi5ti6ZQuQqZg9ZeX2KR1G3PWWLv3yuTotevt3cGgdfDHKcs4rdtp4XxdoeLA3M5RScpxQMw518Tb8LU3",
  "key22": "wzKUUwjoAv8f8XTTUWxqFDwVpLVAFRNfh3mUMcUMeTztVXcsSrLu4Uv9iXuSPBNmgJue4Sbr5PYBgj8L9NXGd6w",
  "key23": "3aEsfftmWRLA2DHU17EavoUvJBVaNMBbPgYuxbu725vpii1M2BgSijD1GwmeiuBMt9w44a26PD1bQBBSxW9u9Pry",
  "key24": "4zhLTAfHKjraE3hDXoDLg45ahZGX88U4DvkArFbVW41ZhpkYbuX94W2ciWHwxKMzDnDQztHa5tEHotRqryQpo7SX",
  "key25": "5UTzmCu3x24BXAWA2MTYppauEnQbgKA75TYYYuE9taCwv8K7qPbyRUJEPhG4C91E9AGj5jse8ysaoaVBwcFKTQxq",
  "key26": "3BG4DuJo3fjeoAa7Ywydr8BLwyfz6o9XKC8CvT2KzLvFcMNNLCLCwcDisUk5aYigGR3qAp88tpAnKtCjRwrGD93h",
  "key27": "5HZj2A4qBduu3ejpnp3TYRuhzd1Mm7S5GxuaTKGe4b4hqcNi9cGpukF2ToBKMafzgPwtRarrezJ16iHT81L5AMpt",
  "key28": "24D4fVyLYcGD5Jrb9RddwY5JUxAhi4GyJPmeVKt7So8N8px7FewFQSyu4Pycn8u6vv7EGVwPLhcdVhNDRQNARVG5",
  "key29": "5KVDYMjQMGpg1f5BUhTnNEsdH9MpYhAz7ZgsjWmdFHTXBqgaRoBfJZSYpaSsG7yqQ1NGonUpyGdE8CqCEoCojcpp",
  "key30": "5HkaKoqu3Wbtdf9AdnCsequEjDB2djts2mFF4kjSaQWZK2KDy5Ybog9gY3bVHYUfo3Rfyy1iFid29vdsiEV7Cx6Y",
  "key31": "QZVRHvzV3CMxphjwXgVA6on8zePQjfZVZy79jP7c6xaZroHPLzU7JHEUfYoUQTw6cXDnyMSma1dFVNSgjAmvDwo",
  "key32": "4oPkhsJkV5BmamMaKzj7ZQk2cogDiAvVbzU4NzQtQEMdQKhVNdW8LULBoZwGNjHjyM2Rou75yyXy7QcmRz1ffhrT",
  "key33": "594XbiHwABGbFK6x8qYBDhgdD1m6nvSdeBTSCNQwkysoRRwpuMDC318aQLs1ebuSR38W8KF9ajRBBmH5ce2gEmhU",
  "key34": "671fsaVZjsMAEWuUX7zzEjQ7oGhEyY3DVmxxLVj3a8E1DcqHoeGauVENSjQPuTUBkRG1aNVBqfb3LnfgXuB9rUtD",
  "key35": "JFWh4BhZC4b9R589stqM3V7nk1ePDy49vrSGoeAUNrcaqUd4H97e7NBdqqqpVz1c1CW6uNPozgS2s1KVrkkGP4u",
  "key36": "5e6iShpKD3N7s5DybLsY27mdhgMj6wey8C3DSXVeYv3xxtpo2f8LLCwME77wKsvRj8r88JoaJYvyMUyDs3JzSNQA",
  "key37": "26YvaUv4V7K9ypjyqrYpYyo8NUxGcUhBfX4nfgyRC6swb3mTuXvJqLFuM7FHm2NDFAyn3R3rjbd7qsuJKopjT6YY",
  "key38": "58eGADTS5Y7KCknJzvwEXFJ4jjkLZQj65EaMz5TeomNK7GMoE8F7GGX8hfw8wLcU5ty6SLQbjoQUPjEgwn4L8Mxh",
  "key39": "NkWZpm1zMH8bfpCKmsZpFU4XUAos3cJ8KHThZQfsWmrXozknKUaEJvWibK2q1HcENmo7no9nGjrNQqy9yZZdGQ8",
  "key40": "3scAaZ6H2QLvXaGqdziLjMSZqupv2tGPgJqCEBUHcttwS6NDKv8uizNcgExXjN4oX8UQ1Tg5653mPbRhcTVuCsnS"
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
