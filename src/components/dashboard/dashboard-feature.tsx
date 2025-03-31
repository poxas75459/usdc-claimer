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
    "4V2qVeFHN4FQ5fpk1kcwzzeqoE7b4x6uuXXAsp2UorTAgkz3abV9ZSpSxetK3HnvRjrJTKDwTYgAnevSjtrgubXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YsYF3r7pMYFh1VtkKQyKWWYdnJoVUZ5zF641VMb8AJBTMyfAC2154XMbHNfbayovX1zdvuCiogvVzHk1xwCm7PN",
  "key1": "3yHJyjUCa7Th3yqV8syHrp6XBFmvpmtBhYVCMNrmTxXxqA98seRrZf265P2Fs1YfVT7JbFqeVkM7dKoJcujrGdBc",
  "key2": "35BTujmSK69i5vK2fbkNbmqsTEYm3aicabQX65XgCGFj24J2UENr2VFeiSYeuQT2m7DTUV6yThXiAJDWNbeYMS1r",
  "key3": "3vjNEQqesD1riZof6ETzKe2sGk1WsXkSCRSgjPm5SjvPgrbvE9UUHLZrv2NEw6qPrBGhsih9xncKrpU7XCSL8HJk",
  "key4": "AxUwB3444UW8FJ5w5eofLhtvDpMwtNZ4N9AJYeKwmphi1ELXeNjFtH41mFU19bSdT2bWkLL7G5NMAxLk1Uxe4wL",
  "key5": "3U5kWLmJcjjL3bYXMKRtNppnAfNDhQKF9H1zbPfukzCPopFHJRuh5Ppr8cfJ1jCHe7Ltq5GMccSefMsLbxQfBncE",
  "key6": "4EwZ4dT9b4kmAhMVovKY8Ss6xDx5fBfqsAVmDoLFNruiXTa3iUHR1nNbkznr6XVg4P3xLrqcR3BqLudEYtMumww3",
  "key7": "5bywbmjT6s8YQ7PPVxZRyZ2ibZUE7UTqrhcPSjLysJHnexjmTXDrMsxpKNgQ9Byq3mAy3VGDXNSUcf6dQ8KMuUU1",
  "key8": "3Svdfq9pNvm9QPrEL2TP8jE8cgaLYbBok6hCQ5pwzeky4xjspPLvqDBEYsx236NjEUTY2vevHZyFvFiZX8eycxZo",
  "key9": "25JQwqaJLqcu6m9aip9MT14oEMA3BgamcCqvSCQUsg7bDtjpCczBftGQFo9NNYDNppJ7bN5b39i8Qnz3rDNJPV1U",
  "key10": "rceCAir7Vw7MNUDSeA1dFaq92YACx9DT1dhu8qVqFdiaDA7vEe82mTbJtBHKxbp4be72Q9z69SU2rvsH2ABLVC7",
  "key11": "3MCFbSEn8SazaEPJwStQG5DNZLA1mXZKtPEjEMD7VhizGijjm5nFZytvZ2Mt7LpSCzmz4JAa4tAvHztwNLfCDc15",
  "key12": "52udseyrMFsDw9xzwaEmQNoLvT41LjgcFHnsMzbcP6XRTU1tgEf78tMcc5VJisxMrJAPWaoJg5DyvQJZzWxcxKyL",
  "key13": "4k1zXQVRC9zLgYd1bGiUUwBYTUw2b8V32vNEGMFTyji7aWZ8KCPMe1Q2rK1LJPzFj1rgyd9kT2UeoiwFyJoEjJYi",
  "key14": "3rLyHYu9q2EtRP7ZbPGfqVmHFTjwFMPm7uvxVeg3WwYb2HPsAWMoBjbaPLkss9F9oo2RdZmaDCjrwFQ6h3B2ByFw",
  "key15": "3TFqtK34SmmYoiUgbxE4S48WbVsqVzokGNjdsC3tb1oy5xAmKr8zooLS9vMipZAKMSrSgqhjv1fQRi7iwLMXVVkG",
  "key16": "5FWehGt7yJJLztudSbKDXU9NnvFJHPBHHPFeUQBvCdVxdd1Nu3BjAWaVLed1eq2C4KL4iVEkWvWNE1Dq7UoDpDNt",
  "key17": "BEquzuUmkxXJU8ibMdz23TEikXkyetDAojKZ3TntfoarB9aKr2nmAyQTL77sS1gZUWaZBDg5JtFgCStGuFxNxDx",
  "key18": "5eZBBGqzp7MToPR1UrGbpArFkY5BBAZscCuXEserS64M4efc4Esqifmrvg1emG3uTiyej56aMUPEaMeYbR9bfHWj",
  "key19": "56DHiXwJXgDWrND47U14fezrDcYHdLaQ8kUrPSGNw9oZkmjhCeHxGY8z9MXhR2g6cFcSXi6T6EiJx4w2s8uFeArj",
  "key20": "3i8KN6xYd8qyJXmAqAmtjmQYwfpJSzeMniqQBEcdLtVAFDTQ11ZBieKaGCEa4BbUjnwhLuDwqzBQyEzLod3YbK7b",
  "key21": "k2KpyV3cNyBgRTQAUeM6pHUMb6HvXXSEGBp6o25Kqbzfi8a5gxnynxEFPwaWEmPiy8YT5RpADKKjBDCuL65CKHN",
  "key22": "45qWfLrHddDWfCovnxxaihrXcXdbkiBYRCARsr1aHXoLtvyXsLTtfKaQBRoDzFVyQaXEUS8nKUGLjWAZG5Tb7fs",
  "key23": "hXjzWC7U9Pso8WAMLC9cenxcoKcertzykWBSJoqqw49GQN5VKueLKuBvjWxkg2i7TnFT4DrBr5DuW1g9Qvbanhp",
  "key24": "4KdaBvPgYJeS2tTAGidLHeuFuXoeod2syDeMWCtE9VBcnYUyBoLuwiqVJG7WhdK2K769HwcNDY1ohS6gxZPkWw84",
  "key25": "4mz1hbRQCoCBZijKxSnwXNyzM7axwgcf162jMtN46jgqdNWmnn58Fb6XY639tSNmBqVbLochTT17N8efUnXJLnF",
  "key26": "2USu4UyC7uSzzVd9HsvX53CCAkFuPdmSp9WraAZHWQR7PY3acGFPVgtaHutv5PwUfd4ba1jmRHdNR8YnRSSbZU1Q",
  "key27": "5usk4fieZ38EHaZt14UxqcEjU8dCRGDCjB5TMYKps8AH66GpWCw64ULgxg5WhQ3GgQfmR6oVNjMptKLyNzgTtXWg",
  "key28": "5HVPrn8LpHqVXJ9PJgK7QXYCcEDAQNTDrWzDagkbYGT1CsEFDNhQvnmPGc2HRvvctD97FcJPCPTPwr5LLfrCxxom",
  "key29": "5P5Zv5nB8oPaVbtBJb4knVW7TijZdcBXHqhqDKrXdfrxcKZUEKEbHdmy7P5wqz1Qx3gn9p64YN9DeqHfKmd7Jjoe"
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
