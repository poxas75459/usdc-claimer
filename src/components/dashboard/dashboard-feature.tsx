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
    "U8cmam7c9WjjD9Ae23LpoN4b76fLJLj1xtnJKKhKV87QGoYGXXF9Zh5DoKe8qFf4s93srQfn4rb8LoXUGSmMvmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ve25na6C1pnzoFG68jH9yk8xb33fMMmdNxfh8sxwNhj9j58yPvfbAYXHDpe3i8YFgoSenrtigfxhsxVx9MwG3tH",
  "key1": "3MQxa2qrjtgFq1LSDmVZL7DDsJKcC8UdQGeSxz1RuBrRbJrTf8e2mXxZ4zXDL9NqhHd9i91MfdiZ1KUhLfoDuKui",
  "key2": "2yLPFmtncVfy46Je9ytkMPndgK5ojF2W6HgUf4u4EtfPDCSaQ7EMKAtZWYQB1RNJ3UKftVKYtevVSYcDqrR7D1oW",
  "key3": "NniW3myTC3CEj6uzT7m9vUuWGHGaJHnFe4pLpVffxkh1gqqjPyBpv8aer48Qd3K5ZB5QDehgvQMcdw71pYcvJrZ",
  "key4": "t5ewGKyX5C6RWdUEgVUns7GXGdbgo6SZ9nWJTpxdSsqhX1vjq78smXNTcJnvJnk3Gqwf1FTr5WkB4F1CFqk2kGs",
  "key5": "5dTu774nQEKGXty9eVM4QynUEwd6WEXve1mHJGZ2hWbp9YN7CnCWeHa94wkDbyQms7hks4xabK3Mvm4jXzT4wz81",
  "key6": "34A5AiE4paNCez18LwcKPsmeTTEcrhV9PhasnbnwnDBfc3oVQcgTuEKnFreSP5Mp1kRSuf31xEyDAYKKy5GjGCk8",
  "key7": "5YDABcjcvaP1qAJugHU2ra3Me5NdzktFLGTkpizmg8A8Y6W4oAJwxmYNQzqw7oeYCUFUEsiL3xaD5b74Jz6qaexs",
  "key8": "3DUTiwzxPTVUvEJJKGDgJ9qrgyMwCoPUJP7zLsDw81D3pTaX89RsUakzLVaMLnxDvVNBAqisxWskgtt8YpysXkWf",
  "key9": "21ND4tamr8BdHxR6m335rUphb9rX3JrnvByATMTwWQBmQUpdPf4BQsBEN9EAnDpFmh8VpVK4cbEWBr5ZrA6tkAGD",
  "key10": "2sLPMHzvM9bAzWvZroET6kKPkTGCRRxZiLubbM1mLTTcGRTTR4s4fQygTBbUomF7Xu7d63yKKNzaqgQG7j2dGCYn",
  "key11": "MK45wEJydXRKNhTbbMAvHqpw6n9BdyVwZVU2nAiHrzgBjbqTk6sFbAKBpEsiJNDTSpXt4uMbkwnxmWur6Rm5ksU",
  "key12": "pFjMhYVLCSuzoege3hREM88HEAVZKFTm8DEjcrC8ZNnwaXKreb3SZRupei5GqUqGVUpsSPiohYTwR2pjgrXptQr",
  "key13": "2Tth1sNBmJ47jgUNSKUR2rVjrrZAo3v2hRKYkxYx3fXtVAaTpWc3BwvCur7LEwHQJKhaCVZgX6tzXKzQ7LGZdUh5",
  "key14": "4gi4g5ZawrB2UGu16eCbT2CGXJigmZRzA5JCb9aNEhSx8yZkjJRPvMgR2AoNivAnoXN7yS9WssjsqyeZBjErkJtJ",
  "key15": "5Lv6eDHH3chcXp7KwhmFq9fjny9xartbSkLPfPqajGiPwSmTJCxHXhBzc6dkc415UeyF849h3pQ51QGexjmcP8cp",
  "key16": "4RppUVeCWhb5Dvg9qMfjkm1umHKF2zbC1sbM7eY4ke3k4ibo5xUnMBeh6ZdtTyopLgCQ3za1LTYu7FtWTtCzq7fr",
  "key17": "3HDvcnBtgbV1ieY2wdSAc1Pk4FnxpGHiu45DPigPjMmHDrwmo7Bug8UpqyXTobLdpuJyzWyDNvgsLzMh9q8i6u6H",
  "key18": "4acpccpwcW8GCY8oKWeHucwEsPGtWe5YhhyzZMjctQVAtZFnaeeG6qh4BeA5QWaAvjAdQfb7UiX5k7QxSdesaxLp",
  "key19": "JEHc7E4MDnphM5pjmw5GhhZJcyoFdAjWxojCFPvThCBm9hyxqTGFes9KQtS8Y6PR5MvJqkmBTJSshW4LaqChtFE",
  "key20": "3oDPkbsZNZbgYejrCwMi6EtSMR5onN5mEQW1P17XWVLC5D2RaYv2XnpRn7ua8VyGecac5ddBTtZm3P7T8yjApczh",
  "key21": "64Vhnv5YDgrLj2U6g9yByjSMZTqhuJeKWuSYNiQ8cZVmsSePA3Yxw9xwhGbqjpXnePcne3jgqNWhSqcM7MvrhmPu",
  "key22": "zCQrPcxBajJdVX3MTK3ELpBFs6cB3VgaJAZmYj5sANFuxWihpxDXrAe585JTtE12FFtZNRr92Jq8nEdNxbq4mr9",
  "key23": "5L1Xizbzq48rhvnvi1BBvKNkGZKyH8Nx6gTQ74NwFzkPHUTA7N8DaWuhezk2zfns49u6JhfWifdWjoKenk1tEF9Q",
  "key24": "5Zy5De616WQuCZB4ASPywEjtX2uj9gLmyUAMGNok8grTh5KG4GWA4XxyJhCkK4PVuxGQZGijHrpRfwY4Cjue4AAZ",
  "key25": "24epKG2jMWNtNZAhfVeYEHymN6ZT7UExBwxNecV8zePB346MZADNNMaKetMMYPpP2PkRxwBB2WdoWYM9N6bAuMAi",
  "key26": "5rgsEYuLbhi2Fq2jDvYHYL1eLe6GRAUqrTRRofDbc7AZ8DzfYPWA3K1HA2WDE131UmDwBsqfBFvQ7y8d6EjFPXWe",
  "key27": "2pB7PoFR3mj9JqoUyiYQfCUzCCATgubvCfxiNytXPabHMJpMFF1995k72k7ygAev3h5tnZHFAkVJnKBs8h7vsAcj",
  "key28": "5wvF5ENpLyYPRDaGcyM5LEvTxMUSsSbBza1VRBwiAaa9UMkvmmkuJj6wurFBNt1jY1HLR2u4y8cgd1U2RfZDGCTs",
  "key29": "L6MJLYD2z4j5F431MZezfCC8gjKsaKFtKXGBPqxwN3iwU3PgyJbu6gCragk1iNiZteTVGaXHSkZoiBKgvrc4egT",
  "key30": "9DzWXa6YFiTtb4VKEVPeiepikYzFeWmH6Qm5fKuHSF2Dy17vzPdfQ1trve35i6y3QaiuDvknLJJN9KBmm8Zzu5G",
  "key31": "4KEf5k35KkfM9duSXUbwbi1vXpP3tSGs2FBrU9GizXca41vbTiKJ9qGj9ZV5NJSQvtpLhDyt3YgEqaeGqBJYkNB",
  "key32": "2dB9AsqzbbYt5vS12toGnbXTRAB5D9Xrq5LeFByvYNXeC1cSURu8S64dXuqBM8FBFYfRtvNHYnhmRuNFcirZ5VcA",
  "key33": "2JEFUdZiMinyJJ4YFTBke38XJtxzZpgh5HEt1vt8SUJXqqnr3Qhf2XnbuDB1UQNre6TZ79b2RnMoUWZUrX3TG39p",
  "key34": "3uz1nSBmdq4kFBSpQpBxXmETgcryjqPtwkwjs9x4KmXhHG4Pdkzcy7MRzfAhpYuZTDTQZbCdQvbt1kUumFYAqfJN",
  "key35": "4povVA4MUub1BEACHka4LJsJhTHByu97AzDEYLnVB1VrpDUr8RoPWjT4wDmr7ABVmUHKikTuvgqRVhfSigrJnR9j"
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
