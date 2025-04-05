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
    "NHxSNNXKdGdNFgZtedd8Ema5kmsXeVP5MwyojGh8FUPEfyWgkcNq93z6mTUTYYYatpuko3MhvhVBPhAUMZS81Wv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56hEmjuqjR2Xd2VnHC9UpGc8SJsbdQBChX8HtCjuSsY5NjWxX4Ywdn62HXZSRSRNqcGaqbuFw4rtGqFPqnRT4nw8",
  "key1": "3ZsdT1A89eE48SiT9uhKfeP998aikYLUE33f28mGjF1xsghKhJk3p94pi7HYzQEF11ViRgTSm4vCwQHa9e9WueUH",
  "key2": "8MvBhVLVQEcVCa9yrVo6hFYxmEtYaX7LMy4XnHhDGVqWCUfSVGQh4CBJbbQbVBhkcT7R7pRUujH6ZEojPLh1shN",
  "key3": "3ar2YqcbKHuTbR9YN8TrnKLrhXeakEzisiV5ph3LxPLnjpD4Ry9ZR7JLnu5YCjUJ3XBDnbNPq857CgQegZnNLK9D",
  "key4": "1jpkRPUSU1YKK5kbH3wVAZHX6QEa1CvmhP1xJ5qdFRryzQPW5BUyNqaDvhJ1Uq22vsmQPDMm56cKRrQ7awsmXFZ",
  "key5": "4jeio4btqPjpjAzXSsTAMAv2FpX33Wgya6D3Ya1vjmemAZxap27Qrdub7bjuDEBwkREwr8eHwKJANmsNnbL51RUa",
  "key6": "4jKwasKn6tPsz4ZZhbLBySQb1sHDrzeUfYy9NLuukipTYhxt91qDxUDsB9CEYeckNEy1Uw7uv6G5U7Vp6CNi6NFs",
  "key7": "TJAeXTd6KrZhR7nnT5mAfoaxWStr9JyguZgokkJUhAZdm841HRH8siBQe8qLeF99SSW6XCDXYqs82kQnFhUMxee",
  "key8": "4NFiiTBuzxD4mjRAcEdRBoTkpfJKJwseJXhbGkr3GiW9WzsfughCV4FiCWAR9ASLUUxbeB5NBsMStN7h38eqy84w",
  "key9": "4KbQA6poPK3hALEHbhwB1iVB9dkai4eh7QQcYpcSnhKZnDrKy8EGuvouUbymrVhheiVxMPsQb1zC1BrtsxVhALfN",
  "key10": "51KUS4KSz8EVt6W3czmZjrj3KDXP6gU9gv5SrXUYFynd8tggiccoKRHArYLZRRNDwhBobZcmsHnQuHmZn7Y92Hty",
  "key11": "5cLaN4bhAYtQRGjogXM2QRDrgTrg1N5CyyiXQbytWshJZTss3zycoyksBDF6WxwxKMXTskEXVew3m3HbDtpmhCE2",
  "key12": "C1fAtkW1ZcFQcT5CJy78Qo6vQNn65cVx9gC88by8Pyg1p22r1b2yJB2ovRobRcsRrXsvVwuBSfVwPMkccuddcai",
  "key13": "3G5SNpTCmfhGB7VCAaV5GcEZRtXX5zddE148643jYro96aDAuLaM5MLAaFWdREBXzMxanLy6rKHCDcSc76gdZAab",
  "key14": "5hGcPSgcUenduKwGy6kv9BVqYhwS3BS8yHWyiB16tW35yXyb29nBA18Doy2d749wbweQQcYgWDXi6XZe9SabKDmS",
  "key15": "4zLPoJ72htEL5ztaPJBYRfRVjAkyrn4e4eJgCGSqk8GhQSKKisCHUHaZ2pRMHVCgstZfwr3sMSTYdUNQvUrAGXco",
  "key16": "2GqmUTb22TgK8wVhSAznACWPFbV9cPSKyqNFzELp43WUWWjnuccsRedsZpkfYumqeA8ahi958XbYp13ZJ4GLAakP",
  "key17": "5n6GCXA1WPzSktTMzD8uN3PpBHBKF1FhhRfr51amspsJZMu8QAiCRbEvCNKncwx7RfdegxQwPhphiA53kX6Lue3X",
  "key18": "3tHqrAwkZkFKSVyRkcGTuLXzC6biJVrXn1dUMYcUcHXwYaV8GYoZbfWkLC3TZJcUVYQAdTi9SNSRSHKMXjuD8rAN",
  "key19": "3VrTvfxKkKHuvxxnZUSNjdtqjRa1Yxwpy64dVkLNE7fmDW6fvXnAQoBsokEiyFDCvmvqBH5evhQHUBnfowccEGa8",
  "key20": "PK3tyrpeQcRH9tpA6JuNihTBbNaC9n88Dy8ZUmBbV9PUuCZmYaDhV5uesmsS8nh9ig5JF6XKc67wtyHBsqncyxZ",
  "key21": "4TK3iqiwWYzxsiZCZMUR4ArAR9Ge9Ub9PVpHtduYEncVww5cuZbKCMt2muvT8VzMrw4C37B9mr4Xe271hgH2dvoB",
  "key22": "41j5a2adWJqTLAZMyyRyKqTXX462iHHuBjCKWwEDJyZArNfAp6gagPZNr4ANFkfwB5nUJkHCXo9EQPxhitTwGGro",
  "key23": "5We6n3VegoFrGXxJxsD7iCKZwG2uBg52nWifc3jhqgFCRpYvmqPr5GggwmXzWbyUXZdwREJLMCZU2Qv91BtxbhG6",
  "key24": "5qDuBGaqMnFCQUeR1kTnZCs4TUTVg5vLQuokvQsCoyGcYn7L8PZ73eNmxb8hmVVADCfPtYUHPxEwnkLtPS8qtvpp",
  "key25": "3p6WT8RvG1BUMMduf2zDSPMGQkA8QoMu7uuyLSYb2tcRjVggQYq4Yc5q7G8QwWvaXbQCpZh2nCahen58PgdKmMSq",
  "key26": "3CmKuPaJhkFqN8YJbVax1ys4mXbcR4Zw9HmXrdpzFqF516Rscmc8T77KyW94WLFFRX752K6DpSorUxYe8QRfDDD8",
  "key27": "YWSqYkb89rZLnse9yzaiVno4D7ebxNGQGPcQzRwA1XhyyBeX6Mh8CdbvsG3hJvtXjGSdVnaYhDru5VC1SBvXQfw",
  "key28": "3bBwVFQrRRtTcnkcHym2vRFsRbbxhf6GpncbLRaGmoJJwpPh2eHzsq1t6TcQtXmxGdymx2unQ3gVWYF7R7hyn9ZZ",
  "key29": "635b3SvifuSSES1YyAVV9xkraHdfdc9wgpCeRfwQKho25rTpBKyN7mMx2ScM6ErvdzXntZrxdvyfAJWTqJA17YHU",
  "key30": "uRJe1AK6WwWaCRs5N5VoTgihmDfxk63UZHdDDUKwTdEVuJcFtRHpMMiBYRqUjCrkfT7z37wwDD9GgK45WESMktW",
  "key31": "5rmGfGffuRhzGgJ9mYP4m3aUQqK7CEiEqWPx6pBhVYcJRDw4NQgbfrUZtdmCTgUu2mkC87owjn5fPviFC1LPjHTZ",
  "key32": "2Jouym8f26kgWqsrNK7w1UdU46msZNNrmxW9m21dVUsUg6ta3xEjfWQYqciioX5cetJuU69977itLT84dSEV2qjz",
  "key33": "32Qdc1SStg8q2GVczVESpuNYHSWNzji3WVd6G7aiWYnNx6uUDJK1K9m8tmqsJexNs9kar6344qhKXzHeJm1iZTV6",
  "key34": "yY15o77ofGyDm5EYWgQCJCsCHpHR4VGVrnvmLAvycfpCFz6gUsX6bsHfU8K8ywbvZd6YdVuvp4y2PgPjsQK9sYs",
  "key35": "yhCtcYVEaPguTdziBrxk1fVKcS65xVYs5d5GWGMSJxFLPTR5jPnqymZQGjUqTQV6Sn7H8CjVQaPN6iHHTxeTr4a",
  "key36": "2rpvdgC6AinGRQrj2X67VkXyEjfzF39oSMiUwKuTteSiHKF9VgfQLKnRFYbWoX3a59bxzhby4dWE1YfkZSZsLc86",
  "key37": "YJQgpXcVz181JmPUN9AwvvKAXnNRXbEXRFVXcNpzh1P5XJXxfTunhdKJJvRrdieWBrKjKFQsVfSWUfSyGN6taAU",
  "key38": "46mH9gymFDHbkk4DfA5pYMomjAshZep2RqAfxZNYTKUVctCEnra2Sif4S1zn1TQiP5kQtKE4pVJDFcotbtHAtUFX",
  "key39": "58iBe4LJUa5331mLrCtAdPtu1vAx2sbzEb9TUJk721mEw8VwvH7gKTe6hRptCJfq3NXizi5sDHmFP6wYZQknQn9N",
  "key40": "5t4f9yuH8B2DZfanWF41YMEqSMC32YaLxK4qxj1J3QegwGDLshUZsXCxXbxdz2RPnJcQRm8eEmDmTtVSpuf7dMuq",
  "key41": "4cqQYDmNmj9Gfc6e4BBWpcrPFP7jq2RNSWr4it3tYP7ymx5SZX1AEFA5EdbdQvunBZ3mHsMp1GX8XTmvnCjb3XaR",
  "key42": "58DxJaWFXSvkrdMor3ehwUAWjYNNgzgXa8KaUiWPwrYkmJxtTzdrxWesqRZDxVcGS2N3kxGhgzYEWeZs7FdsSNsE",
  "key43": "NmuQ8T9io12E3CH9mCVjrqq49PNANqhCopoPZ3ykrdpLBMEAG9y2zqJfJyRoNJSCwRJ2EwHC5TAdTkzCm9Atm47",
  "key44": "37Ym1za5dtN9Q5uYPgNKA2fzsG1v38NSu8zdur4skwbtvyLADqibzrFd3DyEJTbU8e9zsCSpJuRFxU6LetKCT15z"
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
