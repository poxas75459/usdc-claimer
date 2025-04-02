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
    "K67BYBaVAtcHC9dwPaL9AxK5wx9Mh9Nx1panvQ3iGSCBxA3y8zXVwR4nV446S9BQPhJRmPz1DhEkbQdNp1ifn2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SLGgHYb4KVdyRcjamXZvw1CgJ9x242pp1eXsPgGER9ByRKR28HBdcddkRNwjYyjcYPWw5YPoySsuNaR3fsCK1hY",
  "key1": "JzcD3hEFm7it7sGg5vidAy2wvN5xPn9YjFFrjZi4SeCbruAB9ZeUjc27b68ascqDZCoZ75SUUY7v9PzGNTcpbQi",
  "key2": "5Sv1mYukwKMcT5F7NNjfZTetnGH9pBcuTbaf91ayRV2BNp7M55uJn2hwSCy2rcD6iYL5kV9MsUMxiH1rawiub27H",
  "key3": "3s2TRFkLXGZomRmZDdV5t6ZJ9uM1uacV8e4RwEEfwbmBhno9XMVYcKXUswb7jxPvLzWxpd1fHv15ViJTwnpCVwSn",
  "key4": "3PpaTnbPiLVQy1twr8ZMLUhKUVudsMJy675WCHnCE5x8QF7DAPsGHUguRmhCRpC8j9RuM1MV49HkeszSZk5UNCVL",
  "key5": "58kttuijoNWoSs9B4x14JoiB9z3jeCXe8RryE9Su663WLRTPCUNxdUQqRHf4t8SJ3X9Q5dvy8A44iE3NcdKggz3n",
  "key6": "3vMDwPyCAUFMMedbdRMkCafCibswZfUp7NZmPT2CAXo8BLLPDaprcM3nZpbwzqdmWrFD9FgLPy58AUAPX29TqcRY",
  "key7": "wQRfgsFbe7GWFqFFudifztTQjY17oRGwk48W7k5wVTYgKj6yxhYc2BGUmBuLYJJSMfMWkkWVCZsu8dkaPbuD6cK",
  "key8": "5xEqUUxkh3LZe2UdwLpaRH4j7kji3vno2h1hhGqLocAK2YYr4dCTKFuqJ8NQqWJYdWYKDJeDPwNceiMGsCuzWNML",
  "key9": "5FK9y1m5jCR2PAfopH4tF5RApyxTvRUtR6x9v8xBzMEqGC5pbGMME9sA6YnLeVHHBGjgnTRfxcNNHuk3X8hDxpx",
  "key10": "CCReovNP28AckCFPsrvGaVCKBohf8dZhgKLLMsPBEXZXMFrJCofXAjQgnM3TpMQTEgjYzhhRX7wvUufLVUynn9D",
  "key11": "4DggDQrzk2zj8dhw67pXQ9tUqQndDZB4nMWrGUeeoWejsj84PF4zWpo9VrqcAFJfKjyTN5c8FHfsyeG1rdeoxxcQ",
  "key12": "gwCpNbkrc9VfA2B8mFxUEf9g9f7dQfi1xfnaYfsjTK1bMdTLxczEMkRNXXt1gzAvZFgzrstvAA6LzQ1g8BMzK4f",
  "key13": "53PkFCbWNuAs2F4E1Qts8dhbXcSaWvjqp9kQmZEZen8MptgvwwKZwxB5YwgpKGvJEoCXbSiQCRi3D4GdBTQhJrN4",
  "key14": "SMtp1LSBa6pyDfHJ27Yha4gHBKc8C6kSEoFNNanTEsJniSYNRmPqdd3W3RidUBvPe5pBZ3VMQCXSZPYXRXHHREc",
  "key15": "vDcpwQwMMzpnpvTQGFfPH1fT3HFCytBUdyf8dMTTgGJmDbLbdQ76gAqgPcnJzTmEAZrohwo8FeVsvtDkm55GDuq",
  "key16": "4zzLqdFNJZXKxdiVQwQNo6pFm4mXbzy2AN1cHrWr5Xx72aq4jRTdrsHLPZBFi59HmJ9CrVZarK9MH3xpaPPkDPYe",
  "key17": "5mX7vZ9G8HmiM2n5yNpUjVJ4Tscffyyrb3yBWo4fUfsUi22gDM2PxY32T3dYJwaAh7MU5EdEmDDJeXqKV6VUUEXj",
  "key18": "4xKQ3Rr4kL4mvG83kunmR9D9wdYjWUEmfCTy6cEpaaqKqqBz8diLu8kpPi43ZatQ61MK6WbPU1MmePeUQqw4LBWX",
  "key19": "2tCQmLuGuaDM1Gssq6HkAQZCaPXQShBs8t5ELjCWsznimPhfdJ6ALrNxrKueAueUn9uLNynR9Dn6a8cmWonXcB9p",
  "key20": "sBJXja9R2Jst38LHNhd2tHoPcmd8et2Jk9ndFij4MhXhHtp83rQhd26N9pQt71Vm2Zoo8FJnDeYv8m9Pd4W5jCa",
  "key21": "4A5egFmfPA4Z6b8g4NaNHkWp1ASwDk7wK1V1RoHQCuvbgNnzPzz4KZQ4vbGNzfTaKkMdkRRaNTbFKEDuJpxYchgB",
  "key22": "f9pbrQJPkvvSxFdgD1LCJ8CAPNhcjjmaGHYYyGwP8bnCVjFv8W5P27dk4kzzvCKkUrkGu7QErdgiD97a2YwFbEh",
  "key23": "32YUzx1U6zvh959HshYto7s6qZf1QLjpxbYyEQKgSYpSZiUw72ZD1b3wBW9bY74NBoy82Ns8aFu3Nk8Srte91LeU",
  "key24": "29b1wjUy7DtTVc4nSV75z3SMve1qraVJSErD4theF72GoqJEBkVbTXCQ28Qo49F6rNTP2aH64oqfURk1fbyQh8tG"
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
