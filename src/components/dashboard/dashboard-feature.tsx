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
    "3iAAzNaARvpwRAHsFYuFPqfHKZo2pRNrDuW9YqAWuRS84JBtZ2egvga7oWih3rAwbb6gHUezrbt4hY5Z2EtFeSNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nm9F7F6LuaGPi1qtkijRVnHBTh6CbDHfGtuGNvEvvyPZssD2hpmeCJEeiZPuzn5jHpjGY2E67ocHq4tqxiVzBJQ",
  "key1": "4uF5EMy5piBpNuJqwMBBnky3c5z6YWqdFqDRPstL7d2W2ESWZqPZ4rTr18bEDoDfLotwiX9jxfDKc7Q3mnNPjz4H",
  "key2": "4hcEQTVBZ3tZEm5J4EXQZJUvwZGAGUgG2sUNuAjAEDjP8GCWGrqS6LQh9jA5NBjLCbi13itYi523mZ3bQbKwfarA",
  "key3": "3f87y8DAYZ4YtYUByk4hJtqSJoeUTWV71JohRaV8rdmcSQ3Xrb7BhZY9zcD9N3h1jNZgYNNZfuLTBc4Q5P6Ytbd8",
  "key4": "4JPqZp9k9a9cG8s9BTzLpoZybkE4zTn3AhB5hZsixMSj8c6pMRNTgzWHty6NRrfGWrr7hAMysCJUjhMciPN87vFj",
  "key5": "3GRnUKu22sDUvrjMK7iHTnpcMZmZQ3fbC762cxV3LMDQkdESdtjtjFj4RfBrqaDjneuftDJDuxMrixmdPNV4gg8B",
  "key6": "7r4x5xtoKwcph9zRAY3y5jtSd51p6ct1foXtsBYUExnS4BHiKz5DzqhY9BCHpZy1WPfVRyYgrqAF6pnv63FWFqV",
  "key7": "2yYvPwNrsQiARafV2zcp7wsWRGwoRGED5jvs7Sj4ghnLiAFSVKSt4RMDauHFM5bvBNAraTEej1XWrZwDYSdEnuLM",
  "key8": "3mJAFAkxpjSvKhTrxYjw9tjy5Le3cBugD9RSpK4ajMAS9SHPc9bh3ZhGs6ASFT6ZD9iZ7x74Hr55EgTt6D4T9xuS",
  "key9": "5rYRjhBahEz51zYQXvAQ5rcLGEmsaP7PZx7EgkAUE6WicMPBqevpK357fQT4yrwFFNzsWxNCJss1ncnVnzUn1S5m",
  "key10": "49mN7wKLDePT5CA4ViGprPo55FLZJMhedT8m59wpwQkiAVAafbSD6b12dSiM6VBXwtveMZoH6HDjaMdwEDdSBxWA",
  "key11": "4NQkefHe613wssqBvQZEnnZRGHoN8CUFgb31i2CGJUk3MWCMjeK4YgKqsnhTKZCXCtQt255wbv7TevbhoHjTFtyf",
  "key12": "3LLcggPBUEpR2jShMdYhKnBBpjHf2NDAw3HpGc3LFkfF6taut7oUWCVR4W6ux1zuaiPcTewtxuAe3YU95P8Z8rEH",
  "key13": "5q2PthXwLDkqFcQqaFPX7oZ5JtJR8zwz2uaStF8fQcfkBmkQbxbHMnquwNsnrXypDW8a3WGTbLburc654urgQxo6",
  "key14": "5qhDdZp6cD2uLsqQ7b5px1T384K9QvvnbCfko8FCo7H1fCnyhQfDGde7p7gADyq8X9n6sZd7FgzCQ17pAj9QTeq8",
  "key15": "27ggXZ36gxhkXBGZs9LAcRumAgKqFx4EmA3w7pouPBPhHvD1nf6xSm8K1XTqqm9Cg3FsghGKDWSimkrCcLeMWBi1",
  "key16": "3nd54ichFna2JYNWfuM5UD1RDushLyk6SzenpyBSnLbHyK6JowxWqnPSXZLX6S6jN333EdM3bTZFG4W3uWHZmEV3",
  "key17": "5cfi6kCEiFEXBHZPyCUQhL16EM4TjVXhspYqkhekeJnkRXpJYkf7vMLjEnzDRhLFYuXhLMpAUHdDfyVMxymjwfTz",
  "key18": "53GfZQxTyHbWKuNE1qADrX6CAdAZJjXBs4ejBWxF776sXaQCDUKp7SoNccCepp1CQJva7qKBH1dQjn4z3ahEePAQ",
  "key19": "3SSom3wP6C5PAm1SVjdhDKietotVCKhWAnRhfr13x8EQW6BEpgEjKudjqMU8QRNPkvq2troRKdV8junXFwTbGXGm",
  "key20": "2ye5bKsJ5XPKZct5zkrxBqu1AihbCGSdG42hXBhJreXsBxYvhfAS2dLFC5SgNgcHLbkACKxj1P6Mfod9V5zz4DqU",
  "key21": "29QCqg4yHVpFhYciBbp2p7D1xVUvWHT95oo7ARNPbQu2JYxmZfsUGfdrUVssp5anfJhbk7XNf2yu9mfW6gSzwJ9a",
  "key22": "29sXcdcqcbhvSZKoUnpyqWqqnh9RoYCZABe4MWq9M5n9vwdR61doNvCPk1VHbRKN59AhPTmRvsLuQM4pwEGKNudx",
  "key23": "3Ybt9rekgJwYNkuTGmgr4w9YNV7Qmb6KaZf2sbqZbMAvn8DGRxMaon9RaheUtJson8NZ8HXCWGS1mB2o12tzaQAf",
  "key24": "EKoXLJZJmUEGR1f11kGtXPc5hd88AfzmFkahxpYMT7nEVgFPpsMugSXNBM64qoNrmZfytn3SKYJraYrLEzy3zZe",
  "key25": "56HABrt1dKoAtxeEaF4ekcjkhehwL4F2u8wCh64THDxdYenpJZDNcx6bMqWW7CL59KNL6kBipSs3nGZVzG7449PF",
  "key26": "5DmYm1YzykFN7Qxs6dTMNezevwFcu7zrMeaq3VkNButavueXppM72K4R5uYzNoWFfEYcuioTDPd1b9x9rMUQDQCj",
  "key27": "3e5USNa8VHq1BRGXy9PQPD2Ap3whYiNBvuNg6fmqRHgK1DFTAaPpKrD5tzVHqQKiAqcdmRLEWfhGMdgij9bxj2pY",
  "key28": "3fEkU4bU8GVpht84iMEispwpQnQ4CaXL6fSgjmMu3KuHsXm9DX9rqqLk12ooK3JmgQZYeqzyRUbFe6EYeiR98i6p",
  "key29": "8CwnYpr2DU2w4tziXjLemVvnDE5sEPoPLJF2r8VT1Hz2RGAvB2FzBF1TscybxEG6XSZfoZvSYTzMV3STAdZK16k",
  "key30": "5JJWuGtfwaVXjZhg1xtZrg1xiJpfrk7G7e6esVJeJ3VYrSVswFDUpL6CedK1t7thUeyzdn6RzUs52vvQvFYcof7J"
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
