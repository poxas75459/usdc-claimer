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
    "4aJyT6HNapzzuhZio9G73sVpZRmaZoRgJ3sbm4A1AuLRU2kxDcACutssHJDfDx7yhsTYZZanNfjF3NbvyDuAyXMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8hMjmp9fKQ6h5dzjrVjGqnVPvULKsanSmogwQYToZdFJn3fXJJF5FbEBnZ6PjgdB3JhLEWeR34GMqDpqWaoomXv",
  "key1": "5BkezZ1UPLU24JBWxY6BaTXidYBZj3DqAJst53KQuSPVuPxv5JNSN1MsnYDzouh9rU6uhJ7pT2KTDAXNagvyL1Ue",
  "key2": "3T1czi1Vokry5kK5Zr6Pm6759o4C4ivp2Ms5eN6HbqGxxcnJARgh7Bpswek1eeaV4FULxen1idvhgMP7ufNWmzSd",
  "key3": "3PgiJ3XNM8Z1yxqJUewQGiMHS9b1X2oehb4jYKtmMxeKVuVAvmtuSBKLtMJAfXkurNkiNCNqbvEgxcXKAg6XgReb",
  "key4": "3vTLSxv3M43iDwMtoREuou8YMLXS6Y5g2HcqcbFrsva1nBoQXrhVs382DZaZ91HZcBebSpBJgzTE2ibDDVRTwA4N",
  "key5": "5Z317LCJLQxqXGkY5C2Vp5Vke1PAj9cUYeb31TFNnM8gxfBpQj2pdXQ7mgEN3fRXrajuTDKsAF8j2MGHxPMgRN9x",
  "key6": "2MARLktJwN9GExzF9isdW9jDkAyV3T8MoVsrQSaQWfd4kfw8TGoeSMED62WnfwVuwY7rBJW3sSmdycG6adgeuVct",
  "key7": "3WxsNLGdr3e5feQhsqwLPPNGifQYkGR5aPiyvLihtMtZ5e19ZMG98UDKcjCoh1gScdHQ6ccR5NCfgmCj5m9e3srL",
  "key8": "3zELcvBY6iGwEXpNSkar4Er8sQRjg5GikPeBZciRDhziH7a8iJ1aSwWeYWQhFRmGJk3ZMr3UYQHiVojubn63jvWP",
  "key9": "16QAK4zaLYYi9B4Pw8gCrv82XHbVF3kYM7HDZwaCdU6kVAPM8qdfYafb4jRC5n83TvuGPArycTByN2JHh4oy2zD",
  "key10": "3gRF9S4A6MnJ159sAWCdWrNi2Y2BczNfa14BynGkS7G9yY1P38tRVbnQh6qqvLw39nZzKDoukTUG57vBRieim8mF",
  "key11": "3N4Aywd2LLGUWnJMJGynHxRHSHzwYRvDDSe2dZQWRUeuVpsbxonWk8BHgaERAogMLiQgPQmAcRdKzYM6GhdHyVC2",
  "key12": "45Mr41cU129Fm6T1E7QXgwBrWTRuFecdHav9pM8uz1v1smeH73C7KN3LaR2287PJxStteYW6Gqd66kJrFWEvuEz2",
  "key13": "4ygLCsa5BZBCoWc8qQKjaXtExmvUstpoeQg8QFyJpn8ZwsCcnEeE8soxxoCeBsK7eQDu514A66xgF9xUrF9dkua1",
  "key14": "2qQeq5SZa3BpGn5mcDZY1RLK4yexwVQeuPvJDdT7GKH9xCWravW91s2ZyDMv7NQuiucuAjssUeL7rVfN5LfS2DWa",
  "key15": "4WUvg2b3o4f6984bBSJtwqB7r58yXmyfjj1hvjLgPBUiM6vVZcUhE6byFY2dUCr59wYAGa6fCShuovL2cQF1XEfH",
  "key16": "25YHQTCSXzaw7XuiRPQqmmr4jUW6CZhQX9MjHFJ66Cq7vfYWSTk54oF78hLiJkdoK2vZGjbUrtfB12BTobRvSERL",
  "key17": "66oYeiR6j68KL4bHvAfW4tCBfbYjyPkznJZ1tFUbWTAKYdGzqdi6gr2GwGQvvAMjE8bsvSPMC9XSht9h67PajMWa",
  "key18": "2hRhRBwoA4XfR9i5V8ctTKJcQwdp8SpgcTj5PTZqkTJ1rMKAreHz968V1nKPwgsrzHu7dhhwbVV31Bvn8T9ZPkiE",
  "key19": "251NDCPYVwzxx5tsqqBubfNuYDYU6NAgP5Ycuddz3CtvG1yzCcJeS96efSCoXQvpRmdxWpkbgmbCsvmen7nn4sPf",
  "key20": "uHf1fBQUn1XM7SakqjFnzNEvwJyByKFs5xoT13qAsZiu2eWDhQkEttZF2ZMQ41ffe6phQqkLmkcggMnT4wJWJbB",
  "key21": "ZRN5vWv26D2mAiu82GoNHRDdqYmDzUkBV7WcyjwPgWZxeaLmfzzgq2zH8mSUqdhSiLgx68dr83VExhTkRD9AwVv",
  "key22": "5kpmdmLcUxyfAEimJssBaxT9k19Sqob3XcBVqxw1T6iN7TJA9HtTCTg8F5SueuWFQ5Di15tLBSXquiLoRcbuzVMq",
  "key23": "3PtWznJWdzPCs111CjMn1bNZsDBX4qyqGhKNaXhzCd1fs3b8F2FPm7VeRdSQneXW6aZnm3ptevfRNJbZrfozCxPc",
  "key24": "4zdyGT7sxAJriNk5t9HNdZusAxajuBX1Niv4ttxfuZXW77XQUhTujE2ynsZwJMdRacvfAjqr91XuAPy9hNttt2SY",
  "key25": "3Q8YQTiF7DsPFzq1g1cVUtfYeke4D4w8gABUeVkL4STYA3YCVaHEVZPLQtZdZWf1WCZ5wFftcbsrEdxyJEfKV42x",
  "key26": "c2v2BPERfEbWwEcauJYDeNSBxa3N1Ej5jSV2Hu3asUJFjzQMGYBC5bpdpcWFmqUNpNCRKFhA3ah1ya91xLsbG4U"
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
