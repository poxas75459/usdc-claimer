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
    "5penPpXFsKWFb9CR4wnKvEnz3vQnGkRVLN8HLz14cLrDvzqTSyxWjW4xATjTcuHqZnrwobczvDR8fSPdagKhRNV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QAnYNpgLmmB9YRUPPpBzvKJBoYc2XNAGDAKyrxUNqLvDMgoqa4w4cWbMscBXCqpJ8D94WPvqqW3np7FdQa9Fq33",
  "key1": "2BpqqBGxyJ8TuBwQAExG9jBicUH6A6yBsiQvQnsNXYDg6kyKCirAk5aZTRLTAs2pvB6HnohKRX5z4MjjA59dSagw",
  "key2": "5fxNb4448Ay3Ju43Mv7ybvuEqQRfyKtTX6s7PMSdkZsnz8PRCgLZardzBcTQspWd7GLq1QEzwVb9T5QiiPdgLDFS",
  "key3": "3VCiUkgPnvgSJsuNfDphGY6PLGNABMVKs1N51qu12gieRpKXGuDQm9KnsEbo3GY7LJk889or2Ee9GxyHVCwUNtTy",
  "key4": "2GHCEvhL6nmAYwqro9LqLfGp1NhvTPFw7ohS9r2NJ6bsWed7jQ5Fa1DusatF9UNJrmd4WaXdNeXDYnHBXeoSdbnB",
  "key5": "2FT9vfndhQj3DJFPSTGMQX5TcACVYog5v9aRAfUGi6sr5zQwdrkLK9ZEWtvVyskdXseHw9RLi49DHLfpTL1j9pvd",
  "key6": "2j2Gb3qUByNQKponEtMcjrnE69WNC5JBycf1Y5E5iaetfgtCs4VwcBd2cmxgrPsb1KEuiPbA4qWwrHRwuBqgx54D",
  "key7": "3Mauav5cayZbSFRY9jb2CkfaEC1YwH3EXQD7kiWBcpeLCRxMbToTzGyUk8snCrM4n7CxK4Qbtt3c4M8SMEwUUjpt",
  "key8": "2d9QkhzYQXUQXuS52ZY3S3vBHQUNVobv7F82AZ6wR2BdXibfVcoiwxTQrCw4xVAwR4mCZwNJA6dJot9VB55WqWMZ",
  "key9": "2VqRzaNgvyeYEdvbnjpKyta3818ktKMxqSnFdRgDyB2K1BDTjBRSa6thsfuXjC9Ux191yPZ3ZCBPMDmWQYtM5Qeu",
  "key10": "5nyNZmfuc37DPE1EZ2FWomHZGwQjBF1WPExuvi1ciL2d8ZNxNHuiooax3qtUG2bg4YpdcXVdkWDaT5wjEN4L2mfY",
  "key11": "ZBhe1otgwqndcJvc3BFRNK84CUc5uWF5Hp5b6BagZdXADNLKi9GipCVuodPtzBghJtoi27NDZAkjGGDjqHUWKdh",
  "key12": "2G7GVk9GxobEe6pFk8XzwwCdN4UgUUftuQcUxJPyhHJeBzpnXGfZamU7KQ5A5XUUhepsEwWzaePJR89QSsVzUdXt",
  "key13": "2XAZe87CxiTsP6zNsHyrJdr7qXdcxVLP9CWPWV84ygC4D8W6BM8PitoiagQeRmXLwc5z4FCdyykY8RE2v2uSBJSE",
  "key14": "3GWSiq4BAQZq34MNn2TMmPPWPtVs9C2CpSs9NUmSUjfPdwqHvouR1AvNdczFgFM8G3NStVvP8VoWV7v12vvHnMkH",
  "key15": "4BHZjub82b4HKH3632CZbMgmfGYyESBdbLEeKKY6CHoYTmoav4EVM9HChvmE22XQf6jX31ALvuTJpEoCoXRU51vL",
  "key16": "7oeuFKozAd4uycdxto5UGWEoibiq9gzhoJKNxYpn9Co5xpBsZMN3beuQifLefMNfnHvCWEb2XfL46Y3W1Exv5NW",
  "key17": "3WsEi3A1mvYYfp9h5xE797YZbEpXa57JBvgQFAzuBBo125MbxekJDHy6gch9a5TNuhNG92L8c8syTxwwcxYrGXGJ",
  "key18": "3JRJ8dCfKT8jA8tgJxNXMoTqa3EaZQJFRqoHLGwTo3to66HRevXdri8v4RBmbTt5dcJYopXZf2QkEkfHGXQRRXFr",
  "key19": "31VoQajaAPsnVFpUZmnanib3VuAvcyApwUGXqGXtidTKKNRRX3vEvytdKeXr2eSMVPuv1nw3r6LfQ4FydySZvU5A",
  "key20": "qYFn1h7KbVJZ8oAdZ6tUj6BGA7RDhcKseXedKLJiAGC458iwDQn35g6M73pCZ2qEszF8YCy2gCXuG3VnmyTrxok",
  "key21": "2BEsM1E8qqh8Nx3WA2FuWjWhrFZhL6ZW4ZHU5H93Gc1sJGuFwh2NakSgSQ5SJ3ck2TRfXA58eB8VbN9Xz5ADirGp",
  "key22": "2Ww26avj5XjpipWYkLoHZZotSsq9kYwM3JggSpo7N2KSGXH8tYtTC8gRpyxzQ3adX5H6VMwHQneYypThkrRdNSwV",
  "key23": "3Nrgr1tXb69gaZn7tugMvzjRBJzqo69kb6yDgSejpvdcUYURdV998g9sjDZF3xtQ4SFg7FmwFKza9HPSeJUGWwro",
  "key24": "2Qnw2bJtXxVdxXGgLuLHWZoD65U7CHpEeVbk6t93QNnUt7pwiP5SrH3FPdqPTAxa74rnz5S8fQQ9aAByZNL84js",
  "key25": "31PazzdVY1bxHtxqLZNNRThN2sye4BLq5CfQncoDv1y8VivJBQuXvoHnwDbXcETnyHfuwubk3jgk8h6QJ4DGsaE5",
  "key26": "onorBUBb1Ko5juqkoymhSkuT4Nj15ubWcdzse5Q8GSZ9TffDgqEd7uqzrZxWugYqH3MiveFzKfAxULNzgP2du2c",
  "key27": "67mkq4HbPJoeKZgJARijruRoyZZ1XU58PWAhsBaiCWW69EWVzboUE6qhCXfW4AUVbX3qs3xTZbznxK2tgPgzbJhz"
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
