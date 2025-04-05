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
    "5BAAQ7eVTnpeu9GPXvfbpH3vnhRSCdjV2EYiabzFB63dQiNoDF3YXEQAmsfUeAtykvpbjXqG1KuVMiDUJZpkFibj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jbeREiv9JGgMJE7j4Muf7394DJbmKmC456ndvXiwmk8SnainwYJrqm95rwoKE8j7jqxJdi7M8m68Nbz5Qj7KBR7",
  "key1": "4VkWbSDYETsGVYTPr41r7zskwjT4DXBKWm6AM9vHh7qUeCdJo5gMtTn4B6XtoWuRgXfhm8euUeWYrwfd8GfCRSuU",
  "key2": "2uUbzbiTxmnLKYsooWpufrb5wtw2FRwvhhjCNojrQ7p1Ku1T17Y8S73buVCj1gfdFbvMeskQErapEvFctw8S5Px3",
  "key3": "2x9hTaJBePoRKB4reqCeaGXNgXWHUioG3WwREE2zRk4qS13KvxezFV5vFQG8oJ11eZe6BS24tMiTjg9MT6EnSecs",
  "key4": "25CaeSNDCrEYkQfcZUSpsrZRQmTuvNuL51JZzsDb9fvR96CfdzRBGyAANn2uZpuPxjYStrSaWr5ELGHiFqFgRpFX",
  "key5": "5h2XHngShQVp3zutjQRFEuPYmcHX7rFJbegvUgC2GapLpgyuq6w7ob96WHHr784zNsMZVq8izd3enxMKw9psihe3",
  "key6": "4eu7oJ3M3ykRzy15chtr3hs5cLvtagCrAKR6z3yAYxSVWJ7Ua7ogKszco7LDh6n2m1JgxukUJh1JS5TNguso28uP",
  "key7": "3pTpYLfFLnAbEkXjquXHnzYC36QqqERGwYfQyLTU6EjQ4TTys2ttLfTPFfiv5xrWs3RevxAjXq26Ay9tUz1Piueg",
  "key8": "4pa7pGri6VD7cszbDNmoxrN4G11w8kkyxVqjPqUnZCWCbKeg6eWbLrRT83DZTnCVnYENJV2Pyp5GyahRUmKN8LkW",
  "key9": "2FopqgoFMK6dB6iyVWGcAw64u3S93iEfQwb4EkPRMhKr3oHYqVtMGAZzYCRcD9mUSq5WkZQDStZq1UTTz2o8e4Gj",
  "key10": "4YqJYVWNpVgFtu2KdLLstnTwXuT8fZtQoCmwxTs85mhrqXt1Uf4d6QbXtEWSS9QDcgUA7X4pk759B5vEKkSZsiur",
  "key11": "44mKxZB3m5er7Uy9hH9KkZLrs32UA4P2XNTaRSB4xcCeqnf34Aj92Rv5N673YNqzyYn6LK7xzNu8fZ4rNqyZkm1u",
  "key12": "4AAVS4pqkkZD5Fhe4pF1iVGCfzcGjc88BwkvBXKGnhQa6h2eXXfnBmPhrY63BETo3YP4QJ43DyB9BbJUYPosk4uC",
  "key13": "4Zhbjdva8DSFE19EWn6brVCKNpB4PJfkUPuiSfDs7bMSgvLuj7iZtTGXfuYpEpvMSLLsmQfx4MYbFrgA8CADC9t9",
  "key14": "43Z5PPgh8TDrD11agoYForvb2rqm62hXNRCLU9RHLqE8JkrgtJSCbbbQ989yoiGdi7eAMhqLpeg3RLoF4GaifxXv",
  "key15": "4t2wmJxLaP5Sq8mdaW5nbrzjjNzgMdxnWpefbWScK3tfp6uBHTJrVdGQqAqpE517Ye2RJbaJPbgLK6WU1jsofbuP",
  "key16": "3QrLXtQLBewAbLLfd2mMWeGzyLJxYTwYF9jcs1mk42UN7x5qJejhg2usTE4yQavr4Psq7WfoZnXKxX8SgvbmU6z2",
  "key17": "2aQS6bCfXdPkbbEyUpkxBH3RqJmki84GXDSVzvbmJgi29EE6BQSRXbJzoQ9c8MHRPnorirVVLSUdXmGTemV3k4qN",
  "key18": "4wjneRrQrgNjnMC2tyaRFDPrk7HFRi9LHWMELjQvGZmb1s35UYY7hED16z67jo5mUJoiyh59kzSUYHPAYMEZdJfP",
  "key19": "4DZodzrFrWCirrg3q9EButeNCHHZhtoYUrabBuLFU8awpnV8n8FqKpoFwyyk4YNafoK2FFTpYwK7MYCqmZSDYu2W",
  "key20": "32sgVJJArUPTt5iCDfYeGq6hGKJLApMsVJ2xxLethMNXqoPPZMrbznJiN6WKpJFt8P1g8CweR5hBczvkwGsn9yPf",
  "key21": "5NHqknKDmFZZrEpKRSqQAEXrRjiYGoawg9V6BG1YphkFsJp25w9wsLtP56ZWrpFJGcoXtx8oCSti6fnKm5bKHmh6",
  "key22": "xjnGNL2RiZ8yiW1CXtX2DxgzBfiuQCSj6BX985oDtEJSaaCWvPFBkSy3MrFngk2QziDZvP7tCRot4CAesKAH4zd",
  "key23": "5LynedpHfZayTnbvYywGheC6dWd4W5TsBuZyD6obQW6HEYT2MYR6EQX98CUiN65M7RboEvvtyPMKaBHB2hbYPPed",
  "key24": "2LJspn63SdEp9wNASzpNvougxK5JCgg6kDAMrDqrsaEh66RVaRFZ8itS8DLtgJYRtApwy3DToHbzL9uD1TW2x5dy",
  "key25": "RzYhmY5frB4sAt3e4aTSoLzKpEGxUUcAY6339WdjHnzUBaHdTLGyBKau6y6qCGMaqw37cqQdnfsg4FmRThLBU75",
  "key26": "4jAy9PJkV1jNZszR5dxN8VZK7K8PpLQhr2F1hRZKjAfR5gpFYD1mudpzVVzKyJxHM4oSxXJ81yRdprZDYCBbWr6a",
  "key27": "X8VPTaV9mSfTjnmBnTKxWRBb64d92UmR8n65bSTnrR1MWaA5zrjtcgVo3RDe6R6Vu7L2wuYYL2QQ46VLhsdjxZW",
  "key28": "5bWzVGVyqFnUH1NPZXqaYtPnw8TWYVT98edUvNhVB4LdqAJR79QjP9sGdEJgmtkHUcjS4Y1oPPwD67A3vFJRWxJx",
  "key29": "22HnJEsQfVtjvbaz4jVFxrRocifub4SEyfQUhE6kNZx25Ac9NqyBKQjG8u8FLA2xHPFpKYJbjFKs7wowyEpRDxHU",
  "key30": "oc87b1gfsSftTSuFyx1bKFyXPy4KqY7tFbVb1QLNdwVC2KNnwzvzeFNZxF5mfDyCYVCkpKUeNTaKNSkA9qWyfrx",
  "key31": "4rTjKhQFizwoihu9eZi2E5BhVLQ1syZLwKQFEd47b5yAEBKRz8zWhAt4MQ1B9d72APZ8Qr39BKpWVnkj7WMHsEq9",
  "key32": "2ebPVcSUHEEsus1x1UrAisVnKCJngtziGnsFi4UTRPBFX9JJu8Sizxyz2FkDhGHbSuv4cKjy4w7DVEEisGb8HrRb",
  "key33": "5kFSxjRHURB4Hj223pcVvNjwjAExzP32BE8iaoyRrn4o79eJbCY6HvVJ92MZatmS9VrXT57JThRvSCkNcJP42Cfd",
  "key34": "4TTLgyPLQRhGvEhKxWk2AQENhxxdscHmdPjoVNtPv4nEN8skpQUUatGUrBTooiBDD2wkQgJhbB6mJdKn4sQrjgXk",
  "key35": "2HUycBrS8hWyzqLuxUcJA6rDsrpaLKPEYT1LX9LfmoYmotfgy4SQi3Ai5Dpkm5DsAcAKXuQWKAYVo7E16XYarf4w",
  "key36": "3DT7DtXg4c59yZCo3911tpCjiNvapYGh6m1VypCguC7oxnvT8akpNggMgQjALGNBqkhUn4Hcr3Yp5yg9f8mjjNyt",
  "key37": "4DPKaabS9r88iDiUDYGympbPkc62YnFHtEXBYqJQJKD8tXn3KCHsy9wncRYZE4x2GxWJZtrzD7BBH7KpBAv5LZuT",
  "key38": "2ThLE9DGZhyXdcUHT9SiPJPusJv1ChUuXiioVz4HcYJLcBHHfBgo9qjsAHxWgrEJGq6VugZzNFdRKxKrq4X8jcwe",
  "key39": "JTxXfrJ2n7jPai459nHnspcwfRG7YMaBjJJD4GZ1rXcZmreJq56hCxRKYr1LzcAHXG6hqpi75q9YnJYMTJXXMT6",
  "key40": "3TJgby8aiDGPEDd4q6bVkoRwjzCorjLxeETJdZtQfWHzQjBAwYcDXe1frxDBXkdXb2VH9Ribn4sVgdY7dmiJDC8e",
  "key41": "4r4MymucBWnNSAEVnuR12FT3pt3TP7sKb7r8gJbYNPq3tPCEPe1hWmRe3CqooyJJQ1jPLGgQwevRngHLKQRfpPaw",
  "key42": "3XHHPivbS9KmcLPNmou1SR69cbRVqbLKK8CXRokSmXJiYotQv5pBrakrx5HaWrn51KpoHvFteVpmAtcGpmt6jVzt",
  "key43": "3sq69TKdznboVcWsqU8QNUDYkQZ8baztKUV6C7Ks4pRqJiRm197uqa3ZuBNPboqoKZZxVYUNqiAAmPXVy6JBvVzz",
  "key44": "24L3gMCGr3MLHQucEzpQu1QA7fZNSxRSbDmSQ1ZEJfwqKJ8hR99EDNkBN8ZDyXF3atoxQ2iCjUtaLsvuqRhNbyoe"
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
