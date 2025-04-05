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
    "5eSG7pjJdHyDkDwg23V1ajVE1WBmXm9r2Es2MbBWSmPpbGD7cA6CiA21uoEdvQ6XrQ9NuAndo8hKyWUVTV7Us525"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uMRDZ7KN82oegvyJA1nGs3BtBZdknUiznpqSETuVASwqvrCiBP9EeGcfykiK4tBq7AD8aWPGA2gaaUupkm6C3Yj",
  "key1": "4FCps7cHimtUcDfxnp9m6MMH72GcscdUpps8RcKBnWbpYYkmZRzGmhxpupdqbPj7z4fu2aT9Ceec2yk6H88umATh",
  "key2": "3nyRCAADBDWkTTCUnJwtXxrAzbGCWGt9wuBnPQAacCyf3duebUWbUjqgAy68B7duiAWbmpU2PTR3dqKbmqcrR2jR",
  "key3": "2vYYfj1jsHcrkpgvQtVCW8LY12WYuJyb7pZLzoTGEbzbSpWFJ1bXD7MSYmzCHeraW7pHWGucdQ7ycA8qzN7nSDVU",
  "key4": "3kMTeff88J77xfTzrfAUntaD915WLvpddTMByNbnan39p7j9RNcCcEBAM6aiN22HE8VMArjgTtyDwaZshxyxg2WJ",
  "key5": "3fjmRyr4VRuMKYth8Q3jxNRFyvGstCDVCmy9Wt29h9JuzAjjZu4fGnoRZSo2zan2YHrzRPs2WZrBxJGCCdpkGedK",
  "key6": "5at26nT76caxbetwtCctevcNepG5xSoWZmj1JyVbaRBtydPbartjJrTxTAcozgEr8SrE6VQ9LFcHMpC1fLi4hQXC",
  "key7": "2PHUHbFNXJ5FjGxbLAFa8nScgwY2pfbmL9ardRXfZkzaviEL4XdF3qz5HT1QAjsjtFGY3mjnfkJGWKEcdxXnJQd7",
  "key8": "5KfitSUJ6NojGGDp9V9NmQNAZG2js1Y9c5ACzedxQ6Hiky6Uss1Y1LgLthB3qCVSeXqTmsjiCzA4BrvjpBCP6soe",
  "key9": "4rg5Vs937esVZfS2E6xQe9MPhTqMH3WnvAkX8gd6DvDFjj8UY55CMXXtnQNEK8HdVePsqf9w5U75eBsrFyzGn3Tc",
  "key10": "2MjWSKErZvDfxWki4QgLbdDdTTNP91DobAE63xr5vw8NuD4RH9K4bmSDVSbPhKnQeFLKa95M7SeRDptR51vYXMjt",
  "key11": "5MAgcB3xFZMv2dYpTPTexf65MZnhh4oH8CEtZs1jahCZjYt6dbDTuwmU8UaKabWqwLJBpoUGPwTM252SkbV7NuzN",
  "key12": "3ZvgUJdKAnrmeFABRbTbpw8X5334CtLcS3J6HDRebThJYfyXsJk7DyJAjdeTwMR1Poej4yX3SMUhrhewHqyGrThY",
  "key13": "2pzVAZrqgBWocbDZyFgVN6EdLPtGi9kgm3myVaQFX3sS8b5ibsBiiiuaeLijHcixSepjGvxtwXsgmi487q4kTJ21",
  "key14": "3k27mdSuEYAasZi6iAKY9v8TbGQndiDs2PZUv2zs1xXyLb4LzysAepLhLuoHQWVtyT4M3QxsoFe5DNNtbjs3daVm",
  "key15": "2Sq7ife556EpJdU7sLuBYwqqWcVDkDAEk5FtcwmdxhSW9WnwPCZX5b9s67ZnxXwf5c3kZcBdvQiDHN9AzB518tQc",
  "key16": "NLeNSgcVpJDcWQr7qE2ypPyhCNMXMCwPLEiUzguQHSnBgcda21XxEUTDNcsmEJjBBYVwPb6L8hm1q4YiUF1mnHz",
  "key17": "6y7RPqb7iiNVEw7w8C7kaBouHHNt5G6tVjzg9FJuaaPtN3McdSwnbi7eCr4xa2NoY1EPUhJ64FzhNxBx6zziDi7",
  "key18": "2Fsr85f1GWnfZ8Hr5AGVEeJZqTTbHhaXNQz7ZhJ6oRNWthtGEWegLenEtKDEs5cCyePjuZ6mEmmgFqdfbCR1XDX8",
  "key19": "4BjJdj23Qd6v5gTk3aQFBrQNYUoF37PZPQhLriKaJ9dEeQUNYTDBiuKVrudAs8yuWvNXHpKzJ79WWgoNDdz6qbLq",
  "key20": "2y81pjXqMK2zpSCCFv5Z4TPr8cxMXS4ibXWqHqc7zRzSmEH43XaMfFdmPhBAyoqGZgmGVJxUuHGdzNhA188LPw1x",
  "key21": "3RgJhpsWFWm192fwjQRWjoZ8BqkeRDjZkfKjxpVZTXK1XaoHH5ZE8wGi5e9FEmGYs6Pgzd778nBrmJ19WzRVNVyd",
  "key22": "rgRHGTrrwrS7t4GJZ5CDxx5B8PryhNU7tVTofHh8yvEynwuKQRDLurqULd8dWBBmTBV86SwpLbY78rUWR5TNTqL",
  "key23": "55MJiXF8Fz3fDYXtzxwhif5MWxbHyMZZNxcsxCNsYyDDYPTYpGrEkHhRfph4bE86PShsT3UQG5T4jztu61KgMHGV",
  "key24": "NwQcCYTka4wu9KqXq9FdgiR7vY966cSnV6Z15M1G5y56H2qXd8qBsHEcBXf3gTCdusWEQuEXvBLSvhvNKvpt1FT",
  "key25": "BnzbmKJ2s7XuhuYThRQv7zwqe6t8p68N9krcf1b4is4yXZ7ojURHguMtqaFF5CcsC3WQ7DUiXyKs83nZCHkkoNf",
  "key26": "PADe3PeDwGLfgCvTjGuXCiphJPQuNyjRV9uzgLrT5hbmboJZAAHkMTugE34zQizdsvUfhV7Fs6uCmnprj8rLaMr",
  "key27": "j4vD8FJ5armY2xBiqXHUa2WYi14nbAQk5hp4Fx14YbmZN1A4j2xf18M8AGw7pZcVaNpBR9amfA38JY6RkQgoJbZ",
  "key28": "64Yj4MqjDWstMHapiErMXbeXPNk4aicoq9s81ghyDUJQZJJWpM9zvJfuV1VCfTZuUS3umMgzD7PoLcdwQhvHMojb",
  "key29": "5BuwxCda6cgc8hK26Cctijt6TgGGYW6Kqr5pmr2nbUadEx2YPjgqP6jeanob1Fhrn1bKnyNuALsf1bJwvXRQq2j7",
  "key30": "5gubA2esjwEvihMherehw2Z3krc8ZfqPXou7k6RNnhk1uVS11YpsUiLi1FuZSb9WU5CGHXGidLhLvPXEdGPjFHwQ",
  "key31": "FqTDeUGh3h3ZVPb3XcM6pXQ29AZNpFk31RmLhcMaF8chbwxu37w3TWyffywgYmKRS9ABM3UgHG8HHkjGhjbWq9u",
  "key32": "2QqTkRo1mFjbusyjSWFh2NGHNKNBsKhcUpHF4S3Rrcoe5qKg11DApv675rR4HT2VkwEyzxCESFv2aJ119C5Zy6A6",
  "key33": "2gKhL5m8K43rGh998HqzPe97x9VPbiYVh6RGk4Dn9CQUUS5hezDRdAzvrmwMxJEfmJmYVKmRkjvEiDRFbc34T8p2",
  "key34": "VHaqpcwaTAZTqmtMKqPnFMZ7jpmivKvVdWHrFFvkN3xK2dV8VASzNjcy5G527By92Tf675SEUtezUb2mNa7DbGB",
  "key35": "64vE2hPp7MgzesPyvMV4shk6wr4UawsNTrTVheha8rhkwkB46S22az7orvanmyCFkprPu5a2jJ9tKxq8w6HwtBmR",
  "key36": "3Aw9TSE3C3f8gk4QwyQSnfjemrxdTpD2gDMwbczoWSkDLUESUNDzQCPdwdYLYMkdnA7bK1KtNv98zfVb4wtd9cHC",
  "key37": "EqhGoBXf4BgYiV4pajQsm7QwdNfjmGJpkAyVj7ZNGAjRtvyhEF6FDKH4tDMigt6Ggk6oiYFwg58BzepzrtYWkAK",
  "key38": "2iiYrdhsWNN5zSqS4VKgYsDPjWXuanku43P9JTjHHpTuegcEjPUBh76Nd71m1RskQdWULKkrDHBe2i2SbfXsZgMU",
  "key39": "mvq7tYSw9WuSHBYR5nyebSZTmfXbUtyGrcjfCJvvmkJaN7VZSCkcw5NEAwFUsANytr7dtQUgXncmaZjTFCszmEa",
  "key40": "3TsfhWYDayWfKQQmHAuF6wyqtHqpon12HRyupDLZebmiNjHdVxsUu3EqYk7HSCr4F83gGwB23typEegTqsRfa19d",
  "key41": "4guyHvib1mZgJ3JS4bcVUZ979rbdvNVwPX882kJyETvYqw9ynTGGuNPZpPztmxbTD6he6AiU95jNeSSfWXUYL1De",
  "key42": "1LN3pFxZBM1qwqkn4MnC9C9SMB1mNxBuTbVS5fYXe8HhGykHghpWXYEQLcEuxFjUDKT7GiT1MqSQz4DWvGoefWR",
  "key43": "5vrc5Hhi7BUCNSkacUYSuJyiQXEuS4bQQZwGJYmhmENM3xauS3M4CSBhr9oQRrjBdoqeWqnpBZN6rYLrCn8XDJJC",
  "key44": "26851kbm5ohGHtRj6VQVVvdkFfi6MHGSGL5HK4cp6Y9gpqAujbZXNDdfVHUxsMwHLrs7yuyzdMxcjah8BPnWgSfH",
  "key45": "25U5YqkFYaBxotEjHsrihuHXVnoYBUyFWfteCEWoFNj5Nfz9V16SNiYf1sKNsoFRBrrKJZwUVnqBL38FEUaEzCuz"
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
