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
    "54FZGmmVEitUXrJZeczti7K3VFhcR6Ag22R399ULyLGvoaLc7MCBCEnH4CrJE8m26Q7dYwzMsjckSj9Sjnm7GD27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ua3Kct8hEziP4ynTMmfUNS1VeM1i3N1XdRe3AA7xh3MLtBxc5w6hq7AhTKCQyUHKZ9x1KMMNZL66zty7rSJZZgD",
  "key1": "58zVAshMVUhaxmwNjB9Hv6j94qAMb5ddxA492spazfHjcKsfGt8peCRYsAkionrc35uGhMbrF3CQK3inSBaRkM7J",
  "key2": "4bmaUkHJjtXjHs7Jo4bkv4qk2xEeKv8nAsPyoekEPo8Kof7eH145UqHddACxmGrFWW5FMWrDtvsSbfXVZAqu57e",
  "key3": "4WEYQYAUUdW65rMd2rJGaNRse1dSHkbE4L7FmkHZN33yEVFdLaDy8ZuuGv6NAXbe6sfFEHftHFU7de3LPWDhFhGX",
  "key4": "4vYe2aWaP9MKU8JsNyoLd1EuWrCkuEHXSEdU96MVAqstGSHdoV8JAAyKUDrTvpA4jxMegn35BNvMCyC2FzhcKeiM",
  "key5": "52NJoDgEU9UYedwgrDNJpucPKwuCR2atCp8DxnnfRwVzpNDpqHeNfRq8apkHL2Um8RYwunDhnw2LqGnozVwe27xk",
  "key6": "5wQU8oVoghGHDcrLDRMiANm8d8TybdHg9cuLyTC4bqrrnz42sNDwRkseAipjjDFewTgfs8ZrEW5CpbmqnPYsYYCy",
  "key7": "3uUjdTCSQxR6dqEV17rrEuMrb1DSRbKfMr48c62Uc9BcRUjNdMcDD8r272rjvNWNFm1CH7uaWoeCYQdKNEsBapPK",
  "key8": "yEyZ9oEHLjWQWE7NMd8otQGoKGxaTcGTtp2P4VkX8cZautuNGfZdFBtBfA6kyGFiSaRZXuguSVMP4K33To3UVaE",
  "key9": "4BiyzXe8XTYh5qjSp6jtYmR3kWALoaTqwvpuT9gobAFLsNbAcA4sLmMSt98i46QWHHtZbZQXxZTZPWuJ2ET7Df1n",
  "key10": "5h78HJ5ng2v8jVxqptyDHs7Z51DkzwRfnVBYfPtbLX8mJrEXKg4qz2TPtwxSzDBjJ5qiY2SwHbfXRxfLZwpHAmzF",
  "key11": "4x8G4HGcR5cxQgnf7nc4LETWQ6ELcsXAC2B4wUifgy6qPB6KBeci4MURBmfvPn6WsSE83hheKNiLcFVHzrTq3iUu",
  "key12": "YwqshyamnD6jTf8n8aUTxUFtdJnmLy7irmMV79smjW5NSEhndCSRKXEsxfKsDAuMAn6NzSwnd1K2ZRz4qEtbZ3h",
  "key13": "5tk87BW1K4MMjRUyrNxStuFvp3QeaUjGyi89XUFVMKABNwZeTCgia4ghSrA6hAr1ZVZ3Mk5tPDuC3h5T8qeUQj6t",
  "key14": "5VyVUvpxoK2ohMdGu59wizvwLL2KsHMBEKtqsKPnXmXjTNxNgFqHW4vJ22kauBYk9RBg6Qv5mHrAwNykuFJtGJk1",
  "key15": "4YgCCrVpG5zAVR6pepUVpT2kqYB1GGNVxvoJjTwBUf3y9XB3zS29X8LnUUuPtjG7gywyh9m9zf7Gar1GE67xzvXN",
  "key16": "gBeo3QL6WGciPMCk5vPfPUJwfKQRrNtWhYJPzi18QqN7XPiXqoGja1Qba6xZAdSjYWDiDSXEjAFHGwgeaosxjVp",
  "key17": "2GkKFuoovUfeXViJzQHMaWZL7cUjs3uHsXobRkX5Bgz3d9HPQugfKSxpSPRepRsgibscjWrZQmgmHHSGfKvsDqoB",
  "key18": "yutjbSsaQuNGKkHQ6tX1HrtTaG19dvv393pw6VS9odMLQpYV7kSER18ZDMFMCFkARWrQU4oQwtZD9ABVnQ8ibjH",
  "key19": "4Ei4q86uhUSRucoM7juQp9c2RUygunnmLooy2QxH9QQiFkWRfxtG7NByxmZ1hgwP24pH3vqnxPQyY8k6uig96Nm",
  "key20": "i9n3jHfrbeJGUBhEnHdhqCqJQTnz98BF3tWaF1qPBAMJzn36ENaTbtAig36eS9HBX5YV1B3nXoXjviij5Fp4Xcm",
  "key21": "44h7KZ32N3n8PyeEg6DwVhgU9F5YNtLth1sLmudXvbyitNdqJckYoJvRxmeWp59X7b3AW82i7cUD3GgpczSkQcnB",
  "key22": "2U8HzcY7amRMr3gEYRfVy27uCKEzZbQsMJTYCzVVG3X5ghqs9kMdLZBw1sPzVNma5BKWftpx7oom1YMmTvbradan",
  "key23": "3n2VTW5tGtyreKhwKeVE7y8bo1rXRz8ku7C1kfxM2WPEyeo3yVratH6axuSXS1zmwNHwgGeaekNfKZCr5igeMaFZ",
  "key24": "5LBf1SsqzCp3xRsexm59Eu1kuWMLHT9PJbFthk2VbT3UKYz5vYDLRizRozavoEcsWVefybJXQVfwQ64TRv7b5E57",
  "key25": "4hCdfWpNWqm2roRp7NqUaGDzZAjYKV8ybK1i7XG2z77Dj1ZJhQH2js2dXSdh8VeK1UoZPsWSyfD6r2GBtV8V1A6q",
  "key26": "2hFYXKwHAu37sUyZHKtt4Qfe5w9mNFpFH8pnkAuHsdEQtfQapcLYnp7FiBwg25c2VMeijSqeEx2ToyZEWJPieTcf",
  "key27": "3dDKztane5aPjRJfeW6dWEszYctEUJQ7Sf7qAxmXuZN2vPuxeGL6f5JwfJ8mRdZxWYzyF5bbC2nSZ1KRdgsdq2Qz",
  "key28": "2dAtjsdcdQH4cAmbfmGB2Xdzy6YPpWAnQKjCzKGCZ3csJT8QLHo6dri4zXVPuvCqhR4ivb9fMrNxZr7zhD3Suf64",
  "key29": "5ia9CTsMxmT5KMxivuAgjgm15sweazKJPsokEXtTWSS4DaGfZ1KPwu1CLoaneMpHtYW8QUsHcXJjHk3h7vUCPwkb",
  "key30": "5JVk5uaVYvSsWVGDvsBD2YmFiyLaoyU6JowGAiyEnQiFbMky2gF1MSzTrnGqHHbZcU1vrJmwB1Z9YZPmxWTAWyg2",
  "key31": "oTu3uuJZn3diSpydiiL63335s2hFSVUgrWx8565vMQVMqdUxMP6H4GdiViq6P8xufS6pLMWEZ356dvy8LNZSenB",
  "key32": "356frsp9rhftrGBRzNMeTKYE2fwL5pzXg3GFXGJEo1uAacA8heQJUdgb7rM2VyLAPBqBG89ioYDnuf6YgV9mx6iA",
  "key33": "53Ts2WkesZym5u5AhMSE6ZQrr8dAWzxx8EVMpSeqibbtK4djvVWUzQHDvQcjpEJZVkNTvBdvWYq9vYvVV8Ygv21a",
  "key34": "3uAp1uycJASEL8tmBtviA463kWHL8LUAt2goxiUpaeMHYzaces1jv5bVTgENzioerPCX2jeAydHg3U7DqPuxnzDB"
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
