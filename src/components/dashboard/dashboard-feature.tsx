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
    "32d3w5uky55yGmB36gdEPgVexD21eoTp9Gyd7EG2u4TVhk8dnHzAA7QDY2NPYVtUFx4XfrDHAyDbEcubZExiG9k9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rTuUwfABe6ffeuxiMiu8ChDBn9D4mg5LZV5YTsGTyw1Z2qDJ385GgEzoJsQ3sMMDJ4oEJB4Xe2pbKBNjiVN4ioY",
  "key1": "55u2MFxsTyFtLX9UhR2JRwYpkqM2Ztp4YQLQ3GQ1gwzKytPXxpLqEA5GH65WH1yWWCe23b8TFqi2w1a4X8RHWsXM",
  "key2": "61zUKcbh7tJTM7jUoGEAkWdb1kmqq6v1wmdFuf4HX3jJwj6GsxqQUVxcSoSdRbw9JevRXooDz1L2BTNbmEvif1oD",
  "key3": "4rHe2hk3Yd3GFzA3qmhcip9r35HkTJVhN3zSYMf2H6r7YDgpzhfRsFYwVmPMX5tDmmqqwg8GKib9T4TKVgc9oGhZ",
  "key4": "2bGFzj3SiSPjfHrGwYXBHdwWF99wFzz3f69R7gGtRmkv7WRWU93t6XTYCmfdDB67wNGeRmh7SfEjdCMbPrvXQFmG",
  "key5": "VtH9mJVpfjZnxotKfqtCUyiF9Ne1vS42bYMF9PLQJrQpNyNAmiBFEuq3DUgxba2jCXWXyTtRWjQJQYDdPsViKr8",
  "key6": "3hfQo53WEq3qFX1HBAn8eEDbiv79q3njZ2zcG2qL7Rb6PBNi5s1gQPxt9zPj6Hm8E9qnQargrdeit3cUEtKqEcYm",
  "key7": "3cAfTc4ZWHDBV5dw7r3mmkJsas4zRv1Kzp77AZfnrpbBbGokqoXD5mVhrtoB2PJsaB885UPpoH99PNZ55U9caFq6",
  "key8": "h3oQ49RBk3rC9kkfd8CB5MCxHiCL97kuny7Z6YWaePzLav5yNbH5JFhAeYgvofNcs9YViEmixjydJqSB5w7Mi4h",
  "key9": "9tQvUUmXJYU8aEptAk7zRdogSg2DurEYhgnxwhnixRpayvHakJ5JDYnFq8kGge7N7B4eYh4KRDcMA15L5Z5MJde",
  "key10": "2RcCieLniv2FDARYib9ex7nwsiwabkizHVcxz8eLm4PL4AWNzggoR6CNng7a1956AE3WDQynfXtWhb181wWTTuCp",
  "key11": "3tf3QA8LMnPeHMW4dQtVi2S3w5mBtZNsodE5oNtrGdRfBiYbZPrt5NHSX5sV7Saa3ne9izJxYu8QueR5j4qqUbTA",
  "key12": "2vw4ZjVcFZnYHEk5rZE9wv7ZL5G554e9X9CMktq2ahQtnicvBZbppSi2dAFB1JSCZLNzmXEmgWKZ1mJA6BYjHMDM",
  "key13": "yzBjKAfEoYmHdTbXRK91XaxGaW5XTsR3CVz7t7jBTMiELTVHZLM9hsbrQjwquFWJFqbSMkuEbcVMZSfPsDnFZFF",
  "key14": "4e98Yxx7ebGse7jTekcScPPk5wRNSAt8Xgn4irmniKW8Zj6Sx6Z77FMMSJSTCJ7u8tYQkLTjwH6wJ9Bv3k8Mc4Qr",
  "key15": "22kFMaNTENnBusRWJtFprk7PRZZXVx3CqXD7QEDLie22USpptannjmfuHxn6Z5ScdXacQPaQZ35rP5R1wtgG6NH4",
  "key16": "5Pxssn67LNAzqJeyRNJnhLZrFdt1isGhm98QcGJT13D2BiYy2Rxe8UQv32WApmaDngPsqvaarAWUC6g4bMYud7ux",
  "key17": "44nps9f2tCsYD1FAM1snFJLsemWPZjvJyN9LQHcHDzZw4K7oK5ZR4HfQWoeAbvCRagvB8HxKyt8uZAH4jFwxoKCc",
  "key18": "5Tz9YJ5yCoPzJw8SHMEpC48T5V8SdYNa7d4szYxt7Ygy6pcU9h1cRXAqmxkS9AT5ebep738pwSmWR7FQE5Cwiy1J",
  "key19": "QG6Ywjyrqq6ZKoNSzqQ5sKSCshvSLXgUvrqsnEWB8fRXR6cwcxejsqaKyVxAyjfiiHFzd6Qnz1hV72BCWPeeV7C",
  "key20": "4RBuTYR2p7ssxA6HH8Pc3YEU9MJbgUnpYgr7Y1EnTy5GzKBTF3XmWsVwpF7rA7R2E5HKaXA7ttDRrwPSoUCrCwBt",
  "key21": "4aghAYZQmqjp2KMfe2xpmz8MtahGhSGMuKK6eVaYdDnRtSju2GVQsoALUNHiWX5ztZKTECLpabKWPZxL5eUM261M",
  "key22": "51t5ZVQke3UZ66zxdxXJrSS2yV2UXAqDXWJNkHvXj2iVdzTW9y5pwAoC5eEzcahh2vpNrXTDw8LaAA3Csg2YxcFa",
  "key23": "4YHLbgzNBTgZS3S8ax9mX9Yrzuj3mR1qUY5JqyTQDZxgrQvKXHpnFyxBFufpn1sbDnE4DVNjoZ4Q5T1389CwnXhb",
  "key24": "2T18XoMY3yAsgd46npk5NJVpoNPYMeG5ARgXMLvDH2nHZcRLh2QGabPXZfcmekBzZhDsi7MmgdUMamNU6SMzG1Fh",
  "key25": "4JfGcFutfKR1ZHGSeAPSnbRMZiCzKYCyfxSjr3vb4euVgv33A8umU1cstqVYn6MqbRW6PkQtKiy3jPp3DxEWWhgU",
  "key26": "2TxsM1sBFY7eSsEfbwxGy9rSASbGGXmGAMxB6nSf1WeJ8vLB3kYRMPosn6aiBnQ4E2mW2Fty4BZBwSiDUesM5xdj",
  "key27": "33gbmiywrvyRo2qdmMEJdQJMvJY6srzLSCUCsvr16aR4cqxmXaudKBRq5C5JGL87PhGBETFNjVGJ1weLgbMPKk8",
  "key28": "5vZtVvECAiT1hYfLQDmS1YMbVLMswFw72hADQFps5ZXP1mW7i6RinEYnrpC16btxrYEMaqNuTkitSaHweU2JehcT",
  "key29": "4ik2GXsBCvKmXLdNipXEwGbKKZaZvpRmZusKHHdDDcJTRwtzxrSAXvbPhRykCh7wLdKbVHgAik9xteW7AYudBxDB",
  "key30": "2GdPMNWk6QDLgHGY76KXGzwSPXk15SmuBnGBdvAk2uGRek8FZaneefHdax1SVS8q3jijGthQdZwojbvmWh1eFrY3",
  "key31": "5MC94XQuVPh9J1kUxifbmJBmGFgvKtU4eW6yEg37K8rogiAJkNTUP864n2FQXhmQHE9ExqpkiCcrDXJToWwYVYMQ",
  "key32": "3jjMcrX8BTVt2h221KiquTPtgDDaXw64soDULbG5ciZ695JhJaHwLEeFshFQiBNWnTR6pBZgNWYZoVDY7oby5U2G",
  "key33": "3oH4ZqQZp4czc8yBWAXb5KaDPWJMxMdEMaKEGpi6uuuLDVHfwSJFYRwaVxAH259SxCBNJEwVzdSkinM9fG4Cqz96",
  "key34": "4TWzkZdVERFePmbjzcYQ32EPx6GHFwZHGu2udWPTmfuQ62a8i3BmGEkPqXpGAaQ8kfnJQcUhLVgEqgn1hN6CbKkj",
  "key35": "5PhUhGcXAsnxX7CjL9LCrbmXNJa2FKBEKcgT3gtKuUYWmHVhrYP8ifd5tgz4QZ5mV9bKD8RQ9PHJszWTBs9HD3ys",
  "key36": "2sJgycnqrTy3oaNyu2qv8yshcyvZia5w4kc4qCtaF19i2cUeFZJMH3PikKcTWHGZb8ykBBrZumjt4J7MxrMBXekq",
  "key37": "44uCpQZ3SZX24CBbpKW3GYFMyhYQScSzX6ieLmqKiYYM9wHzoriXW6FYjv1N2L4TRtGaRmh715rAPRVEyBRqEA9U",
  "key38": "2owSDauzujFzHVUU3GL8z6bGpBnLp8VwtDzfTvKfNkv5Q2S78NmdM5KosbLXofcDzRDMBKwajCDCbLjmgFFuVXPK",
  "key39": "4sMmjkMYHDyErdytGtjnG8oMhcUrWW8QbgmV7A2DXrpLMgtQem3wR4vB4Ja9F5ZTifPywVaW7Mft9qtDxrbi6sZ8",
  "key40": "67Z82MCW7R91pkJJ5tgVcMppk818EyhGzGtjKY5yAuq3WVEbgNW3biDgQ63qipwf6iKUz4u6t3r64EzHRc6wVYDb",
  "key41": "384fHpWML8WP7fLZCYh1eVrr3nRWQHRWcDpsyQCY6GEd97ELW8Ert1cH2yDyFwFaykVcnLZXuiWUgEyDqy2TyuYN",
  "key42": "5wgutMErWMzyF5oqV5hyggnC88TcMUQotyYcuqua2RTcjx4SjkDFH6UDJGcRjXjvVoGbXh1SckC9BvtvGWH8n8Va",
  "key43": "5fcfgoZS15RSUhYsi89SojKAJcaPAzNXeWvtYgNNQTWb6aG9wChx9HcqhWPf4GGZZViJjhF52v7usRn4uYQoTRtz",
  "key44": "2LcmfB5N9eW9n1Ph873nwiBpgcpi7TLKeR7HU3FZp6PbtiDfzYgHVzUQ42kfWENFRRiQWM22T53zmWpauvLSJT7Y",
  "key45": "4kJ8QJyXpcVBFmzY7hXghxJh8Skm6tfQJCDhZBfMm2FRm9xYHUfqxPqhXozknBjr7dRMwEV9PpDBRKj958ZYq9We"
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
