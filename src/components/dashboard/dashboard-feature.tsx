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
    "3Z181ZK3AFLeb8Q788avBGheSThCLfibhg5AVqC2tnyQJ6CLF1mRxworNfzdnwnZuhnhsqsJUbaHohZ4YSSLMK2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "waRmL3UZ7ufjhMKLaEqBRo2yEvtDuPMwVLwpMmWCm5UkkvbkmoiHaLUvFnbDpG3z9MM6bgiiet7dPbpspyxAdTj",
  "key1": "JH43MKn8LbQrAPVVQdMByqr4UrGUTjJ1YTr8cQ8u7NWmdZ5n3MLTUD3PKd9yXb61vVNHbRCZXuCeCNQax9dCb4Q",
  "key2": "3TW2VHFYrxcQ7CQFEU7bpQgiNWY6EUxBscpLRHe3VLW8MmRcQ5QbGui2vT4q4KTaJsxBtFk2RRCReBnZbb4bRq7a",
  "key3": "BGvepHcJsiQ3SETh8LxYNMQtdTXe2Ji6uXSYc9rPg32zCwdXA8xgqEasKFHshe4wHwfwDVCurZh5K34LTnw7bmt",
  "key4": "5XdyiUD5BWfKaaZXNHLsgKTd6ezXsLshitSuTBwaFGotxeXaZAcegL7NpvVzVoxJLsvtWZRCcftM2mRFxBLQBrVn",
  "key5": "4vKyuoX1LeFTGV5pi662RSiaCQrjuiE6BcLQAUSbaDESM8Esqh5wCUWPcbLUa5Sdo9c5jK5epfBpb15RuytgvKSL",
  "key6": "5vxtEbytPMPqQzh7HvN4XbQU9paWmaFcbbmiRazb1g82M5MB9cgciTtse1AK44KFFqCdaGi35QLwyMJzSDg4UoPk",
  "key7": "Tufptnwcrcqe1gf8cvyDgd7NKMtHcUayLLSRsWar7CgoUy1uPc5WbXMLQRCa314Q6fcQki9Ynum1SgvZSS1hXtE",
  "key8": "5xPGJ8E3LCuyruBkXxpbiHdiqxBrRuHCHkj77YJXabnXWfUzvNEM73nKu8tCPm1so79Lw16htYn1bF2v2upRUwDa",
  "key9": "D4p3Ar6Z6aSYzcCHsKTjQwtcjQJjPfx8tVvMkpyxGSEMoqKcEMYwpNKuwVCD8ueJWSZRFQaR7ZzKm9cSRyXc98J",
  "key10": "5gWEGnc4th8ALxiakua8JNMoAHggRLddVfrGdcAqbnkF8Cz381o2gMjPzduigT7xV3LEzQwngHR8uafWZqZBNapf",
  "key11": "3ebTx1ycugw695zgsUkAUTJchDBFB9a8dpwxRixHENGxNxp6W3fDX32bdqmNDMvnYVKxUAZmme4YtSUfydY4Cr2y",
  "key12": "3RVGNNKM4vdsoARqgD2JLyTF6HUc9CtvuddDAtYghtW8Hq82ULevh4LzwTZTmRQ6rFenMQquSjuY3XHFgmwJKEDN",
  "key13": "3AdY2YJpqFDx3p7Jq1G7ffHriXxFvTLk7Hq918t3unYzTCQ9tEiaxzaUAqrhqXaWbhppyRxif8Fuxo2zLPGAATx2",
  "key14": "4fX52fewwbMTdZGfSAtTGdpddeCsdPhRrb1dQJm7admD41EAmERmRh9TZpNtGLVxjYdscRLWPjnvWiVbktt9xqRE",
  "key15": "JW8QRsisWouRZ5xBpSCmphdjgEgpo1kk7Pmy4UZNE5Tdw6jvamqFgViHJDnWSmwBWdgvvz6yrMKYbTMPjpRbjNd",
  "key16": "4GZ8hNVrx4epRivzHUZaSgSjUyjDzmjCvERRCv7opqhS4NnAkzGJW5y2jm4z5jXTqZG4h4LPb3aBV51D5h1CqeJ4",
  "key17": "3H47rSeUZtTE8eJXzwT8dFGEsZPCoTsDf3zNK96ve91mjTarRFrzqLKzz1PPE7Q1dreEA8pAZNtNu25LN6B8ooHL",
  "key18": "37JUeAo4SX4FiStKZY7U9MvJYH7j3QKgKdRbkWTc8nUzkmoG63jrLtnTB8o1aR6PRJYgoHy3YPcS6QRcp87bU52S",
  "key19": "2guLJ6Upj3bYtBQWJM7WDtXsYdgcseZsvJSo6hfAXWVkbUxJ1ximXktN5fBEiFyeKLv8tPzp9uMDA8oNKZrFih8K",
  "key20": "47EAHuhk1EzVRUToLiF8Lr8tVRgGwk44iaRVprLptgVVBDybncxjsHcwsJxe3vjQ2re5oNYYsEDwcurmZzcHaYVU",
  "key21": "HTmE9t957X3bQAW2FgbuLBbYhxqA8eEPmtxskTDXW6s2CEnfPmUBW8Z3miskFrhuZazwyFXSkYigeHuFAUipV71",
  "key22": "SDt237ivX3X7AjKyAutcLz1x8ddEfi8xSRZ4ne9vdyaruAnAa3CZ96fLRBuCMD365UeBdLqjkHPep4NLKKZsCxw",
  "key23": "455XnFHptHGx4Qjkv3djhqqSjxdLf4KaL9N6RttPbciweSpByKJgVoHBSERs6ByvQC8gM9XLcsdEk5nmtWEAWuAX",
  "key24": "Eyb17Y5PmA7Sm7CPq3y2Nki2hJAmCajosrHZMVL9zc8zKFJytbKRkFiZVKK1f9LDgZkB1jfWdBC3A3Jk4ZLH4cP",
  "key25": "42y8PiQSCKg6CCjrNcwYw2agNDdQvaKBCLenLXtpeTrZqGin7UCN48KidETFZuSjVa82e3wm92Acrv3vyHzAbGNw",
  "key26": "5yuvbopG1fZJmwRfoMCsDqtFeKcmG3kzXARdznKNaxdKnWmAccCCgPAPjAvurM5b5Yr5h9NCbN7Whicbyo8CoCdH",
  "key27": "L9buDT6wMXYXhppZxLrpjrhc72guH2PruK9qNdHGfWppVyQReDDoRKkHFH7eZFsXGr7ZQYN87CYRPHYbnhxX7w3",
  "key28": "5r8SQYJNcjiZfXQDsAXPuwfKkHbQk9Es92bqZNybkcwJ36655N6AZYxxDra697KV5QMFyoNhGCYkZ4xb4q5GNj3h",
  "key29": "5UcsPLXDQaQxKBqac2xt2ForwBgVeCAYe4225nkTgMux9D6HTFhVndJpZjJrfnzQ3t69EDRazUy4wM455ryKmxQ1",
  "key30": "eeXeBubpguxLcjwReJcLABfZwhvG9guUMPJuDWWkE7XXZ3MdZ9iTPNog6X5JDhJk55FxTLuehb6QuLfbRfs5cZ8",
  "key31": "KyPKrnHPg8CDbtaw3jwxRVVaSPs9CL6yWeDYJMhRN5ReJRcDT6tiCQ8G96Z4SiH3oQoFBGMjJSpq6f519XKJcs9",
  "key32": "4jQNtEmJy2N1TF9oicSU5Prp3KhSJonKwsFC8Gzg3DpwvYE7PGFuaWB7ptjQgfaJFzCf4d9aDFHtt4KhTwnsgdaL",
  "key33": "2Mw1UP4KDTtFsk8Zw6xUYNcFGedBC619yosK4J9k1YNVwYJrJAgwiNm2L9oFgAJZcX1DzGNgm8axvQDFJiYgb3eG",
  "key34": "5cQfZm84zXP5DuRHnsUYWjPAxvdLsBVdFAzXRLnMuoiAqxD9P18BVr2uxSkYwkq8qoD2RutgjfkxwBY58SXABa4B",
  "key35": "2Ayr38QexbdyQoPL4NhyciLtHDpstLoUPUnnrjfGghz5br4mRc73boaCDgZcGhC3EnMwzFaEh3sVfjDgepAur7rx",
  "key36": "31Lfqtrwwb3URBnX697CLJ4TkL328ZdxWGzXz86Z7qAY5V1RoS338KHxr1pScmpHeURB79xmRGvUJWskZdJ5Bf4V",
  "key37": "CjLyoyoWbqpXpAe2ucsDA1PTeq5Qa1L4AEkyqRFzDG8hSBU87sWdKuvCGuGs7VcGsTBm3PzJFW6NDKV5McTiD12",
  "key38": "56bXkbq8YqZCAvZBDWCpNK4TDREXSLxnFGtHz5Q2zJDxhgdV1pVsLjGmK55TokMGojGahxvzDU2L3REgSGittzft",
  "key39": "66v5YV7ubDWAHMbUGsbFNY3sMmAza3UAgiPXoYPSMrYv4VsdG3aLEDsgPmBnBL8YjAVgUxkscycfSgzHed7kjQoR",
  "key40": "2rcYapvUZTbfbcaNphxV8nB3VyoH9XrQpMGtFrmKpA9sRWqv6fQNnjZ9RnuewHh2MZNsWuDP58Tz6b3Dxn56ezVf",
  "key41": "3g1f7eZNH3Zu6sJ5uXinCcR4EjavimYyySKTE3g4GBpQrKRm3Si6aHfMstCeCbZLh9gDAFyjKmyaT38geoVudkc6",
  "key42": "5AipuHDAUnMAN8TfcpEHx5nDqUfHgqtfmXN7waPfyq4SntseUzBX9TzQGYqaKiuDRhRNGeJakvKMLoikzyJaSEpV",
  "key43": "2FxiCKHz4TQDLY4ggLD5XyJFQGZCyWQFi6S3ZRF37EU12QAg73bwHiG7xVejKuRz59sLgDkVeU6Jmyd7fhbq1BjR",
  "key44": "43i22htT2vxESqdf5gNATGztG2ts5gReceSfZ6v2Z2vJe3KcCmQTqvuCRPtWzydMfAnttd2qPHVcrmb88TMb5ido",
  "key45": "3xYKwdcJ5rTgd4WLRZC2fJLdHYyqYbwDJBS4BboYeV41SttKcvseriPi4BsuSnez7YExqA2xkDBJNxeRgAuuZYV2",
  "key46": "bzijCP74QWpDx6LAgtgL3xY1WtiuauiN3gvWkAXY4PLDE1NyiJpo7eu91cBaHpyAABWn8ux2dGdv43dbm75s5nY",
  "key47": "5KdjmWfs91z7U4bnH9TZTFwD8HUo9dH2V16WGArK8xq7n5XkjLKZT4FJiEs4cQF2S9Re2MspyBcsLPvFGC5SyNrq",
  "key48": "3aoT8cw74KYTD7mHUzKst534wvoXvy1cnTwKf96DdpfanWqQPVeMncstjFL5WbLqdVMpHa5CcFswxmjXHvWc9qYy",
  "key49": "RE5HeT6M4GjavVJSqNSCB1HbQCkRs6x2jDCZ7YWTRiNASGT8oNHGEERhCY2pcQSSpv7VvgXDmz9KJwyaiA7S7J6"
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
