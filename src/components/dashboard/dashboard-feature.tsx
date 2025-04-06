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
    "5RUwqsCUtHKXNLB9R9tYjGfHGDiENUxpGvKry4B7m33orcDCfLbA8n3gosLZqCJuMwA7J9eQCrfAQttWWaApABNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8yQLPJ1baududacvtYbcazciXkASnj3WcMQijM3brE3bk9U94tabCM4YCkKEp3QmSfGMQQsr1bHpA23PodKCG7b",
  "key1": "1vfroK9a4U3p2eh2aRCCFz4fSF4duVogaiLiL3XVZZ9L8gwre1hCxbZj9dtLGAXFkspC8V2STAp5B3emX69c8NB",
  "key2": "Xc3v5Wa4zBRwuhRD1nSNKdfc54w5p8SGgYshna45DZL6cuBPJdhKNcDqhe9uMq8ELY8eSeJMVn6SE7pTwdDhpMh",
  "key3": "5kc3QJwS3mhULuWuQF4y9b6oKcuBi9poXBk7ATxGoDDkhdgvWGGBiE56kG2okXrbHFJG2x7M8Z2HhVYqTdRV3qff",
  "key4": "3PwcDsMNpcX7eR7rRwLv6MQuranywsb6nfsFR8BmEH1ie1NnmRrFWaKBy9voY5wgzpnwabmBKJ7fEjH5Zu89QYU8",
  "key5": "3bHT5EevQYdxNRvJGKNaqi35c93WQhQTfnnvG8B3Jpk7hMmnYv1tVL3QRTmW84Dhu2sfBEu5KFSKL6MGi7YX56Kz",
  "key6": "4EPjTuEZSSKj2uxxDGrbBcZwxM5G4uVcdtYiXfhTTVPhpi3Exm8qmoRt6onVj4FQkmxJo8xNx3QfZAh6tmpNsqSy",
  "key7": "3HEapyaJhJMdkaEPKE91t69S68hT1fcRReafhBGb4QaY9ecenTukuKT2b9Z25f6rR47WNKDGHQ7dxe3Jyd747e6r",
  "key8": "VofSJdBjWPdmph8omnK3GYJwk7aNWeAaKSDcybCGb7ASo2pbKG95T6TAeStXHL5qfDzC8DvcdPRL4L5GUPkMnmP",
  "key9": "2J3QVhJUQwTSpCds27UwrRFsTubStXPQ5hLXM7U33LfeXDGKYnJY2pwnsUCHVY9QGD42pY6touigRegx9JPzrqpU",
  "key10": "5vR8E9KyHrDLKrpP7aaLSmM4bmffgcXiEcd3N125UuSZUF2qmYiBurEas2Sg9Zen6YcCMnsPyBh9mvZf2L599JJe",
  "key11": "379YRPaJQyAeEqdK8ik7fNfScGkJnCjXFVDQ9VxjACMLRXmRv47jTD1Rpq1c5uZpXof8XjTo8UF9ePpDsTcsdtXz",
  "key12": "4AoB5R51pv7ZDfbh88YpKyPnZLVLS9GE48vcs5twfVPsGuQK7QFXmh7KEhxarJTctZYLpZqCotjoMUp7HNojxV2W",
  "key13": "h59pZ34Y3hx75hMz7DNN4idhQZYqMdTQU3BfqBYVyShHWfNtq7Bq7tJbYbjRrSMJqddLo7zBjv4MPp7FLediRGo",
  "key14": "2uEF2x4Fd3AUqYWRRAwvb89AfW5G3P4Xo9EGfqgPccWwYvEEDUcy9gZaegiyhGBanpB8yrp7HTiDcWdF78anEZMu",
  "key15": "5TBGibNMti1yfNsQThNFi67Q58seykzSqdBRXEBXuUQH8hbqxipG9A6DFU9vprW8w2wpdQgQwRQaBJdAtsNNy5oU",
  "key16": "AFWc5GQHDwD3ncKnirQYnGcfjgwovWwHNhmFBZZAYBSzGpousw4UJ213cFvR49BrSw97hJQX8fHjM2N8Dq1eoEk",
  "key17": "4m6frUAPqvYzmUcE6GwCFB2bww36zkDr9bHMFCiXE4bDA96Fu6fX6jpU94YRMKp4BLTpQYuQCz6Gc2YkjbfHxBAi",
  "key18": "5N7EizJ8HSok1XjmogBsPqchWrdvqax1WT6C7vjAzWPBecqfREg64n7H5UU8cudNTZwhDfSVQXXWVvGgJDHWGTUM",
  "key19": "3fNTM4eu2cpGBUMRSL5DsPvUHKfpBhnXuyasfZuFm1HhdFkzdP9gG9c4g2NGSsL8LFjhHE4eFM8Bvbt3gRKjTYRo",
  "key20": "PREJCu83TJBuLKpeKHqKwJW59fX5pfMUHwVjMvp3PfrkhGh2Ug8B1MpxuFxbQqgQfisS7aQmu2pGWpCByAoBURo",
  "key21": "588Y4tDPtSYFayR9QSZ22pkebF2GeuRPX21vj5W2A3rxZTH3cJpuPJyANCkEWdE1hks4sxECaaphXHnzbbwfVFAe",
  "key22": "3T4w2VyPHJ9eUVm6B2S6Ui339FGrnMsFQ222CNnNS4d73NfZuJpRFNeZsFzjay381HTxXep1zmEUPtXEZcBN3Pr6",
  "key23": "4UVfpkTBcoB1WBmXcstyvnysM21e9ZFgt34EqrQ19bRpfMjyEAnZGWtUu5CuohWSxRvK5K8ucyyhyx6qTPW2GFAy",
  "key24": "2ypEszT4hgufqzHh1jMXEU4wKytytatiRknFz2ZcsjgL3aK8bWzRzPfGR7tcZPny1JqqJ3UjoeX46nz29s6AoezC",
  "key25": "7yiCzhcW6L986LZnEooBrYYKPzhNw77BCZpgT8FUpdvMTuivs4GN22644az7JXbPCUXYVC4ECNFpLkWtaNQrBak",
  "key26": "3j53Wh8rUmvZQ1ShJgb7182L7daCmmwr6daMfKBU5DZNjoieRfsam4Cus7jq4S8fUADJYrCvFdY9BqPT5b5VSbLX",
  "key27": "243eat7SCYHdG4WbByifTLhhWcbLrCx2jFaBySeC3EQMoYncVcR8SNUiSgpxWDRsVD81ZDDYN11FUCxA2aN8byuG",
  "key28": "KQcFrNoCmiWka6uyozpiUs3d4Y93xG63mfWBXGqpiepAPLQtPxZMFuJsdws3JDfEDqyiFW6cM8qt9drUobb5cE8",
  "key29": "4G7b7bxNvn1FZQd6me2kq2LthTDKTGw38cG13qEbQsoXCVed2QnLHVmGHupqX85h6NxURGmJvRLZNbHmxcVKg2BK",
  "key30": "4YwSaLQ4YQJ3sYpN21zAruVXJvWfbqhX6ZZtz8DLtotiwRFoSyiKCkyUQkXg4rRCWnJsjaL6JSVqCp8RyiRDzGuP",
  "key31": "3ZdPQaPGFS6f9xmJ1trSMc9jvmnKHcPwxghAytpvFAFda79ZFfiAtavBRXPbVnsD7cSbFTMKgMYKuGUpoeh5D6Wf",
  "key32": "2gEa9ctSp9MXNukBWSJyMpLGXgUmgEHWs1UPSKKBda6fkTpKfHmJPYPWACiGkYJmQQHBYDyJHRP7dLKVhnkXGT1G",
  "key33": "5jMW2e4PfrnAcC8Hd4hdScD8zoDgTY7aTEBsEsgpm3wKpKQwjAHQkC48JzgH9UsmZHGkQ7LWUgYDWUVrX6UtjbnD",
  "key34": "3tRSpzytKQ7myVmHhH9qZdhv9dxWsN67UFEeKFkvGh8kMVVwP8iX2RaiWsWrqR7EsAiEvf1yfht4NX3G2m2S87VC",
  "key35": "5FEEZPQ6mGF9eHp3HZEWPzXqZM23Nku2xhjaSPTev6UP7TLuE9DpsGCj8q8beW8ftXWdS4WELkxpGWy5iXpzHcEf",
  "key36": "67mK6zE8AkXqmUYkzd3fuTr6AiT2bmsfwQ2jweHwmAnozVFcbtU63yYW1H4p7c7jZGc5VeJn2YcdJZ4jaqmpKwrt",
  "key37": "DYoJTPCFiYx8eJmuqW8wjVbJcbeZA5E9q1tBKmukVEKWq9n51ynW9yj9Fu4tPJsY9QYc5zwc2cWS56fh88gZwu4",
  "key38": "2boxWkF2mS1BPoGykaTXhJCYsVU8tt4A9BjpWE5jXnbNMatFMfYFc7YERLGVWEW2rnzsMgBGm3k1cf7YdcRK6PYV"
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
