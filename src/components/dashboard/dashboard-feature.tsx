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
    "4Y8UPZad7KBzZ6mFwMCk8f3PSQmdivGQPDcus4sTcLLNb9nik5NyYiWTZk1unEfEbEHUW2TULpdTWi6JPEAyAgaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SXS5dyviHjouWcTq656Bc6xinejBeLkFzyRFDyNSx1e372sMJLDhLFUU76BnqeFuDfAUKW3JGVpgYdrX9b8p3Kg",
  "key1": "5gPcPdn6hi8wv9BAWSuHZRv2AaLkHCWjMtutfuSmAtPF31NZ5sNkf3MATwVXbr2FeZJ7nEwM7JuyDdt6BQ8XMGN3",
  "key2": "Eo3cnKN6dVdAbEsVbE7GNzdrKkfzeXgLWxQsUDgdDmZUS3QqepMsiLHR5qpumduy6B3AgbBcAWfGFr3Y6RY6FYM",
  "key3": "5fuaLbM94dLqbnfG8f3b6ABypMdNJSzhLqYowS6R6Zdti4jCZ8rm6iSy8tARcN7PH1gTdodvR99W1wtNzSHqo6k5",
  "key4": "3zhQKk81ZjT4VjT7YGnhy4m5BVSkevk5AjiAK6JMVuSt2pqkDDnhWW3rzDGhGRYb6Gx75tp9mF38XRLc5wnbmAF2",
  "key5": "4H3VpAdpN2hxA2JNwXS4kCMiA29CYi76nVC9uQJd8DypRckPLPShmZgV5Bhzi11XtLwfB3eu9DuerASapQevNdrP",
  "key6": "4TrArqfb6qQ4P999tcZjUR8YB8xtjVoUfAoNJQkGutaCFyHsrPiJ4MTNt3oFF6HKPvXXUqwQVUgSAgcDijf6WWi6",
  "key7": "3StqkJX1ns737ugxqtF8TwrNi3LA1bP49kfzzDc4SdiTwsSsgGn3FHFLYB2aipSeeaiCjBRG9q442CMu94feXqn4",
  "key8": "3WfbVTma9AEmMcqRPofRsXsw6n1G5LKGKSVLYV4y6s4QJY2davs9JtgqXyc4HVnoSKiVWkgeou943rU359WvFGpo",
  "key9": "WdaKA2zVffNP1mJVzRyuPp7HruMXLfK8H6HNCPPBQ7PAYZ4MCrsWjAxFKYA4oUZaQwcCMzYcZ8SM6pqzfnLQZQU",
  "key10": "3LnSwKzjXe1LMYpkEYvtKuthU4W5qRXWsPXuFMTsQjz6yrLBKeGjWGKSBdM3GKksT7CWTcVs2M475zCGj23YPfxw",
  "key11": "54sswMoNQbRv3yvVMJzFFWk72Gbk2EiZmFTWqEbMEvWsD7vGMUcUjPZdQWfY74L9h9kDqWJ6CGrNCXz7Gzk9Vv2Z",
  "key12": "643S1iCJ8K6LULGhF22SXV5hbjid3QXpnSA5ddhNvxmaN2PLBjRSQMsvDiYUkCBiPinzzCqDwAgXgde9AFvgGnVy",
  "key13": "4XA3LfxUXZAwVeTdmDTPfQbhEwSRUcoG1dSsCEDX6YxSkqhwES3f8ca1mdB3gKmjbs1jabvzkHpmQfTFfLtB7YA8",
  "key14": "PrajrmQStRRHyRyFoBghwcQsj5LUWbkW72gm2bafgRRDGgo2TvKns47ERS8bXzAHAPLz3PZqvCPHrdy4U3DwXa4",
  "key15": "24NGqhhTAWf9jjGYVhwoaLjkVjtskurJyFm4znFJtNMgY6yuZJCdViegv47XtC8ijkhUm1cg93Pyo68bRBM2fepU",
  "key16": "3pRaaX2HAKjF6tzfAqiWzrN4MVS2kLvxUAew3KxQdcv1eBoWfcAD8heykAQBwYwJURFSPwyCy8GPgoLiFUe8X4EX",
  "key17": "42VeWuTBKR71qUyUs8movPu1zWBEd7HAqLHHAdSUBS8EnPmfihYvXxsAWCxypFEFfSGwKZG5Kiqf8y5kMDYhMmqd",
  "key18": "4ppjLfdftZBYvUnSqUXre3mWmHk9eeDaba9stFwS2A52hCfibhKRZ4yr5tyEddFufafeUnVdeZXamYBXp69XDLM7",
  "key19": "3i4hBnnHXwszEs2HZ8aQPHyWbvRv96EZd4jGj8vFcZphT4jg5dgUqkcyyh4X2pBDMsGqP1DXMDZwjQnsPMDsxwnx",
  "key20": "394p2X3Vj6xCDLYH7VCdqbD6DZBsum35xKtSs4s4h92rLxirUa54RiSUka2GwxhYKEie1ZP8ysunyTxH2rJk7rpu",
  "key21": "2V7xMUvJYSFYq6gaSLoLzw27m6MfaEoTgGQ4fD5pzCtYWnFcrbS1ewtjNiyuAUApMvohRytzWjRjWShAdHEWbck7",
  "key22": "5MkJ9tPvrvo8pupHNRuM2kFDBxs9TgmA3w2QSbkFmoHEhEsuaWiTew1quNSnB8RFDhCbYVacY5Brbu9FBgmwYq9Y",
  "key23": "369dtbyZx6c9yiqy2wtD6sPmzd1K9sKZtCFxEemnSwJ97kFp1oqWXso8yoRpNbdPuL1usAiR25jseMyjjGEmYwoz",
  "key24": "QFpLpjP4GtwuBLbbru1PQhcHaB5QqaWxW2peL8ruZgMArCZb7XyY3aYuBhLyd9RonSdxWz9dT2razfZLkQ2fkVH",
  "key25": "3Xohn39AgErPYnPzzhGUVtfnz3HcqM7wb3dRAPeooqRTpWqkGZRKxsEJ3B1FDdEJHukW6nihgu7jXTWSge6KX339",
  "key26": "3kbGaUuhg7Vr7gukGJSb7o5hiVKvdDr2knBpQEmREhbT2pe2Rd5CF2s7Ke9nheiE1tuym4VryhYNWkWU4xzXWJPN",
  "key27": "4mBQJvEA9ngWFNTAUqRbaFhjfUi7N438HbM69s67bMDPPa1FW66muhp6Vd8ZFpD3KAN6L1s24h8Gn7MTx8nTC9Fg",
  "key28": "2N6xAS21r962MPCw1rSKkTShEngP3ZEMRzGVxxSopXge5Fymq5ZqQekLrGUKsLrfTBVdPUVxsVBwsduLJ89XcnPB",
  "key29": "2zJoXgHKjShZLtyJNzGE7W9QJ3UokJmRX5F3PZVVFJL1VJGaHTmBSk5otBs1siF7cq4ZiLe4dt5H7VyDn6MkBuEn",
  "key30": "2agTQthXj2JX3qyrYFRbt87Ws4uLCimvnEJ3nFzMCKHTRAy4zWkHXBjTrURzhGUTTY7PDjuE1paexumAWoDxLuAD",
  "key31": "3uJTXJtXECLRyEQZVAZypTegDrZu4cwLhYzWsC5ryEWyzRjEaF1xD617bSJgL9J1SnB115SUDqdiZDvwKssX6y7L"
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
