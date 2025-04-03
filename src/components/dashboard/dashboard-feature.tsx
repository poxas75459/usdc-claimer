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
    "62qHuHtLCcNyxKNBFphQtpXsjxed4AKgBsuNyUm4GxuJbnhQqQVmMNQk7FXgwcRn61gUfQL4nG8KqbwYYHC8PNMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fLLMi3k8X9FXUgyJzcdnE2bKGS2QmpkZbEEugePChWhXFdi7bCR7yxb8r9uoPYuuF1owRtqU9PJpTMBK1CrHBN9",
  "key1": "4npMiUyKRnRcGQmitBYH3TCssHBFwcSaYLT25QmobFZgVYYhAqe2qmEsuwKo34Kb9yghuuLsy5JKbKpH6dUrWR3f",
  "key2": "5x9fQAiQoK1b8yhQr4s2cV3KvkbGpgRGdp82XTbnNNZS55b9H7xtrX2WtZYtoHYXeRt93HH98GpTeTkqDUMvG9eP",
  "key3": "5YbUHocc6widuZvRew8Hahw6pdRcuxS115XEVJfbxh5xuSvrvPFNntpgiX6qLqdQfoFjnBryf5qTu9f7psMPvCrB",
  "key4": "4x6YCxbh1Q5XYtNcK3nH44ye5C9GQUCGqJk3jSEifqVbjQWwzXx9dsvy7RGcWkDLACaNLHqrZAMw9dMw9EX9uL6q",
  "key5": "47qEthBxb1CssDFXZ2kTuxQdEfTCSyLABL5KVFvjbjsD4hn9xf36xeCUimZ7bwPAN1N5wGJSd4TdHTzC7xZUBhXB",
  "key6": "23u9pCmFRqTQYGxeu3JUr5ermPct7XUBut335QyhSkMbTqePYuRJD6jX4SMRzHLJeb4dHfmHX3ET4ZwJsqy5sKER",
  "key7": "3AQbvjeUMXCxoTGpYoepGW6nb5LQHjeRF1wqffdWsdKK7wVGLJxnh2ipVQsvEcqwpvPYTzBNK1V5QYvDpBVaZ9d7",
  "key8": "4rj22yeb747HAqNV4TanLoL7NC8Vb6eB6fw39P69mRQmUJsWbuPoqYcpq8WjNAMFoGjdaRLg5siF27weWE5EUx3C",
  "key9": "3a9sWCuafMuRhsgZgYM3auSVcPeZrYgGsVkooHTAGadPAWLHafnFdnhK5fmjFF19E1aHJQqUcgZSw7wngzxE4LFV",
  "key10": "27zM4K1TezcHJ6MmSgrJv4ypkY7NaBr2jo9XfijXANaNUghUqkqupSuKWtQ8kAR8Q7pG8vJXj18a3ZLtuRfJts37",
  "key11": "4GVy5BQnBDQoxEjpCMemfMvg7MgD5zme5wWqZbzpouy5dzE527vJqHcuSacd4qr9Ub2pwyaZgLeQJt42AYDGqvaa",
  "key12": "3iqe2TApw1EyyGK8NeqCy2Cw6ZhovTjj1V9RB9yogpvd9QHjeqTmp3svLa2U1rBQjmPthdHnZNhGb6YxgGDcUA1X",
  "key13": "WcCfHGAtiukgcDpi2trxR5dhdc4gXMvfo9CBkQB1rdUNNX8WGHUy4FUkWtq1kCZFj4CzGv7DmkTHS63QvCFde8g",
  "key14": "ZTaqSJoAfPGtqhmS66tFfqj4ojFpTXU3xWowWwHgYnivQr9CuPr8ELN8fVKr6LRysX7icDNuz1oWeGJfnvb5wFR",
  "key15": "5JrMY65qYcP9SZZj4AKxSbRtyAE9A9aM1RewLZfJSZdUpjuHQDZEKpUdNLP7wGMpCYzHk7YRzctwbdmuij9xP6aS",
  "key16": "5xwGRdaE336CDAZDMQ821nR1NorWd1f2Q896g6jCHrRt8Ctt4D4t3MspNNxZoYv2jXt6co11fD4bCxG2ESQwmycq",
  "key17": "416SUx3DMiX84Ds1Q6HWLvEQVz2FuaRy7BBisBswD6qFYjPhz1h1aZsyeuqf9ap1HGhYxmmNBqhAKoTzNC6X1Q2n",
  "key18": "3782wne6FhQs8fH4daFuC9p1ahgwrTHC4yrAS9FF1Mui8ZvfnANRcxjnNY3Cm8AZg2s6GeRmEaMnTcZukPFZ1MKR",
  "key19": "2zaRuZKsEeDg6a5vndUr8TBmnzhVPZs18oPCe9PxSDkxGVdq8hcadDpS3Y6QuQzDr9wkP42RTtnsZRyT46WijAbu",
  "key20": "4JGjbemujWvABFikabbR9Gco5cbf9rf2SRpFuorgZ6e4z7S6D3KrZ1sw8cRtH9Y85v5VKMTGRe5VbCP2QX3gNfaJ",
  "key21": "49Pksz1D21rVEKQpJ8QrQE6dnWzir6LeVN8XxW8PC6J6MuqjuPF9ivV3X64fVU4RFauJD8otvMKPqMgnbwutfb8L",
  "key22": "2ByTfxCUWK2Tgp3QN4N8LLBMf3UvR6ZU2JonsBjRX2Hk5u1i2vV2bX797LjyzrjpneQQEFMRgYWyGD9EfR6cbMS8",
  "key23": "2THb1GHAsRX45wFUC8vYdgmaDbAhSwzf15B3P4sHC1AbGeKwGXYh9iw3eU9ndf3Qanj3E5Akm7e5CNnRZSHC6gsN",
  "key24": "5bXdNCvKsRwpP7aGru2cjFK33FDqr3t2nM4wfyYYNoWJpBzT945uoMNn1vyciu5QubYfLbDBdaqhV4eV5QTbcpuF",
  "key25": "4LviJ5hnNeUkBpLADfQqVsX5SjYMurtm9YwYTNUcmNTPiiLq8SJtPS1WeDGMpNxJQwo6Px6DQmLUFVtzALDsSHf7",
  "key26": "2X7u6v2NGq4CeXMn4995V2n2ZrMz17Kx6X7QWSQou1LS7rae1CK6qjHvm3YpF3JMxfQ1xqKupnydRqr5nHsXZVd1",
  "key27": "QmQbc8qWCkHyGfUyMiMx9y8E4duv52Piyzgr7gpJgmhtp6n2BzGH6qcVX98AqeajWqpMehg71XhVZzVr8yk2Y3y",
  "key28": "2SuUXFABGXynZNXdzpWQPAwjJ2mFo1s2am8ZJi2NRxNG7QBt7e78TJxk4Uge7qfsbLGQbZfmmqMhVv8pVTeib5wg",
  "key29": "61Htfpq1gTZ2XS8g7AZQ1iHzDNhcmFi9MBQRj3am2CXnjQ3CjcNo4AxyNeYkjw6gMoc1yP1nygfCRovEkrPY1pLe",
  "key30": "4KZmJeCTxb1bdWeG2Jrk6FC11wo7CUKm8V45sg8dszxDo1dcRQgJuAZd3LfbSP2r33h7D1QzzM3MkTzA9NrBLJnv",
  "key31": "3ybVGFiFdNfZKofrJJhk9muxZe3GnBAtiepqicNVML4KDaPHHe6QeN5TfgVhiJd8a9mYo4gRRYv3rkMqcEU2bosC",
  "key32": "2uZzFNyiZTsk7s4Hm4CLzXmBvcRZseDMSenabGRAX6GyebquXWomb2M5AN2P8NK7Y7DT8zKDMbKiXjP2MAJnvcaD",
  "key33": "51yjSebR9btN8TajPewSVrs3SozWYTkLShBtXT9SmRcthg9SWByP1Swe7KJ9SqLJ4Bmcmj4HU51GCjcAcyCeFgZc",
  "key34": "5M53HHit6tFYTqkbuksdVDvo5xWsFAJMuu18FhWTfAAC7pD16fpcJDJQwNjWVEwkWzwe14ann8Q7xCiW33NJz1ZG",
  "key35": "3W6LjkQHzeDUTQBUgH82diELE3iX5xc5uNY36RffxRSNF1sJG8NTsrys3vCeRfHmbTe6iAiFpKEG168nD4Q4CnQ9",
  "key36": "2brNfYt4u4yBBt1hfgkLKfa1dXK9t1XL7Vdq37iNm2AHiyPH8JQGXZAzb6Dbsm4V4DPYRnyfxzj5q3dfoxkLeRjg",
  "key37": "2mjNKtSM6XsM51zP8g9Mr83PskyE1gvdfinCfjAtGLJ5f8n4tsMLz85P2A4d8ikbmyKnbHtq2ygtGBZ6kfDZqcRu",
  "key38": "5kp8xEruj37rq3sa4bA8NcY3hp8wXE9956PJRsa6KTyVjoresNPvYEfAD3NwAkKkzAMLdHW3Tr6Z9EyLgcCwiEtw",
  "key39": "5bQ4BtqBJBqZTvifqAxfj46WJrLKW26yLwAj79o4cF4dPRwLtVhj91p8NFD1S67YEjt7qxm6jhekL3uv1xt136uU",
  "key40": "3trwHodVukETikXxQh4FcJKf9rjdWQ7s2SusQ7JqgPVphu6Ky797k8jEE98FaVaPDwXSpdWqZBHbYKRfdq8gABvu",
  "key41": "5LsPAXdHCW2FmmpiMee3ZuUVRtfKB797gRYNwvgnxkoUd81EfXFC4y4AKd3PsRS9UkJdVgrkD1SU9CMuUPeQwDyL",
  "key42": "GVeEw6JdRvkWCEzRqQHWR6ToXhNhfpcwVaR3Jp4XW9D6v5wrEg6hjA3fpJvWLca98vetFFChVDTCq4obGvaMzLj",
  "key43": "DhbX5kpAma4Z5wRAwv85n43ZCWL5xsmADLRpfvq4oe3jhNsShYc2WqaG9RHn6AsGxPJpSVwpXnUZWEggxzZvvFM",
  "key44": "5XfuGg6kDiNv8uk1ofS71BYSDdrELoUiqnHZh5Wco1n3Y3nxmhAUBDBhqM1NwetPv9wUFgDcM2yqCJdcu6npcKfA",
  "key45": "4Ufb69aHo4v3gML6fCfR6WKQnog1dKoSABD2F9wpXBHd2knUtWEm5SGT9XLEXrPG3bDiqF7rSpZbmGGDEKUQsLem",
  "key46": "m3NZgSqLBS2RbyDehjBTqCHk5vQCFPohpiAQrAtBm7rsQTfMYYAgFmeE8hjMhQkWb1dn9W8Q75v1UNjVxfRH51m",
  "key47": "4EvSLm59EnkidbbRgyStG5K3AcmJCUWQzbYhDKixiZCceFRR9ubeD3wYS4FUFEoRWH4NwsZEBpXRMxVg6PkAzSRx",
  "key48": "2ACUZWrTmqYoPpcDwJrdCJZnohMzN7sP7kuGXBStaqkAn1P8ZQtQf6v27cKLMxWa21ThPd18v6ZsFEc3aEhJuvXs",
  "key49": "2RjnMuMyNQEvbBwgb2vTU2Bj32tPBqua6iT9ChveWUREMd4oJsQaBnY2YLyntM4HDVpquHnEoFoaXT1TtRcMjmu2"
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
