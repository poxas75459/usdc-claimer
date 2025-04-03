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
    "3UuYydMsMVyn6RJz89EGbxDgnVmrUAE7TFKNKMF4WRJkqS5u126DJ8p2e2nyBG4Mf1bMjcusmEuarh9oX2knJyCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VGt9FxQu96a5RmwJc1zeAQr8xVkSFVSU5vaT8fTHkTLHXJ8rELS4SPi8wqq7XeJZYcxf1hEXkD7KtedirQZf4hG",
  "key1": "47DcRhv8P5yCnALqzNjBixUv4Nc2wRkjiKosmNSDD29a4CknFMfCwDg4yiHycj1jCDFoY7EDTmkjmiHxgmUqorFR",
  "key2": "26yUxyHZx51SUdSVK3F2t5K74MGKwoTiwQvNnswme29catK7Butcj7SPf6p83L2D5UuTfvaazsKq5CQuVuLCMA5P",
  "key3": "4uotPGFXGB5kgnTL76Ykdhj8ejXNDrbj4kLoycgyBwJKHkbKVUadhSN94Jx1essZfb5ehuPChxVUHtWsWJVG5pZL",
  "key4": "3SSoKdZ9USmoDFMwa5U4PeEyeiwnuDtTFmw29mDjG6sJ4HjMCSbypdw2XMPM6cFdmE1jzLTcE7jKAQypaFEXafGZ",
  "key5": "2YLCKih7LxnyZ6ZFjXBguGSE47E2SVdX5ECiqsUYfM796N1VytTYQU1zZePGW7CsLxHnqQXMWWB2UQaqLnSw5xeD",
  "key6": "6m4KTgt21NcRyvMFF32xrAMjJnnEkQ5x2whchBaDSNzhz9SQzCDnbJyLyRh6qVh51BF7fhYqrxCJgVjtyDnZT2S",
  "key7": "2BgKLDLsFkCrRrPfKd6b142oKoZAYH28T3WwRpncvCipTNxzELEA9yF7Qczw2yPJgPt3xbLrHe5Bghbqx7Tfb3BF",
  "key8": "37Toxzw1Fj3wwQJMxADaGomWHqMCqTAMac1SBGfSCEknEWBnL2eXhU6DJUSGUGFgC6eDXBSQzdZFuwwoytbgjrin",
  "key9": "4eEGTt8SNLUPFLhqSSf1o9qJventRnBE5WKie3Ms3FUQcZjeBxQnSCWogtzFvsc4gHN68onQ9GWGwfBPXdDJtf8w",
  "key10": "46rktvan12VXVyQtrwjtWwBJyYeTx7HMdUMYwzTGwTfSpaaKcMgNwcyiN3hMBuBkVgCfDo6LykQwTyg1PMqV3w5r",
  "key11": "5TietLNw1REHU8edRyWmcoL8pKPUE7xBvLEM2S5hz9qSV6X2YPA23KCcmm7jB5KCWtmJL5TtSDE5jTV9tDHBuRc7",
  "key12": "2bPtmJuj1cNkt1bZeipiQM3PrsxWmuCEe3dxsnZw3EXPvHQPEfsyu9MGb8Xwv7x6XAZwPBi8JpCpa3vgppjHkRfJ",
  "key13": "HvB659yim5AW2kW1FZZSELUv7SMQU2CEkGH8jKNra4LLRmVBySkwAXo5463j2fj1LLjruoyo75HVHr68QvoCGgF",
  "key14": "HGFyfkFcCoPM1JCe9MiEwixdszJLsw1Ac6MHZbJoNSVSmez9PT8T8hkfR1ANvUBn7QQkh1MowAdGCiTGnca9KJg",
  "key15": "2c7Tm3Vrp9QkdZAVvQRDhsmW4rPqmLatVL7EjP2gPAUxc1GsfQ3m8zXh4p6aVi1fJ1fdgZdJwzbu3WLTza1scnek",
  "key16": "3Yxt8vnrdjMqNJrdySiTKHRk3R6cPZhUMJg1bF1EqYHKQAJwTacvrySwXx19JCK8cuYEHsKeR8A8vEcKC4DDD2SX",
  "key17": "4wHWNSwEHGrbqopRyR1C6QF1jigu5jX9VZndbKM5M8SFpj6NwEQyTtyujGerS3U7Ef8k1J6kboy2ddTQVet7G3Hf",
  "key18": "3ZTpsf5u25BWDgrhmcZdBtv8BY6jk1KNKtJ4KY4EhASwTsagWu8bTS4eguTWCb7pcW8wPyzwJ9rFD1SrKanYhBN8",
  "key19": "MoaiyTPAuWnHhLKHn6rXz3axxHT29q4Ft3jxXRrFJ1mHZaUexrLCwZAWbDhnWdctwsRvkK8SobACfWwXufQN9uj",
  "key20": "42sX13nmbChhxWxP5j1gTse8E9PMbET25ypD8bCmRKAsRTHYWJ6REXbwV9KdDHjcU61KSjpFH6VdwETzd9CiQaKK",
  "key21": "hqtS5sAnCzYfcJPiNHQFZUVEXF7iRfbvQm9AUJ5SkizSuWWsUVej1Cc3sjZgUPgGaZZR1xYUa69CNBtU9FnqPov",
  "key22": "2Y56SQQEyGTXTcjkWkZkDB9cAMTaNEteYYgn24iMUKtRELASwFP9fGro8HQF5RgrbBvHNBxDCmKZ8izVzD6WNzqK",
  "key23": "4uYBMoMTi3tV4ND7oKwuVUdRfxgTXJA9DaTTpPfXbzxoEQVp7iKEpyYGFEXnqq2xUnDtfDXU4xxen8AWLXojBMcC",
  "key24": "4xAonVE57q7Nxbm8J1Jpsamn16EHvZZahbbXuUXHyCmHaxLbxyrxogkPZy24ZWLJTPWnXxmwwymwcZNMkhkqjb6K",
  "key25": "2PF9EKPEvTdRTiDsW7EkEyEXTxkAMkFuzvRRpqGfqZ8o6FRX6xSBFKUYUj4GQ3jNbA3jL8i46TSSkufnh6Dy2uz9",
  "key26": "2mWCkCQ7ee9ocXbEmJNvbCAK8GmEbrc466Aazy9Vjh3tTT6XdjfVD3VWLfuoyWKmwpKu1UMLWyvKG5tUrj2zjrF1",
  "key27": "Ciyz9qF6sodYTVpViYhV1QaHQEoGeEtSrvzNkyuUvJ68HWTWouCcKkTJEuCgCNWmaCocVZjN3ZXg6CpZw9J2vtM",
  "key28": "47topyzuE95RZeUBYRVbrv2SKbTFbV36sb1ePTwT7N8LnzFpN9U2S8xyQYNtZhSEzxscmcSwMaL8BpqvByJ4CB7Q",
  "key29": "2sv4VqRR7g87hd31nyq1ipFyEDFVN4RXhksNTsE3SZHKzpY9c6b9RgwrS3445v1fGyP9H6J65FSDYTY75esUkU2j",
  "key30": "EpPhvkRJcmUXWnTtHr5XYxR88U5iPsbRaLfSvHBQHBgDASHbGoWfvtm8w3GVY8hWJCWSB2FxthJVLoTUkka5dTi",
  "key31": "224UvvjaLUg7G5THgqH5zP3JyuizjtdaeWAWxbHXQyv598XLrhMe8M1RYRSHfMbeoHGB1tojK94WpGLbBdiTM18i",
  "key32": "2fHK6LzeBoRA23HY5aeoH7dv1DbKqvhmUEdRE3Dpw523TFVnTwqeaDkUt6aHCvsng5tE89sEJhDkqxR9BZTEiopC",
  "key33": "5qcBViHBVwZiu6HmusVC2xS1TcLETreBZGYuhvffgyZ4eGJ4YaT99KR8s4woz8ouXw2mnwCXKj17ns5rySm8Lv2P",
  "key34": "564gDnoHzyMMwqsczFpU8k1LFPQT4FExVLJs9DWu51R8fLabHGUjBqMYNFfM2JMmrU5LKcjQR1AFEnfe2L5KsjPP",
  "key35": "2A4V4R8qehbCwFn4Lez99vZNRMxyPw3wELCZCghoCTBRX7ZDkAd5jaC2NwhzADCNggKZ37zLrdE5sjmFPgwzkPQZ",
  "key36": "5i1djCkySTqLR2VA3nKYAwQ23iXPXVqxuj3RodKcUcm6pG41e5ziUKceorKdNTzXUWKBVqLzdqPQKyuq9avX1i4",
  "key37": "5zr6tri7nRZLYYiwcvBiiphkVuXM9MB18JNK6NYXTN4bHqMRUUfpiiwN31BAUHbrN8oSCCD5DcxMu2uqgBiy762A",
  "key38": "5NFHMKX35gwkcSpgtnWdmNTUEtZqktaHPCHRVpChBV1RQyUd2FB3i8yqkmcNVozKPJX4uGfPQshg2aV5Q3n1ThMv",
  "key39": "2pNSas5HU8KDHsC4tvqPpJds96EZLDU4QpZfpbphT5hWoVfrrYizgefx5H8H391XSSNM4qmzQxLnA6ManACb52aA",
  "key40": "46usyoc9HzBgsE3NwjMaQ3WaNis8AKiiNts4bXJAjfd7C6vANEgN5Xbm6DpRH7odPrR5REamfLavq1b8w8UoPVED",
  "key41": "2kzL4szFiwmaAWNeboW9gdzFdLSii7w2j8fg28J14XUwfHREjXGxBFJwcaAFZS9wwfpp9HKvGeDhoCoh7yTTLUVV",
  "key42": "65GGvwWgsaLqEvRd11m5R1sMpX4ZUa6kV3NUFexQ3KJjmBDHoFjj1kKpA7zw6cYPfUnw7hzpERADKV1MPRPpxjGk"
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
