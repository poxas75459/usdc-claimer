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
    "62kCoKg9s2sZRT33EYbEsfMKFk2Ppsk3NoARHXcYLATQ8mFk3s5bFnJj9wRi3zjgN8sSz32q3X9bVPoHXNqeu17V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54mEeHEkz6WzvpQ7QcyoKgWsLFHo7oefV82CfkHrYg2ixqQhnHAYnTXqm2Rq8vb9w9XqSFLE4t9y59GuW2HcvT6F",
  "key1": "2nmiEtiF3LTQ7EZd1Y2aZrDNWgM4AuGq315NDSECrxnY2vtGqWKXQPD6ciYFNXAqPwpQ6TK7PoxNw5KAKkECSCfG",
  "key2": "5pZqVML3fLYGaMFXgCrnZAtxYqcTmWqWjuTh7p4M2Q17ycuPd4tcJstwRs6iYbF4oPQjic6HyT5PFPLy6WywiUdy",
  "key3": "5Uxm35imX3WgKwwaZFe5MHbn286ec9F76ogZf9nDPKP79e5W87haUfd1CyKNc2nCJouY5qVoekA6XSB1pXB12PgP",
  "key4": "3y5CyvJMoZ9LHQu9X46bnNHKCdkYpYYXLJMb9NJLpxSFw5qgC1hnnzf7uRNYZHfNZ1qWFqRPFfsaxSnPTsMFeJv3",
  "key5": "2ekvSgY81Qn23RPDdXrKvA9VRQVRFL4GqsDNgpqDESqU6bvd6ZuXSxouhCZEb2ecpxEjMyEuEotJre42ijSMFtz1",
  "key6": "2JnKgBxZo5qLieWWr3anvHrkHdYYzTuVGiYgCQuMqvhur8cj8kh9XiYnR7oHg6FsmzKaxA14qgZHfiCYrestHJ5X",
  "key7": "3i35QRsDQdkn6EmpekkhgPqrRStjQvj1dirC6dnyQUBEAkdR1LSAatsaHGMCTWWT7NH3yybKKayhxvh8gJMW6RLE",
  "key8": "4udPHkPjN1QnB9PZRA6dYjrG5y228wKPGQKjXJtfep23mX3XCDzHjw751B4e9Xrhx6L5W9XtumjsqE5JMpgAjVkg",
  "key9": "32TkCV9mwmRtiA1GGXdKpR5gG7buKm9z4ELSBeq7M9pNL6jqs39vTKNYcEvCi94yEqjPP4xedhDV4h7MWEtaGdEf",
  "key10": "LBmqTY3KsbErUFqnBBJpVtps88V9kNYh3DEY47k98R4zQkba1uB15ZvhzEFERXc3yY2gdNFFR8cjiTC8VXyV55E",
  "key11": "5VACUkThsJFMtQ1iQEHqvTey8j8GXCsArpvsTWXNHBphtDDAK6snLRRst58vYJ8uaUmcFQ78g2FjVnuf1R3Bcvse",
  "key12": "5H3a9rwb2ZVton78QBfADZeJoasrbTB3bGpLEz7p3V8Z58Lm6bNWrXwBQxZkHn1j5F6h5EXgDnYRchvGmuhwQRwM",
  "key13": "3KCU4a95VBDHeCC5g3AiCdCLVoj78tZ5HQCivTgTyBVzfKHWcgYs8bvPDYzbpcTkNMtbKscHcrtxhBdQMBv6AcbF",
  "key14": "4TZQPsnHQ8CQZUJ6gVCtXS4wshFFBKiv8mqnS7jGmEeAbSGGbXosJbe77cKKfnQYDMyHEGjh4GC5hFG2ohxuDk8X",
  "key15": "dJTzCZY1FXkuufncxfJXPAiV5oZ5uvj6oLvcM7hMvB1iMWF4ktaXheDNFT2WXu6FGpqna6Xcodf64WUDgW2GxPM",
  "key16": "2JHqYQCFaMa1TT6iWd7ioq9uKEkN8CFZffwidkeVKjEn3M8RvBoSmWATgK266uFPpfWk2toscqcS98WNvtJkfVw",
  "key17": "vk1NnEkjJwb4NE34ZiRa5iaAyzzPaUkjSEr1Y12QqV3cjWwRVt2q5Qgg6j9otk7QbvuFJXEMsTSzm8REAtBP6b2",
  "key18": "RYz6UwPsFHusrc2Mwr3KinpPuX82WpiiWWrracuziE2orWLWyqcX8asSzsB5vTUd5dpMSC2t7chtCX1KYng8sMA",
  "key19": "4PVdipgtuH7EXuH5AYi73LaTuXLaGRadxaTkfWGTVwQzErLKQzCpPQiTDRBjy47xPdkPeduQbW7pJkuMrJ5SDEKi",
  "key20": "4AAjtdcCQkxrFGRCSRvBuuCsdDvnHWPSXg8zf2H4bZnSNxw42QMxSQQHZcQ73JUx84U1PZWEPoibtZwxQcAhRLPA",
  "key21": "5quZzdMKKriGJgDLrRLfpTQZkagRxmbAVBWTdfqPAXTw5ttsCCcRi6xjAXKsSwqGd9hegidNDfZuA8wNeEYTUzcw",
  "key22": "5iCkTusLEuY7G4MCZbP1G4PgHFm4qav32MxmwSymYMNXkz3dymRFmVPireCLN2mSxq4GdFMxoN32L5CMEq6qTJGu",
  "key23": "3S6fhb1FgkCEYK7F6Lc97aMh7GfchB6KXQv9VMt2HLSW1ibJMufKa4Pk43x9BfQRcCDPo4hwScgbUtFr3QY9X574",
  "key24": "2afdtiS1vcHDpYKUQVtvePabw56MqTPJresQ9ysdGChRiD5oARWCFGfMzVX6UnEpEgpk7wYUxvNRjovjbtDKMMjM",
  "key25": "4eiKMB5iXBHYdaX6b23W6YmsTLXT15jycGL4tSr27zYVF455MWWkRswUd4Yxmg8SBU24u26YzFF4DKLvBTXjK1ia",
  "key26": "4usZ1a6NQzNKtLo42wBCPWtZumZ6uTSt8gDuj1k5LFT6wn2YT7nPMTEu7ZQZNirh7CP2SwUWsdoRgJ3uH6soEhK1",
  "key27": "2MfNyHaeBatRCKB3tKmC2hbuHhZKJW6tWceRQayntx7V4vVbnC64BALus1xH2TBieB9noKHvE1HwAkXxEGSCmh73",
  "key28": "4XqNT3SAmVwdSmxEa5o3eNK3Aq2MsRsdrm3KC5TesCZZWynkRFgbGjT1ywD8XCyusw48W68YFF2VwjoHA4aqoM8d",
  "key29": "2TZKhnaNderzG72Ne3PG6kjfSs4PmYPCxU34Wyzk6f5W63EVVDQaGtxXkB2v1dt5zX7PFXRLRcXo79pqYVKWnCF1",
  "key30": "5P4omUuDPgNkeZo2igPzb1jUqVaJeLjjnGUbv3uy71mnbbdsHApBGKzKN1gP1EUZU6EDzaXN3Cr9yh3bUoz1MZ3D",
  "key31": "aDi8C2Ddy2PvVw1CVB47X473y6L5YVynySrhahyXNbs5e747FsT9kmfoh44LB7DRnr9TMTRybHyFWMok82F7kre",
  "key32": "BcmQVSuLCSDkTekp9zccAw5SYv8bJdemXX6mgcpZtVnn77qm7kTAZjwAnpUGSDsL3qET5tdh1Hn3otH2uwb9F6B",
  "key33": "TPrp9RzfZMm8ugvdxK4kqAzWXYXSQ6QmBYydJZb9EeemYFGyZgVdtYcqRYuJwnygPP4dgcX1S9nhZwuuRZM8gE6",
  "key34": "txLKK82vWvvTw14Lyek2cBuYLQM2MfGUScXYThrFcYH6stomPGGMAyb332HpnjxfttLJ2CSKmVQAgBbQTzuXeih",
  "key35": "2hvhvHoQabTRGebSr4eBBYFdpEmVKJZJk2MQCR5jexWsjR3A7hBJKVADcCpp18mxrgzkrGfqUPJcMDfhwoJ5j4bz",
  "key36": "2qUdJLkMsjiZfgstpTLU7wKDSGx1zhx2wcBD5dudVLNu2GBiVkbkL9ds5UjSueUDcyZtf9u4BXvCzFMm5qEQMJM6",
  "key37": "xZjF2zKQXiUE8p87AG1hRoYoBGZyw3w6SkCEuPTLc6GackJKUGCiiNnijhzXPaLzB93PdGmPeBpFD6LZnFEDBpE",
  "key38": "62yPXzqk2TZEYaoqtsZ9Y2tZYx9B5wfu3UJxysUnhMUa67sUBcHbuwswnnBHW2wy23fFvGX53hkY5WqutdeLMXJH",
  "key39": "32jXtshfBaMQ2dGuzMHfxfTKkE9D54xori9nh6vQkLY9zJPkw2mzKEJx8TybNjaJhyW48oJfKvQUMbwqULRGD3ZD",
  "key40": "2RoPQqvsG7621XgUiRYjfHVfqo19DcyJrabQjfRj8an2oLNRgGiPbVw5S9YvaSJ53Gv9n2wKCFvXBqeR2ie7KjdC"
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
