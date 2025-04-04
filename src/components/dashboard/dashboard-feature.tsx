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
    "xvcfLq4CuCvoAjkCANcNKBV2oUpp72mtjjcsgtbQEFNt9mfGypqmRNvz6D1mUPaxtyKJYKVdQtpc29GVH8DnT7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UWioaJgkjJZkJo5WpSC19kJjASgLK23MT5wk9GFFV8FyjJz3QBhTUuW8KqsaGjyhg7EcwYUnLTs8Yq31SU5ShyD",
  "key1": "4VYanF1fyFpyQxS88kp2MLvsmQwSYKNF7btyaqw4vPGgd1utmEtAdutgpKDjmeHxGhN1mMCf9RZpApGSpjAsbPwa",
  "key2": "5bNPBPQbZq2WLsgNmNx3Cwy4Ntb7tiHc39oBJKuLFWKAw55553EXyMQxMdHXksCMZAkQWTPJgRbugJpwsUqh3Kua",
  "key3": "2Yra5fpTgTS3smK6jrQ1B2TPMSe1EWPWSXqHbuNegRDtMG4Jkmw6ZJFLQDNamwtfUCfMcCUoCjac42XFsJiuGN8a",
  "key4": "Mu7Byhpq8e6cYYqVfs684EkAw8Ee9ap26xS6CL8rTgNAtLA1KpyvpFBnnip6jufyTC82oKyYN9aajndcCdKPkjg",
  "key5": "2BD3iR8FQJote6phsJsqEzvpoVDfztg3rHfixy6GAXxjqU6kZ5HhrggmpUM7AxsEZQ4zy8uaHZh6u3qFQX8oEbwJ",
  "key6": "5tsEkbh3Pfad3yJjqakegqr4BJd3LfNAxic5rzgbnFf24jyeq5DoAXKH4BeUAYAPPSa1dupCw6wpPeEbfMR4wrG2",
  "key7": "4vDwusT3RMpjZb4L4wjoGWRr4QTCnBKHwwkJK5zvyP3H94L9i7xebGNteaUpgr4QnSHqmUUzQYZ1uRHBFUvE2U6L",
  "key8": "3QHsa8izRnF6kM5YvahQdVcScx5tn3yQ5MLjrKKtNuy1gkuYeqwgaLfWmaGz5L8hKXrgiHd5Gvzz4owyDBGN1rKm",
  "key9": "MSTuLfDYAyVehVXMePtGX9EF6qZkCpn1mhNJHdyQBjQtGbEpZoaqZ1TF9FD6cQfxxPwcDhKzbaagA83a42zqNpF",
  "key10": "3a5w5ugQGV7SUSUDUZpcBQN4RSosA3TBhsjNCyhfGsd4PQUS7wPcKaEeyofeXLsUVRMVd3maPqYHqgEZLNsYeXT8",
  "key11": "3tPWrXgPsNC9WvSLSaM5g1y6VrsvpHaCLD1HT2v38VEBb3VVGCWRCqrqBYMZg3tX6AacWFt7uVJA7GWmLdF4XXM9",
  "key12": "3GEkE6fTKcAZm6fWTTh58w28HBPp9HJAfFouQWoBdX8FcKx1VszR3etLxyw5VmiC36J7sBAjRU4Xt7zFqLzXtvL7",
  "key13": "4gsVNTxm5KbHb7NDfYMAegjEv8dqkJX9btHSkTiCMfP8cPkdDikEo4f2FHEUSMGrTtPxM3ZbKZ7yAjTeNKa396m6",
  "key14": "4jWDdT1TFuXiUtcZqPTnDTdvaxBQ951pEuASHyJDSBVWtnN58QKxCzD4rKYPpKR4SYs5qQKmZaCr4GmMV83WZFhe",
  "key15": "5DGNiongw6js4jMCqbs78cmxv7PLP1gBAuSPF6RNKzFeubhTwej5RgSG9V6Ao1VP8nS3LBqxqcUDsNDHQQFNQMmt",
  "key16": "2Cev3P9YwUZE1ZLenXGoWGDyVuNARPfnwpopBd4fBCp1ZZrFMgGAK8Dzu2hDfNwiDk3sN4xJpT8foFYVWk6ioFNZ",
  "key17": "3xH4knGu6Ax78BczMd1GcP7a82nBsoZVorbwemHwQA8fNywnoGCuT7g7Y6GThR6rfz7Ujrv6JGVUseGkfxgcogvX",
  "key18": "54ddRMw6FtJn8qAgZHQLTsLVMgx83e2KcyYkcmkQ66z56Lxyc4nE2oZC1cv93VXDX16didxtHgFWUntDaENTR8Wx",
  "key19": "4oQnWEqURBvGB46GhJASPtSoxGiTD3SDUMdY985QwNQ147HAtw7r5UQtiprMdHEd7WER5Hpybbz4hWRGs6gzNujo",
  "key20": "2FA2n94uFxUVr8WBQ2a9pzyZUbWVhgPjYAJ8sGYVr2WsKdViQRWY7x3QkZczo9PPaWMvpEx8f2AgEk5nagDb9X1Y",
  "key21": "46vCSZKA28D12hXkWuUEhS8ndnJx5T6BTDLze3ewPDBu2AivxgC7t6afc1MBRkaz5R8MyN22oFDydzMK5fYBUUYm",
  "key22": "25GiQtqq5vnjBvvLu4E6jTu3DS5f4LXSJsEH6Mge6fdVJdVjbVPt9woFDP4AVXKR1WEasimVdwaF9KZ7mh4ua9RQ",
  "key23": "mYQyJJBYh3CqWb4ur9aTCQCXrnUHrCsJtSG5UD3GLRnoDBWyCAjdz3dFYVr7A6rQSURdPBcWNvTWHtj3hVSAKZo",
  "key24": "2cqqsaAw3C5YVpqz42VDu1G127TNZEHfJoph3Lts1H7haRV2wLxuhHZYUq7wHs8paFBtqSPMNY4phpv27R7rgafM",
  "key25": "4LfTg4os8Sp4f86SPJYkScZaGXae7yfLgDRAAPMWXt3M7gAJXKbuLij6yybmvpBE7z2uVK7ygXKVcTir5BbPuhBn",
  "key26": "3RnrnwZSAEsXcVWZDRwVsNABK9xbXPC5WqCWW7nxidKs8HJuvC7yFyH14Fcg8LDDcKq2gGwPcY2uh8HLuzNKRpE3"
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
