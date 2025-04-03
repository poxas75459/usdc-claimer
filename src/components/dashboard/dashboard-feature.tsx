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
    "3z79j5d6WspKYLuNBewy4nmiwg46D1dBp6s59vNgff4K5PCiu7Q12QmQDuCUM1ugaPq3raBxpURYySc6q8JhNa18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LF2vbLEmumEjzB38LkK4tiBtgtKaA11QtC5uSFuyr3Yreg1c8MvBA9GZspn55boDTkiCsn5Vfj7Qd1Gh3EdFxtP",
  "key1": "2pQjWCi88gx3dwwQZVza4i89FH9MrCL7Zg7JVSgdU2QZvadtpHdjzvzwRW36WReZo8YuBYiApQBCgAPeqAk8Rh9f",
  "key2": "4ywCvuHkVSLtii4JmsqGoBECWUSxF8Jwn1hwGbQ17YSsB9md9guVjaBUDgyXNv4xCrZbWWuoQL8srGNspYGGXa1o",
  "key3": "4bUHkfR8EEG4s7aG2y3AJ5VHFycoBE2cstooHhiGhCX44m6iMDjHUXamLPziMduT7t2KtWByjzXgZb8KLPTSQJid",
  "key4": "3dEnqrBwmNEppy5Hbug6iC6mocY2giE6KeT68itW9bYtdLZ7JoQPUN3WTZ759kKZ7tgkKgbG5dryUEj3z8ipYQQA",
  "key5": "92cp7ZwVqvCEpLjzsv8SxS6A6yvuiVo6jfxypMwZaHJSVvgydaPKuwgSrLePBrCHzA3CachYqDvHkJUnnhJCbbm",
  "key6": "51rfEFggTESsct3ewrRe19ejX67xVMKZHBmqhXsKr2inaPSmr6781cNepW2M2be9P6muvirvTUx1zSTnPhTKaEVu",
  "key7": "HAYgsSwmRgLrSsoQtqzxExJBburTjyC4RbXDvLvhTWZWPV8MFbmSeoZir2qjtwVvKreaVDNifAiXbd2JVNJaLRa",
  "key8": "5tqsZSa9U2U2sxmRy7YhQaUZs1nzY8M1VDdAptJeio6n2mdximpLinrYp6nKhJD47CEe8hMmKGbSjCnWHWNw46ex",
  "key9": "3tzbb4oheHqq8UXaM82ALEvtCbTE4EuquHnHR3V57ZCFuUszmtNYEdPi5vKoYpcLS7QGRnb5aocorqtiTzXQB6sp",
  "key10": "5zWmAAjvEdbprMc1CEfzAsPAZ9bYkDyK4WPubwPa4XtdwjUakP8qA7dwU334eyrBa1KjXcarYjBsXJYdDprH6fNs",
  "key11": "2b1iwtaMh5caTmq33Cw1FDZFEA9AzdsF5MYX1P9GnaNpY6j2WFuwSLoBwGHaY46VyHKKkbULdeSsLDNQn9b66tfb",
  "key12": "3AArpQr4Za3ZWzJKj6T8tX3wo3Hb7iKXP8jUiyrMJUywFawxuvu8C2tTAxijmgJYU4VYAjw1hhkPrUdAD9KUGpCT",
  "key13": "2gX4XCjqMXzyF6asvkHofwfejDFFsnXFpTgLsiEipLxTifV6hehYuT9T3kMCFupK9LixPjqrPAhWNB8w2aLBUaKX",
  "key14": "3ptoqiYBnzA6gQHfAfSoXHt6uwBLPiZ9Jt5MCUNsiBhBsxX3zqJyaA3psLEQSxNwpLdvnUkQUSvAwGGLEH27tWnB",
  "key15": "4F6M8HeB7SbXB2fKP2PHEzzdJ5DH5Z7aytRVdjEGN7wUtt6Tp5KhBEHwvaBhFFwZq4gLTDPp99djzRnytaQ99WuY",
  "key16": "3kJqsiaJsAG1dkzf6hTVSTeiyC7MNdyeQmTkVR6hMDCjSH4xEyqNeruK98JkfKVNiSGQFmCcS6u7tA2oGyasaGV4",
  "key17": "5J4EfSRf48Cpp3ooMBBCM9Z8ocBrSRbn4LmKGee9i3GLY1tr5bf8KMZ1ez9CAVs4hMEreL3PtUjSZYRxzLapgHLH",
  "key18": "4gVV6BP1AwcuqCnuUD1TktHENeHUsVndyszGPjUvYwsA1a1QBGwnFn9WQbtQkT6iLepRzuBfmihf2sMn3ZtUJpYK",
  "key19": "4zUxpD52NBuc3w68bNQVhVMgfhEypEWGxmxuLF9WjNaKzriQxMr7ctFXGnfw47NNfwSzZmkAL8ed4Vk2ivu13aCU",
  "key20": "dEZFcKBrMWzLiXFzw94L5RiVjhjwZhEryAJeSQDAWuSeD9YZLD5bWRH8FBWDoufisKJWSimbGmJnDSnnCD3QxHs",
  "key21": "2LoiX9NTYs5iwysfPsG7BTnaVWzcdZqotQdhp3T8hJmihqQx2hXyG9jxqiEYHF8W67yehiWVVwKHMpXzcPRrp4Vd",
  "key22": "5UTxybjHdjuesabYnzmBJxyvag5wa4rJqE1yAJ63a2PtB8c9u3ZZFfKzQjT3mb1TL3g3U9fxvDZggTdReXFdyDBz",
  "key23": "qQHceWKKc8BYQTREirU3NxPKiB4cBYjjcj2CsFWd1A8soFhRkzExosnvj8bUuRsGf8biRzEjF5T6Eqmh7KkYQJ3",
  "key24": "N1bzmV6GkQwwzLSi7goypMs6Jghbd8f33DKddkbEfbFPoWFNrBXkZDhuFjkjnJBG9537wD7XUR8mwS6RKyaaD7R",
  "key25": "TiTjj7hpi1sfbm39gfNqkAcEQMd4b199NYxLB1wvH2GHE1ZE4KpRyfLbeg2n7f7bmcVs772cfq1CqBXTi6QSprW",
  "key26": "4r4WtqXHwbhKDZWVd2nR8PyZ5ZbziL3BY34VRim7Lffu4HJ4jNA2zvRPtbJ5K3RyoPjFBnKy81p6fmnoUJuguKuB",
  "key27": "3NZpEoLfmztib53PsQZK4vKZ3ZGwHFRNHSWLXFkQjHjQDaPnXEHyQjv9sdAhNXqNUGPNNG7HcLhZAsaUCvMR7EYL",
  "key28": "5ZMMW78x5H1iBJoZegD6fqYRA7gms5CL21zg79YdX4SmTudb7Gjo6dy3qs9j8SRwYptqwA6NLb1zcECBqRG367ZP",
  "key29": "zCL8JKWLnCtebnzPh7vrU6zEBNa7gPbkXRfLNCdspQWBCPNyiMXP2XaCML5hNpSqfphiwuzPzWvw3qG5p5175Bq",
  "key30": "2UPdnbPmxAtP38S5TRFN6D4Bmrz1AVM4P2pCJCN65gDHWNcjoZkkYqKZD12gK2cS9TZxeK8zWpWXi6acrXkwWB7",
  "key31": "3mXgeYF92D78hSLfk8ZjSwpmHHBberbWvpZxKQZHdV18FwPCvn6jAYqL4wgMuMeW6rgwQFTXNc1JRWWGfRACKnHc",
  "key32": "2bFnU9VnEQTv4bB46SrWRiwxGSKpUCwoQCwFoPppzjmQtk4ak8v8x6QXRoHjBF85T8mCafmSJSJgcWkHPmbAowdy",
  "key33": "3VY6nVyKTCN2wRS6burA8YBKsagHFoJ7QNYepDzB83zkgUobofHHWhZQd9SA8rmvFeFw6LtV5nLr553qCn1zq3N7",
  "key34": "3Cw8U3V1cQ68eshNhuszxBZAggctxRowLaW63YnwCtD7KxaUgxpiN8A2tgokDzQ9r5hYPpqdmmKp55R5R6qFGebE"
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
