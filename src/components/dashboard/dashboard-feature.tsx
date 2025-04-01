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
    "54zdUb8Hbang3EAM3y5AF7ip7wZ2JdaEuE42fd7TYGdykv4gj4vL2mF589yqi9DHu8zeECNngheLRT77ok99e5Ap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VvAazBTPKfVP2H1jFUx9QvAoufvDU68jmP4e9voPxuwcSz8gJoyrZieMQ25CvPgSJjKkXunzUtqpTSHqY69uas1",
  "key1": "Wu3ErEpH9tbwtS6vSr3pQgTegdeyAm4UDSVdrwkPQ3q5xcP5aEpHioftJgtv8XR7S8rttHGz1r4B1fJyByTvLtK",
  "key2": "2muxoVhnhddbcH9bX8zjvKBoFY8rtZJop7NGu1GhDNBDX3hvynHvqNWyarpAxHLEasxdUY1AjmHyt5FoaKWDKkRT",
  "key3": "aidvhPLphWythJJgUpkmfoRAmXA3qeWmZwTETmzM5xqPTbrT6AR5o7w7AX5UdFYDcfR2bBvGoWR9YZ3cBYqKqAC",
  "key4": "5crRB47yjioE6SbZ1diTs3Wg5QjdPSwLtn9d4YxMkivFKmTL7NRs2qjs8w1o8SaeXLemQdhtkaKjSWkbJEmhLEHa",
  "key5": "2yrSgcYKNzbtBmcGPThwSY8KkeYLBqmZbLZ9jGDApqkBZrnwK4w9wZumupKHAotWR6NiwQxb3tdrYaT8YYMBiGCL",
  "key6": "rRigrE8XAo3x7LgUj3PCb2owWtnwznPweK3QRjFMJGpxevCdVnc3zbyQrbEwp8mACd9gJUKjfW3Vts4aKxLEme5",
  "key7": "415Zo8Q4BuC8o661UXYpwBo8BjVhC83LUMHuPGJ95k2sCKhLTYJgJL5cVmbet2kr18kiT7vrMp1ogB8MUq96B8q",
  "key8": "2WWE1vvewTkQVj4ByQ2LhnPrn8XVuu76yn2kRaRm97yy7FipY6uRhb2EdjjyzCkAP9Dgeh11jEX39QezVTuWBRPW",
  "key9": "2gip2YxicmwEC7pP4BrKDS2Nx3BPuQh9q6DPJxL7YjtqcsvL4rjHCGYEhtxn6FLprpNKvy3bJCzC8Ffxtp7cU6wh",
  "key10": "4KBLexghxgaSG4W5AgiQugzAYC3RNvRsByxuzbyGxhrC41uoB3eYsMEZXC5FYR9hmdgyFo5BDmdPbVxM61gE2deJ",
  "key11": "4ymeG5DL2boYQ3e9LF1n2dCsL3hfUHKLDNgjpZNv37qxAPm3JcR4vDWAbdi7DM8vbbE1GxDc5oyEsoTyNEJkorZN",
  "key12": "4mvarHQ27cTGg2aGY33wb2XWgKiB3QVBmNk6xAFan1GkRynSPdpYk5eag2Ukdc1iyrtPCqRrJGMXowvyrG69FSaD",
  "key13": "2AWnJ7CxUntS6SMKZ7FmAnuhTZir5WoCEJEeD1PpribtevQEZyVPRAWBeVitZSzBLXpaXdoezWtNP8LwqTfwsLF7",
  "key14": "BBPEYAvyFw2NybxpmqCk1LVBp7StZPMHDD41Tc2j1JahmsECPtyqPzLtxGRZyJvvvKRetz8JTv77NTQjTvE88S3",
  "key15": "5xfEttffxgpdt4w1N2WMBD4ovgG69VXTzgh2V2chdBqetmSbdDNMkAq5ydbY7SZnCV3J7JmgFhH3xPyYdFq7q3A4",
  "key16": "5EXK8Mqj1DFGkEh4S2EC24imJicUfWrB8CN2D7j7bfTj6jCMk1Ty23u28ziEjAVT8LDorBGJwVEr3dESUB9SEX3F",
  "key17": "55p9tCgmkJfdQ9PpNfEA4vFYRw6x8UKuSjNDKKdTvB7TCKW9gFVJ2u2YJLLW4Pux85QAHYY29ucmThVLRrieTmpj",
  "key18": "3wwTrrmmmcguwy2srUgLcJwdGiELqPbLjFjwh6kCtU6Zt46EN8mZfGsqVWW6zEGbbc5y7xNq2XwcdP16yX8XixyS",
  "key19": "4nVJo6EdervPavLurWYj9Pj4sBz4hcN8HWF9czHisBhYQija5LyTZYc1FVoy1TQdTCiVrwnZyaPhrQHpnRKmyKDP",
  "key20": "3RhMyR6zAvo65qpQYeq48XZNBzUvhpD3xMk1JGQDF8DFqQpJBJSQB5FT7HE5RW5s5Ws77AXBA4xtSpVEQY33yCey",
  "key21": "mZ2tskSYCs8yQp9KqgURvEp8CMQYQKiq4fH949q338zGZfrBCkLstjHuq1rvnGLrkQcC5qqMiEsJCUGETLJvLed",
  "key22": "5aB48fD2DWLjNYw4TknuADwRKMqrBxd7xd8FYTQQGf73StfpPwNoeeMXNDgGWwVjr6PuuEFXH7Lu7B9aL2JbxwWw",
  "key23": "2EF5tCdzZCviWi4X8VS32ErWr5bwX5qBoUREbUrhV9wKWfepqDuoHCdSeZRv7VurUhLeWnD8QPKdFAesWvJGP6t7",
  "key24": "2i3twB2oWEAAyTb9XcXiT463E1msghUwuHZC9TsYcXZuP4hdwqfMuqpir46E3qyvWKALhwnMZfeHwjC3AEdNzFbG",
  "key25": "34J5Ue4ckWuiyd2LJc2xGX47KuJWdjQAbpiu5d5fMuHmMZYEoM6dAX5PcfdvSfU37NZaEwtuQGepZPmU2dKZ62tf",
  "key26": "4pUuRCyhvujyqwAhDRwHE1L93AtkZDKWRrdiavSxoKSNzVVLmKh9jmXk9FioUz4ZR4BmroP4kz76RBWcMbBYsc5F",
  "key27": "34shwxpaL4NP5xAuqjPAoAYEEvEkrYzFmnHxpv64v9hzoFSAK1aJ9MTLpMQdoufB6Lc3o4Yz1zpL9VANRdoQajux",
  "key28": "3YMtByfPEdaoF9tGYPgVDVgQTa1QWMsG4fpg1vqRK41f6Pv5c1KbF7WpZyLyCh2ttxjG5gomTSwMPziUXfgUzkK",
  "key29": "38aPnKD3en8oHQPpFNfWXCYTp8ybeFoRw3xAhLqsqaKWfivMjaNrkWAwxfE6usNCx9DhvavHV68kkYuxuMu9ovNA",
  "key30": "4t5pgXGRT6ZGvmzEc2j5EzP72wTMDQHdW9UJQteUKuHCPw4921qVBWERwC6gLHqyQv1RRPMBDSMSBmEXxqnvJnHq",
  "key31": "5U8SrwpARqgwoAFTWoxuqkxBaSQG8ke8hWG1uDfiM6XsEJDoMFwT2EY6cCbHLsLx2ncc8Y6sa75m6FmWqjkhrsiT",
  "key32": "4hXgzNxiVtuo8UjDyYtCgckZPpRxMGVAcRT28DW2xKo6qRQ23K5gNFyEZYVsXtETWYmUCZXPV11FcARE8YvofbmX",
  "key33": "ZBkmCGcPCLFqQ3LiZrmFLpiGchhiPj2uTd7RjFp7Z1xqSLSENPjbXFK9BGUicWo3E8tRP9a2YaMWRghHeGarse4",
  "key34": "4HJcHZTRQMKuC49Doyr13wdgxHAuqDhzg4c1QF2DSNt4p7vAc9CxUwKN4awRsrKAoPWzngF6k2nCFUbCbpn2vKP6",
  "key35": "5h656XTV8YB92BvqvckAXXRa53hzhzQQ7M2gvRqk2KCNfp4LrVvjMPBCc6gzhhg4ng8gszKeeDujgRZFru3yoGby",
  "key36": "5ZYHimT5jWTaQRuDmJnzuAAXdrufJXiJsApRtzfkWMijSH4S8QHFqN1cRw32ezxS1eMj1UJGJSfEkjpDb7eDfKLH",
  "key37": "49bXZKDVPNenxSAaUM85u7upQCUtB82WgFpGJxEzvhzb14eaBx9aQjTs8e168jDc46iYnMxxwDGFBNzdQGdB5tQo",
  "key38": "58cb836ngnTb3NQs9n2C4L8y8qHSc6csgfZVPHqyBdCsYfCEXEpPjLYZ9evkvnCwMUhCP26EzdUDuuKPQm17sPfL",
  "key39": "3qdrau5wnQoFrGHARVKTfAq5JSqhiTZooL3s9JD6YkimooAtXa3vRnSJt3K2dWW3BFRxpt6bth5ym73d9wMQhDgJ",
  "key40": "P8FfUXxYLrnnkvsAeaKazoexMFBcSVGhHT5VatA7KXQYPV2a8NRPGBHogLqRQSTTevdoksvxVF7ZUwcWF3sgf7v",
  "key41": "3STaoixX2EbrkfTTRnYyHB79hVZfKrNmgwsZexJ29rsyF8FKZ2yJwoBy5MtQrFWFS3qJBHLYf2TWk43nP8y1cfrk",
  "key42": "2NhgbcQqNCV7E15kdHKDgRxT5UL7oW9uRk1q1ESMf9TnD3WhgnWNtoJiLoEojq6i3BjAL2bCvJeKzrFTNfsxTtCG",
  "key43": "4BSU1Yb2ZiZUQdyj8YDjtJc8vHxLuPMSH9CVWrjfizdKRJHm7w4dtGD1ic5W431FPx3VSvMGT6ZkMPZ8tRTa6fZY",
  "key44": "3wnAxCKrnq7qGFJ3eZFYQh8DdRAhE5efMkK3BJkQcwx8C7zwFDMjb3odeAjECD5erU95VLPmFp3m6hNjkTXdgUuH",
  "key45": "3TJFKHwQpWMo2q6HhYFaraFyqGfTo8wMk6GcpvECEiaQJZ5Akw59fsNuAC7s6dUcoiWEhtS3tYfxrBpb197wQgEP",
  "key46": "4QVKFHjBg425Bu42tTfBARhnRzUUoVT1WM8nDazfTN1fsaQs52Z1e6dEpdqwUrB1BQ5RUPveh6QSGvQjCUQVD3LT",
  "key47": "4kjvcyXnd7SiHrE5PArzsUSKkJJdRCr4KDSuRnL2ExRPsBEBQJZD467kjCLF22Pk6Mgx8eRfPCG4jkp6Eq2Zj6s4",
  "key48": "5jpso5Wr6gFsDKzhNDsnnmqz3DtvWC4vvamQuemuHQ8oAMogiu2xsvC9KHNzCztMcWb6QZpBAtUp1wxf1W2bWDRT",
  "key49": "5HHSwvCbKsNCGuwq2jTKcHM6djyZB4E7bucdcLqUJKAabUkZApDb7j5cskkePz8XgwALG1FjivnxmweztpYWBTRV"
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
