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
    "P4dJD5RusCYxPHEDEPkAcacQuiknNTfFCiKr5vsPhXrhhDQmtuRKe7FtXaGkWzY4NBxqdjBucD5DxpC83R5NKer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xYmS9F3LtzmTvvTh15Mwst9ZEzm7ahSBiv2EsNR1WmZNSGxo1sTLE6j3nmkvYkfY4xagBU3kzkNNbxkg9a3vvUr",
  "key1": "SckMMWPa4yyU7khxQd2RzW8e4bFQQwPgoXTrDJPsQN2uXYx6eWV1n3GRtQDborB7egMxZzQvQvSGyqbqN93W2FP",
  "key2": "NMZUJLYegzcCF6NDscoSFhARe8QtPmbvbcVbeELaWCvcBfGerkJdiffe1P6CvUCXFChMtpAEaK2oEJ3Kubaeg8N",
  "key3": "3mabmbSdV3BKRxz4jBCMfGhepzR2TUBq7pT8VLuacESohqrCyN14bjj4pk1yvzo7obnwSweNaC25V817n9eUxWh9",
  "key4": "2RtWePJJsfSrG5hxN3yt1yJsTcZC8cNBfy2nP42LUBpFvqShY12nCZ5mgyJCCmDfzwZPesL3W6KdbXn7MaCuEDRX",
  "key5": "3PePp5koYkfW1mdtfvmo4HtPC2fEXtc5UfxKMujuxqCQTGPffreYBpmHFo5vn8JkPLELG1jT3mxmRjVdQraq2gim",
  "key6": "4KsaMuq3KJDbiQS8vLdQQWdKhf4ZxvEmhA2erRT7Ytw9gkv6nzHw9C3RXty77XHSGZGhg5BP3waLVjypZYbiyoTL",
  "key7": "53U9nEZgdk38kEjnMTsaUWGY7Q3sL1121QTvjfUxWsPjhBpqDPReVBjTwpUeFeajxy4VZ32pwN5T7GtA4Lf3Zxpd",
  "key8": "4oHBRat2UXXH6m7iGVsB1kVTkB2o6ZxznGiMYv1SCUgVLvY2MTG4jCJVRNGDa91uUSCVrNhfNyWKe7HT8tfJ6s1m",
  "key9": "5KMxWwz7LuCHRP7si6SZ6Hr1234FMoA9VU42AYPBQzwYZAYKae22SzRaSKT1h6syw6ChsWsbf7JcFByCWhyvn3E4",
  "key10": "3wjQyLwwF1oTPKmbzmPdWAbZdb9ceorN43eAKoWJkNgpj6MHXnVRVyUwUX3aBsAaa22Cck4BYMZfQymGii75fG8j",
  "key11": "4t4xPnEm2hTPcgcMUuBpUrmqzShr3ARcnKKoWtTLoZP91Y8TLDyTXZhWbve8YgP54poVSHzKzN8U5Ttc6nsnkBEn",
  "key12": "59WZRb48kjUzswkq12Z2rBCKQqVQyesiCeswfb33pYVXasHB7Se45LsQ9wJkYg7uWuGtvukRVstAWhCDjpEJaPt7",
  "key13": "5gph5qykCVQb16JzAbtLVHXFe1SR9dze33oh5PdZeMLbqRPwnzJomDs3Qts1KMyQaLMQbypYvVMvgqtVXpfUCHiw",
  "key14": "4VqTmAiTgKADkoZm1ry5kY4VewtaMJrhv9rhVKN5KaJLX5JxA5GqcmCFqQpYgArFJNbviuy2DupmsYFzVBJvKYUX",
  "key15": "5EC7CW4v7E5U1oA6QSGnC5qPe9wjPrBDouwbFdQZyWBxuKUBRCNqXUpckdmWBVYGWeWwrSu1h5jJEabBanGX9JCs",
  "key16": "4cRirgQn1GnjKpuGpoGBJWGGNtFmcQHkcQ1XTYRJRU4KWBhxSGJy12UnvuwntReLT1i3mFsNTTfmN6VQ7m2cgDYF",
  "key17": "2Di3z89uZo2YPvFW9GdSZreSGkiawdXWwinLcoSEWTLwiTjf8AiYoS1gQqCfutmLeSAoskSUhMpLoAzx7tnWHyUM",
  "key18": "2J9zrfJFzJwSAsuMK7CH7JjNyr74qCrCBhEJZdwWtQR6k2ZY4p1b2viYrtKmzUxEJvJbBvT4Eoas6dqfVqbae1JE",
  "key19": "3bP5pYT39vgs49sdzWZzchcCjkKoe5gSwZwUFEyCCqz6TdmQPnQfo573ZsNWc4Aqe6zQyqC7mqGErch7h3y349EN",
  "key20": "2wDovxwK3vGT5mkiB7JGA2EgjwvYMdjSmSStLE9kNtLYNbenfmDj7Whqu8QzteCNarQ3jJSUhZ5BamF8tWVyPvzC",
  "key21": "53AwSGTCRvZUfLa7DxTNQzdghFUPuYwE7txt8N7yWT7KSVJPQJh5yNZVs2s8y14ZcEbHx6nyzQi5Uc9P8AcDo44C",
  "key22": "51yMX7cD9PQgFSvF7oGNsRAnhnrGbxmBT1G81hUMHVC7esNGcfJsPjKZXhTUe3fv1dMmp89r9zkKZcaNXBqZdMeV",
  "key23": "2hDauk3ZnkuUqkuQSbdPchUypW9xyESw22qLQwCPFCvLiEfdVjM1Kie4c8d5HWhqAtVKKoNABu9Kze3AhEFUo7xo",
  "key24": "3P2Ap69ebpHVa13AwG8rTS9rtc35TG3MufTvLtgkfAvUN8ymxMAskP6jgdNyM9ZBPNf6whUgxLQ6f31YZ2PzqWVT",
  "key25": "4jHzvnt5hwctetr7dC1y1r5RAqgYzTkjjf1WxkMhTef5AEXsy3D9qeT3jvw9B7c35dusbDQzdLbX8y2m6gsAKvZw",
  "key26": "mqAqCGHU4UzJ6g86vZ7oET9xypxopmfmkeUFCdBZgrVbZUsyZwWnGGHQiJGT7svAbUkBdvHbctywUH9qBgoCk8x",
  "key27": "3AyxXbTRgiH1SxYjH6BXGRazxYXsNUKaL9bKxhHLaSSNmyjUvdrnc9RJ6KL32JAc7VW2GLAJ95i4i2MtmgLL5zgU",
  "key28": "4PJjGShQhg45CjsdBy3nB124Jr6jYibHXbrTk63eQdHYtfoCpUUGizGXvXLqxcRcE9p5Fecat8onazedwBDsewCN",
  "key29": "4KFX5L7Ao7Sh71oJBMq831FSRFhv9zDyKeXGSTcuZz2KCwgJg8e25nnhp68VTmgE7XXVPduQgr1x4p6wBFvUaSQ5",
  "key30": "45WPwQmh2yBKpaghdiUrhM2vjTvAX14sruwi65Tyyh17jKHEFEEKp8VqAfcjwYTs5cKSmskn8Ra4gHmUiWMT3rC",
  "key31": "2tyGBuGpoH25oocPo74DQNGRzxQUPaASwshheV3cbb2C7759mRXGeQQ7GTXvoKuKebS2eAaLnPnAhqdgYXJAdPpm",
  "key32": "53t1shUzbGw6PBvfccok9zWDfd4WLYV1BXeCSniarQYNGorSAX4MDToAj77p9A2qQw36MnxHCKzdiBMiLot72Bnp",
  "key33": "5xHRjd5pFVNkTTr4QbxJ8cnhfaioxLQ9Uanp4b691Hfju9C9nob6VF9hDW7ci7ft4vp3G1dqvnT7S7R9oakd2PZ7",
  "key34": "dVEZs9igoPq6PjzQ98w1coPSaWP2pHfdua2X2az6ef78WcNBfwFUEnqTN8JRGMm56uXhwaiyw3SCduf9AZ4m1KD",
  "key35": "5Mh8id2Jvsax2tmZAK9JMLF8wu5KhnWg15qpbydBRJVok2YzEYfUZivor831HwRwXVuPXJTfTUg3bqxM9w9jXMMw",
  "key36": "R1pxBrSfTTXnVp8GHkzk65v5q3ARBEJfckgFV1QjvnSvAkVbFg5JyWqHp9aKHgcsYSm6qfgR5Z4nkDziry3tgcJ",
  "key37": "5Q7mkPPrA5Tzj5V6VS5XbfS1bSs4vRvgqZFZh33PTteBKEpY3CDVn4W4yqngAgmkxX6DPfSPvjHVgSnKgkvdoXRJ",
  "key38": "5dbDAdSkkyQSTmTSGm3ExFHwieyLqBPeAEGGAUNJf2ZqQQwYFtZX8zFoSzLUbwN2QV6ZJD6mKz1bQNgGuxUgQE9z",
  "key39": "4C3NpHSKCKHCgerJHc5DsLPx4kuCEbLWXNJrsscbbeCcC2jg3eWVqos1Q2veCY1otjZ8HRjor6Xg5VvU7cboxchm",
  "key40": "3GUcKD9Lhdd39dM9tMgZNXgE73qDr5zJL5w4mJiB9TbGxRXp2qw5BQ716FUGvDtB2PfFCRZR872veVMR1svEy72f",
  "key41": "5oHsGmWKktSuCyKKLyUbKPfRtz7JMpJdvt8iAxxVLiaeFQzUVJcUpAvdW7xBF9DTQf7HwRWd3S7bVZCa9vzPfsT3",
  "key42": "4MH6MJJMDMALUVu8EErckqRtDwYLC6PjhYhQEQo7NG1X9s4md5WyEQNQj7PHNRxBJb8qi5HjgxsEpj1nxJXpfvxQ",
  "key43": "3rYBvwb4iayR1YhtVdR7r8omCTesuJ7knqTBxpwauKaz5t1rQXKsARV3hHojRSmsXUgAjXzv5mbY4Rxcy2H1mUFR",
  "key44": "3NQkwsADUAJi6uG62mHA2jMvxhjZ1J9r9hKYwKKihFJgnJXAHFHXeeY6hYw4kyMWyx53tEwgaaEC16UsN6PN4aAS",
  "key45": "2crkTFVmnmQtNKuuQ5WNCptqKHg5Ldusy8F7pK2HddPf3CwPmxfiQ9V2JBt5id8Q45wFQ4a9gNjZGTrHTkNZB3Lf",
  "key46": "34KdCaWmfqHvUk78VK3sasrmqv48pUfyaemucwBe4hjEqcCNNR4Wi64sWiy5cmgvtFYUt8nTNpKJrwjyLb6AJnEM",
  "key47": "2i5Y8xGWwNGaLqWPfKZ1Qmh5FW1thDmpPbhQGuGFrBS2X2Qn9yNspNKq1TNNvsmBehWPwHW8HWfQXfkCpFXHpgPp",
  "key48": "21YD2jJ1n6ph5xGMg5ruCros9WbLzwmwg6Y8JJWNYkZ1YxJHrAMwSAEHy6tnMd1UjG6GTJGDWM49JeWuNc6zV26W"
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
