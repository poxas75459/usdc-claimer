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
    "5Xj9ZuJbiHyCiTB1wPX3KizZzLWs5Nvs5WvRK2zvELpMYpvkD1sb6GhrJfh25s8Dsvruo8aTfr8ug6fZ3bNvrqBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cEKaAmgvJbMSLqWjY1Ewp1xbEqMU764kA2kCitx4zQaQBoGu14m3W4gqQNGFEQzzXbAmTkxXgtqwJyLEUWjYj7",
  "key1": "3LNts5iRtgRVTgU1eXVKwqw5i1iy3aJwFXoB2KC1KWei9hSpP51dPfC57VEUFsAPyYPvFpBEaLWhYeTn5KwKJE5E",
  "key2": "2hMKzefTHSFvq87m9hGr4WryQcqq3PjF7vjNE2RJzyEJtR6qCJ7KktvkSLodoLR51CDEEtb33qYU4HpF45xGCqd6",
  "key3": "42t7C5pCbnxdQ6nqBjVN188PYm4baphoZVbkrTp3gwUfGgwA4MxgTAScPq6b7DFZPMBEGBWeiw1FEMcTzsK9MivV",
  "key4": "5Yao8F26EG2VqLSFXxCiZ8oWrFy6Tt417aAEdcum85CyMQJcV8qAKiXyxtZjNfdhSsv3E5fgiAfYXvaWcA3pSnzs",
  "key5": "4nXG85A2TonjmhQCCGF5MkezNxL1gCYCMC548pg4aM5C3JBCtxqGFEvSAY4BX9MnsuDxYY9zFsoumzsgBgBvZYMC",
  "key6": "5asNfNsEXdECsU4mbezdQMYSdQUyzSvxXcBAfu7vbgWfhzBLkUMaBUrYLY7qRSN2r6Livp4bn9NRkas9sNK74wvh",
  "key7": "5gaRpwEXtFU4e2mVeWy9sQ4SBUy5xpPDYvTKVcshzugHxP6AbKo1ftChuf2BAVSqETZKLKLi8wZKuV3vaSUG87fb",
  "key8": "5i7ar8Q25WeEEyDQBYMmmBh5Msau2g8PQtNd96zQ2x2fknVJBipfUqcbmPj2iuaSfR3WBuW56CLYWwF6WTLF7nAt",
  "key9": "3HVZ9yNAbviDqKmU52BtugLdWCzi2FxXfcf9AxyHpSiHb6Zzou9PqSPBmp5cToKeEdSUHg3FzA1D1ZdZJ9gx5dPs",
  "key10": "4fbUCGB92PALvACGxcF92qaFxxzYGFyjH5ZAAwYc27sAfjeCuPjY15CvG6nvcaL6XA9cGfJvjsyfgEbbGfSRew7o",
  "key11": "5zh7BVS6V5ueM5X37F2LKjTV4S2v2juZbz7RSpSRr8CouG2GBBUS72joS8NGP1hHiPBgF4rw5pxx4s22zmDy9bYF",
  "key12": "4S5LmixmUUggQnFns2LjwmxXjpBRgGFEbovDtj79kP3e33LiVLK36RW54d6KscXsrChAvv4npGHNA9wpmzpq5t7d",
  "key13": "4C8jF8rHfqsP7fBi5e5MBJRFuQNXDkXenyEYJgJqwbri2kzxY5iMg6QxTG6vNsBU3B4B6qDPrZAZq1kgkcefjPXy",
  "key14": "3yXki7uKPNfRNcgY6DyND4nJkDPCJpDLyoftYnMbMyf1EZVUoes9G2HEijBcqxbpKib96Qqd2t1xR7hAPpBzE9v4",
  "key15": "5A7qPwZPe9JdWScQF94CwPyY8JsM8BBcWmkTAEiJ6roD8xuRir57m8S58BABH1NEc9zzoY4U82nXs8aQSbW9dZp2",
  "key16": "2XaAZnxXUYtADPnx69PDC6oVGW4DiBta3KPaj4Q9WfgEXmJPB5R7YYud4i4quzCYswRgAthtYdAMN2ALxrbTzC5P",
  "key17": "5j4FZSBvARdB4mnrCgTc8AY4cUjB8uu3ZSRj8gCELAWdKwJVBrr8DVaCrENNo2AWyuWGMjrZbYfiMsQCWNybp5o1",
  "key18": "5FZJXYZNBk6RVsP2PWD3snWSBHq86BWzgNK4v5rPBVfpMWJEYJyDJo8f1F2CKcFXqU4jpKV44tmKHbpBybzuaMJF",
  "key19": "pdgjfh2jnTDfy4WxJhcnKzSEtjpDW6rgiDkamPNAbqzHJoDKf7izyfFmtMx7GtgXEDuWbU3JEgjEP6TEVPMvmXv",
  "key20": "3bZPkHK8YSTJqqbC7LYWnVxGLaayhc6tmtfMK3WeK3XbT2AkitHPPx7r5nR3zfnq67F7umaXWVnF5EcBtSxPNKA",
  "key21": "5EN5Ld4rZ12Ny3LTyf4oxVk7BjEAERXSxaKTmZ9SYqRkEEnwWVQUg2P9g6nkxtxx8QQVD5PU1uWkyh1Dswng4AoD",
  "key22": "2ERGX4jTEAWZ7oZ8aJpZ7hRhCzsCKMLWrzhkwDyArjEc5UDqovq9eFCKcBMJk1V2ei1nqYLwZhJkfJdQSXo6eTb5",
  "key23": "4TcgoevUDePdjsfTQrRFYStk1Dy3B96sNCDPyr2DQLHw8gPmJWDgN2BnB9WUGTCX7QnANsy19RgLvgdZx5smZXPF",
  "key24": "7h8n89ceM6iuHfRuFoDFG2BqkkAVqxjPKrcExe861vj6hCBVFZ9wdJiZ3PYnAG3WVCe8YN2eCzqCGTkE7REnpKY",
  "key25": "49B3dEpibZgLVVKFcyXVaWCdUwuEPGQtWdJK7hr2Nc5zZc4xnFexy7nNTcCftTGQ45VoD52frYAyjxn6r36kv2yY",
  "key26": "3kwZJHiTivMyf2h79VMxAbyHiDcouM7EBc9AhogXvMkkL5qXKAoAnpLiXLbChuHu6VdGkEEjatL96VoLgWsz66C",
  "key27": "5y2MiMSSHHPGRasWCuQM5Pq4meKoQEa2eLtpNX9WSu4HMFUxCSrDdLQFTK9zQdB6kcPBWFpTZgqqA9BAeWVfyWWz",
  "key28": "o9AnwBi7uyBsZW2c55546qWfBChKpVYMjtHaDmEpzrDPJrVtPUi5ctM1foaTjKGNZDzTFQASYdHvDJd3eDxg9J4",
  "key29": "3jh4xZSwXe9JWzuQi9xeHqnrFSUyZUscZnQ6zAtADDL7pgkzFRX91SXxNmq1nEkAq2xYAKCS1kDGs8jji8z54Mvv",
  "key30": "tnF6PD8y2uJUEo2QjzWcLgXLif7BWcmkH6jxgtnmoT5nYM288sCPDmkD4skvhiQ3aBZhWN3XAveAdyaJ8Ba7c8Y",
  "key31": "3ZjPgvK9p5MYNPaEXxTFiXSVXKaxfM631vcxtJWYpRb56PvNcJaFX2YsJbfWBL4PczVnAcd6rUdqwW8Kia76GLg3",
  "key32": "5CqZMGJMUNYqnX4BGZBg4CEwLA88ED9NsLPWgg7oQz51z1HYNQW2oy69Fs1TUAnVppDh5kDNU3jLBMBkWk3FmTNV",
  "key33": "2cPwnpY8zzkgSmYCoBGqMpLQMbyWkMx5Q4VtqTvZQmty9811Ea5ApmAb2FgKNfBTAKNs2KBqbA5V8o4TMiLsxVJB",
  "key34": "3gE2iZYzSDkdMRsj4SYQkmrmvgvpoCf9hF7Bn1dEwfk7Jw26qJHx34cJDHfy59JW7cqti6QeBcbJ28bDAHupGtCi",
  "key35": "24zzLQ7xG1pDhstqwXu1F71sid2BBUNBNfSsaUsFhYQZtruTMJbZChN6kdmZ9TPYzWbPhYNh2N3XBZaHq97puW2t",
  "key36": "4GPjyS4JYdVhaWLqrwk1pTqBXofJ7c1J7sbcTwXvYrLwgtp3pm78QL6Vzcd749nx8WcRGq5ia2SsZ2kbyFKPNm2n"
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
