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
    "66NtwJaGNF4WYk1pmdzuXsj5543tXvT2C5UbZGhWHKJsgLxJbSA3QqFz58M1AmZHaTPwu8QcdMCJYamdVGcZxUuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oy5x53qhwf6hdzP6BpRGRN493mPtBk5fCbmAwb51i6txei1Bqf8m9YsvkqbNmEAhSBmD33zqYfNAu5yXoDPJDXY",
  "key1": "51G1MiJigCTVfBA4SLZAvxbTFz8vJFFD8ehFLMuZgxzx6YTgKfJvwpp8d8dh6vLcxX48ttYYotktAK4oRFvLvvNU",
  "key2": "5XZs4xrDXFTGkEiWNJRUThtBXBZhokLKjev8H65PLBiRphPpfBBssi1YPnuSyxswh4mFwoFufHqj5yv8jxiA1cMt",
  "key3": "3BatioMGAt2VaziQpBaG232HCyzMV9131gP9knmdFfFytT2kYsz2MQYumHixwx8FvTDCvWBAZXgyNiZwNVBQ3F7R",
  "key4": "4B4S4guUGTj3Spv7igeUCvrz9Hnig6XbnU1nZqVqAMU5QbN65xxHXdUxG5jL3iKBTbBpmA3FTHkA7aLoYszgVfyN",
  "key5": "3jWLXGPG449f8tN4RisfRK4GJ4YSaWWUDWx6BWkrzGQukbZ5M5jaYhQwLZCY33qsvwmDJdz4NH3XjC6MQBrtcoVa",
  "key6": "4VSUyiusFmG5aaZUXuhedU6oT3f6qBCVhA7impAWsP8w6VXtBKUAmvkUvWcrT22Rf6SJLwNkgJqkvpQuZKCGrLwD",
  "key7": "3hMCrj5HfWWqvaQWpmkUpqah4SajgDA6yXzf4fY5pFFaBmDGK3akU2YiL512zLUYpP2DQyQRjt3tPCLM1rBHPn8H",
  "key8": "53APEad9mfvyrbe33QMzrY7uCU6tDcnyC6CMrYcgi8hV6YzFfBcfZwjHS8yYda4r2TGma5SP6B4VPVDtoA23Yo88",
  "key9": "4Z3FdvDB8kdgumhmXvRLG1VAY42TVC3Xe1cyQq4N9eUsMNCPg5p3fPv1TiXTeRUJ35kpnut2gYH79aKMfZdA4DFB",
  "key10": "bGCkN1dgYDDDb6Y8TCcBU81NKNsV6fdoPGbDkVZtAs5sqd14ZhC9tVuRxms4E19iA61DVBDdAUbomgK1JbTBAck",
  "key11": "64VobzDRdKNmSkj5rPfNwAnxfwDDdza4D8gfsVYMBksw52GR4tzJzrdnP64kiVQJdxV944Ft7iMnJPDiDwvS6aVa",
  "key12": "371cnFn2P5QVqeNMRFYn8FzwRyVsV9BsrWNBjvk7xFJwPnCb4rvKCLJCNjXLNnSV8upN5HoTT2iXU81M9vcXU25t",
  "key13": "3TmmXb9BiUByxjWDWYEqxcFM2b3TQJtc88cexo43XrU7jQsZQVcquVj6QX5rcoaCWEUQKHDVxYJBszUpkcLB4rdk",
  "key14": "xcfxXrAQFPcoCiYhuHCBWyNS8d7QSezBM48V8dM1ZqRbEFixWSpARfTWtdBd7D5MYaULc9rPzjGndWmgohGrQuZ",
  "key15": "3na9PNvHWVsSwvXdggAgDh6g6v444HnYW4yJvVWZ5jJGEwdr8H4b3SJW6omqyk7dAESTiM8pEfhfLWB1nMCwS2vz",
  "key16": "2NNjGxidCYoKLcoi1tA6Um4Gb1nPacSCcqM7t9uouuYgRmgiw8ZyG52G7Qcx5bTpc3YCFjMEDdNmgsVMQ2jR4L41",
  "key17": "24LhPz8MtVq6EDUgiH64ghpBN3pj2e18UFPzDY48GKECkgJpVgUwzYz8P6vDXKuXy3nLcj3tNUXeBxeKsEetyeht",
  "key18": "ZekTKq6GURX2TfMD5HAfBaDQMBNmtf7Ax1tgHqqGxGWGcRujkVwDELx7cyTYSwiQZYo6UsNpCJ5TAojac66oJza",
  "key19": "aMai5ENtq1dWD99VFhTyqFSghEu8Hxszddue4bT1WjM6KxRwW5wcrinGZDXLWTg3EiZnUjqXYDZxDdYHiYUifnd",
  "key20": "2XbeoHeYtNgoqWgU7VY4XAeVUvsTQMrxUbLuwTL1baesWd2aY6X4U5xmAMVas4gnJDWP5Z8ZseNQ1wkV9D1q18Sd",
  "key21": "3oc7RtxfUZ8qmS2eCN85wGrpKGwq9UqDM7NVJWGFXYsKyGd6QrABCVc61FL5LjbckKuRFXQ9cxeBvdLriYignWRR",
  "key22": "zg3KaSa2Ru5AseHpe3becF35suFNxi23qdzXJTTc4RPh6jUmofBPxHc1EC5zdmKuEF3vijZXKUpNjM51dF1FZcV",
  "key23": "55eNdUfzN4tqASdVaSZWyepPMLbRzVX1Xf5jdoTQ34NYcEBNosyatPMw3Yb2PPVeVdpzrnYMbXxk9zdrCxCLpAEh",
  "key24": "2pYvZ3forZoXF5E6VdBnhqUxqt9wCU8j5EqJ865h3cCGKybHtgtRn8TfBnVGfJVe4KNrW4na8XZfkLfp41Jv6Fs",
  "key25": "44kaUsGz1KZbyA3bFwmsrseXp7HBqWyT6RqJNLJ1ECEKkapRiqPJbtF1axhdZpRCrzWsHzhVS5LJ7CzwpUvzTCiN",
  "key26": "2yt7CsWioN7b2sJwEVVzEhZtrtocXjMTXij3emUz2jcbGeigpgQiZMpDqDSw2dNzd1MoedbyozXPgaR9WQGmrLXs",
  "key27": "3gu7a5rz6aNEMfEk6Bf7oSYYHNtGqgHQMFh23oeNE1JVYbuSjttZnbuGhmPoptgEU96A3Jfk74pQErQQBnGbPE86",
  "key28": "4JdrRTpKhP2KpiXR8AWW96mrgGWuy3amng4NXMNMR7oRFKRf5wScQaPDBrqhxQMAARg3EsmpAkPLtaZbEi1Qnh3B",
  "key29": "51HTcS8LbBVqNKMc1m4mcjMpVYoz7CT7wHiJCcAVc6dooKAfTndau4NrAnMvg58Y9JJhdU9vhfhzQUiBqwsLKmix",
  "key30": "2aUuKC66gtkrqq3QCxTii1x5MVyCZNMnnkyKr6C5afkzrq4ctvFJx3Sh6YkcgiVwTBiVbe57j8f3c9t2yetMPouS",
  "key31": "4XjS8wPDctvAMYjKoomu3QgBA5QsxPtAMgj6yaTrLgv2bpsgqSK4LkkHMgiPd1MF7fD4fwcdFR7vPvg4zHt2UDZo",
  "key32": "3JByMrUqL8GgbXmtnZwUN4ynSkXPHfxYQVqQEbnhSLyHcNv49JkDLwTJTAeeJRnjMcZ9r9qRK2uGBbvJz3rqRC3s",
  "key33": "cHFqG38vWDbmx72s5kebUJbpSwsq3qV4X4wQwgKyEeRWEZHVsHD6pUep3aoudB6egaQU6KS5ygBTXW6RiH1vz3s",
  "key34": "4fd7fFpEcR9Ez5RXb7SYkKpYShqhMGnRJzYPUwNtG4qAQuzLyKxV7yLCYBibaYdNVftHaxVNriDyrz9DGwimTb1f",
  "key35": "5TESN2aQtBkrhnoULby6a2uGeATULJdjti1KLzm8eUEZkyHK4jW4v7nDV565yJcR1UMTLk78mNhjphdAxWZFzqGA"
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
