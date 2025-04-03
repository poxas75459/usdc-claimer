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
    "53woPbasmqAo4n6Z3aGYRKkyvzerLEvvQLAboiyb76ow7pNghpxR1t1vQhjNs7RK83mr7XWT74VcbuGHpqepMqdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zun96GUjNYe3ZJ8GEmCP2qAjX3sEUi9M5MKoCXeiMyBKYi3rX1SwPL11TzSS8dRyo5TWjPfRkSi1xmy3Q7euosm",
  "key1": "53ZzEoakiXPDafSj3U2ccVTsR53WYBhHU83PZq75SYNZYzQ6rfMbzif3QuREURmHsSE6CzXjKLG1RvuuKAo75kZy",
  "key2": "2HGwovzm16a8cXghe8LWsX28tZEWvwZ4DHdgQY6sXKvNKnWtsnHwFUwMizHVWfnzKSky2hChW95x7VHfa8PrTc72",
  "key3": "5xfucsNvH9gph2dfmcro3Gcr9ztoppLdRFeb3wVN1YTb4Zsv5mk7FVkGr68juzBnEBzvTKMMqcFfZ2uBe9cfNXPR",
  "key4": "3oNbVuusZUGaiVWA7WyTosS8W4Yob24JzpYyBUYb1cy3ao8vFa51dKVUJetvGREoHMPnykdPAgiSSGBxM9zqFjLz",
  "key5": "3ke9dMYwbRwKiueRSGpUXzHsqmQx7XU3FbqHymp2bqUNce9kxkJJWpbYbbdmwekQMMpRTGLU6BXhC9AiR9pVTEur",
  "key6": "65DF6zDzKhNxFQWqjsBLLdixpVtAujQp4QU4m1XQma9sVgxkLSnCJKfcVvJdhQ2bHT6rgAF9rH72wqhfMkW9CAAH",
  "key7": "22FDWVLX2dG4dqjTzVaFQyBemAZL1G66DrGXL6Ns2jXVyx46M15sKHiAefLLHi3yJNit9AeBhscU2MyBScc253Zj",
  "key8": "n3XHTjzyDs9ogjJv4tV9fDbj3eSQuTpe7CJyLmxEBPC3LxgdbGdybWrc7QeeWYwk1fmogo63vAQdrNx64mYCE7T",
  "key9": "64Ry899Z5gLdBZWjSoBXPrd5E1MCvLEzzDwt5r4ymQzyB1ymDoubko3PrHft5Jonctfs4jvHFyfTiJAeX8D4LZ7e",
  "key10": "5qTmQDgC5KhL98AYi6ssR1JUzdndTD3yvgPXnTsP5WboVNEnK5YmgQACxr1Q1RWE74q6u1F8ndKfPDFvAsoyJ3oi",
  "key11": "2GdKL7TPokLrLHYJVwhSbnz2kGg2XBfbFUH93JWTS5CgsNhVdv5ayxGLDSUBtbrHopxwJhftUcSp8uXA1zPSxEpg",
  "key12": "3tMrUtc8VAXbTqFdhSf4PHy9Coeq4EM5u6RZigiSs2CHusdPwG7ydW4YEuhkUKLdonut4oF1ZtrbNghGbn9eMZxp",
  "key13": "2sHCn7TM7f7yKn5ETWhRA7C2C1UY7iafLaMjCeGc9NWGFjaTJyFR6m8NgYkzoVfW3LByWtbpympBXmvvfpvyTUk9",
  "key14": "3Wz46wmHu6crszgdN8aQigU5VNumdn5pkkmComqka2Pyg7rBwj1Lv8bCHvFssbDrvKHQk9f8t2n9mjwUyi8sn8PM",
  "key15": "4fPcK6PmLfZBEptPsNWpfnfXfyNfhY2ZCsbM1ojnkikYnybkZYLFKjMgxMsamxNMjUxQ2C2rjREx2svyDro6o1VB",
  "key16": "DU2hUQzAs4WoimUuNFkcdpT18p3911na17zAhFmGgf7cBHNGyHAs2fKyUJ9Lz8k4iURiemDjiXMMvuu1uvMninG",
  "key17": "3frqcKTAn1H36WV7auAzHZqiPtmYia88CdPjCukWLXGFqv2qLYmZUP5jU6ER63fa3XmUG8XgTq69ctrG3NPsduhn",
  "key18": "2TxrKGJvyEdm9sL6VMNQNdm3bZC1VNgXHmEMBZqqU9eGqk1TDFTooCAUzfGYDPXmt2KcbVxgnUNzrZFGGvEBQWBH",
  "key19": "4r1ohEDBzphygFRa4AjsotUkWMZGfbnSsHDLSxju9f6AyWBA5cWB9BPXTHMSrVo2iJZXnFbZR8YWUDtHGMt6TJo2",
  "key20": "5RdjycmHwJAcVBsJMCr1kQQnMxQYb5UtntzU5ZvAYUowzAUxcDJ1XJjAFDnjbFEBPA2QzPiT2MVvd1CTbPAqojpW",
  "key21": "2b16EAM5EtjPQJDfb3uzDooF7wodmPFWzESJGdecVhZrLTWrEsi58Fk9qPBVWPSM4jvAri8EBQUcSk2XwQPGcmG2",
  "key22": "WzfXaSMdWwuAadtj6vuJwty82LgWs7hHK37mXhn7r5Nv6EC5fjEheEXno9WMAmZmdQAgXCZUd1SEQJngSVo1mWT",
  "key23": "42rZbnuKjUuuiufmD91cLZYpviE3CCehhxKKSAH45yf4fyNjt4vwPr98KUfkkAzNUuv7r53o2Em3TXxFTq5kvbJD",
  "key24": "4BV6p2n54sYUXy9bbpnUKR838dCpA1eCfnpSncTPDR1CD3aZUkiFdtVBth9eukzo5PxtNnWv8mVFfNL9dybTfJgZ",
  "key25": "5chLPc5H6QE4JL6xoMrFkkCWtkA4DbWFUrCCp6MV7WRhithiXYBASEVx57NBHkRWCAsWMjfzxa7b7B1LjHYMAje5",
  "key26": "WtRAxFJQpTqkwpjrQv2zuhLkhg2EGzjEddaa7Jgc7EWeHmgGHRzT29XN2uTT7uBrJMTShvbAJ6bqLBNG9JuyFaB",
  "key27": "67L6zbwsPVePwSQvSEDxx6QdDjFMSDjR5vTym4BSKxU9hiHw2zAsq7mf7rwtXMxpBw6ggAyPtGwdAP1pfXSto9uX"
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
