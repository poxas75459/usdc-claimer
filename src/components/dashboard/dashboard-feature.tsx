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
    "2abLtTncqNdNKkfoQEao3tB7EhDCJuTcsJijQWHJh9dRtmGyLKDUcaAn53tp9c4zkLr4ccY32pjaLinePAeEk1ux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52n1SXdncdknHPx9Y2Y8RJXHv5ivcmFjmm7Jz265RW9kTxC46589ebE92wHYGBv2rLVhAyW5gVAbDD9SPK6QymJ5",
  "key1": "5GJPGtWwwQfR2YY1gKtxqoB3GsaEth2KfWTcr4vTNad4CTt6tiTrUTm4negGjvoPRa2YsPhUqg6yn1BzEHEoFYyf",
  "key2": "5Dx4wybh5jWog5ASH66YJxpBfbMoPT9mZtkfxRRxEKaChmgC7nidwAYygFinRYVG6BdihvaJJw1yBk7Wd6t3LSMx",
  "key3": "3KW4NARnum8tBAtwDwFx91Mhh3G7g3219SiY2wfK9BZMbTiKyYRg1KMxoK6Y2NpkEKsrDMVwWi78o6TGRqUfZaWv",
  "key4": "2pmWajQb51Whhcmz98BSJUKTBeYaWf5xwHvVwBNkNDyAPq9LTZSK4zEfFjyaupdBNx8dVdYy9m8hZ9vS6NjxMX9a",
  "key5": "35TVjHbzuRyGAMfwp1cDTksMNu8hkVJKzF2fCSxWvb8HNZqmQq5Dm4qrKFvaYmwQGiKQ6dfoz1wNyPyBbXN4v1GS",
  "key6": "5Cpi9sW76LQa77B2ikZs4gho5xHsDLNu745E25JL1okq2oxUHD7y8tJ8M9MfqbkQVtSMXb6A3QNJheRh8DFXrA1y",
  "key7": "5RmrN3zL4tJfb7PhQxupcwbo55QdyxusxiX9Q2EXPNFV2oBB9Lw8b515mJ7hyDchB4D1jt68QesoXFHLtnuMxZJL",
  "key8": "4DqU4TRMiPkfZGYKANZtgrs68PMpr37DGpTqKe4azxMqEbnKaqGU1EWDrUFrhLDJFZMMpiptW43HEapgjUkLruy",
  "key9": "3VDpYSgHUJxRXAXqnaHCFVxA6rLu2D9TLT82q9Bhzx2FihT6oJqHKo23QssbxpwYdnuCipeHAGfVkrPj6fDHzTfQ",
  "key10": "3RguvABkbnF3MKW8ybTKcGgRRFU1DEo8gEpj9VjhJ7Th841BcFsny21UkSazM2tjpcRKZBg4iLSaurUenuriFqFR",
  "key11": "2KyLWq5pCRNP167Q1VfYNCbnsxMLFTrmLT7CEkn8KKWc981VCzdLAsVkJ785dGwxim6xPyutGmyVC81fw2AJX1Nr",
  "key12": "yt34C31Er3menmMqt1fMTZ7rEdK6v616PkbAJYPPtEZccoWzXgFF2huwmzBKuQA6bUbSPH5XWyRSpyimSScCK7h",
  "key13": "3wtoNj8RTxbqnwZ1MJHUHvsGRhAzdsQS74uHLP9EjPCs8GYpdcaqE4DbyjbKFnWHFZnraBd1zFKZPXdAxKtU7xm9",
  "key14": "27wSxYtyC5nr2fJmnBnv9XGib32wZR2G9iVHVMmZGRhy3sjrxiDVwqzuek6arV7UARiqjS2YVht7gM2d83UyhSdY",
  "key15": "nCeYEAJMv4ULuDUEK5EZjLCKTFvsSx15tmQ34tRf1XuyixTwrgAxxnzTxXyTd2bpJ286uByVY6HFzjHa8AAizou",
  "key16": "5uGy2jnH9QM4j5o4xskzzAsuy8u6QERYPJU9F9JTtqjjq2GPWbjT1dgmFWau8YGc6NtBbSTs5yzqTARzfHBYNgzx",
  "key17": "ikXn2pTPdBGG6SbiM61Ru4MccGuV5FxLDgaHmb9aRCpUc2XJcdoxuxKAJ6vaPnP64CyaDPQfshaHQujG3iTazoW",
  "key18": "49H8wW8gmStMxJ3cT6h3RZ6dTQVUuuYCmR3xkXiWYk8dnGAPnYJwvZrvHDgmG7xJsSWGC2X5b5uGAmbavFDdEsty",
  "key19": "3erdeGxfeBPwsw9pZzr7kYi4dNcMFvi2LaCyqp4CFmQpWvTJGGmfZrK3NG9RqKtc2vLXvUDAL95dazwy4Nzkhkjz",
  "key20": "2Draf3v24ubBfTt7bLnCfGqrCq7WJoELFeUKxrb8GWoAcxm3ADQhmbo7Yqoqv2n8R9VgQB39SapcWHAHFVscPxcQ",
  "key21": "2RwWrFkoby8g3KEr1pKkhNfB1RUjkPNJiQ7XUvpZzw4FAhPGY3KkymF5zYhswzDdrxkXQnY24MNPXG9VUxXr7Rys",
  "key22": "2J7NRnwetFpqmPdfBVUc3d31FE8J4gFZmyRkY1BtDnwKwqkHJgixqrkC6dvotjsya7TXnvZXyTdzH8Bnr7muMgeJ",
  "key23": "5VqP5gKQGH3oeFX5vWinEu5L8uSMbtbmMvxEVpBRZ9yHq9GjtXF93VwiDGsx7jiutQLMDdZryXjBKm7vjw4moUrv",
  "key24": "4LkVLXai3aLz99xy6fmpw4RjvbB6o4i1wKhEEjZRTeY1qHjBzcrgArfaNrw9tz9x22ENM94YxCzmR76D8TBKuorx",
  "key25": "MVWYizzoMMR2mWvsQmiqeumQmC8DjTLsL2eXoGp7jX3bahrkB9biFcyiHF2tcg56yf8ywodSrdLvHzx9s94amSN",
  "key26": "5zp83PwJZgeAzAYCh8HDAh1FapXmFn2rnYcL77VEfH1mrWGtW6YgoT9EpY8csExGSYfURX9qtPqG8Quch1R4Sndk",
  "key27": "4sGBG6AVgiocDVDWFazCkEGbavKC6jreBmpqpLEiT3nx3vzGDL5GxJKvAauqRWF43eRNuJiHD8mBuzhzq1a3ut3Q",
  "key28": "4ViLmxRDkjopvhGTKCwCQuq5y2gsT15RBEzoGgsAhSuo82BKYzDGqHAPiksYPrGXQ4AS7gHKs82qRNnrGS6kWVoK",
  "key29": "5A9nA5pD6PNfzBxoqxTM9wfUCgDypT7HVB9qS9r32Nw7ZhQrYr8YcyMCBeWCj1cGQ2Nas2gt7Ed75NpLhxiXenTN",
  "key30": "2S33PBDLvkC52rN3SJvNNZaEWsSu4bxkpHeejDpyds8tM7H1D3qUzS41BPHUVQKne6stq2FA3cfiN7dPSjvbswTZ",
  "key31": "5YwA7BrLA8gmE1BgmU63vZc84e63XaCKkXsffWVA3DKMat8v5RNimVHSEeEaqbyMARsiX3PZG4LoBmUnfaqkZjbR",
  "key32": "2u5bhYav44m46hLWkoBakWVqzd2k5SJyn5gVieu6ZN7AmtfoeJCpj7YDhFMAAUYWoN3XdiYnLwp7RvxEHhW4Ssp6",
  "key33": "2qYKKDtbRp1vvMKi2Uc4CU3pbsoaT2HN6oMAT9WQHCBZ9xss1j2MSo59JcdyD8bbyDNdkWCohWTLLi1wXYX5oFNV",
  "key34": "4CM8Wqa3182NbrHjekXz8T2prZQsEX8oUvoC5YUoN9AqJictTHS2uQjxkYvKcgMXR9WeMG7AXQw9883kj17B3hKa",
  "key35": "3kGGZRvArZaiags6QRWthhk9F2ZG2kCB8h7zn9mykUs4DqurCmZnCZUnxYuZEYrbYyQRywLVyhvtD8kjkTEaG9PH",
  "key36": "35S7wZg22guMVTyiYrMZAJh7sArVnPwySmPwzTc7WU34b5cWkAFEFbivZPbEdFBW1JRS5BvWRQJmGfNeyqrRpabH",
  "key37": "46YwtJXqthBiFYtQTjpwHH3YxjMnZSPpa6WdptawKCyojHwQywYwfhdSz554QFk4EgMHL8TgM3QUNc1ejMuLY5CS",
  "key38": "jNECvhBKrqC7Eo5gy2U2ZbJQ55qt25tQqmzMq3Af4SS21op3hu39AFUJPKUBjzCE4U41rbj9W4GXmyE52H8okQo",
  "key39": "3Lk6Sei4VUoEc8nQJVStknT7DF6UkC52xd5oDcUq91nBHfXi7CHcWDVG5vgrAfa1uTuMjejAEddLkyHuFgUyzV8z"
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
