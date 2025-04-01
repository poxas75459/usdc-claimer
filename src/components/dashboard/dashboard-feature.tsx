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
    "WurMeWjD3M23UP8g4YjGbHR9J7pyZ11cLZL5jZ6hF2Buy7CwtsVUGXxuH3RwahBNkEQCY1DJLHDPRumAsZ3SEMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "551eEkneFzajKsKLesdtNRnNJx7Xove7GTrtnhz2YMRaxXNcwu6XtaAgnzvsQUDh1aPLawFgF5GCYZrVvm67N6oA",
  "key1": "4TW5aCrpaMq57mLnE2CKRXVyPC9z6WaAhgbGvJ1HpMETiJmT5XpaiouC7NRTXXWdFEbD9VM5XV5ADEP8dJ37jikW",
  "key2": "3FM4y1Y6LhbszVX15H67WPXvFLnYFU5TxXRTzp2NqdiqkhbjfqN2BW323HvMYGiiU4koESGwgKtKf3PXZAQTQoZ1",
  "key3": "3uXap7A7uN9G9DWyheKEMjkD2r5RLQmmM5wuL771HwcmM9NRLHctfNXLFxXA1QQsrQseXjXG1qDLFER4SCRo6Fru",
  "key4": "51U4E5gkPZr99LERoRb6GJDgVohpvwKn5fF67iWQgUbA4te28tumeJXhaaXqCMvCDDCNTfJH4tc31N98H8G4C9QR",
  "key5": "2SYTbLJminsbSZ4qSJzQEmPRCDBxPwhXcKpANJUm6CtYdcVCFqCEvPxg9WNuVcbAc2WVNv2dxNKfUD37ycyRTDvz",
  "key6": "5YaFortN5Q6zTsjmhdCtNwq67NDdjS5txJ3nt7dFVFL7Sky9JhWCm7jq5JMnggu1pU34P1iNvHZoou4bxumbNKcJ",
  "key7": "55aT7bryeSFVRwUVMG9BukaE7ucxv1zLW3LHzJSEq5gi1eCtn6m7HP3hqgxVSsr4rMtHArEfnS9EvCrvP9mKpy41",
  "key8": "oKnNWJvbf2mq6a17HvVvYNkWPaaU4ArgxStKrTkwbLfzjPfJgiqdAoyaEicBH2EA5s2rqXdh2CTqyMDHvXpMcJk",
  "key9": "5rrPzcaDESxR1afxHt4k4MEeehRsXukJpwbc7eXymwnxx29qvYJgbusgAJt2Xsujp6c6jP41h83r5LA1o6TwybG1",
  "key10": "PTry3tGSNUHi7DXejweapVyZz59SQVAL6cZN4enFgSthAFA8FBE4vWkru5DmHPv2oCM3raWTtvnPBGWHYpEutLS",
  "key11": "5YcETfhNJs7ND1pbZb8HaLgjimJwrACcoFjyyY5uV9NjwgihqVetFPnc6Gp6fFJ8M1drdBj3LNd2aBnpZaqw7EZA",
  "key12": "4SLxwgbdTjNgWaKE5Xuct8scpMF1z5GY2VRcFSQdhkLFpkUEWUKYWsbXT1JaSx54SJdZGNVTzFGWQ4xuDDJULx1j",
  "key13": "sShgi4u55MF9wn877kMUc6aRn9jLNj3GoY7nvejJtw7fLgUrXuRGGdZu1sRxyRG4BZEadwQKJbbdxWXfomdLvvG",
  "key14": "645nGGErsDprrWzqFsdHUE63grzLDTnGU2Gm5ep7DgwfxxywvUpqCEuUJWTVDrDnavEjR7QmHyaysct2Aj6qUpDV",
  "key15": "5Q74nkEjcgfkyJJc7UDTXUtPgSZ3XcxMm5xoC7eUoLX3KvRHPzXwDgCz81neqydsD9FxZSFgdU9FEfU7xV1WZCdP",
  "key16": "2jvY8BapzXJmJsWfHwcJd76zEoU7bLvZEbuxPJVyBFf3Kp4UmxmjGKBHxddinXJBzSxKitqBXaMXw2qQurJsyvBg",
  "key17": "2xovSVXrJhAU7LaE7LqooUCPTrGpmxGV4qrgHzZkzX8NChVjBME3eQfUDpdM6CJyJzDEiViaxZJac8unCW1FdJeC",
  "key18": "21zAFZ8kWpXkjRjDzAmbmg5zc1dRoRc8UWY3jioDJLPrDSFbXjDXnbRwWzVJ6d2apyMbxRSAims8iaPuG1uEP6aH",
  "key19": "5k41SVNrdypszDfV97Fev5MwpBodqT5wc2BjGxqGnVxrL3GRrXTZMVVesYTfvzJwaQa8ZYTXfZkQFAyhQ8PmzDYt",
  "key20": "3SiRQ6d1DW47NEaThKy3kDuS32ip3r8JDBELmRhYAqrGV769xPkmzSmCeZhhQfEVGoNgbtUqRcxQSpAkGSbViZRV",
  "key21": "5ors8w8Hv5Tx44fXgfTpkHhiKnZjadYTq1kHAN8dCsQD65zF6VD6r9bnbx9PN8LysLZknwDY4j7AUSUi1zBxn5vp",
  "key22": "5U581wktY9YbiVojLPuYhrFA11GAaLeniUiY37zsHHMbNXhVEzviyCNo3o9c3wr7GNe3zMJAEz6jbw5Wh8hAUU3T",
  "key23": "2vr2kwHrspaqpYV1dGq1nNg5vLM8afMMaz6E24GbAarSvSZWFGNvmeLNTY9AWD8EB6M7TgCowoGvhJKsxXnE33fp",
  "key24": "5DVr66UMxsA1ge8wieGinT33A3ULuYteaYi3nQ5ujYi42352aRWkJP2osPZNhYrGPPgvyTt4rSBLejPCVZmmeA7G",
  "key25": "4ejBPQEqvkTP99wDe9UZKpUH8AEGBR7214TunwaFevsXGTyg2VWKLYs87juVnPLDrbUrxM458vJrCsUTyHndgtJp",
  "key26": "2PXZe7LmseEYCVEELuarmPAdLcj5unCk8oxQKbrRF261NXoBqBseYYC6Dyb6GYkz832KYB9XBGGiEM7GeKGCoh2",
  "key27": "3qe51QjysAdz2Nw2y6DspufiXNAZBjTuqFFV49gW4r6CuDJG6E3NN8VVJ5M4yr5DAid8Ua8pLoW3EqwjJMzyNBQe",
  "key28": "27srgLD1zhd9qn1juWuashL5XDWTtbCCedFsdf3UgApnkjV7gikHnedd8p3u6MzMmHkt9WguR5Vxx8Rc3qRSvrnn",
  "key29": "3DceTPuWV2c15b8V4ikQst7XQh7CTh7Qqou22WLuAFX8RDkZ9cYgXoXxrHQVmJhb3zPgYVXq7mGbjRGakhEcQmHZ",
  "key30": "5LedDAdJCgodD1th7mJEXe8KbWFhypmhAXJ1JtaM7V4oqxoQVsr1YG1Tf8gMSmE3dB364qQNZYhKoBp1Z6v3Fpwr",
  "key31": "2wFDy6qSkRMGMeK9Dx2vQVnZzw5UwBPjr488V7VDpbDY5aKBzq1tJAkXufLsx1shJ69aQFYvReee73nHdY2ZAcg2",
  "key32": "2GZ4Cdsdiviq9GtyW1g1oPEMf1a3zDbYV5B1UhcZse2uDwabKkcVQK8vM9bpeSrjrLKn3SLupDYhyyxEFGCpnMFh",
  "key33": "XNxpXCu291R4EPpABvnHFRu7TjZkjcEoskakxnRumcpgLuuoVbb6adHf4J1C434oyaVgnTp7tNhjBKBRhELPD3o",
  "key34": "2fTg8SZJWiXshkWeeDruQHdkLX2wBMqUR7zjk2njq8ei8kRctnzqHwzA4zde4Xr11riSihAMyMgJQfAJkd4wT97P",
  "key35": "5o8mAguQXrcXQZLSDs4QjLrHXqtyhDYYP7ja4rzbixCPiTkcxfbQQZouCVTGhRgCqP2A5kYpNwBwqkGVs5Ggo4tj",
  "key36": "5wX9MbotmsC8R2z5t8syJwG9xZkzr5Jsz5nLQ3EDSNn7RTbNfnHBvc25A52ao62AeyQRUTw6yrEckV2UwPDzAw4z",
  "key37": "2uJM3fybqZ8G6rcxH7bPYbsYZ8nErAnoMtJLuji3JT5oSFANJh5nHf8ttRcfuva2UD4V6zqkRhMekg9YGtJeJNde",
  "key38": "54Xf5dF6cPraqpRRiKqWe21m554EufJ5osfvoRLhmGndEzfdYSgbNWfTVYnpjnaUT7hagVkg4QKJxCQbnedGazA7"
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
