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
    "3DhsMsyXMg9i3Z77qsdxWVef54DGX1JSGUvwpPKK7TAuaHUACSkZHd1ubDw4yZH5G8UFUBba9sFyQKGQaReA5aaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HH4ts2GTBQrCJHRRUXz18V3HozKNDAwQekYWasnhKnQnBhFX8VChrAWTTtNSxUdiHUhJQ1iuyMYXi89ehw3uKTo",
  "key1": "29cbbLtxsLbJYsGpDfFqUT2ajHmsDhRCggVYh2eRbNzEn3C4VZdhZzUq9rpBS7L61de7zLc1fpu2427i3rJTcxEb",
  "key2": "4NQWsMtvRAESw2R9qp6PMPhoCmvuYny9RwhUZZbtk1i4kzQ1C1eK8jZyqBcPmFFZ4cQqSu5WRmDQt7GupgbdmoB8",
  "key3": "ZLBCZfJoVSFtXJQQq7xUngeyhH7VUTmwyo2YpEaTBf6fPj5K9tyW6AcQS3CUEQF9xcA8Re5oRPhpwsKUEmFp7ho",
  "key4": "3U1VHCaP7A4qezSV6dQVhMDzpVG1CDHiaXMM9U9Xxw8pJmWCAp7zdNLTAnt5T9Rruo5jaTHGmm6RdZUZkJ7f4i9m",
  "key5": "58Q7cVEGvctCgHAdXQdcFNsKT8qQkyPCRPogsZLMJLmqQsDUBdp3He6GB1GAXzSuwS7BQUAuDS6iqFv3bhR8bYxm",
  "key6": "4dX1RThJfgUK5rZmzYuAYj1zHpw457sozUj3RySVGFHHST1PdH55TSAbXLyxMphLE9iPAcFYc9HJyY5D2KbrHQao",
  "key7": "2f9NiYvMSm89sUVevjRWu59TQKj7NeDHrvwM9Q28F7w28nCdzv4jDMYQG8j49JP8kGqDDm3gHD4d1YQBVCym6sbw",
  "key8": "njQRe7THv5HzJUBD1J22SPD8zXVadioGo6TUANXwFgvxqaNjvMLhg8qdZjnZ1tx7gsXMQ6SGPCRbJm7S9pPZKGn",
  "key9": "5mAFqKwvzvF4rsrpf4ZbfRb5j2WP6yC5J7FCnFiLzA2XQNmywfSevobeE4TrUFVnqckbua1nKtSksU2EBRE3ijN6",
  "key10": "3XLnYBSC26mD8R56RvMz3Ex3PyebuVvMbKR6KQeHTqVeMNPpxu5pVtWh5qRvtYTFdYQrocdLRmSxfcqsUKZ3D9VJ",
  "key11": "48rT9q1U3RvsJMoGYubV4qyCHMXPc82yr7WHRpXDHLovPhSaucmjccShzBityL913Ukzq6btVEGSZ1S5h6KEfzDt",
  "key12": "3mE3kVwjLEF8eQNhCesYF2BKiKL2fNePnjBoMrC6aRN26f5VtR81fY2fkhLFhPT4hBDUQoP1oWhLRYdBZexpNxNa",
  "key13": "2ZSxcxCudKZ1YQdAPtvPL4RGoUiUc8ycu6Ew7t2TYHQmGr62tYzM2aP7KGZZkJL24fD4Ch7ikDtg1qLG17w3ePu3",
  "key14": "4km3fM2UzkA8yEV6GEXryRJPbgCpWtLL3CLYioDdRyZB8XKWcabPmaR7eACRGPXmYN4kUAQEUhWwJxsiZsi1wAub",
  "key15": "2iKwedJGUv1LUz8hj2paX9Q9ochFUK4DtdJM67wUwuFGpFmDgLv6vBBn9sJzqjVxncYPFTLgrc9rRMTrjNJgN3Sf",
  "key16": "2py4uatumT6beZ9n2aCmQKbtQcxfBsFrfhDzobsKyx21g9GwFeiUAUYY5ZcTL9vvh4P7fv24B3nu3ohQYJL61bbY",
  "key17": "5pdRfHtfQJgBhQDfNC9MFKC7KJsXGyGFZsdWNntciEKPtTXobBKzyvC8azE2imskaoa9ESCoFLaQjhDCnMyEgAWu",
  "key18": "2xwJh2U1QAGs9hoySyw2FUFuMRFKrDB62N4wF4vnubEdojGrj7bFbih6fb59kEH75aCYQhCNFrz62pBHAqGWAqMK",
  "key19": "3wwjEZM9cYKACvn9rU7286PJPpAuqxuZHeSTWvfZ5vc9Es1k6nBE9eeCFbv1SRCaesNzN5Svg5QuHiEKokEANJBR",
  "key20": "3QheDVkh8nDT4WGJ4DoKq3qvRVkt68sb3RZTdu5yQw7mmqQWY8NbxiFeoTKjH1XaSnzY2Ts5F7wNS4sGiDMQMaom",
  "key21": "61qVUALXqJivfXScU1SFK71qAHqF9VEmqJMmjw3W4nsCRbD1AibrDWXCjkk6ZRzFQLnKwe1BgjnnxUogx66NJAn1",
  "key22": "5hVCeuuXs1L7MoPTLHoYGpH851LPtVbGpfTmF5YYxS3kwJyUe8Mr8XsDDii6LDAdapXFnMxCU3beekwomiLEm7dJ",
  "key23": "3qsnkaZTb2FjeS9qrgDeBhbXXoQYSjz5BCtihwgS3pwhnQxrFRZ15HrA3RVLNf1jwxUMm41eto9vT2dfpSW8BdCd",
  "key24": "3L92ZwWimFneFtrUcZHFyiHerDqiZZX6WTz2Sp5KhxtB2vcB18jKmFnCTEHNU1NY9NHJG63DJMLUwibWtFEgXg3F",
  "key25": "2uQ5jv1MJJ4qCHK8WeXHwQ6dMY12HJb7341fNX9wSEHvhZKXCErapjgmsmAhaJpnyvk4zhHUy5rWaPPHuhYw37Ev",
  "key26": "2cKkiQMqTok8t2zGwX6nV5AZWTL6BafGvuoMKJot27SmHzLz7Ejkr7dTFcRbFxnbjU1RSUbmt4xTnPi48eqDoz5g",
  "key27": "4eaFxp2qFuLRb3a7CF9ttHsETFvZpUZpWMqNEJ2kY3dV54yu1EAuefYL22ryBgBBa6aZeoe2rXXXUNUiCNw9c6gc",
  "key28": "2XrrC7xz47EUqHc918bAJXG6fiv6Q37o8DB3qerBzyK1GTLaro65ZHcqKPQmjQCTntKFexk5Ma6vq4TFSGS8id5J",
  "key29": "4wp9AC42j5SzEV3r3HUCeLcsTWvUdF3yoKeGi6YthXWrA5srqJM1eXKF7QHpnG5TBFZAWZFBz26x9vuS75Z1vJLr",
  "key30": "38ZVrvRHWjvTxfdXnWsv16U59CeAZ9Cuxg8KrVYDYhaa6KbakDSwQHdPefSWRMiRMAcdoQcSmGRRiTdD5EDmVnoJ",
  "key31": "3m8p4yoVtVkZV1fJ9cXpiZQVz4aeTeJakpjR2dYRKKKrjmKxo8Hz3BBTgwyyWkx3ndBiPHMp56L7WjEbjgTQUs3H",
  "key32": "243bu7ZYJkqbr3jEP3qPfUjYwUHjpBvYsuEGhFN6uTJrnLXdzWAerr5grkBo921XKjUXjKAa5qzemUEVRr1hFV5v",
  "key33": "3isycKE2xGBJSwTaY8ep9o6poqdf7mxVaMJGAJUsyj7ReUB8ngrMBqy16DHEDkU4YnzhHEVa9HTNVv1e1AZufHDu",
  "key34": "3StiEC7UwpZg5EYL2CrwV9c7qfxcArX9Tq5d92BvhpGAua7g1wKjS2qh8nDD1TY2zPxH3gs46bzzsubjRfas3Lbs",
  "key35": "2ahZbzdRS58DBGZgYQbdbZmJUZEaHzLdKadhk7jgAg7ariVTxUq1oK9LXD7eZNgyhQZFWuoyoBCZjQz8bQ7HoMSE",
  "key36": "3w4CzRih1bABSnCvBBsQSmqSqaxnNmTANCsvLc6JU5SAzkF1r4djsvdfuU7n62TZ6axUANg28Yv8fWNPQXw1oWTB",
  "key37": "61rugvz6DkWpjL4z3MsHsZRV4pNyXafJdq3tQW5bRpR4ZPbonsBzDd39YgKdh7vsECJgFopskDocBP7bUzLo11SJ",
  "key38": "VeWWiVP4LVCD937oZq6a6E1Sg8mAmQ1Az1PCqgWbLRhZewyHb9qzQHDy2StYE3cT87W9gVu9HP2gAbvmgpwQgp8",
  "key39": "N37dyBbcN1wdBK1yC9nn5NDiFD17tCYs392xW7makJEnGKc3itxwehZPL8yeMJicoqhPJg2EESKTw3VJshih9Pi",
  "key40": "3fSuH82MMCY6r73AciTKN8GWRk9f18RoZRVjGcsabbzm7uRLnUgV58oUDDxHQhWtrXoaQS4p1p5JNhVfC71bbyuX",
  "key41": "5quxERmEaW9A6z5yAb2b9Y82c6SprxmJZ9gyE8mfY6n53oYYjM6AEnArw65zaBxxinFGUZGTPk8YoKVo5q8L8V8o",
  "key42": "393YGFpXahKtonPRotQAWYcBc36FTV2wvtdKuMYEakiYhQHEso9EhRFm6Zuprpyoz9m9oAPhBejZNMGd4M1ytTKw"
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
