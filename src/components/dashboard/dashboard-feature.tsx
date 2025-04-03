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
    "2EWHage46dD7vRC3oMBKTrWKtj9HHEj99bcpvBZpzqP21W78Rb19GoVf3oAr3yZCgP4ZvyvoS4jV4pWtWUZVJFXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jMtwxBi7nrthDCuzSNYQhkRjA9gAvtamn6MKYi5eMrW6rWmQs7bwuMgEA4DhNK1kcQLPPCn4g4wtyRmUYMGtpf4",
  "key1": "4EPoWapEPnwW33ut9d8A74c1BBxJdbdbirkYuR5CLiVudTQQfJ3eZpCwe24Rv1PoivFnxwhy7XW987TvUsWfwTG5",
  "key2": "38xFBpM9E5Mfe4PhykDFfprqZG1Dvgcm45CsdwnmEpQ4ADPmvr8vB9V23aZMEk3jiFYTJLwYVBpjzML65PansLik",
  "key3": "2rJphzZF7AehwuZnZDZ3EBZF5weqHmU6TpPozgkRJrzRQYJEwiMoCFAR1Ke43ad1ottghGJik6bmG1iAXd6t2g6p",
  "key4": "3dvFnrcd2jty6PzsYdPdGuvrqNq2XmCwteh4UX3nS8btAqGyPy9hTjcVckQpUCCJWbyC5psQoCsrHkh94FK5GkUP",
  "key5": "4PzHUZrKkLqG61q6ZYGratf8uSC9rPyFFfWdg2L6nH3jDpPt6mByhiu3oNVnnvp4DAm7EHvUS7uHqjgAWthm9kHP",
  "key6": "2kwMh1XAH9QmtZPsd1V1DhiQz7uKTERgo1mrrWgCZB1jVLU4dmXupyGmLca7YqfJ8a9vgt8KcHv3eWEWuYLgssXe",
  "key7": "5E1Wm3cvp4dB67sbM2PHEqtgfDhtiR22fR6vrLZmo1G6rxpDww6PAkxy9zKmya3qfmPP1MxfNrboM2PcYN3qVr3V",
  "key8": "5VgANvKWkCfJLue7Z5u6PD7WNsNT6T5zGWQWjzE7pJEvFRU4omm8PC2S9UoWSN2wyWMx3FQT6V88itiZ7MffsiP9",
  "key9": "RZ5p3hz5RuQwk6kmxMtjXtLNDu7CGWMxo4B1ddzKFFtAQkEwXER1aVK1GnCxmCS7Nbb4Uk4Byg6N6dhnhxvLjU1",
  "key10": "QaJDRNnbpZUSD2Sbm5qoZcQr3qZuYNUKXpgcSY85cMXkRBAMsUJ3Ui3a6EPC2tXMeB9RwZYfR7sxbC3YJYkxTi2",
  "key11": "4Sf6f8iTgNGDvPJy58Mq44FHf2MRz4ieyDisk8hEbaoesy3Fx47yzMxCuv4k36DdHJLSv7q6EuKkuaQGBgEfCxgu",
  "key12": "5twjMxFaiGGShYVgzR9byfyZeHjDK8KNS1XV9o2UzjQvYBmCFXGBFE34cfPu35NuPsLW3VnmQ8FQZpa1UNynuoXc",
  "key13": "3NZtkujY7eQHx1dg7p3MEvT3QQDSX6cR5bWhhNzus1NttfNPB5q2wKEp6R3GYtMVJUHGG9C1sL71dVKLyo7AKo93",
  "key14": "5PoYNt118WkUoMBg6C4U6B4x22v3zBSUfhXte7Yq7FBhz9hDe6t9oAyLw8gAhRi4zNsehH2Lp6ZgPUdPRHzCmYEd",
  "key15": "tZjXQzymNoQgrdXkkoEpQt3rtXTFmq5DkEcsc91R5KfrY4iUSiZ8zsUMsjpPKsY6Dt14FioxNaR2ts4D23VbAVk",
  "key16": "XpU4QHshmqxxBD71X2m9UMCUMx99GpedM8vBrPAozUJA8X4H3GFHJGUi3waLfW6EGVzo26H4E3T6zjqdnbE7Bei",
  "key17": "5kUr9PrrcZ3LcsGpSTXSL6yUyAdstTTMCZ68hnMDxxni6eGUTKLwqtSJw1iJ8jQXrEj3LfJv3ZgqEtsqUPtwsdgj",
  "key18": "4n8MsXnZAZ9drcrDAMmsnJ33rkyN4K5tyTofQmBvmVH2j3KdBdRWwQiNukSSCKNJsvQ72LJzjpgCcMWfYtj3tn6z",
  "key19": "3C9XZeQCSVyquCxjwoxgQ1aLyJ1kJVCTk6JWWGkqgG9YvQAzVQaNHnYcZuEWLat6aTeoXJkNjn7K1JLctFm1Gi5P",
  "key20": "EtKkUoMBcn3t6nNhZE17wysYNxUHLBkk6P2QXg4JK4WixFR2MadTZeRjpQfUL2wrMhRTsFfrhEAzzpgKQKnXpdT",
  "key21": "25LrqaU5oK6pC7K9MUsTSwW5dJCfxGkrqWoVYd9g7nuB8aw8qAndjzf9hZZpvQXCViZRZTyuQRjnZ6GQLuU2S69G",
  "key22": "2t2nFQAYjpn4a7vVtFchZZQcEqR6jYgF2VYpNmD6SfLztYDvqmPW4JD2U17QENV6rjP1NzVx4sbyfYbcYyoz4qum",
  "key23": "2q5AhEHxWASoxhsuA1e35TQXouCnMMQsk7cGNH35umJxw8sajYQ1SvgK446xdxmShg8gpW8P4rk1Xn533aajim2Q",
  "key24": "27zFsNHr9GoMp5CJHLSvtrnF9idgrwHYca49MSqLtJ6xivx3CyvqWwyJrfYsoTwoGjV1AZPUgTBqrpVXR4RRf9mZ",
  "key25": "5nNEcgRXLqqUZ7Zeenz1JiRtEapNkKAvC4z2QEcP7F6Jjr8Q86ieiE7sDg92ZRR1r5f1exPPY9bWZVsBKzn86sc2",
  "key26": "4fZgZsgq53ndC3tkbFuejB6gCuueLFsBqbiQSnGvPU3jwDHBgqaMriJvvqXNxHV9SM1qPhzWyqhhWoTiAoN9tdCP",
  "key27": "3ss2Xc37BsiN23YYXoRhAceMxTRJWmCmN4pgmhMfzYP51YaD2PfbBgB7zPjeoPgNzbJQzcH4PvedX8iSZUNME9qf",
  "key28": "2MU4Bm7z5t9HZa7p356wyZ6YP59GtfBu9mJix22SMUB5HAkZ2wyRjbar8fs1ZNSLkLMKQVTtqQwzbLbh2DdgJLyj",
  "key29": "e5hDaWARJ4kPr1PyuV9eRPsnGbRQZtqDGJEg4AwBKJ1h2kqmXAB5kN7LmfJ6PwYCN1wJvNbmqZVzwXUcwEswz69",
  "key30": "eiCVqMiR5wvuoegsJjnYajsyH1pU83duNg8qD42Ep5LE1yvvVT8hYNfrpyUFW78TtxrBNWQpBvXg5HGkcQBVQi2",
  "key31": "5gCLyCMNfzCyEjg23PHi8T81zDnNLeTd4sRudmCeS6LErbymZ6WfiAk6H3ZXUnaAqXtnbpUQTRtaRmRxe9UkAGkY",
  "key32": "4WQ1qvaue86nPYXnqttbFabZbuLM1aRs3dvhrunvXC67AWSZQDnjuT47SWMs9oVA7pMqmJDxbyTKppeDFLPQVoTr",
  "key33": "4tmYvgfj4pLzurHRzaG5NxQRuGV6Eo8UHvh75hmQU1KzgEMk4u3Pno88LZcHixyjL52bjxvN3pqjgWwDHTTZfRTR",
  "key34": "mVtrUCCfoHVhbPvSy7ZDzMURw1Pp5PMhqR6a4SCUyLpS3YrafdFrcqV3FH7ARdWAqGMyumT95F95U2fjEePMaoi",
  "key35": "2QgbbJrTXucfvjqTC626Xt6YMwkQtbbaD6RV6mwUg19vyVWFX2pw1LzU3BEhb1wLQxCeaRg467mSPAg7a9zrEc51",
  "key36": "3KAaWtCDucPMJG9gEbnhYzfdSgiwLEuTUBBrSE9WX6NU7Z7URmTWKm3vtm5iay4bAQVgV5khU47SJUAaTqR9HViv"
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
