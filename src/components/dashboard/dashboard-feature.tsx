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
    "4a9WQMXgU51gRuNtimg114dcNPouwPZgQseaAncd2PpvBXSMTxHq3GTHouxUHMs4zuNGoAwvRS2GjngHiiPcKTHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ABZVv7Pk7WcvuE68yPozYZPynfhFMCs4W2jZXSvKityAxxvhRKgnk51ZMsQ1Gu8UWo34N4Cq1HtgtP58iEBg7X3",
  "key1": "3Etdr6MABM3z7QZvHeGsTh7VnPKSpzXLS6an5ucUFFM3sWtkWBQhUGoKRWKJD9W4hqNzXdE9uLWyZ5fE1bBWpTyK",
  "key2": "59ZkwBRyDDUnEmJc3XueYpgDhBUve7ozmXZWWxXr5M6EpNdaEuSDDYwMqF7JUKsrVd2FGXpfqW7oVYuSTYV5zA7N",
  "key3": "2987ReWpnswnAGWWJeL7b9yQRG3ggXRhVAvgq9YZxr8CVWqpvScNWSZKbs3qTxetFvBuSbLeSiKyzkr45z1FnW6r",
  "key4": "5TF9L6KJA9YFTZY5qnsrqsNvu6i5tHyLv2wFjPZpVJfaqfnYZn4JM863ju9E6h2tGh148WaqFjarw87NA5wLT3Uo",
  "key5": "37Yg9NLf3kPBj3e2AC9X4enxzw3UWsRv6xxgBZMVcaZckaQ4mnkMJpU3VYfkDaTguaR4oUEitBA1LpmycjA3JKdP",
  "key6": "4Xm5t34zWJhAShoxxTZsVR9rRGUEqBL6UNz2Fnunogc9Dc5yZXymFj7Doq4KVQeDTyovV7Qd4s8Ebyus7Szo6LcK",
  "key7": "WyMypHaNJ12hZNxvRTCVDAJvtfzuRvrMtpPKwoUyf97phJG68VRAS1bsz3mYWVAvE5n7EyrSwyBNpoSRc4QnA8W",
  "key8": "A3vgPP1Y7gYp9JLu9yUGrQh749xSxcUj6GGsxsQFtH5eTij46vVX4U2zismuatepJ4dWpuXRXppRoE2V2RPvQH2",
  "key9": "5dNpGoiphnYZRNpYJGQXoDNTpStcBZ77YiBp75WcPWfpdEv1HNFmfEreLJqiMgHxJh7byS36GRqgLnBBW7KZzi74",
  "key10": "2QpqrTxFYQb3WUoPPEGMVX7EYv9VyEqkZWmGqkeorWmN9mhyuYDhC9NsgxBxZgyGkKCJJZqdxHvrR3WWhpWFPJiB",
  "key11": "4Vw91C5i2ND3Ea9fsZHn1WaxQ4EtsS9b7xAysLYvXtiR4pwF7b5TLkZw8ZGEmdxfF6cdgYWTB5Ra2mEC6r5aiaDi",
  "key12": "32t9yn3Uaqn6JWhMUCJbHJEtcY6BVLAPjA6jNCHr2X1MHvZW1mERgiuRGHDw8sYSEjooRSXgnpsJygFYErWxDpdG",
  "key13": "34qxAdfUFibcroCJsbLKNqyZsgh4ZcgczdKEE49ZuveX98m1iL9Vzp1yU8tSKLFKnMEVfgxMyFy4senkiV4RgXGd",
  "key14": "yaaE3orqzaaqJM1NQ1VvyhWsbJv8jC7rr5phePr8QdGnPxqzJ4PEjrPAHc8YUXnhdPxvzf2jX22ySGx4rKEzBv6",
  "key15": "2w1oEG7uxMnLcXRagf4tMJzNFZSNbmKqzN7WUe3Usf9zWwgWU59rcgrcK1RKVjkN4dWqo6BiQFYNozfk6sf9Rx8m",
  "key16": "2m7ESptetbNDbfWvawtKQcQV2dUcnnSriHySv3TzKyKPZC9Rd5eCHc7F8VDnLXDYfCyAfzcfvJEF6ydFeWRDTMDj",
  "key17": "BzC8rX8pdtePBRAVzGwY3YvYSpynZ5HohG43Wh5aTY21awf5zXLC563CMutyrqKxeK9mPepjb4vzTrARBXdRS83",
  "key18": "4KSBMMkRCNJUK4Fdg9D74rBzihDQnmprNgC55UiJkXzN6hgaqtQHf2YN7LEUmLpMmWRewRtU9fsJQWX8Qd4JUVHH",
  "key19": "uxSGYsyhMLV1ihGj6Atpt8Ttu4MePsFazubwvjUiRFXurVRLk4xzSbEu9t59dHHQiXfZv4YdAWJcPuypLam9BVf",
  "key20": "2vPirDu2NXMMQaw6mCvhCUDq1fzrZyKeiXNtpffoNdcSEnU5GJshRaDL4AL9aPXZFCxkGo4968iEXJ83h5K1azW6",
  "key21": "3jSLVeyRWb136HKMicjWbQBNx9XsajiDegMX8b9UwsCY6u1wTeB4eKVXdBcKqyM11uD4EnT46vbvideyJmEBXhXF",
  "key22": "2zghkg6JDV2Diejt9ZSJ13xRrJi1VC68bujShCREsgxevMyZP37NtuzoffQD4Nh5KHzDeji3uVunY56bcfWodBz7",
  "key23": "3xCgBhWhvLcucmyLVYhQEkb4Cx3dMRbeqcrJ1okUi9ddEnpsxSCZzeCBsd3Nnw6er8v9uaBG3FG16mmyStj8DJpc",
  "key24": "2SJApZ7b6tUsfFHvf1RYB9V57D8YSknmPjohu4V59ZGKBG7gKkD2cPQA8rNnRKSv4pgN3j3boKq638ucbBLUDRSo",
  "key25": "3zYLfRPU4W1hweSsAcHo2y1KPQDSn96mA1zk8GuvdjDBrpAVADuG8uBZKBpWU98sjJzxGFoXFHhuxvKbAnbbuQpG",
  "key26": "4pGTEN2DMvQH3aeYW4Y5r33jdXvquZUSPpf4ePisUG5s5sFcM67fb8aCCfncSpbUTe8rmzU1hi79Gf7E2xgp77AN",
  "key27": "3UJPRgXmeBEDoPu7FS6FMujkuEQWZF8np7tczZcX99LPCeGYuuEBC5LTwe6t5jfjwdTvRqXeR9XzjCMqbHTV53vw",
  "key28": "4fZM5qTzGTZoTZZUUXLZJ87kK16DZMjXEbdbQk4KyiHDG8BH5He5DkzTVrMpfd1y4cXeeEQLF6nJDQifP5tG7pXj",
  "key29": "2yQDwgaamQkgCVo2NYbiqmfinp1v75visqqaaLpEsEXqTQ8ASyrW7ktQuWeSHMTy3vSAubDn16JrEwW9FvdFjxKn",
  "key30": "67T9Hyvrv4sQsygXHJhVoJ5KP3oFuyfYb9oKNkosrL4tq6Y6z1y6ndKEsu2GdswgjSZUAUw5YdbjfAfk4eQWX1fB",
  "key31": "HHoq1QcHMZNnBV4xukQXR1eeUo4oyr9PZ3ECv5FSkJcVHFR1PkRkPTWkz64dAG7Bb2BjFSJDT3fDxcWC612xZ4F",
  "key32": "3c3qiUHLdRmEWrXZXsRK361x1u9DU9DPEsLpmuon5gaztxcMpWKbyKVKJRjJxo7SFrYsutt8QrYadvAmC9jAoFKs"
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
