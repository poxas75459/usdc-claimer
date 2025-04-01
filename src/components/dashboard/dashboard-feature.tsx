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
    "4okzowq2XjtXW9KWu8smDuW2kauq53hSPSiqAeMiLqp2oWRkNpEFC9aWWzrRgCWU3xjn7opAHnfY6NwsAsJQDbG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sUprgK4QCXrtnbVkpiZHJrQ12aDpAQf6a9m9VLSiRYNJBtKjCdtCem4MqjeEqvsEP8N6JXTqbrPTzPsixe5KcFi",
  "key1": "3yaqUoFuBQRN7mXfT937ZXy5wLupnSDQVreo2bnUfvSzgsBBwnuH9Mc7HS3UifuXa9udbJqm6panBWDZqK7RLs4D",
  "key2": "3yn6vgfZdfUVmtb6xw65x5Km5jNZEP1yGr5eY4TzgtkVJxq4jFXn5scprvZmDUW7QUu1KJby77xFXospHKXWmse6",
  "key3": "4X6hmHifayP6vAd6LCXYL2xBJPULKkUEWdNhchk3zGEqVXvbHNn7Shi2ZJrW2gPuToCkXCdHqAQGnAFJLrHcFW6B",
  "key4": "2msnFtQMnrrvgZZwUsCCq8gYvWrrhrtLsoBVuFStzWprYAFfB7TAmbkQbafcaMFcdjdnpXEDme2ybsQsYYtmia3W",
  "key5": "3SqYfNUJqXpj7yb8z3SJYTcdfN1bFD198mEqKzZ3fo6m618LWWQFCEYffxM473dmGPLkYXi8yxxZ8mZ3b6ciPxuv",
  "key6": "28ftMdCZeig7GFr3qzgwu1BME5yysSm9xjzwr6VCAzzozosP51G2LSWhEyoLVDL12v362j2uW42EyEqc3xDRv1rD",
  "key7": "2CEj2AyQWXbvnsV5she9QMtfFy4d9tuQcKUiMAcYwZZ2K6PwFP2P34pY4qbmEQuUKRNgLHKtWwTqzUzUFebuGnDw",
  "key8": "5i7cGkz7pFKXsFPAmdid8AgdVLj8RW5uudNY5wGVLuajGqA9Ciwuumr4TS46H927VniFSnkUgnancezMA2YkWme",
  "key9": "3hyP1k3hFMFs1vVoeEMvKepdVB9iwtFwgGKsJpHCkFPfoLc2qsvnfezD1p4u6LNA1Cnsz3oHYDxngRZRjgVenH8a",
  "key10": "Y8kQWS3N8KgRPnnLycxegafP7du2MAnTRGNDrcrLozkCggvsJKxNAZe8vYa11of9xqyYjXaYrPbi5AvBJ5a97UX",
  "key11": "3VxNfPLRZgbip8nEKBZf6McP3rBup7BAGnCTmGUwdT3sLiuYcFvHBWnGiWaGv89nLPr5bUbrmBfRDjZH9fVro9wr",
  "key12": "4APruAQLRZiaingLELAJyDqPURTxnybYK3gQxKRHYaa3FNDdsNGaYWV9imoAZyVX3JMX2hYvDxR2dmySWDBvg2JB",
  "key13": "2XvTFQBZufqQrWngfJeeMsF1QzAEVMVzJtCwBKGsQ2USivcga6Zy5wJX77jjWeq5zgw5ruQ3U5D8uyCp2mW3Nev4",
  "key14": "3Xy5pQzgCrKaStANmXeh9bJJewcG4SE5wrQxZdj89hB1GCgcxviXPtV77Qn5wgwYQXVA1SaZZEFMXCpH4PecRFTN",
  "key15": "XYEMbjJjGYE9wrW3FEsrBsL2N3d3r5okucd2jywsUgxBFSw9BK8YwMt77sC1HVwvfYZWKWGAzi7p88u4bWPYc9z",
  "key16": "f3akJnCufvbzUeBhVaV9gzdWN88cBqfFzFT2rQ3RRqT5kv5NsLkY4ZZ5d8oXP5gVbaCvWmWYbFE1G2ThQ3Q6Aq5",
  "key17": "37YKdupTcRDPFagt19tr3af8XqvcT1BkjTAYuPgtdv1CmzusgoLRdUnjHPz5abLvGTN57nLDXGG6RJK1PsAt8bqb",
  "key18": "5kzcLDpo3rduPb3YvehciMFYYH5fH42XH5q2oNHHzoMcRyKLFJyjfrV24NLy1rAMyV1gCLE76bseTeHxuNVsUNK5",
  "key19": "DxmEFtiru6KH9XvCfdNT97aZ4nqpRrvCUwjVnxGtG6LQv2vyTMgq7mxuwo1cQKNx6xpZ8oPe4o3C679jXDjtvYt",
  "key20": "XSwQwDgLPWH6GWf7UQ219CD15nn8qee9tAC1WQpWNwGqtk2jeB49EiZwdkvxTEArQaECPRUjzFypMwZfMAwz7Mk",
  "key21": "hUAhP6YbBvg99etJWrVfXcSVguJ5Dgw6MbgmvuYHW8c8F17eMLJw8cKeTRw5GfAWPXFnNJgJcde7QAiGqyGiqHz",
  "key22": "5jyH7BYrdELMDrvCNcxeJAx8mQcqBk136r8gKiFFQhmhyijxpBvnQPPwCPiY6aWGw7KHWHGtGKh9oisk47CT3pcZ",
  "key23": "2impwMvmtbNRx91tRjVGvpMtAkjhsHrvAsEeJGw2QSF9L7t7CBPU6CoRoBMYnMxGLFEmJRDeTJHbVcBWsqokrk77",
  "key24": "54cHkyEZUQsrvzFDg5kAkEQVMALjJ4RA5ABcdozWFcuhJ5VtG7CwKLdHRMUAvEa7rj53E89D6EMzHic8AGE7o2jH",
  "key25": "DDVWHq9D6pZg149hTEAbtFkjhYA42SvYHzUmYuTGhVyHmHm4AKmeYhrZLKmxFhPaVPX3gePegUzh8v2oiuchYas",
  "key26": "5BV59xprZon4jPZDNuLYyB6vmPV2sUYT2Qj5AWPsdQtMKH6hBPw61yy5JqnzLPU43ibEopPP1RwxuLPswtpBwcHh",
  "key27": "4gubjBiURtEtRBBjcsbvfMYeX3VKX37UatKAn7EwyLq4ciZ97o3RBVTGTRwyMZ7xwLsbZtPpWZwoCc4wnsHZnTYF",
  "key28": "4oZVeTRLyV1UATN6uvmQqSP486qHMendXp89RdWLatsGe6H4aNg38jXuriCsrTSvwiKSFg72Euyi6Lox2GbZhrfh",
  "key29": "3p6P9wbVp7RVUwcWEpUrUGDXsFai1KQVXhkcMUg9CspfwpRwhqMCeYV3VKg82GTKbhasNU9Vdk6MYKVPtmnJx7Hk",
  "key30": "5LzshjQ3Yz2HvvG41ecXSuw3dnpnYmav1UvndAk62NK1yQ58ZHydhi6Ue7X3JknXsMnLxtf76ZQzkoqjupt9wkeb"
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
