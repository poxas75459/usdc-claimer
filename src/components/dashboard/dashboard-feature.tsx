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
    "2LJF1v1nZ8ypg3oJzukACcCEvejissWiZ1RV2E9mzduVWVr3msMkUuM3p4vAUNpQ81dNEHd6wMFJtL1S3LoT9DzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "412fkrKLUUdSs967VfqWch7mKNnjnY8UKhJF4bcVYoAwWQ49PeqR3pwp1BqrjUwVAz7Rjtce2YwR25W7HhBjDCEo",
  "key1": "3QxLEPJesVLSKbXHsMkDnkENYTHys8xzfUeXFbSohRD4QTnVAzDxtiGDwieKwWDZE3sMdtA1iXaDGEaHLwjT3nfq",
  "key2": "3L38PHg4Lm2GdtepCJYJGoJxQmQGD188evj3sHKANw4N2RTAaLVt7e9EEHCu6JveLs7crU8BJ8GJU8P9csF1KvkG",
  "key3": "4vXbhmTSDW2S1CJreNpn7fdcQVYQjBQTjz9JpbKSQKMK9V42KjL7XwQdKFEbthpEW9CRHBWvX79KKBfQukdoaM1m",
  "key4": "5WpDJk3NPbPUS9x5AFtyPrvuVLjGDy6HfEPfHyHiCpaptETck35HNYWZrncXAH6jAD3pW2sxKQ6ndcgxLzHGseSe",
  "key5": "2zVdLbkRz33uAoTw2j1ZvAEgEuXJ1iRKPze6s7cM52s2qhTWdWT2S5iAV53DeAwdLunekAdHR3LGiKHxVMWz9tpu",
  "key6": "z2B6JUR2QTWewzgEhXtQeBFAWHZmTz6c4H2fqfU2BG8Q1BFkV21n15exZeTLavvybpHUqNtC2Fkm1Tge9ur2bcw",
  "key7": "3W67hsUwm4b7bLi4KxUcL8r5J4x1vQBce1G9MLV5QQsA4GuQNsapPwNC3MvB6BzyM8fdKg9SfsbfZrZ8jYPY9Yk",
  "key8": "4jA3xoww9F6hNHcNA4bSGTqsCk1bEDPY7NR5Yk9YEroZfi9VyqdGdQgGxEc7pb29kurLjvvzxopAqURtqNpHpXRn",
  "key9": "3awbAfMcFDuUYirTKPx5PHXP8nK32Cu46ErZaxwvMpiT6BYUfMCvWLkckGZVCSPsRcffXpAinuLyeYDTXAsJMKY9",
  "key10": "5TnSSqZawFoHpWpCDvM98s9SGXFbRS9z8tFaKtw411CRMBkbZdMBfKFvhKW4sMyC9PLJWC7K78mJGpK32JKdiW9b",
  "key11": "3GnVq5KxFN82Ymcwfq5r5sqmFCRUsvwdwWh5uBRiJMesuNTAHxeThYeca4Y5s9B5ZD1UM5jVYzG3hNnBQMVZZbzP",
  "key12": "3Q2RGAuAY4Uro9JNPxg3yaUVwaGnTSm72oUQN3pksubM36G2ne9QNs448SvCG9VN1q3keekUJMopqHbqCfnpZFYJ",
  "key13": "3UyyuodoyYQ8UVmDUXf7zVjGn99U8vPb28iorr3Tso434fetyrPQhiyVfb3GWbUJMLmc7QHddXQMFeq9pxrfugcL",
  "key14": "woZJ1529dL6A3gT4deBbutUd64fSqQoxueD2ELbQkVkb193S2p8goRjLwRq1v4MvyWa2fZcKQnwpydeq3ima42u",
  "key15": "5Atczs491zqb8tRNNYVkjCwG1ZWuPdiGZ4tusTPTX2ouE1grzs2ivauQ8j8Lyw3pZgbVoRA8AUgtpbjsaDgKDHv4",
  "key16": "5epQtinpYpzV2vKJLCcHt9hUDhFG5D7qsjYBnkyeDEzPr4Rog2WBSo7iLYMaRaAyu95b4Uv5y3cY4bRkdDGPWY6T",
  "key17": "SMFBR9LT7xTPCHnxEFbWVRzNhWFCeENRiPBosa2h4fStkedc2dpNnyFDBxG21mrVewehuEN6YTsf5bGUbKK8Hur",
  "key18": "4UdQKbL37gAPn7LGg3V3Y6CSWtjgPE62uexSAtRCzacmANgdPLxhYGF4fCvy7gDCxgAZ52kuAbGMFvU6KKCj9EHM",
  "key19": "i7cMVpJsg1Vct6X6L1pHUmxci3HyG5a8RxXbmszYmyvRyh5eVCWWtX1Q3pNJ3bBM811tt9RiiYHa2AgwsXtUH5w",
  "key20": "VBMhWzdz4HtDUqmM6iQHHTf1AtRMygJAwhKbkewEWECpwAC2ojsopAB5wi41GhKXxrrpvaBFw84btNeLaRVwPGS",
  "key21": "dtanF6GsgVfS8CFgNo6tqSdhB7g1bKLtmDzobYYZKAb2JgbL6x9HESdXDwqcyF7z7e9YBPHLjEvGEMV33JkGGUw",
  "key22": "3iUeUamVntm1YcwPnqD6CuAqT8AqgjgW8aBwbdCwEfiurH4npVwPjVedrHiixHRLvx3sDcR8tgfD95em1D5Pa8U9",
  "key23": "5zthf1cNx5aFPYzyPhzjX3pKiM9uP9FJJpXG3rAXWufDVHUQrPeTivwRQqnyoNFjAHyX7kZDaHWL33Ks2KaGDaaD",
  "key24": "5EX9A3AtRbwtqP1qdAXk2gA5rqfZvF2mfo3zq9jRR4ox8SoxahPerwitH1Wnfy7nWbjFA5zE7teM2zJwDLtwFNEz",
  "key25": "49eMYokdD1Jv7nQHXEaV4mjH4BSbs4z2fv8uqT4D9qybFN5RRDNto5JjmFbQx8jChHWvtexVQhpdXdmQUVT7EY4o",
  "key26": "4F76PXe8EnuSaGQxLLAGmuG8cEn1oVxkFokV8fTnqFckLDPy5VBtRAVqG2K9QABDf1rM5NDSmGXeKQqNiZNHni95",
  "key27": "5NFKFw6spTuR36yam1EzYnAq1sjqusbVqnrHgiuycthBTqLCoKsutC1DTyeKuGosbJDUvzFP5RJbRaTdwuxxqkMk",
  "key28": "5qXEmn1vAdQdh2d1B3sK9WTLd1xGtRE9PWRF1xpP8ykQpvRpPbAWoh8g6egRJbpRaK1F6bbpf67KJfxPT8TXJDmU",
  "key29": "5YJoz88YUdan5Z9DNKrovB2Qx88pdYzprPdGpzsrx69B2JB36zxvGktUSqcWCZusLDL319BDhXjnWfC6ySxB9efJ",
  "key30": "124R9yq85vvfUTpxW5eM7ZEZzoo4yr9sXej9R8o4SbyRx6i13aDzFz9YfoeU8VmyAKa1K5ofSc9R1xdgZy7sfqJN",
  "key31": "5T2Q659e5aZDU74XvvAxPBVMayLaA4yyt6N2gy2vRrfNDwy6GEscNvLi2keUBar3oNT3waF3Sv7tsAXVVNdRJwSE",
  "key32": "42ScVBte4uN6nN4Z4WcZFKXX9Mz62VRuvCR69SMrHasxT7CThyEoMLpSjB27trGSKDaHSu8QWC6d89WP2khpDe68",
  "key33": "33YrsL1J5aJyYCi5xwhhvNbskoMLy9nm1yYeTCxSFZ18RGG8dEUhz9zcskoH7H6vLLwkMu4HxEZ9gwpowYgdiNov",
  "key34": "3UxRdF8NzJ8u4vHoi9jgUbHBaXApxbF8ocUB4Gi8hSMQpZSu683hysPK5Vxsu4FFBY2LxLoE3nhvjAsVyM9is7cs"
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
