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
    "TgsLNzjQcDQxWR58eJPNLySrG1hWUT6Dh82csHCg2oD8Gtf7jE9MgFmp1xJaheczkBpxxk8wXBMq9XXYN3QvKA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nf3b69WTbCEZxBcV1v8jF7LPJLg4s76g91FwErxctjpAFcWUQSmL9DC4RBGcsj4BpAded3o7cJ8ME31Z1EBdYKg",
  "key1": "48KeFo8gXBFPn6ZhhVH8ZzkmUxkgGnoQhw16cnrBM2wW3WkZ4S539AefjFNRhRXQpV77hY2rpPQBCNNkNFFAEuPw",
  "key2": "2fpAtN2zHi5yP6VKZvxtWP8WwBY3HBXfJCmB8dor5bbu7uEpGjCRhKEojVMu566JKqWTDWDFA7LX2jc6uAfX7sXH",
  "key3": "wgRitB3hg7UShtebXEw7xvKNm3zU6TETUPg8XJYdhXUtgfMg97rpMqbCDmFYh5KxfHNbKxPtaUGwvKnUbhcc22n",
  "key4": "36Hdwvizt2vtoB13aaoYsKoeuMm44ZXbyLJatF486aCpjcW4Qx5krM1pUUtBG7TA2KeU9MWhd5f2Jk6tKFhxu4sP",
  "key5": "3B1gaYzJ895UgtE4AwCzSReH8rH1g5PKxnnc9Smj3U8F2K6jVm1TY9UEw5wxhTt6771sM8nQby6Z9sg54jEGDtVG",
  "key6": "4vbhyhVHzhwDvosUzqbaNib1QgxQPYEyseTB9JCRaX9WLyV3n3v4a41CchUCdaWYR9ixmYu6r8WZZxAVPzAjT366",
  "key7": "5TSuDAD5pru8X2tZaXCitFFWHAEGNKudkrHKhqh6Q6eUyfcDsbdEQLZZhQ7QqFRmkwX5mpz48GjGQEjqPeLqrEUD",
  "key8": "s3oroF6rM6RQ41x8n4M1TrbJsv5CJpb5i1wtAh2Na3c5yPr63iV9rKm3b3JqC37j4sE8UJZyvRRxJ8A8m7tbRVe",
  "key9": "zWKEhQwbwxXnSbm3LrKAJyjkZ5WtDC88sywXoVJgBWgGHrxQysGYdzZ541RKktRrjzHimFAL2mTxxRzAahwPbQj",
  "key10": "44ea5aqW2ewpg57gBxXLWB6qfaFqCrPoT2m2gx3C5EPuUExhcZpCQhqHqa4XNcbpi7RMDigaX4SdErJkeDbiRMs",
  "key11": "4Rm1MXdaWT5GFVN8vppkS7D3TpCct2eN9u55GdMSgDrBhW2fTG78p6jPBGikACPnuiRWi5xPRCrTL5GQhm7mBTX4",
  "key12": "42MUk6uQwiEWpMi1viGW5o1tZZidkFhhTaRwdNMNahPqR7416Q64mjNK7uGkWnbfLGRPqhtrL5sNKAD4SaJ25Mp7",
  "key13": "4E6SQw1VhHaHDupKvjh6qmmLGqXwp4i4ahrxFA1kFUykybmMZxstM7SaVyqYc1Rex7M2qgAHHxer9ajPJZDFc7FZ",
  "key14": "cF4YYftjphd5bkAqFYsXsVN3dDoySjNW7pRdjuDr3X8dgWp4BbWgcS1uTdvQUM2cJr4mQ573ipqybaCTj73fQXs",
  "key15": "2YdNpkmusauLogjaSrx3q2GNLu3vTqmFLNHXDydnTxpjzdGDtX2XC8FYKwG5FtLydMLhSnQ2ZpiBL1c8MQVvEVA8",
  "key16": "sb91j24a7xhJ2aFgRph54yb3QGzNT8khnPQNQfzP6idaWgFgWHRgi2tTkqZVsLynXdzmMh6PcW9MxjCvuyhRhR9",
  "key17": "4mbECdVAcpBRfExqGATTmitMjG141veRoz2FWzEYGiFtnQSn6mxahsZJe5rSQk5kSp76bjQyrunvu8VmgEhP7ett",
  "key18": "67b4i4vhYmDoiCxL3MD69m9HnExfDXzVzf6RNh9KKHQxgBbUeqLzVNkKGMkQBNMovHCZXEsfJzLMBAeYK52H9gg7",
  "key19": "4sz9P1WSCNJoWUEaJ6qcDrANjxF2JMSxfyTCbHzJcpZiZi9UaM3mcAjQFXwA7RAgLn3GP2nC9o8q9rwvKE54pzey",
  "key20": "2eQDMin93gD7nT1DDif96aShNPvtcPA7yE8NTyyxR7aSfBhrhRuWdkywK1Kc7JKGVDVgGidKVaFxKpyWSy6B3Rdn",
  "key21": "5bie7rdpwxc2gGS4NSHj1dF73qYBtWcEGkAVctHfg1YCQ39ZNKRXBZRDRirp3BLxnyuVdZJfZjsy5WhMTfsST1Xp",
  "key22": "2c7L3cR6UvqFEGmSmCzu1Xdqes2VCgRFJzHKkDo6Qpkevr1nDtBJyqyY2GpyAFGRAM7qBTrQ4wYnBydQoLEYbdtZ",
  "key23": "4eY2TqCMznb4B8bYe87VCUKNrPyc8iPmzy19wv6D8dFaHWrkrtS2D7QvLZjioUAQvu5C4m98xiCh6MrQgfzzn7vN",
  "key24": "2YVS5xrSgmmHuskcrPbRBfQyarGdrjyFUJiHWzY59JJNe4saZypikh1RqpsFqTruJgUUoRshscz4daQ8ccRSfkT2",
  "key25": "2c98niRNuULC14JuQoN4m7bEHCvqGW5VUzxQbb357ZntTEq5Hbs7uZJ9X9SnYUjMtSFb6YBpwfK9pRHEmwF1DjUB",
  "key26": "3obB6sz3gyGuSAgCShi3Xt8socCX8vXHg5eCQvZJkKiMvhdJn2wWV9EYGQSrYcTpifeUUG6KkvzAw43aPuNSMHN2",
  "key27": "gJ8QjGXSzBKUb44CX5ztdTxfvhqj6WCqyGJScSPgk8o5Qnkhoi6JpLiBF1dUeQ6QhceuN6a5rGFLfcKFYaJyrCm",
  "key28": "2dbbBZm7Cd7D3L6NEH6ax71VVskx2PhzPkWGvsx8GZCybhCapkvcUgT4sDAK3rSjsqU6trQRfz3WNP69qvHJvUCP",
  "key29": "5sVFRrhw9qwg7DbBkG2JCms3DgfwexF6nZbRe7K8C7K8RjUxeJUUE2RN9hRZvm8XeMgMyz2iXLsnuxfzpZpxVrHN",
  "key30": "2QurzLDmYfPKD33iisJzLdeVgPxa9Upp87bkZc7JyHWjbYKjq9XLzgxQH99regg6dyNANw54Dz3RQYrc4ZWG4NKS",
  "key31": "3b8EdvBeB4beZj1Qum3V1ZZqRxtJgwqV5HRGyK79dhXXvG3EkXjyBBQZBn4y5HGojS6QA5h3ENJTb9rFy7984Rnq",
  "key32": "4mKuLXQiMcYrFAJb4YgfwrGFuj86C6yxSdEXCGwjfk2KYnVWYppY11QT3MmaAyaWohBxfXvrZGWEQRxWqYAYwb9C",
  "key33": "3j2yG8mSnXnNnSEPp49rrgj4ziMSPrZE6XW8apUrZARx4aFS2phjQiAjTZix8m9MqCUuELykgN8APjcb2K2SYDrf",
  "key34": "4UoySfxgnfSma2YaYotKqcihQn2qgtaYwnNYdbjbU6u4ck465L9wsvtU2TFjCCLYrYq4onGBCboBfBYosZyahN4K",
  "key35": "5AHJtsssNzbmA1SRJ65RNRCoZxrvpxhrV9uCt9NRGRnqTQ481KGNkW6N2huwLPJzuFcR24Bnd2A2mDDxNN5qW3VR",
  "key36": "5W1vQD5xjy2CsJRZ68sUhX1BwoAi8977AvB8GVBFv1a7EZ9f2YH492ncemYSzths8MbYL4rX6wesHn69ZbYymP2k",
  "key37": "2WeSnydTyiMPAb9BPyWuHPwDKFWxPq6LMeKhPdWxh96dzwnnDwmxfn2nYfyX5Edoona6FP3hPnZLLuynuJqbQhdA",
  "key38": "2waxbHwMH8JuphDkQtVLJGVR2MwXniPG4UGNk8qrrtdFeqDeuky9Tif32NPudidPRUGbzbhVdkYZgzsvrr3AMVq1",
  "key39": "4tjbaVyKfZiUDhETnAQqTBK9ErV3nyySBEAqfTr8Fkv9DbNMfK67GoAyWQHeyazzzK8oNedCt2XgeM82gJdtYqM2"
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
