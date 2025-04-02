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
    "5Jni849uVKgLB7yBc7WjhjqEPviKi7QwaiAVpMvxSX2ANqkQBbwoeMSAgHfo6AsU8e4o8bdcSbVk2zDtcrxs6Dmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H6GjRhRdXwKP32s8Fx8KBXGzApDBg5wAwVa33C2v64oURVPhm4ExQ8JZ4D8iFGDRviHbe49Rxnmnkt6AP3v89u3",
  "key1": "2eNCotDUtVYQUC6aFzvcYVox9Bs5y7FnT1FAgTHE9uWuv3JiHJTwbNXxCmNiXNNunmXLGhGgv1VrkumUg5DiCTYh",
  "key2": "33HaP49rk4yzmzCxY38doDHzEZKNBtpB2iJU9xgZc9wv1XB4BnHPHd8vdmtph3KAqn1Hwrn9shixqAKPp2nGrXZ4",
  "key3": "43otW5Ljp6whvSxUYXFB9MxuL7JJWBodqoMpQPFZy9F2YoSAQ7HDs5SqM29YqXqkAe3QTpbq8vp3wkyJjpW4X4og",
  "key4": "58A7rst8DyuRjQjmHLHxcGmLj7yQxTW8gV4sRzRozY3DQyiCNuMN2kUHJ7NDvCC84NxB6ZeDwXzChdJbD2CJo1kv",
  "key5": "FheLeARWBXNd82VKeSWykBCzULF5teoS9PvGZWHeHhnvKdKW2EVbQDEwQqT3R1bsrjD24zHH6Ti2Au5caWMtGud",
  "key6": "4AeXWac8ztUN94CAzLuzMknuWFCoZE7gasT6LiqtTQkGeYnMc5D9aGcQQQfqakPrkCmwVeWJFUc6JZcWp6TnitcK",
  "key7": "N8SB8prvKuoTnCfeeCTnUGzqc7kCEuj2n3nLx8UFKaXiNvqv5nr31fhpXEunFSoPmDRiqT41tsAhP42KuemN8zS",
  "key8": "322apWT1EaaDY2bHu4EBdusEYm9LfpUyzkJFJhsiZ8WreSLjRHf3La3QrrgonbCqBceKiSjQQjRRMTRunvdrioqu",
  "key9": "3Yvv23QYwYJWD7FzzQeScWSBnSy52wS96cZGM68cDripURmTZr9LhFbvEg2b5A6NbGQKvCLbW3ixjohQuUcEpy7N",
  "key10": "5UJ3rkC61iwooJKfwcnp13ND5yfQXzgM9E488GCBWo3woApbbWpS9QXppHBVhGamh3gaMdkGmSidEmV7i2NN5m4D",
  "key11": "4S1EWwG5BGhgEhFVmYNN58hCvAEaYmJww76pj2zfEeigE69ccNbzKDrmW1JdWpyttUbUb6R9DSLtchUsDR6McrE6",
  "key12": "5m7yb4B3b2S9jRe8CVwjvpzLdDjQuWYCrrXrnvY7PaJ5WvxtxBNPTqMy2xm7LQ4ihGeHZ6GrBwKxbcjxRTdDwFhL",
  "key13": "5C7zTSjBS1rndFLB21JzeAZ8LY2gSVBXKf1GiJ31u64ZjdTpnMDYUVfzEkWAtSUBuELLTEj3hHej8yuHd7KgdAy3",
  "key14": "3ufjkVUTdAmPxQqXi8YeebcMHz73PXTEwrsmNYF2mVR5dYajncPwXpU2F62UwLntjTVL7oeV5ctgDDtfkRd1ogME",
  "key15": "2jyrVCegqFj1vopWZGDSDuvfLXrXQxa2uBSqwmLJMz3ySJePe6ghE49nuZXpbESLp7K6AKHvjeQf5WB8F2tYPVKD",
  "key16": "i4W4Deg9rFkPcaWdXDx7vuKmmRs4R5SLDvkRpPMtKZpCGwRT7k9GSdn3FS1EYqBYKEPtCYzJmZGrzcP1CQVx87t",
  "key17": "2pERNuCPpbbyYogerPhKAgDCC5rRKzLuUhTScCLHrvbyxBirzqKs3Yakhn9QEUaEXcettdn2oBoM7ijVB9n614jo",
  "key18": "4TWJtyTshXdcn56WQZg3Qk6UHUz6C2mrd7W3TbK4ehg3FQx1QNQ4cw5Pgf4aHZdveN7g9kvG3ZqWuS625qqCqSA6",
  "key19": "2YsapuquoQojSD51H2pzh6Fdh9MJxQWE22WM3jxMWymBdJTBh88gJTd6fszYxXHrNkwCA1D4RZ7q1oJXkzU8ZQ2Q",
  "key20": "64RqXBYBHzzVgFq6P1V4VDtByjP74oqTAu5YKgczoTJ5utL6CSYuQmZqw5WWzMUkdKitWsQdLihPajTZidQ2AZcB",
  "key21": "ucbczU9b8ryJCFdeT3CTDX5iVwzByXerJEyA69ukH2xtJcQddW5ShqSSo15jicTHYrLpn1ViLzx92ZZjDwEmJ1j",
  "key22": "3kXVzbZHfB2GqYiDLHL7As3iqCb6pbAb3FAmYa4jQtkMHv14LpWvqr7McVMrCKtU9y12b6bnyvVcq7LTViVvp1J8",
  "key23": "5cUnNcQr2Bzf8r8sdDM6J1eCusu4L7nnf6Y7rR3BF725P6D9mAzKFSmNeiE5X2eh3y7KkrB6NnC4bhW9Rinya52o",
  "key24": "2PtGM38L3n9DLFYJ9bpENd64fYnSAWwAadcWGFJRwMDacfNv3WQu9wvj1upnBcXGSeiUZoqVZNtEAfLHedvKDcGF",
  "key25": "3dvbjX5Kva4ChuK5Bf8VPGhPTPyrj7kYAm61KV9Z9SHTQtyx5C2vPKZVx4w4obAS72VzyUN1AanfGspPygudhLv2",
  "key26": "3Ko5eGaZghRrw8WkFhXKXVMA4Ga3PPr6ux9pJQqctLKEwL1xShSNjacAjMtJaW2uWM1q5bKTsLAYALhpEtMwumC9",
  "key27": "2oPoYa7sTWL2VfLPAKCo1Xcjo3iRtvLWkB7PmB5EirSoKEZ4dmxCnwrhMYKHUcrA51HmqcqxuzVx3HBXv9PAq8Sc",
  "key28": "28NZBEttJWBfs1io6p3HdbmdZxVPFWvpH7ogprqFyoJRrCLvbb1bL6FydePxsVYmJUnKSUMFKb9V6MmY4rJVkyKj",
  "key29": "3f8quoKFx2bL9mKhS2EqiT3NHScNd3LgZKydBMAACqadFVm8cerpdSjrzPu2wPFWSgHtpJP5ZrYvr6jwNwLW3i1n",
  "key30": "15xwVDnTPKwPws77az46awAHZnNCJmhJs4TZqNzAsAf5hovJ46DsXcDbrfXjNWgQx9vdp3mDYSdZQDDvJ1UoNks",
  "key31": "2A4jRfrnQnRSiLtU5wV6hVUJy8syH5s2tLwRhD2jREdAFwnNNAqvkRgAsQ8TmnqiiaG4qovqzT9Kt1sdyjyRkSq6",
  "key32": "124mKvy4qiXxdnkUJbvz1kiu9onAqhrztgAMgyhYLrX3m3ZjaXaGCcRrzu4ttV2mkfsSxzg8ebqFNDJ93RQT6PEK",
  "key33": "2jsNAbwDhz7fksyVrDNeFXE1F3G6qvKdYNLj6ncYka368YdjrxC5N8SacdpYxoXejJP5CLAJj3jsD8UAQKcTrdFU",
  "key34": "2cz5iQcYwzg9hjDZ94YhAtGCxZ6aPCXB5RCZxtPDwuUrThZXzHjPUL8YYdscdbueLKipPzo7iy4kdDXFwGHxkSJf",
  "key35": "5vggCyck7EU9BQC4EyF6ef9eXn1Dsj2YirSz54kgoB8d6cwfajDpFFCZTddsapNtseobVf9UKZNPs3anravqvahz",
  "key36": "5iqQvyK6SDcwbeuKqdf3diob2eiYgGARrwHKtDbUrDfwzoZ1raKxnRcXzQNGxNF8mVPEuYEUPtciWZSYWJh8gSAR",
  "key37": "4x6fRYZCLbu22p8cBerusa2MixDCSgcqVAZz1WR5gHNZ3sAFTikU6uQpd5pRZACEcNSAbfKrx8jQ62Ed5jJ4Sgt4"
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
