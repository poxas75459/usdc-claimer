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
    "3HPH8qCQZf1AbEgK9LYP5zUBeZAwhWBehEmHyJLGiAanJ5RKojakE8c55ZrYcFtFGymfYjyLaS6BUQygAeGRZ1x6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37AgJk8a28ziWRxqQmvHrVqeK48cLgDfFrFwtyZZaHWNJaNEM5YbDGmtdEPCDS7E5HoHGWuLVkJo7mNEqNr88W4Y",
  "key1": "3JN26vEZAGgN585xvvh5c6phvm3qTdUHegRxE9jpvejA1m8ASPSpvmJ4WvSkgMMLFJEhDhDvUxaq6h47j3BWVT68",
  "key2": "2SQZspFAdVovuepYs1TJA51PymvW5yqPUwVRomPkmL9iRsaoxFNzi9dktBor8pvm7EM9ikV9BFut2rTDdGCCxaSU",
  "key3": "4XnfcnGVs5cSUHZ2dE1gbnJneAvGpfoLqutvzFNaPYbaiMy6iTZ2srfeJRRXGJiMFrmjqFds55ht4UF1mNUxfDeK",
  "key4": "XasN74i2FQymJVzSfQXcp8WjX51gorr7bBZRrEF3ykWe8Tz562EkvyreNHFFfG13Z4cCozane4tEDLryEaG7D2w",
  "key5": "5jyqELFBJrunqkEQk59RR49vmjsBdK4ZqBfb4hz2ZXruSF2fqiZk74PxTFizk9qDqotsKGp4gy2NiipUB6ojEj2A",
  "key6": "UDGDXZvA9L3Y3ikaDJdS19vqKRZ6nSkjUfzi2W5bQuW89GE555mu6gf9n15jn88Hu9XRdqGRDKggJU9uEigb8oo",
  "key7": "59kuVU7k2mogszYKF8N3r8seP4d7sjehj91AeM4tv4hFzQFyMUwR46vUrRbkG67sbMb3zs9twx9BetnRoyzntTbN",
  "key8": "4iGPn75TAqffjQVA32yRX9iX5MD19LrpGdV4veCVFpiYpJzqBrhzuosPvBLPdDrSndybFDJhNgFbVofiYUntqYUC",
  "key9": "4T97P4Fc4pxsM3Bnou3bgTTqz5daQfsE4NPriPoz46ZWMAzoR7xyMJ63WtFP9s4hsXXRAHaPJtzHy9SagLVDVh5D",
  "key10": "5hV9o5gkh2deHurKxhtLiLzHKdPKtvEdwkGXBJje9EuHHpt1fVXjYBVSWipTS2oEFiytpEFN9kAT8SfLDLj4m7XE",
  "key11": "5U1fUc3Tgmq67N4mtHAjUmwHY7FaUqpEb1uLFwBiwoWs4LCwirPxAb6UMhR22M1SU9N8gwTkKXiLRLxz1c4rqLVt",
  "key12": "3vLjMhbE3qWsnFq1Yz4FNtvwEY7ShQ791XSwcQDyvSuSgYQwE4YLCcPLqkXUrdVDAAbKejMhokVER2heSpKbCbsm",
  "key13": "FYtfxHa6HsmNnx7P8CnN9yAmDeZdHo9meXXe96nNfTdFRhFcaWS6xqRyNgLvHqmm8Q2Q9xY7GW3nbShteiNVbai",
  "key14": "26y2AoV1CYrZsDcx4NrunhFoi9odWhr7V153wZGfFL4GBma2SYqHDozu43ky2z7yKKsTdFugkJWSjQPgW2tvx45g",
  "key15": "33mERYCbss9QPnAqrcwMS89GFLLxNLEW9ec6kHuAL3p8W6s9VrNxH9LDTY4oQTzyveGwSKntVjePxyPvqtGhDR2k",
  "key16": "VAVFPqG36iJ2JGQZoTKDdWRoQeUTT9AmkYtcx98JrL1FXijhvLwBWGhC6zdC2APgAWEiFBpbwz5LTKVrySc5jGr",
  "key17": "5tT8P9nYYVwR64fFxn69ATHvLsk5gApymdJRpiTkP6LMqP3wWUKLnYkrDRGbWvuTKJyGmv52vqBumMEzqrCLGaVP",
  "key18": "vw4MYxg2oj5iDw32o14GESn3VtS6TCMU9M1zCCW4yXyypR9gyvaBhZvkEswePCPFhzBWaWaMEqQR1btH7i37Bj1",
  "key19": "63GnDWFzDoZUyu8vFVruR2F4uYo7qabcgFYri9XWA5oJ3cDeYtCaNGdY7ctHTq6W4jhNtMCLeXCjAbdp5VRERvWn",
  "key20": "9wo5QHGvZ8TZ8h8wXpGdf9V5j4ScD3CsfzUqz31TfeHkZ8vGofABFo93wEBnhtp7xjDuX7avXU3EjgRpHK5xNnx",
  "key21": "3u6CtxNypD4St3sAHvNhHjjWveE889vwATPMSEqjywRrmDhup9VrHUdXsKULppAVTFCXsnzfUBBiz2oTtJ1ZqLfz",
  "key22": "27Gqb7CTTKUurKg4nM7UvJPmWkUZwQC4hDoYZihi2dHUe4TyEXcSv7UUshCyjybbsbQWjeovAK3cP9DdFV7qjKwC",
  "key23": "4raSxFknfKQeQ28Eb9ZpCvRVK3oJTxGP9V4uAkYZSSyCM5PYYaECyip6G7B3rBJrZoPgBD6NBy9G2ZmoxnNDQC2m",
  "key24": "3rQk3GzPbv9mJywPK4RyNYfpM5LzunLv8FVfpBJw3eEh15ffjfj1C9LRGhWQhAvvrxAXCZcDygYraX8raaJfJJpt",
  "key25": "5t1FDWffwZLM8dYkEcLx1ASYUeNNpw2UuMjEA4DQYSDTfmtWYGqJr7XvqpK7qbEocpVYutqUfAyvQmK5Hmyyoira",
  "key26": "UzqVucd3WZfL1ErQWKu8Hfc4CE2RjNzCvNMneUKXcMxR1gb5fEyWU7R7Bj1ri4uawxJmA9vuzhpUDQAwbGj59Cv",
  "key27": "5GvVnXgCQu2GPBpBzTJoGVii8gZ7GJfXN4Z1EadRaBjd2CYwDU6HRHG5qZykwbASEVyZhLVZH5Sr5A4oqetFJpMH",
  "key28": "42oqwt7LuGt1hxbmX4BvNZqq8EnoZTVBg1GjW2Tf9UhUMbmVWjvMSSKyhb7XY53RA2ypQkDQWgn3bZ1Sgj7FwDjC",
  "key29": "5abCXnpvGxUSJBkympLcK2c2CXiJrEkg4spfh2iyj5o8GBWqpVBMWZpxynFPKPwxJ9d5GMySmwN8JW2z85wbvzmA",
  "key30": "42MxXZPXCXVcHBs3q86pWeb7fNNSZkoemcTd1myREsshTZtRt46vM5NGKVSSfTN4Noo2H3KeAc55gCi77wzR6gKc",
  "key31": "5DMVqMnW24MhjH4eUikoUc7vKwPVuNXxXoPnVhgQ5TRQrwWF64Wz9uHhyCB8FzQ6WygpAeTUcTwqu8d23kmUmZv9",
  "key32": "5SufqWGUrgxB8zRy3L3u3JftCgJppu6agQAA668tZ9HNJxqLFVcUBu3RokXmrb2EJJPGcXDpNTzEXWDGqfx1rq9a",
  "key33": "5degf66G5diM2azruQa3FRKBC1VPC2pYzoKPEXtNbnsJZWfSyivB7o1f7hCyVhJY6RddPGNvm4kxBrM7JtyH4e1D",
  "key34": "2aDxT4QNe9XVGJqb3qjqNU3r7P5d7G1K2zJVEDhbqkwAvzZ8JfL9ytBX3jEjjRyXXF9Be24mJkup5j88HE3zZdtf",
  "key35": "3BUsW45LxuhCCXocqzam4EYo8dCPdoNfESLoD2nfnzgEwELctbH9NJKsXrHwVsRfP9xaDKKqudbdZcXLhAVgG8ha",
  "key36": "4zq33UsHXPM3xwGSadLkjYMkBEqL4uGyVhoqwMx1QsM31iH5q4KCeNxSvadmHv4C8xmBsmwLekUeDCYnwMQt52Xt",
  "key37": "2vLqqVsYRJHKAjkGqx11Hz2mc4zCQQub633CVmeVrx8xJu7qd5Pyrvz9eN2uDB4t4gLpY3NBRhMF2aK7aZZWfNA1"
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
