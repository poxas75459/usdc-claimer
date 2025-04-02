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
    "z6vjPtb5cEkodgGiPaZUX2x1RjhgmAQNea593CFasnZJdZFZSpqsuEovQj3GvL1At8KcTCXVNnaGWptwhHd7GEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cTGSaDCoQ4phwPQc58RiC72kSLbc8NWNvrvRQyoDppGEhPRzSSG9uVTmvWmoT1hvUMKtboqSJhuXRsEWXUnSWg1",
  "key1": "3Sx9uqpaHDntY5gQk4b7mscSKzqbmCccy9YjaE6q5Hi7kTJ2kt6qjLVZ1f6HGUVTrs8U9AJhqAFDz1fAHPK2sxs4",
  "key2": "4tyKyJPqwBwuEWfrZ5wnvp8dZqLef7egwbMTaoSRy4UEZc3KP1stH6NECbP8XidUQGM5pCk9C9EDXgpBwX25bC33",
  "key3": "2LoL2DMzgzV3BzgYsJRfKrhv5jtefnqwmuFMYgh91EPXPHCSMpDaxgwqm8fWQvUT8nxeDGmD9cn5kTUboQy1EcwB",
  "key4": "4G9FPqVNWKA2djMkasW1EJCF4FzYRDHkgXyJNtSebEQiUpmKtsaxzj9RjSpLgeA3nWivZqPZH15AYMNCmyxkgMxb",
  "key5": "4D8moBVZQNjRjMmHR9C9HqEGAVYwCWqVh34m5qyjnxSyhP7QwYbuk8CWNAxje2gDN7odsHwbdEXL6MUQA5nbgXSW",
  "key6": "2JPaNPBoWF1NNSFXN1AMt3weAk9rwo34XoKipatcKfBAR6RWVvBoEn4ynMmNMs4TBpNKMzUdsRk4TVsM144h7jmV",
  "key7": "3Xn7KRE5snsNHULzC91cfU43Mqc7ptZPYrpMmzevVu1rmX7Si1JG8VkgEGY7GHsJyoJ5TVsFuCqcSS1AfrZe96TT",
  "key8": "3LBUdGHwGUbpRZ4NwhhZeCMRA5twK5LivQXaZ9dysLpGccsYYCSC8sPv1QPj1K5ribvVN8focc9iConmTpKb65ez",
  "key9": "4VQzHqmeD3i4PCLpJPSGE1kJLAWwb1LurQZ2tarqwRHntAQobWfznohVXsFK7mPfPSPgMgrtf84JMnNJ8Fkc6vYN",
  "key10": "2rcS5WZfNUtDTPtsTWgtAJvDR1ogJ4dmwHq57LvARjGduzm5HYaHw3qJkHQMGaWbjC9HAZZBfmPxZCfbEttAXRAN",
  "key11": "2u8iVFCtDZno4fjmRfe3WZhGGkrNw4izSMg1eoUatP3AdFDceDtstq8HYNNdkc7WAjH5Y9nfhAfLeP3ZFoQ5biua",
  "key12": "2wSJwb4YVSY8h7SJPo7M3TUV94Pzjm27Kev41wd16EpSuNnucodswqywFrHfTvLq93p8Q8bzy4bAFm5gkfkyphGK",
  "key13": "2UocVBeaUsoXSJcz5zLoRQ7H24jtZKD5SbdCctBWWUVV3a3oP8HpZ4j1A343WXAiM8EXqE8gmPXAf64c8s2nGTGa",
  "key14": "65eqRPP2Vp7qgyXhkB3mokGVS79HdPCDrPcAU4qSdF3sb6LJnMTPrzYLFvy5qbDpTPJaH6ts5zyRsfc1Pptn3ojy",
  "key15": "3JLQdEVxXdJo6cqe2ukB9PPMMx59d7B5vqTYh4fHxEXoHweSL6daWoxFLwoQtEebTHipX7JZEkkNkaT3htr2tmPz",
  "key16": "2YaZ1LzWpp64CBVySinw3Ha6McnbMCqvFTxXAjizcMZwikRXEpfFASTD5ZgLdhTno35SoyNw4zLoHW3zJbgNmy3U",
  "key17": "F1GBX2LeVMgfqoXRvU7z7kLEKND5V5Q8pkMg3WzMn7gcJTXDt5bN1RM7igqfCvWxdTvLdrcZGnrQCFAxaQ4j7KY",
  "key18": "276x4s4SepP375sj2gBHy2J7ZLsGNwsZsyoHNSp3VX71tqwMaWqk1h1NgFcTp5WUQPfyWaxMfkiHAtye9jL6jv35",
  "key19": "KjwayHzVqQfF1g78MZ9h3wx3fuAaKDc4TrS8PQZXWZbD1UjDhv6RJt1WV6UnR7GY6UFnvtvQiBccN6LV2JC4BwQ",
  "key20": "5FuhksbaVhTeqK86rdi9LraqgYzkd5WRBtwixiF7fQGtZKuz2Kfd3c86PKmN6yADS6T5CUKxKxZbciRRqsScfbJW",
  "key21": "2KVtq3krw5yt9Mk1XJcuVQUCDHFgHrvKcJ5dbpwTWe3XWjqoUzbfD7mT8VezhgWyHpV8T5S9cw3gYUkVA9a6mTbZ",
  "key22": "5y4DMCqjxNJieFuPM4Q1BvpPJTVBk17BMi9WcciQJDFKEZBtUiZoD8L6AnQcrrTSQGyEXhn2mUhsCj1DBD2VTYMt",
  "key23": "5SqD4DkPAXBAzK4SmBFq4mhvEUvCKLWfWCZTk5GheqD67XQvy8HapvzpuY6TS5qQBdv52jUVhquEdwRRfYMrSf3H",
  "key24": "74rmbBBCGYtVxPgUQM2XGF7rc68gnmuuYL3AKhg37wgn7gqo18PsG2w9cj1admUfNkXK4Ko4nGE3YJW9Mp9vN2W",
  "key25": "3XNKwxmrESygREVk8r8ynRJsQP6M221QoNwVzvoL4viM7QgrrgWnJtWUwEt7ZhFJY8jyX4VGzwvF4zjNbd5K1XBd",
  "key26": "5V3xXPRtLSvaZjskbJNrnnXLbf2TW9tLbZz6ViRTa9AC7tH2tiHtMDRowS1eKuuD4LyhNpwbJPzXBSGWURBKWa9k",
  "key27": "5bk55th4xGFA5C69eJEK1hGZ89mTbPtxzS98JsacMJ8YXEWtPV4ActkjsT2ZQAQcXwJepvZusDLnf2zThKSGisqm",
  "key28": "37qgbomKkiiYaarqD5WGtCfCGU1rZa1PZ9KUicSgCEP5biEUdFkzrx22EPVkRH4mtzNKLrvLzY6ffP672TXvmMPr",
  "key29": "2a5M9HFqbfMp4XtD1P465Qy6h7dXYuwR2gEM84YEuN6L76XAZu9fBTdkuH9hVYbQA6GNXjohAgb8GmrAbZSCAGjM",
  "key30": "ov9h2PNHjMidvPEGs6LPPbgXNYQE2s6ddyS7mRMumaGU66NFum9tkxpL7iqQuDu6bfVdxzaibbw7BXprzdfdtdq",
  "key31": "66j4ZcJDMAq14zGjisejgcWttGFkhj2Su7djeVxEc13YkLXntbRgLwSHSH2byfd4wfchvyVnXZhBa3WUYsiAKEkM",
  "key32": "5b7VB8cpGUUtcoPca5cEsrFQPpDxJxbKiiRhS4iCgP7c7SjSXzax2sjBRNNuAd93EgyKvTy6ktZcDoxd6bTeLPvi",
  "key33": "5VLvoT3iu3W5iaEvKRU6dYjjdD2vg2cuUyA5CR4Ust88A1vUYDrUs8GtTspS9AgrC1h3KyXbhJvZnKboTxieyuMs"
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
