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
    "f1eR4LT1iApy1GXkbMRWW6XLyUMs2hcNpYh7dyNNirP5vaf1aC9NDHTrjef262cbCB6zk9qoa1LqnoYdHsVdLjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yRjrZCzwrujyUBRpoGHEQeDfF8YMJpozA9WN63zMYpdWB5DttbYVS6YozqNmF3SdLEBWkrZbLV8yr3qCyuRHhu1",
  "key1": "5Pk928xn4BbmFTgwjCNUsovLY9N2cxFwybaZadRCfBLg1Se4uGijp2yCHjW3BfD44dFJvY7FYbWEizULawv1K3zg",
  "key2": "31FUUbmvrP9hJusDz1NaMPJkCBtFgqA9iMATiPzK2g3QBmSLCTnk4dUxY6j4s9b7iBd1F3YhA4BxiKAUdYKDXsdp",
  "key3": "4hJXKJ5s5VaFPn7Qa2NUZv6yokCYbgEWtrgns7jLuA9iHkK56SCvRztn1ATHenSijffH4HNgUF8YGo9riWCxNL6u",
  "key4": "4ezzY8YZsBQNPZ3GsyZpaJ2Do9LYgsLv84wyCGtx78Xz3WeWgbnDDJfQkwcTdySp8FRq5NqKJnp3pe71e7oeBxP5",
  "key5": "2dMQo9tQPvzDtZmomWy53XQx6sdueV117LejzKidw2bebG9ki1ACwvd1mcsiChMn4s6upCJwiN7e4LDcFiCAqe95",
  "key6": "2rP8RB3Ye6nSDZUzr6usrrm4bYK2J6L82kerzsYU9tqwtCyqLYQ1tXB7GnhLV8dYwjs7es9rnD9DjcxCxDEMxfxg",
  "key7": "2YcdHb1b5t88heJrkJpUvB7j2EC4rVZnEQq97eHsUdSBxt2xY9huBGeK5NsVqpxXtxQjEPegdukc7XSZpDPHQFZs",
  "key8": "zMtijVPhqn5EViXg5mPxk5jt3jqBS34Puxgd4M6dWf795LcrwHFUsvk69ZCAh8J35L28L64R1M2EPqw7LV9u1pC",
  "key9": "31XYpx6FGEez8untBm9x5STH1Z661LunBJjFKUE3fG4S2TGFY7yRikq6fZbJuEcLmjcXQTdV3quJisjBwbAGvKEW",
  "key10": "45kRunNuStkQuRbQBp9wfyWbJXJXG1U7UZDiovTwFJCR8YyDQ2CEX5VTpbGqHpU4c4PxnMQn1tGkpHXHaeeutxdm",
  "key11": "34gWrKGbUti2R1oY97QwW6WFiQTvNpt4NVgd5wxwsaxzuLsTMhJPHu4D4Ft2woXqSqJiVBhN4G6B1MQnZSFSbKhd",
  "key12": "CE6LqKUMJ9VkTjjVf8UBMBb6opSqPEBgmjWvwXmnBMJSwtaWcH9DjUvKr7rUgntnNNhcZnJRgGahRM6ckQYoWyx",
  "key13": "5nsC4WDahcBv3NJj64vcHcq6Zt3Ti1oBcnfqx4vg1q1Drw2714QXaW6oHZzY5QBVJzQZuc2Mecen9cQ4V7SHicX6",
  "key14": "4Z6b6YZrqbwcbVnG7nC2aH23J9J9xRFmqcEkJRv3zz8EXJdzeqPLyRfJL8Yqg8bULDVw8Anh8UkSBCEnDQZhwNFW",
  "key15": "3z9uVCgtw2AAq1WJdn9YCVDScg7GJ2z3bEvNw6opkagqCfJ4qbEJKb2kAStbkMYX4Emmnf94YMpt1VyE4QPjbRK4",
  "key16": "4tM184pyLRB7QkLv36Qzp56wJ85q5C8bNekkiHNPV47iyUaJWSieQB7q18zdFZptg7UWVqRwRThKjLnwkN196npf",
  "key17": "RGv91xeq7gh9okoEqbqYhLgSSvYuXchdVyzSb4LRM5kb9oFbTmSTKXbXGFs4YdKXq1XL5boNHNxeJxq9PTpd6wg",
  "key18": "2RcrEctpfNTiZZuNAWSqiTYQYU1HGo8NYsrKqVHxnNMg6DnrpLG6YEpM5HWs7cbikfoKWfDAtiWiQgzRh9zypqck",
  "key19": "wqjij5mDoYRfnJzoCDHwheq9cwmFGpceiqAsUxMQmWK9vDdvVeAsX2p6fKVJQdN6ACj1yuFPCzd13sKvMvQPvMW",
  "key20": "4cDXmwp9Mn2PygxqBmxUhUXtMZkeQJxuZhWk1R4RZGauKDnyqrtknb11uYEBwXhzx9ruTFsLC9bP23pQLEzqAvdx",
  "key21": "3jGQbEGLSB9jEREYvr1MSa3mDSyyvx1gpahJpKT21wJZxtHNCEWQFsMSZZb5nzRi53DCvG6iAXak3h5A7g164tSv",
  "key22": "2XN3xB5KnZaQ4ga5AoU9nBB3iuQ9A1M95CpQmmAEgRem2XLzxWQXqCcF1sTcQ56Cn7aaRgfbtavf6U2LmhNnootB",
  "key23": "3GnD4mFcBdq8ZVfdfknsnfP2TKjGjoqsiuHLTcW5tbFhKb178R6NDgBNiHz2uenYkS8xXQghKwrd2xXmuPYZodUQ",
  "key24": "3zGoAToXLS2fu3N2vnBVnyetH9kfYiZerAzUsrDUTVhawhSnF8RWPha9TmzbbunUgvX5Kj2n6ktaZU3bzUsfoZ54",
  "key25": "2abGEtGYuvnkNrpfyHW55uDx5j1jn4P4kKJCoLK6F1cUdPrHkrBWfpSgndwFDKeNBou5657tdDmZ3gQDxNK4Rt8R",
  "key26": "4DMDHQMecY49fAUqHSZwGZgQ6YDjXsqKYC9x3UFBNukayiodjnNVktgdhx5HLtsCYycc9XaVdZfUcT47WdCi6bSP",
  "key27": "3mkzAU7hxifXfF1Fx1jxPhDnXJcBrUMkQ6eCexGwDsSd12LCL6XCCq2QPXcT6HyjRz8k2bAHF7QGn57nwRFyaTKi",
  "key28": "3UL8f1tNDwCXjP2zNNNSSqohj4e97uRCSfp92EcytstzHE1qXwcRkNgvdjNNxUkjCk2GNCQSBA71HYdTm4VTGQG6",
  "key29": "ypvf8od1e922eKGBt6GKsH2tFiz6PuNQkqni8u6JAPC7oNTTNHAhuEdnEQ39v6LVqe6VZedUBU9HwrvV9niVsbQ",
  "key30": "4VfcuF7BpbYuxTVpHMiRtYwyVXhNum3hVJouRuJtevGXtkdjigu5wKefxFd1gvLPi9W5ThwXkJ5hktM9NwfKWoXQ",
  "key31": "4isVpRB9wxJ98k83Vf8mErXLhJC3h33o2qyHACCUPQ6f2AKDNjKR1NSs1YAXhNLN8nafWJKgmGNrTGTkpYYN3TpG",
  "key32": "2JfKBV44pnTKGH5GkhSTvFJKh8iiVSZ6iCtFd2H4FEsZUNU2FRSkK5WLS8hPbfwcFZrR3Duaf5mGDsVhmDpXPLKG",
  "key33": "W7fV2pfuzhAS47HtCtvckY7nUKbphACGTFYfJvfmhQbUv4AxrkEXf8nXTXa6xfK7QRVVbpAAWSMXtQfq7JsHqVT",
  "key34": "4qpXG2Qx7kwdQ6D2MxfwPQ8xKTJLoxJ2jJmoQwbCz32wZ2kcTZBAoC9mBSvks7g5u1FJERFjgHMJo5w8xUs5Wv7B",
  "key35": "5QD3MSgVyjG1XZAyBs7kZyXZ17yWx7J4QGW2Xnenc3rNDEDAUHNN2vE12RQPspc1BnVCnm752vdS69sENWcLeuxB",
  "key36": "22oAXem8dM1NuYEjy7j7WKxxWYjb9EjTW46PCvzUHmkCq1BjK7PThjDBmxE8xfYZBfSg7CWZQLi5s5H9teeRhryg",
  "key37": "29edb9hGdqTwQxw8ZaFNiLsrVxUvu8qUU7yMhNV7HnkAz9FBCoXRSxRC5EsxZAoAtoSwV9x7snpJStvEMmGMpmxk",
  "key38": "ATTDTzRv2nPhZAzBcnGpsvXnKHDgkzzy2TeLMwUNyzVHD9NeqReZ8SLASkW75rdKRka3Yqt9s1jsBRW9CRiqJ7d",
  "key39": "23ZAbYp8v26kVjdg7xi9Xtpr6JaGHRp26niG2ojFaHvFX6jLfXYkc8LzV5jnoqNJ81omvam1WcEwZG5u1be3piqt"
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
