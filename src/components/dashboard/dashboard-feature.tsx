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
    "3YKoQA8Qnth2YzmxYrCXPT7xPjQ3E368PysNJyjoACyHuMmpxhgyyj41yUtcHkorkBoxpByoXBqjSHbKySNGwvXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48C5tqforjhTx7AeTKpjouT7SwW8AYoXGZeKggmFGRQrCGLwYJZ97tGAqXUTCVDc9HE89mtwydyed7u8HRrydHW1",
  "key1": "53ezAxuUahJ65udoUj1FD6UYrSzLznupVNxrxPzk8tuY2V7BkwUbSXPFJsJDmG13Eq5GdoS5NSTqp76vexQxv4vU",
  "key2": "66vajj9pYU1VkT4TKYCXkHypvxbFLFQFna1WTeRum7yDrsGGuXGMSfR5r7rfgA7XbknqSehUCWc3hDySSqiWhNcx",
  "key3": "8jq1e1ZYt4oM76CkqDRrZ7k7K8HZEutfVd4sLxE3ioADe9u3NH4bgbsL3cfxnuYoH9EY6ogUQTn7MYmQsC3hzQu",
  "key4": "2D5AxhCoM88vWq2G7aWGXFESY5RfmaHuRicmJ4BTZEXSuqh596CEwW28pBhNQ8cqNogWNrjZXcaDazgtwZkyuXWr",
  "key5": "4siPpxXZGcJk2d6Wmg7qqfrmrU4ywE9PxXGLK6ineKvtvBXeUHzvuckeCDPx39vicpYhiSxawExY66ZmqmrBvN3x",
  "key6": "42vLsE6Nn5byAS59S1gzXVJQgXPec1NLYEkszdvx6w5GPqDRAh7oUy3cSSidtEsjVMmT3CCFJiztWnq1ZaQFyBXL",
  "key7": "5FCrTcaANtucPYn35ZAKzDzEqH9Suagj7uj492QFsXC5symzQUqcz4xmjH8TkHAD1yJKS2NmKAZXChsMMJre9Yjs",
  "key8": "4DQj4VjQ43APijVdvNPNXKD1mnRSB9q38k1R1dm1LZA8nUzqpAAE1jWxBfYW2oBfMT824LeDSVMth3UhcTYRHikS",
  "key9": "5uwAqT74mABxBCv8tjryozNXF6JY1sPkTLYpoB35Lvob9LqeYDMkoxa8f9KaNNRDTjigWxPU1CsE73mweqHe6opJ",
  "key10": "GWxscQ5iU4fTXjVRs4jCq7nHgvedVvCza1A2zZuBW36AV4S1xrn6snV6cHPepViCzMecbCtc4NX4z5G4ZPNwAVd",
  "key11": "3aca4RFL1GLqAyPhQoxWVCAQfhQReMooxmKwK2B3TiTwoKkjYPDjuQ9K2MokEH1UHQ16wwvm52p7sgiMqS6od4Vt",
  "key12": "5sVx9R1yUxVHUwU8pT5H3FQjsTD1SHuBxTKTUh7LstnDAjs7HmHAzqtCSVGXW4AUp5TigYQGCxiunnkq5bSzG8ww",
  "key13": "2J9Pad3rukH8FHaufUUGTspQRhQUZpVvFpnu4NuLknZ6xVoBuRnLiAUskghPjKkzwJVJqKGV2wn2ry93rMvGj8UZ",
  "key14": "3vGKYZnWRW3JNJN93N2BcSakAS38f1H19863Skdo4DkD7L33SgNN8SknG2RdMgkdBAUYuRAfGiChLAupCemtVnzF",
  "key15": "2LTBbbydE9uGcG8Lc5SuLqhxnrjTDUcRndQcZsaSWXPRJ9evU71WEx3po1uNYbK9rEVMUiyQ9oYBx1ETgmJ3s5Xv",
  "key16": "5cpHe3z4qubkrReximkm6CLky4NsbprZRmMdj6DnWqxQkXWzNqcPQneFMqqJy9M6yP53bknB6ADuneHie5gj5YSy",
  "key17": "31eyZVGA6z3j8QSGCBZz4EeSDbanv5XpSzj7sc2NtabB5gXzWK6hmLLAchfq7KxK4wSzUnJFFEA3as3mv8GijhXQ",
  "key18": "5YBYA3x6KDq2aXa3ypxEfWJhDGa1aSXmzK1H4Npr3RM1ThZJ7Y5YZDyVFd7xbJkHp3vcnpKEgE6yEYkeLpCnkSmh",
  "key19": "2KgfmzsN1QbAXnRjCC6Mz55ubELHn9tZJDabq7J2NXxpPsxBXyApEfGdzPtt6xvzTmwP73dpWZqDM22CaM22jLqY",
  "key20": "5yS1ce2hyY9TqAFp7m7f9KiH1oAkRkiisMNCS5v7zPzbvvTKwdVSi51pQkGydSPkqiA3jRoCL2mNkHJXEQP1nfWX",
  "key21": "3vwtLw7J9qA4DW2fz3amvCtMvVPSMUNqALsY5jSNAtMQk1fQp9SMEfgs1m7YAeKnTHE1Wz926n2pyWPDZob4HXe4",
  "key22": "5B2KGJx9FQoBFWy7aSdFJWDg4fyc82tEPozw974FWQW2aXzoeBNWVAF3zUeWBDn7ziis15hL4irYN1Wc78WQL33w",
  "key23": "qojZSUXWoaMYfSnXKVSqzU8EWb1MyQwiskdqFR5AEfxyv6U6nFsf5dNCibURdsCiS2UfzRFZmvC67nv6DkNQh9V",
  "key24": "2w3CBDfwimYgZ9HwZfvK4WuDjvLAP3be7oEkuhQBBmpgyy65AA2szzeNarDfAoAumYTidVwvJEE1uAk5H1QRzoTC",
  "key25": "3MyhyUrKyoE6pywKBws6DwAKpHe2GR8qgvPBTzueBwsqx36im8zkfYX3WyewFWmwaKxTG7Z6khXujqKBLgg1nGYz",
  "key26": "3jMEuFiV5hNRfvxRpHgQ1QkCLzYfudpAMQtxEWLb3ENf8FXzTS1k3YMXnsa1EXVYfvZuoqkGsRXXTRqKp3DP2bZW",
  "key27": "2U9QvyUwnPsdHoCaoLr6VArfZURjhcsao6oUJwUTpdYzKP37ZgmJvM6Wwws8Z5aFWTsZvm6abHidMsvKJBbxZSxY",
  "key28": "5RXzzsw7P3XkBSPvDCnKTt7yX1K8HsJJNDKkaa8dtx6qMNutAdebs1vGsB7GBYWECNyT7vJU2QoWVV38RMQaLMZX",
  "key29": "5q4VHubSnDLULsyGmZDnxSxnxATBaTPR3QG7TWwLEhTJCVnooGc9PxitX9cFCarQr7RLxz5Cihau3hBEncTQMuro",
  "key30": "TfMFWxo63U3zzmiuX74GW3pypbt7i57iUHiF168SLafq4Ayn7rTJXuLbxCz8DqUFVzQiXLFFoAHQ54KdXojXMh1",
  "key31": "5v9WvpQH56dJ6YouX9epFG9jsK4cJ6aEo4CDgt8GMSQgaBqEDgiqxs2YBNHqTcDXFSCJKCDkfsh8itKQhXTxFZ3E",
  "key32": "4ugiWUEcxyjLp1Rmkhr2Q22Vi1G62T7rsDEHUgEZgHDwesmCTg5ugJnh7Rd3JUMAdiALn1QibL3w59qA5GcAUMhs",
  "key33": "8aqPJjdyZLbufRThWPBpZFDu69u9aaQuBYYj47UvS4mK2FCJdxBkrotaNLsJwwCSBVAr2WqwU8ohJTZNsFAYZAr",
  "key34": "3cXypTRwtnrmomRCR6kuouWeXaVf8riBv15zr5Z3Mk1RUQFzi854HZZVJh4Kah6znD2HhiHpGZz1DT3KoVhkrzt3",
  "key35": "5bGxJrXnUe8iAdktYQ8B9RggZdv5uVjisBXyeUzacSfD5n9TQMg5ffdc9f12GtYZsYSwSNwTHFAYJZN6nree4i66"
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
