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
    "9GafFjeE1SiWxyopSnWjoX6K9oukMRCNVXxG89jZ2UcpC5oQugZRqvQA6LgQNrmPwxME3JnNXKfEFsstogsyvnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JeWWDGezr1tdDURDZLk4H3PnPJTwepLX8sBndL5xEHQtZaoy3kgmSDGuNGDScC9mtWNmUGYkhxnPeaGZ8ympWFi",
  "key1": "5NwwAsBEWKRUpNS35fFavZxCNBekGyZ9mcCYomb1Pt8XNGPur3FCRUwp3PfrT2aWwWcqiwNtPD1KMypisuwH3iEY",
  "key2": "2PTj9iYtLQVbuW1Hy9W4cdH1XWU1Umj4fCAJSaj4UEPZc43y3Qg51LaetAjivbceiegSrKTKbjPCZezar3va32XS",
  "key3": "4gePDtAQXeBy3DsAHigbhY85Ajb4sNH3zZxPHLJPdpEx9TbNsSmtsbds3KEEpZndfQUdpukbY6dvPnvXaQ4ZWhn",
  "key4": "3fqgrQBHWxX8CK7ZyB3cgJVjFjJ8uknvi5zSvFoyye6nJ2KTL1jdtNa4qXHgJJrynFpSzGQ9bnHB78wLDL9qZKeR",
  "key5": "4Xj4ztYwark3LX5EoDnjLbYjFmHRy4etm1BRCGLgV4kHZj8rLtwtCRSJvCKEdrqrGm9dnrxPNtVHAFz4cpVggKkC",
  "key6": "5Ht9kb52U3XSahH2otwSyg3d8uxpJzZoSUPuT7Lh4A7AopnxchXtmiWvjsVj9MtCcrW6RyFTtU5BenkSQZ9q1Hpu",
  "key7": "5oSQiXW8F9X4xUrRQ5q5KqqjxgAfSChnZa4N93b7D7qcij86YN7SsxALrUrLYLF8xSdBcCfdJUjM16Z7iC9PJjgp",
  "key8": "4WKR7AGKrj9SKoCkzNEXwzUqqqEE2ahoZXzLcvFUiMDKPB5QG6SG8mfMJUbbGks1W2hpabmCmKTd5Gh5vHYjS6u5",
  "key9": "5xsxz3PKwkUuEUZxaSxs1Q4momPkjyvHYrQFp91ygPEgs3CjEwmanKaPB1SoMFYS2Y2BedXRwHtRTLxR7Bx6jZTt",
  "key10": "LXABhAo4sECEZYFbSLJ1Cxxc2fpbFkzQfu4PvyAWFZufg4eJcR4wxok7ieKm239vQAbA4RtVUTWmaRfdiGRzicn",
  "key11": "5CzAnNTXd8LC6Z14bWLAtN9zLDMecfA21Z3txo8kDWaC9D62gLvkJhguCWkNqmC3EoEHwMbiY9mo5b4maKKhFgXA",
  "key12": "BGadqacqADYa1bcd1Yzgee8ETsWyeXqAA7URoqAoYsTNHZSX9aiHbRDwkNfwKRgeyh8H63KeHcfqtLrqSCwgpDH",
  "key13": "8LGRfvtBWShohCZrvsL1PqwrA7izheNgZRmJd3XHoUBzWXFN327q1xEuwZnBqxzBrDUmGm5YiovQH2iNnMUujx3",
  "key14": "3WRhAkgxC2nZfgRYWkyjQ5KB2E6KktRFmwZ3r35zFi6ikLyjNJ4P4EoW8wT9fG7WVsVwgbQphzfw1USfMZLfgNbs",
  "key15": "3ia6MLb8YiU2kCTcYZF6g68pSGTCqbs44YrYApTQHfQu3XyQKPi5AMnY3ksnqAJ5JFa7xXqz2PRkb8BHZCsgJweY",
  "key16": "2kcpQ1UnsYPjWjDvViuyEJTSYVUtFfMh3CQcJTXZ5Q6UWBMunQaWGDXVawBK4KJzwoUp9yqDk3zTuyEv2x9ivYKi",
  "key17": "3HSzoc3Lj3NNxXxe3EMws8PNJfHCemLfBD6d1bGogMnEMFRC52VAvnMf9Dka979dSx1mwtmr7gsZoxSxBtG1VAZb",
  "key18": "5dBkHRqrrXCjusmFMdoTeik6RyLiCsA4kPGUC9issAuUSvmkmXMGQGSuGfpF6PPecqZmFaHTu7UJq2YdEWBTV73q",
  "key19": "3J9cu2rupfDTfrS8rDitcn6QrCMNj9eB9hs5DyFnMugxJwkCL6qFpwMcwL9ZZhwmQ2pcr6qFoBWPZBhWYhJDqH82",
  "key20": "4qcfAEQvzY9EMEv1HR9ESga4osEP3SbJ58PCTusfMvmCsQTMYqpYjcPVzoEBHC2bSGtKgbpQaoa6kceFoNDPCgox",
  "key21": "3eFztvPeTeH9vvYxrkUrgtrmDJMNaj7YMqrRZK4P6oqXnRb3urYvUpGXAogsRB2F1dTtKyMRqSGqog3RuLLnmHZU",
  "key22": "jyjYeuQo3fnsfPbeyZmgwv8xmFtBKvL3efzN2QHyFGPNr8exKEtNKRPpwDhaKcFvq2EkAE3KmcCdoztvLJgmg9S",
  "key23": "38P3kKiChJvQ8yhjfHVCY54aWA7ZSjDvrHrr8tsj8SWR1f8zN4CR5HGVYyfKJR4HktLxUTcUgrrvbXrMoHBCdENZ",
  "key24": "4ZJev6gH4ozTux8qZSQZjTP2i6VXsCGBy5TY762yhHUAEUvSmZ8eb1Y7EwEZxJ6pZd9VJDY6keTet7fXSbPxDy5o",
  "key25": "4sKzWmKkiXifmSBVrtusHyapASFKrX3W1DNNB5oDcNeMcU3tthVs49WQtNe8HXsSWeQHp7yoyUnyN1tf32sDydyQ",
  "key26": "5c2xB15Ho5rUurr2H17JV62i3Sb8SwCyDKZPbgauzX6bTbUEURbBbrRgCusgWv7xjVuuvh2B6nUBVikqV4JJmz8z",
  "key27": "3MQn7NYqr2u7jCL3g8Z8A3ScnxygCivW3kx5WSLJSEJtHhktC8B28ZrWrUSHj2Cy7EZeA85pDeo4HvHAAJRZx57k",
  "key28": "5KuGS1AzKB3PjgVtTSpJqQpQi1hxDMwMmk72SMR8er5p4hGbLQXnANcmCHgrFfVjn4xwqc44ymNpQhTwoKufRwpR",
  "key29": "2ppYwkUSniq5Y2pARCRbU3sLK2oHcTMMe8EE2QhMqfhtSgyje1AvykV8V1wTTrPTqBFSNtko1oeNc7GAR8LJZgCy",
  "key30": "3Rrq7mkuUmhPdiUt8D5Ew2VrX4FyzZQRBEz52n8Gv9uym297d8c9XfLaDqyem4DQaciVG1BjQ6znZoB2vYnskzgA",
  "key31": "65A8tzMfhXxe9f51cHvGE7zaZdnrwnAjGhzE3eTSJ1gZVXzUew8yLbcuwag35KixrvBkDXXcDcKKk4XZ5HbQQFDy",
  "key32": "4HThnr3UvFp7ADwSnbtEzu9GVv2W9sKeFgwZDN2yPNcCxLdvQASseAeHxW4iQMHFDq7Xfybp8KC8gySJCHkZyQQY",
  "key33": "2NwdkeMUAWMG4W3VWDRbjGeMS33VinrwvuLmwHxQrzFgQ9FcygxKyg1yNBM9sDbnnKdgQKqvBRTN8ooGUP7tbaWS",
  "key34": "7jBiejBnFsgFahfnqh6Lj9KzLuPbqpz8RkoKN8KBBVVuS2mrZwf6rjX5ex3EbGawpHcuyyLexvA9tFkYkL6dwJJ",
  "key35": "21GZs5Mr6rZ1okyr7uHbxvx2dDEWNZ6dt6mWNEnfhzm85J9qF6UUap9QQB96Yp2CCTBhmko4NbubVc2kU2JrVaFc",
  "key36": "4ByzWYmYyBdaz5gKo2c8YEw8TpMTvG1iLuDZMEe1z3n1Jw19oimZXsP5hgt6v2W1F85q1Jr5JYPQqz3bA7cEM4rX",
  "key37": "cwSJwkx5mejM6XzN58t4gt8qYpzj32uB4UcEMFUHpkv7CYqYQawz1UmNAonHXaMEaeBLQJ2ggUnb5APm5ToTj9y",
  "key38": "4YxU9cYjDfjDVjiPVtk7CaF8xphrNpBPAUhMfifqAGDLoCFVF856HTJEAhQ7mXibMWf5PaMqWn761tmpEQGdCCen"
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
