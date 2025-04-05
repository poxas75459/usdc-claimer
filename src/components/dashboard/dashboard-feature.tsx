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
    "4krJEEMeN9RvchRdwTz2F7wasBXEk7G8URhfypJPwnhaR5unxfW7Dp16UMJUr4wosPFso8VcfKaXLDTBixQMVAfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qm4hraeswWkzssfErEhrJV2u1nNYhJTEB3CNbBGnu9zH3UWPrdxQE6dKnLognFSaLmhMhjrS81sGSXfirrBxJT2",
  "key1": "2k7Ww4M3TTNDVAwqonDLaNfwX4ghguCR3tyKWNnvUN75BNhftc7YcMftMbXJ8na11ggFAJW9pXREY2tuQbkhJ1RQ",
  "key2": "26G65JKqWJuP2UbnBHPvJQbKx2Kwyb1Vo5Mewqbtay7owqFC8iLr6iM99hi5rGMvj1pfsktjwnCMeDjzPF9SPsSQ",
  "key3": "5eUAyRzKYz37rqYYjLmWg9emeRheYRzK9tiki3scjhu7dw1acTNFja37nW2VqqAK537cSPFeXjFMhsEdYtyMM1bc",
  "key4": "2HtSjsf7bgV3igDPYWSyN5YUYNwftRRjHkYjCvvjVi3g3w6orKBc37YyHaPWiXymTrSegARjWFvARFWSVJacTdqK",
  "key5": "5e9mUgaL1a74AqcefeLJNd3n4PE28ZVjy2cXZ7t4EERHBqbmQ3nRsrj7yTnTjgHLc2gJ6pm7HWCdXDqToj8eX4EV",
  "key6": "23GCgY46X5mmfUUiS9UbtWgqBNGt1T4ij24HHkr33f7qg9V7VTg4ERPLVrCjHd6BFTa42B5LZSw4rc9Dz9GYkSf9",
  "key7": "519xykQCEeVpLBDRXLfLBtgMdci8VBwjtaeprza9eQYGcLEe26s6FwVWxRwqocHd4sa6kNKc9TqqqyBrLeCK3dZL",
  "key8": "5Fjkd3tZG3BHbkkLVJsnWrkDqnZqjDjsHoxZxgLVY7khB4HvnsMReHbS6N3Tj1FXp6VH3141KzTpiEvU7cpckw2j",
  "key9": "3PvZS6HdXrBhKyc8yAP6ftoHMmWsGFC6Y2NPc3GYaZt2m94QcsXCvXNnsi3LAFh9iwEPtpakWMvCZ79ELfRsopFK",
  "key10": "2st3GrNApEqrLfjERTXnyGVvNqBAJKCsTHa27ZjVSSEQj9DRd7T9b5cV51vsjMW3vTYTWQJTGvkcBLrsUQnjbWEh",
  "key11": "5bvXMgRw9NHV1AWL2BYbJE2iEnBRSxRAnwb94GCAkYscKEiedZEVd7ACg7vCZxyBR41N9kQ2YR4JVh6EN4sbKz74",
  "key12": "PNDpMAjn2BwSZHT6EpipDTEjcRibCGxe3HNPZBxS1jMT8RzrdspcNEdWGfhZ9oiXjcHFNvkBoVoGLbXLgihyiG7",
  "key13": "3C2vTi6Wy4uGMf389RBpLXfUEKvBmcBa6Mj4zsvJN1LmwP1yCjk4s3zzN67Rwsy8cxz8XvGMMWsNVL955D11WWKx",
  "key14": "5BroLQ4bhFoueeE4ycbzLp7XQGgBDeTdwtyoSHaPovHzmxPL9YVy87psMMPhCeSscKv1iaM7KJKjGrRUzp9qo1pV",
  "key15": "3eDpmBL2Jz7FU8p4wdVZkpzQuciXKqkh6vSJdK1stijZVsUL3JNUkLN9wqdJscGVw6mKUFHsnx7Rke5Bzzh436ck",
  "key16": "zZ8svqt8Kj8DPAyhfLy14Wt18hGWaPXjGxDFxF2SWkdbUrns7LtGSRpThptC1QhjfPYfjt5LjxPUuQngtxqptnm",
  "key17": "2yAJyMrpQecexbvbhxBA3zsauJmDFFoDcgRinvzpfXtbPYAsVNCq73c5soDgT1sYsExeCSxmJzcjEX1tGKfUVP1c",
  "key18": "5pJF6jQ8ajeJ38JWqF5C7ZXXGCquidk1EaVJLbYU9ecCPYAVhM5mvzPE3WW5rvN2pGZq11R6kabMndADJHtdDo2Y",
  "key19": "5ujUbMsHNAL2C3kTWmYYnBp1w99kh8gHfq3GuovXTCmwskk4wMNqNRpPLFJSzXYuU6zDGfjTCmkLr4cbjcyZ6dmT",
  "key20": "59qBG69fDc2Kp962dL7N15iRqj8R9eJWVkXBpxfVjqND6sUezKuWipqNVcfnezYc7GmPZg7CUxBEjiEhXCG2Cb3R",
  "key21": "YRgXz7f8YnPvc3PaSLC6vKTYGL4ch1nMnexySFceh7vQzrnno6Z5QmAaycT2o624gNiUEyV2JC8Wwz8xZWWuBKt",
  "key22": "25a3SisGzAeYwtSsQjCzQ9S3EWdA3NrufpfTgJnNhSQKkrXjwx11uZZzoYWn5Pn8JjCf3nxZPQxFERRvSGnwfxhe",
  "key23": "2Z17NTj6KN6oaxufx4KXSYmPrVKcSPXpeuZm6KqRm5xDe4eR7oDyjAkTLs6V5ryWovhnXjQHHfonVhWEGNbk9VpJ",
  "key24": "5aoF3NJyd7QSDJJQpX61MbhDGaBrM6JW5bzM8wftwc1D6f1AHPqvKawT8CvL1tc1e6QXvhhexCK4dxctQ1vfyx3b",
  "key25": "71bq1VzscEn1gN3Ko8tAVbkXJCpALmQvHwhdw5jdHYLybt1cHMcYeHPBfc8LDehH4mNdzVoFDNRCDztjyk9cL1m",
  "key26": "2HN6itHXdeVwvuCyDvDSHYUrXY2ANWMSARYCkpdLeXpvUisnqDDETn1dT6s4hKuACJp5ZA1eN9ABuDaqvvhWH1Bu",
  "key27": "9wpoUa5AGKuoELayMrGUMdnf42eXmsg3tXBKgfAZWJwBU52ajqaGva9VejEsJwn8BFNrCRj4QnZrAPrzPguPjDh",
  "key28": "3ZwGyyFAEeXY2p6CS5hS7XyPFAzTjyW5VieLoi8vgRUGhD2CkSVzNt7Bk15hQG9JuDR9gJKQiYko2jdV3i51tmvv",
  "key29": "5jFG1kLV6X1SA7ZPsNYTc8CtcUA9XYk9PKy8VwdGhMSKeGBtDt8cniprPn2YUAPNNMG5719id64gvBsnUEf9yMgs",
  "key30": "6DoUnMKt9NTPEQKm32q7aKQj18di1HWkiHxFFgcdRzikCZDJFd567XeGjxAJUHbBUzFnBDp7MRgCUHNnqwoydsW",
  "key31": "5isGBRba2gsXbLocEH5YkZvUTmMjQT7JpRiRs9i7JGfkUkh5SDKeWmJNW1SoWKtYNQbcQvr6msNZGgVHfjxqtgUJ",
  "key32": "zNWkKj2N58eAUBEP2afnz7koWPoCacFjuD8cmJEeEiyxjGpa5bfJJSfJNP9cBYUAnv7wZqCcEyvHmEVgfXnmjGR",
  "key33": "58dh8o5GE5yJqqCoTn8sjbvT3EdTaUnu5TC5FBwFgq76MzE1FjFpS59a1ARDXu9MhQLBaouJryyktNKuzHDPvMEU",
  "key34": "5oY9mrbEoGXzHWsPHiWQpSMUNUndeCgNZkuukLF2WWcc1jkSj85VBH7Vy9hWSkL5NewVgDWHhfTSorucys6JsPX9",
  "key35": "5C1mwWoy86V8SdrFcpQiu7DFMfzM1oiKFeC7rDqg9de3pB3AydfatzaCuzkYumBHu27r9RmHyP6eEhx6NYG1bzoz",
  "key36": "2M1RZiPTbDE49Yy5ggpUKDupvm75eY5eBNUEHFW5wsmb2r3WJNXLW1KBhQhGJRtJGbQjj9dmNroDWpPmFRSgNjHG",
  "key37": "5hrUc1y2MoFuCoQKxtghimc4T6KcbzX6YiJLssWxycHt5Q35tzAphWog9yA1rDzTqStyC8fm5JnNfEY7Eo4LyPoX",
  "key38": "3TmCNYB9Xi9JPeKjyWb9oMVAXyy5MT83LggpqZwh14Fwm4Yk9mavJSQc5vb4GY7Wf8dwT6D5EZvBcbB3QyT1RKtR",
  "key39": "56ZQSypVxf5ACPjGforMd8EgGu3NCEUUEvzRuXx9YikTb2FbuYtF3jV4rTS8ExNouMX48TXSsapU5aAPPFPuMaVM",
  "key40": "3AUgDezmbftqotqgazWPH9Vzb5ikNzgXBsGXU6tsL5QvoThg66dfakzoF6udcJoppnVEZXw6sVV6kZHS1Yo3BdsN",
  "key41": "5PvqD7qnEE7gSxiEWZqo1qg3wArQsEnLJBDVnBke5oEc3eUeXM8sPSLnWTTBiWBogefpysmXU2dGUthAqiM5Bsuf",
  "key42": "33VYMJdEuX3M581qxPhbURD9jRQfrterUm6P9JhdSZa3KpeqX42zXzx2PggwDim9LFk7a69K1aiqSx3gTqZQ2pim",
  "key43": "2twbjvye9Du52ZPmBjbd6yQbqpbBkyzHUXz9cyyFvJRy3rp4c6TTbmcrafAfh88UaNCQtYUw99Ano3BHgPFgUddd",
  "key44": "3HCdPgByqw5Zu9aeYtR1p7oYdMWGuFfHzLmkzJ8yYaABSSJcMbaHb86JBsactYvKYyShFWtJCHa9ULLTYdrUhgMV",
  "key45": "2cRXWqCRjRJPwQVVfctzBcqwgMpsnKRLCppSmCPGQvSoHkgdMFxmGfRqKBciW9tZmBFMZhBViSiUjjfzPCoCDLBF",
  "key46": "4XkLADCDHB9GsmFV34Yj9NTocqbG9cmYza8D5pUFii8t8iTvrZY4Da4P2eNuUWeoMLQcvaYFPwG5BacCC5nADKEx",
  "key47": "4ocKdWosu5LEK1gdYiSfQqAuC9e7Wi6CfXHk3ERsCjeQ3zoLA4A3PGVkBWup7oXm9YXJrAQaMtCLi4Ku7sKM9eEf",
  "key48": "665CCiatK4xJYMrJu39uRxV9ANVLuitDBTw8dPbkhNNht5AY5urR1qVrnGSREKvTwJJXfm3mHPa7eWU33BKjoRfX"
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
