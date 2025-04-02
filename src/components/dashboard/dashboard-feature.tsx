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
    "3DjYTMj9D7Z74HPAgDJtgEMqADbYGJ1HqH4VHgBG3qLYiJqe2z2qT4zyRKG9SJZhwTBRsKrYsyJJg57ZF1M5wQCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JU3ikbLXq1G9AzrHwHmp8SSLEKFZtUdoW3sfNZQQCGnZwzRbNwMUsdHy4ooJci8x45TSAeqpKFKcEPGg2Sows3B",
  "key1": "5FnKSyd3vc4YXu24CS6mXMFJcQ8btqf9NFDq7LMkBY7Yf3um8cW5ie97U8XuoWYkAXmD8hCuLjEE3Zh5cR8R5bSV",
  "key2": "3fFiDqnCYtz7KhBRezSYNrVP4uXk8ECJBopetBDr1Lf5rojdV4ExsDp7ecMQ2LxxoabDSZ7Fg3QXdDvrQZR4GgQj",
  "key3": "4t4bWEJiDeoFeu4szG97BqgJpsCkQ1niYcBa2jwAZqThXXo2Xb9TyPJegEvNNj7oGEbi4YJzajsR3Xt7WadUGFGg",
  "key4": "44XcSUAei83vMuqKHujZqdenVJbFwPsAmuEyRy2N5XbUpRAksRpEZ89kLqpp8hCWfAzsryRqNGSXQeKkodkAeUtX",
  "key5": "3zYaNiT3D3awaFm1JHyoFdB2GWyLEC7BNWU9Kp6dXg6o82w4oDMvd9GotXAX46qpWtYiUMFEgvC1g9Jo7AHVEbM3",
  "key6": "4Wk3zJDnB6KidsHqtCh1mcicx6HaZdv8hFWnk4E883tWMe2SoXp6wD4U4fhNenFbU48fsmhEpVUvY4TTGea5pXPh",
  "key7": "2zGdXmUtjyaSAKd2s5vU11r8pf6hSpTS4onnS6k96Mvyag3m3V6Ra4AeEAsirhxkqHWKWJSKMfP8F9dtRz6PBBSM",
  "key8": "5YJA1JbHWQbqnQSYusNNgijfa7xboGCjuJmYDdHAzfevLeu135GGRRxxsXW3mHoPXLyDuvGx1BAdhGe9GHEhjiCd",
  "key9": "3jeGAzjjLoFeSuH99sx7rqxv7QRUJ9PCApeS7Ez7P4ivRYPq564PEv5SvnbPdgMpYv5fMnX9Zg2fG6xJZTawYEPU",
  "key10": "p5eLe6r5EQGX9frk17ye7nuCwP6jBEsfFyBzWQGEWTpqnfTTp4T6vwgjyXT9kVVysuPReERbUCxtKQLJiwuxBg9",
  "key11": "3EueUjmNFAS33pA64yKQGR6RZjZqPeRta2Fwktg3KizCu1CtveFaJStfd2hreecM9fFVuWBpH6qzUt5Y594wmJQe",
  "key12": "3j22Y41AW2qyM31FfLxWaDs2fTjL2PVCPTtRs8NGAG6G8TySmVWALidW9e8E2byBV53Ly7A8kTwRQ4Gcqg24izrB",
  "key13": "3d2CTQNp3wcKdj8LJG11yMA5TEDCiyptuVS4rUPY3KC3fP3qUY578TGMkvHRiFyV3sjpQLVK897eiWw8crsNziSA",
  "key14": "epQRfVjr4oeoV2YDfdCt4MQGGYhgpLEgAF4Lg2RpyHHSgNNW6ATgPXwBm1R9CkZPikBkgcv5J4Pqb137UmTaWgt",
  "key15": "51XAwzHGpp9p3a4SSNwAgshGesyMNf1Wecmp32nmaBHmPwSU3k3FTzqX6DddECbb3PeYWSLyTx22GfFuTSHQZsW1",
  "key16": "4afG9hAa147sZqqKG3VXWgGbwvV4JDsexkQT9TaUAXk1Z11Pn3P9xS7v4sPfBFSi9k7b2ofsfWAQ5dB15WKtUsY8",
  "key17": "6gqRsbAEDk4uyj643bDtHAcnU9tQtometPtGCJjRdYLBq25fJkJ21PSc6iNxxg3vBUuwsM2Vuco6fvehuwjYb5Q",
  "key18": "635n8TZ1mMrfXa58t7Xbq1zxwpH8Y57zap5yaUKZgCWdRzTWkiLCNym6P5mdJqv5bAModeQP5NPNkkt5i3uaiVva",
  "key19": "3sx3cWj4W6UJb59RE2WM8Z2mAyixHarxAugrW87EEJJsh1u1r3VKAPzWRpJZHwgoeVPXskWHjxD5fmkZ5hAqZrtG",
  "key20": "2tK41pRLX2FFS1HAL17QGRGoq9j9CWSUKGXE7jg7pmK2A4dU9mMz3VmETQQePqVADiAjEYMUvE3n6Wx1KnVaztjB",
  "key21": "67RYJD8sQvwUPTGUE7JNEFDZrG1QAQTwTt1ZZmU8Es4f4wL76UttfQkTNsq9bQ6C4XNTZVrDz4FEAw6BoQqBQCTb",
  "key22": "VhvXYgAQnu4SqnRBvrAAChteiRTug1ESsuTQeNDAqELGYQ7EXrxhUxSmwqzp822mpeFfNa1sVTbvcGvCUbRN6Nh",
  "key23": "TC2xm7WonKYn8iU2o1XKLFcDkNcyckkuipCUpKpc4dUfUtftA6CeHsVX9paHV6kCb7V6cDjgSGmiU8Mx4GPK2vu",
  "key24": "4yzuWXGZZ48q5tRJ8bSRNvQRFfmqpWWo3TFK8phNAfHma6fHmg4by5owUJPEG4DaCZYCvr85mvhKyDSZvArjgKRC",
  "key25": "3JnTQ23xtxTtL7ieGdAYHxG1eUzHYcRsueRfHv9nZoFfGyioVj39iTdzWq46Th1fs3Nn5dXKFtS3cAYznJVHf48M",
  "key26": "4kQYpdsELymREx1JDfGnze7CPcVEv3GuVGX58Ey3hLeP7B7GkV7LCFHDYdYyaAkncGL9LLuDg4tAKqH8TNGEEUjo",
  "key27": "4Ch7W3yS4qrb44TVjTrxp86pzpCA6QdxAVQE1E7ymjdK8YPvUk1K7ak4QwpHR27UeAJeya8X7HiKcDKoaT62ETn6",
  "key28": "4kZphbTbMBbJTx4eg8ZETRUB2Tn4n7eNxigkUGVQbMJj86Ssf6cfDeXdRj3r655J7QZMwJo1tRdcJpgAySgFpe34",
  "key29": "3bDFNnEhWSeoKK82DkUdBBEaZMJ2FT5wH7pRXSmdm28eU3CBeJRDCC3MQfBoxjFKLo5kESGoQJCLF3EMSaocVPLX",
  "key30": "2yV9U6eScEAiNjGHuaZTDMWY7w34D2PLwnWKR54hzLRggLGh7m2q1S1XG1mPHSGPH34DrEeqfJMJdnAWivEVF7ZR",
  "key31": "41cawePM8rb95R8yuGthdUuobmNfKQEJ472cB9RxbcUemyoLn5hGC7DYfz7MibXa7DLQhBV8BBBvn2G7qVoSqtEs",
  "key32": "5yb4BMub7CXi6jDYQ6V5Sismxqyva6jmo9XDY3k5REqJjwVrnsT3hukisjutQo6UHfWakGubf24s9b7pBAbqsmT2",
  "key33": "5idxpTpneoWBa3YRz8T7785QTWfLuVXZ4h5fAtPX5sh458GsJiU91yt5K6ZQ6LH7iHY3kJQQSnAuBKnGZukejEnc"
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
