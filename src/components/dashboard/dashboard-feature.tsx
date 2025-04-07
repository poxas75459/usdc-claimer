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
    "4qBPbud2addrTD1Do1t57C4ur8LBY8Bp5hNDSKEmFbFfRRsJVJAvxhKXJV8ZdSzoPuCZTKNBLhJxnt5JQs5vadjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AnMEE5nQo8WDX56YryD4Z58f8KRAZUCumpXVjSZXNpbq2c2xpsbkCcBRZb9hk5xJB3b82VHywhXc21PW3JgtNTh",
  "key1": "5jbTq1APLRom8ZwyKaEsrCZg21gtuNrvRwgDqS89aLqh78eq9pD5S8qiK37pH8aG6aoTqLaKP1cfx9LbLa1jKQcr",
  "key2": "2WkhTQbJ4mQRXsukKpsc5pfiYSUHZZ5NK6Y1kusMqba9nH5BpPg1QXdPCXpyuFgAU26Q2abymFLhCbeecimYfNSR",
  "key3": "XPLcvgvbrC6wuBMfdfLvMpnptQ2EMyeRe3VSzuNTxM2vWUJhbLFSA2QmmhjbAuNoBZidXNUZgBgxyVMo9A8mn1b",
  "key4": "k7MMbcExFfeSF4583AGJWSS4jZ22kAk6zkF28n4XBzVaRPfGemq6UQn1T7RFq2Z3xd4x4MoMLhfvQnn26xahpFL",
  "key5": "6auTbghPcTptr9cLQHSYoeGbuNSX8mi2VxPxPsRqiucsaAke3EYixUPR26fi6uaCqJgzEvd8RzX1sHCb5Yeb7e2",
  "key6": "5wswyvTpjYKcjYFixsJcaqnZRKziVqxDvcNYjXqTYGEV2Afb4WJuzRzojZjJj8ysPQe5ZjfnPdt7VW7CX6N5TkdG",
  "key7": "qPrY6KCv37sF42FgMh2GQe72w42hTWtNVXfwhh3NCzh3Sk9CudBwfLCFrcdcwnrsaGVGqxwA5TKaYrCTjRKyHfy",
  "key8": "4UHy2iNpCmHvFmMSzadNjeab3LCZ2ugeAyYSEQc6U5PQ3dfVgmE9vFbYzKfQL5WeBNSCYF752bjsKNNGweuyaUEz",
  "key9": "3r8fdXyXFq7DhcAhv3ZEUvDBaPZDGHp7nsckQtba84hF9WKdQyhFJZJUCXZtYuh3s2gLzCPdTGZj7U4wt2Wj6Bcx",
  "key10": "5jZzr2PremVvKHBzQCCo71QXeSWbN7iKh1F46AzH1VzhXFo6MZVX9LNZkmvo6oMxYieY8HzaXwWe81Fz35mhWAzP",
  "key11": "4ddHQYq5FmsuxBBHH6XAF6LUaFVr6h2h8pPBxaqJ3hDHtaYBm4fiANs1B5quHCdf4M4YnVD5iJrnWkHbeHqQ3S3t",
  "key12": "5ZRkbRMu56WAB5q9ojZamUvg2WTG5t1AYNh4aq4WngYi2xRiBXpQjqfVvM51dyzBjarhn9MehunP4H9FC55R21ri",
  "key13": "2qJgu9aPt8wtxPUcohPi7MBYniwJrZj5h6D14hhHqbpkmEWUTTcsujLZNM4QgmUL9NwngPuDVa7d9EeFPfHrT8vC",
  "key14": "4GrysFQ73LKLwaAhy3tBfH71qvCvL1TjZ21A9sgy5TcYcV2V4Sz4WjHfSZW7V4h4BNDyX7kGvFdmnVF6Y8sy4sjr",
  "key15": "5bpGqrUyA61NnMmbZoVedMfVtQQobzMmy34djW8EdFw8PfRo9vQz7TqRCxqNDoF4pTtFqVRpYc28WksyMongYAam",
  "key16": "3mbgrdEgWJ2RNsjqqtJMapK38W9iMnnrk1UNmRbjS7KP3F9VyAA2A3HUTkGX8AbUpNTS5zHweq3JsRhtN1NdRf87",
  "key17": "4WUYBCUhQ77TknzMCTBo2sakUAith9U1rjxwYdA1iKc6QfaV3Lcbv6uNqZZBBK5Wg5yCoZ3nUW32WgqhenRxrKEf",
  "key18": "JdM9ka6xfaS5mq5B3qc1hUECRXwP94ZNnzjm4E4F8PEJXoxz1j78cSs4CbFPcuEyaNc5uo8icgaqMX5FCMb22xG",
  "key19": "5R2bnmcUUhQbiDrFFkCRfEkDTzWsxBTiLc8vXs9yb1QX7U292YqnTRgqN1YDSTgR5Fthrv2mwJ1VTCcS3MjTNQD1",
  "key20": "4PAqfNQqMqWPoSbzF6dGetgNb5PsXr4NufDiHzbra69QhxtakNkjdvwcSzKxizDpPoZxpWXtKdrS6v9wtS1akyMQ",
  "key21": "4KJngeaEFAC9D7z2v3E4nkTx9KYiQBvbRidNQeiA7jc2FYdV533SANdb8WuoCAczETgtznJxknCzDXHNjdVyJKiu",
  "key22": "2LkKW8uT7QweM98HdgHGxw4azMLhtGKKHqgzYGffyqvCu2ntVBGYnYj1CWmQ6gkFyF9uX8KdJ29Bf9RzwBuUSa4f",
  "key23": "3eYtsh1LFFv1MX72FMn9b3KLy5P1CXPdwgeYZBZtjAxLqSGbifQQmUhigWf7Cxbo35754QGZ1p3RVsFyt1KgvQZG",
  "key24": "45krb5rZDXMLixx3K8nkTqdnwcL7FTvUYmFkQbv65CW2aSFffwtkzo5DRhrZcqzGM4gys7WhARfFmfinUZsNHayz",
  "key25": "wzAdD2qoHtaKJckmmgL8QZVoZAHP6hchVJ6h9KzvWAox98LQoTU66uHAPpWfmV1XPMZh3CVjEBzvqTQ6haqeiLS",
  "key26": "2iBXqBKXqLKKEXL6WEmoRphj7j56jBLE9jLnGreZ6jJzuGR8RvuZbus4DrpCFTXb5oUKwvSdDzPgVmqZBzySwrDq",
  "key27": "MKt1Dmxgiu7D9ULywQWAbAsCHHNsuY8VFpQdsftS8vy5nVKJcHXTgP4HWJaBcsy8RUmvVBxepXm7c3aceudwR8w",
  "key28": "5xisuYmHagcham4GqbCLV6A62PuewnakXXnHJGJio8iWHNgRz9syBjsRH5SbMx5dJt2SLUxXjZSHantNxJ6f4dVA",
  "key29": "PoDBdpK8ngkCSWyC8VMyLYXseqJB31opXjq5JusZqndRAUrkYKvAJPytSg4jk9FwjHwv4HABqi13voKHhWWnVHS",
  "key30": "28WtFLTGPL2z6Uom5hmb3ozyTQsktijB5g7qbPL8y4JJf5JXL54ko3A2zKDJqQCBdX1e6223eafLMSoLm57GwcWT",
  "key31": "FFx9bBPQ23wS7x1Jb3qxnjX2scjfgLv6BnBJnCH9wJf9VzmHPQnZdAnjeqBjcta3sFyiF7vk6aLrHUPoefHmmpY",
  "key32": "2T4fZEKbAsGjota2ReJSJZQTWnFmgUxGo2d8YoySojhyr2obBNT1A7FtSWR7oBVirpFbM7UevYo5NZ5fDWraMEPa",
  "key33": "3cpN6nTCyUefphq13LsjGYk411USGbWdXS1WTMjSbLWtkpzvXvgf3BZ5YrFoD4X4e8hz3TQ6AwNNAZN4qNhURkBM",
  "key34": "31mfYSneBELS8fDWipFwGrijr4yu2azQgo3sB7eSBF4durzkkp6gHDWhu5rYKmFh9YmR276fFvPydsqZ7GpCzfry",
  "key35": "4czaTdycKPUj2sUWupPGJzccLAKaVFZXNhsFbwSiUXnDNgN6jjbN89dEk4ERxgGhvrdsJ7nEe3GHG7zv7bBGwfDN",
  "key36": "D8HtrfrwyNzUN3t6zcUsgeEoLPsK1fos4vEcB2A46PwCMwkycryAVe7NSE9gCanFUKQeQXNeMKVy3izfpK7MeXs",
  "key37": "5YAPPLg9cK2GqTh7RaZw6egJ36txFnhvsUnLxxAiwDT66KLKXuKLzFDUbGYS8hjDo2siw9cw64icmtov9iQGJ3Xp",
  "key38": "5mx8qwEuLR3CrvYuF1YvqrutK5CqXufeLzAdaUqw3x3d2VMruHSdYpjtyFK8HyY7P1N2EJdm2EReD9NMeSJuwwA3",
  "key39": "3GHPE8p1JtaRU6ZfxnxksfQkSMyDuWk2Ki3VTUeUQpWfrJb5pzKzkZv7ebvvP6SwEp7voV3AcCtdq4QTQghcoUBk",
  "key40": "2siRtN1MN7GrzKCTVcQ8djVBKLroGfBv8xHC8F7UewA7YTc7A5RaiZGy5VijqaX9GETSqHexZPvMXwdN7QUqHoEg",
  "key41": "3UkXkBkpe7ot6b7i4Czvc62qvpQTDQagjeBmc9vZyzrAQhV8L43fPHDdGGoHGBdK6eaAuh9Cjinvt3XGhBqSogTf",
  "key42": "yhnNHXWDr9GaeTCVFPtLuQdvJXp1gBq5ydAeqYTRQgj4ZcgSgESUwrgNPeYrroHcRML9zsUSXJQr84DSXCGSUhR",
  "key43": "adBKeeeA9DyJeWmaVwBJjP1utmA8wnFvfXqRvXCMDzRGq5RBPfURQgWBi4Nz2b5SYCzdPMKMMFk5s7EW7LrhBfU",
  "key44": "2BcNGbdV1Zeq1nbK836rwXYgvhUcjWSws1f1fPNVEJ6kTENob1iyH5XHZGyb8TT4BzfSYCcSjvVudaH3u7FYoUYw",
  "key45": "dNRv8JA7iFggdSJ69pa1EjZYsS3JHGDgCHApbzHZwUeX46KdbEWzRYEjYW6pbJCmXupZNVTf2T4nqpr1ftyUDeW",
  "key46": "2xh9cVuMeZDx8oW5PmqdzyDNdZ4ffUSaKJbwDij5dGfjP9NU5Mwcd1mUjVTPJXxXVGc6wUJpNneE15EeoC4E66T4"
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
