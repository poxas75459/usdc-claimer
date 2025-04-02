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
    "4bNvWmKU6A6e97UJxe6MP6n72xbn5SfPuCJ5osdbpMen1zGPNtEXj5zkPsUy4Zc5h6e41WU8AKV6E2UdrvV8kAZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LxLfjZP7KZfA3rFmg43SmsCrFLFKdbkwrdkx1mFeYxDc1o6vL3MNNKpY3oqhupgvuo9RkkYDh2wKAh4PYfuf9o2",
  "key1": "4zEy1dwkyNxFN3BVtFtEVLdzAfERgQWECDV1NgqAMbrtEQL9yPAZVaD9h1Xm6wzU2BymFcm8DyrZLfpSum5zAS2S",
  "key2": "3aEYKjqUCm4LbVcBGpium5np8nob64m9BgdqDjSz3pNyHaH42FccFqebwto6GT2D4sSPY8c1AK7d8xFJmu3Sk31A",
  "key3": "3FuZezTsZ2QoNpMjGpg7xVRQSTEiaQfXMQHr1HWsrqiaCiccyAusfoHCmM3pwFBsrBEQLiooB98djxRAggsTeeUj",
  "key4": "5iQB4KhN7gb2mRXL3i7jqWyTtGz3MZFDQqerpsHF8mLVSJ54DCjRNAcPSE1FcaXGgieCuiVFLHoFGPU9q7you8JB",
  "key5": "wSxWyarNCiF5L6dAaDghVqRVH8fNJeBW1aGRJ1cSAsuQ5MEggBkcMyv3jrWjsjR67u12t2pKj8MCYvWqvJAQT88",
  "key6": "5Nksbf7Y34xc8CdCKkz5jhgR5A8VvqPWhqGRsKvxx2FyzLL9iMntZTbUVmYRvvJA3owWjTeTrG52wk3DnhniQcnn",
  "key7": "3XxPaUVxepadUvHP7FdEgXNjLPV1nv1BVQzdpGXnhKFmx27ap6wjwrNZQuu7VLZA6bayETQRyuQH3oa76uPgp2Ko",
  "key8": "5d29w7Mz6TMpQX9eLmuC3QvB1DdyULWZQ95jgDRhTPzzmjm3ntLsDzmQs8aF1uQYMMEnsiKJDtK4yn1zyk9nVKRQ",
  "key9": "3t35wSJHFUyFFMKVu2hgkcQtR1WFUheAn6VcVf7Gmpj77U4hK2oMehF8sk8JtDSbrBqqLpUmXY4WdAiKF8coob5m",
  "key10": "2P4PSczZH38ZiSJp53Ujh9QMm2oJUunbVVLRuR3dha3jhgY7EfLn7kHtUZEJuZrMPE8LNbr3F2gPSy2rx6paZzoV",
  "key11": "a2kC626b3Tazvs46Ai6PNkiM4wTLmYMpyBoCpvwsoxPUZG1mjfJGt4ARNWLH669BVxGxNiiYgHhNg7WGWCZv3pa",
  "key12": "5iej5pnj4TTU9CJtG6ZsEJtYSQXJUovrivUWfDnfCWw3mFedCzNixRhWufDYPeTjmDJpoLLuPiTrNdq5pQaXxXso",
  "key13": "5WeMXMettVpov8rUyrqRTJzpgp2yxquQhiGBWUDkETLGstkewZPxhnSNkQGJsoNjqfg7SKZSG2qHAGA4njZh3S2b",
  "key14": "xRkfc1YMS2jMxnRJCr8kkSxn1mtk2JDzv3Z2HWCvPmYqXgoftDf4wz6VArCjWMSpcPbaaZdeNNSZnv5KMaBnGyh",
  "key15": "3bm2JMJ327HxnH2kijXu9XoPZZpNTsMXRyrwnXzepE3bYFkikFR7YM7jN51V1WW375rJ9k2T9Di2osoaSK1qWyTb",
  "key16": "Eou3esaXjn4gU5FX6bfGWMoMKeBAc8Q4NxoafRpuNdeCDE24L9WPASQcpWa6bT7ud6LuJuLRy9Zn2QpU57h8TPQ",
  "key17": "6tXKu3PUmLHvyG5aur4tNwhgwRNMTzGCS9jbyexL4LsGmHD53nPSVRyzs3nAnjJhsfZBcxUdGbfuZdKNEhv3CCy",
  "key18": "2MvUZUzogz4CmPtpHFNPwDW2cQHohXvG1xWCiugsm6iRjCugwaQsJyRXUmwhp7zfg4c7Y67nFoksmpDvDJLYfeQw",
  "key19": "32HCygMs3Sdp9BKFDFajx6T845PtMmCjWrNU2UpUSeMrSUGy27xDckNPi7B8PChGZk6TbL7xm4iAhcMP7jporY7G",
  "key20": "SUBSr3CGARehDGkUqcWP9WajY3AjXZcQyAZ9TeKWH2c6u6KBJWWrdR9GvRVixRFEBku4aozEUgPF2DXyAj9GnTW",
  "key21": "3H8mCPrVL4Zp6f6Js5y3CbVu8deDuj96kG5UJWkHMrhKAdWHwGTZEy3QRdi39DM1LSAbsrh7fJJrvvbFJTxSg3xF",
  "key22": "2RGUbFQ9gZdxxZ1DjEHjjceVGZ9mkTconNpLKZzkrChz8bKWN1Xfu2pNHqAfB8sXqYVipE6gRP9BMkRRTEpdUuC1",
  "key23": "idnp4seNrHyLXxxbF7uKDz8an2Kq1o1ZVREJdC9GYnSsyctPG21gLwmuFj1TM32RexCDtE1V1YeK7ye7UvFXNst",
  "key24": "2bPrNJDD7HhaJtwoceHhRZN5PM1jSz68BTz28VmriucHh4ec28SSaXEPsDUPuHgPTZ7xDNyHXqUT2PR8LbWLYKqs",
  "key25": "L17mik7cFkux1i2G4R5yFLwjVYDqifB241mjENuHoesDaYDZkxLMLAYo1zZ1fzfz9umqrQDgvJqC22GdTMTrLdy",
  "key26": "4XVtWsSWV79ewahBkaMhAB8cRuXsqp9h2VjJJcBWwgsWtm44h4LUKryxs5oobBPavinMXuH3gc71FPYEdnhVLrae",
  "key27": "5psN6zxXm8y6p5CXM9iB5Lh8LXmJezxaEnhUQc8nXhmWaVoiLKobyvQgLRWzqemvLbnJr3ivhrNssvYoRr8LPuev",
  "key28": "3XmEsmNTAodEFukPT51pisNUSgLU8eXhxCeeYtBF5QgRrZ5Nq1gCQL8qm8cRRfeJqV5sKyN5JWaRgSq8ZESu8F6m",
  "key29": "XkC6QAyNDiAi1qM9hFjJWEHw8ehMsYzDbqNE3FBc9kx8YsQ1LPRZADSJuTHAbFGokqY7BgVrezx2GkhSS9UVGwr",
  "key30": "2VwDK7mNL1XHFDSWehNoKnkR8qjyjjqFKZmnPuKx5ab8LZBcXCmBoLJt9LH9DejQDMMqqNdTkKBFgn6bezTSCCit",
  "key31": "4fcmjxdWpQFQC1NaFVivLdK8QNyodc5nVwVv6nUmQPsucoqevrmVr29Zb1iJX9AKpXpWuuoGWAX8GHiZqLVNXCeE",
  "key32": "2wF6gvteT2nYAgr5q9pEZuhwN5QVEDXPimGdhk8yXDcticE1EexYXkYs4xMTxdNKbASqiqEKRmjU1JgJQFiiwvSc",
  "key33": "4smKtgGn2grYXNUzDAMoKLAk5gPh5ttdxizcQNyo66fVFChMKJvnqvUkDLsUSGHsSCt3bHnoRWM7HR5xcNwcRET9",
  "key34": "653zE35FdEqMuryCGqcnzQgxvmMxCBoVf3ToF86XXWPsgAgQHKSP4cEvxtJvUNkM8NsBYkBUMngqCv3pFmLKa2wa",
  "key35": "5x8EcaUWLLtUqTNdFVDeRkgvVWEpkkEYdhXTxyVa5LbWaicrdrSS3qMWNjjY41DHjn18Q7sJhqi1dXs4mV82krjk",
  "key36": "3DCm7HmdcJhTGXds61Z28vuBm8b91sAU3xWaMMPX54HMYx6XLCwMJJzyMuB66gAJRnqoM7Wpoayp3DbM7jFuoNqH",
  "key37": "gvUhyaeTdyDcWGgprBeAjzD7DdUbskjqJQMmmwk7E74tadjZA3qtekB62AdfBKZRx8hjR8i8TpH5WDJZ4gDKPw3",
  "key38": "2SQK18hFPG4j4yDpTPZn5QRLRqiERYniEvod4ABba9b7s1ZNwZ4tdbUvnczqXrB4iczr9qMci14n6ZcLxYWQWR4M",
  "key39": "3YdfU38QvFeVTZ85s6Fy4w61zYd5qFsyBziaJwXePcTX4MMfHRq3srHL9wzhQwRxK2Gqn6XDTXTTa8HGVHbAMAuP",
  "key40": "586qcqmpmmFnu6GiXo7SsvvTbJvDioVpccvuQc7H6FSGFeUPestYn6PyBTnVGth2XhGJ6rtohQSBsKVrWwxQEouk"
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
