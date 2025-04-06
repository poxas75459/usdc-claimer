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
    "4yDyGdsQWSYSaKt9RrvonzT74v2QASR37fqH69yATpDjwyj1wkD4p7mHxSDv8WcyaDZnyDP9xVgEYbrmRLfqvrgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gKDZ7e7orAmBaPA7n5uZCQH7s7GLT8tyKgVnRd1NGhCNgjix9JN3Ye8FL24p5PumkWUyQ9fGrD2tqdXxQtFoDW9",
  "key1": "5z9JjbJ7zytGMCDP54ktzFLC525ThT7aMnredVuLyhiVn7fmpYicoosBsj9BxxWJi5MX7yCLsS1KGiipTyVQFjyM",
  "key2": "3fAK9qf3x7HvzVgn9gqWGevsvfWMsk6C1pkUL9vj9naYqKayJBcBSqUM41dd8Vxg5rXv6VDLRySmiH5Q1pEidHQG",
  "key3": "FAjkPMr72UVVFRx1Mn4RhhnPpRWkeoYjHEZbmMMp22zbTEgBdoPUipLnN1tCCA7FTEAJWkkrrqjGSLUSaJUZ4Hm",
  "key4": "62aY1D8qAfi1pNq4MZVRuKsrEfLc5Xe9zyTQesYopE6aRyyTC531Paeah3LN4HUsZULo18UYg7v83947KnzyBLYc",
  "key5": "2QRkDc9nqsw41n5xzvpNJEWi3jwf629QmYSHH4icMUw3G3UoQmdmn9FKkosbsaYCy5RS1ZUc44SpaxFMgjKgHdF1",
  "key6": "41uQf7he7aSSyqZFK6iFrZyF4XwQqSdsFh3v6ybuqxBWkJ5oQsiuDZgUQ7Y2KeKbSUiNyq4k7Xdio3hQLd3scZTG",
  "key7": "5UgMG97gzkiNALS6jEduPsJqDcETVgauCbWNA1soS38HDdySLZ9cZRgc9cjoUzT2wYXoVmSeAME6EvKJ7SaTmyiT",
  "key8": "4YV35rT1ZeFPxUn342yBSXzCz7ssNQstMpq18bNDqEs8REazC2XimJM3Vo4SUwKjU7vme7FsSczQiRQdfNb5S5rj",
  "key9": "44FPV3k4pRd6iyt79cY1TkDpvpTEUR3FA6VFz9LMasz997tuoUdRGox3GoXr69BSmmjPbBWa7oCnZksJ6aMfixTJ",
  "key10": "4Lh1zMo8HoLstWqgeRrzGv1bhCGawzGvksB63YCBtS6WW49JihyLkhd4NqmsGrpAGngnxTKN1PA1p2c6RxUvsMY4",
  "key11": "3HzVapdQqb9DbBJzXpvqnY9JF8Ly1fT7jhWq6s9rvTBzoU8U28j95shjXe5LA8NEEjZVCXLPYDdofLUPTD5wqYYZ",
  "key12": "5DHBc3ciKNA2djjjLnFAdgTScvXqoRhy4A44dJM2QWL4HH2LHB1fLQn1LWNw8igwZbzyba2ZNx32VnNR9Y9iyYkx",
  "key13": "WoJVM1yjdMKmaTPtXxnGC55DrW1rto1mp3BvzxjqCeh3YGk9MBRPeiYmgTN32tUSsDxmYxt2dazYQomJX8QDExT",
  "key14": "58D4QfShSGuXGm13q5JYQBYYoLf1eCieyBxFoFF8qFswqY4YrgY75k4EH9aPWdoiJ2D5Mt9qQix73vq5Zbi4BMn4",
  "key15": "2Ra1T4hvsXUwX1CQiVVmnHQ4VLVAAsDBAAWLHLKacZNvypZq6fFtziQq3fTxSbPXFA3tAz3rUCMqR4bKiXqSAtqN",
  "key16": "4eBjpbT8recuoQpRNxZuoWbACchNC4r5kBK3nBmC4D4nrDVfiHsRoNM9voYRCWihaEQq3D97jHoM4k7UcWPQm1wD",
  "key17": "56wFPBZ5422CckuXYvcNQD1rQKsEHNkAZA2BTiNzxT9b8btJtG54QWn5tV4c4Hyje7MBqTFRR71zuxnxnRYxyoVc",
  "key18": "63T9zPQWu3mKP579NynghaTN9XK8aCJnDrbotmeUBNtcT7ZqXKuBA3Tn5Expr3BnCoJiWUwarxituekBzbF4ok6u",
  "key19": "DUHPFbNTC4j1zXvKd4bywJ4PdXHDD8LzqBshmiYVa8JdqB5gW9exbfzpuVGrt3B5k1eJUb4Y9JucjPmFH5pEnRV",
  "key20": "S1Ce1KrQrVYQwTWWqcZNQgZq1gjTe7ZF4nF3rCdyom4kmZVHTiaYZ7QEeV7puhgRtVSrgNmodMWJ1few5mDSDMs",
  "key21": "2Y1u1Q3xEWFYYMamKLf16GWhXwy4gyB1W8ui9TnVuuxvFP54Trm2VjpEoPfyW12K4sQRGrF5RRkhzcDjmuEyC3jg",
  "key22": "qpekdsHZGMFyspJass5H8SAbcX51e32zQZdtAp2KoZpTRW3vQbnf6dP4RAxGBEktn6LJTxiATVtQEWwg7SB14ew",
  "key23": "fdpWJLCKzJS1e9M6S84WAsPNEmPNmbXzC5YeVbXryrSCmjmDCxV6oUVUcBT8xRHyx3TtQwhx8eQNwHVmRkigHCN",
  "key24": "2MoUMbrpdQoK3CANAnx9XuM5MnF8pAQYuWyy4WsiLTbzM7MSgS1nEMxcFSuYDzFKLTEYgMLVP7iWG96TLGg1Lx2W",
  "key25": "4y3JRNTY9SwhVKSGgeWfJFerssNxWWdEbkRCXGXAvF6urS5BzPGQa6BJVNWAcrHcYUojh2DXwDkhzkqCPCXCuuNQ",
  "key26": "4ngAHZtbgvHU3bnKnzmAymU2A3YesFD36MBwKXgBz2goWTUvQkGFWGV97qk1Ggrpc2K7WtoojsydbSySsZ8zV6Ex",
  "key27": "53ywL1PJm33L6y1SsspTYU9oNX6XmGZEfLCrzaS1GJmtLoDHvZT3FW5EZUFVSvwvYtvJfXU95i7pZ8hAo5CJ3cDP",
  "key28": "8dPn7pTGqMKor1j77gf6R9TK7JQhnEi8NNH5RrhZttYqo2aCXh8T21McxH874rSKGqbVoDBNvMkvomSR1325mAN",
  "key29": "2gsFCgBFtvccSQ6zmqWWHaYxjXjfWETL7A9DxJfjCpuodTb25b92s75qZqavLLjkhze4f3NJ1Lbs1LLiTAwKJxix",
  "key30": "3EkKaTLtRmL9dbHU5eJdQ2NK2KxEYfy61g7c1m199on5knaUYWuUKfvH8UnunoJQNgSQXnkbKcxdhub3o7f5v2SB",
  "key31": "4heZmu4aqbci1p3DkE1ZUx4NxNG8f4M7bwQQMmaEfDDiayZST97ES3DaRjkg4hiE9WVeLTbbH2ytXA1eGUybCKWN"
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
