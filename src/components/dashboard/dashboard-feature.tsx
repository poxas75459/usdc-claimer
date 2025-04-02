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
    "5dvhN6BnLgfdzB9WfB2RhXuoSJ78C73jxgr7tuXjj7CKJWseAz2sD9SZ73ivikjbK6W8gdqpUU4zuv5bVNZwqwui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47bRDaxYsAHYQpi8wnc697j5LgcBh8AYBF8khFyNPntPx8ysAVatJRpwsDsLNajDCdKu39Pf3QCGHyN8TrqqcthJ",
  "key1": "3AZ2j9hDFt1hvWn51cRFZWBTNEperYrTE86ZivZcV61p9gZr5CCmbSHarmDG42uz3BLuyL9iHyF79BgMgJMmsktF",
  "key2": "5mS8g8Eg9w5xheA9yv4AuSAMT5md3DpVYojAT6Bn9erDJukfetJtuP2WwwhxoDUX4gX3QU8SUvyGwxfV4SNn36ut",
  "key3": "3QDyqCrJBbhxGtRVHwxzgMM8wTdRstvdLPKDFxaoApnaypnSccQUUZmHMRsCGPRU4bjV46MThbrCx5zBU4V2fdL8",
  "key4": "CaVRnM14SXpS8YykodJf459NNcRCC92bGLn1cHSnSXcMph3A1rDNNAo9t95R5xTDxhJy4raA9wNNsjxUN9uydQW",
  "key5": "FM2EVBhzRvLJWMtMaCz8Qjrugb5VVoCHpyu5fRrYRtSNeEb5vTGihLsh8C2yH9yhmyjsBPriPi7R6r2TcSAuDRd",
  "key6": "5pD9EDLGT4G4VaqEmAU9tUvqvQ9Rtz96SiupQHUfaaKPhDuUTtmVCFnmNG7jEdPqL4p9DAgHmrh8zEYyeF3YWdP",
  "key7": "4vNUmn9zuyJLvVtyUSCdHCkZWNhxDesc7WGtXmFzPbQWDZj7YismGAJRsHnei4QuVRW7oMBtC87jxzLCz7XzabYZ",
  "key8": "2pCs2HcgPdq4Y7Xte37FjjkLjpP5htGEPacM7saUnB8njfFyUmL1VsUgMvJWsSRFGTAfWsYXedkmYPqsyVgr2nBA",
  "key9": "2eRVUbgY7P3v9qppnwgzc1mzrZRMKxF2MSqhrCYqbE8Hnv4uJXa6CRgLn31KhPgGsucb8TqumVJ9vSk8BxAj9Gxs",
  "key10": "66co77gn7kbYDTM417LygRNUGPawQ5mw8vcme7kKwdu1moXwDmrhdeKHfFr4cH9CoiyE7ovdzkxg8JP2YJVEG7Kc",
  "key11": "3EtNCkAqhYjMwxyHVmcEbH1bSFbrwvJg9E9Bq6Tvag4BtxpVWhdabgjeypn815zEmU5RLuGMynrHzUVGqoXYhv6d",
  "key12": "447PFTE5QaLyPwFYivpGwmJWyTPWuvMaMDQNkGzqpC6YXawEGFbwtwEt4pu8p288acdAYjgdFWdbKYDxiMPoushu",
  "key13": "3P187t5wTaY7FjxwB7iPc2iK6HQt27QEFG5E3fgUriBp4F9FhQbyKaNKiWKmaQkbpV6ngsQhvJ7ntYDihJr21qoF",
  "key14": "5nFdYh4dxEv2kmxewsobSi3pqp7WieMLsXqn9i6mXJMjpwM9NJwakS9C7fW9okFW4aXeB3t4otjpwadxFBQnrQuJ",
  "key15": "4sixKpSAF5yCwzUhtgEoPjJfWd9whZDpmZoEG7gYmfMjBNTn4U9K2SNjcLqAYnybYkFAd87jxUAuexbttuSDUs27",
  "key16": "4crEcmz1NTreJjXGGN5zd794qPjmyF4qeSt35kRKGot53kjBTYxNTnMqrW8QmsCdYyFQVtetEtEermnUfdDEDBke",
  "key17": "4rQQn2DaJeDrGRxBBbVQqpXuYWqSPihmvSyQjMXruDABZrztGeAsgeASF7XWH73neJNTWabG9D5xvCUUkBuonJEA",
  "key18": "44241ub63Y3TD45H9LG2MokThdV4FcUCNQd9LGdwVF3MNqLMGuUgVWTsTdSozNbJCnwUy4YZrvQkhxsmdrbuBMWm",
  "key19": "5gYjFALsDiBbmucbkuoXLNJoeR9zMMwQTfg9dEQu6hutCCRNimG8PM63E7bTgPXgciipbqFV7kMP7iyGXc18zj82",
  "key20": "33TkyFJHjMycmCGhuLE7Yg1SJJthzNiV7yBL9Aue4Lye5HP14YRozZEswRkwe2y2VKH5v9LYptSjA2CTnceNMKK6",
  "key21": "4SQaBMBJVtau2yPQ3BMEmpTXJDnRpyCymYJVJXUUjYr2GMLAtzR1wXpx4Vn2S6Q5xk6J7DJHtDU9rrCGVp5AvCdD",
  "key22": "3Cv9oZWgq1MPuBpvdDeoCwNQuWhQojwC9YrFNbbvyXRfRcc1zGWBNTPatMpr58UgoEdCzEStHSp6qtNXgD25fzVw",
  "key23": "3MzUmzvvWyQhsvU1h6fQPSbrcHHmjJiLvKjooPyaAxzvhQ2PWVmLpBZDEe727efYN2uhgUfZgmn5HYmGcksweSjD",
  "key24": "4k5D49eqmBFAZtiy6Uz5bQWj6zyWQkFurT3MAyNMHpdkDJKmP8gxKveApXitaSZivex87joQXC8stMNN4y52gmMD",
  "key25": "5csR8fHh6SHkLjcMoiXw5jNdNvAk79DLJsABR7NjoF256Qxs6RY16MF3A64y3FNLX3psRZrBc4tqbhxr6B3NejTJ",
  "key26": "53ynP5QV7RexDSWjzuuZ7n2mPkYTVWXsDBhKX5jvzNpN1MAK8Jxw5LidnfDwiCsGeTWXsDZPd9uxUbfd7dt3gCxS",
  "key27": "4FcfSJ9MEy3N4RfcF57gAfvMTogjYTt7SE5CpjccgXqLnNBgZYzsfJZ9xfNNk6Yud8Bc7wXxqGPBgN7stGyTAb23",
  "key28": "24oLHBAVefrUGSLHs73qmXQszzU3369aEV2C4jAs9ur8nFrbiY63kxFoK3jquvj1AJPC7jCUy5cLpZeu1oY8v7Xa",
  "key29": "5wrYER9SEHBrtUYsJsm2d5kUDnDff4XnYtFpUtG2QrpSj3qEJ1NHzhTR23tDALizKgoEhMvB9iJsWazaLi26RQ9c",
  "key30": "ycLhMc9q4v9k52WzjrgEuRQpjhwD2xj7oCtG3n1nHUjpSoSbTRQ9KM4SoiigRWJjwoT2w5kd8qtJKhQfVbxVaXX",
  "key31": "3aRUAbVn6awRQPvTzxXc7hrZU7gUp8NL9SqAEw6kqH2LipTD7ifcXwaeKb2cP6amvJpYobvSKizkUvtzGhrzUXcM",
  "key32": "2QpQwGL5A7SL4c22AkmgUgJTXKFvryZZhQbra2CVhc2LKCQgJSK85nyphgK44ZMRgBqKh55KagPg14EJ6c3n2Daz",
  "key33": "5RrZoGd8sWGw9FhdwBCtoicz6XvKB7XigmUwdGcozPcUER4LijF1SkVrN2ZzGsL7owDDPXuRtfpxydDDrhvWa6hj",
  "key34": "4QD2djEGWNnR4E2xD38ANGLMGpQWTFHrBw8BJjyot944R4zGUSn1LDH1tJt6qdCV266VEf57VmBLRvfD79MAT5XT",
  "key35": "4akKmV8RAw4pmVZmTFfwRyD1QZe1FhaKnHU4rW4VtcKbd8c41K674yrbQA5MaBHzG2iyH1coM7LUcxASQTUMvdUx",
  "key36": "2n98zHYKjv8BMh8FqfyNusqmw2aFKZxSAB7ebtj3mpV8ZRUAKnyWcko96GXJgUFzVAQ5tLvUvb61d2hDwvLyqUH9",
  "key37": "5CypJytgFwhuqtNPzi3nLADHkPtJjxzHW13LWf43tgT1184hn8nVT3sM9mr5NSSu91SUUuooCWK2hMrLpvTz1aaX",
  "key38": "4EGE5BkMphvmLc2QxjUVoyCNsSZRwdbUG9tSSwG9wcU5SHVHWC8nj3LM1Uobhrn96sDwcr3DrAh1TWo3iebCWb4v",
  "key39": "3w5QhEDLwH2eN3Ga5oL6mpWmxCU2UX3R8s1na8LcxE8KkygAjEwQaRgwpebxt9che5VKKx4Uzyh9dtNhduyNxnzA",
  "key40": "4xpMMFnJnSDNsZKwZfTSYAQNMRjA7HYnHteBQNaWXiwUGcYXZZ8Gty83ezpGJUcNb7pvH95wkUdY3hMh9yXePFnh",
  "key41": "wpxzAZaShRuBxE8GmSeSKKo6jL4hAiS4UKrmzhWhQscftKxzV3c6hqnEdc7ezCG8gvuBPYmTgS9G6vntRBTJaH2"
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
