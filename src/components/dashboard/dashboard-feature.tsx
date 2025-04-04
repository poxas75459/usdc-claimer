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
    "64QEg3DXye3nJxTH3ZFVKzr1MQfDm5tXge8B9CsRrKJUDcqNrHvntHWup8RFnGbcHzmjtQvZ9f6vLvMTGxSCWd2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nkq33TRkZFuBM1d3TK5oyA9Nsun9yP6DuJU9FbLAFDtDM91AAfo7qd3T3vK6LeG8fktKtGt2GNVgMv3cFvKwpLw",
  "key1": "61nsRHdi1TydfwN4agdLXVTrm5HYRDThxpG9vSpSNnxWak7hh4Sk9fXed5Rm4iAqT9bfwbWsvcWhtpVwscnYEn4H",
  "key2": "3A7sSsGevkKJZ279JzvJMV4vyEUeDpDjMmzNMzBdr835ppsS7X8DMTE1LScadKZyEffTYKaWdEXsf7rk9n4WgjQD",
  "key3": "4LPg785yrctZLhLMWCCLnCiwcVFCdBLpjzjhCuoua2P6dZ5LbmijTwYz2huMtvMHEh6Y3XPMppDrkHuE9SqbjMSi",
  "key4": "5JuuD9yFZVDMv72aXoKW3ynBh3fgbPDGvP4zQcYCbdQ27BCGyjMGSSbaF4S8jQv4c2F4pwFUyv9BoNGQw7kq2nyR",
  "key5": "USnSfEjsrZyRJ61byd9FVydUCfa67GxWNdtHsHdcxP3Vuha6EvLYPKMWosQ7tJF4t5TrFBcCy6wYafgUphKX8vk",
  "key6": "3L7WiT3UKrKmBYaiVsuaScdpqGxb7xFD2fTr9Lsd4f8WJHKheibFMjdSAyNPf6LQaohxkxR7fRvH5iyGoun8dxWB",
  "key7": "NhsHPnkmcxRY1yVuTp1CrK1XpTmqam4LBJYgkMQFeL1AXxvfQGp2vSrDWj8py6SVSantK2Hu9YWL9ccSYWcSvCu",
  "key8": "2Eme6Q479G5WVUktBaEyj1cZ2siyhcwr1iPaaG8MTdFBHuWVp7htA7SXsmbsUGsNKg29jHgxkZ5VR95c2vt66enV",
  "key9": "csDYoGWE3f7VgMFXDVayPnmNLBHkMSznzv3ZTeFbDhFnBWrWKkgFzJPnq4gVqsWjZY61H5gNgHfMqd4zJvEMJ6R",
  "key10": "2U5HQGi6G2iYFDAp7Jz2iJkJXkf9vPyCVnN3Dufwac5ZRXEeRkYz3MHZypw1RjbPWJcsU5ycWuQjMQwCyFUS3ysX",
  "key11": "ShUpmUQF6M6sDts277CutW9rNzqaEqDafw7iHFvxHav44CoqHCNVz8ZRZNK7bU8AWkbGCNQ9VY7MD8KzBnTmiPq",
  "key12": "AmVeX2UamAyUprNAEjY9hzWhRJvTEL5v1gANaXTMnpSg2Nu2YFumEyoyWiKEShtmzJVNPRb1xEBQv7aJrB43U8U",
  "key13": "kaE9aX3yT8JUq1CJDjrCDAQ41qHYhc3rpUvMRfeMxHWHY5MrMvrkqPbFSAT5CXXNWtK9E7hk1rf1cBGBfQuWQ5D",
  "key14": "4NfgyLRun9XZYkBePgZ1JY5GKRDWtdTsjW4SrXPT92BVidYgT8C4bHqBnaubrxoE14RSLcvTy7Vj4MCs6hVnAFS9",
  "key15": "5kkvevJjVSvZujjENprAS3EUA9oYqJU2gANog9T92k3NVjAjX9uMYgnqNs9iQmKR5i7zWzvSsY36DJfPdE1VTcxo",
  "key16": "4MrKYktyzc67KEXfptNGhPmtWmuSvbvHnJroY1UtcDoPj3NEv4S8gW1PmpsbGVxz8L1QhSCPCh4Xfbtx179GmRaE",
  "key17": "3ksXEcZAvNeEHYjv3Kj6Jho28mtCq1k2Aqpphz1uW2LLanYUG5CRHx7C14S7Se369yiigXCh94fcRGAHgGmPkSXu",
  "key18": "57q8bhrwthMxACN5PFEXmcMH8UQ9yZusGa6Mk1MEtzknwvTnUFejhvRwSqtq3zBivw7pzAKGJpgQKMxVQABViYvL",
  "key19": "3JUyZyvgWi7oeBpp4cNgCbV1fXygZbjLm3UbjxKJrDp5bHWDFBwhJQt5FnjWoU1x8fTmGamyLX3w6hEGf8NiRbFg",
  "key20": "2m6a4jEQ7zKv8eDUvFbaBdEaNLJKDd7o1Gp8C9zpgVVMJZYLgQd6iivqbJEvzfH6ZmmA4urZL2EbqNm638V78zgo",
  "key21": "3FoQvqASCwvHEx2Tdfb2iCRXAVbdCVhYPyjdPodcv8j6oAaG5tFAVcZc4GxX8Wvo7sTVMvbxjU9CB5rntJZio1VN",
  "key22": "5Q4ev6LfU12JuyRnFaJiDfkbjhSw1xumixfKYQaruAmpQ8WhC3izvtxRjnQYLnjNSWe2eZ6YYBCnhL8NL9hbtuXQ",
  "key23": "3kU4w2iU9aZP8FCHxLih6mGLx7zovRSujARa1sYuQdRsnVYPiykPnQzAUdRuwmV8XNH6aVBp3Wwozhx4dAJCh8bL",
  "key24": "X7tkeZTNYDK2CseacMRpdwuQW9hsSTnSsccBxtgR58UABAem8px9Ce2mGahAG9Dw6YonquyahZA5CWmaksZtu3D",
  "key25": "22Ar9sVKr8LZumZHrcXEtD136RBq6ZCT1YRPmgmfw5CLy61LPRjY78ZCxEPLTDBhVBPGZfbZRvT3qPdYKvUYPeEc",
  "key26": "3BMHBhsAKoR2TnNz5LNuBXeHXfaT1G5T8M4BCduPx4shGYBsdNCF6AJb4EYFNQ4vkj6qArvCRsxxeqsJZGAbwgsZ",
  "key27": "5Qq4Ytq9As4xdTXMLK5iUCsdkCwBBL87Z1jn5rS6YBT5tP8yMEVZLx9vr4cqx21PoAoX7u1u2drNe8Bz5bhLYmem",
  "key28": "TaYKumyspRSXsuMh2gcnrfr38sNaLrb7us9pkQfPpTg4bAE6kbtHjSbokAZzkEP3wLZBbS92FfZb6oexekFN7Xu",
  "key29": "4LQikEFevvsq1FXMeqWuyr1zHBw4KC3kCbuoLRaPtJ4bECV91tGMnzZpjEm3i7GUcvHQsnosFQPFLJKLJWFFXa2g",
  "key30": "64mtL819AbUFhxyYU32zvUCw4L23SeX2mHrFNWxbivDXh9AqpmG8ZnZ2Tdt8v3RTdVcqLPeVTdfMrpEFLqcp7GPB",
  "key31": "5LTmooDYLqt38NTqxPeaDNRrx7RjgSgGxtRcUbiUStUsXRJ15S29VvC93m2HvVLNef1bFxesW3fgA9gyG2zT94nC",
  "key32": "3rQD3CpJsDMfKhzkv1tKqPzeUS73TUqmNGzc3LuEUvie9xAkMP2Pzwo4Uz5tyeqrTz6XoW2ABmTR4JqXPvxhTmod",
  "key33": "5EiFAvFnzZN9Sex45NtN1R4vm5hFHo5LAXgZcytfGvbPvJhAmH4cLdfqWWgahfPMFA8YvRLKUXU46x5sfi6Wp5Lq"
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
