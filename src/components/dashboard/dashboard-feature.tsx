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
    "36HJLxkatL3kRdDbS1qWW6MRhg3zMoNVuHn7xxQZvWCSnY1MM57Q92U8m1JBk7g4BAF2ZubCb8qfuMU7zLjdNuKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67PQUkGWQeSwNQdLysWEUVixjP3ttqi6JwPkV3XhiqkkLcF4F4xBtN6a4S1SsJsiNJ5okXoGNp2T4hf4342YoCUV",
  "key1": "5JYMsEgwwFnT5hZ193v5WLLgRWXSNDKxGrMywvUQpaF3w5QotktUa8u2zyqnh4YNsvRLJTdU6fC8MW4U7ZKwtB2G",
  "key2": "5brtkHCi2c3YiikEDKMNMS7BgiNyKC3NYvGxdXvshTS4HvdzAvyQJTdDHAAQ6X8HUJAUiZmPiagSEwThu1nFhQn6",
  "key3": "324HB48DCJkA59oGDckCLWiXwJDDAzjjn83uoZTPRV3kJ84ZZJoxMMmus77PXrKBMADw7xKsMietGHN19B2nAhKx",
  "key4": "2nXa3oNE2dq4hKakTCQzAm4mQDJoRakPasCNA1K4UEK3qSTnGYr9AdyDStuH83wAA5AuX14z4PcEg3bG1c7mVk2y",
  "key5": "2PNuhtzi1xVnRsLZ6dLjLAE7SZLjUGrtkFiyQGp5ksDtWxMreTaxj6qGsz8ycK88QRTqGBtYiCMP4FZFFcXNtwvB",
  "key6": "5HF7Egza6XHA8oqtZfi9fn5psTmTUyiKAeWXf6kzfizb3Vrsups8VUfd3bT9Ppg5pR7a5HUvhymcqznFPTA7hSea",
  "key7": "31tDYK2GvHNznz1JUzcooHBBH4vfnDLM5YRMFPRMUye5GMhHS67wwWvgWjrUCZpmHos2A3L68sn8mFs94uWXqUmU",
  "key8": "43nZUehbfNFiM6uvx48NKd45KaqNxvLp6sHwAPFRGjRVNEDvLnrwiQ4gTN5ZDkee3eiNE4XzwuxskPKWhWgfx6R",
  "key9": "5ppx26WPfAvSis6tXkRELFViAJxNnqnCXcp8PUiALrn5rynLX45EPE7BqjW25CsgdXQqu6cDMvCtRJRRdrnVEWA7",
  "key10": "jTvR67b3sTakF1YgaAcuaWGXrKf8eLJJnoA3ciG4U2CH13yd34wvJDxV8ZhyWroRAqXK7qk1ezvfBHCnKXxMAZh",
  "key11": "2NpmMQLkoZBcgaervBv9rmczybSLYhWmSnqeFJosfSfphHf257KhJx7NVvETXvQPeJAroASZ4uiGsuXVj4Rg8KUd",
  "key12": "4krLYjqp3hrLKeYpqG3uqSFwig22oFWuufj97w2BiLiFaRTzf5S9aZpnQ3FrRLrWMS4Qeb8rsuKwroxce1q7YgB6",
  "key13": "4iAh8AGqusvgiyGSAho3xuC8bdycNRTtrDoGMT934N4yf4C5A1WLuvpG3DdTwZdSGwrd7Rpx9J3kDXYCgRJ9RTAK",
  "key14": "pmYXNxZJZRmQJ6m6L8CEWeZ5kVTZ4xTXhJjhXLWzfM7it9K7EQgXE6zodiDpnbA3nnXCxiuUiToT61pPL3i6qpC",
  "key15": "36vo6JbtNLaKVxBAugqWZ2wiey6AAyh2e6jeuWwmPheezz4BRwZDK6V9MmE6tkQorpgX7YGZiJGvwZ4vKg1LZH5r",
  "key16": "fFLufLRfGo3FkqFE5Xbm2WQhhhzoW9jg1JiMXNYXWuxw9Fp72RZTczc6FxK83yc2aw34pxzHP3saoDGwB4YrNfw",
  "key17": "3TgccHeLiLG9By2FXS5aY1U1BsJoe48dfcwesAGtCcsoU1qfFCDc1RohxyRFtPN7eqBZoq99MAUxYaddu1TQDPJg",
  "key18": "8KLZLTy3N5QQtfxS3tcBbUMmJvLepQMoPW5HiqwsYMYfb1ickzDaF3CZFxtyKPL56siy5GjdqJKnR733tcyFZyo",
  "key19": "5ZYifAXxsWTg7R4nCQNVMayuA6Tk9HP2DE4wWFnJACPk5ZWPz5AgAY46hf21QRcERvmDjVyo31dHC8Gh68cCfhAt",
  "key20": "2tVLjiUFw5uFz4eMpquvuf3ZB7HdtdLyQ5oc19r91kbQu4w39j7vpTSjQuJh1P4EjVz8mwMrD1jCWu1eYroXfu8o",
  "key21": "5f9EQaAfub9f2MFEJZqXkPRt2EsrNC67arCPKz3WUykwsJVg9MqKNvMVkqPHd675za3yCeytCjQEYNM879sy4beW",
  "key22": "486qzyKyrFdia7gYXtNAwNeyfLoKfaNQMGc1RQ3pXhaZZTr4fnYEKQZ4PD7HWFiWX6f9MmyQKfBGHe4vLottqPT9",
  "key23": "5CBX6XZxdj9d17sTwERVQKgapEka1LnQTAUAMPHgawCgf2aBybxFHuThaf9d9MRRDRzTjVMtaagqsmsjiFaUP22W",
  "key24": "64HvNdWnm3AQnS1bVKAfXuFgtBk3F5paB84MFYeKZvycZaQY61bGF4mh12uoihZUWYUiuseHB1KF868hymPKQktL",
  "key25": "wMP3BYeHQoinjB5Sf2RNt7TqnmCN4AF7opjiwxm3nfWrBAePr3YfNze84pjrviqdDycdGwrrPq5yttrZu97YuaV",
  "key26": "5f7P1YonjG44UmJcQizNs6bK8DzTqf8WjMMo7FGKDZf5iy9ZQJSs5PrYeb9Kb6bny3uYSquKhGBorW8WP1Tw4PQj",
  "key27": "T2cn1qCFXCrMJVGWETYrBZCJtFjB9hpPKXUGRHEBhE8AHx6qjHz4yJy2ffnufoSnzTZXGeBzrxf9WDpjtAFRN37",
  "key28": "Fpb9fLgCRJqWt8X6gY9uqHPa69KwVykjC2g4dJT5ezccKiVH8v5d5jBAL3UBmBQcvxKdpozcXye81XX1NRCTB7V",
  "key29": "5v6G1LTj8UQZ9x2jR9fweQuoz5csNsjWKj2QVtiQ6iDg9qyG1wcaQ367i4moCKVSugqVGmsfdbC4WRiT1ACsiqXf",
  "key30": "3QJTrbjo5TtNvNwWDPmY3JAoGq4HchbtxeXqb3YDSf1BLZfdq43ZBcktnRCZo2XdNvBANKoEhmuaaTGPb6xWWRmH",
  "key31": "5PmWkQ583Ro1gtwa6WYWFgrbJfvEdKYPx2VJJj1B15cCPVVNRU4fdWigBrswJg9osALFHocxhEAfmbqHxLHUb4Eo",
  "key32": "4mJC9r6fwuNzj8AEiLtpnSFHMCWi4UygzkitHPMsRUWiStCrsNG6XBq2ptRWFnHdeRSaKV6vGt7M68NnwZyTKH5P"
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
