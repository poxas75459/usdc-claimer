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
    "67dFso8sjF6XgJLcG94AoYDw5LFrwN6FNpGhMTECKNWdeZbdfoAAchVj1tSZMxfzobMdKCtAubgkAg3x6xuXC76k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tjo4QTv1f4mn7QzekhnvJWpPKmGeL86CgjFG2hNGyva9CKoBohb6h9M5q4jQuZDWedMdjvaVwU6qeNjVcd1TkB6",
  "key1": "5ERnGrDSZZyRq4XU2AEZS6Z4y3wu44kp2NiJyEJR7qxbfbv738fejJSA4UpkMtiVHCoKmNoasqn2ynt2oM7AW8DC",
  "key2": "25PqAj2jtWZvJLKmijUREc7QeGq2fsWnWeeqMPnqszvtUw9tTM75K5m5HpUSwNLz96kNKCahKCv8t5E6cdu2oV2e",
  "key3": "mMonumLUN6APEVpf7kdTy1kk7spNPoBa713kbLmpsfZjvHHZsy1ZQsDDHTz7C9tk6uik9SWatDbhtQzyZXoctwS",
  "key4": "59SXsw9iJH78HTTytWXqZA4EhP5ksz7shYbY9AfbANdGDGvLEYbz8rtpTsXWtdfjSPsu5wMTt3z9ZjxduKxPVqtn",
  "key5": "2XVs8h9pWUxqb6rbWSz9RrQCfXgUPDJz21wYhvmqf4qqJ6pTvADv5HG7xWBPgaTRRPpCkYayNR6HVaB5vfWyfAxE",
  "key6": "dgogzqw4svRbfwG3yfNVJY1tYqNaHbqy216FbuJ1Rw3w4LGXBz8xEXod73WDqpH4SLXcGNR5gVEcNwk9UV8sbGY",
  "key7": "fDNX35PcVT3Kv7KQYuwWiW2w7qNK8hen79XyQibge9cFJAriZC65NLQXVfkUrpRbDYGZCS2wDYqKFbCc4ygUjck",
  "key8": "5suKwgf7vCFDoH2FXYBSgBXBb6MCsdwcV6bGmZsbJyXytHB2mtdNVzSJkpAdkQnMqgqaSgaZsP9WRjvNa5fgXni6",
  "key9": "4uytBVEM2Uks9FQMH8saxpsya1quVKFfFsCa4qN3ke5sxRqj3agycC6px4Fc4YndaB2kupdX1fbbtcpRUo7mQWZd",
  "key10": "qy2gpm7KgBEggA9b9aN3HRW1CHGbWhxmbY7gM1BU2uqFmFrD3wg1aAEsztojM5pLkEDaR25AXjngShQpQPtQLhY",
  "key11": "2PV8ab1DgKynDRdnMf6UnGmr8m8v4jt8GKLMP25jCShGEKQFhE2wG9ufmzxDozjufyPaU3kc58uZ1FgfXBVWz5Mj",
  "key12": "45VMdYTv6JzNtfPGeNGEytjw3o6nQPGxg2vg12Ky3ywkEgMutSpmYNP3Czxhjq5mw3n6UQxffVaKr6StVCdKn43Q",
  "key13": "2mepc1uRC5U5fyAoe4uvzt34Zyoy14HLPBzEhfwKpmxETLQwF7xcLj8H1pW9GMtn57XB7Pt4AdVX19Kh8k621wiR",
  "key14": "tjmAncsqjWbyqMbpbZrwEVYhYygWuAa1WPYNKEjykARWAuWme1heBKvARMKmzNYbewbLaFZE4Yh4prYuPppBmHq",
  "key15": "3cWqJqGMRjCJ5WvGjaGVXGuKVEo9bzhDjvrzUWQCnLLRmB6gu9KiMnTfrqNNdr93WSGdvx3zvHZTx25uvcYYytY4",
  "key16": "4Nn6bFHRXumBBDmwXkm7Tz6TBvagz7PcSLkd49qRvmQCZSHnHGkfqYWk2beQZxbAVVV8weKr6pLvQGQ96UfKB5tN",
  "key17": "2WMu5wceYv5qp7RycZAYYkg5ZNexf45BSF9XUgingV3fX1NUxPEqhbMMV5fM4wtHEr8tcbEZUGgz6T3BFQ1wdjgw",
  "key18": "2h3UMYMUspxzoHPkUifnR5LJt291c9TcUiptu4FAuc42CifJRsZRByYxji5nvdUBShPKgWs1yCvFmakFR7sw8nzi",
  "key19": "3VE1FhMpRirMTiC1KjELLcrvzdVnGGyrTMbNx8SZYNxVfwW6RkNppRVPnPLzYxSCZfhpQzChrW6VnTmASFt14NmX",
  "key20": "3kHXHoMKYq2dGaihfjbwqbN1YuCgdRQdBn9uSeR5ymxvgcmM8PZz2xkY8TLyfMo6CNJqP8H69pM7wG1RTZLSegy3",
  "key21": "3KkCGgutQTGiddrz3kZR1EUn4ZwPg1Kautt9y6KREYSD5WZp6tndQg6LKRLdhKziVMnhqgqpi2xbQ6SzHUhv9ehq",
  "key22": "5havt8NshAjN9YkbMS2DLgVbXxMPF34ytofve3XdXjF1y4ScieBKC7iJpab9X8NXMNHStRtQpTnwpJr4eDUsvdhY",
  "key23": "521H1e896yNn9hSVkLrAZtRtzAyr3GAMzoq4Dr3XFexxQpXUBzYNGLb4YMVZrGvukErxEvKvvRZDG4nuZPuWaNnH",
  "key24": "47e96gGy4jCwiuhXQfgdJBnfn9LaTaP6LmTXmn4UZEZsDrasghbq65exngLZL6ghMrpD6N9HPd1Q9PiZ5XXF826u",
  "key25": "33nboHA7VQHAjA2v2Uyvmr3YtDUv7cJJrvyp5g7bsADqPRZCSweowF843NTxQxfVCAJQVSDh6i2UzAh7QYuiEmhe",
  "key26": "2fnbanacpqYYfJgKiB6NfyYRHDpXAHV9GR28pTAZiXDsRqtGamTYWQw7irwGguEcjCqscLghSPPeQW8voFs4PPd5",
  "key27": "3ReTrbwEwNx1TzM3DThGPzM5i28CyyEmiMwzdmfEQSCV3w3vVUFWd8fqt39weYDtn4qRu6b7gpvzaPx6W6EmojBn",
  "key28": "4CRJBAXNDV7H8YiFF7dpUE7h9fbBwDiXvJfT5LbDPMX6vmaDpyENESuWeBdiRkFHZCcfXJSZfsEh3JDFLY4cLm93",
  "key29": "YoFcHTi5sapTaNfnrWAN88g7BhsxxDWmgLCMv7sH2t4Lc778dKJvLh4gxkmhqs5j7PvJD2jzXK9SyjfrTZkyv5P",
  "key30": "5vThzPwNLpsRiEpuXbBdvjf3P1KYpdWW6xfWffmsMqpmaa32nFFf5NdSPAJVMTCmdHE1RtA7F6s69MAARDNW3RRd"
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
