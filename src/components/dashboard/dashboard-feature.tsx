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
    "4Ms8BUxmTf4BemNvHixsvyCqXeiGKbt6wnwAafbuQjAwKAhGqC5wUdwXPJPsuT3Prab1KFWukUz9653vLdbrCcW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yxtnLtQkTfp1gMiP8tEenr8R88mQLaJMDSKKHpvsGoLxjFd5iWhQ5joVBM1zc7CQfS5wmGtvVGDGsmUCbMJ57qa",
  "key1": "27NDmVF2Q1PXXQWupeEX7xiFiwusTkgx7vkpu154RSMmiY1gSjLsqa96SWhSUEKrQhZk7YQTxH5ctDHw9GkgMeMK",
  "key2": "5tGXkVhEUYRQrq55UGFxLEMpTH6xkFg47BA8v39Bs77eEuzEezBsJ8osfT3NBD8amGzgyRiXwDdL6NpdpGLnQGAC",
  "key3": "3iwynB7u69GuTJ85VdUdEvVSyah31Mh9zWGJ7XpCdNxLK1fkaCXc4QsPXaGMkRKh3H6cErMbhVg55p9SCvTUxvs8",
  "key4": "sQGfwWLfFLCpqKgnUFym1Vk5LfrnuBBU57detQEM5tubF6XvMB5iK2qfEWDEUf9fvqWRyJR3Uz1dKbzvwxbussv",
  "key5": "4L8tPv845uZe2qSEUSdvhN7nZfBe6JMjLzTXt8Hogzo2K4XZXGHFG4Zamoo12RZEYvFQsrZpN9xtWNQYfAFMzfwo",
  "key6": "3sgCbKrisUHJbXYRAV46G6Lr48ZymXD28zVsbZLZBi9wcaZzTEyA5v6FctLesaGurx3jvGaQnQZWCRm9MSKzknCg",
  "key7": "QnCiwTwHUg3i7SaBbqfrR24PYNfX43zZP3Hh9ibNwTGSwkc7u8Mt7b9wfH8D6r7X9nKNEcfHW28LQ8SdYZaZwvH",
  "key8": "2bbZTm9KKev2sZFG1WWVbpMq6pwQPPMRsWssAyFjeGxznKd81MxMEdE9D3bErWCEMn7wxX2bD5dR6ByQ9fbTdiQb",
  "key9": "iC9CtGcW4B65Ps8skv8qrEqY8jMqnJ51iJj3tWjMtvkCS4cckMG6qip5S7UfqAQUuvr2fSG3mksSN6v7njL9AiW",
  "key10": "5zpsCK89sWjMUiC8SnfhLMoH3XDXQGYrcJv4yQoyGS1BEHge9ocZ319KxuhakJ5DAMPDGDEzKCRAhhM65K4y4c42",
  "key11": "4eWws3S9CLQKZ6f878f9R2UDmFx3QUuvtjhg6zETwhmZF4ZuMmS1Pbf1vTCs9nqnyTGHyM3xUZmDNozi6iitXNsR",
  "key12": "5Z7y1MQmX75z5bNENapU61eFCkRcQHkWbS7HFAEkZawPTxrQ2twhcTXViPqwAg2VLpV2QAdheUgCVaenTy4qzJAT",
  "key13": "3jiPHjAzt4Aakc33SdBEwLadYc2geXieWv45zhAx7QpBVG67ZD29G2sEMQ57RjzWfVqP6WAZX9W4ZZBbtfrJZsFu",
  "key14": "2u1ui9s8ghbvRg7MzvHn6Uvx9ibtQHDquR8phm5acKG5z5dYtXTfLasrBZRhazwd7n9cudG4HwyBkFPrGmc6D5KT",
  "key15": "MFGjjJ7irDcrT51TRVWULpczav9zjLc6VJ7xzC9c4yVnLQFZ83vRsQuLRPfzuNvG3LnyyCP98FK4k2HvVhDqeTv",
  "key16": "AN2w4B4C4LM5pUsp7hWoWpUK7YWDvs1rHvybHR57AKTvzdyF6qizmjqA6hmbnxVmNVzjREdxjxgrhs5JeZvjcsL",
  "key17": "51KrUqrWVpakjTJ7MPVA5Fn3Sss5uR4RuAkyMVF51qJ4vC1K5VafrpnAva8TUKStt6TTVVDQCxQ18x1hqWxtW9YY",
  "key18": "4Kf6HbvB3mG7TdAA2k3hwcTccNPfkf3LfbcPzfnJJyCwj8mV24UenQbSdNQ1BXomiQSLNrVF1186CyrRVsHPmw2f",
  "key19": "4jVP1kAabmoEPm4fpQo29NoyzkXwLJ35erfZxy92KHag9YJfDwpBeSszDj5GjYEseV4tAQJyxtQSJ7jCPRZrtpXU",
  "key20": "4MoFuGubophKHpunbsNvPEn5cAmAz7mQwtD15neeaLrGip27R34kw7BX2Vg5Nn2dy9dc5nmfZJqrD7TvPULYbfCK",
  "key21": "2QQztAiRAtMGSUfMdZhQBM4XvwhGHSnKu5jNuVdWauB4mdyA5AGrGT5WrrazMjggr6LQLByavGGjWornbQbagWPT",
  "key22": "4D9VL6jWhjUNq9yswY7vVQxWA5bbM3YYoVkKJzDhwwmzpMdJ1Q2gRQswrHCAndQKEa5E8NvBTgkQqck5hCKzEtYL",
  "key23": "54KRwrzN8FuS6zAJ2Riex5393xdvR4w2ti96NXPRqpCy9SVTSCUjdYuodiGdgpntWXjbBnRUAnzZo9kaMWxqA4vi",
  "key24": "UEvtK4idXyLkmkwBMCAVDoQr4CGBn8xKpxnGWLXYCSwjfGePyA9XEeTYdRy7TmzC9W6UHdJ8QGdCuwUbgoSk9Fo",
  "key25": "mH8MDKYBk543hkhbbUFcRMJRBPSpk9BW4G3iUqmovyKVGm5ukLBjLBe85ntKjZBbVuV1B3YFBgCefq4RFHDBT33",
  "key26": "2LJXG5ZsuDWNdMneDZ2saHfBVMjkYwcESWgdc7g77wALhDEJHtpaGHB8mDmnUY1pi5c7Cex2fR2DKFJxX4yZpkZ3",
  "key27": "NPKQiXvpvkPeRgvaBH4gy2zrTCRTuegUivAyqeU6TcG9u2Xyj4inUK9zDak6TdjxFbctzHfsvEciMVcqrxBDuMH",
  "key28": "2H39ZCWzQumjRowZhBuEE8PKi4gVdmx7NyY6F4Yftr5zCC9hwoLk63dV8YxC3wZ7z8rdEVBNLkLQutxDPp9tTttQ",
  "key29": "2iDUHyz21cVoe2DSAqkeng5xPBW8xZHqM1gJd5F8Pgh9bG7xFXcCPx6XFLkPVCRkvgdrxoQ7z8rQ7TRCYXe8Lzkq",
  "key30": "tBdQaHCaH9h8XNUXpRU16Dpmmv12dgSGwaEEs7a1KyocaHB1M3K5zzp5hRXBQeb5QfReh6ExkY2CiSZAaNAEp6P",
  "key31": "4iS8VQxwJWMdALYKmYF7ANLAHAZ3TnhfWPUprkfqQ5AKNm4eFcLTEgs2Nd5D4mpZAkGdkeXobK6JnoEmw3yBSXmi",
  "key32": "CgUB4tJUbd3wx6yv6iKo82YAZBd3uFAJmskrkBL3C2b4KTdLNxQ4Fw5vorFW1iWmhvizSyEeR5k546pymMJVPmL",
  "key33": "2EKoxc6MR2nKAZPfksP9yeaJ6RRFVaACYwjgDVAk2uMkoaVcpnXBaHGunh1wp34LUbLt7FQiJi9X9ArXJx2BBbvD",
  "key34": "3LCudcEL6kybamohtaBxmMHuWXsjsjr1QjvLgepYZQFcF27Hk8FpKoBMWrHdX36hGThnFYFhsdERHaYjDmrQ7xNT",
  "key35": "ckccXNeYump7gAir3fG2RAREDbQRvjnfaJyyXbimxWfAp7SMFL83XdU5eS3GGGpYhBj8igpYRo9qkZuUJzztDCb",
  "key36": "3oPHFFMgy33MuShmYoE6qUvGYFmmX6zJMSRJ2BLfz262x3y9ci9iwEf8HYM9u5yq8tjvEC57esY8YrA5SuwCa8Jj",
  "key37": "362TNU5jxtV1PrL4ayxDweA1dkBRNE74dNqDJPjDyt7wi4pFVy3TNDK8v3JxC2oYHYWLd1TCngXDijWYiZb6RWvg",
  "key38": "2oN1J5Enat7DX7sX6H3ridHqAPrskAdVMCjr1ZW3RCtBt9i3gTuL4jYXfjm7mVyhJ4Co58iz1KEiY7qAuMV5zKkq",
  "key39": "4v9QTUfgPa56eLnXaAD2Kk8wpfDKmpXMnrrD9dADpEWZkMdxmrhYvpkJMjQXF22Z44shJeGmXmPWfWy5qe9SqEEg",
  "key40": "rAi5WUjxAU5HdigTt4BPRvQ5h4T7WVsdffa8eMBDaA3xageT87iCVVGy8Eq1akMgtoLkbkY5stiyd951DJKJiix",
  "key41": "SuhPHaFWtFmjvenseCT1juo2MhKQUu7d9o5Wivqts7s5EnpteDJYH5LDksE44mRV4WZ1jDK86h7e1AcdKXAZPFy",
  "key42": "Ets4Rvmu36UkAr4hKA35W1M4pkSPP9KeTYzoWkMbQcWJ275M4Sa2wZrCZxjLfb71zaxTKdrqejzkzXfd5529b1i",
  "key43": "2vagdtXAXmNX8b9jEkCmccdxjWauwm11iR5KhgLsS7Z7yDiexgnTE988JAiuPKFiu6XBZ55vn4jaF385H32RLY9p",
  "key44": "44WYkUv8yWspDQALURUFf68vpui1gQfrgGLw1F8Ye1BbgB97DefQSqjaGQcz8CUtQJCPSNDsDs1hdex5JNvTy4nZ",
  "key45": "5jUwids7jWMuiTP2ANahHk2c2bFqoa3Lgde8p1pxrj6Ny3gk4rbw8ZMoe9avpXtG9SMNorEs3kxPjdofKKg4hKCj",
  "key46": "Hv836f5TjrfzQy1QZRdCcht2eEUogB5EofihnZdLNdHBm3xa5wFsUyrzPSFp5SvDuFYgk3qTv5522Y4jgNBS5Sb",
  "key47": "2HMbe87eCE1dxVHApEFh1rGjNSAhX7AcMLrnxLALwMxn2djUikwnUF7YUBC9TFb2ENjvciwRcdQtsBnGNGHDBCyd",
  "key48": "3maQgDx6BC2EN1MPrpX1PgBDQcTsYK2q9d862D794h7JcvZQxH8fwWeBtx1d9zyzkmFNCUJGJdji65oXyg7VczSD",
  "key49": "46PkDk5LnunSriGE1JSbQv9YmbkWxn6Bfc3U9DGE9FJ28VRVYCCsUFEBZCd271m55CRhZY5FdPKNBU81MsgH6GxG"
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
