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
    "4PJBo8GUyWhBZSLJPkZ9bj86hP9hvCYhDUUBLZjo2D7amQXPSGwiSusMxkUrXSTntnkgXj11k5enYqiEJZLRAfyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5twkQRAGmvfevpVD1ikN6uTKdcynLDQUadhXz321n1KHqxeYy5a7TFsKdrDbmeUg7AK6AhGUk3ZHiYi9Cf7guKqP",
  "key1": "5tVC2RfBRRX2EMciku3UJisHWdevxSipPcPGofPmGP5bdPiNSg3o4TfzqwUbErhcwLi3gZMNKwZw3ynEDCckQTsy",
  "key2": "5vpiwry2NndgdFEuDYygBQpoDjcoASjaBEbvMbtCxCp8jJTgszLPe5JUrhDU3FDb4Dz4Gw3Z1zVjXTwByt7xyxgk",
  "key3": "btCwPJJ2PzWDJQSA4g9w7bjVcXcHxUgi3NbiZf2zfnM4ZTa81QjuLFQBNviLC5WkNSABaJj9HCsvsDiyS2ZW2j1",
  "key4": "2SVGKXWb96pMuByDe52m6zgE783y2cKmgiXV5ff2Kx7eD4xWHfL7CTMtpPwSuk4hxqCEHw1UcrmJBgYxJw7LL8vR",
  "key5": "dcQanjS2MT1jQ6EQ4UFKrJsBGkjiiEESxhSnrDeginy6SS6EPh1yUXTceJV1YFFusCjTMpZAdd3AxuAvsWCtqU6",
  "key6": "38XK2QgisZyoEqvWfj7nV6JHUMW7PdKXeheNsXRjE9ePGVJKYzsjxunrxrnZtBxctQv2pwKcrcrCUzA91xNjbatt",
  "key7": "3NAe38EZm2P8YTMkTBBdfxB8R7abPu9cYwWyJoBgWxG8298UNGL79f6xmY1jYxpshFW5YqsHgBJDwPJBqbkfTHAz",
  "key8": "Mk3Cy4vqqXwLhQ7W4zKgeTC5r653AuuDRxuMm5VnphGiEUvjdLDs4L5zJxpVRSAjdBk2P5m4vZq1chZSgiBMKbq",
  "key9": "9cC4d5ATYPu1vRAQSPV4da4AhswPJYJwmnCUPbdrFX3bW9Me5JHRoXoEUi8VCxyriRf48Je8ihE2qG3ryR5LEjb",
  "key10": "34dK7hTKsCGz9wzPtN9wpqVXXa5VdRadi8WGtZSwqo9JytWY9qHw3EHL4k3Pwdvja75QoRN1x2o4PRQ3UTb7UMaU",
  "key11": "5R2MuWJ2PxmnifrbuUz4CLU8DoXP4v4z9eawGtkEZDi1rh82LHLBixEMMEZXQgFD5yb6sLBffYCuZwfKyiADPTPt",
  "key12": "jmbHg4bPdVVMY1sjeHseGTD55w3nqbRDGpFyxF4RxYVandUvi71EcCjym9vhwCxypiizPHdRgXQFG9juea7Vng4",
  "key13": "5UhDVn8HjZLAiytV7zucMTZTTJqpyRv9mma6pZJuR2TkMNGe52cbM2viWgBWhEYwZDUgbnWMTCPufRz3rDjFSea6",
  "key14": "3GicdVBRmuABHndQxoYjbsLpLqkGxMXgwEiTaLBCsXiiD2dt5zXn1FAdg9xHEdKKi4vRwTYj58t3dMwU4suX39DC",
  "key15": "3XXugm5QZ9k4CSxT8fKbMdSfDLXZuXnwydmtemJvm3APrcXu2hGWcVUuJLZUExdApZ6kjPvjRzjKwFLhwu5N6WRw",
  "key16": "3y7HgqivFmcRH7MWds8FHo2jCTSC5WmKrp6Tab5M3xYhrFRjEA6wk8MokcbNg1MgC5Skc3bDNmyPkEEUEmLKkiDU",
  "key17": "63UYBgnkuKyNnVssvBEdxJFXAaZj1BMAivq66cHyKQA9Qm6qqYxjJE1HVfhZFiowLfAE1XyBaDHZCDsSEeRgmZoj",
  "key18": "5pFEfh7Lq3sqpduCTc5yWfuz3k1e1RMR9B7zyRtvx1gdEtBDNmwREZ8WRXFiUi9mJYupJHRzz4xpJXuroVjtPdo9",
  "key19": "4Udumpb5qC3RyghxTpJ8Eh3tzwdJ4HjaPPiNgRfunrgYrH1aQCdipUEi7ayxv9LvgFAS6sp3jdCedymV8Y23AS6o",
  "key20": "4VwTPbuovPtL4cHASNvdjcwSZe82p8deSyACrPehiQJ75VDCSdAQ5h2rSSWNTYwytPmKpduQ2GCnY476uboks4Rr",
  "key21": "5y7Xvc2GYKSvpEkw4z3uPnDXyS5sBRMJwCHNhNJ2t2TdWmcfY1HZuLydgwmsuynjNH49LqFCvG7XDnEtMjLnqUZ2",
  "key22": "2afGQvp3QmmGnm2qaMTns2gnUYtXcfE2NUCrC6HnPaBXSc4EQzrN3cujWkeXCaHMurBuiyjYNzeqjUope6Fwfmqm",
  "key23": "ANCiiixh5tFAojQ1ic9yhZL8so5hfHVHgtNEa7V7JrRdbmvmqk6KXYFp1yb22oEWqXv876LMxpZg5jJ9bfRgbCW",
  "key24": "2YcdtbhZo4woKyYG9KNDBDrRGquA8UwXELPXgGo2HqpcDV8tQsPForovq6xVKtCHmkv1HR3Q2nvzgzKVzHCz3YMw",
  "key25": "2St6hUAv69rfqDHirtpEuGyBsjXNpmjXHCfY9nfG5av1rgAEkweJZMihM3SRUU8hKo4z3RTJ49Gp4Vppx1HyboA4",
  "key26": "4Vg3UymvUL39AKwxq2RzLSNKFDdrRxdYHGrwzB2xgP8SaKYx7mjkvbAiycPN5eia7LBsD5u9VPwNAtXCgRZDftzH",
  "key27": "3QVezEfus84sJ6fBP79zu13XF8AqPVS8CEJnHXFPA7vZSPcjKAXmHtds6JH2S3L91qRJvv7uxrAXrZPxCNMD25ZB"
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
