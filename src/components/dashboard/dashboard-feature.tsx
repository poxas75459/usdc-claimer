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
    "4mHCR9sFczMTu9Ck6U5LokPRBBoURxvyPxHXRcQGxDH1fEYHzZxtuYKfKY33wTZo5gRyQNBALxGSpNVvNjM4vCEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Eqzc9Lcnqr8tmeZFeYSsJ1Re2xWQvnvc3GXf8Ckdo1vE5uhMFDmpAHz5hK8pmFYDvCPU1AcKocVt752onPyNvRe",
  "key1": "581NizkfVa2q3sBwJhGiwaeHag4p94uJitV7JBveiCspgqALim6HEsVnACzoVMeigs9r4veJyK9TXzyXU3EXKRqL",
  "key2": "3Mi3YTqM7B1LAkzGpYBHtGhSWsqUcEsEu7EhZixZGG4uXxn8hDkjPF4Qbz5wRqnpKobzcNvDo5AAprdGuiRTK4pW",
  "key3": "2gW8T3iZNUzjq1GnoFgJwCHFyKgZdrCh6dtRNxeA9APy1QbjLHUCozhsu1XRAd2eUrZga96kPYSGYMeTqQLHoBjq",
  "key4": "4oMXdKZ4c1Yee31oHFpzccU2aTUpn7crwC8BjtBu6DGQ3t9QtJr7H7iJpHqPwsxNTJVz4cqwYTkHmP4g7sZJC4eg",
  "key5": "3bc9zUkNCykZWtnTayWjvBLfkK7LMJ9TUCfaMaYz4om4MGjzE927HqSCevShwpWpo9j3wExPRoFXb3Cjh3WExaY8",
  "key6": "2szyXhVG2coBr7wdjFjN9zC2mLSANDowrMz43BMpv2snFyct9UjFEmF8e2CuA6m4mg2zXfZtgTwzrta5y97ufgzj",
  "key7": "5ViBBtaMfUwZYjeY7HbuUuy6YJwNTzCRcBC2gsfby1QVYnRwqCH1ed8kqfp5zHHzVdgM7fpvCka2KeYCgEwbbRiH",
  "key8": "3JKSdtvs7LDrA1usmgHks4pAp9ApQD2kEUsHCkJDxcbi1Do945xVpHgVxRiovBNVzDAAtsnARzFZhWdwECyWcdLQ",
  "key9": "5ca7TxJ9FSiGRxQLtwjHoux4C4miCTHqXGyQ2bdKeVuYHCJfoenCD7nmhWWk2Ak9BUZJVNaDBztHVFKJS7Dn4RWZ",
  "key10": "54ERRXC4V7M3RGnfqD6onwA2yHdHck4wJ3Mj8542UUeWse3xAYKMbtTgAtTf2s6ub1ZZvF9cYksLuyMcABof4awk",
  "key11": "26NPLAs6zuKgqpva2qgid8kkqf6nPvH6Ts3hkdGDUqWmdNUYcBPvw2x3q8n35F8knfpgoBmYtSi4abXkLHizKpPz",
  "key12": "35ahkhzYTpZTpseNohW66jqdHfmrvSaMQqWZi7iYaSbYCTzjmUeqpa1eTp3BArGhfvXesHg1vy63WGdvNRYDa4qW",
  "key13": "35dw4ZX48ayBpLbSQXx9Hfn2V8J4G5xMvBttTk5Gxcw4syLNcqZeLuUJKJutXNZaSpGGxY869Fv2mS1DfYtBZa8h",
  "key14": "3Fgs2rWW58zYGmW1fTcT5zWgxDLHi11LV7jyUd3JJeApFGU3vhA3wLUh2qxcgo5X2EbuvSG3N7bCigGNhWqMfZpH",
  "key15": "3PbmrKcVfG1doR7kXVoDG3d9o9a9FpaiUB5HzuBcZU2hCHkoG9hPq4S46hGHuiXpxW8YNg4YVigus4GhGT9yUUPL",
  "key16": "2tGgMyTuCAnLuAMDJzKgsrsiiESUUwdj6sq7gsouLWH5qJBDgN1rEo9SjZVpgHimXgJMQCuSWNaKPHH1MchfofDp",
  "key17": "4sC1FPDXqWHyJEM3vWfyU5L4DKa8YZs4CQGS6BrL3z9KMo44D6ySb7s66r4ey5ZCgUA15B3z1NPaYU8FrjTKFfh6",
  "key18": "5LbxDtsHzngEJudWWrr5ZwJqnfTCPQF3McDh3kPiM9MaQ6fPXRayhVgDsjT2VXajrR8qWCgZJijs2dgUfUk2ZXa4",
  "key19": "5YiFUTojycYQuRg8SB7WWtGs32Gn1zcqV23BaATiWGsnxnb2QGAsiUiLjesjyXZZ9YHTWTwcbQ7UtsQFqJGw8Nsp",
  "key20": "4HRixGBJEsZADiaw4B6n8hnJbkJaWniQNg9SvHgegiADS5zVvnW3BYrVoJL614hsreBEJFKnhGaBBXUb3KeUgRj",
  "key21": "5HwAFo5GMWTyM2n9Bh7pZraU22QVA9t6N4TZSmFtPLKuH3X2hiEZ3X9skU5P4gQ99X5hZqZESZYYDf57zvJ3YBQb",
  "key22": "3yFzrBea7DBfq9ozp4ZBWJKgCzydRNY9kn6EYTG2Sk8gdtaNBW2jKrS47qUxmBx1EqvrshSSV6nTS5JSYxx7nEB7",
  "key23": "3zch9JwF1ve6co1T8tLoXTb2fWZ6QmFmfk8VEsRyaXBjMv2Semezxu9YQtsFFswacZ42v3xykaE9XaHuAY6AnQQo",
  "key24": "5oJLkKcERSF9LDg6KMpSboR274j4WHDdnxmCmNsWKbNXMTTfGaixS3WCfW2H1WWbqe4yDdcM7szknspF72TTcQiA",
  "key25": "t4pabENkXfRrjcgBzfHHerocPKXUYXYPFv5dPMA1UR4fTS1aBCcrKLygosyBArJTyUvrqJ3M3Bm7Qtxy5tYg6s9",
  "key26": "2z7wG9yJKSY7sohDLdPeq4owRGRdDZzyivspieuR8cyxdpMFr8QvNA6FnWU2wHR14oJ7NW2TL7ArXrNLqknaneUR",
  "key27": "ZnAkdhkaEvfyk7Zs3R94DgYVdCKbBLzv6EMx8H7kpWdehqS9XY3JJAo1borhBWJYaNZQDiSVqFStisZZ8PSCzs2",
  "key28": "3UkaMdo4HX5KYs6dRPJE2BZRjhYdt79W76RiHVJVGx7uY3ZL3nCqprT3oV3w3bf1edcTvvBmc1AJNVmiKTcsUH34",
  "key29": "8Hn8pUwDLEqavKJ8tFcFYG48eKwHP3Tq6YwcdN8qBjypAkHbTRNuyXgtJUA7v7ZNG8R6dpvuW9udNN6HbDHUF2P",
  "key30": "ghzrddEgh3BgTBA7UGiv2R5BeUWvmn4bHei16K68k7MLLJZ4S5gyJnJeo8Fhf5uDGpf8avH6B4CukpmB2tGH7HK",
  "key31": "2ePaThiQur4kVFgJ9Wv51apGwoShr7g3rtX3pmwgiYaD2HRU8Gu7BmW4TAvHqD29AfThrNoJqMRgSmW3QNqJwMr2",
  "key32": "48UJy6PqJpJ641Hfc9sN2eiMJwiicX1mKo4DCpBV99CCqhksG6wWnN5FeUxobCxTdui3ujx3qWJXJNpZBpPn1dL",
  "key33": "5reMwtXZtqwNE7w6L8c4rArkZQyhVJmXGjzGAuh8vgLbBS5Stm43Lve66yy25PGmPsWR415FJsYTku3uLj8jaCsg",
  "key34": "i5smQigtHpF6ejL5iGq4PHd8do2dvx76sAvLg28HF2t97zm2qWgbbBWhxPAuA1PSmwuBs9PvVVRhqWgmf8XMUdG",
  "key35": "L52MYSPBGsq2jLgyGWZM7TFCc9LwpaoBz4wqUJVBdTipLMsTQepbkVY1vFrkgtjmfuscw2DLd82eUWibM9pLtye",
  "key36": "4k4C3VCTEGothxjvPcRRPrSD8MLRp7ajJnjiMvc8yNAjpP1sWjZJFq95B6TqHdfnTfSzLEwz164pFTSbgSxgMP1b",
  "key37": "njJchGth3kRx7m9G2V2Xg6roZx3VyACcMiaQngpynXgN4SAghhSZhMZZ2g1Na8BaffiwDbsk43f7HE6o5XRqCsd",
  "key38": "PMEFhXabsKVVLhfHXH2hk5tVxi3CgFo944fFXo7whmcofJHvhUVKNtNSeRCMGgVevbDCgDmQvMBKAmoDp16e5PQ",
  "key39": "aCE25EnQmMVBFPb2h74UhGFMrM3haoeJE4Zr6Shz8ARNAdNz3qJsMp9Y7uAB6W9bUuPTNrPFKgWw5jDBXLaiudD",
  "key40": "2KsKm8okBtdXzpKF7xPXmwNJPjWMBbTEZVfTwQbejUwCcsM7w25mq37N91PGu3Er48GdAUAVhEkZUB6jAyikuN58",
  "key41": "2X4tREkXSVh7irvfTbQedozb597tqEaDD8CCCYYEJP8v5AWjDVtkt4y1g3nJ5SKcYUcWX6WgNukENcFn1U14sV4L",
  "key42": "KVdNeTg1d8EzpZhWBkjQVBL6diXeMFXqe9omLaBEmLGcRRLWH99fGrTLCeoc3NoJBeV3ASfjCD25TwZf4dFf19C",
  "key43": "5c4LNySukCWgCJujaaoHPbEJQnnyUn6hEMvDAXSRX4ajxzcMoHAWi9gVqF4yxJx4kRQMqTanKDb6aFZmyhvYSXiL",
  "key44": "3xQz3sLhUk3HAGbUCiBtELjsDRRpJkC4mNzuJw3wJL7zosc7wAysyeXG5TehSo7QufWG3Hv4tsQcYtRibQL2g9SG",
  "key45": "3KzDzcafdZrJgaLoXiz8iCNe27FgwprCbVxR6Wyjh1QQ6QaztKUZR6vDBdT4tVtu99mV5fR4B7wwr2EiKpToDHmP",
  "key46": "oW6jiQEG7Pyvxg4GSqr7HsXayzJpXHzas5axYuuBtCNRv7wWtbrR9z6qjGvoZVqysNG8MNE1vvPXkddfMdz2r8e"
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
