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
    "418Njvw2UYcdMCwkm414TjAfWfaDWiJEF96SiutMMfryaiNyQLYc3CtmNKFVCqV8nxr4fPtzQfqExEsycnd1NWtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VY66FL7KKH8XmTTjf9AgJR2f2m1CbzLexn8UZVoayJ4GpJSTV6A4x4CaRnqTwq7r3FA8yFg3UvpEompvmLx36TY",
  "key1": "5TWMrrgBcmvSB43NQDn92cvrBWVy3ciL8fopjojHnJr91gXTcNQzNpcAdFCRVNvPXtP6brzbapXZiZEWG9aqR92a",
  "key2": "5kStwX4Vcj6FyfyHPnXiahArVVN9gJfYk9HLSFr2nbLoPFAAe3xFdHaACuK7EjGkEQFMndsgx8iPpftBgPtmXA28",
  "key3": "2yUzgsn4WDgXXg1Gb8C8iHWJBi5vSeNKWxwAEiqWLxHFHkyWEWFqZhu6FAXGEwutqEaYv3uohKVeBYnV7nx6j8r4",
  "key4": "atxP1qgtULrS39FeBvwnyMMXRBVAgYwrS9ZfYbvTyDdkYhxyETScwsZXcoB5XLrZatrH21u95FKjZpMqouB9FUs",
  "key5": "3WqKDbBxugAV8K8h5vAef2Qtfwk5dXYsjbfwgPtxxt8yzxamskR8J2DB96ewGYFcW5P9nUhmD912YpaeAgQhxFu",
  "key6": "2FDBPdZgnzYNttVnpwiLK5shApMW7FPFmj8DD32e4qe6TT8aXGCkUuJNVojCWDQBnAPA6hPP8FCkyghmsaFAyS9",
  "key7": "wt727ELDbtKPqSDA2KoCH8MjgCqiAoxoCbt4ZjhtABzZP1SuHmsr5W9vHcdQ3h8nPucMWwqU6BYjtBGGiEKzZyB",
  "key8": "cTWw2yRN9qjnGRDFcodnKJdGSSjWsTAtYS6tZ1BUemStkmojVZV2ArBR7BB7Jm2iJF2FXjgLfiyT1SRcja3RiqH",
  "key9": "2ibG25H2yCYrxmZ414j8Sw61wtcCA6kFbfiJBr7toWoW7XDAnCRVsPFzCzM2NFSc6WW1qupXmhC51r7qaZSPVtDT",
  "key10": "4i4aFpTSyLtGSjGUSsvS4dJbwnSke6bD1VgNX6g5XN2HdYZkZH4vtgumw1VsVZwkJeNwZG5Mz46R98oUXvtEjiEZ",
  "key11": "2LrLGPX63LArHQmhqtmbCkB6SciEsVH4BfJjKuLJrwcXTQxKMQtJrQzTYsBFxBjSgaMwXKHL91tvnJ6RYSCakPe7",
  "key12": "25sZdNPaDULSEWaiJPwButGMqDxA7J4DpRjuGWtVw9Q4A4U2tTAfyWwDRuYm4bAsjE3ZSiAavVcVs35y1RykGSdv",
  "key13": "5Py7BgKGhUxRwRNofaj8CcKmnffN7ypHVSrnRDq929vm6VguEQShmQFH8RV29FHqLywNr8S4tsNtMgAXbGxMkKAN",
  "key14": "2VXZyUJNfnJc84fQbKnBt1KXqEYqspU3Qj6RjQWBqyGWC3viFNKd69WEcA7nDKwT5WPx5yNeTUjckAScdSJydqf",
  "key15": "4nJd9BDxu9YoN3TUtS1483jsxnUtrDAfJfPw9EqSQgy2ZmGmXxPqGmKKw8xXTuDzqUhYvhE78LHwB7TBGTLL6NY",
  "key16": "WWULvFzeXykQwtLqF9r7iRgjfgTwAdFxnsxH4J82EnL26qy381bjSU4dpuyQv2PGovHbZ1hqKJSFVn8J242qmiZ",
  "key17": "3K9rc1kDhpRa8F9XvXVou58Y5r1eSriofFa54ZjTZCNkFyXNmELgYygE7dfk5ChmL5aus2Q2ye8D8orUQoi3c8Gj",
  "key18": "89ndM4u6Y3Aj5DHUykQkoNaWibRn3sZG8Qqq9KHtrDYkEvbnN7fTskE6gP3NWXhMRb6kDA3R9CeDC12K9qYk5gw",
  "key19": "4JUd3zik7H7wmtigsT3nnDKgw7AtBcZfpkjiYZBp4YAJxxWQ3DD4utsCDR4xaQqiyuij96FfFyPdRGkFTe8pVGdN",
  "key20": "4DsNrq65oCjmC9WhvkxPQgDft2N71nuNHuChwkUAcqaB3MQF6fd9WVUJKYs9bRBXZdNaB4sxbSfCT5E8KBDu77Gr",
  "key21": "55s96Ak7fLJFBV6yTnubhLZNJ3TnH91xqtb98pdLUxm87ryszP5GQ3Y9noaivx2ZVmtNNJfEDygSNswSpH7hW4kG",
  "key22": "31J57jx2gbqnUdBjZy7Aejod3hNM6EBjGKCFx6NeALNdTpMFQar6zphBquTUfKLmr17n8gXtV16LJ6zew4BY2FzD",
  "key23": "5oWdNM3P1Pq4TPLTCzBRXQcyJY9LDCCf4vbRChxGABmTbEEreXP5UvnvgMVLFpxZ4CGJk8zayEu8Y8kXkpyQTNNy",
  "key24": "4wz12YZSA9Hk8wJk8nWX5zjxtNc5GvrRqfcUSummuu4trJR7iYsWqGvFW98n1NbJ6iPudzojR9NfBBhkrh128UkY",
  "key25": "5B4awXzadhXcG6TRtY75TDMhfe9tyXtfXtfBAMyj3213najEnEZww83omTTB2jvuYaHQ8yy3imBZQDRPCf7odS5a"
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
