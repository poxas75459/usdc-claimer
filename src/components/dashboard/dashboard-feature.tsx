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
    "5FmFepCXLhkn1uiRQk7eJxC8w41x6deq6rWKhsQf5hcT2DxJ6kD99oWQ4e8PswfFRaVXmMBGXqBfypwJTJkFScf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sM9hrUpKQ3ihuFEbpMQmMUVSRHtBqQ9Q64UbxepUNSVfGXeuNoEJFSGfshVQWoXiGJX5TJSfTbBuWXVDExduzwz",
  "key1": "2y4yAFdSVXVjSBnmdW2tqULjLDQNNihF4sd4HjYQjwXQhcQm8gAcJP1Z5fbv5pRNnx8pUYRCG4uiv6X7Z3jissj2",
  "key2": "Aor9ruZL4YqLAhgih7tLgcxSC9iuR3WmRLB82HF86mRBsp5p4SjCe6Xyr93F4YJ6hCE69UN3V6A7ThhCWZAmYYx",
  "key3": "3o8esCcxbJoWyZNvLuJQMV3UcAfGU3Br16fWYm2UxzBNG7Bp1ndWQMnbadSYqHjcc9LAdxmkraUZnfhZFN1U9ugS",
  "key4": "mEmFs7xa8XceEoH2deiCzSMHUYPw3SFzEMGLTdMKgAykpzwAjwxP1AEe6NY7Gga5ta2wkKqVcJ1FPkUS7XVu3Ny",
  "key5": "5iLmuFtBYg7JckqgYFcRz1xiGcpwkRLbgcg5xVoHJHHswvuAwpi7SGBLSd5FSebygexTDxKjsWFdh1wxdpN7bvcF",
  "key6": "7pZbZSWT6YkdAKKLxmoUj4XLRmhdSmmWcrkWVGDFnr5Zm6sJepDNLVSRN3j5sPmkDYVdWESeXh11TWNBk3JJcLE",
  "key7": "ogMmqwKZT2ns6viU6ySHsg7bUCmX91mMg59ZgN9FDxxh2MCbbvmWhS4RNGvprKGHHUea6No5txLPpdj55xjuQy4",
  "key8": "41xcijzVvEfL7o7h5BXETj13pnp2eSTtNRW5rMa6PxMSDjJgSKZH95iLU44wTKT5gSeMzYHg5DVsZmuCnr1ezkM8",
  "key9": "43tGeeVvYmM6iVYZDFV19kqbnS3LwpDftafJveZomcJLzbStLpW1KwUf792bq32KjaDRH1UdZSJV8qnPtB7dzx3i",
  "key10": "638hLP2ZFwY6E93AjnxN4ePc35eNBAnDYBCKX6eFLrKQLwCyLTRtXDmJgh7BhfCsmGWuMZDAcqZyjjxuNpCAC75M",
  "key11": "5hxR4sof44yJ8JLEqzMrKwYb4rFhK36KWE3ZuzsMbWHFsmLYNMjpfncoMMLKWfh8NpRA11mj6ZQ9s819fPjdz81H",
  "key12": "5wL3pq5BbeTNQdSSgwe5fovG1K6woHvmTrn16hfKhX5ab6s5nsHVM6YVK94iwwPsYgkfekkPdd7Q81aYWF5RpD9u",
  "key13": "64bbkq2o4DVBdBSRrGDN62PWA5MNm72g6k7earvC41HhRUaD1WxgPwtHnTyr73yAmW84DHcjve376bPZKshZsb7i",
  "key14": "5h8dHABF6n2aAFW4aLqpLpBdy3Yr7jEq2CtnbLyPKXj2LFMkKFue49AkvMnsmxEaJ3FkvNsRsKfEMEifot7KvfBg",
  "key15": "4ni7LqcDcHKjMmV687wJSmnh4NtRr7k395SUjBJ74SLDjq91nPV91VcGVNgrLEvzTEbu4d6XwFHTsxBXe6iEhzQ9",
  "key16": "5tew8bKiRTY1rjgi3umWU4Y15u24XcbHrJJiFeJGKyySX429Wf6EBtakfvV5TTg31mgDgEXRGn3A8mLUYXgRRYGA",
  "key17": "3YsTT3x4554a9LNKQhynbR6m13ZtmonnHZU6P12GQb1F67qwucyBozaxQN2toKBxi2fZHd5VNPPiVgzihXLKUc9w",
  "key18": "26C2kgeGH324H9vVaZXTmgzT8xC227yCQsmaqawEowTvN6epEaDFDWvpZXTVsvPUCDAQ9AxCcAus9GUnbwFFfCdZ",
  "key19": "2ohwsFjBe5W4dV1uBvK5ZPPioAJnkEmrC6WaETqXvkWRUwdJRPfZMi9xSdcgpq5fZTN3bozAiRn71qxQtE1QfuoX",
  "key20": "3fwBi3XcR7Paj5oHuPAPPyXFcX7LcXaajn4QFN3A6zhJVdDiNjR9WUeX7cawdh6E9V5PsC2KXAkF2b5A4Yt15dWp",
  "key21": "SzLtDvp2zWGiVdF3DK5Zzd8CfxxsCke1jGYJCSRQXGYzSvRdxk71MFj5ApYNCGQ9NfatDqLGJ23swHWqeGSueJQ",
  "key22": "3xc7yN85MJjovLEH5FN3SQtTm97Ja7YaYutLEvnhpDFxXZ8GY8Rt5P1eYf1E3JBHYgeSXMNBFZa989ukbgXuADFt",
  "key23": "2SxMM6nRHRxoGggbWyLFwBC8yj1CNy3LXn8ytusLTrfVsXGZ4PDYnttuYz4Wg1QEUmjPqW87mArfPN58ZTaHg1FJ",
  "key24": "2JqXkxtBmjUczuomynCecLAk6uLYspmrYHFxGCdb6uSrzUF4hahFysz7fvWubxFGQ1xeqguaYGoAftnsQPpDQr77",
  "key25": "42SFey7JnmK9NbQ8MFqjqgLqC2U8T5LKVejNLh9XDudxEbAVx69ADXVgHEQqFgAiH2pP9t1dgAT4BDHM33rwSo1X",
  "key26": "39fyidnSHc3GaoGLnuZwg5JnGfjPriNitiqELwichsjS5MQbnGM38mrnf7YXWBiaUuDGs59uvcKthJ4taRLyRfuY",
  "key27": "3bBNzvdF6St8dXz2aZzH2iyTYeaqQCKsN4Xsz6QczBnbTxWxRrtGFfJ2KJXnZou993LmWVXrc1rdHyVucRPTQw9G",
  "key28": "2omUB65aFJKRGhZ2vZiVECqYJTDmTPDtNqwF9wueBYoQ2LsJtdEGBBpgP1T1V8LGYs17v4zcbTP23yX7ofNJvhdD",
  "key29": "4VBoMVnKx47qxjQ85m7son2CCasXjEMnanJUohi8tvXo1ULTE2Tqdb1Tu4uC59CEvgd7XzoTq2EY3vNkhc8vVS2G",
  "key30": "37YwEgaD4Gq1pQVXXvyaYvYeFadoanJbKjx1bJoDgZtpSQhHYTxhWnkRd6c6SwfHspCb3FGYVKLYHRheEWdR7s7n",
  "key31": "4BGr72fFGw5FhcrTPANoTn7ZtmUSgg5uUEE7WYe9VwQujpvG5P9UZmpnhGkkYKeSgF7z7Ch6pZVn8W3zE9PUezs6",
  "key32": "UQDia6NJBK3bU8UvieeHyQ39P8mboRQRmd2tiMCVQUVMcy9aXrnEdXYtt1hQpXEfyWPq4BQAenu7XNnquFL7gkA",
  "key33": "4EZmqqbKyXJwJML4aFvoiGLR1UvPnZSL2tkM39TsTpHdTvrVW6v8AKi9Am2MHxkQiLgTE5HutvPYZgUQ5pLYKSLz"
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
