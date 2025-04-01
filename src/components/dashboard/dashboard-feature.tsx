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
    "3VgTDC4GfW3AvrzecnscaSLnRvRL7ttTSdHedcJkKDncchYQqh87u1Cr8ZQppjvfRTsjKYB643fxJbvpuMLw9cYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tkC8ciMaYQfAYaU6it6xRmhpiBy19Fwf5paR5gVwm4tc16HHKNzeLziPSVyiogL35gpvjJgrCtyCRKAgs4L9GrU",
  "key1": "2nKw4FL4Z2D8qF6DgvkQyeeQSo19oPVGWfJaGXA6csXXv37P5mCvRRw5cce4Ua6Nfe8AdkYkyyvJHCXCNTMzMkUo",
  "key2": "3mZgWUGDrCu7dF5db2KqnJjDf66fbBKXpcarPMJ2QWzTvGcCXbbCsb5nbMEcEijm1NudDGssoGF3MQHZ95tJJowT",
  "key3": "28ciWtGQfXTTeR3wrhw1sgmYoVM1mndb2Z4cemBRaT54YWwvdngzw7PfvCU6oqZmMsfUyHypUmNX5Zq7hv6z1qKf",
  "key4": "2ZwhkQPJNorLuw4ScoVgeukrKhS3PTunQAyeVw8Q9zmZ7rU9abadLoXkhRFdKeC4bGYnASS8fvYdCXM3LkdkeEsc",
  "key5": "4Z1Ugg2611aRnXBaJ7euwbauKhbep6hu2N4obcQb8dVwqZpqpwgdaV9Riqr3EVS59NzUqmqnntc3UGYSsWtnZCcg",
  "key6": "39jvFMSnEPFuAP31rgueCUZxwxLSQF8bh416BzyK4Nva1d7ByPxCM6v5ZJnhXPAocemhqUGsewqdPNewnx8gL2Xx",
  "key7": "2dk4NC4QQ3u5baAdCTGg1TSozSVovypjzTqxn8zhWb9JHKAEWDLxZB82Je2hMvfdaWEUjQtEVgcLbRaHdope11DQ",
  "key8": "3PWPD1S3UYngamJ4efPpL6ZNqhUYPrwMukAmgLjqsvD1smqwQd9EbG73LRofSp5R99gdXzn5ABaLBN57MYxVnYUu",
  "key9": "25KSVixTNqp15n8xpawct6Kdh3HyCPGoJhRA7rZQGF8SL11a5J92KrBvqBzoLzpL9QoVyGkN4fHUdVQJd2cv4Cy2",
  "key10": "3jQiEqJjvBg2NCWpBgVv7NEiHqfH4skSCMNAWHLfBAcdsW5FK7xtwiAopSjCZtRfb8NqqNVfJnxHCd6VdG5qenPp",
  "key11": "4HgVpFNn13wthHjQBkAmu4z6Kq9kKNkSkiByTEdm4Des8174VpSRuc3CjDJpFUeeYTnEmiFgcPcR8QBcBsrXqSNC",
  "key12": "5f2gDD4J5nKPxkqJkRDWEnAFLsi8k1xP2WyAbwLVEPHFb985WXEpcp4kcAy1uJkyPeATVf5tYMEWmWHavs3sEy43",
  "key13": "5ZkBTWN3gqEo3jwUemFN7uMJo8crdsCmGNFyDzp85E18aJCAmqLDxABkef3zdZD9MkkcfHDKHQizQuhQQ3XdJN8i",
  "key14": "4nnykd2MPhg8WYr1LjS6WLpghEvdj4gSnHcjK2Mxf9CJHQThV41NhvqfESW9vQzEjjzy6hxw4ft3E1eif8RhTHL",
  "key15": "dHFoX4a4uRMrCQtTFQPWGoT2QwJ7914bYe1tomSWXQZAmbQ3BpqzE4TGR95XDdZiRYa7APFZo81biu3cJKTzVon",
  "key16": "4KqzgKqSJmcmQYoY3NMTWdbkdzbDJveLfijNk72SMjL3RnqaBKZRRYwwnzkymnNzyRw11ddmMQzPxPvJENiuYz9x",
  "key17": "58hB16By4zQhRQjfxZW2THYGuCozNUyNzkDk1MMpDLykS45BApYJbo6vYhsAiguWevxFsSmPMe7c7GxkX1FfP5rU",
  "key18": "kmiTipvXr2DtLeYYFpmRG6jDadFJiutrzpeSoK6ccZvPn74x1ydRW1FnyqNUjumtR5JisqGfz4So1sHufjEAMWP",
  "key19": "39p19xYTW4LHYTaEabb3n5kabCtEGW76sUvKFnK1p6wHirF3YKxRBkfnJQfNfiYaNBtcwJDa2oC2JemKWGC5VTWs",
  "key20": "3sxGN2pk1WMGwDcE5wFFDDxyAGFbXhac7ZUMwbCkNxXhJ51efuwYmQ7wyR2Y4LDyYCtAtFKVAoSVWHZzYdpvEP4v",
  "key21": "5WtLgq8sYcZGH6nSLDw4Ks7AE8FRPxJp5bUmQ2zHXsVMmLchUTKX8tUM8PkWFS98UEKGZehj4VuLuS3JonPyptRE",
  "key22": "4sf1JFV3grjA87xcG3c2i3jj8nczMn2b1GEF35Az69ccVhBdLGbysuLLLg8MY5KxTiRm1aXnxH3FMgQ9mCgxcE6o",
  "key23": "2AkFcvXKgXMStbKXVsTjP7FBpAgnyuistYjCebUyvUoT3ho2fANX9wu3Jfsvf8cPRvP6N3eiA4DUgmoT8uWoEKd",
  "key24": "3NeHg8rkDJnxjMc22E7GUiJGae4emXbHXvKPJDHXWPZgd7i4ev9e3UkLvE8sZgMzyHMNFUSnQhUBTj6n4BDYyeAo",
  "key25": "2jN1rrt9hiaRQ21Jnuiaa3yhT4tdxtgdP8iNyZSds5Pu3DXjgjyKQbvjwBcQRxXDusRhzcUmzt8XHgthGRM1uUsc",
  "key26": "5TKDWqtqEeyE7QpDt9ednHzQcPfmxmhtGuQfctKqbJgnRTQ8vw8C5jVuQngZWrGakx3wErmcJRa6WhrUyp4h2mSH",
  "key27": "4KEgJ1DLLKa5C3LVhHczkNXTsXKcfQ7g9a3rMVEhw8JedQuzrM3HhwRGsJ52kWZer9q6fYbZb5ZFVJwZUTaHD45o",
  "key28": "5MgEoSkbdmYRWBL4kGnGg3EwWNzJb96rnismnKSF8VznbxBELaiZPD5BYYcrqW9bW9MquNKFwJzvmWHwb2jhV2ZG",
  "key29": "2vLKegbCLfdBSV5m1vi7m52kGg4D9RJhtszEtt5roxQ7JcfTDQXtg6CrKjipAr66c7PdCEZ65sAMVrRTFz8tynTJ",
  "key30": "2wCGp4C5RQCiWL99pspAKtuYXbYVtKxemz2Fge7KUWcRyPnpNwBd8DPcHvtx1PM9k7XP5W6q5CqNbdxjW6bMUiNt",
  "key31": "3vbdzQ417EWnfZnj11gJZVpGS1pMLJD8BM6fXUiCpRhohrAzHf35f8kLMaNhiUXGSYNWPXMVy3eH9xJwUC5Axpiy",
  "key32": "5z3Z5VbQGUqagCpkF5tsTFjskdoBhgm8LEiE6UadJd7E2wvgFiyEWzZkP6QmZcg5VMin7rpmqWiCs9buEojHK7tg",
  "key33": "uDdJ4aaXwB5Jnysk4VWFbp22AuKZbAGcHCH7zQ259hjSzjCyAHyd6w5UQ7VyQKiRnxN78RzgFbw8YZQbZKxTvGC",
  "key34": "5oGyRDUK1bGJ1m7geR1FmQwySpT8bPKk9fY2X7NNanRrTiTQ2jc3dZAHLcg85zwyUqoXUeaWA6zzsRt3SAau5CbT",
  "key35": "2FGdFBor1EECm4fvbzAEiVNtZ6kbtDrJaq4oJfimRsaq2qsFse6EUSVLms1TFt5bKADB2ns7yWLg3soxSgb5BVFB",
  "key36": "41aVeyxfW4pedCzu7rJVNon8yJWpytLVjyYuCzQ39tM7gcbLnvSYgbsof5MdXaWxnLYo7k82AtA8uJSDcgsdmZq2",
  "key37": "5E2MNYe7XKYxYVVqp8CHXBsAcNZ3kmQ7baQM9QVMDZEwQWMRRYF6QYSPEDhrFUtYFNkxEHVuPujPnUvcVjLBYGiq"
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
