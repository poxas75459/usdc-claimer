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
    "4dZoHBSss9GpCi6YyQ2T625Tuu7JFX8vM1UR3skm9pi9kBmjLePtwnjGTv3at1rLVQtLeeJ9Pph5saspcHMRmMr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zcLdeDTxD198gtYLCqzGysFVqUnjw37Lw1KQLbCDUrjFo6Eowcm3eJzUt3ErJp8hCmxhu2sjVYSkGC1uKVS1bgD",
  "key1": "2yPrbuHZ5uBSnmBGJsSSZhxkHi52SPcn8QhDtkhbrHEFdFRTRtxjffdivQd2CKaEw1Tpf8uHkaGWtfiSnhf7buWW",
  "key2": "23JVc6Nn8M46cmBX2WwhAZm7kjFVi1bvoWAZcWvXxtgQxMLzf2V6Nb82EEiaTJ3PWAkDcGet3omaQJKwrS4aUzHG",
  "key3": "4JmWL2cCcVNibn2ane9P5x7te7wzPNDvQvateGQfJETGoUj2UM51wvCRmE5kpZKNvA8qGqGWW8QhLyN3nBeRJSB",
  "key4": "F6P3jQi3pkJVe5ywdqVnoXqiynRhQ4kNUu61yQXW55A9HAmiRCve2ZcpSxKcmAkiMTGNBEXKxz4Wpr94NePZvmg",
  "key5": "2YvwDzDVvQN46KLKEmBQGprYZb5YePxRVTjWwGyCTBHk53odNHrQdrQk82sjCC9xCKTezTMnnnUkLvSqPBs1KKQz",
  "key6": "4Z9mAcmMijTubkuyZEbZECGeV8KTFbuiJ8NPAN3EAGYmWh67gdBZxPj3RLPUtRymdMxomzFNwzF8cnKK2v8NhdLT",
  "key7": "3oCxef4TzJq3TQpbE4ywpP2Vif3zKXDJ94ogPdXDwAFK7QnTyUoTNBkTyKVR733mak2dKvSudgFpnJbGVMPLtHRR",
  "key8": "K8y51gahrZ1raqKkKM4dHPA7zwUb2W3WBAUkFeChQBnHLk3cdxZpUjU74XCPMTQ2NVXUh6ri4rdsoF99XrUaZQm",
  "key9": "23ZYJBiEqPLjogofv9UEVV4FCjDPtPPHVUujgJtRNEA5TdNVi7AD4ou6XQLTw5CUfBKUbRBrkMvyZoBjAsd8T9g4",
  "key10": "3fSA32E23VXMd5JbSYgeffzBHz7UX42vxLF2w7qnsY9cdqJM49khDNw4ouqtEiEXRvoMXoJXWQVM1mR7bXjmZBgT",
  "key11": "46edqtcu5wNmEhGxQKWuzJtZWBGqucpakXjJFuXPuip73tPXSeKLwNPSKSWSAz2vWXWZSJ9aHQWrxj3EbzRwLig1",
  "key12": "7wEEAHSzaoJ7uT6MJHTEX69TxWi1aakQtDXLUQiCFbYbtQ8WhboBYL8xKFmgd1UeFgyrJivUc8gWKKXkyatFbFF",
  "key13": "3x58WKXbN11yB7ULAEJsUSEw7rHFcxMBZ87WMfrf5Hs79QmW86vCe4FrXqjKLd5LXa7e2Rm99BRqnFm4HZcZXKHt",
  "key14": "4qqNKZX5amTBff66zf7doyQLMjd1Qaz7nKKr9A8xLRhy8sXuJDpbJCQdKSpLGuKpFGj7K2v2R9qBfypGFiVH3f9A",
  "key15": "2pSGDnAkijoGpEdfPN8R8psq7nghFGmeUw1n7rX5KGof9fGTbtKAHFLnCQq8ErgHNV99kydoiFGtZnXYBZxu3EhQ",
  "key16": "5iDaavgDV8ma8nc6vb23hbEGuff3TsCVrFGFgXuP5yeDzE6WTpu9WgQrniPoESLEnuttWzw78BHcjsBmJ54AjJ8f",
  "key17": "3sxfumwr53Htvof732yDxd9JQkBjwSDaRrDxWEnE7gozReT5ueMJ3GVeddtC8yM9P3QAQVpMPnHqEw6FQkoB4ApA",
  "key18": "pSVXYiw392vQ6WSCTPbCbeMZyDhn9DhV4rY489TBEfk8HxSEMR3iZZ4TCoZXQEtwFEJ7XRcpapEXBY6frGwF22x",
  "key19": "4yFcJPjHrMgACaCuya84z9UY67edvjiVe2HYHKWjU3wj74CgyzMamovKukyT8hw5tBpLYDnoit9x1Hht6HDMMuVx",
  "key20": "5D66quQEAfdufStAGYhc2zuLvrcYALndDiV6bBS7XzQyZ6NG1RX6vfaAhNQnifYqYLf4UZu5yALfMFF8yTcm8iKt",
  "key21": "HjKXtDPGbfP3Qj7j31euD4qbgCL8L1dEoSFH2gEiNCKmWHpCHFbP94uAQAPhNHpuw98ynkWnrVkapAhmRCVo4xQ",
  "key22": "4H6FXqvcrPihJdRgmQEjYCQjg8auWj53wRjq9MDUNETxqKEa8nSstZVEThnNFv1m96feGwG2pT3jQPywuEXMDwWj",
  "key23": "5pd3TCtDwKY5pcA2HHQuG6AmVqLcarXPYkAh4779o8NW6MRpe37c1acAVTP6cwQ8PuLzeQspA6ZnBNvTDPwdCWK2",
  "key24": "bX7kcSEcsmYEUh3KiwXgKcV5ZaNy4x4Pj1P1FKnpQU4Tk7ULjnQ6CX9M8TwEWi8mJMix6HizbR9Cc7f1ofm7Ypu",
  "key25": "T1ojrXogDLN3xE5MLFiPaKKe8ABMjmuvAbCgRwfjCqbNNFRQrermG7ztiy2Seodtei3Uro4obGPvvBS3rSK5UKy",
  "key26": "5yDKcqvmxYH7xsoA2qeX61xgH72VQjS1y6kmtCqfZ314mrNiVxA9zeouKi3dGGVAYADN1PG7d8zRJ2d2xwu5VDYn",
  "key27": "4BFUNQwaPJTVd5uaiqjZDWN3iroszLcDsgcwcA76QTt6iTbxdEN2VFEWYn8pRNmAspQMs5UhN7686bsZ4gvE9U7f",
  "key28": "3tm1kSyuXEHBHGspSYcFs2yQiRQBrE5XwCfbANNhPy4vYmoG4EZzP8fxc7W5QqcxJt8HyLgNemWyHdCu4dQW1ryF",
  "key29": "5KQiPMNQ635EthTJjUwcENW6qg1NuVrBCmPKAVBMJLJ2EgyTCnW2fc5iRPtVJi21fNAwRipJ9dTAR5EztcHnQSaJ",
  "key30": "3cpp2iK1cWfRqjvbbyStLLmTfmcJmnPRs1225YjDgTkXyH2B8jShHW1h3g7tdAKe6YVbsqkLtYUvsSwCz53vfkhn",
  "key31": "4eDjCgM36AnK82tFmxax7xvQr98cB4tHbkectv1HPuv44TmsZekV68edVtk2DxGfPoGbUw3VMiq1pVCgcYUh9HTU",
  "key32": "2vH27UY256JeHT2gS9RLjRUhYGSbDGZwNAm3Ek2iHKkxLTcK75epLwwzFZ2XZ6MnghXnTaR6BHMcWEpZKkFh95Ty",
  "key33": "42Ao5K7jjGLX7AqDJhqZo8kWUpwc7SV7cE1agzHSDgaqt5TqnWYsis3hVFwnyG8zmGB4cVYet32xh4LVEZ4Zcut1",
  "key34": "4dVoXJ2tkBU62JKsNqTvCajQ9p6YWwg8WP55yr1FNxNkB3WJiiwzcnrgfVBaYgvWa4UvQ3xeuRAR4HH5cWMFK1sr",
  "key35": "5JCR92qJ3ypmGNRdnt32hXE1Axh5MMEoTEpLr9LfRpMb4bG7vsEHHPvuWzYexgWRqGhGU2pJaK7Wwvrr5wMKJpzB",
  "key36": "63gay1BbDufLyVQpccZxVPVDjH8RMqshodtAT1EEo7DGxiNQ777jorMJSXWRfoxYisggxDVVvK1dJir4srafWz78",
  "key37": "2QFvxdu22ipy8WGyeThLPZbkZwGwZfepp6svz4gCnuGBECzoG6g9eV933wdZ1zPdgbLcPaAFkdk6RpYpWbueKtN7",
  "key38": "46LLHzD1cDnU19KpNmFJ7hnD9bwJQq8Mx5cRDksyv1yfpuyuHbjGwhZ6BotoM1bzERLdyCyQDfmfvNkmydqrRaXs",
  "key39": "3Cyyjf6LAUi9ZaVN2DR1y6yd3ywLDbd5bfurbsqBiZPQeevRFgXv2LTJdz7fdCscPfdmRpqWJ5bxGbneR4G7A1Lu"
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
