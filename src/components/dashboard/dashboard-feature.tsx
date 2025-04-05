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
    "JayeH7wjNeHEwuW7fgxSMH7FEDCXMm9M3GJY4mpdLrL8GGCf3hcZTwoJAfpjaGg9WiS6dRTxBx7iTJoP2Ba8gCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JdeEQ8RvDihzegLo8NqLyR4edUdbRJY6C8fSq6P3nAFEtV8XcDUE1jjzu6tdBDLwqMC8V8vaeehqU8FqmDDovYD",
  "key1": "4LHXSj1GHdZdmbRzqtZHazP6hd9pTx5HNjGJrnhJ4sFjnHtMSBcu7e7FcRq2kKk9Bs6uyvwyF97mzib3ML7z3SpU",
  "key2": "5JX2ATWrU86r4jxgnYAF8XvKn8qrwVH4vR3zYSuakznLtbciNcMuNm6cdeEKSjrs9TXm59eUijKkqJhxEC86rNgU",
  "key3": "4wwSxJV6NEHhsc8LWz6gcSrhpDfF1vEYMLpEsfhQz2owcup8YKD4gPHQw7VjA5vvqFqvfryGStknmvMENtWmganK",
  "key4": "3TPfJQTKK6nroREhiRPzzRGcvHZVsUSzr7darrGTeNh6Gu1gZaFGFzhELQHC5NQotmrbKi9xRq9C8AsCs7eaqJF5",
  "key5": "ptzw3orxbjg74K68DibUfZPaPk3hGLCaS8Q7Kx4Sm3hwynUuqMnYLbhH9WCP7nZCyoyJwyyas74VCdDAozR9nuF",
  "key6": "4t7SKkkW2sMvVFc3jJX4rskyxwCB9MXbEK9uEXFwLjLwtpokLYZSLqcP7ZAgfFGFiH7JZL7cG5TEHZEmXCx8AovP",
  "key7": "389N7ZcQ6SAhjm39msWUJqr1P4gbdYNx2GXz23jMibTBMPMpAnx9UyKEXo8ejhDXquwyAPtDcw66hogjh8wVBivh",
  "key8": "4m51xwBunRtsqZKnDbT42es9futqntRYNNUvuY2dsWDPjy7nj63Qx5UjsPW27eNkyTAs3aoEutG4Q1gSegc7EmEN",
  "key9": "45ibMYVd35Qb1T4spFLFwURkZESfkgDjBxhoWRBmcNyCfB5TAykJ9EucAJNUzuYwYFjuMQVMzBxjtZ1Aa1QY771K",
  "key10": "wWPUhkopbzPC4AYJGLSsYoY8vkykYogXJigVnt1rZ4N5eCa1fpMccE7bbfzXmqa5FiCW9ZNSh29Y921eBrGJVX4",
  "key11": "5yQLYL5qA3e5VHQYJ6y4BHbDeuid49EYMz6F2tDfmAWAs7GK7zxTXPvnDNNCL7Hqn3dY4cVcWT9mJNGvV2c9oxZJ",
  "key12": "4mwy2p7F4HzKCGJXrNtC62rayCwpqBXYNzUuB1QqGGonjLvTVTNKV8VsMsjgnpQD1g1gaMCLwZQULg2pH21wzTHr",
  "key13": "4SjtW3X8EZ565gFENTwH3HUCQ2bgQu3LB3UEKztFQYRGyGc66aBiK2gWFfL3aWf3ZRHzpga5jtWhawygKBJH3Ncn",
  "key14": "62eav8stq948XemBtqRreM7C8uuViYm5r2SBrTq7KdH5EAzsxKYJB2CBFvAnTSaJHGeV96pJYYzCPPJhEQ4QzxgP",
  "key15": "5MtwHKBbdTcLNnWW5j6PXfFnSB6sAVd6ZWG4xLNsayx7VZKzrDfzS2Tf5Eh7VQVLQXjzBN6LmCZ8tWD71vBBLAL9",
  "key16": "3gVdUCVKL7H6kqv1RLK3Z7sABUEHnPmQcp8S6L7vyzpP6EwPQWKMCSfrY5dEa6e81xX3E213qTKUFaMeLf9KP6bN",
  "key17": "2fQLQvPYa5QwCMozh3Gzzyk42rNQ9ESjvn9BZ7E5xLvMptPdZF7keH9LgyR7oLNPW5Jb9uwbxrX6daZeATMc6WQA",
  "key18": "4eg8a7TgUv2S84MXghcWDQCtK2Wgjd587iu3HMCQtbhnPsnuDx96xkbciSyM3dq9rXHj5BvBr6LwhV77wncC64S4",
  "key19": "x6KK14gNTyERM8V8jPY5sdxUCYWac4pgkLBkxvkLhD6wLxVozvSLKmH1uZcLkeee1qDZp7u8TtpPKqEnw7Ro99a",
  "key20": "2eC3u9AJWFxfgiBAH3iWvk3z2jP3bR79N6KDodP1FaZ3UDyzzaNnfSVgitnpaXXfcGKi6MnzVB1TcPRU3R8G7akj",
  "key21": "3fTe4ebjfGvozotFf7NABa3eGHariesucNqPUNGGVkHCC8R3uj9V2sy3ESGbZYVgjiAeYkdRdFYVzP5QgiQ2Q28N",
  "key22": "5SzmWJincK6F67c2j1Ko2DJWs5H7PAgR1h98MzhuUdeHVdqNmhSDUq1ddP3vjm5QCE4bv3rSt83nhRMsEBJ712zu",
  "key23": "4U3K9Cgjt352d8cbabRbLLqGeRXCw6cu8EeX8K7hKeJPzTQzSvTgUqpE84FjTQtewKYmqJjCQjKRdTxvvh1G7n3U",
  "key24": "5VeD5ZMVyHsHqBu2qHpMPuPX5Dc53XHrMRM9GK3zX5ndPkSqCXKQ7KzxHNNB8HSZCUaQSgnBVDwjZ3UkN1HZ3Fmx",
  "key25": "22yNjTLSqyWhvs69AaG2fMAGwiGC7GBrwwmQb5SWxQNxdx5gh8dUyjHiKysDoDG3TusXq5bYqBUuJsKGVgvnNbvu",
  "key26": "24yNiQJEvZhqMq8dyEU5xWGkiBWb2bfJrE58h7PGdH3ZiuLf3nLbWn2A1aiYEsVLD2MjkKqVEcmcGDfbdCyPEsrq",
  "key27": "46vZDoVrXzGE8vfcBLnB8SWmLSPVvBunJwghMAyvLwub4PuZH3MsGvUFv2cVzkPUFSqgegKmtUAidAnLZ4WhnQyK",
  "key28": "5H4niSCMHXkES3VBDNUDeYv4V7mYVm6cDcihJsRRWa7Vbz6uWaKTzPjR7EejLRZQR4MehaJKB8VWCoyuttUHuw3W",
  "key29": "3GTau1XrgB885gzHhyKJhMtXVFjDbLK8YiJc3chLZmP7NVuTDXMRe1aCd4sB7bv7BUHHXLfh6x4nDpKSqC86V6JG",
  "key30": "4Kb9avxm8gVNBJX43jWK57piFJMRpsEbRjXuGMSyCK9fSGmDfaEfo81T875j945HzcFeJJpiYb1BkBxzt9WfCydE",
  "key31": "QaedFp2TgFGokUFpCEmVGDYjQNgicKpKxjAkboYAV89eRPyeSjx1bG8WUe2ALgA4jbX3v3LU1n83jzYaGCMhDnK",
  "key32": "M515dE5CLBRMoSaUqxakX6icxqxEVgXCS2LvUi2PACext22P44g8bm1SkHdyyVVPQexjDthyRLhgX7LqpZjBuTn",
  "key33": "2zVuTLTVPMD47wZaNgd4WkDYSTBkaBZvqpPyQp8afuwaxfTxguGkxC6uUgpR5D5YEQbvMDP3RVdzXnikUcbGetCe",
  "key34": "3GTKBhgqrt6LaNnkBc3m9v2NjQ4aJCwseAJLpfHaBZPv1gJqVr6AvD1UjG1EsS94BNkJyAqYnUatWGa8Kwi1US7C",
  "key35": "5bENZ7trt1bHvKntLyYLCvBtSQ5LsnhLzsDMjL77tVoNJjaxKvtmXavBmNcm5etCCuEoF74PKbFUPAcGwFQLS3Ks"
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
