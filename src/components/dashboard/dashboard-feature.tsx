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
    "47FuttLXuEiJrR85p1Bq8PVqkgUUgBnxTwpb9TcJpyy2VjixhV8nYyZGhSWtHVjzFqgYrPM67bqLo6YfcTAbMW9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pia8QyPBfCYSGeVyKp3iDSbjCZz2rA9fLxGwN8U7B5Anid6FjrXHBWqZ6ixc8aQHGi9j7vno4VtBsFwJxDfu4zQ",
  "key1": "5vr5ZueMR3cJrDvRbRD9wD74GLqxAcKxDR2EMMyW17eGCSrUCXUkRdZyxh98kF1JyGRjbPvguuLaxbkepjmGqysn",
  "key2": "3Sr9iL6hSD8AVoDm5eYPhjQL3bxocsJGheHqWocaLdr9fvgrAaWgvx4JnffaBbLfXqJ5E5woL4At5gfktZVBdvkV",
  "key3": "2yqbMTmww2HhnoCcQfSx6ATnisZNqLrpWzCsTHAyuEUGurrkdTc2MJRuLE2dDY5ZjB7TeZKaFbfpti5Zchy7c3QY",
  "key4": "zyCkJZPB52oDpSM5XVfSYErJ6BvmEmuQmHXRXwowfHN1Cokam8E4aJogH5zUP5CBq4QfCgd155vm5SYU7Af29KB",
  "key5": "4KhMXWjbrqNtRfKxVGZVdiK3H7b3rrqapsrimU6XL86KaZ6Dg3xDAcMXWTBEzFXkjWBWfwxG4tss9Ym2Bhoima85",
  "key6": "5AYzEFHEaSCBVn8anu1AcNFhTEPLqKUYZH67UCZpAXJxYVtUu9WetyzCzjLamGrxyQw91vV8ZzJSpjViy85fMfmE",
  "key7": "665FMu8XUYJYjA9Saq75K4Bp1LBXTL6gCa1nTmtPdW9uuEqUYdiHbw6vnpGda5rGBegmsvETtnvb1fXGi3NQrGUG",
  "key8": "3NqSxrRzH118gxiLET32Gc2cKHDiYahNX6YmGd9w6AKhcd3Zq6tHhAnZq8m3mn8AJ6w8qEoHHeuT5aMunxMg4dk5",
  "key9": "4giv66Ee2CMMuXqadhspr4bLMDodjNgHyFxkPKtD62HF7jV6JDNFmPHfG18xGp2PEE6DeGbobM8njouDYhUYvbCd",
  "key10": "297fkb3GMfnuXQirU9bEAGMUwWWaM2C8XV7tBqBNtKaRtNxuTASXnLURWaBjTzMZCECPYfN53kVVxE92HGQnG33M",
  "key11": "5CNcuV6NBe3AYJrUVFanihjLvY9CkFcLE7GKhR8rDSfHSg7utC3CtMotCw2K4CeKBwUMo7yCPCp1DrmQNqS4Xr5D",
  "key12": "4BrrxNPGE1Npbx19w5UUZsCAySbsxxuEpyRHB2W3wZ7T98PbS7UtWCtdpiwVUhBFCd3gkmyVAKvtxwoU2WT5BJvV",
  "key13": "4aUgT7ESuai3rRy6WhQyMzb2sd5cqAFeup8XqLSbu14ZzqDsVQLgWLGp4H3Q3nEU9TCU2Z4XeCz9RMmbZDWECMd",
  "key14": "5sMAe2M8nJtRfdceMtFNFhbiRvGjXHnHai92haim1qryGyguM7tcsiibWQYT5SVYEAuACtt6pjGUafEZZu25pYx2",
  "key15": "3cc4yhrXKi3zJ7g5e9TP2Zgb49wwA3SpREGBLvNDw1HHe9FWH6ZhKAcLgAXgWHxmAHHKcpNfcQpc8nt41jRGeAYo",
  "key16": "BDx8ZB7Guf4pxGtV2YLU4xNfT9HRZ5V63bnitZiWkR3DK6v7PYpMnGvrJat3XBNqfKVvQraP3zkAj4pL8KQuoKG",
  "key17": "2kGXkP8UhKSFXZhvBtKtcMePCL4y4MARn5Ejxv9M75nFznAo4kETGp6rRwcmNzHeWHjpcBCQixMYyH4eACF5raYF",
  "key18": "4zuMc6NYbhqsi4oujmyTHEnD9mFzRFfgJqjNQs5F2p4GHNkoLaBj5noh7T3kt1GviyxLHHuVJsKBNaQjFueNL2vq",
  "key19": "5TaSsMtnxpSgoQZkP68aGwXsNMGMUF5JCjGbBnMBYMGktc93R22mFN7fPnAtDiJzdwDHmuRfsgYUm4u4i5AWwbQb",
  "key20": "XFQqKsH57wxtAuWpiKViLMev8HmBsdb6tLE1hDCUa3iTN52iQGQVxzAswH6GCvDeWtFJad1TN35Kb5EY7Z4kSqY",
  "key21": "xCo74dN73o1Fq16oyCuwMNiK28dN78UbNPaBGsPyBCPEq4CiUgKZf2Jp2X7dKTHcxY6oGL6Vr3LwK6N4id9eQ59",
  "key22": "A7CcmzmhMoTh6SEWgQ7X33kqwHoWh3XjWxiwfZWyJkMEHRGtem5jZdE1cLaF3E2CZv92Gx9ZU69ZsbHNYaQryZH",
  "key23": "3g78mwDMuw3Hd9CBTSxcT6d1J7rchRsPVqTBC6cM22Ch6YJjiNob5g6b1eSaeoJqjFdShjNdQBzT4EkFSWdioGeY",
  "key24": "5u5He6rEjSnmNRkBDhtW6WtcZqGUxyhepg2qWzTbcvf8TjqqD3aLhvCAnEmxCt8QsyewoZi24HtaUGkfGHMCbBdC",
  "key25": "3yNDUuGkvAWxsM7X5Cqv7wa1zoJ9hzq8zc6tjuVj5VkpZXxN23nBVDzziUNhiCgTdHJXTbkurmEPgy6aH9NtnKd1",
  "key26": "UbWiw1DPkpsna8of211MMpJCWS1GnS4yZ8YD71ssaiAsFXDZ9QMyfQhha7Cy43ZxgVAKTeScZSFCL5x6n8rKi1Y",
  "key27": "s1qWqYMXj2ELYxCcSL5kWVKYAtTQBVf52E4jFw1Fz1qc3arPFCnsRsVm6mGgtV6RD9ELMdnRoqMvoPHvRsKrRL9",
  "key28": "xU8ZhtDjmZ8Dg5PBwNMjAmaYxpc9HUZhQCYELRFAJgeMDACKhpB6HZ3F3ydu45WKTmjRUp4NwgwhSNPqbRu4Vn4",
  "key29": "5WJTWoeW8soFaF9YmnkCwQURCQZbXW9zafe7VMmbUb4p2AMHLQMSu1EQCbVBopddv9y3McXRDmu94SENGQVcsbru",
  "key30": "TZRurkefdNe2aBB6cVZWDSJedvimNvYnhKx8N3nRqZDGQ22vhYA4cEP8DA2C6ejjfwQyuQiTji6AxSESb9rQ6Fo",
  "key31": "2h8J924o5P3j1UZR1BZMkNSYj3U2Bcm8U6mupyofwxgPYbzpFrz6wBL5WkGLCqkpCKT2KGUQLiSg3FaTMUh5pQzK",
  "key32": "4z7QkUCfxYbj8MQQApp8hvrQDPweVV8wA9qmD6c1V52NTq7fyekgs5WD5GkB2kRerj1QY3BhfbYVGXtb3USoc9JB",
  "key33": "4ezAHuL5mHy4zdMSZR22eKgda6Xa6VFVfVCtsBvRRdqZ4n93xWyrv961vp79jegnatVBwB3xLLNRKW9Rxu2Q4PHp",
  "key34": "TztUHQbdSnFPhT2eSwLySzWtVmo7yM4HWgX79yX85WGnesmuRWeKD7AY2LZCwvj9BiyYjY1DnULxEf3C9mjtncb",
  "key35": "483prHY8iEpEFA6jz5aJzpz7eJGgHNu8HAwKzkDricmMXy6qTvEoydg48KMvdLsJW3kfbLbgZs9vHS86vWvu3qJj"
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
