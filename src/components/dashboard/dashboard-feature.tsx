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
    "5rqJBF1nJWukygTdKSXKAyfYeCBPfw54d6RMWYXdyvRmVYMGTnPSbkDmufFciLrcj67FRK5UB6AmJKqTG5dkHzn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BC1j64savSSV4p3NjHpaVJAEyRsHaFsTovfRnTeak4Hu6w2t7Vv1MhLgv5erSUckK2KKoX4sn2Rp4iPaWvCjoFF",
  "key1": "6WviKqjkqjcbXaqBQhUeVa9XS2YcSX71RLTt4vAGSHW2c7ZcRREpYWgK1oH47sWRBaa5VjdVnhksQrYzZkNN5jR",
  "key2": "4yck3M3e7SHkAe94qrT1f62NuRkcj5DKtiT2SRsg6Vu1nRbYbPhmLL13MtNfDecqLmcoGDYyTZRWSR5LD8h1HEYs",
  "key3": "3y2uzFJF8YXfCkuyhkvVeF19kF2mugEtjUJ9A93uWk5yC9n2HxHLUgwaCDuywVJTy552y1QE8gAs5uLWwjoMDDgx",
  "key4": "4H7BhemKFQS8k4B7YWxYueRAWgoWiKhyQL2edHKiLJWU6pxi8Z7Dye4mmjTm2TYvqmKiXm9udVukbzjdqfgoojsy",
  "key5": "2c6dSBGRWbSCoN7R4sNypeqZ7rZhEycwJmxraEqc8TB1xm5zUDbrPb7zMstvfXFkAmVoiCoq7DbJU4BKGs3GpBVx",
  "key6": "jcNWXAjJMEnihUjU4dijJ5YAoTJk3y7M7ToKgGMhPGojbDP8Fzjr3kxCrAAYdkNLCLXaYXsf4JBUfKf7MUt8NYC",
  "key7": "Y4WU557f9xswpyMKuEcH8LE2KewJFzTzAw4jhWoSGFr9ohPLSqG4vonfsDq63DNKfEzVhwjLy6kt2zr4hFd4zB2",
  "key8": "LkZsdDqQ8GRiWYsr7Vk34Ma3LfCCtCzqvbw4hMce19CKXp9Tgt8vqJQ3z4CAnKTEg2v6H7aogoyw1HteshN5NJp",
  "key9": "5aZL1z5otE4vJMczYYFsQG3dtZTnwzFqV7WdYXA9HaM4CtUc2aEoqLbaVKP574rCQbhj2Zgd6X7p4WGaGwkJPhz4",
  "key10": "3KbHy9C4AE3xQpRjbAAekZk5ktHL6iGzmGvGVjBtAVjdS1U7ew2GdRVxUxGp7u5tkPnr56NoAbKaHyjMmmuxtJNR",
  "key11": "67PrwxkBwf66J4MNvf7fmLGsxzk3T6Ara3SwLSgtE3CVtS48y1zoJg3Zdy8AFkdcRVnYLT3pxnNibJDL6r7yCms1",
  "key12": "5AwPDmc7SuM4LauCb7UNTVp336EjUb27MD47pgTypy2tjTDGmYkdJnWpS9sz4xUxp1SgZ5EemU6YQRsNvYzkeEoE",
  "key13": "2FDLjukiZBGGWV3811XpAt9CNnybS9NEbgDg58EEJboVEXNpmNU2nzZBHsc7QqJtnvBXBxB76JKoWVdVZK1JTpFF",
  "key14": "52YwbQLxXPCBEtpwDi7vnPbtg8An1KcvVZ5fZwJWkzQGkbGA7pgXUjGXPGxzsBWQY4aRyTvBjJCzgbNq37nKqgB4",
  "key15": "KxCvaM86ENomiAFyxiRLrhUhGvGbY9JXNuHSgVQr1QeXhKCQLkgFHSzPQkf3RvnfzPsQUqK3vaJT4GTHUK3Zhh8",
  "key16": "4JNMUZmJf6gVsCfmnD4NmKNBT7sb1Kd7bDimPrSi1jb6DafoqNC2Wdc1L7Pc9pQZA3zF3vnknz1sVEa6bUn84DdX",
  "key17": "5mMLT6QwLrVaed9A9HLK2zxRjLNEwhyLk8awFn2coroXgxLB7QteVyierr23WuGvBF8CgCnsSkfvD8HEQiP1UbCN",
  "key18": "iJi4baX9kcu74b3xtXMMwxY5x588gfqqCfaXGvscww2UgbdWEeNLzK7xiNaVYcwho3R3PyK11qGXL1bGPdw3UCs",
  "key19": "2HQcAZTHa9f2uzcfLfWLPxT5ETdyysQyAPidxswagHzmhgfdbQrgb9zfoSWooqUy5g4qBSDjHU4is8zG4ZHMKPHq",
  "key20": "4WUAxvLQh3KEC1HhTgH2Qjim3uCvBxnCsgN9gxevrDR7c9KpDQhixgXKCAYW1nDit7yEwmiTEamCTpKtgW1WytrF",
  "key21": "4vwuUJQZfGYgeW3CKzNcLrRMiLzhSpaMYJSXjbXGDDjgrv53im7UTwkz4UUfUsiq3q4TyXwi9zjqYo75Q2NXzNHE",
  "key22": "5NLbJSUDQAdG3d4vGJtyDUqX3fZd6DzWxArrJSC5oDTDBRnzeKEQhuKEdft5SjFVEZdLadb2oXYdaNStVVvvJf7X",
  "key23": "4eC98aUAu2m1fTCQ9Lz2SiNBSc1P2wxQBsgbiMqgbqTF4E2PP3AknZPKrmrMYoTCeKiNVRpXwnG7jY4jh9LrJPtU",
  "key24": "D1X1fPWwT9PemxfZCUT48FU8Gvri4y8UCv18a1vHGYod4FVQQp85iCzag3DfaqsE9xS4NsB7Sr4E7xdsVa7nq68",
  "key25": "495nPwFXRn6FgaGrTc6uMfSmQiYds4HJij9LQuxpjNGKH8Zv693gtsshAwv1WkUEU5xMb9wt8fAhW7qRtX59U68w",
  "key26": "2MWddvCQCSD53RK4uu49ih3MViEAaZmMNfNThWqoRVJQ6LF3WDXcjGevPqdhzZWTw2gc5bPNydWuzw9Fh5n44MHm",
  "key27": "5pV3C8uhWXqCCtkFKzQxVqY176MUNVv4ARLtvRjwvy35HgDMxgGDwepJSFM7RDxS1nKfSnMw6zdgrruNG8iKKxg8",
  "key28": "2tLh6Fsg8m1conu21uqUD71P75j1wRbPJHLWcT2LYrBCptRrBmfMAvBqD7CRMeqLCh466kxLb49LvMXaBcjKFtW7",
  "key29": "56ovqp88kDfG4XJuk1Z6xEsPorWxBiqobTWRZ8wFHAoU3Cf6bxXRL6TNqmJDBWWgC1YWQRfP6HnvJVAzzVegrzCb",
  "key30": "2Pw5imNqWnD6eAi3tDbqnuXPaGiCWTiM1L9xkYzLvpNn2LFpwE3rmQJ4JKjuqkCkfvpGMkViCa2kbWuyL2dzCwRu",
  "key31": "5ocd7CbFeETMMsF7LeRf8ZNhuncR5SAY6YLEBtp4bBi687DN8oR3dNnvbCBZo3rxW5CXE6BsYDChfribDL88qbH5",
  "key32": "WZfhK7BGNLmoGkkZu4cS2qtqExW78RpqpS3c2fvc8Tka4vMKceix3QUNZ3vxJiPQ87DCApZ3cocACBg3ip1deL9",
  "key33": "gepdq7YhbD59J6P6v86Tks6AfMM1M3VktWxq9p8oqVjMCiYX9tsE4T5fsgpyGafNMHKbsHYhyUDGBcZxAQ25hNM",
  "key34": "2B7nudKuEpAZoFRDmxBX8uKRxQhhGsJW1JdKyLvmNSAXhrnScwMdMRxqCxwpeHXrLGmdhkbxh1fXQ5FrYSH418kN",
  "key35": "4xweaKMYhumRcGu556tyMwQREMEcNaBqckj5p3FXTap1A9ByXxFQpEVxoMe9PxBf3y3dGhCTujJv4q5Jrb7gaxcF",
  "key36": "35hKmGdXNuX67fYGF6i2MTfkqR7btUuSSNECPMWYtHsv857ijUyFrP51UCRFmTxPEzjaw5BNNJf7cgdzkG8HGfX8",
  "key37": "2uMcT5ofg6Ghmt9nPcrJqEJS9wWBDjwSmiD7115vaPbLCgjq28qqYn8xUD5cCxBhCsmAGD9wzetzsrYPvDYubuQ",
  "key38": "3LVZPcXYdCd7oU7cw54w1zSBFQWwFLhsGBRoiXBrMavESJ9ThZGWwbcpHBySfBJsGLH5kbBdbNvxpDMuqqFDFtch",
  "key39": "5t1q7PDjrV88MnBmZZ1SuCyt6ci85QHZYLPD6qFwv6K19uz4D7Yr4mP6CdRL8nn2gTDhbukTFDnnmKJ5SZG6MFQY",
  "key40": "5LgvL63CuhseMn2HT2xKT6ePmgD3bzJSnBo8DMuvtw5gkXtyEm7uE7PDzGuWztNbEnwP1fYkkpkZMRAJu1xgByqC",
  "key41": "4eF1Ep3TDkvdMxng4iwEYA7m4YByyKr3ZSMMRGA7Kw7F58wGfNKLk7odCKXo9W3b5AANhw3vq9xGzcs8oVYSfa5F",
  "key42": "4prMcGwdyujWyKPsJXjoDqkMRjfAgdMajNrJqtxG7xj7v1aoRr7KbDs4cu5fv7yNXeRHH43UmVgv2MWWWu4AjEFa",
  "key43": "5F9PWipyX1NYqP9cQEnnF44EAmzLX7AJ8YsjxyncwNde6MDx2b7EyZCCNuCY689eGqevhtUEkaoG92pZyagz9ZFg",
  "key44": "5cBUodmJWjLgq2U5ShfJNLiZ15UBJc1ACa2giyK51S7zxzNEMkXdmFCoBn3k1bCajXttTSgpo8raTKbVDgdoVKv1",
  "key45": "cD7QwLX6YV27CVRcQDMTVsVTnMJNJBDRv2kDmNLRL5FQPATrj3peK6GM4G7eQ2kXeyKFn6fQGfaJ28Xup2bveNB",
  "key46": "5Wv6HYz2bTMAa1NrQ47pkvjgBSAnoGTWGSVRmD3yLx8XtUxXMVpGubegN8G24MmiZVLFUxjEZSfXMNaEK8Lc98V6",
  "key47": "2pNqYM5GtQrYjjA7LidVhTKUUSgB38bBNbBQrWY3Wos1v4KYA1qie548Kzhzj8eZTyHde3uq2NzXRNofBjvsXLRD",
  "key48": "3MHjU3SYMwoAhqAQEzXXqXkZspFcS7Gu7h4obc8ZdR25DFvQeosSUeEDGwygsyyocPzXQxzAgzm9fzDau6D8p4c3"
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
