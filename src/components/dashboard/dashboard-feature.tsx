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
    "5eKgkhvQkYLt531z8oRjPBH8opnGs16FkrFmETHjLCd4Yz19bgNiBEcP3aYpt4aQrUuLbkuc9PokxFYTX5qDZyvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wse3Cac6DgsHLtxhtwechgJredQMxk8ee5wqYz7QJksHK9J2cFF13MFodWMxeYpg5hcxomre31rmNBJVmKcqiLg",
  "key1": "4yk5a4GWJPwv19P2sYQbFU6SB6uZmrssoRtE9PWtixNptVBqB2VeCeDPFfPwZ4UgraYv1MsFR8x9DnDnV6kpPiyo",
  "key2": "3mLN8ya9kciYZKdVkn672oiDkD9JinRhwxXyGxddPFa24WFwq14BPJvibyBxpuDfz8AzUxQeph7eKLrXB7CyJdp9",
  "key3": "61VstckEydAwxgxBoPJFgVZB4em6SieGa8aZWBvRF2N7q4MSAiMZruJZrgFS4hL6KyJbtdv29ZWLAmE3LU547Joy",
  "key4": "5kv2guzsUg3QksQGLAgYLnnMRzeBqkyeZFM9zSdGcnKEt9bpJUBx33QKDYnGKX7e3SLYXYHEwzRsaVGS56onzHR6",
  "key5": "3RcPRps8fmGWwqbA3v6zMi4gFnoJKFnwFx2aXFbEr2xC5K9VZLG7d87uDhisHbsch2gAZ1PVgpxmeffsRjRTqGB2",
  "key6": "3uqjeyiTAKGd5feG7ip8oGRyPje4yHNv8xvm3dGabE3Mo2PhU8P25no2bJzYrGZd8mmC8wT56Ar8oQTvB974mv24",
  "key7": "MxoNgFVTQJ2E2GUkQpeqLWyirrko9UPfH3YJScw7h3cyfP4vBkGTdHoxxdtwe7SZS5WcLMtqgRn9KQyL8LeSLhF",
  "key8": "4cd5NtQJaJ64euMcJ6BqP9AhFXHuTsjfKCBVYDDHzhe3SSaJYitZcZNhiidW1JkoX2Sjcen85FDCDBcj3RyeinXH",
  "key9": "294KMxtiT8ritx8H5LXeDdzHtcZQbLmaeqFGEEcvmECcyxe7EUPpdANJGcukLXq8yPUgWEzjBweTHivqDa6WfPtJ",
  "key10": "4nDg8UVbm1izde8ZTrKzYtKgmTJo1uxV5tXHY1qR4sNsbtEt96Eny3jPuD4Pjwqvr2PbfDs1WgYLrjn8XqzD99aw",
  "key11": "4W9FNun8NvLvNAsk5JGCAffK8iiu3FXv3XRcxC3Asx2bzoKYqgF1XfwerZS9eembH7gRYkpfTpH99Eg96fv7ePAa",
  "key12": "4sM9kDS9kDWJgywxFGDC65feYYoJ1SGH7nNEQcT7oekjXa3A4trs8voCGtENyLJGMyV58X7ZgbsoQm9mF7fuax24",
  "key13": "boKmboUoGP5DzeVMnqZinCrESSKKB8LJEDPsgxuyAyW9EXXQpVp4udBvSyZTnLMyHMLKghRpfKj8eRiihAJtygQ",
  "key14": "2PE4ZW6idUFhvhpeYh93yZwKzzUYftXMBwaiqiQ1j9jVnshnEmN6uWADMdc2KgMe7CxhsiBk8YF7o118ukG94cdb",
  "key15": "32sKNJzn2QFb4LmqezcTyUuZe9RAeX7Bu65YbqP9pZJJqNX2xv8pASfRVzBbqRssGuZar98hzeoyMxjpazaLs93T",
  "key16": "4Pb7c3H4Fck6TkgHXbmLNiRxgdmdZ5npqCABZvqFRD9Jit7pPyJRioK89SLb9QpJpj4zfAjHq1AuoxdXit828mE4",
  "key17": "hJCnaP9SykwW9ZF1vnKzWS6AnPZygg7zURUttDdv581mSjfJaQMnu61ZbhsKYDRgtDHjJKc7nrGA3NRwm238r9x",
  "key18": "2AVZe6b3RfmnTfXjsasGGgfcQqTNMPzPQEURwHyGfs6uCuYm4yTZzeKonXJuEidrGKerUhjizqLDD7BCoQQ1PzQM",
  "key19": "63sigF9ojSKwAcARv6njLZcqBqJRWm3Upk4oi4VQS9XN13oB2QSyJRAqh7un6xwcPQVQnueR2PmxTsaCLBJm1RWy",
  "key20": "3ZLX1Yx9E17WZMNHbTgCZF3FGoKJbv6KzXvE1FbzTBLEttyJzBkTqHx1vgj1bd28qqFDPbgU97g3WCnKTZQrFx5Q",
  "key21": "2mJAsFbzcJMcnHxhXJdwXVXwC5JZaGLnALUCcVYpzsmgeiisHxHSoYNDbGFb5Ba6NCgjtDsSnjvt1DuoPinKTCsK",
  "key22": "3XZtsQpuF3KV7SppdeMQeZazHqjZrMD1amFaqduSeYNNeiQGdcFu8fzmWmyX2r12bxTkfdjmb7bCoB61KLGrGfid",
  "key23": "4A6qgMf8oWAjct7RGgm18Sj8mbrqKPQJbeZMXNHeGY9pJ2MkoD1vGDRJyr3K2AV9ELJ3yY5cvbLfYeWR238Hq4h1",
  "key24": "38z7LeXsQLrx57knKozPRCdb7Ez6SYdMuWtYH7sjSFGUmZpLqwcREn4mZGpn1g4UniWTjSaC82qmMHVoBpr6MLYj",
  "key25": "rujV6v1U8fXYnFQxHNb8rzV7nYeBxJDTRi7jjQR8i7kSWZAE4xUcK9AZ2MxBKB1rGiQnjAPq479RT45ugkR2gNt",
  "key26": "4cvLgure4L2jCZZS7SGjW5ntVn2dgHqwA2cha8cV1kwsbiPVfPzpe4rajDaZj932Gwwi1QC3H7qXLVwgJiG8ygEj",
  "key27": "2Y3gHQVmtu7FY8ucYp8xrxxRjefYAav6sQwzCWGUNcevGrS1v1jdmXBJmmKKQfKkSp7fuzSRY1yuk2zUg7z8AaaP",
  "key28": "4wwzkp9y2Xxp6JTHK489JRdwwA7Qia3SmtSdDQrS1bvkGadoRfSx8Tv1DfyNUtfu6quuc1DgTTnuaGgQaHjNiqN9",
  "key29": "35d5WRuf9cVXxtLqEhsUo2eKTtp8z5hfVUfsp2AByvkxLYPyzyNQH5zYvxoyGaSMCRBA8G6GWNp64muVUJt7Hr1A",
  "key30": "2K94NDyone1tGrknLRfjQEsFuy6BEo3KL2SGaU8nvqv1iXBMfmVAj5KoUkwMdtuCZdMeNcznbUF1uXbdL1B5fyFY",
  "key31": "4f3Z9v5e1VbvRS7QuWFnQSQVfgAYD1KpkU5srBMBtSsAsQzoiAEjAEFCqR9jFkUZsxXwNXrVZpRJECadPDfeeF7A",
  "key32": "mG1BmmS9T9mnmKLp6Wht3soo2QyqxMgyBS8q7hQQowh6KdBtw3JGEvRRpEVJvQf6Cfth9RdKDbRCe5QVqtvT8jB",
  "key33": "8147RbuimdfbcwbC6ppboYh28GStEwLpJs7kbRBbnMvVmah2vYHWCiHEtJUxtdxdJ3oXHWXT4fMJNXA4xvjJFtX",
  "key34": "4BjnwQRdKgZD3Rq32xencfhJzR2rK1GRTowuhxYK4Hp5aY3X7CF9mahkGLWVZv7YqexqSMEC8Dr17jKgm7w1YR2a",
  "key35": "4dAZrBvszRMwZm9dG99B91aRPdG4Bi5235KzJWWbhG4Y9Tea1PqpC3p3WynbwE73At85sbbVYAb4YkcYhS2YZq9J",
  "key36": "31MhEZEGSdBKaaRvg7a7nZ8VL7jjAEmeQS5UHW4NJARfc9RzAszWCq467ipQKMwquRwiAqkU4y1VbiYYiFwzuqoL"
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
