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
    "4TB41oUCGYYQhdJAskgF8JXEGKfBThaubHUuDUsQpiUJtLvwnzufNzrKyC1h3Ph9fDk8ZdtMPPpMVZDKnNY5nU4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uBBb9v1NApt9JLaEwNLKncxXpVNXX67o5JV23S2UZKFtyLQZKPDNvkPJrQPV4q28Mw1rq697u94ffgtAnswFpZ9",
  "key1": "2LinG2S4AJy6YGiY7CQCcaBLE4TS2n83A4Qzwa3KxTnsmCtNiFSm7XqJAdBDE1bdGAHhHyM4KEY89jD7zmAScSuR",
  "key2": "5nv5YMa3npUcUoxhNUK1u52gsLwUsxsQwpM3cAgynemujND9sa5s9VHZKhQz51VAR6Fg4gvpCWWXynoDhJCwtkG2",
  "key3": "ErfTPwiPhs2bZwewodNunHWsL1BkMKyFAWSTCJekYJEWefhbBAqvB8itsn5y1pgufBBmKb8VNaAv6oVfbJj62Xd",
  "key4": "5N6HxwiNhgdo8u4Z5hKQfTAiDNbeWU1aVs8nXDXEqDesEBygpL1nNxDmzRshMQ6bKX1jV3BFwm8p4KY2dDdMYZ2U",
  "key5": "3JP7fMCGoe4ibGjhfrAPoTxBwsyE7jUfqH8r3MQsiTaFmaiWEpRfuYznAzgn6j2rNVQVoyxy2GpcvZLRrZbTiSXe",
  "key6": "VCTqBtGNiELB4YGVyfeNbNuiAshV3jVsmn1Bb9jwsmHAehaiBahs68cic5zD6eXzgVmUSvHVPmsLk2qGrmoxPU5",
  "key7": "4wrZN7BNYb5UfsSmf2N8F4XkCag8iey8r6Koj4HVMc5Z4qqnAXzigXqb5bZFjHcu9fFwpdo7MvViLF14duqoHLbU",
  "key8": "3dcGAb8Vaq5rpCVJRhB2pcw89SrspZGr2YFLauZ6JE6y9HLWArUSK7hr4G3iAY4TJgJzTs55tvjTBmgiV33YStcS",
  "key9": "5PvUK4o2DCosJcQVbchcvS3VCkWWFJdZqjEhnt7sXjnRd1L8XhxQMf6MzcS9mcNJUUU13aN4j8ik2UyRTaf8hQvE",
  "key10": "59xCKSBATKhpVWsa1wrjH6nLxauDyj1KgzXioxYvqRNKGP3u7q3W2tQyCdYNRQqNyHTbC3S4Ddgk338PsVXHpd4e",
  "key11": "3K9SJfYzmqp9U3WCt99VT35QaYrSpJsE81LCZeiyPWoaAtkn7rcjqT71SpvnCrBVe8cJsbuD6ats1taNAABThuHY",
  "key12": "4VcD1AD8dED6M9AQrvXdwqsjMBmX1HYTbsZri8MBbknCA4geioAvaLpMhhJoteDHpbTHNGSkSPSNHnx5SXXsfqat",
  "key13": "3VHjnLZokpPKFbEdSeGr1L8jS9FLnAHaHBUevaxyjDc2gcBndohUaN1gAEKHpiTrmxEfwyWcM5AS1xBPEetSzmgH",
  "key14": "7GfUDbFwtBUr4CnFHQuPUH5DHwmvzLbziphFoF5y3sLGXczBu5ZXr14eHxwrSoiBnoZ6TxCGgeBhim5Cn5VM3DL",
  "key15": "47zsoU8SoGY4YF91b2XKKyiUTrVG1mF64DQevx3vhQ3pRUwkHHcLV2cuSJS1Ys9puq9LfQ3zV7AAcWGYjpBDJK4M",
  "key16": "dUK6fpMrXc4jgMDJemXX83YDmdqhgTWJpGeRnic57Y2hBV7saUDRihtg5YddAUBxwvyxqy6A7dhDSFSBpmuztJ5",
  "key17": "rNyfSYP1aoDSBoSeRJ4QaLvS8VmYeU2QbWw43V7aA89WohnMCRekKkSToWj7CE65m5uAJvAkAcAZCdtgKjm6Shm",
  "key18": "2yf2A1g8U8PST9WjUWMjNsk64Aye7363a8jsSWrt361j5bpFdaYjc12XM7HZXGStSo2pmLvrZ2oWVzEBBPL3TQQt",
  "key19": "52JAK71tMR8dUszr3t3RFX1TtoRvHxe3KxWuC3bFZBY3dt4C9pHYbp6JAua1PxK24ufhz33VADZyGaVZ9XKV9hLN",
  "key20": "8w2pE2ubWMhQNNM6NcECymJaviTuhaFKWeqW7Q9eEFLLVt8v6yrDmHvmgPCHEnecPcMX9DrR89PjtKV32XWAx2f",
  "key21": "3EPi1Mkfotc2vRyQQDYynytJwh3L993uNeqmAZitDD6XLWFrnhRdFoXXsF9XZUs1xK89fkRT8JpCwjyfhedBKivs",
  "key22": "4xv9gXbQpfDuMnpB5zaCxpN78DojYDFvofptJ72SuSPseBJuiZw1MpqhmhsW62DGPS4oma5Nem7xs7eYeS3ZX26V",
  "key23": "422Pn1w1iaLV6xtrYdxZPwWejASf4vDjyRVBHD5jQuJofLp5Yz44R6BDXfnY7CDaVZ868tGLfL6q1Zbh4Q12JKwJ",
  "key24": "3BzXqAAVzJ5rP8EWSZ4fiV8wCKftjk757kB23fAi7xGJ7JjUJkFe1XmJYEZNzTTnD61Sd4dro3Z6xN96DqwpoaZB",
  "key25": "2gQtginStb48qeDKj6ixtFtDGQaSbBSzv3QhagjDHVTqHuytjQw2PhsAiBM9HqV4cASHvMZi8XAHvYFiyh4ksFtD",
  "key26": "4KGdZqekqiRPG4Sz39qSSbVFeG7QhQs4rHtrB2aTaKDV3ybrw6pVj9nSC1rjYzPpAiAbuEKQG3cwecMxm5B3dowb",
  "key27": "36DqQeEq2uAnn8wrq34yaHv5uug7cqMqZtvm6W9WMoCZ3MuvJhpR6zMS8HTgdvZMPhh2LrP7pzqNCzdiiEFVa4zc",
  "key28": "4D8p14DxcnYgCsdc6LHZBqW1sS2z4hdtvF7Hzq1L3jwSjkd4PFnKLtd7PwKhgCcwAX2ABvu8n723YKBkugPyaNMo",
  "key29": "iLdYNVbtJTt6N6bdw1z9JyeKcpwPLfonxcMRa4TkCQf9J7XDNdUhGmHvzL9H6JTtJTyDH6bcMu5ArPxqoJYqgvr",
  "key30": "kEMQC479kG2daWai4H5hENqyDzEAcwyGrjKb5dbhsoW6ZaZtH75v6ZL5frSf7uBy8HA1MqZC1KEWEjmQ3ZNNePv",
  "key31": "iAuSP86boB9izmCEUmbAKt69FgGaiKHkmwhYuF5nKVFEkHZ4aKr9wtYcdjPc18iQRBuVZ8VYCm9YcPcWyG5Wt2w",
  "key32": "2uQa1goaRLq8Y79FC5GXvrVwpHCxQbhgEo1mkwT5JqFChMkmwk3TBreZmRuXcdwPyhWkbZBhpus6xPx7XedU6U9R",
  "key33": "3BWwgPTU6z2YCvRAevVzhu1jRGum2jWukHu7wr63mmtgg63XgaHCDaj1MiSSmf2GHVJ7fBBLhJe4YsTuCDYevZjs",
  "key34": "SsJhexrofDNXKXiqaHPxmKVo11q5koCQoukpTU85cYadxWVfVNkziGmpmD7KdnmNZ9ACeD8jYadLKh9PrzWdRk4",
  "key35": "4F7KjrR3xoqVsnaTCy8vS288vo7FyWw8k46FBVzWpwWgB4RWVnhfe4Xgufd7w1trmzFumZ3zYTi39th5KSsVP9S8",
  "key36": "E2Svgftf4PhnHS4wxdh1szLDDSZ6znmMMP2skwt2RVwGsK2YL69NZa5e6gxAcxEb8CmqeV2nm6W7b9KjTZF8AhK",
  "key37": "2hvHSB7ZVT4k7sbw2j22W2nikitdSspVYzTbMKVLu3gtiKQkN9UjrjXeLx5cs2cGmX6DDgnrwAnqL1Cm8DBXZpCM",
  "key38": "5czu3eb6bVZ9om5cAUWALFWQBmcTyAut4239GHUuLKFhj7PcfuPh9YFWWQb8vd3YxxR1KALGrKHFFaCGswjUxnRC",
  "key39": "2aL7AdZ7g5PNe3YoVbGcYkujRt5jXVKQxhubGD7JZ2WQiQjUEqr7B3s5tJdJfpv3dKJPQpL2nBFyi6GNxegiMcLg",
  "key40": "4xjeR5KYvzQNDwcF1RzD71zqjDymfrzMxKafBu9xc1UhXV5ifkagXLC7vacqV2ckKDDgSDq5wERmSLZg6wrDHQ4a"
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
