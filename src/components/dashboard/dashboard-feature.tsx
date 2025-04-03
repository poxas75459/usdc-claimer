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
    "5z9fjxyx25JG9WtdYhFKhNpKk8qiRq6bDVH9KZNJF4UfW7P2gn3Rvuvr2SVQU7M5kkvCAMw3SgcHV1KDv7F9E8Cv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pvnspk5osxp5Bdk2vFHa6TudQYKCjZmRKip2VCwtUFCQErGrA6ZfDHEbYvn86Kh7mf84MwNpFqBpL6mgeTdRQdx",
  "key1": "3kKHzM8ZwXUVeGpCAJ55sHusFmzG9383Ni9LzZkvRXhvX3oh9ae1J6KdmVgs1FMoxXmJkkXs26heYazDso6aQBzS",
  "key2": "3u9TvHmkTSjMbccd5XA3qbTdz7bjsaruY2NZT838mfUbvSAZ6V7j2zGvYqPn2mHNZTQVwYqAiDfEaci9TjNKsofp",
  "key3": "4QS57KubFrr23RLcJ846q9DGjhNKcgGYezQMbhs4J2dpJcidB3esn9wJwjwiTePUBUH9KxvnBSTJcMTNYRRi2ACH",
  "key4": "4JTyuR72BxEvE76VUTFhfNfsWpbgoeXkz5YaLoii1dv5G5XRbn1oRHYh4McMMo6vTuFMfzxSSQZtVk4h5wUq738Y",
  "key5": "2oz2BCu53ya6bXFU9paBrqUGRq4NENwnfrVkDB5mNM3CDtzWU5yszox9QZHhqeoD4xW9zxAFo63zk5o3KUZTBzQY",
  "key6": "28xRt9kMtLKvmRDZVF4rY3AX3L8auUutdPe3wyc29C299pJs5McXDjn9rjUNHM6eefxZU524zNyV16n7T7o6NTS7",
  "key7": "3VFGoVcd3fTBrfvGzzBLBvUXVr27HLU9HAnCjB97eKwRi2sBibvyaLepdJiVa1N9aFqSjvg4TCQ9fxwQs8bpjLxF",
  "key8": "3hrkvfPRMVYXHchdP8NvYtmQkTDFfJKwiqB1fAoCtjpVEjWa6USLwTNbDqzpoxrk3dd7z468hi9FkyVVp86jPihG",
  "key9": "3AX8dsxwwub6Uqvt2vPm6jWATtzJqUAnNXyRMzeeP7X4uqCz7iivnrVBLy9uoaK4EueWX4HgjsEqx1a5KY4QFXpL",
  "key10": "38rr1WUmhYzM86gfC23egpKxQjjPB7Ch5QMgMYXAHeLRXxGzrMkARkDxt2hrWoNp543MeLLEyBiZ9XVKdPJhatoN",
  "key11": "44dtETHkBUFPV8pVE9G3VckKGWMB1xgdeZXfcB5SBsYFeqZ5S25mu4RpNrue7dGYEtXQRHAXZtQBGCnWVEmpp1Wo",
  "key12": "3SeHQPvVnbTb3yxwwQZLcnMTU3x2PzBDFCmfCSVB9MD8rgop4znBPVTVBngoCZGXDpkNt3fXz5wxAFJsJTbUmHh9",
  "key13": "iguwTBjKDqiGqk2MubvJqPCtyEBjSQws8CJhk8EF686FN2C3NaeEdiKwFnKDJkX6n3KaHWGTBjMDDkNCPFRRNwE",
  "key14": "5qouscbQt39M2qx445KRQ7RGS28QRJsuSzVqMWGPRiQh1wbFTLBgewGAnmz2P8D83pj2YCSWNLhr5UrTYZrBSVxR",
  "key15": "38KekN8Y2knBLin38pK5rWZnCwQdpy43HGwsaaCD3UFNE239eQLLAGYUw8Hjarsk1pG48RMX3GnAfoWWBfNqizxg",
  "key16": "3cL2B6oSVsu612emWrihSCkTokRFfWUQitMbMm8tsT8RFqdTBvMNJwQ9jP96yBWqR6MtRc7cns8t1tkwc17BqLG5",
  "key17": "5xK5Zjqz6enSfqrWatVniXNi2z46An2AYDRF8cYX4ghAjmk8WagkBfLXiBiYNaPCsUjVLAnnJGuoCuHUAi8dDBEz",
  "key18": "4ko3tyoMJhm9kk77WJpYMfYvZz6SAaH96EsTFrmtnMDWL6msHTHWC6cJjXndoumm3wMqrLv1YiEZzNVfeJzLxbuF",
  "key19": "WNpa9BKbrTafiXhG3HybXqyd2Kvxq3ZZuhpP9PZHtjTpCUMr5QShPt7uqEU4xu7vmYus8NSdSKT5Ev6m4yjFvBE",
  "key20": "nbzxS4CE5ek6gBkEMuuR7TpDDtk8Vo53bjnKBTrMEk1LNXyQvARriTcMs4FdEXX2Lvh1c1gCxuiedzYvgeFUKdb",
  "key21": "4HPJR1wgocdV5mKQLwjvBHX1LTA8991N1hCvkmfSPWPb4ZcSrZTET4TDC65E69JjYyjtqtoiRZKHicLzcTaKHjSW",
  "key22": "67V8ztwZhGq8SGu5GEivk3Gq5DQp536HxtpFedu3ZNXcc4Kvm2bkp1wg359fwu4iVh5vPnHkNW97LCaN5tEcJrUP",
  "key23": "3YgcJ3pVgeHcufZy5zUVyoaD4PHeFzCCJ78SNLYm1vFPBapJBs7BsxrJvwF1QcSdnhhwSzGajKJnxzwkxYD5pPEo",
  "key24": "qAgzVdnxpxVdyoTjTRDh4knJjfdSihDFvGb43J7JyAaENNxdu9eoPmDUwsvBNGNQmxvmm2uzJZaYRJ8WuzDjMH9",
  "key25": "5UoTxbnPn5ebApEQHrmiyzmp58ws6dNB5cxjDpFQcwrFtyT3QPiwp1z6Sso9dseD8XyDPtmFqdn5GuMLK36Jtb8i",
  "key26": "3DcNeK8MKwaGcF4VJ9DdrUL41DR17zAnqY2zm9eF6JFC6p2b5mbqituosCsvP3tRo35oR7wpAH1BxU4kGFLUN5wR",
  "key27": "2qBjZQLVfuvN47B7CEGqoLJetjouCvqPYUm4YWJbeAE6rvRUVhwhUbj3wCRJGAhkHgj6hzNcmePbbSCBziWiRV6M",
  "key28": "2TS8exZbFDjLurreQys2AxBn927kvjnF5VS2YcRAM8fyWPQJ7MyprhfnAczf5wFbbnJuJbACewNTVZewZu8qPxGe",
  "key29": "5nphupwpvVPqgkRo4Pg2tW3fwNuLtNrJpuyH7nijqsvYyQfigJEdeeqLwWnA8g947ibLFwnxdmnbVZAysvn6grHD",
  "key30": "3aGaDJpWBs7uswSmFzpLsFwzevZSFSEL3vvod5P2pRmeNi8i6gvu8YnjpM8dz4iFphS3r9bwHKqC1j5zUqhTZLMy",
  "key31": "3euYECug5XGb5ptnEJtvZ8jGiaKuiWap4QCoHoU4tMM7LRWM7qez3Cesh9araCDcxsgZRvmEMxYb3k9i95nrmR6m",
  "key32": "AF6m2JvqckGAh1gh79FhhnDiQUj1g9R2GRuRPfYA4akfpLiCLTCHRntHvmfMEUX1MTgEd3ZNMWWHZMH6aJ4WwaT",
  "key33": "3zbNxJbNywdToPA7RTv1m164dpSFBF6tKkhxFcHEUqzK8DsaNLTSt8bgNojT7Z7sYAt34gcmt7H82QEHfdL923rg",
  "key34": "49hcRrsLhgeYmny6AHKvFpRHTFKgPDKv3qCQGzL5bJg5ikCozsFNExiE4efVHnCSr1smeVG3sgpXFcPQcvec8H3C",
  "key35": "4hkXGLinTETHNRRkCwv24uFCtf94NCs4PgBoD4bwWzZVyCHci1QcEmHVrA4MbK8Y4uQXn3kMyaPFs96E487vD2Nr",
  "key36": "4JH94jbZDik1qYYNDEhJHQpkLvw9fVZqEz32DX2t3yPLfpjoBpB3EV1f7RwpAgcMMBXDLP4ZXwD4sTB4czLx6C6E",
  "key37": "43JKXPSk8NWW5u4EuQsCezn9wU2Hnp18S1nFCD6JBtGZdVepxohXVQSHbS19S175yD9hCjrHRidgQV2e2P34pgRe",
  "key38": "53wBt37qhTJ2PNSdbmgfVimRoU65fpQbpjUwJPPiLYG3jZDZQ41XnttCoNtDcvJkQ5aTGjNxhC7ZAtg7etBRYCsQ",
  "key39": "4K5VPiFRFugU2gYVjRgL6CttVVGcdkQZsnZduUXXyjaXwxn3Yv7wvrgKqVu4Q2KmpdXDX6yz3USahanCdht1UToB",
  "key40": "2V22yAQJ5Mbceu1EfScU8mVSAhPNQZVJUd6zwJHff11xu41iz1daQSCv35FwkuFLZo2XGZAD8NCjjGXXvFoML1EP",
  "key41": "3wsX4KadunWSXFXtkkJVkfubDUYJfN8jWnt5MPFxUHLg3gtW9ZXnnMUCg6FA9wQ7KPx4a7FzUpajhXGgSegaFv4K"
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
