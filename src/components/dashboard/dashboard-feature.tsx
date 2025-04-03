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
    "DXeby6iRRyZkm5BcEr14f1rEnVqPDHZsTsj7N66yLvpeJ371fY24HCKRfENjmcr8Xd9cjU7ZDaZPztfoRSvEMQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s7EXUskyTcQiawepTUhq1YdzeBn3d1PsZnsDzm4RvkTHp35zvGPHHaPZpBvjHjuwaEuhsLPWxZ7DxoZLkxxvZkK",
  "key1": "UZYwAVmTex3VLE3ybx4oUcScCvyYerp5rXqmkwh289vmevoqyUdTPY5HRSqiPeG7RFKpTWY5rB4SGTAfUM6a4SX",
  "key2": "2coXkm9z7bV6MVwkNGYuwsp972MYXAuWuHJrwVg9qsZAZjw7vWB3zT7xRpZpC4mAaCgFUZ7n8twge2JSSd3fHTuR",
  "key3": "2nUu7N6MFcNWb6esxXvES5S2GSngDYkrAQfnKPxVwojVEirkBXPKAhANES6CeTssbxFeq3KRVhepTWBhSwb2Aefi",
  "key4": "4v4UMPFxGPoT7rjzr6aVkT47LpTHdvN2QjaMyA3PYzzJsvbYpe7AmaN2SD7LX6FVhjrCYCKc2X1toyeYihgF4iyU",
  "key5": "j22X82xyPpWxLfiuvAtgNRnCy1vhrNf9ULieJywGw88XY3udQekjzpEs45gEArrJquaJvNvmNZDsqXP2AjAp5At",
  "key6": "RUpQVdbTBJJUeLLvnctHbhZWz3ugjKpZu3ffyeDBDLbpfxy3KQM5jjKNXGfTK4QgN3vTPfLFv4kgfC1DU2ZaLUT",
  "key7": "27bizJmXNWJeLPKNhYnYni2jETENog4ESH16TXPXCLifeXS6yNRS6rh3wcDzqRpyy1KnG7Gbkm6v78aJd1CMuVBK",
  "key8": "5uxS3AEfsqPMu9sFDycHJGe2ZFSgQbaxGFSZv5oWEowAGy6FhGF54EZh5a9BR5U1uxhWGgigoneteTp8ULks5CBJ",
  "key9": "47hVnasWiSSezUedDJhKJsQY3GE6vsgcNp86EoNzs6sATF4sSiMtK9nrZ2Wik8NffuZkYRbdLrSb2MiBHKoKg7zK",
  "key10": "3rs7aoxvG5R6ZtT5swZU3C3cTcZoZ88pJSsC4P5kP1FPWZWBYiXq8tPZQCEWUMefAqUhvHmTMEuTZo92RvV6oM4",
  "key11": "3QK4XmnTnpUj6rrDSEKtJiaD9a8zw7ahf43VM69sm2CS4vw1iZ9z9RYfZD3EVfSzyXum7VJSVJyfSo9XeSRX1kEv",
  "key12": "4dsReERuK4FZtSABJn5juNHAv6bm66858va4whLAzDCGhTU3btbLX4a7TjfsyXGmbAfVGKXFAcNEDoZ79CwRsrdG",
  "key13": "5Edij1WGEWsKLP2MyP7M1zB6jo7KSRTi7dFfu5JkAKdDBoS4YZYMHrXgydFfyLQBp2NKaywsRdJHoDs4Jyv4Kfc2",
  "key14": "5MdwqbRAmjaf99FR7vjn9CGMoypmJc52QCDsAKnLBBBZqeXY46ZQ2pvCMefThedoAUqYqWTdK7LFwjnjhq14Y42m",
  "key15": "3MrAYbpLwf9K5GBNhLkvL11Vax46Pt41KYjq4RMzSuCKjAj8952f2cz8q2KbGdABgDs4Y72Bi1VEkzhUQSwZUPjB",
  "key16": "5XZTXNi4CNfCLMBPq7VWAAiB6EwXaXazdS1jJ2XjZYchvNew6PuJZGKRruqSzCZvBcwQQLQgCvJ6QGVy4BkXwicW",
  "key17": "23XkutUQLesis6a4drUobqkjArc3UiViJiK6zPpRJQJfNHA27KteC3hgmVfvZ3RtSMvQveMBmDAGdjmbY3YXy1K7",
  "key18": "7NWRcVUQVYLArK9QhMpC6TsRztjqzjL4jzNkwsLBXAS7nMu5TQQxvp42u1wBSPTrpY6HbXiKGwXqyL4uNyQ8Hs5",
  "key19": "56k6MGh7oRrtWejbYUfiRJR8Ga1VhMjVC71V9m1DTpogFNZBWgn1SbXTHjNF1e4CisHie5x3NPUQe5EPeeZ4MCRm",
  "key20": "34BDdD4oQghDUSps6MtwGRxzM3K3v25S8rtKeKcSjUpZjFz55WdAt3hRgn9SwHcwAckSKrxrDqZffGyKFxnunALe",
  "key21": "5eqVuyfTvpveqDmQGef3BUZF7iPsD4qa2hcUTEPs3URN5diH2z3yEUvZQc29wNvKw631Sv47xeysZ6rE8yGLnL76",
  "key22": "5rcbGmTXjZ288UARZSyMAA6hGrYzvw8SNVjoZDoirPAAYVcV6X89PpigwwbmATZ9d18s6XVhmNCk1VACdcRBxyM9",
  "key23": "3w8ofznwH4SsT6gqGkKEYntjtfJqAe55mhCgjZdJUY7rt1M8bKTLmLEbLH4CebNdFKBRwJ3MyhQgY2exArwYzsLZ",
  "key24": "4EA82jpWMQn9ZLAF9h4EBdqLfft7S46VBs6VSTJFEjHWSTv8bemhkvqHtMruFiRYVvVw2ZVkoTDHvBnAaGvgyLQL",
  "key25": "4YzfpdoJH7CPpdBdrdhuZmWAHaDjzpXT7SbN8B1V8zmHMophosEQfuonuSs9qG5jRzhyVfTEHa66nypd2JP21FZZ",
  "key26": "4qgehuYHKpvPDLJxryaBAC1aUUkKjfwJTUiUfJMKX6tLDjWuviBqE7iEBne4E8s6TvwMMuMzHU1rqrRSpECSNgSy",
  "key27": "4BXYAwQ7AjBH9Z2i1TkMoYwkzVzkCr4qkqtTkAnAkTWtqkWpGVgbQV1hDN43ydjNe1Nhrz4sDEaVLJkHDrHtnNYn"
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
