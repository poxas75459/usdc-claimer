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
    "2VJon18eQ62dcqsZdGE5VFQ3yXEX8cDGC1p3UocTeWgkhWgcSRAfv87kz8ytB4DemntJtZYmPuBfdmGnfkNHBbEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pa1bN7AUjvyHAwgbdRw8c9db1XwBZvcj71hcxZuoTycX5uLNLvgAcYdpVudtTw1jaiVD8tCv6F85HS74dGuQiHG",
  "key1": "5gDeYrRrn3NMoCnsU4gJCeKkSE3BnVgrjHgWi3mx47YwMGAu9bSYzodDDVKSTMHbeWX8p81ZGZL9BASzaYTAvMg2",
  "key2": "3VR3Q1WinXPtYtJrjEdUsMQ7GbhAFfNkEkLUoKaexSwJL2X7gedRZ2M55xAvsRAGmmnu5DYkBun2nW8Ht8xRHS6a",
  "key3": "1gwr93f6CG93DqDd5zbTbwz3wHKq8ZyVf574X61M6VHQ2gJ3rr2TMy3mWRjtf5SdEzJFdmmFiw4obd6vinjqYEy",
  "key4": "3A9qAADwQYGG5KE4H3CpNktoBuZR2NWj3Fd9eWVGyQyndMxsCKY71dLjgLtKeakpTqH7opJe5LPH9nhWpHuPN7fA",
  "key5": "Ebdwa9rE9JmpmmfR6H7STd5UrAUQZk9yR3vWG8sEzzu321xFrWzJuofqZD6Wq4KiYPPgZVUAMSTNAQvagyEE5ER",
  "key6": "3afu2vsZn2FmDtMqAz4n4621t9PnZwYNuhXHcJYYvWRUPzdP2PdSd8eRfdrCzS4M4dSCXM3hMM4S4Vww3nd2Ljef",
  "key7": "n9wDJTEcvBEyYnXDCH2ddaL2pQUNRVZ7UcaUAgWgdDd6NnkB6CmBZJbpWfC61ghaeJdWZ48ZzcmQKS5u6x9eBG7",
  "key8": "3CKDuH8oJk3wZqv5yoMKUEfDbEFvoQGgrpqDYygdhUhQfrCWbx6CsenMrs5aKp7QxC5XTgUvEXAAMUCXjWFJyFUv",
  "key9": "4fAEAKrEsAE8xTA5YEgHkM1iVTS3jUp65CfBukqh38ujwx7ohSP5C8ffuqxgro5MmK4zCbBwRNTS6bpBbYvu6nLQ",
  "key10": "2GQLph77oYYeUnzEh9dy3Gudrn8KYb9vKCR5A2LmaT2UKnUmykYMSMXb7MMprJRqMM1evF8GYiU8KJ6BS4LBhkUx",
  "key11": "4zWu65YMLqu8Yak2fAUrQAdaMSPK7mPNDHP6gJRKve5X3sBokcMeoa4GSnjaX3ZNysG4asmXZgRvS7VFfRHptXy9",
  "key12": "xBC4rJzwg12PoZX4mcbccsifnJ7fq1HwBJMwwm6ipzC3oc6aLbpVVWhPCfhRjcD8wwegMhYCQXatuS6K4R4jXhU",
  "key13": "4rqY6VTcrgriPWbst4oJ9eXDNFraaNSHEtJGzeoy6wKjuXcTK5odY5tGB1yhbGPtHBotYgU6WJzy7oQB4V8yFevV",
  "key14": "4BweMTven8S5eYVv6qgGND4aZUF515uwoWHzZvDwtnpuWtZGvujoHDCjWHMWvDHvgQEC9C2A5c9eq8f2ohaa5Gg5",
  "key15": "3eNRbRvnqPFABcooDrnyhi2HBBANgHRkbKnUrJR6PFdSD6eTXA69EU6UbQWsBBjdfgnXMyzrNDXUpyaF4zUgg51V",
  "key16": "5wsWyP7M7qR5qN7bxcbzX3CnVYTwNeTQ69c1DxB71pXeaxNmrY3mRuPvuqKwVEtupBZzzDiYMyPBhb9JSBPU8FyK",
  "key17": "2BCb9ad61W9ZSbrJ6mbfhMVbB421gRhnXGQTajuzsyzfTupYcYyspUpbU9wQJf431FTMbdbyV75GgBTJ5wyv7wiM",
  "key18": "4tP6hmewj3Dfez41Q7VJx3mPQYCDBQcThNFPUXhBx7k2VoQxmww4fSczHekgf3kVnw377Zo7VnkqWgQeVcGNtzhv",
  "key19": "ZK3XeQFKbYoST61ziNhQjhZs63Z5Naho5dwcjdvZrGuMaDMGD2HCB2uqS3bciXiQ3v53eWfu542n8xTVABkjPge",
  "key20": "uKrxr4Xhc8iDgXBUEeQgn5wwgjTpygcEpejnYrNjT6RRwKWySYpGUXXc7FCGMbtxnYULLzAzDRYkpSSCJCiya1o",
  "key21": "5s31P4xtsEYS1udMHQkrsUEQT3N4eJdYLc9zw27FWA7Bq5BHA6qd1AFGcgvxh3PTgEUAzVuXjmVXLM6jjbJRi9Zj",
  "key22": "2ywnitQkWRXv3TfpJbnCjccrXCm84jfF4eGZiGqCxMQo48672UMsof11Fn5c1ji9QGKwtqSpYLbjQnowBYMKgFSS",
  "key23": "3BjPq7aLEY1Z9AcpncMEZR95wHia8rDssmfre8ChqfvtaK4LbKxVftNhjvdFiuJpEQAzGoidRHx4TFyTg3xSfich",
  "key24": "4xET9uHfnBeijcqU4VH8t7Ns5LDty4dDodtrwKSBerMZvftt6PNDG3z2QRUSLQxXHx9yZtgr5VKaceqqPG2F29xG",
  "key25": "3uMCf9JJgjMvSQFLND1EAV8vZiQdypsCrzkgTs5KHVeaktEvEmfDTzVvmxcwoy5Jq4qdqdVMckzLim8kHfWPX5dw",
  "key26": "8k5n7m5HSzcUmwSN8RuQYHNykXW2JqJwigQNvs9nB1NTaZyrtdQqWKx35ccbTRMd8XHGfkiws4wPMmQrQVwUUDp",
  "key27": "3fqfRg23t2JNtjhSAcgNQw5XCdbQ8Rr6cKZB9N7GSRqg5zhZtZvZVdsdiMR2FHb7GrKCgTxzdvd9LyEQ1b8Cjzfd",
  "key28": "2en1fQcFnZkdVxz11PR6bhdJMRB1GqdWW6WGQJCVMPtbRWVNL51ueEaKpgzvcXe4VeSPWA8iQsy3Svay1eFmXCAU",
  "key29": "vv5Hm5Bpqvg9JUno6y7V9HD5sSpNYeQJVPpTURdXE2QbJtocv36wbTn3Lh4hp3smsXyLXvg6NnntUMsRjmz38he",
  "key30": "3dFsiXD314UrkVv954G6QYvotmfkdCGpKcSNdRXyx8oEL3SMW37V7c2UENvmEwjmKW4EH4gU2iNexEY18gvBQjbG",
  "key31": "zAet7FarMSx5w8K9aqWJdDGyCkGvUyZiJrD3Do7rGM5FAGnDpdBm5fVSJU5YmBgFsmbZAJeXsFYZEeQJERFYL3q",
  "key32": "67GyErLPXwrkiyYhXbzfvjbxeqXfKav79BjDG382XJhd3RUNHxZ8z5wRnNmpYvQphH8ACMuaN4BFK2k2P1H6VbuA",
  "key33": "4rsYeYDZ9AoL17MQRKhxJG8LdNhZQbyuXaCSn8V1D8mzA3yHUfam1GPW2ipiWUPZY1kxuV6sQha2FJptBPA3V1ku",
  "key34": "3xiL7zQwArXfLcaGMCL6yLJEKQscf2NNtfkQFHpF9nqsV5F7VsEsg5VkePotTmevfTJrTyjPBaJ6waiB8duw9GQH",
  "key35": "5zvABQrR5btkQHwiUpDPWEu7U5xxFJkjFZrBmGWXovHaNz82KMzZyNFW3mmJ2Jam6hKvHDRHdr8JPzknmTotc4tS",
  "key36": "54ifxnzWpZxhHFKVjx2QiAYMy2pRfFGSBnJSEFwm6n84B1ohSqZ4h8Djneovs1XBsKryuaHoyifdKBJDQK1Cp5hc"
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
