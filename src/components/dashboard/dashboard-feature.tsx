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
    "5hWCxGUM6VkCQt6swrif1UXipTReFDjcNvEYXu1odtPdnQeHarxnQLNUhtzqQ2kCikUrdjS42fwXJeaqXQuLKYV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kkcnT8MGmFuBSRTQcxTsTzVaoaSBWjFyvUboLzkAPeNe2u8LMf1wFPnx5ZZdkAz8YdJ7ZEwTbcNLJjSxHcAFNyp",
  "key1": "4HyJrCckbsdKiedTNNYGPRARii348Dv7nRhqbKtXzRXti1v4bZNx4NyRrSokCyGEn1va61Cokjz8RQSk8X3bapHE",
  "key2": "2H5hXqaT3yS5pAiFsqPHstvT4BPjLBfGMBxEJzXaiaAY5zVApQUpNXhHbNJ2rdxVmmHR8QqK1P8VxsmM9RL312wm",
  "key3": "2ER25iDA5Euqwxo8tSsBMqVm8yhqGToREN8eucvwFZuSVncFXmBYTbwRVCtq1vJqFvvQKApuHUBSFFHb2Ef2bY7k",
  "key4": "3FcyWPvRDems98MU4eftTCiuKKhxGkb7UALphz8GwX8f36NVoPi5wj97xrP233eHzrPRpi1ktkukktN3ARrqkZM5",
  "key5": "2rbGVzD48CEXHJxAwaoVv1uCSLXaLKSva19PyzYe8nGv8arguoskhJFN7spSQZiNDZPMw3wrufbpkK2AMR48ExbS",
  "key6": "5mUPpME4xRWP116yziBRWRZeGLxNwx6kHSXm846PjkSznZ3WqcXaXay28LujAJWaRFgyfAqTkJ65vW4ZQC5RwVr",
  "key7": "3h9ab9HrEY1bRmBfW2ryZBRRfAJYpV9B7Phtwyrh7biaBZszQNGVDuGQKGMtUc3RrtfyqadDKkUtj4e1zfLaDivS",
  "key8": "5aACt24wsSrmHovdZKHntUEGXsnzQfEMipAnpWndW7YnEg9h76qgsxdnb9hmSMwm15Hs8jd7iprQkPrC3CAqLWjz",
  "key9": "4AD3cJ9aJji2gYArhiUbApmHqvmTythwygqZBhtfuXD6eyJVQKsM81Vt1MbdrkqnvepAsj7BULoGVokbzGGagNmQ",
  "key10": "3vbqgM4MG26KjAcjVPcSzukYV7KeysQFeMLjNpUtvPeKut9amenNjFq8QjXSgh62kzwmLTT66kkG4bs8EViKDzDR",
  "key11": "4Hk8guffjurhrCywaotr4e5Lm1WmizbSJXe5W4fNyoSY3yTsZdUPEcpY9gNRqo7V1wAeMfjzqzHCFapV6m4h8N4A",
  "key12": "cmi8Qw2d6igXQgsiEjascSd4ZeR83gNHAam1N5qXyZqnQQ7h2TNG8VqRUgiJvUknMpFgP2QxyP1qNn6qWrC4krC",
  "key13": "hNvEYCD9kJ1qE2u7T5tnnwvGGc65CSa11s8aTm6gwmozTQ39dBWfSYj5b8AGAPjvy9whCPB33rrDTz1EUBmCeNG",
  "key14": "4JZ6JekQNfWYrX2Gm5fP5oiwGgmxak7VAekf6Sgz3RuA9FU2AZEnCAQEDtH6FB7HA3ZoJt9PgE914bW7DXgRgMJw",
  "key15": "2Pj8BKHaYsySXka5YDoNkctmmLFeMQiwBCtDoRDrxhC8upsCDLTGgpSJrrtjmcpNgQ54JnbLvXiYFdiABYLQXyBo",
  "key16": "23n1dLVb3t1tm2kwnbrn3qfnEXNVin9yBivMUUPxpFReZXYrypAmYB3qUSpDaUPVoHC3uv5LzXgsHKzukdwB1h1k",
  "key17": "P9E1SZwazKRURWVqKQFrXN1J2HqFw8P4TYMR9PgFeBEm43cBmr4KbKm8UQEtkr446HSbHnYo6RbauyQQUaQAh6c",
  "key18": "4sBUhXtKpsFrbsn6SEjoWdBPU39PYQJo2mqhdafPLoQw73P5zMwU5p3foTtks5KxMprqiFAM8WCiY3hV1MQLk3bp",
  "key19": "4zuTKeLhidzRP21hXLjvhaYZV4kBXGDY5W5GaEjGYdWoeVMvNeBbd6kDTVk9vjeWDqSVoAQguuV8WMEvwhHsGv2G",
  "key20": "4dPLhcZPNTecjeU4DUAeehzBrPiqBrpYwWL5rGKsNNpDimefpu4mk4UKWwpw5uLyEbpkFjyvaL8eUF5dbeDXtEWe",
  "key21": "2FfUx5VvhfiQhYC4shTKy6NiR3CEghBretTKsV9AArpzZ5v2ZC9jkjbxn7SsNRoAtqEUvC54KyKZVLboXvLSRKwD",
  "key22": "2SVugEvWBgnXDsRdYtWjbZLwGeANrKeeURMimpkXKrqtwFFacQ2W6uMey7wAYD1h4oZWGKLD5QBqLjUjhBnjDzQM",
  "key23": "4CmYtzAAkc5oDLNfvAFbjBEhui7MZphf9JCsXxkd16sJ3WXKatUwvT5fCXtjhdmEr3FU6jDwHTzSTkBYT7rZxL6U",
  "key24": "2jin1LHpptVfscQd7rGRRLVx8vFRQYuHikhSY6bTf54T31P831N2dQPQegSGBE9CtUR4xo9miJ91SMuEWMcGpZf5",
  "key25": "4rosBzAERLT7gMbFC1GuNsrHiuJTxEmko6orhj5wtJ25hfjNbJokoq6AkovZZmXJ7hLiuhdjYBVdTCgxb8GzDDgY",
  "key26": "onxSmhzgqxiWAUUg5AMPr21ophRuHTbmCDN4roynk6HULttin9nwWBsCb7MyH78yNNXN9GT7hRYF1NDBvVw14S7",
  "key27": "5dwibGEkdbeW4qFYwST4TCgh95zSxkJvxiY5XCzYGP3CaGaNFhu5oXenvezKUPswfRwjEJjQR7ETffy5o3YURCk5",
  "key28": "2j7CZLZLNAqxh5MLb5HeFJoy1hQfjhV1irTYhpf1XFVZB2phUayfzoCm5fMZdbtA2x37W9gqyZmQtTQQCEWUjYVA",
  "key29": "4EGcms3QiispkA6AvreV6C1ZsbvwJPLQtK7trMpCxY1ELFtH3DccNKX4T2cm1ober1rvqhqyzejsqShPZxkEUi4r",
  "key30": "2gBnWJeNvSYgvEkPbe7gTnqvjvRFfZdu6nhNNhLSvDGMXcXK7dJxGeYnnUd1kZhySSLMgKYszp2kaj3dZxCP6bLU",
  "key31": "4cq5NEMTeJoXbNv3hoDiGDCNnYZvRbymzuy8FSWf8SNB1Yo8JsF7TAbQRCtXDeh4xioA1dhjiA5Z75ybuFnkVMMw",
  "key32": "5ZnrvJaucg1jW2gLUXmWXANYMmU4bCzzxLzWXWQYp6MHsyR2uPHejmoLDugvzenoN21paiVWhjTQ39WnMfMi581y",
  "key33": "5c8pbZ2gToBc4rNANhLV7UbLoNHz3hdLyMMjhnXRD7nUwYAX9eG56wgrSPsWp6YzMd3f2vQgaWpiDRcv9t5JHLjq",
  "key34": "5MnVYsufbdBZuWANMiuvCx17aZczQe492oXLQCfWwYwixhZsKq21Q6egbZiqHhQ5VSBstFhe3vLfrdXLDCLvXaho",
  "key35": "EnEqPktLS9nskQ8dLsGUsksVMsgw2FuxWTyFmFFHWc5k8UWqKofFGMLuKEox68Pxwy1CoWrsxi7SL9AfxmbRbYB",
  "key36": "64sqSh9zFVBWFq2AgKpbWLLV8uT6mKUA5PiGGzhPXk2RJizcASsoozfNvF5BQpXNkJudQD5zTCEgjC71BCPBB2K6",
  "key37": "5FJgyqvmNozcMnbHyEftmYyx6Ts3broSTDsm2cKEn7CCkYGEhLZ5M4ZEdnoKcAU89vYtA3xvvCa71rSWdhDPyJ4C",
  "key38": "2WNztr3KT5LCrdD3T2zAjzSeXZqpQChzAnFDW1Jrd3tLXpDs787KB56p5kQsFpjukTxqAQqJpabVYZ6x8zHVGC1W",
  "key39": "2XDDKQbSFu4wtbbNsyPtJbbefmBQmozUFd33D2Qx9Qrn2YphkYtMDHTfDs8gFJstCy47QhU6xZU3M2jCYfoC1Nst"
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
