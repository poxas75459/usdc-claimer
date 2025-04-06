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
    "5VeApk2XJXvAEmuzaDcJvWaP4DT7sM5ZKiwV9LuEZMAXT2unZ1owxvAruDz9o1UZVkZGUworbhAdnvZhKdzZ15XT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AUSCAQafEnmgdS7LdCSzsXpFSvpnSYi9WYKMgN7n7QUWsjvAa4BvkpUzGkRpoyKEeXcDB8DhbGRAftfLQbQ3qe1",
  "key1": "4FZ4Kb5rce2Q1jnf9Nrdvbbtnnyed4bhx4YJbaYf4Xbfyn3ZrQDQ7LT7Ts4NDkFD84YzhKQai9GwnNB9NFaYqHRq",
  "key2": "5cknP3iPVwLpkF887i53HvrxLHKS2hqtAnUBo3dFqyQyKxVGbUbENtQcRJhXRRVhAtax591PxF1TUfvq3qM8GsiH",
  "key3": "2qWTi9wmzMgUw9q1x2Fz3EiqzK7qeLBBp3jo86MAUUkGcZrQwJZAhifU5s1Mec9rpiYDdrUNGrjvqGR9TUZrzPdF",
  "key4": "5XBbUxtw6kuwtqmv75NT1F5mBkjd2ADsT5u1agYUBRn8W6wyFd9tsA7S3ZNvDf99kS3EivjiJMnXjLvgMySoc6VJ",
  "key5": "2Lb7ukuNZjEU6b1Knrfea9vwFhMmk617bUmyGSgpjiBKhCq5Fgoi2veD9PxyFJY62RGGt4UDJ2DqVk1jiG5yt6dW",
  "key6": "hrXQ2fmetAsC79erG5gQdgmsuzFxqRdA7H3jQ1apVUa3bgKnKJdMybzZrQdkufhfdN9AScfxhw1SEQQMFzydxnX",
  "key7": "3cwojWr1PdmoAF5d776iyGHuGwATQo7fbZFMGrziq1P1auBhppSyojoXab5AzcdypM1GjjkW8RVdQUA7rVZeWk5K",
  "key8": "2DjuQbNZ9EigZhv6fBQTy4f1HJVhCcR2NhUSFrfQd58HWaKgK14bfoddxdJuBM2v7ScHcBXf61TX7SJjfrcuHdr5",
  "key9": "2t7sXMVF4P4eWEYpdepqznoBen9eagckYUHPnvbHtuFphjRchwQR7C3eZ2qfr66izQAtu3yQiu1vhLVv6p17TTTH",
  "key10": "3ZUemhGcmfNC5mkACuT8KxT7tFHRAPW96CsurwEfYNwLvx1erNQT3Vz1szCFToZ7ehQEBFePHzbX1VzUrkAA6qvq",
  "key11": "5o49Em4tuoWUQaoEmtEu5oz9HJGoe9QYFNhiou92vGQQYjmbkzx8n1AZAxPoznWPmJgnUppXUxks7Ri3vHpQ9cUu",
  "key12": "3mbT63t2RHYoCTwR9RMukMu1Vv5vvQjqG3LFA4ffAEco5KywS1ifRabqV99DPobj8RXxhfCFVXG7DVwi4FnwTPP5",
  "key13": "aYFSvo7uktHccszSZx7rFw2CHzfHL1evyu8pnwKYghxUtiejCiWuZDCDTdFJWUM6ZSWs8K7YEvnBC6fsfdpHT3N",
  "key14": "47b8HA4tEYHetpSydyjJq4tLjAxXsmsFZcTJxJJVWiJ9uDqUV6vELC6HzyE1snMnH4M9okwBV5cjBJmNGNuVLtuz",
  "key15": "3rkiTrmBQdb6SVHVmeCh8QgDeM59af8MhDDD4TGiqEqJzCkCTfqx7uziHQvTsNV3zJetmff56QUqNRtrxrrLZdV4",
  "key16": "hQNzeCfapCbQyquFWjtuw1Dapq2SnFApB7SHEE9zFcqbF2h8MiHRP6bC6MsuLrhtPrKVkrohQVnS1hANpaQXjxp",
  "key17": "3U4d7XLpwJHy8CqCSSdxNXsc91dsK27ZiAdEUDkTgsqrShYMWkLUFZDQ79VwhGqHskFyBo1pMBaVpx11NhX6owih",
  "key18": "5t3QbrYhUBC92k6Cr3bCXAbTGpqwAqgXD9tqyBvcFzZSLQuGp5mVN9fVqnASRVuBkfzopvj3om7P3hyuddXX8cQy",
  "key19": "3vBoWyCpu81PSEB8qZ9LX7EifGrYPFL4FCTa4Z46Dqnz369UJJB5rg1LYvZFrqRh4jcutuEVmJoY9twhQpby5nFt",
  "key20": "4s8bV7ZR6zEuHqWcxkN738VFVgJB34TuRD28fD2HS2XdwHDzpPrVU1ujEQrfuigeqgwKPQTygV5Nce26mWm3g5S4",
  "key21": "BKmKKZ5fTZQHsWSSKBK5tcvsJUiSx6qLRvbRJY4UokAdWjc9spXxc8qoUGNvs7AHQd4tVoQPscdk16pqt4LLZqq",
  "key22": "2xtmBgftMXZwBX8os7fQK7dJtTLRWXiPwpqnR7QjFfzZTKvUzeesCxYs9t66Tc8mFyoVeeexHXpeqVg4eKjXoDBt",
  "key23": "5aGZxrHZN45JH83D27qmk2T5WDptEhG2eUw3hzij2E1Rx8ez4Ar91m87bj4cRH2P3PbqNf9NTeXejvxXCZYRjREu",
  "key24": "4YxReznypsAyYkxGStDdgotNDHGTdBXZJTmXcf8zS1FYDBt8MuSCoLNLvTGwqfszuNd8uveCu1MQ1VuJeRgjom78",
  "key25": "mUcYxwXJ8eBvT4QGNTQctd9P9eurGBTyxXzjsawxmzKp9UocaoHBCXsBFzQy1KwbeQRFb14sNRUbwqWZtYB2nC7",
  "key26": "apqSgfQVWZM8X4wmV55vjrWXESkGg5ruBEKHwKB8MVgBjW2DATtwaQcc9kdxTTfd6o6G37pHPSPnr9zh55TNNrU",
  "key27": "2G3SouKmbQbw3fJsNZUJu5CGJdKtZSrXPJjZvFgxAsVhQPzRMHMNXbUUoAWfDYtbM4fFR5rPaCc1Pf1dw8DBWd3S",
  "key28": "47WZhEZ2rzhV1a91qX1nRrWQHDG1FNwgacNvNDoPmrasWWMNQ7FHuzsfh1a6P3TcsRoWNmsWTcEyxTzFYsnfYC8M",
  "key29": "hvw7ghLyeaaEJAdLmi3qLQXvyDgnWDLcazoAVDHVAK1bcZmbnj1LngDsF9v5yszsMzvNLCsKGZyRHUnuLkuhHtt",
  "key30": "2cDuYwDmRddD2X7PpsSs5tTEGWSKvsfW5LfjmJfUU7MyuKL1JrMLwBCKebD4B33fGkDjR5R1nKu5zAoYwjzYNYM7",
  "key31": "2WRP1xsjsy26Bin2K3UxJbH8VQeJbD9uERD4rh2EqMTpe5BgUepEmGoWZcf7SbdeX1UzZcHDmoDYJSHyHJCi5RRz",
  "key32": "3Y4iRbBnyuqjr9fZmEHzY4XFYdA8QWMTsJjRp3BAju8uJS5frRfLmybH5TJKZFKRszLBog6A27V7nwm8sig5iUYg",
  "key33": "2YiLMi9Lgr2g4q4pnRFZra4Q3QemzJMYbQPw8Q7Js7gaMf3qtMYSqvCbgxJKjwKbhb7o8W3hdSVMZ2mXDcn2aCLr"
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
