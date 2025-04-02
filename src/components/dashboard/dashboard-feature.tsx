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
    "2uJAxAGPwEsMVNWuFt9qQLNUWpzx3jeUvjnqywZh9i9pxELvMYJjBAdvMUJD9pk6y5gfoXsG4iYJGaaqkU5kupJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J2ijXEKRzKn9QtYfvVLp2X5CorWXKPafy65uzRJ6pK5ULuDt9NLZBi9t8GLz7WYQMoZN626Gtfvuv58ZhGUSKRs",
  "key1": "316UrKMKnzcBVvsaFPMjxB6khBU1Rb7FaM1T2mi9GoVLUXrT96MHvuDfoUSAp6PGTgFrbrvtu75jn2BCxvn7XE3x",
  "key2": "3SsVSXiLLeqbhoSQ9FpWD4fcWaRHz6UFMrbLJPoKfytzSDV1xvHqYyywS2mo7BPeTh6tHfrVGn5q4Rf5x8DFoUXg",
  "key3": "41CvzGRYbkZysXgQLNjzZejfCBeHVqR1V9kSnrc9AynvzBfd3UD7s5xZFBi48ZAWfjZyf2Zd3WC8C6od8fDdQn36",
  "key4": "4kaFRfz5UZAuLcmcNn98JwG5TfgyxXE8jE88mooeqW8912WcHNcu9eT2dJDhbNKC3jueTutTMYtSkLams1hLDoXD",
  "key5": "5YXNcmE66gwUmucqXXKuXJwQpwUMZd2LLdZPRo2gv68JqAhrn61mjA7rxYZbFq8Yuks68uXhpTno6c6aYJKSXX8G",
  "key6": "3ESfMs2k8P8ZK1FKvLNtkvHbBimeC9D51SFyEYS3mocjsfpbxZsYtG6ednRb3R3hyAyftToeYaDJVWbYAb5A5KzN",
  "key7": "8ZGJ3Dvd3J89oPQyu6RsyuBZX4xR8U7aWdiJbNmEPVtyiQ5v7ohycPYqhsHQimdF6cbss7W8Z9tpsE7kypeYDSL",
  "key8": "3vzfmARFgjJfd4Z9j5MRLJaECByrg1hHMqfAT6Pq7g2oxjcDBicHfAxfMoQBGyMg7z4XY9LpPgJe8ub5CkF9WJ5A",
  "key9": "5R8zTrDZqV3c5NdWEVYiFf8xiTbnWRcUAQmh95yjKaTdmeXgqUd8JtEVQjPSMYdPEegiRQXefS9LTbywBNvaHQ8v",
  "key10": "LgdWPjX4HzVeEr46fp5rKABXi5radYPMd3YfnSyyQagj55QoLbYbD6BxatP4ZmNRgtEmaE7Th9tvrYHtcbidTrv",
  "key11": "4RwTnuXYYm99RsSdouEavmmZb8S9EtkFbqbUybx87TT2Rh4aPSY3mL2KtPqwjDK98eGp5wmTZgjPCpuzpD7vtoZc",
  "key12": "3ync9EdCHZnQh3tSQevATJEhsMR38QKRZicMWtSirdPxGEeqomzKCHJM85PdpQjcBUCMWZGyPzKqsKS5Yz8fRx9H",
  "key13": "DydY4Xq1jEbB2GR4gKP7wXuggaGRDgX7U8GnZnszV3x7ttXtC9sqtUYS38B3LzWPoWdtEvVfQHQyC7MrxwGSpx9",
  "key14": "5QbQz4KrsiDxf3EPdThta79Xmcm7HeXce38fhLwdRE6ATXLzLx9ee5pnXkz4fNPLxzvijXyKeaP4ggbPcmB6VLGV",
  "key15": "34znU1Srn5gb1ozpZwQmw8gR32NP62T4USxjaRmFghAHARnFQHHBnq6WrP6WRgeB8NtJC6ouk6YhUK3nNFWETNfK",
  "key16": "5XYnnDgTEPvbJfEYoFMqk97ZMr6U4YnqnyQymJY9MLaW1uabkLTGGwT7LtsmyMmN2rAEvTkwdt3qxpcfCCoV8kfW",
  "key17": "4jJ9CUiCBme83iwVZKYJ2Be8Ab1MzvQVfhzZMoeTKXcv9fJYSTUaVFm1r7cQu8QzkoQQekNfiaceWEZrSNr6CbBL",
  "key18": "v8Xu3ZrjsXU1DEu72inrPkqJcravUvuBJfUcUbsou2MUToPRj7dQDzoYqWiZEPufCcFFht2kkhh9Cht4GVhXjZi",
  "key19": "3A5VS3UYESfgVrQsr6qt8bepM3m61MqQCRmoxSivwCLHrrKYuA6PddQE1qQvF5v9Aowv5enoteLpvaodY7XRCEnT",
  "key20": "meVcGkxR13d8zmPLvnFRQmXR6Ejab3JBzgM6FbWgCmtbKwFaUJVgdGj9cxe2mVkZYne1d5f4MXASX8zMxwxbTCa",
  "key21": "2jxygkWni4HDhjFqczCmQmf1PcvJDoBZzNTwAPSRZJxoUYtQnrJz677tnqtASBfp2aWfiGzFdcsxkBgxstAroLX8",
  "key22": "4ViAgfyQZN7ZdnZEnMTHSB1YXfwxAbgWEi8HzEPX1Et7pgQc2mA3q2AbQfuhh5ZwiYudLZtHouSwvgZ2r9fAbVuJ",
  "key23": "32wPbsjZVUb9x6TMjeeDWXeKNwmnkYQsod8kEeEghHVCvJNABduXJcdGVywkC7zoJrT7AidJm1zDh78hhAEdDToo",
  "key24": "TAbBks7fHqjCkFY1YFQwthSL7bjZPDFcmELdBA6ysL66bPiDadxAqSn3z8rZNFxsDVxrnQNfyDf7LiNtw4SC6k7",
  "key25": "3AxCcc1jsqLnDE7erti7TdAizbzLSocayWd7TMAGGXtJKcsPj74smvHYsHd38vpXGZecJx5pxhusfQDxPshBqked",
  "key26": "4ppAq5r1LaBrSFisJhACdrgrB7mYLP78yL3SPrDegL6Q8T7irczM5TcE7z3y2Zr48dgth5syB9VX1nwg8hJemCy4",
  "key27": "4WECQxhfXfgePNFCx5kSLUAMdb75d7y91HoBmL5uDLHs7gjVQv2iiAmoM5bSVuSDiUVRTcGccfTEsxEqYYcS6dos",
  "key28": "61LasPwvk9G9cvFeLPrrHVzmSWp5ZTXPFXx1YugA2TA59nqHHV7FeKR7FaQtYHdBu8szbwD1nAGesXR4wz4tyGyf",
  "key29": "31gNB2KsuQMJmXpbNunK9cqe1AZStrqKrCNQ4D9fGJyTBSVrQWaho25Xr8BdtcoWpdqdh5Xe4SMkKBufUiwpVXoA",
  "key30": "3zjhQAcTX41gT1w8MDXnX9uieLAMHCqRBuXRod7u4aHBdUoVYMdThrLZGW7tijYgcbnNnzcw1dcrNtuRAxipj9Zb",
  "key31": "5GmXteg4y1GNyiRLuFhetSz9t6Vqe4VcBEiPyEDzrkSJFxkacwRvR7c9YRHu4ZQD2H7M4omM7ymZ6rK7Dr74tnvn"
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
