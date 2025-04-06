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
    "4cWuSsYtjkgjBX7eV5Z4mAnWfiZ3eXJdhF6QayXS6R2fXf99DLF2iYcuLeFjYRydkKcpKd8hK6UpRT3xjUgPfWt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "75HEjc6qku1gQJ61APYopDonDpNGpedsJTuC9w1gmmvsdHKV4RAnXZ1x8GGBC4FQyxMwua5KfjVKyfr66z9FeFB",
  "key1": "a18VyaoKz4vK8b7VB1mLCJiXJddPyrA6TWcqzoLakMVa57hz9zBPb9r4es9LMQdfoQkNr54n21hg9NB6RGzvMSQ",
  "key2": "2rEunbK78rzGLJo5P9uLHaee1faP6qJnwxsLcj2UGAeMVR8r34KAcZuFTy9ejA3SMqo1Bp6eEZ6oU4cjumETjXoS",
  "key3": "CczKhr36jySCmBgFWHb9RajE8vrQFP3MyKot6YKdWanhyg4jHnwUgiadnK5YF4a7vYRK2P6otuXz1zQ2PEHRixX",
  "key4": "5TBcHZy7tN41TVLmvLzbrQwduhFoXhTPNxaBaPWx4H6Jto7EJy1SWAWgbwdWTL7Jb51xnZcBjZNYYAnSoz15uSa7",
  "key5": "37gN4DQenzhu4QvJLFb551PUW4FTVBUDxUcZBMWuXBCYYBSmVJbmXPfMN5N4CkxorUNeP9LSTkgsP8uz4DQm1xeT",
  "key6": "5GDxg6MFYohSNMiEzc9f97S9YSxJryVPz3aMRV3ZwKLJ8aD9We62YuTRFh8VhHE9sUKqj1xkq1taywapjGaapqA9",
  "key7": "4oEis1kjJBzJfKTRZLfibtNDiaMD8XKZY8taWMNsJsJJH2SmiQ3nEzNMoabxUPazk6ffdeHjgbarhSbywmtt3B55",
  "key8": "2QCzqBUkMS8mFhscJT1nwEHFdWUss2KEG7VEbizWA11AQKVy41kxh4KQZf4DXcfoWxbn4GdMvC6VcHkjf77G29mx",
  "key9": "3H9AYD6j7jeR1ucTUbFQEyNBKD8UihRB1gRitgbgMUNNgR2uBPjhHsz5sWt4bdocdUbrwFmHiUwgdaGxZ4vnTtN9",
  "key10": "2HdfBysTkJnUgxxCUkmN11X6Hkdjs1Fiat3j4fXLr8Ag7haQgkBGizNuB4pQ2RYYPzWybfpXTfGMtgazzk96rAnw",
  "key11": "4RFuPUUdBTnUhLe9EHAxttnMaz1ydHpWGNoN3yRoed1TdHha8BiLjfP9e3EtcwpwEX8AQs44oceHwYipQVGrqpRD",
  "key12": "2UgkvHNTEnjBzaSwXPcpNL9RSzLPU1bApC83kiomjeTwsuErhWAVbJywanjcJcu6VsfuzbHq4rvTUFcqkpBAUL49",
  "key13": "5JWqNch4FgYreEGbmgkq9MAPsM62wQV3yKsDz5PtkiJGpgvrSz2fp11a5Au6LkBHAko9AsBvuWVaZPvvPENmBC9",
  "key14": "637jc4EfQ1kCWBEwE2YMdE6HiHuj822B7DTVsjQFcsxYGZVwwbV6C22RYPaRMqaxVpFA1BxHgLeeEt3ykaHrUqRT",
  "key15": "Noh8RFhRYeHeGgAyjiGSJ2X1Yi3ysynDZE98Zum33qWYaVB6VLxRVvQ3g2NbQFohJT5U6RxfoFM4w27KR1uHuNt",
  "key16": "pnGEmdRTgK9SVYhnK2aTrgWdQzcsi8X2mMD5aTBSMXDiwZjhQobztv2X3RA2zdZ28iXRKCnVvxFqXa5shX447eT",
  "key17": "4pfHSyQTxu5iYA1p4fPJBSsffkge8f7WovPcLzCQhnGp3XcpSwiyfbJEeBBvLv2Bz6cKmDZFnzkM14m3R2qUq32R",
  "key18": "3aAUEvtAibdqoKYgaCorvVLrLzcXLZ6L5YippffFkAENr5GthykLBYYSN17Sckjp7JyH91jVwNvpboFEnCaRvx5T",
  "key19": "4hvbwesyvppjB2QhkBYH3cZNXo9FYyuuM8WkuCU1wMakLAKrnNfkMBvjHhcNtV92gKaoTyVLJWnhrc5odBzi7X1K",
  "key20": "4p2YKRDoHZoiC18ESyCG9UFYjaJK8hbNzVFUTVD1XDD95e3i5Apf5yuQZFijBfzG4phaAxM6q8D7zq3kJtisME18",
  "key21": "3vfDvrvVrVe8pBQBQFC7aN1vth2cKE1hE4ELrTohcR9sDSMbDgibMExMB9egnM4Q64LR3vuKk36gAoZ1cwVd3DJP",
  "key22": "8TLFSW1WW39iiA8vrQuxpLNotJVdP5zxHUyQ9Ye9DuftRduxisboC3NRei4y1yNUz6XJnzQ9TK8qin5Cht5ppcj",
  "key23": "22zPi8zJgDNzxMAJUUbyBZ5GxWhfrGKyWdnuRT3maz3MG8uvJWXfaXkysK9fbbpxiLKfCqd7NiMtwxAmme2viQVv",
  "key24": "3qpZPLEL6KzNmZcWZzM1ggc7aLCuPXnFNFNho4nLDYYcLknaKAPgFS1ve3GAihbeo8VjPFinvTjW7XZT4Ejx7QHk",
  "key25": "4nx21fsBTKgofNV4ij8Hba1YMhEipX6jjQsEMV9w5peojRiphgxLCitWPyxcSmXriy8jikVoW3SmSVjPhawnhV1S",
  "key26": "2ATieGA7HPJbrAC8rh6gtv4A8johNi14Q9dMNff5is4pmrC4cKqCBXFGiQnoLWQKMT773tHHyWu4BojGgVMu9uX2",
  "key27": "tP2sSPyy8xiaPiFisFqZ9PaGzkZ9szfkJVJ5UbB25pYxwNfNjQZAzFhboGUxBkfpNgg5wvwFXDg8XivMyRjopUw",
  "key28": "3J8ZZTQgQhso5Gb2A1oenTXFpqksVYhtGqfcUBMkzDZ5ZBnt51ttbne4RmSztyqeGE85imYQTdL73tUFGjMrRtmC",
  "key29": "2fktBiVqqQa4gjXJ4jCi6cUwnM1DsgnnuPWk4tipz4T6iAbq8osgRsc5ygz1qCDohiCUjfkZazsDF9QcexDTaLUQ",
  "key30": "5kWpCvM3XUHWvMPeQs9TDhFUcD8ZUQ3vDMau6jJFYwvvg2a6q7aceuHnzV3a3zkGWxYvUaruX6UTZAzHivY7ePrt",
  "key31": "f8Ar8JERcQ3KMcgqVFmvR44PRneLLSBdoBBgom9zdhpS4FWeegX5QCsMSckZEgTaih63z9FkPtXQKeaZb9HBF2f",
  "key32": "25PH3ZXypohWrZjr3LF4gzoXHm1uBuoDZdCqRNkReLkWrAsettNoFjNWiJeuG9b6YRgTYuCD51jF9puyqDkgLFYD",
  "key33": "LfqESWfAFG3exXAJQospEXW64mt3o1iiNtb44GT5HLxfKgKeJGQfVwAuyiBPUYR1fTnziNPwryfDx7kKLYwaDzb",
  "key34": "Y2fBFZfuevsuJY5WxVGQFRuhG1Muxh9tT6mWqBzvBoHL6FvBaYh3ra4MrihrbE7CrAm7Lcn2UdZSV4J9CRCA36C",
  "key35": "2Rzppm6d2fSCFsdArpp2zSkwtS4gKyM899DCjd7G5dYBvF6revxeDNmtwwBy8Wwncs44dbimaP8F7YQcqCDLRUS7",
  "key36": "4AemYvM7pDoWL3YB8G3skAxC5whtGdyxZuEDmAWiNfbot7nTxVMApeeVwFKtKXhxpx7g3bNZdpgN27WjUhXz6WtY",
  "key37": "3RibWmgA45twKqKKZc7tR1GJYdc4pa4HQ9GrLypcgqE1RmVG4tT6kt9h9FL1NsAFsAaU4HpgM67rcqTpCUxwsTC1",
  "key38": "239Gsi1d2brtY9rTVVhELXau3eA5C7UVNPhTacQ2jwpJ1amcY9bCjLaR9iJNqM3g7dw68AK4cVFL6BhnnAsqJT15",
  "key39": "BHeJdQq4TgLXmdXTnNZC6SQWsKhdjfrLBuREnML9CkGNcwaL8yqpgaUSjugp9scTWS1BDK4CjyPJXKpFEJkDNmk",
  "key40": "38SEyKbghABHsrhXvAvuddV6h5DiEcoQQTdWVaNChv4jLb5rDFp58nFRzU5f86adhjdue3gz6VPcqNqRsibdaj2y",
  "key41": "64MZo5p99Ys9P6E95mbsFmKZve5WTH8y2oW4P2rwZVoJB8xWUmjhyGKM7czMgaHbKaxd7RnopFBuVwYXfzyn1smG",
  "key42": "5z5AMJMaQjHh51pDHUwSJiNShn8NWibcW8fiicwgaQzrsw7Bd1KwcQfzBy9ajakVF3vZrBmN24Ng78FHcgjRgmLB",
  "key43": "4Gq1QCLwocm4vtRKWJAWnUPa3KeUMhXYTFdZLTW7X5QT3Bm9KJRA6RKuS7jqz1UncRnXma7jsSAmhudTFyJ1mfFj",
  "key44": "5nSaoNpTjCBo3378pXUK2US3hBz7XaELH1f2NxSseyVkn917c5s61cR2RNfyna5Zd1LTjagkoJDkLGAaGjtri9kt",
  "key45": "2X2ExDRFxLxupLfRfuzcjJfgje6nQA6d4vJ52VBgkjrSC2x4H5bmRecMiUK5psKZSgLx3eGLfCJ1WuGf81jWeMrM",
  "key46": "3i5uB9zHLaYNxavdiMj5h1FUv9Aymvt8mCXHubQ7hcoExPuVbkXHR3TVF1XjT8JyeJRVncmtrDFjNvLeWUM5oVVe"
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
