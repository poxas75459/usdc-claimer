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
    "py9hNXmzgZSwXEhAREUrGUhsQ7v6XYiqcPr4dBN5kdbki579GNd7cidTtMCt6UkgBwtepmzowBmAH7ixpjLx2kw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VewqCDQ8BuF1YxX5bdAo7WjFT8udrEXCeuYEhqjTn5gEibmJ4FEtHeGdzyRpWDtLkeNUWZs2AkqKmXx65kCJWye",
  "key1": "3LQb1u5ZukBjLxq34tMaH8M92cB4mWwaLLZLq8hy7iTLDeq9n4hWDQCWkNdFUFMsPkKprdeD5unVu1foxhWbNhxh",
  "key2": "4jA3h849x7fGg6svuwH2uZouWdvX2aqLeGq8h147e7U2KK8ctX6Wxv9C8d4VFnW6qc1nUP8wMkHz2PKj1hcqHXqp",
  "key3": "KFYSN8Lp2D2jPNHAeYHrGonMz8WKy4M5x4RzD5CUQc6u3miasRrwQkeYF4eyK1wLZ78MFbG7XjM4FbuUTuSqoQR",
  "key4": "3tFGpdUskXSxuovnuJdob9RG6GTPBaXFrXqFf1EZYFFhkeLAuci7dncg5AKFf1gp8jyLVg93dTHL1KS2tz93Ms8B",
  "key5": "3cwxptACoCzvzyXD54obx35NChP75r44X2S49ovLxGvuzJqUrgm141CCWryg6kGbsLzUDTqGAvb8CoxGuuo34n16",
  "key6": "2mvbZd2TXJByYpR1LeVHo5QUtvAfSuFEaTCpMDMPUBzKcSvRtQRCP9JiftYiGHkRe9wF4d42DxYs8TChYSuCRbPo",
  "key7": "3oGgHFNerpy5WF13ktp5tixUw4x2Qdu9vjbzobwcPYn2T1Bdy6gnqaDQCNp9cfNsoW3t2HkiBrNM1PPCzMM4qgBY",
  "key8": "zKnWquP8w4ckVxK6mvkZqHwutwVNZwUSHF6BPSPWTsbNUvqyWcnQo5HEHLrXPGaC9nnTTq92YXZnnFYu1QBDcrL",
  "key9": "2jb1S4QS2stPdEoQa8gFNWTUwg5bvMNgrYY3VLQhoju7WKxQGZ5Z7Ar8J2KD7rUh7qhisGf8LfzrfMpe77b9ENNn",
  "key10": "58qLut6oQXng2xTDthYsP42k6Hj1TMzf42ogKgHocYsQx1znDMeVJkQxvcGquAcotgDMiED9KqmZd2KUmcgRwyZP",
  "key11": "4cG8yLjzASDPLUAjQmV6FXhs7jPPhPEEMxXqkpzwKyksk9n8ZdxPYjx8rQs2c8FGo2QZpyzHsjcYUKbJsDxUgSnE",
  "key12": "2THkcKB3LM5ZBsPQHgtjWyomgDRmRnALpJtiY1XTs2dPct6EQ8oqGxbxozWWZahNqsQMtuqJe8GVpNcw1UVRDC6x",
  "key13": "5SeCumYQ7jXRufW5bitBrUe1TkSZpWVrTdvqViaUhppGSypWj97geRSBm5wMJv3zdsEapbRWtUuG9uwYbpoq9Cr1",
  "key14": "5QNENdYLJJcrRbeSHZszFs8F4oFe8pg9zxaWuu62CToupf7chdGocQDUBFX1mhGNfoL53N4ZFFNidQVPQePmeePT",
  "key15": "5LmnhbL5VowfmYCw9StAthHHfAgUWhbqz2eVEgDRkEoS8KD4cFK517vWEbAfqpBsvyPa7CL1DMoYttG9Y1M2s22f",
  "key16": "2xEFWMyR78jM7tBKXQTECU6B5aKK4QpmdYi9WB7qPG5uZG4jXbyXMdse19bBFkTuoJuchKkpmX4aPjotAuhRNjia",
  "key17": "4UoX7bz22XeW6vNbpSJ2NdfbW5kHLkZnGBe5yQ59zSn6K6fgd2a6RXB4jpztMoYjS4EHQWNZVDWRj7G3qyyPpeWp",
  "key18": "2KpjayLL8PCugma7KJzNgMY7x8HqARoyagnwUHqgpE6h3bphqPw8Ago1NzY7iitmLG5tLNaxyqFmpkxDL7GRiNzd",
  "key19": "4szoJpNu5yk3FmXHz7CCLFK7M9nXC2X3GNgoFJREgixmhTw89Eq57pK2kyxpNPBtRx8gBdMx876puTfAdFzPnaSb",
  "key20": "5od5pGuHhWkz51nJcGkSTkYMzbmqWjVVZGfifmABShKEGEzhfzEtKVQ49HevN3DT1pyWcAQBqvmrZPL2yjhuqV3D",
  "key21": "55fz1D8SznS5xRxKj3G4mr1xdarAL17djKYtcQaRzKkbKZgE6eWAoQYqDTbxjn4H4B6Ay8QhvGMhzwbEJD3sdb2m",
  "key22": "4ZSVpDtPpo6c7Qj6H7QNR2G4hGznaXBmwz1jBEHK5yCG4Wv3ZJev3TUTAAoXaXQ1bQYzvsh5YSbK7FBYu1kKSwxW",
  "key23": "2rujM23U49ionaei2eWmSaRz4Yu3rcS5YMxYTxvQDPQ35D5BUyek8UWDsjaH3K72fmyZjT7aBwq2zCAhGaD2cWEh",
  "key24": "278oba5ZZKoB9WThf55LQCDZWKkHbpWf8Lb6gx2fTvipxJpw8S2xP8ZS3yvYh87R9D72eTqsGqHpdDy31FXadThk",
  "key25": "3keVJkMPYfxHCH5zz621rsmaZ6Vqkj4vVdvn9o1RfgFFmsR8qjpsKcNbcVkrvBxZjDnet2V9uiuD1g1UnfKhXayb",
  "key26": "2YN4SYRaHXwvN1NGZ4ydo8XgWTr2Cjh53EEiV59vb1sb4DqEKa3enBTHtGTWFV7gzUJmWb5dXi2r4CzKBYuB8w24",
  "key27": "3XH4iiN7e9zBeaJevimuhxeALpEnHdTmD9b1Xbe48pJL46UVvAX3Hu5G4QagGnTiTzD1zVZGuCnE9fJSdh6s76Aa",
  "key28": "2jSXPfUEd3EwDrHtQByGt2GNTn51voaJAQpfqkQxXeZMMs5BcvYtSHDMy28qLpGjFnvQ3EHXVtEH4uQPj5zFHgjk",
  "key29": "41VAr3HQNDPPqpzNr28ZSqa3kehaKihg27hr2LnsxmwLFnP1ajskp8z6JPdPGFY73DG1skSjFL5Lg3YVMEZbFFQ5",
  "key30": "TUMPPteHUULrGQQWFtdkvtfB27345ktf8nwK5oFEBGXZjKBmPmfkZ6JE4oEsgK6Qm1yZDVQJuinRt7jBiZEMRWj",
  "key31": "b7AsqKjEaVAJp2iE7Ui9Lui1E9QB98EhkASVvF99TkWUCxow6jysjNwsyhvVUKv1wXZSY8ppz2tY1W4haDDFhA7",
  "key32": "5B9TeYkxAWCXwEC5xsVwxEUTHoA7S7msoRtxH3skSLbzBAkzUv2RtbgWxywJzGLmsuwsZWouVDEeUUBK7GNssWyn",
  "key33": "3is7nNVwBV7fGPV1m8cvKDE7Hq1jYymPoSXgtvLueTiF4KnvC4ybDduhNRz6JbaL8JTDXkzFHDuuvsopnjEokpjf",
  "key34": "hpSRJmeiCMUMUzNSBHpzSe68EEDAYwHuihwA38iSyGHE7LXNUpLbrZez2d53LeGSUGE66dH7ptzRbU5nFGKbBNr",
  "key35": "rV7AmjwoWswchaRfxZ5HYHN21YD8xFWRQi5jESUpswBVuuAYGUoGkxAzSwSuCG7hnLqsLb2xF3ncjmSRfKHYpYq",
  "key36": "2JNcjjzWQPDGP9JPrFLzKnVvYDhT8LzXWysWzPxM2HindYXCgjnHhoF6aMd4kjLMzJfZsT5HjRFc2phhMZTzDS1j",
  "key37": "4JynELvmgEFuZSaWmRdJZM2KFvUy6BrFBVr6qHhnEk9ScU7JBfWfGJvuopY5BFqw1LqkzpHzexboxQae7gnqYBWA",
  "key38": "3883BNohMoSVFN91iNNo5ZcojBztbgBJmZMYePov2abDZPCp3gHGCDvypCSGP1w2hE7x4SZAgsBKAhxHDNyav96h",
  "key39": "2QCjoXxk3BAdkwjCiZECZx1RfdbjkB667qgDA1HnRLKFKyhhWS95h7rGpxq6t4MqLCiyd9qxtyYa8ida6aXKDpTi"
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
