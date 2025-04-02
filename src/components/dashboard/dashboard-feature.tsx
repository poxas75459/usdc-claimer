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
    "3oJvtRWDW5SDnvJpD6mLQSBf9wX9wynifF8Mgw8RabyPbZDYs8An8LXCBLbWzvWjeF7sQ3D3cHSr3fSv5PK72yrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SDZxSbwfc7envkabvDv82zo3Rz3QbXm9SQsEB1RBgH3GvYyV7qC4fM3UKapMG41znZ49zVgHceaaKfnY9io5vMZ",
  "key1": "3B51CD4FXniuKf5rrUmhoypuGbvuDpkAZfTDUmq7o1tzk8mtswRbWoDPBy3ETrCmzxUtKmAWfFFsZBpeLzdkmUaY",
  "key2": "5ahF9UNbsVvws4pknDDnfXp2vaKJ5Ei5npvnArMaoEazMzR1dC9aFw6P1u1QXJyzJDMpkzD7j4rkjRGzYkHKzX5",
  "key3": "2tFTykAS7y2e7qSdCRjFXcdd3TLTazuuXeggS5DDGXsHwzVSDPnUKYx7ztzMnByLJRZnjwjwKRU7PaAvgJsiw9vx",
  "key4": "5VsXaNFSAa9dEi7Lb72mqATxxEfwN5zgREZNAwocrkfuM37DogjVBW9rXEzaHCKghBBV9V4oRwkHd6iSwtnshk7Y",
  "key5": "5mhMp8XU1VRATHVm2DHF71pcGVbx4hf3DhUGfSVY2rw19cjKjSi1nRnfteCirkPhJLVnKSS6sLuUZ82mbKHg4EK6",
  "key6": "3SdoEZ3C39yzzsHf8QPdf7N3H5h4xxF61ryY3x8GfSarQ7ZmyduETtEwaAY6poinVoY2FBziFLRTggxYxnBGimhx",
  "key7": "32nGYJEgAnby3cxDN7ppn1ZzuKJQSvVSmNjiKJwcCxNUWzqr9gaiiQE7Q2uXA4jNY3sa7kr2NaQpUUAjLynpsmp3",
  "key8": "572Z5ZvZTSRYiy2X9bswmvJGDvrm26FaAFSB3gAEa2ESNaSwKBQbUocaZxLqgU9sdoAGTQr61W5NwGxh6ag9iteo",
  "key9": "5zEUdGJMAvQ6gxpmdwX78LtHFRGFfioX6dY6gMbd2P23e1KdyKAnTYYod2n7YEo6uJaJ4uo9xaj9M8FH9SqijtWu",
  "key10": "37mRazAJ1kGZa7bcmw1zxMWjQWYaehkAqw2kWynvQmKDjwHtqEbzNwqt2dM67E7fjZmU3wJ5eAzKvLxeF7hqeSQy",
  "key11": "4SG94kjoK4L9qjty3rbPcbwWLYFTN4TzoXAdTFphgirv695TX5B5byMLMvyTg9dopKAZWwXihmPxLYxS8nHrwApB",
  "key12": "3xvVpoFhsPjJqHpt3asoYfPsTpfbPbR6oYQYoL7UQ5vnSMJpFYwcrkndZ8BVcCx4a5pvmm3BmicPuLXFtnD4yBga",
  "key13": "49dTHDXJ43rmGwZj632AHxjFQLkba8qkZF2bPwcA2GGQuJfwhGxrvA8RsMZySjL6PwU7ovyvx3XwLssv8Np45ANg",
  "key14": "z1kFVssgfM37CR3VUHcCheo45fRr84PvPMUmauygHb2LR1qqEWPGCPUGAELHnaobd72Z8KtfvTr8tEzSE549mNe",
  "key15": "55nMYX44mC4vkTsy1fjV1W1NfczpFy6gY9uEbHvDkR8sgCM8HwVEMJxUZcZ2y8uuET6rZVe3A198yRrVXqjR1DDu",
  "key16": "4NndaLdrnuBnaBL8nGmsSr56z9tx2w7R6iqAWZDrdsmgzK88uYECeG6HqKHbJrDpm1L61DAonFbxQ8WJdijT8rVA",
  "key17": "6ydeXU7kPJ2M3UXWqoV3W5ZUyboDueocSBSiAyVsWqF8ww9CBk5Q1fdLbLC8tDDv7PGARAEE7VmfQKCuwoK3s7x",
  "key18": "CVpkPCSLf8es5HKjbieDULmquur8vuQif3ZYZsx1Dxkbr8DurFxhbTGXTntfkrx3ufSfuTLXBM3mMAFxr2vQjpk",
  "key19": "5c3W5B4VEcvn31YdZ2uKtU4qDf3QhdqkAHBYLPDXfuER41t9hXXz11XoQZxJXSDDwkuWWX98ydwUDfmAUXgc3X8P",
  "key20": "4QDtkaGnPV5KiUu2Y1Gf4gDqApSzroiz2kgtb2RcjprjWemRXZ7JnkAVW3dq1JK8BFLogHGAZQwJWa9mdmdBAh2o",
  "key21": "3w3dk1AiuLLiGyJA9jJJXdwsH9EsdxeTTYzNdRhaYupvvZ3Fz1t5UhfykVJ5TxZv5bpCN6kbeiMCP5pSwFYG2qaT",
  "key22": "TFiPFBcQG99EsBnTq3icGRAXAwSXVQgYpj3VRS1K4XQJVeWX2io7jTTXdZyegWeUR57d6SUMpAZLHLHx5LLquU4",
  "key23": "URYXov8gojQTp72xEUZua71ypfkWQVuUUSDF2NTCy2remxiEDvq7nsSRXDkh1CnB3j4PbyG1JqQenxJzx5wp9fk",
  "key24": "5TmictaoZ8qqMCwWnCHdRs9vtWAZcrvBSsaysGbR3fENymg21JrzQ5w5u76zqn2oVszK1n3wHM7FohtDunbduxXL",
  "key25": "4XPWqZD6Xg2MrWiu7GcWXfn6YsBcjhDn72Pnyd3xnV55AXB7dvwC54PCntC1xdzWaH2uramM8D3F2M37apfkuL8r",
  "key26": "4P3bM8kVFKxbVpzoYAZ33bg4H8ffs3hBJCwdYk68VoWtf5cKGgZUw4msd3RiuB2yP224W3AXnkC4E3RE2AQDya63",
  "key27": "523zvw9E1nqceCsWWagaM427mknAVRBiZDEsyi5o6oJ1eUMYP3L5c6WAuWbkWowpY8NWe6LHtFzGz6bjBjwLASDU",
  "key28": "4sCgqJQqjEW5XVt4zGxK8GfCJ91h2AMvuuCGf5yRUutzYaxRDb9jdBzWAMguu4GWC4Kg7gndYcc5dyhd65rgdvQH",
  "key29": "4ZKAutE8DSyTqG3EyiNVeXMr7feeAKtsqVVGCvDfWMVnvUCbMfyGzmBZsD2HwZwBvr7scCuLZ8mecTXrFp2PzhWQ",
  "key30": "5smrfEPNyACtmwqEgJ94kkxbYEz6hxRKDZvT4somR5h4tUqPsqtvPUmC2y6UM45pPvX6BQyFgdzGzQh811RPnrkB",
  "key31": "3aUojcChipme7XGn22WJyWahHgrGbvQWFTHgSsrXPBuq32eaivN4tpbaWCuQvV9zNPqFbd9g1ndSqNiPGcFRuVpf",
  "key32": "XCQZF3HrQdq7JHv5HsjG2mk1spsKeuwDPo9UKhYWstrL7vV3BrRo7GJBsKZGU6ZkuoCMyfYcQX57YKVaK3MxWfL",
  "key33": "3ayvnKjMZdTqm3LruRSq5ZJSQbJMf5QLQo9WdDZDgRqeemmy5FSXkMExmWzXWEEbsMmppBz1nfMVRdJyw8m8saeF",
  "key34": "3rQu5GZ8peqwonqUbhPzHy12L5eETpDXdSUuCbBSzABbpmfkpC6ffb7DkmeHfMF9mP1i9mgsM3WYpkdD7wcc3DAJ",
  "key35": "2wAUkQbBdQxy29GEN48GjUW14W1oKW63GoAqUtwtZ5fukbXjw1ZQGTmh9FbjgpUEWFaiH7ndo3oGmhKv22M9vCuT",
  "key36": "4vXNMAGjdBmxGbkcApSVvTtZGN4bCNc4viBPS1ZRh3xUXDm7P4F2ZuqXkJB7PpZ6vnDTKxThdUHsmTLia4g8w6ia",
  "key37": "26t5bQhkyzFxuF4jLwn2SJqVx5uHwoiStpsLM1GcHFCpxZzMq7DcwDpnGb9hAbCc1izHWTzLTpadgvpixZsBAxTG",
  "key38": "4Vk8BQrLk1hZXE4gVn9VCkY7fC91hYkXfAjBi5X5oLoqLV66uMK6er1gg19L3zM9eGYuvMgecSVNvCEQP7ieBoTn",
  "key39": "2BkV7qARdxGAPSjNiRV4eXU2hEAyrE1qW9pA3ZgTikRoqFeLXQT3Wx4R3XNtygRegyd7nSzhRr27nGbAnGiVA1Nw",
  "key40": "2PDaKXvhJZHKfcoK6MYv5dpMFy55NZgJkbVF86eN5DgGEHJAe2Hd8DqphNUYMHKZfHujTR6siwmTCaKFuu29uety",
  "key41": "5BsF1Xtprou8DLutKwPbYWqDjzDMaPcL7DjdEnaXAgdwWJFkAZm1heNhgHpf9PsBnuEPpZtV2eQZFbsHYuZbXSvt",
  "key42": "f1s7C1cU2L9m29YATjhDMBbCDJastF7QtSbFhmbpbdBe5frdo3xM8CrFV3jXAk6LJoubXTzFYNdJ95yW5KX7PuX",
  "key43": "3xSDabJNHcEwng3SBGpK7RJ17wbG2w3juNzoyrtEdmPJMfAfxPp4e92PjaekbpT6xfXGtxFWzV3f9EHBWtJ3Hqzi",
  "key44": "4MWA8Hkd4Qyc5AvZMLqUdykUf6y27JjKB1J665T254JopuKFZei1QXqHRyGK1yFhc4ixNCU7FPEZvMhf9mXjUPwa",
  "key45": "5UiVL7fKknWUG7tmiH4Ykvmo5uv8qxk4SUNqfciFxBzmudubWdtceTY7udvVQxrs9FHKSmZn1ipiCAoqbtjixqRe",
  "key46": "bddWZNsTVt5DafDyPdhaxmcN3wc3Chk4X3kD8orKN5TFNoATXsYbznJ3EVGmBgcZ7XfpG44rL5QPA44E91xz775",
  "key47": "4sAmWeMpvqyKQ1WLt9y2tjpfQDmj5GTVJXjkP5Qt9fZbccYQtAZAayaFaRWjrmmR5abrA3ZSc5uVEqNWfis59Brk"
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
