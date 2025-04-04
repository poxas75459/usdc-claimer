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
    "21p9HcX6w58aUkDtY25kKfsUPzB99igKm5cF3wC4eCKhr15XYR7TkcHTz9mpNt4hGu6q38YmDWBkieAK6JpJm1yu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s92CKJ6a2VJ3Yoiv9bMqmbuiG5nraskcdyPDbSovf3qapB7qS42BcnnyARjaMh4WfbphioZ5YT4M2Lh2sbqHq9U",
  "key1": "59UQ67w4CRvMz5tNwvZqN49wErQazmfCMs1P7CzNFwowwCEEPUWLrW93JFNqzDy57FFBUrdCYmpfZMfzAZL1M5CF",
  "key2": "xxXj4VozshAYsYtgUAfqz9aNpjKoAULBe5jLoQrMxMSPCfhBTsv1QnNmG2ebLCPrtXP29LYU4CMPBpkiUYSzkD9",
  "key3": "3RyCzFstgGrMY5CRJ8LkmtPuUxSjv8bGuwEBftFcFhrAfBKuNtNzwn7iwwo5jb9jaoBUhrtWBeJTPiFaoT7htUmM",
  "key4": "5aM2CG1ZYJbh59ex4FYpm6JMLrwmzGjQ6A9JfK4wRfgotcnxLobMjgHAt4QLw8cCBoyxjqUCBKMyzRNaDJZfYSMW",
  "key5": "5rCUxZxsZy5YSNRa1vaGbaNd5W58nWRFxVwMQ4FxmVJFwPnttgEZHwZNRYkqiZvf7ZRroYz1ryqJLsHszZHyuJ3w",
  "key6": "2uQfTDqxxG1h6FQDoHRaMDYvbyAqrgAYoav9BjVC8WnsP1NbkQTE82LA1z31tF8JYZfEu6rQX5Jw96xFKKQewDep",
  "key7": "3XNc4xtRdD97Bi3nAgtcp6e9dmNkLGVCEV9dMLu7rJ5YMmx3JQEEhjsb8CwScEYSXDBshiRpFKdW1159iY9r9RDQ",
  "key8": "4ApHWPaLMzHFxaeSTwgLqVfrjxN9isHscbFZhuDdPBwqeME5fZYVUeZaBufaJqiHf7fVEteHhdBP7FM9KmWXJWie",
  "key9": "62gQr9MhdaKNy4FP7MVSvWUj4mbNfUg1N9N7KhavEW63mz6XQerjiHgLVvkxcsMt1zatV8TneE6ZNTPTnJc8aVRB",
  "key10": "2mc8zLGygPB2K4QpzQEeRM4JM4BcAPRQ2cL9x2j7RpaTQ7MFmAxPoJkjc9ESecfyQtGSTd7rJryJQj9fC4aBsz46",
  "key11": "4jMzp54XCYEAfvXWDDyredmPVC45XYwL3fz7HGq7Qnjr6BH7JkSWCLkgEHrhvQQkbo9SgFQz5Q6bxp3rs4YG2qT6",
  "key12": "H1i5wsc1rPPRBMU7qVt4poXEHuc1Rp5ZDcrLZedSLf37ZPAP3f54ARwrARd5qTK9mAhv8Nebz7S8nJ912PqAbVX",
  "key13": "1jXVWVXL9aK3vDQfGbsT9mvT9DYfkm4WJBAHPi1Ym8DU1H5RHVYZ1iwj24NbtmnWzAZVP6oRBUgumAkDB6qpf6d",
  "key14": "4Y4BEMS5zsSi7Qxzk3YQgXXVdt32CZKswcwRSXWVEVgZhMSwvDX7K1TC4rMbzNUSVT4PMMLVtp2mL67WMUmWHPQ8",
  "key15": "5LaAfCtw61rLJbViQqoW7xGocBGrWCuxXu89E6va4kxmyvhxx47QgqWShginjRSWdt5HQrG4nLHyLEF6FiYb9aTZ",
  "key16": "UPWuqdDDsBW6CJUR6Zm2CJfrRzyzKQcMUMtu2pkbkGGXY3QuUn8vG16WUHh5iZotVbdqf5AXHNFGpJzE6EyNKmZ",
  "key17": "D6AFVoEyvNYWhzVa5aiqLXBYP8eibDxMrGsiEWcJE4LPG4QeNojZFaPnrfdz218Ea4pBFFqFzeaKEiy9HmxHqZ6",
  "key18": "4op6uLtyfzhEkMJeZWJ41aatmAmJhsaL8ueZ7Hekb49hee7TJ8RZNMDArob9FmpkHnvP8gZC9VmmEfT878ZSxcVW",
  "key19": "5jwgwBJ6WQ1oi2La2ajuLea4YdY43NtwAmCLFYJ6DY7JLC5qbsA3TkhE2YLXkyKuwYtmMr79uHWTL5ZAytWUg9yL",
  "key20": "5Ak8fGmT7GHjw4yZBbcSaMSEer7oHLNPZDNrqNbscaAJyDA82FpzqepEBYAe6WKidZLgx8KboMRKPL6fwUvZu96K",
  "key21": "5U9tmQpPuUSA5cDqhcNfULJretwKR4UskTWXbXofjkD4hd6Fmc6ftWe3xN8A1MeASjohWnKMtqHuvWih7BMrz7E3",
  "key22": "56NqaAq2BtHSVHkRqBLMDaW7SZdQZkW4keiqLhBeZPBvSAqd48HP4TjinH6cnynVLPMGVHrQLBQbSkfJycrLQjdf",
  "key23": "6ohWj2MrUGL49ugVk75hBM3QSoy7WPeemoShzR1k2cNY4gd62zCJZaQZ6EvfoeF9rGry8mhiR2Fzgd5mdGgRURj",
  "key24": "3d3x67RarMwttsBA1gCH35aBh2xcfppjtoSaZPw74PrAvheLnNpoCEvhKkACbxHKidRFZbqtVqScxuoe6i9BxKaZ",
  "key25": "w4rEAJcqvm723pVtjwQLzVuYRHwEm6TsKEH8yNptgqqZCxBGEQGf6iskZXJRV2p6MxVt4NY2mV5qFcVshZ4AmJ1",
  "key26": "4rnd22e4UNVGP6uSqS8RShzHyfXurQo1EBNTYHhk7Lga59M9oP3qWVwLcnQdWCHSwYPkuQcjLmomKZAwF9mZaFdX",
  "key27": "kW91uWe68hr8YgxHrppq3FD1SZvwBjvCX3dyrercMVVmpRxfL2iQLURBXueumnKxxCuudrmDU3UBPaZ3Fg6WG4N"
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
