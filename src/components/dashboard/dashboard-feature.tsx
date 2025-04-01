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
    "jQBKYUtA2g8wMwMQXbLrBmnn5J7PFL48V6cj3fYtQ1MJUjB9WP7vHdRHPRcuexPrcKUBQRiLDfsEuXtAB3K5PAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Yy4garxBSHzRKrkFiwfZ8fPxuJ1CTpAvte3gRtKLrc1pgs7M2zNNGeQX3srRLs8dBZsRVLCMsDVrQiWbr95gRv",
  "key1": "cFxxQ5tf8V1C5MBrcermVB8LhHS1z1NE6PeEgFSUQoJQiNNdZhWAhGmzsZnDhraSVR4on2J8EDuHuoYpXTJDe7n",
  "key2": "4f8WQMQgXwEReHAU47kMsFsYu6N3YFJvtXVQ6QRhgT4jSG8rcgYB7cPkskyFHEirRwL6FSs6NGRZuonjX7PK8uAE",
  "key3": "4HPw8hdP7zxNYkPkDsSPxQEBrDQ3yy4EExS4ctx3y3YssjVsYAWxjLmhBYGEfx8uTiTYDZkZZxRKVCSJHNUnDBFF",
  "key4": "4pEw6gs3WiUtspWsPwoy1qJ2yNxjDbDHXj8rgUbso9M5fxMy3kDUroWiA7WaeNp2Ypj3gW4q6vRdpa4TheEU3cMe",
  "key5": "4cbPTe2UdUZ3dCWegBRcxW3PKpKRz8p2HfM2LQRnvPUABgVqbQJGXUxQmcpHD2dA88RFaaf6BdGNQos11Z9Uewxq",
  "key6": "2gdwDWJg3dWjKh8CS9hpqdN1Puhka6kgXRiAaoePhKcAGYGiPRB8WV8FdVS7CUVqbZMcHveqBwZYdSixGG64M4pL",
  "key7": "3croVmVPYePXZKsjHFsckEMtL1oF2anaem887D8EBgWSezy9Dvx2t8ngYxsTzg2FStPidSa17A3NEvK5YroCYPZ3",
  "key8": "5NauZvLgFQNeLU3tKRZiZB8Ri6QVUheVchYQpZ6muEtm517uG34zuYvc2ne125u3voo9rvkX248nzLkEFzi9QB2F",
  "key9": "HxRs44MCT3puYFVk9S9zjSyHtP1K8LMQsrMH3mfUoXZu61zAjGpfYgkkZQdyLx3bTTvToJ7Q59Tw5NpHFfK7Fis",
  "key10": "hJroaAk3vC6RbF8qjRGND3CubGoUtDWEwiGFaXynPjZFh98d3WGuzMZwDfwKuUyoDfYneG8KWZpCzWx7RqjouRE",
  "key11": "2yGzP85ArkpXt6wj1Ris5zX4c2WdCf46LquJKXqznsjbfvPBsGWvhojA3BJQ7rqBioMDn3JCgyfUnHENDenfVKni",
  "key12": "3MwbbT3EwGEPLXa6yQBscMLwdJth7qQxAiEU3YRbqUxteJsrCeFuVBfy8B5tUeFWpqAV8CaFqnP5mimgSDvxth71",
  "key13": "3MyC2hyxsQDB6CNYHj7ds9viQWLJL19DGb7AVj35G8AFNEr2yfTEZ8Ln26qdSdjB4MxksuQ9sNDTGDsZgh5nL8dV",
  "key14": "wS7g1bvjR4yi3NcuEuvHLjmBZLZxANAaiAh4LwTA19jFVzLwrC3mCeyY1fVCSoqWviAo7oQzWm9KpDfN7RYbNxP",
  "key15": "WHqSTfY8NG77iYAqx2gHbNNRfiTzVz7xsHYJBoXBmDYkm9jPZ8mVc8WjVN3g6TskXNNteyZKqc3eHwkVsewFAZo",
  "key16": "2st9dGe7ZXj6gftaQ5t32i1YrNDBLTJbz3tXmnHWgshM46GQf52bmeNyEUKJHCjUmYxzWkYu6wmURYGYp2krhxZD",
  "key17": "47Fc5pBDw3vx1QYav32Mvm22VWP8EPGZ6ywkH1zihZYQaYdHeMLimjSfZvxB7QZxG5wZHaD4Fo4DiU7BqwSVeb4B",
  "key18": "5cssEmDF9dDfkQer9vnFAMD3xgqPQJe66hEjwUvY2Woay4BptRfTbDBsUFEA2pmorDuFBCLNvzhNhZJbmjy71egm",
  "key19": "2xThUqTP4NetE6Y1fRKMTzegzvA5hNUhuGR5xArSnew7RxYqHEFffykiqohsKvkbkbEMBVbQDez8vmvv4qUTm7e5",
  "key20": "2dTmR8LNZ9oDB3rBKZt3KoEqmqiiswCzt9fjkxvzg17tDmeed1Vsa8dk9VbRrft4Uu8uXnQy83PKocn68Zy7BsfX",
  "key21": "5qnfjCuC5heWxT1YpuszbppUX7LnR3q2ru9bXa3Rv4MVSAxUgUDcRjWbscwVKaWaPqXwaMif6KTaqtaFfegXZsz7",
  "key22": "R8ajGGqQPwYcUnommwqQGrSMU8ASdHUrcnMQkG87eaMrMJfhJ6q4yDJuJ9CF1fCj9hkq63MRXNbgoASg8rXD8Zf",
  "key23": "2cn5TKm5eHsGJvWcpcFGPkTyPcNM4VMd34XMptytQF75GoxX7sK8hi1tHqjE4F48aWns2Bt6DXyrPrwRznCLBsT5",
  "key24": "EoP3WQ8oddyAww71ScA8rg2vyFrCQCpAuyVMfPhm5W7E6osXhGqb9aJkvjGz9cekrhpv2p7Yp9Q5pZGXGYmZRcC",
  "key25": "YaF5xY8qaCovDFfBJe2ou5dkVX2K4HygAxBK8Uyiof73FQft3fwbrf8GkjSCEv7y2d7L6GtN3NwKAYC2b5VammQ",
  "key26": "37A9C1BuMtYgh4BqN3jg79oCALe9o9kRSnwgYsEHAq9T1QuPrtSRxDFsBBXHTPUZe9ZHwCHvmmC8q7udx2DyXhSr",
  "key27": "5wMABfrgW6A73PZb3fHskmpQtm7C43UtJjMvjEpmEwepdXjpyBMBwUEHVf4MWfAQif98vJXXSxgYBpHezr4GbooC",
  "key28": "3HhFSfpYvzim8eJsTc7yxHfuCjBucNgB6AQZagrZdYS9jdfVm1cRq1kGBU15sQCz1TEDG1ihS8XxMMPupRNGkCtY",
  "key29": "2yV2jwE1b7APUFgy3qKyrgUqJPwQHk1sAXohNB6TJsnTWAKUidvB5vK6y4VkagUW5yA8uVRYiHLZL93s598Puf2D",
  "key30": "3KWxU5C9gUh5SWXmZGYGuYZmJn8KYxnfvG6EXGFbHrPH9WQSzmKDuQaN8X6P7BHBDHU3Y9p7VxkiYum9n1Ksqhgo",
  "key31": "XzvPkFu6o4MHEEp1sBxZ2DRFtvrPCunAVJ7toiGqpFt4DPcDw69nQbbwRw5EThYaBeyX4Cb8jX2YnYrUBYoURRo",
  "key32": "3HF4DSF2msiSkZP2SpPXj4u96MDpWDKRyiy7n3i6EqzX5MhYx263LrnD1GeyEJEQQ4AoRCgzHjZZSG8gwkBaQD7t",
  "key33": "RK9QSuwz1KEQhNBznFEugWBTrtkSZbJTfaAknN4WezFDw6YZEFoCifdu3TfsjpdJLC9tUzfRZ53dY5K2iy7vXL4",
  "key34": "3PyQzmBfKkSK46JaiYUTdSuUenj5oegCjuksfRG8dKJxUichkZbSFSh4cqg3vuDivGvja9AFpBCwnAT5yq1o4rXX",
  "key35": "2jMxeCicoDGH96KmcDQmMfTN4BaoqtPVwVz7nW4hFmdYXmVmaUJbhuxAYZpQLQDPGjRncdYyqEPadaKKSW7crXk4",
  "key36": "64PK1H8EzijtabWnzuCdgtfD7ccnGztxZUHCopcatDQvzgQHiQmHRwtuHaJWKoVNddV75iMigTXBTMFX5uM9oEUY",
  "key37": "2rjtFiGjccP7MtjnS2G63DSyfnd9udp4JFKfUs1FtjRPT7FhE5wvdfhtjVJSe6ZDDGP1YjB9wSSaxDFu6wNqAXVo",
  "key38": "3cMRyvVSJtyZ7fTMW46Xz4KUZ4c9wtWh8PS8mBFhW9444dnXs96Py26QS1xw7WaWahbhaSrPY7gZq7YqAG1U6uwb"
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
