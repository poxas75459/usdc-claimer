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
    "3Z9cZv3RdbWzFHMXExcxYxZq4QJCLR5JDtTAEPxXk8WbhLwoGm9ZAExYE6kDwdy7ZEZ16dgfpNT1wY5wVHjqgnHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Ko6S3Sij35ovuwTLLESJG1bKCtUGnjPshkD77HC8sjVLADcV9qQwHyMrcP4D7SANRSKWuo3Uo1uDtsKMvscG1h",
  "key1": "4QfkfZchL5nncdeSy4YeadWZB1nA57C1nCrn9TwLRwSu4Ngvy52j6c5k8Rs5kBqunRvvGbEGZhiRSxdvXWW7YZDF",
  "key2": "9KcfHhdpgp85AZzA6uZf9FGwcjQ7FBgBGXz2riRQJpvmwA5L6ZGUNYkrfNMdwDpweRbS6wPTThDn5ZPzgEktXvy",
  "key3": "5U9J8EkvUPjQ6aYpjRS6qAbbovHc4nmaWVBLdcDr2QC9C2iwbFx3LspVvBu3TNWDZy4uNdVV6dHwxbkBPT9QLWdg",
  "key4": "2GKQcxPGfeeugTopQEv1WF4E32QzwDs49YnCqeLRWLBUtqZY1AtWgtYxsHF7mNGXJUzQG7E1AAgt5rxtUYEhPimR",
  "key5": "4DJqpUqVeuubdFWA4zmJkX1FbdcjVkNL9pzVK5pjXzZqVgMU9osyJVjR3izGEWYpsSfe5tXnxoGsN1Fdp1SXJoxo",
  "key6": "r8EApR6t6UBQwa2WU15AzKoA6vWuskWcqRQmiunaS7VwJGPkmQKNKrByneJmfGsWJsYPa5oud4vpFLumksuTH6C",
  "key7": "3Ln7r4eiC9FxEWsVimQUbBWUb47sxc11Ln5uMku84kQUiomxDeqLisv8fjf16NEK8YyRGKCi1nPpM6niVYvo6YKz",
  "key8": "3r2A3x1z4UzqLtpsuzX4n5x4WVT9tWaerxPCbUHXcoLHo4KzCA8MpDoUnS4sKGQgMxGncUCN5MKEUnTDVc7RWkb7",
  "key9": "wnbR7wAhKwSidprzqT1d56qK1uSwfUz31Hk7Tt4XxT6TUzguSdkfvQDNkwzESYtHhwXRYxSJaFxQqLYgh3GVYr3",
  "key10": "5N7hzFsH3UJ7E88a4j3Fc3ckhtMKN1bttUnzTxKWGcXytZKDjg59DTzKzjQh5nBtSx15hZv1DA4T8cbr7q5Y3Fk9",
  "key11": "5NfsSzLZ24gDeAAmv5p9ECBBdgewTWhkMhEGdC1wHE4ZPxVzyn3AFFuRVrR55KymYsLtXqFE4pDDYY5MK6RrQ6qt",
  "key12": "5MH3E1eDEMXtbEyXzoK9juec3P3QNeHvFtEJRZc9EwbCUtqKSdCtWxTZMSb9H6xJMVDYYnm6gVj8Dw8ewwc2Z1zd",
  "key13": "iQR3MWQCuLni8C9Px16XBuhWaHSe25RFtWzNESP1iVpWNKmh7JP4dWvcUcwwAXaoDK4fBZ4k5y2Ne3tEgzJsUPZ",
  "key14": "21X5MYAUHoiJGJNm7brviScZ6KyD94VFwcWyiecgb5gQ9RxouzD2WBLRn6rcpsUjYCTYFNPKhK2mLmPzrTcP2G9V",
  "key15": "4wU3GUBS4rUxtbZHviBQNzWTzdEWvTUmJ33BoABSbxRrt4ZSmp92boTxQJdA2CmEdFjANMJcfeVTMDtj8wjS4qsh",
  "key16": "4412EAguphWQ9kVp84V5nnp9AKEuYAHJBR4uksz9Br7wDRcpkQvUJrDAjw9e1SFNFJyihszfUZhJDUXW1Sjf8iMf",
  "key17": "3tqMygxr8nSa9SX98u7LCsebAdwnGqZEC7Fv7UTTyGbuoVrkCGz9z4Tz9bo5x8zj6GeodSkL3sy3Ka4x9tWQSABG",
  "key18": "1KHTQTvgf1hHUGLiTaAZUSxuj9QpZJK1azk27UqnWFA9xrJvo8s85g8c9y2AVHizqdFV9cthVWhoywBmiXCA2z4",
  "key19": "3zNtZGh7TvHTGgpA6AGcgz3p9iLKmpVPpCZnYVxNws1H4h2dCHsFD6Mt7AyRCkd87aEhVd9Qb53hCbhTEMPP82gs",
  "key20": "gg6GkGymv1wXCHJ8nyx4k1tVbibqw9k1yzPQyLKfbj7z1Bk4poibKbQoUcwkzVYGCHhcuQ7ABer2ABfGG9MuSpV",
  "key21": "5DgHnuMi8nKYBj8WLxvBdaLp5UbdC7ToDQK5gZgvpVQPG6fQ613Ta1S3TP26VNqnEut9aRnFv15XLeAy4MnRKaBn",
  "key22": "5B8o7v1yHYWDGpK8yFD7JLwKdiApPjvqWwL74S7oevaXEWKiC4VMyr24VCgnJCrhBMWCkKvnXdzcntD9BckVomJC",
  "key23": "iP2YWn2gHRK48SkN9J7XGjVkTtmjV1taYUaFn8zBfx2eagVJeoM8fgbCrHwwtBpou8QYaqRFyjv4iKgnq69c3Bs",
  "key24": "2HanryZ35zdTXJYgd7jvtkPG6jbq7UwCvqs7LkBaLCAfRmR9Twmo1XbyKqGiCVqh7V36jMTyUmC4RafVMMkqwCks",
  "key25": "2e6uqfTcpjKB6hXsHbfjMZJkYU4n6sKQdEty89YvqTPbKs5H1xLYy9tixhYKzztAafMPi7HdGF4RE31wdipeDgsL",
  "key26": "39vBMYm4D2uhfrrfbDm7Fa5C9U6VJFRPXR6NfgDS4rcCyUUG1XnteRag47M7PwEjB3zAFKayExEdsec8GjmqoqKT",
  "key27": "3Cmf7SeuQMzZ2L6N13Erf5pMDmdp9ifeJHHPxcXD1Q74q3CLs9umxkB8P2atw53aweeFA92apuxi9V9wvyqHY44t",
  "key28": "3cvB16em7EZrQkGsq39Nby5bgVstVq9DuGYeRsmXxDNhMkjQEQaYs9H7d4J374KQ1rgFiXx2asEuuH8yNVhr8wYv",
  "key29": "bhHW5oYXkBtQvJXECZHnxjkZXkeJ3e6wNaQLoAy4J4JCB5Ur4iZqXNwE1YfJQrweRh82BvrmLXNrryJXXreb5aX",
  "key30": "SS12j5CquSXzGZzLoNcGNVBChywtjyWyjBJB2MgGMVenHoZSRaehDHmULgwKb3Hm1wNgqYWkPQpWKBzWZUcoa1G",
  "key31": "VqknfJf4RCyGAsR2x8UVFRnRdwCgCNDxB6His71tEqWRmq1Pfs6kFLFZgFPWXkpJarMHgvceCiD4odH53R2UdB4",
  "key32": "3iCVKYs2ne9qCcwtUpfEAQEw6jk6EHHLBqx3X5jqpzg4XNAjLjdejs8QZR6bdbF1YuPJYYXwH8iE8xJz1CDebXp2",
  "key33": "V5BM5zyxKUtRfz2Gb4USk83muiGoyKD8V5TasMefPRz9NJ5Z2f8Gic7bDs4a2h6j9cXUbjUwzuEcdwz6ruKTQrH",
  "key34": "zUoB8iBaTjWo42j4bjzbUHD3AGxQWRPRExyDBnDbRKDNiuhYcGsh5w7RhhTPC2HFbEQtFrzAnwJjB746DCthB8A",
  "key35": "5wHUGqK5tRZRxpJjJ5hakJir15agni9gCsG9rwwarW5W4doSxjQTpNqazWn91sah2ZP7r7ix8YhnMuRnqgcckHSE",
  "key36": "6A1BP3ZhdUXKj7uHy8EPx3zc5CNBzUb7hKsdWQPfnEHcyJVr8BQzKyGTgGECmeBCHgMwPTvTcoo46hNnd2GuHL4",
  "key37": "2z4WKFRPPqpXSEvyeBH8dpg9dUiXm12GwxF9jURVhFUzeUhBA3dmZ3ZGhkZdUWcH3mjQ74H5wtGGMiyxzffwhzvU",
  "key38": "2LWBEy8u6aqcUmvm9Tq4yQUqoYqMXE3yGiZ8GNdc8j5K6bnt6LhwsXufLJ4LTRG5xfe1Wm4SjAB8bi6oEwVWPYXS",
  "key39": "5U7X1wraJKAakJY8dW4VJqhe2YtXyTo6GSdbXFtxGjGo52VXJ7M7fUjupQJ1s4SJvt9rk2NoQ8dR6KCNtFV6uGr5",
  "key40": "DP67siKUpZUvHtfAj7nbgqzr5iDChhxNaYTuhYhQQxhxhFX2BogcGrswUspm9MAPFEAEJidbw1CShPNSv3YJNFQ",
  "key41": "mgKUj1xGgTEwqmYx2ZEMKzS2HBCP9VauDzDXtkf7EgUGvs5u9j4FeGVbwNokQDZvPLDkTiwP9K8cx593aqCuVff",
  "key42": "sheDJV71LDgzakGemNUPPyAmgy6eGmh5fCeMvFBQfuMF2sKNAMw5CQYimaWJWQ1BfBBjntAUc634yzuJ8osoakg",
  "key43": "hgFmAv9Hspvk1FaHbeYuddyjU5pMTuUUCPvUKJapZGCZuQhh7zLMcUichAia5qce6eEWshuqL1cPgByG4CFuDME",
  "key44": "31bUjVMYCScsU5jAeZDpWQiuTYsXDcx1BkPxkM8YbWCRqHkzM5o9pgyfxJKwGhBZCBDbdDixDKxjgEdvVpPMSFLg",
  "key45": "bw5iY49kB8rv2gC9ZNHsKUQAfzq392hDZZXUUEQbXVZEzkHFzNsJEZyFqzdGm8PUghpBAGGtVTdUgf9NyoBN37r",
  "key46": "2iVtpagzMufE72fBNgWnB64wRapETbzYkfiFGUHYS9cpnQ9XrhY61J2nyVCm6GU1fBoVvXJobxrV2pKpwXWCoqyY",
  "key47": "3QTSooLdn5Gx4sh4sVGipXqKi3fs8hmHoSgMHbfxbdcntQz3WLrNFub9uCajKYRgo7SCGQFVs9txmQgRsmYcf541",
  "key48": "2etrPuhGmnzNz8jYUefpMwrA64TrrQbDAa5EWaCukgSw6Uc1F2cdFXz5M3geYwmjRjq86u7QogF588RKRebivzta"
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
