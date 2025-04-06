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
    "f1akEhDXPXXWmXK9Dd7eUaWCSwoq7VcBewNhcPGq8Ta5BmkJRExc7jVdEfy2cMvm1pUwrF2H3fe9vweD2pZWnXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fZH4ebhodeSM7GQZJwW13nPSDhUfXvctyk2LVU3fip1ufGZk5RJTqmKp5VajnZ7Hp3k6BNZizvhzUJUTs1WE2mJ",
  "key1": "4qP8rmmZDNyBeVAqXpGKD2YYmphBrrc8GfN8hhD3ao3U1tuAoe5BLg6TkdtTxY35tScNbUenMEqPqGz8hpy6ZQkr",
  "key2": "5UMBKwkXrAX4gbHWcntous6VaQsDh3dyyKCVX1FWLAjVndj31Auzc4dSPmr72gqKP3ZJuEMJkFoxe3iHH9usXWFd",
  "key3": "dV24ouTDC5CqA3JNpcKtjHU8D8BzGTvRzNKMnojgqx4CLqRb5pRJFh91V1FxvgxBuCRVTTLAGBb3DDJ6GgE4oz4",
  "key4": "3nj3jm2xwkMKmz143eC5yacvqqHhrjB8v76W1JGPxUA2z5Njyyj6vgA13Ge9cDsFdgfxiDP2WaAfP17Et4FUbLQi",
  "key5": "5g36CghehELx5jHhT77LUmvCNEDcERobXE7ZP3BYDvLsPFDS9smCK9PubRcwhBeUeYEPsbYYnmm6xULTowAyDF9C",
  "key6": "2osMSG9K4vRq4PMGLb3bPp2c7Kkiww6Fnj591DBWFxiFFHeQJxVL8XtsherDNYupzwz4ZBja5aWYyYgKrVAmzmnT",
  "key7": "66X8Yxifhrc9uSG8dxwWjVYC9t5Duyjr1EwzP8ebHwKG31v7CRHRDcB3VV6Bim8RdPVmFs7fHeamKWqUjpBCGgJd",
  "key8": "2t1HM7JA7JcxdXCfkiYCNxMhyTamsutDjfbyNpZNKpYymgM7bCedYmZ5kziRpjkfe7ZXhLXqERqQTinrWRwtk6PY",
  "key9": "4FKmR46uzJHq5f5s1RKyzdPvtT6FdxasbhiqZA8jhfexWTaNwLY9QGjc3gY28296C85A9TbHcadZztqk5CCAYKS7",
  "key10": "u6F1uJpQaHyCrw4mKG4X6WwrwtJoPZ6RxPXxSBuKKEgKLVfw177BCcf2vGzmcG9AC25wChXgE52uET21A28bPNw",
  "key11": "2w6rJUT2RZQu1uHHzM5nzCEnDCPxNDUghPnPk9reA2hpSJAZJSBDUDgSeaSxVeDfippjvBm4mevWwdiaU2cMu5ZY",
  "key12": "3R1rsppTYJ2ENKKVdP2i9PYV9cXbJQsRzv5Sxs24xTags3xkjcSURcyXYEUWhU5KP96e4XbvmZuLV8PC8WMEWDQ4",
  "key13": "2vwW2DYYevswhCn65qq19ByK9BLh9G9C8z4AYQ5avsZBFcpeK3gnu25xjxujkxeyyYANkjoNzyXefxqUwjaZcnqT",
  "key14": "3QGBpFJX3G2VUupmUv6cfZCRBaCPSnmL797QP6Nut7jsHYyGKS5Vs3STiskAj3cy2VgxMPaPHoamMwequzogdQAj",
  "key15": "5aj2kTHqtKAraZEiSah65GADy82F3SQTVekmij2PNJSqH4WBFFLjQHFRVt7GrnXH7y7teZW7tsjW1Nbk6aXrYHZM",
  "key16": "5CUhYtTsaDRJcWLwz43ZtMdsyx8md5q5FJk6vzsCYJKoW42HMyaUH4Hgw827ub79eDW89CXMbS1XmNjZ9Ub4D4gT",
  "key17": "3jjLZG2oMim55rthQnkCRN6qiVtcrTg2148D1F4ugti2hZqmHAdqNd9AQtaRoxqSCmnNZQSfgzBCYmq53mx5KY62",
  "key18": "46UMEatNH1ys1pxsTFk2d84AjmRo8fbMLJD7aNUUTytazBfh3Qwj5oDJaAThsG7NU6r5nSCysByEqNsPiWsKhp7h",
  "key19": "4srLyPLG9eM4cdjr7Es6K1NQEPiux6inYQM1RnegofHh3c8RL44z8QDoGRR7yGMyB9kAJioWW1uhofViHnHhxaGu",
  "key20": "3nZdTFqqrMoLYcqp3oUxNbh9XJ87WnxKdZeC3Do9wVX3MDFHHNhG68B97Lw1iVgWUEMHUrPdTqgquitkXYAnSUgh",
  "key21": "cct5ucXpcubLRuZFzuFXLhHzW7WZ6CtgZQ8EqA2WuAUFfDPrKRhtrpojq8JyDubJpozRs99MttQ5S2DKKkfzGaX",
  "key22": "32wY4zym78fdmubToCaEfoJ9gPDffpZydNx5serFU4DRbBhAtBzMbV4EYugcByaR2jBJj4QhRqZ5es7QCSWATrwr",
  "key23": "4tYDyjke9vKBFdFf63vhfGn4juEvH1BXNXCuD3P2CJCv9ZptsJY41TU1bBPKmMg99nUG81miNaCTvkFH93TuGSam",
  "key24": "3D35wJbmUh9wmP7aCUVu3mS3pTjRXw2ymPS69MsFyceSDV2hBPjCiLj9DaJETWMQbk57Z7M16E9kFcX6KVwUfZZE",
  "key25": "3ipoduYqThCzSxwH1vw3mgNCRdnesuiiyT5pYT6DbXTwAryaT2F2kMf6fcyE22nQr5mKSFYNHgS4gTSEaTMgMAAk",
  "key26": "2icZu9ccP1L5GxiXBGgeByhGchRQ97Uex7k2SBeTJuisecEvyZLeu6yaLqdYa5nKcWDbTSXpbWr8uZDWgyyC4kEi",
  "key27": "5F3XFmq5hmxxpNCDRSHDAi4ET1gkZrm8x3pgdFhXyoJFmC41FaTon1UHRn5GGaZpfrxMTJ3sqx2198b6kBNVNBFH",
  "key28": "2KjQTMfEXAy4HnwM2biCNwYVN366MjfyPRnjEjVbc1a19UHzVCHWS9SyDa25ZdYpaFdVNA5p6xvnsKBHA6Bdx8qr"
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
