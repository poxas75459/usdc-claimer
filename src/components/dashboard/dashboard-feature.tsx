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
    "4pPCim9ps5NDkZX1yi5Z13ZY8wVKoptncEKDi3sNXcsQosp76EsFDU8ToR3dPSuYb7HD23TMR5KZBYG65RrGx6L3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xDSpJhvopfENk49ZhhtosZpEzr67gbsdUCWqeTySnAxtrEiBgmLwbH47kAA1ALyxLm5MuRTremZbZvcqCK6rCvZ",
  "key1": "2SAwammTLCuFuZ6vjhiSkN72qGGJRxDAS4g1enpYjTAT2vvVv8bLHC2RnoyM1W3kLbm2iXC8ZB26Dy4FpGraZ3mX",
  "key2": "25R83zmy8Xj7u3k8KD33NviVbneooidWHinLyGafb2R28gXZP1ydxcAbuha5GmkbLehMRQLbq9S5yUHvPhwu6HV9",
  "key3": "24jd6TN4UGuGih8PcvQjcEUnvYvpTegUgSyypAgR7RJwH3nZMtzF4GRn2EGhk1NVgM3xhC3pcHsGy2PST7wQPNRE",
  "key4": "35AmmbiXNusiMuaDWoQXe9NahsWiuFRJGqpsxeHBiEEncrMPvBYkqspRHM1xtLvuxxu79JQpwyFxgFX3QxeDPie7",
  "key5": "5K4UwM1eVNRrv41damKQQZXgSQu6kxiEA5RS1FLvVi31mJvUnRWwcSoekJpmJYNciR5rhhyyMv4WDBAW1uZSDe1v",
  "key6": "3mdbYwTz664jgCRWzV3PmLew9aTbwvL6C7TePXAYmkcdFWpBRhS2iEGureQMcwgKmcSMK4CQnNL3tkKixnfFPF3Y",
  "key7": "5Q2YkfDqxT2vydWxm9AWewi4dqyVox6L5L6Zkti8GdYQsYScyXgY4Csz8CcbnzkoH8R9Pdy8jMp531cZUcXpGsXf",
  "key8": "4gbRrKL66MJfMJAbZf4RUqDahEygNrEBhmvXtDnzCsbQ58YtkoBX4w2YNVGK5aed6Zf9A6NtHHuKmcrqRgvmXGFi",
  "key9": "5iGY1aJfqXrRYHdwf9oGzpjtmZo36ii9aYDvrHLc7TFVNUSeBr8AZVqsCZSZvLgfjzVZSrg4PAwEFvM37iWMEei8",
  "key10": "5s8D9VotVkNESppb68tjakbKTATeeLHkUrJTbUQQxkNgkZxMrw8ijYkznRjNjw3faUtNPxRBN1q4317jW2kPewYH",
  "key11": "5HzJtLHmvGZ4UeAHT48cWHyLKZtiAh4HsoMZLDnHySBJRqosGm68QpwGBt8GG323DfTEWh5nEo6SSvw8qW1AqHMP",
  "key12": "4K2DcrH8kzuc9yUD61jirY5QaBaX1as3kZpaBuEwihcKQdpqpXzUgQjoHqGQMxgbguoBF8D6b3QMC6bU6J9MkERL",
  "key13": "3wWV5RnAKmDdyiFDuicZXqfvWvWsnGmc47xNH5XfFhtLy7WDQsG9ThKeDsSV9LENVmSNNVy4xqZWKB8e6ziz9bDn",
  "key14": "2QNYwmh31BZdb8F8bExEjuX74J6jPzSzVdeY3Q1hVxS1ThT8Eny1pVVsJpZPEmYbhiC1Gifkszfo1oZxUzVSzysA",
  "key15": "3XPyM9Ggz3uAbb61yAmtWzEj86LXUX4GJFdfJZeUkW9sZkwA5KAJkd2ShupbFKHxPgyQFErNMVfk9B7E5uZGJG2G",
  "key16": "5ZrVJLYVwqB272oTN5KkbjMSamMgdL2ZFwvRcTeaccFWXaCJWE3F9U2dSH1TYsi1Hfzz6fmrijKeAS2azvY2DXmY",
  "key17": "4GcQFYhtWveb8soFWhm9attivU6DfU7HtiMAAvT3Hp9qC1WfwhfjDpsShSQvvBnN77YpircSE48XacJCe1adefSF",
  "key18": "56hxJWcUVVYDt99nnJEnbjKup9xggqSp7Fn7imyKo3T2vfZDmGsGN58ucstqStHhubjwBrNtEgC1AxxqKZ4gpr1S",
  "key19": "Mx7dFW5fAcXsjnXBUemdpiQJjWjA5pZCUfdPuRQqe2o3dnESpb1sCzTafCKruyFPMNeFy48JjGbBZTSsVAvsAZj",
  "key20": "5fL3pn3DSNZQNikQbJbFQXgF9AwVxnd4qpZV6ZqFoXm2rpCpiSqitFapX1U8umsCwvvHjeFoFhX7bWBd23HLJUA7",
  "key21": "3u8LYMnymVhVHmTNpMgAYThCcaHuq5vRDkbKJmY5qxf7YoJf1qYRRkTuDTEukMNhojvwfyDyfSUM2fyp4UvG7ybs",
  "key22": "PQs8p5SRQzYiyidvaS2XEqJqm2HbYo4SveacW5EScDrBqshz3C6putRRMnxYirQsvrXXyXjUVd3iqcPFWS8ExWP",
  "key23": "2g5xiJbWJFPS2cs1kLsRDMNMywTJFbALVtUVYVYKmtQqvyx4HhKrvqcWY3jWNopdhrJvKHPyTfHjxXhPEh1Dtfjq",
  "key24": "5Gs4cywmxQNRYt88M4GRBCsAQiZovGWpbymNQrp9PBzvR4TLL8hreCLPvbj6YUMzFUjFkpzZY7piCMDrLBQ9aEr4",
  "key25": "5A7po4kchML8YFNt3uYw83pkYQ9r5tW6Euyuq7jTXYepZ6EVCbYucWoWpt6yoX8RZFSLkDXDu4Joz3mK1G5AAeBo",
  "key26": "5tFUqGuhGkQQkKZsWwVKKyesNLWsQArZfkfmGHe1eFNVqgJt7FYNu4ndKZ7uU9CvTckQyv4oyGg3kyA9DiNQjouU",
  "key27": "DV6nabPpTr4fjuyekRboEVeScjKaF3m2bKsZ1UqSo7czzvP5FGDEctnqzbe4pSWkhNAhXccwsj8XCQtLFaU4PD8",
  "key28": "2MxdRmm9HovyQsUcTi1JVJXGaCLmiSnPg9AzPmnoMTmq8w2LafUyZxVPE4SMwcuNikgSQnEQRMXDcr3mvqKE59zT",
  "key29": "2njt3rNnBhE6B3oW6Si9T1occy7BUWbj6dFY2GZyAZygmK4LRVJaZGJpegaxSba8eSgdoByUPiuv9Ss4SyV6ZdPt",
  "key30": "34CHzZSMGogKoaEc2ktkdAovnyHh7N1TUrx77E5BDrkvdN1hSo6JgjkD7JZSt6zgBik6okT8S9MkaAZB13dgZUnr",
  "key31": "53rfyGVDVNePp7biZL4VUKa324kR6hM8UvcVDqbh9GkZVtQ1AQvWmgSATb7SRAW3iQPhcBZsedfBPrmUKZA1idNS",
  "key32": "5QDinH7MsiDreL15UhNokW2JXsFhvqAkAmQFBAPWZtkbYufsRzceuEzmLJm1tHHHBEk9WDDn68web5SBZ2AfdWiE",
  "key33": "2HkoGp6NUoHpq95NUqZXgj5rDM86Ecab4qYsY8NhwvxLnizFtKv1vJrxkZEQbCHjbaaKZ3yqBmvAjDghfrv9TVcw",
  "key34": "2WurCWhPDDGT4pXhrgc6g5bS9KunAppCucfaxWDnauEh4sXbVCn2jDHZ5DMTG1ufw4BDKQz76yoifsKAZqpLERqQ",
  "key35": "2gSx7nCSAK5WMhvVALcTEL7VELzuuyxpcDenjTA62vvYJS68QY3GGPmVzXjmhgWfQbUbAfz92AqJypQ5gYyrvFcL"
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
