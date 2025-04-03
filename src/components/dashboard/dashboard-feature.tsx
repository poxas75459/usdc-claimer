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
    "58TNUd1rbmHpL2ZvJueduqkDYHpkRKRJvVLRtN9QsVJWB3h1yGLzXpucXtNtBbgDtMq6uECL9HcHjptJ94H8e6aY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p3TnotDaMQDrxbnmUMYso15uVy9oS3MV2NyoqeGfXRSpzdEm3fT4YyDTeD6fvm2GxfxWDdCRJ66TponUiYbbJX8",
  "key1": "5MPzgbgGAVxmS6V9bt283zKrJJgg8va1UA3AnWz8rq5R3xzm5FLeo1Z28tbPjMacD45rS3hjWrDVrBxK95zwuHMj",
  "key2": "4wreiLvV1QyJuwyqa2HDEmtibB7cL7CQMzZoVqxMLiHnjffZzUksquDYKJBHFob8YTT2D3wJr1NkMcKJ3aP6Std",
  "key3": "2DLJjauF6RUYzL1rBVfdCChs2bheun8Aei9WqQYz46ysj5GLhpoauhyWhdViVYKAqAXH3Q97iJn2nd7ZgEEHmkvJ",
  "key4": "huA4aRe44Cjeqa13xnHRckpEXhb6MGk15vqRzktt2Mc9U3xCDDXyXFb7BfG9Ww9VY3zKKwChpssyWTjDAu2wEqY",
  "key5": "21RES86CNfEva6yxR4qfzjkPYZmM3cML6TQdDe6aT2GcDc1ckVEtw57JKFAy1X9AC85i6iSH1oTHgcYy85gZoMej",
  "key6": "3TLZkCsVWJ44qPQbeLHP9EZqnsCVgeirpgnHS33U2rpXkzPbwP5whZ52erqKynJgjEtwnQeQ9CVhsvaGQStwazPo",
  "key7": "4Wukt7uNkCJE2spSTqQMWqNDzsDxtrAGQYBd5u9YxRvmPUBLaXr748R7VLw5gH2cfmPhx53x8QGjwCLyu43iNLJa",
  "key8": "4vAFVmMGfFf3LKXQ3fnY7rCVwEequDZQA1L6n7phmu8fgfWVVmey35QosPBcpKkb3JatRmoxrFpY3S3zJVg8992j",
  "key9": "3nBfHQzNvZA99RpB2YCnKN2nAXNBSmKfvUR23tYRaN8P5AzVeXo9rTZpQKXZC2JiYQAxaUJ5ytwroq8Zig27r7aD",
  "key10": "2r8M4bvW51EpLWJBVNmzZkoLR7BnfDMJUaBVJap5su56QtGcugebhQ19ndQSbBxYCE1ALfXeGQ8hGsqdW1qqwHrD",
  "key11": "2nYiWXTZgyCAC4Ej84gtQLaFyvqD5J9ZqH7MhcgJD4dmwRp8iEpjpBwnAANhnew5KeJoYykhLPuUVgUNNLtijWc1",
  "key12": "4LX2hLVFfB8keo5UySgWsHLFRYGSGmgMhx35GVzCCRaqFZnWVhmy32ho2s54D9xZXJTQUzPEJ8kpLDxvPYjawo3G",
  "key13": "27f9Xox9L4zxvREzqYA5AD2KbmbQ9fbBXG7HQzNiHkQeHRjGBTJN9Wsng5WtCEQtUdSTTQi6gaYGecsgwT8YF57e",
  "key14": "56UgvS1CKC9FoqV2QLCmRVenUvCQDDoJo5JuxD7Z1acCbvqt9VY6RWNs7qVbtDuQEMSudQWyKBF7vkuL7tj7qxrS",
  "key15": "2hszQPhQvmEsWJ3AMRzhxa5raYzNM8PW9VfTDif1yrSgC52rXa5cNzDBr6xz9qqZvYu3aLGAhbPi4i2zCACafb7Y",
  "key16": "3AVse4PdEe7AE8HWVFndDJy44Hy9AL7RmoL8chpq6oK69KTngoMPD87LP4GhWWyEbcFKi5ysKuQfkpSNBsV35oS2",
  "key17": "4kzqt9j9rgWH63YY5W37qGGo4Xw5FS66PEMkzVsHDMr989uPjWHoJBBqDBHQ9MJB9XS3qyWVYnhgiQJ4Us1p1PZf",
  "key18": "5UY3MM2ktEuDkxJ3GCedH6fSigvNxsZVXYSrmMv2yWiwriZ5GimvQnHGCVoJfz4pRxGtN1ZDJzHuMxdCjPKfob26",
  "key19": "syyGyesyEuYPQucGd7WsYV9HDYED7C4LuvAc6sVvjWWUFN9St6zRdk5ZiWed9AtSr3jmHWxsZvwMw9MsNH3QSg4",
  "key20": "2UuwdcpZFDS4k551bSE8Km2MUm3nV59und6UB227D26FDVCCFhwKj9bhgiMXAYPES6L9aGN8xW7PqPrpr1Raj71u",
  "key21": "5XQVnQfnxDGgjMrF3zfZbhjehm9FA8Syi8tgkEhzCCkJo49YUpcawBYFYTBz3P7UBZjyU43xWrovYQa8E6JzQsDT",
  "key22": "4x2tChXFbatCfvdqcB4d3eUbbxvpZPBNZ4GyxD12sUfCS7Rgo4RZD1mQWwPDqCFkjWE8j9A3fNoGK4GE2muWoiaA",
  "key23": "4qR5jiNyND3HBu2ss9o2e18tfwuuAaRBaY7Z3qMMrH5KsPh8CUgezjowbJ8NkubhN7hnTVJX287sGLF8RjmrAb1r",
  "key24": "227DRR3EYNAyNuDT96og67UZBKQsofndL7K59xm4ngVeoQtEU71Q7W21RC3i3pRKvCRwpACM73gUW1aZDyEZCfsT"
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
