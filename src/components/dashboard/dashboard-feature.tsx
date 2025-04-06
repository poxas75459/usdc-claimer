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
    "3z4WFK1xRjXbzuEFcd95hzL8iWEZAZEiQMVtGjPTbobf1VZwACbCyoaJdkF2qt1gT9J3q2MB7sVnKarZq6YqXVzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Lk4n6eYVkvmnxPf6uSpbGc2F8funFTq9goQyVrJUDxvnkcSEHmaQfSvfkmttTecAS6S4bwfBoiKApS6kmxDR8P",
  "key1": "2Bv6gZkHtWN9n6A4DVtXKdcJP1PKJqefTRkxKXKUFP9GJgKJw3C972XZ8C83ATXfo4zwvyc1FT936qFsyJDqFtTm",
  "key2": "5tPn7E1vR2EPnfF5yc5Uxvk2h2fasuqzYCJVWcezS1kMDGMEAfiiiWJ1cP33sSHE7tc66dVCLbSsTjV8FkRjKMa7",
  "key3": "2eZG4NLC8vKbePoXZTCmkPG59CpNB5ysorrXCWigXzMMZTu218BjzQitZ8uzA6TB6VjX2DKtnqaUuEZGCxJiieqs",
  "key4": "5iZDRnSvq8F1t3Jod74smdMVNvdx2VKd8zj6M7F5HtiZqdNLo2Ny9rm913T7F5DjTHBZuq2eHx3spVVLoLyJmwUT",
  "key5": "3Cuh4LdYimHh5RFG7PyU8ucYbcpoxMTmLCURaF6K7sTJhaRD1HNRjCXXnoQ2pX8FKpcAhsRagaQ7YozXdiGeJBYh",
  "key6": "nsd8difWWAv6frdtKKT4NF3pKeYuMewVsjNYFwes4QUnMj4PAZt6xJhhw5irw4PdgW2dtSzUbrxGpsf7eJw6owe",
  "key7": "3iQWsWSSVBLc9njQRcqJu8T9im7EXbDdEf1xwysYaEZzaCxiPvjhNFcyW7khf6cMnpRjHduqHrKJfBqHaijoPqDB",
  "key8": "4NTy4zaN1Z73ek6JQqiYRREdf53cni85k4nY3RLFbd3nSDTxuXhPb77KNiPGxqMst4ZbDAwNBjea5H8DdJkQoeQ7",
  "key9": "2qCE6xXSM5Bh4brxyaU5UU8PeRTGtKrqRzV7i5F3EjR2dFZvDn2NpPyeMo1dQ5TmYavuNspjQPXnnJcUC1eGZhK9",
  "key10": "5zV7WcXiHHrCoraAaLPAkV6B7MMQr9VCGwRrJmUvgZjx11jyFovphVGC3eW3URYBJcYcWCcJo2oREksFFpLTUs7o",
  "key11": "4nqtivhJMCp9iLLcqZ9skeDZRqP9pWfDPqT9BAQVZL1ZVs4KbhzuD1Xpo4xGeUu9tZfDu1A6WpJ2nfQ1pe8qfPq5",
  "key12": "5VCiNBHKA7xCprss6Y1bPMfcHYFkguz7v3VfmREAJ2zBxKfzH6Rbxb3YC7e9jzz65Eh1X4sUhHtQx1yXcH5MHr6X",
  "key13": "24vJKjxhHqDZmyghjqZAZ6Ci19GKQ6UwSZceQsnCrJEyvVxNuhpWirYp2SK6JUCPLphkPBzqis3Az5cjuSZKQ3Ac",
  "key14": "4WcxfxDvraJzifPw8EhoEqqbMYXswfLrnodg1W25E8WZRLVUD8E8tnWuAgLYkkd4RE9PJGiL1Ywgd6UWp3uGHsy5",
  "key15": "2sgBr62UkuAcWabiPHaXvxHG54PvNoYuL43u7UNca9MMerJsWcHbmbKYqvWtbyGPoPaTGqnDSS6qX5TFfeDfptSk",
  "key16": "5KRbpFoJ368nTyjmK4fKCRD4nHzHy5E9WqBghoew8xphfQfF6cxbkrAzjT7Wnkqz5YjPAWK6rR4Q5PuhE6x7aQ4e",
  "key17": "33AneN5Mz6snvbxf8B1RreqaTh3tdmkBWbi9h1QYqFafYrFc6vQzUHvtYgbFAortN2GaKQhhq3kpkfrUPDzY4ds7",
  "key18": "4Cj2qrmooknNYXQDbFqsXkb1kSZPdGua6GcYwTHRMq8vhiYc3EyEaCzJ9BeXvLojRYmTCGf72v5rA4GdZnHugNcw",
  "key19": "2wAxpD15CoH4ssu9gEcx95VYiyZ6uHApfFaCYnmb4rZs63mb8fEa5x2xQKhTFu4UgoVbHe71GfoX6qKYxXUgpH5K",
  "key20": "3RA8cXSFo6fqdyMHRReGSev9dHN9QbQ2R4wnPvZ72ausBkTaaM4s89phkqPn5jz3GsX6td5hmPk9naX3f58RG8Aa",
  "key21": "4GxCKANkPyEVJksTNdCjCrcoEMt7bf94bvdDgHMCmDSmJpXqaasuY6ph1TgwdksiDTN89m1so1wg6NagoGQnaytf",
  "key22": "2CMbpH3iNboMqAt81nskEY19jtcyknH6Y69UENeu6qjgpug2FRNSefH5kNPBkgepCw8tUFAbH65qwELBDUt9G1E6",
  "key23": "3NVPJtuckPNpGJoAPhhYx4SwA7jyRYbQYdDsBUHsN7ZDxyuhh67onGRNf2S7ahQbUpwCPXwTC939dFyqafzwPgPS",
  "key24": "2GBFVtpJ5qqKRoCPEw54ceWp3C2DWvDxYeUbM7EHRhNQSKRcz3XzPZ99M1SMYAgnSaUoQtraqdp4zobghLWgnktg",
  "key25": "3oHAu8gs5PecqzQz4DwsBRy4vP1pDft4M8em6YbFy1cdPuWntkP3YKoFEfTvwApkjXG5T8p5TT8Zd2yEQ3xf3iYc",
  "key26": "5wtKXLKQK56juKvWntpLwjWJZ7cd8pnfTsEEiqDx2ZWrA9aSqJdq8kNGfQornZeDSwYPRzZAGBFptWHVXx7JVo2q",
  "key27": "4rwka6CSRZbpzc5DgwH9F96YZvxKAVMRsub8hSbbP3c68bFHKp55SNJNq4KzwthRYNYCGZX2xqLZuYPCVASSkkkS",
  "key28": "3n4VtpZXU9UoPk8autikHZKzbyGW7X3QXZp1W3pPS3V6fyroK2WKpRUx3F6bQEGarfSNFk1NL17y1rdaDCEG8SG9",
  "key29": "32qXQMHfNykeJLLD6PBg2U9yuvQQZaSSwDFgTpLo7qWTqwAn2mikMuc7AyNPCSF5gNmQFWwivrTbivUzuPYVJbbw",
  "key30": "4uDMKBrxf4nX3a3FSk5UwEeRZFuoeQY2qJSXPVkzdpJR9Bxnnu6CXu2zomt4d3P5C7bRtpXAg2bNp6eA8T1t7cUm",
  "key31": "5Da7zkV98FJAgFHBiraz2iLLJMom7Mkwki6TNJkBuHfmUCL7WQ2LvU47wSB8yfiNCiPerGCTY71KTpe6C52Zky9x",
  "key32": "4t5sqjGhUNqTbUSL8zby3B2fr3XDc1iH4rrCKERyZJNfqLhbByABJtpGu3MLJGQgEgRp9e8VWdQiF3UWabKvKKLA",
  "key33": "2h39i3KzBZcKXcjpzFGFQ472GL5PCCG4ABpNfuQHhjqN8n4VkT2L5CnhGksBLpyuvWyLv1octQv8w3XAH4eQQCYz",
  "key34": "7WA2H7vdK6nRRjuGWU1D9oxMBUxYX7D7jz12TJsJngYY4L8SnfozzQe751K8Kzsim3mWknnuAt4nmHZM1gSwfAg",
  "key35": "4iHwzcJtC9M1jaUK26yfTSEzzwGuV8sTKG68PBNgkF8AjiJZbvSdwDKWB3WWoNb4FwePbxVYqNyf9fmauLSMiKn2"
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
