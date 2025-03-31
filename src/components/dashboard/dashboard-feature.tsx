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
    "47xXVvHisTjtGNqHpZJGzf2KTwW8Yv7dpvby5E853QPCtvPdB9ZSA4TMWk1FjCDkDVcFoizNEDdrNyb9xJcrfpkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fb7XjJkWeszXXcKHWKasm5UNj97skLXn7WCA2Aj9uH2PgAsUxcGBuqNspKWVJP3FYu8nS6NaEvEfu6xzj6bJBqv",
  "key1": "4FDQNdoNVGrjn1QTemChTugdP4M2uXZEdhqYSu6hw1gt519fgfJV66qDwrNDLYU5QnxSHkPSB8Y6H1sd25WKCgFr",
  "key2": "5pkzpRZxLfYdmqwgr7upBnDVkFa7DNRTmqbpork5jJJx55b92HWWEjJaaSRBNQ1fxgrP124kYSZcZucF8Hp7gPHz",
  "key3": "2T1ya16DaWDNi9G3FGx9VCRs1iS4gxsbrT25ofgLqDEf4wP84uBA6sxRjoZMcVT2a38yp9iaswtv53CHUnYxRQnb",
  "key4": "n3sCcfqTkxKv9cnc28v6RJX6F6n7pSEU17Pc1qGMuPi4dUQsm6DZR5CSLVryp8hg96XEvEAY1ben7ADioDPBYkv",
  "key5": "SzAYHUu9JyHFcaV1wMe7JYC3WzHdif3KEZmq3KbA49MfKsXzBjHQY4Kru2a56TxF3zaCyDFzrpUeyAZLhFCy5km",
  "key6": "4hQgrRja1UBBgEx5tfbJMoaTUbadYfFFGxCgrdBn86NBZLqHw96xRp1XgiZQXskobUUh1AjLyevKqH8dMptU9onq",
  "key7": "3WcxhRK3px1UdH4QiAr3YP5XWqM1vzD36daTDdSMDmJVJBsHmKdQeTvgeGnBJqq4VGV8rx8T2RsTRbe9SBXQyQWB",
  "key8": "5pNYkaQZuzJ25BSbyrBoVZy97g7vjqrHRPvkAm4QGF4XgyiZVAson3Vaa6o6U43Co4keBiA1P9hJnN5v8KHbw35w",
  "key9": "4BCMxbRP2jHmtm87NPrpdoQuzTgWfrFD3jqBzNefWKwkk44WWKyGGigTrSW4oSc1ZxesdpQQdYhXU2WtX6MU3t2x",
  "key10": "3H3hmGiE6juVr2v55zvpFFW1jiQegk21Tkt2FsEvqEjQjAeMm23vECWFcR4TpVD6kKJP7mVpyKyQpofdGJGWvsB7",
  "key11": "2KF2DDgro5WjDDnd3zbGeUqGHroUkiZgqaiSfWr27gpAkTuc35MGXajQXG6XDWhBGQW7Ao9dRckW32dAA5QuPPSY",
  "key12": "5yMSAiJYgMhGiX8pRwSfMkKdmq4NckrfcPsyjvVCBjv9zP9C71vcyBD1oxKRg6H8v4aU1zQMviAa9nw5qW59wDz",
  "key13": "UaVLvYuBryXMM8Tq74QhMWDvGSFm9i1hWEYCoVJdyxh4CZWXh8zgmwDmwJqtEuCWzFh53db9UzBhVAKVPg9Cpof",
  "key14": "2gQ4vrTEyjvsoS3Hci8GTFLAnBUgovitjUV9Du8ruV922tTNqLhGTgbq8R71K3MazDvKKFtZV4hniyH7yoc3GSjm",
  "key15": "5ppdPT4ds9CUSoCvbTVjoG8hCYmhm8ytHd2ZZz7mbpj62kSkvhNCCPpcktYzYZxGSAJnnYafWqY3D7Qa8NnmiNk4",
  "key16": "fQBfR8KLnH1xJTLtMHLPYnedkw4qog5JjVRmqh1XrwTXwkcW3Ke6LjRu3u7e7edeGL4mFfdtq1zVneEcqmYWg5Y",
  "key17": "3dBGpSypvE8s73F65tjWuVyaooRTpTBdnXjbZaiaSpqiRQPR1yDLCipWYqqrsNTQf8TegcALsphkcLY5Gkr9KT9V",
  "key18": "5rZBHQU7Wp6Mm391tueY3AiANQvnf4BRuf2yAUEicYpRqDAm29mQuwDBQi43ErX1a8yd2jpVsS3iUVirRh7x6qpV",
  "key19": "5wf8bLYw6vx6YWCaAAK5PqPSJwxXosvw15KNvaFpXWtPVPMPhhS6EgpEqcn8YGMXADiJhZy73A3DJK1scJDdFLeB",
  "key20": "3bRP7vcqpwWRab9mnpmaBDUhK3CjSzCuFko6KCvVemF2KykGysfHvGQ1y6JYMPPrxxBJu6hEESSoe3tJoM3XynBQ",
  "key21": "3xjCoTT1UHv2Dm4ALebYzvvyhmD3HWmK7szFTSRZ5Pk4xm3dHkcK72FwU4uJRs44upqAZMAxCakcixupdaBrQJtc",
  "key22": "3zAWapjtresZCA3uZHjeuoT1JsMK3zB7zaMfwNXB1vjXEZBNrLeEvjZjn69gTTNkCWJLucAe48AaZsXdvzxe3iZA",
  "key23": "3VhfvsxmdedR457SEkcEpDWfGS2kngXsaUpuR63oMzZhrJGMs8Z7P4CXA78AfckN61cz2YYafCgLySSyPfsZenp7",
  "key24": "2QP39HuHABMgf9nWsyENn6fSCJm9QTdhvGNhk3zJf2gMbvaLV36f3LYj9xk86bf85PLKTYCCFq2rw5SHc73E4oha",
  "key25": "4aREtcgET5aY1XDWHWbUpSmxJPqdhXnqjxidu2NDRuDhdEqDBamXKjLFKaCfwHeavgsRxQJZAwV5LkksKc8Tf8y2",
  "key26": "4rAgu6SGwXNWoGUSeczzfLWmbDnBmaapyHG3N5DdekRqzLDPnTdX9S1hvdD4pNgajxfaqMr1uAhz9MMYwJ8Y8fQF",
  "key27": "4JtN97hu2Zw3vJr744qsZACaWbx7hi3JQaUjMTjZ4QPVu27kLJhFXF8eWFTBdCmANjBuLYhkZk14cayxbULoNwCM",
  "key28": "5Jc2dbDQwWeJVeyZzhKRTcUoQBowyrnfWpCeDgVWVrhFyzMWLfKGYGteoa4c9oACXD4cyizk4BZS9GJsE1jWVBgv",
  "key29": "22waFAz93DYLNSxMkP1ohennVGT864KeNjbN2Vo5Gu1D8sJPjL7JffXg6ipJXWZn24Vks2hJVFmBCbeZStHoY388",
  "key30": "2CP1xHxRb7A6Q98Q2qixyTF9L5zv4mDfnxKLsuYbBo5p9tXHUEG6R9Zb32MGzKk4kJXm4hn8PoEgvSgk3fusBHB9",
  "key31": "3RLsNLpTnQkiwYi1FQGYRUZFgcsJYjTHULPgacSgbfWptvzoUWLULjMUCCyPAneQvMkc3aydHynQUqjcVYvEQk9u",
  "key32": "2t7FRQ8makuLkU3KJcaCoS7hK28NhnC1uYiWdqW49SrJf7VRajGLUkCNUPjJ5vCgtS4JfWFts2tuubxzknxogMos",
  "key33": "3gyn9fApENVecT6wiPAwjxfK6rczddWdrPJjuT8gNHVdK7ypRRYz879bxv4T6WC298npdc2ssdnfrUjwrBHuJs3L",
  "key34": "632tPMWufBJhzhLvLUEQLjLQRo4PWiKjFcDGjh3TCoCuPPxsyNBhdFqM3wURnbJaR2syZuNPhugkmTJrcU2T78bV",
  "key35": "XWsmvUqvqkU3MobCwgwHy2iM9B6cgXubd2oz92a2VaJtV1ek3sVbLkgkwxSbcVEVqKz3J4Ka5E6cwzk2LvhqQ8d",
  "key36": "5nzCmEg9Srjbfxm2YsyEV7SaJLKxNj8sESKBUebyKUTFSjNnsxj6NyJx5V1XHupSn5Nq2QZeqc243vALfmQ2YSY2",
  "key37": "p7JYgu5xsMY1CSbQFx1f3njNMB79zvfpZZXL2X4yLxyMcNNi5JEcnxyEYLYxtn3eb3N7czFH8SvXyrGMCYunvUa",
  "key38": "4Fbq99QakxvKfazQ6LAuAbd6zSQf3c5EeDbYgvsnoikN4jxAdrHsdtbKodYKZGiygrVS4qMpwXopV2uzuhvYLYmd",
  "key39": "6JZVAoukMDrrDSxjXByFognabHndQKzCRdEuVFPqTGWrudd8gfz3mCoaHPSBNevheFpeTBjBrt1C5AuKKJw5LZN",
  "key40": "2kicsMxXGKCgRjZYHeAhMp7wBWMAvwGke1Z7Fd26GawCv2uTxznftuf3rZLTKNwgBocCBvy4wT89NXDck77ECFGW"
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
