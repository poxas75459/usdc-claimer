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
    "3k5dyQm9CgQ7srkzdCMUXEy9mhR812pDzenpfHNLueQ7GsmXMyxwh1T5jeBp8PxaSZaUiZZq2BV7DsxLdVFwfJoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3osUxTrdcbYwHya2WipGtTdaKzm8vLq8jLwM4LedDwLjXApv9pao22m3fG9TC8CJXS9YekoJy3w8hVhhTiLKdfJW",
  "key1": "2Z5MuaRW7wdvALENWcs8YX6LzcXhSMuWDFLcFdYJRHgDfmCUu3zBdE7kVsXjSBzaterhe3rifUSNQXa1QDitE32v",
  "key2": "3b2ik6CAbkWiFekkBKBKLHtHmCrvzqxv7jtp8nfh1tjmKdrndUgP9paqnSqb3sjpGCybK6JmkE9ag7mDWeSQgoPf",
  "key3": "21zHnX4MNoBrHCtiFdatJEE8V19AnqENVEMgMLp6xdJAbSwossAmx99EsiwoScWuuvxTMztLHBGP91Muf4EjmsvN",
  "key4": "HH7Ly8WkFBZd6Ve9EMyw84UHghz1iGKfuzANd45J688KJyvrTKKEfdgpb5wmdKxRjaGbhiLPoZ6c9rdAugqZgyr",
  "key5": "ymoRvv7Ey3wiG1dCfXKjhAn7fY6hWX8BWfnsQruEQ3WHwJtQfdfC3qp4qS5Wj1MzPdet7AQCEz2zW94LHLk4oXL",
  "key6": "3hP1RXBBb1R5aWLgU4Gm6ZDCxdzgyewDMogKhzuefjbr5aeVL7KbYtkfskMFHmJdA6koinXsqac6oMRKdaZKXuY5",
  "key7": "49jXLApaD2BMYF66quLgQfHM42kxo6UX8e4MmHTzU54GCdww7sAqsXtoSdEbjsiD2Zgui6by3xmt2bC4iZdDrhPQ",
  "key8": "5VAtLdhngHv8h1TzU41vxZtVTHnm8s4RHzRJksgiRY7XV73LQevBMKqixbcLrLfT8Bn2R7tEey2skbfPmAMXSUgd",
  "key9": "57DgwqKMYXfnJemJe6hXy7Bk84iovozZs7fV1MBtnzcCAimx12ybpFrYNVfcmdFT155YQ3J8xthFgAEA35ARkLsG",
  "key10": "2f5y65wvfccJJ21tPSeRnCT1QcAH6FKL49x5yhsxZZKGu72aMJVWzVaVmMQnZQR2pNiP21dJyy4GGFfGEm9xrVQh",
  "key11": "2avf58vYQU3d9toMpernUJtq3zbc7QhERKdRNjYKf3r6sMe6B4LzoGF7qoX8pqNcQoovzqTpiEHRb2rWxqQA4tx1",
  "key12": "5AxHQqq6RuUdJTHY55DaHsuJN6qVsuMuA1ZqSLSQpG8iLm9FZVSncstN4noGYHWmAedEz16PAxeYsTpVD65MMUPK",
  "key13": "4TetpGkXHYfnhZFTFxuaQLrkU3RCenxgvifLWLXzuRD8Wh7Chzz8RfvRau2gNBcKEGmLMXDushH9L1ypGwN1dDmj",
  "key14": "4msgXDMfAgNzxowwneBVWbdayV9dnhzUEemx8NFCuxoBbfvwfLv4ptA7JrxtMWUTBvyujTUrd8HykAXPhNoBhhuZ",
  "key15": "672A1f7ZmaRLY2oSrxeVirFA3y6MA36ifp2FMMb3ohpxdVYP3y4CKpPo7nPHizeRP7ZETnW3Lx3rFbWh6CD6GuWf",
  "key16": "2QUSZukmYXrkJ1EfXj8KhdN2FiAF1N5CCnHmiV9ZhhpsCq2FKrjx7RNgjqQPtNENh11qHATtKAhzQwePGsjb4HZz",
  "key17": "2tt8Kk1MvBzLA7RMjFVNyEEW1aTj1kxixLPjng2LoMeK29eYKvtZ17dWLZrZgjRtHkUcsZJx8rPtrW5dHWADr18G",
  "key18": "GaawrfakMCZksB488x47kzJrfenQrZhHK6vFe61YxarGup7nXRuzgHmfSWzQd2hh8C6UdBsyjsuZUKmq7hdVcvP",
  "key19": "2D8Jt2Mh4QmQLT2EDCDARrX13NsE3rNFgAZiJrkCxLd8Y3yWhBBqaum623q9KPeU9fsHD8xtanhnSKtcZX8kwuLB",
  "key20": "3rFkf242SV5mVeopMHZ24sN1VadJZZrYKZiK8t6uSRS8xQmidotKHYNn4PemqNPLCaUkjLvb7YKQbN8ccZy6xgiS",
  "key21": "3WujWwWiQLaSNssvDQRFTo2w5icCfTCufZ2iwAHTHBasxcdgamEV2knFhrb4zjrxJUvAz1XshMUtTZUyBrBMiPLq",
  "key22": "j2N3ouZoX4W15P85xbjBjTvFepud2LNSjRFDPLvSvNeMJD5dAaGLbWGxfVyWuTcXEPREUFPGthWxRN1V11aCRRB",
  "key23": "4JvEmWQkYFtFAmgzYs8CEv4J7ABRkurEm32iY7Lhmt8DWVkGJnLWXmoQmE7oRdLPwkQ46Cc7bDYvy59A2bQWb5Y9",
  "key24": "3oq6ruGfJFxnaby8q1h9yYnjYYy4pdFypBZ3z9122hjKAtgJMxhHMpCMgqJEnTNVA9K77p15nKi7ZtjAVkfQq3EU",
  "key25": "2UXuHVCJnoBDFy9ucKW5MyQAwQGujYWgsEFQDJUiBNw4uoESFLETwUWtuMi5yASuU1btbYYKdi2oAJyV2JXTj1qp",
  "key26": "d9tTPTiTuArU9izpKCcqFTkHF2433HfKc5wbUWvL3hpTx4tgqHX8Kq5TMKqHVwgRZRG1NipD9Wf5HhUgE3caK4F",
  "key27": "4kYmRxhAxYjM9NdNPmyeBinpAJ7cf7hBSWAsvdrqgMtKs61JkNQHaZMrfQvpg3maRF2ZqzgvUAdkxpLo3gD4geh8",
  "key28": "3cMbVxCvVk5gR2zbR2DGCYuatgTL5z8kFL3LLFFBTuUbd3nVu3nHPWLSnZs1VHkZepPEHXwpwNNetmrDKdrJsyJN",
  "key29": "zM4uX6rKKtrGuGsPFs2QrsopwxakBLYTVJWgZSWjcQkfSnN3cU8bb4R7CM4pSu3yThJxwegHgPFrkg1UmFYNcu3",
  "key30": "3P6V7ommch42ipPaQoB2QASyrMVTbW7SNpQhupVrTSSBCmGhvW2EgFpBBU32YPZkdb6arJ4ULPDW9CCcnHdkd5x6",
  "key31": "4v96HfgpMFYftmp1qtCtM2wyjtbCVTbydgGFTCFzzwqXRyJoANMk7VPMnDmfD73PPD1eWgxcQgpVph5ZV5GRZEDs",
  "key32": "4hYqQ9jWuszLoYPFS3k7EGNHeihRZHAUcDj6yBUApmP23jekvcEewQGEKHnNpo17bzue62yj9SJUyTUeCZ9bc1fe",
  "key33": "nf24gMLCptxinu8t4Bdv74LULCzRpbvTLWeGTGnGvquMEELxJMcq2a1VTdwo2QJ2GDCvGXZqfN8TE3T5VYiBawx",
  "key34": "5iKi2DsZD4PV8T9ugxvFnTgvydtyNGG2ojAE9mTY9sYcEbfqQQHgT48LEQdzDrnvHnK7imN8Eu8VB4MYz87iefdU",
  "key35": "4VZRLhniDhnB8LJka6BwYmj93SwJCB1ef3vS6QUs2nag9e7MSuZ9Cse9zZpf79SCAcvDRBsWsY7TtpxGrSftefrS",
  "key36": "2vXLdqjysuFkwLe7YdJn3Y9h2Zed7R7FUzS6rGWMn75VpnudixBVh4VRoZu3zNpnihRiyFiWEgMXSm7eSBSpaZcb",
  "key37": "4hXZJFJES2Di9yBVP4hnxiSHAbhznfCf1DzuYknqNmbCtwoPvHfkGzg5EiamjkiXcrpLKHrda7q8H2bnRC18aJ33",
  "key38": "kU2RxHA1GPcGqF4MzdMCdz17G4xNWru1WoWv45RheinrCnF5KmXxswEFDUKs3bxiUMzZmPhUobZnXkoYsggcNcn"
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
