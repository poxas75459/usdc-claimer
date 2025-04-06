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
    "Ag2ngGxcvh691yazLk2R6cVGgGomMktq3LK9mC1gLgbr4C7ReoLXGMeSZpFw8aPGmYNGALRn3GgSuSCYDJB7TJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25zJfpYY7ye5kdUwZVimW4s2AnzBWBxQJ4Ti5LYvppidj1KCenQeNghJ1hXjin4owuZ4sJdkJFF7eBgYxyoucCHj",
  "key1": "wa3chyWYnCVBHEqVxdyA34pPU6YGrHjQopXm8tfXxFfaWKCos4cFKLFmHJXnJJjBoQaa29QCJMANnVVcRe22cb8",
  "key2": "31V1ww2NbHF4KbaZmabp67VYwZLRBqNkHB8596c28KkbT2QfsR8WxbhJRmzv6GQvD72LHRSM51MTq2n3NZQSn31u",
  "key3": "32Bg2bkBizMB87dXnQcjrqrnzkyhyUXjZdKdPEXD7NyXEHNt6BAxk1uyBuGhyCMLteTNcDYe3K96kwLgvWxG8t1D",
  "key4": "4NPyo5xTMTXtsGuWDudjNxh36vD3BMdzVmkaF1BrZDvnsnTrP5HyBAQ7tHhfD7hPBNBsUPu2znuELDp8n7AdwxY5",
  "key5": "38atUxLe6G54zXMJyJN3Ydajh215J5T78dLtCTz8ssLftGjBY2WJStmeAgvdT84TCvUhXd1ifEJrGqfZMSfncPf7",
  "key6": "3cAUp9YH941ftuU3DpFHCA3VXCQPNAMbGZnsWsDU3wXtUopcnDzQArDd2jqJRiLoJPF4VhcPCCpx5E78JmwTtkvn",
  "key7": "2aDKio1imgUWxDWngt1ng2AKi9LhJrpGfSrhaA1oTtnFNFNeKt7fPihDEoCi2TqskQewWBaGHiiS8ei3CHFzDg5M",
  "key8": "98ivYz63qhJb2hM1dsrgVV33QbkxQiExVuP5UjSoumJhWrDr4vzZWsG1uXHJcCmHoV594ctgn1cfiFtzyemAmwU",
  "key9": "5peZvFXF9BTFhJevfz9jH2J3vcrq1KFpLv8K6AR5sCzrEmYj7v1SNJv25rNGxT7fQkVS11t7qSAhrG8uAXVE4omg",
  "key10": "4pzKybtD87LmKhNAshFHkU1ss96CcucBEQ9z2pb9qVhnA9QD3c94VZodADSSf95xAwrZnbsXS5XdKXaMSQ5mFzdm",
  "key11": "iq1QxSqBYKqXeNB5DqZK6vwu84ndHetvruU2mgq3R5qHxuaw6PQXQv3u9CnoQ66izVz3c6ZHe4CWJUuKZsih26Q",
  "key12": "5NcLJgPBQLsWmJjXWcBWfpPkwrdACKXz2Q1PcTb9BfudmnLoyCNne6zcodoT6TiMGGfhLmioqbUkyd5VepKDEBXT",
  "key13": "5EPNY9bfcpzX33dVbtgrDJyJZS2KJH7U3sfieV4SNKRN4xXjJQGSoySSj4ukJDiNWMGHExz7SsHpDAkM1GQSoxqQ",
  "key14": "42tj82sRPcjiEKv71Nuk4PFKSEx6mMCYpEjGF9sDAz7WTjvsMratT8Zip8Tc4ze3kGSfZ1H3vpfUk7pUPWSnM4Ms",
  "key15": "5ZnnVwQr9eq8sikgkEQyKcNERR9swwxHFZ1egao4wDbP1E7cAz92MUaEuKqCLS28EPop9qScJj7NrGaKpwrReAMT",
  "key16": "5uT38ZqPmpJGSAjr2RhfcduFQuCEydQHBooqiK1sbYcdeaiMuAszwUZ8wZQNM1yNqRJunKLb1A9fr4wJzJp4bVZd",
  "key17": "f1DpZ8e7XCLhRLCN8xsM7uyezgRvkkQrsqKZqbRfmLnxB84hmZz7pXpaC8HsLJmVhNSo846v5mF7SevmEwXKFJU",
  "key18": "2o7QsRL5dVZPLtDqbFpNcux6v6myhZWZR4YBybzHFC9AT7z83kcNGqF6HCMXNE9gh4LgeKw47xPDRUzLmkBPr4Ke",
  "key19": "5PtENxVAVzN7WoHUxgdFg91Rgh3bLVkurN6h4hxpQK1uzsmpWS87tm77ztx1XPaDv9uHDAyRfCJV5TimbDVxwv3p",
  "key20": "5UhZGTfHPPeG96MPrLjmcmLVtzJXH7VKNAfWKAcL4vkoAn3aDzdCi4J6qVMUXLzy8WNfBJ7QWCR2oVnFPorfMoVq",
  "key21": "4j8LkZ3eGPMqVhqwSsdCT2X3ohMMgWvNpP9DGc2j2fTxvSyY9UhutMVTnWz46PUatgdWzxDC6My8AauMqWjUM3Xh",
  "key22": "3qV9VdA4Zy23iQNEgR2tNCnhXtGbySeFLGoRuk8TjjtGQ5efYx6PH4yNKeVQeeadEDTaAmVJ4rgiQgg9VTPPWvj5",
  "key23": "5Qr6Uwsgz2R3nfoe3g2aigwp8NA2znrsN6yGByywjj7KUu6ZR8LioVf9z6rtJpz4mhinhgZBKSufgYkkvc1SS4UC",
  "key24": "3QU2fzCVxmoN4YaQbLq1AxZFyxHpWwo9qGR1KQpvjhtaAKqUibTp2qtu1rmFdDUUiLUMi2MeUyjNb2bmRLFX7GwY",
  "key25": "2UJL4dtd7W7kZ2uzqxLQz2ZSaM3zxCQHyKPPHx7ThQW6PG8EkQJ17MQnFcLBQU3Z1Mpyftxo3Hv5PnegViVrskPe",
  "key26": "3cujvhewbzKVSxAWJrxu8odjS6vwCpN3EA2rXhmobbuuUfyuE432B8rTjKuvjtEnciGzFTmQco2byZ7L5CbTDNbj"
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
