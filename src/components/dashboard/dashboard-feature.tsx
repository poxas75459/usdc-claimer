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
    "66vnC2LRppmBB1NusX7K3rnkWPB9augw17A83bqU2PHXfHj7PPjXcYaPa3NzwvGbUWTvMgTrZFFgL5DJRCXXPTaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vXadKcJ2zGVD49Ewp2ehrcmcAwWmxLPPHgT2icSHq8LQbe7BKPhTiFEvG2MGuo2VM7g5vh31Jsx8Qiiy6quzaa",
  "key1": "zDBEBHqhakoiC5FbQdJADXG2rTCw3PuwfqmQw7WuQD2ztwRwKC3ZwNKmURLxYLkQ9RAMemFk39P2CEBySsj35YJ",
  "key2": "ecXyfPCxuqdfzModea8RKC58Wj4iFuk1PcSKrGMWRmZD98tJGxG7CQaFCknRLoRRFYpyMYsee2ppCU3fPRqih3A",
  "key3": "Bzpnn2QGYqea16PbXu5ogb1yjBoEckdUuWQHV5t69SgkvzK8CJPkeJVdJ1PV9MgiSY3zqATiwJ4fAjo8hpXsjWF",
  "key4": "sB4uWd6LPwLtYvz54GkkZunZyBBDsmaVzFLAhkUDPhuXGrcWCtdbSpFvdzLCUKmCYCpwheHBWjf11mh3ekS2QcL",
  "key5": "4tAMQyrV6AMHE78o5QcJ7evXpeLgYrb9zGhvz2GPfFdE5m2X2mcoueT5zrcCV41xvEQyaKaNCBHeZ7Ez1eeg1bnq",
  "key6": "2LpYvE46saxLD3t2wxWgz4C9NouYNpFRsQ8DhNQp4QvxQpCcfLX3Tyk3uhrXSw9Z3dCfRAgxSW3UHs63WjQLsx8c",
  "key7": "3TLwpWcJ75tBz6x75Ls2sKmMjBRxjSyHaAbX6VwhLC23yjoeVU5QLJwZoN5zPpXo7Gt15caYvC36MXRo8dHokL5e",
  "key8": "2RYYj5aUa26c8RUSGyYzTXX2AVoycTFohzdU8nJnE5Cb423yFmhXPdxhFz63aDkY2Rb22EpM3TJXFKDR7zd5Z256",
  "key9": "2zJrFBhmeuNxUgRaBGNt5AjkdktBBP7EPUofb1NjVvU7oicbE65ehV68ytrLhTcpML2PGmoTnEw4Bf5tfRnFaeF",
  "key10": "37MfWJsyY1CPnjaM5HA9DVdjfvYjgtcX8hjEQQiE1kw4Zo6wejADAKQE74knMDBkuE5kxyAsqnuWXoeHtTneeY5E",
  "key11": "4ca5dXSqgzJzdMcPACC6rNaJUqjafPAc7brmAzGYWzPWurTPvRu5e1jZTNge2WkfqK4KZSavramvgDncyYNcU8oq",
  "key12": "3rDdG8JwcKs68gkN5iKeHrbd2H4ninkMefSJz143dAZEt4iTQdXyRBccLrYZZaepdaifU9m5YUd2dK1EveQhugFD",
  "key13": "3MrJacKBLBbqZ1ufGu3c2pZbfsvJFy7m8XWMrjd7wbB3e47skQ2P8zAytTYNQe9z6pLCwK16mLnszaDWCKX3TpF1",
  "key14": "2mBqXQZnhEfh7GuUZ4jyhuXcY2NnGFx5DSPKv4DTsFtX3MZnXus5WHMP9m6hSCrXatDzVmYywt7DmqwnkwgBzRFe",
  "key15": "3bVazpzViiyCe5fyrwv9WKdkZNS2JwZcvnXENhTcXucv8etU2PJp8j55aYUNtSArbn58x9SusdEY1xGBjRkvwEd",
  "key16": "5tsHcXVY4V8MdL1bPSyCvZpHYzqJnzT12pywQzgsnuK7fo8BZNyJbjuFZu2yYaoCWPYDTXBP1zJHtFXQy9ZFxNWq",
  "key17": "21kCEt8wmzr4VNS7Nz9PZcKaXxpSYuvLyH41HX4FPHtNyrb599oF7V1aP7H6f531tNaGB7d2QBXybGCu8w5NnkvM",
  "key18": "8yG85TDqNcEoSGEuw3zpwpqPZcSgqRQYoXBkTUnHR5LNyFhY2pEfAQFjek9MxeHdJTD7aGRT1XwF8xzKDTWRHEi",
  "key19": "4AjepY3xTdV8MtrorkamswSLZjHb1yEtrfrSU3BVPp3a9nfvbY1RcHLtEG9RR6S4aKfXtKsKL1YqMcnqHEPk6eBr",
  "key20": "5NLkNALamtoCFXBhdbfeFiEJpXEqNh8f1f1wz7GWJe9qiwdoftDXNKftiV2eNiJ44Dz1Qfytfq685WgH1m7nfQMV",
  "key21": "2LKAf7UJeVsqR66JYWFfpBLJCR9MigPjTqw1c3ixiqpEML9LrHTuWSF1PJJ1bzwRY2xrpRZhwkjgiUp6A9p9fBkf",
  "key22": "65AgEbVUKvnc5FfLMkEptFppdXRndfBGYu8DtpYhhBW4xwvPzdPr5xCtP9Z6MrkSKTeH3PQGN9vnhe3AcprSBhL2",
  "key23": "2Navu7nXrZKUx3EeVDc1ks4SmaP6cjF9GDgw8TWgRwiuPH1X15D5bt2kGnULfb4b5iRpac5iuKiFEsazXq5ZiStg",
  "key24": "5CTU1oxP4fxQEpsfRkKctZaVpHBu58sH4Ng87Ai5HesGe7PkFNQ5yTUkj1BoyZ5kcgvN5cLX48xYXuxuD3zLCFgJ",
  "key25": "bErNvFRyxPRT2KhbqLTCNY2vuKG8SymXLHY7WRWTULJPfS7aNzNTyanSTH4G6VxDekBwFcP6rnmhRSDKNrzCZEi",
  "key26": "2rEwgovBx7bitmasJhPTDGeWw69J65g3Etxsit8uCtDM8qXovi1TK9KJXjq9FTSeraH98x5CspetaiU6gMc4fTYa",
  "key27": "28AkE9f4ypjbPSkknteXypTiWgpLuVnv84cXVbA7p3SkhDctRYZ5TYQFYWo6WFMW5hZf3qRDnhD6qPfsbszvgRSb",
  "key28": "39XCmvfYscfXq3wovF9Qz7V2Df3MTXwzxnGeXcBWS9oGcPNPfkPA12HbTPhEDFkqM9wshU1cXnShS4gGXcjLDETP",
  "key29": "4iU3TMqphdWuNfWD86RyNNnuTNq3X5viJ5LZVuYHJLzJoVzacadyF39mkanGwfDVHXbLYwFeVf89muVjW1pF1gtf",
  "key30": "491e9jSxJjW6DPX2fsDXYKth1GL9KhjuVvJTE4d2xWcnHvE7GWRYc7QgWQmwEPeyhpHCRRJtpW4JVLX7Wvn4VchH",
  "key31": "hY3EbSWRTcvcDUgm1C4bAnnVNahBpgx5S1kzP2ZyvAXuDUDfNiPSLG7wMaxmvTWCEVwEeRRMGXpo4XJK3TzptDx",
  "key32": "WxUVj57qxyCRgPG6Du9pYmVSyKmdoqiAUb3KSgHZdbud3C17Wq3obcsLp88Brwbb68NvKhB5Xmm9jiTjnePxDPn",
  "key33": "5zJ2tAvz3dXAHhstxZNUsqgWPK76ns9MikN5L5sVJb9demAWFcVw9f9Vs1Bd2H1yghQjFjNQ9nzz7ToWF1E4Wca3",
  "key34": "3AZe9pubx2DYCAq1JxtsRpBmvvEh5SvBgztmANJT2LKHfMtUUjwQcGdraQmZGFJB9r8y3r1W8vRuSy9cixzQCBS8",
  "key35": "2nJv6xpoKF4PFdRctcem3Xe9PW5TmhT6BvPs6snCWzfdB4VLBS24fCX1r8zAx3L7vxkKA1UqXGUXs3rWAYR98PGw",
  "key36": "3tF3tH9zFJPBqpcMPpvpCLtRC535CUQ9GjpNyKZ6C9GD8ndy7Exrd8vBdT7wstoYQdmMdtXMqDxDdHWacKotudb1",
  "key37": "4K9tcb9TSw1NcxG3R4iNUcuRA2FtSwGicshJquvxdCuo5AdRqqfAwHj1TYovL3G2zKufBc5aJiVpKti2cXT4dYwU",
  "key38": "3osjMrfdEiA7tbCC9JgHCtQpQdSmp4R5Ujm5xQj7nN4i78Jy2shQQPtMFQgkmzdQsPypTovHkqzmEtcADm8n9XPB",
  "key39": "3vwGALKDFXiErAqs1nQ9UEgpv9adTkrhVBG7cPkwkAqX5mqv2DjpNb2hSxxwTgKtNhddj1sL48AV8yXYATemPHAA"
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
