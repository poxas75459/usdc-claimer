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
    "48MYDarYyJyexgg6xm73kp6e1gWkQCUJ1uYesHCc6QPvJkBcfzsgvGNuTjsmx84vGqMcECWf46k8RbNXFzyqFoBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GwMCN6KzLtghMyyPQmXYasaFtvSBBMmonfhQoMKgUzYeBxKtquMxYQVrf46Qr8UW3shYy9diXMevnNWQBWKaipW",
  "key1": "269hQyaq2GX5RYpjPVVdeHriTLycenau6Wfu8ojRazktDdDx7cDSe16dvptKH7hjDhK4K74mzJh8srXyyAJ9rC6p",
  "key2": "3t8dQzeT1EyqPj7ZWvRRp1QSgQZ37T3ERKj7S5T1gFK1p7JH5Wuc9DREQe8egeEoHLLgfcnNCpVXZvVBEhGBgD1u",
  "key3": "5gRa7bGCDVWXatoViKzJ92tEEccni37jJ8NaJADpZw2mkHWeWZYShCnJFuAAd5mjMKdcgpF8c6qS2XYLQvMEPn3M",
  "key4": "61FDBeHhd6Q5uDc3KWadpQwDM3cZ1frTeTVBM1XPmijRB1q5ctV9J19yDfZFXa5Uuqj75ZztcDktgEdYy22b4EDy",
  "key5": "2Q6fa4xDBYof8Ubq7ExNW1yhBk9b753Z7fJXeMsGKZpXbHsq5ygRvygRjR6TnpSDeQTbh2AfsYs94Bif3Cm8EvAf",
  "key6": "3Eht27NKP1d7KktrT5veBcBfNYpDidHYyeqfk3jUnyvmw3tpWJxD78pPrfZtgiREU15BXC5GeL1SCHqhsJw2tNBw",
  "key7": "3KFEoJyTXEjbnUue1G4uCpBePcTyYkJmgmJqs35vMUU1qVs59BpC8BECvuH7TrEFBTvZGuutXUodd9Yd8x8Gj2hg",
  "key8": "irPC18uMW9iMi86j4eFtYUaHyN2auBoguGTrqaCNH1SgJLBtBX1VJPfqHvcBCQHCfE8Put6NrkhKtBZLgCsiw9P",
  "key9": "3GPaNLQwuzScb4K4JLhMAX6RieCmzM7dBqhmtUfLGww7zJwSycq7nh4VJm93CBP3RDbjBkmGJMHr9ggLKRgQfEbW",
  "key10": "FWomcc1aPoqXhMYUkzeGZwm5hmwbKryPZhGafdQof9vfEyqiXe6CXWUBuorxuhUxUQHTnWDW7LURteb8HxacC9g",
  "key11": "21bqDejZg8HVrdcUptkktDHHrxTEhiKX3Bt7vQXuxhonxxiSdUSHTUmpUMncL8QHNeNRbvyyTXkQkWFvt7otrPKm",
  "key12": "5URzBH9C5yPepQg4WA1dcUmiF28SYzgikQkwAm49fQfyHVuboaps2jdBFDgV26Aq5J5FGTazx9RwpXNDHpsT5X1T",
  "key13": "2AEKdeti9bYYvrfRtsR9DRygqJ8tmKKGnCXtytwYW3PHQZsvSVs36Bjo825Jabo5nt7RHbSE8ea6W8saSqhpgmpy",
  "key14": "4L9Qep2KEEzqS26rm9zaNsVhLnoYHQk5y9bhoeoCUuwZKwnW4NhYeLh7kj9R6dN2jX2ZxyxtkACAcaxPW9H8baUF",
  "key15": "4GnDFnteKHUnZLQ2n2DxsnbsbMpLjJesur9QNqoBAw38sekCUiQc16gMyY4qcLyJFqZHdyse4sd4LwDo1BP6umA3",
  "key16": "SS1rx6T8GxoR9UZ4ByfHw64y5sngsRK2HQZgusPgZkJEJFJHAs1AEdzpDofSet2EDPPn5cXX7ny3JRcBk48nd3r",
  "key17": "2UtedUYiBbHX2DGSY9R9a9LzrXPHrvBw2uXTeU6KwXx5KG3GA7UGEJyLDk5SbKDCVB8JHoL4bUi4i5jX67t6qV8w",
  "key18": "6fDvWt9CcXCn3fvgyeSKa6VUEcYD1eZ8oxiPYUaSkLEhEsTLRcXxrE7JBD24Y9qo2mYQZur4XovingTfxXVNzQU",
  "key19": "59hA3Un727Aumno8cFs7BpX18Y3dkaUmZBPPioA9wuKvEAQ1DpmZ5FovGjQhGXM4ro7oJgGJQdJMwuM3ZqSyrSWD",
  "key20": "5BZZjVsg6F9RiEVxsMTtf4hrS8CfiBXMPEbxeMi3gVXjCziyhUbvHk2YrMMZhx3baP9z4opZQk6V2JkGqhWDddka",
  "key21": "2VnTEee31xoFgqK76qAA8HJZT89oA1g9hZ8L1ccmS4jK2G3GzepKyuNisoqMQeFTLScfJxSbyPYqNQ7eUKFWw8xh",
  "key22": "3xxCJJHmXotbcH8FQtejT4JyD8izFhXQYdVwJFWd9Kw1mC3bZTPwFHy9XnJR5u1yBDtau9nFAjf8YRK38AgjewHk",
  "key23": "3osxLMJacguUzg7wuKd8k3sQe6mFg8z9zTPjLgk5GdCfMYvYWRQQC25NAxzjQGYiB34S4KDV1GUvCYUVXvGj4bBf",
  "key24": "4tLmhbpCysw1ZXYd2EZrjpV4JdqR6o8WjCubsN1We3efbnQgFhN92PPeLgyNnGMfJumtLnywXKQGK8FLq2ULkKSG",
  "key25": "MzFBhZL9sgXSZdmmk1pxGGeXhdRPmkbonmqTNx75itwdGB6nRKGNsCWrZyx8aYbmkhN9tTwnDKWAPy4ECp8ny6Z",
  "key26": "9Nacg9Ssft2WHm7VGZavMxWJ2uGdafarqpiCysLnpJwLUQVXhUkFvCesYFW5QG5jy33msUPsDJgtBnisnfXi4sT",
  "key27": "3HWsSFW2mYxAXB3E4eXu6gbpQ6SuPAdt7u32QtR47yyp1rBhzbQQN38P3sakvfdLyercBkwhWZDMcpNyXSCpYccP",
  "key28": "36h1obXLZvwkabhCmP4XoT7isAVvJALfc7n32pansXZ4ng2gnoFpZRod9t5Qsimcst4tWMA57Ng4uXRZWcLewxUd",
  "key29": "4TZWDtaafT1As6gQtWc3hp4rTLTcz6MFzZBYnX1U9xs7JAs5XH6ZX6svNac7oxPVpBc9pXF8fd31m7ujbjAWBGzu"
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
