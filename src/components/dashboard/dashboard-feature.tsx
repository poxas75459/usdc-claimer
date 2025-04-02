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
    "44hLLJ151s4gt8gsoCoaLH4VHHr5dvYQue7PmjMhNTqxgibkWLs5ehy8gueA589yNS2yiDLSYibdZo4sYoSN7vp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XeEzQuNbU4sd63SPpF9RTVWd8VZM17AHqQ7Yj3Z6nAaFwTHAeqBevpvmKrTJ5ygvixnZodkjv8R7yAvNJ1q33Y5",
  "key1": "2iSuDVhLGo845qwbzqTfDg1vceNVgocu98pmkPvbwvvdpqKNQmZCqAoKTvpAaMgvyvhjXieu4hgRSvgghf7QHXFm",
  "key2": "47mLCxdUkCy6r9UNvLZKuvCjR5LS6zWoXSCYLX8JzZreRsyRMikWCiRpKrjhUva7qT1SU9TMuzss33NZpoHWydeg",
  "key3": "4hPmoMpMrCL4ZAfoQVCmhh2oSs1b8gF2xUwLnEv2pTsnZJDChwivaAJfuSjaXWfC6LnaZooDmFpoiJx4vuTtaVh2",
  "key4": "5CeSLeuE29pmFwUJhuP1wJT8CzhKJh2EnCM7GG7fcxczwqgjsDTeDpzEPLAJCGdbLY3kGEEKdMUWZ97YUSA1xTmE",
  "key5": "677tW47Ukz4SSmWVmFmfhZbs8XUU1ZeK83f72yhkTgEcs287tyKkXYPZe6BEZKRR83J8Rg8io55nqwZ9SmeUVCp5",
  "key6": "zbsB6s1nrxjjkDJf7MNY6FHnVdzHHqWw14bWMzFzzHo1sgqbc9NiphKfrPAA1VbYu2fN2oqr5mGHvvqHvWAQhSx",
  "key7": "5nxfrN8T98ZXvRL7qFmfSm7jkKSNn1ymtZiHMdYZRNz7bE9j6rnhEHq5ZCEpwSFxrNvnWD4RbD7YmFR33wwTqCbv",
  "key8": "54j3mbwtpxGZwoVR7xUaEbjBUx6uUDVTUWuVzesM3F2x5kvvTazSKmyywozakmvmGx6o4XXERCb7xiE8bU6Vb67J",
  "key9": "5uHN5fnYguRm4CKqQk2reoTufKyUSbiYDiaX4YZSvDE7KPXqDntCohAPRRT4qxQruMX7YBrF7bJCC7yTbhKexDGq",
  "key10": "2x3vrAvEu5TqA9wTF9NVG6JugQbjQmW7musfQutcUpF2F1tN6v7Biksy579yBCfHUoo6e3FKkKM75o9Y26AFyPnJ",
  "key11": "488GbuDezbr5bDzjd7vNWuWkLfSVq4T9KqyCKTX5Btzq88B1mvUQc559uTxsqyair9fFdUYqkH23kcoQYYmcXnmM",
  "key12": "5DJ1UAnmw8VuavTwJGcYrZo7ZVUe7AiXCK6uDoZFcvCZ9QTN95vSQ17BkCQHqVr9taCH6xJvYq7opJauMqbCxeAY",
  "key13": "uboaA4tTXQuUhmYYWmr79Vj6nH9sNypRW2cbMUkoUhBCk8jxezMTJxB8y8332tBEEhWaCttdMf8BupZNsSJhPBq",
  "key14": "4FtBGsSTN9zzd31ioqbDhBYKstFqHd97wy7wnVjcBkBTtt46z4FW78yTaN6wqicLFfHdFJLNRBs8wMu1fN54MGuP",
  "key15": "3X7RQ6vJAVdd6PSjFF9XMKwr5thvqm2vRFb3qBb1ufN76kpctCnfpVN9qtCCEVSJS5wP89LePchfhnq7nqm3zXLc",
  "key16": "zMEAcBGdtzaqw8i9YZDsic2SiXR2kCn3cw6JLDPkiN2ECViEc99KtZVtHoewCAKoap2iUs6N2kCnZPyanTCEykD",
  "key17": "4vRk8BBVUdboSDvLrB7vPYYM1xjuf4Cq4ptBwJhpVTsTbEDiWg2LMkvF2vSzGDeqLzGKySEevab6oxiNwrk5U5FX",
  "key18": "3Ue7qGctUQzTbaVXDKRdyZfygLfW2yZNtfKHyRrDdUbHzwUMfn47e8YZr5qstBeNrJrjUuSaeNap7U3A3fhJthJd",
  "key19": "6xQ1FePppunLjF1NjDC5H2nJTSBagVRScfX55UGGjFYC559JERXtZaWqJ5sD89vqyZscv51Th14uCdtRcqhh8TG",
  "key20": "5nVAFkbcG5hZ5ZXa9WcznCKQbELUtDj7xsCKRX5ZLUoFvYv59pRojBf8ah37vq8fk4NgEsznqYQoqCMfvcPFyQz9",
  "key21": "3aDQ6fj17gzzatV5yUGD3pom99TWKFTTG4suQDQ8qsFgpFy1x2J5PPDvUJXfyKnKUMGwRBL8LDm3eHB6mW5Xcck3",
  "key22": "VgmhNX7zZMkzxDGNjqP2TrvhUE7k3vXZdmvba5rKM7a8MvF7UraNXR5Za9Bs59rhrCPvTss7ZBN4Bwitb2PTHhq",
  "key23": "3YBckzAP8tNxbnYeoGy2qBB7Er9xTLeySgSMs3sfzuFGsJVcQmpfeWv5j1D8NpGFXW45kd1XgNkJZ9EHUXhquuZc",
  "key24": "3jJPFhGNFkN6sRcbLqakd32BcaX25fxhTCzdu6GsucFg1u9EJkcqi8DTQkrCLbLch4i4ALSYdcdDUhG2DTiGvPMT",
  "key25": "4MwEPhoQLBv68uh8Z2EvwWwst5GGNwQDoQ6CXggDtu147fqjR4AmyQyH43xvNFby5QaLZA7FFoT3rjq1EaSoFVG6",
  "key26": "4PmxjRpz6BwMvhYmXqvQ4XVrTNa3ovjYAMAwj8wMiYQKvsk73nv2uZoeermvmsCTTSCPkRGaVNecKXHgAHU4b8V8",
  "key27": "25ZGynyK4PqwUVYAWzyoia64SQWJcMTHNqfHNw4Yzr1qoiXUjhNVzKYd2puFF2sTQuqTSgdYDMAy9nsfWioH6xmA",
  "key28": "e9YK85BbcpRaotvzrruvvjrDGPMjkK5B3j2NwedNvm8ixn9A7xBHmH2dXeedsfDYsksSZChoQNXMcGyuNj6LAUu",
  "key29": "22jTTGwhmW3FMJmxfvb1jHGf8GptdfpjjSJo9gMdvfD7uQt4N8deynpZqfo4DwoaVkTUoMB5bjJzkCL3GUdGn4Nw",
  "key30": "2eAw1PaQb6kSPzhF6uYLVThqGnJNH5rKGrLT8yv1oE9RvTr1g5A18BfgH8Z8rAZZYM1CbNQUrByGFfzupzDDBAHw",
  "key31": "4VVi4dL9TVhSJYLJpYZQiDGqpFW2cRAYGdLh9DP3CVem8gaE9UP1yCm4XQunia98kGxMW9JYHwfhkUqASMLFe8Es",
  "key32": "2K5WWgukwJksb1ke5zfRzAEeMPyVxmMt6Qb8fWbZT5EaZnQLrYs6t9sqw3iCKm3Z1wTnaDR69wAahdd88w8pPafW",
  "key33": "LYYxR8xcdL6WSfPhdzvSjX587AqZGcHFYaENbiTQ2VfYAoH9rFnxoeH91rierLfSjFUZfp5HDEB2NhfHt9fhJRM",
  "key34": "3CQELmJp7LvZ7aKNxNoces1tx89KobhGTex5R8z6sqzBQMjYb1shtozq6gKbJEzddSxMR64s6fZanhvJSYy3AJqt",
  "key35": "2rZbRH8Si7dceSMJBbrikb61zQh8DuNSWpwamM3wJ5f9zQchvQqkw2EH8u4U51nm7TvAwfS57VLRxdrfPst8bHux",
  "key36": "u8PHMPC6L9fjPKwP9q2Z7Yvwx8Uzw1yTZRyuGeBWTWuBJrpNYjMraeedQZXwVQ8awKvHFd2y8AkgRnE5mKsArhK",
  "key37": "3BycQaa6BJCZgf8vLHBSteMGgCyb3xt9vP7W5VBzj3JMTX7Wa3fKtpQMc1n5mK89PzRFWYnFoWx8iG4w1UA7KU1R",
  "key38": "5rdQg33XHwB9JRHMYhsTAzgexCq23ik6ht52GJjpSQZcJpCgazvfeNqKfUWov5Cz3akEPwCnF67uaPr72EVsXzNt",
  "key39": "2Eg2LF1K51SmBXWt9vhmvQVQrDhK9unfcqhAJUvTkUoqe389Xxo97FWp5MTVjkm3yAFWCzHQv4KUsZpWtux625sb",
  "key40": "2fc3AyQFYGQJ8CtJn2YuV1aHLVezqrnP7ZkcTjzNq9C96MrY9gh9wxSgzkEMdCXzDGaeyMQcXPSDkFNWcKkwgzr2",
  "key41": "63AKV1r5gAmRH6UnC8nHa8DPNQAnN3qJDnViWNDiHMi8Y6EQQLy5iUvWhLtFwwwEz7ZUmjULNeXGs28ydZ7MTyCk"
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
