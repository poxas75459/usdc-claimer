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
    "hWthctvcbNu2egskMWAYBArKTYUkr55mYzJ5a1NLSxQHkaJDCrZDg2CKH82LCxrQqEh5iav5Zxv6eDjj8s4rqw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kq6Xvh95TyKfAdXe6AtVa7fNhueMKc2U8KgAKSZmqygFpKxszVEKRFKNmp7A7p3cEkjhwJmLJZ3WmTF4dzpMzd8",
  "key1": "JbvdQGcQLTnya5eFLjAbUPHydndoXuFoeyZS6WGZSXoVLvJCfLUVcFGhG8L5XPz6NK6bzsgrW9oen7h8yFtzBsR",
  "key2": "3wqcqpCMcHEpo1UHjNdoYmNLPu7BZ2Ch4WvxybNyy74mYF1DgQ3YVqZQNhJDrsSaU5MynmhHgvkw7unJCg1vCCUX",
  "key3": "4GT3CWySSZuW4NRfihbSVvvtZNPzu1YrW8aQYt36q8ugiqtUZtn3RuoqMC1V6MAudqZQd5RFnogqKWRFB6VSDyVt",
  "key4": "BKZULcWbvFFeLzUx8zhyaqYcymBVPipopm2ogzPgXMX7XZDF9dmrJXfxrN4bUmmgZTz85g9KZUWKkCBZtbHBiZs",
  "key5": "2DHnuYuBwayWMt18ki1riqJSxXFyBQh2yx14UGNJk5qLyiPJnoUqhx4tV2AKzRcUmZqMJL2hh5YbfPkjVXqgqndq",
  "key6": "4Hs4wgSEwm6AoQtzCsqfYUiKiSAXP5tsQ5NrvRAVC5u3QUj2ogRuRSS1e27n4D5jhqtA3iFvTQBeUwCTsumAKbBd",
  "key7": "wQBxFTEVzcBFAj2h3gKWpxvb2csfH9VpCoqZFh1hCQbbCdXHJBEaA23KHNCuEuoXmGuY9v3aGd88mGTtUqJuXhC",
  "key8": "5D86WBaDQV9bZHMtZbCjShKqSfz7AaQoQK28283NiFKvc77N8YMJBdVPB4ZCFZmCD75jsQE7TQpUeYbBJXtaascv",
  "key9": "533fJVf5z2D8PJMx8XxRu7E94AWeDvwg8rjqNBMA4ZY2chrune9kk1EwshztYRXtMMbhjxZU1d57Kuuxpgnpxmyt",
  "key10": "4J2o9r9xn9J75L9FCi9drai7ugHJYMzrGjThgWA8Zz4BFvfKqxFnnxPuDjXQ627YQsG7EcKsCn1chFeNdzUBjrVE",
  "key11": "4LQ5FATbTaDHexUzLo4gLQUJKbi1kpYhayqvzDY3h1sLtQVpBtuiohnSLmp35CVWRSMPupQF5uLMdr4qzBfQRYF8",
  "key12": "28U2evZwQCQG4oYg2jgcUa9g6C7WeKWMz6ngigQ2qbKTesgkKzMuoZzJxfcLQ3G2V92jHfuQRLpEhxfGYqSj1Gar",
  "key13": "XqnpWiEPstVZe1SRJaNkda6jqSwDStD6peTLYTepVXcKCragn7t78YUQkayMPfsSprRLRu9pvXCxercrwLypgck",
  "key14": "3yaN9n8SGkmcpe6mm1hQGfMiAzNFNLpuwc1gjAkoL8XQsHW4Mbo9aVUWJhSfP3fdYwwa66rB8hrge2rDV9LbnHrL",
  "key15": "3uRZN1dcPjSC6eM12QeEXQRqe8aXVeLW44HdAj1ryPaVw8AbkRjAUxcqJMRrQAcGGA1r1B7cCy1zKdDFfGdZPZh8",
  "key16": "3pcEWWGjLmnezbotsUGmAqPCohMhimaopv9z5NNStuJ4A3yCazEE326LK9siGJCG3x8rs6Z6v2zquWhUVVHna6sP",
  "key17": "HarGW2pbynQ7uKdURTjn4u2dc8oZcDLjAYAn8c5fHeuGLefDBZMN87ZZn9g1NjZ7FEY1ZDzAgymnwPnGaVCo7CQ",
  "key18": "27Wtf13aUaTRu8oyo5D8trMS9ibQhkvEhn2tCugUebPoVrr379kkNcJiSnZM9VXgay3sjxYcCAK2tDogCEPRe1Wk",
  "key19": "4uw2wFmB2yC92SztsTJtsKHB4AxaFGCDqtyHhzJmoaMVdGR8zo2P5GCaWDJ2VGnhLW6cv1SQ2BXqBrytCpi2PE4M",
  "key20": "4qVvyY1xjh5Gi9SDjm2dcGnWb7nYGGLXzqpixqXvDVv2r4yZnMNK8Qp7fmfqR6JJHeCx44sWnxiQkht2NousSute",
  "key21": "5kdLe8jyFZCMkY1RJXTujpZpXoGK1DfRmxekJs5a4LhgztEskco2zvUk38tFJkkSG4Q9qcHrPr7ByVDYUfAv5b3x",
  "key22": "31UQTXFLCw3AQpyordQeLQymCy9XZBAgfgHMa8KJf2zy8BtqeBa2ey31daT7ZDhb3PZgS5QrMEkVez5SrK2jeYZp",
  "key23": "3J5GvjDmcSrhZxETakXn4qquAEmGma4t2SEdCGjZ5qwBDBcLigtvkDFfx2MNpMcSfBjyPFcmKXYgQFfu6QonYcKb",
  "key24": "3MVpUw6Sip2tczi5DrN6dpg6BvcQM3St5n5y6bqb6cvNZYR6BfY1vHvA7qjfZco1z23BAqLtwXeJZpxZ9LzdfE8k",
  "key25": "ATVure9FpwKptctvNHqgndd58fun7icYSUH1uWk1asKbR33icaT7gTT8VvKBsny7nguvrQA8A9eHQTEKCKcALLS",
  "key26": "3HqHMw42dvr4Q4ucFwKDk2ZdbGFuBP9uBofSBgKmZjUkkpWMw3aLQZZyPZ439ozADFSJ7KgrNusxxxBHY5vysQ3s",
  "key27": "2uS7cUZkX5eYgCq4emj9ymZKR9TcMSkob5GjqyVQnvAEj315wWUjdMKL8kD92biiArG68ajRg1QsBtjHG2AT1tm1",
  "key28": "2aFTGmpepu5Jp3PEYdhMvdQVXmdWk7FcyTzuh3jdaCtVpR37egksfRvbq2E5xYzDrudPCtP9h1WXPSZe8vXa3PhM",
  "key29": "2hj9oJPtgFqmdszuwaHRwqQoEELm2FpGuP4wpvJYqUF7Rcgto5AoJTqzQL95U2jGrgwX2A5GeRUKw6MiWTq4bzuW",
  "key30": "39uWABnUjYJmDhfNMPAwdfRH2oCtKHexbofVeLN28gxmFype4R6HYKzxse8MQUAnJSaus2pBFQSRgiWTthwJJPbB",
  "key31": "35ihkS6FCURUih7TNamQdbuvxs49ACmei2U7JdFepzjYSZVnm44azGDujhZtsp3qYueWfT8dMd8H2akvz7Toyj5U",
  "key32": "59uWDwVPasgRpcx2mag6R8BSPvFSrWuf2wrKjzfsiMfQ8FoPLnciH2iW7iJ5HqNhySsaLJ9woXkWz9UwDG1TbKxH",
  "key33": "5jhD2rrhvDhh7YeVGLmow7C4iWaxsFUyHSLVR9YoBaDa3cVsPRVe1pvh7EUGDQjxMd69G7aQsW6ae6WymoBCDKvU",
  "key34": "qisqHYjQXkzZuatae4wCrcuQ7xoGucYaM62twGfoPJatBKPkuKVQKPe5cV2VPcpetdmDeC8AChGDV78y4vpmWtB",
  "key35": "2GVL31PyR1iGQi3pfRg5Gs5SJqQt2mmNaa9g33dgPBXbVq8aszchCUjkfNmivEHRB1L25Z7PdmiMz9Py74hbFHKY",
  "key36": "5FwoF6fvhxfrnbd6rUSMSdJKyPSRFZujc6tePpCnnn9usm9SdwhLceUjR1SK4LXFCubm6QyAuEvQ35Jzzfo3zG7v",
  "key37": "2NDeZ1d2FyVaHS7DHjcMhzMquEyURbzS62H3kcyAntT78mURvayXsd6g3FqFB7sURzjMvqaz1a1SJKmf8wujanXL",
  "key38": "vkvZVCvqNYBCVBT1cXPuMiHRXMsqtGpxng47KJiRetjB6XhvU8c8Lh2dMUSYfnHni2JSiCMz3xmtg58Twb8nZWa",
  "key39": "571v8znGyGU52M6FrRTW1c8mTfTvPRu6hTRMm8QTUbWJattRcHeFcuREeEa7XhuigBoTxuZ9xaNf2Q1b3iQsNsTy",
  "key40": "3t9RBkNqLxHrhTHSPaW5zt96NMwE9FjfHXgRxkFAXwtwJkGKVuyiuh4xCPo5nmKa9ybw6Lt12x3V2AEFeAt6o7rT",
  "key41": "2afLgAX3CVCQrko8zBhxpzdXD59g1Chn5mvezEZSSYa27AG9e7RKdy14dHzjFxxiJdUMZiWFpVW862tC5eipmy64",
  "key42": "39D2ajUdtmDSvUeh7qqwoSz26SCsKSgR3kXiBHgEwxWB5uaYwe78i9BUon3cNxjbGAQ8x3oST3Gx9sdJ7iGREKwW",
  "key43": "385MpzgoqZF1WTH1cTHM2n2UEgpiJnmt3BfmEqE4EhQsDdfttBCqa6QhHdJxCkXhab9PyQckcprDLfgGqWGoSzQ9"
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
