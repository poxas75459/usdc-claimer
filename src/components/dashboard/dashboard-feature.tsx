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
    "3MHBPN37YUtLLvRhQXZ3twYUv1Xyq9PwX94w3QPYR3jFFqFTtuu4LaJNzpN7x7HoEKXMYsNP6gDxALdwmcAgcP3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6THThfP6sacqFuyoPqJjpr6spWnRxUZFUgbwxLUBpTvHcm76QjnEmcWJ4DvRdGzMqkAXZchCyP8wCkrccNEiYbM",
  "key1": "2WTHmetmzeQ12cQaghrhnQbDZAt5vbT9QtmVB9CPfQmnFT47crCCGy4Q3iXd66kHwGMkyD1waFgKNLFGKcaM7u1i",
  "key2": "37CNGcPC538uFQNpKvnbszmdDgX2UgwpQ34ohiCRcGhCEibcPi2sLDygcaTpH1QmKYzSPgYVTboY97ZbVhvXgeGn",
  "key3": "3oQABBBdpz2X9qaNc6FjUEtTjavsESV1M7FV4AMBMrsduxzFY31n7u9Y8HmNTfazky8NDbZwhJfeTQBpWnYwMGpp",
  "key4": "2F2mos1GRuV9HoghdXgwy9kmuSLAw8GSxEyEWh9nC71VqTUBYTmHj9V72woesamcrPGHpi3hLX3pxbFAt8C7HXtY",
  "key5": "54oMmsWW1DDQpGGoPJMqFcM1J9xhsqbtuoCTJsRjrW2GyPCcf9o7d4sE2jr65TbRqaTT1TcFySh1vpWRtKhFoipg",
  "key6": "5bDDsqEgQSJks12NyotMtMecpcjkJ12aFXNAxPfHxACgkDZL8cfGDuJCHvA5VtvnivtAE4MWqZFKFrVguwxWYmLw",
  "key7": "2fumzPMHFM38ozevZKkwRgbj622C4n2rf3C9tQbpC8WMFo2kMa6Pr4rJRV9mqpAU5Z3GnurdT3kBKS8mSo1Rw157",
  "key8": "3C6HRdTXb5KUUoN6WZE1D2xKZphKjCWHf532EMBj8UsRePRu2LtL2cDA5acyisB4Z3ubsrA2oA69kCaX84e8oqnW",
  "key9": "3GdbJkskKciEPUCqFEpA3YuhGUabeeYKpSp4iWVXEvNgrxhqNkYtBHECHcJw4Xz2UXC223NyBxLAoXMNBAb6CH9o",
  "key10": "66bZT8Kdgt2pucmuy6Q1uGsoJN6ZxnjLsRQuKhAgYGhJsiesFD9vU9Ke8enYDNnoxT1HQUmAoufbQtrpe2XzNvR6",
  "key11": "5jCMjpSVojt4cw51kazWkxMGibg8M9Guei8GEa5X7pDPshP6tUvVJY9VaNvWCzQqCmayodVkPqPzEqnHm6wkuu2o",
  "key12": "5PoH6sybgj1eK5L2qMNv8iftTPSjSasu1XeZy5qApt1KrsU1iN8b8P3QKJX4p1GBzt9ZRS8MdYqWF4RZ4WogKiyJ",
  "key13": "2khQ1fx1K9TCmBDLVPNqgwfvd1pFiCL3ZxAhEwivrmgWyYPvE32sRs9AezsJoHeLvNBf14FfX9qGH4938jAL2Rtz",
  "key14": "YsEN82nxC8gLCCPhvbzPLGh4HxCvsART2M733DPeawA5E4j53JaDBmgn7Q4SQMNVCnfFdqucMH7uLsrx7WAsQem",
  "key15": "5wQmNieiyJSzb31orwWgsotKszJAfA67qtpy47D74ThFiX4ErPQeseTGqzdRFLxasNQLHwnd2CEjpAbF9S8o2HVs",
  "key16": "Yc1R8m8Qkk6J2SrMvsmdVh1SfyYeC73frGVv8iGUkx6MAi8jMdsQjnoc8pDYWQKBENjhe1CZRcEAiqtZjF75gex",
  "key17": "3S5SnqySQjjS4xdmR9bu4hQdHxW7SZptbKeuGb5z1pXuTUYiAXdnjZTetnf9RHwkSZWFw5ErskXmZ3o9hYNHysL1",
  "key18": "Rtk4sRbDBiV7Bva6ysN3wQxRH1RgndxPR9ZkGKUwvKZKtugzQBzmXpbmWtG9uhL6nEG8rqPji6SiJDCapGGaGWM",
  "key19": "3X6zaDAUv9eHAjurdM71PVK5PGrsnhktLXV8NXT5znDo6g8p7H7srqaEG9iMMyrRnu4eGN8P3GFndQHXqao5LF4R",
  "key20": "2tVbqXXZy4bRxavcbW7SjMN4SnUJPLaFUSLJDThHBnGkEBJZJT5CTH1yBmbPmZKvCb6wqUQVdA1KGGuQXQBFfweX",
  "key21": "34NoT5DwKLtBexmthnhqLeQw1vG7AXc8g5Fv5pRWSnm45DdBe9kgym8S3VMut6aFhDwTQaiwESzgCuYyZbtavGt5",
  "key22": "3obYez7aeJ9eN3HzP15pLjVkaTvRxE2howN3thm4RSnpU4Ax3EhtVVJVQnp44HyGUbzaEDsPaM6331cgs2xp8ea2",
  "key23": "3rUiRTrWgnYxERDqhpkqqKeKuCrXdCHTDh9SY8DBcbBJD6H7htv8cBbG2Z6VAWtrRYBwRCyYpKcjmiwgJAJerYib",
  "key24": "5RPwbsFB6AJpLcj8hcR6y4YNJGwJ6yVj28WGcck2oMkJNhpgzfTR8iwEFhHHUUpcrRuHmbanDBnTpwa9fdSgH7mj",
  "key25": "5PjFsKo73ozMzC6EhZx9JvbzQGiTC1BqVcrYJMk8hAbRk34mSbxEB1u4LB7twk7p4uFQTssuSH3hHudr8FwXbvQy",
  "key26": "W21FjJkoaEqQ1tgX52V3N5XK3XZ7tSn5VofJThebZvHaBU855446XTXzxoeHqAeiyTHBkAkWzpM4kEiAfBTSN8p",
  "key27": "4Gb5NZePk9ghJfwn9VCQYDEhyo9uogmYndstQJTr9miDW6NCXRh3HvTufNyLmAb5dVuiDWbzdkEmCc2DWrYjHTur",
  "key28": "2n9QFj4G26LH21RHw81G9e5L9hv8omVdrPxns8LcuFDWNikjJWKtVYG4zmApBES5unjxuRToeaFV6ThZ1TDo57u8",
  "key29": "43eYx2EnG1jy7hjJBFBsjLu2WfB6FbBpT7ZCAK5WKaiedAR9A4cQirwcMiq6Rp2mfuXXKsRVBTQsR4nnMLMGEkcB",
  "key30": "66FkMDnAzQ9np9Ny6kRD7vPfUcW4Zkk6n9jq6a4LrQ5hpNi4uxdG4Ef98nLTfdUezXuofeWQpWbHARCCQxhpbQa6",
  "key31": "3FXyJLecED9keBmBiPP7F6WFX2tdEHxxhaf7q1t6zEQY2BMtR7obadceo9ZEya14yvzo4AauJEWD2F1drGP1w7NB",
  "key32": "VJBoajCw8NvhZ6LSZJn7PFLSZua8kj7UpraBqSYFfwK24Eksj9oj5KqZq8qVxsa166auuJNAD7uEUWbe7AYtq5n",
  "key33": "5Fna7C5APFDMdyheute778T45pneoQx3ukK1Y76SCRcrvMfuhBMCiwH4tBTc7T9qYDAjFAkFWRyj7qvFGXJuptZ7",
  "key34": "3mPDj6vPu8piAWC7LiTyBN8sYcp3Js7XvoGq9C5fM2A8nGfd4KrCgs6pn1v3HecmyvyrNiD1cvFwRBiG3wfiZtBS",
  "key35": "54KxgDuvDv1FyZMtQSQBfvtSJTf2G95qJoJbqKtK9YXZQrQCbPxPGqtM8dWGwSKywBHy1S33tMQGm3o2Q6tNZd8i",
  "key36": "2AyZmEUtA38k6kJFoHEwj9SMxT6pEQwZh3eU1ZUMquEnHWxe6gWP7ShZcfqhAjBhKXFyqgSQRKgP64XV5zntuCQ4",
  "key37": "4TJTQifo5HT5dNvQrAaSLDWwerK8J1Rvom9egqruHrm4QHzZXiSzBCaqtWPo4x952NeEMKkXJTnjBC3uULe1V1po",
  "key38": "cXukVYHBiP55jXrqYThxc1QU8dtZaUh7bmwJGTpUBYQdZh9xJtFi1vgZv5AVoLjW7znaidsY1u3FgDuTrvAuwqj",
  "key39": "3GCHs8HFCqsQEpbDcyFmXezrdzdAdthi49aZpPfzxWL4okiZfmkkpUC38VZnFZvaKCUB17mLqSCkBhZ9f3VKpYth",
  "key40": "2UYLbsaSfSBAXjQ3p7R8oJwbng1ZSoD7Dp4ckeNXVBaXuJTRS6eNSa2gq5SbLiePrAVaMEX8ZsqNcJYwWFQRZAH1",
  "key41": "kLxwF8HF4EFXS6M19BdWyKHWz3ea5JvCQtwj1WcBbLeHsWCdj88R4eqbVtVqp8JePJKb7Sof6GXYJjsaJHxa2fc",
  "key42": "5oNDqx45ZuJJZ23SNarAFKtJdUQuK2TjLUw7tSujyGk8riKxLLYNYnfhSLfrm7dvtWgmYfkJmfunq9Z2pQWzEfXW",
  "key43": "3V847Ltn4TZrzgHiMt5R9Q5RiAQgtge2Vbjwmfif2vMtTDZS2AKEfEe8qfWVrNQjnPnt9Bgvmi6yrW7jt57ce2p3",
  "key44": "EsGHytRey6eviigAgxYxBsf4ocXThHXkuTCEqi5D5DAcmGLRNQjeXEiRhxX2Wx8kvd5BtMVtrLdY9Y2vVCVHvYg",
  "key45": "GU236KPuUzWfcDUkKG28deeHBhEkreNTxXdXhPBJUuaWQyns6iFpxbHiyV3VR6zqoaQpZYHk4xa5VYUQEHYM6N8",
  "key46": "54LTkwf5W2XLVa9fBHg3Q8mUBS6kaMFr5Bfo86i844MMUA1JNxQqmduipK3pgex8upbzuqLzKECbxfatoau9S78h"
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
