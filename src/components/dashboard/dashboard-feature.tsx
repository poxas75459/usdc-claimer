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
    "CPZrSFq3R2GRd95tg2ffFB81iLSsfzQVSMZUhCo338X7YpZnyxV28WSxpJjmiSkiotTEAYc8MMQDwsekQqz1QR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27YH6NsDDzWcaisHJnFP1rbGBQ9PmeDnVZHL7DhUsvGF9UqEVtQpzsJkPQvgJ3ZJFSo5gxkyqX7S395NS8Wd9bpx",
  "key1": "hA9gJz9axQ8HQthCpwN7QVE14sXzjLeJbsgz3XvwCjLv48yhK3W9cprGUDf5qmc94QD96uDtitYg4MfVmnmMR37",
  "key2": "32AyoqPscpzq2AUyadDQLBoa9o4FDBw9AfRYyeDhse9eD2HUVUeDCFJ4NGLfR9VAxDYctoiQRzh1pyXj7Ma1hZDi",
  "key3": "3PYfscdq5YTHSA4wzBinU4jRNVdYPRrkb5k5WUwyxcFGAYiEizFXdVyC6tMqhwjjFwgmrHcXwTH2aoSzNoCjSDQD",
  "key4": "42c6AGQn62kpiKK8Ge93eozpP2JLBw8tMoK8jbC4Vj8SpZqCDYjCep6JrYo2dcxWjKTXDmBea7FhfzbMv3oqx7na",
  "key5": "5gspDzKheCgLRVAm4nAp8H3QMyHQwyX7D3oMr9UYjNtV2PyJe1bbd1qRrAwy5bc6Cm2kPPsKFpQS6ycDdEc4hXfz",
  "key6": "2gDrCndhvFmHgHC5HZMhJoK11f14QJUNLBe9HtJ2D5hQJnPkHWCZCDJiihQU4JhrqdGfK2jHBosAnpHWPmTaZ4Qn",
  "key7": "3sFKd6ii6PDMqWDectZPVihtJZpi7XDcGxKBDAyPLtrhvqefVFiQxQ1NR7xs9k7GLXJBNzLRQDRL4CWZNnhAQ3dZ",
  "key8": "34Pxgm343AHkpUcYukfwG9MTtcmuk1nwhDNaESCpFpPMXtF7UDWsg7UUizSBSm3XtR7okAZkcJFe8Z4xPjJhxyuE",
  "key9": "5TNkJyJPDb6mrKKgyeLZrNL2ELy9EVbXafHacfZ8QzNuvaBdpiAoCRCggtaSPCAhXx6wUVmHt2AT5sUuM1zykeo6",
  "key10": "61zYTbzCGTkVWv19XPoXRHFUPdiBVM1wHM2ksQmFnPA8VjKnfs49tsQ5FC3xvT68A8met5wcbCeF6cALMPgXK6RG",
  "key11": "fXtUZ2DsM9WAP7wP6DPkVW3zC3JeXqgbG1AxPzEMgcCFfvdxvB8Ljz5qbhuW9WeyzkhWUmivDKs8tghHF6PgaPF",
  "key12": "37ZGDQk8vTZH3n6mFx7MNx1HBarn3UbSCyxBB3ThmbCMsDDR3fvuV3BYzKf2MTRn3YXi3h1R5nasm8RxpX96iHup",
  "key13": "4KbCS7HQZyEFQq8C8wATC7pncqyuhJonQsBeFKb7342A6cVipVZRLE5Vwkw5RYPxj8ErDkyBegh4uTbxontHfEVD",
  "key14": "3x8wuRW6oH5Q1uPyuBYLLrRvG8SVYr4RFRinLWyJ7RakjA6vqUE112Bsg1AsUSG8esSHNs3CWZDq43TjvJQeDjwC",
  "key15": "45MofQNbtH4Fyk2DDYaHwD2vuFofd4jWCy3MPBkPwrY8AwaughijZ4V8f7CKerFhBXm8mUXe3QPmGprLhZKG15oW",
  "key16": "4dwW28CoE2qNhaN4qWtjV5WrL1LGuMzy28pMbqBPnLBdUfu4MwRxUihkHGYDRYw8WeW72jZFCMnLqugdTHJ67ZLn",
  "key17": "5jbfi3rrWjGZPeb9HiD1yRCTEZtUa3Lreup8Uv2U4f7sSYTJ11RMQdhFbtrX8MZmqhrFTRJdUXj6NWBjVLCBHzdM",
  "key18": "54LCp9giDuGnnJenh8G3f4SakngXUBu1cYAgqQaPWKrxpfD72BVDDYNMsS3o8wvSXexmMYaRLJN1ibRcgF4W1crr",
  "key19": "5gMnacMh9kjsgvx44XwvMNtyUZC9AsP9EVJEAWq4CzY13weYcFqHKi6Rdum4Z25p1HvorXwMYBZhp7z9VSc4sJtM",
  "key20": "2BUjyGRA48DqNyi3fsimaWNDtzuSXDtqVzvUD5JST9aR8PmteS7Dmo1Eaoqb7dfDaFKxYAnhi84gSjxLUVnvzeYq",
  "key21": "3Rt8QNdqyWZVThqc7mvJ1GL1jfVFomtANRqzNZXqpU8BJr7CfMZ3zQx4Q9oqzaKTuxL9f7TzFv4Qxt8NRejQg17i",
  "key22": "2MW1gBH5BK9aAxooUAJNAYGrifNWiFRqghEVBsZ1Q1gsHSn2JAJDt2XUXDEGknzue9Zgtw3JbWLQD2BxRjHfpv21",
  "key23": "5gn67JDA6bKVPccSxHm5vJ5HgpVpbwMH9jxVu7AGBvjKGgZSxFXPuNcFhkHZs1yHqBfCuSK8zbdMAqWAEkUNjCLH",
  "key24": "4MGpctTUwbETxPLGdombC3XZf287BAUzWyjoXntoaZ5XKgT9DCkUdcqdqaoe4N15zZwwRTxJijX7pqQfYSf3k2nP",
  "key25": "647o6ruWiRVN39AL7BtaJkyKYrH9gvrfoRG3B7DNJHjoh48u77H1dAijfX5r2xXVjWGyHk5TAohZhdmSGHeQhWFD",
  "key26": "3qw4peE4NkPzRuvn3fuyVMDiyetK1VMQmrnBd9tY2aLhkxYLqcdruEKbYP1xw21vGKVRdwsWfdtg7ZwHo2qF9jLP",
  "key27": "2yGsom6nY69CRxaFApvkkkQkS9JYxZb7R5FiZoVR2iLdXUDdmSHu4AVpPQo9RGrpMjVbV3zCVK2G9sRCp6zzRJ34",
  "key28": "WLkogRaJcSTK3wCpeejLezY7Vqew9V3BkNTdBJsxUzrTZEUYZzerJKpaCABzPUjvSuG6i54uQjM1kdhUyU7UVKu",
  "key29": "4h4y4nDKvktLvMdPrfcB3bxKvZPsZ1YcNE6RL51oLTTEyqDTfATNrkyeKiKhXTwiUzzRocLaCs6jLi9KnaokgfdQ",
  "key30": "W1edoVg97wBEJf7TRw3Zp7tNVwTgWT7XyBenauXXgRwXVDGysYxzftbo1fMiGkAQ9LhJFCHE48ioW2aAHrQfNrH",
  "key31": "1DzQPTEJ1PS6zYYiDES7o97yNmNXTQMsjGyS4BWyz5RJqpKHuL92L3ennRZdiLQozU7nJrspRmErnBkoyqUY7cS",
  "key32": "saF2LKW9UKQ317tubRkcvn6N89vgHi2ZfPtmhmCjJRCray47ikKxH5DB7vewdHRPG8RmKSCjXTbEt4AaFthEhjo",
  "key33": "YKY5iE7ahk3v4CwXUGU3iPRESWfEB4rdjquerbLDjbBVpoFowBfeiXF7m5v67xtVxLAWhx3kkJfNLyNTVXWLmEg",
  "key34": "4g2U7NzkyYoKTyLg2KhKtDZWphUt41LZxTayGrR1rH3xosdKFxgFz9MAUWk5TevrUiShZeA364isDmE91v77a5cz"
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
