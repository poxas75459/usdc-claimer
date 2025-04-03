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
    "5ZyAaM8tRGVsHsudbZn13WAk5R5uXviw5J38FUm6YLSJ4nk19QzgLVNkQhqXwUA9xQo6UWKCbSb9Hv1qD9H1g6a6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oyx8S3DoJtQFec2YNHRX1QuSDc6FeNv6e7uSqmV2McQGxBiqq58mcgFFef3ia9fwMV7tngESNz5UXmEwkQXtVRe",
  "key1": "5MCuNDFXoJ1uXG2GyBezcBVm2fju78VEVUf34466oiNVh1UP9Am2ijjLTmDfckgkyhj7Lgw5PYQ588qJLX3qmGT9",
  "key2": "HFLR3efujLFr4r5GunhA7d97bR9281UJiHfxwU6d4dPEWxceDAW8YiupW8N8GB9rynvWBH5MmstKigzZHsVV1h9",
  "key3": "3ygFyB8ck4LNRitxQRV3yCCKTaD6DFabba8xGy98Y46Y4Xa4SkaY5jhbyhGGdf3TQHf11V7dnsKjAuPvju1uHNHM",
  "key4": "3MQVDWzKzWnzh1UYUkJ7HoMV1k6TyD2vVob9eG2c14nZHsbxTBoUYqvvxYdtFR6gqY6KQ6N5mZCVzNJRJ39umjNF",
  "key5": "5fAEzdc5QFwybTLBzyzm7SSJzNJgKTQFv5s3UanQ4Aao6NqrWmvBevQfn6GxJNFiCFqaw9bUhfUStYNhVcvwpsju",
  "key6": "4yyKE893JGPYGJX8Fg6FE7niqnfJaAGdNxnRL7p3DPrw5UbhzWqNvdetU6vKzrabbj3sNHgJHJVc4yby9DJAojtW",
  "key7": "59vBJNFyAkwUKCFh5fdaZGK8o2E7jgMsnipdtSQGzPB6Q56wh3HidmEu4GTz1p4df8tGN4cR1B2jEQ7n3PGGNn7H",
  "key8": "2eNNwQZWTGRJ2Q4kqtDxt2gPWgK1cghk8dDaYLC5eQAV4cGC2BXgvwrYCX3LHdmCkad7GvhNNJ2vuPUFsHKMRVEk",
  "key9": "2UY876K4KLvRThKdPHyTuzqDjBXxMPPw2Sk5Pz3kDmBxbhsaSdWAymvnp9TNzYfF4SgmuFEKWyVbHVFbp1byoS9r",
  "key10": "3XJ8KKYcYVetzyKgXAju5pV9C4BCnpcYr7A4DMyMs8LCiZnpdMnjCdr1zZ51npSuUVJ8iLYVBGbFPpt9XwkHsapV",
  "key11": "4EzED9eWVQzTyZ3Er2458om34GSXtX5Zd9eBPCBUpHgTc7pnnBSfDPrVmnHEE1nsWQyEpySxdrmzwn98ShMfnmmG",
  "key12": "2sCaErgxY8a7qYw2h8WMgrbJiXo5bCtecNqKdwCtK6rpKYCTbQbvjqHH35VSzx1nuSaqQ62h2frtRWvXgypveidC",
  "key13": "3cBiC8Y1REUHPrxm8RcMJpzEkDjJTRBZDDh1HKyEZAu3Kt5yVX3gphC8Wt4BqHcMbh3AQCbamkigeNhg3LjaVxEE",
  "key14": "xTm8tEM151SE1Ugr82SKj3iyGa4zYZnXepwgMEMWAVmx1BeryUeEsqDV4kC9cpthugGMbc7JFRa8FFJNCQaen3g",
  "key15": "eRDNn5wy6mFTx1nSMKX3fN58vJ6RVpSCAm2Yj39ChtUFJVcFePYKS8qSfddpPTkCfezpBuRTYhauo6WXk1oRzyY",
  "key16": "2qfrR9uWWDjgqf5BG2yDyjksgs3E59rGZQp9SXziBy6WJnS5wgWZyb69VHMu7ijvsFEQqS6m8tkZjhKQUc2aYj7R",
  "key17": "48JYEBaDJqNe7G7H4HTteSAVdJZHeTc7Pm1CsGoZo129VjGvbXg26henEEqtnHt45cgy1qVbHuS6S6XwgaBV6z33",
  "key18": "5voaZ1D6E7aosXGv7LNAVSTFnzaxaMrEs5jHn5NBULhaTRPpyoZXwj5Ugw4rc5LYuwNkWv9U3A8yexysAoDr9gzS",
  "key19": "5VS2ZJFXgK8zfJfKxxLZhPucV8zm3pnnrG8VzoVEAQcnz7HPmurGG7WP3gpQEVwk3HQAxS75PgvkragXHEB4tZ6b",
  "key20": "4vNZ16P4QDU8pLxEgWURBzn3gbfkX4A2x4hawGW6ScxU6z1ptFGvwQNbUGVPToxTB7rfcXHvcaQpwx6QB2w3pG3n",
  "key21": "487CtfYJ1Uj9JBvci8YTuxwfxTGfBsZ3LNVk1Fs9yRTSRwy4TphAk7sUYijcTgNtGuHaAun2tmb6STysVEZdMRfp",
  "key22": "3mLJ23KSjSnkuwpvYUdHos5VWkHpv7jqncXxMeK5sNdU2Qk3kGfk7KH9e5P6oLbjt7GxDyDNLZ46riw5pwDULtCC",
  "key23": "4kZQMytDNPzTvXbUjxHDywL28BEepRTGuS6yF77EupLnZHFQxbYq7ja3ryaYbgtNe23b59wDXze2tcANA1pTBiA3",
  "key24": "6qJdEpizxSehQj6fcs34NE1BryHUmDrU8CXHnUoHrC7V5Yr9ENGBrE24KKLzowjRyDe1KZ42teqK8Jaog4jSzxc",
  "key25": "4RTEVvsiDe9zPr9d6X7eSMSToSM4JE7HDEtK424gh1R7SNXtJtBk7kgHewThCrmxAoRQeNTRTKQqMJafx8ZJ1R1m",
  "key26": "53frGMYhJL2Aon4e6raK5ndH7ax9qwmqZyuP9bbVwsioahVuNbeEzrp9B6sWrf2Z8GT7HVG8GUZScTbGSKonSS92",
  "key27": "5fwJ34Wg7MDy1ySz2qpFXP3spiV8snMb552bFYKnANPPjonWGmYB4sWMM44S3xRS6wBhdSKNS4npNBPwtqNb4xwZ",
  "key28": "4N2mTzb7zonErpoL7X8mkQSo9ALVLZ21E1bQ7xxEHgoGSHYQZvVmQZhr5jTFyMtrfhaSGr6VQz2NQyqwWYsppAbM"
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
