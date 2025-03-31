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
    "2XsnfyLFu9BDdJ4SQTcf5XU2F1JwJrVFJHeK1CkiPZw8RSw4417WcyPqWJKWW8ZccVzovUpqfbRnLkwQJkLbZmoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gL8bU3NzoWqkpF1dLBwVMUsg788PBBGRCv6iByKzFwtRJFNoXMbQqLeDGVdxMKF6qqSdEvjybM32wz3f6nk2K94",
  "key1": "uRvKVS6wScgnsR3c7CoHQrejiB4iTFPkTQduQSeR8fFaAK3tMnFAtpxhgPPFrMHqHSKCDpPfrFYxokrFfMEXczj",
  "key2": "2DRtDeP8jSawDVpmuKhhXWzHhLze7kxpaofDH7JKLkfTRqNstUstshodnQVeRe4H6aWkP26RLSxnxmjJZsBqPsxg",
  "key3": "2PyPzD2JMLAB4DP3HLBnwvyMWcnWLe994cxkHtC1P3jSYsZXqGdZhCmK6A1Yce5cVQi6ZvHwUgWVfYyo8ryWAZHh",
  "key4": "iM683Yi7SpqpTwGPJcExfekMnnL8rCss6SmhZRJRoRmyDNiYdErKHgmKjLtAYpLNFufiRBRgbGcKrfjdAt2o7LQ",
  "key5": "3FTL1bmaDi4k36erTh6ptkNw9ENpnuiX4NYxE3WQkYwoBAbrSd2Va1sb95ardZucQaNMrdAHH5Nbf83rQJqPaf5J",
  "key6": "r9j1Ve8zeRygwHc6CHQcWJrbRQapvkexZoVAUQF4LmDmatuRNzPPjkUXpyeF4zrR8sAVnXyNCNUFfJJusN9eDxZ",
  "key7": "62tQqXZpPpQpNyZxNTReRy677P5PPRACTyJzW23YuVLsb4bnzhUA1dB2VvEd1tv1UPmVzqB9kB4BiMTC8HB5XTBT",
  "key8": "3ZujkFEAiXEpWbThHbjhvbZwM73gJbhh1JiRF7e5wkCRXacwqNEdNuNrtM5mtRwCGEt7qmSb3WiBRNWgnknppEua",
  "key9": "3ndr1LWvRysqqmF1qyrA4fgkwZEzU83YmyxFFSJXnLcPDgabLWMozwuN8FbEDVzQEd2nCUz1YPCvbs379NkchSi5",
  "key10": "41d9s6iD29itMtd5uzu4E5BwsCTpeVxwJ3W6T9MuXoJdDjx2mqdZUpZo1t16fGdCQjjW1X4h65XLJ36mXiqYFRyr",
  "key11": "B4KEeobqYYwQeLeToL1pJexgVWSdTK5MqUcTZqVBsYNaYEDa5vaaGKpBNHtPAsGc5DfcbmwLo9sLdXF2HnuB7L5",
  "key12": "4mw7E3iXcEmqJEL5Vtab8GX5isv1WQqn9U9zAc8YrDzEWArLSKbXgkHkpZ8qkC3r8JFi5eANGvKHv97KYcPBqF7P",
  "key13": "4FBzykJzW9GHmktQgkQvsP78pn8yCWLTgXH2zyHJpHkyqvnHL3FTuAvTmnYWx6dbhNZ1eKWwKL4muqWFZFQMFXF6",
  "key14": "2gKCjbYkGof2mp96bKaGoXwNVFScJZcx9hJFEoLhxSWzvMptxRQog86ZxVvb4SEGHXp26gQFDYXWtJoWDgzBgNfJ",
  "key15": "4EnqQe2JAKEgTzZ3uKtn7dVJJoE7LJuEumuKaMRTGZ5ZhzFUUgDPyhxARZDdL6vVUQj8YCSR11ceLQwTnHzcGBaQ",
  "key16": "3x4CEih3AwvPxJewj8G87Cq3RgfWwpEtGguDdQkicurNGo4PbWjz6sikt2GjjRuEqpoMRRvA585ymE26JmC9RYpX",
  "key17": "2qtFfbrGX7y8rjYLqzant7cR5xoobS3NtXU5QupDqwpoqoh6AXvcbu7JT2xcuSsrF3uj2yWip3DeKMj6apLt7jPF",
  "key18": "2mgFiW7C2M5TN99Xfm6ES6QBGMWbHw7HTWXwcVkNPtyspVU9qpvPcE7j9S96Wp5UqNZxT19bXJfKk6c35uLCekZC",
  "key19": "2at9FvkwEp3r3BVgirxYP7XwVV7xvhw48fqpSaeKd9o5oxBn9J6cwTFSawjeoEAr3NcnDbweVi3rxdHM4Gq7Shmz",
  "key20": "2746MPc7eAVZf1pSghW6Tzad2nio7m7i4WjoQXqGo84NWTUMXWnxHeL8LY2FZgXXHVrLCjNPN7UL9NsRaVrU6yRD",
  "key21": "5bn4QkFRqYd3D1v769aGh9VPjvc5Ba1FuuLUuH4nM2HF6uoAvedgeTahNZf1H9sgnjtfRw9AaHELrPgza279ztMS",
  "key22": "31qCwgsH8sPkQfJ6uLpLrbcd6d5fecshU4bM8wW4W1cBj1gq8b6yfFimkWgdnGShWpUgEEF1eSsyP2MWACVMr2Ty",
  "key23": "2P8A1XJ5V9JG5ryJjpU1nVrHXEhoqhCVypJfBK62dBZozGRZn61UpHckTMdkJERSJ576M193TZCFhZftP1VkZ9ZC",
  "key24": "55TH1d6H8ETnPs83KhozCLP1XK992PzADHGXTtHhce9LAsNuXTpjUYkQN35XbJ96p27jJ6dw8H9sJbgBAk7sa2NS",
  "key25": "3wWYNEiD77n3WgtnvN3L7hxfpUqRVs8bvMYz3sn8iiQzvejdQSDpA3WV8s3iFxTSGcRqxP7HEFnNcEMXSAwNpnac",
  "key26": "66unXbaDh7rYtUv6tJ9Ck2aKo1Nnq24BWAFYge22soUYv2u33kfTitxQT4h4CohnoQjQHdPgMMBuzjd9VjsD2Skv",
  "key27": "HwocWLRRGifMTKGRrH9JqAGQ7ab8ARLUMJYnkSMNCnJJZ9sHiBojrQcuhxKwWERs9X6fC5WuhXRMJZFc5TyApBx"
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
