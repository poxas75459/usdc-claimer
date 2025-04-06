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
    "vGA26BG5YQiQZzhzPzWKyJPPwvkoFxRy9UbySVvCv1GKoRQc9KXXLEMguFLRxKXJq7YcSC6L5ER2sdWLJuCQr2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26NseDfsQEsBZGAF6NUa8hWEHWWeFVoyFvMxrAN7We2gF9XTGj1iobsgePee4auagF4VBiEcdbjwsd9gM7yZv6Jf",
  "key1": "3drzEd4iMUeLkwUpv12brak391B2P4zjtXrvDFX5F9E8JQTNWn6YtXsHFzEvapF7XnsFrQ6bMiT5f26JLFw1g2WT",
  "key2": "2AU9fyfPwqsSsryTXp2mpknki7JVvLSiPYEQRb6PHUSdpYa9goax4nNKUMBXhYnHgajZacbiRpjWZwadv6nHPD22",
  "key3": "24yZLovYrLVdBaKvUcXFHGyghTrdLtaJoD1qrKa4cn4S5G9hUJ3UZQgcjvYByUT622uBLE4zUFwNkthUWy5gsFFK",
  "key4": "2HMVVJzVaXyWB8CGhXduvzyWA2f4VDLRBT6HYmw1qRCP1ZP4bJcN42STneo4g6cUXgJ4YaDBUS6cLb2guvN4zBRj",
  "key5": "2XXztKtz6tP93f86GvCVtAeQ4RJwGYaEJxmUu4kW3JiNe8SK3mttP9H2a318D4gAC11tGRhH49strDckyA3d14Fa",
  "key6": "3UQT5vjTSdadSi2gW5ePPFyFPKnFnVuR7Yw1EdAuU8YUk95pbrA1X6qz8XKjBhZk7LegNFVCzaBPepZhY46XNum8",
  "key7": "5SPRikYd6TdUD9XLqPRvnPMwmH9uTVE7RsD3B87bX4ygikaA1rytZY32mzvs6u3ziihyiFpHxFQa9PgLZWkDxnYv",
  "key8": "5kq3Hz1xzYBaqNeTp7UHWFmiNtys5ArrX5Tfi8ZPdiKu5sMThPN2NHPKtm669Jr1SR9bTUhc1mjRi9FHWPds93uD",
  "key9": "4FQPoKUv6BJePfCW4taiLttQJ8Ns6LhXEKg555VZBD6v878r7KLXsvPsaVRwZ1oCwKVD4CEZTLVbv3zstsgwUD2n",
  "key10": "4FrcLAwrVdcY9SiNpThq4LXxn77BcjUvdyawvKMjGKHWW8tDDULQmFHgZFkr9UskxVFkJcMh7z2a2z2ofpYVLfDY",
  "key11": "5CF5s1fXoV3fFS9EQwRBtoWzqgN9HxXmKfU2jiuLMzZ3kPk7NXxpToGx6CnACC25JmRZeDxacYD7mwyRwWMxaUgR",
  "key12": "2eTG5HRKh8C2e9KosZyDq3fo9tw5gYDYrh1NiYKWj2h38gBF1GiLcyKSvWsPUhemy3zrcE82pRgPK3jwst6somo2",
  "key13": "2PED1WcqpQGfPvdJtwH1syEtFqqfXdLnsMXosLsNgi3jwT6mNdj7to9Q7rMs4H9RzUsMLVyejNPwP67AKH9xnuyx",
  "key14": "3hTPCU1njpFs7LPXX9J9pn8pR5wsv7w92zB9a7rmLTzmvFLdd6NBoZhSVT3JmTJFSAXTdKey8PqQmB4y8RBNN7JP",
  "key15": "36oGSzd3nxszD5Q1jCTz32MPEToRZUPLUWZJyvpuNMsn1rggrussH6q2KHKoG9aiZvyvfqiXpaYsMXoCpyCnn8RK",
  "key16": "2K1zirCjPhkUkAunrZY1mEDr4DbGJbon44LEVTUZhLuVHWUU2RoJyWdqGwHNQaL6WgqskCVnzcCL6FJLFAJiDNGP",
  "key17": "wKDQmVDtNiGnBp7DXSyvwPUzU92kvBtyNXKQzUyPTFFsSms3LB56FmEgoSxxyzd9gwTbKDr1J9QX5hvuTiY4iyi",
  "key18": "2jm7EkYdh2BV6Fhb3vDUKie5MVwAg3NJ2RSeLbGifstUp3GmYxuEEKZRkU32CYHkq9wug5UySrgsa1mT2tEkTo5t",
  "key19": "5YKLZx8nTh5sqEHuhdGUqAuXDZsK9UWtmNVVNWz2gZceXzmdvq4jE5FykRYk2abTh5NpxQUdiwfspQJXJYoHQua",
  "key20": "5zRkA3L2okMyHHyUKWR91L7Tmu75Q5vUgNW17EsVzRH394adLBPeqJ9ciR6JcBUpNemzhbtowsRULbxcqvaZHCpu",
  "key21": "K64nYYJ2YYDiyQGdUAkTwSQa7oivarTNBUsG4sPJMH82BAyzHizqPTKtjT3dsvNkPEb8cZVPnkDykd87oMyzHfQ",
  "key22": "27ccLcUMhDEaiXwoiLMth4oJ4iUydVaA4M39UX3ojgPrvybXfPtUP9JSeVeu1XNXfeinfYdqyhrkgHx9gGFKyxnp",
  "key23": "2xQXpUwZRpbgGEEeCU5ZRtQKSrNBmq6Mxuh3wKjwFsx85WDKHZUYXYzJGjQbAmihUbasP4ZydPjD9iYNiWQfMVQ1",
  "key24": "4GTmBS8fpHAvgiYwmZQk6i6kvTtB2R3M5ZG9dRHsAh8HmZVcDBLW8yCn733evYvstnaVvPTt7VvRNykH6yxYaCze",
  "key25": "4wUEDUL2i4FqQgHdbFKQoDbAn2X4mugvxhsWcPhkgh8RKJ3tqqkQfp7MN5tqP8sF8GYgFKhhBmz8B9JwzMxjywNp",
  "key26": "4kP8QtA7M6R4pWWSstavcmNjSDH3QHXhyuH1WwjE3qEPx9ASi3sv6fLceiKX5Kdpm5fMdZDQZmX2kv8syEBaR4mR",
  "key27": "2R1n2GKctD21P2G7uViRZxpwzc6bZD7f75meDTgEh7NK6JerYQekXBEjmRdfCY3wneJYXrzkWimwsaboBMh6ttww",
  "key28": "2dnvgLojbvFiWEpdShLfdcv3mZBqc1DGdVPJ25DrgRnUF52V7R7NfdY6dmNkLT4eeV6hmB2XFHPNBVXut5ADKe1B",
  "key29": "2wz4SSkqZCgv7SDW2thpWJGpShhBgdgQk9WoEKZHEM9Fpi6SptKAHD8euE1q7yQWy6orjNmtjaCJNUUqJd6pvTyq",
  "key30": "2U5qJ2iiv4XUrBXf8uYPLqq77FhsZ31pPuWgQfRhzYVaqC7nghGWdnx217D1npKhaPhuNBDLECDLVxW8S341SPei",
  "key31": "3ox2tyyaFpGnMz9YJpJ32keD6RRvyFGMHBjQAos869YHDMtu7piiNjH2VBsZDt7WWZdACKKq3g8vWtKcQZSJncqS",
  "key32": "29YdSW7FNvadh7Y9YsZQMNYTdxke71pQfDFEnsDKYpmLrXCsgKGVumCJZrrMapM5Qoz3YA6B6vh8Db1efjWyu5cT",
  "key33": "35jzxoUjgBPNYZmYKG8Z3KEjfxmgh7pRwiYD7qzoTQUFP3KkX8mcCT1XypyK1RhGgwvSn2c6GKJGcz5uoTNEcnrG",
  "key34": "3uXEcqqHgPY9syZ7mz574EJawekJP3MNQKz7cCjLywyhcQHnZjbLfwojLihdGaTZ8noVd8mz2Dzv1CFekd1EMfcG",
  "key35": "3T5yJrt45PS1yfpcMN94KAqWnrtSiQHTe4UfY6StxzPH4boQPaeMFBDfDQhjqW2dAm21GaehsXYMrmj5FdoiRrc4"
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
