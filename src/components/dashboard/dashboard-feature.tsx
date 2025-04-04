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
    "2ujFyoryAmusBNeDXkhVAVeEfVzbpXp6JsYQzB4UbBp51AUvwyXNcXRy2M9cWNSE5S8328rVvdGrmoSDL7vbrC9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pofb8YAKStuAZGVbGX3ZRy3pzqPZbktYoubRBnbeTPQQGyrYtgasafwVktZdv5DskmPdgEooJBJH3k52fsEJLs",
  "key1": "5Uh5goHL8ceoiiP46fMdcrSUSpe1ppjMmSMb5ifacWgL1Dpv8b7LqQPGiZpHUcm3FZ9mUA6e1BmksJow1XeA5hfR",
  "key2": "4Adw7tPntnzcCwc2z9yfhwp6auzfbPwyP7XsU1sVHGiF3GJxTN2FE8eYp94dJPTzn3bPxciCsqSa8wSo23fs8JgB",
  "key3": "39i9F7NVMq6F6g93YPUeZcMes7xmnUK5Qmh6uFKXBHitadEJahuwCzMkbCQs3sfbEN38SobnppDQSb4hTVjGjC6C",
  "key4": "6436CrcEEbH9bsxuCVFk1EV3WnNVNxZhP8GPCyQXChWC8YAAoFHu8zk6ty42hkyYLwDH3n1PK5xvRuWKvJdJj3hE",
  "key5": "eL5qaZy4z1xdYMwtf59gdx15fdsbcNYiaDshQTQJsMwU67aw3rByqcAWATd5YnbCYvUn78p9suzxa1bXh7XwhDC",
  "key6": "5xnwNqLJWhwqd6fh49ACGDxpTFqPPjYvG1kLP7oE5hYYyRNnPRY1hkcaGkusTM2Ta55Uc1dZLBex1SsM9pBEP9nQ",
  "key7": "ZBGLFsCEZSKpjonzfhfwSnTo96X3btNcP7rdpJ4KPXrjeYQQ8dbZUe6m7L34w9XdE1R1j91cuN5u8wqp3eoa6kh",
  "key8": "2nyZeUCxfadCpWTRVuJ4DCNPhTwRLpMzYaXPR9ytV38Bwg7gNG3RhXdYXCZYR9RyeC3XQMfkZHb3wn3MA6URmjbq",
  "key9": "46zX5z1bKHAWPHf8kkMi7MFVgkbuA3UPcBMLJ5XKtGTJBL7Bt7xF7PUig9xJb9vcK9xDmhgs4QivP6NjEJtRhMQC",
  "key10": "53DDGGoHHJc4RLYhHhdsCVk4DTwupyeyFP92NSxQBNksnDmcnYSFgoNh2iuz8wti1ARp823sfytbHDqqHMdFLy9y",
  "key11": "5KhSifzuzCrSTpkxXCQHSv6nCnjGiHppy8k2UQrVVtPY5QCmdo2UruCFfRDs5gTSBX5wMvE3U7W3bHq4TSWVu8az",
  "key12": "5pfTGUnVrgqjvqim2qXGHg5G5J2K1X7vjzKfF2LAFFiMsBfGYACkH2pwseNraQcCTDeXX3VxdJ48FTHGtkNXVWA7",
  "key13": "3vW3cWWzHf2rpkSSJa1MCFvjBshwBSdPZ3SW8sFm8B4JcFuByaAXZtXFouL4S4eXJ1v8LGyMFSJPNsTyVBRimP9i",
  "key14": "3qkexrme3mnKFx3Ne47V3zsPJEjrvCJReRTF4D5mhvNZTLwJQpVX7pSF1S1gBcNvgKEpUAe3Gn9rxpGLnyRrS2xp",
  "key15": "4Q617GsvMvxaKJpPfrcnW1Leh6drCRauZgLp4gvoNwAD9n6ZBkR3qnn73EUoMPRzxSPYSLuAfm5X6kxLnBoNoWr5",
  "key16": "5DqeXBVo38WLLrZxWwnyePMp2ZYXxmBco5AN2T3TSCjrfuPADkTHqTwrFS8zY7J39dbqhY4Ue1rrSxPYnBZjP2CZ",
  "key17": "wYg5apvymwpfLRkbaC7KX1hdkfiQmNhXLccyg9bSmhSAQ6AqFNmuRCnFmTa1xUQWEwLuBeZgiW1PQiJbYkiwz7R",
  "key18": "3Xw1C5NwFNywoQ1QCQysMGZUTB4o1a37kRhMtaqT12eyDVz3RYXNVm2NUQzG8hrBXy3eo1Loqh1mnPuT2Y4L9mur",
  "key19": "3VXM19ojKDgdVJoydRQcUaPqWzdhAXM13V1MBUN9WhP8WPwuSPrKJVvYFyYsjbUSaX3eek73BAg7dELbjGFgwHFx",
  "key20": "3XYwpWYGr2oEfS9iSsYEKMfP687ansVkj11hF1b4SVN46XfyZbmreDYwjDRysEwN8PJhFUy9FaHV4EqvDW5EvFNU",
  "key21": "MPcLPA3pzc1Y8YP4WPH8adH5ZeewCxAUjwmV6mNyVDDKDA1ENfp2nfxxvtJBP9mVhmVBiGwtbxtK9Qav3fFPXnr",
  "key22": "23NqjL7FVANDRFwu19FuK1JojhHhH55z7Jhv8Bc9p8b1yUU6k1aaqer1EH2bognGk1mBwMFHK4Atd3ipf6ap3o5R",
  "key23": "32zkG6qQXMny9FGkqjPqJLvYEn5ry4YTJ66dPgQFYbcb98NJ8YD74j967AtuVY5GyEMMhLy72TpuYYHSg8kC5Xj",
  "key24": "3sF3nzn1asaAWG16wm7sM8xDYRmr21FzZrSvjef444nBtTTfCFMo4QFYopPugCsAAyJswkf2o9cM3cjtimqs7m52",
  "key25": "5ksxFuY8rYAUVr5WpxUvfSEjTDgfT8RFRZAKfLChwvexUQTAvaifC2Sk1xFgrYKhSYd2fVxHiSMnhAgFXiTzbJqs",
  "key26": "55NHJmJQRhCGdmfpPda3yREZWiGjpiLkMuLSZqDPvJngL2aZqGZQnVowq4mv3JzDr8xB4dyJumwyZ81eYtQNiohu",
  "key27": "5z8ntMbQYp8eVfwidEMR6nJJKzgxCkeDKBNFdZjJormJnMQ9K1b62UTHGtvVpXXh8TkwJmM9tTsXRM9vF3orYa2K",
  "key28": "3g74wGs6o21e8t1hrJ7dT2znjuu8iUmFaGnTqJLvsZnEvb5b51e7QZs3Zt5ZDToiCVRKwXs9bJuv7izL1oC3xCcp",
  "key29": "Ar8t9gqMieXyqwUv41akwzKK9fGc1e9gJHCiqdzATec3EpCuRwhgYgstXiGab1C1MBj7ND9bSLkpiEyArSDUUaL",
  "key30": "9JhbZBt1yb2XByTdEr7Gi29n92DQEbfJMteBZepBx3KDCzEGC2kg7M648ewyzRV8XNA4TkEpEZtkq3MCgXivr8N",
  "key31": "16mDfwBtwCDPx4QRTKFYucnnMWeDHgkP5Pw7nLt3i8oYuKtYeUMrhfZ7Th7zynszNSxvf2t9Gjg2vEnJg16QtJV",
  "key32": "4Cg6RpMHPxdfVR5fY7EfQVrzRRuRsNLKR6YLADowTYCSh4A3Xukz4Qh8kmg5v3rUF6gp4gVp9LXUnVaMeXRvKz1s",
  "key33": "27XxFjfZ9ntopsSa2UQWo3cCh4YRzdeo2jgeoQMUFTkLSxsjRTJLc9Tk1HHoQZa8u98stVvn2vo4ozu9dax98PFq",
  "key34": "4WgXpmp4Ejj77fHkKuRwhZg9k1CYB4cq5UMgcePzqMRtiKkM5BCnz93vYeyKxiAUgmdMnqy1i6fNb7ZK4FiCh3C",
  "key35": "4TZfbyLTtz4zztCAiu2vbCFwbTyW4xkm3vcAoxc7GfLVzpSJetZjDa3oMEWbUgJMEgCZPSgdScjMPPm5iNfBYwzD",
  "key36": "45qontiYDsXPUCxxiiXXwJt9u6XsWB3Xzo1Z9LW1M3m8VtjPdTRRp4RQojgv8h7qvoCKA1JauJauACWXzNZFK3p8",
  "key37": "3HMS8XamgZjBW4LDivyLw2N18cviGeAFHjbNP9HW3avdAQxB4CndfCf5DWj94xXQd7buJ7vb6Pi8SbCCiPJ1x2bL"
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
