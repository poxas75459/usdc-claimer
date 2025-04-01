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
    "3MJUAboyns7CencRm7tEBQx5sCkXkM1jrMAnXbsZ1UWPaVSZ9R3oWDeWKrzpSJyJisWtcZVfXAaHyTNDdZ1jDwJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m4ForEMqcvNgoBS9tBFN2DiFrrwosZtwxLAvtipeDvsaPyDA4Udydf6aKfuevvT6rCc9axputkFbsjFvSkzWPbh",
  "key1": "3oEkMZtXyYB1RsANGYVhpnzDKqv2KHcokhUiGw5fDBs6qtCjUe4mMWpUEe9ttat3FD6mZNgBMK9tfpzCM5PnmxLV",
  "key2": "66eWC73iqmZkWEKY76NVEnv3vPV2bgABcwYHym5jCZKDd2pngoCABRPRXACCYaFZLEZqVoKq4QK8iWhY4o3ZtjTq",
  "key3": "LqK6gVv2M6awuDX4aEkYnRsvc8RHS11AFfdKfTe8vSKh96ZdBAmagiALWwnAzBR46vBsTHpytvtrGsvfWbGvVYH",
  "key4": "3Ci4sHiH6nszAuEtPbsjZvTA9rpgRK5u4PU99Dezktr7FyHNQVygqRM9ferYVdisCN9L4MDC2DawhMAioHBt7SUY",
  "key5": "4xCQEd3XcCBCnXVqCdsR1CvqMPU4hrk8AnyeBE2bTumjWKCGMtthVNQWXaJFfBKBzZHMNEWGyRsFKBdkyxa557T9",
  "key6": "3DzxY1oJ8SE2B9nuJfihcUAEpVKZZG5gAB8kqhscQaxWdYeSM8j7NE9aGwMKhBZsBNzKHQiMAyLKFdjUoaS426qw",
  "key7": "Z8NpV2Vs4ERMPfkgkJWypNY9SFim9djNJ7Do3aV18RJZQfh3nvZF4yfxxYppUnHfrrpUWgkVWDkE4vypuFtGAmH",
  "key8": "5twVLhWiuULPgj68mSfNMfesHMVqBLUGo6FmAN1GSCzViKcZsXpnQeLsRx36y5pfjf8QL6rVzEd1EqER4biqEF2x",
  "key9": "4APUDjvpfrer2ehqi4sGPQBLhAWD6YFX9SKaSKA3WGiqLnwne586fbkVEo8eSTrVTJzYGyttH98wcHeCwjYt4W2n",
  "key10": "5wbY8cAHdtLPrZukFoTK6a3aaUEtELnXQvLDaowQeHkvrZza84edQ1T7S3JASfjzF6CsknELf9sHGNseBB21vYU6",
  "key11": "wCy6nhZt3GH53X6VNHdgWbS6tG2kPv4L6G3TMQv5En8xEch5zD7jFnqPUzFTKqiHWpH6DDpU7YAJ4gQgakCfjka",
  "key12": "2xCMokXu6oNarMjcmEmx8kmULxEkDDHBhoYHKfF3SbtntJeWp4raxJ9UAAW3Qnyi38fEnoLf5T292zER4pVNZSxp",
  "key13": "4k7CYkAGMGHtKPhH4DjLQPZBV2Gb1j5p3ot4VNvq9pMCZMi6hMHK2WKDxdJtcH5hoG3zbH5dmnUkx23fSKSkj2Pn",
  "key14": "5c2Mst3AaNFCVVNT7dwQqCyvbwjh74D6TJn8cEixZ9Ro1RZRNhKH8CYhxHA7DLPEXLqBDA1Wvi12EjzRV8eRseY",
  "key15": "2JpNrRCLNbjC3vXGMDr5Hvyatu5jSCqJVsJ4F2eg4ejM84qLedejayDShGWiZUs44JbmrdxsRd1CTbJHPJhhhrm2",
  "key16": "3nYYn4jTqJYEX4xt1ap4hiTMTAnHf3ToVEN9bF9Mo661Ekff15j5U3ZniZYr2VAYK98F9y3U5g4smmYzkvbKWMLs",
  "key17": "szwraJQ72wYKSjgBGpAccyw7CYSCydNsWFfVTkcVrdwdQx8eut2P6SLkUscmMPttsaNm4dSDnxtE4YrauJirNLR",
  "key18": "2nQnaKJCQiNonez2qcG53JuGaRHcZo318n5SqiCLxK47nSjx2K6RUjXhKZXZamo18BVXgTVenLjs25qQ5zWMx31F",
  "key19": "5CUn2Z4Q2TfEpcFs2ozudZgWhPAWwt2PD44x2D6FVtJPSFL62jzEcz1bwNB7329HGJSGt2b8Ekeiiu3cpeoXCmb5",
  "key20": "3bsMpMPmK63tjgjYE2dvi912i3qt7nAizXUxvWB4UipTfnWSuFatswGNVem6ieNxR2t5ZRkA81amkRRDfjMUMf73",
  "key21": "4KCTW7udPVmmhGtw1ng8ipLic1wNxeYdfwazpaJp3Qj4T2ZBUxVHLbYiaAgJQKbCLXTSkvuu8Ns9P3uRU1Leunsy",
  "key22": "41rZt1nCLHev9cYCcNRXFwVGkFy6zKHCCNF2AUJxYhH7FnvNJ1FvzWc5eG4DboDZDiA52MW6rg6STzqh4B16rsnt",
  "key23": "cEx8UGiiomgFTZ8KKy4q4KHZmtjqrVUT5TdG5eeENsRdfLKJef8RhHrCzr54ZBcnLTEG31fge3YPztN4TiDWdPq",
  "key24": "2JW4ge254QLkjFWZMjgDiRELD5HgeDpByN9wpQYnJGLDWx8ne329AtCT2PuhPzi12cYTwKzemQ4wwNYaoY9uoYzb",
  "key25": "5SrYgNBzYkGP51zMnjv5P6maepCteAHFtQsraynJu2zMoUsanHZgCCFnbdSbbVqxLXAYdkUCDGzEcS6rFF4Ei5La",
  "key26": "63wggGMuQoorQNuycYNLTp9HzFJTV6u94gqVLwPk4BtooiK9dY6JD7EewYvXvTNDgdFp7tqLDUdJqmiZr3x5oiYS",
  "key27": "45xntkQi8itPbXAu7x4DxyBJKDZzgbN4TpemiNd8uAoB72Uhfv62Bh211vsx7K6ZceW2Y3BXrpJytdcwaWCEFNrW",
  "key28": "2PLbiw8MA6vVSbG2YyzaoHyoEykzDD48BYKZXN6FwZogpbkf48hEhX1LCvWJ5kaKbxBu73LutrNBwjjYNw6BD1jW",
  "key29": "2Pdf7etcPNVCtFa96dMvW8PvWC2JHBDVuo883F4gMAcuwy6LR7viobNTDu2pitoip4RuLYg6wuGayanX3RwBCzWG",
  "key30": "2Buod98uiVqqQ19XQn82NnfTgyCZWF5VHiqzvH8YuQCqLZTZiNzboGq6ffGio9QEJqq7jXr7FFExyVwbCSWhBd26",
  "key31": "3KmBCxibdG74FrCUoGU4fE1BPmvwAoKSjH8BKVtTw9n3kiwh6U6vt1e9A26JuVHVAJSWSFVAPfZB5Nm7yo9ACfxa"
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
