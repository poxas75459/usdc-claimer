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
    "5msz28aJGyX2My748ujXETXfxYHrxYq1bdowFojeqbqDRWQxu27bWvhy92eoHvR14eGfakoFHMftysc7ifP3iq6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5meFuA7dPEQatXdt2ZVMno59K9hcct4Xdo5ijcUfjdLBe2KyhovaxBY8fgm4xCd5oQcfyJgHrihw1MoqYoa4gRad",
  "key1": "1A6sLRbMEDbyB81NTQ1cYVJ15gGTP8XQxtQ3F5oFDHFdtKGeQBkbZrAGnAuHS7NR1Vi9uDSN7YuumbU6MpQR6MR",
  "key2": "5grftxs5e39JS85M3qbQT1qs61zp4FuZtZySy3B7yWyda9bjKMgMpanqVqraGAXiP8M6ZjnwuCQB2GTouqe6anbM",
  "key3": "TJnwtDoG9c8uhaNhwDdivrtf4g9nqdixQ1YmdTJWMskTau7aGo8LcS9e8YvUkAKZUhFUGErerKdt98KdJFzvKYM",
  "key4": "642aGp7heMiuzx9ryDbRU5fr3XbAcMZpo2cSF8WCtPrgZRPRuXCxveNyQGmf5i5antZHVokwebFnSWEAu9Xezhbg",
  "key5": "2BuqQZfEoQmYKuJTFeuVMP3Y9dVJNE4Us3txgBEzNuZqkwerw3UsvWojU5EjiiCFuEzxYSPerbbjfRuS2fuNeH6N",
  "key6": "wpA3ex5QiHsfGwxWtcwbPQZJwiwxpgYS5E1QHxt6rgpbUDMUegVd1XTkLyodFbq3CSxYPTtEd2d55wGBRVZPFYX",
  "key7": "2R5Zc6kygUnPVbhFzBWqjw8gEwNazkmSYbqVtHdxnDPiwF1s1ZdGyZr6kQ4v9KXNPGJBAPqk5SJjT6VqFuZBJHcA",
  "key8": "4iu1NdRcdvNKBPWDXBHrnqpWqLZQCjgUZuWxWMwtNfZa5c4V24Y4nyYzvNienXRZTi7G16DRVWHSF1j8zwCUCz1y",
  "key9": "4Yp4LBNeopCinUsFJLvZCLLmgczxkmXH3DKHb37bMe6E91m6VBo9Q1wNVmxBdyoMe3MBpLrKwMDHwbnvZ2Lwy9YV",
  "key10": "4GkXMX8PnmC3qivBGwb67tmLJYZuRxtpMrsfkqTSspexzoxDZVGoBBp8ECvB7CctLwXyjtfHR7JCei6yVhXjaCEB",
  "key11": "Fb957z8isd1t2Gea21xTsm26uXsdB5QrZ6t22jg8n5tiMVjvV73Mf3hCLcx6yHbjjpXpqin53Tdms87YzNxAzhT",
  "key12": "3v5Y5meq3z9kNMAePHELa6SNUGCqu8TNMocRrPU9h7LBXHX8QRVEkVnHj1cptpCKcYLXziFWA3L7DexwHjsBXfRs",
  "key13": "55sjdNDvrdSZk8TP5aLBMdwRQcE2NdqZhzDRvp7TtCGba8SHiTFnSCb52HXHjScRzgvz7Ti462jo4cSxmeouw5CD",
  "key14": "2NrYa8VTjxcQeFwySXPmfgYD7ULL92cXRraPxpzHTcyqABP4jctUpRrChro1XZBXasqkHtU3HsJH94JDY5csMsih",
  "key15": "5TiSpFSG5VhYeWGLXRDxEzwJUTCmFtWaysD2xY8tKpHyiTecFfDvmwKYxAWoH8JFxKta8ugQkLSArZbjDq3a2bVv",
  "key16": "2BapoGpf1ZNiXhUCPTnUxnHxzDjHeW3MFiVwCRS4mkQ3k2SeVYwDBdddonwwbHWNdMRrxak9eqKygskiXnJZ1Agw",
  "key17": "4taDdpYQovQfYfKvefByTR2FPBNWWmWSMaFi7TVJet2fK5oVwoFwMwKm2U8y78j4GD9YSnAYcXdrpc2WgznK5j1r",
  "key18": "65GL1JQAob19YPxW8iBKFKMJFZCYeq551nQjQSqbnqd5TAuFPJdy1pYMPrHwTjcheZsGpE4Qk76UNKjV9xiyhEK8",
  "key19": "3txRMiAhPdQQ7EaL6nXWEEvJGDeMcJ8PBsJVnJjGqGrXbwxbXCcxfmx8ZrRToXW5s1cZ9ATfw5GMTGUki7WHtRPT",
  "key20": "2YHMr6fDvCqgaaHtGka11GHx2sj3UeQPcGxqaHtfMGXkAfieQctKjP4VgJn2grNqYFAZDdHLJeyDPMFPBRp5cHwH",
  "key21": "2VZ24kEHJmbjJtHHCWC37XxBdWRLqwkaEJrizn5v1oLEEetEEKBQ5WMeCDR4m3fKFhQPN7WnxacHN5SfsC34ZbEs",
  "key22": "BRHfhuqEiP6fWApw3Tm1CNXNCe6USA8oW7xAAkVZMKbhGFUiZoEw38ckAfVcXnW3Cr3rzbUxdPceBuEdHizBuXZ",
  "key23": "3BHq9ZMF5YwfmFHRke523w9MwuYKqFfoRquGURzM1QZgGVL8RmSQqoZua4bohpczo7CCGLBdXd53EF5ETCBRuR3o",
  "key24": "36VkjWGVUAaDwyE3YPz46guf7aXaCww2dENJx7fCDqGmuhWwPTLph9Mk8KLJVX56QzBQm51Urec9YmMTgTnNtkqw",
  "key25": "4dhD8xxreW9AgmH7iYdPoB7ynrRCc2jZXbZgyhoqRmKEbxsj8cMgAWqXEpQGhXCdDNxJ7S1cNymU3CRNkqN73Kmn",
  "key26": "45RfgdbA6jTsRT6BSbDGoo5hh7EgtQ1nP1UxoZi3soA7B2sM9N19FntKN4qwBBCmUeUQ8PdMougsqbjqXpZT3jTq",
  "key27": "UdeNd1Qi11G3Pr5yuHg6gBVNb4b44RBojg9WcUxN8CKPBrrLMmRNkJqrvYrZm9xQA4u5W7BaeXDGMDsAFwQWZxo",
  "key28": "3f6WXFj86dnRUJgtut39jfQ1YHfY2tXG6GrQEEJsZDda8otwaYHx9wU4TPJQseQuySa2PEHcznmXHxE3EP4cZAL3",
  "key29": "29htZdsVyhNLy4aKP7a8RVceCuY4pnx7DnLSxoWY9M59R5euLsy99Hs5Gv3m8EpwufwbyX7CsnR8g24HkBEFmEXs",
  "key30": "53mekSd1V69LGXgzcU4argoqfi8YmRSmX2jhSqvtcNtchWp1psGranK1GoC9gA6E1ESCDZWupFJanVHLVvb94rKJ",
  "key31": "5V6s8hH6Koka63dpfupSJ1Fp3dFrjHis1DqwiGrP8briQhW39RZueNFhVFagVVd8bzFTM5iNifcnid6E1psN26jJ",
  "key32": "FRLhwpzmZMSsSqJNa6xY5dFZva4A48x9HnxeDDZXiMvpNBjaY92VcTyDUpZTvWqdde1hHjFDU6ZjPsqsNsraHzA",
  "key33": "GMBbhoFn4t4V79Ka7rFVCuDDKrHUj2i7vPR7knBhMxvQ6EBtTncaUFGTdVg9Dso4vDqEXgHbqFYhQMHayxHyaTy",
  "key34": "3xc2m7aCB8A7mTeVY4y8oejScsFSAgejvCm8oTVgqHWrPweUifSDDfB8tcscWguPX9ZkzsN83j22bZpctCGMbQ2F",
  "key35": "2yNncK6FQZdGJVqikwpDLiviF7wmzQzSCxz6UtZ3cVhYx6eqXi8Vg6YJRNviVDrHJUz59EB2gRtRqCmpUcdGzy7m",
  "key36": "3Tir5Kec1BjPiYkfydoSw3cJvRd8Wm8uxupCnUijwh5aQbS42E76WKZCuPAqWfVvETSt7TuFan76Gm2E9HKCRV6Y",
  "key37": "2dQYx3LjNbKL6vwart2Koxn8K7aiN4hJkaogcwb3H8JpYEabvCXEvUiHfRyXaovMzcUT1AT2kEwnFTCBY9wzq3Y9",
  "key38": "36s4631mmdXPKHJJeHvGM4y5MmY44af1vdeXhpxwSEXNdWZQBDxegFAb3FDK14AdkRRVtKi1cVaaiULJKqr8jRzw",
  "key39": "4eYWxaL6ABwEBJLh7ojbvo4dEbox6TzrtBPPQU8QEzkvkhJNiiWJTAkCigAc2JvWsTLsaJghaVPjYMpgJmvU4zwD"
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
