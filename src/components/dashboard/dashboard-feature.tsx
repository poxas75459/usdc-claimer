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
    "8VNnT4XAAXrLT9d9i2cMH7YrrBGinEy6UqgH4DLWXYbAD3a5nvStjrBYm12YnsYY7BisFdk72gzN49UwC9p7SXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wVePWdeDPZuSyB6pVzo7M6xMEAqHuCi8mLGa6DMgwXyX8Xt9cor8EhqXBdrt7zHat5VVtXqWzLZtbrqaSYEqeoG",
  "key1": "3b7wQSz1qSFmQtyFLmZjcWcKKx7szbpKGw9cHNPPwpVtbxZu9dtivLeiYdu6Pq3oH1r3ZUXD2t8G1Bd3usSxjwrr",
  "key2": "3TFt2CFdKGHxgmwFqD5jJoaRxhwMbgV5u9WinbTXBKhQwaEukwb2jPUvVyEJzupskDzhzPW3CAGUWPd9Caomyk6p",
  "key3": "3GpdD9ayW1oV9JVDDXw4KqembsdusHJV8QJnD3SexTKXVeoGGMaTBaThrLpuXmKVzTT6KnYyuHWWeVkfyVE3Rgmc",
  "key4": "4G3REK9nEtNaWCs6GhmBEex6KE3jnUu4SL2Z3155eM48L7Dzp5gPLRoE9JQrcrTtquwnGAZBWV5NyL6Nb2uCrbcG",
  "key5": "49KFd3b5ew7JFWf2QRtcDm7GCdKgJsWLgdUwWQPcWVL2C4nJA2p1tS3c4Emih3mSgNSPFWNfGB8u9MzyuVQ5us9M",
  "key6": "2Wab47aMutntA4Kmdrq4PFqtFFmgag1QTHcWQsPbmv8TsyFNzGYN7azu5MVFS8g9Duapc4mbgXy8XSTuVrVCAX5u",
  "key7": "2JtAfVqh6M5xYgiv9i1ox5mUxRMKt8i4piUe7DrxTob8Qt6XSR4jqDMiuHhHLgqFh5KDhEDh77Pu6iWkvQmHPYtz",
  "key8": "DgsnjNETaamz8JLtV3VLkhUzxEBvdrVBdnukoFvN62onp6yzzH9271tpLucRjNM65m4DT7GoBXJaju1WAi8TvzE",
  "key9": "4oswerfg5jeoChMwWf4ZkKn3mtEXfDwaH2XRfbzWawTdd21ncsqGpTX3H5sR4PGqDV1ihh1bLwYGATnxnHDLZyxy",
  "key10": "4gcZKLmjKSPGTbk6uZh6QWMmVfAhpiDVXC1gKxxtZrBvV7jQEfhPw8ysdqWdiq67m5dZcyyL4ehke2CD8eEucw6u",
  "key11": "mQicjbGQywCcPnxPmLYUvy7D4jvpEyPuiR1854BnU6ry9vCkMp4gws4VGy4H7SrYepj26bfWMMBRKK9WUd7QQtU",
  "key12": "4GGPB244koJyN8ikSZrRws4qRSCow3PFYdpN6X6Exd8nmXxBakYkqZBXdQUEFzXJV2tRUBYPWTqbGLJTeis2YQr",
  "key13": "3q9C8HtmmbAN7Wbmy9ZK7L5HCi5TWMjZV4521EDLD3iTszumyjLJVY3bJAd9J2kmKbCEGSWgCbARt2doPXuaaGHD",
  "key14": "3uKgoGPLkQqmNigmYXr11qh46mRMFHfDPvYCnNiFbPDnA4h48ovshx3d85U6NTVrHhaYQSBwyubPJDS4nP4wVzvg",
  "key15": "57HMHVpV5nhP796L77vFnzUbqTBk4tEEjhdPfcyhXQsd9Q9Wz1DMPidEtRKy8kFXiAnJUBKrhWbSWVPnywqu6GJq",
  "key16": "23AbfSwrF4BoL6gPiHs8xdTMLosskC53Rriu1ni7TZBujH1gAFhuRUpXaWkqEaKka35zR6bo1QeGye9HYgFQneTq",
  "key17": "TK5s8SZ6MDLcdiYDoKXGKbFNWbHFVMefXAuhJd6GjkseJYPRuAQF17eY3VHZxhkKF78onjg635cvo7AjaR7fiLf",
  "key18": "4XMjEy2SMPJyqfiV2Tg3eqexKq5XPtZ5a5cFVgjmSMZe1sHCkHZ8jU16zSW5FRTRP2WkrKy53DrAC7HwkU1Aqcj2",
  "key19": "35wDTj3sCrdpnBuL7JGUcCRPSZ6VWgxdXjxj4xKaZsN1kwfCEWCVUGnwJDWGW6NQccKQdnwzDrqeLZvUmaHp7pRj",
  "key20": "2mrjS2iLEK3dntGtFKnZMSQGi2kDQ1f8yAgbpFnAuNQbZV6m2ATLLv7cj8U6ss2NJFLF5Vu4oHLTtEF9SjU4RhX",
  "key21": "cLDkMx1ZjdLxZXhapzeDs8qkS4fvB73M5XvrtzfHwBYyy5y8S7YsSEBTPXbSZGUuCJdq7wE1BKRNzKrjA7S1PkJ",
  "key22": "5SiuCB1Q7htuakoxjPqhwPb5TgttZRcXkvLnfbvUdNcJcqFdLPhLNNghAMqGEmW5XXhQohB7NhSB6ua4btSiny9T",
  "key23": "4kXJhRk4y6uMfGoLHRKFSp6Jvb97rsfCWpyHtuKWLzQtpuEigUu3FMYmgiUK2Kq1xMv9Ugax9Y5vJ6WqQJ6e5gkx",
  "key24": "4qHsMjfrajR4v3XWZvtvoMkEgN6dsL7u6KVnVb3BV1cY4P68WkoDhW8qGzrLG6UBBMTSAox2kec1yupPdCjdf23x",
  "key25": "XpEfdwdMwkqPCbNXh7qFkFvqdtf65yJh98LZAndKu923TXqNPuTgqj4pHcHTrQX8V3bmNfSe6umZp7Tw3uSWChC",
  "key26": "5a3Rd1xdXbMFoJWx3f2PuuvetYz8c9Ki27UGY7sBMucwduAS7YW5kqTpjnZsBFLp2ruiS4N5ertPh1UfEEJnxXWV",
  "key27": "3rPRGygY8vskN46XJwQikaBiSCdeUecNCrsbnp6Qd6avdDnFjUkkBiDv2Kti1UZvRUVxWy9qdsADmf919JYZMZYa",
  "key28": "3hYTnC6XYKNy1zTr9fcvLpFZEpvtSHcoCV4GQnzUxxT2o82YZ8WgZsPUqAeDYXAxXfx7MkwkjTyi3KZT43heMMAR",
  "key29": "4y9eWN9Fc7ngxaNuCGti3bv1pwzvbnVqJyux78BxyFtReSJiJwRrmDMv5seJRQSGi7t3nn7y2aaCQZccLVTCSSZM",
  "key30": "AxfNPg2qxcdU9uL7aBLoWW9wWXNGF2XswQjTezbA3EMLC5J9X4czLqWSVMud3Z8bcd4LR18Mww7wJT5MLbmN5RX",
  "key31": "31nbsJ9n5R4YDAHrCUhnCMUy3Tz3M7R2wub8troLSWaH5V9d4o8ks9cgR3LFqrQnQB5UTGCAMUAs1QL93CLXSEtR",
  "key32": "58H6TrDbSniwhmrQViZCz1mZdWrcmYztRTA56wt4TtNQ2WnWbCDYsd8zJEAznGHdaS3Dtj1YcxMdt6gaSLwua8TH",
  "key33": "MW2zVGh5BqC5fx9HpyMJCKfyYaXVdfqXwUprv1YZPrrnmivNohdiaNmGis9NnxfxUUmghK1eErdbyKzfXteXY7P",
  "key34": "daUgY7gYFpuW3nbXfxqncfrdZyh6hai7kHG8kM7xAF32Yq5Vy4GpnuCfiyw1PyT3txQWxnyhRQzyJUHg1w6GDjW",
  "key35": "3hayUZGHxuvdwcHz6anKwnyZ7wxg2o6SVonBm6uNFYsraoPg7ow37GtiCW3nPuWKEqituxgCHvjzgzFDRjuZLLmB",
  "key36": "3FECeXtqHmhqpF1Yx8438Y8EUoLRPp5jo5KKeWHXyp1Er6D48HkDVKJyyKYTX3ZrSk8Pxsb5sQX6QwdeQ2ufz4do",
  "key37": "5fEqJVBEXLXuAX86mqEMa1yuJVS3zWa2mKKXcwdGSsTjAQFpGqqmJUhyuzZh5Wm7AwnueTJarkcbU28CaSiHntU1",
  "key38": "Vhfyh9sxHibQurjPuC9KqaxrcJi6wJKpP8BtUDZCFAcEqrnKxmmbqcFSW2zjHvthSpWySSVLone7AZ5awitZR6x",
  "key39": "XWw16jH6ABNGgvtbJUAQtSatvtSZk5j9cbsRx6ssTsuUWnWwEhYBjpTrfyYVETtwQqKsZy25KMmqYJdvRvyF4YL",
  "key40": "xWPB5upJ4ZtXZpTcNKvmrfPGqtwxX95d9x5CvATmn6QpP1yZHkvS7C19571XDcykQAL6mWDqs6KESkzhahJf8hj",
  "key41": "43msHcEgNp1FQJSMTcMoGBNFsz78HRwLEHb4V1AqGhu23SMRNYCsAQjs7vBtRcCULZCZyRSjpg7U5HkoycmYTpJW",
  "key42": "63PXJDgUbPrh8ZteJnXnSV8kKwAtjHMXTHERrwmDi371GAHVccNkK92QBE7E2t7PmMAr8NwRU55KUzEqtPKj2Q5c",
  "key43": "2tZFUvS2zcW2Lc9iU9WEWt3LULBRzkH8AmMtbRbegNAvvJahhXqdyrFByborUjBiptFngKfczAiawMTqDNbuCxNL",
  "key44": "4cesTS7PXZqVLnkEWtytkY3Y74ZCww5L3LNxDp244PWY2rPNW4uLNu53kixtzkqybTKhZJaF8XhNKtcd3vP6BVxL",
  "key45": "3BGPd2DF6JqSnj8ysqQ29c1DvCQH1DyYYhng49wTUGr3FrEnD5ECkwSV9ZWaT6wT59f2MiZ6Vi9UrRhGUA7VwNTx",
  "key46": "2k9S1EvFvHXPTmw3kMjbRH8d2FHLo9F2BBpQxbNLDQL82wggtDkzEjfdL9temQjGmJo6SgpQbyHkbGnDamvuxt2r",
  "key47": "2L4gCMJbV8gxo7n3cxEVVQFL12iAxW62DUjMzVM1ydtnNWtbw8FB7Pwk1EUznUStnvdGZrFebfzkGdbFMAucsTNH",
  "key48": "2PGwiha2JXpfenPUG9kJxAVzxEs3C4iKn8bYYmi73dFd7tGwdHNu4vPjDM8vrRcoQniYMd5LhVD3esMwD8bg8Gwg",
  "key49": "32U9gxFBErve184k22o61FL31FZ3KtMn4djAgBt3zeiyBL6vHKCVEWUUJZvvZeH3UWV9Ket14vt4AjvLgxStshkF"
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
