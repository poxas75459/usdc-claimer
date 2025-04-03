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
    "21Qr2FD6iF7XBft7qTsJ2ePoeAdjnZ5qNhgvTvN9hh8WQdizo9QZU5cNAodhuGY38eD4rMbQ4VLgwCimPnEwNx55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3646y9faHRP3vk8byziivcfHSnSYZp2eHJQLgiMdot4AruReR2dyvM4KZ88QaPr7h7ovoTBFA9DfKNZqpKeQbKJz",
  "key1": "3VPu2rpPSazE7zZsEbfgaEBeT29ihn5g5SSi5f26bSTiUJ84CGWXcMxfCcFMoREWQLD5DfRdCNMrcv92aRWsCNFP",
  "key2": "2VfJ7vfTmKaTmmCkGSQpgHvZu81WNT8tLYHMPhrbqoHHJaEy1Nk7QxJsNhiMyDZDfNXerPZBpZ5UDD8X7qEeB4nR",
  "key3": "4wDPoAmFyAVhgGWtb6wu1mSdUFg7EECrAVfSSkwLnCE47qZpNfhFFwzxyfyWMmWbVKr1f1TmPwoazqvhEdXBpqeu",
  "key4": "5Xmwgj1jCgmxsWEeh5gmZy2uLNtsEzTuVPGPVmTyAP7RrAtZstR5CyVtsFmHMYW7HgL6FKpg2JdKtEaFgNNJb2qr",
  "key5": "4YeKaUv4Ha5NYaamABRJ3DD5J5nGV7c8obdgyVJaaxA1L6YgEqxxZDwZ3vcXP365n9onJQgfr8Ake9EDgbh9xJJt",
  "key6": "24jGeZtAviv9XEnrP4AqZUqFfRNZqbWmbVDeAPJL5Ade2vUmk9GKRZ6Z5yNxuLY9NFcvvqtwksHHYdoeiGcB6JKX",
  "key7": "358CD7SfzSSe6K9tDQbgGxWr6hUseBCrzuq6DZ3dHu8FHxXazzJVLTmEGvUu5G6FLEXrhAs6P2qAVWrBbDgPMTwB",
  "key8": "2fejLG47nNnKXnsNGvFgmUxu3B61i4dG8ARpk3vtYNbqBAf37Wnc88e2qHdR5wBfQTXXkYNfyEyhuMVHoy6ZKEJi",
  "key9": "39bdYtDdMjnhqY8eqeCpELSShigjQBJN1PaQy434VbEeu68gFbxQk5bT4Xqp17NaHPkVNSxfV1y5EYjgGa2suoDu",
  "key10": "3SP4vJvCeehriXiVYLJYA2PCxFSP5Eu8iP1K6YLXkoUCnpUzowyCP9tEyGWncU9aFuNHySMRZjVYqx9Ts3JtAGkz",
  "key11": "3xujGdFDepRsovVDGFUn7SBVok1AxE1Q4KS23fP4Zb4VmQQZopMtvXH4kRKs4fZYGjcRZLvQvKnKGKn4YjvUXJy1",
  "key12": "2XZHu8iAUG6RKNKLTGs1Hr5tq8vzEnSYTUBoCw8UtopELmDitMN5LSQAc5vdb4iZmdJB1bUE9rzDTw56vAibd5RX",
  "key13": "5JmhvfatVvc7PtSwk9QngD5tE1o2ayhSnUEj3xjAW7DDwxXUFe56DsfoBQrd9xtDpi8swqg81QMgas9j485dXmcZ",
  "key14": "4BNwu9jPuiWDmdTkjdTuNoDBTmNHNvDzBXhzxnAYyn9QpdCMVmvYJkPJtqk3MhqAiBgg5g2Ama2jLphJs4Tygvo2",
  "key15": "3Z6gMbchQzRC3sWV6kgnz8az4tYtZJyczrJmRyGvu4aZFa1YwP2wbUhpsMhEzkUuAg28KwrXuj1b2K8y8ewMf8Qu",
  "key16": "5eMMdJewE3W8GT78VsVrtKzCm9HPthdBXgB57LJPDT5aF2DUYkRd2xyDh2UYURcPrbnRjR4crcLZH2NS6o8iteFA",
  "key17": "5vGrKzS6cuwvLq3gKyPQ4SsYJG8ha5G1juKRioR7GHhvPra8GecGqeiqphSE6bqZq1w8rh1yGHCGi1E2cP2krunh",
  "key18": "3xmRsgQzvMsxavBkbiNXkh7BgscgoNsdpmxuXPtmNPL3GCFBPJ2NaguHLL2A45gPKEaqsvocAZW1FJhDCYK1gEDX",
  "key19": "3kn8P5p2csz2ozMGGbJ8vYhnGBdXb2CfV2o5QSu2NEsGMvBhTZ5dr3HtLLkbiYxX6pYHuCZsruEnYPkccqt5Dted",
  "key20": "2qbTNXHvvfhhZ8dTHZcqo3bwAFGhNDg6idEc9rvdshEh4Kx4wpfoafDxUL5Ty4NTKDZbrfygjgXiWp7Dpza5qhhN",
  "key21": "3BmACo2wMtK36BenHj4EhPZzUQGKuBBboj758WvuuW482xMrJyqscJv5jEZSXqKR43dDRikyj2DDgc5FvNjjzX9N",
  "key22": "4qgNAwGchy9G5FqF9fieFPjFVUxS1A1pWn1ToSx3yRkn8bM6FadGMKHgAPetS3CPaPyKZ4Wq1B7seof4Yi33eeBY",
  "key23": "5Pe7eSuvHsyEtKq69SEMW5BipBTuUmcf9p1NDiiob3e6AxJtc26WM3CmcCdZZAK1UWEsHZK9e9bxHgsg8cyX4RMZ",
  "key24": "78wopom5pC72DkcDAQaCZHBHbxfMyrNxAVkwGiuTGPcr8rVwSTd1NxY55KQJY3ZYd3h7AxnTqSgEk92kqFLJBAS",
  "key25": "45vErosmtAmjEanHzRChUZgA2UYnhZUkjDhJR397CJqFeTAeX5Ny7mncdsdjddE5ujFKYkrCn3sv8XoJ7WZX64pW",
  "key26": "caNT8vHpMcBrbpC6crSQ9M7hFitGrhUeEdEtXmc485ifD8YfmwfuMwxxLdEZ3LXQmGsuu96iPpnVu5t2vBDcSHL",
  "key27": "Uo6pukHQ3K1AurCciTb4sadrufpRJCw1ySZNC62ZVZWaornAhRHudg6CiJQPVG7MbapN6M8gWzvRXknZ5xUoxSm",
  "key28": "3eYBgCpNMfAUcVqaE2EHvhPdGUjBx1A8Wg2HngbTLAYesAchUsGhuF5NCVtUrSjLd7EcKXWcWxQJGSgCXkrJRSBv",
  "key29": "2v28R6D6xwDnErZG9roT6FgEiyKqA4oC34yPyGRus5re3DS8g9fv18DQUWPovAARJDzPhaAVFPdDTz1BimhFZUU8",
  "key30": "Z6kFFCmSfkgeSEdiiWavSvUahTGGXQ5uJXxbyYMheLCrsJP9rRMt11FEEojDBLitueoU5tySZY5vFoKamJEnwsw",
  "key31": "2QxeGR8rqLjr1yhnZXHWsFiT9FPPqLKd9irJAQPd1Yvr8qWtKdzqbZkWUNxw3F1AKxSXMm93rjF9jLuhJk5Bybn6",
  "key32": "2ynu3FQqt45xg7Z9jNuubVksN4pYtG4HYoGrQJJJJiPZxcizogrfpadE3VE6AZV5GJrYBp4wiQwQ1j69CWBNNCiP",
  "key33": "2tJg6vLdA83Bcx9KWsgHtJz4mw9P7fLBo3HpxMNzEep8auZaPQyF2VSy7yBEotEhTwU3aLBtYTU88oqpoNuzP6cF",
  "key34": "2CBn3M3nr9jS5NdXGftVpsDuT7peQovAmLANpTRGnGx2xJFKGWYGfmGo8hFwjoR3yYDZD94nHXg6g7Za5pTzxi2D",
  "key35": "5uTKSGvrkzTAaAyoV7yaPtwHdGFedbBhnGgiuHgzv3T1A3L5wu4TuvcCaQc2uNfywLcjwua5TDsnLzHwvfZhP8EE",
  "key36": "5X94Y9vSPcrUm41PGhiWArZte4VoMFMm1YciDtqcfgonCqyhGs7RxfMdEfVafEprZGVvcBN7Qumcs9uZ5fhcexUj",
  "key37": "2WnpnCWbhVP8qZAZqPjNSYh7T6RcmAcZPcBeGoDcEHFjNYJVZWCmZfnShDXKttZgCkUN3GFRmC6uNmC4DDtGTe2m",
  "key38": "43ztdCERgMGHd5Ar58ohUJ6tXgEBcE7mHRqZ8mYvvQr83CzHLLBtLovrcN7CUNHYnEnGPDj6CxJ1ciFBLRzLXZf7",
  "key39": "4KCHMXdHchKRJRQQbCwDgtKbfa6aKAZsPxVqPKGGGBLQ9nQr58pmt4zNECvQNFpbA6y277FbxxpuLcFCumygcytE",
  "key40": "3JchvRWB4cRDLubhrEa4XpFVBRU4iDLoBsS8KHrJYpKUPvkebNyHzG2DDAMBSwTYfjjN9VghGRnCFQq592peqCnS",
  "key41": "27ipUG5BkbCjabT9RLFSxzSNVihvJyYvqknDVMrREpa1TVMyYAhfLGpTUio9mZBduHGv7Ar8Z1fiUNrACBXgtX7E",
  "key42": "3YBKwZ1NB9GDcq8XKifvDwMgzaMWeHRYuqnXbhyWdjiVWHfoW3ftyvZUMajhFhBmby21uKRAc2T542h8NsSBxBw",
  "key43": "5gML3vyDUi7WK4PHD17GQt7nTbq4rt9NQbN3SYEmbE7qYEobCZiyeps8iXoJ8MoqTHTHL4VJi1GYqLryKBPFXDx4"
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
