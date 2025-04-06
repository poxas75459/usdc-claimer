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
    "28Sb8WkRprBQmSUztELPbzENiMTYwgmgd9i2QFFHJMiRPhLRN9BnAvPBTwwYKtxF1L5H4EAebQBSUD1HgVRHFbW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VS9kLG8392dT7XRZzUmuMNVY1Vxjec69f2564wHQdqFBMmNdMBCt8hmWJg7iYJMhC6nZ8MxAaT52XCrPQtryvkp",
  "key1": "5ARs97tvpcKyn1TvMzX2LGjZttvrp2jLjLQZojTaJ2H6qFEDkDTPFVzR5W482HHDJzxjVnLg46mTCAiFJHjiMTv3",
  "key2": "mVjMp7ffiAmKne6czW5FsavsZ8ZTMoWiq6b2rVDBVy2QSS8PLwprAPcKiirBPTWhJnhrfFaS5tiWiovHqhWW6WD",
  "key3": "4h3KmGBQkamNam37WFZ5pPH6hSHVSMfJvjMeipYDamiySc122KGZ8p3PZ7oopsQ2dCjmaEw2o9NJAvxnQouf72Pw",
  "key4": "3AnS7sUrUZVxHxR1Ve7eALGwTkABnZFA42SeSPG9Ku57G77iDX5J5cV6dbwRHV59YSAQd4hmbqZaFYZoPtAFQfWU",
  "key5": "4mrAuA12Dpygj3AY6zFBJaYQrWuiKanxGuJT1VWZFsEmcCTVUxUSmz6MdvGb3B3VDuTjsJyrkQ5bEA5bTR44eRng",
  "key6": "3f7xiNSAKLfjMp7PiwrYzdondicTdAJcovEKCqnHZoxzs9NjekbfHf6A3szvYb3ebS2dd2Ze2Xueo9MMbpUqdxC",
  "key7": "VQofWtubgCrLSUcHuHmKWFQtyB6CzbCFyB2Z8mCpoSPKVmLHnchcFBZgiGReNvn9wgopRTcLN9Wqsk5vtEBt8LE",
  "key8": "65LKGPY2tjZqTiqkMBhHThsXERNgyMxTXk1v7nWBHhiGFTb3MgJpXYExtPpxtSZFMFFXrRTfygSgV2SAP3YmthPb",
  "key9": "3np6jtciWLB7MJUZrcfavB9AMaEFBgy3QwVM2r5dUtuaVh3gPD1GxQq1AqA2T3Xo4Yj4KvYUnn9LD6BpaJjgajgu",
  "key10": "5Mgn6buy1XNWsLCW5YGejSjTNA3rcz4bAchyRiocDynLfEGJvTDDgPiwwgYGMb6wRZzPryekYYsbE5Sni6QDQEnt",
  "key11": "4CB5rMmjKxzVhBfJzbyG25Z2w8Qhuev9DPMS5WZLdWdz4VxCuuquPnVSSLH5m8LGvNfRqbTh1oyezKcPktCQGR4k",
  "key12": "5g4F5oU2Kk8kFZAU2z5AEzqe6KZzM3FBdKLUWdkrvzt4bdArRL4Mbzug7LB7uBaQMDm9qCyAYE1m2cgXt72cMetX",
  "key13": "23A3UBfSyw8dWAh8jCWhvQMN2Vx8K9vPC3vYPYKtMSDibFA894HSb9ZU5v4Lksme5UmhQVTUsBqbkH78RiShD9EH",
  "key14": "4uUFsJRAGgMomrcFAmuDF39QT9NnV8Xj58aLkYg7fCxWXPJnxMrWnkgnhWjvZiePnfnxC1mDurfyBRvT8TYG6gTV",
  "key15": "3NCgBzjGcqTvnwPGL52NPiUCJoZVS4LD5hf7pPufDpfRybXmHTDQcAqXg26YyFU4688q8Z3RG9cfM6EyyX3JanSE",
  "key16": "NLhBB1uGx1UzynoShdsQE29e5PDaDwUW4JvuftwjgwqooxTmT9FYo5Y6tGArAJQudXz7PES3eoDpWq5xW1GR6aP",
  "key17": "M17K47P44d58QbgUksAkHuMFepNtwgwUYxyYEM4Fun8k89R8c1CFDa26WAWBgukvKakSJdtR9GeNMj6tWQgeDCu",
  "key18": "3HrEW27jht15jwyqLzXuUpEf1GNGWbY5xUNiGVTMMMB9uYynZ6rgzDmZN9ubdfmKp1SimDaZmcR7zcJKigyLRjDe",
  "key19": "63fiUsVraTHWKroRsKreqQ67PBPzHAg2qRpzff6mykU8ia7QJH6NZXNKFfh3KCgrXjHRdyNhXa3CQn57NmPuhMp7",
  "key20": "46PYvgaKV52mSVu2gTjehGP6kZMfQtXbYeLoM36TB7Q9emFqcN4xPi4zKZDLNCBC2W3s5V8pgj1PnqtwNRXAy5Xc",
  "key21": "2yR5rPyehRHrA56d5vm2fwR3AxigTLWcRs7FEVFCzfQfGtYuqzKJFBshRC9cLJ3EAXYnp1LB1eKDKtQw2mZX151q",
  "key22": "51kYAsuHhCjUtFiqy4Ut6RE8LND6fZeVwyBwNn2mS6eHaxjo18SYNahUyjMivUcvhQEi2MAvMHYNf9HtKexz9v2r",
  "key23": "3rjYD2mVwRq1a7isYEqJph32H71Jxor8V6GPqR15ALiDk7PFyJP9We9RuXrAySos1BrsjGMHkauyYtsDQBWwNL64",
  "key24": "5qpwHoe6uQG7wPsMqXAwKXNGi4AExpAb6yDDW1CkD5CTH1bYAM1ixV6DKKGxdYLFGaXjzJyScz3mq1bXCeR7hWKn",
  "key25": "5quX7S7kJoCC6GVNeg4j7y9FBrCBSZFSzybbrW6AEJxdT1JRMc8iE7GHfE7zj8WKg2QkLeDLSiEJbijPFiwLEQnW",
  "key26": "2LLJ5Pd4MxstEWUbwBS4scZNWF8tr9ve5vCWM6QE94kewRsnxmAzY3Yqe2NQxHfgqzJuHq5YRFEJiVaenXJEG1Pc",
  "key27": "gNjNUFHC77asFvDZU2M8vQ29buJJRDDJbLEmKfsTbssiv49s6ab6aR4Mj3ERUcZRLBu7CpQTYRcVbv5nNJbneJJ",
  "key28": "fUcCeWZj7czrvNbjF6zTYses4HHW29Dwbnm6KxNSTejY8d5W8jDS8wET4xCd1STcryMhx8BayCQ24g8UZNmPT9g",
  "key29": "2JF6LFN94uqJaMb1qB3pyh8bvMvcCVqjBgZrBXwAw73nC9tz3wrkb4rn3xZ6aDwEfp9STUcG5kpCUTNQMqX1VqK7",
  "key30": "35GdFELxV7asufn8kZfLGg49Set9q8DU7hWBfKyBVrRcxtDWeeZRRHCArTgaAQWaEEAsEyLYV7puxoCHPbXM9pgx",
  "key31": "JZT3HPbKpPmkAWns44HrdN2ogwZbSvhJT8d6sY3S84FMFZGgRj56MvFcH5A12iXp7cPykBRu4nyGsekrzxM6EfE",
  "key32": "2qokjVxZxF29N25LzZXjQrZGz7MBFyg1TYrKnxumLbUPwQCXFcqUmShg3Ytb8EPZSsm8LP6EXQ36guiYGUNj1d8V",
  "key33": "4jV6WLZe7s5GZbSyCLD6XJwD5TTKhrQXW9zPdpCSpMAUjAongNxsm1e8CqCkV6shrdcH2rDCDdE9bq4VK8db9xNi",
  "key34": "2AnfFdGSPrTwaNQSFd8rbVNCEMPFWAm47qiuscXwG5P6PXPAwJXYeeNZnEu8mzYshFMpQLYuQxgydDTgja7DSg7",
  "key35": "AYGpeintCTD3NfieGPRsTjRHScgBL8vHzLJBHeACFCqhsY5MsmG66jC76G6UNS5XjfFVE5hht67YPrEVwEKkz7x",
  "key36": "RCjZbjUrwX8wMudYBV7cjyrNrJSdn56LrTna1V8WWKMQKSqjmW8LSyDMkNWUFv8DpM7vDahqBVtZeRkDQ7xVb9d",
  "key37": "5gAE5siLiTjHM5GjZDdAjSA1dcQfGfqscXjPn6KV4Ab6uWbdEEhDULMvWhcLbpoUQsbUj99s6zNVJVARYH6zQkyf",
  "key38": "4SN1u7H23rAiuofSR6Ad3HkYz7KqPoNXAoTgTEZbguH5aZ6QkCzMyaNaJwh7X9HLxMdN6bsrxcKtHcbpFE1DHxQB",
  "key39": "29GXb2New6nbD1pYk6fq9yFAmpqRX9vCexd4sYqXRSoeWJL7s3qktEksvcWtwwyrKQL7SrHwApzV42fU3CGdJf5i",
  "key40": "WxusM7qTwYhRYe3pTf1MLQevwwMFmJdtVSx4vQP37i2PmrGxadFLvjgofDrrbvYErw3vu4cdieTKtNsVNBR3A5F",
  "key41": "2eAekYRvxRGCA17L6XHSFFJaee6XvMGeT4tmnn2H7Xe4aVVi6eHrPXYxArvrWcHDREwtmrm5dU1Hch28Xni26ut2"
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
