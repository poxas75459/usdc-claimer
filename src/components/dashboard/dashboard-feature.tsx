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
    "5aj8zCpamQfvxo66mgKDXU5vG2cZpX3LxtU55B3zzvsBe6sVD5edsdYK1xnVpS3Q2dVE242PUHoxJTUPvxCePxrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b85ARhKKavo2GrPUsg4pDybHigbyX6qg7zAxUBhDy9nGjxcB7smQR1NaJKYEzGr75hDcH1pqRJ9B8rh2zKxpzzb",
  "key1": "9YaUHTLgbWrmqtcBrFnoZFdKJ9kaUqcBC2R3P9eTt48W1ViP7uQwA6gUgk7X2UCcxoGHsQ9RRSwveC9DRdNayY3",
  "key2": "5cAUA7YnXRS5Goik17Js5Tr1qU2VxwWF5SLHcy7TrW3CXtgzLHTrQTGzQwW8D7MnVo5LrHUd9XYskcDR3h8rD54y",
  "key3": "3ZMi9GGpk9kVZhG8m24S2bgz9ue8vzbfv1onBLy6y7YckneGHYNciU1F46gXbgQqLYfPwVf86xsShw97fxmUSp5j",
  "key4": "2HxLNC7FuvPjYhmgPMwkscYfhNcNMipcisPrpYTnR2pjGYaTxF9C83Qb5P8QQ8wKqs2n8M4FgRfteSxnhVoTXpXQ",
  "key5": "5QeG48W8JbkpZqfRyELKx7zCUnuNr3dPmfG1gSjPLimCTRMfZC9rLjRTdyymLy9KVoTSzbv4vbuTAzatnfRfshJX",
  "key6": "3PTXJdr9jU79mCrp9VaKrQPFoxhFd7oJP3P8Wr7ziJ6tGFnMWfKYnGgS5mfPL4LYLmTtVqJFaM25A1U7tSeYvsod",
  "key7": "4BPsRhTBz9WLewPtu7p9x5KRj5b6z4Px4a6uRTZP5SNLv7AhZKBsxNUFJm3CU1cVhViLUKV2s9JfSeiMa5Jk1CtV",
  "key8": "3PFC9TH4Yx4Xdc8fnn647oYNzqi8biAD4hTHBPdf89FUpKB7fcW6Vsaxj3pWVbV5aa5YpGzjY5zQ4fP7r1Ttd8eV",
  "key9": "YVFi42utNRLCEf3M8cCeGhS8De1s3huevPBYjyx59jmsyV4Lr5HXkm8yk9M4DWLoGKuxeeUPAknbY48sn6wZ2DJ",
  "key10": "5kScRJM5WCqtYu5SavJr995UUQ3teenz2tAbe1J4cs4AZphCT1bHGW875o2ZisTdnDpqBRNjXqVJo27ZbKEDHPyp",
  "key11": "52Exh9yMihfh9RS8UqWjLuuD2gNarAxVFRiRxTuT6boMK7E8t7FziAgucQDvHwHpsGUmD7Tp4WVHYQnytQJgYjJD",
  "key12": "zpVgz7EMHrqwY1fuKezobdu9AVC8MehEvxp2F256XAwqhxXpkBUaQLNXgGKmCTtdJDv6xTdxYz337EgbRkKqJyR",
  "key13": "7jvTsiMBRAUVVgDkcMLBPrZRqBnzRMkJhHr3nTfpb8a9DTWwsGsZ9DxsDPCbt2TaxHd8LMnkHeYeHdiq8pmEQP4",
  "key14": "vj3p6bA9irU1KEpPBz7eaHsUcejaTE4KFZq37dydnTNjtMEN7zgGYaBoAnr4roWiAA1EoYqfARahoG5XA2pFKGa",
  "key15": "34EXyx6NXbKAQEWNYWxic25RcRsLJo4XQUvyjuCj5fiYytLzhUMiStFzeUTXpEhUkXADggg3QrRp2jUrbZuzbzsc",
  "key16": "3c4weNdKStgUG5uQPh35bpr6Mk1pM1RMGiRHH25awEUyjsS39cXVucWn7YYNXjmJiafQCSvANVJqLJjChcRbBGnr",
  "key17": "4Lyyp8wS9RvvvKWEX9isNAHGepruhHsr8KzahdMjd4ZLsF8mtxhUaag1FkoZ9h3Xa6qaYTcQQabwBywbL5NejRgN",
  "key18": "5LfS5hnpwPgGjrZDtzHuQQADRywBbNVKynuKuM3VJbq9KHC6pChNLaP3vKvACzT55AxqosD37bW8sPo79NBRSckN",
  "key19": "2CXvBRYE34yY39v3quTXUeD6c5mUaC1JdD3qSY12ahTafojRDAvRZtnvKtYCfjXXWfcSLhU81UTbuPZHtNYB5n8z",
  "key20": "4eXTkToLywMEDUrRjULcGaLFbvHvPPrWjnrEFkcaPkQ5oPp2wmxJwhMM8Qxj7Tf8ZjA5pH836g4i1oASfoLEuCCE",
  "key21": "5LE5KJ2pcdhNBrr6Luwp5ph9ZARRsPe7dJn9zcmK6BBeVC6FdnprZKej3aXXbtmzr4Wzgmza3AQJyJJpEut8Wp1n",
  "key22": "45BKa9mfKD3NwKAQyTPrBw5Zzqy8AM6e8KUdSBhDchvu9BqMXPztXdP5nvZ4JgD74QqXXHaLHiUeQ2nrKKqbrVW1",
  "key23": "4KLQ1UviG9PXp5gVacEhgAGTnJbx8u3DxeJXuHd1HHU4UeampNPNrwMeSdwDmT8va5s3KLCHAdiAbYCCjeJpDLTH",
  "key24": "34PVt4RmTB1PsVv8zPKjHGwtc9JB3k8Tp7SuvypRb5oV5wVWoVzLmSUAad1Q1KeFHdp6zMzEevVaTeJk1UL9Yv2U"
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
