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
    "5rvssp86s59Heo96TnyXtAsbhy863BMiYjoMxJf2uj6N4aaunQTGfY5dLkDVx5C9yo2zCau1CWn9YF3MvdJNBsDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vF7ov1ifqa3cuy6vkUUxsPDE9vdfikCVK4uG4BfKq4ZvwxwzHerykzXr7MUx6adydj6TtU8CAo2BsfnxW6bN1mw",
  "key1": "23jca6g2X8jjUBYMtaJ7gfZxENsjrhVriYFpVKAw2CVLyrirvTTpn7zyRkSBqJAQFxteippSYwaehhtP79AkzeiG",
  "key2": "52Stm77MQYGELHTBcTfRhA9a3VvEQfxkUoPVjDHGMcw33xSAxGtRKVRGwGkWHDQngPJweTBDPR1B4uNx4wzUWPW5",
  "key3": "3Whz3iE9UUa1ibg9yckHK7wWrqEMbCinrvjTVJ9FBckVvPdv2wfEDsxhZuQiqVzwjWxbPtAUP2QTUHR3U1tBCLVo",
  "key4": "4DAVt3DG1Ne5UmHmSH82DsTgg2s4DQ4CPaWNFMSvwjNXtURJD5vRDW5obKtHxPRQTPmcgKE8Ja4bh2hB8Z7ZZurX",
  "key5": "4ARkK2u4RYmtrNqVWLzpYPxupHMKjXUgtYnre2hnuiKfd2cTLhf3BPsPRtAdYRBUrgqEKagdj3hjsHYuZbVyQ54T",
  "key6": "5hpfoXsrsYUoFeHNRn5Yv38SZj6d4y8Jys5o9q2o2H1eXWzdgUCyJ6ZqRsk3VMKWfjaKQz2z7NYoAiHfijKAk44g",
  "key7": "43vkCefCaDe3go1TeUyGPQRQrXUkTu3atMkvwaQ7p56aZh9EWY2VQsF6gfYrqf4NRTSaTLiYRKQDTmdWjXXvy8w",
  "key8": "4h4WGwWEqoebVr4bmH2UQRZ5w4ZUeof2fkXd1PiEMuCkPpLvuKPSPAUAMTUNs4rEb12SwYkKjUyioKixUoNTwVdk",
  "key9": "C1heUkthKVRrnvRudVhAy126M6SHxFx58qKwEkA3p7YAVq7MyVYdcrvW6Hf6G2jJrmefXUT3jp2wa8yZ4Zx8STb",
  "key10": "3iAjGMgXSZLLB2ShNkDxTa7eYmD2pVo3CDaVQ4uTKvHnNtvADpWd1aTd9MS6VAfg6XVq6arRsn8qQVASAHxMnNK9",
  "key11": "2ms9K7id4xuUCVoTcHV35aZ3GZULEsYXpfn9mjQtNYYoQLbjLHpWigfUwnPFCMExnHzcp7BUF2FC29YVXTQWM56C",
  "key12": "2AQVddm1jiJV9UWSwEBvzJqXWH4vmFqNSJxhPd8dwkkDW2Mo3EkMmS6Yu4v9X4aSgqrLstjePKpTCLizwape6YYh",
  "key13": "5DU8j6QRAoXtv3KCjr5MomMUUmf57GXz4uaGtAgxU7NMYNNGpKgjj1yYwggBAadaE46jWjSkBWv1qx4s4a2fmgLx",
  "key14": "5Y8YvWzsnECNUzviLe3p3PQi8CisSRRyWpUkJ8881ntSzCjPtagoeNHxMrNu3sE5ZKfNTmbk8tR5kkbXwoAbUFN3",
  "key15": "2FusEkUsQWpkNndvN6pJzxiVpYF2FP6EWQtu2w1FhDm7qjraAfHUDoDnNyVAzpcx9fgRC19fQXG69GpKWNAX8dVz",
  "key16": "miwFTQgxdSPS4fzywu4KvQfCuii9kTA9JT9WjUEkZBNUJL6UgNj9bp8AY8ADJxHR1frJM9NwNrqGjwMdPyoLGkc",
  "key17": "3j7hYx8h1wXwewyh5QNWY1Y4Rpy5UTY4dDiSRQQJANmJBggGXjefA9F54HqtCp3GbCpfWqnk2byvSjWYnBMpy2eZ",
  "key18": "5sRQHoybFZ8EpPDkZnP2rVjZRqJaHXqitQJ4W6y8K462t6yjptAJhwsK3dDUWgnDZyY5zW27hYDbMRMRE1Psdnjc",
  "key19": "4qKzFN8r8wYChgnefemS1563y7SLxRhWUYQsTEdy8FXZRyaQu9He5mpzXGvgz7Zqtm51SsGzKkg2EPsKzgB5s9is",
  "key20": "2eTW5LARqp9m3MxS3ZAeJu1m3w7qJTeJoYEtHPpoNGWxXbhnTQ2b7NB5Cd5cRDs7ao89tiqR65oTKMs5DihaD7B3",
  "key21": "xQ9UUGa2jawYnbSi6QMAccjdfajzYeqMQPLkRq8RBEMWrbnu4g4keMXmnjXkEa9KDy7WxZRsckHkrUCUpaLNJcv",
  "key22": "3a7LHMQ95fosUndZCKRNkXehmzwmrfDNQC7LCydczxoVBknwUxHZV6fKkFx6DjU28CxqVfvDZ1EqFULsvY8j397M",
  "key23": "4t5wdTDbStDEgD5m9uo18ogtvUtqYYBr5eSdLd2m7Ki5rrXN7QDTbARFWmKgAjtyAUAWHv4MnnnBB6Ldct4vidv1",
  "key24": "4Tx9bYMb6ozkzkb6BkwKnHGxViE5zxcPEKkjnzuXpEVNrzPGsPgbojdGyQif9BcbV1zQLX94Ljtkb82JupiKTWzw",
  "key25": "1XsvAR2m9TJZ8oathfq6rQcPdx5BqfggW7cyBiUHy1q3RHPhn3zWxFfCaj5boTFder875ZkFs7PJhdTiBWuy6ND",
  "key26": "2PjPJHVmKt1VVLUQHYhx9WrqWsD3ysZxRPTv2yVv8yepvX19tKZWnPUFZHQaa93GHXfDieHWmCC6TWNbEr9a6Qe1",
  "key27": "3ryjy4FXHCbqgp6a2WcRFD1xwysej2c7H2CYiLiTDrw27N8CKaWbmeAvS35yrjE5Q5mmFLGPPVegk9treNLP7cpw",
  "key28": "3hy4nJFvs9MUofgdgZuhFxb1hD6K2ZYLKPLPUytaFfB5sDW5kAhh91khgbSg6VVktDYPRodxSZ2CVY3CLDUZsSu7",
  "key29": "ry3ArEKdAhDX1bE4ANSoTuN7jx8BWc5R9YfEpuvsugevdALryim2HgyfDTLKx5aXfDRX3ArA1LnUerXWMwbHVS4",
  "key30": "4i2JpGu5CUXtqmXkAi9Nyo6tenZBC5BHqgyiYSGtk5ZjL5sfi4KmbMwFZPNEYnQKzR1ypt5VZYBaZBU6bN4zZAaG",
  "key31": "5NFAhHZku6WcMA9ZYGcvR2YoSwpoWn9fw31ffmrXmsoPoaHefYFEVjq5YdqtKBQpP9ZMvM1e8VDme8qfxcp6xPMA",
  "key32": "4RNGavgHM47riUricvj44kdh1uEdgME4FJeoUpkekYUs6oMqnvU1fntg2tKSRg8eX6XEe1vkyhphh3BtHKj3Qpai",
  "key33": "2oEgvuPQvmL5zJ2cq82sVUVLVxontxeGSWZDBFrqVCrFA3ZaEFvY9ux7eG61X5ZopMTWqwvi4Qg6BJhesZBfWrSB",
  "key34": "5xz3xjejCzXpWErpt5D6SzAWZ7QtPm5Gr8BKvMcHLBDf12pGZokBFcayrsaPTzWvXMSLFzTwNsBnSU5iho1sEnq2",
  "key35": "3qYCaJGQBuHj12eXLE42qhyVYR5PvKL8armr7CjibaFD1AF7fptb6aoimSJGnQTqut4UGwAMKDG36vhGrYtuyrTj"
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
