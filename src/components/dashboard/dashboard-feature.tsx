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
    "2YEsCW11FXLKW89bMCKLheGhxDGg8WtKK2xgbYqBHre1DHQFVeZwG9fSFFYbYmqnY2xxZ8YbtQUox1gEoYT76NUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33ZDi5aHkqBps155qRYYb1idcU5A9bnDKdf84QhScvNr3TyvxX73KjatFUZoMpbh62j9NK5tT3hJnf284z2rG5aJ",
  "key1": "3ypfZJfDUm7nvPJk9J4uvvb3UxWkyYhZiovWNwxHu8ALmEehBQeE688K3DTh22jicAXqoenXxBhc79CELjRnk7aR",
  "key2": "2cyiTwWyGSvRKDDAkYXRP3GVoDUsTAsJPuqyYRuCjw4wyZvd3dez2K6cgDAiTh1TdMxj1F6KitqMtePCYYbN4gdw",
  "key3": "jVRK435WgodepTuXEu7vgh7MW4wHUjtJLyA5NCkVFFxJVzdXoPGzGsDpzrhbUVBfRcYd4Ge5hFR4wBfRdKFKrQX",
  "key4": "42iYKXBgbfj9b6H58xdHNvPWP8pBAKaPF7r559VGXnQHvzEk9Y8MjsfX5FbyNJjxwd4483ArrS168t8R24mgapgP",
  "key5": "NgrZnFJjp49ZfCiSHTDkLzA91GxqpUyk5eSTCXPR3iE5feLZL9YZQbkXH9j7epq9hc5K9uTmw9pFTLrUizckBSV",
  "key6": "4GxJTjyFYxZsQFK6ZATcupsbpRzGhrRCozt6oikMsPGCj4ucKXdaWCMzYJxNKrKwhk8rsyQUUYN1UhZQC3RzsJSN",
  "key7": "3N3uYUYe19FUHy6R1Mjr5ajQ45a6hjKfiqmVguxYwfjGFGXr2mPo4HXepE49dDj2oD5yKSxEgF8NTiRPvJL7oUnT",
  "key8": "4UX1tDGKfHGTZxGk5RUnxFvxAoSCgvREYyf8EDuMB4kcp83Q5NKuHip2jpeZjCAPcz3tWDLiaC4b2Ln7vDzQDR1w",
  "key9": "4jqGuuoFXJ6HeUU2KJuuxRaukknEmJRXM7qSFxwvZwLqhBqzDUCh2zMrrwmdcUKCtBs8UfyqUTXHzNLe6jQegBen",
  "key10": "j8JLSkqGVWJ9oDjPhT3x3QAS5FXkb74vK1cYNUBi48Z8u2sRpX1fcQEq5EQp6Sm37oAqMdiHxjVJorY4LRAXGta",
  "key11": "jDLL8KhYFaJJy5wyUtWtXqRyaXtaxyKMKSzutoPPsGwN1VWy6myALapBLU4jR6u7t6ydd3Tkf4RpaW6i6rCpdB1",
  "key12": "Y1QJYK78YxSd114Sed7bWDdceyRz3F5bDBVgXEjjRHzJuCLTKE7Xfb4n5aKwvgrvwAuoPuytEMaabYULy9bqs8t",
  "key13": "4StzMLPUCNkXu6ndociJCbWDzfrEG4PQA1PNHLKwdwXQWWFjJ5TueWfeQAtPZ3zSZBw1wkSWpe3fFBExcnJe9zNs",
  "key14": "3VmfSPFDwvVydtCYFfAKKguZN2xecfhYk2zTk38yPs71D5r1Bykru8ZPwFhkENsK94GChLGutnhd45jPRaRM48WS",
  "key15": "Zynrtdnx6fhxwpqi37cybzEcYc9JT4cvbQfj9b1sGtNxeoTHoTzx6fpX85yyK2MJSGFVwXaae5CExXWkBBNkNcD",
  "key16": "4C4a7z8uswRo4RPAeWb9jWGJASXFcS9DF1WyWuTkJQhywM3vFPwG33yhxkJZGwi5kZ3YxLNDfmaeNVjV1EaL2Etb",
  "key17": "r8gxgbVi4uuQ64LKrd1fpCDozmBmizkEa2fHEHZRs9H8EWknGYMChzYtpfedxNf8F3aVNUVP379n2w2ejN4VA7n",
  "key18": "B6m7EKDJByY9S8YcTSHyYe5Ef4jUvLULooSyCeGCy3eAFo3HLgRNtRqWEpvr3YznKTWXVpt6e8qh6LeJjKG3KcA",
  "key19": "2REcapiJrVSAvQzuvbfmAETa1spthtqFSxiMJKVd58uiaKUTZ4pSUDotvjSwjHvheYn9Nqw4qWcDGmgkrDC6AL5K",
  "key20": "55wqJ4zm4PwH8HaTDKp2vXd6Kdkz4KNJ5VnxFfPRv9QeYHWQNwz2nbL4z6BaDA8HLVgrXU5HLkXZfbUgHeFMfnMg",
  "key21": "5Pum4UUJRnvvtW3jRrcrRKNnMEXRfqbTxwPZHhw39gsB1krmQADZhBM2akdCMVSWjgLP2JmgEt8EEeWNfUeWZGbu",
  "key22": "3wXfMQwQuyWQSs2CDZHhNdzeBFtcoYgXaHMK8aAVqJGu51o4R85xUScjvyJeUKwyyYiHhQdU1DNvaK1UgcHZKgGx",
  "key23": "3Km7ggqRcPPp4KnyN7e5SFTkHLM4aEi9rXHn5o8qJa4YUq7v95i964EqivRA9TzohBYfyxKuVVRwBuG2GPN6kN3q",
  "key24": "2VfSZxokWVDaCLQFPoPT4MaF6vehAoN2imN4dgHajU3EzHXSQmkptnemW8de78J8RPf7VkKsYKmsKEDtyZrx3FCA",
  "key25": "4nnsSSPH3y381saY2hghmRKT4osyieUf3dbLrtjZxedNC83hMkGTw5nyJnjN11USB6P2tHcGdg3gQJPzFi2j2Hq7",
  "key26": "XPioRaN93BHhqGdVUtwMwHv2E7NWfNh42sLqCzKXFKmfhzXm1G33df41ro5EDJUHZy51Jt3rebVXKPxRwMDVrZf",
  "key27": "4XLhf6bmY3n4Npi8B7kYJSjbb3aHpfVX63596qJTLg3AKKfp3FjuB5csTBuL9G7oeJgH5wo4wgHzRraug9vopeQe",
  "key28": "62cfdKysFpqw4heM6VYn3Rkv7k6kaCdhCS2cQrSdvL7mHaY5Payo9dkWKfKpgS93ERt81ZwYZAcD13VgxatshEmY"
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
