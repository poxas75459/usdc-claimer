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
    "KFxY3aDJNgYXaJy9mTVwLL5P6jifMUNZj4WMJrJ29oNVthtwhkEh89X3yuAoQoDADnvYoXFP2tPjGipqVWMCZtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sGqfAd5yeLjtpHwC9sTU9iN2S639d4b4QZ7xhugaLabru6XW4H26nJvsmFgoMK1yUCfhv4vhTNS8gKqwTHCGzQF",
  "key1": "3fi4ZkimzNdnj4wnKCBayTdFJN7ESxnQ1qxnx9J1b6CYHQUY2ykh4x5YBTXhQwBsv1UZCY5FDHXZ2ML9NvJXzsxs",
  "key2": "5aZnmZJDZoq6CDRiyirZ4VQo7b5ywvuWefRm2iWuaAzCcKj5o86bEzsFCbLu87bb7kcLbDix69YGQHoW7xDSZP5Y",
  "key3": "5dgKartvf8mR7pxG9KE1V3m7suuCizmW88twC8ftL53UZGvC9soFrQoGrTqQ4GhqBVtQSSDAuSxv8dpb7fUsbjjb",
  "key4": "3xFLUzBgpzSzhprfznGqXkrLA7rShxXRG5ttQJQePtSdUjBiuCbzBAzAuuoMdte94Hu1uYi4tAWDTHHEr9p5AHBC",
  "key5": "4U9ga8RdV4DDh6KR11gFKfczJgAN1NAqGE4hcDCmBUkB8nzocq9yJC18hpYQR6ZaG2ZnkhU2BScbP7NF7SXZratn",
  "key6": "JKM99d2batuEZnKcktx97keDBGfjYFpeU4PR2nQYCBiiPXgjLSQbUBNPZMahdGynJmMhi8FFrETJMnxKMPtoD9r",
  "key7": "52ShqFZZkp5vJkcV8m4RTSkn8bWNH9MPFTZJoUVBdA3oycoa7sZc3cixyJpPAEiWKAYSND3FnhwMA92FcTSeoF3M",
  "key8": "5Exzf3tp6BdJCXrkfZfMwhvP1wooyqAWDxwpgC6JnuctDeQ4qdPhtgQB5CYjkSvHQQ1ojyxQKbgFXiKWbt11jiJY",
  "key9": "2wEqqLbcqdU5q1k1R3ri56tcPRrrZQwKEzi4pwwWFsbos6orKQhSHMK5vvKutNzQVSGCpm9VkC2pm6Ho71unfGGc",
  "key10": "2mxto7wG8GmLnVGfW8HBZf2Eyrn3xQQ4EN8xbKnc2XUZnsBS5FADBcQxvLe6Yjv18s3ayqoyTmSh4EkKRUnXjL9g",
  "key11": "2RMpCxTMj4XjVAj7ZSCsoBBuDtWvvYmyHW21ZBAZH9mNpR2HsdqFHycPv1B5XXNEwpMhjetRAX4s5ovy2Y4CCuhL",
  "key12": "3FxUkQeyd2JHnFqLAkKQoqNGaXtdBHYz2WWzK86k5QXNg5zyPb3JQ9pb5Q9UonreA4MEF24eR8rhxB2T6ShqQXW3",
  "key13": "5WRK7YYU4LwHpFTz3qCxsC3avKv6RsUPq1LCFabLYau92Pw3hjYUV5oXePUvBkFF8mrwejSCCq4fjipt2Qit1MDh",
  "key14": "29PCBwYFLn2E3Taw36VGMxi5JE5zRUm9g3d11WtcjY8oWYaNnRbgUDW1sF8rpZajUgsMWKLwMfhw4yD7xNSiLTHk",
  "key15": "2pS1XGibnQtC17q81v8uZyxcJrT6hrTB8yPz5zQyBU9shkSasBFzxr2G9hFmYK1FzYEF4Kf2XJu1UNKBqLyvRmLe",
  "key16": "i9dXoYsih8FeqoqEqnPRvtQ4dgLxKUdraZJEAVBfw7vuekMqjsCNcYuJ7QAfbYsRrSKyuSBLA8bM7wDgLPNni3d",
  "key17": "5MdeDYbkoU9pJUKaWerQJ9cSjwLYyD4AZjcM76CdGfGDaguguCM66NnpPKc8GRoXur4eUnfwXZ4JvXVgfQtzWoYX",
  "key18": "2SzLfwrddFojq2QmPidXcVxqRc64dqcJfwngwoGmAhb7ifCBN25tDpeejhynMX6KH6rVdPuWNXSj1Vkhu1pqhKnA",
  "key19": "4ZNoMBMBV256RcvnBKdRU6RFUbM4UG76QkJ9i2jLM1nmrxLNWkw3RM7Axa93sfAeWvvKFFid5XnRMAMW9JH3CAjn",
  "key20": "26QjBwyti96cBF6gJKamyaVFhGKWz3A6pwjMUBFuxnd9L81A4HQuuJf4ik7an8uVJsz6PNTznBkjJguoPQCnqWni",
  "key21": "Rto4JLCzZqibALgr5mZ3mdry9iSXJHkDfepwd24JEoiBLk8j6MZCGAdtSYkAaXAr3bQPrfcKJ21hHD85SMLbVaw",
  "key22": "2xv3EYPhFVMSTbXWMQtATrZLLVzTkdyNhqK23ywr3ezUxzy47H6escTvcGQvrSsQSfLyznfUcvKVwut1YxyYn9tJ",
  "key23": "4eqai3EvhyQ2z1r6WAA666Mu1MBwR5dEu743EU8UhuBFLULSCCQik8ZTL99yBAn78tbiBsHrmE392VE2Fp1N4tPq",
  "key24": "5piRPW2xT129ujYpz4webmj6QcLdmv9TsNP7sF3czNdkhQm9nWc9KzbNhQF1t8SeCahcPwXmSYL6Scz4L1basKyv",
  "key25": "5sQgGQnRB8bsYVPyCyDDBuVcFNbvB2M98vG9TjLkWCnSseCWpXgurkQM9UYxCKz5yTtzjsFXTJhh2JYNp12zc17r",
  "key26": "hAZiTvFwFtXZD7UNPM3xcErVWjGJ6kwKr5nev15zGxYBdBNJVg38AZ6eM4fo1m2UmAyHgnPJWWjqGJYkCsKCDB2",
  "key27": "2ifSQhL4uKM71nSyMhRuaby4ydFbMZeku8FaY832NPt53fusKiuYqf7Xxb58Vyvjqn8BH9ejnHstGd1pGMdYKid6",
  "key28": "3Nqjxh85PgU5ofwcumTXtZBTrcH87NtYLmb4jYc4VgKVwUwswYDvgbPbcfDnvcaHt8pmP6XNsBVezF7CZtD42qg6",
  "key29": "kokDLqXynxf1WLrTkbxrWfrTjjhEQPvXGpeQL9RnMAMjJTTH1QvQQjDhgFRCkueGyKGSY8FFbLVKYsyS4L9oj56",
  "key30": "28KJAiXRbjgSJDCqrmptLKvb1H3vJjNqq9P3fkjtakEXQqCJX2gSRjr5k4SWNssTGc2zgNqnckG4usRnNJNN991H",
  "key31": "5oxv8LbuzbVzwa6ANBvkJJ2dNR3yNbybupxgZpahbUcpZa5v2GHymQQSWYkvLMr5j4d8fM89qV13iLswWBnjnVjB",
  "key32": "3R6LJsRLZXEX5vRKpmProVNzBzV6xSPbTQnWSFrhvaKXJMkFKHmcHMa5rYUo9Xp8hCpE569UyfuG88CtRbVa4SFQ",
  "key33": "5gphzESusLsh3FzKGBDqUf4bX2wY1fSgWZoJ7zTE8gz193g1KM4wHd9BNiPPbpwF8MGuxr6P6aUtZk8PUgRGB53h",
  "key34": "mY1xKMVHoMfUMjF1aNRN1xVEvyN2UyEis3169h5eicQ7hF1bEGgXqiazKEtjJ6PD454ZHdtTY2gG1mTZnp4dmGU",
  "key35": "2GgzF3MrjrYgMgMgNSu7uE2pHaLrTxCcs7wie9yxbLuRdMspJCGjKcZPNBqUvdAFeboV1noYsMirTDBgGoDVze6S",
  "key36": "66cTR6YxQdtGz69X3ZhWgYFDn9zRJCJkxSdMg4FqQqc8A5Sp7AP72jAZUSBo9ABNRPeUkpMQqBtgieC1KbPEDG4P",
  "key37": "3T7odj2uNABjnfyjKJdFKoRPbUEnapesEraHoFwnJUKUEF7aCYEK2xYstpuYVUS6ob5X9KAC7YyiXYGmUD5Y5bar",
  "key38": "zV9wwiJw8tyyH8QMCWXC97yTUdLuHVZWKfreYiXvALxa7LXxxEJ3eq7RAkXnqkRBtsWeKv7oorStoDmWQ6yj4Se",
  "key39": "Vfh2Ua7wGbeLDJKJKbTm5sAL5EBeFJ9mBUQnmwnvJTfN7SmcijkaEv7SogHWwwzEq3E7cVWHh94ArURKNFRbiAS",
  "key40": "51QHiwnLBuLb2WaX3UdLJGKsmkrMnJd3ZtWRSjGcQ7gKCxkyAwxorQZE9rkqva1NGgH75X8eMPu4onJNgmMspFB6",
  "key41": "5zDQ2KczDReD1eXqf1wnrsmcCtTEi4hJbF9sYbCVXV19hfQ2VRubK8jkucAJkbYQoCCm7PuZ1N4qwk5deg4LEwho",
  "key42": "2uGb595dMgamoc5T3Kmmsh6rzR9rthRmhUjXXAhF29GCXrfp271BVTRsmVs6FYmCP9PVKtTXurBrPhjaujKYngmG",
  "key43": "6394FvCgwbyG4EDPVu5T45oE184GfDMRJSaB6LxhomKMRf788gUkER3i6JvzkvZ6cbQdDBapZbVMeEaDK78hvhB3",
  "key44": "5tKTYQn8qE14cv4DwQpyyFhZXAh45kkzWnyJZWp4Q8Su4ZmcbWuPxScoc69383TjCm2B4iMeLHedXxAeUoFSQSnz",
  "key45": "2ogYGMs5wCjewfr9wQfwdLV7sUS8XZQi5vS3DeGqtz3i5dn12kQ5ycoaW1gKsWivNZFRLFgbNtDf9ZQQBoZ63UNA",
  "key46": "2sS4dUdN8fHrhGTnMF2e76cfr7V7QMm8Pz8Q8CmzjK4bzDJyTqG4b2NpCHshLNyFNDjJFCVex3pgCcZxQJFHGV9P",
  "key47": "3XsnrTNAftBkUAFS9LJvi35kPNL9z1PoUBsBNd3sMsYi1wKFwGfLaeLXJ5FDCptxENU1cYFo8XJB5aLFXjd6Bc6R",
  "key48": "LwmgCSdQv3qHxER5k3fdRDfdqbmwinNsyMUBkDeQNFT8ZkJpTBcP4ezdrzuJ77Q2Cdtr7pe5xNM64gDUCSa7hsA"
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
