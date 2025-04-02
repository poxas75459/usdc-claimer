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
    "4v8b5sQBTFTyxWoBBwBSsoKBD6428zkWPcRs7ucph5hS2j69KZRXATei7ASJzsjd6bM2vMALT7RLEX5Q7t5poN4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35KnCVL983n8rZBpcMzCkTAniyodDHgWExoxNSUa8KFoAFWBfPWYBhQFuZetop5vpaqfxhuy56wVZbYrKM6T3UNR",
  "key1": "5XzsUeQbfzLMjtFaYzB4p7VEjpv73rBgy5sHQudqjn2aZQzzvY6wkJGwqyhYMsG4xd1KRuDxZSvdQmsg1JfWaWf6",
  "key2": "5dwYpbd2VkZusRAx72H4EQbsGXfXHR6zojNariuwZZ1u2kocL8eYNEk97Vm9W5PwB9XRz3pEtMQ58mjjSGbjbNdX",
  "key3": "4LQNNEdJj9P2SAsAB1vnZmy678d8pjhqcUxar5reei7zZsrd9E98boSZzFnX2mj4r5VhuxdgxCPEKX7LGcRy2d4i",
  "key4": "3VQa5zmWYEhK6pb1K1bDvnH9P4zW4cBddU7S23onG8VLSo76GqdFZ2mmhrUvsVg4cr9KthabswsYAYVtPKrgPx8d",
  "key5": "tkoz5rpYknQDiGZurMctVMthbkScKTyio8B6Jnvgq84jTWbLTnugxA5cdNtgH6zRvZzjrrkboTbbTP4GTNLDEKK",
  "key6": "5NwZVuk5Dwt2iceBAyAmFkxatc3fmwdUCccgrv1t8zpLfdKB3c4GvbqwTw9KrsxRmAoikJUDbLRpZyjxA8Ba5GS5",
  "key7": "2FnygwRZzcyJdTjZpshSg1jWsoNn4HyFs9hPCkQDzuzxLP8hpi8MxPznFWAQa334bfuDxje19p9CB8DeA62vkrWG",
  "key8": "3ZbK5iMhM5Pwa4iEN8HoHN1gg2Nnnznj62hQMCGGV2JhcTYZ1ZdaR9QAZcVTGWvAjHL4xK5hqipWUroqzmTxfVFA",
  "key9": "2FyDUEyv9tMp3KtaHgTsuPRS7mVVLzVaa8sGSaH526qQayW6oDpoE1TgzvD2KTqHhUELNEiLJ53X9QhgrheHzWKR",
  "key10": "YKteiNB5zYr6h7LWbqQCBNnekKe787ixX1xoiC9K2snbBRXnGfU2uR1VPyMuGKuTXXw9SMGrKPHzobPYtdp31kH",
  "key11": "pMTu9Zx5VXH2fzmAGBqwvmFQt7wH7WZkReJq3GwPDUJp3uRJDNGi8pABaCivGLn6LAT8uR43Wd95puEsV4exrcY",
  "key12": "3bzDs7dr4rAjh8CnFhXj5gR2gK5Z4XuM3t4d4AvCuFAiRKWiumxvJYRecwKLb1hpJbSVnTnyAgyDsvmpAZm65xcv",
  "key13": "5KnLBtkTWPT3z4cdQBWiHWfrqyiD1wcviAA26dpUBs2ibVFzydt27T1CVK7QjvgQ5Mj6zc5p11G9ciiB56FZcDnP",
  "key14": "5fg7Q5QjQJDPYzGFbUMU4qRkJmZoTLAHtQp2T1dw4sUpQTEFcNPivKKyAQuPo5kBvz6TjgBUaK9eE7UW324jNuyR",
  "key15": "3Feyn58RJ9KMNL8DaznBKgfGTdUVCg6nxnssp125LRmKSG5FrSFXdfwA9S1qGou5LHGhYy8nrAAdD4MBHeSdtGSk",
  "key16": "52gtHDyqnRFBRkPK4fmX5py8Bm5ttD8hyGQ4sqfLsRPHzjzGRCE6i9n1FrNLqXvjdTboMNarWwPibzXc8pJcaTu8",
  "key17": "4FgYRfss8Fij5JbVDJWqjmudXdDDPrq4CDhEYU1q3wrE7EekG4RE1Z2Y6c6eY6a2QUr6n8aQRp5PwWVYwBoGydYd",
  "key18": "3sfKpLw7RxFNaL6H5e2HLyaPywsjstPLoY5Fqr3UWH9U8eQ6bstWe6oMDrA5w5txsndPW1LWewZxqxfZ2ZuRQuWP",
  "key19": "4f3zigS6WEcmQfNfSUGbbSstkP2xGpUs6vFkTAssp5UJAxGYSQqVDUB6DgeTeYXbFLeNbtCDpGQ9YnduDuWD21Pp",
  "key20": "4CvhpE3QPG2dRmhQW6ZGqWo7VzPviLbDBh2CFEzdMa9zAsQUxaoPpYJTeKCozJds4ibFfeKTXQKZ77wujDg7PoNk",
  "key21": "5MDVHzxSkvMCu3NhXMZCz3qT4gw4aeBHac12iRGpGbKwUkYGSeYKYQ5zsEp255iFkCmaoXs6fNLdrwuUQjkMHMEj",
  "key22": "61RU5xhqQDaJZGpCm5K7BBvuwuyJD3uvF9MYaTj2ht14XLmetP7hWvwhand7U29pLPhFyWZaKZQSVzNRavMywSut",
  "key23": "2ewKYW46eunsGsAh36JuwE51wQcEPnCSMxG2rVgA9NszaYozZ7SsWYxi6FocphUKqNNuhsSeczVJZ452BL62kNkC",
  "key24": "4j1eVjCKnrJ2Dfv9rA2tHmNdtk1bBMbA34w3aLXDNVSv8eV54xW7cm9iMDxoH7qzQc17DVyLJT2kPPZcPV6Un97y",
  "key25": "4NxmQjkn69x2b51MHQjgeYRmt7phdzGoMXo88MU3C1ycHdqFzQpVJQjR2uwogqMHrqeL5hKHCshHYqwnQvD8GrrT",
  "key26": "xnrXCS5xgm7prxH79vACUpX7kSKFnzyFcerHWKBKRnuT7dnDjySFzZPQ8M78on1QNpLWGhVaznaQi1y2skUS4Hm",
  "key27": "4XCWt1iewtTByR1nsxgYZCvdsEkraPDXJHDX8qD73tBmmBHZSwUd2zjyTQVzRy1kdvjdNHWA8AR2L3C1Bhpaiena",
  "key28": "kGNsRcHMKs7wciWVcwTexMbJuscEuK5KFdGrFJYEF5Uk6KyDd7feJR3fyEivd2XwaLF55AazukM11rqqpKiagMU",
  "key29": "2nmFQBV2SENnJGmJzvaXA1zcDGReCX17dSbfBsY64iTBXH23vgZwiHLWWLUEZapkxmVh75KoHmFuP1E3mSg6TVq8",
  "key30": "kwZDXMK11A1icJy4yEUq72gs5YoRiEimAhKiENKQ8WULf4hQFYjKqbNLq1eFLQbJPgYWnG8qVokeVrci8jZtsib",
  "key31": "4QqjfxQTd22YrjK5KEU1iVvMFmEYZujgPgK1D52XRGcQL21SBRZAoMmVZk9ihodY7cgDS54UgAvE9uLPZEY3AuQE",
  "key32": "cz9Zd7j1GHb7JyupUx41qgbN7JYsE4ERz688tHgEcjK4osc51VFUTN7DGrmHfWfoMT1fWG9d9rKN6uBWoxuqqBL",
  "key33": "4zJqbawsDv2XnGkiZGd3V872v2pFptxgYnDDgZLz33jysb6Zw4PW41CwVzyPtXRDXQG8WQPybKvbLqBcs6nNq3TA",
  "key34": "5rLSi8iZga68AMcv8xJBmexmbNX1cFAF3KxaYw8pEm5NWsQg86evk7BegwjyJGe17Ygkv1mzALvSHhiKaXgdRYje",
  "key35": "4AuUrhJHAqpJhw5WkjvaBgitFccdK2kjh5AHJ48URgnJgvEcUSMk7NsfYEmiaGBdYQNqp7n4grnY2MRS1HhUthf2",
  "key36": "4TPTs67Ksgdts93ck9pzAWZ78vmGe3G5hu8bK5hDHSkY4vUufcP4JNHD5EgwfV2Zp9ZFM7ZtR5E1LyzW1RedGGWg",
  "key37": "2VXLXXBwEA3g1XfKzHNtBs5rK3crQNKTypCFYn642jdtdRgW6wHcmKEF4dqu7KEEDfK7JXD12vjACYGyDErgFbwu",
  "key38": "2Hb7ckPNSeQeb3K8wzvkm6HKAr3YTfxknA3nsL4KkCw6F8fvBxSN4UGfYLKcU33UTL3X11EZatJL9d87pd5Vzp2c",
  "key39": "3otg1PYyKppXWaZhJPuiZNS4F5QhZQYznm2CfFgnsNPkXEvcVScQ3ppLJtV7F8nY2h3vpyMRKSHc2FLiUch5EWhA",
  "key40": "2A6zgcgVRGLsFcDa8NtLuu2Sh7aPows57JjPECDYy41p39Yw8u5rDeVtGjQAPNr6nZQ2B4RU511tBisn3RPbYK7r",
  "key41": "2ofgqbpNyiaPCQhJkYuLiuYrxGwFtYQ53jPoiJHXtgyEm234RyAdEcJss7Hsz63hSCCrvYpzXVgfhozXax8WUXBU",
  "key42": "QgpiEoRqBggcD5XmUNBH8RHArDUerKGcJhQdChnUFYEyZuCUKjkYgsWghAoCGj4A5f8moBRrQN8UG6LsFR31VEU",
  "key43": "4JZf9TVoeuLgru6XXqiyB2W6gF7JAZtqz4kU6jrVAtoMgBteb287k9zfHaZ6tMeKCbJj3HF3JFGqRfeaBXfDTHGF",
  "key44": "4ytk2RJwWPH4ckJc4v3K8SMncs2aoKVw1iuQf7CzcH761SoabgZxWhjQaeAf2RtoXZen7SbZdAFCoNzpYW4MSKgx",
  "key45": "3XdRZzcrUY1JkpjTiTSjaKis1WEPNTwVh2wKTQkLC6AypSAfdvs4ZmpZgZofUMWpyTM6XBduJCUrSavw4HWRVcTo",
  "key46": "p71URv12dhdf4KPu5zzRYbcEN5yC1Le5LdWApavtLdsqQVeeTPj48VSA5LKBhHCJS92HafZNtAFWPAAzhAugRiq"
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
