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
    "wccZ7s4LrK5ntGEtDkLmvcxFyLctYwGJJbEfqiC4TAnrx2xunnHZLQYKjcq956HZ8TdjWACRT5ebzxF9movR427"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JMch5mru6FWjpQHb7orLmEUkgKP7LTKDggurxYJuKfBwzAJuoUYHBTBoEKRhmxuub2UwwRvnqhquu636ZJ1qSsQ",
  "key1": "2iSMtcRWj3ELyZgdo3fxig8Jj7ZL6yJriCqn6HAzHNoWmnHH6vtjUtRhNo9yUdxNu8nyTjhwo5uMWxXWGHdyWNaj",
  "key2": "32x5od414DUsnGFKWA2dcb8cQboLFaf4gcwhMoczs1VAJMYSiscx1bpKmfsc97h1m3ASPJieGNM9E8S9GMagxRtm",
  "key3": "3RDHycz1M6svXTXGhE2H6yjgNB7uY6C1w73dchAK7LbLGyeUhv2iQfH4aMNTPLjbMP5dEpJHLnffR8QS8u5EmDd4",
  "key4": "3tjkQGhJRd4bSdqz9M91467oo6GJ6hKt7VrvYh4YLEtqYEnAywBYrWGcLHGjHx6QXpSAYJhcCkr6iyp9SP3qUdKy",
  "key5": "yDvi2McYcKvHapWEZnfwYmRHgDe3bGUbCA5dFDWqfrqTEPdzfLDzvu5ZG71ecABGgXQKaaRF7cFdPE8BLy5FVWv",
  "key6": "5YKESeBeX7V1KvaPWnxCBUMc4XeBaCVPEaNpBJMdEBKEsXdsdaaysdzNwxinpVAz7N4Q6coGd3WkM54GHLwTdjEj",
  "key7": "2ygND7dQQBZNCLVF1AZo381bkfrLizUXZp7qfwDo5LDsq98nxC6SvE6DDh5Ky59dopUHCmhuGiX6ixLS3bFEGWo1",
  "key8": "3ctp8o46bvQptf8MgiH2ZhwaZGG1SsH24eCPrLRuTZv8LC5qLDQizmGmhSnmsfNXWhzyv1L4PtrvSiUbmZxb6yv5",
  "key9": "2HNpdqmxd7WTh4Kj2JNYyME8vXqSX4R6jDbzYRdRutTr939dPMgTxoAgxegdhtKTDEPZkedvC3v9qXBJgdtmrmKa",
  "key10": "3L81AHFRRe5RGL9UVoeaUY65fH2kgzcVDJeDtGsKDERUsNU6fjUPZW7Nyg7sotxdAuKNvV4EVRDe1PzyQWckUDAk",
  "key11": "4yQ3E25KPYpK9b7JVxWSLHwvC1VcfQMTwq39q2azDfGWsRVqQoAjbcVkQLs7xicPYyoQ7ww4MZd6bZ4qJ3aSTNsi",
  "key12": "5gqx4QZKgGwpu93fDJN1YG4nq9soTp2ACzzKHZJ5LQaSphsrSHDhdXtCZsNjxeWZSZvWeGQxPhKawsh9uQAKwGec",
  "key13": "pYSX8dhu3QhrHUAbBAKgNNp4iAZmurm6hmKdzFPLj3JGVJtpxSdGSLztWtk9FoEpatstCaR4jof4nJK3C1fD1nh",
  "key14": "RtxsERTWei7xCpCcLgaHvChttD79UAdBr7yC17KaQ9N8DJqTcSa4dDk2NvefDbxowMLo9Bx3QsPQFYHR5W7eVGc",
  "key15": "4qD6wP6An6NFKzzVx8JdPw3555UyqXR1rYxmrem7q7UiQ1P49Qvs24FN2UCLKW6qhbQtdbqFxVN9DGwBipXTyurg",
  "key16": "5uCqPrqqCBrCULS3gh8ers8P7MenfRrkGdTGdU6uPknjyWLPur3p4FcVayTGmbP9vqhXtRnxpAmFd9Hf2WQdstEV",
  "key17": "3uHpDJaDCrJiPHsUfQ4BzshsRdiDusvBE1K7xRCLe4PxiBRR6aPa4rZvV1SymNJpjAxWfRX8L4pwKEupDT32PkLD",
  "key18": "4KmUe7SdxUxMu7eWCvodvnuokqhHzhGwJKU9BqfZNTfqsKEm1zXyXG46L1v9L9cXVprZGUjiw27EWxmKXpSSKKf8",
  "key19": "EUoMQXRyr1NoufaonEfA3SyAuuoCxRm8fV7jdcuLPuJaKKZFDG9SkHhYz968c8GZVmXt1uoKEpbbs8AWgpdc5KY",
  "key20": "9N2LtfcJaif22HYodp12o4TcKh1crCAtzVXd7CvMRzdawPuBMdm5LvMvzRu9X8PjPoicTQt6oxTNY5p8jtJSWUA",
  "key21": "62x1NWhuUaqUyiGJ7mQy61vBT5ueNZkprZspAm7F6UyLz8q5uUNT1JV6eu5xj3KWkzmnrG5njd9PRp3kL7L8eVQd",
  "key22": "5jCqMVKpxuWNjr5KYqdpjTQCE6tayeiyJS27qKBWwW4vJPn2FvMQUu9Eqj72ZcKWG8pi1jKWimQGh7sznue7B6Se",
  "key23": "D2Nkope9RCpD1v9m7JCRcFxfQoQR2CQpDKxqaTWMrXdnPAidwagQ5Yd3gBKVdqpQgkJGN8j3VwFrfsaMo4iaAoo",
  "key24": "5ifwMQYY1k2m5WkgjeczkiMzBE4PpcQXpKuwVSRpip2ZDh6R8tXvSDANK8p3rAorusThA9mQTKSoWQ68atkyDKGq",
  "key25": "4jZqQws45UjSRRDZEAWU79V5E9BnHBvpMz5XF5AAyo3gVSK9rAhPkBjCAguB13kCjNc734aPLPmfmsKJb3qmZTeN",
  "key26": "wvLx6FJ45SUhnywEh3rsCe71Ys6jucx9ZbXj9ofGJx3rCJ2JvcXnvKa9j5a1Sd93a6AZ9owKUEaUJew7Rw4BbGv",
  "key27": "2PWUDEv1VypFD2X7N48rcb6TRQfQNYrCZnRBzuBbcvEw5U1gWdtURXW4wFZF2vHaJ92zbcx5qF5uctrZBxmvUMc5",
  "key28": "2B3vYjnftSjfmCzBhGPEJ4VsbnaQxK21EYVitQF4zqWZtRk2m85Sn6oyK2e99kqniKtceVtKUrDPvpoHURpLK2qA",
  "key29": "37zt3XQ5kgw681zC1Yby5sdbexfw8U96482i2RjSbmx9Sm7a2TdnhYWZTHNca5QSdS4aNA8MCxvrvSMsj3jy1kwR",
  "key30": "3kJnwGS9CddAB4NvTKrtbQfaUuChQEU4SDGeSp9WJwUALTnXHHPkDjsEP6m8yB6wC44hW34LfuGHeSegg23AH4tP",
  "key31": "4XPCPuQQKMy651tJCYPBmiAKMfiVqog2nwZ9HezoYgjp9RPpbyqxmAcseLXAVgKYkPXQJSN6fLcEnbxQi6VScCRr",
  "key32": "N4sWynL67a7PFWSq4cmJ4NompFxMKbtsSxU1RLDTujL1tK9xw4gvzvy4Num23jf3SNmVw6hKfY8kqxHUYGwqp7Z",
  "key33": "5xX1pKFjvbRzLWdNFCQyNnhnQsKzGwCBvs6wSZKg1PMmLckzSMSwikaxBFHetwGqC37b6MdZRYBoxVF7GqiEbvqp",
  "key34": "kx9uHYvttcFCEUynUE7X1FN4AsbRTtECqMBVBJrzBjmKgB8iqPn718RtxUjBEM74oT46fG5FBwKnepLt6VH1L6g",
  "key35": "5z5M34N5SXgkFipeBdLCDp5u4RPZekw9r1bYThH1voRNECq169DZRvLAuwYn5GxrZWwzbEA1v4ogUmtkRtVRpnF2",
  "key36": "4Tv2v6zkGdbRJZVrKP4NmtqtaQiyJd7PKNB1NcTrzvauG7QkakEsav1Dsy61KY6C8sEWcwaVR3dYBQQJabLtSrAZ",
  "key37": "5kfXpXiCbYecQ5np4pf5msim9jLd9EZDubepijGPmXHh7vozq9JdDahyYW8oxtyKNaLixV5JuSVRxH1wgxa48ZYz",
  "key38": "4p1Dx3xxo5TLzfutfUW6dZa6uJHi6zkd8bzDSGGRnxLsr9FN3V3kyQ9wcgZostBer23zvU2zqyAYoM4p82QeQbVm",
  "key39": "2fk2gLEGA3N2vSjQHmf8WxeTFwwV9SEJrxhJqTt34ApPYjQMgUmortWsjX26HezZN4gC4HA2DyC6e3a9ZDpzaopQ"
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
