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
    "2UVN8hwkXDRvhjQJXtnXQoHiu8GguXJqwSZs24ZK5a8sdBpad22kKgAdJzh3TQFULit7haYjQhPWECX4sGKk44YL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nXEzCbEPfwQCdJohGxeuinLCR5R4ntm8uvoqoPYeDwZoxRCjKmjb8t52skuvBxMKH44cfBnEz1js6GyEHnA2TmJ",
  "key1": "RKLRgiy8TJE7CcLwt8RFYDQ525yEnZMBiL2psTSbu1YZmtNCWdqsFFbYxKyAVtHYeWVizMEkGPa4jpRhi4raGjF",
  "key2": "63DwgYeYrrk2B2iMpFRZe49n2eug89XuxC2285rMFs6dRy4CGCKD4ZgZZ7GcHzQY787Lt3LuT2effGSNHXy88fTL",
  "key3": "YJoCBAXrqzPJXZNYKSTXViVDzLRu21Q2nqBj11hbZHerAnBtpiEGpUsPsRBTELFrGFg6jHfWM9SfjbH9JB7J2jC",
  "key4": "63qsiNrc4oTckSdBtZnY9k4Sxs7CBJDmkdsjsM8bTrmEiiDDLs3ddUBi8PhMnQHr21FdxcS7ReBmBSsWou2KBGze",
  "key5": "3x3KtnMyXKo7ybgjG8rwJdF5PGG7x2S5tbWPKs3fyMtZAJW3grXszaSCYn4aLf8vPxLfYHEsaxmgNQMc7dzk3zGN",
  "key6": "4L3Ka65RTY6F14ApqGr442AHEtHNGoPUrTXqX1PyoFLQHU4mpoSDBVz9coXbqYdD3Vgkrb6bNTrgdTzoBgXznyWU",
  "key7": "49KVMKRHJpDH4XHV84u8TgFVJmGcytuWJysko9wbR1TA4HZDz3gWmh74Ln3ftP4aDReB4nMqJrtR3tUcUFU4FSFE",
  "key8": "jisspuw9TfR2ZaTPThJh5JmhdpzhYD5uMXp5Bq8rjzZHZb1Xk75wDBJ2nUYcBnArC2Qh2CFb6t9x6s9tNv1KV35",
  "key9": "2Em2rep52wgjG38kXrKbdDBqKVDkXyNAiSNz9Dreaxp4jC6WsQevL8WF3zx6EYwT5rRb17F1RynUHHw99KLSM8Tv",
  "key10": "5Jt7PLrx19FjbKZzcCvfyoqqwFDcxo54tprg7taoS5a3BVZsRSvcXJSucZzc2sfxWXv3vkLZAzSGZNbbFauABL9J",
  "key11": "2NKUTcjfzQh7uQmbZmWwBkH1EeLcVbBkJX44er3pxMbvKRYRaB95pGP7wH23UjMVqoFgLY7QrAB9aeL78Yh71Pmp",
  "key12": "3H1AZ3DuK9pWEEtrheTmrqsq4dpfEvN6wJ7a7YphiZ56RT6YVu3Arnvz2Cm7EVvHCB9Y97hurF3nfb3tqXqBSECB",
  "key13": "3waYPnaRZm7pyAFzSxc1DcZ8AhPb79AzvVX1QeBCGf97nZLMLgpo89VVb4y3Thg62adfL5rUfuHRd26ebmgfDk56",
  "key14": "44Vw72sasdUE2q3AonoJRDozCLMWZZA2T14zHgdaoEAC7Sdve9iRQCupYXj7JzrWjdMcbPnMM213LDR9YULVJybf",
  "key15": "3ZVsirQG1NjAHCqsvY1rdAG4FgXBs1R8coDuix1rcd19mh4w2HKTUSa3tkLLEp1YY87LaT56mt9d867CPjjAQFvL",
  "key16": "54ftrDxHvet8ZAnkN6fh5osbLQQnsH4vsiDmMHXoMiPsNi3ozKRE2o2XKidyoG5bK1kBK8Z823t1c1HvQWuZbLKh",
  "key17": "5emizDuygZp5XL5ycEPyz5hCKsRMhP9aWQoiKhUJA4KsYcsmCnJbRmYDpAZLDSaeRfASnyiTETQazr6bnZhWR2rL",
  "key18": "2ZLJVvJEppC29c96aJJZBv613GmE7nX12YVsQVm8uf2uQ5ryMptE8FyZ58f3jESpaXEhwQqez6BM3j4bnG2sGBLU",
  "key19": "3mDn2oHFEXQf4ap8RtWuHZ9FhjBTvC5fqAWMtpGvxZyBTGCezihJ5zKjknDKAkDQ4PXbDKxzANE4k2eb6rBstKdq",
  "key20": "4od9x3ZCwiQzgfPvgbrDBv98EDGGPEBsSt5BL89snRFEWvdaTYyan8YavLtidvn5YDLj6cmgXhVsUQpbgBrLE2cR",
  "key21": "3E4NTMh2gUdNuX3FoQbStyFS6Gq4Jr6ZnmT9TBGATL944CoRqYVPwRSVWXHiatY5RvDWH7PLvYaERrvhtPgsKVE2",
  "key22": "2HqnprijG9PgwW59r3JMs1dD2kH1hJS2yhGXSxiXXTQoqihJZZrC3e8z112S8Ra73jh7BC9Jsf7cN2JnKNFqDfxP",
  "key23": "4f96GaYij6ynWA2iYuZJAyXHwtKENfYoTrhJmLDAy9Fgboay1t3tcUnk4qn65xCHvpVrK7TN2nkfhGMEiPZLe9tq",
  "key24": "2Q2s8j81DqdEiybWDRnfQwLMGhtdLi1NtbnpyZmQxEGdxi4Pwy7CafTRLfLqaSmm7eKUNS3f2spVYTsF8qqaYGqw",
  "key25": "41ffRWvK9LLBmp72fYc6J6GurogrigpcaKJSupDSUcY5gbiuZU6p1SmUrcTtZLixN3vQPMC37cSaPkFCuEZekDno",
  "key26": "5fVfL99sBLkinZmJRCjqrKmM679j5SQb9MMCzX8egvv5H9qMonoaPvAYdfEtV4FNZUJnvqyP2th8WzcDaPTvZtsq",
  "key27": "2AoJw87FcU6qMXQcvHAVDn9pqtVTZBJFR5xvmpnoFFUbqqi1qrhU7WejRcQVYx3B7L6gypoCUM9r1jYWNs6VVdCX",
  "key28": "4GKeXLeDyRcCAKRn5xdULNAjmbyZdgsz56goKqqELfKTfng6RzY5QdbjzbncAHki3A26unLxWUoCCXHDx41wFa1V",
  "key29": "43HLFqcX2eFHqqY4Um6i5Np2hjyfU2C1GnQDbVr8ejGRK1dpWrwGe6uj4TqscgBwvtmnDuZxVwAtzexNkpFYgXur",
  "key30": "5osuASePSaFVKDYcMn6zt4VMQcUFe2XCS1jtQeidgagbig3jqwPFAUkSgpmNZrxXRU9fkYpfQ2fAEJdSjD6DQLXg",
  "key31": "3QUB4MREVWPbJKBgvAN75YnupUgaxs4g15HPEgSK4Jy1PrEqsoLBgUfRiT8WRHHi9s8ud1kY45ZdegipYnXPe3Hn",
  "key32": "Vf5roTuMrvxsZqQfK3jXzUbQM76JzPvzKszR3MbjbhHYSqYUH3ZguE6c79SnXLkcFRiM2Y5or4gans1tRPVecdH",
  "key33": "5zh9fiX3Ny4YsToD2ZaKjW7Re16XHXiSoyuazutP75pbrM9fhw1fPs4kUVVBS3D12PfQEPWT8tgCTLkXH6mTrDm3",
  "key34": "A1bjNnm5LHi1qqqhnFdmEqA7vxsYuqkz4mHfsVLdzSUr6HeQFiXikPjxRrYaVLzpZ2f3gWMjwWbpw7AAKHYB1xN",
  "key35": "28tGK7QoUndTeX48BDogLaWmU9otoPzZGTPjo4HsEif1AW7yrvAXTeXmKB9yqPW9kQQQQjyWWkrox6ZUSR3qx3bW",
  "key36": "4C1BdLJWwnmqJWyx2RWNXBGFDiJSjFi5VB8EXhnGk7mwnR9KAGRHtRTDTc4fP8C24qi9yau4fttkFCJqz2mhbf2R",
  "key37": "2EK7JjWWnEiuPE8r9N4SY91UZGyYgr54Q6SPGXde13WrMME99fptzfzu93p2XsRmvGKV3Y53Ukn23SQmbqwXxzvn",
  "key38": "3s5Fu7T7kjBGg2eC1ddZREKezGuSWqeBu49PfRpanEYfE3q8Ux2Dw3jEEhfLXEYUvippGLUBa7hSsntXPdi9GsAi",
  "key39": "2WngLgA46rxUZXFhtE81u51euj9GDoqradH63gvcbD245Son6XxmTsuDvJPYhnk8vcSTRGdLKEgBNqRaXtCzJjYL",
  "key40": "4PCFoGpkSKWt23qsZ4LDnnTm6GdwDW37jzdFGU3zJA469WCgPvHcA9AvFqjShUsunFEr88BvyNc3djRqafWQ3Kbv",
  "key41": "55KnP3p1uZrAURB9xyaYnPp7Xoa6VifJ5UmiHLYNEyHpn4aEbbC34UzuUuZQFW4V4PCT4BJAxFvTUqFkKSenq1AX"
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
