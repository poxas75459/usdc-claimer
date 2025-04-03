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
    "5EjBUuJsndeJDsjTsYfr69pXCwca7aD3rRpmBFYoZDiF3GzBVFZ2dEvnhZpkgLtKTYkmyerW2ukTDbafaJiZrD16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nusSVvrTsb2gmqpjJEmfZqSHiKAPkaP8L94aWFsV36a4tdz9EjzrG4PphS2h2WQWBP27t7R1YcwcUS3r3qYVV7n",
  "key1": "3ua8s5KYzG5kAcDoTFv8CcFnYDcTAAcTQAHij7ESQnyP3fqD9wsgksWiW7ZyHZa4ofN7hcGsEqa6hsN6w7rKciJ6",
  "key2": "5S9VjADgRRvsP4Hikb9HMm3zLMNtUzt7QyXWtRYpCS3ovtDzbDqeJvT9Rkku2g2nSNi2dtppLmS7S3UV6AzPvw8p",
  "key3": "2T1Jgz6L3A5wsWhW41sdHK6mZoPZzAX1aVpxaainckRcQaKfeb9M6PfoLZS3hRuReEawukvxirTKbPL4TeEb8LzS",
  "key4": "3fnMraxgCPDz7imE5Fh8t1GrruxGtzGdZcJULqnPrYLwGwWwQ2T1unXzofQUNCq6Mjoo29F3anLWcRzcPTtdxSt9",
  "key5": "4pdXutAzcLLsgMNBcJ3GgH31cEctMnnF3ujbmxGpzgf11kwdaVFKjNKEes5p3KfGV1xzEN4XFgm6YErCiYi2mPtQ",
  "key6": "2ABBYwNALMgMcxbeDL1EurVfb2zNis2snEdqrR8HgtQmpsnQ2RGnXsXi8Q9mSxQjhfurBv15r26iabAebkcRHv7n",
  "key7": "3ZNTmBBYKhoeFTzkE8SJ7JkA68tx1Poqidwo96gubx3ApPrYchJAMj4PFBm9VH9s3pUeNSJBLgsXEkh5gfbs9qM",
  "key8": "49zrNy9Sy6id1WYDvetA12mcqfxECR6ffvvgGcG6Jj8aa5G794RPPSP6vreLQZ1w1E4kzb7FrBo93mNKeneMgBmC",
  "key9": "2tn6DFjt2hU2xXDbd4cWukLehuFio75cz5HeaxL2BtnmVD17MjqsgvaBmZbkeW6cXbhSYsHzfN6t9k8RfxFrFWRH",
  "key10": "3bjtftxGVZHMYXijg9nr8d4UvHTBwuqWfRhnBnqMrnN5yRGLMyc5B9ucdke1Am2YNtuWzHUNmzRiSVaoGHYLFEAy",
  "key11": "3DBdNDzygipJDnnV1PsYUPF2vsrXB4Kaaj9769nEbvndAoxu2ZtfWmEcxczVVGmPX3WNS92daKLf5zeNUKydq23E",
  "key12": "NfwHi9vp43sMQ6rd6yJ8EDM27D4EJBTeeUgRufPMyL2LKdYyfyS4UU6bjuqhHEBN1VnADvqktXW4zjaKJrLYrd1",
  "key13": "5Tfexrc3esmMs1WCwZVamumuVHWPz6qNSGNexhFQSSVYj58aj9ffzaQccAG3kobieRx9VKnT79Ae6vRws912uieP",
  "key14": "5WLUYNYeZsg6QCCSz4EWopbpKSHZxZpq2L1gNwFNbFefa5N48My9PhcZZr7dR249d2mGAm5dRFK2XLVb6ZtmigGy",
  "key15": "64pC3NzqVn9b5GnpovZFgU24ntFFw1sPySt997qRw8DNHwYK1k4QvsmGw5F323GWSit8iEGvYD5Gx5m3gpmfroN4",
  "key16": "2mBjH4A7EDVNZKeamWD5iKsuywMA7NAqJQh5VZbpYPrcCeJ9uj3AsnriRiQtaRyi5qjfa7wcZXNxfEDg5FDcP4AM",
  "key17": "2E1rLJH3sNS6KgsiSv1f4JeoCfrA31ubNQpfwRmnzZP6L7X6Y5qf3vA7Qmwc7RPWMzSqMfJ3qyFqBnJagvJi57Fb",
  "key18": "2yZxyZxevW38ME8vaGMsgMxAZ35bCQQvJTsok4m35gCu8VkaAi1Aey8d5wVFAaU4yvfNe32MtLbxaeTJctLcKh4b",
  "key19": "3rXHHStrajK1KXDqi1ic9hRDYrjavRjP1gU9gs4wnAwLfxMZkRd4wW53xkFvJ2r64Go76sUbdLumb9m2Qwik4c5m",
  "key20": "3EBN2aNvufGTmxQiQjWwkkaiVWGXCjEPyc8BGr5guuKabQnPmBo1CJJmEm4YAyodAiXngXsa29KLpXFj4o2qZSx3",
  "key21": "4GkbjtsB6Vn8d7c6Z9A9qctp17X1aGmm7y9GRAqTayTLdEXBJwn2m4fhCvUE8v5T9JqoCFtV2SCBJt9REUAr1EiV",
  "key22": "44jE2og4TMeBPdDknmtiW8TasH8Q65rAVHT9TknwWH3maUamqCuKBbNfj4PUai31T8acwiKMdFTNBd8G3HaBsE9",
  "key23": "3WFs6C5AD9mH48DJqCMcM7cDttVdiofXf4vot1vnPZWeE3cxMDfYrTRAAeRxE5BMRTQ5D7ypsh3u4h3WhK9xMAFM",
  "key24": "61nCpbWGEiMsp2NgA1z58B8fZngJSFgNZMtwFz7KLcdhctt7yoDfZRy9mjfjP1SMUUXapnKFkTt5PEkeaa9e63KG",
  "key25": "wcAtctULrEpAgWUHxFtxQiYDGj3RKyNn1VczcP8zs4XYSrbUSgsumzFHhckUab5n98jM31kykeWaAgbf8iuGA91",
  "key26": "2FndWn6Rgt3bo7kNFNrGJqsvYQiG2375vMd2piJfynDAUojnVEPK3aamTwx9dcfuqd99NQsdVKRi8KaTa36LYPsV",
  "key27": "2N43aCVqtP7k1XcN1RPHG91psxMsYGferj9XLgQSrZSKN2BDx7tmy6cB5TdPDb77wdmmthdGaSrKEfgWTStuheXt",
  "key28": "K2NgBvYtRw6AaWSYnH4A2XY6CuAHQunnsxQX8mcmYjYCtamSynAqFis8iJAAUTPH1x1g8bXUd5HH9Fv9qtrUFfa"
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
