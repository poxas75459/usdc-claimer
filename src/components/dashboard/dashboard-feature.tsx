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
    "RexCXxC3eaPVm292DpBsrWxV8tpJxoqokdCdYhdv61qCksoEK3swDxtUBRUMUDx4UMd5ggKLDR1UhdsMsSrkQq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q6QKeeVhX1CnsQ75eP1zRM88pGZsWWL93wpuU8nonw6jE3HrRHjq9Lu7a9ccyHVe3pZahpwSJzEPc9rJRXRNMfK",
  "key1": "5gThAaxPetWZaBJ144rY1Zy69H5TT5to7jr2NtP8CYq2jU2LcueLjcj22ewoxVPnd5ZBEHXMRe9yHeXJgzor99Yh",
  "key2": "29VfxcAwAG1mGZjddUz7JDEBY2faGYZyKB2hKwynbiEmExFxrwFdajPsw7Gn7ohSNVSjMPV3AALjA1j8x9aN7dmc",
  "key3": "xePD4GbXDHBDufUHvqyEhx3Df3bqLKhGtKGsVgBeEKcLmoeTyn6nWmUUQDuG8zffcXJWcMHonNzGfdwDL9SU8JC",
  "key4": "2CfN4Lrk5KDFDeqwkzAqk8e7perxY76ntXrZxDJBMDLJEAeL55gHGuYzLxG5updmwAhFKDcxRybkhW7CrQLy6gHo",
  "key5": "3FiVezesyTbH6bbtYh37KCHcgqNZpvvTnTZ8NSYstgkc7WpNg94MfVGkVJA93nNSdAQ4Q7YfjGaeMfCLFCYacyzm",
  "key6": "4yJBisVrw8hSXmSsrYy7p1LhHepJ6Eq3Cp7g4AQijzpGwtcNcHLRVZ6EtsaMMAJH8J27M3dLaAidZw1wUSdP6cXZ",
  "key7": "5bYAGjiz8Ub9nKG1oT43jL22onGFfk7bbLss6524ZKxCzt5P9PdGq4ys4zZ8XDB8SW2AyHF6mKqesKdd6pa6ZPix",
  "key8": "4xnic75y8Ch7ZChBXKfPQz5tTyDvsmNjnBNc3N1Tyv5a2yq2Huetbvz2vB7zUL8iBMbjh8r1Fo5CZhNu96TRP7Fi",
  "key9": "2fbQMbDCPA8XV6W9hwjGS2a7nXZVKNe8SRYR49Rmp1hzD7vCFQ2dZ11ffmUfLgDZoE7HUGyRpzUXS2TjkkjqvQGg",
  "key10": "3GWdNBdv7mcUMeDffJqKyLxxdAPWNK4AH589Sc8q73CskoPuBTMfALFJzuayWhSCPa65s7DdaXdSYGkkdD4yAngT",
  "key11": "61TkKu6b46pLvs5NkZfJBx4tEp98yLC19PwP3TWoCKoT3LuhyZNuYz21WXLNggKMa5LRd3U1nB2V9wZTihSn3Kwj",
  "key12": "3hS3A2Cso2BtMEJrqxaaKvWHBVLSX7SsZZFLrGhyqM12YSKYV7eWEFXw3V1ZvB7Us6S6aJ9MHpBLevWY2sUXhiBx",
  "key13": "5c3LatMk7tuvj8Vn3eqp9Wqv8wn1f7gLB6SNTzMnv7ZNTJYXRWdHP4Thc4EnckAv2ckh4axtEmtmDFjXwtJNTvCu",
  "key14": "55NjrNfHZ9pXbK66wwMDyDmPRG3vf4tk3aXwiMP6egCUrW8CNvyS1trLSkRaRiVUbaZEJ7ezdVh4HKQU9ijGND6R",
  "key15": "KeSTVzhBBktKAaJCZPsLbkuLFaqT3T7q6bPUMMeAJ8tFoi9F9E1GrJpkGLSqP1mDw9xHSZHCmQw6TPnqWHJaAXo",
  "key16": "vcmQgBNrgjy3ZEjty8Z2A9XTf8M6YS9uAPKEwTBRwgiJtZLphhfHLhew2ex9hM623XdBPNBCMYCjan35QveGuxw",
  "key17": "2RrMrZPMJsKotxre6A897QonvM7P4jRD15YwJYkRSuj9GokZ2pKNgvPNiXm8aiggkX5kx81V84Qh69iieUTLsJ2W",
  "key18": "3rsWVfqZuLiEey8X3bT3BGgMkVExv3yjEoH2pBc4jGJFJQBPnD6MtuZi7FR1HBMa1nsRQyiuA6VFFW7WdMsyKutr",
  "key19": "LjqkALtKCWSzTru8QNjZCW82DoJ83j36DU6nsTke8PtYtoPXVJstHqPqz7TFddURdk9kTnP7ErPWj5EzYKzXSNz",
  "key20": "9ku7Tu74SQSFmFMV1mP6VxGUjzAEdQ2dDfmXyLhd77vXbZtTUvjsQqM5PWc1BVtjM5SNr9b6Zw4YbH3aCNinFSS",
  "key21": "3JtJik7sz3yPbPzEUZ5oEVhSYL1kgY5JVFXBFtgBWTpSv9B2ZjDG6kQvMQ7ZESr8f81Mx3aPKSwZrtvVtz3FfuvX",
  "key22": "34zHniZLdxsFL2ufnMhZTpVLTzhuM3uShbVZVkwASj4gGZ7pEiioEFemi4GAC9h8LuEaWoxC8p3kro3WCVBnAk2L",
  "key23": "3Y2MLbimwadtbMvXbhTYqMt2SmAD1U8TGZYuf4AUgHe558FmpRdW4vs58ZhVAN8BbUiedtf7wUEZxqs4JJDjqehR",
  "key24": "2dG1aePHRA6XAaqafH1NDydKLShrkiY4Emtk9xBLiG8vFDaYUaBw5XMhRavuuPwZUzpCDsCgVHguHzu2UVQSpcng",
  "key25": "4hcrxNMPDZt8YHMbsaV1cBq94yG367EgNBrpSXL8omA6hSHHvxV5v3ok7SZJCawDYBTU4iS9zMQwWjCZCVux54Ju",
  "key26": "5z3UMhbMoV5tRcCACMejTamUxvpbkmmSpBKjUyRrApvDKTwhbQWRTMPS53FhN1XWveWyyQuRSeeEkdNERpzag7LW",
  "key27": "zJV98egPWtkTTSV1UtaNiLBjXTHcRAFFFFDNtBtqBvyUYjL4fW9DGNcPFB9PKnPju9Jqdxc7Vy4Fx7UZDUoTmtY",
  "key28": "572Ur7E7CeFvXWgbvjUJUYXUc6bKxSpqUCadkNxRT3wvK8T247ronakFySLqh5PDSMfuWAepD3pYxu3Domy4KPvw",
  "key29": "2zHXTALCSKF7bpWp76uDRe5wKA6pVCRTGio1qe4oUK6mrofU3Eq8RynudM2MyTeQ6VTfN4u4JUwZDgGC8MXytPxQ",
  "key30": "sPfc9zqnqEjLFrxfUrvp7wvuMdXVLszuuki7w67FHHSkUmgQRsibdwy6TZ8wBdkaftrba2gobQAWESL343U2uik",
  "key31": "4BU4hSiCq5akJ1eSuRztNRTZ7CZwMcpJjPork4EGzgyL3CG9DYt6Ar4zQb6Lswdckf9H4WWqSbSA59RLxoJDdxFc",
  "key32": "4beh9aQeyoDtnF3bE2a6Tp5y5ZryTnQZWTkWhEziv7meK8Hrkf79Fnw8nQpaJGqf17ZCTdEiggTy6EMX4MU3tTix",
  "key33": "2GkVHqMBz3yJcgfxYjVb5KD9Mrck1APTimdPAKPTfQKLoWqyrpHLuoZRTeGZ3nNECuA19LoJhAVjwAmB4Cia5m8q",
  "key34": "3Jm1ouwT3bwAnLzN8RccxVqaL4oNBL7q8QWazCcSapx57oH9M1aT7vm1inJaZdSCBBjRzLXEDk3eQAa8LJGhPyr8",
  "key35": "2YY45he6vPtufD3TtUNY1nS9YB4DmBRT9nWtJhH79enh3NN9aK1odiby14S2mRatnWNCVcrT8k1TxmYt3uSSbJXC",
  "key36": "2cshqTBGtRyLpjy5vfiii2Maesx4CZTqGHaTPmaG2To73eNvZhbBKERX8Z4AsEmVBYit2YevbyGKpYQxudtQiUz4",
  "key37": "4seyVqehN3nsmiTN56EGB8tmAKjHLdjpqD4h8MVKQAXSyULgUBeidDBJwg84UFz5vQhNzrBD7t1Mk8zWifScUBrc",
  "key38": "3MsuhwVdykKAe9DDaTEBzge59Cg2v1mfQ8eBxfyNHp97rg1Xgu8Q2mUHt7tAHzZ7UMvPyfRwLdWo8LHZWGKsrxeL",
  "key39": "3iXjvmpSW1mSKgoPpfvv1qWAHyoYv25P3h8QWL4sVybyJkHd6kSSvZoAM9aev4MqwQAVr4GCKLWshPwvcm4R8mUL",
  "key40": "4Gwpyak8K2JfV7UakyCRv3HqJ3tovGuHtVT7SuuUpcwNCmantLAznEwbgU3ecHGVXa6Eg1apPxQzF9X8NLwDyD5f",
  "key41": "46gdPBomk7B2Ju8Cu6WcBB5usjrTc5Fy5z3GqwFRhLhtyN95kF2SCy4PjtJyJxohm8jUEzagjBTrKNDZpzN7ya9h",
  "key42": "Yy7ucYTiUPfHUTBqjKFrG725p4LkcxV2hBFNnYQVnH3WTGqxv2TX6CPSD9BCTRsT4J4oaG6QxNPuK8a5HbdMCr9",
  "key43": "59e2m8m34mn8uRkZWX1jkYmo7aRNNAx6bentC5UiHXNMKLyJdXggUiF7Gn9c59KRWjM388JKLTtYU6GphWswhxNU",
  "key44": "3t5nGr3pcsSYECHkENSZ5n2Ac4oQyJVNcURkbmG7fVeaKjjK8o3Ums4DGAgiMweUoctLw5rsBBoi24VuPhWwpJSL",
  "key45": "2skPCv6jouzYqHyF3smgHp51KB2k5HaBiMVHarCyxVZvWGSp6LWpLVwzpJzuic3wSuZXxSnPmbDgb6g8Zqrj18hy"
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
