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
    "5ZuJ1ULt8ArLL2isg6FcYdxxV7VHJ6sm1C8JAnp1VrQzv8DGrokUSDCFkzhZTZM8EKZWEm12P4myHevur56DtJgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KtGtYheE8GDkMkUMBu7o3NVjr3eWKq5iph4bhq1VVKnfvndZFuCxcC4MY2ALPGUxLnnW3Tf23NaWbyYrx5jr5zC",
  "key1": "uGV6bNps1fvF29wZarHu8jHwkeBE1KqmgsJnpVRbt6N1Yb7bMaQdz2NucpiDcPmg88Tab4ozuro7AwpWZwNYydJ",
  "key2": "5z6xkHcZDVBu5wX2SaymA9LjYAhY4Bca972JP5WmiAr3CiEYh7JHagT9byn4s2ZktP2tp8yLeSRTkebCXkjVX1wR",
  "key3": "TKRDoWKiLK5eoRNdpqqmu25EQX7PnyMwkRbvvvSzhTxZg5uXitfmMzTazyvUUeH1uwZHS6wSaDWZ33G2QenXnC7",
  "key4": "2F9SQkAjaMkkvRd5yNZZGkVKqFE1eyY7H9RqFhFyLUiuhLaeiYbCW4Tkb7rMcakJc7M8MuPjFeV7JyhtHHDhM5K",
  "key5": "3JZBpvjptbizhZZkFbcdjK8x4YTJypCfc6hn6jqznqGgNr19N7HavfnxqPLdABb5H2kVRzLHGddKW5kVYFzkExQ3",
  "key6": "3hhbRbmFZyKdEzx15AwC9XdBN1utkjMsY2YcnaFuYz7xqAB1HF2CjazYPHGNBHd7yizqkWiok9b7TXpsFk1zftGz",
  "key7": "2TTSJTbnemsxA4rQwjRUKrkd2P8bwv66qshH4hhJPATzLhCsifRzsNqP9vfT6FzWd6otDjBBKGvt1CkhNr3RSMfv",
  "key8": "35D3CQxdLw63Dc3pQqYDrzYp7bQpi2hVGD3yQxuQBumGzBdKwGw91gjwSXEmkhwoMgKWmCukoBNLq4kyqswL6fLB",
  "key9": "2ApRfGRaxiFAX4gxHFbNXmKNT66VQ2LHKu7sdevyvomMoRFtSc2YkhDLDiKm12gbrUjHTyPBKAS74XFs9gNP7qY7",
  "key10": "4vAA6G4MYYzr4XYYFQ7t21RgF6yWMNkW9RtNngJosRfLSCbViy7mYcPachpsmWB4LJ3NjJEbAkhPTqJHg8tsi4MD",
  "key11": "36XPYzJJQTpoz1MLvaE3Ekn4b1id6ZuyVuqtmkq66MZeUHtDxj8RPmN7FGvtST6YhxjK7qyBS8SYz1hN1swz5ZxQ",
  "key12": "3WqPC8QxPtAgCT8WK5uAPVBkcYbeZeFVE6HfNamxd77hkdgWesgZRx2s39qnU5GorbfA21BXabzxnY3VeaVeMuL3",
  "key13": "3FbitL266yc2BRW9KTYkP78R241EARCRn7aUVowJc9Dt9rGXDyNdnDEAVPaR5bVjSRfoGg16WvdzHsFH42wR2T7j",
  "key14": "664t7qtg3aEFCFst8QGPTFuMSnbLreqkgKjSX5wUMqrDwZHKbbG5xMqojUuHxwHdbuobFE1zF9dHVMW26nS3x9q3",
  "key15": "5GtpM1NFYTLjzwMmviZE5nMKv4tceYqdJsbuooWKfgU1h6tfQCWuTergmGyEg2SikbVUzAr9yKdZoHiXjWvJ7BX7",
  "key16": "5rn6E9aF6ZZLq1ErmNRh27AMYCJLodi2mVracgy9oYEJ5q89sCB27N2so9PABJV65stytZhpCdr6fWcSdsUBf7qr",
  "key17": "5i9M6swouW56WQtBNiPGcqBpqBdgRSMr5L6qvbgiUhfhagdUzG71QRZ3j8mNbDqzUC8njXsXtbbimQKjBAjHT161",
  "key18": "JLUQAuiScZPjzkwXYQ82dD1sDDs4L5jdycJuvzdny9ZgX9odLh8rTtRNYCFoqSJcDT3dvfJqiVKvddhK66TswYS",
  "key19": "3EtS39WLLwNnB8UQCyJT3WUK1dwzahgs1EVHQQSxorCnf1UdEjvQq71wjJo1DpCN8U7WNNKN8zFs1JrXFrN8wFsm",
  "key20": "EdfRJc5NwmdLMFKSaQFCW5rT7CBdjo56U11TLK8VnX9ZXVH8iMRLjH2WqRfAvniL6F6EV9Pucfg59jZVsDBSGMU",
  "key21": "4ryFCnKnY8rxqxe6dC7oiT4jtCdSDL2TqFMUwxLKA1qwjdeEpfXZzaqRR74Lz59spUDYr2x19AmMx5xXbhKv5Uv8",
  "key22": "281UpfrDebbqUZu5Q9Z7sccd54DjTuoGtgtddxJ4EFaQLx1EPhLWf59Wdf9t5rfKgZkyhbKQcPDnaaFgvEYUFoUF",
  "key23": "ymHHbDZJ5kGAX3BbEjzRkxcCUfgicbhoSAFmy7D2ziLrfo3CgHD1ta2boWxMnrMV33JZHD3j9PGv6WTcDMqCZ7x",
  "key24": "4kdS2nhwnp7TdtPGoD42rNdXXSovx6BLyYpKqn7ov6Pn6mBZ3NwVXLyjJwESWKHgqXYKxeQGtCoiGQLSeFbxoG1B",
  "key25": "3HrykweQZqugK1PX4UUcEnJakk11oGk7Rmm1ihLCftsaZZZ6Zpewjnn4G636WhnZmQhRzah8rsteLRmhnxoEyB5L",
  "key26": "562PRrVrDzGLgmUxVHFGV9UYiQ4mjoDJ8Xi8WwpJcgN8zDW5Sr2Pozep1NVnsEDSJaH9NBysHvaGZpmivE98JCoy",
  "key27": "5qXxt31D7zfjxh8bPxrpqeGxZmmo16gbD3DyxsZLQnkctpyNegVVftjhe1UAox5LBoVnoWrsUqWeovWY5vHmFD7s",
  "key28": "r6cxbfyirEYZKuoCndTBVxdJZQhcYfqgpi57DYnxeHtVhRahEZYwW1ziWjM38QNj7Z3EZoawnS3GA41M4FoLoc6",
  "key29": "5PV4PVvvxDhuWWtwTbpfq9iGw22258qpispZfNgestvfSSsKsdaAECRhUVmYNyaKcfjBYPdUg6HWGPxxwNudrEdu",
  "key30": "2ZRatokFxWwWhjhXZVu8XE182o1wJdHyhtKst5X2nSi1kCa28QrYY3LymV7igwDbqDzxVFtb5uHRbL6vRN6UngMy",
  "key31": "3CYM2Q4V7Uq5zvyjWJkWyuD2esnXSLMmHE2Dc2qaSMmHJbN9UiMQHR1ujUiAxbDDjdVGcQDURJ22NN5oDpWGgV9b",
  "key32": "5ELyTNXQwwKjDZbeYiVesA4wgJMBSQDUoDt3kh4zFTU36B8mRHEqbqMkQFRU1FdkaxrCdXBGHWCoU2Tzki3x2RWK",
  "key33": "5PXPSZpdZrjNf1G9KBpNhhqyfxLpVoEYDoX3R2167ZBXMFPr6g83BqT7tMVDacrP3wPSkg93QBMbHKeEA1UxPLcj",
  "key34": "dWXcohvd64hq5hhTT7zy93gGXs6ZMVPTY75UUdJAmWBpbowg5dEXysZSGTmmobNq3zmeCs6Aku2gT9rUNcVDuZn",
  "key35": "5BSFtE2zUhsfBCcJvpAE4ZQ5aXLJSTeu84kwrqmzmogfZEihXT14cAGSW6CRMQacB7gm7PBDm7mg4QsamDGW7U8R",
  "key36": "2xRzrawcC8nWQufwhEe9xwxfA4Zba62LhmRGQk3U699zR1DwaBreV3KdZnpqh5J5fFMfJWFtgFrFqA5iUfMc21R7",
  "key37": "4YLGsyBXrJu2kZNmsSoiT2UarVv5U4gCmUXgcDtPZAKTCP2fCAUmitby2Gitq47NgA1GBBhqa5wLVyqXNULFQX2a",
  "key38": "638GgKUs9C5QBqhkfppXx1vECUKTVwLMFsumucG6RnG6AaXPCz87uMWJQVD1S9u6QgDTiuRuFwprFW1gm374UcyZ",
  "key39": "4ZUyBmM2VLtqF86jLF5u69QXaTMhM3iCuj7fDpTRWrqu3iwsBJcPkcuHBe2qNMXkwpAwLVTLRXZxsVE52SaCwKd4",
  "key40": "4YCkK4TCLvMBJSrX7SVutQeCVwvM7CT3T8ttkYYo8ipa8uTjuHCARuHcYPQ3LsKsa4BScSXarpUSH9Yj9krVFUc7",
  "key41": "5dRfREf4FGAfNBojACGAcKDaMtvtpaez3xnNzXoTCdqacMfMqTrgWfMsKadtpFTQTXah48x9qcjUF2MGmvYoeWZY",
  "key42": "4KLPm6cQdYcxsQSGVYd3eimaHm5pLJcPYJ1qupPtkt5buJfHTi6dw1aeHstBhDQ6B9sZAdvDjetbCnVLbaY7Qd66",
  "key43": "5cs1fJYKewx3vUcfZvPFVBENBUTu1jtsX9WeRAiN2nMNdPutKZDQ43ptGcfkyjdgkKBPAcCph8vAmNJLDAUjWoNu",
  "key44": "5wvPzF4uEsKhcz9uJ4T6mTBznvPzTjSDaHQupWuUp6jkCuwSSAib9LKdMwFAuEyD8qNx7YzXyhCrt7Le1dkYqUnR",
  "key45": "65mK4CFrcdJs5nFNK3xgfqmqJQ7QNbF5a1aSPVPkBkqGNwVpa3FpWXJGvYwH4tyPCYCzqPRrYXtHwLeGMXYDtLWN",
  "key46": "5Gb7mUbb6v6R5E9XdUVtSHfUHkLv2VssCemord8YfAyy6DRxuYAjcGUCUeDU9Xvz8CaQ1K1y62zeyV7dJm5H1D8M"
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
