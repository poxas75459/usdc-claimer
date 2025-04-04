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
    "4iUpA266bZtuGUc49bBiM1EXZvBPqV3b1A6MEQVZpd72gYNT9RfVH2wLAX12QrMMLBob1MdUQMUEfDzkbm5utHme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iG1qTommmNys9vxgNheQ3ovdqfNfCvKZyuGqmLbMakFe6TkTvLuDex9FgZWy6Rc446hHdw9eAWHwcVLnQvZVwHQ",
  "key1": "QFnHX2u4XGrkKiKZkCKefd1hWtADh1nge3y8NHJWMutzm3G6JfNQG3ym9UzT7VjKHVTTRENyQ335tUbX4J9DQRx",
  "key2": "4vNPeKDone8khYhtV62DC3gb4r1F8zZXsKaonnSTf471Q9nArCfqqCDcaN3hEw5f24pvdAtBPwkrQoUcoUghs2PC",
  "key3": "2TZmjdQzf8g1RjgM7PKmDMeNykWXCuq692uZYr4LBmNWvHys1YeW5QtzJuU6NzSgerF244WXtULZ3gZEoZHJEZq1",
  "key4": "4VdNaSM77HTTQjAhsZ3AX6rRqnfKnBKgayErby5vrDGi5QYcf2ubXx41NvAqPHWhdLDu49vn6WnqvDjHmp8WshAF",
  "key5": "2dNFNvV91utVowvscMintzLRmNqdov49s2gzWaUA4MQa9fgNK37J64YftYNSiUGGj2D8RdArdEwK2gSZnjSqZ6kS",
  "key6": "2AQ4UBxa3CpqR7WcZpRasr1sCC8Qmj7aj1sLo9uS9War8GNUfc6D74UXsBKQYrJA5seR68F1zCvav8wBqyZrRLJb",
  "key7": "2Y3DdNp6GPsJr7iWwUajvtMTKsnE4G5VprrzxZQVmH69P2hvrzp3kTBfZedrPE7iHp4zmkhLgEkkj1hvu5mDwHLG",
  "key8": "5vmApZ8ZQoivxngQB9bkAb1u8q25AqdnNcUN585divYkb44xjhSrU9aG2bCMA6jELLmGKX6M5xp8zwVygPH9RyuR",
  "key9": "2cqqtYDz2uBvMfBayC8J4wktJP7Mgt7hJop4ipEjsBRqrJH6Hh5JsHvdHXMqMU6bJDoWJJbCPr5grqNYaqcgLCtV",
  "key10": "3jVqjXkdYQEMpWBGkYLFxPP7ZptPvbJshmvm2jkMYaLjwNWDAgLnG96SEUZhFuME3HowsPxRdgudjsJAdCR5AkQv",
  "key11": "4DmTHgfAJGsD7wZSWG4ws42mftEkvWQYp9uNkvuAHud2Nb8SSDzGa17vvw9WYfiR7jovp2o6rreLbwwVLHKrWtf7",
  "key12": "2LaAtSZRkjNiAhQ3w3bYgpYtCC4SGN93kFDeEJZueP9UPYxXKPaTRJjKhy8Zq5vYVmL1hKGfjEte4bhGQ6L3qx9d",
  "key13": "4rQJHvCTTL4mJKKgYSV7xZzXE7RynZ39ikVELz1v23dP9Aqm2U4UmZUt7m6Mmp4BSjMZPBXFYmMgQjGRifuaFc7E",
  "key14": "48n9z8mBo1CSBGCZ5335DTaqG4tWfcvtu9qHdMDmNJNSSViDYYj3B6wueWHtKBWzczGNQYywKcPiNNnWxbVAtr3n",
  "key15": "2MWAqzmHS4d3PsnCPzWPdofj4X1smYfZLbmktd8KCA7Ac5gKZFBgu6Q3SXf9PRv2eB7pqViQUjLKksH9oRR6LSuD",
  "key16": "3SbWLaiGBiw1XFb2Q71CM3hgK8Zmamvg7bJM8wtNgoWkUrLa7DXPE7ZbMT8uGxxeza2UBpQYTG47CYFyJ4fSisJT",
  "key17": "2gMFAfKXa2KCEH6L3QHCwQ6JenpyLCCrec1MpvGnLXk4uxxa7tcbg45fxJ2bZkXavUuJiz1k2HXoGL7x5JrcHP3M",
  "key18": "3LmgjqEidagJ6aayJJcnZsnuSbAy54bZBr5j7oPa7CVsN8heeksErSKh2zd5bMbH8MYg5svTJG8wSDar6gxPAj4Q",
  "key19": "4VmrmqVLx4FbGrei4RrG5JkjLSMJVqRYSbKL2qnGZwXk3ssvLMTF7zWVBJJ8M1ynCyurXydShGenc9LKXvMcVzAZ",
  "key20": "s795tzdXsdeNL8qcNBxmD8JUgPp7sDqSMvaTsP48xRptve7WBXn8mSpPAMoELd2e5kq6F6gbkGki9ek5o7zwJVu",
  "key21": "5GCk4wTP9bj7mC7H8FUgMbSkpr31mU6bEPbQimcPTKqUT3Vad15dYUdGCFsEeCcg9LEfU4GxCZBZCys4Lvjs7A1k",
  "key22": "2FEXEkKBjZKv3qy5JAzgtgVwfRRTjvUaiaL28ztWTqt4X1pvzsoX7tQ3SboaZkX1ucL5p8x8LDQ3XG8FbQrfq18s",
  "key23": "2NFiGjqLQivcX5LxZxNCD6Kem7bbVXzTMMpWDVf5g21SAwjosKNKRhuvV2ToonwPbfMB2c5W2YuQQ9ojPQ7t7QXx",
  "key24": "2NkCPZtdY4eptq6AJ5ADpHKSA7GhZFj4z32zRhrzsjwRo5giB4nrQufeyKEXwMs9DShgA6fDjfFcZ95uKeQPtjLy",
  "key25": "3M7Vd6Yy4KxwUYXWG6FfehKwBfQLD7xFEkEMRjo8NXxbmkqFBXU8CZ3gXPiAYB7ZsANMQRRURes6nMLySKwJudn1",
  "key26": "2hoL5BHD42YJ7iGEyT16Yw6X2uLznHZcUfabvvjkMzuxH2tdAxnFBZ5Td2DU6Em2dwfM5qfHTAjDtnyiKVTny5w3",
  "key27": "3fh9pJsVrf8WdRXQ6mdGKtoQjThWuJAWuREXWRczL8zGziyFd6nzVyqFHy6AF9BPsYbtAsHGjb9TcjDARMA3pDti",
  "key28": "34qKceEhEqE8YXto7KS8U1D5FrAroxgPQxwoMNFStibEhngSPNqwZGofni4ZJret62GfQGBS8y8w9Cvmk25dkMxL",
  "key29": "2mPoSZ5FDJ17d5F99Lb2L2RuX9mEg7Yhrnv6iDJxBarVwM6ihLQQazX1U4B1AUxTpv8Avu3krT8N92R3ZUErf9aB",
  "key30": "5oS7DpDscdmQiwGSqJiCbyanhqUE7J4oAhACPHukxtYPxA9voQRUm388pGPxQpDUguFJgEQCJn31vyCNdpEGJtUM",
  "key31": "HgYt3LMKkfj3A3PWfnLEhG2GB66znEdwQLmDsPeX9E3kXVCWL2n8QR24x6NzLdPaU2bD8fMC2SNSDnwz8u9XEdd",
  "key32": "3M5BmzBC7CzKkTYy1RXRLwTYRVe17Xwu9WT7SMhZobigAduDDZhBztkG3HHthEzKLwXZKu6MmBbyj4hFkHspMMrT",
  "key33": "4v9mCCX7WgzdFvukD2MmZd49rrSpLKrffEWFViQhD4BbriBYh1Jy2iUvGVEt5SPyQkhMXHLxLpUtSaFnBBSt9Xdf",
  "key34": "9KDPFdD5h12eL1byjY9GGU2VtXJ8pTK7V1zaWsVyket2a5ZBhp3gbmNSuMYcE5WySdyyBD5fmA5yiCEyNJK6YX2",
  "key35": "23CxnG8wVqUD6v6T6aV7Wjyx2GH3Fs5QSyB3otgtZESsACyHgwFDg9ZKwVS17N6CC1HBcMf53DXpWm8YSsMNjizT",
  "key36": "8pV4AcK2t9XGAWf7aGnL7qdQrg4vP8pLf6agVgr8gPyMPgY5Q2x1NCsn7kak2nHngb6JvN9P5YDBrVTxFsjQaGw",
  "key37": "3DwkA1Uconxhoz7Bps1PEPEVUSWphNcUjWWnUC4Lfj8JPsjHnb9ZkZxwRU7rZMJJSDcoR29VbYJaNscahbQWiLg2",
  "key38": "5omnwaFBV5n3AWtfAHZMptZurntDWTAQHa6D6Svk7fNzsb86o8tkbuzXx3EZixD9n5p7oREVSoBE9X7HQ8F6J5eG",
  "key39": "3FtPfwZD9y1ty3dfzAxKPn88i1rViMANa143ujiAhaceDdzpjMumCT5ifUCgN1TnegDLPRGNxxtPB4bQW8hvGHzv"
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
