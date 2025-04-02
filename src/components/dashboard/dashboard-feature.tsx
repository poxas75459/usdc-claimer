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
    "5t5Gi39Dm1Y96mkiaB6GeaR9aJvxG8VsJtK2E9sjtip9ot8DDyNuXx16uswkshuc2qGGEbyGPNn8CWw6tVcs3oGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XtiXDhdZ1Xke17pb1cPrhxdKjyUQXbTNzV9KWQBtpdWyk3eXYJptaPX7vZLpAjRN5bEXEYugpb53naz96p2sWzR",
  "key1": "5qcwS9f7NNGdLY3SnkCg6o5LWG4Gcd37xTkNLXWAUKRDgmpX2fvGo87K8z4XfyLunQa481jCkwPDFqzEWvh5awm",
  "key2": "5F6ayh5tHxLU4iDusKcKkqXrdnLzJMMpW31ehvxHspugTzLDgwuRhY2mZmUuxomYzktq1Hq7NmyFA6BUmNUZPo1P",
  "key3": "Qs4uUNL5cpcLrHiz2CEAGZSkNCFAUs46SXXzb7m7vrsS6y3xa2cSogX4k1LcFaLCApuyJNMSFCT1sWWWf9eSN3p",
  "key4": "4MXkZULVzU7na76uK8MQovBb55zFdhuEUCCg5gpZPhBoS93kmTh1C8xyNg8mLN96oKTFhWkuVcyYmWf95hLBa7mG",
  "key5": "5uoPa2LDndvaJ1V5PNvKM9Sjuar3NmdEHKvzFuEq7oVEhBBbuddeFDm1CSaMPrQAZy5d8CymwxzXS7GYRVYvZkuv",
  "key6": "4yVrDYhComDAucKakuXJZcXRoexyinuBWAyptsXAuKt1Yg7EqexKvFQFcttbRNvQxXkK2E8JdBN25a79eHXFEbaz",
  "key7": "fYt1huWVU5rKRx1AndNp8MPTgAtVqFa7Uq8UCGX9g5gWZknh2TngpzNjn7JgdK1VJazXE2ecdBWLEcVfUiZ1kDo",
  "key8": "5Q5cCXVtGwMM4KyhDniBwuCsFiuKAdUH27iKovUikoPhu5u2PxKNDEgETwuL9q9WuoKR7WgD5f1p5k1Vdv8mX5AM",
  "key9": "2XC5atRn8qtprzPCbPrC5WDkoaG2i7Qxzx8fvG5ZAg8MBYVfY3pQ1VQHJWXvXrRmnwnWxtGnRFEUWpvcD41Nk12F",
  "key10": "4fXa1BgmyQz943ZbLEYkay9V7QXZVGJnof1qVLeMzXdvUfNBe6Mekt1Wk62Q4uJPixzZcgTcCMuFafwrAdXsEddj",
  "key11": "2ECfnyCi1RMXNNWs6W1pXvSQNJBTD6EiqmoV4kq3PkhXr9uLxaQVmNSc12kNHD8EY1EzVjgxdcHahAtUMRfrQ6vr",
  "key12": "Z9zswUG5G19S5SRnapjpRQU1L5YH44QyUMsj8XFWjsF1Euj3MZtCRSshxWbFUEPitXaTLXZmAkPrQe5RU8ziTHf",
  "key13": "VNVDVrW4xjmaykqWB8VDTRS6H6oqJgGBWUQcF1zLhxXESComXshbPM8iqrLo3XkGxgrqjaVL6QvcvNxar8ZQfv2",
  "key14": "5aN5M93oQfmqLSJRY24SywKALUFHJhPyyrctu9PiZHyvk2vJcEtgj72WXwcSXnhFzhs31LnWSFmHaoqRcXG9m57Y",
  "key15": "24qquD6e5osscB9KgKUDKvmmNrKzBKZTiPBENbxXBGMMQrc7fQRgEgXcduWuafuESHqAmZxayjadgjGkebzE9wgM",
  "key16": "4MTAkY9QAkWekLu56yav43RxCNpGR7gdNu1o7PoCtvWaKUQnbCLVrRuAzRk7eYofHopuaKvBQBNqzru9Vgq7Qf5A",
  "key17": "khFYdKaZqC9isAr3Fro3iQGcYRtKtxhHHghCChXTWr2G4GWWNmAQmtmfWPANk7jzuWj7qCEFFVhAmRVvLeuLUrQ",
  "key18": "5YKvDNQZih8UuqFR6fBe98mYpi4ZrADR6LeLzizncahgG6DUDoqUGS1Pr6es6G5vDHBWjo3a1kdfuTVDTAcSzCdY",
  "key19": "6382GvN5ty1YHvAUcVvtVYaPEPAqJwGRFPUjMUTuPVFWgjbi3DANHBCTEpWQ6joLFMQFmBjown4uNiRMTxQ2PFKk",
  "key20": "2uYpF55quMdLz47MSYcRP2gYtWJfagkh5ehFoZ2P4Z317LixHJFyXx8vTLMDVspviRfYcdm8FusEVfiNHh7CJtEJ",
  "key21": "5jcnhzMZCmbjxRJP4qjsr6Rd6YBhMS7tzXzDAwA7FAFFkTsTnJybRe7vW8xYM2ZYUyGMnWxV1dBPjaNSXkTHmzv7",
  "key22": "4EuER2SwGX45AMvqqfnYDgSQRnYTF4WQtXAKJ3L1UeJAKeeTsDUgqftcKEGCzDUAPSqFA3bBaiwABjAZwACgVNe5",
  "key23": "3wfGFbEh5Zw1mmAo9jSWCapdAzatV35oCt1Kqupw7hBc6nJZg7Fwp6UKCErvJFLW4kAMt38wnN8QazQjiWSJqnek",
  "key24": "3RMGqZLFu98xxZD4L96kSfJ5a6BiLzQfEsjFM5f3ooNTrZLNauQRCJTufhPZvPUQA1tSCa528K21YUpM7k1hQZHA",
  "key25": "3WsqabxQXdK5RjnguvvXhL33ySEibzpUQoWZ6nbA1ggvKoduW5RSZ3R9URsL3BTSZrDpNkGuT42iaReoGhiisv4M",
  "key26": "3hFTHkbpgqBQZQQbsEZz1oqm17BTQzDhJi8KyMfj8xj5kjzkUgZHRrH1Ga8ub5JY4bq1vVA2z1mEWgZFhAmfnkLL",
  "key27": "4UoPHq9EBdWyKnVpe4gdBhhuPueeLnHTPbwj2k3SHfFgnp5T7TDX6qLo8RpXVYXLrTmxC3HNhJq5kmRH8vXgu3x6",
  "key28": "39L7qWguBHVa6gjWb531qoZVSKuRX97MUTs1qEx3parqhUxR3iuU4eZHud34SU1AfK83jJ97V7p4sfxPLAeeGnaV",
  "key29": "5vnaC11sXwqNnvLVQa4fWXGTBy5AwodsB51s3wwJY4hui4kubkZUhrTEqMVhJnumD6gz6cFPFi3sHHAHYHdFUbUB",
  "key30": "5fifAYxJ9H2DpTMe3KguKrMKFk4DyMsR4MZwX7SCWgva8VEjohSrTJaKNeqY3JgBSPVtckpFgBPbFxL5LCUQg1zD"
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
