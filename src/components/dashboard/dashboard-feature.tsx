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
    "3BdFCZwQTj2tBxYWLKqjChpit7ygeZM6nasz6duVVu41sUxvru6T6zp4kNUHcDxTb8pgmuREY86byoB4e9ir46vU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3njsp1yJmjhugh3GfoXwThbWKyfaGMhoKKXq4JJzFfKotmM7he3Pp5FkvjFuXHSXdYXEF2cNjz9gnA7yPx6qKWZb",
  "key1": "5UZnnhLH384oADXbs28gnywDZzVue1ySVwfnFVaeTKYrhv65GLtPWBDVJ7jiqSDC7CkaU6Hv7Han4fycKQk2k6ie",
  "key2": "426DCqM1LTtzQhVzHJUKnhCwLyVFKwg2UuPuMhpqwFkDMXKrSbLLLoQ6tW8EuEnf8JBbwGyrPW1UydM6xRe6vHJ5",
  "key3": "QMQ1z1Z9Lh7dK4HrFreR5Q8p6opnJrFdsMKraxKDCvGrTauPbiTMCFvojvnrUWCV5RL8QV5h9tgPfPwPhEtRfta",
  "key4": "3ho3WBDQFbBJULiyzsrfpA6UBChwvhcg6vaVctGumZbcGRgsMQdWeVyBm3z4wkhaV6PSEsJ5f2iVqC2L9NeLTkTf",
  "key5": "qs97Vhvtfc8quZLrKSiD3qxQF1Rc6SWheuqExFsfztNGZDQKLNHLv7SPpbtobG2UY4ofm3VtczqzRcXPS9VarbN",
  "key6": "3Z36yFD7p4zxs9UoUbSKpPYVCtbNJmEWw6eAcjnJzhM5ZhU8roKMbhvtrQwHDqCHoZ6HUJhed3tr5tEd7fEtxGDd",
  "key7": "3zsWUbNfxpGDktYV5kW9jZ8T5H4QpmgBiy9hxRc2mfHx1AzU9mUqSvYz7x7WeedvauqhVPAtt735PTeEmffPnQCQ",
  "key8": "RUmXByYumG8KeLQfygz41o6XcUJCjY7STk3rCH7V52dLBnQSCzAapmL8wFxQ2EDs6enJGsM4MLVSFQkPhkxtkFy",
  "key9": "tFqVH47BfkzuQ6GMXPYkNB3rvqZfCkz1eZymyqSBsefkRECKoAmUuFRVmCr192RVWbodccLh1hQnYJXVm1gcjAj",
  "key10": "4jq39p6tstMtWEsNtza1tiA23CTNoZWUQgSQK5SoHo5DzuYWa2KLaUiGigNfudqDBfzqky3Zp7rmQA77iD3cLvzA",
  "key11": "S9uESuocUqM1thQQtwUGC6CnMEDprqSWgJt4D7Q5XERmtRZ6KiCsHEy6U1RNo3QaMrTZ2EQ2ZgLaySkkBchRCD2",
  "key12": "3eZB6ZgwoJnefR5zcBmzhVTTrCt1ZP4r7LUYnnTRi6DubYN4MVYBUpWXwy5k4pfRfjJpJDKcSA8sgsLP1HiV6aU3",
  "key13": "3X6bv2xv85JbhunAsysLuxiRcJeQF7qBbCN9AeJrpCtaP5XfWzPU4TULpTCLxnu64Vehx37UYTofjgyAfxVwqkBP",
  "key14": "2ob3uVrmNQiVST2NdzCE5gNcyPtm7dbWA9zKGGpgPZCrc4BqAemoREvTCzpe8zxjeEJoL22gPhYCSpMySVhvdKEU",
  "key15": "2VjCK146ZQ8SnJAXksxcaWpwJWXUQC5HGdjyySo9jvfoxKm5ADmzsu4FWeeCa7mzaBorEfwx9uJWhz6EcKV7MFr2",
  "key16": "2q9Ljo7FayBtsCG3mowYTGr7diej5sr98cCDn1BHA9QpZCctAFYWFTPWH594CyGhfKQt1X6GFSP12gfbShYLga6G",
  "key17": "5VETiUcWYVYgQuSiyE8eYKLsqxmivcNWbYgAXMr249spgbffmU7rDeV9SWbfiMFAiajFtEENAtNZqTxE5yBcKFd7",
  "key18": "3bhcFAYTZ46eLfGDcBHXwtWtkR9GSPUXDgj2rXxm8VdFFYExZgegNps6K7hDctETketk7bY6CjmpJvTvKgBRGB2W",
  "key19": "2piUBtAJExKgPLedC993kkfiqL6oaqD12t3Yo5NtUomUNcAbfgvjBENh8Lo9G5ybL9jghSkiLcbUimwxpPcX8V27",
  "key20": "BRMewNLVwyT1FurJDFJDwYhPvZyuqd2BXtZDMfjRZ2DAbFE6wVvAQTUubmzeWzPFnwDapArdRRWctCNNaWmzewk",
  "key21": "3JLJ1NmmpMNoQhs6Apf8oyUsCsXZYdp29EbZkYKNzR2ErmSX5SyVJNMtPJF1wTpByJoKNbTGTPJfmPRttP7TL2QR",
  "key22": "X7Nw3B6DSAQ2jUwKxqcj51XG462Z1bHnEa8MdmQoZXyQwi3AdZX4pCi93sB9ikTPjU1S2LXf1uYUnQLrEptUQ45",
  "key23": "24n5AK3fHzBvrerXt3f5speEhdPPn3AHuKNoYhd6qLrkrigC64di2p5Wfzh3tSLbx569LsrD3vqdcQ7e5vc93UeK",
  "key24": "2uFivRCzfat1k5oquKviikWKn5Ffi7Fa42eXta7Pm497QxiSzSG6xKfiuE7a7nkfHrzGH9r4qavFbP15NfycuNLc",
  "key25": "4WLFPQtfeB8wmK2D7KYVhvyc9gcuB2jaaLh6xpxskJcKvLzMVcPm4AU6DjpRCUMutMECqWnXZfp3EaLLvQ3MpVf4",
  "key26": "2UN4P7WeKiVVy8fxP85MiubWBt1QsYyeJdAG2LnVY5rAfnAcNEd3BYg26Thy7UsWTVgzrGH4EtgBkp2BCnQnMnND",
  "key27": "2okKTX5Qrh88SnfHjStSNMzmxBnABbCqftKRve1KY2nsvp3wNQGVjqdACxqdhLFNuWDt3sgMcm9LAvAVUC1qvF6M",
  "key28": "4RAirf1xdPHiMT6yb1EmPYJBEx7N64wfujKDCqj3PtBtszh6QPexCjaVtVRTJfA5QjePaSx6wCHgFvzgVDJDSdXM"
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
