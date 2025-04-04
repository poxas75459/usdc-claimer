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
    "2YM9p3mf1hU9JTuddDeygVwMbJiGBo4zxw4h269xUPWNNe7JjggYwBXTGQ4agEW5VSi7Wwnumrh3PJNN4u5PjFyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MPNK823PQZSMnM8N1dqajp9sbXcqh7CacoLhFRoCP2FNwwTvDaSoSiFuTZ2PeCb2V9VqXDAJ9HmM7GTefunKRoQ",
  "key1": "2u87ndw8GfhyeeWPoyERpynTCMoZg47TXoaQj8ZLepJgNLdq53VCRWbd98nja5Ae3A8ai8KC2YyUNYAPYGrEXw8E",
  "key2": "Sj9sUwHAC16SQV589Njen8mG8Bt416udYAXTiGghCmzCowPmEB535bfA9VZPDbM1KCWXV2uNUmY4RFFcC12cXvJ",
  "key3": "3x7wLhf3AQrpJ9riwSVMFn2X8ivjNCp9hkErqzrqPHV3ZQEB4TZaBGQWDe5XcY7iv2CqG1K5b3HCLp1UcxofraZW",
  "key4": "3oXorgScxJDSszbsod61kyFaDTdgQCLMuUeFwSmFKKs39AcMkZZpgvpxJkGDF1E1h1sNsmtcV4GQ1NGPiE9diBBS",
  "key5": "hzjmiRRSrcfXoaKcDzv1GbCbVAeGr2R89WYf51Nob111HbmKFojzRUwknS7WsuoDGdcBoJGzX6dimtVfoMupgM7",
  "key6": "4G4ZbiA5erXq56c63Z9cajjnzSBng6GCvmbsng7y2xRX51W6wCsQBKNuAktWjB4n78Q64cZqahkMNBwq9KfzKnHh",
  "key7": "21c9hEjjQDwvYKfGPvkjqTD8pK3q3q9v8J1pt75jACZVwvdsfZqQuMDHge9fARdbszzuCgmb3sFjxuwZBvpDKJ6V",
  "key8": "4wYA7VVsbhu52tsSQenCYWXRnMZRNQxL4n4wbeCrY7KbxP56wZdyQ3UEaJH28WAszvPNr8rW7RqzQHkEZy65tJKz",
  "key9": "2W1ekgVADk6P4L7J6bssfnAv3fYe4zWDTwPdch6xc1XBY2pnp19fRDws51ykMCwiskCsw7ANMwfa7SQ68b3mhD3D",
  "key10": "3SuRv2tpBuzoY25gnqTyKwuiUww8DXMx3nV8cBXvecB7CG2yo4n9Cj7FetMKuNdNnxWYq68i2WDRT6a6wseS3adn",
  "key11": "2kWvtuzhK27ki3EApk87Xm4hvXmVpthMpJFHvt2ZdThdstUechBrSedcZNERn7aqY8eDBQpcu9sPXtUKFXFLTXcY",
  "key12": "61d69xL8xuw2T5vMhq23EsxS5hec7CUmcReDuGKWQCQdb9KhU5JuUgGtisqYC5TSmTY7cjJJ3WPPLKFhquzk7Ccb",
  "key13": "3sofiDE924uFs2z3LarxUoCrTAMFfmWeNumTXCiKuknabMksSFBfsbZnt9XWoixLz17rxXWUD8pJMAZFH4g2hQ8h",
  "key14": "4ZRZfN7i6XGVQvdzs8wspGzxhgoKxDmVGqEWrVTiZVGyJ1HTPtTZFkYf23XwbwFfhZTbCJG2ehG3JKemJeLqnbnE",
  "key15": "4dk9hHtrSxHWtSfoZfDAQ7M6g258j59sYtcqAmdXCuhoDbvRQVYB7FqvrXcV8Xyo5jUKQCys1Brv6SanbKpUe4p6",
  "key16": "3GREbtWCRSNcXTE4xJJKzSf3R5FCm3SmtKeYCSjREG2qyP5QAG2r8KCjRZiFjTb36QsKQ7JMg4VXBk32BPoVfnto",
  "key17": "4RvY8M9g9bHKVrewaNp5Yp6YaQTAYoyEhwzEgrdwAhDRFho8hUZzGRYyG8mUysumu4udksB3arY9NQTGvu8R8c6g",
  "key18": "tmZn1o4AMYDKLFF8T8YyK52decLGwhLBo7X9RPSQHeRy3eQxM4qAdqwnpety8YA9akcm6kB5PsqUCEAncDWuY9r",
  "key19": "4V2cSuEWZ41uHuDrQHHU9PFQxFhVnBvqVmTCoMmiwPJ546MwaUDL7chSisDJxdkw73p4mT2zGKMm1CKixBPTRdmc",
  "key20": "5xvWTbo5aQmsU2vrFDac2kFD6Exv8MbBGnBJsdaDGgNn1b2BCFivMDhPhqtTqNcaK6tEfhKEagrH7maipYHTLYPX",
  "key21": "5SWbYyZRJqQMYvgmcbevdzTsK5M1eumwWNZq6uwXdscstSaxp3Dku8yu1eVsQFEDHtfeokFucK9rKHWvVCzFLc3n",
  "key22": "4r6vHd6Ziackw3AciiPVSw1i9FKPXEvG8dzFcBREivoopunqwAqiK8CnxTPFtPKzhEdEYH6Aord5KeiBwBPhCfuH",
  "key23": "ptr4i82jXjHrh8ifobqRCJA7nCgoiWYoLjqJuvAF7WPe67dfR21bVT3EJjpuBenK1v4Baac7GFS8ndw2sAyvkPJ",
  "key24": "3HKSwty9GSit6fGpk7D3ZVHaBHgzQ6thXqohmmiQrpQabVhXDTHPKahuUsmcrXqnnD1h4vUnsBBY3XShG3WrUEd9",
  "key25": "2UQGztHbf3mWhdDgfKTti1Kx9eUTUagcTidN7ccy68z2y4wYNuEaGPrkGP4gMaCMbfPkDSjxmisc3LeqzyZV2EGN",
  "key26": "2M6WXPGjDeug3yKEyGQuJR2XX2rJTNryxM4nMtHsKUTNErtMt1989Brgu7VmLxStpQ1nEB882FSZaomXtpmQ8qyd",
  "key27": "4xEhepBwWKPjDQ9UnTWvDHoebJWYwqzELv7XHjUHGmSiPG1DPnVqcoCdKJgA71s32V4qnsHbyBY9vGovXS5FcGUk",
  "key28": "4eChnsM3VpJEQf8xHavLuZ8pzN1X18HbAAn5qc9rkKRCQcvqV7nTt7smtRXUcvQ6MNrfHykTxVq9zcyaKBSmJpZa"
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
