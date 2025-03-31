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
    "4Y7qy4nK4uJrLHQJz5gsu2HqzjW7D6eMpwXehm76hPEYgGDwydYHAWcmnjJpso56CJRM94b3rWQyMWdCQaNeAA3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xMvG9QtJ68Cg2skaQ5tpXJvTCkZhZqZS8i4B3p6sBvKsWMnVhzkAuzZNfmJqzrmw27Pxqj6HBQ5uY4HsuiBigWF",
  "key1": "2Zf6cohsV5shSC9DgwrHVxqgNfoz91qhT6KPV2MFMub59mvRazxuXTEtHaQBKTeALTmeGvLV32G5P2sNjPrb42AL",
  "key2": "3dduMvYMaWiwiozfkSfDEvhdt27teXwHQtKGovcBrKTCAXbyZSLUFZdBLKNfrduT53uvjVaJvMMdCMBpZh6ShLt7",
  "key3": "3A1pTabvKsrvSunhFQ22PDeo6ta773MMPjGMjugxcfDbZaCRXytdANjueaCMSnT1fy2cW2sacAaMUMZqyvzyq8hk",
  "key4": "2SgztBVkPAruNyADSWbkySSGuZuDujfVmpLCgxJiu4mrPo6ZiVajtEhkN6owbALRg5kSvM78SSKsXE1Cktb39Ef7",
  "key5": "2tdBkgEPe9kXVkDi97mAtGx4R2A731DRsSSznFn9Ct7GqZvBfHudRccHL5r49SdUhJmX8RLAaPhgQPMzmMxTJBJ9",
  "key6": "4KF6gMGHpr1FiVUATQvFAfapQ6bJaiynNsPoCMf7i8Xq3PfnSiZ5ACY74aTiLMweMJvBY1QKsBWbS9aeoRYfYVTV",
  "key7": "2Z47QjpDsphNqYeGEz1PxC1ZwXaNd268jV1Yw2kAqeM5RiHkf7Aqpv6cSWcBiTnEZzwSFLZqp2Nge8Mg2pfEV4wa",
  "key8": "FF3DtbSSds8uBv4N6toUFp3gr9ikG1ZzAiivGvY2NUPezm1dyxNdaEHpdmAuFURQ5egzxdqHXnqCuk15FJAemda",
  "key9": "58fSHWYmXtv87beVAVMyXx5jF77f4KDaVaHDxPGFQrazwGDJEZ7RCarnmtKHCNCicH1rws4kaRSrYroXfikiyt5t",
  "key10": "4CrV7fHAs19NLYfpqnsoMBxu3oemerLujL8ek7vdWtDTLnhBqcfF7K8DupAg98ws6trZ63c5sqNBX66Yz1g2b2ib",
  "key11": "57CaDMu78AbN1M9sRfJhwHCt4RascoDSuJ83wKG763wGzAA8oh41twjnLnc55F3Rb9EaRmEs9cwz2PHAyGG63UaC",
  "key12": "3EfJ2RnKBBZwgzbFbAR5gCJFapfnN7wAMHaKg2BnsiNXagPLsUGJXAoYCbzHPvPYbXVFYFoDtUU9wTnPmifmFk9H",
  "key13": "3omxHtBxWMYqTF8bu92oC6u1wP8e14ZD3CVDt23NurPQ3i5vomekCwMiys2pKQ8bbVQQwmj1gBXFhrFxFrG915ZS",
  "key14": "52Hq9gwwGEzCGjrd2XP9Pf8UYYB6xnQMT4eXo221Fdd9yc45iWs9bL5MZnmqYqD6q98BJi4iVFkogn3fiVWKhoFA",
  "key15": "yCexbznfXTThWJxoqvHPrUeLyVCYQkJwzjc5YWi9xXyb4U9xunML8Y4DN6prRWmx98cVfVG8LY1fKe9DBsBHxDs",
  "key16": "2kmn4aqQ7df4fbWSX7tFNNS6Rp7KqGDu6S9ZJFZP2JrmHgQSoznDHrWbFtfvqiPnVLWYBAf6MCQyFQYoxQMBBEwt",
  "key17": "4SKzmHZJij5SdQxUaGPbjYp3tvdcEKMjQpcs4sdFNSLwevxd3Yp7LCifjZkrXYeCor8YnUW7qmhXP1X5SVEw7va8",
  "key18": "3ZosmK45J4bcYeX1ZDm227ZFo9ntFFRhbq1DhzY1xCd1ZbUqbXCTxx64HmTRCMw6CRpmFUPdfHFVp7f4JncKKXf7",
  "key19": "ouujNw3wSG2jiAm6ZFonJdvXfkhiopyqFg2z6FfAT544xNhyBEZpaSU9tUu4AB4wAx9SXmRf2DzgAr4tNes7vJb",
  "key20": "4uuLG6nj5qN3hcuN57A9up7Wr9dMfqFez8jfwmSBMmx2nhGuTtLL5tCPwYQE92fBQD6bYb23kiueN1eQFTAATvue",
  "key21": "3bYQjHnuT75kBayAdGpfkSTWqvK2L26P9h3D5hk37YbMwZ4Kz6k1G6Acr8GpkvrD2wsVzPahJZMLhBoAM7ABWhVD",
  "key22": "5wQvY1XBkAZ53e83o65W9zD3Yx3iVM4fhpG7mK8XRxjC2AScjeDsvCYJc4d8xuMcsTtRgNDMjVS71VZJS81oM3Qy",
  "key23": "2otKHWUa3iAEnuW1Yj2BijbPiKBVQn7ozceLYSi3E6afoYX7WqKzWdZUb93PBCgs8xizRTsAcKCCS8owGf5TAyTZ",
  "key24": "riGRDfPBqaRwmX16vJEa86KREFXVYZgFzArrX4Z4WdudbsLoV1UCnLt3dx5yAJmCMBpp3k3fQGAXyySNYXUpAw6",
  "key25": "66nbLh1kHbyGERX3eRn26R5ZzrYisae8cijTsHVWQeTjS2quF3MGXunfZgirKqG7jMJa17R7d2krTqkksDvE4J4i",
  "key26": "em3EprL5boCo2uj7iS4BcrUHwuGmuWEVGFsF6fCeVf8BFeXBvChNRSt46faSvKCdM9BMmjGvfbD1F71q9f1Wd4o",
  "key27": "2EbCSZmDGxvgiMCqf1tvosjrGtNBbbBtVWNueTLS1FLLbMQTfNXgMBA8gcpNFD23Vbp5AUpaZRcKmMpYNZehzHZB",
  "key28": "33UzjrMpNKfFZ3WQfPiX5JXd7HGYrnv54YQ1Uo2eNCcRvAnsNv9mTcopEgb29BA4HFE4QRiMB6dWkqJbxUiKV8dQ",
  "key29": "2S4cinBPfaZRpmCbkE69KvesRVmGyHvATi1ENFV994kKWCc8daUqwD1Hq7mfoF6A3BZ3f1Uwe8ygqEtQe1xcD34S",
  "key30": "46G6K2R8nNWuXEUKdFU2j7hbFVLzr6zRdQPTXT3U8x131zUspdbEKJkKvQnDpWgnQvBY7UpvzPFoS9HjagGCfusV",
  "key31": "5znFS4igGimWKprFM3ZH6ata7QhjJjVzmLJLgMptWSJnnCWsaioKiKcJqosvvJiKPywnUkZ8pXAoXNVPReMYdLEj",
  "key32": "daEnDHYSzAnGdNffMn4kbpwTt7Pu3Dd1gjL9BkwkmEFQrtuakNYw3Gw8WoVmRCwfyMGP3dtDrwdrAq9X8RyLrvQ",
  "key33": "3d7mgjwXZKqcPgkHRDASYHi4pNUzVsG2DEd6swxeDPnqvcNFQogwZEnjFt4d3WZFTmQLhfG7Ao7frAxfeBM9mvLz",
  "key34": "2CtMT6YkCe77G4JLYCjby1fHNe2vx88tsjWy2oZ3cz12NG8q8VBBZ7qjqn82w5DZ8r2Pz3pg8pbYMaLgfRQCg5Bp"
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
