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
    "444JN1sTFoW8xmjw8vHnZTJjbqS2YF1NMRT3CuF5BR5hD8jGzoX2x2AzXeigej7r5dKmFKZ9BcnbaJsrGxKeyT5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nn2E641ZE6rsDLRCAG4SGd5roeH9rKsRD5ZLEu6CfPatXVGGXtcyfFDPvstFU1Q99M1zufntypYzBMxMEgHZR1e",
  "key1": "5dALgUt3T8Ek453deFGiuGDE3X9rF7wBeAoeyz2asp4QT5u4PLK4a787JdcmNXF7XPEuA6Yi77TkzJjzY3kkAyMc",
  "key2": "KXNNdXTrnLKV4NrAAs2J8gQ9s4DQxtjCFXrQvxAbGNHeoPYFyaTc3zScGwscuPZeMwXJH4L1kPrMqxyG18gdnNL",
  "key3": "2HVroVPK7gKkizLW9zcsGwJ2smFfYLpPmhiSmaFWBKBFu9SnUZjYfy76pt3nE6i7TJvW93S1oY75GbjTtwQB44sY",
  "key4": "duKf2zfnhDsLkWRUThzLNY4Uzkb7nNrXeAsXjdsHpu9RWcd8UXKU9ZDbw4UjhXNpGCRYQCHhhuWhGu1ApJxR2UT",
  "key5": "2kTEUvRYuYQaPxR6gK4Aj8AgvdNvAAZnHuGHgrRGwSMyQVruBmbtpHBFKAmBta24T1UswavyBb8DMbuVWvb4awBa",
  "key6": "3j9qVH5Bk9Dp2LwYP9QSd8cgowdcPs3jtQx959CEJatoCzPNTKXinCq4fhs1kQf7t5bDEHRyX7kqv5vctbHZ7mCr",
  "key7": "Yo9Uivzzue8VJ5ydsj5rRVf9Migt5BGPeLZNinpnX3TKuN6LxcLveY9RdScZhSDV1uKjYTumeQwq1hypLkBU1QD",
  "key8": "5ntkhkXrhbhjJ6LfjqKGvfwKo8vj5XHMosQtMwFRqhctAgyfNSmi1C4wJYMe8Usv5a39CyrJeN4zWyCeLfXEypYr",
  "key9": "sEmbUF4rfEpfTaXSHJhM8V7FeGyLcrLNbYU2rtUTntXSnNLQFf6oxWLsGyNAUpug7ZSjc8GEZjeEKeKqgGNPYEn",
  "key10": "3uKe9tr47u2uhmkVfUzzUqDsCSqRVpU36kEQLTYTHbuiuadPseePHHk8cHcTA2bbSatR94JL7L4JbqiPNAS7AwWx",
  "key11": "jtxiLDhQoQRch3pCgp6jFdSAnrbQQRGqteEwm2JdL3Q7YLqTcs7saSnc4ZE64uMMAdMvyY7Y3gypRrWKCn5ou2i",
  "key12": "2jd1wEH1jViEMdYFDRfPKadBndEpxeKzZqeSphMmDrZZ6cfQZcmb5eShA921t1NFuCybU4B2F55iSxxtVWNUZzcj",
  "key13": "35nMQLQrTzZhXb1oQfvu6MMWSV9uU5aGK16sUxW1GstoMtqtnamP8n6p2Ns8aEuP4s9QgKgcY3FUshTXbHEVKHaM",
  "key14": "zkseTjHQkf3ysgg8fVTw9HobyQxGJ12B11oKb525AvrBGke55htjMNC7visnyN6saHfkqMkFEutuXaBKRBjwX2b",
  "key15": "7uaHnp46XRTWSCceKbRn7dKj4xD9SqeVV3yPLdMd5xsdRuRdnxftKsGWsE3xKmMmYDEqy3Puq1NeDaSVkfr5rDE",
  "key16": "4zR6djUYXDoEhMh4qXLoP13xApG7rcuvZrKDMQjnY6Sz2hD5CnmFCGwrTUKjWuxkB23Hh4CGkAyzGfBXBuCu9L1M",
  "key17": "2SM6aZ6n7Zitnm51QQpasJEEnkP72Zc4AsBqu2EHT865DYTSEhY3nC2c29e7uP6HcZ6UqzQPAiZmWnrnPhmct1XG",
  "key18": "379RPaf4fGXTxBoLHnzaLNvFVDvzmujqaf71uXypzrj3rB4a5g6SyKnjRbPZh6EBErzo6VtAqYRjZMZ6aAM2n6NP",
  "key19": "5UpjWy68G145yYafpm8WNggw2qpiQ5CDxEF9aFo7NHfWrByb38c9qM5zwxnb4s1mXf2DyoraRm4gH7EbqNvcSNPP",
  "key20": "2eZ3cKvye7C2h69Qzt5C7hv3wJQrtxcg2e6nz321RjsfWSbUfz4upfs6YYwhUUMWDXoxN6ZcdXkwfYPnjSPRDNoD",
  "key21": "36S6MGLwTkZjyJ5k6zVJcg8whEc2gA4z9Du6NNsJ1PehzP518G33CfzSJgkum9kW4XCvxTjLKBuBVBLcS8p3PKsi",
  "key22": "4G8pEuxcACBjARWwTkVH64EEAxdqn2NPyFdhjdV72Gtw3ptWki4msz2oBcHf47djg44SgzRY6f4YjRmwdqVasLxo",
  "key23": "4CG4ePUHiUmwPWgtg7WWN2nJHQZUideXNGfzDKGhtLofaMpXafRn7hknCXKEC5NvAvj3jcqtPKqZum2p9uS1Ur4n",
  "key24": "26rgheq3fPL54sVamM9cT4L5ZWannXzaUeGCdr6odCpH4ubtRF8EpxY5yTPnXcPte4AzshjnqJxeZAm4cVr3YT1b",
  "key25": "4QB1sRdk5zuCu6W1uMaCeoqoAv4ks4dARDWNi8ZTHv2yZ5knyxkDgswxAWZecdgRWnsggetq3TKtwq8Sw6dZkC5s",
  "key26": "3Z188QJt2eFvV3FiamWfFwcMd2X16Zp1fr52BGGYLFvKEAREReAeSdEUnav4j3QR6itUqFSzDQ8uF1RycsvMgs1J",
  "key27": "3PirsU9h2jegKPvxngF5iezFhGruPYoQKTmGeccawdBF38ibg1gcBFFx36hek1ufZpVwb1hgf1HMha3Q5As4W1X5",
  "key28": "3xZbziMPxqfWScyerb26VBF8bRLCzWZAqMfn6bHNXXk5W2G92KoiyCG8me8CAxjddBsk56yBmHuznh5qZhiGdimM"
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
