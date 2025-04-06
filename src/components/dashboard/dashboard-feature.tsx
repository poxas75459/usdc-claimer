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
    "4j2irvNbZGpSHaP8pKeZjUQ2ie7VqGZKyTD2VkLMzi7wZGTL16McSLymkokcnfffJK2ssRdxQSC1kRSYMqSksGNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xtHNTtF6PhYitMdDCjZjhrYWAMfP8YTE2vZuvwsaSooVfKaC659ADagD2pcADyPE84uGbqbLyCWBkvEnFUjcjrm",
  "key1": "2WXfY4GCQ7WuNBSwBqkLy42YyinZbe3eJf8tpoY1gYXa9KkhVW5zg5nhFcHuLNBAMYHk9SjANwJQgzNSMHbQB7nE",
  "key2": "4hhLBKaky91dx7Pq28WTowXTcMFtjKqE6scXRBhh9jtkmSdbPS7Js4NK8PHtNj4jMjeFmNtxVxYiPEQzHuGoqcGA",
  "key3": "5Ji5aHHYxjSnbdf8cMZcvxWNYiRmTjQfmAJR4S7FtGTFvjYxZp73EB3jMF5XXzKjF9Ux6f7dF2TA6PBnxVoKH6Xi",
  "key4": "3r44f4y1nfoJu9JpTsVxtGae7dX5tua2XvjoUVqPxhwpmq6qY486ntcz3DLm87MhLK9hdtww24k9dc75cL9U2r6Z",
  "key5": "2GMabxKCwmjoFpJHNc9zmFvy8vNeWvUvYF2g2YoZ5CwVyQ7LsjmjiQnDDVaoSHYHN7ehLMMAQgdg5a7VRkfyyA2M",
  "key6": "yYSghNc3dueB5ChC1uyUSHaQrfiodRHaDut1eaWvhkjnRJ6wDzJmhzajSWA32uRMSaZCpqEwB3RsL8P7nYVogF6",
  "key7": "3ZdRiBeXrrLAFMGwvbkMZ98ZLnwpGkGxwGpsaV7XvUVzhnL9hNWBBt6Mj2Fj12vUZGgWvJx3swTcnPo8mPP8kX1i",
  "key8": "24aU892dtgZq8wGXR25pJQW1VqEb4gRUQHyLkzQnNQSovGPrErmZkJtmYtuvNsQdDh12aS1eVhiNNVzKxAdePLJm",
  "key9": "Ddbtiie8dtrJXu6kERJvyaMXZgfbo74BTjCQi8QWZDBLJ8Nmvb9sLxTipN3C9d9hPmYiX5FjtXT9nwk9E4dDaFj",
  "key10": "3abjP788j9zqtLqzZoyV2vVpHWydfYeXFYAHbaE61VJDY98zYBa4mC6SYZTC2ozGV9HCr1cCqz2BgHmvwEasS8rj",
  "key11": "2qi89XVqxkmyA5JEz43aFLiG4SHVRoKk3qmqMR2pWwJigsi5NDSyw1Ht4SUnrZf4s966Rh6LqNMXttru2GrcFKyS",
  "key12": "3UEzvruh7EAdY1zHTHSvLSy8Tu74neVeAGpVAfsrpF6CkgVs1j3zVwyh8YwQ57MQSa5a551LRgoUAAezoFoSZ2no",
  "key13": "5uNxcf8BLGNAR3JdcGLZDmhhVVvRWsizrq51gi22hJe12HLcjYWUAb2qwkZw19ssyYp4CJWgt2frZ467wMD7WJhg",
  "key14": "3qopvX4JsERCQfCPd2EfKaQTcuFQGy3s5CEcDXmWGz9oJHxRbWr225N7CzqCPjkvoHA2QUEjeVVVsR3fPBm27tH4",
  "key15": "2FDLDXCk5oJeoWohBVujcpq7Xg2bFJ5GD7k3MJR9ZQgGmzto73GgLAjMvAQSnvAGR6LVuMwiLnHPkZaq6FXPqwsa",
  "key16": "4LPkaUsqY4Wjzjt9G9gSaMovT69eSp8fMiip8heL73ADbStrr2mQh8aBHWXz5F27x9PY2GUiP797PPKDV8KLnGab",
  "key17": "5ChmnDYSd5KfotAPgCGFLsKSokJzs1VnQiEBgBfxkwoiqaad9kG8zyUjSkkeRDz7V6zTLjeBg7J7oyR6pXNoLFTF",
  "key18": "v28AsUragZB9vieb67F4U9DXxdMBWdRVZtzAPZwcEa8KQvQMUnYLJa2Agfavxpd9cMSTrNdDsVXrMFpydbvD4Zx",
  "key19": "3tgTArk2yPuUyvkLRQeCmPXm41ZRbwnpu4UYfeNA1C2PTNVBfEvzj22YnkMutSwoTCqtjcueaH1GdaxTmaanw9op",
  "key20": "4kDyVBfuDPAzzWm693qQJ95TQ2GZ5GEpk4XfQJ8t5FPyj7goaugs8CsrkHURr95gXoQeSN8xyUyNtBRkrwkPYS9Z",
  "key21": "5UKL81BBBHsW1AXqehHPxT7JyyZTmLSFqmBtnwRAQEgvKWYPqjcWNu21SLARxuvZs5QwBVPXCpyDvJB9rFD5md6F",
  "key22": "64rKgfaXEvi8razqMgBxByk21bVxSpE2f8L49SBvzH9yrvtr3jMiLr3C9Jb5QHFaUfuZbWx7rXbghU5j1YEPLE9P",
  "key23": "3HiABiUi5SDZEz3bnsWH9vDjydpUYN6XQvUfmtR1vehaNhCtpSvZMZpcq7ruv7vsVFdCceQzbrxE9BbkcJ8j8oqH",
  "key24": "2dtVenePv6DbuxFRMiPj8kAmSpU5Pq3WfRyp7kAqc4wZC5kQXYZgWpzHtVUzHi3QLt5CBzyLGwTvnZXtvUry6dfS",
  "key25": "2oqG56ctQkdgy4HipuFXkrdWdZ5kTtyjTrJgjUg3roULECeEMaPSiMdiLRjGKcm7JtW7rpfU6GZBmsMho2sWvH4P",
  "key26": "3a7zpuyPBkZswhzRBtHHSjjRKqG5kBpzUVD4F3MAA2q1LhmpP2dTZVAVUCRR5JNynJjoHC2BhKWptdqnwsa7MFbx",
  "key27": "4QqNssyyZpbknxFnGxRic1mzkvgrnptKmzssYnmkFCsHKWGY4YqE5TYPAVSYZ1pySFSYAjT4CC4LVxCyc2vg3h3X",
  "key28": "sxPVvENCRm2QwkAkshmCmBW8sxgZ5qxHfxosYzuDNuS1jzbESSe6L6heLm5xCvZga9AX7fxGYxsAq63qSH2FmFK",
  "key29": "29vJfzzZHRYyH1cjWwwuxoXWQGPrJrTLSJdz9vXFhKSrwaq82DC76bpksAmSL7gQnF2CZX8cYQ6BetCNudWpyggm",
  "key30": "3w4UDohCoMYKnSJif5D9A9vJEx252PXEvNxDHN4Tfr2gzi7xbKRv5aJAMse6B3NmVpE7zxyHxyqUJseDxT5kViiz",
  "key31": "5KmwA8GJVeYUdvohGDfWefkb128RR2uzrd9g9jE2ioHgSgE3XqL1EDbQbdKcWp4KWRePwb12iir8GkYsrYi5qofm",
  "key32": "4Fr8UK3xNv7L1Dw9gxNvUatbseFzAp4XGKfqnqAYM6LfeSxTUCjQ3vNXXU5q8sQUSpi65Rax2TKTzbtyrVPjV9wc",
  "key33": "2C6F8HoeePjJuhXvWbHGqjKFgsXu1Ys8rvxUtfKfFSLyPhphRJTMAyhJUitRswkrqpUvmNTr9qRWR7GPwS3Ggw4n",
  "key34": "sENyvBmTtPRXGcW1xSWeLiXZEjivhiQHWmGXktgSoPY1ApVvHLriDKjcKBCHeyNfNqNrJXuBRdMWjqLoET8hwHJ",
  "key35": "4sGLgTZ4E85zbbFABTvfydSEjRzqSqzNNRzrtQTGjPbEH8fh4r5ujqVjS7wQHqd1CBbiqA9XJqMsErTFR5jK4gj8",
  "key36": "5FRQH7nUtC3vW997mh7EJzWUHFUPnBdgVQ65TpKEFx3Twb41MrsdzDCRSMmL9Huss1srF21nuRrzgZkNULoEvuUb",
  "key37": "2frUvGjyENf9n1nDFgMonALZpoV8cD1mXuRgJygMBJziUGak9yH4bZksWXhocw9UFhUmmEF5gHh2vx4uuj6hU6ar",
  "key38": "2GGckCXQtw7zmSSUUYM8ijAEboacnDtXUk4Sm6dwk7WxAxpfvg8SBnsp4H8q9hALWM8QgmjfJqcNuGPnPFvWCryj",
  "key39": "5Li4FRv61Rm6PRSnFFt9kHehFHkZnLtoCF9QgjzCBXRvibpX5jiYfd4GHKy3WpwqmG3ByS133Gek9A67yNN5bJm5",
  "key40": "8N5bBqiGJdKnxqMFUQu9cG41JfToNDhRhJQLYjVsTpAUQhafpKkQQccoCsmyNN77HBf2GsXZZuorkc1mjcD1xhP",
  "key41": "2muF7VeQX9i7anCoTKqxdQhhN4po4jY9TjJKTS27DR4WscxmMyYDTKABZ17MWJemyjYuLYx7UtFTcv2TuJW4HZbc",
  "key42": "2vWf79RrygkQiUq5eusMAcGKhDewNJn9w4waFFJ2CtriXmCwnRz1ugJi3j1R7xwrTPy2fPZa8D9KwEr8YQGZYvpM",
  "key43": "3Lz3RkrDywRjuMNXsdoVzjH1J2pnmJycQ9FJDdSvHmw7eK46XV317y8DUoi5kBHCPXZf1jmTvzYMq4WdAYXTfLAh",
  "key44": "5Y9vffpjXifkmHb5BXrs7nXsJsP5PrSPwuzzFXasMkWHQsrTVRecHA8DxaZM5ZdiWYT197EbrLWEWtEDGjcjg9Q5"
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
