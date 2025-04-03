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
    "5rdZQcNqd7D6KZQRSuCT2mpVP7B3q6hjoXibs9Cwzhi4GurRyuaa38KFyBPVSnkSLJt15V7mKRgFvvxnd9DLA2ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n8JewSe5PKtPPaTzVnaEEEi1mTgmJQHkPj1bXXKML1joXPc6UedqyUbB7yjJSg4Jik7vfJJuQAajP4Bd1kW8pxu",
  "key1": "4Ws5JXsyEdkQHn3B2Y5oZdNjUjMVS1RQofXFydsCxENjTQRx454crvaXo9g6Q4yjasvT3LaTMoxxa1tkekSHr67T",
  "key2": "T6FDmF2vJVvvcb2vjpe6BeGNRwiCCa2gjh7bwLE8AectmaUWJ4uLC9sGSVVQVW2oRwbxLuVqi8SK12NNNuLBQpG",
  "key3": "2zCP9aKA4HiXwkBnVKz3zodr4QMpFcMafVmoskT1smiJ5gZNb3b6AHtyVrPPZkPqwwtbzBwYUvXV116caRdGgkM",
  "key4": "2iLCE6wCVQ1wyocmWZaLL22uyApZtX3t68k3vaFZCGpbhGFkEoyhC9zoWGDHosTPne5MqxZCjShy6hiQRYE3X2nA",
  "key5": "2Twvd3WizDwhkrqYGtA4xD22NQHAeKePN68FfRC6avU1H3EhT1RRqaSfgv5FWw7CXLD4vhGBhVPPcPkNLo5uLB18",
  "key6": "4xG7izvUUjLsCT9uC775pLS27tL7mGCtAmvx8y8vmZZ71rbWqBSXUxmZDKNLFHmfuCv9KB3CgoWCRSMZ6EUc3Q9b",
  "key7": "2KYVKPQnJsUADtSmz1qKHYViJcvPXMwZGo3EmKuj7bsS3qyGb69HFMgB9dCyjHE3Cn9txmikWhZTnxfENNYrPsU4",
  "key8": "5gG1hdehZVk4JqL3StrEYsXc4jx1yfUGGnGrikdjzBYryr2wkhXbHtzzr5AK5Ds6YheH9bLsG6kKEvHuzKGcMzJE",
  "key9": "4KEgSHS3B81YEZuMyqs9621wPoG2myX2zMQZKgaM92d6bLeQFj7i2YyjoziXsoeTp6y9bMmRhQqzFkqoLSwEfYy2",
  "key10": "3bcmUZNDgQee9ose1hv7A3CgQe7eXDDKYSZqJwUGfshS46KvC5d5vZbmPsypsR9J3UbgumhUMLeDRvkQACL8WKYu",
  "key11": "493wSanTWGU77UcHy1K5RnADSd26rv8TPk7i5kPpEn4oRynYYiRRQGNvPAi7UiZXwc8tVief68dZ3QFbRK4WnZjC",
  "key12": "3kgxvJiQixdgGscKs8s6FHT6zXA2iW2VrczY2CfsAVFstNd4PmrAB57ghPYXXF1dYLzhhVuk6cmnyiXDHsz9fyiG",
  "key13": "4MEp9YCF2uCHeaP2ZcnMopEcKtNjFQD8Ph5L9rx9UNnGRWCcWidS4u9Lt4uJbjZaCgNygRu5iV3nYcrdsSonMSAi",
  "key14": "2sdeFfm2zUkjpmwBkB7ksCVJJWTJkR3VUFQU3CWJok2pzSyXwHuekjFzz5ozctV6tPj5xW2PQewKCBMJFkTMpQrW",
  "key15": "4L1E7gL1epKZPvNGQJ9HxymaLfH53DzSwBXq9fNrEpcpQNyGHuvBWcQsfcBQAxY3zuRsMENe1HjLysjSCR7Nietg",
  "key16": "4RqDRVLMajmmTfHC1WHQBhSKxeE6v214gVkQYCKLxZVSgaZCMvsL5z6s5EF9DN48LM82N6AtNc18aPe8iVdXRYA7",
  "key17": "31iAfunjw6B7XpCULenmF7P9T1ev3JjLHSo6UVXDYBBAHHd9gLAj2YYhcvNYW4xUS1k51xEBTJpGkE2iSKc9hdtf",
  "key18": "5gkt7ZPG1wGg4qSKqnx6DMv55YUHM5jAnuF5si3r5rUJnDbV5LL8FWT8C6Wt4npbyo8UiyTxki8o8GBEcvoFHWuH",
  "key19": "or84PdYN4bnsgXid9d593BbUcSijLQ6ZEoYNfmsvAN9TWTa5pmeng42VGzjAab52cN5mjHJxxDnNs8wc8qvxpAL",
  "key20": "63LoJ7MGbQWfhybUxEVJKaETRWC5d4Axq4EdHkY1Nr6a38NnY3qTfRfsnWpzChjqyT94p5BNdhjfSMQ3C2zdukRu",
  "key21": "2JCGFUW2nM4dfQsLMJBdagvHQuyB5d9YDStRDLmEk9dhTk4G7LsdCwZyXStvKv1KtJUh4ptK7T9kJZ3JNU8uG6uo",
  "key22": "zFsSMr7zf3fyNotPvg97aZsWcvyLxXVLboNZygJE5zEx3MrtLuDrA3nePHy4G9mYHiE3apCVK361P1sbysnikrj",
  "key23": "2XHkygthYvuKaitWbVdDbQihPJowz5BhPNG86QWcBFqwPaMiceBAfPXuEoAZ4k7EPR5msd3j2y3HJhhpzAPFQatw",
  "key24": "2MQLTFr4KtLRWF9wpSkVwx9NBbnxZWSvLcKSBuNCamWZ4C8jCXfApWi3LVE7Rm4JkGM8M4DYbp64KHaeEdm7ZZt9",
  "key25": "3wNEobSFoQZ5wHRjjhD94kWCTmfD5q4EU47oqjHYMpy25ittmvMNRJhpGBqJfrvSZadatADcKHY571eZyUKH9HCx",
  "key26": "4GhafudZZ12Tt2j67rPtPa1H9Z8F9BEDC6svZeeygJdTJed9HfucuJSeoJMUhjuXhE3AJ8p2TWC2zW3DWCZpptRk",
  "key27": "3Zh9GWjTHjT3UXth1mdBUAJJVV4cynjkvJFayhViGhRwqe8EDVxzg5QhR6pVLkCJp8veJ2G1or7wEdjyuFNMnyVU",
  "key28": "2zZevbNTPdagAHguJNyxVHoJFgoHnYBhKZGRRiAsNtw5PPGK7muKR8rg8AL5Hk6ScErfifRNFveFPoxTtnL717gJ",
  "key29": "MhLH1q6ZHTQSGLRwGYGC3k7LtP4QMk6rEvUojbpEsBEfY7ybb2QwKrpBpmBHMJrFX4KPrKJAGz5aw8mPFcYHka6",
  "key30": "38yQt7ZXCXxETQt6KAjpS9u7hSTKyeAhm9VitZV2yC2q3GpUzJaqdL8ketRUMJ47BohgFwQC9FB1dfR4rrwLuzGQ",
  "key31": "3MVrz8UubwuUuQ18NJTwafxV5SasRY234Ghu3CxrmQcTsAKNQhrjSJUHu8PKNzhk4DJtJpSDwFfcwzKksUyXTnoi",
  "key32": "2WTqbZCLz8rPRd73WtMoc7vGTf1y13BECFcYiBpCbcugC3WWhVZPLHzVjMrZf9d8hZc3Uc6hK5LjhQH52SJ4pWok",
  "key33": "2fNeMAPY8p2ktEy1iSbFoJhfkYRvhtTnqCBGoFtg47nCv6UqdCivGkAzFuqiKwxEWALbnJ6ojk1AWWWEtA3Fc2EF",
  "key34": "4xTk5ckGnkDQHKWraD2KHo2C8Lkt6tr6RaPvtvjSqr3fAQGQp8pCpSszKCxZ6NmoZehU3BR9efyLBqnYVTYAQasw"
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
