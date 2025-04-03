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
    "2aDFgiGBUCDGgHLjdR5RCgBgz9RnHPyKuELNY4kfPHuC4aKyZNLHiH3V1BaGg945JjDPc3BwiHYZ5zCQEN7noLer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41aKsS1PefbQpiyBMAUGFyv3McH7Rydk8wXCgNQ4LdwmdPQJmLkB66z2cnLWbgL1PnCxs2A9FevpwRqo82Hmfzzt",
  "key1": "2ZcEe5bLCMfb4QWoBYPnhRBG7zdQcLRnhtKddec8NJgGXYHDt5YsCMe9bgAv9ag8ywpHoUQpdXffpEuByTZ51RrM",
  "key2": "5SGYuoTzHNcGMebSSQKrvAibthe7gkykK42rS54evGcHcMNN53T4kGdXXf88gEFDLKC1DDPEsX6TfgqYjBVhFRqL",
  "key3": "3SUfTuxeni7ZQ2G7QxiSEyy4cNJuf6kMcrsJUH7W6Uumf571ZKNYP3w4TtFaM8Xg8jyi9bJsjWDPhpFzQAcNUH1c",
  "key4": "4yF7LWWVPCupwoCb729pRaeZAypjauJ4YNZSuu5tdwADmKbd5gNxRf4GThozYBWeVLET8z49iTZMNJZt1YRQZih6",
  "key5": "52sZBAS4zqNgLifcTMYpKb4MxNt5rZHHcvSnZ6qVLuvsGy3UrLCr98Q9BbZ3RwLy7m1FuthTXgjhwhnFW9S98Nbe",
  "key6": "4uMKm2PYUe3JTm3Fzr24UiBswYqp27WnwEsCH1rVnCXoZHBjVTQf3MZRsxiByH9dgjrPaN3jHoKY6ZNa9pnWyG7K",
  "key7": "49GSLb2umFuVvBeNWhBrgNsKVgLHZcjNPJRhXHzzjDVVhvuMasqKnsvCskJrYaz71PB76s2kqmNxxZWxBdNDVxrk",
  "key8": "3Z5dYPoQxQFg8Qoh6MN5DM7kdF4xUdcAgFzndxwa4vkPjMUe3ePiXXmKEWmN1NDGvnUe1EYJPb18viSQHNSQzUSn",
  "key9": "5JfWp8HthZKbZ39CFg6fmyF2hQFPXwaWzjRpKMsS3J6SccEBYA8uw4NMgrCL6XPZC1PkSimDwgkPVY9BszTBGgzo",
  "key10": "3yFZ2ygNA6tRdhyYLiAPvP2ot9NUDrWNnydqbbTHGUtKL8gQQvXEUzrGhK9b7RmEaTfHUzqrQmnWBjk1ZjPpSWTF",
  "key11": "4wZ9hESpkpJC5DmPeqfz5ZtdunQxL5kZ6hJqZBvUrokA6Gh5TQaTSjK3r2Gsi3mBvX7gLsubt17Kfb5AN784AqDw",
  "key12": "9HpE7h4DvNg6BusZt2sxBUd5FhtmuNYdtZNuseugPqrLdGCX9Q879pCJJMbjrN9b3DPGrNC524buS55rkNBqPaP",
  "key13": "45sKU14kC4PQXUEREgXYfupkqJJopEJwgb3FUS5shoaF2Skqm5NQhgNchmymKrzkUqhYdKLBrnzBvQ4qgEZUtqQc",
  "key14": "2WmD9RpiGpYsjUymXvR9uJhQFGdYxJWmkz6j8umLym2Ne1yF8xij61y5nzuNfqYHmZ44mASL2VVAmndqtYMLSH1M",
  "key15": "54HVtZsJJgyT59Dp8kwNNAjD6ZxgUS6o5GQPsjkSYZHur4Gzk5Z29SQRhB28J53Vwe7PtkTVR2UgF7NJ2meHeLpB",
  "key16": "2Y5ocNP3gncxgE3ynTQGUZLkJfW56Gq154zHS683TGuaRd4cEWgcsG4XnsbGNJyFPQrW6tCB75twSfjC1gDddeFk",
  "key17": "427q36ycx643HvfFZejZiGBypG5pyNMUZFcdQm2BDmRD6s1qPaAaJHrSd69qip2PL5bpHZbPoB6XPv7JiK1x1K6w",
  "key18": "26RETkJSxkV3NVXZQYqJKRb79EsZqW8NaTMUsc8TWT1r4DW4Wj6UZQxFskBcWw5hJ7jQcymv56wMhVxtP5ggK5di",
  "key19": "2udQpWxvaycby7722MCAAh7gRRypR3XvaiL6qd2tGnu1cZcs32dbNmrcAnNba1WumX898uaXM9GksfXtoaPhJGni",
  "key20": "3LCePbXtFVNcaaMysFqmnk96drKJXT7K98xiozvKmTEgFiE7YSkVtmG6RYcPscDV198rRhFCHbGBUgpJZjKsXfis",
  "key21": "mJWngeR9ShVzkbS4fD4Q8yQeeq9eoM8314K1D4DTxDrCJZbd4HDh12QDutQqUcBqPui7KsfN244Hu6PKezDiNyo",
  "key22": "3JLWDXuAShRaPoVKprey45XM9w4Y92DDV85G9cddqhRyUDxeCav4A8ZuqFDjUDNbcSeSWadAAw5qGBKyykD2mUd1",
  "key23": "4cf4sZkUbsggXyvbuSYNEdCUetPru7nTdCsdyfXisgiT81LtwfAhqTvEHdidxHwPaoShTkeGnbdL56Apbaj5tDVQ",
  "key24": "212T5tFLvxVDm37Z9hkcCBWYFJmDRMsxqks3vwm2d3yHZ5GbUmpVGQiwn43Z5ueeWPsoCHAeYcZjVsbzTvCjKDCn",
  "key25": "3HYNvXZDm7vQtB1xkJp9aAa1YNYvqhxGrQpyfMFaX1z9Goe5Rhe5BRX794gKBcREHiAfPaSyecktmbDCwmiJ1qv9",
  "key26": "3SgXyhuqTcM77uWfH9gya1xoaZT8yFwt8TeDnjKzUApvEFKhRKtT5Vysiv1irnD3kQgkumhz68rTc7waSwcLHVPB",
  "key27": "2YgkEirNhcUaDhMVBd23upWZyRKoDK7QXVUdcqGa1QxN2PTLKfq5hNhzBXkAGbJ6EJA6JGv3paQjtuEiViGDZJMU",
  "key28": "427rKori8Vw9djKN4yhGWpuKZdZ561U5ZwCFBZQ9iCoWz94tuzdxa1NaGxp3JPvNK3J6mw3XAtsJifNAyvsxUyTX",
  "key29": "4rC4ufn7pJcKgterVm7k141sZVBLZtaRDpmimNSvUycErLupb8bESZguj3AHwF59PnUixZL2jMZ1CcGdwS6aJJ9x",
  "key30": "4B2gncbFfx8du3nsa11vjQXVehdkWN7Yp6P2eXGtpuZuEVfRYfQFUf4znbFKEkjJcagBHeDRJvspTAh74eRX7eKH",
  "key31": "5fg7uNGkXW2vdzKpQSFPY7hLUaXKDmFdnVYgfEySfbXUJrQYphhyhXmcEek7N5GhYccLPb2GhZC86MuabhfakEoa",
  "key32": "5AGFpmugKYHvcQdHgDNWirphuxKXTtZHj5PXnHrysK4G71KW4qGT4YfuveqJU2vczPHk7ojm4P7pYANTyAojWrsg",
  "key33": "56EHBxABPLXzWpAnMdg9bcF9W7Tcq1CUS7A6ZHJeZcG9gUtkyetBQtaFpGTC9HWado4qne2zCe7WmXWx9aPwdUAY",
  "key34": "5o2St9Jsx8DRgYR2qkLAP6gurZrwLKqpXvTcZeNrddNMzNyeyZeyTyjk95o2gUrvkMbk6nNo5TewHkBhygHgkES4",
  "key35": "223umvPFXGNLnZRXou2YJpFVE9uRNzNHi2caSTDudqNdMFyyZ1nkNds9rmc7A9hSZ2afvA3LsL1h5i18J2bhj5Zj",
  "key36": "4TTGCgmj3dNADXeUUtmoTtTJ4ngKTDTL7rUirvbEXGzBdvW9t3hVosWb4hLVfyeJxftVcAgTVi4E8MeE19Lowqoi",
  "key37": "W8PujTejVF77JbGCYZdSdp3EGTNPrEdYLP4evQ5om8gk5MqpSQ1DFtBQdMMaV8mTQjgXPb7CHammtgQPbKqM9wb",
  "key38": "2E6wBaUuWdGAcQYbUC95XXPknQKbP1st2AFugYUZZPs5CvqFo6KsWeP6Zc4VGJDgmnbTShQf7J98bt7DK9SRT8Tf",
  "key39": "4rFj9k73a2eVyp9XCWj76FVqVcQyAcg8acb9WEsUuVgnGU18AJpwsDCeBrxW7nGpoiyfBc8rD56rG9j9PU8bE86y",
  "key40": "5HUR3dfyG1PMfK9gf4cJCxVAFPVGRVHZpRRKa9NCiGEfLq61fgc3AwopnssBMZVUhm35DVsThdZEbE2QSmVr5gy7",
  "key41": "2rmYjgEsCm2eC4SSGRwRx9n1Fi51TUapjeahGmYTjA45Rc8S3USfo2t6ttzK3yY9zeT97FqkxjbyXPUp5n4RRUaC",
  "key42": "2qptsCZKLSFHcEb4nMTEmJmVLa8mF1DVPRwScKq3VpxmoUuprdwVufXSALYpys3KCC68LSseF3hL7Jhv56xkhdYv"
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
