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
    "kJtV5fVSFkBNpCR8R5SpKiKGHyHodANQvT8VdP8iMgakTYk5cZFpBBxKw1LD81XiA3wc2ntM1n3U2eNSFNMTEgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uTq1tLyi43kNrrfNjTjXtKzEqEXXquuCVM6qD2u25JxkfZCQ7iyEBZ37kykgph7ehgam2ZYNH35QntV2nqaK3do",
  "key1": "Cmxr9BgjAu3Um5wzxqgbowuDwq86CGikxEWVskuyH23Gm8JwEbfWE3A5YaYhDfWTDbWhafXQ9RBTbSPZ1LdXKvt",
  "key2": "63sqw6dFxfmWJmPzfK1pBnvtJdvAYGNCuwEUeWBViawygAjx6EyuX81DfryTkrGN665SDRD7nAyvs6aZEd7BCPrt",
  "key3": "mzC2Cykdk54DAXdkhuUxd6vHL1qp3BNNxLbvf2mx5YzMBwGNjWTLPuGEYpkBoZNkfTwqL7NZR9rGHzYWk8nGwzs",
  "key4": "2KNPguRtEgj8zuHLx7VnFknENqtyUPZNoEXS3aaPY3PQFPYBYd5r5wSzUiv6jAH3RmRP3CAEouJuEEmJA18uhnKk",
  "key5": "KijC6MpiSS4dwvMpW8RiSvzGBTry8cQz33XVhsLeSZtYSuJDDveXwArct3qpR6Pwpvhki9RdhFyydpjtMNeEUy2",
  "key6": "2zkhcSs2iLZjVTJM6wNqwwuwDKm4v71i3sjzGmLZF6b41LseM6ixakuibXf7YgSoCsZUNsyujqxmxSan7bKGa3rv",
  "key7": "4zsBAsntaZoTrTxvFc2dGubsrbxoup1X76XsHgwRa4XRcVTmvLtEfKDWXjQGU5eKwZuiK1BoVF8cWyE6Re23jvVb",
  "key8": "2c5RQbUwEVqYwiFnAdYbnrVWLQtWnP8fLbrjPaX2SESnub9dTFFYsArVjHY58xBXY5mVEExtMSrAmtrg27Ys3aZe",
  "key9": "27u97vuHzobePqzHh7k5kaiKCdy3TRgK9pDhcjwTKpd5keapS6ccuj6STKH3JhdsYr9jyRi6HvQdNR5LYAs5p9i2",
  "key10": "3S4Qtt8Zcn5zqFjykTvWJNvwWr4LqWYTHDghH15Ax3J4PkiynyBh5q4cosJhz2kYJa4rPZq4ZigfN7XoavYxbdmz",
  "key11": "ZMAfZshAEGmPpDzHPRPTnQR8hfowXarSMT4pMRHZWohkfgU8zT7gqMxq4hnu48dDWgDDeQ7mrkuxbFaQEcDqPUZ",
  "key12": "5hGY78YjxMqRMcHuFwKBni3XqhXpFGgLGi1Bh81sQbBbWi5PbZWZzqqpUzjuMFXnwU8w2XBpsJ82DSFquWBxUHuM",
  "key13": "39mCVzAbqZogSyw31XzJP6CNeHaweQv1EuncAZ8PMYTpLZWgvef67MUQ8wcscgWGjLkpo6AAGwPV7WnpNsH8rJ27",
  "key14": "3poCFxHBVjUiJcXt3b3dMb7AJnA1jvYzY5aac4BTdbe3cJ7b5BNYQcy9vQSrQV2yFRS6LAesFvH2Aef8jbXGUzy",
  "key15": "4u7tZUe5YVXGZFUv6HVcAke4jGEfiuVPEmUT3QqTsLYoi863KVdGJbePy7cxcVMjrwofRzSqzhMR34WxhdLo7xQw",
  "key16": "39eCmvLaYrPs9aNTQ8q3exC3fRXU8sz5Q1Md2poYGRUmbhnWD8YmkrXFnZ2yXNZqRShzuMrqMowC6jcAaD11DRtj",
  "key17": "3CKX4tUdWq9HsLJyBVLzE4H9B7aCMWgMvdPppPzNmkG7x5zTAmhJ5e95YUsSvyMqhSBPN6FZXB8zJpzEEULDcKVU",
  "key18": "3U7G8TM4Qp7bKGTsTMrBm2TKNQmxf8zbSXFmfABMYBCvkXrSeE3c2hxgFBtFFY3hgHsCRyCfCJ1NyUtTpCVrFT7w",
  "key19": "59GxX2jUcJnNWx4aVHnyV67CDMjdf1dvn1TYXdSopnccojXwzugiAyeX4Md8HchGTEzQ8Qq4Xt6NVz9xxqz3NsSE",
  "key20": "47M3JvtjzXtX89t9djMrQJDGuGNbqXMjQdSETnrv4favcLmjwwqMC4v1zSjkafmSrdKhZwY4UNVckFUiGdLB3Uvu",
  "key21": "2tZojzsG3oeAxgoaMvtYemH8CrA1nNkJpcovz9YuxfF4hDLAWUEWx2GZXgN6LFEzdZR3xnywG2SEfPF2m3jXv9Hn",
  "key22": "35xy3jWdy5kbYiQjAL8ZfZGofx4YskkHDj4iQJ63GyDU9p5GS7hnGdcFH43D22cD78U9LCDCGwXRLSGVZ2f4SX1J",
  "key23": "TU1GZHNGcnFEBjv8zYJVWF9jg7ARVQGpp4g1NGnNPXs7d4MruUNCLpCCsRNtMUUiFHJSHw58BkZgTPJJv6prvYc",
  "key24": "3mpB3BqYXJ96kPrmq2VpQhGnwo7Gv2ZgqCFCKtaC6K8uDVsdTgwojTvor9LCd4jbNsfrMKKqXPiGowXeaSN7CS1F",
  "key25": "56iCzTmto8zUYziZEi4pGstPbWDtPUx1rPW6dXr8MpiXGtKVaBVDpC4ioQ85tzBvphf98QLAovJefXXjLasbTEaF",
  "key26": "2aneaAysFUVyoMk5uoddn8E5NTjbKL76Zwn4o1zSNhLSRA1g1ef8KJDXV2CzZH1zNoRvC4Ha9QW3zy1m58EbmjFG",
  "key27": "KtXiNaDtJ9waurg8DwrUPjQ9RDZ4ahR6eSw3QMoYyck9a8qvqE4bm4Mb36jvCmadiqfXYJohgB38NhBKwwQT325",
  "key28": "5YSnJqyuFnASxmu4H5xRjtdJdJeHmvSbw3QLuvP4rxCHcUkwXXpt1JnMjKbddZ3xhL5GYg2oqhjd64NvAdptqsCP",
  "key29": "57mb3f6ChzfqwMUqLoUYDRJeDy1WrZD9XiqipxA9zSLAV5MHwsqA4t2DgM7bJttcbBBAEhakxySgvJNwfHzbbStF",
  "key30": "RPUeVwqBdHoX6vzgP9nRZ2xmNajje6BewcwayzL8EriuULbZZz8Sv58diebwDTh1Qi2HKKqZMcwfj5o1Dvkxfju",
  "key31": "4PPz3GkJ6skHbZef8Wz6Jp6DiMvZXpKKPRFrURnQYW4ohkdSTgEErpuFNhWXDYjPAYnQdJZnf5dc7rrtifPpXacm",
  "key32": "4XDE22nk6Vo81YeNwoMsqMESXBgZ3g1pzy6zYtT5RjYkDeFR5CCBG4siXxABg1FA6tjaKRS1upHYbfnioe6N3sRY",
  "key33": "2ef5CRVZGNipiav2KAQxjP1LFgkkUfheoiq1CxAJKc9UD9BzgisLQsznVZ8TzRcMJFdEY33zscSrjtBJ3dKspwL8",
  "key34": "2qg1YT5Le3bdrNK6VnrWgNUEUwJ7D6RUjqhr3neSXMFzyzm7ytA24f4D2EL72oCruGpiLfAe4RtnBTRM8SGYiAng",
  "key35": "2txJ3wmPy2Q438yhxgR9auCmpd586TP8LbnGEiGNcULHrDmuy37TzHvqmSSRqRMYDAJW34f2RL4H62knj6ZKHkRK",
  "key36": "5fKQMxcukN1NNsGDSwsXpe4d5wxkZNNq7tjJa6sP3RTF6FGjkXvGMNHaYWqFEmAAo1otdHhGKxzwrK3LzC9cZcn8",
  "key37": "5dfErtxQRwRNgSt1FHF8fMELoLwT25HeRxQJEWGPxm1AYuk3ArQHzq3pvvDzFHP4zJzV1UnawMoYNYyhXAVCKgcD",
  "key38": "2zzhz7AxJw6kg3in8iABaqnC8mTrTHmc4D6Y1BZ9mF2hKZ7pCLVueqKHd8DUFqq2U1mpbCQBY6gVhGGS15b5gxaX",
  "key39": "58iNemnKWCS2fgaq554D7yLGhosejFD7w1LnX87UeWXh1u9d7fNdRvu3mCQrHxjDoBaCAHKN5pMe7zKb2afjqp8p",
  "key40": "24V8gp5jwY4oe37XSxVYYQkAGfLcmzUjTGHNZTTuouQnLx9g5WGgwH2o3nN4MikMbnFNRf7839xNckGZdWrzkfpp",
  "key41": "XL9WgFo3jagm3p66CP12MEEVvzjDPGgqPYNFY5dGsBHNmsFtCYytC4ELtTG4b84qyspbeKdwewQJiEmP2ApRTAP",
  "key42": "4HQafN9xaeew1126ZcrwgvJCVe8JjXhRqT7LB7yV5gCw3stCG1BUT7mG5StcZxoUeydALY2hdpshTzySxDpSCP6p",
  "key43": "4QviXr5S4Nh4UqB8bdseYTHjW519SqboWo3Kf6XqfjA9txZ7QMDHwY3PEzym7Z2SbdB1sJV9E4DScPfbs8psKyQs",
  "key44": "qsoSAhDFDxb1GSLtTWzCDYNjfZfmRNNUVFF38e6pQZLT24dsz6QfrCtrLBjwcXXMg5DmrxndhcYuB8U6U7qPEuE"
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
