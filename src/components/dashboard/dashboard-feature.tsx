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
    "2bhbnBHgHrhYsJM6EQnueoqTnfBKqCr4csxwQLtJ1CzF6LB7SYU8ZeM1kSBJL8VmAZanymPy3Zw5sg4wTo4kHAVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v1jiypas7BPKwFW1DymjTCunAL9LN1D7fT5or6zrAeeeECE55PXpV9onZmhegqBHuYC4YBZuwjyKNnDpxEgSKfd",
  "key1": "4r9CbAeCJB9bD2x9dsyPWrTE74LRGkutbQoPeVZAFZSwKJ93d4y4aGzXxB1UVZVN49t4Qy6qGmh6qr1kGeVWkEjr",
  "key2": "UTqKDp5myvTntEpwk5DrTRA1hDQwB6BJrjoREY4kJiZubemW9Uv5DqgNZEZUAYkZs5d6myqU9jR9kxKsr8PhWZr",
  "key3": "4yrXrXu6TGn1pcRbBUtsbqQvTrPB8McvyH2iw77ZX5JghRhWTxjqsqXpRYmLmLSt17wtXQ4UvJgLemryXHGuYCsq",
  "key4": "F2iopW7ZqhC7ydGaHfhLqBGidG8Bnw9fk2kidxRLUVKBr9x8i2EEeGoiwee2EfPyn89TFdj1SsLKrMJi2SqZQQs",
  "key5": "3SGCccYJ1eEXQU9wFC5y5Gsdq8ETFJNq57GHu79i1ZR51QggB4QujSM6twPqwtcbxU6LRKpGLm69t395ihWgDGxr",
  "key6": "2DbQb556zUj85785YHvcAYB1g7K1GdiSVforEjvk3eGSDpF8bdPTDgnSMpHrUFjChpyEr5L4Zmuag8zh5mvkoo9T",
  "key7": "4karACuW3HVSQKHrYjKMSZmcPvzViE3Q41TdQY4gAvf9tQiTrqsRZJuXdcpYF42LmniF2sWpghgRsJx1cVfdzWP7",
  "key8": "5fZwMTfJqe3nz2wzry3CXZ5RZZ44ZgpPcNenCC2nX72qhVgAFn9D8wC5WQdk7rLwHYXa6SwRtSrytAex4mr2JoXk",
  "key9": "2dQjd5RhQuRCE4xEo9offWPrs85PSQSA5ifjns2GRDDMZoSLjfyZhQZ6QF6e3BsPLZHQTTY2eewygk9vh1gfKYmr",
  "key10": "rtNdVfgmmD6H4KnZ6chMZc9DzBzvyq1dSowtMxZSxomKaDBSoaKZ8Sb2zr59Hm72woGeQ3E9ZimWkuAo5muodbe",
  "key11": "4qxXvmsBsoihiec4EmjeYsfWds4CScTkAqhhYjFQucDJeGKJcAonidiPgL4Fv9Z82j1KMYz1u9i5p3S84FesCR51",
  "key12": "3CmvNZ5gySBZkJpSRgXcfZ1QybbbsarpHVhNgpY6KtR4U1LWuN3yvZi6vLhDZAb28cjpZhrFxnxX4Df8MJXpVXE2",
  "key13": "5KZmX9qXE3s5e5XBiHcrASu8CLURymPFCx7Xshzs6htTkwRtnu2u13YXgm2Hdy3BQFuDf8b8y44sCMmGciuhbHTW",
  "key14": "5pS9SWF8f4NNqdpcnXbbQkaz4LKe12XshATZwTgyA4ND8CYowkYXvDqzjhrGcnvAPsgcDvY8Ds5GLdcD4cLTPE2Z",
  "key15": "2BoHDJYaC7ZLE8Wr1v8KEzyzBZRyY6pvd9EYsXGLDhMFjnecSJLjiuipCu5U2oT3gtAJcLiBHaZih2x3HLLuqyt2",
  "key16": "6FuGvodhr82AvKXNwvZ4qoBRG8bojL5t5QbMoR5aCTYhwXCyq3e7reE6d5fD3bKugVHh23CaxyAY1Nzyrnw5pHH",
  "key17": "3mqwJAFae1857PsfVDkoT1At4SXmjAQb6GnXynpBET5qZw7d6Y1RJLLo7K2yoc7b4NN86qzkrXM7T3psRq1oa99J",
  "key18": "4qWCZK5zX59B5WhEKqX6EE1bCEkxKCMgSkvCNfU8dCGZXnoXnpJpBNLK7ZTQi9ZJJhs3gicj57qBKFzUx1KXJzyE",
  "key19": "4v2FghZnqiuwBi3cH5h5aB4gsMK1cjadanEAzxfzUmFuiQonEgx7JroEeyqF2vuAtikQr7QWFzTLNUDbD1u6hsd4",
  "key20": "4R8zqhnMv5rHW7w5yzxW1LSbFxigGJHYKKSwnqiZGJrB2DuV424jUvu3o3WqpinLK3rQ5mW8BYEkmFJ93wHma7kW",
  "key21": "AuAHVtnv7pJZyjrrFCFm1arHTbqYYNHsxh34LbiRyhuaY2ecJJvnSMpQ8pcVKymyPsG8VbjKAWwnnQ49kR6Pmg8",
  "key22": "4wVJXowLX7En9tnfcE2qoPp4ud3WVdwb99TYsYb38VYKFJCAHcvrTovwayNVG2ghkjN34QZVVHupP4xdJHDgD7Jd",
  "key23": "2juqxD7eCTMewbixQNnbNV56tPTiGv13Y4nzCBpPuobBPd2dDGfih7cGT5ph4MD1p6HBgrEfF8da2kz7Gfetg1LZ",
  "key24": "4Xq1JC1xSvMFmobYsqvyie2qAXYjG83yerU4J5jcRxihvVyEA4RCCXZ3YJB9pvQhDNcPnHSxC9KwFXsSmm5LTHNv",
  "key25": "G86KXvcgPZDW6LDhLQ8ZrcxokgZfBQ9TfxJy5wSi4mDnSrjrYBTJWnqwdUdkeauw54pvSpmzn5B1Q4jF61Rq4fM",
  "key26": "3TsN14M8mJhmJhqwTyxLwjx3Aw3GwNoEFNkrdt7T9yt3ccvr6rx475u8DYRh43mDiFk1i9UDphwtKPyLeDnk6zn4",
  "key27": "5E4GhUmqRuqQbPUUzJHLC7iGzqq5G2GQfSZhXePjA7qLqQjjjtw2V2freXCkobBod52W4xXyDh8SJ9gGn7tbhUKy",
  "key28": "56uswUv6Gikp7myL3vZ66jML5kX2hqX999ViHUnohdaiYkCa7ckCDcY1NE9HZY9EuUiaoBz7Bs9quP99s4qGFEXS",
  "key29": "5PH5i5Dixi5La5umdo8HdhpjENKXUknxR3p5AnLvTmWruhRHCf9yaLZeviyBhwfmaUphPhMNjzBNZjDzCrEsR2gR",
  "key30": "5UYQv3PS73w6ihEco4pRY4kKpyMSPQYDhdEsV6XUzqGE94XTQz9GG81c3PKUPhbquBghUMEAdKNiHkBfjdkV8d7G",
  "key31": "QWLRp4M1duaSvSh4Dm9kAwRXXts5r7CrQKHjviuoZSqgzdqodNAuqzEEyN581b8tsT4xcVdAJRicFtYq68hBQBY",
  "key32": "3z2tR77WXaDQVznhFJy1XngUBtcqhKLKX5qLNb8gdFsoXU1nXTdBWrErrJaff4sCgEvM62FGztsDpcrJkCRb1zJv",
  "key33": "415BmwPqMF426PWY3sBbErtqZ63U2UYAF9pKHzXLQYu866X4HpRhBKV9cPVLoeJpGu32uAwre7gxtiQPcBfZxQtm",
  "key34": "477zgj3oQ1MTaXEaAFhW4SrL9UtozUw9LN82M3JFm5sfWAAaNYWEUBexC25WGL2yyiZzGFoUhgqzR71aN9Qk3EYH",
  "key35": "5Qqv1sKMBsCrUuNCS57UQpRJBfdh9hVyYr49HHeLAFhB9JouNqJuEamUPtqmWU2Koghu2RFrv3A9YexxF5bERnah",
  "key36": "2tw9D8sC5LjAHs1LoAe2A3aFj5yYTbLHiBTJP9pdx1SrC4sSLBQMUrYCDYgapVwRxScbUdjSkk1oLdxqbv1PvXfJ",
  "key37": "3BwQ67RQrUa9UWs3MLju4CT1qWJNUpBjefkF6vP3g5ExAzUFtnwM2jiJx94KSprEkfsZrPViHDJZKvLsRxTzY7Qe",
  "key38": "4te14XfQk9UvG27yJd8iHfyoJVj7puRUBijDzwmwDR7ztp8JxsmdA8TKqCw6JEJtwZfNiGbn9MH8zu7AQJPppkeV",
  "key39": "4zAJce1yh1nLzBTirhcvxe58JZDNpMrg1UmnrEmcydXaBtNy1W9qvvjkEnWbwSvantedk5dVTFFfPxsBcXzJCmeQ",
  "key40": "4ScULuRTSmcmgnRX4k4SDNwqjZpYTr4LbRu1Uowg7xQgZiVm6dK7guK2EpXBfrkqAEemLdzKxoJKM4jPfqTV5xej",
  "key41": "SeVdrnW3eiQBwrwuv94enasQsvKbhXr8K3c8QKD57YLXCiNvXUxXbx1XaT2og1rSjJTU5mhJpXf5zHqSP7yGER2",
  "key42": "3rCGh3cnPvq5MqwUq5rvwzuWxqrTt1URbBG3Ay7ty9NEPfaCUv5qQ86s6NTDsoJbERmn92joZq9iG7CgZ9DurMrJ",
  "key43": "3hRVgafpLxA9hTGf7BXXpqNQ4swA2KLsrkrroVEGGRoW5JAAUbFCedS7SkJJFrvvkYfABLbS72EoEbaMgimKfh5J",
  "key44": "ZyVswGQGoVoKUQYoAYYMWFscv8XQUHsVL3VRqUfpnic2WcEDxFMTcUvYmtrKeZrXuXy1MmYuKwYodjKQ255MM4n",
  "key45": "2Qk9g1xXTHYC8ppzyS3prig8mX7thVqfrfnb1aRAFRH9ZcUYWWvMmS73Ans4tu8f37rXr6JtL9EqQ9QqquMqn6bx",
  "key46": "5CWxiRLKhLALScq7ajL8PEBenWFpMVZY9nvk4FP2opvwe6SbzDeZekQHKPjYhvCDrxc838zX33hrFMpBsG4NZ2eJ"
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
