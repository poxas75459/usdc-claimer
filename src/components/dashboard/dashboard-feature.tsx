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
    "Zbu3Z1X4zH21S7B7pWC53yNpzwtYG4DCb4bgmRjZumSLKqeWp7NvhAJWXBxBCkBRfVNR7feujAmUYRgACRfe66X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jYx9aTxQhgXSbcpep6dsTjr4si3o6PJgsZtV2rY2X5ecE2UKAsxAVQV8nSzmxtXCWcdR2HfWKwJ2pxit9DvREmJ",
  "key1": "zN9fej39Pdz7ZaT77CvLzNjGGAVmxtE2ZdteLTTcqKmwtt16E42hkfRow2SEsinGsoSmnGeeyYv2ZtidNNSED2j",
  "key2": "58vhD422Ha6UGkptmvZBobW1iK3ufCHZbdKPSzz3RVvZTHQr5BWrp8b4r46XfccY3AwM2B5uka6wek7zJ5uPVuCt",
  "key3": "3sYuPNh71y9HCXuFBLMMfZQnSrU1HNQDvZ4Gg7zb4CTXvaXGwnUmMStF3zDrmJ9bNUaVpqCaJEe4TxescPBtq1Gq",
  "key4": "2RJ7PJumqzReiqULvJwGYdrsZgajszyuGio1GtYxNDFrtwvWbHjoCK8ZuxSRFDeCMiBr6iC7hPUWQwShDX4eDuNz",
  "key5": "5PLKxBd9N1CGzu9nvBQJw1qi7eSxh3UHYVpTgMmNxBt2inpXCYZa4n7sPkv3UtX2cjHXwX1TzKL3FLWwVFctJdo3",
  "key6": "64jVo8LUhyw93nkGUy3SFsXAvVz6wcTNDeMK7aysQk8WNiw2MXd1wZn75R72bZkB9E4anHMUf6RZGs3ZDfW8Tw1D",
  "key7": "4sGD2hQuAxvoyofsd7HL4KkRTqdqipdfgsYQkjg8Fp5ia1zfz5mTzcbHh4ckSyQqQdQeQG47AxjxVZ9of4koMB9K",
  "key8": "2qMsw7DyNPWULRJhnBK3UeCDu6rZP6nSryh7eiZgXRJy3qYjfV6MkPR1sSQbdw7smVb3C5nL7mdW9auh82ciLsx6",
  "key9": "4cYuzvqwRcELkXwVTH18zigKEpFui45gZz5sMLaXSvsw6TXBLn51mg9JshoC8j3eUPA3y5MfBPBbaHQjtKCAc5eA",
  "key10": "52bUeGAHMcNUdSSMdJkhP3R4J83puSYkGEcBms2kRCRLcaurE7KbC8K84vtXr9CFZy1UcdtX3GE9TiFN89L2JwDp",
  "key11": "4dDuvyx4KsTX55YQknoK1NtEiRdC3bVyMGLqRnWV61BGMrrxLHApJ3k6CegRF3ByG2Tj8Jbuvh8byeBYB9PNgPiu",
  "key12": "cb8R8Haz1AyLLraybtAcnRApmUbPUraTU8UFCRA8TrpkuEs5uCLj2tVySbMpM2cmLFe7kMWaCascvcsDVsKsqcf",
  "key13": "XHndqL2XQH4T3qJDHBycoD7wP1Pj3ngzxE5uGyX5HnEQmZT2H6CKoqhjpaMWTsG4AC2X3X9jvLYtFrHGofApjMd",
  "key14": "5S37mZJgoByy2fsbkVirvFDpWJKUQv6U1NcRgJpKaFA4zhnSF2jZNECBBEy4Hbw5C29aRyp62UCVwV52zYVq8HSg",
  "key15": "WjDTr4qmFQSazfw7hHWpGr7ECEiT13dJaCpRXKL6NjgaJWrZJWMuETmakv2QMpeZdW6WP4a9bmqbB5bnft3GU6G",
  "key16": "3Nq3dUowez2UDPX75kqe3tMWU5MFtygn6wDZWPdYqqgNpc5NCv6wR8PE9SiQNyiqLVPvJB6tjHTWSMUT95YBvrho",
  "key17": "3CHjruZJeZ2RMaABTbzV5ag12G4pRiLDVYMwoqS2LwuAS7GxrpEat94giw9sktjUVcHQKQ1wfkngPaScNT18HYvU",
  "key18": "HtvMW6TgbmJczgi9PQyZTSKS2HiVJTmQ1YbmSfrSFgdo6SJgYHtQKTBBa7pLFvRBizRieUJqLtwT4Yr2NvFzWW9",
  "key19": "5CPn3vN79hJdAHcw171Lnd86YTiaxdRYK24NcqtcjZ9FzH1GQWbmpnomVMvwVE8h5EucudPj6xGrRntM9j1igSXR",
  "key20": "fpWkvYPua5dj2RsLUxCCpRw2FCUEzNVkX1gwSCnYTfXeySrxx9zZwCm5yAcxM6qobNjKojsVP7rLLu2Z7GEXjoh",
  "key21": "otYxGLeR6RUfz6dP5VmB6beUzFiFZRRiQabebsLE4PNgUzdUhfX365grixLP54Gczsf6tFziMv8hmq7tdm3kzJV",
  "key22": "5WzaY2EhcK74PLKUSkvroG9VwkBRYY3VC1qBcQPZzU5igAJ7KQyP3tuqoZ6UTywdQX1S1xtBVkRi3MeDjZNhefdd",
  "key23": "3wm4zPfgk7aySDUi2dqHFQU1D8o3vtNasLxqYT2jyyg5ChsTy1spAHhqeLSvcgWJijRL22Rjh95bvEubngdZM6CL",
  "key24": "48bcAL48ayKXJeGpWrjCZBg2NJsgvEWvHcUvgwqfzhappL11bdfNVfFhgZhVUzUiaPPJeoeLxkStbKfgW8NFMXmf",
  "key25": "5hRCP1Fk42wJK6TgXjqJDCVkjNRhbosom9qgwXG2wZARp4z547sRtEvJ2fJYnawUpGeu9WbaN9WuJZkNyuA5ZWd",
  "key26": "3eP8MXhrzh323zBMbkhjWYDnbdp4JKoWuLSCxQtjyERBhQymvVJFxVVdZpsGoqcoUQQg9Kj47i4JBjRH9oBBGpvG",
  "key27": "2eLgKp867hsnT417vhkF8NS7aSFzkZhBKDAqRTk21Rgvrzgm1BSTDDsbkaEhNsu2vGDr6eFYZKxYF7MRuJrQfvmL",
  "key28": "54nWgnwRfPzZCstFRaEU9Anjk5RT4HVkuWV1gyZK9BAA9uHvbGQni4UdXqkeQ4vJcvjVFzPChWpp5dFFozkmP7QU",
  "key29": "5KGenQCfc9iDP3eZmAmt41fzg7UtCXxiRGsBeXEgj2c8B5xcj5Hd1bnG6W7jD4w1DebbnW9GEJK4NUEzH4HZiD8B",
  "key30": "4cQ3t5nunxvxjTcZnBF3utuivaEn9e3Sew9RXXHaDCp4VXubfeNfGoVbpwC8VESswscbnjyzYPNoJUSsxGrmas7M",
  "key31": "5UdK3muZdmbD2ZmS4reLHtT5HVbYEtkvwT7Qf9fbWZcmsXxTfvvePndjt4MsqpQfxEbi2zsrk2fnoUaWbQyQVSb1",
  "key32": "5ivJfvFc2edFjUbgySKtR7s8UCKgdMEY3PGy63d7BR7cUK4HTU7pxvxz894XjQdkAgjEVUo4Y6kYT6oMLNVW2J5A",
  "key33": "5BhNaQNokTpydDKuUac9qmsWkQ9aF19xDZRfGhthxQWpE1b8hRpZejBVMvtyxECHTJn8R4sw7RTah1xvs8q2hpbs",
  "key34": "2YXBzpry6X5thbKercj9wuhDQkzQEMkarEZtrvP3H6iLVnGBGKvZpNQkaWaRhTRJMed6RbDWjyMhC3iX9vEhvsNk",
  "key35": "21U5f3i8v4DbJ2V4Wzo9Q33PDijbFFFF8XXKEo2qxmYe4D5UYos8wPBBUvfkAoP4LRwzrgie7RrZ2XfVtbiKaKii",
  "key36": "2js6VCquA2miAhjN1ibSJDKh1y8UbCbd3SJnCo36wAkj35Yqjw2XBCS6pcsVXxWhgith6HiX1x7Q4DDrKuFcwvrq",
  "key37": "62QSdK7zSj2YjiPH9f6S6jWrUngTw387qtYU4VB8o4gBThVccTzDZbiFqcnKNNy6TuDqCx9C6YSLYCxogb9JsdE8",
  "key38": "53wwKu517Fx55D2VyWnbz5R7t91EertK2nMXEqqYYpRMHMhbShFwhQY1ryJfg3kC1nJVeTxA7ouGn1bLh4Jv1eNL",
  "key39": "tSTyU87LZbFS1iz5giscqpsBZuAX7v5ikbwFNfdx5TvGLdon2mdpkSTS6nc4AE7i36jcmMnyvvN795jqFzCbLuj"
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
