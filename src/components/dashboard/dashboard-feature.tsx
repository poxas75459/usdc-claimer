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
    "QVVSKtEyoEZrUZpQPZb4L28miuhqEcKaGA8bvGsDLfWKAnDiYnjo5RrBApwxJZzUWjE4Cy8pJ461DPRDFiAVtz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bUmCwt2YEEAJtFaAssR9wTQyEQWVZjASaAsovXkcVmQdUWsPX7fDKVskuZbZ3gYyWUhvD4oHHQVtw4QKaGzpJh8",
  "key1": "WnvazcWsNnJmvrNWXwps5sSRmxNpWntY3PLoNy63oFry9yKk6MK8pFhdZkZVyR8fiqDaEgtgceHCtgVn7dM4V5i",
  "key2": "2dJy4hPcEEcd2UCcKagZpUPq6gjS1hnfGjGZu9Haw8YJJ4kpR7HDE1PYggcR5yLi9cRH7fqNgTUv3oJyiHtgcSek",
  "key3": "4Aj9tEFfjfGPWgfHxZ9ALjKTYGmvoMHqaEB6KhbqnQ7tvoEAcGjbi6vJQSgLXc6dcJn8aJkAzYJGxZYhEY4Ezvcj",
  "key4": "4WRNAotWLTg71mNMb8iMT3FSPZngqpNfUKgEWo6QbkvbbETDhrWQooQYWcKm6piWnrBKk4nWV4Xu1oVQG3jX4rtu",
  "key5": "si6YUGkWAhs5eiSxSoUExngGLw3tfQhKjCwJz3n6b7q5NeyGriTCsTU3wYW69YVTXdBMPeZ1EtSXXbb6CiDerHQ",
  "key6": "35tReiWYiD1bbGnHG6EBDw32uACydfTq2RaegVHGYJjDzBjU3kL4Q4FvoDVzSPNScdJXx64zVrJRtdkPPtzR64pr",
  "key7": "3gx9BrdXEbPk11K9jab3LSwjB9NtCTqXdA8gNvAJumUTr4v3cxp842QjM3aiXwgyBWo8hvCpG5Ci1mWuBqjs4vL4",
  "key8": "3jTbnGKpUgtGVoeZaZRzimTKA6RYe2TzPLRoT5DwE4unC2KARvvqUeNMexZ7o5FLu4oEpW3Nom43G8TfN7ftKFVT",
  "key9": "3go3KR6sCG7oCdHu7W3iXX2DN9VpjWLXWcxiXY6SQXPY3dGUT5X6zzy1rFRwxvKkC1MQ1KwDeJ2uQ3yWhe1AhmMV",
  "key10": "jVVBHjVHMZcgmek3mdeRaKjuy97xUVMYuX8wHr9qsiuQkNJnSCReBocLR2A4QRoqgg31kZMJGwqe6NqcTdBNUbc",
  "key11": "zyU727Gy5mNmt4TiLsnUJnCDfUhGc3Ftgdo8xEku1xb3QkPsN5WAjj62ZzX5XEKGpbyYM9mrs9K9BDK8e4G4En5",
  "key12": "2hRT7YLdRNevcU3rc61cNt9AdDAp7k5LtoJKP8xnYRPnKmiTJNwf2z866Ze9XkfubBw9bnVWm5pogLw4p25QA5jP",
  "key13": "3Y7NP9iMPq5KZ2kmzbo41TH5nsxP32e2zDjY283yoY2xrJeZUGwpi5hk19KsbXBhzh3WK3bzD1DyroASGRfz8KYH",
  "key14": "2NJT5CPVjmqW1WGT7NUYqafPk5FCwHgP6PhVoffC7YnKmJfyr99upg6nZiuNVu7b7VYv8UXPRPyh1isdqysKBzP1",
  "key15": "5dGHGAnANTNCtTJpEE1YmFSBqyaHTwczeeCHuSLSddwMCTGm19cbqkMxztBm661XafsCWo4FzuvNGW4sWqqVKc15",
  "key16": "2cpJL4THj8TK79CaBsaTrP2by7j99kaD3zwJ2zTkoWaZJSZrHQtLJfMS56LAFzxoMpuYWyDcjGAPKBKw1KbnfHWt",
  "key17": "48YjbYJ6APPQYgjj7dKoAg83hUuPZra667ZeSPbyPRgbPPiEPSfNm6G7T2gMzeps9uVitnmysFxJjrf9tuxinE23",
  "key18": "64WGpGnj1M7CPrX7GMEZ4xQ4Nfb6hw58zUTMPhN2anay1LwJHrDvSdBPkSiUTTxT2nAczL74mb92E86HsVa8HgG5",
  "key19": "TtGs8Qxsm7VkowFTzFJwig6DBhsRsHbQqw9ESaHN76akGmSpuvZL9mkKNu9c8WzBsW6TMA5jVaX4Q4RJrrmzsci",
  "key20": "4z97ST3z1npm4HGTSnWxQqL6GfyNgW6PdgJ7pjgQVMR9EwbdkqGq8Fg9P7TtL8js5UiRDEAaHzrCRFnY8zvgqjA5",
  "key21": "nsbA14iXLgAJN4p3fUjpz4tTBvhruJyM5FXELYhThp6S3S4sVeq86SJefWTezh1TZqAnMHLBGeL7QdfanEza6Yq",
  "key22": "tbEkW7g7i7YLGRryvyz1jnHbqFnkNJCQRK3zAXQWsSyEH8GPiDEY55oWZsarcbDBMS6eeGeGaWWLBRTmFyb8uZg",
  "key23": "4BW8KTHCMNdWYtwe3hBdJdXgZUdcVkMNwukxfN397TSDbzjAKcsfY42bh6Hrb9QEd3yMkxeaK2vaTEWNziLXygoD",
  "key24": "3SErQ8pVj6ZPk9RBw4MJStpLX9SfvdpHKxh4zZ7USDAeizJmmTDcQjSQ4E5idZGMcTWxWX1a7fwxV5ZudXdEWCEx",
  "key25": "45JPx6D4CXBYzytqaCmGknjoEASoTd7ufdrXSVN7jyrQ4F5GMCd2WT2QCJ5MPGNGwqA64iJghULtx1BXcFgJ5gJx",
  "key26": "3Sw4EU3jaHbEFrgfiBmWDsmEFEQVRrLfo8LQJBEXQtWb1nfemhVGajaU4wv8MnyVZrzuFXeE1fht7krcNzmTdsH",
  "key27": "46MCCfb1RcyaycAwUHkuF2Ux92234TvVucykdjYrrAiwP1dQ75MnS2WkCzbzs3ewHoEn9SP6HyAB4vYa3b5gCePT",
  "key28": "4HsipiXzzmWcLzdmg3UYa8ASAmVn2f2gpGD5x7jHQdce9d7PDcyJJBRpxd3m985hpPhs76q2AKF7o1JVNHdbkxoz",
  "key29": "4c1bZPujfZ4HHJmrEvuhebV5oW5kdYtu3Y35ebufw1q8kMXHUMh69YccZv8CxbLc1vCiiWzovckEMBJYsUro5bve",
  "key30": "e7RipTE2SZ5c73T5PneDDQdnBaBZKKbpQ7C1Lidu8pVmDJrcewHTMZ4pdExvHuv1MuLNPhKtpMPfuqAbnjxfaax",
  "key31": "5DnX2CdhpqQyMjVKJEAjMQQi91RQ5ZLHN6LP5kZCjjKQqqSR7dS1yaghoQ4dxWZkJiuWjKtTseDgKCCM5VpoyN22",
  "key32": "4LLxisTKYUPyuvw31LB7yQZvav5FaEtEDPnXGKiiQiLa4kYc7PrG7BBePXtiGPf6KyZVVxTsHbBxf4kUHahvo9uH"
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
