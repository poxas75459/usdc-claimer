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
    "3fXfvLwcdF7khET71Em5L3zLVa8DdGvsBJfADpakia3fx8FyqwbLTLEnxVpoVM2JZMoSCbbj1QvosJ8BTgbF2V1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XBthnMKevymks1RXtUakDjaeABA61NVC2STvJGzQLZHtpnbSM27NbpJV9kxY1s7FbPko7nAuxTVaE1BeALabJUh",
  "key1": "46voiA8Fv9pKjQPQR1DmrAXQNq2cTz44rUK9aWqYUFzXKmFwrDn2MysrDFQnKhCUSQTaD1KF9CC5eHpeg4FWCTk9",
  "key2": "4NP9MFmJoE9vNdr3WVPf5vAQiCCDJsuDDMprxSBYGdGFagBdBu6321qgkWuMXAfX3zPz65TcgaHx4e3qpjqs7oA2",
  "key3": "2jEsgUWMg9ABy3SUMhFDwmV8WQa1QMEYBP1zGLiJBVNn16r1CFiGGDD4nj8NTcymmksTUujAjXmy2WTujaMZ5UTF",
  "key4": "22gnYNC6VMHewVV9gfqaT3mmRYT8TSpJ4AK74xz54v6MeMjBVY7MQqY5wxRLfenMLiKUqqxnTtK3z8qsPmn6ibGX",
  "key5": "3v28vJrg1VgbCHTJSrdzVAcVGq1wfaUGdCqKKY52KSNqUkNnc2GXkjtL1cKWhrVhtkiRKJQfJKXpV8KiCFNC1E4a",
  "key6": "Q9WobiMS6FDx9UuVJFBjXmmNpzpSHoPrfkRbu9p7B6q4Fjry23UmiQin91v11C1YwEUcLf8QdUNLaEGh4ySYNhw",
  "key7": "3LPQqzehr4ibTGRGg76m6EQJJGj9GsoUrW32fiju9q1hZagrHoxQSr6WB5hUfEbKcXUv7XTDcMmdYk6zDGFgZFPM",
  "key8": "mvcMTzmbLDtrDoiYTWoC5eqTWaDLLNrnjF6mkXyzFqQzTCm7qwDoWzSLxTY8Sv7tiDoNuQLMJPXaNGNjYP8eWDp",
  "key9": "3Xb8WH915pAZC7hGQFmiRgLh8HopkVBzVes1ZsKs57cUi7Ctvg6gmKo7gPTXCcggMdqXJkp15tYTwqokD2vbkYae",
  "key10": "4k5rv3kX7YZGpyUTwYugPKwv22HPw7oVCrVuWq1XVzjTcC5ER9rwBEYoUYokAP6MaAn8mFM3hWBc1gpmAghs6XV9",
  "key11": "64nrjTDAZHfuM3DkwSo1k3rWYq2Kj7ZwXrUqN58aNGRRDEVLiXei8tk3LrbKhWvyRXaJJyqdtbvg2YBEKRMn2afq",
  "key12": "448Zcqkb61xLRVaFrTFmuL6DJZW2RhruX3B27kiaMXFm9ZdJvtubHDnDhXsRgcALYVMBxmT7Ume5Ukwqdqb3H1xz",
  "key13": "3WvorxDiQQUWDgrtxWeAVc3y8dx5CfzzJGhcCmMCYULKdzW4RgYEuqpgBZz6XjNboSKaic71rQJi1X6Te3zPxVR8",
  "key14": "2z7CEJrsvk9vB8aH4sWrb14ifZDbzgFFeB8af9D1oUu12LParCzCkXH4hBBYUiqvC88TAHzrEN9SDUHWPd48n4hV",
  "key15": "oiiFA1RyqExkMTcXno2awiH6YdHj1Qr48dhTcidNQ4Luwo3RUAxZ6aLCrcNpAm4cmtCxTzTEsq6gbrbSb8ujfgt",
  "key16": "2rzQjnu6pF5bguyidbbkYH12s7dgDasoeP5i51rDLwqkSqLkqgx4XigRngcXoqjt68DiMqXb32GCNyG1xym86bdd",
  "key17": "4vTbdj6xygn8TWQxzYEQ4xeDRZYZSPRQKLXGRBcMrQ54CdTThmrCTZSGL6oRN4dXjBLzhPZx4HBC9rzHX1F5cUBP",
  "key18": "384dnHQvMmMgeS1vfYgPkg8sn9XYGez9SzTJT3ss7JeVAHv7YV2fN9AopL4awmFNjcms9HostnhkDBtbSth6U4CU",
  "key19": "5CiSJd4Zae5Gh2XHMLWaem5oNrLZY45k9dMzxMezJGrLtrBhUsXLogN2ggLpbmrrWFk4HDj7qqjyUpaQX48ySWnh",
  "key20": "2E3xs893d1Ua2RNaqhor9oPRQYa1NZqFqA7TpHBV1MCvpZSRiSt2THcAF9HdiNJKrnJCG47UWxoPkhQjs2ur7qa6",
  "key21": "55jrcGyzg5u15YN71i6wJZKBWdExTzkvS91YpNYxbtksfGsjhWXVLmXxLp9AV7n9wvG7UK96yP9ixbQBv6LpJTWZ",
  "key22": "4DCLGcHYRCJRbpWeuewcxBzdcB4kWxDbLfsBAkt9LrarmE9RCo1SRZG8WhibBEZXSzfZMZ7eemEdPm3Nnka3yhRU",
  "key23": "3xVuZEf43RSfZLRGNCUwNi5dVdP1LoC6KE7WHAPu5mRQ8vYk3iNeNcUkpPLft8aj2NE7GFMWccPycrKxe4XDSKpJ",
  "key24": "5UpZTARsXLuKBt8CCGHyMDsuXz8g1QJbS3fRcNQgb5wXKd7Jz1LErg5n6wUEmb7mqvg1c2snngX3efDJkYiSkTvN",
  "key25": "3qxnBxNJ9gEMJGF2kvkLLfCkCcYc2qBBSh1pJgvTVVq3Kjai4w9qZuERboe7KHZ6ZhZBTp6LrJF9gpFipkghidGY",
  "key26": "2nxuiD7bunNHmY6HAXRnLZQ18K5qAiKqz2jc9BUiHBfA2F9MYqdEX35UnoMUEr2EAGzZzAsmJsoxEjEE8ogRNJYK",
  "key27": "5TxZ3mmLdJyEFhCHXEtGVF745GSVDayQyusZPWo2nkcJj4zNWhqVBfQbF9FxL96rKBCpy2UQ6jm4jg1oJtUbBGw5",
  "key28": "3UUiwmcWH6bHCBQ6mSMEBLWm4TZjgQwusKiGyLaPPseAdEU8VcoT8X5MeUzTZqDo8GtrQvH9CBBdBiH2gdNkBBS",
  "key29": "4YcxZoBgzDXLjHCkwFt8tVcS9ppExHqZpo8QmXkhnVRBAje2XihiC5GGe7rt7W8WvKTnHdN1bz81MnKJyHk43WRx",
  "key30": "28fQHdiz7Gzq2z9GmtwJZLGeAh4jACokgoMzr3dPAUA3T6gWqWo1TUSqnhYx9LxkHrZEz3jcHKDJgXNqfGtSaFJg",
  "key31": "49vzo13Tm7ULCqxVqMuYXKuQnUC3i5DYpuYWsfxt6YLaXMtNmRoFb4WdvBfgjfsPBLkQSfaqiy9ibARQScKFUNMR",
  "key32": "3CXqG5WuPkXU1WNatE9Ft54r8BH3t7TAmYdsq4KLdtZh5w1fsPtzQgjnCTr3BYaZE5vqp7CFGzyogaRwT3dxVwEe",
  "key33": "5Yp3roTUhSHg4WFSwcgUPYUr1yYWNSzKP78YgigKDm4EKEHZxjW6gFu6gvHQMqRvhRCK6YzrEe89bQHW2GbWFvXW",
  "key34": "3iKFRxkMcg6day3DYJDdnvYsNk6dtYDgqZJfvZLjsmope822yNg8DRPPA1rts8QQ6pukrtxASd5VcaA8HBp1SCMD",
  "key35": "5LijqEtgMD5wdrqETJp3cEooA6WGBD1NSE5qomNpSKZL7GNnzrTfucEFT43tK7fUQGSeyhUdH9hTmjbDURD3MiPs"
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
