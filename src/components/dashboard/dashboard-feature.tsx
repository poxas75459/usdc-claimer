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
    "2UJAvZ1oj9hPaMgDgjrTLyiSagt4PoTKeX85qK9hQ1yJ2soG9q1VhcfZZLsCbqJ3XqbcGu3rK5LGZrdJbZ9uhrfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ews5efu9NGXy1MmrB66QDCqczTFBP7sgUZDGaQeb7ZA3yaLDK8vQR4rCB15a7j78utR5YMcoNPGDZWbGenhcHca",
  "key1": "H6en7VTQTaczrFXfzeYdyGcPxx4h4ndXWbnjgXUwViYNnJPtTFJJyaHDVbnnc7U5rC2z4R4VV2g4bozSQcogkE2",
  "key2": "3Rw21WgtjgvoX8xJxVqXq9mVjCXhYQofvv1vQzg8PJC5RJi4e842AwMDBmjh28qVRsyfY12irpjNQcs4331UXqvj",
  "key3": "55gbmm5nxntNnXuMtH2taxzDUHkMf4aNWXFARLhE3QmKhEDKrvqE9AdJmdwtAYL8tSrrCJv8HqbYSAwLRtP34fMT",
  "key4": "5rpLKWw1m8Xep46dh27T4tHpgrKHVPUX9ziF9U1rM4MV5trfX7jra33jJrjpKmdzaQxKsL5cE6FzYo9SqTB3CTyt",
  "key5": "NHc4wii6G74UeZie5xt6NyfMQKfKAFcWLiSCiLhk3Ts2oyfQcuqjeMid2V4b5wfS8fu5RX1TZtLXTBP2tc49s6o",
  "key6": "2yPsBzVWPgRmdhFHGGLZr5UsryNsVw8iHDSCbNejcSdJMEEPd9HLFgWBugAogv1uCGR7Kna9DnNFaAncZfJ1ohAv",
  "key7": "zWGK3xc3XiP11KKf7U5KqgjEoXqPUztkzudfgf7BEHWMrZb9x72LQfW6wdBo4VgrBtnBL8wT4FxPXCR935Xj9ED",
  "key8": "c7ta9oJng13KgfDMaaaV5EUXhKZBgEGtRKp3v6t7meYU7P2EQZMWPugbgSmDAsirWCCEgRhYEu7mtJ1VbAwrevx",
  "key9": "4ejmaBjrATxQiRUgKMkoPnZyJfFhofg3dEEE2L3CW9NppHUhDpDso32LbkMMMJdEmvSVrrXFVPbuYxLk31hrkyTD",
  "key10": "2mFAS6axJDMo3ccvSqp52wKX1kyyfNpZe7cFPmAi7ojSS5RvsLyUW3gCxm3VUGHBCeUcXhy7Jm7zYb14haE4atrf",
  "key11": "eqRJENmQyA7nuAh2nbYPLJxnhR3AtiSFNwuhYyXrGwcyfA8wHEitBEcsRanyDeaRtJtFKZzSCQG2VDZBgBLN3fb",
  "key12": "4HLBZUxE3wbtqzkrE6YfhtasZKwJWUq7MkvVXSTY3piEcaNujVmqxmWmdN4t7CEttZVLuBNB93LBR9zUsZWqZ5Hx",
  "key13": "63JeotH1QwHcwT14ebHExyvhw6azQztbe9Y4o6AQbRsy1zknmLCFeEMn4FsB5YGFXNZGu2YjmZJ69YL1sHpJ1k3w",
  "key14": "4a5shyMbzf9V8bQqTcn4ZUndnmhycGTU6CVK6STq4ndxgPxuh4EsDNDaCNqQ5rn8G3hnzDzoo5YnfWWwiyv9AF5b",
  "key15": "5sxMLVsoTRMw63fF5qP5unuwGKMMqEBUwdY78h9YhhYCKk9QAjxuaYbdvivsdqP9jxFgBNjnjxdbQJfFbP3PUBmw",
  "key16": "346F1nfoJWxkhjitPQeMSG1qAqLYZatta2qyRhxurh876QwYTZiwz2pCsFgCRQkgVAkiGx77YA9TxAgeJkueADCk",
  "key17": "4YMh6jXvYsiZLpboMQauogFvscua9RbvmwwoUoG9Xh2e34kYg1uWt5pYWum7eDv6t14tFLNG5uuGZqHSUX5NcYEL",
  "key18": "5kP2t7P77c5WQYMfmXQuiEhPgs5AEncDRrViZqQExVDA8cjUpXaR7qJFotLgLCHoKqHMLTtcTxFjF2LDJggCJedc",
  "key19": "6KkSBUP7EKWdkMxJNr6FsavDrt4v2MQsk7EDCF7Bp6VyqbKyWpKqwUAvHWGBEndEaGvAuZeAaDSCmcwCt2tqfq2",
  "key20": "PFdq4TavpSsaQAAyu9vQuYVNFAbkHdds6KgheznD1Pv9MbQfw9JRLhJnxxF2qajmCmC9kZ5xGRiraRWhzYEf1J3",
  "key21": "4eGsqfnKBmxbs5CN1LnHZhmZ4njWn9oHkRd21B4JM3w1aDGrYGumfhfmuF7S4eYmjowqk1PDAtywdWYQtzqx773u",
  "key22": "3wdZn1BWdp6oEogPrG2AwPwk52gYA6n2XAYeZJds8R8pnEaJCgMGqZLV8MLxBGm8pMRtCxQnNitckAsCnRkYM2Xw",
  "key23": "5nqBwAHPXsP28uN9vgSNsWSgoLDhX6yZFAEGSorUqhbG6P6XZyUav69vDUnhn41X5yDzYFAVjH1iBUbnwLR6TTwS",
  "key24": "6NsdbVPtGcQjFAXtR7H6AFzeTcCrdNvNcZGWfV4HoPKwuKyBRriXmDLhhXcJmSnLQMkPaCpBhHANYhr1HBWXbD1",
  "key25": "2ug1JTQEUq6FDVXyeBStxWQdKdVK4JS413L9um72YqYb5cJPjEevsdzTXerTAQEixHcmjZ1YAeYFibuzaDUyvosf",
  "key26": "2pkh5kijFKjLr4Rn8nGfuxvMbDZ7NaQNC7H5swSYtEZgnyy3Z7UmfreXftyZavRzpMRRmP5HakYtrMQuuqsdPhJF",
  "key27": "5Ee5vDzbmcSjrFSTqDNhsmtX8tYVPSXpGKXUKRaC46dw9bXRaa8mk92R5HA5rTWnLG5YeArZD4NYkr7bYAjYtAKC",
  "key28": "56BwhXnRLFSjGg6hXc4o26wsjiDD2Wu8iHxYjimrobuaSqPQnTSToxgEBgkJ7HhfRhLcyZg4Vb1Vzf41fAvLcmxF",
  "key29": "5nbCkvWC4geHD939XjN5hVrtAHWEmgom3cutXJhn9A5ebggCJ6iUqXR24T7BzGPQbEk8knsmKcFQFFHWiwrDLRQQ",
  "key30": "59S42NgHpVGaxy1SKmpggefxHgU37RbRyj6QPJYPaXwhx728eXk7hbLvhutWqAjzPwkQYCvMDnAddoyEzUdz1UF1",
  "key31": "xySMxhKze1z7JjVKPJCcgoGrwtEGkk3kQsywQ3ApKAiQmcSuFWjuPs3ZEgNatNavDeW5sh7k1iQSnxmQJwfemy1",
  "key32": "54rNd4q84j9esMj6gUC5GTSsg9uCNM44BMbARePKwopG6eJJGuQGgooJXqRThYDs67kL4DcXHzhyxSA8DKYADnkE",
  "key33": "5oHR7rR1BoVjcDJtVzUkkiMpMwevawNSkR6ZhYkZUN8iqoJZ6ajTUqui8KQfRghmpuKJNZUXFjUQNfudpPJvbHg9",
  "key34": "5QrD7RdF58pCAW9ZbPvTTuvw8Anm7Tuuk3kJh8uZJPExq7HPBJY67ujdzHKGLzmXY4Kr7xD4ocZqFR6rKtHNi1sL",
  "key35": "62zihLwPRugE6RhoMwvxW6Ez3iGPxKaKNbeQVdj2AAZYbbtvxh1fV62ot2jG2FZPwPBwc45fk6Yk1vMY6ZDsZiQP",
  "key36": "4ox74jJtJj9ddsdM8cv78zZc2JZpsZGRA4NqjicBvjW1N14QNpUgZX2t7Yx2gnXzkx4TmBRYaRnVuzXWyri3kouh",
  "key37": "2SzD5RnU2qpicppebFHjyUvGbnqouwAsKNejHTrkwVh98igKimwKcCz7uWmXvzpLm542ZBVT2JvnEQEk6o8Cas4o",
  "key38": "9Us1bbaLoYgnQRa3ftYVD879Au4axWaHPNBBQeUhojC61z84LB9p13zfU11zE6bJzzdY51ZutoTFyViTU5SceT6",
  "key39": "GjdFrdevNpQ4tC3DvzDz87j9sU8dLkTxBHrxwCTaYYPqP8dKYAaiWSK14wxzPgZxSmBtATdKfz5h23YwfuRkuVw",
  "key40": "24zqbYsKEwFFWXSdDhEBAXfXpd4EcqEqGJtS84pdf34GJJ4TsBd5Jq4nCbJa22qkyhJAEBT4pYFFBdYnQCqcSfKh",
  "key41": "5yV2ArHCNojwU9tQFBU8JMPDcSZzaVFoTWf18yqPyD9y7fiqw53BrpHiChdAdZoZ94U1tiDbiuiD7r6jAibJtN2S",
  "key42": "4UCXNV7pbyCoXWev9ThwLcQKJ4cyFWpqzcZDgzfAo7fjhkBAW1A9N7cjPjTZ9NZVw14st1Nm7kFU35swReEdXwCn",
  "key43": "46AWhwZcFGvg6Qkpq2dfpQq8qbE5bwnyWLyCtx82fq1M2AyEuCdcQy28FaB1pjw8mip86nbNFYZBJPfudVGB8yuf",
  "key44": "9FiywgS3vwzwjSPKbF9JPHaCbvwVxNRHgjUCCy2vU35PuqvpbSEsT6yxEYAU4EZZHAJbqqy43jMpk1yma6HidzR",
  "key45": "4bVgBPuMm7RxvoyKsQKmZEADXDJoEfHapfiGuAVXLDE4aq51u2Yu7nXJS4DkLLduuaVwjJTHsP5aaiVKt3F7CxDL",
  "key46": "5GDUoobaUuDFqG1ngyRwnx2xGx4uNVJFeL6qjTk1ycCvdoKFb2N7b31J25PtdxWmWnExT3cSgm8JW6QBJSe2cwC8",
  "key47": "5JqR4PUX4xZx8k2Umge8MAkZZT1UJdQV8E1YeYsXDppu9Rh6JV8uXy7jJfg786QhHKkZ7T7bgLwzy96nqBnk6D6S",
  "key48": "2m232wDXfxLnKnvCSk54GyrC6TrYQwAxFxQcyGsBcE9W9SG1GeMr13rRukX2nGrbvYdLeT7HKQoehzeUbhVM2U8h"
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
