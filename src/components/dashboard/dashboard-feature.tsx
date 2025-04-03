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
    "3vxYLDRwnsY9iyF7kwaFHW5hwkV6mBh59Q19m869AobW3KnSG45ZJSxScexkHg9GBXCvomXBd4acSN44j1RvgGZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RTaubxWUU75vUcr1QcU9ofLAP8bJggKQaytdHSxytAUX9SxZ875FPcz4GcDYL82ZDm3cX5t2VSbYkfwGRZkb5Ts",
  "key1": "tnt1rV3G9ef8P774bswdpfAw5CezTgydaLcfQUYkM8KUmfXSzznS8SU423YnyEFFHCFpYfEhBiiqPqgbXdGmy1T",
  "key2": "37T4UQXyu2DTaLEimzbPW7VEg1gcnWZE885pJX9A2MSwY5pyyZXpvLMgLowAB8kG3uctwTBe7oA9wV9RwJLqiXuW",
  "key3": "4crW5NdF8ZLPeoQpVrjhRL5Xb1uYqewatKVDjhA89s5yXTyzhxyAc34JGQczXkrrCjLXhantCdTisnXRLy9WcvDn",
  "key4": "4MwtdhQQpWgGFVvSa3GSLfJSPwdxQEQd717tfrxj9AxZYe8VK98FMB2QKfuCWjJq8ZX778gMj2PkDAcHnN7P69oW",
  "key5": "XwnUJcoKfmjQ5KehpcqNP68zL3J3bVqUo6GnxDHGVgamsXkS7EmCiWy3JM1TJhyqACagjRbuUrz22ZxuUmV1TBD",
  "key6": "3fKoWwL5MWAJqBYEWpaywXBNeozkF7EwNMrZYpCjc8TPKDnycsLsDExsGmzdPv7Z7fchRXx622vEL3wCtezedxvt",
  "key7": "3qHXcd6eqBF1BA8RnShUKpRMaqmBWQp6k8JC5vXQB2HxeTRDCPg66beBCgt1jwLXughWqVijrKnGPsKG93TG3V4F",
  "key8": "3HrWXV44E3Z1xLYBybCDifuE58QtMvmwd4beBdK9jDvsQpSRqdSMoFH1F8qMZPEpUs8FfhEzzPT8XrYSEcXuCYE2",
  "key9": "NkQNMpHMEySfZrJ1BwBmowGkEQoa2V8S1RCKrLUPyxWRh8qzFRFYjtx7gEp2bdeij6aBYUbnYz791AKRbPkmy7b",
  "key10": "3xUvmDuKrYucFVFV7DCu9y7963pf6Aaof4dkUdrbSEvxx4o6nomvmKyeew5gRawNNxhL7R4jY9UAbgaftrFZ3hD2",
  "key11": "4JED8G7ddEKJxWsgMf556PyMJzauDoUCwfjJUotJCe1edVgtJM5417wrh5oRCtcaAz3YaJU1TdxT8LmG6yY9ssUr",
  "key12": "3XnLc8k18cwvjeNJmvWq1D3j9mbEkqEbzp2xd9XtiDAwgqM1u7xYbvwVivqQfo3PqnBPLqHgucQtNqdZsRhzmwcC",
  "key13": "5eqfQhspwidFr4DTXQGsFxKgcSyx95fD36NQY89QtZ35k4fAHWuzUP1M6k9uwYVAChvN7JsaiMfJE7t4BvRGNhWP",
  "key14": "3YnqX9cXDWv1pX12toGT3oLCjTwU7qsJNmqLV6YCVhqM8pEMvW5wB2QGjk6GvXaWEiHsykZTT6UxyreR5yfgp8V1",
  "key15": "4pcnyxsJWe5Enf6Sdtg9sUd78RZ73BPgoFcwZsdovoW1Wan7fpLHBH8JLjexZX9t1SVDKc9p7xu6obQKdBBcELFM",
  "key16": "27ZGKgcu4DN81qFXNYr4nDSMpXGUEWsMBvV7r6TkWDp6R6goq2CpzPrA3Ju1KBt9RtXhnP3naZTD6JJD1dSXFcAP",
  "key17": "4fw2kEuADadyzBLGqUfgBHTWGcSS8A5C5meRo3AvPDZtTekt8Hrha4YHfQBB6KrBUBZ99CP9LCFTQxiXdnriwF1v",
  "key18": "36Z1DS6svwkucAADZk7rAbnN5X7gyWZLWK4zqqka2orCnU7LzAnMWqFUM3adVrSxH6rWgVFx1x62g7TpNwk2SSkb",
  "key19": "uQbaJVwfTBMZU6xezFpwCZTaC6zyYaQBXKpfqdAa7oZYaRggkh29qfm3zy3vVNPhd6QKacuHc7bynhUxQ5LpqpR",
  "key20": "2DzV33bU1ADocb8G9yjvFxc2BZp5KeYFx77YpNaczEvRGtAfcAsgiKkdQTi5n1FaVBC7P5yGopBQWYpk9wZMKeMp",
  "key21": "4LNUuXASqrwJb1NcC7Uqx3gbsVLwvQJVPPKeL9mHDCsCnGHD6WxVx92T4xCZ7rhyQrVSNRAuUXndV7W57GMaEWB6",
  "key22": "6zK9Djgv5QgkY1i58k3ojk9Shi1kAoGHKf75AZ4FrAyAKYstWNoAyYXrYqAG3KLqHqs1rPfGx75GSbhhW7uPN9h",
  "key23": "2pFz9mdQnAL3DKtqmAY5qRz6yznxf6RS3NPHHctkyFBHsisxVubMYDG2rr2ZGemv5mwqK5eGDms4YXPGFo3uPqxY",
  "key24": "5KNr3CX6Bcd7GjyDz7dSkEqihhgS9Kyot11Ec5rMvW8C6onwhDvhViuZUCG3Rw1Ji4RH877tv9geRwM8ZHVtYr2d",
  "key25": "3WDNZvVxBmhdMsYb9uxQRnTzZt5yPoXrmHDS97YtHCY7TVouoMPF3WHvpAMnfTeXc99tc9UZmkJavn3HDC7dR4jg",
  "key26": "5t39zL33jFJAH49CLrXLSDzyURQj1Sws1DTrs983XTgHK5wNQgnSePC7bw8smc9LzsPGgVV1n4DP6eNH6ViRYVDL",
  "key27": "4RXfq8JH7px6coeozU7p8SaD9TGXSbNQVwNzqnSAnkN6TkuqGieSAyEFMoTc9GM7Mfuz5cfRX7iJasQXsuMuDQuv",
  "key28": "4Pgr6JZ7XngMRruxQCN551x8LC5p3vQcB3VJNyQwmUsbnGxE8xu5Zjtk1AzgY1YYQLEszS8o55XBkM5myJc7BQXD",
  "key29": "oyALiHmPjs1EZvNabf1L7urHiB8FgZ5HQb6VToFzfv8YkGNVBAMKtzsu59Uria3w9jArNxVc4pYo2mbrLQfjQz1",
  "key30": "2pQTuyqbcpKdo4gS9MBJDPuEsWSYvzBsXQ4Ge2KN4ad2YBRTmG7ZLpDK7WkEzeVYDtdGFuCcnJ7V7Axf9i57XGiD",
  "key31": "6RXdLsjdUUUXrVU3CwVFo8qWPSaEYomPV8jJd2QoAiin9yNPaPHXWQNvYMte4znwUZsJ5tXfyGBrvcwUnBL1JbC",
  "key32": "3dJ7Fi8hncE817p6uv9oTSXemeHWCveo4Fk7u1c99TEJVH4Kwoa5zz4ZS5wGhMXD1BQk6N3JePUWKeTKosEDEnC9",
  "key33": "2NgwmzfLTGQbkXz8UJuVfi5rTriRUngJcL2RPKcbqzgFeUnKnWZ3d63KgnhUCtZ2mXqhCPSq6br1TpgFXZng5BVD",
  "key34": "41hXa4CuKLLgvhEVMQbXSqCgWjfgJiMfzik84oZH7GTQHEC8j5KmFyzFLweKETqgLZXtNZQPe1iJHinh7yH943L",
  "key35": "4Bo32CX6VD3RaGKfcXfdo1R2AZC1SgPswraWr51TvrVMkHqS15BxDuuYPm2iXZZoLxbkJz7nxik6dD21XGdNqpeo",
  "key36": "5RJFPCZgZDeLmSrbb4ZmkuKF6CvHKTAXoqscBDr48g3GCLNMbj1Hd6bfPHT7s4hXQaC3KV2nLQAoLrosRvQwvnjN",
  "key37": "2kCnsJHcUUaRKTukrbNTGU4fCsxZenotLZ6uuFcMeey939zmS6DuS6YNqSPgpx4r43J2CnBFhJmrxgohefwjy1YJ",
  "key38": "5TrD9c77FaDLD6XPnhcpWQ5wkudrKH2SUuqTDqwYQLv4bWVBHuWFsbNteexFnCPQAWMRzXq5fdU4TUvKGBseJLVV",
  "key39": "26viFua3XMxmN1RvzDANKAe2mp7QCwFxaHKwUerzWuhMyoxiqAJRb9kBJy4M3kPtNgPfFE3oxv3BWAoVz1yjy63y"
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
