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
    "4ekZQEqW1y4FmptXpZ5PDutqiTvBknrRoW6Mx1hLf2YhEWQCLikdGAXqY26MYv1JeQ7nEBkwERjqhVZ8dZ1QYLKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q5acqFGW1A781RYG2Vvfi5Ex4uCyb6FvbHtBzhDzVa8X6L1MNhNjPW15vfMp4t5yk3sWWQ1nWm3zK8dQnn2Abnq",
  "key1": "65dFGphmgBQ7KFmdetDAzKrTegJVXw3AQHR2baqac3GhykzJzPFuHmLJfr11nhatstYVYofdmvRLBxZCbzHXGsE9",
  "key2": "4DUyP1b2FqK9mF8WwwPqdFadn5iHZ5U2JuqqhzD9yVhoRuMqV374VvB1yJqipKqxfThEu2kF7bTViK5E91KQX1QB",
  "key3": "d2EGpLk78LMJxxzGKSfKMoNkiDgHAgwtbE4Jtkt9dfhdF8A44XGX8UeTxMQHfECEWB7rm4AtnS2FQsYEwy78hCM",
  "key4": "3Sa4uCDNhp7uPdnKcFh7wpvgJpHwi7q53FHSygaUKyKCWTCjWvjzVeQGofGuETv1SV1WRGLyzKcKAuBXTG4SWK7X",
  "key5": "4oavjxTjgvGyqU3DUMatGcT8UumZHG1AJsbrEvRisxMrSMMU8zj8j199VeQqhAUsnbNh2gw7VNU1xGgzBrMVUMEX",
  "key6": "wyZnF8PZCbURm6ooj8ZsQMRtednXwSfv9yD6cWghqK2QXg891suTv1gwfeTYUUSRDcJL23kqmXPjs1MGGRWncHT",
  "key7": "2Ywa1zU3xrugCHQEdU2w19MjM6hjiZ5FEpigVcsYiD9q7ZTUvVxxhViE4P9tseRNLGHd8XakFqRgAdMeeb7svorn",
  "key8": "oWfX2NRfvrRrniAXk9QSW1m7KDdYtD3JUtL75zomfN4S4rkvBqkSbExk6nMzXNBhym97oXvCB45LRWD9kiNxvsn",
  "key9": "3vHrtwsg8xvdnAxHDH9xCJMZiDXGyRViYhBnfAQ7t4hMB6R3oWYAGH8XvReybkxb3sH1r9Eh7RDXSbYPj48HMR1D",
  "key10": "2R6WLDE8hWFBY2pEaVnYh7bayZY2ZzWzEhCHnqQnrC4mDFSaCX7PGv9P2i8jSi3gPsj7rKKyUQX9rWgrm6pKQPxy",
  "key11": "5HAfRDUw4CeRc4SbKuArvMJ6YHB8qF8EPFchZGAH7jQvZwC5mbpBCXPA5rzpwvKJFZbxZAEPSoH4STsLGep5zncY",
  "key12": "2yjh9oyJcJ9nRj17VBR9EURDZhRH3w9EVGLHCfHZLSwQX99AFz7mLqzQVLZz4VUfoTQHjQ3YHFue4hz6agcaPBQ8",
  "key13": "3rGYz2fJNz8Kc1QoSQghoefsSijVKK6ytNu2i2EXuxZZyTzo2sqE4WY6Bp1JB4znaWNXsSkSH87Qb4WpDTgACLSo",
  "key14": "2dsi6Zd8LnEVrirEcfg7jdCob5VnsrXgS6pcho5E91H8tWUWhXwpmNzZvTBJCDWCuJPfGAMYuFMrR5XH8AnjGSgn",
  "key15": "45iahTSW2C3QMXdVezn3DKbG1fZCVw3trStSX2XgnNu27oWmbfg4XxHeviCpdNSPhkoLsgW9fFvpEuBtJjsLDgSv",
  "key16": "2ZQM2Qpr6Rc6Ck752DQFigPtewmxi6hDpVNzAfa14pyrR48tifHShpRrGeC8ZWHPVDmmc87UNAmHtryagfBGA7YL",
  "key17": "3XVfs5PnJh6UpZaoWQpBL9pSEpMbhsuAR6wKAXrT3atgcWGcxAfyZtGWigXyHwbnd3hm6Fyqhbwe92K6qnVkGkAs",
  "key18": "2qqqtGxTtD8hce3MKVFQyYfYTyhidgKdG1ZqnWg1JXe23j96G2rQWhxCDDGx25U8szMcLvJvcLuxXUNVCEfbZuxR",
  "key19": "dnmDYe9XsD4KLNr7fyxMajLvkdTKaeA1Hg91KqHWyEjNdPdT2H1jiaBRRuGHe7y7ZLduLMpeWjw4j9HEMfpbSfa",
  "key20": "5YTrTAruunywZbnkGGd2L5kcHkxAEkkohBfM4XQzYmuRy779o7B6XE9BG1NJFGdevS1ozpeDThjBgPT3T4BCXHwD",
  "key21": "4iRy4ffmZDdL1JVDSx8ZF7Ey8BDMzcViVUxpS9VP8k5q8hho42qH49TGWeeKbDvkW6sWBhtteXdK4pUn17ZJZRyi",
  "key22": "3PbjEgAwzjYMsLaKn1oU48cYBjbN5XtkCzZ7PapVmbjRrnH9pwfSRRYsXX1gGej8qsTt4dUTACUB4Xz1c5Ru6KZi",
  "key23": "MstGwYC3bPoes7wQEu5CC8E56vWbgAwcvb8qPnAummFEfFfYSY2JpREHFZMPQSpMq8D4gdaTtVhdBNKfUrpYgC6",
  "key24": "7hZdVgK7gusrnAthMhv3f4MTUu2BwnBkpSuZTFNuttfk2yi1vhTWyikP8NYWFJU6hY5MH3RhiADhQixugoP217o",
  "key25": "4uYumRrDB1VmyexPEfBCqQZWAqXyfEFMWJegmwVf7ZrmqwANp7qeYkUyQ4Zi1YLR36xZfgCHyzExPKtpPxkneQ4f",
  "key26": "gvMtHVFeARsUvYoeKexe4xHaXJ8tmLMuVCQSxWtXEgULeQfWs1vGCFHoDhFHAVm24UqhfudRfySUZvYeFxDbtZN",
  "key27": "kCNv62Gm6jdSvVLTBjWenNjiTAAsTTU9aLK6GGbN1ndtKiqiUuLmkh1pzEjgJB8acBy139xsWykN8WYYgziVfRz",
  "key28": "5Exd2eYYY3YKDF4Uybi6BXtV1c1nKS7Wp3YEdkgyrjcCKeifUYk3i1wyYUdtvRcTBLGbpJF7xkzVQNhCDTaoqBZq",
  "key29": "4bi34ujkghU6cX5PcqVsq9coBNoVT3oG232Niq5DTagX8u5M9KW5hyB3Cjn5RdF7GCLyvzuHQYvc8nmU73jJNLat",
  "key30": "DwS5eP4xXXJP4D5roAARqHpboYc9vEorf7whstxRf2en7Jwbh2YEUu2b6G85AyWRTKQ9sJW3cbNcdoBGJ1Y3wSu",
  "key31": "2MLkEciEP33vvngVhQ8jF1mb4xEUbgBpUvQ8sbACgE6SQws7vUo2XzwmYUZomazv3Ry8zyzYS7DHAL8fpznTM9ad",
  "key32": "2bueE9MoMA1mgKD6ULACCKatPnSj8qTu68gFj8pu1F4UvvdsCc7DbSonzmAWxhs4j9Qn56fKP5fbBiNA28wassdP",
  "key33": "mX2EGEkd2myCpkLP9w9KFHdgyUVfZpqJZUA9SVzr2cqX9BbdjHf9SoNk65M6eTMwijWidEKKQUYvT55oiwTLbEz",
  "key34": "4wofX5LkeBmNv6kTV2VpEduCNUaFk1pzekQv2NZ5ms6rTCs4dwEvTTxFBcvJV27ywg815kFdZ5Q5E9bzPHL4afFS",
  "key35": "2rNnXhU5QfDG5hdh55SDZ5kTYqWu6tjogLg5LQVaE9HokFb9mRF5nCM7ceMyuTPM18xNFswhPmnB9dTFAqbXZGMt",
  "key36": "31xuk54zBhG1H6HdgHtECpJHg8ywhJ5XuP5QBG5nzZ9UT8FPiaLMmqJM2YB7XtucDj3kbm6Y6sqhDDnTc44rL43K"
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
