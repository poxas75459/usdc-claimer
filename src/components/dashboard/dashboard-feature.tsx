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
    "2ZqwPn7pEXU32BccALgvD2n95kmsDHMwcHLuoaQtKkjwnENCAAiyY8PVebNj4xmUnqZyerRrArBu5EbG7inMhd4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XukMjjQGnvmGcbuwKgAj5YQvAfubuVwPYUM61y3DoQ85MvLJFpr1ZjEzGpLU4tjMjRZJVfnLoD71prVkXmRRjAf",
  "key1": "25vTEpqYbv8RcR8rGdVxvboH1p3WBKp1BFcFH3NeYA84aqaJo8pyJwCSFFJYgxpXJqkrMq5b7PdzW5BBJJwjQcCW",
  "key2": "3GDDSyDxE5dAKKGCJ8zHRkQsK7scGQZygvjK1cRhV46UhnJuqLhqTCpeiyZ5nz2CZ4T8MCxnUDd1tWR351Ee48i1",
  "key3": "W3pSjJd8QoGDaWjxQTUnW88WFqhnP7iRvrWE8EM73GySeJznDwnNahNxDrqgNdMoojgw46F9CtVSYSrE2nZCqaz",
  "key4": "5Lvs3dQf2N3tWXKuYDC4CfBFcMBay9PGD55eNT87C6JKGwDcrsnw5CLEFmEHXZ6f3gpAm88A8tRWXTfLDNFnkEBq",
  "key5": "2J1pyDJSnz7jjNHCXRX4rf6JeKvedFqzyXEnGoRqGELjjrCaEdgkMnJSMiN58jEyCTJuzHqoWvpXdZm6FMarfDup",
  "key6": "sgr41UPtTcTDFxevAtsbSjYzPC7VTF9CCUwWsuxHczheUrN6qPrbX63itop6spUzRycJqoJH5ZaQQjshAfvdTTg",
  "key7": "3dMq4ALidkhbFpHGoEufi9BiP5BXsZ1ASyCXhf9VHP9Fv82ApxaBfHtTdVaKCtVt2JuBvx7d1JDyc1SPZCMfABfM",
  "key8": "2qE1G2dAPJe9FGDn1cZG69mTCTsADvRkzo4qRRXsoZJnf4PRDbbs7N1WWoPFoJ2EGBea8fTYWMeSoyJWZE7wkTZu",
  "key9": "2cgCYGSZ8Jbdt8YkSUVrxSsxo9pu6j2oEmgufXps4Ya92s3gQTt9xupb285y7m92zft6n4FPUbWe4UQwTReoTsCf",
  "key10": "2Nw3ujsoQ3QfR1zUvVjXyA7hs97WZhEREPrCDApiVppcM9Yo5z76gL77jEPhTMWZFaeiamB9TnRTN9y2yi5B7WBE",
  "key11": "6iYSYRs4ZB8Gi1gkDsFKkvrpRxN7UM8CmkkcbKSq2LGjxpqBCoNMTkHuhr9o42nozgbdcg3jmto3rjiT6jbnMFG",
  "key12": "3BmmmnEr7Kvt5xKdvDAfdSxfKFpGD1yyEakujDE6EWeA5WAQQxo8HHPfcHe14RwwtobSbcVYFtDs6vBzMGqRSJaG",
  "key13": "5CyeY3mdbWjrAxbUF24HfJLx36UvT8hhBqtm5FuTnGjPy79uXmixfxtEkkvDaPJ2fMECm16hUEEHFmDZ8DRZxZdp",
  "key14": "2vvvqUUwigoLkHDG9JVFFo1ZNoGdvEwV5ekpCA1jeFMbw5AMwSVEk1mBEZHxFtYQ3D3TPB7nidDqYGj3ueUVhBFu",
  "key15": "378K4wTbE9TSAHDmAYRdLodpQ8nv84PBsLuKXcz2BZvRRvpZt54n3oUNfBxfE1WF9c1SebGt1rTxuHAQWwPm6jyb",
  "key16": "5HMgRTJDU457MEMgsiZicpU3tJP75uBGQzY31UemhmAGtv38NGpxx3woXNMF9WYuQ9UU4n1fN4Usq8f5nwpr9NdP",
  "key17": "2uHZA6fCkRsrbyQP29FfPzEVTiAAfqmcfEneHruksDPhqcojKvkghRyvWHLmjsd1gsVVU97MwsWSf6mbJmCAeDTS",
  "key18": "Q2MmJZRLCrx3DL1FKTtnKs5vSpUrPzzBETF2bAatJ39Gktk2eRDybJPwVQtwFVe66o9QQyvCrtg6RBVjD1suCTv",
  "key19": "4LDsEiTEYihoLe6VknT76agWkFJZYnp5qdaoYLkCXSxTwkAxuv69RUsWT9BFkjuvAMdy2sCwVKVxYd6WBmTnmPr4",
  "key20": "44G6FMKErFwBG41oMQye7VsfpEqhcergFfdbLjMCehy3kg2PRLUNDFgMVESzqSX4YWadye6epA5Rg5SxeWAkwWie",
  "key21": "49opYt9GweJUuezs6M1SsqxPrSwB2AP5BygPuojy3X3oX41zExxoBeV4fpB2ecVnbQjo59NfrNK8wDrWxSH6UHUy",
  "key22": "27abMKsr6cP5F1EnbRJRjV3YSqLhGgewL1pFq2GYkqfaLrbirb8ZJWeMeF7oJsZXQ1yycEtzgXHDfumGNtCgDEkT",
  "key23": "Xrop7sU7BLb8nfPYZaZpBA4u8eFLkvZNzYcWuyFbZK47XuLRuMxfoWPVWFF8AqHzvgbcnUGKgKoFitQ7KQPc3qN",
  "key24": "3qbfh7jffhN5EZN9CLT4xN4QgHUYYq8dgF9Sptvyh66wZykmLVBGVyNwiBJ81N9d1Q7AVtL9ifMWcZj7DGuahtdS",
  "key25": "2bTUrGrMX72JNVrXbCqBopaWtCi3jEG9EE2VvGAXgDmpuXBt1mK5PqZnsmuixtoNtX2nVNJXpjkrdPCR4HjLu5Aw",
  "key26": "62aTtPVm443FMRABFGxqTuAYuH9hchthgEDzo4Mhz95L8qLVaDi7GPYgcsXBtvuQGjhGx6n3SyVhn1E6QFwKyYCH",
  "key27": "3EsFJUtwTsobGJZh5i2JaFSw8KUSnDYgG8XWM9hn9Jih8P2mX1CMpZmug4FMbZyyoomzQV77LDf32aQRZoGGvPHq"
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
