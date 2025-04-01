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
    "5F9jjBSTPsWEdvog4QfUHnKp3mf3RLuC49b9CremjjHE9HYoP6oiAS9WCxoni9Nsx7Xo7W2yJyQ6KYGPvmQqj5U1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eJY7HMNhaJxHyseCAo1SkzGcpVLWqweDBjVf1M7NALousCsgPVovrocvtZeKx23iyWmZSNcMXmHY2AYos19MAKo",
  "key1": "3e6UzsDhHfdTTqKkgeW8v5CqjL9UuWhWhHCCwLxxCLAj2ym41gBRRzqjPwjytqPhZnc5JAoAfeyyCqrQGCHoKRzm",
  "key2": "3nPa95KAEGQpKvTSAi1GUFDjBUvFoLvUqEbGt2qKBHeHhAR41HWyMmAb1ZaU6Wi2kD6QyUFc8QEkHDL4qdYbp8Lv",
  "key3": "2kEq2D6om228U5eyncKyGd7fsmT8wvNGUZHbcYU3gX8kAvaJwaJzQcgQm9Dxed2RAQWGffHLaWZPqfMDFiAJWW9m",
  "key4": "348bPe46G4ediGcr8SoHGHj7vwoABxrDG6E9BATeX3AJSM9MUR2oSkyBjB439BJ3m8q5DTS299bK5J6NHpPcUxK1",
  "key5": "4EXZbEt9nJyCisNgmDS7GKJcEEXpqKfPB86VwfBwPwozEfBCig4UPndsC8HRX7STbB4F6MPdSxx2Kyvr92cTLLxi",
  "key6": "3WszBv1HBTNtktWwkqxJyPCowamdEjZyHTy6JD2AhTyxrU2Gwt7hEJbbnjUUpgnHe9c1FPMCdJ9PxNgkc9gUeD3S",
  "key7": "5j4EpQRGJWz7CqDYRbFjPLUvsrTVhzSx4GmyLLaAu6ijzwiBhyGyeXNMk9WRQSYtq9Yhm2wUeXzguVzo74Nickky",
  "key8": "KknoLYopRTqwPWabYeYsvBrPNucC7aojQ1mWCwhq2w1WYYPjR1rohJgLdJ72wurQYUL2xwLoKxK33ycjDh1jkie",
  "key9": "4idmSQpa4u6razkVgnY4QU8MX5UvD1fiQXGqmwVEekuT5KjFRdrKKVLK6wwrcrax8bLiUtAZeuEam9VySE8eRkwt",
  "key10": "3gRK52uKommzqFNNyYuLRYeF7Y9sFppGsjNqhvUGRH2QQ5Di63Do2hH8S79xLNTu5VRrvd9gY6u7JqMGemUMtjWo",
  "key11": "3LDmHPsFAp2E1b2UAtwbdtsf1b8C7CfuG2B5rkMASiYa11esfRo2TEwLRiE2RfqTfaQroguxKnoaC92ofwJhBWLX",
  "key12": "dTJUSjuWiqEbGjfE5K9h9AXZ34GJv2YXJimYtzxdbjFLJGrE1nWRo9TLfZFd1yzQhXzbjw9C16j7cyya1qc5mkh",
  "key13": "5fMHvreZeSYKcY5JrKZuSHwpJkkhGnFwq8YfkR1BfrzzsGt4Msd1FdMqkzj8nttFfBpXQXZksziGjkmsRuqigsxW",
  "key14": "47AbKfGkdfFWNxGZfUAUzUpap1tRQiwSkbkXgUyVi44Rg2PW4juBpsKtRuNgYD1BTgfWyXUBsxp9t8WjiA2RssiP",
  "key15": "5SietjLRXUDKHrbcjhF4pkXYTFj9BMq1QmpXXV8Ecx5Evom9MA192vJFrgatmbAzyrV6CmUVBAy1LhUFY1njGiNj",
  "key16": "2kUyKxovofV6PnDU7BZMN5hKtVf3ct2MYcPPmewDW2YUX2VP1PqMtaXUFCQf3S5qN78Up4Y2rx2RaSMrC1nzSvSD",
  "key17": "28NgsaMEueWu5V8RhMX2L3BFJ6v2ytoeEyCEcvXBuFG9fynEWezxa2HFBSSUCzPKZNARVxgRySUoNRpYpcwCxS6w",
  "key18": "2aixc28ZtV6Sp16zwHr6dUyo5oYt8pcuxWWqdmew3oDSdPqb79TgnPXufTXwwC6iqHeY1L4s8EZKDdkeK3NuFAy8",
  "key19": "3Mendh4jbWLJJvsHwnQ4tzW6Lymi8aJsc4Vqu67r3dL38stKLZxwnBDfpwuboDi4fda5kH29L47pbLMcihpxQq1K",
  "key20": "35CVmEawyzwASmvdL5ASzz56hb4HdhLbf4DTHtrTVRuQdZhcy841Rua9st1zdqprJyfFKwhqyf3p1QdY1PY9MxXq",
  "key21": "5CCTgcqhs4ybVyqCy3TWdjKENp533fJHs3vyxi3LjkvivSSKPAe1zCXB1UqSLM2ntY35oiHazaMq8mfMumqbt7Lu",
  "key22": "2R2hMUz2cfZSUUxbSXo1t9HSZ5KaDV4gDSV6NGS2qpA7q1ca7jxyp5W4Q6NiTVy67JvFLuAVKHWf37zC5QtKVTXU",
  "key23": "49XWbmug5eESFx6A4aRwKRrSMxau7U4JJ8ZMvqA8upUegobWFvEUZ8ro2ncXuTL2xZ5yWisi5MQ7m7xHjKef1VnT",
  "key24": "2F14TVt4B955bnEAdHsSQ1MLn8LTHzcXqVEDW8yQfPYuWmr2j6C6X97C6p9MyZogbzr2XxZ39bLx4KzDPfASqZRP",
  "key25": "5HzWvag58c7mTFHfs2kvHAtqXgn119zUzzNgTditPfvB3thWV7aMVfYk4uDJXHKVGHNd5tpt6AC6jY5DwVevLVDX",
  "key26": "5g3QU6K6yFi3332BNC1yMFQ7AvpHgRQ9u2ANsX9QLzpYyNAVMpW7Z857FacYQNntkcGVxX3aYRVsnVeVxYP3GwRG",
  "key27": "4YbXvn5qi1gTu4K53DYVoDW3RrkFjoN1w7N5JWyCri2DbyHK9a9CEiq6qeujShK1QktPXBNpqjnoAQTicSHWFVGZ",
  "key28": "pygUEDkpGRayw8djoSBwkSFRrcsMGMZ648qT5B3uSiWRDDGrBzJDEoZMVtkvZA1nzFNfcTwGLrRXGWTAF2HvoqZ",
  "key29": "2ZDC2Xd7E5tBX5JfyuYqXxKLPNF1fR7bXb9hpUPUajhM6JB68NpT3cWFZNFYujVzRb4ttzopYRmXuUCTFr4HFhmZ",
  "key30": "484k6dgC6vjGJgjN8HqT2KFp8GK6tfZmnZKLCJ298LFpAe5DmY3TQ2rLfi26QCvL4r7bJhSLzN1pvF7QRjNVStU4",
  "key31": "516tXQzjYhd42HZDFshuq1YCeLxDTf3B3xahHaJDcJNycKQQq8E2e6nGsCv3BbaqNJDwZ6EjYBDVFGLQYtyQkMdh",
  "key32": "EiEQufNLfzJi9xCStuUe5TzH8HypfcsFiStLJzFwZYW75C34BkLVy63mHVWQoHKYmi7PuDaPczTFSz1EFQrk2W7",
  "key33": "2cuhciXRTwttjwT2qtdYnSvryY8dhAvFvuGU7XZgRDCLpyvCRrx9mf9EZt7mDKzM92nnxsfBaeEQheie2L3XSiEm",
  "key34": "29Q3DjKsjeUb2g21eWAewD1ceDUPni9BuuZmWg4AnTdc8nXf9xugXtob7A5upPnhbUPR5W3wi9RN63GkTWARvTqq",
  "key35": "3aTz1SgyCxU5qb2r6gsfXendypPht3mV2CMsP6xXq2Tr4pNDwxiZk7htzzTy1EwTg9g7vsSqBpuQcTnTRW2oe5PS",
  "key36": "5hPo944VL5N7XnJwYsN3T7Cts9X6eNj6vxJhaviaG8MDsGGZFx2AaMdHLtQjKTRsuWKW8Td8kAsyjgoa8KRXAWwE",
  "key37": "4eRz3S8mBJ3oNojgsdF8uEuSyQZAQSNJnTEX7YHm3HFB46MVR89TnBLLvQT8dpxBNdig8PDRx75YQNUTMoKAhXeH",
  "key38": "2o8wRzzXRSabBvfD2qzrMeX8UoAEfyGU6H2r1P7RiJvh2SgGLbH3vWkPi53ibRuw2gb6oSn8uJLDFxG5pMhMZdac",
  "key39": "5Br74x7fPFVnt7ewr82ZL9pJTJabnKG3TZZNb84oqFFzvEDENrUTsW5b7dzHHdUc1QPeGAEbXqzQ3RBidcmjvkVx",
  "key40": "5aQZxZeH8uSCBQVv2yidsMBaio1Tb5DdVronwGrKPseD4GpKHfpSeZC5WdzAMKNuaTWsD7hrTbbyXVXS7HyqM5v1"
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
