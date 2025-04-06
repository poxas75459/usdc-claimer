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
    "4fb2qENWQz4w86Q87aq2BXbyUPjcPztDqqFVggvADg5UNPfcAEBBYrpuB8RPy2MjnnhQDNu2RFM24ArCrvBCqDNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WwbTiQBTKVoT1hapzft2nJcgHj1nLsyYhoRnHfE2sXwNYpzAmx4XhUY8ZfCm4c4PPybykJpSCo77GLMTbxNvmPE",
  "key1": "2ciPDoSCCooA9g2TqESKtjBUnRGbs34WcyU69PDoGooAWRZXugHRNYdtbEYLX4us4tTjLwDVgJhjeVGi3zka9kMh",
  "key2": "3F559CodaY3yi3ugfzic7bPEaj9smGb92cvUX997y6FPNvRNXBvNPJYUEDwfY2cwtho52PV4DnEw92uzvVkMvP3X",
  "key3": "4SMtXLBFxmC1trYJRYQzi5TpWQA4sVXtV8YQuefMYPDC2CVsJFduMeGjMQLxMNLv9kMYnfmQgR4sgSDKzJov5MGL",
  "key4": "5Cir2gBJZTNpVUAu3FpeKCvMKeHMwYQ1CDkqm17ML3LJ4BmaJLnjiLkbAHkysokDjaWN7sSsnUZCYEyHDgeTxpxk",
  "key5": "UbLq9KfpYpDGpXxCvCvnxrtWRe7Z92biVdDueqgrtstX2dcQe59RkCp8xorCrGpbgiGMoQTrTy6Ds7riQFyPYgB",
  "key6": "2r175nECLGzFMPqm9AA5uVX6KDxsZfPppv1LmRjcq4JJJdVd9nwLY72DicvmmtQn81v4ebkiDwKNuAJ1wRKAMRwG",
  "key7": "2aPP4p9LyfKy4zxQXVEEhChFubBkvZ2FQJjwh85UVp6WgrzAL1WxGRq84WZXzLQaRxk3YhYQPk9CANmw2kviwot2",
  "key8": "3AeLupA8zvwykCnfSzNSDSkN2DMjLy22hDXQ2dAx7hWD6vJaK3jKxMsVmhwk67ZcsMeU6qqeG7TTVYBBPBjPXY6W",
  "key9": "hcaq9HjjRY4wxtjL9x7xQ7ch1ot49N2TgTfVJwrjsYL1GMYkRiw5TpMBebbHENnpDefAeon9FNvVwnxXwGNdtVU",
  "key10": "2hvZgQuZu5XEoUrGwhzTqn3z2HXZbSSyLbq6Pv1Arjq3JpDoNMzVYnp62qWpH8wqhvkWtYS5CnkodUaHAonEbyqS",
  "key11": "4JroTJDxrKNqwoRWZejupaRMUspjUPTZ7CcDUrUSVj6btKxNX1Qv1KE1Tt3Nu8f2XP5r8wmCYN7JN8qETjRbj8JT",
  "key12": "46AxE5qc74PtW8TBwhdkzU9inQLcjgnjH9gHD5fcSqxQ8gY5Kpv45vsDcatadZu1pa9s1mWPCaZiBXGfDt9XUbF",
  "key13": "3J5hDHFSWKEBJup2x89C4RGcxiUhY1xsuB5yCKv2fpZWY4awv6jEhe8tQ65rjbgZ1tMP4k8DRBgryYgzLNhZ6ANC",
  "key14": "4NN94ptzUCxsJXq7XV7ZyyB6iwBMM7HLpRBrWLPwsunm2bX7roSg8EzyyaFUUzu6h19Y57NJRdrF5k73kJdUGboe",
  "key15": "4urT6i8xtai4syU9sbhM65DnDDCxHZKR7UemCFrkJXDwHHKPewStsBpRUpeYc8EGyWJWeT68Yrw5nLKLF4KtiWQN",
  "key16": "24D2eqfBBfty44L8CcxyJpKksD7ujkqeJchTLjBqn8DQGAk12TAbWppc26VhThpkG4EByaVZE1kF1banHLSr31PT",
  "key17": "uFTSp6MU6mZYKjrmSHt4SQYVkePrDuLAUFpyLsHcSt9CDQdRCq8ivVzUnXnUEQ69EfvY1Fgn4BRoawbghAug2Uo",
  "key18": "1VVnUsXbxDuGtNpB1n1GeWV9v7A8NaeVk8Et5eqF7euWZ9vhGjmAsQUYd2ctKkrkSTfCN4vXUvzDVjNCuVzSGMB",
  "key19": "46ivR6kgYJcpANejqipZHWwE4yy3UReQsdvJidL3uK8iFXWgBYK7jcCDFJSKfBAi3u4maF3t1J7Z9mD1ga4nuT3U",
  "key20": "2Qw51FbwmRCb3WuRJce8Rps4v1GRnBnX25ZkdzBVQjnSHPXkNmDwuM4Pga3T9AY1koeQKLDrr8M7nXKkM6AR24kL",
  "key21": "3WcvNzmj5P7KdiTYVrDBkDyjq5gRXx2XuGnBhdYhHoRQv9ThPd5hRUS3EefrKwUpHeE7wvJrpQfcJ4r2HjQEm8qV",
  "key22": "3yxK4fcNtQPGyiZh9T1jYnXmWCXBh5viqvTWkVcNs8oz1NjizS2JT56URS6dw1ZmUCQ7Vhy2XYZmwyHTSEekMxP4",
  "key23": "3iG31XJVGhPhcyo9hSmyi4KrzPCJEnDqzpbC15gSSkzmJbLjsKuFY6hWAUWFPF4bWkoWghCF44Q7sr8GCdfUwRwB",
  "key24": "2CcdWNiWfsAo7vn5DFZQT3hxjR2Q3RNWw4Rx6djppV3vT9HC3wCmvWyKaLtP4hyZEpKYn2aYp7B5Fb7Pu7p48eoq",
  "key25": "2XiJM4ehN9ULhurgUKqiPEz6WDv9U77FrKaMKhcs4W2oQG28kuZzpLCse74MQP8xEfKEDwyegcycSjWyvDPQYYE5",
  "key26": "2CPzF5Acv228cUZVAyq1mx8ZQajsGX1iuyT7H22nKYQDhkvfKaLWwuJ82ucBLJFWu654z2Y8FW1HbwiJ4eYQ621U",
  "key27": "4yHLZJaSkkKZ1iN8ef3GsuAFdNSFCGpDtTwMxgpbFXVCn8hVSMmxgWKUKKMeb15RpvqqXMxy7eqHJguXwdsZZoby",
  "key28": "63Xmt2rSFfBDXLoETmApxC8qPCFwppuMpsradHB34qhQbQBZgKGjpeUND3akpW6VnDHXAsTjQ7nxvavv59U67E9H",
  "key29": "2RaJvHJdqoGgMCjtrM7XTfEUxKCY62YP9WJhGahXpin3zg1YmBwa4T9GqjuKL4ijiAX15MfqTiGRzaqV3V3b114d",
  "key30": "43LFAnu15puqWes595gFJfUzh9eMKYEnyPsZgFiNh3BTiPfCPb7jMuJekDDQWTXYAEE8Kg6jzShLFeRYgK1TRUn7",
  "key31": "5Asx2GWwcB9s9psa45cB48RAA8qpF8YH1QhP4bF7nCPKG3ghh4CNvmY4Bw3KdH8r7srQwUeZTtyKwgWuL5H815Xu",
  "key32": "5Xn9U94bWNZ5wXZzfZymVej4HQd6Z71uqgtGoZRhyxqsfRespjSSEWvKRktYdTcHpc67BfcRiJH86pohLQ1bJyk8",
  "key33": "5p9zhc1EpTxtzJpNPkTQxdSWGAh2uf5PEBJujrhdD7PQCbxdneEtvSg6NT3hZthsgugB7fVwbfPQVTGbmtfXNUHz",
  "key34": "5xqUXu8RSv6ny9voA94cyzJ4MbPjMWKfXvSJhKxC61VK9vaqfBEG4r1khjgLWQLiq8AQNhJG6kfVRBKTWtfyvrnG",
  "key35": "2ApUAoUZ4E7hAL3z6amnoTKo2XzVBFKzyT9BvrYM9LAtWGJFSouiZ2opS4hU3avDEfAA71ZkgK7y3BTLmVRvCh1i",
  "key36": "5ooK9w8uAzLQ1aLc5RkovGNQP7yiSGy2PcXiHZCvhivTJgCsPVjJjUha3ZJ8g5V2ak8y7uTfv3XTSE2Ssx9mBu8H"
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
