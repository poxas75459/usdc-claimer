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
    "uxeDPHZwGbPwmNEu9VCAMP2UFabu9Rp8NmtUYitfDZJ6ixzKbevXpT78vFr98e2osfjUMbLQN7Tc8RFxJovP9tJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MxGhj7Rs6UtyJo5WuPQUz5voY1PqfX2QEgknF5e7RCyAucCp8E9x4yy1HssPbLBFy6rYywBhV16LPyBurnZqmZT",
  "key1": "4bnYMfXVJ8xQFXj7tx6ZtFXPKrfMyomtE7YNcxcF2ZEQBvycD5jK2p3kY9z6BQbLWbFS59eyTDZr1pESuW7Zrr5K",
  "key2": "4qCBerz1BbTcVHBFkuNphC9gcQaCepJD57Ami1wAcqV4bbBq9KZDykv5p5A8c3q3hHfgMqa78wPZ63Rrw2pxfsU5",
  "key3": "3dz1vDrKG9qNY5rEvdhJm9kEX6A5AMX7mGT7wsY3P6D5jDnK6Mhg7tu7Q7ZmuwvFiaYaArSj3cKSPwriYN3jsVuF",
  "key4": "2X3tfTvyqXpRvAiSCEHgfriJdrdfmFZSeyuKzazPGYbNkEn6GbyEJY6EGy6qV1AdsxtkvjePrFxqmmx5GHvCDTsQ",
  "key5": "2jtNZnbTYdLh66wzNmmAyVyYxXUXMrGYxv9X2LMJnLjzCDXPQzjXHYQRf5yzuJVKoYv1GX2WXGrB3tBpPY2P6jKn",
  "key6": "54YBvC6xeEsSb3v3HiFqMucUuVKv8NKc4NxbERnCb9wvjLTBwXNWVmw2QkaAFA22ymX7VT9H5dJwbGZgWSRTu95J",
  "key7": "2njNJo6TBjsTRC5naEr7XRPBZ7TiSvrEyLXeya7fpLXMvHNEkC1Fn3AK3TFizZY5z2eLfDjdXSgab2V95jfWmYw3",
  "key8": "2tutbJeCADWtkuM8z2wXdjkKSJ87fgLXBHhGGiQjqTUF8863xqitFczWDJtriGetLmuRxGZNoa1aawTgx1UZ76tu",
  "key9": "5xJyx1RCzmbpFpR8rkDdqG8wpaPY4z5ViT8QpFtfS5crBrfAFGxKrLzmAN6qw86r2dsRupGc6rKRohoj96ZeQU3t",
  "key10": "G87jV7BP3PVhRCtKwZo2Vnb4FH4wCoBxdFhDdvQ7A4yuDd8ZXqTjK2LrCCqeYMY2JukMQPifbo6wMNKkDoBKzi3",
  "key11": "3pfVGL1Xavu6Ys4kMFrbDiNyQk1omrqoCgegWCbDzVa7Sk438SAuFqxECxTwkqUriuoauBLDchGjGT9eVQRzNzS3",
  "key12": "38zfEbqipWay8MizVJExDFJdXhkR5pYGchM2H6RtRxHwGsqnEMPnELDMqG287mJDPpGocGraDpW1dfiRjGiYrK92",
  "key13": "215PSsf7VznwL3MXzBNhC84tTZ6Xr4iLKTPZ82shwhfptRN4GJDbNgsbMeMBt8bcdpud2KQ9LEfwrLWySnLaJC3Z",
  "key14": "5hYd65H7eUmUGRiqhuSu98sAFLe7NRcNaq3erYs26iEPD2YXBa3LaCgjxZUwFktiQCqFmHHWvBRcqxKMZqx2jyaa",
  "key15": "4Y5d4WDez7HM1TEWizhQioDCzJJ3GqjogfLF9rjAZETe7PWRHoF5DyRqjzFN6Ab72cpXHNnuLib81V4uSM2Rv4Zm",
  "key16": "29wxv1Krw4aefTGbMaexgVuLZbEaNQ2v3Qs9YSuLT2WTQJrwK1XJ4ABuaRaDEeK3JP7piF2zE4P6Vuyy5E2HUcSP",
  "key17": "3xgYDfnf995zKGfV2MLzq9YgUXhbE9XJUkWWm7qoCeM58AMh8HpifQPHFScfUaFqf4yEfrguNEWTUSj5Lzqvs3yT",
  "key18": "4NB5a27NMjarQ9t884m4siP6pDK1HYGuk8JxfJNpkL3kLEt8HJpZpt14U76DALyShdtDYXMcattnQaDU76agmTYK",
  "key19": "acePVtYoSgMD8DfmxM2nYReqknUhFRTffAUwqp2yfLfmqMaEcVpiYJM1SHmejwEUiPZ3yR6bYVhWKwV6qLxeMhk",
  "key20": "2qZuFkaoHgyZyKCZ5ywwF8HnVizdGmXx7AvKvWhaKe9X6mddDPvjHGGaSh3aeVyE6XmKZNC5RNno6p1pKpiS8sPN",
  "key21": "4CB3XXeHhHpBpBXg9HXuFGF7EgDYved4MLobWVyit6TTS1ZFfWRGgw4H9R9oC2XVWonEmXdgn3V11xgh8SqLWkWz",
  "key22": "29pAdM8xgiRWGBKnCqS3hpu4bGgpWf5qUyEG67KHfXUgmcqqqVNAhKE7bU2WgqNYHoTq4ySPq2KUujSXpiZpmfir",
  "key23": "5fQPxz9eyNyKkU8rUScjN9NXERXz7X36i9GzvYz7eKcpARUXeWXBoeb4SwgFQ4z6L7XbKSLKnQ3awq5dqVfFVh3y",
  "key24": "2c3qSYJhg6idadxvyAzha3Q4cG9ScvjRq8ag9qG95kRoRvLzXmTuJMqWezUHE2C7dWvjej6smsenNFaA9MZRTdP",
  "key25": "2QNoN5q7z8KzPT6phvs7ska7zTPNoWgS8bzR9cFQtD3hpi4sR88ZtWf5ypQ3WbSqKSQMa5TfYyGkiUwXEDW379QZ",
  "key26": "32ftx2uHftoKmzhBCekqxzj82dZfNQpu9kwZnc7SPunaCMsF2cM1tktCiWvt4zXQyXeWEWxrx1V3AwfJETLhTQuX",
  "key27": "5TX43RZ2T5sZzLpy9YZjVpF3H67HEG4PpRr8bGYsWPBGqh7RYcCfWo1sHq6YQPMyXHoWc5iceM72uCye2p7zBXtJ",
  "key28": "4BhtXT7iauL3kQHZfYumg3W45TqsxQ12hGevjUSsopENfAZktUxsXTZwWgU2QynoLyPU6NTGafmCgACLLyRA7YRy",
  "key29": "evHByoyiRRFFg5LKqcxuMeb69Wv9XfarRY2q9QNppeEHND1bwWHzXYsWCQefZBhnbXhFdqVTsZyJN6FmJ3zF9gV",
  "key30": "4deTMKn96MUTYsDsdfzvrD4uMD3KJiLg71KBL3HtJMsrbEiRZ5Spn9zTvgchmFCGsiQ18XMf4h9K8KXNCcyhZ6HF",
  "key31": "3i2RCgaiUDmRxR9vwmd8vwCUkQtR4fDFXi6zG7wjRHGtXFX1QppSYVRqQdjd2FCg83m7Crwfakdcmiw7ukCXVC4j",
  "key32": "2Q22RY67jsRRiAAcCsGDGy8Cjk2MWNN3Ypj4ocNkPkRLnzzxncTrC31a4ed6W6zqCKV2VXqR8UFZ1oykxKFZavAN",
  "key33": "2s6BGPjqh8CoYyQecdDZKGdHc2hvrjLffwkt3Qz5cUJsCNVSrMLWDDhoNNwHNtie3Buk1M7KPPszWPCyziNxfEgr",
  "key34": "5wXfwV2M72zhU2h8aZFF9JvP97RrJ5TjNZeDzAQ9uNpFyxHDU5NiF7ppgaB3eGthcxUFYHa9t5aaWdiwrKAVsv16",
  "key35": "444beLVGTRzkdHwfZZ15NDWKZwAo9nW7krXddNeUWAbdgLjswqouoryUqhNXUAAtQB1GDQKmeSHf1zg2pg8KgXN8",
  "key36": "5KdqMBHfwSELtvnkksHTuTFhZ3FkSMrd4J5PRhaffPqx4QEKyYtnp9QKozpa8pxj2BSDPwRwfgRYeMZQMD9yySA5",
  "key37": "3UruC7APXm7pSH6BiAcuUxognrfJarxPw4oZLktMwo8LCDmb84kQpaaJrUZtYFXeg4bBFP68imXFWjykPB2EcziJ",
  "key38": "2tPkJasvewJWeBRoiutUNU64J8FwQNgneasBxdyxkUgFP1yAdpDttvtAeuEYMhHrCdyUf9k4azbjWGqFTpSGC1Bm",
  "key39": "3fvXNdwZEEYcuAZHRFnuoiDjVbpoABpQD7Dps5ZdGnzzWHaSZ5pGRCeH4CWLZFrCZGPGf9poDkNMtbjupphVndWk",
  "key40": "2RxbErVcaLS3xAAwDV1EdpL5VLLxh5tbv7oLV7LHKoKbeSjhKXZrk1dDP6xHnvUGbqp9U2mrK8Y27wKkVFhcW6Ri",
  "key41": "4CKNnFnWaLR8Xk6v9Vq7VMyDNwSJ9MFhjvK1pW8ZQcmZLqST2q8QgjyrEuQGEjY4SaUWKiroM9PutPZA79po8coM",
  "key42": "CPvBim3Sw6y7ZGfLurUXB1fHNjJaYDGDTBrigqpswuXEVad5RvYJeZbiS1egMuizpLMBkndPjtU4DHShdChtFW4",
  "key43": "3ARgVu4A5noXLHDpUVZZZLioBsVTzUP78pL7tHke8rXxpyWtbANqHgDD5gg9H1hhp2ZfUWuWWMjHNc3Zax5TSk6Y"
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
