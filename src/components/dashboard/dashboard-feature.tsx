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
    "3PX9MyacHuxq2DtJK8Rs1L7nL1EaU1bJDaJCzjbJvLq82wKk9u8xoMWMdqJJWoGLdvh7cVJfPxgqyAyRSzit9hsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J2hDgzykVayWnKBpifQCdgBnLrLSPxBbBK1BdZBWVbYKcoUR8KzBndXnUUkXMgwPJrtMi88ZWuwvDk5sFn4i3vE",
  "key1": "wE3xVGyD72AW4ZZihR6wjrj9EP7w7XkpyYu2UTrCr65VqS4wsB1qBn2YdVQAvcQQnGvmAhAGHHHEqAVaj5Ysqov",
  "key2": "215KX9xgPyzea7h3bBSD7uFJPSHVFiNExJya2LW7frrHkY5nD1UNfd6EmtKhovgn8SMccL8JgrwsUXZeG5Tb54iJ",
  "key3": "3pf1sNJjcFc1jX84fDzRup3n3pvzWGGjGYCZnAUj8aKsjdWtoayRp2AAnoUXUGNAHkFx6Kt7QSsXKvBQr8djzWWu",
  "key4": "g5QDubspRS8K9WJR5PF7cm6UK2AF1EKy1RoMMnCUeMQVVVQkAYubeV6mR1dUmqdYrwNMwXAqMc8SfEJeWa2VoRh",
  "key5": "36QJHgqRJyELpF7sNRqwS5bxpH6sxcWoWfa4PJynTDFqhLufGGeasLjmVrzZTh5hoQLWArqVkpPao2CHkVU6m28a",
  "key6": "39HgXWfYJYziivfbr618dJ97GCpu6iP8eebGR4ARd2PSyEJLHH43P8RXWK56oYgxDgBwTmzrA8uQL5fvPeo87aJg",
  "key7": "5KQGTL6BmaiNm38zqD6VDiZN2Sp2ooz7b6TTx91gF838hX5uQ1KdpFkkycBrFNi7RaDE6eS3xmoj7NNJ3FvwH8g7",
  "key8": "46bXPH1hmawjPTGHRAMgzmw6PziypHJMMtRZGHZXt8WVzhkqpQwFFpZ8L5UGGBwD353z6TWNcGUa7jjY8xLKtWPA",
  "key9": "KHWGeBkLWCpqeqQvBFeZ5RpiVsFY9Np8pya6bJqoMQviqPbAnQhQaAiFMvh7k2ACM5pAygYyoLGj6JTJVyY43BN",
  "key10": "2Bb69eEEQnejtwiLiTgYBuUBocezzG6Z9LALTvbybTGYLY5MqLMW11NcUtqeuth6ppSMiMXkcm5r8h7Kzf2DRZ9",
  "key11": "3rDJn97xJJMDbEjt7rfKrVvSEPneHF83hYzoE2xHTVXUofDhZF2ZXFtpcsGAA3Th39XT5xcVfeTiTa8TTVcZi3js",
  "key12": "79rheexubxLNwn6hdDP8f6CUyC3RjEGg2APEVkHXXynXWKgqA3ZDjGTLkbLDPtLwV5wpNbRjXEcRrqY1us92Sw2",
  "key13": "5XyCpu6A1wpZEk4kpBVy3E4dSRrKhB4bQgH9HdnJow6U2WtrNPCfUs391Zwr2x4eZyccXzsEQP9jDuRRPBvhV9FF",
  "key14": "2wWFhYoV7yBd9PWpu6TqrCJjDfxQimTKsXdcdt8dYfU7HZ2gVGmHcUbVis4CwqLkjRe8rD9pjaWdymLBmLKv5Kho",
  "key15": "2R2b9XM9MwyqkydQ7ouKBvGtLZAt1daw8ekMxSr6p5V24A5HgvukS44EiQg2yvh1Y1Z8FeznnFjWiPmkPBwVTujG",
  "key16": "2uVDM3xpAy1eUBqjqfpaHc9cEv9wgGbdnFRsXDQnkNvoCDcwPYcaBao9wQGhFBkz9wBL2hLJpVhbK2ag72iewuX6",
  "key17": "99hTNX7WUKPC1AaDkLb45HAvApEs8A1Ss6HXsaURbWZV8wd9BiFJTjXvXv91gX6a2U3BfPzcFTV3F6pZWT3HdW2",
  "key18": "4Ea7YGqF4dFMwoX2d18V8ELsEkie2PxEvmN3ptsxeTaJWB4qweQLVdMvCaUHNAYGW3Pta64zvBBbG3AYjp8ajwNc",
  "key19": "5k2hDXTYzShznsy8yHZhZvh7QdhGdjRZwmTEd5iM1WACfMaK6FY1mRnSGAdqupMHa3vUisxGWbzM5RhGJE61wcrH",
  "key20": "4xDab8NCpcc68i3AV9Ac5QktDxbmuXnTpePazp5cDZ6rMsWmh6eWQ1qq7putF3ArJap7Gg2eQmR4yRujaiNYmDFF",
  "key21": "31HLKThuPh4eZTvDybf5WLi3fzheXFJ4c8WYASFqdKNJiaHRbm7KykbnWQcW86ne6vN2mQGfcRMvk1WDtDZsM6xa",
  "key22": "3By5jPszgemKTta8BwR4tVGiiTGXLmf7dpe19y9TAoxF9vjLJNfa9wJgaPedy1sf4URmGVr3Wh4H4QvbYRWyq83B",
  "key23": "5XLwSNzDAKheDt2uaSGksvXVmjJNdJA1Lo1yaD3jmBnKzkXaT5EgM258QwBST5UyC52fnvSfaSZefQZik2YZKuBV",
  "key24": "53caYSSxTrC9LBg8XEReNNS7GReSQ2V4APkRGtnBbG3nkGu2V8dg527mygACZcRwLQFRgkiH1i8QpAbBjantpjkm"
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
