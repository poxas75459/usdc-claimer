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
    "hvbG21ohMMzbNJMtaJ6HZs3Vyh9AhAQts1uVZ2a7f787rLuP7jFyqoCP7V68SPYSVXLvCjQhT9xFB5gYqrQaX67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cz3YfGAsyLxgMYC4Pu9VxBECJtCiPt2gG3c7wChnscE7Zy6VmupvkMMK3biCBR3PZbLCqauxyxnHbzR7RCftfd4",
  "key1": "5rwgbyHwyAnR6TRVAgd5hRTzdRT7mzuSQJesFTQjnsBKmyBNuxfEKZcNJTrbEJxzCPsu7HdKF8YCe5jZwuuKLsdz",
  "key2": "3u6bG7qcSWZVQNXFTd6k8CFtaRjcUeF21phNvAdX9dqbUiG8yHHSkAJT9wLwo6bYmG9EjF1WXCNeaCza8SXmWUcF",
  "key3": "4u48o2ptgMdjMiE7DbYYNiawRUGLcpn7tVoWMPiLhxeSE1ui1QronGggECeLnrU1e14Q6DjcmpsFpJsPzmRqL7RG",
  "key4": "5fC4XMvYDJWueagPFafSRztVra7FzBQw6XGKKwaf9d9YJYaRX5s6ZmKk8E5YHu9EE6pyvyHbyTkVEn8xH45YmKGA",
  "key5": "3bbi4S49DvmgXPkZLBDCKD2pUnfUsg16t27me9uqnQznF4i83GbD1foW1sUM4DVKqTTqW5Zso8sPJQhPwcXSBvHT",
  "key6": "5aNhwxgbCpU5dwCmzYoBxjWBzVyMAeLb5TTJBcAtVz9QLeWcqECgKE2EsTAPTvTUKbwm36RyRWLYZHMwfvxaWwU",
  "key7": "4UMjN7WrmpvXgSPWoYPg6nKZptZxFXnRjPAJTFNEVPZsYY4TYkoSqaLAFCa4i8cGaMm6HDmxPLxM9cDB2M2kiY3U",
  "key8": "jdz9e44icKMBM2PLS74S69uy9B9aV6z29HkZskxNSkdsMrfTGX9yehBF5cmf6XT1UM4gtYJXidnibk64Rkhdrrz",
  "key9": "4wneq7dZjRDkMVjjQnb8G3oyJfaK6dzK1491gcitKz4QFaNYFbYze4dedCNk9Hs9KmbnWTKYUFnTH31zqG2g8SCS",
  "key10": "3R8f3mDQHis8VoT6oXtsh5EgQrYARU4MPdS2DAZVspaRtNsM6xZAmqvyZb31VhNHmGbeAuVp16efahuYArB7Y42U",
  "key11": "26ppSwpLCyytekJ9iLdSLcwYcqN9nCDHmtqDQhWXaJkwodMFsq2wqNKeXrn5VXRwZhGoFXTrfMprbr2XUwUbuJvR",
  "key12": "4nfYDNQohTJMJUQR3yYFnQokfbNMw3kJ24MwP74mz8pXjrtaMcE9y2x7p2Zk3q5HByye2sTt8rqaMPMy5dwCZum1",
  "key13": "4nBfVQQ7AVVk6ifBcpBZir92HgwRxphJtBWhtC552HJZdCYCNcupA8h1W2yPEqfupHvjwGifVTSkb6WNvwjzqq47",
  "key14": "5ZWwDP2iPwEerWVVQNveFUqbpoKF5Su9G1ibwCuyRF11eJeuK5UC4doeF3dbe2BEqKEHmApYps5aseaoVBJfs1om",
  "key15": "g496pGrQn7kRhSSbmuaogj6TXmToWbTYNxNMTB5LVUvbWJjT9WXph7hMMfRFNG3JbqV5WVHmd6KPch8G1zCReYv",
  "key16": "4N26eaEhABNuPPps5sF83adcVxTqiFzSX39J7X6NKjjMSthJZoADvyBJHehwKF1bze7vjY7GfFqAead8p8ckJpdJ",
  "key17": "5AdvLqRmckb3db1gkMvUTEgB5cnhW6VPyMaHyU8GnQETUQAe1Fq7zkCgWJnrtVGzdFuBTbxsRfr3kP3qKgQrz7No",
  "key18": "4aDRdjTZqoE5z2b6XrpeBUSwrhSHKDBF1ZniHyUZQJ5F39MTrmVebaGh3VXtnpnwEcZeNKEAWNjbintmfTTiuPkL",
  "key19": "vek3WKK1fUcT7UTrb8KYmk7Qr1mWK84UNU29E8EpKrLALa7YSUW24E6S4tWiYhCHyRdKnazbGH5sVV6WfLJkgA8",
  "key20": "2Mw5d2AURYMBhwjWJWjyRL3z1d6X1WepMgsueoYmXhHMyHLxR7LZNkdc55t9mfAZi9f9d6eayNL53k9qNbfJC46g",
  "key21": "5dsA61Bufh9q3Hsfh8pHKPccthZbhKfc85k73AMMtcUiqxV1rf4XDHwSJEvrFfDTzgA1yqbyqzudPnBgzv64Agfn",
  "key22": "5RT2uHq9DZEGjA4ffxqNhugq4vSjiqLvbj1zNtHbKnFBynyWGqbvRwYVP76H5LQXfLK9zxr9gSnrPHTzbkLPWRXg",
  "key23": "2WQ7Yg2zCN24ujy71h17YvPVFjBdShVEw9gNNHitfUgZebn8AvT55xGjuGpJWWPZ1sbFaxscsWWoG5xggS6PfH91",
  "key24": "5jmZk4b6bzuJDj84aeYGnkD6RkhaFXxYNg4pKk5Go9CU8kgWtXsJvRwvxk8LUYwqtXfmZTjPQxQeF7KhFZWoTd5W",
  "key25": "321SD3zNQYVhY5TXLLqB1hXT2ep2bDvmQXx4K46cJCxXnXHHsqRPvWC5XiTrPpBDiAC7XDHgaX4vQM47nuzuoYg4",
  "key26": "3CgQBmor7GYVAP5vstm3NdawauWrKCQWJxhVpRsgqffiFRaCudxmD5Xx4giyTWcewNoie2evTW3wCWG4KnLXMKty"
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
