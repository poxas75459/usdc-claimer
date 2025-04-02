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
    "2KeZBpGu3Zpy3VMtFdLtzhnnrr3yByJBxdpnq3rrM6raKtTpmmaVAfBH84ypNSCGf2xUz8F6FZRKRzG8MB5zcCBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tQK3r7A5gernbG4XAzy6sBB4qriBPC7kAa9YqA6yEEDHA9EWhMPb2HSLHZoFv8V8paVEnKPU7pG1PKoQtXxviJe",
  "key1": "5sR8qSVGMSUv8N1VqCMLmmA66bSaJZNx4eZRrB79BhdWBWwbC82J9HXK6sby44GQzdn5JC38gBiStW1x11njtfbW",
  "key2": "4yTLd2G9ppv3DA1N2rh1LKJvQZ8VQMzp1L32dWYuzLYccbiRXW6E4NRVPncNh1z6i1GRCiwkjSNzGvsKh7S8fqQ4",
  "key3": "42uPbtZJSbqGDUWHoQTdDsJQ3xEhciKwx46MtEeSBkjk2WVuSzJXBLd4yw6AhjiYqeJVTJEAmDQVw7dDtaB3FLS7",
  "key4": "3CwXQfPqC9BaMP4q2oWLS3f6jadHrSJprdVN6KC6goXXZ5knFJrR1ASKzvU5uyt6vrEQudkLRppKsewFbPgMCgGR",
  "key5": "2uDQ9Jwnjhsif8EZBspfaAc7yrzZEE6y7LDPU25fMDxJ5GCxQwpQAZSCBDzP1zjgyLsPj3Pxoz2sL2241RhcHsa6",
  "key6": "TnELA9ZmAHLKfnz3XDSbE3XW81wt1smWJqwaVEh2iuhaM6gNF9aURQWozoAFosTxHFcLXTHBj5zLa588J2KqLtf",
  "key7": "3orp161sRm18MBDVeQE4Fd7fG57r8txzhvamsH2VFBstoD3pcnN5wKHyC8G8Aw2ohBwT31X2Hpy8tijCnxUmWGFo",
  "key8": "4yf6ZJLikirhBgLcJsmbFxQnZLJ1G4kGfYQEkzB27uSSfeHN7krscQswX8YFESCcRRBu9SxcyYSn3TXZK5uQ5MWu",
  "key9": "2Q581bGgFJ4GDbwGMhE7paGqVaccQJTxSvQGGQPxcPx5LnnoC9sogkzCUyDQeaBsDrqnbxh7Cb3aj6w6764pZHoY",
  "key10": "47mAUnUFXBtXDGYad6HggSwMxHwhEg87SoQ9axfDTbxwhK4zkNmCkEE8LktcFuDJHnR5B8JcwUVxKBcer8L436db",
  "key11": "59Utw81FCZyTFMjPNnNnC7H3NjrDaQQ6XCSBbgq4rTeZjmQwsyZgGyWoFWN7YHPsWCyMeKJXJBVa22NnTYY9yL6t",
  "key12": "BEZs26AHj4XGMcAfuvrNhtcwZosAMDEjJcbnuhEDgA6apWV5nZ22K8Doty9qRWZUoA5NcocLMBDJW93C7SQmjMq",
  "key13": "4Wcz7Bn4WkdoY6zHr2uKAVTnmqDHJGHvudW9bepPwnShUqRa3eor2GHxU3jr7ydS2f6ENN8x3WG9XriBHCVEDDK2",
  "key14": "4qocQWNCx2DMkw5QXKWTFCsMLDm8RrBeiNhKnS4TDZK7uK6UcHAZoTdEZVXU56WuVjqeNwBcxiTch2WvNuxZLNiQ",
  "key15": "5fxu4HvqSG2ETQAGDhZZaMJ8KKTP9PR58chQCNCQzeYSaq5GsLHdn2LWc5sGXsQRacpA845cqzjtaFt8VUYSHz1H",
  "key16": "5Av9DzkrYySbTADzHTc5FaoYScfiEPC9Py8Y4aiL9zfBypipfFpCZ7LbWesktBpkkbiBsEDpzm8Ss2q1ZjAAxtbu",
  "key17": "4GEqgDTE7iN3yLCyJQPUURrF21mC6UZNLHLdsnEB9PiTiLky2Gx2xh18rh7pcSz9vErrWvsxKsqwccHURSmEADsb",
  "key18": "ynmbmyqUEEMR9qQaWHzeMDjzt4NwQ6qcWpwran4Voz1TSKVPuzPK1ufnxYsRPDwRAmFEsUk2iLpDuzHg7GqXutH",
  "key19": "7Xp7sLe6mauF4CdVwuS9eHj6QwT3NFTiSstNjPGPRa6Y496NUWPKf3avk6BVx6HeP9LuJWxXCpKquHRTBWRAX47",
  "key20": "46922cxkTsT7i1HLgRKxUJwzkaffd2mtSwtFMSSPjPqWahBPN3sMPt3TRczMDTZwUswZSe97A3LKTYDyMSWE3Sb8",
  "key21": "eB4MGHS39wzYWbx7ZkBTAxAzKfpPRaYcmc2ViYRHjx3EJr5WA1EXRUrccJBk222mvrSyJ97M8yLAWZabGpAqNAt",
  "key22": "3kaqMVmyybWh5R8DEW5MnqvfQRspo3wau5yUfwSdDbEs6h15knua2S1aYxiWiuk1SJqZk4Ud613MFzqCtXQoh4RK",
  "key23": "5QMP2DiceAgjJ3aCgksSPeiGs3JsAGQQLZUnHMTH6C9qq6uruCnYs5zGxJ6hpoGuzJxNSuqvRGbWGpAhCh17NL8g",
  "key24": "oeTt7PByKcNXjhY5ZAvvSLNVDj6XPJbkKH96kANSQLmXMtGvFmewnARUGibXZT9Ckg7BeNhNVZNj6mNDbND8b8b",
  "key25": "3U7fjVDL6VrYg65UMhGZuxZ4YUmckLubH3SZi2gK4bawQMbcKtCte8wr7LmK2prQF7FSR4XwLoV7R5XDPQr6B3kw",
  "key26": "25nXGKJn9sDE1FTNJc39jCh7GArZUprj2yiwxzDST6CxXHMwUmCbnR7hXy3H6EpTLUhn7W9huEhBMEGZwhC9CgZw",
  "key27": "3n3ZmJAdhvXHQ3GE9sQyqAA9NGCg3CdKTL5rQY6weyJsxvYpDxw3vc4Jyke76gsa1hnmv4f7nnEk2yX6n7gvkS4q",
  "key28": "2V4hzdPB9gtNKRjEDPc3osqUspnkfPfYKSnEVrTj7MobqCY4o56XbErSwjnUPxtE48aaG6r29w4L8hxpduqaNbPF",
  "key29": "5KW1snfKPGq27nVo8jp6yk1k8RMhmQhJr5ckrwpzmft3MZrYmwxTozFoiwFidnJHgdChR8rm6J55Qs1Dvi6UKJ82",
  "key30": "3UsR9SWiopyYmdzHjj6CgsAWAFvv2WcsPV8jAAVegPkkbXM2spSHD1aAKJSoE9FXFwsD79qcJpmigXfSQ3nMaNzT",
  "key31": "5G3ny48RueK2wRpVZkknKNybzhq2QnHPZjL64mkX83D3v9fVFjdGze9bbs9Q3yG11n9oXkQQrhxybjbQVDNDgJP",
  "key32": "97t9uULyMwMZgRygmav6WaBibSCEmNCMr8tn5wrUUWw3Y7rkW4LAHjqVTMBz4Whgz5LvmTxg85nTkVRnRPSm2bV",
  "key33": "53v8wvPgM5QGbctu3gMjQ8hmnvTqUiJwA5bajv9X8zJc5rLZQmoQ612L6VQYx3866jt3kHgBixZQ3jUPtecJqe62"
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
