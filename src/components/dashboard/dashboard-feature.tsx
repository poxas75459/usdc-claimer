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
    "3pKe6DFyohorTSpw3vbEb7VbNGjBykgfTy5shAALERrsuKskrYtYqEgZzPtdmkaT3uZQbe6r2S3XmNppYaBSXRyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "es9kTsYYzZhBvY6MijGVEFBJZBrm3s38R76sYto1Aq1xfj25NMrG33UhPTMxtxFm5vrvyFvkkbL8mnCWaCP7xSN",
  "key1": "DJJe7yVHrbZ2MY4sYBf9kmFEQYBaYpHp5bkK8bfS652bZnyipT6spuFagXpiG7SCrusaW1kV8RrmuJPeSZzRBda",
  "key2": "4uBPp3tb2grXEt7osJ1wAwRWJ7NjBwEB3TBs1Zs8aHCE6jzTZqooeT6MdQEZYmmsBz3TeWNULm1Gr7oYNbkew21s",
  "key3": "65miF9HC5P8Mqh9uXHYCAwQ1zZeXSsp49Ym6Yu5hvThviEPuLw1dKAMHti4jHUWsrMEBXNvFKW3ynKmKu6fKKp1w",
  "key4": "2yF8xCdHeRKbvCXPGcD3axUgmdW8BuT5EierqmFi8U3hFqeRS8mtSRfAD6N7ZctFwHnjiLRyWGqu3uQpbJb2NvbS",
  "key5": "2FvknLKLY4Gx8TxQv1tMvg7EKd9NyYEdduK44Cci2AZBno6o7woT7bSrcQWYiE8ugzQtmdJVr752tbGW3AbWcMJj",
  "key6": "5sgZmyahwBvv39qAb9ricvy3LM9hDqFz7PdfZTGHjcabeEE7V9KGXSjhvydGwBYreTK3SVmLNpZYVJhgqUmF13TH",
  "key7": "2pXMwfmEHY2rWaekzjn34suUNuG66BLC7JDCqDrud5BDqvkFLLEiknyvFr57juayPAAgRd24GDeNx4X6FYpxqHgg",
  "key8": "3s9NPegqpfgpuAB5xk4c8HahX7TM5ALMdocDvBWAH7CTTJQEGmwZzKpKcM2iDrmqXLkMtnE8bej1pt9g4a6cC6VM",
  "key9": "3a4Gei44SAbdyr7ArjRy7iKTXBbHmjDCFiLYNJTjMreCefYWCaNbEbePzsHparUdT4zc8BdvthdvFc9daM9n2Gto",
  "key10": "5hPvofbyvqMMURff83nNtrjBxqqNKXgafgc3Lw1mcEXEdfAo16ZBpeZWtfmvEbuwnciEuRoBkcRPKyj26P9dsSGq",
  "key11": "2h2YrAq5YXPrCQP2MHfP23RTM5VmFRgqYjGTV7w8VyPUR2QZMQ52b2Fo8cG2i7MhF6ymmvhs1gBQhy3Gh6TZLZg3",
  "key12": "UFPYHxn2pvSekr8Ck4mFsgeCeTNEFm3ceT5zQMY3hw5wvyTjeiUc6oHd3fvPN2zSKHSKk8U3tDGx9GfTT4tvqZH",
  "key13": "3fXkxzEN968Snm6eyyrajFJkjdgnz4LujnocREoLWxk84hHpRBzbGHkfS2vAqzMDb2HNZsGzgietViEjWqypFfVN",
  "key14": "gECusvRMVna1ywkZC3vpTakf6xoSLuw8zKWwXrRfrbBV46gtaLxmf4grHmaifyMshuuGzk3naEzG7QvN1Y1emuq",
  "key15": "4no1Khsb692aJMdnCYu4CY1HikjGbHKEbjwYYjNYW14mCsjUH64ktPQUfqv1UFMqiDFyzU8GJguroG3oywv3Y36x",
  "key16": "4CUCWWjpHe8pdu72NiVde4YgkzUqkp4bqx2uLRwNzUdruUDLVFqiDJAR6FrVh7qzTQHwvyGpMUY9cHrabVVYdczM",
  "key17": "3t5USYGdV5W5dborcrxeaZriqGnyLNaejHeg4hb7joDphjfszznCGv7Jbc6rZpxGaFniAVE3eS6UmFtL3YHrSas3",
  "key18": "3as7mArNvvoffmfysts9JatU7cNEnmVZCv1gi2rEC9qBXkHrJwMiiLTkgbuic6nB8oR8r4HjSDdeVaNG2zY2Xohu",
  "key19": "46Q2t4kunk8zdLZR54jmPazUhSTkQhdHJ728D3c1QwWqet8zyFmD6eA3B9vMtzvXdEjdRguPobFxT3htHRLGAqWt",
  "key20": "3Q9D4Zj1oPs5AJhi8ZEsEAFpjcsQzEZMcjUQU7GrotHW6fMuikHKF2zyQG9fTC2sVDKveTKj1wMAd3vC2WQGDtQ2",
  "key21": "3jCuw4R8kJFc8HqDv3UiJxW3JFJ3rxD8GFeg1NvKbjJJjo7A5V6VULM7Wvp1YgwnqA6zCfE6NMZZGJhW86p3T4E7",
  "key22": "3uN5dnghL7jZgUkdsVHxMUfaJsyjdwLHGYD7zoj59dbQJisfM58TURA7yUsRPKBrcJA5DW9bUF8APAiBF1vq5a4m",
  "key23": "hCcqe8WX2SaYn7HDRH3AHCpB1yJMTT7Fazv4Av7ui2kBsCtimCaduqkc4MyhWMJecZrcz3biapMtZZaeK7pUcy7",
  "key24": "5vTmVerPtEaB5cHVpgGLWBYkHL1Z1R3Yij4wCYrPQjhRNJ8izFxj7vdPMpVvW4KoQr5h3rTNtfCeAR2o2dNSeJQM",
  "key25": "2nAEsQSbBkwxyqu1p4M5UcQf54HXSepMyuGhb4yztGBHaX7AKaDAUBgn8azW2x1Hkirx9NDeCPkv8UqQXDRxCCdG",
  "key26": "5kXEZXA3Pd577z6p8GTXY9cP7eG3XPfdXTVWp28xKfXbjAZxZkq72bkH4Ky5N4MGfWN87SDiohv4J3K5GeWdUvAh",
  "key27": "3CjfzHvcAPiqTBNn9VZtQy1ovaeTHWT1C9pMbgwKCuniubUWLKYLYWhX9eQesyP3S7FzMJAaVNpsUnZJAqhABfuc",
  "key28": "2wuqUhG4ASjDirbUEM31thvwNpufCES6nHgs98eAVheWL6SETu5zegovRgcBd6C2ETmuFfVNaWM8wJrb8k4f7vbW",
  "key29": "3uuR4r1b2JS58QauviRgTD1zbDUiHdBnDVGMFPCvfJHotjRTysVTDz9s13eNMZdDdFxaJB62n1qjkjsY4MpocNCq",
  "key30": "AmEuC97NyzH4GLcvyibKFN2gT6DzLjzpLgZsWTm3Dvtcns5W7ighVkDLMnYx6MXAhM4XT1KQsS8arCjHiHnpjm9",
  "key31": "5TyF9CYpH5d1nTV4pskD7vuhgAsxPsmX8RiN2BSYspdYSAU1XvmzKAZaEMUXmw97W8wiShdDgRTHaqXbS47K4Vvy"
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
