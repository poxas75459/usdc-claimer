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
    "svpQppLxGoiAgmQZvAmm6HNn5sbHYyC9hQu2Xx4uJUDmhDSnGw9RCvN1T85q875mqbbHV9uiTdRq9Wo9sV92Rvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oQBmrTdmmpRaT8ktZGVWEAuZQB5Gv9EwJTcHwZq2eiWWwXx2CuSztgYHfCqaK8KQgFMYK2t5exvyjfoew6x4KV3",
  "key1": "3cRroEk6jvHYeP3CudwmQXWyoGGyb5dEBVmxv4h3XFv3SRwWzR7Rn7E1RQ51epioPGRgBzJzJzZfkbbTJNKZJ8bz",
  "key2": "wkyyF9NCRt8fNHQhf8rQC9c5gdqrQfUQkFsFkU3gzRubakaVmF9DVFX1bgX6u67KCDG4tTDj7u22VqVLbwTary2",
  "key3": "3Nhz4b6n6oWvQvDiqSHHE4KWqQPnNFzfZFA7zCL7QgVrpZ71TQkqiXN65NXQCSS7Xj4B9xSirH4iCnKt2tFremuw",
  "key4": "ys9FeatxD3KbDLMYfC8dp1ziATzNp1rcTa8MXDxp9iQ3fjB7WYjQnd9UwATjiMfrA79SM76QNWHMWfPZfVVysya",
  "key5": "39fkAsDp2HxVu4TgeHFBAK11XbLGRje4xzTo3oM75X3iAnbinbdCnUL3zX8zsfNz2u5m35EScjLsU5xHwjmsitFA",
  "key6": "3ztZwjRmsrchEgAnNescDgUFPD4uWc9D3KvmjDLakWarqK7gqXbFs3yqsRoi2ydC6xYxP6fqM3YjGkGMFcCf1yLw",
  "key7": "Pk5iREPBsGdT3u87y6asrzhGSbBREGdUZDEpWXBhA5RQCVeBJJYqrRtvBQCBNmm7id3b5BJw3CDHcCKAc7fQDpa",
  "key8": "51qScg6GKneRiShyo8u7EEGhkQ5BA8skaTbsdvZvAG447Egwuxwu8ZDpYwEURwRHKHjqQsyKhQEiTuTT8yq6pWJ2",
  "key9": "2BjMSd8vVQZAd4YbiuJFqXyfFZMBpW8bcAivRQ87ye4hEJzgAJRbdK8He9fgpQ8Jjs3FnDFexJvKaKupQyS2qqcK",
  "key10": "41Nyd2Yj7h5unQEFvr84ZjVhSWy2uK9dNm1C2A8ZLY8WYZKvQcxL78Fy7S8V9pSX31HWzhDpivqv29Vujzcmtvwf",
  "key11": "3BdZk9ceCZ1VhhbqSSSybhm7nwDR2hLhXUQdfHPXXqPrXAeb5TPNZWALyrUs9vRMDo1burKkRAr5ZFST7cmAYwjJ",
  "key12": "3xoAudFi8A82X7i1LU9hYcPA3a3egymzfdEUqo14ejKHBUJ2g4bmX1GYQ4cuYH43Hs6ogGA9Rd8qbu7f8X7vWp7p",
  "key13": "3K7gz8ewBzf1fWQbgbiQsRqxZ1a5MPrZBoL9HRCrErPTPZywcAQvjK4kMtV4RdPhAWF2KTvwMuBu6bK6Exnsffh7",
  "key14": "5tqXUEj8og6exfMq1s9RShu48E3CGJYH8FgNJkZjBUvd27Wj64S4V7RyLWSG1VTrMFiLz6U8qnqtYa5eXCNNd98",
  "key15": "5KmNYS2JjHEYQZJ62KxJJszasByBogi1rXjfkjwnXW5a2GhC6zo1YELeGS7vzrEnWSfDFPSPAzHcpkKQEoS3iKPt",
  "key16": "2sN2JjmLYe5wJykBSduU6ehMFQEbmKNkj34Wa4VqymV28DdoiNFB7sU4kpP9z8CGmXs1ukuE2kMtTY9UjciJa4Zt",
  "key17": "ywVTFtwRtxYSykQCAenJSfFkM46QW34zWLn4JLkhjBuMA3L34cVk7GGYHZfVN9S3a7YmRimRPBFBQR2psxBPKwc",
  "key18": "2aTdPAjViM3ehBjyHfbFUy7j4kggWEjqAB71QWTnafJsniHVFBMvW9GYb87M6GPrJ4459vV8fWUCfPWTvj6Sxec6",
  "key19": "3SnegCzBBAKhbKbAkSR7XTgnwzVW1LpCQy6CUpifuZome9q8SK88WTWnay63oovcuUXg8HrvQiCTBwrL27h4to2K",
  "key20": "NKyoAJet7bMU4vuvgHLisu4kmpvBw6d1xALLLPwtF6g37JL9EAUHXDwXPuVBUDPvidzpQdgYxQQrmqPUzvX3pJG",
  "key21": "BtzLNyK5iUUT6v3xLZQ366T252VbsfLHEJBJ7MxyRbLibveY1g9xUV13BpZLLe4ZaDpQ1yw4h56Aq4ai1UkUAxd",
  "key22": "3J1cXcZCXvvTfHDb4PuNuPKQRAKiLWh8ZgZzJTXgYqtRQ6Zk2gqExpV5u6uLia9Xn5jMQxRBimTgnnGDyzx1xdhs",
  "key23": "3zzD3r5qUxVnh6wSPKqb5Wf3QqCLnQoE3j3wHBy9fFGrSDkWReDudf18cqG2hvHnzboETssUhmpy8pQmDcDU2eez",
  "key24": "2Dcq4kRGUA8awJHSbNkaaWEQEPVuUpCV1eQz42SvJJBFmzaHWVB8N4AKEF66hEsXZ6hZrpbVkq9uq8pyg3iJPTSS",
  "key25": "4mMg6qPuVYtzWfg9gJ4rTtSiWY78nEB4KmgDj1Mr4FAXRW6XA1fHEhQpxPNgx9TivWTBNsy3Z4q31MtgCH46LScx",
  "key26": "72m3ofRCf4Nu8DrLooXGx7KRvLPqtenegGiNdXNhsRkd394hJfxt6YM2ChjcvH7kFZZseb7JSmFXsvuPRKEjGFs",
  "key27": "hCtZqEF1fiNpuC2VPuXfPwExwufKPnGTvdrx1ivckZpifsjYZfZSXFPy1FC8rZVK1ANLLA4jrmRC4UPYPKHDEXi",
  "key28": "65U93nDMfD2VdHcK35L4zeqgr4uRzxDzbBUUxA6HnsgGTApqu6kiaGDNS8o42QPi7iPKQCR3qD2pdfvwsxSU65NS",
  "key29": "a9GxbrDSDpvf1c9HgbMtFeZrY23QRE9bXf4mPLneCpFmJyeP7KSCANCiqLbvw6XpbrydHDTG329QH1W32jrQSbE",
  "key30": "56EGnqLL6g9WSJAohGHVoccRcVmoWcRAxnptAXg6TfQXJit7neSHBpMjGxRW2BMXQ3KamhnBF7zaR2J8239PR2nk",
  "key31": "2rgysWgjzvKARM3kGqzKpgkQHSa6iEfHKpmv1oHFerWFcRmvDLkhSRaBMfwfviZ6PdDg498zjWY4H5pXvrNc9VKF",
  "key32": "5KFZ2zJ5ik2dv2XQ7tEXTWXkKEiuFpwNRD22LxQMDsVN1rG6wsedXUJgKWzGvHHwtgjVsmk9VRtKtDFyJVUqbZ21",
  "key33": "4oucPuUftB6ygnFYMfFsAWhspeckSxAxrfcQMZKrMwDN3FSCFzCMW1CT1HMRF3pNiUeev8QaBY4VrG4nxn2GeEqX",
  "key34": "6524XLWo4wWSmriNBXMHNoJoM9ATAgqGM5Nmqrya4ZbDtabGvE1atHAmqCu465wQrBrak5NhJXexSszHAdfJXeH4",
  "key35": "3qBaXouFjDiw6YdiYezPayG44YfPSZeAgjoRfheFapivBLBqBZz8YGVYm9Nc6n1VLtGxyuYFziLVs71McBchk4RV",
  "key36": "5ytWb68RR4eDye2TEjQvLuhnx8rV9BZLJzHFiygFif4MZ4Gft34wmWhpDjhfJh78R577J3S5yXn2hWekLEfdzALx",
  "key37": "3eYCukbS6kUXx2KpCB7twpts3otWUH1YZsA4tEmoN8Faeo6giRxg5J3CiQjv8kpnQsatcGBKNJqHyPSmQNjXjC4c",
  "key38": "hsgVTKKwMx8QPmN4DUvRz7KjFfUEjmGoQu78uQMosCotg62tamruWNf1wgPSFvvCe4BPBNpGZxh4ZudH39ngmNZ",
  "key39": "4cLze2PxactXJzJFQq6yH9A4WoExMtmu4qHMM62fFThb4cL1J8LBxvpa5kxDEWLU8uJubdQbTvb63aG44JRAwSwM"
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
