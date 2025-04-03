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
    "34MSQ9YHMTeeggxMNidEuoVb1Z1Kc2Jb3mcy6qTfiWTuhp5N2X2xGiFv3i2VpcZGnp9dG1U5GB37XufepHjpeinb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z77HR6gpZBd3V1WMMSfjCNkxqZinyz3dbQXseALWaK1nmxP1wBRdCFiLRGCPk8Wuc2aN522Uo14daSxe4hfpFjE",
  "key1": "5RgvcQNTtJQxbgvTuYPYzYDprZcsjJyT1RXkQCC3Xy3rspvnomWPXoxiQcoT41y8TdCgJm48K4UxiftVWt93v14E",
  "key2": "22iaW2db9J1LD77K7roPnddiqBESVwY77yF8nf2tsQ9EXJvWb8yvRdFjRrEM9m1kihbRrm4DMpxUV5AiChkXmreg",
  "key3": "51SWNyCTNQQwL5Lfv7jLLo5LpamxGVf8TnAsVTyeysNRwcn1gNFEV31WttuH8j684PYkQycjQgUnaf7M6WFRVjpg",
  "key4": "4BjicC5nqSmWfyJMPYXv6QVqRQm4FD3n28WPvMxu9Hj26bUu7f5iyKzgBE7mW3xsJudVhnEQCjRDNg94QbdXUbGt",
  "key5": "3ox4sQTtQFkx5ti1kDUuv7cjbwMvTj4SYY21YVKo8SWNPK66BgUyanbT3LgtEQXusq2K3LR3292EK8V8hXkiXXzf",
  "key6": "3JgSdKtHXjARrzxjE4LkAp4jGdzjtMsp59JhaezPCXjsQ1L6RhMDtLYnankam4FazwiekeFxJvYk3mCxpNXb7Se8",
  "key7": "5MKj7QC7rwSRBgV56k1c4pbF6XztetmAPiM1J2dN12oNXmVLNH9spuuicZqZaJy7SWeCkrz3Xj7G1GEzFPRmDMjh",
  "key8": "55Bu8nijAuZ6wcohKmb6vTrbGQuYBqKfHDUz7KrzruaeDQEtm139BJpJuSyoW7uV4JcZXspfNY3RZ8uHVeEhttGW",
  "key9": "5DstPy2T3RHVehciFMqkJFaHoWfRRdDy5HdQJBNvk1pzEzCVBGVs3WkVBjK5ECy46AXtd3XZa9z1QwYc25drN4M6",
  "key10": "5jq1tVdgZnZqoLZz4Hd7Jc9JNTdQoSMT9NhdTxy8LF33yvUNS5MH5aMvWaSegC5j8FJg7gvaenKwGGfT6dTBJeuC",
  "key11": "3h6MbkczYdXprHSErcQsmduVoJa8d2PuQQUaPbVFXguzD59eVLouWVA52ZkeapsqxG2sgRREnxhGWPn84xXkTYe",
  "key12": "2HvRnwJzzuNbpSrZVw5KuwT69Wdzq5nTBhqnaCeHgQEm8XsrUQVq4k7E6enj6ZQ3cUU5jDTYrfXjDfNgeUJwNEUv",
  "key13": "2jRzGaNyya5CUGD6cSXhvFNgyvhBC65NK8AV623NZ7BCnp5QmXb7JrUCKv4oh57RwZ889t73wf7PfE4CtEAKsK2Y",
  "key14": "42zH1m5kACC2aMdbmQi8WUXgiYiQPeLFdXG6sX6t4xFtcPy9zDCPaNE8oYBbBMdinEQZL2qvXnCQwnYKgnm3WvQX",
  "key15": "3qZcrQQggRTJo65XExSdL6nWot8grF6mNLiXjDjybCLi9hezT4xZPEkAEfpn5Zzxy3iVwrBTyYf7gfrpzBLfeL1W",
  "key16": "4vydJx2ieWUW1tR6tnacboU5gP26PY95NUxGchGtVyk9K8yfBRD4Ez7hE32ZG6aPm3mEtGfb7YxRu1YfcdD8pUgU",
  "key17": "bkM1b11k5c2fT2xtgbmjh8DLrr6dj2v5nxEo8M2GDwirLbPhLXWHug2tkMLtvpKtYBsqnnNxipwXiAAocYMHb2m",
  "key18": "2HXvMKyxNyp4mYGC4qSDD55cH178WWNDP4VPnXgcXsDTs5rAY6Wq4Ns4aA9eS5ouRULpbids7xDgfU17RcffY6mP",
  "key19": "1TAmHqsajnV3fD2nTr5i7HeN9zZT7eLzKDTRBeEcrd35Ng3nzk2Yh2TGdbKGyA8NnbeWUD94gU5UK2NRmKkJ7TC",
  "key20": "5mvsja7ufFCuF7np8goZodfwsMLzYseck28upS7VwPEAV4hjbLUAR6s8bnmd1zFmrs79vMSySAm4NV1n9dCnXfbb",
  "key21": "2VzoJWMMFZ5EPqZiMDD1ii5BjzbVn3YsfXoxHpwwXYckRbtw4G6VnALF8ubDgNcf4win322UndLGL8vGne4jQkqJ",
  "key22": "pYgC245HAWWpMPLpsAs3CdGUKjaC1ASqoJW1D7Wsunv3GhAsuQFDq3u4naQS57Hjs9cerYEwdaVuj9oXv88uxKk",
  "key23": "2PB5qjCHxA9uYapGQidgh5VTdzJ8zCRGBNsuD1efvj78C5ymktgkT4ntXK4UVpKCbgtK5XW3rad3umCbdSSPurzS",
  "key24": "5MKA2UArUKZPNEhUES86D6ZmAZanDKt5ohFWdTEQZbaWJkSmcQJyRUEhZfu6Ah8FkUVh4CZgghNoUVee1hyxeVtu",
  "key25": "62d7TkFWJ8zSbb1QNQXKmhZuEhai4XHmNYwrHhzMc3SdugMJMPxCxEweYgzzc6aB8az8jqzT9EJYs6et5FkeMBig",
  "key26": "3SxYYHEpPUZji1dMk6unSKttDajDA6KSGCU3MXZKDdgz7bZfuFYY7VcZAvHUB4LYjQg6JXdCDxeq93uuxXPpxyvN",
  "key27": "2D8RZsuA5osBRkJtW9bM7yLhoE3Xa9Eq8wTBjg85M9j7Ld5Y2ex6Sxy41dJ4tV99nWvCdzLmuCVBA5y8ndPiu41C",
  "key28": "2RqwPKAFkokpKNgMc248sCVZhjXutrf3VbHbektN5f6tdiCrm6Vj2LtvnT68LXsncsnjEBxoj1X4n3ym6qUKUdwx",
  "key29": "48QTGN4nbDTvVB7RCdGFeh5PuepwQfha7QZfsaDCets6xtAvQVvtrcJsEuJocsvyySSSRHf8Nw6aVNDuTdvobZJA",
  "key30": "3aqrYYcNnYYRu3WDsFdgzeToCgcHurLkMncSz8UQCKDzhW5599GvvutBKPrixqe1EsgtsMwL5LAq1oPqzyLVaeYF",
  "key31": "5QqrxCrUXxUp4ur8FDDjrVajoyvBqW4Yecysvo9tKTxfYinQUMRzMAiW6h23k4RAJvv625aqLzWsq5HHftwKuoEB",
  "key32": "4NCfzk6fuHTpSQSA7QrnFfjobNJUkyHWCoeRMjewPzuJGupxUVtwTBuSbM11dyAK3zU4v8yFwngunchjGpeoeidg",
  "key33": "59x3xN1RWLzTzXQLfg5e6zfnSFGTfedsvJzaBnj3QCR7WcZQeTfYBbhtyJ5xRbWbDwoDXh2MS4K6bfJgN6evku6M",
  "key34": "5BNTBL2UwsmhQebKWDgTC7LKiXFGMd7PLvojJfxiDGXjR9B8hNSgfpsUcWdj4YSDK8UZPfPgHaXmdV6YrzmaK7rv",
  "key35": "2XoA4M5YRvA49uhYg6LTP7NJvkUL7JnvQmsPVxdGLbtH7ukR7Xw4GJuM1aBoLDriZZW6nUhcjQxnZupzxFQac6GW",
  "key36": "Kgs3hHyKq2qKadWyqSLjcmQh6XFnsCHnkqd9Pu7CcB6sH9dFeUutbE3B52sYtb7XJ4qsKWEFgc5azGy3dMVPXvc",
  "key37": "jdNiNRPsnECG5NcZG18SQChgyNwGHgxGPLAwp5ReF4MmJTV9BiYXvYMfLcJ1ZFtwYwu5a9KEs4yscJnw4rJSMCP",
  "key38": "4G8yjxXuSfa866uP6559JTmM28XVf1sKZ2g9J5fqTepf2tnXaMV8V2izqVXQmDdyfptukNAF4Kktk4XUeWN2Y9EH",
  "key39": "4Kg72AnmDF18h42zBYbDWioPDvcdwEMnEDnmxVtUnissq8PVq43c19cZYeS4Qc2GD2GooHkDx1NCodwqaYGb5oDT",
  "key40": "2nwVvTTdewPvxT8rS9XL6f9s2hTwAwfFaxDiJCkf8JbKGNWEqGpbQyJbDDFK8eUeVi1YCqD4dYGXHm9Z13fhkKsD",
  "key41": "43EZyuWnC7VhjuzH9ypaTD9YKe1hGEGnU7mUZMHYMrtyow1Gm1EGB3j7D4Ed9ts2M2zb3vny5c6znDRB9xcNqeVo",
  "key42": "iJgGrK3vqZotUZwMEpxTXJq9AsyvMGZKtsQHLBfjFPTuWuaL7LQW55jVyTqfsC3KBbQPTLqrcYYfwAH28sdLRu2",
  "key43": "2m6rBxErUcaPJgHP6tiqsGyoMGG3hKuusdS4P87rVnWyQzv5ocM4nNmDL7ik1uzY6uE4fhYZgu1FseXYQcNE5hZ4",
  "key44": "2QUDqnFqUFHk9WURXk2KmYUHjemUveTWHeeiWv8hYija73nxmY9CGZiKWk4eavunFmkqc4ge1eKdXKe2tkbwS8ak"
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
