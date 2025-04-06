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
    "34DS6H535wPM22q8uXnU2Tpd4jVNSKpRKuKhKyTM2HSNNys39QbuKPjGXKgAkMGnyGPceXq7g28tuaL91mfdJ32r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XpRmFfB3JnGzkpuzSraa1b3ij54VxgebErEa76CekEbUBuFDD3ACePvfG3YsqZX1ZN8q5GMYpckr4QqtzZPN8Ac",
  "key1": "4yj7627bkFBuvuwTLNSdtW4u823yFfphHAzc71LJwNofaPYSxaQCGd3bXHLPqA2hzwToq5aRJKeePyAbCN2D47Hm",
  "key2": "3AzH7vwVRUphanrDzMdrpBmoDaBgFcYR99ERDyQue4PHXz9QcagxtYTKPDS8g8uA4EBKap9me4nmuWaB8oFSRGbe",
  "key3": "3LnfSbwuvZ3ahjoqn64d7cgqcyeNDQHTmHWJTgm4UyijecjLLqCHQq1BJ6HNkeAGmFrNFUzKVdFrUwHuZwJJKp5v",
  "key4": "3pZTCMUhgPGDeBDCdvuVgYHEnufxCjceVKhA5hYdJaAEeyyq24Soj1yusxVFKNb4gdGwo7Q5GmigWH8qVswCvpQp",
  "key5": "4vAzpstaQ5y6YuWEQaQYM6JJDqUjfHkxAGUVBdYwuUDFgiybFbpc1urs3EgYiBvrYXKys9E1BZwJQzSfpfwEAU7j",
  "key6": "3BcsyNvL8TM5wivdGbxcwh9bmzfG6KSXzcmL3UF3kk3Vuu1LBmhEeEHyqCpFN5Wkrvdf5s8Q1b8nuqyq3HSH8hyM",
  "key7": "4zbqj5nuSp3YWvuvAPqjbNzStgQb52X5rbVoSjVT5BSseKEYtrTkWaZ8e8cwDKVdDGxj7VrAFHCNCXdFaBaPjcZT",
  "key8": "5pH3siXDhuUHTa1XJKr5TNeXdyehoThHsWRmgMKYnme4ufZE9VoMvAUHDxQgyvTFEBaFgsLZFJS6117JptPguthe",
  "key9": "CWQNpthsEeaaCFqGDzYgokXTQjJZSLzePQrixLae4pGTN4F4XU6NVR8QhpadXS353o1CcmaUNYARHmURihTxBTQ",
  "key10": "2mvuShbyMEJt9nTT7JFzb7jCseAaoGT4YEZWGwU9yATxCtGz1go8YpaqJvkd6tjy9F5iooUraUCgbhX9tVuqFJQv",
  "key11": "4tkYyUMVP313AEYr3T2xwpVx9NA23JijbmKegZ7DYhhndKC68XAZAaaAz3QupAKuU5DAuiTttY86kxrcpA13uce5",
  "key12": "2w3mesZkaN4iRZLVWwHhmyGqBM5umy6jC9UNmZr6qphA6Xo31b2uiNqzoJh9H5ELYMseNvGXCAzf1xnQ2jsBU9rm",
  "key13": "58kxnybxZKHopB7Ek9fELRvqCwwvtecMh8ij66A1N5tX97sqTsRXL6hA2JHh1aQtAv4gDZLdLKFC3QyYeR5VGNsn",
  "key14": "3hYCoNapivgkSWuXNKaWyok9cqFWRndfs74cXcHjojBuvV8oTrX69zfVdfpFHSM5Ue57VeSF3sTMte82cgzGPAWk",
  "key15": "2BebZWjJ2UqUdNz4iQyhJGkeLpyaDnzsariRz2SAaay4mHSUyjXgFdNpLAhKKzit2RjXEE62rDatkhnpNyXM2tYQ",
  "key16": "5FBmD6mngEHxjV7Ej9idqUiNAkhCGw5TqLpCHCUGNaCHTXcsc45xcXukxSqrGW9iGMqCycoEYifURcPNksrmGZWq",
  "key17": "4zA2tTP9wtcuVNVAmqgPEhYG5e3g2QxtH8fX16e85Lje5esGcFrKBi41zTBGLkxsQmupFQrVwN5JjbSWNZxpLbtu",
  "key18": "5et8PCVwrvEJXXZgMjbCqUucnKKs84V5qRQqhXSQqqqqwptT17cnmLfM34uuoceEGimC8t6atjggt3BprZEupWg9",
  "key19": "m1cYLcPdTkowTewEoivA2gemnvQkyR2dsC8npu6X6UL6KRjvTCwhcd9VZA6X33ra6fYNnCGPiBC3G3KUnNE3VJb",
  "key20": "61YVjyMs21j7FWSQPibtbE5HVZVY9kEQhDki7JmpZEHrCcZ6Yh7LHAGZYBZA7Ju9g9fcqXnpR1oDQgUmuPtisG1d",
  "key21": "2yfF3W1biPtCULZj4HcjHuhqqF7SfiS1JnH7YhWTGyVYEUc1VYFPzBKmK3xYw2pGiuRtH9kQ8wLosQNHjSjMYJdP",
  "key22": "5MNATChjaVK6Q7AtnBugqP49CEHWa22L3W9oSzzGvTXCbhUhDbJpD9y8SxsrT7ippTTfxM6LrNwZ11uvjuis1ajQ",
  "key23": "3uSY9gJ6rgULfFoW6Eb4h6915qNqmaAQSXGoHsoFvPeMJ6Jufzgd6JY7C19EX7Zv7vCxcFoZmhhcu9sjNpphJWnL",
  "key24": "5ct8zz3hXr1gjPecKXKm4S7JbTkAYuPLnW5FZb2rhsG9SP1RFdRp473bAGiMJm2xg55FHqmURvC3QNkbv5cRZ4NZ",
  "key25": "3zFZUa9tC5T1DP3cNZjUWpCEqUyGQNTCr3VZHjFvNw36E8p2GZDdbBLQXFSsVBQCzoYYZZpL2A43FDEV5jvwEEam",
  "key26": "RhnT4B8EUr7n2XbdhEwpyesPjVfc1bf46fmMoDdmp6AXC7SPtypjXERKSDK2YyfeYh8kEGmebL2KkmVSrra7Uq7",
  "key27": "4h9k8ox5ojnxxZRG2nVPxjJPKj15w5e3UEbnJn8VfCA6JpurhG5jpLJweGM6RwJCoGEysP2qZseX9J2KY2zandWB",
  "key28": "2fbPV3ohC9QLTkPeRnYRGYkCxfcNSdM2o5LSSLsXbhaYHjAAmBZyCYMeZDtLx7TK1eGPNJqrKuXbn84ebfTKcorW",
  "key29": "66M8QhqGuziDS7VEAKAiNxqUCFsSjoKtco9K7Vp1KMbGzZ4WcvP7QptDsRYSPMVSRo4TFFyB4wCrJ2EtoaNadj36",
  "key30": "585w6VJ6kFdhFU3DmMd5WmCVFALHSbjuCBXoMzPyJXrwahbvbL848T3dSzAgc7p7NPg3VyiUvB2s5CxKzMJwS9bo"
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
