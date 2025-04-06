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
    "5V19UhnyBNRp71LxEUpudw1HHyEE26MP73dKrbbveDaK6EVqbrdjLs4AsfeFJf7znbeKWX2PsraP2PJesr3v6kHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DC2xBEsg7B2jx9aEvp5VBKJmA5PYY1fMgHNcA9yQZbNABMUKTxAQuL4nK74j5zFhA36kwqoAd6pLhy9eMFMnCNT",
  "key1": "2DCd9mKmfZPJZFR1YjvU7B9nXbffc7kavDVdBdLSob2Uvz3CP2T3KjvQwynPrEWzFQhriQhAravmnbLcSzQn3AUb",
  "key2": "96hdRmMXttAPmu1NhzEpzpUdpgcEftD6p45hwczwrSpThoAypb5p9DCN8a6MJThTnGnP96vph3P62L7oecn6cPP",
  "key3": "3Q81Wrj2QSWpRsK1K6eTYfsjyJtu5oV2D3zPNtzXphajvyxMTdnNb7J5c28R9oMXWwdBsd19kqs27Lnz53eS1pFM",
  "key4": "4NFeS18HD3gPxSnz6mk3J8f1igTNjdvtLKxsAdboqhxLw3GC4AfYWxhgaVcdwfYXeJ75UowsyNPFHA9XChQJu6cR",
  "key5": "pZBrsREYPrP8KGamomdA3whYUth4p3q8oQwysvNqntcBrmL5u64RVDSeqnw3n9NXj137N3XTGVRot1cSBsVvQWT",
  "key6": "4nfttZgXjKPpTdUYKgUuT5xkzc6p5BMYvGoTkUSqLQWMnHUGTx5obQe1WqQTrFwXCUNsBMS1Z7gnEspyd8btNp5N",
  "key7": "2MQw5Q4SXxZ3bQ85W4LU8uQW39Xwtz7UpATzV8RKhmNnXygQJZ7FYfaJknoNUf32aGZDMz4uX9egw3UdcMKEKNwQ",
  "key8": "5ih9oGVRgrmYsgPXNZH2udzsLSD9dZLDDt5t9iNbpzidGiPbYekugctXmFMFyhajUUd7bbUXeX2eqvuWkhmuod2k",
  "key9": "2KQNgR94u9MQLEwqTkRDFUqWpx32ki7tfUGe7s5Eqtzg5PvfWwsL1fgZ1HB4RdyVpPiLrXH4DmU3CWcwA82G4StD",
  "key10": "4A4PB633kZgmx2S3KTTW3wtqj17SXAc9jD4ATgUffw2tgqeh5mqFWvW7AqKm7jnrS2NM9FWdTf6yrihJgiY3SPLf",
  "key11": "2puL7eFPqzCB2c6TiKNgzSWDGevoJFdAXApCPeJSkGjfqm6pVAxDtUQRya8Q1w5rRsCFgeCEaKQc4ZSJbhxw5hsj",
  "key12": "4cqNqpuJnEaEQiHuupvSKfqfqchj4N3Vknx75JFZTskjp9YobqGfhXUSiXJVRvHD1g1d6kUiPbDrnzcfRpVXJSVd",
  "key13": "jsL1YyMvJhVyXx8Tiv2zcYabcTqsJTNDwiNKX32d9EQsQ44Y6Jvzsv2LBRochDKZFEMAf6aDHCTDTghBAy7iqLg",
  "key14": "33jNQyZsyQYRzTWPREDod86Dd8W7rXEwQvxCJPBYeP5mFGTmBb2vx18YaCwZgQNXQxguJpVWA6A2ATBirR66Hjsm",
  "key15": "2SNSBqnLnb9PeDC3ThekrNWXUodRtW6rwfUM2kLxMrBRnJxR5KwbiCEwqLLWBBisT9g8SGszUbdRbUy6MAWLxmjE",
  "key16": "48XvY4s4Vt4XW7z2GA4zbwNgSSd7cnyRvTTNRnEXU2GWQzhG8X92iUryDZoboFieDx4J8LsgJFJHn653pC9unTSB",
  "key17": "52h6T6EeeJxcXBCuf2NVRAqUQRcap1FMMuwSBPVsRapzKbmi41yMVfwkGFqjPA56MGMjPJSYrsPFLueU1BwvdRG6",
  "key18": "3cwz26jvENzcBMVUZtkzYPjhtwr7HY1w81CSQANLBZMzEM7hiVFnwuNm2W6L23y93RZeZ5rYFHD87P1pUc8sFtYX",
  "key19": "5yormrUxHoipi6gv1pwEaTXi9hLXY2qRTUs3UxFWPM8rso6JsEibBZaUB1tYGEttvSQDMLU2aDakk2s3kNDtSQKf",
  "key20": "4Q33ay75fecH6oiBpWXqtUorw2RUXPVmnqfuRVc9x5Y8Kx3pbMggqTnTVqUWcjkPB949M6mKxgicrVeHYZh56Bfb",
  "key21": "4Bq3AhtwbR1VrHugvPzXFjj9HHTB656o6ogArWLvFxT5h2rezZar19PX8hjPGnn2CtAFjbmEwWko8HhFyKqdcD9N",
  "key22": "5uamrTJAQfR6LJQmG183Y5gBNfpgx8nHhs2MWjQucYWseDFJuLPBq3nGi56a8x7arfEn1WpKLuwjE4v5a5y8P7yK",
  "key23": "3xE3UM4B8ngn3yB9UBur4YUmE4ddgyXXb53WC8uzsnEtX5v6qvRqhCzA7pSbkXnqwxEnHEEjZKnzNSMDj4iWeert",
  "key24": "Ds2tC471iUC96YZfnTYsXKV7sD7ebm9ozZm5SGefrAdBVuxLWc8f95xnzS6JfHM7WXpJTr4HfLxMzKmMsLMskbZ",
  "key25": "4XDCNWYxomrBhcSLiQzFQ8w9YhcTyqw73AW7dst9EbamUCD5bx68WNwVhvxghREK7Mn7NWPVrFrM6kmtsJXZYDtd",
  "key26": "5LntK1DBYcSHRrBxBaamY5et4dJ3u9JY5mqZ7WMZmxNoqeGEzx7Kvdm2fYgQyeHMV9CVsiUBdNHkGLNycMsCrEqF",
  "key27": "4yDLXHwk7UpTAXMcTuxh65FJRpHPa8iarBw48SFyLtPHJorHAU53QfPqYXpcubi2iycSb7fd8e3LmMVjTELc94pK",
  "key28": "4WfHt7ptZPecnxUZNknVTS6GzzEJRQMbAY9ygHcTYUkedhvu6doGp2Rxuk3GBJtRDTu91tzsAhn6DjdfxnmwtCxu",
  "key29": "32EcARYg73YA4E8QFwcMGREGCzuZAQY2TvQEcaPKYusUywu83inizDEgpXQR4tiCchwkmUtL2u16VnJme1Q2EUms",
  "key30": "2htR558XHRzRuTdmJ3nWUgKaqBR1M3mk2JYyKBWcA6evPnh4ihkwUAfJdxEErNMhqvV7ETwmj3kTH6oZmfR1sSKj",
  "key31": "Rk73YHYRghsmXM2Vp2cFhm5VUWkRtTAQ9pGuzXK2AENShRUhXAfUjoWJpuxXahiQsBShSBvC8ufAhGQQShApDjh",
  "key32": "gUW2zuZt7ZKRdNH2A7QYaFQbPXi1oZmXv8Cc4YaRJVQ1w1hv9jK3Q1ojxMvVp4772mSHz8f5H5hrpWGmAkru4GL",
  "key33": "LZy48hXux1gHvcWbu4tVp3kDSGpvQKDa8VUzKwoLxgv6N8RNiWf2J2F88juHJEj6J1MHWji84QGPUoS5QACB2K9",
  "key34": "4CYLmFrLkq45iyAxW7paFc5DdEjByHRfy4KmKCSfUdSd7hZgcJw5RbRDUR5jo25FfzgzqaWnuCFhJdLTZygJxzZJ",
  "key35": "5FeRo4qnzmijwGbHn1qEaYsSiW1MEmUM87C5pBzA1VVGZqq5uAmNganBEvRwegr3RuL4DGmGCbvMUi969bD4x8hw",
  "key36": "3wuyzEoRc85FfR9ZFUD9uW98z2gqhTsGvFus6wU6rLKTNuMGoKCHy8xgqFNfdFFNinDMoG5r11hQd8AojpgagFje",
  "key37": "5YZawmaRHX132ULWMBW9EZDPGqGkuuKSgEW4oNbyAuVSxJyudGFwKEfnMeGS3FZC2Brjd9e9sBvdGf4rjkvQwbsr",
  "key38": "jHgGNcGcWJJHXbjMHfqHVdxqJErGaCzYXXvYpBNfALxr4YGnUHFk8KVvZNsdPYSn1Dgx2NgzozkPDjbWKSULfWa",
  "key39": "3zrEqUW3G4ZECxV4khfqj9xwRfGbTqVxmiiFVMrxzFmFohyhpYLZjXcqWktXh9AzjuXgMDR651NU6SE8BmVwLY7b",
  "key40": "cu5jw3HRypAiFL76d69GemxSidkwznJeHMNhHLXGJHnkuooV1PZaqUbJBQVbhrvP4Pu1xcqPuYcBG1vKbvckSBS",
  "key41": "52HhEDxXPLAjjYqxsmhT46mHfM7htQVu5ZWPhSrzpNSQBpiEMBrZREnqU2DrFE7PsRSwGwW2TcAkMQRSBHETEUkZ",
  "key42": "2TQTpzTCqEsiYmbSsDAFe4auUaq3xSJUF4dhkngofKjr95mxG7yYN1zgcAmRDAB88YHYQp3iQMoKMXfLFeL2FwPX",
  "key43": "52CAU36qNgrxeRTf5cYF2488EVgnfvYLweotG2yG188zwqoZnUSrABbyLuGKYsALGwZvTj3pA7Q9dQuGGt6xsNnt",
  "key44": "3YMwjWRDrkUVfjqXCuFZXhEfjKUGBkrmfkcParMPxR2gLLYscXiAuVJFwyKsJp89MgQSRo6MovsAvFtRkK99EFQH"
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
