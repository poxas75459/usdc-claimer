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
    "34FBAtYxkm2H7YM8WRhRAXCtJ9G8RDm8hduRNh8dnXSGPSDzkeTyCtwuV6GCC8YG9xdYBDHvJc6uqUiVm5wu5kg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VYntXzD56pnrZfLM1MM3ugMDaWEQwE8sBmKwzj53y8AbX5485cHvhNvRRKQmrAmU4bhkmv8Lqy5ELqK4KurnZsF",
  "key1": "5aoRMoyEh1V1VFSJWY2U2VyrtSCgyvtGC7MwScgt7SsQMARJMRKFizDEuuygaEPtK6ZtN5uvLyRUAhQDhiJ7rT4Y",
  "key2": "Gepovdfuc3tdaN5iPFf6sUoXVqB6uRe6DU4Hooer2AwVNEc5senchsUFu4dXCDAU4jqWqfYAkXNTxsswHAD4hJP",
  "key3": "3qaCA33rtFCaVU4hedBr9EyzpbMwPoswK4nhrDYrbW5RxFddBi66TXkmGPckmmhFQUjdgMcLMuA5FzmkfjG9fM59",
  "key4": "fgH21Jy9G5PEi4PqJ8TTEX814gNZ6nbyBnSHyPbZfEvoeaadJdqK9t96hWG3zzPfyGnEwJF9TC855tdZH1PMArz",
  "key5": "5gTJx4G44aiUSuimCk4AhrJEfQ3BcSK7pzvE7eebRH6Wh3ffgTSCBiKNCeaES8NTEGbT5NjuyYiia2FxtY3XNimk",
  "key6": "2ukUpUg8SJ5BjAgy1jP5TcAoJHaynSj4trQ8cdxbYPNPRgSJbJvp7z9CCs5UaY1zEMmuNxi6sYGKymYshD4WDE2a",
  "key7": "21ZrY2zarAn6nNan73VjWz3EXdq4omvkKyScBYSsQidwcS2fSj5p6omH7djtUtqPdMWzohoBNWdGgHCWxZ8xKWdB",
  "key8": "2LERqU2mrbj9zz8yypshprDMWSwVQrCaiqJujHxf1nquwDRn1QvJkm9RfVgw84CE5a1AZSpcumMmxMDizPWVpdQ1",
  "key9": "3nDSLWyv3vaZHu7krLMfV5tV6KEtYcf5syxV7tAP8XuiizNeNuSxqvcsYosUigLEmjjDfi6CVw2WzvHrh9MkB6QD",
  "key10": "5WNH2bo6KPqGShuJRXRcWJoNYVqWn9Z2FzCRnsfQDEHuD3RE2hsy7tNk6hwEzPNQapt6e81QmWNFS5wLixrWddNv",
  "key11": "5mmJNW4yzRbChL9e6CAamtdUqAkcTyTUhpXD3t7TsWtrvPi7YMPZtGNERKfEG47vsejbtmLqoYMfjiNVZFFHmbbh",
  "key12": "5L7Ds2woabmCke3hbNYA6aTGgEVL1BoXSgNN6UadH4ZcnNEkMeDwst7gS6kPeF21jwR9Lha7jzT3GEhkdUqeFYkL",
  "key13": "42A5WKjohE626yvRDS5LB7T3RgR9VCUfWAo3xRnaZR7CKvLnG2sbb21kvMd8mZbMUb61ZhMPGCidregZ94jXiAnr",
  "key14": "4x2co3hxVCSN8jA2AQb49qaFDxWtvwjPeYFkg3zFMqRuvVa6npHc9SMjTFf9eDgkZMoU6LMSbqUYEzwd86tXQUhe",
  "key15": "58zZ8tEHS7TiUqDtkb87saVBor4GGooYNZ4zUevx6G36SHU3x1dpCahB5XDP4SKu2DyhBTH6rAzW9XC8yWCiVAfz",
  "key16": "3fJP2EGHmYxYsLwTxWUTYmmCEA5sp3fY3KPqMYzanrvorF3rFKxQwQ6ftHFKP4kmvCsC7qN6bshZTZcLjECf83Yd",
  "key17": "3hhpjMvL5rjLdrzdJsbAPVZEKUFJsePw6cHomv8k7SrSBY9jnYr2e6hCUFGo76ftmTWPYCirSmxNcNpQ7goX4grB",
  "key18": "59x1weFLVqw3DXVfPZufUkYrP1hofcLdLnGq9oM8nC6PRi3iiTx2yVSLUiHV2HvuVQSfKDBMqUpj2hvuAUbtU2H5",
  "key19": "5czqoLEB3oQotfZHuu9QaCau82Sg3wb8Xqoaea5KkHToT2Xmm7EobJejSQ9hyJC8rsEYzhFAcBNrvHwQ5Eu8JDY6",
  "key20": "2CFdf9roy2Ywyi4Mw1p8DGcHFkgC4refMGH8Pg2W1JoWiHo9uJwBQo1qTnRU3bsWsXAEBWJ6jhfto7VPmcpESqfv",
  "key21": "49BPhhZGouyJpgpeb1vT4yY4nxJzGQKCWd1xXQXyAkq6dAYReUSwKynUzTJiKiVMCwycDRUCARvtjLgyVvDYzJTE",
  "key22": "2Ja5TsRf29cgPnZgLFy7TMaqgz1Jygukb7AiKTfQyBjcrRm539m841i6j83q2GjfAjUMut596mNwUKLqTqzCUFjj",
  "key23": "5zVQmh5KR5Gz3vmuyt6nTU66mchnjVHjCp3P37Jtnd2SQZPSgyaenUit74WcySu7DgyECC7LvhWqzHArWXaRfBc8",
  "key24": "42AC4CzZnzmiFQX2LxBbM1T4VhSDYxwQWN8Crs7hopV17Fjppr3ixXFH6UDJSLSZrwiBrfWk7Y4cBNkTETMkXWoA",
  "key25": "5ZyjMoHi2THGcvscHk5Cy2WzwG3pR9jSNqRyDTAW9K7mhRoXtbWpWMjvv4LXzhPbcjokWuP7SHWuTpM9r9H8NV6f",
  "key26": "28x9EYKWdnRQTukxaVRr1hFMFGKdqKnUiNMcG5HvhbYCHsijE6F4nUa69Fvsy7vU211J5fC8P3EKtGfK85LreZ8A",
  "key27": "4z1dMeuoJr4KGd9gETporEF9p3sZFfFjxHfA1GMnaeysgbbkwigfR4Rfxw3NmVLuj2vgFyqnk2oqmXcBGxdGvSZz",
  "key28": "2DdZPJC38M2D4PMuG8X24odXqApBiTB8DfDuVCDDvkzoXNg3HE3usEVAh5KrS8H6Z2kF73MGj3SsvKjyCoAqgkrr",
  "key29": "kmoks9Tw98dK9FXzvZ4YSADLcBQ7i9F4BFNGVZB6cqgWHHxmQaoiWaL11gG1kE8wYF5KtFPXSKqNSixukJr9Uiy",
  "key30": "5S41sYcLUruBgLyW3MAWr7na5viBRbMMV49B8H3DjL8ZxLqpDahHKTp29WKpHjATp2a3V5VjyABnKPdxGgHNbG2n",
  "key31": "3kqEmfz21mzGcmpZnvSY1qEwZvhEWmVGDSBChWkyprxGkV2vkde3DMpo6KgE2KLWKuXFa7qG7eU61gzjZB9toScS",
  "key32": "63ig8kWhNDSucux5AhhWb2FokdQPwHvEYrPqGswznN42wBNJ4EyjQrHc5KJ2XA1sHULJR2CiRYxpUKLmA8BRPFPh",
  "key33": "4dcyB5ZuhbHM4sGZt5oCWt8Wb8yuBhyg7EdC1m7Fvm15mUi6swG6kniifYvL5tFk2Y2YmLCQg76JbExVDSTsw5DA",
  "key34": "4Gd7eqk5QxfmE18Zorq1eQTZH2hW3xrKmRw3dxZi6aAssAxrx5KRD5UPpdPwjXnAe66zFfReNTsuweqvQATcNqwZ",
  "key35": "gLUrZBhrArG7SMh2Nkz5NG4mk2dncy6CKJXPUCq67Dn1uheRotnMNFd8yBMMginfAaEb5PyzmTAGk19mngjQWhq",
  "key36": "2K41taPdqQ1pn9btcqLB5c3MeuBDf5htsB9FDwUt9VYRKHucAkgArFLskSmPpCSgU6qzSpxRChQTjSPCNVDBkHJy",
  "key37": "35q8QJki1gBqDxoRF3QKYvA1spFw7FmPQL9iTp1S9SW2WQnkKYAq4t1HMa32gc2Qg9Ru49fuLCV8mwSL94BzeSSb",
  "key38": "5GfLtHPPaUZHeRBvWxqmKZAxsEKAPq2gwaYagQ2Z4JTzzb8d7aEFM2vXC2huPAfeLv5jRR2aEXLYz93EBb21jKsY",
  "key39": "17SKw1jP6bqEJwtf8xMYkTXSDPXy7GtH2WfhQtPRWEqyJ4zTwCj576gx5tftUxJ5nBcJZx9JgQUFfiJcJJ2Kdcs",
  "key40": "KWQoSQcaB7tGe82LueB7FueCwjzkpAALNZ1Cj3eeYEq8LDVWdQWBiAMDxogodYb86KtK7mgxzDncA22HTzUCjXE",
  "key41": "3QQPsU9yzPXHffGcUZTLduAoxJkQVha9skY474vnFj1FnrRNiZncCwPc2kfrKih8FTrUr7guV46ZSQUdtqGATy8E",
  "key42": "54UgtpwGcn7MyMe9cTR6RG3rXvhoFLt1ybyD6amer6qiuvQESvmEyQAAsXAwrvQ8NWzYeDDNhV8zNskifVCFkVCC",
  "key43": "5dQbxcdJHkRYLxVMFMidNkqnkWgfxeLLZUS7nHwNWkFSYzbXgq9U6sH5z8ESpMi11maYMdPCf21wHjJ37yTDV7ZC",
  "key44": "4Pi3ixs4sq5hETfVeMLKaFGfzYhS3tie8q1LBe2qro5D2vsv14YjitJk5RXjDRojyufQiJjathdwnaamMR1GLxnj",
  "key45": "3UGYJLFLQfG2TetRBdP3kkzokfbf9AuZhnnW5EcohkwpQnFQnqNyo3ntaFZZX9ATAM1wSCbnt28C5Mu1kE1RiEtv"
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
