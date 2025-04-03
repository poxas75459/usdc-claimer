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
    "4UtUuQdicaMmRaVsJ5yUXTdThzQnjfQnX8fsQmYScZjZf6WWMfXoj63Gb8p6T1eXUwzDVJHdygDz36d7xG45vEAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pAXRg85k5Ne9sa3G6vJ1uQezgL1h4ikKb1NY8H3AFCUCSx4kBWtwyy8NokKRmMcnQq1nm3q7QLm8s5jkAjCoEQC",
  "key1": "41QRz754T1MaywcaLsqnFXVXhNb9k9GnPXnkHSMkQJWru3t7ZkFg59aNRn1s4iiGHiaBPadeVEY5upiRqUDBN7Gc",
  "key2": "5iTGbMucTgUnT3RidL1gxtGcGcVsGjYggxmYu1Rs5cN72ZfJHGy7QiXrg97fAn1xVmFu73oaKSSXLqWwppD7Vi4G",
  "key3": "5fMEfrEGbenjJxmvf9voGx5JH9j9ty7BfMxtjTrwd7JFNekEPkch4yJfGwUqkkX3M3VkGaem5ojxTMARfhWvyFLK",
  "key4": "2qrGzVJXMXpT5uTWJXXrTrFFgfW5VQajcjmwrueNndJ6xvEf95NpqrD4ot3t1eoffDsWvfACFBSwFDSPBhfboKmo",
  "key5": "5CCZrgBse4gHXsDEsniRP8yKARVoqebe1Gj2xrNFKis3Bnsd33sTaphZHfmKW1PyD4QTrJYUhr2nxjjPFL12ZHse",
  "key6": "2xbiN2gEpJYMqWKeVHmz85zW9qddykAP6QYuwsJJG3V1WUXkTav3nuyJLMUFGkNRxbebkR9Es9NhGuGx4Am2VQgU",
  "key7": "3MPHUeMoPWw3ne4bD4nY473xPBjQvXrgfjC8SJzeM42R7uxPfDxTtN2bN1ngWjmVv8RYdw8zZ4qkE7vSL3G6kb7r",
  "key8": "2UNT27rTv7ZV6uemXHkGYX7LwidcfcfkaGghxBojrGmdvfL1yvs16iBPFBNmkqffHZk3GUjZfhJVNzirVUD9WNU3",
  "key9": "61B1q5tWbukCjn6GhdkYfq4zBFwiPgw1f5DG87g5sKukETAixCkVvWcNq8HpVW9vQ1hzq4kUJz5dXeyBLrPGDVkh",
  "key10": "2BLqxPVX8a1UmmVdJ9hcY9SBXhAKg2emvLZS4yX7xWm3qDymCivG1A27a7VKx4skTKSp7XsHETrquTBDx8jk1Eix",
  "key11": "5JR3YGSQZjWwgkPKPK772RNbvWRAEGju6msS3fCsMHAX5LhJQQTjdfTGorhrY1CFmxsnP2v2xFxEb2TKhRQ3arLT",
  "key12": "3NWH8rhprscJL4A8Ry62nTmCz4T8ei8goGyaxkLj5XxfWEG1YJVZ6dJ8k6nTZXFjT4Pb9ZkWV6kuS6H12iqXzYAT",
  "key13": "2J7WbaHUXzhzoYDwEUCAqHvw483SPZpjsKsJZGxirkg3ENDY25uxathPCuLU6S1cSHZBQvojmx3QZGn2Qok7cSvh",
  "key14": "545M8XfXASENWkJJ3NXbinXmXsXk9Kt8DY2YAhKBEbyVDqmoWYCzSJFRWRJbszWGbqAdXxcZNVKN1D2SHLvR1wgR",
  "key15": "2Fc25HdG5jWcFHurzKaVzRDbKAtdjNX5pbT3HnTzxDNBYzYs2d7KReTKC3MMcwp2AiY2AQtYYnMSyPGstNFoqUXj",
  "key16": "3BBuamCsFUEGvGfw4XevYJRX8eXfVVmAiNM6Qb98iKcRsEQuhyq3A4Szc79tRVYZiCJcZGFp9QT8RhcnKQ4WEZ8C",
  "key17": "54m1UxicXtMZZxQXwQnZjsdQZi3ufkmGmUuA5MZ6SzY5JCPanAqPY2LFCa9dfsZbqYoiEPTcWJ6n4kpT7UZZsUU5",
  "key18": "tNGdM5ZrB9uGbeSK8iFS9gWruzz4mvHmbDhBtPj9CaKCewFeGwHkz7QjjZHgAexxFyxZSkaxm11KegW2j5NpcMS",
  "key19": "3Sk9VYcfHBfaJ99fTAWjKNQneshEZZank1T9EkhnB5wHqgSLqDBF6zoWcaTobteQQ5RJbHdxaHE5XEx2Porq1N1K",
  "key20": "2jB8X6ep7AQVf9oqZC699YwJGk9aV9jJTs8AaBoDAvZCbNtwuMZap55ZP51jiRcaWhg6j2h4X4bUgkjdd87Grh9K",
  "key21": "55iUUvcb4Hp2UEaYprzZseNthAmZwENgQb1qeUMDPSwD16WrhiT3kdbvS1oRpizDoFf2YY7bgfWo8yjWB7cKfNEi",
  "key22": "3yWHGVMq44FGxbXe23dKk4KKSX7sGZSqKM7QwuPKKNsYMfMUA1Wenc3aTygqAH2BMVVA2BhNKXdKAeGN1xHcjfkv",
  "key23": "3PUhZKyuf4wETn86x2yY7KHtUsrSHVAjpgyMa1XyAzuXw6VL1kcnSNv3aVEsxAt9Eih3C8BzKYgeSkf3uxV4VGJC",
  "key24": "4odASjX2n558invs8S1g5iTjW978mU6G8K7CeqoipboPNmRfw5yfQiX8VK5FL3JLWAfndT8Ab97Dz6z6GDQE34f",
  "key25": "4xcMKCMDCFbPc3uRczfsy4cUFbDbAFvUyv4dpe2K9RxqkScw5hgbkn5otBDfBvt2zH3i9JRk8FdP5tjLs2oXrzCU",
  "key26": "4dYkb8gVXGBHDMu8R2UzJqdEtAzmRhHVGkoBokNgCiedX1xYmVDPHAmjv4yDvQUeAiSaNibafxK5DVtuJZiyGPfV",
  "key27": "46LXuLoYAdXtcjr4RrRcsL9FTfTZUrTWE9CL6LKYCSSecA4u1LyysmdNASmXsJbseAZtyds6pRkc89CgbyxNt8NT",
  "key28": "4ykgjQrEFqQU9FYHNrjP9Rqb3ZFrw7n4RVCzUmHGMtc7rPiYPHDSkM8FYVecr79jmtrf6KQQT93ycobsPhK7k6eQ",
  "key29": "4HRCCVGwLBQQfGTmeXqNEhCivjrWbrZbuvoH9fYR28J2RV27iJY8nTtvtfPnZrw7jc5rZ8pNiv7iwmyquXLb4Vux",
  "key30": "2jamdCqcD8TnjYwZszBa3rgqfwQN12ZSXy3Y3s43VZgBCMUmxiCDovWsqex2ULE6ikQs2YfWohFcYkj2gbPsc3Qw",
  "key31": "DX7DNpKz2bh4WY77kit96ed6r3NBr1dtZQ7J7MMT7Kmo16xP3nVhFY8F6xVXytAcemdkktJ46t2mMjmw4HpXQ2y"
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
