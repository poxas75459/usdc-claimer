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
    "2AGAivZH9ggVtxwngfryDcRF9m1Ldz6XdoTjBkgW3iWW5smBvhjpXQzZQofKm2VahMjAHxWm5rbMcuvB3VfgdVnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2coSvxZ6iuWQNm6Ki9juqeRwq5L1s7ZLAzpTd8ApgspquqJfTavfKxeSgeecUayxX2h3emMNrDnwyBRYJoXuTEkS",
  "key1": "fCXvjXZBWwpUvwQKixDLWT5QBMtj5976rH412nasBCjViaHa2mZ8TTAHp8daeW39Xk4bNo7Nktr1dQTkgesvQwf",
  "key2": "5WF5jduMp8N2tKQ5G7iJ61vDG9paBUKgx3sZkPt3WRs8Q1bwB2nyspW1JuYJkZrS2GEJiFwdoY423JKG4usEmX49",
  "key3": "57sH86Nk2654yCTSX1BGiQgkW6eEUyyGm1jxZgc2w918y6d8YrpKQGnNE9nDmAMbwbFYh1JNEiYjsyjtNVSM2EpF",
  "key4": "a9yLvAKrc5dvuuN3UdQwFR953WCrnbLsYpYYNZqZV4h41P75rjr4sCzHpKGz8PUxTzm13LuAbTLbMe81BQRspcA",
  "key5": "63n3grteFm122X9wshgqi2QP6UAcgK6xF4cRGSuTxyXh7UEmuNV7w2xrXkVoCSE8Jg1weEutjao9QkKKdKzBpDiF",
  "key6": "yBCtba4hCf4tDT25fsG9tJvVCfLq6LS4ePPB3N3Cdbji3Tbc9v4JdmYuMsxiVTeiJ3qjXvmzubRDGyrpjnXvdAV",
  "key7": "4TgL23CLDJL6iVsWceKNQG1g99JHTW3E9zawX9Yx8eZfmEVc9KzHVs1AEVBfR7wQTb7L9WfMTqopk8egPCcrTbpu",
  "key8": "5oyLaJRco1fLU49FpDmfuegRSLk99pGSdiQWEDHzFiEUE1nBoW7XuR3gaqREEhgck7J6byftnqo4rCr6gDbKh2LR",
  "key9": "4gCywecQ2iFTvReLN6VQTH8Lq5kd9Bn4sxNgUxHWs2gheR6a9iKg1GWQVLhibHBproJ5dmxoQme3DjKhWrfz5h83",
  "key10": "4phodvEXDozosezEWC47y1uVUvvToAaoHBrd2ESKNcxQwYo6TTKTr4HDmLnxCPJPfmuCpvRjKhCZs4e2a8T4pYoa",
  "key11": "3U6RwWM16mvnNgKUX7XvgYyZR59tbMn53J8fXDiY5EGwTxoxEb4qJ1L1HqXvv53bJXuzhHc8ZVewKC41pKgqPDvH",
  "key12": "4o5iQwXQLMZd4k5H4YTYW1WcTSLRAMANqDBTKNf56qEEW7Z5viGeA9YRFWv9iGEv9nY5E5o1V8p8DzTNx6EHujiC",
  "key13": "3vEnBPKfqbzaMXRfaEKUKxSUfJpYrmANy65tS3KWr8mKTjYeU6sJ98z1kFN81zNcunrVkqkXXw7gHqF4Uv92UaE",
  "key14": "45m7j9DtFqfnMjJK3oDRBAGxRjDbzq4EamVFsrSAnvegaqbQF5p3scPWwbwgehvHA2haRgsQNj6ZZiXrgY7PXH9f",
  "key15": "4aPyqhyfozur6ajvfinNyAqgdBh1pqK4MokmaSG7azcxxXtPbYb3dCGMhQhGCgAZGsXn1GVuqpZcUGNmx4YooqH1",
  "key16": "4EBRHsu4YTeuyQtKHyp6ZnfqzcwnrtuaG2EjSPGnL7fESeee9sHGkzarUC4gQnt2fVSwTgccaAvPWv9oeJYehK1a",
  "key17": "65vy47SKkbgNzWi42HqDgwe2XeoGyPnh8xCkBr7bmexG9yXTzr3n95mHL9W5qinWGpRmxMrdRTv3nu3aHAmDwimu",
  "key18": "3EnGd99GnxUPJuEFP9SW6nE6yfaKUEZ31TRW61EpUbCYHKps7jt1K2aLpP6WzTzV4XAX35whYByF7gpzzwwLMVww",
  "key19": "3HerLs7WBjN5FJpt7N4rTSa2SxR4Q23tRKiDgXEm4KeupXfNkyNCPohYEuvJ3BLMUx3mma7BQjv7ELPhH5WRRXk6",
  "key20": "bRQPDZ6ndKoHmPrSvrYAkkfpataRL5wpSWQS3c1JunDWDQ2drYJVvEi7moYfRuq9NGiX6gKmZesJ8VZjnMAdBvC",
  "key21": "2nZUToLBSRX9wRAZabJeziM8h11jbYyCCCfY24W6UrFvvzua6TmDpkNSmJJ5AFvk2dw3iJTtju8ScUSckxD5JaCH",
  "key22": "2FFXBw72kouLz7cuTN9bDhNPzUR9WCkAMxL4hgRx8E8tL63as7pE1cKCy6gth1P7GLEn7YVqRkgkNNHLotET7zn8",
  "key23": "5LUyyh99b3yEBn9Zzih1aXUYtA7AmU37uuMqEyowjqjkCUn6GxKjy6hxHDNgzw2xigY6S3JD7mQmNMgim2V8stch",
  "key24": "26MJJKTqoHjFg1VVaaT8GhVEYVqrLaV1yF8KLyHoGRMC9941nFfByNpbWK85AVh1H2EhdGk7FUULa5Du1bWSdZms",
  "key25": "4zhVzeMs5ebx9kyr1SrLiUBvq1oTNSAwN3NMjSv2PnMxZcejhxFi5zhirZYFc5Rn1uVJ4jzhjBSn7PGPkf3v2Yv1",
  "key26": "3kL9vMMS38Hx9iDRn4K2WmG19KrEm7rVaEFvs3A6kGDJZyBaBuRG3aCN2H5nTYQZYvqhyzJ7SkRZ73JBHaTEuRyd",
  "key27": "4bQVwTq7uJ8jLU9YDfcnkXcnMRYjyasabAgTv9zwDsJAmDUY1noh7vngTkBDu5oup7iy9ie94oJV6kGd8NKjrQs8",
  "key28": "5zgMsgzyGhVYZHDkbMLv4o98K9M2RpGNTZKtKpNcfLbqPsPW2tkBWg2s1TXTgGwxbmg2FVNmVjFeHTSmN5aHwQEp",
  "key29": "2t34DNjMDihUKXYb1g4DkN8zzZ1okikZsNjdjpgWZRtc2SWrCLJk13vmHF4w7su7Ljod1bgmpzVfyYbcANg3pBHy",
  "key30": "JKujungpTWjxqJxU1nLdc4uzc8bAAGyxfbV8oRFchq6CzoL7Xn4nZUiwm55pfFnwdHCTYGuRa8Bk3Mhdaqe52T7",
  "key31": "3fAXyJd19VNYfYbraA3Lw4NNP2gqag9rQRZLkL8dMCd1VYfj9Fp7dWyJhNmiyGud3WKsvS255nSeysqeAxTVSwMw",
  "key32": "3Vk63CD2DXeChFN7u5nAapavQsn9AFF9mrq5xvw7EzzWnF27nN4nJ7gaNuYnMfznzNqYkbvwqq6Yw6SC7eiakB8y",
  "key33": "2X9et6PcEzqt4bJrfPJveFK6FXjw8fRiQmuhS7pPsv7uBQ5gUbV8sJt3gHTAZ57vqM53wAReREiLp43DxQtQNyP2",
  "key34": "2HsTrMrcGLwRKXnuUAYiu3P7RoxZAM6YpoV56tvakHaGHvYJPPmQd85v8ggQEFo9DsBkd5uSi4Rdw9cYit4fMKUz",
  "key35": "tcFyPCrEzdrDkAkqq8Bn8cyZJu52iMuCctG7ijrvqZK1RMiqbzwUePGn1acjvf8gFD9pT4ZfZXiuN9jug8ipDk6"
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
