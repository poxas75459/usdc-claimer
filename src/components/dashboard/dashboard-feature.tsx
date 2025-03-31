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
    "2kSspAAUAHFgWiJSVe9rSj6vomGzF9BLMP24q7ZNPicgtfJZZThx6sw5BhSzMeeyjAnuusPjUxf7L4X1WFs9HADy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JQ36HeB3chdLNQwrLjBVZESBNhmHz4KH5jiVnthgEKYjG7yKaBcWgSCfkZmYM4DPkXjf6Ap5CgBMEwbdxmUVK4b",
  "key1": "4prSpQFbvjY26FWEbSU3jfiMoE6jG6ybmPFwi1vXidu43G2jEvrhGqLPQX56pU2LQCcSVcfsUdiPC9Fqv5F4iKkV",
  "key2": "2BhDLuJdo8fedSDePGTFZjYDnrihG9SqcV7FsvB5Xt3tcJsBGEHXgLZo51i59fXWuptcLGS2Wh6XAHGKwkayBFn7",
  "key3": "44MHNsQnHMpnheBjPbzQsnatu4KnFZhLqdfo7j4R8SfD1b9dFSKpyYEibFG73mBf5DeAHMMvARX3LmG2C24F87ne",
  "key4": "4UsAYn97Z3R6JtmkiRQpYpGaH1j4obdrpfvWYXg3wgTcDVmjAACRqJ4CekcZEHqZyAK7j3fart4rDZSDPMyCQScC",
  "key5": "3Vy5P9oq2VUnzdkxEXwibQsG36YZZZZFwKPSi3aayype8EXVKk3fc5YW5rRjkcx2Pm5q81M61i5khzPHkibsy2HF",
  "key6": "25t3Xy1QbSureJKqCG1Zco8Qr282CWdoNj3ymBRnPsdwfVmV6rmdkYduGt484Xn5eE64vhqrJ1ZJoAxxJqyzHbcW",
  "key7": "RppdUe2jN28YJomgR8h3PvJYrmXMwbfyN8tDz9ucno8g1uNNf8AABoo7ZjbvQVFMkuiu5uQUcgAJDnedRvoDfM4",
  "key8": "37dDfSddNWW83mJNp6o6xwsoNUQKetTEqCZhJ9FQqkq9EqLH4fYmPqupvSyXy3qkHWWHhkg9bumJTZ9u7PHvFN3B",
  "key9": "4ttxZPJ665XfyW4A2PLAfHcneMGTVrvmGTpF5Dwt22VLThiVZV7EhBSDXxvcfiAWEvBgEEiAj6ba4YNfBJSFv8CM",
  "key10": "3up8215Lode3dBHg6Bhp3xYwJDuh7ZfK1P8eT9fs2dzwdFC4NLVQ74rY38AZqXzW2Z5yF2r6ejJLBuYKkuX92Biz",
  "key11": "3cvNhxamF3tJptCp4j8rr1iUFsn5EGUXRcPBbgyXovUobpsJQgsUxh9HaZVEUMvEdjC1AH5gV6enBL1Zvpu3EnsF",
  "key12": "3jtwnmi9FAykyWiQ5AB5Rgek85xETBFoCdKVnai3RvQqhDR2P2tJSZ4A8gabch3FddCnojcuEtdaWLaqB5pDvK2U",
  "key13": "fwJKyAFJNcirWXwRD8CNRXBoDALVTNEwTU9JNpofKZhQPFqfon75yvLcu62M86Frxq7ykm1bPwPWUZvn5Zm2E7n",
  "key14": "hqkGFqBAcdF9DuVwMWjF69Xk5ZNEbJHqwD2y5ddfLmu5b33Q3VsUYbDmtX6oKaydRGzBKCeSGkA2wKs3iJaEQZG",
  "key15": "5FoE9W4abdbPWb6RWSrs9Vfocvg44AtSF7teSX8nmKdCVkPCRSmviChxuzHK1xDSZzdaYyreHs3mUFY5XESuLXM6",
  "key16": "3AnHDe1DZUjd1ENVA2HasqhdWB37sDfZKwN3nSYwcp9t6HdE573H52FiSEswa1zHwHBHzrzy51YjQNA6eEfzjJVv",
  "key17": "49xqBEf6ve8Lx5nKCFCUH7FSBgLp3jzE7NTxDYeTbv5KHBd2owpd2zGqNp9kPwaUQyV1H4nHvAyRPkj5VhMFDK4X",
  "key18": "1eCzsVJo3jdi1S7PnV5phRrsc2YYjr9jTPfUi7uRDhFcTnPEC8S243yKj75QuCmcn2BUvFb8K3DXMnKaGZq8SdD",
  "key19": "571yEDi7ZkkHnoC91wcfWboDgC2RAUDKkPYXtWqA8DUAcMc152EYGwrgmTJ4KhENeu5RnWnTk69PUt6DjfwJZTBq",
  "key20": "51vnCVWvkohcFa7uNZSp4MktwT4PgLMrWraEu8QGNnFcwYEx8ZgsfhsaYddTSMEbbEFjDwDuXJKTM9ak8f1dYDLF",
  "key21": "49zRrKZCYVudisZQVQZtK27KPq88pMVUKDRbWRGCMow6zdSEgFN1UK8QN8WUboCYZnDqrvgGxtqXhpyG73ThuubK",
  "key22": "35cwjQzN1GVVebqAHawWTr2KC8Yg6wP6rb8kgWCdhWhLX7gZH3s87AAot38eU6zCvJay42BrkJ8EF13vAc5rAL8X",
  "key23": "42HYzX1KxUHXUWmPgswmyF85S1RNc7KCbhev9oHV3KRbjj7QQEXhFngtePT2bJWyjevpkCcRFxMbDyNCC8A1V658",
  "key24": "4imvfyw3x5xE4w5e6apLyiXrHfXexGXDSKnQTT2tza5b55rMHNZP1gZxkgmr746Nzh3jE45CfdAqamtJnAA9t3HB",
  "key25": "3SHcaQkCW73iQm9rHjMKQ1YqnkGxKJydyrh2yH4d1MsYUe8tjXKf3LVFutWve2D5X3jXUj4zvgmkj9QddG4Wb1Gw"
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
