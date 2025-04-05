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
    "2zS6oWJSnmQUnvcFES3p3SJTHxKeRHMa2LJoYhzXrsa7B5XwWh9XyDVKPrmjSEC9kbKbsmHhMbetZDhsFH9FycKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tbg3GWznDg16WSpHW199CgE5AZKv8dJSLhK3RZW1pm6F8HV1jCoUBeVxeyPhHw3yEpFhHP9ZWbw7wNBqfAePkA6",
  "key1": "yVT7n21TK4yKh9Yrat9fjm17cscDvyUxswNdn78kNK6SD29TQi1wD3NHKgWjNaikMofrXc9jGCTcyNNhUxDT8UV",
  "key2": "4rxEbja7t1k4izFxAUuDvpr1A8f4EPCR6Fk9sjZA2PQrZXTR7NZ5HLkCikRcLzK7879xTBnPKAXHArx1dmC7rXdR",
  "key3": "gPR1EpPvuWH43pvnU2tC8U8D5UEdtz9FhMByxRZRy9evpBdxCjDpNuUKj5XD91kEKNV2qxeGA9zJQCfvvoNDaTy",
  "key4": "4w7NBnESfjkBuGjtCKk5vnr1XZG3WSHt8twKk2wEKx2GsjCTq3jGPnEkgQDquJJ2kijtJEtdYaEpZ7w3iNjd1r26",
  "key5": "e3e82vDweCCeVC2hfXhWdhraLaRYdtvTkMuBWL3VbJ97kEZAwTM3yy5s4ocKZQz4iykSRQsnEBxn9xuPoA8ZvF9",
  "key6": "63xbgmAtxHHgrvySMzRSgNGw3mks1Rw9WdnQMrjokagHw3pKaZp829wU4vhvYdZuTjGk3LJ7CU2LUjcTie7CPzRP",
  "key7": "5yCsLjGJbHgt8jJn5rzNecTGxBDpig36zUuRjYLyAbxNaXLFC4xoLHzzTGpUnTic2AzZrE9XTyFVui47UTosGncn",
  "key8": "5Vv3p1sWJGszH5KhYCKcUV4Gknemvu5L4UL7idpYHu5rst9UzvjxiaoFJexqBqeN69en9XMEWgoqtXXHwnZYTjBG",
  "key9": "2iSuTW4fUaB8bJo13VoTkNEytBmtsxUVZ17w5xxfmqDiVPGWyVvaKqK92XVVV3nQ8Y6xG4iRFE3Zwy7h74c136at",
  "key10": "3srExSkBY7r8QY2Vs7WvNhFkQcGArdvEPhfCbsnNfyYz7jMj1t3HmiJFtQJL4fniPu7CSWp2pTf7aoXq76MoobBn",
  "key11": "HXHJZhKFDgaFUYdshDLGSkNwNwQKWq63w9opYC3y8Pz6DVaXjULU1dXgasqPRbSCV4vki33VxFcAR8VNFnVZjRh",
  "key12": "23jPTeMTTaHs2GWr8mBe3HrVzMuYdWEQnijoDZbxNqpkTaXJVJJi948fgQ9eLgJpa7GdPhXTEYEptztXtsuRGpPX",
  "key13": "58e1nXsuFEQnbw12uJnLugixcQmmZ5aCabgaMmsMLaD9GkKyikbYHTGhpFSU4QL2S292rbgii94cCmX7kmVyjqdR",
  "key14": "2yAQ2hCVPNXTg9ucZm9wnGjpbNRfzbW6tebJqWcsQy48KdnFCLiFwqpivXnMEmqqFCMKzYZEPiSPAkqBEKtd2ZCd",
  "key15": "5CPzstzSbN3EttAp5dRc46FHwfpZ9nKeJqx4zPcZssC4PYMs8wR8tMFuvWryYy1X2As7esk1jkPBgwg6nvZfWm3t",
  "key16": "3uNYYM33fsY97s3uSMM8UkYBgqGk67YGXXeH4MhDv3PUYzxApSf3vit21rfCkMxLekmsLH9d4BxuWHvydAgEZDNF",
  "key17": "2nBftc7D471binTy8ScAcgS7B7rZD6Ep2PmyUo4QK9xq5GoJ8qL6HDLXsg2gnYZxrinELYfnkoqd7yUfBzKuswbh",
  "key18": "3oXjTW7dhS3ENwxa7haux4zigxh3rKqgaSGAKkoYaPJnLrs5wCLHAz1GioCCG4Y73s711WzHC97hoSNA8D94i1bQ",
  "key19": "3zbYvoQtYDXZEtyDyzTWYEvh4gpBfRfwSHYybTomJTaUhp7jWyYTs2c7CiPBXMASsimB8rsSRoRa7erQJi1VYuMf",
  "key20": "4nfu679uU7Mm5gzJq8GmaVP48ENpgqh2KZ3eho7gsNYEzUpQWQcH6MiavjGrjYFZZFTDNAwGF3w9whtgVe9YXLDk",
  "key21": "4ucnGiSs7QjZxehKBmD1sVbvLYT4HxPwaibXsvTFmMpqTk2DCKpuhL9AMHVSEoZUzaBjmcmThy3Zr9YZbD4WcRsj",
  "key22": "3T2WgVVZugQc8Xn8CumkhdTeE8CniduDv6mcLYS1zC24MKq3ULRqN9DFNVmgtKRUBiivq43X9HMANQ4E3GnikTSS",
  "key23": "3P78u1T77HyPhAY6seJkSfKhHpw8nNVaeYe3PpyxmVJJG6gCg7qR5rcu7HyJ9oykhwpvVDVDwQouhvzrFxWvgUj5",
  "key24": "iqghH2an5Eq9SerKMxWBgcFRJSa42wECcUMizDdeST33QWGvbgiYZSywqzw1hjoLYk8M35oTaScngYA8HBddPm2",
  "key25": "52SZJ1StbfTWDwEPsiBh29kTsannBhyDaxckPFyqcZGfcDDzEvEU4VKejcPeyB7smPJqrmeghU4xvjpbELVcFEmz",
  "key26": "5sLVtBfiyR4uPiMC4iMDNHZj5TTKND57E3eJvafq1wqVHo9b8Bpowo7D3PHVPBuC1qyAfNTLPrVHMuUfxi1tSob5",
  "key27": "2wGNs2TsXdYoGPTrK4rcQ9KxBvy4zAzdTjwxeKuM6KiuNhGaGPDuCY7FSzM4uAaehU8ZRwBRxt1Msn4gPeHE42SQ",
  "key28": "459QetujCvx2CuxZW7v8hUdKdzwu21DRoprJn9YfTNRr4B3Fq1yzAsZLAoiiCxPckZEMTNjh1T3Q6kfcfaV2xrAf",
  "key29": "2BKLENyTdfm4ynBoYbpZSFVFts9jwX9BCPr7hLtNzW92Ff89TGGUndfXz9vybJe3G3j9EHyyheHjQ2hdsXv8FfKR",
  "key30": "3SC3hAUF4KmtJoes3HKWFN8C2yPVnM6CF5q8QP98KoUTaDWoz7fMiXiuS5synwiJCXpkvV7yfm1wKZ1r3MUUW3Ww",
  "key31": "3ruq55kUc4x5np4WCbC9ZSZkr4mhE27b96WuDLKUFeqR6dViDptkHmnijzicexCupsQUZvz73ADVWrg39fvJGCnY",
  "key32": "pFiaX733tL9J17kvq8VBX8g1Ex41yPc8p8PezDbqW669WVTF9VzN2rWbTxr6BzcC7Z6MWHV7xnh8heS4TR1N9my",
  "key33": "xcgmd2iwqckMJEYoE9cydaAKCUn6QCUoFGLMJK3JwpeZ5KHZcMzm4jmUQkMyvaWq5cWiPrmpmYi7zcJRaFnFc3Z",
  "key34": "62LLmkAGWpVdjWsRKnSMag2pVWEM1NNSYrNQKDa9toVAMcLfKWCfLNZDwssD6soP5wd89c4swUFRdJXjcNQVo2gY",
  "key35": "5yHDQH5xsbNzYJZmqih6oLmbkV6NtgE915uHDKjTSrGnMHQSBH6vyK2236y2chGhuMbr73hRARNvkMAvgv67njcw",
  "key36": "4xccGLP9HNo4BFKVELBVKgoob7CFGXrs3pW6D9nCUa4nVLfW6koKUecjSkmtip6mqpLCQri7YJVr53BNPRMdvxix",
  "key37": "3zm58f3PL7taW3jS7X1r9P6t5Uy4rLRJQPJ9bs9w2dbS2oFr74w4NmkDU7u35vd5285gtj2MsmW2UsnEK3U1VxwH",
  "key38": "4RqFwo583LkEiEFEaXgEjjJK9N4XgwfQeojJU1aH69Ur45h6MPN8WuYUpHYt5iKhZbp3XcZYcCwc4LYP93EbSyCw",
  "key39": "32imzQQgQjKippNhLtALd9GNEzT8Wfn67VXfbkP4Vw2eDfV1VgHRdKptsbFqCU6XW6m3syRZuiy59M2Ez9uJ1Guw",
  "key40": "3YUX3ThhZSdxBPryeC23NJJFbjdBRLyjXPjNwaBUZr2DaSrWEbRFm55gCNQhgWnSwUWDbuKxPaBFvU498aT5ezNh"
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
