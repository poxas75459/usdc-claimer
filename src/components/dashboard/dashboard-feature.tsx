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
    "QV9iYqCMJdBriwFyE8FwdssM3PEoiHjT9jKAgQVSDSGVXM7tvr5CZjcgbb545Ansqo4EqPfHgH5w5XUf6Rnc4ou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dsHbeDGmxbrN8k8MoURiCyLzydDu5A4KTtNzu3gYa1FS48fU2XSQKMx6PsSifuajBTnJtcZyA5WTuZBUwrCyMhs",
  "key1": "4vuN4FaBiDaBKbHYkVzgfAq5354Ftkh6xQZe43zj8PXbdv8TZmhNywi4YsaDgHcDxhwLFqwPe1G6vpXzKPPxkQaZ",
  "key2": "41V5iz27bDu2Jsabq45pQuQorrzcv8zpnJcNdNQtNTBxP1eUNgmH8ZASH69UisDiQktwJxAHZkRuoHJM95quF756",
  "key3": "5FrnUJ7H3LcmgoP67dhJmC5SepuQcqPbJsCgz9KrbAYC6F6PgsRWh3myCKWbr3ek1Z5AvSpkRSC25LmS78yTtBE5",
  "key4": "3NGCQ2aHA2aaoMf3NbhgZNpSy8MzU54DMoHXuiJzqwaEMruGivN4UwPukks9kFVASBQXh1Rw1R21qkE2CpMSNMYx",
  "key5": "CF7ZeubMKqx3D8G4fTwv56vNuqMzetuCkJfNwwfvCP8ya7acFNQ4RWwce8QuzfuWFpfmu4TmkV2roAxYkTmkdwS",
  "key6": "2HWwknuGLiL1pEMkcCVzBCYt7GsLBZg1tTPNYQNm1FwNDjy671tF4p5BiSbkcnTgJuVqhpPjmTpsbMjjLBqtjiB5",
  "key7": "4CCdkXAxccHq9JhYoVvNJVRQtWTazN2n6ZrcjFrVi6xHckPYAjk5Vy6zjnCstSvQ8csAFvLmJLkXUeZrxwtZekum",
  "key8": "3gACv2d5XGkPtzYVaVpcfNtXm1ajinWmkNpNXAJXXgXzirR69S9wMVMsTJJLohCekdtuKvhXBjwHZCiprunHU7NL",
  "key9": "3dxRPicvhaJrTQm5tkyRwyRZBdAP2zCjT7BMJv5Hq5Twt4LUHJFAquL1MovG1fappkh47Fgv1Pj7JbQuGqnrwnt1",
  "key10": "2UQhT7MPYxZKMQM1cs8FLr6XpV1LeNvKf1CCJU3EXynNTFF8J7uPEpGeKQaaUkWgozMzDC5uBfjTfkjkHqX93CFK",
  "key11": "4ZXMUQR5V36c4XbRnVM1FSsW5Ymm1K7e23DTRBDfLyUx6qN76yBpAu2n62DQrU3cNehC1jeUgTuX6Qb12b46qCwL",
  "key12": "2zaDanpPCBbfWikw59cQgFF5FuwU4CD5Gpt8Uzq9Wapx7QrPg6moibhoYTf6B9LoVdWyjrBYF9cNTvaUbMKscjjF",
  "key13": "3eNamsL5fde1WSdPmPRsK63Rkw9R8wT5tbeHo4DBZRqA99ehSUnF4o3TsStajqQF4W5cbUgNS3cgC9FVBkL7G2Ly",
  "key14": "4nTrSGrLti6gJTfPgMAnEgKwfNxvmmNihpPyxtrp9unCJdTtp2WixSFtC8e32F32okd5n6JVRjm1NrsefSGpXCkb",
  "key15": "5Z76WvjKWPLQbDw3GU8qfapDwa11y4m9KfGcZ3rsbAuVvpmFUrx29dZMkPNW7LcX3pfUubmcdwEyXz7qeHkF1JEX",
  "key16": "2ajYjn2yiLAVLA1pAp6WoDH9fSTbyEgxJMb8ay1nAkG2fNc1dZvysowoxYyTj8WnmunC4uQmKFQkZyiS8TNzTp82",
  "key17": "2vEnkRs56jEgNkEb7jpd3REzYHt3Yw6tMzomtDcG7BRX4siyDFRt8irct4wRpFyoHHX2qDteSfYuqUHaYJJECbaV",
  "key18": "dk5Yv6FiQUBvtiB3gFhe61iGTHpwJZwFL2fwmyt2cRoCpymvpbYMuBPBsfSnpX8vAXLCMc6hAM28LGCKyfqPbht",
  "key19": "23hDdL7W6PpLbKe8kKTW7Wd6KjmCFQjrWpw66VPEL7JVsyoATnTm9EXak8ps8gS8fXGAjKqVYaD4eKaJAcGsrwnk",
  "key20": "32PsDfTKzDBcPMifWEzpbDAnR2EKcHkAPJzv6fFaPEwHNWzGYVvrbhZrgngy4qVoHPYh79Sp2Qw1bpBf9WhBXFhc",
  "key21": "3n2wrW1TzB3aQ3cVEWZ8oHvtA7m7aNJRZNvaVjLdhYVYPHQwRPx2Buqcv7PUggMj2S6YTwpkexaPinFb4pAws61D",
  "key22": "2xkNtfUPnTTRTCKs5bbf6TmqFrfpHBB4oENvdDB85q6hy4pwmuUw8qPaRG6rjSy9aaffXLxBVcu99GDDvoTum9XR",
  "key23": "39GxC8GxTBuHQXNeXBrPLnsksWCHd7t3oDBgvmZjsoLTMv8piJxgxv3G1EpuYtz7zM4oBE86z4PUuDJ3sQqU3YH7",
  "key24": "4yqVcZV59Vm27K9tk8DjU7whwD2X6zhQsyuVNp69y7bQLmkfKPxk8GYGHq72LnQ4FbAtVSs6q4eFBETo3ezarRwo",
  "key25": "2izZWYXCLcqoGYWYttQdvzfouj9N4VU7JrLzGMSQbwmeiQw9uqm6STj7x4RsYEAtoJNKWNdfthWUGb7DYd7KtAWd",
  "key26": "5jtMqskevN26UN5JahN1WeWqQfnMbbXcheaDpEavWMUW269jnahrY9tMoTP9zw1nayUbKZXsBdN5pQUfiC4xLnrS",
  "key27": "4CPjzhwEdb2RbVY7ydVFoXKGRzFe1jcqzH5RWf1T7343XCSU2nfy1S1ojdfjaESQwb5TXYL9famnnFkaCsXbwCnH",
  "key28": "5xuZuWAzhYVZQshczKzTyTYK6NZyYrSeBfYzWkx6LQvsSbi9E2KC6cTqFR5UFgy67jt4SzPLpQUZV6yQGdXEqqGK",
  "key29": "532jLxoCbcFVritDfVS41UurUduwnMokzXQjDX6UfWVeSvR82fwNmSY6QEQqB1YoneZ6RgiyGbJpNViT5sx4eBCg",
  "key30": "4seqt4y27ou3AMybP78P6Cjh6GdPqSEXyQNDzZA8r4xbNBbHQRYFYSCTonJN8d7ULL9r2y3ddAYLfh7AYvrea2Vw",
  "key31": "3Ur4AzKQceuUVe9DSG4NZ43qsnY5wG9Xw7YGAPmjkYRN96pewrHZRhNmmnTGM3C3htKz5W1amvg3LMMYoAHb64U1",
  "key32": "4QF1oUK5KZzVFztQYj6fkj6v9b8L84RwTQaQCnqigbht3UgaUbdzcxf1vX6i1DZjffGJDUpYadzGajEr6xXoZc7J",
  "key33": "2uVmRQv4z8rXcPL7Nva9JwSa7ukWhxhFLdsuxhTPJWdjE3EsXyF57nnJXceWjQrWjRDwemFCXZWo4dYUSSnpUY8e",
  "key34": "2bUW3KbRYXZucvmYgXQE8hJsiym2K7FogT78yXnvrUMstk66AVnZcZG2ydiAf1jjrMSB3U8Xi1QVod86SEmq7WBa",
  "key35": "4osfPJNArm3aUJ7iWukN5jWxNksFRfTZU7csYQwiT1efCjvnk3uuAc1hLaPhdDyiaG3WURpfhaQ6TRJsY5UK8dQC"
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
