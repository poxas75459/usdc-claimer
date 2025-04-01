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
    "2ntgFzRF783SJLGbsD5dZ7BUissLH73Kes4tFqFrUvopDatJKjWoCZQQQQ4eAqahFzZe7sGEZk7rsRA3drxym359"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yxi5JUZiUEBCbcVjQKKuXYSTFpXMRBF6nv7U8Zgu7nvG5styiToSZTYW587kSKR1PRkRdHQonVsy5j6TJ6aVpxS",
  "key1": "5j1CEkq41bbpzZ5BwWCmtT6Cy73vvW43BG1HMS3cpsHi7PwMtWT3h6Jyysb8NYtCHiYYjASQfsMGLZ85h8wb2SV",
  "key2": "2c4DDSQt8u6QLkZeqEeLjaH15oxvjP9MpHi74p2ZeHfLy8ZCCES9Ypy5m71QWLasV16SG85YUS2QyxmGYuZRMjsc",
  "key3": "3TM8xnwkiVdzBzxsprf816fj3BupU2NdcSWxXNEZ24hMX6KiLPByrd2dnVqSvJZnMToyk48J2NJoDCfEDFYa7o2C",
  "key4": "24rJXbxMoNG74qv74HMT98ZJMZ9MLquT59cAd2kpJAeoh7kzhGBZ2LSamM1qzTVFRKLrtJEN5ZmCMjxZodBudFLf",
  "key5": "5dVVDGcjkqrcBkT4TDZir25EiwRwQPoykmCoWwdeeMVKRkxw4zG2gxJwEa2sgFcePhoZqhCWLnvew4SwYtxANNo4",
  "key6": "hWZnAT8WEPy4HEWqCDgcNrtLD9imH1NDjHs5G9zV3d5b7maqqE2dvGRXp9Bi6NHyi9oB922MA7cZ2E85LAUoW7m",
  "key7": "3SNeoaBPQrzhfJf6bMDvHf55XWsS8ukjTK1yfGBASMwvPxn4q2Dz5oBMb3rQcM1fzRL3w1m5QNBhKTcxfozSUfMu",
  "key8": "5esbmCX8keV7yEcQZ8dectWoRyij9MVeZcWkdR32usD3QnPVkw812BDsjdHhvWW4bYgw2JC44WEBK83PvVTGyHjw",
  "key9": "48Lem8vrwKsSpyCNGyKHNSBn9RgrD3eWeTUYYUrAoJxdwv4VLW79QtVS6h4URgLBtewYHKkegzrxhz9H1KcaqvaT",
  "key10": "5UVtfvqfCPfXsZnvfbrvvPQ5PN2tVxzWt8R3iuFgeSXDeAiXAUZYvYE2uVs2kAGHuvsUSqG5dBoS3AT7paktpqP8",
  "key11": "2dFDcWrmkQwuVSCv9qZiWsAN7tNEbT8szeQnMFTc2GWrim9tQrhWU8BZk1VWTJiAoNJWpTkZ2dEwSeKhVqSpBKmJ",
  "key12": "2AVoe6F9nh7guBdmCz8HWjMorhbLahvHNma4Hbb5yhgjoHbJ5UMS3ihgbZhpaMko34CuAHeuYkW2coQ7BZtAKuEx",
  "key13": "5LdCbDJXrASrGx9TVMJe6dzoBiX9P91PqyNHy7wgzYow56x8jdYa5LqpNo6uc7wMhHgmR3BFaHx6uUzLSRaSLuze",
  "key14": "56tauZ3KJ97V7qwTNWqCL2bdURwC4aoSXRXb8BctMWEsLNxKUaV3pYuiyM5LX4iBGgCV1mxyjmyV1tdjYhSGqooG",
  "key15": "H196UzsRR6oL7DNjSgE8MjeH7FhCpuCBebMhoR1VSdGNjWngUg4HF1Vzk3nJHzdFDrn58JL2qrbMjAJHZKXi5aX",
  "key16": "468UNKFSCGg6u2XhkKJ6MYTm3fMqXVUNEFWdWyDSF8FsSHXAPceJoJJtputXwFvnySa8hLqiV5h6c6AgQccpWvaN",
  "key17": "2uKRMdWmDNXvN9RxciUhJdLqpkTfKto7KrWNF2BcAoqHRy5P1yjWt5CT9U92BgeQ9ATpdrcdrycR3VZnZxmbfffs",
  "key18": "h1itzWGZ3kmatJWKTzKTu1WVmF9y9eFB3Xa4g4q1XMVzmKSzJHzQq7w43g14SMkG9HE2JMgfd6hYpsdy2cZZ3Cw",
  "key19": "5rDD8tvpxWVg2emRfTByk5sZ599ZY8eY9Dx2hK1aFo1SezfADX1R1yYNGEdaqjxtDGrTiXcpah2HxCCbMeZuk8KW",
  "key20": "5DatrwLoSaLmgMvswxvWHrXJtXjArN4x4LZzb1sPjBf4zRQyD3NhnAbtsqjtjL6hVQi8SweysKRZbLnhnCkDD93q",
  "key21": "2yrQYum2kU6q17HXZb8PckThyCdoUvjiRXtQRjVm6puLhWtZ7obgSjPFabSMny7o6E8X7C2wuSGqYQ9kjCydTmaC",
  "key22": "4Zm8S2PtAuhbuC8A5A9Ah19JKZbJfuZznVVA9b3LgdFmjMUDYKkzCYuuuzpkbkWnEofbbJu6HedHZwNeAvJi6GDK",
  "key23": "4GiLwqLDgnJCTXcYK9QnGJRaeFs8Zpben12V6pCya5W1eRAkAhG5t8Ns9A76hKe9tTy7cmu8mLmcFqgN9xNbwrSU",
  "key24": "4BmV8b7vP1fEmRwrennyforYUCPCQoS4Qi81yqkRLtjZDQFmXYWG5ugdJqHJfLtY2NYTFn26jk9jy2HazSiFpJcT",
  "key25": "3vGJY2uMcg3uPXRgpeW9ba4AnhdzGQpUihsXChNtk5LQc55kwsB7XyTFe6Wab5DSVCgJejeMxnZ6tcTU38YJhUBv",
  "key26": "34dThWZRkYuumhGobimL9BaPW9UwBxAGRtvaZ4Ww6XhekD6axuVvJnefYUWZzzDvghPNPm9G5WZXU1Rzhe4fcwMz",
  "key27": "3kDU3n1eRuGJfw6WgkbMJ4TwR68WV9YDBTTVzhh39r9pFs2rBgRUQphtJTHVQkH6TJTddzk1ChVq5FjwTq3gekTf",
  "key28": "2dn9gm1ihSZKJDzva9j3LFC4sZTFN8RdaexMLnDMmkCBJ2GKpiaFSUKqWKz4QjwJ8ABuKMUpXwvUhVypp9yEQeER",
  "key29": "3o9sFWYtYQv74fB67Uop98W6DSYmyuUSLZMLuE1cqxyapzubXAvLkBwXvroPEQKiVRx71kisZbKteRLTmL4mvYp8",
  "key30": "YUak3kyFZUqNcRf6BuM3K6pL5SwMh9tEDNW7AMbQNZm1DxqH7Wiijd1DPCrNGYZLtEL8qrcEgWSWGhx53eutzPw"
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
