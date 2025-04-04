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
    "3kYeALyQ3viMyZSSCGpFcfYfC7JJkMtSPTo7jEfXFLyJrYuaAAk8cpjEamczjTaTGv4quXm9PQHJKJT2pMbnVGHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35YWxgf6F4Pn3ESVSJGyFz6gud6os589RJ9nS2yL7BoNkXxnffBgYxPshYVUYF2k2LMScAWnqe5wZmayd45Xidmb",
  "key1": "29PGEhPKR7i4gFmunD7fiWUvSXA8WF3Y4mx79QjsqymKv79ZEHG2DV9aYAgfEztucmDReXUWpULeXTyQwwH6V2MZ",
  "key2": "5DhphEfw6fExLbLsccW4YFzST4KThAmeWrfH75oaq23aNSKJBZyK7bs434pkFUm58TLz14tMb6Bha8bKbc73DSbA",
  "key3": "2rnbA2qmh2q8uU3qQjx2W3eQiGVAnhm7eBcQmfxD7qk6bKpMG5X6WwyfuuWk3WNxWG5iH7HcjxF1JKmsptJZodHB",
  "key4": "3DLz7YbFxwz3nMbpVY6jhnmNJGDHMqrhXZc2cBKmTRHdrm6PBMhYGcidkSCVtfZJhZKbgTUwnLWp1rvjaB6uDhpz",
  "key5": "2cnQST1q5LJiVhwGBqwaVQxfYZxnBEn4SXnMe8yd4peqUyYnbxWCutZ5GLnCXxPuLMDYoirmPtsMXVMBRNNC8ZjX",
  "key6": "54jWb6x86us6vJNBKjg9P8wrRKYcCZSGZUxC4D2ateDtR9ypyPvnm6Wi5QxVfcTbZ6vdsWhGCrtzWUWgCekaa9XN",
  "key7": "5TtjyXjTBPQGunMjPumpsVex98HqgxhHK8uFroPYogaF6gAVZagrnMZhshrfivG8v1gXTvKEoXNTD6G7hvU6LQKz",
  "key8": "64ZtDcqqNwmVMbQELDfxfzrsUCATE5zXEsM5V8a9ysnDXQJNqcZmcDM4VfN5MaN2eAMznq2jvJagJGv3ADD6hADs",
  "key9": "2TKM8sEnaivG1PyrA8cBSZpXwixKTNDHnYpp6DsJ19e6hTy6eQyJnVbBXmdZhzCjp7qqSquace7xf75YYrMrMM35",
  "key10": "32qcAMRVf8t2VB8hKt9cn1CfttswZJ56deYhv7VVRS6oXjxsyCcjEHzysnKVraRnXJesc2e1mJ2vjb5iRNmsHaSU",
  "key11": "5aaKSDotgPEp9s1EHY1SCvizSxLdg8krvoT1XvkEfYW7eG8dM5fAFzSKTrYdP85vSUtsMGG5zjcC8axCk48imjHb",
  "key12": "5HhPLdA7bpxWD4yU5gUjQv6f8PUZQ74FEUbv1763NqH2eonuRrP6w8qTsRSCqA1vpz8gfmzqaPDEyqq3k8fgdSxu",
  "key13": "44Pizyf3oRUdmvADPKRTMTHrcfmv8PWg9tGTh74zmYf1dmYot954zQzjcvugzTaXkyKypPgaaBKYfcKH3ocrUg32",
  "key14": "5gS4wiFXPhvK3pQgbjic7cBLnyGz4jVq5Nd36ffz9Ro42modTj8iJHqSfNG5GkoyHV6mn2MnekRud5Emtb1VFA8m",
  "key15": "3CSThXB1yQ4HAXJt6m7yTCjJuNvK4ZJt1TmTuJDeWuDWzxPTmj6SNqV3s3mfR5L7UQoWRKxahcVLVxtC1M4u1Bku",
  "key16": "3b8KRaEkEMsRB8qCf7TSv5fehvM8oZEmHofsdtsR6nVYTteVacrUiXq6dytKoAtCocRuKhraBwiGnyCNCK4gKcF4",
  "key17": "62F6AbZpfXvv3Pqh7BJbxjSRcm72b5CVWsrsf6648DAAjszkgA1HaVjqK3L72qCPgGitHaiSppgzGSHgfXXgiSj6",
  "key18": "2HeQ7BQ3WWrPn4oxG4gG7YGt9UUCYhfWfR1YfSsng1qSVvDiQ7En22T5HzqKrVDMmJiqXSCK3eqZ5yYJ182TE3UJ",
  "key19": "21rAXNZ3J7MmM7n3XySpwPAUcv9FUb87uZeeF5N6o8h9Qrta1kjsbMF8DGFCbrZk8bAhDwXBb1f35gnyNYpDfGGo",
  "key20": "3XgUX2y4pvPNrbd3TY6gbxYhVdmYFsuYkY2stDqAT2QqK6SjDVqcdAtnqSLPJSFyjpt6Xv6x9kp4mEuFKmJUbMS4",
  "key21": "413sdrgNsAJK6x2xzH6ratywjTVnWdAuJjZApJPXJ3VAwQ2Q79okeFtDzTcNETHweCzsBEjNPVEpz6hJszV9KWrY",
  "key22": "43wYoJC1f7tNuKSBSRnNLicCzNqzdFjpSKJjPBtBgfj6uiuHUxYg8okvqAtkc9cVHnYUMuc4UX338SrAKixatmQg",
  "key23": "4aJZM985NnHaviraxCHHh9mo3ZToxe4dBeLBKQyjrNLfiPxMz11eRDxrKpXoKL6R8AduuP5oJqX12CMtihNbHQor",
  "key24": "4pgMnLTfijFzX4HdJAwryAQ2ju1NdfXNG4M3TSmfQtETsvzHrh8G3qUhdqtas7rkTyhZhmZSP6TDHwTksjKrG6H",
  "key25": "27KR4cWkYqgB4ssAPw9SztFHeZP8Mzp5NrALsF3LBWbPMwH6zYKosqL2VfcoQ72ftRDpjhnddN73W4RCBHfnwcW4",
  "key26": "4Tf6SYUwvGjaJcmMRkw1EmTmhbyQ1Hskr9RVDpki5KrbpQjYRcCwpuzwNqy2qPcNM3M7vMEpUob4h4aGWkDjbFbB",
  "key27": "3UQbSVLnfs8BgDeer34cRh7bT2LGXDT81HtxbqBnkzXoouHQNQBs69Q4bpGKk7UF1pJp2ZzUBPXvaPp3PfvEp9K6",
  "key28": "2bUg1eimeGt2Usww7tNgnBLKyZGuCsvcLhjRNfUeg3GrArWAuoZR5vKJyUDmq4amTuWbgZdJDgsf9hzcHrpQ6r8j",
  "key29": "3Xx14FA4jmLLi859p1qE9XepZrHU8QAe2Ch9nRnQ6Cztr8TJZY9Ss7H3zbXuVCq8Rj5H6a5p9u9dvbYEBSvaVjpu",
  "key30": "4aVJCk9sZEr1Fg6asSgbZEH1LC99mw8stsPaFX7fq3vNAWYhGpagtwHyyyTR23hLuWXmcjiLKc4XyigagXLnUb57",
  "key31": "n4exQSZfYYsifuKuys6vJw66vV7vZhBGRYHGLZS5UPCzYGz5W4hWNjwK4kDqDWwBciNfS3CwCLoJE3Ni3DtHck4",
  "key32": "5SCjW3SQ7ahbpGCPrBEDVEPNSChJW6hqMuKy8WYA5oWtLi3yuJTp8PiyaCQ8fBe1Quoe4Qs6azPoMJd2v98XAVJG",
  "key33": "3ZPkpHmZDtenrasCmEWbFKmLp3mVUhtxUDdSjehKbE7hTZT42LgmcHFc6VNmyMXsoKvNXeVzhd6pu4uYCcToBdCb",
  "key34": "2cY9Qa3CeDJDbnK473zwZdguEvfLnViAhA39qQBLTbhkeQ38hSBBZwD7BycyFmmWGmR1eDqTARUVgKkJQoD5sLEV",
  "key35": "3H5AqGpFnQiiDYHRfYh2w1E3LVDu6N8Q1UUh96DFQp5H3tumTLTe7gmNnXmXKXang3Y31Zkp5ACHnavuRcrRtx2t",
  "key36": "oZKauEQJjxtCf9qUsp6oHfTBrGxxS7WLthm2vWGjnWeqtcoDZamuBP59mLutrgf1sEBhLCJV2CrcESveLF4uEqD"
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
