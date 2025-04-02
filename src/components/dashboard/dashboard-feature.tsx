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
    "2X4oKAFZqfdkWT7syfMBawN8wV4PFqNMcvRqwBB16TDAfr6tidG7EyDxBNcdkKt2ibJEv7HoDVQB1vhdV9RBBhRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uUMEEFzfNZwxBBGiRTCRtY8ECz8fUaniuxhpdx9dEUbBuVZu3ykLVDHrnoL7q93SAJTDvmyKj6NbPBVBUAnkDzY",
  "key1": "32dLjwpnPWcBKAqdkwsMVGsEdm4ECkp6ejTmg9y4pZVguS796F4LrP1Jn9VrkVYeUBgWTweAY1RKDeX2LJyMKNxY",
  "key2": "3GuG2L8Z2zoKNmSBwLMZujevdCjpMwY4xrZJZtk2ut5EBNApPsMDcYEM7i6VJ852T784stgWWJ9jHQG6nA1zHASo",
  "key3": "3djXGfXeNQKVZBRFy9aD7eCwUPmqJzmC8ge6XX6EuRouNuEAXNeVPheUcGUGhhCcbPENJ6f2XDiqkpDoWL2G1XVQ",
  "key4": "XQRQvoXEkTERoGPzMHSVg2nv2SLCmfeyWr2qDRuqCKXe5Wg2YX4MJh9NDyhZtJLSdUBYNxgAGcPgYKgNqAFDNhQ",
  "key5": "3YZcLsbUCfh325j4viaf387kMJH17VopvSY8C5R3ecfHDVeVSXnxtzEHjRQnzX6fM1VufPvDqReQj8RhHGBbuDGU",
  "key6": "5tfrt5y18XtqR3DHjTDUM2QivoureZMrcxsQBjH1BSNKExdBxJcixPZDkXSRYLpqtXqyQbZo2ATGhHLNCw7CQenw",
  "key7": "4Wg2RGSJ9cnnasA4mg1e5h1YuNk6TzkkkN5RiWG258n9jBTS8WHRvajm3YyFBz6SrDVDtVEBPCX9RBrNXWoKZGp9",
  "key8": "599XiuWaH8bir23qtGKw7TkAQC8GYJqVHCqvQY3HEnfr47Db96iQSr74eZkU4XbizcwyZ1aQobxDTA7BmCDWvB3L",
  "key9": "4FtQCVJEk61UmWzJYH5maF4DdxarC28wsfXgCwWYWCfvnw8N4YPvJP1bGsx4vYUkavM6zDdwPqGaD4c123j11Y72",
  "key10": "2LAPVjU52ex9kmQTQx3nRT7JaDPoJnSbdwwTLjLtUS8LJcsApKZQWftx5Wr7MzRhDpvtHxc4iNRaBiE9kB9KzLHR",
  "key11": "4KTJomSJ6tXcbZHCjXP2pDuuCMbsQS5kNUriWEautyKiq8SvSmXYTxx1xMiM5wq4WZQcqdJ5pb44mvuiYGs6WqTg",
  "key12": "4XcyGvJsrwzyjAGja49qdzL9nFJ2Lw6rzSCzBLJ5vXBhzrqS8Zu51ZBWE78qdBeBvhXrsRFrbx1cSQzvHAjMDAtF",
  "key13": "2kgMxhgWnH8UtuhcxUdDykXjWSNHtQsxQiGBeTquzSX9ZV6td7V67q7FY7JHJRxJPz2GDytW52D85x4s685QTYLD",
  "key14": "3kE6s5Zm8DZTQDUa5xUxbCHxoCTSQ2AC9gZrXFU7i4QF8MxEWMwT7RHgnmFdboEBBgW6W7gsYfoyouQbXFFUKyYP",
  "key15": "4c6GopnHgHaBGaNoVDbtzeoMrSKUq32bisXUnNthvKL1rKUhRF68jjxBxXiiW8mhLB1fXGhNXu9ZCqjnm8SH6umk",
  "key16": "BHrZ6S4m8tvkpEZCvnbbTJJN9gQirQegXgAz2tjkVdHsNH4QJs22jvoUd9arbE2tbTg3jmNfDq3CLD1fi3DLkDL",
  "key17": "3Psgmb5PBvKQTqD4py5izwWQGLUFWjtiitem9NJ8f44ssLRVcAYEn7uVWmp85fNhEBpKFuzbdu2JMWpVG1AQsguu",
  "key18": "4R4USMNfqCKambffDbxRjxqEpKpQ8sMUYLqNaVhf7Avyyd9jcENXSHJXw1dEkm65FZMqZ4GUnpvCTSo7Lsm6Dyra",
  "key19": "4wHauGZDtxrxwSKTnxX86cQGBSu2LuMskLzu8xp25ZopE78WDyvddEfg4V7x1hMjef4ggNFnLEgVQ7aFfHggLcXN",
  "key20": "5Fi23y7yRgxUg7cVVMy8QTEwUozQPxWEzTi2RXrJA1gG9PDPvUYY4cezeM2zqgG3TqQ2zAYWpUHFVrPbZj7Ch5Uo",
  "key21": "c7BbHt7NJNkUpav3UDT5W7Rbn3J5eqV7reXnpKL7KrdDiadh83kygXKXQdP8Benr5iWR3zD9PD7Jmw6rDktuNmY",
  "key22": "5Ek6rT1JQBCbWzJz2XoK8byBcpQh1fqn48wCEWzuhdqpA6CNxN24nHKRnN5cnHBWChrEpQ6YuVAYNzZqZG1swdZC",
  "key23": "5sJ6CrRuPA6VKzuytvsKizqHjq4uKaYMXP9nm2e5MiKwhm3DahrkfzTUC5JcSfes55avkQofgCPyVTBZEggcdbGq",
  "key24": "3bunTYEmJEUuarQxYy7yaJfGUgjw4RNy79PTMGtnAi1fPCWUWp5cTbUdM2PDTM63uzw6y7b2N8BnZH4Hf4TgKUdY",
  "key25": "4ezmJ84SwxdaJEvU68dUsBNNRZuv4ECwbsugEwv3iTaTf8heyGRhA7KrsXZAekN9YGjSa1EXseQD2dfwn6AoPZEa",
  "key26": "3CuW6a7rt9SSmL8xRCCXGuKMuwbPPFNTrefejC22hGHjpusencR6KGoBfMYmHDiEusRxCHNF7P7UjLGM2aeXrXfH",
  "key27": "5czSn4p1GnJdvq9bkKraMMpMzCiwcxSBoNyrhCuDAGCF36RYyyijJiVFkX2mgskLAyTmAkB18JyJfA2Yjh8t1hdL",
  "key28": "2tE8XqfjPMDV7WQcB73hjSGrYcPSY4ysAHEiTAx24qTbhbHYkvCKJ5Sr1fEthyvuA6SmdQAzWqj1qmNkhhu9VJr4",
  "key29": "4Pi3Ugzrj1dHXkhd1oFMdsWhidbb4YPnZNu4FhioqEa14Ct6YWzbuY4uY9dX641RQzNi6rUZDGtoeo52jv3FjfpK",
  "key30": "4CiAwjdafCccEhkowyq4hmpxmrtuLGVCZvDQWZbLdWTMxm8RGJr8GUuMBhYZYnTjqhG5q4y6reL386FQRCHFKL8r",
  "key31": "4BqQEioMdY1FVduTGHYMfC7fckhTXehKBLe3sXfuyvmjet5ZK7JeySxfAm5bxiVneyRP5KfY62J7PMVwV8c5HSUF",
  "key32": "359sh3ndVffxcRPTUjQzgG5VTQrP2Q1YLVnHHHheXBLnpbTDobT2pEJXs8Vt7ag3Ykr5DMoeD2LGZ4uraBnkXxZT",
  "key33": "36k6Bb8zQXwcZimSDATnC7GdQX7o3Y5FoZnZUhaqJC6yhghqa81PhgqTkqBoi8Yr7LnfE8McxvHaFnB3Ztjz7Wj",
  "key34": "3iHZQKg1Bg9sALbetMUR1CREizk5YWsxeKNoH6srTcmiWDcmMi98iTm2Vfq3MVsDokH9CwgfT4i2cV33qghGEaXo",
  "key35": "nnzeWmXm37fRJHSgjhgnFxACUppEyN3cXmD339HoApHuHE23zzBB2wZ2urzZ9YMT3kWD7XKXKCuE92tRdh8TLbH",
  "key36": "3sEmeZoAMb88PytrUt5UAq6SUeNcqWAsZ2u2Jt5XNoJQrPwQr6aWcQB2irtit2fV8zF4Nkdp8LnDB4jCEFykqeme",
  "key37": "EMcJJABjKkkFeqDtSZWCq6fuU5JyCVN3YBKWYddDijAibVg6vK21KkdJfj16sPcMNQ8Nqvxkv65nqt18niHYRP3",
  "key38": "8jGzVDt4qt28df5UmZQbUP3RAPggab7HWuESn4KFiefWk5NU45GN7sETTNxKnTLKcR8VSDx3YtfTzDZfRHQieFf",
  "key39": "2jTaki3J8gHxHLaim52xKPUbLP544n92WTrdgfAZvfodqByJyc24KbFSLAgMnsx58efqbdgxs4MMCpndqBMNE1tj",
  "key40": "253GunKRatJ3xN74yK3wtUjP8wBBgZvKPDxk1R1CXuaLLt9g7uNtm5K5LqmKZXP3Jo225ZNubRUs7ciAE5YqdQv9",
  "key41": "5nrfu25UQHmtvVweKM4PQG1Am8CAgdxRsjidhYZzdUoE99KtSBwfMqq8SJysWWwkZghsWMYH5UY1ac1tSwmmpdcu",
  "key42": "5hTCvPJkYT2puxQhVd9az4FXNF9eo6rZLCncsXhCMwkk53m4moXgS9e27rHn9zB4AdNmm7URY6Za7bAiZfyf1M5c"
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
