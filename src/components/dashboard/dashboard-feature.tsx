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
    "5rjcAJ5GRND7GzjxJw4vzx6VzA7iJcjb8pL7JnwEdyNQyW6sd9HzM3Hfiw3bGKVaKsGqjYK9Bes8Bs9TRvo75Ypm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gY95YYC4rRWJCuPGRfgYmqmxXefSyXoX2iiAx1iJpcJAjCuDNRVZK67auaqcs9sAq3fP4ANWNGb3vjaScuXA222",
  "key1": "5D9dPGFFfpQujrLNZmMLimLwiZJaJu7tsj4hk93eoBr2nmdWoAapAGzGCzhTvcEGjSQZHv8kSY4LWGMSxbuhhxwo",
  "key2": "53CnWC69BjuWADGUHQgWD7nk8k46xQC9Axhcj5uMhNJARGVNCGwUQQ1T5jY9DkBGRs2qeW97NhJS534xL1JTTsdt",
  "key3": "cADzuDSdRy6VfaAWLQSeoRrpiExLmvN8cmqfGvjmQcYZtXP41kNK4dab4efthdf2Mna5jFDW4hSc7G6r57x2uit",
  "key4": "3tviWqsxEokzSMguK6ZT39p5N8ReNqTZAF8Dx2wtasZ1H1BFPY95o6E87oTX3tPUd5LwFGYS4yvghbZ17hzC16bj",
  "key5": "4sEcjeGHiYYfzSbGrCcBBbEyV3kdpWuGwcUwXJ9QLFJFqebpKrtVkzvAfPwXoBUWF7YTxLLKRdKJ7vb93CafwSDT",
  "key6": "4hN3EeRkKWhAVTBEqz3nqBufP7U7zkYvZ7YybtrMCiX7LjwbGZFqpQ8RnxJQ1BBGiC6fB1Db3xDnNpJKwN6kM9oG",
  "key7": "31ohB7nh8YefN5sjbgAcKqdgDnFeB7LSHseEqRXkHgnEaNSJ7hFWqVdcG2TntSmR24hn3112zVeusSszeq51PE1A",
  "key8": "Jwfr8qpBmZCumAYbtNyaMFx1nVFA8JPBMckftZ9fgQXyHnXYkJkLG4v66MXSvX4FcLdC6uM2ttRTtZ79sba7KUd",
  "key9": "65f7APX5fPrE199ruZBJi87gsYQbeNwEsUSTMbHiLXba476HbTXRE5hgs6o1gL2auYoPu9QV5VswTF1YTzEnsXgZ",
  "key10": "on9H2Q714dPbV1VZUzSA3Q5kEPWhV8p6Ptdv5j3i8GG1uGjjXcqfDYVscLWbFYetrM2FVmovkS49yVP6QybxUUV",
  "key11": "4dcRqtmJvzUKMtp268VoAH3QRoZ2LwfpWTXfQYQ3JKdwKRBXQkm1FvkQaUbD91GZvswoC9hgMxAiYHGaDGBmBtPn",
  "key12": "385Pskcpk1HxZFA2Vg6MaoYkRPxDYEyBP4ZFQtxYn2q68bXZPrHhBNzpRachTe3WNNKtWczoFmMythpYugb4EdYQ",
  "key13": "AsfEq68Yyvq7HeAydvMApBkRJWtThxiQCJttpF6WxWL5Jk1KmSPiQepUuo7URPgbEZvZxExugA7hLdh1KfPdkfw",
  "key14": "42gVQAorGUrFmNRPQksAfNKsPoXmh4LM6DSv7cJcECgYoTDwRNm4kXxqUePQjTTB38Gw68mULKLb8HPEoj7MeV7Y",
  "key15": "5ewtQmY3z88hvX4ZVrZN33W31duarmrg9ynvJ6DyYqji8oRNbhtu3wAJ2PjG7BUaxpMS7prNqCuGKZbVkZ5DGoXL",
  "key16": "mCCnq894W77URJSphwpiAg4E8HE5NoQ4XbJ9n4t6WYGKGhocb63qju9P18mQqvApNKL9ejQ5GZ9Xjgmvb2tPeNX",
  "key17": "44EAKgifyHu1G3bQ5EhWoSoLECdBBozghBZPF3AH1QUQ2op76bbWV5wWYikP9EqVogFT24pN3vKn3hwBC6Kimcez",
  "key18": "4js42zkTEDoJNnoJvAEPHiQdh8iJqafZ7mAjvsL2nykdH3GF1XhFJ3JkjohyLgDFGEHMQirSgwD7VFNrEvkQ1tJB",
  "key19": "42EzynTpj5uz7kiZVFpe2WmAJoepohHABjQYWEY2wYAGJNvsAoJK4Dzg8iHrvjnzPyjXmEc9LHNsJkbgvnQw6oGs",
  "key20": "2iBUR1QEcsKXCLKyhSyQJHz7JgBjEgAvddTyEiLinf8ivpSvqqv4V9MoeqXLNbYERDzAUk7SBJBLFbfGPPERRqeY",
  "key21": "59TWSbyTaEjvkMkH7Pd5P3MHoecpvEFLRpHLmoBDU43vpSEStmXCUKXvzeQ4ciAL6k12AakS8S6D4yuinEigzZs9",
  "key22": "5oTtaEo8RQiCxe2nguEkkY2dGD3mVZQJedyCRNRVKBe2iTCAoXtavd13Wx57v5LZHhVMRq9Lw6pEqEEirXWB1J43",
  "key23": "3SWRXHEGjXPiad7K18KK6q8dxCbtWxEydGBnrsV5TuwFhvKvJfr7Z1Wggdt1hXS26q9pjT7svaHusxf8tajV7BHm",
  "key24": "32XKi447aN9vrDj786gDytNr6LZPrsMmr3EMNwr4BzSH2MytD2eXbXa5fYDdJ7kjbE9QagEX3vQvm5ituzeQGvKn",
  "key25": "4GQKcxwZMMJMYyCHUQD7JPu1znrJSKvfDPDYUptV8ExS18K8hMvLQvxqgXXz5Re64fMmBZWUF8oLTooPYGjD2zgm",
  "key26": "4w7MC6KaayXrYGDjQzS9PK4z8RmFxgqDeHGEzfmM6QBL65y1aCLVgB3J5tPfwCo6XJA7vsLXpYSexNThKMoCXhGe",
  "key27": "4HygLLFFuzJi5ePpH2pxvBoKoKa5sbjS8rLwepFbDShPXe8S2uNgbSQkJnEPAZhZqZALA6Ar6ozsbWkSTFpQVsj1",
  "key28": "tnsJLFnD6vVJi91FteiJuBVa9CvmV1UnehXqiNM42wmGBLsEUQV9kKxW855G9a5Qjuf7j6tHTEbsKeV1J9Ede44",
  "key29": "4sZ8kd8sCqqwRbeFbb6uVT83xnnZcJZAqMsBD7vN5b7o9xrjrGWfXidDePhHDE4Zhc1RAQDdSPdEEXKjRwRv5PtM",
  "key30": "3F38LF9wvxV1QiE9v78URirVGR73UCrmBYvt5YCBq8uAdguZ6akeLa9a5pagBJnAMLeQKGo4wgHv4CLUvqAnryHF",
  "key31": "45JC4VbxG1tXkR4jrEPC3HkoSQnv36RwVyKRkgFWLJ4p2ojrX1HfCfWpCXMxqy9UtwUmLmUezgctDp8eyTaUw3a4",
  "key32": "25mYgZGXF38GtJg7qVyudKZb9mJEqvNR5V5aup9bX78mYpDMAfK3Zy4hBS1kAR7kecrrcXuZuhRqqBL9u7yyt5RP",
  "key33": "3tyDQYAHJGALytiNcXrvRVLq3Q5Pi3jBQW4SGT76EGYe482vCDSjcbc323kaA45tWQDYv8vijhMS2F8BYRDUqT5P",
  "key34": "5iFa2C72ns4Y9wWq58r4icKguN4evkNpBXt2NR5a6Yc8M1Fjnig4xgwPjq6R5nxE7qpZuRfsgdbfaR5xaXxzw4J3",
  "key35": "4TDVqViXbPH3NwZZU871uYao7wXZc2xujdK5T2NmGNWAoHn3azB7jBWNEEMab9V84p18jxuH9RaDmg3eNGLjABXr",
  "key36": "3LHHbiTe9KacER3fHtLAkSwdfnPJ1MLcCbdvLJ6Zmuv3aWiJRypj61b5jFrHLeJxrFdDbX1QemYEoX3hQugYxEQZ",
  "key37": "2tJfCaSdPagGfPc43zw8wuyHdAdarbpWY5yt5NT72nbggzVySvf88jTE5uXRSG8MmFd4Tuq17b3JqkCJJ8ucSo31",
  "key38": "53hhqHFF92JxryLVaVpoTBGEAu8Xrq3M4BgmvoPrsCGUAdajT1amGSG4inCY4aHWaKnWBuYHP9NUUXny3JQ8Rob4",
  "key39": "4Kt3rqFGGER8VfTZTYC9ms53Jbz5F81Mc4TJ8HQheAdSstDJjxFUKLQMuXjyD68JU3FEa8xiWhVcCodckoEUZUeZ"
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
