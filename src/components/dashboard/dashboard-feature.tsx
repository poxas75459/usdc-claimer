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
    "fuzRPsYyGuNsjb2sqDpFUwDJVLdGYXReuDF8NCpjgSffmHxqPKPRo2ZVeXzTe6JHzqhthJ9ZNAtUBZR8C1NR3uB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B3WqDo7eZo43K2NCG1gyZJ7kCag5G5MJzv1jPCksPrxBSMQEY3WsonUw32o7i5DQSscjETnTUeLwvRpFBuXEoma",
  "key1": "2imwzGQ4jctAHNExTGJLgEH4EtccPM9jKbU5CLQ7mKU67pCSPxpEbAEo7DKDCwMwJxsniSCeWrbexp2f1vgwowRY",
  "key2": "nZUrx12Ah17zBB9j7CqRsEaDrBw69hdPTGA4PhrQsUAz3Srk7ReTuTxDX6o8E29UAFmH2HymV1MrZx2TaSBQCCC",
  "key3": "2N7fknYKjChDdYx3cgPanJTut5ZB1iwxvTpr5Gsg9BHhM4NgD62FojyuP2MA1HksVsVyYXFwh2MPxqcCfyo7cBPr",
  "key4": "3ZbyzMibTMCWz8zxtauc9gnyStnajsWRoPRKztiMSdFqkctnTMaJPJ2PN3NamEBggFYWzkDrzSsD29kh9dAt2rbf",
  "key5": "5dzXRhSwtpKB1etww2hdt1cR38qFEaiBBYoFL8dKpZLXqd1cucQXV9yuVp7FCiQS4TDGmzWr83z3YEUqyLdeRjnG",
  "key6": "63wrXosCcrqmCrU1t7LMa5vtQgxcby1X2EfyxYtuqYSKvp1qqDEDvfZJrFzTeFDkg3pUtqoGQftRkZBq1f1XgLk1",
  "key7": "4GybvJVS8dfXWMiR8h4xPUgaRxq5RdoR3LwdwN6oX4BnaTZPdkivofNKLd3HN8qPqkyYpbkv4qiwbxu444anqF5r",
  "key8": "2Hv9PhLRQobqWLXYzMhwKQF2xF9PgChCfD1DDX9UBecFAqFtP1SSqqTCHgfXcAjUamn7iPJ6KhqwkhctSWPD6ucL",
  "key9": "fbCw1oR5GykkQMjJcxXTLZyoa6aPJGU81oTi4qQi4ViSd9zvkBWEcFuq5MAEzFNBhjLr1c3ajJA9knVxJH5c3jo",
  "key10": "4H2UbAAg9zcCaXxzP6P47wS2vaa14vzB3SY7XaS5JN1LW32x9QUfCbfvZhk7byCj6yGdfrh4T2FomVjz1F51Mvw1",
  "key11": "2aEWLrxHqxwCX1yYd844yzVGtUPL1hwj7SoMB4AMojFMyw7779REjh6yUDpZMcqVJi35E2PPKQ9FKQZ6nCGMxvTg",
  "key12": "2XRQjngAspEtaHY3tB4fkhcvKwxiFLkM13XVd79jy7WQ4F9xfRRmYKDaj1p4G8eSVLJBCyZhHVa1GTpnKRPPXAML",
  "key13": "4A3Viw6znbqeVr5axcc91wF3oJhPNgN1ppe1Wu2tBeSG3anRrBW9in1EQBSbiXvritTuXaACM6iKxb7oBdn5EYVG",
  "key14": "21CiZPTeD9QGzRu61zE5zfkFQkTnd6YVcCXEPqGWYBPai8BNfaiP8TeUQkrgrEuuedcbGjL9jtDfupTBTxBFaciu",
  "key15": "496cdYsCDbncWwmvHvuw5Ec5T4iUjNVz4yjF9GnKLgskiRHzKpkfiFsL6HMQ4EwRiKwePBdtJaXFe58j17cQSUrk",
  "key16": "4aLr2Y2E21DKNm7tHydjtRjXpvizv7q9CvpsU1d1aGUvgsgqfW7foSkvtD9zgpomds3XMgsY2RUwoyqBZjgtFMQw",
  "key17": "2HhmbkyTyjWNv1S7upBRsS7mDuEvEV1wTt4gDVwFwQqaeYeHvvfJ5nkXECy3ckFkheNucc8W7vt9uSGLbKq8e5Hm",
  "key18": "2rGgedywTkBNnKMRmBEnNuCzgskRuj61j7wfnuVQyRP4FXV3qXtse411cXNokqv7DUyaSQMYNrsY35YQ8KhnjNwy",
  "key19": "TLzaRNCoz1vg1tociySbswmCrx22mwmnws7QH3nz694PjrHgusBDqUYNcJ1huuMnE9d7GEgBs1FxDgpE7wtjpNT",
  "key20": "5gC9ZS3AULc4Uora6JyQG1tku2jrRP5yWZNTP2Uc8AuiJAgB26UPRab4jNa5xA75dbtq1dXs1YZBnqWPYA8m4rom",
  "key21": "5NKme5Ce8EkTyw9XjfNHVXZQyeSRUVW4Y7daza64MPrvpKX3t8pn2S117zzAemiM5fK6GgG2g6mG8nh7zdxVyrb7",
  "key22": "7S9ixnzfDdsj9GPNX5JzGMVVQGmfuCnQs9ZXYkAxUFqNrsnT7zzfRTbioJCBUevnjDCw2vHN4c1794yVGHEQRKN",
  "key23": "wDQZpBNq211tKhvPBKHfJxBDU4rjv1LWXcLCQsj9UB4rspS7Xzpu1BWpyUcpgDPjLeVsz9C5N3NHCSSnZuZ8ZEN",
  "key24": "xTQ2F7TrPJLUQKBXRk8asqd9LcxGifXAFcpn4YVNxnGZqezfjc8FUBjpYierRmhxX19iu3jamk9WkTt56FaiFHS",
  "key25": "2QzLHVk6eVhL2vbd4ww9u9mxb7HZnej4hmxMD8kGWjgReDsStWBvihAEfkSVp2ArASrZeU3vZgaugxtZ6HptaQdm",
  "key26": "5PkSZEooLwWbynyhti3n9haS98BAiUQEftoNefJBMZcKu6Fu2H144woJKoaygumYbgV1jfKSwNvXPt28J6zrZYeB",
  "key27": "WxfMaLedys9mhjHNuawovvN8cYcRbjk39tadrmryHzubEpEACCaaukyDPK1585p8EiuPpseAAWRU4oXFwQYCJhR",
  "key28": "66Fx5V9NqF477moNHBzDixy1rCipxHFRmbiyFbX7wmXvvxoCAkwXTYikiQMzTdZBp1nvB9YEP4Zvk1TKe3VoxC7D",
  "key29": "y4nn9ecQ2Mo2Rr5ErpsZEnjSNRu734ND1kBCVSy5VaRjj6cXW1h1xWSnKL14GRacm4RvK1Bn55skaKCQ1m9wVoN",
  "key30": "PMZxsqRWMady9wbybqQ3dB3LR52EuHwx6NWYjLJhyAzs1aoJCDgBb5PDfy6uT9MY9Lk8xjJKjH5Un81egbvnxXi",
  "key31": "579UtC79GgmY5zkWxpgzno5GQTJxQmvYRXuEdg8MA6aoGGJ4o9yR8jL7fZSeZPHmrrjWiaWZPJSbd5UikpJH2uzm",
  "key32": "5Fevdg8nQhLFNzKadVxSQk3qfEqiJiKUdDM1bymm3Bd32bsz4EV7drGQgm9Kr2gLdp5N9tCVHymhbmdHB7bUpU2n",
  "key33": "2JSu5vC742uUFv9p9Lkht3JcPeTiztF16VUQfEkGWy8Kh8CF6uoKGhBSeeGGe15GMZvQ5obr244ZYbuBwDEF7NC",
  "key34": "3FAvE9FMbLmZoatkDHrcwTpmL5Y8aqnD74YaerkKNdMSgipmgMDjNJPop85SVcFxCHnFd9dbbtPpZwJb47UE8pFq",
  "key35": "32RdvkXppffMheztMLkz7ZnnQBF4BjnhRpar1Sj2aH95yS1GXVZWdVhzZsyRuHxJcc1L4LcxMAkYewH25ttswYct",
  "key36": "5PAy22cxRzCxizGxzvcmYYtBP19uQpj54TbceSEh3QGBJBr6jnJSNMX3A5eoSbUn6PiSaSiy8rjHcyZdqB3EcNR1",
  "key37": "2mQz6DFQqWnhDgDwiwDpwLvqsq2ZhzSMnq9heBSbanSfrm34aXEShpLU8P5JSx6y1EhpczEFadvQQNQcx5mPouTk",
  "key38": "eo8AyUvJ9a53fpYBGZbbgZekVXy828AK5jGJf5DttaTsoVayLMSsBmuaXQRFLdEibuM2eqykcHu1ozu27ni4yUP",
  "key39": "LwzG6JmWgkmx3VEeEk9Cz4qzwRDsordg8beyZz12K6xgdknExyvoPm38sKS9Co1bsozbLnCpQ7KrGen5XzVN4gt",
  "key40": "23gxNQsS3s2AHddUYeMaKbvzShz41D1nbpvAmuMobdXTWd9Tr1gdPBGCxZS4uD98dKq4KibHPbTLBZcJw7ktZyas",
  "key41": "2YqcvfbBmEkxLfeSLuMpAASCKBru9HpF2Rv7M53bgs8mdPjF6BYrwW69e67CW3V58MWRGV77fhCZcWpZSrCBZDXw",
  "key42": "2ret9z4robeB8fG3iSeHFi9oYbnyZEH7D1bc2KghxNwpdQBRZPQvzg5Npcfoe84qFRG31YbrCSt7Gv5dGH9Vrg1o",
  "key43": "2u6QcUUwi7sKwVsTU1LUFHw51bXp4VvGK3Ptp5SNPv6ycs7GL6G8jfrLoVWaZZXXdDFYjwcEi5QZgdCGpDQEP2hY",
  "key44": "4akry96iHhgdV7ua14TFqZJSogrWfJjsUrt1VNDwXKT64VPk9iZpaapcv3GiN9CTGKpqG3yxt2Mb6bCHSGYYjs8o",
  "key45": "YsGPfjuGupFSpLvcKx7g8NJ2cbmNHtP4D6J78xvXFV2QyuaW5eZgeDeh5mpwnxwery3GqkDNRj6kVfvajdzFpws",
  "key46": "2bsgLvVjoM1xUHBDphfAe87sVczK7qrVSYJrLgq9ZsCaprSF3JE8R3muLTEduy3sMbBCbhpCKdZYtLB1o8i1gebH"
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
