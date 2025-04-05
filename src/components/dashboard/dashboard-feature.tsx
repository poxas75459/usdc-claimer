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
    "1Wodumvkh2wLp8RCdvndnKb9HXcXv7JAdQsrEaZg6TeoFkkaW2uSR39yZ8u53BvS5uvKKXWb8PyF4Tc9fCtdM93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KRU5TsMyp9eNj3LpmwzW4pXgJViJS86KVeNc5GRfpCWogmRYbvcHKdrmQnRMtVHdhgf6724yeP4h4omCsJaDj16",
  "key1": "2yYVCsffaFUMWKT1hiAps8J8e1v3SYViEBN7RBVkCyk3Zf3wohdRwGaKi774mDURo4mhsUc5qfA9P5SZL3czHWH9",
  "key2": "3UU4PXyWnNSLmd6Noj4hXrZnPq8s5ZRbYj4JGMUeFbGxNLdmHPoMbUWShLfxbh49qdsxjwwQL7FCVCurmaGgMRFs",
  "key3": "56xWnmo7ywXjGWzq6SAn7XAKK9h1xybtgKyUcVgSQfGuddK2LeTvatBGZ5oUJDpq8m1awayFYYfXikzCAY823DZr",
  "key4": "4xhFkY2wjBdmomtv94DYU9hHp4fRHqkCFGiUGpTzdh3TYYhBZfwzExU75ezdNupqxcQxjBdMEWgssf3NynWfKf7S",
  "key5": "5F93hmVjn7ZxQELS1XtLqamWVVi3eSVGubRpx4huJyoxSQ1SR6nNUxUNNqSaemWJyVMeWKrrcUPma3itFTRRkHa9",
  "key6": "2ioXWUVhfUtz6oQxbErZaKSNTiFKSGszPAwGJtfn5XYPTdSFd6aYkf1pUF416q3WJdci6Hr1MvFzDD46vz7Hw4So",
  "key7": "2G91honH3z1RPPETFfEf5GYpAj65fMsSZ6GjaoiwRjMHsvPycRP5AVybpgVi3XQB4N5UEL6q5XfbBMwcGXav53rm",
  "key8": "5KE1dk3bD5TxoBoU8uVkePY3gbKBmT8dfMuX4PMZAPM5Xo8meQqAEarj4sLuxeVwXRZiCNF5MatVmf9feG5qMb1w",
  "key9": "4qtXVHcCFVRhjpfm2RKmbQ3zZ2jrKMcjp6D8dhDkgewGCyKcYP59rUfBAWx7uKSPBkS3Hr98J6wD4urbL48DNJ13",
  "key10": "mLfBpH2EVWPyJ3EM8kWNeCuj7ZbrXSyeWhmVJJ5SjbVDwkX1p6Fa3r9JmenCMKQvTBgLj2aK1LLJfXvyfGe5avP",
  "key11": "3H8cVaytRoV77uwKjt4TFaNPp4uJmt8b5R5hjdhNxhUaBKyHo9waGyGv3dAR7R3qLiSFSzxt1mfXXzqoDam96GtS",
  "key12": "LfQkFCeqWHtNG1xJLtoMH7jSDoqVxLJuZb6s9XB2NTVD3YhtJXzgKHG9hq2wnpBfxcMecJhiHyZ9A1JNA912K5f",
  "key13": "5arfFMgxc38DeYGfyBZ9WNgNsgfJFvGf3ZVKdwzKuiwciZjsJactL9A2mpTyxNWxibVmS3jKfqnnHSzDnokg2nDq",
  "key14": "5wK1LhpmgEQ9pu9vkGhUq7Du4ujGpHDg2NRyxH1ZQsS3KMdNjtgJ1J2fFXSt6MLi7c9jAzUCAnRMGBNrheKdLMLC",
  "key15": "2WKrDVYewWnPZvuWaUSXBqj8NA1uXkgT4zdCk88PTuVLLgdqCDNHgBbK7HBFgMiK2ftPPLQBd4ToNr3XYopTKnLn",
  "key16": "4uRVqia6M97gH875zB3Sxz1KohoosjbnJJ22fyRGiuebCsYcnaSyDP9kVHMuKHP1VF1cJKp33693JB2vDSEQrscQ",
  "key17": "xrwMuD93Xhqoak2wmCZY9dKeXsiVBa8FH9ZrJZznXRZvfwmdq7rYAGDeRSKamNmrb5ks8idYcmT9mJKun2qX2FH",
  "key18": "2c4VUzctB5WGLZ7G7oAT9C6zPw8gkh2xdFXT2csG5WDe1xiZK4iFxbPeMNvNM5uEqkrXD88Wks8RzZV2cRWdYBkA",
  "key19": "2XbWqFchaKwJYFaW8mKiXJTPKNbPg87tDQkvHXXSD5Z7xdqX9ngiEmRLYugJAAcGRyM5YQiHVmf1Ryo6RNdbx8op",
  "key20": "5sDywhpUHT5YVNtminStsfR5cvVHYrFcd2UL6gJPLt3RCRqgi6sgfkBVx8DAAaaA3ii4TLtmLdq8kM9ULgCHxnYD",
  "key21": "zSftgs4Y8admoBNdF7DPutsjYyJHsEWkKCNKbzt8oSpuWPQQn3PiBaRXPyArreATQ5cnEb79RBTRxg8PpV4sp3G",
  "key22": "54VWbuqFVUXcNyBwyURWiVFqZ7W8DTt7YbnHUATRmWMvC7i3ta4wPpSYzWU7PQUwJm1k817P3HUskgdqzjk4D1Gr",
  "key23": "2KkocPhEAKuZWyfGNJMe5caWQV69bxv6Vycnz5dhLuo96d3ioDnGRqTEpwrFqEu66sQQQTNiu4VhMemFmBBks19F",
  "key24": "gSsZmGVmCn5GGXiWXzhnz2SRwtrKCQqnE7tvanwcQzXXrggQQFnhB4TCjocBQYqpFCBEwzC3jXdYR3BbKjfrQC2",
  "key25": "k2HxUBJRNDWewyvBK94ktcBDyA9zTP5zbBD81782CFxwzzYdkZ5oUiFFfFYWGPKUz5YbKnnJwZh5S9cscXNJp4p",
  "key26": "2jNgqih4NbL4T7GtHSCPzbCP9YeG8CR1upwzfVJYG3JtNYReAXBW9w9zQDGPb4njimVaTGEktWiHkkxz1V8jA6J4",
  "key27": "4KhAcWT4zaqgvafTYYWJxduuYUgiRd2wj2LyL3fLxEt4c7oX2uGtdNQRLfEkRTo357agEKxPeXgYNPeBudPWaJns",
  "key28": "4NJwNfCKXYZyaoDzoTvAeH2tP2rCRJWjKLBx7BQ1oKCq91sBm2FELmDwmbrriQShjx4SMAn7KGWs94fSG7S13uE2",
  "key29": "49wzMe1eAwYJGNQxcV4kZxK1xaTLxwpYRdL1SnovkrV9Jia9MMrUsPbrWh8KbMKqMQCAdQVXQA3hZ68ecHqoPZM1",
  "key30": "3yv1Z3HbWFGL7gZwmuxSPHEwFAvfy5yWoFQeNnizhJXrSCse1RCp8TuoCnopxzz7qDYW5sqwmQ5gxnLZ5rEbCVL7"
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
