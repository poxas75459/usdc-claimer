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
    "2hFwdMDZjCsjicRcxpKtnvsnkSsNXJjL9Wma1sRjqKvEWQeAgwnh966MCf7BF27Nu2HhTxJgcCYpCAvEjyvQ3V3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kJAXk7BUUbjdjhVSY5ZphCqFGH18fh79uYLk78Vawn74NHLnm7vNmUAHhMWYTyNit1g9XpkYtLb98XAfs2MNyiZ",
  "key1": "4AUnZApsMVwtub4eRYVxG342FTFgZcwNPCXMizWn4yCyxUfh7yYVuYEaJ1w3b2yLS99CPzgufUmHEUtacLNc4imm",
  "key2": "4TE1UuxfC59XkRabDHW3uBP6cME9ZbMehYGJibEN2RBY4yqFhQJ9LRSmtcboik89mUSpDvr4Auzj3FKKiMjAi6sN",
  "key3": "4pscHT1sQm355MiadugrM4dtR4yDjygUY6qE5oMSLy9ktKtVWJgqFstDPiQeoXGncb4PApnKauCNdKfVrPvZ7KTv",
  "key4": "iyKQiWWJJJw2vnv3yYzQMTJxw3aoCu6H6xnWjSXLJQ5wFFhi6PPj4KwbvvFBkky3fgTWNhZX7x3pq1vgwhVLhou",
  "key5": "pgr8ADqpR7XKGatRZxvMuBakHe4vZ4Bbk1c84sYSFCARs2UDb2G12FEJagbvhXmQoQbqqXHmPhNWu8LBdcf6pYc",
  "key6": "2uyaDfjiie2mKcueRuwJxUnLw2xnkcDnjgzt8GQzG9ghKVrtMH8U1xsJMbnAsVZSXjEgk6xEScCbhLf9zVX3SuqE",
  "key7": "4SPNpHGHvXTz1pSCKuFBA7J3nk8FmbVZmifWHQayPmMgC3g26QyacjYWj5ESFCdrfRKP2eDrLbRMUUSvC1Jg4K3h",
  "key8": "35VHWSEi69LKafCMnHc2wKdbJBjWaGYiP6cjeQ9LxQUj5e7Q26r1tn6ZmYikYWCoEvZibSPhkFrHy9hErUd2pKdz",
  "key9": "4p4iJw4esAVjJbQH7tuSF7qhK6GACcpNHYBxrzH2CP26N25gLxKVwV9zFdpQVK1dDC1VxyG9jriXavaL5XrUnfy7",
  "key10": "55tv58H1LXebHNBK8VnCAWPTdWwLJ1UUDCjv3aRx8C24Dsk8qWcyttNipHNBk1feAXvTbDe115QfWPE9jizVtkZu",
  "key11": "2SzrethMSe5Tv2dYzyMZLUVkBcESaqJmjNXC9zmvA9irSyC6bdqgWZgvfaXt61ogGPbp1YaXZePLwSTAs5M73r37",
  "key12": "59h3JuYgFzA8V29Y34Uh7CmbwzizE2XeycHyoyjnvxMPi1Vx9tvaCQxAJtpvRDjWwWKuuEx8w6aL25A7zRiFTcwv",
  "key13": "7U1mhGNpGuhjPPR76cfgWqxvYxQFcqcydPnd5ebNeoLrNAih8o33JfT7nHtzcHETT66aJmPP4jEzVAwC4BqjjyC",
  "key14": "2rgdSEPmvG6vtXYR5z6HMbBEZSW1uiPkZg65ByvPu3ziL1TJZ27SfH86aM8etgRYvYvRrRJoUP32BeeQYtCtZSAn",
  "key15": "5n3TQGkYUhkdAYKx7fBjQnt4gMoYvFZzqVB2Zq2PDsruVvyaEtFE1rqiqG7mr9WSRmHJxd8QCN7zvt4JVPMphRzU",
  "key16": "4gC3Lafg7Tk7RGfHtBboKFLmm4yhprv9FQZhXB6vRHuL87M4H9CmWx9CxcRMv1PTvQNfo7FcQVwuuffFupRxZCAr",
  "key17": "4NXFaYmuTkxe6WrcKmpQK889q51XzeJ5TWjKJAEDRMeAPjtQ6eWLiUavjvU3xaUuYUHtRsRX4VtrVSBiqKy1xNB6",
  "key18": "3TzZy7b4zs4xKJA21Vw4eQ9yxHiAaqRwrzUezvWUHxs2VePbaMgJfRT4vKi5six879KZXDNVNT6KHPxoMvEfRdyk",
  "key19": "4eJBK4Nyx79DjBKdtQttP3rzL5AAk2AyYxDQ6xK9WhWs9KQDVicGe9pP7QRhq1cWBN2d1B4rxv11mXz2vVzA9ZZf",
  "key20": "2b4FCRAJxrbTjMZkNtvmAPHkHcbu9ui4gUeZnC2AJ66Kgx8dTJwjjm6aTnKuqR76QgXhrmwfTE7LVY7rC1qo4rvL",
  "key21": "RGkZmmr8PgrX8K972FFPGUsnXYTF4B1vePE75SAMqX9Y3kZbQgGxF4exEeerbKC8zAZ34KQ7jR5woM8wQRLp21Y",
  "key22": "5kiX63aK66LaawRKQPP7uKfukWaQwGZshse6oYYD9nqZJTyRMsbfhVtdU55kJ13VusyBCkYrmqgMMjT6TypMUtM2",
  "key23": "jpGHy6U7oqoSzTNAvihPDRuKzCbm4488CfdFQmB57duR8AUc8grjsUPaCgqJxNvTyVUu9H41uimrfrPZPifMRcH",
  "key24": "24ZBormTYfjyXNgmHZHsT2ERArKgRS7fghj3diuwbYyU3M42n7ucfC5E9iPjCMBAHJWSjJ4uEC5yTezhL7mc1G8p",
  "key25": "MGLn7oW5AgLiE7uYsU6JgyPP9YGtEtEvA7w6Kdx5tR3GQFVyVbYKbN27dneR71kpBS7JVe5A4ZMnumkRQ1h7Zkr",
  "key26": "2DWV2p42fPPmnwJ7TnQBvpp1vJYwo4ZXAzAm4svu3QxVRDnfnScu6rpKyhe9KqKxXnLsxADtprVheaveMukgZwmB",
  "key27": "4nc9hjywbsusN37QKq1kGB6kphQexkFcuVvtTXwdRTyshBnrL9wWwNj2HmpoUHkYSWZAVR9znayQVSBs4dGX5AZ",
  "key28": "nHEhn5nsXd2vwYv6XipjNcqNJiDGesspzrujYqLJcfJ2TG6947H8VHkgLJNuBQD5MHfz4jreDHZDSMxYfAVL3fk",
  "key29": "Cpb8bRSkxRiEyTxEsohUFkpdcfLgWguPKn9JLATHTvNXAC2DaYfGSzPuKbdEbYYWPL1Kxu9Lr1SoLmuQXfvvj8h",
  "key30": "44phmXsrJTgh9wAHna9wkuaz2yKrHffj1HFNkZyCjybdr6HaDnBKYQ8ZpZafK143HHwu5GbSUPKJuYeUyzFHmR6D",
  "key31": "4aXGmws6HzPzgMq6WViQC1pfSEub7FJ8HXwRFfXrY2wnTP2NY1qYCBVx2cA7CwQJQGYHZpPLx4MvWYWpDpr1zBY6",
  "key32": "YvGuWDQZmkcAC8vcEUPBnxYkT4xiPgXjoX2Ps6havA4umWBrdMqfUyLhd291oB5XRrnN5vcL9DRjiXyKXepWNTy",
  "key33": "2ZosMZWJG4ruWm5KHaHMbmFQRxqA3cdCN6t6uiF5ajFv1RHBGLM6eFCm1zrQ8Pz4DAGGK8LRiaZvatju9CruXgBt",
  "key34": "6yK1BNvrVMmUi3tpDYJRmP7KkeQi4j8FR3NG2Cyux8zKtCBPQsbv1srym1tmHhZxERTAsmy19VkAArHj6bMwapE",
  "key35": "kkKqJTdMAu3u7QWeGcQFeCWe9YVfD2u2qFEnGZaEiFf7UwQ1Y3VtgTVVrMrPJ6Uq6tFuAEZcp7xMnkcrodqExFf",
  "key36": "2KkuCM3MEcBuBy7FT7avzM3XLuP2kuTdQKRdgDyV6WkhND6a95X8Lv6XrAscjQGetu8YAvaHjEHSgZddUQrDY6Yk",
  "key37": "cixqTTvPGaU4zAKMygn9F9MTYes4tPftZwK1q9zNh9mzdPwRAJRqRH55CkS8CH3v5P8dS8Tn9T3pahjEavV1esZ",
  "key38": "5YJyENXCqXcZXpPonN886UcxVTkGhu6CttT2eSV3R57yQ3rztpgu7hmotctGN95MFHjEZbWepXdjPSqGKJyJph4",
  "key39": "4BBC2JSL7CBhhtWagL55d6EdFx9Gx9bCxntfCVeDXdbfNroiSENY1UphybgoNrufVHKJoMeQKnVYPQyMfeHEqdDt",
  "key40": "574CmkRKDabs4kEScHhZdbD1RKM7TzaPXe9AsMXz461tnz29Fua731gXqphAD6mkevH8Hp3nccqqRqoQNtvrpi1K",
  "key41": "2tt5z99zSmwmLDbhz2GrVHKAsGhB3djFYzsU3iN2k8XFhygtk6WRQXTBNXFtwUKdhCwKeUbfW1fi1B3brNNbgPTm",
  "key42": "2TYezszu6figRjXCpK7E5EWG5Dpwf56gg7seBF9Uq9puJfyHKG9cLrRhU2U9XgnWDmXiabagrEPhNEVwk3NsYcZR",
  "key43": "AeWeZPjDTz5r6mHoxvRR27R511CsMqTMQjeD2BAueEAxEJcw1xieUNoesYDKeGS93PR9nuFGiHJnafVTANcmzCX",
  "key44": "4ePMLzAyyuofEPenWbbLe7aEj7oCjTqMoGCp6CrTgQuL8acwPxz2PzAaQ7RqTRirZAWVuuAv7odCHMu3Fj7vkqTZ",
  "key45": "4TGG71JA6MKhqSSrhY8a18cpFP6BTknU6zWxUoUdPsSBUfzFUUcH7ic1nMX8TBupbdJwN4u8b6ttYKChUtEGE59N",
  "key46": "4Czd2xMBfpU2xicfSGjChYsa5RD8M4HH4XNChd95EiWyQEaT6CAGHezCjzQa45RtffgGhHramrhXaSpJcwiiwTgo",
  "key47": "61Bbgdnn98Gt4iGFXufKNV9ZYLRxQotvFPpgdPfH9Kp81a5TYritrizPgdwg1APGw7hCKAdEaY9EA5Q4fahcVafw"
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
