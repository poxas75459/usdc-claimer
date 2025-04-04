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
    "5RGjV8YG2RmtzY8mY26phjjuAFjRfyRRQmJx536KoDDiDrkYZQSssT24GiFs2Jvp1NifBMATR8xg8gkAB9u5t6B4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h29uni8Uv2aXQzdfKpQfQsJ53n3YZVBpt6AcfoFgmBwM7ppGkbJvwtgymAr52d3yc2KZk4RJFhxsfas4vaf7224",
  "key1": "3RcpnUvpVvgs9RT2Jg15Lv5oXkeNLGVTej5UJpXHH5tod8ziypP1kDMKhMUKybDXtH32iHzFU8ArZ4PzeqKH7PQi",
  "key2": "bjZ6ExH1aCMoDbex3FHUfw9q1oMa4fzJDadNnWSYfpYmKzT56XnptFxaiyVtnsWrc7qraYnT114NxuG1Bhg47Wd",
  "key3": "5KMdqLnNFF4h1FfHNAcetEFqUmejxXc6nDVtC425kUUXVGmhmyzdTUVbC6qrzAVYMMVhnfe5DXPzGwgnjsFfDMNh",
  "key4": "2T7Qzib8tuHy3GsDjsM1FdgpE6NdHfwd1zw9dUURZ5VpZekwDg8mzSLktLKFkGj1tKo3dkKCF6GCrDq5vkR8yrRv",
  "key5": "4jv3RWAu5rBvQEV5D2VzNsJKQiZetQa4DYCHJELnMbhZgMLcjXT7CZ1fssK2BV9x5h5fyA5CrrBVgphxyrGShqkJ",
  "key6": "42MoVfswKgxTAKWs48tkf6WZfZXZtZW8pSXtQ885zzyEio99Qi5vq9JeHECxGXcD61gmCDRLJe7bQr5nnbL61kYF",
  "key7": "3Rj5GZMXM4AUmrRdoyr7RossySKLUJELHVC9w3mSB8tLMEMU26awfkECVFiTCBm3syUfXnMeBmZgSrt92BC5QHMo",
  "key8": "2TGQA1zAxtvnUEsvmG2DTAcGrtHULUa9pkzLowuG6SaSNg7VpQXC84u3ZcWb3ZUeqJwgzmqVj8VqPQM4GGXcPDHZ",
  "key9": "44EyZMuHcBKeHMfUsBzT2JGvh2MUqvgKN3qN4xJQZrRvZSVZuhcxrdnE8Efvj7uwi7MeThjYL7t896CmFGngBqvg",
  "key10": "5pLYo4osRP7Y2X3YCrA2Q32sCeJC4jAz6wVf8BLuYfBXu5sUGwiubAhaQ5kTiyvhh4hhLbc2Lu7tXeP7Pqsj9eBH",
  "key11": "5rGQq6ip3vmJURFegvUn8YX7n1Ym4zzz4R3LP43fN9iHqRym7cWtN7umTUJ3WRFxtpY6RZ6s8CyzUh6X7CXhdtTN",
  "key12": "5Rg5r5o3DPmh3j7hhJMxr3FcqAeeWZv1f5zk2HXTjPzEF5pumunFHu5tPJ6g2fNZjy2L3uR7jMLXxNUwB7JuxHBr",
  "key13": "4XGx8gJHxRtS8cJq5MnJK3Vv7Yy6bWRQQrqJ6MEuazF8Co19d2jD2Y1TAjdnD6cMBs2qZvNqucwr2mmY6jwykPh4",
  "key14": "2VAioowcbYvMfbyWLfJBpNSsQVR3JZ7GcpZAhnb94eYf9DaP53UPqa2kQQ2HBqvW1EHfRJTP3y3kzTnKBaikdipr",
  "key15": "3n1Jq5wqqhhn6cwmwx2pmqxrwZmyoAaPb85chHCKr41jk8h6g1f6SuVPVsMcbPHEK6SZtXyzPvE9J6nDpNPWB5F8",
  "key16": "2DpqRUxNQTaiXyTKUuhESch5Nc5oveSNxqQzF9YwBFSUQvNvYi43HwWhWMsCAL8jR8Z5qEwhQ3QrBHEtiqvZmFLy",
  "key17": "4wuWh5kxF5WoX6ti8NqojkqZcf7HAdW8R3hZHz5qmmSWYp7qRfGFJaMDBzov3GjUzv99JJfHzZtDwYnaBKzWpzer",
  "key18": "5m3fAhLoSR1uEeLWfcHNb7uKz46RBJahFXgBCEH7vrn98BJtuF73ZCHmhNMFvTcqeBynKhdZZA5LnjoK3Pj5Rzop",
  "key19": "2e4vTdBWzPswUKd9XnL5p149eYu48thDBDnUfZq7PFNmSYYH41q2rnjHEznBaEW3tZykWY3845qadAqFyfN624T9",
  "key20": "2FcQc4FZTfubvVopnHEgBuaqTDpAXo4xALZW7tZrKDiUz8JjLH7ESryjijfFDUnGGMYAiNYtwA5U89BXAgCysUss",
  "key21": "EminyDvqecp61M3tViPb15XcaU82ZgZ28z1MoJtANdr9DTPvWGcNyE8EfrthnwuP6Lj6aE9fNNqojMNNXksfhSL",
  "key22": "3nWU4gG9vokvJbsLbQiYi9PRW6tEWg4khcPPt1nKDCNVtRrNmKfDuzbuLxyFHXvcJsE9GeizUE8Wg6htDk1BbFbq",
  "key23": "pd8PPSMNg3Y8nbHHyUNJAVRsyFH4SPXgqkks1qkj2JUtSHjH35KRPdv6N8yzk575TTGNgdYgGD1jaburzbiQCJC",
  "key24": "4KsbivBwxUqvFK12tkcVSqEcVePDJ3qdi9cJNpMzSozU4XGjFdtyJqhHFG6QLLauVm6kXNy1np4TJh6953SbBnvn",
  "key25": "5Dz1cweoDVMFpNE3HXwqpF2iPAAkuZ1E1Q1cAFyuq1DWUzG3i7cmYHBh7TyoUv7YeFFKJPps16HeC387oomunkTz",
  "key26": "LXU7Z218RerL6aDxTQnM1p7VRBRfjvZbXF4aXQd9kCixyhzNTswFWDyMxeJ21AuwPgHdqQun74GqVPHst6R329G",
  "key27": "538KP6GzYTvyVREPwiwrzj4zh9LTbcXKfymZYzfJXvWdBTWn8xf2F2e26Ysp1LqVahieUySfNWE8hTydbDnrrJ4m",
  "key28": "242Apv85rbHJGCxSCYqQ1JUQ2tmgBq7sD7m6v1WxcxbwxJcjkM38s6pGLhMdkYsyjZhMfXqGQH1RZTBsZDCGiFmA",
  "key29": "3YDtPFQZcCDRjrsXmgL31dVFziBxJgwUViFdd2zVwJNjd4GkHBnH6haXtp7uqEH8ANyTTamNF1WtzELidM8oktAk",
  "key30": "4sQm1CQm2RcLa6A6Vu1Mt9XErEuD63aXczkd8qK98pd1SRz8GSZuvsHDWFiC6qWcMW3WN5gEPoQX1VgSpGnGrwgZ",
  "key31": "5yb8BXAp5AvZ3X9zs6RnRyN7CfYawDFpRXP6H9zzKNqcZhqJQpBEV3oQJs5A56YANRcEdcbcCR6TZYuvUJF1pfLN",
  "key32": "26yA3hFdDUeHysSuZ1bREZm8pDAsqBobK5Uqgc3QJRuh1M2U98WkKfGqwpduYKczZWv1q6j2nKJXUvFxuCBuZeVS",
  "key33": "3ubgM76eKMied9D7wNxNKRErRrDLMSX45JxfcsQEPuSkHvBrZU6jhxUfPBx64EUVJZWS5fz5rWV5cqeHZMYHiLXQ"
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
