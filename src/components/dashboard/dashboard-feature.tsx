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
    "64DJxJHUtGfcnVKs2EJukpz91vvSQPQaVhfc1gxS8QuK2Didu4C8ZhRdVpWrAjXpqCiuVQxSjEBhGheSQYiGgLqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F8ebxYZXdHXhqCcfB9DhabDvKdXYVeZGepT2eAd794SSKB64nxHYBWVubDR2XwUuyByQV393htKFJJaeQujErG4",
  "key1": "4RHkVKjcXSdjbqPLog4TqZfwbJ9U4K7Zfgdsn5JUouSfMZjxEJ4nk6idUDFqwFGxLeTEkpD57aAawR6gTdP2wAwb",
  "key2": "2qGu71AT4hAgKrcadeZnGdsLp9oPULdr8LcxHCEbapWHSBaJYoYU9Pe5Q6nh9BR9pw6C8JY3vvB5AeUeRwpseEcU",
  "key3": "PLzbbsHJQ9jZAszMrU6PXJgrG1y9GNkPQ5EJiKMyGSt6HcJehL7n9FceBw3XXcDwMD8oEn23hFv9wFjr1XDB4VQ",
  "key4": "VDPeEmdubM1bfVzHVWutH4HZqHsFr8TYoLBMZvFvq8hG5Vf8RDxL2Z9Wi28Jz4rEcfCd3WSYSyNUEuVCb22sSYc",
  "key5": "4BuFJ1GHy48dJ9sBCgkbFGfdMtzgnW6YuSmFFU8gSYKed5sp4RnkJr17ssqG36m6VFz1rAvLuqhufi4HsnbApCFA",
  "key6": "3YNmEnAEx7RRkXpA4fywPLNTnbQ2fmCaaGFc7eXiqV5ysBVbUZHN4NxtpCHT5ZMEn6f9QZu8NAUiv9BhhyDsd1Yo",
  "key7": "3YCC9zh3AaMmuR5XmGXuvGa7izAUpfRivZMSF7P52DVXyJWodUAoVCEkTpQK8U2BXDiBTgt1vdDqbsB8TXQ5xHSU",
  "key8": "5ttFYMUNWH86fuWMwu4qEMKx79jE9c8grum3hcYSkCkfo5BXSkuLpCczdLc3bKcHo8VLCNtFoM4FTm6BJmyg2ZWs",
  "key9": "4w8eDVzVSiPH7ATseQtZaL5oi3AsAoStKg4CguQbfJFSkySiDEyw1GsQAsRJQZ1wWMSwN36e42cRn3UGrWx3ttQv",
  "key10": "5uQ69F5Yj1tY167b1vaNR6Z8qyMcJNASxWJstDZdfJ6BNoBdtuAvm75M4WG77HLSJLjYAB9dLyzLjZjfCT1zTqZh",
  "key11": "5juwhThPaoiCqAkY1cXzmw4Xvk4yQNWN8u6wyu2gD3uT31VHpj4tsuLGBmBmAtv9FHPGtNCJH7SwseoaprLK4EVg",
  "key12": "GL3JNvDgjtBTCpXan5qkaazgqH5osXNW3NkRMBh3hB9WuP9GFepB4y2YJwxsxBeQLmB2Uyeyw6iLBQD9GSfn3Sk",
  "key13": "2Lis6i9oRg9aAY4s9Q2LH37fehxuj4Q1SQ4tGfAEfCFzLBS77jvq2vVBY5NQk6Ajo3jjADm5py5bNu3BobgThQcX",
  "key14": "Zp3RsmhhCLpFV6V8DZuMCJo58zwKp6XuLCYCRU7Pahdo31nP7HiC6pG4683dENMVDdYwP5gDFZ9H1AozuDEgcRq",
  "key15": "Vc5iuTeSdTReEvbGtG7EfUseu9QUxjfHtES8GBATED6cEsPR7D5jP6oKyWdwBgiAVAiUXNTRyD25YbN8dKzfjoH",
  "key16": "2pFfGme3Y2VEWcfvyb9cG192rpTopW7V5XyEQB9YksRMRE2z7RPhPGcaQfaJ64aMkVZhMKcqbJTYJZBcfWsi7hbq",
  "key17": "2hPqw5FYNDoh3xS3mzLrte3tfcG9wBJTweJkg5YztBHMrLGXxf3MFiojxhtLNj2ytZSbtMYC7V6CW6bMaVA3mj96",
  "key18": "49HNiPhnWwGdtDQ7F8KWZC2eqFpMB8pvC1SnaC75K2pV5GVLfnCUiaLcLzroLybohc7hBM6yC8YrQo9YJP7QH9HU",
  "key19": "4MUcXrHSg2ib7o6bWgiJsTrCruT6qYsALFVcQH5BpHuzow6toUZxgLaGJSh4yvQUm5VyVXeqPu34aU5a4MY2xZTH",
  "key20": "3hM61sFp663o6etknQc2SSbzoR3xwagqfxKUj8hDXusWBaTByEQWLSDtg7ED9Bn62o8Hj43Baz2axXkoSUA1Ba8j",
  "key21": "2mnYXHiDe4SjGmvBvspUzM6nsva1AmTR65abFepWyKuMX4hB5Z2fSHqZodFdvKYKwtizzZLbWyvBr1V6J9XsNksv",
  "key22": "2NMzhhz3yigTKpk3i6MC7sZh7sjXGN1QQBQ5UUu3WUxh1GHma3UBbncidbhk2N7uyhPG2o4cFx1dqfknXaZgCKxX",
  "key23": "4J7KUWFH6yrCSfKd3aapdju8drmiYLY4XxhGkoUb3CzXpa9TMnzLBgcZJgHcPi1J4cmVAy5qf1RpZuSRoxhvKzwj",
  "key24": "5oghUPTkLjrkkXeXwJxAT8KFga6ATP352dtmZDzSBMnjtr6xjApo8YBJzhEHwE6Ku6YBjdtp3QNBLLoKLTGKjjp",
  "key25": "5P3fB1SeQk38aoF1bS1YSbyazcHB3xsFWnoJLMADnS9sKaiUt6JzkDHBbTvp35KC6vEqQYr2B56AfA24PLGEhKCE",
  "key26": "2ukudHFihd1W2mT2ASctzENuR2aTzYJDCoAJcWfWzeELQaWM7Gtqf4GuPzb8abGgHA7a5v3CSy8u2ZNk998Xruvp",
  "key27": "4URod7TibtFzawe5tYg97N9KTJYFRvH1sraysjF41XGaufeQFZvy3cucZn6CLfxFRLYVhabNA8AU79xnT78t61uD",
  "key28": "52KMV9HvCAArBjaWLre7Sz1YPHjPaJFxeZKogME8KVCFRetKBJnskSVnXqJvw4Z6vb2TZzjf3v6wx7JMed7sDE3D",
  "key29": "2YWJA8Q2PHffLh1T1VuYkBtcVv67AgshiASQ4ZD5xF4t6B5MZo856ematwNd9QCxGMeeTVZYr9tyjE4AgwfzUrpd",
  "key30": "54SFuoj6RzEXNPZr7JyCPAKQ8P8scNsRacmBHTopwZxtFjYtibFw5tbPHJbLi3gicqtRodsXkfZP7Vuxm1ueEjZF",
  "key31": "2zTkuq6piLxsbKi7kBwVAKqWpkh18eqynifYtkwet7PbFZHs5KXvwVHjvJZy2hZHYgj3o4Z4uTwytnrEB4ZTetPs",
  "key32": "3tpmTrJkz4pfhMLadjZH5rBUMq6P3RMBwZdnoxPv9KsZUKFmfYN1huq7twcssaaHNQtziWU481JFCMtnK3EQZCDE",
  "key33": "3jZjxRdyA7TTYWZqcSYa51uU21hY1XZSEyfaJtMQ7YW3Tx2xdooFQNY1VxCsoth2LP6cnZxoGgUPU99qMf2ftnRJ",
  "key34": "pbiX65cvNbLnwksZNH8vFUS8GgGLMteao25S1hvCPLJ7rSMpJbQ6f3q167pXnF6yLvtTWdYSpkxj6v1qHJfRhXs"
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
