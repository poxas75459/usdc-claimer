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
    "3MXaEm2LcrgDRhtxuaNNG8cHzKnUFXhUmv5K8ejcCsPHMf515PKtLDcgbFvz636WfRWebbmfZLeSqGzh6uqRCFqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JGETwco9kCrywruVmksS7HtQEqfdje9erkVQxhsZVajqs1yMXKcYoVhNVAFeR6DfHjjaFpHJYLdzbK71yhKgBAt",
  "key1": "5SDaG8LcoZSiKoNdPk3L9qZMQ65dRRsoQ77umFpS6uCtZH6BNRzZLriwqsXhTXwaHC4rNDubqzxpY6QWTtZYdTEo",
  "key2": "2KmYvZ3Fbo43vpArcG94hH6136YRame5a37x9SHUqQdUogubjfNezx4oxAZwyWqij1JRhXPLV7iUvNozH8RNutwn",
  "key3": "4GPGCAbGAaNjtxT22hL7BNAK4a5iRdFy2jjkY8UyfePwNyWKchVpXyRjKW4A3GpabMPyiqJogcxH34faPPo5RfYE",
  "key4": "552pQVJRoWB1oaXQNgfir8eifW2WpY5PKKYtEm35uVEmPiSV8vLcXvWaut2zKZ9b2BLp7nCMMDMeBEgtwy4wSged",
  "key5": "5MqSbnSUnopgw4zD7soqLAuRWyXmq2uxWTLUo4aprX6x4kpqujsgwLFAYr7sVj7onnGd8dcc9mtwAKyuijS3LMk5",
  "key6": "31PmXygAibXJF6hhfks7Lr7qecpLXAMTYTAVVai59nD21CvmoeZG1eUHMC5Yg1Z5M6n9QkMKLZyGWQZVBDr82JaA",
  "key7": "4KBdG4x7qhHXEEyCSgj8MBDpbWXMRuxTCPfarZEkHR3wXafz2MWHeZvA3BoWxU9wKxCSTr4B5XL6Tek7vro8jjtZ",
  "key8": "3PuL9GxVukLXDMdq947iMYQbnYu3ngxpxEc134AtbSNUbDBZEbaf1jZMWdtRb4a2wbQkzpdLskDeFiyEGzrH5NmQ",
  "key9": "dvgZ4bEgPC6J516hjTf79nbTfqMn4gn6174fJWrnvygLEnWNciqJviDSF4q9QWk27bsPtLhbjnTHuBf77aKvBnP",
  "key10": "5wZ5m77accsvaECidS8pGnqbf2rvcD6cKcLnGH2PrWY9Mdn4toap5AiQXbtB3xTEYqpsz6mP6wtEaFsWUzsyVK7p",
  "key11": "4ZcCL19n1grvN3vJ7r95R29wDRSwuVJLgDonhrRGcZmStiSULu7SVRUZgJZfB8MRdGYnV7SSh7Zy9NtUV2tRLhUA",
  "key12": "665YyadDzLp4FDJWa4f6ywQSK1czJjKaHoFTFKXZv9nDgDZUZ3ZRKpxtTagwaGxrJhBWw23HhFmagoUwKBXwC4KT",
  "key13": "3iPbR62FtQydA1ARh695FSWcpuZmCtJ7tomrc4xcaMvNi9vtE7xJjozTUKUhwGeZq8362cPwJvfj3SCyf5P9ENoK",
  "key14": "5hVVPqabVhp46nDDkCY54kz7ZBDk95oiczXoUhR77ZJTHQJKTkxx69LQeNRD4grdWdxnKUUjKT8DnicstG9pTaEy",
  "key15": "2P58oNa3q2jm9T84BzyUH5ctgaFNg4BKJiEmgDg9XuwrsW9JPwRhoTvF1vneT2fbmDsagfGEsWCY8B7nydRDLfCG",
  "key16": "5KUEjpUxxeFuUPLxWdBsTnB138QtAKmEurDyaNZeGiU8aXCTYM8tfAMZQ7LXW3Qeobri6reE2bnh1Zy8qsNM2nR3",
  "key17": "3x5iLcWMEZHxi9BnQpYphkwJ1FF8k526UsXzZVuF6ZXBcAKssKxZp3wevtFHWMCBQhBveC2gGrGdViUmQUXiZ2mK",
  "key18": "dALTSQWpHGhZoiueQ2VPF7h5exxzjYmqkskEJSU1ctzZzL8DwABb3gytDAtWLToFvR4gBQQz13qxr6SssRy3Cuf",
  "key19": "Tp7yD7PJ2AL6cA5x52fHQBcdLSECRkpKohvvUrSv1m3GnMUd3Emdmk3fR7zL6pKiiJya5jtNVGkfEERS7Hfz7KA",
  "key20": "1o8YYBxpRwzSAJFuPxirDe98GcVUY6CBWSCMPXNPpnSfimqZZw1z7V5iLAJNaEjUVDrsF2Bm1WKcqh5TVEVpohs",
  "key21": "EWCrrL7TVa8zEpufLG4X9FSURP5UQNAYy5GJCaJygY43rRro2cr2hMY21SiHH4JaHNoUSJgWH6E7qHQpELUnP8i",
  "key22": "5VUPRbKJqrtZnNA7RfAepWfPGo4b15WNTepgdiGdgcnqGqtp8h9geATjRcUyjZVH7T6XtGeTyNHmxTQFactU71LV",
  "key23": "5g7tEkLUSRXUBmhAtv2fk98eK1hjAyYGBeVYWWXLrwq6j6mkjkBRUk6aEV8ogUg1DEsnEM9tiGWWkbMHaudq5VQW",
  "key24": "e7raDwz6saQjkskD3RvKg4eW69A2T5a16YtuDXBtweZwSE2uvnu28d7nnkQEQZXwLS6GwcAFvECoWbBSC7WF62Y",
  "key25": "2LW6NJjHgjLTEFCutjhs6QTSDwZvPqZGKK7cN8Tkd4EWk4uA1dm3pBwsmsAVhtvoQM29Zz5Sw8pSX5sMTZEDeT79",
  "key26": "2BGp1t8iWu9zfFoZx7hkpisnNeTUc2UMRtH24Dop7f9AHRrzZ1doHPR9Y4zi8xFUHezhcT7FhoPfHtnFopm5RQqu",
  "key27": "3N3CPBhU4WJmxv7nMYen5FsKoPtEtkKzvedWzfiKqLiADCLx8c2CN49YsHXjqNjtTFVMdy3iFAb1mPYGsTvsXXe9",
  "key28": "3syDDHZxUkVJYLLWY1g4PPVbzzmxKUeky2u6GA3eH1iUxesSaFitk5Y88TEZuYfQ2gTSMSTYWrq5UxxXiR78gSNX",
  "key29": "2YJTZ2jUeYfTGWn7zz9HPmqckTuNgPHXHi4d1ve3a3Tfd3weJcWtJ1uLiNcGgcVVwKCWVk4sS9NarxkAEyWup32C",
  "key30": "5QQayE5vohmTPqUxASSaPkVsDQMxVmXcCCneHKKaKiqNNqN17AUkownJPxUKVb19xMm65uB7FQnfsoMokgSK4BDz",
  "key31": "2ffdUKpRcY9u5VD3UWBBhiXmVRZrXKtakj8DcWBJyNfMmBBrQm7jjsxgP71oSDgmibGssa4MtL6gPBePW8Yrg8na"
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
