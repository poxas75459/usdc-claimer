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
    "yXB9dWzWrqNb8qbWwhJdcWfZt4Z42Gh5ojMsxsut8E9yV2QuVxosHDBYfimGCZmhQ9Y1UYQdqXVUAvAxATA9Gdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y5MhpZiQCgKDdefHSdxSVULjEAbeo9iSDYYDyJy67NjiNDVEzioUdHgRoPX3EvkM8vbXUHqFRBpi52qMQ6WmTtM",
  "key1": "5L3rn16Yxt5pUw9VJeMj26c8VKDmfzseq8qKd2cEZGQ6NR6KJ2KL9JytLjhPh2NeWVUXzuyWYBvNbtp7vepqS6FQ",
  "key2": "4RDNLcDxb4jZsPLdqNto6Ex95jRuggsLdbWDwN84Mvr1JD4jkfLcSnu1B9ePHy9mJVgCm9NWPCT9sKAYkkPrZACa",
  "key3": "29hRBJFwxVBTrAUtj9WRBYTPZWx6cA6gZqQ1mAqqUiHDjsKq68pmwEnZxhfBd9zKxVYfMURJYQ7oN68WBRJ6Gtw1",
  "key4": "5xc1SMDHQcdPsAW5yiiPnfg7PajpWkfHEGMp2VykgCGtFyxi35QfLNjWBNvDHmdDAzLuH2tF4wvYQGU1C5eenfzL",
  "key5": "5wG5TRSRBpye49AfduqjDcN9uCFkTkRm2v6RoDakUKeqX6hEiDrxRUUDkJdBfinBGoTDCPx4AmiZj681PtTZGY7s",
  "key6": "pkAz95PZaaFej6KGSVfjdsuErqxawgoYKeSavcDvpuCniA6KvQtxa1n4QAaG4sF7LiHN1xGg7tVinTPUTMd3Luy",
  "key7": "3q1r6xwf2Hcf4uDtX2dHJnChWdC4GEUj4f3BhD7nLWUrrnJ5cirvFuB69mBVHMLj1cQoPVHVVrc7LEy6xjnsTm4y",
  "key8": "3syKdfsQWm4G2DioL5f5NGaKASapSzMmLiYPTvYar68WtGm2PAbKteBbDbWp4WdEzAWPHCzoeWfCN4ay4Uqaxii",
  "key9": "2w3hHcvkNZWQpqyaNvW8dGDj5NvNdB5n9g5sAHubLPKhwRG6CS1Vbdp8XcdzNfRQfQn4n8Co8EuJaMqwuFga8BvW",
  "key10": "2aktMdzADtCPwZhbSMd1odGfUW2XkNQiNGeeNv7NMDYNzUsEMGU1pbeQa19Kk58aPPEhb5gpLnAhqoq1ebxqoX8w",
  "key11": "55H7dQZBUDuGGs18NLJ6RPD9sTcMjXd1Q2fjgGxf2Mr1o1FkLoBiA9kMYzoXPao8miw6UjGyiXFgaUqBrueiPjqJ",
  "key12": "5cpgmyusqwhNEzLqU6fYcnNANf7Hh2c2ZJ77nANwDxXMJGzD755b183Jes9esqjbgDrafc4r9XL9uzydQyoYmMwL",
  "key13": "3GqRTtJQzw7rSvDrh7PAgUS9YNRvYY7CVNwZZ4RW6d2fTQdELNRKjLR23k9tfKVrUPzbZHYRqgFgze8e37ZPiSLm",
  "key14": "28ivUKtcyZKepDCnCxQS7RqhYyN8mHnrsn4boncFGELsXxYyETGvF3JKg61uiuxFjo5XpJHDjziKqKUC3TXLjzfu",
  "key15": "3j3AeQWVRCX8ucJq9z7PexHyvYYL8bmiobW3d8wEpj5tmGHZw2YSX47ek76cXFqnjyQ9onXhk2a5FwfjCrUWNxAL",
  "key16": "273DTLXAC9xRPPrWYyaQwm2YGB3jKaYgwV6YiBuykBP4dUVEYpub3ZnfvaEMyoX3d1sVcUW1aXDpcSvs8vvkbBGq",
  "key17": "3kUBqSe5sy6Ch2AW3ZBfw63Xa2Hpzgs19KuMweMMRXzCQJGHb1pgWVGfFQ5eirKE67hnArJkvvDY2V6rFaZBexrc",
  "key18": "3NTcFfc22FEZZtRCai6f6zZPU5uTGNmP4SPNqK9SjaNcyyu7yDRSJLbmskTZJ8Fgn8i7Y9hm48MrXi3zrj2ydsnC",
  "key19": "3d3UJEeyn2Dk27GttYFAiC1Ws5n3fQRtpNur7jsV8cRKuypHjuk4XimmtvCne96g2qGqK8TL4UyBR3wNyTCb2JdR",
  "key20": "2nmmoVoEJsJ6raGbc2TN14gA1jF1MGkhYZqq8gW8grRpWVeM8LDnUbnbYBsuSEthxJQMbYd6RBQNk7gLb7Tt3Ffb",
  "key21": "HF2Fy16wiC7Vtd3HwVGeozM7jfKxww8smQTg43KZZzGFoa2hE12e8EFAxNBidsMCtfTt5TsQhV2vvytQR2ZiGrk",
  "key22": "2s3gAHXoJtkzLLzVsUgQEQa1ULh2fSnbthb42gx7LYuNPyUzwvjb6uaAFhy1r1YhD7RyYvi942kGWuCm6BHtexi7",
  "key23": "3xXXRL5DBfvWmi5dwP9uQYYjRqXgG7pVgi7SY5ny9eMhDMnssjrxp74Mx4pNpqa8mgrDDhktwbbyZ2k6uxbMcXWw",
  "key24": "4Wv9M1SP2QmSbEtMFcXPHSXWL9bx7dLrC3HyEDpA5Z7dQcMRjcfEBngPB8avnxGaDoLGQgVeGbDkTKrFpVV3VsMJ",
  "key25": "4pv5k5nGAps2gU73SMJkSYzybmMbRgVrPCTLGW8RiWDDhJQWJWVkoYwic9QConfhCgoLXKB7ExAvLtHAfDsMiS76",
  "key26": "5xyGAiC3nziRV2sHJ64MQo51SSuCCPJV4e7K2wT72GThobqEtWg5BuTrv5j9UF9uUHXBgVtbcob1G7yurcD8WZ3N",
  "key27": "4niGRJE4GrFbCH6ZPCDRz5jmyupQtUe3NBHz9tysnanyCRGu11YKb4bQ9C9o8Jb56xsE2TzQQnZU11fQAuJPbRGr",
  "key28": "9xu4aGqvZNJjZLFt7YBTdHksuQoxxH1Sf8VeY5uy5zJrKA4T5usf6uTKG4KusomXqnRSov6J4StYTfQA4CAaszh",
  "key29": "52eKDCnn7xsHP8C6jNQ34tu7rEXuH7RAcj8hYMuUxyg4TJLjjfN8uHKBJE1mEPJ343kxUM8zkWAM7h6xmYtPLpxi",
  "key30": "5GdXrLyqPSkWiCxFP4Yube28EdNv5fg8BY91gYhu5bUrLkfY1357ed8VrZbHRmPuH4KgfZ8CCJDjDMMLK1aav68n",
  "key31": "5uDikVDZM8pSMbMtE5M4XAEpDwwHXQ6LJ59CJ6jFFzRmXreqaeMsZXtSCU7hsc34Ndb6AWg8Q2k9hrCCaus8B61A",
  "key32": "9PZo9LNvnfEy2YZJn9XaJcGSYENSkKZpSbwC3FnvZkijL1jcbAzTJ1m3TP4VvQHkDkstS7wfEGqHYYNfQdSzQWQ",
  "key33": "5Jx5wp4Ape7yfh6YboqHzCyPSk1FWX7C8EpiXVh6isR4gEuK5YXvCtDVFC6gCBCtFxG9vgdvwSkTQPG2tbDiYbaP",
  "key34": "4WStXxUpnWdCiZyjbBtJuucYHjgBVhdqZEShWuu2c3AyJD2YuBKebuuBbXePTw7M2sCiQLbS9u94PQtJcm7ptSdC",
  "key35": "3PNtoG6J7X7SpHr8ExCVTbo11QmYAF3qWH2gDZNUKGUGnCPhkHAsW8QNhcXUzQnFGpoaunj7fhocCmtYxSQBTvGM",
  "key36": "35cRhw1GE6bmhbtvxFzSpgp6jNreqXJQ3eDXsmAbuHJk9ut6A3SeSF2kK5FriH9PMzjwiUJM4ceLEg2CoiqhbQ7c",
  "key37": "2zPobP8c8ndp4kefcMBPkEm7mR9LKfxJRAokgpEj2k7CRjArFqEnUgFU8Ph3CCD1peTNr7HkmgAbNh7Ehvytif8K",
  "key38": "2aZ7zcpBkkq3Z4iXmUyW1g8yALVc7isBK5G4A858EQwmaocucbLXEBAcggXJTFkX7Sf8Ck2J4gFkLo4MLkkuXiG4",
  "key39": "4wFkkcjDFhYR3eTgY8Sxh9TMKZKfvkpFtUsUKxHUVmQibz5ARZF7tTm6PFFLeoMvgwvvx4ZM7b2izceETCcnUnXB",
  "key40": "5f2Exv9EsYufouGhoQHB4JcjuKpfd3kG2VmgYxtrjNHDKYaquusVP5d5zuSaQUcZ2fUx9YsDBAwJL8FPw1XKEwWB",
  "key41": "3JmSzyRttSVJiecwPwN3KeUP87hRCA6twiH4x6dncKvzqbxSfE6HcYXGWgd7pVEdc9D7NSGhkYk5Tikj3h4ntx6J",
  "key42": "3zz6jbtXJKyiKzazWz44r4wWeBAMjERYeGYco1yuzf1kd9cN6fhdVTixY81DBx6S17zknZge6z5b1CaWGcF7bXUt",
  "key43": "3fkczTjKXS9Wb41zZMAvdBeVEbt6w6p1zWwVx9iotQzseTURC17PWvpDbRaiNSXxwNFQGXrTdEiVHCCsUPW3KDvF",
  "key44": "fc5hRCX4gSXjdxSt6tnRLoet5BivfPFnGVJgB7RjpCQYq9b4Gy7RYjrMwDr4Rv3MSZiL4piQks6KfdYxMUb3uis",
  "key45": "5dAmCcc2YPAJ6wXAJfxXcrYPbG6pQJ6nsLdZ3nrdzjvGZuDN1iVmfdaXy7WC2KhJhKQPkR9UiskLwSepVepesQSU",
  "key46": "36iuGPcicGAP1SdpfBgZ2WJyxh8EipcGku7bwmSWWMsVttcoMCwWwYrMGffhxmTSQvPNoUDC2ZYVSYnSYNbLJ1Q5",
  "key47": "5jCCRcVuxBp95cNi5jHkKW85tftrS5VCoX7vno952LdNM25sP9zo9anpYLQjLzsHDSuEqbSD9pom1thbtRGVDb5p",
  "key48": "59YUbVKtHHWzGGUyshRqpgjSzcvd5HYqUm6uBNcAbpPYD5MJkEFS1WPakySjTG9grWbbwEumARfbYdJn7VDtUEEM",
  "key49": "2pRykhKFKQ8m29fAWREJbV3eYwBtZ8Yc4yX85MkMFfEqpzJUc3ZwzmU81oWTRigRGR2gpGrTTa2hkvkY5NifkbG5"
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
