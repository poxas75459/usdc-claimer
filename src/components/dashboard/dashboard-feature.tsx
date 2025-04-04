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
    "2E4Nw72T6BpCqEFq93jQuMXLPjJA9JKPfuv46Ttjb8YXW1XHWbUNwyJyDxX9h7Xcekhn8Fuupjqa51Hg77oH5u4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HBvn335KZEb3LMM1v72hjChuD1s5uGCdaqhRmBwGZhvVEzpPL4ZNcNmhbkiEeQyx8FShmHJKyVBaroXT3vshmLu",
  "key1": "5SjZjM6u3Pum3E4C71AH1zDs3jXbbjSYGe66UYGmvCj7mvwdDNgpP18CeDnMJZHxV7Nsb27ossTxTRZh7wfdD3m3",
  "key2": "2PvUyXPzDsG3p2oC6DXYnHEggnEKMr5FRu3drMtxgE1s7HfbRNZ88Fi9FtTGu9fgMkzPdjRjmCcwPziGDCyBBmRf",
  "key3": "3dWvVDbfYTuRD6DqtuV17wFLAcYrcAXeJqy6QWBjXi4J2tzAjgEm11ZUvH1ejsDZSwdcP3RYirCDGvUbehgerKbJ",
  "key4": "5D1VshsZim7uB4MX1VTZx2MuhtTUW31Wz6ApZRuqnx6g5uKGTVvZ8EZWHFNKqj2JEkvBijhfNpD8QrcXp21oay9S",
  "key5": "2csqVZqZDnMKbMh9wTHB19oyJekNDtUkCpZZfawDwPFZdSkrcoQafaVZCqDnG2B3seus43d7miDr8ePbagdVJUFT",
  "key6": "314iB565SGAvNZs3t4L4Q2QBEpyd4vDRFQzaCsYjdW861iLLjagLvphsJpX1kHsUkDeveLN6KBuVmn2iWcHkcL6i",
  "key7": "5tGUJ2xXb6YNJCFD1LdhgY9yhRo1z3yDsWXC5YQ2SgfjjBo6wCjvsq2Ujaf9VT9qM11SK6emmcRYVModKJBRsadM",
  "key8": "5U8hVkUgw5SJ7ynMiLpVsRgXTMcWQye2wAVtdcqUGdbAjywESMwa1uXuWjf6gPbDsUEnAgCjGiVEdcQrEjDq2HwU",
  "key9": "35vo7H5j48PKyLBPhTsSMwn3vHyxMPAkPZNtc3PephkeG8DWWCG7hBpePhHx58qR4aHZMn1GWsKUkoUcvwydTxkb",
  "key10": "2F7HoLHGdaVvFCQbAq7dehokNCoVe5o2DPAB4EsuWVSEUAxJf96pDcqxzZLFvrnE8LZUSCNQRK1XaoGpw9tXRKvF",
  "key11": "5Ak2AeTz9eHc5h8YaomiNHfrnf3r4zzZAgGBqVg8GfBKUoKUx9NJQWyDHF6s2SumbeHf2kVNSoGqPDCKaRvQ1nyV",
  "key12": "4hdFUqFgFbWwiCChq7xnC83phknJb7KZs5ABSbK7v64dVstC4tdoXA5csMTbxhgcDZnaVvUDyeiymf1vTzEpQYeY",
  "key13": "PvG3Da1gZ7heR7gn5pa9dra7nZqbGZGibTXzYq6mR1zeojzDaFjzJZBs8eAX3YEfL216iGfAKbu8bp3kRYtfHss",
  "key14": "65H7cv1D4rsVUFLoGDFQUHjznEJAveiHZG1y7m1NVCWaLAtcKDK5uQXuLDwEdBfrZX78j42bqXXLw7oAohb1DyHK",
  "key15": "2zLfQcbt4uEpNfrvWtQ3NPUGpqT2FQMs37LycTRzza5uaRRX3ePGRrWD11caZQ6rvfK73rM2HdT9a121RiMkFtQW",
  "key16": "3n22rk5tRJkbLydDWfc7nDyUfJUvjXKN9h3ShLjiGq9f1DsKb2AXioF1ve1S1YmrDbYjzLDZ7obphYSYZHPMDowd",
  "key17": "53j3qngXdXt6VpBXPX9PxhxmaHmoZpLwyweXaSnxXnFUrHPhhNqK71UnvaaP8n8PXqom5DkDFc33ZKrJEYGzufws",
  "key18": "3gvGA2FfbUksBQTiEZsWhSWn6vdReF4m4KjyqPA6PvSfGwogGK5tqnrxDsVvYbWwG6FvjWFfLEMGy3gARe26cMy7",
  "key19": "5RLNrvk6qckqwbS3Xq5qAUZ9CwGU18Bx3Ap5f6FKZLUMRVUT74APynW6kb5jRvNq5LzHp8MWzNxiKTa4gwtDavJ3",
  "key20": "4UW78gbasQ52KtwLH55FtgMMKNs5jpneRuTw1rdtapZ5fgoo7KCR9AByHrHcG1A3R4wBZwGYQZSwHUFudaLSDMtz",
  "key21": "3JcQ98ZWiV8dukgrR7K6iyqY8eLjus4UJ6AbAteiQjcxGCuN1BysBxMNRWnRvdXCTik99CS2pzx2Jbzn1QQU5rVW",
  "key22": "5AkNdnnFLZmV9A7ibznrWNgRMjipw4X9RXSrvP9y4q29QNoGKPwbuTdbyBUsXony196Lv26xDLt8kohzBDjDi8N7",
  "key23": "2NefEEqpTjLAVSx1GW72R19ntakfmwhLhwVCymeCsad4GcX3ugTkVHjCDJxwCAqFvL3HbQAxXXEFcTk3Pnfazmzh",
  "key24": "WM785iZM58QbcjDDStbxbbbR9MVAkW8yUpyoaFJph9wTXB8kqRKpEurwmH1LmzDcTUpXbQknWbcwhYLvpmFCodi",
  "key25": "bJCu1UbWHvM7EiAkf35wJX3FTYQnMR9j69Q3kpkqvNzncYn1Bm9EjqZrnWGszqX4hVZmt3xKxNe33K14AfTW5GV"
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
