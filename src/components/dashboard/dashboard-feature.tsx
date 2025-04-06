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
    "5Wuz2uEjvzUQyi4u1TEb5EvXi3s4Bc5GcKUKY6YNYqMWyn1io48vhx7nyajDYUEy9z2UH5XwaRhXksjcpQLUqMKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BTuMtfimTqGN2grbaQniVVaZPX1TyLUk64GQi25dEsCdjXXTa92pA4UnQgGJj3mLaM9S4fpuKJnDFafgVsknRhu",
  "key1": "5qj49MgtcB3ZYKZNYUxLgo3BKjXvvtAtaWobFbuFWnFauQSg6SmoQyJn6yo3CARTDnGuusm7Pm5dQQBLZ3LpaH75",
  "key2": "4gkb5gDsFo8wDjkggAhQxCVogEVhr4qTFL7DEBcfbLWnRWM3euRsm3h6ZN1Gjbzryq73V2fHfZZfyqkLXWNuHiQi",
  "key3": "JJUB8tWjR9mcaLJJoKAr7Ebp92VYTcxsw8c6bwix5hyTfyJB2BFgAPwQrxcoMjo513oEuEBu9PVpTJYd4fymMyx",
  "key4": "5D1qSnFBfXcZ2Sw1yqgDPs6ksYbSycrtfzwCxFCSZqC2ZqSnrWW2s1CeNYnSodEptxRKgZwc9mGn1NeJb1QzJk5n",
  "key5": "4gn9fcnwb1jxuAFJoRAe4MYWgGv2WnWZxsqCqK26AAXD4dceBtpE2RaqGq7NgNEAQq5aA9XZph8n4pZ2UsE45fGY",
  "key6": "4R4k1FhqUyJLnzBs65aE1VouHX3weqDGDDcdAXYxbRymSW7TuetaoBmZwzFD4WDWMY5q9zfjP175RznLHF2sLBuv",
  "key7": "4x7TJTisFFeJ9oH45y6YTS4QN9T4K3bvmmaL5ZJ5Ertakiutd1CZFqevp7Ag5JBNe3rzz6iC5NtjScG1pJ9kXNr6",
  "key8": "2PhkPqkdH8txDQB3wkWDme8vbNsmMnzm5iHtSPeuepMt5PGhYrzQS3tnZcFpo5FUekq6ATPJe2i1pckqMACauNt5",
  "key9": "2XPETuTUmhXZ2F4xRQGNKkKcMiwuBpxRmiemxhPnEv4NxEvwwNs1dBhpACY7j7M4FVE93eKTmDBwfe5sbgohdvAU",
  "key10": "36AR9qLjRKABYoM4jHGhHjzuJyYqVneZZm8nVpZVjpdaGnCxnqVNZeHbXfV8hRPCGnH6iL9LgH6PTLfgMVHvq4km",
  "key11": "24phALvK3CwPjLt4p6Ch14kMaYR742Mfdg5TchZx4xm94MBpxN1K9Dfcyxm7ydnQEGvBoXWnLyiRe62rXotoanBb",
  "key12": "62nrf1ary4AP2J7sRCxUtNuoENWwQ5YtC71itQXESLnS2rCbhvvR4GUUhTUgV4j22guKLXG1q9pxrBs6bwjCoFwe",
  "key13": "3zouGdYTzVq7abDyKs2iSHfYiACZcx5W2BbTBBn4VoFtnQWM7bceyy4YCXNrDW4uNDKAb2FLS8tRdSYdekfQFiw2",
  "key14": "3ckUntZJU1f3epeMD1XRTVLSE8ZNph2f95chzxq45m999WAXStzNuFghryjcGa5TnkJvpNdvSadXnrU1nny9bkPC",
  "key15": "5z2gzHrLuCSuan2tkR5vE7HNG61NQYWhJ2PNgCiSPR6Sw8wghQFbdUCXJX8Fy78UKsPzYVK98Di8fVBHtvdr4Ypi",
  "key16": "2dtBivPyL7Dzx9HRDdh8RDK7CVSLxQiW2411uDNGQV6eEuuHF5Ztrn5FfHZWTjdTRL6Ywk9gm8zN9TYCC2aLsa1k",
  "key17": "54Xny5SEnBWsQRy5qUsmvdvpUxUknzDMm1u6HLvoTBFWipWhPLs5MNYHbcTAnAAS3fYj9tJkzJdWw6nyBcc7WMPG",
  "key18": "2XouA7PUqLJYNs5i29hQqJGHhyVUQB9CgoaAqf71ZxL55tVe57Tr7RkoJvzSLhZrvmYM5npzryMB2HKksLt7kbN3",
  "key19": "4rqXm9TLstun2fYexqQbNBJdoGvWivRDkJN6wiGLXGirvaPhbXLcMw3e5yno1sjCVAGDQdb8zhttmHEQwTGuVMds",
  "key20": "1Gcp6jwQUVbtgWdjAhCejcnP32hWM5ndro5KzcpG874x4fHZzGMB64PS3ZhE8dzpTJgSRwxK8RssifzpNz9enQ1",
  "key21": "3Wis5RKDhbE9eirMoXakbBnhavspXjHQs3rcfxkdnDHT2s9gwy4Co87DGWWDACm1vrWw7BNg6FCMGedsVJ7gRKdm",
  "key22": "5GyPF3boUbrBgbCaSA8UEVzCmDRqFVvBZ9sS3BBVbXCdWDFkPb4yPBfR4g2sNqL7PEWLLDcdKYqeeYZVWzTb1hpt",
  "key23": "452LSaXdHV26mndXLnDfRpS2eMxHjuBhCQrs9f4AFf1xaQLf4jYxMGf7PF7hwFNUNqCxUNWHCrbYqRvwYd23eFSd",
  "key24": "5T3Puzaw2KRj6F3cxBpW71VJ84uSFgt8ZUYJKPQcQXg2Rdmbd4jUT4Tr7hM7bfwUpgPYSTapmvbQef3i9Pc3KTD9",
  "key25": "5UhTa865TWCDg4jn2omozhAJqXCmsQeV1XxcAydSSCdspASNRnnViXHjScqK6shMNB2DsTnU6xnWbKr4gV8YPWYA",
  "key26": "2CyqP2ShZUfPhiHtfGKezip7oUhTq7qRuNKHdFcte8jewSNe5jj4fcLFHn2WgNTwUizKrUKJNhdnDoaYv9JkGgXT",
  "key27": "2yRFktq8cGDDVoiwt1eTxbPTiZrMN9H3geuiwfqoVnUFW93bqUohVBWRvNtJ3hsLhWxAo1tQxtrhZ8UpUUqhm6gE",
  "key28": "34sbWQr3zcAurFWAMKudmM3Y1dvBsSycpPzwthAN98VWuUPY7tDUHMdPitgPRGL1EKPTK8mDf8MchguobLenj17M",
  "key29": "4Z5urKSD7bektoYrXuQDFNcEUEzkWF9udLPUJuNQGu2KF2iCVYXHaQtbYbyLyMaXTFURjFAA2pbjnWiBwg9yJpVx",
  "key30": "2pNrPx6PnwfGcGT7CN41qJ9bJF8mGeXUTNWbTqTjg31ECFFS1gHe8nKxjHuN4ASzEnRmWk5R1q2eVJWXd6oEpVa6",
  "key31": "4DbrtYMAu6nCYT3NWJnvbaqhtDPjHjxUsKJmPw3w3oVUbaeS7JgK3YWqKNtNyidC6dkZDdUvmsk2W48bnv3ejg5W",
  "key32": "5JK7tGzTzx7M8UpTXHJBrpvuD4WQdB3bbLScGY9zeHWm19dtoQNZ5kK3RYNzPzaDMyaEeqGTaYzmpEYJMZdpargz",
  "key33": "31tZuaUHBv4x4RMieAGTyu9iyf8gbjBfxYFnmXnHEvY4gTdiJJTftUXbRDqRHKuK9sSy7X7zaWJEbwicKJWeGLmE",
  "key34": "5wRJM32mrcmhbaWiyTkhDiDieKR9tYwdBLnhX8wBXy3Wwh8mYwytATRivrxBj8zbx5eKhAVF26TsfzZDT11fCiug",
  "key35": "4ry1pDhAY8sqswvSGQ9jfX1yfrVvDdkFahGwJXP1rfhLM1eK1YEnZ8GmAYfLTdV2w2QiFWKfw5MsA34bQ653nHD",
  "key36": "43mw2n8hjQ42URs5bXR6WG2uCTZgSrrsS9VB8K8Z4xJbb8RHyhiEYCNn2SSLQAycrwqnxKJbtzEMivGNKxeELKKg"
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
