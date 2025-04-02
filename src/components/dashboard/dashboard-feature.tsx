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
    "4QMJsPRKQqhMtNwmnc3b8fWJgnyn4GKE4GmGfksHfk3kEbNyLSqfNCB7U8TYmWeinCi794mSe5XnUMKVrD1KPmGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jykYXZS1utuDBWDau7wC3nMjuVAEWWRCCjSH67Abpr3PTqi6v6mzkBBNhyfowXkmmw6hRJCkyZJkNr5DX2rioSA",
  "key1": "4TCzQKUfMkEdWSvpUZY73ZwFEqjjLAqF29vupjgXikrBvHoWbA1s57AZ4MqEatg6dRuUhVzYSLfw6GJJHhrpa5wm",
  "key2": "4wGuksnymTJrNf3ppRi7QVrMiNoBwPo8oAyq2wvQyvaPibBjqeWZ9ZLjVZ9iGk51REDZKQnGqwJHnytKmJJQQAuu",
  "key3": "3Lckh8XvZy9cyvT46XykM9qjdSJsKt8nP4wrmuRDRPWDmp8huvEjjrTuUii61Zd41BYsZpkdnamw5UX6ZnExth3q",
  "key4": "4FVfPFoMoVb1mRFWC1mUcen6m5tSuPK5soCZk2aesJ8xeNdatduApDnbjiPNNynTBrFVgBipGW7T7dirj57CfSu3",
  "key5": "3dbGSTe6uikRUUXovSrj9gniZUzAbK1C7Fto5za5NykTALKpK6DernMudS1ysySnBURjCMqHfRttxWiovxNwPAk4",
  "key6": "4rXKqgERTrVP9wav218AwkL36qsn2aFgDZV2RphLnPHNH6E9VjB36rVEgHVX1Bq155rfUnfPvTX6DpMSSc9AbNJ8",
  "key7": "5uVTFZ6NWRJxTGVija2pCjWmYwZKbnwJ95qwhSsXvCRsxHjkQCL5oVnidbyP7fvr5P47YfZV4igNPyBGgwPdoLA6",
  "key8": "4gjij261WmnMo1Dw2GpAN79N559Sx4VHvoyN4PPYqeH3BjFjvPRR6remMDo1K141XJzxPJgrDAUJjFFemSuvrjqK",
  "key9": "4UWUi1nfpmVN1zWeRSdW3czya6B22WQ25HNKDfXMHQADtPpBcmveuyCB2dN3gXw9vy6xHUesPumvKZPoJtQgejmJ",
  "key10": "3o9vAVWc91oixBkQ1RC33dhpzsD3w7UZCpWbNrn5UdRcJsuZFrLou7Aszh2GNfY9vawvceWTJYb1jFwVFnBmV6aC",
  "key11": "2jEWFzm7o7L2y5QuDY5vhJW9PLAE9CDyPrBSkF65VTgECu7HjahJG72YuZfE1ShPH7Wvpot5ybhHN7gBu9YXne6t",
  "key12": "4mP2TjoscHJdNb3mG5pzMyuGie16G5aHEhRTghpXqdZYyjuSXiDptgZSscGaGRNQgGUr7cAKS9iRJw2xSB5R6qs9",
  "key13": "5V1XErHYwcXmoaDJqTwmpGnkDLqKbr8Tj6VhAP1U9oiFnr9jYfe6xz1Xa9vzoQVPjf4huaiC9eSwRivYmoH4xkfV",
  "key14": "3Zb7WifE1US8wAFFzAzHr65XjWZiEzYCvvjC9CqHA27SfeALt286HzUUaToYdZ4D95aqRouzTL4jouxkET2XsUFf",
  "key15": "4voydwM343RanwnJ2rey6aUej5AXnj1zTr6W9ikgffbXiXY43d3t6ATky53oUCE3DNuGEMfdQ483noFsGAMKK1L5",
  "key16": "5pDYqctgcXjdusQPM1G1W412KuajWKekMVMXubuLmsGMxBYZpnpVcj22Ufg9L5qXtpVM67Rpbg6JGdtDSdEwV4FW",
  "key17": "3hTzFSpC8ESUzMBJdwZ8xBo9DwTH8C3q2AW3Xdjk2r6THmmHw5YAjLbmMJJGcpTvmdmE1WMsvtFYNeAgP2PAP9RV",
  "key18": "YXLSbiG6qgv3ErefUZfQQBrt6Hq899vKm6TJfLdrMFNjrz3b5Fq3wp7Nhd9tqhKGGbJtv3nbDzLmYzU9JeVWZp5",
  "key19": "4mXPEaHndKCXCcp7vkYW9gAdsiyH4aFmdHEjZr3PBQBtv5P8v6FkqDPVQYsejMsDgzWCaXCumzYRSTvv5U81g4vJ",
  "key20": "51sixs4FKCCntycN8U24zmZ1Yqru8GXYYjLFcLGxjtsCKXv2jVUo8MtvvGLR7PxA3P8vbBnK1btLoPtTSc7zZuS4",
  "key21": "XKbQsJaeBtovynKRxDjKmeUxe6cprpvaMhCb5hWHoWLVcy74VsXRhw35tKrhjDZjnMp1qz6iy98WtRZGkmCd6P7",
  "key22": "24or8faQKVePZN8a9YWnXbLVpCFm3QdpvUpGUzbzTsJ4PMBzqJdq1JtxSoeE2S1FSceE91dSqtAfUgw36tsMTWhD",
  "key23": "3PM7sDywehoVHYBjD6Fw5rFfNq9Xoen8AR8mrCugigJW7rs7YzEvLwcEMtskWGEuzJiKNsMDPHq2cfZPCmb83GWq",
  "key24": "3TQUKtzPU5M4Ga6uwuPG5NuHuhfJLcpqUYqSHFX8r2PRTWYSEGsZ5sFSVtPAD2wZh6hMEXu6Mk88LLd4ZQvg27eA",
  "key25": "5NtXvqHBbtLQQAg3uNfHy2gKRqMpRropq8DpT5KMAnk2ncWyMfLkR5wfQjave4pw3r3uznhnx6DXoM4RcsbytzGe",
  "key26": "k5zAdobck9YuKvRFwC2absmVQjT2bQWuqq7zkKAK7qiTJhhLcboa2nztR2MkdyyohtLYvyHBPTk25WSo6VUqvju",
  "key27": "2VYDMYomsX3oHJaRLQCdC53nMvUj5bVtsPc8FydadvW8v8TTe1YHjbS7atBdv8uuvfosEfRoYhQCNnRaQh731k1K",
  "key28": "3HZUAtLr9QKLekqNADh6ZLHNCQMfJMgSU4nVwSgZk399Dr75tupY8BKAo4nZgUDb4tGtAnmF4qnqXXEsG5iAefHV",
  "key29": "2tkm2KtxbrvPK8rZGDuN7dgmbHwen67sAmZGHGSiVCkvBQkYEvJpKqRR9sno66EaSFPZP5WJ739LcZhjR7aswHt3",
  "key30": "56K7UAuckoyrSLToS67ZTuu3ntJxcrAnBXUNf25udNQ5L6hFdJYEKQPE1XpUTJq1USCtatG7nFN3gdR6hr1LJK7N",
  "key31": "4Wy4VrHmzffYrNkUhcm2YTTcx97ZTFFHSz3HCqcgBErTA94dKX9tW1eqKN5GoBJjRsjJAqLxcrZCUTnchX3xP9km",
  "key32": "3cTCEzAsxRxM2sAZ4WeTb75h4GmNNhUZoqUxYLgofZU78zuRzn3kTQimR54waUvR7zvngZx6FaZbcDheLLbeJRzr",
  "key33": "2q9CJ4mcyCvYa8Pgi99V82Z55RLKR5qAb7kcNc56NaKUrqBNX3GhAYVSu3ybetqbaxcGsss69Kj1X1EacUjmTVPD",
  "key34": "3wk58cJfjFH4pi4wSY8qq68c1JhCnbHJtRrSKvmH88DBWgpsdFvhE2LvCmiVnzeV3un6sGAn8tLbgcG68A5EBsau",
  "key35": "r6yJtyMbUHYwfmBeaaDjPz1MXUe3GSJJvb8F9Afhd146DQ9ciSFKxBtddYhUS2jxAi94esXdxnFSheKxcwW86La",
  "key36": "2h183cwe1erRnEvbj1ST1wxvxvrB92VNgwd8ur3qmf7cAuEHX9hZzU6DtDNcWvhGwZFeuPsW7CJpgg7MMP1cHXCp",
  "key37": "aU5DzYcag1ivMPVqSTwHSrWzzWGpGzSM8u5Q33aHA9GnjkcwPxrDRgbh8nAjZTx8DXQALbyi8MxjW8Pv3C3zFve",
  "key38": "bG59GGDKzjkyDSUmxvPhyGy65KftLZgif5VQicPbPzyGfNaxFnrSQfQxo1dXM13TH2XC2MaASWxfftTvqDpaipo"
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
