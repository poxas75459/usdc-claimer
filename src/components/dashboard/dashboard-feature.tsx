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
    "2DU3V76pN5ZJsCgEkSedwkv37ZHXaLRWnd9ZttNM5SxCxRnXVRgsbay8dsz7LjkprsQSkiRF48fkZLozT2nkkX1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r7TWSaTQBzD1TFQNPGyiLoQxDkbavYLPFfsPFNGtk3TbDoGEKjy5E9HH4fLWw6pPuxhEZhmxtXMYjirp4xr88iu",
  "key1": "2FG7WEr7GggtKrr8WdDq2ZYY6DXxWCmSCokwy6JTKWFLbF78XsmQXvw399myE6ZET9P1iz5F7woFHfckR7zeQqmq",
  "key2": "2pJ6wvxET28xeyMpGdWLixfdmySgThq8JGJwzWbjabGX3o27NYcCNa39R24RBopQ1QozntgfiocqaPcpqyGj323t",
  "key3": "2LxghK6wWHMkRGpPnmtBCuktstbtqCLQGcNrcS5JWWMvxBHr6caTgQ8Nd72JTbBfYLiZoWZaKtukMAF7WMk86wGP",
  "key4": "3XRyhBKLnYnZHfhHstXDvY1MEMRSv9kPibHnDKhfswNm8EF98ZWiiQzdVdyD2xSi1tUMQHPMZZLru7b4PjQcczUf",
  "key5": "2TieBbCMJQz93RHtX194KTaKTmyYrdNgEpLkH29YMcrWCz7Kvh4eeKaLFccWXdLBjCSTdERjdsGEYJog9y2aXvBp",
  "key6": "56t9Qwga2Yg8fNGiKiGyKyedd3rxogUjrG3EGSwNqAJ56kTGHMWHPbcEghoaxfkLRPt71CAj5duGt7PxwC5kkk6N",
  "key7": "4EVrERn2mm8o1Gs92fA7tzCwgEde64X4BH1aksJtV1R6QsLefa4Ly94aJWoDTCXH9QXBEpHc42gcQomCQetjob8k",
  "key8": "3jZCWhMnkWm9jqmVKZWC45meQ5k9LWuyaYpz8XjuywpGiJooxfgEpHWiLsMVKDcjr677tn8Sb4kyJGvs8Cf9p2r5",
  "key9": "7HtRjMjB9UtQNNRE3KEbBrERfUQiNP28xVKWu6GckSsyrW5s4MHG2EEKhXwCFpcbZjmAb51jj8YrXztFtrBnguy",
  "key10": "3bmSPJpq4vAxF9A2a829RCa4BMP4qCxCr1zryPGa7LEk6qd3xZprsGVj413xw2HUFU8BS2vm1azrqksw7gbX2ZKX",
  "key11": "48apuStmQHLg3Rwu1NdXQPUCSaWNViL19FSQWq9yzgRiRhi7Mq4kFoBuu16qJ6Difbuaq1cdYvLM8jqqduhsKaRv",
  "key12": "PgGXpBkBkxY1MMs5CCJW8RvmsNoJ4tKTrfbpR9TYwC79LEjpK4RMGnrMkVGajcjD3GmyCVzr5c5nAJAaAsAbY57",
  "key13": "2DyebDLBP2cvUYW75uZDCW7wi6JyBdrDxAim5SGEihQzr6QJ61c9xsAV3arKcx1ogfzLuq5s5jRbRZPRuKmP7y7n",
  "key14": "4zDhuk8NEsGsFXskHmFEfRaU5qMDrrMehhXLMVvwBrk4k4nc82mFwhHuoyvfdktdxPc9rcrphV2UxRkXkQ15V3Tk",
  "key15": "3rKFLpfF7S5o54NhwWDDP9KH7ZWTTuYMpzAf6LZJcHECgmoJVk2h9kmZdqGSkrvAHhfWqicEfyncNHNNvwtKhL2i",
  "key16": "BXGBxXnqDFvHxhCp54UR5NssSMyAUSW64saNC1KJnygwVyX8ZhW5tV2k7CPUq2SwiWborhxay55yTK2rjnVbWGE",
  "key17": "5KCJ7fHW3wRAy3kRDbg6Tb1iMTUVkUWAmdjj3wYxWyVqXyRZzoPp5mc26HFiF9pCT14Ew37X8ireUNcuvGNF9zCY",
  "key18": "32hrZVyA3EbJb4ReJ6QyjddLG4tR3rWc6aFdun7Jhn8MzBoMKu2vjogMvG7pDNGs57E8PFpMkjqYAghK5et7KWjj",
  "key19": "2RYC2763XjNEwZDy4Mg538BUX1yCz9YS5m7Shiyo8v3Adanc1QWXeqaSKQ7ruurSvodqLTSCususG4bKuktnVxPu",
  "key20": "5HEpNG2xho7igafDhDtKEf8ruN1PeToqtBDo1GDH1zJaihL8Gyr34gTn2iVJL4BDYbqGNR1KskSyiGasZQQgvmDq",
  "key21": "63UB7pZ5T9LTyjLY3CAhNhRUy6xHNMMm4C4nhQPGLAgEx2KLitRw8rpEqFapUs8hbnQKKnyefP9k4NEpYE8x5MwP",
  "key22": "EUiw5G6r9idgZp29kPRpn2M9W7cc5CYL55WpC4uR62gaAvr3uXKB91iwaUAhKNUNsFe3fRYnjd6S6FAQA7NsT8c",
  "key23": "3uSJL1u9mTH1WaoNJwYniuLHee1b8ZEUQpx52rByXahRA4G7bckUqUqbKye5SVTBR1GFPLekC7VuKz1jenCRrY9b",
  "key24": "3YHcMsyNsrzm4o9WLWtPrQ4fKH6RR9TPSoiyh4cBV8bdDn9WQeotqjMpvAfUk8P26CfeDXUP1AXz29UYyn2g3y3L",
  "key25": "3wedJENyfEk6iBpCkhHdNDwgbWtU8GV97F66R3Lg6hiQPe54vKTStogCHnMsTc1srMxCLXqUGSEkhzm4hqVbm6r2",
  "key26": "4ymzeWjNdQyYqRbpGTEg4pVmn2TEDN2xQ9gPvgcEqbnBYrGZthXm7BenYcD2nTqqtYR4rofBo7aBhyiuFSBd9f75",
  "key27": "64FRGYeMTgCoJkLaf9zMGdBtwffEXKCFpX9VMf8ufEKKhDdJXCcV3Q9MRSxpWw26BaZv8gkq97qzTCTCkATNKxZU",
  "key28": "4YUGkPdRWa2jBE8V1qyQbrX6bN94MLdYHF4jXbjgPgWF7HJdoFKAVgqwM1KdQb3sGGYzV5CRhHwMkVAPuu7CPhKi",
  "key29": "63GSQrJW3GNkeAWgckiKGjaDXLqJEv9dRZ2d2hGAqvoqUdeQhhxTyaT5C1pqUg76Ai2rPw6upT1WKv5yXn87U5oR",
  "key30": "5BV66sZV2UEgHQM8stotfbL2gchzVYGgaEZT3FQZrU3LKW9fHqKWKKVnoCgCQrXZ5i9azqitwhkKtztt9RSoXQj7",
  "key31": "5QxifKvguVj417r6pzsMQ6Y4suHEhDJyajZ87m7Q5HybvUhUDAL1qSPtjshqLLgYy4aoX8J5oxpMqwxEq3sgEe56",
  "key32": "5js5NNFjkCqrUPA2bLfjmxpYtzD7ebuwDvwSEri16tRKB8hb8P9aVBRDckVzNmu3czzaT3c6xPAxfXNFvMsE911D",
  "key33": "2x7RwETTirrZhH3y1UA7iFgEEVaJNYMDAFgLKu5RLju2maN5knk2DArZGmuY6CsSYALxwfu3adtRutbzyJJjsVWq"
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
