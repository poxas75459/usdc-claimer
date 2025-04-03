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
    "5fgmK1cz86AFJ2UFmyjtq3fiFmiACFFjEswZRGcMqnYwvTKCdVDfjJyc5x8XMs8EAWMQwGJC7mVXNknGoJwdnu8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ctgdxihuWdBoj9PnsDFuec99u6xdq6fLQHycfbkrDDKhARtGsvQhPduTmTb2PoaXuBNXah74pxfXHDE2dFhGD3A",
  "key1": "UysoJpvZhKHTdGPfXCV68Sg9n2FTGjgapUTirCnrA974wJGta21Yetzo8647cD4MGwmiAQJsDYTo5TJLbaer6wH",
  "key2": "5jPSAEsoM3tV1VhaKatf1QQEANqTFAiCwMcef8AfFfQ2GcizVb5MFN8jE7DEZjWn982coGk6m89HQLvttVVtD2vu",
  "key3": "3oLB3yfLtWVUiKyNDF1daESfCKQacV79q3uFd4MmxE6Ma3trXw5fhFLNwnzk3MQTq5iXaNgbWpnW7Nxm3rt36hEs",
  "key4": "5yMZ6XzWYGrLcAiGMzBdqA6pkfD25trJUubXMBU4sYnpmxJo1pdxhsNfJwPCD7HUAnXw83TU1HkdpQ3Rm39eEsAG",
  "key5": "2cptR33hsqoEq2rduWEvtjz64gpgRjMA7PeF6Mxdb4R1zREFLA7MS2qaqx5wQQrGBeKYqPMwoeVUmPLU3rTWDTsZ",
  "key6": "5i5nTBjyMTpg3UQ7FbZQgMuoQ3LbTWD49NJ2oENuE4SwugESm3L9bW1Hk4HVicgYJqbZFgCkNQjukFjzZmdaCMWE",
  "key7": "3bE4mSirfNoPiuMwHUR8mhyus74mjgKaKws5CFKkAkjYnr8FfF78CHdDAxPNjg943kYN7ECPiSb4XiHT8iLhABHx",
  "key8": "3Ka1UEJ7AVHnf8gXr8tv4PNmPz4dznxbhzmcXErwRiTwSWX5sGuVqZ546QJJfX1byUHMwFRBnKbC36aWrURcA1Ti",
  "key9": "336CKzanznGr1pRDzKQT1BWn3cen2syeHQsuvywi1TawEEj7kyZy9UUM3hunaXZbminUAVgGJoyH59bUuo932UMB",
  "key10": "2XT1Ee2MDQHquTrPb17BAVKE4vey3xNGwCmK4rDFbDWfNArJQyFUX1KhaGdyrzaYXRqMMepHHaXeAvro5RGbkxHG",
  "key11": "qTWcwc9S9g1d2Y3uuoPJo7ZHmsErRMvGLyHX1fcqGky9bYWr13GVH3Qc6etLrWNjvLXYG4wJpT7m2chsbnR5HQK",
  "key12": "Yk8vUniqbxcF7ouuT5ieMhqeKNp4XVUTJjKYJvWW6WJYCcn2mck4WUw6Ah8XcGzTmJmawrJ1czyFy5fYBYR2jp5",
  "key13": "4wcMHUqmq9UHF2weHGKuAhHg3dML9dTW4ahfCPMJpJ5xBHRg3qbHQMmkZrrGxv6PcUsusNr3obaCGWg192CWLWYg",
  "key14": "4spbQmF4zUBGJ5rWnXgT9j1Q7m4jcvsNDtNMhiwHhNieohdfvvwhi7kYjsXf75egp4KiyNsrFGZELXGe8C1QYtu3",
  "key15": "wLJrEvwj6e8E6yqd3oYfmCj3DqSWUmodSvfQpPS8ZjeWo5NF8Gspo7qw9izhE2yijNdYJLdFFWcJFAUpDeVUCJD",
  "key16": "3k3K77AsXe9EsqwKmV8L16ZohyoCPXruKLG2xzGWjBRvaCQfWusRnLrMiUbfhVwWhSyHEGri2PEA9WpXfLsiWSZf",
  "key17": "qUE4Xt592cf7XJQyJ8rvU4pVYbcHqUQWr1pcYGvdmTxLrQrCVn7UNDJ4vUbxHBL26a6pNd4RnvWMFaWkuZZoPRX",
  "key18": "54SX8EazQkjHTTbN6S3NjioBm7cYGnVmp79EbbmgkpAKEWUkK9bXRaThsDtm18uuMjCzPw61xdNruKJMHAXSAvRc",
  "key19": "4GKkrVVtgmsPWs8dn2mTtyVS2yDjEyjF2y632cMkdEXogqCVyUoo3ea6qzSoGuLs7a433TACPue32FTnYHL5nCRv",
  "key20": "4nSKFrCpYVFeMQZDbkQnXxis7aRDCBwoksGt578xyFg2oLvkA6iuKb1uTdNy6DnDTN1gBwzSA4JFazBi7vVVwmZN",
  "key21": "2rVMHroDYby8RvurthHGz5k26VM5zVES7qdRNKMd3Sk2WYPUvgThBZeSt4wyvLFVhg28pdGhDgfkbuw6RCmF2ayN",
  "key22": "3misK8fMErJCW1H4H123bS8o4uVr8QhrmAL5s4nw4u2DTirKc6KjjbFmcCbnGdF7CWGsS6zRNCXCsDWGwPAsbL8B",
  "key23": "3yyYzY4LDHTzoi3YF7FE2iufpyJHptvupkF69Vmwu7XmDZpCgb7tzzCta3D3JyAcBSAyvprnRSYpFR3rN9zC6ddw",
  "key24": "4MTuuaY3EyyWtthNhGpJkWMNDisFwM8JXHMm4kfCn7PFY5ztS9uVSAkaJZENfAxDBWphdy6XF5pgvgqQRoS42V25",
  "key25": "43ozveWC3uktre7J19QkXwoxrQ2XPEeY2FtSYArEqyfwWjvZTcCiY37RQNrHzRxqdG9aNXeeqxvR5Q9mKUMFwhVk",
  "key26": "4sNiz6xYb2zQHPLTsbVzpTfEiR4yJaSkPUjZ7XrLKd4LUAyQ5AUpEWAqLg8CWWkUqHzFEwx7UwZ9HvX6s7veLM5q",
  "key27": "4xwg5TY7DVcSGKu71PBRbCCMVNVXqfkghawppRG9wK49aZSwK8kfbDgjMfoURCSc4AzHbnZJAnrNHyMVDPkwCY8Y",
  "key28": "ENJ14YLoeyTSGqF7kuqAgkircJGfeiQZd3XMaCTEekURGkKaEGgX9CDxRriDtdsjsjz3kgeJA9pb4msrC8jFCBZ"
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
