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
    "5T3soD4vkvx818dSFUpAiTJUQ4WqYxiz5NZBxSsjKUCBMQgjz7j95jddtgjBnF3BZBHR36qXzFgreg7moaTY9CmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34obZz9isRLiTdJJNRDp2jq1fzhYQUB8Ts1zWRpoRxPYUt49DvFTV4M2Jtig7a6yvc1BZFi1VWpPdGCEjz5ipA8t",
  "key1": "5T1WSiSxq337qz6oXstrCynM8hWXyQTEnVee7LMaDLTYsggB8BhmnJ4zYVRZv8YkvKX93Que6sxRJpaQgNBDFJ3k",
  "key2": "5PPLg7DKnTZBLvv1d2f1urXajNJk66oXFaz4B8fauch8djtEDoiwhYYXJ8xPbWfzsGRJwjjmtf211Jq8VRyJpLN",
  "key3": "4AVLLB591j3ex8zBNnUBYFim17fPFnC2LXjfetUcrwSn5pU8mnG6d5rAGg1a1dM5e7Z1gM2D5RkHF9XrDYRxaJct",
  "key4": "XjUD7gPkoZuUuUEqD7r7F8CRqhyTeTEHYmxoMzC1W4vJwsqC8fbHdujEr5U4cFoLSk5jrrYss2up3XbP818mSFT",
  "key5": "5qmiVgsEZX6JVnjBF6LegqPsnF5VHyQfqouGAM77WhKdVDc11LSF3Hx7a73zfKxaFdXutuAPkDKzndkTVr4gSvwk",
  "key6": "4EFHSUsmc1y6xiy8xtAcrGdLvi1DUgNX2kFEt6U8iYvjRS9FyZRThh2WfhczdXLeXy74LaNxUnTWZJVF5sNgVyHk",
  "key7": "w6ipfLaNN9d5jxJ5Ek6WotB68QQXUSq5mpEnHRzj5iKXMpYL2Fewg5PoPYLoiLqZUmiKvz3xMQtkXdnDSrUssEX",
  "key8": "2svhNnwUmZ8Tq8SZwrAEaB845DdqYLrj1o9FpcfjAfGmwBpnnsHwU57nFnPdK1DQMVJFv4zSWr1BvjrR5v14qwfv",
  "key9": "5ExaqZurnH44aLFkpuiQfg5NfY4NWhse1ui3dqUEN4hxsdCcFbSonqVUSnjkCZBRCaAw8fZWBehSbNLqjXaw9teZ",
  "key10": "4ijuviHh7p6mm96EzHTN4Mv4vD6RE7ZLm6ByKEvyWbepbRLecDuU3GJG11HRh9YiNLRFbeFMdoPCXqPiWui8Tf5Y",
  "key11": "5pPoHa4E1A7g18vdNGpq6inNDWa4ZmDhMEr7xkd8U3ZEuZGhdHYsxdKw8kJQNX7iS4N4eiJ4vQgHEcMB7s99g2BC",
  "key12": "Wpk2v6t8HeksVNZLowQUvTkZL1SXH6VN2xn5FkJ8HnuRZr3ur5gbfL9VLww4vz2bUNMbZeTcKxYvFPHrUQ2fVK8",
  "key13": "44AW3jnvQuFATZ5zFVZxaQAdUhxQ1PmzDUN6TVMPYBW1o8Wmc3FFDdNZKXwmvyBS9BAxnyyQuUKvnc6BFME6dwSY",
  "key14": "TJ5vsTdWhQrGwScyY8iyk8wsPDsc1rPQnYD7hQdkq2ie7PBWctR442ZdvjscZft2SkJ2hP2HU474DV1nV6iGMiS",
  "key15": "5mz6KnELureCS9T6GJWda3y5undGR444DjrraAwoiHbHd8b6BaiPJgHTLSAnhLmdb8m5eb9jfdXWJgbqQ8uuhTCw",
  "key16": "2ngWx1FvRUBB8bHUVPCyZHVHi54G65gQR7wNXSYRwK424ExBdFQPxT2F2f7DT7VaKBw86BvS52KmhjgnJRGgoRad",
  "key17": "2KBZDV9ntqHr8d4HLyDoEiwxghCoAK3DAcNEMnkPJ8sniNWjTZk6S21YEbnfBR7cnTp41r93ya3zbNTg23duQfDD",
  "key18": "5xNAzwT7g1zyhHAcD8NqH8qULfY8D2QKh6Fx6WrxKXxDdZoGk4rgCuJMTLzGKysUDMbFg49n2yz3BGvQozwLkpDF",
  "key19": "3KwuvJYWTXtw3nrtdB4KQSn5FjcvCD1YcrSo2hzCCxtu1g7PYcZCNEkwHwVdo9tGLNRA85CHj644K1EjAM7q6uSV",
  "key20": "4khK7E3FfkJZ4yCEv37XnTZnAFtvTYzApN3YJCeeySykMQuBeeuLxEtHZzTPnmeB4QnrrXcTDdcCKvYDcgrmneb3",
  "key21": "5KANDuTR6MDBbtpaXGf1Ud4NjseUWNkMYAuG9feMBwCG3UU35LBMQsVeaNChj7CYr3JdYyPo7H7D2rnL1zUJcGKG",
  "key22": "2nAa2ZEFQkEw5ve2hkJxDmZRb2dWaCyMPchDp5iwBVpy3GW5e7a4ri4GNaWymT9NSr1UwbQKRdBbNMCmouhRHmvU",
  "key23": "5Xs6cJA7p5VrCPLG5KVWVr3uSQkTMZa5wquGvvzNnNSJPfLjAq75akxT2Zqnv9FYS3iT9BDfWTZyVqXUsQbP6eVd",
  "key24": "5eZ3GDahbNQQqBnoujvFLVaH58LsasnxhjqMRLJUPg6ctNCChChgToiLsbAT3jdR9R9R5x2gBQSLjM7fsyfheJ5s",
  "key25": "o7aZae9CuNcPheo2gKv1cWEGCbXEq6on7WcZP5sFqoDZiM8W1ccjhVzzLNUB5DsjPXMKpV1mFdaR5y8zw5uYa3h",
  "key26": "4ur2sGwb6pk2JMmUYXB1VPwtrQDzWe2KHNow7f5YuDYmToLUPSmXW3KbG1TghDs6RT45HySpgNfMJJdFbsxKYKS4",
  "key27": "5QFMyXBW4YRYnvBrsGsSWKNiwn7Tp3C3CP5qMApoTguaBozSq6inbyBw4KrU9TMJJdwhrGSCPxaVzBad2Padrdv9",
  "key28": "5c8Krpgjo6M7w2mA4a38JLWuymi4PzdWDbmhb7LLzsj4h4ABNgP5MzLHppm78Aywg85auHdjpMobBqMp6vrdq4eQ",
  "key29": "bQ8DXJ2EpCBLH18pDeWZEoSCMi2CRT2SBeb2ci2tjDxsTeGwbNcGU6mdcVVj4ySb8hyL48hJK1xTqtTKkYahmBR",
  "key30": "4disBBaME1j2inxdvvvyCTUUSsWnTPHgyxLLUynNMZaEoY3TmTTRVYH3jPt6eRAgy5aamhDDr3G7uLau4RUFV89n",
  "key31": "24TC28TBEJthQgppMoMve2dv76jK8zL2K5HfWeimaE7NdP3WYBKyy8V5fm4u4P5PPjjsVr5e2zhBpk5ZqQUAysfV",
  "key32": "2ktNSeDcGhYAEdVMsWNKoZkQ794kxpZXJEbAQgRmQQEfp4uU3cWdJu2PEESCNEKgKv2AEnmYGxWmwuQiuZhwoHM6",
  "key33": "417bKsqQwMQFJDSikwod4MNHnkDQDCY9NfAuRcyqEB7dcGQpjK2mBpBaTVLW6t62tAPdZY5oQot38BhQmFzBxMP",
  "key34": "24sfNjQF9dLZNZ3fXouXhwFDseBheQwgrQuDpDRhK7bRAKU1GBtB6KPp8oJFbnvpPGSUAQ7bTmHPCizQRGY5TyXU",
  "key35": "2bivZDGVBn6DKGHzSTWGFZEayuRZvc4jDeQmaRR3voHFtoUK8dudBGzESG61tyN9CswHTDkfcvqupFzkga5WBkin",
  "key36": "3y7s22o8nHKk9QLbzreRTnpEtZABvVnr69eSyW67Ctw1uKVVwSdpgvCGwZFnQ7KLfkka62BUVHYeJZZATgb87TND",
  "key37": "3Bo9JTBvp9Z7EhimjuwHr3M2EPHbZy36Soe15e44ZWnH4YfdzNB3CNTrvEMu9P2YRDoc21FQtbuiBtSFqBjmFDVT",
  "key38": "imgV2Vg6gYgGJLUyvUu7yreJK7TMfsZmHy3Gtn5jwiau8xvbKtudvTLDHCTiqhyykvMHjaJfsEe7KEd7sLSLV67",
  "key39": "2epcFQ4xduypb1F7vfQtRBypm6m6D5fxqYLLjLAqGxTdWdTAr4R25ZhRMN3EJQae4x1Va8QiMQXuT8T9vY8hYoCe",
  "key40": "37rAmMWN9MxLZCXznDbk5bLNQfk7NV6HDSTWkhm2YNUEADZfgYP3hd1nc4va5hPRUD9xZLW9a9JJtYR86FS4KtU2",
  "key41": "124cq5ea64TWJnX6y3BLn3ZYaXmnNBqDGBCJeegvr1TUatJNoPuNeuN8StiHT72DzRugKcFxxMuy4X3uRJSxWgqS",
  "key42": "18bsGYf1cJEEJ2cWCL3Zh6jiGihRLAzpa1D4HQs1ta2u758knE4Yart7ozXMgQ3saZJzG4peBJzNVWyZZR9aJx4",
  "key43": "2WNbmXtc7dUuAtG6YHuf3ndMrv41fhBvohnkzs4CKp6pzDcE6oT39Gz7E6m6oogLbt9ai9CRPU9vQHdwsbwNXN9x",
  "key44": "4w6Y1xRMr613fEwzVeDMFyCSnAo95qTABpbhSvWrLm2YqtF6g9EJ5LWbWvX2YGKX7QajA9enqRWBEaV5HgBs4Ryz",
  "key45": "3g16eJPprUXhvdASAHMJxcu5hfo3Nc29CcjGW8KGTQuBG3UvAQZFFijKCJ9inoYgenuefoVDgG59Z3xba8LU4bUX",
  "key46": "UcnfWpAey7Vr3ttQ6QdGtVGEDkT69e8mMJTKQ8d1YzawKtZ6TFF7p1DB11VntP4gLtfWRXhPcfV37WdDaiuUCLD",
  "key47": "5GQAxKM1csYZ8h9bcL2cZjND9XgkckZex57CipeM3upLL8zmkgY3h4Ws6kev7cCzfYWEJtrJCbM6FpQmc8nYcutw"
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
