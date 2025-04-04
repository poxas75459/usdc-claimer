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
    "3sBB7qa7mFFfcJZqZSkSFhPMLBG7pWw9wkUE824JeXnnJMTwkpkY4rjrvHW4wzoPoheZocje871RJc2FSewmSDqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K8P3Y3NBXU86WdrNerYSTDraksHocvppYQcAyS35ZUQaHL7Rgv5vRziqR7wzEUHmRZSvaEwUMCgggDGqQSQMraQ",
  "key1": "28ZUrqsAJHKRqpHsiHKYqTyZgN5M2VjPe2t38oPg4UNPiJXPuHPBBD7AZ3FMvGpF68GoyiDkBJ2UZtLdgwNMCent",
  "key2": "438vFVX7bZaP8nfcG1ftbuZLroDEKm9G9NaS48NBksAFjEePQinfDA9ijGh7xTRMZauRZm55EnqdsRgtbJMyxtvf",
  "key3": "5sKTQUQkvdE4gooxbofZ93dWQgCc6QtXEX7VTDQUFiHugtAmg9vUffJT9r2AgvfMtQnrds6c2xsPboxQEC5exwxL",
  "key4": "35vqpEGfuRcuPRTcmBbL2a2d7Rv61qGbSjZyvk7BcYjBU9wsBkZX5ZsQw1o5KLWyVNz9WtgcREnnz24EDDmS9miE",
  "key5": "4JkBjCSwVN9YcpmU9aBSFDpYHptg9DjmmiAEjksW7f8inJkWV7KQD9kcanYc9uzjxy3xtAU3WKNGrH39mt2QQ3c",
  "key6": "2DJsZdScbpK2HXnaPKpg2e4kQBBLdj6PEYxc6c4CxZSAGp92rRdGa3Jwe2SSgiY549YKcnbDW6GZNQC5JGA9ezZB",
  "key7": "d4f6Mg6uPJDKhHsCS1q94hpNpLcNLiBLmFnZb6RiG3RKEGcTuQyXKHpq5pLJR1696HEhKUEQRSRC8F94QobXMmT",
  "key8": "23rkxeVEcqNkiqTxaZRSg4gaYmCStei7VRidLiUbzhoohpXHYq3k8cAysiH5rebF12ouLp9gbfaUPmCKscM5zqW6",
  "key9": "3VV8tTD1HjpEAvd3HQvcnfhQPJjMfbLdACogacK18mr93MdX8gguEaF72ZkZgGTQocubeFXXkBpTseH58T3abB53",
  "key10": "3nSj334fmq37NNZVHnxGGVjNM3Kb3ve4KfeNCatkk8rogDNeShjmnp3i1tpJgrW4hprrnfpZB6GVBb6xSMiXrooH",
  "key11": "3zRCHtMZiJgvGdc1QP5Lp2T8xgztbogTdKrrPjnY6C3Khergyjz28NonesR47mHDEoyVzeditLCvupVy9HSqtBW4",
  "key12": "5VP4W1WDmPprTeTMmBhURqL3tuWMtncAua5MZbiduZHK4SxFD6JkANYd8hMUTjX3VUevWicTAqpYdSKwzpfPMtRa",
  "key13": "2gjod3w3e59fttYYPA62qFVqCxjmbEWdJx7gJbnmCmMW5cS84Mm5r3g2T9s5dGoK4o715uwNeddD2CcM5KpLqTMT",
  "key14": "45gtNxMc8fJiL67bEvzRmdeoShf4uxktgxCqBnaxeDPcWAjdmpvnLfk8MJ87w9wM8WnN9ecm4bQkdomJSVekindP",
  "key15": "52CC1xwgdQZ9rFSVzEBqtYNce5LNQNnfQqDaZwxZCzrXp3mX1A674EnvfxcTk3xXQwwjcWDCZczMUWB9U1yDYd5u",
  "key16": "D5327T25vrbek9i3WJ8wNyqGLiymhxTcxrGMJhK98ZAaX3SMNEFJpWufZZ2VsdRLtfZPsCJMjxJhMBiVrRt1hAw",
  "key17": "558JzLqPTPF6n933aha9BamcFs8VuhfEo64wCULwW6sEvDv2j8S8GJcxpyxdhyxvXs6DLmtoYbcuFhkPbLH4Y7Ah",
  "key18": "5vdZhAgjAZ3VthRT3u5NB3RRGUWyFd9pdgT775NYvMvbw8HWGgtu9AhmM9RKmi964KMP3CuvUL4JTcfwfKK3sC5c",
  "key19": "2D9vQvabwYkzm9E4fQ7TGJmBsdMsJQDRPrPAqytoUMrNBwyevD5cf5NgUdRRNiZcZRwjmeXUumCKecZDu2YS634u",
  "key20": "2ai4PAF4JCjxMwPxQ3VhtvVyzb75bSW2dL7MoWgYASQ9XQUQsYdNoB7Wi5DHP3o4jjZ5gWindK7gLG6VUEbjfX5D",
  "key21": "3MknHrc17CTQQkWoLvCjttBfm8hKU7kdTQ9y5yfig6zWMkigts9mvdyGU8SYGbrcqwLjP5qphLp4mQc6tq9B3vFF",
  "key22": "5q11DqegYtXnYbxL8itmNv9MBesrVLfGTdXcyxdUvQRkg5qiuyG4DKwhpdcu6h4i7o96fPjiCJiWcbbeYjJWCw7N",
  "key23": "oDhGA9uNSQxr43SFVTmD8te9mzbb1ipXQrV3DtjbJoHYxs1zEATC9VMCSyGSNB3XnV643F8918rjwgmQXpyRUB3",
  "key24": "3bkbHTHM1JB8KUCXjG2LLrPvTGBwrcWrMd7WuFpMiEkkYjVCJYMShkeePnqrJBCK9frcf35CZGYEwGrkUutpEMEo",
  "key25": "3SxYU8zvr6tzudaAYAvCLL33REppfXf18o4AX75iDsrb5maoisn3DKS7WDjKxCmnzvPiTgUxQDW7kRhztAxnZSKE",
  "key26": "2pmAoHK4GFxT2xWjKt6xmEtk8cQY2A2TsqdgygsVDwVxENpS8wHFxCUzzjMug2jwtwvbNKBTdMRvR4K9HbzPHkFA",
  "key27": "XwEQA1GQwAcRhQ6paJoA3GZwAnm3EWC6mWiivoxH7mU8EU1BQ48mzJzZW1Dc5JkaYbWZw1XWiFBXjymjPTXvgJu",
  "key28": "iqLgbuukUexSdYxnpGqY3U5R32sefS11MaJoNjjMnqnQqEoKFpDAoGNwm1KapbhcbuecMxN3exhz24AjJqyswC5",
  "key29": "2CodhP4U5sBm8QNov3qsELWTL2SCFYFnActgCUZM3Km1zzrFYesddpxnPPhxoH1ZqD6FELsk4LHy97BfVpvXm6Kg",
  "key30": "5bX3hYgM6eSf4qoD1eWZ2LB9FSDyjzYwnHghHzTqtbr4whZvsDZmgLALqX38CB8yzA5NKeVKDeY23CavWbXjWNGE",
  "key31": "ZKjscM5sAemifoqQ5HDWg34PV7DZ3MPuj8pwLQeEqNdLUj8kws1Gi8JJLxNxHgxLYKhx5sV5chzr6TTnnNh7edj",
  "key32": "C1o6S8jaQbQ6nzGPE66ojLnjYskrzzVWApjQ3iSpZWUNMd2ARJgwLgQoGbSqgAByWmduAjxKiiiScSwz4vHktsV",
  "key33": "5CVxBS8W5oq5wg8ep8GQGWLNXtwyoYJ5ik9hXgt1v2z9tHXbphqHn2cU8HMqpiqtEaWGSoHvMq6ZfyKzFNQ2mmds",
  "key34": "21XdaSJJQep7s7RqKmFzG2zgbhJbNaC9iTdnfpb2GTLKEC2DvvwTBndosVGKeFvV5cGBASpbdPpqMtkRAFbu3L49",
  "key35": "4HDNL8fzXvjJ6dgMWizUEMVSdGRACYNCYeRznrs6Sc2LCctqE4ysjUUNnKXZCjezvb1ZSwKevvFWdmSYbF95n1ia",
  "key36": "4tcZDpo4Arupv21z1B9hhC7k67cEAVDfjrdYftNAmyvCudhrFNiY18g72e6DRC8ou6UUdga1XLX7ZdKctS7Xy2X9",
  "key37": "Q6GWNFeuGbYUBjfxkUih2BZFz92NhKFeUpd5u1Vdrdtz89xaVgNzsmSyFt8ApMjbn1zTZLf7m4e47dfXi8zGfMu",
  "key38": "3Pw6cWAitfn7idCcwUDVysw526fmRcQz2Ni6vViWice4C8u9mgFfpcycjTCnjyQv9rwpvEGr7HPTKFATAj3QidtK",
  "key39": "59hmkw1Sk3PPCYhJfQTNeWKaXiBQWwWWQdcWToJEvHVxopxEmXePsv9cfxdiv9DdiJ9Lib1cocDKsQdgtMU3nBHv",
  "key40": "5nwYpYusXGJ4KewcpQfaDoNYeG8pzmECfEQ4mW3frt5kZFVbdXAtunmqLQAxSBvwk2ixMtXg3ArEWzeLhY7zSgWF",
  "key41": "5ymURTXmkGKNjJzQdp6tr2AZUFHp4curhn3NHFgZdueFNMdMfnVCiWvGJjsxG3sb88w4xWuQHpojkVgJJhBw1gtA",
  "key42": "2WkB1MqB856dwQtFNT4VX4qHkc7pk1k9nft2hg6DWwTa3UDjfEgv4dfZKgUwpeW9nA72BmXHHmvD6i2ciHtK1ksH"
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
