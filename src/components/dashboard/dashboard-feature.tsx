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
    "3RXHqohS7boWgkvjbcU4WAEimxDy5py9sMKuwcgZ6owx8ku8uJ1oPuTKs4GXzLwdCMBRf7tXdcSTvC5KDLEegZWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61N8ipnN64DtWtNuzFBNkdi9DqaysrH1fchenMZNRnE2VAKPfs7FiR8WXdH4cQ6Z2Nxn4up1wp1onCBzpAq1YwN9",
  "key1": "4SUkyriAmtNRUVoPcuGfsSZrY4oiy4jC8qsxCVs4WAvEmvmGSRsAfmmaZF2L682EGrrhGbHX8cxhUD3uwFPuGKL5",
  "key2": "zkPwc9AwSWbQ2c5JKfcqo33kXzmL42gHjdmSj6fdvK1NfBdChpnWsetEonmjS9ZfAW4vU5j4dWi7Vjfhfi3XMBy",
  "key3": "4dKJhrzKcHB2PBYA4Qi5wQSBCe4R99oo1razp1HaUykXqGSDHu5waph5V6GLVMFwEUTjJcT6gWDGG5wPWVCFcgPw",
  "key4": "7i2kr5P7xAJ3Ti1vUJCvTsw7HcyfVyeRt5G39N4qVbk2X8rhVbE68r98p6TPYXRemNZrn24oBM2Y9Lk4745CoVh",
  "key5": "3wBX1Qh9zqT2jjDYW5qM53VicDCL6J84vz9jdRN4n2VKzeAjNGePg1nLq7kFuvta3eCtYmZoT7vXhgfXGBYooKjR",
  "key6": "4pJgUirMA2Td4L5e6CtfkJtL92mgQGizTMcRnAWxEhkE3vHrAZ8Wz9fPn1sCod2tXLshgmLwxgRumjJHUUvqCwRW",
  "key7": "4fvnS9Pth9EaFNXfcF5u4UX6paX6EoWJAt8FSm7QXhUjgZM7zYjoy9t2YkYrxzTeW8VMcGDuLS2pdh92xyaehkXs",
  "key8": "2DvDtdWhMVaxHnuPR8oNpdk9dXGpT7yQCQghfa9iePmNN2beFbphhduASUA2927rXLHaXvYFgR39fS2v8gGrf6Pq",
  "key9": "4z6uC7Bnw438JNY5TqQWtFq9KxX8DAYnBuuXfVp87hPCbTqnBo5seWKgZzjApGsVaA5AnNo3oYMKpo3vhHCzeEtC",
  "key10": "4Zx11vDHmJLiDSLiXfkkYMY5NoTVbcSNQvuYVQhXd8ogYnGdRe9hrUQWbgnmpb3z7vh2TvdH1zfpED8AYykC9m8u",
  "key11": "NmCBdmVt8E2qqBbhiV7F2EcPFFVQTKaxzSXUqjVwmacuhqusPhWqTvc7HWGE9GkdcYBK4thJwpHQfNgDe6MPLhK",
  "key12": "4oNqe99skmQUQR915kKtP9xQdu2SJP3MP7Hg7379tKZGdZidHd48E32FyPDJ5i4r8RpR4XRjUHGofAdL2MAhBgyX",
  "key13": "3JfsMHD1WQH7Z9sxHUSxdvstqhaGLNg7BycKcX18TFPpiNwsxAGyU1hi9aohfWzvT43wCCBCVkJRdsfniRXv72V",
  "key14": "5GKQhqDGuhBTpFxu9pNfjfy9x7Sij6VQ99Gs8GCtqX2anyoucq61F2QQo4c3KVz4rQ3btKDJx6nxqsyQhtUYMzF9",
  "key15": "gYxBNhRaPAkfvgWd8L7WAtURQmaiXnKWLCkVY8UprWUFTPPfw6oobHFXcHrmxvPTv29udxqTMCNW5ncVFYixieN",
  "key16": "5Y36LHcSukcrCkUZ2ScvGkrFWHkuvgJ7cWc35uXH9LfHZ88ohL7gU3rAH8psLbLtaFFa4vZid5tUTw5fgGaLQ6zc",
  "key17": "3kXbud2wdxByhRbHaKMqadefDpf6Bx27SqRfLuAmcq2TiXHSWJzxt2dc5vZSwi58Ncym6c8MerYnigLHdvVfXCsU",
  "key18": "EXuToTXxpmPjZSQqJzeKuZYhXXL9zT6Q1GoXeQdeddM7VYmfCZN1RZo4fgDe62ttWmmmxkDbgudTkUbLTyHpUAZ",
  "key19": "5cUaBubQ7pCRqg45QCSto7DVac1hFDh7RiUqz3p7P8KVR9nuA9t9b586Df1Wr3Aub1R61X8xorgPtBLiQps2sG45",
  "key20": "2dsxW1QPPuZwogcFUr69VJ7PYzhmqjRnqAAcWVw9umAJ7rnSgasgqCyCX49Y16bFRRo9eKPtwRUcvmX5GYfdcAcB",
  "key21": "3H9uGgF5DNcudP9hDnv7zCbaW6zZ476asyLKh3ZzsWhgYK9GrktHo8bintSGtY2e7mgaza21JiPLrVW8c7h3c9JW",
  "key22": "4SqZCqbroqGcrmWTfg3mEKKTbBv8Z5pTZzHpF4PHizGFZRMjE2HQJmuLw3WtBKsZSWxLYtcpk842P71mwVPipBH1",
  "key23": "3vcJM5iaqaczqraPehi2KNaj4aKHGJEs3wE76toq6izoiwuzGqUffaCqUW3FB7CAEwMfQUEZwzAHkysYnMCjEZXd",
  "key24": "ZuBF3hMA8sgXQerQTt2hopnzVg8xe8u8VNAnP7Y6kgk9F4JBdPLUf8umNyEMLrPD7rdmbjEwEx3UKYTdbdufs9K",
  "key25": "5x8uDufTjNYwvvxC4YFP24MAzwNs1NS6Cug8Kcm5sjc1VG4MQvoBmW8tUJvrk1HY9E7BRvosXD21ewztkCxmjQCt",
  "key26": "3ymGLnQDmhPrr4gqKrJDScF6oSLfZbCFgoDy6YJJTyvB6uaAv6gBJiNuFpXjsubfHvPC4x8mJAXrvuEmd9w9rm8b",
  "key27": "5ZFWTaS1VRRvUQg21KZeHUdeQV5j3dS7yBheHRDbJP117VDPLZjhmP9N8mcWX8z8xzEgpP395Z8kFFZEz6w7YZKp",
  "key28": "33rkot9MJYFuyR8oZbgcarBQR7ERHyFpJV2zv8RPxPAr3sS5y6RubdFwsKr3GkdFCMLzvn8u8re4eYnPkauaBYe5",
  "key29": "4nzxrNw1qq8tvzDfgBajDdk3BVUhFuTdbhPqEviQjb69ynayar9NzUZNuTiWEyQSVxnZp9bWWxQFfQjroC7vL2MX",
  "key30": "2GADw7nCNr6g5smKjh1MeX8Y9AdC9nGiV5drpaKXYhdAwf2ysZPGJySJM7KZQ1a1xpqVwpGHYgzyeTWZuJF8hF3T",
  "key31": "2WbCnuSVBJnibefLHFbS1sYRu1zwtizz82ioKvuVSFSknuRUC3H6ZrqvnzpY8hbrH7YRY1nTSyNkuMhmw4kJyE1q",
  "key32": "RLb8vY1nertC77uBedQBxTrzP1uMCTU8SNV7jixLAVJxt6Ut5QbwhSxkG4SLNTz9mG8UwRvfTuHuDZWFEZUfLvQ",
  "key33": "2xzo9Hy85nZYKr1VCgmhJBRhu5iQB8M4UkPiS8EVeLu6VSxeSiXVrtfg2sh9BKkHXJ9LStfqEZUTFxHboBH35gXw",
  "key34": "45V58rQxp5CZmXv3R3SgQjFyKGaePLr6uHp3HMuXxcPemcbtR6JJUcTgV9DiR8xGQzC9JsdNd5MbcY24P9Kf1r1y",
  "key35": "3xCiaGySzgUijZqGyFX1iUhFdvXMxdiHbJzXXqQhshvA5yULQVGdc1pEuSHy3yAnXmsTzbtA8Ta3NSCatukdFYZ8",
  "key36": "52cu6F3Jtnuvi1NCdCf4rXUbQcAf1CwstcDzqR8S5ZVN9NfPDAjbop8i2FyqJFncm2DzscLbmC18HLKe8QP9av1G",
  "key37": "3eN873ZiA9VrBENwkbViyQrGCgUuAXxZza5X2W5JRdxFh6VFQJHaLqA7w2mWcyBXUQi6iwmnmaaqd1GRd8gDkNXy",
  "key38": "3N9JmMtsHzeDP4BJJcvKeMYRWqdNNAJWaRrbmXoUDKSgXhHT8PMjAp2xTsXkoVSB2zEYQQmjUxq6VsJL7UWetMAf"
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
