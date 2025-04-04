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
    "4589zRLQi6kuaFqqxxqgeWAxNV9mPphpMpggH9epQegfS1VqrQTRNg6BqqmxKFAX6ZkrBSfzNeDXvpnHn8uV8mbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BQprSdeEFJScY213DypCGYLMjYr9Y6wiWmHkGkzGHbgamDBtmpU7seTo3cSnv231yZfFzDxhuu7nKc12FgVe8Na",
  "key1": "3Xep5kgkQFozWTNLjLHXVTSq3zseM53c1Hw52g7yoPNUYLyytoevWo5CwZJfWcjk8NUz4byL1benyuNXGdoLt7da",
  "key2": "4QyfkP9W28kuKAdTwTNLybDbwRtTdfoYZyBhCXZrvBGXXGRmrWfSBLJLrjF5gDSLHJQ2VuHE88NyDeojgsqcRpvV",
  "key3": "4ChwknbfoZmLqZWHWEkujy6fT38pSC7TtHi4At562var1C1p468XNH8cjt8Ar1gQgjwi9fGDNDAZJ2aYs3DCTKUx",
  "key4": "2AKWiKDyaRVyQvRzS8m8japmihQxxNX29z9HbUhUEWs7wJdTxYQTZkVhtaHYgHzfPwYxEqRCHKu66oCCbp9oRJDy",
  "key5": "3qs245Vwb1jWyoVRFNHbqK9T45zfworyqV8EtLbdpGutAKjC2sAQNLYkhdaLmQTiJUUoqtHfDLLSEwMYKWPz3ZNv",
  "key6": "4R4j73Q3qDYSk4V7FGdx7e1JxK5cFw8rJV5mrk3Y3puDfsfVNWcRbxrmMDn52tganhtjo26QtqhNae7MCHY9nJdd",
  "key7": "3rmtuBiE7xQpyRAx4vB3rRMsqckPkBTtVajwHCiptRjy1jGAwSWQRbEBmHzRz4CSmLQJcxc8Wgi8yzEVqkYBW9Lz",
  "key8": "4PBq9c3TEmw3RshCBVjPNv8vA8Ft4zmRuhNUBrPRsKYNpjYi2x4iouo4YuCXjem5y6XZZUCVQfHNWGjWSKbnjakd",
  "key9": "2oQTJ9UaUtReHDkntb4ze3p4w5XFyn2dEDx9KkkD4UA7s6jpmrPRdW3dVeicZgoqCwMgtmPc2DRRz6EYAZJpr3vn",
  "key10": "5P9qHkKJLJaJsAPD4kxvN8wqZNqXLUUoBnBMtfTCgGnRm7bKdX9qcXNTkhvxScYUqTqp3SBvYs1vKceSxs1jdm6j",
  "key11": "44gNJ3nXuG4dhzoVG3S7tYdZf9hUWXC5eG4c2jKj8HBJ7qrg7vmMw2NUbj9fbRWpTVpH8TL5AbUi5CYMBXxAT9Ka",
  "key12": "2pxuRdW9emHk9m3dDmQyEpEugi6acgzpDDNWZjBjVTsLQDfMUkCUmiEu4Dk9opE4TmQb6Pa75bMgWvKtCrf1wNWv",
  "key13": "S6U4seuNCEkcwhp1Zhp9XJ3xhMWgg2vsALnkNBwD3P8FpiBcqSHZQevpzy6Vm5oDo6bphnAuczzSoswVNv2E6iD",
  "key14": "96vq7zbqXP3VsYvyHL7sqXJYQGzUAyKwKN1ZWEzhxz2SxTkbDHpDs98P3L3Aqm7AqfBLNeQZv9FoTv75M34KjQ3",
  "key15": "U7LCZShSkU2vzDnYFSehTmBC6tqFbZdzWNpTRoLTTG37vscqF6zipC1Aw7VLhGN4ALLBv7YhBXYRdfSQA4HdGSd",
  "key16": "4mYCN9dQrfgVTMcu44KmHufhoLrVhuksdByk4KBLCgXn4YkryCGqMBpJNRTy8q53yGo22tNJvkgUDAamBdoC1Ygx",
  "key17": "5LuZZqUeZDLTWPaw5pqMVC2T1d5bMFyvPVbCTTWWEqLvo45tY3tzujLsxPgGfSERfi5SbVm5nk5jBsEkAWTZF7YN",
  "key18": "33qXcDtwvCs7mahdGwYj7gdE81KfFD2ecck5FS7rGREjAaZVCRVHsWam8ERdCTdmzHyB8Y2KVc8AAVKfDGnZ2rS",
  "key19": "37xejH7b8XjvdANSmEpCSBMm2WBrTLfP9Jg3Lr3GAC4sCBWAcQZTHzNLdufLXT2QYeJuf2cCAWEmNLjTxjUQJ66g",
  "key20": "287C2PjkYjXPcPypLag8exgKuWisKZ9Wahhenks1mAF7pVs5TxMBE5WySEZvnzr71AcafT8EH1QGNtFz9Miiq2DV",
  "key21": "91LSTDKEcG5ZHAznxdExBpiJTGukbXWYevDz5csgy4UCFh4yLKMsALM9xk4K3Dxau3tzHU5RZx5HnGpt35FZNdS",
  "key22": "2Z43xR5LSyFp5nDnCghNkHuViDSp6EQXtzd9QFDKyU3NugA3TYRRMfe3UZzug764aaFyW6pX5tHEty7MMHkjShqU",
  "key23": "4gVhjW1RVUrBxgskTjF7ksUqL1XU1cxadpatMQZQq8v6s2oTC4UmJhrrKGRHCzu9kyz7LnvPiSa8gQdM2vjqcoHu",
  "key24": "2fTbceebhayRFYhbDS8VSoTAWy4hdKrsJifYZJYjq9MkYu6xT2eC8G7JjjddK6sesczDNu92gzPnPbEeYqoQYYSW",
  "key25": "JqGKyLGTw46ogc8CX7c3TNaZrB4JLxx3GDBSRR1Q8D6ftmFPuYw68k9RhgFsCgfMtdGYVoqQutip1A1SN537CaY",
  "key26": "25Zryc1xT46crfkFyLg7LNS5KNXuuWhjMXH9rwgaH5yu4KhtHwv9YMtKwxS2ETnVu99eQh6bynNCr3unAxrwqkd6",
  "key27": "4Mxq21K6boVPvVZTPQr2YM8GPHU58ZnrtKG9iUuL3ozZ5U6DZstsKDXZHT9V4zUrpd4W6BM2dFkoBPBT1ytkrTh4",
  "key28": "2uNtA8zdD8PkixBZZV4GiFbw1ZN9eD6edXVg71PrB9ZtQ1ixHWDwKJJZ97PjATBfE5yeCRDMWzytMgeXHpURsxxQ",
  "key29": "5BLiPExoarvptpVS3K8dd7J7TMzRd2UuvuYkFW1xJxZKw7uWNRj3AAG42dMM6fdgCvKtctyUDA8Ra3nGupjzddga",
  "key30": "4bu7uLKPGjYNk5Yt1G7Hrez21LTEX15SfunB2qZAa3jJqnmWu2Ah32dWGC1nDiGKWQeFm87CtyU64PhdxJmUS61Y",
  "key31": "61y9bXp8D5eK1oCdYohVj5rQqq3tZNqaqCs8tET9onXpTZjT6xoNzgF6YDAjrQhhjnVbbJQ45NGfnmdNBHho96os",
  "key32": "5VGTMPBejt7ZxPHuKZcZdcQ9JhTuUL8NAVFhYo2bC3XviqzNkrBqikW4Njkx5RkMX8a7EJS1ML5s3g386gci47o1",
  "key33": "2En722hBZqJq3JoUzYTAFxpAUfn12WWR1fGiM3pa1ytUdxJJAfJamy6vf8vnK6oxpKGePwWUjKtEnNpyaCouudyQ"
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
