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
    "4EJ84kLMrBf3pyiZP7vMzK6cfWDaxAXEUfw8JTSKn8Y7m51KvbVdLMiEcosPjqLhHHsAVu5PZszvZ8QjG6Hj9NR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kWEXDXXPYgm44qV5hVFFRHzHpEmqavRHFUYmrzSMS96CLbM7NzhgvX2jDmRGBHaYYoD8SNLQeXoZh8YFmtaCaXm",
  "key1": "XfxTezuXtrropHRipEdViZ63shFisiXrwHJLkAFaYiQuUjwuHNGtVRSHP3XbPGMjZ1f2S84sncxLscmfMwQeUHq",
  "key2": "4Vsq3k7XRsFWdp1vJXmTZzGFrC7NAo3hNjPtffCwaqHpk5iaaLsQVox2kJybCJ6nHjAtL9d5p3hvbVk7q6zetdn3",
  "key3": "4Er2MxVr12UYuAZJucde9U3CfRy1HnD5H3mujAtwhkrR5z71qpMhymD3rsrH9C7PV5iU9HTWkMxnMPTzJtheEYcX",
  "key4": "3CwSoh5LA1di8Njoksr1ivXvTRGpQSPKnr7XpXAWL7GGaGEBRmtRgGTn4PU1ZRxBox6jRczCwZWcmiEunFNkG8LT",
  "key5": "3twsE3VG9CFH8DH5ZF9GGMgM6tK5q88CKNs1r14gGF2dA3DzxAMyQ3iQ6RzLevGbEawHmVZG286NLTNaUDM51WDu",
  "key6": "5Son8C73v7fa69Z6UwHgYjo55AZrjYs613ENchGwxEKsj6YDstfyBdvNpi5S4kBtPRAq1Cmvht2KBGb8V9WuqZBq",
  "key7": "YBSoYspsgDnCua9rFSfnTv4mev6uRU36JbVr5yKVavwgzyVGrEH3fZNVjvnUiPhakrSESbL8MqrngcaXbTvA8CE",
  "key8": "64JxVZg7LRYfPcS84RmmPzVi4xTDLuGXk86obp1eH7654Gf1htusAdLuLJKkVM5hmfeWHkgTRzSmJXSUKNGTuT1g",
  "key9": "2szBG8ZUiFtgzxJH8CF8egG6iJEwrHymEZQ34Guiw7jWcEFPzhk7QDgiFi5Ac8yGnTjsdXU8aeKyC6kuDvWXCEGM",
  "key10": "B8SwEyxfEsgCAuUjjVEenoptmsszQoAhuDoKvhFdbfLuUpRt7eejetNsTEkKWJ1nFB7iNikE1VS5bFSNrGhd2zH",
  "key11": "3EK7pBAnrrNYNS1sSdY7F5udyPDaBUdz4R8fhFqcpT9L2F8uj8Ld56kegXZtNo3vwF2YVZdav5AtTXvwB398cdFt",
  "key12": "46FaSvacxMU5iP3v2jzxUdM7SUrN2H2urj4fiQeW4zBgVNAjkpWQjXhZskHMxXtFJV4wu1Wf8yxAHe4RPF2cWPZ9",
  "key13": "3uR9WNgs8mVGNrmCZdAGyQRBbqmDAW2W3LtBKP1Eiu9yFGUJVgKiYPtf2topT4sCKm96EMiAj1xutR6TFiHhGRAx",
  "key14": "2nGKqdyNDQqpLUfLnd73W1QaNTEWzHunyuisy5XRnVwQApLb5Z5jBLJ5hzDxEkeVPnLEynXjdQUz1KVCwZ54yMfY",
  "key15": "4Kpm8e7oz7ZKP6SmZGDZqSqdWQDUzRMTA7yf2d1HpT8Pdq4awjgNsZCeek5g8gzoDzbg7ytVzqUPVTcbvzSj5VX8",
  "key16": "2BoEue93h4WPNN7DT7ZaRJui2a2mFGLQcQFsHUpeNdtMJMsq5r3rgUp1SzJwonPdhXFFo5YpJFUCVkFSrMep7o4Q",
  "key17": "2U4ZmWjqNqSwYsNLNyDgYYaeDG2Ki59TSF9LpQ7QtebTyD7uKF8vnqyJGpJe8i3UbjG9jKHazupwVEhM64jscemE",
  "key18": "4P4RaJ5QjpzPEeA25apQCVHSjGXFTKCeBAzP6Kcn9jof2xiW8kP94REefYppQh2HnDqSixLNAGQvgo2qzHGP8pNA",
  "key19": "4kYnQCYYvyNxbYnxjDyAVhwLguBe82AynCpaXFo8eJ9gVYha9aPnfZQfFE3SwzZ3gYKv4sRdjoVZ8F6b7vHbFey2",
  "key20": "jY8dMQDdVdb8viRaBARLNsSJd4PrT1Rfwx1hXXUqPMY9DGZ2RYPMhA1qe9tPby5DXc8ofvG4GnMTW362Qffg8d9",
  "key21": "57pxSCJEqGUNsbMEFVHnDtiT7z5MsjEyM33bh2re5udjgYgrYk7ZXy4722fvE2zY2cs2ZgNSpqWLMWkKn642yTQZ",
  "key22": "2aq2fD7jCWQEG7fJP6RRvsta9A6VUTUnQjDMAhn89VjQfsNCrNAGj9meWugFJoTpgpbjVXYUXcm2wTbxVbEZS1cx",
  "key23": "3zxGgqUdATBGoCeApuCXVZJBfzkhhFz8xwA2rFg9ZqnnE9qis2c2GRSrH78Q749yAFYo5tC89fJBD3mwk1mVfgap",
  "key24": "5dMeWMinGtRh9HTsEkkUYqTXxHqLCvgNfrmTh3NZz4gSENCV6JqV5y4op6WWVW5DRNDr2Ltrue84WNyhCQRsBX7c",
  "key25": "VLG8FaYkrpVvHnCBsfr3hoJRzamPXW49sn1AFaYT9t52ypQjcnWjpRV7MQEWYVwTExhdGacJ6tFyCPkeS7LaGZH",
  "key26": "5ktYPnWcJHZH8uuVWGgnVStpWzPN7b3T7vDEkeFEpfwt21JvUEcKnhHD2dtgDfSbZAgsfEVRe4ygQvsnXL6ztQYm",
  "key27": "wXHqWF4ez1L4HpvscUnrGFQkYzNA6owWBLysRR6CfMCRgvXjwEANjQdg1GP34CCTh661Ge9E9GKit1ee5cQ3x5v",
  "key28": "3A3yHdKwQMRpkUkmfpSHeAkmZjdY2cKb6ciK7Xe5aX56NkAkTGUaZgokGqgNHhw3FuLJzvirwRw4VEeacQZGogcu",
  "key29": "4X5WGiMQMvt9qZkEUNAVJU8dUDPQBwQKctYArp8MWeM2wmxUyJ3h8TJtrkfANeKa4RbDD2sE7XiEsw75RxKVWd4w"
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
