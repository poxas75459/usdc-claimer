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
    "2AXSwnTo8Ur7KuD5uaUi3MtT2dpSHagMyiEg3u9E6vNhwphP5EdXt4zEHzD9PpHYWmjbpoXeMsGUZ9wxB8kT9p2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65c2LtABwpBiRVjRDGtwcftiGonCaNq7foTmdG486cSkVX8CWEgbx4mZL1gqaq7qqqTC6tCZXTrMGt5QQHxCVecs",
  "key1": "3b8gZKujrbFU4USuAkX2dfjVgtPGMUE3UaDuZHRb8s77eht2wAxDVdtcsSd8Y6i8juSHfvt24fxFEggyjWj2BQ4",
  "key2": "wTQxzBxccLwKyRCrw74kcGDZuBy6zpWyWwows2GVHQFsNjeB5BbrwvxVZHzS42V8pZjnADKkQbdNBDuXxQfEHBC",
  "key3": "2rnhZdbS36VRgXqqyFyqkfPWJWor9reaHm75F3pf2AChpBS3R5TzzAUoBwd6th1Ux1VvUr7sURQr9gXfM1FTJprd",
  "key4": "4qHb14nYV8j4my2nLue3yqtrfdySPHVXiYhPvcgkV8JNkMyMnk6LrG2qbQ9CmQm4MkpvPHXUpmPLvQhNuKCY7SQj",
  "key5": "4VpUXfU1j4zcQk37wxsYMY2xokav7xd5hbworfAcJfx5JHCsMk4Ud7BpzcBKPjAToUAndSZFNtCTsPcV84FkSh9J",
  "key6": "4KrtV9BMunLW19aTAtv1GTjmK2mcsbd5R8qyogVoNUhN4WpZsxuvV2nNVU6sjTyBH2zjft3xsppU14vf1AYLPL9y",
  "key7": "5c8pSkkvx7U1rUdCDUgU24S7mxr7GMLDcEd3ajHn8nV7HKVsQuRi7wi5FyW6eHRN6znE4Ai36qfM3sfQNxqtv2WV",
  "key8": "2jr2MW18ofmXdwL2Yahkw2cJY6UckfNac31BLccTPzejGohaFswYcFYX9D5iVjEzT6RvZiiwBegST3LZxn4fevGZ",
  "key9": "4oX5geC8HoDs17fqVJvicTk975nyNERBHoYz8KLabwtB5cVfyNMWc7GNCz9r5jyMHPvepEeUakRkXaFZDrqijPSG",
  "key10": "4WikkMosBmEGA3HSW4yNSjuz5ArMhWxwcxQaNRzz34c35yzk9uCJ3nnT1QSZ3M1z7Lvcg2vtBmKXPBe8FDX2eVpq",
  "key11": "3Sg3nc2SPDXxi6nRgagwp5q6e2cBUaimvJv21urnVyU478XAi7zJdngRHTt8k1JLQs6T8d9UWTZ2F71bCnKvLAHy",
  "key12": "27ZouYu5iNKnVpVLcLzWWZFFUwhnSBuC5q5yoxr3wu7UNWXejJgn3uz6CePXBMjsK7UxeGxqi6n3UWTWKFYCFKYH",
  "key13": "3hVp21cpYADPekftKncVdCzrCtr6FXbiX3Ybn7PZStg86RNJ6oK244XjgmPoV7Zvw5NHZVfYGpHxg6dv11PfrMWr",
  "key14": "27BtZdEzyd2nuEi5jAnMVwvxWWaRebFTCNJSMiK3nvvsNGp2Vh2QdX24mWkBDBNPngzn9Mz1CM4C13EyeXRw6i9w",
  "key15": "4Wnd1pUcVc3aGMGwPjmHZsCbKKLKznbpUeXTxFYJh2STCzqP3QsxXXPjEnX6DLkPq5hMRB7GK1igvkKyDViDVNKz",
  "key16": "5TwvbEaVBr5avcKjgzCqSuthBuDSKbVRyfXcPSPkktk4bxxet2MnHH1fDvLLRNEH2e4fTogiSFgCVS1vTqFMem7R",
  "key17": "39vAwusCWUjDcDtzxcJB1T9AjaWUYsSFeBbVpLjQCx3XxzNJZfDtBdvzmEqm9FMu6JSbUn4PkTq6PrbK2iZ4owrS",
  "key18": "5SCNqotr43CuAspCi7Sz2cqBMKGxtu2yystJNtkMFNZvwY6yvQrE5GnMDY8UCD4XPdxqv9E1XYtY2foSaeb8CHoF",
  "key19": "5XNFETspVmjYxAyj5xVdEFWzTUnr6YB2o3GbFyGjWgowdRwFFZX7enynd9PMsmgiZCNAHDYkRJy5hYEyv4wzkiBa",
  "key20": "4xqXMWsZprZ6srqoaSsbDS7F46mKqGWzsirfVKuCoUyvvWfHjwm3RFATtKGEnso3RQjqMpHfDnjyNwAWcZL3NNWJ",
  "key21": "4iyNTf78gFze2v48mEfjWgdtfATnaYqqr27huRbEi9aGiwCqVKToaosLsLNgixG41B1ZHiwubg7ZVF6CZmLZGZEp",
  "key22": "2ANy2CcRJKzLUUtBpdV84gciZ1JRJUbqq5nKnLNzdnj1zz1c86qy4paG9gzCKupY5iRez8VfNZ5vvnMy4cEATXdV",
  "key23": "1wihouiaSHDF8M5KwwBBUPBzVVaeEnvn6psyVNMxKHKnm9nygapig8MUFGrUduckrqtJ87RQQiLfhJUNHyZBHA1",
  "key24": "5RsqWh2XuD9Nb6eczoHvbJy9tUPVEEpJNASXSqq1D1FkT6F9hk8NRqfP5PPFj82C8KQne3i5C5UGiPnGTi6KXjfk",
  "key25": "5SEY8dSt5hrAfvJh71LHniFRSZ393jCRVbMjNyiU3BBE9sSroLqSVirqCeAQFiqjCgbXj371XhsLRw4vGbKNhCdX",
  "key26": "2u2h6J7V6s3q2JXTxKgM9oRog7im5QgFiBJvvnnzAZT1FePZAbSrFw89kZKUPyzZUrp9HVSL2z6LwN5F98zMmRCc",
  "key27": "3XzVc5BSfmxaEuJeUdE76oxpAW4iUj2Fov8nmkcgEpHvEnAnVBaD6YTbPPTc2efj8Qrcsh1ywz4o2ttEWMwRVbzL",
  "key28": "Eb1CFCTUYfpyW2X1nzv6t2hjvXS7AkVgE6cfB5PNHACzpgk5GHLByrwYm2e5kG5PWSiNPTwh11hxN7WK1ohVgUG",
  "key29": "2NqSzhpNr9zPVCioT1nbLrBeaAFV6Ra5kq7ZMdjKL2KZYTcYibgCo8ujyZDRe5nGRqzvj9EduUknGCoLFD8ex6RS",
  "key30": "8R5RWeB6isHY3swLTzGWSwNsLWD7a83JTHWzNnjzzNj5L6JK7N7Sj8rw7QkykKrbomPPPyUpceExznPtFtGBrGB",
  "key31": "4bNWPsY6nA7mUb92htHfD2J8534L4ViXxgTZTfGZQGLsQabV3KGA2ZXD6UYmroTajwW5ofeDx62W4Xz48UtHwb4G",
  "key32": "2ZK81fjL9iSPaw4UjdhoEpsxsjpFuLCEbfr1ngnom6kG9fky3mbTL5vnCpBV5q6jwZxfnq1sjLAFFJTnXvQBqGnm",
  "key33": "34VS3eFWY1gxauJyhpCtqpvYNfSu49fLCYvCrx6WDJtVpTNBmoJYFGQZo1vDHzd1nTd2nLX2ALP3dmrf1vVQNUYc",
  "key34": "4Di1Z2cqroAVj5MxXUK3kNNyoDZuEfRo3pw9qjNqcbPpUhHJfyhf1H83YSE2GfKKV1tfwg2vfQkZ8nM6brniEtcq",
  "key35": "3KYWaPfQHXoTDjn9VUcMqN8NTQc6ar4mm5D7fgb1WsGtWAs2AYKJsBQ6X1RoRjbYu3FRJr9aEsgKKZzkXJRuX2ER",
  "key36": "66ekCnaLeo2VJUZ1jzHnjDcf5DzFAWSwJ4yz6ffLUd3GyEL8wUwatkTEkZDu2ChejyDsxu88u7bFTjT9uCi3JrQj",
  "key37": "5q3GqXTsU5mPURNofW3x4uueuDpkhpNQqfFBB7ofiNwXjNit1P1pWEM49PkuARnz4e3P5Ve5x14u9vmZH7rmGmYC",
  "key38": "21y6BRVD6QhKm6kBuT2zNudoRkSPV7enVoM1uoaH6Py5ZogBdmwi5HKw1yZwJLQ5b17hJ2LzQpcwthEPHV4inoqd",
  "key39": "3Ki626YhMEBTezNfRAxEEcBHxyvaBiYC2wtLxAqEgJ8dFstEdVF8kRYTD7Vu1tq3tg4jgrRe9cv2wh6CuCESC4bP",
  "key40": "nPoA9xo9LZX2yTfQUJs6dJwzPdj8URg4DyYeUSyfS9XB13D3R2sqaoejnC978bFsmi86TcDdL4eRhiUndtmaJUN",
  "key41": "3huXG4i1oj1RyxiKJTA8zZKhubeAsFTbgfgPMXdAFYKpLsxpMLDCXxgc3P4VYShRuPHB5qgCdZUqiUXRSuQFXp2u",
  "key42": "483Ay4sXvWnYknzNX8hGULVfhYGL1WYvaeysTrDdmN21wHgvjrdqA31Nwrgaq93BrJKtXWLmdZn5q8mPeg1r27PM"
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
