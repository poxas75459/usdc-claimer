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
    "4vis76SPcjavHFVdZVW1zktXnX8n1yKtJibf3dkQByQoogh4nMPtqqFoRDmcqX8CB1sJ4brtrCMwykkWU51SFwy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oQPWjcskNhDGggyUPS9uoc1Pz2TRypgFPTTVZAuirxrtuiHgS1kHUvh65zL18D9ezCviy4iKBXwGLLaU7WCLFN6",
  "key1": "kaVUrxj54ZmRigk91JM5LSK35Kn83gp2KfaZ4JDjMjM8FUNczJzJ9jDz3iXzQ1HoSAzb87fb4aRjHHGqZdNGykt",
  "key2": "qACvQqdePRVmz31eEwMVNhjNLwnnXG4UjMuovdS6uVSmrxrbjNLLfGPacK38mJQMt7ffEzgAMd7bSqVEiNUn7kd",
  "key3": "7PCK1HZQ39uTNiY4M4UimUP1ydoXLvyxgir43BiwgM3cLwoX3Wp5NsbC4UsvPNxGAHidgoLstgyPpjtq5N5XJA8",
  "key4": "3kQLJd9AZuahAggnNessPRux4fYsDQRUugXdtHBjKy1okstBBVWJWKfCkpMZyKkSRakEo2Xq7a5eSzTxgEvRvsUW",
  "key5": "NHCMMfaXRgBe9SaSW5vmQdsm9G7c3ZrkEwDtKncQ159gE8g8zm8iarApfT1FNPALk2A2fASVfmLMH1ckkuFhkKt",
  "key6": "4sLdFnU61zTCD3qKKUJtt72aR84DU2YKr3dbWs3HvKGSi4DHWtLoyk2jGkWQ8vgZ62rc9v7fcUKVsg2LyJnLBpKQ",
  "key7": "3tZdVTz6UJzbv4sdFR3tG8tZFrNQ9LFGUhQZkzyUrPeKDJgk1gMP9DXrPQQhTtTPmAHBvAmpwPEQmgKkjmHJp3FS",
  "key8": "2hmsWBQpRd1uyUazhppiSEj47Kdc15cTMsosBvMcdjawTtzxhT7U5T4vy19rdhNhpTRS1MYnUy5zpMnUPMYNBk6h",
  "key9": "3mJ1mrfx6uS9QWUiFQw5V61W6jdVpqnT287zETknJhnmqR9GqKxmhQ7Jes3TceumFi5Z61TyN7ptfCcsaUqg4va8",
  "key10": "48SGeYiCWWr1mnLQGMAVzMVX4QrPr2UFaSA4UdZHaCUVNXC5U8BiMwwmdswxmTrTSNpAUi2xpEZy46Hyrs2bcSkM",
  "key11": "KxkG7hsSFAteMbEJpHQX61bx6MJY9bAfxoB4anewWk58cjGvNF2v93Cqox8zyNrjKA8grnKhWh14z6pH1GEGhmF",
  "key12": "2F8HW1n7GZ73JknPNCBg95HMvoFdDpiQeF5H4gX4J8UdrMUdMy9g9KCqmqyty4higNddko937kSfnXAf2tLoh2zE",
  "key13": "5GW5JDRxgwCZgTzctfE3izU68ehsRKKZbNvp933ckrDYyXW6cpb3c1XEkqDTaqbFuKdBUaQRmxNiNnVwf8X9sHrf",
  "key14": "baX7nEJkz9XMzYzHyV2kQ7D3etcazvfBiMxQsYQpFwPzXwip9WXbrgVgLaymewYGgVdYHibHvTbbdyC7gRSxhTH",
  "key15": "5xTWfezjUTkaNpXUbUmHeAx7uTfWmG8mNmEpE4E8da1FNXSGZuAu541zjPFNg1bQofvoh8DvniHAwwEGDc7GEbJV",
  "key16": "3bBWy7nJ8v9t7uWE1hK7pq4qqW7saaKWduiGTxjH1eKVKRMRzvYHakGPGzxFgFUajAvZLgHi7QVENDehNL9W6Af4",
  "key17": "2zoFb6cocFgt9GduJSoZFeHRQSdnDyZvWbvK1JUjNsesrYy1qCAHEj375ykuhbHE7cP9gYc6oyBxfYTo9n1zm1mN",
  "key18": "2ARoaM5zSRZKnKAUZsSkqEDZhc5Bc6qohP1iNjywLjHvFdqMX56Q5DWWqWz9aVZ6i6WELGAXDWDegJA3B7jCgaL1",
  "key19": "49eJ11r7AgfN9cGakoX8Xx1AXJgyVkrZWWM2KWbmTBv6BG3jirNXJ7ygwuqbH8KJgBCRmNjhqJmbK7nRGVtaNFdF",
  "key20": "311jiNkcTQBgcFo9ZFRbrDcvgEZbec2U9M7YhcNmwUPmQxYnzcDrRyJMNwJoRB8hxfN16nSvRVeyPyiowrGeJ6rY",
  "key21": "5NF4wkjezMTPLGMNkMhHL9s6M5L73srvNFeJSRrQUB1wXSVsGHHg654DUBWbZXQ2PsDmiC5FaNEwshsCFALREM1D",
  "key22": "dmUm3a8FPyqdiw4tNMt9jTR9vBW1JESQfcgR7qHDtSU8FKBsUqX4daEsYbNM1CTg4jCBshhDcJbpba5VjvGnK5h",
  "key23": "L73ziFKBNz78vvWzzWEAB1ckxa36EDJUHJf9chqTH9ZcKd3NFhfuabPDPUTZsPMqMGnTeNgq8TVqNhokrcS4BzT",
  "key24": "5qFmU47RonUweYZRwKcPb62iUHnyUbshHxwm3b89TqEKDVJAxDY9rGmPVyyWJEhHgLYhnUCVo2mQB5yhykAJyz4f",
  "key25": "3YVBvU6mVEJDxi63WaDh4dDBKsE8wPZMKaT5PoHFMpEZDKf8ApNvKm7aK1eqV6LJynPsfpVKLB3UrNzcHNXZc8Cf",
  "key26": "5xAt3ZecidFB4jkc1nHgGhJHehQnceShjaXCuKnKrFRscAxTV8ivUoAU9jArBXKPmSXn7t1emCejytyDGjVaXuWS",
  "key27": "4DMjmS5hgmhtFz39BhDk2bLZwwgiC5EAdWa6mLbC1w29FhNBtDxdYtmUCDTPWaVx31Kjs565VTeun1V694xvatXt",
  "key28": "oiNhkMoxCKqP2XSJQ3mXiWffVhVXtsMsRJJFt3cheiWQsKaRoRvoRYq4QrZYqkmUvjJw9UUCotJW3Xw5znxkDrE",
  "key29": "2H7SPBrUo2YgZmpgDvJyw3nibgKmy8vVia1rF3ZH9d45K6M3eyT6A9HuWAsaXBJuFXjhB5AoveRvU2KNU4s4PUZk",
  "key30": "3VbKBAreG2mPKhJMPE45XQfLRnPXGtssvyUdLvXBCUYR6dkq8YzdcC2A7WTWnimkGQkSZpJhQWjPpxWNDdTyUtZn",
  "key31": "3Epbm9enZg68AnkczRfQsbFz5Q9WvvAk9N8Bo7RccFXuyrbBY69jK758bjURsWEapYvLiRZxELRE4Sp8qVEQa4PP",
  "key32": "5q18Yps1pzstmZoYNbeSB3Za4depSSFW2EsEBXNd7uZ5SftuZ8mRaggmUFzpiLCbvg8dSJLD474Pv6pL5NxCXx3Y",
  "key33": "4Q5fDjhjHNJvFDGJ2Cgz5WNpQx16RirpGTNFUsoFUWKpcAmduhtEouhP8XYgP1pPTBYsvCKuTzHntMtEQusrSewq",
  "key34": "eSwsUSx4TsPmzhBssPNmD6A1U4Df7SC7ZqoPViUT7UVNpExhy8k8HJs6TrviY7W7ngCszxYLukMmniyz3JaZgsy",
  "key35": "7f7ckcfeCjSDkDoCxqQnxdsTFmkn9vaDxUo6jT6vaF64yYVb2GSFWCNxwkUJFg7YcnUYaUxjftkihaud9QuuFNL",
  "key36": "2icPyBqk6u6cgLwz83rk1zJi5WJeJqDMnKwQ298BnsQ1JHv65Vn5Eimh9AdnyLL3RgmeiSPizGyJfcj9vBBGiJD6",
  "key37": "3AyKVrH3wtvDmQXPEGhXno5gFcZsyXssMq7nSDnGYtaJXg6kyhsJTcXjZ2rYH19PyZhveQskpTnHgziZxy9RmrdP",
  "key38": "41tZ6P9N76SSvz9wSPASbcauS3dhkQRyPbs9wpX63mUHDW5pt7BGCLkw2pGK7fRs7CbuKjR5Qy9pHS6mjjvnaiqE",
  "key39": "2rnmLCV2XfHNJ27UVeFnP6Gi5PB148CSsdieBmUBHijfbDjJsiXseSLKg7UyqGiZNpNaHB15Sje2W76PhHvM3pmK",
  "key40": "224URbMHSReWMxUvbWqzra9WQSXU6QyVGPHsCLHHBTNXRqffhCZ7aC7rd2ZXJjBMrJEMnTfUX6bp2Wn2CRRKCsQx",
  "key41": "5Gr7go4Tn6jbCRVyEbJu5QDMvt7MDQU3iUY3Fg13mdTWmrDMYjRrLcxEXqt5M4mK4STAe7sq6gmdRRtYph47Nz16",
  "key42": "Nwrmb7HeRNn7rmcs1YZJhES5YqqNKwGQL8N1U1bqugHLjiTsf9qMunYbmFxMPBfbG9cXSWFUQk7Fs6ZYAcLWcvX",
  "key43": "3ipMfwuJb9PLbBSPEPzLjuA6tMivYxfhwB8V4cJEpdUf1vyeWTTmKJp1aMUVM4s5tyeY1ehYkQHWHnhE953dEwzj",
  "key44": "4LVWyNadmPfHWB2WNkGKc4sLn3Tm3dQ767yTtBXfaxEzagEUujEDcBKkVenkVGJeGowHJ6rrkiZgq3E2mf2k3cFb"
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
