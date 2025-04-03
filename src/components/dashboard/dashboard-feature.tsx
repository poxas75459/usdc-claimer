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
    "2PwCBEJZRuzycs8djLfxTFnj5FHxhE8dPnvgRNBWASCdSZm9nzRBFjVk5G1RRrVntWpS7U9eL75Yj5gVmGEy7wxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hg4f4goe3RJcqDfRzMpjz2joaHfFvp4t6AHDQFec7pX7jBTqEB6H2jecam2dEeX6cVdMMKCDt4gxpSRDKTnCaZU",
  "key1": "3J8A5jvPnSHwxA9a7PVxEn2hsgJDPdt7MmyWkPGpmyCG5asNPkAGXTjc4hELqH7nwCSUcRoupPTTYESSdgqng7xV",
  "key2": "65ibzkrse2xsEsTrUGys997GxqXK8CoJ3kZ5TiqTDd8tvinNaYNwirbFoDJahCmFtgDnVZMseRcbmkbk49rLMpgR",
  "key3": "48Y6wnz2xjLMHDpwAA59w4RGxV66Jss113Zg6QE4wD8iisacq9unMmpE2CxvmsBDnRWN61nEXP6TyHbRzJzNXp9g",
  "key4": "51S3U5DKXXYPadXvhpRcLcVY91GLEGnhinFw4fuJM5Mwr6noh5hyJbsq2tPrD3iLvsJP5H9ocf7rXQNmsrCD5XFU",
  "key5": "1PWvPdnXWRW37Rvn2zbN9znegjs1FAmqLvZ4K6bMqeQ1cBGi5L4o23uhqLBDwE3SmMpDzDNwB7T1Jeu892RXfUC",
  "key6": "B3EJSAnCULzzsMKbRUqTwEbV5gg7xXzuKZiCn7jsiCFsR6VTSnJfW4bppi7MRyUtYQpeMiqJ8afgT8iNNiK4dfg",
  "key7": "gg24VQKdSPCMnzkoFP5RzXwX3SVEmyBDFVcQJouLAQkk1Vt7hMKnDHxwmfEHD3wycUMrMjoAV4HEXqcA2uJcCrS",
  "key8": "9aRJRaPcUtroJqrFUApRoZKpgaM8JexGAQ3irvNLwxNoJMyq9c3uX6jmXHNU4ry23Bw14WDgMc2oLneSYaVx5V3",
  "key9": "TsXvYaRuhqv1XzmrWR6DN4DadvkVCdSgrE4Bsf7uSaeJhmLtZ434EiysvFFDXLSxhjJCAEbrXysEMhbjE8iteJQ",
  "key10": "4YMJ8Euns1C96UseB6sMZEnZ2rBnpvXao6sBNN8QtTqqtuDQiNfb8jLJmekTdWu3yCgj52HujMG5CTWz3kv66uFA",
  "key11": "2ZjLjXjLjuJpSi4dhpXCqUHT7V5MCEQZFcJFaKg8FPcdNqkVz7UchTKN7JurzMtK8RGEFbjVFGfQHwu9QrqsGznB",
  "key12": "AsPMhbXeoSkuGyCi9wf4mHHUPZ1tEGHxTgQKRqK6Wq7jfnth73PTWibAcmbH6XQQ59NUdsZ9F5eCbD1gQAWbKN6",
  "key13": "2UdFmPKS7KJTBQDsqWuf7s9aRP3JgNZGQNZdUsQnHLjrMwxzkNWzxVMwNNmxE8EJPTpoLmVQVHbdqvh2wffmeidz",
  "key14": "5eGGuWxfr2xYHnZAA2N1tkn524S7NASak5MNc8pvySn2yWo51VsMhf88nbR9dJiDcverm84XxL5dYw9ywjXs9Mk4",
  "key15": "37VgPCujVD3KcjR5qLUoRtPQmJsA3wBVNLZ8BCCKmqyX4HZN5MJMYg7pkbFey9dZL1NeTWQNjR3bNx7Fc9AtZeAZ",
  "key16": "k2AwJkvSP5ASfz4hNX268UErpeTBqeS3ghTTR95DKugkGvfoZHeEWSmuAJ2BZoUEZCAz6pga7onvz3P8phzPt47",
  "key17": "5grMQZg4ywRjucnCVaRjaBdiKyXge22R1RaizCJoF4xA1SRqbG3wWSF82RHDi7UpEUNU81VsE7nTVth5J2wYs8H3",
  "key18": "2P4toQTGnVcU6KjNbM1KW4TTeXQmeW36JxpFfuWuMqeNyydjPSyD22u2Jxbiqephbut3m3xFdESa3ZqGNjad1dCf",
  "key19": "5JPiumU7uoaHQQ4i9jtEjhoJncmFgzexe4xpMyHRkXjDFy7sqc5ivMrx5eCu1ifLrEwRJoc9WFo3Qu1sDKZe4C1r",
  "key20": "yHLamQreAgXiZj29jmVFxaD4bvRZbrHfBjWVKREo74cob97fREuUmn7A7E6WZsCpzASPGBT7ahoiFZa6rnizmYq",
  "key21": "5j5JgGDrfnfL9Lc4MPr5zRNpzRphpxTEfiMt4qxKrLDvXAd1yDEiNCVRU51fES5tUkqBW3Ma3yqmYp8pgNtKRHqy",
  "key22": "epqZe3aRnKK8HSbkAspGyRHUbeVnRAXa2QtwwWLgfhVtpwPwVXiWDMdp2q2WRgifQKGkiJffCEmaLyXuNrhawsw",
  "key23": "3cVHbV5xFUcdA4fdwiM1EpgvFWNGjYXQZCfyAPh2QiGPdc4X8gAu7qFjp7uM94G4WWpNS1zUZqyF92mPFeznhdzn",
  "key24": "gnxBEd8L3HJ7p6WAyDTGyjZDTn9qZYhuRjtkrm92sh2oPbHz1n2zHD5N1boqFv8U33BPcuztjvpJHgdCZSxwMJC",
  "key25": "3iJJhkWNvhzMZ4wzTDodynfCtgKEQA1mY2j1YMgYUkUmG5DfiN9inuo6Uqp3VqV5NkVok1Gbz8xne45xQ7UpLFNY",
  "key26": "rsFEpV77v5VezvZ97FG6UfcY7Majp297hg4fSzXcZtGaa86wELDqeyykSm4nCfc5Cvc6AvjnQRsEQRHCnoKKhEh",
  "key27": "3qzqRzb5Wh5G46wtqJ8TLyK4WHqkhytimUzjCHfha43n97NvXAw7reHDAfjXEpAPaWZTZUmWvvQqdbdk8YShAHh4",
  "key28": "5pNf4jGt3Ne2ZoxSrNR62GPdo5o2Ts6pS8YopCuHQWPhY4QcudzngJaZTx2vGujvABi71gUbjvfGNhU6NNd9n3r8",
  "key29": "5RMivphFtF6gUbQFas87MzHMTodnU7xbU9JjKTc8Tw83DH2dutfbQFjixLtCvJCxdthK5hpD6HsVGwRhPzGQCuz5",
  "key30": "3BkAiqxazQ6YsdMDLWZ5zEMXokacrMHcUk5fN47FEHhX1spJa4qjgvWz1noEkTuJmuihLk3RyJtYXUhMRH1rKxQL",
  "key31": "5jpHTMVhFR1cGgXvToHueRRUqVCmyJ73FFaWbff9wUCscpF5LLcgVR7GsoRn65SvsfNnMTR9qDUyNX24b7LhNvwT",
  "key32": "xhzGgHYcnPQ4W7UqnoTvTRtnDqrY6NbdLvAW4Sq28EeCZxj9DYw5V8dKtoueA89Uzy5dSdvDBeBnSmpCXSjUKZj",
  "key33": "3nXZefTaREH2oPKKrCasvDhQphfdxLWZT1NGquqgTfrUg6LVHwBcYCpg6ZkYRumR6UnjT6291yRzyQKTXCioqAS6",
  "key34": "5Uf1uzvH2fn8FGXQMqSZvvVt2Znwsty3bimHtEuB5aTZzCkM8RshfivJMCfoLA7xoCsq2fqqTBf5WKqZfiFqJBBc"
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
