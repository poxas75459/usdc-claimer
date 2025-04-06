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
    "zE8RBFtCmUHRf7nw5TUnFvBr2MP5K136GWBAtP6stENQKQgSD4swuHKJivLJCnZmpumWWqa9MhSfCVk6JoSjytp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AXjXSPo1aRKy6TKf9AqURxwbDi4ZbetkRFrYh5UYNBQtcXDRRgQfbeJ5Wq2Us64XJ5XPJmevoQJhtJjpM1KfUcG",
  "key1": "4xJjh8CTEZbnqTw5WMP3ZDDDjwVJqJFygr6mYLM4HfKRBcigntEpqJWzrUgKQhKeRRDfW3v4HmVAk7j5G3Pjgr6n",
  "key2": "4ZZDDXF9RpCLcbhSfXEH6J1TinjrXFHshK8aEZf18up2RXZjhuvPAejRBgoMmveqLR2E4yMmAWjAukpqve8QtdNP",
  "key3": "4XphSUCMMFTUpwZ6ibxGsBrB8UpEkAHEeGbTrbJSKa9skxvNEBCEVpUbmAqWerKciPV9L2wnCGYPLTkvc8iehXTD",
  "key4": "2xKezzT8BghY1qDXzvAXNgPkCe5gP7j3JsLp97C6txsh4vTntaLfX4v3YtQby81FtjLMfUGimdax3YMRtK6vcceE",
  "key5": "4YZZKH2D7Skn7qebnba3mZRHH43KtPuWTz2qRfUMSM2mCeThkPpPLAAiNkpsczgjKjDm9PwLvLJpQYALpdFkXapD",
  "key6": "Bcp4N3nruQvgHwACjNHBS9nCMcw8tTHVpriz55cCR794HpwBoFGopNDKq5JSHJF1xASPyCVMckNeaLc1Me6yUoB",
  "key7": "3b6yMubb3do6NiPGopPhbcxj5WYq2jF813qjp7AxZL7Esrr7iR79yyrC6hXxbnFnZoGMtEytGPTgKrBCoLtUhh9V",
  "key8": "3TdjU8jqs6tJmCF3ChvwLu3gsNzUj6uC7MMudWdVrWYSHehTGNr1kweK3pWDJVZaLZ4irgQDzzHdY4RrXzG5Befj",
  "key9": "5izckxv4HLDNJUq75JYAGpuyydmP8nk7LxdGcyvLKUySf54WjGvrdx51pBQKrJbiyTKw9t9zabTHBViDjNUhYHFH",
  "key10": "3fR3notQ88VHrSTQoQs4wcwtZoHEFT594MvcffK4m7XeGXzWAhNdHFXUhEN54LZW2PPWEkY5CJYrLwzqxNhK4vKc",
  "key11": "5enMhFQTHyqY8vU24vzgQ4Hp1YsgPYHnpe69Zif7TSAfLymKUYEWLbGnuDXL61rSQExrasVpGUQU1vnvyNTGMij2",
  "key12": "29Sb3p8UkpoccXaGb7E9ueH7bY13KNyhuVU1nN7MebTzG6GHJt2Jz1Zru9otJsjKASq9i9q7e2Z24ddAe5cDkN2m",
  "key13": "77PQJKF4Ne9zt3tbuQpqWmgwsSKsf1qVWQnFTSY1H76tscShDzWv92EAgd9M2QPuKCjLQ8EWbv6bw1QWDfXg4J2",
  "key14": "TpwyVKGi9Lgya2HjPCKWEoMYCMsRELWNaCr8smpXQLhkNioTfro1rzRwy9RcPLcQRqihnYn2hnGEkhzdT2P4jcW",
  "key15": "5Vkcn1v3xdars6tQeAJW2qSo2pMc625fSQt9cYUb57hN55FSzLjzFwKxwfmRbvo7Kzu2cE3dMNkmmXfTAC6W91gW",
  "key16": "5uBrLK7SsmrQNA51zQ5hYJQGgGwBrhrJFftbJNyXaQYEXbNPr5jUg1itCPKKKWUCzuLz57Mt2nVVQ5uYBTM86wSj",
  "key17": "3bEZ4QyatTzTL1cwLcCDeMfAhsxSZEm1JRSDZPpah7pRZwTbjVuX8wqGJF97CmMxa68hGtk37UxEjLk2WiDDNoNy",
  "key18": "4qdJwHLvaCam633nhv3nh5KhFRKMxjAPetnVPSRtPND9Mo88JKEZ6nNR9vtvfgt2r5tT5cjnkwaEyWXTDPRfqC96",
  "key19": "2WUtmg1MRsT2CaVuMQ2ysG42YZMagrKZeMS26AmhXnSzZUDfxGCnHxpHqG879dPy8k2ay96KY4dWTGYApGsc2n19",
  "key20": "3Emh64xL5aG7pqc1jdam7RfLtSqnZBkjMKsRXD8iJxaWrToiyWDQHWSfXAFuWgSn442VkhGZqJqFLAYcphLP5HZ1",
  "key21": "2z2FvdvYxCgcBhFRmkqWar8C1jjP6Tx3HasAeP9JWkvzMBRvSfbJuWTaz4QTKow4ijnFPhGUuMjjg9Mj76teJtQx",
  "key22": "4rEnUAopQS22TkAUKEYQmpJtzyXF4SH1kFfTSnaFj9CiEj55VpBmK1kBBX9Z3AUf6rXp4h2AxYXGiRdkk9pupYHK",
  "key23": "3jm6c7Ty5z4YuFX8M5hQPMBkjP3h7HCoeu5j4oMHDf3RGLEJYkgLhLwTJk4qmpAaBJAQ3FymUiXm4dNs9HgWLfsq",
  "key24": "4YAsXM4J3uxJLtvJjUb2K87smXMfMk8U8GLvTYEjn4mBMgPqbNnP39dcH8QgN3xgwQuapynYG2aVF57ufGDMmtmx",
  "key25": "27qVAD3emYgCUEhin9Ef9rx3Bpwe2deTxz5W3bDhZvHNE6tZTRzEcutZ1AXuNmyNnRhJYMeMrXyq2Nd2JwuEWoSm",
  "key26": "3E49ETKyiA7Zff33pk3WZa7MW74eEk1p9DB1es7fNRnmmuoBugBfwp8mNwXhRRfVJG8EKs6tNhUGupDEoS5jihyM",
  "key27": "2CNuXK56zqBF7gzrRKBXaasJi7Z8v8dQA9Yysb77xiUwKLcWXpbag56UNng6Zjhg7zciLWZbjPnY1mvanA9pYNaW",
  "key28": "2tYs47dHt1rf59GbQDzkgF6G7fPonB1tYbwmTgUTVJdVdXYnQwYu64dHp9y2TmDBZ1ibUKB7j1i4YB35XHrzu1MK",
  "key29": "5ekLExahMSDzNL5NqMnNJ4uTt5fKLpsg7HSSyQ2V3ostQRyJCwucgkQnhRpuC6pTJyqpiqTXCRzQe4KsH7QS6qGA",
  "key30": "5EYhrQyfHUKpVkS9rS3o6WH5rzMFKMU72nrZhNFP15hoGE87EDbeie141JXDMj8iLXqH4zETSc4w3eQhw9NGaGPx",
  "key31": "4VZqsWuafj57FLMGbF1xZVnjNW7sQmiuP1PZoar77WgaHSJvC6frtKQ3ZwCGhTHdTbQaagHNvR4t9JL98JQBJQar",
  "key32": "3ZTtVk1jAYaFegeQPDgC6Qj59afixMVFBbNXe7sXXuHRdpNnc2YQWQh8b7tPDKKCNoth64tEYjb9J23ok1EoP5sy",
  "key33": "AnSJ9Lsw3anYnv7JRaFkEUgd7DKWcN3NSPBZiy6Wqvp4LMnSw3aSTUuuHgruijuztPxRXAuU3rEumUNCv3V6wvL"
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
