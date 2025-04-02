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
    "4dng3uG7zmVCWDHXtwV7P1AUZK5v58fERBQGkSHa7urwaKb2TeqHmMiJpcVGjHJYEYjFk4q63EqZcJcMXagNA6fT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ye879Z6E3dCauTi1y6m24qrngShgFyWo273J17DggxU5iivTzV4uvnCRLRyEoeGCee66FAC1CQALX8AJYBCTWoP",
  "key1": "5aVx7cGUctBCmGbicnS9nG3AC9CaTW4MGNTEeXyDJ7YYHcQXHpiLfMKYPuTfUWgiYTSU4jku5FuNkLZKpe1izhHK",
  "key2": "4UrDhV6QsaB5xdT5RDkotxP2WSjK5iArtJeJDSBPLkzKsSg36yescxqassj65nAqX1bwCLvkHZUFPXo3nbY53Cwh",
  "key3": "5nqVP6E5m1UMzexFv3DcjGMh2NyKPpUdJ1inJnx88XN1GusEzLm4orv788HqQA7hCEYoRaYjRYbp8iPFsisw1Wzs",
  "key4": "61UgawqDuZrNnHG4z6mPurQwcJrW8Ru4RV7qdyaLUw6q5TqgrYMRVZ3Rrrb8ibLSQGwZR9UYoJ17LQbuxk9B2pK9",
  "key5": "4LNL7rWWobTfQ18Dnt3gxb4J6Pa9K7Gd6cUV8otDdTCh63gEodF3iwabDz3PsCBwbgSJi99grfkFhYFPtQhxAoKG",
  "key6": "YoBjDULiiejXAhe3X7zwbjQtctJwxrzmAdYBGbKqdcLs9vnFqiM61f4XEhU89TuShGFvp3dQvzNXT2rTzapUGxE",
  "key7": "2ZuWv3keZqPkAzsE1uaE5HxzEjemMgi6P7Cg3JYyX3iAm31z61UBpjcHMaRQUXaaowbmrqAEaGejXHsaGHRTuDMH",
  "key8": "2Cpsvw7pcisDg1k7w96b4NbDVCcMw3T7jZMGsuiNVm6iM6jGzgGAHV2Aiu26tWrcumJoq3bkSgNe4QHvsMXFTTt4",
  "key9": "3G56PEVpJDU257DTf8oQ7ypMWVH9hMqPC9fbzjmWKAFTpL5cHnE41LVvd1MjyqL6ExbNMKQjyfDCTRjgrHw8Fdp3",
  "key10": "5bwDHjYWvTzxtus56hPVxzodcU5UYJbLBgUPCTgoaSmmoqG2XTNf9nCVaQigkxfnBb6CxCFL3wt66fDsuNeE2yXy",
  "key11": "3UCiAj9Xh7WkEhTkjV9nwwgEGVSsAYwRASbKgXt3YpXtuoC3RCWxvDsG3KMp267iEW96vVi25XovftbsdbWcRJ3D",
  "key12": "3XNrTLyydvAnPA7DdmkUBZvHyDB9ULsTpwWNfXSfP65Tm7NbsTrc7RXtQKhRLBtXj6RuyUFA5kU3XU4DAqiE8nsr",
  "key13": "4RDJTFMKQJtamQDydX5EB2B3rK9gsVh7W4nFapDjqwpReC9VCUNWpq3QKyRuZGaGDqDXBpd4SgyjS8F5GXp146cc",
  "key14": "5iCnPuXjTXQ8sv1wFofFe6157YsHATJcZZS6yXAdiDhHn2tAN7v4Ub3sUPQfbbPGbMHnWQogrYwL6RMptgYNwZHb",
  "key15": "5Fdgc65ZmoBXdyM68HNWx5NnfeibgqgMswxys7fwhoU2LcKB9eaGomw83p2XDvsdgYBoKtRQ2F8i8ZjMMTuYvj7p",
  "key16": "66L5a2FuvYguaZApHoVRSXReycfDrrnnWDYDNuBu2LrQ9X7zRYPFxPLcJYUtc8dRdRJYiVbvu3XH1euuCR1Rr9A5",
  "key17": "rQQX6HjU4CEGCpycrCLka7dzjwbHD4Tqqd75SVDHwDumoacXxGQGMGJyARyd5nKJSSSaqifsU4h9xMHWAyT6zP3",
  "key18": "tk4d4EXGNN4iusDTN6StA1xeZK7eEyeaVRNLZehBNQVDLX8VuX7WmbRyqbEDaQfNriHXtyoawYZn73etWiLLJ8V",
  "key19": "4egLNwXmubs2wvgJh6793Vgcy9JPNgUhbExvLHMHSRJAb9VwXotfDhTTRv17rr8eQXVT2t5YTetNDoKDCywJxnwq",
  "key20": "4hXUDKAv4uk8ma8k6VmkugjCfRr5ELoqXgLmKxEc9iHQhPrGpeYPhz98mXzSXWVJKXoaRUwnbRjVQnGN9zxWoab7",
  "key21": "2GZTo2hA97VBD2Qq9poQiWfr1nppLmRGg5rkzNxq8EB7pm53oNCB5ef2jfVkL6M4V7XsXdreMtQq6hwkakXGT8cq",
  "key22": "3w6RbfBBtqFrofeHLzpkW25aBgFjYcMra5nqwEkKwEbcpCXapBimnaTERBdQjWdQERMPW51W6VB5p7V9E1jAmZwn",
  "key23": "5JSA7CvQiAVPXV5Emish42gpxVfQuAqXcMmhndjRFXkYfE4DA2U3XEqZ6gqa32gCpbzgTEbgjaKcZUcD1G9Btadf",
  "key24": "3dCDekSYSZgkGVjiEfgfXqdRxX7AqqK4o6nhH2KqkgmSqXXH5ANrgFN1LUSW7BH1pKAJXcCKUSYuLn4wiHj8FKSD",
  "key25": "4MNuCjehvowbXVGHgyAYPkv6YBHLQjEbT57g7uCGz2nj1dvKX1NuxQ4LgsMzUMQGprnAKU5ztWHKfzUD42s8gjsa",
  "key26": "2kfNEqtMXPL5xVUskXTpDiquqAkR54iEa76ccK52ETRMXe21CohZfn3uMeU4wUoDyPDPaBT2a12T8X5GWmhpyHet",
  "key27": "3yrngkcH6r3uvNzEMirdBoZprDagxVisaWKpJ1sJuztt7EbtGAsJRwMNbAU7cSTcSGHprQUpsY6xfXVjHV8ozZhQ",
  "key28": "4pATxihWZ8G7hNs3VGCPrzx8e32gMGDH3X1HRhRQj3xhnTeyk4qJV9eCHMdGMWRfSpF2St8McvCqty3ogCXCWmto"
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
