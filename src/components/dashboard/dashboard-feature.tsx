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
    "5aiK17FBJWJznhNud5fDu8itVmdzuePR9b8WXFfpsHmYe7c86HDKnR8Qo2sTCras7Ua3AMUKTxGrqnr4AfTdhhQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mDF6UTubSh6VwEThnpyuMJqdkcbjSZZne7Q3rcxAZMEdGEBMsafKcZHV24HtXiSQmxKaNjyHq4pJshVqgK3H1jg",
  "key1": "2taQ7FHopMFkDqWpqC2RLTeJhKu7xuRL2Xer8yvFh7JPZyYgTS4VHpJZfBq4EdYo3pagh3i87jsF79nSsMrMHD6a",
  "key2": "4XBLEpPysynpDhp9ML1hMDDQ8AcaXJReKNGjuMZyE8Bn4gqTdrcpRWkjTMtrsg9rivY4LELtPS67nmivVRcmLqbu",
  "key3": "36i81J3SGqVFyKKaTb3o8RBUDw7K6GNrh4rx4GKqqY6rkpvDLYwnkGoMeQ9tCJGBQ9nF8GBmaL6RGziVobgqxkDK",
  "key4": "3X26qyLdiyaGLt874whcMUa3VomtcihxYe6vJezvmmp2djjWt7sSu29kDGJ8v8XWuwQsvRR61JkrkyyfeoGGnkCM",
  "key5": "4dSQyCEh5h2fSoT8iacetHC1AyPsEJFu7cAgFZXqhrYYk1bhBpw3pN46MoRXswi1KBBozJcFHYQqseX8UYMoCvm",
  "key6": "58bsTW33UjphQp229oAw7yCBEm2z3PJWYZ763iteKQfRWQpPekARBuCdeSPuMVtsTnudfqzRAbuDQLD9n9ycuxP",
  "key7": "UCreiMyzFijdyv4NgEm8XE3ub81naKgxhAFA8LVCeBCD1hXPjJxGGjzNc5zSgfPFLL2RpZtxPH9ttHyDPeB4cdP",
  "key8": "4s2ms598uvpPLXd1T2M4QfCekntaapkFWFdPB3GvjVdmNLqy8UN8LAzZByFsMqRZhBYsLypEHMd8ptvZmNghWdHr",
  "key9": "3FGtmtosB23CeBCW7jtGAMncC2uavrjSRgruCPTSnaAAzuf82pa1Y4JhjcbL2dpuoZTsM6sv815ZsAVk7yeJRGJk",
  "key10": "5Lz54uaXjdnFbW1cz5heLnVMWcVRaNuWhFqzQ6s3XUF3y7NMhFUHavkJnLW5mATHUmuPdSbJihXsnTDK8XTPbSSN",
  "key11": "3FJbxvH5zDCkm2DRQ7BG5XeCzjV2JVw6PXGR7sA62Yy8oaiQFzM9cYRHvenFsiir7trx8xBynuzx1CB5E3L92sf5",
  "key12": "5xsiRiJBNMa9utaamK3o9eH97TMnPqZsWzYXMhUob8GmQ7F98jNArJTvJn4GbyYmqZ7woTYGex121irZ2ymRf5M6",
  "key13": "Xx6sR1HGv1HqA2WGsuA7dZ94UUz3ihEbF3mVYjD6CneibmMFWiEp7Pnwxj2UP9WBRJPfGqkpfPAr1nty2msX8cd",
  "key14": "R4YcNF6sDhZiURaYuvkSH6DrrjERtJDe3MFj5y9u8XimSMrauGuNQZvHqv8ZWZdPzXPeWEvkGMcU6EtkrrvvwJE",
  "key15": "Ssb6HEFPcq5r1ZTRtgo2qkdAXi5thjqNXw4eeJFGHQ8Y2DRDGVMWfA82eUbxKaik32xq5kakPYbWD62CTHC1BqN",
  "key16": "2vCg4oM1a5J9ss71HCQiQMFrQouDQqZ5Fi1tpuR71hoaqadJLzUnPsgFFkHRv3i7rFcAU6V6MLt4LidpZo1VwWMG",
  "key17": "mu2Xm5U4LBCsEw7cS92UdPxTAm216xbnoTFvFvMH52LfLoLH87Nd3K2pVssRZs7Q2qty6RCjQsnjp67WJDb4dyU",
  "key18": "iw38W2LnCJJkn5N3hAWouQHi7RBXdXWPsYk3d1QHvt4KvcP5NCcYuiPXuP5WRQYpC35aofy4Gs6dtZS2KsCrmKm",
  "key19": "4rve1jDhZYbJwZje4VDt433XenGDvmZEUrtYjj3KhySGVjmQtPDmiFhixANppoJUUBGoLiojonndwHDNYcP8smYU",
  "key20": "4kAu6rxKm7hg6ZGfZ5Fa4CTGWY6PMRQwBmj2SBTRj23MNoom9q5CFCHFMDi4abZv2qTZNCXPU3cdcii3bhVNVM7P",
  "key21": "3CLfnBMcTipaDcEo3i1NKSsCHdJSXQpvL7BaNrht3Jb64Q745kPyW78ZUU9c3kUbnfn7A49NFMTYNRTc8rf2x2wo",
  "key22": "3fDMnEWzn6gPQUEUwZmScHdALqFLLu8TfDfmmWj95beSSkbE5rnFENmVYJQMEKdMxdSus4ESmfDm8o5jRY8iaL6z",
  "key23": "3aqkXQhaxg2Ry3sCmF9RBZR1GmKq6oJtZLHaPo2PiMyT53DKuhNXhXRfTsukeUSGayevQ5j2gTs4ftEJ2NikJgvT",
  "key24": "Y9KUFnWHm7BPPT72BA6i2UNUFZuakmMbMfT5vW6edJG1fog6W2kVPch5Qk2yDFE3Wvmmem6ZjLcTEHzWpMwnHEo",
  "key25": "5G2KJZLpjCzkXx9G8LixrTcQjpR3DQsLPqZmndxogj5TZ7qFmDH5FLpKRBKvSEpM4Z4qPK9CwYg5YV4qGkevfbH4",
  "key26": "2nidZF6bqTpPUDmmHwzX869rQ1P9pgVgRPinFpXi95e7rtKCu3oHgys8k8kjaYApkzaiw4G2VqkJ58EncGdFqvXA",
  "key27": "2riat9gJz672htqxyKMCPXHh6hZvryRGrCKyytqK7Utc9YVfdJUXHV4uqqusYofNDpzFaa59Gu3tYX6inSWDEn2A",
  "key28": "agWZcJZUU8SAoUPnu8kXbgLr2fLDejBnxCtFjVnupgiJLHzHEjsmxpmqYiHetJuznnEi7Zc5edxrEMrxYFvPKch",
  "key29": "22ngoAv7j7xUAPfyRE4nqhjpJEhn484pfeyyQAG4XgC8jkh2orhHUnimUUuSeqPdVrqaPCCmXV6CoZZrPUzrYyBX",
  "key30": "ndZV3pwa7dgHa35pnhmp1tr1PyJBwyoiMr8PWJvgsL5jAysrpaHwoudCdzahYnQzJi9UHskqdrNqx6KdVyWNkK1",
  "key31": "4YTajsY1n1qSCZPNiYdEeLm2hm3tBbDoMjnHacyyYJEXkprJuSzTjV1BCFC6vMg9hcMqqa9rDaRKQQ9CxGMMBFb6",
  "key32": "5kcLUrKyr1zGZCdWNZnbQfqRBFGNUwJMJxGfKj9iu7vXngUjcHQoyzj2eWnjQsb6cXFYHEUybkVrLZS82FasxQJs",
  "key33": "33rmWL3p7VeMYz2LFFaPeTzpqkJKEFWrUzGhcuhZFXknnHXyXFB2tRBdSS7akNmhNgtzE3i9SaJMqN1zcWtuuGv8",
  "key34": "2LQRLi8e3LxHxCWXY5vHBFGaEDxHeMH6kGJnBN9snyfGYgccxR4JEBJXZnyQrQMrje812HqvrzDa3ELWfh46iqG5"
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
