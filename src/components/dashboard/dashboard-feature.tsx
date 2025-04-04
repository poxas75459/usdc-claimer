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
    "26oJiBES6Cy1UqBVTXdvxrXcWcNfN2WrBHbhXcfTMt18tkcdyXire6o3Juq81mScubZoQKthbZAYnp4edttMwwdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33QCakAaBXnPEYrH8pgCPWkBWBNForVtX2swZTDo2CtEAtVQwbTpQxGM97ddLZoVTaG48vknkP1A6Xd2cC5wJ1NE",
  "key1": "jK39ZQ4z4J91zf85EBGvZ7s9o7WXVwbuUjZZ6WBB7mVDJqeQLML3j7y4VZ8aize6UQk2DUq1TN4eorkGMbGQLtN",
  "key2": "3i8zk5jy7cNJ1TmLYFjYjMogCwbqVW1eHjT1BugfnTpwyicEVM1B7JM7AVwvyTzRyscKRk5yj3MHBLCNbKQ26UpV",
  "key3": "AbyiqcJ6cp6oFABZexwzGbbnF2MoG6XANQ3Eji2kMX99yHY24HrGUq4vCmMEWBDCmFZuy4QnKnVSZ4P625bMYgb",
  "key4": "2sp8K81KzuUPdzbBDGJUBe2gqiJYLCuiqSWY4VGJY5W4uU887PFhM3zwRGV7EEcEpYuqTAcrUFhVGewJjRVyLZVh",
  "key5": "399WcYE2TzKu9pQKDT2DTZWgeD5Uh5fnP6KUQuErJbBni1vwB4ShRndX9V3vbTV57YcTw19YRE2mSDKvMuVN2gRi",
  "key6": "5yrWvL7FyYvc4WW81ZcngYHpYBAQqzT8PpiZN9fGZpRHiMX6B9Fw8zSKmkWGkNSaxXWDbyPMksj2zjriavZrKbkU",
  "key7": "3jqdowuu5dBCSk2tkG6YGZRQbnkYVvvTYHV7neNdimMkMZK4uH3cNrDyRagXn4om8wECT8ZoFTFx6hDZ864QTh8",
  "key8": "3KfB7erExgUoA6NXcjvm7qy2Dms2y24DdTwNKt7uR16urJaxtgiaGyABxFtPAvTV2qMUphTzn8uYWUGUyXaC4UMA",
  "key9": "31b7FoXk4m5pmoUpaNcWgSkovAhvYSJhra4mWQXu5bw8jbwHqsrhMsGTtWvGLwZwZq77cv1NhQuV5TZUc7V2ycbU",
  "key10": "Jj8CGrVHJbSFMtteYgGSn3zX1YvayekijonnhjMzVhsuo1JGMCUve5s4YFjQrE4NrmskH786Mp9Ykxg6DXqqSGn",
  "key11": "3PNGsjJydTKWEcTtSGkY1brd2tXjwvQ3wNJHkTLJE5Zp6zgiciY1iN45fHJuev3E4YTPCYWip7kwRLmqxMkYJAvS",
  "key12": "5JWaZVqJMhU5kLgYxZd4GxSLxdrbgkpDU8xVfaNMfFmnWJWjibfxhWGjaanBWSYAC55UeA8tPbqwGz7bShhcS6t3",
  "key13": "2tMyczV6VpUpPhXdM8qFpmcKzoheYL7MQzhhS2wrJrfU2cWZRkaWseMtzgSnZpEGd2bcJpT7pt4FDgfhR5UwDW7s",
  "key14": "3qBaHZcgnB2zv6LwwQa19WqjDPawaPVipUzGPHod7s7r9YH6dpWiCRmLJLsurrG3nsuKA77Ezdtf58ieAyWw2qzh",
  "key15": "4LiwqHTnUGuZHXgmv8yuz4sgLNU4WgkRnEvTNHmVuyf3sNwmyrzWhsAPKYrqNZXtub3bRavR1N2E7u4MEiRc9Nvm",
  "key16": "4DN9j8b75QUwiGhsmZq5uRzt6eUgVgxPqdCWXscwKJipDApFcqurD7HdELwBrdKgCHz5RVQnxW7rpHm92GX4KQcZ",
  "key17": "2NshvHBNamuPmAyM523by2nXS8WUYbnrym8iXiXco5bZoCmR9h4oWBT4DjEVgmb5eUuoZKFnQg2q53WAbTsGTv6t",
  "key18": "2TrxnEjwVbMCjNyZg5S8tAn9rMD34S1aj54REr3xRW7pFjhHdYpXnWLMQGjzXPikL7ZhK67AGqwtT57yhmV5MJjH",
  "key19": "64fG1EEu224ancsKX4M9BSmz78sF7sUAaKaNfPmQnzCcRbzhn7d2EtvU23aw1pfcARbwLsG1dtJZ5U1jP8v62Vou",
  "key20": "2btfaPCS5BUX7JnvUCiKKCuDFjKFPuVtE1UibP29dVbKUZe9f12UTSAtnGad6aRcXtZzvz7CXQupMoh8y49gccew",
  "key21": "2oKZZZwKeXrg9QQErj5S7Qzd7DVqDQXrmrprKLkmRxoLTNdcektXVogCVmVQZZGWPvi7CqFYdM1SRX2RGb2wsiDM",
  "key22": "2PGMketySVvCD2LetemdG8KRXiGpxF3GNRV2X4ktCtqXNv9qnWCvfSbKdXF6fxrGv2LbzfUP1RK34Tj3X6SaR2MP",
  "key23": "3voxUkXYcVCyHVApm6BUTTYLvpDQo7VMTUeUqcLXtPUBMYAj25Syp2fY4UUZLHc5dit5UTjoBqknQaZSDTR87ZzK",
  "key24": "wudFqjmRpTxLQfhdHdpjSBPA4ZWXxncjvZBUxPPPi25FhtMuWNyGwE3hKLosYqvdchtMZtLVVWoJFFc26PcSh8d",
  "key25": "qPTVanb7D42koz61bYzm1jPELTicm1ACNuHu8eMJvAhsymNzrZNUieJ2tc1cU7bwaxm6doqke4LCgMFfFuVxEk9",
  "key26": "5fMxtDUrXkGyjoEdyCQZASwoMzp2etDr3cc21KhDCopoy1TH8akg9J1m7hqhCHBvpUgWeGjmDUyt5wH3xcAz4H6T",
  "key27": "5HLQusmW6cpzWss3A6nmJYNRbjPibWG4d8jR6cc2G49ojtQL4hpcUAMDnkxpfuEM8f4Sr2po8MvDVZ67xCakyg3h",
  "key28": "KGnzyC1BV2g3G69NgsEprAVR5yYFfy5xJThQixJbDtrVQxEBmF8h517dtshLXQ4edzJkzQRky6f2qSKb2osRmci",
  "key29": "4zN1Z8FnkNwuP4LhEb83jEJDmVfACJQn59qzRcP6br52wZU2oYg1JGinaHTgnmSR9NBDpGCdJxJ8y6bm4t4tnADW",
  "key30": "3wAysgfdjjY1b582r4c5EyShLdmR4G35ctgHkmNsYqJKVifTSGimNjf1B99R6yva3Vq8DJgjzFoBoHSTdGrYjYcN",
  "key31": "2GF742iGoqLqtwY7oeMWDuPLHjFSwD4ade192FbKniQB9zJ5q3fjrkP5fjJ5r8mFCqrS2SeS48bpbEUGuy9gXJte",
  "key32": "2sLRH6ZiefBZKujiJs97tUuhmCMZN4ivxZPGV2tRquU5wWNPGK8Lh5nGR88GTSJsBzMcYjRxhYMQrmS8RhFVkvk1"
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
