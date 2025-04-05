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
    "5Ut3n24AspwJa3cDMJE3y1s5ykVFjKPraQayoZs8ympobmSXhD7uBoW2bE6U9MbS3E54rJ4Kf5FZpVd79Mk7JExw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rVPX5KMEeVHVJsDciog7VJYzLVqdse22Fbtmt2634nJuUML8EtecGkMyZNEXrSHDvh6aAvkjMB8cuJGgJ6X74qg",
  "key1": "xzHjBnywCwjMApmSZbz6wJKvUnX8RKjbTBvwwDPAffFUdRtLQ3ykUvN9obovqL7YsSbKBj8oDMZFcpEnfQvhjNq",
  "key2": "62GFY9JZ4mqMq2NJnv3EaK2wsgVBL9sAkQKHH1vjRWQPjMwtBgbGCvS1Wj2kDFKzdh1HSnCMunao8jhtQ8QumVoS",
  "key3": "61JXQSFnthJxY6JsezLstjihYDT5drd3tT7Ri1cw1w28GeXKDsyD4Nfw2N89fx2V714PtcTePmU84bPGSJu5BCJr",
  "key4": "5eaeNtEr1s4JJsHoCJK6udwiFsPe5ze5vqqx28sjsWbgw5yHaC8gzTjDtmFukuMRH29bAY7C8E9qbyVhQVuxdrrs",
  "key5": "xhLqdoCXoX58ueZpqWcx6VjCTZ4qv5PaQF2zDDNm2NC45C3bv2kAPv5vgq5kYeWYowqPh5EMNkQaXgykJoJd9JK",
  "key6": "5QS9A8BtA7tPrBvhFp87CVujGwEYg9nwW4ZeaAw3scPAKtWSddb4CoKzi2MwLccB19v5pyZY7G4Ki2XeyG8mLbhL",
  "key7": "2wMz9fTMDs3TUKijBPUf2TDwCskLTmDKAupNbVEspyedsCveP5yBaA8RfTcMvLKWgyE1kjte16Xq4gvj973gZ4S7",
  "key8": "4erXVQ9SLVFuQbbrpTugrAd8KZn37rwANWHMZEh8MsHz5y7VCDuuBuqSiveuxBanX6i7rJN3JJKgWJuQ8BeDk82m",
  "key9": "5J8xFQYViQEMzRJWw3NSGyhJkdG26qbB7CBqHXWz1gWfWEtF6FxVbnFA6J9eSfqoME4q7N34BTZLTedFHt8uvEgN",
  "key10": "uuwCCMcA5B1cJsCCZqsv9xbXQ3gy7APdShdTGUXoknSTUCiGcT54rTYpGLrcX98Ciu7RZ6Q4dRHB2sZhvZXJgE7",
  "key11": "5pwohPzVbaqbkoS3ebbHWmP2SHyYgYz12foPdFCjWHDLManHtCWXeAiDDjpaNfcMiYDBpZYEcSz5tVFCyoNhtrK4",
  "key12": "GrfoX9bG4oJAP5E5an5CvTkAizQnx4cgDPhy6wbXaBKW5pP75wrUFDyafHzXvm3QqzQ6Q4SGB3VMsEyG9M4s1rM",
  "key13": "4ferFcpaQ33t81gg3MLR58wm7ge4Q46LEDRbQR7iZDrpdTvzy2hvUMZ2RUJgvkGYX9XStgMrJ4Pq7YiFtxEFK51L",
  "key14": "3gdNtnatHd9bzaaAnqZv9jbSYBBgiH12NnmrpjZZD5Ty8PW8RrudTio1GexzHJNwwXP6Xkw2CMSrnhx87m3XmBoL",
  "key15": "5EGGr5Tio1BM7HQrZRicL8rytAZTbWa8bAsBpmCFUWv3xp5Wz1vfCoxLZVLKBeSj4EPTrKMToWXxuUR9UEitxoCM",
  "key16": "37YpUN7SVYMzoiaVvnyY8ajDwXGJwb1AihD35RsUBbrnoPv4cUJMEFn4hQMa1zkpmG5QPptXwmkP3R8Q4s1uaSt7",
  "key17": "5ZyxTqsCJRyLxL2UDoFwupYwf5DTWhMseKqcQas12hWrzrmT1XSf4J2yHbxuHwqCVWjBwBw27got7RWNxpSTxNKP",
  "key18": "48puU66VdDzqY4nSrbvXtob8kqcnt33FXqUQdmbvK5VzFCngRAkQYd7nEX72JsdEACmqsqhjMPojj5dRtqMw7AmH",
  "key19": "3arvh1K7MkLcM7A9oL4NHwFz3hsFpdAEF7sCtzbpg2jDvpWmgYRuCpWpwcttiRNNRqZUZSq8cMygwPBUKGx1Qkbb",
  "key20": "4RNGYrUmXUCRrmLgtZSqHgDfj4q6f1hN2LcGZyfubkjtwBMLxrjfudGsv8M4Xyk9AvWt2VMQbMxr6ZSoew16pomk",
  "key21": "4X6mbrrbbKFHDzw7gPkGWVaJ7qL7tUci7WEgM8G6SWyUktU1GMopjVPvSkVZLvC1R6iUJPtsvEDzYta2j24oFC4G",
  "key22": "2sUXgUFKsRvLGr4rLTX3SPBEr2QAFRXj2ENUbb7nVHFCNSeBHrg5Ah1yLjrUK6UtBdzRuhccckSdaNaxYVT5894L",
  "key23": "5iD6GyXZp7DNRmfLZWA9vvHBe8nhk2HktjH6VBNbcYFMrzcG7MbenHJrivDNEHqiyjsyzVrGYfL6HnJxJomxDeyC",
  "key24": "26TQjvkZNQoscAzqubTQiEciorn6zRtjaY3ZnyhtzMwtmmsHuugeYM53oqd81PoYW2e3MnBWMLvaKjsFqN16ZCe5",
  "key25": "5UbJMyhQ2NxaZgZoxNsLHW6WW5vPsFi2v2vsVKy1BwSodQ3eDUafkbkDWtghgvxGCFbdTcj2cvUfNKQ24iYtoPuJ",
  "key26": "57G7q8EsSC7om3ygDxsCffJzacnPCidEC3LnQDamdKfZtv4iGy1vvR5hC78p4KyDF2HfncFUbFspGmQn9CcmETxo",
  "key27": "3hwAF4dLLiUsS4GBk2UNTM6heMqUqtoPif2xGXEjBtrTrFJdteUZ9CDYbgU7LYuj4sbDbHkwLbqkhMtt4onuje9z",
  "key28": "5uqWm5gnLiMgTUX8nwiTucV8Vga3r7pnDFxVaCv3so3fQgZRwkKAxaQBFyvtwyiZXda58xUPCLowif3SQSgG711f",
  "key29": "57jJ47rnufbZ1gDRcjoYwbpbXoyuw5BDCW4ubTKUftpQ7sM2vRZ9ZGK2L4R8MfxBZurjGkNZEpnbGiD5BHSwN6Lx",
  "key30": "3SALfD1dvBmGv7g4P7A4hn2tg92cQMzo2vtaftYTg18a5bUp4TwNuNQNXQLNhWWKyec25RCtm4GzeJsGBqhhJgan",
  "key31": "3VK4mg7bv2CDPe8AEZRbWUdYbR24kewqo6TihS7sAXjMyk5MrA1qJoyWTLmHUCgTZiXGtBqTAjS4J5JYsewtChmM",
  "key32": "2J5Q9sp9kvbcGFx4XCfFaC1a7TbiPsj6MQhJg7BTFDTnevyUrmQgmJ8HKF2PvSru3B6A5ka2891iaSHdgR7V9wb5",
  "key33": "3bd9TPLZ5kLFZSUtfq1KieKiV92owF7z6Vrxkuqthhwfaag8WB4Xb1mRdNjykGSHAKHME2HP1L8NYLUwbbooWMX8",
  "key34": "4ZxSeu8ve9WQp8f2zznKvfmfqDDJhmDuSmuFPBie1jtyMjcEDVcWXSyrx1wUEKawrocFfWMX1o8jNZXVZ9XFqQCi",
  "key35": "4tLqxZWcdihTc5MKpuCFt96sFZLLQ4usRiVrk7xiSXb7Nv4TNFmisx5J4Atr2uTAJ54kTwAy5SggfveYDvgWVENP",
  "key36": "4Te7GXVxPM7m1YivhiXoZkSx1d9vqfY9bh6NHNCSiEEsNV3ewSEzwuDpDcbawLbVBnuTGgHJoTXhpcFFoUta8j2f",
  "key37": "2B4JcnzA7btUhpeWA4Cq6YRACeBBkF8YpFBzUn1jRKZHyzvsyzjK9nwTmD4AHyPbd1vNQfeR2sL8rJGLYwa4K21h",
  "key38": "24EEoMHZTDKBCRxhxwKa78UBZFE2gAmUMWnunxbTVXt4QZs1a7WZYWyaHgqgeS1budEZS9afj395BYMjV59Zb8JC",
  "key39": "5bxwf7LeKGjAeBAzoGF16Lw47koo1FzhkTnC2EwJaB7rS2ZppVXeBjEhx88D6vXs8QQb27jY9uLxoRCnEX8DxGg",
  "key40": "5KsB3h2ydsjxgVLeyGAmjSC4gvzVXkZWJA21NwSyKmREnfnknsUWsGUszN2wvV4VwvzNQGyy5hZqbM2gkoew1UGw",
  "key41": "Gw6KDEzdDmTgVdKbJwoK6wmaYzDyTY6f4qbPS2khWHz9MLai9R93QxLYyKikFXXv6SdE9vfkiyn54yFnwTEjE7L",
  "key42": "4gh6GLm3z1zsAbf5tu1YgiPHmUaWm46ptjtbaVSNrCq2onykw1aip3WUdpZdudz5U2u9iZ5JaYVyC2QSFSiN9owD",
  "key43": "5WkRKDsqBNxNKm2gT5vVZPr7q9Zo9FCiK6sRALocgVr1aJkdpJRD7G9TW5zbiUrUSrGddU5ueqBjoZ9siA8HJ4JC",
  "key44": "pAcZyFxY2ZmKqMS5abgbnvKQQ6osB3AYhwKBc5UWKnfv3qho96EknfLQEBa763y7y71GWoj9jUp4uTFfXmYxK6w"
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
