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
    "HkrQv5kmXvopRxtXKsq1tGxGeZGfgu6SCH1fvJQC6rs5eU5vacRJGZiR2hPLhmUQDcvx4r99PpwPBgprNXWpRqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dtsc78q6ZaRwSwMAFA67ZjnU4msdJv6iB2GXEDnnURGs3yeXzZKzaMYeiGCiiQPfucqo3FTV9VNakBVAWts5TVR",
  "key1": "vD4KxVoSE3NhsmtHC49CS6iZd6FVwr26T7nRtPKGkKZ8CS17y726xgubvpLaLMiFuRYdnQJQaZmvrDuy7dzUbEJ",
  "key2": "47ahXbnYPTy5dWwTJ7eP4E2NmKRdC3tkZXapPQ8GYBrExubT1y185DZCpqBhyp699viZ7YtZsf17CdKNCysqbyKy",
  "key3": "5BuX6nRUVUqPWjsmZgszC6HERpcvwQZJpMuiyAP7jncFTs3Yz2A27g2WDmyYxdbThtA8EUu6Z8X5WHmP7uGgns6t",
  "key4": "5ZuGCAvceFHkmbYWRvc7qvZR395xRFETmG9hWAeeZdHtAwErYki8q7ZWwQbwpjCh5YCkwMRNsgMHXEKhBciRUD52",
  "key5": "3KfHdqy8QTzboFNowNk5kvNwAZkH2Z1PsAQ4a1pvAqx4T67WdUweKLZoBuCKydsVZLA1RzhEueDZ1zHkbXQdLq5t",
  "key6": "2QDXc1PNNcUJ61159BNVXMWNfXrsVzpMp2s3qo5P5EKZaKGJAaCDpK56V7sNfCbbDBPuAKfWm5D248GJRoco41FP",
  "key7": "449xuuTTZ5ycwogLSUctYbMXCcoFvXg5ihFzJbqNwY2znLb5ZSAWiLYkmYP8QrXSKf7pH7KvnoNpowZCXUMo5UaG",
  "key8": "5ipDYcfqfmmtjF87jXa7ybZXawPbkQbUT7QFUdAfiEBNc9G7xxSGiJ3YitzkZQ8E6aLx8XbmfxYNqzo5A7iLyWGp",
  "key9": "5DxZyg5HFiUbvLPBAdYhf3mcvAEx66AGuMdfTKcPS3gA3oKoUQc33CpMAhFEJLD8uoMK4BEndaDiiiYcsJ84wG7P",
  "key10": "28Ffimzk6DkzR98jZBJWiVbbfrpw4L8hosf426GELJr5Q9cXUo43kEyZVLFZThoHFSTVKn79gJaHa74qmQuW9xN3",
  "key11": "4xcSKqDFiWkAWV7uZiAxqVpUFc3vx3ickkmzGTCGFENMbLLMzLDLfuWfhAP6KkuCy4PvJ9w5Dew8WTmMtYCS9nwb",
  "key12": "3kt2juqvHk4vf2xTq2ehkF7TLg9WNAQLnmapLsYunrPwuKK4HQQb3Heiamyd3uUdqTSefeSSErKzeLf24HvEqGBZ",
  "key13": "28X2B7sPu5jSNLjwYT3vd3zSCqtW1aWdoP9BHoyyhFq8vSYCmRUdQ95QhxqWqYWYMYTGqmNLbyzyLHMJiWbsbR9u",
  "key14": "3uBCGvS55kyeyABwFAVSmXrar56zpWQcTrJaxJLVY9GDVsiN6CcrXujpNYTfR1oJbj9Sm8B22G4N2oVWqSrsybv6",
  "key15": "2RPrASpjcrgGWV4zuNZo2PrwybFuV5Jc8BYBvwrQgCUHTpHRKZitVnCZ23GLu3gnZgemnjpZqJ6rbsQeZgjSoSxc",
  "key16": "5LTBQTmXZSjNw8KuVYZBf56iWZ9jBXTtjYBhqL8MZb3k9RYZbHRbhCazZsCVxZzQrGZmimRGmaicdQd2jejt9u6C",
  "key17": "5X6WH5igqBh9UhVRj7tNEAPX69N4suitoA4AgFp5wzeSq16aAz4G2ktW19FLB5HhxjKjpPzeU9As2TKp9MjSgV2Y",
  "key18": "4vxepAiAHRVnAE8ppEetG8j8yfxFUinZoB95CfRSVXiByxzwdb4dSuADzFayDQmoDshJkFoW4pTuc68Rb9enonVN",
  "key19": "sZZh3r13ZezCixJFNDLPQL8xSudgmhA7rAytx65vgs6oXAYYE7zgvphamyqgwoyauiqDm7cbYYXByKFrtKxAAE3",
  "key20": "2fxZ8eRUedRNYa1UdmwfjLeMUrsMuUcgFXNNP3Zxkc1HAB4Fs3Vn16eXAS4NZLZk4dB2uWwmFEf8tNsQTXqk2r23",
  "key21": "3qEAvdyADuj1E4JUmVfiFQxMCHgW8Y6dRfw2mEctk5pUR4GPcmU5japUE7BfcHUpobrtDHB7bT6fWRmAuxbJ3dzR",
  "key22": "4jTK7oUvgBATLERwx3xSDD3S7M8AwkVmFwYKaGSSKmqvGb1QLLPv3tqA3v86zkQkhguwMvWqa6YvDzPyaRHAdx4F",
  "key23": "5VDanzsjXQLdgJYUXUfdKym1hcP4qmH77Hz5eGi8ohf3t89GcmVnu9w8Xw9b6kEBDZgr8UqxTb1UrL8PSDs9KWNB",
  "key24": "psntYwDwLxSCLWhY7WauDzofiuxiFAxC5PaBX3pjvMuiW5P4erttBxKKEfnMntcKb9MasbzmbaAjzUrHoMrbcL1",
  "key25": "2137jnKMqooYUDWpUKNobuhMwTHbjdd15QDyjSra65zbA8pp8k5yruFHZ9gsTS3e24DPhu94R3US11BJHMPRa3ji"
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
