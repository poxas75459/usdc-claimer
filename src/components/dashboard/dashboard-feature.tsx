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
    "34JactAVZn9NGX7YvXu34Dt8w3r5MRhcWrY3R4nPqKjSyZx2ew8YTi4fGmtJ4cELa1BcYNGxPkQLfmLfWNwSftpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27QkrHoDxSdoojm3wmCWL3TA754VCSwreBtaBvGux44WYLs6Cq4mS28zGDFtAbV4VAM7apJ1DktAwVHfCpE4SR1K",
  "key1": "k2YzZnZWCCyXJnKw8ujMgWkeCYfH4H5KpgpaSBWD291W7iAxm44xn7q9bkoRMzQKnAm4jByub8VvUSP7xofDqxu",
  "key2": "3sWDBXoQfGdF3cBABVTsNtYo4bJsBTuvT6bY1kX5dyD2FSBbZSpeDY6rkspGDkYSi2ycBdQumVXifjrCrgBRsUVo",
  "key3": "58VmFQnYDS9984ZWuheQRGPYye8ZM7tKsk9iBdrhghmghpH5ffXzqxr8kvnrr7x4qH9bDtSgDRUqZdcH6fNLKh5t",
  "key4": "4MQNEkH7T7KcbbBKjVYhWgKNARch1sA6kgJRrQyBgJwS1zexN9s7GmSrtv99mDq4Hrof9PHdUfmvbSvjWMLesL4Z",
  "key5": "4C9xivWgaUoExzNnixchrugYUkEGEKzj5xMCnuDvL5YoafFihNWb14Zcd6KqjE6Mb2nRMKMVscY7RXtMCekdK79U",
  "key6": "5kUzAPVR1N4tg1wffhrL3n8ckVk5Xy7FZySm2sPto8c6wwDNNd6zYWwFTrzsDnBh6CKVUGfUsURwWA4rsK8LeSfX",
  "key7": "5DK5jnn7BhGcLhszAjAAAmsBrwy9KxMLZGEkdiQGyyzdfrAnEFYWRpqasUMePksFUnt4GGFFHnQ8JeRX6jAAL2df",
  "key8": "4McvezB8ANmvWnXZYQ3yrRaFe9wzvonYMEEvspAErCFG4vCvojLSMmQpkJq3chpYYy2ynCgjzFTcTGREBbekpqWZ",
  "key9": "4wqGzhJrit72NRzGuok5DsJJ6QdcstG3zELhDnQCzBE4ujjzveR7km4xVsAb9m5tTmvnyAsHGuHYEbNuh54HPwxE",
  "key10": "3QM5FNMFG2RMWfw64oR4wazcmgDKKQgUqpxbsMKeEo7arMQqcAHYSN1gjjJeMiyjRKK3ErzZkt1U7Krj8GGu3YJ9",
  "key11": "4ghZzsNwDGk36wEHJjVnDSCaZGtJ7WiKyYatKMon8s3zb81CrgMM93V9Vv96K831HqGC5GpFFyviRPV5ddHVjKot",
  "key12": "4XQRvNVx7FLkqJznUjtXjFLBpf6rDQPGhP183dkzWPHJv5E9C74X9wFZXC3Ko69Ly8vuHvRjCjXVbaxwVtpan1ry",
  "key13": "4swXRF5bRtu5kg9Ms8NkKfW9dBsdtn9d6eg3LJX24caDRgubPUnAjVBZ2cSoheUs5rfejtdT2fLqv9jf3aMbpnPE",
  "key14": "5UytifztabHnKEd4QS89XMhJDeME9WHpfwp7Cr31yJhSRfxuNjrn46pwntqpDAa1XfYS4uj8QdzpiViTLyKmaJs1",
  "key15": "37ocKTwPLYCTqiCua6beSgCqgnn8ZkNHiyXYd2k6ezgGAq1MTsYguc14ns5523iwLZWt9QSd4hu48cHwH31DRZgz",
  "key16": "23iumkejVxZmJJQwamgW4Yf9iLYw8ryB6jsPicHBY3spCGZGdLjYXpNQPTDmi6W6yahXwH8n5jtnfkZkL7stcypz",
  "key17": "65ZHYRdfYro1aSByqfdevZapajzpZdez76rrvU1ZMTPECzwSDQj4t4djq3fgzjykkySDTJBmqseSkcSkgxYWygMH",
  "key18": "3ELxkT2Zij7MBgmrTxToNCnL3V9PxchEc5KFKb5FiQCtePzvc1Ns1YU38bvUjdY8aHiXJSUcgittsByR5GubMTop",
  "key19": "4zYj3564exGFyhk57BoTZP6Tx7ytZP2MhH1kNMgu3CEyxoUzUu7yZ2EXK31dSiD46g2sqYgYRqWQ9RYmnqBihV6x",
  "key20": "4jPup6Qt77dG5UHP5cZH7w3qA3XZPNLRg6bJ8UYRHPFf5aAKior3BZaythaWbv9jBwxv6Y1zxpynapzX4h1pJAtD",
  "key21": "2EJnQDJ1K1Rj2w2z4askyFaNYxqPckhioa2j6XDZDFhxi62UDeouxyg6ycV5hQR6fZNhxaTVBy89RGfm7NcWbmwm",
  "key22": "bLuzpPG3ezjz6gdaSRaAZtVEYNvFR847bMzwbhZ11jw5Hg7qMbBmvV2zZgwz8QY6ZCgEV6Wse2yxxFDtSmRPDYj",
  "key23": "5jYsCtFk9GbXYkqUhJKymhLSSXCfR12K9LqzLRRmdBS9B3VkY5oaNmjhe4PWYSPAz2U8SjdC3AbYHHfAAsMNL6F5",
  "key24": "3bMuCvC8ECihLuLghfhHrs9uB6Aw2jtBhUc61NmsD66HoaG91xsD38BpJJbyUMBh5GrxUktyvAHrhtmfYAnptWH8",
  "key25": "5QNEM1wN2yoVaK6A1uZbSFAx4j3WU1yAWmFKhAKHPhoJSfahf2Mg8ExA1oVBLMwqGNsEDKDVoYCH91PogW1K2ZtV",
  "key26": "3tiA3P2wSjjcThQxzE9UzUBBk244qRKw7mKstYKAPxaEAeD5myFDaASuHWq11ASgxBfc5zhCyi6ikKaMeS74aDqF",
  "key27": "5gsmU9paEwAxZvbibgvu2hHCDpcLxbDUNZ3BrF7jGQtY4ac158ygq4uhQzcHzzDsCFWRmXcgBzxmxi3rYJVH8fNE",
  "key28": "3WHAfFU2LbHQWigHopJP5sG89QbFFxr2K6CHdHTzL3YBKAFxj4qN8EGLiYUnVC7KvVP8yVmTiGMQUQLqgBJvL6KV",
  "key29": "5WzqJzD2iXVA78pMrb1pGz4eyKNiaFj2cJBeZX9mLLunf5UyrNS2bkmcwYFKV7jsCtzotvWzGVDKg7GCR7nZEhsK",
  "key30": "5xa5sHwCdMBKeN9bJY5aPbwR4rKhMs5JxGqEQd7yU8xKt44ZLvpMTfPgp6Yvk8qhncnrfsyLt1f8JHuz4E4PkGpa",
  "key31": "4EKYm7PsQ3rtdVqQp6GFaRMXuyLqxKSKKieWbQeVUWevD9LXfjR9NpWBpN3ncbiauLsr5JxMdjKDidsRzfsGEPUZ",
  "key32": "2XnB4ZcT9cQyJM5hPdJH5jmKCvpNhD5TFM4sw2arewv7qaoZLtFQ5EyV5Z3pKNWfARkBzQREEywEVw1EPsNmeVET",
  "key33": "3Mho3wJQgXK9RgQxwLp6qon98J283BX57CChpHt3SxCLB8PfgK9k2guKvcSEyVPbgsKGFE7BXv4RWdavYA94P8Nf",
  "key34": "7bU2eR7TDpcbTe9v4W9oTCvsMgvKiyNoCpuqSKZDxEAfgd3pA7gGXy8Ugi7SG7DMKeVP2UPgzm89WQ1KZ1SJv56",
  "key35": "Bq7QMf6bBp5TmciqAfFvcvbEX38q5CvuvDJy66gPVGY4F4YidDhpTeUzJg2WsNDggNgT2n9FEV4E77qpfCMsgQp",
  "key36": "4oPckEmuX1PFpQCVVbtXDd9tNZVi3p9xtkd2BCHatx88mQVCLMEA1ybKUDzXmdbYvavrE2xfwbhEJCFyQbqQrxuG",
  "key37": "39MPsA7xemuPF7er7LQXPma62q8YSF53Ac6fWZ6YMGWPuW6rEzfuBEppuUJMG8bM9QtDr1dnGwbVkrV9aLtygbkf",
  "key38": "3ArRRMRf5RbMbc3nGSyFmcnpwY5QDCRXDwpSoPPnMCyFoUkhBRH3NLMgjNQ5aiqnkejnK573uFywNG64jaTebMJn",
  "key39": "5UK7SwEgkj7phmifvcbPePu93ECTPNEC3ciW5Aw62oKB6Rv7FyR9kmvX2yiVfSb8nUG6U1UeTyCtzyJSQB9AjW74"
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
