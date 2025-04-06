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
    "3kH2sacnrXuWu2nGUqLH5ArDMZV6RsZvSRQ9eZSTmmWYPpcRoibsZwPpbMo1RVq6DGQJzw7H4CeF5f9rLPm8Sg34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JXQ1qPQKrfVrJ9qwHKvBcGQUHFnmrRqUkwNAWDHTLRqfJFWUUoCcZoS2Lj5zLEBW1RDXWWKMXr2xeKj74yHx765",
  "key1": "2eebhVot2tN7ZizZAc2kxhfsD8kzae8htjPCTk5rvAknDSrYEs1zM8k6xcCCTEZv14Uap8YJVCeM4HV2TE1wC6Wh",
  "key2": "2ZguW95GFdTMs8zBt4pHk4Wh5hHyTZEveZy4qom8VBefBkXzTgS8JGizYJvhMzcWFykiY3QmSSXmgZQ2mq8feNKs",
  "key3": "5xdX6HBL7Nx5BNg9yr3rEDVA55mXfTt4HbEN1b3uJALSQK16ttgKGZ2foiNiyqVP2mAv5tWCEggB5k2SP9C7fRfa",
  "key4": "4niv2HPtNP3hVqcSC1mkgKXAZHLaHpgtKFpoq82Cyz6odUNY3ktW8dxnfPwUakLH6AapWbuT9JRPTUzh8vbTykGE",
  "key5": "4By71hqmE3r7g9e54jdQF2yKB4PFnnapui2qnfzmYjakU2FRZamAK2ZS86BgAjEfA5AdnSBBJS7spHiKhGbZtwPe",
  "key6": "5Vz19jm49oyYwWR7n55Lb1j21SCWScd4oDxgrk6KMzQQxv4Te121QdCEj2VZvWtZMNENJonVnfXBo5chAxLQuJt",
  "key7": "aFdyuVmryPWEatihbju6kLuzA9oktwqLPHuDxBMcx5GCWDa5GkFuoaLWuRedw3q1xUhvv1rCFUyfjsLPHSuAU9g",
  "key8": "67qMQmHGk8GqQh5mLLFoxt6skb7Q33pMreQ48a6tWjSXWQZnLwdyKdkoKPQrr4WTfz8E6sqzeJhtd8iEcfLAoD72",
  "key9": "2eRfcGNY3vGDaLnR1f41UYQg5R5c43TsqrogTBSR6jZgAmyWNnZ9bTzQwQUuYUZpT1bAJUZyTCPZCb3m564BJWbS",
  "key10": "3w1WmNK5gD1bJi7CrBhEsiSext1ZfLnVX2sngAucjmTrfUnkXwdvFEvrJ1PFRdNRv6FAD7xoUFjpSLWvLbdReqoP",
  "key11": "wQbthLChHumifZPco4RWaHvZ34s8uzGEym5i7y3g5TUD7TezbBp8yXcXWKWPUwgGGLQC7yT2QLveTRNJZEsfHn9",
  "key12": "4PyWXFagiA7Tvu5PLbWqRUWxW3xopdNMB7famZjogZ5owvZHe4irUeVASQymVsNLij56t5fyhK6WEFvrLZ6M8iYy",
  "key13": "4Wy8s9JRjoAFTFEDc64CyCcXVP8VU2U4CV2xyZdgngy7xw666LfYF33PKvt9wqfEDdXNBsFwcxCUqVcjoCeaznKE",
  "key14": "41f8eRuMzaZjgZvAq2C8xdkHDgLpjikR2DEuUKQVN9yepcSX2B4qoULSVLMMFvqVWoy9JEhYxJXDz69gGXGH6J2j",
  "key15": "3rqTy4RAzwHub4468o8nd74X2U2f2qQe7dn86v7wG4fxU3uu5TxZvXiPsrZiwVYCX42pQCAmQtmdNxnwaC9Yzi1x",
  "key16": "HMw1Tirhx6YRXSWG71Hpp3nnJsnGTqcb2jYbQuQYM3NvxEmwX3Ns3HYuzNGFciZG9DwvV8aLw8D8gQM7ZUhWSCt",
  "key17": "4W1Epja9xEWaqEMRyHX56oykfmE4rXemLUkm1ABbzG7jbFD84EtX2deMNwuh53oYqqQ991xP3DtFSNzjkXppHqfv",
  "key18": "4SJG66pCQDD1YAeX4pd5w9QoJVVhmVFtnMkCJuMoPMoPDJffzrmieQsjNzt9AZwUuch8waFDfsokRnczkKs9SKW",
  "key19": "CFJjaZGE7qAHYP4LBH1h4RmaHg3zSZ81q6VvER3ZbvQPQqb3Yv4m255y1ugsXGuHKmZS1HWih9mmRpbwwT8kNnf",
  "key20": "3JUnmXSfXHrBWRJRugZVdxe1KwsjNS3WboutjkDGizsQAXmpRwwehScJftXTFDcY1w4ZRhuco5kJbagHNk7gGDRb",
  "key21": "T2YXq7D7UsXsRptW7GonX8CfbEfzHjGZ7VenxdpLVY2wHXw1u7wztd5HqmBpHvYpLCwRRthd7xWyJAFEYuCCUkc",
  "key22": "4MHUgEErDbNiCGdUXA1SZRXpBSPRz5y6zAEUUuEGbBBmJ1WYR4gxoNTCbD3voLFbDyxLe8rwVMXpAp2EaSrrnZCV",
  "key23": "2Gsv5z6uy13sK9zNj5bfg8JNADJjS64zLdpLfcJ9Z5gVvRcf5rEAryeLcRhwhvD99iMK9bPQTyGPHd5Tkd3WDjyL",
  "key24": "5EWq24VXvxYoxNMTSq2aNBrt2taWVtAotrqNJhHUkpbzCvygBiBdJG1Vc6HGbPGUD2CJMxhmpLXh7eKsXyjfu2TY",
  "key25": "3hcKytLSztGvBsZQ9ruTkC26aj1rwnkzCg3iS65onAwPSrsqbidKUQnFvJ4PuKykH6rWv4w22qb5kyPt8hAJV5BM",
  "key26": "3bTkK7BWBZ4YRfCT68xZxqvwKXrbACqMvqBRnv7ReQ8wJhFGW6TXoiEyk53U7ZjUvWqPtTVqRK2C9LuK8QNwm7We",
  "key27": "26bp38LC19zQBrpMoQ9qrMEk9kgfseiKghYarWwWGRhF7w6oYmzQnvsV31A5RBPbZchznEdPeXeuEmNRHZvTrStc",
  "key28": "5SamTp4smp8X2CLcCXgsvBNooTaCNHo8Gq21Vg8XXNkDf12VFvrW7YdFpFkDdq3BHTswmkxQxSauCTcorFmyafxW",
  "key29": "3V66i5khVpiNcSmBAszo8ZNcsJXgDzJEAKc9KiD4SnxKVESuJAAPFwLum6hCMKFXHKr2Fv2roYfHAQrrHZEJhGjV",
  "key30": "4kcSKLCLyEsv8x7JZugdwooZC2BHj3De3bE9L2WakK6k6j8HAzHtYuo9r3udy7Y1hxuq62Np3oA6KrucHsiskUn3",
  "key31": "5P8c7pRgpo1SrdXwriVE9WPnyVJefUKK6tqTTmVZxESapb5y7FPRAmyQDpzH9efhgUBs87QYCKB7grnr3PBBokqP",
  "key32": "BfE4D3KKoXrjNS6FkHUMbtdturiJx5VBT5ahuEzSuyPtDrVY5bPpwoxaKApHSaTyeaBhSvgtPtbcH5EVQW5YftK",
  "key33": "5gqkivnehoJLE13rFBd6mtyq6BgwHAPCqNsGu5KdACxXiXTvdbgotPwcicZKgiGAvZnsn8FJDh1qt6rTpfJFTpb6",
  "key34": "2vQPs5CmbAzj7ZCH7RHqiRCoPjJVtQDG2RcupSnAKZKgr1qT61fFMazEGkwoMrLs5koNmY8NPEm1DpyAG8D8xvv7",
  "key35": "4FFTbLabkjp1FBoLdsJ5YapB8obFSNb6btzRirXvMVNJ9pyxQ9aAQB1ZuKY22yxVhFSTNaZjM4s95BBeeEEGLn9s",
  "key36": "3RGDtiEUAngvY4UFX82m9hZUdr6yfu1KMypuxoDD3EkzHyNLnB3NJEhs8ZLYXGMSNnKko6ABx5raAZVWU1FZvAHP",
  "key37": "5rWAQWNQKaW2z9CV6Uq421g7NXM9hRbwxwEC5foCT2NtkhbKDyraZ9Vv28GpMh2XRQ14RxVdo9FFhTVXkTvj7Tyb",
  "key38": "2YmKpQx4zxhZRsqstE55EhecX47stPZ5jpKvPi9Th5iBpqSqgfVJbrdgsjUCcs7TDg4RMiQzHY18N8pzqmj1GuR8",
  "key39": "2RVKCjnPW8ao3gKgjxkKWPszpMXMpsgXiCyRsv9JsjpeaPZjipjALZ17ygMd7ynU7EqXfZGSEcYycVRoRrBw4uRk",
  "key40": "2oveWhw5KiwN4v8DuUGAF4LpX7jWJCDdKA9KSLCooc12qjX7KTxzS2rcDMxrifYjvxTFf5a2xhNjZnGtWXCzysqT",
  "key41": "2Mm6CnJGVa5WkLM34ya4DRpYPdpepFrWmbhc6Rv6a4mvpLeNy9m9vDvLW3PM7dXjgjb6zDEd5XxJNdvYqssZQNTD",
  "key42": "2s81eBLMbD2EAqNbYPUJyXkLnxjc3CQDJNbnB71ZggXQpwdEkKeLN7hUJcMjaVMWLtLUD3warfiFiRat1ZtR2cSZ",
  "key43": "5hdF9KBs7e8ThA4fctHmB8CKYxT5ik8t8Ec2BAhJk2RsropLwRFhzEdP6jCBHeVw98nAk6uE7yYvGSsCY5dGwJkT",
  "key44": "3o6Fozb8uhbZyc7SU2v6BVTkRD5sWv7VozTRXQtWCup67rikE4fBPXzt9mtbfeGvFytj6JrSEDH7srqkSM8G6S7H",
  "key45": "3NEiAG8do5KVpdqV77NwD3qZcmF5cjP7wSQRXYnKHjFDE7BpmWscLRE9AX1wribaKZD51qVXr7VnEpVWLwcuwTqV",
  "key46": "Q5ii22vfowmrJsqVa8bcSVeLtTc4QbFDp4rRfHJPaGw5oAQc9XybP4ifg54jzHfM6YmVE4V2KYTmxbjutGJY8RH",
  "key47": "2frDzfAj5Bg4amZcLVeuMEp4MEQWLWnLTrU56GsWHBsZHbTGPZyjXujou7F7Z4C3FngNUKvGycPmTmbtnmm9fbGh"
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
