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
    "3dpz6BLVeXVYUy3fxaaJT1L5XM4KtJ7mYYp4JXCGfbVA2cfC3soGeSwvpfm3RWQ9j1wTkUk2EKAnMcBeLp7UuYDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NBWGovte6pGvvjUwR4JjJhf35vn1XDHDDntV3fHugNMASXAo84yuBRRBsWWpaP5mpsKBZNmyEDwERMZ58MNTiHS",
  "key1": "28HvjYHPnniQioqaYuoUXBtPYNdBV7kEZigh8cuMpVX4LB6wd5vZGsNKc4qVnfMjbe2UgcV76KfMDGJUjfq8bMaK",
  "key2": "65WR53kfrSE8JQhtQBHHnFbSPq5kFDPH68nWKg7juDY19ZQc8EzrLBeBDVWL84AjiUjLUa5xwe28bL21WNnLAmov",
  "key3": "2PF6uY3CxHNWZDUg8KvKNgnuMJbrhVjjvzaasujY6ejV5b5jsKCJDpoLvZz2iVKDyCdWYUmKPyAx2DuK6xnnRsGE",
  "key4": "4rkFQg8HjNHXHQ88sXVv91BV2ax6ndXUVJbJoN1UvSFgQJQP9YfDXpB3Sgr2kVq4fG1ctxMxRpLr145gD9AB2wfX",
  "key5": "2icx4hFFC9RdvfCY4cpyW1mXKRpnEdqJTUA3drDKBsn45DLjni5CYBpxfEjtAEG8AK7mbvreazVfdH3LLUjy25By",
  "key6": "4ytpQ4pVU5MAxABEVKG9xsqhq9oDLGEv2FpdD68z8LiA53YoDFuiuqnowtMqpCagm7h5YxZrhyr2x2QWFuVExAwS",
  "key7": "LKmyAQPUK3XaSish1bjzqxiaxg3iNap9w8rs1bmdj492pbLQmEKhawYgWWFXCycwAzQq8553RRsghXT5vVovnEB",
  "key8": "DXTjKR1wtHuP98pgJYRKHHK5CafrXdbKzWsL5KbhPFu88YtpXqsfsKZdtwS7kbkAq67PDxfmzbTWvQv3YucuV19",
  "key9": "KAyiNMe1KGEWrCCZ6xyrmwBYnSzQFg6QsgEeDtUp1LFT2yAoGkcUKkonkEffEAjXHc8ZwQkov5erpCJnVarGoMA",
  "key10": "3qMoZGrwf3UkUjC1QaFmRyRzbUrGEqXWy2jbXtaJPyynZLAZf1hpANhcyM76KRb4DG2UkFVLCBwGB3xFwMVRvv18",
  "key11": "5w7hmmW3qHBVReSQeeSzrAxhgf9axzjDSuHxpFCqNCR2s4cK7Q2cw4Au8QKR9LLzhgaVfZ6nqXoRN9F2Np2HU25T",
  "key12": "3pQVFnHtFEuSMKH8aFzGChrFiJds7WqDzcTGimWVTapFCyw1DXo53uVWaRWC9s1CCTDGHXqBdN3R3YQWD3vUXe3F",
  "key13": "5M66X4CNHjpLnpLQKBrkp58YGcqYVLZk5P9uaobPoPA1YHCtvzwUX2phZAkESzEYsHCXg4SF3se8bhuSrShrwjAo",
  "key14": "3pjt5YnykF7a1dzVc4UUNs4dEhMgLGrJgmQxoyT6gRALXHYaabABVYHRFzLaDcuHfCvYo9JuFK2WDpB8VKS7sDkH",
  "key15": "qmJghsqLK6B3C2gvWeaqincZYQoX1umNv3Ywhv7ZAxV15yGr5EVr7yaE8c3UsdezDvVKsHQwbWaQ94KEWTft8Ef",
  "key16": "4UTaQ9cxRRKXurd1ZvqSS84ssij4cRuesJQ5dpWFb38vDq2c5TjhL3TUHvFzMWjPqKUSPE2ggtfFY7DxmVD9ZzZv",
  "key17": "LmDPXW2BNeLHCLW8spDbgQgzTukSYJ4tfh188MJev1jvrpzdkKbnWZF4R8W1PM6cLct4CrvFb76sMA3kxva8FPR",
  "key18": "3BkLjMifdaUeW6f8Ls8keRmCDiDktjn3sAg6iC4xgWX4ZqmGQpJgbfn6WkjQmdNFfBZRyaZduwdJTVJympVPabY6",
  "key19": "BFFNnhK96evUcNx3i7TUN226S92PqW2wHH9xLaaeAHt4D54SP15138puTv7ws4tFKwLzYnFK7kbGjxUXNwvc3LV",
  "key20": "FJZihFXWxFcLmg88hXWByrbEyeCpNAWwSh6S8hKTNWDcJN8CwCim79qj18bgN7BEwYtSomue487aY7NQUXQaSAr",
  "key21": "5MFwDnk6VaeUiY7MbuNqw32WZHGL7qMn4T6u7pdTsnt8xDAzf2evLsk7kxfXkrSuqWVsDVNxWvs1px6hE29rxu7z",
  "key22": "4m8RzzS8zMvog29BsyaFLeH9tcQ4ejEz66zDAGvaj1EfnkBL58wriPq5HeTbfsnr2KG79u2gon1hXbiT6NaTDqeh",
  "key23": "3AKQz811K41MkP2HAr33fKG5SiJGi7tmKpeP6HwPgnd5WQBtr6399SE7wqztPbzHgAe9PdQnAU8mwWswas9LJPVq",
  "key24": "369n1SnbZnZNp9vakZZ6DyJcN9A8SxDy1YargPRRX38QyHVP8TvLVh5pxtwK7BCwGtTkBX7PABij3AfhJZTmz8Qd",
  "key25": "51xMv2kCjcSg26vYVxRhkAfFB7gBg8BAtRDHBv3VyW2DvJitdfBYPXoyt3X4h2nk6uBKDSio5XcamLhdPHFfqU65",
  "key26": "3ZaSoHaCWqhSdTi5Zs8oWaQxotP2kqW8gRZG722KmGVxNkU1miWYUCAdXwAboFgAMGg9qTAh7ei6NUCZRMaZQ1MT",
  "key27": "5acMmHXV3wpC2DYAoxPQSckPPgTkX8GHsjgFMZBHwacJrachMqWoDPtJPm3FvjBTWEggJcZytYwfeHPLYVVDpr41",
  "key28": "4E6xkqo1AwKijwhMXfCo5XNL6tf9RBam7AiwzYzjxZ57zxjEsoCJxUJkNQaZHKgZ7UNuGgArq8SSwjTWjGntMt5S",
  "key29": "4sot3SqeuTcEEwFVkbxsruu1J3c7LVoSxXvd5RXksZYkuheQAJZBFhwpWPwCcj6fJE3QtsXbU7LvZhdnJLQ3Rjaa",
  "key30": "2Eg8JYPyacpKhTvHRbjr3QCK7FEaBJKBAhWBvGJTN9ZNM91iow7A61JYbgp8cKt9Xa2ad3iNczPy1iA2HQe25kgV",
  "key31": "2SjWQvAJ1rG1moT8BKEomoiXF4R1PEmLj83BusYv3H93cC3mpF1iWXCZTZrfEivissqRg6D3mcwqpfS6dKRBSWN4",
  "key32": "5vnCwJzCYpmvZCXqpg18KVZodHnrBD6kRNC1b2461U3BDLwFwSVetuZWpSrVxdRkFtjraotGX8gz7GjJQp2Nph4w",
  "key33": "3tYtFdhy1uy1KxMvK4vJ5Z3nzHFzpX3rXNKpkBUk6wC87d32ARRZMK1hW14Yev7awhKqsuz15AHwr27HrP5vrWwN",
  "key34": "22paFKdrSGT6riPPwyccKZrMSom4z3wmY7eg788oK7SXcZcMo59JTo8iWtm2WmS7JHP56BfcTSwbP9n9XTc57H7w",
  "key35": "uDnsUBkWhxZVP88V5dQDVEPVvYn1XqRjobFzvVRhfSg51RPRKRcVtwtBjpcsmrjEWTa4Qi7DFqBntFVLYeArJbs",
  "key36": "22Fk3GSmUfHQMuQyPAmEuUgqPcdvTE2EhPQ9e4o8QfE8mRt4VYQyaWARdyVB151bH8EPrXFGycmcLyjHWQ3SVVzA",
  "key37": "3yw6tFrYeN7df1nHG3D4uBi6XGzv32pYoiNtidPJn4gvZcrPoXRtkGBKMm6DWMze791oikJXfyYuGo3imMcZc8y2",
  "key38": "34jqV22jt57d3F5RpNtBiU6uXjC99NcYx9Tmhaq4FbChWjY87on3ignJud4BxyeWT9zCLQvkkDm59EcgVEd3wroU",
  "key39": "zRxVnany7qZiVcn4VYZ3errfysK6hP3Q8gr2F9bWXzb58bKwdDsjU5yLRCCvuccafvXoppJ1D3m1R8CTfDuCbZc",
  "key40": "2PB92ewdgveiC93Hf5SzkdaCCjqGxX5NBHW2n23Ku6gvbAB4oLMKcKUSPoNaE2D9MPqv4sYK8iJ9AKdVyJU9uH5E"
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
