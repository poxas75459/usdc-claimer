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
    "2MDP6aeK9GfGqW5ufNcxmPgMdGdEQog87ZswnCRXWRTv3SXAxpoxYMdxFSqDvhCA8jYpqPGuozXFDzwUHB9ryDjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z7bs1Y5VnPA4xU6EMcrSLAtcHKkgokUyoYPr26QAmLej87U3yGpGbTwFxyr4Nj9o8n4reqc6ZeFdHv4yFqKfqSx",
  "key1": "uTviZ3Ra5X4KaepSemnznjk2JKHm1ZNMXdXTLfv74UXyEQJNFGNS3zctoq6F999VDw3eUf47NZ88p8PLFpjNPfu",
  "key2": "2WuxGFMNLmtVifSF5tuXGhubQ37FopvBMt9uF3NPkK2BqCMjsMxu2RKSsRhVjefFJT6MddTmhLNgSiDSTWtWgKjr",
  "key3": "3sG9o4ywtuE7qt1g4ayxh6iFwPVn2AZ5LAKoREFzEG9MGzjPX4borGDkiqVzPqUNrVbEDACWWf9YdQNadFfuACW1",
  "key4": "3YXXQZajq3SqMuoyR9ntaJDZW3hxKQn4YgYiWkj9UFm6tqtYMJicUEH8yK9P7oNzPmPQHeJ55mVL87FUg1kENDua",
  "key5": "4SHdedYpKuFP8Q2aMYtuXwgb2BHzy8BhcasaaTg9sqTtjRzkXMhNpQepqjy1RvWTFEEms38sPMHQnVmu7zx72BEW",
  "key6": "52yTZ84aedvQUNcDuCfhAz5qJVSYYrCw9rpws7r8o4pryLQS3JDyRPVuC8tUwU6QpMEEEXLbttNLQPsCAmgJm1aX",
  "key7": "BAbT1TW5K4sdCWJ4BCPwJy4ERX4LCHFgLctD1zotqsa3imy1Yii6iDvdazkXN4Yi2RMPvmvzMNMKzQtbaUdFC8L",
  "key8": "5Q5kFd8RcoCt2PK4mvj2FRhEKXSjzvaoWAxgrT7WrfM2rAwYL1K1K5MpxSCSEFp2F9fz8AhjK1FCqEqYVUxB9X6o",
  "key9": "4brgqnLmuHQxdgFJaEzEcTe4r5VbNMqjW66j1ZzDahGe8zGzz4nDVvdWdTrQSVvK53kTpEGyYEN79Xgf79dZLxLi",
  "key10": "36YbBBytSwu4UR1RqoLcYnJawAiM8EYBa1x5Qg8cG5c9tUoxtajFFVZDsiLT3mr9eaAnqEoJn4tZnbbTEfs4v5pL",
  "key11": "2EAtwEQUnSKmwoS2mBmnBWYsXdU17pBExHe3ch9f9fJyW2oWWNZD8wWYjZjVjTSSWqUrnk5Y6Hc7BGdgTSHHM6xc",
  "key12": "5NTZmeZFVMitt5uAV936Jf95p1jf59ro6LCPFqcBz4mwU8kp6ANANC6eWWo76zf6igQXwW6s8gi5i7pFwTEa3PMQ",
  "key13": "Y92ZAKffSxLJtNXZ7iakk4PcwvQBnYgPe1b8yunzxzF9vntGZc6ewAiN3NSAfRwiV26BcLAvrhriS7eP4JddQzF",
  "key14": "4SiUNeYBT7BpeNdzEjWeaRCKJCkhPpUzC8PWp1WGdGQ1BLzmB81Hccxs3j5jWSXSddtJ5P89u8VgP29AMktWNUPZ",
  "key15": "3at8zrRpnyGJ5q4TgpRk5dHByB4nCgUTStUMxX5dMBmbSr6dRUwJjLuyagvTrmZJpA7YwwXikZkoL1Pkt5yMXskm",
  "key16": "5SZVgmMXXqBLtG3FEE7MMECVR8QhqdDg65ean23PtQSTFQ44kMpzWtLzFD7dEJnND83PfLkus3bzEwoH1S7qogXX",
  "key17": "QxDkFAecrmSEDhMiRGMVAiXLpYxEA52L549e31o3f9rUVNuh1rVSVZmMyGPW5qPFFwpwJdQsiYnRt9ATcWw446v",
  "key18": "5hyqdfXGY5yNLjALcQYwANDJmnRK9eWGn4dYhQD5K6rdYWmy9V23ZvMXKBAtB2GnjkHo2fGY9AiDc6FDgsWuPSBB",
  "key19": "5R1fbMi9hdTmgsqbX4Y1r7Zhcd55MWE4rGndWEoAK3KK7b9PuwDb8ijsRo8Vbn8E6nT38iV4sdQvSrxccyoLQ8yk",
  "key20": "3iJw2kkyyBvdL8sDNT3cFJTur1Nd7TL59wqkACLCquZJ4y6pdvG1CDok3NSXoiwbc8DiNgDGZBwGXzKvw7Ci7dH4",
  "key21": "2wsSnowx4muk2KFTTNEyffUbrwykABa7cgG9nNsbGdjhK5sM9MdJcBLsWaNd4Dq9JMfPnx69qhk6KLNZ9uv1Enxc",
  "key22": "2vgpDZgMp2YvwT8qm3EVUnef9DC2Xv9XpQhhdmZ7fzqpiADttCP6ZurNgRv4iqLMDfKtNhqtNuuC5rDKcPNtK6Wp",
  "key23": "abY42iGZEQzMyWVD1jKjHmVL4MLKVJr5dAsGm5QQWDNc9FuAqrbvo99LP9Tn7mVyLcDrp45wcXD4WuZhVg37bHn",
  "key24": "4VmjuHKWZQec3u85jzbShcRRBCYuBX839aZZPvUgbkrQPzdp8HdGb4tx7W6hh24UcEwCy4RYFyrXqvS8TGPmCU5h",
  "key25": "2LEjdS1S81L3tgKiB3QRiLm6icsAA485BDU4bgaC9BLwC26wtGHW8jDwY8tjN53j5Zxs98NdMAK29gomvDDYaprS"
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
