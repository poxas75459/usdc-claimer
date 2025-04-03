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
    "35D3f5cNRQnMFqdAt1DZb9H8Dby2r2QiZ6xvamwQFmr4oBZxZ6pbv5KEQGC93qwbzPbPoSMnfbZHRh87b4ePRxR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cvUPQMe8BByr1ibbvZcMQJ8Zj2mxReyjZqi45CYCyFfMNKifGavWqdZL4RsK6agUHURNsTNZBYJY2oCnMaoobEt",
  "key1": "3uqtm9wgXZqhYkweNw69qq7S6bwEJJwTzLMLrismRAg58q4qkv4Eg8qsYL5bnzLercypYVByBPxM7bZznQYnMbXo",
  "key2": "QUiXntdEod8MddEqvcPGh9PaLqjC3suhySvrRQbJz51QWH1HCYXr7kkLVaWPunqmJZ95Hfmcg7pgXgigZhNvN5X",
  "key3": "e2p2pWKJFBpYiqH43Qoc56zqcZnaZMVKWgXSrGB54DVPDHCZ866m32uyZMqtE7zp7knRCgQQjvQ4eddVPNVdQWL",
  "key4": "wxoJLHNV26usYcociaNZyGA996bMFmqyhF4kdr5bEgVnCoAx6w5P7eu6EHf54bTJyWKcdJLPaLESHq3FPd9Drxq",
  "key5": "3Xkr7EULVUL9mLMo184RubGdXf9m8Mv9aBfmRcutEfK6n53rkcudorfBYqnBfxS8mbcB87YcFJ61ihXnGpKrxrBj",
  "key6": "4CcPUL6WYbRZyP2D2jKaf5QNsYd9Hf512pTbrzXBZ4j75JDCeVkPwKRXvDkb1qb9NCMh4hJbVZTdcJKEBryk9m79",
  "key7": "4uPKy9Uf2UU2Rchj72261yPaiRwCSouka6CDQvJf7nkgqPnkKuVM9boZqEx55izqpEqiWqifABx6Admb2dCz1pYu",
  "key8": "4TpmL3TUT4CPMsMz3RSARtSvKbHZEtmWYjqQV3aTVApHQrNVVsbSc71Vk4ysV3KKZtnK2WTpieKmxe921f7RgRz",
  "key9": "2683RpVZWk9WGWtwA1hbrxW31zWJejZ5CT6Loz4WidWEEN7b3dZnEfMjqGYhpqnPbo8yJZ46Tm3FpXoyC2twxt7J",
  "key10": "M1CgNB2qagHT1mUF96YNVhLcBgpQaVYxgCqBa84kL9yQijS39R4RQUw43UALrEez4QhHNQpDt3MKBSoNGqE5yki",
  "key11": "4eReYwcVsRkV9EdtxegZ4SDJ1GSt5Qg8zQUcZSMRJutKQubaDtz7Nkq6wytJufr7Lk1SZqDDc4BjfnokBgUyWJTq",
  "key12": "2GZ8DDPeMnSDR7gErBwhpCiDrNN2gYrQeZehDvHuc6dcbYo8XfH2JDgqXrvn2ztq4JSvEgRhJZVptcwh7bH7xxUF",
  "key13": "5GFLh9fcTiDmdEEZCKsQW54xtApKZSjn1AppQfFfb69RXkQBZ2c1aqf2zw3sWpQS6ZovtroXfQ45USZKwXesoKG1",
  "key14": "5LfB9sUXFy6sq2p4tv794jMgacRKb7BMRYLRT1vubbpU898j3tunPHTvnSofyxea2mD3VcgeVaR6tbE6BYmtGu19",
  "key15": "MKjMqmYQ8SBukBHevvZRzmrxG9vZCuefD5PmUkTWVzfkZFGtKToQwxjPyyLtnrd2i1EvrpZDo1ZKUcDcNUqWB69",
  "key16": "Ng8MMvn7FcGmnZpLdyKHtvb5EzX8L7MwiPLe7LhkiZty5yDNmwoXg4AjKZWeNqsU4KE4idWL9FzosbmeXrTKpb2",
  "key17": "64TTeXCvP95XTGEueVUsdC4UE4NAfuAFg1VdUJ9SwsfwXgV5P2nWSJ9j3ei3dQatBpUHeUyPNzaCcBA9nWzqdNiS",
  "key18": "5yCmE8JKY41s4xYFiCqWqzYdazd6yUaKPUdy5uxCj3gnMnrCyBSwnWmDzKu2mCEnEQQaJWakKbhmAM6D8g65kWVR",
  "key19": "4KnWPr7MeKu64kFcBwkpBP2aPrHrnQ4Grtr2m53BRw5BuKv9VVUY1AQAtTca1nUBpayBiFL1NMh9DM3G7HoyNNYG",
  "key20": "5ZFTS1QgmJ1k81RNbYnpYGZeUcMieGhTzT4LAR5QBDYfzdkqDy33wAhmG41Y4QKqzerBAdCVUoT1Sv3fVT1qdZL",
  "key21": "4AsFbSSdUHzgbySdGE6LPJfo5wuwrrhtp5RioeYimD3H6gFM8vBwYcjZ5u7xbPL9MriDKWSpmFJupfJ61BKihccU",
  "key22": "4Hjxi6G2LFK5cA4Nnx7uEh7uq5YVtNh5MEnijnmVhS9Q9WEvRCwaWQe5CzGyGdMg9Hj82N1PfTCEqwfaJ8MATD2z",
  "key23": "3dJxKFf2oK5a2S1jxuGJMSgdQeJyGaZKxFgtuqqP1bDEY9jVTt18bJd1KtW2nSMQYYnnXejpBibTuPa18RTgxAdL",
  "key24": "3avvGAGKHu8UvPMX9M6JDw3JfTEwCxhK55AdZz9Ty9uyD6UtoN2G6UiApyEPvTLfWwL4eBLMWD8PiaCfsqTCd9wb",
  "key25": "4KWkKqps2LKD8o4GqmFThMuaPU2cTeDPokrfb3HwRJr6XTtEZyV63e3NGVSrZvCiuLsjAA2oyyZouVLzko8UUUuS",
  "key26": "yCCSPTBSPmNr8bJQ8JEjq1e2BKB1bm4LGihrXFpb8QXQBitd23hGo9yFfQVHmG2n6p7b2WHVFWvsYe6iVBvLWLz",
  "key27": "5LS7zaeqN5ShJ4NbWWnKFSg9abnmuG1pHiBquawgYojqCN3ZhvdJXtTZUTtVGGwXkkh16t2CHMVq8Ltwuns8C83k",
  "key28": "2VcbbuDeUtSpZyb5opDjgPbxZzpLbCJX68NdsUdUC8UApejYLThq8iMioE9nESg7ihDWQX4988jQncdkUdWzAtnC",
  "key29": "4SLFWJKxb3Ditrig7GgiE4ZR362Yi74g9fs1QUXFJrVYc9jfoLwDZ9rbi5txqaLFHRW44dTUb46GYzwQW5PtS6Eo",
  "key30": "34PgztB3mHwvmSvs4qdmCrfc54JDsd9qbSU1DsBGohAJRsRzL4SEBZF1ptgBnujcnb9PMEEZwm3Kmq2zbjCo7qS5",
  "key31": "3VfJ3KL1iZcDrQC2F8CHa6vnbY33cqn3gQzvksXrncC4WpkvdA2JmjVRCmfqPFAzby1HSn35Nm7TDkwGcA8LMMhB",
  "key32": "4k3CprB5Jvw8MvCGTZdkPMdoUr4MWBnpna7HiPPSueYuF36KCuX75c9jBkAbViJNx49QZKPWp1M47mUPENi6KkEw"
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
