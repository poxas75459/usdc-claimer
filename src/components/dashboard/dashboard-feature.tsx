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
    "3GokJbqNpAagfN2Esbrg38juC4AFSPHxWcnqjjKaTgmuuNvMZwzJdqRUwkPqdCdZBC4kcEveHJAQqCjbk8sC1oZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mkvRJzvisxWqiQWcsfHzLr1ZYgg8wifA8epT1vWs5tK99M3jpoc6mQ3ni4igJPptKzLwztvLrGKYZgbx2ENicmj",
  "key1": "22vVqQMEhngopuXWSSQSxP5ywEwgF9WF2RwhMhLNxTFgPyAP9q3KqemyHDrvy9U8gifeAbTuPjx6U7Cc1qiiNSkC",
  "key2": "anFJWqGzVcApTLBKMqp2kW9TEijQ6wifWQaLXS2ruVx4C5SwL5GT7iHMDzPREDNLFJerUVPDYbVn5J2bSuotu19",
  "key3": "5fmv3mDbj8nUW4xXPTSR3vmGh8HyxSNj1hRbLTzvqra6DMYE6sCxo2qYgeSArFU2x7EH2kCySRmnCuNxBhz8pHDQ",
  "key4": "mCLMKFXrU3vJQeeUAYMiByBgKWs1nZnP6fLYGZLY3zhWmW7RCyPzjJEwXVTzQEF8xXAhX1Cko4VGUy5k8Gdz6xo",
  "key5": "xMSgpnyEuRf44QAafgdUremmftWxga15DbLFGsZJ3yxK4YeH3nFi1oZL4i8ieg99v4R53EPK3CAuaZfHUKT2prV",
  "key6": "2YRdKWmvCt4DLLYzPpxTDpNYbs31mFwtvzcFL8hvPZ42NeRLDMa5tW3aaTgNRj4Feda37H6SuHPnJehwQ2e6AccT",
  "key7": "frWnQvhUxVCw3xRXvMcYykAgLr6Bvixa9w7utWLorA4hSQ2xsTqTizAZqan2hHw7Js5MpjBd5137bHCgBgXEpvb",
  "key8": "5Sf6tB9HZTWLkRd2Hjh44Px8k69W8YhFkMbsdK5GoAiba46b5XJwNsLkbSxVMpQmY8DDGPUwkB5zDTok4pVuWDFs",
  "key9": "5t2DLWJqPSu3FWjPhk3FPoVeztmnMCgLkfpU9W2YhWTqfKoAcpw1TyrJBQSDQgfJk8DGZ4LX8usgjUpP45ojPAtw",
  "key10": "8Ky43aDY2kRocpjX5NJnZq7xrdpjiDALhUQtiq7Q9Lg74hTZFHNj9nF8NzDdrTE3cn2ffWx3b4m7nvajhX3tM8M",
  "key11": "4PgkkS22VySKchQxxPFGESFUd3DAvaBa4ohAXMB6yw2Z7MacUX5CL2V1uHvPuNFobACV1N7A4YANZnNgiRK5Lr9E",
  "key12": "PfZWpzsb6CTAWgcdDWw7n3B6QehTNVeADdjdL6u69vUn3r7rM1fbH8N7ZsFVQetX7VerKHMkEpcLNzWxEhnxc2o",
  "key13": "2CXeJAqPNpF58EuzcvtA3iQXfBX82cMBdQmQJvaAoS1TfnXwDNd451KvAqTantKatZ8u44oTc77VngK3bLs388T3",
  "key14": "5rYyutoSbbcf8R8hD7bAAM12aVycvBQ4bRa1EDytAKWKuC8zpwZ1KcYP1zSWug9WVEqorLwc73i5mg7JoxyeBPvm",
  "key15": "3mQxRSMrbTmMsNQs3rTUZnY4so41auFZNuVpL9ANaWdSeG52Vgnuq4ztjrUAz7wBtrT6tBH3Dd92rFhzgcV9cx5o",
  "key16": "5a2ciVgYSUA674N3AhywyP9QjpnCb6mdWntri9vKQMo5A4GhXaJU6bTt46WhZqF4R1oeeFMAoquHy1AZY9yDScSL",
  "key17": "Qcy5zTE7h9tXAEv7RnsCZ6RAhX6APzVtUh7sGU2P9bqK44CsnzM8Cbbo4UUnwpPvUNQy2X2raXErcLj4YvrJrWm",
  "key18": "CZzpJ3W2WMRSnwapFXboyMFcfkQddQ7K5JZJVPp51MqY4eqfn7Z9CvcU4osQEFudP2ztt4BrHvG5h3WjX3MCejH",
  "key19": "3w1Kk9tV7E2rR5HqpPbPYo9YzjtBzCRhuqiQebMc8fpjdqrMPYMRo6nEDngQunXEhFRfFukdHii4tFjkqzBdEpJZ",
  "key20": "4tAXBZzd4dScHqjT7jopXV452Fmyzt6Bw1JLmCBqaaAmu48vpDQd8BSgaYxyJkbjvnzyuGZWZqHZvMKmgqoQzprT",
  "key21": "49YjqGtKNQeSHKcJH8vLm6eLPGT7eukkxgJ4sBi7axUGQsa71CSWxkAC2biKyTH3aifTgqMyingMwXs3zT31rHsm",
  "key22": "kYrtK7QnUGFPAeuHTthQMge7bgpscwEF4TdAEvRQzeUVCj4y2hWpVSmaPrDEc5AEHNifF87B4kB7tAsKprqg825",
  "key23": "5saY5fvnbxop4rdfFcgbNpju2marH5dYQAPzoud1nYvWVJumXwdD78pGix7DtM6g17wL6yWe31vBVo5tVeU6oK2W",
  "key24": "24kgjUcH2wWYPDAxUMys5oNYuA7yV8Cx1cTa6fioGsnareQjntUKaWNpdfD562DWjcbokz3ggCt2M3n9qceTUsNJ",
  "key25": "23DHY3RsMKLCwzmgoe5vDPXUMoNMQKAbbnd9p6WU7cyrPPYRJS4NFzRX7GvpPREHCAmJdHqUG77rjQcDZ7MuRa9P",
  "key26": "fPTQGs3wzmwzpfcoB81zcipPpVQxfUjSTH6rKyCvzw3Uah8rjz1NmSpeCyB7o4wE4atup9gBh99qbKJFruVzjyi",
  "key27": "43EKQAWc1UWBErMnxpiXpbbWFxWMPW1KwqntxWtrrHuP8magsoP8EQpmixQpNKz2bgjugCcuPYnbZW7LjJ6BYYNt",
  "key28": "1EUtVQL3D3vWtSViJtCqaQaiUjW3fB9mcNXSHTfHU57961cwUTrBF1hHEHjA9hfb8n2AXKCtYdM6fqJu17o8hrj"
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
