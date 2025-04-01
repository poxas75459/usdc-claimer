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
    "4G2HoXQ5NoTkbyWYZPzyiwbUdWKjqs8gApb4GpR4zwyAcSUbGTW6cLZ4vuz3grigcZJqLBpsH3dMXJhDTGZ2rBah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WAHiAa2SNSERLzZqb5MKbwx11tFV1EK7SCVAR32m4t3v5kK7DvuzW6UBcXykzeUHYyvAvGfhVifgHrD9YRSbQCD",
  "key1": "4HsdDzaURKvRKZUCZB5toxZCTHiJt5EhuTckbnYU5AXzjYFKGaqqKbiA6R6mnytbcZkBktGhFptwhcqiRx7eMSuh",
  "key2": "4B1V5sxfaMn2wPd2ZC8p1KxMNQGoUHkVNu3V2KZ1PMd4qFCDqmnvDLH67uDvnkwXgWs2jmzXPYBm3MqrsRnnDmtB",
  "key3": "5v1crHodtjzEsF6PBqdonats58A1RMgy4zY6j1ukrx3zfkktEsczvJ1FKMSH8eoTEgZysARrJi3pcLPLkkgKBW4n",
  "key4": "6bW8iZZjNgewH5fKsVgwiAiefhre2LAPjpBtWc1MTiMH8BReNgbn4puL6D8ZmuPRs8wG8cKPGhiAfsSdP9Uwb78",
  "key5": "9GcDRjJ7RNtjhvszv9KCjAg7JLuVshePdozf9xMN3AZy8tY2Z8vDAZWckwzv9HVGXBAXHb7MHCZKkudnBi9UsEA",
  "key6": "65eFdXMoR6k9TCzm2H8vcv6VWRnyTVKGJYau9gNwYv1MCfsTq88phsyN3UXHPXcASPcsK1vitKRzqnanxfUwSw8Q",
  "key7": "4Wgk1YBvGUPfPJxnmVWNUYydJ6eYJQCXWtLR4Phk3eaBkTPnaM4rXCWmKuT9chAZrymDiaZ95h1wSnjZxmQexpsh",
  "key8": "PvYNsUWft9iV3wxKMg89wV7TAxKctrbh37dsBDRNWBNn8J6XXoN2JWaJnNKi8oCUWSMaUkU1ahHSHc1YCR6wCBs",
  "key9": "2xvMuaGWrH7aaDEzTr52r3TRjvJk1zwe7nkCb8EsFdd3ofscyKRseysxgBqjgb1iozKDJu5PKR9Xb1XcbVwNWf1J",
  "key10": "3boZbeCeQJeB2rgGm3KdqmshmWtgrnx7crPW6ozwdtWnYKybDLE36pz4fgCPv8d8CNMTYVbinQUyUqyFaKMQXDMP",
  "key11": "48TFcebZym2BGewBUDMwpKsvZtenshW2vucfDWp64Qhja3sMiwEWpABG2GL5muPNaQeZTw7b8RSbpXWrUtUHgpJy",
  "key12": "4wimPwfsXgNBpus5Cr3NWfZALG1AskR1PY12ujcNuygVGFfbwuWTbo1AMKFijAq37ZSYJJBcqW6sJyUL1efmd95d",
  "key13": "67D3zGCv4Rujyaz114Lwse5F5e4Hx9pbqYntVCinPKyLXFckBcRrEhdUWvSjs4XRcheiULBHfEhR58Uw4XDkCT81",
  "key14": "62aSdnYzVsGaN6kE2Ucu3ndDiTyxiGgJTqoFkRv1zPKY4uuxoT5rXU9SQUdvnJ9SbfMtDMUQN5NvC7bm9kHYff8m",
  "key15": "5DY3dYGqQPDUfPxNPGf47TcG7y7c5jo1etHTHwyLJo7ivZkw5DM164V7X1mGr9JWwNd8oYSNi3JBEX5mXJrVnjoD",
  "key16": "4LEkuKBoK4AeQ57phd4VsJxytbo2YtcyrTxJ27tFLUGasWkf39czbiWVs3Y74hYtcf9NwgBiVmroU1U1vARhYY8r",
  "key17": "3EwnNFA6rBEMzRYuefFuWaEK9Y6nYJhoqB5LoNxaY4ScxrWyYKqXtqqDLyxG2Dn5EJGnnz2QnFbEFaDPLjUS8Qcf",
  "key18": "Dzz3fWzJf2bRz9r6jgUeXZHscNhwE7LRqvfpiu7p9eF8R9hJ1opiTaNyF4UX8xhddEugo2SQXPcKa6DkmeK9gJ6",
  "key19": "35YAqaKdyy6JsTKzwnMVFDNe8dHEuBKMAZcv2NH4dT8n2xvvS91s1Kh1usNubtZ7NFh3Er59SiNW51VagH9qP8xX",
  "key20": "4pr7VRdDt9JAx4g78PLrbiSGtZB4dKmaQrYnMWf9UMJjzutnu4Xb14vRFGRx2Gxvwu6gJyY1vUcNU8sk5DDAS8MD",
  "key21": "5vCuPnFAibHFSWjPLk1kFN9ViSki8NEfeeEor6VE2gFivEZ3JhkjtaBFTBVjYDLH2CqnmYU5EsZpBiS59vPMeCQb",
  "key22": "2YJdVaTvJYNtoum3tYZPNENnhRFiezt35FKETyiTgKCUGN7oyG8R5eBfm9rHAcsLjAp3TgNuBF1a4Ua22gVFKiMo",
  "key23": "34ykL7t4pfuXTD2gtRWXm9ZZ6wjcxDjfixfAmgYAoP2mFDxRbufvYTfU7F6u1HLdHG2NTV8NeVS72CMH3JCLXUxE",
  "key24": "2d3zHQnqGchedBToX8fJ3XevFDjAZa4q3hvYTZDawHa4VN4YBMVKvufiB8XSoWtKx5nvpXRwaQiRWfr6xBjZd9oG",
  "key25": "4VjRQsqcWM4s1C7r5kt6QtpeqyY9bqQ8L4RyHLC5LMprHdSJYjZkEVnkD3ntsGVTNajPPauuEpJhfxZjH1AvSTJJ",
  "key26": "3Jn1af86HfYcc3aSraMSg1mABEG2UzS4y1zg7onrsVSBqY5XnUa98ArHffc8P4SHuUjsQDsaT1tJpXoWBcbpiZ8L",
  "key27": "2AE1VxoxiPEDDmGDu7nkH8hhati79uQZ6S3i2RU5z64ANywNeQLSZ6Hws4YtPnEDZEtmSbC7gmU8AoBH3ajmu48z"
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
