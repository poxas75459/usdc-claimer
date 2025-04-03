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
    "3CzRB8fyUTQ11YYXoRyDee6KnhcJ75i6oFPEnXyWYntRxRtuezTKiTz35UK7N26QcEo3ndGtf8t3yZvatyuzTv7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53HQfXzP43hi1zEg5pXuxuWnE9QAr7wen8akhV5YYQyyAy6heERaj7efnYGuf3bTWY56S4h3NS6JCfSaka1QogTK",
  "key1": "596LrDkDgPLSX2atRMkkNeufbfByHzKTQVpNwZU3uhvksAFzpW15th7z6taHUA1rZSyg9tpzrf1DWqwcqXPX9SmT",
  "key2": "pZB97z3Fh4v2HbyWjUcnj4X8aqvr6HLMTvmUe9Cfc2BcTLpdsPcVVszBJyW65grjWUDdQRcvpQwFBcJSeQ2HxTK",
  "key3": "XhRn4ATvH1KLYBh3kbrYthD2nFXuwQ4xVMcwG9reCin2YDYDRoRQxzzaLvaAKSZj1YFsVsbtcWJFg2MHqULW2dF",
  "key4": "7CxZHQHi9X13jtCusrwjt3f1mvn513XEHkC6KCAaRrP1X2aFD7L3ndcvF9dh5UgrfLL9GBkU3zc2fogMBLpE7xs",
  "key5": "3pUCVcM1beWFzgrD7VQzrPdWWbVPzvxRsiQEgMDdwZ5kMj9AjpYVJceQ4JBTshXfSgTq7qnUBmGSMYT7o1K1JFum",
  "key6": "4Z8f69qRgdwLkebp77qXtbowcog9JNjoLAjrNR9gXxH4UPJhXFfVen2cnBtvVGtLieVwpr9ycJzvMm3GGQkQqX6a",
  "key7": "2wxRdBwCg4ETVc18p4H8oaFKdFSAwiEwizXZQxxfGDVtpHztP8hBhFMZfhB9Ue42PXxUHxQfv1rQUHGXqSwGWRL9",
  "key8": "57MA5sXgqa1ami28BBxJKubidPX51bzUJ5B8BkiZpLNzQ4soZefkHdQczERZRVtsZmQqBJgauJxx1sfyB7e8igpu",
  "key9": "3y9CBZXTyUjQDG1swF5jQiu25vnPEmbuvshtiLSWYbWJ2iyLak5z5sUDwu96jMvEuCxRJd4r55GiEGkikTR5VbwP",
  "key10": "5GHMi17tje5VRZNUcgUsTXs3HzTbLxXKRWrAshyYkS3iMsZnfLtoL7Q1sWUsWkfBiFq8pdqY8sX6Bg1r16PEUrhA",
  "key11": "523uUr1A5V6cS4M4o4i7GnE1zLnwTJT9tYMifMGXyYepouNif7gjpzLoBnL2bH7Rp3ubDmdSwph3LryK1Uo3sh9t",
  "key12": "5yPmMem7zfgLhxkuDQavkVu5wYxEyRXveYvw8hoYpAAy7ef5uYA1NbV7zVutHp5vKBcCQT4BABnSkYUw9NumcGdG",
  "key13": "2rwomkNz95H1YQgSoZAmFyVjqV47pid8uQqqguR6hQTBD7rMLPANs9bLXFGymWZahaucap83u7z7KfpWCyGosAbh",
  "key14": "4kq2MdHTQGecjDadPXUwcqxqasDzAYQo7FuC4eoMzPMJwX2taf6bNxvm6ZwAi4PBNxj1QCYdN2CmhBgujHbfHbWP",
  "key15": "2wgfpdhSzJ871zCLZfvvVtpGEu8SGhsVeDXPcM1ZoASXwbEUxXR9QoUHwyzoEUgcv1Y4ooFMSmVirvXs6pEmzHKK",
  "key16": "V37FbVWDpKADW4ytuC7rLKaNg9e3pKmCKEFzVvibS4rpFENq6bLAB11s7ja8KFNd1t5fny8DoyaE78cWZ3WJpKx",
  "key17": "3gTiTeSuSju9VRUAivW1ETLNdr4gRuWZN7FVpYMzADkd7gF5fUaqQVKGyBHYr6WKdEg6zEKsDQoP4vARBv6Riqt5",
  "key18": "5rAwvDQtssfdsLzo6SerkGkh98b5cdVq3rkzUWAaWJPhpEzS7UTMrd6zvvhnKr3gGH8xYPLocRm9gQfsspYKUTL2",
  "key19": "624ouocAogw2pf2c6Ls8wJBMejkWHgWEGP4YvW8nc2gWqp94yjj9B2qXLC63CVcHpqp29u1dpwYPusjdttnAhKvK",
  "key20": "5qDNWQmw1Nv2sjCHabvu6oKKRTV4m6vJA1Ndy3Yteo2B1C9XiHjArxiDptzmyGcjD7PD9chFsB3bvSXCAiPqTJNp",
  "key21": "5KWBJ6ReSgC6HdwJcYt81ro3wVJJtsPTJ1WJK993hYMFLc4xVSdvtjcetUFb89pmxNARegE4fyHcnX34qxKTkh5i",
  "key22": "3MZoiEaRRHQtFpnqEP55BM9SWFHa5sLVAeS4GCAA4CvVkEaCcQiVeoYETnaMUrLwt1pbB3bv8yfARyuzCNY8QHMK",
  "key23": "62hNUBvEMMBvsN3bAgVhCTEDhmEAMMtJFh6fqJbEY6vJeLatMXmdTcXKgfSjLavFUgXnEhvEdHMSybrhfGdZM2nh",
  "key24": "2gYmueWymZytzDTQYkZXQPo6DAnFvkgJTb6RHdx1YF2hFegMefNpqbfzwvcLdjp257FjAB1gsbqknqBvMtQpN4AG"
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
