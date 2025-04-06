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
    "28k93QtBrLoQsKBizvkhyKnZPiWZFgVudb5HBRMnWXrpAAzA7KkrqZZV7QXHNxdd2V5b9aXtcZgQJXwJX9r2bRce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kagRLSNmgKfAXp7fpT1hukM8uW8PXgvYgCEbqsW3JH8BauxohcRHskNFijK9t36wotnymoWxndg7dYPEvYZsFw9",
  "key1": "2SkcZPpYiK65ZHY3oVqs65rECCFgrHajnvNGDXcdRWCqfVNxxsGEMB175KJNWBbLcjq6srNXEDJLEZeVUtZbhgVj",
  "key2": "3HEvjChSd1fcw4uMT8JokvEitX8yywG6TZ8YJhxvuRWK9N89XYcFcP1fZNpRXUdium7DntRdy5KQeX7r8B9xXKT",
  "key3": "odYWYYy4ir16uqzfe9ztzR98QgxXSJxi3Te2G92uwzcEiT7zhLuT4Bg4gvbR4rdzEEugPfuwBB8MGdtor5rPGac",
  "key4": "5LCPAevq6hjFmPocqCdpkagoWsR1xkXe1A78SPNVxptK6n9HaQuLcq3eJgcJhyVVLLG9wk1A7CmCetneK9rkzhY7",
  "key5": "X31XViyNPc7oFA1VNXHXjR9NAYQ8juJaR124sKPViRjFFBxm4Esv84QohUX8PaZkcJf7gTKT7jUBSpspRf3tMKA",
  "key6": "3bibMaGtws2ACuvejpDEU5jzfzBxWtPZrQh8tQAfN1GTNPS5VsrLibo8PJF4AfT5W8qYaZiTXRuqHhDf496R88v8",
  "key7": "uCDaSjcHq1GRrAfvLgMuhULzhyQba5xiA92guu7juqj1qSACfytJf1uSXSF9eU9T1Q7TBzVtCjBNWYu5pShQ1uc",
  "key8": "2uyDaJWbJVsXrA816pcugRHv7RnMaNh7SB3PmaLMwNnrJDvcKUApibWRr2MLj5f41JUa3ARnT8HxW9Wz8at4Yvf6",
  "key9": "2ipmnTQsmwzFbXpzjYFKRtcJuojg8BnA8UXs1soxneZxnVZNMXWRmJLzP9cZC63yqpJoQySF1EhaFnnChx9TXDCu",
  "key10": "5H92woiByepBR68tBV25LXsS2rM6B9KhnJo3u3HJg79dxJtzwcjKT5tEFzaQi66odThUh9SiwPWEdz6zqQpcqUTX",
  "key11": "2A3SCW8wtCAxuZ6odVn8i57sa5KiRENdVtY8F2VdC2fSBGyqwgFhG3Q8AuaCiykWouTRqQ7QGoNyaJjvjsuyjTag",
  "key12": "5n8KGDZfZaww3XyDsqgsiHjMVFcuX9jzgRtjCv6gSLinYErNMnsc51CRApiaV3PBwKWtiq1LC4qZZcJyNkWMb9Yn",
  "key13": "pNgNnhJALSG9pY5nZKi2PHZazR8Pd1ghJ2DpgKwg6Vd1ofyzFSJg2SJhGCmoWkhZieYBABF7Tj6qQKxeLm24iP3",
  "key14": "5ZbVZW84jmrDctU7ahdrCtf2Q82XMoD4ZatXRAkiqksZDvN7d8h2hBWtF8s7xgXqEsU3sLQFnNN6UdyPnBvorAFn",
  "key15": "5KiVsK9NdMkv2Rhp9geEDB4ksP5juPVBS7BxyXEW9aVhrcPDsA7Jm18ivagzeGRqixnhy5mwbjJmqgHX8jo4NDsg",
  "key16": "4qHdEAQvGRizELDEEwRgZCYVa33jLqY8GEEaxF3rDDcVPWSgxVM4iiviaod371BsPQxsyWr8wXxRMx1SshPb5oZU",
  "key17": "2JpacmyiCedqVVU2ogseYDDuPyr8NNXC9EGZG69YJskLnh8QXBKFSPYbZpXoHKC4HZYj3kMkRZPPdGgNxZB5U5qo",
  "key18": "5QQf8XgRnJcicz3dcuYaJZsfLtiYKbotTum8pn2g9LgWxC2ZhEr6hHNHz7965J5yhk5ddh2QfoFp974d215geXev",
  "key19": "4B7SUc1rMSXJEcD4c8gC4whQjqZj4TzhgW98n8pMBxQxaLxMR5ZmFDYxcwQQdUShn32TBWUHgBC9vA4WtJ7ZhLt2",
  "key20": "3NzVKo59bLN5rvW7PqrQ8LxZk7K6B8dc1i2S7jVAR8ovaX3KnCT7aJsosV8wMbixQHXfmdJz95j1WKE7t5y6UBqv",
  "key21": "51WizKjr2eqR8GQEQ5peJzyRNimzE37FxSzyLKepzCEbGMmWKPctur9fBvBo7WuxjPNPwVFH7Utv9nsE7VKLQyDW",
  "key22": "2rx3K1Q7vsmUqXnwp94ohEoUHZEdThmAyvgKG3zkycrpbADsUL3EUnf9gYCGs5nbcCPKVx796RpBB9pj5EDdm55p",
  "key23": "3MdvpjhitEa9PsfkDWp4ubzs63Cb2GKpfmCfUEziVeuybtXBRRTNMN1JMuzTaEwFBWcWufBUJbQA9jFoxPC6fUBb",
  "key24": "57XvqbBLjPQczTCgMtukFUA6KG5QPZee8vREx2XM6HEqtJVZPQzaUkSjqy4RkGYSJ6PV7PYisoUXCog95xyECvw6",
  "key25": "3iqPjdjGM861xK1JKUpXZeukyKP4bwwEz7xvN7A3Vh3VY2prmCY8AeFRisxX4RKAA29yaSaS74FbDFFtEqm6LKb8",
  "key26": "314UMawxhy6WKeUqhR5otDjpM3tCp4Eda3u1DQ8bKu4muaMV2LTUhwX3qsV71G8FVXNfmGs2VS7XDXZLGaMNHRzm",
  "key27": "3RtYFLHCx6DN691Zg28zkrKUXPNAs3cE2AEywFAnjSFXnusfQ31aP6BPP17PHAuKKKa4jDsHf8GCyax2iXMiT5oe",
  "key28": "2ufzrgiKbsnNEj9zxpbS81wCrtD97UW1e5g6BgvCW8v8aqg1eHVWDrL6Nq6UWtbozh6wxCh3XdsuKd6WwRwntSX8",
  "key29": "2XvwAUASBqPGTe11Crae6hJqDz8AC76t87oNpe4KcckzqPvdbRDxjf5psmBXtzgtoBsxXBDarsv4Pe4Qw3JBYh5q",
  "key30": "46F8R2wr1p6YcqS4ANERJrLFUeKBMRQd78ABTzUM4eDSSmFfs8E3rikfysMzp3PKfUM213eDKnpP2ZvQRdgst6hP",
  "key31": "4yqfDk1XhodUbFkfn9bPinDLLSFedCLMu1S3EpQdNCTnJXZygCSGbEipdLzesKhQ2WzPHT44D8yHqF618hu5QSd6"
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
