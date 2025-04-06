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
    "QL1XMx1JS4zGMFxHMwdreFue3DtrNjfET48yhG8k89EGu7pNRBd7GQSAv5HEXrHwvzvHizw6Jm2KT16GpmGChbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qK1WesfVEPQ2cTEgUcHpZ2uifK9ii8NttYJesWrrxpcLzErJ8No33DAV4wg7tUcv2rjHzKRUzdXUBWNugrgiyAP",
  "key1": "4dU6cUNqLPCVsfmQ2QfhNC6ZQvSBKP6RRPXABNSudk8UfEXVg7KyUAXmhEwdPFoffxZVavZVVk3tkGuR3RMzE2VB",
  "key2": "DF4ZuDTjL6UZgiKPRnEL6S7d8y6c8Nh2mpr2geCftM5CDy5XYKK4Fpa24qgWuA9zZmSZTc2HXyynRdgCsmUFXE5",
  "key3": "5DoBGj8bfFGJf2ApR35fQHhepz41v7pfHE6hwSNj9EWZJsBu1qpuDJSYn3wr7KUU2xvkXgEQ2ZWcATNVMt1rmuBF",
  "key4": "4RzLNtzVgELfKCNc513v9pVQ5vA2f5f87EVSkMRSvmXxuKMeAYHjMGRJ4gxbbPnHMnWxnKrj3oBLsxTFUqNbe35k",
  "key5": "5iUt2tefZgrnHSu7fSwxVqyLpLUBnPJwvKvPmN4nqZmT9N69VRcydH6gM7ZXJ3gwVUNXsQzF79uZBEtiDLvpny5o",
  "key6": "3Tfq93RSstNoevGn8Cpq4FDz3i1c8eD2uCZrhz13u1ud9fupmfpAQDSafRQTeEANgyhTw92SdcwpyqSk5mfnymrh",
  "key7": "2wQ5xKuMDjekA2cjRLR7vch3TkhDAA5sHzunzWTaKicPRaoNvuNL8RkfBGfAKpALSB6SWbhTzutYV8u32zKYRXHs",
  "key8": "3utiV4mV61HEXm9wsu2R7HM9U3fZnDsbfkH2D4wAd8xnncXUY699denQdTBJu6azd72t2XwY1EU7Sji2ZVQRAmG1",
  "key9": "4ap46t69aj48MSeQjFBomCVf1DJDcazp1grMVntNBdGgg5eKs8aDQNnqHuwahhLhDe2YuZ9sqMzoziMAjg3KDhL",
  "key10": "3EWDSR8FV7tGr1bp9fTzeGRndQmxrsQn7vBX5S5KzzNTRuzc5XAMW17WGP6Gc4taPqPVfWCZn6TZgg1K8uVn38Jr",
  "key11": "3oehngbxSUqZxEjKXfWJcWozQw1wN4mhMBtpDVUEs74B1mz1QQh29gza1GUcPnXZAFefPQ3joSdEP6Jz96dK1BV9",
  "key12": "3TPWhhaNMpwUQDHEjmAop1gGSDTZMxHAqVewJ9WbSwJK47NNgrTgJxtyRe8EuvRfHYxUrUTfLqAv9nz8yBTbnHtM",
  "key13": "oLBcSwz7iXVNDikKKW9jtbMNmNKBGKDeb9sXFTDRp5XVv7jRGtS8CsCwiw7DP4gqTND1AMU39pNJDMt2UNRUTkq",
  "key14": "5WW7cP3i6Lc6TwJLpBFHZVUyjEZH7nxxoQvFmCkvftqwPur4GRW37YUZfeKjyV6NJeqSqb7aeJfaM9LYEBADhkVq",
  "key15": "2iKjXUHT2iFwS8S3TvePvy7gDrGwHTzCyt3phRc6dGry6M9J9tqPvj1PiiHKpvR72eKm6KsMHaAmnsSx3hAhRNrL",
  "key16": "2g12FazqY9Hqxh9kHbxvYhxxnmAdbPVCUftNqiu4SEeNo3oadYuAHLoNZi499AnHubNPddTVRfdi3TXKKaojU3rB",
  "key17": "4cLjrfdjmBEMVkPyyxM3XSoZr7f85yRDA1qRA55W3LaJNWpxvzR7J53rfFThv3PARBHURDAnkUtKuDRcTRTuhUWo",
  "key18": "5EYcogJ3ZccE9bZymjNTtPb4hYb24XrwbExKCUHfvHvUKr1Wy6NC5BDgSzHtaJidYsGs1PMFbu9KTMsytxEWH3Lp",
  "key19": "31XutU89VXLBDjhjMqyDYv3fEwckDyXmQHRbT9G7UdgbVSBdvZXVm6iMW53fGYu74ZtgHmeWwEpT13n4MvkQXDXb",
  "key20": "4wEruBNmVnZ4QBz1AU8p4ZXsozYfKAtbMBZXk1CiH4PcBzb2qNWwSwTqDas6Xa2SR9j6M2zc1dXkmNcdb7p2jr1x",
  "key21": "5uKEEmCwdwAM6yn69GVBPqvWpUGA9QHyURFUTebHN6RUc1Gc42JNMxVYd8juXSogsQrZcxqT3EwzTQMjzygTe7ht",
  "key22": "49zrWJHCkMXCDSAhmFEN8o6i4dn8uydS9RCbnARVZeWz4U7AE5Nv4Qg2bsq1NPRsYhy6Zfoat2yBsf9N3Ey8RSbN",
  "key23": "5dCuTopHw2syiUzCT1fHWTxEFCyeXLXEGP58yDXTTzrsLj7SCvxLNPr1jn6mFavVaByGhTRWYGRro6xixrb6pn9z",
  "key24": "4cHTGjDd29R52W9eRcCZd1m4k9u1zXw4VTUzmXB7tnXZP3nyuEj73MhAbPLkhAr4xbMA1YenhXx2TLG9x5w2T96d",
  "key25": "5op2ZNRyDvnRek2gayQinmeGVpJBF4DGSr3HJVBbpYHjRN3b5P8cQMjmkShSWUFmzA8GCFUrdzsSbrxXJAVdsbFP",
  "key26": "4XqTsfSJDfPYisf6j6nGVRdwHKhfTq41zPs67z7op27LSHnJhprnWGKYkwSYq5KH6yRH8dxcdqM4iz8dAPpi7Zi9",
  "key27": "34swZSA8kR6hJyT6zRNGkWHbwME5cRdsVeMfehwq1N4TBewfLkRwCHP7Yjpkk3gcBtHwhNZAKkhzSX4NUzgPYThb",
  "key28": "3gjWzieGzJFmj1dZTcJe4CF4KeXgiMoRZzXKNpnE1Pf7Z5EWtNeAxDNREJ2z8NXZef9p17CZrfbxEPnf63EQsnYX",
  "key29": "5jbnWBsW7apaFU3PHQ2p3QnhivrnDWECfNKNwbR1VGNtK3LN9hcRvfNQaoTjcRJZ34QPCrqanmordPZxtxVgEX36",
  "key30": "2v6dPAaphsDqP8o5UucMpPa1CitijAiSPF8ba3gwkmJDrH8x45fVfo8gjGMdTkHzqZaDDGSbcMyj9nsniidRww8z",
  "key31": "4UNm3KYXyRHAZceCyKKeAWRWsmbcLykhsSAnEKrFufTiMNTC93VABGXtTykb7RsQFNbHyBnKU7xMyE2wLdg6wrVc",
  "key32": "tRsrBnaYQc2KT9u7D842fdaSwLkBK8H5yygFzHE5iUcrxKMgfEztkS31DMZEDXWVnYYrqRmdT8hqdQpQVrS3VNr",
  "key33": "xYP7Y1pwrGxkdYYhxoLjB2x7YNP7MkhVAnnS5VwWZsdAyTgG68yZXmaGebLxotA8LVUduGqhyjbR41vAbznrC6y",
  "key34": "26pECdi6hbiBcBc3AeRRVgsiKfFqDcgaanx5u7pPnptB418VwsVP5SY3qmpY59QuzMUZ5epwos34X85Z5YuowwLv",
  "key35": "4mhcwe1WsMrAnLmRyVA3Q4puSD9X2areDVRPUFkP9cXeBs1gUQf8FES1ocN1ShkRGMDrZEgxY6QfisfxwwZkCjsh",
  "key36": "2rNDMSQjZQzXyFBVNtrkXLVkruRQH9a4MazoevvXF1ZjYjsWm8HpMQkZcpTTgChNy2JtB8x3XJuK6j93jvKdKsET",
  "key37": "5uxULhUWqSSSKivjkSKkdE2u9UnhDeqsGnXaFRmFDyJ8AsN23DYfhRxWo4hB7fZjsLgGJ9eDh84UNSqsktqC3csv",
  "key38": "4FjUXNXEMqUWBwxerhWQ4Uo7WVEzye15eoWU9NqYnvvDjzTdNE7bm1ePMWqBzV4t7vknBR1RFYbqN94938r6Js5Q",
  "key39": "64HqTPUgqRHdAn2g6jxaFoFZs3r3SMGu5KR5nrCdBht4R5Kc4HRpN9piNfEjWSbrxHRXHFo4ZFMazawAPfjjtTRb"
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
