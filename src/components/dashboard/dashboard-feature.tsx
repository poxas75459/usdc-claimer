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
    "6B9F1bPmwgrz6Ar53onPEfTJpRPzQKiBCZjh415fLuAvFTrHmcsWpKnkzPqNz6fmxqe1UTbe97cafmrfFWMvQp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FsqsDukPbVaeC25cpVAH5n5o5yRKFFXSVs7GTu6vgc82yBAEGPhMTruXJHJC6QvEKJ4cNmkPFH662Noyvm64d4g",
  "key1": "2X4Nq5sZ6C9wNRZfKn7Up9P9ZsWSUVHnq4T4rG5kg5f2yzySYYD1BgYhXWUwG6qjnyNVTcPiugnpRKUdzs8aurDM",
  "key2": "4KcrwcFjBm3c5acgYjdmsth2SMpnAhbfzuH3T1t2RgPLxsbGVoYQpk5xM2MkR6ajTbzTq8ymoh6negyeCt9J1Rw8",
  "key3": "hbhVaLrY7MFqADWmixbiobpgvBVv6wQAiNMwctyf53eiiCgGjpDym9R5nG9jCUWXivS3q3ynS6UxBayN3HcvErG",
  "key4": "63i8XFVdoi3b3Y3dsmr3znuzbjbmJeRXpsBiWNwYD9buNSAz1pU6yhfPw1W8tXFxMd5bWBx3TgYvaqQS4aXzPqeY",
  "key5": "QJphyhKU38x1r9bFPEzTsJNgmZ4UezeTeeTWprdJHNVrr8DTaND1QnxegojHjP1dNFWaNHF4TLMLtPXQQFkeU1Q",
  "key6": "TgJBBfDvZNyYzkss6hcGgwRaZ8Db2HHg93G4YCbne1en6dNoAvucjQuUhtwTFUgtGWjxqt91gRuj1Ht4xsBPemm",
  "key7": "5kjEZuJvbgv5Lkw8V7DiSsPFbVTjzBmjsabdfNnpgSh8EQq6gAADdVvynBXFteUmH93k9cQwz2C51m858CSewGf6",
  "key8": "3PaFbGFsrFzX3zsChjwYiJe3PonuFQPT4Lvmpia9fq5FoCWDRyNptD7Cnw8XRqKbBLKb5vg2NLKp7HoUKLH6oyoR",
  "key9": "3ZLnL2zF9RCnGP8vfVmXuMCqYH3MBrSSCfZ57txaASQE3vAJ2C2pX979tfBhd5oaMxcyFB5XzVqd7fS1BzcKf22B",
  "key10": "34m3AKkSjN8tCyLLiEYKiDm2aicZPkFNENsTmgGC1edjbV22QQX2XBwQKYrvnpihVF68Gw6KcirbpEFvoto1xGyg",
  "key11": "5mNJugX2Mz4M3uvUpUaKPXVmh8R5BPVPnQTceaaS5CRuUjid8n8Yx9RHP93T2HjGT1uCdWEzwfFtzXtuW8d6kzDo",
  "key12": "5LY1AKR6Sg7pimoRVysyaUscq7aZvJtkapmh4FVzrHDqa8pD9wDZByZA4YqUTK6cyXyRUH6CG7pYgKMpeFnE5kWy",
  "key13": "511V5zEaPGwtJnSfVRjvhU5cLWxdTJjBVWfbYY2x8Ds9RCqzVsYmdhevdDCBoafPrd8yAabGZtPjuYMs23iy3mUw",
  "key14": "4G6LZ73oowmq6ughChaXXtrMgAHEuWppoW4jVpRpTKS6skQ77CaDFxWcJn3zS8TuW9L4mvdNATV74NhysnVUVTb2",
  "key15": "vt1JdjBR3LSQkB8eXVDWnWZDxbnjyQ3mkFRV28bufRVmeJ4qkqDJmeXNvfzrD7yi8qffp8sV8nwBrFfY4595W5C",
  "key16": "5hBWPatVNZyR7VzuqUyVNUvYjqyoRGkmdUpUn9HV76zbdbgPEN82n6YWVDt5hgi8nJCq8muJwuP1Pd3cg8szcknj",
  "key17": "5vLSMC6XpAnpQnDe7Wgp5wnxUkJWuf1t5oE65Mo5ezhaNPjykHoXBWq1qvZky7dMrwDC3niUUaBenyWx5DoWyg7R",
  "key18": "4iZanimGVfbp2Ef76Ax1zihiPeRqvrkze4kUJsdShj2EubLLZ6Fk4gpVNnqsJiQR6Fzm4iADAqSRn4Wot1sm71cG",
  "key19": "4fr9a8bFRZ2saQP4XpgYC8zaFgniaAx9JQahRitboVu2om4oS7F8X4SA1uTAY5Ra6t9ZC86oweg1LkHbPxskXx8U",
  "key20": "47mYHwhxsxSkSfaPPtQZKrgjvQ7ovw7Ff8kPGZ85xuhydWGUUhQGnfTUReQ2eZjAGeu6L3VdfS5XPeWPCJycStH1",
  "key21": "4QvYWG1mQg5cpeF6D2fSJc2jxAtLd8nn6LcnRoqJji1xFBqYdExGWNyQsz3mL5ezUM7Zk4WirWc6ynbRneUq9mb2",
  "key22": "4ZV7i8FPWLikPr6VXMQnPSRNcHB57xdnAt4tAq1WLsUKmanEVuPmFFav4H3raiPFYuJuGAuGzxSXQksq1CA9jAoc",
  "key23": "4xEeScVBgpQr8Tz9HkeXcQBHfAyqfDTGZYiQEyWy3A99gYwgKw79VudCkWQ9ge1C7uf9WKd5ozSx1AZxGMLSuNct",
  "key24": "4vKoKSgfdrnRDeZ6XYLyusTwsi979LXNAQic6cfvegTucDAeJH91EtSJ8i6Ke7TfrUDoeQQocBDvbaKBiHsaF3ak",
  "key25": "5aFgqszkddgtteD2xNSL22NX5tKri2ft5Sdx6GaGLNwwQWYHennPAnhA1PGqHVi5dSCDScTNayX5ybV1RVDvmbNa",
  "key26": "4yvnWD9Z5YLqwVjpUs6ztWPPVMNCiYPi6nARDFuApfVukYVZ1E7xAphiPer1gBRnM3cjmikcsXg6es22Pc7W96Ci",
  "key27": "3NwrkXyqBQGZVJpA4R5WTqoRcGZ7BxS3eTbYHvuKJQL2a1fzV3GUQ1bu9rkPub2hET1V2r5od1zHQae9wtuL5t4v",
  "key28": "47WTG1vj4AFjJjZBj4hFpjyJbejL6aZBCCyHMLTm8Dv9L9NcLdYsABvZPnw1Aq4vMfGc4iHn1e4QTVcAByhjVsie",
  "key29": "22HV8rMmSpAB74g4GmcdqSEdCHSAmQxrDt4mePqQbw789jHPd9BG6y5zTktQNRLZZkx6E7P6GjonA9C9wdbSe43k",
  "key30": "XwmRMXXa7jzJ5R7tfTLprm3cC8YBd4qz1PokpecKJDhvq8cTk3ZUcc6Zi9SQeyg3SwYdrwPr7S1NqWnkHjA7ipp",
  "key31": "UzgUTEZw1tjV9L7uSmm5GJn2DqBY1AYsAehHsBCUPY9MrGTKiTnsgAqn8azLMAbWU7Vsh8BJzdf1h7eDij7DLY9",
  "key32": "3VNXQAvb6wyX4JiUV3NhZHHXBSTY3xBGevAePenCbeB1HTNpFvsqRcmvG4GM5YXNvJeYtizc2NJDfHYEQsCSn7VX",
  "key33": "rGiLeeaXAap3n1WYpyqjujkHY6p7kDyFeVbrBJcRCyhsk6amtfDGuupirpzgretA9LFTxcE2JU8gvjX96YS3K6j",
  "key34": "2tKmsrLjsjZQ8EyjULxgiBUBSGGzZMGe6LSvar7rD1ZgRpRAFFNbYtJNs4SJw3mBBdgj1EHXkHpeP8nc8W3jtTNM",
  "key35": "2C7M5UeGAwdhQD5AtSKkLAaTXL94Vv15ZbsLqYUSJP3cEk9kEvsbAcBRNUoAwjwnaAFGPoPquEdBKJ3nJa453N65",
  "key36": "23pYRSvusJr6sGCPz4onn54Mzr2bnGaZfoZm9TngBTWyGPw42u7mRnDTEghGonBzhCpNM27uqG6x6BJibC3PjVpu",
  "key37": "4hf79P7L64gxwVUYkBJpi1rt1nATu698HVvug8xx6BwqrQmsY6NQkNkVAQH5MefVxHJGBFwFWZe9BN8AiPCCMbwc",
  "key38": "2zqkVc5N3R9yi1do9gyKNsssg1X6R1N1XPEDnNff2mQbKr8BPM2eCq9FATLUtRGgwBtruzZmpBciDgjvYMaVgHBo",
  "key39": "2ssf9ijA48nnGsRfashbN3kbjB5u4Un1c9psC1QRGp7D65uWj5Jn4UdsQ3VBPbMdEULwKvEAD2xw7Zv3V9kRmB5B",
  "key40": "42VkXmvuNeqQFvvzaxzvbiZhpQQTbrSy4b3W1rG1g58Qn9wykcHyrxpgSZa4HLjDgZUYNxxsp9FKwxRQ26Vh8h1K",
  "key41": "5Jr1jpvVVLY8Cgv77UdqSqQQzZhNXAtrHYmrBnvJ7LQPd6rxVQFvcrQCG32TEH6upzt7UbnRwM69zgFDRLFGG67Z"
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
