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
    "3HEsMGXzMiayXZGYUEduk6TTKsv7dHCH23SHKUSzGWNL5H9sdTgaNpghqtQCR6wWSpZmY7opnKZVAZdu5vXfhhqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52YBZhgQc7eeRQM7kmFpP516Z7BhGEC5gPSmFK3HdwucYaaJpPiL5s1haG8xgUZxqy4wz9Wg2bE7ktN2aT5kCfAV",
  "key1": "2xBB7C32c2RB7SqRRNQQDepZq74GBny8bmtqAC95ZPD6kEF7niceB25aADeUZgWhc6kuTgurcH4z44g48g42LQ4C",
  "key2": "38GFFEiiyirD5QnnUoBKJ7eyrYShbzXznPZmTVYY6JNYGY7maW4cuYJQMEXSwVDeVpCE8DZy6JFB4CqU1LZeqEKP",
  "key3": "qANujBQMMkNNnZb1hodp1Vwb17PsR1cERfmKh1uoX7cLxajaqkdRnJ6HmSR43DD2vTKnZihLeJFdJUHxw6R34yc",
  "key4": "35zwToHSbRJ6WYiMegVspCYhtdMZwUfYenwHhHJyq928svA9gChtQvqGxcsFLbaRWh1jWwrK76Uy51AAYZv87fdo",
  "key5": "WnWqyDXn4YA9Rpav5iZqmpuQpVAbdZNBqQSoYRmrE1wHjxvGBemvpZtx6J4GxxBmZpiDwKLwBLRAP5yMHFy8C9R",
  "key6": "3zhdmwdidnEJdFSuEWHUoePGPi45RfRvfbRMqHiUZtXtqLJXdm64EyHP2CbUMr6KybebyoAemWsyKoYfECvEXQwX",
  "key7": "3jmMTVTqqFcYhwDcBTVwK755YLcmEAy7QbCCfv7o7x6ngPvcFHcJ3ESvE5FpS5ZdYgtbss1gfBC64EMJqmbgcbhd",
  "key8": "64jBBoLwMDWbJDwGYby8UN2qCsWApWHcdAWGi293toPHvtW8vme4XniUeyQ3VUUELqiiwmmZPdvK5BGndFtpwxpo",
  "key9": "52Bbfu6rNVvgpKHqGpGiH682mxdaZstpLwKPJ2bZiMxuUBLoQwP1nYVW26ksjgon3g99MaGMgoKBMKFcsA4p1PRW",
  "key10": "Vvpwyw1GBcAUDdZhkjDAyWoBf62P36NwQbusT8yvEWYyUgNfxo6JR8uY6j1fwHRm3h3oXFFuAzpkNzTTp6MCLEW",
  "key11": "4dthYmgd3yW3EVWcAXey7ncKJxaAKiG2oyBv9WrfqRajMkpEmRPGfZsiLGvw9BGdjQiqcHVVAXtuwrgNrwNraqKE",
  "key12": "63AqYSAHmNq6dHVrGUMjtzSMYjPbcv7sY9kkZP7mydkFzhrpsTyZqty9CaDfmxGhGSVYizAAAQcnVE8HQZPR2XHK",
  "key13": "2wkBmJ3XDE4aHFtcFiNWwHs9S32hUwd84aHMrGdzPyJskPWkwW8nkYnUM5MLxSpKGrLX3kyUiGvwMPDJMkuqSVM5",
  "key14": "67c9ibonUnqSYk5C3fCKdDQ3KL5Dmm9aznNZGKGWCyNHVCg9VJfBW8sYFqz8CHyBJHvUFPTarq835grAfhP9PmTx",
  "key15": "23wnbDa2quektzVgtTRx1Dznx8akH1GGFdUpWWbq2cUqfZuuKWk9twvnzymuD6bBwdxR9TcteDPU2RrmBWcRrV3G",
  "key16": "49LYh2eAdrmFRitdbSMwQeiPs79uaptLxhnJHaQXtZRLUU6gsvVvSMyWkmEHw58uuq2zMrd7KZzFDUTSQ5nEUvb9",
  "key17": "zz4UodKVJ27u7mm6tfWXkK8YksoWhFBAkbWYYqQ3SfotCXR8LuWQb6Hx4Pak7iUFb7AwNoWHA9Hh25KJk3kESLC",
  "key18": "5AUjoKkrJpDjpPBnCfbqfQNUarbYAwm3Zf1X1wE9T3smstBCnWj9gGXeX5ixQo2jFvCJSUEKYSj7g8fWADhpquUd",
  "key19": "4eWhYy5JbB884HB7oQQq8RbgfER5R3wRBm2AT6Lbb7KGUKXKYBpoGvzUim6jKBUz7mMuYJAcdc2GKZrN8iHeDkbR",
  "key20": "e3cy4SQ7JaEwunnfbdVSUsaZanfJ4yaALcJMDGyYdjz3gJNWUVPPhRB3xcMZnWFTXM3ee7pp524dW1dnLBGJZaL",
  "key21": "4dYsoHi9QqwrE7WEhjnfN2uEVXZEhPTRwEjwiAPggBNkktbBx7RfpRUiPcPYjwWtGh3RN3NHmcb4cCBBgt4nM6i5",
  "key22": "5cvuyfhTLrbqHLKBr8aNrV8uTcB3egmZgBLdfqjF7i55o4ggXqXjV5hMjeCtwSDt56igk49QK4oBZvoFuDW3bGtf",
  "key23": "4U2AWxMg8f4irhoviSFZ3PeWM9N552LvfHCoqwuVHXux4M7QE1RUi7FYcU6ayvsG7JNqoZ4zhx8HSbifmbiAt5uq",
  "key24": "4QwoGwDZzbr4VbcskqcvEmSSFBn6yJS1B3aq7pjKxaLhd7csdBFjy1TJB2GBfannpf9Au93ExWV8Ltr4EnKBCQsA",
  "key25": "5h4ZCGRUAMHiKvyWG68XrYjeqLCRMUqAdQzGvt1aeuPk6pLiEHFios2pEPFs2fbTisj1ts2T19ybDQchfnhy1Djg",
  "key26": "3krb73majattrRRUZmsb5vkitU4UzAkVzwfM3kJkavt9b7c2XraVDbpSy5aZsYWDsP8BvmQstNegpzSjHezZ2eMm",
  "key27": "2K8Fc3waZDhpj7k4WEwo6HaYJmAL83xAexQeKKJvLk6MkXGB2Y8mq1sdwxPjQVNTtXwK4gtRtyQrE7gspG6XaJhC"
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
