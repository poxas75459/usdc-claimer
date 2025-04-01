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
    "3X5kMoQx6gPamwohtKRTPfbHcGWZTZeevJALvBHLfPTvCjqFSZV8f3zq6aQUcZAfQY6PQYAy5Uqzn2oVDJfT69HJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25aPdHfDE5cav1qKeuXw9rWnQzU5Mv3igpvrDHgZs2egsFVEJs9eZxnuunbc4fXWsUaueGdN79gPAHKz7prwnYP2",
  "key1": "iARyYqov3KZUzqMExmeMbvpdFwRuF2cy3ohPBRA5D1tyv8TZFsDuH95h72q1imLjQZi5JSxDqpTesXmPvNtNKVb",
  "key2": "ZPzZ1ZcbycRuMtSp1YHY8EP7w9UnJnpsGB7e98cK6qwkJbZRp1EBi5HnWhAtxioe87VT6hbebg548W5z3BdHYnt",
  "key3": "5kmRjuwdm4BcjHYE4ifx77mAtvMkmXJQtKQsfGYPR5o8LaDfCssveMFxnggqYr7n7XEogpELnAvwy3iWFhtHdRkF",
  "key4": "2FaoevekyEeYRUWX3XpC6WVB29CjHDnXwedrwUXvfivZ2srRfNBWVJdBUzUpaSqTXPvPRnCNBhg4GitfowdEdu5p",
  "key5": "4YbvAuStw41dfor5g6ZBMDbJp4d7nGpknioH3b8vXdisX2R55qPyzuQ946erUdc1wfnYT5PS5nL12YTqNQgDS7NL",
  "key6": "spLBnXFajSECYmKysihYHCUakmw1ySk1kEasecUuS3JBNuYbaus6mdypEvmQj3dKYt9dQ57vwupWSbciftAvcxK",
  "key7": "57G6hgT9Br4YkGJs4tY9Qhwozp4sPxuYqgTVDS5kv2yzvziEpHLMbgrwqUxXhQRFVcJT7RR8EtFkQmc7uidwMQ6X",
  "key8": "zMXyJ2UXrxrifkWW1KvVrykRSJxnyQHK3E6N7iLTz3fouWTu11pMLBmhK8vzVxHoqL3pFqqibd3zPPL2jYyN3J3",
  "key9": "22nKLHFy4rf7CTCEgehXtkgjTPGS3WCBg4ZzwjL3gK5EfyABAo85SRL4HQpHt8r5K8MjdSR4h3hooWm86GbRoW8T",
  "key10": "4FqH2ztBysxoe4U6ensxeZykbbUqjUGZZ6ZQKvN628cYMmCVYhmpbha3Ca3ZkwFuY1bV1dpEHySfceFHDrULr8t2",
  "key11": "5jreEKKihi7fUy3tFtqwgdKQD7pTZ4r78cUDThaWgHkBbz6ehbZnSu1wio643Cv2yje4B8xiPda53qW5GkszQMLB",
  "key12": "4VveWnzCYizKFuGGqCnXzVeuQXZakD51QUeRvZfbB6djresP2wfaE2Yp9q1KrmutGAw9Fera7GZNPc75CnYfadFF",
  "key13": "5SVV3XL8Xd8VVNaAgdwsCtErhi8A2Q3tqc7fyhc9FRqKR6nopuErkZ8ZP4niqjEHuK3eyi9YhV2ba3SXpgcRYJum",
  "key14": "4uXKDxEXorXYUtU6fJRk37k1F5fDCmgnTr3tu6ZYXT5eBoyQXkuMKFDWFWyvXjFTcupE7kFNZbJeXjnGSzML7kS8",
  "key15": "h7RppDEZrsn128xbVkS17Dc4ZFrnxXNHCNAgPArMbuL1BZni5ZnphJDVccVRNEeKsjh5LCgW4nmwMihCXBhuMHs",
  "key16": "5r6z2ZqaFBwFY8KzoRYwB1VcpW89KkfFnQcFKFsGodPq42hnM3ajoaJ9hDiAfmRXcs7SXHMaude91aS55HmTt4uq",
  "key17": "4P7qiHjhTj8kNC5GCmHwCsaSaxZ7oCRLkvVwiLbsR4ujiqWy7eE7q6xUmWMorfob5tBVYR655rEgrQy7Wuazp5gw",
  "key18": "2SwNaoivVnC128n1SQ9bFg3VTNgYg5QwYiaFFbR4RSSgyg67Du4F1cc6p7GMKEW1y5GZ9LpshtHajceKkKPVn7rL",
  "key19": "3QWRsMbwqBcyvb7Zk13fXGRpU9UT5z2dgt6mYViMGLkeRxww9d3FnMKqXdQTH1vJ8PsJaotNCdV8qNpTVFFfhNEW",
  "key20": "3SCTYaxzqrimD2wRgQsUCBSvoU4ALtZZi3AkzWLzymoPktv6ZR6A27tsmT7NnRopgWgn5Gomdy3UT2d2MvrBa1JP",
  "key21": "4MbvRswTguRG6kvtGnSmzgWJhvfsimmNvWWyZsD1okPaMYZLvCZbJ2y1isJdaHksJtcTsBsWvQSfTxayhB6wGaPb",
  "key22": "2Te9NWhwBRdLtJLzFWHh21EmmWj27yzt8LraujNr83bQvDEcgdxVGcmFW4AAvQYZx6ngWStTT5PDTbNuX4YuYd7X",
  "key23": "5uKM6rCXNDKd4WMXAKNQ63LDsEgf1w5mjmmPFGWMSFRzPxBgPd7hvW5a4YPRGmJB6RXthJGVJ4ZfMocN1EtWbMbw",
  "key24": "5RbLZ6epbVhZYc3zGctv8ZZgXWz47yKaJrQpwc999iGnictXrGkcH4Gawup2r2fQFqPyxrwmBaisEQE1eEFdrYUj",
  "key25": "3hzuASdMq1jkb274MJ5QA2b2CajvTmz48C3M8vRjQ9FzLLuMvzb7QNJJqSU4zab95songbyYc5VRk8dR4KpautcP",
  "key26": "2NSWXLuqPBYdeEGdRDSt8EdNHXEhGM6y9rA6755fjJeKh7Lro1gjbNHXWjgsMg1gJE99bpnqoEEbTjp2seVxis7R",
  "key27": "3HBvnHEwvAGd2XEepGTYEGJDByaSz6QfwEB4k7D7aEt5XmR5YMBXYJJjUPpLVo1DuShKqhoRx7P6ZMvawseU9dTY",
  "key28": "3NTWMRUUVkp9mjXjrXBxj7E5L8Q71pnVSWLpuqsKEqPvs8HGKchNHbMo1YkM82CPSBocp6nDTjQ3V4zi4VrDbCu8",
  "key29": "5huQV7M9X9UUvyrWbtqt2n73KVXpSSe6LcWDmGvXPYsi6bAJ9yeTEJJcEA3PVoDEuooNK9fLZpv86vU8t544q6E8",
  "key30": "5b12twgHqUXTcfMLsaoyyS9w1kALmUy2AaVxngaA1kawBz3DuKL9YGiLR7wGuh4eoaF9YoYXKhHdoC3wjs78Cv36",
  "key31": "EtQ6BvHMUC3f4TSTHcQuv1KTgD4m82G2zWdjpAPoL6RG1UBcZLmQHvNJn5x7ua9wUdGS9Uvw4xyYcvhu7Hbf9UM",
  "key32": "3jSUMvMLat17uKAgpQ8jMbx9e8rriFgVh3xC1nnsTu7UCEVw7v7dRBVyu7PfM2V1dvBssTXQN8LspBB7imYxvZPk"
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
