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
    "3ktnNKvn8UNTuXGM3E4ECm6hDxNsxv3DxQzjSB5Zjzb3VGxc8fWR2QtDHFMKWe76o2ryZGM8RtnW7uAtdhK8GeMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59rR39MYwU7R2cgt23ZQ9HvmxjK3eFi6VBTJG4fYwy1gR6cZhRb4GWTSDckxyQKs7e1c952mY59KU19U34HzjfRd",
  "key1": "5Es2odPnbvjvEs1oHcdUXG2iHCMVUAqDp7RCnkiPtsBxfJ5PFBBJ2MnR9CbvQu8RRGT8zwhywudw4gE72nTF7T2b",
  "key2": "7Y3yoRNbbgQoppHYnoDb63CPGcYAaidVaPKvb8XhMJNp281vEsYBzYWjmoFsvxM4CAp1L5YrK84fHfM9vugjSLZ",
  "key3": "HRYmk2aRaHJSEpyAuZnQAMJeggxG9KqNdQ8obDtqG6pPGUFUK62PFEePDZWx8KLVNhdserKimLvMtA8A2rG5zRV",
  "key4": "VmvnaA6u7gEj1n71fmFFKz7mY1rw4MQ4Vr6FotMzrTB6AqNLaUFk7YPaT5cfe9n5GENkMCD7unXDFAMD9QmYQa5",
  "key5": "4duXaLo2w1t2f2TnKhUy5hAJtbexfa59V2rVBNUP4U2G4xyThqQ54Z5kwyT9LE3RQ6nVd3cwWU5RaopshtkDo2jV",
  "key6": "3nUPeKWhjD9PyacQ6o1cPaukswK6jC6yuS527aVVkJ1g9pkgR3wttWjpnNXubgzHHGUUAvMFpD2FjhMjSVWBTeT8",
  "key7": "42PBCtArdDAQDTR7cGrRZPpCFXvRoLuRSxpZ65fnfKCvnwXQdA9gFUKF52tztHuwnTUfh2GfxBx4Nim48YYNeYYh",
  "key8": "4d4k8dgwowv1hXXhSzcjCMZrgRS6b8YYPdNGhyoqD7zYSWi9iXK9Hafj6nz4xpkuYyUsUooVQfZ2G4ZuxtsrCmFf",
  "key9": "5uX17qbuai6BGumacY3kFtSbXVRzfZYNZR41ioXSpb98E8eX5vqDYZnZ6SQTGr4w7359ftu2Ys2hcp8UH2GEDjr9",
  "key10": "5XHyHj3drff2YopnWpd4evj45SGLbw9FW2R6VgdT4QQFUrbS88QNFMhbdREoBhw6JGzUHQzrrpDWs4Znqz1GNyf8",
  "key11": "Dh54vqSvawCdn9tv3eSpqfAFLc3t1JkEt7tM3NcgQdmtBxCvjnwckC1Gu2RoX51AatC5kFVhXu5NaAHJFwGrVC4",
  "key12": "5TQmWr6ToUgt5Eq94v5Rw4FDTQeqoH5zzRNPUaaSBPSVFo5NsianhYemVhigsakNQz1bbXfKEaTKx8LGE21vsJZk",
  "key13": "124qfdyn7qa1dgh6rfPavoKdYjoSeDskrVBQVhSNxb869evL1AGywVfdA8xgBSMagYF5uWUJJQecn4hAZcAqeMK",
  "key14": "2o8uoDy9dgDbimeK39eTkCwqfvSesTQawCZqCgczf1KtJZ2ruPggZk3g9DqsAEV3EakYiHv5eSs1SwVgRHvUWrPX",
  "key15": "5aJcGQxSGW8oybv1hkWQHWthNF8Fjxg3awTbntPgXVW5bdo3rCFR2NxgAY6yh7CrrcWWw81fErJGMaLc1nL9cv61",
  "key16": "2hFCUsXbJz91x3w29ns58LMgudkA5kqEWbAqPmBLkvhJg7nEhMmxk3s91vnGf9hP124P7exa8Tz5gHzyuJb3zqXy",
  "key17": "SufdVJny3JbEUkYic22wtggs6A9r7Qtb8fzRtGKJ75VdnaEGH6j68T3GJZchktwjH7r5uDT5EZpXGs7g636KYYc",
  "key18": "4mx3Bxj1ftdCDD7sDKau6dTs8c1Rk5kQhXueEvbFGmKY6ANMhDifT4bfbwTAyxstb5zJwZGJpQJVorcz2faaLfEV",
  "key19": "YLDjgHXGMhf777v39Sw6tmspyGuQt5d8iewQXeoKHTnY1QUgGuYsxxkDoVd1q8FwjQpxeuE7rmsF5s5Ydz8X9zA",
  "key20": "3NSd4qjz36chbrTRwZdeczpGahKu5Ds1Ht1Us2apUexWAPzeBGfvD3nh1ALWfe5dD7fCQyRZVy6pTynLbwY1wc8B",
  "key21": "2hJ8Rz5UpCPvnnJojsaQP5Wa2h92bb3p4ynpjd17cBxtf2Lbfthz6DhLwRcDHfFKH6qTCaSmUMAXC4h4xCr72y4B",
  "key22": "64Qx7oswrg3nc1uYMDSdnPbmmkqMV5nnbuzPJHWVdiiL61j3E1bdQodgNfL6qbbHiMGjfaUvbVc3LhAJQP7zc25C",
  "key23": "4cMf5WmtrZV6L2GDtgazUorv47MT57PX1G7G3RDFJA6bSL1e3qdaarRZXaULt9BeQu5se49z88sXTgNmP8wSc2aB",
  "key24": "3JhgtDzF6uu8P2NLqt8SRKSienNuvLgVZhwAeirMk6MPw7TnGpyVShRAYQjM6NJAWmSRwoanYfyDszFZ7Dm2sFAp",
  "key25": "2d196F7CFWgWStJFLx4vvn2nYTbgy13dzRMz1kUmxeLR4TPJf1bWXvDVRvxtDvGRzxpejcgY4152ydwZWtGP9HUC",
  "key26": "4oaiSsRMDkTLoNgzjV2JnNkNm9jH23rFtSnTcxfEorM9RsmANN78spAb5dJPvefbH8uWtj2Em7XNzgk8pqdhNSoh",
  "key27": "253Ttitikz4nH3XzXUCESjU1inpBoeWnasjym7tkvjHZDYK3D1n2pjRSxDYeL1fVbAA54y3coPVPTiAhujXCPqVX",
  "key28": "2zJd9JrtS1UJCKDEPpFDVn9sePdMueqh92vkQ4RPv11TAdGH5QRsjtyTghPe3fT5tuEjz634TLzgkETLHN9kgW9h",
  "key29": "VKnHq6hd33cTkHgLPfA5Q5XAMP6vmpvaX16aW219yRvAjexFdhCwe8YKkDpqJRuA7SAV7AWtP3tBujJtrQwRYwS",
  "key30": "2MJRcT9oNnEN7UC8G6z1L9ozqpFXGTxTtcw4UthQQ57NTLNGQCZ6V9QzFZBNnkNgJXqAjL9WCoWRm5nPTjTqokTf",
  "key31": "2GrHFjbuRTQDohf4sK6Cuh92DgBPRHTtHFNYsfgCJFCGoB2Vn58J5m3wcsMr6a6w1UkLVW8HJ5FqS1KsJd5cVEHH",
  "key32": "35VCDdoZCG5zWMokKcw2k71jUAqfircDKRSMT6B6Q59BbbPfZNyZek6REsMPPPnZTzWJ8jBNMvK4bT5gT3V4UZh3",
  "key33": "2i8BBG6aGHiHbTQHMnFpLH1SFgpk78vN8pUWoQ2n1prnsZL9xVTQXkwWbc3GAnWyEvqJrKgZBT5gEUC8QHSpFyX5",
  "key34": "2Gj5keByiMhmLrdLNXqWmai52LHxVcD8eNMG6PhHDfLWREnMPMVpWgKLShvSacLEdijKopeLRAGAsj856R6C7rGY",
  "key35": "31PJcXrYH1FVXhr7LqGDoLnaxU8cd5ipGjRebdsXxeUsqBykvLjXqVxBdPfGzT3oN5XnDksEM9RbrnLmvw11z9Gp",
  "key36": "NL8XSRhcEZdTLSJRNWv8YuM9axuxDRAZVAfLtA25Af9MsYxzT3uHJafCwcz3jFipCADyCaXKqDYvRSSqcBuP1Zv",
  "key37": "3kjEwf2n1z2zrRSn4BGcyLnLB1roQE71fhetF4tmq4psX6Tayu7UEJdZaxKJwNAwEEHSRrsHQxSUVmM9tVWkSD5n",
  "key38": "2rEt6TBPxQVmn6kCWQ5382grNkV7EVHW412GccJeq7obBxxad3yJqMrPwVkNGeE9JCcuSRgp9DuJpV8P2ukM8jPA",
  "key39": "4AWzZrWAWiTNTrwLhPaVW8KVmdSRxxwMLso5hWTVoYwqK8CCrRfkJZEDpKF6ZvU7LK9ueFzp6MQd1AkKjZmT6Kjk",
  "key40": "5pK25MjEpKbxbneJQFtzZ1DdC8syYintfGjq6oAiwUZWnNiAvWkpHRipwvSczoHbrrQqDryeQEGSnoGN3tWqZtnf",
  "key41": "4Y3cagBAYDeVpSY1qzjSTz9WKURys7ERTrQeMCewUuJ431KrDjagF5CbdG6r36iBzHfRH4gMh7F8QKRvkYwQZMBT",
  "key42": "3iKDFV7ggP3PKogk3Apz4KvcdPnhFvREEzicHuRygBkSqpY4zgJmCHCeh5z4hBvUUwnAXupyzCN8r3F7YXG7aWQn",
  "key43": "4d6tzNzDhaS1NnGTuQSwzU8DWNYj1VmAGipVcjmUYkg6TXdsRNGF47tj23v6dh3dt5Mqnpo5RbPF1GSPoeXNeaLe",
  "key44": "5XxT6e6BdcsSdYX8hDqHnnPwfTRTodEiEHkfjSgMvadXr6yUGmQzUX5Dp1Aa9LGBSwqZ5ccLresSqsF1w9osHruc",
  "key45": "2kCaQyRhbq3ohfcVNr5UAoJw33bghf4EmsSWBncfzCP5R69qUncWRR9dQqfkSUCzPDinR3A4xQj2cDGkv4rWLH8M",
  "key46": "3P8SzoQH583zBueygz8gykSHyBZjqTfzoFmQzzphGpkzigcgMB21efGBGyvHam7wUQi9o2duxcT3MH72sBRMmY3x"
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
