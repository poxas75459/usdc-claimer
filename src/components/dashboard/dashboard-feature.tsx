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
    "5pkv5U7j2rP31g874JkN6qbF59xhkGD9FBHXuS5YWe3aKh6WtDEbxmTxXxdmHFwdvGWE5v9k1EsYXWs93GBMXJ5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5itfH1tST8nigXiQAMoWxz8tg3JViwTM1SbBkh6VRKD5c67ispf1gFB4UDH8HUmCb58uN9ZegpUEBnokBf8AQaQC",
  "key1": "4r3x94jh8kRC74poaMeN68eB9yEiHR1gJULtGityuKM2WDjm39QX5yEYLAbcc1uVuebv7WwCL3NUPZzs3PGf8gw9",
  "key2": "2ekBWS5HSNHFw97dnRrD69WPRvfLd3VSnHjdzAtttUBhNiZEwLHf3m3VpgFvnNGpSmqMT6DaJ8por92krQ99nnaA",
  "key3": "2VEbo95wwg9j1Yv6HK7DQrs7uWPk66xWhqzc7bSEHpwfPUemWBufMGQgXFEBHDnLJjBGt9Q1WFgLwLxjeMELh9jL",
  "key4": "4svrbTbSBoPbLAztxbS88gmqs5HBvxzncZJvCmFvQyzp6NNWrAy9LsVVQ5hSe4GJ3Xy9jMLgMjN354eorr3bYiT4",
  "key5": "2GZ9s6z9WNYWNqhRmA5et3Rz6vRZh7USTV2amV4VenfXkhgzFNmPLvBRtBa7TtwfFirzPYgG7zeVsy86n37K4w4s",
  "key6": "617EamPQWVbKu9mSWxxW9Y61FLdve2F37LCeKzTupcmFaG9dREs3pKFQvubnC7RP8NgGYk8K7eEo9ALAL2P5Hjs4",
  "key7": "4nWDiMbDnPobUqctHaf4HWUphCAo29dWgtCopk4xDfKHwRMdLAGCnKMNWSqGhkhPrtCSzFE1drEPMGQLTQfuDLhn",
  "key8": "543pDubpLT8V8Tzm8MJVGvhyFkeF8LD8K1EvvZVNDpc2V5vXXh4eopSiJNq1eFWtRS3NVM7vYkJgLfqZ7xfnHeWC",
  "key9": "2hobZMEK9Q33TncuojbAhgKRs9bB3Z2JA25PD3S65kPAtuxKjUW4ueCYchEf3oBFi8S2FDkeLvvhxCAJxJyfCak8",
  "key10": "56ueN7rzxyagk77vEnm1dNu3MBBuyrLM2PzoLskT5mvkV78CguTBxgyvHUPM3L7kxGXCjs6wH5F24PjTqmMtWQoP",
  "key11": "4e914xr4L9R4YX3kgimrm8YCgdJujFxiNdfVvr8pV8KNu9EpDAtajAHPmy5mVuxKZJtZjvTk7YxUTDxtByAcXBpZ",
  "key12": "4ET2egr6oZJaFK7NCeJ9hnwGQsBLL3gNUiwxEzRirfFxeVi88xEgPMMypiX2GCf1YuMiXjKpotRftXiYQzRjUjSM",
  "key13": "4pe57NW9hEreAdFgZYCGYoFttC3QD6Bqub7cKth5G7QbYpEAgoLri4aP4qunNJHQ8v6q7DCsgv6sSRpq9ajDsuJz",
  "key14": "RUtMkBjMbjxY4r3Ub55KTSGmtasamRMqUzhBa8Ntwo95QTHf3YSCxuAWEzJLNwsvtu7VGRPtDKxusazgrZjdywy",
  "key15": "3wsiKepzn2A6cXn1rndKXnUDqCf34HPcWdGsYVLUGofjo8eTcoiNLjMj5DGQEpoRfZbJRq2whhAt79zt4SwrRAbX",
  "key16": "mqQ16v4BYMCg7uehRE8iVNCQ5BS3AZyTktUseeCALtASkP8pMpYYpNAnLn1EVCLnZbiGhskbXJ3gMRckAKfCsLV",
  "key17": "3p55VcCSqqNv1VCGC8QwQg337jubnkNsrmXaJxWtry5jdMzHJ5q3GKHUVQYb9A13wPDcKWjTPYS4vAjY1hyrf2eo",
  "key18": "45tsm9dM757tEpYhDpB34GC2X3Gqbs1RUjKiFznyyJvtTk65x3uc5wYpEV9FKP6oMRgBWbJSXaYUfZ8RPeJc36ia",
  "key19": "3iwEuuX3FxKT37a9PoBeije2P7E2SMwjs6J84iaD8i5YLPw1w7fwtKWC6x1bx2R4bDwgJWV3yweHqejqhnzVrggH",
  "key20": "3wpavNqJiWT5j3tbVfumFPAvKQYUWbjG7SrVEqd6ZiZMLE9HaLFcQZwQ1gcQmhqUYp2Dc7BebNTnJzLEyeAh34TR",
  "key21": "3jE9rpiSBURYhLYEAzEHBfKW1REFQaVAB1CrLfRL7jtiHG4VZok7o4CEtwzr6kmefjyok3ZxDZvgeG2mBbyJe5Ek",
  "key22": "UTjZSg4j3ouvQteQFWAtERMe9Ac3Tavng97nMKrH5S5JpwCAnKBsfWThAuZMQK7reVHrt3NQjSVQP8ecAooikW6",
  "key23": "3AttG3PfGGNm6v79gqDWzDv8HyyQ1vb1EBsV5FLtWPLxiZBwJvHgjCPFAbbwxG7pEZap6XEA73jj4R3uAKSYkfXc",
  "key24": "5QoXbjm1KbHfRUivM8PKYdgChdxBK8wfneWYT7948n2oy39YK23q6FL7FR64wEqZ4mhvD2EbWpyVpD4UbMkanXdQ",
  "key25": "2eEDsxF7ZJJfR4jtXuvY1VLTBdauGcueVcVv89vCmv4V3faWW9V1uiT7dbdWsFnGCw1oaWLLCvEm9P9czQfnJnRy",
  "key26": "3RzaGRGcLJLLPrXhz3ZrPwwbWoX2Z1WYGjqY5qRhycVbCtX7MWbvb4ESgp5yncdxpKQWWxveM53ibpfKAe3U5VDe",
  "key27": "5kcU7kpxaA2SVUfmh4qChQCGKfvUvShHVQXhD4jLgMgE8WjwURkVsR6VomzMyb7idgJV82TJyzStH5REzCMP59RV",
  "key28": "4VKM9bVhMYu7wuVW1XJiAqoPcZwS3r2Eqo5j15VGKvgeS6MN9gutZDBaa5L7JCBMEyc78L7sLEgMGUiiGLaFMCNv",
  "key29": "Ca24axunTzeK1CrkocxFQEvXUP3dY927GybSZqzfyiWWUN1SUyXCjkUPqXZ4XdgZDaKU3xWAiJLXmRvQGNBfwfu",
  "key30": "5JtcfhZhjUARzQXUvdEGbSiDZf5bwfdnub8He5RkxV24zxjqQW6z9XP5XkRq5xTXDbz7LPsmnaqjYMiqoaR9xKJj",
  "key31": "28ByvVQPXZK2buQjibseXjF6E6TFt3vREMCmVtwMemURZskyeJ2t9esV4NCkXk77XrZEXiNCQbrEY7PiVZ6JMXZ5",
  "key32": "4C2QDz4iqutKSFasKscxp3aUDt842y92Uvau6RBgHnyJXjqyzKfxUyB3v6F3S4dVQDNEAPhyXbyLihKXn7geeRqx",
  "key33": "Th6j8h63S3eLURxiTD4giouoa8muQkdCoF7JqVCxpsvAQJXKuWEpAgoCYCnicgdDV3eHm7V61wmgMSENLoirSXG",
  "key34": "2Rnn6FJPUbme2hmLiwKXGYHJ7zGyWsSa8WBLFK6JRrRZcJDxqxUni8wM8VQ7HhNk7bhqdFEonWo5kLC18BntMFrn",
  "key35": "4jofcUqvRJTN44N1vFmJgJAvKXVHk7kzxy4yXWJVPxZFntCv8bF4T8NkWbwWqhKfC4ySFUzJ4dKYCZvCF9ng43eu",
  "key36": "5zCS7PzutpJih8cJS7HZS3x35MU4hfiB2XfEF63VThHenRxRWzhv2GmRtrDpk3i5EBZznMxPwmVuqYLPw328uNMt",
  "key37": "CcPmtEqfj9a3JXxq88ZXGh3gu2YiaByhxYHaNikeWJfZnvEWxbkaS4hMZLC3T731tGVjA9BamgB5UuZa8kRYmz4"
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
