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
    "xyUwR7dE9RquoBEtHsc7YwkcZLv4BBaC6LrDi2v6JD92mGSwXMyJF4vJTZ74BFFjXiyigCCRmRd2YdwFMXrm6uS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ADUDzsxpkL3vUoU8B23Pf1dRayJckyrunbqz2K4JiVCmCHL2uwkJCzWafKET58ymX5whWrigH2vBfybAxpg2U6g",
  "key1": "3gi2aibQAfc8kveXH3degbeWtdVrT9zHJ6eU5qdyWmiace1mLYk1BPE1R5gkgm5p2o2XYQAaYVz2TBS2rBeeGXZT",
  "key2": "6aBsKwrpM6L5S3Y6odc1t6tie6aotsrGkf3AXsdGkMS1wsaUDyVYiEi3pfkXTKhN17rF729s3S9Ckjb5ywH14d4",
  "key3": "yH6EbNPd9oGqrziVaa7j9676eQT4A1bpqBEZy35zjiZwFaynNGFN9TdcPArJb5ejBMRw66oG59Nx4acUgQXLX4x",
  "key4": "22czroWdNdVo5DYDd8vtAtRcxuifTmATSyPQL2rSN7j7UhRdoSPA5dF6etRLm2shKCzXmMms95TazWTJBT96eBQZ",
  "key5": "oNaApvXNDDGp8Q5aijr2a8aX9rLmXQsh8gPQ2dTu3zjHDeTkN8jX3BZR6PPj7u6kBxpsFbGuDiYGecAhBeiwEPQ",
  "key6": "5Gt1SHap1bMZFboCNo67hrYfFJV33YGggxCBMqhwfXWc7U3YgirjPcsnsRU9outNHPoAw1J7kAW3LgvB4VE5d2tm",
  "key7": "4cpotzziAYDpwPVm467zgUC9cRn1BZFSHkf511a9U8fxesrZiFg6rExYuo4ae6wqu2agYfnhZFytJ2hfkZRJ8WEh",
  "key8": "4j2f6x7NBdXnZGdAheGX47KDP6fs92V34Zo9wLbpxJxRvhqSNaTCpAmpQKL59U6eBdTSiNSAQ28W9QoBiJ1mUniS",
  "key9": "2TTUAH2jqtHPY391HUv9CHtzQpSCdNaaeZ5L2ipXBFV7ox7obndWDLdDSJPT8vSWQUXDXFnNjZDU2BepqeY17gkG",
  "key10": "4JgvtpLFERfUr8F2xz7F2VS48pmnwXaKeSJoSFnLXHHPe5ezaLXvk74di1jdFbAeTkNxtiMqapdSi7rHhwCEhVPi",
  "key11": "Dsw3Xkcc9i7Wbxpq5MWgvjYWJvN2drtb8Y5kVDrnLHYbCxtAQhXw9LdphWfm1R1sQRRD5KJmbC1AxH78NyKuCoa",
  "key12": "iULnyAdsCDD8eFAQrp1JQvKYm9yxcca7V1U66sGwXg1a85jZGbgv1MSsRSVAjgSRpDLvb6qoUAb9JH4izvCXpt3",
  "key13": "4DHNBCyVubz7gHAxKx6st2nmvhBEY4jkL2tvYSYRCST8yDAT3NoYURdgTftsFE1nazs8FyqyWxr48S5SDZVik7HH",
  "key14": "46BkDjuMUqMFPr1Aruh63xTGZqoyPmwXZdpjL8Bs26iQirmDtjabjuZXkfzLbHoPmE4Fagtoab23mudjkuiugREg",
  "key15": "45oTYywCTYyGCYvjbtyk6bjKeZdkseNNgW8xG6juHZ4xr4C3oC7SNKtA4d5tjYeoHSJRbk6DsKkiy6eAbkCDh6bM",
  "key16": "5NcisEWEvRthiNjzZzvrGFXrLR6KqS89PVeNScjJvG5idAxofGNUu2kCctySGb8thrKaoqG6B3NAgNfS3ozBDyQy",
  "key17": "5puB77s54HMAPeMXxHEgJAfxe21kTkyz9zj7iL22AXEaNj6M4sLi4Jo2SHxDhFjjgVaSwrubQDFHSNK6j8vpkgQ8",
  "key18": "4myt5m3F6rG9A6DSto36FZPn5UYpsLtk95P75JtgU8tWa7RjaYofGdAJHmpZcPP1nmk53cukuJ1sveNAPSKaDWRT",
  "key19": "51sJvvp7UNHwJSoo7oKMbwSjBFnaptWRdv9aMMxh1F1m8cdR9tCz4Fonw9RL6a7Fu8gN9C5ZpUxFNv52fLch47SS",
  "key20": "2f7kW2Vjs3WRg3MSm68MK7V4CyzhVKbYpbiMFH9YzhGSnA2xYkFxkT9XWkWSD79uz7GXfAWPn5vsWhB9yykaspAw",
  "key21": "5vadd4beA41rvCGYjeDuVJbz8vaM2C77JHXzY8oPHzkDA3Sz6TAQijWsuxQUshKXWcsL1FAuNP8jbFBqzPRrtdM9",
  "key22": "5vVvunLdSnrP5DaYrdSJ1oUYZNGAid1dC7cBR8dxLPyYbBUSXRM8ThwjWN7qz9oaXdY24pMvrxMA7ddx6dwqWHYN",
  "key23": "BfQQrhpKAH1U9kezzNxhH7nwNhLTNrLf1CP2yzPgS9fqtK1egwAp68R1etWRNNnSc8TtYA4xjcnKbYVWTcZFGcW",
  "key24": "FTqNzi6aGW3YK3s7mHZXzkB1z89AJtyzLRdhB9JrmM3mKALWTMZuTrAFb2P4znxgrHZ6hynmkQNYcwEQMZCyEKT"
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
