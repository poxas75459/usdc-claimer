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
    "24JQqthkrv9d2wTrooHqiicwwuoD6gER5ov2aRoS842C8BATktLe16jWY2YJMJQufBWcdYtKfXaPmWVo8wyas8G9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iXp97gppKhV3AarMpPvm2iMJwCsvmKCGKBDv7BwyMon7y45hL4ErbY9NJnt7NtVi8aSH1FAcsx6ksRSG32Ss4L8",
  "key1": "4VXvDsBJL6SZMbFwH2AANn7M8NoyBXnw2WWaZ4rAkDGYWTDc5dnq5J5scqdPyhzs5rgAbiRM3viKsbDWHbUm53yX",
  "key2": "VF94XfAd8kdjWFLSoda4F7rySyX2iHNTogBdRjn7AxsZt7134xteWjjxqcYXxfGyTLfaAbbCQ77WG1FXh5uyEta",
  "key3": "4chVo4gnUBL36PxeqyXGYREzKZsaW9Xfhb4mDUB34y1ji8fs3LGmRmC7141mwWA4PN29SXSqZZor2F8pJQtKxT4h",
  "key4": "4TB4VCBHfqP1Nqg4ocwWPh8rhcTgwjnUmbPevbA9jWUDkWCqtuc538gnY8xW86MGTs2AHwxwRVHvTH5KuTWMpVTn",
  "key5": "4XvdnDNTxTTPELNvYKuT29BuQPhXbB6b3y7YWuAeox1QX6vMyZiqQoZAVfzD9S9ipyMXznQ1B3mVvVYsXtLnwra2",
  "key6": "23kiHaHQxGRwde24sZv2omiKVfHusBx5CeqqocDmNND1TytiyM84Nk4oqGNHcv9NAij3jLj14PaxRMfe7UdeE4wb",
  "key7": "31My5Uwn7jsaCDC7Z5Bfxx1HQLMSw2HW3f94Vik7xid2e1Dw9HF3cCHgoJ1o2epQFk7d2d88BnXV8uUGjwSsGQ3v",
  "key8": "45ZzSCcY1rU5K5oPjT84bePqmpHnZk7CVkMTxLvoiKkLJM8kP5rvNaDZfMtKjx4CD7sSZxtgAS6PmBkmDHA8GV73",
  "key9": "y5nXVpPcK7wMvhLBC7MW7MCNacTzUcZDUGyFCQ2xeGFpBTxkkCVrdphZ7Fx48Jot4rVFYsGFJLVt8veTcNUpWjx",
  "key10": "tQXYRZzc9xJgThnVvoniQLvPf8WJeQHh9woq8y9Hgw2EkNN9EFcPjfkRqUriMkjV6oGLiQrtMFRWg3HF6tDDeJv",
  "key11": "WtupPLCh5Fc7TgtFv4CFtZEK925kk23KLsckVmCrkNEvujYaqD9XCCvYWFQrrNnmxfxcsGbKuEX4psApRjwNZwL",
  "key12": "2QNm92wkN65VCbWKbbn7YKaUc1hJUP1WXXsnhzAsoHUoC8Xtrq9nV7csaRZqg5sSRTiy32x5DjXA2QrLJJF8P4r5",
  "key13": "53GiSGvwPhuUFLrbKKKQr8z3u7Eu8CN8TAQWTnHJvRS4EjkuF98vpmdBGEauJeP6KHTKcHc2YEFTHAN6o1b77AuQ",
  "key14": "qSiExw5kmBCsh552G7mbKQSxu52QgpUZqSxAjb3FmB9cZtdhro3m446BR25e3YxvdgzVXEAQxhK57k7q8niBRZ2",
  "key15": "2Ngro5XAg2fiTaqAQmnjp8BsDEt1eAEYkbW1fkRqA3vGh4CzYdQpddagbVVukZLpvd37St8R57dPHKz4LfQCP44o",
  "key16": "4V6fKo6vK4U7RKEgGx48D15tGzBgEMEudqn9ygjDpVzHHciu6TVdVqDyJnRzn8KfVb3dfHCHFX9rqekVRMFZ1BQi",
  "key17": "5MmYKR7LpGfxXAuGtyypRPgHnoyoxd4M96UhbqKtkJ9ybkihp1EYpVhMuoRMQ3ogxNvpnpiuFTRW1v3waCWEZNVA",
  "key18": "2yh31RR8qXsCVVkSubn525VSC58YDesEsEknvXj5fqysW6p31fc7GsuXmPZKhq83HHxkDs2z6mzgghMvVokUghJT",
  "key19": "sdWSBLMTr7CzEbLGskefZgQYLkcowYvjmfzXxsdkVS8G28znER2osLUnZZ6oLMKWRegzv6RVaPhFvjwoCxpeDJ3",
  "key20": "2oPkYJgZmX16mgguFVsKLXgzg1FyM1XzJ34x2JACJ5nwoRQjXpgMtiyaGEzfCKBBtDYPa1egcWa5QgoatDK1BExN",
  "key21": "59Uqw62LdQJPyTNiv4Twa19TzJQzLz6hYKRT1qmpbxaBadQkBxU94LYitMkofFEEiiDFwndUc899FfAhfMbu1Di9",
  "key22": "3G5xUCmjhSsoyLfNbaq8Zy7JW7AYsmsAyD8cJLQgcP7XAMPEMMVg5GwtYvusSPi32Fd1tjMxiQgbMhTMp72B6xs1",
  "key23": "5aaVoUPVkHkPYXCDdiQJZhaTSPCdLYZcY8xXRjhQftQ42vMZ1yvtKP7Yh5n6JRCfhxs6uUGzXP2Rx3ySzdo1L7r7",
  "key24": "2vRaL5sWq92vTAZwUFz6YUpR9yEgikRmQ4929Afp6H2TPBSnevSrEf3eYofzD58y3kanQGZkDorjEoHgBBFvY49Y",
  "key25": "5nEd7XXuC5vb8P9PVpdNVAHJKNfaBV6o2aDtURvKNe5wCYXiFoNWhqVmo6JvDCGi81JkdD2PWbG8YbfnY5L4mU3S",
  "key26": "4Tkab5U55J6AzxW4EVLG9PcETv6L4NCe2EVLEZahqhynpUsbjjUX1FLHEQ8mK4jASgYKJx9QCJ4c9xiKsLiZPPV1",
  "key27": "2d2vRG12YqBCCpLsFLawXvqRovKPvNCXUWqkfwogNXofpjHeYbHJwfJs1LPgK9pre3r1G15ZKqEjtPeN59iNVcsN",
  "key28": "5XwnCdbFKFNfNASPqV4f2hNKC7jGM4ZaGetgEuEFhBBGHVPmDShq7C6fNjaePecMgiSTGr6bPWwi5g71nuJQ6mXJ",
  "key29": "3ybCZuYB7AQQAwU3gHCozTCxZdJSsCfHyYTDnQ16exfxEPxEt8zz2pfTTMFoXgzBG3KvHp4ohyNGkHBowgXme1hj",
  "key30": "4zxxH24nTTm1dvTJqfSgA4pRJPTcH6qZhNpkRE4RsX6Ayb7FsKJPfaQrKzKKwNZmGWiCJfRB3YpUyhNwY8xtBMK5",
  "key31": "59K6sC4gt6iAhQdVafby9s2wzTTnNMwg7nscainJm2Pqbq4vqFfE3MaNsoRXJEp6GXcdtHspHGcygRERL3pAaPbq",
  "key32": "4cEuiuEZyGDQUAhxZFxbC2EWGrJuuax1QRk9nqw8sy8dR9XaswkG6D4Yn8QWzzkL7p8Ks9oGA7HwqfoGAet6nbrY",
  "key33": "2SPTDmhed6DNFh2qVd4pYsSVeQ8NkwJGMX8uHSUqo7oFHn2iicb5vUrzjkxfJKBv6or5UXs3dKatdkXqK6FifQYq",
  "key34": "4fEmhGufi8UMAJQfEWC99i78NmcWhAtAQCSQsvVi8SQRGKQPT84eAt9GSf9pE9CqzajPoPYcTrMrxokVqp6hptjk",
  "key35": "5jEWytYn8NokgEzubk6xkbQ1RMzLWs4hHN3bc78CrWTsYijkkw1Qqj3pns1oARg93qAwaKrNW1F1qCmS4aQCyBAB",
  "key36": "2Z9RxXoZKRG1eqSePuFMdzFdjoKRUjmgFduBDXxmToYSuQsjPXucV4KJnrxfYErHqWS6nveYinnmXfJqmKvobfWx",
  "key37": "axZtB7ffeToz9cYKBRoy8fjtxchx9iUooYUzEQfyrKiqPUoiRR64mois1WCfPv7ofST7sbRFEpYqpV4UNZukGBb",
  "key38": "HtQ44Guc9ZmgAshxw8i3Ki5ssDQUEiZ47t5LLtpSX3SHYhhZVQAPpVyH5HNSnB36JTFiuHhqGnQuHC2wftt8d4P",
  "key39": "4fDEdp6yzPdVEQc2crrVG5oi3P2GWganyjx642MPiwPVmaTTydG2A4n4dhzzMar7NdJ7gUUZzXWPuc9AdDYCGnqK",
  "key40": "Sd1cBPUjTzAeUDTHKojxm8AJFNj8TJZFscEnc2TCeiNkytpNNf5JBzjmiuADxyuoamGuCNji1DWXNZ1wTGs4EfM",
  "key41": "5XoZZM8vaqTULKhu2oqWcba4QddSb8s5UEvznwzDnnrJ2Z2eG79jrTjVrg12Zh2bP3DvVdBxi2SdmiXw68jebrom",
  "key42": "4jXb33vv58JGxcCgxe5t1JuJuW3kTzBaKKacYdPyXmfHGvQFZPvnzZgLBA92FJxEkp2vgxZsVxtWHtZ8iz47TNE1",
  "key43": "4KzqdaiNz2UjVzM5XZapamhjeGRw9jmwgJVCv6hPfWHX55G2TFnpXEj8sLWYrJSaAG4TdrA32ukg6WRn4Fv5YEcU",
  "key44": "2WNsbhD6w7kWkyJGevY9UzWpFpDpXZMrbngCLEesE8EhktpF4kFxXfccPK5mPxVLFmqEV5A75iosQ86Kd3pQH5es",
  "key45": "57mbgG9Eg31DHMfNtjRi5SDQmn9XoBr3eMtQXJsD5QLZVYANAuMSo5KLMsPFUzu5e1Vjhga9AzxKXgSDZMAuAu5T",
  "key46": "2MxVWpQcNnM4XZUUCzguKHT2bTfCvV7ngcUikVUcjAsjYkCpuEG9koNjcYgoTHBMpcgH9Lkjd9XA7iCnzu3TWFtV"
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
