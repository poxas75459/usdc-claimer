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
    "63xwrzej5n94EYWryybQGDEbRciWo8W1eKj6ECzRjKmuAijtVpmU8xT55fvK3BmJaNk9HC71y8muLZGUowFu7aUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xRSJ4DXUbsx9AEpR1vWcPxz6TZq17L34uA7cE6YC2i4TuCAoui4fXW1j9fBNXWwo5Caxgy7a1UKThR2XFuhiSoe",
  "key1": "NRKVUhztKfWJoPEK9CXGeebjuj3wV4nAv5eCNthYS3Pt2NpjgAy4GLTZd5DW4vqYKBsZNviVMVAqsHfdmjLKJyr",
  "key2": "2UZcYAYg749XBid2MEtGtwCt3FdoeRBvoGBAJTQujo4aFiDN8dCxQN1AEwEeeukTywmy9VikPsg9XqNsQv3AmYEj",
  "key3": "QnGMsgNwAmWawQPjkJCxLGnawnUoVmHbpFxKD4sopGJ4zvJ5EHFP4TU16XRvkvyz1MY93YThuKCwBgf6cBCFfBh",
  "key4": "5TjtDn8yKGKQ3gnCsGfWmDAKupaa9J7emRaLYoUay6ehcHZY3EmJ1EjZspE65HTRvE7Bne3tZXvVyLPzefUXt4X",
  "key5": "4aesq4dPhCgnmhZyxgoRuTR6KvfuRwy1z9rF9kjmDpssY3jsBATESTUovB1eqhUDmEarBcSXDiV6W66xQg7NRBPS",
  "key6": "3oXhwM1MuaqZ9zDpkteh5JNmNjiXU3qCHV3McVWScQZZb4vCxDymWXZAAEde56sau88EREiXbqPTrepdmwKVLrFR",
  "key7": "59pSJQC6AzQ6CiT7LrZ5GUmTnsa24atX5ct5uMbzPscNcWPZSuCGZ4C4SAXGFuA9AiNrXjMacVcKEGGuyt7i6ERs",
  "key8": "4KTG98KxJZ7BKAZh6mxmtqHfVVWdwdvJvYUS5QXvbRd5HvJpX5YC2fsoLiJS8bMbp53exixMdQjqv3GP2dod3urk",
  "key9": "4VEi2moU3xAjg1cFb4nexXeS6uLywv9FoxKKiW99FpX7TWzch7FkmTagAJb6UjQaiugUquqjNR5Ad8F5cWxNcPbt",
  "key10": "5KbFtMfUyFgfpWmzqxHQwGj77Eq6FuZCXzrfHH84vNLUMAYWYvTnKyP5Yfmb6NiaeBUcWRqzQ1SpPxFmnM3dmrxQ",
  "key11": "5CEDmqx1UTcJXyXG5wWczPwnL2s8z8bCfEwvFyVpNNZ2mQuaK9BCPtw9bvzo1RzJX1bLRrGQ6SUeP3aFDgeLSpYz",
  "key12": "VF28Y86jK2W115Zyh4netsmjwaTFejVjsQ4xAW579wHxPUZMzdVhGPe7RmP6c8NhDKV8LqSi8rY4M7AuReYgwCj",
  "key13": "3GYLPpuegErY7H4TNrvZtbwnmjoTfEQ323Vt5471X2Xf4LT6CbRPwh4oFp8wuCAcnJY1mS3jdx2rvsswZpE3tQu5",
  "key14": "5LtoTR3o9t9ojdNweC3ktJNUMe8bB7bjkCKoAEBEszF7RXMF4nBohwgfaKbm88PKQjb8hqjMYVg1XNa4cdjRECSs",
  "key15": "5SDgcmALmpEMH6zCA8CrbkePNmwj1GqxXSod9HHkNKCbWDaLJgNv1UdEBHRNWTWT95C74W77cDmJowMudG1crGnL",
  "key16": "4jzhKNyLXGgLdpAB28eqcFxXgvkstpL6jFvqA3wXeM7VxdAQo9UroLBWS5oJNsAggRLYJizgb86ZXAFVSb8YEXDW",
  "key17": "2WxLCa9TZjp9hBDtyNkde9NNv5g8HJgqdExCD1Rd62KJbFAacmgFJHtnYCVCoUQUzcy286sAhU63CPS8Tzv11UqG",
  "key18": "bsSXGqncGXMk5wEFNgweaErWwTCaZREZP9H6WQC8EM9Kq5jqeuK6s1duecdf4ZViggG8eTQVLY5SNVMEzLJhkc5",
  "key19": "2L8FjBEreaQixdDpnjzXvYzxw8Nibfnqfa5t28xKKjgebuYzETPuUtvYA7xm6e2i22KQg9AorAFji9xY7iU2tX8v",
  "key20": "4JgxiXYrhZNed48zv7zKpmbSkbSn6zjS3B8y58xXQqnhnX2i4md8e6PKh1YQ3cBQTfSey6DFNUqhRSeLjzpXaykY",
  "key21": "42aPEJYywSjkMWeeE3ubssgztU3Sg8GxBDP3oD3it3LajErcqBdQEazaF4CPDzyUhk17K2UW2nFMyytTcGJ8fkX9",
  "key22": "NSvWsU1jzKbRWbvJwxDVdesyQ3qA96WReNwznKPH95xKfpJV1BiGYEmYf7r7wSQbYmhn62CPW3uA1NdJAiLhP4C",
  "key23": "9QRmy1N8ansG2cBaXcw9MsGkQu21mh3zFYHiJhUgYLj9qs11jxNEo1s6vV5zJs7FRCK4c7AGvPBHuVZEy8XDbWB",
  "key24": "xs5nJh2ZyWU5tpyJSzkmgKcRUaiPZFBL8nPBK6xYMfzBFoBchdiuue69zezJk128cLBtMieDoEmeF4uWzbwAMxt",
  "key25": "3Q1TaaqVYuECTHhp7NunkiiLyLUWKeDLY5Uba2ykLZ4M6PcmcdfCs7Vfm8VXpJnWPutnVY5hCFgKtukaxCMzASir",
  "key26": "4wj25NE5y3LcU2phKBbVNHeHZVJfbS7tiXKqYNM55aWK1MeQnjaSNZTz2PmZxWuMtk6oTao2zbA87xzzGTwyw9yG",
  "key27": "5W5JWPeoxJZrgTJfTfjgvNT55PGtimY1f28uD9Ayvss44cVRhmHMLoMxU1QtBKNJFbVrm33ZtoXu4HfbUQoR7sKV",
  "key28": "5a8uwkAHcnxhZueBzGtgpajTzSNJC3rLTST6pDa7jAvTco8xdWYrC1cXrK5ND3qS17tcA4oeygquppMdm1qbipuD",
  "key29": "3HvM2dtcGecqwnfL9k4CJavK1FX7aEGN7Jp1RbvaL4cULFBmBR2RbDxjkusScmiYiFuc4qAtSLWKs6N6i42ejSeY",
  "key30": "3qmHKDZcwx5H713GWQFscK2ySoygxJZ8zb4c3QvFs2cnp8mZab8UKjMENFrLWpGZGJjFeUPyNpHrqpBC7PQY8Gn4",
  "key31": "3hJ3h3qTnq2kt4vgVQ8V5n7P9vc4CtQEuPfNCWcZ48k2iKA4qfHAKXofcsL74pi6Vh42USKxLoJnPYL3NxiAD2x9",
  "key32": "3nc2nBwbdGccWFEMYZFoQGoEVA1LH1s2aH9w9HLD4zFwapNDeb4deTSrJbXyRHFfHQEv6tJMY4L5NQJh2QPJj4mW",
  "key33": "48mvvptpygvAiPtF3RXVChRgMzyRZjf4bZF7YcqWUcdKH1Ld67UH6rRgv7LkWFHpGhq5TAGZpK8V1T8GrKUYiX6b",
  "key34": "4kPXhujDWSXFonaM3oBuSjVFR3RVtw7beeAdiztUAzakaSYUmheH3awUf5aBU126JBG1dJ9V3Kw9LgWUMfHX8aQ",
  "key35": "zxtKY8kSCq5CZwgzPXkMp5EjtpW3vSG4xAF9GyFrGcBQHrVDL3xX5b8z2vDoUWFdJDkJ5U47ozX2sctSEoHLKqe",
  "key36": "4K6EuQT2vxeV7ymJ4wYgH4pDDk1rnHzsbkhSEVLwVS7JnWGsKxNNjUUnjzqzAAyDnjTrTRzsWkEtnhFGxvRsTrJJ",
  "key37": "65mh1CSm88sByAgUZYY4GW22HPQjU8HNxfPBzVkQtRxKmyyJvBZPW6vfC5uydxiYkzAJuEHqfmKcbExpK7LJARhE"
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
