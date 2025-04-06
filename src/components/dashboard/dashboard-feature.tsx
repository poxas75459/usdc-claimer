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
    "5nfzxM7EQj1wFfYin3EGVbPvwEzEBE1ZopQiYVUNHvRXXFtPVVUZBH3LiJxggToZCKukUuR2XD73uxMFeCpP9463"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Xb6VM3PLFyCL3Qo5Y32r5HovdtSQ7cGUvBav7cazi56ezryQbwWGprYBoWZdJJcqkT4jFpugXKW1ot6nnGRrf7",
  "key1": "3wJ2mqtBJwD7odyQgmKLHqH8DYi6mcVkQT2GjFiXu4APB2y3V95UgMC1rDY9j4Uk3QmCrFE5fkVxeXZh7tFKQUb5",
  "key2": "2HUZb83yC4xbKHp4RXQHSm2FAbnboAdx9Apw912Jj6hf78CgXeumV5KFX5kNnAe64zvpMAy18ngK8Aw9cN9EpPUr",
  "key3": "2nuDgjnnexapM4tKd8YfeC6qUgEFD1hgcQTjdJbfcnHMtJkeAEK8RuobrVbetX5UKL77nVFcToZF996ZmVsWrFvA",
  "key4": "5SzK4DvGpn9NB5TmzAXGtayVQjL7w7fWZeFDdumm5131ygPStqDpHgfE6D3aL7rUuLy6Epr1VTXU9fiVbKzeXijP",
  "key5": "5YYNMAcJvjg7euZTtQSVEYW1wxCNkKj7wcUMdGR4zEzUJhfc4FeBQCGT1Ffhtn8yVEtsNTCov6BePAq44AhtY5hW",
  "key6": "4qwFPcj75mqtjZwKLpLbtTcuvrRbMeKkMQqCqYHByhyJqzZECHyiX37Wdk1wn7bdQDiCM372URCGYzKrksPeyZV1",
  "key7": "3ngJhQhstg2nvDA67MfXgjgdPoZ8kz2a5jj1RtqZz7ZjLCuwUC4apgJf6Wbgq5k75JrywzFLFGBrdYmgU8Frb3GM",
  "key8": "4ttgTQAfg5H6XDKCCBn6EYRrZKUTRQ7DyzfXAnN8NAnsYnMiUcca55G4vUvbirfXpBpvRKSCfJLF6SqkCdg326Av",
  "key9": "3oP7U3xg7cuCXhL8SzyuzD3xmR1XioLnyE6SDk5A7nFLYy1Nh5jzYuRzwN9DffQPYbggNd8cBBgBYPPo9ja7FGGb",
  "key10": "56eHYQumYDiTpUdsexEkDv9KWAg5hxzcsLWX5HTUaFxr4BZGZ4bQncjR6fsMa4yz5u2kQTKVGHFgp9ob9TMNydAk",
  "key11": "4Ldnp1PPuKkjFRSz6FfM1HmDRe5L2JpNrL2eDFB3oMqy7tcZWSHFoJX2vkctjDujwZjjEawPxkCyRq7ieqe729V1",
  "key12": "2iVieQ7hkVsm9cDft7xq2RFePNarowWzvqCbV1nkZYe49qoxNPaFuS8rWVaEpo8VB551ArwyKbbnfrdusdRV9ADF",
  "key13": "4JoqZzteBFarZqDYfb74GDT1jvLdJsTnh4QvTaVDjTpBou7D8xMTvZNpopV52qJSadhRYyihuvBw9Bwtj6FbF5D3",
  "key14": "4pwTPfHSuxjWGmoV7tePFwVBBofaMHiJA3MBsUGbzTZZT9wY4s6VBri8DnV53cWmJf7D9JcoHVMc32FitVBNtTH5",
  "key15": "5acNpuQWvY4HB7YBGYcxRhKpABPn3HQ154n7mm4xuBifBFKNWhhHAZw6BS3ayXtocxUP9wLjFJwd3kDYUpdycZqk",
  "key16": "sQdQtBHmmdSXuxFyBe4q2o5UuanFDpqLw5G5Pv9LzX9PNmrG6qnws9Fcm23ZAr1BuyRU1yq3FR6qnkhJc9ZLeQg",
  "key17": "3icokv4v2Rg3A5obhsyR8JLvbJ9jZxqEaKDRVLUtjD7PYvzx4d76RcuJV3pJqhWWd7Fv1XnKzfcsv2tdrYirXbbY",
  "key18": "2jbb1b8nDfXvz4wWSC6XSNtfGrWT4B7JVhJCZPoehB4px9iCCwLgETTHpsijLoyyoAKKuBThp8E2JVKESQVGpeC3",
  "key19": "5BAhLXcSzQaibosESXmcYKp7arwWif2jdmLg7hzLb4Uk39LJgpSnPuMtSiFPL1uBGMhvbGx8wMsgPahefGC23EKX",
  "key20": "5wCnFNJT88aHqfu1PdwisnnGZuLLTTo3vZfn3rSh8Aas7iTTbKkDJqBogYZUdo1NqbUrDWtpuVjEmDBXdF4AP2K3",
  "key21": "5hZnNYtGfnZuAbFz7rDEBR1LCXW6KFrDFZFi96U5x7iVW3D9cKgXszqn53Tf73nHyypjouPvktMyhgzrrKnCAmKD",
  "key22": "2QuTmS4JxeAiouiEU3o6vhJroP7DcKYUJCAMuBtvsjMg1HibYdaM8zsoJNqexyjiqTk3pEPNotmK1ot4PJQjjoVc",
  "key23": "4fGsGFgHAQNiTpeCzw5a5EUwktW1Tyq3fSaaqzDe6AiuojQuJ6LvKSvRrwgGRoBSLcYZqPRKQEzLpPFJPfwmf73s",
  "key24": "3gjJRjJzJrHvExofR2VHCbVNnQ5pxVjnaAybGSaswNojJ3SuNSkx1YsGtsQjaq71S1U3V7fSZeMWXPuNKSKN56sb",
  "key25": "5Pou2Fgr1Z2jqu5ZvXaR76N2GpTaBBNfhq3y4GM1pb2rLTPnTjrSUgrPZuJXg5XRmnWHLhQKsLXhVQAWzn8kpAmK",
  "key26": "4CsNh5nfbnCE96MiZxtAhDAF6CwLsJJyjriAytF1up2TZ3bUE5r31Nn8QyTfweR7kg2q8NcAgUEKiar8ef7j9jdG",
  "key27": "3qu3nbJW3U2PV1DWYAMW6B75gd2qh8MdKsD6UMGTstoeenXGtGfTTY71pzQFhNDAzd6AEsKtNRtcRsLZbRYtwh5P",
  "key28": "28Ap6vw2HVTWjvSwrXzJ1xHC122ZppEQjfMGXuvoMC5FfGtSd8VJSQYD5DSRz1oLMpXDAksYBZEim8nga41YXAJ2"
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
