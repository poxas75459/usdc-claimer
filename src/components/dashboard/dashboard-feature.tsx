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
    "Tx5dFSfSphNVsSoRtj59o41fdcxAaRatNvAfvvxaGx2ZUtX4dawTMfSDpr9qUxXYBYRUeS5wGfZUY3SLLkzDNko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "412Bk4UDM5oKjbJQNrVTUdirUnUT3mRAFQfHwBKRfv2P3d4EWThTCUfJpqoX7KkdQhoFbQWdQgR8fGz62QiMWdBu",
  "key1": "aFDHcZV7oE7A42BXfjJQYkyN4uuJLUfL7rzKzFhXHPuKCnhokjMp9teuFaTbc9w9WjBZoMXmLQ3Qk259PCd3XA7",
  "key2": "5B7B3h4MLLGPSckKmT3LacjGkB6Ug73MpH4zAjr9qZ2D1vBW4WwM8TZFtoEN4xuhZeAmpb4htbpHTtrBDGUbnjcB",
  "key3": "2AKZmdwYpauYhVwT4dm34KBCZsgBSC2vyfy8HHKXWyvMty1N53MqtKYJWgmvRWr4fWiizHCXj1h8RwaEL3nbPScP",
  "key4": "aWLn9Nz4Gb2fSLgN7QF9dMKWre9tVAjivY6iNPnCemhuP4LQ4mAP6gV4Wf2Q1rzBafVdUaUFcCRhvf4QbY9zGfB",
  "key5": "4TUr7FUK2DKUD1vNsGs2b6Bytbe8oDbhUgHczqBAcjovyXg3iZN4hQ83deSHCQPiUcbH9riTtRJ1pB6ahaNKhCBd",
  "key6": "2BXSKp12a4BS5hm33vHCA4rUCBgxMamQzEykBS2Jhrx3tuSnKoTngzWWxWpHYcqm8nCaiLYgfe6JbqkT6sfytUaN",
  "key7": "3E1gjiCpDfKhT2YfJtYbEy1n4vtHD5o8effXejEPxSDG7enGFYUKR5hjFPzHf77Aq4FrHFfpc5G3qU5tmi4eNat",
  "key8": "kGVpv4t9qnUvb11hsU9t6GXQaNhAHgoqPZFSYnJ2DNxPZZNUvccHxihR4qkavsc8hKDq2JtjXHBrYu3uy5MUbRQ",
  "key9": "4wVAJ2A7KMNCDcF189kMjGsmbEXLcVjswQEvZJZ9WAB9y6CM2TVNB3ZSgrB2GcFYpQN3WvTjopUUxWjuWuNM6ZHa",
  "key10": "61xx7qgZ1L9nx9Hce4AskDWi6hRdwL29bVPbYuCunLcnFkNvaNpMH5WywCQmHCVCZmePFfxEgPY7j8DtCWmpAvA",
  "key11": "ikzxigjdsXpftkAgkh8Tq6idscB3HsZQdp6JYZ9HfeKe6LJK7vkEvqywSKrSKCeSdVr2t8bEovDcSa8F3vUXfdX",
  "key12": "3zAaBMZuWCgt1Ssh3x9N3KQ5CUyxpZLhPpwHCd7bbNApw1NDgDzw61yHFuaitpifCDpW9k521DpGnnecemAPKLTf",
  "key13": "3qGtEfHqPY4qCbZwEbrC2M3BTC5tiYDhG1v86wqDzsVUkHmfTcckpmQxsdWqn75RzADVDPvvF7Ub5qiJCG3vEEcR",
  "key14": "29oVQr5QyvCEXdk1ww4FBefmetwGA5JjCyuyVnnrbZAvpJ5PdMEytwVP81SaK4f24yHCinoP6v2ezhBhFTZYNMy3",
  "key15": "PJozL75TDtZFL5E75kvpYmtVctd4RvUiNt18EYBfEiqBVvTjrWwcQkywxH7jmdAtp3UNzW9nYe58sZpGot8nBY8",
  "key16": "aPZ9iSbn568Zo3RMabkDiWWsdnU7pN7tBdGwD1oNmvkiqTD5QCKrvCzxfRUvtqjBYWmX8JmUUEee4X93vrTpbPn",
  "key17": "2x6H87WkxvN4ehFFo5VfCkAbtMqgWdCCUPGivXQmLxadMx66s91EcthQQwXTBW116uaVaXmJ1qpcYBynnU9eu9Qm",
  "key18": "2h8fPYN871WyoBfWemHiDrqq8WSUuHb6zSBuHFFnKEC4pJLtFRFVudnnDR5jg6wcSWrYAKu3DgDvdocxTABasLf6",
  "key19": "4yLHg7pkQT4hx7m4F62vHSXjH4v1HyDFS9qzWYWBgQo2TUcGXypzJMRD2fuWxg43kpov5V7cpxn5cenrWcZ2Gqqh",
  "key20": "5AWyJvWGFUJkhEU332hNeiuoyv18xfXKvB25eTvGb6kiUf7EdyKr4SPCwhygHo3Rq9qxqiTgGLuKSvhG5cWSydqW",
  "key21": "3RhZ1Qrp7Crz8ixjRZzgvqspq2oi9oNAyjUoqyAiiJdv3fyezSnSCScBP2vWJZy77mbEaBvqcHydc7GREg4EgZdo",
  "key22": "2B2ogxXPNhH3uZLvypqchAeeJbNFpQqi4SQiMNNaKBJMg2oegjGVMpTQGKnmWGCBtMhMaq43iFJfm9mxp95PXVuN",
  "key23": "2DHSQy85c4xaMzEpuBVMjtFWi9Suo2FAzfAAyBZSvQFMyjXGvYnRtzbUKxXiLWL86ZCZqNm9oqfmABFAUi19F8ZW",
  "key24": "3M5PZgBNVpgKpG3LByBfpnZdgsvmULeGwRBAxC5CePSpuowu3KS1VVzr6iaDUZeq84r9A1n984ebytKTz9k4oR5x",
  "key25": "3tfsB7FLHAehMuiX6qTCWF73U8gzDh3w35UaQoFKhpNKx6PbAo74MNVyUb9Det6iy2dLuSKB2LLgkw7SMsJHJ2Ry",
  "key26": "3YoYA5ejPKFnVpXqZ8jsjGwe82aiVYqMK4ERGhoEeBmWJbe5daJzmkPgSznGcj5MMgunvS9zgiR8T9NqB53RnKvb",
  "key27": "4CuaJx7NWDAPacpD2b3pXhjRaU8sDhntuG2XzyJuTJDaciXiSU8k8efSVUETwexvGSjLt9qDx7VNhjw8gv752uwm",
  "key28": "4nM32TnW97XkRCBKnAEs6Te2zznMZKkMYyAsECv4FLpbbJtRWLx9FKSfiGti5MMPwEKLKtTPPptW9wvmJJno5fF3",
  "key29": "3REmZPvjFwAWMh8g845rLxMajhQA5BbsdTBxmXyVL3BJjePUwZ6RHuPKvKDJ8Jfh1cD6pZR3jvpqkxjs9u7TAU72",
  "key30": "2BPNrwLavUXVAHnfRQFD4M5nBsfPbo1SmkosWHGdnZ8HaE1ynBxwFt9yhG16tXDrjp3rmMhfLXtgKncRethC3yZS",
  "key31": "3iRAgzig4SukmsmEbx1YRVFYKphBZACVBF5mCAknqDAExUPuvx7BdPvDHpraE9D1byiKXDrpZ7jcdN4sjjW6StmS",
  "key32": "23MvVhftrjVPrMNCW7cxZTcXaLeYHrv8wnoRBjXd7bJV9GfT7V31X1gH2yfMhowwQCLjMWHFbMyMvvm6CoaH22mn",
  "key33": "3wXy7RZAjGWbQucpMN2uLtbA9LSKyvg2HTQReSE98GpeRE4SH1XqwQqZwkuyZTdegn9hH2DN4bVtDGSoraF3u8fE",
  "key34": "3sVCFHJ9tFLDLn6GUxCcQZEGUSgVyescJBXg6kHKFn4PdcXkbYP11XjW1WV9W8D27LnvcKRHfK81amPQ2YrPfZwX",
  "key35": "3bP7VLG9Lnv94qpF7zkVjqMduiV7dAqURDKmbpvfzbZWNX2PoEyov8uoBjSxhdQjLSiYAym8hsfQyeuAbJsiGH6P",
  "key36": "3ryM7yyiV69yjoPY6q3aBZtt3qW1QfJvHFdH7gLDVHRdhUDYQp7gbp6jJUe3UouMUHZJK7PuV3v8Ln9efFCcEYCJ",
  "key37": "rkN8LVFXUM1BWuZCgVLuhWGjmZbSwDndRQNbiVuRj9bKA15mPZHamQ2PTtf8moUdYM3snvVerYCqsEtZtBr7DbL",
  "key38": "yANCSyNX46EtmY7piLdtod2pKkRVA9WMbt7AYWphKHxtdzDbHoQKs7zxvDCVnM7q5dV1R9zff6g6kmRLotxSDx9",
  "key39": "5ydyDqdboPMxmAxZhGvAZxk4YKqxoXXSqSM359TKT9yugJqtDMnKJx9yT37XgKYXjH58TsBTVUWcuJu5EFsHmhQy",
  "key40": "4E3MWmsJH4bgqvUhxvWZWH2d13gz67D85XCAE2wqF8VSAHsdR9vjXsvmJoYuQQsRG67y7fuF3BE3JLzJGxupjpHJ",
  "key41": "2FDS82imwAkMun783L3VDGoomcdk7L89sfaXuEWHjaTgJPTW9x38PdiKba9LiHg8zEMVaHBvnriTvUMZq7jDoX6y",
  "key42": "2XJFpoc9X6JZ8NgG96ZmKZzUkTmfsSchGzKfp6a1Yr9zLwYFGBxFGYYFWFQF4uHDZAygVuZicWNHDPdpowmPjM96",
  "key43": "4coAENHhc1Lw6caL8k3dy16ihkxxjZDnA8CapJQqXrTpwRKzysp5LkXmU1kBBzL92gyv5gi9e9VDZGkVDVUc67xE",
  "key44": "3kYZPTfwU9qtRes3tv2TA9R8pfyEkbRN8rL7TCEPd76tzhb5psipLiMekf2bhUpYnvhPpoMGmncPNX6L9RXSmTDx",
  "key45": "26tf4MgeX1frMv5WN64ceZU8vaAtJA7J1huHcr1jpqpgR94RRFC2qXKjGqxMTfM5D2TkuDUHU9yZL7nBaFhAoMGq",
  "key46": "3bY1FPrtDpKRDrwh8KsMiXYoA8o5gNytpK72urGEMtny3ywMmYLBJuaoqfqVx4qPZu7kn64mEyA1267qC5yZdnnz",
  "key47": "66LbZ2wjmP1FCsJVstUeP6tqYcGTkToSa4qwVVvH8cNJKDM6uS149oV1wounen5whFeVrbzK9zFjc2f9NjcVsADo",
  "key48": "4jUfVf9kqKPLEGQMsUyo6SsHXXAsaQJJt8R8w58vnUrUAakEjGe59UGHWm81Cjby5gMkWQn5VjPGrzXUPTwH36NQ"
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
