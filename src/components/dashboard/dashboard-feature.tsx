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
    "47zzuTCcW5Z2zDYeoWCnDZQk8eNPrNZcK5HkxMyAL7DM17idzhvSJZH5A2Yr8eShSejtAHiS6T49RnwRvo2qdGLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ntHGn4EhvAZHZZAo5DkHSRsKd8g9F8qzeyTznCvQzUeFfocMBqi7FvCpEiP9tuikSq3aHqQ2HP8cdGfRC1VDrx",
  "key1": "54u63pqTFbjEA8TjFk7L7a24xnHsWAZ1Xcc5ujYfYd7bwKRrqwgQ86CkFRC8MbC2Pk7qsMQcUwStQfGYXc54DJxH",
  "key2": "2dYkWXukmEXN9d1yDcpoNrU3G7kdLMkPH8N6aRTUUyyFUnpDr81StwT49R5A6rC7qBFwRWH3oDYLnjSZCP7apVib",
  "key3": "2YzGvQTbw9AULcqUgwWr7LVRyRCzpc9VXtzpnXDyY76jXmAqt5tYNYBEGoXZaFvDLZm1DSm9xWWSzBG8yoyWiCbu",
  "key4": "58GmR6AHXkJXuDEcTzEEFWotihjHmeSoxrSBiLARnWX7M6fJkj6ZfkZu5iJWji1QuBdMJ3U8L1sRLRwa6befRoqQ",
  "key5": "2swvmFkKbm13jjzsrzBkNrApAaEVbfFdED26PLYKhQGjJ9qULgGtFmUEkAqCAd5rriT5Dpk4nkTBcDrzqYHEkobw",
  "key6": "3CvDnf9S3JWeyY4voNRiXYDgBpPMVvUnzwe9NZYbKtUwNxUacRGzh3xvguKEdo7Fb6vLpJiADpiD15kqz342vfcy",
  "key7": "2uxcxj8A3rgvoa6ZA6cL1Jp82gBWDa6YbDQbuW1ySBSy2v5X6F1Gte3r9pmpzM5Ku26Hca3W3eL9rPP437coNwTX",
  "key8": "5VbW1Pbi8xREr1Qj3gNtxywc7WjuJL83G95tyWRdMDig9v4pHhe9GhEtEBZR2dgv6JMTGFkwnwBsN1aYPZKHgCc5",
  "key9": "wUU91LqqnpxbfaoC4QYULcfQRHibXcHQFjZAYeyD4DFmcM369tk5yKCobsSTL5VPXMHuRP2BhELX3CdHdn3AZVZ",
  "key10": "3GEgSNuPdQ2EdRVJo1Yt3oMZtvT29ypa6cbT495QKQRnTfJ5ZJUKu3B5MBes3sCHx41X3pZpABCpWsZYW8sQSdao",
  "key11": "LYPZv4rdtuhit1Qad1HStCGCxvn6Y8adrsDXDwqkD2ZYzoK2efNAeLj78Ry13LPg7FjG4VgFVyR3qPSAdLEDbfb",
  "key12": "2LEv28yFSS7Ac47L1JtfAk59hT7uTaYrvy4qSoAe4bDNQBpdXoay8XqRMzWGdEaFBujfMVdBNS3N62RQtqyRtiq6",
  "key13": "2V89b7emnh1oM6mkPPaM7aFFHMdmcsLNa3E2u5cmT9YruZt7A92Mxyye5ST6aDQy6KxtHScDwHJkibrtkN2z65dZ",
  "key14": "3V8wFZGEd3Uv3qLqG8fCfUiZnBev29MJoGaPqn9mESDygd3HHVZai115Bq34vSDnyg5roY6BV5YVp22bRGHEw77W",
  "key15": "2NhUALk87r9WtiYeZu3yuDWkHjtB53Fd6Ew29vHqpAxTDXbu2rooejhvS98FqZRD8gvfFuy4je9FtXwN6Uvx4cLQ",
  "key16": "3dTAcDJG5FaaUvVyXaGNYoNBqhCiKWKBX72L2kF5c6YvV5nAePY8V2dYvy6VkTJSJYmyh7rsA4H5WFx38KJooJEg",
  "key17": "enCqMEFG3mohrjXReoNdJq6EhvZLUZz6rjcbQjqqEsj53q5Qkhf4QYsnzvzmPYoWp15vQTCZ3L2vP37YHtmFD2v",
  "key18": "62BVkKx4pekJEMV2z6gTAqBn7aKasN7o1FP3BGiGAJxsYiTheHYdUCS8WASN8sfYLw9qFbgZmaRLM2NPuqaTT4Do",
  "key19": "3bG4ePdgAHCxPB2efgfBkVRvdN3LKXqTQeMW72B2StnwtvmRroYMwszwHF3MMAdn9YnFNbgHcNXJmyigMENHjr5",
  "key20": "3npXPKAxKgdmTWDW9egvDpVhyRscAXQ9s5x2BUUvwErtEwV3UMMd1BNASzAVkcoaC8pg24cgkV1oWzJNTqdg8UVn",
  "key21": "2Y5n52ErTr1mNyuM9vDep5xtyTBWGdgV3uwwkoLbRe4KXcx7nd1JjEimHyThuBMDqsZJ7pySqr1jENxZ9Rd2nzcQ",
  "key22": "2Gb6S2j5K1M7oCtqCnTghBx3xTm7vR1P754DUDosimXrWr4ChyUBQH9cYuvX4y1BJ5VLokFPZMqhyjomNtFqpho6",
  "key23": "24KiMNu98QX51YNdCrZeDB5oWS6B4dAQLdW2fyZgtrssTPkjcZM1MVg8yixvvJF72wAkAmPZYHkLaoffBCKcBgLN",
  "key24": "2fCXE3NzEH9FnifJm5FVPe1Hjv7TXQx1hDqnMo7wFaAEuYzFoDkGDBFBbJNXrvFWtd4y6rQyyLejh1urjBFgCvoz",
  "key25": "45zpWNnu3vK2sju1kkykPjjxESvJLDy52r67hx93tGTc3Uxf5k3SVDu1n4oUYUpNCiT3NP7dKck6ufqiMwdd3RSN"
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
