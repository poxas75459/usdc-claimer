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
    "26SgbgWzCBpxWn3CbM2SoRyGjD2HKUNJUhwtf72hJHnz5PEyZndakuJWzAogACQ3cGPyGg2JM9gRiVpL73A6mVJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ydeyLt4kBQLNJtq1kcvPUK8pZsvSVPfzq7FRtknHXmSty3NacSPuUEjjSnUNih46hg9zbXRnAQ2FcXiFzJfk86k",
  "key1": "5yJw9dC9jqcUpp7UiNrYJG3dW7LRZHzEReQEFdvpRC1niHp8mceyoTUwYiHPWacv1QUzPS1pck6NMRJVjYYebZtP",
  "key2": "5C3MXYAZtRXFC4teiDyBSCvyFdXK2tCRcxxmyvHS7pt5eeMNRYBkbobwuHULDZbQ9ZZmBcawiFxL4mXHoMWQcQq1",
  "key3": "7ovHQtaT1tsQJBiujd5mtqEEzXBLibd72xGzQwGT5J1BaLnsxAyPtWGzzjUxkHXvBfc4qtWc7GRxomF1gsMp4jQ",
  "key4": "2pbyzbHu6pvox258zvZgetDmewBYsgzVbi36L5NLt5hrSRbwKcxnUv8Cz13b6QQ7WoD8Dcx26rsUA5dHjwwmWGUp",
  "key5": "2HFiNtrJVgPdimUSrQmQZ87yKbnqEWeBCwLRgSLmhuQZe5kgDgeUGCNbcoaesA2FUpoAyViZioVBM5RbyhwEZ4Le",
  "key6": "3ZbgicFgYzFzo6wkTDwmNZUpjZq4X1R21FqKbMq3USW2y7YWi9Uo5mdZvNvciYV4u1gxRF8HkRJRJJYEMX1aJkPu",
  "key7": "5So7tVB7vRMt9sfuQCSPWTEKPUd13FndS3ieXQ2F5if9dmuk6kXNXnqtYPHtGEV4W2gU1LZLEv4yzdegMqGBUPAZ",
  "key8": "4iw91xpFDPr2kQ2kywMR7D2zcABJpanxj9rZnj4Uoq9FxW17kBmbg6NiGwrDXDW5rxooKuLEoUtdfSiQAWsipa4V",
  "key9": "63uCuoUVUbqMGo7MVUc45UN43babbcBcXNNKatmqHXsgEGWzhcjAmXCNtigMZXbw1pq988EUsNnurGM5W51AoBqU",
  "key10": "X3n12X4kgepLutV2W9yshbVNzbfA5qNcsGEDSAyMNZBM5utae56vCW8sXxujdV5McAjCqJmpibtMED2KPaNf8ro",
  "key11": "wK2hxed4EFEZCcWuS9EG9yAdfzrowz4RftVUdJj3nYokMTwjWPxEMeMQEj3inVu2M6k6KWbCeqqfpMhVfWy5ByZ",
  "key12": "2do6JpQYwh7gC5dgCZJQRCLPGLK6uznYCFS79q9JG5uArM4znP6PLJeAMhRx4fRerVhF4zkKaBA3X7ZianS2LQD",
  "key13": "4c8i7BstjkZLkAVz9WZJQRTLUAZdW4cGr5UNNLhH4rHgMNXrJ9oeKjYNFuiqJe8Nqpjw4HFCjihuQxyQTqGpuTKq",
  "key14": "2vRWDdgDp1XW4dG82nG5WpbSbLZ6X4AEkHcZZ4cuqfqtqQwbxjojGjmnTGAPqGrEMsgZrPJEk8FgJbHvEBXh35Vm",
  "key15": "4ArpwxXxRTAniT2LchbBgXKEaT5BBwjUkK9CZpziTs1T4ocN3N1WELktDZCKa6dE7xvZ7twetcoqQU41uxVKKDGF",
  "key16": "66R44obSzwmpRCqWNgsmAxsNwCSXpqwNiGbNVeh6eb1edPc1bcx1qFXZtUPv4HV4asrf4k555Hmr95zzaTsJWUWo",
  "key17": "dmyVsKcwnz3jpVnR1197ButSRXYgebArzGoLRWAQxrjma4yaq5Q4HKrrY8tvLvhJDZD38NDYQYDuyUio8jnZFjS",
  "key18": "4MRgGXKGKJp74iahWkeMk8qBBU1zSWNRU7m64RU2WSKH6bXohUstk1fB2JHq7W5TbN2mRYDnXaFKG1HM9pSgWVJH",
  "key19": "g5AsRmFgEhx2YKQErNGRS9N9uoBTWBb1iUcE3YbsaLvKaxMA95SKKhkoLNc7irvgy2euhtVABPFsRWyhqywV7os",
  "key20": "22tLjJmSfLSb6UpRHd5jkNBxSYh9iky6YtHb8Z2QvQDXveXDAo44cg5br9FByZxNRKujmPD5KxjYFiCMWASmCPAs",
  "key21": "2dS6YyYCF3kww1oaJofsjYBmzfNKBwSpzrUDWUyMLqofPSvNBnSdSzgAaWXRcGQg77Fyqusxc2GHWNUdhXwR6eWV",
  "key22": "2ZsLn9snyfBgxbxCKuhp8StY1L5dmaBPQvf3ZDRxFL6bgApcCmVHyv3cyjCN7dbGR3pad4Dn927RDJAWuu9e1adR",
  "key23": "4dC7dwJTWVXW2erVEVp7sj8fRU4pShBjZDeFRihBqG6dknCcrj1Hh3VoaXSgL14fbCdd3Nkhzhrp8cXUDDajeoND",
  "key24": "5AtWkphWefWSqptpG7XDMceqLondewGENx7D9SzBbYGmR75MwdnAPGZMwjTETCXjJsJBPj4M9vXWzghRPehmyYWY",
  "key25": "2yBDvRoCgHFWriE4qWpebHQaHtit6MPY43X3t21xTJjhrqgfQ5zsyfEeD5ycgwnN1zyB4FXToGFkvEBrhEYRAty",
  "key26": "nwTcKxQYn37tfUGBFMaRnYuKK7cBGPLa2BUbzX6813K9SwntVBYmgPZ2TgXRSZ7UjbfHJf1xwRFcqRxns75UMJo",
  "key27": "3NURBQuNUMAZ9QfuA43893wDr1bx41aayz3cEkXqwShEDKxZ3RvszBN7T5NRnrpcPNdMe7h34ziryNo8duJ7GZg3",
  "key28": "5iCi8h2KLXb36GBDZWk41MRBYtRTmu4F2FV4GjzSns8Po7BeSwBiy7GG1eG2GwiNKfCf86iAr87Fx8ygBa1yQo9D",
  "key29": "gm5QcuSaVf7y3XmjqUGtBz9PF57P6DEg2jH2rcVv1ijGB4FhLoAGcGQxffrziJ5spmMr4VcDaVPJ4yGGLUXsjoP",
  "key30": "3SnFM8hmhocRvaTfm2XMbh3yA1pHvuQ1DfCdBzEEtcMgKAuPCJ19X7nB9o4qSb5XgqM3wUwvkPH6qiNYRerLTpM6",
  "key31": "29WLMPZuxbLLMhMSoDHQ11HivAKQBSFXf76L3HhAGc1uiiySxVbwZ1Rvpw6mQeLzTpVo66WNCvuy5E2sd1Vtr8Sq",
  "key32": "2SuADNjgzjBiAGNNGds1PJsnVeTTpkwHwjnAAXUYB7psVQbdXMzXcSr2ZRTCCfJy1xNCUS8H2yrxsXfHXGoxfMSv",
  "key33": "CvkbRzeeNvED2a1rt7PSQtb8mem4dWo6eYh1N8EXihn5oKr4rNRVMPJQSAdDSYBApKJeLk97oUxt11CidoCq8vu",
  "key34": "45SkoeoJvxLE49rFmcGNQbMrB6kPu1gHFo8KVN8fdTQ9SXxH16d2DexmgqEQWehmLF7fTMB4dpFJ9xfws5rKiFse",
  "key35": "s4Yq9Zs2GkmJVFZFXmWV86at3WNZWs44tvRSdYNGuSUDkzBLJb4L9cUMe8wcm89JjUL6Z5pCWujS2BYribmpXdJ",
  "key36": "4nwuXu7r2ympZFx3q75oFMxcvcPeZAaVaNG9TSLS9ZeWqBnakbECQJaN6kbv8PHkrtfPPUXk12HskCcgfzvoP999",
  "key37": "633u8jUTnoeCuKvDKw3SqjhQCyqdUd4Q9AJGernwLb637Eeei6DHcecKpDBtmRJqdywtwfc4LyGyRVLT6fcW3Yjq",
  "key38": "3S6GPr8NS56UVMhGgd2DSV3dp33Fb1QsYU5bfiR24v6HwbmRe5Lai98hzwr8uvBz5eCLRDPdH1Gn4LUTFGqn1hCv",
  "key39": "4TDG3yHmhFtKYY7veKyypQT9hGQCbuGteNj7z6ukDSR1GLGeCYdv14AeekusxXk49szQjnGZTTxCvHNZ8CRTVwHu",
  "key40": "4eZkPDSHcXwBcW5SQGgc2kaf2EAqhCtoAYZLwYZecp8DvEZQKX67LxohU4AHP9HAMMcvXD2Yt8tWZvjLinSqQuWh",
  "key41": "2PmVfVc2dmJerhKr3SrDKeuJNe9fF93dvWQMY51UKvGtiyCgBJqXKGVZ7HKZEnsHhxxQagRWerDRFEJMxfNdZqcQ",
  "key42": "4C43FEBQoh4A6pA57eR9gptfLSmMUARUVFLhmqFdojDwAjuL7TbA46vvrwSomU6JogCrNqikEnHy9zGMK5s8gxks",
  "key43": "a6soqg12dkEkeFaCZdNhhzPGPB9Qy19YcZzdbJWVnhX9sfHmUSFDzPXWFF6zPRaWS7cAPw15fciDqZ5ks4Y2SJs",
  "key44": "Bgo8SyD8Cx4j5JJ8ZYEyUE8mjnZ1jDu4K1NNLANkgNx8tV4GpkLEc4G3FnbD8jNE6ajaGTNFvsyF2J4PT9xdixJ",
  "key45": "3FaAYy1PbwmR18Dk1wpVPVBPV3cWm9MSQvbzAgvbQ9SbcJ3a6uD4pyYtwQMREXDp45ggpg9adF9fhmjQQkFzuCyN",
  "key46": "4T6bWeot7tvcJiH1seHEQUB2VRBAex99BESD94jNcFphnXvMU9fMGqChK67jXcL9DVXuc6jvKDeqS93ukEG57UPK",
  "key47": "QhiLf2Cyqa4nWRMkzWVCE77nrA9g3ffkbZz8qocjKxpSsSVbBJerd4b8A9QJDsfJ6hEAR6AgJSadkNaZ9ngsfTe",
  "key48": "3MBP1b83LVQTfBpGx1rJfLU57gesBgPLuG9gq3RCACrk3Rsdx9cGTfhwJPoYmpRth3CtzFodenzFJEH78Rs1s6t2",
  "key49": "4DWnWkW97ktkH8ADNzUByVtX3Z4hi6YnDWhjupQqWAxcMmd7ckJaYYQqLtezgnHHZF83YPTEMchhxB6LPKVWcfSy"
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
