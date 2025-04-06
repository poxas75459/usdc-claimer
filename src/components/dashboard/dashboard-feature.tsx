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
    "2H4BGGYtzxBEYYNJs1ci1buGvQhioU5j8pwF34B93RF9L77VWVXVx2aHaHgqQ3fuwp63Eskh3oQxA2pdtfsHAcP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64XvugLZeha4x89C6nJmBuogDMq1VK9PsxpxGuTiQ4enXSmNoazZURTx3PsjZSa4XeN6Kk6P2uL2gon8GvQ9HMU1",
  "key1": "4QoDTrjCcFymHcHQV2uUKwg7kPYZxV6b5i2GGuKpZS4EkSGCzrMNUh8rZcErpY2FQSjPssiHNVeATLenSt8DZszC",
  "key2": "2x8BzEb6J7HcRjUJsjdrHEYA8K55t7Ah2EwLZNb3zph26kAnowYL9QRbLRokRWtM53qRDVM2ZAL8E4Lb4PCN1gk1",
  "key3": "2jsujQvTzdNoM1CHeXM5zhEGtMsYnqfdnfYMAbVYsfC3EZaRYX8Ph9zEt8u1RHpNzv6Hry6TVF6YJtbNR5h6x4av",
  "key4": "2Aoc8RDbsfbTnTnmLr1kmydcNnMoE9ad2yzej7KTxDmzmqyMZcD7ytyKyQf8JkH1BLytYDkeMESFjTRd9cfJKr3S",
  "key5": "Ny699vYXNd9zihMTChbkwnmjwt7WN4epe8gqpEptPyB75DWaaZKEhrimHRYTZW9WjrYQj15dYZ2PhR8TzukPWUG",
  "key6": "2TFrN9cMGLDTmqhmhhs6PhCgKWGh2HfuAWeFeoDorvFEYgFmgtk7bKjoqB61uckksosSw9t7ot17Z9a9iGNv1sX",
  "key7": "59ALkNMixToFrEdZXZKe2ux9LqzREytaShBqSnN7EKj162gEwmajh3FsFYjtxockB2jNAxRa9WUZ3r1eAAJQDwNz",
  "key8": "5WNgnWQRqahkPXWFECF89J1QWjcRzHgWqs2GsmCGfucgEVFXua4sn7mvNUDGVaSK5JBBaMHvbqpnJ5y328KGghbR",
  "key9": "3355TqXF1EtTrAQPu1tZdAUbQs95WsUvQjLihHTiqqVNyTmdYrnJXrWNbCxKsaUNYzFx2P8pgzZcZXJ2uQU4MkT6",
  "key10": "52ecZ682K2GXcXXYhW2vtjKA6yzR87K76Sr9ofCgkyyUCbR47LZWN2hoq2gWLxoimk58gc7XRs11niew7kJ3v3CW",
  "key11": "V2TpkpRqWidcrh1ZaGeurfDsa9T3RGeitopkUGzejfUzcVGzUry8PYkk6NQ6W9oyDP4BKQNxVJ8hgpohbTfWRwS",
  "key12": "5eRPN8koP5eTCRxZuo1WMyaqi8gfwzaSCe2LdBxFHxUZ43aoRrtL5qpLB36xVZkRJ7zSk4UcokpuZ4izwxKe3eq9",
  "key13": "35McDtEuW9zvUcGZBSDqzndP6WVS5BcXMFmBNHcHgWPFT5mX89inf2NAMtB4eqMzgiAC3R8sp6fi6n7KxV1y2f9b",
  "key14": "5CfCqpDoDmAohJTbPibLbAnD5EkiUbW4icwDvnFKn5gL5eL87n9LviujhFGSMxBZbtLFmBnEVjdcAFwvw2G6M87f",
  "key15": "3PVJMza2LiZRmcd62CSRVhKENbF3tMof95y2hMGkDrdfVZQLiwA4mqj2QUMBEZKWAkRkqUvqLY5RSUyB4ZGnwrab",
  "key16": "junhpgKFByy6EgYCmXeCMVfCi5vmDteeTDh4YxYJuwSEH44D9yTbmz7e86g9nhbSMNXB8W7mXhq7qsuEntKWsZa",
  "key17": "2SqZiLdP6UrYnokkk2RFCWcTWYi2zmH9TpETaajm8ZrNwSrQsCQWSSGxC4n3zVfvfS6oyw7zXoATpA93GmRmXkUj",
  "key18": "4h4SpwPRAwQvfztjSTtNm3mc9wYx9rPhY6Mea6wXmzThqvr6sKrfk6Hu3gNkfFwmWCMpKMaafJuRjqNsxzkSRfQy",
  "key19": "4xwJX5iMw6WEJwUJ6Wvd6qjioFKzyVC3FrYoMyNUwVoc8P41Pz69zVVghgg4bk3VB4Azxiog7ib2Cc99jQqTnWcC",
  "key20": "J4ufeic5qwsQRWyMSMcTBECovmn5wHrw9jRWLSq6WkeZraPLtCU1W1eLbdND3TRrDSsqkevg3GxcEaEcmEmC7in",
  "key21": "5EHYuKrUs5ug7GutyjbfwbU9eeU9R9CtSyE8h13ywLUuVhbE9Ma569Y5fXzT8EE2iPrs93bgSfwiXk9eoz9A4ttx",
  "key22": "5tUrudNLtmGywEQhb6U6gPp1i6SKTH6XfhifsaeYWcerckKGUY9rhsTV4yAqse2jVkgA2xFccN6ofkqBTVP5UWme",
  "key23": "4q84e9bF5eUdddCNMeMK4bpWmrqn71oJSaCT4CXwdQMMEE4fUmDAT1C37nwbxE1rfVX6kQyE9by1AuQ46PB5gWCW",
  "key24": "5Y8s9b8utTVLtbdfDT47rzvvEwRZNGyPZGwHdxsEzBAtZLjUGQ5GxJTSUCUPYFwwn7Zk7u8A9j1M8Z3furUNqo4Q",
  "key25": "4C22KdDGs1KWKrYNQY93V1vvHAgQ682Eg7M52YkS5mG3dy95ovFs8W4sRXZLEkU1GbXdPbLUVXVAQhoSCarVVYr",
  "key26": "5cJAi7BKnnDSoEAgpnPvRRCCtuCQ1VFTVPmTV1FKyTH6UfJxYFMvNjijzZaGFCDpgZvKqV6P7dn9avwjqJpMGzZo",
  "key27": "4NewA6jXdN6tk2JnoFowFue2zaLoh9ZTLgjvRay9q5LJQzd8zBiStG7GkLqoNDsdiqThxXYhr2QvBUyxDeXmMcEa",
  "key28": "234qzgDHaZnNKSaXbMonqNCWmA3DGnZArHdjLeQ5TMY4XBVxyNP6aSYxditDdwXLLsK1Tq3wXxWqRdDjoZzz4vTP",
  "key29": "5Ks5ndXCKT5iQVV6gBXEz9w2CFzMpZ19BtCeM1EVphRsKZi2VdBDUfNpFdMqAiF8nL1wnLh4E9HxfrubjQJP9hp2",
  "key30": "2BQbE7cfGpufRNpbaD1gfj2gnRhKrRPL1vGxUJA9YUtv2UUuciRRt1VVe5iDXn68QzZnhzsXz4Ua7bCK5MjeZrds",
  "key31": "2kVuGHwL3PuEzp4ZrxLFALrDbf2Z5uCqWAunKrp8HmZFjZ3jm7KG3Uu6bmZL8ZYWcktuNjGwbEE5XqQqhocDgt3K",
  "key32": "56VzKBLqNHGLQxuwK9i2AJcm2wcW1Xvc6VA7XP9U8BrhFcbbPjc6iGFE2kfexBQydZhuAp1hMcoT7ycDkSsM9Gow",
  "key33": "2EKioq5jn47An6vxmzQ6KDh6DrydWc7kbW3BYZxJVLvStnMPDPkE5GeGqB58aRTpakvrhd91TYxsbEvS2d2L3ukg"
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
