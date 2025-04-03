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
    "5k6F1p3bFJUdPnjbZoghcPNtbthWEbFqEWhsBxPKMQm6k7ZYpKSuPsuMCQNGUCYSfYwaTgMY6bgvK1wrm6X6WX9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46VPzby8rsMFUVDbKtmGcdktfL5G7VnJ5ZRxLUUv1w3TgD8PRMyYBGdEokyaTGxSJU61T3xVEt84oiTSp7ofW1Kr",
  "key1": "DJuXcZM4opwFE2z1r5WpZ5wHQQRdTqZAfawBHJG59RPKAK2G2arLPBTcvZh3EjKDqhdLuNrct6FHksSEvaUCpBJ",
  "key2": "4SitXocr41SxcCW79zWTT1Zp8wKV2pEysxwGxLGk2v6HHdkS5JQLgt283vAnrTe4JRcKrFnr25po6axbho2QPWSK",
  "key3": "5Nqb1uJqX31rzStF4RNcTyUxM3U33K8zXwVZ4C99VMxiEo89fieVQTtCzufJrASrXS5iG5DvKusLGC62cpCjxUYh",
  "key4": "43HsztaaQE27h29simmt2DQvDcm2zUZpQ26LeThvj2WWk3MgkMicADgFVLYYHHhBgA1xpsVBv9aEaqrBkxdTMvMC",
  "key5": "3bnegsAgnNksa8mEkZ6QiD3pDjtUnjBr52mJBn8TptBSn3xHbM37BL4FNtr3T8gLaoYfB1CaKjj5r19LDSVaoe8Q",
  "key6": "3gEVftqRWkWaociuuhm3CLeCRRdEwvZeeBK84cqd41g16X3xHvodDMydi8qVy45guEDrdVUkj7oy7GqyawufgdGP",
  "key7": "2piS36mEXZp1HRVvdn5kv3iFewG28enNWP8upjUySJ6Hjm3uwm9Mbvh6sArTF9bndKXqeS6FzrNCaNFMDreL8XEN",
  "key8": "2zdKTeGo4PC8XBUeyBzJfyYS1e66r2xKRRjExMhwfJrqzG9Xhsy4HBvw7zr5YhGb8Hk78tHyJKu9txfwwBkRxSq5",
  "key9": "nHacD1A7V4Ham4PDY95KQbmbowhbo972BQJ7AbbMhxNByTeC7obFq2daECVg866oU9nGjYF7u9TeSrFWc3CxWHn",
  "key10": "7f8xDafFwvMeCDNePsacagZufJaXckUjSizwisjkyxdFg3xgsxAoahvSost6cbSbA2F4aB9X4t5qxevnQhznH6K",
  "key11": "377APjrvb9BwqsCBR2m5enYJY71LDE1Jyu73qjMpU2MSoHPW7MMUrbS1f3eU41u42WVwP3Qe5Sra1cNeXfh53CoC",
  "key12": "U5h13SWJe9rNjBceZGD8GrScpS4jMrFUdTKiaLyLXWFgg1K3tu63NCLfyx3NyXW7JBn4x2XJSJzY9NxCqoUaEYz",
  "key13": "2MkYvJXUU5u7DGypu8G3uVE6GQ6MV37jn8eVtP6Kkk9y8Uuq5hEqg88bW9m1SJSTVGggMysZGCa3uUVp1AKMpzVU",
  "key14": "33aWQHxsMzvgR1kBQhqGHiypjDsNZHHMTZK4tUGjTePHN2tXwz5CX4KA5BBA49TGiiogWJbXuodqHEmqfNhV8PPo",
  "key15": "4sgkMXHapNQwMW5PHuqwFFXnvy9U6XoUKt4Pea4pC3ztTHCu6mSZw8pTTmtDTcYeeYqzLk7B6oDooxhjw1XFDmcL",
  "key16": "46Yv5Y5WJKmxGzwQeKduZQR67Z14DZJnzChYECfWTQhYRBujc61ndfW9QLawgSf813QALeJTSkHr4fGHDEH7hY2V",
  "key17": "8nit66MhQ53BXD7pLWgHe8DB1Sdu6AXhaTfeDZNtok2DaU5R2xJ4mQdD71uU2zd69rey7qbTKFGAj7bsMVfEZ2G",
  "key18": "29kDmuTfSbYJ4J3yNNgs6eNXiXGft9mJw9gtayqWyZc3Chbu4gFQgh9tExczBDkN5A18PnfCBqezBVztL3kteg4W",
  "key19": "4zwQ8omK5ZfvGk8jbZzigJiAPPSkBW1cUJLJVs8czsq6DytGq1nViK6u6ybWdsruhhfKrGivPpHtHzmzi85rqzG5",
  "key20": "5dHE9VLxTAxYbvGUrBB3tY4c1j9ggK44aQapGsj4cLBV8ykMcdLnYzhThUAUJm625yvBLA4w9hozMBQzLDLypCGm",
  "key21": "3Agyu3setaiYdF6VyS3ompu6egQYfir7poLD7euPFpU544y9kSxpbKVmqUpLcWThrA1wULmx4qAY2eKmePcsY1jY",
  "key22": "5izBRZYHxaJXWZZBqa1sqFLSTrbooKxM8Un6znsfNUJARJkXLouh3DiTnaQYLEKLhRmoA4kXXSWMwf3KvxnesxFh",
  "key23": "53bdKD1tzUpG9dGFHnZGnqAkZb8372zzw49H1YJVVQoWBW5eATACioVoK3k9BAZqCeocooae3ALjLgxVR8GBu87c",
  "key24": "66pRSw54zdHxdjdNL8Y8RrKQg1xzzDRVzxrz99Jwh2tFmx2vkbMAZp8iT82fua6VydWKeCCr9wfZiq238DiA4Zt5",
  "key25": "5BgP1xitN9LARDexk1LHKrEoyYdtcCA1qYhYyHUQxhDtT7S6X3RS1b6mgXBW56FAJu8ydErMgxjyvmiLWRBVzFxB",
  "key26": "4Y3i8FsWCaSFuRKigyNNqrZzKkKbxbAT2sSNyvPjXSrrRbhaFL41yTHkixsEfshGyWXuDrNqgaBWZZ72aogdLRH4",
  "key27": "wMdS648C8UVXZf1wzgVDomdJ15XL7kQywTbPSvrbA8bEYLBMEUPqGRkE756UCyhYYr3R29ZHGMcoxPomVX1hb7K",
  "key28": "2m39ycwhA4UCZhzxGXZhbCjK2FELPGvhe5Cqf54b9dd2paTa7Sy1R7vrnyarcsViaCEBcVfhvpe2WZCopZwJ1YfA",
  "key29": "4tByXvFu84bSaVJqupWbCUinWzesQZWdQ73RU5WBooj39etrPuZ8d1Z5kQYjZX54NzTo7WUJCA3vnqNGfjcTPeZk",
  "key30": "2cxHseLsAZcUNgugkEQD7en1eoaUkXAPEU7vis3bsL4xLzYysWYkrgWsrxAw3DNohE3M6jEhZeQfybbn2KJag9Ug",
  "key31": "3SXTxzD8ioP5vfFZhzSryh12yc5VrKDW68kyMfQ39rBbBaaLd5e9isVF8z7ut4yzjHhi5mLYHtYDVLK73GThcqcY",
  "key32": "5VtzD9Nwh9XsFk2rUFgQJnwYEsJjNubsoS3awwt8u6VxQj3YZvXtYneDazcEYrThv3YYgjZPJdp31JZpbewLEhBu",
  "key33": "uoL6bd8Y99iQsKcHyoYnp5Yk6VKYW71ky6wic5fswWKYmJuiUpj7HjB317fGDCfSeDXULBVAZqq1GnCT8D2qczZ",
  "key34": "4UjCTHrSKffJZmrSiv7nJXW4RNECfC8scvU6pPMw7fx25Gnng7TkbZ6wVdPJQCicMCVMChid49g8T4wWrpRyQg7m",
  "key35": "3usswfFCziVnfBdi6JEVmVwpTdVvkvoj5QLUYC8GbhK9Q6gLCTP9pGZxMRiUsuCUErmRvsycuW1bpxPA8ecGM71X",
  "key36": "2F3KoRpr2rtUCZRnDBkSm2ovDDeh1daYTzae3fBYX5nUTswfsaSKT46jQRN2pjsKUaBBcpGMEa8ENaBy7msE7SKV",
  "key37": "5gWdjhMtEW4DRhRerW23PgkZi2B1HgnZosXEE7b19xiqxpUA6HD1LxuonQ8J9kPa5nu6FigAnpr9cefZztReM2xQ",
  "key38": "4fuhwZdZVLKFrEeQzgJYwiAxCgFkhg3gAPSJrj6ZJ89f6k7sHLNVLrGHocPYWrMwRk3HDbb21ifkSsgoc4PWK8a1",
  "key39": "4Z24Z9JxFYVfdkA8dxC7zaTKRmqgEgcgtfKox7QdHZoYz2iJtviT26QWeETnjVf2m41yksbfqd6JX7jq4qURC7FW",
  "key40": "2mMLxHA4WaToaRyKN66tfehJbU1Xf6s5npPv7ACBiuhmyaJ9o4i3VyWwtiQMVdCTdvCPp95f5Yht33P6Jdbov2cR",
  "key41": "3fVQ5CBs7hrafn4fNgDyfYUKmpAKp4QU66NnrXcaRpqcCdTLzvNrckJ3DfKiyoYHVJqbrWbvXMV6YGfg6MTsR4vm",
  "key42": "3ro3XkKKphzz5w9jGCR6Q8yT7fFsHZHywH6PCK7cwhZGB8NKEVeybvosU6qPAwPUYTFmKd6Z9drfQbitqywb2oPP",
  "key43": "5MyffBQSSneFS7vDEUAa5YckiJ1LVAPB21xHnYQTZ9bzdmA5XiVzzn5iLFirErUWZdxEzDY3CBeYaDctBi6gHDEA",
  "key44": "4wNsqjiPReHbj1xwHm1Nh5CAeqg7iwrJ2P9zDWVW2saV5HuE9V82huYg2khsQv2bzbWPL8CMnMkPFkU5YJ6rNHx6",
  "key45": "4JYWUdssR28w6dQXf39oC5L8p1jvUrv5JtpW2oAyz4ed2hi1aU8WQMz81cZkFfCeFcDeXtcYwbporE8nEw7vjkWH",
  "key46": "4tpjiAg4GRqgb5bojb5NLpbA7D7DeaWF71u2HNJdv9syW7gmXoLpj7Y8TgzdztynBMTVQwe9sZx4niYs983LtLFu",
  "key47": "HXrcovPeCspyuzjeLuCYc4KcZq2dygdJ3B9eAjU6RWDtZQB8u4Ynk5UaUjrm4t93uMnLSU9E5FgTEFehnmpBopp",
  "key48": "h55ypnYbKqzLXyPKThgRtStyucncKDZPvEj22AGifwVDs6AtdotZVNUzQajwgceRsAzLvvorw1riC1XmoRTAYur",
  "key49": "63EG2z3XSifBTFDMRM5u7jmjtV3dARYoPtznypDjCJEbKMWV7i4gfW6JC8Tsvjex6gkArq8C8BuBzHDqK9GVh9C8"
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
