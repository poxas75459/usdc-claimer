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
    "3qgdTxKzYnihs3fzDjA6urg8gYDS7ZR8g6BiFz26Droc1TXgkz624P81BQ87cM4hwtkAYKVuNPH5UrqMqiF8cKek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c6R1Bjq1epXvZi9FWYCeQDERumXMjDnGjyLDsyvbEURcjiaM2RfRxrLq5MwBxXgd42fuuDGZSnEbCV8unDxtJmd",
  "key1": "5vHG3wEJWKNboDUntcmMZxLRs12cjjoqqVMEGsfsxra82PikexmHvfoiia4qTef7iLtVwWDASVgMyCcZLA3zSp7j",
  "key2": "AKPKXEKDBk9NxQpHir38Bc9nyUewkatJqnyFo7eUzxvVTnXGnJ4y4R5Vjhqz5qADn8C7aAVXRPeCTCWh91Lx2Af",
  "key3": "2frRWKP9zeRDzyqtCAQpUSMjuK5KpYmieSudGY6yUzPyssQrc4f6731tfCmkxKy1GPBqkzBCXi4F8uz6TbgLdNKN",
  "key4": "21LYxi3XNqnTES2LwLKsUa3FmT3YuVfgHrQG59o7KYXKmmosLBNvGEGnvzo3Lg8AZRA6wuKTFVhxhYfFkUzsPkq3",
  "key5": "2DNFUU7EYaMGrJyX6jqeTJSLiAWN8z382ka6tup355myrgApBEyNKgVivMccTqGuiFpp3eHdjL3PP66MW4m4EzSL",
  "key6": "wtyWPqFo2SToctN4qJ8jEw4mdkQFRBbQCH1bpNb5K95d24LSC6RqSoMxhEFQSAWF7kwzstSZhBKtrN1iX9Zu9ZK",
  "key7": "2pZbmxvx9Xm8mF6kzb3b1Gg8hmVRQcHc5Zs1sbatxiZ7mZvaJBXQEWAxcLABn58eCzRK2JUam8Ey6x5HhtxUyAc5",
  "key8": "5GFgegQfFYk3sPyBZAt3igxjRaZWsvFaxmKrXPaPQv6ssA4QZfWhPcKtrXc4zNnE47vPEsoHDmkcDdDLqDjK1nJ4",
  "key9": "662TmWJ3R7agcVoL4jS81j3z9gCWZLnYDv7nq1HJJ9TyDnMiKJnpFga4Mnh3fA7svw43KVUEpeTamCqp7EgVVcVo",
  "key10": "rDgSXqFwfae3FPY9ZRTF6jzxT5M53BJ4AXP58aFHz4nPDo4utNv6jxbE9feEc31iDjtq31fJNg67PAUzt2XTszp",
  "key11": "3PKe6GVVg5eaFaiVAnZhn7MdR3gRtkDEwymcqtSPKU8cE92EwYNfu7p8XJAn2KqtL4uTTccSv1nGK5YpFWa7wdWP",
  "key12": "3Bz5jmKPxRGFnu54cTqRhpcFotNFRHGY4XTtuQReXw1EdoP83N3wnQVecUx4J95mwMYyFAMYtJgZCmSitkq2tKcq",
  "key13": "4GVERATv4iwtnBknAZHq5JKb38nKgNDSAefwbRSvcS8ciZsEKfGSeM7d1vQ1NnEdjUt6LhCE1nSsntd58rfoxMqE",
  "key14": "5kqEcNWVkctNq7SdbGaEo9AtPvbjKYxJbnV3AgrxE1y39RUvfXk9g696iUM2RMxfgNhDYE4e8ZqVmJxzHQqwa8kc",
  "key15": "WKyNQGw38TPJeZ6N29TiZaGcUuL7wWcLUXLEMXSMqupnUihXR57beUMMqw5XVHFkygrUkhMKx5GsmKM7S9VP2UA",
  "key16": "34bZHVs8gnqg52BnBiGBHVKYYPxdKx7rJdwWW2NZqm8GS2ZTSaQfiYwecEmR43qE6Zzbt82fmwP11CsX568ZyaaC",
  "key17": "2xqPT8iT4ZBHwJU7JBvU3sC6XMUQ9VVu2bqoZiGUJ5h2JCE7eNtESacRjWUG9s3jdV2EeUKhcq2YbwVGHmJP39zA",
  "key18": "5L2wrm3FXmxcxP5wu3ZPhGQtQUBRiKvQWau1Bmr3ebS78yWBXZMnADCKXtiSEfxdwaYV2UN4fWoNxXWrbb6qFGTe",
  "key19": "32jdDdUG2zVdcKuieScz6JWkQnfnv5bQqNpxZpucZKNtC1BLWgG2D5z8rXgU8iCqbjaGr4V9WXazkE2DmZGFZjEQ",
  "key20": "5Dbvs4x61utzoQTpCmKwmsuZX2AhcXSdp4sn4RWQsqBrhC789SiUbM9WUocmSQwUudw6As6sUBC46DMTrSmnKLmS",
  "key21": "2ySVkS2kt63Wo1LQC9hU9ACv7Tf4BZTALL5TcyuxcjaehjevJYUWqW6hPnU7Jf7SHiGoxG5C5XNgtXUmvCFKu7MN",
  "key22": "3JDCpzSDUAUeXauR4ZaJuWfNaAqqNSTZdfzyoamvfknwjCRcH69HgEsnShoToty2HwJ2H25gjdGQKGkdJSxBzEEA",
  "key23": "2jFPYGgw6ZfRk3KgPZYUMgb8vY1NMCZXxUTqdJBhTJ9ufQuv2iyHjuyP6XET9iG29icxCLWVSB5WHbrs9haZL2qg",
  "key24": "43GiYHUSUG42brVce5CYqfu3APvhYt6wSLjijyHyUYWx6Qn4pSQKcncsD6acJYsagRGksEY7zRVuhWfXdrffnoq6",
  "key25": "4BaZ9AjLufn6QVNnkUU1CuVwT9BQeZQG5fkcfRB5U2vGRx8vVD7RAiiQWoPDwFiGVDMYM8Tj7Y5RWCBqZ9sS5Sy2",
  "key26": "5HB5rNJYcqMJLdcQfTQACZ4i3Jd1f3tZJJ2nPVpNudzdPcJwBojM6ccEVAk3ufVeDsPp64RYQZZAXDaAhTwqTncf",
  "key27": "5HuF8jUtyS1e2cuG47yfBbHHHiUwfJ6T2fzBwV7fWisXEK6hrE7R1VuGsxkNTobYocjYMn1YAD64Z6v5SKRFjYQ",
  "key28": "5TmJg6FQoLG6YaSbUz4EagDMK4yHRGfUcxkd8SZmMUvWaMz4o1dwYhS2znBWbeXBdvUwqLgfjgXBWAr7RxDYa6CR",
  "key29": "5CPp7S28fFN2FePtjXzPxECKCgceteoPggt79yBTufEyVWazFQtYD3bWKLnXyZg4U1x1ejUQBngzx5NB3chYcF6o",
  "key30": "2s5Rb6N2mCJu4QrhzkUjMUMraxk7jaryhGTNBac94r2WJN6BJzgwjWHWGRzWBZ72bLY6La7vKjsibF4Qqj77w3mw",
  "key31": "2JK1msv31cWyDtykpzRo4nQeTw3xtyJc1xb21ncQszSLsej2onYVVZNX3ge36ybakEq1X6fhKXfgiGGJgVXZxN5g",
  "key32": "8fTFVYC3HbbxcGv1aCF8papSMMKBgZEUv9QiDxEzJCnwkVRgc79AcS6gUyaYwqReBs4GemPv594ACqgvwJMV2EG",
  "key33": "2zsGMYnSvHCH4HSvvd4XuSecfP4Yf74RH7Qmr7FeNNEi2gM2tcEg2rHtZm7VDezVfmSTFqK2NaraHZRpb6ZhKsGG",
  "key34": "37pHkmyrHJhEWSuLtmfJmUXkVQKYGjx45s8cyqJjekEWcsZiAYsje3QeaVcyvNHPmjzDcbmJvDNNQQUhE4tRnAfy",
  "key35": "3svqg8AotpWqTsGk36HswkjzepU5hhyEFofY3cLisBQACCVs6NVfhdLi5bzuJKBKSRdFoMjqfyf66QUY6wW6G1EP",
  "key36": "3a6j3mRgj3wjaNeUr1TqybC8pCRcZmhuwfLmF923aiHz4JF3FSvrkxsBwWCWbnn6Aktz18V4nQT9EnTBENY2rQz1",
  "key37": "v3pJcgTLbSsJCW24jXdiwFZCmEopQo9GmvXSExWLtFj5hQE8cfw7amA6b3p8apeZarJA1vrS23ANW1QqdHsgbg9",
  "key38": "XrLsjg3fQdeLvsMv7vgzUZm2sxQ1YYFj8nySViWjQayTvr67H7TWUNXqVMDPNeb8T5bTiGu5yowP7NFUKfc9jtT",
  "key39": "2JygDx1qtVFQrrpFADd4XZXVb35wjRMFcKAfG6nQT9u7ejKDwoqjJwyqKF8bck4XPDT1drGCgt5ZjsVQTp887K5G",
  "key40": "5Eo4gHdvBS9M6wGph23rkEqWkktE1jGj4KV6EzzzGvTgfVpnvpbsrXnJ97ZunQmUwKWbCPxyGV4VipJJuTMNYP7Q",
  "key41": "3uiynnW1yNJ9Rpqr6nFZKquwDScKeANzXLeCcuATkT7pmV5WeMsQseSLYkGPbQTAKqnppyo8eUsCyzQHZKPoGXes",
  "key42": "2FKRZtgUfqrjHyJiudYUV5Edy3k81mwoekWUqyShcLRfSVY1K6WXX1e1XiAjv4ZwEw8r1MUPesu8NkYKQ6UvPrqz",
  "key43": "VZLS5i6fCRvLQ27MCAukTrhPFj4R8HB3XeJMMK5V9usyUj4gHVuZrXPQPQ9wT2YvKX8kAwGV78Z45k18vb1Gb1B",
  "key44": "46pbpJjy4QghLUb5pDrGDDxqF8Umft5zzuvVEtJexNQNRfCj3p7x91519zP9BXd378gJo74zoqSw9HLKB71fSHP1",
  "key45": "5NacY5DwewGWRNd8K3BZEh2AuPhYgybwrDXan9vVcTTZqRvXDc82J7eJRarPRavA3juV9iMMymES64ugk6moGaTd",
  "key46": "4bp5tzh5syr1SyqHFLEXFb7bMBAR6kANCpwSjKALmvMwBfP6wrvZyhuHdvFKhg2FnUhet5hVx9p6AgV3XEe4WcvC",
  "key47": "2mxa3wYZNt3c5vun9SC3VaxNwipMQ3RsgLCUHYycgUFvV3hJGQ3ZfmH1Y94G7iqbp7VBS5VgSEk5AaHzFapqRf4k"
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
