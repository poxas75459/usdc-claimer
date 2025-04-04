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
    "41bNUQxMA2wLS6bYVKgcJVvf768isAWZaYF1iPEzSSD3QuD9qU5zTQtBjbNDT4he4ghGzM68xQTjMAjnyKLw3Trt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CxzzjfnsC2RsXxWWmvmN6x7xeeinaHnnAwpzpN8RuX8BkCCJiAq3bfGiLo8F2zHtdjYKR9cfArQGN5cpRX6BM39",
  "key1": "4sr2KJWmCdzbW2ajUKRQ1KVqCUtB9tfsNiLoFSW8mh6GfX1EGfCMHTgQC5QWm7NeB7omxeieUWjYNeTA6psf3E1d",
  "key2": "2GnQGEwUrEccm3j572xpDgAnjfwYo7V6zxDS8Xivm79d6gMUEiH1apiRzKqtBvYaw5GhxeQXVPP3E84sgoUzrLwf",
  "key3": "3QtqNZjm8TY4PULEegSbcivLPHtNEhHqocLAMnsyDoHz1YK3Wz2kZ65NuD2NJhzWX3exYfRSKx9mS6AoN4Z2NgDM",
  "key4": "5KeLpw39W9HSRVzVRioZuR5JVUrskFZPs9SKLLc8JFfyLTMjCrobxciBgogg5ynNJV3s9MHfnMrGb5kr6dTTLymi",
  "key5": "5wgstyKw6Xv4YfFNiWr6BiM2ottXgzxJbsByRpqtt4PbY3ubZCToqrwdp1L5uJ92QFdP6WFdwheCaHLAeSqpAVtm",
  "key6": "26BuFEHFmbXwkKdnL8nRYRbqJWVaLRasQ787b6sfcjsxd3nsq98HUtNxHL18YRMj3fegdSJfW24RnqRcV8hYnHQR",
  "key7": "48rncGzSu5kyD8MDxYNwYqw57pMsmw3puCKnbrpB5wNVu1HsrQwDiEwtLdnwhUvZxunXsSSmAuMLAkcRXQBHzSJt",
  "key8": "3V6KKqrGJQqYUJw6odFuCDDzMzuwRX3FthQ1J8Rr18UafhGTZsehMmLiiTRunqJtqfvhp7Pnv3b5QTe5qXLbuyu4",
  "key9": "2fb3iRNQbXVauq9Jk6yDhwyxoxEB2Vp64459qGdN3f8346TJaDe2irD7DRgyRH93EBRq8yPLTEedNpBeWXuuUhjH",
  "key10": "2ScHUUMvGhNXrAndnzVR2kKo5D1oEwncsTq1dXnGQWueMsmnSuQJrMqDcS9yz6Htwt5SThsjVoDaNPeL1jjdjinu",
  "key11": "3N7mKXRmbMdjXiToMD3N8V4PSKR5WkEZh3RCG9DSmt2aqWURHVc2LVP8NJttxU6H9zRZAcHNBvP8jkzqD5YBiWPU",
  "key12": "5zYcrTyiSZaa4MauEvYZMXNr3qPGWCrb84raErRuqWLyjYKpSydAYGd78bLHUXKZRQUUMyWicFDsroqA5w4nSE7k",
  "key13": "4fcaoVKctHLreeogG42FpVjyZnF9abFtfAiYoXMBWsgbg9oJD4idUhAH2EZkMdWtumAxoiMwBcjCjDPXWBtiNXTx",
  "key14": "38egtn8eUVCKukvAaMuwEzkGrom23jQcPfwvgZZUqbzdfFj5tHdfUyDxT28L2vM7cvoKemvtzwRAdb4FQYsFZ4kq",
  "key15": "557LytQfZVkjdhetj5NxCKHM8cpWuA6cSzjJjH7TZsMhZaUx4DPgbq5xW4FW73GLKCrNRp8GFYsdMnSV9USjJfwk",
  "key16": "pst8eh8skwKF6fYamhFXJxeie2W5EN41xFGn6CE6k1MJyaErUZsq1nZcHY5FrNHortZK2hW2dDp4o1PpHuZHa1P",
  "key17": "5EdasdP7mszVjqxn7V4T3pgzMRunGSS6KT5pFm5NaThTrMYv6T8A499uVQQMasCwcYSoBvFqDcTKSZMKHEJt9kaQ",
  "key18": "5qnZrafnPVZi9WCxciKWXHNQgTKb3aMJZbPZz84pEuS5Tenj2WDcgsJsrKQzBepTh9yk3Y9ACWvZkwZ93Z7vRBKw",
  "key19": "2FwLvHwPo55cCpWXmQi8LvZyiHP5vhQMf3xRDHqm97iM6T5MbC3KKEU35nDQK3MuiCaitTBRquoYbowZqQb7TKxY",
  "key20": "3U8eCnpLdyMRpfcQR68C2gfpmZPp6cH78wR1LrPsCHP9YKeihANmabECoYDoZjjn6DUeQGUpLxRia5S25aCzMh5W",
  "key21": "5xYMZSHtYEVR4hcKEknemNYAKHFWHd5gwEk2a8BReceTXTUmDpM564Q54AF8MDfZLBjny51mMjjtPxgXpb7W7gBR",
  "key22": "5fPznQLw3B1fpdfqcBj436UTVXkVfCyFJU3EQ5zdnknk4rHdb7HxZYjJbBUPBVx9dqeKR7RgYwPJGigDtoFAD4aZ",
  "key23": "nZW8z8kMYSaVT9M3mLFkA4D39gtqK2Jqm9SoYKTVQEYWqf2a4V8iADtjuVm28EPkLTp63YUVyFZgyn4wptTdanZ",
  "key24": "3MPPvYdgyeLnjRJudRvcKe1tcTxLvikQPGzgHu9rDYaNVtoo1kHedhg8xCkGmJQp43i7ZFZ8ZbiGnnVJs2hoNpHA",
  "key25": "34RRjVsK4JytNJkZbk9SA3hx1xusM1hDoCvcLTCDAY93mo2HnS7JNqdvDgGSri9h2KEF5yRndNgXXAV294M4S9uD",
  "key26": "3utPrnQ6h7ifaB1zjvcKdS43CbR4axSAaSmbtXa1CUx1w5gAsvsSC1p7PGtGEEhgEuHNpV93PRfKVgDEYRDKx13W",
  "key27": "62qGH6pk7TVzqpBZRFnFPVWzh7pU9nG5kihF9CCyG8GkGPnrLnJJgNtPM9bKgYGk7M7KVhTBwUcGJBghB7dFsE9C",
  "key28": "3XJr2vqG6wLwMBBu8cxZcXKJZWL3nfrkM12Zi2E5ei6nBtURfcgAC9mCfYSn2QKLtoGiGZfsxkdFxWrqXAoP3wkj",
  "key29": "4zyCpLFJX5EVeYWHPCYZ5gWa6c1PqvVh2sbX1Q2NEqbG2UQ8KHsJkBE4aVFRvMJf7UXiUd2pG8J8B9e6pmArQspj",
  "key30": "5FZYuMvkmk2i8S6gXw8R9Kye4D1J6c5fk1YuzX4xKwtg6VqahxZUc7DcaKwjXqk1WUnQkCJSSzRyZvEYUwdupfRX",
  "key31": "36YKvfeEWNiYq66rd5Ekc71PFJ3i3TLgB5paKhwCPEpS4gkeqfSvMVAusScy5NHC5pmBoaa2KcGarw5jyvLaZfMr",
  "key32": "3aP6fYMUZQy1gGozpt1fNRdY47BgvmqhZW12ioWiNHw5j3dHQZMN45VWwNPsJFzSM6TFtmW9NM2ptsrTHy6QMgzq",
  "key33": "4yDr7YjwG8xeRnrgmqYBSSZHe3Myjt7Aucj4JYRMR5TydzN27kp5at8uJZXVGsSotmHcR4sTvDttweYDVJUx1W48",
  "key34": "Z2eWAV4L7n9wtBNFZ1gmuzrPtytDX6GgYDRDukU4vdkqXNesePFqfb7ZYrUxtT2CTyErqoVbi3bKqqn1jXkc7N4",
  "key35": "8CokxgLDbZeoWvCke1gRQUsYJNTuZxmxzqYigfSb5FxdH4Uy9Ft6eDFXPW8QUhCymJwq7wKFf3oK49pCmADv3m6",
  "key36": "5u8mqabDJGfur8A1jNPd96qFGkRU94V129DVwsBTYGLh3unRCibFDwVGRUJitNAPNeaDy2HAtBqUTiEJXjJhVcEG"
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
