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
    "2cKzNfFvqsbmTirFiYeiCaCLkpNE4Gy2UtoQ1ztDhsBYTkyxU3RXRUT1ic6gVEwzbSKJxkXtJooF8jo45BUdjobA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s66UtF4oRgTcMPt19RepP64xb8PbdaMBriKWDzfTa9Nnsa8cG9WjcCAUfgZKj8NxVvVp746Zt78vkDLeXtLmDjf",
  "key1": "4wSkeCifUihRamD1rgiSKPrP6NqsUGXGokNv55tXTUPCETKnnsWTQ6rZUkT2eWwswPVqM4tAK385w4iE4Szauhph",
  "key2": "4V6UeeqZcBYc8AxR5LuajUBwen3GFkDhRPsJPE97guKBYa1rxTaS61K345XZuEhBDvBK5eAfDRGxauzrnRfLy6xo",
  "key3": "5ksz6TegwQWjJzocaH2wrpP58fk6KVVzdDe7xT6VhaqQ7RURyCVDa93pxkQx7MitorGYWsRBYkxRzcW6w2gwg6Rf",
  "key4": "2UaXW78BXeKYLuBiaa3aR3CRzY3YcqLbk4tqXD9bsTmJmjjLPH4cjK3xuMa1VGPtg9Dvi7pn3GReA5RySnG23LLF",
  "key5": "ExeXgkNXjQw9PapgFsWfZFxe4RNzS3hz3ZyijyqiQJjfznW8ewC3G2Kzt1RnzTSM6VsmGv9tGmZyMvmEUvQdSsL",
  "key6": "5yi3XZqANLAFGAbF7eDpwetdqL9KyG4i3KoftrGMR935SMCu2okfSPB9ECS4ofRazRp6BjoocTu4DX1FThcxRtLA",
  "key7": "3cRx8ebSazZ274kzx67Vdb5HEtNhPGmnSBJmBss1oRjQRSNjygmdTWQ5Ts11Ynuya8YESqeoVVHPHpGjvJc7oXPk",
  "key8": "3uT4DKfLSHjPgJMytdKCNRsgKhxdS7eujzBirmDpHPhijEw6LYdYthxkJy1pg8BdEcj6E9WgJ4eH1vZhSME9SZkv",
  "key9": "5Q3LWjFMW1BPWoX9xkkMjTQ7FUZELxi9ZK36TQcG39j1VkwvCP9rvS4oiAViNLwFg9c1and2ksSCPKvDJgrC8xqW",
  "key10": "2RSATnbwDty8dtZH4fjzNkbhYfiUUTzUWSpNAA8XVzRmmU5yxuoJq2KVPBKWWVTmNCtj6cUaySrK5XAvgg4v6haM",
  "key11": "2nRwnnuyMWmz8mVwShj2adhEhLL6CGjqkgWdQBHUUbciwnRkqgVMLT29Mux168Hai4ynHH1MXbfHfyDT6vxeFgZf",
  "key12": "P99KSRpW1vqdW8thfER9BATn5x9BhUh7fANEVCQ6gM9z7LDbhEKuekmnciXuTgMaSMziMvCfZe12sWW6b37ac2J",
  "key13": "2gYipxFtC1drbbjNiz5jVF9EUWyvsTthyyyLjikK9nBqSmQ7ykyMKeb6gJWeqXe8rqYHgiRFhcsUtPBZZvSGDh3Y",
  "key14": "3ABXQTZHva9wEzWR7ohUjxDFR4j7gJvF91S3Ldh2g9S8s8zHMcZ7SrX6BvEGtSXjJNp13WD7u76LaSKjkePxGMNS",
  "key15": "3HBMd7MAiZAosNqMEmaMeVkxGv2eWRSQ2At9JXf9jXip2tyS6emuVLfzyojZWkb3zDnRJtNCs1D443cJVqvQKgxq",
  "key16": "XSnqaZMRW4kRQjMfvFuJtfPxPb19iZSpgZEGZfVaPgixTVWyeyV3M6zZseJe885ETxegYFt8FxeX3SXWgpNrWrR",
  "key17": "2TQdgAFqfC23WCPNV1wkpn9WQ2w3nKxGdTBLCmMTBsZ4gxTya2sLphk3VnPMTb8GVBA2xryHz5Y9BTmB921osDYF",
  "key18": "5Sc4L99r6eyf2HQe8pDqrQdS45U42npWC9gC3QD1TFfSzJVdvGcoFdFYoEVGJDDoHtMrZJ1Apk4M6LC2kewq1xe9",
  "key19": "3YQzAmW1mNd4jd1N5cp7sDoCJjpXpSLszrZmBprcUABipsas4iuB5SBdy7V3J93pXTjcDbkqU4EF9QewSj91Hyko",
  "key20": "m8qJPb5hor6iohh6VHwWLhQ8vM6tZjmyDhNMBzmoAkmpgqMbQTm5YvoubE8u1HuHpqFJ6sJEYwwx5CGD41GMcLG",
  "key21": "575PzZWYncBUN3jmrsTT5UBttwdkxBQgcBVWZ5UDV8Nzji3N3bEiphnCiF78SV53EgKpsxXYgRwmFpUNhwotHG81",
  "key22": "26NeSipiW3aVzVytsrDqwD8v3oCukSk1x6XCvmKcwR6KNx89b7kPoCruyyiEHoVBiWTJgLRs92Hvy1E6pbUfBkN8",
  "key23": "21GqmJeA93kaY3RmD2EdhbvrYWsL6xvUzhK5UYVuNU4m2NVGi4ZFBAL36Y1C8Ygf4y7zXZnYTMhnUs1KNfiHP74i",
  "key24": "2BtCKsX1dra4HJRk9wjcqk1uWDjUR9FqqPYEKeEQWaNbYXPwrArEUVvdHjnqdwinVLErcuF6VrGtdQ3bZY5YW2va",
  "key25": "3FHNLjscPT4HLWPu2NZuXLWHEMNZmpHoPrMvRh4U2SSHP8cx4rKuZCqf6RQ3eVkiXb9yRfuxiT1pGZtRauH2dk2p",
  "key26": "2QCUuf9rHJy3X3qog7NEuBnbR1wtDC29t9nAhE6J8Ej4gyAWMpdqL9Vm1qS8DW1tmZCCRv5kCcPriWsx5erUEW9T",
  "key27": "2RY1oANGja2Pbb9wFnrogi8kuzaQecSK3ASGtPhwbWSnEun1BzN3H8vESMdjtHBr71UequqABjdxbZucgq6cGUmp"
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
