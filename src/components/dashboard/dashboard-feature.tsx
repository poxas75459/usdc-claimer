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
    "AsfubqMxD1UPYneZArriNtt9dpu1XhoBteS53iCYHFruLDh6ZDM1z5pkgpcztjCxPnZh9apngsAbkKwRjJXJRMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SAPKmaZpLwogGSc6fs68o4j4ftdxTKG4ffBhBik8koB54177jFSYWrcykFn2CGmPdrkpmc7BmfcnLh5VqwJH45w",
  "key1": "3BztZqjnWGRrjNa6DurdfpFrp5PRxhMW987zkPRbt3UmND79syjHuqB4HGnLuGQHUcZo79x8zR6SsSJqUEKc9pLH",
  "key2": "34U7szLrJGpaGyz3tnyCFQPf3ZUKyj8o2NT9R57UPmWJAS26zSQCJKpvzq1wKwjuwxic2Gn8zVkVxR19odcBMHCR",
  "key3": "3D3x2bqZxWNmMqMGbZzgJHCWD8umZnBFTKGJSp2bXb2Rt9q2wYuA58RKx6VQmer33hDBdetQiEQbZGY6WcN7ZPpZ",
  "key4": "3Zm8n3PY37trqi9cJdUcUXNfQbhLMgu5tA4QVTFUxD2WYf72NY5iTiHBqsd6CwZiQJEY45BajkS1BHEBcTRgTZV9",
  "key5": "2hDDMUSLNQaTZwi7yBYc2PqrcVWT4BGgSMgb6Eu8HkkedJiW6PCtB2dpvMGGprF3L4G6oGcVybHNVWTgeGF845qo",
  "key6": "5qJ7Mv16BhV1K1AyEtSGqcdJ8a61pRhwWKR8srxCKaEKS5RudX2vPzVujaDQcibdEpAHGkcYGu11BLZyKVArPQZ2",
  "key7": "3pDvrqbB1o9ZhMecnAP43Ww1yisod9fJ6BfwPMLceg8YZxpz2NbDTL55UGYEBCtfHAH6oF3dr19SnKFmYH9C3Fbo",
  "key8": "34HgPz5TiP4CUPcBHmM4oQwziHDw8wwgLwTu7WcXfnhAai2Qz88nY9UEYVQTA8QjScTVwggZ2WpZwhGBaiqyS5Cs",
  "key9": "2n3Gc8v4i3f6FyfLYHR1Je4em9qnNMwBtVDwAJbmqibbTx9C2EkFVQNd8b9Xwd4JMMv73KwekfNihD3UH35PXaSV",
  "key10": "3XTfKDCpVWqc7bgKyAA5Z1EnSqSzVaK79KCrMDxzSxaVRPEFRmy7rH7uJASo9gLKLPAEMdXPfj4otRKqFt5QfUAQ",
  "key11": "3Tae7W3sAmJQmYa64ioQi9A6TvdiwLEvBxwwgBqyXL2BzF9XLgbUUTVTr6WACM6oCk9xtEz8M3KX9bVN9Le7EdgN",
  "key12": "2tfTDwzt7kMXRRigp7j3Tii8MsuKMDWuMhjPxg1prfnhonnvdgwfNftifAnZvhMsfgZBoQvz3pQDTJK5RxrJ7Lpc",
  "key13": "4qVJ5T9g2ti4971LsSahPGhbkXNXaNQNh1wMRkPZyfL8CD7oZdw84mS3YLGhugk4Kk1mVy3gvVLJHKi5Svy3iWbE",
  "key14": "A5Ys99otAaAMkyACQ5DjMFvr2tvmu52Fp2bYzsMSswJnkap1yL4S8s566U8kQb5S19rRiPryPXMX7JVGPzLsu9W",
  "key15": "4ehZY8ect77eXFuNcUo1ZLwaEk9JjkqPYNfHgzAEzRrzPdtxmThzJKvRrJTfCoiNn8XKHkPk4K9T6kqvaxU8DzVg",
  "key16": "5WjUSLp6VRa1YpqhorVCJpbsY3LdQnCYxRQ7EwsZbg2uUUC47d82stdzznRmiomkzsvoSyjLLqSUVVsGfgoAXn3X",
  "key17": "4Xj93A4mxM2WwY9PdD3Aug1k8tcy9MgSxYut5TtosW8BTK228nBnsgck1QhgPytLraVLNg67WjG7Dtp6EwczPB6z",
  "key18": "3a1LmEqNEu85END2K9vrWMsUvceTfCHcEjMbTF4CrLauxPJQ4CRxRdhMen7euvgqu9kwrwa1x6s77mApTWqtNzHZ",
  "key19": "2NBNhWrxQRFgv5h2Qm4YX6Ux94g7BcFW8BVM1DtoC1B5ZsYZzqmNgqMqZobPBMbmzNoPBAsWusi5pRZkRrHvaTz2",
  "key20": "3fcyufPBJV6KsyN612pTCUhM365GuPHUCAPD9vU1AZgmRxQTBMaG8KQLTun1U4WmLhoxSQMzLePJV7qsGwVNa7Fn",
  "key21": "3ZHht9X4s7xMX5u3gpCaTbyv3p6YrX3wK76MBWWRGvca2wmsVNKLH5f1mejjLJWy7FpCX2ruSLkhLf6GXMofW5Hz",
  "key22": "2x7KzGa3p3yY9gJysGsMm7Du6XFh3c9QSg4VfLj4Brvv4xTuJCFL7gn2nEGaNvb2yr1TGCvSqenkJQkSNjF5m9Ch",
  "key23": "3fQiKioK4eKDaH78dFNwPZBHrmRH8xRrAMjgJkhX77qVHf5em4iY7JhoczeszZz6p729NhNLBBQrTH7rHoydGEbv",
  "key24": "4NknFFMiyC9VDBc6WANQiyBnL2F1uDoDeP1Q3AEfbuFzu84nPbc3kvYQN8TG1hWWY3wrusoMZ3sGKyVRYM5XFyo6",
  "key25": "4PJX8Qtec5VBMxBjKXXZKPeWr4zCz8dpy9P3StJgV1zaMk81YeSKxLmRrXexEJwpfoXxz16h59CSDnuTfYmjsFWp",
  "key26": "5gpDjGGk4WpTcZjRWkkM3maLfRnbkSC6J6vbVDt6JtscrA2Pb8dwWs6gD8MhjRun6BQyHEaghTBWw26rx6wigG6W",
  "key27": "3p6HJgh4cDrBMiSNmokMZS2f1ZcnAcNnMtZqP2TxjZgP4g8xDU4ALz4ZbeD35zhBYkSuqF9fogamxGrofc5QBKxi",
  "key28": "4tjfRDjUs8v9h96hbaofPBU6GAN5qiPtiZePttbgHMYB2BfMKnyKD9VMPh5Q62fXLnJV9ZwuJwR1A6jtUm9fJDGS",
  "key29": "3jyFHv6CjU9io713iSaMouiiwLm3rjDETzCo52rqrCxpsiAfWDc3TEUWdiUrpXKiMAe6ftANbFGeuwuxci3pvPYc",
  "key30": "4uipPW52Nq4NqujoRAE4rgy6nJhE1cmF6immu15Njc6mWAyk6XY5VhVjXw23Ae37nyNBNDpQSAEiVqrs88U19aSq",
  "key31": "3FEfxEqVMQZgrFcZhpGd9YR2YiY2WwL6Dfx2QXphNMAM2zg2FoejUHUhwQFL7fG9PRUZEcaGZjPvmdCnkvgdZEh7",
  "key32": "3fk7jfUieYs5AP8yTAciZqTrgeejC6nj5ZtpMhFRntZPkb37U8DFwzditAs3LsJkwkXdGi4u4x3K3E28mEsqcVSU",
  "key33": "5oNSrAPoRbMAmMpCM7SwmfkjPRe1jTb8uTtBcdxith3HHaUt4XUBSDso6TqrEqHLXNCtqqsNFegKJzdA7NaMVNGX",
  "key34": "5kzvfHtCJomVbHo5HnjNVNqP8grLbMQD1eArnP6eRfUGnwSh6kqgT1QWKb87tzaREv1bDRzCB84cP4oH5Rm7TdWB",
  "key35": "4dvu4heuUPaDvtJhPTebtNM6gG3ikQutRPEw4T88WSRZJTDWjZtnVFUpC9EPsktk9izWdBjVivLTLy9fprcvyD6R",
  "key36": "6432C3peTM4gy1u4FnyYPzfF8uydJCeVNbivitXBaZFUaWXEtTij2w1yP8LhSajNAN6b4H9dQ1dwRtHjYrYzQoAP",
  "key37": "msxrMKtaHr3YK4ZZo1qWkSDyGWKLKD1e1fTJZXJLUadadEbQD9Bbb5ECHT88CagN3dzHuFS1RvqBKPFFFgtVZyj",
  "key38": "1VLGgDPqfPws2dCwdPjdW6BzgcsrCh3AbsLfiDKcupxRYqdbDaLpuiCBJaZTTXAaApXqituHUmbs6qQQb54rES1",
  "key39": "4Wd2UTwsAjGTftAxXQtj6AtT3LeGM75cYSukERUrrenLrGBHJVPUWuM4hi4c4ZgLHfiMdBKpsPXj4DZFBK8tNRFT",
  "key40": "3zyihSctk3fiKdtesTfcWDkGB4po2KASdGuntDBDLNsZocmc2Jy9LLuDRT7FhzE2yE4czZSxbptsCTHjdsvmREcF",
  "key41": "JGx4fHkM7hM2pCij83BaPDTPdcPtEUiiN7jD2wSmaWH4fpMNfLKJfbn8o6KDHKpRztYdsqohBra7cDoSvpUMGNE",
  "key42": "5F48v8UyDwB1LSoDjb8NydCXoRxawbLEx5VcNm2gThvduvZVvPbBWPE72fgdgCegAHYHMnqh7UMkEQYv5UeGGeDk",
  "key43": "3nUTQ7GPq3ZSg2QBUJYvBX9wuaTF5wAW96KE2xf8nGKiKAWpG3eCcNPygERMeNmAvpWZPASJ9JyaRpqwHkRhh3Kp",
  "key44": "3z9YQZ6He7RvUfaCmcTdGADidcnXgA7mebVTBTxDH1Kq7y6dp7qBXPx7pK5psXo1wNa4wbd12VyBxiyimZoCFvRs",
  "key45": "3NtuqB7K6xUuDa73FPcxZiPDDpdD1LP6bAKRMoKZUgJkN9f3WjKGLuVT1bGemTZgdNN1cirKDXdu2mDSYcJu3z3o",
  "key46": "CRW2ttgt5VKk8ZqcRs6pYxpA1shZqSkHqApt7ASgzWtDSvhpGtL4aHLjQAcTuk7Nk93FTyvSbw2xBvnPVhNVkFY"
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
