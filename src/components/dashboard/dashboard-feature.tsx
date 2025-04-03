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
    "Rh6nqZKj6r9NzXo5GjegU2jKVMYskfasE6BpuAE1K6JqJ6zm2b3pVzawEdf9vD3aRX7wUjfLWxsF5PuXmzWWsgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NryGn5LHPeFSGw2DgiixdAMcGP5sUVebB8ZffqFxUTi36oPTTTNHqyeBD7jxwe1MqukzKsZNf9LRRCRLe5BWcTR",
  "key1": "5A4BLCX8XCHX3AQVpYpvrNDzmzY9tTrxKdXxk5C7MiJRXf5J5WsXuj5ZxiNyvhfRaY7PV9LFXwK6FHReGhDrCNxv",
  "key2": "BMXfmRxvNG8A2hMqPWzF26WFQHzdo2s55uXBiWJESLqu62EPoequfekNVbKAKTrrqAicBUGJTsya2QNWhEgXDp3",
  "key3": "mowrKV2LATbz4wTHFknoZYE6J1UBE6ToJwGJQa5UpfP1JqKTmQqx8Qoxq7Cq3NZrW4vCqA9JAfRst8SXRDL25PE",
  "key4": "3xcDuBJdDQHqPJcDHfvL2h9qYD8E7cGqyMAwLNRN9sgdKs9Wfzbuinx5fTRUmwhEHq1qgHKNWvgkm9wuumyVRSTE",
  "key5": "5wdfu7PwctXsgwUAM8s7RNxiSFfYEGUvBLF9bPATh2R53UR4YfbF5mj9bZkzbJNaGFMX7PMTdaHHFY2a3EW4QuwW",
  "key6": "3PLjuRmBK3Wpk5oBVtw2c27DJJoaqaxn8BYsF9ajXz3Ru7QwtARD4rHKx4nim5ihApc1oea4WCvFAKdK2bLBg9pS",
  "key7": "2es9DRvPhRr1SMedQ93xkjzCBG33uXuNTGZF5qfGMpsdxetXUJcmHxNKJuns7YrTum4kZpSpfa2tGW74ctEmQjnS",
  "key8": "5sEHvZzRdpfhiJokaoRP2FiMbcoFaugUzsreAy6BjdmQ1wUjs4X7KKFR3MoAG4rjRzmqosYJp2WUkV9aZicd2PqQ",
  "key9": "UBgXsnCjfCF9Qn4taDWGudAp17YTXaku5189zEBUQ7oNcKahpKUCX2KLN9ZytW9A8g9iCngZBtCSZJrfj4XNn42",
  "key10": "27KACUFWoQnVmATRVwtSCaweZV5EoYSsE6edKK3aGVhpAq47bFwxoiVJR95D5oD88KfjWu6mniEcDDnp4yd5StXs",
  "key11": "GBnrGQ7sJTC87uhsn4ftUEyrT98TivMmpur4zA7SZbCJCuwTkg65pAFJMUiDoxoWPoAewWJYknLwNnJgyzqLEbe",
  "key12": "2iDmt4ud3zDBFwhEMzk6i2jwE1kkSSTjCVQh3m5TikgUoDoZsLHo2U15XJUCvqQyh1qgNDh78HPM8mEvCyGBwizp",
  "key13": "2zuZg994oXfmWjvnbmfBJhAQMB7qbcxmuWfEAkveBmbJjuVxi7RWJvkPZsyJ6rgQQdDnmeC6UZtHmarNNwyUFWXs",
  "key14": "uetYqBM86pAxvJoHJeoaJvukgUuFr6zWojpAkdybosaLYpqbMyUhwzX3FQu2i3QPs7Se5eW6bpgJeXJBwLoiffm",
  "key15": "4Yrct6XJfrCQCtBs99SBfkeVZKfw7PbvTWFHnXafymjtcP8GdwYrAn8hF8Wg8Pm8TZDYRWUetqXnyDpzT4ad2uCH",
  "key16": "289YkbAST7qx6n456ppqWnALfBQsTBf8Pn8SVqR7FWmtDkyxBiJ8WV2fqF184sVxj64cAqweeRPjzAPWyZCibsi5",
  "key17": "31Z47gzFRYis7ifoaHRB4uUtVwkbQSvCkZ2pBWECh5TkghSzfaA4bQ7Vh7paABbUTWCsdYaiR1WdG8UkYQDtwn79",
  "key18": "5MEJMUTHShKqQRCk5saV3oR3inNzztSKbKsG8FRWAN5jSWHji7r9FLdjqDsqckqQ6mpHqvJ4BSNR7fNAWhwCXbxW",
  "key19": "4B7fzyzVgeehQTDYXVjwbKxZmymd24sTqz64Nr3aKSqWhVQPrvcKWsMcXUBon552QMZYeQM4KZXwTEwfMnCQEzt1",
  "key20": "2rzLQrgQpkhHuRo3mLFk1nC8VAHSLm7mGMqiy3JwDsK35mxQanjmuDNnwZBBHc7VKx1nJBdYEnnaKgB3YCY2f1nQ",
  "key21": "5aqvqsamZ3gzyNSYzZjER4gJgU4AX2J77qEG6NCXUv7ndac5Cyza9nAGFXaBEgSmXn4gNtGjTMxodfvukKCgq57f",
  "key22": "52eydCeGW46xncRGNTQhKxi3CT28BECoqDtRsGNNAU72hTfD6S94Tv7raemH7ma6rAfRLCqwPmaimKhJ73LBLhRt",
  "key23": "4igZ29w7tABZoGQnEbQR1gsZkopdTRPKJKwkDxFQyq6YcDvNAtdty9qF6JD88QvWnrFpndCDSWB1YSJaQySY4j5p",
  "key24": "6487PeHDz3mNb6NKtNVdVtnamYhqRcgifXE2iExT8FsumRA2Utu4MgrEe4bwfnFxndL8vQAAGXUxBRTHQMTurMrg",
  "key25": "P42nhbk63s8AMtSvdx89BT3VBXvYKErin5oXUR1qRptXqfkJEdW5fpZFttEpwzgUGZ5oLhU6ua2U4CsJB9ZZjvF",
  "key26": "2tKYkohq751ystCRFUnh3dQNrdJEW6R9fLPdeQ1b6PeZWAn1C5Do41tkN3X7ayyeVttVyxxwdj4HHFJMDkuKqEQT",
  "key27": "5cYyUokUy4beiTKTEUcZQbRc4FHLEqZNNTZiwbB2W7LC6Bw5LW3XMjAFKNvpkMyYWevL3H2i3hftEVvAte9NnFte",
  "key28": "4LyTDcSVEmnqKHCZJe1MmV9cXRZunBzw3nrmLAZub2yg9EiUbXC2zzpbYP65Y1pLNbUnA9Zf985MZqzn9SMBcjDE",
  "key29": "4jE3Lgg7Qyxra3un2qNpVzyEcQG6vVBngTRKxHSQKz6PDqKUcgicRWs8rVZHszGNADDe4bBJbvx94kFuHFayBfh2",
  "key30": "5ixrsTV4Nonw6fE2QRVMC3GiMFaMCDtmEbb9ntp8WqoJyGyRmyELD53LfgXmUsKNNDJ6rzcUWrmggM1nZuA4EjLT",
  "key31": "4HzcacTw5HikL7oDeqqAgf2Dqqf3PzWJYJfi188YQS3tRhDnKKCskhE1dQcLs7t8gbef5VgvobD53bJZxTGNpPbA",
  "key32": "2hzgPA4YcBJggWzXsF7FaWJ6b2p4yJzoKeS8oz5k3NW3byYM4i5H4SVGDtusUJCJ98ecQTBTQuFrvK9t4Scks3Fi",
  "key33": "487zfYjc4U3bzTJwgWuZDgSnL3XaetjKYQPE1hfj61xSniSRkE817iCFhcNJaBj8ZkriE31DttwG6S8ZdvoB9aQZ",
  "key34": "2wijbVKYa6wCxC1mGZkoyrVz1sqknbLk1iJiqPvXLM2feStfWwoPmiW4zKocKxQcLu5WHomSNSV217bkSo6dXkkz",
  "key35": "3qUCG9Wh3nLuDbNCWBX4H7uWUM2ck8iFo8ExfteZdLsKt4pTxfUWy8mjJDZ4Qjq1VyzUPKp1rkFz6DybPFuzRDhv",
  "key36": "5ELQRCSebkeNFm2raH2f6jFHAfDQkw9SfJNXtQjAG3Wt1jcX9Eb1F88eD34JdpyEVzrAvD7DXuZiHNNoiDpxb3kE",
  "key37": "4zYrcB5yPtwiXtSgkZToMtReejvN1fiTGs9NQ2Lxn6i8vouo7Jzrqzj3eVx6HSs5A4xApkPyEcnySmQA4LoPx3xq",
  "key38": "JGXVtjwKM88gWRcTzCucrn8Yqr88xJ1qUF2WGhPkEvDcvrNJ87C92QZTyGXbBCDCdJSRDSpPWrApcJmZTyKgL5D",
  "key39": "4ZhpZBqdF9B8QsHTUWd2PJPcKxP44cYodfhnGaaiB5Qb7zkyziJ7iacrVVq9Euk6ZWKfmBotj2dc1dvvMmM9SiGK",
  "key40": "5j2YvwL7kXLVY5PDnLdUogpeULDXVYhyQLjjyXA6dUub9NBLtNDMm9uF52cvhVu9zG2SujQbgiG2C72pMjpW4eL",
  "key41": "4BL6Cvk6k4VRGbB42wKHkRKRvLhm8W1RwxJV8m8FQq63BLLyEbrebndqH7m35FzmdAXjp4kUcUexuPGdki6a9Z1U",
  "key42": "3Zp9C3Dic9uKaFwDwReWscQDCFjwPJdQutV69rDZLRmMi1DT5WCoAAq9LT25pz8M4kRXWX1wBttRU6d6V2F3CKrQ",
  "key43": "Y7KkjAS8CYZhb6GFBBeuXpwHbQ5T3Z75EyU4Xvy1KnazCnHtWYfT6UU8dQjnRPSyw8kQe4fKYzhk8NUdw4zWzPa",
  "key44": "5C2oJgexTbhqcyiwBKTsfMq3Vns9T8STBZ74NXReGBoko2r5cdPwnmd2dJDZZZYaZC2hojy8Mgnp4PChABiMvKUK",
  "key45": "4wJ5QJE4Yb3b1DXoXXG2WUYqz3QaSC967iZA6R71PTqrnTt27CbXbkR8kSL6fwmVfjsrJKy54MsEiypjyb3SMVbr",
  "key46": "4NGDTm4S3Cec1MUg2SSBKJgzouhP3Nr2UcuFS7fDLtcEwyF7dPnZBtdFVXu8YzZJoxWwBuYQrVNh32ecAiZPybin",
  "key47": "2yzsHwRQ492LiWVxCLwtym6njNLV8aJquwBKRXaa26rQxCzrc3PVU7s4dPtiKK7qyxY7G9vrUrRz4fvX4dAaxWjr",
  "key48": "B3LZf26VYoAY1Y67zuC7Cu7K8t7dnU5KrzW5PjfR93A8YcENrii2sgG8MB6ZXs3tRNzN75LnwyXQSdp3JAfk4o8",
  "key49": "5NePudCpS5ADHzdM2CeSSiJKjjDKBMCxhGcibdQTFXSig1GRmZsaUvL4Fb78EBjonR2qNzi43AvXB7oDVvHqXXyg"
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
