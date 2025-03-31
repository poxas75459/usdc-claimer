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
    "286Z9wveHYQRUEW4BUaDV3mV1oFX3D8aZHsnuSMWJuJWAei2RLS389r8B46q1tyn6jKG8VcxkgLww46hPSqRph8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GbufZPqED4EPr1ZpLYBNSCMUCpsJwdxgHdD7JC6ZG4CnMnwSAqDUr3SKZwFXtsuZe2LFpFuEFY1eUqcKQhnf4Y6",
  "key1": "53j7YvAyr13DD9x97Ve1Y3J681o1uwhCVD1foP1buiTP9HRgzo3Q8igYb8z3VkeMkRRwM6vbwiuLHe16YgpfM8xY",
  "key2": "4mZ6UauS6eDVrHpZ6YsiCRfkojrAEKM8Jw2AcAjD8JfDqhzPjQhAHQPU8DdvrLk4AziAZPZsvSDeiaMvsXLt95PK",
  "key3": "3XPg1t8hAS55gnWMCZvuT9nGicHCTjT8PU5NptfoK1uznRGx73PhHRAw4gQt94mVi7zmUpvtfSHNJpEHpW6GRkF8",
  "key4": "5GoE5m5CqnGTnSS4irMU8mXdMcfLS8hR2aJz87ZDxhDgrXarxveGmgMm2eMChZiCLcY12H3ZtVhh9fSiuXz8ZXYk",
  "key5": "4dKeRCBqgRbe38GBk71mXMNy2JpHyyKdeSZPRa4KvjJfTY7je295pbChz7RKZBDGXVJZKkRXjsDvxWkua3RdQS22",
  "key6": "3Rrva6mBFto8e8GbhKEt2teEWpxWN4QHrq2qjUp9Q5Sg6iNcYVApny2fkNr7UAf6FMNLKrhSmMNVQtHcP2fo8YSV",
  "key7": "UEbYqdap43rdj6uxb9ZPprBrxVsukourUwczJLQa6s2D9FWG7GhN8a5SvuQg3NNyyxAo9jTNA1qWF8cVKwUci4F",
  "key8": "23Kb5FTanJ2Z9UfCqDCbNmufbMN8mzbHTWVknVdwJueXhMFPhNCiGSYSD4A4jLBkLsKAHMKjVXkrpLuDhNai8tN9",
  "key9": "5T7AWX5SHqHs8jRYF4B6P8DfwprgL3sD37hnmJTFH4AyCPjjNQEjgDHFnPTnGfmJsarkDh6mjtQoTnb7MA1kTuGp",
  "key10": "5a6FCRXxSkWQxREqTucmE8wSs7jfhpKCHypG4QfSktQDGniG3njHrqYfnSqipmzX26MA5ZhSGkJXej98RSLnH1Ay",
  "key11": "2y6Jv56E4Xs7B2ZPv5UYMgB3BDKLXsrCnYCysqh6F9Khkb9BpsWPmwbEsvZAe7bWE89xyh3Cti9XjncwGe5DCBWk",
  "key12": "4v9aj9SvkMRmdts5KDhHiD8DT3x7mrAGzroQVBvvjYZxpxCu8cTK6NXBxpqLUDwYK6xB8F6kjFFQhn5aZeiF2hmw",
  "key13": "5tLhcvwvkhxVpPVWqu53Y9xY9ypQQvDNiHmBnGUYy2jpnsodecgVGtjrkM737v1KabeermNMpNn4EnSshGkHWPFJ",
  "key14": "cMxnbrkaAuzUD3Vcx7EisnJRcmRRHCzrJr1TqAkPsZvyfLYDHbRq6kVrcXLncKhChQMr38TbqcQX9pQP9Axuxim",
  "key15": "5fXL3vYhYLthD1TdiVDVGiE3eDRkybPKV6EasCQZd7gWM9RJDBi8WjcMYCeCaa4aibQFrNP3f56UKoKzNM6dTPm4",
  "key16": "5PszyzuKgrSnt2E9Mc1ZPUcAgPip1rp42T6ZYhQwg3SXm9aUxfBV66gG3qpJZHLuRMjM2VpVA7DtR81tZg4zhYyc",
  "key17": "ZV2Dzt9wZxehGNZYTu4Xw27CCzDhgGPq34xe3noq8gKoawSvHxQCVTnwATtvDVxUbafcshcJCGnCgii1ZyV42Ca",
  "key18": "2mEqw369dVAdp7wECyAkYFaz4DCsnmx2BNwEriVbszDXpf6RCCqVokcNy6ESLyDQEHBS3dytPMYGxVDWh4FQw6bU",
  "key19": "2euHkwV3B8yQCy6QNunEkskVKbDNtWGykP3q6zB6SCgDNNsZ7C1guk7kAmjdSKmk8HAcmSqTjVTsrJMvGj48t59E",
  "key20": "4TEGU4hoA5fWBb3K6SNcuDTPhRGpBpAmkXepZoSoywvG9kKxkgJ3JcTSTFgjJqcQd7G8ZC9DX8sqBxUjPzewzZ8X",
  "key21": "4uefN9RewnEg94t5CiBMMhK7guJvpVQoVR69mu3Ksu39oZEYcFSMXSGtRhkPHtkfVVkCQC3VmmP2TRproMG9UJKh",
  "key22": "4RPz2zZt6n7F59hQUpnsUzVTn1c6BhexsWAHNhFYSYPKaoQEdqNJeRmpxnAk3xZ1cRJtt9dinoSPZv2Aocz5gUVF",
  "key23": "4HM82kR2MoHh6p65YvkELeDDUtir94UeRGTsDVwV8eVoe9EoiA25xcJ4TyZBVBbXGUCovKiBPXib7rmmz3SsUvGH",
  "key24": "26YrGNYH7DZHtrmqT6yf2QricWqkmGzcDAS189DmMAtmXAHhJ53DepXATW9QwBUhRD2v1iQEKCnAr78GdxYURB4R",
  "key25": "5JpVydhaSNcJRph1s4AYZ3UTZUTkPduA5o6qY9oFsjWuQa5VLjdWqxaLHGoZLeRtWUg3gDzt3sSdA7SjfjptLV9s",
  "key26": "2N7dZ2tpkUtHfPcWr6EkRCi3swS5QvhhyqpHZcLkkAGc5jz9cE3CNepvNvZBiHnfhHFwFFiiUKCL7z7AF7UYktPB",
  "key27": "4pZXAa8PVN8rEqeGQazDu6ZQEDZ96WUtXPpZWL8rqptXLbBzm8UAkbqQovc2env2aKJxoCK1MDmcKXqa3Qp7UkFZ",
  "key28": "wYVtik3toH1cDZWNFcQdCaZKrpscBu6KkmbZSJ29VShTAnzvUecpYKZCJaiVnzqitqq1fJFUa4CysQg2zCEEnsC"
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
