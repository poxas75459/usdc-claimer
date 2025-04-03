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
    "xMDNBvJuTVhCUnShe3iy6aiyppwANzK5kGNDneLahubDvxmpvbE7WEv23RMEVvSY1oVS4tLmpRy21PjENuBew3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hg2ex8HeYJ6LTnHxS8fujjfaQauDs17CzoDCspw1FKoLKX2qMcfJeabjSZuFJiFuQSXiuFqRRAofGHwcGxTfJG9",
  "key1": "Vx4L9tRw6zwFnCUz6uUqGQdZyxaQLuZy3SyTDWTeyXG3SPdyBdg92KZG87bZdLr541JZuWkPJq1ZAopxmbKbxsY",
  "key2": "5tE8M1H4nq6xyJGowHEWDFgdhnZrA1j7iXJ7NFBvjEqLHB2fCNzFfkXx5Bv8YgSKy1CR5BYLbbdW3Sz9zLdFrnwV",
  "key3": "2ufRxMJ8tWcT4trsCkGUQhbBCFf7RuYUhn9LKMaFqstLaEvymdPmQR5GYZaFfoi8A7KHQdvSZDM3UADgxsqWeFTe",
  "key4": "5M7iMM1i9HLsWQ3W39TBBJVMje4M3tPvzYBprXhVgnbyMZmwF8MGT1mdn75jFFrXVqt4MrSWgh6VjFkTquV3Py3Q",
  "key5": "2TYBZTq7q6C9Xj5qpXkrmCWMZiHm9DXhBkLjuiGBv57gCjHvsbet7ZnTrXvp9BvHcVFd9tdozfKyeQT7eyWZaSdx",
  "key6": "4WAJ9wqPi2C48iK4qUi5kgk4BVfj1zpMvSv7PspewRnLgQEk5feh636gA63gunqA8a5mtshbAHFjHdJyt6XwEGRF",
  "key7": "4PdBsiWweSggHiZWtgQQjvQjBizsDXGskYn7XmKJnNR2mrg8zuV1gQafrjeuvAMaDzevfZoT6HecvAezkayC591m",
  "key8": "wpf6ucLQmzvrp7vmMJ57BZkqx2T82ANSH8jEHtBoWfmQyVvNPJKYKDmwJ45dGLcsqaMoUc6M1bbfsdZ6RJ5Qmap",
  "key9": "4zMgWCZbNR6qZkVRaNFpU55oqX3QfeyifwePc1tZKVKuQgEtHLN1kF5cuEWrHnjuFE7TMH4MxheFVss98YAZwhkx",
  "key10": "5eJ6zN2mHWeRLajKT5uDaUj7hEZKcYGvE9AEua6YeFEDWt2JVK3PJvvL1XdRMBxTXW73yr2PHZtzcUDEqaeJd2nM",
  "key11": "5yUmXzM6j4M9wYk4meVvXvPXyPUR6RbPyn9uTQBgV67Pxx58dtFwPQCYGVdwU95MUMj2hzeQbb8wDghRv2DYPCbv",
  "key12": "4YEZSBSDpoEcUquYyFNzugrX9YHinAE3vRhz2EqoQxk29CP3jkZTvcHDKfmxHbm1Tgwv91cUvW4932GGsZqruyST",
  "key13": "2fxJhPeJSGkRJGoNQeGLJ8KraQvTBb6ZLzMgzT8MfLsnucC9bcuB7ZW4k5iBQBQVU3ob3jzmFX23KC5ZKa7hhBwC",
  "key14": "3LJDj1kqLetMTFpLAq2a8bSdyCp24y4pxdtayNSAhjp2WZAqDLN6uBaTY8kmD4cfqb8M6t9SCxyPnauWjVvjSmpH",
  "key15": "5FUJwRKKU7PmPdfnxYjSGpyawLyks1XhTjqk1feYuyBLFac7L2CC4eASiZfbjkegTWGo7uR2NeKmtmAErfp4F2kK",
  "key16": "4mnjNr85m33hphkb5zh2pLpHwQJ2kYKqzvDBywjait3rHUpYr58EstVgx2g25XtXT89uE8ze3S4BBvz3isxPGEFZ",
  "key17": "5aSMVeZU7GtXUcYWybVFybxmdzY9AEh7zvfaTheMdEmSDdGm9jRkTy4873ybBokNEhiheRbgkZB8cVm22749c6cC",
  "key18": "3YnJF2MS2cDN4qJbJpM8owerJ7jMnScG4ioQ6VmtZxM1exJeMeptJ38R6NTdA2d3cHJVdenHyXXbpt2JsMfydo2y",
  "key19": "29r9UfUB5NazANz6sZbGe7UUZumnReFNWqyKPoD25iGfvBPsKfMz38q16XRRKSS8kVJAmDXWD4ubBtowGmqRbRf6",
  "key20": "5h9sV3t1ewX2A9vQ3iFBYyPDX59wbHjdb3K1SzEyynFHMrQL4VooA4ubWB9FrVXjC27dfYiYiyKgNZPGHNrtnpnA",
  "key21": "4axGjr5PFgFfS3SuDEZSjRUrFGcDFA9XUkiQqm3gH4D71iEDeJZPnPVLT47wuFN8dFwmzQnYVvdXwvxVxe1hBumU",
  "key22": "5CJSob6UNtUQs5TZTxhW8243yKByTAQZKA1Ujmk4ww3sZewLCkLiyuWQeKV5VzuHdzMEFXPJjtzumww5jZmxRFLk",
  "key23": "BZHPcY3rtnRKJHijEpmMLmUmAMewvHDiimf51nAanYXroBYUbwYALGNuDAiLESubRtiG7KJtvsZqc8Ue5m5jWCv",
  "key24": "QBMs49oVFCb6szhULE9FddGEV8j5BHpfaj3ycVqBQN6c48BK2AqzS8fNH44C7uL8jVdoGDy6ojMh4z4EUsMCgoY",
  "key25": "4R3nzVKGFouttgVddu2iarXZHrywb6kHsuruyaj8CPs639rM7ioVK4NSityMMLRp1e4XSNM8XCpBjBYP4D8xuCcJ",
  "key26": "oaqCYJ79JBhGRaxiZHCmTXsBcheKCGnYaRL1SwPM27JPcGzRZiFngm2zbBzQ2GNRM96fZJvKYzQnFKHZ6adtQ51",
  "key27": "4sF9dqyJNzTkvv9XGGVJ6aGFPuvCdTPTct5CKEdTnSJhPoAt5JPhm51JM3ia2k94r7hvjx8ct2fMavh3kmMrFjJW",
  "key28": "2qQzFwvaj2ZMWM4yj8mGMSC9e6LiDZFW3RQhNHtnMAfb9UnFhm3YBxi4W9Z7CSYVXbLooSZAV9vPZPAU18yAEnki",
  "key29": "4uU1YMd1T6ckWVDEy8SrM7TBVmj3C1vK1u3NkEM3Yamo516SGPZg3Hc49dFy4ST3vrBo9A8ooSe24ydJFGj6Ym82",
  "key30": "5ktwBEMSj1iAV6EFDRkQJP3hEezB51TCFeaCSSsJ4MRVe3wMAjDMqc5Ld5nAfk8hQ9jmvxguGDwQDuDEoP5CC1bN",
  "key31": "5SrMT7jPqUgDjGQybERFBEM61PmjTHFYXYxdY84pujK3dnN9SJ6LuVoH1mJ86V2dnv8Bys1gPsQrSac2CRWn2572",
  "key32": "3Dn18QUQV5jEQEKoG4ZoZdxYdjPUYjLUFf47TwcUNgw5BqTygtbNnCM27ubpKJ7PoVU6PwNuKVt2VZDZbVzPwPH9",
  "key33": "5dBGP7kFg3upnwbXRgP4PSX2GW1CePY6A2UqtB9VAuMBVYEDstpSzSvr7pSetxn4FVTTGHTYinhHwrx61Rcc2Ehj",
  "key34": "4qWY1JGf47oMsoGh5rQBQ9xgUdTRuFgYH1RfTsu3tMic6qC2QjumAEqrmn9ipwd9ZzCGktDsrBWAMz5JLZAQuKZv",
  "key35": "4pudWjSJYj6xfgszZP763LgAMg36GrBMsUjwEg2sNjVfaZWYy6XGmJqbqCajdo8QdTP4iQBXNWHkREGLKjjipyd4",
  "key36": "28Vwz4AHc5udPqUL2GXCtW8Wf7PE7Vfqm3wsqee1emfyz7xD1BtQXEFZjmWyQxiB1wXqVuuUCyLzHGATzLxs7pMo",
  "key37": "GBjCP9zPm26h1HFE2PgES8dPbycQUVjGjtNnXM5gPRQvoHR74yRDd8teeviGzyDMU1uFK3SduAY2ZcX72uRwbWm",
  "key38": "4pWqGJYqMGMG99c5rCLQNrBNb7JcLT1jKg3NS965jTBr6da19LainZZh4ncU12eSLJu3Z1q3Sz9fsp1Gi7UjzNjc",
  "key39": "2AsikGV4hdqXu4MkeFiS3Xc5zfi7tkPiFVLNNTNcGskCZ664jrrT2rYjBP5sWCpzx1Wzi7iBxHBhgDxjdZ3pFh5M",
  "key40": "5iMintzsdNXyp4s5VKrnMqZvqYpZjFaqKATa1dNXUeo5bJZsXgSmVhxmteQ5tkXiASo9CySi6dzKtsEM5sGGvrQh",
  "key41": "2FRkVTRnfExc5bfL5oKV45QnbtqACBhDZyo6ybTh8XUG1EaUD1NNsQShzgw9HyspMo7L4D5Ebs9oXU5SwtBWZ9gk",
  "key42": "faoPW5p4iHXRXd3TwEyp5GYGAUhPT2ndz1uwFgKhnuSTzb1ptquBA5XdfP1SNRu5xV7WGdSbPzyZN61XEjYLyxW",
  "key43": "3uomKyvx39joCR3VnSXPccs5XvyetoLrrhyb9Uzo6R8LfyNaPfnTFRi2btuMYkfGAJfQJDNtNWBuxw77BkDkHw4v",
  "key44": "3LtonCGWTXYZ4BC6HUYTozGX1bKMohFK1cyC8jWJwBd2x6e13nkRArybySPUg1b1ZKWiXWaqkCHsZendUWAiSnB2"
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
