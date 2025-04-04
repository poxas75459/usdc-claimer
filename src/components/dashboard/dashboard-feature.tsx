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
    "3yVWY3MZacHaemTLNJGwTATBTV8BL2copqTgfa1vZYTMH5jPXi8xtdDQ86R8xZ5qgmVtciNwyFHBNQu1BAwY8E7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fr7GQQA77ApqtaNdVJ5FFBiCF3VJQswvxZtMsXvWs8h5cAtS4zLKdd9sgGcdspxoaau2j6YzVF9prh69roWpdH4",
  "key1": "382CFvfTzBBQTrjZomWbEU4vFgUJ7JoqDSteJbghsg5oCzNnjAHQfFVvMBBoZ7TNDqXR8j7hH81akGZq5yjQjna9",
  "key2": "G5iFPRcqsDNvkcKdaEnmr8rZt7De9KZxFyRFUzSdFp7egdcX5szVWaVERrphrctVgH23CT2aZcmF3SNuJ6knBcQ",
  "key3": "UCrRLGX7W3ceWDQWunf3bgi56itr8sZ3MwrfENu5SLPC1d9mF42jpvFtf4p1f2bp48jgJiTAEG3QUkHc6hQYRNY",
  "key4": "qCyfiMYo3Eak2x3Sf8jPxV7W51Rj8JcCqfGhjYz1joyEfpym6TtSybBmU6dJjkGNaPhqhb8Ro7D1RFneSZP284z",
  "key5": "FgCGd7FkVGTCv84rzPjtiEuThR2d41jJhpTaXTQi6QTLTFL3NJgPgc4rXXTWqv4ydnkckz9iWzDJBmCZqXgD8Wz",
  "key6": "2DustuD6FVUAFhGnyRGQjR9QLepEj97f569h1Zc6vTXcLr97YkNF8GE9ma8eRZ6yyDaCgUJYEdeZkFLktbCNrT87",
  "key7": "4ziudr8SrLphJxGaa3o9dmShgK3qt6TLfcM6ktsehaRjD8eAgSy3hvE2A9gr6eDMePhwDofc6kxGVmX8kYZC16B",
  "key8": "642o2L54eHanww8bDR52MY4sENAdymCgVpYygNKMWMQmgiyvfSjK5D6NVevG18qBe38rtBP3mqqr4w6oej68GWdH",
  "key9": "5bhFXNqhfBNHHKuVt1YtVAjxTq3NZXQFpZxWnbMGd3HuGA7QhTqQZZi8D2CxWtoxhqrJGHMhe1LEUpeqPwJRUxWx",
  "key10": "37fe8DQhvomMBHuMqtQmxW658aVF9QZM3eACkqyqDGXUzEUcGfSuSiBPAtWftF5cKoWqpPujyGk5jVoXQCmV34vA",
  "key11": "45B93RwWTLFcQZqyrcXTkxdk8sfrfKbA7Pd1B2xy7QUXD3DEFj29kTeX3Y3GA3HrzEhLfr4VQkEok48z1wbKnfe6",
  "key12": "2URMfk5sx7yUhRMKnLvs6ZkpWuwfneZ81kqQTNXLzCw8KhWjTm9xJM5fZoBLezVfCRSj1S1aNcfeAj3rWdrhpBt2",
  "key13": "63RKDWyxwndi9PiMm9UahKk2FKPNTwHXHCDyU2NPU6dGE8LkUDqGeLYh3UHSetNWGvdULCxyryAfhjePABmLqwxJ",
  "key14": "sjJU9jyYGhY3dgY3NSN775jXsy4ZD7zKrskia1hXhVhqvLwDgrpe3PBjEYZX8TT9sm3D9FqxVVUgTXsdDS86g1r",
  "key15": "5vKePc7RSvsBcbLV1FGKvaKY7dQ8rBGmucCSCE8kA7pH38ZDW9m67eREs4TdrZPbVgLz8f6h9bxfWzjxasqTH85o",
  "key16": "DjGWY1iTfhpeGVNkoSRhBbDFiWavbQZE14z9La9FLpbUPhH286o3E93CXG1ofeAVSwQzxPxq41w2VLuF4QC1Dcz",
  "key17": "innstbZ7UGhwbCmQahHqnggD1RL1EcgeYxWrt4qoNNwBEt4Kk14xAPS7P9CGDHbyfk7AyhTxrPkgYHSu3KNDJLd",
  "key18": "35V9GPd7SuXrPfk1JnzEs6iptyzWDAqHBHnSJyhXmBgeYon86GeaMKyZHWpePURQhjkbi6jCaP5hf2B372NuFYpN",
  "key19": "K6QAVRgqKe5upGpXGfGVzPvBqrgp3bz74now4CxJSnyhm1WWcmdTh1sL8usgEZvwYvSnkAaJToLo8ge8qtc1qix",
  "key20": "31hNqHVa3smUZuYNt2ja5aUdniituLHesK2Q8AZsnyyo23oGukEQuJUFaGkNXBGEbBjPcD9ZcjmDpo4dUdqStpku",
  "key21": "5TgLDAjJ1Wf5J4av3HaLD34aPW4s3xJPnriHThCpAuNCP1GrQjCQHCPVS7qZJajm3TL3Ybg4qWspvexUEfq7ADYg",
  "key22": "4pXoNDxQeubd486WCzx93g5R677erW3vMyVNDrUWuQhEy5FwWoJn4nYwmdE3qquoMftu1KD1oyDY2RP7opnyjMRZ",
  "key23": "55DnLKsG8VS37mdNZpPxhcceTYVnyCppU4MGvMfGByRZFWFsR8jgT2EdGrSSkJeKBYgqBTxXyX5Nfk2RvNrdPAr3",
  "key24": "5Kqs4TH8bwnv4Ckzk3FwdSYTQsspVy1TzduWnYXKRNbA95tiNvvf3rVfcWL1JvvFEAdnLSR4tQHMYhqymcZD3vUY",
  "key25": "2pJqbpATPDJBkSgSky65kWx7dCEmimNmtgTKedGFzvH9oGdJvRkRDzjsVkTH5Cq91a1sYGHrAoNedcqDShibfwmK",
  "key26": "efN4VUfui1UXCkPDJpDnVHHANSNq1t8TH6Pid3ZibUzSewDHJebUoHKQ2gKRHHp2iztYjbNQ2XegqnqdGwziJfo",
  "key27": "4RJov2cAY7pnNc1yzrfECJ8ivhhcmwJMu2k5h5vWw4kq38JdCuprJZLzgAJ6neALiCHD4SxxAd3sKQ4qB7EYzuwn",
  "key28": "4VYSy14iDFSSZM42x3YGCmK2Dyq9eEAxN9kftAkCjPAaps6f51ZJBhdoooVv5HKuxUBd7seJ7iKy7wvE1QApMXXg",
  "key29": "65ptYAfevPwA6RGg2ErvNfAFMuoAXtqTEz3VJd1JzSG6HjFvYoqnFCbbYVqRjWmAxSbuiD5WGuMKai7vfYRgbZJ6",
  "key30": "4Ng84CrkvZ2wHor2qbUC6sHJRzWYTvXSpJeUd8AwsxvdjrZZyzHn979W8tK1ijjDa99tBgAhcSE35458tRGRNnLq",
  "key31": "45UvoNtigMRKgrZuTz8x1vuatDU2pVJ6nVz8dHYkCtEvhetDrHViuVL3SErdMef4UNC6WZmavfqNyPiHVg2e28tg",
  "key32": "5T9UuEuz7M9oms9VAURkxfaB81XNFYEwSBsaTJZAfvyffqcbinjffgU77MbGbdKxwpKscYGAZZYGyN3B6TUfB5Su",
  "key33": "5VBTWdBUUpZjnySt5KpErAEXM4rJ2LaiNtqyyEoYi24zc4ZEyiStTcnkZ5oVkkyvWGanLtWLs9SR2wy5b5qizAcv",
  "key34": "2qwbrgTamoYGi8v4njiFKWsULqLNEnUXYFi4pJ1iNuUdikjE5dAcM8p1Gcy1tS2KFhhstmyd4oFNr5PunA31zVXf",
  "key35": "4jeYEBfENLgsfzrCKgYyzsZrXmdy3oqn84dTpnWNRcvGeH7oZ4VZHVuVC6BQHv1b9B6F9pxqAr8cUVnh5TYzQHPd",
  "key36": "2oY9gKyqRmZueVMLm31ZcJ33zx4xgDCpjv3Ns5a8FBrDbzRuDjH9viM95YtcbDWA8QZjYxAKBxVJKSQBEvyeBnkj",
  "key37": "2mjUgNapAA4mMFWkSe1D3f2uZ67jGrxJJS59Q49gZ7xPhUjc6DsUWkCCCszUiJ7dVCvGpJ2icsUfqCpGjxnXKW5",
  "key38": "35iLCWi2FZfCTnaqJoaggyQctMkLUj725GSV9QMUv7U6aQZBghDcEVbbHYCRtkZFq7CKVXtE1r5Wxh6BFLXv18Ew",
  "key39": "jdaSDvbWBABPyPvqTip2v8jdNjcHHyYu8EM9ZJCoxLYHsCiFYREfVptrMtFmmHSLgT2sHix2L5bMwkoXTv33A3w"
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
