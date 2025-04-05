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
    "2mTZ4mgCQWQiZ76hU9d18L6iJuBypC4BaU7iR89kCCpNzu71LgZpLwrEwhkaJyRDo3YnQmjqaFu65EXcbmncEMkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MFTVaokjRik6cN3uFzDbifmcLX2XbYsnLxLntsR6Z5Ask8NeUhWr9u82zpkAu3xRnXRV9DHNC62uYsoVDUmRCBB",
  "key1": "sEKFEBEPkiS2TzpB9KYy1dfSBrUAaUkQw8mcVV6ysdLSy7Ern4ND2pGrweKM1oKuCEAoeEtLVpQdntRHUcLr5DE",
  "key2": "5HeH9vx8d6nWvuD3PgqqNvKiiqLFgmgZfoVFgfSo4FfVsV3x9SRL7bbEewMAQzcQsk5tduuDayK7kZTgJcHknbz6",
  "key3": "4tNvdSBYm9csUoe3kooPF7YhQTK1g6V2QvgZwqECKpndSFGPiWi3Y7VZmLEJCFD2kHuDK9bytu8hWbtRnNgP4oM1",
  "key4": "4D4pAgsukHsCYae6k2igcS7ru3xKm29fmFnpjto9ca62DCggdMWSSB47RYCBK9dRnpaNEKnBgDieg1by8LyFnNzz",
  "key5": "3MWMUJ8WuTp48a4npCTrsUacevVTrmBFDk8Z3rSf4XTLQ1CnQBRsx6ehCThRXWvmA4xKZeMSMtf9GjiAPcRL4NHN",
  "key6": "3STKko2xi7X435KUid5nzz75533kRUwt8Vs4PhJADNeeR1XYg4V66zv6r8dXqBad2UZdLAGw7tuopLfZ5bX6Ara3",
  "key7": "2kGdUYqkyCDeXnhBwuzuWVwhko2r2N1vqQ8NwL8ngVjfyw3xQhFWGi1x2PgP7hQNMxTa47J5NVhxpLShrqsALWbG",
  "key8": "3MCkTFXeJ9oAFdb9w234ohboHNNWZJjZtCtWhscU4YRF8nVKbgfGMrCEnznC5eZypGRUbikmWtsF4vw72GGSJC1H",
  "key9": "3tq4Go3UEzLeFxbfkUqEUQLTfa5fqb37oSZcaSjKpz2aeEqFU98Zsi3TMQpuS7tmyqb5GFLK96yARmXRDLSdEsTy",
  "key10": "2NqTJLu9Ybi5urhLcCLXQzJU5z67uRLdukPPp93WM1Pi9w1BxG24jFS7tRVGPKZ564QcWisYVwsgL1rLiWFKPwHa",
  "key11": "3c64hgegzNff7JuPQzh1QVQkydXisoq9G1x13BS3jcjSiYweqN2pixAhmByD7pYpxSrZms1Jj4Qe8vL3SvdPExej",
  "key12": "3ye7bJMGKeUcbp919yHhWHukLoS2tinLhjUJV8DKGy2a86azozuU2uRP3rJEJe52hegSBcmDSqRp8BrZPVr41myc",
  "key13": "nJrBWYFe4NzFHbyf6Rr9zEnzRiQxhd4XQ4oL768YJDbnTanqAYJJpYnZeM8JmkiA21ZdnntKUdrkVeiU28ymSJz",
  "key14": "2mVHCUUXtovPBYaCKEe7HdbNrdWyVCCx3YhHK1a95X5vUmSkMeLgMhKN57X4UgF2bUmKqsnDAHsJ1ExqukErCxew",
  "key15": "AtQNd2KAnoKqhmNWEY4wni7Egh3UTQig4GoqXQ3fXCAdmzp8ELLxfqeD4dkHqgSNdHATLs9Wx9BW9Df3szcEtwq",
  "key16": "4SBW6srvqWH7g5jXrawdUzy4LB6x9ayWqzfAf7we27NAqnVrRPPHaRBWr6SaDiMN78owxbT4vTSLfAPCi9NfRnDC",
  "key17": "2MFEvm8NLo9ckYJoEdPuuziS8rKvPpxYLMYWqxoPkL3GmxFi9Ryeqr45afUPbtqANhmFbtWGqmfWa3Vu5o9CLMGZ",
  "key18": "2prksE9G8nhGFDf6mt4XiAezSQPynopwp62B1a3Hsuov9SS6Uma37oSaKM6T79oK7LK3Bo3jYciYkZygJMMQTf85",
  "key19": "53HqzBGw8eDwEWwNxgYaVFjLf2M9MqV9Tm5sUrkxJk4mG94WV87ezy3u24Z34KZRPvnpXKLUyPysXwPQMqLNe152",
  "key20": "TqP8yetBMeaWMyKr64k8SqwbGGeg282G47pA6zq3om6sqxtRTq45JwwbFmTSqpfUr4djem4EfXzFRfgLWAzaGnK",
  "key21": "41m8BEMRxDmd32nUB4976oZX761j1GbsWvaakPbi8GQuN75AyUJzdDkGQ2tk2AVFMRXKZhPWQ5xpvqPG7gKC9WhC",
  "key22": "33F1nH2E37Ytp8E9iM6fm5K4gW2ocS3M15aWMMQwyFxw66ve9ekCh6SiY65jVc8QQfxr8eECzsrrUcTX1eRQeKVw",
  "key23": "4PtordGaMHJMhbgdQ4QmfVUJ9aRvqN63VbixUMhXBbkeTW2Ce3z6MA5mo7pnC84hGwVXvxHrGee7YRPeDFgoRHv",
  "key24": "2VzkwinWfQfqXC979nYahaBVkimJhrUJcDfmYb5PjUy78b3QYQQWBZ1PBviEiyE2d4hCii7azdMxsANP8RG5kF88",
  "key25": "3YXVBdNN3WwJqfFdJFnqCUpCnwBAXvxGu618VRuzT3hronLVBganpq8zigNPHCV6zjzVWWHuEVx29Mg3HUoA1cFL",
  "key26": "56FMkoLwFjZKxaT3LiFRck4ok32W213RvHoBfFzVP4RhxddBveB4ftfiNFh6tpshYyBttD67fQBRRdjSaQA9nwpA",
  "key27": "2yenwy6Stc8VxgPWNSoeAVvLw1qGuU4XSqoQWFMSFbvfhJmKBytYzkzfRbp3kzh3AVvdGE6QS1qEwmaDqjTkry4D",
  "key28": "47NuHvRcLxUHb9nQmSnJRYiBZ39EroEk7t5mdiH5YWZvW5GYzqQUY3c1sXo2BxmEhSZK7YHKGeGQGFb4GeWCEDRf",
  "key29": "67PDpFeFyAvbKmccTX8atYz1VkkKvU15KfNNNBwfS1gpEsyxC8fAvBftExWjekWgUbkVL93ooDRVj3kRXkPwyn17"
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
