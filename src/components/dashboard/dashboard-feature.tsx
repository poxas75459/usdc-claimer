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
    "65nR7LDtWX5ayJgSpQTXzVPGn7JAKUeHa6poFuatnPMA5ink77EdwKSt5D5tNyyQyKFiaE9GZjaC7HSFFvQN88np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SoR5CtY3uGrJ6jtfC5Cko2sdvPGwUn1E1LzspzurV8C8bjJaeqF9dymu3xqbqLnkAm4fvbmWjgbd9TCX7ALG41m",
  "key1": "4M7Mr6jrFskfPe986nK74DMP5UZPgtcST6enauj2wvXhYoF8qDGFq8jsEZPifw3xuJB2DntSNWLVdoTkTigU6kLm",
  "key2": "4EHShnzRuei42JcwfBnUQ113ZgPqStPM6kK4NSbkm2TcEviYxp1tjayPKnrnXs4wMAox1pz9fZTn7AsH6SQc4GV1",
  "key3": "4LLLxA6JMZppDq4wHizmkngXDGxMqsCfjro7EXo9NQmzbS3MQX9VZ2EmVtYHWXhTsn9VDbBR1CeRVq27cysJkEsQ",
  "key4": "5Mxhr6GCU4wYoT3jZykskMbg61nuuAUYpTuGvLrK7wkmvgRoon7gGBhMYnYDMU1bY24MEhicQQ2WHnieZZcKXV3S",
  "key5": "3TWW3ZRPfmdcjnKB6LNtbCqZQ6TGoTzBBByxEj7S9bhCoMRLNakFBPVou3HVoMR44FA3nGyxad4DR2U9zWGvtAAd",
  "key6": "xZiczqVNq7iWBCAYvDk6ux5aweMjTCHKJpCNv1G9wN8yBmiidgEbMBgAHEdnDruQ2rqVzqTpP3qfBgHE6t4U6uc",
  "key7": "5BPKs55MAeJgq6at2ou7f67vkc9N8wbTqRWZAkBpMqj7yp7uiwk2zaepkooDPAfcB6e9eVy5JTyr5ubiUEafVLf2",
  "key8": "3rjtmkbnLCg8CcGQeLyB4rhhqvXUmBtTt5GozgLeVm6udE1JUUgUbaQzFfkmtuKPdrt9orVaYBkiPJd2YxDqsXFx",
  "key9": "4np6RZJEaEGqfTihfPtoP9sKbiC7WHzM9WKc5EaZe7yf8EBNZViTnNdHvop6gbtUcW7BDVouPpC86RodN3yndkQZ",
  "key10": "xyJMjDUcqYQtrmjrDDgnGXiKM2yhKuvj3ChGJNQAMS9gz6vzKxKC3HeS21k8B7S2B9wsUbJT1oX6UVfSSR338YA",
  "key11": "5Yzv62TbHqTPyq6VWKJroETs3rNpbDRDfmr38WenZsXXiUpYjjEnZht9xpD3AKbABB94P54xRsvSERgWEL1axhY3",
  "key12": "3P5CxvinCT4n31U7jfousQ41MfYCw6vFSZHkA46VXUKvu5GCsBDe4MkydEkXdjPpqLS1iVhfMKVrTFEHeeEUkzt1",
  "key13": "24AEGVSDZTJNVz1yBgfuVKNAKAaEvzVn1R8ahnwv6pzajaAaYoAC1Vq9N3yV8a4QyFE3ohQkVkNaB3ms8jCo6Efm",
  "key14": "2rWZbBxBrsVTWt8QDUHP538qtq36yw9w5HxC7WirctP1aRmZpde7oJdDXQswWk5undfY3mMqrE5y3wwvBGY8LX5G",
  "key15": "2boxpfz7mCjcFg4tF2vE83WujX4TggGedUJhL3VuX3v9h6XyY6Pk3PhP2YZ6AewDuGNdvMkG1cU6AnmU869m8VfG",
  "key16": "5xQbUbXLPbmnryo5GSoMfWUoaouwAoCrJKUxLSQe89uosyrR7vTigwBQboNn8nY1eJipKX69L9WAfR99W3pQXcj",
  "key17": "QovtC6KWhcpqQBRyTH4FzWipsg9Q3Gtj1sRssqhMnBhbQZJLfmUzbxHgUV3bsRF2pXcwMUvLpSbwzigooraufyR",
  "key18": "SYPFSxe23HohYpSZJCYVpghxmenzL4CLKQcxvLA1ng6J8ciMeLSjNtsk2dhJPGGcaY7nYcRmZpajZ4MS9UCP1q8",
  "key19": "5JbXhg9iMLpuNpTDGzRrCAte7ftEADmpRjYWaiu962PWbR7b1CSSmoiC3xw79WzmH4UrjKKf1PAn8ukhBrHEDSkh",
  "key20": "59ewPTpW4mqRswenSjEyftPxSy5ZCZgcYdxfegzfckiSDBY2SP9X97UKAbHxnKKS3AXSEodzTVqXtYkQEjTzbWgn",
  "key21": "2iJesxqvLKeuDvoPpdR4CQBgqTHuxP7g7SrHwEryY96LjCHhnY3qkDhUU1Bh19f3gvqAg9QN6SWuV1aXQrk69R4h",
  "key22": "pk39iUmHe5TTd7d44RKqPTsVAqzGBCQMQdesi35MGsT1pCZDjbMz7SQresnDibkHFE3hYCgvYkwCxyEjCanpLy7",
  "key23": "26N87ZFvF7kbYbPKZiGkt3aq1okAJCwTpqQWZMjqXWF3VcoyAmnWkkHHNJ6v2Do97fPMYJscgTrdxPkNszdzvhho",
  "key24": "2H5HNqJMobHRuL1oU4PSZoFiJV1avC8foQhQv8QzXRMf76sK7icJLjHwh5GH4uZtnuF9m5Qo9bqYGmbrmGNjeCpD",
  "key25": "y452E1Pv33iJmG1iS2vcsFKqqLa2tQQqc9RGSZhgLyLKUm4FvDoeiSHcbiDgunyxCJkJDJwDafoez5wz8ZriUod",
  "key26": "22HzTaiWvzUzwbErxEo7VuZwU8ms1ugtcs93d9D7wkskprUujipWrGx752AfL5HsqC2ZTFaSWAWzbbFAdPK56b3F",
  "key27": "3UxnqrEksJAnnt5YXehtCGMj4o3AXorBQarbzwKh3ZnWDEeJv8z1tEkuXdGfaukDsQKrhdVCzYySmupPcVTEmtCJ",
  "key28": "7kUxzLvVrh4dHDCCW2ez2N6kvNvXER8xLJTVZTmpkJLpCgKA3hmHw3C3EDo7m3UmoCm94uGeCSh6j7ZSJQLYRin",
  "key29": "4RjXpSTMo22daKHpZwpRj4nUdVVApywbgEaHd2EB1xvhHHX7b5BnugAktyxh6XRADLzMD2khmNe1hrLeFqGcdcg7",
  "key30": "ULSbNhi3tURp2pE6rTBhPNPLVvZ5FaxHU1eBcPYA6P7KBosEz6nba9CafTZeHk6Tj28yNkenH6EmHjo4ctaVdVR",
  "key31": "4EoUo1CSEwgy3WAP1WvBWoczAmYaxj8uqrBksbqtfMEu2xFChmcTwjBnw7CfZjhAhJVm6iiRQiVvrVt4oYdBQSRa",
  "key32": "5W1uB9DCLh33DEz7LzSgSpMMyuPrDWpRb6WzpE1qjqSKDa5YkVJ7Sw9NbspNsDUu359aEbhAbyPjyig1XtCnNqsi",
  "key33": "kWwEg3UbrsXDCriB3TYJxE4eboiKeKwERTwGfdT7rgxH1qbg9vr5hAJzcZitjfnXUstunqdd4Nru4HjopBwqA5K",
  "key34": "5rMD2Xwde8eo4grX8ynJGAK2Jg5NLFYVPoPmtZALH2m4xDJG6TCkN1ugbEnE59KowKgLGVPAk5BrYu5QjefXn8JZ",
  "key35": "5cWP9fnLjXEyscMoTKe11Dx8coBiosncJ7dmyqocweDRuYrPmZ9R2twjSpMugn9FcPnZKMEjvMtLDMcY6kG86mJn",
  "key36": "3WeQKt7EJcAxbaZwWexLqayzA2Jm73eDwVmyMgsNUwfxVkQb5W4FLrM31G5XMcVY4mFWwyp3eEheGZsLRYup2hH9",
  "key37": "2B2Y5Hdr7wmFSNUYqhNxbTHjcm5jwkkiQhu17yS2mY2YWwhHTThHrtnWGEiHc8utQK2spW5UHLcJxC3G8vawFLsZ",
  "key38": "5dPvNJbRsiY6h3emg6wR9kV4ALcT8uiGq9wH2j5MzWHeUeeCBTRSXVaWVB13ZsYmoyBGRABKMfgKUGcumHccQpmt",
  "key39": "4DAh7PP31V6rNJsukSczSHHikD69PN4rLfyU8Di7WVap8HH92JrHoMx9Ru5ooAYQ5bwzj3jDbTpuFmzGSjkjeyPp",
  "key40": "TpDtXApHKLetyu7TiTsATLPgnSnRF2458fPfkG9Ku4F8wEcqNEMXSF3WMn88ArAsuKVMRwCCiU3fFvcQ9r3DvQo",
  "key41": "3SeySbPdJm8g2sDbPmHAZ2Ycfa3MQS5VDD8z6UdCA7Ro3QLsxv4icYv33bBxc7f9TFs5Bd3ShyaJj9jZPyv9Zq5o",
  "key42": "2sM6udSMpGb6CoP2HC2kFZVYwiRkmGNcyJM2vXyTmbi7cXXUghbghLRX6aGFveDGSgPaY3nAvojUjr5hNG1aucMR",
  "key43": "4L6SG4Pw5JzZqK57iUYv6ekCCPE9JJXVEB19MaGL1zg4xPx5RCzGBknCB3MTKhzU5TuXSYbBLxjWTuv7ziyLXcns"
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
