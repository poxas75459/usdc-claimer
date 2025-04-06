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
    "2EhBJT1yrVzx36xb5Pcq6E6a8DeXH7ga4G4BFzPibtzEhkvMcEu7uAAS36wszGT3GRwktZnFnPfSVDrLgrsvU4Ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "316gdZm9VMpjZsj9gQnPanHL5L7nzERp78gRgKK4UAFeFFz6PVtaggzrQMBkReKCdUHWeYZ6gv1nmAw3uMEug68B",
  "key1": "66qRKNpp87YJrPp7d2KdDTto48BLiqCsbWRwwdwWghYy4LA3UuJugRewG7Rhk3xcyZKBanuGqZivRZrjvS1zKDZe",
  "key2": "4Edsmq81PEpuKhhPLrrorCRUNY9Lt32b3vhxkFckQERiuqQbagP7pwJ3S7uaTgqK2swxWTVGk9qJ52Nt21cUAxht",
  "key3": "33EUrod6UZGvCiUcicjBquzw2p4f8utwHsbVmhRndjZiwU9m9uKkxEiXgxywwdLGs3AQnaSh5hcA6RXX4TGahch1",
  "key4": "2EME3AHXco3CEXNyLFq8EJsNeaba3QC891E835QKtUpiwJz2JqwERdDuqBrJwMUJpjybFGnS1F9AaBCsaPmLV61N",
  "key5": "2NtiJmZVAdqCd5pEm9oMpcM3ciPBkCm3Dhj7QMq9irVkd9VBAUC4Zjdsr8f6hFc7tXKSdXo7XXiSVyrtTWJvPtwE",
  "key6": "55yVy2cqQosYARh4iLcH7mYXocS3fQ9zp15ESD7NGDu6JueGLupZmk4qUf7bpbYTjhp1gHjrmDt3STGTSvNVkYTz",
  "key7": "43LPmxGTTRnmCtecmTpckwSCJyA4WEV8XLVbfyuj2yCckmwLaAAXMSaXydTTY1sMiBkRAJhgNF22yQn5z4BzyrCA",
  "key8": "4JrADcWjrwbkRV7QgNFBeefqgN6BKCccbu35zCr5BKxEcWNQNPgkrue9cTN7M1xjvUKW7CnXM4ziAzMYZ3oFg62R",
  "key9": "4JHRwg7vpqLLdAJo19zJmNGZoeUKPHfDdyD9yWycWWh3whJ5DyQFaLb44DTAyQY7UhH5U6PsawkSrx28y3h4ZYS",
  "key10": "3uXojKm1tpCUNQCbXzdBC7iLk1So6pb6JKeq5a5Cm2y7xk4Ay47NVxXSQzC7ZjGDR1pxGEZJ7SJn7roCqCKUfmLG",
  "key11": "3kU253kt4b38uzoiRUZyKQrMiH55CX474QyFeUXDwF66Tjw8NhgtPQVNH4LToa2wKAoVdExPXvBCaGqJAGXFFcTD",
  "key12": "3hpYuYxgaZRdW254cskZxKj1MUQUtc4E6Kg4ZrvtdPAaHY1v6ykAY4n2VonEY6SP4LBUeeUfGjPBx3VeMCjon9HZ",
  "key13": "5VbyZi3ycD9KapchDkzT2DJyCWstfBH99kaTqfKiE7Z5oADZ4DpmA3XmzfgwYUhJEtKR6qvxEqEjg174wE79vqh2",
  "key14": "3SViQ4RhYuxGW6Mz1SpxddcMCNTn7ReYmKuVp69CUg17MqpSfK6LXjJwetBdimbt4PYDvCxB9H2LPdLZonpHQSon",
  "key15": "ZUd5WiGxqKvKF9g4m39S16DG7E4AJM8Ba4aPxzn5a9nmxnZFds7hCAAARx52diRmTqRwPm5gQ9QVaEJARhMDTGb",
  "key16": "3uCsWsppiieA9V9s6uTbWFAETcXFDxZCVbsaTq1NjwTkAEVt4MkSYW5gZjUYHfvmSV7qGLoKVwsHFr1pFKyx7B9U",
  "key17": "An8MMYASNSoeE9tmbpFk5Vfah8jfcWgiW3DGhFPRTUicDERjePJgz87XHB5tXGxkh37hX3Pc55WSxxMqzqAoqWF",
  "key18": "57BcQ9NFzAQkUtJ6gaL99H7p5TuGHUWjuBr5VxiEa2RHEGdLRF6s4odMnpE4FWgLJmyQT3Q1YfoyDeX4XLxUcyvi",
  "key19": "vWj9csuiL3oR7Ah3XuUhpK86Myd8u5MzUTVa37ngA89n62o5CPxTyRk8skttaTLvi6h7vti5vsrUBSMPNkyXvoS",
  "key20": "3cPF4VutTe5fCi9Dnw7AxEN2apMypjUihhSkSw8J1CC9hgXd3isWRpBAGrdAQms32oxuDfgmbwJcvuVBHdVZoddm",
  "key21": "3aKBwR2tx5mruisQV889cCz6kD9MB4bTnHB64WCZ7NY4XjnKPKXXsvB1qH3wGQbkgtsm7R5XSqdKR7dSkPDrrYv3",
  "key22": "5ewiV8nvLsJ2nryDS9upTxVpKRGHPyf9eAxoC8HVgkaAEtwCJDwS1uSgESJj1UvhJ7x7csJcLu5iS9nSib7kJBb6",
  "key23": "yfvN3nJ265T46FfAifXPdzD6eTyRJsoDyMTzXpovDmab7T1Ma39mTecxVeaJ9aA4EFJc33B6V6BB3Ldc1wnf8e3",
  "key24": "3wmvFZvpumZMi3ws6dXyKE7bc7Q5t8i85aQ8EjzmUH1BZAEkcRVVKj1FdtFN3owHsHhmx7XUcJDgq6TpgFwa3Jau",
  "key25": "31EkXMeNc6xbsC15xyiA77XL3mVNKpMSpq9TDHQJEFqs5L4YTce2GiCDEeCrVKqv63DJyQYxPDjsJZkvDBZxuPLo",
  "key26": "sFGE7kCvivBzTLKj12dAmWMSfvDhA4YExswD2t3mDr8ZM8JJ2yTVbj5sKPthjr8qJJMb4JPCVvCT7BMqqrSmokV",
  "key27": "CtKNkWBgfDfUzgqMDuziqnFFJibAVJWbrYrfBEpmNaLNDXvmY1rUrej7tGdT5CNTgzjjzXPhiWxgYkA81fg5Dxc",
  "key28": "2Z3xzsu1oxwMjK8snmYgpAv5CR8zFbBYKpd1KYuc8Yxd7qfdVYbuP1NpdddT4tf3r6WVzD3TAZdHEmMdhJUr6nTu",
  "key29": "47XqdzuN7h6SsnX7EPrtokSAcLkWXZYFyK5hpz3kRPbA9zq97PjKhqDc3BcGcomFwQuWda7BMp2PxwP79UM2ATU8",
  "key30": "5pKgqpwuJVTTX3w4dKVtF55M8PWp1ZHkLRyuEVgB553PWifKybQjjzTjjEc8sU6VE5KB3hW31up1Pmp9sa2mVuMD",
  "key31": "4eLYL1Qk92FdgoevgFj5rxisE82SKFGD62fzPHJXWBDTQZkY4L2YoFHVjEw3YEGUdB2YbkxeQrqeVbhoYVRLCj7k",
  "key32": "4mDHQ2q5LL5i8bvbEAStAn4QfqLmPd6G2kFkgAHSKqJzEsVLxULZoCdjzJmuKomwN5WBZCZmqrKuFKwEdk1r4SeA",
  "key33": "4ntx6R1a5N6LexKeaksnVLxGgPcLChU6ZrvivyrZzhK21QetcRmThxiQ2bYLJAs7nxm98MkEupQeCXiFsoHvMeWE",
  "key34": "2dHqC9cm24FMK8j5cmZf4umFFW6ztaogkfCs3Qk3CEmVGLdiPGGMkkbBsyHvbjJaeafaWGekGaxi5sMnaMGNeR5Q",
  "key35": "3oqg98nmJXevF6Ci3ear2NKCqUS1XyQTMMoXbvcfoDAzwuDu29CGHxMXpxCkAit1xoG2DMrf6bMLXqaoWBbotoaz",
  "key36": "4yq7jg3cQskas283qk1xXunWtG2QmD6LqFHXhc6GyFgw7TsDdMUWkCqyetXyAkSrWa4i7Czoerz3FX4PUyqedCmF",
  "key37": "5Ev4qzSSjW9XQPvxjDZz5gVYboaSFVEz4YG7qd6hCJ1ZCy7nHZRFUJYYXLMZPmrDptwsik69c81v2NStMfySyWy9",
  "key38": "2M7LVcFbETdNtTAzMwAABtoGv8EMNRgB9Pqdgk9AtXSxuzZKf2Yq2MMqiygBA5y3NDNnDEzZ7rUzBAGRof1kvnFm",
  "key39": "7xcfDebGq5CkdYJhUce7h2pfUhb2iuKbNyd261sxPnrUkWNNq6nWJHnFUy39JBd9ZUuvcgsU5yAS9JXnkQpeoEZ",
  "key40": "24VbUAYoFPi8VB2fsMyqgmkm9GrWSDggDfCDeauTPQyRB6L4WmSbTB58rU215kGiWJTmy4k7inzqA7fezuDkXMoy",
  "key41": "2NNCxVFZaekJTPGL2RatufbFnPP9oKoqiqiQZCSZJeKYyW3HJVCaRu7AZdcpSKi3C5WnPrt1Jb7VogF4k62SUjM1",
  "key42": "5VUA3HhyqNf6xnk9gjzVnwpvA44KWSmd4eVdzWUpxH4TTTtqpwcUCo3L5JveqKeJ9xHcNgFHfxcjnM6AS39H3yut",
  "key43": "2A4xhtgD8e1GxbRTqRJawd1Rc7nBLLu7mELgf8WGPmYrhnFnNRYRjRLqCg4UUBqoYQi828sWhUWpgeU8DbmUhk6p",
  "key44": "2QDJ4uUUWfQS47fqWaH9rfKpFRCc2juAqeuerwZ2a5TvN7VFkUkmJYaPsx6wcvP3b97wxBv6Gw2aL3vFfuPyWHMb",
  "key45": "5kGDqEPTDL1AhEAetJ38PtM6jRUZkQ2yfGuvwF5KeQDZ2cKHweuMuX825sayYHKiVVtkU4CE4z6PSs1H9gmJyCQB",
  "key46": "4SyMinUusAzgGQja815PoM79g6pDKNb8rGuFGJNNZ8R8P7Yuw17jh5jT6iW4cmssxiSAJdadWpkJz3uK4FhWFqCv",
  "key47": "5C5MCwP1sME8nLi2RzMUr159b3NiZ1gRXLtkvRzESXV6hXfsZafGzPrEWEkL5HwYudDoqRXHtESNSnFqDyaVy76t",
  "key48": "2EbYqhSv28d7NozR68bM3wJEnnHsVSD7eg53pxrCAcwVZZoyZvHMrFYG6xPKdJG3ntnLL7A5mCYvBP1boNLmLUd2",
  "key49": "2Kea2FWwHu7TSW5mAfTUuSJ9eUogtUkL9YD2zKWmcFW2awBQLBaDcHJ4huyNBpcKdhEo7L6aQCTUqmn6Xnvm4qa3"
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
