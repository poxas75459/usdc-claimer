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
    "mB6Lqg2fjG7vuc69RADzMiu58DpzXuF58kgV5qo19dD64AWayjDrBX9tFd9C1WjNq4W4nNuDL8VSAYHcmsQZx8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DVhDE9FVppFQj3JKW9DEyTcaXCtebXCnRbYJ38H4oa3ZX9VDQDHRiAzWVE2YyVY1Ncg2Y8sHJoEDY86H5ScEW2P",
  "key1": "3J7GLdHGes9f7F2yqx5BFG46KSwhDE8T22qsMNgL1KwVL1nwmAWwtP8Y4K7RcXuK3PTEbT1DYhNAxj9bbM7v33Nj",
  "key2": "U7Y31XD2GVWq3xUEEm1zmJ24qybqXApm5Lxk3Xu7FvfJgZW32gpyJicXc9cGV86nVv8WWUjAEmc58XRqKtEoZhZ",
  "key3": "fjaTTToTQMDSZMVMQKHMHGtYpUjRvQCF1v7Jd7p3X7YL5udsRXT1iFu8ta5a8nFVNxjxch9Z6smVDJSJF6kwyfQ",
  "key4": "3VWfa15LCoj957ASSz8grDVkKwrNuq2zJ6g2UE4jatB1GCAV4F62Px49ZCpQiCYy6nRP3JFDjWCKNGvRwZzLJyKf",
  "key5": "3LZbuzuNF6dhkPhnVp3wPvVrPuqH3wHN8Mh3v1nQ5Yypb75ywgTmi854iBPWSJEqKyTRSxfs3MyZ3RStBM4GbcFY",
  "key6": "2dfDfduj7g6PeZeS5LgjaYr4k67T95844QLtx5bJKaL7tBk9nm4m6vnM7NbVNmEB69jyK9UJAdSjSERjPwsZL7Dp",
  "key7": "5VRRnuVYoizS3LbMwWH7C9oLAEtbeWFB3nB9y5onCh44nUP2DvhCSf4VeDvLpoEfoZtR9HW7rAUVK79vtXkdrh9T",
  "key8": "4zNEFKFHCwKqLyuPUCuSD56roZdR4SJRa3GVy7ViDWSryK5a2SfyMnsDk6WhqhSFmMRHNaf76Enmj6szcL51V1Mx",
  "key9": "RheJAYECEUSNBqWNs6siSjxaiDNXfnvtVM59HUtpTM1zAGPdC9JLUi8jQrVKQsdu4qkPLasE4yitX9Uor2hdYx4",
  "key10": "62e72KYDJDmWBW7CRnSstphViXnz6MHKsQUaVtbYK5tsWTijxAVRxC42M5W9usALMYB8iZ3U9grZNTyL6JM9p6fM",
  "key11": "3Kt54KTw9YMTocPBbHX6eZ72R2uencd5MtT4EeG7w1xZNMxT1yRQda8xjBdf4u7gkSvSvGSRDzgnf1avTRvtkoe8",
  "key12": "3PAX9Sjiy6A6ZRNK4gjPft1UQrHLJAe8QEeNGTAmCnyrof7p8vfddGuFw5mcDGZXSmLn2jfodAbP4prJxpc7JjP3",
  "key13": "3xLWNyS5oDnsBPRMyNxrXYeF9AdmRbCWtk1vVT5oGDrGe4Vyb99GyRtj9fceymEzXiDq6sQ2SPbThpsYcfgzDmDR",
  "key14": "3YLmDsd6N2hfuYoxExr1XMk4iovR7EdySqWdz8uZ8fNFuBUB8LeBBJCoTT6AwwkybeQB6AXhEahCkYw3HgeH3fj7",
  "key15": "3FJqCVcqe8EBMczBJ8bdPhMccKwwu2DsJtzpMWrUsXoWSpLJJmvDEJbLBVoGAWcUiNWDsbXdsfkSuS9fES2Nhtrx",
  "key16": "2xeEgYFiLFpyJsw7eNtSHiVTWvbZCJ6KYpzcYgzwE9vjEacyvVhvuGdcbBi7ktLBAK88SermfWAeBtJUbUN8rgn2",
  "key17": "65n9QfBmSCZCptg14Ja8sC9uULhCTFSuDGQbAHzeSpn3atd2cYoS4vb8pTEB58721PbPLW1uiRZuGY8iauN3n8nk",
  "key18": "4cNKAUexsQachS849uddx8U8z1V4H1df8R3r7CrCqcv2xjCWN4FycLM3uyUU1FkHv9UJsLsRAxV4Cz1ECXxcvBxq",
  "key19": "uuXFBGUQUZNNWqJrQquhcJ1Xq99vUKhN4KHepsKLd9CvwR3pQ2NdWsZgbWCZsoVUWhZ66WKCM7euT1KTU8oETjF",
  "key20": "3tsWi5M1kUsx5EgLr7kfFcBoLb2DjhSoYRhEXCvMXNFGxdsxgScQ9kNMzD2EgzLjz55ehVMQAoC9HEMYveVEnnue",
  "key21": "2Ua8KKHA91corgKdgMDPfD7i1MuMjx99HR5ZCshmjccGd9c5Ha3KVJAk9ARHobG2wXQkaAsxnhUVpLApmWNXqRko",
  "key22": "zdGn7JidmezSkRFUiG19UpuqdbDCm3tto3N94NnVnJ6XNZhvXmdfzbGtD8xpjgYNgK8e48HUmAfQRVX4wQscmXM",
  "key23": "4SdUzXvNUwA7P8kLYy12QwTPeu1ybWquJLWutJEMHbo8Bx3AzwKNvNVYpJhaBk7GuZrH1b37jPYeJantd6Ns2wAp",
  "key24": "2YFmWEp29933HAVtsJFWcd4bNFKBrzKtcxBNhVVS6ZXD9TbGHsJw73gimrvCjrArLpo9M6KrFqPyGcowEyjE5eGa",
  "key25": "5pixFPmm52vz2yPNt9QSRqgd3WkiaMXSzBimN6T4M1CTMvFS7rjBuN2dTPiHcKyLmisKBLdcsaxgh2yswP56Zef2",
  "key26": "5xwtY3EqcTrd8kZv8GSmHsjtRyMYXMFAGXR8T4j433TLoGWJUEK5WXdqoYt1mHs15eeEbx3a9myBsNH8D3G6wpov",
  "key27": "5XsdAzx5Tz5dj1wQGTXPnVQs7aGWeW2ch4xfBNRP1SATr65s1LXrGRVV69XVej6PLTgPuo2t1gByBxAu2e3JavSR",
  "key28": "2gxcXCdc2QZJn3TKTuF9zEdsaQu3iEGW8MkfFpzo8ucu5jBNyyRQLxvUgEnBsZF86mnd9Vbi6tx3RinbTFLDWtP1",
  "key29": "3BCjkfs6uTPyqBdmDNoLC3aJy7eSjXeoAGbHUzabyyxXhbua31FLvMhXy37fB5pBxz82DKf6VD8SRDjK6yJXRJEA",
  "key30": "2S1YT9upNccUG7kREeDxSauJGUvjf1L7hKBumDAPV5JEMAjLL7dUNceCAcL4NDhTX1BPd2knfXQWGymfbMxC2EB9",
  "key31": "5UFE267QQqxv6hNWbmBNnduyHTr14c3fkPmnjkRgH2nZGeQVZzZA43FdjW8ZdZc66gvt6ALakQrEVNcmoPJtNDjw",
  "key32": "2R1Ax6grCJf1uv8yDhZSDu8DzbpcdqAumfTn4a9NsuhyPAM9sajUha6oDMbYC2U8HqYx4hVAeYkzspVHBENmyrDS",
  "key33": "bU3E4qE2wKTkti2uwn6t6ionkn7EDt4SgSP4EKA4k9eML9ZEVQWBeyv8NWL6LQ23axwzGsodraSEjVHfXEWW2xi",
  "key34": "oNdDQe6xgMR7J8BL5JsWwKJP3RAaf8FTcxrveCWa38994QEmg17xjTD2dpZbbT23jtBedSr8nQ5Js4rtxecRWuo",
  "key35": "4SQvvN4kDeZoVyULbpbBfWMsk8T9BD8RBM1aV7WS6zy4DP4U9do7EMGvDedv8UDEWs6VLbL2XNachU9R1TfaDhBX",
  "key36": "4fNApNZ9UaQieG3WttZ6YnpUfm3T9mDQXaRh5FmdS7AkuYyqiHTX3YwXSdnGxNZ1SGNpMarTz5nW7nKK3VdYEVGg",
  "key37": "vDRjzKtyERNDyyMn6XH4BGBvtdSbCP5ewZWCB8w3n2o8sEHYHeFQov5n8kcivdrceFTLS5sJTAV8itxWT9QwF6P",
  "key38": "QHD8CH5fuTFUdvX94Rrz3rDLA1nS1r6ZNwzZDhrE1eXrgnB1MCNTyjwMVcYjUB791jvSJdqbPuNoUNn68Xq3mwV",
  "key39": "21fm3zGDjKSnQXksQAt7WNdiAvFGfoghjjo8CKRgzcHxiVojgzMcsSwzkEJyXrhpTBg67oj4Ejb2boJMkoMzMFdJ",
  "key40": "4a3N3aqua9NwdM6Vyh6VsSLtgmpAkLK2MtAm8ikZcydgoHb1dZ3L72KJMebXhkXXYxaHiL72C6n73UBN9pXKexc4",
  "key41": "5mpeAgyjxDKG2xqVHGufAjdi748gY2nUaH9LwymSTtLxtpK4Cyosx1PVrNiTbfLgMXJEq8eeGLHdAXyC8yu4aSU6",
  "key42": "5kRi21iCmfXza3J3z2szK8S3d8nPynHS2gBaK7tWi8RH8zgYMGtryMtVm4XWGXqcVXCgfU1Up3gbK5hHwBJPhMXx",
  "key43": "373SNUKfJ5gk5zXBLG3rej5UhLhGVFW5yrViurE2EAxY8F8vMewXi2HvhjvXg4C3CyW8pAALo4oSYHtgQhofyy6f",
  "key44": "65z7ih7f2WzEasCP7fVxC1u4MMpinPAXLWV1on1Wype7zy5aAC72KqSJkGJxzLRkKKuGmhQBriG9P34NkDhpALyD"
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
