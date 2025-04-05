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
    "2fE6gHD9iZJ4avHuQV8pJbizLHgakr1wMRUDGyR3PNrQhZ1dHLwN4NxEZN7DFh3kcrrd59eP8AJdTdNnKryK5rse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yJByseBHXf7QK77dWozvdZMzXRw1FKPJ9axyvzeHhiAcjszsCkDSkeYuspYHbJMwL7hyFg4VVehtW8EAvbXdD83",
  "key1": "4Lvz2R7PxoLdFWwipt3w7rS3m28MQ78sGwPc9aBnK4ueWidHDGR4HphAc7hRnQi8U4HXft7HwvqL5JkeC7iWBQKX",
  "key2": "nmWWekFrHr1JxSe8qmdkVm15A9ha7TdNPyTNHoEpCBRyzZGjKYVdebY4HWC4RqMUMoFhjvw3tATdWBAyBDJbVNQ",
  "key3": "5akqGK8QyPnv8jMLF9axjonmq1RTW58ycNa4mvXxSHQeYwGwcc1RmyNL2Kkdsp9cjC6MDyfQH1zs5goAJwHQHpvn",
  "key4": "WsY2QCr7YjuRePmKYoQcUU7KJKMAWTzyG62B3eSNNFXsTw4uuD1GG1D7ewBABghCMpJU99MKNbmws5m8dh5yf4y",
  "key5": "2TXgnKq42pgQmtEj3bWsDcynznN3DqLU3mbRqg7E8mTNNDNJfrXE3oCgXcXv9S5a2m2PpsEiv7eBVXsoTcmxrqyS",
  "key6": "mPGT9uh1Q2NLCKvFbnWmELHm1Wk4vS3pbay96VwzLiEaFzNYpZ1GmU4KG7TifMWYzJ2Bw35JdznYBXYqUjCga4X",
  "key7": "4fgWSDe9Ch72MFHBrKUJByFiwWZKDdqECmoCY4Acr4WAiv1dfpdxDf3ZbDhkBP5Gew9KBMQUxebJrHGMFbxZCKp9",
  "key8": "4f5q1Q1SLK4n13XaFZc5Uiz2kYRsKBG2Y4n4R2MLPzgFReHirMkB9Rq3Yes3mEbHEq5GBEmf7h4iU6BUbNjTD5mp",
  "key9": "4qfkJJ42YzX8G3XEEyPjP5oadyxAZb3BPWgwL9h7PPZJCf8tavSXphxYz2r8rv4qeiejsuKWHxK72iHBrU1hzX8P",
  "key10": "3CaBff9iGahhKjt3Mnn72VAveEYUaD1GNWxP62s1FCuKEYpRCuKdQdZ7m5PqFbNWNUZLagvKkwpW1PZqyC1WHTF6",
  "key11": "5xA9A3qykx85vX8HVhGL6umpoSBN5voWu7XktcWK4eQ5SM2GM5L4irVkHmFWo4UM98aBkUFA2twPfxZQhx9zFUHN",
  "key12": "NSEiXa5ZXnCgWvc6yHRuawcgWpX1ca3QW4iuJ2BYsqJzKC15zxJbeAYFM1D99YogK9fwHE8FHxqsyf34ZUt5Lq7",
  "key13": "4SLffx4uUq21iYCCmWkf3ktfGgo6ugQVzMr1Sq7ttPwXU1Yfs5eH82TSugmF5DCkZ3puccRCQejBaQMVxFso2zMT",
  "key14": "zDpfah8FiAX8nPU9r3bL5b5FXKedL5ciCHtPbrADHshQa463emp4k8YBHMqmkktMa6tahoAUeq9FmNAX2hjeoWY",
  "key15": "4MgPQt97t7pssVC1Aouf9HUahe14fC54spf6ohvLezT7muB6154TQArUhydxYz3f3R9GWAEFD8TuAgntKa6wFwT3",
  "key16": "5rcxxBzJE6WquT1c5KVjgwXoaqNJJdrEooeGyc4DUjsQrJQ2zhwr6WxF9S4HePkrH6fDYPoFmrLq1v8xQGYpyKg1",
  "key17": "2knEvFRSGGz6kvjpgCLCWvoXNyzHiTPCCxyMwJjzEJr5w1vhkA8EWgBYzitYaRNxLcAtsetVqRfPLR3eXo772AZz",
  "key18": "4mPSuwv31R6qsWxV6aw82ayynU8Do5p8ybHoyUHhop6dYQ3tCdUf2yjouaf6bCGsE36uWv9o7zikmBMBWN5sdGAU",
  "key19": "EPdSEsk3WJLZRbyFbDtFFCDfenZzjJZWNgP5eU6Prk4g88QCQ9ZTBsq2CatV3Jpww7bisdbMGrxzkzjuNhbMU3K",
  "key20": "3Ycus4Z4ehWdaYP4zzLqBjyK6FqkGDWq8YExLTysTpVweRDUDhRw1Un4krFTcaKmzYrn4U98Cfs6D97mPTHZdzGw",
  "key21": "4ADFg84GWWBnqP7HZXPSByKWScSaonG4rhDcNfWL7aLWBRZPunCQuS5WsZDvYdxVJMiiJiuH9YFX3cMyMnkJG23k",
  "key22": "3gP2PTQ2arUwvdB88jzusSwo7cDjmPtKU9AzZDaCxSZDLhKgcQ2Er3rUadYg3EZN7yDAwurokcAZpERTXCFGSMQ2",
  "key23": "2VKUKbotbkNqWR77c2jnirVR8tDPyjAyHkiQJnGakmMRR1DsNxtmDaSWDfn2q5arWvuLwK6aKmFACtGFh3cdX8H",
  "key24": "3n5VFeGEx5gJ1mny2mFowyds8M9e3M1Tari2yt6RAmE2TPZRWBHFVByaYAJBPp7PLviDPKbX2a7FmRPZZHUFWgs2",
  "key25": "28jZz28EL6pzZTbnhduivgdvq8upoq5QDZqve2pQaFQEeUHQnjyGA4w7XPYcpJv8zGtNgkhPj9dMM1H2krNmJzte",
  "key26": "2faWqzfGogEkBRaBF76MM4HZskgGPaGtcfu6r33YyFJsP8qg4Q9iogy8spjWC1jsseckVr1DEvts3aVeZQw7bBtr",
  "key27": "2bhCMpWdFLvv5LmMrw765V9auGa2wmbEXwZW7BcFDMnMq3S6UFsQ9wUjdZgNQLLKQwR6hREbLbwKzt6qX8ximkkZ",
  "key28": "2mZmAqiB9ryAoeLUxh58ogc828nxLYeWbNi5S2oxfjCu4DMrTAi8RxejQYhG1QghqPFZRmaDr2fzCPzDw61LR2YB",
  "key29": "F3NkZSDcZ2bRiJ1fTenL1Jd1vQn5f8betCN3wsJ7DHeZd9ymDnibq13wUJxQudMx3k1mTZMzH84kvypZBT1BFqn"
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
