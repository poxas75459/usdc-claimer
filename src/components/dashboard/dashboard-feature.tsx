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
    "5bQ8h2NQECgHN4Bu88dLd753F5hr62wAYNJhVrGS6g8SGfRRyWXwFUz3qMyUR4T5QA5vWi3Rue8VnP9ioMymU6r1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Sw3LenisSKQTMp48vJn4SSusqfCCBXb1N8iBrQN9hdiHqQ2C6vAU8WoBYuX8woRVUpsy8G6R8LJhyHfX5x38ND",
  "key1": "3SuX9UKXBZsbfP2rod9HjTSX64Aiv2vyeMaYgsRiyPkbrA4NptEAsLoHTRn9eSugFmEqBfPH4GQaGKX3pfeusUVt",
  "key2": "4a8AZNLqB2iYeeepfHMzFYWYrzSdr1jeJzqtnt9CEYgvBLLop4rWKFmQJSytdQZcVge8P7Svga4GVYT7ReZTF5Zg",
  "key3": "2V9SM8yVgfQqiVJzY7Qu99g2SudK5udb658uoP7WgEGxwVPs5x2W9B4Dw5KELKei85ZBbaDBKRFEdHDj8J5iwk4r",
  "key4": "3vQFQcgBbGCcn4Zihhqyd8obP1uz7NMKNRLmCtq8xhkMeKfkp4bUixoQhdMpP7EX3iGpGEuWQvEubfNJhWbtaMsD",
  "key5": "vZbgUp1UT4fYiguALBF6uUNt7aAzsmufMPN4As6iGbt88AqHaeGqUhiBJhHhvgYgU2BXWmnr1tMhrFXkk35mb59",
  "key6": "3DXiKdRhziDJf72hH8Nw3yxdKwQpLLdHJF3UxfnJU3Cw2b5n8CnG3VpSdKCzozgveg82o7FyhnkoWRWE5n1KXMgp",
  "key7": "4HYWXGBB6oVD2AZyKng1BQh3xsDmCWjYVqmDdeHGcWvFCUHSyoqwvPwAiN7GQhtrMiVshfMiEtax9aPPBQVxZD7v",
  "key8": "5Gn4Ax48xU5PLfHdGowfrQWyH5oLT9yXDABkH6ktNvmVX7b4pvyPr5f4YyQXkrysPgYL6LHA8FBgNcFtgRWpsQpP",
  "key9": "2N5aDiQTQA1vobkibck9D8DGBndcSKfhY66eyKG2m2iWQ9StTKcpRQTMptueEHq5YyaHr3oiBecbBPcseXiTCMVB",
  "key10": "31a9vh4FpnHdZnH8rBbBHKycTRd6SR9fpfHEmhxnBaeJu1iGMzK9cRAL6F4z12T3oAmvH8qAtNP5FcBsuKwCJW5o",
  "key11": "4DT1CMccwSJE29JvRH7MwPZcGXXF4cbaAizJAAypbcbE99oYMgcSWw9bSnyh4KqhohasCHVPm1gXgsuqpS7apWng",
  "key12": "5JmuG9SPrC1y5Xcy1ME1W9dkbpQkrTvWrgJLZqKNm9s17MPx1QUxNAkQTPWFoqLv9Tcv1EhKYcdQ5vFKHnCEoPnf",
  "key13": "UvDH3eybYiXn9qS2mXSBMmNdZnjG2P4fxew6Ub5ojxrZnoVug5Evex7MuH6mzf6GwKAN5ERAXMFKgLRXXmLZMEh",
  "key14": "4zW2WwyawaYrU9wqKjtTQTo28jLgrUWK99xJxjCFRYCXMoFRcw3jMf9yXywY7g82uVBrkPKbVQz55mL9acJdxMps",
  "key15": "3KvYe6w4YzrVppxWijjSGU152QhDGMirmpaXFJ9ccDM6R6Tjsj4jbLFVGefVhJzzq5bpHYsxMNL6nzmmCAraikn6",
  "key16": "xYkyiYDFjnkH8y1Y7w5g7vRDpzaqgCehThaPGaHzLjvzoSo7XEmhcCAjCLFHbPSNnbKZrMfenVi2j5whnYv8Dqp",
  "key17": "46UkfvevMgYoGzL6np8vpuRwCKPwa7Gm6ASgUSrFZVbCiNFAQGnWHnimcKXGMoisLvUkwYiTyzEbDobA6B1G1P7t",
  "key18": "bqa3MXVUSReqfN9j3mGvZ383FGNZyoWbCL6ym2B9bNPxdaQK1JcymDBrdLMbGNrJe5s9exNaQPz8nsFDrb1hXBm",
  "key19": "7K3Dhhq6hsBh9dS8FaQvctMRoDZTtcyfs8j6LLYPZiJEf2PvJWSXsv9DH1obGZgPC66uC733aGChVpA8eZ8wp1H",
  "key20": "53XQVCgXWSuuYkpyHS5RdGVCAQ1bRL8byF7HYeFbS3fHToGEv1TVeaQGrghuu47ay2v65ogS7tLdAhJw4Y4uumhZ",
  "key21": "HNBierhggZLZXwmg7HxY7abVhxoTMR7pMYTwkeuAYHULRAiihFBQxZ8hShNzEvS7FSeu4TrshyiYU7gZtciMUwz",
  "key22": "1Yen5HSBUuGke2dnBuXpfYxmd8MejU9euWYqHhav33vZnmq5r9AUSLD2da5Vwvbta1pEiS2JawWgDsd9L5ZbeW7",
  "key23": "2gCZ5ey4hMGqYSMJrC6nqtQgdpQVsYTUZVUDekizbXrrcwMJDquRHuqWEPeCsaQHK3R4wRuHT8LWJ8ZSBFWQC73i",
  "key24": "2UURgfsC1G8uk2LLqnrnofKMGGho9QU8Fi9ehfR6a2h5FQpq79F5p5hKBeQex4TkET6bDQ2QPyKXsPCe9HndaPAg",
  "key25": "5ZYXE12E1wxSwBsbmFg1PvSjKrio7WVyzmZpjXKM2vZ6vcvHuhod5xQ7Kwn3u7MseZdwDnr8HvbKMyLk3ggf6PPk",
  "key26": "2oUF4fbzmfhgB1TPXtJAp89HNPZj9qWnzpdBmq9npqhSgb9DW9HajCSgA9cpFpErsPE2y2SevSjVHGRa7DTkdPvr",
  "key27": "65zecMf9yaM5jN1MEqWXSGBkjXkdSHex4CuKqQvqjT9pPjoeyxLtCSqn4HwyHoppogL7Cd5X8Cchh5zKtE75dEBJ",
  "key28": "24dJ3q3A6bW4RRXpDxfxut1PKsYZTN7G1sjka1NPvRCbNCy6rXAFFnEzYvLuLFsLapjZ77trsLFoG4YjJv3ZDEWu",
  "key29": "WeiDd1Fo2aSupdYuNntkSW4XnR7Q1FkKuADZVMFUmx5Wbh5twSUan3r5FzpmAchmfSCHjKknCFuzqyFDU57vop3",
  "key30": "2xjyNceQv1VZQZfVzL3Svc9PxSkogwxfmh5cLHRQc2aCcqMPQGe8VrJszsoj5NPGm1ywbyozLJyU7cYNwirCPzmq",
  "key31": "4T2MUzj8f6a9NgTBkiLvnVpno2rsWgKdLCjT9T7VAXW4KMAvqDdjZMJ9QmAcs9HkCDtKEFeBEN4tnPZ9LWnny21q",
  "key32": "427a47UQbzPu5fCpMG5QcTJPi2EYCeKxykebi7yHfDz6tvC7GKYVKnzLUbKh3y1pjSQ2K8iisGX66fePTBNwEX5G",
  "key33": "3MwSN782dYtLkgzoYkhBreMY9pYxURrdBpArcETNetuEbczujeWkgV43BjE7geQxAqKgiENTCVHeCr5HCFh7yvka",
  "key34": "2KqosuxjqaSN8uPbmYjZH7gitGp7Ldr9dNYVZ1R7GRPKnYqFWi8H5ttdW5m9W2crBrTBpFXofAS9ANcdNh3vYXB6",
  "key35": "43VFB1gU8UwKy5BAhbtRc8KhkqnNU2x2NWiYb8hwoYzQK3XxqUCGZWLBjrR2GRAZaDR41WzxkZoZLq5ftmfmzPMz",
  "key36": "nHPq15tq1iUBnZ1aycbsmKPiEGk9QwK4vMkEKAUbtdFPTezjj11nvU2q1yRmUmbU6LCMKgDyT6q8Ym3T1F3AJNr",
  "key37": "4gbGAoSYi9tZr4JdpAVH4MUkB6u5LdUxY1NtWxXBQVYrtuZ4e9XTuwR2S9jQFwdJwWfHCqM9SbA2AYCH2JKHRsHz",
  "key38": "xhXYMEp7FMzS3Xuq7SjD8Bv56SKMYn11hDETtFfVmNb2aaFbqJkZuieqrFN6RGjuKmfffMe8ZsBsEJCfkz1WPT3",
  "key39": "D7r6SHPDss5sui5sZpv9wSSgxrwsKkWgpfHMMx9ew5Zt5kpXDB2o6fCMGsRF2dVW2c44iYTTotmjATsUvj8p236"
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
