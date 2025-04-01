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
    "5Uw1x9REwPQnQAWaxYJuQrgYdHR8keZy3uj8V1JEnFdjPbFxE5couYC4zMqNRfMEsLysVe5R2Jr8jMTN8ErH2DPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Jm56ACtdQjQNodZVi7SzZY2Nn41qfaDbTDK2x8axvArWXE8uaS9mJUGb9vJheurjzmuqwk556S5APBoXyxyk6F",
  "key1": "Mm8TyXPHwdzRGt5ujvd8FVrSfopKLA86d459dwhUyB353yK8jwzT5RB19sB6y6w25A2ynZvTgXGpXwXyHUh6sNd",
  "key2": "3kKieVh9hLZvfN7P64uGpG73sxG4h9gwxthRYq7c3fXDRe1a4Je9u9Qh9NPXdTAFXx2NSjEyuzp7BSko3HFhDUUY",
  "key3": "46QEQtX7u2p7WeNCrCewqMwdhVTAyncdxpbXFdXEdK7PA2vQzHgHC7Ls8rrgsreZEUUybawBjRszuEHzgNPMezCc",
  "key4": "3A3b7XPYGoKSSPyYj2GkKGUiavo33iicPDaH86FZQgtwvDXoHuJfaoAGsfuiF3kRySSfBMvykQpS5nMTxaFasVeB",
  "key5": "LyurgfwRcqSeMwN1GzPnKt4pwyo6ah4b37YQvFjbFywLARySRpVHFnJarNa14SqsM4nsdqtjereCMLqvGK27NB8",
  "key6": "2we7vpUFf8FmuFqDAxZCXAH1FxnS8tGpCvQhpoAwE2cuHTKDg8mHSnsq7MZjQeaiRK6NDMG3kTTJkmvZuYmEox1p",
  "key7": "4Vrf2W21XBdjL9vQ1RB1xRPXsuCYimkCsqK8qBVs7v8P91e93Rbxvo6GL1Wqk9koudpAVWnGnYVp2CDuayB8wSdS",
  "key8": "2LQrwv6G5KK76Qd8s6udhFUaasrGzkkTQrkjqgVqtGFR1xxu5uvpaELBAcioo1MNywJQTjveF2HnshcEmjh7Qka",
  "key9": "33rr4LdLzhU7y3A9Hf3ZVa7HATVUpXKpHN13wK9uCjhYM8xyNB493xQ8L6RUqMXvrSPFrkjJasjQUeHMHMfw4N8A",
  "key10": "AVetkFgSLmhHqDssAxqXmsVwGqetL7dYYvNe3AL2YxUn7VwDrwYmF5FCJ6PxjmFQqMnaTQkGNj6YXdK7b1PhmDc",
  "key11": "ReCvARm4KjJQMZ17nKxWrfQxtMFjRPBo7AqCLU3ze1CHYUK5N3fXovp4Xainea2WN8tMRCwAQuqcVRhaEY2sEb9",
  "key12": "4WezzvMm4FXkgcHwcY4xPgjPeCH9vAjVx8P9235NDCKZ4h3q59L1URqXVqnHCSnXLhH6kzZ8KjvqafR2mcabmdwt",
  "key13": "4rhWEakmckc7p72iMjmF5NSoCQyyNL4CaRh4Pjf6w3TV4Z9zs41HxjmPoSUR5dUn49kf1Qda2L35iESYZput44Dv",
  "key14": "3B8nU2d2fJh1nm7ekWaFYCKUDx5o1oJVYabRkKqkhU8qEBQ4urckpAJSmMAX3eLqV37R8qCgbNFzZdiKePuM6P6t",
  "key15": "3daw394ayQBvztXpwJWTrhiWfoeSNdcgFdSh9SpKQuD79fwSRg6Q2zj5ESZDVeuah6jEbT2LDV5s6f2wW8G8Um4r",
  "key16": "YLELuxLo195Jr6RU2zLDSTYvgaiSc9b9zF6m11PR85qQVswibGZyD6sbUbDWhcT93BjN3aRdjH6a1vTvZ4DtGwH",
  "key17": "3EEzVCjMnrmn2bswkEz2caTWp6AyQudVd8xDo6KXzq5EctRLC2Hmu4v5VL7LWqKQjufKA9i9ctD7Nioxtykn7Viq",
  "key18": "bGVMYRKqAcGk4vLyS3ZE2BJySKefrfo4T9hj18uNWtWHBaSYdJj5hKPxfAtVXQ6qfkw7rSEwRXUHLojAV2W1BJE",
  "key19": "625Hmjgt3pWeiFyxJoz8UMTmu4F3hkX1B4XX4xmrUrwTUKWV1xQ6qvWryc3sNRrgCsH6u6rCPqQPDRS4Q9BUnBzq",
  "key20": "5GdqyPy5tXew725DfromyGbEwBTQWAu4A25J8BYiVzp7SkmPqjWfZNxGyyZmjTX1UN4BiSo4kE8s1urquzgi4hzw",
  "key21": "Dkx5TbJnmjJEdD2anwdPzysqpzL18s6Zo7ncWPXN8V4Nn9rfEemHWyHSnyvGBYmXoWeyP5SK1io5xcgE19294TB",
  "key22": "3jBqg8e9MMcHh4iwh1neuJWtS5Ln5nosNbPacVj32SSBELqETwqFWSGhCmUoP71CCSjMKZQscozch4jPsDz9RqLY",
  "key23": "4FqNvY345ZTiuiLJQ791gDWtku4hA7tWmuWhQZyu9uS6PGGVVj41WnL5Stmy9Y7DMTZxVGvwckXtbj96aZEbtWRh",
  "key24": "3cbJqzwqsxkwh3NXBA4bXUxSeVoG9SosqUpkQNmHTc3RK5R1cDaMTVP4NJSGUPFHhfHEhhrpZKinbzJCFhMa9qe3",
  "key25": "2jAxYKqeo1KZEZ8QAbmg1iEteYaY41v8wXXqMciepBBGnznEGSz7diELdVsrvy8RvJDL71xQXLPZU5jVdkonSVZF",
  "key26": "42zVJnUiALEZjMWoVModf45TsAYwt3pxtsmNHeF5kDv7HXiykafb9dfU5mtPRAdEYFSsR3tSu2pXtNi6n9V6DGmg",
  "key27": "2Y3NY69nTU9gtPp3HuJQpELV9MgPwGxnoJjVJeqMqxsRvbTszNBvVJ8hKpkRGdf63p2Si5cRSvTqnDvnQipBeebn",
  "key28": "L39oaL6md3dVMSUfMhRiPo4Y7S8pJe2AZFsBq2wpfhmhCaMt3uZrtUfFXCAL37rvBMaJub7YBzmqde2e5CkPFFP",
  "key29": "4FnEee6pSQBVbp1BbXcdW73XubzgxxYZfCSx5WHngzuHSJgSkjierY9p2jLd9QNxdCJqCnvGLY6ovRypJDNowJLw",
  "key30": "5zV8yd72omjzUfUCSXzqeGMJEdK8PTymfBDwtedp5L2hKYHfdfUAtZ7bUW8uQe99H2jWijoDvvKD1F3hy9w25Lit",
  "key31": "2gKa44so8MfKzTqr8iZFS35mr6bBX8crVAGZcMW8oGELFGnGm7vzBELnbZ28339AhFK9v4pUQGX1c8xXfJKoy3eD",
  "key32": "2vtBBzugq1n5szmcEMyGwseGdcKFNJ6XoDCocJLUAu6q267BfZAMneLGzJKVg2EQm1GYsM5gZEhEA3TEbVNdX6VB",
  "key33": "66BXPM9mNzwQbajaPJWsE6a99GNNNjiSFTQuc8WLGZYR9BJgwWytgVsr3NsndScF6739QoCTyz9enminFvCeTZDi",
  "key34": "3f5D3ZqmwWRr9VZ3kpCbqh14CMbURVCnW8nHpJeMcFicyEmS8afMGf8VfHLCt6mvzW5kZib9vqcE6m9NnhFTdDas",
  "key35": "3iwV17XhJAwraXWfGMer6UjDg5BupiGkmewF7nhxR4cTUjPBfZyEvgDfig58qhQFXDF3X5XnmrTadiVPbLEzTxfj",
  "key36": "53GoLRCSvBfBmLTF2ubEWSuYmQo8pZba7WRY3eL2ZLgL1pTRC5ZqRU9Sb6p15v1zrA2vHSkYy66goJYjVWcaS5cQ",
  "key37": "5sNLcrsufH7to1KbUJn6HWsbSMXUvwqmWznyWdiiLSSooKnkMdeGhakrqQAJNNo6EuKKpJktYg7iM7qHttUcazyK",
  "key38": "4hLpqWboZnSRG7vxJVXmfitTdExLGpfrXM4yqjtX7hTTrwjTNsd7uYY1xq1fiq6V4XD5Uyxwz5gL2hdNCUV1pU81",
  "key39": "4JfLrgbvWnAJC1zVFVn6gpfG4eXRbY5gWybmTGfyuYjm3VRQBD1zUxwRka5QrBsjdTveY91VY6LZ7M3vnh8iqUyc"
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
