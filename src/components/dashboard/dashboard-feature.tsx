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
    "3YZsEGL9KKb3Kqe2CWikeY732AQsWiiqB6kPNV3DdZvLRUUd7vVuLKF6M5dvtpYwsHKf16QqZLb6iphq6fMzWqy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ScXEbqyKEjKprPmUgnG3ZAAsmz5os6SZTi2RVCsjeMigwiWoFAjKTmSPcbhENPPNjHv96gEVEsSje3uJGXrVpk6",
  "key1": "4agD5noCGFiYvvqX9swGE2JVGFxrQi8pkqFq2yzMdp3XrH8De2X4w6pqDZwQeYsKcAaB4AthNVcycVXaxxM2Yi9C",
  "key2": "4FophpWA5gJoAd1fgbX5Megp9gWneY3aLnVNJDQRHgMDma9uZzyGEcFeR7sSmU1gBGnDUeV7QnUhNMuttkqJ4PQf",
  "key3": "26iTqcKADn2jFZ2Kxgoosx9FbRohpM4ktWJk6NERE9ik9HDXrvCpi89T9E1qR6p8o7UTYgFHtNfmTbYXeT8C7URf",
  "key4": "476J1jN1QDd1QEA9FJJiPxcJPcJPSZ45no14Gv7tU9FcUTyqxiFEZgF4ZDYmLUwVR4usudM3u68fyQGvdLUY3GxQ",
  "key5": "3pfTkM2Mzvqzigi5au6A3YH5uVixcNrxf4QHtgMdJaka5WwWetCuNiQPukoWsFHH8Q61pXbvnxk31H5SFTBGXkC7",
  "key6": "55fNEhV85ju2EYY9jfF67b4AsBsf4vLqQ9J8xjHohWT9NbJzawFXrXurWrbQE6FfDXd15rex6qHNvbPse8ci9So9",
  "key7": "3atZGFGJf5AXAjLNxzX9VNaJ5XXumqKczJ7oSGvSTVFHb9JaMJonRgK6Wos69RQ9EDs2DDg1uoFbYvmtBNKzbaX4",
  "key8": "4tbok7sXgVPP4wMvCBvKxkUkTJcxTvxStwgpirNhhShZ9cW6AHKST2Qf68V4jmuXfvKYBVmnRtUbh9XJKg9tZc8S",
  "key9": "Z4Am4h3AaYRmKT8K7fL8CwfuVbcpLsyJsFQ6dEqepdB5NCFeYQGKrvs9GfULA8e32eQxUXdGN9JJ2Pw9tpzd3Mw",
  "key10": "n9g5HfhqehRCkZbzjqd4W24pJnmxtbdYHANvaGuJ7M22a2B4c9g6bJfuNkUPSgoawoYCxa5Hf9oGKqcsnr2DPbu",
  "key11": "fq5ZvN3wapQwx3318wX8tjMmXCbGe7YkgMcCM3W2gpAKFzVHkKqYBYKYGqDSDzv4uXm5Jcg72WHjVvSqFMVfrAY",
  "key12": "mDnH7toCmDxrSFzyNSDuB6gzhhdXfbx7X8hgRiZohQ4gne8o5wEiza3HYBE6gNDKjWrH3WDzsREZEkx7vFq8B3E",
  "key13": "3fZ5UK9QsuZaSVeSynHis8pnFDzTyPg4yh3sr5Qw45j1dzRoZRnq3WGqpP8ocV3xhsNLrjFG23kcShHdWGsjgp2F",
  "key14": "3z3pLV5ahQ6W4ApwapPydMiZ62bM7o6NQuRqCwoEYbWUfMqquH6BoayTPE3tvc8hRvuR4tvqDATTeeEpU5gBZFXy",
  "key15": "HDYr75Cet1eyZstSFgAMW3tXcTQCdEgjcvCpKeuxpr1jJ1cnJ1HAd9BrCUr4NzA7LTt4BJnezACFtf7L5Y4iHsi",
  "key16": "2KLHc4XMeRFhVXVQnygFCwwbS1i5DZkbVD8q5qF8NeKEUWi3EesTFbNA1STAXjd95NiErxn7R3Jn7YFPEghx6s77",
  "key17": "3RwEAWAGT9cDiATUxAQjYnxxyLS31NjS2WJRCEQzeyCHtsAW13aRgPZcaYpTwoAg8ttwgFjGuSEJ7mkP4R1TH7xo",
  "key18": "Jp1Qm5r4CH7VBU9ub9SSBW8MHcmse9YAeNjEPoAvZJSwcHiJ66BVFscpXbvDESonYLodaKbMg15MqrVFNht6p8d",
  "key19": "21NX56Zcbh8o2yC5iYsaAE58B9BMUs6VeE81FD75cbaWTv1493xByRjjDzQ9fzbVynvdokUUmFrWMnPtzr4S4vn9",
  "key20": "9diAfnXCcsxQi4cgx2bHnpbmq9qCRNMw9unqZaGM385hwJukXU3PfBatvqDYCAigssCdr5fGMKDvxD5aBSpnmFp",
  "key21": "5GvLED6Vpmc5wRhidBfNBhKXMqq8aykXzTUN7WWCnPHz1y1mwNqgv64HEUrxUyncGJkMYBpVbmvc7AHiFTqoX1rW",
  "key22": "dH3fUDFDsJUGJeGjPEH9cHiSmKZMh4cspCpijjYh6NWVRaWJrr4pXhsQTe71Bj1W6qMRqHsB3Zwp5hihMsYqstJ",
  "key23": "vZiv3TfsLHKcFgZgDE2tWux2EVAf99Nh53yqjkkC6MyTuxVVtM9gEYmHaBrSgyiY4nMLMqWKRNbZL6KerRb97G3",
  "key24": "5xCCnor31rSjNjS2jMKo93kXzmJt26DzfGvqJPzAnoTWBY3Y8QCYcdj9uLRWLwGE3MqMXr6CFe1rYzSwhrxyyEt4",
  "key25": "3rCzVoyyuC4asyYBeWtkndjhiDit7DpPrNwBZJS6s2p19WukJxnQmCWhPM28uW6zGTmUrU5pDNUZ4cJaGhQ2XSQ",
  "key26": "2gxfE1QFMwq3Fu9CEFhVJo7L5HDxoK15rqVdMUvTZMQUMGHLuyS3ffjCXvm8XFbewRo28yvMdpyvBczppXVJVaaH",
  "key27": "ygnnHhHj7GZ4yfDDGhdTqBJAWSvqxuYahJq1EzEb2VmjUeM9V3Wo8SC1uFHhfLhHspu9vt2dPEQyypJmvaktnk2",
  "key28": "6bHRx2e4s2X9V8XgnCzAjU6vrfdujtjg8UiMynBPZBf6U3qqXw9UrNtGWn4K1AxkoQzZ1KeWVzXpD7pfGWUgZx5",
  "key29": "2fQc5rXKtH57JAamQ7ytGjwRZaVkPHaM5vhmk2hVYoU2vAF5f3MxY1yLxgxED34QefiPq6VHHNUnK9uHFTfLKhCM",
  "key30": "5iVr4Y8eeF3K9mL47vJqLAtrCZ4kfqs3hoGicueVrQ4VhzbGaGcFbkouqGzhNQMBEsWWdJVUdt5uowtTsT2Wnxdo"
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
