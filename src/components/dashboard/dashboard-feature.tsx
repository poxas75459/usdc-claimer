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
    "KFVPiLTHhncoRnwkmkWugkjbWLmj4hkiMhbWQVJDWv6fdMnEMnmuRyCeZtaMNZzJUyxScPgt33ywqre4Pqo9iEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sAUL7gPbJQUAnZHgNAtcswjUonmfGZ5uZfi1oH9aRudZLQ3Y1NwsL9JWiR9UJG4opHKZRvSMM3bUp2qrPpzCqT7",
  "key1": "2mtFD2FgbvYZsgUVopxqGNpPc8Pu6KVfahVUiuorB7KA7X8YdGKMYnRYmJztgcQCNqVY7GqpH4QaLff2VkcsswFJ",
  "key2": "5bXDhTFWcBbC7CTQNN1btxoyFnziLXZhDfP2aXw5EdTgWGaMryieLGKLDAnFXSuArH51AXv5shCkrNerLUANQrpP",
  "key3": "4aZqCBMp81XS5rpSqf27i4Wou3XF76XtkwyuLSZCVJDgQs1GtER8BqAFWfxbBrjfYZKMarfbXaqESp4gmgonBMU4",
  "key4": "5SVER7z9UP76NcaEmD5uXY7kNNHBHs8QGcBZq7ae7AyrAJEF8TNUDSRZb6t783dUQBdWvmnzFLoBYdePW6zZsQTC",
  "key5": "5YAHqoaUZSmcZFYgXwx86GvSJuz4Z7YryscHQDWcbU8FqA5drF8K2jFQLCEetgst3oNjL3GPyinY9VaUHCeA8Wfs",
  "key6": "2U9Q2gVAEFkbTqxQrkZVGronx2c8DNUufu2c3wRGhyfSV8dECo7C3Vv3167VEcfidDERhyXsu9ZaB9sEgkjcSAzm",
  "key7": "3wumVsALstdV8MyF8sGWvmfzZs5XCLJpjovhRmvA3oGa9LZWWuHwnzFyGAdTcY5JycfGhBs34EujQtmYdssfAE6W",
  "key8": "3p7wizgC6Y7sbpozfCFMvvEru7qzZ6pza5q3V7h1XyBwVYkqmMDFsCAZ52sZyGQeJtanTbki2yTGScirtCbRB5r2",
  "key9": "5n1T5uBveBgNtfJNWKPJ23jrL9bCkeRQYvXkMs1B8TW3CsS8vZwxEB8WtucFZ6LMwAP5TfR91FiiDuE3ZqtyfGvw",
  "key10": "3xv7UtdFxbnnAPP9awKksyrpocgPuSqvSCVf5GALeYk1UAK2RP1S5pEddvuYto5F5RMeEr4B8GrbS7D56aXkv5zZ",
  "key11": "34sUWZWxZzXfGWifj6Z6p4yuebpKadX7L7Si5rxuAFdnQCNyxpdCZuzeepTB53B2JbEed1gXE8TgmMPkA1mbrygR",
  "key12": "8Gosun8Eg4Vqso7re8wnNxpjfu1QZU6q51pgBLTqBvgiRdhxFmwqfx4UhXRxUDxmRvzheAeEnXtFn9LNsyXEWjk",
  "key13": "5gh4ucdtDB2UQ4bBY9JPJDnHddhdsFJnYAWbJQZQBHboHZ9sUrL4D6UHMb6uZdV5QAXr1RutkVreWHmpTJrLs5uW",
  "key14": "65RSG8uJBmZDhffc3m8c9fsmxArFFSmhZffSJQHgjfgoNC8ywztyaZ3oV9FLnN4eJXvetHyUx2C3nb9fpaJ7s8SC",
  "key15": "3fpiX7BTKUECFqJZ7gsBHfYdFDAJvmH8FpBDCg3FVSDbdEsRDi5xLGDzJvcP3xgqjg8xnJJEghs8UuWtUSYBuwfR",
  "key16": "vQo5DfronpVfTH8cL1Enj7MTSZXGM34hQHrrXv58AhyEym6G7KUewgd6BMDUZQ6jyusogzjqEehwTqW8DbtGrhm",
  "key17": "4eA1VXyxrqnWo5V4CJrejPNYE7QMkuZogp6pg2kVnp3tzKQGPLwPwXetr7ejKHMrbNh1nMAcH6ry8yYqLCkxVLsP",
  "key18": "5eBwKiiZrxYAGBngoAeWKAiQyiB8T2kMF9ExtHJq6zLCW8K83ULY1cdtCgA2WAeyRKZh6pkgBsC14u2pHxteg1qs",
  "key19": "64jRqiWB55CQsRPuEFYQUCxKS3MyS4zNkYVwm1UYPdyBm1DWG4otVaLkBYCZbt8pCcNmo3LeQc1qKTYTUyhPSsxX",
  "key20": "5LPXR6BCZsoper4x9AGG6RJJiKtYLPwj7gaLrqmgKFowMMdFDwqZfTz6HN3k5Sfqxe7CcAtoQYya55TJWG9TMa4e",
  "key21": "sTz5LN3u1PqokU42rg5aSuH61TNc5N6GjVHxf3gJUPUwxGVnw8FAb2sesaT8oDAeHSiu5YJ1JTo6EkgfZvZ6u8U",
  "key22": "56Z8FA5qfdvofZPnW7uYT2t4XdrK8iTHg4WJSAxpS6GxS26Xabj68gAnwtcStD449MqU7FWDzM618HwyrSiwRmh8",
  "key23": "3vWix5dGdPpSArf5UzH4yYLe3Bxw6eAgzwJKLAo28mFfnS75TjJfhFcPGoP1pyfL8pyLq7sjE6HTDSMsvEMUAf3A",
  "key24": "5QoGGSrHnZrPwc3wi6gw7qkazZhGdzjgj5WUBbchiSykcYdvDQoFjo8HWXMTwhzNMe7FJWCk699ZTXJdyK4rKMFU",
  "key25": "3ZdJy6HUEdyGP8UdUG3TJJCGd2FZAWsqFq6WnfZPio63gMXWtitiiXDUwzbzf7CgqAGQACs82fsHPVp6rmnrCTDX",
  "key26": "3euaPBtwF6FV1iWfx7sQhC3a8kFx7JLtY9NBSBxt3A85wDcMVCHu94DF3ciwa6jqDZ3yqoqa97rhvomrAqP3qWRU",
  "key27": "3GEgxwhQ2WFL2WrqeHEHCUSq5eGWNfLH79pkaf31PQi8sM2eVxQE37c1k5c1yVzwNRDcn7rJEJug9nihaq5z4q5y",
  "key28": "47MLP8kp8sydLu7Rx9SX1NuvX1H7KAJ6ipp2qhLZVWtVVLuvb18BVRca4sZQs5QL93LK5hzaW6LiPGZNbw6jG4Dj",
  "key29": "wxRPeFQd2NmmPbmVwT4SJx4ZBF6uZiuALQgQgA4LjtwcDfCJe47TcAzNweGaYRFS8tbQKcXp5nrTd6QKuQQ3eFP",
  "key30": "25ocTknXj2aCpZS9H5aGD5yGqkHxYobqvK7UupiUW6g2mB9DyGLapRqoMvJoAnnU6CiMDo1bFd6xD3KWD98DVTQJ",
  "key31": "4jt8KSxCqPzMYLMgMQVVpUGXpJRxmWW93FHsxnVALiFJtAZYTbcx29ZV6ffPrAgxYs3qyyRoaHTZrY1EN5P91CYu",
  "key32": "5yPR5WnghB2RySGg2qZRH8ZHcFUGZJab46R3JeryJC3sFZumJEEYZGeU7aWizSifQNAZfYgXRqS6YdppL6GG1VzA",
  "key33": "NhbzSwyw2JdY7NTDg6fEbBGEC7fmtE2wxZSLJBRTmxQmDGY6RE5h8foBtz3X332y2Ab1rvoD47MBMwNfTTTGhHG",
  "key34": "3z6zzYEND4oBkwBYEsXWvsi9W9XgmXEVCz2457hiVc1saT5YyyFnheABpT66CUHvaWJHvQoSAiGGspwLZd2w9qBu",
  "key35": "5uwpr95Q9d2oERiDjtzmfDJvpNcSjaASxiBP6tE3pv1Tm9tC7JehvXYpCuV8DRcNfQfVjgF6qT5bdqVYZVs4ULpZ",
  "key36": "tqtbKoruiTvtzz9XbBkTRBiakZQNVbFocQHTmpYNTbULsGjhkDATgrpNbtYfuopyXzMvSZiQZdMmaZSrEwRtytQ"
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
