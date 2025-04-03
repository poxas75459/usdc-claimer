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
    "2yaXoUzCxZToGSvHkU7tfwGzCm84NSvm7qyxXzDStmK3WLQ7ec2ss1ewTchPTYUagQFYwNvwfC6nwWszf196UQNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YMbC1gDVWn69f1Kwj7mwF2HocRRGN3cxK6ShrEtJ7LDA8h8ykmiKUrk9fUwHZGLd9UK8LYs4VbAfBWYVjgkHs3A",
  "key1": "4ZzuTL8VFnEnyYDJHZBSLWyoEMdh16K7zn54yjKXCuWd7QvkkvuEFmuXNx2wPfENqFR4wkMG11j2JiVKyRWRMGrw",
  "key2": "BzCP24qDYU64mDGb8Xg5cgDna6pm7he6H6G7mfJPUKXTgjM7WdhapYNk7CoZk4UPfjW27cw8ubUeD3cN2qPuY6o",
  "key3": "4SowfKebSvJV7uKMBaDVUsxNBzDAQzYL2HnH1E3hiikiNYqTQV5wC8X3sLfcy4MjYW2B94NuXqwYPyMWRkaqKM19",
  "key4": "2EzKiNQm6h8QZYyabj1kYbwiyVB4CsU2fMRVMYSsnvmzM19XHU7C3YHRwbGbjGyt1SuaMhQdVgQsDg3fp6FyzCdx",
  "key5": "5iaP5AACcb2GDGtFfb3bryBa4zRaS3NdGzd5rSyb9Jxbr3BULvynmDDTqM5NGrJ8U6dsHjzC9fpEuujWRydhTir",
  "key6": "4xzcpHeaiHpf5eb9oADCWWNzZs2roZzBoWCgtEkXG3fhp3WEBf7qhBdepLSuDjmFhc7zfi5pXtoBfzhjg58tESTC",
  "key7": "5fqaGeszQmK8KdBZq96EnSQuQLAM3AKZ5xdtKnSgJW9sFXCDPGCv5UDT2kGQUjE4GVxPcVwbX2fTYo6uq6RmRc7A",
  "key8": "3PB1sFjG5wihj8GJmZvv9R1uN68nwjaQwsxqDVZeBw4MZ9HYFRkZ2gP2gUKve6eoqS594GB9fYw7SLzRpxA4B5xr",
  "key9": "26otkQLXbekBDL6et59BaHrh3thK8Rt3ooL3zMBA8zpSxMS6jtZiUpzoHqfFyLcu4qE2ZWdAfzjHiHHEktG163Sc",
  "key10": "5pimBkCHxiiaEd1nG76DAjmbnGui1YtwMyqQXhk2HGK7dBj12taCK7a7idiPkcNiHzn8ZEus4XgAY84UCf5aVdWZ",
  "key11": "3g7wTfBSuRkovvcTNfBxDcy6uHg1KLbYKHojKMKh7pQuZF11Pm3rEZ9yiovxrr1PwE6herQrLEBawJ4C2Y5Pgaer",
  "key12": "dFinVzy9CirHxfWkdYLPZbbpQjkqaVHN4Z64eniLUTnJz4V9fYcwi7AQfsWagwCPdsEHGFFaBcHZkUjY2zb5k93",
  "key13": "2dWenPhButNSDJk4X8oAkPqcJRBBtiZVt4FkTkxA1f426MWouFodz6SthxD7LaJ3Egf6KCXvjNLjYiPc1JBechNs",
  "key14": "2sCvbBMGB8eccxYdJ9QY8r8gbQ5dqN5534Vdwet95wsTGvjPJZf2ann7ANXGNr8VwmWnrhGQxKgZYuAqX5an1w8y",
  "key15": "2nGLAcHj7f7qRvJw4zPLtkXW83VG8vKgTgzsKVf76C2c6CxSDAZHfbRG4G7MP2Nrs8HmSTR5kNp7ymwNUpiYi1Tu",
  "key16": "3DtdL5ctSNQtEnKR1VZmxrAR83aU3fN1doA6wTdL1HqVGxioVBSzmWZokE25Co94gVY68EveEvgLaoriWaM3NFTL",
  "key17": "5rvNhsppMzkYkKbkFKyNz8d8bJ2d9LUauDt1PsAbgC4xjp1SdhHFu6moWzX8vjb8pSRXJSVwdVGxWHdTTrqB9VPh",
  "key18": "3R1NDBk9JdHRPXU9mrer9twssh2urzmBXH5PeW6J2mEV4L1v5oies2tiS9HX55n1WN1yY6FmjxgTPHmygZvMBkf3",
  "key19": "3393MmbQXmErSAwgkWhr4hbGpDDArqKoCcB8ZzSdgQc5tne8rYgGW1T1aVts5vkWvL4uSAS9ikJRWzHXeLRmgb1H",
  "key20": "2boeP9tRKwVS21e3kTzTKmZBF32BVbXmYfvoLHLezgniZX7b11bzQE3Au6aasQxvpyoRRrQyzg4SUcZRQs9SzZW8",
  "key21": "2GQ8YBH8wBZ9JCcJfKCYVPSBLJZZqbbxwwpdEpY9m5Y6iATEksdTaG7ama1XmHxeWNUSTmWDRN28LYsoHDrbUxSY",
  "key22": "2w3G386jjRrmgLAkFLtyz5QP25HP9G7W8D3mfMBgLkQQQXy7LrBrqaTt6Xc7DrWigDhHZjc6BP6FYGcDXraog9JK",
  "key23": "3SnMV2WyWVVahmviQHVqqWNpMffs9xwfyHApXGLbC2u13Fi5vsWa8pTriYU2aRpgb5a81Z9MXch5zcSDry6RtvPi",
  "key24": "23mhF7YdPqvEg2MyarqMSjfnbuSSjn9ARkysjcYow8kpS9PmggfGAgEcHz33pjuFPFgAnyA9o3bMtYrBpJFZam5f",
  "key25": "3NhrxmLDTbzSFiLSXTBVK6Hz26StpUtyvb9ujN4pRK1QVdjNosRx29MSnS4NQ86jfEhD4KgxzW6DWHbqnj1gSM2E",
  "key26": "5DvDuWaN465cpGjVFFRbNAN6KqyMJnFtSzqjkuc2nL8vzPhLwmPsGHK3FZcv9HWm3EwBA1A8YXDgqQm6mVgdDVsE",
  "key27": "3DvwmFFVYWdVFn1HAGMAPaF1wTnza3Wci2QTdpwsj2ozTUXAkvVwgVpaLx9A1ErnMSnPoR8xh81LRPouxxF6hvZM",
  "key28": "2NMt12L884Maktiw5rhDJSbWBMdrrUNBEmxivu81Ggpv2pBBmPVLePbiP7XB67Mi9MKAyoDovdYbMtkxikmboX26",
  "key29": "2XxknmzMGqV4sNuueceq3cHKu4yvA8tVU71hLcsRyAWAN5BChK87vkVQveFGwwbRjYieM4WtAHJky5VYtZNSfVnd",
  "key30": "27JRqQsdRHaDfdsojUgnav5tBpRQWPcwKVyV1W6UfbKeNdxuCtLKPsV3XGqXsbHRF9CBEkiBynyd38CPrYLjytTJ",
  "key31": "3nivcAGpLL7F1aYagmWk9ecVfCH7qvgCuNSeF9JoFtjYTujvXurhw12VT7kHmgknza4AraEytAoMewsrijwScKNM",
  "key32": "2eFN49BGX3Ku3YWyUAZ1zCcXm9r5hC57VSoB1Rcr1b8ebjGnB921houSHAujJ28rD5Cadsk3Mf6N9PiPmNsP8xnV",
  "key33": "4A72MFMVoYpzw8P9qrZRyekJ9fNyCd4ktroJnJQzMvWGCCzxCRn9YZqqsPrMYCZyjMiLdmQ6yg8gS4QY7gtRKroN",
  "key34": "2zwD1fd6cAXorbku5c2UDcSbhRjFBvWg27geWPJVhDfgKtDfU9x1BufQYhnmeiGB7VoX4BrR35UX7dvnBy27WfbG"
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
