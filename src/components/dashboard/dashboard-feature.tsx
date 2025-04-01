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
    "5L1adeQZngfaYUfUsPnQsqwjkvjFKD5WCCAk2QBzmcQfDB2QAofFmRVQu6ZURfSMnRnHNG5vMRKABkYqkFkhevBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gsVJ1mut5wDeuJ9RsTWLeganNmK3JqMx2N15CdtKY9BcG6wu4f46tsaDXbHHpDVWCkX77nA72VmozsL1ZPN3m3q",
  "key1": "21wKqHj8QHqofr3SgWLy1PSosRNmpsPZveADPX6Vzc5uD4B5chk6KXbLznjncpzCzbWJRGs8NHwWeDZr22QgSB5S",
  "key2": "27xRCZhZvktHCasjoXbcgdYfejFrh7tcr15YMeHuCAcFybwLBWNpptcx4QGgK5hpPuV8ZHTQ5SDJQeRwk1Sm1dHG",
  "key3": "34AGsNhfk8GDh1mJgFDg1A1fRwJyaGreLEDrkRjKSRBebGZ7bHreZPNW9Uraq2ehmvxVALJdGwCCLcvaHAWdJp27",
  "key4": "2qrfSirChbxTxWNmps1Knn1AfkeLNRMQ9QaT1qqVb2EsXGq5BRWCpVhoEu5q39CAduTSNBV8j5TzeotkHjxKoC1X",
  "key5": "2NeLEfBYBQ5qtcCvEe8Y1ZQEgpe2AuwCDFg8u3VWVxzoQoQzaK249d4f4chwNeQ7rFDNcZx3nVc8hQ7jmvA9SAzq",
  "key6": "2DCx76UrjqotzQrpuwa5pgvLFCp3p883HupE6kTsCSouarzJvj7iVKadD6kJ9V2FAQEpih11N4pF9EuNxZrogCzK",
  "key7": "4gDgTC699Hgj8S7qKWcxEVMw27EQQFBaArz54sPVftXRCNB5HciDEX5gW7b9e93eFo7kYXnaLZAG72rssRzMoeA5",
  "key8": "4WotP6Z5CscY5FDfXZFF61UuyL1QqoqcA1ADGp8spFsv8NWRS78WS3gghFjXbPiMTHiZ6KRRJrHUMWW3H5JAQAmX",
  "key9": "Cf9Ay98cmB6VU8eQrg8LKZqHvF83qF52Dq8cfr6TRpge7pkmVFrjDtvaRPPpAZ6KZFoEUfY9aZSndUBtjwGfaZ1",
  "key10": "25Qk8BrnUVfZpHRr4tK71KC2nt8cvd84R39XYNL1GZKZfLAttiYbJKRbK4H7pKJimXCyG5MFngM18bkQMCNn71eb",
  "key11": "23psGGKfvxhzxHSaeCw38CByoBGQSBaUWdUramFFAaJMEivdiRX1cQ3B1Sa85sin3CJNdx3ppLwoMgnhvf2xbC4A",
  "key12": "n1eGuu9uarTTUyzuE3qiwSF53KmeSbg9zUhbGgtvYQGDgo8ESH2UEGREMjFMk3mk85BTg6enWykRV1a7V39CrhG",
  "key13": "2LSAopcf6ZcS7jZnSFS2yPwmuJFXCRqW98K3TghNTU1XyR8PqDjnboSfWG4JxYZ8ifA964meUdjBTRhZcQEExVKa",
  "key14": "6383unYmvuAX872jY9EynnWzZjLnfVHZHLRp4tonDbM9aEJuitUFyt6xukTHs2WmP88zgwCHiJDuhasnw5BTfV6Z",
  "key15": "3X8NB1YqXYiWp63Xqod95MQYn9A5RoseMcmj7aV4AakcmSX2EZr3HhbXoZ4awuX2zFNgbx4cfLVKUGWo5PRAiwoK",
  "key16": "5ByLwZh5yZCxVQf7AM7dF6dJ2eThuXEEyfUTJzvoyZUu4TePoM54iBWsxTdvPpVhX3kVb9G4mGvLKmyvSK4mFjhG",
  "key17": "U1emcEgm7i5KEbeGGbkqhUKiKPpC7qMxY8Ep6ByLS8C2ABjTysNZnTqdWFBadNqHqQUbs1uiQF1bYkhWd7ueJ5P",
  "key18": "3SPggXhGEkwBqmDFxqCu8uTErFbh7inQZeBs1akQL4hv7S4BfV682MTHqExLbZuW1cgMwL14jVyjMArSZZnnVxWT",
  "key19": "4YW7onCBJjWBKUcwg5ishsgJRZYwJbVdKMxUqnjNvHmmqhTnbcMkgzRLxRdcTHpSQQVXh1hgF168odRjHi16fiWf",
  "key20": "5ZHwng2PqLgV9fnjx2jFBEwMsCNCMDfWP8ga3LtLVBq2L4uUgNzJNUzp1Yvtv6F2zZgCrcJsMJXCJQ85KSpAbbXd",
  "key21": "3ZG4iaQ63r7LQRnHs6HMzFpg86QVZPXj4d3T8qLRSHqnJcC25zRNkJ2y234YSi3iqNwAgdk26vSNhps8uZCdi3b2",
  "key22": "oWBovHPqtJbn13rTQTX98mAQ9cFKUQQMDgu5Q1EkLNpBkRhwshLX4KMAPMfwYj8zLQQX2K9bsPmTAwaVznyxGLu",
  "key23": "4g5SP5zkb9rDcacXTJCQVwQupUVqGxBKtHChu9QnXHfSw24PYfBPXszzP7xkPkSLpZKrLQmetpULiGgK2LUQL4zn",
  "key24": "5uDWQDKPLb6xbo86uafuTmLXf18HptqEGcfESjWWTsDrP7sCZ2jT5h3mJDtkfp5Z2cnx4LWavj8EPk6AfKKX6aV5",
  "key25": "3naSVCSiEjW9FK6j4hyE9Lj3pnnmE3S1sqUqj9XLQtWNHwVmFt2oGZs53MaPae5dq6VkF9VAp7ohXse9q1mvLuXJ",
  "key26": "2Dp7PU7T2b2K3mXXt1iTnQk3dq1mVAD222eHnTJn3G2KnBVm8kVVRjoNrFAxrs7GFgh7xSEPA94LHBbPE1cjtduZ",
  "key27": "4ScArrWgYnyyftTn8mFh6Xm4x7RXCMRGeyaNYHwWybDguwVb24G97CL53xGjHoKMxCxFrmjWmJb1K9tFrdu7Kypq",
  "key28": "5ctXqGrvSewHtMf49qJeABfCsG5zkQZyF4of5USoHkRdrSr5QXozLLDfMDrqyKQt2ULVcUUYmWcE51Yhw66yUUND",
  "key29": "5iU4iwL5GxCh3Yk47GKSQ542UwYZEPoMguiRhT2HCYiRQhj8vQZ1AR2QTESNtU7rKvrug3mBQDT5jGwCiMvw9H3T",
  "key30": "61A7SLRbXbD6VBffkEyzVQULsfqjXig8UaMJedfZriMnmUHjXZGkYCP1yCwRJkpe9AoQ7rUMGRymquxXyKYwqu7Y",
  "key31": "2x6RxJMCu8UPeq4gepep9W4DGgmzPBJ2STNc4QyiFR5DmBz1MbydajDWLADM7TWwftkEXCYFpH73ZfFXe8SFL6ez",
  "key32": "4ZsvfX6B9w7pFC9ic1vSfLwN2zgUcpH6rXMF1KeDu1LYBiwcJRYcvReRGH4nLswhW78SoAZ3ANj77dEMqRfaffp9"
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
