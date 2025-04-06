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
    "4gxtfN7iKx8jWp1yyxHymz9uB8rvWaUz6kTr9BuJmXK7p5xsXdnSd6Tgbkk32HkfwDzP4A8WgBEtMeDUdAQFTQYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LfhqpYATNpY6tpzGkJrkqPQi2oxYjMqQ9Avv2WQDrMX7EGC877FuJoSGfFrcPS1oQbqd4BgsuLytDgSzWCPBy8R",
  "key1": "2Ed2rc3GSrTqteoa9gGPkgciim3C3a8u8K7yuUTWgiujVCrPvHNkukr2dNwGxKC5vJ2z1aPGf4SRcpQLMQUYAHPF",
  "key2": "4Ka3YzaKfm86ueqrKG65KBxoJF3wPgmrod6X6J3w2KcmHwSqwLneWtiRkKyepb7TjTZgc1BjEcMBMiKKB2ECuEzx",
  "key3": "3tvnXDsPdhBRz8PgEzAY5doiynJLrCQd6nPjDfHf5DifkJzgxdoXif1n5bbCUQXPcvjG6j8MJzfZjS7GtVkKZ8Yb",
  "key4": "4v2Bn6HnPuENkpYL3k7pfPup43zY6Bc4tQPfisEgtadHot2iQnDBG1L4V6P48agaFFgBRiJmZ7ApDXHbzQEue4iG",
  "key5": "3qdVq88oH8pQDfy2dFLMDwHWnyiLLdJMwEcEhR7qWPYozry8eCzey3dRvUP8fSxXdqGhXXrq8gjuJPfdk1UD1ZU7",
  "key6": "67L9Nqig65aX2ew592YpKtoezBsLa5zWdNExBJdg2hV2WRbyQa1us6bLuuv8MXUMwxhB78sSELjw3k7AXoWrnr8A",
  "key7": "4z8mHDYGqiwjn3Ja1dsRg12YAjoDmJHteBitbT2XDre36wM2JPvyFpCL4yNCLomWZfZfXF9P6Muwyhik1KHFoT6F",
  "key8": "2guaWctzm2XTWs9wtqRLJnuHeZJM4rvacrWhta2EDVnM5Up4yA4d5VERdqCVE2VfLnDvaLLfETBkghiHUtZ6bniH",
  "key9": "5kH8aA4bTC49YyiQQCGM1SEa2QxPBj7GVhqCuJobTKPnyK5DLVZZ2g7biLxdn9T2vgVbS7ruRTo2jqA1CE71vwhn",
  "key10": "3K5EKvoaknYnbswU7t2S34PCcY7EXt2tFYUU8wAi7rfw4k9xXAkKss9fUj5SSzDkf66RmAzDPwUMzzseFKfsM3E",
  "key11": "jT4LrbJKSdbR3EqYGDVYaamhksYv7LfY7Ju8UyXdYRHGD3AYtPZdJ4ytbnRHNaLp4TQLGn2TUcGEpqSRcz8pcXG",
  "key12": "3zDJizA6JS2Ypf7HgS3jh5tKmNFChcQWxq9qKWiFUM67ynQ35GsJQkW6CAuu9BK58REnDAdKz7Wx3mknWTfnNMJq",
  "key13": "5GnKrHEaVBxdDYP1qymxa9tHTnaY1qdZZvx3gwaSUGPavBRYNSjdeyrsWvtFw3ZBzYqDpmgQkwD13GgrY8PT3hy9",
  "key14": "4ebReNdpJzjhBdG9B53E3agCs9ATp55ThH5dZSRUtGmKja6VdRRucHSodaVHCpngxtz21pzxtwN8rFLBBW9pyBck",
  "key15": "421yEqntPCSHDRQBYa8F6JMogsaXa16QSS5TLqJPE58aN1o2YHSnc31DapJ3Uq8KoccRWxM82YinLtsqzhhqkQQb",
  "key16": "2awWSxZhvsT79j3MQB8oZRpsy3nYPqTfkuY5fNnD6KpQPh1LNMTMcPET7zu58vwhLDe2v7YRXjqtd8jTf3bXVoDt",
  "key17": "tfBg3XMzx9ZWhkfuobTXeJaTbGwKCz1aef7d45f4ueh4UZpmiqMVzg2XGDbkB2GokLd2DWJzBsEUAreKbjJMdfC",
  "key18": "5qS3AbVHLfBL6uUJeCUeSpqrj459HDFZjzU7oxsfmrHTLxUtyCoKYYopa8Q8fPkxNyCctv6hD6zfNxNJ1WwyNL5L",
  "key19": "vvUhmwYYf7LMHpSAfDD5FN4Jg4nAABTbvRnSMb8VySxBAKxPxHmKFGdutJqAv2UwL78BGpeTkyHHtPSnwhbmzvb",
  "key20": "4VNQrKPSwz6qq2mkicnvpvWDTCPyw9UgASzvKWQvfQ9q7LwTT6uCq9UQ9E5SR9LRNAziHXNqnjRtDTkeFHSR1qG6",
  "key21": "4mJ73g2JDGDMsi4bb15rXaRipfCFRU58kNfUB3mD7oJC5Aqw5EXw6PD3c27zhs7agwXdEgdDjqs5DbuEn1zvrhzG",
  "key22": "2B1EwoVVAC1sqKPTjVVeyE2WLQXbx5jVBopAsD8EtcvX45TNkfnAXVz3iXFjLKetyeeyEimTkuKvNnUiA5EYsc6H",
  "key23": "5fBbCE1jZBxZ641kdSTgxD3GtpqfHRooBHPoS9RvtA1z418rnsQVhV5G6Tthb4Hgyy2biaZjYfduhB8Q2pS8RyAi",
  "key24": "5t9CQS97NFXNk6rAiayBPYoYKHN3XBoJ9HRCx8uenMf73Mde6Mbq8GSNqe4PeRxjvHAtcWF4YxogniJevxjCCVwP",
  "key25": "5c1THCtoRFFxZyTKb7SQAzhDok8sHMhN6rQA2LLTfUebq8h4BXnQie9u3ADaUQM1y3EAUEZLAj1d6DZ7YjTcyYhx",
  "key26": "4NGq1AaB7eGUe64t7Mj6X8KXY5JvutHKSNgeVKXZoekKByfhUDZkEKxvgkiocrCY2ZznGyPUZyadWgXHN6FZdeWB",
  "key27": "5UksiyWig8tvja1QrMEstqmDwNoaaTBQDA8EWonnWS1Tt2jGuEjm4Za3CjvtgH6wHRjxYuFLZ4LNanP4LCuTGaSY",
  "key28": "33qgnshBGoRxWJBEdPkfE6ZJYS8KhCrgjWNtJnqUkgu9eHa41TEpqKsoztbhXu78uzopPUWXJVG7STvz4awNCYa9",
  "key29": "3RGKqesY4gAsW2ZUpKHzrQb2tJyEmDM8sbkx5tBZnFfA9yZrAABtYBUgu6FepQG678U7aUMYrcay8y3TM4SLHpqd",
  "key30": "2k5JbNiTBfmhgQ5HuMkLVtjhaKiFrWrB1G4i9U27Sbm7qEeAZFrsayyTVhw4EWkew5Ke9m9wLpot5fWwDyWTEVhc",
  "key31": "58FV6CGqmeps9LajfBcgb2ff7TSc5TtA4Z6ykJ7cZaxhu8BMmaaqN8hfKB6zigxKWrppbo4AhX4356hi2uEDWq2F",
  "key32": "5fbT1DU5L3uhV5u2uVc7s7BSzU1GpXVH2K6QPUiboaRvmRAtGvY1jAEmC64uyd7wWJeNBng2Lgvzk8PL5ax8QnYA",
  "key33": "3mh5TCNdaCERugAVNDAX5fB8z9qTaqvj9yQ1zxhUHgPEKDJwYmazDU9sK1xfRUzr8WcMvh7BPuYEJ8CZit3udstA",
  "key34": "MnTWF3n1hpasvFVAFTgr4fv2GgsXFK5SKkLCLZVhAeKQky2MsgHprNkGsrAbzfioAtsQGSzijnmeDHAFeKJDdCm",
  "key35": "52wRxswYXwLRPLXhA6uyYxGbHWiQDYRw6nUUkSzE7cAANYjs59QvNunkRsPkDMoVMQkUMkgbMYTYTs41Y64RZ583",
  "key36": "2wpu6mqTsV1tc7gJNaagZw1cQXTHH3xSm5P9cecVdiHCbjer9p6q3po48u2ioZiVD52BLHqwBbLZan7fm3WrhaxG"
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
