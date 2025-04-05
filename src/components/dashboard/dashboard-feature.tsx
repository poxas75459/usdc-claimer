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
    "2rAB6wyuxJkKuDbzSq8495nGcVJgjpF1G6MRCmJsv2t69LhgcZDpp8Sw24TzrjSGBongs2HDdQEARYRyHLhvu6e3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HBnkDErKJXwZc43GnqZP6Qb2BSNf9W9gUfaikPSSp2JRU8hwQnTNd4UefX9Re8S8ovqwwNHLwVQ9UEpbyYCRYsf",
  "key1": "cykWdUAW22fdNJq2L4yRHpL8BLqtqh24jHVPrwjGTud2YAC5GSrWFPeAwLVFy9wepAr8EJB8FHaSxwdtv3mfciX",
  "key2": "2g7sqxWxs2Ja5nfB7NTjZ2Ub4rmXSthWrKqP8SRhcNYxqV3MLHrN9jv1aRtNgMGJC9XK5TozLn3CinNMkjD81StK",
  "key3": "2Nh8TzYWgCi28g6S1XsqNSohtamnSMniSh8nxs7BidnBUivcRsWRnUn3Z8LvJCVh6zAituyt2asG4ziiqNBP1ijm",
  "key4": "5Fa3GZCymBmKduqgzKGDaPZSYjWs6i7HeUhZydsHNQM15rig9X8Gqkv2fZW9jQTNJhpQM6bneFJKyuNVp6ssqtE3",
  "key5": "pFGDx8kGtaV6X3KetQnA8kohAAuCHWKyXw1XdW781EDTeeTG6WzBFQZbxh71k2msTxXqgMV5H9PNjSUeCfRQ7SA",
  "key6": "2m9NXkMH1QVnK7b5wtVtqGRz2iVWcxuEQzrsgWzoCypqVCaG83AUJGwm4kg2MosiKx54m3dYD3R1r1Fk1BM9Yv3Q",
  "key7": "3C344SjnATmq21NEqMhocfVitbmkh6afTUrNKMXGoaxUqrAnp68KzvAGGjJZzNHrhH3uFNPwVRDJ9cN5UMqeL3BQ",
  "key8": "2pCYKpMmCisSGVRxCSPzqZGqaqZkYf9otJ5AFHN4aJm1FgZ8Jy9PRJGifr1n41nWhgoyhvmzs9gduHtwL7SmBuQs",
  "key9": "29RpDT1NqFoEYEkn6b4sdkqg7JgFvBfyg7swJ5Fom5GGpQqjXfkMU71Q3fQ7CYskQUNTrE9DBktmTybPgce1aRth",
  "key10": "NkVpPNQopj7yzFkbJWyRZpr94NS6APGWuWL1ojYP3S4TyTN16DrGASyEiyBryqQ2P45sdQzRijn34m8EJeMyaor",
  "key11": "321yS6Y1gSGEwDMCKzJ1LCuJJfabveSo5fYFg5EaAMune7mjMVw9CKPxncX6x3KAFinJ4WnpnUoaRo5MVS374wrx",
  "key12": "4qSx5cU4JoCRJu3ZxEFdzFMbYHrUoQUZ6izWi4takRRVADUuJF5QmP2o2CJpVrW3bxbKZ8DHssGTnMTspsf3Xm2L",
  "key13": "4hTxo1rVBVzsgkueX9Rb225HuTaakUdq3g2FvuHcu6pe2TcU5JaXHfgXtPYLLP9FBtTbGszwqE7RVi4aPz3JMKne",
  "key14": "4muEpsSJxXvyGW6xSBJ6wXHTkcaQ72MjkNgNUiyFdp99JfFf6Vrkj8LhXuNTuLUrw3cH8Ron3YixQ7Q73r4LesNF",
  "key15": "2G3vzPo1xrS8CDo9gmbHhX6M4wEZT8HebMjrPnqufE6KEnBwxGDvbB77NcbBPSyH6xcxcymqhExRHM3iLQBFVnEY",
  "key16": "48S7BQxWnBc7Jd2EeGdMJ32sbsLWkN3W8LEqKs3pTGNiBBQizfuvSxT4F6duhK3edJoUPj3ssGxu1tHUeYEf8T9r",
  "key17": "66FMDvSBcDb9GRL7WcjwbfjHdBFhRqRZgKsdQQDt7C9avGkQ5QGMRqemAEyN3Ee4cCvRpsxsxELagyhgTfCqnFhZ",
  "key18": "5HYbFm9iTf3RjcACGsHpc2PJsB1ShUYqZjMH86Nh4ktS6uUQfPmMHY1bdusRRFG6n8pcqoM4h9fq866tq42d4jr",
  "key19": "3gJAFSJpWq5Ebm7o325G8HwTQnrRnCpaHpFqhBRnV2FiwegFEVQHGV6DAt4s3o5SJUux4UDeWg3H4MGzwGhXSDct",
  "key20": "39fFs1yuP6xTvoZHbmG7A2jhYB5WUV1XYavJKrQrKTFC4Tw8Jc8wBkwgntnugEwrsp8iksqLr5FtfSfUUrmNbZHy",
  "key21": "44TTKatkjGWdWTym4WJdAfepixAdi7WwCAZ5L2ui8e69CMtiGoZ6wfB8UsgPzEM3wLT1MQXXuKg9vhTm7iDdA1j3",
  "key22": "562FY3oHr2eLguytAFieJAMzbbMJwuWCKxYFM4sYUDCjnLK8LqRRgKcrRVfF3ymDF2xNxpKBZ6fXzr4w6T4rV4ot",
  "key23": "5DXKrgGUxaoLkD8UnsCFKTHFxnotThd8y966SxQC7wZKQLeNaMFm3rDxpnh6TtApJwAHQzBZMjWNT1R9esnmAnXc",
  "key24": "2Tp9uiBka2GgHk4BKRrx4bS34Y46iRMrMPNiXpXkZkb9RtgN3psjPMeyFj6DknHHGiJGrrLApntJFJavF64Fox5b",
  "key25": "33EEsGEWSKzShavSpieqM3ETYSRtiK1vJhnrw5Se8YHzgb7yPsapLmSGSkY2Uen6U5gbrAmQ1CGb7EeCPHPG9jtv",
  "key26": "2fd8FrMdjyNVo8hgz8Rc1fJLsWC4hvbUxREvhnMPGGjrhBLrwma2C4yhbYU3mrBZQnuDBwRVueuSkoSoeP2sYmg1",
  "key27": "3YmJKBetdLFVJaC8T8zmBVDYo36sWuMyFcvLX2huvTQFEZrNzNvNu49vrXCf9NWx2iRwv949Ps3L5du3bqcph5RD",
  "key28": "4qfj9RHgNkK3HWx65HzG1ErRMDTbneuerpvqJwiZtXYBqoiMEGdMsjsZrzgBYKvszHD6juDveaZfefM5BBd25rjE",
  "key29": "2BRqPFu5jUhznk9BpGCjYdCsENY2Q6pbJtJ5CL9Lj5dZbKL1AKVUEkzkHotB68abGw5pX5jqhUyNzERPLMCtcRun",
  "key30": "sofF8PndJ3hA6NmG2uNJkHj5wEkd8TSsSPFTjtbPY63NQ9AzPFrDxYGe8ekts2jkaRkTtXjiuZ4pf6YAAMsxUKi",
  "key31": "4T54bd2T8Zb9aYCesJiWzjCJcdBkwwJ8mxsyPNmuCUUUJMVn1K2BnEMo4k2vKDtwsBPhrY2wujzQVVqmEbFGHrLt",
  "key32": "4xnEhoUaMd4rGPgahVSMBFWm49Tw9GRtaFLMZPBaNgCsMqUk8b2bLcoUKFqBy38cyLjtxQBRMSohpn7Rt5a7Yh8U",
  "key33": "2XcAhDg3NbM47HfKFJyDBQSCPHBJrLJvew57nVWHz4WdN8g8GVWbmDFZQbiYvejm3sQx5TQhXvkRDbiPk4AMiLX9",
  "key34": "4PEbkMKEeECM25sQBbfLZS9q3TZy4t6Wynrevo2Pa8GvdjJsdYxBnsQvvUjFiBxJNmoqCbhzrAU5u7gd4gL8abLe",
  "key35": "gL6C89qtwWiHRu17NV3jQ8oK9yZxhE5D9WfTS5ZHkmNop8EQ2LgaoTPQihNvFMXJKDtPp9fy4q7wxkr9a4L4gvP",
  "key36": "2siv2vSKijsMBiDHzQDMR2M2aCmTXX6wJ53ziVRUBX1iPHzMe4ztFjUxAsyJMhH9D2GVPnSVouPgCf4LckLJevkF",
  "key37": "Z2YTzyubeUGaQmh5djkAa6UzD3ayWi1K92aWDF1gUQoEQHKLzjBBNvMFrLb8tjkGe2ftumNmKpe1TDcD9VgSTNh",
  "key38": "5kj7FtzgxrJuLF3CUrWBEiGAcauTyNL8NeMRpPeb3keCqKPSWHVPpTK9AC65L7kEjkrJuoyHUf1eV5TsAuQ115CQ",
  "key39": "4sBXsFcZeD8KXJMGBoaztYdr8Uw39WnE4oU3ADisdQnGKJMrp9NVSwU5Uo1zjgCnyd9Tn1vvW67uT1KSpexTscWy",
  "key40": "5gvz86pm6RvGuvu6AaQTB4WHav4TKXMea5VkgXkpmyMXJAD9DU6ctrtRVJqnWAY8pww3p2UeFJyWVHEZVq4sRfNG",
  "key41": "4ssZCMwKW6aS5SiX7ggn7UvH614vBUWVLe2ZcexQhWXad1WBHX96ss5m6yyZMatmpwXzADdNbGppLzTUmqmjYGnv",
  "key42": "3KEMYc7bSQKMv1mtjAGZzn4Bx3j7Ukb6vRLksnyywvH7h7geQSY8qvEJoa1A3XntcZBhDh4i3K4dZBp6HMCERJoq",
  "key43": "CRLU43U4j4dcrfKYczpLGQmWU2zyCG8oDeeUZgSj8ugjyTL8fJvxUquAcnjcLYvbKcYmyUXW9H5d3tmqepZR7X8"
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
