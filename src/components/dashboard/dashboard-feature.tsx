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
    "5CGbDzBBZ7uZvfEk2rNQbZSoJDB4a7RNUPgxgiuTZVojHy3kvRcmq127TnjV6unc36SRNVzLfaqXFy9fw9o31cSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ocazPJB4DxMpoKqDjGGTzrAoZvWkVGtHGEHDz6LotpcyMBtg6wpz6TRupgKrN3gFyMKZjCLQYxd7AvMku8ZPPK2",
  "key1": "16BUuqS4VouD4CLnDT7cGTZV9pb8jFmnzHHC5NJvU49u5zXqQ9VK5jopPFnGfJ7Sz9VfSpsp1npQt851LN5azj3",
  "key2": "4HcLqPMc8XWxk1idRYKo5ZaYnFcBZyQysJykZ2oyLkD8mKUstHNiErNv4VcEJ5Cu3chYmLVatV18DCXyK5aA2XYg",
  "key3": "5Jjr2foaaE2n5S4ug9W1CnNC5zn4nKnPG2dNXwFxqkieWrP8KZnj1fEEvw9ytdhxHoXQgxeVNG6aPv618t7P68P1",
  "key4": "2nKRGyUbDmD1r3Vk1Nta8JRHwXNkLva51QwHeC1CYjB6sB3f8xzt5XkQyKxgg2FPrDcNLtNhQQJ15XHDjEgsbQBS",
  "key5": "4xFw5FB7LZjWpCPsxvyiJhRbDtbWFhKVEd26iSBScAR7hpFLi5MhNXs789ShXUg8FzmvUNC7WQ7YgyoDWiVjAKoW",
  "key6": "epjSWNkVH7rZNW9HeoNNeTti8ernrGTETzs9VkZndV8m2gzCkrT56FDgyApd18AfBPzCzAhsBxTxf5sCxqWFR2p",
  "key7": "2ha7v22fpK1CRt8MLne6KCiwdMDcJyVs7Jq16bGwTa2Yx3cXq6QByH6szwYeCLF7XjxopMRSauf6BnrMgCzYqWkU",
  "key8": "5kAAuceHBNkgDfiSxYvCBvx72kuTWe3GV7uq9KpNpK3E4G7DG1AWm2uhpueuNpxkjxfRnoHbKwGJhchmBheiHVTJ",
  "key9": "4YsThCqDZuiDHYc38bTTQmA7epTNABQzjr8APTZwB4DwXFkj3oVpecLRiFpXdCWqNpLEPMhq8ow4AGt45KRheHJ1",
  "key10": "S5C6n3E2uAnVV3u1mUaMRTzN4vuNhcKKwsnCBfsSJDawu3eccMP34XoPzudipwojKt6prjHGrh5jQtnKHUdjZDw",
  "key11": "EgK4Kd3QEjxvSe7VWFEaeuYtc3oqpyfC4b46wuGfoacqE7HKvhVysPUzWod16HuUy6ctT8RXsKTAfYDUtyk2rHY",
  "key12": "27NdxAeJMr616uTM3Lrf2duhPCKjNpQHN28rA7sJgsQmJBFdfcZ3jevPzTYsg8CXHBWKQi8LLGqfokwsnQHYiywh",
  "key13": "61kaVRDzdWPCUUcmS3kbvzPDeSqSzdCbu962Hho7hKtgKSXnMYTGcr8F229a1JMUKLy1NsTaW6pBW2PLGmjxGAqE",
  "key14": "2tQ3ZLU4AhqEw6ngU1z7GSivpFpoTsB7a4HKhjzaz5xwHqxUdtCA9Hzm8nVQ6nw4e2oSGiHP4J8JMaYyUsEXRE6B",
  "key15": "3bPqXmsRWC5JdwezCCj1R2bkviDELoq1mfT9RGo4eGPaAR984y6cTWY9enJWNCAvWYEuJcNgYPNZDMm241CYUiwq",
  "key16": "5GGbriXhJvu9mLwtBRqGz1e21Y48AJgdxj82DzpWfjqFcVbPQojy15YodCeYnM1KXn5MksWewK5WVzYP8ci1wNHm",
  "key17": "4AUTXXA8JhDyGMzN8PKkZBpNK2V9HKnrxjyMdh9grBRkwmCucLVVKjRPYgcJPaFUvYzvhJQPLYX8Qxj7qduLU1T1",
  "key18": "2WRYSFgT5Rk7eiw3TGyaYJGjKayppMZCgvM46inBnfQB483kEi5p8fuwXtcBrSB6q8H9FjVkKEaq8ZA46Jwa7QdF",
  "key19": "4Th92h3A6CGL3SoTC3oYcUtSUHhthmX1Ha5M6P7cmsnqRkapDAjRv4HTve9x2kwEV9kXqwmdbpLsdkiGmGvedEki",
  "key20": "58GNdjDzfsf6kR4DxV2JaUdBq6geRM2dFJdHcVQDQqXwjBMCdJaRCEt9Yrbwj8JTvxqfY2VasRYFE8km66fz5EYX",
  "key21": "34KfF6V5NNms4QLtQMZCQNCi58cmZSsQVZASLf32H17CRBrKH8DqRtvMf2yDC2DXvoyKGstzyfnUrA2Sox1emEAf",
  "key22": "2XcbYxqpjv5KdrFc5iYDGdTwxExz6e2vh5CBq2mWgg6n15cdwp8ZuMos3ZnEHs7pFGDaF5EjAMjM5G77fAoEjc2R",
  "key23": "5gy7SXKwKnhPgHJSTmCm7ENq1uYE9Ud3e7Y17wfyASgB2eHDWJhKb95pSVLRckLNc965UDuh8fXB7uoxdtN2kYot",
  "key24": "jSESg54HW8ib3rqfaG3vRg3pFuLs5B9XjsDon4RNC85RrV57X4HpshKEnKXNp3Gpj4NPsRt1gzX8CKepk68yS2X",
  "key25": "2H3hg6MjWUyanrwSahVFrVtmLGZtWhe2MBiU5ZCcRHTUvHeW6ZQ6QMmvePL4XjwmjzYCSbNs1xCUzGbwYJSVbgGB",
  "key26": "3TxJADu9ceNWnJ2DP1acrUU2fcWwW4eCZsoHunke86Bpo69LEiJoWyCE7f7MyEDWYuQrVR4QUu6uQCGEHcyS2eNd",
  "key27": "4cCgNt8bLmwEwaFJmJmSW7SMeUhpNFWBYxQ1VvM97MeQN1JGh2o32NjfNRwycARbFJHZtfnqtYTWj35mJvv6S2WW",
  "key28": "45yvU3v9tiWFjaHMZHFExLDB9KWqrSxB2XTy7qMJUo1ygTMbHQt2csWChj49tPKF2HwfcexhfErEbLuZ7fz4wtkB",
  "key29": "2kdKBWPNbFmVVYJFimgPJx8HqQoPBtgo1Xe7PQUzmJGbmChi9LvuZLy3LmHcrNwZTXnwokyTm5ugJm5PvFFcTmu",
  "key30": "nWLVG3YxvskSPTPmeXmf6PrxyeZGWFHHZGuFNwBqua8V9fk9fgfvKC2x2hyJACCeKHRA16G5yxmKuMJzEfehTTZ",
  "key31": "2kKA2fVYA83fyMkRcZJrCL9snASXhUR5UbuJfMs7wgJmxyg9pDvgg944TVctDHA86g2HjkEMKbmEpfb7ycvGf6rH",
  "key32": "5NqWhBEm8mfr94HcTHQ2geuYKGSExJKLo5sG1CtcMPdRYGVhhQ25nMnFaqT2TJxUkUwoAVs8cVxuoyYQMHFvdmSo",
  "key33": "4Yd8Y1Mfu8XKp5pbxR87RuxreufTcgNZveGWt6e4XAW8SV45ieE1k9Whwj6eo2YnNzxhb6QVi2YwkP1Th4rLLnJL",
  "key34": "48Y4cVjAd3qWTZgnXj5ovawtHK3U4xboLaXmzT4Haf3WDz1qwU7LhV7aAhDAmFDG5QcTBrM56iSbVLPNdBUmBWNn",
  "key35": "56Vw7WMAnJRbmTRLEUuXUbUgZrAQ84ph2tTULWEd3BD9DWEWogYfLyaH6PYyUtamDic97AH75peNhMPzKX521SSP",
  "key36": "3p1pgFmYXehPGcpuSXJSgNLpfLHVZAPp6aHgqpHmcnFBsvUzjP8vpAnwfKYh4S3EMfQmWQWvnAQ5zCaVSiB96J18",
  "key37": "2pMXBun4Gqkirt5GQ6EGXZUHpLS2QVbGY4VdFVnVpsKvULedFzsLNWaCZSm44qETwa7bmovosm1ma8BoKo7x25uP"
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
