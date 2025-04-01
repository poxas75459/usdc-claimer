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
    "2jcM68NmgS671tnAh4GNCyrsaVMwJuHXczCFVnTA64YTPZqM3tXjAFMipVAVQCDj7ECreUTjWWUNcSYXhbjbsjJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VZ3GtoP4tzyBSrysw14v8WLcdD9feX3E9R3ZwbguX45sE8PoJq3E7dSot52CunBTDMvqN57shx8PryBXxRrKu72",
  "key1": "9ydrmzkSQNC9ML1KPyp64BhYxvXfV8JrMtg2yRbmWS7gBxTsK9XMCosCXp2xGWgcfesHVnyeJxEpda1M5grDXai",
  "key2": "615u4jnJBccADsx4ZX9VErNLve2hZiLWyBPRrYnFn2t8kxz3mSgDhiVcpbbNZJZKVANqxt1Pim1mpYRDipXTMTsP",
  "key3": "5zgM94yBecA2bjLGZvfSjALEgthQfyKFurwMtR1ZhskQW5SUMTDW81oc3Su9TVtkRdYwi5cjHUzuqy97aaTW9Gnf",
  "key4": "43v3QktnpMKqGvKC8h5W1JP6WGtVQE2DtfDdqieAmBFfW42DMyeTKypXoeJzpbBNW7EVweHK22wT8wb39M5SmSP4",
  "key5": "2pK5X6vvF6BeTrSLJogG1NKuNWu2mcdaXmZYQqEJB1HckUmHKxXEqkXvhbqrAT6fBecbC5ecAvw6g1ozDd4MQuXL",
  "key6": "3v4DHSzoqNM3HLJwe3YQzQUj2ejTqHQn2cqbj9WzTnXrLyxUJarS8Ja28s8riRoEtDFSZ1ym1tPt2hy22YYqiGSX",
  "key7": "3rxFJohGWscB5dH8uYhe9b2W9Ppr1mcurByvmQ8nAWimZD4HU9gfu3WH3wV9i27CGLnFuF1p9xC3D9XrRQ887afp",
  "key8": "5zZuU6xDCMLdzcRmYd5p58c14wdRGDrnt6cT8RMJEh1S4mRYp3nFLGQ1sx3roynDmb74uVDeS4tSh47gkeoZQCyz",
  "key9": "2AC2RvcDA4ZKXQa1n7SMKpixVPEEZZrh2xPNmKuHdLDRaduyuBMbKxkrZN2dgV9VRR37qTe9Fftk6SjaJ5KtAdW1",
  "key10": "xhVzzTQNUtYyTHbnv6Xf75qWBCKejUPhLtMYLva4BmNB6KaT4aaL9NEyXdvLPvurAfjDHxbqcE2nNqo7YSDvbML",
  "key11": "3ZN3LuSBjsXRX68PyENRBxeUbjcavbwLT6RGcp36yapiZa1nGTSeMcFb961VB4Cj5578P5NmWSa9XQAXXBu1CE5X",
  "key12": "2qCCQtT5Q7fshyqwNxXFeQc2Aa4u6mKczAHrA72LZyqnZLDUp5JqdQxhFRyaUfwBh1dj8hJZhLfeBGnzJo5cfcUF",
  "key13": "461sh7Hk25KD46u9QHfKLVy6fECmtQ6btxGLp4oFukJSZMSxY5bSY5pv9yShzuXc7W7yJaEBEHgZSi7RGFEuJBhr",
  "key14": "uy1YwTHV3EcAHZeim39ovUxJa1mq4pMKc92CcDaTKsbJFtTNrq8FgXFp2mMA1Nvjis1orVH8QraqJtm61ec6x6R",
  "key15": "575LP8kLc4jZzUq4DjtvDoUyQzE2mMSYun1SGziF5DF1WbXWx6abeFAinFwTZAF4Ypue47BAETuqDcLsfxFE2RaY",
  "key16": "45HYPYbqMZ5Kd7a4Acy8rwiBJVqNMAvAtmDTFM6gGbgMqPDYNLjqcKvgXaMgVEn2nzLYXLrgM69U9TKaKrsxA3Yp",
  "key17": "4sQHkAmJrpzVGMfbXBSRcXqtkJu4gLvWN4vJy2nqRH9Q2KphhEhNEknp4B9on2jD1ETDjuVPjgzMt7Q43wL1AvoB",
  "key18": "3MmETVTDS7ahqR4wzPfxdQvCrqrX2vNyE8jcnBHZ7rNYPLxrKqLwUgmmB1pmKJiMDypk8SgxEz347fbFWTW7eT8H",
  "key19": "5gTLkNbpnhX5AUnGP9NZqBUUeWoRi4qqyyLpT4hrU8sghnDZkyGMubxmptDsMYH2UujJXDnQHmf9KJujSGJoFcnR",
  "key20": "2HNKjiXnzCi1QpUSGZWparRk3wCAEMRkrGxzeqrvngGakgny2EkZfxK5NgoPwfM89GVXaZmQSaYrwtf3R3bLSgW8",
  "key21": "67FexhymzeK4d6ht3sa7ovvdfyCisrkY9XfQt6BZa1gZUgjK4JBfszLwDpFxobZD9VHuzR227kXUvbh1CSBowbir",
  "key22": "5spwnZasgbmf9EmtApiJyZQevpuDrSio6cYRgHZKgq15Atzgn7toDLpmuPP1yGrBa6RuNDLQtotYPSa7y3kuH8vw",
  "key23": "3S6uPepKNciexqyBGCk5kJYPemurRaJXSekh55TMRYfkdcqQiN249L3tPSQxxcL5ZRbfgSsNy1Xj3vJKtXR38otL",
  "key24": "5KVYXXf4D4EvT6z3eTtPwQosxtWnCXoUdqgofEpHscMqM9XcEZMtAo22MyQnET6SjG2bmDbRZ97dcoBoaXFthZ8u",
  "key25": "XdeHpfikmRM3dmRoNoYXz8g2acu8p9AvLCw9D1pJHgygHygnWnARYPX5bAc5jpFJVwYbAgkVa4izBSzUVvWKbPC",
  "key26": "8hdSNXJhF2BtsdDTCTHaYwEyUQp99S9pM9CdpdgvHCBg2qXDQZgaCTLkkDmAMvtid7Cq5is9yPrCVceih1vEXzR",
  "key27": "3bLMLF4QEdTnDLRWDBnHV7E6RYQSeXsvDgf9iUaXfAuWkhhkMAEy7u3Vxi5DoA4ujTb3odtao5kVTXnv6ximP9U",
  "key28": "2KC5C61d92cjazVNJxu96T7hZaXS4sjeQEcCJ3CqVUFutfEKwZ5fiv5XYZQssuKY2Zh2v8UftcqRVdJ3x4zZpF9E",
  "key29": "2fLxmLLHV9Y98Y7ubdyZosLPQgGSHrVkBCeDG86Z3CbMgpLDrH76roGCQTS9ZgoMg3o4UyBH5BAeMJnpzD4958v6",
  "key30": "45za77rcdihFQokacU2AnoErL3HHD5pmGK5FBqYrSrTw24NzxTM67diEFTSpMSSJaVhHDiAXgWCQBoxBcg3BeZ86",
  "key31": "2uZUQjkWYUCw2RqPhxEMWAjTkVihKXRVghFQNo1DL6V6ytEt77HoKcqazqFDi5Vx4T6UfaCnQzLzjJbGCuh4xdKH",
  "key32": "5X9nMS87hrpRueBFq9GAbz72gY2LVMmT328SQWYp4ZtQkez476MqFd6bk1VgBVKEtkkhYacCua2cb5ZzhRw25qsr",
  "key33": "4jK95GJuH4ZtWVdZCZozSH88zeDpyp6bvYSwE4NLyxACpCA8m2pU6G9cSVPhhznZyvWgSKZAPGhcA9r3aaMAgXFc",
  "key34": "3kX93tpsPsu8vQd8A3qM7eMsimaXAoqzXu3pEMwv97sQ95FkLYTFvSA5UKgLr5VuWiMSgFx3h2Dc9HVUiYNbhxRC",
  "key35": "2RQPm3zYpGftEhYUpRzZPGZwmwAyUjF8phX7yEbfGCqgKRyQzAaf4ibURJWtqpY1AmoKBSRBG6xY5EabBtvMx2D8",
  "key36": "sCPyhWqjnXpesPffAMmowBhwhNTcBSE8NxTFG8xVj4GYtdh1wWgN9uvAkFVPAzzvwH8G34Q4aFZQeeNT2jumwwy",
  "key37": "4urbRca6FDVgn8aMfN7nmgbZGa8he4ADrJMSAS1PBGKum6aTYHKxn3Jji2KLp2ukqfFVrFPNRsv8z467yVQBe6V4",
  "key38": "31udUYqpUC9gCcKb2468rBMuSXc1witg4zBLcbbD1kwkigDyuwePeZAzk14jLiERomjpB2MzWwwVGu5zxcJiKorw",
  "key39": "5hs1ERvA3CK9kPsfCw1NoX6Kv7pQ96utEntyhbKknnp1ewxWpPw93tUxuD1sGvgQQf1b7vuRKc3vB8QAGM8oEAu2",
  "key40": "5HV8g2dBmdSnQKgvnsVJ3gB88Z1RKJbCqQGMB3mMV8tRDFfhS5WS4dP44yAsVqVKgqphpucdmp8unuTkgmmgyW9X",
  "key41": "5SByKcndnECErDRYHyw4xcm9zVovfQMVUkWXHvxhAdZo5egmWCes5ep8Lh5KDaNssEv5Bcdzar2BbRGUVZixP4uA"
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
