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
    "kaSndzq6HwZG7cHC3QJR15613224wwUaMNP4o1p5dPf66XjjDx9QjiZNzhcovfMN4rKAcDHQVfiPcG3xNTMyLsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JkB3RuNtBq7JvbCxzyd6frpvyFYWxhvNvBL6TzrnMT3U3DMiB6xRn7rm24j7AZBUkZdPaquboHwRLFSZwdgNBv1",
  "key1": "21uj7KPSoyjg4k6XoL7Nam49iEJzzhZw941fPwrpHhFd5NTrJEBQmfdSg7cPP4r8vzWEFxKrbkE2dr2YNyK69NXQ",
  "key2": "xD74sxhxCzY7Niph3HKTyq8y2GM5ZePUq1iBTaUaJ8v49EJsbAXEP6HQHTdjfGuWQj8v8zGngS5WcjFNFrqmBGN",
  "key3": "5AFgBviftnuijZcyFM4neU8LBPtVgtEekJEWFbFrg4waZZxZVkpZSW7zzRNAGk4FL8Uhx2oud12mwvarhaEghB4n",
  "key4": "5vqit8FoTcmprJwxn3o97L1DTmY6TDuwEQL7Dcfz9KESaSkGE2gqPZkY6upSRTCHrwjnqNZPwtA43yw32XripZZn",
  "key5": "3eJpvMz1fvD24jvAAPU872ZGBoqYEJqcJNw9E649jfJkg85WHA4sh3gdLC2r2FnUX8F3AT9TE7AJtHPFcH4iHWnL",
  "key6": "4i4GBegkpD7DLvQ1Lm45Q45D3dCF1xfPRYzyuwFGVhRHTBCJQX6ytuWLn3fJf5ZHmwjx9FZrEmPm8LAdUE8R9NVU",
  "key7": "o6d4ges67JE1tMoikpa7nJng3i82anfH1ajv4z35pf2RWF5isgQLE9G2N4nhM5abSW1Xb2NFYGKVEgegYrMcUG8",
  "key8": "61S3cXDCPwZAkGRdnFWw6Tdwfa24pzsCD8e8SSCYLAHo75AxtdEzwpvtMd9MY7ygBaPnMP43A5u9QY1pUnFTFzaL",
  "key9": "AFiGUJrAnGtbHETA8Qe3XnZtrCjPsviMkCtM9BNnFW742EWit1tHyFjkMXtYNQC5rQCm3ti4Q7hF6qmspYWLjUU",
  "key10": "3Hwa2Jh4G72do1sbkEb8RYkGDWngpAZJPwbTE8x2G7aCs7W1A2zNPdvzBMnDW92SKPKNHUuoojBGPWdHDguqKSn2",
  "key11": "k11aSqrmoyjGt3QdGFvjosLdvk7ShbEfe2qAurKH4UUMMjYumd9LscAPFecyewb3R34t2yz7jkDC7VAmeHUbsbN",
  "key12": "67CGnQa92ynf9Vq1M54GnJeN7UwMKHyLbT7yxQU2JYv5yiSkFzwwNJNSpEHkLfBHV1PyKRVgnh8XcPiidAAT61e5",
  "key13": "4KMazRfSfz6wAJaSLhmTUHG7fppnjnrKi9W67389gtVdVNCJgT2sAByfVcLMfBMwGnRLWxeYDecQUPRWXLvy2Bsi",
  "key14": "3bDkYx7mjL4zytsR37sfUNo73ccL5gNxmyAQgctiLGLKaX7Hf8BvfhouCsFiNcNZ332FxMAzmuX4KeFF9wxVPMTi",
  "key15": "2XRPz12dA4PyqHYXptMFQJsnc4GSrc7jWA3XHPbT5czxV9GuYTxnGhApFGZHvYpd484G1WztMy5X5CQapV55JGWb",
  "key16": "4An1UQZQpoaaYiWzgN63ygeQ7eBmoVUd6FVJLocYuKqyGa3MpRvnKu1Zjx4kNk8NkvDQ3DGo9H6to1zN9TuYatgr",
  "key17": "3V1r7uU2J7s9PubpVXU9arhNnZtcVgoLM2Y4sMC6k5EVhP7brq6bNyad45Ayt6Frc3xs5CKfFTSvJnJrWfsFezHw",
  "key18": "3J5jgfVsTnWKdcWGm1QGaQL7pksREs5QK4Gg62ZS939Lj3yGgSEx42GoZ7wQtSvwHanqHEy2Nbj7n4QVxXVCG8Fx",
  "key19": "4oSABR8V63qqggkg8gbEf9B7rYwv2RitBwpxmdyRcne4N39ZbYvrvT1GpoFzrhYhdLnynSYQPqiwaaUjuKNCs34N",
  "key20": "5uhgYc3Y8BCnbQzT3MAXjTMcmKVnT7sjUzaFvdG3LLGtstEvvvd6HzXcBqfUbWcMqpgk8TmjZefayXbmbwfeLUw6",
  "key21": "47Ub3GVQz9N8dEySE23YhfsF3wM2nMuXphWgrciCdxBwTgihwc2bCTFaTEVieXLiPD8nT9VntBxkAtg5TAw14Y4K",
  "key22": "5QpKTrDAAE5CvotF5uA9ERN8ntbyijEBnDdHbYcANWW4AeumX9gADadtYbJLPL4o1o1EA71xm9N1G8izZoKboG5z",
  "key23": "49UxHbxPvXoJVGj1DijQeyU5XBnchAiWygvrv9jKYxdFKarZ7KcnbHzJiQfU142rgxTTGwQeKh7nXo3AMks2Pd5z",
  "key24": "3QQ7hkjJkRwkTSAkik6d4d5NNsp87MtXHq9mtrdhahT7fQoRhoMzq2vuBaTCYSPyRAqGx55a5fzEL3jLVbB4cATW",
  "key25": "fwEBSXcWU4W89UT38UC2KmEZu3qEZGQ2GCvK9heECnMwSgMyxqco6fdHaaLLTGZpdfPfhcwLveGmxCSuC1rgucU",
  "key26": "CkPKDC2DxjdBu2DDsgjRdDxsC6mHXtV4iuKh9oKPiRP6grVtuy4huEsoiv3ZVXBMphte4EVH9se7mTedN72pU4b"
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
