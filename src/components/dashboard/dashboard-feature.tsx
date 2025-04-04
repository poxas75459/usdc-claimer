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
    "35tR3Vqpzbg8xPEpZzYeaWmiK7ayx8dTEFwsDG5UJDS8WdBodVVxQfQLVzKd1miRTbqUrzyeEr9tQ7MKseSvWznR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AJQod5LX8CYStP2HFw1GkymvipWA8K4SNANhifJ46FXZeTfVZC15siW2YMjHRf78mUEpvuazmWWhnPwkifPYV2c",
  "key1": "E74Wo2nF3i55jvFeJikidhKjcXFVKi7QJ2v7ThuNqeXXZu1MBr4tE6MMNf3MmDoE13YLd4EMEAqD7YNXaoDNzD6",
  "key2": "MwS5nAWoSeNSde5KsveEKWFUDrmeRchDygbhAAQGCgYh1UqyUkGmBTFG2HqhuEviPo51hdjepZsMVxHmBKEfKXj",
  "key3": "8Tii6caahimutEtsvNqF6taxHhcqPsFwEN8EKBL7nsUZjkQnA8dQ5YkPXtn4kxNVYwRwABxXHDgoyoDUziPpWRb",
  "key4": "3Ws98XPgkWMMTqaNq6e86H3G3SV2nohZtLsM8MUvn8JTv8sQ6ycxTggbmXQB5JEGifBNiTD9vZJCFjsLYGfEvxHc",
  "key5": "3tiGRAUy4zbtM6BYXkwKNY2aHSHapkErxC8X72HeufYn1QJ2bSfAKvASnGygueqWFfJM4BZSeW9zdJZ1uk6MXzgu",
  "key6": "3pJxwqtwrJZ27skQztJCZdHWcbPR7xX3vXJ18QFaqaP18CCN3oLaEn4QWJ7t5JE8ciSeCNTv8GX7BPwDYqA3d4RS",
  "key7": "5BDfWxK2p8vRF7x8v9Zyxc17o29gi8QHmRksgk449uNtfqoPfQ29aBFLQWtmGxdXBsX532AFX2PNDWfermit7aJY",
  "key8": "ivCpLJfSrRdprZCEJnHnnXUq3o6Je16Ag1cFxU1W87StcenaDQYuCCw6ocWqAmXm9oQXVGhuCKdM9tWq8gtwe3N",
  "key9": "5kXUj52CzHv2vmGARMicdfz2UgsNfFE1PEuVg9DgBHoETRaBb5oGNkyq8BWGmjT1M2sFU8nppf7onJfy8EgcCskK",
  "key10": "4JzS3Y8iCMyt38rjbs3GdobeTCSBN9ugWEVDiD8bB5SsgaPESRFE4oXPeDJVZew3kZ7vatUcTdEceLKemRH2ZKQX",
  "key11": "YYeFRugmPKZZShUQpHqK7iPP2W5Nzw3YHAgPQZptLe1sxZY8Gn1AWs4Q5yM6CMP8rTckckDFH5uyDeNFJeLkpZA",
  "key12": "2pTUZe3c5TdGDk77AFaQ72HTJ97mFc4UQJVYNSBvdULpkHX1bc1ZNtYph8CBqhjUVY9HyywVN7W1JtHoZXiLUt92",
  "key13": "4BZzAaVCMeYTXEx91Jmpwu1w1pT8jncCiEbM3XFrjSYpcgGBDBv4b7VXRXWKPAGuCP2TiAm8eDcBYsY5WdLm8Yco",
  "key14": "3eai5roqBtkDgXLLYYd95dxsNtf2u1mXNNi3r6b9FpCWXoYtXWDK7gi7py7xBR6XGCs8LB66pvnDj7RAER3bf5tm",
  "key15": "5m97VLpM2kdNK7ehSu5EtkfaXrV1JioWX36hZ6uaiv361PWiL897GwqYC7Tru2iGVJX7k56CBuuTjq6M6m7zsS5o",
  "key16": "2zFK8WqRZFLJRKQnFJfStJNPp9ELdbHdokueinbpcN1osWbTMqr5dQRFG5cALySs2BemVhzU6b6tDarYvnKLb5eD",
  "key17": "5K22aWtNVXHHXC5r3JfM3ey9H8ko4mQm1wgjE12iMAFkoUvsVmKrRZnKMhiaZW8M5HW1rwU6NbEb7i4y75wRWsuf",
  "key18": "2bbiUaMQG2VfmT5shVqsLoCzNyVFUAEnyxeoohmmrdCoMVogMyeNT4oS3CcMzvSYFbhV5RGNytxX4P7R5K6oHjAo",
  "key19": "4U3Ne4CgySFJTUHMru3GQzyxy2Qy2ckQRwWH9Vdr61WPfWneUTGFSrqwUx7dskAHGYkP21WrNow3bj8sGZxV2dCD",
  "key20": "3jz6eQMoFSF5UedKdzJ2GP8YkKPes8VwkeEDsF5nSKNPKBqHEvE8dDrTs4Gx2zj9oYGiu9p7h1BJpwcmRXXieC1Z",
  "key21": "2dmHLmDmUEGqhtUJL27DAU9MDy785dBA778ntww8FJFRfQpKSfapCeNvUkDF7Kxf1V26gh7Y7WkAZeZygqxgqjqK",
  "key22": "2xxB1VSamwwS7AGxZyTYvG7bPMtVJuQMBuWbwASHWNAi47ESFozQinc3DAfi8y4kKuh3Hmo8MCoycDziRP9oG8XD",
  "key23": "5WPLFkURoFBdT4yGgLbKJAmc5yhaJSHjjzHT4tBX4a6fqgA4BfZRiJwoHpjGphWq95LoJBZu2JaKowL3ceKKeTN5",
  "key24": "3eM9oiCaAMPhN4z5FVXqai7QtPEHudqFAQwaUyTsYh4m4exizAx3XppAC9LgpYkxwG8AFJq11m13r8PCQjVNN95u",
  "key25": "57BNaVRg6Bqn26cUrKPMdUQwbC88bU6hmBtJDyxUDCmEU8ArhkaWo8AxMToN4Ycn4fvMQzoDr5eGxTjBfr3sjykL",
  "key26": "dJyrefP7KY1GSLV2NmcSKZZwA9K4hWtbqj7VG49Y4XZ36MNges218Nn8YLNDGxBgrRS5ozYk5Evkqb7iEw92w4c",
  "key27": "67ncAkYkiWV7twavTah7j15hdiQBwBCDisbXJ2duKJrJTf4fjkA7GwLCbHewY5tV3WykabYGNytDp549uRm5MpPx",
  "key28": "58nnokvKimZfEzLVMmRTWb2Kpmpszod1rc1ECv3NeUXmFsMxuhK5DkgUk7RjRWxyZpHhjSbCo47b4ZFnQ1YDeNd6",
  "key29": "5JwXc4fP8VsVbmKcbkMatgJtDpgywdwFdHSXMGUjhKPahkbpwWFxDJxA1RC6SsvzhzLFE56gJ294gc1okbfVHpaP",
  "key30": "5EMKcjgwhpFnCEeD3v5V7XooN7rdWnEWGVYT7CzZse6fsK9qaKHTYMkqNAM7K3bRwfNS4hUC3dNQe9ryQdx4GEzA",
  "key31": "2NnfqzhoWkdHY1YKDFS2ZXdULUqeCiyNVBcx8W5v6tcjarghyPxXTmjdAiUA7mTbRnoQisYd2zwj6Sw2meJxEQw9"
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
