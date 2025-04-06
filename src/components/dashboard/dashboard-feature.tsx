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
    "3zDJe2LiDoiejxpVbaGKoew5TnZqCAo8bgL27xRSLqSwPd2VBipgbi81LqBK1WgVC56afPofW7xm41Gz88DCKwxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fqAQ6kpZ1i1AUwAQQoZpdV7EWjLmBJHPpfzZCYJ6ZX7ThZUQUt6ksiWTjUBGRiHA2xKtSgUftD3rbg48BXy7pqT",
  "key1": "3HepzH4jCuBtmzJc5nGYUXDCb4WgYbmxKZMV6aeeqCo5otmfAiCZYP4JKhez3qDL1ZiYpL9XVRj7Vh574BtnXnMC",
  "key2": "2Va22JT4qCUJth8VF6hARzE4TRFAmdVcMLuHtRkGsQ1CcgXAAwWoiyZ5gW35jcp9hbctTmpKLKqJAif7wxNYTbjp",
  "key3": "35rGkDEUyCxv5e4b2rWfALgarF1PTia2vjdkH4YAjhJnx4eEQmfdbqJ7gGwrsKaJWmuiKF9k3oruWYCSnjcKGtjj",
  "key4": "3ejke51ToFNat6SXHga6Sf3k43P4ixL8kBe4mErWyjNUc8Qg5KhP2GwFTCJLoim2UFAf6fyi9CNZy5xJ37ZcapbY",
  "key5": "4HyVbBymkXue9diXZCSp9Hcw7Jk3FSpwa63D2Tu6Up1gVonfcZ27Cn34VaMEc1AJBM87mfr6NXh3Zm7aU7qJW9e7",
  "key6": "5dhpDQX8ia9Vd4eYSXb1SvDLeS2FR2xeWtKdtZpQX5waQSkmUsbSySPAt616eo84GRxnX9gevAaQcF6gYqNwszaN",
  "key7": "3cUV6nk7sW8MXgqLEcE6c9y66NbJaE14pv1crzcYM3SAJgMbZhaGqFsJ7fSAK9d141owGXgBQf4ESD2T4ncxkAcG",
  "key8": "2TTrx8W9rpeCmwYEBrUv25JC9jmYwskR8pURKnSP8zD8E8Cew4fcLycKYxz5ZNdcLejAKkNoXW17ognJnjF6d6Vi",
  "key9": "oDKm7WZCeHg3bTmyKV86PWDVc29E9wazQAXYH2vfTmTLFACGTJhh2JyVyZHdTt3N5cHnV4tdw6qBkuDMNMN8QFd",
  "key10": "BVLqTXPPaUW7iVeB7TsyTBeTFA7XxBbfoFauNKGXyHooPCASSVuJ1TWMGHnYgSmkMNDuG2K9EHvDBaTkisPzGht",
  "key11": "Y3MYwqucpuySbS9WJ3ASyqimzTyjF1j19uHxPnTXLJkkDNvGWfCZwj3TQpuaMcXLC8AMSTWpEUTH5maFqgQBpnN",
  "key12": "2tZyCDR7WCF4LRnwFMH7kn19rwvooHgKc8wjJNVUQoSRu7X7bnWHtejugT8XeuRZADM5QgNwYFFMkwEyuLPLEyYh",
  "key13": "5tENLsWkWhkkMpTXSrVtSQSryWVFkxP69vFTwjN7Vuoay6RjGW7Npzu3ojRi8sCmMopZsFTGe8tzWfVdtioNo8pe",
  "key14": "4qqPTYADULmsKw1dwzv2NVkLKby2pq6bbehCy1XtRiUJor3tJtzfqFRLHVE9ZX72AhQ12zStCMrrnQNb6vGN99TY",
  "key15": "4hxXcjrvfohZmGPbZfvBLLEPmbwB3WJdx8h7zezKZXfyoCAHjntxU8UPFgoqHvbDa2xAz6X4iBsKz4XR38Z7XU7d",
  "key16": "mdrT3UwzFKeZUnvUvHMa9BzfB8TUEzgTKQGuCZMbGtboEZtiDbPwQofrB9wZFCyLkuigpaTTfeoCFe2Bf2WxDhB",
  "key17": "5mVPwJA9C4Uo4h72wkT46EHhvn8KSuZfJg78JDWCkEvir5FfZVfDgcq7dPHJ1E91mAGVwSx2vBzGEQbNNiLw2ocH",
  "key18": "WpP5ghge1qZUjgwh9WiK4Zi3cyugFNn4Yrwxnvr4grUgxonvLXCxfLxp3j83PEjjhtGy8aSiN8zeCSx1AVrVXhq",
  "key19": "naDQLNavv9tQwH5rZGr4Ue1dWmN33FENs4jn8q8WPqn5Cj4ZQNLoAgUxCHHFfL25BHLjPA864ZU9tXFrZJd5zZP",
  "key20": "5cjavndkwj2adSi4PDGP3zwfjpUdLtKr9KA3aJtGhZQG3ELMVZSKj6MG6gWrDqd8qNkyRsJQTCh39dHzVuRWo12v",
  "key21": "Lbj2zhD94of9LNzGi9kb9Q4SKQbxKFeA2w7FF8wNXFpUN9SfcwMjVHhrBXQ3JAt3B8W5LRX3xNVvSQ2fmS87PSc",
  "key22": "3e88hNBtH2VqLGy4sdf6uNCVqCKJ5gNuwdxRfYU7GT4eBNkWqCf6rSgfXyG9ZzQuV3MucQDhFNNeKiBWWbgXNErq",
  "key23": "5e99dZmaxFcarq7RCxewn9wz8sem6wLjuw3DCmzKd6cwTGLwxzG65n68AePi3LvKHuSEFnktQd7nR1KQdmvvseC2",
  "key24": "2JiUMg8vedUPgNA7GYWGY6YoJg6LLfZheXyA8c75oPPmdRcoEvfLBhXQBSXnQgMC1rhwPeE8zfti2jQ9rZVf89ge",
  "key25": "4RmP4nLrva5xLdsTPgQzpT1WcGQn3LNvurTG46BFLZCb6WaEyzywxPrpuyKpXLxVfDhqNBBX4ySBfE6T9iVfa66N",
  "key26": "5w4bV6B8awinqeyQK17dMGhZ1HNQiCMmMvnDX5sXyx8gEonwvQngq2tARoRPvM7SREUcpWWsAE17tfoBcDyJgaxh",
  "key27": "5C5Q1oGUceNifgLTZeD1NtXef5RDAjxGTbkHGf4KMRTomAWR8j7uWs3SMvPmRbMSRPEeUiJ7stuJCzpqqZV54k4c",
  "key28": "3W6zT3CW4js6gptfmXCC6zo9CC4cEE9hDvDa1ECZb5DKfnWK2Lg41S69uCjozrx7MmrPLDt4paDHHVy4arsTWNf4",
  "key29": "Uv3Pr7ySyUDATf7aJjCJ61MeEpRu4joEghMbRLX1kJAHhAhC5arsZTnpW9UJ1dsmBWWAZUHfLhSCYbwDY8iGAv3"
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
