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
    "SQGyUDcxXzojRAgbAg7fWPUvyV9PaWLw5wyXwHvbJe6CjLnV9caNxMvbg2bd1n7BpijUwbSTFsq2YePVCchRMki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37iymA2HrTvkM7JksHzz77uRnVXepAqAimfpWv9D2mfsZud5ihrudEVhXc3J8w9bFV1GSZCw9XfVAJPqmLQ24tGg",
  "key1": "tnD7QocBAnoyGz32KJVshUfxUHLcdXGFSzy9ub47djuxEBdxrnfkm76BAJGXZkk8hPmee7qs7WZz7V8oqGw8361",
  "key2": "2YBwmuS9A9xebPNsTHJ8jWyLbAjxi4u4akdNm2BNF2nfif7DK8rTUeLDX8C7qbJg2rQumaQ2Mx4GGKiRPXq3FwtS",
  "key3": "wKpYwj9XzRRf3NcW8Xo6U95FsAe9kH9MgA6EyJcHjpGhbKLa4G954ETHcnHRA1kiX54AZnCqRsfpjZGqwMgcafh",
  "key4": "QAy9uSD94G8tJyxqHpaae8hKY2NwJ4d8Lgq1iYspQtS7S3jnBEZkcE3wrwMGvDEeLajKD1pU2E2ArGf9ayo6J3Q",
  "key5": "3cxxD44ipKkRD49QVxjzXZM7DM9X2Tgd1uzcTKA9N3T17AzWTLRDWJCYawqGnVdofzDpyS63kafyTErXcfNUmewo",
  "key6": "347G6fG3Ec3DbTzNhs2zSFMAhvazHH2QyddBUqMEGbwUm9rjBfpwsy8bf24VwExMmGpdQ5bcE14gb9Vj7LitV8mp",
  "key7": "4WRNCdH8wkMzaNMTgvUWCRRro1DyvBMnVWVna8obgo53ZPGxPi2SReX7Y1NrgYYcBCsVsYencrA1mw6abitkgtgU",
  "key8": "Bc8VpEAfwNTKiWw6a8frW5QzT32yjh2WAsih9hGKLxiYkRtzGRd8r4YKZ3o31r25mPkdW5BL7U8BoyBqLdgZcN7",
  "key9": "2qLihgCTi34zfrs8DgNJyhL2eFUmKbM56HVypMu6NLrqP2ECMdK39NcuPETjkn4B734n5mQ2X1uY8Yock9W5Kv6a",
  "key10": "25WfbtUCek6qT44fsxtizNnMBmqppehidPYia2xPtVX9cRnyusEWSgdCjqHmCcRUMonRfdXSQXAR9PZNEaAKHGdt",
  "key11": "55TTzWiuush2QmfRQubTjQ7TC3pMLUUnTGtJuPovoTuz9Gnehx7vxNKdMQzVWDUHZX9rXCh7yt7NfJbULx7uxxuC",
  "key12": "42e6LRKM9KEjQXjLuQDJEF29fQBBkR3kGQudwqbRu276FPZbqnogW6ujRAkrtin426isxewDC31wsJctGkf261Zm",
  "key13": "3xTLSzWjiQqL7rBGqDC4o223WahGpcbWXD1MEhH2EZQ1AHGRcQ3cwXoWwwGBjr3qs3bJanQQAxGGHmY6Qn5rK6RM",
  "key14": "5qCX5bfDiQo4ZCEaKZFEE2d3SLR8JwmvvxntGD1q4UtZEaCK2Z82u6HV1mEUbWB9aCL26sgRF7aUE5TVGbn6JBFJ",
  "key15": "5g6p166coGfFJwXzUfncKhKz7SZDnVVjPN17reAmtCWuK9NP3sF4xNw8L5C6mxZNEmcZkiSkEvCzcAYwahHnM3RS",
  "key16": "5gi7iLZeEf7izaDFMQuMdxz6xdVDZtTitQxe9hE8U4Y3x8rgEWR65BA4wiSmw2yxYDwYW8fe2fnxz5AaPJJRfS7B",
  "key17": "VkGQBwNQ31TgvGW9dmRkr15sgrum19yjtc3WxRskTvCzTxrcJXYTE5rUUPB8QYA8Fd6TUMLM4Zup6y9eqZu13o6",
  "key18": "4rx3YDRhKGPjCPupsSFiq4S6KtpyPx3j41qv13LDFaLLQEdig188UwB7ywxRxvabYEESJbav15SkRBXWxBkCGxTV",
  "key19": "5P4LRAFui8yua9iFM13ovvTNx3GYa96mCvv334iDoaMBuypvEgnc91DaAupyPW4KzwvqNmGXUsmr27imyfJWDzHL",
  "key20": "4V9Qj8D8KXZNX9Z567M4d9oq66zNAgMZmFSoZ1227hiqvq5YqGqkeXrdicb63spDK2ofMkQqxoobqNg4wpaJFqyQ",
  "key21": "2ZD95UCRbC6rwKedMoEMsjbWHU3bF8ZdLa2DNmrhH32jpfhan1vJsuWC6Rj7rpCmT2PRCLTyAwM6QtvmUvR3QTyQ",
  "key22": "BW1Rd1vKG92L7XKAYaMTTFL2qQRZ5cUaCQkSRyrN6zZMowwLJ1om79HrGroANR8UtFvFkhtzXsZcVbazvM8cc1e",
  "key23": "2jG8dqXhhuAFegaRMxW2jhhgsqes4qEJPghGMUp2hhA2vAUAFVZEy5VoanoDQvBMGFHFeWT1VSz53R7Wek8GBB4X",
  "key24": "2TntbGwGhPaQFhV9CRocthFv3xh821wZmW8YiA5TQTbeDND29fUUkX4Rut5hQawkR7LDiU39u96twT8EdbJjNEzt",
  "key25": "5gLPeHCLYBB7imdY3f6CNZT7dDtmS6FZUmXQmC8WnfyraYVm9MS1d1AMXCVEkiyVftpwDMvUspw2v4G6CAdxnWtv"
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
