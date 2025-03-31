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
    "3jMno5xgsQgC2b8D9JXeyQMuaihA53Krfm5WCQnM4GhuHXWWJGLNWMBfTw2HQJ1WX1tT3aSyEUnSwmKRTYnFSzmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u1VRE9FtpPmTP6G9GDMgPJ349Xh62d6jdB5SV5ZUXMQnhAZa2zAE6TedvpW9BLqLaq9sFYGBm1QgqVZgzDZpJUo",
  "key1": "2fZGmXv4edEbRKURj5xH7fx7eVmfSjyCuPzoh76GDpwpoMziuZVeATkCVwjauWnJ8R7UU8aM2RwGJJ64U11yNUoH",
  "key2": "5kZ7RNc6Z7vixmxdu9fZEPrGz3qsPWoGMUtYhBtGPRnupZ9TPKqA2As5gAQKt4jzrMsiAKgDkgggqExJCjjvTwaX",
  "key3": "d1ZvXgQt1SQqL5eJKyfRsNQBJtnYv3pBvKpJgGcunGn63LVGWsq2dFDh6hjtbdys2Bpb6BZTXvLS5Sbox3oJcxW",
  "key4": "4QC1B2HXKtLayiKYiniBtykprbj3Mu8nTddgxp4qLXvPYojk2mHjp7QQoQLw4AYFXXAz9vnbZeLjRzQnURsCmwrg",
  "key5": "4g28zPMAvLztoRJ8g1ZaVfUqgCo8sWnwp9msFSdKya4kthEMQF53uyyY9k9wGjqRpgv91JQexjujVvrKYBmjitnu",
  "key6": "5fnzM3RN829gGUVFbnWdYr6i1UWE6gEG3GS3RZDa3ZfNzfaUHKvyGbjAdZRWj3ZeJhuKCkaQRBpDk8S1prPst82m",
  "key7": "mVtp1fftTXE5xTSncTjV3C23FpotemKRJhgh3wZVb567gjpaHH7Af6rYDQhhKZKU9UwXNEE1Yr4JZMFbJ4zwHWw",
  "key8": "299NFNUTnWiJXAgufvcBmBhjgqR5FJ9TJr2oZCXShjaj3fmm529hisP1JHVFZGynQDAoBHgr3iG9qGVc383cK7Mg",
  "key9": "6Zq6fZSj5UhDKPX2yiKNamgY6uM36MtnM3qHcrAix7jpAVM6argbPU771kuCZroDhZSXyuS2HSEZiVZfTr2RRBR",
  "key10": "4qXakWwo2JdjXD2aUHo33n4RxvURPUBVGn92teRWVUXya46X4foZ3eY4XVJfYNBhAzCyCTJMhPSpGUNAnLsUQAgx",
  "key11": "4nE6Ntcc2n5seQAHM3gLTJ4Xw1sZkdE9sKxYCoT9ZR7RUnH5ehKJbTu1Ubtbd5NTdA1EhBhc4SQhBy2X7GDPdyXq",
  "key12": "2Wbq5j7kx3ytqyhhKT1x8MacqiZSaPu9ZutS24tGyDbiVvTcVwnjYDSUdtpRk6xc4SboYx7rmG6efWUjNkQsgXBo",
  "key13": "2Y7Nq3znVDkiKYZAbYEfWwJCQocFKoz6iDr15eUEhQQqiy7Cc3PLg967cage3kfSaYNW9mMUPP7AsaLypN9FiUs9",
  "key14": "mdFos28LBjTE8zjoKLm3xeCPKzbKa4kZGicgmH2NVcB1uKfp2sVZerNMp7NF52GRkMVkkJkeJ8n1RhprYd8xz3S",
  "key15": "56GhxvujBcPyjoieRppWvmZ7hJ1XmNcZQ3PVmr6gNWsJiSx3dbLqkFeoYg2orDrGYwM9QSY8pJeXPhm37zZpL6HC",
  "key16": "3gnXX8scoxUxi3YrcbX5Bjb1j6frghGC8ugQe7eH9KmjHB7mKfCJgiLKpNdiBQCje2TjSjUfpmfjdnZzL6LQ27rh",
  "key17": "gE37tZB52iEivfQ9KpiVyEvMhfAQwCdcR3NNxX9DTFSynSC5FMwHkbkqiCTdg2D5ryNfvAGeCzLoCwkTYrigdet",
  "key18": "2TkyBfyiYWNmJvmcgK9W8Wztzi5T7ZGhByvzHvoxCf1c8QFQrfMdGYkb2SQDry3o4vZrQw8DtBDQ4DoK93JCASDe",
  "key19": "5gr8uGVCwVKqJcJCiSLaiLVAFGrSctFjV6vjmkxyTwxCcCwiWt3tEV6mYhHLcDZR9Mo5de1wyEBgwresTxtqDgsK",
  "key20": "JqVTfJeJB7FgnSdnEHo2jZZASHxspP3Abfp8dWhjZv7vwoSUh84ArRQBEHmxfnG9X6r4ZstQZNSJXivszh29oVV",
  "key21": "mLx3J1jfgRHBFkgphTeFbBGaTqZHp9zENG54aHPKHaD59wdGwQzLaEzTEwjW1M5aPxhGNTLrka9ESzzyiW9jfpy",
  "key22": "26cCm87MdjhxTvRJL63ExJ3BqYXwG2SfBHJB3fwUxd9p6KruyiNgvNAyx81cRFR3XZakDG16UgGeXPnE1mcPgb6e",
  "key23": "2nu4KjFbUJoTCmfwgos8CBsnLyvoMi2LDrn7VnZmGAQqF3m2LRwWmyoPDmVQRh4CYZ94wUDrETkowWUw2y8CSRYs",
  "key24": "4TjFPLW66k6c11JzhKYwXCtjjdXLnQFbkPwbv4BxEndZFb56gf6FVuxZoxJJtcPqarprLXAS4kgP6SCMXzLZamF8",
  "key25": "5j2ZyU7Uev36iTu3tzu8CMmDVDdWueA5d7ARNE9ZPso61jCCSfRYgxR92pfP5KgH6BwpFpnBdPrsYJGdweS6z33h",
  "key26": "4S2pEBPW8u6JvDKSEX6CRChLVEpZAuUr3jhJ3mxsdwgtE9n8Ls4dg9V9HzADHiyApsdinXZRCEqH1hU2zqeNcNEm",
  "key27": "4HfRrunGvZMmzx4xf39N1tb3VFmLFt4HFrusj5qkv64Fi1sHCwqNTWEJQ9miS6PnWn5zMDtB459XnwP6Patc4wQU",
  "key28": "G9Sf4FMxgPQC6HjnQnmDt6KwUQmsZnJcEyHPQXtskJLF8W4AmrAAiJC81hEBw1kQkjYwfJJraA7vYauHyMfxpbW",
  "key29": "5mBPBMBWtYdSxAUeHPzFeKC11GqAhbsyeFQGmmRYpVwQvPQmh2PiheWtUT4dHiquoWj3URogQVPb4mJePQkRsqwW",
  "key30": "5t9d37tqw5ahnErNY89ej3dkBh8T1pktkLG7Vk6nFwxcZnNHrRQvVnB2irkpjt18LAGzmKpCfsy6sg14QqBNSG3g",
  "key31": "4iemNVT9xLew6apBJyJutGnm3FcKiYuq9qmNWtjkvePhdA7bbGtmPuhb7J8LqdEepyBHtwfozaw6oUFVQ6YJH748"
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
