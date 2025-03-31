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
    "2dto5TcwUFhEpXSzRvzExHkDnVPxUHWZPu3wU9MxRXKPJoEuYu9pbo1vUjggcgkJ6F5U3saURWdQjMjshWovCDEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ebGc8qey6PNDQz6618xipiiymQFxFzEqHAs7RnsyekzNcbHWgo38hE6TN7aAp98v9MNaGe1GAbFjsfRgiu5CJYD",
  "key1": "3s2jU1QXVqSzLnfJPshcijceixv4bRPzJSpsidhyFjVHJEL9g6Zi2pRW3dQQewQA7WrGTFus5Ve7RBKaJaEX3JjD",
  "key2": "5awra73FETX3q9LiUSpucWiYQ8LfVUJSoUWhhEpVRD1WTLvutiFuoW9jr4eFXFfws4grMJYGrqe2DX8XKnJSLgV3",
  "key3": "3ZTXXGM8WeeEGTwcfXeQoVUVSJQ7WsLeGNap7h3ruBLqHVm2VMFFffyWmW3M7hnG91caLiE8vcGuSZBQxQs8eDV5",
  "key4": "54abbaF5gvssfydsFjowzkCQPN5Dj273BuzRTzTqhJrPEkTrvUh2cvHzmjaGHgwxphnCpx6GuwpDVoJj3k32T3eD",
  "key5": "XUWBS8NBtfw5qBJdghAtYVFT1xmYevLTteBW3rkuAapXJa3HovAWcT8A4wSvuSmvztYatCcUM7KBNBAmmfUPSsC",
  "key6": "2G2FpBB29dbQDqyakNCG4zpA32whVePuydkQ9aJCsQXySF2x5rGqJwwXSQTJsrqSAWDVrmpMCcU29vYLzyFrmKQZ",
  "key7": "63WpvjtmB5jCHknbY8k4NzABnUZrqjrE6qrB2okvZWKttQJbAZPCJe1tYcSosgTu8EQbHR3w2weeNsqimwaU73bz",
  "key8": "3FdebMW66npygg553iM7KitGpToHvFgUNkYdJodgrX3hizVM8f5ZcRNRkmMwKo5RkHhgwWxs2wn4ixLMopfVcyHa",
  "key9": "2PxDK3KzXbCwfajRzLiRaPPyvorBSy9KzNqWDmArS1SdUoVyKUGDih9341abpb59x7zXnPUvbP8Qn1jWrSBL3XWV",
  "key10": "4t3SWdGzqmKH8zuZ6k9oUCJPDJgmjo1JJh1evYgFYf21A4tfgDRUMad6GZ2MNsxZaNPm4XNPjy6yzBoWu5RFjprd",
  "key11": "34k7haTpaXQnMESG6VKBjdaY7aBxgwTJfbxYdnMXZL7iGu5k7AEYMPZ4cKPSxn3V5wpkqfgcATJJRvAC18ziNgNS",
  "key12": "5JVPkPMvwbk7XpDGtqLgPHmc9iH25wacaWocPhkVGoutCxMWYsX3959yin6nV3uM56Cj3cGbv1rrCDDkNU5tiP1Y",
  "key13": "4es15tuWuxdDbgqCWk19ZH9AmLbMg24jVenv9X1w7wDDCiLSyerbvKA2Y2P2FEgRcPtvVDHpcBbXjkbYSpqF1T23",
  "key14": "3np82JQAR4GZhwZx7kb5ex87ysBvVmtrCh7TdugCHEkMGewFbZNwdp7jNGXDyvkzsUeXVbcJtR4J7YkgckPym4Te",
  "key15": "2RBZejBLzN3RDD9DaZez9boqxsuyNoeEFhmBKAxqPLNZH3fyhAcwoWzr8J1wXiX3UH9FwuAi6xKw7NUnswDa7b7p",
  "key16": "2B5Jbe4qAoUhZUnKFjxsHRc5JgwnKQcJBynmmd2gftZnA2oeZLCdM463tjxqbj2tP8VJzp2kUhZqQqeo1iVZ7c3s",
  "key17": "3wSrDGqtwtsW9SJ9wp17hikm4zYoVQnBVGc3N6xvys7LAYjxneHW24qdmAP2AMvwepnQCMUBZgviGSbwAZuUbJHY",
  "key18": "5jbpgEL5Ni2Y8w1wR5quwunTdB37kUKCQeKpqDiMAHSUeHDcH31XzQbsZa1E3ban3bw69fKShmXWZCZ9hszXaxhh",
  "key19": "5PuAAso9KWZq1kTDN7hYaZTRUtrWjHMU5tZUN1XNWK4URrcd4riu3wszRPoa2JeAvtfexizYNmvYhxR6zXG85NKU",
  "key20": "4jqgG5ZCJoaJGeRpwhL54wvNKHB8NtujXVVHaZw1fHpMwXVfFsVMt9S9iZB94mFR3uUGRzoYFrwtaeoEkby4GSeD",
  "key21": "541rMVRQtqKEq8uo6DK56zdg45d96k1tikM5DpDdcvZjFoYxn9BrLwqTyKXB6H1mVGqJZhoz5eAPCoaThW5YDRXQ",
  "key22": "4HnoZnB6YKXQa5VsX6uooxqMcWagdxemAb43AR8gkdZoCzyjaVxZoxc23gjnJUhPzEKuBam3URrjnny2hFS1fuZu",
  "key23": "4LYEUvCEMmFnNFH62VDTR3U1SKAatM7fYiK5ECe7nCCKutpSNCa7Sd3okxonus3LCAdQaqmpUYz4z2RBcVsRMCU",
  "key24": "3koNGxo1dNV3ZGhjoEG78SNUZivggAQXSr3xYDTFZjWKnjvokejHgQaAuQkmVdnV65YtDHS1Rfw3UB3GtN1ieKyG",
  "key25": "mWL53gjzaJrs8VYMPh76cqVu1TWd4uNj4wWmtMkUTZc5zPUxySQq8edLFE1gkL2EURe7YaqcHZ1W1JEZDfe1aed",
  "key26": "28k32HPkyRCSAigR3kQjJZGo7YLFQsCFEPFHbgzR2qB1N6YqGVG8tTCQcB7yMCxtpNEpbxFrfuQSqoX1gY9fVctd",
  "key27": "4Xq3uTUfXq4EkJZD7DHKmEF5nnQuoGTKrRhfbuQ6eaVCLTtw288hLZ7TmuC9MnkSqiVyoYdyR6JMvsZScUc9L1rd"
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
