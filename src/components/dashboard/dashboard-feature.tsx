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
    "35JbStvGRwfNU7hDB5xVeGWjDVctazMxCoHFm3oeY6ChTBXHz1xMLUYyieeZ45PxFDqbacwhFZYUiReW5Yfbm1wk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BR3781U4yJu8mTZwEDxTwhF4p9uQLnjyhkTGJqatizkVj1iaxpsqcaLqYRx1f3xH5KvQ2PshTzKVc3T5YJtWZJW",
  "key1": "KRYqKt6Hu9fAcAFgFPJC7euQzYALuYpLp4h4pPv1qxg38kRh8Aix3PcWbtgxEhxWsNQTWnhMyrJDCNgNctaP82k",
  "key2": "VbsR93mJgV6EkhHJxkkY1cAfAfxATXchrx1WFQ5CyD62C1pBSZVmtATkwE2jdBfckqmEcNE7EbHHsqEVMbA9pWA",
  "key3": "2ZWsrynyWBFWNwmG8nSEURZ6D5xe1AxGnyC4Devg6zBb1KWXECzbU16R9gzaimTn6aDAyyK5H4QUWg13boWrsyMT",
  "key4": "JMAtpmZz5tDkc8vLFdtdFk85CQyFB3zhzokEcqKUo3naEnb3R2VCCAjgFDAQJwSCzWUvytssNEDbtEHVezHituu",
  "key5": "LCr2Zys1yQSNL8s81BbktPjZLF841fJwcKEBKUpYjkA34kavoNEGipTTAfybWXx1LUVQVbdMtW3uCdKi59XDpxB",
  "key6": "3uvrGTMzZ5hyPxzSXPg9fU3Hc8o4TWQ3Q3ncKX4ckUvpr7dqZcVMUC29o9bdpAF2piBk8arYuwi63D4uctJ4CjLV",
  "key7": "2PDUz2EWWoDf7XjssdzfR9XVGFrjSBzMWoSVnAsYdA32rDpoj6DXhjYPAF5qVBUKaMNpyaRuAWA1Yi15ovtD98YZ",
  "key8": "2M7gLj5wfMpAqwtHY8mmp97MNLDxamH5Aj5SdYxMM47FMr8W6eQVFa1wHb7nxMP1KF13mdYznXFXDXRmMpH31aEj",
  "key9": "x7objBr81t93ePCruuX3GCHsTFJiWHoB5rVpBK7QLrdasHpoukhjj4FTXNhh1mbCzs3VtfsgAtGrYGij2HaVwrB",
  "key10": "3WtGm9PuGbxWNF4tS9nxFj4DYWYFtHBTPN3T51dPV4PahEZFEJ8wGfgd2NQzdNebVyQVg7PchW5x7Uk9CPJHEGgT",
  "key11": "LeH6HHoRFUcCFv3nXyLDjAQbC7oioiKQeE4CFy6PN5fVdjqMAYb62z9bHRQaCaU3dRTq1bL4KtAsvb5od2BmjcG",
  "key12": "4GDDWTpVcXWjA2BudsqPGu8qrW8yZGtnLtdoSdqyuRzsVjo4fniimT61AWDX3iYUqiWjdAAZswsHii9R59ZaWbdM",
  "key13": "Uw6NMg3BxmGrmjCowemKNogLjcN8kqqaWAZCHeFeDygAJPYkXU8vCGY5ApGsJ2noR8YzThxrh72dZ6qXcd4LzXb",
  "key14": "4TjokFMbRwWJGfnbGBWkXUDpfB9yxhubW7kk9zyuWF4NieMCP5BuVDTDmJtEdJrTCXZAz7wNubcjfa3cZWQV5eZv",
  "key15": "417SzxzpfVtLnYq5f85n2pbp9dKN6JZKXqBNtkxY8UQDebDyjno7HsJ9qPdxf5THN32ZF8CtNPpumea8VdaNJTy6",
  "key16": "5aRrckguJEWcGLycMvGMKdawfLu4nng5z8qR2nay4J9gnCEttPbzWNHp4ASELuLyjSVxPywhVq2UHuAjjovvRnwQ",
  "key17": "4G2RN3tFYmsufTh2iEVKmJcWCG7CnQTLwHMHSK3U8QUZjWbrB5REQtCKSkcZGpHpCnM4aY7KeCPsDZZwsAif7ttH",
  "key18": "3A4VqW2oig6oYrrsaJKusou6uDDvfykwogCjsjy8nVr77dwPMDPX71uvx3Mj9NqipQxDVtUqG8fzEQGXf8MEMzKb",
  "key19": "3sjFMxPrjwtZhPMVmJa9VhDaApG45Zpy6Dbox3RPgYphbx7wTNPTbdyXWfpCSaSKU3qvtA4wR4q9GNFYYkhLP74K",
  "key20": "2EwQMSCRb6ePi9zzvVsyJ4QsCBynbJbyCg4BHas3gPPhfLVKmiAXPYgUcmCBMNwu4kMBAJvtfiGroH3ax7aBWHwW",
  "key21": "3HR1ui271GEEmoMG5L3PENzSzjqFTVo4CyhAxWE1keK1ZK6The57gqGLBmwN3NpbETqHtPeRiE6dWskgByD19QEv",
  "key22": "k1WdTmFwxPPhWVnybr9tUxBRWRYbsYNJ5NWeYYX3ztTQ5FXAurUGsemkmHL33pTZsZRVTZzqmWr3wDtcAqD2GxQ",
  "key23": "zER17VQNtr8cWV24sSSqY1htGd2njuMP3VQzZEnrPFrRJyhkGvHnSzzVg7t4bmbDkqsNG8DbRpQ3VKxVxpaYDne",
  "key24": "dijwy4YLECuREm72NQCDXLG7qRvkewP4FM3DHNioTSusPqzPk9U9CANj6BcknMJCMuWrQBWjtSXW2ZDANqb87Cj",
  "key25": "4MBtTFuJu2pDkBkcb7tANoirRgnpRRKTvXZCws4JEz8jCAm6GKjiu7y9G8qS8iVkVEkkY9QhTKXn6iN68F4FRPFr",
  "key26": "5Hr6nnHE1SU5Sc6itFUHsWz57fDXp1jnSgfhBWmdZCiQ6niaFgUVQvedGXwhZSh3QiJtW5W61NQEhWWX7NykbFh"
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
