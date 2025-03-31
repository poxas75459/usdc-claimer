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
    "3iR8JZFCZxUM3gMmuFo7XwqFnjzDQ44wBLnjjAHYYVGd8o3YwK58MefQ7DgVT6wdAajjQ6TmFtsr2Fpig9U3dNTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g5B49KWNGK3AuPYeKhnhA1JSJpbaeDHesgEyLpKaK49QQCMeUq3BGRb5wUSLA1zHhckS4HVrTuoKenJneJqPv9Z",
  "key1": "4PQTzLi5vqtGtotoy4zR4nxS7z8Hx1eP1XbUFmJeS9DRTt5YZYUcSA4YhLHVhWGjanvhpkkUeYcVmDRxMKSkt4oV",
  "key2": "5gPw9KhLJqzL91nZrun9bbJZZJofsKswKp1ypKa7dK4uEQ3ujp2jgRvF6f7haBsrjdWqKrD2n68xqFBqFsknTiyw",
  "key3": "QH6vUeJ2gUQ9ivwbZNLEjC4p4oqXuTHi3piheVwLzcbCeMWAhrYqQvLTVwUgkGzcYkkLTjGsGXtWyikPeCVr5Wq",
  "key4": "2WAdjYVr1sYQUsxg4RQJSxHEGT8dY7qn9VR41NGZNPySDwxJKrNQHJS5ckeLQCQsBLuGNx9yKZ11K3rMczooD7P7",
  "key5": "3vXs621pbxG4t9ExPWjXCoBUFQcA87bg2E6mfDZ6wy4tGNMoYmmChKnwX8ruuyYqHzNUMfdHhqe5ufx7B3VHaSCK",
  "key6": "24kmsqGC5SCJhUtU4z1cw6PstNZRPHgvRsUWCq4hJ1EdtZifzbECyQZgtYyXT7cVrmtSoMDtSyUmn9UEbuk2Mzf2",
  "key7": "4UhtUAjPU2tupbuveUPnUex44hMEAp1LKGkrvzCZvSTMWVsQRFU939eeBSocyTa8RErXM4DjGUR2YgD39HzQiXPd",
  "key8": "3n7Pn9syZHfuLGHTrUuusBAtUzD9ii7zdVRp1EQsv864FkYbGD1EJ7VHtHzXqnEW22nxBhtLZ1s7sPDTverFDvJz",
  "key9": "5rDX5C4X9py3Pdaa6wACZbTerKwtLTgZz97KtSwdZKA8pdgiot4V6BrJmsD68itCm1RTQ3esXw6YL2npEKTQb7yb",
  "key10": "3gifoV1fKJ5HQ7o7dSZ5jpPL3Ei4gbwHfNaLuxHk23YKeXyhe4HKGk3tuXCxL35JUEX5BDYU7n4rxQtG1CjUGWgr",
  "key11": "F1LcYeYgccdemxKtwLXRGM3EkyqkMkxEpFH4ut2EKZM19fdqpDdipU9QRNzCfBgTPVaAEe79p1QUWF8KhcBDUA1",
  "key12": "TCxWD4LaTnV3zJpCHrdzLK1NUuAir2H9WXrC6wv1GwLJiRKWmeKEV8Y957QKEV5nkVyaJNHH4MQZMDaWyk27Nj9",
  "key13": "2EQF9W5Z1mDTATt9mSvXjx84vYmZB6GMGCe3Jzz9KS2Q1XRgSPJSLNFnAfHPYq1YquQ7sH79EBWgK7BUvue4Lqwx",
  "key14": "XxdTUG5jAVfB9aUNPq5YipZjHvPYR8nKDDH6ZgE6XUxwC6uAbNEDJDJoxsonciz85MTyxWCTWSDFFauYiNri1Ud",
  "key15": "3SzBz94toFyKnxVxhhfYeZwBLBMvYcswKpMrhxhGhNhACsNS8F2x9MCMHqjavRegpX2EkVU6TDQ3Lccjs4eTXzud",
  "key16": "P74gqpVnxWVuxt1FQYtTgxd8JRSonBQYvN5ndq2ikyNYZNyQruMg7hxTSzDRXeP41Z3xAzEpUinvW5ZYMYsTz5r",
  "key17": "4K7TP3kG2hQJsA91y2u1M8mmHUNjMdsUNRkpFhfFtgVgyhiTH4LF16wGZmPTrb2mpRuMJszm1UyzwYrX2GoALYPQ",
  "key18": "4C4BV4UK5aU7QZ9JL6d7TeR16Ug7STbz2BLm7qo7f2mhkb6e3C6Ska1Cgpk4wA4XRKmJonyfALJ5nysifqNLy57P",
  "key19": "3ggRQdcc1QD4WJd29QvatcowgQv7ijr31DueF3UpqvepREXEbYE4t8bH7QSWL3dGQzzEG5M6BXHMtL32h4rZ2CM2",
  "key20": "5oiYZUv1taaY8xrNqDWy2BCb6T4A4vNnFNC44nMssVRT5gYg9c9BLgetQDdog1zGxLT6rgbteqWhyGWBjF19fKJ5",
  "key21": "5ox2ydyjhq4SHghwTiS1Z1NV2SWDujfVcMtBFQjsmaMBa8v7vxVPYm3BAPGCJhyLZXK9Unh7CJz6wz5UmvN2A2FB",
  "key22": "5AuT95nhEPAU3tvBj6Jp1xt2iWGfqcKzCFdHVwJHjSAA57YezV3E1LmVZFkzQt9h3jghZc3KdsfxjRD2waK75Ek1",
  "key23": "672s9BqrmjQaY6LeE6LMJC7WBtjprYsTobNhcEKzeDX14hgtQzGmySU7docN4sPFknjRg9hAqhqRZ83qULY7ezbW",
  "key24": "5Ji8x3r3jN5mkb3JynxntwJATcAYHaDJBQxM1RmR8YeWVJW6q8kiN48rv69zVq7B6FbxMwjvLJVQ4PT15AnhTtCR",
  "key25": "4jgaJ6fuQr8iqeAngvyWZHhMb7zn9DStif1bMnVockbqxrLUsD1sPpzzwKiYd3er3K4kC5w8MGJLTBNHkCuvqT9U",
  "key26": "5pzrwDLrUqQbsBTUJpzaJnGyek1udxPzewZN4EDAEAGnjo4nmiWVQ2oCHg5dntHMeL6WAF5yAuJoP7feNjsEvvc",
  "key27": "a8fm1io2MPfRdrERiVjRn8p87uHdGRHTrfwQAr3aX3EhhZQqkwgSQKu8tGzesjsgbXQSozUSaaNoVrz3oSVBNM6",
  "key28": "5sEaZdHuV8EnezzVRHg7W3FEJ2XP9CCXLDctUJTuksLi3iwH8hqzsf15VNbowFxxRXeX7T9bGQN4ywVFhtP9ig3V",
  "key29": "4BoqzVwsnRsaM3n1skaTucASUZYSwHygzNSY6PcmLkgLHncRY6u8LKGNt9UapsH5fbhpBm3Yj4aCkQEJ5cH7acMG",
  "key30": "3nGW6cAPHgfyA4fekL9dmuD2NPoTppEDk4c8Yo5fyQFVtNtckPcLfHYDCk54PRuchKN9tubK9NkkEjuAUEs2T7XH",
  "key31": "c6QxBUtHkrjCPGXMrwxN9h4yqCanbcFyDq452sz3yYZvdedYkFhL7JLmKW2b3HzoVpWy5LDLjao1444er67fUXN",
  "key32": "3RKL4e14bGWkyaJPAoMskyVv5m78aEXQVh9Sn3yc2gKgHihArp5rZv5m236aZitzvSpHdWCQgPcqTQPYthZPypeb",
  "key33": "59B8KtZCWwANoTRTgx1pz2D64mfTd7xoAtD29KGcHk1gWCn6qtPYd6obvNmhnYdvUNJbYXafrNYwZ2kyFcDHtKT7",
  "key34": "3y9GrVRDfWZ4EvSSdfttybibijDUrrABpJ3SFWuEoZhy1dcextNouxthyRzzxp2UzZprrKm3sAhJ6qMfBXq71nQA",
  "key35": "3Zy7WKMoY4BZ8pGSr7a4Dgj8KWPwW3rZgNSi11dYq6jgjnPL9P8L4rSXCB4rtVa2FeXXnbCSvcXMKbpre1C84k2f",
  "key36": "3YxTbiXexLh3m7SSvYSNdkDGSQmxkhchH4V23CKfsFaAKxoBCmr8Cn8HHLJ6C4ya8VaWTZTRExg1jB3BLGsx4CHD",
  "key37": "3kKRnNdgGxshjeL2yKTS6Y8wgeHh6k9h5ZKZaYEcxXvG6zLr9kvnXCGFrsrLho63emXZkjvAJZisi7iNzuhaFTz4",
  "key38": "2C4yYGCHACeGXLjYCctbTyGuKkw7xRuZdCfkXpXdparzdF1WRU9mkSjY2zYsJbaqpDWAhpazrK97Gs6CjQnyQsso",
  "key39": "5QBAdRtus4p2ACmVCBAzra7V1qaHkFKR7DbMEejptwiWALaFXM7HyVQ7itC2q8UdvSpPGdJd36KrcwVoYzyGtBfD",
  "key40": "3H9tkPMtc4WAXeQWxYiZ2RDZEuBQ1TShScued3DoyAboY3Z1SPRZxSX6wCkoDS7TuWYMW4KEMVH24pkCnyBHcorD"
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
