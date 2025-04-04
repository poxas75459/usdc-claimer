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
    "2H21gw3Zjk91bYaUjuCAh8gdVRFK9qa27pwrshb3eMc4fYJYqej9VodjYbYsfLLu5uBR3nHrAQKyo98DsUBEnncH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zU2hUP4mz4KzsE1cQKQyv8bXsM2YRn4L1JhFF2uE2Dh8UHTU4AUnPybETPN5UcU62WUxRhpv3TfXRKWCiuDVFSM",
  "key1": "2m9KYybv6LDkQ6jbqzPrwejA8Ab9mnetLH4N5pUtLYMTXdh9wU8tibxXScX1VozA184UondZ67pmibP6nN7AFcHq",
  "key2": "4ppkZnVx2aAJAWEoC4r63D52srJaJ1ZFi76tPV27AyihgxysceryjWVbKYHNEx2Q3BDyzrxft5iiE2rxgEWzZESZ",
  "key3": "3REKwoq7zVpwK8JeQWFsqtsnRRWTLcp5q89H2tVCHDe9HvbR8GWpqcXjMQGBmhXvEZhzj5fBFHyBwmxCBSiLTF5a",
  "key4": "5d6vg27Z7Sm9WmJwXXNbBBRAsuRQUc3zFmeV3U2wE4Sg4438StLpZrkz8PBVzM5dSPQXjVXmiJ6drEH5VDbuycoS",
  "key5": "5S1iVeSj1HXRmzyiyjZTzQrSQo6KhRXGAK65ppQeavwgacc4adc4zJWpHazeSMX3AekCJUXLwHzjpHkKvYdtUZFE",
  "key6": "sjpUGLvCXh4AW6LrtbS9UoTYP1b7QnEiMYCnvXRtuWxRfaN59yiwc7xbmz6z9bUdukqbBce9LfTBXWe8vkcZYuW",
  "key7": "2543i8oCeXxdfzGTAH2tYuG898ucCUrvwygXUAxPkR5ACx2NrggT2Y76oPq9q1RKDAvRi4WCEeGyAaumi5z2fHuY",
  "key8": "jVLdLcLo9MPJRYKZEz6KZpo9zEhjv14xXiVtCAm33AXsfgJdLh2rcEBnkdZP9wqDENfRfjFZGVt55V4uWbrgW6u",
  "key9": "4eGAjFMSzxVdcoiFB5jmtqQuTxF8SSF89SkwpiKEZHuw6Qv3XbK9WuGXXrgtckUdKBzWjZ174p6UqFFLyssBYJpT",
  "key10": "4EUKoB2ifFgziM2XVSqZh7fyb77aHpfj1xw7tgRYH5GYR4ZrMAsM6MmpPyVz5mydf6MtKVBhubeJwU2kNdsiKHCC",
  "key11": "4M3sjxGnztLhSnmNUbjdXd8rULv7umsxNHDQaGNqsGbh3vQbAb92RiM8UdWdWP7W2vVqZZMJDvBiJSkvT2ZytFkd",
  "key12": "5WBW2Asa9s2vJbd1DjmBZr1rM2tgP4s2M8nLf7ijE9eEcWJzwn1ZfSZ2tP7jx7ZxG5t19wm7R5NDwdakPCsGgrJe",
  "key13": "LtDyTWbVrayjirD26YGnGGtdvDmpjRAQx53rBuv6hrPFnYXbbRxY2x1pUW9R6TJRVv1dX7JmCENFmfeHR9sk38f",
  "key14": "4gekPhPWAzbGhjyijtit7VySSauqouv3ihcyxXqioG5xBCLfELbyEhLoLoY9CuV1Dh1PrkEuHrzFjAq8HZ2HTNTX",
  "key15": "5LJUhL9Rxtea1gx6SisgrYJkzRmDeomCF6WeiGLhzpsGT2e5XueSByR54X1AhmEdkoVghXK7JaoALBWrZqZtoX8i",
  "key16": "2RkFjAAti3B17FTvBqnchr1GJxEaapXsoqtLFS39qeMJ8ZUEk4u6FqxWqgBEyrxkuDJjoicWZjnA59nvCnhEcCXb",
  "key17": "3wMMLLTmMdAuU1kvB2UXH1w4mLDeYeZU3bAf2K4sGFmkQcBthiP9zvkTnwA4YuhSTtJ2h2LKdsk7qBQ7L2GAiaMq",
  "key18": "5DfjqcgBvMvW5RKuGTum2eSKLf7XMJ2fcwnGGPEFXtvTkWPR9Vmmxr93U5eCfhixwsxMeNgsyvRaySxQtTxKo8rn",
  "key19": "3osMNdTod4pLwk3RekjNssbkTv9A4qPsbfe5tfpyuGt9bdpNiXMVxJLvGcWXedTy3VroF4f4HeXkp5R9kdThnWZs",
  "key20": "57iPP5bzYLBHMbsNFJTqT4VTrBEiJwZDF23fNu4LsMGyz3STMPd81RUx4G9XAhWi6VdrVPwm4DZ9YVqmj9H9uCUo",
  "key21": "4yBfsN9aAT5WSWrodaPHV13Fi8MR7spUoqXcooGjhZZV2kSwr12QgPan5eKo1768hXUd1ewXA3oBfGSwxdXwb7KY",
  "key22": "S8oNphecwNC9YTMxmj3mSoueZUGTpXKdSLDJfQGVqrLoZVpXB3GzreFJ6hxM4rigQzW7X6PD2DReK8bdTr7a3F4",
  "key23": "2ykBemPXwb3BVL3w1cM8mmTxMQg3HpebpH3LWbKMJoh8iUEaxKn4qoZqt5qcSWRmL2QXEJjZ7QhRqV33zjaz2ggF",
  "key24": "44sJk9CzPhrXrwbwBxVh7SRcyjCTuUjExvvRDGd8ZSiWJiC4jFgk3RChnG5vNqgJdCiRwTz2agwiykY26BLHnjLs",
  "key25": "4rGLpfFw3PiS7MAEjcDy6USNvAksqHMADFUwnwGAYZxz1VpV5ApCN6EHFN1U3mR1XPVCaB52BKPAME3nt3jg2YbY",
  "key26": "2h9FCGdHARmSfdYLvc7LZR6uMFr6NcLs95npnCjw2rhxw4L7iuASCjdZ1vjWyLGcY5XNazG7Cxhtn26UkoRBXoZa",
  "key27": "3k2LrfNVzzKTk1GRgcMWZS9vCsyyjgcdN4UWYKVRTV3WVmd1kjSDNed6mzw7dj7QGsRaamBEb7uBb4TP6RtTChNh",
  "key28": "2wpExUsgBMVRPb2Q8yiBAa3mbEewfVu9KeoVQA2ScTtE3pWBpPabpYG9eMC312Jjq9inVCebAf5QQcMJiJ2a26gG",
  "key29": "3HV7tvTFBnPmBGmftw7KXyuoVG7iBpLZu2d2rfVtK7LKSCXFGQV22J9CEXTFL1sCAKYvNfuQMvvcRS8kiUnXAqT3",
  "key30": "2j1KqJQGAUgwsr7xMmya6WdjQ2CXgrJiFzQCs8rJ1v5mHa74MoTUKXGNpW68UXTCqHRiUG53Lvg6JF7urFmM5ypx",
  "key31": "2zQwfRZaDVYNNh8aoHgR7avG23uzHWvioxFZBwEMQ3LRqrCDBYNJxHsRvkDA1HADJrBZSscCEocb2h4jdpNByhaU",
  "key32": "2Gyv589rmNpvbS44ePnaoJdMXWJEF8CdLb5SVhzv1v5Wd5JEtygvEqQs7GBNUdqxuPtNzobLhw5fP5A3jzQvAsLC",
  "key33": "66NM57Z9KHq2FzamotyidFLHuP9yE2CwWnujAr5fbjTyT84Rh1iykQCvVGJWLVfRXZfCHDXreCtSrfd9HP5wC23b",
  "key34": "gaTK1HnzPdXEMLZNjvso2ouxy2BBTrhKdTq52y7ym4AVTS6RfFhbVaQsN3JTrNaFndDgZmt7B8iy9SGj59SCmEB",
  "key35": "4iNBKqgrDyYYok7C5HTtuvWjPxqSxb2ZZPQ8g6Zn4op37orgeTo8KCwGfhjcSyU4W9tm6ihdvq3TnJCBrKy1aCuA",
  "key36": "kvgG8At1x24hU4fS5Gi2xCr4YrqjjvQaCfX18dakKSHWJ5gvj9f5Bfcqusq1bA5GmKykk1QawsEHTsoJso85beW",
  "key37": "5aDsEE3zmWa67gxkHTpKGwu9GWgpSmBYsFHcxf1f6yNaUG9Qf3z2Dkek1QpjvxtHZzt4EimLucNZkwmDKM1LRA8F",
  "key38": "3TFYLpLWdzmB1qRX9oro5KiTCMsqvGQFb9EGD2rKb2ZBzy5yogpQCfLAerH94uWn3kS6XDcYkjfHMsZhbCWH2Y8f",
  "key39": "4sJDatWiLgxwFMWbpdxSbdZ8sq34yrDy9svjxaNmknjFsboLFQ8fWCqzH8YM4bkQZaNxFicWXfbeAFxBJiYCUvus",
  "key40": "3mFT6rez7QfL7tqyN5e3eFzyfbBzEEkyCjTGbvFENektQ9jXDwmnUtcMJABgN6emCGNSZ7b9zB7vap943XmvGKWj",
  "key41": "pCssX1fXkNUo3yjZs9UfJZTrCzNYwuxQy65KjAQNtePGcGYMKKNdPdHuZcVLxrwKAHJGs48GE17XXVQHBZrma3K",
  "key42": "2dkLcVpHMnTYoCDShtRMi7YCtUNHoDCWJudW93jjXAyzYrGUunUqKmNC65F8txq5XSnAfgfbTsMJWv9ARrnx9hDq",
  "key43": "2PefGmqdzrMGacQijToKzvMVnhmhQxVDnWTvE5xHNjNZGsceiXgbLk9QktkLQjtPkqdoFAhoLe72UQU4QqoWe4xW",
  "key44": "t3mjL7Z5ckWfoTA7xtMK7GHY8Z7wvcwnyKoupGZ5Bm9vfQBfoDYKk3siTW59W9vR68cGrFLSnSeUoE6hFZmWpk5",
  "key45": "jk4s1xKYfWF7j1VY9v3cu72bGyyUY4HLBgw31UoYsPu871bauBftQTVzZkwXAvGwJYqP9zzwc2m8gvxBRfhYiJR",
  "key46": "sXU8xLQQjGA1AGAZN6qowsY7KnVctkKN3csYbbVh1W7dBwSfeWpabDLeUQ4E8HtnVfDoUsJU56i6MUtDzCuhtbP",
  "key47": "2zesWbdtEQ67Peta9X54MmPr7R5JuWsLsmDq4UVv9jU38gjcoBA9qGv5cJBKWpUD1eAgWdFu6G7P21xwxMibRzWC",
  "key48": "5r7LYmEvJwHv9ApkAZbBV8xEudmK6se52pN4KDUGQK2MTn6FfWUSVcnz7vF2VBuFwwfVpV4XitKRXXyhf8ZMdtGU"
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
