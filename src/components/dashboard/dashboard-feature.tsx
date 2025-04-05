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
    "2tb8a9gKvLpGGhFsUPmQr2uUMjiyCf3kto8CxQoqPQjtt2b5DFm6JeTMXZ6LnuUYaYeJ6dKFe9p7wXbhmLyPfTGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x9gXeE3uTMA3rLC1hHt3BdS8WXGH2Rp4696LTtVnsvkNAdPmpdbVSKxapiAG4jKijFN9GPLsHEkGkB17CPMFxYz",
  "key1": "4xwQiUYj3QoCrjNNp6R7k7hBvQ4kcrxydGWpMg5jF5nLdwRYriDn54xWz4KuDGJYsRcmVayLAzxBK1L5FqZ7YHBA",
  "key2": "4UTCLmSebHaDBe4cJgn8wn4Tnp3PtnQLnEofAh2QqkfJyz7M1arb8Yqz5Nf74qaTmAaUVGnVEh5CJU1nBHQdU7Gm",
  "key3": "2WjrXFYSEdYSSuzrJAwhSaWbmSuFWGuWPY3SZqkpzRHN6Ee5QbNVVd9P5mVeXwxB383evDiNmfAMaDKKp1Go862J",
  "key4": "3u8nxqdxHifJVbaATXoX7anyoQKzTzw7hrgMfJxoudgzXpheiqEbwcKnPqwJADNNApwLhzpEiMyTM2rQkziSb7mi",
  "key5": "43nFJyqLf8F21RACH7TP56GusRqFwfSqmeTkzdrwkZyQTTBH1biEHaw27u9y9tfPtVyXvqytjLnaYgH65R6c3mHq",
  "key6": "2sySTcKnrhnaEH63ocqf9WKUtVxVb46MGviWrurkaoTakYgHFtwXp73Ng4mSpVNn4oSj73wXX8Su9yFAstDx3xd7",
  "key7": "5D4JnSr9S143arvxdRH83r8sCLSh1W8cN6ZqxexPMHtaRQXQ6yoUsxL1Vp5T7JaREUMrcdRPVActH4XAzKXU22HF",
  "key8": "215wbHRGeDCMsppkNQyZtsz8CcwTySAnw3Nhki7ReF1UJFpfGoAC78cCJ17QJp46WDW17A6UyCKrTZSEQPa8ouuQ",
  "key9": "nwszhq4yeLMmoitfbqBUQWUcbGQHj9qVemTqtsjR4YJHsZ5Lrw9pkzgG6bitPqo6qgnK5tFy5hKNnJQG8obarj9",
  "key10": "5vujsaNKtqybF9TDbKSafgkXPuqCT1bGk7L2oTWWgFjE6GpccUtkLjJ1zpsyVpadVGzNkYnTDEVeBeK3JVcWvDYk",
  "key11": "56Pk74R7p1sdHDweRFnLT3JqPGSJgReHESFjXXepZguH6Yv9jpzJ1Y1evZrsw7hsg1aj4pA1d4SCmvoAT4GmycyM",
  "key12": "DNbP8wLpitSvSgqH6bKkN9sdzbLbgC7E5Dnbrs1pfHKgB74r5bxqSaNEN1R9bmVStFM5YBjSqWkZn14t4XqRPkQ",
  "key13": "2s6pTNEpmLPJ2odXWfXd1xJbzvWu1NbftjzuRqwgX6er5Tv1Z7UUQLbcDG6nUe937nFYBZRNCukxQAmcW6brBh5v",
  "key14": "2pXreeMZjUgJ8rnamkpbxv5ZjWVagQMtWpW7D4caCjzmpQ9s77tMkTMMb5QB7MjhoJzHLWtA1w1qFMr4muFVL2W5",
  "key15": "2FumR6xLeK5FNZ3o7V4dRYGE5QQUdghpZqAFDz2hDQ3fu8i9qgv4279Pv5iEBTAy1ZR3ZuZjNeGgwsJRbgGiaLNK",
  "key16": "58L3VVPiRCnMpmnxaaCLc6UZjrFEPUjPg9ZmH2i4yUrEbiU7innTsRL48naivy48DMVwK5diJMxU1DYKhR5AKLFy",
  "key17": "5skAWg7XjAqZBSBTVYYFexXpMTapwPxSx8jw8c1JcCPgFvxSGrwtMKvBvcwiRVd5fjHC3SrUxMidrnmYjJngvBLQ",
  "key18": "4m7mf8FdCaSYKwz2Ymd37ZAbninrjU9gxxXx8VfqCMrSqJBnSyAD33bQT5f6cdiumQmsEzdnBvrARhoHRLiCeaoy",
  "key19": "5mFs9wfDt67dwsnSNgiiNBe6rYoZZXs1CcodqbjXHQ9NiSisMad2sd82vGYHrZTcf6u1ozzzdX2ZobtUT5u2tXgS",
  "key20": "3QUemnvktsoSsX1WAStwnphuDD91m5uDGwAxT8uGi2FZaHjZsZ5KCatmyttx5ExC3F6ARwg9S9h3a7zA3vR6nUE8",
  "key21": "3bXgcNxsWwjQQT9nqETBEDkdTpydjhKg1qzG4UMF3bNpwj65RKFSeEsN9Fspm2Cz4MzetjSCBbjbwfwQrf4ALd6R",
  "key22": "9BZyGG9ojhmB2pDooEghhz5ycCeeAy2D3hWP7CjeFjqWoVMweKmpVRLqGwjXWU6B8WTNNepHjqbsn6185Pdm1Ct",
  "key23": "4KWbqSvHjjvGwHGjDpAKXoEjJirLT9PmArbh7q3gE3dxFg8pNtsxLLUUNi3uWZWtRgxAenNb1R1McrX9WggydZrk",
  "key24": "3H9YjoYxzsw2aA1AaoXCb8Qko1ehiKvPvNzNXTg6y9KiUKbiTuhmzNkJHqKAC9ZsHCE6g4H5ohGVg5C7zRUi6FDN",
  "key25": "5xJLPSJdwmgCVr5872rwd8ToDzSCWcsrqy22ke4FaiNfq9mSR4y1PX84vizNE4S8LDpUrr4oioVRDvt3CfByC9Xj",
  "key26": "XMfW5vNS7S69ct186GjeMk9vWvLa682EyiAao7PJnNu5XJ9ELDHQZN64aMCYHoATa42sRFtdPtg186hznQczDCs",
  "key27": "53Mj2PGstrEyjE5KkRA2gf41Y1HpwwYZen9s4fVyFfHZRna7bbM9TfJFvP5bdnU2WkiNWhFgoPhgypE6d6S9pZnf",
  "key28": "2epsF6rdoT5V2a3B11zJhpLEuciipZfSqdSmQFbCNG53LHhrt8Jw3FumN5pU57q2Zth5YLRpGfpw82owqWWaghmk",
  "key29": "46ZhbEEy6PHaPHuwQkMjPZbWKEiyc6e5rPenpN5iu4vf6fgVHQM5B7nLeF9rMr5x6yPyjFzrxdHNpgzdQY48gkj3",
  "key30": "upsi4tLJhjZ4cyWrvwevN4YvBEHonTkdex36yCDUreF6GuDiRnJWyH7pJ83nLmcpo7Q5TWGDUk5R4BA5UvtGynH",
  "key31": "5JTi19P461Tziy5fGEUo676VVaQLvT98KJL6TzyWDYnfpYorJcu6sHCiwj9LMy3pNcQdNAVvvZfZ4ySCsd8vBPiu",
  "key32": "27VQUGFa9QTtQ1WoL6rKAApui7Dxk8GjSk8oafM2DUwe8nQsvUCMBPicEkJULDPCYvCvDY61aKUozTbUFgqrNQoY",
  "key33": "LdogLjGnCDJHDUE8Fjo542Jczjaayr2kbnvgitzQu6D5JY7o3LcrygkrvzzNX5NnWXUY7WU1iFxyJvZTZ43RmQi",
  "key34": "32Hi2hbTQKN8ipGT3rRfL4JcWXCEoyy3bFsRG6RDUzw5u9Hx62ybg1c2i5hvTcdjqstp1bSfuRGDnLjqmSuXDY8E",
  "key35": "5Us7M6Pdy3vWf5Lu4So8ia7v8f4vXF64nydh99QTnE6R5yq22sUqxa4iUsmagvQMB2dUT5WKNoRiTQnwAf6KfLY9",
  "key36": "2RWYAVRpWcmtfUhBzLiVsv7DbWfcTd7KnMtBnpNd35v8kUmhisx8GhcY9sV2943YMNLxKNzLUE1GGaEQd7tJo5HG",
  "key37": "62Wn6LhrJshjumjoCZEGkmc1p95DvgvQA785KHMc6BC1NhwNEqCVSpH7KtpYGYKrpXQpNXmLuzpGpsBJPNDrmLbq",
  "key38": "FJak9u47psWuqrXS913aPB82k8sjZSkzPQ42gvMZv5G6WCh79q1FCos18uFw4poLa3WVqLtYQEvpUqicHpxTNta"
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
