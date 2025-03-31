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
    "1NXo5Qew8z4akJA1o5WkKmbVVsyFcwjY27B3NsYBCLRCSjxj6wFxNpGZwUDwx4xcrRoK1d65HPjajADqDMMwet2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s29wj3gF7sC1gUKvmgh3HsBhZegDrMi2GVbWWgT2GLPru6n9eArGN1VWoMJVcm1wHX4puMqfcmpBByuoJW9yGne",
  "key1": "3AnoUKxuA2DAMME86WRmgGe48rBBhtezAb4bQD59SvBuZsfUtg8hEvsmeAxjEG3VUD9hQjkmG4avHgwDBisQJCB2",
  "key2": "4GE7tD6qPNqnN9fX7snGzijnwx5DvasKT2bJwmytwGAPBmo7gsq4mSZF2jTCFKLeD3jypL3iwBXfHabGfC1AJyja",
  "key3": "282JTk5G99pnYA6TKA36FhPGdgotfx7bkoHWTMbFzjkW3SjKhppnRE3yZMbtrdT2kCKAsRKAAddENX5TJiLTbiKJ",
  "key4": "43Pxd8MAsQ5pCvtBa7CT6HvrhqKp5EBtzwkJQfGCvcBhfkgxTV5daBA7WjnGQmSFH8anssEHMfW3aGLgfXqBwc4m",
  "key5": "5mVAWGmsXz1fhwEHtgNbN3pYE29YQkaxaJA1eHLEv3tYGigqTFo8sDtyCdxmJJVyH93WVxpv5x4HkYcqH2FcTfL2",
  "key6": "3qtVWwhw5owzh5zYkycDioLZ9YZtHFnijdBbb6op2t2iCv8hWErxhwPkMPzzUtB4wZ7zFHt7Vb4wCEPmnhFj3DBB",
  "key7": "61YauJ8mpayQeUoWeGd7dH3Z4nY9C2JGsqckyNa8PYa1cfZ87cQu7hSNcqMqyQEiKwTtVK9MpUAT6WhA7noqzNxd",
  "key8": "3N3zPoSC7C9PyPNv1bMeaBVs3wgjGAjTT7P71AzTvXJsVCHGBxqnr4BngfcbQGNsQykRzdJE6PxqztuhN8jZ2mAW",
  "key9": "2sCQUYU2ssq4Ps62FDYnT28znN24oNnydzt3bmE4DSX9LNQyRKCbfQAxN8ytPCSogdQY5KfTB4X32T1agXEA11As",
  "key10": "3xKL6cBKNNfFfgB96k3XfqcmAj1dA9nmtoGF4mBtxfhniBPwBXJS6vcvQk38RacKAPQiYNhtKqVsWEgxjJkrMqm8",
  "key11": "3fy5BXzdUYY11bycPVhJP9nKxArRNWfwqvto4dX6KMzJhCyMpaW7iZtjEn1xv8J5MoUcD939U4g23GqFdP3nA3kP",
  "key12": "3qoNJV51BX66uCiYzTK8hwhSex5fZs6ZDbntQBNwEDVNhh6xCSWbhLsCqmW5UnZjXcNdqBSwnx31RNR6EjTZQQFY",
  "key13": "5m8A8jJxDtECfwmH7hFpFtPHkpJ8p8nWV7X8eAVcKfWYs9zAEJMyndh4uRU7w4Gyp4xdKZpZTgdrgV5ZQRGKZdrY",
  "key14": "3jC6ztf75vDKjEBQTJAUy1MH3UuafJgc5ig28awwRVx1RR5kJ8Pqd1PNLWLPeMFGa85wxGPW7kF3QsWrWeTAipRB",
  "key15": "3myrzzo2bVBpYi3MtfBf97WgvpqS5vJCJwmX9B4Fjf2YEBL2oQJGKrddipvGokH9eLqscgf49LegEzDkbCGNWjam",
  "key16": "3g7od5uJcGfyACqEvJvPhwix5fTXgnxjJDJ1UgDhyCUBmmh6zkNjGyBQfk3bCxGF1sU7yk9RHrQwk8cnepQPBPxh",
  "key17": "4vqHX6JqtiLivPHumTSXmtJSU7ydUoU32yJqcZqgqDLFmUU4HeZY99VYvErvaewkLwdW4xgBtjxPnoZcYxLHuegM",
  "key18": "5E3B797FqRiTKFH6h7jf9YB5w2F2gDsaNeo5pUhQwjJVYJPS4mxo6W7GZUCLemUJ6p1zTNsKjJKL4cwgKyaEZB25",
  "key19": "5vbTzU2SVxbWSdTSRi4zCyrXhUK7rukRHGVjTJZMafidCYQ8avZaB1YQsnowqABvR5UC39r5zEShkDKxDLKSDdxK",
  "key20": "3GJeLLSRXy9cE1Z5YxV9BgMCpWzoj5AtKTK6rxX2audCr9TunDcnVv4MWCufDPsXE24mEdMQPrX6AYF7LMKptXJU",
  "key21": "2HyTULcQ48LhX5CARXu7xgx9GmbW71P2VqmeVxqgUoFcgLdzqpcFD3MYVSwZ5AotnYA4idzcfWxGXHAUHh7ypb8g",
  "key22": "3d4zcHeE65zRxpHBeocCYcfcaYXX1eLueza3DnqW6onAqNATdtfk35uBj6x8beE1TG2PEBTtX2wd3DbhUdR2rJ4e",
  "key23": "4J11ZPoxKCisA51Y1VKQfmFh4Rfhf937psjkTB4a8B6b37kzkt4DsEtuatm4Ujppn3pZnufxxCRbPTRJp7pfeJND",
  "key24": "4jgSm989NqCuwpqpeKuhAm2F68Fd1MLtd3VxJybkEMNywtSb1ykK6Dju9Mjho5uXH8rTVudq65kz3jik28TcAN8W",
  "key25": "65RHPLaFx3463iSsLpZ15fxm3xuD9mPeXgU5PJ5Hq2hkYuzuCri7YZghFq2SAAggeTZPtZ25FRfVGRcMkNjNU9dK",
  "key26": "3fNfEXbnvoQn5ht3bzDZZsz3yWxf5q4bsBZWEgcLkKsTUSQCzkgNRMLdQYoQNQHvrcCvUsbrPJzEX9iJG1Bb4nRB",
  "key27": "2KxmrvLupRX5zj6RwqAQX99sj9q5LspiR5royA1oXcRSMKnGNPgGJGrr1YGprTdALdFTfuVXt94TGSmc6q7XNwYN",
  "key28": "2sYYvXPqs7PhtA7sFoBeCGYs5hqxmsvK6r7acrFPXimTfVsNfZrC2cyTx7yQDs3nHHymrdTEDBvPmihwHDqhE5qi",
  "key29": "2ojVUcpcXR2zDBU31WaNDcS13fwz29LkhKFMmzzCSkf9xaRja1c8GrE6EiqaBuuiiJJcH774X3546qn6n6BuCgvm",
  "key30": "4FYKdGNUUQP2RphKSwRetQeUNZXRBoEiKSHyvLs5T9dfwfgYYJ35zeRg9ZvwsHfAeMUqURwDQVgz5wHktNviGP1g",
  "key31": "BZgTMYmaruustSjA9ZBTXYHs28KuXtE6Ho65E6mtneQPQikAfjeo6AgwqxB9haJAKVHMZoBtpNxsz7LacTdbNDk",
  "key32": "4yuuu5wuQ9MXDbQPFhXhTUouM59WhTNSWftwmXGPjKjd9APNhv7QGZVKYnsyNAjCzxynnhLwj7FRv5SEf7nqm1vF",
  "key33": "3JfaE5bQJMt1vP1ip3irQwFzG6Xpj9DwWfms7YeLXU9A6EkFBfyETWmK6py4WtzqWk3AHNa27HbQJ69m3Y9VzAZm",
  "key34": "3scgj9XNioLt2yTTBzz2rFuUYgXiiF6KLrvNuBcGmqXXE1QU2QR2BtLPPBELKqfhPTYn4KNLEUM4D3zNi75W4ATk",
  "key35": "5XGxZUakx425Frifebhq6Hzq4og98zXJYWJaRQarHgrfzKEcvRNVP1hV8G5naR3kYQMok3eKmtMAyvuaYxAd88t8",
  "key36": "5fYtAY9cEprsHsoEobFpy45a7icC29fBegWCj9vrcwP7Kz5sTJhWHvwCYLNKMrchjtNnLpvKQfpDkuUZXZpHRPRH",
  "key37": "5ZCiaG6CXWLXF2Q7Xpt4wHaaSrBeNvJTBKUwJFhb67BfcGwE7mPaC1uJyJTVhSU9hB4hZC3JHfMWoNyNCnkxWcRz",
  "key38": "55dUhee77cEjWoRhrwfNdb8Vst8adV5VH8CKArwA6wy1EeRQmSm386hwuUEXLksdTNRyETLDrBYUoUdEuatarFAs",
  "key39": "5jF4u3kGQmaePqd29td6Z7myUXqEhcs51uantnMzVvqTRMov5EDCcFXs36JKPDueYx8qDkvDsNH8QgzYa6x3SyUZ",
  "key40": "28B6QkCLhSacmMzmxD1HyjFFbpneaeY1DsuXLutZKMGhM1yVNJPtm5FmicXEWsR2Dc5WBfKAXc2nqYsFALNLtjCW",
  "key41": "4SDqwEqqiSWfdupc1xCmMYTFNJmZX2TQSC7MZxcsm8SyVCzpVxw5DJDUPeHWdan1fLbaEHxLesXRAys53bVvRme1",
  "key42": "5hTTy4XzLHrDb3X4z3LsBQxkriY8bBQwBnJVKsREn1ptt9NGsz9qigY65qignguAGZTBpRyoKzcDExgoY1RE3tdH",
  "key43": "5pBCPx84XfxTpJRfLoeWsPMUDUSoPLNH6aaivphTWtGJrQGA3jvgW9hEjVin54MALZhBBGuGeGJBHsG2cQoRbCqS"
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
