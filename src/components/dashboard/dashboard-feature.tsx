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
    "5Ytod4ZB2BLBjYP5PWjZMsmeHLc9WiW3brJMCzBpGNDm8CP3dtnSyw2CwkeyWDpfShEAbg224XUXnFjy1MZxjnu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mQnin51vQua7ETpRJcf2feYefmbYhyt6XkSyZuCLwSGkwvqo5srQ3qM5tPmK6iK4uJJjjkFx5NQhTsDG8sj37o1",
  "key1": "2xvvSvyTEHPEDzD9ihCwqi7T1WyEwUDxwEAeeWHetncP7xusF2KrbXa7Fv3YmhiEGyc24EwJq3LgUZdkfimwdX2g",
  "key2": "2eNohAFhSCR1LjAQSwAMpxUUJRiq18tXMJiTG2N6pDmBRzPbedmXUdnZgW3AZUyqAcwEsgdJUcbYM3vr5dNvuymW",
  "key3": "2XarupMTzepYEy2ZTjr9qs41dCavEekoYkrEckfNCMcq81nBYnumexebiMZgv8jqR42sQtZv48R14S7eZvz8Q61R",
  "key4": "55MYCRwpqo7C41FQHbVE41gUMCiMnUrReSRnJij9nFc8PTWTMVsvh7BAiGu5p31secfDeV3RRWM6p5VR8CUCsKhK",
  "key5": "4ZNmMnDR6kNBdYFzSYMkSyM642VbAGBEpN1ZfCR3JRETWRwBj9TdgAZMZetdghLMr3BYvwhUFHe7c5X7Sar4njXC",
  "key6": "47rJuRHyCKSw9XKW37fFykb5k6nfiURe1AJxQzCcUH2BuQvxBVPvndLedSJAYadD9DuqYfCH6bCkrSqjWobsQMiw",
  "key7": "57B7TWxEgPJbYmoHqJ9vxzj7JttkxcVQrbXgHP97rRF2qNxyx7yLrffxRCZ9a7tXeNSLjuRvGXNoYEszvAKk58Fg",
  "key8": "3bTrc6KKFPY4omH6vxjb8cP7AhcfviMhxpoaXDAshcFdLXZWuFq3admpiWXyddBBVjgEV3A4WQhQeagdRadc4CUB",
  "key9": "jeXT7wFjMGyaZGXpsoz2rMQYvizDb3HkwFCmVeGTD6qs7pGuc5GJxJoLMfKF1qecqtvmh3zgemNptoYEgsEpont",
  "key10": "KMUUamjX8MNGfGiEN2dPasauP9YfBd3koQAe5UxwY3NgbzKvBQ9qdYRm6qc8itAwGtSwYz7wkaQXDa8U1co1Pp2",
  "key11": "2GXiXmEJvZTAPr2fttZuGFchGBMtsfxpMPhoMCj4DwmEEfKQfnYfGe4SmqA8Bb79zhqQtuLLqSBQpherKcSBtgnq",
  "key12": "5TTcZHeh4BhNmuEuFGwdD99ZMd1q8EEiKBUKP4bmeetJf5fNHUwSfD8tGfUkZdi8upDJTxmV4RdefWHJHLmGUubL",
  "key13": "qt81TSW9hhdStJYyzQ3XVvPDfqmagy9WL1ueLgqE7Du7ApR8p7KUWCvAQdDrqKsPGGpQr6v7h2pnFwjRL4vP3hS",
  "key14": "MwR5nWmWg8XWEQzzTT5R11XdK98mvRUzYG5eKPea3hchGtEghjYgCj1fBHkZn6HAw9zYHMGa1yV7FbyfJiq2rZz",
  "key15": "4iygMfYfC5SxfHptvGCb4kgSRtPYA4tT8TkwcLPYu1jmSAUcVJgmTXkBuwUjArHzqTMcPo8mKZUijj8juCxGavwD",
  "key16": "3EvH5dczturmGVrF8YAM4GMRLkhtLu5fSY1F3rjGmzRwpA6aFnwF97Wn67uxZzNrVqkt2AQpHHWSKnGST3v5HjZY",
  "key17": "2KUXydpPkLf6YviGSKUEUN59LBTVZuuvUXGndoRA5V5XdcNzztGk4Xgs4qYAkUdmjiTJybie28ZgKsXkUKhnPoek",
  "key18": "5oR55azugimnqnavNqhudegsDBYFKY4jwzpFFibL4NAjfYAR8JXfCiB54cs5Y8ww4ru6LxKTTifjtCNvcjoHgfXF",
  "key19": "36yrvpWU6gv4zWhPk6XBbCi1YdJCvYiWKCmAJ7T4zfk14hmvztuxY77BUuTYHHPE8Pak5wavyne73Z68ZEC17MT5",
  "key20": "4VuqSKZ8PePG5WrHyXNC4PUCudU6T6EeRGnqFWF2yfXcUjUBQqp6Zewku7zWKru9xT6nTxokvHSyUttTAvzM13qu",
  "key21": "5La5abjSEqV4MPY9VeDpRFhEGCJtz3abzgYwnoQhMNKPr6zjdwKWT3pT3JzyDGNuSmUWYUEnkye5Vk8QEmTKK3Xv",
  "key22": "3V5vEszpccxpg5Hpr8Jqk1ymVnwhDefL29VDFo9QTk2hopsrCJfXtfaPDyabXNYYc5BNHmRVrcwvbwieXwuM8mqX",
  "key23": "5J3X8KSRR4aDfmngzq75JJPiUddRREqfERuUWfiGRDcJghpCz7o3C6Ao2WGsETuyj3Bm2JgX282zTebRerpdnnMw",
  "key24": "4NqXUdcHeSfnLGLoViEtDVAhfeHGVmw5w3R8K5v9JcepWobusCzZg1gNe7BwkxQgkRxWGLYiC9mByZKycVqtG5BC",
  "key25": "443JELiE5L7HH6JDuQvazTCxL5U6uPHCNkSC4wC3pYxUar4Lb1zqcs6ER7rfhsz7ojZfYQC31S9U5qH2cJtBMLCA",
  "key26": "4tdP9rPCUbc2f85gUrXLK5Le4QjAqTFZXfUBJGBK8qdfQPoYzypUgjiDmLbAkGYTbD59q396GLdyXcTj5DQp9NnQ",
  "key27": "5NSRpLZoiu2txo4FukyQCv2Sojx48krYhmmWbMSV9RjdchVpScqGPqtkyvaE5bAoRNmp54yvSfnhzguBUkr8eZNY",
  "key28": "msueS4dDykB9jHw3x3FFvkXZiESprhx4fcEM4ndb1iQvgvVXJdcgTpZgFSW5RrbY8RUdqoitRmQJrbEV22NSHvE",
  "key29": "53Qtg5BSrjtztaG9w2hcYvCrh1u9MhQ9ps8ENGq2SdjKyrN1eXFTBRhRutxzgZ48LW4RsXoMyNasZScLGNyfSYAf",
  "key30": "4LNYaFfoTwHGdJuTc77gXZ2ntjGXKK2QM1rMennRDtrULSFsRQJEEkJfZvmrNMRTCn98zM8sr76yddtLXQeDpW9E",
  "key31": "eU7A7ePyUG3n2aSkYX769NDAJs43jm2yAPePcfsA2U2LZLxivhjDXvQKrweNvY26xw7cNXp89FoUcuFVXf8KyyK",
  "key32": "5QCDNES8AaVi9jjEMmg7zqnpZiw19HsKDbvRbcuNq7G3kzwiFJYVmeStT8YWKB9EXXqcXfu9z1jkhWTgo2dHDahC",
  "key33": "2ff2hsKR62gWKYc6qoFAa46oisFBi4E2J5P8nVT7r1XkjmAWgssmskJVgsig3fPmEf5qcdAi5tx2orVgzF4Uccp6",
  "key34": "DxegEfxiaxF4saaDhR9Qe8DS4cTbj3Qtixhmd6PnErrWhxopVeABPvAX65dd4FRDwhfqug4x2PU9W9HQWXeTh5m",
  "key35": "2ijASVPxQYc9zkbZJBfg93WzoV4x9K98Qo384FE7qoUXiQCTDB7dTb5wmvFpb7B1p2S91JkUyfyHPrnbzTz4WC83",
  "key36": "3W25ZCgE4eWMV1AGSjrQRtAP8u5zyuWF5jSmzw1C2iZu3PDQanfNaaP57yPmkp43g6WMZnWrxfVqdXbgTN6VnmHR",
  "key37": "5eHngzoZvhVNEMapbr9zzszfudymFy6GjbFkCSmoFQqGfPNSr78ryCQkjUhhEDpHCATV1emEFRUmsxFc7XraoMgq",
  "key38": "5Bt1Qx6ZwJnz7CKVdL5tFsq2RzszQAw7n4sLBvS3QWDyiftvA18WMJ4XXHAi3AGWbKU1FK6qTr4dm5nvUQiprsGg",
  "key39": "67BX9n2zNXb484ZtWXYxtVHJGavboZiWcsC6noZzV1Tq6CvKNBjKrJTg4zwXDDFw51QL1PFSU63y3nRaFVCHkRZh",
  "key40": "H95tT7N15mAhu239mGhT6jj1ogsTX3tSD3mVrW9SYuJUpqMBKPeK9GySAqb97JpFofYvLyDjyyicDvGyJuhBYEm",
  "key41": "Gi8nw9hnKRY8HL6pSqX5aDgQk4RyiQyE4g4WxpSuRkAUb5X8U8gRTYpGSHVDBkapco2BjctjBSZA4MJtBwhkCqm",
  "key42": "4rPBcdiMT5tE1i7H3kkkkzUbhBsFHEY3mX1JF8tEohjyTK8MeCPgsNX6awYBo5JmeWg9KkjvmeNeFmBRHVquXjAy",
  "key43": "3kTMX89vCb5HRtYQkRCgkHrLBT81BNhSs8K1Lf6Uom5ssTkEQxba76AG9WpNGvJDzRppkXoXDcyYcnJ8YcbzCmSw",
  "key44": "2LamghEKB94wtNdUUBuZMKMJRoKWYEBUHMTeaDpEXWpV1NS18YDShLjJpFTPtngSpUfY3WsPMZiqyXAvvf4gtBRc",
  "key45": "4bDebXnAgziwbdfeRQ3yxPMgLu13NDGrcfcnr4Sa8EsgfckshdS8AhEZL4QkSaf4ghrNFLtJUKWiT7Cg5KMg9cs",
  "key46": "4Vz15FwPYkUUdb4WwBor3hWtrX1351KsehArMivMvnyFkJXiX6HJFo5M3DGbtmHJZkHQuupnBzZAAYauU2T75cJc",
  "key47": "21EhKcqoUW8kYF99YdfUVZ45HRwD2deAJKrTg8EWTmm1g9nMHZasfwMaxfxxeLHai1JyvTQNnPstLvsqEikjnP24",
  "key48": "3ENu3612hMJYbwBCDRuA2g6jKXAk7Y66NkXsJETpWgk7fqRvoGVGncDzKUREY1ZemtvgSb4EfNgVspw4m75KesmE"
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
