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
    "4PEsZmDGY6siz4dSdgArgVGeH8cQRD8Q2M1EkscLH5AwFhbZp9tcRXRiNLFfeRS78PEz7kx6jFgVKxKv9SNRsU1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b9AJY6HvHAfQZ3RTjmXbfKkLjixjs8YCYFsx3dPgMBsYYiZPwaxvFucTVQ6M4akSDPMidPe4F8hCb1nhATNQgmg",
  "key1": "2LAuPgvW8ymyXo9P3oxCk3WxdMu7q3GBiez2yq9m8wqErtEkjkyiR8CdxJEVTVuz6SvKe2ALmgCmdaRHPvcH1h1w",
  "key2": "2qTFyseVvHL6qu9WnnwUm5KQ6GfxkC8NsfrRkqQj6EUWn3Nsq3EPwJgrWL1cm81yhqSaDWYr1JtRcd91RdhMq74a",
  "key3": "4ZrdqLxGTsGnan73dVLAAfMb6MDAMP5XubEnmsbmGoHytgXihLvYUWuFuoQZETCufi2e64yAybPTnbB8qzJ7je5s",
  "key4": "2Tabe4Qxf5VqoG2V8ZXLez7BR6bhG6ei17pgwcXjKtBhoDKKfVm4B1qjpLNvwd9sAXUdouazgWsQR6vD9PEsmyZD",
  "key5": "4Z3bsNPjg6Nu3Lffcg5Q5B1csQLCxEhdyYAHdRqAPXwhh8jjcMm6QMrs5QFfF95J7EmyzcJHefUGM6HiD2fhawK3",
  "key6": "22qQSqAhsahfmygtYbindxBzs1B2kCxFUuiM7ALS2f27hZso91ynk3CeT7dJysmS9xii5FtaA1o7qwsWoaosrVdj",
  "key7": "2VTREBaDFgvZDZdoeZH8PjE5AWgmW6pVqVpUbYevpCA3PFqLkow6f2tVtHbKJtTdPpRDEmnz1bA2r8hq31XtLwEZ",
  "key8": "4w4F47Wtrq95A9cNNrnCL6zc3fgZFEWBJ78JyMfYvyKDnjU6do1zPw3XaP9sEQXLmaNnsinff3PQ6GznpMZD2Ma8",
  "key9": "3sEosg5djFnqvuHH6AtcB9Mb6JQaYBvxgiqWBeLmrKmFbgB5QidyweFCbjgn9dYAaYVh6ixVLwJTHmvnEBTKUauH",
  "key10": "57JAdHZkF6yq6y5UrcJXcVU3WFBsFeUFJzRCRnGTGHyjMcig5jbHhXvyaZoG828SL5CGvpBxddVtq8wQsc8g8VLw",
  "key11": "2dDTrW23Esd4eF6RRg1hKQKnjBAKhuVQD1VHT4TJHiYE35z7LPWvk17dnmGxwR9ugPEftjGZy7gxNwBdazkfQi7P",
  "key12": "4j7qdXhhSAuXRvPe4yrAFDhC9Q66gJmhDvJiavnkv3th9HgQPR3WUYaaASLJuhGDQ98n4SZomAes5reoRNr4DGzq",
  "key13": "5gRruLDJR7GPQsrSJ9GnBBLtthpEby5pBrhrzL8ixUyi1moWAk9YoQP2E3U4kZvNUbcqbxs2j7hWM188ynf3fwXk",
  "key14": "49CZAJMPhNit8QFmEPXcTvjFj3VhDNvZS7pwYzH1f7udn3K7o4JXWja9W6b5FRWQKgx1a6SuM11XXiGZkgxJHkWj",
  "key15": "4YWmP1iZSU6vJVBMxViJiTYNkbdgrr1NQJi2MzWtxrQSDFL7uQNQk3khCwa2LXxDav9dLsLb9Bsufg6jz59iydq8",
  "key16": "2uRgCkY4X7gtGEhXAQ1CYDihBCC3MUH5EpmcxMA2FsyZU39NHNWkCjGN3Ao4A1QhMKaURBBqgsVVBd6WcwhdqtLZ",
  "key17": "UPVGWajjWH1QCELxit4k3YA5p1UW9FFBk7TtVJ1aEPk8FW3NBJbqjSm2BsdLRhKMaCoQaqL6McBMEVZBLjByS37",
  "key18": "4dv4L5Gr2vrnCaSamJ5A39drSyeK1de39HsJoG6MkdpCGQnRb8JNjpEtJZ445abhHGAZjzUYXrD46Wr2T9k5r1ZV",
  "key19": "3PcTfJLqKUjUchny4GAZtTUCqqnXPAXG2s97bnF88EZeNq2QNyntXrHnukcSqgBo6weXWg23UeEXrTEprkw2pCV3",
  "key20": "ZcBmd9r9zq3dRjHh8rRSQC4pEqUNbYSezo9VfhgvwB3sdBywXGnk897XcYoHyKXnxWtk2uHMMBdfeUrF9Ui6Nja",
  "key21": "xCxTvGHBmYQAXBYD5RbPzrtJuSZmQwo4kmqeH43NTmPCSDwKy4BiRwMRY21ZXFoWgtB2VzpTUbeNkbXT6sM9kWL",
  "key22": "3ZcNELo6tFh1yogdixDhTJAW7LLmYzTgiJuYkxm93xDtEm7HQta7yDb8Ca2KvGsVaisGZxRLEwY4G97kRm9j9c1n",
  "key23": "2JrvEDR89LG21wgQK6JhjSEHoWv9TuzfCJTU2EHMa6HpGpW2A6oybqHXromatCNYnPf8FyY314nJy1QaXRGeyt6j",
  "key24": "zGYnQjHD9PbsFLJLTbBUETuYEr3hAECG8ANGwT1xSpqhjjbnQFxUBan5R7Zozo2i8K9ShAanf9Rw4Gr5GKHcHSy",
  "key25": "5ViwBnns6xS6AX9dnASrXJUTJHGJX5wScxkoXmwoFcW6f6MU3bkb8JokvERhHkq4LKr4TvifPw7fMrtvbp8FShER",
  "key26": "5cJYjbH5Xy1dySnayhZiPuPBtktSezV8gueX7WehExo6Me8TtdUGRbmTSS1kLVtnbgQHSBsjHLiwNy8eZcpA8iFz",
  "key27": "1rp2zUchxjztuDAG1bzFkfxEgMEfPJDpgk8XLEMt5TKUYZNoacYSUZqV72xy157Lpagq43ML34GV32VaxbX9jGG",
  "key28": "3XHZoeMPZXMYgDAkEHmrVpSXsygzN9YRsgZmGTrrwTbTEyc9DY6HfvAnp31ff1MbnYeTWqQ6cEWeya3AjVWvQCaX",
  "key29": "49Jmvmj3x8q4Tmj3Hw82imxRindfzhygcNH5U6B3Hg4eUVnWUAH8ZijQ6HuBTcK39Kp8Yu2HFQoVti4fpYdH2scv",
  "key30": "5XaWgfdPgiDux6P4iXQ949kDssicerjVx6xzFfuTkSbSvUQvFUsegrkecS29AJ5X8sX8Wq4ze5XUW7LB1FUUMGNV"
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
