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
    "2aeDLQ2vtSX2F56xraDYrV7HkXghyYRFbvGRcFS9EV1EZHbq7qRC9afao1bBMBU4EC2qmFwrnNYNYNa94Lzpv1WF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2auPNM64JM1XFCDs8j7w44Bh7Yhc5d1X4NRG4hUnxD3Wsib2hkTUKFkkcELbbETpBjZ9k8FwWmoc2KXHx1jCwPva",
  "key1": "Tg2YLaqerF8qVRmQ8kt9nGfqhMxNUETv3E9UZUGdwBY1VdKevj9E7qP6pekqehTU4y1TyWCQ8SUZETUnMyZ1Lp2",
  "key2": "2JXUjiWGYwNPzKqsvdo5ZdgVzEui7MaXPx6zNnMfiNxzLfD66e3FieKTcfp6xDFhg6M6CdYqmEQJdeVjCDNK8Aj6",
  "key3": "5qozduAVkMJ6TtppBHmnUQaXUbGjjW3xt9aLpB42QTmxZjBnXLQAk38Z592sYkbZMXkk6kEKTg7TtdvF7tajFDwb",
  "key4": "3mPnRemfQ27eEqG1p5FDa1nU5m7VVFUHzrx3YdSjVgm5biNJWKJXNAT8BFrcNri5YnTUgb4Vvx8gtkEaSPN69knW",
  "key5": "5Nr5SyP3Ao5kUgAqZpjrSucoELzGbNzZeUvBppFsXfTgq1AqjnTiMMHBAgyE7ByrooZ8TCXFVPHXpYAghsimoLxb",
  "key6": "5bxwpZnBfEPrUR1evTz1RH2JnnxZGTM7xV7BCfuMabeCMTent5su4zjea8r1vPGbsHoB6A1tcg5APTw8ym98cH2N",
  "key7": "5mVQhSHHY8LxCA5cqWcyJMqcXueHxgVTZW1zRo5386ySmTtQX6XRoMLPs8VAh1Vifg6QgCuWDS2tYiKkQfrASWFM",
  "key8": "5n8xy6b8TDXTPWQZwLysqeNZJnJjPMBKfgemV6LsdRgjMZeh7WKLMXWg7sKTGyB4CbSQYSFXxFuyFpTKryXjq984",
  "key9": "Z4c6huCH7Bfgmf4m3NrmhqybUtgfRs1cyZsDaUZ5FfJi45pWXQyzRW6zzcwDTzNzVibdKeXddkLLaf336deThUp",
  "key10": "4tiL5wKZajo9Tu55HwdYcjFDP4fTpVffME4bScPuG6bcezQTaZV321GmdkZ7nWBuqRpsBrnjSfBbFnWu97rUYwKG",
  "key11": "5DrKmECsiYbDsMreAeqVoxeLLkdaCTJ8wq4wwwBiNZpQuNFHFLFYLyPNrCSTf245PWES2FpsgVPEchgkbFg5ixAF",
  "key12": "5wepbQxmPNqKDMLZ2jeCCWA8grzfSGeT7TzNPFm6Cp5huzv94QRfK9hFwvuVUwiL2xJyPmgLnrfSE1J3kPMpdZHR",
  "key13": "58M6aLBbMnRT1hpSe6w81dYoVjGufRN4um1vrkXJnqLHpWn6jh23w2MYMqzsjZt4CzBSmJfJgWmdT92NA2DtCjcX",
  "key14": "2x3cfn3NviZ4qWDzzT8rKgR2e5KnndDwoq7w7oaqgnvU8qtFLRAHwMgJtQYr5j1LSeR3geoLAzHApWEzPxEhGuCY",
  "key15": "31FbQF7MNmZQhXwbVR13tWmmSbaSbLRVpQMNQ9f5DKpLAkLrHykFT6tnLW5R9zEYyr6pMfHAE5zkNXDt2MxRSRWj",
  "key16": "4HWt2cUPDDKLnPYabHNCpbyy8KsAfeQEdWKdE5GhxSRpUVufp8qGYM54YuWpeR2nYXUrt3iitkRYnhG8cND1H34a",
  "key17": "3HWxQJCoNDAwfFZRETeyLTN7LpxctgDHdnztHaaD6FfAzg1uoxNfTMfzWNWaUsp2N6yTfoazJ8hZF47i1nx7fcoy",
  "key18": "655N9qJDLFdmCWDjY62iQf6QyWVfqGioW53T7He9hxExejd1PKKXMv5hLFzZ58xoSDnFzz4EewaRPqmkZptbX9XJ",
  "key19": "55q7fFmvGhBRgYVLM4o5DFdniPMnUaocVMe5fvSqS7fQYHtVRXoWnHfh9z8tarCQhdHzBTxSMTmAAJ4oi3PC2C7t",
  "key20": "2esFjfxTLrAQ1hZ2KgyohSXyhsyiEVTAcpZ6DnLDVNfBvZ1uWcaHExDTBewL4jPoWBL5xYCCn7BSHv5Wb9jfMAxE",
  "key21": "53Lc7Y1WUjgb74ESf2QfmdimJrpDohho8jjRLH1ek1BiT7fUHQnpao7RSriySL29Uw2ZPVVJ8ZZQUdE8eGQXcDZ",
  "key22": "5mfz1gidrw9sGyHi5zvVgETCDeNbNkjxCv1aTC4tZSFWdMyA2rF7QEzh59NUKyxcy4sJ4G1DpYcBfNr1WvN5ZNqm",
  "key23": "4zGQ1tmH3byN5ZEgFKdqA6KQWEfQTjWrVjtkTwdRNWLU33W4ibSaEvcAxmfbxsut3Fepxbwnw7imRJrYb9hD1uhf",
  "key24": "3Cxx9g6cr39sHv2d4dNBsi2TuruugeG4CnvHJoeZQ3fyaXqVwnUYWmEqYsuQJbmjTBGz7KFhKojawdq8Nnyf43UU",
  "key25": "51VcoEoKYB5K95dziacXNovHMML24ZyNomLgfcPAjuebFFCfoZJRnyucD1U1PDQcXiGfVcqWSK54R6sApDe8jbBo",
  "key26": "3c5mBoCXnAmDuPULXdHutwoN8FhEnKbixAfBpg6aZFqSnkWNZUBb1yKLNE7noGZNAj9nbMLVHdVf3yirqH6BTr7L",
  "key27": "XNKRHgvrF9BpDTRtkwWrcQpUyiEqf89miFsxDqorDMjGojZT1WSjh9KRyT9nL2jUfkikHgCfSyozDXrzLLCaQY1",
  "key28": "2EK9wbbeTtoobYSGCHdGXGt7RRCfnaFDuBgkDWVZgPa1QGH7FDtwiQUQBnBQdVbJo76nVzw5BSJgKHh7eup5FFo1",
  "key29": "24Fsx6bARkMJwmesawopgFptsqcRAavSydmTpMnj9uom2x415G3M3nMXQcDThtZeNdwoHRBp8VtQQNJ8c3EwYcAR",
  "key30": "4wm9YUMR5uFJWK5U3mLDu9aCU2dkRoicCNeoz2WhoyEaBEvHKF4mhuzmB2zLCfewbp3Dj5VwhAhrSrGnVFE3jnVX",
  "key31": "8pnLosUBLzS2w4refJPQfGzs4NmQQShcnxkBi3UNMiwTKjkTLjm8qHqge6DEMDtRYxnnJFhtjydw4uAbAZyKjnj",
  "key32": "P487gPZ7bXAkCkBQzaG3DkD67ziUMQ2GpNQ3a49nTTa7XKbV9GPbaRTrXnUbhM2z9ziWZBeHSafWCA3un4nagrW",
  "key33": "4xhwZ1UgFju3npfNn8doMrowdpMv562hYRXcSDLXdPFWaPKkgGMXs87amCgEvq8qr6MaDuG14UQQeinqqBfx2Lw7",
  "key34": "2FFxFubKDwWLQoBu9xciuLXVYEYUppeykXaq5fPuXMtPBU4v7tUWXPwgWsf573VYiuiv3qstDzyyBZ2GYNiVLn1L",
  "key35": "3b7p8sD3EUBKHtcd6q3C5c9BrJmnzw1ZskC1jMBh7Hx1V7mXAHhYBjrJ6JSeWZavLNasLXesCwa4CPofD4zey2uj",
  "key36": "36vZ27QRCND4sH3RpsDQoQVjmi7mEjKDYr8nh7LmAFsAPWjkSKD2vduavEE6GtGrEEQp8UJkfVcYBRvzKzNMCnpv"
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
