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
    "3rUSdfo93xF2bHyBYQcq9ozrq7ynrVKAu1vgnCBzeDcGca3nDv24abJpHyDUQixYNgphMnML58ZvsqyDG4c1JcwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fYhemBWbQTSSsf3xbbiyUu5ADzXc6dLo8hFAyiWpdVn7UJRr5F9n1voaFMieGdjA5AbgC4pj7PNaEvJs8hAS4pL",
  "key1": "5Pt6NxB12sFGHNdfqhMc8rvNMSND3DktLBYprtEWzybQQ87kSsP5AatMp1fdZUF9B9GPgND8Fc8TSnHWZQh2eBSR",
  "key2": "5s3Mqr6Ytw6sSEvdfHuc8vyak5cRmvBquri7fxeiBhpQm4CyWsbByvXDrv5641ybbJkg8rTxMW68JzEr31mVZYum",
  "key3": "sT3W9f7ce5CoF2US3kqWUVM3fJCtLBq94atNb9yxiBsJwG5VqWx46gfvjgdEpsbZdpYGTEtPx2LaD9DKeGaoaKA",
  "key4": "34aBedWPSFo9nqjDt8mYXeAQ7DV1Cjr9meDDkToaQT1KcSeVnhwu1tdk19YRiNAqb2cUBotj6jz5nDpVxTdZTFwK",
  "key5": "2UnsmZFU2CMWa1h1YXm7G82c6pKQQ7BdBrG3FGMQGY2eMFd7AS4wGcy89x6S97TxmhAiDfaj9zrjrNFsbBgj4aAA",
  "key6": "5fZAeLidjsxf7A64rxUMjB14jjCDUdDY9zbshZ43EkM7q3KvcSVKTyKTaYXGw2Qgw4AiaAtGFxdKv7dALjPjwLhL",
  "key7": "5g6rkJRH4JpKQShx49s4mjNtjHpETRa3mz54HpZ7R8ysh6sRqBxDnb4FezcfA29ec54jTopoFmitNyk4nmeVkkqQ",
  "key8": "3Xkb5erHqHyqrCLuxuJqj3bDnMenvWjP4NuEVinc41aQjRmAnncbfzkEtTPJ7NLsiSmsccShNfmHjfGiGz8cSBs6",
  "key9": "RWV15M2uJzJAMyhiL9T6q2GMFioih4AvuLfYUhkHWtF1qb6asUKcptcxZzsbAbuKNeMjreqNkcAcQwbxMB8ioE1",
  "key10": "2UTM1VoeTvTTy6x47hb4LpGK3ESeFQe2zqJj8K2EHcw3ZvWRfBPBm1WUsq1Y4qnnQR8D4jid3Zw8uE3DhEchPf3f",
  "key11": "3M7nmfmfwNPa45wyFLSXynrCkHivGrHCuCc2m1sAhHzVrXHxC7PkB8zibXFt5gut4Z7E84iJECPwsVpD5k51YygW",
  "key12": "63yvCkMTdBLzjRSoNxmF1kgHjbkSkkGvm3JwCsKte9zZceV5wwZhdJEcQqaj4xtAGYEnhBBzYFpGbxEXkm7pYngR",
  "key13": "5XXzRVffJRKfK3QMd6mRCZyi8eGqSQbJKCnFBpvN4o8JPWxR1b5WJ75crfUvHgcaoca2Bh2AD7LrjZN2v8iCVNii",
  "key14": "4hBcmUQNMsx5a1C6UtjeCUcNJCt5a9c97K7MYj7wTVcwmkGKwFMUUYDVmov5DE7GBeBCSFSWDb2o4Zkg1i8RmWYs",
  "key15": "5DPcH1SpsFKfpSVVbXd9g7QFFtYT9yckSZJn8iwwvSBMhLH8GeSAtKXd6xgcCo2eJzEoVJtUvpQUyaQh2UNqHVqM",
  "key16": "3JeuVAkt4jaSjeERSGfu3n7i2jauzBxxfcXcpNeR98LNudqSXkeQ8uXgayX6yito1FqcGuSij6nSp6aT4tDpUThs",
  "key17": "3stp8KN1GhpfihqU4mA2hPPu3NHxGbzf1d7isX1guAHFEyccsF7eArvPQDYmQHQRJz92SHF7PzsAFb1bsYdYFuK",
  "key18": "3Wnyy33zkyK9LaDNE5Grt6WbupipF9cE3HjybZKxSs9G4LwpC2VuQ91tVS4mn2DLFJaDHF898itRbQQTECBWKLtd",
  "key19": "4dRC7p3Mvnd2LUfuZzUGwjVeGrZunZY1uJ6HRVnYT79Sd2siTrGp8TFoEJ1V2kcGTodATnsRwTvphF8uUzpVv8cK",
  "key20": "5p2whuAnguNz9221DdAQaHFuivDpN7MyVawvjsTECKakXnvZrw7kanikZY1SkHesfMm4sejDQ3zrDZxb2SYh3Sjr",
  "key21": "4HatXeZfkNqzceHuq6J3psAVE78kztuJwLSG6Ht67uWJ5zkSVZPaJUwx8pBpz9UmqyoHTraFd5CmsExAxqhuSHZy",
  "key22": "3LL6AMkWJJMT9LHXHA8mHERMqXoerQVsGfxbmAEvEqPmSopoXd192fGWP9AMGyp5buvXZe1bf3dXHMRY55AmaudK",
  "key23": "4VnT8nv4ZaHpsoXEi6mYEv4eHyQcKDric12YR15S41TVaNWwAU8jxEde1iNHWuzcpBrgYgCK3cDNc7LVMUzbDirE",
  "key24": "GgR7feeiuZ3r97U8sdDeU3cUB1381EZgcGspjRKiW6VwHWvAxE3pBzLBwitUdo3NEMT7PECo6eva9sdDNDU3psk",
  "key25": "4VahjNTR3A4NXmuCPW2rofpwNXJSiJMFzBeA1zaRNVXvbHg8uZTaioqFG8pBdPaj4vQLoUL9nFBpbPnMVsbMfE9j",
  "key26": "3tXZMf7kc71VtkqT1pG1oLzkD4r2bMY6gsZ1W7T2kTcGE8Z33wery9sH8AMY4AVDavX4KSqKYgR9G1soQ6BAMPGh",
  "key27": "5xwbWNNV7BA8G1SFj9zskufViQBZue8fz1vad8zjG7RDDTPqpaoPQYxdyoFZD7eTq44Qot2eJQFMjKpvQqcQR5fH",
  "key28": "5moq8FiyLAkE2XyWLZPMwA3FQJGQqCo9Md5CzKbMKw6uzkiE6F8mzmD72KcZpY6ugmFHUKkbiDtXvau5FBzP7J3a",
  "key29": "2Ds6CXVy6LXU9VzBYbEHpSFDZ3AxAHNpNHioM394htKT56t1tgazgEnwC3zoMX9191uLp5HR1hrSWueXEuYrq9mb"
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
