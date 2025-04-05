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
    "4bLbwocRS64xfyWa24gxJYtiDeRfeccM7Zwa1MSVSzaJnDv2PxWSzJGj2sdNtMxM5zj8GgjBztLk88APLBipjVca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QGodeeGf1RDWccRtVKptNezc2btxJc1BzhDFbD99gd1VvKxqn59dJhPAW6vBPrk28KAjZHsVyGVqtbqZT2K6iEX",
  "key1": "4oKt85DbR3DXA37tsvGywnUL4CQZs4jBaJDfoe6QbkyUHhDu6TkJPpKnvS5J9mYhcdEJPNUy4L6hksnnpyc3T9gP",
  "key2": "53BqUC6gnn2y8wxmwSDeQzWPh8YQTS2zkQCeSvCUMXPKmej7RS9Y7cG6hmwVB3TxL6euhfHBsFdvNMKhQ4Ximy7c",
  "key3": "86f5TfTyQyk5ZHWK57BP7YNDh3YRhXqRPyahcUjEibh5Qmdpq4NfLSCxV19zTndB68xDpDY6isrH19DbF9PTkfR",
  "key4": "ZNGYkE4rcYpGvcxTTei3Ai7kphiQtPnpmWoEWxiKXks49JUN83ChBFgCjs7vdsDbPv87Hmo6xj4DFFbQ173boJA",
  "key5": "2V5KuZLq3pC87MRbh5Q1o12p3MKYfo3JfqequJDz6gCYyM9AVc4C2mK577tKqVHj6iSq5sYUHn6GqN9ZMPqzQgdf",
  "key6": "3PVBWemVg5AjM75Db9yJwQstJGA5WdopgbuJLqT8W6ftq7wNbNr5yjHcaccothZoi3q5LASazRUpFmCeE7na9LUx",
  "key7": "66p16aGRHNFqV1hVRSdtSQFRUHdNDQGkxBwNtG9mYm628Yqb9G9mpDWBRdWVAq9LRcJAiiYaxFv2v4i2UnS7feJ9",
  "key8": "2HCYqep9QjDHS8Zzr92t7vivVD68uHXTxoWbMYF1Mq3vwA793D9U1EhKtQA8ScfyqTuNsq585gCEdnZueFuiE2nw",
  "key9": "5okGxCbchSsQcwV7F4aTdnTjapUY45FzMe9mPtKctUtWJ9upcduNUTiKVqW1N6SXnou3NZp9wh68kiYUH4JqQPXb",
  "key10": "3NY5LspBjXr4bMcQff3xgMVA5BHp3aNA5Gykm95RBugP2ByyDM3wemYRSFmijpbKhqMwCwkNsVRKSneYWcpwvThV",
  "key11": "5LW29ZruGC6HFfPxv5UqdcFHES7yMRoYij74bjviJ1ZwpASAb3zR7Xj2X1W4wvk5Ay5eqZJcLKkP7zZBc6rokk2E",
  "key12": "3EeXZNFm5nyf3uMAaWBFHsVDpeGB37HT8rSJfkjUZQRhsXnSWaTFcAk1gcY25jcnSkurohD9SBnVkj7DKtrpM5pK",
  "key13": "qq9o5GjMYaYBq8PHkiQWhQAnrLGRDgssiRo9e1oSvZ9QYogvfJJo7yqTaKebKQoAfCn5ZXnVnMQcngxPeBMz78a",
  "key14": "3MWSkGqFkagCg2f5Q4HQDL1dVeXjnpfxVFW1JU32y9Zafi7kvJZvaaRPfq9KMBo6qPZS1nbAtK2A4CJCwdA9rALh",
  "key15": "5jfJd12xL43ASiK5GgdAyNEy6XGwzhCaur8W3nAEeDYZWMdf2MTzDX8FbwasBA6aWRUAQu3CMyWTzB7MTqNHv1eG",
  "key16": "Xy3pDBhtg7wkfa6nSFcY5MJfxEu59BZzau6PApp1vdEjtPbS2Xx9Csc8RFgJ18u3VYrHXGwD5GkYaAFkzyqacDD",
  "key17": "5vmaCducDrv2tWmv117J9ou5ZYyE79rPWwpGzD33Kim6BEAndSAxvphqUcwSmfCX7nn74fwix7j9ApxxMxpJwPNp",
  "key18": "uLkaAQzDXyiuocFsemYU34XYs55icC9zB65e2c8uSiDDkhhaejo7oocCFJryPYbM98WdzJF47ruh8tgE1iPfwgX",
  "key19": "2bfS4nFJoiHRMCvawyCFZmxNM6fFc2zLMpaUzduxshBjSnrBYc8aw15T8fJB1FVxREgaPnjUmE14QRc8m1bcwXqr",
  "key20": "3N1v26VY4quezXUPFUuj1yrwSJRYcLLRYe56unx8UsStJyF3xeFSB4xNZhK9p4eHiLzcQw8iC9wBJQ93pbg4twDx",
  "key21": "5KB3qbuXrGFx3BJPte9GZcmAvndje9aU1NV9HbbTQEh7QAHZUuustnSWNgQvhLJmW27Fv9ticJkEv4wMehsh2BFy",
  "key22": "4WKs24XCWwSzgz4sfHz4qakZsfLvBqb7CQvhgcv81S2XkK5eQSswHuashvaCKHV1TFYFHj9k4aXPCaGTo58MQi8Z",
  "key23": "3fWgxkEmwAK6qR9rLfXRWeCf5Pg6gspA37Bb44NZNhr3nDLTzTgqZVDxcF2YFPQ5GUaWnSM9tXTEaTvJ6MHZh5dD",
  "key24": "KAqj4scgWZC9sJy8SHGvURt1sSSij7y8Amgygugg9pk9aSKUQrpZopdpa3f93eYQWSuvUaGR7CHMEMFMCN35ww3",
  "key25": "54GFzvnn8Wr1TZXZUsxDV7qJDUmARAhL5MuC5gzQ9J2WSc4C1AXra8yqY5JpxpUrm5G8k5cFzV5aTnmstBZDiCSG",
  "key26": "3FKjYeXzjnQgU9Fi64eENqyuYj9pjXNrtvEhRtCLtzwy155StuenUwLBBDnJeuuQhHx7hkpUKc3xecbqvFUYRY1N",
  "key27": "4W11dF4EsS23yJ8595ZoopSqUCQPd2vdVAeJrD23CdqABwACq6bWA1dduc5oHTSjfWeJF7b6bgSaP3ZisFp5ANuU",
  "key28": "2zMU3MScGEt7W8QjRYKiF59fADhGR27arswQWPLU1UMGhrirTSnLwtPPFerGLHQRUVuMRFAtWSGRippwiVGmgUzr"
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
