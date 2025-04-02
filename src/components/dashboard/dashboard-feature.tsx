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
    "257staXHo5EkB2kcy755hQeDSixBii94MKB6cJTGipD91WujpNm6UPWT5ktTy2ECMsLNRzDxjzSHRJrWDqCZqibK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QGxZJrPqP9sCUVdDTxG8S63mXy5fwW2UmaXMEU31N5F2uQVSqbrzM9PzBnYn7pB7vZ8gAaeMTxKH7eFKaeU47uv",
  "key1": "HeUQLm7GPSaiwtBt7uhWDEqpUH5vju1jjL8vb1YdKMQ7zgxpJkkenQDdJ18bzgxF5ETPPtLXEpcADA7wX1jtPUu",
  "key2": "67oUwmiXqhC5Gbjf9qSoSiHJUk9Y6XGpuvhEcH3wzfQFyv41P7TrAFi3U3JBgkbEF1eBvYjvTXwo3phiuPP7onYM",
  "key3": "KQMo4oKu56WDFVWSCkaEH45eW1CPEgqxaYcH1tvjN7GEhtUFcQyjTNJ68e6cxVKvb7pFeQxMFXHH3XWBVXCyaeA",
  "key4": "3F8ecnK2zwbusxBeck3P7fXyPGcfTzvYartgLPiSn8MWBK9oKLvSmD3ochBPhspzAfi44ei6ujWog97T6Lpkyj78",
  "key5": "27kkMKsKWgjVKGAPb5mMLJKsSwg4EWFobK9kA1YqtDRWFJWEuhC9L7tAuC3BM1PSj5f7JQ69LpDp1rEgUeGgrSrM",
  "key6": "53PvmqPKu8Qrzhspcu978h44QLn7igWVFHbesVUPrEnHXZs3xqPz9vvWocKVQw5R3mFJB1a9DhmGGTdXDEhUuv97",
  "key7": "64eZEzQUrdCLuvVgJaip3W57Le5ouE87DQsVVAxwi81MwDc36EdXAKi16ySJnaKhiyzBwkxy9oqY1KLktKe7A7zh",
  "key8": "366wKyTNFMcCN79k5TwVohCRmw3uuzeiofXycR5SKYndokzQWjWopv7T8LRgZ62wDQsyPXoURyPwBka6W2S5Gbo2",
  "key9": "2rt9ige7Zcrz8wJ6y1u9yB7ZrQnCHMLDVLJgd68uNUXagyzoLibMUmixmes7XND84GHzYqtMXcvwmTH1Bccr8rs1",
  "key10": "2cHsBv9uecgf3UfRzjXDaxnsjs4Adv7ptDVtKCaSELsfKEDdypr8aq9KyxuqojhRJBDa8yn6wMqVqxDyCbsYsLve",
  "key11": "3iuUNAo5kSR5RSoQ5ipvpDGRCT1Kir5Txibe2WkLVxQD1EQ9uCowpnP53vsN9ZKDecwyVhqH8Zr6KJQW3hti71EX",
  "key12": "swC547Cq1B4cPHDpAgtMECyn7yiLEb4bBSbL4pETgVfJvcDrDTQ8onqrtDaTCLVz8xmfkGvuwp9t3wiXueCT9hx",
  "key13": "64UWQ84MkfBELYAUQMrK2FVyqVdFKta3RP8tfvFvQUucoydwHJfZmUxZrfqpxbTHt4Pvr6hv81NRqSGzVW37RsBc",
  "key14": "LRW3rYcwrzBJCY2VspLU6JfPJFm2bo7Xq9FRQyiMBDdJALd3xkTRRLKrsDURA5dci77sqBvQotpUpft8WYLAkMY",
  "key15": "4LVkT51RvHyHsBZ8GtWoBfW9Ww6buwGBkx6Z7VYXfwweYQVpUCyA7sWjX1viHnW8JR1ugWzs6SzTEFMTRgCXSTm4",
  "key16": "4ZVh5APwhRTGb2xss9CGWYLGDUVwYBWng59QPvhQmBqtxNM5o5GkAdN4v2Gqkjy3VTeaU2bASprSKWNPgbxKNjce",
  "key17": "28uE9BsqLCt1sZBksajeKrPxeX5HuRxWVcwX7Tz93NhNFWvDCmQaKvP3UGJFPv57grWgXyH5iEXPcBFBFYdgurMx",
  "key18": "2DmR1U9jnToFc1gB2b9cATi2o2tCtxJPq8WMNW733PVsMxiXL5nPS5uHCBoERxC1cwUgQU9dSbmWswGReva1KYde",
  "key19": "2PrrjJzdGUo5bLkZLeYkQ29bFQahLLumMwnq1ZKJRQnPo4xZRew8AbMRQhekn5Y9hn67SAtSs87Q26j2RL3nzzGp",
  "key20": "KgK7BDzdz85xRnwJfAXKXpN3XeQCDx2Tq3Rg4hCwcn5w3pjAteoArx3gFvj4SB8yBwNnjvbHc3F22z8RyMFvkWt",
  "key21": "tTzenTmje6iEPDaNwHm56PpfFrLDeVknPQF9y2yLcVMLVhJjKTHLF9E1zrApPMqHdoBkk8Wec99oXj9YrYBKmvS",
  "key22": "3m7Lp28xNXAy5iMFhwKL9cBn58seVZ61AbyZa4Hxz7ohLeN4JviMLZSmN1zGieLCqBAWuMRPfdEYMPjg8FxbiUKi",
  "key23": "4yPm1uCqvAXYfMYsPpJ27e8iYCt5BYEwH25QdQoUmNpXDWWaTfCXKczBVuTsvfTS6fdp453CvhawmuTNNjdF7M5t",
  "key24": "4WDNo2D6PAazTTADkq65gFz4XdbcJh5RfkS9by7jfvREssALYHL1gqqyx8Xt344BnSBJf6ddaxDNNzZxawuRMJik",
  "key25": "4S3ErwJVKTxp4RY7UUHUjiKotreRkEHnKaxN4iKaDDcrby9E8wyfjNhQbUthnzq1EDir6Rf2T5HwgFwPm2w5EG7n",
  "key26": "4J4mHXF1LofWwX47PcJStcNzuKjbC2kZUqJR6pFZgPpykqCS4paNsij3QKB2kjm7jYCB6Ap7HBrEPMYAiLkuCEoW",
  "key27": "YWWM1qNrgxMULpNJXQT7EKAKTeyMi1wvJRe1TncqBpt19Pr6aZoUABMJTgSjEz5vzfRTD9fVenbHC2tu3JpWSYc",
  "key28": "3rrZhYcWNj8UbtGEkPgYnvMXUr9v6dbuoA5AhUVDT5HGtF2VKEUHp57ULWNdgTBCELXPC5fAPp6ZeJQWFLfdkCsn",
  "key29": "5tRSCmykXBeHsp212tDgKJgdZ3d73cJHZ3iYPpmPSjzasVSTmJzuU89sUv5ZJx7TFpxcH6TeQa9WpQ7e8zUg5iVN",
  "key30": "2g3CeHbAeLWfaafEzFU5EX6gLQa886vQXh17GuR8mbhBZVohb2kqB184KEVgvk9mmF25NewX9dxYZCmH1S6o5c7u",
  "key31": "57kwHtgkwcGctYDopSxd8aRGom38XkKp34J618woSmv2pN2tjSNLUQAt59BDStKTXMLL5yWN7PbdU5SrRhRUaBux",
  "key32": "58FQg4anvnNuYEiEi4vpELSTdqTmJKCKFHFvPmaJxJLA2LoRcT8DjQTrFfdxnDVQYuKSzbCfswGPDFcDQrVKytJR",
  "key33": "2Qucr2LhVsBtr4g2pGRUdyd3qgRGf6gnxzkBcjpApoKbUjBJSNx1nZXkbu2eqd3HZMJtSumCwXpAMwDA5EG5UZ9R",
  "key34": "21tnpjW132cEP7XjreNH4HRWQJiUAzdgPhpybmYNTTxCg3nsGzg8rPJhNEUYyT2Y7fDt2Qo547ip7EfGd4vgZwgS",
  "key35": "UF1JrovCdm4XyyJbWhLmszGt3idUnvpjPF7Fq4CPsvYKxHypxcDvTBU4Frd54zyWqpS9nVLYAohMWym79WMpK4e",
  "key36": "43gHtah29VoCDyi8UpKzGfLhF9oLE8ta96uG1Vk1E4VizTKsh8ZxfWzjhxctMJZ6tCnacwV7Z8xxE4Sogc7RTZnr",
  "key37": "22V6rf6YxEdNxQ545EA1WZSjv6BoVSGXXeeEQbfhQSVJ46hcTPsj2YiAYJm1JoefX4i9L3R5KoZUEK3FfhEGU51w",
  "key38": "5xoL3ezr9WHEedLReQhsuuq9SXTUWPtYVB2QQgk86fuuudCRsfMucEcvqryMsGdji3y8gNuwvJmHPPYH67JyMN7p",
  "key39": "4fR6fVCp2Hc6UbLAUqqccV8qVVu9GQH9x5howSWBNFQ9HvqH8q9fvLReJg66xd21nqtSNYCwEYU8WY3jc9QuUXNQ",
  "key40": "hxZQoL5MrZgMUNCjEa9PCQw2NSAuCGH7TEH2xsVUkK1YJQGuoU2D32tXRxDJay6VD8kfJTCfd61JrVjhonAVX9F",
  "key41": "afgfMSsneBA4jFK2iSNXQ2FKGtYd5UzAEKayjCqPLKP2ENRZ833dg8BFfD5rptd256kZtVbcBoicY3o8auVx8qs",
  "key42": "3TQYhC1bR5k2U5RFvaYXXbu4Y2ENeMyBRoxCeaPQarpQd6GqhqSB27SLgpeiigY4PZ8pf9BCBoKNUMzvmDN1S3LX",
  "key43": "4jS9gTvkxwFuv1FtLsMJAi2w8HzX8P8oZjfhHsmx1ohAe4bkMNBKMAss8q8gAbWK6U1BdoTkgcbiS8iqgtT41saF",
  "key44": "2bvcZ5v4CVZhiuD3etKW7R6Mwte1gdE3upGJMDMe4soN3UmAZchaSUTZhHtGcdB3CZzFEp4dTRWNoUuCiBTPVKcJ"
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
