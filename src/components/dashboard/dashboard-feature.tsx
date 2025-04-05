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
    "21pXYPBmVpiTqjDXhS94pjjC5Wv4RPPDsbLDriqC5ZvFpgWaV9tbpUNcZgCDmTtpKEyYCwX7axtdyL3QVi9sXXQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GuToEHyDV3sBWAr5qkKCH3By7cum7ymNWGzkFEx5usTvctz2t7P3hoRtbuiMoABPw7HvETGJVWvzCkfz1QwcoJb",
  "key1": "39hidz834yZEkp8fNz5JjBbLfvpRvNQX6WWnFBFp87xeGQoXpLRVSN6j56bSLB3VcLH6EAdM9GqwrpjTuuzS45Gu",
  "key2": "3wjJXrCFwTqYBjrVGRJtpC8qXPve7PbKz2izCx94uumDQWbdaKigLYF11mHAQz1iuBahs9JnFv3A6PU8EnurFgvm",
  "key3": "3ma856S19UqrLUcvuWALuAAKAVXcf9vkjRJ9Tue1jP1maxGwHMASdXL8YJ9aHjtecd7gE79aLGv3Kuamx4zcijNS",
  "key4": "4ATPwG39N2zw5gYe713B1TGn3nLiqy8yRNb2QcSSLo4vXxqjnEsmdzPuShq842QnHiQSnf7We7aJjB1ttq5X3GHQ",
  "key5": "fgAT4mfCnkAjKzsjvnZfadi7jc72kMEhYRyFV1GUTktdQygjT1HkN4HH5hvE5kZ68RU2mMZyo7133DGHA9YQrfT",
  "key6": "4T4yjJpc5Y64XRo1NLuEtsg3iCzS34EoDqUcjUG3ChnK9YCRp3GVsrJuKM1FC8LsJ1GhKQn3rum3cwRCj3oKB1py",
  "key7": "5jusS8sLJYCRZHDJZozSK5dgkTSuSxfac79Aeg3WLwjCmRe4RzRh9bfZBPeeoTaHA5VdNQKbHBszjG81S1QnpsiU",
  "key8": "jLWo5wEbm3gA9TfCAHjGoFd2473Fbbaw9yyjtMeGGK4ztMZ2mqUxE9TcbWoc1Upo6zsAHvKmFCBZuHGbB357CXt",
  "key9": "4AQptsNp7hhXReMSGh1SS3Bgrz9Ys1A4wzhhtGFCZJ1EPbqQku9ta3BPZDPa211t39Yuft4bEb24R7onz4vg4eHw",
  "key10": "66hugnW6PQ4nNtKH4FKoUeWpEANRwC4mTugHEJLdy8cFUiTERwXq5pFwWyNfiXKNtwVuCgE7tAA5ukXz3MkUB3Bm",
  "key11": "5p3cJ8yFfMXEAihNHKTtPmH4y1BZz5YhBcP9rdvazc71x2TDDCYdZun76sVMu6BRfm6CVJ86ha8H58BZtBCDmmav",
  "key12": "2JVNLYE7Hfz4SLVNCtzRameQqp2mqiZWnaLCDVpBXvHPbcrsHuBXCtvqJYyQUrH1xZ9Tc68DFiEyTi2ByVvFyuM",
  "key13": "5kRDLCJ9isKoPyjGh2EH8W6hQd2guPL38kA7WfAcqfB4gw4YhqcxeSnbXXvKFM9wNWoSLPu58W3ihYgDyo4L12VA",
  "key14": "4ggSHBCcQw52XXRZurhec41hEsfmnfszaWWYvjLkNwXuejGq1i8FSX1HDEB47PKZDQRc9iYLToX3N4kMcKUzZxVF",
  "key15": "5EJwqhX4BuE6Z3HWigvBPXixhqL9EjfMVJVqCso9sKGcSjY56CbiAnTWxxFNKrLxjJXp9aZBd2Y8N7M8iLnyqKhg",
  "key16": "5m4dKhNSZG3DQ2HLQqdcLv8BHF4PWPAXAP59c1HE9GZ3g4nQMbiwDVwcEReeNSuLah286frmULBkq7LznJNLw2TA",
  "key17": "3tAc1Cmjf2hCiDsyqXnWLGeU1EywoP8aigzzu7LXaYCJTSQj7FxQFokgFPG2BnZ4BcgG7gU6k9B1v8QgaBZBxGzG",
  "key18": "63UKajhnJYdJWC3YQvupiDTy44CZ8cYcHmTNVDhyXCLUR2PmjnyNJazWmmrwZaVxdFSjafeQBmrB2h41u5LDL1t6",
  "key19": "i6mSvhztg6dirmVQ2wZd3jhzaw5H4rTXbVQyZd9WgagNLkp488TAYcZujm4rS9kkTc1Z7cs5CJKVoxywre7aM6p",
  "key20": "595EuquAgiuJKiFxWxyydb5hYPW4Aupt3oN3vZMVk53JHdKbtrWV5hVS5M9tvoa6cxLJYCjMTs1VDXNw4ZFcZQbh",
  "key21": "2c81JGJ4hQeSErcZ891TazdVfuAvJYRTRSbzBg2PbgAehJJPaMsat4duHBkqZnTeWP5XEvFPWnz35X2Q1psRDN3",
  "key22": "2tfAJiSY6sAf2RgAAy5jANNSkYP7fjMPtELWyGPJhoQ2TNbbzgVJ9x3ZLpVTztCek3J5f8YfXzfTCHXxgR1xiL6P",
  "key23": "QgRzTHwV9nMraTRiTiKYP7MhQsegUBkS1RJS6sTWhWkH9GSNosLjftDkf4gfora6X3mjYZE9GgBW3benu4DutzX",
  "key24": "2xkR55JZLG1nqM1mCruCkvQSWQBpVhsrNPbFXNrMXNCBPZxs61KaNbCK7RKsBggpxCB5i2Wnc39WgPNdFAYj12yL",
  "key25": "2twmQ4XrfCauAuS1m7Nvonw1dw7dbHvdAvkbfUU12sUAJpawYhhysRP2nLwpyKtPWyazEcqLVkKseUzcp58SZSjo",
  "key26": "3PdBTUBfX6i3oVgNwr9Z7XBrDNGHa5CYffsLTkTJ83UNVBti81qrR4bJxxsbT9PvUxV4iwmThLWWfdPMwyqFJkoy",
  "key27": "4YmeMiPo2ZBBYaRp75i3EqgWeGdoYw5pFxX9Gz363pArSQasEYnHPigEPhjyjGRWHVp5UDpmLn57CsuZrdPAgQiH",
  "key28": "2uKghywkUf2jmD6LBCNm1nv7eqrctd4oCoNcXf845tg4kC9y7uYQJefMysjPorLCskU3zdujg25VTFUKWKyJfeFs"
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
