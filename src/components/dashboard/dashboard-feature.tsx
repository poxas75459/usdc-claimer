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
    "iDi3sZHmH6KmMmpnGK8j3bUUGiMo7WhBPM9qJVF4B4JFrmJnvHBNTNVGodFopLrHATrETj6MYCrSfTWiJfmQ7HM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MMky7jrb6ya9Vzd2pX8WYhzcjP38zqnnUyAK3k4WwX3VCCaTbzmZA4UxtfxYkJJDgxqDxqa8MdAphNrh2P2gR1Q",
  "key1": "EhwyVMbyEWjN9893aUeoJJxf4UtpTghRdTXNxv9dzmzTUbRBcXUDcmmbtfK8sVjXxCZzjQ4uDfav4jKZ9QnWgBd",
  "key2": "4yuLNdX8TSEPJfzhQ3wC5gko4wGn1M5koEkid4WoYuxKBayKPJatQtjrS1FuZ3kNdU9gNmRU5UDRLD2KzZQLbvTh",
  "key3": "29wj8EmpojT8Ft26oWNRkXC1NxijhRW33SfVyebnqP2y4rvAnQNJPFYbGPrAwf8mtSaCtFyh35986rs2CENahuEW",
  "key4": "4vvWDwutdmwx33mxNvE86n2ZnhBAkg5y28StQv8RwTBRWUAsui4FLFqkj5xSGwXA48F5x8taFZxAq6NXeUCW5Vap",
  "key5": "JadwMEaNWUHKfe7BtJjr9Yk8VCMpE39kXwUm7jGh6xDv9KNctXX4DStj1hHFLKpw3BQnes7xRjxZMzcxLxGqRuC",
  "key6": "NecE75bGgbnx6qfh28xcn82ByButiExZxgxbDLaQCNqtbC4Sy981kHcZy6aaG5ZiFrwzHADno6kp9PUBg9DHAku",
  "key7": "nsoPWg1wZ8mqXmaJfu1yfNKbK3HEFZefE8GfvcSG1pgMWbXwJewBJibStfZuQb79cB7nK96U6zKvWCudfMUVxjo",
  "key8": "2xQhinkMx4UPTkJQjd4NQkJ6pKMjP33un8S4E6wrcbp4CQ5GGV7mavBiuyAoGz88pBFsb9v78znRQh5vJN5rTkVY",
  "key9": "3E5vg9Qux5ZM4Jqq3ETAfFNHfc5Bet7Wufb83hjKHSjCNvNtypTbcBLsUQWM6sN7nWX98rjUwrAatccrMMe5cXNM",
  "key10": "5cjw1HRXnq7LYsHtRSMFWYb67XMYNjej1spVxTKcikbeqNsjLjcChu7yu6huYmhujAmJYQxDSYdUrp8NvC2qY9wJ",
  "key11": "2EbQrp8kezVMGxxzAaGzqyfy1miseKeNUN9XjJ5adJK2ErcbTcuY9CbBfFFbFpYvH9cRdNZqccMLBimV3tHy4YBu",
  "key12": "Z7qgb1voYWThNVDRhL3BvD1MYFGy7Nvimt63nFiJjfq9gtCcPPQ52wjAUKoMw6yrYxCJWfove78GQGj9GWD6a17",
  "key13": "3Qkv2qfJ63NUzmr6VcAYuBDG4B3Tco7m5kJ6UDzzX91dv5vaUWbKZeGBTfGtereH76XHpUEcTPVE5sDACVSXuzM7",
  "key14": "3ZBgHzoJgiURLFNokexYApnq1boD2GjKzoRYoVTt8PzKHqLyYjjyKJoo6yLn9qx5793PACCdDQ5kvyojdVYLied8",
  "key15": "5VLAWyrswxtmkB2PTc23vEAw69q7mxcA4PQ3ZFD8TDJ8kZLrD7K1dJzhnXbv8BqSKK8rs1JME535fqy2zeZ6cCjo",
  "key16": "4xjWA3tJcXvBopCLxEDNBT1usmU4XgDiKXRSqaFWV1R8ZwH3LfycoaKRQz7cL4pT69wpWJiwwGysPrpGvnRoms5r",
  "key17": "4Cpi6ZVMWstghCYCNTTN7wn8gPBZqJoDZtsGZYDFUcJmzbrBVfv5BVA2yqjk8JwrFS6pZYjHwVv4kFNMrbDKSKfU",
  "key18": "2FSadJVWUK8p9z62yqcZRTfneD7zSwxRgSZmso2t7pESicV2gE2qgteVXe6VVuLCEM2uJZL9rP89x8WNB4VR1vic",
  "key19": "3cQswAffj4tHC6wd19aYiKv7328uBNjexTNWDHmoHXx6Lf89VNisq1VbExf58xmjgXPnH4cEuqiA5HLfDavsgsNW",
  "key20": "jbARjFcDNzYmYHMsWQ2iMhDzy17duo1myABNDb34n1DeGeJbBgHyHoaXUegh71BXzMF8wpKrd5MtMMNjpE2CWfc",
  "key21": "2LsE19t7EDYiJeQ11eQv1k5Tz9QCN42Jxf6HouXsr5H3ViqvGdxJ5RAmeWky2e4hY4EAUevwRKaBW2NiH4JrSQov",
  "key22": "2c58ixUBTbfxrLUAZyuqGsZVHjDEb63CSw1zf1BPUYaCHZ3WkyTWT1EtR2pCanRjs4qrrXTqn2XWMk3k2KPmpLx8",
  "key23": "31HRFwkYetvJLhDXfCH57ttc5dcYjJkDiaQDtJo6tSD8JTmH6w9pwF7VmEa5grsVTWMkj6jedTkAYqNq1yukYjNr",
  "key24": "3j5a2qsFpxmQ98zUdLe4AUnCtDFfoS4edhxrFWKkxzYMmoxucRS5CaUWv8oYvcwUXBKAgVwFnQzPgJskEGSmsDep",
  "key25": "2dzudgXZR13soMcFGADiKGZJ5PCi2GNqdvHHbjUGDFT89mpyX24PhM7y5V93QBhJXMv5GeQBrT6voverfor87hjj",
  "key26": "2i4iN2zM6kGaf5ApcSJb8BS51P1imA9zQ1chuBaGi86Jac4AdbXiAAKpuAphrNBXm6FvadFBWqt1LsgQiAqhHax8",
  "key27": "7AyshzuWFQ1FbbG9MSzdQT2yamrnTnzW9vSowmxCuycYsg2veWHR8mvM7KQaqBivwVRwh9o9kyeZ2gZJrQKUu3a",
  "key28": "63yHyD8im1woofwhXB8gUaodZuQ4TAxdrrKbidHyKXhzheJra8NLVnfjyZccJQWM7Zx2mZFfVDJgDH3a9966PvRH",
  "key29": "4PH8NAu3qZZjt4woK7dANeWiS3xZ9dArUo2AbnQyH9J24FwqAPmUbP1nSTcebsw7j1cjJmipa1rBqDPaRnquxfsP",
  "key30": "3jc55sYnP4bS4xqkpHfMJc8rreDFVv2dAeQc4nULBytN6gEpFFPqhKwGd6cqNmMK9xpv4Rq3zrXi48oWw9CCQ3Zd",
  "key31": "51acpdCrFq8hcRD5igYWuNx78JBr37dHvmxeNWsvM3m4Ae4unvr2XnKNKvauhHGgydgT3M4azTj7qBtJDeTCFean",
  "key32": "2xVVEjpUa6qZNP3DdKF3Fni5PPpZYRqVMjgQbVTv7SZhyo3PfTa5dMi8JTih9CTQu4ceGudmYQuhcBWAbbqU9Ljy",
  "key33": "3zQuD27B2Xn1Ld15pc1B44ThTw6r3HpKPiR5JhtB4oxew7GDkeqoh3FWM5HFjLEqwzohUjeTUL23uqgH7wAxuMSH",
  "key34": "5cNH2yvZt4jCnMjFdCZ8e4gNKauKs1VY4cAgDs5NJtWQwL7GLfP5Nf9VLZmoUTB4XFNksDgXkvr9RqUd524L2w6G",
  "key35": "3yfQHfgX6vduUBa8Hr1XjnSDbDuFF7P2BKGbdC9XGkvFjZXMfoENoo4wtuX7awcchJNJaWjXEUuCNTU2mMbALUsw",
  "key36": "K3dnpHz5HWm7R7KV1mFAVZFYdUxbPuSzvNJ6CUVta1NqPXrse4237EwTuZtyFcdDN6ParCX3PY5cm5BRxahBrM6",
  "key37": "4tUykChMRJPu5AHNvwee3H5qEeqBzUT6Zz1y8kDNC1vjiwpNSXoDj6g6JWTVLE2AAW5GiijVgjuySTuvmwLTPfH8"
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
