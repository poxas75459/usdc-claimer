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
    "2RGsVwNWkfzYt6w4wndP672YxS4133fTcxQV6S2m2sX1S6sHdRgSz4dCW6xHwdUpNzfCFaN8cf3uVPcLyaJkAGDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "maKLEoUke5X34XUgiyAfj5NnrGqn7o6orW197hd2oSkWCf3nu6dUS1G3CQRbvqUUtzfbiwF8kd3w2mavhpRHzLj",
  "key1": "4xV6iGHajYJAK89VmLG13coCQbYrx6iv8GmPEM1gJLh1rthkrXB2RNJL9vH7axUrnHEXuMbXgvz6WVXU1bzLb7Cu",
  "key2": "23BddgKF77nRWYkQjzrr2PYunShBtQbJMFgE9ftopgD3M2UNvkq8kBntG9qGNHqzcS8qxyTdEHD6jexfFhjPr1VG",
  "key3": "5WeuVHySnuUqU7xDfYztoYUsUM4NqFwec9geuenmhSA7H7v5XLgVVkk4DGJDh2cLboY9YvCX8oFPkSdQdnqMbtre",
  "key4": "3sHuz9j1gotw4tpYMYazqehcLh33P3s3Gw9XAi5srNzCnmyJ1j2Tc8w2gVvcyMrNDom3mfH7XiaatFapiug4rmgN",
  "key5": "4L82Dm1UqNU4eD2qBtAwCftGx7H8zCpVJVNJPCTX7h1ipGEXmg8GEL8zy3e4Hc2PxU3TVhm9u9XGBVSUpXufFZj2",
  "key6": "3yLMK8VXhPuppBq6fp7A29Sne34issFd3vhncAueiSbiTvtPLuk2tqd7wS6rqNaLkwzva4oqsrpxwfpd4fVMJWNu",
  "key7": "4bJoR2B4oCTrTcQ5sAjAD1vixdg7BFBEL9TXDrcBQfNP5RRcDD2fBzawXbdW5bxUdutTJ7ghPD4Q8VAPsEfcYDMn",
  "key8": "2BWcdsGeEStompX8P5yvDe4uYqyztpqWEh5oS5VjQruSeh51qEYYKYYh3pyWTWjav3eRYwYuLpWBwcpYVAUpXDxw",
  "key9": "2tuxBnGP1gaoo8yShvmCcTgM6Fkvf9prBVXCoWQn16XNDLw9vL1d28Niec5kuvxvh4WqS98hDFKVQJjxkpstKV1p",
  "key10": "53sy3grfPvnFC7aue34MjBNwUvseXZeUrkiHcydNk8NppGERMuDmxKZQ5XBAcBEmhdXQuDVvH9oqUzaaEXi4ziL1",
  "key11": "55Ctuxcwe1WqFRPi1d1NDoSgb2t3885my2zK5T1HVGmCedzHAuYvfK3T5FR994CGti8MbftR34Usg8xaxcbcffrA",
  "key12": "2CFQVkZu98ojYcUGti44WDjtCfcZBXkeqeaNUXuTTroFXyy9oazxCmp9K4Q6LEGVzE4t5JEaYizdrBjQVerYXXyC",
  "key13": "2L2P2mJeoiozZpks5pUbEK6yZfHpQpFFmgr33vsxqzk8QXA9SMZGD4CV7eSYRdinz5Vi2sx95QU7KWBWsNeMDo6C",
  "key14": "5cDDKUzGg4jRiQYXaVjFZprVmPLLJ1SMeWpRW5XhENJG3s3fHpsbFjxKSE3sKtnSMZ56B7CWABz77k5pT6UcpvYc",
  "key15": "2YPWhQyezCSRhiN16B8nEbuDAUag644roJYzs2jS7z2nzpUFEDUQci4Mv5tU9nHSF3v2TYZoCSMrv2358UnSYm4P",
  "key16": "5g1ovJFk6zJd7VzDaiXT5yVh3htsLjGoYiYtMyTwCt6G5tqZ2umRL3L2WYh6dAmJFYG3fqRdW6s6V5WJVuEAzdn1",
  "key17": "2C2ydhwb8NSwyU3HbVSfyzo8odCZ2StkPqf6GCpzuKAPqdRF8vk26MCgtk4Ncev8yiX2tKG2CA1PeWPEFH9SGBof",
  "key18": "29YdoBromscyp9nxTqP3cCNs9acLPDxy4rGNDpR7oRQv24494FL7327dd2cUasvY25vJLGRzkrC4gRab4XExW8q7",
  "key19": "4KmCkTk4cMcjg311gfgiSMPkiGuYT345wUN7zxohqyYqvVU6esG6gcy1g4inaMyUbMB7xvxywM8ovYeYCvixuXmX",
  "key20": "41SpHPyxaKMiHBZrEnhGPfuMPFvqjsr3Zq1kvhEU2v1ADHtH91Buip5y1qzUehPaqztrYjy6LxLE33LNXrP8jTM7",
  "key21": "5hPcfX9oKhvs5vABtyERuSui9ddkGk14rzwfD15ZWVjm87PBJeoG45qqhtg4BerzDUx9C722qSXRqYJjyuWF6bdp",
  "key22": "5ity8aWhZxZyzee3KXWcFgAtVqe8W6fbFd8MFhBLLYJF1wta79Cf6YVKit3FjxG7VrzdaTsyAG7a4BpaTJJTxiWN",
  "key23": "2pD991VCy1yXDUGmymcgdPZpXknCPuVe3Cg9gXGS9eNieYoY4czKd6thY3FZdnpr1jYWzZRAGaJot58co99Z6Z7g",
  "key24": "Gg74eqydPdzddMuz1q2PDBPntaPY3GchoXdYZPJKWXEbfJCVMdkxAn6SVaBsWHqPTSccDCCEuL7yh8uwgaTX3ny",
  "key25": "4Lyp1xdPEobAiQR2zDwwKr6UWzby3NMTpP4ANFz3axQNwDqaRTY7RZREwPpWmVtr6MRUyJp8tz5swSV6Jej5QXf",
  "key26": "2x4oCF1oGLRrboQmxyUeXQ6H2oUuNK3f3GfKvbWKSJFkST3hZ1J6s54YYQSNoBq64QnAC1ep7WfyzUPkbjWDHXpW",
  "key27": "3aqduRAHwrWhTNC5CrdZgerkkFnwHVc97iCKcjh1bHihaiML2Yea214q5wuMfwiWYUeM8QpunwKdoGKYjkeQWi3F",
  "key28": "46uz5wVuwyf1iLiMQrQJ1c2GwgMgJTEKAn1c3U5P5FUffyFb6mHxPsCgsrwuEKXgLFc3najzqoFboPihS7ojtHXq",
  "key29": "2PniVhtqym1cDntwUrxy16Rooic2MMEi67c4BA2KArCSkBb7tiyt17b2shwqAjUZUogVqWPdGCXQsEhFXyaeqmvo",
  "key30": "BNygYrq9Vcq6yVU75JCR6cjUrvhrqEkAv4RkPgNBwoZrBBWBRc1XWwgGiud1oBsVp8KT5H4zbyC4FgRcb17nET1",
  "key31": "53pDQKWnUDEDKRFaUCY7SMVA6KxQNy7vHiEarRbYb1eoU943ZapJ177ahBfmPx68nax8gUyw4c93VoorUwHHtv74",
  "key32": "5hssTFq4gtfUYYmtEbqp9tysbqNNUmwKrhSTY4G4ByVmE8t7tXNZcVQBnGwyi28LyLdtKdgBSNNL5ujEHetnHu1z",
  "key33": "5mAyKjEKRt67UwfRLZDvtFVroxDfnaGn85J5WKXFmCkwgt4rtypyEBRdSNLiy2KbRurxdLFLfNxbo6Z1CHUnXZPy",
  "key34": "67D9Hisyii6ttvayAGFtieuAU4g4WdLVzFGxLRMVYi8Z5eTt5dLapmouVaAtWuCsij2Z3hdTxPiXAg2MFDaVWhJ7",
  "key35": "22VbQmHQ3edNhJkzgX3MLpf93gi6mYCdfNXXCs423sRKh1aabxB3J2iANrAko1ZGyzpBzeWqUQsZEhP9UxSQ8tVd",
  "key36": "43f1beenFXc4FGqn3nHUEzRtjh6bh63WyHXcKc2KtV2s8fvE9bJ1qL1qPhNLZZgR2YHecgdqqndbqxqHUkcPs5Lp",
  "key37": "2vpe7dtmYMfEvMCaze6DFHqByuUzigPZaQKeKYCG4WSYDdLNfy7syCY7cFqoCPLzUrF9GXWodVkYvXzgrf6efFJ8",
  "key38": "32H6QNq5F6o6RDJRwVUZWss3iH98Ahcjhv4sbqxBsh1KuARDn7a5HBHkWat18U4scdkewfstvGhDn2K5uuajLDdy",
  "key39": "4EpkfQQX6sUQKHcjh5FCF3ZXmedrGsMjaZYBLbVV6hufPoXLRvmKBtCcAJL7HQVFpsJMCjWutj6SNEQ73oHxsMwf"
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
