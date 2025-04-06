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
    "2MHYS9QnrKrMCARsh8WSJbbmR6rasxKdD1Qn924eB4vTWGCkdUp4wNbs6r1qVtbo5AeKhyLszwk8M9nQUryhb3Ve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XZHYp9gNopwMmJZibcRv699DCLcRZEuRhbuSmEPqZxbtfsWSdBzrgsyimgT84mi6MrHVEjQPM268hzoZj21Cm3T",
  "key1": "2wP1t1Fmknsc3ei9yc84pykCNqmgs5HcEQ8vKSz6P8nyQdJRoomnppBkRyKkECcmuELfqsMrsyUNq8aiWEibER1B",
  "key2": "mD5PkLLCYb7Tt5h7pBfkK5RaWETsEd9bkDANzNAs2nCtsBuEgrL3NZ3SfeNa4TL7bbNmvhYjZLeH5kcWrkNVQf7",
  "key3": "63ETNgrGZgUjveGRpaWqPXgqDg7EyGcS8m49uauCCi2oatnyjoUfrf6f1Y4TVw2yj9HjYYCR56qWjD9C6aQ3KXGS",
  "key4": "5cCmnsKkjQmNYvBQHWfPYZc2ANpdP4V9FHhFqoGcJDoCsRbZ9vNJ3At3m3aNK8DJyN1B4J3Uk7cFvHYdKLCHPsze",
  "key5": "4Hb9muS9YpQGjskAqY3UuCbRAKMGBDvqNgDNmchuacvCmrP76iNet4iZPMiCCcktZTCD15ykEH7PPsRZuySqftB6",
  "key6": "4G66882CbVhGG5z2H5LqCgXj38pAVs9Q84C4UdobQDt8wLCv4g174UuwFb4bBpVvYE5eXQH7NKcoBB6mVeMU8xXX",
  "key7": "2koaY2P5JRksm1aEKuDmvRx2z9Jcy9tgQkGdGHVWqBZNaemNxHbV5vVYGqx5uVAf9t7HFX3C2UZKjHhAKFuLPPzF",
  "key8": "qHHyhhcgZWei59kAy8bS7zjgKsxkpXqSXNYxQjzjrTQisTbHLhZT9wVVzJe4QnbU3o7QHSigD2rZaZyWZ18syvz",
  "key9": "5MqsKG8XP4kEEsELJS2VSJ27c2QBXvVu1UhCphhJNfwRgj65xjoUU8Ux2mRiC9YdnXuJhwzV3SPe7hEDDNpZTm7J",
  "key10": "4b86puaPwtuVXmcF2UHdvjTZqGkjXLz53yaAwa5Pq7CCedDt7k5bHiWQng8KUtNKAbjWGEnz5fvJgRgkEDriQLmw",
  "key11": "kNJrnqdByMNX1WmeArTt3uVse59iMhpcKfcr1VyHH1tQZFqjy6XBFz3khV1eC5e6xWYM7cgYKddkZfgcmALMCVm",
  "key12": "2AV4eQgDRjo8VnCuSxVa2EQEZ9Yp3yobe15diNrhSgb7Cdh3ojw1P7J7zZQeyErNZzf7nQ4BkmHGoTeDj45oZdL9",
  "key13": "r17ynszwn6E2VxvLbeQACM4vDss8kFzS8NKzKmvPH74pWAZS2jpVL12iFdJs5Yv7bKADjF2ofE7eHpiBevULFGM",
  "key14": "518oHYN3mWwE9PHoQhczHHqeLWsagwkgGfJz5BuWuupMp6nFo4a1RUN8HAmpER88ARz4EYvWSRWyfN4UVRV757wX",
  "key15": "3P4KVaNjbPpU6Kdo7kyGp1yNSU3WokuaY6ehuFveC6eDSk5HEKR7AvPdsenxoC4gRdD6cAAKjHNWY9d1ft4Hf1m7",
  "key16": "4xP4zThEUCi9PZwkGTTVLukbrAmkgeYJnQYFgM8UiMWaA9tokfuhZoky9SbkFHUPJJnjyeVsv2Rap1oo4fkNdEbj",
  "key17": "5KGLGWz3o8ZNPhAqtjoFdCwaqRPVbcFuuF3ze2Vnb3mvLvoet8G9ZkfALoZPCiQQsfbfKpLY78ttLCh6j5Kz2Dpf",
  "key18": "57nVACi3X9Q1GZ5WSGR9rnebMwbs26zN2zYhU2FfJXKAnqF7NfdxLiFktUj6mTFmXUa5qXWscNKZLhtQ6tDUK9RK",
  "key19": "2MxHnvnEw6Bfyc3yix6mYZVAWhvf4XtpTXzsMYTXGH3LWq4fbSymgzCSWrDdpyMJuGwf7WbQc2LPYwjemibUXC3a",
  "key20": "2Nm44xpae8uYSJxrjbjpStR3myTxapopN5Hoe7MfGBVtXKD9KxhkTNZo6927zvtane7zUoP4JCdvXF4c4f6PZGBW",
  "key21": "4DSyBSNDGjWyUSHxKgqUng59uRgF9hhZCu7MhTo7FxyQre3hBgyDoQoA5cES9jehRf9mqMMccVoUYw2vtveFtRuv",
  "key22": "35JxQ72Y8BKbiFjjsjHCFxvzNqLttLCVLpuPUFYRSKaJNLsk81n9NZzfuz9gcnGR4xvjmUMFZhaf1QSBuU1buU3G",
  "key23": "Wzsm2S6H9VAxSmH1JpGKYTPh1MyxQF1qR7rZERYJQ1YwwW5R6pUF8L69jrDDPTL1ChamK1DFN1wmhi82hzN4soU",
  "key24": "3z2JaKQUxubU21JNAgDKaArwqCiM26KACuusD6zAxtrxGmtEkFMJhK7uHiuFmFz3PHTBj11jgqapNaSywMM97zRH",
  "key25": "4G7oi5vJf6RkPBXvdk3U3yqSg6b5gYZhENooijv6NmLsfC2xsdmtzsmR8MFDG2a565nT21LRdcWvVV6a2dTkttFJ",
  "key26": "QeKKsFZBUzCuACqjXskQoPSr1tDjY8CZxskVih6PPY39hzgfCYkaEjLTLSMWwsUxqbfjwSqJbgz7tTFCCx44Gx1",
  "key27": "57rudK7oxJeDmg2MVZy45F8UJndPQ1AmtiLGz2mt23uX3j1pFqagfRQywTRS5Atza2CcghTacLXoe54XwnPhgSCy",
  "key28": "2Ti9ijLYmW5cC3bvNSvahHteAFSLXDmgiM5TErCDasL2ALpn9XDKryGcd8sgwEmKic4NPmjQoESmNZRYwZjHQYAR",
  "key29": "566S77qVHzokGy7HhikN32L8xd4VxHzorPAcNFY9vwTqtkUSVccDQMgFyPVTZdDp1zfmR52XqWyuYotsZi5H8vKF",
  "key30": "itmTdJbH4YdSpeBVy4NFChhid2whamfy4RJkny9oLvEzynaMYhn633QBj4opRbzk8JAk61ACsZiUiGSDjtGvTp7",
  "key31": "5UFfp7ZBGjMn7S9ks3bQTLwcdi8dytu5UhXg6kpswF4xBbF3YAzf8tiSNZ9sawrTYWbYvffp7kYuTMG2gdwAK8eP",
  "key32": "26QjWsnoFwk7cowThWk5qZYCzZhcmVGgQa1uuf3U7HPKbgKqNHEeCK1NwuapdZcDGxRhcJ25TfckHsG8FpQTpbsk",
  "key33": "XatUUMBEsLK53MpKfF3eaopbXAfabHJUPfxiqnWmaqXPMfLgRWj34rhFBFLTWGZLdYC9pQ7ceq8ZDQyEPQfgsYj",
  "key34": "5qV99TCHEYepodaHeh7s2A1QaBsxrTCnoo3mxo5yPKZ5FESHkUubkyxoPzsiQNa4SGdHxPuzysyGpwBckriEnsGg",
  "key35": "3tQPxGLKfyYZ2UjPGxxhdZ8EW6agw9HZWzK3nCtLsR1uYFT6JuP33YYWwxiqGS5QbJ8PKC8nW822KLMDxv5xJK2q",
  "key36": "5UB16GL7R7kZsirszxRpsBtypjiQEMSzacuStKZ5p1zbrvpp2BSvNpMvcup25AZaoTieowgNA3xT9pq4JiMx8Zmg",
  "key37": "fbkp7ks3t9cUaYoZgEUjN2i8pT7EZWo5JsgGZwSBXtiMaSnS8n3Zt58jAZxYEGhQXCR3XmoFSUx8vHFmzk1AS2T",
  "key38": "3gf72SsYE2tYqp9iapdV9smX6q72Snzw8VKQvpvG9LAbCy8JFDtkuPP9m3o9ERJgxki2V75C4vx4Wkoar21i92V",
  "key39": "gXouvrx3oWfbjDpRGgYpw9Etxt5TAZ2DGE78TwjhMCyNeukgiWwEnh3HuiNZcZCW6oDQ2WGMkEDDmVwuwXiHuE5",
  "key40": "3ssyt55yiUJfbUyfT7zUCyuhHnc9y38dNURG1DGLpmLSuVa46Ly3moyT5EycDyswoc3sM6shMV58JXjZUw9BkWyr",
  "key41": "3LhXe8eg51FALAKnqQ9cedpW1G3V81voZe4L9xDe8MRFV2hJs9MhhM7oWdt3wovdkGApqCzR5nCD5GXSJyacHAM6",
  "key42": "5F27AqRAzeBnpMcpjXz5Smr9Pgbq3yC1fD28Z7PwdVNmkeHq92S9tAHuPoK19Q8JUNGcXVi9fAuQPrWd11L4qwcM",
  "key43": "4Lzsw5mSCmkJsc1UZwsQ5uUKmSBgV8d6jT6uSgHgzm85YJdURtzDZxZKUQvUH9B5byAhBykpx4FCv9GS6CRexTq3",
  "key44": "jYLeWxwywThQqYp3586x7Zst1qG2PNkpJhvs5nE3PUfCZmrJhErWoXicJJQPtZNTL5z7aivjJhcCmTEcYntcL8v"
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
