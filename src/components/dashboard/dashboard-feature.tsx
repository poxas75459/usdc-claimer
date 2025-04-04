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
    "62dGK5qQi7TnqQx3xRtXs3wffKuL7PyGwRSFSTkQZKQPGTjRjz2gHV1S5Rm5Y5h4b4SeZ8bPTL3jdxif9XWDqjaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hL7npcPb2g1RRvQNFGQAHRm75JurYfJDhmjGgTKUhggahSJ9SpKaqd1n32tRnnHhQXCCgBHPPwJHtDu4huYxZK2",
  "key1": "2AWVmcw3Ai76WhdWWxSyWTKA64Ah1X8mv3eEuhDv6s1dNPtzshEx4QTiE2h1x64qunTGFkjAKTvEGiRUDtJRvXT8",
  "key2": "5w4vR63JYHJCfA7SB6Tti83dzrMGdQdyq7CnAsrM5hUX6FLvNd9kMZ1d9GzJyTw5tFXvFMYQzJNNdqFLFdrwbzFA",
  "key3": "3UohxdVDaWqiU3BV81FaPVnbq5ANrZQGNxKP5kmiGmnqP5nZNW2gYV95V4TUG7qm1qxv8orKYffCZKh3LkS9bpSD",
  "key4": "EJLgcZ7AiemdAUtfmXucmow1VhQsGy5G6jsakAiGyMqQEc4Dqstg4AaLghXjPR9anD7fSqzyoXQttsmrp7YGtRe",
  "key5": "5rTTEkJvpYvwaimLRB7t46PEutTeEw8LHowXV6uMAKL9mCB9FQGH4ZEA57pjVSbbk7cEgJLR23kggh6bieLRFDnA",
  "key6": "3p3R8DFWubn9JR6qEeUPYiSdT55QMNx4sstgPe5ASD7GW6y6YXqGSPRvxAn4BbkZmSSx66QK792LQdoh49dfp5zp",
  "key7": "3LqzPqbkGs4XHRN6UPSpnPJf5ugUscJkQPPcrrbPoxuSTunLWKrDR3DwSfUJVn1bcDhoDL7zzzfcPcSvo6hB5S1a",
  "key8": "4qT98niRGdSdWpzcbEM1EYYZ9rzJ7wXzdn5DpYCANzxFzuRnrF6aVUuqjCqitx67axfHsr6enHAtvKm7r1ZWMw1a",
  "key9": "37iUxfgz8znkDNS1WaeRAiAJwfJSZyTabpQeMQRzb8F96mD5uFJTmBnqj5JNuBE2Hnp277EDyAJejarNQqK4AubP",
  "key10": "31WvZovukmNhzoGxfcrVn4duw5rxRScuW1pcHtk35ktcvfsehQkR59ENrLPjd6FuXZBg3AwFBWxLV2gooQQxfhNB",
  "key11": "2deR31M2y6PjoNaBsD1UmpeZECvTTdbK5gzuq8iXuhDHNXmkqxTxR6mYWfG3PV3XdmtHEj6FqhkdZuPaDKeYyKek",
  "key12": "55S6zYcwdzhT7Gw6FCdELTE6ivckgZ6DpRcZ2oyYWH4DUhQ8pQsba7ChnNuTiaSGGjj4DGCLknVH1K8hJHcLZZT4",
  "key13": "2wiN5Xa3c8qse1puV8cq3PkF4oJejHBB7P6synwRjKGZQNQbwfisXBAyKcRKxcdH1W5AGHH1SX42Ko6qcnXKecZH",
  "key14": "3vX2RUY6f5BMLF8R4cjMxmFfri2ZFCkX6zdes1vkGgLvW9eaAyNwSr3t4A2qdZgp6X4o3NyL4Y6UAue6ZLLET48k",
  "key15": "UET5APiPQkNxhUwMkfqEhCDgi7DgrfRApFbZbYVL4tCXvTUVSSorVbjLGab6TnG3eSBW3pcPyg563SLdvoDX4w4",
  "key16": "gVcAKoEaJjRvhip4WEz9WbWTskKostTzm1MyBquRgSayF5GZLtUAFtVcTWwWASzYPmn2h6g7u62ZJB2Hbhk2Nrs",
  "key17": "4kafigA8LRxtmCzZvKHSm1DAoS5cWRfdMjFJCM7chFMNrm5xdboeJPgfe8AghQn8G7R9RUJDXUuxVgJx8xg5E9UQ",
  "key18": "5iUX3w8fDZjCeoNnLiQgBu86MR2AVCtTi69oHcZBuGe9WobeYiNLF1rELGEMmbtB53fmCCn3rcAijegyzBN2maED",
  "key19": "5KKLBhhTZwwRSSAzuaD4ZRB7euQJTcokrpatPhQFtGjnU7acLbFpRpMW54mNBUx2mnCVfXpw7EMLFRqgfF49JKC9",
  "key20": "4xicXBq8kFNXhEXLGRLqBjhQCQxGn7sPziJWqX9Fz7GDqwkoAH7wLNH5reEUES55DSuoaKUeiKxoVf6WLeKzQXpj",
  "key21": "4KVsiZdSg5D6H9BP7ybSizKiDu5QB7uohBnQfBcHW2WKkB2Y6dMvRo8bVVeUCroSgYehEkXhgi9eY8Hpmbk8DCXd",
  "key22": "5D6rMapUrg9Ch16UoND887c9saZUhMaAFemaJ6Hayp1SkdooZvMG4S3KLBbVb6pifMj4c31311UR32RWiyD8vp7u",
  "key23": "5cvJ5JAmUxfRUvkeKf1G9w5sf7hqCWcsVJAjxfCRG7JZn16P9JaFdF5VGC2xBiEMVVgiagALPfdWSccGWKMirrkT",
  "key24": "3yYmnTWVtrj7megbn3McAnSJT95FqSoZxpkqhn1jrYhzxcQz2SQaG4xz5BbeeMBw5a4EErM7iF9YCp648B65xMiu",
  "key25": "5oVPvVjbB4xyLFpm72y9rpFg7PGUwhqfrw1XTHCuLDwctSqSSHT9b7ADJHHUXPuGdgqYmeFkumy1YqTU8xqSwCDK",
  "key26": "gSzWz2RuV7qV8ANFe4rhzRmJBC4451J9ysJgGa4MeQStxKBoveirRzhsGvfKAYeFcyhH9v9SdQ7ngzRgBpsCKQZ",
  "key27": "64PEuxQe58zHd2swQjCbTb9Un6DrQFtaMtP21EXbMw4k4kDVMNby2LBiTzUDpYCL6mVVZMgNn7rNaV6dZuMdeH6c",
  "key28": "DELhSHFCvkmFiwWBmBtiypN8h3x8nu6L6xbZax7kv58Sx7QziSsFejaMLSivs9cZJGnthR8DDmwyBbVvordpuYa",
  "key29": "3nLS4XSdJEE6bi2qZ8dN9KaSAUdMQoV8kkdax3aQvLWbazdUs1cpRnjaCLkSxDsA5F44mJBaeSRXGT97bUm4bdpg",
  "key30": "4wtJvjXEbjqGWP6MM53nCrkpXh6kq9B6YW2bnVYNxW2PWYG2avtJmiLAKD5HPunzFuhzm5pCEFnvYqCSz2DWpCxH",
  "key31": "5cJHWD7utT51WM73wfFWJksP6SBRhi2nTnRhPomUU29MhnWYCg3oHxVGm4W1LMuz5atKU9AgDT5y4jiZajYme1kD",
  "key32": "3UYLVqoJX3fs1XA3jRtNGiC3PotBJEoB8KZ5Bf3Vb1cy31PCBYbUtuMnRLrTWuKriJRMaPi3kQwegBYjeaBd6QyM",
  "key33": "32eDR2BiUVWyyELD3xNabgT3FkkbYtn72gXdUUWH1xq3nMQcmk65yFCUGjR28ujNCvcp5gsbn6Cu7nQvUgkw7TKf",
  "key34": "5ywsArqUDvHjmanCyMEY6yk28gi9ENGG3CgerHqfDhZGkMQJBoP8GFxA9yQJFLJSpoA6LanxNMCdKiVwYGgPhA2X",
  "key35": "5WMnPiD3akaxQsbJKa8uQtXY69GKTgaQusTCySCjDR8MUkYXivRKjoDnFvuXQbDRg7sgdmED4L3Wg5apay1XUNVo",
  "key36": "41ozdMrcMDJAkYakcRz47kkVZdxBY3EQidLLWEJ4Fyn4Q738iPSFBS9RhWPMCcNuHXy6cZwuCEG9yt3pAREqrz3r",
  "key37": "5c6qjFAnXDoMJQto7j25e7dTwADAuqFsY7kGzQnD43EW3LYihYgTnCri7rynPnnGHscAfE1FRqdeFpZM1QUsY7J5",
  "key38": "2s3PnaUYwqQ5iq3JkZEKvZGDoyWvuAxVSQhqj7m3tAnS6SGNGDh7T13eHHMPMmq1nPY2ozCvRo77gpwUe5fGM19W",
  "key39": "5R2vKXyCfQjTiGD95bXs5X58idhkQNscDBnH1UPDSJSuFSzmMs8fCQ5N7tRKsWptNUvZPxAuZ2xkDK6aCEQuvT2o",
  "key40": "2KC8juEZfjrPh6iyCnoyAWd7nTb1k3E773aCaehhHLPuUdpNiTwwuyPJPKxZRfDNuygo7ey2BqghyYpuFyNyHPYp",
  "key41": "nk4tZ7GKdspBymEzHFqqrwn4FTcGz9j62LxWg1dGdUqzz89uqap4t9ojJK3XtZvguY1pLW6i2keuRRX38TL4N4M",
  "key42": "4x2fiVhTK1P6L7JP36RKanx1gQ7E8W1hQPeqUzmbubV9tGrbMsDdSwoDYXWFq7pSwqynn1e3MZFTN5Ku9JgUw921",
  "key43": "56tzSs5jVT9YiFY6K6CgsydTJhVQckySkLyQGu3oERccFd4w8o4JzyV8bAg8kkr1aDXGHqq6na1Vz4sfnRiUKXZb",
  "key44": "5YoKq1j7x1jTRzTrY3PKFxzRgmDG5DEypkwRk6UxMuvsZ8rnrjUPZVuo815MncJem6peS2Ki8Lxh1GoYmi9V6VRL",
  "key45": "37Nd3diAbr1UKE8UiGj54vDz8U2PJRkPeVmn7UkwKQiEbNLRS5R5DAd6NeisPdry481on47GaTkcAVF9fheMJKMn",
  "key46": "RbyrecLGtgcRsaYfQrWrN4oDKDer1BSi7NPWjvG95NbXG6Dz8NndWaaZrPCDUsbt1JWxyiUhcetFc9YC1hJ8LsF",
  "key47": "3E5isYVw7XXDq6Mk6gsEQKbs8qsDtACC3w7X4dX9j7pQPxVSuLXqd18RgNmf6KLLWKvnGuEmEBDXNAFTU7kb6afC",
  "key48": "4gTkV459neDAgadWhxDXirWco2pnieV4XqzCnMY5iKzBwGmPvCLboURjdf1LCcFYB6Y8FHhQFVzYm86WgSnnGK2D",
  "key49": "344FGpiZgamqB9QZSzkrqDdFx5c5Y5FV7uCBjoMGAdRHCGoGUy75t8yDwB8wMsXDe6RDKz3AQFheYcFXNAA5RhnX"
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
