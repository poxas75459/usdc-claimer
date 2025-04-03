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
    "5Xa8qCFVmsnoADY1sRoSAydRxupaY8GLS6E48dnopG6MwTTuLV3m9xCZoY3A2Ng38aQjmQEQKEtZNgkjvYmx3Ccc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bPwh14C9vuJCosue2KY1kuZBSSCnJYnw6sG9zxpbGyXzSE89GGywkEiT4hD5emhPRk5rimzQEqkscCD4GuZ4PdA",
  "key1": "XZRdJ1jGUPgs8LwHW6zWetagNQoNEFHmv7tRcvg7bPucfUA5AkEmf2U4m427rADcyv6HxFeyeUENYnF4jLmsPch",
  "key2": "43sMxBm76ENsKpi5p9gUK9imkgrmKe3jkVaxFvYvq78zVb8mXd3uRfYepNxJ69V7hyignHBhGANZJSi373puLfA3",
  "key3": "HoXZwpaXnNw6zxsJ51AfZuizVRgY8ZytFwcreYA1RUgmeEJh5ukCsFPZWqohJhEau5T5bBwFPCoisTEYCcJ6Gcn",
  "key4": "4x2R2KTxR7yVPHk6sHRv5mxDWFWCV8GUpvNtQKQGRYBSoXgCJqznsnPzufQwA21qTgbKxeLGqzMPJ4YUc8Zk33mJ",
  "key5": "4jDfEYfRtqMU8rqWBAzMBYHYrjRG7aG8Uap1jpQGdAEYW9h9YiUBBd7BnUugBKmu77ahGcqc4DRDAQhr5tzRVyyT",
  "key6": "3jGatWAiqpc2YrQfzkJYfAWHGXi5z4YndpCbaVgJGjWWqwhsr2mQwPPjg3uFuFHniVZMkjKmXBmTdsxXZug9r8m2",
  "key7": "4HELN6jP4Wuj2vpspjUSemGd8FAXZLo4SRgduSnQHN4WBtbzzCNP2TaTEL2mHhA1vwZGBWdYiqRADWCrsU55V5Tx",
  "key8": "5cpr3xAkDjTSbN6Gjhw95heiP7eVARCJYk1Yk8cSJ1gcci1mnyYVwx6zG51pUuNMfPphVMDMMM8G3fvxBkPwJ2Jt",
  "key9": "5DC3Y3TfiHdBQFqpmn8HezsTLewptXcNXJmcuTNGGzVvPCV1Dzo38tG8PEALG8mwNfLMGWygpkMRXbmQw3QJDV9A",
  "key10": "eZ3ZMqvFM6bBxe1HCZcDBaPT9uZX2XAGAcMmxFXqV6MeDNxxa4ae9uyqhnbdsehnZ9PFSKwbm1TEjqbqbFmEhmR",
  "key11": "3uwrKTawJafKJhNQ3BVEdfQoSRVYenfPbtJ9JcbDX6nW7dwUMaKzJq7pN7BByNk2drxCvVYaCXRdk9eHxP6BT9rT",
  "key12": "4PMeej6KUV1pcAgAKSLA16eWRuSC6NVkJjj7rvicTpcBYRmorWD8mKmUE2mJ4L41S2x1yt4i5X4ZvgHEpKeaYPEL",
  "key13": "3wPKKqsjiEamu9dt1oXhfatAySB3xJo3oEUavvrTTs59kyhdhwpgiZawdiCEdcUVW87WLAvAMx7vw7b7FYuTYkiK",
  "key14": "26cAYrSecDXr352Yh2imYQotcnjL6s9fhkzfJh2VEkAYFxHJEytsNBzFEuSw7dnrK8t4sQcbQKLdZ8k3iZnQTAnx",
  "key15": "5myWuA8UZv5x4tbn7HBivYdWcwti9ZC6ZRmrqUTLSwfbizYggF7CZrjvw8gYsQnnM1Bp2kV7MtjyS484oETAaU9e",
  "key16": "2kMAfsf4dcdWGHdpr2SVt9qb5vv81WCzLMDCMjSVMN2w6yX1nhamfRFtsFEn7iX7VJVDuGfvw6cF7hwbFrHyDuKv",
  "key17": "tt8i1SfEJMeVL8VRVxaFAQyXNLcjPRSEi43uMSsbqxa9WsgmjTULkJBd7GGY1uNFrZPUCx8YmsNci6re33mzuyK",
  "key18": "fEY2GSeE8AMQNyFqSQ9XL6BXRGDVJcTVmjD49x1WLn5koSR2BGpwdfP6mxi2EKuKnnvectBPDQv4ayLuM92hVob",
  "key19": "59VbEt7bbqSp9v2hfDKG1W9dsbVZ8dFyWh6CQktjWim8L8xEPJn9F9y3yZoikscJDn7uFt2hGfyHoDYXG8d1nKtQ",
  "key20": "2SK2FYgKtvsoa2LcP4L5YQn4URbQRViunZqjpcLLWgZjc7FRdr2xNyp6BSroyNofz37H4Gx3AreacUib2WxaoTrD",
  "key21": "3B5dUsd4DV7dv2XcsFFsE4ZBznYgc3M1qGieaUwizWSJMgCKssifP9zmbESCwivqsCQiRpJ7X4nfNtw4Tned3u3i",
  "key22": "r8YQkMEHpWfkSJVTYnxQNEKSzkCWzvMB46jXtvqptBwVABv9uM3ujWJrCTrvE5Nn7cYY7ZsQVgXiqe2JcY5U6zv",
  "key23": "4QFsSGzuh4j6iM3FQSkJuGtkMwUQSNY2D6B6QMFLKYzHpEYxB1n7vVDg8xzG25h2FMPF2zY17BcNPUTqa4nPN9Ye",
  "key24": "5n3h9n48jbX5WLWMpp23RNmLBUQANwhA6DsppSW2oWojVZot3gyu86qMQwNHyKwbsu6vwbqyLz7tcGahfYoTRSLN",
  "key25": "8VzJ2e5Q4nej938hgx9TiEnyPcpdpxwxphBeCSxYKahMj1xdJhZTTgs1NXpvToJnnfDRCH6F6M6aBurjN1dK65g",
  "key26": "5ABRgqXCYRKLiwmf9ivBdDw315LtsaDiU5bs9TscWxTF7pWXQfHqUp5o7aGJ12xnDgPFDSfNq87L1ZJJaCmzVshC",
  "key27": "5ynurBSZMd9X3CxDcj3YjuWZprtzKfXJM8iBb5NKqTQtffh7ADivf6dtDg6nPDWbyZW4FhhnDk8VJ2QTGEdMF7Cs",
  "key28": "5Ao5ccSsMNr8XapiMkrMNc5upt9XAmY96pcfY5hV5cP6ph2VZTyKDZTuTPhmKMRUv9bir31CzPm1nHBirNuj3Kmh",
  "key29": "2XME2yXweVnwSD4oZMwjLTBdfoRuYhQyzoPkCDcUaYHSprw87hYUuXjxYGcTCqUH3WpwC634X8fD5vVrsferELZS",
  "key30": "4yfB7K956vUXJUJxJH6Y6Ath7Ma4ywwDmbPE3bhnsrz3jZVPE7CVcKf8ZsSCf5rENaLK1arMUEktXp3tmqy35uL8",
  "key31": "5VDTApUKM8HS1gFnQt7Y9n5iPkD4aGpZUgnkUMkFwfhj68QxtYCCYGcf7shgUdHEgeZihw5nNpN3ogAi2ajWKLcS",
  "key32": "4BwyXywcRkgURWj4ZEWffLYqqFLoxKy51ALLr2dKdvfC7NtxtSYEosNedmiP88hrSgX21zMM9QWHdsv4LzcHQakP",
  "key33": "3ADF1hsGV9DJuLgzhZCnmuLKG2ErcAuCMweyk3Cf4FvU8SMCdVK4w8QN7TP3nWP99wPMUZ6hdpGJXM7JvgA6mLVZ",
  "key34": "23VLPqZZ2WCWRX3wDeDoVMkR6fhjnpProXShdbfYm24U8CQVXhZDLKM13vzTZkb5R7Rgt2cMfVjMrE8j5BRZ71Xe",
  "key35": "3b41c4MJarV6RjTX2prvKpHfSTjWbz4EcbF5V5ccrtUf2JHGHgUTnmsgbk4sSKQqrwxYARVHJbHS8sFvLL76iNej",
  "key36": "5XWHEEDVdfhX1M3oxtK1xndmrZR5HT7Ly8PRXB4vPF7kXQet6cBZapyo7v94DomtjVZtiAJK8ZqPuv5ZT4pxEdoF",
  "key37": "5pDb2DotkLqmzd7dKXpKk3W8BuTdruQnSyQwQLyZuExs4J4wTrxJwLejqZ5Lq6Qw3NbhLBP3KPpxiT8TL7vQNTRa",
  "key38": "4yGjtwqrRVMPeU3YPnbSoe3J3JZ814YiZQnfEYqnKyW8vx6tns69QMjdMFow3L4vMuqNZCN7pkt1tAgShQGy1JpX",
  "key39": "2SoGbKQbMktdzc2xjkBcoiVStCf5W6XDycFfqRUSv7LNds7cwvSgkeurYEKFpdiuag3qqNxYt3Dnj9MBjAhrq9kR",
  "key40": "XY3zs3PC3Fzn5kqgGNj2qC5UZ1Xt55GCrrjvujDNu6Z3GptLuSuXCTnoa9KpsS3R5GWciUHD67Mp3UjBBPuyLjD",
  "key41": "3vgpX4LPRm7JgCZjsrvrser3tNtBa8mZM2gdRtQrmYGXDaYk2Y9skU2BHCA4ZYJHQyRohwtf41ckXNUdc4EATuSo",
  "key42": "4CgvDSASbFR4TZsSu52igydHpt9ftKDbkgm2uU1cABmuafbkM1sq6cwhoXjhQ4wPWy7nAHEu1am1Xtv9imerb5Jy",
  "key43": "Sk65Zt9hu9TqKM955vYXbaMBCdx6s8JeCNHuV5XJwCaeViJQAbiMsBPbE1EwBykb7uMNvmkia1fUBx4CpBsSWUk"
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
