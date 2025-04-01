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
    "4SNntaxQYDq2vT4brra5WG8mfDxeVr4Mm87K2vPUno7LKfrXqCNDt8SKk2EZSmbeksuqfk2B8yZ9qVaFAHZUtnPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YzowF2cCdEAK92M4pLkyqiCV5bD8L784jUXhfvVNXsjHdZyNAwfFNG3HACc9SsixacenpBJMbi2SMgcAcyBQAgP",
  "key1": "258cYVPSsxbKARkt1XYW1U2HwnsE194VxARhKvkMAsfPrYkNTYnPtguPyrmQ5SgNNHH5tX4oJsGw9ZZkhdDHxZc4",
  "key2": "57WgJbX8paGWMXLsvc8BFHtDJJeAwjqYgSpANCLJY5fAgdxbuAsWu12HuFHKM5xFMYPi94BTpvZ9N6mYYLFRiQPZ",
  "key3": "4ZtUbNbzPNwjLJ3rwdDZEK2MqbKzhqLfRftzvHApLj6ZWcNBFzAqSBcT7kh1HGuFDtf8kDKAp8ADKG4gH6sQ1SjZ",
  "key4": "3oa4nmqbiy7Um4GYf8zHjWt3F8JpTq9WYeLfJt5PGWnpAJaVSJb9YVLWxFqTSaxKvWZ4fwoLPoYRFhWNgbpLMgSJ",
  "key5": "4E1TgzQcFuAGd5E4YLRUwfZSkMQUeoyjHCiXx62JdoxdhxtgX4V4v6n7TRMqPdkRkMDsRGsuPzSgvjFKaQy5kwkZ",
  "key6": "isTRnKxKfUG8XwsfCb3DsD8c66X5B8FDryTPBfLYcQDCsh6cPtJKoiKzgJARBQNcxB92iB4su9z8ujiJquJ2Cwd",
  "key7": "3gUU3HdUGmbvjhWjn6fLEQPrvF6a2H74CCUQL3VTbtYLgWWsS6Lw7ywkGEtdHLBiY6EABGxLYa14pPhvjGJsSZYt",
  "key8": "3BsvHQKKDKt9AADmd4jYQWYWwz5412uoaHtTczZ3HTtkSqfCbhYQaFX6tQtdWFPg2NHxfivTbpnAfU1Y9RDhVxGd",
  "key9": "2KiDw2mSeStzR54oGVTQw4k8ZDK8ViArukNX7HiCqKobkedFL98S382qapFJyqLSHjKRMWRt5z5kFwoGsLixiFo8",
  "key10": "5nmfqGW7TCRbgjXDbksUrgoTzYg5CmbVU6vMgg77pNtYDUqBsECT3W1yQa6yqQHboyqfpPFAm1aRcqNSfsLfkEyV",
  "key11": "2Md3TZiGVW263wfGQnNsKmLeHBi7FQECXLLqm99uEo4nZJxcv7rLxvd9padTiErQcpRmcUeCk5rfpWfAA2WvWii7",
  "key12": "4zgsvWKZsHBQg4wPHS3EXLofEaH9ErR9fozdp9KUg6wnpPdgeCm4wRg8uskRgjSQ7XoKfKpKaahUgoqNrAgTRzyr",
  "key13": "4eBYtybMVHChqmA2jBwZDeoL2d1UEjbkRci2iFd9pJ4zePe9HYvej5cL1WEwRXGuNhxEbEunbCwVpoYo156h5dCP",
  "key14": "k9ajaUhS3hFTDc4B9uuRLHrD4XD9qpmYoJdYFiu8uUJHmu8WbBJdffB7TEyct4XPJwPnBk6VhugyDNnibYkxF12",
  "key15": "4t5SGdUCwC2XsMNTLVcu47M3nRhxjfC9E9taRbcGyCyB7oePZ6VihyqdTf3mb1JNbKFbDTcDic2BpDJAi3CFjfSo",
  "key16": "28JurMcfc5iNaP9LrseWZtHEcyEwbZN3aRZPVL62eKkpEuJDkycZh5GzNot697nXYFnkxQVkqmjqhdUC8NYV2J9A",
  "key17": "3Zg94u8o8cRo2zmH6vyFccXguw5CyXWRMpqqAtQtx9T581gEdNY86Y6mzXNJnn4Ez8TQG6t3arEZGjq5aAHRrtLt",
  "key18": "3p2QLVV3qXYbiZwfNfdvGbmiVs4YnN7xZ5HdiEzTeWmUg3gso3yBXXu1tYc7oTN9eVq1MTHy3BAqJkDgDZ98Ta6B",
  "key19": "4LcpgfUvJJhwcdUEdf1GkYqmaM56LJtMVtGXc4Fywy2B33duWZCumF6U5RLkC3oXHVruDsz8N7nUETKeE2NhCZnL",
  "key20": "2MG1QLk6NgcbjSptrwdBoswsfiDafmgrSszyyQJcsxXKeXWNVwpCQYucVgtGv1X8rFBWinvwVefYoyiUfrzLF8xq",
  "key21": "3Fpz6S9N6e8FwK3nZqUwYuKniVB9NDK8Zd25T3LMAejtDwXiSZYqhcnPU5C5UHzSzqeejCYmV97xbyzkq5khLiCg",
  "key22": "5omGBEDmJrXm6MhSpWDxMMohrcdJLzVREpYqHrw221D8zi2AZJ9T2gUsbTDZ3bUETbkosGRfuRyDJz7aufk3Aoze",
  "key23": "2TMpcWNwmSjBdptdWFenyZcq5KQGPNEnkahdw6pBcy7oUAtPFvMXmRaJkYxfhtXi2rzMHV9ecqZUoNGgCs8ybWMk",
  "key24": "N3gRTmk45u55KhAFNkxwRfPujsbzT6PxWLms1wCAzrykQKQ1khSxZXKfwYT5ezP4tT6KLPLksDfZsGPjTBDkTL7",
  "key25": "5rYRCYPYPGa4qDiWXtvymCdn7HF5sFqprQfTP8cSSWUEx5AhN7LrxpKfQorJVXLy9uMHnfaUxiWqeXsd332wS8j",
  "key26": "2quohqAJxsG5Pa9QDAwMRQWEwnb9o43a1qavHw5wRixWjtatiYwaZnT6gncuV4P9icrNNLVDmD3bz249hHPzdnQS",
  "key27": "3jY52dtVqoC8nTLpgFtcANrPTia88YB1xJzmcspxmFD5ZzCCxDhfZhAJLaeiviZABgYvaZVEXdxyfvJTcT6FCMGr",
  "key28": "L1gP5hXT9mxng17dPD2n5bg7usJn2xkot5E2ZDVK8EwKYavS4di2fM4dMtxr6kdGvJ9kKonqCivaExW3JDiwe7w",
  "key29": "D2iN6Ey2X7C1psAz39eTck1Ks72RKMSKoNGaGpYajsqrtDWutBsEqWhuXw1gMvCoWyb9SfNRDvjBUxxVrUvyht3",
  "key30": "3cYVVf53LM35xNo3hUV2PhUVmcRJbg1YcFf38S792s9K62qtTB7STcWUEM3WsRVrxxDWudHmW8pmCz7rBCRGcgD5",
  "key31": "4YkCkDzfu6z4HgWFy815fyLdmWgYV7qfTu5PaW2U53SANMAHuFzixaroWEb1BkAU9YkQvPqqoVEG1ugHTugT2Hsb",
  "key32": "61dsJ6yQCtNja11TBiGMQV71Ue7n6KE4o6hGNtbhTQYwLUvUeCT5ConnmkH5h2dhxPcsQM7Nqv2JC8WWizaTAZQ1",
  "key33": "2vykrHn26JMod9UziLfJY96q1GAkqgaL1F2w1SAQtNGrLa83M92QwsmPXAvy6pLHGgAeMp5ZdFdxHzzSY1pQ3FM8",
  "key34": "MKMxoqSZSvxgkQ8cd3s6iTRiEnTxcWGnWsdBcB1F3rx2eooZoGCjsYgrRg3Y2ZmFtPwL3bdWkmaiZWQBGej8gJq",
  "key35": "kiPQ4qffsjRqvpTH5DagRwuhwicAXQdcEtNPMkHM2pAuas6Up5PPvVFdXb857wSyb9EjuRYhWkmU8QmeNgUkSi5",
  "key36": "4A7376YKrNnRwmiXBGg8GGTBhwXFBEYKPvxsFyFy38fDk7WaXoz9u3eXCTVqp5MrTifM28QwAshwpD55CZRrEU6f",
  "key37": "5JGCc9njNMFdb3aHSXTtmQxH6NtiKFKesh9kBJ7ZC4tMp3zm7xabPf8ZKg8qXJcTfGx1xAcRvWKd1meDJqSjcLbh",
  "key38": "4gxXmUmkrADKt1e4SjVWPuRu6eNi6T1Z32yvyc7coWuXaDg8LsNP8ZESbMcBxmheM44t9BmM8khXvRZcWi7fSzq8",
  "key39": "3HforX99yggnn1iEwzVwQnRGL4EwpyA3Vkp3fuHZi7t42sXatGsGXkFMqhkTmfku7rBN9ukF6kYPYyKSVHi4queK",
  "key40": "2KH9pSnJNxsUpD5RugNrzPVtiJUexWbpzdpexjwZYVTmxyAfVZx71Q4d5fUiYS1pyn8cwJqufi8cjJ2buyk7XpSJ",
  "key41": "3Acu8WgwUdGyFTqLnaHxteQ7tJ5JFjNotCjsEg9TabMUhf1K3rzy8jMMYZpz7ucMUTcC5wLK72zsLf29cZNhEyce"
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
