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
    "2mDWSL1RbCV77Ddh1K5WMtEUXpFK6dwyJNkQHUbSeWWVVf5FpykcLANe9CB5qF74KS9znK3GTkswhBF491zUWnYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AX3n2jD2ATmUEdNpCTCacnETqN5Y16sMkUPwnp6DKBrzfDjHEi9UCu5skQfLHNbukLFwsBGQCw42tvi8f64ETxP",
  "key1": "5wFBYpgkbmwkQdLdBkoT3dXTrtHsS9zhBQxSLbNefNNZrjuTTnBTCp7dmUmVk3bvQJm7uHn66C219vdzCrtmXSgw",
  "key2": "3SHdeaEMWB3tsXZuF8LmkHKpeG4bTSo1T63S4XsKVAzTRyVPAG7UYPqHGP2vHwigFD5xEoNC6RshS5zoVb4HjMaY",
  "key3": "5paRXBMoerUriJXmZPHHSWZNWUHh6mwzgzBrCz8vQh5B25Q54YzXWYWm2zJFAs2V1yVJTeYyn5fN8mHhBFwRAghj",
  "key4": "5SLHBEz5ko5YgQyYdjs8VqSywZHQ1UyvnhpbbRYakAwSwTsutj6PJAd8ju5EhPmbX7fkxgbvvqeSMRfa8GuFA4uV",
  "key5": "4f1giHnL9v2G9sf8sm5RJKbnrMZ5DpXJ9mJsYmGCtoQhRpqoXYGaA5TSw83BGr7eZjsEyniDvZ4gNbhgdgTLpCq1",
  "key6": "3V7h52JgXsBjEBBMf7anrM5XNqr4bGAHW3tifPhDpAn6wfPBC7KiQhaJ1R4nbwRXDgxPPH52HNEftnzHYwX2sRNE",
  "key7": "437FVyBTdev2dN4g5wpZcmqU4Z8c1pUgKihjkNpSEXVydZh7Fz5yYrwaNCuZ7DngV7abhJUCpVcN3exAEtmdwb1m",
  "key8": "5DQhMmouyvgCqWL2uKVkfD3dvQvfnUpUXP9Mz7TAB4eDcq77CE1xkhbv4W2eoMixqY3J4ZotnrnpzN3LSWKrsaQ9",
  "key9": "5GPoy4DHXhSHhURcFFTVT8yQ3FxKYvbxmfxdJZhcguBXj2M94HJZQJPVk9ZLhddNWQCNTiNUKAxvT5xus3GgTNrV",
  "key10": "3gJP5PqJoLTxPfgA3o6cwZqotjubrr2MqZr6KJAKC5sEBtt9krayBdpazhDwwEosiGmnvDWfiJiRPpwYoA76R21s",
  "key11": "2EyTzPpb2vGwRjpsixASH9u75sY66AtFy4aDK43TSnxNUGVKQocBYTv93cMoEJ9hEPmRxhv6jLxP5LPDBjeXLYsG",
  "key12": "N39T8PHvwAJbxs2mUZb1UjPWvgyKXn1zRmNDKgLGEf1xuBNtpcVKzHxqNLXzvXVHkbnn6WkR6YVyQFkVryDBRGo",
  "key13": "66ka5nzDPGjhdJWQgiTbS3eUHnSS1kctaVdhhzRe7MyeKgezXsEp5B94AUBCLCVWNVCdxrgc7D8MCK9YFEPiqZ5Y",
  "key14": "5JJbq5zSGNLKJBdW3VTtAoW5ZLrsoY5DqE8Wi9uh4g2nesfzwsV6rRMNZ5YhezXs5NJ8LRUGUfXbG8mkHcBwFiCB",
  "key15": "2WR7sYs2rpGKftTuVNSp72uKBRPMr7H1VEvcGEk7CTVAKkL4wJdY9sKxPBEHmq677m7RqkgjE7P7GQ1fD1CW7h6m",
  "key16": "3rQtd4fr7HmQntAVYRjf68VqEar1b1JLbi12amNa5YCBJdz9YwUaaQmLuNy7LehSuQpFqMRdskWckLCX6LT8udMA",
  "key17": "3mez3LKCPYczDK3pj7rNQY4iiAkSLLzKU1q9E5oAKjCW6qH71L1bS2seU5bHqv5iVkNPU26NiWkWbGMWHyPNhdXC",
  "key18": "3Y4ewtZzyQDhGxBM8QoyVx33oDQN4PaXX5uVjjL5mmJGYBXmpWUrao26shL8bzFfCgcExuFG6KqQBTXiCuorek9u",
  "key19": "315VWR4LZv37d5PKZxgeNgBQKEQmkAoE6TGShHEmR1mXUvoU8RdqzKdpKoQeWso4eagfmg79VUbgbTowbWfJFjZD",
  "key20": "4JgNCaao2TWfV91Zx6aRcsGD11brDtR6F66NSH8c93M7dJ1udnJ9zTgTKQe6HXTSpkAYPWTN6Wi7nCDBaxVSU2qv",
  "key21": "5jU2o6XsRTxSihoYEfuxiQ1BUGe4cxxuFc3Pfbr6hxSYoTHE34fukc6N8uyH8ewQtRV3qU5xdfLN6cG2GXKieRid",
  "key22": "5WGcd1SYE4nf7K3JhcXVx8DHdB7uqRvqeUBXDiowgm36ZEVVGZwcRSFB4zeieQgbT1sjYprhJUGWsKyMgx4PGaxg",
  "key23": "4H275BhjqiZgwRYFR3zKmQbqfMinnWGQ1fLjd4SXhg7EppJbrdyCoUa1dK1gPuq1SqBGFsbGoTQoSywG7hL5R4Bk",
  "key24": "3PGE5nbNie9qTByALaNFEqr1aZwK82Nee5d3XfHJi5tQTj8nfZUDtrDZTevcEuujpYtoSaKTHApokoLLmjtpV9Qq",
  "key25": "5pZ6ejsNKuSuMkNj7mm9c7rR7ivdHuwGPsp3GJ67BogTkrCSrooWPNd4KgxshTNSpPs1B7qYj3HzStZyaoq479Mn",
  "key26": "3BarBtqByB7a4QBZbkMiUAxXBJosUczPSuqiksLXf4cV9F3m6TbosYi6EKyU3uaHpDXsyuHkhBa1RJ2FRHvBKKwR",
  "key27": "2atsHPcwkwo8EzKMkdHjKYFQqHTuWzRtpj67o5csUS7PaF38P7AWJ4cErHfLEzHkijov5fomfw6dNP1J6s67mWk8",
  "key28": "5ZNrtpRW718oidnSjqrWZUDSfW72XDMNz93Nwwsnb785RMPhMaRU6bcEQeGAwWQW3Dewk2gsSvNQ8KEfUAe4fhWS",
  "key29": "2qiK1Uvhgexf5tUJXrjgPGtYoPHtxMk6AN418kgKKwU8jbrsVUu1RyjEzpArHGzyivqarUfiZSMwvJRPFEqDuXR2",
  "key30": "57ifqDxhaunQzqZnhSSbr4XQhwaHdRdFVjk7DWGsHLMfUtkFGG9jLgJxkwXPVfwwdq9m7usTsbYKEYWBhDec5SzN",
  "key31": "64ZFNQSKczaGsQAHqBNAGn8mpnn51JbEiq7xLc6FSetzFwXvJJdjHvK2WHFeJffzqWQ1p7bsiS4VCRgfVPZh2iaS"
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
