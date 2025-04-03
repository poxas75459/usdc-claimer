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
    "2w3BFkaJgXw9jsSNDLi8RuMGppHgdpUn1RCH2NYYVmr5m8mRzry5JbtqtdUiWw6f65SKYexfZgTaYSnwembqSHX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HVa5zqW4PQCwdHayHmLoNDvNkUAg8ypjXYfr62oouMzjJ4z9mbEPzKmbGJqtPM5RjLq3HgXgwvnrxj7STeFYtNg",
  "key1": "4L6RDwJMG9WVvLKMW6cBpHwMQz8sEyNhrXJg75iUvmKoR7yCSNY22uebSUDALFbDy1VG2DgxHz9KkbwWkoDxgst3",
  "key2": "2PGc5sYe92o4qHhSTvvUn44h4rMvpZc3LrGuPXo1sabxg44kXCFm3koa2czWXVYq3sj14LaCbVzzADqBpfPyKHGu",
  "key3": "5D4QJ1d9A2kpnJdPSBzm68jqPJAE1ZFVhrvmdpY4giLvzgqob639uSZbjMMCcoUKcnnbRv5edcef3LTsbcamJ4Vs",
  "key4": "kqY1AhkfJVBjxZE92a8qB4wE7LiTY2dxTMyLdL44jMtSGPtvpsuxUtJi7mGaKnpDUVUFpsZH4nCy9hdsZsymUQP",
  "key5": "XgwjGuacq8fSTawbXUwQbqFo2ih8mX3N7DBv3t1NGoDgdBVKUnwkVQHDQFxjHMBZ58KRcNUXmnnYtbpkDSpxTbC",
  "key6": "4k53xP94rARU8f3dAJDtks8EG58x7puassM7Cp8oZV4gkA5exZBmb63ZhMWaHHK24MMQAJaxCewkT3m3TJTkwBx1",
  "key7": "4nVghhe9Meg4uGUtQpMhNvEMB9kLax5qZaXCgbo2DXiMfqGNJq18VTShaArBCirpwEEUCHeDj2G2KbBmkBnAYnUf",
  "key8": "3ccyxKy858wF7Z5tMCgb7Zo5tRSDPNQonuAkSFGJZKAqPYBPuQMHDrxpEcGF6iUuDuZXqH4zKHvnqGHZtTqKn59F",
  "key9": "44yz2TMa5uu9HkrN3qAjEybPEiVKdumnKVgm7XrTGsqtaAKxyYHzaQ84NEwaVw1xyVdfrTTScwy2tgbNYbHWhh9z",
  "key10": "65J861La1dMw4HtHmL7DJ3T5WJtKLpinPQC6MiX55MXiE2QBibk32mKFA1ZJvKVetpWzkDL7CFeS5HpW1u6Ew8jW",
  "key11": "3EbhHt4LaQ67tWDZxN7u3gcs9waGGAGSgtXCH5hD6368wKVqQEcunzxbBDHvngP7qmMRyPHiFB6nwHZi5dMNV5rp",
  "key12": "5V8CuHxFNo3C7vrjbEKKbMXAd77YzpvVYu765xB5TzTTVtJ6J3hdX3vEAZ1sPGMKumG8SDmtEDjzXnWG8Fx32Mqy",
  "key13": "4TUymcteokLEDHrS9rUStmviaZZN2zp6eNPa9n6eaGJuAiHm1FA8PkDFPTYKQ79xczGu7u1DuqbZFs9B794B2Z8Q",
  "key14": "5Zg92WrX8kxEnkaD5NacLKEUQmtdWuTjpT7fqjrFzvqMMrQzY6wYLBxUSJRFhCRnbRxjqVwZqq7cU16dVq6m9NRh",
  "key15": "3hacuK4NeKNrK5HNS11of1iiBaWR59cKrqwg9tnZz6DFFJaC7Xp885B4zbRfFLrLf9uxEJpA9dyW8XHm6SVDj9aq",
  "key16": "fWDgJpHGQDcqrXz6qVbXyL9j5Nse5PUMHbR7h7EjfwqAkBSf91TCxhqvRPX5ypB4EHMi6S7fAsrbYGuKrc7C6gX",
  "key17": "3QQseFfzeTQN2UMQtBroYvm4aR8gUSnLQZKUxzWmiamHhtXuS54AMkfPCAU22ywt59dAdjRPjM8sT1WMMiVxYfYF",
  "key18": "268rEHMFWQSDjNk5A2pdWbxAFgYhgF6KX8KeQWM5qZdyGxNNwoqtHjGS5ZruYZnqr3PrPzusApzbFAxKyUJmb6TZ",
  "key19": "4r7MgNn7iu5wW94SqMzjBpJv3k9iwKHwLPhs8ZpoL7GiVaZU9sozXfpVpAj9A7Jcge1p19o1NmGpPhkoMaWfkKF3",
  "key20": "5gfVTJ58SF1yAcyAqQmRFcrb4i2Z6RtxWQSsKvoGVUkJam5UYZxJ2KtzZZ9wTZtM9zc5voX6U1mUshUBSA7kwd9K",
  "key21": "25fLsW2ibPpRZFc9yCRwuG8QGRj8DBkPaz5dnNLZLew5STh6U7A5pr98ixTVnTdFkFCz6gphD15SBut5B6EiejZp",
  "key22": "Qeme9h4nBTttfGQgvexnRHPPS4P4Y5TVYV9HPsnc7ZDHbvq7LNiJUbWhEH594Y28JH8g2wKYeoWTGZFMdCqeFKG",
  "key23": "5TxYSBSRibqbsoyrPbTmpMKKfviXmcMUufizEFjwSySAC7rr1UZNy7p3gFSEQsXMEskM4wQfWv9NHCrpsj6TDUy6",
  "key24": "3jgxqNpHjwQSf7RkhmB6gDu3v2JozqmHwF6X3kjotMVANoKeofNgP2rYURQ3QY412wcFuSKfNz88ghHJtbXnzMBq",
  "key25": "5jD7PY2btLLvdzXTdXnZ5bJYFx7VWcsoyudXGRmD4Mq5PKgwgCc3pZvbHceivo9VRzHA1P2s2GLLWMGj2VCRuFy3",
  "key26": "38qABtvQ2pqHtnctCeBXoXSAZQ4Si9sr2Mzoh6RQK47R6w7JUTx6jfdxCS13qaGYz6mAUzYzsKTk6YX1Ww6hEE5J",
  "key27": "VvSGXy61tmnJKH9QfEayBwwWb4kdsiiyCTdexxzcqpEGenBHbybNUApUFnfBXsBmqnZ1cVjpLoWowzVbpigq7iW",
  "key28": "5QHQBEvsV2xHumYatSwYJZ2SZvXfaAgfnvV4WpuYRS5e2eLm1VrR1sU4y5vsPwYizLzsC22Qcen8YgcvgtTr54dA",
  "key29": "4JaV5tnJ5GFcb65K92PBD8pJS7N8AaUyivNvkBKxG8kxGtcGpDNCAqxTs86fkxx6vXNwVfvgYESFPHqyLiTmf7i5",
  "key30": "3QCQrKniK7U3X4c1Bifsz7p9HyXcX3ffBVukchdPfscwsCeJHjMKy2NieF4nCgjV9LZpK5AGZQPxts2VB4ij3W1j",
  "key31": "3QqjNSzRYkReFmn7LPzGcREBruYNBSG3mxGPe97QmjrrCLDsLaRtdC6pN7DdxfBoVkEt5Q5wCjCVvdJD4buGyVZ1",
  "key32": "5JD7zz8VXSqM6TBdPT9J6ksPHf47STrYaDjtfPB3pLAjSd1cf7CpuAZpebGB1PidLY3qwHKcXFGp2C5WX8ZpbRc3",
  "key33": "4jhCKTmwkK8DKLndvzC6SaPxd3uSGMjjuTLnNyyryYw19jZUK6w5a6mCcjDPTt9bxG9LjQQS3tB5X2qxGAgFh3Zf",
  "key34": "ycyHNenw3MYTZVUJTbGo1JGNLUdAqC78eXVFm2MFZeJHsV3xwmzxxBA6FUi5xuGhs1AzDffEi35VmRp9RCZN8N8",
  "key35": "2LgfyohPRgyfqyKSYqwehRsvA8sr47VSH7JuQbJxUY9uon6Uo6r9AjugZWvUuZPQeUVRAi9F8mHdK3Gwr2Rj8wE1",
  "key36": "2N1RvTYpDYvBqwNgDAUkMzsedptqTxGsfFtq44jqy6XTPuqJ69agW1sbwP8dKDr2VBdKsb549GxH83kc2gc6HJ3L",
  "key37": "3FnKsTZoKBoDdFCsTTiPkwFgprKR92WqUNXFoiT1MUf2h9y9mWcH63NFwqoD7PkXsGno2ukgmWcJvnm5heZVMaep",
  "key38": "5yH3B1waYvTH21kW6uAPGZXCp5bEWxQRoq4u1TVHib8wJxuc6r8QiDtBFMLoB3G65HYPfWxSwMV2d9THXcTikiLk",
  "key39": "57Bq3xinCvZcatzWeoa2rPSikpM7ZMaoY6qHC26cwzZH6d6JFbjdqeqVvjUGseMk6MybmzAuJJaSNBLqsYJSjLsb",
  "key40": "3ZnDdPMva3Cdk6qa8FN2JRNWdegzF1C6haeaxYfsYW5SjJxEPAN363ro6PswjJNeWzHqKjpsxJeY85CxLVttBq1X",
  "key41": "61VbjD2QqLNqBrEQz5ZDmJdg8b9AxWHZsYCd38wUVauqnXmahRYo3p1mMceybGRM2BheV3zKmevdcU7kfZdwhPVs",
  "key42": "UmoN4PdLR3tc8eNb9TzapLVweUEAFQtR2SVZuGcPGB8rntLDqTXTtx2JXoTijHNN8dzAZwNx9xgbLTTADgaxu7Q",
  "key43": "3B22BPvKzRQiNbKLqt8LDbW2DbB1d5b5MewmmcVw6TygE7vH9BPKfu3YsA4KEXcqW4ggHoFit4BzKvvhfLn4rMYc",
  "key44": "2SfrDAM8SmNXMnvKZMcemsmnvjkkGkgU8CAX3S2So8vyXEya2s8mqDPgmoFEvGatiZjKRvKLBsJUFBfm4SLbZUZ9",
  "key45": "38gNie2ohu5MVFQrbTLfq38dQZkwT4Kqj8s2345VHUfPmgjFUuqB87uMKwJhNt1Q2GqaZAxKRj4aAShiBPjHjFo1",
  "key46": "Hbu2haJxzG8kfTQMqQHXzcLiDTSYwRkjA3zULFq8xJmrKqhif4XYr3huqsLUQQjQjUCn18X7VccJbVUf2JhABMX",
  "key47": "5fwz1MSPxatKyzTuhyHus3krUp7444CqhMD5sUj79EaHG4xA9AZsWYAa4CpbrDt7sFvJi5NqHoL5EfChx6Nk1X9j",
  "key48": "63FePfd6CVUYcVc1BdZJDReNhmd54TxhxfDUd36gMsy4LpvtNRaiwjF5hmsdWxvoam8cht67hH69vMZAdLF9hJVY",
  "key49": "eWee163aqKv8ekxqMocb4YyFhLvQMwmbHKffPMSExiPhccc4pjZim9FMJ1jcHRqZG6e34mqYyM67TPJFdSmUgww"
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
