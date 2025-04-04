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
    "31pt4JvFbKFJQEYoxBuo6kV7vqS5qB1pM9EnMmvrCwoywqU6sXmNeELHuwASHGPs7uQskW3GHtUDC11DKUQibvTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31YNCVZYitBKGJFgpLcTRHYXpQfv71e9sCAo32qqPWJZQMCrQPyMa8dzwLNhoC6YtbKX7LuxHXRUqf97kc9B3iub",
  "key1": "2WrmTA5RfTwKQ7HkH8JHtL2zjqiKWdZNRRyLJKSLQXwStgRcTcQb61x5cwZJfnUp7RozPKBGHoxYV1awMBVFddNP",
  "key2": "4kjAKjPe2gSQ8TberBL639US5P1q2SA7tQgQquRCWj4NiMLF7shkLtqh4JnDgeBGCKA7Sd4UM2qJZPLatbrDWkoX",
  "key3": "5zCQdvJzne3FZd5Xe5BJh7JezRZhrNhZAkyjPAFaJD7qgvxvgn45eSvMyhHPE8YhnJkc51k6xQvJdBtmbTxtzzpv",
  "key4": "2GqPc7UCjhSnJxqxhgDwYu7An7SPXtfgJTw7TLnehgKGzoFF1ngTxwCR5x9ZumNXz5gZhvvyVjUujGmgRnkxuWnF",
  "key5": "4FWX7wQ6Q31Nw74WWQgPSARQ8uqw2aM9XY5XMoArfH91nKQJB3iTDyEbUrE1EJ4tWDvCPKmkBCnTRbNs8X5v7ANi",
  "key6": "4zBVod2dS4SdAfuUuEidMB6WCcnwVdSbQyQMUsL8VCYtpnLMjb3fa7Qby3zxArXRnE7R4PKYBgEHe3M3B2m766YV",
  "key7": "3opsPc2QiLpZGnSYEZS7QvKXBcyqiesehaUE8R1yP3D5RpMDf9Q6EcPrNXbcvKjDTFTafC5SSbj8CQQobFSUsDXD",
  "key8": "3enzroKaYnUwRdJU8mqpiuGfE33s7PqXyQN2As3ySfF82dJW2Qt7yj6YgpFTF872PFtufNdNeGBfJDiaRVbnm7ZG",
  "key9": "2xqoSpXGuM3rEtCEKR91AqvDFfCeDseG3WCiHfGqFL328KQ5nnSJH8MVS6aoavSTw2rWcwXYiuugBjurHoR1WTHJ",
  "key10": "5mniBwDX1o92Due4yHYx7h9ksB9W21MWyNZkEzQDfJhWFKYwsQgiuVfoJ1J7qkY5sNeAPe422KXCv92sFGry4J58",
  "key11": "66ttsGnAAHuYb212Zr4ZXSptDi2dFMYSKDemBrKZ6Aj9Ajj4WQCQBc1LN8zeesShm7bPcb6qJ3ZBUi9wDLnSvbpb",
  "key12": "4fh39gJRv6nf1jx2f6MRHZ9iwunkT4MBkpP4DULmiFsjKzxgzVFcmA835Z2PraiYTwwP4dDGe2nDKJBgeE9XyPQp",
  "key13": "b4o74pGdAEkEDbnqBz1xg54aNxii4wLbJ6evmLaVyUwTjnG7KMZK9YfP18Nr1Ms8QMkvwqLtbrVQZLfQz2YqjmE",
  "key14": "7fkWKLEv5dnKaGHC9zsNZhqTzdfge8FeggbhKEiZmHTouhDtAdX6T8aWnhsk71dyPKefKa52X5BzLucuyyp6QRX",
  "key15": "4zAe38rLwUCNfHUehqeFftkje8bcwpauQu1XjopwzbkQEM7QpEX36ZqBX817Joc8BgJggrzofdQMUa6Bo4pWLSGB",
  "key16": "eafnA12YeVjZfYFqFkYjVgUvuSrhH674QZtU9GMPq4tRQYcZwhFJZ8PAWSN1kEF3nQGUYzkF2q5BsDZbZAcEKCD",
  "key17": "2zUwPa2wpfA5RSRjKLALttzSDJ2Die9wncL3JSD3TnsmLfpLfXXg4n4wHYJcFkJ1PFaw73Btx1QqKA4jXDKQaGNo",
  "key18": "2raq7ay4bpVFva8ENT6xmFEJqErjKws6GBYHmcnWyPsoKgryeDMTtLV3arPimbkY933HPv5VhBVpeiVRqBf988Ef",
  "key19": "3UtWJUCUEXmSoChmZQ6EDQ1V1jW5ivd35nFsrVMDHjobEXqzjBzUZhLfGkMArmBtksmTZdXrBQfuXwYgeTzqsquQ",
  "key20": "4noDkVaPczRTjDP7QCVbqaXf44i1PKLsx9JXRTbRWNuTMdKgegdR3uNzU9o7ixKwF2PGdHTHuRP3ogT2mvMQY8hD",
  "key21": "2zXW3PYTKpfK1JVmAAT6m6ZuX987FHqo5MBjT9oREYh5pyGwk3q3qiwFcheZ2o8LZuGvLo8YcA9DNQd1CHZ1NKPC",
  "key22": "3aHrGVpLoZr7fREq3v4vnXvs8t5h7isjjGkDHEapF7iEtUA5BSKJGsjAfAug6vE4yJ9zsvj78g44558c67oMeEdK",
  "key23": "651JGqTmyURi3PviqvdGNBQSKCwSFiU3DifUV8BJHzvGw6FLtwnc1yPcbCpzCnZcXYhtUCrpmQJp8KC9HBkQ7kK3",
  "key24": "4nPkc1ANXmjgEwDv4zmtQ6TshkUTBFpnum2aSY5pz1Pf4NhpqzmFbr2mbELbV5kqB3AWVFiSX87FU8McAhFbp3h4",
  "key25": "3FrShqnt2eNhBZpef5JcdLy5YwCXQcz54jM4CvwqLNJd2SAHp2aPVzUp9vGJ8uBn8QwRX1zCxtm5zaUzVBYb367h"
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
