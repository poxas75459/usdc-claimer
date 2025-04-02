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
    "25tNKkAv9VqMoYTJo2FKpqAnPhxBLWNTaNaHkQML8DkhpR8oHjqvDBVBKG2RZHpQHPQBAnWKmjMpGHVxWnxsegVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PRCsJUukHoN7t35LYndXqHEMKDxGxab62UMEouwgxbKthYsURqzMY7Xr5JmVMVBJQom47Ft7DQnHrjcD3LDthad",
  "key1": "5gtdkEfSiWAVjdQ3tQ3v6t6TDsKD8q8G99tsJLQq8nMNyCNj8rB99BgLpgz6PwJGZG67TXxFRa64wAzjZhXcZb2r",
  "key2": "3pUjhphb22u8CPtUedwkH2yLBrZzgaAAwdSh4F7PBYZs74cZh7udX3qhxxey5vEsvWkQK5Wv6FQ1M7v5ZwRPpCby",
  "key3": "3SzC7EHgrDmySfhMPUUgKRBuopy3yZMn8gZvBhLSvYbULhQRa1s8eQnyf94qxik9z9tei8VgAPsEZuoKXCstZknb",
  "key4": "26pbTLXu3WWa1N8fZZUReVVUF3QUW8dfD2w3h7V9ga4L6Aspkoyyj7CVxEZqfMXjFnB6XdbLzPizmZUtdHXp4XVG",
  "key5": "5uvQ7EYeUw7ksg3xJPXmN3UxXGCHnkvDchJyp3ti36GgnGXeBEzrYHfMJBDHv31uYVTFCEJpKGrqD7Wn5DFyDfmW",
  "key6": "dcmeXUGeFUG2K84458Ky3x3CdBH3fWenwkNRdRFDZWGeWucB5kBPzQTKxVtvRZsMaGoKy1Sm5PysFMR7VvNToDn",
  "key7": "66p6ab4E3HUd5TjrBv38Y7wQLCNpTRH3VLrpGKwPLw2f8AhpdDAU4UK5SNfBCxJJoutE5JMV1VQ1rLXRmetBRGvw",
  "key8": "3qMvrwcAi6vGR2EzXUx7VjAJotybj6C7TgQCuUUupQhbHwmU7EZwSbi5jVneZcsbEHJFKoorNQKoFKVZ1FXBPCfC",
  "key9": "48JGN2gXd7GywE5Jqi6KKwA3gny9GAkiZdzx7D7duu4EqVSrv9WoX39hUYkAsC4cx2op7acdsMoaNMLvELKgqWSA",
  "key10": "3VZedQXVhYrBpy58DPdcyWHsr8JenZ5695DZRiBppzLrsTiw65gwzfbQ94v69bbgRaykbhAd8byiQzPTr41Ggs7P",
  "key11": "3dhdcRoNNLXhqQgNBFzffxdKaeZdBdfMMuduuVncuVZAaRZNR2HBtdJFVxSo7mNrVtxXcf5DEX3fd2BLGaE1gWHg",
  "key12": "9WoEKzcx3g9qQTQnCntP87fvPorhhJS5p4N44yx87r996ygfQEWoxMWex8u5yKK8gfXi37LTxYorpfmDXgv5eW6",
  "key13": "5J1vUk3srj1wEiCyV9UX1VSQwiRohKBdyxTkfmchCLo9YzRqEqq7cXQ7Nsu2PGoxv8DZzpnLBfCHPpbv8zNWfrYd",
  "key14": "4q2mdGdSxNYQnd8QsFPjYpcJyHc81d7p6hi8aU1nHNVepHHUbUo3Dp6m64f2iohhGftJ1Hx5A9tYiK79AarEdH3R",
  "key15": "Hx7Y8NfJWjwb73m5EHgBWGv6qRo7qbGhALUTWw1DNVkQRruw5YvVsW7QVLDJvJYXCNaA25HRie7hbcNvNTeSkA8",
  "key16": "PXXPu7o3wzDf8RWrSQbcwt5yQB54ZJVjFk4wUCTTBoHKEXePfCh9U8zMxbVBMaxE5jqYy58NdR6jXTKAgSEgJeH",
  "key17": "5vFQp5gj8FS5TJfRc7GPhRr96AGkUCnmN9CQGMw672iy1neddYoyBkXwvPyGkEr4C3U5wUD71wpgz7pV7VeZdPGr",
  "key18": "qXXyU55KgRTBDHMWizSHkK97F4bYLKpF1ZVQM5epd73F84DcW1AycuTiNUoNwVb8medLznnfGgVuGvPUHHR93Uq",
  "key19": "Dn5yMNxgMe4r7Nguhj75o29aNt8nBtEpXrZ7USLZ6rbSGNHJmPpuHuYxNw72oWYV9QEcmAtwSxZoibHGgYWax6X",
  "key20": "3aVjemcQcj98zpvi4fVVPPDVMbP2jVaECYVKcYRUR3vb5druNUgtRQTY7twhhk4ssYf3BfuAi8HqknqGK5oQofPC",
  "key21": "46S5bRYm8Rf6pXipFDDNHxhvHAUyTLsHKZhkQ68hzR2MBYJoHsBGHNdR8QhwAp7nMBbQQJ2dingBQiuHhQSNPWrV",
  "key22": "ww4qAoBVwY1sagxYxFgLkHN7V4w7zBNcMnLvEJWE4L41JQNbqdF9KjR72i3u7fkzPzeFWSkhjVU44kXjwVJceBH",
  "key23": "37FeiRLhYuZru5xDp5ADR8URW67bKT7ZqepLviFYJCdhvNhaUYA1ZuXCiV8htDHhp52AJesfaY313dUBmcdwGFG2",
  "key24": "56UMTMbijChZYBinfye6fdzKdnA4nEaCovjYh3U7Hq77533YnKMmaMpbuQkJd4bJg4SoNXxvLG4r6JQSnFmpWRGZ",
  "key25": "hiM93oeARUYAjkW21YjTXdoWxWi7Hb6oGkPBYg1G7a6v5d5v8JEy9Cfpq6ounz5U5d52aWCbV65QyKMY43xkx6h",
  "key26": "v3ZYHwok1uMGhSSmKVrvcKpNZyxT3Zudw71fNSReEBWtQMWrG5oGq5hRajEzP4cAL8g3QNQLpGJLRH4i6HHTfXD",
  "key27": "2wy1v7TkfJKEwEpRLdhYhrUYUJ2kJra8kCkYEBt3LYB2ST2XwCFRgzxGFojgGgCwugtT4j9LPbCv64SN9yc1VA3x",
  "key28": "5bj6wURw5KWLRbwAimMidUyQWnPATYUJokN5sw311KujRuWYkS7tWmLd2BNuVGgYwABKs2uosvh7HrfQAnUD8LkM",
  "key29": "422mYaArGB4VbtRvdTDkZnAUB4KsfL3dCHH9xiQrwhfzxe4Zx6PoCGw3KzvCSov859Cdp1iYfjd2SzWbjtMAhRgP",
  "key30": "y9JK4FjfZGDYKPSX7NZdDF5bFXbzXBSJE2gHewhJKNm8PULamhx4SkeGHj2bR47kpFTL2MttMeJuvxaFgA9WcpN",
  "key31": "HNAu6ZzGzxnkDgd5WLE5fvGCrBj8YPwLSpnwY9s7De6omsigH36gqYoH3iJUzQxoRVPjYktNgXkaTikCYSSXL6d"
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
