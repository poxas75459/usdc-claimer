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
    "48raQZAGQ7nCvHTijUd4RedHC4aKxH7YHzh6UPp8QBp5TZK8ncB376Q3eiqQgy81nrkz3JZxfvMAK9RrpVZpQ7bi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rT1vQWc2K5LBR5JneRNbKizYYkrCantABwrXczV9jt7e2YdVQ76KV1bJhmNCHSPt2p4Cx9ePgyEEnhfYBrbA77B",
  "key1": "4HW2wCh67CefxwG7egqQvPoVCKyxrSagZbhufkwkndkxfqk8gsfc5FJj6gMKJTg1rfTXG4bUh1KQh1R5PWyP4Wv6",
  "key2": "5wBKTRRzHhmnCAtz3QWTbxSA4n6QtuEBjs9Bs1g5seoN73BdAKN3yUEL7bNnPCZA8E946wxHsqhc42QjPTw6soDF",
  "key3": "sGDkv3qaTpZuk5iKNbXhU8S9xNV17wHH59Y4rF5eBfPiCiChjXHcc6eJboBzYMCzaYKWgQUs3CfwYNtSShUqehA",
  "key4": "5W3BTBPRtzQFXdeq1Njt32DizdHKN46JWiga49bK3qBZeJm1YbR4YyDwENRmP1YkbPSWMU5iiiuYFfMntPK9jQLB",
  "key5": "5uTNVfk5xciRqF2cr6WPTa3JVdiS7za5Ln2Mb4NVCe4R41zFdrWiRbJJdpVWcg6egNZBu93zUtrtJjJtL5f9HD2x",
  "key6": "2tfb2itdmJfeXcgKcT8VuN1oQBLCGqjqhhNSs2jQAFoLs4AgrPnssf34JpHGM5r79bVXN2MzDmsbSBdovHFWFLtC",
  "key7": "2kTfRzt9fp9pH22dPpSTtsotDKJHRjzWBUGhq91ZEUCLM2yC5kCxmDqSSggPv7LC6StpKmXMuuRH5tTRqKzcN3Q3",
  "key8": "nF8wCsxofxaLGQr8bc4q9RzZCPskXpayXAx5C5rLiDXThVhEbSWqAR17JAJRUAJBP6TNiftBGU8h2mr4kSanGQQ",
  "key9": "PhpTi67XXy3mZHt7aztEmJXJPgJbQ7HheGGrhsSw5qH9wfjFh5HAnmmZB7vXS1xXfcETaxTfb7L9AxtnWsDzqSj",
  "key10": "38TK6kzSaapENvVii2PSafScRvmRAKLqUQLkmTrwaMdv9Fmh6WNwdkS8s9MfLfdExb6d5hDS4Jcoo7HADUjRAKXc",
  "key11": "3sGdq6NBjStMM8FH76T9jNrZJT2qVUSdXJk8DNEik9qY7UZ4asLfhFrxToU9HM5avoKvrc8NxpzjFwgcpDxy8464",
  "key12": "5Aa4aGfciQcxAE3VdkQFhkE8wSQErEJfezzGhETGEN31yMWayw2a4RJnS791yKUTGX4vayHErB8WzEQ4x8rTJv36",
  "key13": "3ymqyNXbhssMFnbrtDYCdPg4NGDnWoRjQEizjXb25girVmNaqutGKGBxMQ9KnpSN4AcbmpDcw32EVkogVerFTKCL",
  "key14": "2EmCJ9piFS9tykzN2g7FqiJzt3KKbmeQ7DsDpTYUHAwmKuhzb85fsAXayygUt9g5sG2WzDt1p5AQAu6dETZMC3py",
  "key15": "3wTvqdhueUuX4WsA32VdCqzr2jLwSHexQi6U69f58cwf9BNAuehj7QWFHDiCyCrf6HCQVSWhgosqs78VtEZ3ec1Q",
  "key16": "21LRx9r1kTceKxUjGamoMcsms4Dg6sVqTxwhwQ1f8Za4PLygxSk9h3vETRNNXJJhSN9tbX8C3vXmaXufrUCVTt97",
  "key17": "dsuyRCmK88d4HgbRR9Woiwian6XTK5FYHPxAopv17WgqKebjGFe3bpiPpnpkKafEExT8TT5ByVAUGKExRUHWidD",
  "key18": "4VsFWHNSXSUsFJCmEN7VDhnDjKxJmedBBE5MQ89rGx77zEWuZk7ukb1uSpbuxshb4zEkpJLdYmdTXavd8b15qL5j",
  "key19": "kmjKQyRBNJ9M2rYnF9KJkNPUGjJf8bipwGSNFFPUbFGJgFnG5iPSaqymDvnsiEaLUVzmWsLmG7x2zMqJj2p8Jc7",
  "key20": "4EzgZdwtyWgj5aYcC24ncpThuZ8wzU8ZKNByDPdZN9JinWoRvwvcYUFmSyqNXKfuCY9uN7cmnjsYULo27Cw8a5UU",
  "key21": "2mLujMCy7xyqQMLHLZ3w5z1Rsi59tecCimZTSabwAmWRJS8Wu4EqZBtJMnNLGeCtHqCJ5Hb78RGJ52wRvvQV3ULs",
  "key22": "5U1Zga7RVUoDD8STaKgduCKdQ3X9tCEdCPHDbCXpdaEK2tSz1mBioRoHzqLJNTBrrFs6WM2dEXLzFmUzabnRhrvS",
  "key23": "2MKwRx2GUkB7FLsWs8v2m7CtemCLoYUUsgjs3U7dxYbbQjvHGaURbUgo3n4ALHxt8dTRnaPAndwqNxjbLJJ4Zhgm",
  "key24": "35h1KVRN87sP8LN4uLkwTGRJFbccuphNxgxhTAHNfqe28vspvQuhyH8ACxUnecrqRihsWirPC4kAPc16i73h7UQr",
  "key25": "E4rLMhJ9NF7tBKJZ963fZv4okogKkPRhunYx2wq9nveJswKMhLpBag9rm7HuQ1etXrh2tvDh94nosJZzd9SnAu4",
  "key26": "TYP4AWshm6WF7nbGcbzVoYuvnkeJLi2moUZsfj1NxFkfjFpB7eUMCuYdvDgZVBdD7hk1Q2ny9DCc1RM7yoo432F",
  "key27": "2KyQ1Bh6prpBuSYTzSQEfQVGjiFVfPbStSXVhxb7Aa625Jd1g2sFw1PTnHFhG1K3XBr8ztVzYJpcMM5fmruieTUU",
  "key28": "49JTJ7UEi3qHn3gWH6dKCd6Qd6SiMMGjFcXKhJNnK6ibQE2pPnVjFHFEVojQHA82xH7smcq9YdwrRpjobtLMgD2T",
  "key29": "3pQ3PZPdEgYZWyp8pmkJWnoGnJr9gr1hZNPoV2aVqRt47WjK9RiQdiHvaPpQe1ys2dJM7t5xSNmamU8P7K9X5d5q",
  "key30": "CsGpiWrxA7oU3aM5aTiMFzPL54enkxHPv8L854w2yMoRjfTNLnHn8TmtdpxwEfZWwaXjbxPG79RJTNteYouGBUw",
  "key31": "2SCnEsRjM98oRNjEigsDfpNNfPr1pT3bzFQx71L3Fnq17b8W7HDA2xebxSxXZegByBgfEbdF4CM4xd7okNKskBbV",
  "key32": "2gLAt3FKrToM2u2Tg6hmXaqBBM1KZNzZgk8cuEk631CBYy1nFi2wMmM56B6yjGVdVC1pnMFcAAMQdy89ShpKjUCs",
  "key33": "JKqG8NjzP9feoqUmNYsEBry6K424igMYVFVu5PhnkUBEvVMLyhr3HqUb2J7MdGkFR82Lhu3CAUuqXhPBfRK8coC",
  "key34": "1qThTvagS9Avrr5WpDWgdDc1kgqghmmHJBRag6DbcDcnM79nCsowg37or1MPM4hX7RKor3atg3ZwHYpR3ygaCEy",
  "key35": "3P39wexBhNqVBTnLuBfvsDmn8VQBLQsHCVp8kz4dH3KutL1KBijPjHCuBjX9MSayWhksefPBpSLCCe55LTPUg7pV",
  "key36": "XQBTS2tbj8bd1fpNSYU3gtKKb497LMhfyyTezuEnGBmSeZuz8J1ShaPdzG39zByZ8RpjQNyKUb6iyekYbGcdFiF",
  "key37": "58viBpNixKLgsYBHwXF5Ziv8H3RwstyCLks9WUAdZ5iov4AqmQn4cLE3xYpLcqjihjpDXnLqhUBh1bz9uV55po57",
  "key38": "3QhJ4Avbq72ebaDxRHcHgzikMKUoB6rj1VP6YYpkPE9uqxZo448aox3an4fxovc5TsYBhrVtXLWatdqeZpVLcN2F",
  "key39": "GnmPnjhVTNwEbZGshdjniGJEJBEzcEqfv29pc4TMpSVHFUD4eFwrbYZCBp9AFSoeh5W9kK3GGtz4HkGJTMqg6Wi",
  "key40": "4mzmm7BXn6oA8GuUxLAjkxAZuYtoZJ7ycR78bhgheXLm9qUdsiVWpttHEWQ1AFZEkVzJBrxtq4ftpmLntRWAWiFH",
  "key41": "3zzXMKAvgnTCNDXQDaoJr3sy3KF8oHyqcTPeaB52wJNL9pwKYQCR8zHXM235qmeunu1cYx9qzG1YavYkgMBAzfWa",
  "key42": "56XsQF3yL7HKkW6BFYrZiPBTr79PRgupHymL1yrrsQvAMDYoRu1HzFjzLnMKVtVW4PCWzqYuiM1PiXJhcRKXHFBG",
  "key43": "CKV6z1mBdQxi5MiGYE1erBbBEGFB76WivM34APej9LYwqcsP3UH4dvbqcG2311HQKLiW7tQn3aqEPPJtDsRX6dY",
  "key44": "4Wv9az68cHuBnkRnL7hnLv7fVa8bKn1gpWWiXLKMpZ2MBL2pRMhtCQhwbj9MuUnMCqXimC4SyQkV7xyTH64TUMD9"
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
