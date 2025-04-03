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
    "5UUaziCZYpxA2jQ7zpRrooj5SZzSnk8RmdzcWZBan9vb4gN75yujRNyZ4n2jJ9YX98mT77RhWJNtDdLUMMgqFbNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57tNasLPWmdhVadr7RLZz75Jbk7bZBMFPvq1tsXwwSr66c3vsTCFDXeEBGGAzL889wk6SGCeofZxvkktqupD1nwY",
  "key1": "3pwM6wrqwEoJ71Vnc46RJ2uiU9QxsWcHJ6jmZ4mG87AQUXRCY4fRY6mjVLF3EVAqyCaQkyzy4YuBsbgxzP7V9CaT",
  "key2": "5YS1omLfLjTybworVoGWHAcPT8usMK5EMb1nJ2J5QZanfKpLXmhiLXgYxAgQBCpQ4mutwVD3rFwiwKgXoneStD2s",
  "key3": "qKhAgQ2CXg7zcgqRn1ESSsY4kKbrWfSrs1t5kGdmtNHsrV28jzzkzhxGxorn8nogrWj7ntH6wPpMiw9oopK9oc5",
  "key4": "65JxCF98FdUkE8LQh3JpykDriF364QhTieugxjrR89isbiXY8KELG64wxuHqh3heQF7DVfaGyNTRL1GuTCrxox5G",
  "key5": "2j1fk8943wpfKFxvSKMesZuXV3s2z4kvM49qMdXGZqY8s8tpnKDVPdvXNcFB8SQDzQxLeZeRzvmyitzMKUwvR22C",
  "key6": "3ZG8zwxqmjvLA4JARY6pv2r2n4N76EavuhPnrMnQob8wDrvrm8nTKRrKWGRThDZtSj523rn88C3XkwrQKvKUQBWs",
  "key7": "3dyNd7L1awN89h4WuJhctUX8WrV2pJB4V7uVMCbFcax71RabBFi3RTjL8y5eYovxMFyDFHS39FmXtnW353DdxcNb",
  "key8": "671yQieoGHEzaRpFQLCLGkp6NGEU3j3ha9tkADJf68JbaGVGp3EoEL1mB3dyugjUGY5NfAdPyChoKTgCjreHodYS",
  "key9": "23S4ayuWaHGkrUS5rS6eR3wV3HWwJARznStkVoYpZ86tKy7DjqQsy5GY7aZV2Vj4XYMvYS2JmPp8FpRvyty3UpJS",
  "key10": "bcpeGN4xUiLCHZpzDK38npXAKZ6TGKj3AzcNDnbsb31dM8Hd2WBXgK2dPTqhbXJcXqRanKTvFo8AMrWKn78XEJs",
  "key11": "4sMC1Yz7edqmVje7NaJuLcEZpZ27zi7aY5dWynE5zNZ2VVfpQfwQFfbUudfogcHYCq3SZqkBiur2uqfVjLJzkyE9",
  "key12": "2knivBNM7GR3jLW4BiB8Tb1FF4vfwi5EDfG6uB1GnwUvo9KiCYZfZ44gs3cnaor2NTGbDWJk4edbLKfNR9GYBm7g",
  "key13": "4TDvJzMQyZ5Ny7MYkB1DkYrGREVhW2q9LDnbgpTfmcay7Xq1rbqN2PLRjQrHFuJbe5Gz4QxLY7rUamYizhc6jmem",
  "key14": "4N4jhyJZryh1xRGcG1hpaoQNwTMDBT8motmT8WNBSuEf2HdvFaq4m9EKNUCPm8ZUtDNmJF69ZuLeA3MphStRcAwK",
  "key15": "4zYYXh7mpNxtFSaEd5S7air2vQhTv89MWrrGXDp1EuRVCzc726JKnND25bF6FVC7ychJceb8swZsBwYkD7e1PhSs",
  "key16": "377MsejhA6AGXmM5xVHhfdYk6SsRUWvacQCwJanGFoZfnVHfTF6LSxV3iQ5Cqw3qoqgymKKePe2AxbQp5eVM8ECD",
  "key17": "24Dbiw4XNENwbCtjfRt6bYDxhxSFZJFNNfrcSvmfMbn5gZqNP2GZ21fFC5AVW8R2L3cghANiisSwoHn5vHYYBx36",
  "key18": "ja8mGuD2daFHEsCsPjEkaoi1oihPGQWyjiYGFZVXRsMBT8xdWN1wqN9cL4QE61aYXNUQJoiQrBNikzGv7GBcYc7",
  "key19": "e9CzaWQWEdev2redjJYQY6AcRkH6TESG74gNaXUk8kuK9aRU2UiGL5WQZ1y2Y1sAsKnLwqVaWsiJN4UQzvPBrfz",
  "key20": "3rGaDTPC79c5AfYCtXCZ6uunpf6rByscJYnJu9PRkzTWQwTtSyMDrYudNy1vHNB59kcMGFvxfrXvo27GRtVSKQg3",
  "key21": "5M53s8dLtJ1UG9N3Zng51AJwp15RjfGym6rzfLkpYT7NVEqPgnQoCD9BKiCijzvd5LFbYLxjdLQKkocTzPCxP5RA",
  "key22": "4s53KV7BNCDtHeDzYyFqwifcV8chY9oeiMqCvF3dneo99Y42KK2vVsnMynAmSG2tJvwPq5DjhbrCn6Gk3mxoKGMQ",
  "key23": "LFQyH3Qq8zq2Pa3GMTJcKQWSLaa7JEGodS6SE7qvnu1dJqGmxWbKoUFs4trpi2dYPTQdjQfYusfoJzfpp3KUdCo",
  "key24": "TZgGb8RmMiDd3MyWWr2X1pYeksr2GdRmt4GzyQWdec9V1M6YnZy8dd9QXr6VjTWM1nE3gAR1Z2brQ9ty21z3fyc",
  "key25": "CfGzZmE1etWtHWausqCyEzCCGySQLN39J9V4Y4D8v7rBZ3UWQBzgbfkRHG11V8XBNqqi8jmy6upK46rncFjjeYA",
  "key26": "aQ9rtS3NVwHDin1tXz8V7iRS9yWMn7NEjSF2UyGfnVR12S3jYa8qc4FVP1qVg4HCsJWrGdzUifBxjTebtc2Fr91",
  "key27": "62jZ21znhBX185KoV3YL5H16b45cenVgMVXv2Uw7oYzjysCpAfb9e67d1ZB5FU24UruqCNSrmwGeWXTCdBUb6chs",
  "key28": "3HEqewkxEBJsHKzBYFwJvyS2Jho7p7sSsYD41z1u9Ftem5k5utwbNjg8K5CMBG5i7hS8xYVgViNFTDfiRvyCo2Lo",
  "key29": "HypZzGrYvht2Yj6pABa6y3PByzbPZtkPBj4sVYpfQK9DwepnkGjcurC7EWtbNFNDiwdVVbpUVh7L7ui9fopJzwY",
  "key30": "41q5rVa9WC6iQ5SQS7VKN5rReUKqhPaSELSy9twsUDzVSwssQLaaf64LFMMoZwqnWVxTBCRNmYGv5MBP6ieADpAb",
  "key31": "4MLFBNfLwBDGCSEQib4SrGLfFg8a4RWdqUdfqMy9gaJ3WsxYsZ5nXNDNoxEuF8tMfdyibXjfJbMPx8zGRBz93V9G",
  "key32": "55wLtTAxUAkbpAABk4pck9zJHdgBq6vMtqKDbbKBESDNNXqFfw5EUyFESJZw3oufW1cFBowVujKwbtFT2rhWBDiv",
  "key33": "3MC5nyBfM3L4c8LLT25hNQfqD44sVM3w2DFsfXRXKpvBDNTo3pTF1GQKRpCGVKmQJAcoyKEaQHKye6m6dPoTFH7d",
  "key34": "2oLjPAYEcbDXw68cxjz9RZ9RvzPj7izaKt395TGwewf9vRwd1cK43coZ2UF5WNXTA8pYL88626kQdNdJ3GJ73Sju",
  "key35": "5fw4UThJPQxdUy667NxfttSrLqLTwUi5Bu9N7VQLYsr7jDP1W9PQ5otaDT7cEWe3wJGTsZgQ6ZXn2VWAr48MBWmz",
  "key36": "4PSn7CT3hLwTSCgUbccCdQypMgvephZY6TwizTas3Nv3MN3eEEHqGhWsgkqDKgjmqy42g41bZjP6HQcsVcV1Q4K",
  "key37": "2HVPBDpgCLsx1xcdSmqmLJnsoS9kqBDMKrsEefomaEXKRq5usVSJiZE3ZRtWk26FQYjbacC5vjrafns9fS29CbvQ",
  "key38": "4VgjkgU3EEQuXRqrjWCWv9TYW3fuwEtqzXTJx1UsETw8nrnRxsi1kLq7FgyLtczZYenCwJ7HJBnGyA9zAcGidxnu",
  "key39": "K7bzLPv1wWL1tR5pKRAHjEQKMXzx7zhd9AU4jnnzdqskzK7tapjBgrbmmAWch6ViCBzbznHDnfMnfsgWcoYnMf4",
  "key40": "2f9U4BGCmG4EZ2kYLmV5w4Ef1GL65YJAmPv1LhiS9Z7iBdJtV2Jwrn2QMpYd7e6Wdn7mggBTRgbgE4HKF6DPc6ZN",
  "key41": "4kgKpmuMQdiAP49pjvw3XRBV2gaye9c9tSmTNbT47UXQFh8H7v6oNfqYm66v6Rp3CgAbLGPpv5rPsr1Z8XH9BqUH",
  "key42": "29xg5MPwMrc2GFoMHztcS63A5pygiH1Nhfw7vJTijGGuGWCK2SbgXFnPA9P5Pxzp6dNxsGmxwNFuZbCHVPRUz4Yd"
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
