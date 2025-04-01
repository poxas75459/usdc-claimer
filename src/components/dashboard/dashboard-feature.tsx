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
    "3H9dd6yERKGoczohQ3LyHCrYJ6h3t4vPJ8qzY8MBpAHR5yFKHNTpvktcWbjfc8uHd2L1xqqxRcBVqs7XPPQ1Rjz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qhm53gjiHv3CKUf8kJvd5BsDihXLQbkMWYwy1K4ZTundMhfwaswX5rQzFu9eu7Y8YwadDGw8Rj8SfUaQ4jtCxaK",
  "key1": "toRnCrUwcQMn5Gn6zhzion9yzJ4CGrLJRiqHYKWwjivNVTAM3PbjC2btxAmVGqPLP5mLdX1RrVsqu92pgQLEhL2",
  "key2": "5otPRLsY3MC9Ccrtwftr6Aya5acQJTtP4uB6Gi23dehJV2Rwk31FZ5FEsjDiHVYnYsx17Jgw8vpoG47rcR2BpscU",
  "key3": "3nYzdvcgnm751kHxUDDsKWFobMA16CanY22i3Qa6mce8aQvS55Lm1pHRPzWHBREmSsiAAY4bxCJLQrruEFH5AC6N",
  "key4": "2wG1nP1gM8rnk6KPbpUpMmeHUCJnPJ7u1fni6KrEPJyRQhXEebG2pvyWpbfscqzwFbH3xFU5xvEPs8JY7cabccjH",
  "key5": "5gTTS6g4UBc2Hja8dCtmTxetrbzjFTRnU6P49mtfChdjsBGBxwCmY6vfCufhFMUo6mT12QpXSmAmP1LVs5XBHfLP",
  "key6": "5JbbAkv4Y3zAdoGimpikGRHo7pAothhT4K6vbbYCNoGwRU1z93oUCE6pXsZdjiUjPujmGTzuzSwij24dCuVoJa3E",
  "key7": "12SutoCfy8fXEicMrPp5rE4gJB9HCfCywvv8CGLgq1WZkHhCPZqNn6t9dXv3fbnG1NoxLWodNJjdz5Kua7Uv4ck",
  "key8": "5Ro5J3h3cJdyR7j1rUc4prMkbYGdNsPn4ygk2qj5tDxguDNywXF1ZB7SC9dcQ7zdMER48uyZAJ6kVc15kBfuyjpH",
  "key9": "5gfBpnzLHrYz7g1pktrueegnEXxdnQvi5n4X7tHmTF1ucipYXrWkA9WvEZH3WA99KP4kSwLQxCMVFzzsERdDTPkH",
  "key10": "XQ9czJDGWQ9onE5CRctrrjqQ2yg8Tgn266TDPNQPiPVQDRjDuJi5yryuaWuMqVKAXD6aqJDK6KkafuStnFi47ks",
  "key11": "7NzYKTN7kMPMF8tygibpCtKskvLDfSQ3eCLPXC8GReK3AqTQ9tdNsChp7ZPobVu1m9Yh6kJz18yXxcm99L7b4YJ",
  "key12": "q2utsbkczuQ2ZXpgZSr9hiq5mi26yxcCy7PxRY1u26c28nqnmcC3XQ8Bfdtgg32jx6a3m4n1Zeb12xYZkY6hsDs",
  "key13": "4BQy9iw7pk856VzU48r3ty4bVthALNnEiM4YEwFode4vV5Z1vApWBjNqaxAtRWGb8Mebt1gtxbv7PEcHPyD7QPjq",
  "key14": "3Qdizej2SUN1GtXahXX2JmRDnRog9zgnG6YESAdrRoteJNHd8v9mpihok7QJo4M8DY2GC1JgkGvMFBDM7DpDDH4E",
  "key15": "4sUbXm3RRzJBzcRkDHZz47P44ou2NYHoszhX8YvAVvgnp5BUoVGtVRc7DrL8sfRvjeCqSbX7u2cMeNnEEZeHiNEP",
  "key16": "63bxyVrnHNJF2CLoucSUVUKpCS715m8QH3G2spku6rUYbMUpxmjtGnVbSmKdhMkF1DgYP5FQ7kL1ef4T3U4idTAf",
  "key17": "9EywtER4PAY4axJnvc4DNP5wkr7XjD5ASBAzApjdkZ1dDS4zSH4kca4DDXHxK7KbiWZgGwBMykevG8Han4o9fjn",
  "key18": "5PeNCkvSeggbxmXhckV3mrSeoaKGaTSbWNZ33o2bSNwMzm51nAD8YG4o64xqgeuAUTZ9pAx86XnJQzpkSTfydUe8",
  "key19": "4kqeK6CH62qAGnjR7gc6K3EcrCL5JLxKi6d2vjsA8r5KyaeZsFuMJrRA6qdQF3KH37voZkL4xXWCYBQKwv7QQG3C",
  "key20": "648ijc9NkwRjjUkGZF2tTQGC7iYhPfBVcu66veRJXgPCtn2Pe1cTkXScr2bVf1DdYP5gnqBr3fgVC1LzNTZqTN1f",
  "key21": "5ZoXWJJmDbCGA8hXLsRDFTJ1LeErHQ8zno318deydrY6NCdxFSzA5cbG8p8xvGkSDxJ6hwoANEZTEtVMJZQNMFQk",
  "key22": "3tHNRmwDMzBHHLqmkjvMtETjNytxan1dopnmyxhc2MGAvowfw1BvDrNzfRZJ4uUNhxryRc7oDZsjizsrQtU8i4MQ",
  "key23": "3H8fN5et1u5CHYVskUWvjCBy5BF3BcGNc42SGzTcjFW6CnD8SngxCnH1MkfRJbUtZZP9E3YuJSdTBZfodDsEQymr",
  "key24": "5dMvZpCRTbsfryoAH9AYa91EPAR9HP9cLwuDPd1nZsmkqiPKQcraHmES84Ur6BufKFXAbQAf6CZcbAGb37KA4ads",
  "key25": "39Jqpighnnk1YbfvPkLrUL8wDmic3uQTU5sLLstNAn8nmvh8nLozNSEmXn3NagF9skFQeKVFmx9t8ZEEr3J5yX5Q",
  "key26": "5nMDBogLiqffaEqA2iR18uNPTiSyfYVRnqC2adngmbxFeGzA9esbumN8xLvWY1DiS4REVw7un5JMaWatQHSiAAic",
  "key27": "3P5rZ2k4FLrJreWEpMhkpuY1gXPfDGa4PvsewETQn5Pk8Bq3HnTdyE2P4tXDAa6WA53iBjxbHsWmupsW9kqcJpRr",
  "key28": "3YjYDEjzkWNAZqHqcrGjne9J9Q9faQTKbi3F3XE9Vk9Pe6XJut9dCiRxFXCb7LQRS8e6kSqCyEC1JdVYekiXBgqW",
  "key29": "2rwNnHyGDs8zNyifh7EEdTW7ViNbWoFfYrxQDwdJfNp4p2FtfMfQ8MSDCzfyAdhhowQJTbXtanV7war6GHf9gDgn"
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
