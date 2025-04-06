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
    "3MYMHUGvty18C4KLK8mPNbwMXSpoVEEn5m8guKYUtSvAgCrzePBww2i15uSPBvZDKLpHYcwXH49Nn4E3v9JmJb8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uUCPN8iSa21TwTeVcxPnfbdymvXw95ifZ8JwyRfhhJ4oN5HAJxeF8cVddSBfrGMCdJxmi4oh8C4pMR8znLmPLSZ",
  "key1": "qYok6Sui6bVckRwJM6ctWEr6s1pNSvXwCNHw5n7pstKnaepbSYVggfMgh2rZyA9YtnwMrNuFCQJ1dHzGt6Lar2K",
  "key2": "4krCoqhpfW1gd6xkTkvkHwSZ1gsaomCZKmqZgP3PFoPQsSybDKTqt7SVn7nrVQaCauvZoCdHPsj4wxLUtFu2Qvnp",
  "key3": "5cURVjc4MjVuA9VbzwVaXoH1jwhHdPEKmwoBoPCYNv8WFtR2YR3jmGHSKfyzRAGCdQEvqR1RvDK4AGH24hx6S353",
  "key4": "5QPJCVn9WrbTa5SwZWkkeZNaQSq3vRRFSKcoHFknnTmfXgjjqspBNqGcqbqgsSbknoLM6uidYcRBf159yaqbkW4v",
  "key5": "E8XxJJTD5hwyhyFdKRv1vBX6mPgpS7mTggrbiCQe6dRckCcVgj1yERMABZN12v1KDuunwhNtcHeWhrowAoHQqSA",
  "key6": "3WTXgrLzXDP5fCwrLVhTM5Uy7mDiLgqanyDeBauf89yMvmWNug2TF1D5ZUrPUkES6AHf9K2Y8yMYf8LVup1m2uPX",
  "key7": "4HGyr4Qgfu44D4ggrgF47x931vwKyTx89Sv5ep3aGyJkGDR83R4rJKY6nqMKkF5QWs7D72e9Yvhqj6UAm6uEdfKA",
  "key8": "4mvNTJu3HLiDyKWczv8g7MF1WeA5h32YiJcd79YRo3xiR1UUQMBVqCPt4iH3NiBqj1zTQgtVbRfmhEtq8fnxJZ8f",
  "key9": "4X2CtcYNWZY49798FEEAiE2darjy79B7eVc1jF9vcgFNF8VH4YFWWK8ax29jsyLbb7bauPQSdco37oY53tZm9Bzn",
  "key10": "4oZ5FJcFryNqG5FEpAaeWq6ZfGkrjVgSDbmraaFW3KP8nUbHPL7BqhAgHHarQeKQj4dhtTZp67nB2hqM8oHTDtzv",
  "key11": "4P5ZWW9soP4sVFzJWy5JYUUjaJ4h54WNJDnwnXPmneRWFqbqfTxnqKsiR5S87vGVeikUj9WwA8NZRFnYXMZQR2ev",
  "key12": "4EYjkB9BqTXtENksXR5evE1GJTVESjjvv7VgF3UVN7Wjk1wHr6W8WjmvquBtDY3RpPtr8vZrWCNM7HDDMsZ95udC",
  "key13": "2PhPRW8UUjBNKacDLZ6ez5q86FqNzZ2qisSx6FAjz1Br848RcSRKw8ATJEWCADpHdU3i4UwrXDa4xikPSiBJJykk",
  "key14": "3JXYzexxAnZUDtdtAqdD8LQoo8rFmWUp4RQpue8sBZSMHpJUgr9mGNRm1dmogH5Cq6acCbv5SKWgFrzsA2gdNPRs",
  "key15": "5sjbXsqoS7KcB6uxzhUHSGEFqYbqpDpzgdFkhPSjsC5T4tBRA4czDKujkgnTrDrLCazCjtKswkUhRDS9BAXhHx5n",
  "key16": "42gnSXaXBziT9feU1VKNeBsjbomynktzPFBRR2NemNL3fun8eKZSqE3bM49XQhHqBRhFrfoM4RUmJj7yGoPHvETQ",
  "key17": "5q27wXzy3uVXc5xCwzb3gYmrwty77g8zVGfiDH6jSWxHbURDZfoezonfMf3epZLuGcrwTvZd2vQCDSHod1b4qG8W",
  "key18": "2ZkoFeMSaRkinQ6p5UdgFUw5Ls2fPRFiqVJ46cAXSDX2vgMjxj6NYAbWYdJmmyzN1rdubSiLXdbh9L18vodqtfXa",
  "key19": "3cd45dfKjcVejBypFPSWpkGB8ZgfuRSVvKybX3zDQA2fMmdFkANdXCiuy4mKmnNcmn8LTFhjcyMg3R2H3zBqsbXG",
  "key20": "4SSLrcyn9s2e3SuWtCpNeWU94cHKABfsEvr9WCGiBTp4SrLk7CEGa7vnn1zbo4NfwCi4wS9fohusXH18Ei5zoKBd",
  "key21": "4NY7jSJ6uK77SANtSF6eipZBPfQgKNzvyK2pU58htpEiUFtRU3qa2AsWNADCtz8XY1zR9zP2Fvc7b2cY81ZZBXMm",
  "key22": "QAbpuNjLAfCGoePywWvPijPdQUYYj87BiZMG6rZCtUf9rxewN96Mq3vqxkP3DzsWkync3F8KKsAPfEKXVbjfygk",
  "key23": "2TrmDyJkD3yJy2RdJzJnQ21CXpRuLsgu7ZgehhnrxkxvbYgWFtdLhGGRDFR9pTvAeZvVdMxtCgEQDHD44TMRhH4h",
  "key24": "5KdfsRCpcjRcvGZTr1iAeSGZupe6bq6bN9muRBZeJyG7Pg5ucQS7BtrnSR8rtwPKT6HmeL1S4nyT4c4HAJ78VxC9",
  "key25": "3dnqmA8zHtx1p9Sn44iJvgLzvHWLdB3XegEfkV3maxKXRAkn19czwobXNowgJE7eieg8v53J5ao3y92ZpxUheXEV",
  "key26": "4tAgJzPBY1ShGwfAKEMSDrYiKMdUwCJoFmqJAauwFfY2oSRwS2LKweUKowLQiutVGYJRhp1iiAjUintUtn4JV3ke",
  "key27": "5GN2TzGaAcbdNEK8onEQGubCh82V8dFDYL6qQRfh8vERLCDtDVFo6TYBbWn2TCTiRCCVXc7kgsM9zqQDuNVwzTea",
  "key28": "4U7ihWQo27KwxLQvu1VLHev69B84HnZcrWf8TLTYiL5roJXncoDtgZag2vsig9bopwX5C2DV2qB7Di277FsbafDi",
  "key29": "5sKiGFNgZkd97qjdyJJogordiUY2ZfGW1U7w6bMF1Vfzi17QQFAX11rY7PZCXNwudEUR6yjh1m9Fjzxx2t9WMWG4",
  "key30": "5SKZbVvjLZpbd7v8o2SrPCJPczY9Q1Bf8QynL4yq3Wosq9fdeV1DExtmcTh3nhiAECMpTNJLzNkpeXPetMyF5vbd",
  "key31": "4Gp829w9JGRrkabLbdi9qXKH7SsLtEUm8jpD6sUwf7sXKf8txJ2iG4MgR5M9vZYS8bkXTnVocSv1C5bfdDnqVtfX",
  "key32": "5WFiTdwuyX2bFdc2dHDM6JM3RNGvj6HaYGwUJjM6K52ueW2mDz7Uu5bYkPDQFmpDARMPrJfz9Kscqaf7DQpDy992"
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
