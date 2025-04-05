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
    "bSw8aZSsdCSUSiiaZRyUAAZEetciB9H8uRaYhHBofsVwyWbbrpEaviF7FifqZ4i9Mb7dp8Jeia1JHNRxSz9aoc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uECEkX6g47uvQnhomckM9itZJ4wZsQzXsu185LAAbjpozxaL7GtzHrmnK13kf11ZLHqnoKAz6eAbWU3eoaL1R4m",
  "key1": "3JaQAjQDqLtrphyB4q4yDrfBn2Ai2i9yRsiypN91WpvmRSb7PFfwG7jjc73d94qxQzKAnckNTjfrDYNhrc7NdpAz",
  "key2": "jiJ7uFQDLecLcrtfp3odjFeQxvgoz7pDR7aH57mMD4RpsGh9693iykyW4MxwgdGwhXmFxYriJHCLsQN2iHZbRXR",
  "key3": "4KCxEGyarSr38Je6R1o8VWk7tgLFuh8ZxUbzvn7SpAXyXDZVX5jr3rPAKWGter1GjvQ3DN96xu1GUPvVdcigs55V",
  "key4": "3hXxdRS9eA3zj7oRX2bHdmBAp55YcnHkDYP4VobR9GtGTwDC6e9rm7mXDMwJNrNDfyx3BF62K1bnsLt3rFAn2pCm",
  "key5": "2bPtbR8qEfQReEd9pSUVfGgfZ2Shh2TEL5n4Z3fkuTsHcKwiXPnxEvkGys6QEdVVFcZkc5aaaVujM1cy6F7as6yj",
  "key6": "3eQZVBdZfx6SUjit4qKoh89GQDTrprgc6vGPwtndQRHjko88tV1P1KUsVBPRYa8Z7RBZTM7MSnuX9BcHmMnbbALy",
  "key7": "2iQqVgBVMCvjgYV5bm5QQrbi3CeuSZaKFDys1sbvP96KJBU5Cfws7abGbN2Zt6dm6JDF4UtGFPxx9h37ygUAvKHu",
  "key8": "2xYkFwFUZ4UjZMcquiKkU6t73eoJp3apRjPPbK12b4mD6aLqQSULppqJYhqoQMQfDoSGmnJp2j3W2aHEA1Kh8UeL",
  "key9": "4f7YP71hT9LYqV5mbsm5bYW5WfNgKkeWXd7XQgfRwSKXP6TJDL6fXam5Npg5GHaw53kFTd1nYM46JwoveTcgn6nV",
  "key10": "CAQofKijRiSvkxn1fJpJxuEFQVt8UeTWq8XfngaebvMV4HW65TpzY2oYf4V2z94T4Xa1mmYdUEGswpWfH2dyS6T",
  "key11": "5XEj8nnLJrTSdSBfNaWfsNy594Bq7bxuoeqpoHzjCLEyZzwmEVG3gnJidbi2WBJ5L8cKrNmVkxiKhuW3K6cS3nGE",
  "key12": "2PVRCFefgZfsuamwmyCYciPyww2BqVbMBikBtKAKGJorJ93dJniJNwHDvJms2fBh4ZdyXjeEuZe3RsPGzMrzWB5F",
  "key13": "2jpdbczmYU8DzYwuod2ehYEokH4BQ1XGbdwKe89oF2uq8jyK5CeZ4HnTrFSrvPNrbEPbYkNzCA7svchyi3szf48c",
  "key14": "3NXJQxKrNwL9juHE4zRkP23WjKYrA5fVW6xMoar1vJoAZ3ZgqeAEsD2HP6S4XYhr1NH69fk4Y2jSWLgEEWwMPSHR",
  "key15": "41tnQ5ZXj1VadZ21v3eiu8geBnYMb3CP2hSyXr77t1SrQHBM3gsYHQJfLUbHRtS7fqmEY4CsZLJoDp954ctokPHz",
  "key16": "5Xe6ZunZTvdf1WxBSMne7YJWdhnRBKvjG5SqdxkFaBfjqiu47iQLStQz8f8LQdP3wGxJ4XxwBd9Qb8wJB9c8zCBS",
  "key17": "5i8dhx6kvt39ggz462v8KLPWPtepTDbLmZPh7zurx5FUiJ56CqUYxPR6UeuxVrr7KuBcmUzvqWMymWdJwvZmcFRG",
  "key18": "5NJZFRvY2BZ2PgpaEhLxpvZQhnGBADoc4rCpQe5qZnRoMxzHEyzQATNUwXz8jwUXSzBKkbNTGwikwR2RwZnvgCc",
  "key19": "38eiHetwfruvv3HhGsjS75BWHQLFfBy2FJG2P6Yqg5mwD73cg5iYiXtJW1okcYZqJwejjMhYGRW8zWmqKXV9ZoUz",
  "key20": "3WYEx9APf8mc4ktGmhnRcN56QMaPt1dzaVs3khtpTbEwVLesFMsSGsZLWc2rvGi3xcbQBs5UJHeocfdFD3zVyc4r",
  "key21": "4UvUaGtwEZvZDr8PMYt8EjvbE9qQXhyw6ukb9zr4KmQ9xoK41Fd4ZxidgUeGT46aMhJvgd1efDrRk13YQCFyzqpG",
  "key22": "5V1uQvkxhxRoUPvFmVUeXpoBQucPCjWxuHAddEAxczT1tqehveuknLDce7A2x3BJoUbpZx1e7S88NVaKatJz7DGK",
  "key23": "2HERKjjxJ88c9UQedPmXL6oZWEyxZy55dKXrQtRYtwK2CgS41navwi7TikntPTB2Eat5gC73HppdGKhMv1VPkhFi",
  "key24": "5WPviYw1pgcE42NBmndXu9zvjmK8Z6tix8gqRyzTn6jKPpcqXSDsdybV2dRJ6wxKypvBH4hnv471Qx1GjwWxG2en",
  "key25": "4jPSQnSqwZyrk1PL7SzY8Vuq2g2dTpPVMaxYmLT9nKxdgu8iiuDAJj4s8iomHvH4RyhLqbgJYF46wfRrNLjTNtAn",
  "key26": "5QzUQyzTB6SsK7MX5dLFjb9gbvwknwEGjnuhkffwovD5WARMTDy1ZVMaGsTULf5zhJs9Capbh7Lkjn36CWNkgHAh",
  "key27": "gVzsgcESHpxYkXc66dh4cShShCKG8qNQbwUSmKKn2h8BF6BR6Sn76ykxJa1fDCnxhZZvp84UDU7G6vt2USWmQCs",
  "key28": "5HBWcCnLog5mnNVks3fxhH7CGEvyZp13dWxWNZBzJ32AV7hWyF7qzJEZhBnoTu9bc8jy6G4ndzaKA4tibiJshYc9",
  "key29": "39VQRCG3apfd8uTQChgrL9a3ARchLEFdZGfnQRQubZLfvnhDRUprtiFwuMEd5WE81rDMtTiyHvx37gefE1avSHfC",
  "key30": "5JWkep3LP3R1BMLjeHGNkkFaXnEvuAQ7uqoFYSJWTjHBFwozd2GCDBwJWfHwDLfPj5wfabdecwLcsmoyKVM6BY9W",
  "key31": "cttKjSUUQn7z9MeiYmApJRZHQqSFjN4MH9Vs3cZkriTRkhn9gdBVC3w6QNtzBr7reqKwArLJ5uunG7A4Bqnmuhz",
  "key32": "3kjUaq1Fifi9ZX9SfzXyPnkVQbsYHkZiubsLg3QetYjkgSUbSaFSg3p2qYQccJd4SkFjoKe1MqLgVjByEVy47Z9U",
  "key33": "5VtqzfjoDQxSs1ZHSb4KY8CzbQ6cftk1BEuNgPtBALxK5784mj7Z8ZMFXSos48wFMruZsUoykzCJ9pSTEQL3BET5",
  "key34": "62g8Wcn6gjQh9Bg5J2Y92QvjTFPufdJBr6pHKCxc17j8vPt4q9smHud98LvjFUWUsLPHkhMf7jK1n9vHvKBugu6p",
  "key35": "3XXnPFA3jy75zsCkXozJMCjSmrimGG2CVTGVmvyMKT48osMkFfQ67gE3oyUTfjm9Lj3aH7VigsfGudCuafYbYPWi",
  "key36": "USwNPiTtNGxk5T7GV2vYBtkcMhf1agHgKjeBmbwy3nhFS61H5X7VTQ6F8n3ivLEAMDgkvjQHArurhd195PnTq4x",
  "key37": "4JZi8k5mrQkepo6yYM93tzbXZQ84ybTNz8gRNGshEgHeUtg2hh66hPC4rDvPwVm8vQu4eeyM2KRiboP18bydyPka",
  "key38": "5RK7YcY7oXeVdR2Sp1qBUpDEEKVbFFFxmvdBnHaBNETucU5R7VsDHvfjGNXYj1Eouf9miCpbrKJki81by3M88Eij",
  "key39": "3zRq8SamqrcNpeEQb6RqPgqHFtk7crb1M9LULcVgZwJhzvMuSFf3aWxek7PzwbmLQyNvspBr27RffmVKi6azgrii",
  "key40": "3VscdQR5VBYM8rMkaNmopyzG5u2xaeGdNopphepf9MrEkbE1rvTv4MCwz98Spq7oVDUzWpBvjMZXpAjuVz27WsZR",
  "key41": "35HqbZ8zdyLTQEHwTJuYFuD91wtQpXcLfUc94gASsCsT8omzai6K6GJJ4HAdvR23d6VhaFimB12JaDz5Zf4e8tAT"
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
