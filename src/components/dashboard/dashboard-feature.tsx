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
    "QifTi7H7WZb71wUQ3eHUP2mn3cPb53rRbPWEHgK6Ws7MrvZxmC4SV9g9jRrQn8sRTW5saAvnd8wCNiTXf8rWrvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CoADytLZkMrjotEjKchxLqsGVTXV1ZKHNraCeUsJVgeBUB4kGvv53ZUzWwWnWrhTtKZXZmvooghtEgMHDi6gd9U",
  "key1": "biRyBygZQR2byLnDfZHTH4WAC7iZRP3Chzn6btFEqp9eVk5xVeXFQuGHobRhVQ47Z64JiEaSq1ch8yckLA6fP42",
  "key2": "49taxK3MgRoh6voZnpXiT7Z6mr5NCJV3bDrqPafThAhaQHEds37KtEwhCXNDddJfXVFxwc94GmKi2UUw1fbP5X6x",
  "key3": "WfTWPUu1MordfsVLqqUQmEFxucRcRpEtx9RZ6QPH5FWoBrega3CkbwxcGPiiYGj8h7qXzzQJ668dMXba4Pj8Wx4",
  "key4": "64VhNfkv6dunSCkHxr6KcsEJisWwe4cke179uDtHopz8kGttp76RUKS6tcxZMgVYAw2oGhnoaNNH9nbGrf71zAiS",
  "key5": "28g4cs6kUVnPpKBJjGfHLKC8Q3jhZYLSaFkt6gC6xq4nVVHWLLaR5BeKnjAHs9W5e2f9FQmXLMJTh6h4LqsdFQaG",
  "key6": "2udM7spD8HGpyAzkoyfhVAhiDjEg3gQjV9GPsadZvHfWcUAnJd7wUhv2hKkuXZHWFpgQrtBUdwb71ecbLukhMoYr",
  "key7": "4wyL8YLHfGPYuzDtPm55FawF2nAZ9KDMfqSqK71mMg9AabNM2Bi8Ze5UoUuSYdMV1LX9SdzjqKRqWjdiyc1fWN3F",
  "key8": "FW4PMVYkJJ1jdkBSj3XLFcfoQY6diyoNTW4oeXbxKcjXmWwFDm37ujJDft6q4fToXTJtpkcNF9hHhsRvCRND3iL",
  "key9": "4qRGYDKCvfsVoggZpXeyG5GcehWtvUzNGmsQicn2mmuH5wzXR1oxsX9VwFKizahTbMY9pbt31fNtxL2UWWa8LEdD",
  "key10": "5st5Bk4dKGyGv27e12jaCBTp9qhDnLigZFcpurPdjTYWH8X6DXWNGm3NLgAAzM8U14FYqjHZ8tao2MSmy88Phnau",
  "key11": "29X6EPpyuuQDAsUF5t948kBvTZVkA2hXjqGTfeeToci4ajmt3iYi74xhwuj15paCBCfG89BKWiyGuz8X4LthSAMr",
  "key12": "gJwh92tKjqGheCett2kU1g1knj5JnYtFXShjY59j69vDYLg934KEDSYHVn4GCWs3tFcsLyXVY8PvMpMRzfN7xYU",
  "key13": "stj2aQB9Mz545wyALWhVkth7DCdwCvfd2G8zuLH1JZbu7LdNudLLx6VKhEsvz76vQS3yxRxANvceEBVa7NvuR2J",
  "key14": "2gNUyZrpdUko1oLHyVDiT4VkqkYMQSvHQthTXXnaYY3DTs5WeQZ6c1BquxXUdBJ6m6gcshMczJuKcXdT4RUJFxuo",
  "key15": "xfwptu83oZk8cfD6r52cRVc7isAMPySW2LZmPZiskYknK61tHZ7upCUcw2NKhSv2gAcuHSr7s5dMXczLzVoQpJK",
  "key16": "6PJ3hecbowes43utM2nCv6RsB4wfw7R1ussWALUwqZuBpuWnLarGKBdAj9qcmzT9grhtjJYCQh5Sci6SecHsMSB",
  "key17": "3Rq6FSpVo7zcpnAGszNUg4939K5WsLEgZ54EDYBZdvcymRwH41UHWAxcia5Zqhmoyh2UgBxj3xka6PBAh628KxEC",
  "key18": "9buKfaXWwqTecQhhdPnLFcpxxYtCCBdP6ahDzNUaiHFB9CWU4JqKrAYVL5gXKvcfp25qYf9r5aik23BiXZo1Pqt",
  "key19": "3fcWAAgFS3YUyC2DMsSAssZKXvAysvazxf3yJafR7sprTSHp5ciBHkjMRLUSkQmCLn9x7eUKewoycujxW7hAFddm",
  "key20": "4HSKDMbWfwJAgDJNVQ3g3KvsZELzuVMux6mt7MicLBSnVT2KjVotE6M2vTwij6x39LvzvqMzTPcXDisKpm7kfir7",
  "key21": "WBFHwiU7roqxsAarzSdcmnjMY8jpYhx1okyG39Hs7sbXXuHCeHfbdY6hAreEQbVUDBY8Ly5MqLZdfubSrQiuwqc",
  "key22": "2PRupJRTrRMRAA9qbW236LRZyzMhXq83gzNtXVPSjPisrbVXgZPMssKF9xYJgMoAPBBqrHZ2qVeC2yCyVvsYo1p8",
  "key23": "2HHPZzXdFVSRRWEBLpHTD6jcNBnb3JPsXpeQTj2KRg85F9JvFcQeC8FVHfezZmS9PofZegXkyWpGM3bCkUDL2ARw",
  "key24": "4S5nVGJDdpiGAjnVGZQLAodPGumR1Nruhxvvcju2LeY8vTQvhEq9NC1G1Et9daDzX3WtATHoMWmuXf3yMx7J4CEq",
  "key25": "3uVhEfEfDbbFkMPych3tbtmbs9qFp8tWJCRCqNogyB7UPms2qvmXevtbhiJiNZb7eUCwjc6ACspjie8UXy9Rrw5M",
  "key26": "92iSXowQci7rGKLx4khPmsjgU2yZKjqGbAyGedAXqF2DvzYT2ytBFD6vqSz5Qbqs4AQzw25iJw2MgXzW6ouaGNF",
  "key27": "5bFHxK7KSufqiRJ4a4gbwBXPcxk15GzATkq7m7Anv7XrE9Aa6mwRKD3nn4Cd1KBP36SMbyMKL1gRW7Li7QeeTFbJ",
  "key28": "3qZqfg8bGoprgb19FDv26QbwTu4ecXJRZqHmGze2Ubyqb2jHrio8SecDonYyRhscF1QMSCyVrMCkMzkhpoBDLyqW",
  "key29": "5o4Tjr4hzcBxicTQjEXeqy6BdpVbALQ4au2JoEqSL29HB9kabKujGAzgF7xLEkyKGXZPV4ZCBEWcJb5PrKN6XPev",
  "key30": "4mXhUDR95KwFQyisgVkwrtEg6zAy9M2uRWCddbD6LHwfZyb9UfwQEFyydzk81b3pCz3TWAhxQ1safZRnAi4ELG5L"
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
