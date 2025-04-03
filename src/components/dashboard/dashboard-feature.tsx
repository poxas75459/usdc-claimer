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
    "4mkvnpbmvyuHE4CjpL2U4a2w3fyRrvki3fmDks9dRog4BwSFe8bJJRMwLCmCeaF8SnduE5oy2Cc5ZBFBx3YuK5H6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uo8tFveHxNJjmnUr5BvdS16vaTLcR8ZE8dUFv3oVHKgLP8RT4FHYTJ4rViFNLMV1AgV377CzbVvYppPmc7b1GZj",
  "key1": "XtG6PJsYF8pwmZcLFLvnBWim29FVj6dnwg6BeJSrj3P89UDgd17QziA7G13B2jRxp32LxeYrScJZJx8qhy8gq27",
  "key2": "53XGAhpTW5Weu4rLQSfwWzVesU2gM4D3eeM33uR2HTmnh3CeDPfJjMN94dFtMyg7iXkzCAUpm7NqLTzfmHNMiTWX",
  "key3": "47oeDhoWgK8K2XGRaLfDGCG7aGmBvSo41swYf8sht3JL94RVHRftDjzmvWRvyMAvMdnqhzo4ZsBhUwUgPzyYzBau",
  "key4": "34TFwjpLDmtLZSrMyj9VM4CcWwjagjkJEs6sj47bKuJ6JXrX6HRySmDLFcTnVdGzpRFSSRyvuAkpQ4Efbs6eRKJ2",
  "key5": "2GGaNr6NutMhJJBKfdWYuVhn18kZiupk93PsqVZqfcdERt99YXe6ExWYM9dWDYLtE7yjH9hg6V9LayBs6k5xkg6i",
  "key6": "3qMvJCTiuigPGuM3VCbvDTLpVzpZkGKpKKZKJjMcJr2F7zfHLYDVjQzywMSPVywweRLcpb19tmpmVVBMshge925T",
  "key7": "pEm17cUuqEKwWpUGb7HMaeSHczXdbnZAmz3Pggy1JbVwaqLkfRzBpRh8zX4hfUwVVrHhjcZ5acteFeJwcpMnoFP",
  "key8": "xq4AmH8ou65icS4kjR5pbW6Le4tTohhZrThYdSAuXgTej8uC4SJddFWU5zYixrWVcKVEV7mQQ1Pzw9ziWdwAxAN",
  "key9": "5Na4u6p7uMUWqJYFk1adTRswNYGhngWDQMaUBFgjgfU6SRDA3ttB4H1eBndFTydaBCW6fqeJmoEeehk9RYseBj3s",
  "key10": "2ukdDjbTwCAaPLUogF57dEoPQBxGmaGgmXqFRfNNvJUgrrYu68KrV2wJ3d43J6Ae1AUbYTHcVor2thUiKh6gmYRv",
  "key11": "3USBbC9H1dUyq5BmK1ZTAX11Lb9ojuLQyyqEk42vk6m4FK5v9kD9HLXeTNnULfqH28GtWeeMxE2j9YPJJYK6yWbJ",
  "key12": "2jDwv8xkQQNP5FW3XneEWpWEG5EvY6GFKb2bZZa7YtgWiAuGxc6QfY9WtpoQ9ZS2qUJ83aLCfNfZAVW1x5vyiHbb",
  "key13": "5gRdCTbdkQcg8fWVb7zdbz6TojEQ1Hno5nko76egsGWBqcx8qHqzjTi1ZnvuyLbe46e7Hq5ZvcZe5kZ7BXy4ADWQ",
  "key14": "3hYt5yKnWLp3E7wmrTG6XHPVCMxvKkJdMxoYXC7WdqsarpTPHf4BMgsaZGYzhNMDaSJdKbQPXx89eaHT2R6ZfJzg",
  "key15": "JfzDyKbteNgprQ9gBJAo1yXbVoQwCULZHoLyEQZmsBtTz9HP7z9hoFHuE2WeuKqCjnxDAajQMGsUXJrX25vFWQD",
  "key16": "V5wv1tSURmsFFiUZkXowqBFhVbrZirjhLnini5aAwUEGUhA2iHkPJotFcW5Xuy5s1HziMDQmVycp8LFtFQ6bbvL",
  "key17": "2dWRiQh5KaSb37BraBXq1B55mkUvvs4DRtM2pqEdShKmz4eBKpYALXiui9YASC8W6Kzb4wA1yFQkyBcQKj5TnYMt",
  "key18": "46E33ucHxbbvgY6ihTv5EnyKMBg7fQSVvmosZpzAjbm6fEKy4gyUCi69u9SZypMLQNRsQVLewRiLL2bGpn5VCJgL",
  "key19": "4ntGkxxeN1ciVtTrMdb8CgYTYrDMJBbbjVe4iqqwGAiBntgzwvvyDCSiYbbYVYx56GUVQ7ytHnKGY1p6RaJuvk6v",
  "key20": "2yKGzjg1zx2W3AUKbRdRnTdvZv8KPe4sxGNt6anABqJYCi6s6NoaGRrNo3h9DV5YcjtX1qrWKtCWH9RyGgZDrtCM",
  "key21": "fgAAk4uD7irCc9FrJfy9U31iupmm13sdadzwTv396PSMDPEvYSEexrHJXM9NFpwRokK9eJ4fR73LAEP4SD6BYQm",
  "key22": "R5yCdhnon8Y3wtn9eACPMAMnrmDwnwhbXvDN6DgxrJ74YnmZRSaiEn7NBrzoQUii5iUMr9A4KqeQQPivUBeTtzD",
  "key23": "2rtDoKKt1nCY3iAHpouCtsBQe1H8ijg42a3c4b84bzyjL1AeQVnboqui8iwVjw4HFfds5fH5cuyP6NBKDsfCuy9x",
  "key24": "4HFSSQ8L4wsNAFUKNQtABZP2xFmuRxbHqkvzGYrVdDfecTnXHWjrLLWo1KxFXaWHusKzi7Qnx2qmBAoXoW2Tx4Zh",
  "key25": "2YRpSip1X2uaahAGabvhUS9q3a7xa5v4zeEa9VQivM2pK4yAHHht5JEzrpUgsAUww9URLPuV4MXjxjeLCpbmBz6s",
  "key26": "2ASEg8tUB5XEKHp8XEUH8LxgJVjcz3BzCx9PAepkXcZwbK77o1i193o55oT2mMnXx9biqDLXXinTL9JXEia4XNiZ",
  "key27": "2K8QiGTn825nhQTfdSasts4YqaL8B5b92UwPwA2VVTnfUWZUMXeBHCiQbF6ME8zxtokFPhFeqbRXrPJ7kAyMgNeU",
  "key28": "3gqVtwx1TEZGXrFDRCf5EUum3YA24ATpY9pi6GRhJQJkXQbmWij8kC3se7xWcLZvajXMSxhryzAVd46n99UN4hrc",
  "key29": "4aHcAtB71F8gihVVwtP36DyoyUDS6mrZ1oysC4UHiSm81MdvS8JfvopTLwefiWCbhk9ZheuoaEh9fgxPn43s6KG7",
  "key30": "3pXJ3nv2mm3ugrHyCLW1WNxx22QX3wnNSAZ48nwmxYAJyrKQJTRTGBjAe7RBh8XFQLmWaT9a4gEhNLPaHmF8edri",
  "key31": "2Aw9wHzEr5Sh5cRmAjod8PUAfREQPpA1xjU4oRWrKbGTPDKpa2W571GGpSFFNYvmDh8LALJFaqbQQb2P3P3uQ4Tq",
  "key32": "2ujwYFmLo8ABUw7Zk6penGAqYD9xE7xWeueXPeuFPvvEUGyHfykpgTXJswk6ryfpC7ydAYXLEvsPCPriHKNP3y7z",
  "key33": "5xRGPU7ydbHvpaLDQSvmvbJGg6Evh4hsiV2dDmSRtr5S3dPiX6J3MggweaR76GzzyaVNqy8hvy6zvxJCZxjdNZRc",
  "key34": "3dstYLvF43AEpWzuv1DAPMVNXAxw1C2esvMDjctmkqv6Uq8uMHZg58TeqWvpiGkZdzQVUCdwTuYkTW38s22MPcp5",
  "key35": "3d6pWdKi1B7F6FahvpcVs8ihahPfrfWzpSi7yrNqpxc6u591PER5nxphpqBKEiaeo5kzhr7ioCcFNKZBoogjpJPj",
  "key36": "5fDvMGLE1m9nEAuCPccRQUMGK6kbiAyTQRpJPQjRSjNxc6sJaim9d8b5vGHZU87K93Dv2F94PMKN2dbJNZmsphHt",
  "key37": "3hx1q1z1WrtffZw8pNQ4aTyK6PpGP1R6o2QK3LyyVZN76qwq2Dfvg5vfA119txC6ZH4KJfkAZT8VRi2zwSsEseGJ",
  "key38": "61aCEoDiVjDuUGzi3DWY2ju9QTj51FGu8C9d1btyf8R2w5LSWnBBxoStZwMwvdghrxUzLNXsnqWKQGZBuyxMWDFF",
  "key39": "5t8KpDD39cQ8VFqdBnqXYUDzzfr4ecNwofy4B8xDBQqr9EJje9KF6RLLUQtVoZeA4ioH4BF8moinST4B9Y5GHqcC",
  "key40": "5S6VSsR7yqb3xH9txPfWhrvPfBvX95w3bkgZYfXEywjPxFNgQUxiXFYeaZXMcFBXo1LMYq7noVzic3h2JsPBU6jA",
  "key41": "NKwXpYkWjuMiwutGHj1bRJPkRQtY9vctXrw3zPYbSWhiuei8rxSm1aKxjTpA2jKQpF2ateLb59K75bqVBy3B8uj",
  "key42": "2ranCFb89CSmN25Y3uEKJfD9c1atDzVab5J8AzrZ24ySVWaPU6MQWndXS88vNLG9tdHnzakVSUYbQpS9aUp16fU2",
  "key43": "2KGhqshZxMwu6fzb9fEhb7E75jukx6seKwk2p7FdD8MqHB3CYySNwHTFHqsHwuNXDZi7CScY1xGrMUrLXtVzVY3Z",
  "key44": "3SNzhhSaMdfuyn2BeByR5SCfYajw7RPvKsHmYXT3dnREWugfrU8JVFSFrv8TQdxVwLU8JEQSfdyeuyy8v1XRbdGf",
  "key45": "65uRbWNHGkNco2qYw845mPTQ3Foc7KCAkLYoC7roavFXmUEtVsYo57hYZso2QtJ1UQhWFQRU1uBRWYfUPsrDQxuU",
  "key46": "5st7fJ4yXU2ufVurRrABVDX7VpzER8GMJjZVxnbaz2aXsfQm3GkH8xPPXH8pHXzKj1vWK1Nci89bkk8xGr4pRryL",
  "key47": "5f8dJ2nfqmaASBA4k5Jy8TgRZKTtjjhoRMrsNit86MCSXxwgCyKQRiYYmMYMb2JumUNc3cTJ1xNXqoCuawKEvFia"
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
