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
    "5jUnZJQUhDkPfSWqURai1DXtGamEXUvc3afW9V49Bajz2m9VDtxab3ejh5RcDbqdY2aV1FzH6Ns1Ud6jQTN4mggk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37FQGfGBeKfZns8xyDgtLh5DBjQSfDjrqXrnW75NnLk4gejgk2acADmUNfoxtjgpXvbzxKcytVVE5qxd5uHe2Tvj",
  "key1": "4GPBxtRTsYGVW73HUBwNi1gNFf6JXnoHRXGCcGUBN9xSzRpWmLPWXstPyjCbfEfWjUQCLfQa1dRMuHNpwb5Z9gnC",
  "key2": "5KbSyyuCbZBb1UdbeS5YmjQxddCj37pKdRGgC25rYUd5kD8Adxz87q7QRQDLhY4ceaPSRemj5ynsvaTdCLkVSo1U",
  "key3": "2SAp8DLUEtKratncV3jgadReMMUyLbdV28j86JrcSpuLmQD58TR3jXTcwbzpxE3zaCKxYcpk2s1rdgmEtM8CYdHj",
  "key4": "5t5BZpJXj2VLJH9tdHtCZg3TP6xiY9RstABNeMWzqpyye5YzB6wF6QzEhee8rYaQYNzf3SEFjELn8SoLMjNZ6EFD",
  "key5": "as8wjDNoQG6foTuiXGXwYBq2K8T3wWA2GVaqefMbtzFFh7zvoymUxGE1Awxi5c54XXvZDcfKXYzfhYRcteesa5n",
  "key6": "5P8bhdqdgYHn6QHfkwBYdcfSRFA2kk6gD7w8SkYY5WXjakyBZtgKtkDANaNQQEZTHFbch74TuBsZd1pStQGzCAwx",
  "key7": "5G1S43ooDCYrSzJvMzhDtwtwJPYTxwAezAqayvfqZ4GzGKwNrv3tcByivJKPZY7ns8MtAAysyMbh3en5x6yg8EAf",
  "key8": "2FzTx3fRc7FVbBLkYjFNts7GvwAZxZbGQwqQTL3tHvV4FSjP91NCMvwWA98bEDjyEvk8SuphcVn6beUDaNuLRTxU",
  "key9": "67iHqJi6hsoVP27aw8ooo9x1MBteVEBTnacViDd8yc2rF9EH5qL9uwXiVdtmTCUrq14iSSm6E5gEqqiJLQXSptDo",
  "key10": "2EJgJnSqwm6Du68XBVZYYuwnr8Fw3tbVt4qXRS1v1iuSbhj2m13UgmTFa8efDFcyLNTa4UtFLdMxbqUQt7Nrx9wV",
  "key11": "2moV4f6t8WLz7UyPkrkPNUMtpYA5rjFMkVX33xKYmBEELWZysP6fURbWZoQhFgfbhLGVfesyNJzbiofE2UdWyvkr",
  "key12": "4Qo4VtLiEkQHLPgxpx7hydd2zWRhFLtA6waosr8zAh77xPa6TY8JkPSKC4nbkbA88or7zgn3B4A2BWcgHXouUBAc",
  "key13": "3gQrbgxrAPCkBJVgrjH1AhFCQouAxYz89WdXEeosDyzWMNEEcVYM9Pfah5gk1KSvEjk5BjYtsp6grCTdSyMoiwGH",
  "key14": "5XpSaHenEUuruafkuCroWb6iyQ5aaQtL3BjxLPkyM319C5viJpsrNp3d3PjFsWPAprzPGhkz4kMC3VrTxF3gnjfE",
  "key15": "tYrgsKFax69cy5991M9KoKWuzNWkNfdwdBSqMD4H4SVefB34GmBxJXjSerrkq1Wk4AwE7izweURMtBjCXaf1gbA",
  "key16": "m43qFnHv8SBvUde3MXRQ7yvcm1fzcXv8BpBYCbFG5rYif7sRYHFDXaGN867FKCNyHKF47YbWgRa9H2z1B6tnATe",
  "key17": "5WdQ6DVG3F3f2JELiNipSKbMTfXUWUiBHfUz4BKL2TojVjDKFuKRrfQLfpURDr1Ghhr8KJcQWdDTjv1wDpo3Mrky",
  "key18": "5YYJ4bj1gPYaTQVB5xHdWNGKDs4AYw1z5AUq1CsmQtVL1om1hDY1vXHCcFM21QtuBhWFARsC2Vae8kCvVTtcaF3i",
  "key19": "ZA3Udc8hzgNv9CptijPzZbERP2H2DKW8tGbUVtMjsLE8LdDzEQXUnvz3gfiEFEcWumdwrHhh2o16GrJyQfcAaB2",
  "key20": "578z829p75enYs6C8UoEYvaaYSKSrka2pRSWLX864gmTggCBhkVEL9VTP3uhZETuMEgmdg9LooKyZumotxUmJciK",
  "key21": "47Cuk5yyYe2CrnWrHaJK4c6Nq1j4x3ViGS25Zyqc4kdayvhGEBvNzGE5kuMP7MwT47czQNAxvzdJAHaxS2UC2xFb",
  "key22": "4nrsmk9LTXsPiUxvW2hXJY2mFheUYK6dx9LWPqkyTzCm84CHcb4zL5wyFFsPk4J3qDYtveu4NCX7jDGzwaVvo7uS",
  "key23": "5jkpueEewoMSANGdTjU3fzffZs7TTuL3qbHomzyF5K4ByCAEUpsGSQBgha8ETHMrq8SupKfyG1f7nTeViZnd18ex",
  "key24": "4P9tzar9iVgPZQtDgkzaraHXuM38uRFjb1grecG1nqktSUPHMcQDXTQEDzoJ1ZuLtMvfLQqCFDncbnqS3dDJp54Y",
  "key25": "tS1BVsVFvu2SrG736fHo9JFT9EgQqmmVDEbwQSUvAbchBCx36PoqVqf12ZQRsCRxBNddebw8khF34dgHYbpe9hw",
  "key26": "4xSd8fHvPKmVUMqyUKcKHj72jLfLzrmr7r587b44PBEpofsT4cKo6amHffYwTQx4mtFtADm41wXhZBeDvkLouwqg",
  "key27": "3PtSh5AWu6GtjEdkxsGTaoxfzLz6qiX7HF6xFaRrjvx9tMVzLNYzhSD6hjduzGoPNtcnD9bHZbmtPHM8WBs7fQRC",
  "key28": "4jUpaURkzUv1SZmDfZjjepHNtQZrd44i6uByoAp4f5CJGfqMBopBUUjm9VyMsFndhc3GzVBVv6Y6RuV3TTYSaEY7",
  "key29": "2YyYVW9x5aRsp1eRmu4TfuP7TcCNCsA8GFCk9x1feCYDtfHRYRZV9vhrw1aBRZaowZCJPqLnGW247ZqvxchQ8gZF",
  "key30": "5KWianqk928eZq8yNdskAyuwZXAnbFQJAXcXp9cEzYBHKxYJuzp2x4xp3eWLUG9NzE8aJovSnxPE1ES1EgSa8Ego",
  "key31": "3qd2R4f5PJW3e9fRDyoHYJLZRAZGXMNVSAfWaU1sdFiBpycxD8o53hN3utSUppR6wc5eMqVeut223PEUbr131pzn",
  "key32": "oJXKFquR3jdH52g92anhtLBqLmP7uYofyd1AeCw13ZErS8Yn841fps6TftTCaJmxVkKHBsaCWeVWwsKC2SMFmRR",
  "key33": "7mZZ6rduk5MHQeQ8ZWx5zPxdkkcaH21wGo9wHengnPLVq2x24subHqg9uyyqWwhxzYPiSvdRU2ZVMwGq26FNh1h",
  "key34": "2q1AM8jaMT7yUxUbjZxPtbSFkpX5VXUE2y5QENt5PHTAx8RkGj8Tw6EXsZjNEjU9U43mHaKyYiw75WwWi8zrPwqn",
  "key35": "43qkQzrmQkAZobsrwv7AuJd1NHvMpuR8kk49SQRw6RTkd2ox1xGNY16isMQ6C6Fma5rxcNXth27HCMksKwce1JjL",
  "key36": "kEWGHcXGjLY2ovngN9VaKaYfE7vaAPwmhGrrCdUdMoHMQi4XJi8FDRXs6Eaozu2HhQmhRHfkdh448ZH4qPMrh8B",
  "key37": "3qEtKTQUDM5zFggrhzvNzmzQJ8RDpWy4ErPrz9WnehacKqzwbkSLPPJQk4NBLDa38QHFk17g1JJCQA77sZHLeeE9",
  "key38": "2LokhivK7tmyLKPMpv4xCHu5qPyeSoeSvguVw5TiNxYdynJ4oecoVHP5Kf6TmseoqkqCYeK5Zo6STdGeznMENMmn",
  "key39": "298M2Xd7ew2sgNYUofGEeFVWfB62EjSe81SV3XmVMfLN6Bx6eW3JF5QG2gNFcmxAcUgxn68vqRhPwCkun4Vg8nGV",
  "key40": "3A8fcKDYaeerQ13N28sicBWqXUYNgtL9mddPCna8Hz3MX9Av9b4aLf4ZTKP8ucmKPw3NRVYZhc8cKEa3JUAFxJvy",
  "key41": "mU1ge2xSvM1ehsx1yC1e8VcEWuqD43Ep8pPqQNDaJu6DSkdMGX5J3zciM9yWywjtxbN4UpvMMXHHepUK5ETvtuD",
  "key42": "5TJEHmbxsAEXqgeE5LBevDY4724XWgMrwZgdncRwch6s5YdsQ9e1DikBTmgp7mYStrj1K4XoMfePBSpsX1NQs4M2",
  "key43": "2wNyrWssPSC4QztWuXN3PJjS7CjxrDs7eUUVRZ9PfNyKX6BRkRkUA4KNqDmXrjEytEHpm9qVFiwH5oTLrs7uyoRK",
  "key44": "bGapNDy6wQ9BYfPb5q4vvzJYJwDSPZhhd4TJEKQssnxd9tx5qgM7nq3zj4p63WJrUKDpsrtzF3PwSazvwhFensL"
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
