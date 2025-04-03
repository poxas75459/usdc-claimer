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
    "5xb4bnELMfk66ynvqyEpgpYnYeMLErwn4rHNhz5RNrNLqHBGF7TNoE51ZjbnLrtmPRfKJ8GAtgNzKwAdqa1S8tpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NNcCBTob8yBnEDGq4PXaaxo9MoFiR9DMpmCkjaqFSM3uRXB4uQ6wb9agGfkjpuKgHMPACwkSQDkZ48ppiQBaUJE",
  "key1": "PxSdfDVxgTxr3yeWPi5KtvwJBfqGdZBdspS9pfYo2daq3gsCmRp2ssuLwLSfwL3569Nd8aMWCNACT2KgfyB86nT",
  "key2": "QbuYbX49UY2Pf51X2UFKhRBvQmXtpvGixkoVvAoGvEnmgw2DjyYhuu2XMDwJjujdsrDczm5uddrLNzNBtm4NG5d",
  "key3": "4yEuaUXE4vCZQmWS9bsf9be3MjsyKrCgK31PTLiv9Z87wuEWsHtLE7Qsu78i2ZPZseLs6Ktv61HeZ6NjW76giLdg",
  "key4": "VBFVka9EwxheprpJJaFR1itP5Lt87bQLZsY3ZpRPN6DvfGAK9R3SKyW6SygqRvJKPnFHwPWBFBFtUqukeryR6hM",
  "key5": "33Gw9yhqtRZ6qywQeb6p4xT3sAz5nGui2WMg1Sp8ktiJvaDw6X3MnptWQf7ZVZPEAc2UCmun9ERoGs8F1VZkujWJ",
  "key6": "3j3BJMyCkM1xS9xpFKcU5Ab15hvuURghH1MVCh39WnZjF2vae3vVTp22eRtHu1fTXUnRAztU785xqLPgrkGkGsGH",
  "key7": "623sXENLDg8Q5aTq4BGPZ57R3PWKSjo5RbgPEucsTFUJpf4gn9DX4zA56SYFwexbz6WEUDtUzKBTqNyucSQdKUNb",
  "key8": "32VGgQGK4bwhRugAneVp4L6oG2WLnQic7UknkU92L2D11fZtjeJzHtQZUcdap5ZW3x49GVwfyGEE9wmBhubE8UWg",
  "key9": "3pacHj2kBRtxrodKWHAdGADCDMacAN1SpkJxcDytXmLAAeVJCJH3GMSm48AEgaMmVSLEKsjnj5w8VuJ3C5d451N5",
  "key10": "3frjcWJiSDJJLizhg5NJ8HJFdkGM69RJeNgTzLrioydBfetAkRqg5b45UVKnwCSPvmYJ4yW2ee11iULTunbWuz8n",
  "key11": "wRDC1o4dbuPNYg9CtEhaPhy7zktb83v31sU9CB8v8ptgo2wnHUtzQpTgBykYkwBAKmPa9geSmzMPR6miEP6qsxZ",
  "key12": "4Sk3xcMxuQ5c3yZqMDpAyNj2jcpWZN5ST3zbMA2oLCLQuY43zp533WAhyyGh5JWsV6ivbjBH1pCZ86GbxU5h66ac",
  "key13": "2Q6PAN4E6f6q4TfRqJircGPF4RXWxYAMEhgv5119yYKo3mMzjf95cLQ9AAGiyuKoNjX575QJL96vKE6g3pHoTrFd",
  "key14": "2eXfbnbyeeWj1SrMmk8HjxGEGJwo97KGpFUdo8EXH9DR6SHtUXxhJFj3k6gsVL3NHF8kgJdyGDyt7YnRydrq1Ays",
  "key15": "4RPa3KBSajxfrX2PXVziEDmKeGfq6S7UuEUVKxVbMgLeV7AYXF5YXLtvS8qQ2HyH8XSboqM6nY15Uo8Kuj3YB186",
  "key16": "34cDyDBTrEEkjFsRTUg88PmHGRqHQVQ48QAW1mShFdYuaS2SCdvtsXTPZt2uVhseFqPJinpv42yhAabGVDe4YpXT",
  "key17": "3oTWiAHRqbbi51ByKmNUYd55YptibVgKwbowp5mJ5n6CUKTsJTtzzv5Zkc1b26VGAqdE9Brj14QtN5WXj2VVRnxJ",
  "key18": "yE7TuKkNGCFJyWUs9iyWEiVb3tjc2CTxFd4Hw3vQeREU2Tv65hvS4EhT1ddgqfmC1duPwr3qLTw6mgvcubUuDzs",
  "key19": "5Bo2wixTWxq42WMX1Keh8NMPx7cMi19SibGQSzvGEPxaxTaeazp5gUZXv1T4qXeCjX16cxMtYukSapaishkzzevV",
  "key20": "3P5SbdKUWDUh9Dtg36aWBpKERr7PYq8b3Lkv8Bk2cUKakB3ndvXAeUcmjcLUwwE3GWkSiqxFfegRqy4kf1p2Snzd",
  "key21": "4JkNBZNzji284uKjjTNT8mfk5NmqSWvfadJW69XghSssvympgmj8u2D6GwV7CzT4BLYVPtjD8aJTBn4NUkL1h18o",
  "key22": "X5ZsinD5XeZKVzURhCTed1D5hdt5Binc9hSHgiAtg3ds883WhzraRUpYYEep1mxhMociAxBxjrxvHrNgyBRaU3b",
  "key23": "4PvbyTJdJKVefcxq97T7B5sRBirJ5xb44AD65jb5yPAL65f4RWLcyiZPL8PY4w419i4o1ALpK8J3JYBMMH3xWeU1",
  "key24": "659M18CxxBWc47ZPHwMNQTSXkeqqhmeWHtw6TBirJefTgLDieYoSawzCK6f7MbLDGxCFCHamJ3bhGTWTB29mb4i8"
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
