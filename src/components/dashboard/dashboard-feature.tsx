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
    "mhMb9oMQHSdLPq6359JneVHFQHDcPhQ6aXhR2FMpbYyQY52dsGUhJYPnTSUkk4aiJqwNHzRQ5aDvjMs3u2ef9Ap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H3eZTzVMeCwMvxJw6hMXCtZe38wEYbN9KDUB15E8qv3SCZH4Qs3ZNj1xMF5HBeRneAb7tJfsqFLZhweTz2DwREX",
  "key1": "4AuUbfBjhS6tLN49tA4mMgiaKosjNcCdbciHzd6LeFUy7yJyCPMfCwgPDQHpdKxxtPJhYtdrZm2MoLkhrWwVCmt6",
  "key2": "3HZowyvEUteJqXXwihA9mEvjQuRnawzqZHeHDD7saDidRW6vsx2mBgYeQ1k5pRJMgMp6XKH6AM63wuR1TuQg2EEY",
  "key3": "3rMzQ6h3nfLJTrmop7Pd8ciAbjXpv2S1E6ffutQwW4mSYY1VzQ15J77Xg14JtgHyLikrvVZJJF3DjJPbHPHAJKAo",
  "key4": "4qdtRzRTJrT1pBMJF9VaheRVRH5dwrNz7WNTc1ttCepQXZuTaL6ioUuhBKNQcffUBE2RuddpNbcnbUDNf5wanXoo",
  "key5": "5g69LzLt1PkndWeiFFo82c5F65F8j46vouRCtPnp23t7j9cS9mSbgH2Ar5gXZp33k3R2cBhq7jw3XdhyjbJ1suom",
  "key6": "3QJBJhNyJAMsqLY6WDBbtUV9zxXnwhiyq1mQ5AhpU9vYU98WFrPsGz2nkhkyCAYmSDXpWmSdrUPb8BvDvzsb4Ks5",
  "key7": "1HX2ZcgQ9u3noCFqBQkVmKokasjbH3VXD11gmVDBF2buEvvwtd5CBvN8eQ5u8V3NGt8giQYLbXLtmZhTPLMcaci",
  "key8": "2FmHYF3TcCgJiHdHsWhaVbFwLxYDAHu52wg42QLYac2f7cZpN1BxhyNWRcK9as7uWoZGXBArfFdcj3hzkzk8UuTg",
  "key9": "4KsKBfkQ5LQ4GkSntS1pgzVq4S2HeDggkBcuCYVyotQAhN9NNUFNkg7sLFMddccoE8u5MnAtmTsvhfu3encZiPfi",
  "key10": "5sodDjbgAYa7hKJBSVFG2wtjvuzo98LHKQc8rS2uRpEXNn4pk2ALhX7foUsrvxZP2js98rJotYcoWqFvZJk8xo1P",
  "key11": "TkMFnkuwBpDJWhMX8ZUB6RBZM4NxbpN5XXspMCQvo7ajCVmUy73PM66yAxNycQxctANg1i9LxjZgz1EqgPnSSvL",
  "key12": "4y3Z5jcPEx5cD852rL8fjvu8NXVyam69AbsRMJXK3aEW1vX2yvS6x77oBXXXCxS9zf5AnPmHzVBr7WsqH3DAJU7c",
  "key13": "4mwfNghvDpH61cPJwXJBTJGZ7VnjRryDUTP3ZcqttChEY2SQ4fxQFm3t5hyAFDS8GWJVmS3iMDHpH27CAdP5aNpk",
  "key14": "4aiPNWMyaAFqbBNJSW1RZR7M3NC9ZaoHeCzmKNSfAEcCRGWRjkwg1PsELjDFg4qFsBPcKxB6DizwzJxwZqAqLQdv",
  "key15": "GhYwQhknXMrBXja1hxfwbiWEjTfNtP2GbeYHbyoy3gTVNZQM4YEv6M6afD691o159PnaGwFPLSempb9wGF6C7VE",
  "key16": "49FfZyDbM7ptegMR44aMTZXoEfwph7ExYyf3cukbHmnQr76Vcu7otkCrWeBpL5b6BbAzDs8eRbJwsxf5xEUvE5uL",
  "key17": "2WVSZdz9wuKLJwtDpQVYsL1pybKAf1zSUMohzndLXGZVh75sftcSdDPpzHnw33Ud9nnch9RNHof296KrvfquPAxy",
  "key18": "g3Xr5wjSnPg5JUSHGi2ouR5SXgzK9euyQCQnabq36NXaMRpJnLKJ1yiVs38Ss8uSTxTuw5enSfeCCiLbU9xPgye",
  "key19": "3hwS16suusC7jM2gc6gtW8HTMAiPAmTzkoNQ5grxofQYUAYJYHLqyq6M8Z2pyi2VdkGDpqFMZ7YCnQodJg7JLMvf",
  "key20": "3QPuSTkkk2crTaP5VyE4DCjibR2We3iBVEXTm2JDDpA1NuD2Xpf7VnP1y4CVX4PbdMBTfygRHWJQYYyk4YpKFRr",
  "key21": "YSkreQiFtGTijznWdk9ZAXLd8Qy6v98oKHWZX72GAHk53TK5qXdvEaXAMbHxJtzVPAfC8QWcMiuZ5Qq2XrgrWSZ",
  "key22": "624FR2gcKuiNVsDManGusfbQ29D3DExrTiocaKoop8QZpzfBqRrycYhfifwBhet272j1XZxSMhxgr8fkmW5L3mvZ",
  "key23": "5WCNVu6hfGGAjW58BdNZY8RGxcPv2XuR6xExP6HHK1RFNkdGeHWKVMYmLnkVcRkt5KFbBjDKUzsdEETTQYEfaH1i",
  "key24": "2oYt7ungPdkwx9kggYfZVuBMozk3XdzZv36S1fNhftqU4jqCLQrQCsLUdcx8qijkq1KiVgdWnTvdUwn4V4nB6ofk",
  "key25": "61EgCj2zxsX2gVg4KRbzML2fqhZwkegCiiLWUAeQyFzjbTH9Lsds7STfb6RW4GcmE7dXX5eGdZPXBr2Tzhhqkt25",
  "key26": "41tteXifizo2Wg2dVDaTbqfJay14hxdjcGE8syCPhnHgtKvTuH8VW7u3gDnePSTEN8y8CGEpEtDYk6ooUozpXBPT",
  "key27": "46RifKJvhou6DwSqMXokmQreLDTYJTDV4gJFYNMw1tqfrEZHredbLNUmVrzj2iMsLeBcAFBHnKQQ8jMAabmKDYRc",
  "key28": "3bzX1BiDBb5ZkCb9ZLhhnMwcJhQKq9ZHHdgqgCXEg7VorUw2PXyhAD8JSQjx1ppuEtyGssVWx4NLAiyNEZ8WQ3E4",
  "key29": "3fHRNKNTQWK1nZA7rhMCzsmZcNesU79BhwBSFzWHiwGAnxtApNQbWwoUaFK5S1FgpcMoguPcny8xLup6kF6H56Gw",
  "key30": "51oyunQvVzfqj28aPVVLVKWjuAck51NHw5fgFJhtcsdpw7P77xrsddWCmhazoF3beSuCjHM98Edm4zmgtQcZJ9qB",
  "key31": "5ub14XcuNLNmTvJJ7a9qHSoEwXg6QKLSN1y43GMcKsVQ3kjbkKJwkM41WXHpACZXXbZ1Najwpyvnk2zvdAwsRELj",
  "key32": "2jS8LehjaHEJxvgrT4zCtfEW3ciZ1z3iyhKjGknpfxqbvFH2pePcjb5y9dgTQrRAQLQ6Q7vzPF2BUntAxVM8cDgx",
  "key33": "5UcUDwtEa67QxNgYGGTWitdigX8WNYWRZ7KRx1WVtux7F3oPaYtFUmHM6GSjciJzNrVQhR1RcoGayUsogCYECPQM",
  "key34": "2JUqWi3RynGq3KyCAMAKjnRhK8T2mupwDDqS8s5NnyPVqc7WVBGU8yABccQxBTsV7RAduxaNWwe9gZxUMCMhtEQt",
  "key35": "34FHaK82LWg4KAjv4zHUbJ3TLcAKUL9V8RYKnQXprfQ652bG9txfc8ALxrwMdb6u5Po1fmB63XDPqVdyoaJT5mLQ",
  "key36": "5WxnJrjJWsizRjWezhhKxBE1o4K9C59iwyNZ93sPiE6Ky25xZoWzCqB8pYxNWXBegwQH988YMZAXpW9igjngpUnf",
  "key37": "XbLPTB6ZKhVUGcHfkneqzgckgew6KBSoL7P5soTLoDRcRswwaoLrgeUStCHhNFnoJLJf8DRV5LmcVfNA9Wx8TgC",
  "key38": "x8aPUUpyH9dwkvsPS2XsL4JWqX32rGwttNVteSfyrTTJKXCujAfbbQ8dx3uE7hGRFMjn896fmQystgnNrRwWwYV",
  "key39": "2fJuJp8KTajcQ3dt2xWdBVXj1HRyeLz2zCB5pxhs6Ph9RCHUL8CzQADbQ3teTdVQXMuX2QMF39BDb9bub3aGKY9Q",
  "key40": "53Stmeki75rCHj8CkvScoJkZMGnZwsSEAYFgvSNKDC6LcsbEdkviJzSorGaNmTevEdW8HwGZZDwK7pTsjDcdyAgw",
  "key41": "3ijgDDV2n7BkDyggUSg9P2TERY5wwEpjUgqTcQcc6HLcHMeqdZmDn15vwRW7df1PR52mHzP5SR9jbRbQBHXQqp2g",
  "key42": "2XukjxiEmZXiFWcX6ArUogTkHdopd3GU5eEmpUC5KfdiwcXqMy6x8vT2VBy4ydTsiYa2GgNXVYpbyLo7rDroWxeJ",
  "key43": "5VZ8Eg8XmB6bcuQX1LhTia5br4KWsr75BMY4Lwp7afhu7Kya7YHh2U9hSJhnf8gcYMNhnX1Kyx6wgVBs1qr6aqaM",
  "key44": "4F8vtMUe17kXEGtnqx93EpReVy4LicbCvRjCB23Mg94En7N8G1jnoxjhhYnCKEMdXrNvrQTvEVWoMmWyVTVvfD63",
  "key45": "5mDEQEpwhcgvSCSwnNNSNSJzJZzGPB2X3wJRsVS7AR98piYcEAhtLtwyANM1NjZqnP1fkG5FvSjWP3VdkT9f1JTA",
  "key46": "3Xk4rPByJNwgywzxtmv5yWBwZamaymA3nM7rFHNREQCPyTZVTEu2FsQ2MijGGaF3CXbPzxo92U9FJwKAe49wd5x2",
  "key47": "2aqh1o7hmSp3u1jaFZPNySGjATEm2kTJqxNxWa33sJkebqHRrvgQZY7BZnbsLjJn1nV3J6aR9aNdMeWGrZrznBMm",
  "key48": "4eSn5TCmtswqztb24t3SRAkzmNafndEA2aih9djznh2j8gcdBTSKxCxmMzY7aqXHhFAwRyRmY68yKEGRJyaM9oFR",
  "key49": "2ifJFAHXviodEnZZd3cHd3S11EwtWsPdHTQowcDFPo5PrH6QqH9XiV32qKMtuHFPPXUegJdQtyUy9pqigDcd8RYP"
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
