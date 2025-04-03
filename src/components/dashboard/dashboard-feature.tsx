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
    "Ne5XdS8JPcEP2cHhUoQYEYQRjpJ6JPJe6riy3yDnofty7UxNCkjbYN333TxejLTW6tuR2gkXByJSpvdbCr8eXEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BR1XVQnCmTHj7N4sKxoh1wkEhNWLmJ6BB8joqdXVfNiziFeucmxMJNQxZNwsznYujaxj9dKv6NRKgnhXBWX1dqj",
  "key1": "kbgc2YcuBd2uX8UFdrTsNEc6zvsw1yiGVgJX1XN2BFj7FhzWM6ACvpmmD7scTc6sXsXjsywAHY5dbbwRUHx4MDQ",
  "key2": "bWtZnRX65iDMPzUj3gRxtNeEGSUN7rZJGpkVCvgop6Rtx6xzLtBTvhWoR8kXumBh2kDSnM1cLyRmR1DVHNNeiXX",
  "key3": "5mkM6pAP956hcnbPbxjS1Xra5u4eXbs5KD5XNVEv5sbYNenCigerc8LYLUMmYheGu6Wf6XazKo1VzLngnzXT97GG",
  "key4": "4BmVVuLiX6F2VBkE7A9NMeCYC7qbP17h2HnSH9PP2baUMPwPiX9dNbKNZDeYE1yVy8BLidBqpjdY8nBLz3zkdq2U",
  "key5": "3BYGTbvnsS7Ct3H9TvRs8f4YhaZkhWqSM8NxEZHsqnSG3TLxqg84eGrw663tnNiFZVf2zcU9kFjuSZt5mp6gFCYL",
  "key6": "3LvXkCyqHWuohTz4abDo2Lb2YCVrGxXq5C9sfa9GUoiQJc4R61RZwQ8RkE6Ncp1wuWJuZtAyjHNKyq4qKoM9mGB2",
  "key7": "2ix4DiVmpeaCtCc1k5jpHYYPjAPCinw3QwWmpLFUsMSdtb3inHcHXjMFxDfRUWHv39pJtd8AqX5GxzX6fDMegwyR",
  "key8": "3wk1LK5iXdovTb9iduZQjqaejyEMtyZtBBdKVy8RAxYvTuP4uSLZhNzbmW1JN7mj4p9o74ic6SVnACkwB1wTRrGd",
  "key9": "5HvKZuWT69J2p6okqLyfCSibZBv9bTypsbqi14NYHNpoygxZcybosMGmSzSCaKastm3JEHWxphRPSdtJzUrQjPrr",
  "key10": "5jSj7WTWpDXYey4Xq3Xt3TCSTEMKBFjRj6vGb9a2uFaFQ3xDGFfawB1wM7jzowLWdpD6qooxjxCA8k5FTLxiu8G2",
  "key11": "2MnZ1A38ai7qh1votvLVMsE4LPk6seH5gCVv3p6GbPVujrQJXYYKqDyWzFVncCG7tDwHipNrP1UADRRw6PC9UPf8",
  "key12": "6TTN27181GfF9Gm4cjM87arFKsYhxG7Y6YoAh67c5fQH1g6ivp147tphGZJ6JAQvcZKjJiT7uc8mzFJEwxBJVnf",
  "key13": "22cM6H2DbBHXz1xMU63ZTiD47Kc2Gpzuf92VEXjoyk1FWgXZ2K5Ei2zaiePKninRxTNqh1P6H9NRWSEm5rsHta3t",
  "key14": "2uBrhXHvo7swsqSPko58R5c69xovwSAneqKaZWBEvHaZA18DqjTPvKceBKf5ARrGXkpjFW2XacdTsKgb7z9UWNDH",
  "key15": "4Z2o3yvHG2KaSkQNa38RC8Wpb8HGkbnYstTgwKGt5EVUq8H38noyWpGPz6Fw583M4f1G6jrEgwCaL21MNrSzv6f",
  "key16": "51GpBkw8PtKyU4QcnbeTAYEXWtBG8GNTcfNMDxjF6FavBEJk3zaPc65peJ3vzaSjDdvG1euxAYbUDX1jKKVhfgx1",
  "key17": "3diwJUXKvHCEuTcDKHBTPAksm8GQ6WFKpoX9SzxJ9AtkogzDcmSzXkjhTkVrWpfCKrGoCjpDUrB5hxQadJiSui3x",
  "key18": "5YMtP5hL8xQKwAVRs7S4ZrWTLYeR9BQ1AzXPRWcTCzame7UVUdDJWid15qKbpKes2GBhJRY5g49uHx3eW2P2VUcT",
  "key19": "5HfmfP53PrsYJ54oWDeDAaiNSVN2rno7votcnjvaY1TtRvHARitHsGj8ixG5J5Gfa4uM4e5SMBDnjqxSiVYJZ4yr",
  "key20": "34CftAqiUGVe38QnvihpFPv958WkePWaMt6KCi8Po5xsRQqgNGadhPnQFuTCGCbkNcBzYpZnKQF1GN9HtGbMfJXB",
  "key21": "43YJ6a5cg6QH6kq5saLgi9c97opow8ZmsaVpgqMexZ1RSBpRHtH7sFayVsrKb7erh6ojmG4cX7psBYqfAuzEkT5Y",
  "key22": "49YcL14vpYMMxiiSeZESFceUDvRenH3hvPp3oSVA4h4E2iknoQsmLqm9n8Wx2JKDnxy7nckFdTn1maXhaZjDk3oP",
  "key23": "2D2X7N2cfs5ZnGS5wbzPkNa2vhxzTruinaVgHLnzNwdwmkW5BHyNZuf2txjd5mjvWNA1Ycve6vRgF6HPRZnRMLt9",
  "key24": "MgnEP27jRG9gUpUapTJ3bGFVYN7yYJrfsAVbksFAaiH1Eobb3AaEE3WBviuVCyBGdSs2QgRCFGKDMzsA3eCXgQq",
  "key25": "4yAQsyFbm9tL7D1rLUbbJ6h3M6ej3DoP3eFPwHJhCaGzQLmcVwd7uu6hby9fUanGGAEF2UnMdCRnc2qJ8bJq2vTb",
  "key26": "5QVYebefcGuQ4Vd4uW9cVtLLCNAvPSZDXJcd1cc5Q9ryVyEPssUZFoJg1eUd6vRP7fPLPkTtH4TTBfXCWszD9ZyB",
  "key27": "2Mo4yGbRmeXBPZf2HvfLWZYqzdEB8xCrB6kZzn71JPYfhMpdDvzTqD3yXfouB4fJMgf12WWGZewMNBArJcHDA9QM",
  "key28": "62FPAtsBpSEeddnCBPhTWqzcY87kDMotMFUZXJz38UkoHYECv9L5iY7SzBziL6Si6bq1rwePCJQU6PaJBaNHqgLc",
  "key29": "5XvZtcjjVHGP3vxnySQK3TE1fN9PRQE8UMDypYyeJd9ucu3Ce2LuFt17M3hRHZmLba4wHDFfoZQFYzbVT4Vv4T1Z"
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
