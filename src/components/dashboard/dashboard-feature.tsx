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
    "28B3pJPfMTtF8vqdWr8omRmQTWLBVdNfNqcLiBKHscwKF9tjzH2hNXxzyWzu6gUDEh2UyJRXM3CqjvFiG29XdjEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ptsnMQk52UNpAga4cXXBTGTNChJn9Hzz1C2avwKbpUAQJMwxEnBpF1y31gpwuAUPqmQaH59RU884eM2Fuqp31A",
  "key1": "4wDgEU79sPFwSJZM25aovwbWzWG9hPL7Rf54Ch7rUk3rPB3VkHLgFENALdpzPMuhZo2TdYMxsmX9ZJtC8SexU9Pd",
  "key2": "iNqZeErgL9rnLkSb28y6hozH6ddgZXD3EEkB3EbEYVEVPbE4bqs6jY9iT5h6Fhwk2gK1hWgExvHTcKLbHDhRyHy",
  "key3": "3MYXvpVftnGBmSiX5psHdafouoBjHJymvQLCSdCkTknVuK27PVLY4BskjDAgwP4rk5rxzTCZCEkYqFrk4Ji764ew",
  "key4": "NvdbFMAv9XdQJwzgqMVXt8eRX5Zc9Nqt4FqmrrFKQ4yWaNN65rJDUhPz2usJkLR3sPgr8LKqLEyymhPcUPxJCaJ",
  "key5": "5V3P5L3nnLLMpshwkaG3BMR6mFp2cZfJZxLx3fJ6YQrR2RqniX8q2rJGGYJ2T3GBaGNtgdjUjWBPBZ5tkqzArbCP",
  "key6": "3EKxJAPGxH83rHbAbA8hXSi9WNxFvTiamzYiQuPDcwuek3XYwJN8VxNRaTuV3bs6ctsxCzAREjVkGGpAU4Y6ja8B",
  "key7": "5FzDE8jQXZs26eoLaumxwCPEGMTiRAyZk42CsmEWYHAku7YQp9Se8ExUH7YoZUkAD2LukRHxru451meJaopc1Lfx",
  "key8": "2farKadS6oNQFURBoWBP1nWQMkTzyA2ChsfxuniHxZxgbKJTHUnh1tf82fDhifzJWhu1u1WnLhShWw62C8HfxkTP",
  "key9": "4qG7H98nbgPMkoJaqvWukM2Bm8S1aXNidgxfBqLH6hYadeoj5AgdYyjMLCxHw3VLeoo4gURzUQt55Ys5f9caYBDW",
  "key10": "FBbvQJBrWzxdDHJid87j6AfSyMtp5LD89bypuc2JdCa8r29kiVWs51jiehcANtdph7ZHtzSce7orbgGCW82RuXk",
  "key11": "2QZxXcgei3EuZMKz5JYpLj8QYZFRTodMLXpEGBcXopduS6iUdvR1W4gbT9HzWK4aeSg8rqeXGwGgzuqfWD6ksKvm",
  "key12": "2N5Nce59yjBNYL3woExisZRcaiQcZMR3D1fyvqP1cSWL9WPQZxur855YzQ5Q8ubysBWgZBsUdVjn3r29ASQHACWf",
  "key13": "5anyZDU87gGbozXKzxeEXw2qH2TKCnTAa1XcSChC8Ms1q5YAxe8mzxbTcg68hzWXAvN7hq4uoqvZ8hVX1ei6gaCJ",
  "key14": "5LQrqwgRHFh6rYeV1JqnQbVxqgWafvwKibp4SHDsGqZR5g5f21zvY3zGrfkGWfWUzZcbFERb2uj8dDXKAxCULzyM",
  "key15": "ivQbR4mqki7Jyfq5gAMpHmggn947RWwzSBWZPzgXfyQSFgbm7qkMM5fxbEsHEeZcXf2uvr9DKU8L9DAgFzdbGLp",
  "key16": "4VLu33bvsutAgDrCPdjr6oQuhKvgJiGuv9SDzZQT8jXdKSKmYWS9inA645NHe9AZwUmh5tcxAVwuNGuroEkUGPqb",
  "key17": "2GQnUGp8sHRcWyJNEE2ECnNvX3ScNdNZimUXWVQX8F3TBdzt3sHE2nXTQm8L8wjqzSLWUuXywpiiXNpRyrcExZVj",
  "key18": "3PUh6JfkBFduyoBeKHw3RczvcxQ8gGpYMMU11dt5m8GQyf3wSzzi42gpcoAUvHRTepDDsfb28wBZq3ZNLGQABonW",
  "key19": "5masi8CsE78eSphpLxaquGxCQhrXoFG4JDsfFdk8gmYBC3xxYczghmWu2hdaoHecEprkh8JAwPoWN3R6QXSspoo5",
  "key20": "5jdNJ3T6KGZ8ZynGRq3F51TnikBHkUeHHhqLf6W8ywQSaa3MfnLa1sUFwKQm93XcviSpKpXy49hcKGVRPUq7SBSk",
  "key21": "2bmLujfcr3ZAw2hhteiHFerKXaQWi5gXEvv2oGyDhC16RMGeHMsFkueBCMp63f2cvfGA8xuie7dSeGG4mD3hkoWV",
  "key22": "4gNFbAbTcEzAUu4oGo7r6iNiH7Jxo8pNA914weTCmfDYKgSckyPoiVzBQMcjizC9PzVK81WXAzHmU98FFTcLRpHY",
  "key23": "4AGQaGHapGFN2JstSNKRMjcVFhBYUu3juZE6YWHtw4g4DLMH3BMmivnimE9tWoZziZL62Eyy6ieub4nXn95VzEsV",
  "key24": "2QpzZqkMoUKCuRPHRv3A2NyzuNRtRL9kJs23XDNDCNhERgWFvj5Sh7R61xZ3fxwcWtU2biws5ANzLbYoAaguSoQv",
  "key25": "4SfdeMYj27LpjHRMduopzAebJsK1jcB2Px1TTJfBwAajBDAUk5gQwLL3Ba5kBRL2Lsd6LFsVNyP3RCZrMuzZ4nGC",
  "key26": "5udNHnJWBfMtG8PhE6meTzsSCXrPk5s8ijuZLRaYmdmUV9XU1Dbxto7HUdvePUi5uDBYb4EMKGfNKQcefVivzKci",
  "key27": "21EVzd7RBjJ4PKff3vBhWDp7EnMoHbmH3ig8FfWQz7fH7ugZyktyYrnJFZqMz4NPhtKNtKfXwTzCd95afus4b6Xq"
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
