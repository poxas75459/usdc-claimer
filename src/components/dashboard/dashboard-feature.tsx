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
    "37XktvAJbH35S2WyA4wMVSFkWt6io3AGb4jvmSSrPt7bQ5K7vfof6kgEkpG4vkd2t7ZUZ3YrS6bKpNPPku2Qagk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VSpLAu2neujb98SBc7541D4Uk3Xrx4fFTtuvbQ1uSB9W8cp3r7UM6FrcDu2He9DfmgScEAS7C5FKNNvuRWeZ1FL",
  "key1": "2X9xAtnXkuGP1yDK4VjssS2ebmEZb19z4P1Fo1kfW5ozc7chW5sUEVvrsnS69ZBiqVTu2dLdtSVZFN1cNnY7pMdk",
  "key2": "5YK1XikAenU6Brnsjw8HAHDLaVB9RYDAj7Y2xRH5wRYdbho1tnC8shm2jWCV4tRB1Li5ewG8ARc9PSwAqhDuCEH2",
  "key3": "2m4HF7iRT7ha9zjDJ5iALR2xxp7VjJ84VkX7TsPwS2Re94ouMyTxvExgkePfDRMVedGQCoXyfvzSWG144sCwtH2f",
  "key4": "48xGk57VvfoP3Q7Lsgwecg27dK2wioLtP3UqSSgDre6kQxdwdYHFu68azHkv6fRGESAewaoXAZGRA9EiaPvGdtAf",
  "key5": "3qknjmC5bVH46TWZrij8AkGZJZUnZ7ScFYfsieFzpkH94RXoeLLjRbvoQQetncYHCD1nkppCmgWqyytwRVn3LbFv",
  "key6": "3ejADkSejBGi3GnYsF8LsuKjfVxpDQPf289GzJsZyFnZqeQuSFFv6Ag52NvXXzu7nVwsKpajJWNdhRMdyZJ9P1eC",
  "key7": "wwqtfEuWjNC74eR7MoQLfu8wf2qDFDs8NaWoCu5aZ2oVH6BwFRjPHF3xQWfvKDuLBuG1G8EprVGwFXnHGT3kbPY",
  "key8": "XkAqQ2C7rxfW3sp1Dueq3TZ7cUPjChCCcrP32n9EBZZE4hQ9Hrh5MLhaECSguymFmDbU5QiS9yEtJ1RQ2EXF1fH",
  "key9": "2nMcNUDMJbbwWSBGZmLoEs43zehpd7WxRHmZRgpxRT8nwJesbPysxcQJNV7PfDwVdrPJ9nKVXf77SEAB5mcxuG6w",
  "key10": "4GdCJneQFQQxqzbrHX3H8UUiEginBMghCokapuqmdaquLdkom1DXyxD2LWULW2JaSRoRL7VVAbt9XUYMgFDKkx82",
  "key11": "3i82mjR4E2uQnKwmRA4n5g64TbvrevG8Vikb7wPWUo4sdavtxvCvg1V4mtWKq5LBzWPSBAtHPSsXGHixmf64fgLV",
  "key12": "5iaJs5QjLBHusrrGW7aJweskEz4BJzzEKpARBs6GzxoaqPDGXqjjX6c5yBtHUF52JxB7Jg1tx8bieMw8NDUG3FdG",
  "key13": "BMP2yhAFENE3494BG9y3B1oeBYCbezPiR2BnLDjAb466ZtUzDX6e4JjhNghrhuRPbLUcpiVVQXKr9MTeTGaHcHr",
  "key14": "4bjkD8mJCKAjZgCF2DFXtkrbDfQgZdWmtzE5wqDDJZQ4maEpR21EeyHVv23Fwt2cq34vSmDh9V2uGWtcfuyJ18aA",
  "key15": "5ZJxEqekt21yrhDpEDE57ojtW6F7A1fEXCDz3amTE9XVyDPyTUEV8gFoB8LNhTw3Rnban3tkHa7cxdHP1YYWkm8V",
  "key16": "3MgZ8AkhhrgKLTq3c2eQPkLFZVUeip6cFWmLCrvNthQVxnhMKKqZU1MadHM1nennfx331m9j9BiMGvqoTQCvqih4",
  "key17": "4KhQ6MAvFRLchYBDQX4BEYrzN2SMJtanokDmjj3AuTCfb5oBfBZLsWkBzLrC2fg32Edgz79qhGbpjX5XAhdCoEbY",
  "key18": "UDzgiV2tCv4tGafWNZx4aTuXQwUPbxsgQCV71hcJC1dYQTQ1VZzzvaZknpBriazyCHEB8A3Q9NJhYqxBGx6yppz",
  "key19": "2ZHhZhrZBtCCyGY7C2pGzay5kY13eApxX3ZUqhgKbEA77CcXRqjPmk3R7ZnnUyoSo3bDDCkLNykAxzg9L4PDcdwq",
  "key20": "2Lv49LRQ3tg8gLmZfp5qxrK3axHKXwV548tHJJxBeNWFbd7CNxDRLwcdVC31ZSgArZWUrjh274iMFtRTNC9L9sYh",
  "key21": "41vgPgXY1NJDbBe5qSTVjB2yWLhJbtMUFUPQSh9Xb1Rg1m5w9qwk74EuL5P8rV4wWQAozuYQJCGxQVLb2mGFzRzW",
  "key22": "5NuWFaDRtGrqVsDm4kmHQ4qHu2k7pGf3Lg64sM9wisa5MdKAS2TVJ2PjrA2JELXSQCbTq86zcdUT1xi2GS1Qa1Yt",
  "key23": "4t9NNMznKBMBqcmZdmUR5SN9PXPRoZPwi7vy49oGHiEG2ERaoQxC77iPXgbEiNkiYYYoXEdRBPd5UbPNFKTk4hM5",
  "key24": "5BLKfw3Lw3M4WcgemHk73CUvYUKSNDeYJzCNN6WTA5DvgCpj7sWqyFZaX6xyDWTN6JhaLhWxBAs49PB9UYZEk5DX",
  "key25": "3kFExZnAaEM9FjEGYxmdAfuTyKqQaHjycE1FnvYbQhTcF2wje2ESsBts1d2WFq18PZtF96N7C9BoC1vToQsCCsyo",
  "key26": "5PxcZqhQfzj13ctPZzttRhiWob3ZA8BJWm4AgUnvitt9gRrZpHi4UBjxsxLEx3aVDLJPdm16sHeM7vxpgo5BwYw7",
  "key27": "54D5ifZaneZLSN2gP3AvcoEgATPch4cRUWH95Nw9dRnoRZaLYapwK5sNtipbAVeuRuSGvBh4PiTZfCoevksNjuBR",
  "key28": "RoVjA4b6NLRKqJ6rUpdJtN4JUatLxSdy9PhiEpy3Daij5JKzjS69LP2jQRDvpgyok39GcpSVKRXVx7u8jWDjWKY",
  "key29": "537wsPZ4kQnoZKYYhYGVZtNZshFgUSt6B5nzc3idQvA2daP9v2PDuAsQLAxsQ2d19o5hZXTpYKVxoSCHK1VtXG9a",
  "key30": "4ALcSbtobKyhQJq93EDAn61xkmDaKFQ9j7EY9k8AcMwxeuKzND4faGvJzYYKmUskG5aseXV6hsMJNUHThBuodq9S",
  "key31": "5jZ3GcU3QTEhrAFNQjWpHs5bbaNU7MLh6fbV9XGV8MDks1nEK99pzkW5Vv8k6pDCAGoMWsYtNChq5QRD4C7torcB",
  "key32": "2fL5iszNRidWt9AQWcMBcJoPZgAytK6x7u8Yc5H9v5mXxQ42TcM7SNaWs524GGz4QcVpnRvydY7jiL54CePzzLUy",
  "key33": "F49qX6oFjCKpkpaDhYgHaGakcNtrXiqPvB1sJz1Mg6Hvo4N9sDg3ahQhgJNCfm7e74HBGBZYtz6S8V1UBfgPDF5",
  "key34": "21wSziTZ3zqH9j3bZwTSbwSsJXE4WvemEjiAYG5a1QqoHy2GHABr5swq4ZNRoaHXuCfPSMN149JUyfwrrkJiip1M",
  "key35": "3Hj32eu87VBTdR5XwCY8WWfqZ56sL6wEe9my9mXQcWsgjcp3kVsNgio8opUnBqTAgiAh3E3XJuzpyv11y6dGLvCb",
  "key36": "3Ys6MJmpd5tkDwthsV7wYf8L4Pvc5ef2dAqMapZ2eD1g8VCUeZNLeDdmFMYbpSTt7ZBP1R5gQBfsH2QgNZ7pN8sQ",
  "key37": "4UXYhaTrkvDizgv4LxeEJzEyincfpcvkMzGY7g7r8H4njtHhjFFUojXBcnMejTTRZPgxKtCu8anFcBJiS6Gz91Mo",
  "key38": "5nbvT6XNV7jUvt6q8KwwuWMqSmtcCu6PCHPNyZ5LD6MZMtbeysDEhC1owfRmLucvznipyfdK2abs9ziLtspZNpcW",
  "key39": "4787kSeycSYBgpexE7fq3SjVJNQvF9Ns6dGQSXEDTazpTCjbKEq3h32isGaoLkZaumDjL8L28kvzAY1V1E4y7eap"
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
