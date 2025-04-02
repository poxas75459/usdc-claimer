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
    "3YFfHWMj24G6hdY1ijcumuYQyyo2knH8waBvaKukj9eTE1ywPx7iFsM7qaMShxqcVejRMt9jvwxjPUWvQgaZcjGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TCQGrghnJBwmL79dMCdJ2FSNqM1dRze8HV1RYGZ6ZVtE9iUKuX66fEVhSVSw9k2YP4wJtgLrUor7mB5zE75cXRv",
  "key1": "38bE1qNPdEAtUbzUMkE51oKC3D47tetJnQjpPbb5m7eN4WDk41n6179Q1RsczrrmVPK1EV7Ez8NLoszYrrUeMDL8",
  "key2": "GvZRsK2EwiQp1JrhoY2qTayVFdToZzAdJRrY6TN5ySmtykcjcE8gRZDUS1hFRg8C1J95rLZkRCFR1ZWZuQduyUD",
  "key3": "3haueHHr2q1tNeTGtggKRoRrKdjmSygHfNUExLsJJfNT2bz3XeM9gyL5fbq9qjfSUPhQHF3UewM4PBAmJXTQyevh",
  "key4": "4u4R3vK8upHuh78peXJ8dFG4Hh6H8JqWuNr4UUk9PipiwYa69U27yHdoCQ8G7d71hcU5eQBkKgBYaGcu5nUX1xQ7",
  "key5": "5vCjSUKzhdeyeU2x61j2bz5bAvwtarues1EqSiDA2cyB1evnFbHP1w5Fq9AyqXWxAoeGUPozVCWmGEAnwhjyawo6",
  "key6": "bZpnve79ggkov5sDB5G7Mat7zBK6EFoRwguYaK5HLcw4B8DnH8zEoeUHzG6pCpswtv5FTdTwX8GpSJKqL6jqU9D",
  "key7": "3HzqxbFLgVznjycV3KMVXHsrapBv8PXR7fx2AapeifeiVXncmxfTgdzFXbPDBVyRurTXuAT3DmCka3Ph5TqeRfT1",
  "key8": "5s9YaJQCPVuVZ2p1xoJe3FTaNjjE4GeQ5fZQ8X9BYY5FGJXWVAxkVYMJr2ArNDMrvbg5NfSz6zXryXvvuuWbHgz4",
  "key9": "xbRfru4HQnyFkKE4X5pjCpAVziFXsQ5AkHK6f8jpaZgbrDjGfCQmZpvhLg9C5k5cQY5jGrN9wRJtX1Lh8XVFSvY",
  "key10": "3jF3zBJSa5Q9tsELPTc6iS9kXFfiB4mnnbN3rgroohCEQgvuygdzcF84GRTQ8Y571hHTL2aJAsSMbAXek3VkHe1A",
  "key11": "5L396FtW1qdCPpLhD8x8SR2sUrjc8uXoV6YApcUNBpJ5X3AMru2f31TuS4K8PnwaojGEMG8Bv7CAYaCtbtVnCafj",
  "key12": "25UeYZXdy9WbruDuD43BNxM8edDaPRxfJPyztU5FBZZPh1GW6YcerX79xVSpznfjzhoqwNj9HZgwFQombCyTM7kb",
  "key13": "475kkTChWB7gB7eyTEsXaHpLFw9HLZ15P4GnoSVnoD61z7LwPMarNzY3sWijhBqzFDNMighthCNG2EZdiyFNpVaL",
  "key14": "36Kkeg9tYdnSNmEun4cNKX4VDHnHiJSKZEhwZC7yUkN9VjhJu65aZSLAHJ76kxHcJBtvqmMo5LBMfJhwAXsUVpMp",
  "key15": "53fLaukefsNkPwr8qmDaHYtLRj8robVFyXH5fuvbmBsnYJKiE7Yk52PeWNQ3sYnMWPfpW1upBiEstpbU4qfb2F12",
  "key16": "52kQCqykBYGdaKwqG6Q9GqqkRnKrLTpagcNVQkk6EhFvQrBZTgd9x8mWwsbykGre5zKeBJ2B65M6u2pzPAtSFAeh",
  "key17": "2EKsZmsrShQXEBRd741sAg9fH4GmjxdrdrPeaCYRpV3naVHDdfiaNuBkUv7jyWd94Fk4GGK3djVCrYiBZmTcn88m",
  "key18": "2SVcUTFbRGQT8EmTXTW4ZeKNEbR3FtMN2JtHgqpoj4Go6stWgSG3t3ovDaSADdxD6LY7rPT1pxM5m9iFvF3cU4Hh",
  "key19": "t9KqsDQZ94BeJNUUJWhfSvkYWnpC6dXNZrMvdMKGJBqTQPvzrMrvtv8x7TbUSD7mUGH8bwZS6HGrgLK2cBfpFCu",
  "key20": "Rmhq1GcB23mxbjejBMtifDXzS7yw8yvCP6QtJpaQDQ9UfcFs4f8YqcgkzE7rRzd6C9MwiYAfZYw1N1iskH3Wwha",
  "key21": "JG2AFQwff2UJLYRhqbR57vroJy8wRzcQADKgSef28nfHrTwvws2T3UNtoCceTKujHiJ6eee1bBoefdwYm6bRgaU",
  "key22": "4Fuk7ExHk8AuENVQ6G6658pPBNbQh3THC7RQ8L4PAkXpeAbLm3BgSpjrzU27Wb2B9n46hUC7FD5t8G9Rrjig4tLN",
  "key23": "6f9eRkafA9J7VWZ4UNiQmCXZxgimctQQ6AWSrSYwppMTWPHzZkg4hKGotUakif5UBMEdvhjjLYsjDeRotRT3bbu",
  "key24": "4gpBsL3STLGZ9c3agEZdQmA4xnzsR8jhwhPQeWDFYVnHTCwjEkL4GTRndENJVuYetY2JWRGSgrLWifmPKmVXSMDp",
  "key25": "58Q9dXLyCLdPTjuFsqvp4E7t5gv6ojNWFwmfPJ6fooLv6TE8bMaodL5zeLi38NhFE3YQv9PKUUn7LrDDD7kz2enQ",
  "key26": "4aDexkf8A2JAtPHQAisuSnCzCaVRLENzxksjH6aKzXVimocjHTK6hyBaoTpuos4SZSm4ebYg7ePCeer3QhiJmLR3",
  "key27": "33Qq5scijY5v3h4fq4QD2MppdQgd9iBAWQADck42nDND8VyYFbYzJqA79jWsqfZ4TnitRUBAvurmRDMbEQsBFM9P",
  "key28": "2ARQcHt8dKhvrCbnfhka3m2ggSst1zkaedDZ67RzjqAeCm8Zh9ni55J3CiVbnftY7khKUHt5YJujuPZho5DNubP6",
  "key29": "4YhPB1Zn2t8ATMu5KYGBLqRao17AMyWn6e7yeqP8Pg747CiVUJe5TcBpze82zufPn9Zco46cq9FMiwBFKuwjNWRx",
  "key30": "4SVkJtzAjTcA7E9e6VqjGWnbQD1M8UUcbRahUXox2hVrtGaMJDchpyeHJHmhRfZZ8bHLxY7ARJfCxxv5tBBycyC3",
  "key31": "3Edm6HfkhS6UQkeARAsyqBbeuaV6VBUn2LTDmkQJbzFjKtdRsHxrgDjJeDaPdGLqe5rfVbbadtTqp5mhrq2hej4M",
  "key32": "2ZLD7veoGdbwTZDeUsXpW5MafAqVwQRFtRqhQwtMoj292guDNxxqn2DJMaZv1TKtvFHbroDsJss4zDqzbEhn2QVu",
  "key33": "5DEhStuv887aUDxX6zKF259qZJpjFmBkV2uHDHpiAQ6SDXM8CAUXxK6N67Z1QGL7nbfHtXDm2DTEQcdDbVTJnJWL",
  "key34": "57ooDA4n7yZGMLmkQQCMCsFjPLyitvYjxmUnWvzApEjb5cSFv8ThScHrnJrn4fv7zB4vi8T63n2a7a4yJWfcneUK",
  "key35": "2avdjv4KmRMsMWuabDbGrDDyScaofd1kczfD4HVuEbWX9h9MbXejjhtgfkYnNkGJaHmtCxi4B3eyT1MxcicXmiog",
  "key36": "2ppSQwkwiWVwEiuZSLJwhVKSte7iqHpuSjXa1RTSVPmmfBQVJcmophSQbZ6tumWrjACvnzg6jsfqgV8k49cH5jZw",
  "key37": "u5Df8MisywbaA5cutRRLoEcpxG9ceLPzqG8kQTFjzXnrkDCDPDp9taXeA3iq64LMMmkt3T7gLzJofSdhjX2mGtY",
  "key38": "5ZbkmiJRaetFiqiWQNdvVFubsvjNXyVnLy1tPmPeB9t7o2oTgBc8r8Ytxc8UKpVg5hL6CUbFMDcRxwTwxd3KYsVq",
  "key39": "46aQ2uEdqtXTDqLSaCNxCVsjzNjNXfgnEy5PMWXb45H8AFVoXdpiAnMfo1d7r5ENXzLiKr7iiGwfnSfNmBcySZLc",
  "key40": "4CpmZzRjHQCSssrZH7Vidp97s38joubLqxprAgPPMYCjnLvEpUN49RfntHpnQhEfJqu3zjxGkhsNDidXhAmfnutb",
  "key41": "4W8bayV5tAFiUoJ5x9bVttaG8KgTnELWMHoCKV5sy7i7pFyQdgTboT9EWu8sBGDssEWeXyry9mwNZ6BT75BbNef4",
  "key42": "3tBUEhBD59rdBoNcPg4Z1uLbjmzZRXsZMtN7utANFzWmCJXeCugPPjTZM3mT89uG5h36qoC8zuRivL6k3662766Q",
  "key43": "5CzxpURLMyshj2EvjcAGAWemfRPR1u23XoNJTmz98nt5cXpDNXLgB2uviFT5aW543oFNe5uyDtYJx3TGhEMhap3X",
  "key44": "4pC7outfNNZzNow9o8ted8ihLx2sNpoX9Co49q26J1L6ZDUFdG4qAQVSm2iJxXqzX5uu9teSxMETh1yy95iyxEaM",
  "key45": "GTZPvBzqL96MKNxyC81i5VjnVZVQVTTmp1L27YmJ9mE9UN8LkKMZyFeBRsfYp4fCaFgnHJ4WdLVtgtmDBtD1C5M",
  "key46": "4LrXqak2T1rZjYPcYGecEqPXGm19Zjbcdpej66WS19GChcrKkLDnxuwsAjPpPSr6X1njGfgjWnKkCPCeBeD2jQbe",
  "key47": "HCX3jBs7YqKWn85qm3SHwJ7ZM1rTof3LvgEH3TTP1Yib5y4Hwus2WcX3p8fhxs8tLxq5ydBA1nk11iGEccxXn74",
  "key48": "213mWs1yqXJL8YXwTEDvPSP4buZjHcbTJrzdZ6HNHtfkPt3x7dr2d2caFMWtonxvThovZYKCzW1xcZuGQ9FUbjJ5"
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
