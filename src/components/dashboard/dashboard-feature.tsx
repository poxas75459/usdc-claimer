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
    "2JoMkmTgKWFGGnpLf1njnDUppcrrb9ZRqo36iTKVVDms2xCNcVqCGn9tsRw6J8mM6tWs4RKeArF83UoJ92kyco2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V1wCv9rCPtSzu861GjWqr2Ce5joRAXenzNTq637sBd2iu2bc9Uk5fG3r1q2HpNgJSpjGFyirekPrLivMG1LjMod",
  "key1": "4gifBaxKpPEUoyeBKC7SahmMYkLCuWYXbBdvkzPMeSsEYzuar6h5LzWrJANt5PsCRJGQmTVVom84z66FX5jCHpUt",
  "key2": "zzpfCo21r9yKg5LuC622cGYnZZuMcPDZWw6Usfj5JNv1cKD8GLLrcHveJLfKW1B2R4WC4Fxd581TKiMtPWEubg5",
  "key3": "4PAv6r1M75Yvi6xFKdX42DRAK99mXMd83FcjyjTRvWLVgY7zP1JPXW54chN2U5ofx9ZW4EWdk868NFu1YUkw5iib",
  "key4": "3cZSbxBR4phQdiSv5QdEWcYTzzNg8K4EiCoAksdwbSpZc1LfyLfyyFF33P97YbzCdvWEKzYDNB8inYZA19b8cYPs",
  "key5": "3ytiRUqZ7R5ZTPvYMhChVVF89PYrv2CNHZQLdyzNZtyY57kKZfxpTkeogN8uFeYzUAPmWoQoVHzJcM2uKu2q72vo",
  "key6": "2M3irryshrZSXwmLhjkVnitfsBRZCLgBRrJbB1TGwTNVghqKSjTmsoZCjMz3wwLbn2BHiHa2UBzNaWNUb1xuPtTi",
  "key7": "4R5B39GNhtQ39bkYRimqCunprTgXJsM8fVLxg2QtL3jh7htFQb47GcDhsfuPf19jwLZ8ZibFrTwJwfhZWif3xgCi",
  "key8": "5u9Au5mbEXGu7vmyKBpMAXMsfpUbTmHtVG1M8giHuR9FKZPryfvUKAS6ZdRpWCmGLGwz4ZEuWDaGoQWZveqt1vMH",
  "key9": "JLHUui8wXSmYXYXoBtY9ApvuyVJm8NjWXc6ARCUhZzxEvg48CHwSYTFG8qAgq8MCsckUnnDpL98wi5StaavVTbX",
  "key10": "2eAYoAkwxzZzxghnJMqRwb1nZ3jEnq5dG2jJ62p2YdwGBFyTYrbWaaiMayf1CXELeEPzpBezS7n7RGGnpFHe7p15",
  "key11": "2cf5P8UH1b5pL4SW8Sdv21Rt8M5cMybe8mweytUC3Phay3GdoyUBmNrcimsXM8HmARNZxL1GsErVHv8HdidYMr4U",
  "key12": "2sKffBgZsxWwHuai4wBEEfDr6bmpEZHmLKUxb5jVEmd8SVBhy7RYwPjoeZco4BuSoMZzi3zeXFPnTUrSCjAYY1rK",
  "key13": "62EU3mLyuw9FBUDpHUhxjDHUSjXeW4pLRFaHbieVxYsgbrKHaT5TcXuGbAmhrKSzGGbohzmmpW2wJ6tw9bT3XqrU",
  "key14": "44FFRE9xRGK4hEch3nPkAWJAPBj8n9MQmhjgn4mLGpCtwRdqM4GQ2WKGtBKhnRtEaBQi8BjdndD1euLzq6AwXXB2",
  "key15": "3QjRmkU6nYpT32LMsBKgacT5asTNaLUYDcBodCZHztJSiYfQkiHq3TtJQGrE4FBZK3g98yfTLGoj5EQK8xsm7Asj",
  "key16": "2tUavH4bKBvyTXRLorv11PCohbCDMMrNvzuh41EDFDkKv2RiDrmWwUhLuH4xBMYkPEPzyf5dYsXD2Ya6CkJVVzAD",
  "key17": "mn4GDVAaP3tvc1EGX5o26rkhhaDRhMUWBD9SfWWVQF8ihCPLnHZEW4uiewWsGPSpZVjjeHyiWwc92RPyrEC2jW4",
  "key18": "67ExGByeJCzcRhnDkQZt84kuBjzyAwXJWrFcgGM83JrhroDYewNZtEwAHjyUVbpuBCb2cGt7nCqSAsAjnwMeT94u",
  "key19": "63CS8XmGb3zkc3AQq67q92jxMBPuEuDaK41Rcas3cwnMnuyrGriQf3KDQLXMXyWKa1zHfw3HapA6YwRgR9Tob3av",
  "key20": "1DfWFeFodZnxhgCMETX9kNi4CRxqPBNFGnR18J9k8vSPWUrFRnqbMmAS2cSL3CiAGjpkvjV6QgKNrokA5neqcFg",
  "key21": "4BLRgT4xJd9J1hnG6dzE96wPgw5RoNyJCSdoJcJFn1cGDTZvphfJAAzRiF2x2gHFyKZ4rJjCKLjCxTtyKwBcWEzy",
  "key22": "55sRFqAAasbwJiwKqZfAXWZtxu4szxeG4KZutkwxSdsGRJktZAcnDTiycq9eP6zBPP1EiR5j4XCLWBcKG4JrwQSU",
  "key23": "2QHiF2Z7EHuauZjteqVgsY2bwrbKNrubHNu1GiN9SmtLwXygYSRgHjL4CjjYsDGfqY5AMgRA6yxAKTunzutySzek",
  "key24": "61Jns2MninYnRuZW98pmpGuTPvb85dwxLiZAQAM3UCAs85RFvtzvchHQzarReHe5C6ZBMLaLTaAPk8WfqSa1TVUT",
  "key25": "4zitZyLCfwS1cQqWnb1pNyoUnjhYB2CPneM9pGC748HeU3kygncitze5WKGksFkPccUGiwaxiJmDuuytHSm8bH48",
  "key26": "2mBVFtv38tVbW8Yzb4fZzPujaodpMtFeTttgTjDC3d3ErJ6bWWyZ6jyswUYtgioTJ31rPQtD8LxMZQ4vew2cBdjJ",
  "key27": "3qWHUWDMYApg69bhDhi6JVj3Vm3ehU67Kz52yxJ6NVHivwSPXn9et9T5mXG3pSszJCnqMyh3LnZXcwkbZBuwsixY",
  "key28": "UxJi1r5mtV3x31KwfLsr39hGDzrUDi724H9M1XraDD9iQ2u4ES2aVe3fnRkRGDupZxoUxbwEC4Qn6ru178ARJDZ",
  "key29": "5gMef82Wr7AReqzu5MSaHtcG3YX4tgv2468gDkiWAwAeN9yCmexTkq1b6p6y4pvfJqPn4gQCR1oh9wixUXTZb1Rk",
  "key30": "2aHPiMLoSQVZSc1u94ZTv33FxwtHMruJumctph1J52yENjn1Ff5a64aQskJVorStP3zDE6KNTq2ee77vTPkFNbrC",
  "key31": "5Dw2QXi3j5i14db1p46gyyeLEntqPbXuaLaW7rphaE7HbwzwgXVQYyEGxtQT4nr3bDHaRmzbfr5vzkHr8QPCKRuQ",
  "key32": "i46mdPANGtMXqc1rBX2hitFFiFzSNWnbJPjnxiy1oxgFhxzCcmj99n34zEAtiJA66ioQqXwuN3VCy4kocWKEPrV",
  "key33": "5K76e5ouKjJHEu6SvKiDEWjUPvoD1FTwoh7akYUrzVJ7LXvBFGSEqshnzVJTRUGNLmU1e7ZDmRJFy7GdeeC8PpBQ",
  "key34": "7dnyjdtpMZ5vnaQN2iHsQq8vGSWg5Xi3nxyvLXJBv85r6zEgBnMSbBXnfCTNyuYWbvmvcMEZuHFmyGyCuWTygCS",
  "key35": "Ry9y7YW93pzeqgG9HxmoGBmvyYWqkfMbhg8jHWS86Y2Z5Xd6mGdboN5YkwyWvwpmUq1zAssu7YV3ZwHoPNKDrpg",
  "key36": "2KPjBZawGCNP8B9YZ8TF8iHKJYEt2CvfyNN4XZxe8Ndg7KY4p14tXTK9h1ERZ6TcyzkhzjnpHrkBYWx13mhWWJoN",
  "key37": "3imvZ2pBFPsBoVo2vJhsfdKjgizUk1CKZiX2Fzj4Pb2XZW8LHMK7t5gDCtL5BdnrZkKJL78mvLpGDHV1pkm9ANAD",
  "key38": "2DrC77W9o8BiytedyKEMgCqKi6Csq6e9BQj3KZb1W8RJABAYNwxK4NRj6Bnpn5VmdEgipSLFtUfivNoQrm71xAX4",
  "key39": "kaUKZLAyqX5rhqKy6kw4F6LocmsTaB7yyBxtLZKcqYfU4mVajAFp3TFJHHbU6eNyQnmKjjbXmXDA7wsfeymVtEw",
  "key40": "5Xkvtcm9anYcPNxu66EUfJ6NLdhjaKD849qdj1sfKLhyTDzGP1WsoXUCr7du7ZrXTRuD3awAcjxVnKL3rbNtQ8V4",
  "key41": "4jcCvCW5JfsxpyaKLFynv8d11dUn1Hnus97y5u3u8RV2guKpyaxRL13Fu5mmEyPkFTP7jDR45S7iSUEZ4o3DCq8d",
  "key42": "Enas3uCnuDUsznag52143VL2D5MVZUSobh11mjshaQT75FL2BpNEjghri6fDiHCRq57AoE3WoYyymmqi55KxFm7",
  "key43": "gemjjQ9Kq6K7sdBtLt9Ku9TmAPohY91A9ZbhmhVmUWE1iffKPH5D1RWwURmkbfh2ZmHJng8ABi8haQvg7x2Tp4b",
  "key44": "5QkqF7J165kWjVWK6dZr4DyPD7GYtrhKeYBf6sjmo3WEuthzDME5SAMPomYhmPDcxBd7rvn3KsP7mwPdbuMWvCkF",
  "key45": "3Q7MqZDnVTwcHURh23hyYDGcjyswsSmsnsgSL8ZHMnFjfjUTzMJ5wunrgLf51gXSVPAkYGKWXxLZmDfEskuebqGL",
  "key46": "TfqF9XWYwbGo87wdQH58uDGE3133mYQ1MfBxQTvwpsrax2U9ByBw4mUtKVequLifW5W2WUtSUBduysqKfpzKCFK"
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
