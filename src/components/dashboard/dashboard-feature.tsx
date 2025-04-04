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
    "5mbKyrN7QSDRFK13CMkUdLdsC8vpxhd83B22FTrKeQggRG7W5FBsS13Vzt4hhAhmehk6EHh8eE6nXqztGeoG4wkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22DyvFe5zQfJ4pmuTbGzNgtnnmQ6BXg4K224j6iYhgBVrbyb3Niy4aX9ozA2KzznUFCCQApuaUtjMQTn2gnGK5VV",
  "key1": "odNxEr7zhpSrnPWFBf28sbBQWhiT5fvtvKe1mKsMJFHUk3XQqMTNNtzkVPdkKH7X88fy75EvkYKhbMdf7J5oq8P",
  "key2": "Ur829pMRNRLjTVpNiXPuvU8J87i88fcJUyADMciyHH884amxYBGnshXYcqsWkJKk7aez8K5fwiFDj7xjfkcP3yT",
  "key3": "5H4ggSAn3ri4pBcjLzzQzBF3YC5jS7CBodvAudABiYmz23PxnUT6RBPeVbgGW3TJhzU3oahzdCqraBXReLYJVVsb",
  "key4": "3c3H6PgdpMpc4LZf3h5Pbf77zQsBmP9EZ2KT3zbDBesZAy9jpdWyJQZxSHsT9PdST95ruad2MSmVnj19qdU5PD9R",
  "key5": "2pg6gNNZZK2AovFATMrwR3KvyfKHWZjikrhhfenMAcVETdqV215aXJbvVz2MQ31qoi22zLEcNc5vUxSCw9omHRCY",
  "key6": "5hiidwgrBHXtqL3UkMZcNJtkmipF8MdncurcTnfpyXP5bjakVSbCG47LdYHSyUKhWcFMVWwvyWvf1fvojP8ZRHab",
  "key7": "5Gc3zG2SjGEwdJAhP1jPrx1onRAMSovqQUqtdoqmFgRnzNKNwuRoE1GNfx73DLFXRNTzuBrrEXxV2vhdoUSGMPSZ",
  "key8": "Uv5pBcj6DrsRGqfb7yT2H4FJnjCc4xJdxZyveBHhUDgNYtwdmL7T1Z8eVoEbKHyGXcVA7yAw8rK7xicrCGBgmf6",
  "key9": "36q2445nkxW9mnpgK1CerNsWJuCdWSNfuyscHFWbAcmNPPVbiHarXxa7iN4hWAqA8T8GcaH7qc7APKmjputu7JYP",
  "key10": "4YHxMi4G3h3KwiEMM2erEFsSyQDLLPt515dZfPZRGmaYc9yMb6MyFc2Kf1Q7yRs153iZPQQUFHV2r23hz4Xgryui",
  "key11": "2NxnKHcodn8riXNjoAiUpyqycFnEGiS1SpTnYZS4Cf1ibxmcvf6oGL6GjJEKoJwqHtaNFd1ojjuUJXVU14QHRFyG",
  "key12": "vy1SULHwJAEQpW2TBC8nz5yjotFzr4ZxxorcQAyo7AxDmgM7KCygtZpRRpgtXd3gf4BAZASEnZptxxoEHT84x49",
  "key13": "Bsfynv4tRm6AUCwqND2EkRRJ9wCgHaxrUE1sBjasqUijrRaqZFWYVCuFU58PYjY691P3Wb9JgJeh85G4moYs6cm",
  "key14": "5bRamYPHghR5hTi4NmcsFyQYAnxogzps7ueK8uQCMSBx31TqEh8nKsVvZVoE4jZHYaxcJjjEa2FfrcdUS7HCH2vK",
  "key15": "4ETyTEacZJGCfJ4kySckgqKXJxhMH7XntLC5hWZA5FPbZZPgxmvJDDVPiveKAxSZDVKDE7naMv4geUuRYbSXJZ6Y",
  "key16": "2mhMhG7K2xQHxiSrnZGEBNWeQA4a2w1dSeznkrFzhi3QuxUnMAgPCPcVM3cLP811AFK5M955TzL7QjY3ZibQCn5q",
  "key17": "5S7vQTxAKn7fdute5tNZYrUWLh8ZeFZM3iakPnnRhyTEBQob8vTGBVihhm1X13uFFCqfAcH9dfntcXUith1BT1kR",
  "key18": "274NAp86xrnFAuaVTdHmjnV2Tye61opzA6ASh9f8p9G1UidEHBZY6Ez28WbA1LsiNontciJqtZm5Yp9VRBukngzD",
  "key19": "4VDgCYDt8QsvYYopfJQvZB98BhpPKx8pfVL64cCo1DZJZfsss1gLYwEx9XFLHGU9gr39piVPT2jfnHVUmvBRAqwb",
  "key20": "3L2E2k71Bg1W5q9L6w9kDgxgbwYgf8hAURi3jPUNAA8w8sP1Yzd5xRBUjT4nKwTQkbRjAjRBzExTZuvw1qaAAVrt",
  "key21": "5yy9iJcBmMtwhWefSNTu5u1QGwtE6HWmWdywqNygFKhATFvbMTAZKNSdYVjLifLAVDQBPbVJnNtzYEDocvPmKqhZ",
  "key22": "33Y1FT3Ty9K9GCQQosWe1sWzR722nBH1mA1sRPqA6F2jc38ESbp53rXjdE8W6HXfBf7nkoyBtDc5iB3ABQzJBD1q",
  "key23": "PXRnz4enQGmJToCnoqHZrRPtLEtVxs9vkoEp2Dfm1tjk2iHEQ1VVKw94NToE3xjBpj6jsG9VvCeZ9Q2SUTxHwS3",
  "key24": "4GgjUgWik2g6QycSpZZ4eWmBktrz94m2nD4prd448qk3ozdJe1Y1QxzaA38TaL1yyto3M4jLqDdgGDXBbCUexM4V",
  "key25": "3NS51i6iAY9hFoRakrjfxpzmigaAgtUvN4poK94o9jGQqFSRwymS3oLW3g6CDd313GsSk1esFmk1ZJUcn8FxvQkZ",
  "key26": "5YKepnj46e16gmPM3WvNHkWZpSyRpWzSoBeSQ1JtY9iBBZSU3yYgHtC7Ze4LJ7Q6qrGerBmRfL185J3GqRXw3k58",
  "key27": "4qzwrwpHnhzComw5QyXbNpcepKgZVWdUjvuMLMyagXHRbn5DvF1GFGsMarsM1Jt5PgAJSksw6vkiidW6ZABEg5YN",
  "key28": "3sNDBcV6MYxuqWnTTqFGSt5Vg8qrFGsHBhSn6d2jetocbtJ2Xrdk3zt28eRjsH37Rpav6y45ebRW2VEf2stFCDGW",
  "key29": "33AoCXn8eLEE3fQWGNMqH3qVujYqsEUM2XVrLAxPy5HtwE4NYao8akgLscFBddT6oskyGtK3LmGQK77M9HdeFmK1"
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
