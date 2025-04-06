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
    "3mKJQJ5fGriE4qCsARRUFVzde5HK6AaBeaGSxfKyd4Ezx5HBaB5jbDX6ctBr9957w89jpsF7EQtNpfzWLMwr2jzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w1HfmLw5hNeoBK7rXBfQALdrwFR1c2Hz7DauWTnD5hpPUwkAcXYcsK4TmgwJpXauDLVHmtqswsFEKnBkz1KVzfa",
  "key1": "2rAhNjFq1vKECMJo4xNiNWDvAuNmGtsmUj5QcDb8U4B36VY9nkNCSTSssfRHBJtfjY5D9QVfsD4CTDhsd3EM7HUe",
  "key2": "5Bp5Xd8jQd4zWLHGfptHdWURrLNE7vgP2qUSb2impYe2tyVr2sy7sfjKC8cN5t8HwiGUUWhB8qtvdUgvPAzUvhda",
  "key3": "4YaQo66cGexw27vhZQaCi5qjB7wSbkADkpqNwxnpEZqd7CPUf1GiEVcJ2RyoLvBCKQwHysA62y336CNYAteB9A9W",
  "key4": "2q2Sky3YY5277gdVRAR9iMo6sEEi5aQ7jrfS8eeLGUHDUjENpQz6PeYgRQS1AwBJcQLBb8ApLRt9smNRu75uCFWW",
  "key5": "27iGDD2jYmNsMUVtR4w5dNA7AiZZSytY3R5gpyhU4dj32cfD3kzdtU1Drr2Xe4LDAnyNw4ggQwjjWPA4d8Uhex9K",
  "key6": "4LDXEZSxn4ua9t7CMv2Xjbo5PJZpUeSt6VHeGg8qZJGiQi3eKjVJc1wbKKiF6srryyLwFnXmASJfqaEWZwhNnQeH",
  "key7": "4aLS5AyDkEQScHzYrVL5p9mg5NXeuHWivQQWtFFZZvhJL5ZNkenFVUkPwJ8pHe4k7jgaS7w2ASghbr137JNGhWrm",
  "key8": "2hVtpX9kDJpCYgjodtWBC4G38m38rx2tYXsbPTpLkUzdyJQcGmW2VWTQZXTmX2G6sti4FDLaQY2vgWonmmjtc7D4",
  "key9": "5uyhxUga9B2dMM9DEuw3rs7gyUr7mMMYpfMta5HiBLXnF7JA7iLV2Y3jWibW9dGr1Sy9Q8TkjN4VtcxnhkhbbwMp",
  "key10": "457UHWSQQdQPCzboJuGHrM51q6aMP2rbFtP2GT87v933w1DtnacwqhRRQc4ogVMwDEWKwPUDfmnubwhDWEuig45E",
  "key11": "2oGjAtH63mt3nMkaYmxAxGH8yCDDnYSVN4TCHrqfgiZFAEhbe5wqD1sGxVN7hqwhvobDYWtBFWZsf16N3V3TnjDk",
  "key12": "43E4U46QgpUbaTMSwagc2j55uEyakBySNVUQXcoHhrckxCnGhK6c5gD7Z8HU4Pj6GwziBrpKDxCWUXja7gtqB85v",
  "key13": "4GMjxmunsNTt6pbuN2W8RonBKa4gXpagHxKnm2MkhnJmwZ3g7CCVj4U5Ky52KQygwyNDK14wvAnrCaYdFL4eDPHZ",
  "key14": "4b1FxUdaasEG2rLhSn4DkVuSwfTxUm38EUNy54hXnN2hjbh3gZaocTWNKhzhscsmGLyTdSmJBPjvKsig1ktLp7e7",
  "key15": "4mpx8hTwCRsNGf7QvZT2wmoJYCMhLt3Pp98mSzDKHmC6oJZyPmFtx1zBKe87Bb1EvZ3SR3EGZNnt54hoiENsT2Gg",
  "key16": "gJ5u6SyLDzKpBbsVZYLvcesGyhVvbSpvTpGipJs9EPNbsgEpfZoUWeoWre8r3Up965y7nFTebifxD9JYaUF3MQX",
  "key17": "4E3SZwUxXgyF3xNXoGssoJZQn1KZ1PPJt7pmAbU8otM32WMiCpAjK5yirV64czbksn3Dr1T8VAfesN52ZGDyhvHP",
  "key18": "5qmQP2XsCEGVE48zuyxGqjp2z3hBEQko5EGF9a5oiBETeoLeAQPSChPeukAZY5kpTJLuHd9xgTpLawbCcdPjTSys",
  "key19": "oSoAXQ63TqWh8gjN7G5knM6ns4kgoVBSZesTU8X3kXYeDCfNLRtuZ2k1kCyxBBAx2TMdebLjSnL9ZbTkPaAjn2Y",
  "key20": "3Zet2KbZUNyB58LJNKhPHREoWNKQQcQVctBAgQz3JXb44ZaRtybcy6exoEdqKjwh9Rcox3u9ei8rWwURQ8nYhMuJ",
  "key21": "Twfitzh7aQ4AH8cfWhFiK7W8NVsB6Kwv9Nu8BXMiFULazZ4skcW7Gf8diXWDozbBPiHgCYykvkKGCXhK2jQ6JkD",
  "key22": "4NhtrxQzcptSUjCKZfo292QSnopGrMgoWuvNUhH7QR3CyWJyhbimnypHsEhpsAmaXMu7kaivM6xSLvvtf3gcNxaX",
  "key23": "4JAPXSUW8rP95UkGg2KeutGcegD4C93w24KRbjtP3FqRJxFA7e622JEhwtURoDdZmGEAjiDCzUjs1kb5dyDgcnsS",
  "key24": "2vk77MdBub5k7voz5YfiwbWqgvkkPLo9D9ZD1nwL9eaPJuHd3XJCMmktV8K7JPMmoJwC7uytQpWP6DH7QXzc3Yco",
  "key25": "4n3t6G8gsRHYyYjtdMKUiRr1p1uB71EoTGzvxBhaer59DQbhZJmqPjRxsKX2WtTAxcYPt9UwN9RNA5zx6UhkBDpR",
  "key26": "3eWDKVupZQvSUuem9yWuWbGvsQshp4XGN9XHqxjfiFeCA49r1CBUsTV2Hh8UE1QNPAnMVWzwpgjMpRjTf2zgHic1",
  "key27": "bwYAZUiJh1daqU2Qm2omCawwd59cJke8iVfZb8LpAvfux4nfQxnNL4wkpCrvM3oZMjBJump1CpgqSvnED3YsKug",
  "key28": "hSRqbuFDbicPdYs2r1zUtv5QTn3rgEDoEkyH94wFUbEZ7D6n8EDSwJebPrGNxPnu1cVG6pr2wDYbfewuAGoBfFW"
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
