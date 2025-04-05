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
    "54HtVsaMxeAiCpan7P361KBuZKKdZd4g7sfkWwLxdMcymXndmSpquU7BEjWnev4hiZkeVV6jcT1gFU3WRSaai3VU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fnvJUGuPfQN2ocf8SasoeHciT4ZruXtNDdPxnA5NtF6czpEbxGBYZZnfSLTWVFQWn7F12R8gwM2HNBUaaUDT8Af",
  "key1": "5trvhvQvEDu7vFwgVvzJ6vKDeFNbQQGrYegGw1yPAbZSq7xNtEpeE9tysG9XcmsVVUMmpapX8eVHSJmyqnRJfSkT",
  "key2": "QGUV6YK4x2NmxXanfu17YJ2fbJD1m6fqhUP5v2hd8SQLwd1sGhKCq7Lpxmgsw3opHHUw4E6uTy57kzQPn8sLFiL",
  "key3": "25FLMJaBoZufFmmgPFvVG9dZGtBBD7pUUydW4uTbGj5bGy55td8LFqF39d7D8F93Jq5kmr9p7RPDytdYUoQQPANv",
  "key4": "2drP4zzuq7s5pL1VLouQx7Ga244725EQe5su3bwg7gFPpczm8cKssjkHiPaJU4Q4KSU6mZaaBE4jbDJU3jEaoQhW",
  "key5": "sS7ZmoFoyt8fzrJrZ4VcZZHXA9A9CQ1XmpiNCGZP4S9h5pXuCXFtcnchtJQy25VyFhoWWLSjtNbes5at8xSoRrY",
  "key6": "3rPJbfxdeNrqenDiCzEqAECwJgPmJkTgiugBm2oi6KecomhE6KwVXi9SL4ohTgNpjSe9e7mk3VuEsnNU44VH3vtR",
  "key7": "2wQy11sBXrAgf5LfeMCHZc5QWdndzCCTfVpnAGnJuXJA4sqC7iKYZ9BivCyHTgqYqSbj2qSQCaNe2DGecbPLSfQp",
  "key8": "H7uTb9JgdwnYwvyFQ6GfcSCP4hvuJCLu59wTA3CFTvKLPeFymP6oCsAbb1szRixv6tMVCobYaRCfF8oYvyreXsF",
  "key9": "3FdiuPrFrUSrzuWwzqCfbWVAhScezA4zsdN3wLzujjR9SL3aPmxhK6Q47deRahv2Yw7u9dBDMeAHERhByWjxhD5y",
  "key10": "5WTSpsiFPbAh7ztFHo32tePTftdQjmPu2np7i4yLSxHSXLXJUYpGqgbQvNzUHufHa517jJorNdgTqpwKkqhK6m8G",
  "key11": "Rx7vY66ZtEazpdv49qe3KzdUVc2LDF7zaF6M7qAjSSryB422RD8SMNZgctigoMpHe398FZDcnzcXx2uLdZVgiSU",
  "key12": "ou7bTYpmZF2uhoNhUq5FQcAff7VYdUrgNnQb85CFfTbtJBnGpstvvSfswKCp8qGz48k7Nvz9TKuf2ixMybCJf1X",
  "key13": "3buem4Jm6pUYKQ6S2FovB5Pgu4L43AHd11A5ALZPtA7eENePnyyTqEzyt4YxXDZd1WiT7mdU1QQfhyfqyTsEYJqJ",
  "key14": "56UCMzvDvDu8wivw2f9141dj5w7R2EHWgWmTPibG4UEkn3ZP4iHTwZ1eKEuz2fDXZUuQyR5okMUdaCy6u5RUjMK",
  "key15": "5ZuqrrktoadC2E4HHTEG17MrL3Wbb6WUk5nAYAzEMNnrcjkps3tZNMyBSEeVueyDafFFfbjx4c9xj7NzB7zw6GbY",
  "key16": "APmuxk6e2sVK4BYgFVZBPbkpGucUncuEm8jvu8JDcxP2jEVi7gfamP7E6FZx8sG9Nemjmx8yXcpx8yyuKySBWFi",
  "key17": "31GwuPb3C2RnMKFE7qtYZvyaTUCxEtsZxiRzhGLUzUvrMgWV6G9FTyvm1S54hUCyBtJY6LeckZGiyaXQzy6JhLeF",
  "key18": "4bqijvwdMPDaKmvQzMZi3hH87zfQh54CxUWLuk22RXDn9X1XxqAY5i4h7cqYxynfkVF5wVL6oaNaLvCk2EhZbuUG",
  "key19": "532rHCkTp9r1rBTxW24PYE9HDzJxMhLBTh51GxM2aZDx8L1zdbfLMDAC853QjZrUSCtTGnvZQpbMrwbFPcY5h9KF",
  "key20": "5T5oGGfnwWEs7hMaYXJ2RDBvtnrbeWioiAQaxkXKeNzt7NCtrDtEjRG6YAUfsHR6jTU8o1UEUhEr6YAa9jukHnGq",
  "key21": "2W4GB5KYdjGzKJVw8Y9P5gVHEkEgNKYA6TCAkkDDRXzg9DFQnkqC5mU4h4XwhYnqEgQAQJBGz3yFTDB2VLNgZkdh",
  "key22": "3nytDPPRnUXSLUzNDUoV5wVYAKh2BrsUtjnB5bFVb3fqp5X8Dq1eH75KJkgMmpHHaZFJNNgt3thFRces2VWQFsMc",
  "key23": "5NZZ3CX1Tmfgop9ndDoXhVZGwU4VkdmXRJFZcK25w5kQ7mLKN9RwaJ23XVzX23S631hCSAg19mZPjPnkbKEvf2S5",
  "key24": "4w5cGDXMN2m4cgrhfPd6z6mApCgxYqzsa6SgZ4wYqTJBRmJa5FrWo8GiME6Bg9fmUi7KC8uJYJNQ3J3ezVQGmBN6",
  "key25": "4ptExTZdhn9FdgQXZiDgbs5Y4ovvDzPg6qV9wASLL8dsHx1aKPwPHaMiucVmM3ctnTDKtDagzaWpRWuNZhR2mHmF",
  "key26": "46LKMRA9vAr9LGgFtHfMCJDFu227iqDPp6XB8H8UsiNibYijuihn3zRk3ntvowUizTebuVWFPnUNqks2JXtqeUxq",
  "key27": "5xoWnasmDRhe6ieXdTNMawZb7DshjXFbyHnEM3A3zkMSDM5KRHXU5TLE6oe5mTTwXoECTHHyow2QDPVG8d9eEEB4",
  "key28": "3Ncf3tAm56XEvEmmukFeTiZZXANPJsvtMUF5deTA83qVW4oxowXioBfCCDryAh8oo4sfLt68Zi2oHiDfdKiJ4Vxs"
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
