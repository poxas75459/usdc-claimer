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
    "37Vnd6k5qvVp1BmJ8nGL5PMHk5q7GBDb62Wz3svGGrLXHwycQiEfeAjSsbS6VJdAsM9oxGev7hVc15EM1wmC5jWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZNGFEPM8ed5CEH4FKynqrnTTA6o4ErCZZpTRnetYmuajCMKE2YhyZ9XwdheuT6n7U9vD5yCBMf1nB3Wn3zJzeLK",
  "key1": "4dELUsesv6PsTRgY3wNGggUymx9KaM5ZqbchG911YHnqEtkWjBobEEkSRdMSQX2f3wsorUtsMz1nCCB8aYmftbGb",
  "key2": "5uY4ivixnKRAAEm6qHfTxSmx47foxYAWJcqnExnGgBEys9ggi2d6fSUqfZvC93QVfV9QQiu33Qg1HYEzPDC6o9gZ",
  "key3": "3wxXRYWAY5kEFniFJzrDGkiAx4iLbGWBDUzakR59GdxW6chMoqWpt59mcunvdnLTvAgXKytfj3bUzhujL6aciJhr",
  "key4": "3wv9JAbpdJXGw9vADRTRo4Pr7o58W7DBA9vA1YFANn9tSCenKYE7UXgnQNgMxGNm8zuFtnyLavi3zLsS4WgXyKiW",
  "key5": "4aZARGzYVQssCMt4HnqTKx5ZLgyzc4NFcJhHCkZMDvgv9YX58QcWJz4iyNDkLH9RYFUK7dCZyKY5CJKSc3aB7DYx",
  "key6": "54Nn6JmuWrWbUUvn1FRHUEJS1ena72cnm7SdM13gyUPk8Z1SUMxbu7Dt1pGAWf2RxgxwPYein1dWU7wPvM6V4SkZ",
  "key7": "26qWPPgFfcfrXMALvQ9Pa6itqLrYWYYkrrKQEJych4DL2fvEb4RQQ5FUXNy4hRH7AMhsYuLqqVzWQNgzXG83qWXH",
  "key8": "mWEwWT9JjsiY55GGX63jZjjd4Bogw1nYuW5KGUwQwdhv43Zc4BvDBp3gRgghf8TMNRDeNPoJdwkGMMy9iDbASpi",
  "key9": "3dUijshv4wM5tjXGsHPcifmKpkWRfE1puShuSXbiw89qWXS2brsEHkD3w5MSALSkux2CEgKnrANy6tbncU9wAQ4E",
  "key10": "5xVMYvD2Ygzr3NLGYzD9s4Ts6PaVTfGGQ9e6CFRCvuxLZtA767TxJhPkjXF5VgpC81k78bjPqRamFsUN1noGZotE",
  "key11": "5EnwbP7bWXSWHSkuf4JFURTixjRgtdJ8Bbyrvk4z9WhiAr5xUwoLuG8bAr7RpsR5xFcpgc4pzEweXBorNrBnrvsT",
  "key12": "2B58P1tZfo29qzJj8qURK3h7Nu9r1FXR9EmC2kS3Wvb4Gxp4San6A1t5VydHvPSuCtWq1FFC7xbnhYZpzpH4NxrN",
  "key13": "4pvUoawx9NCLSgnyqhB2XdihDNFkP36A4WYriADHYNxRC4FzPzb3Wa6bVN6VhQuviMns9qUpr2LHtr15Nzb1E6C1",
  "key14": "ivN8UNhhhafr6USkm6Cvz55AT1mjR9gcH3NH2fHgU8jrL8VQTHib1S7NoKi9PVUQAvYLUB2FZju3evcCkzzZnB8",
  "key15": "5gy4VdRSiGpCCeT4bBBLgzCUxxUYSbcgM8oURBsP5SAUeGbjoR8kWcv4yqT7c67BpbNtKXJwThnVjFFUsBAR3Vdk",
  "key16": "Rkgkq1TonveFtH8KHkbJT77i6VbagdK9vEPM7fQG3eJogVMFQibL3dYq3Q1AhhuQQcaXafJa7TC6sWqY3mChvxP",
  "key17": "4TNVsFsRVX7pwi6atfHFT7wegY9jeEWUUsS7CqWHLL6Yt4oArydC9KYgZKBn1qYfW4r96rWwrAwTBbspsW9oF8ui",
  "key18": "BTTQaxY3zMMtXTXFNW1i1GRmaCKqTh94t2p8dZAKPX9bqVX9KxtZF3rpfSx3kTqhgV3RSCdCTHW16eNNLtu1uUd",
  "key19": "2XXX9TQhbSv8ng7skCcjfJJUFb6gcmnPsspN1UzqLtDj84AgjRHjKSjBqVeHzA4d8QDo2Zxy9RdZ3D3zRsg8h4AY",
  "key20": "x76eTmoJSttmwXHyZcaVrEuGQu7xz8TckAJDLFtfKPxYxgvk6U4dFRohyEgAcUFZacmi9vj7jnse25LVf6ahQtt",
  "key21": "4En2JStfmDJspuDhmtjsdBshFCNaLp7iSxvx3k5s97DBGadkXrTs4srhbasTpFudGUUTY2ZuCt7DiH4oX3FgLkZJ",
  "key22": "5LMz8rhPJYMyFK4dwVvALDeQo6RjUuLXv9eDcy7xXgEsCFNDXN7Fad9WQndV3eciutKxeEaRwvdj3LLwFNnshGvo",
  "key23": "2p3P6kdnPtcT74d843xPQpsRCmc11Y8KUks5LfaKaD5P8BKy9DTALaW1DvUSLFMXb4srcmV9qobRLKnogXmbAAsL",
  "key24": "3sDg97VBr7Sya4Hc8Z6o6P2DZBHzNrwDYgXZ5jJyQx7h9unpmc8n2U7M5DbcrCqFupDhKYfct7NwJRiYnFWkv4gz",
  "key25": "51LtzvzxHTgx97qH362FktZYZBPrD11xYhxVpDf5cPEeAUerHszxyEz2GQ9g1hRjgQDddgGuSnrdLLBBr2t9YHXU",
  "key26": "4joNXb8iDCwF5qcBRV7tx5qUwEQVXfw7nDss9UEkwjurkAtRP7qrFvZ3kYbTgqJwrmzFdxnsaXFp7ZjGGksckQhL",
  "key27": "jSte7nLM7D5hxKjeWtfe3878rgyYNydfmJG8mf9FbF912cGLcEg5xVw8NuBfPqr1kNJW8mSSDQDFYX2kvEqNSMW",
  "key28": "4QF8dYt3Si2T3E1P6goiHDTh2xCebz3PozCcU1Hf9LhMGJBDiUjAPeq6TARAjc9VvWgGuzbnKVLjKz7uHX89Z1BK",
  "key29": "628b2Q7e5VARJMnRyKcNqLFfuQwqs78EkTrTWQjPFMsPxu69uiYrww6VdfEnyidWkipSgoWjtbtCoKVHQr4m4oX1",
  "key30": "2SyukMU89aHKq3EisBjsErRcd8P3WUnq6jqzmqvvi2GVxG4CgEuoBhKadk1s3AS5XrNGqmiL4WGvkLUFqYguJsLE",
  "key31": "2bvuc38Tf8f1aHgHHKBud6wM1EjD9RDYgkE1T4iY2DCxPFkDk9XP7Z3UscJWujdcyZy1Y6ZgZLkCbSSBysCpoUto",
  "key32": "5rZ5C61rhGN1JvRi2TPsk9uZdyp185PnfMyQUGzceQ4UkSsqRXEqWjZbAmyVWPaxCQD8fs7Y7GUDMQ8av8o97wYY",
  "key33": "3hTH4QL7PcxuiegjyFux2ZetU7pNT2WG6AqLvBuTQKCMv5fmR2Qefs4aZCNNzTWxzTXmWpz4w6otWcvpTvXSm5Xh",
  "key34": "Dvszfz61GSa79B67G5BNNPnBG4wurSSTWFcJVvdALvqtUkVDc1ePrgPMcxArKYsoTsmdudjHrjroaNbAKAMc3T6",
  "key35": "PTBofWXE4DMapeMNXyYohrgjGm8a37yYFakBWtpk7hKWsycf2cBHY8fq1iwqjxoKaCatEFi8HY754zASbVZebpt",
  "key36": "5nCp3A2vQD1NFu4h1UKgBJGFcVX42Jcq3WjUx2DLQLmuKR8VWchZ4UwQe6vEqANgWJFwwWACv85MVZLKUADPrS3F",
  "key37": "2Vz9amFXVnJtymAFWs1uSgvxgPf6cXZQxjstAoKh6WPntjqmKbPN6qNmLQr8cVfcchxp7dnteHrkxWiG7NuWPyx7",
  "key38": "4W6xP7DZvXLAdtXrtg8raWt4FVSxkWZ41ktbbBHzfYoDyARHCSMx2rjTzjU4E7ArY6TWGmqgRSXbYJb2ED16RJWB",
  "key39": "irg4gkyVK7j7WtX7yzoXT3qyTJEyaKtqYEpVP3yQhwGU5RB3Zp8dMqqhokExuzKyRsx3dHfQtWhZ3gGMV9kjCCV",
  "key40": "4nybCU6jYsArbqfE9pYY15NSkUCrCcDCH2WD4KhpwT4hUhmyzGK2xethGiAQg1j5zAqHwcFKq6ekYhooji93imRH",
  "key41": "4HQAdPxefG1aw31GcqHuKwD6DKV131nPAFV3T42acer4QCBKm1saKUhvy3AEaEQS1RpJ93GW4itAyrnChBsG76rN",
  "key42": "3QQzFcXdFWnHskKdpTdttRYY2S1n4c56KujBTavUwWsJbxJTqpZtfrhTCi24umWUArx2QGttCwzVGcBDKdHFuf7R",
  "key43": "MGLpkLymfan8CYCk83XqVgKGYZKveX1cvQokTf6PEggayFhNieRChX58tT5gFQozxz8a94q8SQZBVhnDBkYXpDB",
  "key44": "2v1HJYjKeBQLaQaoqSH4Tpx9yhKPq3WB4WCpbmy8Te4hNsqLpMwETZ8sTrwxnorSUU2sFeVP6b58e3fEQ2UA7TBV",
  "key45": "4iXYw9fmj22nSWrLSTwM38BQDPTugSFijf7USh9WtWDaKH8MrnxyheLbbbqzSRP4UhyRVrWhCsyBhGBPWvLeP7wa",
  "key46": "crrmvfZ7B3TaSUzaDFzpPa6FdM6wR2MGfyAese32LQqxoCcvsaikdSStzayJ2wRaEyrLXtK3KUptNcbYk5vCf2k",
  "key47": "479g4tXiTtcXaq1HzFXTUoEiSBzVTdSyGKu9bCFc9vU4S4CA6SuZqvdsaUWDiU6tfHpqhkAnNseicUYtNHY5iuXk"
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
