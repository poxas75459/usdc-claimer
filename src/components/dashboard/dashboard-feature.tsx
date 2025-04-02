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
    "wZ927Y7nLxWF3ZPnTaDZFmMgbFPg66e8NJKhcGNhwP3ZznK5BANkRRfbPzoUBzH8pSifpJjycS2yFxo6RKYnkTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39vRevifSW44NtXUcjwM8eKc59AC27bCorcYTAQZC4nfePSTsvLpcPkE8QtZQZMFgcupbpSueXCktDB84L4f5N1n",
  "key1": "26Ph5m6xA4Kvi3ZsLSHNozL4Z5eVTcSgdesGn2po4XR2q9o4y1pKNzA9w2cHrcGUcxttfEZTWYpJM2iQizCjh9hd",
  "key2": "uSAFwrjrNzj2H1Z1Shtp7skUAWp7Ta6YGJfV3LKGfq2DKHEXStf4nRQALTnaC3zAQLe6qEqU39deqcF7jms9T1r",
  "key3": "5e8hkAGkZYe8sgREKTPLSxPzRBvQMH21sP1VR2DVhb7JyGau86befAbQNSooPXekjUU2adrd6P8TQVaZ3q1zQf6K",
  "key4": "F5ZvqvrKQnmQNGseiNG476CHFZUNViWZWcHFZvFurZ85wzSTyYFUr9qPUfXkykeitPqoUUoqNCd7RxFekW9DXDo",
  "key5": "caPaHcsjre4oDhfcRhB7BMBzz2To7AkaKxALebnBEs2GdDGrLrdcrS1btK1P9DC1jQQzvrxhPkwLPv31RvRXuS4",
  "key6": "5jqwa84PTYN33xyRTJV6T3riTgKkKuo629brbaXcsdDS6AumSUit79mf2bK2reJgiTBCAFmeNyXSJqa6iABC3Sje",
  "key7": "3NWyjaXNVEsCvKuRrZHAfjsUPqmsSnLhTbZm8nzirY5CttB9keTHTD14VVmPmfpJ7JEtHcHkaUYPG1877qouspV3",
  "key8": "4LcVMUSyKtBUgfGZ3Qe4SggF8awMcMxqpqsbwdtN8QBESd5Cb95pBtUjDkW2FzFmRzPzF1DFdnTyxfEjTRg5FDY5",
  "key9": "88wp9rMixUDeNisQc2Pau7haZYKuTQGAiqyMhbuxcFJh1txoAgKB6eASmATbPN4FMd3iTwpELc8yG3i7SsSoUZJ",
  "key10": "4NuThzBUKZERgS8EJXzRzsHtLWRB8NdvzNkYBYj4ZjTYNmesxWVEFarAXTXri3jgYHMYhzCVv22jokcBgQG9Lvfk",
  "key11": "2tDTiSyZAx4DFV5ffP8uupeCPKTHgiDPyxET4xFg1nUGcbajgefpGopoDcihMDJTNCvJurWPESTD2y8sec8HBjwY",
  "key12": "3KDbZXF2pYZWsJFm2BiTYjPD5zkCg7NUFBt31c2Q4epn9TgkVhwHpSdbrkkNUvfqDmQGCmZQBT4uDn3hctosuQv6",
  "key13": "4aDZK9dYHiAuR1Kvt167VocSorrPHhTEtdFr6LgYhjJmpEqjCpiY4vwayrDLjJGPE5XHAW6gSDhVPspLtyGn9EVS",
  "key14": "5jzGTxHcuAjAqaLJEGKN4ytR1jHyHoEZPxu1tsarcg3MxYw2mQ3P6QCdrCGV9T2hhq8iFrDWZV2Si3nthizmnzJ8",
  "key15": "64y9onJNVBPB7qeTeCnvvc6H85K2sBotEaiK9koMo1ZTeCnc6KLBZGff6gYvdmhDZubbZafFTueR3czDyBgKnexg",
  "key16": "2YFeASGa6SUgkbUnQCu63rFYf8c1Fot2SunruxVraXNYAXXHTr29scCjNLQ88McLoKtznoWauWMqpsERFAoprySS",
  "key17": "2YwCbiaTefrDiAPWW9FwibL25vkwnp4RHFGygYqpg3MNgeCcZSLM3kdfoUqttetAT88Mb7FopsAXAaPv4HSUnurS",
  "key18": "5WRBQpJpExNDspQaQKdt8MG9KmA5mkHuWVqoknaw6jDC3F986kKoR3dDigZPF8UQQ8baV9EPDvSccxARohzGQgWQ",
  "key19": "4RiGZofcH9vc8Pav854GNvEQ7GSCFirae56RCvT6fwv6UygqLYmKhhc5wDFVZ2iVrNhysy2iwCZzyPL1WNjQ1wSx",
  "key20": "4TtHEDTwzSSnLpYgtJLMjBXGS7NRtZ8HoAKfUPdpWpVLkYaBg9BM4U6N4t2GhJTEoegh7GZxJjHAjmCtp7QJDR7z",
  "key21": "3iUCzdhdyNjy8Qtmxtp3q3cNLnBHnHCbwKJierGAu25L38uGrXrJZHkbJDiQWU6V7tBTqzqBWtBWAnhV4PDV4EGv",
  "key22": "4PjuF19wq8mPmPXvUchcb3DTMF5bZmxKVJXFLVg6j7WMEiRDfSYchmZjxX5rmJkPmXdKEncVcWWukxLv2vTEDKSp",
  "key23": "5q92VAzhVCmKQyZAhDg7Hwf8WnYTDWmKZGhJNaw8oJdUQ51zGj3yXJCDpD4jfFTHnKiXb6mdaKaAzn4RM9jeQKJS",
  "key24": "5csYUPskaSkG8pgyxG4dXqRE5uPh3U7Gs6AFNUYqJBxqBdKCex11oUkLN84uKh6rLytEorWy4c4M4Jv9588aqMVt",
  "key25": "56g6oG4vLhQuqk6wF5wPpSQGER9Rveyu69YQ9U8MBq1UswDqak9LnoEpztBrQuMM6Nf86Nq3Km2f2TtTm5co919k",
  "key26": "4D4UrdAhYgEifafJqgvKwFyDiz1uoS7RMyGKdarPpU7zNQ44Q8V5TV3okTrMF3p8ZK8xyenJ22x2bNDsH3cMjoto"
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
