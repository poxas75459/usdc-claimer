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
    "2gsgGG9jQj3cJgFMdwj6HQC65W7eu93iDDYXTvoEsm9CqS5KNA4gpVZknwZdN4b85Je2E73zsheBq22B6S43dE7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GM1FfjArPZ4sz5hnKhd1KyyhmcEKtXT7bpuZoodetDKrNmTvXjifCPkFqV8kXVMzBz46hZS3QL39NgrJSKvz8yw",
  "key1": "8TvMyVpxR94P7HGvHi8JFJhY4Xc9MnDh8oo8WG5KY3WjZeeymnFWkX9iUoHipVfFiBtTDffhtFsBniAq8d6HReR",
  "key2": "5oPrhaDfqoxrQVtRe7Gomzz1sjYvk9tYJv8edE5xUarsre4L1tD7QA7Lph6LEKHH4rUN5D4Drhaxo8u8d149xMjZ",
  "key3": "5aFtA7QVXtU16DLEuKiSv8woozUNgkeQHc7Xr6FSrGy1jirzuQ4XooPWM3HgcDho5YMHK9Fvk7eWt9oNGvnDdw3i",
  "key4": "2UDuTusswAwnhwfQ8d8dUbsWnMXEArx4eRKTirLo6Gzi8cmKiumVHPJspzMPMPynQ1RRciL2PtC9Dk12u5cQ83py",
  "key5": "5ewPcE9ayf2BEwLwZqQV7kd8hyJq3rf5E4MpCHjDuSTfW2tmzjcRNjnhgA2bkHFDybTJYs1dhHFrymXNvnnw9EdB",
  "key6": "8ByXyYAyny7mFHxcdzy6p3PxHa2qSBuqNnRDaGiQzgjTdNcoKZjZfWKLJXxESAT1ySr35QRZ9Ygho86WPzWzyp8",
  "key7": "37f5SMnWPyXXhB89Pu7mPtDrypnpDaJCTHZrJaYhyy7XLEBgqJJDHzXkTXSgtUAReKxn5zz1WKbvvhpmxWx3xPVc",
  "key8": "HpCkHXZ7ngfBoyu7ecN8JtNeSur7JpxsU4MGAoPvEtQ4HEi7uZjznpZcsQHJ9L2UTjMNVevijcSkBQ6TfxFAadi",
  "key9": "33RtGxneqUgYcHDFwTxXqP83w2ZXB737Dd9o65sUciajmDFXkRZRzv4166NVfMxZKmjyYtmpccvtfibP9DG7a8Lp",
  "key10": "5EnDfrbx46JoJBVGQ3tBJiWsfz9HBv4r2T3a5Cce9qKkyYkVLpz1jk2Cpui4ERXNQKSVL5Us7winXRhJNGZF4gDB",
  "key11": "XMpyxvuy7QvuCVARH5cevgtS88EYpKcNfZFC9uTEDAnmcdNrq5ctDi2AcxotbEybGvBqLga3xAdTyzqo53z2RME",
  "key12": "5ePS2pARbXveoJqtR1rqSygpjsZQtLpjQkQ6Ke3WxqDmP6XzZXV54bBpeVNRbhSw9hHcL6hi8XQcxoBqhJxQCPSy",
  "key13": "129m79DbjiQTRGwimRWVVrqR7GxfQFMvDqrrdiRYFXJrVGyonSUy2E3YV4Ms6sHZ7kQ89Z5atg4fhFG6Z4LP4zHz",
  "key14": "5wV3EGMmrKokrtyfSWS3Nhm6tiHmfhYQWy8oYtzKBNWAiaivXy8Vw2YM8C4PCiFDDjXajdLtgXWettCQUEjMbJwX",
  "key15": "3FbRGKBj6ajn6YJw8hXuR3yHF87V9vpm1tUHLmrdB4FEvzB3K1i8bkAYs3xY5FSmiznegautL81ZvDQeK4aqqeCb",
  "key16": "2e7qWvNQ6Jz7yUkgpDB8qmP3yDU5W8GyMsZtKxycv5eGQsanb52LuDceYwQUPuvWDxx4VWnkEQrowMUfDrs2jgCE",
  "key17": "cgzAMaM1CJkM4c5KvEanfAi9K9DbyBdAqw3Zq9PbASMbDg9gboQLSLucXThzw9QHwndUxRdBKKnu1ebr1GXAdBT",
  "key18": "3RMCX82U11srcqxfK88sFvpZo3gFMPY3rULYw4qMkUQvjcT31xJLZJVR7ovuUY5VdunqFB45VYeM74Cnq48qUJDj",
  "key19": "2t4LJvvXzwAfD2HSQmssijz8KSafhh47f2tXXiKEXUtJk6PPR6GiWF354tMDuXxjQkxctADBrLGCMf41bNejWqxg",
  "key20": "56JfwCLKaFYSRqwrDB2mq8kNXsqzFE4XMP5gFQR9D2gqLbJ8f7ixfvW2Mq3QPYJqJ2FJNXUB2SVX7qkVHQUwtJKr",
  "key21": "3Jx8fjpcWreDKdwjYpsDFZLNwEQgM1SAADtbcdWXhfsCB1iNduZtx4T2cfJDaW9woqufgag72DNgPHou8Ae67uva",
  "key22": "5F8FVC1EZ9CLe3X4bJKMWEXAynWg8HWXE1pmNr6BXoiaU8D98rm6oD4hT4z2EDV4nhy6dvW3pLEApwbDWda8oSPi",
  "key23": "46FyjFSnwhAFy2UWqgQK7GSDrzAENink5K8684o9BBfJAshijVekfTKfUKiASvE8R6F7wUkTmWXDdn3TV7rtMZrM",
  "key24": "5bsSG3enrvjLvJFHHBcE1FQELR9ZVwVdPvun3JSWcWnRj7mNcDE2h9Kt9gD4UogJFDMgTFMDz8uEQKmBQofNuwjN",
  "key25": "Sy1aRmxrLJS7TQnFXSDgs9WMG5TxQTizRAJWcyEQaVCPey8aAaqhPRrRQsYZ8Zge9UpQafjL3CCSSxawZbMvb62",
  "key26": "2Tf4eTjqoe7M5ZF3phUEQjWgXFeURmR15qB8jhEm6MRQsaJgQzc3rzKcsRYGgoYXDfJ29a8pit3iVQLc3U5xuQ3g",
  "key27": "4seSqvnp3Y3va9XY5fhyuauqVmj1vPpbGeVFo3r25aYFyceQnqpbtyHxFGW6EXjkKHcfe4DupFSFMDLSN9TR3btk",
  "key28": "363jeevMbJd9zAeBQGCjUsSZFiDrFk8e5tiQz3ng3Qpe9TkfXWwWHaDTjaucvaWQENgod62EXPJZp929Tp5ctUkS",
  "key29": "4fBDZgtw44T6ttWuXPC719XMB2XcvFF2MgQTBo7J1iV8Z2EE9zAC3wkKh5G6TCaR6H2Dur2DAsKpFa5DZT1ohKgE",
  "key30": "24uNQPiFpRddPtx6q2GHJ5KaUeqEtzAWmFWUYxGivmuqk6eYwCeR938xtm6L2F8JvK3rbYZdkeSYoAM9GAekajxG",
  "key31": "2pdKRmwywVNEVdyDLUoetAUWVXzjpuW6JM98qkJvWm6YkeZayQDV8wen5NE8rUSjeThHHmWw3f3pQd8Knm9fpo53",
  "key32": "67MKBp8MibXgBfLgLm1W82KXRYvG3rdmXiA9fKcuyaSdyBiA5cRHUV93mwkTAPR1mD7DpRqm8rtLysBtJeknz2Pj",
  "key33": "yFwbS6M23oCJ5ZuamB3sfVxqD3AZs3FTf4KUioYnsH3g8cnAW1Bj5DGWFVKY6C9ufVCSDCUkYJwpAxcXzuU2bsS",
  "key34": "5NAAB9GcGW3Ay4wE4o68kTT9eBYCLvJog5SVSX9GFbYrW9gNnsEyTRN7qPZzBnHeNkwHdjguQmKtu2S8QG5Ezf7A",
  "key35": "3WqPCJadVZ97yNueYa8XYNoQ98MMG4bVeb5tngkUoS2JcH7Lt9ujaqinh4qXHibczfMwft46fDpSMaYJCuVyms7c",
  "key36": "akEZgRGnZAJiCMpjeS5qbMHFmPSrWvoVmsxcG22c9dK9nHxQH4gX2zjA3wtzdXbjXqGYXUfMNMc5MLU2AUgMEMX",
  "key37": "5mmdrkoYRehDn87abYdnoJG5F6dJCg6DZME2J6Zsq9q6HBMAybFPMDv5Su7MTMUv8iEMU5X2Bi92dN3wZLrxDBx1",
  "key38": "tYz1rKgNoaZyNpmt2FfuxfnQjD4qxbUQB6cY8JkRjvoyDr7HXHkkMMewr2PDY28EhSC6c4w3KTtQEtq9f7aEuGy",
  "key39": "59Qjrs1E33qMHCRcreJ6kd1uXAni1vBEscvzG1f4bMfCaDMJMVrzxDVaNB5CvqoXfwdW6j6Y2RcLkdf73posquU4",
  "key40": "2ygxXSPrqCxCgpxf976Fma6pQGtRckbij2tinNhSWPhcHNERhq85j7gkSMApYudMtmywAgRqXX3u6AFacQnMmn4Q",
  "key41": "2Sm7xzP27Jx4h1DYa1vQtv1wBPHckEz4NYKuK3j1EZSM7XpuBDCPPr8x2ECq1h8Qar92sk2JXPEwuEfWBWtpEGdF",
  "key42": "QJPz5UwNGfziQtEYJJ9vsuJ9Nwwrhc1FiDiKUywHmu4pSCAXcnYHp3Ef8iHxb4KsvXqTQmTq6NnEkQQmKLSLdCB",
  "key43": "2bxaS23HoYsbKnyDUkJTq2cJcpGMFGycG87EM91hL5A5GwQpwez5JezXkMvPZUoW2rpq1Emk9wXR2CPTLRXideu1",
  "key44": "2eSckiGzkzCEyNAuPS41Rv69bRJhVfd2zreGj42L33Wh3f9v6xzpRPzF2yQiCmrfV3VwTbPx5C7y2GymBzj28RSn"
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
