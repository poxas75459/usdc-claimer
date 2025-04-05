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
    "6kZVDVcaDQEXScYbkvWyKc6t9nbdobWzYXQWudPwA6rd4gjVQtMh5meCaNuHYuDQ3kEMJAeFd4ZmuePvLuLaCsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wYrYVH6EmRjBoS7VGXuztMJb6EqGCDi17iwRcnBECz8Fg5jrBGhhgLRntMLS8qoaKznEcBLJXjrcT32QqdA38Y4",
  "key1": "2wdDSJwuHt9rEY9xLcoc4AJ7aTDwDmFzPYnxWWaXpdSiEwEaGvbKnt1Q1Pg2xpAhC4YKyRae4jem7HGaADQZfWUV",
  "key2": "2owjS86X41SPF74dyXHEMeB6KUdDapsdZurrqj9y7jzBcANEvyBVDHdpUVDnrjFs1sPs9JqFAXJWHYZr6Wn6Up9J",
  "key3": "5UcxDoUbkdvaqV8hmM3G8nDs6LMYuv1CJgvofT82356KpiS1j7ASZL3vSjZVjNfgz1g3cXK7R9Jryi9BdcJEF8Ua",
  "key4": "hNDy8FCAmFas3TiGpNQNQ8SDEVaTuPC6nwVwaC5phAmMkptfsRGDNbi72hLmDPeP9qvYQY9bFit9YBnGidH91N6",
  "key5": "5SrD8dozJf53zKvhS9sCugsFP5yUZELoHkrjSLV8bFsiUdB75MHZN12fj6CUjQzm5k5ecNYPnzf8Ytyr9c8mNfMd",
  "key6": "b3rZGQR3ZHTpxGxDsskQcWhkt5CFuEWL4nxQNhbW8Uq5ANnNCT4mKriZnHh2C8z9ZvcqQugPwNW3V1b5VSshAbm",
  "key7": "4ZcHr1vCmGr94paB2jhqZE8c2UdBkm7nhsCHumLFCDNN1SmSUAkejMidraKZy6TA9FhakmAvHKUKfSeiUsd4WLa5",
  "key8": "5KKBHvjX4AhdBmQjqQSi9KbgFxn22fZfu9rwcahM4rotHYG1FcE1ugnVEuUV3c3xoGtwn4MFj19KvjRcNUUE5CDJ",
  "key9": "3Fmmwb3ypL44oSA8FYbEjiknjDsoV785rH2g8fMT4g6wZCKAe9DdM3vidKgWtRr8ftrgYK81ehYmaWQt7nWG2UEQ",
  "key10": "3nU1KCTpdfV3Hv7ti7i7aiM9KshRAaJuKyJWeSWW4yuLPijjbqjWj8mzXCRQPLwo1ZbqUjKoe3iZLhbLippYUv1h",
  "key11": "5xFFP1QMYvaq7KTFJjEtPHNFdTwZnnJCfMzrSRZuTt5AL4DDh8MHZtmPuJYRzvR2xZLAcBau1n5Yjvohx8QdXWq5",
  "key12": "Ut4zbD5qdoa75ZSgv74XuEJJxvumGHDjqzeN26GFe6skqnNHHr8zT9MvxLoBM6Q9UALVF6ckz3rmGDeRBLSQJsL",
  "key13": "3TUHeXsqmxwtiPgrmdcxyAoAKjw6xCMwYZssnUhUtrMK2HVmLm32FapfY3TD6V8PBcpDk9DmR7QzMjhPibTWmG8y",
  "key14": "4e2x6AyEmMLsoqPHf2WGHrXaaErPzATCv2FXtpHmqZgKvracUr6ysqJDCtjVwWEUoknV3m7rt8r3CNfw1WryGYYg",
  "key15": "5bui3hJysCtVEzsb4SapSNz5BvD6erfGUnX4YdsHEVB65pDuSiu5LFaZUg1tdNv2QTcGMGnyrp6MGaU3Pvf9RLay",
  "key16": "6NUeiHm7bpT9PTAZqpxAGcX7L2CfTJcxn8BAT7SBEM7Get8VJUyXgyDphpn8sRFwgMKfntWCeDX44xKY2djbpaJ",
  "key17": "VjeS5VStwFvtH2SuLR9mYGY6WRknG3yDsDARBCoHbMN6WWbhdsLigymTuXD6a2EBvxxoapPzefsURfp2Rusj4A5",
  "key18": "5uxxVwLacEwoHuMdQQsEugdCNoHfTBE4XnEFvHR4Q84BrmTyShd3171Rhr7Bm5quDrdn4NmpZooJCi93m3in66eb",
  "key19": "2wyLqPBnvmBZEzEx7V9jEWZ278gYt5NqnVWAgx31Ym477bTHLGaTchu8o43sc5KmdvPPWmprFg6rbjKeuU1Srgia",
  "key20": "VPxFw9uVoW7NvUS7PGp6T2VimX19yZS7b9D32ohN7JQfe51hRLUbobBsvaKkCaMbYGVjQYiB9seRkLDXL7FGTav",
  "key21": "2x7JH1zZMEARBscLZP4s9RbcSRHgGfeACausvkTqTSRQ9ecmTek6d1pfumaNEgiWKasZUuGHuqrz4yhy2VvPztDt",
  "key22": "WbYh68Qzz1DooTqVXd3f2BxiSv2LphWezCxgxXvFyHSQx8mtKA3o2Nk54wYaRAcyRG7jyiCgQMTcTNUTmaPyb7C",
  "key23": "3Z4ZVKVEiDSBY4YEmP6jGvhgUfrtE4YagTENH4WKv5rRFBEG77imj6WTZHgcrGm7NjiCLmt3qbAXd6Ye4UUdW8zZ",
  "key24": "4rH8PLqFbEXUQ39p6fxcXoSf28D263qjsvDQkrNgnxDwyz4jrjRnwp161HFkcKjENzQgvQewSZxSeKPR5AvQ49YK",
  "key25": "5V4oSKSWdhB4L3ErBGxGXrZqHLvsSDxdXCmbSj9PPjqf6fZu4kPdciYvYUDH1viVM1u9VidwFXco3zUerUzUUJeu",
  "key26": "5pnQCyvJZoYVi1xdQxu1j6V6mW475pacp7wkaibq1FHPKQrYUURNY4Vzr1Kf1jUAjodLUfypugENZoH2LvD93FZA",
  "key27": "rsuk1rvnFGrYwCWhm6FqcwKsDXrXcgkxdefTXZ3eUqtDL8ek4G2NGHNgZsZ3wAkdsupd1pq9LjP4YVVt9RvDz95",
  "key28": "4cVq3kp7rmZd7xc1o1heb4eda3mTJJehkJACMbzcQ7sRU5CQU2xkKwQZHKDxJZSL4kEK5EJZSwhSJWkFAtaHcRqY",
  "key29": "653RfSFnhc2owbBMickrnV6FTMYnGWkvs375QBu7gDTwG5AMcWko3XwhJJTgydZhUR2yGHqduovFoAuvVAUqBTTk",
  "key30": "5AStjy2doMy3wXsDBf1j1JP4XdqSKiKhDgnbfAKE5sYV9MWvbjrHWunEHQac2SUkXhwmmLN6C8GwL7937K5yHK8",
  "key31": "2eJV7Uvxw27M8qA378zs7pAUTyuF5oLV1FtWhoXwPYx3PaXnhm7qfxCyQ6rwUyPWqqneMvRbA421ZLudrpMhfBXf",
  "key32": "3y3pLi1XUfNxgtBdbcZMp5R3ZJnpnck5c4cT6NG4uYceej4L5ThybjbfNdPWEcmjrG8pxkyyzyCE4dnFrDyacvfL",
  "key33": "5zuknSJKHXZvHoe1SUJe5xQRsi4Vjmp4ipAJqCqGyirU94qRdECYox9aBzQXcFtwAjs874USWiuknTs5bbPLRz9z",
  "key34": "5WLXta1kyveLMWuhfQWqWWehSGrEM2qxGXCjsg6hX99hXX9rFc1a7a6kxaetVuXijdQCjZHz1s73i2sguJ3GqPXr",
  "key35": "KLqQmqun2UCKeyk3JSEUic1UUKfuLnc7y3XvsojwXVFBWmffLY2aD4WdVwP4FZaXnEs2JsJsWiJokjpsVQ7tdcx",
  "key36": "4wjArK6DzfcxHV4c1gCFSvMjia9prkvGHKtV2HXQnztcqBj9zeN4QxM4ua5xUX1SvzMDqNdjUJKwoFxcGu5wkdJM",
  "key37": "2hVB1d8pvXkTPxcV6e4QMHhJCuLeMUdUqqeWs5aRrKZX6SEy9x8nX9czNHwSGJPKRi8vGZFBCnKyNPauWPeBbadq",
  "key38": "23WH2vVdVNph51EJuV3zWFP8a22h3sBd43johqd4Rfy1Y3668NrXD3WFJPPYFSECB3v3nFqckvc7XrfE6HUyasRB",
  "key39": "3BPGByxaasTSLStyNnMfALYk7UCLx6vxxR53SDcyf2MC1RRnR5f7cpumwtM51iWSZN2tsoBjWkJ9rBGyJJH2oExx",
  "key40": "dLTF9Tp4hH2FVt2PjoZAZ6GtKh7RJwM5oWVgarRbn5y2WumeWs2CLaG5UXgXB6nJsHuinZk5FFHyQTTeQQovhqN"
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
