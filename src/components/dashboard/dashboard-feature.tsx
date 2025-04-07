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
    "4ZCdpz6Z29ETnyuqjrExMMc3iA4QjV4pARsRn4MQNYbssexNiutLwaygb3oTdwN7TXRt5siPwBomfV56QPme3QqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "irTuBPzxZ8ztGX4vqdmMhZ5kyWQSM4ukxbDMtzx1ZqXeUPz8Ng1A7ehMABNNyU43Sy4Zfzi8XQxAEDzEW4fTSKz",
  "key1": "3Fp1fm5BQ4A5BmconjyFdRWs2npLbsbeBB2MVTxLoQUtWQRoKHKX5nLy95Ahc4GykAXq9bTCfEgnSF4x3i8zK626",
  "key2": "5LWYwYFqp6VtgJjq4eBWTJidCNX1Tz1NpSyGfHC2GRPR2KgT5GZnthTpygEvzD2wE5kv97utpBdWtf6G9JgKyhTk",
  "key3": "5QcZoEeE6KBx7HReJKdVkG4z8agex7TC9ctbv8oP1uGHCuLZg2rZqeZCecMHTYkTpoRGJ7DgBQdtei2kuAqekrpq",
  "key4": "jKB4dPCLmkux19ArLyeSjwdofAAa9iL488bKeQuGbZM4hTao9RDcmyuGBFx1XFUAvZtDykox7vn3mdfcDfcJgzy",
  "key5": "2mss5eB8qfdT3wM9Qjq7DHXaUqvVuJVUQzpAtPgfoLJ37qSiebfTKPdtBp8UDW38pnwsBsSTZoUuqAmwoCYGn1Ft",
  "key6": "4RdMi66U6NJBV4s3aTkE324VVDwVTEtE5Npqv6QYfd3eGw2tk59BLNXWRkcE9SqNzP7xrPQPrYftXukhtSM9rWZ8",
  "key7": "4UNir6G9cJa4ZtodnKdePp73BoLd5pAiZ2kKcMuwR1oVzpabS4UCBTWWE6cEfMgH7A1gmP4mn9kUBG59pFUB8HCd",
  "key8": "2P553iLfZRjoehASVcT6XbsPNdzmonuX8V1FdPfXSKAmAjjmYom8y5xyBbGGV9FXQnScckFMVhEhxdYveWtaipQb",
  "key9": "253zePLN8j45Mhs5C2PHsWTVasAPityzFgZD9PbgAPRcRW2xdgUBrJxRmHeAcaHHpgDeXJWKznKusPC6URJ7SL8a",
  "key10": "4VKnoeio2hL6j9CRQBtLZM8sCYvs4WH4YLVk3EFLtsXEe1cFoFuPRDEP4HhnfJGzpJTztp8KkK5isv5ciMn5rGVT",
  "key11": "5raHBfyxG52kpAg6iZnBcTjiDQfT1mHnD3DeS5d1XiLKoQMqRhsCk9bjS26iegjPY2aFxxiZxdVP43ZtqNgCanUu",
  "key12": "chdutPrQGnDnPhNrVTTbCuQThDqB5Me6SaNo1mxLwmD6JgnWEUN6mdk4mEU6wAiHXP64YXixb5igFTAzcZxnncE",
  "key13": "66Yw2p2E2enFAskR81HNELzZvDxhc2WLWe19BhaA8rynrVjwykKmovEVo4o8X15coND6cTrtXLBDV24AN8JFWti3",
  "key14": "2YRwtx2cmnzME84rrhiyvrTbUmdayaH7fdN89jt8pwDn9McQQDTVdWBX8jiJwPEZCowHAACoNeNgSEDgjSUMxxhD",
  "key15": "4e1XnpMtw1R2JfxYHPDfY7MebkSvRaRZorCjSUpPNmqaw1GRWVT5fmoCQv8SCYhNqBas77VYfRwXQ33Gx6k76oPX",
  "key16": "2tibP8vJ4yjQWvsH8Pwb4xVqaqHjarV93hupqeskzKQUSrSUpNxxGHME88wQqyTZBqZn5ywcdSZX8UWiTQnx3pR7",
  "key17": "jHWEQ9WhNPA5sFazdRTY1BHLdHJ42N83g4FDucVqxQoQFWto8uzy57YhmDuQRAF7barQgXNE2ys5gTp3rv5VD5a",
  "key18": "4MzSGxLEjFJ3eiSVVS8XDjqQhf8px9t9GcftGHYyQaa6NqH7ZjqL5rw22ZctZADX68HcBY7s9K2j2R34NCo5efKg",
  "key19": "61fQKXEWXfg1FFnbUYNwY2wfNyK5dGZNspbzuLNtCvxpX2n9BvQpsNd6yRw2TBzEo98wbwiepHSPW8woFLeALpUB",
  "key20": "4nRx8iTPSUtH59kdHrG5YK7ubVqoQPqCoHtRKwaf3Ys3sh865vYLAiVvkjgi4AX7wfNc3WnWe5UFKvW8DdsSavEv",
  "key21": "41jf8tnqhA9Qcs4LiY1dNjfGex1QgDTEdBMq1W6Ms2Pg4S9U4ZVtk8rPZisc1uGf6cJkeM3QZWAPcoocd1GPGYFF",
  "key22": "5kaFsMT5xRDo9dmPQdMkc41bvs7gYKQ1s6jTKk8DFeZ2yCdid5KRa1hLxeSQXbZM6rfQ4QNj3eGpWLUdQXZ4nqm7",
  "key23": "2nGxSrr475aFr7zxWmKYQJE2QduStvMKK5HqMbLGevW2G19kMzTkRfRWcg2xp9Uy5d9UbwPrTEzDDyR28N1Y8vFH",
  "key24": "3Uu2amNLzn8jC9fsvGsWwST2WcptxSyD5fm1G7XmnqaoKvjGeJ9XcGmQZ1sKttxVwJafZ1Lj4nctwd1Mz8ESx1Ry",
  "key25": "5AS5TpaSNncYKgeJfEweYQj8XZ6ut2cNpUSNSjQ92weqt51RAX3JQDbM6MpdxDKMB3XjQ26hXNwZYPmAzeFywGT8",
  "key26": "2m1EMoYkkBog1yuFRb2C3EGHNNXrPZGQvhgE1PEYRe5isbzdfVpMWfsF4CrfcG2AasUJx6amhXrxcBLUUSmyRZZv",
  "key27": "5oeM5FA6kpMP7H2pWWypsc2GVXYei7AxRcL25smhfW6ibMkGSdxEExbXhyeTjrg8NeYXFsWN5Qn9ZDhfypKqfGAs",
  "key28": "a4xXspm1Gc4EsDwWmdMfCexuMFGxF5h65KNQZPt1Ues2K7oLMWwcwTb6TpijopUFw5dFyTeJwUsCAfScNUyQGGH"
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
