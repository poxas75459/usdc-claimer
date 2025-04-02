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
    "61so3ehuV64tP8nsquMoVkaSPshWtKh9Fa8MWKbaENW5rkn4ZgrSnwiSSXY1we4T1GrkJGrDxH3LNoSujSom5orx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nzZUX7ACaMpdAFFyUWJntcXnARs59gZJER2eRLvvwkEf3WE9CQua8E2ZQB5zmFP4h6NbnCkTxH8dhUR1ZVV5vKE",
  "key1": "bYm2tTqyfZQrEbw5iAXE6wDma8gzNH469wAkBdtwiVArKa5d21DeqFzfKb4QK9dkzDz8Aqz5ijN9YLBrM21Tbbv",
  "key2": "k5MVfLYskKzRUhq3QkxgQ9pA2oBdotGHtVDvarWeaaBgjEKsnnwonTHLd5YjgiEMZ6qHXN8EtdL8UiqS6nGsP7J",
  "key3": "2CXyr4kSH7BEftCz7mjbSLPKKHHQcB2WAPu8xGYLJaCJJ8Z183rJ3MhA27yPGLxY6FFTiPKtqRhhRtQot8nyjYek",
  "key4": "5FeT2gQApEcCy6iwcQc3APNVujjvPnXwBChVkMh9nAkccrmbNHvQBWuMMDKbV7bUU6cLZbrPVSasiDpsncLXpLQ8",
  "key5": "5Mo7oLGeE7NkCP5NYyz1a5GhSZ8Z8n2FuemRC6GLkRu83GchWvtrBs6B4tg8CQsUqDz216BN8nQmdYWqWwvUsfwX",
  "key6": "3CVrC8Pui69EX6ZhHDJy9CNWs7ACPCxnHUNXHyeNRFy57qRNLbaw8fmDzmZeCvCPnqkHiBtLcyNwYTKvXGkxLQms",
  "key7": "51aNaL7d6GuNhFiCE59YVdAVyumMMbdThUM7e6wWn7W9T744PMcuKxwF9g37NXTYvGhqWXwLQ8AHRuFVcE61Ljn7",
  "key8": "3AqkgnafbsRYkDxFsp8NPUDPW4wafHPc9jHDU6p1wm4h9Bu2KChGT3te89H9A4kxpFEw7uxEGk12zUiUoDYBXBAW",
  "key9": "3AZsrRQU2YYNpkMa1AvNMiWExR5BYpzShFu31dcC9Xw1QjA7Fc8K5DGyymz92r2XkYfEb2TMRBQAxaHKeaRTHm5r",
  "key10": "2m1gvPFoFcsXBvgixWtTZDPVXhqWGXtD2XM2AmET1J3fuhgTF6X38Qho2WriJNsKdDkEv7MJwZR3fVoVhgKdKeDH",
  "key11": "3mj8Bzp4ESF7HLELMCtzF8tDSv3fQCSXb6i6gybeivytoycHDaE4ASCRmTxopQ9xpx8cKvfrhq5fzQxt5mvcqgG1",
  "key12": "2qmyQ2134BtbZg3UJytyJijh8qWv6UGMRH75ow2rcKVRmBxBMtcH4jD4Wv9cAHFydRqeCePDdG4kJYXqJHU5Un66",
  "key13": "ee9pPz3AD1RZ68x4TJbRf9CKyrmDhmV6yKQgPmwyU6YmCnXvd3mjT274d2MkSyaMiCihhZeX7Tvyam1ouDaeVvn",
  "key14": "2CBvGgLJb8r8zAdpB4PgSGc3bLRzRbwYTTPFUFqtWVKpTimmALcP8R9rZ5dRfyMDmNLfC4DiKsTRHrKynEH3RhVA",
  "key15": "3ByUkinJEgUfrAwVThkBkfUo1bc4Q2SHcyyrjyB766Q4aWYDJvHoYJgQeVgzpiip8Lov7P16Ryz4PxcJsSA7bJD8",
  "key16": "4XiDNC98G5dag436iK2arnQ641E2uGoxyyQ8FryWpuPvVGDsEM6hPJ5qswXy24vHqGcif8A91pgKjgnvX8SWzW5",
  "key17": "3SfkHweyjVU1pQthDiR4Yv7wuF32CRjeQQ55CgUMAqDsES5YRTRTvm2sxirVZoaPjYxkRS5VGZ8XKthaXCyz9p8D",
  "key18": "44uSmG25KU3n2aggNg3i5ezWQf7whJ3r3ek4Y4wJPcjVkuncC5XNrqUgkHXcsK1mxwpwvMvhRrAGETWL7DevbjVr",
  "key19": "4mqHrNpMcRkREsApCXjoUnGAa9QKh9pATn6zXrXB5jZ3xcRn9Wfb8ykd6NRrGCkXKNWAzdaQiP6fyK4Tbj5bDCUT",
  "key20": "U1YNU2VymmwawzuQHqtn6fEXVvEnTDrre9rWYofhc3U6mLvDHHtPm6pXa8mP3Pcea7QDcH2MfdgKcZMS8S9bkLJ",
  "key21": "ufVbHhawTgaZkX8th3hn7TB4G3Si7PFbQrZw6BMK619nWnhVaXQm4MUxp77b9dmmSBehG8qj2AddVThindbw5Nt",
  "key22": "2rc6MxnqBS6y4VTzRJosfqX59PdmdX9VJxZSTKo5WrgEqHF4DenKeSnBRFPwDWfnmHwCjvxLb3foLP8EFDgZTELf",
  "key23": "4Y3SbPkkWFposTcJobLdHH2UccvQNh6VhGzdb4V3wQPDHQvYb5XNkbLuuSp1195frK97Kw7q2tbuMyJSXaBEK6XR",
  "key24": "2vXMiYqXhTrtXD8zm5CNGAfjfTEu2zqRsshZYNUbUdvxmd7GpX6BqKAJJkk3BkPxZZCjvzwZkeuxBb4CH7A6Auym",
  "key25": "87xEVSqjz17Wb8TVSUKTeSydqBfnWbiqXLn3gKhQa1WBCD8XqgfFFpgQHMoEuGvC2c4tJfrWCD2dHYP4THpnJpf",
  "key26": "vj6nRsN7fue4y6uP5gY6iEKMk6PsGEoHRahPkeXFwEQqi8u7mq1C4pHRX1GdHELa2MEkQyJnkrGtSjpZTEwkYUT",
  "key27": "5CUJnjedTJyaYgpDKE5Rs8fZosknahu4rDR7bTnMXWafPu2MF144Hh6DL1ugLqiWpknFysX48e9ML3uSjQQ7S9ER",
  "key28": "297yUcEwDFYdZHDThyytTvhq8YioW5TsucmXB7SU4wbLeTyzrUcj4Me7M5yY8jkVJ8idA3RugVw1gcVp8Thg4GhP",
  "key29": "C7ez8ZEmvMpXcN3LAdD7aWkfREhv7DpJXb1nubgtg6MRUYCYVC9QtJSCiiNEu75K9BKdkAKkRa6iKrFF1QZFGB2",
  "key30": "rqU4z3cVc5muJ77hQC8zpvF6zKN5aoATdj613DbAFFUPXJfDiF19kY53GDpBbQ1VoDzuzAutDyMFmwgtUFvGqke",
  "key31": "2nH1Z6EvEiU42raYMGsEfRkj6ydX82nR73vE3tsUbNHzRnKX7WJfLXynCbwBfvJ5BvvZ4RF5osugsywWMgstBWnJ",
  "key32": "27oXqvgQ9JAaRMwtMTBK51JF3RfYc9t9RZ4QZB21ZCyZupoKVYPFYUQUfQQSLQbuo5BipJ5UiHRBPehcvY8w8rk8",
  "key33": "4LVtBwxcucA6b5GykhpnEV6YdDkCJnXUsMyxM2QesXcsZ6X726JfeAqFm4tM9r1PGXRzXzskj5RJSAdg7Cp9cSf8",
  "key34": "5qMv4Hq6xmpsmMEAW6r22cKL7PYXVoCJE345PxdKzgPwwC1B2DkTVTaXeLRDE3d5YzUMUgtj1768h3KmgQQ2dsZj",
  "key35": "5taAnLpV775DhqULcZEb5N7PwAxZfvxMttPTeVixLy1B4MzznLPSwQuw2cHtUSWqitjP55iDwd3PPHJRTtoN1zGx",
  "key36": "2mqPUJn4Lfw7x18EtHHjEkepVzmmeKwfxdb1seaaLAgm6QRNR14y46MHvBxRw5vmqxQ3KZb4AuukQsw6hykNwP1K",
  "key37": "AhHWuGkxz1GcRSJV8nMZ8PFmSvjPoRJii97YhPxftRF2c69HLf5HBmaLCHffCZY7wFBRdNGA9nQvPj7VdtiRPwF"
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
