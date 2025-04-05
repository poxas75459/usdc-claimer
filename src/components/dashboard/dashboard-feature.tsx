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
    "5nJbAwMF3Ceh9xXyGgv7NN7paEmz3Y1SHz396UkxVanLYNCWjLHDKsptFVmT9u1JL476dph8FeKMb5Wz5amZNQfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E5rZFvBuEReU52bwTV9cJ2qm2DERW2QFop3Tyj8g34ZKnhgps8y27LDF9ZM544F1V9T3rXhT9RSSBz6r1KMB5kU",
  "key1": "5HNwwrGHxSie6QuA3zH7dTwJd68n7sXFts8b9qYTZVCtiEbXqYkdeA1dYmBrjp248dwYGzP9DKZXJifBLdb2dX7E",
  "key2": "5cLc6v2SYwvaTZJAW6VSpHoKQ6K8TsW3TbwTdPEVUcsUWnA7FZiGRUortaunNMeDMuWdqrat6oK2gps5LPKCysCc",
  "key3": "3PM13c5HQ7DWUfpTgKf3ZB53kT8zkYQforR9SQTi3yA8dFPPfRZyjM3911puaW1McgoN6HiEiwy9GYekUKFUivmz",
  "key4": "gMWgDgyD3gusoSSRB5Z3S4P8hrvKrtC1wwTwJMBLpVx1RWrXrNMMj8V7RN1yUsWj9iGAorLnBPxQb8RjU1oq9G4",
  "key5": "4cxHHQzvW5aCk9qgMxdyxL9M9jmBkumcbNvBKWHPYJYfN67QwmpcPxXNv6M2ZpBnNBVfsxrLCpvsykoHoQRvTskP",
  "key6": "3BTuhatSfkiSnRQWBTM16Y6pwCtE9HrrroTghP8mxMm8hNnArDCbkcgeZtKyNmHQQbzYqWkyX5uDKFqBRtFaPYUf",
  "key7": "CFqwYWs5joEbsZzesyyZhLZkhh3DSi5jfL6ZGr9ToyvincoumVyTSsyPekTTgEtSYFtwQDaFr9tgnxiU33AvKiN",
  "key8": "3nbTLNU5o3J6Hhke5uqDVeNLyAdhRVW74x5kFU65NDTqEoy6MYJYQLY5WchqqiATWQy6yRrQEJz1jFviYhx4sQkm",
  "key9": "5FErkdm1NMyrfhvWYCittGvP2SvXXtMitvtkuaqpvwxNKHHMu9XAx1RAinJ4ATwnHRmbNbzqMBYFspy8MsuS7BWF",
  "key10": "nd6KYG6tn9YvwRNY1zGNo39EDqxec7qy4FFtN5ao9amguZZD6BDRGWA3x4Zttdq3Fzwmegg6PUCfqGHc7zJZmaa",
  "key11": "3tntQU1KyQf43cnApYuJE72KziUSiDaL91uEWq1vXw2UaKTbxeaMqyANdkouLeiSzHGuDhF9sojuF5PonoY5FBRs",
  "key12": "3cZ4QbqorFXJGkc1CdfYHf9HMvzspJvCPEg3fnP8X6Syr6LTgQzrurKysKBh5gyerLMdjBJwazsxoaNs9F5p1KfL",
  "key13": "2H1jLfnGhMoRoAJYLixCWFt1KusQ6dosFnDtLLCmFo8i6QsgLKw4YpyKJgfmC8qFRAykxcCCJzHDuTviWqBhMhTF",
  "key14": "5ycNfCqqdzy2iMz53a75cycZR9hTfVLDH19cbvjbW8LAtXcJbJvmxDf5J1opqontaEucGGD68Py8mMBMCzJqEEDd",
  "key15": "23x6wsy2pwSJRWNRt27YdjXBGnchcLeWE32An7zWCzYVPbabczKjg5nv1vSHZsgbeEoQhy3ocVhR7j2tyNReJ9b9",
  "key16": "5aSzTURxSsDdVqmxPL3FBKDJiXiW81d3xAMMR2RR9rTUF8ca5yVB6e7x7KitMNRgDWrrNyZqunR3AbjajJWXYUpq",
  "key17": "2iKfBcBNkt3S1yzgjtVabTegF9mC3AUh1CvBHf6HocYorPkQtBisXKbbTHDz2kXrK8tj1wjVkAxvWLNshg1dALhT",
  "key18": "3nyAA4UJCA16NwT6TY2NT6Zmu2AprD8N3R22rXjSq9dvCvSH8cWCbogSqLKVrFjLiKRdWvB9eJMsbpxvsouUjxwq",
  "key19": "3Ny21nkzAv6CXZUnXyPCmKk8oBLB4rRkqeKfB2ipAKzepApUTCe9bNPozRHJeuv1RtDnMGv85Ah8G7ZS6xCfiFfL",
  "key20": "4viM8yU9UAGPyfPUDnW1jEXZamShGEw9RueF7kSLTSZJ2DDjBALG3NY475F2ZsKn3U3P4h2rKpdLqUE3uDdvAWZg",
  "key21": "i6SRVXrrxEf3TrwD2CWL1MYkJpGYEE6sFUBEJmzZWcmxsxtq1atKuXHsvQqTRL5xndiiCaVvCRzWY2dsBgiqVVs",
  "key22": "3buEgvMeHpjb5HhyC6fZsH3JUEg3jPpq9VFrmpLeUS6kQZHH967Doy7sTR2PCozAsU5rbmZxWWaQQPAKC7HfyjUV",
  "key23": "4Y8hoCX6eApfg6zvvC4D8wwRFGrmrznwfXPqeD4gP7exFoD6irA2MZvi9MdY7bBvEUvTEichgUnJQTsSv58Ap8kC",
  "key24": "2Y1umXLJsBXbKt3CpLJZ9H1HshT9LCRWo8WTqYunanGE3YpaTjXefBYHZSfJuEV3kuoDyubGhYpr8XJfuuA2vQkS",
  "key25": "62vgH1sgTDACfrCphWTEF5iHmD1eBNZqQTKPUCFf4zGuSdDkHYoaQwTF58vf7uqtgj9aWBq2jVP5p6KWADfybDMB",
  "key26": "57gYm4r6PZSsBva6w8368xMYQ1pWrh3LT5spvGnKmMXe7FbCjmbXQE9JgaZqr9ZTT756DxwPBbmAMmTgKGLpXSv6",
  "key27": "wyk2KD6a8c6iRmgxxb73xHfr3jLB1e2zvfJqMbMLTmhVruZxAUmLDJ1sRCnNgUZxCzSCbiCcy5cEwieTFq6LreS",
  "key28": "2U57L3NQTWAYCyY2whoHCZC7qyk5MBrKaQc4PQANXRAcxrbrSKZS3NFujjddycvNJLpatN5W68nHuEWojrWganzj",
  "key29": "4QgdUrdFLsHoE2xYxJSizXxxy53G5vzEedxt9eYCSTGiKRQGfXtKZSQevmoLdpZKYsqeL6j5EF9ehbXts9sgLPU7",
  "key30": "4EBU8oRGqpt23nLwjCoUZwLvrjwE8mGf8e5qhqGRmW1M3ko88UNcWxsCMr5vh9G5Yh8gq5iMFeXHvmMRkcUuKfu9",
  "key31": "5CXLpa9ba3K1Cyk9E7DUL4qzvPXHVEfMufUTK9cnv5s32Tu2NRYYmiN2UWNEoKbBwKTdgvwZA53SbpiCfg6WEoNy",
  "key32": "42XbnfXV7eBoUYfNHjPe3oxioSYsUE78WvuPFbXKgqGhtFdTu2ou6KKHf9rUEXESrh3CU5WLfgRdkXLLoLz1isMb",
  "key33": "3FgKScizUHFfk8fKwvsgZmvucHgq8rgsVq3gaWa7zyjisGvhvK3GhwhyrSchJZSQrQbj3evF7Ya1R2A6eBvrTecB",
  "key34": "cPYf4ZiJ2fArJaTqto8EftvBANVN8f8VSm9TEtqaiDr43W3EbpANQD4YjcTbL49WrB5uP6Y2UHkuDgiRRcmjgX1",
  "key35": "4711M6GprNLCcJkXGp7aHX29HLEDiC2BVJbTya8eEYt625YkJcTCUJuRTZjJFVAg1bgRbS7t52ieFLrCnepCKE2S",
  "key36": "3ksWM28vibmpDrHo7ew8JYBNbSzNwBt4fKoQkxBbKrayFwwdcxk1kwMX2X2xc4qqtWTZv5Pi7CsmbjZYhGBRckWs",
  "key37": "2f8Jk9tVaVtxuDXAFopAMXhuE9w4NbxACKfgQxpyz1iCL4YrKUJg4vWsvpaAUAyoVBboDuU5GYS4uwnVB8EVNAba"
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
