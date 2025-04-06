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
    "AxZWHdSmtLq3NK3xEk8H7SJCTxfyhw4kmhEXbdQzQTpYrBKNUFTqnWHhMPJwUEvJ8Q5LGhjw8HP7CKtu2T51iZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ccgLnZEmjMHzzbLscpgChens8kkbUzz7Mmnhg4L3NvScxwvtKS9a6NJyjdgrpKdzomwN3GXjsSE42DkPQByuJPX",
  "key1": "1pcmUaJcYQShPbtb8twGPVZ5eZSST8aWpAaZfubxZW3CbaHgEHMgUoiyoaz614U5z3PN9rt671aKAY5J7LV9nFc",
  "key2": "AmPRWoHpPTnyZU2FJrVzvhzadvwpCEYT9aaXpzHFSDMjrotCQYZASgJRfXWNFTorcUDxCK4reEujeSdr8v3XHpQ",
  "key3": "2cmQD15WFBofYKU8USQ84KsLNydZg2Y5dqZiyUCdenTCeFaxbdaZXpj25tdzgoda5tqSo4Ms9DCZMWS8P1bmcUtR",
  "key4": "3vxiPic7e8AojvY8Fm7UVgFRmNhhodimdvGQE2dB3tumRnujH6Gf8qyuseF6siFLJz64etwbRwA7x4b6bTB9atbi",
  "key5": "R7SXMwA9gyMfhLw3aHbQYF8Mt6H6pDh4fRRkYhEKF24xPHnGTnWR9LekJb8aushdS6otNH9aChBQRGeJcsKwcbn",
  "key6": "3dURq8g7n1D3wG6NYxRGai9o5a2pxNmCJi6faCfjzZkSVfvRmbL5PALoguHW2q46RTG4S2Fz45XGF2BhB472xneF",
  "key7": "MRWbjBrVZ5EnYBnrNB73pFgq4P1Rwjf89yPqqathgYsyipXBNGqGaex13CUSf1rPg9pSqdWY2VG6iHLp1KGwc8q",
  "key8": "5GDzRGUCtrCnwttJL7VV54B13HN1WGYZP9VT7NnBKEiKyPtsiinJ7RtistAxEzou8YFYtCKTXAqbC3Uzh4HZHq1S",
  "key9": "jfHH66okPLvyoSfPyzh3DeyqFQwKaVcA5FU5gdG3WA58fuMUrocgT9F8nRX9R4oCQSiC7BZdqTS9FEcqFUu1LH2",
  "key10": "5qFmKQ9syZbrf3nSg58o5rEA5RXpohLqPGjSHTPdyF3sASBW6umpeySAwfRimCRpmrH5t13Ym4Lk7UqSS6azojhM",
  "key11": "ENwy2b7KWHKexRxJ3B5dRSM4UX54axVNZf2TJ2Yrj5YRxizRzLEGPyiBVnstcCYP7HhgB2b12HhyepdYYoRU1uA",
  "key12": "3m6JrpFQmC3F1jJKjpRAUvr2VXh8s5C1BCLRR9Nb9vFiDBYfJfop2joyed1dTMRbwuErojzafFR2371BCgqFV4zJ",
  "key13": "2WX5UydTaSSgj3AYP1S1ZrmJfcSMNhW8VXCn4kpgkoJ5KQaCb15MjA2DAJKGwJev9MuTrpYJkZ7X5aZAe4KF7cYc",
  "key14": "3csqupVpBfPvm2HN9yACfZoqZaTJJPsWJa2ewZ9dC9JnosYwTbr3T9Fak6jwtqMHEGLUCcKJhPtjr9p5tctxZ52b",
  "key15": "bL9HjJLxqsHt195GwG7SaAFW9xS5AwoFYzeXM9h3apokUHphZs3SVXgCRAmEtJbZXPcecuLQpzFFAvxZw4rCRzX",
  "key16": "28zavsMT6coLYwVvKhGzNub5wwjEpmMS5X3rH4Wbp1ZcgMWhjXfwSfSYZCq7xybrgjaiGvwycRFch3kELfMKWGX1",
  "key17": "5mCKCEMyZ6Qc3p5GJ3NBNgtWagaeb8K6U43iDXCbvT7zGAPFhmAFazZGFyaethvz9CGQH64rRqGkWfqupKpForvT",
  "key18": "4qBWUKpQUV233A4UhT6ymPB5ohNKEgW8pfppEatCnbhiczqBUquv5gjRmFUcSrQdY2j8opuj4MKVaUC4Ph7sgoXW",
  "key19": "3heZ1xLgQYRVcqrju6N2mvUExZ1Fc2MhgMAwgJ3F3HhTNeEucWY3nTxDtYmjBCzGMhky4U794Q1zzvDyTB3PD1jd",
  "key20": "33U2Cq4Pc3YzGmUNpe4gL4snpbg9bg71BkYSzUbMwrweumhTN9G57wo6E1Lqjv3fWCHZgXZCDQKSDGpCvwx7pvvW",
  "key21": "5qVBezVkdvEQCeYoiKYMJuxCyxnvNJb5Vv9WQoDx5HCfd4wUrXi9UcGTWvtfQ9NsjtAufp8NGK4kkvscugPtrDNz",
  "key22": "mc86oa14V2QWcra8kWKsnnXcwdEHJ1AaYNWRd3i2aT5RQn8QhKb3oY8txoHic92yjAMjd8erokBUDWZjsAmzFtu",
  "key23": "3HqydHjWYfMvcewtpD9jQQLwkE6hS1V6SEGQKiFc4fohtLDfz3z8mVvnMLQDNJ8M3mGT4Su1qMSqzNRmz6e5Mz34",
  "key24": "4vY4xLcYvr5EQYELWJFPd8ctCBy8zufiNP5ybPDCwwGmk1U2XeYFiDUdBF2CisbwAHmTzB137vS1kSzbF2heH3w1",
  "key25": "5i9U8bvYxxicMo5cvWd68UcX7Hs9GJ4KSEESF1M92wshqMftRTWzuk3LEqqzdt7ZCoZL57z7TznYid3hjP1NTXvT",
  "key26": "2tSdDDSBY3z4Ap5L5PC66NPV6mtnpqgM7TwTaCBCFjVFAZgvTyszACfsyMVxYtGb82QF8txgmMBp9iv1CNesdQFB",
  "key27": "2xBmX4ZepPT4cHJDPugGSm9TEdvecvGgACc5jHX27kWkZ6mAsGuJ3xKq9wCVXs1iB8XLS9ppBqAsNgMD6jVYegKD",
  "key28": "3qzehdJY6cMHEPKvYCUBuEjs3NPs72GusESu6hqxJ69DdmeboVsiuzWFJ7RNAbmFF9LV9qAyURT1skyNh8XAjMy1",
  "key29": "2zugZQcLL2xa5Df1v8nqEwNXpVuH6e193rQy4MhqdEix9wX8tMCJeUxKWeZrpmPYZA6beZwhvDw9awKSRbJtXLWP",
  "key30": "o1v7aGAhJCzVNDtXzLFTc3NFs9oExRQbBJy3SgakdyeAZPJo5qYbQ86ExnbseRyeqLcafqR88WtDms8zF9ZKKn1",
  "key31": "2acjr9ec9NwNhwPmSSaYWyC7fskfgx1Z6fsSSdhDie9sQnghxaCeC2NbJjYYNot5kxNBxPfPJ86SpK15MhYqqQtG",
  "key32": "3yx2yztTurMePvrjToW8LPKNHy1yvZDFYPrU9ZRucus7YKJ3mbLFPyQJF4osfFovi12dnEu1bWayR51Nyw4etXTc",
  "key33": "2zCe3URZutZAtsFfD9v44fQVW7Qe6BvmCycX2MrRZE63JSRPk1QGYHb7gyumDv8CwjNP6RfQwoHPy6co6sNqGCRK",
  "key34": "3imTKeqxpxA9yNJGdnfnSe4GM4w4fuGaLGQcsoEg6oSsfEv7LnT88WCwK6xydToVQb65Yi4hUCkspj77i9jCsxt1"
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
