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
    "3QntTVNiZi3LiawskghsYDDbqWhac3qtfHiT1EgWo28dGLXJpWFmeyDCjcNdiVWTfLhUxgwKMaPFBQVXtMwiGu7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "idhXoxsMEmJ2rfBgH641buQU6yYEkXDgh2Tbx7ZU2dUfceX8Y8FXMus8DM5SdFkobeWdZcxfk2FW4KF4X61hkmV",
  "key1": "34LaK9A8ezXgD9nN3oiWNjbRCAz2TisbLD3qDpTogouXw9ZAPZQG8LAyJ5CGPuHMsxoDD5ScYswVkj6B3Jz5FgFK",
  "key2": "2vi1fSzcDU27UPyWhShWbS6rpQA8WDYiJSf86S4Y6EkxvrwpN5fGgL6C1pWDdVHo971Lvb9fv9bZNFQ4mY4HPFGR",
  "key3": "4rbNzF59GJNoapmEGZt5TwK4u7ZSaMjUWgTgNtGH3sBpt7uzBc51x9XJJFyUzccjM7DzD5p5ps9edhXwgYrdXxbc",
  "key4": "WhUk5Re4Md2ME2ZDMFB1WzB4m4WGSAzFb1aonLb6jrmMe4no7EvW36hYMF3J4Y3DgwBrFctHgSrwA8gQqSMVMrw",
  "key5": "3LYT6eJNQMeFtmjFiPdVHnLJoXdKoeC1hZQVA9spdSeuWCMSrcau2PmwVQkiwudqsY1Lp4BXExbXmzdyG4vK1RCT",
  "key6": "3f4M91spXEQsE4KTHzLdif7gtgM9wmTKMraHV1ejtARozqtq6qPsnN3SkwBe5fGT8TVFPJ7bAiHdm2VKA15BKUhW",
  "key7": "2HyC1AmGkRkENWYWnSmRgAcebQFhyH6NwFs1pARqroqELVg2oNphKKoFKoVNHYDKYfWKLA1KPBXeiRhNm7poExcx",
  "key8": "2FBPkMnopBf7vaRG8P9oKUj24KQAzM8ExFQZojqHWpmEkveR5zreCbuiT1RjhFmn8CgmoHSruPJTSm4X7RPYm5c2",
  "key9": "26Gfdd3vDikrvowCFgiJyRTck14yaTSprFrVBMKHXSM3wKWyHqJc31dDdsQ9EGChxncXvwRkdAWEcs6WowhYLjzd",
  "key10": "3szyu3K5ttzUqKPhRms4nXaqKKVafR9gtCc9ZpYxn8hcSPAvvsrjiAZk62L4Btm2nusbCZ6nhxHKGDNguetQggdZ",
  "key11": "ihyq66xKqRmw2VQR1ZKcNKPAujnPeXCSz9JCoBsGRGKENJeihHawRb1voP9FxBVJ7NzfoZp1W7GxZwr8Bc4LpMK",
  "key12": "5WN67QrHrATjUizmrfVhG4NoHt5R17vovw8rq73FM5d4jWP8UFyyVx7W77T95K1w3YvHwUQAugYCrYeknK3LJUQp",
  "key13": "3eTdF5DSFiz8xNqyHTFYDuFemzbzJdfpKi8qiHFhF1ws4rLPvSRauW3dNbttCKasajxvzwYRhzkMW6JYuCzNUyBU",
  "key14": "QJ6hH718NqJSxzqRUYbpeaUAqxmjqse1NDJk1GwocRoKDvEdgSHi5no2AtJYaviEh55ThdND1fNj5rmbAsPmyms",
  "key15": "4JS11J5dmJr7uTeHW1Sh6pxGUKTjd6jSHqW8QC2ugWFganHvQPxb17pJvFK4ar8qHf2WsN6W8K7QXXYQyfDTcCtu",
  "key16": "471R9qNxR5K9DomGQdRnppM5Cr6vhDsXxnQzw2vy3h2ioHVFRNC3qTfynywGecpuPxZf5VRwG7tmsjGTQcaRPxzc",
  "key17": "hx6pETt4md5muVjxnD86UNKmUzcT7fzwrFbLpcgGhsJbFVyEnFxzKVub7Dc8U14LKmdr7bzDz8geMifcVNXNkua",
  "key18": "38ybQewDQt7JUqADJtVs3v7vCjYHvbwhVJYMV3Kx1SXKxApvcuRzksCjiCBZqcnAScKoCGGBFrRVEq5ZTaHVNyob",
  "key19": "5nTkDa1hY9WhL72RYZj51ssYTjqZFTG3obYoXku7x12GVjERr4fqqWLt9X9ZWvG5oWtiwKLRueH4vBeQgK9VU6cM",
  "key20": "3pxnpuWTYGphUY9t6NsQidpWKsSTzsShXhhYvdRiJ1J9xLfcELinLA4eZvvNdsmU4hc4pL8xiSnZgYMSzFCL5pBz",
  "key21": "2swkTtw1Uhcc425WeYBGkZVQvSBbRQXFMYvvFaxLeAtb9rAa8wGKkbE3tukYpeta2faNKYzGSY99WUW2uHq3pzKc",
  "key22": "67EdRTdzQodpG7iHFmG9UwQbn8QyRwyggXjNxB2yAsYLCcnJ8s7BnHaMNkVGBEVdeawyDj936AMWx1WGNcXP4hrC",
  "key23": "5dXJXLnY6cwkM6Vzh6BFt1T7bL6B2SG9ZdJEV2FjtKkdRdk9fNq6wC6s4eNLKTqE5mmo2wzJway55nD5p4rrsQiZ",
  "key24": "4ycC7iuysnkpmWyTyTC5ZKtZTkNZu1uksALTLDG7BFi7UPMBTHB3xeTZ7CPxmZBEbd3cC793uqusVjVUBzeMyVz8",
  "key25": "4G5wXr4FHLKY19SVNZ3w5bskHjUJUdBM22yEGC5KjAYcackbasKDFCCMXbbsgDi9CeaEm2vMQfCC5UNhX1HSutuG",
  "key26": "4jiR8BigZcqVGf4zWq4sxxSRYxF3LcKhMJjsiptYaYXTRYiwpKJCiTufJxbDSnL7cXm72MF7uQjK8ZXcaBPfaduB",
  "key27": "AX8dRtyUP4Dv1HvzAQxvoeTvXazQ4H2r7w9S3WGoCayaTPEKBCKiu8LPK5E64C45dujQMixapgRZ18suwHLS3h3",
  "key28": "3aE44X9Mb4dSEE7HvVDt7ty6FxruRApUNWoz2bnAHRTHjjXSLWvxEiHJAwhk34dE6SSsqJ1dfcmfx6kkh9PMYjEJ",
  "key29": "33JQ8DAFR69fm1iNAQSb6uXDMFMGN4w4FqgqMtENQeqnYiiRF2jFrrqpj3gGXMVkhrPfP8gMo8TvZdrnSSwNLmx6",
  "key30": "2S4RHvRapPmrqNxd9aHGP7qNKFhh5QmNfiggb6GB45HR63ppwvocCENiTBi8XoK1ahwMb9zyNMZUSEcwQQ3PEyp7",
  "key31": "zkhK1ncTsXURhV7vuGT9YkTM9C6JdghkqsbvXe61tVpUPK42EzSP5UWwAA4JECHRRdW2BZTzdW6JZiMTrC8ee35",
  "key32": "449AYFma196Jz5ohk87AUV6MRsV5oojSymkcGuw5gBjGcX7U1GFvuvEiNWpBvChd4ZkhYaswNZ6GdRtf8i7SThyS",
  "key33": "3yqzVWiN4TxyedbjCwdGAGuk9dnF5RWiAbo7uxhWYmh9WhPy6q7ghWyvj9GRCZhw9sC8Y2HabzRsXwZCwPp6MBaX",
  "key34": "3AqXuEs8mftLKkeVRCV1bPG1bkuuYVf4Fd9FJAcU5MeCBhRE6Yp1SDpCG7i1AMgsb3aKQBNbCzt1NRjRtcbfUGyK",
  "key35": "3a1rh5gRtBBAhr4UtLZrVCrPo2VcnchEWuv5EJNnzsp4oJ2cY6zuKrMPspj5bYmLtXd1AuTrXBAucvrHYvuR6Hb",
  "key36": "4RYfbKTM2wGAMB5VRdo7S91TZvniFi1tEi5yVE1rM6i534ikNDY4Jas2zVQ23q1XaFFmTowb4UWJwL1bEscqsWxZ",
  "key37": "4y9dWw6JfXyzjG8qajtEjR176hzfRMfNnySY5DtyUqDg2sScvzEedMhyg1bx1anfipqgHFrSuRHfthxq7FBJDTjj",
  "key38": "39D34ygMi9rRLEqcmvFaFhSoSuHCpeyxdmpL785joXys5M4RmssRr26kCio1QsEnnHV3H25HDBwEsmz5yRJrDjQY",
  "key39": "4FwsbigYoRRdWdB1iCLZPJzkjKVfSjnvu4RKqYoQ52spoYi5kp4kGrLwuUegGibVhxxZn3eaR8Y9u3RgSzofLatu",
  "key40": "128riAmR47MqwAMt9qu7wrtSVZhgCn687x2uQmPdtj4vkBK1mSDqCj4BVerzokhDCgNpq25CXUMoLUY3C9VNKi8m",
  "key41": "5B7zsy6fdUdoRfySxMVLMRenEufjVAWwiDnJiKWcPcTdCAB1u9wYMWD7VkLMWNN8qwjySZtviSBCbMDGJxshixdt",
  "key42": "4TSoqVPsRVzZmEzUwVFX5CuV2fsACsjJNW359YtEYAb31vKx2LKjRaAMwPJ4WRQFAvdPYPckAW5QxikEJC4xGHEs",
  "key43": "4f3acL2QF6YGJWY2BZansShGEFXkRys9rvgGJK6VkELwtQy4FdMNjNoPUgXz4dCZLPvsuUsbLnxwPpZZ35DW6G72",
  "key44": "3NWHjXRu889rPh3M4Z2jr9SSFFD3TsG3C2ocUKPoDX2irFmyQtTQHDKYysoxzcQjKcXH1qQQkCU2jr31X7ZbT9v9",
  "key45": "5aRCSEtG3txYFRxFU9eHqfaQBnoPuDZm7tqBNe7AWVkTa2s5JodJ1kqhJfJyiXVQPgsW7HPD8os7cAw2TmWu1WUR",
  "key46": "VU9cVo9mrABoCa5gFALYFzVLhRVknpu5HEZJWKMxyx8MvFGqEUzSQ9xoXQW9BiTD5xBktzgWbw4UezJE6j1cJdH",
  "key47": "5bwayaCqxxjHT8WQkLor1nrGgZbgEJ17Yepm2eMz176Eq9tQ5dUKWHMp76b4pCJk2WSu6UwMPaFtEF5zEJnyfaa3"
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
