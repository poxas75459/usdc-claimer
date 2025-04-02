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
    "2FwVVbbW2MbRKwR8rCSEkwg3uEqNxtHA2Nqk22VWR57CQqVUXXXspGyzTtXd9ZS3i3nMMkqQTPyYvEZTY6qupEmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LNc4KeXMtZFb9aDEeCdCRZwcsE7i1evzeDUGz7UKBJZJC35LFz1rRrXBkMNWFwQ12HoV9cnLDtKBN9PWkikJdVf",
  "key1": "3P9DALR81MrEh68QLKAH9DuMafNXCp2S649tv83PqUcJ5MFgq7CmGGKVTCyV7kmRrzFBA1a3GTMXzEGVuyW5CYw",
  "key2": "4o9sKnmAquhH2VgqSLCwLfZSTrUMxAeoqDWSvvwWRg2w8EpA5vHSQXQZ3gVjnRJgeb2Jr3HQTBjpVa6oVezZWsap",
  "key3": "q6X2sJscENHFezF5mvvnqBF6Du8q7e3A6NNb4EfFAkD2qHSVm4MAHEiw6sY7uR24LNzSRgqaeyBxv2BpTcHpYfo",
  "key4": "3TXnp51DFeuzaNSzd3JXD9VZameGnTacX4XfW4gjwgqViUtDmiQp1sU5gjbeMdJsykXc5B5rJwfmp54VT8Z7t2Vc",
  "key5": "3XnPKyxMMUBMmvJH7TqHYRnQEGHy44v476xmFxff9xsB2s7gSeiMMjYHno8tVeGgMQqhvGSgusHoigA58JfVDdfh",
  "key6": "sxcxyit8Km97ThiFAmXTw57ZSKRu5VWG19kSwN1Pdw6FiKWhCvqSqvvbVgqPMEc3QPJ1SZNB7NMVqHY24vEn3A3",
  "key7": "5QDuaLcECAbkCoTgiNcTUDKt6cKj5jGDYhEwcfUug492c8tub4m4aDYBDhqRfhQURmHxcHLzMzhVe3vNRfg5kr4E",
  "key8": "CCF7FzyDixNqyQu9jL5wdMiMXDqUUWiaP4S1fbrbGMxeRxXtGpUpBwiLiprwv2vLHfQfh7NAxKHYG6KLxGtNJ56",
  "key9": "2NqELCDwrsD9NPBeMSjDQrhRk3WaRTx9ZbAyPyjiYgWzJ7wfeVptCS9cY4dPiNEmC7eT5fugCaVWkM3eH36MQTzk",
  "key10": "5Bbawsgicho3JmRvc3LJhdo5VgGySZ12kaBUdoJZ3heJ9NUxmQAVYfbHoMHuBFJUrWV9rucPz6u7xRTriJtXxPAy",
  "key11": "5zENG8BEZ3uG17YXo8V3v2GTRTEpUhrfUT8wTAJGhHbsnwmJB6egGaJMhpgWSCJ5qfvHGuJXK7c4QnW8CBqyqFLB",
  "key12": "GaHeUZHFhJMD5A3GvrUhfRDkrobEVQNUoAkFRAhdxxXPfkEp2835BUcCoD8ub3csJMtMDysxsJKDNddRLGeuvz5",
  "key13": "4RSw1o3dC7YRkSJXAc7NPy39ox7rXYtghT8XaFHdihRbiWr5W3pu1NKdH1ftTWWjPKW91h5rqd94ujNR7tkGk375",
  "key14": "UjWuQb9SABbn7RcMcwQX4UabCw8sb6CezcfEL6fj4qqFFmcK8vtH4ZeYzVcKXfgb8ZdMTLfWpp1TS755dfZu6dC",
  "key15": "3g8kq9dpnb5HrbUJgDjixKWFHiooKSDVFZK9H8pBFbPT3eXghyAo4uCkEEP749LXvyABMsdS1kTDSQ3Cr7X4N44Z",
  "key16": "37cRsWfqFdjgnVJ3MVgGeXDM3xCjPFSnX8sRCeJA7jmPEFpwnyfQRZkjf7Jwhrg23pi85QX1ExqaRNYX8dwt1DSj",
  "key17": "3pw7ZQqAs87sJPLW4PNaePQRU4dnC5me5WfK31RJhqC6vPegrM87M2BKg6LT9xBWsNLt5rUHH4Y8usrWK9jaRZRH",
  "key18": "US2XMtPsibgj673Mk2r7oRd4E9VZ1bi838qVvFqpMaKhchqkHhiAiLzZXfJ5Zuza6kxzFfHXBU1EacpZzpb71Lp",
  "key19": "67odzQWjwYnniGikpd4H9YcGfAA4JoJcUD6Eev5Q4Bfm7SvFkx1FuYvGJSEL7Rfvj26bCkPgsvLKExK6aVQzLqZH",
  "key20": "2Pz1uDTqRkDx6CaVvdqzoom2fotgU5nuyqv3d7ju19ZKJbjzVCpiWbQnhKHCZkMA27u1f4jEfNKbqiR3GXSXhFMp",
  "key21": "3g2ZZW74drarrkAxLWJ3zGj3iVqjtxh4e6E2KMpzhbR8hx14cahA4WagUmyE5NydiAKEADwCA8aZXXwa9XdaVDCZ",
  "key22": "5D2ZH2hHssWzrwG2cSSeot99R9XWCgEAGCF7kaJPK3L69KF4n3fYPsNnaz3EJrM6ZcjorzvzbCCc1inS7qWTfZuu",
  "key23": "3tvCHfeUm6uAoC9rmWaJ1DgEkFZEGZrcLcwfUDPmTtM382ghWEVMV5Atd9cN5rBY2TJ3omo9oc9sf4muVk33stuv",
  "key24": "3XtkyWYAXv4cPtTthPwcBh45KRVNbSMERs8SMmKuES4qUZAMpAA4YTFdYg5jw2TMfEtJQNKF8cyApFgrURknF2yE",
  "key25": "4N1BBfPx8KKT7pfVYi8FNRwxXgKVAeZTzJcaNCJyGap1YexvfiYjATNzhNttLakG4KmAc2zbP3svAYtBbA5ZaUrb"
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
