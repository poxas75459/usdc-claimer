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
    "4548xv7iZxnDhsaG5eW7KePGStfZaUjYmjejeiX7TpFL3d9hSbrt7jJRmZKJGRQbkAUJNSWqxCTmsT66rfwRqmKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SBVufTZPH4vrTjCSueAckpr5s4KanZtPdCbVRKKPGK4zykcy1JYEJkMHxmJUnX79T4b66s1j56D2Rzm8BznUzT3",
  "key1": "55ZdrZ2j6M3qSmapNVgNMetVW8kzVYVzdVQboUxNakc1JXcQzEkHda3LxpmGvBfyKVw61u7RHTtcxRKEaQmaknX3",
  "key2": "5JpVzCCTmDGEe1NmKhL2zH7qVEFL3Nofc7x7XUWSQozw58un7W6RQLRVdXK2Fnnm52eMV57FDK62t7uE9a1ChYYV",
  "key3": "55uAyTYDPAgKkNPYvar6aTRo2yGas6ctCMr9vpUjoTp7xb6hsTErFxWvC7T62qZAX9G4kv9GfHf8vC1QfToY944Y",
  "key4": "CxdyGUFV7x43iwRLuqY7n6iS3rKBz1jaR8MF56FD8XRKz2pnDyEMFRxpveGkpVVSpQUbHRpu177PHdsVMB7jo8n",
  "key5": "4NNyX51Kij5sRgKosq3ezSaYo8QbeFvRoF6mTG2RuV9XboHb6AkVqPxz6WiniWi6XXdC3Fmisy8busv2pvfFDNXM",
  "key6": "5H34tJZcKDShBULccH9FBjwZDcFDpm1B3NpARgjvTL2PBGZ6cTxv4tjN228quQUw75584QTBjTX2cCpkizmXVJQj",
  "key7": "3vygwRAuhkPCKnZWZiidoaD5tK2YNrCYobgR79cruQwuroeFBcnoK3fQ5QNEy7RsUuCwqmEgwu3ccetZxxeE6afp",
  "key8": "3pgQrhvDXFaF7wd84oFaDioRzudhMWpay7nGeJhzTGxf67T56V3mXhsnwWfxxjC1mFJFAdyj4hEq7XJHZEDET4cj",
  "key9": "4A3QdYDtzHnTryi84TwetkD2icAajAYr6jRM5Jbzh5HcuaFKSrpD5C1g1DorZ67uPaLxiG6txCByLUpfMYTw3WJw",
  "key10": "5P9wjyzt2hrbKue7qVu39PFDTahz5pwmJxAMq5Phh4vk5LGnFCM3Jrp5m9sQRv9cmGAfjnqekuNmC1XC7AnRBMWL",
  "key11": "49sxpTxZ8M8Ps6tjQxRu3J5JZiwTb8Dzz9J51kRYN5Zr6RRK15hHx8WY6CRv12LCwj9Xm1TdBCdVDpnsJUKenefg",
  "key12": "bnRY8xhHi8bzJC7DabxMKqRKT7JnCr8B2dGK8rn7k1g3vHN6sy5ecXxmdWnCjGcrNYqW7Pftdsuyf5kvk4BgsVe",
  "key13": "2gVNenJvdPkHrDKndUoMZjcAjxGvihXGVW88UA18idm7UfU2hEguLCJXn4ktSpzZoi9nC6LTNaocPbj45VaZtkYU",
  "key14": "2LBgz4WVwomL5B4HWDckULKmDsxhBbSzYjsvunq5f44prqmoyFBV6YMiK9x9SxLBhnYiHEJoDqV2tfRHUVapEXtu",
  "key15": "3mtVsL4SFSL9L86DrHp17RZwNt7nHNCPiySQYr6mdKahBR1jQonrUzkwupqWgX4aduDRPws63YcdYqR2FT84uECc",
  "key16": "27w4xCrj9ShK4j67sSULhX6FXGKGtZ2DQVWeoybTCTvPjnebHvnM8okqwvTtCZqoxU32kL5vP1BgnucJjbQhGyo4",
  "key17": "4Enyeh4re9jatbjyaKBXw9ZwLJBtVgmF4fBs7bWCLdydhgs2psg2feogYaG7asB6U3jSYNaCa8U7mevcPBvJpxFV",
  "key18": "5Ck3DYe3sRk4CwkHZYPB1Ye8S39v5UikFfaAopA8TrKyysjMC5dPA52W1bA5UvsapgDS92KDyFwae1qUYyZ13YM5",
  "key19": "662bGv4ucwQww7nMtboSCmnbDE5QMAi5NTWCZnVQxRVo5FjxVQtfJuMWu8thwiT2gnKabaeEpdGWNLKiE3RqVMoL",
  "key20": "4DabhgUKwXBYv61Q23AkREJtVftYpdTyaMd42dxBy3yNiZqaPZKBpjtXYiESXgUD9gdJXC4ckpw3F7SWSyuL2hGZ",
  "key21": "2zh5YUXp7uvQC2Jop1jzjhiTawMp4Q9zpVHeBYrsaHh3RstjrGEFViDEGUnT7FYVFhvmxoYhhy23oHYe1h1Gpc7h",
  "key22": "5vTsrb9xg9c6jKPp61z4DMBkbJEjubrDztFHkWjfbXd8fM9ghqcZuNqD39Kpntnpv8BCF7ee24sqkP9wGfo5ZYFC",
  "key23": "2abEdmGAbJj6uminJ6skRxDy4v6FP4sXRLGMXRJQeMCsPKPYguY9U79NWYX5XBqanw9SzXvufwc2HZ6uTKZpcuFM",
  "key24": "55RSjMHAR7P3ytpWHfwB7pgeuHRif9AWDdg3eNVzoe4KWYAKqsAt3sn5daFQXmXoTfyCcgvQ9gPkKKVnuGLMbdrh",
  "key25": "2JAhrbspa4kXufgBboab3LwCkXJCRui3wRyPqoLscrFcSohBPtPsRJoeVvV9qza5XfZDt3MKLL8JZwbpucspiMoV",
  "key26": "4AyQhBKmJatwNCX3ujjv53JHJPsPmwetjTwZxNARUkGXu2rrm7BS5KMiy9sZkCM9FfngnMYJt7vr2XFtK6ofG7Kd",
  "key27": "2YLdqpmhnJAkRj6GMbADYV2n8NhmkxHwbnM8LDyvbj1mVguqNLRESTaxbGetwXA2CXjtcTgDNg7YLFixi5DXGFHu",
  "key28": "2QkSVUY48RHre6qq6FMwfnbpe8iLezBg7aMCD2uU9Bbvqr8VyJm1bRgA2o36HBABFeNcsTgdkpH5tg3GvNngFUe7",
  "key29": "2xvtD4ZWwFQSWtqA2WpLp1MhRwZHHpzMWjoZMEGsFMV4AQfp3mzEwWGYX1yg6ciFnGmE823MpwYjLxUhCpNNLBHZ",
  "key30": "3zSYRmYZoPo7jsDS8CbSgjbPk1zMtrkweWqjwWuqBVwPzfTVvmdsWUmbtXkmaAGRuqFfT9qEPGmXYMNjhz1bUt2Q",
  "key31": "5PLiDMAQTcntDpp1WdthtXNDQxAPKFvz9CfCV8oHuUxEZ6nLEYWhwUFYmd7x9S7g4FAGgFhnShjVy41sixgK7SBx",
  "key32": "krDSHGkqvPpoTav3RSvw6gc5SUD7rqJRLPxJ77y37xMA1dPoQbCG2gNjXYH3vthb8W9AmrzungWE5xw5a3b9S6L",
  "key33": "56PUBsEX5xacChZpq6wK2AD12u9UWrrFhztkFp7qWZt5EvL9JNvFs8JrA4XcP5UtxbpM116Q6d7MnvYYPePxqfXR",
  "key34": "8jSa39PTarjWhWy7gfmjuFmqGjB8xzfoTa8ddm8XETLfywZ6qNcCL69QRiqZbGHAi3gfQeyjMabrBLKz3aW4aL2",
  "key35": "3nReb8irxy98RYYdJGfdPBJ7uxRDj8uVxBU1TM7cHVdzcLSeBCjWa23KMebwdkV79Pu8d2VVP1Ym1zoY5GTnh8Mq",
  "key36": "3xT4ZrKZYxDx61pa6XDttjoFyYaj88ZGBrxdta11VXfxyUe8ZbStnWfR6X7k8Wo7ahnKhRtvZ8HsJ2cbTdcxSJzy",
  "key37": "wX5KQM9uXtYGVeMDtKrWeVaZbdG1z4dtDt16GxFHQskFaQgPajx51SPnNw8ZgxXUKatmQx9Po8fFTRTcxJxPYWS",
  "key38": "4JtgtwnFJsnJ9iCgZD1YkdzN61TCpreuVvhuMRMyNgS7eNndRGzjeUFT7U2nqfJ3G6WYVvbv1ctKTu3RZMWW9siR",
  "key39": "5SUC7BncGjQeaw8PbqaN8wCrWjeeG7mhVdBqSSVCwnamuPAfdhKKnQkUDRUqJg5XshVZayWDAXjro2sBvb6Thctm",
  "key40": "4FU9RRU5ftsGA6SjGfo2qW87TRHb4jhj1cQ9iGTLcm4n9gPp2H78rqzYLm131LPZGwqKYkwcsBjpUhRmhGN2kU9p",
  "key41": "4DjGcwxjS5DGCo8W7bBFmmx9SzkQUHDo9wECrJrd8EJEAHv647Fc3kvTRUw2YKboVXByGm348DLVJK4zYsiMDwzX",
  "key42": "32hcE7zN5skLAMobynk5kLce7J6muiV96jTEKuWPepyyKfqgqptyQuFFzYeGcBF7vGneYFxedGBzepPLd5pT3rHY",
  "key43": "66BzLXXnvtoKW3P4PumCtFWFWyC13aXsybJvPd2kbcdBNY7KhvjQBLg56xs9iq4xiMy9dduv72s2qUw7qyoFTMVX",
  "key44": "36bYut4xoUgmadiD46zyxyeVEG3v3UU2BmZVJ6XtrxYmzxaf9CDmuAcXeuHdkDThZsC7iT1KZ35DBR4esWzePk2p",
  "key45": "xb8n4z4Mns8XDMVGDt8Uhw35KadceFBhyEd3BVwoCvo99g8ML5c9ojvFR3zSXUSt2et7twBEJ6GdkUB9aihfXey",
  "key46": "2Wp6Nkbuvd7yPL6y79qQApY4QzDU5Jpucpzg9omA5WPANL2yaG1cM9wyr1zAcqd1bSSZhkrAYoAEGv9nHGygSeFn"
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
