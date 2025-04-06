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
    "2tuJWZmQtMrGS93jGq7Stw3ZWeDXdqd676qD7TMzQnQPK3aZibgLneECgR4qPBLtrPfCvUswWEXXZLF7eG1cQvQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DoLJLZNdvAeiF9CoGX7ASRrsUbYKAZuow5urP5urCaYFC8d1gLu58voNHoaUZMhrLHJG4NmtR8zufD1SVY8Kohp",
  "key1": "4nmQnk4r1iVeaCDPhJq7ZDYZwgvyUF6n4HLHgYQyVwzkTD5yaM9r3rSbsCfcHQ4LqoaqToBPg8PiQbHEy5hg7boU",
  "key2": "4RerEQuSzVGbQ8ymw3g16zeSHoqGeLVHonRk9JMR4gEyV4zHNrNJya1UN5SaZRziaLBiynv1HPJP295unKpSY5sq",
  "key3": "5uzKo4RStCueWSUsAbHU4BMS9Wf3u4dqT97c7EUc2q7nh86ouhuzA4GoUKSPQdc37DKjg1gjrQrgdAosPh9c8ePB",
  "key4": "F1KH1gdn3mXeJsqwq5a5JmA53ncRiMinohGcpTUhVKiUZMJTFJyAdLSwnjG5LWPfDb8VXuV1rtScQPJ5c14eL3q",
  "key5": "23YZVayRAxS1pcmvpYMy6miRY6s1wRHxBjUAAikjRYFp7UVWPb2F4GbQhPYhbxGo5cpZWpazk53rMBLMFWT5PVaS",
  "key6": "67C6MamfoeJ8W2T2dnbqesRKnmgRJQXuX1DscfQoDTFp4EbQoKsN85tHm47zqghj7trMWbiWxwkDmzAut2wamuTg",
  "key7": "5Uy74fZU3WdSbvFpdpnhAryz7bEGo6tsiKAW7bQHrDf71pZbUsnfi9CaLJLsK2w578p6gyhJpoifsdViidYNfASD",
  "key8": "3K4dWCeB4egivD6J2c8idabh44STQ4Jd8mET97FXAM6rnk3QR1Tom4Ucgs4UiLHsqvSf9ojweEA4o7ZJ8qiXU21q",
  "key9": "2wxd85nBMBoba8v6cxqwKJ6ca8uYnZbbTTDKDQjvZLJXyeHRDebkrkudobyd4KHAN52SWrx9u7o1uD3AztZC4sQm",
  "key10": "2QnHW4QQeyKu38k8x5i4qYNi6k7qwnN2dmzELYuXRVfRNu5e1qAF9fnRzpHMQ9rVAmzmThhbstV4MPG5JXovzimb",
  "key11": "2Gsq1ehaPYXb2f932DiZsgbq5thwngnbMroDqoqAvTYWFe1PV1Npkjyhc9p2YN7XJJ7YKFuSe6FLHavwNA2NgjyB",
  "key12": "54bHect1ETc8HqpSZadgXortRqD3zdypxUWPcj2xKRk8zbkDKKrfRVZMhvP3nnQw6anRrr23wMXhK17opusadUmR",
  "key13": "4S3gbwDunH5akWS7oQsL7NDjWZ2H8J9oALn9HoKm1N4jw4fVzLiKWKAiHa4GtE5bF3xyhMPuEU3vTWaymR9PZfuP",
  "key14": "3AmFvQbRntFEUhYkAuQXrRXFYkGhdLW2SKTTE1ore3vLHyh6QXfkwsJSj6n7gQsSBZX9TEP91yEc3DUy6eWJpKKA",
  "key15": "5h6YufLkaUqoj3mjMts9djKMe9kycXUUnFLHvZ1pju3U6RpqsU64187kx7zy9wR3D9eP6wNjk8BUK6fhh34WQj5f",
  "key16": "eUSY79S5QFmy7ku2dKDtWErnvhnjwm57Pt4rMhnx3VxEVmgyi3biBTfUndstkNxVJqNyCfrmHQRvmzgWg2mrJgE",
  "key17": "3vQXAExSan8jGCGXATw6iBJnxPfFiNvho3jwmjDAXqzAbBmATEbyPbRH2d42RNAwzXRh4oF79NuZ9kNGpRAS8J5d",
  "key18": "378GiBCz1hwKzH9byo3SpX2f6hea94HjuQA8eSRsJWdLgHxQQERLkbTeVC2Q4w8ZQmSoSEVXuLCHwh9Diu6RYaUQ",
  "key19": "4NnKAUJmrM1brVDSsQNX4xxRnxCYVyhMsjDtd4pcJLWrikUnN5SAFonmvYtVnGc5MLqbnZ5BR6gnEsZoBdWs5cfM",
  "key20": "sRMTEeaxWaGjvraP9nvJPHGxydRWDTq3WVJ5ubkWJEPHzsuLsRTyN4PosChiG39ftKejwBSEjr98jtMv1VU8ZHb",
  "key21": "Lu6WessFbNp2KVueHCkyo3LB2ikbMzzTD6CGqwLjzrfmHbtxyMnoyvnKX2EoEqFy6hans1Qek88fJhEbxv9rByo",
  "key22": "3QUQEfgQzX9ygJwxg9QfCnDNFkT9rsW5D6T2NjZokCVQyyoWYS5Fj6wqgRLNZVtAyBmoPEHuKSeEvKQUJVods7K3",
  "key23": "5q1syAibdKqTDPQyFF1rxPyao1DWsQkEshdKsdKCCQ6PJvLBGJZPKwqLCxNZy6j2vqaPNxZz7tCbxH6E51Fept7",
  "key24": "4L1DkvcBNeFJzeSH5keh9TTKWeTNNYwm998iFMfPY72YWDHDoQbjMEyHb6eqqkuvCBCb4j3NH6L9aWhwoBQLJZ8r",
  "key25": "4UtgKcPFvFJmrvwWx1PmiqGMgDbsaEM3ZMmTEGD1W2o8Z1yiLnrsZcCJGZKHL2BewkfCVr3kbdig8chtTYcDWbtA",
  "key26": "4xCStaMf4MWvzYGRBhPMatJXS5xuFYpgMrWnNnEQQVTAv8jvPCHWThDqSSs1Yg3evo1t3Bpx1gTsAva6wHg4bNg8",
  "key27": "Wo7s269YLWqi354QCAyLUCazG1DbtPE8FYkM2GZoyg21Dqt8VYXLb2JPmnJq6xgrk7vvaLz5L6sR1rZpomJ8WqX",
  "key28": "s5bhemrpTX7vcdb9yz7ftBWeEaD7f8uQPMRfJ3jGARkTrH3UWBVqHAyTjAgH6ibcG7nFVLYBNePBSKLqBF5ATwV",
  "key29": "JGmWChqtQbPBMvADRn5SfcnfkcPVAV6bZvPd6usvaFjMxidbhe8Qh5EntMrNit8oSYNHBAUgoviGqS2uy2PZryM",
  "key30": "38e6RaHf7iq7Tr7HjDefgPQ8yAkZ1cYZApqDg4NLx7Rj3rJm4CaK57seBRv2EcD8VxJxi2qi614CBYFNNtHr1gRn",
  "key31": "4fjAgSjkb7mtgfqAkD8ZoXBeLF6ZKe9ssuWCm29kULapLhsFy6sjEfoZkgJNPa6g7WY18fmqwgj9jLwXZr5DVX7d",
  "key32": "37J62tQbrUKKF22B2qpj6apiuQLJKxvWcH1qvpyxod61eJo95JX55LBhKv7QZst1H7vUJy2iXosn8KhuxMAFMZMu",
  "key33": "2ub2MDVsRVhpayibpKkAA2r8Ufd7ntyq5DDnCkgtKUKvc8VRK99dw6XG1qTDa6XAWag56JD5NXj35a9v5D5GbFfW",
  "key34": "5eucE6Z5jY192FUQGFCGEXApouNThojdmANteEKF9N8vSpwHKxdgVLvJzRfrFKBH7kzYKMs71RDkHrCdhz5mx5da",
  "key35": "5qnE78E5KUY6YpyS7MqYbG1rWSqrPDwgaipG8ektxNi1bErUSesiK5JoSq83r7FxZPc845WaZwntWc3VmLVBUbDa",
  "key36": "4xNQjTENPMRdDZyMUdrigBhubRHRdHfzh3NzWcFiqEJVqKTaW17aqCNGiy32XWyeVB3Rb7gj9yGtiw7WPT91WJ7u",
  "key37": "323hnFYLZfuCtq3imDXqzH98tiTYKDZ5o1y19kfjwhAEJ7vNUyoCoVrpY83YbPTBFjJ8dyCVtpUVKBqpWZuGHW36",
  "key38": "34jFEfydt2gZXUYXxyzoc5MNS3ThDUDkvN1Wb5KLJrz1J55oPfNe85jAZ2ZJy35fNoUyHmS4pgJxJfMTFAYEk7sp",
  "key39": "2fUcz6d13kHnNETSeoc2mKp13rn63g1mjB84WbaXn9we2jAQGMyTDFvF6GKQv1a9CEwVpK5HwxYUKmL8WXtnkpfD",
  "key40": "we1pQ5ZYQM3GD1HzDwSzzgrTyK4tQvZ9bCyzn3U5n3zwLeYKJRL54WXX1Y2f2Dj4my6huJVcdhP4ns9dxhCZdbP",
  "key41": "4wqaRe2Ew4GsV1cYv5GGTusKCii8QH3hJP6bKKWa6PALu88sPMpNtBsZv4Bq6QqSGg35CdTzfvjgsnEpQyNCa7b9"
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
