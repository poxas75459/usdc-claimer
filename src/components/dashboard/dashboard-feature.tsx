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
    "3qYBTjrgMpunB8ntK26iKJ9FA8MMgria7A5qoMkLUFMGgo9ATbY23pTcCvi1y4Dv8oj84F6Dgd1ZMLTgb8tX39c5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VrBzDXLXNMDjT63WpdfByJewK7gbQJGsgGA2n6rTqYRjgM8z7H2mWDeQqvBfxN8aHRpsSNDWghS9YqvMz7vopRX",
  "key1": "5anhycuUyigGEfwJSYkxLUpHEJuEEu1daRTb4VD8gcEvSnJtWu8rrxU15seG3r3AnS53FX6XrPakHPw778ZRH8ep",
  "key2": "4A3F6ACRRrCpiBtq2PiKfy1SPmryDG3wSXxX5CBTkAXUqnyriitHzcMewrB1GqMVPvKMYe1qqW3YDP9eSFVWeEYF",
  "key3": "Mi3tdB5aDcjQcRbaybJnp7TK9ECe3S94TvRuKqd6AbE4vA9PcXWpstPC6MTUJXnFvh27nsk7dzohKxb5u3edjxH",
  "key4": "4ZXNrmxzakJtUEi7z1bSmeURYsoz42SSZh1sXEAqhZGL4KkYaPmnC4pYaT4GHBVwUUnvKYRq9eJvSyUkhGQQRKuX",
  "key5": "PoYPTk9GsdJAfZmzdzm7oF34haz9XcX8XvJUgaNwdS3zLwcPC1m56xLK3TUDVUZSgY3cz9gL9MakJwG5tdUsTmY",
  "key6": "2YuYGLeUCWqM4fkbEHoqHMAhqqF3FdiMhfiF5fq1jnmTHAEAj6mdqupNcp8irvrwXufvXDRHCBSySjfEgR3mqJRB",
  "key7": "4Jai4Th1Mkntu3Lf2NxfuSdFSdSrDPmqSNWzqxKBaMuHEsstQ5Pw7wctiYVJYPpzZCRWA8wiwhEifBm6swWsuV4p",
  "key8": "2sqMAh1VDkHyeTKovgF7nrrtfXMQg9wY8PCdbNxdj7SFZcZJXK3qokvmhsDyRCy3wxdr9guSahcXBeF8nYxaG1N9",
  "key9": "2wy5fCYGgBELLJCnGeKbx2WBGY9Gq9WaqxuW1fuDDoPsVDZ7RV8GgHJrFhJxwakMeqwYxNk2NUop37kuNK5HMZaq",
  "key10": "evRToEdCrdW7Lbicufc6aKcsUM3tfUZb9nRJ1CmU4Z4f2KaZCg4RXmotL5KJc6zByypatdisgwR3tcJ9YdgZF6Y",
  "key11": "43koUBN6NZM6mUSLgsDqc2wRgJCTWmFNbCdZNAFDqSzDEhkCKSajQ3YUEbyLcccEJXEAsdLkMpVxFpfm2RtqBKch",
  "key12": "FhWU9zB3hukDzKcg6ZhAsyUQVewVf8HQb4V4zAbtbJb16voCVXwxmG71iNLetintRU2hFEFKkhB85vz1M9bAyto",
  "key13": "2aSoeaKC2ug3wtz1EraeZ1ruNynygn4RtD7dkCYqa2TRKto4Dx3cyBYSpVqS63Cqs9fz3QBLNRR9ksR4DDjGSY17",
  "key14": "4bGY6QXTbbwZk8c98z8NFNDQJ5rWKP8yCGrQRwUeUXkA2X9rdGEWLPYWkmCHipByhQBUXtoCJBf3oxygtsRbhsH6",
  "key15": "5vZiLr2EH9qqscboSmRk2QFvyjrUnnRKAQGoFwY9QHYSoYtdUYHmnYg1MX3j5ChzRoT2yCJ2sZjBaxwVwaKVptpw",
  "key16": "2pc2sxV5zivyKJkcpN1CP2v3c6SZGGU7cuQpBDLfkXhhGDokD7P4nDDecvDW9miYZt4xCAcnGwwXLAxKRixJrApL",
  "key17": "4bwstzkDgBU4J4pxpqaW2iGtfVK73pZSe2kt3DzgDr6dxkYYNveKkcG8xEeCveoxh8F3sPWdWanK4d8Zcm9u2LkD",
  "key18": "2cjcLP7QnPruszXF9Z9ju8wLcZurbVvYZ6pAyodYyxTbpULmBj87Pv3f2gKzBTcvAAB9RT6mauurKpnwoQxCPdTS",
  "key19": "4truYiH913QshmmrgcYUGCct2jKCfsdfFgmNs6hTByswgP9BxFXBq4ySZNHustFpCtMLPT6vBvUYWoFc3YtTVYr6",
  "key20": "iz6DwCXanrBaUyi5yvweoryKfLURsNXvKsG4Nv2fbV9GKTvZV4uwmYewhHSjBgWJGigrewvxDoDujcZT8DEuKcK",
  "key21": "31cE9fGpfGy2o8dGrwUFkReYfg87PMqJQptCFPNVhd9ar1T5eqZyy89WhwfSvyEbEWT6NJgqwG7X5DMbaEayRQkw",
  "key22": "Dg7Srk4ww2iGVcAQrY5KeeeSZk8zAS5qPUB9iTdXfjSvApx8bv4BJ3dM7gY43wwg7iKivBoVjLwazWpWyTp7bSE",
  "key23": "3MCcN6EZRfKunrZmeZX6Fu3RvFJyABKUGJH4AZJYhb3TVYRdcjvy5LDCNF1CpyRHiUALywZqGYfrzQsto7UPRxRG",
  "key24": "4GNnxKoQVjNLQ2xUY2FTuGhLXkwYcgEp5Ro6Umw4kqzm2fggugewAQifXCaQBiSLbnzHVf3R4a8B5a5QKnwoG9An",
  "key25": "3yobPx24mZGpLZungYupjL1eEiQoEm78qkqDpqDZFQL6m8ZWko15CSm5ZFR8dJ156xiHKAXDJJMGw5WpvU4aq7Ji",
  "key26": "J9ME5Qp4RD3yaFWvsQX1RkJa4sy8ns5J2Z7oRSfdjz5VeLnwaauXsT8ytJHxiwAGp6wDpRTat5GSsT88MF8nhPw",
  "key27": "8PVCcg9Hvc94AfpYw3RqLj5JsBnjd7KUBTrefkszsBS6bfnduXahoMVLjzs86zfxUTJcBPQQaM9bvhoHJgkUhaG",
  "key28": "4jyVyLFa639q1jXuwbgqf48w9NA73GNQ8iQLKhj3UWV2ND9khsFd7HL9PP6MBQUdv78XX8zPRbSgavnhL6mQCK9w",
  "key29": "3ca277TzLa6XBgqComgVDGQYyxQxKBwnWdSBDCCfK9QxxAZCubeQPo3dVNef5FdnqrT5LjCzKxxZAiLCSZenvK8W",
  "key30": "64fa7Wbu2ZM8u75umTmM2wLyzU8H4B7HgJvARh6FrqsunTS7wXtfDfEznLSMV4ALkAPvHfnGTpRyRx9rDajy5Pe6",
  "key31": "Mj1yKTD48fL3gg7duDm1ESy53LH8UZPfzXcVL5Qbsu34Novz49uum98VSoSCw9pD2mh1MDSFUSDPhZH4MUGuwXh",
  "key32": "4jkQpNqXmbTuezksrdFL1uvvYsx98JB9ogGLqjkbQhef8XcLMf2YCZNxCbu5HZs983FFBUwwaVxwXAHvLnJwfwZL",
  "key33": "jwLdbC67QAsu4Gt6ADNwKKC7WdYVMsXAMoGTjsRgQJDBpFA6JoAZi5G4vTkVXd352DEnLqs9UmiugCPVvWsL6Qb",
  "key34": "L1UE6ZYK2A9A9BGx337xaYg6zKoRZx9RSdDQM3QGNGJtZpRtZjkRJMxpXfTE4vdaX9xy4G54q3bxzecDMXdz8Rg",
  "key35": "oKzK8XMjFcT1UNztxwGJKbs7HQonHS3N29L9YwP64e7D7yZTrK5RcH4QSzTYkjPSNKTyuds5EUEQGKykBfpvNCu",
  "key36": "3wL1AHdMuA2TPqocHjhpG7ps5ghQ8jrGMxnthodn2V8z1ajWwqLrA4tTiwUdDUryJtgRCCiEhzNddmhYDTZtWBd",
  "key37": "3eUiPeNDwHmZYivZuJ9xz62URSDtVa8WVBJz65Gx2yDS5bnH9zJG4WSkg8Ldgj1oakSaYr5nV2PpM2t5CEd662VH",
  "key38": "3KP1ro91S8GP2p2z3xaov456bKA3BRGaAabEVE73W5y5ErbB8oM7ELUa3LonP5atjySEEJSeM1d3xiz9GbLx3nkG",
  "key39": "3Bc2KpEbCkBwjawQ6JUksVnGFbUrVhZyPkg2tBsFUNnrSYMyHQgu28HbSBMzyotzrMapxy6hotfRWtfq1qSSAAqe",
  "key40": "38uBXiUVkqFuJpjuPv9HC5MJLC9WxmJQGewTpzqfQBe7iw3UzerFCM693uE9dNqTSSrxB1UgqRo7ymiu2Bi8KYiv",
  "key41": "4gitgo4h7CDvhMjaBdWw1wZgp5bqyQCw8XFJiZvWonF75mPKNASAWdGxummi2vKHZkirr9hnjFYuBbcFceMCCzWG",
  "key42": "2AF5ifjVfh4tozHyewc2WL5pPvwTKcokCnybwS2YBqYdb3z6WdReyjPHjBTLhgwXqjFHp11GXLU6MhCu166Mk9WC",
  "key43": "2Wsz2BQygbxtVQjJzr4RVQfSaL33pewL8cs6r9Q8JT3UzAnypK2NsqTbz6Scethr7oqG7bZeHqjHxskuBXNWNsba",
  "key44": "2kPz42r5mTeVQLRSXZJPEr2xrkwLBNoaK141DWm2L6X58UScv53F7jNS9Frw6ihQyVRAVgS5C5iBNWfDpqk4Tszp",
  "key45": "3pnwUW3YkFCbbNr17oUrKNvswGomsKPDC4qPxZWgG3wPmU68wbKxFZVEJdMBZ65Dh2KBVNMpJodgswo11nQiyi77",
  "key46": "4hpXkWgBZzWtyZruR1Zox7qzm25c89aXKUgkrTFhfRiJkEzbnDtXmkZReVtVSX35Faf7HcSiJuabdC3Gf7Au4MJN",
  "key47": "4jagsW6CRRwBsTmiaWa6KJF65MvBTKdvE2Q9wZySgKx1oDttWBs6RHVEJRDNpDHZpvQFmPJUp5fgLmaA7XHgkUB"
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
