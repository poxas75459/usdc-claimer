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
    "3EWq1d5JJAGEVbwwjPZAnpf8nSsZYrhcpiwYHm7WGTB1K2kKqnVjY9csAuZ49XTa8z33MrwpyrYKPk1v4fMS89S9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kKLXi7dPxwnzXFZAHyT7kE64oHZdZdZCSzwNN2niRWcmf4wiZfu8SDCptiV2WS1AkPjGRrUa2tzp2vQea46MBdL",
  "key1": "3fTVqtx59QZaL37hTbkYo1zbLtwzYodYAWMYyHDjV3729Hkr29wnPZarkRbfjeNKyMgXmVUaMWaRAGiRVPXrUrNh",
  "key2": "62uYibbWtnT3YijpTv6fHz4F6uA1CWuDD6VZVifnK6dZjizQ2HC87ci4cVQm5qcNXsAEiX5fY4xxfaqMDEZn7oLU",
  "key3": "2wiKQhhuXboeZdKqt25yBBqRBduks2CYfXV3hVme5s4Bw8ctyQgDGhNXRwS1Rx9o5KTenQXsfP9rjRnFPLkeZLJb",
  "key4": "3FRQU6NXzi21WEFmFTDjrsR9D9Au64vv12xHES9DP5uR4KwXNpJMp63UTQan55HB7qZxpbdpAxDgCVQrE62jDomn",
  "key5": "424ZVgc79Uph8caVUtSZ74XoCrur1qomue8ZoiZzj3GhoMtsZ72DAiDcuxEVGAQPGis6TR9WuiiRgUMxAbcnMCvr",
  "key6": "2BQkbsyBMkSkhS1MeeYbmRUQAfM1Cqj5J1VVa8KFi5qZVTzNSrXdx5KnmqjgAC8R737QCvYNv9NsGHw5Zg2QZfLR",
  "key7": "3xwFF9VFLhvxFvr9wxFva5NitvWkcz4J5bvX1LuKzRFMZRqyPGHsvbSCtvquGNmKBD3bau9mYFj3LBjKrxH8GYZC",
  "key8": "4RAxSME4SjvY6BwCSHoy49WTz8FEsXk94onB88mRM3ft2jrU1Gqdu48EauassYhxGbPEfBmGPUo6tKQEX1vTha5a",
  "key9": "46UiwfMyaN4ZVYNEvzoGhQh2boo8WuV1ZLSbyc4HyY6ZQLeo2rnr7HN7JexYzwUskgUYPZm6nTK3vrZqTDDmRrGN",
  "key10": "5AaQyqEwFcG1FrgDePw8bbiMWysYnjL2AoMSijHJkDBaAmp3aWyhHRhhJcfoeGbGRq1XCr1Ng85WBDCa9X9FCZ6F",
  "key11": "3uZSUtyJjh7XGvmWAapryPwXiUGgXLpWWBNwv8erpE5GkGnccUKrbFE5URrmoa6FzPQGghYaEb6cUbvGMqxBzWZN",
  "key12": "4ZR91rPVykq4w2m1tUnkzFYHL3uH9aN2ijSH57CefGMSCbWFY8kjPyMbmcju9af7L54XTwaae5iSi6AaqaUUubBa",
  "key13": "4tURtCuqaTioNp2BfpgGhK6tKpNb15Ro4fDkS1mc8xv529pY2yWHEwtwhnZe34wTG5RJ59vzpmYsKPm5do4rfii8",
  "key14": "s1vvp439LXHw95Ksy2zsm2kfZQ5KYtqd2VpuKwpcYbSYzoycnJSuf41YjJ1mey6CgMvom6o6k6BBMJPV5MSJkcZ",
  "key15": "2fvMzmRUcykaVzUqWcfpjBfbsRoNzg7E2Eh9sr48DLG13A5FLSkEcoPf5KfUSeg8Gb4GNGTBMRPyVh1CEzKV6vMn",
  "key16": "6611ZppeZSUs2KwWigres1Un2duKeC2zFzQqy3ArhXWmQ7CqEH3PDFWTJwi9HncYETaFMu6kzgoxrkAo3EUgvakh",
  "key17": "5p3KJSGGTP2QVjT8BT2dQbCwBK1pnZWH4UMmwRCpkV1jXGWdd6YfQV1i8DUqP3hbZxSoET4g8obdxgkAfxTGZ9jc",
  "key18": "3CUpDjfVDmfDGLkPWrX4YcTkybDepBadDpjsXThGtZ6caqi9KAX29Vp13pGQfifieRxxpmiicz63m4pw7RitdJtx",
  "key19": "EeshbkHajQ1jA8qymXLyV1XVEWodVxxK39wYdXgnjcDtAwfmNwwZGGCZLng7dPmyNEfmfXYqsHuwRoRgNFS8WAE",
  "key20": "5dLb8Xx7wYtZbpmRpQa2bpYWSzWWLYVHQWAcBp4PtUGPcKxrKL4dp2ECv7Pzj26v6YtqcLCL8dt9WdbxPaouMPs",
  "key21": "R8Q9iLm42HgzzyAnR84xAUdr6Nt9o2DzrfynavvF7G1Gv442mSDEkFGbpVBhAL6BAMMmCUS9F9AJhGfhavu4Gr1",
  "key22": "4k9bxLNunW8DJjzgmiT3wjfLkPFAg5vxinUPyMSm3Jw1xjGNCTiBDEXaAzagFkvxvze9Pjp6LTRQCv1inEgx5qVA",
  "key23": "5nLxYoLPLuxLGuFMjnLnurffu8Dj8DJPQMUHqAom6JbXzdNnufiYeFMpxa9WqN1peKUFtgMxa9NXx3goDRbdkjYf",
  "key24": "3mREUtpfb3TGNoV1ApkkPnsBEpk1KPC4Y232gywXBBNimY2KGCc5Y5YMNn466i1qnwsWpW7ZryMMptb1sVtrWWoz",
  "key25": "3omAbFa9eJEjhvSBxyRo58d4PZJt85p7dMhvM7Rhm8Lx1hkdQgR825mKqjUtEMAbPmH896C2VZnLttg1dADfB1Ud",
  "key26": "5bpvxhJ1WUascRP3Mvb6VyMzjKYH5C22yu53zjPKFjsYgSdv3EHkyThuBVe6mSK7qitpLDjYWV37YMymgiSbMNuk",
  "key27": "5HaHmNYeKDU6abDvXvzs4URLarypNiaydcbsM6sNMYrpNpeossPXpz1nvbs9qtWv5t6ZRbDe4Z1sPLA3kpXXAzjZ",
  "key28": "ibYUF6hJMcLmXhsuY2KCwcnxrG5knvchVN4pbGofRD3SQ8rhgzVWYNTiEW3VXiz4k5UeEcDaYQt8hPbA46wa5Fm",
  "key29": "s4e8B1UmYK3Tpe8NsR4xdiFcgwuHKmfdHS11moCPHnpLWUpjtmW6UgfyKWuMWtPoa8rb47TMHk9jRywi4Umrefq",
  "key30": "67bVHxgHxf73dL4nWvUP8jkNx6duGNrmM48M3cztXMperRaYy2Tm6LUapGvSoPap1fjmxaA9zpvXTbpLpzhdExAg",
  "key31": "nVqjkSj1F35jYDcMRDE2YmCZ7cwLMjE6dxZDBBYJV6kySW5BRYUBedeq8fJ3v2ZK2jnkxGipPGAMwrY6L1XegSE",
  "key32": "KUMzJxuRy2J4KQ91pdy98h15f8btkXTLVbA86h7N5k5q8U9KGgSjmqZVfjCZdEjKqXv1DFztGY5ErP4v4pji9H1",
  "key33": "5DnEAoqNR4D9WxRiaHnhxYuFGfEt8TPiJkvxxW3B7M59pufpVebvmCJMkVfU4jUK51RASf2RkwZU6jKRr1JpGRsp",
  "key34": "21EeP2i3u444xod5HzhB41WWAwg1YcCvpwdRvfHeHRPDWGN3vmYZ8QLFUw2A5g1xa96F8FrMZGFxLMeSi8jEVfXC",
  "key35": "63EhmLoLHZfHQMKszUHwWVsZR5EKM8duBx4zkKhoZYyAwQqw96vfwW14i2aqp3VRTLj9qsWfyeFuhUjhFYV3EgUx",
  "key36": "54vdABCsurM4UquxsaXdt4jdU4vChf8YqVwfG1uv7DbJRQmPb6st4tkW7dv3FEXegG2oiPUfiMA5cwr3nj9H4EPk",
  "key37": "3JaUTpFYQLuLcRsrAxKVpZLjTWpAu51vrsdzgzsuXK1YKnJjtLzihjqRTkWGUKJ4aeir6XA1c7J4YFg3TWrVKnjF",
  "key38": "4rmz9PaSmCNsmgJo2ugthE2RUnExqCeyrWMujCSqq4yqnfSrzsDB1k3NmVh9S2RRMpytcoPtySmUiQ8ZNkqr3QJK",
  "key39": "5KXS5j2tmyAmoRMpsvR5bPYovdpvykokNmvzUb3u5AbLq5Frh2xea3zjpFjPhWTseDZyTN5ymJWBgu6YbNJjzkPK",
  "key40": "sV8YhuEqr6kMjfK4v912SrU5MkDcQTgdZjNnxXJZWSwDJgDqwDxZ9gfhyHhLPht3HyJgnfgd1WmaNyo461ZrR9s",
  "key41": "2DyWqq38R74tXfRE6Gd2yyL3SvzLSy1QP1yJR8GpFHB1P8NVi6SVtMAS6HgAZTUWXhb6HGbQaQ7s54KnQR6Pgdue",
  "key42": "5PjwHpfFhxmJgEjBPBktb94dw7XF72i4xBDcdXv6HE7JTxaqYKGgVBLWuJFDxgGBHtDNSzLm8VgKEZjoDmi2FaPH",
  "key43": "2Y9sRbGhmW8Ha6Cvgqk8Y4UyYoTPXnCAwUvLUQB3U1wav9Ek5cH2mB9JwPqwfRUQeLDkN4YgKpBxsncCb8VxoQMN",
  "key44": "FkHS4dXjaSJVXGuyR2Z8EGEWP7q7MCwgiBxq2HkHB57o1PrZREKk8SC8FNnpUUTQRLV7Wo3F7ZyEEXUD3EcZcWF",
  "key45": "31rcf6FW1PAS9GiESn8Pv4zQg58ri7722WE6VpQTKQs8s3j2rEUTEcR91gWVvSDqKZkgTz541a1bEvEjHoybk1TX",
  "key46": "4oThpsER2uoynp8w1SqvYzPi8xPUkMUtV9XxmnPBTqwpbV5DxBcobUCCxyQBcuAJ1XNJu8dLrn4woSNYePpaSNws",
  "key47": "2PkVBuJ82jNuvpg8RR5WYet6tkj5twqsAvSYX35RYxMNK1Xt8JBn5gcwKDeGWqB8Ff2G1LWCqFA1ACYnTtXmUE6G",
  "key48": "4VyUZ5G2Ftg8rcZJRGP9EMWkw7GxpWQiSCyjKwaTjGvbEqy2BieSyCmcvW21RdN5vDUNKG1MUjxBazvxzNSEqoyh",
  "key49": "5f8CrE73ykyekn72Q18BKMCBacYNR5AsZCgJdRyRMxQnKHbouCZetiv2SDLnAvc8qVEhE2ZfTwW3GoXnU5L1YfuV"
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
