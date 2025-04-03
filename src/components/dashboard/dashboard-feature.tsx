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
    "3HVv6EuWWNYw5vw88zwS4auVFVey5WnApc8fJz1Fz2UuCTfuVHMDHJ4j1BE2VA2vCVsLmrNEzmshoBGqM5GdFW6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yS2yCT53DjxpQwQ212viS9aMJy8ZxNBjoqeJQHzJctzimbfVQKkeYAkERPwWWe2zjEp7SKffvSmkksEod1gsU7C",
  "key1": "24u89miTrJzixApbttjXE4j3Z6HHkqpngBgn1PVKNUoG9Gzx879E4mMWb9wdc2wAHvWiFwCJ9sCLLN48JsAmEziQ",
  "key2": "5Ar2QNNoeVRp2okScScg6RT2JPfJnrGy8Xc1gxzpT6Vx7q8iikZnTH8aZp6txBEqKzqqtYaToELwSTzRApEHCo3E",
  "key3": "4qFkMsCJbwtUSABNG6hSt62AbDdupEB9LyQ6tN31oCZ3Peb5XzyVYmU22xq1bGHmZk9iSGsx2ncjH7f9apmT9VSW",
  "key4": "4tnCFwXewNwNoJ7BYvtDFFqUqwYLY2bHTAS1cZPYbrKPFpfcoQwdadqjrV7vBQqZkNCfEPLhdVmVigiXiLDyeVub",
  "key5": "5LwaFGPo5GSRkpnMsQ8WZodnfcqiMMmagUzQuLJuyjWfnP1xTWjnwaBeWpnfWnh9CMBENhvCfNudPm7EL4Mbzaom",
  "key6": "345tdueE6upqkw5bfS4Kt4gQCCU1Koj3NGRuBeLArmprXVDsCPM4gmma2VZMtNCZFG4wRsa41gWBGfY8DhZa8pr9",
  "key7": "2XDMzQRbF27gJtdjFJRpZrPWYm57vcvVDE8TJxjvsPbZoTPESYUUoVP8eAdPzsRouAnErEXFpQSZijc6AKpQWqhx",
  "key8": "2niUagxyByL3hX8QoXK6DZm9dQ74mrGQa1kpxpWR9wU9zrNkbGedNNW72oSNqa1a9ZABQCoE3fS4JQEcsHjLtSw8",
  "key9": "2JgwLzVuRyT3cbS2cnnZjdEt1TxvFtmHSsDpafg1hKj3se1Vhcnr6Cppr6svmMctCho784c5iHk3aL5W5TzGWvxu",
  "key10": "3H8yqzBi9ifZJU6uyorecJShmHtVUwf4xG9LKzXnhw1E9kMuWWMxpR6mWAS91DkGaBWQiqVBANtSXkEw6vMAqpjW",
  "key11": "VD7fWTuGV72F1pQRxerCufHZJowvP7r726iegU36qgRPQe2WqcfMPTYBL7G8dZ7S9YQGjKBPxyTh8czLzmNbWHb",
  "key12": "7SwUQmKE68EkEPyLHVEJqkDzmBLyQ1SEQ4vtMEJ7BXWoZsaj7J5RSFGGXMDCAiWBvq5AQDjoBJfGYcps35tApZp",
  "key13": "WvJPc1hneFvoTK7BFfVAv2LctUbN4gA62WdmQCrj5SWYc9DV82zg2EXBpv2FcgYkTvPdohKVu1aH9Ym6yugGZhh",
  "key14": "5dYqJ3LuRWiHg8UVimybXadUXRPQwfQW62ikNXirozsVpusWD5xjjcG1omifwPmB6AvVDNpSNyWKviMJk5Jv9CPP",
  "key15": "5C8nSzAFYvSjtPckps47xndfSaxXNrCN4ppKPwXhJsrbx1gkXTEkUgro9RMwME4Ade7T5x2nGMG1rnD7tYx6fuQX",
  "key16": "2fCc7BhArmVgfKbGt1o5EGbKu8nH3P264t8ouCzB57JsLGrtzpgfyTp8PmJM7jpPAMjL1styFNNh66c8sSZp2o9E",
  "key17": "5aGksrAAj7aDzBss1zonbuwWq2yFNqty9Avn4iPZE4LR6rfU2ZvGZy7UgfKkLkiZwZQzh3t1NCLkzrBppu8rU73R",
  "key18": "4zQub73E1gWWMoKLB3QVz2vtWf9G6KpPhEyhobVoeiuvJAytq912VtoXrC7UhkZC6DRkLmqdDwaYj57hVGNhg6pt",
  "key19": "4A3pdai6VmybBTGcmoX7mWNDXHfUqh1xVGiWgx7FFhYaSTZ95JP9pmWjhUBdrpyGr8Uev7Xpd1Ph6adxW2ywcr5t",
  "key20": "5Cs5s5G663aQxShwcheJd63yKyW1z7aHwFhFLziZis5e7yYvKbWJxvdgMRxRKNp5P1Jz7gPdFU9KAWMyQgBTqYXB",
  "key21": "5m714sgdzJUcBRWhaEDjHbedxTiAojdGwZPQug7BKLWDcgRE9yaoHQ623rDMsXyohSpWuPuNomZYsqFnn7E1qje7",
  "key22": "MEVcBm95ytzZV5MvrcPLHJxQoM41MYYEYuGbttNjPY9Y19UEjoJkVgNT8Rpma1uza1dP8aZ3dACMuy8uYx4pwtD",
  "key23": "5C67HZk4Nq37vYLUfaNa6MAvciLcYaDzwbXqNJ2jXzXPpyRxUiRQcBhAYG7SAocHPyE2VxmCW8WDFuydCZUuVKdJ",
  "key24": "5jCffErNU3Lkqo3ttgCu5XhSXUxuVcNyrGncoBEfZLPXEu3big4PxWRMwSvEQBKj2YEEpj3pDrmJMJPKt4Aiygif",
  "key25": "49cLPHuyxPdTmmJwXtBGqD8E9BUjoSz38VB3gaiEmaBvW2uTXsXatufmttpZ6EoART7okVMihRvdRkcYMNRuwciS",
  "key26": "5tBAoWcFVVKAmPJdkRip94ZKZNWurBHRGo1KBRkXLr9kNDpk3Lkcg9iKFRtRaZVBBQT4qDA3wmts7ZyVJfSUaPoE",
  "key27": "221fhThSPoQF4ZwDaEtSgRLAt6qAuAcJYBdWprwnGc9fRaG6FrK9Gako7QX1KgaYJRepsJJ7H5NYmByKTakYXz5Y",
  "key28": "2ThJkMwwswNJ4pV5jevokLmvZ24TZcvuVYVfvQ7NbcqTj9dgzxYPBM8KK53w6oPn2tRQqEghL2cdjkJRHXzvu6BB",
  "key29": "3pXvePaJ7tY6GyxPpM2RYNwEU1FhCApLMGjSGfBrGEaFGGhfJft5BZyq1dadWxrN2forJVW6aM55hREmW6bDm6oP",
  "key30": "2w6Y3Rwduw1cqiWm6tv3o4CrjiwTZdCRaTgNeiCQLzeHw6RVtc3wAxw86dLoYBzYetxho1M1wHALaK2j41UTL2CP",
  "key31": "57y8jmzVV3p9cM7PCxRhAqKYyCQHkDJjB8wrSTUVGqrsTL3pwJu89Jk6oEAXKNRTKnvoVuHWGpi6stKxQYaVYhpF",
  "key32": "4tB8rCSkpgnoSRoyPBqHox48whgT92BvWYKkkd72pBnqRDHymHNJv7B9Z5WURMojCGrdvaeGDnMHEa3kTmYmb8MV",
  "key33": "3YwhXvBwAeKink2J2YQyoVy2NQmbZFwQzHZb1aNpUjPwKL7oyFEEDMVUFe9Bm2d94ujSppyHit7igUKYiUFL6wQU",
  "key34": "5yckncT5ENsXyVGTAwnfg7TMfYHjmno7ZQmih5QKVUZM9QL565HpkfkJzyAv4QKVTy9motjzw5HbG7rN1NvYzcgM",
  "key35": "2eHwPzrZ2xpgAzLS1WYdyJnTKLVRABGhHGVZr9Yng2ezkFPdUjszmaRPs5wcdu9WvZBzdiZ8b1pZ7j8YSV3i9AxV",
  "key36": "aP5BrDcENUJASC9wbSPLZhYbdkzieFZwe2HhR6bLg9eNbbkByehE8mHXMgSTMT2BdZoQs1gXEdXZh4hKeeKU3Lz",
  "key37": "3jcvoLUqPAtQB4bjJAXz9JSTRXF8g4P81TSjNpN1fJRBitrArBmgxr1Wj1czm8sA9SEvgtQ2Ssz4Y7MRroX2g9AE",
  "key38": "4mxJ9XdtNkH6evYEe7bG6cxHBwQ3t2H7r4MRGDpW4GNUPTFMN2mvrwSjhJ5ZzV3o45umod1MqY6x2f59nquvvQ8",
  "key39": "4A6aLWvhW61PeTj8X8ge9kBHjnuYHhCmpuyjD2WtXZ8xY5KRbZTX3gCi4QqTE8eET4Ftj56NdFyu37VERjwo3Hub",
  "key40": "2FYUYd3XcNGqtKxTsdxoDZHotp2QP4MZiZbHNd2jwq8pfxmYqFAi6a75Az1n664nb29cnR4kMozGcDm1xbprb1Yo",
  "key41": "5Dhg87oR7H8xUFH6ovkCZZBud5ihCwwCKjX8kPAxRUsw8MJ1rpsqTuTbdVTLJBpQ5eGxiTMvxejAmyTWaLdJx7Q3",
  "key42": "LqeHyzq4XTSXUWZuLSmZ6RiaNn8MEkGx1oA888Cb73YmWipwCJBSis7uU8whQy19bgipwpGjKXeBywgtXuFhzc9",
  "key43": "5Fm7DfjoFPkwDTxkQfSjkwbr8RomGnVUk4G8WBX2XGEaHJzZdHsbVG2zdgDm2wG1UjwdQ8Sxv3fgdSjrtWCCwkpK",
  "key44": "3NmLX3v4inge3CUeUBfEXQ2UbLHUh45o3yHnCBj7Qr3Jg89tSK8T6JGBrKom5XwQCzzb6R8ftBuQhQhuWNeGMtq7",
  "key45": "4ykn3xxtDPo97p46LEWsKWDVViXGFFJ8QtrgyxsUsEq1YzBTHtqvBh5HkiUENq4nMmwczPYRxjGZcEcYGN6p45WW",
  "key46": "usSNzT2Z5MciFn1myroVxv2hDTPB2njKZDJJufM9MRD39oQLu6H9McWicBRR6ris8gJsAWiMKAqi9k3FW6GgDd2",
  "key47": "371EwiVp9nFU8LH7QjVL32Sif6E8beiH7Sca49BEtA7aTVu6GBRjqCSGy3U2KQJv4wHMb8vAhM2f39ofUZZVtag4",
  "key48": "3fGhqHqs1zQ7v518FgD8maRNVo8nwzKMuzMaX7CRXFqqG1wM4W9x2VXfAJqSSYJYs9ggwnkReH6piaZ29jWXo82e"
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
