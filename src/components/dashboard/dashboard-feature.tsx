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
    "54gfjHvGekPTCMHifgpEFz6CtsryGRi9PkXwJkgThKAHG2wvcyBAgRfWS9gd6hTawdL8WRoDmJJucch9zJtA4BW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47iYc9cfGvFc7Fg8vNC2PQNVomCRFXuUVUmwV4hjAvTiMq6eecFuxcDo2niBGUEeGLP2ETZckpn8puBrEUyHnbix",
  "key1": "4ac5DKzS29t4TXghSbi5Sjgk7Kvzr5FdwdTauWqAFFMPgNru9VouGyhiywqtcvZQaSZJCP8rqtgvpxZAwgRonmUp",
  "key2": "4yUySY6ULcpPX3w8k11cBH2GUn8mfhx8f1rcYv36AAD4jdYxW6f9uGTBNS9t57SvmXV1Bi7Km4ryxot5FcfPMS5g",
  "key3": "4dBzrxFxpahnTdc2GV5wafgqM5g7wnv7obujGFZbAh1mcTnR1ZSp9VpLcScAiEn3TKuvSx6nTfKVDa8S6wt7Heia",
  "key4": "2NtVZ6hV5Vx7vLa5ntzJPg3jbuzSWXgzPnkDTSS7UHxMCvB8cP7UJxK1LvDqjiT1R27vTrcTJB3qEVS4UkL7nYqg",
  "key5": "2ZmViTVT7bPsM6TnVgCjAHNWjoFUUvKyFmRVqsQEs9VvsgrNsPqECX6xknAcsgVHaXaXm3cfkvssxig8uzJj21VB",
  "key6": "2mAwjn6qW4iW537w85dHLrsBFcYnoQr9UA8Nz9QkEMMjByXoDStVKyHeivpgva9V14d5z5LiGNUmTC5wrKC2D5pP",
  "key7": "2H92iNwx64ZfmtXKa76repNF8Ck4z4b7H3WCKYH7pbWg7tPqhchTMcVB6Vq5snjxER9vtmrsseZJtT8XVhX5cGwo",
  "key8": "5Dr97WMBZ9dNUGgnmdyKmBi22TLGTzQxAUjJJutVEu4FxdHhf5YbFPgYsbT4oWhSWvtH6sYK2c2jBrtKCnwT9s7E",
  "key9": "3sDbBZ2q3j9oqr4DQiZESaymaHcPimYrfnW1TekvdCxAkpxamcJgTKRnhezT2Ys21HJdbbtEfBEGrCPQvskK61sa",
  "key10": "66chSQMMj5QakMdhZNpM3k1Hp79jjbuz9LXHYMRS9zimxv3uqfThknpj2hKn3MuvkQN73WkiE3EaWwVY8cTNzuw3",
  "key11": "2zZdMH45mSbXni8caRqJYnLuhYAJ97MMsWjb6ZQ87HUEDbG7EUzpEnpmjVdQnExd8TFP8ES3Z7QqEfpFMRKNJ7Ay",
  "key12": "5VwALjHT8nLS82jpszyWx7QtZEaMNHpziGqZLdXjY683cVtf2yHN4aPoRQenEhWHyDvBW1wN1vtw7sbW95gqFWsx",
  "key13": "2fZdk392Tp39KtjagCfrR57M2EJ81H8NLAWgLytgfWacEqnoCDhwuvy3vEAwABitsmdCpsyTygJi9kjr48eQuPGq",
  "key14": "29wVSR289YZyU3NBkuQtNLCvAeNPiS6Sf71jcMD7FfVhziV8aAkfaQacS7uc2Hq8msoPsYLfZAR2U249yRi2hBf1",
  "key15": "5Z3tUmnZrhv4An6CwKQp2FCjbLqeqCPPXNHR8RrKesD9nTu39VKd1UuyHzsS7MeNi5Z3bYABSt6n1rFm1FoZCR64",
  "key16": "49pVGdyJ9bXmZ174QYihjiaVwqQft8babMeDoLzHR1yjNgDjzbsapj4UCDARX7bhomhV21JSjMNaAyKWru9kHsbb",
  "key17": "GovzGEVmZFx96NgT3sTfPoNjbPaV7QJKH5T3769SwpAYCj9Ydshcb8RX1iGAQh8dxYczB1zeJVZdQSUjk3tfaGr",
  "key18": "2VeL4fswfBCMZwWDSWwDMhdiMhPhw9DAQEVcYJreKZh69UEcSHAgDoaaniox9uXuq2Aekxo2ux82X4oib6wFG31W",
  "key19": "5hQkS8z8CSaPabUmQedizfY3FTpcNU3C68eQEzQDGjnXwZc52y7aTdkQew4TfstHvTAvKFuuZcw9uSjx9k1MU9mw",
  "key20": "5LQPCsXudTRZ1sjoQjU1AUK9ifx4uM44DoXZ6w1mvqSQm1Ke9YL16A4vRuzDCKuwxat1jrrSSFeDpbQtCiAGoVPD",
  "key21": "2efcgnkMkFzovuDwtsUhjRcF7kB22jeca9VCetC4Ec1f9nX434A3KrwNZHVFGpYYkkt4qztNNH3drNmCTdcyD4Fj",
  "key22": "2rB6rxsAJPASYquQ9pZ1tkz3rV1wEKqktTcvZPkjkM7jjXhmpzK5Axg68MYR2qbh4nkBbLcjQhdXvScazfatjKMV",
  "key23": "3qX7vrTsd9oFt3BTTFR2ucngzH1j9E8nmWfFeQ7hxhTmr5V2Fs7cuU7Bkt3Lyq5BX4XyFJeAm6t7tvPMeHgsRMBm",
  "key24": "2EGTzEEh4vaEntPtL6Xhg2SW1ayc9mHqAB46AEiPuCJ3gfrC3ZChjWfGP1bsqJG7GCBjKo89JaaYUBNqYWcmXpEL",
  "key25": "4nEJmrXdcKpjcNda4E8UFTy2vtmx17bdy5mk1ojnL4KUhoTHBobBEvyAnHYH1vrQU74CwLVXVsFuqiZZFxnxpotM",
  "key26": "27HjRDPCqkPYf1oe2dfoS6Tpy6sWmzfjU1NiXbAUDeJvdSVa62bDWmx5fvcYU8Zkn5eytyxa22JaFpc4Syu6V5qH",
  "key27": "4P68zTddmruHvZgNTYNB5ihym8pQB5cgmwL86riioBC5eva2gMLmGkgZP3VLyv6tXD3WCUijd7xqpR8jpFCjABs2",
  "key28": "3XR1sJiDatPqDdyMsNYL2vT48NaH8idbod7VNBNhqMQakUH4qiGyCJ7JdZRN7BUwW5viPJcAs31xakAiAMJtP1vC",
  "key29": "4Es4Kdc4KWDR1pzp7Cwsvk8a7PFCrqF1ErA8TmZxr3q1orkacp4nnbXb4ed3o2jtXehK22DvzAzEf2qB9pcrT4pG",
  "key30": "5SJxSi1NJnDm39MypB6YbjStbFRq5N73tRez3xbupkeHY62q8RzMuMFctqmc8RXfyQFAJtHrx6bk1QwqvwRYxqfD",
  "key31": "26qQrnuiicFy3cLVXrkjqBCMnaGhNfgXVTyCgzgzn5imhWpvRV3y1ZVmM8DaBnbnKEhTGq4mF2raSDnp5qiyu2qQ",
  "key32": "4n5JGxgreK2XCjHnKNGg46JqrQn29P88LZTUogPAA9sBg6mTEvEs5bUiGeK2ViMmpneNiPCzGHuwzQZBjtkGCgWY",
  "key33": "j28ZHxc1hYgYTSGy5AMJC7eTEJjBFdBNrCsAVtLP71WxKp6BYnKHMsymQhczX7qXc2budJFyhsNpH4uzrbsA4x1",
  "key34": "3SrLvodh6DKo81m5pWRv4WSGQs72nXe1cSUvT8fBGrZAweB5VcgQbTZaUS9WKJkKfoJmTNgFurNh8pepkowzxWsi",
  "key35": "3Hjr6yDRTw2GLhq5jn6GWZFLaeHvLD2kYNXdyPPSG2un5WLQLLP35e4kA8Zmo6jZkcqu85qhU6GJzxakHdSBUzwX"
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
