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
    "5vB4sKfTZJQKu81xkJyZhyPErqYinGDutqav6LD9VYW9zA6PhUYbFCzQpaZLF65KsKedrxdiiad8cP6SPLD9xR7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xt64sVAchXAi3Tvy6ZUAy6ThE5DbYB9a6xMQ4YgD3iZ2B56xszLDKKe5C9TYsqK7p38ExfwFGYTbEx9ppWBzJ1G",
  "key1": "M2iwscYHEeR72ezsnBVUxt4wRLd3Ti45fHqBoDPQbANyJhdYF8zu2fZqr3bSYm63Vo8SFXSZuBU5kVXnDMo8mVK",
  "key2": "3Ca6MqhhCMU9cG1bn9xgf8c1aFmLP6ktokRBnTxmtctPvJgaCfuv3Nq5ByUVoMYZLnZPRfjJnss4DAihtnB2ovie",
  "key3": "ikZSHHAvm2YEx2SZxbjZRfSaeq4dCvus7gdRdRiATY5gM9w353bk4CXy71Pk3qF2cWATifGe2WxapCBPh8UPmMX",
  "key4": "PiYAqkHNwjKhBqc228N7Y5dn5upjjpMKFtqRRZSWUjK8CxRWs7Tb2BRnpDWBmJx5vCkJtLNkiZA1uZPQ7gLHrU9",
  "key5": "48DqVwuS4crhufy4zQX1d7xmYuFtw1KihkMJTcKvfYaU9R2wrAxRTjjHGF3AnDVjSmzkox6QWcJ4LLjRVD2684uc",
  "key6": "5mZMoECKT11EQvMAM65SdQCUtQgngUo2Shg8y2hrDqSbdWtAj8fqx5xLcVNTPWiKkU2SCCRQYfWgVmuLkS87DgzJ",
  "key7": "2SBR7tfCRn1P9fQrUAHazBj2tcwc1rWGWgoy2hmwjqFuWf9hGwKVKqc6o3mwSPvvkiCxTiZkduc1N9BGr6rWUtFk",
  "key8": "KfT9mhymhuQHnW6JDGVJk8Chqnagfu616Yx8Rhw7GShbFYSbYoRyXpETJZoh7a7ZmP21FyLT8FihCn2i9e64ttV",
  "key9": "2Prwd361aceDh9wFGCXXWejwmBaBghwR3ZG2ow8MYrpjZqwiebUDTCGvamBWhMx3fdnaVayNeUxJtD2jvXKGX6Y5",
  "key10": "23i4W9i7ku3zWkwmqTmCpdkvBqhTxNaDq9eJ35C7DcSuQED9t6TEKX9bQeyjatrV6kcT7pEwAwD38gTqN7YcNRSK",
  "key11": "2aKScvV2Rn196PUyAZiDfCsLHb1So9ngZ92jCkfTnJhZAGKpXqASEAGoBL4dNcZvLRMDbbpN9xZ6ZrzWvsCvAgX1",
  "key12": "3VbLeLcSavTDr51Jhn5dtxLKmUV8raMfq6G3QKg5b7tkt2f8ypp83JrHk3U8aJYq3GBHagjgHDqsc6E6d53yqb4M",
  "key13": "52yS9GrcDjkz4Q8M6sfPkKCG6Wa8QmP3TRdkFDLpDZEyvekX4kQZmkQqVKrT32ZoLCv32JnBUqLVw5SjeBnTbKBU",
  "key14": "MxkfcqPqBDA9YXLz7kLwkfUXp6aGvQfQySqd97aouttUnwZDzKQDbTmacCbmxxTNoiftSWWVQTNm7KssRrPdBy4",
  "key15": "2jcJd7DhyAG7woPCEqeSEzhymeUgLCCFGmJmDHYc61yeZwWiU9J3F9VxE8dSMe8CN4MK1ij1b2g25RxTV2UhBgDU",
  "key16": "5SYLvcqoiJQFjGo2LDuBxuQRuqERhwn2K7z87GJJF8gNU2h5Bj9SVfq62Frw8Wbc48qjd6uLzbeqRYatxeTBtyrB",
  "key17": "5qmwmqPCUxKjDGjoE1UtiHgCT6X71j33yJWgfqpmy9Hggo9b7bnEtUQhVhc7km4jXqMuxkYDviaQspd16WqW4d6D",
  "key18": "2CiPdGYph2JmF47mASW3tvJaZK84xqvBAuNPSQbZj8aAkZzWPcFDVwZr1ai3f3vZtNUCwxpXLoF8jhRfVTrBXzFR",
  "key19": "YeAqYFEahWr5QNjZrUMVBbMqKJFRy3vQ7HFU62HfAutXGRt2FEbxfSKqB54hq6hyxJyGiby6XeuyJHGNdyH4bEr",
  "key20": "5MorokoNDP2zZNyhNPKKzjku3D39zGQsmv9W9UMiQY4oEaqC8yBwYVVekEH3M2kGBah83j7Mns37hjT6mhGG7hNa",
  "key21": "G7wdppHAaSBcDjkRXX3og9vPQSWSJSyhPWbTZxzpbo9AdijaYxU75X9iD17WzFVqxbbqBRNEwcitPAE5oN2PTZQ",
  "key22": "44ZktUVT1HPx2NHVNeSZAqaseQDRSQi3eFmSboKNNM3Cb3CnEVzX7k4JBTwFrqdYwzCDPJE2VeEKtkjPSdLywtNt",
  "key23": "5n4mnfFA2oZcCaREFgTQcSzwQhwCPmv8cxa4EUa3z5n73G6oN5nhYLKcB7u6ShStQunrEojg9B6MehZv8hR39WJM",
  "key24": "2VyA8EYNh12YkriuFc1UzPMVCm4Z1dXf6aFPwopw8m8XcCpoWq1VvQwApBW8AjDeuAQq6Z7U7JgdKU4NZvVZaJmU",
  "key25": "2RniKQh7zrimF9pb2CV1iiJGeozQytyErFzYL2e7M9dbcYibGQTC3SVw6Mb2PsHMhdhf6zfand9ZJHH6rvyMuabk",
  "key26": "63MChyuVU8aBcth2wKi1z92x6ACoarZgqW6CcuhZYy9XwQEpsJnHdHqdT7WvuF4orxGh9niQk6aJ1bRZkYWVQBq9",
  "key27": "5td5EiWPEYK5Ayju9s4mYvzgFQEAiNApVoa7BZ9bsxJXuTs4AjwNb5vWto1dxDZj24C7qj6mKWFQiTD3hCgPqYmr",
  "key28": "gEmCoT8qKcV3F5ScmwAxFW2sA3aZ5uYgLtWkHkpdZLjXPu23ddf5bLSpD22RnscYwUaAuTDbGxF1p9AXMcp2qRn",
  "key29": "pLBQEbB17CPZST1S5hioRBRqCrwPwvmnFW1dSDVWHUU1W9hc1v5zXhZAXu9Ueipes7DkGR3dXhcCTszZpgEWo5j",
  "key30": "4qFKgrZGbjHJ8SkVbTuhuP4HFi8ysZUEAPBQEt2X6RFo8QBvFgucJ4FGH39WHeNqT4J1aTzdWov3PsMhBYk95vXK",
  "key31": "4eEeJ1r2XJFwju9EJRiJHzxo4QwyruAWBeuvbceSRrNgxYbYrNwzRdDsrjgMY5CuYpAieEifTHVc49yi8GmDbaKT",
  "key32": "4D7sA3jk1ymXVDtzwhY5QzLmkEc6WJjMJfbDjtSu9qc9hABpvBwioWeoqnYJbHzmbVZjSKQ1wdtHb4uzYWXqrxX1",
  "key33": "3DDGjYH1nUYYRU6fzAR1BXknLUmm22sggknZzonGEiuV36R45nAHyVxyEE4y6V8J66ugEk79H3oo1EToQCGCBFKS",
  "key34": "4wBs1Q2qqYc4LwdNAtjGndQysF1HszBxsQqUkMEhxr4S6WwoG3DMNxbeQLFC6aR3uAhWrV8VoYh47RSj41U1UwC1",
  "key35": "TEzRzk4FE1HZgyvsJgUp86nRogKpgo4yStqARMgiFzife2EVFULABiZRKqBEvSMZEsgjvrsySKGByvCtyHSiL9M",
  "key36": "5MzcvrTxvtoX7rYLVJMosuHZPBdYKgNfR9EucyB5JKARm3asJtkRUFG4gD2gbe14hSTfc93greZSuYxTuxNXYdPH",
  "key37": "2zmkahzUeLYTcmhU3XEGwYuFf9dWTHCdD36WTjqYmKes8AqsHkv33xZ3KLKuT5Y3J697VqPKPQwJ8gkXRC8B76hD",
  "key38": "2yt7XnBaDGHZvxciFQbd8DASvuNtoQKA7hqsyGZ5Y27ercdz4GuThFnHt54bqH2rvxwVAW1tCRPPJDys2pRDeNLn",
  "key39": "5WXPuL2M2v2N3KRy3CL6GeUvgJqqP6dJkQAe11gg9hBEMjwjCD867EMJB1obQDFbDh8whDLGcsfjQfkFSuhrc2YA",
  "key40": "3cuQjb9XPyK4qWm9ZkvLePReRLLKAbH86dtvBy9Hx6RC7zguiVqRhRtg7nyUhF6Xa9AZjt9ziFZUu5LqYcuKL5sa",
  "key41": "5VZseTL5Jim4ETynUZK2wkxzM5tJEaDGEkA8qQxqu3LFiKRo45idkAF5ZJhXabH4c9wqQ85LDtedbQudy1U7F2Pg"
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
