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
    "5MytNQ3ukBfKe1Umw8sTyvafuX4132Jqw1hc64YAvs3iuwozo3X5RZntTZk1uQr3EGC63sKiua2eqYKxTnn11Lmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cKCqdNWz3Pfqsta3PsdM4t26FcywweHtj9jN6azDe3BsA34mr1jMWrcPny9JaGXaeYZsJqXxby8SyjdYN8pxVfX",
  "key1": "5cuTgDUp8R2gHdDvDifEgk5GAkXNmc9gPA4AHGgNfdPGpNfHEhpsVWYwxvhnA8iEuiZPPAe9CRZbSUxGN1dtJbye",
  "key2": "54dsFr5WMsM2kKPnYzU5N8T22obDKkqvsPeLwxJ74xDKaJgF2wXrJvrkFAvcGvJwDKG3AgiEzhWXyr5NMznYoZek",
  "key3": "33GYcMucv31paBvvuF5WUPjbRZWTWtPhR63WfcutJi47u7dE9oMmwBLuWyT8bih26mNA5C6n6VxVP71vzo7ZLXHe",
  "key4": "57E8wpHJkBaedCg9TGanYgCPggGDsFJJADwnDqtjstrD9t1He1iDzDJjcVu7L9BBKTPhErikMpB6Ty6JjBEq4hDY",
  "key5": "5FP9HabCtNETHqBFX6J4P2TKU9FbvxpXCPZRzRRY3MXFr4t28Z58hsxbbTb3WKuRtn7qmKiTzJy6xjAKf3Gn2mrC",
  "key6": "ys3eWX78F2wMErGEfBWssGCNyNWCov7soGoNHKe2qWxKp8pexxggrQjc6VQ8YqWj7JsGbsYz1yCGHhD2xPHBEGr",
  "key7": "5LdB4QUTWMHYncq1x78ncKDvJCeJoJw7ArLm13WGMkdnGCv5o8yn9ZM41ncqBuhVrGV7Ro3ifC4W854xR4EWyoz9",
  "key8": "37asd1YPf77H1wizqanru6sQcWrcrFXskVYpSSJkMw5z2LzuUuM7S1QkGk8wuZJYWgMUYtHHA2w8c4ty5dTX6khK",
  "key9": "2GMJWVNx9H6bxveh3VQ7Fik1r2k9xkFNJ5p6JPNVxjhVUbHyAuNyAdon5w3uoMx1pCH8NyakbrobhFbUDS2LJ3vc",
  "key10": "xtcQa96Ba6zuNCMqJue9RgX39qC1G5GoFWygnAj82D3pPxU4i9sH5uT3191tzGxqz5sGVx3615pC5qSqate27DU",
  "key11": "gAbpvv31SyHTH1hKEpxnhFxicj1ZiBYMcMT1STwugKArgXhJ9TxJ9te4dqnLUpuuvc9R3Pux3QfqL8NNr7LYMND",
  "key12": "2UwDG9WKjMqa1Fsg2D5jmkxrw1ReSkGqHKuGMZa3oXF6v6gZA6bMRKmXYNAj4xxgvaKiBoothfoScBxfyaFPyB1j",
  "key13": "mvEiVKho8VfwjVQZ6dMWaUZY44hCNmEEhG7C3g8VBXqe3z6PAwaMhpg9Vb6jse9eWHLzJR7vAmQfFdmDNfcKEcB",
  "key14": "3GdXWdTVnqS2ZCscVMgmQwm3UZs8WoZHpp7RXttDLQeUZ74us5TzHxZY1EW3QUez1UoNBje5zuwdU25QSLkWYbeT",
  "key15": "3smjn2YW9XN5APVUp7XuaC24uaEpaUq17tXF2hWXVJiedSt6jqs6jQXD8zxwkbwDuq7NwStqWTWxvvvCwYn6AGbc",
  "key16": "2J1eyfTVHtbZHWQKB6xLzJC1aPeH6CFT1UMPkU8JVAZ3BfSr6poG9pMYRk4LuXH749ReizcG17EWDvfMV9kVqVGt",
  "key17": "4EufsMmXnFvzVdbFVdTJmptuXQMw4JXA5p8SqgCdQVg9RhS5YeYbJAUtbVSPDDmr9ih7t3Wqu86JhRbg32gpuaH3",
  "key18": "2UyCZhZb1vTGExteCsYYYUbg98v3gYxjbgaGbXJMN5x1yjL9uweUscr5MHGfYrLhJ4Qg4X7mqi8FEvrjPog73aoT",
  "key19": "4ZcEf7hKStJbFkkpQGfzvzPgbZ436bhNC876nyw3XgZUn1fiyLGoff5QhDSYTokfLPQg49FQnwGD29UuD3YuP1jW",
  "key20": "5z1HGTwG4JgCCirnTFqF5EqMpwd6oHz6vvqPnLXhDeeReAFEz6VZbNrrm3eyxq73Yes5mcpLJ6WKQoHhEuo7TacF",
  "key21": "53hG6ube9kYjHY4LaNJKBe5fgaF6uyguQWntBt4eMbohn6M4rZQSwKNhuZTV7p3Ye858Kqm4immKTpqLyJKFdsM2",
  "key22": "hvDFFRG49rThktGJr9h8WuHYKkGS5k7B1CBGq6H2o9GucHXUXs7oFtsCAa1J7ZkYwXjPx8KgX3T5amDaPzLecP9",
  "key23": "4fHyFpBLaz1dVtu3T8jfXH4T5Nofo2uYrAWH5Pk8i1HyK3rkAEpmbRbvHu5gJ8Dbv7REDDq2X5BkT3goKeyGfczC",
  "key24": "4vEir9joZ7GH9i17XhL3fFYxzYMaAdALFgkTdL3jN8X9FnxkqCz6sBKe4yzAdmwFGkbkiwhEPCF4tGhEpe6T3T2n",
  "key25": "5RoV1unT7zuLxYfjJ8gm1JLFwTPnihD1apFzTAbx8mfJVMMSJoZDvU96TuGy975YeroiXmX4zQEkHzbPZ7y3TgQf",
  "key26": "5Bwb5kjFjGg13tJ18wZeBV1uJ8v5N4JYsaDdJqnvuyAcQocXeSZSSTxXNmgDQ4H2if2np2fqF5y1V8Z4P7KZu9cV",
  "key27": "4xrTqqMDay2s23jbupfshuUiv5Vr2AKNj8KZg3wD1mVDLJcvGJ7Qb5NsWDkWvVV2kJUmNhUqrEnT1NhsUGAok5ZG",
  "key28": "5JV9eQg5tx2bzrLCVXmSVB3qToBJ6LDtssmhkSvNnfSyqd5QMU8KTW7RNtPRzKt5zh3J4R3S4vL5QVa3ykGyp7x2",
  "key29": "5WWDrEdUMitLVLV5b9ZPsfBMUPQsREwHUNL58xVnaXfX79zp8Ka5mEs8ZQ2y1EXTvbuX8ETicLJrAzHVTn8qJecq",
  "key30": "2xDQGeW2gdEjvH9vzR5h3eNXH1KTybwNHijF3Kq7PTxdpuYZvdBMEuR3nKpkS5rqdKUQQJjBEeWmZJPTzCForUgq",
  "key31": "5Zzii8iVixJG8H791kTxMB6cExTJ5k5ym64ynVFx9tKr1B6J9Zj22auhWynaSwNoUuvMGcpFWuAy6d3HKoFXg44M",
  "key32": "3aitF2v8psZx54jCNCTA2ar9i6FEcVt5Y9vd6s2yQhZtrAiqzQQx6TSRoCB2iQKApTVW37dy3aagNRYeRESgVWhc",
  "key33": "3pg8a21RvYso4iuuZVhcgFEGRoYJpB7DQkQUSUCDL7UvxEa2c8xHqYHrqjwW45qGcTHmkAUU3L1VyChkkWXp3Jxh",
  "key34": "7MwLhGHkbtXTYYx2MLKajiqH6W9pCNDn8nJpGC8BddmZ54kxUi4jPiov9XgJqMqfKD8T8VFV311YouBHuvKHSiV",
  "key35": "3xDSs59acLUkmmKzzeNARXZgymGYh86ktbhwaZKXw8kD3WcBHK7noqtGziaJ7Zi2XLHqKkhixFQZVPxY8GEXZ8J6",
  "key36": "5ptzQEc9MoUWP8ijMF2ny3RxWaAQteFuMvKhosQvKjwr9mnEaC8qmn2vBJpBpiEZytD47gtVuTpWdc2MeXTbVmqJ"
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
