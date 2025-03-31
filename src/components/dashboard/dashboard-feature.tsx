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
    "2v68RQTzgZU94qHoht7ghzT18v8j86eq6cJzGZ3PbHZH9JGCtVPCiiRqez1abomNvQjh1c4vBdSj3JmhDzeq4Cph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YtPQkkPQcFGEhgkujEE2FT76HzTE8gYpmmyzk7gbqSFSPAfmNeZbZk7rXVeBHnYsVxoUuwX1NcQdfL84Jf4BZ8N",
  "key1": "5SnFkFUtA9B4ocvmA6cq5ZQKicCGjGriPM3rU47BXB4XwnwCavjvjB75nxnYCf85jLqSxiZhwMFT9N22vkATG7Yi",
  "key2": "24LkvFVVMn5BPzzfc2TB6dpYP6w8KE7GiZ6YhwPiz1CzBha2pTWpfKWNnq4VebZR2wAzXE3VRauxc4bRuSiR27vq",
  "key3": "3EytXtxoLr4H4UoPyUH2ZF57TNHyxEKaNxqi96xnyksPj8P9WNdAFvRy3SBgMLdXvnrsXiK8g6oTEHuQSvEy7fqU",
  "key4": "5EoGVCEPuAa9pZdskPbaJnoNWoyUp4WHFGhUwPFUya6neVbQntSMSDaRBFKhufB7r4CjEKHgrnd7UFA7eTqCPMSP",
  "key5": "5aFxHQKuVPyymH6FzDAUGn52oDcSGWgwRHYXFyiVEE7hemkxzWdqDMPMQYEJFNRkghjvK94SarkgaFMFyKqroicF",
  "key6": "41KXBdoPXFuiJXV6oJHgu9svamqzPVJs4qu1hnWvvY2uukUBjmjRio6troJaeZhNxDc9pBaH2p4chwXB18HW3tcL",
  "key7": "4EHHgxf4CeSWu1CbQ3hGLjg9hAHCybnBb6riVu7W56VNTCZVD6FvbV14Fk1gQtBWAXm1jh1HE3LeABNDwh4pF3yn",
  "key8": "2LXgBjf5pS1JaCGRZ5dWD9S2QMHH2K7CvVMzjzcp1zbaPdJsqvFLNqaduRtjp9Gq8PsJxvXHesd7dJZq3jjWWrit",
  "key9": "4iHEtH9GTL5gTZw6CFXPjaiYY9W1k4ZJ5AEgaVjipTBBfjWEQanmmi53wHgEHm3wtgV9vBoM358eZVzMGATWuszG",
  "key10": "26JFTjpqvXHZ7QS6dDctSH4QtiYfnkZACdJn5ABW4SiQgnLcPFVhtqiL7oUbcCi7uUQwinCsyEbaGXKCAAEAL7be",
  "key11": "5JRAPraxeK3ngFrdYaeCq5hwgLUPipPHNTfAXvTvvNJMwT4uZ5kDgFcVfSyTDTTB79Cb3oLkAV9SDu8mrEkrQsbw",
  "key12": "XAwng8QUJDK6ffbkvJn6Aub9h3fuJDRh8667GNMCJCzFckK8tkXEG3TSL6j5kjQap41MhH9duLPFFV964Z1VnCa",
  "key13": "4s7BQyVA4XbFipY59mwrwMmjP9sEPfCaHAfRnPNtJhMRwTdGcK4HBfHMF4zrnBEpj8P3SShq15XVha7gBePhBmaG",
  "key14": "6knsfXdPX1B3EP6UbwuDxLhqNAV4t8urM16RNg3rYYc23VZdiPyntSnApxrJpi8VoJeqfkUmeVyUfzaQ1d6FRg7",
  "key15": "5pLqi8hbQQXc7wKc9knQandYmGNTZYxT3TbxhtGkv8BcpMbbag6dDZMZmXtZZ7PP8Kx2sASQrUy4M2teGMsQo4ff",
  "key16": "4MPEY2aeE3RL2UmP2DdJQ3s4E9mpMFvc689KEgzym1eMzhKduk12FRxUqoUDFYizPAeimrFMCfFqfmcReW9TQa2K",
  "key17": "4zHgKbbkPxfeceQrYf7X5egkTgdZhHP1CBSajL1qWCJnfKhZu8h6zv794gPRMztsPw3azcWreFwzDN1tgVXiDthp",
  "key18": "372zW3pg1Utb5FkDt9nisuhzPjGS6oLfoS8eGzJ8tgousLVc3H7NNPhChXeQr9N9qtqHqMCHJ6UNZYSstKfMzQoM",
  "key19": "4KYP3ssQMbxHBa9vBammdT6hRrKLXcjdvRRvci4KtPHqeNKhYqiNeJhwbxLhtzVPmzi1RF5daNpirxL8Qqceb2St",
  "key20": "2YP9UuhECdAtc9HXHa3qtcjLKvNZS2kmmj2ScRn3jN1j8xQPySbcqzZan76VBmmTbRKrYF2JBZ1KLpPAZpbkzgHF",
  "key21": "3XsJmgAYx6ZPSEvVv7s8pXiPQXBAjoih5Mn2ZSkRom8ktSXefBxU92nsC9ErfzfwHMuRjDZtdgjxC43ttzizrcG1",
  "key22": "2dnqhTREusYnNEPH9WsiPZt3zQ2jrNe3xcJxGkHASS1t3FbXWWD8DyUbXpQtgGad7hDNq8R4MgJZ1YnJyz8iL33v",
  "key23": "T5vuJT3MdHywXLe7yeCaiDR1KDtPWj65qgpexLaZp1ZmqxaAWodd7ggWNVknfUYgxxcMHciXSd3CMTHgzojdg6i",
  "key24": "52SzQQsok6RfMLa6LMMaE8uEhAAxR9Lhrc7nfZoNUHAWBXhNmky7cM1RR1MMEskw7nV8XcNgfipXYJF4RAUDXTeS",
  "key25": "27VZhyz24buS7J56YdqWVG8EN72JAAEraTTcbPeuM31pwde8eRGM7Wj4ZKjMx9DpKsk2FXeuLY1UWkvRvjDBQJ2n",
  "key26": "2W95daEMFDqMPDYzk1yCkQS4dQsKnvYt5oWHnDzXEssbq5j1tkvZSpLcdMjKFkabgFixy6nbVRy1GKHhUPCYRJvX",
  "key27": "2rhwTtwAhrLjxViUzKbZnQSaV3sxYHJSFJpMiK4uVWeeeBBZj7UhQhFSME3qejq8oafHnJXSwyLdfzbPuCvVGpxW",
  "key28": "3qNs3VnpqSfqLphLZsTA8ALDL86eQhyVomHRrFqh1P4qHUMapu15LmZ9iCKpWNQ3oWdyM6aKfWeb7639fXK1VKRi",
  "key29": "2A7P8yZjf4FquSKeU1fufUQr7XBbBz223iB3rNWi1pXMEBS3BPGGpFp2uRfhmP7FPgER1FzvV9N4GemodUBarCzt",
  "key30": "7FKH66qVUxycpygWA9yBmiwEGEHAVb1gNZXaJzeQfsjjJDRehsUBr5UoUgLWNPzaZEhm31sSxEp5QQ2vMR1iEQx",
  "key31": "5VWbH8A4SGHJhx3hCLf5qwJnjYai6RsN9iL2rktrZhjvz1aWVsVfmqUJYQy52jDYGJLpMpDPNNE1YAJkyde5bB8u",
  "key32": "4fm3NH6YMik5Yhk64KDN7pGwPiz3v7PpeF4Pu4VNNHDnCSwD2HNcdCvafwgzYzR9hrUTfWCge6DK6zVmN7zde2va",
  "key33": "FhUDeZpMXeWoiqkUNd6coUfgc7pDkEHNV6ZKvgkDJe4HFb5UXyM6oGWhACMg5i5NNCLvzvQER9dkDavZ9QmpAnc",
  "key34": "5ED642CsVEx1mdmkMiXggvWnrZpkxEgE9CgnLkccfzrEai3aSpg6WTHjPWfoJVsFu19SeV37nBVxaDQbqcp6sMtG",
  "key35": "2qziqAJr9gnmqRqp5h4puYJ9L3HWZY7mdNpVdiBFFipu2icSxzs6L1mGq6FAUxxQkA919oyexniXRpDck5rhqZGF"
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
