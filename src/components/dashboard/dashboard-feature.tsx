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
    "2rgEHzWfBufJ6YxdDuQNKJDoWJCmXUt75UqH5bjrMf9Us9rvzkmeY5v65m47Er1CpoApLXZ78ZmHs41WmYXa5NDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DHMNcUqoiWdbjZ78to5xTrMpDw6A8vvDRTqxMcqZjgSdnNp4BHk7Wfg8ogkR1rtM5zSLy2zckQwK6R3N3VEY3PD",
  "key1": "3d3joA5k3qh3q7md8NU3ixFY9uwA3aVZZPVwUnB1ahQRCgQT9MVGsNrjFsH4j2qTpQXvWHD5nWiJ8x2nuoRGUx7Q",
  "key2": "2XvTV3uX3PDgMUfxFsWKbUfScNQ3ew9u8JfxGRHFFuWzm3ZpTBw399jkgHBHbpSmDZ8kjGe2m3UGTSgMAuwStpSu",
  "key3": "43oQCPGMiRQ9KoRAdYdi5EhS74qgCaZrbkKHkXGdydmaHGfWj8Ed8v6onjZBCyXeYEmbenGDapyAEvDHGqzMJqq3",
  "key4": "3A7VYUp5e7osct83YzNfvLfpU3RpQBFuTxgW7vw3b3BxpwHhJTfmsNtgkg4PCdtU2rqLKKuG1BtxbMFuvU2zesCw",
  "key5": "5LGK16yvSomuChrwhuGFcMzkhuvw7zvCsvnGSb9czguCFSxK1ueBPidAoPYS6ndbJiMNyYuXLYLR18faEh1RzJgi",
  "key6": "2XK8RQSvY3xE2qNmAxhRgTGWXw9b6kPN69bqD7XxbpL24YE7oV6GZJC7erdkqjmgsT7aG2MDiCzzAfomxmVxyFAy",
  "key7": "2e32UcLxxM2ADHprUd9Gm8hSV3RXjPd9mhRxWGXF8Gb9ioTuXAqnPdHdJV7o3QG9SrRs6qRVsF8sCVgTSoNDKyFB",
  "key8": "2aKLFL2yt7EkSqFgp3nbKQeP6yvLLYdcKJVvCYe6yy2kop7i8g6MQ4KS7tMTKw8nEziZt8iBxVFj5CNWc6SwizZu",
  "key9": "4c256aH67Asj7E7heUjqHdnAJffB4SWhKjvxuVNkWtwb1meeioYpLWigtT49n3mrehTzFbcBicRTKEPdcimp9FtU",
  "key10": "4yapGpfhk1AEZg6YmyZGggtoZrbnDt5215yt58oijeLj42nWfLafLukP92an2EPB1czfebmLyfGo3rWxDugfYdyH",
  "key11": "3AhD5ZputWMSSgqxh54G11G2BvMhLkivADUJrPe2UMa1xAh9eEb7WKfcHqW167QX6nopArd7QcEYmQJdi5QBc1KF",
  "key12": "4FBPxpwrDLzQ9jzj4fnb2AEWAM2yyAs3oXM2Hh27ccCQwxH6mvS6NAQuWjM17o7EuR8jAmZrUgirznz7cwKJo1uF",
  "key13": "1ciS2JKeswZABFBxMDMoWwpCVyTMFYZvSJhdjNcMoU3YRYYKuuzUsUDxC2CQCnoMr7Vk3UpR9S7PSra5fJb3ayy",
  "key14": "5qq932H1CSEvnYLXLxwKVKC5Xe15kcyVmJwsxU7fctuRKgkLfUfPxyeD2HrtR5jdygt5j4SmcS1r3FCuWEsUjszH",
  "key15": "2eHSXNqWxfMjad1tiGkxtTgJhJnr8CskQoBqCKyeowA4EVFukjRfhyp6d7ERrvbs448VAaF38V2nzv8zMiyQ7jSX",
  "key16": "2ocCBzZxcxTWPkDn8p2LfkDMFvBVCSfLccN3U5b77w9rM54wuwuedXk7z8B435EpwMb4m4Qp1YyhmKF4S3tM6veq",
  "key17": "597FBpyAPJnvHGftRsHoR8HbujqCmg6QuSmRhFAzLmTRMpVzMjbLeJ6q9x3rHctkjtML5Jbu3M9MPovFVabLn5XW",
  "key18": "4MnL9pSQXNsv7ch1TxaxaGM4orCSEFF3K9zSYM4RujQ971NC2quCu6ELxweZ5srwJXzgLFH7nnE1VJk3rEjm9jjn",
  "key19": "SYt6KKx98zWnWPyXMsddEhazHrieUSFJKW9y5XpE6M3tpMseyyxLS3LN9ZHdoSNxiLPwgAkrae665RTVjVCuJsR",
  "key20": "3x28GaAEUYiuVu8bmiHPZZdif2NCEn3vH9TbZvGwsVGKdMvncN8eKRAappshcgPQobtmjq1bPuNdMkGtQ4DQ85rs",
  "key21": "tFJB4j1CQKXvBPzpYJPP88y87Tfa8xrmTZLnSXw5qSbGXnQGwv6AniUc73sjdgvsnoo5NKZ3XpiSvET3iQNTksr",
  "key22": "3Z2dgLrTkheg9DV9cSGms6o4BCgzdHz7HD2D4BMWk51fUW26xHtHTjXHNfYnNVN2r5nVmuNJ3abQrvAupYixgcke",
  "key23": "3k2SiTyu3nKSgUsD33V88TzvHkyAf6WFXu9pRV2YWLpT8KkrF9Yez1KtpooUeWevTiZsJBpwwYbgTynU3LMpCV2W",
  "key24": "123VL2KhCQ7vPDi7X58hFJNVbNzvVf7ruJ1sueYzkmA11F25wqx7p5Av5bUiv5V1hjLpoHPpbrUusHFannZSV69g",
  "key25": "2FLbgSGzZsArHaZvvRrH9AAXvZfJvH29FA7AcsF4Trm4vrEkgyxVVCPvZ1gg2PUa3oefxMvR1Hvi2D56YDrAYYAc",
  "key26": "BXLwr31JXwitLntZnHKoGkEs2UxrpkouFrW7vpAGwoDxojHQPyiBhB9Cz34YvJLSe1wpSf8PwgmQc6yhd8nZv23",
  "key27": "25oCf6yUjSEN9v9ZKGNZ68g2QMSxXasaPgjqaSKywJVnGS9eWSKmnSpu523EtKC3VvjESUBpX7KtkCbRrPG1xSn9",
  "key28": "4Hm3KxS9cApmaEGrVsLLiBAFTkc5RcBKpmngM528MMvxXHzdNiHCQ8hEatCB58gTEPAhXVSJaBJTLnm9FrEFdpkH",
  "key29": "28YZGyhLiiNsvYELcddous7msvgxH8sy9oPciFWr8fxkMCREPND5mibya1E2E6tZNasAvABCHfV686Dgqq5JRuDx",
  "key30": "2gSKV7SqyExDQSXukZmzwWEdLFkpsCDEciYwmVptNk86QmZsGTeCjkWeTj4t8HTipVkmbkBpWnJQdxB4ZkP16e2m",
  "key31": "3p7wzvRNtsWokcRUYJ6L8XuQB9e4EtPVafnuLsg4rgUPhKre97WtqrAFHajxC1wwW686TGHmEC7CrLMFLX4AjaTj",
  "key32": "4LWgveZFcanCBCV2k8aeeAHGS6DtZEVKUYvRVsBANUb69Jfsumk6zvE8ZHiFqHAwccg1eAkd9LtVGveSQyLDCBTW",
  "key33": "QF5T3fZgARkQQXiBMiKLECy61ckG7LM6ike1Mvv8cv3jCmnNk61Xq5vDpHq618hC9vFioNATJAJ57vt3v83GBHd"
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
