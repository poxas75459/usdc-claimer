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
    "3NznPcic8renxq43Z9XcPJ4zx9LaKiviuPNW8v4isxd7yh9GxfYQKmqk1K73hi62cwrZpdhvbHzzGWZ3N1cwM8Nx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D8iQn8rYhjWbJv5bSjoQYe4aY6echzgzMHYVD1eRexx7rgxNrCEuWbKxv9bdyJf5TBc2Wa2GruHmqoYkRZ6zFBJ",
  "key1": "4ZUcjaatTEgGoZTXHD9r2YAjRhoWcZ94Hgi23DPF6aCG5ZAnkP4dnNE5ap9kJYCXQ2qeSC8TvcqyXTZhTPGwcFKA",
  "key2": "2mvVjiQcenYUKoqG3TVi4uajgkHWqQN6Aj3vNWMw6eHxMGmY5RbV92GBwwhny5ywzLvQTn2pGbSwMHUN5PQ8Rr6u",
  "key3": "5HYN4sbwLJpXxnfEM5zxLMbRpgCEX32Qh8xjv32r4h1rD6SpCCGhATUgbUPUKqRusmsduRzVdXkhGkEJvSCyMDWo",
  "key4": "5e1nKufdLgwExBWNP7Wfq8iwWQyWchAbyGkE9T7u7eVXtgZnEvUm3RmJrkyBLkFxkEYwkahJ7uE5k5EH5TbqGj9J",
  "key5": "2xsui4x3HH5MgXMXiJV82S9fCMm8EFtBFDZYHy3m32RzBjXajdSecJRo4ke8bptC6dB3V7LGS7huwpYc2nczbZ3B",
  "key6": "WPUV8KdsaKaaoAJ6hHVqePn8ZboJEM87Zk1CxaKdg6zTxDpVtAvVm5G25bxogFarqrTXQJ6fhiYgCARHkqKHDXo",
  "key7": "6evFx3pETZx28HWxkpViibFHPdGbd6wEZtBfeCfxcs3TVJYnfRQfMxyedJD4r3jmex2V8q4BH2GAmedpm1cHHU5",
  "key8": "3gceVW9zbmtFdiVriaWhQEtEM28yKLSUCoAnMVspuu9fqr29PXe5pNcGbWbgZrHELphjSMhhr7gq9sz4M62evGGK",
  "key9": "3RWR1saaSCcSpxzjKWiJdVCbdN5ZfWvK3oMUHVAMeC2HTKoKZUn6LYEgUiEPAM8o3uR4h3aw7kDPXz6jDV1mmrHJ",
  "key10": "4rhv97o1dVY7SCYY2XGtCkK5gr8dQLHKmBCQ586zjkYHHi98dpvLaVAJ9sQPE3JR738PM8s6c71tuomUcJ9RHFqV",
  "key11": "3FaZ7juwX9or5LmLi8L5ZdaSyVGKJ3UT8QvbgFobMTMMU4TPR5AErXUVmfdUE1oH2rAibm2cz77djVWLyS2ZXFAi",
  "key12": "5T6HJKuDWA7t24yCBKfiYh7hSC7ezpqAzZE9vpcPvhRtnfyTXSqeXMP72xcC17URznQftEdhEBDHMXCRTZ2AhngM",
  "key13": "3kuYEhAJrNu7BiQ1PwApETZj1hLBmLZFBsQ1s5RcPJ2RokHTNMhP2hDV7UkKb5cUgvJLQhdxjso7vR5W7oZjHS47",
  "key14": "5or4ovAHSe53ykCuW1zb4tkcLP7vCw2b2FeKZXnGZjrTcdBE91G3U9zZPo9sdHt1hv7Ukw5HPirU6kP6ZQBMvDMw",
  "key15": "5ts7UxPFKgTzN2xJyDGDPFJnpaxa1iguvbtieoMQTdg9GmDnAsoYfFLscXjhPTTQfqSnZcKT2TRed7j8gJD9sAcv",
  "key16": "4GjMcgap6mVLiQh6KABbgDjt2LTwwrgvprpRo9mQ9RkbJsrmibU11fySYFHVg4KnSjkTs6EcCczCNk6ito6pc8Vz",
  "key17": "3uSKA8p4iyS5vwqEuduFTBWTw1MxKMVVVeVeKWdiMDnQhZM1PRcxSwvFXGUmh9AtZZJLq5ghim6VTGN9rUkNMzwZ",
  "key18": "4RxmPyR8TDHrmV8a35JYnnuNuBbcEiSTquEv8HdxjGsbGXjnpEPhtQSRvoaE9aYSfux2CJ76DJGjmXP9Q3gwe1nK",
  "key19": "2GXHskZ3nXFVZKZnPLqfDThkNUjMqmvT84GNc7Zqyt9NTAkaeTEWCkFjRqnmwnb4XP8c1meAQ7gkZSiYDJdtU4G5",
  "key20": "5Q9awFAoshp73LasgeJjB8LheCpC3oDSQLRzZhVYuQFX4U5q6kDhvwGLXEWiXDduacnwLBiDFDGHpuS78GKCgBvM",
  "key21": "6aDTvcx1iynjtHcdSn85EQ9WeaqhaMTTGZ3omRajMCGxumZhsKCYLw4JWYzgXoseSSZ2o28uuT7Kd3X11dbdsjw",
  "key22": "n7KKDrS16fm4p5Hf7FpyrkRyqsE5touJHPeh1wofRgCRtiXVTaRbZHon6XiStNGU9JGpgV9z1vHzUzWpgwX5Dnm",
  "key23": "3mGqiiM6J3knDXfd9HFvHrqvHQAB6TLMCZ9prXdDhzdQZsUn6wdkd6EqHFdyxiGugvrjJxVDbeJEycnbFitKoN2j",
  "key24": "3XTGr8Rcr9JHDGhbZnRih5nZbbtj2oHF97LB8ViXVAj1FfAD8nQabJevk7McJ9Qz2ZPDKrZ2LdtZHx862t2mDwgG",
  "key25": "qBo26L8sTqm4sqcDvQaW72Gx4QKBT1hKwpH54ikMGfmuac2yckXC1MbYD3tYuwCc4nRr8EEp1ah1Z3pMUd1MRZE",
  "key26": "3wKLC3fxifhsCTfm2sarkbSmabGz4EH9N68nsoP1SNGC8GSEydVXhZApkiQgjMWYYDMRPtCyoCHyRJSj9C6e97Be",
  "key27": "3WswgrgDuYXHm2TGeKtFdeGccGX2k2bsSFCw2bpPRgBMinG8W4AfEvLkG7QhJmdBTWu63yAyLntLSJuh7cVn4CDw",
  "key28": "4dxdxBc9PaJn4LPy8dEcY8cSPEAw1nur9SfXuL3kHCZS8xyu2CvLkG9fsQEWv2gAsEwrDjUqxJ4shcWZrZJfHdyx",
  "key29": "5qD2BxmPwH3LctER3nr3p5EDoUzGsGV1tntoiQgGYBLyim42fY5J64mLJrUu35dfo3sArKVFoXBJrynU2tdyTuNd",
  "key30": "4NvTHKaCULJxhQagv4jL94EVJGcmCRZmW8MVBqVzHxShZd2daSY9FNfS8ZrQbJaLc3JjTqjQ2PPdifDKXTUPfsDY",
  "key31": "vAhYZGujxn5B48EPqFSZfnfjDjeMNMYmMQu2TnhNCy2yMh6AcuwmMp8ZM6AYXTq4WxBaMkhtRNSxqMvc49QyP2y",
  "key32": "3Rj96BzanphVxAE8nxaTSKcqHHcrToBnvQ9RTuDUiTNAsQNmPp8rmtqeDTK6cQYHSuUawmWyCseChvEXQ3aCDAia",
  "key33": "3LPucz681iwUo3J7X4AJiKCYiB7b47RYVDnSgNcZjskhvgMa13QJky85oo65yk1AUDMaaJz2ToFTf5pMoqLHPgvA",
  "key34": "2WmHXE3Vg6ozHtPKTjPTGC1Qf3CEXqmoFV1saReauTaxnd22amCiPfMU8jpnvqh5VMDxKVfCW2MVhSduvU1qzxWm",
  "key35": "2aftvCXzbgN5Zjg31BgvTCnLYCqux5emaz7wBaDy4DpDvQ4mALgskcnJr7gMczKia6M4cR3wi96F6QBnQ74X76gQ",
  "key36": "3zaxN8Dvhmw81NzmCYzt4KuRJ5wT5FWEQYUSziqn9r8bbmuRrfUrkhQmELKobfXkzqRZNbo61e9n1jcbQ9uKZTBF",
  "key37": "2bFNqZKmfAXJSg4V2ojYZJhtGtCKBwuJm1xhN4nLDxqcAbL8HiLxhxJ7VT2i2dHaWG76EvdNkkZAKQr4JmaNnUMg",
  "key38": "2MDkRwZQYJSgNRCPQySAYpQkJBVfowomusvFSCcNBQPqDEvspRm8bX3mRrbxrpsopiFydyrrkG4rZyPmWnbuEK92",
  "key39": "3HAZ6567ggzWfpGpetmA9e1ZSunWUV7pu3HS9ZrRy4znweX8hn9YFtTwptKKDAC2S2GMMHfs1BLzTgaWq4uVRjnW",
  "key40": "bcmfS3bnqF3cJegANoJ7hPcTkBQrMXffBYDT1kFyNREwM6Vagxc2fKQDLbESY9XKdxkb493CgRzGcayG612iNWo",
  "key41": "3nnEouZpPAKUf89fdX6xp1xh4ewPYHsjF8SjgWc5RoNby5jhymtgKK1Sh8hR6pmEmfFwx6xAi48djshTsFMCoAFJ",
  "key42": "4np5fUurcreURfWhUrqUzfSg4Wt9CgJQsTyfYUGATAEcomwbW88bCFUtsa5GHiX4uWyJdfpzqmre7dfYQyGq9QuR",
  "key43": "22fxq53x36KvY4L4ZBdvAJLZDumtCYJqAvhGGvFsHRvNdWT9xatxexE44e5GfsNNEHG7sVCRfxZmXmX4wfQR7G6p",
  "key44": "4qUaeGikEkhXgWwnpu8J4gXnR6uXpyRwLfAcSPS4MAtWTAfYq3YNp7qcmX4w5AdWJZEStV4sJuRpi59qVcAZz3T7",
  "key45": "3qDW1gcLGTiXKUszbkG22Q9xgvt9L1NMYKjaY5oUfXJnF7PEhM7VSDmbJ1w8haczP7uJyr8nzD7Pg7UtQ1fDFLtD",
  "key46": "5YGFt9nh37nDPeaviFYzbgQTPkvB11jxRyJGyAWMcWJXomv9fLyCekUiHPWkyu2Pm5NrXT6bbJHi52n8pPeAPa8"
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
