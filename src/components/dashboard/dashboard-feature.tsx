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
    "3iJYBtT1WaG1axGgPNUGfQHbkjccDmMTWiKQPzrPAVsa5PfFVuu8SCB3PqSGwLiT45fYMg3eso2L2birm4vwkFAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3StJNmHaak66rsgCxbxbbgsnTWAkZnYDt4raVSLD5d7NcUohRhUXuYwu6dJMe81WzWxA55QmnAyVUTekuW3wL6BD",
  "key1": "4XdE1LPCWMA93TJBmk1yFEgrejAukVqggtvu9Ryvt83xLxL5bjmnJkqDb3AdH7AUXBeYVF5hWaE7H45drVjf7fmk",
  "key2": "ET1QFUCBuPZBdNwR1c6hJkvRufDNd3PLw1V4VPNTHjM6sVa2vodBhc7XSazcTfAW7AKvjxLK5zV4KVqeBErrjZy",
  "key3": "W2LvYnnWXb6A728M3ipjuyiTxiGaRAuXJ5aTGP4pcvJwk3y7XqyPtHqJMDFYFjgvMc1Kx2TXrG7ymPEa7JBzL6w",
  "key4": "55U7yqgDp7ZJWGFDFj4ZDhqkdX6bvZXg5jJmbckvD9bj4ZQnzH34RDwpRATYqnJHW9sX6hBycyFJKiYgiTUjfyui",
  "key5": "5eQjSgJ7yrCcjvT1L5jkWAKWwDJJiNuyd3e5zh5mVQeMYwDE8LhP5tcYGZ5v63SfCUPV2E8uLEXd9xzJNwNLEz8U",
  "key6": "5HrEutS2oeMmRbooGtfrfmHUxxyDmjcWv3Etxdc36K3RygAGGwWurmSg8CLvLVTeduXxvZ7ajm3YuCV228xgicTB",
  "key7": "nAXwk5RRKeao7sBbLtpAg3bxgdwYa3FP5hBFQkeMsHyddKMbd694tDE9vbpiLnpqd4i73uZqmTFn5c7rJR566EC",
  "key8": "2D5rnLicRrRgiRgrDT96X7dGherkuqJPfRUCyy4ZUkLsDqvodaajLHTdsMmMtJXeiNp9iUNPBu7k7patSKhFGzKh",
  "key9": "4VSo9zLAZZxuLPE3QM8SvmT39DM9VagJWuzwdXNitYx2BTpAv7AMJG3aDXkzeHy5z5Qjk6GHD5YGXNMBjMFxukZP",
  "key10": "4qhujDL6oNvmGGTkAyecsbBQeWtcb8v8unrtoDSqFsWQJBhpPurGFs6Wfn66qBeEFg2mGRpWeZx2CZ5nXJncDXNR",
  "key11": "4buusP7jJ5hzJLDueC37gEceKE1cd2ArQmZ7NypbX9MVacpjN7zjHGt2cRJ46JRtRj1H17THjKq9taKjmiw5Fzs9",
  "key12": "5Xv3jTfApBk6HgVTMyzUrnTtnyDubfrxW2TRhA5GL76DtCcQKUCAwebq7qithvgJZSLcyYG4czYdiviG8UoxHsp3",
  "key13": "4uP6S9N77joQzjck7JDT4eZ12zrXYfeD4fzKhspXPUd4cRZRVd118kWGocPAfArAUQgc7xLUjp11f1VxTg9cGcud",
  "key14": "5CZCzBrwTXPNzDWeSNEoaTyMpqaUDWJR2Ntyb1c8sbUXGNJsJ4nM6Xw9SVYUKkYqRRm9T9oTF1Aq5HYSq7wW7seT",
  "key15": "4wxAts64RBcrFQFUe4PgUtN9AwoZ7RyuYqk18CeT9DSfzoG7N3bh2uuWB34QFNmQduPLP2EtALCmXsAtqPsSMdCJ",
  "key16": "5ohqHFtVyet24W6etWqBdk7gnq5ZLNeLbbZzjKnBBvkYnUPdxjj68zKKmbJGsBqQeZKjTWkSNYCL9jK8h3Qy48E6",
  "key17": "3nKxpPX6nfGsfwVmTGoE5beJvUPDUcKDn3HN8tLcXARFtMDVbuvcnqv7emEcyutB4Gd5hcydZ8nvEFZub9CaeBiD",
  "key18": "qa3MeTBCcRBbX6sM3CRwnY6fTd6iNSk8Ekuw83rMbhFitbzghyKpF4A5rWPxVDYPYtgJiuuPZf6X9koDX4FfUkj",
  "key19": "2qNV6CL6LTmFp32iwypK7ge3JrVV8vHshFDTDfG77neua7qJ6iLbLDLsYpjdeCb9pFQfD2qKAuWLga4GFNfCGXwu",
  "key20": "4tQLjHUCs4rdKkjSAdXMvLyepu7oMbc8ak6Rvrw9Cuaif8wdXER6SBZcJjksLDCyzcPghCEFLRj32JraCpqhkfJf",
  "key21": "5KCxg1Ja1DmNetkDJyQx8uPD6y9iErBWCSTrpCEMYjUsKvHm51MGfDWm2HCXuj9zBRdatVaD3dJWVWXCLLPktQkc",
  "key22": "61NNqK7BpM4AJUtkwdFD2YyT8zgtPNmxjaQvFo8hRJ12rRzBCHj2BuqLLFvcLHf9zaik1SUJyxaSJ3Hu7yVRR5u3",
  "key23": "2p2AjEWt8UnQKyjZGV6Uz2jBPnWZRwRZjxzJfB4yWA33CT3RFd2KmTcWUjTZUvKXGGRxCcdrcj9VFdmrWA7ZgJdJ",
  "key24": "4AWR1dPpqdk5qKnXx24k1ogwoDYT5mv9m7cCLcAeQNzb6U5okgMnGK25fFGPMoHLsgArdcN3WzBjHw2ptKfdQtrW",
  "key25": "5JSXKG5ruvi8dE5fdCsgHGUBPserqGcrc7AD8SJPhxZ48pJ7FAT9NzBQDGw8YvYao5EcFefRQjqvya5nPisNF5Qf",
  "key26": "5P5fKfpVANQ4m4wUY7tDL3AJcwgNaqYF2AYMgYqXC5UEpW3RdDsP11oz9Uv7unaRCAuL13tyvuxUsveKJMBAKBW3",
  "key27": "yZZRcqgML1yRyAnKRjS88n6xCsXTharwQLMCxKfJk57ZR7D57pgepZyAxw8iYg33vv8AoNHMGbSUUTiRGRY6TLL",
  "key28": "3bYpFc1Z53kWkXhdgvm3SSQmdEBhnruD2EJPJ8qVgCxsq3sDxTWsHc4xNNLitsiV2sWww1L35vjQFFFPsS3pC3gw",
  "key29": "gP7kxRTXXUGDeh1RL28TPCy5o7dkoaWaBfSBDQHQiyDmLZ7xKtEnztToX5yN1JtxWkwat8TB8HSr5sX39x1fGxu"
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
