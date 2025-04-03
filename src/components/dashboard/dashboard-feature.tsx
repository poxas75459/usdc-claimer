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
    "4JqhBvPFAPxxqHv2U5dkfniCsqb3P3H4pzx3XLe6RVniUMQAxqXW433FacEGYXQWZSvdHmt2wNJ7xBkrggVq9dJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E7mE1UBEpbMZfu4BENnRLxSU54BxJLPDah522rbP4ormoRYzDaZKoouJEGX7YoXxbG2Dwupi9Yxkf5yS5czYgxQ",
  "key1": "8zNLsyFw36pnaPaqHE9fqfRecEGXe4sN22Q1S5H5EJ9of5ASEJeqgFHqysSo51ufQ9nZsPsmxS34Q9DS6rTYu4Y",
  "key2": "KmYuFaJcR3bhXfrRiF85hMsgExVPWrLmiwMcdtrLy7Yo6ZH5eLfg42AcS37ccx8ZBujADVh8xDzAMsP9cDwN5EQ",
  "key3": "5g9Hmgznx2Ld1TXr9tSn1K6brVkF4jzpbYizpcnepKBwGXN4cugpSi3oEKt9eKMJQ6BeM8hB28HMM26JwjZfa1cg",
  "key4": "64dEhUmv4AqPQ1VWyFbyrpWumu2Up4gwCwANa9dTBgSDEbCVuPe5JB2Gz4UpWMY6gXuPaBrCekKUUpxvGYvrZTAm",
  "key5": "2jobtbE9F8oFwoXsWAUF2eYso1i8Ubikoyv9CvMLHrqKrFdin6tmRHQq2YXXbPBqTExQW1RG1KWcQ4dVWjYHWgdr",
  "key6": "4mMW1cVhBUqz4ofy2Q2jTRwBRGFeqkgcahzZM9kKdMbgpF4p5o9XhWAnbEJJMGRM9aUXp1oGz1A8MdcntUZ5biuY",
  "key7": "5vqeyoV5s8QnJc8RDUX19Md6TW1yeguPraZVqnhTSdTLL1p7iZWeVtHsuYQdPzuFGKykDnr4BPiVDGu3vX72tU7X",
  "key8": "JruAU18yVSbvbrXnojxxoFFn8xcP686nA4ZBGL4phGvhUEEwj8xfRL3kwj1k4rtQDnFzsUR6FZvyaQDbZ5nAHuX",
  "key9": "3Zy96yn1YDxHEpnmhk8Z1UcxLHPtYYN5dcyXyunwzaBjh5xDKdiFrCfAnSM585YrMS9HNRX4W41JxeKMsWiBwKmh",
  "key10": "3htKQiheBQkhDWxHdaGBCs4dzUsmvTvUnsiHToqMVBKUZ5iuMc1U6avFLnKzV82qabf6Q78XzYZcugY2iapFSxW",
  "key11": "32R98dv6WBhqu8CbhLvBS6ZuZfyLEFHrcxXehJ3Qt5CemScEWMcnZkQyF7g7qrwTG6j3bAjNg3Cu2NwHFaxevwwG",
  "key12": "5o3fup6Zmeyd5qkoT5BDtHFiHGhTtja1EjSBrSd5URfoGJgF1Abc7EMDrbu2mFqLRgMt57s7nFVnGyWu6usxzbmV",
  "key13": "42cJ9E9pYq9tetXgXv3Q2yJfRNa9f8Yq3Cbyqat6wVd3RNpPMSSjXzd1uPgBevV8HX6Ve4Gk7cRR5fHqidksWa88",
  "key14": "4MAayCTkNLFomMhz4V5HonQMfmxoG92R5RH6uiQp5bU2ahyqaN72Lf8FpDnZCArSszqTWzzPXTqZPjjmaAQyjvse",
  "key15": "4ADNBh8NMiKe6e1HtprqTgtq6z2Sn5YAqbsxJzXn3T4HyFiSsi7ou8tZAnULiPguKUi2t5iKAz8CA2oCBJzLnAUZ",
  "key16": "5EwyTuj1da7AHFRkssamRWNH9o1kfgYW6orA8wGAT4iHwPaYSkbSmRs2QKrnXmr1hUdgYxHTnf8H5PGNxeFTVPvr",
  "key17": "533TBHT2gyGP7fkaSQ5tyVETyXkVwoXPoxn6Pej8HfxN93bEqadVTssTmnPZW5gqD9ecWLPvXkKiUnuAxsp1SHoP",
  "key18": "4V7YL5w4wCQGMzgjbqcqmJ2AdNJSNoEic817SnMgUDffYzrM2N6w1Jik9pMaGd1afE5LQhsMqaYYRPKhUqdfFyTy",
  "key19": "54WMh239GxCivs7Nv6BvyDtjoJSVM6K8GdsD5tMmeQFd9WAJuYTqcyVb6G9X6TmMZsayiAGk3yFHv69hK5geAs8x",
  "key20": "3zqq1M7wsiHa5T9UuXvdkbGYRoHS1kXYpNa7DRNcM7bxWUNmMBzM9Pshis3FbB9tGyaM9eDtAhUX9nMRQ627pF17",
  "key21": "3LGQLBJMowyDgkunNb2Xk9wyfQJiFYrQi87fMCanrnFzWbMi8nk8vymkcZWyRN5xLAobfC7RoEuDv2Pij45ffK67",
  "key22": "3tbc3vAg7L2NUQnPq7moPXpxta6APyqzwyDDrQPPPq4wjjrqRduz3rfFbavwAgCGsZp751YDdCqoVfoCqfecWw5V",
  "key23": "3FEJsuuBzfHZ8X9YX4w7h2NsRPUqfaA8M1rR8Tf8wrbAVYvjdwJtzrLgz1XJxVskipRjm4gL6nSJtJL5PJwSAWvq",
  "key24": "2EUWevXMkbdr5TRL2j3zmXzGd44yLWTYsu2KZYmWnsZuEdaBvq3zvJeW5LxF3ghAN4gzcRWrgXhNgugq9bUgz4m4",
  "key25": "2C7SfXNeSTuiz74dD31GAJiP4SHxfN7gzh92DJCfUQRWYkLMd1X2nf3pmYoppoRazPQ8JRnzAtCSSHxWowSyR6Ya",
  "key26": "AF2QNYc3STZ9GxyDGyAA7hyeBdbr8wKjeJLFm61bR4W5fn4vA5HyB654t9LgzAL1YvPpbpZQPZ8WKMYxt7TcD2r"
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
