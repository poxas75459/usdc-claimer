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
    "3G6ecuggUC29hVwo3HNAgxztXQaWFZzkqvfZQq82NEjpJWSjBx4q2KQkUBn7VhfJRPi5kedp8uDWJfDEE76BzFWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FC4quciexz3gfbL7d7VPLUvcFfQjzUqFD8NPX7khBBm2End1NgeMr21EBWXc8p7PWY8BR7ynxcMKqRRp8Z3r3t2",
  "key1": "3euZkcnNijKXfNsXrucoy1UQYmwYCdpFQtoFLsJgBYS5CnPc1aDMHwCw4amdmmSFXGS6A6kz5YWX99TpNJffRyL1",
  "key2": "4pGW4EEHXD9mRS8Rv4bNj7nMsHFnLP65ZYW456MoxtAWkacqgSSC3LPwNUd5FPh2rPmFuN2Jt9WYrPM3Zg2yqg5p",
  "key3": "348UpXZHPPySFqP82851EimsuEJnKnT5HYFoFp4csn455MQPVckhTKSmfwkawYpydzU474n7yinpSJNNDMU7QjL9",
  "key4": "2kYM4ogGKbCMPEmR6prwh7Z7t7tbNaw2QohZhcZ6A4ErrwfmNrmbT369YXjtpN83Meot32UeSMwQQGCUpANiSBCk",
  "key5": "4ce6baeM7AhhJLCkCUFmZDFFnXYtJXtqRVzA8JbLfSQSfxJG5Kwv94UJUKJT49gJMAWX9ufhSESpR65CXREyHGih",
  "key6": "24HcVw4gEw4bEApxBfGqRMtDA7aWKptcXN8xMGbh1tPuUa8WVr3ruMeqmgJs6PdJ2E7ZKrP3gpRCvp6qyKiF93jP",
  "key7": "51ZeynEBeCU7iWtw1gq4k3abeRrKcedjtUAZpcEBFFgBPrdAB41UVkRYszFfuetfgknVe5pd5x5a6bdkFiynz8S7",
  "key8": "2ARmc2Vgyw9vd5v3AeCZ5uRfjvsbVoZmSu61J5G8C7TDMokgadQTGgToyHoX1MSGgfywzNs2rmJD1pkkoSeTTf8M",
  "key9": "61RyPVBd8iwwbBSZxSkW6skxqP2qHqhbHqHttiow7LivxevGg9yAEjWWxCZdXRVqU5UfRcHKA3Z9ySBYLPxtmZd6",
  "key10": "r79nUXamct73FaK5s8ZzmV2NSgrDgtngayD9RHxP4uiHhijjtSriJ1gpz69raHtez2eictaiRAHM2hY4XuHUPkf",
  "key11": "UAPYRWEunN2M9MvAhHvEGMYtHmRGQ567SBPPju94i7RvUC5itziYxKc8AKHR9CAKpJsu9wUyno4emSSVHUgHEZg",
  "key12": "4MX1MjkfciZEbHpnqVWVCShxygkKtYnYDZ7dAMRL2Dcih8DViAQGPzLWDzHHUFa25qvt9LvSPxzDkoSfm1MejvEe",
  "key13": "4yPVBVRQGqvLEjot85WUAJkS6RiWEPQ52gdujhDcMHxpgL1aVmQ3TTwzQ47SXtLPdmHwvzM1BPw8Prsip7ud8GzK",
  "key14": "4cdoAveLyebZkPzLMtP6CLbh3dAmRvVTzFnofMdjMqvnsoMtYDoSiPT3j4D84yAnAoxiPUnfW6GDsZ6Qosg8TuRG",
  "key15": "xeqruGeVxdudk5b2RzC1kQ7xaY1qWNSCCdVs6Vm6HXjirTg75ZmqYADxxyRtaPbeQ6nTBFoxfLKXg9G7Fngyj26",
  "key16": "2VGb1rd2CLUTgwWejVoJwqKCNFiDZtW79HYoNfdgLq9uBvbaVx21r5s67cbYiPrtrNqjrC5ofPz9xTDDy42LJoiV",
  "key17": "2U1ZZdW1nbxK7wNQvW23fwDA59TPhgeEitrY1PmyoLm3enyYpZttgNro9i4RGEhJwEK6C6WLXVedwuPatTpuHK1p",
  "key18": "53GdmGTYYU5HRSrU6ebVxkDNRBXYLvvrNAMr7oWxZPiDtmpigyspnmF1FPYMf8cHs2haJPioLnx5uFCcNBFFfxfW",
  "key19": "3GQ5aThrjp9mrzAqdy6oRhLrnes3gUcujunnMiweDdDhMUr8st3Fsmo5yGjhbDW1oinKAQSoGo5Vx8QJQhzg61qW",
  "key20": "5XMh6z25omzYF7iZdgqFB8rnCxhEs9z7yKLU3eyEhzDs46988NHZSMUrR5cZRrX4kYK9ZikFjqZKqeB1GoiNS1Mb",
  "key21": "4W2WLwPJ8QS9yBh6WypCp7eNd1mhqdobL2U4mJHP4xhaHiwTgsqXc8tF4j9K8Ygbd6e5sEdhrctmK5bhMzxiv3CL",
  "key22": "4JhFxcHVRKa7ygdz1KYQ1LAnjzrj7eVNpAV34k9G9DMqKxWUbmhETH73UMZy2iMyHrXcEn1VGjQAyVrjoYvx2R9S",
  "key23": "4vhtsCiYKwbDWuEcDexYzwcESzbTd68UUeu1LaQL3hYhk8XvgcCASwF1KSEowg7S2u8fkmMG3igZLnw44xbqVBJr",
  "key24": "67gvYFaBg6kPFUBXhKQrL5oYRpBWBNVjfWsDpByYWT4yTHbPV6DLDq8u7DHC7DhnqoQn5koyzgb9dKX9XjsomXHX"
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
