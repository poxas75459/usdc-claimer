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
    "3ZVND6zGxUGW5ppgBVdHJcU9XAB5mghgjaLdPy67VKmsRZf7AVLVGH8BbfrSJ3fRG1ZW7PCjThv2eQoV8dLt8kpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jr6mAB2wouEExUSoHRRbdiDFG9kLwLAkGsAv7ash4M5o1dQLnWYvaGGqfyFsZ3dW6Ysnzw21Nqoo5bNJT853Lre",
  "key1": "3ESsPaQPZacx5ARtNbsRqwN9ofauR1VtJzQC1nVFQA2FM9JV24shSYci3DwYcPwieK9US8qDt3Avo8gHqLh2tHB6",
  "key2": "3wJt6jWgBKTvVBapzk34J7u99JACG8NHqENqafVvx3Akw1Fu8QPsouQJb9spZAVUSRkmJiYw2XHhRGJByb9WR76B",
  "key3": "5YtGXPsD92YkU9Kxpd2fXvGoS2Ffk3D72BXTDWzfUq7EzgRX1m3khjazRuYKrczHSjR9k6Pt9SChhcVF4gWV4eQq",
  "key4": "3iZvPgxZgQr9rp2XUQHkaqrgbpvBrQf1xkbdhBQcFCPcq9Q2X1FNVWAuj5xnRJ8yaXSGMea99fa5zGXgcvb7FKTd",
  "key5": "e5vMod9Qu5z9MuCepNSQn2qpSg4XerA9oeZh4cLSWNfEQUk28kwbTU2B8wFmJ7sT1bwaTEw5RzyrSvvWJpmyotb",
  "key6": "3H2WRvUX9Kq11xZRsqU7H7U31dTCNDcJ2eL8hxUhHrQV5Dc7rhCo7VKcrcmHsGwPEeajrxUsKyT42VKkZfknSqae",
  "key7": "22CnpfvbmBGY2FCAf1JSXiKHAb11dF74vwfujTF5SbWpssL8a4YMYcP2NqWNZAeQwBcE1SMUdvj2xvfFKFennSpC",
  "key8": "4rgvEuEedbMEXdWPn1jrkUBstZJgFCEBTdmAET5xkWo5ehgdkmrfy6JLTTMSh5s52L3YYKByXrgBGjywaAB3figd",
  "key9": "4kj7VcMA8MBv3rd4H3dXyawLKmy2ShuFHujcEWEW3hLW3iKKDsfi1c1CH7KM5q9hXDrcqMnVdifMajJavpmK5xoM",
  "key10": "PzxW5xU7BghRU7H9PfuqzFY8tc2hz5brnWpu62arSjGCZTftGHzhcCXfaAdCFq6FXK2DPiYPpKszqCktb6rvTBW",
  "key11": "5649sFAiPF2WNogJW9i8Sd9nAGn9BU5gAwKno9536d8UNtMLjwMozuN9pQtjSGYV4oYMGqY3bs77bKVhSFA3bvPH",
  "key12": "4zHek6E6NK5s28zDn7MUhWQzXTy874bqYS6wuz3kPqb2qXBBFT6ZWTWGEdyvTBGGkgydbtq4N7Q7dXNvXb1pbQmD",
  "key13": "5TWsxwFtmAi4qjWnD1quojpSYGz89Fw541epR6rc3vS3DCLqSZo5PeqQGskXMeLVW6fphdHcpZFK9zf3sQpbKqSx",
  "key14": "4CkNfjzLQCgQ1fTMgWeHRvqqbAxLtB9RZi2v8Lwv2hSjJ4VG3TSf22CScsrHobsLGUzdurDu4Tan2qD7pn7GZEEB",
  "key15": "66jdpUZ6xqBYwQbkBxtfqgfyYhcYggPcsxLJenuobCv4FoNhucHjP5qZ26MmXoW2o3kzxkXXDJZqefn2uC8s3bi9",
  "key16": "4mNHsvaZF6fq8dT3RUxQo8uEg4zLia4Jha8BpxAMSpkrAtqUoU5AJi45YBrQHKBTbVhLBtwGVuQCWigHnWT2AQYS",
  "key17": "3zXB3mw8zXQS96cCCVfXLngZwUeys6sBJpai8jResvQTLAQqTgyCJbMumbUB29Bj3Ur11yytjY7KzghaYLj25soQ",
  "key18": "4HF384ERsbUTy1qEVXRkqdGuWXztCxANS7AkE8GeZQkPY1HERcVwPzZtrjB2vt5B2Vhoo1Zv1tV4C1qCLGW8kPPi",
  "key19": "66p5D16qWeMwfBVrZnJGkhx6aTmHwqjoHT4qSy2FgCw4P8FqiiGNfEAASWUugKsiPxdGbf8QcGzEMtXdHv71Bskk",
  "key20": "4bbLU3wZucp5ZdYKJf5UVXF1VZQTmhsXGHAauEQdbUoUDep4jaxwHf7d1dcTjK8XPaYPb12Yseoy8kypxaHe47dK",
  "key21": "2G5xEEWRCFivMtv61tcWfKLbb6TauLFQigHNobvtEZ88YVf6yDrnzmXeRg84sPVTBTw4xZLUqnNRR8ah3Me2izbH",
  "key22": "3L2hvhLhajB54WgaFkHMYZ8dGewcozoFF1rEYNiPJB58FavVCWMZBhMuzRjxWsvc4ZjXKpsUtfF8fsGVuS5v3uwV",
  "key23": "38Sti3GEwgWSwQyNzmruJ3MZ5jrfn1QdHtfHhWbNXfyvYDWWRaug8BgSDC6F4tUH5Pc9CcQFq3Mpbe3q2BUJ6gTu",
  "key24": "5A784ZM7DHLeZmpW5qZVD3jMUXpu9sSJP3cdxsBqjYCZaM6VeunJAStbnQk45TPXbk2htFjgB9ZbwTLC6qvE8c6z",
  "key25": "316Ytxxq7XQ7zSiQyqHs4dLiuq2Mf7VZdoQVakWYdqEiGPpmJemh7RcMuYzBCKxHhrA9K2ddpRszrmkexH4vq7hu",
  "key26": "63izZQD2bkg2oPCzkzXEvLwJVYAmfMMH4wcjRbdXfTUw9uAhVLj4aHp19xApPnKT8w1Fox2QcdTBYvLfhDVoYFo3",
  "key27": "w8ZoT19p86j2JojtzLySWQDQUdTYhbvfvhGtWLZjPYXYAnytziwvq41WRs532jq4htWz4YzR7HnuwKRuZXT1ycv"
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
