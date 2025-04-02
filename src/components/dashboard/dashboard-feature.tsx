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
    "3jKu7LWcshPBk8nwSnTEWAtmA1vfUXPZxHrB97Xp95jZsEd9Su8Ty3nfV2zuHP7cS89r4JfgvXPeRv49xXimrGA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ajCojx5LHWJZVWFkWB6YJUW3rdEC3vCYE88K7XZAF69Q87DhRCCaySt88638SsKLvZEaKGmQMTtrDvZ8a7zndv9",
  "key1": "5Sb4rEy2ztY4uGd7XCQJMCdHwfAEoTm4YUyY4UA2q18PhQV4CoqyHcBRiZv84UttiYXqmEuCqCZubDLJwvSXeqxB",
  "key2": "4KDNBtzR2frEgFjSv4B4nurggo7M55giEdXLUpCnENbrYFAEzcWTgpKMJ9D8FZUUz3ExEoPD8zA6W1oYptrCUWot",
  "key3": "5ueEDHk8qEkBd5Mwe5iW8eWaHUKvxboib56R8LadhBHcQY96tjCoeWSAkBqb1tMYVZet4Gm7q7Z3tSf5ejtcMD9C",
  "key4": "2NcjksD71h7WrTLbmNFEwjnfvmHFPVcBPJ41mht6JGR2c5UWTvaYwGjuynsH9rtR8qDGKg4as2tbBYWRSUvsmNDY",
  "key5": "2KT2gP7QBTF6FEmotg8akXHquNYtWBEm2Vz45aPStsx8SMRZDnFzcxKgUsCSV7nCUNehNNiFMcge7Y1ubQB4x292",
  "key6": "oZe66Dyy1PUaoH4oqmzhif1megtHhC7QRzFwhCHUJKHXXZCW86p431Rg7rorB3VJmrjph4JCTHuFWphYWpvcZAF",
  "key7": "3wVGWFgVgWuTvbqmv4atc7HCPaXtQoXYLaCJH4M1nTBVLf9PeUF3q1766EHEeAJhKperTL1vFwtDxm76EHDZSPk",
  "key8": "5KZgd5h24gpfTMBZdqvhqbfSdL3ocjedTASkoaUJNAdWfKVTJQbKAbX26NU1TWkUXF1U2Ke9YRmiAysftBVmRTzw",
  "key9": "32rrq7F6kAaiq9AYtLPGJ2Ld83Z3F78MaExoGLPZzWkikvWZQPrEmrVZ2FtjAPh9GNCxhsDyoqa5K3mwaSH3TNBE",
  "key10": "3AVYWYt7FnZx7w4jydobSPqySh6eMv9SfPpvfuwpksiFdF3jZfgT9dGR4PMc2N4TtKPCdMoYmCsTMDGqGfaRovk2",
  "key11": "4CwtbqHuxXdjd1Ja3V57uvC9g3y6XZfTudin5a75YKBSQKQ96HmQJ6MM46atvoBDo2hnrp46iMno5i9iRpyvf6hu",
  "key12": "2ZZR1vDjmp8Aic3HjyuaCMyXxDwYLfxXMU5B6gXEtMaRi4wFna3vWDXAC6FFt4UF1SRTYFrvhZokUpUVd6fFFvDn",
  "key13": "2Xgsr5zA1sYDG2SbVEoNUJZLgdr8RVhY5ypEfgPLEqdra9pWrhCsJ6xj15rVorptpjjx3YdZVk2DpfDDQiUP2bBn",
  "key14": "3FknRqzeDRqzMp8pCokvq41MKwuc8Deemandw2AVCmo1VJrE4XJtpaUzEPLxZWBS5sSFyApTSX5gYxXCM7Z7m7Vv",
  "key15": "5e6p7Zhre7JdwZHf6LokdbfydwGxNMKvQ2fcxj4wBL4pGukpG1EaopxjTAJvqnqvWXmqki64nHWdaGSkkWckZDYh",
  "key16": "46b4WfGBRxMhmUtCqnTDVN5E5C1e18hJoLpWjpr665UL9C7TmkdKo7mJCUhKMrY4y2UQkhyKyB2TWjCAM9p58D5V",
  "key17": "2nJ8XBKKpmPyVSs2rYnjh7g6QuLhypLSm758RSHPieRRcnu1WepFtMTBi4bV2jFVXPxZQKfnnX9xtJnd9mW6oBUP",
  "key18": "2MsjKL8vUDf1sZPgrWNXTcuv6p1AA6ZWnE4xEM9wcWw7AVkYADrFwxtcJRTRcZJ8H4iqZC7VpigpWYShNJzk18La",
  "key19": "4ZvhZSMrt1zft458KsStDk2UjkyHao9F7naj5k1WG2z2UEs9g1yzqAfrerQJBrgFSpJ3qrkTgtJ7YtJ872vAgCeh",
  "key20": "5n5KCBpffS2uzkMaNSc97BWdmqggbdpW7qx7ZxFCmC14KiwnZUYsqM8FSMc6bYHaGYqWZdfq4StYf5XDTNpo4AsH",
  "key21": "4jHhEdCcuP3QxAdRcyvpvyHkv3xXkVY3QovWKeuNtbDHbY31FEMry9rDBkCssNftgRtSkQusq9bQhKh3dTPYtJcW",
  "key22": "5T4QrHxcdX41mcVhcXDDk3HWXvntMEmxRdtnEnnuGu1G7UtJn8GDhrH6AJyPLDn7y7rnhMxGhzgyGWKEPxTzbPzS",
  "key23": "3WRjkd2Jqd7EqnVUn91ftusdHmAsuZnrititEhuqKrnYLmwprt1wCXRPnnrSYS5ZYdYPtfTybkivZS2zK82LUFaZ",
  "key24": "5321a1wY8pRStohPeMM6D5d1yDDBHK5rnVkR5JgTA9g1i6wvejByCreFpE7bTbYcXKXNy35VkfPN7Lwuc3QFnz94",
  "key25": "37uQuAK2TsPc8oBJEckgZug4s9xqQdzrJqD63ojkQyngqBhhvuQZXG21mytGLDdyAMdjPDw9ZKq4c3grq5mEiLB7",
  "key26": "2pdtaEriHwads8KnHxEcKZAiVQBcKAJLqEct83dMWbiusuGMVuYSgwQUGShQ9VXvMJEqceLJykR9bFmWvMkS1zdG",
  "key27": "53L52DZWYXEmt1BjhtBHCzwBgnF2hWDwJkbKoHWTBeb3NerqhvU6tGq3ZHioW7JTq9v7oCQCntWHFqft9b4H79zK",
  "key28": "5wSmLsZYJnp486ubFe7CBK88zmDi6kQGwH8JU3PN8Wbj2m2fdiCEy9wrHJ6dN7iHXKA3fccXu7HC1iqt882wezRo",
  "key29": "3zuNYk8Cqrs2DTMkWcoKb51EiG78CdFswT8MULBvBwV2VFfCC2SgnREHPaR8qg8VJYDZLJH1AFMMvmzBjH8FKwYE"
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
