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
    "3mmyNQJSAA1J8LXFheaL4qpbjbhAbz8vC2o2U1BhMPPBVxKoxmAWA1NyJo5oHPaZGZw6FRfwnonoSPEhSjweFwHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T3D7Yvz4S19b9j9sSK8gU3qUqXgGxSJ8KaLsb6p2kLoXmoayibowe6AyP4oh4USaDkEdfvWMNcgZbYZFGXiyeB6",
  "key1": "3NHqrv2dnU4k32Zj9p3HY8hczbw9KHAGiQYiBBkFHmLadS2k1QqSmWza32MXGCKihNLcKmQkoqpQKZFv1nNVNzrT",
  "key2": "22Bx8UfL8qfeyD1VLqx4Ueb9t2ApDuZDGbFHsS4tego5fafBsb9hDBkUPRU9yUKrP26xktr9jRABC6pGHwd4iD7G",
  "key3": "2ysw3UHneyYqZTxDaWcwDqKzEXkoTghC1fxjHzk8rVctfkHUx2ie5oja67iedkpwPtFv3LHHb2BrhWmUL2797oqy",
  "key4": "315p3MgqaAospsHnFXRc4Ec7cbgJd3uB3ujFh1Z2yfwS4F6zf1PpPsTgyf97xUTunQFGzPzo3ktW84gWT2XGbwE8",
  "key5": "5auvfcaT7XexUKN3U8YJ1aaQbXw498EXASQsCxXiYHiMaLHrCHEh2yTdBDgEes2vLYfP3hC6qYEbNQRDt2wzANYA",
  "key6": "3trK3ZCiFyZ8z6pdhsNn2PvVmSmdtyE2rAB496uuefFTjBwCZTgLZgSiiKKui2EBMdMmLmBCpsvCyM2SLTSankfZ",
  "key7": "38kRG8Tk7uxx6kyzprMZdtz3xPrw4CDQJxVjuHUnuS6m7UyXtFY2vmCT2GkuytdRrZyRLLadT3R47JUSUsPrbXY9",
  "key8": "3sQD8crHFc74x1zubaxAhkQMnge83i1T2WwRah1zsLvZMTY9v7tpEF1kaRRxUeCjH2mumCGaG4AmycjRdbZngmy2",
  "key9": "3zmPdB5TJmJuCV29SJ13oRfa35ZiJCrxYYPQ7rcq162WJx7MMpeGEFkFfxVZFm6ESp2u7zY9F5xcXU7E7mSHBioU",
  "key10": "ok72ZrjfdbSAaQ4gKNduByJW3XerSyJCqMWyri24ZNJFuuhCV53LqHtibwe3xHpkCuAa1ceT2wQZVqaJuvJ5aYf",
  "key11": "949rjKwqw2akNWajSBZGTD68dhRWXjfkGs1LHGqmSPVipAyHqD3G2c7vE42Tat7rV6MisjnGiAwGTjwej5MqyQ4",
  "key12": "5fLqbC6kAAx2LAsDePwjTsDcpub9GFVSwkGcHRQUvH7D5VDcberbwZx5J9y6Y914CU8uXuU5iJESaBwqF8uP4Vwk",
  "key13": "jnz4Z5uz2WFPgsQMnXmqjMzBctUSHybH3gUw1J8ebDPd4NoWpghx5o9b4x9cbfuaANjmPYzyfPzq5UXJ7QYgDKr",
  "key14": "3u95VtRLsJDLX1WFE4G56vZ3F5xsvYqBuCP7eXLk6xbX1mfN2V9copJt4snmKoHCzFwoQ1V6nrWjo22jF2zPqpHY",
  "key15": "5XyWSnqCYdjpcZeGB61RQmCJHwm5S9gySfnHBT4bPgKdVfvh6rJGoY74Zrpfn2tkpEzpC5JqQLoY8dQSJmtY34Eq",
  "key16": "4PHhSz1qMW8265TF4nGM6NsYPKMGRysepAmRjv7Dd9nPoUDQNgVjfa9pmA84uStvnh5cSdinhDu9ksShi5Zs5AGA",
  "key17": "5jy8k3oEp5BjzcHuRERUHrpAZsVsk9CokBWqm82p9V5PvXHpYRdyhs69hprnsGSRM2NWsSK3dECF6txWYYXVNQED",
  "key18": "2w6CoRHSrVWqFtXmkYkNkKVq4omu4LRjZ1y6jnCuGTT91JyHaCrVmBxTuxFEf94VrkMfhyP8AU5JjoawYzy95G6v",
  "key19": "3rTZdg4m8iRZBwoHyuJYAuUEGsp1WuMDNSiXqzqQBU31MwRDg4dyu81jRRNfVA4sv965ADUNroMidry4pFJQxpBR",
  "key20": "WSD69tj5Ngm2CQRJePXyGb2Fu2WpDFBB1RUf8dDdDh5vD8Pk2azXSyVTQ9g4tjUM4NW112iU9NtTyBLPJMekwnJ",
  "key21": "oTkkisH9q2QjrjkaDrgdNkcSb8tRqfmM22T1muujjt25nHTvj1vkPQK2fcYe4hcu1ggUSHiHx5zThfqZnTcJksa",
  "key22": "iGkdiH5CvBQEAHCYN74dP6EdodaUTD4kHx1NXJuHEGqhiBGEYA1VT2Ef6W59YoTpiMdQKpr3tH1u4vHspdFRKkZ",
  "key23": "57jGGKerVADAEi9SHgNK32ggzPbbi1vzxwgC9HMLcggNsdLZ6cfLUVUf7ozgyEYaMcMbtawAeXJjssD5i4s7zSWv",
  "key24": "57Xcs3wgnLH7ryDmfrMK8EN7pgKtSrvoCizRMa5Rfm9DA8X55DFkQCTcU7eV4wsCkfXMDnXHRLMbkZuCbfrQy4gt",
  "key25": "nZDj2ZekgRKAfu4NtAEmQWG386yjpGfhgK1gpyCuGMmdiuTgnQuGjkCNTGmKDGW9YKibN5K2ATM2nWydWdueER7",
  "key26": "jLwyuYdKjWi1i8TPkqV2hi6T1bFfbgEeZJuWaBrEj3yRst1MbAkYWxmLdUoG5mmbY4ZqXik1A9pEUgoMV2hsCLZ",
  "key27": "haRSM8TwuH6mgW9Jvb6zd9eHjNJEttLopoN391tf8fs6CHZopSnnApy2kRbrfQB3Zkcd5WjUeoCExptPmSDiC1m",
  "key28": "38fjjaC8jXLCJ4ycLkgsgvLgaEiP7neiTjsjFotHPA9rF5eszfCxSrnjmypkhJ4rRFzfbfdxPAyqNjgoMPKkatfn",
  "key29": "9kssWfyH3b6XsG6Rqmeu5XrG42FvtgN5HbApWrfjz4apHqTZoyEgxAoXpkT1vFSszsCHoBKH8KgeBXTH6UjKAb4",
  "key30": "2x28ziNLGKwKFnRYMaqMaV31vZtG8v8caNWvFFrFdeFVYaPNMRADDqTkGyevGRAxdxSeEY883ygxN2o1jak3smer",
  "key31": "4iMWkXAo94knJStqpD31tFqFkrUjSAmcYDw7JDA4Wrux8dPkVBDixMeq98BuJ3HFox8av4Cjq8H2FTf8yKms6GGy",
  "key32": "2AoVwKwvBeZcek8DdUGTZyVSz7SHb6gDeRtp2yYV2BiwgHdWpFuySMT2Wwu6exWbTSbE77zuAUV2ec8PCZpnZ6vW",
  "key33": "66fxsEiJ5r8sW3WBFq49F6janZjCw2r7GgUWkPDGJar1eGDAG2ywAj3QFAYQY11ARZ9gpDp54GwTcqpHc1JzAbkB",
  "key34": "2MBcGd87Xbm1xc5dQB2YYtSxxuMeXD4yiktzF9gJZDabXmPCUDqDgJn5fNne6G1CFrGqXnBpJKkB7dtu3rBF1ALn",
  "key35": "3qMAaptou73K7pU7CPWRrxHWiSmSrr8hGaoo8TunzWXias53oRYbVHDymQJ5vMhUZJiMR4YhTho2sRUP1rd3Si73",
  "key36": "5nUE8qhkXPLqsNevnNNchdbyVgWFTR5FbGhDZHjUcfAqrrGj5rL682KH34yhNhfL9QG9tRrCL9Y6G916fJuQaHM4",
  "key37": "4rgmDfq4rSeSpCQsLacn8iijpzW8BfrCtfWRihduoAYmepBAi1ps9ZcKhmrKU7SmwdrWTWvVsVcsWvV2ouKj9Hxe",
  "key38": "2HkD1yTxfX7Z1sciVEuXzRTTP1gNWbfJKx4HxJqbreQLVYKtF2qCjbuSD4fMeLzUKsNJNrrjYKs2Mo5K11U9zY9u",
  "key39": "2wwUNCJueBq5ugPXveKxBYdHsqyd5qP4Pu3YyJG5DRxeLLXdq4PWzFmtFRMBJ7XpeZ7Ps9B5gLJPSwQZawGZGrep",
  "key40": "2jFYRnRvRTv36AN3citUyLvkgTUhugfrQFwt5vvbFEurVD9vfJJTTuu6Up3QTQydWsyWn1VQe8zT4vqq6Q9jAtFR",
  "key41": "4vx6aV4q3ecfUqpV6dDpzHSWighWEh9564hPrn9jYAQ9cwi2pdbzrDQ6RTwu1v8ZSfe6DkM3LN4VKx7Vg74WdN5T",
  "key42": "trxSa21xKCt4jzsrP25JzUrAettMKFSd5dmtVRpmRRVh7pN5oZkpnLYykD8L55Qk33BFyFAmbyV1faFMgoyKZ3U",
  "key43": "4Y46vkmeXRph4GMFz7Xt3vu2EZ3uGYCScxbiyr1QsUsKmeJuxz8myudpqx1bhjd7RTSDB3zD3v6HYUFRTRt18pNy"
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
