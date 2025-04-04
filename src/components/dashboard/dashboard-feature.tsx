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
    "4msEJ52Uh78e1PmtFsKSnkwaa9RjbC4WeDSkHZpMgRgrf4C3zehPoQwXJdwrs1cFdZPKi8aTn8SENeX7A9ybwBJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "551ztE2XL4rxtfBhbekmvn3iyVJT9WSEbgDsoyJTox7KisaiZ6MY8xnaV1881DnXrApW4VEZEJEaS3ssDjYZEz58",
  "key1": "4fRP43kprCnWUGCsePoh3RG8geRX4sMxtDiWxWhcCGnZKKbUXcaJgqy5YYWJx4CRbFgpsE8vUfNAeTfUT6P7UjTm",
  "key2": "4fov6bwrGoLGViGL1GCfVqrES65vtD5WQg1sT5dbaB7yuZqy7eoD1STfy5gJv85p7tiJHmKxhJsYSMcDBQL68hMo",
  "key3": "3hCuk2xiAUxHQ5BfwnxWk1DRLhkjXiG9hdcBWLaMuwwhgAmmEVxwncDZbqf6xh42Uqtz4Wb7R7xXHtVNPSDJpmvR",
  "key4": "cmCuTH1EzFAtYzhU8eXAZbYvTj5yGGmr1AXgtUZtYPogEVTSYYCAJtDqz3LGzJNZM8MmMHw7DjHmTvWkntKn1hV",
  "key5": "5uYEjSqrwxFx3dDjqo6pbRq2QYc1aPQxpqfowm74wFznhaKCQq8wBnavZF9pu85VKCXEmYWmwPrg1t4eLdn5mbAa",
  "key6": "4pQqAHMaSB5XtFCK2gW4dYrufXEVrt1n5gC2uqiAWgP4QCQcfPVWhCT3ChPFpfWGqRQwURAKQn1R5JA3yW7ZNXN9",
  "key7": "3m27b5JTkqyBarTkmUfHckxJbng1aEpkazTKkCYtefjBjcUBhGJpnWHmSTDCAjszBekseHMV9yrirbSt4jo3xpGt",
  "key8": "PzU6LyM8do9K7GufY8YxWU1tjFzSYtJs8Ni4ozBrqxzT2C4EUujWuyNou3JUtqAKxfJyxiWMFztVkvFSZK7LnF8",
  "key9": "HaPkY6unA6yjSABBXtLBq1Hgit75C43XY7qS7NMdWf1qCwVGCpg9J8NwPWjTrHozFaFYScme1yx3ydiZnGmNiJS",
  "key10": "2z5F5ApfSY7b7un8XmhyyhAoRbAenvHT4PeoCa7QsxXiLugR9uaAA6Lw8RQA1788TS2SZtLvqEpmiLHhyR2s4iFr",
  "key11": "3feSgpQz2h9phz4B8pHkQTarCCqqxYnWSWXvuY22Ehw6kwAtPbJ6mfphrMcJuevD9293Rg3QRYmRqrCzorpnSkSm",
  "key12": "45MqJMsyY8ReJ2HmbzyRwwbqNW7VQxuVSHr9o3GHtcXW5PnqPdVTtUxuf21Czg4NSUTLHMZMWbHqwZqVsZWVmFZW",
  "key13": "3SYGxHALQ5Sw5cdssao4CcQAD4oSLz1CE5YEwQuCxUzivF4FtF8Z6zZiM58Du76TkVY1qx3EqRyjgmBBRH2kWwcX",
  "key14": "2yYzsHySk452XrMcRaZHB2KLW22DgehqGCH3niyKimQDCCD6g7e4tVyrFS2w16Q9WEnzsH4dEWwR7hZSXEceSirt",
  "key15": "35zRbLh7J1w3xAHh2rvAepGGQ5p4eUsP2ztz9hWzoej2hkuUxdk9QVwve24YKQ4MCCTWQaedg7rRodPEEACVUxe8",
  "key16": "4wq8JwwFDn4NCghNn9FkPzpme37YBV6Xj2nX1hjUHoEWeqRJMAWQzLUnADSAAwjiDL3cGLkUK3CL5hEvG5ddHhEv",
  "key17": "32Lh6PGui1GnTPCVLnjdT8mCwuMfVwAm7hqWPZa2ZUPZfMgR7xAgvFM92zAjgYbuLHa1ZQtSzi1Ak2V1zPvXbMiA",
  "key18": "3UAx2yy9uzCqjFPuFHmWSGHN5uT6zE1KM4mqYVTgox4iHAdT6u5xMdbYchDrJw8sEmXGAW7o6Q32ss9JJ92EriYE",
  "key19": "5TgPeYHS4UumTmJAeN6S9UVJgF45ciHBoEXr64CgzPS4EMWVwQtHe8C83wYdAo1upeRSHTs5Zzc5N9Uzeds1afEZ",
  "key20": "t8u9pXtNBNms1FwF2mvYFH8gpWtv2fMiA5m9NcVjibXbNGfDuVPfpkVk53D71j8CR7z8tUCvUDAeaGhyCYzwyJ8",
  "key21": "5G3synZmGU6Xo7ZH3CSK6yH4du9LM2DrPT82coo9b6AZCNKhTJhZgZNtTWquWaxySCA8QabP58UCVp4qHabaFdcB",
  "key22": "5FTqdhszh3kJ3DN1J1aRgRkvBAKQVsNXy7HBNUqSSCNVKxb8KZE8fpkgc6Fpq2iaMJwUxQUSWnVmeJFm571ZjgDJ",
  "key23": "3gfive1bitogrNMroQvSzCmozXGQ8QSP71wpQUvnS2qQPQt8hTqyhCmqaY8bFbHA7ob6Q2f6rrusGBsGv8QcDuBb",
  "key24": "3HgwBCkQhSb3bY9orFHEPGqtVsmNNAJPAnY5sJLDJpHtLXjwScEKbNECEXmvGQ2zif2jjfurMRkgPiEnSJXDfAYQ",
  "key25": "2VDvUPpP7n9uPMCkizdAP8mQuf66n736bjbXo3EDknVUcGLdU4LjpCu2Y993HzxYUBhvByk5KssYjcoj8tDiwqhF",
  "key26": "2Qtn4uPtjPifw3q6Q5H4ygDngk95JfsYfk3Cb8GHY9t4Mq6Tzt9A8xNLmZdkg1gaaWxr5vkB2jxbmSNfN2nRXtkA",
  "key27": "2hV9AEoGGRioGSXsUY1cpyLcqwjsvkTq5uAjMCafpJxdoaFUhaMBGJry87RzuBsF6msx4UqLVmq3dyMWiPj112U4",
  "key28": "DtX1rvjq3jq6HuMZwr2v8h2Z7m6XMbV3YH2Bk8ggBnfo3Wwrf1GdG46erv77YSbSdt56h4dCb4UVCizGSs3Ghza",
  "key29": "5efFXG6brKbYet7KKVyG1zUMCXUBNobfdaeLckPcn53Q1rmgEq57AnYaJSV9ceSg29RzuoqHbiS5rKj3GyQ2TNps",
  "key30": "48L7arTPuN2VZJRjQBcWLGbEo2rEcAKJM648mYYLSYJE8fRgzxNjUqDWuewBWZfZqFgGNJCTCgGrAGNSoxJpRwxB",
  "key31": "4WuKcQKRMKqa8AkxZcDYXh3dUuu7UfzNogQH5jBTqrAVc9f1PfaCzQKtmxWjHayHpCa7XExGzKjrYyA4SJTJmQs8"
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
