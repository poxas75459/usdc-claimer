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
    "3yr3xEJcZzGTm4VxzEQFsM95pjGJnM8aqfTyH3PcvtkfATPCEBxUjwcv6TRYmJU4vr3ar9xkG4pnQaptzvtoemc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZMUNTyjtwJJFQoZPzU64wjFwHxz8k19fCciBYNjkEGJG1d8GNseU9xFYjYbfeyxxptWN9dY4dACDsTdmKjdPjQC",
  "key1": "2GmQq7tMG3R9ZCbhjDoJEcRweJgQYjQhZxKhM8viF6MwLwyXbkjuZmkD47uQmcd9SZqDjceLn2Py8rBEF2hHk6ki",
  "key2": "5RUWQxmd8Z8MsKzvusyjRgjYUDCHD33ruRceYaz6V2RetiK7pzBwMLBkJaBdjhFBVQ5n833rWx7RY938cM7NWWnU",
  "key3": "5NSzz34VUpHcBpY4i9c9T4D3pqq9KVmi3PyYxoPDPgZ6hP2wLBDmnBUtzFcg2v1BoqfgCU5fqheREuEeas5VT5Yd",
  "key4": "679rjfJjzGB9z312P1WTEQhiUjTyDpTEM5zZQR5oLDWsiSvwq4Butcy4qzHewehCLW5v7wjR2mDrz54yLeRXBxDA",
  "key5": "5awoebw3tUYNCFWesqhZLpTLrG8KHXb5Asd4LP24mMg4yXg2Rb2TLoRTtfm4HNZ8FLBfJGAYmT6WYeGmPLevXHKh",
  "key6": "5A5FgWSuiaXRLxJcrBsMvta2D8XKqMpS7gxHyFvwiHsprKLxc3WQxQpbYWzgCoGppXEVYePMfZpAB3Z8GpGuYK56",
  "key7": "5SXjAMERh9uy2ZSLiAbA2vBc2mM5qcSoxjU8tDwMKiyAnGTWArJJMQu46tH1PH8edArgMehGDAR94Jo5uM8LDeiJ",
  "key8": "MrhYoDMVVg3Dw47MEgsHVydtaBznenYnfG3Hx1JU9iFxAGKpgUYp1YU6rJDjZQHvzDXQjeitjbvh9HtuvzAomKB",
  "key9": "5FRYz9sdTjxmkWMdoeSM8CtLGBW65QUeGSdZL2FgN6MfVRuFTtxHZRjwGyiz2nE8jeYk4NTFTX3hSw3naLr4tUgV",
  "key10": "GeEd6YfBe1VUG527xDvmTHpweTz49xtSNbJuz2qtDgwV1ZRVRMPCWfTPSLF1Pf4DEJFTCe71JkZqdZNnu6hwVgh",
  "key11": "2stWuVz5KLsiENoqRm9BittLEnYvmd9UbJ7rLmpaEU98dHMjzZjYqks7FT3oSWJPkGEaPNeDKunPSZCybmVE11Ng",
  "key12": "3GLMiwqakqjYYfbDVehHeovvQRJ7HSDXYYG1xf3QpRzQEJqtEBCDRpajMs2tQS3PTL3KVWs9PKpui2PWwS9X9SzT",
  "key13": "5NTKLiwLycv5LD83rGApsBEFJXG2jUvSiFCey25RpwoQiiuXwfuj5grsYDt1bBdh5Rte9RsBbQJkHYuoeLpuCoHS",
  "key14": "3Z2H6Lc6uW1ndNf68qm5W9XRzLUifSW6AcBPYQEZNjT8ttyng1wFqzh586DDhufuKShHRvMKmKUZkAe8ARnqd9nC",
  "key15": "4HbDSv4XzpmNRHGGAp1wpmPEvSocaXuoC9Z8Q4AH1wSwRMHa8StRmTEj4bCg8wLCL9S61Px4aJK2BgCXN6c6WSYP",
  "key16": "q5xHZRVXEkzNLJJYawBCBrcn7573W5tdYQdUKfsMNyP6z8tnS2Hnp6njCusodQBYqEmmW2W3P65NVoV2wc5wSgx",
  "key17": "4oYBe3nRKSb1p1SjcR3Jd9FiCQvrE6WLucDTcTDzuyEjXn6fReXqbRaTwqGwq8whvCZrRHRXfyuV6P92jPGESzTo",
  "key18": "3FC13Vr44bJeK9Hx1428DuUAs7ffdFNCUyoEEHGLgTB9rowbVGPKWKkR4g5FQ72SJFJw8rjY2ixSzZmqjodUS1Nd",
  "key19": "4pKejBLvdsbEsmhz5Mf5VYrGa85cSpBx9nU2cHpZG5psjEXjxXYqGjLLVMGMxg2V42qZgx6pSuZXGdG6aPvtHEs3",
  "key20": "5kfWF6agK6WMjSTz41pBbbUZN2Hd5gBhMX6HatrgC5T3SSfQfKCb4octpSmwMbwaWZkQyHbLxveFMMtjKdDjLE7u",
  "key21": "4hz8ezeAdKhqBWqjqwEyVkpadQEMQTYpn9osS7Vs7Rk5wzB6JxNpdFc6WqxrGekBjCQcUYLo19EyzekQPJNVkTC5",
  "key22": "2SXCViu34RKjZxaJUaVf3VWSsF5DH9z3VoqCtwb3kkMRLrvdhTzKxZpEwApqa414qfVEzUm28n6YcQ3VFz7WVkjy",
  "key23": "5XmatZFL6VxCMzsQxvCssPup8stnnFLMKm14KEFziiftQQhxmueSf29zq3SQZiRLMW6MGXhBfu5TsefYeE1nBooU",
  "key24": "4Mmpzdmb3zJhiW5GrN64a8B3UUP1DWsc5GpHaTACHVhTFSS8prqhKhSD1B4A8m4q4ECLR1ixAdmZUwDCP6KrNqBn",
  "key25": "4cMfC44uLBB7Cz45TaHTHRTjwuNovovU6LE5sXhs21Ub1KqSVUxQxmYkKc1MpsEfqtfiMP3fKubBaAUtGj2k6bfC",
  "key26": "246tnkwsLoPgUunLZ64gcGVoj1g8TeMNE5Yj3ys2BhanDWerR7d7BCTBQEhWB1XsAdZ1FzHpVziXdS7NPLydoqn5",
  "key27": "3Q1DYbqNmJwZ4nnAcYzPDaGzfUmqQfToamKGW27fqcAHPuztGUyL2GfyCofX1SqLG556u4DfJLrp1SVfNYq681jL",
  "key28": "wbWXef6DBDif9zj7kUiRFMoYisyqfWfPRVUjNj4Gzo4ZK6hScjeW5QGLiV5vfqgjerprDrw2rVsX9FvLcPR4VaS"
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
