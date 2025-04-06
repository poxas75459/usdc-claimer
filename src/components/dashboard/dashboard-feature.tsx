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
    "3Fagyw3ANV2drZsUEsNEQZaxd24xPFRdJr5JKvcAmyFfqnA2Qc2SHC1aFqkCeB1RAJY7coQb2op3GoZDZFU5mSAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3my1c8QCeXxk35892R1TnxfFgMaqVz1iFBuSwaoYmmhSqkJvtSi2RRQGjm4tdgWYpKpsSjJGdCqR49db1cV6G2ra",
  "key1": "5By5yWC9iUf8aYi7KCZi1LZtCCG9xdq2BPkqVVBJsgRCt3TvdLZhqbbHFrsqfU4rBuUb7ph7ogawPc7nTNwv3cNP",
  "key2": "5Kmht48VPuSpjD6YwmcBbxX4QU7YCG71zvmHHzBB8a1B5963Ng9vHUmEoydtcERq8gVBoyoi7pgmYb3GAK7fKRwJ",
  "key3": "4Z3NQynFwKzofd5fZ5Rr3cuiFj7tZxAdybLA2cZTiAf3k1cCch1tDyMip9YDJUmN7zynuTHhJat7Q8E4ze3rQYHc",
  "key4": "3pWbWrCJwTz5yd9gqjweqXqCXcDRjHTEpqcJFokMwvvNrZUfWsVLtNMLs1usdsZCt43PnD7xP23x6dsQrAyCq3Dv",
  "key5": "4oJUVALDgpEb6Sh8JQ15bdrwpz8MbcSkWM2rc9GmKnzUZSZqk4Q5EUYb7DdfYpNMpxHXfb9kYTYUBi8u9bWe7bBp",
  "key6": "2vbfULtFbexzXDQZPfK7i6nQqjEQ7JwfDPFXNxV88G1Q4CBDEkLdVZDCHKPUYhrPUhtEHMPxqHtFLT7DxhjwCV6U",
  "key7": "5PSTUua3oRzansy7o96eVDCFubKqjJtjnip2KV6kc9c5hS8dcNP9eWaEWRAoiwoiVBUMnFj8xf4EZaAFqjib5MNP",
  "key8": "4uaVrLQEP1sz3p3gz77fFXEXdVoArGrCXwbdL4QnAYmvPN1kWDLNZB1EGUoyEPcA4WtJUsEpZ8DMiP16oQ7JUwYk",
  "key9": "27P1NnVGP6MZ4LrDiYZ6z9rjdFxBCsM8tGHhQdFuktXb8aLGE7UfoaWfMEYboDGA6xiATwNdA7mpt9N6CypbzKz7",
  "key10": "35pVoG4yEtmMmdLU7tHnRPbrSsrzaPJzHMSyBjKBkeNodhgt92XP5C2gt5d2ZUkww2ggxo8J79kjLX27pA5hrQxW",
  "key11": "FMcbzABRVRypPbS51iov3bvnmCJd9zfgYbY8wUcrZwu1RjUJbNyFbU58JMJy1mmeZKKx1CvAZ784RbnjRL4MeTE",
  "key12": "8oaxjoAYkXyiNEn4XryDsXdNPi8QkPidpVXMhiGUpEdNHyMuNYPPbJNtGRuoNANpvoLio8ZGfk7fj4otDh1cLYu",
  "key13": "5rMtiUwQni6F7SYJz8wLAefXCXpGReg7oKSZyqmwCsrvmiK6bVQdemM7XysL5peW3YfbcDVwnzqRVnpuDTWcZkif",
  "key14": "4bYXP51tpg3UQ7tP6FJUdjBgAnQo3AVeyJWnigeAXP12ZRZ32ojcLVQTGUTCRuH8WetSDs1QSmnwMpBoTGXvifhf",
  "key15": "3qeadJMbjWbcm9oxfLQ2bx4YsSMzU6bDmgTZ7WyHM22gap9RryUKLDHJiEuP3KyzaUdKMmfbmkiG2GUofGQejWTg",
  "key16": "5AGD49j7XBAhCZVbVSaUMMg36QgMc1TwcemkVwhjPg1YaDo9dLyWgD29ZD5XKEWwiMLSXBjLjW5cFg5Xzs1yafHA",
  "key17": "4Nn6P2gMTr6eczDmevLSHVaqC5Aoy3TX7cuxBrGnxyRoD9SvS2pRJFPVo1V2UpjNQTdVAYemRBBWTBoRSdz9J2Rq",
  "key18": "KNqQJyk4yZxJTMGqNMNhLGomb384cBXPUT3B8uY1tF7y5cRB4bS19MU6iyDwoxTeDeb4FGgnT7UqLMpAwN9nV1v",
  "key19": "4wwgL1G8HG866DaBNPxxFWMHTSDZuJvC661TQL7U4jmRJaMEUaCWHP41ensRGhALvUoS1DVmxFfvRx3XnZMkLGHB",
  "key20": "3QeSX3JJggrkqRmV3o9UnNJWFxXrSNMVkus3rG8oLiN7bNJ98siDADBDwQ1Vzgrk8qC4AyxVVZWcPUgKHtSf8Rmu",
  "key21": "32r7Mqj6Lyo339z1Tp5iNRuJSZq4Y6Yp9FKCNaezatXfwHBcZFoc6uHmVZsQnyb7hjPEUMFYYpfzDpG7bQcJkyHV",
  "key22": "4przoL618NSy5tTjAangh9R2sw6PDZ3Af1SeLD53QzgkQ2ZD4TFy1nGbHiBJJ1xvrbgWc9MBi5PtzPJKKuSRg4Wv",
  "key23": "LeG1vaVtNC13ayB8TPE5hKiSxFg5H8d7L3NYmzoCkbvWeESJr4GsJPVDoE7QcH9y4Kk1b8YeptnBqXmai9GC6Ed",
  "key24": "3ru3ftaQ8o7nDi9ngaJrZZxx5R7aH3vHqwhDELD3vc7uuHWnJhu8nJ1XhnLwgXdmiq28njURa43DXiE6finEqQ3h",
  "key25": "3FLTXX9dSagGeDEMUiQWbCgAUHNXj9dq3dMbspwgArT58cMqDBPLZBsHmbEpeZQkpJWmu3QXgoCvkDGo2zDTzNCK",
  "key26": "5oQspXvDnyKjqwnruvQ6axCUqH8dBRq7dFKn8rPLMhYs2kDJtUAfbLhmcEqcmuuUCXZJPANuc1GsZDr4Qyojo4bU",
  "key27": "4kXoMNP4jLZm26maARPbFHcQNej2QANDvCXE44pQfWioHS3N668zb1XZVQXWQWXc8UYdPyqyehLej26uniatbvpP",
  "key28": "3zhbGGAWz5jBfwnxFVVLeJCuEL5pjeJihSqFWXAn8vEyz5L7HKkiyiL1syibwzZrR1C9g7xhHu5emeUVWig8pjFy",
  "key29": "2A1fstKTyDe7qxKmHtbypD5hmd3nSqQzRkgKg7m5XD2PLFQxG18KZD5EcHpDLbMJPPbGt2P6d11hpjKGqPmDXta3",
  "key30": "Ujq1SX3Cz3HT26V3jv6SSRQPJVwyKVg7TPr7k8QK6oZUd5esyi2vaPA3zg1ZZAdRC446JYXEKhzycTs5vbY9kuP",
  "key31": "22ByHdQZHgPKA6iuNjoYufAvzLnWqacLnyKwZxAoFwgFdGigJyyWsJR86442Bhy181jaqZ3CNYew1LtJcYMMj8jE",
  "key32": "2QwmKnDsYV6SCpxNwUH9W3UjK3sSDwWeDKE8So882hv9XSyVjsCzfLMCJgQrfmrPX1MFGzARZiDvAoxRAdzNka9V",
  "key33": "55cGAZDabi5wJQSk4J1TFmXxMoqwCdLEofbbEmpjpeDkSF8sGT1ghzbjqhjnM7L71ft73WZUkAwGst88nfb9GqrD",
  "key34": "5TCMAc8bPrcYtSagFDKtRkCt1qBdCp4ky4XGQHQqHABrr9sw19H8DakU5CcE3uivMsEp4MkZt3EPyzB7JYAvbddB",
  "key35": "4akPZCR48zQyHJKS4CxG8KHjb5MVGRfU3FvmU24jYudj4fypoMHr22zzVokhy3rQvBzjy796EwqBn1A53GALBEAB",
  "key36": "4bKZRqRAjeUQgM6cXgTJrbYk1rrEa2RSGiBjnPeMc52im8dvtbFJjgeKi3s4HfmtAjPKCwBXxs9Hh79GAwgT4aTa",
  "key37": "HU1QL7J9c5mQEvmu1fuzjfbYAQYG2wy7prbeQsnqchYx8f1kkLJSPQDzmZx2C27a29m8ytpdpGAC4ithE2kXUyn",
  "key38": "5NPHK8Sqn1xt7qkfe6WRpYjnRa4i6mNfLv4n2ptqKtwd9ZvZTsN3iYswS5kmeX8EmS1Vw6xKY9PCaoNXxhYkSoPk",
  "key39": "28dQ4ZvqjbEuWAWZXGBn5MMUFkScZ6QvoGmS5ywhtXfzSLqhqmbTRaXQPR46MGSsvW2jKxBwWriGY4D15NQ4FCNb"
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
