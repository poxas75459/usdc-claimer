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
    "4qFQM2QethigB1VREoE4XvrZEe3Y9pFgMbg9iNVbA8QcQLuip5QhjNjownvbtdCex1UjeQb3Q3YmRT9pVQQ5z1Wu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A277QuREPLZ5TAebCofMKBWS9Y37PUkeDCvbY9hawQAYaQPvycfUehdXU5hJPa1Vew16sCSR67ZCkWkYJrUWXfk",
  "key1": "S7wPctjcEAxoxhchajdNmmK5ksFTU3MUF5kLatdHUpHWuv6nUN5SmwtayiaBPUsW9WNYnCkPfYJAcu4mBKe3Zji",
  "key2": "5XRBSFPUwP5fNo6TjQZechAnEc5tdhHTwL7ZWzNaA9m68R6Z62KXuii2apzMtYHHNBWCrw2RxZqBA4t8YgasLxgg",
  "key3": "36opdY3CLaujfSV3BrEQJ8fAn5jgSofSNYDtyYa1z4ZyH3BPhDdq7qU3wXiVon2h1zkAQZRZkgQgjhNE73x2wbjs",
  "key4": "5KUkZUYQhAiHCGLB8QoFvc26tvk2ZtD6DGkYJoi2H28Gy69aW94vCD4rUUm7sc9QAhYFeUBC2bERrFyU2xQ7uMU3",
  "key5": "5wjw6PrpWgcYQh1vys8BNj9bQmcsSG3rDVpMquNGAfxL4N1nTqKWHhfnnroeTPnArzKNJkECgUyuSa5nmz126gmb",
  "key6": "wJuebZpvr2aid8q33utM2gmnF7r3pg2mu9pMta4Hg8XSaxZaUBqVgseRtfRRZs2BXWrdq6G4N5oAjySCxsuobWf",
  "key7": "kd5GmnruxKf9N9Fus7KxDfULBeUqi5xT7vseWFxU6nGhHrLU33cm2asbfqR15aPuZEKUGvxncw9F62Z7PkqooJb",
  "key8": "BYzQEtd2ayutG3g6h2UKy5po9JPpTywv5BVpE7uRkaVuyzN3KvhLEzDGAPH7855ghvrHLF1FWG6ehab5BVvHWif",
  "key9": "Dqcnv6hS71drBhSNVa1i6hy354hTgb2yyJYpqCPepFT58dZoiZyJsdkmxwsMCDVUTbF4A9mHHWfWEfBNXFTnpT1",
  "key10": "3rmv8RmFcK8Z1dkPXRA3u4vuQzg2RnZckQd9PcWae3jQXr9ipGkSivAYi91D4zdVF7hBGBaRCsjDzJ9V8mL5jiys",
  "key11": "U1sJJiQJbctUjQfPxUMQQpVWjcQ7wrb6SFGorTnVPvwbsih9WcExK4x4fUUcsS6TVesnGmk9o1MCEqQB5wbJ5UX",
  "key12": "KESTaVJh6oX9ZRBF2kWZwhYu5RojitzY2SuERzxgRj7hVqCN8BkuZZW3KK8MmqhyucAAh7Crgo8UNdRjqHdhcuJ",
  "key13": "hRjEYyRXh5gCwmKvxpsrGoquSZvHpAXaUVGzx9cTiV1jdbPyRB2kxXftEsmci6m28MLMuWqeQzgxiU9akcN7VuK",
  "key14": "5geQH4Y4ey2hjJ8ufdb1FsiYhbooUsEkgbKbdMTp8Kacq5rfwNkL8hshxYcW2ww4zYQpuEbiY2Com93rFaWRTkJu",
  "key15": "36NbRQRXS3GMnqmM1PdFmyM6hudjocdrsFnPpcDkePR6EKnx8X6MjxkpRq8HUhdKSju5sG8qN9pfH4dbu3y4VitR",
  "key16": "5ZmLJVcMZon6D1enn78aC3LgmL35Jm4XW6iH2vzKHtvpdkziBC9p8kngVwwav3p8jDbgG9qTFzNeLftF2QgBph1d",
  "key17": "Yss9yis7LVF32wkMYvDwX5pHymsV8SZa3T79sDJpe3tYqByykT1bMLxPF4weZofCkvzACmoKpAAxPQCv91z1rah",
  "key18": "66hu3qYAjxGD5b2J8Kf8v4ydvXYNNVgfYCBjrnosWDVJgU6d8TPvWqDwzptyh6o9WKSfPBwwTLhZ8d9z9JRyMeWV",
  "key19": "4nTcyFTWBaZvLTz6SX7CbQoryPd5W1F8atzmrkNWkgQ52scgxss2sZWJpv17F9nTxbffvtTT2P6aUykT5jzYPe1K",
  "key20": "4BQJs99JdU8VaEoDKWT6hM4RAv2mVCk4LpyUQi4XHtzwxL3VC3BQE4xQ9PMysQxxmBNh8gbN19qxBnTxogRQTkKf",
  "key21": "eAs2YDmqKWzNX21ED1c3xjQxWDNWmSw4wdejXNa7RbPJxtnztRtaFqhKs1hapqHiQWtivUTUkcHwro2VFd399mN",
  "key22": "tgYQDujzgFVXa4NFng1ntox4tMf4Jw1ZXYD2mnn2mCapmxiEJZx1rsgCuk8w9k75Du7jsMubEvSJy6W7pyFVMqG",
  "key23": "4y38f9E4wZ448M1AjB8WA8xQWvTLMVhXxF6pJN4SEqRpSKCkHyY1Q2pVE2g2aELszHejfjwWx4ki3PgHjK7Vjwsa",
  "key24": "4KD5ug9RNyVUZCV4kSpYDPtWEv6X7G57wYhptBsZYRF4eRuworcxTNoULggNWwswKP4PPSZuf9eFsX3RSUvsF18V",
  "key25": "337UoLZHdruSbQ7rBLLdJRi2odo9PfEUq8jBCGprt8eGq8mr4DZ3mDyFTvsqxr5dH4dTUW2kBP7Zsz8FKcTHoZUb",
  "key26": "22gUWZzfwba7EPn7dQtjPbw24NW8WWUHBf4a6xYqyJZ416wTs3bhXUFwKdFxgKfxMWUXF3vBq1FEkUXDqit9D1AT",
  "key27": "5WesLQe9tPZhZKbE5vSxAG4B6pPWdxJUXXtC4whZZrVP7tbQmxqi7oeTX9XBriCURJVXUrWisuH2Tomfzki6QgpL",
  "key28": "ZDsJiyzAqLZkmNRLBUhgBWMAT6TpBZjPv6jWPDmhSoDD6miGfVhvBcAn1Wmn5SuPnuJp3DZ1LuxmaHd1VJ2L8Cs",
  "key29": "iBWUeeg8DyKAJ3xL4rdksmWqnAXoCgA75PkB8m3h2iiuR6AgwXdhuhzUWHf51J4gUuazQWTxeQpp8qmSUaNNi8Y",
  "key30": "4LdEuuew6XMKmQd1wGDKkU5dxGPnphsEXCaST6TCpDrBbF1NyTRUWjPEYtrwRHRKt57C869hnwmsgo226nyRJWiH",
  "key31": "3hFbVVMTcQtap5bCWgAtd3mAEcoTjc9rKx3y8w4eFnFFsQZW6jXZrER7MFdEBCTEPtK3fJ9EQDQG2DqYW17L2K8Y",
  "key32": "53qu9VpNasenuCyWPmbJH7yaYM6s3MdzNyR5HYXuv5UkTBJXuCJhBPqj4a3afKoghRxUcmGrHSDUXZMkUfQFXdgX",
  "key33": "5F5m3Z1cjum3Su8ZxACFaNUnKRy4skKAKbpijqouvC72ZSMmNYyLvgwTWFDVXk6CkADYxCsDcQxVDz5DxHetmpAA",
  "key34": "2WQL9qGteoKFUmU4uGJ8MkAeyb9JUC8sm86eGddwmoWWNBz2hF7ZsDVjgAV6AuwyyvQxDCdU5wpQovy3KHti8zuC",
  "key35": "2e8pp5Xou8J3FsLL2Mx1N7dLyWFXh9j2uXBrNiA7xrLPFJm3fo5C2gibx6NgSS7BkSzRpXAtC4ut7M7Vn3MKGVSQ",
  "key36": "5RhbQ1CaLJTPGGXupDJpDYmYTncn7kU8ia1ngY7jJGGQPjimqNFuWDhkGYpGFxE1eYAQE4NS4q3tDdnjQrJPXuzs",
  "key37": "5kpG2YpZavHgfZy5kwxWKXtDLFdtTptMFumSkoa2bZuFpwz7mUnEnymwTJfPvwXN3vdfx8qjCN8ojAHg6WdkCUyF",
  "key38": "5EYzt9c5vVc5UzAcsmzhWyz9YpqFK15Q7Ybc5ZbRQ7Y35eHSvD2sCxZKh75QMDMjdxqm9cDDNfiKehJXx7eXZbvH",
  "key39": "26MvpHJfUmVU3PhbDcHgtLfSUXxyH3LPVt6Yb94HbdpjrtrGcvTu7C8wFpNjH5iDUWxzDwcr7NqQGrwGz8xL1fgy",
  "key40": "3ahgTtuwnUXMTHqnATAUcv4kEJKNjFUJNtPbdUepwSMxbdPUrHUHi4UyGzU36yMJ8ywsfNNpmRt3kkpqPpydo3DQ",
  "key41": "58vt7hjdvD94h2w6EDmTfRwgwK8PWJpcdoHHhHkVZfRav2HSvvRWQugdoVBwdkQVTkf8Wqnk9puVjrsMnrgtT1fV",
  "key42": "3UkFytQbdMMtaVrz2hXvijkH3eru2pPgRQN7v2J9mMznjaDYRV9L2DJgVvuaFHeJdzm3UfjKFCAxLmFkqq25Nc6K"
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
