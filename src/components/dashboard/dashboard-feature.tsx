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
    "4koRMbjhaf1SdPgJQmSMML5D59HZompXomdLc6tiV1aBY9a1C4jUSJTS4GsdzcEULtixenGupvKi3BsywQQNBbqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UX1EQ8trkxdGkxMjVecKDzmuqxosBoxUtdiRL6HKsjNUTaXu3bz6PrY9FQ8ZcoD1o7oH1Q7FcnvrhqMqyxPkeRr",
  "key1": "29mamE3tDux76Z7dv9TGdsiMeDZ3jVxorzo8UMeCDHAgHpjrL5rKemuumHSGbFzpAv5Sb1Fb3suPR7a14HdHbfYT",
  "key2": "CwfButw4G3h8jGzHrbLd5Zg3gjGeZoTW3TsezUMozw6LT1yj2j61JHdyH4mUUuUJXGhSC3MpAMDQ6cUUAEBFMFQ",
  "key3": "QaTi7LeuD4sw5M65PafhW6vV9oCyqT1xrAKVDLQugrts54L1HmYDBLEjDCRtGVvqxdjFjRi8o6dRBvAYneA85j3",
  "key4": "2jZfADquxXXgBnLBatREiwrDJGvStXUTbJiy2jzvMEBnA3r2JJQeantX5Js8Mobr3YaJcD7M4gZqgTmA41E33FQ",
  "key5": "2cHxS4LXfzgmaMXwBdKL3Fj7hYrQoL2ioVDeh2XJd3fvV3PVbT5hAT917dNkRk8uzR85JKeCVnjHWZitQ7mUFkUc",
  "key6": "5wGDghdR9xBogapK5B8vjeAFtptHdd8gkn3JxJkkSZ622ntoHqz3zVJcvxX2CRiAK5ssg3jBrB1ruhr13xKCMEAx",
  "key7": "3JF6YdA2fZucuxvDN9kUhuixzazPiDUoz6iBDw5ws83GUfe2hqvMLtFUDxYQ6PNhFegrooTWicXVdS7xVPLi7H81",
  "key8": "4xyq4UTffJXMp46pqk762PrUf2mM8n7gBRz341xdHef8jYXXG8B89jJfyJuiy44QA6whP9Qrn3xQj9Bg2cGNYshT",
  "key9": "67R2JaPdxDVa3F32X3WPe1ychxtfQMicVFSE3RJWrbPANDWYXEVJ6KtnxrnAQ2SoqrcfvVdC7kLJT7acpGMX2e89",
  "key10": "63BXGBu4AaiuoSF3nxBYQyWcmQWtgyrdHnHBEpYYojZsyPVzA9xkbN1cKJurnx2rTMMyGkNjQTyZRTgPBGtKo46w",
  "key11": "5qM924EEqrNGMYzREPK1apA5EwzMiwj28W36ZeZ9xZyUQFvFKgSRwNqgwxrJU3FyBj255Kfu8ccDtoaE3F3riXNZ",
  "key12": "4JJFiWPBAdLLMi6f92NEbD9J84ttvBTojyNbEDrNj18B32aBtjHRiRLuqdbfcxNTHy6v4SXLdDWaauXyAM5tiP1F",
  "key13": "aXuQcNkpSW6BUPzNcd1Jcm1TRB5Wd4FG4xq3xKjfyjCQ4vY8o6FYzmN5WNQSgCchGDjkat3YuLWdntNEyEwAg2f",
  "key14": "4MSZnKRcqZJw38CK9LTPL4bU4MW5RPGJ1bL8tKDHMB8Wd2dcaekeX9H8N3XJT7MpxhRyPyYS3H8sgCnqVedwBSKF",
  "key15": "36sWdiMJW3RjQnP67Vs1picijxxcFJJMWCqBb6Zsw6typq79Fa3gHyJY3wE3h9qUhqzMX6y46vHrmeCmpSHFTnKh",
  "key16": "5o5vrfRV1Wi6oT7zxhRuRARqTzcG8bGoYSC5ct4W5jGEHMC8ABRK9BfuTnRM7aDG5j3ntYjtB4av1ArCjXKcSyqC",
  "key17": "ivHAZkXzUVuq48WuNeBrzp3E1GjhtYBb8dYR6vBkSRRfppgz2anVWMjcLuQBqoZbipvtKLGKDjfZq7sByyUKdrZ",
  "key18": "zNA82fiV7cquaaCvVXCfqxSj8WWjr6CxH6EAevXmmA1jzqYJyQqywVez5XJS5E41PbocBhDy3SQsQ3sHW3WMXfG",
  "key19": "2Q783PHD4YvPMvu3Q3bpC4CJWbvnuiztcqcu7X63GP44EDG93owG7agZFV68Ve7gUpdWbTb4Dnjmc6B6P426AXh1",
  "key20": "3o9qUqYY8UC4VzjmJUL5Ryptwet26nyx5eZ5wZbzzLrX9J3G3SWmXof713sRsiA78QmZMqXuEprtrGaifCcMsMXX",
  "key21": "SHsjB8iJuDmLBetzJC9DyHRJ84RVyQZpY5RqWBNvgmsDi9H3Q6dnJ7cUcCmtxA6HmMLPStSfyPVeGUEvSNAP5wt",
  "key22": "5HNwVN8ZHJjh5b6dRgYi2omRGuKtzMu99WhtDoM3kYyvQv5AEzSxMa6xMnhZc4xKmbdfWxz9a3Q1VYR3Ahk8Yn6T",
  "key23": "98xyxC5Unz2DgKb1xMHFfNM2MPjZYrdGxb4bJ2Myb55dsr9CQEa9huLHHhEkoyv1SsRRi1AdabuvfxGjAPk676U",
  "key24": "2F5NcKYGvwPS4TAveWVmKsiiPhfgHiWQbEbPCrQRGCHfpp6utnCUGn2FUjHZcsZEEjELSoCLeFSSxcF5CEzTT22i",
  "key25": "2N4KbYc95GdHBisEFeh98EJSBHqgt4QPfbVRXVESnKySXeJDwvQpnYXbMoWYPBQdppfEXKpobDJjx5FPHFfCgbG5"
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
