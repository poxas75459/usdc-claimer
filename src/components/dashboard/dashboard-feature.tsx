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
    "44dyo5jsSwV2S2vb8rJnJ3dMB4XV48LHAqwhG4jvbhirkdKXhQ5RRCycqPUAQsdGiAxnPtod6AMq5bYNYCsX6e7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Knq6D9dTBEjQ3XK9Twy2QAuVahk58vDnMfkYNuoEFaShdMvVNEXRofiH8RqATQXz5WN198tuFsvdS32VJpXxAvZ",
  "key1": "49iMPXPtLTH9WbL266EcCfLaXXavTC7AeExeHXhHj5WM33Yd3WyKFbayfLoSJxeZmWRAE7vjGz7DK2VFBXA67gUb",
  "key2": "4Tjuc5uUo652hQb826abkCBrRTTwW47HV8yH7PWRfMKMrAytktAwJrNRYGdzznNGwXvM8MnMwVL8r7i4ya693Hht",
  "key3": "67CmbpDKL2L18jiXQhAZnG9AuBSuApT5YfaSWyQ3hdt2cimVLFvrsDWj9ZRT52ByugEVPtWmSc65DU7y8HKNgkzK",
  "key4": "5gRwkSwf13p1kjmqg5RSL8PWKLMSHimoCHEBqELVwyxLsP2HwiyaZF8ayqXQ9PVKTdor2ZffGSxgyxZCsUekuM9r",
  "key5": "4QGyWvQ6mykuxo7fRxiU2knzPeFc51yDPkcny9tKqLxpwZnic8FdfVFyYfGQJbZx1dYsegfoo5LNmVLwBWPz5Xs2",
  "key6": "fRhMHwhm7hFjYyYGCi4puxSSfmohXsDLGi769rnW27LtPTWtab1MFPE5Hg2vNqKd8H6kS2Esut9Avg5woRZD4S7",
  "key7": "5e2Kadsf1dfCe2Sia5pDxSTPZ4kLL1LfuAt4JKU1iukVoeaoSPZRss6rsFeUSC1NUc1w2WLszL6AbGBAUBMh8fB1",
  "key8": "44jKmvc8tNMyKCnpz6xHmeUzdRyGBFx1SfTW8ysC52qQM3WESJWYnJu29PjBeswDk59Db7cA51juP6BufPpSjt1F",
  "key9": "5WBb93eL5HnBGNAEEcKqzEX6z7cd3TDFuz9oijsfgdfvbCHeUQLPeXdQ8C6U4EsFc2BJLA1eQg3bW4NgWWAxtoqn",
  "key10": "3dSqzXsuBwbBcDVRVBWtU5Sa1Npsz3KCNFwG6yK53ud7csx2ugFUQc5nb4nfzXfqjhTRQNEF5zzxv55wuNiVEYuj",
  "key11": "2RK2SgZ3qLVLJwdzXGykZjnuCWckkFPy8UqNZUHVUDAGJDeaQq7DwPvnZKa3UftaqCoNWxqow2RDvTiDzYgUraoV",
  "key12": "2G6gcQJBXBYUb7TVA2DmmANdzBnrifHuSZRnSHVs5uXuqFUAM8B6eZAJSd8xcpcayZR7uaWXj8XEVVpMfMDccztp",
  "key13": "uufFqu2XDgghn6izVhY27WytkHWX8ez4TUbCa8cKv2yPRojEkTgWe1nP2TatjGarU7S2x1VG8u2TAAJJvjYkPVF",
  "key14": "5hbAbWJ3vqXRoBGfz6cPs9gA76nX6DFrTjizUg52kPGn1L4cEZQZ7SjSwVETD7LQskYXvzSfnzHihT1ydksgJefF",
  "key15": "2ePzXtyBJmgf2EY1BH6ziLFoFLjJueRS81nCrUuaZv7kqCHC3J13dtrNDRiyBTTUawjx4tLZEad4xwicZqredK3f",
  "key16": "2Ayhma3QaExqYcX53YjjCZYKUYwAiamYESFPFCGij857fHTmc1TQ34cyrXKw5eXBVLoshsJk49iz8JYizNu4Xoi8",
  "key17": "4uXg8QDyyPBug9uaqo1Kahb6LiqsgoTw1EJnggeLoVWJEeZyqvJvMFaA8eTUZkBvEq1JBrxtwrF6495EGAvwTS8u",
  "key18": "4apZ55WdMiSzNqKQHKytH9EUNA3X4fnS6x7uMi5bL8nnYzWnhaeyegxxcrELwd4qTxNVKCBUX4ZNKYAr1RuLbtQf",
  "key19": "2SnusFxbbMyJW7MMkEg1Puzf6KhynoW9hLSEoXpqBVL7HRvsrZv16Kq9x6NgJjobkWvnQxeEMhmB4tmtrQXBytGc",
  "key20": "2juRWZito5WDssbCVWeWMEYTv8h42ogWJzxHqAydXFS6PKkUwatCSwaJWBHhxx7i6GRGB6EX1LmKMMC5xfVdKBe9",
  "key21": "3FK5jt9umWXbK5n2K5ALnLgAHmVtcp9EoFLXZA95VpWcptoruDUvba2N3c6tV6kHGjv9TwJfUqShos3SkHJaZGuK",
  "key22": "3D8AA9R2DyLvDga2ny38D9DiapR45xbhcJ1PqvuwZSV6vUix8T2TywC4AvzjG9K7xw1KFLGAAo3G98dRAcF9Pdi2",
  "key23": "TnxfrFLarJSANjKxTyGmzopjnG34bc5Sggd2eHq7TzTvpbaycYpthYS2fkJNmGh2pCSGLEUpJ3tGQFvjidM7RBG",
  "key24": "YXqhmnMj7uzEGMKtm8XM7ZZLaMnscf7TxLkYhqBVp5UcenxRVdnBEhkLTPWQDXjhZ67JNgpSMM3EA7UgkBHyUjy",
  "key25": "2V53RRBKXqD8SFEumEU1AMkZ2bLzxowLh5E3JbH95EmRrNDKma3hNL53P2m9uMGhqZhKwWsy3UodSNPc9gnQE75h",
  "key26": "43PKcea98qj1TLEcWWPDPJAvmhpiF4jvom46XxQ5RyiLHgmL7EwXT4UNTpzY3hZh9Hj6BsSLDoTosyxayhMC2nq2",
  "key27": "4kqyGCUyxjKpbfXtLoqHFpM6zKSEGNAGgmCM8ffk7sU3SLkJ2Vfn9zbXRmWcV3h9tzLnbD6ApsV8dt2Aa1wdBkVA",
  "key28": "2eiDVnwnNjo3LYk4tuY7xPF9XsGLBJqhmCvQfe3yLUzhhw56SsKXNE6yMuvA5M79uqTfT2z5jKT27x2x5kustt7H",
  "key29": "2NUHKkcPF1V4aoYhSLDHFYJwvx4okeQHTYQzFN2x2o4D4sUnEoxZobwYGPC688UbuX8egpmVPEvUH7HbAfLEmqcJ",
  "key30": "z51NzWPQguRMaHrVbEFRpxcTFXng6KFC5PP4f6YnQyywMPigRR87JG8ou8yfp9AbjwvjtoaBBn1BUT7Qn5meGFJ",
  "key31": "41Sid4TTTN72owHrs5sQcRgQr7PTnhueVUi4yDtKBLkFC7bKVtQk7zCBRg3wNyVsQyenniQXff2bnKwLyargrkbn",
  "key32": "5Zs7GVqYP1Qneeyxkp7D6qT6QKK9P8aUqYYuCxk8aZnm4xyP3DJm6aMXXP5nmmKojNYjSXqUrVecsgofgfnXnCYX",
  "key33": "5XKbcpkqdkiCB1mLTHFgAQJ6VDKZ7STdme3KTzNDhnzadAnBwSqJKUdxUrEpVCD4SXUjLFQNGc23P6sFWo7ewvEr",
  "key34": "5hUxnJfhmC9YBcFfDjkMkdCpjj7LzJQy18JraPya1Bvu3detVxJKLJBb7gwZS953uCNuVCD5sqmY31jeok9mXpot",
  "key35": "2YRfMV5tg2PDM5LiFxzGbq6GEWV7zEjN63sbRYAUX5izrT9Yt2yCzEFXPxiBBkchwdCcKpXFPYgn4H6QDWZ6sVCt",
  "key36": "2NSVgBa35t9JRKtL3QfXFNhqxFxS9CQgCg2G22Ytd4AfhocGPRESutJ7ue6XyM7skPEftUqxEq9TU4yFvNhvDP4h",
  "key37": "3TknKxKccbcGXrwaAsucNZue8VPeKmTYJUK6UKmEeDWeph5d2qHeZKmyWJmmGay8E8m1tZZpuYF2GUWwg68WSgwD",
  "key38": "4ct3EUikbMnMwqWf3UZWpC7YcYZW9bMJHBvQPowJtbnSf6aGBGvH8bTzMmGFA15CDySvHdE2mo1W9BZbyXhMjb35"
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
