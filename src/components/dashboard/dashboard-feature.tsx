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
    "3ZeoRPGULr3HAxJ8o84soevv5kksgsG2GRM7qATEWKADEQbR4d4nY2xEn2kbN5xzSozv7FN1ffyv6LGfcA38aeLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gwfSZVCZMoWPQUvM811L5gc7Hqm7pSe48WZTTmBoGKGZat1FyCKV5h5egkpSQs8U6kj4pT6AUTYqarfYsSMPumP",
  "key1": "3ffTgHSZFJqV9TBkijPg42mmMLPVMXcnNQRmyH4bgwbT7N1sajjAQ5iSjAUKHtXJbXSJfNi8CW3DoHv7VGnUtGLC",
  "key2": "3agGAzQnHYT1B6qqQHbx8xDs9K7XBzhmttEgS2rH1SvTSDdU4JfpvPYbKa4kSu3W8yBxtSKa9bMAkguLQwwFpiiE",
  "key3": "JFxaHDJcjULXLUJN4VqkP4Nn9Whxd8JigH5b6zfQuVJwZzcV4ZBASgKNM98Amj9TJNGe3Yo6p3PHjduZNJgtpog",
  "key4": "4w6DPk2HuZ8LU9xjju6QkNxmHGk5Q38wFHcwSKUUVTcfpqbWz988yyhV1h3RhGs6pHg7v8xFFsb1YYdDPCJz6Syi",
  "key5": "5qF41wspVSe2ZeCcnLeU23CU2Kn8uTsWDyfGmffWHZgLg15TnJdk2qvY1j7qh8nbP1AXSYNZqYNK6ffVBLqgG7P4",
  "key6": "2Ep2UGhexBWak7VH78HH1b6uKHa3eGg7UCF87ukZWGofbkgMQNr4LMcsPRNzBcMMcsf3CqkZcyssfCuyHDvgmrXx",
  "key7": "SMNTcA2FDJk7ye1bVFXc3td6VXKR4HyBi7PJkB1tJJD2Bx45C41yP5AxLej8NSRcGa6B3pDfTZD5EgPWvUN5eLi",
  "key8": "3LFEPKLNue3sQ4ma8Js8NWAWjYtieiaTqaGhXvzw6J2stm3odsej35EpGsW2auLjQH3tugzuzMuVxCswkBBaCeM4",
  "key9": "V2jXB4qbjRsZgynPSG2kqUzbatmUxrcMdiLo31RPQJpBGFez5Hu6j8hV2jbZx3YLvsvuztW3GJePLsVexmbdD98",
  "key10": "2cj6n1SUJoZtypK5AhbLWw1dResABr45diVpRgjswkY1bZqH7WW5BNtKXeSYhhDtxBqATE3x187mw65PjrfheiYh",
  "key11": "5rZY1UDBz9PuqiNWop8zSPuKFi17hWrEUWCrj1sggeijxqvj4NRTvbBkgQGLT6uPZoK1ELr548yfhSi1nsdsyzQu",
  "key12": "2BxnEW7hKbf9r85v3FQgV2VPDC4SmUivqoj3kEo3LZ3TvDWhH38M7xUhVMEu9DvzRwMKUxVFhvVarfZPKGhMnWfB",
  "key13": "5sTiFkJqLt9yZzbjvdGYeEkojaezM3xj3aoiP14DAxxckS3qAHEDMqeJ5q3bX9oKAmjuSx7WB1WFXv2swZhxsBXZ",
  "key14": "3PMdYef7HpqTTzhPSXQgqCUJFyioBgzxHMC8AL9ePw3p6S6WUe9VMsaj3pi8BTknHT9BGTcYYg71Dze5Cr52gbGr",
  "key15": "PzA3ii9TGAGhJ1pTDPJQ63xgyjBpe6xLh6ssWmFNHoTWFSrfAiwJokLoZtkWqo1fDFJ3LtFDaQD2uXn8gmHyHTE",
  "key16": "5XaesXCBt9JcyJHUjAaJDXgsntLmHYq1gVQrW5Pvb513DNgVHmdgMXa1J6geSKpj5EnP2y6nW1NKdnYBDP5uUyud",
  "key17": "NzLWvxRXwCyx8HwoNg5RJbJ6FJ4DVoUzYnNS56WyEJBDAQaQTGkE2uNdsL28Gg89UqS2iZ7nYQPY3WEwUVYAhWC",
  "key18": "3bFrxupkCZg9Y7EpGSkM2eoBKWrbRVRKGq52Q3TWJdTm99L6roG56cLQqVXrDLK7mzcPsAnFS8xa3UrcnsCzrVUT",
  "key19": "4jMtjCSqkzEfaSetyUuGnLrDYh2A8d3VhWUCy41Hu4Kssa2DHFmDAMrwt6t1ysEqCNG7S8P2crWRJ6hkoPyYi3Gc",
  "key20": "4c1anTJJCwvrjqKSdDvZrStBopr1PqpJ2U1w5RsmS4ib8uBSLeFFLTYYdMk3HQo6DncwPt4ygt6dhdGPBxwkXzua",
  "key21": "3htjaLe9RJsjPVbtyj7ZTT1TLmCJiVeP6s4UkLefjNmfhFHNVsmP3kgiuNYzg2tmTkdgSHxU6teE3b7svbWnX8Rw",
  "key22": "4pAev1UsZrkGsn1Uj8rjbxTphph4Dsxc83nCGVEY9Cb82UnCBRfcnX5nJB2FmiQPoX2abX5vyP92XR6HWSsmMCDB",
  "key23": "3JSPFMkbCwDaWJQttAHvmsMyoGZgjaFgsVNULNsp22SgBKb7mXbPNJzRFvgQGq3bcGhtLpDEwrZZWi1A33m1U2Fo",
  "key24": "SbtU8KjqWJ2nBmg6AE6eDKFmr773jpyC87UGpJfdXd5wQFZBqSEEyvg49YMqKLCDenLBJh4MiPh2Zuq4wrNVW6r",
  "key25": "4HZAx2aFk2e4rcWajxCUiHV9Wm9eXxGBDFpfHrF1dVPsDLG4BrYVPutx5t5wb5wJY2NGFUKzh4Bq25ecupUBq2Ez",
  "key26": "2QEJvVU3SxoaPTiBND8DwDwywsrWAEUmDvfJZtfSDmcsJSJUkPtNR2vEwx4rqwB7WanVJXexGU2LPJbLp5fMqYfb",
  "key27": "ftr4WswujRkWJQha1U1kgTn2Y7wGGtihBbSxZJcxzJ4y1PnDjo5C4Y73V8HtAUurG4EVyqMtF2CYeKhtWv9jxt2",
  "key28": "2r7YHrwYy8Xp8YzUiGobtgHBVnNVXoDDaXTg7zGucHXeWnSP7zjyuKRWt7JVeZSByXvsPR1W3ZvH9QF8XFBWEK48",
  "key29": "2TLnyTnrZsNjf5ECvKgHzuNwGrYLJTXM7FCQTepvb3cdmWTttSWcdRLpEPTypdbRZ63jGSjLiTF4zx2jDdy6iCoZ",
  "key30": "3upxXroAfE7KsxzrRjSRfsGCaYDk5PUQf3si5ZzjLYDrW8xQhqv82aoNEwotsdQkzQ5Nu7pKRGLsGEutmEBX7PSK",
  "key31": "5qtKE7ucVXabsLXAqMwSDuN8uZxQws2oSBXFt7YM6GusPtDWBkKMN4Qw6PKV3Tog64sPD5MLkoxGWvxFBDhqMSQb",
  "key32": "331qTg631wVyaEJJKN5AvJV4HU6RtZfvaoTyfdLTfSq5NX9P9FExcbFNjNEmrZmQTxYwAmErMsJ2NkFtp4zksjNE"
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
