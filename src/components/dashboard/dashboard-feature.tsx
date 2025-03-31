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
    "Jnwuq4DK88h4Z1DeW4dsBnCSneHps72QcwzmX1Vo2ETLaf9u6oVYjGippY2n6Gjs2hZDirHe3UxdT1WkZonQYbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33M2AFcpeYNcyDL4e6CaEF31wKVXaV5sqKVGthaw2SV1WSGBxhstFyG6wStQWN1aEZ39MYprx2Ut1qyT2vmwvYEX",
  "key1": "23PwE5BVW7tM8NcJ8ei9fKn6mHRM1erEZ9KdiietUDnRMhDpMz8ochmFK2g46w5koXTzohMJ3wEpkHFPg7vtU6si",
  "key2": "4gYQcQutKS25TR8kTnwa4WBcvcgmX8WTkVicuaefqnHHeQRyKGaY48f7gz8prH72p5p2jaWQ2NAnf2WZo2QwdhqB",
  "key3": "53eDBa3kKN3Rophy9L8y354pTpyVoBo7XqDqztsrcHrGbsFAP9YmggWPvBCw8j53k3JpHCADPp1ZFGmga3dELREC",
  "key4": "4B3LeuyZpVxxi6Btfhh4WYEsbgjYrxhESCNG4P2RWiSfCo4JuHNnWVC9DjMuGJ7FPEmY5jZMRc7Ts3nZfd8GDUeM",
  "key5": "WFnQNEgdBCChWQkqu3ks9okT5yEG6tGTQrrStUD5CdpLXVbpnw1eYNPSznaBFxayHXHtzrNREG9RV8WRqUxh8z9",
  "key6": "4eYmC1Lpmgw9jHrZBkQt1pi39ynCgnfC3MXMsfCJazYTbbucFp4dHiy3s49GYNSUJ2iuERcqrvbavNVL3uN1Bh1F",
  "key7": "2T21vzrmUsEMpkzMEGdc3GmTkSQodzGqNsUSXWGmgpxBvXjB37HvRc3prytAZiyvv7NqfrtRUBAmxj9GiWoNk4z5",
  "key8": "3pjaV27BbyKgHDyaWqTzyUmXRiwijCEBYp382rd3TBG2WmkHxaDqr1Bm9kkfbAWvDAkBSWYfrmhwdSevkmetmyWs",
  "key9": "3J4i79KyTJGK6TWHFhZPrpq4GYhDKnuf3UTpBWEGWWRyPHsTYviAnHn9ttJgbnKRgbg18neWH2S8JPm8TQ6dKnuN",
  "key10": "ZZn4vr39iurepFfbsXoxTRAqVntUfA4nP8coc7nKzfjCYdFfwFUCgUkiJLCPV5rq2cogsY1vTwfQmfV9KuCadX5",
  "key11": "5RZTXdvbSRRJumK5owJkVc1ctakSHxJMftDQPRjSp1jhW8uydGFbQHm4U68x39JLbwcW9DUjkxvURLAYZXWTymSn",
  "key12": "23DT8d7a28Crecg6njWeBbNfgdAv9WqVJ4R35iMhkdWX6oQxMmNTzJNDy3m8Q2uJTz63GYgnK7mXSwVtU4kiG1iv",
  "key13": "WfMmB5mfsB7ToVsygvUxJYdeTXczwbvM2k4SLxqG2JqaQdfpUgXPPqXjFaXHbTGDhmPzssvwC7meCaKpZrbC6r3",
  "key14": "e5NVru3g2UnMnmkbm2ScZ9t46Y6jSb2UrowSxtSBBdBjL95B3KbTVeykXvC7JZc9GjjuJ8JHhT3w7GVjj4yrX1M",
  "key15": "43fKYuyPSBoaKxe2sxJ1AJMnvDfnMfmDhWhZ4oJGmm8oDYGQdWccHSeW5JWTVrri6dBZKXLgmF17WoztmQi9LNiQ",
  "key16": "2xBWWYg7FyitmXPcwUmtELdjRQovUvEEgWuWesGYC5JVcK7nuLqVqgFR5RXCD1UTpFqr4fKQCtMXNbAk2ozA8y2s",
  "key17": "5dWWSdTqhMHk2WnfZ8FfvMjCAy9H22TbssRxfuZZPSc8iMMzkxaj1QcAdEU1Vwkvr7q8tUqTjRDXWBvvdBNVb7n6",
  "key18": "3eUXL1yqib3VCQvYJq7yoWrXkRiCwYx3m9takYe6wiih8aNtWabuxK9vbiJST45KrQvMVTCmrvwyJHH457NMi6Ke",
  "key19": "EqFmR9E2eGBCoGxxDy7719fr4tFC1Ah7MSt3KHMGEVnDmuH5b8zLC2wa7mkkfuQCwQJwD3qxZq2asCD5C25YU3j",
  "key20": "6SPGRGzwvHrap7ex79uZAofvkHawWb9UsLPBvNffyjS3EVDs7uTA4hdBGm2LkubCPPiZsZFUvEgUqVzEE9sE3xj",
  "key21": "rot8sb77Bvuk2fAFyUtVoqfvxsBHyToKgDgf54Hegk8hj63xwWsYJA9qDTnrvNw4XmGX7MAPJHKKXxBdReUm1SE",
  "key22": "27FYW2VWQdEb4KStfqUDRNRTz8hYSqtLZw317tmGHQW4qewFZUxSQLsxVJAszZmGxgaM743uGYZSTDCVuUnckDoF",
  "key23": "ACP4QqXnot2e1FP8KakQR9hfEcCuxNZ2jXWyeAvsLd2npr15PPxdNX8CW1reJu8dpbadrLrgBknZHzUVhVqRw9M",
  "key24": "4bVxXFA5GHfHgfYsLtaQYRyMKV81KPwFBg41A3KJkn3Afg4s5n1i4LLEcijATMjcpWK1usm7Fdc8QBjRQjC4XCFU",
  "key25": "2n22jn1vk7NLhUnCBGK6HhjAxn2myE75a8aF1hbAfutzs1wHi2x7s85y1BRKnm3UWdCvorT5ZXZcPabCWTpBxnHs",
  "key26": "4XKE29AhCBct2zmdjFYk3AwadqjzoL1hWNLNw95q6hbD4G2oeTRMKFu2qu7yVZAtrfyW8oXY6UrwAM4vWUbpZ6U9"
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
