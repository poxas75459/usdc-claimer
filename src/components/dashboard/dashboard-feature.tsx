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
    "5Cqvjr6ynaEMQCAgHgdHvt574QKpvgm95jMLw3iQS8praJx5VhCj8EqST31Ey5yZo4Yt4wzKuuLv5ARAg8W6UFU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lda3JS8a59jiysbbAEtV9CB9TRbPcQNvD1rSVCn4jPpC4qWGvCR8gFgquVDvPjQPpKZyeHN7SEnJeqrfjXDJMoK",
  "key1": "3y737VJEGuNmLF7QHfdw8PdUb7g7a9FVw1yUt6zGCdczJJSJ3hUTcJQqUH1rmttqh66Lc8AaoDgReVvXgC1mCqfi",
  "key2": "9kmf6Vq7JFV5YMmJyHEqzn7Qf1e3Dz7WzQ2xucoGDnNTJzujTNPhMj1HLjQ9YtcfC6intBL1QPUQ3sFSEyJVa5K",
  "key3": "4cenEJ9xGXMTU336vB4DTWQ1rrzTbohKRthRUFnSV1VeH9ufFUacnVHs46u6SPsA7Ko8yGow7Q1rqLxtzX1qPC3f",
  "key4": "2fWKT1khXDHNTsPiE4oAXYoz396u35qGRLTkkbsV7tQDoSYzbtmMJ8NJKK4zXJrFicC7w3FS8WThkFXP1t7wP2PE",
  "key5": "2J8ozXxxPvJ2gW7vPY7gXhJm3gRXoeJB2VQzngNwQ3qosNp65jrEBtkbw9i2UuzzkaoEvkrxE1McyhDKmxwRPpz7",
  "key6": "5yTqCD3sVhpCNSWX9DpA5frXfaa88Rsw93TENZhRMjjHceKWTmy5xHV4Eyibft3nsk1NU87WnMuHY31RMhSBBDPM",
  "key7": "427caB8oALTGBnFrB1PrtSZCZCtNW5pUFaLL5911vCRseuxoJVG2PHafBtx6jF1Ko3GEpXCCbKT2bPGWxDVXtB8a",
  "key8": "dwxuDQxr6pJmPLF1x1w5XjaSx71NXHwix9C3kxnsXBK78dtJn6RNXdVjXUFbbRNTvt8G2JeDPwZny1EgFnx2GUW",
  "key9": "53DNWxhzJ1mHmRLafmxWGFLGhMWBf2pm1CZuwVMBRk71VD3DsEwXppLawqiC7hzSErJcnB4REiKuzxRet3uXPS6L",
  "key10": "3nZn9nyhofzCPs2tHw9APkKWjL6nAFUPahPttYDe5Wgo3bdhhy4ZXkz7kY4ze7NCMQkRdRf2bKNZBMVBYLxjACT3",
  "key11": "2BLDySeLkK5C1QMgJfydksMvdR3RpA6EoK42qwHHZn5KiEXfHvmXozA7TgV8nafZxxKZ29FkkuC5homNq3nNpwME",
  "key12": "55Y6vYFq5poqzXHxfofqPyFyeVWqBZJ3fJHPgiQed1DuVHJ3eTHwvoBkWh2uugBo59Pc9UryaMUCcWG38w3b6AQH",
  "key13": "3faz2v8FEfNA2UAp3cswrKrYuLrrnXfaZUcSnciSwrZ92symfRfhnjRKXS3rtdUrNYhVYTPsbWhYqXCicrLNt26J",
  "key14": "Fs4g6p328pLGSsYJXQGTBfEjfvxWcpX8vim4JTvYKhYPiv5zWWRCPhDxqKnD42ppfag9d7dz4CFEWpJePV8iaRd",
  "key15": "37retCKAAEKt4FuKX8wqsRNCFgxP9mNVJjTfbmMSPUcSxYsM89d8PYQ19cH5V39gPJkUW6ubBKugzXmhJW4X6WnD",
  "key16": "2iw9qM4E1unGczC9fmLiuJ889whgYYkRX9UrMgD8Mejqm3BHVCDqFcKbTR3FQ3SLiLGZm9g9v4sb2K9A6s8mFzLh",
  "key17": "49RoBMJXfDifNupAGhNuMw5DJuMCRrcHAUc6eZHotBwd4p7LQmeyYUSkrjsuR3FKGa4tBC1NTVeW6qpZFAvgsze5",
  "key18": "Nj7qnP2sxhX9wJ1Dr1dQEZ59KaqU6Z8GggP22SfdNYFNAQBgYKczEH1HG6dPStNvm238YtQzwxXyC7oi3tghpKC",
  "key19": "4agD3hsQB7fKFq84wPqZ2nx3fSduL2P68V7zQtfCgYFpaTkrVZZPwHLfmzt87kFLnujZZspgJ2PpqXpHgszrS5Qy",
  "key20": "2nHaqonkHikgGsNoa9q3vyAKxjMgWbpZTjhuoZs8Ee9zy6GNGoH8P3xcsnve6YNS9Rvj4WU2B5Hn331qAkYLPfur",
  "key21": "3nhPSjcyyZQDBVPrprTXqzZcJqLmjVPehADd8sytEBFPHitMDa3wFAU1GNdpznsiEj36SASEYBwMnL9avfYkkYra",
  "key22": "4s3MquDDwUFcvyPWNhgHq8r9rqGXw9Fwj2TvG1qDdkFzLKzZtAEUzptT7cnYCpKEsKjggngyjA5hN7EZquJRNzGA",
  "key23": "4NAdStbxCtsNa1E8vJj696DpBsrYm39T7pXgjrQNeePW9QueYzqfna47QeQGkHh7xQoWCy9Z1CwZe4Mqpf8XStzN",
  "key24": "2xrsbJ7DU9fgcrzWSuoKa6jwkozw8fUWfUZRCiJTaFv9Mh2Cn4DFxzf1FywB816pFCENpZ7SzugpBkdZtmXmLQXP",
  "key25": "53CPsrZCycg3nHnUx83Ct4zkmD3Rxnj87nfLhR3iMkNM9va54PigHTHdeutwq8MP6QbP5qn2eLwccLXZBy6TpyCM",
  "key26": "NWjpRUbJRGt1xyV2jxyMtTUGL1DqEHY5ctYhN9edR6d7HAvRkxdrCSBoA9Ek1NtP2w27oinJMAzVjZsTPnbUuGW",
  "key27": "CBmkJS9wqmCrvVDBijwptN98QzLyzXFUPGfRE2UQDuE82QCbj8X2SgNMQnuwxny36BZgc14oLtvL2mEr4uFUMf4",
  "key28": "3uMmHZ9Z2oKUnzFi9K2YhhqDtddVSNL3XacxmW6fNWWKdWi5jzcwXWHJaCHMNHySBneKqgZ8wFu7CEgqXWnhD6r",
  "key29": "TdEQmFALxxwEMT5659oBAzQiBwrdZYtCDDPgZaKBCBSasTJuT1TR96qFpgieXJ9iPQqNFP55YekbbdGMZ3jbuFj",
  "key30": "5TX9hUnb4pV7H2JUQwu4y1hZ2SqTAMUwn1bHLGQo9LLYRzyVK9dfWj3nTdWjXrN3r38Cmsuzn2dwq81TjfBBnb3J",
  "key31": "5SiWJ6HPxKfKaYdv6t1CPPz9JA7YaXFLk8bmYT4fUzVk65kh1zBx1Sm8ggU4L8f487gebs2fnHHXAGcPzuN3gX9j",
  "key32": "4v9UdtE9iNoCUzdhHZC5fsEAkAD42Dgsz98s8TSdae8rpDmCJpcz6aY17NLuZz4627DzXMhap6xd9StZp8qhg7yo",
  "key33": "2TiSfDYzy2D2VmokxzhfWmB15rsAQmq4CuYAHJqrYNUtK5mTFwLSUXGzUYLqeZmQSTsvSCJp2tAuFcgdtkyZ52wB",
  "key34": "A4AjXwgKUck3VNhBat8pccpHZsbgkqga3VytX7GfstJPFaXQssD1aHtHS5UerdVSmme5iQFQa6avP2EuQKoezT3",
  "key35": "Qh8jFSgr7NzrFSzgewCAMxVe8eRsghZopHZJ3AjxaWkQxep6rrkmtmoHLGAZPH5Mfw1KctUbJFK4Rp7atT5NUxc",
  "key36": "2wwRzDn9u34HD16JzaBJ6mmDT7YgA13ebwDtyB5JAB7YkQFy4PQEPzaABe5bjxVmcZnzfxMpRenjFJxKCTdKYhpc"
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
