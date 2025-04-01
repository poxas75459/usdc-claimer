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
    "5Se7jTMWpt8DLbDe6LnvGYmSusbubpfBbmi3KrbhwKZcduGPtuDRMNFyE3JPgtyoBFyPk4F9qWSxvhzPJEXLL8LH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BJSk1JwJtnuiUgnoz59aeC2uKmcu8cmKmr442ofMRMSqDddd9p4qNzFaa2uTqNa58xG7x5m43f5PhCk7srcab61",
  "key1": "2E3PJxxgG4EqqcL8Ts3X32RkViFhDw2MEwB484JvTKEnFwv5vo7AktuQe29LeNxAzdLbTfmB7kSDUTCLEMR5S7ao",
  "key2": "sPcRsZYfowZTGm5wCvB9y2kxsbRkrZs4g6MGzU3yK5MtnftmnPnjctAuwYyeYParJMxX9fo6YYZ4Hh59Rpb6Fja",
  "key3": "4zXdUkqsWxdcSbJftinNizba2c5vhAfs3GSTcxYMJrYmqjFANYuYo7DdteGEvzicLjf7HVM3ySnzCyevAbg2vAo8",
  "key4": "5fDDWv9djoEqdeKTMak7eRqmQGApEVXm5aM7jwqsiFzUEvRWykNWzcWXVhjT1gS56kJ2XftTBHN1CXmP6cq6Kwoi",
  "key5": "ZsEKCmqauXfZFU3rSMCvK8dmPHaQoj3KdSqJk5pUCqNNaWaNzcA6EzbX4nSzRnPgQHiexAqsiRWT3he1aucidjf",
  "key6": "5GPc6r6W6Pzg8BC7Muuggc9Pffnrvf6YYi78DzXXvnfpZvMUnHunh3xKb3mYRHP551bsHmZ3z2WabWdkL6ZcVzQZ",
  "key7": "5xrPkQhfUViwAW36P1cbhW35gVrsBt2JX8RBvsWsSvPTbVimWXrWAw2FcWyZDR4kt6oP4wKU8NovFb927mEeq7iB",
  "key8": "3BibUhT9zj2fxrFir4UQVDGoUHbwTzrvvz61kqm5jGERhE5fTx9DFanFa2UZKkDasPJoRicRYer6J6Jh9Y2ZtB3u",
  "key9": "5pyTqBM2phhG3jyeQYSXBBSt8eSkq1gir1SrYUdo5T4R4dvT9qYbpdxiJMmbYV7KjwHY1LmLdnETVjZMvwFRVsTs",
  "key10": "4L4JAzENFSm9qwNmKJ9W2zty4xnidQq6RDP4Q1kmZHZ8xhZXryW3dSwYBiXdH3SkhBoWYzMo46KTgnpAwCMZtv2t",
  "key11": "2bPapD3Bd3nCu6NU8qFpdFDkgoC562hyVmZty4CYCAwwjRhjDVMgurceXJa16DpaK4t2k1XryGQJVb5a6f8pYhSD",
  "key12": "23nJB9tZkM7j7qav5mZXEbeA1mg9QrBF6fRJX4jKzQP4X5tyhNEasG5f58DfZBu3pvc2mz1QP6FNjXTMnZvczNLj",
  "key13": "dZAiN2hfzAVwnwGNYxaJGoCnc577N95sqXuESFjs7f7yrGqqh6C6jdaMSE4cKr9XcXP2nmZEXhmrCFinEko83mi",
  "key14": "4t5cTyQANbi9NAhgYTGBtdrhkTNuQQHGauizQyEu5tdCWuwYXCcbb7EoCF5pXJS96ZSsrVuHNN73QuRWrLiw4ii5",
  "key15": "5xerwLeYkY2YQmfFEDg6cu8RsqvHKcFdXF5coTV8rwYPhrxkMKTdF7JPRDzJSrUCn6GVFFW9cVPAyckEkvh4zM15",
  "key16": "wsaab58KzyqAKzh4KdxMoH7bNQV4AhJq3ygHy76pBP1AMGexrggdLGAqrekEaUydXQLh32VSnMTFa7La6tRkCeV",
  "key17": "3MjdBoKdeRVyRBwz9DqWU5WDv8aqEyTz7Myv2yzBNsTG5ko6szJyEicBc2nZaq66U38qpzZhnLYdHK25tqwAmbWD",
  "key18": "3g4USFfga36jotatMbPoosuebjN27TMfgaywMqZT5SVjTYQzuVK4ZjurxETXBgc6uXFqrYoEnaFgcPprtqTHov8a",
  "key19": "4ynwYr7xgxxSsUxpzRRukXKtLu4WDFCudA2gFmCFfLQQG9SjxWxhTPxyMWA5EKS8qkhMbiEVGcAwPqhKANtP8ndJ",
  "key20": "5FzvUmkxp84NhYjdr5vofRs78BkhxdqKepJ7eXaRX4LBg6v2vxeT3MusJzUTG9a3Jhx76UyQd9rtYvsriMMniAXv",
  "key21": "2N3Jd4HtuL5j1hr4J29AwoZEiSbBuS9fLzhU1QKWCKPjU8tdZt39sLUyfjwPAQiFUrmnCUfpoD5aRjnfVQKVztnT",
  "key22": "4XqtwXBRtTCGhfkVTD6bYaWx81zpZMLw85uMqUFS261r1R5YNm75mXQsx8MhyYQY9aoydtei8mEYbZ5BGJHzGHhS",
  "key23": "47fjDfmVriB1yzCRHydR2EmeQtubjer3brEHupKi68Gikf1XUQsuoNiqeMmLa7bFhUUfupC4r9Cqw1SXi7CJpRdN",
  "key24": "Pz6a6arNvSyamkCCx1CYV3V1Qix7GyZm5Hd612DcWojySWARVPUs8TbCVxoVzeXYDQH44wGZ5FJDSawR8C2mXuu",
  "key25": "2bES91pqWDFusX17AJZ1aYCcW9XvCrxaFah3TREHRj3W9NBmdQ4dWE6gQSeSUihgG7QNDJgikKd5hJvcJ2auGB2B",
  "key26": "44iLECbjLwVD8yqe9YS84fX7r8EFU53z7paaiqAJgRq2Ejo6xMSUny4eZLN5sumnCefmsi12u8sf7p91VzyN9ijT",
  "key27": "2dQHGV1xUDSg1D9nYPWLfvQT2ay7kAEWELETpoETSZ9r9shYBAn4mBJgm9E1rg5JNexT9EABDamRA5YgAk7ySbvv",
  "key28": "3PySeUQwuT9WE1RhJzxv77ctKUEPX2hAssxHUwwuc6X6AdJvuaU9T4sUeSaUnu4iYPFPqKxitT6LMoSS9feH2tfN",
  "key29": "56Ko5ttTDus8EpJFPJqxgoKv1yWLXypD1nWbAqXpPFrh2CcxqeSHg2bQKHJcgZd7JUoTDkwyj2qkc4GEGYegAzNd",
  "key30": "GXNA7RorKhtYVjwfFoLirsxMGmGzD3qhDuaFvMFUqaSbbR633XLdiVBiiRQhJK5jFoA6RhyfegxRgdP5YJ4RG44",
  "key31": "5TJfUdjXnM4MmWzafcNUBEwGBX8dJTCeX9nx41xJJKt74yusTY4CTdyrhWEkSYuGCmtRpbLskf4oPzNiT7bMqYD2",
  "key32": "547acGRKUfFdFAC6fvHHNrsTLxvWQqQXm3J9MkLdAB8Jp6NUhBVW4vb5GQ3Yug9ehSq7EK99seHxVGtXh7z8zE8n",
  "key33": "43rJ1Cfgyoo5oWZGTtfwzreYLpjQbYcXYkq4S3Pv1Zf9mzA543GK3U3Z2EPjvuCKa16QVqvAo3gmvtcGsiQe4T6Y",
  "key34": "3tFZ58JH4LWDaqFCcRU1FAcz5yyQqKJyMsMsx7BfbnDUDLYNgxc6mo1rCQpFcwmS2w1ynrJzSNis2pnB95aQuzaQ",
  "key35": "66fbZ7w8TG8n9YFnrwtFdSC1vR3EkM7TCiAxHTTqaPApUyB4tREttKCczGM3u7uzZ3xVEeMx5sagMrkM79iHaDk5",
  "key36": "uU6X3yCiwCH7NGDTMq32xaXDYKbf5bCiDGnVZyeJoU6QcwEMA9qmWQfM9WtZ3A583GTrE2TJWpcUCxPS7KGHT68",
  "key37": "4GcNTnCAav5EncVH1BFPmDhZEYuoM4cdKYHFKReCS1os9aBqwo4ycAd8Dx1MGye28bZLJo9cdDB4RsSdktXnf7EL",
  "key38": "2CCo4YgkVyuxtjvoonv4sangkDKgQYfzy5tZmS485UZLBT6Lhq5LbyS4m2pjbnRUyHdCiRKC88d7qN8BMnuKt45o",
  "key39": "xFSkA2yXVBBu1ribj6amzxr4RqEvtrHXp5CMUS52SjkdPuPzCrBZEdSEnPiJF7Rg3vo2p1qSvmryLw3HMfoXqSm",
  "key40": "3MhnyAqpAMMaSYYqAUgdoCU14isguqEAzJgDqUuwfRnFfsR8Z8BDkZC6U4sGd2AMtdzQxXyV2QYvmJ7uUUGWdd8U",
  "key41": "zZ8ATcysMTffAB4LUkvaZh4AWFyhJ7QMPDzgHdcAcFonwmc6t96dYVeTn99TuKK3yGicWEGwDXrWDTXKvMc8A8v"
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
