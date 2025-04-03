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
    "5z75LFS1SmFCYHCWvgKkSsShAeEpDhqBWsgR3US5HSc7mDiCExRtqeMkBrG98paahynAMc7YJe8Py5NiLaMzX42u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F53EYTErgs9UHjNRKvbWPKoHVkdSsNYCsVfFGw6SnU5GCG15pKhKHEaNSxydxpRYsKQmsH7QZ7Wyz45TCBqTmZP",
  "key1": "4v257iVwsB9wkULMBL5mgjBT4SHiZHCTziekRpnxdq4vyvnidCLGC1zLpuUV4Hm1vBLBxoQ31XfhCvoFjhudSvTF",
  "key2": "57tcWf88NUA5DADWrMRAB9dBaBFs8wiEdn5MTAoQHp5U4ZfRpFJtkpRMvvfnC7Lhmd76H6uTyh2jpYwhniUAAwmC",
  "key3": "3T66snfiAqYjdu9XB74MDENfUykPivKwDDGXVV5ueKmVGjj1E59DH5nesF5XXxBQvtJQsJ4H2sPpVRPjTJjbb5PV",
  "key4": "4j9V5LYyzWY9b3hQuALkg4M7h8ucNUex5ApYnutLt6BYDneRDE7a3MGxDUzjHBKu4BrvzmTdE3BaYGdcQFUWZUKR",
  "key5": "36W6VkTJfD4BbGYbt4jazg82QpUJViULdVBecN7JkjJbzupa1ikhbJ38ws9dLJYChfQuaTaGjUrMAirgPBy9H2Vs",
  "key6": "5iMde9uEvTdFSUM5twZic3f1Tmh89GfYTCuAP3fA93QU5gFVm2KjzbvDrL111GK4FQyjrabFexNrAgNx6huou9rJ",
  "key7": "4rv1BBJv3vi4MjXUkrgWrGp5z4tmA4rgXdfzcjskB9tKtC4pD27Dj1YG5wCHRf47Gy84PUYPM6ef85V4k2eBteoe",
  "key8": "3coS8kSbmpZgKG59yvo2sxaJmcuRt7sEF9wSiQC3XBBVrYEPoDeSFyUBqvE6BFFtNKHSUqX452RqGZXhtNqn5H79",
  "key9": "6boMe92JGuTfaEVZUhEsT2faoiApwgMPToT86HfDv4ak5HYYzqGzH7eGC7XcXsibKC3fqn4CTkWZKsvGaaBStfN",
  "key10": "3GZ3yJw2SqismttGB2TJmR2DRh6WU8PniJ9aGpgzVyDc7We2q2gDpQ8ogE9qyyP8GGzXR2mTcDy6MgTWh4F1PNi7",
  "key11": "2ky591U6JEjUhoC6JP5aB3aV4KcUqaeZ8z4BDia8HafsF2NPtfD5duobToVLsBuXg7RLK6Sk2Te72eehYqmbL7tT",
  "key12": "3Jf6vSWFiKB3AovGDrKoZmtbKcWqkXZznuckLtZ6LuVo3hBGuJapXNgz98Ph4yYVtwCCe7QmrQe52XubG2p36jAX",
  "key13": "4yj5aVuxyhx3dXZ9T4hzrCXjfzc7142LfNQGxUTeTrnEGzFZh8pkPdbAt4Mry7ZGbTXu4pRqsUozVb95aZcrZjSJ",
  "key14": "5GEYzR8JZewMLacuxgVhgobVvwqdux2LKdDPkdZagfbxF1vZSRAWU7XHFG1MtL3rjApfUKisoPzT1SM8wSU2kAH6",
  "key15": "52sUfqrdD58UNG1EAuRmaGatFSPwqsMWx5eXYp1kgDYRRdSxwXpn9SidzADNUkxQyxendbu54CFN9goKy5HZBTnU",
  "key16": "2gS7QZF1aS2Gf4qd4q4FFqG77E5QsUysrc2irYh2UtxUVDWmhzToXB9D12QPSiWgrKiqJttPYr4sScJAbo2WJK4Y",
  "key17": "4FauZk8PCVWdLDc5G9GqPUEi94TWQd5un9otnHtdvAWonA2uS1P79oXHvuWnHcPFKBvmXDaSkudAjir4Qs4wngFx",
  "key18": "2nURCPHDxFujkAJuiseg5jnxPMRv1cXEZ7Bkqgh5ar5xF9W2XbBxEjz8ChjQteVgj8UaJEwAarKMysPCWh8sgpM5",
  "key19": "JfnJmCgfUZT9wbsq6tG6JaJE73jPcuExPjTpthCQxy6Y5VD1cV5mDsFMFgjBLVqYnjbdv7VWqR963mqs45wF1UN",
  "key20": "4PVdpfPifapY8rGT8cNc42d8LChD4h8Rduryuct4om9ESNHEGS1ZQp6qVys2a44NC8WHDc8Ck1P1zBiCpuHioKfJ",
  "key21": "5DaBdHicDabhtdwbKsQrZHMvBHFPgxgJrbrtiK9BByJgX3DxMrxQ77n2DiW4gzSX6dtm8SFXWnZJF6S5GdLjwuCJ",
  "key22": "JBwjxeyArUyw2QUK2TgXnshuQ8H4QREUDjeXFYm1YF1eB8GpfCvmKj9fwQes7YLajdecj434J16xvHagT2n3mF9",
  "key23": "4xCKwqHhEttf9krFLums3Sb2TWZhGMEVT68SJaJKwYykjPH6CQ59b1PNUGA58vNieFTccYVd7UM6acS3hD6yev1F",
  "key24": "wovBfgA8SKuG7YHSRtDFVtUAve4t5NrvZaTxHxMsmkKJdMQiQ9owrkAeKrfUNKX6JcjViy94HqkxixYZMZdaXfT",
  "key25": "533hJCxSgHmyE9Ls9NfTktZrTvq1NUVfzZs9ahfVuHAQ66GfwX5Fi1nQ1J2cExwTRX9vQiHyCESshaSQ7S7rcXdK",
  "key26": "29hUEnEAT14ie49AJDwzvku7f7mLHRfWBCBP74ybxQM1t373LLVxbQWaPXyoyvwbb3gmVVx8ScWz3vqNut7x1ccb",
  "key27": "4rhVFx5Aq6hU6T2vvDSQ8LDGjZrFTMV28da4fdrLRn1yUceSuRMWBcGLSVp5f12MFfK9Vo6nW3xeC9wpj1Aht9aU",
  "key28": "3mcs4EyYSuXxudrMvALANz8jXQhsMQk55tzJTpAmqSARFD6RugmQuTnvTHrHiSc9UJFWRcRfuHc5JdjBLe28ejQJ",
  "key29": "4J7cawZ4mvJTvRUgzYx7JkgT52TGbNjxW1sx2HxUsgJhhunnA6NJFkGGxw6MyWnbrLGtHewBvh8tczP6kgxmjLDL",
  "key30": "qFCy5gvSrLMyU6umYcbh1pjZogLtFwS3qf1VY6Tz74kA169PBneAvkFGPZTUybAzWfz5cU1QJrCrJJyngTF9rSi",
  "key31": "3MwoHnDSR5y9RRtycZxJ7gUQZfR4QsSs2PLnBz7K9yE3XMeQHUhdD4gvn9wHQPgY65moZXT8ru8eySmBncHheNwJ",
  "key32": "3gMPMbSkszCwUoChv5hHsaua1KehNGMjk6tfG51uAQw8QAW4yZHCd4qpoMH38kgZcnxcwrCghKVZ83ELuGaCjkPk",
  "key33": "527hAGre5vnBZANinPHFKstdpTHLvv82TkGVRr8jA2AMWcw7CTw6yUnjNiMgc4eK91dTHDNfHztdTUW5JvBEpZQj",
  "key34": "436iVgpnoB9TVKT3pY1LG4iuUGrLzaE5ghdJRPSzqDy9Pdu9CzSnxd2DNZj3LdCKtMjbWJWccEf21j7GN6QMtAMq",
  "key35": "2WMAjZu5gmtjtQJk2Q2J4X6tGD5cRxF1An4Du3VXEyS6hhhQ1U1n2ioGx9EMq7EWHirLuYkFQqCv87hGJjUXqkfF",
  "key36": "65NMB2fzrvzbLJKMbdvHGcXz2tZCr8zapQJKrutbkRcNXwGBvBoneiMDo8SLwkvsGt6Jo6FTZLtg3Zb1QypRNLTR",
  "key37": "hQbFCKvErQSG3eio9cm3Dc2wj8Nd3JnMFFJTb82VABXRnnjdgJcR6hcgZbDGgwEy9y7ecpsSiXuqt3EE6mHMWzL",
  "key38": "e8nLVbrAKhVk3ikyb4MmvbZTa351Nye2tYn81YJBQpp3FhxJakZx2zpXNKCBwyu7wjYgtHjGV2ENYr8eeWeBmiV",
  "key39": "3ZB57Y48MEhFdRVD17KBK8Wdc7XMTNAcyUsefKLBC4LDv6pUicL3LrTXpn7Jx33FARirZXZiSTeTHKD1v5e5seNx",
  "key40": "3BWQs6rngSvmN3c3Yg4hVCNnTZUKDmdemaBJVt6zn3kQjwzMSAwBaaUgoTDt3E45gUP46Qku2hb7xUzQMEHvYeq2",
  "key41": "KpvtaUGrvfsJo6EK4B449LTFfnaiQ9bhfWFuVVbb5kE5kaq4RjbpydJ9PERmj5NT3mvCD1nogsJo6aMzKoAmZVF",
  "key42": "2gXthZnjsFuc7udmF4WThmi9krMqkXqgc7DBqKC48zw6s14zG92rPpG4VsyL9ttYRJQbfaeT6YSiUZEnXDw2n3eS",
  "key43": "3iksW1waJFTWpiLH6bgHYvV7c7dAgp7rMPQ5HHpqcnRnGHPfRprk3C14rYs1fEsgXxgk6htB9NzzR8ws3ESQFRWx",
  "key44": "5hzPgiYpDN4246jVS2gTdSvWM2Yq3wsBp5x7XLW9PJzdp2aonv965KzEdTX951n1SxmHUX6iMufV57ueT2yisTik",
  "key45": "4EWZVm9Y3au4rqA68Cin7iRXUNMyAfR4RQK1e77aGNNyiqEAna3cydbrcfbEHvpzMJEYutsj6LChbPXkzZQ61Xdq",
  "key46": "4dCAjYPiqPsXaZvzrzR553Dx1Dg7SxmTatUt853abRLCKj7RX4VXxEHGgRkfZYXQywdwWb8kpDBuSJSWZb96Xe47",
  "key47": "56Lamf76ce8CTMvT8T5i9DeVyuCjd5zNpUjcYEmpazvmdEozf3DxU7yGL3zKqff2fUVRboJyikmAEoycyqPDjtww"
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
