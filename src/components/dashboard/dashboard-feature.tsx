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
    "4h6qRaKKm9b6bFDh6a3i4CZuk1XUM7Z4LJNfrtGasowBUEYF4LxNN2TvgcnZtqadCZoxo3xUhyBxCUk8TrFnA5sF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25LWSmNZs5hQapBXLauHf4PjYFzFfg7z8TQzgCr7H4HpMXzQBsbBXr5xy5zyLPpzrQJaocr4oXqfWcVJpceZA3Jq",
  "key1": "5pUK9bjjKnxE8vREKHKBVVji6HiGowj1yVtgAHv4Mv8CCgRBMKTHJkgctJMjbnYHHH5M69VMqLeFcZbZYFWAbTK1",
  "key2": "67MHTwtw8dtshmNVJWyQyusYFnAaQ5zTY6qedAiUPEN1SaqbSsowWXvmwMHCKgcm3XkgpxMdfsk6Czw6Y1gTgJ3S",
  "key3": "62j6uLTKji6uKsBcYimWLEnBdQ8GLdGKJSM9qzBP4a9NE66r4RV2RhJ9EU5ZZXwZNQ9HTXebKiZoxh15mqmdMzBD",
  "key4": "5yGyCQnGSGQMhZTbA6EeWwf5zymA32stmQZ1DW135FLzauKdDnGSykvRyJtFRV4ViqDKSQULae4koTDeiGmUS6UQ",
  "key5": "23RPbDBFfKeVXPbixCQiE5Wg7rqCErpGpwrJGjouEw5UacihdynRCeL7QHnULKWjvPAAj6n6PBaj2Wfwi4FVvyjr",
  "key6": "43QG6kCPYVCK532dB3GNeZZq6NpsTJ97u5f5bfosdaNXVvtqpGjvSBBFKd2LJMeXbLtj6czm4kBe1jeZ58zXxBYS",
  "key7": "2mMFPgw8pCFXv5Ce5s6ctGPsR2j4qmkN1n9jwbMjvnxnL4ueKCZpUQm27PLEEYvccccgYzUpgWi5N5oRg3Tzkazp",
  "key8": "29rYPKdyfbpkf5hAiahV9JmbzpTQHQU5BGw4xnYZgQgjWhWBfiRn2T5QEazTwpZoyoYpPGTHtAormcFJSjUx8uLv",
  "key9": "Fn9Z9eKTSXv3HkMobQugDNwC17XXLTPQGeQFHP4Bianq8oGCQ4Rpxq84pp9a3UoYPJMZPAjK8PELPjajtEZ38ry",
  "key10": "44ewKHSkvWP3wrPoUmj6NLf7QmnCewWiQNVVdLCb8gYMiCxWoHCFxRpgadHrkJHoSNNKcLd4zEWsEx5NeTJy79Vn",
  "key11": "8a9Hz2d39V1B7CgsURHRC6rsWXpvo3uSbrER26P3ELSEVFNbZABWSC1u1miSG4x6at2AjKaE4BPb4JQRhQc5som",
  "key12": "5RqC7NrW6GFDBwAaE49Kz89fiQxccWv2XyzpD2DY4A1x1QcoAVdJi75tMYW88ohjYGQ7bdH1Fzau3vmueWHoYnaR",
  "key13": "32TAReJQKvGyddDh5TJtKtCVDzVbMpzvvHsbyoWvJRr6EaKuVJwrKgTvdG6AYE1bTvD59TMauha6xWKTFfZpDBTz",
  "key14": "tiW4GftJK7b7toJqZmT2894XznDP2EaJcXTs61soqS7Q87R8svTTYVKt99f8YzCTA7ZQkSPK7XCrH2NEpJwnVcD",
  "key15": "3eqmuj5oMHNG2kFENyYtXUGCyQZyZsgJTrKDVQt73DYy2nsCiuaUJHvGWYFTP6Dfzhbv8Rn4Fojn5bwTmvuaLYxB",
  "key16": "W2Z5HWZ4gnHkpaesD5S2KRy3h49pCFDUzHHEYJ8r8PuczRsPZcd8seUwu2tmPora7cGj4uLaXiF3STZ2XHDULwP",
  "key17": "64VgJEihrwtdxhhuaM36C6XTd8A8CBTx3B98rSwUdXS93UsLJuEhDwh6FE9B7WG6QDuz7vjmLLzKeKbSHzQrCr4n",
  "key18": "4iR6FodpxJmMMkvcYGFCoEhvJkurfQkRsHgdhsy5pQDk6fMrNxgjfES6ysmcRxt4S9sNEhknELN6TEbAfmPNCgau",
  "key19": "9iSxF8t8grryXeFa1th3QMKnEzugSTKr64adsqrHgetjtHev66nqk2psvZBddPDckv2j7Z5TR938zcyz8CnLavw",
  "key20": "5zEypfhFGfAwP5nvTr7g6fF2LVSvvRnakpLCE5wNEwQckKK4BTCdQHbej4VkfsC5EHGLrxFJSVTqaWryS3PD78Yx",
  "key21": "4PpNyB2us8Hx88QWjJiPCm9TKDAHPhJG5HyNzARGgCKguRhW6uZxVnvV7Radk1v2F3ZHBV1jiVfevUvhf8bNEr9q",
  "key22": "5ytK5fJyTXmTa4nKMgDkYFp2DC5e3DtULkF2NRuCWUyy4VDoGdYGaCKDxembxVbT43keyCaFvTGXTWoKBeyJitiY",
  "key23": "5M1XAjUGBz6SZ6iD6P7XBDMvjubh8m56iDsrrCDgqFijwzK6wcaN3ZgJmf21t54923HibiEyomAMFvkrvJEUVyqk",
  "key24": "VvuLfg9kJrpyxq1XbEou1tYxVrX2tMrD9MhhJcXXM8kKQ8qWvYryzo12vqDd44TJHQBquKNXHs9zcJdjNqw7krJ",
  "key25": "4pm6WRuFhZj78CXSJTiyFw9UZRbHwNLtk5KY7rHf7ojTcPJmPMJS4BupkGyLpP6ZLTM8yFzjy6jDr7phzC64d5Zn",
  "key26": "fM5wS1Rb1Hhmm5DbSwCKmLn1MGFmK1XfmsaVadBLtHE5zo2Hhd1iL9EefASSXL4ZZgrFaaWytSJeZxRrkrgNJ4R",
  "key27": "5x43r8q86bVvr2oHeAhrCp6JSYnVWbCz6iuUCG6CvDSdMgnEMhpGpbZjut8RFbEfqLGixwMEcAMeN8Jqsn9LcQHC",
  "key28": "3qXXNDdZnw72vfeyQsb35akJ1BYBA6zTCYnCBmQmxAtLqgzP2g4MTBcxa2EhyokM85m3wYzAsBvo94vXLRTu4byQ",
  "key29": "42374oQGM8ryKw4Rauk61Dc1AYTYHSCTR8JZNMT2zzHfcWA8U48H1aoapUFHHiPkdS9ncvn9ZBShJau3ptpQPBqh",
  "key30": "2YPn8U5WCvG8dRviP1ZmF5qDDFGJCFjubrYPNM4f5QyzvpExES8bRXko31E6bL6UwLqDtdmvAEqnC92bZuvRvyVs",
  "key31": "3vpFjvor7tTgw37E6gfgLz7gaJ5ywsXAiQxK4j74pKNCVGFeWhE5qaTGepNQ77PL6BC9ejoxF1br1hm16rUGVDh",
  "key32": "5w7DT6F5mddaU9WFMSZnQvStaBfLTXbUrcUtVy7Y4PzLwfbmMjxKPtGCwMxfF9yMfKVNzA2j3YaxBYUzynp52Kmy",
  "key33": "M2qpprmPMB5f8rjgCzSWnaBEKXTkXW7S2WKo5K1dDfjmXz6apZpcURmAx1F3AGTdGaf2eJ2hdiewgSQMz1LU8hW",
  "key34": "4PUQtxsQvqTAN2SHikXS4m1qhotm4NDuiLEJaH9rdrCaqZNDF8NCK6VbFqzLDDfzRW95bHCwN5XzmcfF2eSiabc1",
  "key35": "2YA3v1ZfiE3NGiimjHEQ57xF9SyDWC6NqHGpdUMghqfSnDhZaATHovzQjCNiL7gdMsoiroPk7w4fSpiZhYjBgHm6",
  "key36": "5c75fWosYbZAsHkLgD1XPTrnsMpQm35dWiYQ7EyvGoi3qoQf4nYgEKXM2Ad2vzre7e8o75tzwKzzbbR5kS7fn1Av",
  "key37": "3JhNSRGNvgpo1aYr6UTEfLZpQjyDb31hz8dk2ufR9C5q55JZRoyuKzdacEoJTUmVF6GDbgJprnfsnz4js2oA61yr",
  "key38": "4FqTkYXkkMMZJ33wZ8mmLDefZbHDmohobWfA3KVNT9NvQRkmS3Ee8CSB3JBahEx55t7NSYxpj2Nsbk1bADJdXv4j",
  "key39": "2gZGrY8bDNzKzgvGy98qrQRQ61mQr4otxSS4bzW1bMeHiRLByqPKvMJt5yigrwRs5L2cLFpR9rDrmHEAqpS4hBY5",
  "key40": "2ujNUCt4jBAimVMtiMiaUQk9CVz9fnvaabXLqpSivzERtticyZHWQd1TZjBg1Py3uCKePsTSsHm8DbJ3y2zGVWtL",
  "key41": "Y3XWTZPbwmGEQdg3mRuBjMWgy3zdBu2TCLFtSb3PVM8o6ah8VEDtbpUphCCWreHwypbDQz9oLhB3nktMEREnU7K",
  "key42": "362T3U9bvdYeFtcg4pMyKHQFvspF7wen3PHkLtrT2GPrng7WsmQ7ftqvAFvRevYsWy2bCWzxiAJYXEe9K7t7W2qh",
  "key43": "3YY4AnaPqauzx5YkefuiV7gpR5oLGhbCYcHF2s1aVTrw6vkuy3kLaBBvQaQXCYXYVMf98Rx8Cvt9CEQmSRAYYHaY",
  "key44": "65UNCAbzvsNactF5TBMY7Q8Mfcw7jmJ5eZAmQuL9ZGeDiW8JGAHC7q6VSaFDBUfu9aNxV3a3UokFJczWnDVfBiBU",
  "key45": "4HSdW58QS9T9S5Hgs9BhjDNquj1oPwKPNCrkuwjEWDUGGBth6mh7fAi92AWt5QedsqGrUb4BpJJJUFVtfkYMz52U",
  "key46": "3QwvWAFrf7g5SNUxzcGaRM5oVHExMKiCkaKi6UC2iwE2qGBtVBj47t1SufymdZFiBmiivMwQJxJ7Sto4dqu79yWH",
  "key47": "C4JbYPR7uFyRhupMPag3CX4KdQnMLzusxMgooQnAZGEXxQfhWevLSrd1rJ2en8wurD5BN8Jm2EbeqvVAWh1fAGJ",
  "key48": "2KUs97CsVYUYUQyqfY9ybYF3oG2bTepLD9qZxadzGdPQU4bUvAGhLUUCWPRE4JhQftuzZQR6shGQcm4J22E95fT9"
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
