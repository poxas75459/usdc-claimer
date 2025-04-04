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
    "4KmBSzWYXRP7NDSzu2UKsayKcCb6ZkzU6GZFgUeGVmhfyUStLDvXhgdHBntXgTtCWhnVJjQpsbbKVKEEdjGo69YB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FycGqmsUaprJ54b5pzFbi3gpbVenzzs8rbqG21sG4gDk2n5fp3qWaHgUygJbJfsuVGMMkNTLvr1HpFx8AYdkKyd",
  "key1": "5LS7nDnvDGNGya3V9TWQMw8XvAnZMspUgnJST7zpghriP6DLaggLPndB6ZfQKuz6yuygFPoFywNyTsAshf3CR68w",
  "key2": "pM39FyxgUZQM8SVV29nuSPzXg9iUtXQNTBwmNfybzi3QKTvWZ7jG6N9QJ1baQAuzac2CGB8uWwAAerGyFR81wD3",
  "key3": "KbfUJTvszZnmGRn5B15hVau7ADCiUkqHce7umqA9dEYvHiwXz1mUc3fxxhmvsRvJ2tyTs5XX2MXsZD7XetegBHk",
  "key4": "5pnBDsfNBfZJ9SwonAkWCaw9mThCUVA3UQtdMXM7V95tLyUQ9Qm4Efa5Lk3uEmh52UW965zGB6vJ6Sb1CXSW3cCs",
  "key5": "2a4tkZn6Y85usmSUmFCLoDr8576FkHU3UGPte3UoiJ5hVUvh4YJWKZhPRXfhhC7wM2v8SXtG6KAbxJCA334oH5gT",
  "key6": "4vogrZaqWChUdNc3SRZ5N5xdnzV1TZbJqcP5urBLDSjC2c3co8MAVz6VDZsXS1wQJzcEaqyaJtw6BuL4un4zoWg",
  "key7": "Swsx8YbDfLqzEgM3eqMmTCNePTjCuZV7MprdMzPtMJUD9KJV6rr74AiaryRHppba1UNeeGw6owHkZash6X2Dbb4",
  "key8": "4v9upBZerSr6yrX9eFZAwgVwK7bj7YhydF2NDSX9LbS8zXTv2toM7juKwPzZevHme8rkmnt6JPBkuteYZ33vUjpj",
  "key9": "DeDQASLtvJmDKtPuAF7raLw6CgjL2Rv5cMjU1eAuKZ7rBjbVqwqTuFboW99BTr9Zvr9FLtPXKPa9n4LTcr6Pyn9",
  "key10": "4MRrPTaqTyH7QPRv5JRfVm6Ttw8VUSu1s8PoFkHmHkjJbjHKQX9eMxCRN1rEPiuSfriw3jC6UDvV9yygBK5hT8pV",
  "key11": "2LFHMH9hmzjww1G6hrjsKmX8H9Ti5RmaM1yoW2FpofzhLE7vVcrbHoBVxrwuXvJBqQ25sZgRCPD2N1dNh87B5WaK",
  "key12": "3uS53PaRrVPGjXoNRDV7r6RhsFcja8ZfzsStkWgPC9QxmrNcnEfZAGMpNpPdwZQiAzLYXCLtz9JkyoTWbvaKDA8p",
  "key13": "5jJDEmmBAH3ERsffT45YQTgzCcGn4awJKcDMKQQmaf9Z8pY4ajnBg3TcWjasBf3MukXg5QurFZY1UEXYKZzxRpxA",
  "key14": "5qjMh28hoUtLA2DSh1jkgEZdr1Ls94A1BS7b9d5h3KJXKmsphxAFy6tPbj4RCjGcSwDwfhGBgqTesdfkBnPAbaoV",
  "key15": "3Kf3NkeKorr37Kaggy3QjDY1fbFE2tUusKrFWu7jhEzVmust29ekg1dCX81V4GGJZdhRPZWURUyYSkhArTyyaCs1",
  "key16": "47yJYGN28DrM8i4iom3pyP5jcfSjYiv1oFbeSTVwrGYUMLRzDkvWBENnuHqKAauDxAJYqW9BHryo2c8grCSiANnv",
  "key17": "4bzYeUFL5zRedGjb3UEbboUefy1tnBJgAwTpdCLgkMTk14EeyA9XUP1E9vVyx4xNCnHh57NPxR3cyqffL57JjwNm",
  "key18": "3hD95su7nGE5zjcDmJAJRhpjp6duRyw7UFeyiU9E6nwPzXCvSEgQTojbExM5EFNZaWv6PDzdN4WQsFj9CrpmwMgP",
  "key19": "42ChiinLy3uHHjSQXsKXV5m66cP2vHofKQfrgxgkScnZaFtZmtgYZUBre1PGUsmxK9gm61geKyjgaHMYp7yvG4po",
  "key20": "4xvUKpS8gQvCAdQaYVDYBJKR6z1PvSiWi9HJ1nu43QaVXfU2x9cMxqjDTKQ7rmP6ZQryhLL365hXWfmNTmYxybD1",
  "key21": "63ZZGNFDydG8xbnnCa3MMXvbzqXgQEQUgAoyNCKocpTiHeBYXkK9nFhtTB5CK9tob5PnYnufRPFPWtb6XK9JSBVw",
  "key22": "5kenTe5VphE6qcKG9sr7wAnfkc5Kd78hpgw5B3Epr2LYeqHK5hvc2g4ZcuoYLzWTE2J5cCw6ubJzVvFJ3i7uEqNh",
  "key23": "3RVYgLRiv5T1KiiQTf9ivzRtScRCjKBj4cwLfGdzpuz1HFnYbTMWhSiP1sfKqCA1etoarZxWLwmCmpDuN3Vimx2L",
  "key24": "4n5kBstf3Fzd3ZxBTquXgYub7DgrfNQV4wrRRd69R1MeQMy53tGcr4HPuuUe69oD42BsCGmguk6MaNd8jTtVbzhS",
  "key25": "235ST2txFYnxNndsoJL7giZJNf5P5y3DWAgx9iFMvf7Sa4sxU7TnF4yyEgYEXcaGtdB5x1iqJupEkSe9AX5a8Wo8",
  "key26": "4Z2XgWG9ZEvs1puJiB7sKxryEF3vP8uF9uaTLZt9tZM7b2eSezUsNakyPAmNdyzzjdiJ2xL6JvdBmP1bwQ86wb2y",
  "key27": "YxDaRdCfvGvDBns42978aNJiaBYWoV3WCJfzrVZxDRezPCLJqQciqc4agWuJVPo4FdLtF3RZ3EZzXfEnWaNiJf6",
  "key28": "5tyBvR6Afuakt9M11zekBYgJGkAN8hCJk5eXAXX33MPsMZSJPg56VJq2rQeWi4CYttbVqqKDxU6rMvap3ToBi36D",
  "key29": "4iUYmru4qsvxm6HZbK8n1TTKjywbiZiSfEFkgLBzwwtMYpj1dDcpfQvS4mCBbBeV5EaMEVjigAGPPkiJXUx719R",
  "key30": "61H47Ra55LhXa9iwfdpZHJcpJuwkMLf7tCuYPepkNegsVimTuhmoCAf831mh1sB9DT34rXMqyEqzHNxDjKwJhrmg",
  "key31": "5grKpK6MpvjQPy1ccJiGo2jGUUvDLbWvtREhErNNYqKLKwz2Gtytuwe9Dk9uxsr3gaA3SGrabraCdvmQRD6HwLMA",
  "key32": "5jXdn6NzmKfSm7zyAzo7Qdx18uK1CgwHSeRnADZZCVPU2WU4sLsjWigDpT7wM3uvadpGQdy8jCSUWgyiNNTKdmVe",
  "key33": "5V2eAMD9tfAced2NRqi6VypfzkLSqDVKWv8rNEt4vi9rBPch5kNvBTqZGiLK1xugu6v8g5vnAcMfMWG8oEnAbjq1",
  "key34": "3c4VRjP5M77HdQJmn8L7t7MVFMYhNyBYcwt8jnWQK3YxZsZDubJY1kaKE4eAUvpNaf3D13AxFXB1mSPJp7c8RsC2",
  "key35": "2jyPhbXV6wxWUBLtByugeW9hQc54YJzAxHuVNdTaij41gVDzeVMcipMbuUQPxPUQjYkjmdcbM3kbFWAaYK3fRsxd",
  "key36": "5eHQbLupjtUrghwtL8RfYW8J772itmWn16hUchMKxzkWRBTpXZUzFE8CqwHvptwUJgsGXimeP5ZuJSLHwjG84bey",
  "key37": "53dsXxHwRm5ju991QKeKHFR3NWhxjb6hEKKHVjU9uGhuNMi3uge2nCYANpiZycweRmo2E3ahXREfzKd7Vs3t7TYJ"
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
