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
    "Q6b8okJ63fmdmCiVb6PyQthhGsHNXt3y2RQ6EzJQqx6QBRnzB83MJDyakQRA5RApXfoF6Tr3rPaf7Pjps5Si4hN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q6cU1rPzG5tbes3EpcSd4Xm2RKvRJy9TuzQbfjnctEYXsh59NHMcoG3o7a1GBRicQ6cifpKwSVR3nXhyGKsxGde",
  "key1": "5PsjdKm7ESSxURsKfUJfCziv1Y2c1guqL3B254Zva6nHxbY2bcn5fw35nqNZwGqmBLTrbGJNUN4JMzU7jQUH6YZs",
  "key2": "fSyzfigkT6u389YwBZoUK3QatURHy6t9kWMJGUZ7X8joFt7fig3dx1X4PcBY6a3UGGQfTnJD3Rjg8CmvyfStoap",
  "key3": "2LdhjADdChozhUu9vguDg5Fo23hD371yBMykBzqXnewfWNuTcCLx3v1GjtgDCGD9BKbA3pDqq2HG34dgx6DdUybT",
  "key4": "2DVwTKFu1EWWvSdNtQKFBC2ixXm7sR1LhWFPa18H8vh6sKMB6Fyrs6cL8UWCAx1WSCYVJn4MM97Xwi4UTm9kJFdP",
  "key5": "53WADTD5FqVh3JFyfLrcAJAHDoZTL2qD35DMFB74fY1swMersX2MJGaDhd3gKVnjh9FrvW3rFqSuMQrMTg4WwtXc",
  "key6": "5Qz6McbCFQ9GLcF6z3o8BpBiTcm3FPop8Ebgck6nzzffeH6qnV6AoLSdZYSgUfd5SxJRgpvU4DkZL4tpatRVj3qy",
  "key7": "GhPnVYwyJot8wadZvbouS2MowwizPrAvcSr5i6AePQEdjSmArz9sHSpdmEYoTA9bzrpz5y4v8cbbQvtET8MmYJu",
  "key8": "4qARvo171qGxc4DDKazsnpypQhVu1VAxehEmxQdUmpkPwv1ppefNVVaTAvfaPV9TWLzKDhgQS4XHZpt8xYyRVepa",
  "key9": "Bin5KhjPp2J7kFZmu8s2WmMkMLwCqWCJprwkgVAEbnVDNRadfDv6tABGwjNweM4cnyDE5cd4ZTwcpNRA32R9Kki",
  "key10": "2v5CKRiAxKWcXJmW3R6FeCqZJtLpewHVU9b93wr7vqpVLWpspCtctYLQYwKfb7GFJ6HNFhoZ8atQF9WdAccJp96F",
  "key11": "4xj3oVKDqhU4c3qb4Bh5Z987YQTZHzFPPa9UpvN6HnQe8ctok7coEb7LgRuk37JZjgzx1oLXqJKT8FwRKbPcGAqw",
  "key12": "5mx5Q8F1wyhxdcoWTkWa7tCCPXNQ6pFa9R98t4uL2VEec32rqUkjqhj9CiNb8EG4rskctJfGGov34aNqrYqTVSut",
  "key13": "4nCCd8EQ4JGa56FpasTwdHw1nNgMiBiZG1GXEbi8gLyxCqMK6NqXvHRVeNAQ9fmfzFbWc5e51c3mjYQX8nNQ2nns",
  "key14": "24axJtGDdajLHJQ5PpDzYzqqmdGKDFeRhpbHoeRstpqbBEsDWwtXtMKzkVLCppjj5MNk42CaXLteL8VxnGN4iJX8",
  "key15": "3pMzSeJu9N8npH7zDJs7yxxMZm56tTzrcrnMBajqnwKUt9HtRcuxo1X5JKTs8xGjKihLsAbT3vZsFRvCepvTY2iR",
  "key16": "5cuL46jt4K3ZgGwR9LRUAJQSqabQ4NVdu67FPBb8VpWQmyDy7CYdeqXiPRau3PWJnrsCEPaN9Kz5xfdeMzcgLYcN",
  "key17": "5AbrgH7fH4rePEizXCXteYRvh67M392ubXYRrarmqYg1dbcu1WkiQrsuX4c1RMip2pfoFV2ke63U2HvfbXN5H1af",
  "key18": "33N9ri3tE6wX59cNMiUC4DmQz3AYaJ7Exi1JBvDToJBBfFApucRv6vZUXdeRV5moJyQicBvAE3fvdwXHpr1HmAiQ",
  "key19": "3VwmiWQA9rvZcWf1bpu2yLU8Jd4su7UWQp8JApKJuuKDhWjt8ajb5nRhZWU8GQfgq1oqbLuLf2te1oLiR2AwNsCv",
  "key20": "bZzPper1MCNJbLM87jyhTcqmMNTLV9fCaW4yYkwbg8DQbnhn7bz92fcExMV4qHnEakDuHuuf5WSpmvo8mWcZiih",
  "key21": "4Ahz5oqoCcCF1FxbnZQoCLhXqU6jA4kbtVZMdo7uegpwDpeLLa5pJjopn3rWZqD2kdiDmyXn8q5vidzMiUr6FGeM",
  "key22": "k4jLzQs2tj1gJqBx4MZYCWDFnRUbuukSvJ6q3kq3zMmuTYSQqC6soNaTq1zFYXGjGz7L8QrwgKaepriVUfkDYKB",
  "key23": "2Fdf6SXw9uoGTLrbc1tp7Z4KTFQTcYaPsQZ5SoSJ7pJ13WtR7Cn72b4g1RChPkPe1KQG4gY782QYMBTqNgtSgqfu",
  "key24": "3YYi66PWnJ8Vn96x2sT25pR7LYqeyygHeoCdJyFqpr8aLZXfrJT3HGeSFzorVCZJVCEAN9kNQ2fa2PwmDeMyTjub",
  "key25": "5nitF1ra6ZUfi569XWZd9wcJ4pTEqcPDZptE9zzbjkEJkHmqH4poiNUVs8sx5qFDP4VN1s8owka8yGVzu6T5arXh",
  "key26": "xMhC5KZoTYc6MS9oEGLrqbp2t8NKbJNnT1Qxvj2UYtNYwCdaDjp4B9uCKgNpLCHaMdieaV6MV4GntxDBWYNkR8B",
  "key27": "3joyukqJ8yiU2yJVzdyKyrggu8o74uZCFeF1ZN6yju6SAn2jncLEcz8ewkKW2F2akf8miB5NmHGz8i1r5UXXAPdY",
  "key28": "stFTmBgWK6TMzjMLPBJ9jzHm6hLvvWTqR9bBkrCzrXpXEGQqLFRmQk2ssQ8K9BooE1xBmgj3dErRb8zf3RsaBWm",
  "key29": "7X8FYyd9sLRCE5yW9UMiipA6oGk2en5dT76dJDmHS3k2QgDQf5VT5ZrEXKqeFJxe3tBxFX5Ak9YVQ5zXA3yd7uM",
  "key30": "4KAHngMRijeFTFZhB1zVA9Y4tJmasBoLF6nLrSVAXTtCZnrErY1CR37ZuJXkVrLs5yXWkLShkpHwSqCj4M3jqL3K",
  "key31": "aoGunAptPg1wbCaKXRh1a9zCWGkXVHYKpua375VN12yLHJMmfQSCFnKhugvGDdKjW5GAfTzH39eUfvE1K6VhHj3",
  "key32": "3HGi4DL2hWr2vSnqDcHXK91VD6HeR9hMQUjftGsFSWwGBXPepZrwvUgj2QscQTNryADeguvNEU8njdAez3YpjFQx",
  "key33": "2B9VzLHcPYCjcEYG7pXtT46FNQ1oAsWwRxedPLMviWHfnyaWumHzintcVyHbjzwqa3JDsgqv8cQc2yLqPpcCywXs",
  "key34": "52J83rigBkg2QU3E8Phk3XFve2MGC1Tv1VWEfxbJbvCgckjrPJHkkFqyNhPZ3FPLY9NkPBmJE8Ui7wH8s6RWp2X5"
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
