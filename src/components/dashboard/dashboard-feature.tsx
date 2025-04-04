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
    "3u5y7ch59wVpcm94PdRzgnkuiDSeqsW648B5Tx7vMKwrmAsdJB5kEDKX1nYZt4DWYNPd3ar99fHZNP7HnbCnwszH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54JwfwTh6jRnVpiRZfJG8CgV8WtNgStDs2LsCuv5twkgvCYUE1bu9aawdE51QAzp393W3i36GwXxnfFyAxBcNZLq",
  "key1": "4c49cAneZhCWXj46oKgAN6YdWchM5wzBxrdEF97Ren6AMLydzDCzBMRakbam8Mx8iK5mybzZms4rneXDR7d5NC8B",
  "key2": "3kYroZQqXNQh819PvbLKwoYdRNMo5D5LhagfU6co97zXEoDUkxHokuLS8v6fgRjv64Tomk19kywRSwFFvQqLRNrQ",
  "key3": "64zVbFczJsNtoEGAFxcZZurSvkCk1yz1Mz9Rb6AR6BAkfrkYbR6bt6oYw2a8626QquQAt3P78JwtB2Vf7ajp3M4C",
  "key4": "2Tz18yxevGTwVVBQcGebzw8xX7caQftiwj1UWCsxqW1h4GTPog67hzdX6bW9LiH8RW9tTZwcn5CFQbwAAXKqapV5",
  "key5": "5CLU35hjLHdTt5iS4Ldp1oFnPWLYhrE3gXpJZ2D119h1mN2FXyHAiLyNc5uFoaeUoBRNsAeh4SS71sadKHMfeJiz",
  "key6": "3BLi3waBg9yDXhLi2X1PUUvPdcycjZvML4yddojFKj3se3ajQGB8oAkmDaAt84zDyi6yt14kxsj63PDTG1aggQG3",
  "key7": "21VLP8e4ui5gxfqxGDLpBZgbKVVrc2qbvK6MmCjNUFecuoxXN9jFbGUzyqdKcMYdMfPDwn5V5HZDrHur6tETxVEn",
  "key8": "4EnLCQjZaJKysByjG6pyu8Dvwq3nmt2CVcCgYKbrAF3M7ZohaPWNrkKmVqssviWpB64fcoEqqWM6TUBVeZqkmuz4",
  "key9": "5MCif5j9R8YS6xqgJePG3NEdGrR3gQbNwxZdvMQczPF2jtCk2Utsi4ESNuGUsqZRdi7Eqwojn55ybA9ZAt8oW47E",
  "key10": "23XYDiqeJfFgLw3yg3CUi76FnTSqVo6U7FZDb62LBTrA4reSxaXdDSmX2ornw26dQQUbrvpjMt6ghT9EPw25RTvR",
  "key11": "UsU8Sz9gDK9TuXJcCWmnG9NHSaQz2LpgVASMJsUoZexTwQeEFSvH6RomuPY2aZ3EHaNqTaXBWqwW8oR7ER8gb5X",
  "key12": "59jckHubNin5jxbx5iiaYUt5Puo1TwZNpj4fjsqLbkG9C31rgGZpiExi2nivM3rUHxWF1rhy12KufveG1RpUMtLy",
  "key13": "4vd3VSQrABFqwGqj3znQLihHczJiSzzKHiooXqWSh3dxPAbQCmWspczogNdL4gjpqp1Kstt6YUEEjxfnFypTaDbv",
  "key14": "2Fiphu4ov4vAASCeRvKWfYEiNhhiFkxUVSUkPcuUDCnGhvq89PKuWFvstRnz7das8ax4W41p7hjo2hgUfPP7b2Ae",
  "key15": "2WBsHw47zVhxga2DtUuEbE48rU7eP2s3TjgJ4P4N38kvrv7qYL2ix9zqu4FCyeXgjrqhQYo8GaVGnk9geLjovorX",
  "key16": "2Arbp6mCsj1aNbM4tpH5og4D9xF5gf7JrSc4Zr63mdUxeWmfTuSfzAh2DkaxhPbUWRDTS4XTjj9idZVsRCoUjoxo",
  "key17": "5Z5dC9v4rMuYsS7gPDaCMDTiwh7D6WhYYsucre2Pcc1wvUdrLi6Q7nRXsQhkSEqi7b2z5ta6eiS49HiwWAxejdhS",
  "key18": "2hagdwoVWW3PdMRcGVm784bmCGaYTrKYUGgXkDpKUnzXUr3nZZzf5v1RoubASpSkrTBNjd7zrWt4kBRZ6b8nUgHb",
  "key19": "5QVup8paRNiXTePtVGtcuWp6jVzAFbQj48NuuU9i5cEPRPtdhJ65sJPMUqP268qZ91FuPV1gPSVrH2YbSkvpymt1",
  "key20": "2zm7y6XeD7HPzS6NdvJD2JC2GWdtm2dJ1qyosxBCoQfBgSWNfTAj6ejEEeoE2nrUvPfuxYHuxpNX1xPKhJye13Tb",
  "key21": "5pBvNMrouiwueYLHdjFSeYGTSkfZToy1XveroayLXQ4VAH7Lr9ETpXLYAb12soS9NfyFpJzEQPfYR7XxrHWbcawm",
  "key22": "5eDgvtVKRCNsguGBrk9GZHgr4U6J3rHHbtQSH18VSiujnwm8o83upHUCQSqDGXSb7DxznRYb3bHCGYJEtxEfbZuM",
  "key23": "2LjrCP9wP9cmbK4h1nCv5dXLnr7X8rfkCYv3cURLtkdf3ts39qugoa5wceCgcuF5xEDdR79kNXHjHkkdAjWMGRMq",
  "key24": "3VdzvZHHERySgX65tdNdCx5AaiibvA6kRGSS4kcQVRGdHdU8J6mL988sWbvQjRYMzieBcQbeNALUJRyejALk2Nvo",
  "key25": "5DinuQpGwX8PnApeF51QtTHiPgto3hLhdC8xw1ynRnjysrya56xaMx35Hf6HrqPz5Vg6HGRNsF2FFNvoTDvocv1k",
  "key26": "3pfoK7yGtc5ScNMrXpr6SpxK7inQvb5CrW2K6VZquBHa3rvMgrp4Yfy3frXJBAGmryuwKZy5YzhBmckqSYA5rYJd",
  "key27": "2KxkTXnL9Zdkpdcs7r6jdR9Att7PUnn3gBm39yzHofK2hCkh3GVWwjB8MGCpb5m1XDKSqFdm4QrUo3D2nfJtBd7k",
  "key28": "3Gv1E1Kwgm7hpcpvJEPuUKGEx7u45rCn6xpEpuKzFv6wcU9p4qKEGVQ2ubU97CgrA5pTvEY9FuKnNE5qVfdghSHP",
  "key29": "5345Bpx4NyyR9kQUkASzQzPVASSSaidJkmQNjY9jcntKcFg5y7Y9YHdQrJxN2MZrUwQmqVcFDDkxE6J9VxipxjF8",
  "key30": "4VbBxohCPWFgjdmH76c2USzCFCXAijkExALPsNAnExT2RifLv22aySP3DJDV3KcaQ7h5bUZUBkhUMjiT46aZPAKG",
  "key31": "4vBLqpbafXc5zotsV899mizxMDrL6fSyzXD66q4ZrThricPpJ144ps4CFGb8DtAiidvgagd1MvwesjJ6paRQ8VWP",
  "key32": "3c8tzDfi5WnKcoJBgF6uQoNNVzNjfmKERUwqHS8BcaJLwioJXS9Q7XqaKqiqmTMUqNq6vbkTFyz12mcXgM3Hf3dZ",
  "key33": "263aoRx18vgiaTJce8tGkr1VfTB4aDgPMGnyXwuwKLMYAuVCPKnVqifMxn1jGHqeGovct94doqxYzfh92SKTFSPE",
  "key34": "2qRJK8sB4U4j1BgaTPRnXjnFmMvjm4299vUeM4rED9sVXMn5bGBAQCw3AaQ7SKnE1RCf9biUvRAiaC7jpLJ3nKLE",
  "key35": "2ShsjdwjdZz6QSz1h3uAugtUbciCAfyifCBxpNyqW2kwJK5HyDSha61Cz9bzx4Y6gW4nJbxFJDhX6ZaKwyBpx8fd",
  "key36": "5VRsndgyiCFH7wmHDEDzTYYcmN9huS8R2dS41eTEP31ETkEs1b1K9NJ97mBAaFyBhBPYurdqkoNpfpXFobWEMfvW",
  "key37": "5Hjce9VLaNy9dcLy1T3sXrBq3MhHgDAn29iihFgxLcqrfi3RzUd7bVTWwRXEaEY7dyYNihQD8oZa8vMiXEibDFTD",
  "key38": "5yCTM8qy8LiTu5HEhi3L6B8TMvLypzNuQHDWKA2xvKuYyvhGKJAnvFMoScPHv2Jrkd57qpmE8Fc9W3MP5ET33YXf",
  "key39": "3JkYBuLRdjhSjw747qif3kiYb189s3QsTzeVG88M1uTbsPwxfhGVo3yLihjJ6RiTij9A3DPMowSgxcLenuBSdhbV",
  "key40": "3s7Zkr7pevvPxTu8DmFvvPwXHGcw4smNzZybUJPBxd8B8YoM3nApZCx5GGQa7Dr1XDKmzAihRu1DVSqnxEW3Jse9",
  "key41": "27Mv3XqNwTv9ohxetUNsqtMv2A4saUaRWMtFGjjHZA5Uu4fzAG9jx3rBe2vK2TAt2H7PVzKngndcx24d2VQY8oNV",
  "key42": "4ks6ctEeZTuD5GFrGzECKP9T2c1Xb6BVNNUsaPRbYb6pGbZbquwy5uTZMknuMAZsKTaidG3E5J8BdLpefXCw9tun",
  "key43": "CLEwKfAX75Yq1j7p6DimY3BEoHiKmTseCZ5XyfkUFm4yu9m3DXmj3Aa8dvTj6Xmt1FFXnB6dDmBLrTwwj5UPko3",
  "key44": "55JF27wnWWkbrhoFwjp8QCxoFdceNaAtEmMiyydqAwNR35bGCsCm7g1yUHiQKAGGbds8pVyDeYQ8RZT4A2Fzb5Ys",
  "key45": "3eQJ1hjmsMSiGnp2EL7xYbpQDcqfVotK5Sr1fb8cMmewKGK93pQHe3h7guEZEQB8EyBktVRjWPR5MFnNrrvssLt4",
  "key46": "5yhhqwgFPCWoaUCGvEjfgcNn4CUuZsmMLTEWYgX6y413X6st7pLk4pbkKnQcBMtcuwrMPAxzvzcdvL2vcQpV7HTg",
  "key47": "593fxKeJ89Nd9iWCyoi62hqvBsJsLuh99bNKW9NpiNSmbSdmJs2F4EbxdxXTYbBTvTojRcpaqCpTHVfFm58o8Xth"
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
