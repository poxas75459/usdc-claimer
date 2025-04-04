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
    "hVEWsBoHoujcowqMvZ7rNSg7nNiV7hUiU9KvmHFHfjd35mg9PdCmwTY1JoNeYDSxsFggcroxAPF7LddNm4eG5MG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E5UdDpisaBhNY7f1v54dEEneZ3wvJRvvz7at7JmkCBTCQquBFCJjmcovXNdhciefiCGQgXA7ECjAsv1g4wWZH3X",
  "key1": "37Z2fpR9s6J8ywWtpWJZ93vjebKVcBWbrBNqQh6r41QDnkyjtnup5oLgAWAozL9yQhy14YmwERp2kihby2Tzpwy9",
  "key2": "3AFLcP1nSPaGeB88ZnQEQny1kEmUSdqkDXKQZH5BkUXw9zJUVuBA3CiUc8e3UghpVcYjrtka36SPV2Ru3otScY1K",
  "key3": "3iR668KGoLcsJ17kH8N8rRHYpdJaoW5DyogqgXZa6YD9bLHYefsM1K5uNnFuyUNnRoykadMRrpE3kZie8eVSjLex",
  "key4": "43VnhvYVhXTpaWHG2dFyv6szctfPdPTGrtYcy1NSZJwGgH1ZMwjtjAHcSdAyqeY6Ud5Pina9iCBssbSTCf3YYrAk",
  "key5": "2Ck2bp5msSu4BSTgxiEYQ4BXiimuvnYg59J6m23f8JDFS3RuYwz8oaNdsUCnnt9UaZa4gdVv8x6P3AxULR5gypJV",
  "key6": "5szSM4MNzPnZq1egwEVm5MPEJWGK9uAd97PSutE2DveRzf68D6NZDVQwwRG9dvdKYRq1QzSUsBhhmzjJKXqdfwH3",
  "key7": "5WYcPzzYG1AuXGw8qnNED9embN6uLBt3JrtV3wntsEQWSVsByjSDe9Kmcz4uRuo1sRAMPuBbNBdJPn6FSSukZj6V",
  "key8": "5yX9doHPRXx3ezyT37j6RWeYdGMiQtytNDQusQC4qX2CQ17E2brMLX1adiPrVsCpiYW5ct21Lz2qh7CypJBSycox",
  "key9": "4cZCG1YmCuPi5kjsnHxxFntzQfXCvMFLsEp4vCjbn3D6UMQRU79n9gc5YydwK4SqNQqUd2TifGVaPAsoabvYumG2",
  "key10": "y43JKjKcLVTKbsPKo7jYrnaCp21ppB9B1kw6bxxaBpVyCd4tiTEmmVLvBY1r5EHpvSVifGvHuHXzrM7EV7BEWKf",
  "key11": "5Pp2DU9K58FWhQ6eeya7Bzd4EYWkH3sF5zuBYAV7CBxE44VKJanqkWQh5e31W2UmWR3AD88CfufYonwwwk8788Dy",
  "key12": "48t7xewp2pSEjYZ1MpCSGAoNc9ubmyFC5T33EiaCaewrCwaD3Hup57wxHkDbewKF9CmhJWZgiwVHdnvfRNmQuBoM",
  "key13": "3NM5YcVzRB4CJwfSbtQ73zCdBdYc6TF7MfL1oeaNa6oZsruibPBvrrngMxoW9uKesrFxYGhTqaZdugtj5FM3aASb",
  "key14": "pw84X4XFksX7pA8WsvVpwJPuAE5NdW3o6WCVfgjsahHTZ9Ai9mcaBM2J5DxTpcAHBfYsigkRQUT6kBgBeSx5aso",
  "key15": "4RAd2MbkvNrvGSxB5nc8aNzsk5CriV1WzT5xuckDPbpow777Tvw4ZTjAjstMqS4EYTNZiNhDLSbNoeVzQoxjpjzB",
  "key16": "9xc3bKLeRxW6zPL4wMZDxuQwCxP7R7hFjjhYUArBMjQgDC7XeiAsEyEv78yFDPBa1YbTY2aXL389ctMRqkDMXCH",
  "key17": "3rGgEJghXWsdkZfstMWFyxfHdDFxacRcAS9tRGoH9TaaXU6ZSH72VBjeryjzUBbf6uGJeh9JzpsvE3C6cZLpmaYj",
  "key18": "5z3o9ogZzT8SYAwyMuZAnKddXVWUz9aJb3i1RKXwWADA9Mn9LgsF9G8agDSa7bzVGBpTuX5C6LqshoF8Ur95bzjT",
  "key19": "38AxZupkaBgcz3vtEXWswE97xktomJaaQwgqsiJbAPmtaQXH2aAauPibTE7FkLevMZmankSD3FDLVJakaVCyxbBa",
  "key20": "3yrmjEQra6roZp2reVwqA3bUNYgDmU7ncdSbqaNdiyqNSKMGhAuMacDbHdzgknGBgAPz113UgUpMwCYoNhAxPWcM",
  "key21": "5bMeYpgHGHqvmCCnb8PnDnvCfxsxraWiT1ZNe62d7FgDdcwyjxnstFhc1van3sGNQpvrFyF5KeotcvgVDFWoGC3L",
  "key22": "y2ERtdj7EKmQUv2ZmejxLCPKtJYoGEJ68h9JwdTnbgzmbSyi732baHvSpmRrZnuJs7Lv6wrt7ZNKjK18VNWorPE",
  "key23": "41Zn7yTc7AqAo2SUHjpdVidVnXUWqkqGBQePkK7uzc1GqfEk6bJrDftTffG1iYdtsG8o2rJ8cpez6k2ct3s96gAT",
  "key24": "43vsT2F57UKzmkWPLE9PNFWWovZksB3rXcjTxQJ81Rw9hUFweNeF4PJS4iCNzXgWAMJSNJLbmuLdH2Ez2zCohb8b",
  "key25": "42VHv9SJabSZkZTGGtRD7qKLxTUemWG5kKmrChUpjiMsApj6SWHWaXiTT3gx2jF1w4yNU62XpN6yHSR2cVR9obUw",
  "key26": "3zdCRadFCxAqL5b7FoMBXwLasCCVTQZzePaBDgDJoifccziEggKpRHS2prEr9cTLMHWGyamnH6NS8tTp9B2ofV5B",
  "key27": "W8WfniQjo9S7oNC2NywUZPW8beCYDuWpSYx5NUAQMxMrYeRatjrdQqUHsgLVAd2F4uY35cSuKbmi3KbvMZZfXct",
  "key28": "46oxkvhHyqBLA5a5NVFftFqUncNqGZu9WNi8dEtN1LsjPx4cJ7pc3ytF5AUPur3XCY86NJxCE6sDzyh2fmQsDQPQ",
  "key29": "5CcT1GkqZJ7jXVs7mPwgW7uAtVSUjmYRfZz8eZeVS7t7cz2RFQ2U1Po2UDRewQdRvSQbECN6pCw8K24T1Qucniop",
  "key30": "4r8494T1pE9f5diqAMBzG7pP3dqwTAaMToCEsT167TocHBCnx361inn1yzQkG2gAXVHqHt53C4rBfHXp5tUJ2N7p",
  "key31": "2uQMjd4s5ykVYCJQwtnnzNJQ1p4PFP38TQsJAmUc4F5anvHVyZiZm9UbvXuzsf4zYjHBNh1J8Vu3o65zMWyz7ECY",
  "key32": "5K4JV3knZbzXM4r8ncEGraDnvEngsmJSjYvKd39s9Kan5j7fypJA4M4UVJ9HJBV7tLnsrzcD3FKv5yZm48jRs2ec",
  "key33": "5qTXuu7xyTA55dz7jxppcJzG7F8TD3gDLFv3TbQu3xPG3vh5Fyzpz72X8o5vP4o5kYTVs21EceY8vMrR8JR8s3Lr",
  "key34": "5Vzqmvcqrx6WfR8peAPxBhi3c9PRNHZBfYgGqgWo9A8o5RLXBvnMimUjPE4p6mmLRsWdYZPBvTKs76xgEPzP9b7z",
  "key35": "KjL4w6sjFQ8eWzabTSyq2PBJCsJcJk5d4LyRj7o6yJNfaKLABTwbwiQFW3qDZ62xCvViqodbVP9HSELGqf79rRT",
  "key36": "3rApPaL3U2uvfWmCWny89PTqUVL7yQd3raHrvZXeLKjy9gLJVJGS3J7ESEhGSyi5ys5PYCgvggyrwqLtUtLiNKtH",
  "key37": "5gYSeUU2Qo2YkvAChvyfdc3DaG3wNSJm84smFgFioQftpexCPuBk5LsUHTHPbPod7Gk11AkYxh7Ybs87WRjPFGe5",
  "key38": "noU1pvDBB1TvUesXc8ihRXBtmznDPCcDheh1M7nmZz9iRx1QmRMER1PRLc6w92aacRPxxweChfh7wySbtLtJ2JY",
  "key39": "5wVVV8MetSsuJZU877HS9wYTUd4xTSU8EYZD2mj2AFw3uH2uHxjo2M41jX938gtNxzMKyQufFHVGxGqdSKvpJr7s",
  "key40": "2beGnjcV8Nb1FifWk7xpy2fCZC4x8qBAgnLcTagF6UYEKVdYZPNuxp1rJzaKFRvu25c5KsumWGBZbaRQn2zu8Uqp"
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
