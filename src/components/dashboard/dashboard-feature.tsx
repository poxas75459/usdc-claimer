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
    "3G1qbCV73Gaf9rMyfHMYRLf7jeJLnfWK4woxqRAJPdQdu2NsuwES4JdJynSFcuD6L7TjbgFZ9qUenhB52dhnz1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WTSBBdJmFeYBPM1R6GcprtSYTpqCkrszdHcesZAQWuDLcyMXoKmy66Kq3GKsMVBNJBsyhE6zX7M44m9j4rLemhA",
  "key1": "4YgiMWSX8aQR8HGvxFyXAPuJoL11mCFnrTCLSjFRizZ4PZTiEqR178F79oC9h2Z2UMaxth79nHMwpUZnJ9MR4wVb",
  "key2": "v9Rq7UTX9nFLWqiHg8wvRibWXQSL6cpN3GzX9rf2v5Uv9ckSGJALSbWVkAfwkfghF6mTtYmp8EuZ1LK9V6TDZP6",
  "key3": "2nycrUDKeXfmnkekRpmFEzBmmxFpG2qEceagvWt2DSVhk6jJxu1hmjvjRZL7SbVHVv7coQYbmnqNDXrGE61bwm8w",
  "key4": "4rcVRpQ5voR7HszyeJ7DPEtUXTTCoGynjFEVccLhbVyfZnH1tF64j3Mowp9XuDhSq2uFtpwLy7qJMmrcHDXe1feW",
  "key5": "3N4YGRQmBcoTUnHdNVc45cLDT7zG2HKWVzBvjMDupEAh9TiJWGGaRTYpaacXeXDb3xUupfQuiJrsj2BxqjwJ2BwB",
  "key6": "3NprFvEWLtwrj264XbFsmnC25AHmfsGByxk8hLD4G56uxndknqMidJofkM3zrmiBw7M3YNThXPYqaiNpeewzk6Df",
  "key7": "3R3W9Rpi22KJ4qtLHgkJHQDrrfaRgYHBnnK5na3jWce4qWYmeDwX1Hn6hmuEvhrh5Qp1JEe38dCUWNQyYCzxaGHu",
  "key8": "66ZRZTqdnKzvm29gXc2sGPk715kqxL2XD7XEVnXypVuhxGydBEnMSvpMpB22unniFW5QJjJV2PV5qHAcH1z24jLy",
  "key9": "4uyN5vt3bEWKadU8CVe2oNqEgoUiR7kg81Cfpa5oecAeBYx4TyfbyCvC68RARG33MVatt4Lm1z6357Db6r4tEmRm",
  "key10": "wrtuLnrqhYZz8PY6Nf4Mfbkv66oP5nUSSiiCHq9Yy9RLZgmZdazZcHxocCNG4B85dkCQCbSXi1YSU2C9qrJkPa7",
  "key11": "3GX5mp6u3FwjaJMJcHf44mSkBKLfppZgNiophPYeCT1n4fSTRCeSjivcJ5YBVVdEdcgKAhscNUVj7fbPEkTYb7DS",
  "key12": "37gmFE9pBZ9CcX42q7RcJG4DmP8YFmqHbkdPDJc7YZVoqL5hnUb5KBZRKZDqJC8ZdTxAUnJh8LBezUr3uFD12ewK",
  "key13": "2N7qXBpGWSgPyS2TdoHvwKwDQbHxh6oeJrmPpiHJ2STrzcwZAyB3L1sTLMw2LK6zun3wXWKCT9jT3ZJQehUDSG1H",
  "key14": "3i4ngHCVHECW5pqWpuaP5Tzh6QZ56KAH2NsD4ANq83ZzzBiw8W4oPSuKTKnwt4RMtakkzWTcarsZEypfzGqoK7zW",
  "key15": "3kfSpT7yS3nFa4sTPLzSLNYQsZUkP2qbQeeoqEAcyaD7GEbznk98iKH1CmLNmyrNMLW4hjVhxY37ENvWDN7fGKkz",
  "key16": "5HTdEC3Uj5SSwc2hem3Wn3YTuQhKLEGLjXQbx7omQCEduAxt9ZdJYthHz8BDP13vupYfk3acvioqD1KQ1ZkynEc7",
  "key17": "9wGuU2GqMCi1ucWDCzQh4dgf9TE7NHi9SGgyFsHn9oY2bkHGRR6cuiRox88kdfryj1jT6WG5TSisTY4xcKB7Ls6",
  "key18": "2fTNJvRTXusREBsjFu3vEyub314V9XqTyZfzVjSFCJnv48AbNxx9BtLbP5zGTdsQberdH5cPHYDVdWF8PsK68AQT",
  "key19": "3zxhG4nmnDbwtdB3y8jaZ5e2rusBWrTGBpr8dwdprN5JaCeFK3EZdxDvCJZpjpPWQiReFfitr7emGGMsmpMdic2w",
  "key20": "5dbGpe2xiChxi8v21EYD4cdAwKkWdHdEG1mDPwbKr515kZWxjcZbrMz4dZ2AHfA2joLpLae8MKRCRAw2Qq6sc64A",
  "key21": "5BubAG9RywLH7TTDSjesVh96qRgY4U6YLeA3ELbLzQErXzzAjp4PDpaoTy7dZrR3wMDPjuNCvmGvNv3Dk6C8VBNn",
  "key22": "4Y2yEZkC58Ym5o7YpfJ9ovcntp5sbx4G9aEG5G3JurFdCUVHgFMnN75hWr5q2ieu7HB17yb3h3Ye7cmfrLF1zT8F",
  "key23": "B3wGKRGQLydfVNe7hBgab8aqUVntRwAzp84zZV4DHoyvYUkxxUJzhNZVPUAtSvmUqhcvfXeEFB1cQScUfwztdtr",
  "key24": "vjWs3hYzZ5tU5tXU9dfykTa7PBHx9LNEx2bC46iVwe9WsS44EYTtxjzeeyirqwmbvTiVDfVbcUcQmHYAJGQJzcv",
  "key25": "3ouyaz79uTLzErc2fVCup9hhyN51GbTHfJN2D2JZ4hRtjnAfoQZuvWVTvuknfufkLD4tqYzVh6NV6xMpKdYVjLHr",
  "key26": "3JtF3vcqc68bWDumajAnYZFfjzENFS2xLkQMfwYgP9K7dKecDPtytGuvYiunCeZUDDiMfkBXHr51hRsUoWJejB7A",
  "key27": "215sk182gjM5vK7Y6k1QN5zFQtRdzwFTfz9nnhYxRyhvex5Ne99SeV8zPiLfc2mKTfuAkueQwZfJqsqysYF5ZQjW",
  "key28": "3U2jbGUY6QQQSnZvovimq9cVhtH462bLMBiz7x8VbAuYijhovTBdDmrshcrXMV8EF5gnGq3zgCW9Ynso9KLssnWJ"
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
