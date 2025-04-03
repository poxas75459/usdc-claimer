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
    "5sa5JDRwnMuASrWQ3FjhbAmAgjsNavcyrikZDUyoJdt28Xj4aSvPCATayh4fT2m9GCbttqmKy2BCDEjsy7xSQ4BM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eYtcmNmbcB4zfftScsmK3Z56oXWxe29zE7vr3RE3dVB8UyZU8r3mbk8HLY5dHDdQGGhfM6CBdoGev3JFgcJrb64",
  "key1": "uzfcpPMHDVbxMTL5nqgcKyywzZvGb1QNMvwm9EpfwApYrmSNFWamWrTtsAc1UqkJpTR44ruW4FAKtGy8WFxWiqD",
  "key2": "5JiWKDtuqaLNHTybnkLkdN4cNThn6Hg9S4MA2v5weQG8oonGTnrMEMM27FaWTQGVNMZ5e4G89F2Fe3JUNcmeathn",
  "key3": "2JSeGYorUAzjmWY8aSs2sp78ib8MJtdT9ZSkWpnhDXVFJ78fECRBmvwLKXoY6rT8VYfK5tqXL6z9kKKxgViG5qLF",
  "key4": "8gQhgtLLbX4CpPderPe8U9F57di8yo3SuVaC25139guzz56mgn12LDT4NBZqu5gmReHvzCvEjtn2ys5umZALepZ",
  "key5": "34EgSVGqVqjAzrfu3HvzUnxZ5Fu7ZB7kqqzwqZJ5NzwSogq6Xo8n1LfeuWdo3zciRbDmGLGsnaxuWRcNfeei4CHE",
  "key6": "2HSsF5nvQ1GqmXB8NQbbZHom2iSKTA39YqM4aB6x3yeA2eENX79mGM4b4z7Zwsr9CtjbSbyuk61V5jcHKjQQmKuW",
  "key7": "4GU2YhDRKHfbbeDuq5G4zfVVdUJaWG5UjNwVq12LWERnaEAKNCGm3Hqsov6PYGfEuUTUfDyFF87kSEL9s8MmWe9m",
  "key8": "3CPFCagvSwBFjC82LXepCCBRxhwCeURsUN4SSe5QEWtYTVsd5akNbV6zyqt8qq11uDuoD1LdS4Wzue6yjVJ1yr3c",
  "key9": "SCLx3gdVZYdaxdBQwa5XXwFuWeyBFDTEKfvfRVXK8P3Di8YNKZYsm2FyZ8cfDL17yTjeFWJ5xWDKCpWBpVsgtPW",
  "key10": "2TxLd54N7XVzzr4TkD5YG6P1S6yV86aA5hWsd7TAXLii4TDeuPubaYtSfHWfgvM5KhZXdMMMMrwqiJWGUqcvQSEs",
  "key11": "67qvtiqpxKqwFFKW3uDreJUoEQyCnTfNySEoEBpjNKPQ2heFD5bfd3KHpgj673vh34hmWU3v6LkiGdybS94PjgLa",
  "key12": "3qop1eKHCyid7Q1pdmaJifTWrcTAJhSY7ytkqxw2aeJEAxirtNgtSSt6QVJscUjAGDVS8ruo8AMLx7BAVckUb1cJ",
  "key13": "3k8WY49DYWQM6GazrMAzHLTpLeZiEk9y6UDwuqZavnnn3sXcT2VUTMoReEMD1T9pFwVYPWBF2uojT5bqDbMRGrT5",
  "key14": "3v5CawQ7rDiEu3Kh6pEgh9kKzqtS6YYqqPM9gf3ViWN5EVwVx9zeDzUWvcWQpcbb1vg9FHNb9HGG8nQhomV49yqM",
  "key15": "2FXb5Hb9UeSWdGQLRmc9LSHE3MMUfw4XESXek9xG1MTEFREmHdBkfxCcCyaJWDJab9KAqDXqWFuZJdrf27keJaka",
  "key16": "5xT4TFL4DeBUAR6mqfKRqqc4x2ENU7tj3kG2gX8qkenvmNr9wQzsTQQ9LdYcKUoPzQcBga6oozQbUZck7sZbRnMw",
  "key17": "3rTSSQdvdGkS235P9aD2dczphKCqmX3gKjt7m3PMm8Fmowj2KcSEjmux28pGoxS9qtXyUGha5Ah1ViZJH2HbsBBh",
  "key18": "2YEQpSvF59oH7w6GV2maLg4VCSxHAhF6pHqutzmnDk1WgjmidiAUCR2gKSiYDkJ7mqdzNTHfVwufNxkAJHLzxbvc",
  "key19": "25NVY9RwsDc5EzzznACBPSVgPB4ATV4BRwKuZaX8yCQfzbkuzrL68a4rfaoR5kwzQR6UeFnDF3J557smYYwRF4XM",
  "key20": "4Qad6r1Wbr67Lv8jLNpxCPBgfcSjzGoJiBcK1VeS1bQECcwz2G56v1EE8n4Bya5gfTiiPuom5ugrtZ2BDvQTpsDm",
  "key21": "4gpqsodxmQUyVpFtukpFBhBbRn1B1PptzrRCjEk68P3zNiEDbjXKndnwnvd7HBuSu3E1bc7jg1pX5Tv7APVeEtgm",
  "key22": "2u7VifLWPtDBNMg6Ld3xPs4ggPMZ8RzQWos56RJopayrQUowdRKt4Wn8dvNKYhtZy6K8R8antM1aGJQQzsnsqyr8",
  "key23": "4pGRuoWsN6XTo1txG7CZtd2Cm1bMUSVDxQuRWacsFziQ8XZnzsm44vfsQozbGstPMndYUoJmv7F853rW9cJ2p4RH",
  "key24": "5imNZ4BnFaW6aosjVSnt8bCjdXEHNb75vX4B4uMzLseAzsEsFBZASgq1EnfvK8YMf1WruVGJKzTjVg49iYycwCVX",
  "key25": "4Lhopr1ssPwH7UkEKiyHUseF94deRPUA9joVVKquP5A2df8axTqjpwmiN2cULGv1LJrH2BbeEDzGemdhrHBTjANU",
  "key26": "5xtgLaJroVJRER6dyBo2gwUyhq7eJSvupbkRRp5qSa3EPzUuV3Kes79daiCWzukc9WAzpkG1vsr5HCcDEcAmQmMo",
  "key27": "5omAKjS6ABv4VTecQnMbq6jWErgtcoeBNST2NBZAkQecHZgkv4YsZnTYG8B8kG6gm6i8LqgcVL4GZLgFhpebWiNj",
  "key28": "3NwiEHGZ85Hzj1UgrDdS1gPBHBHYhLM1uyuN4HPwgvwGbBFxZLU6n2imQs93LMCpWgeLSR6jpPQbngHAHmqjazKn",
  "key29": "29remaGZYGisA4xmVs2g9uFbhdZu5HJLuyPK1jAtFbgsaeKfQKTmdWxYzLejsFhHPyanX6vjoq5Z2xXVBeDzzuDp",
  "key30": "3AwF3Tj8QF2p1ALzEt4VLq6tHF3SiNWPhXKPEzQ53vWaGDkKqs8C6aTfXgW7t9ALpgrW2j5ajau1c71xCMMp648h",
  "key31": "4LTdvteTDdWzLfTLmk6ZubeiXm3Jt4NxH7fi3Gaqn8AZ4WT23QF3766GVT1jScz1bSgNnKiDP5oXPi6zuZtHvdAf",
  "key32": "tWQ1QagxHm5HjTzxQ3sbeykp7Tq8QoESFjW7fimFhTdpvfxJxnKn58j8vaR1MD8Ut15DvsLt1BCcyE5wJGqFhCw",
  "key33": "3N4jSVrCmiyMGbxoHMhycEZg6ZLtamKwNhDgaUaEaGZphD8S7PzfxxLkAkxeBkTQe1b6R5pHGughhDLwc4Rdbf2G",
  "key34": "g19gnicijS3A2gXAfwstKAMsezZ9W9qa4wrPzVpFZDCdEC74PRbhHLoZMANHiMvQ9VBP7RsSm9oyifezTet8jg3",
  "key35": "4293fxdRegxc9oXkBJ62ftNLDBvhJDjYUDup14xB64VJydhapHUhDkQuZf5m82rQaqC9YWK8m93w2rNUkchGAB45",
  "key36": "4SpMc8W1Qd3fqqihQ9qDdFRysCJPqAb9rbc3WuSNpvMf3a7CmeSgw8PXdjgbjRzwkn5XJLh7hBYyNocHFy25cYLr",
  "key37": "4MMzoZJw1rguxwFPo77iKCJJDA2LznYooMdE5uLNd9YAP3smvWhVmnsHtc3bQRvppifZB9Q7n2bNinVM1FGiduWa",
  "key38": "5MTL8Zes9a8wu9ccKFf48mMCdUZ3cZGfbaq61t3jsHt5idLzM3XZz9os8f7uEnoK61LQ1otpxPsKMtcxeaX4zBn4",
  "key39": "2fWoT87nSw19Wrok51chhmXj2sg1Ex4tnEAidjzoNZ3Nf4XLtbUjA6MSWUY5LsXh8GPKDbfaKtWNTjTigfXLRgJJ",
  "key40": "2ZTKLkkqUkogJuCuPDr4dqTHXLNrUprqGbL7u4pkqT4tkEiwvkS9s8U4kbkzwo8oVi7XPGNhhCiWCcZrmtuav2h1",
  "key41": "3Uxv9EXVDxtPehZGNCA9Dto1qqLSpXTZL6oFxBDP7z5rxNV9DBKAqbhga7GEDJK7iiT13EeVZfvpMrNGq7FLzs4K",
  "key42": "3HfU6GFhRsgZKraHNTWdFkDMjZBmRgRauXT15yfGynD9SMPJPjg2rGNP1cv59RSxbDkTUJUJYZvzq1FYEL9MypjL",
  "key43": "5TmKbnH3VyyptRgG5QGcurjPa9pfJcycHEGPWTv49X5H9Tbg1iY78ej4vdveJjsxRSLm2Xd2CcH76dbLo6kyguzV",
  "key44": "4msAabdBWKqGCzhErJ7hJtZhqwAv6ZgSxGkXqZKtrFnmzCgi7gvsGo4XBbZ4fhvo9FbehZQWURKhbWsqwX84u4dd"
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
