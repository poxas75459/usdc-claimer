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
    "VvFuF4qZjMvu6U1sqdxUcMwYSMq85MuCWCuGZtSijDD9AjAuWzemXq2paH6KSy7u77htV9Wms9LUqJ16Z76P53C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FR7MyYtik9xwuStQgRe1aiRtcqF1VKw3CUX5oRp3MWCcaRCgBJotFbsNtc3XaNnrKT6ys9hZJ8JPMfxAbKdgn3x",
  "key1": "3thgpiyPGh5K1jQS51VLh59DU5DZ6DzTvPRiEtk1nWCLBHQ4f5rgYcbabwmnE88ddsPS4pFnZPTVFpEw4uHTAZLJ",
  "key2": "34LdX6RP9QrxaQeAbzGMP5rgGXMAEEu1cycwMVtVod2rP1qbvxgRXvxawTveGyWRKyerXsL8Z2KGWqsjUxLaZ5Nq",
  "key3": "sfV9Uo5HKqSSL7C6XnCyusQhe42VY216qx414jVEYwjW4VnoK2FQS7MHrqLq4bwQALtFULAjQE1iAzpMb5PmqAe",
  "key4": "3zUzH3Ug2DzVTwEJWnSj5FGkKHumfuoXG5WynfPDGo2oQmMZ5CkYrFsmhVfxN5WY2sNKjR6wy1aQFiAj7rb4sBvL",
  "key5": "46d9VvP4Zp5FXfWrpaPvq4rSP5JgqKWEKZwGSdsemmMgMLkbFwyZjieFrH6N3n9etCqerk7kfXTdeySVLum5pdVb",
  "key6": "5X5L68ExCYUBjnQgmFKGMKUNRoYJEF8X4nTb3Bk5AP7ZLtQeDTYaM3W6tRBJrZrTu4Lw9mGVHn5mfCtEfTHt3HBJ",
  "key7": "LSSv516MghEZXAJEGUkRj3xEztx2yCzfPzGMU9XfrfHvDM6Unp7jqeDpYeUPSkRHYCvGKC5gPVPJeD3aNreEpXK",
  "key8": "4oNcRFt72qekPip8mgZYBDDFeecN3RFkVYnn6GaFXtM31xUBqKv6FrpiLxpZJEDUaAsMSet2bTpZR224Gtu5BX92",
  "key9": "BEgdSXT9NAbhzUsWNfAf1tz92nerZe4tRxcze3J7HwSRkw7FJWWhHpusjFKwX6fJTqKMwqN78P9Prizh3a8up8q",
  "key10": "3nBKLPCLM493cRrvKV2jQBogwES8StbqWwmX9hEYBKTdDQNeuXXKudDuAYZa8vyhQJUA4p2MbVQQPHhh5wR56rP1",
  "key11": "rhhuaxhs8mAHqS3xV3o3nGPYAjEfCB9znB2D6zjnuxz4xy9LHKKFh33DTpQTrVLREubyqJohwnFsRaY339XRLc3",
  "key12": "3t6ku6br3jW8CLsxAH8A67kt7CSUWEd7KH8kEhs6jMzvHJPWRexBUjZBqkYgUFZkx2WYNzG1iJHQ6ZutG9rArMJk",
  "key13": "2zFw7wpaGBwMH4MzWX4abswaRxt86JEMtPverSgjpZ1EtDvzDNT4Z4Nt5gmfoRiRfSt4BMAdVt7wwCY1KAb47rRd",
  "key14": "4THFNbT3zCyhdUHuhPVdUSd6AqDnj8swxHUfPeY4cCWH8EyRwWiWM6rW5gEC6L2aZ1hsY77MaSkK5hoBbtUKMws9",
  "key15": "2AQESYYMZn5e9A7sbHJTy1ZrvrErX2RSNAQg9FmvaGUqy6MUYqLQStzGk1MHpdigdCWLWvjbgpe4RvU3KKswjNaR",
  "key16": "4mEGnuECNuM6chY38J9MBAVViFW4FBH5nuNizyAzwNGUHyBgCFx6hvSihkpzdhLVxdhfCexCyX4gg3DM2pGTHykJ",
  "key17": "558tStwgiAmDye2B89XBLALtXuZxKHrA4TdkFNU7ZiQy98ujepGLPTRXFL1WaLCynZ5VDmXyWvsfojbmdbX8q1pX",
  "key18": "ThFhqXNVntS8Wprd7sLC57Hb7LwQKoxpVpopSA1AZLJudZSm1sX8cMseX91J9CZBwpPeAJiQywzHc38e2ePYnEH",
  "key19": "2zZ25YoRiwRrzhqKVgbT9E9fNV9UUyFS7D3NFM8W9eVR3kLYuqGBFjwieY89BMjCjFBshXuX5VhQKuZkxyP6SoSF",
  "key20": "21KtgwZCBVVqoEFUhCHqBJ6fwrLKTUqTQ63wR6aCQwBj8dsQnG8sarG9pzrECxajQzbpJQqs8semxMcF2JcqiJrV",
  "key21": "2epmqv4JePQyeqW8wPADwhK3sxx8dCwuo4Uj4nnQZrnPYw8aGJpvdhnz4yA52T5G7L6zGPFEHBhaL1syHqCp8mYp",
  "key22": "zkvAdPGv4xr3o5KhefPLJuSgbRqgfYyB2nBV5Y5MghTrfpA1pLESY8aS8hwixHZyHhAJnEL76H67Ex7MsjHyhek",
  "key23": "3wse3GsKJKcBTcziLdEPmgyu3Sc2gpbPDuF38jrP2zEgThBk6LBwvm7Hd6L6sto4XVJyQuJ9ModSQ4BEdFm3MvVF",
  "key24": "2XEMfc1NdLQrjW1VznVe2sBt7UaKC6eH4yuiCcLNsDg7LBYgVuFNavj8PMiBBvW271eZGLNdTrS15MAQHqXKGhmi",
  "key25": "4zFJA3i3frqd7SP4PBVDDszZbTwApk7mFzKEzcZkTUX4c7NcqCdGDgNDBZWWHx1f2hKwTcHCMXPvwtTfunR3AChn",
  "key26": "5mNPdmU5MJExbt9Wq2piog2kHLLvyaeQi7cNVsAFsRwAvQjv5WYcDMdK1ajmXotEXGPh8SmS1Cyc6vxndC9KXjke",
  "key27": "vEkUx6pLHLUdP8xF3dFNXdRyK5sDAHAjyMFjpr4dqQM2yiviY11V919ccLiDVxR1vtpm8eW11NEUmg2WjVM8QQe",
  "key28": "5e4WL8NN1fy4PUqG7ruh6qyNVzbwy7ks8xaxWhqDFXxDeXDcT3kXgLPt6emvuAUgqVfuERuSKdrPaVv5xmfukmAk",
  "key29": "2bUEuZLQd9BBZP8hmX8bbKoDHFaccUpp78miKGsmNK7xCwEP3NWzj8piXxSDKiyqB6kmaprKogrMhTGNJgZxx9Qt",
  "key30": "47QLMP5N7G72t1YuXGSjBy899jNg4SqZnwTDT1QxfvL8mzJJno5d6hkuHS6s8ixbagJWJwF8RyvsuatTietXYySV",
  "key31": "3b9ZepN4WMkHPnXriuwNDkkJ55mPi7LDwUxWNRszvAND9DAPVuYcmJwhR3zkvNK62A8PLDhL4TbxGLB1MfKDuHpz",
  "key32": "5KQ2c7JGWj42NavdLGeACQaWowXRmUdL294sEiTZxUt83jh8v8x1J1q8TuRkQm5MHpTX9WY9Jb8XduavSbdFqv5J",
  "key33": "5u3oxbsBdzMmqCjpS2QyXTbNQWZHEKhB6XjVrCB6kPKbEm4arc6uPEesjRvYY8NokeweZ7f7bMRBUqkyuVZnsMTJ",
  "key34": "2ztABHwCYeSGWKCghf5KCW7tmQME5eTQtBncZZ9US2YQLJ7k6xCsP6YF6f8i4uEHGJG911Q3qjRUjH4r5DqvLQrA",
  "key35": "RhNdgwv9QsthC9sNqEaWGHjRWuobg6eUwh38WcVcJGMhB6M62GpdGCbdLfVNZkVyMMf9viu3kS8RVeUY2Cvmwmw",
  "key36": "5WxUaXCbhp4XkdapTiM7ANBeT8WjXuD2rv8mkout3N1yjtvw5PLGn8PBNUTDyhjsDaPLtfGpCJPF81akcG9SdsVo",
  "key37": "3DeX29AwbEwqDpTHq9ebtJgXSem1iasuf8CZuRnLDMcSA6wPtAMuKFn5vSLUpNBD25fgUZdkwfr5Lggpsv65RPH7",
  "key38": "WGzvywDgRBhNjxKJe8vvGvRJU74zgthb5UbEa3g3qo2kDueRQanYfzcDFK9MeykAAWSVAzTzeN6bq4cKs5WEaG6"
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
