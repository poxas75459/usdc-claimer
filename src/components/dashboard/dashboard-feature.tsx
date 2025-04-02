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
    "4gTCnkY8FWJH2o13BCjTLQe27D1yw9JQmug2Pvv1LAuvEtT53oLeP5YTZMGDHW7PVcmFLyXLRqs8vjLxiog1yeJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dtdkuB8SH2eAnnEJNozg6e9dXrfnJHJ6mSdJg7zGPcixp4vNwt5mNckVWL9WyXHqiAYt1m4VPPtPCZapHyyrbTM",
  "key1": "5VYv4X1AMXLJhKxZPN6xVTgNa2tELySGbyv84gAA4hagHzHrXqvn9rm3ALs47FGKdFUMgnodg1e9oA8VFNDBfNDt",
  "key2": "3Zq4naU1Xkk4eYHnaqtBiKFLDdVASbNQjwVTm3kGpBAwVRDhu8tkgcrBoyxC7CcUih926rngX93YVERTD9EyU4jo",
  "key3": "J8jD4PQptAWqTPKLNxRbCfAitDVsNGJtFmQpsVmhRDkfcwWHGFKPL5cAWr3SCrkvxnwjvrRYXj3mUu9fbAzEuSC",
  "key4": "4r54rUi3VvHfqezGM3YhEcrKnxdcwfJ2gXLXrhpS1pGSevDniRTVGwRT2fLP86KiNvLEjnTsz63RksPnDbnFxnLo",
  "key5": "5MbQEHrPQDLbC9aYxqKvLFCpQ9mDUktrqf538FzbFa5khNxEvrmnxxwKVATaiPEnLj26F1gSMgb3gRZeHcMvUWsc",
  "key6": "2268bKHYq1pUkHoPuXmn6NZZX156e5tHvxosrCGm78ahirNNute6sszTjS1fbCCVuq7RkNasBnkT9Kp9w1spPXe9",
  "key7": "w9MQQAy7dAuEisLqmxABNAH9bCXXLWHduN45t5AramAQnmoy7guB3AZuStCYmZH51xESRx2mmFdV94eFiF15APd",
  "key8": "3D77HJjNyZ6AUn6QdU3SJNh5bAUwHukg8mX4zfADWwqJQBz8EEPeXFRqSj1FpSQ7JR8v2YUGsKGB249bpaqe39An",
  "key9": "3CXtaR2Pj2e3FRPiYNDZo8rNBkB32gSgPEcFPxKBCckNqtEDJRXJD8pB2kd3vTjrzXgZEX7FacxSDGkjRjnjzqUo",
  "key10": "65htm9rhLLs1UBuanwJajbFGL6WTaxxJGJN4mrRN7rDqSqAFECDCakZidEMjrU3gJwvDnZx3f7LbG4QkPh2seEJx",
  "key11": "4Tbfp8UcS1RtbAczvEghqvmdoU4XYXBvsXU5V92CZHRspQVSLGg8BPSwWN8PpHu2xS86NbxqxeJ2ZnkrXy8H4KKC",
  "key12": "5JKDWrccQt1Xr6q5jP81LM19rR7RbjjbfXAQ4QeMUhoVVYY7dJhBiwzwtwFziXTxaQXhjW1FpMcezptcxMbTQZSi",
  "key13": "2ikwdAC1KGGqEYzyabXgV7QHKx4AVEUwsoKBFZmEnT9UTNM3jkYyw1AT5hNryqArt7GrSbxj2fpHp5yoHWNRxRuz",
  "key14": "EQwEDrwSafp9nsFcRU7xzhnX1xzrGDfDzzeGQwWK6J4iNUQ3vNVCWDp91gPWn3otcoF3Tm9uNfVXWHz2A7pFJ5q",
  "key15": "5L9jx6ri5r29biwe3tSvTpXQsYDjkKKan6Tq9SCuekrACoDZVPtS4LB9NePQBazudGtmmg2i1r1U2SKpaNwsPd59",
  "key16": "2SqjiwQRcK5qQEqdReSJZ12fpsZgeL1U2FZnV9Kr7XEqKKHULioRLEfvD3adntZBF8KXw3wxpAqqGiUGDFA6kRZW",
  "key17": "3Xr8jsRCManLWdQtZLsyjsD4vUmXuZcaFfNwtvwaaXpaRwUANko5Kkc7hwWfmZw28MNi7z3QRcPNcPBHHNyn61rm",
  "key18": "4M5Z3ijqH1XZFKPZaoTrnTv3h7eMthz153FuBwVaYfPtvUA5hDp9aaC3yLQPxbqTfMB4HqurhAPoyz7UyJH9Czuc",
  "key19": "64TN8HoG5VGdiiD1evtuvo3NPuynGMs7x9YgrZQSnego64vaGAPmTVood33su7maLU8QWP45z43oRoq5bdnw7hQu",
  "key20": "3uZvbgBvHpt7znSiyoiFT5ami4x2cWR4vde26iD3wGxHtDBWWYaHhVuKa7moyseMaXuiyy1sJp2kNkABAcd74CnC",
  "key21": "46QfgRRKobYecDhYXHeWjrDGFVB1AXm8Su52BvKagUPZLx72uNc2gPj8RDBazdjmcmpqFgDMbgqNW27yTFYs72nR",
  "key22": "5dccwQDkxmFaG7pi2JPp5itAkiWs6m27qBkhKNiri3ZKtd7mB4xxgcKHKWatwAkR6ZkKR5quthWzT5c2pwCkW7yi",
  "key23": "u7hmY4TcDwMB2kh7oS3bhvXPMVYypxy74JKtM8YNbekw4p4JALXPeAPXJQoBFsaJxEADoxf6qihpX1jQmM7xkDc",
  "key24": "5ivRTKUEcSZN1iJedueMH3fYyVFpHxeEDpngTEKPJz5aS4aq9LTCXVqBnyxwtTLNDYq4oU23xB1AXtaERp6KwHTi",
  "key25": "3r3iUcfmo8ZQVuiatkrk9qTwuwe2gymTdxqQPicAjAajwcGxLNHZazSLvFucsgpQPn68bw7fWy5KjHu59b7Q1H8",
  "key26": "3MbsAckY7bcjmT1kjtc7qb5PrJ5N9ySAPi9uSJ1K8yDRwd7YeAdCKMZTDuhG7KhU5T58HWGK8a5Pfc6mgjBZMqW1",
  "key27": "2tJPA6ivcC5rUBA3Ws5m4xRS8mfbpMArQEZ6M72E5n2xFwfkrXgodKWRDm2BVUqr8diVR94BvcYk9Rw2vrW4iRBz",
  "key28": "56nQ2zvgjiH8ZEsWnyLPQFQGcctgnZwbR33La73SShoF4SEEhCa6b3Ji4pwDLCLX4j1zTykYVV9uEuzU6NfYbHhA",
  "key29": "3G9t7ZFZnXASYNWK6quC2UFiShoGuBPLYeos3RwhPidKtRU6Q8BxkQtTJANRh6fcvo3DKQts9XDfpDYW1VGbANRY",
  "key30": "2Xu2BNnqWYXDWEG4RN8BXzQRRzf6U8BCKLttNFkuNmFnMBQB6wbpwC6xiZHdva5Gju5243M7MTZ9byi2SkN66ndT",
  "key31": "2dmEfFhTUvQ2MZYd8CAKJwDmyVDcyM9kruMSV8Jd5q81Bt6BM8ceMh7MaPfXdbAbGpzQ81DiPcbvR2wJiX62zYZY",
  "key32": "3YtrM1S1jMKockerMvM4LQHivKAaFuYAAZ2QLvVe4auBxy9zAvvyTeghUtG8oEyyyYp64HGUNsQ9QvzfQq966SuY",
  "key33": "2fKL8ancRbppaE6cSVoXtBR2PqZECSB4NfM1Q9RQRTKjbxeF1ZNaJQF8xHw64LsLb4ZXkXBggEhNRj9ydiQYkv9M",
  "key34": "55xJLv7MhqHM175SRfHmDDcp69dtYztZRQahQYhxKfqj2eErmfiTJDEVVc4CLBVTyAm9QY7Dz3rJWKhupwTaEmV5",
  "key35": "5NkowLuYcUHYVjzpLFW48g9qqhq5uWFsFb2ZBx8CcFbEtCeJ5y6Rx7sudF689vEorbbBdnUr2VwVUMAfkbwyTDeK",
  "key36": "3A2yuHu2xnL3exxJPrpH41jT6bvYLxXdi1sadD2CGJ99Gst54RkvKHVhzTdfJw1b4iZysm43ByA7maQF8YF5nnew",
  "key37": "3YHvYPuDJfgC4wGb6fWVd6xQDFFgnQF1RG4uCtPTAg9VkqbW72mNmqYGVVc245GGnNhDQ1HT9eWdh7V9hGdrRVN6",
  "key38": "5TcpreViWBszZP2kcQUScHPuNP1qGPN39yCvitLqn75a7voHet9M9a7y1fcwdNZBndFdgNgWf6G4JibcyAfDfbgX"
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
