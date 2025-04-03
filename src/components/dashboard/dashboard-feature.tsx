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
    "mWnw7W4duZNdxWcD4Y16qcHxYExrauH1PNR5YhguVzbrJeMFmy4EzkzWxJQ1Y75pcZ3fXwK9GwTppjaC5KothFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nfUDAkWcPZiGPRwsVNCinZ4SB96QSjwtAxupp54ag2JV3d1RS5pK7HBgeCNWTYpix7ho9Uh5KJzXp3QqWJiJc5j",
  "key1": "FMdQ1BANufsyygJbB19NQ7QeTzqDFjt3a2Skk9wnWe2m9K8s1nFAtDpwS72u7uVrg3BuHUKCLMjgqVpkbiEk2cR",
  "key2": "4onuig6jHzpJWMpbwJW7pAq94gcbNsFSAJcdrJzxUP2QcFwj8T7qQkGXg6oXHjEeazmtgFis1rXHMGDfTEPEtbWq",
  "key3": "2DAKP7jZYUYQ5fxbxdrnzW1uNZZBgcYkyx5otq3wWDYTQNWQqLGgYWPrzWFnpVLXeruNbSCvrprcAhAR5EBwxo5q",
  "key4": "8uuS1YaHjpZBufJQ4GXhVs7d1NritBxbYM2s2WDxniNcRTiv9Zgq8BfxbXc5yzXhFf6yUho47p8sKtdgJE9jAHf",
  "key5": "5u88yfRnnWQ1cjGTQadDAhCASNNT7HXngJtMnbuSnyfqoxzvrjToc8JQ5HLhCxfCtmmf9oZgkrNTmiDQzkiJ4zzo",
  "key6": "5xmLfd9nYBga9XkH76rBFE5y9eCp1vRpCdsUXJ6MVk6bbDi7Ax8aRSqGbCmoZjh79wuXLwyB8L7qrRe6m2JDRFAt",
  "key7": "24Fy8LRfo1qVB3HRaaGL4kmpCtRB2FsaDCMmfEnUtFJxqKFEAjy9RFZru6vTNFkDDx2PCsrzP4jSgsqcBhi2kgPg",
  "key8": "3wgAFXuc4kUhSbMCR7npmnttTFqZbpirxx1cRRZkfuwdZj3ncMQpNhe34X7B1daMbKn8T9D1ezJT9DdbcSaqN3sp",
  "key9": "28wm5mp3Yhs2TzuckBsH5JVo2TxU5EDkvVdMjqLjQEFXWSUGRTNJr7CzjNzkU3ovnNzh79K8d8bJGn1E3fZ8zwCU",
  "key10": "mmLagvju9sbpnQVHAKkaLJt88hSshAzv5P1hhLUu1FbVDQ1reH3qKGt4acymiWQnbfszDTjo6nnj8HM8PskbTKC",
  "key11": "38by6dXU3Z3ssEp7oEb8HDx5k5CyW1RHLhDmFawPJVha6fz8hhwRCjaQtjTCzoYpzGSPz1hegi1n1nLjk4sHHW7m",
  "key12": "KKBymkeVuuCeXLuSwF78kdpwGKgnyfBUe4CjeLAvi9FGENQzbc27nTLuMCeLXGuYu4mnsPjQTjwfiC8uaHhd61K",
  "key13": "4o78xhqmfCPkALXFPQxiWLc31wEXkMq2YLGQxydcDrcH661ZeNz4jX8ZYd6a1egSAuoHu4aCTEdC35f5P2p8Nhje",
  "key14": "5JqMFJrYbtZTEiw52Jacrkp9vdsQAAVRr6KoqaM2tnM999fsY8WnvANKDUmZs7iXLEEGXeapoCWjjYaFPiEdxvxU",
  "key15": "38kvSZ4iUVpyoxh5vV1sdJi5HwEDk9wiWJohpvDjZJcUKBMx8auavw3dqD9U6ESwaZUAyqvqbAJkbteUeZcX3T6C",
  "key16": "3bR5U3gmPyUUKahrNqoYnMYSfRBV54rb7UQxTWQq3mqKhZtYXmNfNvciXTdpFzg5SeLRLFBk4pibWCZT9w963Kmf",
  "key17": "33L5d55hnsYxn32eRqbZVF9tnoGQ7MUNYAE3vLCKXuSvid7pYmbCFtKpB2EHoNWKbhyHnhBDqzoGZoFqf4KzU7ww",
  "key18": "PeDHgj3UqZt9VLEgsszdq1nLtdbJtJaoSkcKi3pPdS4cU1rVX3n1aVS5dwqrUkqN3bYWTknBcRhVAL2fKw67tdb",
  "key19": "5NUrAGFnQEvg26PZA4JgMtvcruJfZL7tGsFEesdXooP9TkxAufwHSYr8RPbyVuPFx3C9zsommRNMoKc7YTueQJhn",
  "key20": "43qffwUfXzSAFHJuyh833Qk86c13DEeNF1cREsWHwZfooUtezwtXb7r7TCmwMwFi8K8MGAZyYFsAHoYMhBoReELu",
  "key21": "22UJYhHEME6v3z6oTKaBvRBhbk7N2zaPBgi2B5AS9fQbQva9H1mVWA4H3nfYvRo6HV4akYNxaE3H6PHTkgN7MrWH",
  "key22": "3uLpvxiKDTaY4y5PPnGm3xzVBJXpTogtSBgjQMaWtzUrD5J3xMeEka8kkWjcSs7nq3XKNGmemReuXLprL21CbSLD",
  "key23": "3mmkDSwBezKQApsjADcKWLMAyf2E3VfY8Yo7eeELNxMiaqFE9vPLCyYZEHT7G782teLaWW6Gbi8v1LEEcQNU5sWV",
  "key24": "5ivFS2Pa2KgBRL4iDKqfjkmDK3hMpN86eeUCpRWSAqbuv2mw3qz4DwddwjoJB4AeoeVXNzdFoHrSSFdCfNb8Z4NG",
  "key25": "4xbkd8YCHq9kykiUy7TvFTQcBprEyxiKAzjV6AFDFQpxdzoZXvSEdSzdKdMLzdb8PiddCgjRNpc6wXtBinNoy8RE",
  "key26": "ne97kAu2AaNXkUbd7Si8Q4crrqBKKGRNQu5cwAdoaKUCKUUyAShkYY2phjD2m3k1JoJZGWYAWpCuUvxogLJggtE",
  "key27": "2n8qz4JS5eaqj1zTz7yJ1w2xcZPFT9Wm8xGH3CNHa17jBK1tubdYMTJMC2Yd2k46KVJHc99Kuf7Q9cd8XymghtSu",
  "key28": "2KHVheE7cT36JGU1pDRAWUaJKjo8LG4mcmmCpqF2YSZFMfU1QvcSRZTGu7MW22UAbYFqT25wwj7onj6dnJ8RLr9w",
  "key29": "57Nwj91j4JkXpsVh8F8cF7KCdXa2mMk8ZGtiLfnxztzWMjnmYXrb5b8C6VE1LGPa4HmPM8m6SRkQ2gWUHXRCjRdQ",
  "key30": "3o3p1vKr1J6Z9JHFYZ135HDcnzBgyL4FVVz6eBVdKp6DAaXBkqsXcba66hA5YH379gcvHYQb7uRbEv9bKM3AKLMP",
  "key31": "3TxED2ULAmAEoomTWTwEufzNW5UfqFRmMQH7UoWdLUAQgziRgF9VJxof1WvzLGyuupxY8LBg2dhMCZitvhm8WTUF",
  "key32": "5juHNDWiDQzv8KxHdsgy3UCmC6bGZQXqtthniTZaakMsVwkUkuoYsgtWA4Bsga4F8EVR7CNfQJmfsTqhz41BnQjA"
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
