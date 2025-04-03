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
    "4dFHfGqAg3SJw5Ri4gD1mGFAx4VJLryE7mgmc34HeFNzksjLUbuH6vCCgqD4m4bXAcni3yLF8abUWWpzA9RxsXJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W2QqeMYAA5HiAsBBVykJAd3GRg8uF6yumr3uhA2UCia131tV6X3eGMTMr4e89Kdmz3H49P4ujE7QgMkVNDmdgxc",
  "key1": "5TroxgLSdafWpC2uPLpdVB4F4HYYRCG3obU8xrSkgnnEfyvjewGeF9Q8wDPV3MnkW5bCf3wYBBLpaG31ADoPhnCp",
  "key2": "4VDjLhEWo6LsJLn3RwuQmrkKF3i29Y2xNu1QBX7NuhejeSeTEWRCpoLXqSMUnttbeHhFwhGhiKkujpfVerYZGE8h",
  "key3": "3Wm42WhW27vQuenFvaHAo1F2ZJ1DJvViCzpG5eyaLj5TWebKkanUMJYAq1FB27dFRnzQMbkuMEbrWWWoUuCtPfrN",
  "key4": "3yfHcPqJFYyvPKbX447Ahb2mYt7ReQikcCo5GLbtk3La2cNt9d1h2QWKmsjj1iEnMMhv4zzXo97Cc6wPe3Xbsahc",
  "key5": "5yq5hnNrCAcZDEwRRhGw6kejHBQztd1eGEh44LpAwFgnerYBhaRV2Q21u3UjTwKohiiCjhGd93HUGsTF1T5XRYph",
  "key6": "3QKxnMhP13Q31uXpgai5dfjfhV67DpwPf88XpZSR82Gb4kFEZo85z9mhLzP8D3TEWUyC5NrKJM81kF8gM5aFwhE",
  "key7": "heS1URiM3bRjU4e4D2Pc25S1ZDk41ZubuM7h9czGiJqgPgfD9k5WXAoeUMSyN3nm3ikdVwtBavd1zeWAXByypYK",
  "key8": "61ybW9bJYPFNbQ7F9VcihSaPMhgFoQ8D5YcqWvpZ2XbvbkHqamsBvwPsgcQZT2xGne1bXn73pZjpFkUXun87SZPK",
  "key9": "2cPX476pt5nBAg3C5xJofB4FYxxSuWjLrNXFNtJrRcxD3CKFViRSVgNSLKh59GtcXTsDhhcTrgFUL6yWHEWhp5d4",
  "key10": "4KnUN2WCdDhByk9fNxchgW1FB8LssSn4txvPhMd6kphj1srwcU7Vr19fSb4HUoBmiQs3WBwp8BV2un3Wvk36VPrX",
  "key11": "4WnpEDuHn4BgUycDBZaSh2hkBwxDnHn1QZdLBA9G7mV3ZvmLpy651BQ1YxaZrrRgJD6i6zvAouuVreFDVXdRfBEu",
  "key12": "mopCVeUTj3beoqagty8pLQiEsNGfJNzM3dQYK8UPZwyAr4iWNZmXSg6zYedwj2Sss8284byTPHsjwxajTFKkkZS",
  "key13": "2qf2sQ4ybeRK8AQQd331fkctRyLpC2Qg8ri98ecXWbpyMW5w7iBTHCof88ixbfVzCYd5wq8Y3S8FNrXyaFUCx9n3",
  "key14": "5zRw6FaCJRTgu9ndFkSCeX5r7z4dtEAMWSSVGivcUtTSNd2HisroEdwJcMSoKYezyQLeodrkMB23fNWMphXdybJm",
  "key15": "3nYwxCj2SeiAnXQaucgczVyDmc7mtZ9hbtVTdEdKBkc1uzWrjRqabycEmuZb7UsPFJDRg8KQZkyTMxHHGqsZbxeA",
  "key16": "2JCBzQh1EZrvKeCPAMK8UnEaqHEtrs5pN3g4NrF4bDmD4QGQJHgcMagLiB2cLXmtczgaU6GThrrJqRZx6ieTFuGH",
  "key17": "34586x7AfaojeD8ZKzuGJwbSGw5PZEq4Cf2dTtdn8Mn8SU3SFkv1r5uzuG5ytS7bVqD5AtUPwwXr39ZdFjrFBh1h",
  "key18": "2Giz5b8GfRgjbD4Jw7EVDo7WRPCpXAPxEETx5hTDSNp2Sg6neSvQbi4wdHgLZdVLdc567jcxibZmdxoPNGgaDAa2",
  "key19": "2vZD6sBHsuADXU8V7i9DJFYHFaw79Hpdz5AWUyFQd7aGy2uCvcuTvRKyv82xyE2mWGcQr7w8rwaxQexQfnMdWvEm",
  "key20": "3J2ahLKz3s7baoM5qfyrXWAfPwRqLjsbV4i5nUEWjgpgTfpWgK6Maa5pqNGC4KfuJweBSKMqUBLiX7ANmpgESBV7",
  "key21": "3wzLXjcCqao2ypW1B3bPqjKc86Ps3MFUDRztwvyopBhcTJ4WqXJng5ftVkA2W2KGyQtYZHqQTx3gCo9MMrnUJCTc",
  "key22": "2rjxt4ucN2wuVNHfWMAEidXhkmicmVW1vqtBk6irj29GYieySwSAqDMfdGdu74fV7PQLMuh2bX1hbm6p376eSFxG",
  "key23": "4ddSeztwc7HALK7J7NJRxYDdX6YSBbac35vaCH7sV1z2RMH8LxZvHUMRA33khqDSB3M2hjfy96XqM55cRTVfJhvM",
  "key24": "2UXFq29w8KDUA3qp7qWttaaS6FKgiezAn8JAUcreZNfSTS5ECoMzMdF3G3x1uysxnBMqAcVRKQsnaKQsSs1gU2TH"
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
