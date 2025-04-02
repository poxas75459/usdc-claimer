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
    "4AVoPFLMrZ4qK9X95nxzwoqPojCkRmEyaD36sPFD3SbkxtmfahLYbqCFdqaEXx5ypg7HkR95ZWRtm8Ura9ryCMjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42U8fpHGFgCVBDgoxCpuD5F53guRsfNo3a72HyAtXTPtpmtigC2LGV91Lr1wZR2pLLo8GSftLkeBCU5787PsxPrt",
  "key1": "4ouDK4ToEmxLhq496ky1EMCNnDjboEwqqXCHtAJBrgmY66VdnY84CaDTFkms5pJjNrW29neycnAKoNXjiBm2kT1d",
  "key2": "3iETp17CeyHhSjZZEkAwxPeS2vefa9GEwcAxN3rBrpLK2b1CTThLQzm71XH4ZUj25YsBWpKewqgR6A21rRmjhPfq",
  "key3": "5RW1weZMGx9h7MAQRaKMimgUAYowiG6mu1xkEGJCEei6b4zcx1fiXuGFXoHHkt3igZWyvJLnjmq7qAYWBfbtuPX4",
  "key4": "5FkbruCiohkWQNNgnC8K2w7Ct46kjswFhWwG8ZykwmE3m8QUFLHD4JXwCLP4mJLKFWrnV5xjg8TRf3zPLEzPDqXP",
  "key5": "4xxzChSRV4u3SdSB8C7UJPJ9errD7ZqUzspWRTs7KbieKDmtbgX6snyRFCxjf6cfkHkPmUMxXMZ4mmjudJEGzUY5",
  "key6": "3gQc91iFJeaPDy99bPTrWtVYbx4JDBU1Tkjsmr2gZTBrVqcSsEhpBSUtZQiVPq7yKtsSvzwT8tgcySvsnwDezHMz",
  "key7": "rF6op5WbKDL7H4RrC3wJ2kDw2YqEAG7oV9EbuSayUjHdVG7VBrkniMdUw246jPy1wAazwQZ1bHuJmNGnmzF8JRY",
  "key8": "YUEZ7devqWu3U8o3w8xvJW7CH5xUphwbqAzynNxTuJToQCfkfGJdgkCRDQVCqxGGrrhrxHFBQp1Pe6hG1mBD8pT",
  "key9": "3kqUCmGTSoK4yVL3XcJHip5Yr25ugReX3NEbwWLrXQmXjuPdinrDMD12gpxoiRpnTfbic2D2mEbUo1k6X9Rov7RH",
  "key10": "3uAdJ1aZiznqVNRiubdPwhJicDXBFoUXBYUDw1iCu5d1bh2LKXzcWFKrNo3XvjG3PXqnYhNo9QgiNF4K9fr83bbz",
  "key11": "1yUnSCh24gVmVPGcASgicn3sykERk5CVt3R23GZwXY1TqnXU2A4MkNfzWXnkahh1WKm86EsWNPdwEFMwVTgE4Jf",
  "key12": "5fASg36ri7BWig9CQe2BUfajqsa3n7yWkVnmQPgNPQVjQ1hRn6EAqD4jSmw7nJSjKTJEEb8Kx1YBYYCedDH877eK",
  "key13": "4aDe9KiYdtWExPHskLGxvsCdQn42bm66pwBKhW1Sk9qLh1DmZwmTvgCqBVwEtkPzFXU6sPVgu6gLRbZMkHVoVePR",
  "key14": "5R8VzobTh5h5fmW2RpvHwi8CugEuNaqN7JAWWy7sGVJv5nhvcpRPZGHbMrCx1HCopc7bRq4BLhnqcNxjBt5isPBN",
  "key15": "5n3qQBbrNaq2QdoXZvhLykavKLKM1Co1ieDYGGsVUyGJmW1dxYZh1izr2eiYQ5KiXY7jq9pPrP4W5vK8phdvxXxC",
  "key16": "5r9kudozkpxut3yQHq6ifk4EUKLX8bQ2uVZgTW8PpY6z7drfV5YfimznN61BZJdFsWZPMWHnXP6p7NuFyeA5Ek5E",
  "key17": "3xM5umXKSE5XqCGje1Amwv21qKX8y465FXGwxetfNcnQULAbZfJS71XGiqcgdYq9u4KT5mJRJ5QP4oJqfWiHghdP",
  "key18": "3f9s84swUWLt5c8YUGHGPRxSU2WPxiUaWku6X47kRXU4SSme94snuWyUD99fRLLixtqr3zKTCyXkSwf1f4h6gQVT",
  "key19": "vQW8kWwiKoc98puAdB2GtvXNh9TNyPDV6dUdeuFPddw5uHVi7QJjArnYuquhHXFdKd4Zr6CxcpcEJRrrSHgAFxc",
  "key20": "4xTxTccAsTQm38oQrUhhgqLpzFGFJtZVMXLv1Y6jvitjJ67X5CQa1EWN9bGS3ycmkNtzSBWmjmDbMXw98552qcFj",
  "key21": "3dhqTdCdpFNxLjC73xTTopGbAdVpFdzYXSdQPnv6hnuax9vF5oaEmh62KGB4UTM1ezmdEii6hBBDCWUCcuZZq1df",
  "key22": "4TdRZ7QPqpqo1UY1Q7qJefe3AxKYsFjqH2XVe8WV5f1ubcMupYnN8gWHtuxPvETwgrEU8WKhDZvXGczh9wMn5bhk",
  "key23": "2Hz9VLxbn6S7CRVtj5ioMAKPhp52eBaQc9ujxrCs6nMJRqMhtMqTBc1PvEA8piRubq7q5qP6X26dzhDTpTysj37H",
  "key24": "2XooCL2Wv19MxMW51MrhcUSK1kwfiBtYgotssHf4HTqjgxNtAHsx6AocSsrptidTzH8XmCteineHa3DQMd5szXmj",
  "key25": "5wF2RqqM5RZQghSoyAW8tsL3jVA9N6YCyjAUvNMqks4tiinvkTwuD5JSakq1v8CiDdmXTTcK9XhVexFWURzgiEQ3",
  "key26": "sjzgATvWLEK59tfwJZ9ddvU2oP5Fwpey2Rw6vNUmoGh3pZaECVfumXu7LDry4fpXvB4i4PAZzBTM49cZFNiLLxS",
  "key27": "YHVxaWbe33AbzjMNhgc2wdYknVzibypRMJ4oYo1UDhakuYRuMTeoSMUG43gWQSYRjBQg957xS5wvo83WWiwUwgr",
  "key28": "38uXfXQjkraA9xsEPkum2KJu6SoDzU1P4j2S8cL5JwdLQ6n6b5Dk7bWxHH1BWLnHpXqVsRamVhN565BGPuDWugte",
  "key29": "2rZ9XaY59WAKBHBAzEbeGewwxjM2N5hsyaS1jQMu8u9miRqgqJ3qcE9XcLriYjwiqHCvdm4S3rMtUd2vxRGrY1qN",
  "key30": "2yasp5WeW5XoomjZf8AeN7r3qPtP61HaHjenwZaSASbXxD6tFTm59r9Szu3Bp8THNzWHh53QUGHmtMCMxM7sLk7X",
  "key31": "2jx6XK14fNcnipB8VK7BMmZMH7iisSWhpbm752SbpDQcx4VxS9HTEZmPBcSgeFQvUoy1wv41KSaxKLrBN3gPG7XW",
  "key32": "4cKKzja2Dopmv2xd4h13kFZfXUnsx2kjbFBk7o9Zd6H1YGaB4xhUo9vZPUis7MSmgpBsZekr6ehwDcgpo9QG8g5a",
  "key33": "5SForNmHHzuG64e2MGnSW9ZusFtePsshB6GzEVZSKGu5PdT4xSVeU9RVj3FxJb4dKZo9bq73VgB5sCbD5aYuphNN",
  "key34": "5BeVSzw8P4JmNqZezR6spdVLFT71Ymd9BGrMTrCcmZC7EVEC6KRkWsmquy8Z4W6fw6bEs3FJnqxANYxvNDMtwQM6",
  "key35": "2Sdjsv5yVGCggtczCbQb5YVcwfiEYA6FMYg2UhBZRRF7ErsneFDnAbDfYhFuhkNoXrKYoahk9Y4J7UF2ShArg25g",
  "key36": "54Zqdbg1xwnqRtCdCTHfgJ3vR6M739uRK7uoRPpXsj7741gnSA7L58ZMfKehAvKveikFKj5ejCBCpYGuYQ6hfLhs",
  "key37": "2dFYuDqj81AwfMeFUuW5dJgmveA93DgvPnw1TWRmFnsdpAMPyABpueCdmzM3jxPRDRxmNXorwmXrEisidvS9N8WM",
  "key38": "2vwgZ9vhLnTArDW5cQXumxFBxHt3FPDX3ut3AKicUrHeYTiu6Armk1Vrw99noEiZUtHFGrxuHgtpBKjVecm8kMkx",
  "key39": "4KqsSRWAbRg97csQzNY7Xr71QQrsscSH2xXoTEAVF77ys28DzMHzFpSDKXSknamB3diikC8jRj7shqM3WiKHAQiv"
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
