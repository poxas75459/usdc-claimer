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
    "cDdcMjG4zfwkF1E1hcHVBWuHZ25gQbYdLrrFPnN4MYTBFLS7D8MMFisVF7Z8ucTSxESje8rDFjGi8y9K2Cp179F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y5YaCNQJaDzGHJqLyp3JhpeCYqac1hLkFczZPyXUNbxTXebcBHCX6afN2k6y9LSmy87f3LFWBArZF7KPSxDd1FC",
  "key1": "22JvoiHneqTdbDySjKB7oDG3ENDRAZ5oPgVUZu9CcNDXL5zDJAZRZwvm5JJFdVekDBgwVCSxWCCJXN5tuEC87thw",
  "key2": "5VV9bb1bV9hrBy44icXeS1RBLR9BQsPqai1Y8UTbtijZwnuTDRaCf2T1rqj2TakTbMfkYPU4w5nwebeuwQ4HRJ4h",
  "key3": "2Kfo99JmhxMccuhPQjzg7XHtD1cGoTwpF4mnnmDxW9Ps7Ei2LgiRKE3FEqzog5td9VrkqFgepjbZRtwBjqUARPrG",
  "key4": "2fbC5u6rzoe3S3PguGgFYREd3Z1rCop7GCeC8h6wVcM9LDdcgBL6hb3iyBrP4EXBJLcZmxHi3Zf37SmyvhbmrzwF",
  "key5": "2NwNiHzEoZ2eVjm1HVvb7kocYDrMp5PxcuZ2D7ffTULGpt4b7zj64unPLuBDDDguGvkqYrZZoNYaY3fTDMQYSJXx",
  "key6": "47kio1BKFFVpeiYuZfXbojMsC4e1oCH85njANB7pn3GMTMEiNgdGsd49ApTUXhtzEHy3yo4tT12rhMokgnnTp128",
  "key7": "bd5HsR8ZtcjoC69YUzH6t5GmvYvWdC3pMYhfbV3TVvG9HGd1HfRZQJSt9uZxcJGW1sWyKWpEu9ZXsqWw8LPF4KG",
  "key8": "4T4amejumuZJ8LjUxmU5PY8sztnze2zEDWxyWQb1yY61wswUnNTwtN8HfzDpwY9Kxn9xQ6vz67ZCaQpbpQUSfTbj",
  "key9": "5otUGoWd6SqC683SHBKTCiUR4e3ZnV5ErFWjo49HEucRabRK6UtW9A9qeg29eMt2c7ekBnZxjwsWbP6Q4dj4iskJ",
  "key10": "7WAxQBwvrHEJoorPh6f8RMqKLGhorDeZVYZBtUEMVS7SwiGRsYKrAuEW5Bi29no2f2RhM674pp4zVQjiZveo2Nz",
  "key11": "4pjQeDkUQv5V1MXrNQjNwi97hfGrk7NEHX5maHPngxmiACqJuWj7iNhM9hNf8BA8yvDzucp63tHh5puSxi4Z6zHY",
  "key12": "2gpnCEkftgq11y5X15t9hM72Ljn8dhFivi92cm7PY7YmXySve3qtKrquFYSiCbWYJAHGgAeBiiMCRU3zMcTEY5Sn",
  "key13": "5PTxUzWYPtzcxbrt72qyRyk3MnnEgbMxZ6Nu63yknjuQZPtX2RtHfLi1YTkcutmPQnexmw85ZRrkqVy8DcUsoJ9Q",
  "key14": "2xzz2AuGNqYn4va5sf9V8gEyCgVaPQRPS3rkstSw8uYWgAmq9Lj9LhKj7f7cLeWzVCoAKXQvkxcZ3k2uDdEUFXRh",
  "key15": "2pib22Wnt4rAqy6WcvcyvcUiqj6LXho1CGdbiEceMtQBiEPVw1PFopM7feCNcbjtYiXjor9YbtnnLiLZxYjx8kci",
  "key16": "yyGsrXRNfzWeBYS7USMiernE3ANi7Jx42DFbdVB3i4wi25urbjUMvZWGxhxJSFGc1JszQXoCEarZ2sKyUuYpj1a",
  "key17": "34QNhJJThnf41ZEFxBdzuLwy4Z3rVY1gaAM6VhKhCEF2Xxu2EA1FvqbsiHuKPRieWhAbjKSEioRJqGf3mrgaE8cF",
  "key18": "241gk9XxnngTwjSVaCx1yaJFkatrsLa3wDvH9UtvcoJ8rFkYeNrFBLQm5n2Vv5LV9vzdhj1C4aWnqLKjmrDgB8sK",
  "key19": "3gv7XptiA7BRnrMKpdrAWo3oMCgwdAnrrNb8VfmA2WKz1p8dEWWYFopbYTnBtaK9CZYSYbDUq6JHZdKrzxe1YnQM",
  "key20": "587q4PH593xz9JRMx3eJQCgiaWysJd8rphtysZbsKBmbgpVXbLGkt3XUMeCJh1adv5gVx9GMeCq4yZDwN7egJ1Qk",
  "key21": "3njJ2saY9R81xSLJbfEEqb3Ho7duutzxHCuLJCvAFZLhjPnF4aTHKvbjmS41R27JCKA4aGFPzHfPhuZsChb7hgi1",
  "key22": "2xkpAdBEixjPF8E2B8dfauo28Sq2yAz3yC7FuuVd9BL3fSqy6X3cg956GAH6fonkgsANTMXoja14keHRRbpjyFfM",
  "key23": "GXEbGNHNCSeZNzMo2XJuxtgGC9RYmJRTmQeMBAmCcG5oLB3DVqXgEKFS4XFigrp5UGyLp4GJ2eXLJaG9F7j2m8C",
  "key24": "VtGB3tkNDx9NBxRNnPeG37oU6gevjVab2zMhgCcQY9TuT1WYsjAiCDCN3rMwrCijTkvczsL6KzTEcojncdjVD9C",
  "key25": "1gC9pmK7gZkJ3mvNaFMGZRoJYUKx4U6YJAwp3jycMKNKez7wT9Tj5JAh3XjsfGJU6s9aKtTNXzFDmaWrek2XZ8p",
  "key26": "4guJuKGXdd1ZzjbqnjNhfEFN8mB5ztmRa7C3QuVsEZRSrSgMBZzcb2hk54BYbDp28dTHY5np5pUT8LaTX3cB57B6",
  "key27": "2UJ5hHytrzhbqRFuRgTo2ENygG9eRrF6MBwqMEAuubKwX37BtAjefDBoGpRjrGQ8NbwCNPgLQhyuPq6GYME7J9KX",
  "key28": "KHzZYYmnittNWLVe2h4UbBCVsMwqig9pDhLFz3UKa6AwNZpEGoKjSiEBpSFQ5TdBjMLEVYon5yjkrSP46UTri6Q",
  "key29": "3KfdfVpewcEnVrKwSJE6uygXcVYmbkWWLe3USRWEBHCrpFFVQbU9MZqDsZrKi5hAg6KAdc1Xiwj5cdb4Tyft3QJS",
  "key30": "2mcXHS6rAC4TjrohgsFM8Xu9DRmyGBPKGHJeEjfxCXmZnZyU96TKPHXT2LnykzCokQM6XVFFuGcaL6v1wsbTNzXR",
  "key31": "vAJ1ttsAAfWLMnjMBEusTmU2U1b9FV6YNh8uf8RTQGJcizzHZyEFRmqeN1bwZeVWFoy36WjTY7G4ioTcAdRqXnb",
  "key32": "3wLGhLo5qLFocJSFSEiDyfm9atJ8rKVGhCgz6FYUFF5esYQkszPTq4Jgm8siJ5fbzhCGHEvhoYjThugp7fdSEpXi",
  "key33": "4eefZ6X8mzJTB5Hv3iZsGJtHNLJVcb2ngUu4tD4SnNhuUxGEyc5MKbfiPTzKnQhiQ1fZB7CGTE7jMXyAwQQBPkTJ",
  "key34": "3rNXQisq5YudEwqRVBxyUMYwNfkX5wCPKhqSr6WNgEuxquKrHuDHKHqih6Go7cvQ3nUdtaWbsc9amsa1f6GrTdgr",
  "key35": "5btg1hAjEb55mMyLqBEQX9trAQYGQv2tyMS23qBVcRouNNtS565Qjr5ne593wQEyp27gUHxmXiXk6C6WmPBNjsT7",
  "key36": "4ctJq75tdfXHWVjBQ4S2BWgiYkbQ36qz5p241ZvE6deXk5mvpBTHvPjMc93KVnLr1U7rVPQzrsis6RbWj1eqyNhi",
  "key37": "5uBMxYKc4dtacWjpLRxJhYkkgDnPaWwZ2v8vU8E3K8PR7RKM415BcpuFnDFwmnfAuScqkSfjfqyBV7AfgB6eRhon",
  "key38": "5xgYrJGSxMaQvec1HvidQeWfNiQ15DkfKCZ1N2WxdJRfTo6eKLNBNcTUPM9UfUG4NJab6HmQVToAog8Z6YsdpAKc",
  "key39": "4EeM13LQYMPsg7ARW9WVxcZtXm9argTemrKGhnY7w7GRroeMTVNP1xkcYNHEkWtVxq731K7zm1aKLu5f7HgcFawJ",
  "key40": "UGYvunh4WVAtYddcSfGSW3dy8776Z5TkdjZUSGhmusdSEhmK9JYvgLGYM6y6iMv86FVDmzLSn4RrMGGwgkRUaqr",
  "key41": "3Hj6he26W9ARGgxVuTq3vtfXQxoiF2jNhoaJ8FAmo3uafCRPiGf1tRgmc7PFqjfAMsUoRfJV4b5qTmkzLhB7eXfS",
  "key42": "45Q1jZWeb3usdQCLhbchqyrimTonLmRBRupKsfyiMFKNBkkhy4Gjc4A7RoD8ZhrPif3Te3oKe4fWK4gUsSnT8GYv",
  "key43": "2oFYSf4u7UPZLQC1yzNxSFXqFf7i951R88FwM4qxR9rWhxouKXax7J6Vo1Ya1djCjfjKG1wkebdbnYKGeqXVE1Ea",
  "key44": "2HR7NH28rHcC7rhUWMRxAtttme6pgaore4gBSPD9iiJ7wfLPAZ2yREQmFV6UitgqidAh2qdzoUmtZpRJz2RSphnz",
  "key45": "4fFpi4NbJQfnknWtsQXz1cwiaAW6PQDs9z8MvbDb7jgBdKKjRrZvsVbgan6FkWE1hu6zY6HYNxdJgJTgv2mwhWL1"
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
