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
    "5y8z7whoWG5zLU5Qm1hmv4dAKYpPsGYmRgPFJjA5NPCwAyLQh1JT7Rszt6g8Er8hK88JqqH8gbFcTFCSzbBWyk1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ExW8nL8SwRWQMouAo8sHGdNFegGkKzTdyiV4FZ7F7KzkjeEkYxM3o5fvUrbi6ac2GZmu7CJsFwTqbmBbV89DRk",
  "key1": "4ysk9vAjUDbEq5EWzNDyvr7KBmEZgg1fXHEqeiJpceAuYM3MRnH4swhCMbMjp3moMwDRApdjuszTtkB4ivue5Uws",
  "key2": "3Rh86oQmaHTNoQbTHNJdQveHs8X1JEnY9g8dxWxEf9BXfjt5ARkQmMK14eQTKt9pGVLdYJCkNoSJyYnGiqfo3Pjg",
  "key3": "JqShJGyznx3hkET7nvoe9SGURdcXt2KyrQDUV77jZsMxkJ72wgyF2JPuJ1hpZwiLXZhGhezZgSkDKQjWJnBoPAm",
  "key4": "2ZpX2pXw7RxasnqUZuNgyC941rKLXiLG4gWVXB9S1YU6cngdceavyP2Skf2AxBuMeqUXXcD62UgHw8MiXuykfEfq",
  "key5": "2CoYFA6ncHjXyFrkKfEDVFA3bJorwbYYXCuXzsDsDh8iLqb47vo85fs14vioykiBmYoQ5kqAxR2VcU6MUKVh6ZF5",
  "key6": "4pvQ6CsjHYW2GQ8ZQjwmWbARwUf4CbygLK8YqUBpzvtroks6HMxk8eYkU2TXDa5rCd7T45gcJbqBKtsMtUrKaPRj",
  "key7": "3dvXqzMngUkDDXKnVFj5igw4P8G3WELNjZ5s1Adf8fKjNKgad7JzWJjk8RSZhjQDYY21W2CGcWi97pbcszZjXivh",
  "key8": "3vVKBDTrbzpzMxJ8xWcSR4jnFZaeJjdkvqMQ68jFStazfCQZJZVU3PA9L3tzXb7nPAf3zXS9diTKHTB33HxRP939",
  "key9": "3Tpr925B7RbgEipxJ1u5vLvJmCxVzKBbspfhjCo6JsDkL1DKV92befjQJtp85hdxwXoRK2VApgu7ax1D1zgKQh7Y",
  "key10": "352c6YfM32LrqaPqmSijyY9xDDztKNErTKtJnX6faWsGM4UtW5G1QTFv32y5USuhWuXshs67aqbCGVGM4VoZsRGP",
  "key11": "2fhLKNx4DQ1G9watQTJa5pwC9MsXX4a4Hj5xp4b6rzvt3xKc3PCNmS38jygffrZshjbjWs44SCGNHguEuczLVjf2",
  "key12": "3nzJgqmsyKcbebovgtAo3ud8yAKF2mmXgPLsgcC8Y78fvAzwrpH6jwRiou8LXhW4ChXpY8xx6tBDa1mFSesmpAEw",
  "key13": "2onJeuR1Rt8wTftmDJZN3tsb6s5rJu7bq8NHvfF4rnsqeMyCyHSnWHQ1H521qwqDB7rcukkKnwfF8ESzmuyvKgDs",
  "key14": "7aDeVoVHByG2tcFFYXfPDLGMELMvcTkpP2LpffQPbSshEuoatky9uJraWykuEktdgz8Rw4Hqz8ec98MCC7BcHWm",
  "key15": "2jS96meubFJMYRGzxGYLvtuCi3p1cDQ6zk3oSPSR1AvTiEsMN9QCwyU6CCkpks4i8NHgZW7QUbLwouUUAFj3fr5P",
  "key16": "xcnWzkQ65FgnzxufiZ5mTdimt4VDjHuKCkLkgEQLd2kRGgxvdoREHHJCNyuzNFusZB4tcqT8tCXZXspMuefc3Fb",
  "key17": "4SbGczztujz3QTwEbuudfCQjDQF3jfz8uQ9r4QXUAwmCzQLVaHba561YkJWyJG3Gzt3CVqNqytq7N8kGZdt5Lhx6",
  "key18": "2D2xAgBCAZRG88AnWgH9QmCwCxg7YAxrYy4NCmKWU1aMsEtTptbx9CazMVdvbE8VhXwqbSqkY6UCK69SmAfTrCKD",
  "key19": "2PEXGs18dvJiqTrcSbW75WryG9GA2yEuKK5zYWptjB1QHrAGap9BRwYw2ZfqjQ8DoKWiX3eeAGYBL6EzSX91Zgog",
  "key20": "VaSW4Sxt2eTUGu4ujHnErF7t124RSs5QrwtXsBxafcH2xL6SfBwwjNzZF9gtAtsGr1Fs1RULUmjcj9ZQQUFWHzE",
  "key21": "2hdoLj3BGvjsCDHm8ZxrFFSoy9V2mV38zbhC1DPJW3xTCAcWa1pf8mmZ2EmUPy6oe3PXEujcGi6kaewyFYJawEXY",
  "key22": "4kh5fjybcYAV3R9TdqdBQ99WVqpWfSGpvtmfQaEzX8vKNVvi2DXiWs7Zr2Bnpzaj8sGEuD2CWyr1yYMEAdom3BMQ",
  "key23": "3x2T4ACocgEuzUbrt1uWNKJeoPgxipSfoHowQJNjfhWfVr71vhGDui16Ete5muN4YbqysKM2o1M3V4aUsejMGPP9",
  "key24": "5FeqCrjgjcUwBBws2ysTxJyzy2QKa4tn6kGxVrsVC3wfhVsowb6Qr1zp4qCsW9kisW5wxV5kj6D7js1QHeFZ2Cco",
  "key25": "4Ft1GgZ1Rka9TCEPRB63pogXLtSzeatnzuLpKAmuayWAUbyw2TkufNUbMKzYMa8VHQ1rf86Xk6eaNmpb8kDpxkim",
  "key26": "4mXazCuFg3KYdH6XZvg8jVTtqRDXgXSS4KoLpDPG6XgAB45Pru1NjH5XTKyLAgoWu8aC8rF4PkdmnffjaAwGoVpp",
  "key27": "2qxWdY6T4TCaqmRQZLrxfLFy8i8M4719SrK63mgKPf6HucaY6yyAW8Nyv4tk9zgKxpCqYTPNQJYHpvrL4EcwHjqZ",
  "key28": "3DPLZPsVPU3VGwxCSxw7Gjou3DbYHjZDrKxLGZayE7ZvKGaVmtfQjQWtQUFcW3DHjWrZzR5UT92Rf6w2hKExn5jQ",
  "key29": "GicmTrwAed7HQmxVKK8z5eyK6ETcQNCGceSgfvUK52Gm8pfpzfXQt3fQZ1trau7h1amzuP15gziP4K4irPVqPgx",
  "key30": "5coDstFSECbDNM3XzAH8snsH64SD7T5kc1vZeWxnT16uwiFvTsCxN4ChDhN3MguHU85KMdBZmzfeZ31n9WZ2bbGt",
  "key31": "5LtcU4yUpg8qShkcPoFjDZiy1cpvpiRv5vhnjrZ4A3nJKw5w6ny9wPKDnVZXcYJR2fB9amZ7f1GUNtvJoHz23bzp",
  "key32": "335Qsd4bbxPgqjUuh7Zk4znETc57H1KTP9Puyo7Z2uWs8T4KYUddaamYyNth91mGkdvL4naUuizFyuLein9kouRi",
  "key33": "3PqzPD7fDHKkfpydrLkyh8rwFU5GyrF2GiyPCEmoyudnimUnj3cR4NwLGPzWp7kY35j1gZ7mVXa5PzQwEWRefZBS",
  "key34": "4eSrr6DtpPq8oSfyYJPTh79WchPH4MqEWfAo9PXuspbMaqsKPxFonuZoy6vX77fiUQxyZeNyJxeL5g16eEtFmtEE",
  "key35": "3AzYSzB1CrzDnjwo2tcMfryXYLbCYbMN2NSorFFjc8zPeZZqRkq2noEWUhX6SWvyzTinzL6HUMmNQY91GaETxXUx",
  "key36": "3q6XnHwvCdXbFmhVYjtxrZc96mxJW7LR9cGUeZ8uWWtXZ19SqP3mWkhuLq8XGdXJzGpXaSBp8DMH8eXWRceBVnzS",
  "key37": "5GwrfTsjNeMZceCkMaGSmQc88L9fNy5ZycvpvJ5wyMQmQLWyKR6y38YkvQiFSQQA4Y6oeYkgwDXiMYik3cSfQVfm",
  "key38": "2G15LJt5X5ijASocShktov7r6xEGFYdPeaYjrcxUDZ5qA7f5ERxqc6Tabfmx3PYKoTDxCh8P9BzuCYsizHBBqd7s",
  "key39": "VVrgYuccKnTn3Y3XpW6b9uUTQADMJza58aN7TyRbKnpbnLxJXB8ggWV1FhrLxN9VzicuHnrtT2woVayert7h1cL",
  "key40": "3gXzhux6chdkcwizqZTjCEkkk7E7jdbQftjQFKSJNn3ycfJS3XkWyY4XFiCjUZo23mpLTRwUidYwAwyjuzvTjVB4",
  "key41": "3wyDRmzgWfJ7CjZBdMFZ9B4F7qtMAhCstaSCYBAbWkhkF56oAFLwSjWqpXQeFmRBWibubA9SZRP4VdeHU4H2Tqiq",
  "key42": "2PxUzwA5Zx2pDHghhRNFvgGHx5gvDzh5jH4miHpfdkfBM3DEJSsRr5HHt87DoziV4YtGpYrDPdKZipzneEiAeTGt"
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
