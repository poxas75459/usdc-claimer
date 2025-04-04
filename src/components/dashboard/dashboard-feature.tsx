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
    "E8GMhei55v6STAr6dQdpcxaHvnfrhZr355LgtqqX3BFPNGjpgorDzF18U2Xf477xeq8vbo6UYbAtkS4q346Neby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wteWFUYdes9JMfvWngGtSJw7d4mnAUbxGvW3nxLLkaK9iwvq6NDP8eLm2LBary5PFprFdSNEctxxX956kf5MVTQ",
  "key1": "5Lvg1UkjjW8b8dPJ3ScF8T7yTMZPwdAdoMes4fecVkZVmJcmtLJGJfJyDgYRsWGG24KvrnT5oA8Censmyq8PtFV4",
  "key2": "41Vu2NkDF3BbJ4coe2694NQevfGiaUhzF2vxabSoqaoc5a3KJLsbykvGN54aABFqKv6x8BA5Xe3GY7fKKpUHULzw",
  "key3": "5rRvQbz6nK86deJ3XqeNu21i5rYiKvXtSGwZjsJ1KUkjgNAgGD4YrvGtV5rNZhMUuBTYZpJ4JQiwdYrH8iEpgXMn",
  "key4": "3X6VNhiUEPLiqCQo2r98R7JoDnNVV79xm2ToZgrXPfQJWFdWZztLQCA3VPD69v64YsD9EwUrZjBy4dwRXhu1dfDn",
  "key5": "5H4mX66DsQVwWM8AVk7Rcc5McbB8tqeNYX1gTbkqbWddA8updhnThiY9Bf1BhbjykEUi6qDzcWxFgDQNwVgaXTKB",
  "key6": "jZuWsFc1CuB4KfgzDEwAj1XrqfjyTZKSG58Mpeihg9yyj6c7FzjKr1ycZbuBVBFSKnnsBSjSEHyCEWBqqRVB2Pn",
  "key7": "67ZNzqsxskEXbDYtDaNuoR6Foyk3j5HdY4vrELvKKbVnHyz2UEFF35x2SbRGbbPN6dR9gAi2RRGzFNf5kfN3WTvE",
  "key8": "65XgbPQW5hZWUEwQ2fWpYihT5gB2s9dM2RpMYzSL92rxVPnMxHKeNbXvdN4p9ToMw7W3FeBGYTB2KPC9TM1Ct6DV",
  "key9": "f92bT93DAhdmepowf7FxqKR2GHgo8ZnGrPhVu4NJgnNJX8FHStdrRwmDnjkNN4gVENbLvcXYo3DQ8G77BDUCuVc",
  "key10": "25EEPo6BqjGY5h18qkDKq21ecwjQXC3pJRtM8Tc2J2M8WtphQZz3fG59weg9R3oXAvgZELPqe6bgXRi4La2qxaRC",
  "key11": "5VwijiGGsKskCNWPmk56tV3Tofp7SukAHiHsqVgM3jFh5nHhyGn5aFECjqLJBB3wgr7hEALVAnVxK5cUd3g7P1bK",
  "key12": "4jvvahgN1oartYe8siARrw5DS1C5yzZPT7YGDizTFoD8EU5QPGGrLmyurXJDRBqJVAdfUwVjrUvtW8Cd4jgAvFLj",
  "key13": "4SZEFpaovH4h4Wsf8uzzKKt81pqL1Hgm4y9hSkQVXWHbSnZDF418G6Gzsi9cQzSNAekAwFcBnNNiNVwGdoYw4pu4",
  "key14": "2QwVN6uGU2PVuQG8C7ko9wWRYpEt1fdNbs6G182oA4uT8AWyNFzVz2PrsphcdvUBJ7KsuFxqtGB2rdGVn5jdyaU",
  "key15": "4SeDi4cswdtn4gJNA867NCkU4TzTbJFtFPjLm32whHXCyYBDkUHgRApUvLKUeGUXpEaS7eudLbdjMCkLB4NCXpKB",
  "key16": "2Lvg2tF2UvmYChL5iFhSVzPD8zV73jVKsAGx3eD4UrWyVhAomVb4wobYAzPA7Lrdi9SqZPczAUJX1ZtE7FEU5wUn",
  "key17": "5pqtNQsEwk8wHtLV4tXBQth2pPDP92vut2aEXi6yotq1wVFNck7DZJzHdeRGkcfv3D98Xn99uW3SoikR4uU1oww1",
  "key18": "3Ztfrm9sspNWV2Ycysx8tgRX4GKYTorNTVPAdumZ3ceGbhDebET7sF5igtEAKtNenwicQknTHoYmH9HfjeyhRMw9",
  "key19": "4AzE1B31wpS5ec8jDYLoaQyGpJBQdiFK91GxjtQFB4xyTJdxoEYDssMbRbhh5GyaFJaMzCX9MfG7TAvge74zVLve",
  "key20": "5gvpWFjCgWWuY12m4DiG9gbYFfkECepNMxb4HcBqqtF2MrKvnQ7egP1wkaRqr5JgEuxaSnrvyEHLov2WjQa24ZLx",
  "key21": "2sZyQD1TBLh1StEWDM2LejWeLqUwGHXTiDkHf9K5WekoLKihFPkE7MTB4hxNJXhaG6eb8hG5je1N3vsZ1k5GwXA",
  "key22": "3oGA4YuKJ9PgGLK374y1A3hNxeCU615KjpdqT9fVwhSd889zAnoBz2EZopNpxbqAc6GwaRQwVdaJyYjDSRqVNxyS",
  "key23": "4ifZcNVTGxhQwYG5AC12cZbgyTX7LtPguPob9rCzrixvtBZkQ2P9brwVhG5wLNDgoxeKHshkXwsCEyGWgp4VBazx",
  "key24": "TYzH8NKjZwDgiBEUGwaXwgg3JhgZK2Uau7wz4VpZXNc8Uqr8KDYcxeZyqKi6gUxhwaQ1ZwHCBAy35EJBohydm9g",
  "key25": "3BqMyLLeJnYCb15RoGNPrTioT3iAbaRatVQEyRvjMiWoMdtkPc3eqUWTM78HaxyPheudCMrS5NBAbUMSRcMRyJNw",
  "key26": "2KmsfeuVzx9Tyoqe5fVGkBJ8bgZQTh5Ew1PtHAFYPdjQwsV5rPtHUDSiMcX4rGFzrBjJhgCNgcjadWkQXCaPFLhx",
  "key27": "Yh11gzM1D8dbjRp4Dwoq4MnSNaRfaETsqwNifcaj9DtQQJba71zuC7HiJRhoM36dc9G7RGPpzKu3miZy1wV6EWS",
  "key28": "2cato7ma59e3mQR2subvfhFuix4bPVH9p9yiCwrwJj9C9pXeqscaRMvDYq9pYvgRtKQjWnDwAcrq3m24iht6t94s",
  "key29": "i7jQkjXk3L1tBgAdnEVAhwhUaLMZLNHQ2nqL4D9gYnX75YBtDFkbbK9cE9txur6Qg7NAALLkszXsxDJ1P26ZKrn",
  "key30": "3enLQZVRLA7CSqLbV8QaXdvwhKHnGbWazfKqCvpUgCgPeHKbGQEth72h3nJaBP9PaAEP7bqHwwhMCsejEySyJ1Jt",
  "key31": "5XLyzsoMfYuh3mRW1nqgM8ZmsdPe4mgrrHaWSN8wPevbNcqQDjj68XkzXLMVaHoEfiHcraWjrtSAZaZDPXNchwCF",
  "key32": "62LhmJh6FexjtSmDVWcd24ZeYXkoNRqS4ScWayiVdYzVmCKoY6GQL8DxerB5QoAdJGuLGThpBRGG9jCEkutKTp7t",
  "key33": "58tBpThXSJNpWBj2xdRHkvCHFUaLbi4FQ2T63U6hLFfZcneRV7GL2gspvkBt65MMYMaWKomDAzCGihiSuijcZXnr",
  "key34": "5oDkGd4hUKfDp93pi1JPLiSXkaGp1ypRZVqpQMqXzP5Kv1B1nun8uVKajmBYn1UFynFBX89MFS7i41ziVryUXsww",
  "key35": "5ySdPswqwgRiBxvvcCpucLKQN9YUYDqimGKZkcmAvC5G7o2AwsRisLFG1L5DanGCnrBhFJvPLPrjvXkZg5nyAioJ",
  "key36": "2o9j7MKgNcTQVhBBTWh1VkK3AGRag3f5jYNhn8kycvVgXssiKQtowhVLVhLiy51v1uRQcrfbdzfctQbiJoNvKN89"
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
