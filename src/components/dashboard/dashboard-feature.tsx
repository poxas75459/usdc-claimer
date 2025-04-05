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
    "5UGYNSonc1bvgAXEAH5toDTZ1YT7Xv28uAN8fvTogjUUujyKGqrygSQvNLepjU8JXB5vSNsq29GoGeYGBc3KKvgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bf3rHFzMhDEfudZGipsehYuMU3ho9d3QxzP5EGirn52DcFKyyH963XSLZXqpthEautU2uqwHRb9VsreuAJk9t4B",
  "key1": "4WthV81tth8rbfrtNQP9cDPT39Tg8UvKv1zz1agEbhetnHW9QgvrWfJaKxCzDdmqNSfjDbFKNTPka4UmR3miPRC8",
  "key2": "t9JbSwb4GZXqKYhZ1kX3Je9eyEjsRpiyapeLASqzaCHqVsXbpUvJ5b9PdMyg5xfmZbbS3N5EtAxEtgQEUkWniyC",
  "key3": "25SywUCCUMHfrXcPaHTz3Bx5rhacLqXQcTDbZ5qswBcQMSSyDoaVQS1UzhWXY3a4Jyb6FLgHh12W6ZPctLooLw2i",
  "key4": "31jP33YCZdXRXxCuADZP1itqPRWbUxQQMVFNs7KbCi52AnuY1WbV9TYTGuk96cfYkswqjgWGBDDXNVef5Nwo8tJ1",
  "key5": "3rqnoK55c4yLPmCe7PNCWyg3r2LUZT4n8jvo1RdrsFoWunU9X9PFTyFemM8FzQ4D9zDWoVc9fjs87jqTeu3CzD5X",
  "key6": "4WkN42a2sDrq3MmdejPaku3jZHx4nnc1xkdVYocymEgHnMmW2p5s7zSJCkHWR4qFhttBRrCbxRdjkpiPMGEH3xVC",
  "key7": "3aGDQqEXdioPngiPbN189fYs55esYHvHKsye8EuRtuHtoLWWo6MgKayJktNFNpy6R2oaVBcWxAXiKwdmup545SyS",
  "key8": "2y5rhqu5pjGMjJsvRVZe6oSMe5dkJoH2kB34micKQVr34mgWJEHTusXy92JbtA221JQ9eu6YsEz3oXAgagBgcn8A",
  "key9": "3Sk4gfNHeTANrFdYtDkdgmxZXUo3UbBEY7qqMByUGLWxRqyGqn4LGU5NTvDp5AkKVZ9Y3jFJBYLycyo3pKuaQAqH",
  "key10": "2HK8NNnX7aSVzQmwS6BV293HQ1citzs322qhWo53kcJvDyFqe5hEdPWuUPoYb8LweZh7GQ4dEbwDirNM8juawXi2",
  "key11": "51HjPpoAh9XgYmiMb2eJW2BrMUHtAJc7nGfQKPpuDN4SRcWEEaCmgkLGSYvFPU7FLmgHXdHpTXpkzh3MHf57AM3z",
  "key12": "67FfCrnu1LV1D4YZ2zW6UM2Xr1WwQkWNsKgeVnHDQ5TmcxKkEiCaPpJMXnLRavTkdQMWb4iNbFkiVLmJYPmFveN2",
  "key13": "32QE6Hmjvrfooxy2fBS6AFPJZSXvdCXJkYXpk6hfyV6QhvigknamQLXBSv1HXiE8vJ6GFho29LRagi9HiBv13Sqw",
  "key14": "5KwS14NPGbzHCj8VhiyfCjUndWTT3kfVn7kR8j2mHSYkqSw7Vn2pHjUTzJz1ZtJWYpS1adFLSz53Y5StVmTTz4hy",
  "key15": "5WuDh7A7YTGv98sdTsViDs65B5TRnQpLYb81Gr3dM84DSHXa463xWGzPgo9F5e4orG6dUCffGcGT1vorGdvPECX7",
  "key16": "4ntPkY9hbQphq6jeZm1vZNUYSNK5TnCSFzTjP9wRF77dPJWkLcohWAiv97HBYWh4d8fY5TgTatiENEZxYQinqYPe",
  "key17": "3sKuYfg6T8qBuQb241zfpV5WxuYQSCEb6Tz7X5w4p8AnQPAjk255wi4VGuhBzrRJgrp4hEhkrURvbLguA1KVTC2G",
  "key18": "5qVHF7gvTZxckGcWHAueW6wG9ADH3QEg8TxwugXWCzojkf62TJuBfwaMiQaG1ws2fW6GhrWRHJWRHEHF3wP9WrQV",
  "key19": "43VE1R7qNbQo4N7uC5vcgASeRCHribqNZgTDmar2fBNTgW95TNVMfgD7SVq9kExbRozdFwm4ZCJ3wkgQ8gi6B5NV",
  "key20": "4ArPXZJCaNL9szWBmMxy2W5wJRubqQLhaKWMfc1f6xNiF7F6bWsrSPfZCmSPhnFmpmws8VnnNus1u4YdqCTWMHK1",
  "key21": "38pJnDtdew5LVzxcv521vGd1xcAyxce89NHN5BN6D8VXQZpBeb4xZieBco3QdbBjyktkLASPAwCDYHhdmJ1Trcan",
  "key22": "31cxF1accCyeE7jAZf6JwRsGcMAWGDNUd8gdimkwXGFLq4mtMyEUwPFNjbe4QF5ZMDg2SKMV1GRAnVNJrFF7E9Ap",
  "key23": "3ikVaG6xeMY8318VUgMvNQVpCDCYd7yywvyaeuRP8zLxzhuMwvXWiXv6LW41Sbx1DuRStNvmXMkCu5Sy7nUHesHB",
  "key24": "E56fu17ifjTykhooq1zJ1STgvbMrZ3yo6uFrbUPAe38gYWzod1zx73r8eRwKZtKyfBfj4u6pbtiADUP6K2gkE2H",
  "key25": "5ppq3HXGCJexsGoJ3zxLKcy5fDjvUf5J71Xcrurdr4WdwYTee1gWWLhy5T8LmmBq7hVJU7m8GxZSFGNWtBDiwYAK",
  "key26": "4HV5vzAisM7QEYuyifMgNiJxREy2jLdNAHdbLpdPLC1dnV4R83LrbVZ4ViMPLPSZEKcnYePHuoT3BMhDnWSRTkUK",
  "key27": "5kgBqTnSr2aMjqEUXQh7EgkgkP8D8VMY1d2uQFK24wT5MxnksgUnjoaJqJqLEdjHTTV8AExgQ9fiC3RzG7ToSLbV",
  "key28": "5gZpQUSE54bewpyXAvpa2rYP5CC75CiNwiFZyGJAtvTc6gF1vhTrxk5u3MGbu3zEnHLfsDjjgZs2Prk8RtjLM524",
  "key29": "5ubDhJxS5cqWbhUcuTcNGiL2mRL4GGxEAyQ6wUnCbKtMVEtVuqWbzPNYohvwMVseKBEx6yfZZue4EWAMdLG9PjCr",
  "key30": "3we9QxneeYUxCFT9iKVhxPWPQrCuPsBiTJB23MFd9LkSr2TnMhBUXdK87vN1CXWSNmCzWEiaFPgFesrZdK568bgx",
  "key31": "UomHVZ11uTc74Bzc415Vxh64y3eFUhCGRMsPujoqi39KifmbjT49NgSTqm2TKchDKLHuZyiJCVbQRX5Dk2LAbqQ",
  "key32": "5eakZQCSc7pu77mtqanyowZvGB5RoPZafuLuCfU8zD5BSD4L4Mp4kPjqxPPJBJe7gq2y3GRaFdUaHwC2h4nYBCfL",
  "key33": "2ApgDCJrRDCp6itTZH7zQL1Nrccxp5nThp9H2ieq2rBrNahWXVSyNL4W87AEdHX686a6EGpi4yfrhSaiq1g51ghj",
  "key34": "CSWknEXasvKFw2maXbneFvfPQqDdF8ZFj6yEj79mQESqHPikrVVxr3rW4DAezLKQrL6FEA3NqirwGcYRDGhAnzN"
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
