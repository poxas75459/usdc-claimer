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
    "5Qf2R5vqsYmD5ctNGcALZAGDdTu485Fem9VnkMDdaAAMQSEGg3voVnfUAuX7C721a9T3pDmnyxQZASP5jXHcQKF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yp9uP3fd9HPNCfCEj2sS1veKVPthjacmvioQsEHmBs2PUbVs75kQGW23h2qPEyM8UH82nnwNY2RauCexEk9RaNB",
  "key1": "5h4PATjkDujeAgVaesvU1PUyz8UNxZ1591fKfKpV3LFUtYgdTpRGBEUQxARprmFQBTvXST4LRNHEs65Fni7XkETs",
  "key2": "4hfuVL3ShChbeqTy1A2FBHv9NKF44uoPUAJm7Yob85nVrxg6R9UekZwXZMdHJobY1TeaGRidSsKYc2YngvdJtFsJ",
  "key3": "5pm44uSv4wGurEP81Mf8kUevCky2AiN7FySBK61kv2GPRjwwC9obwrGWFmi9y6arH8uMhMiym4GzyTN2nM4e2r2Y",
  "key4": "4TCTKvxUwnNqGDh8d5DrWtCyzx7VKFcUABRQhvrD7fALBgTtKqvZbS6NAiAtt4MdxU7MvH3X47ws5ZY5Ax2P1MWa",
  "key5": "45NwH5s7HnQm4oCCkv8kAygmcrd1ERQe4XBBETMXDyT1kw1auoeEZ5Vi98uAT45qraXTmabF8sMF1rffvtAeMiTV",
  "key6": "4BrBchJ3MLHNk2RiCZe47JKvwuP3wP8iiFDTKpGawgDdkvoaWAkD9spajLjYTDsVriW2J4kRuWfREkkhPwgdfpaE",
  "key7": "eEGRnqcTq7HqdZXHRhmCbJYBjNbrE9NtU8GQKRovDFvRbyBJRCuaTFSUchbTae3JexTKhbcPWFhC2E8n5A5Q1Zw",
  "key8": "z2rndNEX67QLtBbXxgmEs7ZH2PqZjpHXDVAGcdz93zgQHHKjpJAtNtWAnz6MYDRjHkDL4ARTgsqXQpWpEE6VP7M",
  "key9": "4s43gv7dTfSYBxoKk4L8GoGsKpB6zWNz9X1n5CtQ5L2p8PAtRqBNNqdb5p9pJudpW96uAGn9Y7xBKnMBhMjA3FdF",
  "key10": "5HJZBCxzVej3hvxSmHV4Sue1z1FEaQ1JSf2efTBdWFD4WMiWrTGTy2ij4AjhTLV1kpfbt2KgCPsgbuUyyvCv2YhT",
  "key11": "4ND6KBEcPxFzTjs6azoCLALqtQadCGRz2wcySK4ftrCKwQYi9qtBi9AJUUVxftPtqhyJnwH7cPc1DrubM82HuyiN",
  "key12": "2j8W5bxexUHYEtZ7Jk3xNhwZPFiazuHgYq8XUGZRGTfsVyj2qNmnrod8FbuDx4NiykrDsgVGRMirAVgnfvfYKsP7",
  "key13": "5eP1wPrMLUZW84zHT8dSPVrxStzWrRDwRLuxVtrMnJfqVhsF7uTEPz5sDX7uB8qSZeFHcD9fUdD9oapLn8mpZBt9",
  "key14": "3Sbf8hGCd4k1A5cqQ6wy393jciErY7vEpLZVxudjiTZLqJJxuMNFhcAMV3dwub9UZSUdrcG8Wwqh6mVrGCq7obes",
  "key15": "3kePjEerUKyfXbF1P3tV3B2xjvwKrWwQXUWc6hMLonFfixmx1Zy5cyY5ZjpbezULqpTktgha2YMpNGsQnLybnJnc",
  "key16": "DWzYRjAaW9Med4ZCQARxNptjJJpK8hUZkV2SVRV5xyj4zkCPkSi8rXTKqiHKbUvipcMQiDnT6W7HjeAZZxXAsB2",
  "key17": "3A1Mg2bsCJe4qQychsdoZwyRLU6XhhMzBgo43F1N7L9oXbLRbib6rSyWe6Ya4LmxDyb2Ad8eagUox4LcPTmQF7ma",
  "key18": "5QSsjBkbammDpVFNavQ9NbAmgcXph8sHgZbbEAYHtQXHyAihTxju2rhdx1phzBgjgK7Tz7HYQSPodG8pdYmZhTxE",
  "key19": "4vo6errBXsFqNro8HpJZwypWxMZGeR1N5HjuYdYgi83hqkN7mzSsxBWVksRzD4V7gpNoM4AAHQ4QyzJE6SQLAjWz",
  "key20": "2yNEF4cPVEUBf4S6xcqc45fsHdfAPT3rueQaXVaCM863dbBjjJiECkToLghzfRAVtGWxy92yASTihGuQtosPeNKx",
  "key21": "5cBhvbNRnWMGLs4mgRGFKoJcYMtZKpqYNgYjRAjtKF5yGJg2SUNvumch3rri7iiN64PqNfYpbnpcciY4yioDxaCc",
  "key22": "oSL8Ex2f9Ad8PL3EYNkP9u5WDPD9i1HgYQ24Fx1ooPqEWEqneQujQ7wHdUkAdH5pUUySLVRvstB258fbXW6qc3m",
  "key23": "AQox8JqR1B9hPmRRyd3yNEg1u459q6X9KoDDv7AuUgqWX35QtY4jFusrLn729vQvA7XGtZryTxjfzeiry8bnaSk",
  "key24": "4Z5AUqvr1byq7HS3DiGcGmyCNS4icjnGdFJsnea3sDUrMqPcYg8EvNtUSXTK3pncs4YiPs77hBqy2dHPnEvnLArt",
  "key25": "TpAvDG7u8DnJSUE31QEWGrFegeAVkmFMtukY2o51pC6putGRqhuemtPUtRv1vDNJetx1GzGZbGMQzV6Scd39Xe1",
  "key26": "6GRbPbQMnJc1xweZ1jy5MGw2wvxGBnvs5cBo8ej9V9UjYU1nidwryzSX337D8ZeTKXs96rAeRzgUpn5yq7qeahF"
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
