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
    "SDsbSysX6SacVAesqKNtAzuqvyuWRPk4bjTJZRPAhuvBXxmmwqKiZLAdWJja6999esdpMzNMDymfyS6n2ZebAeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e6XbkvxosVDb8NHSqqmUJ9CARMGUbchYQoaiPiaJy37nrTELGiuPUj9jDQNMeUijC1Q4suADcVU2PNLbJGQyesT",
  "key1": "3mJ95PgZJ3Fcmvj4XYcYRC6yZby2BQNYMNAR6HisozASRRJKNunS57QHJU1tUTSGa6XesCW8zQ7gVryGqvsWK1zw",
  "key2": "38ZMGoLQ5KBN2xz41Xb8giQi5mTAaa42UseLDnWMYj35SBy9ZdFfvt7Psb1VFnYcPo5qymcriTFCW8crafUDJEE7",
  "key3": "HKwMem86vEiPniBKrLkcFHQHqZJrryEo9nhAdAzBXUouDMB4DWPzMpzoceWtqPMVjFuECFPR13Kct7aMyTAQkGN",
  "key4": "vvUx4GiA7jUkMfFJkVwQrYDavsPLhzToKdaLR11TYHL7xseAoH32N6nMCYo4nRUc7GWpq64ZWXkhyimHuM9g6ZK",
  "key5": "KMoHTvzJSPG6AXrh4LCLV2QGR1Nq3XpeC1aQyLebnUzhHZqYVuEQ8axK91AKnf3aJRSq5ufo5DN5a2iwg2cFbf8",
  "key6": "5mQGtHjaRZLZebuybUkRTNUGDRrD9Aqj6zHPjs3c6TNM6SnUfx7yvducgPgu46q8ZyisZRNSmhyV83tSfcEfymow",
  "key7": "4cjJW2VPAT64ziT5fyGmmUe8yQVaAXdsvqcjmntSLHKz62xPcg4peWyD2qU5sCykAo5VjSht7MDLhjKiyKXz5ry3",
  "key8": "R9AgsE4Y6hdDnNAtUh3pTbLxg5sfmSDGFHbjEFY6dQG7EyPUcNMJKFtqxv2WfUBy9Fn9CH5dh2iD1BySGx3jn78",
  "key9": "Ge12Ncjv8YdXnQAdo1UnvERUmynVw1myMGfW1ERTHhkYGFUZ8KkuXM4GXrgfudzwPCDwqDGxsaFfuaa19fbmAF6",
  "key10": "5VGE1mi2PEi5LKzPF9t9QTrMz4JfJvS4v9dZqtaa4ynN4vAgx3RMhVbQhJx5pFvUEdhzuZa5ASn4k7BZk6QVFeSv",
  "key11": "2mKnoknshmrT5sxRzyawxcoVSyYZ9UdjmfepHP6LriXVG4aZYwSikoeaQHFDYecByRfLNbTyhAHeK2X55KncTbx9",
  "key12": "rsdagg6Nm5N4vAVJQ1ze7BbrBBiVpGuEGJDdoKJHY22vZzwZUktRx2949tV8Whdc7qQr5JkS4ybaeyuAxt1nnaM",
  "key13": "3NrUkGya1B9CnRo7k8vZTMUESX9yN3AgthNHUu8VrXn6RcMgTinBjASwm5cR87vDBz7miR59FewD2p5MRfXiWF49",
  "key14": "47xqBKi9mzpGnk7VHZtysWxAx9ze6UVFcqZkw8yRBWZWKiBz4qfko85zuUczvY8d69jKo1KxuZ8wBhcapqr2dkry",
  "key15": "xPamNKHRmJXAU8DVo1vrJhC7QHTiKAnTS3eMTjx9RiAtXzFZCy7TWekG46Y4gKfFw7GjTTXXpVybMPGqtRWp2oQ",
  "key16": "5DGvG9efSP1Bp6wmJMDWmVG6oHW8NLwpJvCozhEhs1XoZinWPf1yMDgSJsARzLdSQSnRsEFi8YRykwTtGxwv23ob",
  "key17": "fTBoEVicdXrV5fV3yma2uzG8Y6bZUGu3BUDZMb6SqHZTYuW8xufsz4cvCiN1UR2bhkmJ88S52EqPJJvifPVurWj",
  "key18": "5D1afewoaSgbDbLzBrqyVdHDFou7je6pYbr9fMpfEXwYURa2TbqcCXuumvy1wYoE7f5DNbQ6pp8Zt56NwXdpwkd3",
  "key19": "3RqP7De5DAyJZPt3FTEgfNqmfnRNgrMTyCU4rhZxPK36sv4J6qCbRicwRnPpmfiyMqwA2VGH7y6Z9x89Gm3KJtZQ",
  "key20": "462HkZeNhNGUJLx53jnG3awocTkth6qEc5MBHJwsMsghfoBYtDXAVJmvboFvBKmWEWu5aSeEGgvHSTLg9iWqeJCe",
  "key21": "S8fLnQCQPzrT2R5ystvKAJtEezYfCCJEX1qh1nNniNH2ny8LkCb9Rdbz4enzLuakiPYdrR1w7wEBqZQCiPwRXfx",
  "key22": "M5d6apyvEmRH5Ym3XLQQHevXWQ1ByY7zL9v8C9oVG8zM1j7k2EsGBSQngpiHTimFE8acXEELgTj4qfKMaPQmrrt",
  "key23": "2DinyQR6nAiHk7UJnXUK4fGKKd7BggTHqvSCqNfSpz45J5fQ8eCFB8krCP6CRUNuQUxHfG1U6kTMWPX8xuqkB5LM",
  "key24": "3hwW2tHadau3u91Du2JU6uybgNKe5Vi7MCUqwut2w2JxnM32oDdi1HoomuuVeDwewjFqrcs2asHnAGDS5ga2ZLkz",
  "key25": "4vpXVfSPhPFTH7FZr5dNsXNyM7Hn7aFDhNQPGnc5NBhKwaury1TRyxjXSor8suUnngf4B6qqErjm7eNuQ6EeVE8U",
  "key26": "6zaUgXudtMfUC4ffTxpL4wyKhtpqueZPSDJqprF9gUEW8ohu9basmAUaPSGxkeRa7Ru9LSH44cPBoH92Xju5yT8",
  "key27": "5XuF2CmQfzaZUe11WUR4TA3vYmkVPsvRdJqZMpXGhQDyd6AvZHy3VtudNLmr9RksN3hYh1mXas3hab7zXb885pyd",
  "key28": "3MMz8Ksjog4hpJd3yLEr8nVDSwvapqRKgDegtGqhFi83QJE368GWkmD2yiHjpU6by6AbtLFtPkba1Esi83XJhw3f",
  "key29": "5aBxc411sQHa1QrSUnyDMkzJ3aMffoaTPPJszUNL7VtczPEX7kgJy1pkLkCL2hUnMHxSgkzUbpE2rfocyMUKhfK9",
  "key30": "5EgqJvL8UzaPni9Sk9mW9nuyY2MXiWnKF1W74M6cQY3bBQbwcSxJL4c5wUZSN1B943eKt3rhcfvX7iWMWiMeMkTa",
  "key31": "5seGCkuHoNXYvxsbUmMTeM6j8DDBxvYEbm4nG6JKg6pD26BgnNYD3St9TKMUyp8rz3croaHA6zpzZxtsSJbNM23m",
  "key32": "5GxA8rFmd1pn6D4hu8gz6jq3HMp9x9QccDHAjvUbQWhg1BLS7NkLtK5VhMiG5UfNbJY8fHUJMWURns2sEyCB356i",
  "key33": "48acw43dyhRBfTwpjykV8SQfkFhWwsgAzo2eE3eGBMqKrEAC9GeGDq7zKms88AdMVB67y9p9JHsfPfzkK2VwpPGn",
  "key34": "4eBXzNaNEjJcPHS6WTDfBVxWSJ6yaKECYC5T8jdgZqQvYSkyDTzG9ytTMjnFW9cLpRKYyfioVKP83xyxU79gt6NX",
  "key35": "5zHtJ8pyzCYH8CbsywpdyhfP7sFzvx1UG9SmzRBtC84Rt8pek6CHR9HyyHZbU4resrqJqmbxAeCYkTrDHDpAf53U",
  "key36": "3bj4wuDctqiZxEN5msfbBeNLRTXSTUNrBPQD4SX5zu7jaw7cad16qMutk2Nf3NNXGYn78ViCPKj7w9AgPuY5ZELa"
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
