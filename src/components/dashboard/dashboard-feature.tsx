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
    "z3keySYq2FgdtJyFv7VVrtrx7Z6CotUaQaKexp6PoyXnG3MsWCizQun1JxuKqjPhZY3YZ5Vv2heJ8idxwezbw2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ex9FJSZiT52HDEtMxSHmPSz6nDDiMDczgvV2dqSQMHcA451TDa7RWwLVkqG1KqDRFcLPtyvjUx6TykgVjGSsTAH",
  "key1": "64TSDbXzVGjLqxXu97CjYosFugkes8CaVMX6UbYwUzq2aRyKrA41BiFxvPzYELGYWVXdYz3bT2pLLKMuDKHZbdw2",
  "key2": "3ijr893gwLK6r68Z1ojXcPw5yiPdHW6Lm9mHrcd9FaQZief9TxVJXKjiQMdnJHxXESJ5S82SG9C2RxBF7AKxcxUt",
  "key3": "DnrNocNMpMikJygiGJeWZLzWugiHKRHecF7h82NhPFu3Qp2T7XC67uGaHQZoFwLJJMkWmBpHii9CQBmXiFC1kGU",
  "key4": "5UkaWDwjNUdHR9dR1LggpV8eMqPsMPzwLsDw4hkoQZyPy8NbuABbNDC7K1CSKF5RHWSNbJ8Cypzn6NiqkB8aJjYB",
  "key5": "64vAVgFM5MhkFmoY8M42ciaTCgFewcj8c2NDYHQixF1ErsPxZyQM4mKaeYkkPdtD56YwV6iHgWh5hbCYVyknzNEh",
  "key6": "5fDUa2byQsq26trv1RodHYRgWrJYk4JJNvX26P4JU674z9P6c7CRn5bu4psNgPm6NnyffyuVKycbRz8aLyYZ2FBm",
  "key7": "2Cp5gzNEDfwC3FmvPHex8WfUAtjvLcKk7Vz6BALdeAXDAoBqrksWwHetyqRyzqkpuLXBmbkbCYxUGDP3t2WPGXrS",
  "key8": "3AX5WReuhntJEx64wyUobC2SHUuhEgwS1xNr5tzELbynh73RSjNjcsXovCVKMYiqa1PDsTJSfwd1vhoU5kDjx9Jh",
  "key9": "3h9Wg9yPgW7bhn2z7MDn8JU9JqonpXStyuRAtYf5j8MLKWVe7XGcNNY7GqpdfrJdcJRd6TEb7RLpA2dmrkcHSJGM",
  "key10": "ohEDQZ1NnrnSkWbfx7Ji6oNdaTh9FGCanodGUjRuNfCpx8d8V3CFBpKGRxPr2eaXfJT9muba51wA3MpjzzZXzCQ",
  "key11": "3B3UECSmxgWzMFooUbm5KukJTNT4aGJZMAnZprFDdp4FXCffwrTd3hHWh55jNfdsZPwxBBLcTBVGX8Vm39Qq2MX4",
  "key12": "2eperCa3ftjsqw5yn2vbo6k22zzxJiV2ZtMZHX7Fkuz2rVtF9SxmpKEnGHcpVLJdDthoZ4qmGZgGEjyhmqQky8ar",
  "key13": "4ZGg2KGZSNqnkYmoPUy4QEDviWMf4zFNKTeV4FjUHgEw3mnyB5GG47w72eUnGy67gbkJPHGpYfGBnefHzJqHaLef",
  "key14": "3gnEFjb18VpdhXrqfJooMw6rbueKRtNwJaftoYC1GoFXCsvLwxcG8eM1GAvyfrTEePgZhcmMDWREyAAW796tHHMw",
  "key15": "vLTQ9ZhLxFo2VwAmtsSUjHVc4ixxSniUTag4C9pCP969e33aqPn7ewA4zx4pwLLmvXVLRCwrqeZ82zUMjLYWsA6",
  "key16": "514vrbGAKSbXTzAZt2K8ZbRTCtCKvqwaVG956WwzCUbn2jTt58MPmspS24tNMxT9sVqorLpDhK7eJZxG8YmQQy9f",
  "key17": "3JBWxNLCpimNvsDnwAUxqfXDa2fgQjBrfME5KfAr97sBUS4vzYVhUTMEauvLiFaGc3xDkfRUQKNngjgC7aR2TJZH",
  "key18": "2iDbsdYe1e1Zkk21MSKnBLsC6yDNsqY4gDWheHHMhmaKgo3kiJGK8zb29odeKHF8jy1Fd4L5qqjA4MBsEBsLYLiy",
  "key19": "X5tFXVahE35E2ACQfvVcbxxxC747tj8MYYZ2Wxv18swBzk2FRjQD6BtCRuAbh7vtSwYozWaBUafXJGHCcr9XzuL",
  "key20": "5JB9KmmhWYpXwwCYunjScV5giY9Nua2npTAVing5KUTSfwsNFUPJY5dYMXnLhjkUSR6UtGgGouodjcG3Z5MwcUZo",
  "key21": "4qezMp17jqjqHdxQbQ3N4n2g1dD4CbEiXnsYcAT6GjtzbVCA1aPVZnGGh5o31bV9Yf4ZmZoMiJaHEvEHNNUbs7aJ",
  "key22": "5N64Gv52fBPQwugxGRsEwFn2MrTvYcMCvg6yKQgqSTi1MQZR44sge9AeJCKBYkD9EGNKMqUzQ7QKTmituk7sdqtb",
  "key23": "4zPzzGPJ7Hi7anVF3LBBkf8K21FAErvtbPYv7yo9nWzHuJvkezGDFBo47uRNPtndHf74ZSnPDFDn4EyuG73KPmUy",
  "key24": "45hqXj633AbPtyMMH5k2TynWUoTytRCqjAQg4QRBS4Y2NoCXF7yMS1XWdpcWXHFUrT7TpEE8CVxzcC1ZbsZoC68m",
  "key25": "3e7KtHgUyBFbSYQAK9RPnySvwJjXvce2dmPDbASrqudDNJVdVACaQSHcbQer1kKz1a4mawUsERZNgNyDZP73ELXg",
  "key26": "5g6Vge6UccmyKu6t2freJ8WT4jCqjZstQHP68uDHmvaFytJ6mcP7eUKAbWxma1iVj6NiyxzowTwbNWu5g1s4WPzy",
  "key27": "SgyCNp9CcNBvYiGpqTRnmN6P7ycKBvDdHkpJzsVXRCUPX9poFPW7D94LSy62qNaKKjfaWNs2BRGF4pxCmExpQTe",
  "key28": "67TFniacjJpNoNCZn1Lfmt1hBp8fJHPd9qPK3oQp8cDsawL2xuND5gqwN3nFAEjpFrJv6M2CqyEn6G3oQKKWFvJm",
  "key29": "eDoDNzqCHyb1QjTWdSvwEuNYPL7vB71ac9nMLNpDcer8buux94g55AdFjsf35FFSGvknkNUc5rNpcokav8e4gzy",
  "key30": "HJPK3TDZHqxMutvPP3uN54YNDpx2sJu7FizAjMTUwYKsveCvqGoR7mtcZwftkrm31anaeko3VV5Y8Jq3bc8BWuQ",
  "key31": "43PMXuvPcoELzhD2k5kap3ATM8ooS4zfPGB34F5M9p9kt4idfc8rZe6fWoSaMWekGMLbi7T8FCWWguSHcN51Yfc7",
  "key32": "4TxqpXKdEGASDzeWGiet6BFWAWhA4XLFoPt993GZUe4FPXzZwoaYHTWphr3ZLqNknbz1NdZvSCnrH8q66VEExsgT",
  "key33": "57YLqK7tABMkQELAAcRL8Eo716rhpDPUjGkuansc35rSw1tHrjBDEX7yavVB3G5ykUyQKRk79R3pDazHAT13A1Sh",
  "key34": "3N1NYrf2eXpWH5BtTpLUL9he4UXARGP7wzeQuzxcmrjLedLd7Vq3MtEkVhDoLhKH7UXGBNqU48gMHxy1ANR1cQ2x",
  "key35": "43Axq1FBKnLEwyiHy9mirGRybEeUkHLifkqAXfgMPnRvdwn2KudemS88QN7s4CfLjF1PahFivJnQV2eBpVn9nze8",
  "key36": "2Lu4QizkqBD41i8zwS8qn8w5K5vhxDAh72M5eUP5G3dTrcUAsnVEg8Aqvqs9tTd1344GgMgHpYQCwejSt8e6rKYo",
  "key37": "3MTgxMkU1ssncgCosf71wdKYP3zBNnSgsVaTGpemirPzEdfncUp6w7B9npHhLGHR4bnoKrCMLwr3noidGMNVeqzd",
  "key38": "3kMAy6ni21HEQhRpJf2KcKv2d1A2Rpp4hCpXbSGW2pczXxwZdAMSai7iu3KBFGa9F1CS2QmopVQ4FSSfVMwMrXFn",
  "key39": "5mt9jSaSVXTBc5n6AKRFfYTHvJdXKgaN64Gvq9pZoPQYEoK3EQe9HCSReBona7ggKFABdspuwMqLk3U9oJUQLXNR",
  "key40": "3Pq9KaW6F1EmZtM1J8DMAbwhePFfK4WKyD7S3AHuqTB7Mfb5dMk7bnoPgVEcw4eU4SPxQ6YK9xroKPVJhmDbZg28",
  "key41": "5Gxqg8T2BxuTStus75Nt1fc9QEMhSqzPxPRRNxUqtLfjBSeR3fqHHBcqFcSrBeZydCtXdbZozGbwgEQKLob8w5n7",
  "key42": "5o3QUcXhUbfow5h3zVrYUVNvyMAzK7jrMBbhiFG57gVD9PJebyybFcQDfhEfdr7qKbg6k88kjqReC1RCCSi7BBMg",
  "key43": "25zn58HiHWHL7Pv3kJmpENLtPeFM7sbdTxKAbYwzvvpBVt4ozBvzP3R9MvaRgsR3eC9pHSYmo3mfvgc6JiTS622K",
  "key44": "23Q9dGuDWXdp5f68yLttpcxfqHDtY9NCCkXonnzoRJ2K3AoT3mD6CEtodXmb4s6G2Px1gb1QVNXJ4jKTRXAWnVHf",
  "key45": "bUfnmopaEQUVhU2HfUR6YmHtYHPZfj3qa64tLid4oqudGRsUVpaxPQ9VVQ3LumqmTfu9e4xP9FKBHyUZ3ACUJvT",
  "key46": "5GVtCNjAWHmtw4t2dMXB73kafC7haQrF77NSm5ndhdNQD5nQxquHnB2Wy44S71Kfs49BWAHPzxz3TfJFKnb9wV8t",
  "key47": "64MCBhBU7g8kjtCQJkSYhxVR5ejyougyrVtMPMVaFD4NNCZte9GYtFMQtMrXzx7JUxyd7ejXQ8qTd6vcx3aD1uDi",
  "key48": "53KkZ2DiWGQeu6NLhWnMzMMf7TTdXeAaWyXN3o7QGAA3FekpHAcXGCRHzN6WE4WtTXWRcFZRc2BVxwJuJ8wYKJgV",
  "key49": "orQS7p4J5fcDjUXj6eL8pcyAxcuqsc9VVRRpqN8jncXKbV8cQE3odVuBbNRvDRxNydLVtxmtcsosM1CnZRdbw3H"
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
