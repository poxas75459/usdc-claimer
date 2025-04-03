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
    "3JJfQ2iPupKDvqX7NDWa4HuGGpLLopyyNdCb3NQvq2b5EBZiy8f34UjJM8s5W3N3WR6huC1SYQWkko6mUDyYNKAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21q9e6LEMA5T7YBj6dwYiVtwrjsk2NxcgR4KHivTznKfnG3SPcnup9QNcX1VCeHh46knLL5XfPNoi3n3h8ChYmLs",
  "key1": "47HsqAQe78QLwdPHqYpzAgvjYVZDYTtibkViNzHtYPKkYP5Sv5zW7cym15d4iiJWF8XMcfzCJQpZQuqLU1w8hiUT",
  "key2": "m5Gn465U3UQ7FhLFNNnKhTesrn1L6wLojLHLsVJSx5sc5asGTSPjgo7qDaHCB9rpr7qnUcuhUZAsNg4W2KyEjWe",
  "key3": "2gYvRcjja8qDg6tYWop1WpYjKkLk72spwa4zYuB3p8oxEabih4sjnqtxoU89rRRP18nLAC1spUyoMKNB4LwfYRjn",
  "key4": "5VqVBZ276oNhq8EZvfW73F4ziXnL6kNm9P94CfctrZHh88SKBPR4EBK71N9noxUdc8F7mKwpJ1kkcUdJmCDtcd9j",
  "key5": "3chj3377gFa3E8pbU4Tw7Fvvspwr4DnSAdZKGoe8kYcVUp1p87X9xTdnFTVs5KSwZnXfkvAoM8ACPHdG8ix62H82",
  "key6": "Hi2p1N2s6BvecEZBv8to2DwHU7gotTEwYVRvyp5JJyD9YmrVu7e2fNN9vhLc37huMpCStj5QnvyE6qfV61TA49m",
  "key7": "mdiuqJG32QUDBGPgSFkCPjbVLfm8Vk5VebikzPd1z3Xcyp7KRPhVK3J2jjcxbpo53SrDgv33s7vyo3GD3KPMrms",
  "key8": "absjZHFAAc4igaUuA5h4wbLyqQTEQ1RSeqDcG43GXVV5owNNLxa63Ndsh6vDDxFijLcZaDqGtxBi5k5mfg73EYS",
  "key9": "4tTXscSmcS8rtCLiqKvTVR1WiCvbTH65hkgFkGXPKfqMHKDeXYa1YmMFvXyQDqnyGor4oZSPJspdZcSpXkBHP2ZF",
  "key10": "2FWsBjHz2MdePjToxYhhjeXFRxrabrwWxd5oGrgjVxzSQxspZfozMSaQWt3gbeSKGqbbS8c3QDmk35kjUjhchfcP",
  "key11": "5ZX84WFfHrunprprMkpUExRHz18cuczKvzZbMZHPVKgR2bZ1nD8uQzHPM6Pn43KNb8fQS6EC9RWFoafquKgg94Zs",
  "key12": "QCJqRDgntQDDJ3cwkx6i9FAw39zzXx8o5n8Zxfn1WgJyFrEBeq2JtEHhaaFoaGUo2MxgpKXdRFq9Co3UCQMsmfJ",
  "key13": "5jzd6tN3RiXJrSpD7WpJctMBSAHnXtiM2UWexUT6TSRhqVnLGRSEUNJzf6deAkxhpQSyLbi1vnAXGmbwkWkYKdPE",
  "key14": "2uNSf9TrBUxwxKJG9KzWwPswurmw2g7T44xqQRdaiZWvdaeTQSxhb7nwoLatwg3baQyk8WNzM1oq5wqdavq5yU6C",
  "key15": "5BjuwV3sBSZ67ufUB8hVUZbPxy43zA9Y6kaJziDLWpEE5HMpF1c9jTE8V8vaVkC3PaieUo5ebr7cV4pRdcwNQrtR",
  "key16": "53B4F4JZ9HP5v4JQDVVWpdgEZKXbVnB4YBjfY4zwynYtYPcKoMUpdG9EgTSKBmVeaFyXYkJxU3V9MutWEdLYhXDy",
  "key17": "9LzhEkdzAL6br2QoRvzWCGHWPSneAkKXiDRX3ZdUnCnJBb2DKfEToHnFh6c2ms4Pn5nf8WKXGXLC7dcrBxYcFGu",
  "key18": "27HdCQKtSujXzW8vAZPRRB19Y74Bab7d5hKxp9jrx3F3YWfQFTkkap56SAvMZZ1TNAqSATYDxnJYPFirAcjjRZtg",
  "key19": "jpagXr45jArCkoZs7SakNjZjmsBa6AfjfgcSSmKwto7T4MaHGKpgNPKkp3Qdz3BCTQm1rQC2PCxwjNe1HPjAdj5",
  "key20": "5ZNj5HbMsRM98soQ2t5qu2EYuV3wtkiS1zkMyxDo3AqzoQrsPVch8hHex62mHB5EJKK7rYVDo6HvyEtwPGR5eJRY",
  "key21": "3iJcaTDyZ9uXbmPMPz8yGBSTVMFwow9yodgh3SgyqudWsj8TikeEk6316w11EzV4foeHwie3cgi5tYDNpWtaLiYC",
  "key22": "q4yEH7zstxkYYdmPZmmKrXviUoSaxs7qFtP6hJAsmqPoS2pnRBwv4Rcae4VjBEDxzSf7K6pN8gCS7TxcJ4byiVy",
  "key23": "638d9XTUdQkSWzgo6LBr3o1DuzqDxTpSpos5Asut3XeP8AQ3mixpdaTDwuJtM898XiXV3B9bcRQaYXyWiLhH23R",
  "key24": "2uw1WKwkrdNgVJs6LPL3UqiqUeEGN4PekuUwDUqfysaF4gVxGXfjFvbB4Wtwe5AD77xQgpf727fbS3wFVAWVGeqq",
  "key25": "3XWy47ZxNNQ9jrqnesvgnL9qkPShTNvRpjpC4CvY5NecowihGBSPMhTSNECekZDToC5xrSWfxyhsvzmvEFAXH9HA",
  "key26": "55pATnEJU5q3KTf4C1Z8s71p3oBjLApDrPpUKqdV59UXHmHTwfPMiPJoi6Pbr9y5VV3qrnTaTbbeqZ3N5jHg7Znu",
  "key27": "5F7XU5E5F3i76uwcoGGH3JSxnj2py4yzt4FvfDLtYZY8xsCrUUuLmmmx65eRM5anG2jW78gWCRUxEMUEHpgsEmAs",
  "key28": "4XNsYXBp8USsap4hwuRoHdGYH4h376pYSYFrdDPe1dAxpZXHnkmJeSH2vpgnvngKqcAVnbtKakPxKG1osof4R6JU",
  "key29": "3gGFxcEKht69HiDAzb6WPsczinggaqPEVb4sRvb8GW9dXud1d5Xb39TxSmJM64DzyMDfNFwyG2sQSKrkQ7rJzVsW",
  "key30": "2Ycvw5dG9MrSQRY9a7pP9Kz6FMqGW1AcuwrLn7pb6NVWsagxVDuhwcy255gPzfGoRimVj2uMEAAGa4E8yfJ1659Q",
  "key31": "2o5wrn98PRhMNH4AZdf3iwG2LdUQNwXKwDfeRSUA5QBSgvjotV5nZGsxDsjpxZL4gyUgtsYffGYD9TQ8oPFWj536",
  "key32": "euWTReZzAfZJEzdNKsWVsLpyzh3RGyu7WqBvXd5fuCdnfb9ajMGApLxrq5iD1yA6QhoGkSiQ2itK7dnTqDRAhcb",
  "key33": "3JdmKDfu7DzgUP2UdUquXSNvoW8EiLp96LqpEmeabqaRnXfECnnju9qopmRbkFBFCgwMGpgjPfxdf1qYUHUf3Nmg",
  "key34": "4MAWS6whVEbVagtaGXv6JRJkyn91BqqX67QQxEsVjXHU8WzhJnYU1GUEM6WbWmduD4WwS72BB6QR5wg3cJgFCsWW",
  "key35": "4k9XLZ2uQvZtSBDoyfadpYCXNG75dSYxxGYAyuqvfUifmrwYzbSn13NxyUvmynKvPQ2rS8wTujc1R4gTWKwdNSra",
  "key36": "2ozUEkRWw8TYJdYCB3NUi5JgzJxVVjqkURsWRDrnaLL796UGCGYy8vDyqHkRbCNAtkXKCSu6VNSmQ7sKUvJEExAf",
  "key37": "2BR1yjxqNuxfvDCoSXgaeowpNd5vX5HvriUc5xorpYHfB6YyfdheEoTqisfcYhYaKsy2nchTTfRue79rAeXomgrW"
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
