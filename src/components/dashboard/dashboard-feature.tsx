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
    "2BYZjyzKErWvb6CevsxyTR9EzQy64qkcD3vB7odhF1tzYPhcVdZF6t6quAe5UqSnbEwVyyKwvxbtRAXYzRkuYJ1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CEeNRySaR6j6FTVWdwir9cSWuzGpNf49RMRHuc9YWrL41AnGrbzyT24i5UDXcE5btaFdgU9dTTyJ8qoXVUSBTPh",
  "key1": "4j57dn8u6RUetu4MJijiMW1P4NA6LRNGcwRijMzmM5koLXefa6s6YhmEREyEwpyXj1RgpptSKhQyr5ETLYfLmA5y",
  "key2": "3rtsdt7PxiWBk75YfdYiAZHMQUmaoHR3JP7HicVy7fpoyj9v1TUkvZyc3HiVBU7CL8tLzCZuaUGE5abX2oWwWXLH",
  "key3": "3sXn2cnrPXSP1HEYArqTEnpuYveYkS7nk6j15HiMKRifBcehf4hdVmgDP7mXYRduXBLsxeKqZxTziQvysXrQe5i4",
  "key4": "5o6Wqat9Xne6hqDdXLzxW665kS5zM7frqveTePmFLFayGuxk7dQ9TGszK1tsbMt6qmUtQRVJYtdyyMMuHu6ASCfk",
  "key5": "3ciQzPBJ3tgMfuV1kNGDbZobPsGaziPR7xQxEuVt7BhwXaPSFbGFiQsYY78ftR7JPbAMDvXHYu1HFXDuAX4MEArE",
  "key6": "3trG9yMmUhcDAptkRFJAr5LJYeiLAEHkBfe2RzDHmVfih5aqR21ybHhZXgmiAGukGiGZtWb3ArkMUdub3wrGVYZ2",
  "key7": "3zLL3XgqSiHVo8KPjKMyQ1HbV77fHwGNfZujfLT6W5P44ayfqhuwHpsUefNu9SdsjAjbPDGuKiJx7kvPsRsCnvTq",
  "key8": "45JjNL1V3APpEVkMoMcMo1hakpLeJkWh1dE6mQpEj9Szc6UrkWjdkfGTR5SVo8MphBVAetZ9eVHu85nGsnr85mGo",
  "key9": "5zxcaYzL2S9ioge9RyAuLs1RH4NWMoPNmqX6ajNymNyPLuuEYiiKWkejeb91g6VK5mnbCYG8GhcX3dgqfTfbkrzo",
  "key10": "3eXdJdPTAUBV7KhMAytUQh8JvkySbY9XQZYLPNzoiVRrZF1C1tVyuwmAfeXarRdSEpGYA2bye2gUFmi6hyY3T2b4",
  "key11": "4bcHf3C895gGUyLjXd3g4S9FsjHBcqQ2DhcoQ1sXExpHEp3GfeHN52ipPW7cT8pow3iX1sjkBWLrkREdgc7whRmB",
  "key12": "zSvs3GQZtgcqyRpxRRASuHaCBhQctUiuwAgecgCUfYAa4VEhAFRvH497TKZwvY44vo233VpyrRWUHK755H3wshN",
  "key13": "5pFmVqvSdFDG32CAxuwmhwrx2vfx1jiU64hmrvt4raJDUmPiqj8wsPjkxgrqJYuKfeqkLjuQeqAYCyek96CUP7Ay",
  "key14": "5hFiYtrpab3z2GzXigJMk26mtQivfqrrBvgBUfsjc8dNRvs1bfD7DBJEXsiatTCRDVMpH566aKXKfd8Z1hW91U4B",
  "key15": "52aGQ4S5CrpyGTZ77KkNEXknwzFjeVVXKdjSBnsjFwBSXocdW64yTLfrUAgr8uLcS7E3KqDfSxCZtCmuq5a4vnxP",
  "key16": "3nVT2RfntUcKFLuCTQjBuSdMGJTUWBpYy8rUuoNEMusuugcgtHJG4Aoumt5E6AWcVNJVAi89qya9QXnPj8JRQzaX",
  "key17": "3RgQkpJUkAtM3CDy8HmNtL9KmjnvREuGquf92wTCjg7ZDsY4dQhGDnfUbdjrWWJJAPbYzAWPsd2c3bYwCwW6htT7",
  "key18": "3kqB7tWQKpFW2XYGS9rvhZBZtZ2AXd76HPb8AdG6xDiZ3SGAv6wuBAGaRtBJTbwsSWZGcyMeQCxnpXCeZgNGQRFX",
  "key19": "38pw19QtBb8HouGNYeQNUVQiYv4wPciQY3ugiQdPiKWoYasVmdsofswkrtFg3oHnRQGoUjfBZUzNDoHsFFGfcMq6",
  "key20": "5SN1HuPyhgsHNjC3ireN2ShYNkVwk1tVARKAE5ypZJ49KYfWS3omSyUgFF9QUcxuoUaJdKbhHwNKsPJ1y4YaCnLk",
  "key21": "5UEXh67HP6V3tmNTKpMLH6aHKXgnfQeJcAhrHbuWJeNbu2qf2S5GAMJyJ12hjRE6KVRsnN5AL3s3CA62ae9VkBGC",
  "key22": "3M98KNCgHbxBrtGMTXt8DNXmLhLSt1vNAFNUoA19khAMTWxUBjU7XkSXUURHm8uK9ML7LJEr3PZLkkm9PoiyzLJK",
  "key23": "2jD96FCaR9LUs1X2NTQ97TGBmHAUkj6omFb2B8F3cdjyHJnhbMUMdU3wJW4y6WurZzHAGJXhqwhyCpdLx66w1NVu",
  "key24": "2LZk2M4Mbv9CDKwwXLpJVXvtNwtz1vWZamsBT2gG4Fw7N6dvi6AsnBGdtqBg72tLiCQaZSgcy3RS1J4HjGWkQd4D",
  "key25": "te9K9fHdwsnrJ18NFqLnhhV96Fmb5xn4wPPawgYz5yoN8Ax7sbw7SM1MM75kLEhE1ReZEK1UKgJeqjwNNdcycgH",
  "key26": "ZyC9mfSNViqwGtpEQW6KSHC6M19qzFC46Wv2CmuZxyxQ15g9nCBr4spFrpqrJJuE9zLt2sDq8fif3WQJv6n6D3B",
  "key27": "pk1BPZktQYEU7PVN1tmBvJZ4hDgsoYgd7UgX4u5WuhSwJbaawc2UqwKChYD9opjbBCjkbNioqnqoTnPw5MUfEf5",
  "key28": "4T5RKQR3pbpZjfrEDvVWbjHCT92YLpF5aJfYgxeKT3byUbyhk5xg6193Nw7ehQa6b5LTMWvfyXnkg77Jg1rSSAsr",
  "key29": "3xdkUHZfYgDqq5fCtQmCQNWVZLLwZQcH8mQVEye5jXvEk1HPghepA5Ekwdn7RURdBEyhMu4gyZWze3CA1AHg4mre",
  "key30": "37FwiHqnsHKKisK5hBQR8D8fzV29Eva3grTDncPax1iLMFTNFypiDWMcmBjhJ97snVoL6YaQXj92bWk78UNGsJm6",
  "key31": "2zLDtRjxWkk5DXZPEKPUPBe6jwSwPJ6MbqSvKAEGenpNMAaHjNbV3yFJXKwxJH3veY6Rm1gf8THxXnw7YY32esa5",
  "key32": "5FSpTKcwFdjKfefsxdMVGWXH51Sa7NgDSqUBZ9KBEB9qCZXi2z1Mdkyt8vSdEQ1Ryf3YBSMcBBavMzZbQeGs6LkC",
  "key33": "x2jztQfNSuhErwLonZeWDs7AswGD95hmndzu54v6b4Lo6ig6wvytPMZkrnM1xDkJk8zaqAmvFkLisTKJx7wj3g9",
  "key34": "27iyg723VVhiinKw7Msm2jT7iNvTihEsag6hVvZUc1T3DND3yWFjHtuBQAawaEQKhKDozxBq33q7ZJrw37HoDSwt",
  "key35": "ahM79dxaeXe5K7PcXhsELmvwzkyuamw54btxRFeFZFYyYJ6r1EoCkESbJwdU8EKmrpyoS1zF7Lt7TBiGL4eANXE",
  "key36": "4BmLm1tRag1YECvZ6WEksMLDebfLheQ7G9N2CEYiwu7AfhkytRDBB144WjFBn2cP4b5QBcu72JDVG2KpLbcobjse",
  "key37": "4ToZsKHUDaGo947cTvNNWRWdWmbvvcqGafYSN8QV8afPZocMCgy7Yk9gDg3oGv11apo8GZ9AtZd38VCAuSeaZpyX",
  "key38": "3xZaHuo7td6ZB2nRdGiDti8cEjpVgcKfWtSk4sYyRTpnToVAp5hFru5fTQChPthxGbCok6JFajPv2tSz5PsDQsgF",
  "key39": "5E8W4zYACvDa2DLgoxpEHcrdvvg2mbj62HvcHbT9SwteWebp5SwhqY7Ug9758dAE9jvxttMczFZGbJZ6w86BXssE",
  "key40": "62fv2Zj2JaqmAT34fygh6rvS47tTSq6gidFz3wvrsckaZftYXVsxoMEvKiEmayTgyJoDP3Yt2xL7saKUpDNcfEHk",
  "key41": "7EkTUJQ1w1hNA3LFpmPi5WudYMZaVhYFEwgmsEQHPNrv6azPLSKQsdJ2LmdByc6J3PemHDKpJTkHQAzD299HCUZ",
  "key42": "5cxWsZ13ejewEvpmKZi75AoezZLzSWQpDzdWajiHevpmBY2TKVu9WB6udqVKQHi8n9UwEF2qHferCAiwBo6FWYwX",
  "key43": "2TfhNij8hK5dcipLTh1cstoACL4LL4Db7bNvFihDt1T2zccT9JE5qby8FSg5Ai87xX123wdWoqK2YG34GKfGNXdP",
  "key44": "4Ep2tAYAkJRSmWjKVYM85LUMZU3jKqxhiP8MeqNjLyTXewsRDLkHrtG6KU2nwjVYFsU3rUHZo2KRnJYupbzvEi9J",
  "key45": "1DvLkbBHL5xy6p6dAz9WNfQ4rwnQkoSnw4djckuzbArPb4V99XMJYny4QqUZRXSRRfhNaDExWGAW9Lqo5Qc4ai1",
  "key46": "4Q3qV4wrLtGHbUjH2zerjcJQvHx4rNCDtGFx3KBQx3ZJ25GavzWHjeKt1YKSgrUAwoupf1D2ohnHNjeMpHsRLmpY",
  "key47": "4hSL8Nc8vyaZLhcvWsvJT1EeAH5PvouDd87saVWUjymViTessTjFG45tqp7qTtfcdDHQtaMNtMVkQrVkKU2ttwX5",
  "key48": "3FkJ2Situ8VqBDbz7LvWuA62TwU31nf2q1zMSYrHfJzN3WasRKzjdBnQM5zoPVw4uQWvsKb1qkgJqDYFaBxAawgr"
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
