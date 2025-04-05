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
    "5jbUaCuoc2xhsv6EiNpDzAJmp7Lijq1iF4RTQyu674CC7DdLD2NgxPo4ekbyBG2chC6GNrqg1tb1EmA3PTYbjDGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sQNpyYFdDVwpYHw7myzeZH9RtG6oexY7iEJBqenmmcuoEAtrnLfGW46Ax31EHCzwKJKSTAVyd2m38VPDDm7rBGS",
  "key1": "2Ry5CGmDBTQdqKMvtiT4JfGWJ8nYW9onUEBtNw1QjAajekie3AU6P3zTv2yUQFPrnPi3zbBS6kGEKEKq5eNPhP9G",
  "key2": "26LXLyC7zLQNaEATUyoHFdoLNw94KaqwYc941uzM4miB18HY4AwzfwgSpZrSypdnuqsYRi2xQFLZooyWQ5FG6p3V",
  "key3": "ko5EBT9Jywfr3BbBZnfeysyg3R2p6pBhnfoA9TXkATUnqezGkPkHyDMQqoEQtv6S6NVUbY6QsMb69Tf3ffSxXJc",
  "key4": "6UhExoSiUi5yeLsPUux1aAuNuyXrcBEU8BRjz8vhGweYtBbzkHtcJRXpeCfBFkre5AcSdVgBubSAZ3dVhP1tobb",
  "key5": "3LdPxQRfqX42XSv7ms7iS6vkNZFsBMhMzUriJTUWLUazUR2hkPtSeLeSqagP5a2E7ziUbNE3TDnXi7uPM3c3fe4f",
  "key6": "3TaYxpt91sbqK29nWND789vPwYy2XmTd2tgakpTrVtrQ69Wtfn7ZiCkHDfU5g8wpbNq6Yu23KLnZzC2eHohbhF93",
  "key7": "223SBkGiJ2xummMnDsQkakD6DATeKiG8nzGEPktJEj8gZEejjLxNFWrBCu3dyRCFeuDEQ6bxKTsvxByWxbPuJbZw",
  "key8": "2zvRJ9eb4QM2nNSq6m27YjUUij4UfdhdBEVSkHCco5AAZ59veyLNDRpmunMiPc4P5t5YjB5WoSZrxaGnuZuYnyeE",
  "key9": "AKeyimG7CB25DXsHfcXgPqr6uhxrQjPdm1PbVE4ubuo8pdyqV5UHRMw6n7uNxyPx12YAhfb34C9wCQ4SvuCEsSC",
  "key10": "4JaS2Br6yqYMYKHqC64LmdvmZBRkwdoRe5qPKepsUJCayP6MgEeDVRDouj12YtCjDj4anzZThPnmKPRw6Jp3mnWe",
  "key11": "3PrbF3n1hPoDydMJew3t5Fe7cA2tvYRvE9Pi3nSm4vZ9k37z6Zkh9w7azeMgqKjxJdMdUTfD36xWQjgGrwjppxKV",
  "key12": "unDVaWXtAVCUNq7CEUMibuDB8LeKhCMUJXk8QCXRiM3UczXpXXsB5ng2ePHKcxYS7qKNyAsCbxCQZ5ZYy5MzfsP",
  "key13": "5VCqyKRpLyw3CZSLPGheBSXjiJHUX7P4fTPS92wonRCbKdJitrAxmhqiUrB8FHUAEjFZEcauFDEsCaKohN8dxwqx",
  "key14": "5Zmnp342PwPr82R6TLtKUUTZc59oxbJ7cszKByqAxR2Bzh3rMfKBwjrdGUtY6wqCFxWi74pZNoB3mNekyvehAH7F",
  "key15": "2NpFFub3QBjrRJc8MXPm49GzJhmH1fLtGnt9MndHhbu1DGrBNEwkbPgZexFQXtfjLyzRKqrgFqxp1ifrMcGmQXnJ",
  "key16": "4ASvgUx2brZtphr5KFkNLKimuzUw3G2KszTSEigy9cS2zP6PXdihU6jBxjx8wDMSetSX8PSGHRufCeTpQWUb5Kpi",
  "key17": "5fHVLTsyVm9wx1peXWTLcic92vFEczzJVd46dgECr7CUEmVy6objBT7GMXSVqEskrinktWWKtUiqDfGFpj4m3S7S",
  "key18": "4W8Z4uaTCB9f4iQ1UrqFKwcXwGYrfxbJPWXM95RkqvUZwL5VDVxcJkCMmsiYcYh5uDPLvdxNmKqQdve1GnH7CzKr",
  "key19": "23M96UNhThEcWKSi4jhr4n22SJ6GKqF1vMMh5HW6G3RK5ha1D39nSZLEx6BdbJr6eWWZMMoe1D9mip7Sy3BEzGAj",
  "key20": "4XGKNtkXra146NZsgGFMXWV4NQ36mWfW7SSDyMwjEcLA4wXPRmRCyfWpGuPdAMfBtzucCPYrgqvRiUrKi7PYpCUT",
  "key21": "4ff8gV9nbfKi6FcWvj8nicQ4acQsZefjG4kBEYPdgygT7XW6njQN62pVzMPToEF1XcFMP8HPtuRDzNgM8u9q67RV",
  "key22": "3Ls8xX8fy65GmYggh7wxWCmW7FNeWWkR8W8UyRB8T6CKANAXnQY6EDi6iyiogurdCrHM9SDvFh8LsgFpBGZvGVJY",
  "key23": "31D6kaFS7QHquTbGqKHbnwX5GGj2KuRjZFUby1pBba4fsG88Mk6TjhUeZPGUWC1RDpVhqhoutDMqfmnj9zQDYv1R",
  "key24": "2yhEHrHrNAcmdmyekqQZLEGqttt7PnU2JeZ5wdJzLVnARXmF1HiUoBLJBcBRoZc9r4uTLyfJjYxDxtZArEpsuP5u",
  "key25": "5zrYcodqPfRXiwPFLYVq4w1wry43EwJZLpE8V4ggtY8zXAgYstetwURWFSyYuBpw2pVrDRwpei4kAmWzDAJQzCHx",
  "key26": "5nRsKMERk4WwJ5itdPiP3ccnTBwtZpzijxPB4NF8hFQraEoxCN7wTFVYdowVsQvwgdFTXCesz5gZ6xSq98C6dVEr",
  "key27": "64sHXHGmprJg9bEYCZDQGiMGvR33CANR3XgFajeM94xTPhgv91NrpCqhiqHvHcjfYGVW1R1nJJPurugattbA9EqB",
  "key28": "4x78bfZaxxG4t9fuWHEvLFZw6VGowxAuke22wo3UhB2uTL9Qyn2sawjERAPqjar1ZTjpaGt8tbXe4g3WoxMT9FEQ",
  "key29": "3vCqgwx7R5D4wCtMkwU8C8HWEVcYNfoXtdNNq16CCJdoDwQhT4abqu8JYJkEStjcWC7x9qNtgfpERCpqP5kFmXao",
  "key30": "4KxXP9zNxrEdp5NBrWr1fPV2ug3jx55ZSenBnoDtX1a52SbPExQKZTSiYLKYCtgYvnYLsEBiP4QNLVxX7Li4Y2kF",
  "key31": "4UzReUdWUz2V3uWVrwoxW89nnM3R8uCuLSKeNYjzwLiv3i8H7F11sYY8LduASvJFXPYyFEjQ4RP18Vx1m5QYTHTt",
  "key32": "2zohSuqBWTJNbT2XYjqyCnhgUDxV9dVsT6MKhPCRu4p3CdKjVXXoNTERA98DE4BvM4ouz5zKw5UP6cqfRBVZh2v9",
  "key33": "5v47CYqqR3LWbPKgDXYaJLXL4jQKY1uwJCtBYEg6d9c7nbCTFsiRRxVpkFxaLtyWZwckhbu6qr2NY7GhtwnN3MVS",
  "key34": "53zc2yavKcfjfis1XCZXEsv3nreCpHxFb6m7pQXdxfa3MFUMnXVxYGSmRFsLtC8susqTkZcQRHUpGZPG1yWwcGfh",
  "key35": "5NxE8ambgeD4XebbPRj8ftwX9uDP6S9G7jPyGPkWHWVFc15DxSDeTpUE2tn6NuaBLrXkPbovHc3x3c3gPoFSMoeX",
  "key36": "aVkwvUs9jm7nqAHSUSiVrU5iKJvbRMyPK2NPihGwHrVuThBvbsm5NZQRjjzs5QzD8Js58ExftxzsXCnTM3mZ7Gf",
  "key37": "M65sceHqPaGwaNqcS7V3ES7bEANk7Eh3KQfGfKCZsT9NJtrEnauymC9C1v7rbVhpTNJuiUNbuwZPgrgjiVJg18P",
  "key38": "2NR5NezogBkgQNqX4TApMVwtJKrUHc2SPsbFrSGn2eF1Qmxh4tcMZCrYPgXzZjEvqbRcVAFmBCC3J7UkVgQtqWor",
  "key39": "XX56ndwmhsotWgvyTw16535EfjMtYdW6cnGYnGw8WXru6uqTS7SeVQgjRdxARHYY7wqC36Lfvy8qARavotmwVYF",
  "key40": "3hbgN4AwwXTYjLSasf5vn4a1r8i8crUDzvjWP5s82H9roaeFvCRywCnHjJPsVUNhZFySwtw6SEYiKYyZL1onXH76"
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
