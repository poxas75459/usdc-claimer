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
    "5FyRbu9f5575QFyKV3bcjBwi7pcfrrtDfhUbMGgSn9UWX9j8asM87uJbrjoBkcx1AH6Ptn5zK55a7veopxDFAcF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45UKcMzqWaMqvJthJYCF8pSCu6KNAhvoKc2fHNhbqWhyMyKMYnkRwSdZ3baT2SZmaudFPkasrm2aDDjsWrJrBGnr",
  "key1": "QVNuQRJY8yLkVTVER5khQnPjn7SwsF7YyZn6fKdcrsqVSdNuSqJo7wECUb44EopAcs6uceq5jXonL55AKgLg6Kk",
  "key2": "4g6BE17kbhk8vjUtdmeckJEedpAFkNVznb781vJHvBDZ27F62N5tkffmXqTid5ppZnRFcvThrsScvHeusp8Tp5JV",
  "key3": "3zxyF5Go6LRBnpskk6g28geMtepGTvQmeiiBMrANwjxFDxbtiariuM5EBXN7LriMMUKMJpjn2fGbJB29PG3V9VWH",
  "key4": "4Karn3iFxpnPd5kFHCboMqJ5YFBoRbWRnGj7Y7jXh9NAdQtKpqcAdK73N9C35fhfhuX7zaSe6qVS861rfXyg7VmZ",
  "key5": "5PQbmaadcGmMgPPUsGw9dj27dJwBijCkyLc6fqDyzmnitAWShCzgxnPmR2XB5t54EG7DtYabcWYDFUJhYYZiy2BB",
  "key6": "46MLicReXDLkACpLC8duJFmLUvfKsDDtmxC5oRrdtwisiD98q4cE9asBEPujoMsLtdmyBJf1VXALHR5Wmn9Dx6DS",
  "key7": "faKGtYnDXEJtwp6fcWUWtmcC2ovjSgU9Vy42usGEQJND7mdA19yptvYUQRPVPTdms4yNwvY8BeCdGyCmCTeuQpV",
  "key8": "3H9UNpB681cbCN284rHQPqWBvRf7RjAQpVKQBBFpBTFAFbdWevDrk68pxrKggVUJ2kMJfkfiLrdQHTyJQYHXywVz",
  "key9": "2TivAp17e98VnoXhJXjTS2uZRmRrSenJZ1HaEJ9YtTp1v2nzTRP8ezCpN5264KbkR48vYsG8YBUyDQ1NwqXui1W1",
  "key10": "ieRVJhSGQkjkJrdahGxNUe7zvVzn7CsCH3kTy1b9uh7MKkMno4kCe4bC16Yg2wdo1t2gxCEoqQPrRrEzLvMMuKj",
  "key11": "4zBG2HQjhted8aCsLyWNv4gQPf2zHcwPacE8ajRi9HNSVqDPBiJ9ZJnheu2KzUN7anTw9dwdVZaFTTSBy1dpfpNb",
  "key12": "2nevz4pHK6tFne9bLepFdqBCuc6M6oYFuqHKran3Hyh23nfKNvcJvgVMrwacNB2dE8XmLtQrK3FPxpTgCdSpUxZ8",
  "key13": "4GudPG3GKCUW9csu7Fa5tYk898P7kvKo4mmxZgrJC3o5R2AM1DmoY7qxA3JVUDEQHcxjP9tR18SmfzJXhiL7G7S7",
  "key14": "wRaiqxmbPiAJS9xX6utEDNFM7km7GZGTokN4g3VqaVzrgLPcbLKwEenmCVyRE5Dh6cgcnPYWuTTLSWx2QDQTk8G",
  "key15": "3jGsK7z4y9uJctqxwaqD9pUCZv6BaEDPqTSEMYRMNkzfmYf7sGrSEf247u1ZyxZtF7t5DzWa2q66JvZuYwEGs3Pv",
  "key16": "5WCzBG1gvxWDL3k3uzXydzv6GCTnLM77gib4em9WvF2mtgKzrvP3Cxon9HFgxeCXAk9eWpuLRt4NgouQpd5NaaP1",
  "key17": "4RvnSjUhsfhCu3VzqA5UY7JSj5o9JRHqZBcFoXRJoXp4d7m7BycdDUHAkZZSQzpB14GaTzWYXbfqU3HKgwcihy7e",
  "key18": "3X3bthqaP3sdQP9FY3ZDGwHtwcDnGyEZ4WCiQBrBfte3TW8D3jM8k7anjYhowq6YU8NWHvWC3HnkePQgjcSedWMa",
  "key19": "6761k8oFYLUvv7ZA37amz1K7n28Stv4pjxT863X3She9C2ZyG2JsLkvY8Z5WQB1xxUcobKkFAotMUZDt2UMZq7og",
  "key20": "5SUgoSZ6P52pywz3VSCocQY3cpm7B9NuYUvhntLtJbRdsckCrivEwRJUpHFgwjS1PKyirgL26aaoxdJQENiz5HGt",
  "key21": "2L7ALvt2KsfkcyHtx9z98KxUBRMBKvX26ggWAm7GHfM3ZTgUF8Ts8MDoZo1TVucz5GN65M7wQnerBj3u6muudWDT",
  "key22": "5HJbC8RKDHucWQi91jAWtqEFnPEhkf4iEhPefQjFZiDMWLqTnN4BqDBqouTmF4hYHp1QxYGP8hAKv4yxAkXfc5Kg",
  "key23": "2sZcuzWn9PAShBUfZJaUPMeyoHtRHDYgn5Xk6aqfvgRyA6h6Y4JsQg2FqjrfVNDGXyEez3H7eQmWNUjSAjyucD11",
  "key24": "5pDu43FK6kNjSnzYP8VwUTgomGWnf9gd4cNVxgfQD16y3npmFK3hfGpXeaLaa5826nbzNfCsJNqe2W6F9YF2K6X7",
  "key25": "5chHUr5ngdnxvBSH9dhLaDkY9krs6pm7GkqneoQztsCro9N5xGd9CUj3RESx3h21UrKGeZUfRij2MLKbqfFTKYd4",
  "key26": "25DJ4DkAr59W4RUMdkTsCSpFdirjPHzERNZqkYAi2zJthNRYjxdferAt6Kw4Kn2JGRLen7poJsD8ZUht1TupU1Ds",
  "key27": "4jL3Q2SxoZSDYR2cB65FduZmXtnc4fk4sydehFTa9KoXPAynh5VinYfRumuPn7Nt58RbmLvwCGXvG9BFJfzZ6Gp1",
  "key28": "4amSvRftMxpNETdEvrLYHcFiasiUT1uSG6E8xBSpuCWvwoRneA5o5UZg7BFoWnHimM1pNL5b8ZChgzc1FH5Ab2Wp",
  "key29": "47PbVartzCq1BfoTcUhzikfUj5LctZ4Turap6eud1DWEKjLtidXhxFFKrM1jyLhKRRXi2fBLyT7Srjk8MsD7SHSU",
  "key30": "2xukgbfyTdELLx9EMSqu2PYB4BpxwvFS3GpErhf9zzYQNa41AsL6ZBCxxYJejCgXarNEbswd39NTGxVyMSXnCGeN",
  "key31": "3QuxFsVYTbHK4wyR6Vdf37UYsQEzKJaoaAfV8xp1taesTfqYDhaHAk7j66nz8M6quQFR5F954219c4z4tNbTGzMp",
  "key32": "cy6HPAfp8zsXopjCbocfN8VSfPkCKsaU9SeDPNRwAYCGmrBrAVnhMbyMbKJzSjbenmJvNHCmdj99aC6CiBEg9Nq",
  "key33": "628icHSYeTGcviK5f3umjZQbMb5KisHTjG7RVqBFWj4NcMo2HjY6MafyCnFjgp8MeX2EVYUcnBNSaJk9YzidES7j"
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
