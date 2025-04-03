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
    "4bcELz6jDB9EbW9n5vugLq1PRB3u69Q7HnSyBiHwhsWxF7siBbKwa19mcSkchVbp6auk8cJApUcPTZpzfLwopcn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CcYt2VdArnTsyjYMGYsPQoghXHQLYHagG43keNCZdw6CqLnXxTxnsgw1yz3mWbKfm2nS9jpXc7jJqgeY8WoSrnp",
  "key1": "EfhXzvrHjw62EKwqEt537H2nM5CB4Nt9BKnV2KBuMY7XBxVXVrimqu7bFH4FjQpQ5BwARnQ1g7uGe4f1drrbwhF",
  "key2": "2o4qMLmwe2JwcGDiaXJjSdjmNGDhQijbWTxWSgfJjY76eakdVQEGXUnigii9rryxfQD4SMDq4EhEeBEUqL3F1Eby",
  "key3": "3pCZkKmTNZb83ce4LfpbErWV7SNPWiudXfqD4Qx46HU4G9NHexdSnWHx2eD283PtAfx4z62X4R1LUbbohbNWEa6x",
  "key4": "HXSqm7AXLm8cnRmuHd9YaCwzCSY2vdFWByaPooZGRRVmWWBZPpyAuqiJ6xA9e7ASToY5wBkXQyNYCXLEVySBTbj",
  "key5": "2jQgvkWYgFMXheF3GTGYPWvwutB2kd6dC2kUCWPBEmKLpRSZbWaqxsGcWeZq3w9CoA5ysLCA4AJnGwaMiuCM82Vj",
  "key6": "659Cdij2RQbneGMtzgCJTwEgJVAatMSizNh5WeEcrv9Q5Qko1oLf3PPLkV5EZks8KRQJn7F5QrTGbqVQMSfRi5jk",
  "key7": "3sxeiUqEpp2tqtKovqf6JJobGkmmVFafJYFSMjQNjQMapWbeGVevt49u5HL475Qc5nmV3MaXHV8DdoHuCPver878",
  "key8": "5XA5SJuKRWUVcANABD9KmuNzyCTMLeVtLVkARqDxCcua2Ke99vJ6orJCo1KZtPvsV71AJhsoK9APEHn7he1fou65",
  "key9": "2Ldc7hK7VEhERi5CM2ex6NPG8gMTWo8KRJLoHkHjLt9onKw5CDd3fGLdLRtEmFJn6Q2EJhNQrK72TWmt2u9CUCjm",
  "key10": "2qXWD9AoNRXEBLCBJftq7qwdits9Xd4Zy7715E4FotzeMF4jdTcdsxt5cLWL5vs7bvCsMTrm5o7XHTiUtbHR3JEH",
  "key11": "3MqFXqAkP6EKsjnTncYiihgXw5MGCmgVSSxconqb6XBzBeUc1WnGRgsXSLtbmDqkFQGnEXHM6c89km43ctjWHdH8",
  "key12": "64Ttz67V5RXePFqZUMLPiKh1T4UHGwAhqDyVGWyJH5gzqToD5kvEigUxP4c6Yd2xbVRfyLHUtEqqZ7DVu2PVm2MM",
  "key13": "2wzizFosbkSqkNEo19YnzBusDmmGQBcS3itZVT7BbwLBbQffk3om61Avuy1C68R2Hx2wjnJ7tcf5pxLW9oCSafHo",
  "key14": "AchSKu591RYZbuUyg9rZYedrCXdBdp2RACXZJUwVQdNP8nydMQaMhFfu7c3SjVjaJmy2J2NDjEDwuks3iFEdLTy",
  "key15": "3D6LVFu9ijmV289irXu4yHJiieb7VWpN5NtzAMXHhZ4pWsBvJvHGaPyPipN3h5NWMaa2ufg27DXeAy9XkezUFBPf",
  "key16": "22b8LQzixjNYZ8BQU1SrHPpyTayrHuteXbjkV4TVcWt96VVuySCLsFu1wcAX945dPXApbqFBnS88Zze2LNL2Zrzr",
  "key17": "4p3mw2pQuYnm9PJvSHj1nqudbh2PDksgeXqkQsXvmR4NccXdSs66pA2AdRyx5fVYCQFgyWX9CeFf5qn3Pjcz7Qh8",
  "key18": "2fjrHmfxCC5ByXLYULPrLtqoS9vytJUskVmfAy3npes5Ri8BjeyuXFj9C7pJTE94pWSAoBVd7rDpbPjwkQtue1uB",
  "key19": "JkEj6XBfsRoKVCxC43zKBZJTWp6UYRVcPbnDPKXmTKn5zn5QqHEkNVbAiG8yjVWkMYP4eRSM8Tyafr7MbRVpnh3",
  "key20": "2vNic7rjWGrFN1FZX8nfFmmgxWHpTcjG28SpRDwTWMFrQTeSiDd57f45vh4n2wFCxRL5YJBw3xXofvbMXfXYrYSj",
  "key21": "3a6vPQB3dS4oYxb7jBvERo4jhTYBfyrZpLYv8CocruzHCVT9jhWmCf1xQKEqZEQKdrxr6LyfaRXDWqxfVxcFStfv",
  "key22": "3ye7kw7utvzgAKcGq7g7MS9ES82PDDJLPnPyvaTwUmartBzNstkkPyMvHWtMDKQ5ujU2fvcrcFqZbzk9ycGU3xX7",
  "key23": "3W8qjgBzGSrw5WuEJpi14CVBufw3jW2qUkXmyzuHjSPjbBEjPhYa2LR2toCPkeRBgWbjN76JrH7sKeTCmiDPsMSD",
  "key24": "2dYQTD5ubFT6rY2GCN9dFic4VBvA7LuAW9SxvAPJWFpxaquXGQioPzBsnuao5hFV1Z1sMJTVzWDUUqD1oTXRLYeo",
  "key25": "59MFir5z4dJDfbiponoE3HXeB3StyNKx6N9uKE7xoLsEUMVdmb33uVpg9RySjZgTwyeFY37Wc5zpYYLce7LAJFg5",
  "key26": "43KUXjYJNh2eZ9LvA3Xy5rBq67D43hmkR53oeaVEK8WWMJxKCURjRaq1cp71gd9jpmAkvCGZ9fuiTR6FSyHrt3ri"
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
