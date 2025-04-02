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
    "cQiSpZ6k9U9vEPqyCkS2GAyhU5nYSyhCWP6c3UgXXZMvJYQL2qjTk6yNBDoHnbXMhz4kNEjDdhxWYTi4esMXELh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8a1uvutUyBPxfH8muFiXGM2jNzwr8CQDVAoWc3uYan5aFei7DrDK2dZpHZM3DBXne1evJC6oxHVP9tBeshB5xJc",
  "key1": "2hZQ2N2jCgsh5D1gVqgMcVhu1zftHJ3zuGzYeVnEzsP9pv8gewxzsG6W2UeENvZSoVUK4ZyP3xFbgHXHawQaVLjG",
  "key2": "4yeEgYJ2fwaLD36H1VBSNu67Hy3K7fX8YCU77vPsNkwVgVsb7rcAcaXjDwfZABKrbpAoNvYMDC3nm98BQhn5Mqxq",
  "key3": "5jVL3ceTNF4QXiq7J411gGZS5U7kPED3DngvTPKpSry4u7UmcjF6X8bEfr6ZLiE2pQZUf55ps8NEKYPnNb2roTTd",
  "key4": "5RBxnfUQovKe5ko2aAQ5XdSHR5opugAXoRnwv8ppeJmuFLxG8joQJa1TBNWxSKF3f6xBBygBH5QHHjgNXd5EEQN5",
  "key5": "Fo5XDc5wgqNs3Nv7wkZVcY8XwdX5tLNggkoAt1G9XAZ54QYTdYcHy5uR2aBsTjJ7yBPsAsRKv5xSSWBPzQub73V",
  "key6": "4Jg7ToYTVrJUf31XoZ9iRFQB2YueqW94rFv5YPWWXM6ty8nAmqWm3DwSdvXFrzMauZEqt4DjTdpouxwscJ15kw6V",
  "key7": "PiEvshCHqCDQP4RyVbRvHjP2STZEP5vBSHEdh9AEZt9mJmKgvBZ46dVEUgJvHsNvY8RD5gdBf9dRjPaiq9SFRGq",
  "key8": "4FTxkXCxAX6LAhEd8Lz92cFynoPGzkT8nmBvTkGV588Ke3rmP1oL3oecvDQ4dihXSMd1Mst56NAtgRGhZo1utXXH",
  "key9": "4GoDQWAMyKcGqawi3s4qibUsWRg6GfdXbZX2jGiPdtcTXX4aVLnAcS2zdw3N583yjcsUReiV3KGi75aciRgHDwc6",
  "key10": "5De9gD7JMLecqbX9mTNeqanSAXaDKWavWXAC5qcJfYnzCD9bCW7n3h1gsHGGymHw45hEcL6TBqHie9Mt9MwedPFR",
  "key11": "4yFrZg8b3YohmrpJHFozZfg3r2id8yrwroFT4Kw5ePHKFsRSv3yspT6wpYTHd9SB4SjbaRH17x49i8pNdzdotjZw",
  "key12": "LznPboT3Movrt3VCQNMu3pjBsoZnCHrUyVo3ACCnJsi57W2ykbAWE7bPJmXnYcVuw8aebdPX8UrXZv3RaL8XUkT",
  "key13": "522dya3ih2jUqfvXdi5gme78GjPRUJb9gmCANBrFKTE1p9jdwzRAU53bqfaB1FccSmLJyWqppAaR63s32hgWy2gj",
  "key14": "4x7p9NTKWZXuwxHqU8hEcAfdxCUb66piDXZsp2ejcGWNmmi87YsormqQE144wC789GzLh1HgXGGcmBGXGHMfGky5",
  "key15": "3ejoPXvgiJsdgoGk8rrMabTD4hqrQ9MvgGG1K5fvH1DExaHYu5xnB7HyWY6UDyURU6t7N15wNV6HrXVBrKfDK2Cz",
  "key16": "2bT3nnmTqXS1EZLJ2d9EtRiwG6f8AJDbitqDfqKcZm8YJ2HcxvfF3swEvSemiKNjiVHCMhh2ANCFtcBFSoyouNp3",
  "key17": "etjTpDNAXrE59vPY8MBph3nRz75DftwiCYmpwWxTwazAb2e7thmMYtnzwzXvsWrFqSnr2vwFXdeYmeVkccz1ZEE",
  "key18": "3DCmdzUnm9LXL3L5mnFXg8mCFsJvFWBpg9yszfz9MjZetHZzjZ8q9wGyrpv3WqSGDrVRgV5AYci7b43c3U7mrq6w",
  "key19": "5L9tewhwqhMvmtwvm1YgMTyhgdaCGoMxEbsi3XZA9kCbbJV3Pd2i7dW5xbEptwyUo43sDNfccwfiU2ZkD7cDf6Bo",
  "key20": "2E3DRz5YM3jqAiSwoNba3AAfVRCJFG7WkdiVff9Xe59Xr9bdk32d65N3tXio13T69xmAAC1CPqpGrkNRzcmjhHpj",
  "key21": "3AUGaYGD3YJUbeARjCiogAr11v1YP2E7bk2xJ3H5fF4rHEFzKthAHsFhKiTCyJ1PGhpuMMFyfL1HmnYvWe1d1Gbx",
  "key22": "t83xpKhzXeUFRrA1rzdz6cRziqyUa2uC1LWzP5GBYS95nitX7MSxrBswdUUv1Q8NiKWN4wEhE7iDyZhBAufTuQk",
  "key23": "5tKHvBgpaKrStJHFJMPEAL37GCfosQ4d3PPdifQ3awt1uTfUKJ8v8DXEeCWK2pKrrdDq1A8LioWGyeNtDf4eXuMB",
  "key24": "2TPAHA4zp9BC8AxBjFq2tb9dASTPCUrBwRfKsKgMmMXG6JDHCP52kF3vkHYL7we6Bue8RNvMEGivvN618VVFLDAz",
  "key25": "2JYYwv9XJ4PCHMCPM3sKY1YbbP2QkziGxF8bBknddgTKCM1khAyQk2ckRaHsCRBSdir9GFYYteVgacv23JcmPfsn",
  "key26": "5vLQwNpP7eaPNwns6kTTrpYb2KzsyRMnbyNd138qfsrCANcnMQ7FmgrRmbhxCNaYPVHk4G3e6C5uL2cDzmLbjE3C",
  "key27": "2VRdQCLP1oUFCT53SpAk3SnaGu7efMhVA4WSqdXPR7AwcoYYBtJLfZjRbatbczRvsk8gwsiHB8KWBgYLFeiWDaSW",
  "key28": "3MS3UwwNLT7rNeWu7tRYVjGTPXsWbiQMSZ8qXsc75m6Zk2bG7bxroKUnSFJgKFnmVUGrmEKGQEiRucaU5w5WC6LG",
  "key29": "3SbM8s9cheGW97Mwsnw6YRnjz1S6K28KyfQkP6HBDx5WacuLXiXkcsev1aZvLDc44zwWxHsLEBboFrouEBUqqKWg",
  "key30": "3cJX5TJ9m5kpekW55qvDc1285n2X2KeaXQhjYXQhhh5AUBMHCVR5ucLssPow4ZJfZVrJpzZ2nV6g9wydC2W1a19h",
  "key31": "2je8j3E7a8TMUf81hPYntp4FUvKHRDBRH89JrshNNCEazmtGFXaut1WFCrrYnr8XvgYFsrvbXMBNvJAijaKnZssc",
  "key32": "5MQRWpAn3eUjVmgt1GZc3zbMiwVjuR2BrSVWo6dfERp5j5pMywpuQPcqoSqYAaQmqpBv7JzcmAD2CEy5YZc5pgFH"
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
