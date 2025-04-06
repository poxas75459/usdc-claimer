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
    "7YbEBCevqbQDcR1Lt9PVdwJS2UEsnHLUrHX774iugphhxuWGm52fvcfKxdJ4G9xri2GNsaAzVfgLVPKrf6FMhmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wo2j4vCivmXizs7CZvFw7LPLdrea2QHGjUDZWHkvqsLewLTF6QF9FmgBjuyqgRAyNPGqNbcFvfuzy5pyimZdQjX",
  "key1": "2MS9nkW7Rnk9YyBHxoLNHPc74ZCt7ReByPaXkC3mc3PFecuaZiBeSpkfWnGstujSrAzpx7PMWjoxyUYBtWhdrviZ",
  "key2": "2QmB2HRvDaK8acGRKgXMrZ3B2jVJaLekAGqmXfoyt2giRSW1rLesR5hQ6baBMSt26UUxMfDRQnebJnDPWUN6D8X6",
  "key3": "2f3fg9vCyuqHhSssvErYxDKXuctxGKiiBpEWBTb8ZdA5rtJkheT4dZNKGgWT5xkGgUWXanLsoRtoMaDMBz9zVYER",
  "key4": "5V58r4jYsZLzdrnDPwWGy6e3ra8qV9qpfnqwqnGea4HC9xK6vymuFmNkr6sWsS41BAoDWrZ38ABjwXRgev82KVfR",
  "key5": "vqwjLtWgx48AfLQyHPuEh46f4XLAkFSQRZAG1dMS5HF7grMMyPDQBGXoRgRy7wTaJ8bASmsfSqrWRfS2ZJcvaKZ",
  "key6": "4udZkgAfYJQgiSqJjUJRNp9v58nNSG7FM7sepabVKzcf6nojNQqsohy8HRzr7BqTjUBCZQdc3LrXdvu4e6rmPBqg",
  "key7": "2jjcQh1voHket7XZTUY25GkFzgh8Jnokqkv2UXfpEK5gNJbgWkGPDStzGuUcX6SDbTnKuiTykaxmgbL8Dzz3JN75",
  "key8": "4DqTVJ8eS4o16fdLR4HrJFZ5XFtstzMMLF9mEfp6vxKebQbQrqy8nw9Az9P1UAE4voU8rzXWyLTwsUSnwkNUSqK4",
  "key9": "QqwXNeDPt5idNUkFs9fr1pt5TUZ5CxqiXxG9356V7cXm9Fu7feF9VDPyPDCV3BbAZrCzuWFU66gTTXjJiX4TTf7",
  "key10": "35pRYDeTwkoNPCLqjp1JGxfVLp7KFpjn3BeifCqNSDQrTDh45bjw6HcVXWWbgJpAP2me3yQT5AZHyNRQL1wW7mLw",
  "key11": "4bjQxi7KHd6t2KANv7WdPtrUtZW6TtRtxbRxuqCoDm2mNTajSPdWRatcgd1wqG5Y1gNBSKGPbmSyxBVWYa4qrxP2",
  "key12": "3CKheyj9a3KhofF6ryYPJ4k4kDWZ33F2mcw9L7DaSwm8jAHVnwaQJRUxNAWL8kMi5xE836cyxL71sdUDTJyHkauU",
  "key13": "5CJFQK4XijxRuivcQkT6Sook82XgBdh3R67Biw2mgYVcPGeyopdoVKxib224bpSseq6Q2uRp5AcgjuYNHUWQeQw2",
  "key14": "34BDx9GATKkq4Q6dTPZAnxxmN6FE8yxVvsLcHtWAcZwX3G1FrPnqSa8YZi6XAAHxDFXBGhLcW4Y4rPoDF21WHeB2",
  "key15": "52tDYAN41kwpCWtBTeZLwSU2KniVVwc6CJDykkgf9ZbMWZo4Fca1x4Pad6JiUGFWYezgNFsccHyU45QdLA9N8iBT",
  "key16": "2fWeMShPoeYzgQfqBxbwLZaAVZQBcxXfsw4V4X96FkRu1xHqrWLb3tuzPRcqXeE7fPeVFaa3B6e3BjkMfSzD3jQz",
  "key17": "3QTGBmt2h1E1xT9aHpvFuv7hH4q9fqbB4igLAdzhVZ1bENN3RPTnVHcUpAs3v6UVa83TqRbCNAcEBesoiAyy4DeM",
  "key18": "5vRfMeKwMMijXkYKzYQDpCvsfYFfkNqCnoSXtC9Jc57wqDGHMFaVKqZ2Ejni8XZfT7jpK73s2QFm8VbzZ27rHJ2f",
  "key19": "3BUSheQBKYX2zDJj18mpzY38xMWU6it9WYa21gwDiiJLsC83nopqwYpYUwUKtkUBNtSPB8FhyBVEJH1pWQhiM2MZ",
  "key20": "4b7DZoTgkAQpAJwLZe33ioPxRCSTdBXJSS3wn9kC8TGT27YNBbVecxeJ9aQDteKcQh4k3sRCPuxifo4srocP4dQ2",
  "key21": "MP4mW6UFPn7xygyKWqAfproXbqbKJd1XwM8Hcoz7rKpHW3ssGAJKjf9uTx2yHinB4Y8i1XDWCcvesfiA7Heueiu",
  "key22": "3ueV3M6U2wmzN9caTvPTa1gXJnatG1cK83cLKx2muMuA7jtjpxTVZERGHbYnJyvTXjQb7n5g9uBHv3svTT7q1Zm8",
  "key23": "3w82ebsvDEyiTvu1nmdkjddvsEUdctFvvXQ5y8oV1ME83nfqFzKJYXvDZV7zzzMGodFDoANzdYM2n5NE8PdZRF9b",
  "key24": "e8sbrLAa53cwLCYo9EBV9fyyNaokinjhXkv4LR3ZfJHVq3cSwouTYJ3iskHGjpg1FLDsBUZoEEUjoJ4qFH3zQ7r",
  "key25": "Re5Yyz4cw5AatjgLj32C4ZMm7mQCPztrfeP4vuqAyW6mMogZjFyzJVG18r3BoHQREyFD6dEvAn4wd3rbGmJ3fnf",
  "key26": "35eV2XCzc4r35LNNjMcEDHBkFzq3yAzfBz1NsQ4y66U8fLEfBMPT2STufGhYiAUBNRPb8XnK54sbpxLv56iSjPSi",
  "key27": "5BxHtKGkcQtw7m8YRQQdM21VXDc3EhZ1m5mPezEvjC9PW85FBXWR1csWEJEtC2khB2ic7nWjHT7BFuJzyfMpueQF"
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
