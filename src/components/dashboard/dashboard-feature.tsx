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
    "65tc5sG9dqH4TSp2f9Q2aBmH63UbQageHJCS9YSWp6nvE2YB4ZZRFvEx3VREeCsSbUadmDrTgFoY3F39QQnWjqwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sBpX6JbcyrGPVgQWgMTaUedK9J4GuRKFuzBPxn11NKxpcbPi4PvZofKGDJMTnbf3jJGYW1dsRKapH7saHED7rKN",
  "key1": "4dBAoEDbHkf4k2nC58oPEV3Lfpb4uYk5EoitULwHL8o7JnLqgKDppsbEeX1TYxBrPLdA4gF6AMrbzYAebfbFP5dy",
  "key2": "5Wpk2yzyWhQFfq17o4wF7vJiMit3iFEmmYyv7RfH7rXz2oxP3onpE6u6WYoD5mrEru4iKdyGvTug6VZBKhofZtk8",
  "key3": "2fhnXugMZqBXKzsiHTP6Y9reAAN4KcDekpfHLa31DiW8PwzNJ8TmK7Y9zmNk7oAEcNmWLVohrirpYsDosCJL75T3",
  "key4": "9LjJA1jKE2DinbFBtSYEkjP4RaqLtrLRf2si1JpwrvpduNDxanBNZGzmtn3pnZbdWabsqXseXXUJyeiyWXnfz1d",
  "key5": "5TJynZK8QibPGrtTpLjrDKbwTocmJq7BQEH9gZiKZNsp8F3t35GH3Vt6rHXX6Z8U3m3oEWNxw3cndhShLsvjTwVt",
  "key6": "3YboyeQTfFPEv8Aw8niiLEeNwf7H7fyV87vd756N7DAz9rLTztadvgsW27evshk6U1TktfoHFkpEt4E8zJNWPYq6",
  "key7": "c2YuxGBYLnSre3cZGQmKotbnm4UB74DjHmAHRVNnTCAsmTmRZMqgtaKfjF3GaYycXsXW21nkhQP9kJb4qSei6jA",
  "key8": "4N7g7S88m2SQERKDH8Uiip7AbN7XwCDGHbsUZybRuaVT9dYnBcuf7VvJoDLhC9Aidw7zTB6bcJ4h7yNwXsuDXb7f",
  "key9": "2FWEqvxhgaxNJL3Dh6JiqgyCuRpueaUqPx3Us6LVbN6q4qfaN7fJhNbMoBbbQfwiw39MV8eWySasbk5GjBshkNuL",
  "key10": "3gwiz4YrTKmrS1EX71CRPGq6nfrhFUWAoLHSVDz55L7oDwEYdrThRhacQdwRcfALS5QyBfUBMECq1oA6K3f5fdxD",
  "key11": "2uPxs5TfTbK76MFZmNuqZ7rTugxfL4aNvEfg1tNJCHPSAEFHzCKyc4KK9KXDXzMzUNksKfwkdCFxyzyGMeLB6XYu",
  "key12": "4rwLpaBW5DYRdnHVvH7Qs2gWfFbBVEmnmnc7nPtcav6zsDuFfVUPcuQqqxgmEU7GZGp8cV32cGAFoEGAVEAqhJpo",
  "key13": "51QU5rwmSVQNbHjJhQMoMi3PqaQFP9Te9tYGwhDxWtBsNp5UYgJHQ6AJq7J4fExzgmYEoWQzhv7QLxnvmBconwMt",
  "key14": "5vvo3K7i1X5E9rDRXjNpvhmvozVajpd3y6VBM7iU2zeiWro9WaMd6HPfzTeuqRFfMuKsvJyznLeL9jEgHQgT5dZM",
  "key15": "5d2VB8gpZabTqKnLwc83xdp7LdGy1a6RX11PBYi4seitYq9NPtDLJ5dGKn1JB9izoGNjzNCnW7ueSufSnVw8cDF",
  "key16": "3tyRFyyPDJBrDgwVMbtEADbyv3MZraJAKJHkjihfV879VhBBVFU8XNfGL4LuiQh4LxBoaHTc9wv1rLqMnKfryJPT",
  "key17": "63vAoyQbsh4VjoJGYjudLdRNvTUuqJzfUsHfwdoo1qMGeMtPzam9VbMZZvW68MZSz2ar7k8RKKSsmoq7k8C8EXn8",
  "key18": "3S3jv4uTsqqFFD5TUWsXswsF9aJ3wvfi5XyTFZDGKU5cMSHNZLVB6MSqMCg4jZZCXdj64E4qb5kHfAuqev3DUbDt",
  "key19": "4WCZAVJo9iPuPYogPe9fcFpjvYt2FCosCGfn7gpGgc9Bchg5jKkBNznYGeYGG9rpz9hfAasoDzZQgCifFE2F3rHB",
  "key20": "32Myzh2D8ApwDDkR32G7N4iZVBQvvKuzac2MPV2ZV3zqSfTsY6pdEbwBKRBNyPkQjjW7XGNH78BzxRxPNKJt6mH9",
  "key21": "3NaapWGvVJuMggjMXZh5YmZcejRuZqZgZTcoCj8Rav8zxKgjv7k86GuFnUAmzEWQZs5SkU1x3qEQweG9b6Tk4Ljj",
  "key22": "3VJmiv3MwZPyPnCZ99fk15Kj3JXqNLMKZavAYsCqnQ4TC3PF9fcX4XLqPjGeg7hoMF78E1BEGazUGchNz9n6UxsQ",
  "key23": "4X5xAGQumtUGgryZVmk9x1Q14XZdW62zMzs6rBYeAravV7mCKW37yTuiDCHsvm64X18m9pExRuwpnJ7jGgMt9PGr",
  "key24": "572AHo8qm7R2fBcKMwB6Ub2w32HzPU6xViorESsUKCb6No2qJeM2XY3acPq3rmKfr3uND3GuRGrbBfabhMeWw2Kt",
  "key25": "wrisEzTcWEbpdQFGvmNN5XPGaFHnG53F2qnbjsdVrmN266tDNcbPFLfCXKA7c5V9zozz2y171VXsEQymyD2iWTG",
  "key26": "2VGZjrKkUY3AygVLJGZZg51uGQHy5rgwdvKg4iEa3KYNS6ABtRuSjZHUsmhWaLFGNNnZWWKUyNXn7XF9GA51vcdv",
  "key27": "4h18A59oanXztGJxDbdAdcA9cHJjoQcqYAokKTZMpvDZTxGHh5MuVMLtN4ZDcKvY7BdYRGGjYmymbA6ZFeGfvzeT",
  "key28": "2qGPPAArvLbRYqW8gQSJJCPkUg6kP7rvJKEYWawHwvbjeQWB8vSFD6zPquHZZGBmEeHShNW7Cz5jhchPT5KDEu59",
  "key29": "4BVr3LpFZDdvSg41e8B8KuoDi4rocEfcVjgHzT9AMPNXZSvV8qvC4WsGHyNxDgBcTwUUNkSFnUBJsAqdsv3YYcaC",
  "key30": "tKBbY3cVhnTzcUqaY43Qtv53sWGejXFNxh4344wFGFa5hX73bhXfPAaRscBfaEDHj6cwV94Rkt6ZF4o6Httwj8A",
  "key31": "4otRgm3XEQDJs3VJ1P1pyjNjCHHxPoXLQ5gzsB599vAJe22s2LhCfebyFcTopDr2nhKPwZSi16uFFHJqa8V9xBDP",
  "key32": "4mntSR32idWWTgrPBFM4H54HXGBpX7XT7hModhVWjZtHDf7qM2TgEmTWGX5eeRwcLLiyJ4TdydDp34fPfuyWfv4j",
  "key33": "MaShYDivQq78WT1QkBdpnJ5tAJDwgyfQPLGgnCxQFpb4gcsqhEiCihur8yPLsPRajsb8dnJErRiVmGoAVFNqiDj",
  "key34": "8gd8VTwJj7zuznNFF2yL98irweoN1aYWndNF4aUCdXxmyrDDk9NMSZYLuRZJ57fEmNp87cgAmqYAW4VFvciBkTa"
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
