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
    "4S7KG6ZSACmGYyeC5pa5ucUvT6w7UdKy5NV1FLyBKyp1hrPn51nYZRbwH8UZH8ycEN2QqSMQcQdQ1um5L7x3WM8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hnpKTf3k76mvBU2tJnmmaW1yCgS29My8C8sQAveJC9bsgEQVxCrydgzo76WsSM3gKiiQb32mrXQ9Y51Y12HxZSh",
  "key1": "2887LYUwRq2ypwbXF32zB1vjgYsLwYjNpxNcQ3ub741qgzx77PZT7QGeDRwjMfabLqe8sx3r5WdwMCHUNQNhKHKp",
  "key2": "2vkgMka7KBcECYitwtkiZrL7iGZcySoYatCd6pjfN6fvcswTqYoMZ3Wp5feEq8LcuEUMiRfRyaSQJkNiEyHA1U2R",
  "key3": "2MJBQnJpTw63Syj67qTbWNMr1Ge4aBVFVZLizqodDj93YSyFbwywaaNK1Y4M5oPTTkfxp64yPmqix8weECvnofGy",
  "key4": "57P9fVatz96S8LnXQ4KBDbAXdWsZhYvpCXnfJ9Es6fbWwiYVSrFJpGihdg8hP36y6FXy8MNHDjRpwqssgcFzVBbw",
  "key5": "25FzH23BVYuXLRoKXJxCppym3aQgEhcEontLCrrrSpYdsQb7bqkXWju8QRpWdxeXeRg7GQe8F9NcUpvumDQZs9QS",
  "key6": "5DSbRbwbrddA84PnEWeow5ekwCY2oPt2k4u27KPdWri4FkGucGpvQ91QhwsnPCgSoXJcaHZaU1bFocVFnVQRTTmM",
  "key7": "2PYJDhXo6UDNEDT1aMjJimsm156iDzEfnkR2UMwGM8bSCcnwvN9WCncJJmLngZuZdhwvJRjPdHYMC8bgsdPP5KtD",
  "key8": "2s1m2X9XPgSv4zBAgngtjr65tD4ZQNt6Q9BU1yTkAbDjF9ByhFMFEiTCqxBoAM3Db49jJHv74JjFHFD7TYBU4YSo",
  "key9": "55WCYskgf6e2wCyi5R2aM6mYtmN6qPpb2Tu1mpMpeujWw217W4aQMz4986pkvbVougkuhg3zCdaogWA1p1C9m5fG",
  "key10": "2KbaGg46YYh3kmNPdpoie4sakZZpiPkJ8ts9BPoH4NZwYcoJNDNstivjKTFaBRiDqjiPfRRBGY1EtzBxNAfjv4AQ",
  "key11": "63rLYDshMkcjaxoUihbSGLFrcD8Kv4Lh8Y459En4QQ1D7eCiCGGP8CdDQzowrUaVw94C9H2H8TNyaR7QCCJQv3WQ",
  "key12": "3oZPx55ZnjGy1gkQmKsLJxZgEdsmKs1EMGTcsdqFHvjpmBYcQ6GnPJGAwZ8aaSUzaUKTLpJYSqSfxpEQjSujfKfu",
  "key13": "5iqm9QREKvfjUCFZvX57B15LvoKe3ZU5NdPg3yEujUpgW4xuScuHRctmVVmYoashsLEpsPemAdVmFCKXN99bpx5X",
  "key14": "2Gu5xZ32dxW1zbkkCmci7PivDTnvtSR1G2BNmkQQaiQJcuXYqryJUZuxNHe5e7FKtKT9uD7KkyuMkYHgdrwcTS55",
  "key15": "3sWJjC6JBYK8UnPpo7UdCT5Z3unoaURnTCxiGKZwn8aLYoe728TqdKpeWCLvs1No2ViurmSFYRHuUjWuKduHREow",
  "key16": "UgMz2A92qjeAGx3d7Jm7wnpWgP5PwpNVR8QAzRW3oDh1X3dtRqKC7UuCzjicwc9jVYQEsrtDrfktx9SYxvE7ikq",
  "key17": "3ccmrVyZkc6EgSXUqfKj2PYzXLnUwwyikojSnBWPfBjAzX7EMqUnFycXpFLpDuUinL3wNv23eiuB24xRi9y5gR3U",
  "key18": "3cBsdTuFYXfGjQH1DaTweivz3pg8Sy8uRpsosB2s4qLRmj6HCFu4qj1NRCVibUoeExTHhu94SjgeEJKXfBWEuaRY",
  "key19": "5viiZNxJ6Mxt4ZD9p9d7YsZaY56aPUrAT2AiaU2MzKYoUz5Hd8PYYiPPX4JtNDZPUxHuYgJNUqC7ooaHMAL1M6G7",
  "key20": "X9HnudwKXiChxWzK9VkEDAu3ohERm86gm69LgpJD92vTGtvpiQQ2RYUJY5BQ7fEZsbkJ7ZEEYXF3Czbm9iu9mXA",
  "key21": "5VH64J2wedtLYyCdusmqjUv4Xwsvw9EfYS2MMy2RPG7N3JkFs4ZeytWGT3nZUjo5CahPriA5cKRDMXH1NvkFNqNv",
  "key22": "3X5G3zd8wcdUdGaZFXePmfkhHMcFqP9H9LY2fvjyB69gPSG1ej6bRgZHxzqnd2EcbFNCRCRDGyJ4qi6u3XcPoeMe",
  "key23": "2oBGvEcMqQbiBvw2fgCgzsgwY57YPoEwnW7AqVijawdPp8MnbRoDDUAfzC5eEvAgCVQnJZ16RaooBfFFE2aVMZww",
  "key24": "4gPeAeAGYaPgLP5TM9vHZWQU8Qf9J5cxu4m8eeCdPLWEhVAeRcjTM6YdKYTH18Qs4eBAsGngkeXzyTN1BRY4uAqH",
  "key25": "XWMiAPcokoRATgJDoJBw917DASKc322P9XhXRMxeBAKUqpj55YAAZYPWkSxCypizBYhnfGv7bmBhh3ShiCv8W92",
  "key26": "tH1pGJa8XM7MgnUXWCYddXj12utWsiwNPucmY1rFC2Dc1gMPHuLUyMHfJmvZWDQQpZZbPmdG4DaAQXdfU4qbWCj",
  "key27": "4TjWyN54qpxyAznAKrbtbowJac9cusnWeBwQjcUHrMREUp9TxEh9rziMcZURZZtFL858BRA8TGLfnds69A8jJA8j",
  "key28": "37kz9PDqCkBVxSnn7LHBoMLCLZ2vR9LLETmBUptSxKmwZeKSqpGFbnfYk2pqcy4PM5fKL7bXzBG396DngGJ2Kqg",
  "key29": "4C5GDF5kFpCsSEd6pfvDgSCYFnFt7gC1LakS1tTuaCahQ6zUNJd2buxpPbQNkccd4q5Cc81SnFSz8TBRUbZjqbUQ",
  "key30": "4CBKCGpAZC39D115Wd9hTuvJ7RFx42ijmmuYrQRpYJds7CXYU8CRY1WyDJ1d9RCEs8bVBLW8xKP7rn9qdjgGZRnx",
  "key31": "2zW5XoxU8tyyXpykSEDd9kJfdSAjxqcAzEDiz9HmtJ29jeZSzmEVFCawhL6RFY6GXcPqJoTSWwebsrkXxnjd8BjJ",
  "key32": "65bxbUyTPAR48H7F16wHuqdcRQUYNx9mBvkJG27Gs543Zek8JiuwExSFBxiU9uFNDn2EhgoBDkof7x2yLqrSwFn",
  "key33": "4L65iUPJ7y3diSALdQtNhMVsKvoCtGKVHBJBn4xNE8VkgaDUhQCS3Bam7ZfZ7KWzEetFX6DknV2h3FE9ph9rk7vf",
  "key34": "3VZ1AbMbtd4KuQCy7tofrdDGHBJUE47yGHf6J1dPp3TsUDq5KTd6XtZJ63W3P8KMSjDT3muRL5ydZLLVAGqBcEM9",
  "key35": "4mNvivVWeUojJhCbft3vXCKTgESnxEKBxNq19DfHDsQGLjnCpUV6y2wHSkSKdEkmXfNYRZNv3DkzVwPsP34P2LNL",
  "key36": "3vyJ7xG1ZKqbsDQdsqNiwhz5C6xr1jVH89iRJj8iQD2QqAd9rEK6WZQznKxpwfbpPcXvX38jUqNW4BrYEtpP5zxd",
  "key37": "38zCmHdEcmTcXHYaF86cUHGjckVuq6r1rTXgtxzjoYPTYTKdctN5mRHTETgcBpryT3mWPfkLdr5n5MBS9dVLEmas",
  "key38": "mrv3VHnmhAB7DkmRrvUDheUiq7J43eyUDsxiRSbmG5ZEwDj4ZwKPBNS1NuG6QhrAGsXJpWxYh7gzDCKFmqrgjjb",
  "key39": "3xUZamRpy6ZPaKUkjfMmKmjSvVCjV5dZn2dwnvBrxrjuwxA8GrHW1fMqks1Wn8hGFPLiJpH97ZggSUfQ8Qc57k6H",
  "key40": "5aFVmweAzMsWAuoZ4idbkrkcJW462BHNtYsgYyDFBtD2fDQVZXGNEovsaaEyiQpmPijt5S3V96HoY5RAwFkHVwmY",
  "key41": "63FVgUS7Je2GqoKueMTPLpVtG9KWWVRXNhB6jp3KB9ghZc9jq32nUR6ANEB7FkRbU2Lcy8J1bdPTruZsAdpaKov8",
  "key42": "41cNZ9jewkGG5p8MywNU7UemTsqrexu1tkXX962bbyoDDE6wdjMLAEHSLEmpa53tT5eAhajms7H7fXzY5Pfn76Tz",
  "key43": "3jLoKMV7sy1hQ8jmLfprs7r54ubDvk2ckZzHDYmsxaNW7AtZuznABL7q6FzmsvThkZVSxP9TCsjDUA9wW69jYspt",
  "key44": "4SmB5243TqxyJm8QRA166kf4CaDHBWXrEBBsNUjq8p2652h9RxmQztQ1kbdtQab3iZHsrWh1J679SbcDaswMENxY",
  "key45": "2R5pznYv7cq817bgUbh2GZGht4LUxhc4pVtVzUqZ3JVhrZJjcnrbGiHDobPHc9HGfDT8yhV23rB4sypv8xP1g3mX"
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
