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
    "4wzQRQfvPnxNF8MacD3F6fyL2CBk5ZtjcVYuw79dM6FmzQbR7rMz8zXYr6yfh8dPUcemgRufxL4Qk5sLTJkxfg4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RTunCLbrACyeWrGsmtxJxXFQp9mYHS635ZQgfyxc1HMjnVMWKk84UTxFLxEBwSXFJXWsx2NU1w4oHyPHZGLCWQu",
  "key1": "5kw7NwJE2W1JTM6sWcs2zyauV3ZD4vVKcBuVtCovTcBi7pmy4XapArAZcVW5gbLJa7SJF2xDQBBLzpLqAkFbvvfx",
  "key2": "59RQ8jxfJukNeUsNLhhcdLbA1CQoyxGPFbaRRW5D2o5DASHbrhbkNmTJ62jVu2ANyxx6vUdiTggtXJQuiLGu8jRc",
  "key3": "JxbvfRryGCtq9VbThmzsr5j6eXrMGuFVf8BtXWwnowQ3yAjzSj3RiJgEPT4uUzp4J2ip5xTq98HXhKCWbZtNEQc",
  "key4": "4TuAMbc1trpv9zpnhatteGpa5aCy1iPCfiNVenuWUHuo66J6iiL6M4Yc2gC3hzjpm9T14acttEKoU2JrvQTCeCRb",
  "key5": "5UKxnGHQYqsWKntGd6Hp4QHr4FJXHmBMP8zw2punoSNGvSYwsQ7NDayJaieATUSLZHSaZSHxB5z3XCdy97UCzRmS",
  "key6": "gde1GAniANNuwKigZKC9YPMJhGmR8MHDmHFKU2VBrD16BSpjCymzbijksXdjtNu1y5BWev3AcAUexFRS4QPLJjA",
  "key7": "2ZMwje1yoabTY5zgabkokpBZHtrdYXsYJfY1mRV6gvCd8fPGPUCk7P1Jisw7aRGShcjR48DGYfZeQBSxGd2qh8Z6",
  "key8": "4RxMKEC9AbCgT6tE9PoecxGAxLDZqza4QbzTPfycgaHMFjWQ7bhriTt6Bh95XWeUSN1ZzB762okvYJyv3jNooZA9",
  "key9": "2LVgyZ49v1m3YBM3sYxCNkrF9KdrGNZ9TdjjUnCY34p8QJ2VZM5HE12yJdqKiKQikQqd9Bhw4MSFq3vNunApcjhh",
  "key10": "5Gas7Af3BY9n4hPwJTyxoUbHm9QtwraHsRhtCq6LoguCjrdvMd3WJB33HEKe6NgoNeAC1zAJQFNFDVW5AYwRpwLt",
  "key11": "5Enhx7tRKmXw7u3SYHsQFQdeGdcD7sQbg8XiBMbCSMFmnroCRScFe1zWqfVe9KRhudMm5pceoESFMQ6itAkJTGdA",
  "key12": "LTcCYXUDAFs8nrDJFDRJsWqvpxX4UfTuCqyVtTt6A9sacrkb4RjV7Uc34jvosnuN2B5fjnhr2qw4DFuxaaZPPQq",
  "key13": "teKMyCKDFzNVTDGyrHfnRa5CVg7qx3hPWVC7jt4XbX7KmR6mSBR4EBtostowUuuUHbghsQTUrvNvyo8Tayp6Mhd",
  "key14": "5oyZnuynZbhUu6McZyCWHg8SEwEvCsSWrMPMpf4N3Ks6fCRycGpRQ8NFSyFtUTaq2EN5wjNhm45ZgQu3VTXtRdH3",
  "key15": "cxXP1JUKuqv8Epx6xai3bCSzHRgP3XP3jueAyRQwgukgtWCP2MN372uLZUZ6CDsZC4h9VqHxRK6rd1Yz1T6u1So",
  "key16": "3Cu5hHL6z1qUR5HKzEvqoVVz7xwrW7K2X8Q4TxGTugzWKnYZiVvvk1fjSRLkqtcU9Rk5i1d2L2EXrGVEq9jAjEsz",
  "key17": "zhVQGVmXhZoGKF86wZcT4tnFEdWvZxbv3ssVc7SirCaswFSgH2dKr1jFiZpLrn6Fj3XDLAizJLRQEJvMeURHxLX",
  "key18": "3A4b2KMuM8zcTWbpBZiGcaTZTzLcGG99ziY74aUW4hs4q1sNRZh2YW2WqtxAVArMsyPHNELVBbbExrktR9eqYCfj",
  "key19": "3ChspbMt3GKHj2NQfyxH9f6eR46pFqdz8sz8BBK2qyUfubDH4erPhtF4EQX79PzRBJM949hSez2bqF4Q8AVRWTgi",
  "key20": "3oKDtC6jb7u6twyDQUuEJaeUyevUpPuhKmp4kX8ASDgYLRDm5y14darjy7k7yKd9WqS7KCYRu8mA28eCwMXA5NKT",
  "key21": "21Jq9aYQDS9QKVvQh38P5AeF1rCDHUTSje1hF381HQjrqcTcdBWHrPXH4mMcnp5U7NcKkofovM1CrPCE2MLm6VAS",
  "key22": "4aNvdNapkdJHHkJcr4kkKRVWmAJg9gB2FErDQoTesH7iLyUjB7TRBnQ4Cc69JJ7B6YLFaA97D99JHVn868F6NtMk",
  "key23": "EeXAjMnbGwcZnSdMhQaTXioF36Uj3tXc8e6bDpLomapV4zUUgsFpLFxfjoZx96ED3PaCc5ShvqgT7YF5SikFauc",
  "key24": "5aT5vYdxC8DKdCyag8nt1M8aPuyg8WuMsthLHvkuzHCQAZmGQbat7tMY3ZKKZAUSrEKtnxYwGofZ4oUobBgKSa2j",
  "key25": "3Z2gUKd62Mx4vwp2j23Lnwrx7eQ9ZzMDA2b12kYenkwUFgyDZXvHuDEHhCpPe1VnJnzUeJU4gwfoeZLW9wL4ffNC",
  "key26": "2szdUnfEQpHtXkrYkLqw977baJMBb3QuUb77sQGpNpkZ9SokXnHRU6ZNw6dQo9jpA5wDuo6jBmiocJPaWffHsT5J",
  "key27": "268uX73bzpRfjvuggLoST1cA9CfYqkMYohnADsuZR9JNWFnQQTvPrZSnTfXSZq7PHsWu8sTyZv75T4W2KLKwAB11",
  "key28": "3m3uMPJyfzaw5b5X2amraYCq6i2G76Kn9erE8NzZHWrHNmSPQNrnWazjoRPnfZZEyx2GeyxhSpifX25kGCAYt2mm",
  "key29": "4Qe4pLbKwwzvVs93axpnTiy4eESACThhfVDGwMzTrRVxom8EXzbnPRhQfdPtfBxeDgAUrYZ71RMx6CLzjhihm6R8",
  "key30": "4HhCTaTqbdo4Z1WJ97Bfwmdo5nM2jBdsW6mUcPfcNCjpKNKc6Wu8GTWMxVw5GGjo7QvNnkV94JH9SqmQgK7EA5Zm",
  "key31": "4FsqnQERhcYrZKhPf3Wuy7QcZpZB3NPM9RtSuHGLtZHJwBn7eBDMtTy46gMyJfawg6zJtpekAUXiiyLYScHk8hGP",
  "key32": "5dNk8gdo5fPqPN14786GbKB7Nq72H8r1TcDFMrrJfMFEWrYo7JLEH2ZzWg9PoFdaroaDMtz1ouedX8cyVbCT8fTv"
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
