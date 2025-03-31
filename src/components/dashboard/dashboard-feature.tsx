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
    "57JjtbwnK3GWTsMvwDwhhuMjM9cHMUdpBqLzbdUp59EL4aBgWfkKmFEimGujPS91CHJru9N8LAHL2uTgFPdrbdZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KnBQixiBFB4eYZd7wMCND8dfJXXfqtcRbpcpcNiAWowfwqNAsgwPeP1yciQDN8EaR21baqjRVndA1mGjTnwozCz",
  "key1": "UKPHg3vMHrnhz1i12Cwr9xhoY8rq218KgWWuPANYC4w68YWxX6JmGa6ajuZXQuFtnuwuYUsohHFEyihU3AtNXbU",
  "key2": "5uVD6eW1oZngzmy5YnebTPEBBjTzKjufhadFDmRWHagHdTptepmMzbtiCrkkujYjWpe7KgP581tsWAapTKdasURo",
  "key3": "4YHRv6KNACQNojDXKYGwjMfz9V6yztZRPN38qRYt2SUqXzCUUjVacayEM9SAaQyvm6UUdartU6zJT6875yEfyGu8",
  "key4": "67G59T1YE2sg4MSU9gw3aNXT5jpxdy2NqUFYUzMvEw3YdanCK47q6WbtdWqTsUqTe2ewA6xZJwA3cfX3XEVKCgod",
  "key5": "5ht87yTed5q2APKhpgS45Lfx1DyirHQYvh3VMoZpqx7fhnckCEUDRPw5mGESLNGUCFXEmwwzHSs6fxJDvmR7B2Xy",
  "key6": "2QiAM7gGtghzcWt8nfkDdhMZDNNuUN6tZrqQuuUjq2XN8LvAwLPtMZosSnXmerhjqn5CCNvAPXwxFLp2Mv6HAroP",
  "key7": "2Jh1rAZTWvZGXKrWmqP8wgaDWnt6Fbjb2NdJeUYEUWf6Q37tLWcrajoTY6Nhc7jhQcX3o53SyVwNHzuZqsrfW9DW",
  "key8": "2hdek8Ej5eZtsUtNy5PTr9iE1PuCPzXykynyTrFd8UHgrcznp6QQcSYX9WTDnGv24BxK4QLKwU8GuHYLn9hceyph",
  "key9": "3zQemBrc4prV6jooQXxE8c4oQJgbrLsahxLijsP5jU1h2ZYHG8gca85YVAVrYZ9W7FC1YfVQz72zH89ny2FNGVtU",
  "key10": "2frjK7AYU9CofZjPcNw2djRggzvsC1fryCrx9ktY9KfDVk5FLQvxPRUgLTthKJbTVqhrZVtMsxhuxu2pJxcp7f4U",
  "key11": "2NZgfLijX8YDJyfD2L1AHMqAh7U1M3TkaVhmo97ihej27rVZteKCQt5c1shMtZ76LjRAHnGtezJWxdpFtE3YfKYy",
  "key12": "54mRk3tL1CnqYsVEybksYnAsFygTJTWjwCYSnvdHkVh41P74T1SzHNsGeCkJRMySUgjY2uqQRmNurL6EtVTmh1Xa",
  "key13": "22g3Mn4Xo5hZHTV21eSV4VRJzcxgK6ZbtjQDgQpxX2rr3mauiAqkpdMSM9vgepHBc7ak1k6j9sz7LixjfQeapR4R",
  "key14": "4DLxjfL6LB4gJDZX9UyA2YnMj5rAEgMxne93LXUHq11iZXjA62Fu3Fv8n43Woo7JtHm1nct8qS4qKjsF4PmKDkvJ",
  "key15": "5GGrca6EMu14CxnjQgcVhzdKwUwaSikdQckptNFqtbwENr6rZM5FStN7zzXZWTpdEv187vgpbFPZC4agPeqZPQzQ",
  "key16": "2QzqdoiSoqXdygdtY73TrwGuGiMcNELAtmRwLJ8MkXUF4NDPUjXo738avRg577dt3JzAAg2fp64AJgtxA7BZf3cv",
  "key17": "dG1iEP5yT8jPj3eEiUeggCGhXB8gCe3p57cyt7NAcfaD6AwSsvXgbL2sAoi2RrTeT8NKnPAMMdjNk4YpP91jpxj",
  "key18": "4nk1ea5pivvHevn1muppsKqYKPPU3QMvx9ww4XyA2hod792tTpjLp9nqpvK6xccfifuVcgj8s628ZXqCTeNbFCnk",
  "key19": "4Ywj2zsAUwaGZJ2GhFBnr2Q666oVEiPacj2jEQR4rrfMdKkT6SjYRoUxPFp4qVL7tX3mB3tRQynAzy2Y3Y2cUpR4",
  "key20": "4s3Kgww6iFNwJZPWEVuVv1iqk2rNumaxssLfCjLEjTcHXQr7zVTekGSKYgRsnbzUmcM3Jtus4CrzaTWWDFXQKkrj",
  "key21": "iP19iSNo7edvEb5hxQDSwsEK5vpaxCypCP6uG42V8EoWcyE4j8Q5ArDi8axppGMPxiLxnYW2TgGobcYGekeKP4q",
  "key22": "3mynnv2ovxMgQEkcZAX1bGyHPhxttzLqWZ2UZd727bRhkZ7QYJtMXs6pKC43m6FSeTLSsE1N2WzJSVrCvpbHiL3k",
  "key23": "4EFXpN8g5W9CBVM9rGJTB8UpJCsbwQgEmdibfV3zCGmRSK5UwkG7e4xh6NpwUmtD2ZZbXVvQuLcuwYF5oDFfqV2Y",
  "key24": "3wYn3wR33pe4HAvfetBtmP9bd2Bcm1f1FMdKMYzw7jrDZNvfVjL2GuAG7nBtr7A5u9uvm9UZivubSVXC83c96gxk",
  "key25": "295QijRXoQcB7vrEa4CjdCKpvHfzXPmYtehKkMbhhjLspm8T1iqhZM9nwT94GSWBqLzQh4VTnDdSdCPJ3SqobPdE",
  "key26": "21c7UcoVT81CMx7QVjT5kGmivEP7CuStusq1uhxXBzieXpfTEW6mtYMzbDJwzEs7CAW5erPtc2NCJmUeRNUSkjrZ",
  "key27": "65Vp97K33Eqh6xK9nLihLanZXgV6H48kqSqPKTChV4Tym66XZC4vTYXUrxbXaJBuk4oYsmPUFoYiZU9WkV3CER3v",
  "key28": "276HrVA6JGEjDudSiRwmhpk744wKsfmMm2zMcgZRi7HSQKEicJ5xqp4QT6ZqhP3ugtEsvC5Njto9soasbYWJBqAf",
  "key29": "4PtBsgDqndvBAtvDuqE6XZYxtEcWi1fN56cUQ9H94Dq5aoM2mT4wz5e4DYC4DF4gokyu5ko7E42upcKc2aB1asXh",
  "key30": "21bV8bAyAQnA8nRDtsb6jKsMEaJmcyrEkeBWm2r2Gx3f5UVxrTmTED3CThVmFR6XPKFV2LagFFcLpkGZVB5eGQa7",
  "key31": "jTJnYss1MmqyibGijuLNd8uTTwX8k4YsLKhacqTXJF1p4pCJXdUQKdfSTadnQcHhgY6ezP1p72syWTJfv84H4C8",
  "key32": "ojFKfMxe95Qh2RwLTLtT1jAwEtaWNmiL9KdKxRYWeUkBb1SRCvDbj1NmJg1TvWcE1Wk69ZxMKMuM7tUkdkLpcdz",
  "key33": "2xB5dotiqyqjpgWm3V4mNR1j8tJWWS7pvMiwW61rm2FdWx3tFJFg6m34PjggNYePbv2jsrAyXJH4TjiPEUnL6xJw",
  "key34": "29zZYWBxFhme7yLieRa5haeNds8AcnqcKKz5C4J9jpPwAjkwmfjTMap6JgcvzUakM3PAKmT2DzfQXTVSuS5LsCRh",
  "key35": "27sw3jczgs6kG7hVKJ25DB7HZD9JAKS6kKR6sSfS7mJyhU3bCpazM4uikLkoLsBgciVBqn1n51daPMfzopfdLryq",
  "key36": "26Ny32Rgkn1C3MoTLUbgdiNa339ZUNFTdHVekGUGsnNd5k8t33bRa6E8jbsU9MrpicBqorWumg7KzniioJV4xXQn",
  "key37": "5NrwbL8WHjeurG66mdr8JMTHWhNq6SEcqm26P8Cyz5bZr5kCBreGtiEPhAxy16YM5cRAF1d8ft2z2WkTdhyM2735",
  "key38": "48JNNgQCzXaLVQ1bEqxPPDiz18tA7TEGb9ZcRnUPphhBVJaPR6534HFGyETtWz679qE8cm3B2hZsu3MmSAu79ZVs",
  "key39": "RcBWDCfkfFj6XnHCyCdyQL3LDM5VYkQTmXx8kLwbcqmfgzEvV6sEDXzmtxbeWrKREgJDGsQsxMToGU65cSCLMYa",
  "key40": "2pPMmv6QQX9gd1jL9FduJynVeBg41fznqv3YGkTyvqDXpgjvxUGshe9PjW5zw6rb1zA5fpNwA6qTowkKmJ8BwBgs",
  "key41": "2X8fxKBPTA9gV3Q1ybBAufDvQSSiwHdeXw3owmqz29L9TdZytj1QXWANtAYG3d4kjP1NvMBayE2QXQwLajhv3MEU",
  "key42": "54e6saCbiwyr8hB3pAmXVwAw1YMvYasyESpPjsXq4bcg3vKiuga4oP9Z1Qzhb9MMdSpu4zbZcBeqJtP72TJeRTVe",
  "key43": "5zzdbTZR1UhKibsUbpXKeYRtTzutbMEEKvBDucyqHUVpPqmidmYDX6kWhireBb69YNDsHJM8pg8KHLYT1qkUv7TD",
  "key44": "5y5CfNQw9c6AeE7YGCu9pRdKnsXCntiiaxsqF97Erw8iReXWxCB3hmicjpHBJNDR9kfWDuE9sQbSpgnoD5NoF2Sk",
  "key45": "2mdV1mR2RzLGzoF68or95AV5iTkTiwPNtPF4HNyPNjV1S3dxWDKUgrj5Xbac1ef6YCDDKLdv95fKQdW7erUVksGg",
  "key46": "31zDjvRJPNX5pZtNJSUWzMr1umo1u8VMQAB7BJPHxL2EvBP3wu2MJDHFh1tHSQDBqTRpoDTwBK4V3tgzfUWaH2h6"
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
