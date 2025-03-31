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
    "ECe6yLKDi3gYPSt5YmPWdHjhV3cuMfTgNZ8vHPkFps3x8qgBqSAKkAzFvAyEqqgVf8muS4DtqybtBhyXnxa2EiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43E2v7PTBU5wKXvwKLcfMZovmGnF9FntBC3u34JgisYkkCGoJHZGKbho6hhpN2tboxPirk9GsDcSZpLRwAyEYs2h",
  "key1": "559nKVzs8hazTEuRt9dWEBi9B1V2RWrHk1uKFZ9LYNAwRE7ZwnsgW9tRsvb5Ngm5S1cSrX3YDJScG5RzEppztG4J",
  "key2": "4WiZGbReLFrRpXSYY4ynBF5V1xi92PeqAnpTf1kFMsypoYPyqCJSoLuPHfmgFzWEhRniuivy98iuebRPFRoJwByd",
  "key3": "MMs8A28muXwvZYtrSbFWsVTGpD6cPLBj46G1tUQe8ZM7N5UaoRxUakJRg1TmakSw6n9q62FTS9Ra1TStVTBgbgX",
  "key4": "4YPByeDy4xSRrHShQxrxDL6ri3LT8PMNA6s7efLSoNznWnTo3Gdw38kJWx4ZUEMHAJK5yPNDMwa8cyWipJE7kNFs",
  "key5": "26FCxgyZABRx21bZvbjrWGhQKKwxh3maHks8HqG9rcsi9RMvEtMhxKFak19kqma7JzHA5A9s22ArsT2ftyDUGysj",
  "key6": "5PMdXUb9ve5RBjrjrwLu8koArj11yBmTvhNLa37CtqWCWCBsNFfDFf9XWTLpfMXPiFtsu1ZwfGWWQu84Rb5Yfk7i",
  "key7": "9eXXuUTbfBwmUW8EK9D2J3LPhEZE31bVi323QWyawokWfYVbC6RQwTDk71iJAqq2vrmpn1Nk5ZtsCzBWUWGy2mc",
  "key8": "3D2zD2dHTYcnmVugyKtnejzxRk1b1soxweyrpajvJWv6f38yLcE1oe5Y1omZsoHAYDmopAFHayWDQLtFjVr6N3M7",
  "key9": "4jHriq39VwsqHFiNCZToFyRr5xRhChDWSGa9EdPGABg4Dc4UisqRnvMZdoMKMyjh7ev73LR7PWAmhsCFGsibVnKT",
  "key10": "HkAgmEU9m19gT5UmzUJwKpWj9Hdeo2kvWHKMnBtAh7Zsr1d4K74gkP1tGudA318BdMGrDp8JCWjmGzszijdkGsV",
  "key11": "58U66y4PNYgi252ZfszRkyYU2UevKJrcp3BfJFi2X8C98KBRpeerAFc5FzsAYUKFQQabPXDNPUmEEkxcVB6Ku24o",
  "key12": "2CY42tqwyMvFb9rrhAe9MkGaVmT56pw7SxVzb4j7gbfGgZiqQDGnGmP6fsXfEK5jwh6wgmoJKdPBQspweKzuK4y6",
  "key13": "2ZV63w7Xd5kP59X9KiD4Hnxd64goYUvCfTunXrSj43r7xKtXmGyiUXYAki3hq9r3ZMWLEj6R6pDJhR4NUoLEpnCG",
  "key14": "d4hbfMfrwZn9Yrd1EFUUVVM7CkAaPakhNqSdxy5TKBfD8j8PEWG1oKA994G5Mwcc4sETXyyXz3JAvwTqa3LosZy",
  "key15": "5bkgfNeTWXEE3L3aDj32pKpGDTmrNUBXR2c5vC9mxMDGvrBThMANgoHew9XxFoEuhmfpRzucdhaGAK2cM9PYY2h2",
  "key16": "3WXw2pPzu7LeK2htWAMrLF4qzKQ78nbPf7vu88GmXZYrUD9hK7ix3qcvVu1pV7hLRsXkF33VJVdEcLZ4smmYD9w1",
  "key17": "3oFcs4q3UDuEZDL9YLnb5UePfcxsDoiFzc1Vx5gE7WCjXYYCQhqxiM39RG1yqyNwzceotLniqP7FcQCiM5DFJFvc",
  "key18": "5gKZqCBYMmHMsVxMUu546crWrd5KfiipBZr1kNMaBGBLEHuDZcYyeVVezzmcWixYp6197Y8cT78zMvpKjuzc7QZG",
  "key19": "4HbGTkrLyk5P8yVmqAG8ULyLEWR4W7fi4Leq2Geg3gyBsEi6t49uUZZErMK9qPGqckfKxMZpfQ5oKYZDfe8QsJB3",
  "key20": "3EM1VZZwi9gAek7x16MGq66F9cUxR32D1NUEnHCUy9mNGKLHcNhPKBadSokbnypygSR2QVNzFyZQVr1KTSRmHszV",
  "key21": "Z9jmiNPrSGR8ZspA5Hhs2yNpEDUdEBzA23cCm6Nexpet6LeqWzKbkgLAKAYxFjksJ8v9SgCmq43tTMnCPCJGFYd",
  "key22": "5nYoo9SPzW6qSzxTUWgwPAteu5DhEH4PNP4wPnaPWYDCVMcJwYCBsihxMLdrcTMRnkhRcvGZbMQ4P152aosKbbFy",
  "key23": "2SfDwZXE8WADhJKviavHH8ft5fqyjn3BTPHdviHJ98eFfoV4s3gC1Ccn8RzMBf9RNhG4SFCiRXdWLb2c4DyuAetx",
  "key24": "5SYYx6c4QHsbiuvxvrbWSicxzBgVuYBdBdf9t8oQQ9mPtBDZptHS1WhqemKY2wfFiyyRKDyxerL2Fiu4tJdJF49W",
  "key25": "kvjBbPkJ5dmCFU4yS7c4u96uhaNVgBnaKrSgnMjqqU1tdbGeL8rgre1Gru4rXswgqv33xPGoJE8vhWjUsesPrzr",
  "key26": "3Qm3iqw4m9srvjsy7SWVCamnEDvK3vJrVefmzVB23Y7VY4VsdvQ4Xg32mP1G9oBRcEoyvAy5HzbkjHRFwN1vZvvj",
  "key27": "4Yw6FbMxFFtRdAj2HUCwV7frZ6iVYKSdgKM1sZZzm9TfbwGap3iJym4LTQHTuXDrVqNhvMhjXrZEGW6QusupqPrW"
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
