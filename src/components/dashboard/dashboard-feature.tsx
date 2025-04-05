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
    "2t89AQRqqcLADgcjLkreMQKDyd58MEeCrAY9eiCcZjfW5KfiQBtqfzooaD2DT32rdBxK4qWW59RCf6AQTtMAqwSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sPqC97cM9a3Ewu1NzynYk2SGQeKsHPcFkPqRBnasgWCFKgV8nNGKEnb5sv6LwPo6CzErtFQgWmgusvVkEUdimPE",
  "key1": "eStvk52jqrjvTRTBrpL9uhzXv593CK4CPsoJufPS9KoAwKg6fA8ABeW8xcVTRW4v95UbefR3TPwZLcKesW6NiKb",
  "key2": "4y8LQTKxC2eYZiV8sxnsawjZSLnvfwyiMB9E4WFwJY9yK7cTzes5KfHwS1nMEXcGUnPMbrHb6c3vVhP2qfnzchFY",
  "key3": "t4o2UgkVmW3gYNK96waxjvdboHD6mtUbAhn9AneSkctTgp5scDH9uMNG97Xo7bmi7fPmt2YCgvq6YQ91dVofrcW",
  "key4": "5Kp3GUKJEfLByJaDANn5dtvDbkt4KweBW2Jy71mw2i69afQ36QoPT54AbbqJxSfnxwPweygfep1GusgQ96qCTUeC",
  "key5": "3wV9CV7riNLd9b4NBgJzCQpy9EnkiYLFLSBpQbbDcPeUD7SMyN9A7hduLC1R3DhRmSDE9ZVGrqRBoEPVGtA1muP8",
  "key6": "FcDigJFDXkp4wCSKG9TyGpvUBhGbA1BK6f3gyPFJ4xfmxYAKYCnDKqkJEhx72kxNVmJwX1Y7M8rBwP39FCqnZhL",
  "key7": "4W5btDiXpPrKCuk6Yno3wVwghYX68cYyJt3Cda4h9qP1rHQbS5m66xKnwAbGqghX5cpz9JkPHqcCpzL8WJCdmojV",
  "key8": "4XsHUXLhsP1V1D3BWkMQbTZpCeS7kzJ1D9sCH8U7bzVeWrpfkAi1Wd8GcXGSGm2FBhotfQj2SNhUE1oPYxBujxoy",
  "key9": "37Htcxr7oYj6remvYGmvqYmU5yk88awnToSR4kQPN5R4mPbrwumvQvSpWLdPwiR6MJPWEhbE3hWiosmZkWU75uRS",
  "key10": "2XFKAVGXFKmRvtS7Ke2kKWF7G5WR2cUgQdcrWU88P9aWqRwmbnhGEs1Rmbgwu2GMSZmrkghynych51dr8Q7moctH",
  "key11": "4bKcYAAWNCvo6Xasv9BZiv7ihnaSK4RF8ouuqzD6EqFCGKuHV6XGruRaTkn2Rq6eAdjxFVHkBmjew3kTdfGwUiuX",
  "key12": "iQSiuNUWawjjjmWtB2pWxavd2XHbM897Br4t7yxoD9Khrhta5NuZaYBchhyGz25Jv824JeTWK6NwYcDjRJqKiW1",
  "key13": "3TBEEXcWwSktBni17W1KSbEf7SkBkfVWtPSFnRNZExjM9ot7c9HfuKbQ69sPYCHc5m1eXKTmRrgzFXWnU7nkDBC1",
  "key14": "z3cZdEr5bFwFaJmXyPA2PUUiU4Gbo9JCzGzAMZomC9ciszuY44QY3arJA5Q9NG7mjRRvHatPX3EboN6fWfUVYnc",
  "key15": "yc3yCHytvE4QBCV6WKs4h6YUN1GuSxgoEV9dZ4oaD51g7n7M1b5gRzntte239LfQrkrhC252xGBSAv2eJLeJkwr",
  "key16": "2qrLaoGBbdqYKs2v2U4aXaJBr5Riw6Cj1oKZxWrXJp1FDeeBisqBY95H4HEA7T7WNTx6N7WvveH92DE1M8VszTs4",
  "key17": "33TSQtWk5wHXsz499L24C9bQdofkLGRQ7MSdkNg51P3KZGoTEtXT2FCUyCCS2Bb18A9qGLYUtcm5f8GtZbfevkg7",
  "key18": "2Q76trgvxBWDWPjrRHrFrUnQgT17sqikkE9P8Dn6C56UxebwhnXit89F8e2qCFtpFVYFbikGMcBVRPM28131vEvn",
  "key19": "372dpgtuyW3LPNC1bbkHMBhLDGviPzWp99kXdzbioNTEq9y2imkdEJB7dAN6pJhnrPGPqc8kQSqgTC9HJhtmKF8u",
  "key20": "jPmwBt6tiWU29HsnmcEKH6wt2ztrUxkFvJQq8MJPWePm2RfsYVsSedZX5GzpAqMdPghz1UdVnYFtGg8CJpj1edD",
  "key21": "67RHHhp5L39oS2ixoF7F6zivjqAmczKbh7Mn2KC9D1aicQ4F2m7KL4zbq9567BYoF7q2tFUQoRhmDDWqXjhT4k7z",
  "key22": "YVPyfCnzVSMbp9mFj481b25Nn1do92PyESRmaXv6dBMVWsjsquD5VizYpPNRLmhXQ7FiT8ZF4c691a2T5cBTovg",
  "key23": "3kX2rRxk8PRCgYX81v8JvFXYXtraBPQoFkqkyuhdtvKvhRiFbVm4y3sD9UBfn9tp75TUPKvVtDthARmocPdJLhLH",
  "key24": "SKgSioR7diSxV9bociopgQxinRWNjzBoBQz5QfLtezogj8iBfrPqYeAht5jkQGJY3qyJ2mQvwx2s242TaWsD8ew",
  "key25": "2PbmhPUvQ7GAyJKKRb2LMn1MUp7JDrL4MKgtGHYcn5sqAxBSmqLeFkcpMR6thgNStWSEhbWfZPd5oUzkPCvB3fSB",
  "key26": "42DvDSDmH8KZrjvnq5X3G9QbPuwbxERbBbpJ1ybQRJV7XZC4vAvwhtXbqnoairaEuMNtzhZYtasqeV58WuUwNdP6",
  "key27": "5kmxoZhTnHiFo22Lwe1x6wMHXhLiQDuSLyhcFemKzkfpVXCgZSj4RhtxbLrqBQgKQqY927h35vEsURZZk6ZwEkVR",
  "key28": "32BYaDwNRVSTQcYdMRVNFEhuqk9kC6yegFwHN7UezM1DTkv59gc6vgDVdKfFi7xUtnqS5WCfewpYJdVfx6Trp8WE",
  "key29": "2ZFgnEVD2EzEJCbdRNJ1NGUi8AHjkh8gAq6khDingEJkUUBaFBLeWjXbAS8LURcNKeADzqYrmqB9yCcWVyqzQfBq",
  "key30": "2zdo6JNVDSRYGmhUM8tGH2kKN2TxEsc95uU11tuFtHT9btqedh5YPKMCdX7BGn45xV2ydRqCMqyeFH69zDMyQS4b",
  "key31": "5EJjBx5b8Xq6Wy13D2QuHPxb2NWBHh8Rc574wymyz7zaYDLz5MEYCancZFWXhXJbyqRq6hqTSQ6c4kikzWWfbqXN",
  "key32": "5AoX6VRrDBTr3GABpDnAtg6VqRmBLX89bH4Pcd84a7iowxickd6wb55pX9hsvY9MZ2bVVkiZpKkmHSfCTWKHodbt",
  "key33": "3UB8Pv4jfeytavaHkabPPLKcM6fGnWzfbJzvLgrgjn8b479gorrjiCwYu1ngKoR1CS4qWkgHZjfsowNfJjPQCj7T",
  "key34": "2BACqJuJqCbvg4yzdcgcrR5UNxYe7zdbLcNLyfpV4a9ExmKbykcrWxPUTZFmaHcoMGThNkYmxxXYUSA8K5hn9ndk",
  "key35": "2qTymKUN4MVkvymSq3PtV2HBsc79yxPKemg8HXXqkDHjsFUycRL6B8WSAnu62EhWVNM2rVzpxeMvFjo5bC37uv5b",
  "key36": "3mgq2z6u1LAUw8xXjFvBvVXr95batU512sf5Gaah6m4sBEz1zNs7TkmXtCG4sUDsAuy7DMJzXEwUtoL84Q36ed9a",
  "key37": "3JDsoHuqknn4AdrsbJhEzsGDfeQjW7uBe4XaJxdqDqxmajKEYkQEf3TPsB6WNEmmfw1pWF4zacccVW9CURiJ9JQz",
  "key38": "rB9uweku4mUc7tHMwxxSb8NRUh4UfRmhLFBpH8Yip1WR8rp7vJkNLSx5zivKNk3Nv9uWoqeuGgEevigSqcF2URv",
  "key39": "3k49oD4xbfT9D52YqcjazeLozwdXFrRocMAXf1b2Jf88Jp2odZ9TRpEArYWKk8tgNw5zYRdL6UuD6c7d2rm7KHFa",
  "key40": "5hSQ6brtBgx4DTXHdZ2Qe2orq3TiPwmP64MdZw3h6PcDwBruCW6tXaPV13K3b7u4Gn3kFxZPX2Uk98eFBL7p76XE",
  "key41": "5PUostTfVLzwftf62LLu9u8ankwuAEwepjaD1t6AF1GJN78AM2HMZHjSkqZ6RkEyK86YR3nN2iPgWcqfy7Fmv3QG",
  "key42": "5G9MtTaXPMYJ2Y1bg7bAJRJXRdCwy4Qkjv9u4QvifQBAiabiEnS37Qd3gqNLnCGBGTFYPbZqvsqNtxdtxmmVg2V"
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
