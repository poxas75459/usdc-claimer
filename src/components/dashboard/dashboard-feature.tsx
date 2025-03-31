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
    "3fPDjdy4c3iUDeQWAnGdeF7XFioktPGywSafAVMnKfb1i4RYiN4PY4bPrypzUpjQz7mvwVsgG3nvSRHXo3XQbqSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34uoaAGf6E4Gc3G1bX5fjpXvtpoUYi1t86FFPpcLHbfQ8J5R1qPDwtrQA4ZiweGSShBK48VmNd5fKomsJVddzE8e",
  "key1": "2KyokzF2hQsCDPNyBXtdBnURZu4KThe2bW3imSVgDCRdqNeGziTKifLyw9D9cUKuhk3PwDp4cyvLfzrfUnh6TS9u",
  "key2": "LD46L625RVknGZtQ1yGe6EAZ8dbEUsn9jXd2C5caWk59Bywqf1RZ8VLo43SpvN8CAZSEWzmKhEWuMRWJvPcV6XQ",
  "key3": "62aL9UnfV3upKUiPmkLwJi48NuoKyUtvvyKvs5uNcwgGnRGVihtK4emzP4wAM8mKwXMh9pWo7rhozgHRMksLssF1",
  "key4": "3mNq83Dh21UVe7QZQExxZFA6kS8nyKKHzLxa5dcm2LrXCsrs3vWHQKtxT8Lt6nxYDfZdo6m6S6gqEV7GAXeYHov6",
  "key5": "5Q4HrNekqwWHZBSqyYuKipwQe3cYuMgq2bXFC8kLJ6hzk2JAutqg1aZSSt16imP8CSWhyegfbrwbawu34KJBhCny",
  "key6": "RM2HuaH1GisWgCYhaZrs1dNgHPPP7PFhN96cU48h9wiPajeFJfWyEdWcBUDXCCQsQxCSX5Q7P8TT9UWB8L6quWe",
  "key7": "ed2egft7SCkyphmYN1s4w4bDhSQczgLQUTCgBx2N9HmLSV8vwr9ofPehqe92aAcNhooHGc8XnJrwQRRmDnnnSYu",
  "key8": "2FgRupHMJBUva1bbJy1ADkh9yFJKQM8ZWXsV9ojoUHHuDPxaoLdvv77RM5qbd3TBA9kHZQdGHhfdv69FQJqNGT27",
  "key9": "5m6KfNp5yx3M7d11LSuqeNQRzdVEppDHoPHRGvq4h2bUTRjCj88hxnWijWDTXRe76cqrqzy4P5hjcLARZT73pSpv",
  "key10": "3FcLkS7h8KvLyGdXczMakGV1mZgeJxBgUuoGdskQik8DdQkVFH5JD5kfdQrcvyngVKmJ2scu4B7i2wwkTWeftH3m",
  "key11": "5iuw8yrUY3xy7DbQMicQVG4CFAB88o1UWoSMy1xE6NDfkg8mcR5b7jwcTvKjK2APNxEg5s9mTpB1cMjTnqpF2MG4",
  "key12": "5SRUggn5wLjYSvvnmD6imyz9EmETY9wnzwMx5jDxPj1GKBkRewGhCZMd2dkAJFfviugpe1QZeYfcNLoZKDhU6iUo",
  "key13": "5RyVjiaZDRXEKMccPaB56NDFxFSg4YHN7ug8YwmAFT2k3gpEKDsJmk26TkhRpw7LpPuaanJnXpLaMNEN8pfuzZXD",
  "key14": "ih26662b3bHaWeZSzgnv9cZ2yU9hMcAx4EeWPKtPsWYoYQcKhuDnGGPemScHgQJ4q8ZaEGLF5eZtm1JffUYnvj5",
  "key15": "4RcifCqQ1FFK7wWMB2Jbx9SHC5Ws74ey4j6UBXTGUhWy5mSM2R3ViwLxLiTVJF5b2dDWDXXppSf3cwhDReAtdSzx",
  "key16": "RwcgaKu4fGrKYWNKgcZHJSr4M7CWgvBPJWi6ReHGg333xp6Dg6Ev41jGajFD2HiDmfQkoYZdKeAnbSpsf3sDrK6",
  "key17": "2w75fMtV8UnAj3GB6emVXmdZzjwjebZhJhUNk4z8YaPrQxC4M5E6j6FiYTdgdGHSfG8qGUY8nVNkFsG2ygdbKJQW",
  "key18": "47u3QDYnZPCFTmZAPdQZt7gUJ5HVD56ZLkkZSffsfy6xDLQzg7k6J9MCEFYocNironk1uGzpQ6aPSeCFVtDuLttk",
  "key19": "5wuQ8bxR3siMniDX1AFSWnU59Airm9MbWxG65xCpVTFc7dMT9kjmAJRQrdx7PLP1JBZLk86AoRHpRemBeetAdMcY",
  "key20": "3H6BrhfzRL4WEMkS7Hymc3pmg4nSGYHkKNR59j2NcWoNk1avJtpoGtWqzaBnnr8cXSKhr2X3g1uNXx9LiTcf8aey",
  "key21": "5xBYb6YmrJqo6XyS2DKdSfZw4N6JoTqysDq4Zd2mKyqQ2FpDtiytiwCmfoYTg2kiw8yQGgPPiMpLhCT7ra6uw9fo",
  "key22": "3FeDMXXHps9nUhQX2fDjWgHgoNje1X1nPsRPDJ8iYnoCtYV9gXHsbtk6dtiyEXzixcxFi5iA86t3MaLhSitwZ6kV",
  "key23": "2JPTkLcHHkgz7xfyLsRMJdoZ4Mp4m5GSWms9R5uZyGmqjweqGiE7q5maUu2WJ8EdCoTqqKTspa9JDHBPDY5yXrat",
  "key24": "5gz139UgyFvKVM2sgTwzJKTAwLtgAYaCVDQsKBwVfKZEuFtQRQ1s3RBy4WRsw2G6dZxyxcg1zmrH2cDzLCn4Eaz",
  "key25": "2EgXhWrRYoaGrMwXmvYdtaJ7ZJsLq2WaxKY1jwTqs92d7Yo6MF4vPC5v1d2jw1RfxxQq7NFZkTmJehuKrFZGq6Kn",
  "key26": "5jaVWwVyiguXgKxpvvr8YeXwd3xi72pHkUyKxQgzMfPUaoRoLyEf7RTRQiep3eiGCvcLVD9MK54HDn6ChNF9ffaV",
  "key27": "5wF44Vr2hS6e5SRwbfq6T6Bs8MjLWUrXszw2RjefTwtYvKmkvbnfE7w17QNWv22Yyj2qCTNHmjh4d7nVX7zCp3La",
  "key28": "4vjyFLjgjunXgjzTqwWX669Q9na4QMisZgnY2EZvQwP4QpEWCJqmV1q9dxgfvhYnBAn4tccpNCcLyZJLtwd9gTSM",
  "key29": "473XPHxHe1QCThX3EYiuwwnzaSUE8f3k57NsGXRuzws21y1VtRBH3Ci9F7ibyATwq7FuE7TR1LAmMpGDv1dPAKtP",
  "key30": "5dfafke5SCQkj1JffUgwxxeqiXfsHLYXJyq4vHbEMD1KgBZomZBPMS6Gk8Y3SH4cgbNYBxcQ7aeeg1KwRTKSP8Ym",
  "key31": "3Q6roFMYq2LFcxA6ZCTufkFZ366mJ8SyHPXbxNawVtY7JyFitzQ5xUdkdXLZh5SMqKsxeSUiLZp6JD7afSVCzJzz"
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
