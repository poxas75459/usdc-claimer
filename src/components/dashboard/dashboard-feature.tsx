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
    "2vLWb4HbpmEXbMSdUXuCxJSsyyAXWrGaDbQYqsx5mhJorkKneYCyZ7DoeciKpJxrVpHa8pP1hZdtcUrn58mjj484"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35sjqENTLQhtDxeL17W2HiP4DUKsA25ZDpDXWjAbM4RFKzbM8V6ny4Hi7jK53auSn8AA6ZgfAeqrA2tLwUDaiL7B",
  "key1": "MQieT4vDcJVNh52Nbny8o7EqTzmVkruCTHPuwRubufCJSXARoFRjQAWn73A7zZz4T1PE4nhjuNQfP7tJGUieJFr",
  "key2": "52YzrAmYgdNg8pfBFZvT6KvDX29jnmkPYvCWE6kD5LocYqPUYDsdbUsPmtht6ArgobQHj95WHX9GHXnQKBfM7ZZ9",
  "key3": "37asALtLK93gMchp1DFsXPkhdWH3PbRu2iBcyqP7U97ufJijS2YgFqkmidifpE5EgQerrzRRgVm3717vHoZd9JJu",
  "key4": "4yVfQHchVVkxPnUV1nZE8ZM8FPgnJtnvS7DNWeUNF3FTDwjjywKJ5tp2qX61D5BYJVaeE5w3pqC1cgv73kYBtrCw",
  "key5": "2GHAywUNbLWnNrK3sQNHE3NywpXAVTYzWUuzoEuePMKyBymqSrkyWJmRt9xMbvs14HhY51eaZWjatsdcRrEzmipm",
  "key6": "4CwARV44Q2PxC8sdQHp377BuEmm2MgAmA86hkigBLdbHoiuLkhRGS7oarpKW545Y1FTeMPiXGxHjX1dpwqTd8wYP",
  "key7": "2MeHuBxdNYhC1yEm3f3VHAc5xMT21Yq36Zs7TZ2WZS7ZKGhd4xrtkYG6WWL1oztsURp59W4QR3opPGw9Yvwuihcn",
  "key8": "4X41Weeur36iWNenCNYRYhN1z8hfEuL2P6oxnW9qLx6gyi3ameQUQafYwYWsm9jWagsKE13LDfnMmfyGMtG2AYRM",
  "key9": "4adVVERW8xZnTMEpxKJeedJVtPYUTsBdc4SwXwdjeUNaCkGyR2uTrgCc9z1uwZVQarar8feCbLF8KjaRurWZVTY3",
  "key10": "3BWmc9u39yYLefwVYNmJacGvcraTV3d9E63jxRQHSYQhtbGX2X6MkJxTdtxd1URyprLN1CZ8uTkvsXZDNbVz5kiE",
  "key11": "5oPhxXD56CRSBvDsoZtHU2dHyGQYRfK3dN7XWc1SYnAQv8BXBC5D92UKB9Sm7mrrb4xxMvVWM8gDUDDRqD5CJdre",
  "key12": "5ggUXPgxFkM6WtEkwQJv6eTm9e6keRJ4D83zzkucdmcf7LesQR617aBAvr6DnLF1bkQrkfQp5UwWqMyb5P4gCByX",
  "key13": "3BJjxo9We6rEyCyfpqUeTrKCwGkgmns5UeNC4Eq49tC6GUv2E7449aom3ijfVuiu8RdJF3FL7Bg4s8tJ8YxhBY34",
  "key14": "5YUFezH4QzjDjPFmK6SzKyeZLpnLVrxVjXhTitYD1653ftRguv94h9sUekHXVo5J6JCtZcw8tV8q2WhB7HbiiC68",
  "key15": "HThvuxMF9SBXCKkTEQjzHD3QkpEfDXTbgMHUTVLVpAzbpvR4r8xjELszAZXhJRaotRZRta6z4T5iKQLiQzQrD3E",
  "key16": "5XfBwSEfFZDPoDXbLDJT256XcwiBs6ekfpDSc6iyikZ91CAk2WG1h1wgEuYcLLacEKDjW5nGKa3bFiXXj5Cq6p3w",
  "key17": "2uP72QtSCo4oqPTn8TnvxxbhHGrt4dq7Uun1C2r3L9XasmPpgzTUKRrY1ziWpRzgAZ9ueqYjyrh53FGaAdJgGX78",
  "key18": "2ZnBmfHzNnkBdxd2ut7mhA2YZBshuWS7Xj6zGx4PYLZsRwTh1rBUhSWQN9TxzFnHnD4gniCapMiXvTkcu4KaELVR",
  "key19": "48fecXnwDp9ASHBySwVG8ukM2EoUAK54QuA2J16gdZUuAWyPCDDVTt4zeiPWBqptTzBWAuCxAj7KJtaqxEaQgCib",
  "key20": "3fZugtLgy6Jx75v42PFV1FdZBmuESNWDRPyLZkxTkNRhYviVYHYx4zNDjSqEcEkbUAVwByrR6xbhnZhxUzdUJ4We",
  "key21": "3LeURYFepBPgzZnmukoWPdiGr7FrsmeRxLvgmgJT7aZynGeoSee8LoyzUaAxKzufpeeyQZeiQY8po7LpJu7CSegi",
  "key22": "k2V5P3CEqLTYtNGVDcwyjKUSLy5fAph9KGnhgUiDgzn86zYpQM6L973KYjaiBn3KHcpoz2FoB7vpct1JujK8Fad",
  "key23": "41kjjYxXruojehjXAgFEKKSXDWaSTrZ8XkUJt8AysPo8P52yeqo9op34RHmtUQKirs7KnGkZu4zpMbW2YdgA3NbF",
  "key24": "3DmsTvRUmtVtps4hPQmWjERoFNiMrjbnJ1QSBa2YXVe4x6w1uUxoL1BXTErJPenT5RYbMCyfzDRaSnkivkbJUSAs",
  "key25": "5BUo1kC4DRWdJbvLV3ELapLznWpJ7z8jA3SrU1MmeMJ9cJKs2q92skoHu9qMRUWujRKfFanudS16QWX92ser6ifL",
  "key26": "EmnK8oF5jYscrBFj4qcsuaMsjQpu12bAzqdXAPNdUp4Enn7c9H5Q79Wp7rLYKnhGgtS6U2ZAp4sSMgFHyc6pmNf",
  "key27": "37Z9DLmJzB5FvVdKxZftampKcALkpxuE8cDG71Nbjna5iDR4wzCEbygCiYXkLojDJkAcXgXqhPSP35SFzNJ8mY3j"
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
