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
    "3SmAWsZfwSanDgQty4N3XGXtTM9xULPwHiXQjN1NhBTJ7H6kJHBYFo5fV3yq4P5Cvx2A6bumHetP8wPuxAxGtREv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gg6e48N7xbncKYznPpqjCm6aCQyCbWDCWSURQhGXcVYx2Dpig9RJmnUAQobK9tBt5JXhHzcW6dgBtU9TSivySRU",
  "key1": "3CgQ8msz68nswimo3vhfpwh9GapX2U3384P3N4wNM6eAhZLjJQef9UkCghDixtfMfq4zDG9PANPdC86ex26xCsLp",
  "key2": "8BPUwzuXZoAcou5cFM2ASFU7Fxr2vs1QK1ZWh5VnM7bzBun8n1v7XWsFMZru9pUQxuhmzst7y3tEiabo6hykZxJ",
  "key3": "5XXXwb85mWSpzJ7MCD9A1Ep5umLYecdxJWrGVezTyEqERJ3EgUq59yvz44eAa6c2c5fVoT1W8ehMjxpkRZNsC9Fn",
  "key4": "2Dq7r9gqm5fT4Vqc6HGGc9FDMPegCmjLe3kYDBRAEmzXAy3nLL8jmUCkuHor4jSEsYVpLP6bkvd7rzKjrNKK59r1",
  "key5": "istCiEx4CWFDAbLUeuUmEGRJdHZVeqvqnqPZeRgQmpMGk7ZUEv4LZtGuBcyVQPHd1dj6EMH4o29DWjgd9ynsLd9",
  "key6": "sgW1rwN2k9Q368sqhZJoKY6UfDLgx51oeVqzj2jt9Fg2daHXpVKFGqQ4ZBmkp5yGPkXv7WxG9tLuW8XRiDF7yB2",
  "key7": "2yafSaWdqs2kocHV44gHs9LpEnbEJRbA8UJ9ctou4dkKTUTvtwcXytosincL53DBMSyfq6FL7ymTbwGt1FE8SX1y",
  "key8": "N11BJhHV44xRMwu1wPv4UNAbZ9WyiZWd4oXedUdAxqVDz75koNzZ6DDcvADn29yZGhEQjeccxnkjbkHXRySpXxX",
  "key9": "xG3JFbc2jE27GKTyVaSDBpbu3RvgAexufmNFjh9mb6Vz7Tc7foBCYEhMW9mTrooj9e7xGCgGmrtszZ2EJffdgAK",
  "key10": "2ZPZwV7e2QqhnUGNYtURRzgD4XZ61V2GsQkoDgkGBT9M98CCe9aKTACzMsxSFt28XDEznZanWfFVVS4PVmXo6tS4",
  "key11": "5dxYKpe2RGDLVy5ZNZHMDEi7oL3RuyGdHWdEjMxX8WNJ2hjpcXkjfh9B2zXZdpzFcaTjK3oxxxQYAfxRafNZiyWr",
  "key12": "5EiigKP28A8ey5aBH6BBbeb2anzfcHsi95bMU1enQMm4B6h2UrAaT2enkgNF8VescZq4LV7v7TQ9p57CFp5N2xRV",
  "key13": "5keq6gtx77YzGPQtyuWwkSkAoPr16kSmVQBX9cnt7C8DuwcD7CouSARrFE1Dc8Ptmjf4n2rHXp7sACiD7ph89DuP",
  "key14": "2hVxKXTfYPRkDvqxJB3hrzkJjBoJr4Vh1vFVq8YF5PDUbbNZ2xQTGQiAuMW28GAYU4kS5PmJZCzvbMMRg8APu9QZ",
  "key15": "625dHuLFH7nPtgdTsTGXysA3DunW2L5zk61LimyR5VDBkCTXyvhzKAuQr24dp1R1zLRuwgsP8JNKYSx9BhNiGLbw",
  "key16": "5qYjStHHC365FbEfY1h7ZF1nMXAQwCpP6zqjhZiKtYBwZq6bCpSJp6iHqdPj1kSY9eGjUiwrA5wZWcsKeSYmfPZv",
  "key17": "MgvNdpSX2Cjyvo67MFUBJuHPpNvpbmHyvzE9bi4qdxb9PN3s8gbVbqgspYVKavBsUTn3rATaGSqgzC9i4zCV5nn",
  "key18": "3wGSpuARNheNv29XhCSzGC2oZadSfTeMKdR8vg4RjhViRjggd8HY887yKnC1aPAamiPmYgWW42NVLpeG7h9dFzhv",
  "key19": "YSCf1Unn7SZJ1iKR9S9MEzG6rL79bBgSZh76RSb3QTEmFNVYkAJYnXEVzxFw5zVd4dTmZnWn7G2epRShBxYaAzX",
  "key20": "2PDXAZXcAvoMHN1TDRZeoxg23eemEwWdkXstCwwyJz12FxSDCVqiiqFsBn7P1mTWYRDDk3Tq9iMmnYbZn6PJ4e5S",
  "key21": "4PepcYtjeYPYNYaaZUuVx7JCmWuf5rw7zPmJVM6hFhiApK2ivLnQqHuYNCRtDHXcKssKKhKc5fLjnU9Tt4fVHNWJ",
  "key22": "2cEn8JsaTe23nx9qZZHZFSPtxV3ASG2yVvyw85pwa5VwWJCxK8QVg67djLxwdmcM8hNyGVcdHsQSSXRHX9oYW2FQ",
  "key23": "yM3PUeHET4fvtodgk6L8zwhHQTLYjpczGT1FVi2TTeXsvqVbg21CAHm88oWEcWUtjC87MF5AoGPaPjbfttcXZp3",
  "key24": "4gUfm2c5Zyt4SvWAGPYp6up7nXyP2Em6RxUsW3bht3HW67mVbtis58izKPY7WWhR6v9VLcRS7WvcTqzhwSj3GVyw"
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
