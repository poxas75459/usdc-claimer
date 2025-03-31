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
    "RyCfTzNHQeNoGi7iEoVx1dAvhCPQqV1MtNLhWHe2atHBQz8jf1GYy7QKyZsHELkbnGw8y8uxvHNrVnWS2Mac1xM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P8pLcDas5aZrRFFQMPKPYK8S8MthxeHhznAapo4MrQVupbzyCCmK2xfwEnUmdA3bos3HZYzF5SRUbr5ME4AARTB",
  "key1": "24epBsWkzJs7tcL2BZKx9JZ75g5X3Xr1DNHXYCtdYN9oUDSntnbUqS36Ni8kj27LmDU557PUesGxqyqqTgQnRNA1",
  "key2": "5MA4cWykM1Y9wkAEnVhC69VcoAid7zhGox1LDJNZzP6YiFczk4nQCUqum8P72QukymsMAqV1fxFbb1Qo75whz7vf",
  "key3": "4KsrGBH4eFdiSgZGp4gKxrV6yBW5Dwhqzw5TeEjhB6g4iF3pZzkGzG72VFnnzwTcQGQR2mucywJ5cyZ9Pr2ST8hc",
  "key4": "5HLnQ8f3KXjew8JfyhcbfQwnfJmvcZ4sreeK8ZkVUu6DbCp3RrNUrcTj7fMxJpf9PbuBz2z2x1Y4djPDrNpcToML",
  "key5": "2EhjYw41r9mvX8THufFoJD7qjsELfHGEW3ykQBDEzAXRxvJTLJtJxJnc7oj2Mj3yHZXrfqA8QpFUz6LEGC1UaGSc",
  "key6": "3Qgzxf54L6W3y88NdYQ82UYREpwNc1XgjX8kcSWtoDQMJpgyr7zvCoLrcR7QJtsHtdJuBHEjaVikxzTtjRUQZ3Be",
  "key7": "2NKfZRcWsYST3iynSFDKmGjfyUFMmdxg8EPiR6WdibvXwWxuqqCFHJGTVCbxtMBAyY7QwE2rDmkyoZRSmNFKx3f9",
  "key8": "2hhVNtoUPRSR1koMy48XYJxK1ravUprBmTyDwifb5gtZLFiDtHqm49TY86h9Cjjpzj3PUUbXivX1AtEXRnZsQqUX",
  "key9": "4oEhNZ8KqaBf7FwFADeusujyvRauiKRkTtnY1rDSzJPoRBZ5K7WJeaHgt2VvBNr65N6SNdpFoqRVKEL5iFxGirNq",
  "key10": "2jf7gMRQhEEJgc1DTt5hP6rCpyK6JGvJiEFtKmPedbzNszJ8nhi8oLGmBkmfPdzd5x82q9T55ZBwaxi9AYUk9J4b",
  "key11": "DUb3Cv4kVDoiqkrhUiyqnQ9SvAv6bCgz3X44JN4BDzYov6pLuzJogjxDcwWpdfaq3r7jV8VUrnNJY2Jsa6MzBFZ",
  "key12": "j5UrwuCkTgqu1JREJH3teDeVU9RCCe8XzPiKYWKmWtkdiM6c5zCgdZU2JpnZLa5BXj1ioFJa8QAWeGaSB5P9Jfy",
  "key13": "5K45dhURDmS1qVuXVCAuM7RQXyGZMJJaPwcSKfdfJ4r9jkdniVmnVRp8UgqCfCvSEd7CLw3hV55R1wKdSKPfkmLz",
  "key14": "2esdqiHXDpnUiyfzJadyn86KgRJuJsAGqmMqKtqjzLBkbxPDyHt9aYDdgvGFQ2tQUXAsSQg33fCCWiWfrH42zM79",
  "key15": "4BnRGQr2rziZuZdSuSzBGLKAY1onfg2BNjkgiUvenbHsSjEQeUPEaLz3Cz2c3W2MvSeENuLMPf7BE8F2BBeNLQdw",
  "key16": "356zavpzwWhm8SE39epXCnNMnC67KTJUBfrByPiDyB89AmQXqcKT3pjuq9SYnkyTP263krBjUP4ni62hvxkAXk5Y",
  "key17": "4HChbD1f332Ubi8KVe1kug13sGV2NcigmDcGPfHfRoyR1L6gnJigjo5qmexN2VKR9nqa6veVxo1efNyz38eSZnWZ",
  "key18": "3UDWsXgvAPPEx8yXArYHZCuWe7T5ks8bPtMmQ1UaD9Jn4uMfJ4BChw9WYn8aS623cMpR17PW2S9Jyto5ZJtGN5h9",
  "key19": "2jZvMr6sokBt2uJrbsdRXBoeREoaJynZQ3vbdMWBqnXwRvymUXo9u1wufPwABbTAoCcDATK4hZvqSRXymARXpkep",
  "key20": "5hLFvU3ys3ZfT457SWdythSC3BdUpuPQDSPHeWDjm8XJ8B6rbgUDyFisQEL9ANQHWSkcZRMD2WG75D3ayKe9naP5",
  "key21": "36NGEW4rqJoxWHDLr1heb44KiuNxYvgJ77Wm7fCW59jk8ULyVfoosYG7JmCxsHTA4z5MNDW6nHjnqjHUYKxAzTn3",
  "key22": "5vkjgDSY2jM9AQXGjjHRqxdXqGhDUfC858ZDyL9BmpgLF1aCTBzEpLyPuzN681WSWi1jMjhrpoTjiTZJdELmzPVa",
  "key23": "4bMnCTdV7JVxUo6PcoMfHa15muiSpxed7hPze9kAqDr1NzPbwvioJDSj7Hnc3C5um1Ko5Drx7spqkM8DYC8QAMS1",
  "key24": "67aGsckBnXj7rvqf3tj5Tgzbzzye5Gke1gFR9RnxkeTozp5smyeFm53AJdsrRfb4mWMjGsPMSEpkkutPNzb5pMLR",
  "key25": "3u4td9GjyMPHkQ8ZDuS9RGBvK8cv5ARSFs1vPmiFaEyiaw5qV4aqzpu3LurMhAmT7Y1HUsb17DHc6UckmmaBw3j4",
  "key26": "5NSJWFpU1UPN1UTMfE4LhTMrjQ9wv1bmA84k72ov2NGLSzABLAnMvPVMQaWk7Vbg3nU2ZHM6DxoWeg1skoxCmikK",
  "key27": "h7REDqBAHSfXRBkmUTvBDevAWYLNytF8QahrNccYSrbWWfFJ5dtdGjaiJEdURHAEXKY7b38tJPSZmKcqLXiYJ2W",
  "key28": "3HmJSkodiCB4t4bNuMieLfvvGzNwHqFTeivQbCBJR9hgN8H9452fXD2trmtJYQnrTGzj6LTLPrTBS8KzMymxW3wC",
  "key29": "2aS4DMUBfNwxsgmrprHKEGz21w5UdUC41NGFsHHudTgN9As5u8uy2HwiE7G2mDBiadgTtPJck97r1U6gP9mcT5Qt",
  "key30": "23raSvdTLswAsWPpZwPcVyp9Y9nWzPFGSGZ6AvmYbso4PNFiHRxN21CYdYWy1T9hdB7S3aQRQbH9mG7AxefaDyFo",
  "key31": "aNRA69LLSwu3BKP4vGua9cNVQvsLXtjfYAuZe4PR9mr7shJRUeBmdUjpsAQ9q6f7emNeUvcAQC1fkffx4DNtkXX",
  "key32": "4mKpNcTDqixNptui313LrdFhsbV12UDEcSJaRqAfbh8e6gE8WCsxm7fNcAxyzMRqxczkC1bSihCGPC8p2CPHU79k",
  "key33": "RfteDUP64EiBtgVoVgXQUNCdy1vSo2dqDU5LPKpNT1ssccaRhb7M19hk8Qbq5nPFLUcpFDACKQTEpPu32Vvgbeu",
  "key34": "5QTWoH1ne6LTi9JcAipxna7jwyHVHBriJtvdCnEFeU4WXqqSAwviwHrSRTwqQgMbiNzxPsnmiE7xdJrdiJogpjaE",
  "key35": "g1FLoeAg6Mf5czezRMKG8s3r2VmDRoWiey4Nw7BYe4Abz3XuttPp2sUP8CgUcMBN3StZgpTWFe2pB8iLLsKVUPJ",
  "key36": "pRCX2kTCcJHUhBx3nAsBM966jnyQihycLCQ2uUEnCBxhQv2v5myFieEh564XrnsjodX6v95a7HNLGexQztJ8ERz"
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
