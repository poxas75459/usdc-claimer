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
    "27r9ZJVyWMFDxM26suA3cjFgmi34MNu4accoS8bTLYL3zovNStGcDybgt1FhFtTrt45488PHrjs4vxYyJgLc1DnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qUNwEJoBEhtp7Wk6r8SrM6Z2sS91FNNKxwkstmNXjUGiv847xHLGeMwJEDFGmZrhm82QSwEPJBoCYV2akRVhirQ",
  "key1": "3aEemJuj5SEnjY3JG3PpJYuTbTCJ23YL4DrLstQhy6SmmiQ3jtTnBC4fFRS9nwHWVot8udDGt1zqpLZ44vTHJwTh",
  "key2": "2KAnEw8nKwYvxGxzgabteXv5YYcAbWiUezRP8JWY4eQkmpyTBujmgbWXXZgPkDRLcWoCtthDHh2JiUXAmtKX9eU6",
  "key3": "fdnWWPBNDAFBRZjhJqN3q3NrXHtpEXpHwCqFnRGH9SbrKhrqX8eX2nGej4ratDD4dV13WZmzhfnH5zPaseQP19w",
  "key4": "5ieAqJVmz8X4M7rqTvhwWX2TqAKhfyEmFcDw52mch1ycdGBzoRxuKqnbSR9DEyobMZKT784WVs2oJo1dku6Cg6aP",
  "key5": "474CSWJcJxUpbqELYXp8EnHFPZTzFdKkSnRXcnW61pqDiNRNavPMoevFWhc68gjD8m8WE4aFgt5S9hgzARgB4Upr",
  "key6": "4MBuq65sYSLqk5NFjEwsREkepp6xoTV9Wd1KQYYopMEEE9acfvkStvtucJDQhEyUngyLYZ3WmCBnWKDvpHUUsH99",
  "key7": "3fyBfbREjcXGABXRhw844kQ6oYj2YXtQAUFoyHoMsL7oVthQRjWpn8ZjtGofCzwVaXw1iUacVav2P2fKRH6ZnFA1",
  "key8": "5qqC5dej5WiwqSGD3QiZR7ZYB9hphNYhv5b83nMghyiS37kxLXMBVidKfqigJcvCEo2DYLUKZMAuC23mzEytXjVS",
  "key9": "664dwybExc8QH7EPk2gXrox3gXQJNsiuVVL4HYop4VzeXRvYhwMyY8o581QDbYczs7HNvJAib58iVqUWzhrB2Cac",
  "key10": "YKnVVQeDFc9NLVMHHxifEbZxVi6BDjb38PNVT4uk18BuBBD1yDsL4bUjJ9TnsKEcrvufiC8FPdHh5hFmkaNUSiR",
  "key11": "M4U3E7f9dHpgJqPRUYGCSQcMNreiDzxV2ia4De1tSkBHQ4tPSxsnS1yFpXWqaG31rfEFxX8hCRVLJT9QbbZWZHf",
  "key12": "5vjotK5wgN7yGDmJ4MYFDjLaPjYt36d36zsnPupaj7P8yqxCs87Vq7Tcro6iRf2ERykEsYV5LtV2uj2qQDVTGCyd",
  "key13": "4DYcwiCoEUicEstSESD9Kpqu7sGxdPPLSsX6VPZ8T5Y5DnezgVcDz1DZbaNXDDDAu6v4SfoSwgJHfDGjNmAwyHem",
  "key14": "5fCoH3HFetJ6x9WF5S3f2yfHhjaBjuocEf9B9aB1GWd2fnseFwUbF8Ak6deTrJ41gK6CDiryHbxXNfx5Hvk2BpGF",
  "key15": "63aeApC8buL3DMmSXQHNHW2LTJSAdTDumdRte7Vaktd8Dxp49o8mCL7k73hr4L6j7KtnzWwBgDLVttfTEaKZnfep",
  "key16": "2xCi4sspFhLgJzafTBfedLoMLwnb4vsoimrabvMTgTztBJXcHzPvvmuqSQoo2LUiYTRMFUfRUC9Wn9bc24jp7ESp",
  "key17": "337Y1gGiuqQZtcL4AW8y755JBtca4ff6Sjis2BttYrE1VDdAKnionrzWS5yVAfdujU6Utpa2H6toUpTfmqKLMaub",
  "key18": "5VUQcfcZGkmyRKGHiYViG1si4SJ2fpsPQKJSA213JYpuRzTWuSQXKuocPUjrrFf1bvxnwDGXXk32Yxbj1BoYnm5U",
  "key19": "2eriKstQB7okwrX2EDDgeYMQizKouapEWzTnK52bnHUKD3PfTWzsfcmSFBLgBHzxGFE6p7TnFeKVPpabM5uKYqzE",
  "key20": "5A3cKzqAK6TEGBCidpYmcNFuBRNi5x5ViYiy1KkzRQ9GHg4bmtT6Bib9V8fnkXhTGgrTk9GtVENmkhZqKKJm1Mkd",
  "key21": "2FLuhhQ8n91Br8enedDuo3E5Mu2AZuiWkFNBegbG5qb7xzarzJ3u1ukqMCtJ9ihp1exc8JksjRGG6SsHbbTqfvNW",
  "key22": "4m4YCszYNq62SZSEwCTkiQ2LRzxRrTKCQDckRQaJkLSJQFJMupctstKL6tHsuZRWEsEYz9txG3kNbW1jpZbFn5c8",
  "key23": "Y2WALFSuSmH7PPdkc5Fkq5NzdpwmDJyis9zS48DcoJ82aSYK2mHW2RL2YM4KH7Z5J6VLcB2QEq8jG2ix1wX6sVt",
  "key24": "3w5m82Xo4wj4UhdAZaW61tki2NrYsCKhQDctNdqfpykdvJbuBQxjc7VYPiuPS22VUwMN38iFykciSJ4ZZc3Vnm1N",
  "key25": "3v6k5sr3LPum6S9XFJGSTg6r5XoqhR4B2XJ463h1T6rFGjzknSvgGwG45deyw1QLmqe6kDPXsjgKSzpHKE96h4vD"
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
