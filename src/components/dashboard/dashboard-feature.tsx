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
    "SBXpMhdcNQXJbKSutPyNvLpXvowSfEbuKmT54v25bphPfiBZxaTt7BwRyQW6as2v1wnza2SNGn3xJ4NXp6hoE6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UPwsEcBKLFoiAKPi5eyLLxXAsMVkEyhFUSxueXduAY6xcvsMDZziHe49cfVfKJ1wAYvmQcJ5otWys4YKeF9Cc6W",
  "key1": "67XaScFVG5MPjnxJFHURqsLGKVcqhrXdpVBcfiwGHtqHwfbRNEHNTcHqgruZWKMooDoxP4DxofxW2poHNUmBZSiD",
  "key2": "4S3muRKiD3ucQvL51Fn9CQQYFg2C696wGQRrK5W94jptTTZUg1F7AReyubutpRnWwEESyWj7JLKu3ph7Szydiv86",
  "key3": "3f591Wv65aRF6eWtJXSn5aC1doTL1kxoxE8tW6uJpfxb4iaG9Z35CMSvBEaKSZdNvhGQZuAp6a69aPQJtw4Pr2Rt",
  "key4": "4SBqAsL23CVaXo873J8WPd1mEpZSkTejVDF7wyx6TvzW9oxNZGVJF9e4D1gag5g2a2uaFSfKAdc5pbnLvAjw6NWi",
  "key5": "3tVUJnLNxK1SGrXCkXmPZJPbFDmAmRep9ztZ2q2f3DmdBAnxWk7eHQdhwxAYsSDubW5CArro9JMZEZjUsFgaaV7Q",
  "key6": "2Ljq4tvdfpb9nJTMn54F6ipAXCuY9uXjMtz18TXPLRNsDrvi5JGV7vaWNrCuQmMvwWuXpxP1oHkMEY32pudd9JvZ",
  "key7": "4eyReYsawRAbabaucC9VakyyKyg9uMuwu2tuBNxASYF6jhYxJ96iycHFKhChsvbne9evisCnE5yFyH767p66apLT",
  "key8": "mucGaYvkXwaVBdVzLmPA3gXNkJWV9MbA4axrbc6VkiSC5qSDoRphPae1Na5NhpCwu6HAnkNcSfYJw9xmqGFZVFk",
  "key9": "3D47dErKBuaQgEujKsDoKV9nBhZAxcTFbc3JZg6Ydx6dqnZbmyLNZCUJi4Cu1GdQ7UQo9dum5yBGawi2gDkE1cHi",
  "key10": "3BKofKTMP6qfSDfMjW2JUgo1LT6iB2QLwfSnpzcKgJHp3ZhZCpzUDjByaaARwkXsnLEWoMVru7qduyNMJz6mXLoQ",
  "key11": "2GPAh7Jpfm69RFo1Bz8sHBupCrLZzDuSqJ44rtcGLQW886QDW5BmYrm9n27fV3mxjaR6H2ZWe7ibuYD3ZCcUDAyB",
  "key12": "4HEaKDFpmUZc3U5ypjb5MviCthj9QMqBwXB9rWwSymiMtUvMEriLLTSs6ejA8TZ6GAxA2YuPTPu7h42zZPBk69h8",
  "key13": "28oBgEzKwL7mgAf7f9HPbrjVPuFu7mHke5DTsMybJuGTLXVBvieBPHx3Av5z15FBgAk7zpsFEFiV22fVH61LkWje",
  "key14": "59TdMejj1p2szrrJ1zs9Z9aiR5w7NsL53zjD477ZkhztiemiXNqHr1KqkAYY5UHCi3FR9H7LRATobQYWBQEfpTTq",
  "key15": "ifRmw1vgyxXZyfa4H5oysFecyLyqZ3cFovXuu2ZpG3GBJo8Vt2oDyRbKa4mSY8Rae26pmV5s3UftisWTA7DhWkk",
  "key16": "5cQgpwYBbPikwKSXvVLBN1qK1aBjPWdGH7LNByQzgiQ5ueG1QUjyML3ddeiqh9ZDFKCwwNuSi9wxYqkrMf9qytpf",
  "key17": "3mgsrqbKuajR3REcbPRP3ZKaJtSUstjVrKPXLog42R8K2WMvuAbJwuUtEopgQJhE9obEnoKMBXuihgm9vmZeSD5j",
  "key18": "3pwHamEB8xWsxaqdYviRxo8wVGw5a46gKg6nD58RmQ3u5k47y6TZxAqfsbyToDitR6byU2UBexfbAgVvEbRYrgC9",
  "key19": "NKUT5E5MTG8d5qnpaULmMA9vwwQA6dyc13aAxFm5YVdaKaD7ujaSzWEeheUhmY5ohQRaU4CfLvSY6rxapjUSuS5",
  "key20": "2QpjvmYszaU2E2cmtnHEymqKz5DjPHFy9zWRvx29vzmvSUEHpXZY5axkQPnpaN2JhTa4NNhUg4KMmy5cFtNac2L5",
  "key21": "2h32pbPkdzE3v6GLiBqRwVsZuXK8b7fbGfGBRJNaPUxAxEr9JV9hoHFSdQNFhn5jQGo1tp8DBmywxPP7GWuPkBzo",
  "key22": "2C9LX6zrUdkZ3khQMKcGAQGTafmaVPxyr36eCQaeJVWbi8Soiz1KiBB3pKDMZUNZN4ScAcT6SMK6PNDaiptbh7au",
  "key23": "2XGavAA1YQCjvHdnDsvXnBM2iDpVG8g4138U8KXABZ347izdVGNzbdKiQxbfX9K2jFsFLBRnmLGvzg6crB2i1hBt",
  "key24": "4MmNw3xXdczQPGccwa2g6DHJRuHqcwDRwfLZcUE4G6XFMSBAn1dbYtAKjXXSDEHn5JuJFAbEnx2YkYiAJZJ3GdDo",
  "key25": "3TYjP9A8g62KXTLzvp7eKjWRN2vCZSDJozpTRkMsMZX8LeABeC4UMrLsPMJXSVpJzpEk5SVF3w2pgYeiJCAdymeA",
  "key26": "3P6zxnw33XPt2npLiDsSaeFj1CKDKEJ4PAQ3B65gFiYdV4GvfF8A2FzxsFwLssp9q67PU9He6kB8EkKSuscej1K3",
  "key27": "3KD8GnCYqVF16qT9B1drZwAfStcs9cGUuf93tj9cDndYFdy5fBWtNfAZzQq4hC5J6GAA37vs1DM2TqNSHn1gHCbk",
  "key28": "3kBoNURnh1PBzNdxdwKp76Y6SQXVhqVA5D6x8Zm7ZtZV7PhfGTHBA6A9PfBifv5WRrvh3RnAAtfudhLqwDW2uJp8",
  "key29": "56s4bu5ZyDrktJ83iZ1cTy8B8RSyjqBj1tqZ239hR5VM913bDTkc4NYfZHu426Do7oEMdeXEgtsUZL7hZf68SdV",
  "key30": "58heziKErFM3B7ZLL8YrdfTj9aPW7tZaaHWmygfdpLv2xYUARiNrVxRjdikA9uo4DWjo2rUcTWWX4bUD3ieDoX8c",
  "key31": "2Tny3ntV2JV9pzK1yJvL6wMc8KmTWt4cCkS1EVXQhpy6vyZ9p8waNuiJwiqLpbM2qPs5vhfSL8cx72h5tcS4QSRE",
  "key32": "2XAXrEKWT51cKYLaVYjGYsz96M2iqo4MKcdR7RipwKRCSftAPGpZ6knUMCCgdm8XNUKqtxuDs72X4vxhb1YgRW4i",
  "key33": "3BtDYL94zxn5ekR7UPdpErgWkTA8zZ8DiwnNnuB2PPHf3xbLv58P35PGhouZc973ygp2w9CshTtjMW4rWREMdWuq",
  "key34": "4LYZdFbpspn5EV9wjmk2z73EdVQkFCJwhP47jy54uS1yV1GfqRQMGKxuT3A6FF5ra82HM5C1iKZ7CzvdQHKcvtYn",
  "key35": "2MzXWjErwpXJZd7uUyb8GpYxnDTXvSUZEk1Jxykk7nm7yjBtqbGCX5khKG5MN4JxL7ba2BXbPnxMJN5pfauopm3J",
  "key36": "smF7AEdxYtyhe2FgTXFZMvv6k7bSy9DKj7FYhWthFKnZ2wR6sHDX6hsDEqwTKahLSNZTjrq1wWLSSjgrPQQ4dNJ",
  "key37": "5xwNU7NdtYgC4JsMg2hTJgwRNjJZTig4zA4ZYq4mMx4qsDTSaiV6XWfSDNw9n8YvNotwBSM8SSMf937uCa4vpVfR",
  "key38": "2nsJ8LCs12tg9Y8Eb7WLzjNJnjzAykdy9MbDY64Adj2YLaJvWAjTyWiDq4evUvTNYB51C3vqdfmtMYNPtsQy8r6C",
  "key39": "E9F19PZoERgTXmcQiouH1hPtHonJksjFxfttkXK49KRm3RDuQanvQC7w9r2L8g1uy7zH3YJ7YHjnTgCDXW99jC7"
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
