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
    "4piqfq21wqKXLMrPrMJair92DzwNw8Y3jB9UJzPcesdUBhXyd3NmhXpLiU3nvzsuo41kfftvw6zRjuBVFCkNCTCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "577Su9jK5Pf5Pnhh3vU2A8bhhtiZorzdJo2UkWXhmFCvQQ4Pj1wsZLRDRJzCic1GfxkCbGNz2aWV16ebFGkbpf6P",
  "key1": "ptWaeLqJ86tNg1uLhk4otBwiaDe1ueC9GmBcBcAB6KV7Vci2E6SYEQ5YHucgBfBCNHutQLbyMpxyHjTZv4W7Qo1",
  "key2": "28obcEYjE59pEftY9PnQFYrMF7d4AePzemuXkVwgnYnASnZUNBsQeNFJap96sDiMd5CJU2UvQhF1ZtuW9qHgHCFc",
  "key3": "cd2Acw9mUwAqvFjoKuCLt64RhRU4o7sHtmRKGGX4Hcn9wpB7XMDUeKhbjBm18Vd1mFapNRJTTTQUqoMGcCJhYU7",
  "key4": "3eg6YQ9qmZvxrrs5YaeUEpTMTrQcJcAcbGkmDBPZivgrdHZD1UYstiEqnvJXQtDmDLoQSMvc3voeVhc9qAYD5RQg",
  "key5": "299tYdJVs5wASpeRbffVEPMmvP7QdxcmAHJWuZrwjcJFundH1o6mAuwKA44k1r2zAPR5MFLiNw5uNdAt9zk1V6TL",
  "key6": "28zL3gEBpRpBBFbn1VmpVPUrYKdzZpyqExVFmwmwv7MBVE5NCkQzxZMCDsjcxUQp4gYu16ojfRqx9UF8KWeQ1YuR",
  "key7": "3kZB3uzdW9xRm2hdhcoxWRyKzgqgw5sNXobBESN3jcP2wL29TBDPtvMivurVvXvYQMHie2aVsWRJWvYXMUrkV5ka",
  "key8": "NJAyaBFvppM5XKBBLMrDtrp52AvxKpSE76QPZ5cFRDDGzsra4nFXFRWkuXEx3UzJ87NVNvCKmKZoEF9b9C9ezpb",
  "key9": "3kzsyJofdBL4ycVJhMqfiRJRtSa7n9HEBF5WuV6jmKfYEBjwdc4GYVA6fKRtzEH8iEvLLvAauN7jmqMKMACtA7v",
  "key10": "53GG3ovRCCvVy45NLgdUmbUpgwBgXhmD5UDvT7UvaicrkMLTSgp7tEfB1vWtedBXGM9ry1TGXPEHgNZvwr7SRaPW",
  "key11": "3mcKhaXKkRXVpMBCY4ZFdxp5dBz3yai6gH99dfBfFFQ8Ubs9Nb2fPXSwmurq2AjyZxiKPiLammcCxEb5N5SHy8wE",
  "key12": "2SJL6y51pCN5ehvXnrsXUooNxqzczpqkyDk7dVsi2carBBWK9u7FHC4oZTeR65Ur7W2tbwVKKCNSYpTBzBQNat1Y",
  "key13": "hVi3yCUUYwSTKobsCrsPRPoJhADsQ2oWxPmUoqwaB8Z32NftFepHSQd8CsvxtVzLRg6Z5C53A4kJWJSKQTgBYcQ",
  "key14": "5M2gAiVPoGFAQvVq2mBchesyMQh18bnwT6xEh3aoynNqm2t2Ha9CVPa71joHV44BZcSAAvkQizVCTjrh7222uF4D",
  "key15": "35wBKsiAJQKMHu3yQdePqUqsNGiJp3TFMAgbaAAhc4YXdpn7PNsC5x6P6HbSy86tg5ECp5eFwACVPVbHXPjeLzTy",
  "key16": "iiVyPgyRWWvX9FR8fS9bKKUr9aztYV4QAwSyT1jdGhsA2sHkCtYbP8nNqiEa18qRWVv5pHftYuHYvUqAauS8HLP",
  "key17": "122FKLwL8Br619kjuaQCZEST3WycPU8bbt91Kfc4vZTj6Tkv5mXGEXc5JKWZANwWzfCgyt6UHKhzsVDHPxnfx4jv",
  "key18": "24uujsBo73xwkBvF7LUVWsyuqNhWztNZEcQjD1nMmXK7Zzt8HFyuhzZfChPs6RdK3jrYKFmzxaDmX9VKrJySy21K",
  "key19": "TjJikDDwxnbHwHxU7b92yoww8tgXSTpnRmnG5sNWCmKd8Rb2zVpTenJ9pagYxtM6NPxmrzLwwvyUzwgmZPZYrou",
  "key20": "4Dr49Ng6M7KoUfQcSMt4qbWbfEbQnhtN4HkAexwgEukh1NHM64jhNYGXTBJzEdNYjPhcB3hitJSwGQhP8ifyELi",
  "key21": "55kzUF9UA3LXg1zc6GTP3VzEuYEK4uBx67zfxKmaL7RTbj7KN3HwEBfTeAJthw9mTosuYjyVZzEjX3Vrkcek2WS4",
  "key22": "5fAgG9Uv19QLU3gqJpWYhQ9UMB2febVLsr4acvpgV9ugaW6aSDrREWDJ9ba1EHNFvN6Vei17gUD3nnmG2LLboZis",
  "key23": "2vPFkPWtWdEwSjSNjcF1f69j24t1mWfyN9iDvqTbKH1oqHbseXzHCRiebWLwBbEYcMvzb4YRHa5ZsKvn6oRwfFc8",
  "key24": "Dmz8RoxWSxuBmA62U7GFmK6rUrM3wk4padr6vSUAgEZaGY95hGRAoTu8hChFDEZ7K3wbVKFKBe63uE7QH99zKHh",
  "key25": "2QtNLURa5qtUL4Yxcsfoe6YihPSguMm9NeAGnDaFxyp1Ggsq27Yy1GhhEtZq7hKe2jq8AoDQZcvKitFkVke4bhVF",
  "key26": "2WtkqVfuKMid8FF8b1rrWTYmDw1mbaLzP2w37sKtzaAAREqw67XksxyyN4icQaBmD1UhLtkKxnYKzPT3VAPbM7hK",
  "key27": "Yt3TVYAjbjfNNkKdwtL8zDr7W2C2XnqUZW7QuWiiycceq7f5tBGQSAx4pqe1RwmAnMzwUjfiUMwXwKdWYnPJP92",
  "key28": "5NoqjAyFmNqPFj3tHxmtfqHzV5qyajq1TSPMC8oBnPy2K3aZ5h26vJMQA2E2y7Y1w7o6QxQaBvtgbGtQXHiX2C9E",
  "key29": "yqu6rpWSuZUu6eN8HjJg11cYa7BavisREPeV3o5dNSbyEBqkeHQs5gqBc8YADaLxx4k7BFbdxfPfJR2o9SNNAT6",
  "key30": "5mV1RHs9B2sp8AcvSZsUgJQaui9oYwpPXrH8X5jSjAp75UgaVuwuKgHnpiCcq6QE1p3S7kMRN1fygMvSZJMjLLmZ",
  "key31": "5YuXUa4Nrj6LXsC7gFEi96K1KuHkqbkVm2Vchr9zipk7tmVD78fnMqRTnWu8RQs8P12k7QUWsa8xNo2Ctd9NvA5C"
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
