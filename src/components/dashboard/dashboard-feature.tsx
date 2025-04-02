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
    "4AqvrXRcog2Lhh6boDZwjVu4fYDWfpFon5m7vBsdu2kpq4rwtM58AYRwyWp1RV73e9zvbgFiS72hzfCWNTdkgMwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VYj7ojGcSak3xVBEDwBadLWYUAm5hXhcBVJpgAQrb1Qe341PqZ2KjXrGMYH7CaMFVwUbjkVzdTSvEyq6fB8jLw5",
  "key1": "4qfXjBx6o3qkqzDWnkHFEvRqmURr3pHQzHiiwa1Pa8v4JAUvH9eyuT6R3oU6ba1TPjYUTpuQCS3vrPEqYQHBWjt",
  "key2": "3TM4Mxv7Cb7QSitLRs5A95WZQpLhfRW83orXZaR7r9sRDee8gJWcjZBHVTPWv4BFnehprLViE3v8CoFr2Bz1RaBv",
  "key3": "4nCtLE77Tii8ue3nwvvLwAUsYAUucmawcueDgtoGXVvbfJh1kvAa5vzbhzTPsEVQkvdJXBocVX3WrD4LpMQgnkkE",
  "key4": "2ja1hRaXEary4kBLBk3SaLnv1w8roVxcC1Eo7C5TpKLhXHuYKjcBtZXyJPVVZ79gZcDjYANZeEdoAoDptWRuz3dT",
  "key5": "3RrpgUDdW3gn3LHoQsBQX49cGBCa6NxsoqL2BGi4L7nF1mj3sDtg4sXRogdn2q1LuWCE8xWz2XD9qZEfSmjCyDLJ",
  "key6": "5pPunYhGb5dYYDMbhUFcvCpgzRg7x3UfcZgqDGWhrtRDQo1GxarWpt9iWoKAbooBUackEXUm59eq7nLrRcXk7VSL",
  "key7": "5ZRNMJ7vWTRizwkb84sFH4r7GjeAUerd4kKacRQRKwETJ7BjuSAsn8xFTAkq8WD5485RPjk1479rDhwUYW9Rv9eT",
  "key8": "5he4VXv5NXV1vtPuiwbPqh7CcybAATkWgSNmrVu5cx2RkBhjeNBfCeRS1oVgE8ctc9ppbRKK6KmYBbCM1EHjZ6oT",
  "key9": "5mYVSzSu6s6GcyAmS3nyQGLNPti8oEE8fkuVo6oYsUSHwABxUkk5JfB1sYuvRu14q4H6RV4yKCsa6VtWfZQLPej8",
  "key10": "3BgdERLNKJD68tMBXmkM5mYMpKTcsS2bRhF749KADM5zWD3zET37KTw4GnkW2V94z9QQZDgWnJ4uw842L6TQDC32",
  "key11": "3LBwGMcJvjkUFSn1C8ocFvSUBvCkes2H5F2GoWck8QDt9GzfZNHEum3MegYjyqXpfD43zXJVZo4c9AF9eN62TQjD",
  "key12": "2gxsMYFE4ikGEiZX8ZkAc1Xwn5m9ZS6Hp2VqbMwY3nak8KoUFqnTBr6PH88HHHzwp52rAUjfDbeQVGZKWtdrBNEj",
  "key13": "5gX1rJVe3st1s8EgoiYo32SKC27qqnEMffzNN5X4ULd8FZBFLouDWV2MGkgWNpbmHRgTp1YkSEevY7chfeHf6q5H",
  "key14": "4SurooywgV3fzhV5UtpupXoPc2WrWzg19KyrxjazHRWSgA9eN1nq9tGT5pWFiNHqqP92CSf3hxYPMAzh4CEh8zNw",
  "key15": "4o7q1oMuJA26RntoupxdvTxJ42ZSCfphgg1xHrDiSVaijWqxGxJfjhPpSAZ2RqBpDnJgjQzk8MppPr4JykXaQ8QG",
  "key16": "3kQ4H4W6jXWREHEZE7mUgTbUirRnMT8QuLjgMhBtGRsyEZM33S3MCLT5NE4PjZB4H3gn2c7YZDAU1J1zUhLEyPmd",
  "key17": "4cssP76GhX31rsPrXZ4EQyy6K7s5oq5ye4uqqp3JPmjGTj5rBzuHSkymhwD33k4XXWyeJvwon5Z3bftH1WXU6fci",
  "key18": "29m68MUMn4Fp3FWM7acq4b1pFdtfHaWAtH8DUniVYJSa1a1FNs4FSBq7n1ygzcq4aYjeL77CserDWmXTARDhHr6T",
  "key19": "xyTpRcATaAWU2DokEv7KJrSXdgfRn2JfTmqcYuGF6m4jFaw4te3JfWStdvHnWBGDA7Ltius6M6tqqKMxux9oCsr",
  "key20": "aC58azsVyMinWVmNTDpagxUrtMoE6o8cqH9YDQ62ZYD82W42aaTScbuo5e1C3LFjoKMLF8scF1wJv421fTxbzhn",
  "key21": "4NYjyBg1zfJZZvTNtZbfKxMNyt4MR3e3YwfKNspt5erjHAo3n1Grcpm4n9yShJffAQMRPyR3hgNM4ziz4YbjtHN8",
  "key22": "hJiDVfRwtUiqxZa7CsQB9AbaeujQMiutmaA7jU3vvfkGFn3EncR9oFdRzNuJcY1i5pgfri4exMmbENt9j8kuwSX",
  "key23": "2F7L253PHB5m8uis4V9CK7US1NvKYtqcQRBcHbv5bfmBTo2TDi9ehUfrUGoPioieJ74Pu9bQ8UNVs69K5ZmrY768",
  "key24": "539SfswVqVgsj5ix9BSnKnt6x5JmV6PUa51DXTueFdXYz2CKtdMmAakjU3dUwEMB1okHXYmZvth3p5hq3kHqQ64L",
  "key25": "5bxgActHTXF1TGL61ARLt5ZaRGnqCZpTaQPHLeGhMGN99TL7it1TAhqCfEgY7Z2tMmFBkeneKa1bZVzkAaPmjvTH",
  "key26": "W6AL9gyAkJm2kWccBL1ug5o99iF4iuhuwPJQQ83YurvPjvnPWW2u5A3V5D8GEfgiLa7jLAVGhwFzHKn7Y1aEqPe",
  "key27": "4PPyj77eW6NkWnLHfoEg8yyPV7Dh6T8SgPBp8fhPxE4EpnDdQpMEQp3poZy9ij52Wstbbkj6ye88R2i6aUGbs1H4",
  "key28": "2tgh2Sam6gPgzx1eJxDEHzXHgdHFt8kzb29eeg6Fe2nDnMoRMtApUmHYKyPaee1JoBCSWMfyd5YjTTD15hUck6Dq",
  "key29": "61M3RoQSVEW9bnFvNkKNajuuvjWBjFB8xGfd7XQopjcxh9FPp8ATN3uWymRcSx4PybUTvUVp7nip3pAPbc768Ub",
  "key30": "4wZuC2HCbdwmcUEWANe4hqYXy3348tKfWUm687RN1X9VprHVkS8EW9HMchLkHoSUxhDVWrCigYF3FHVjyjAtjxme",
  "key31": "5LgfnnERrV2oge51gjtw75sJ2igMweU6EBtPTHsZwfTKrjonmsPSqNhSLrUREcMi8JC3VZEm6tk79rw1UeD4kUgH",
  "key32": "5tx51Y3c7Vuh9oC4xh8sAxs1gZYztddXKK7WGrRBrgnkbkiseGzyoknqgytDjYEsucZo4zSZfRi6x13mKcWkzokW",
  "key33": "2kpfWvWaCbdBzBExGb3RuwqPBemSjD3mECAbXoHMvGN8HGw2mjaUTZTLejoGsFh2Rb5k4TvaxzzTSHN7eTbtMxyD",
  "key34": "39SVVF79LdKPLerWNoqRSL4NU55LANA1PsptTJJtuH4Lyw5jPJgrYT6usL9ZpEP8bGsp7hTHgPxmowNLKfxadiy4",
  "key35": "2xDU2ZACouLYB7DXnrMNxsSvAyQq1HZq1xtZK77H6xg6JDdossF8SQM9ZY7HUDa8T9CSFw1ptJgoAeywaQ1qwprN",
  "key36": "2MrSEmTjrLnRBRcSN9yUcHbSZzQi3pmoCNc9ytmkwVXPXxRbfqErqG1w6Tx1TAixsZtjVYKfodX8wHcdZVBKyEid",
  "key37": "phsjBSUse1uhbz3Fun5wDMgc1ePoKHQGhAyi89WwgfxmEqyN7h2uHkWrEYLSx2PkjSRVzK28qFvFsanihtC3stC",
  "key38": "32H6Jb4N5Vyki2C1m14hhgKztAWVvKiCqL5FBu3TvyTg5Z2NS7xKiSVrXeghya835Y6b6yLUYGBsro6QY8J5G2KR",
  "key39": "rXqWksuznpgVD6auRwFqSVEoqciqfMaDNEguXmeDfaHawKkMrxLe6z1A1zQUXj5FnY5bSXFUUJKkXaqq3kaKJvY",
  "key40": "3fP45Dzj49udpqxTpAP19mfkou2jzX9TgUvLvf1Btv6eZf4Vm1VYiyDyWLmkr877zQEYu7pQENeSjbrxKY7F29U7",
  "key41": "5rdASriXPFMg3iYHXPBe4NBcdYTpht3rh6kSX9kAsC2mpt79P3v4g2552YaGmBbYL7GEtBVcsjznq7kKvb75QcTA"
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
