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
    "2wEoynCdi6mt9wf6SuGmnns88t2T5UdNamLb3nzKtM9newqUkbbxJYzVs9ze2HeoaMaw44NVn4UsV7E7kiAEvhBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zzdihSUrVivdH3JJQrdZwSZ6q1jN4wzmUd8fpnomghd48MmgshPaDpy3CjJwE4MK6cL7Rw5gLrdaGXREBbv6cJM",
  "key1": "4gCtcv5vbW1crmZkgFWh2n4wzCYFb8crVCeFxtCXTWedmwPUQVgUFKThkzCLJKpLySET272BRGEcRDJMn7kuM9Bo",
  "key2": "4WTG79LpXjzxhcW2MxiUDyCvA3eMm1hUfsgdxSuRhcx6SJasSu6DB6f6iZcRSbXD76JE3M4evzeNwkSpqGdMWmsf",
  "key3": "4gpG8awuMEJS6jv6AkL72bezVS6HsjZGkLef5EonVwvB5J7NZsr3UtSn4ZwMCVMPnbe8FWbZ5m2vd6u13iPti6Xs",
  "key4": "5H7yxMZLMTW8JgvK3EgE5ntxPWwiwLmKdsBnGmg31p2WcmvohLU3FenSnrqeq2XFtEGXWPBdx4cMJSwHBVty6S6K",
  "key5": "31Ud75jUXcAYGnMENd4mVFrZdHWpQB9dSea57UTRQyUdRw43NCZfZpFtGUtHXBahwbKXMkvW7VJsxaCrx6Z4HsPM",
  "key6": "fucsN1C9YFBPZWBECCCRBzG4criAqsQkZz13t5TvpJWbARdXvnebnU3FxaizmTUwPKf5iDX41dR8N4mUw9GND5w",
  "key7": "5pwabnSRMVaXhdx8g4g4vV7VVPrvCuBdJwvwm47Bzs6kqh44QH5Gy8pQQx8jUbS3GPLK6TC22SuevWrnj1azaQut",
  "key8": "5bbJkyUBq73gWD1XxSabjV1iMdZetZLHZBYBXyvWKe3iPES9dy6ekkfAAAv2ZosR2QZhJhKo5R3a6i9uN14MJgU9",
  "key9": "6m6pce2B7sv3d5o4FVQBXCXqGAaejhC9UrEh5ksaTFrE8nGEnPzGmjuTvDnLoDxz4yvHn39xCGc1bvJ2ZxB4D1w",
  "key10": "3u1uFj9gYNivVJHSkdKdLW8xo263H7VcGaHfurp9usRsEQgMiNk3mfitBhh3aM6bRrjYGMmCRxTdFaCYYCMmCoKh",
  "key11": "5F9LwQ2DuQaApA9oLj6j77GptaktgfZiDvRPeyFeq8qr8F6KZhzhQTcfhoiJoMg4izJR9owQQkJc4FxAkJEW6fWN",
  "key12": "2LLnDJ28geHaQc79g4FEgM4ToVcRW1JBX4KK6GmJrgERpqdYwdH5KdRLgAqycTigw94k1d8j81Mz39fqZ7yLGqBM",
  "key13": "5kkTvHqEveC2zhpY8VoSd8gNiZcRLKFPdp6XLyN2kUDaiLFoDrrUMgDxeBJdkQJCkeTVZMyAxxkoqgxXRC6uQ5QU",
  "key14": "5pqNuoyN7vNVJxNJyQDvMDMFWJcas7V6SwKkZGqbndaP5CJ7UL1HVDMED3TZLjghpEkPbHJGeGhUnrJ2W815sXtT",
  "key15": "5JZwkuQDX5m6zmmbcXVPSJzuUXNNbkjpgWc8qn8bDC7jtDjj2dssko5HLb1b4WKpSbSGce55fZkvbmjsx8hcYv65",
  "key16": "3VDGm88X4Ra44S3yuosKboTx8DR9zvS5dLTqrdbJNbaiauQdfGLHNU2VYkpUcttan19nzrfvnrosUo3UF4Nkuz6f",
  "key17": "4GjsK5NnjPUitT13RZHZeVgnVEV3E91P6p9rfyDLXDKyQFrCxRndhMRCRJuCAaFNmjDCV1LzJTFEXZVGxYyRLQ1P",
  "key18": "4chWaRbiHcAtt9UCAvaGtAtFJvTkgp4ZSKGKSACXh5dEzTisjsNAYnpeJshUFs3jzxbj7VSbPvXxSczXPxP7DtTs",
  "key19": "4acH3eVntdXMaYk5Gm9e7uNnEguSFitiZVtFj48AA55Br3UkVY34jaGv54ruBmgcVbb1yMcYKoPpfvD4Ps4Kdcrr",
  "key20": "2RT8gM31qSnPKe3uhzbsEDnMZvaZ2V7aiL4EyaB4GsogKdCAnciLUSGWMkJi5xM3YvtYFpctsEEtkyEVaRh5f4tv",
  "key21": "3enzqFnz6nob3HSx3NobU4xcnLWnuvKja3ajMNYWpabpJtAbQsQtecCQgfxrUpPcngAVtMwUX7iUgovhRoJAH4mW",
  "key22": "aF3LT7cSnTkUQPTcztuqvi2VPVS34EyrVX4WzyHA6WdtFbBF5uZmXLriQUBWrFVPodtApLeJs3A9KppN5e1Gt4a",
  "key23": "7wRzdohMTvhEAaXfXR56D1vQcEUfLW2RM2eumBBFzvB3hwVhCmonxJkkyx8LT1pbBM7wMYptiviEdiKaDfW9U2a",
  "key24": "qgHdRAJ1XLChPXznqHHSfEQiE4BteDqMv4ASo46hDfSmaNjpkESBnivKqyrb4XpZAVHdrhgvKWzXQ1uLkUYmM7C",
  "key25": "vGuR8VoXJ5Hm4TFHJ2CSVPCUnR8AcNAA96RahcVzdRLXDNhNE5or7JY1hXTYcHVXQcNa2MapghmMqXDBZX2kE8C",
  "key26": "4poiJQ87xL7UPgp8hawy4EU3AgqxMmv3M9NvSNYivWsJ4f8M6hohd8LxzECgft7vHrMKyLMz39TN55nRSqqt8XJa",
  "key27": "uA7vgzDwRFt5idxLdA26ykMJHLzP2y5bhxDkMNyYiLTGunLRGM36QHkQ2BL5sAzqybAbSd78anDSnQ6XdRfYSqE",
  "key28": "2EKLNvDoU45byczvftDkjiJYXMBFKaj1i8UCpE6qBYBtz9wFcPN5maKPFhguFRSBVNXp6rbQmiaHhiEi9KfB284p",
  "key29": "5cFvT9yHdBiJyLkHchuodHdSgFHzJfZ1aEg1P5HfUpjruRhT2Ysw45fyKnLs2jFwhQYCQ93PgqSNJnUuFVoMkbxj",
  "key30": "VzAbh8xftFva3UjiN8XTgeE2hZPm4B5bp9fYXCmpNcKts8YpK8y6JRKVuty6Ei3fhUV2m9nT7T46xCC2bUncG1f",
  "key31": "23mDrDaEoNB2YCg84qmRNKkMtgQhWnsmXwZfsMMbUErR82SH6x8oGGP1sjrBRcYybhHzgMt2q5NYSCyRN37whv8T",
  "key32": "2BbADTGtB4yS6Sk4D4nCJ7AUiM2GXqhooHmeEhdABgYGMydUhYPb2s6Gu8C5SqFWL4xNdVcePtbsGdoqZ2CLoxBZ",
  "key33": "2RXAzE6PnMkKEM53AJJEgbKXWvfcNEAspjCkYMyBpZxr7LdKPYRowU1XpPR7JY2xNCYjzgrbYeivu1pWcuZrhdhA",
  "key34": "vgxyGBzdfr8spnWra8iU2RJHwwfKfzv8z6nyvJDx9XtsCN3pK7CkZw35Wo6f5jQQcZYoBMG6v9tEtCFVJCZ1JsQ",
  "key35": "3TeALP5TQktgz9opUaQ4XMH1ZpYNzQKUyK2DmHYVJSPTPrZYcxUhc7NGgvGMquzHSbdEEKXv88VKfndU4czscuwm",
  "key36": "2axnqheEY2Bp3s62McTAYnLhEznKLanAh5pJ1XiyCvZzkBpSnXjeXG44dN4JbDtjaHgc5CBuzEQbVojiLsVYZf2f",
  "key37": "3SaVp7quCxSZpfz2hCSZDKQQ6HMxPmyuqsUL8aaNHAZtXwSG4xoMJy78cunwLxRbR6De98V7oLqTUUSMiMzfzcnc",
  "key38": "2arCKioexvyMXeTzDTXBb7hV6p4tfGjaHLUkX6bqcUmao8RJ1awjTHH1Gx1C1TMu7SszvHbBAjuSvP7jM3CJ4cqG",
  "key39": "3YUjUQ8hFnRtzajoi6s1htFJ7BX5EkXHVEzYyAKTJvkGBU3o7aAYpiWiTVsxjEPDNLBHx5i5gmRS6YoVxFwTkNL3",
  "key40": "24qA1m1bNGsTvZx15z2ZmSR5V9j9qax1tw6vSzMYBpxTmfjcnZdnGBkgW2Fu4q18oyArKjLkJBhTWs5itf5RAF3y",
  "key41": "3GEQnuGFf3mEguL5CtdN1Fir8PBo8vnJiQcYzULfPxuvYa8XUNhJpGKEr2fqgu6C7pjo9F6gA4SvTAqNUqov8HBN",
  "key42": "DHco3ofqmHmRtfFsNqj1pingUaSoyqMN3V9kaefb19h8YUEyatU7rc6QMukkJnFCyBM33HXVShniADQ8Ut6Zcig",
  "key43": "22vTYkQphpkqzZBrmUPBA2kd2brgtcJ6khpzLey5D8epFhbr7FmNmwyriMdjkAbVe3txwL8R6aSLNXxkJVv6YmEi",
  "key44": "2aP7W92kUrgZonLuSHcA6iLwpBDeivX7SvfJuZgeBinjPFcmiR42eCBRaYFgcWKBbnZRYxncoCDABNJ2ZVmZmw7W",
  "key45": "47inr1v8DrbHBs8dLMszLovJ7JKqgCciT1Y76p1Ud9eFgt7nEHoQW1vJbfyAy9uVP2J2bHu7MECWoJEz4LWkCW4m"
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
