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
    "2XPgPdVAJmxs5VeZP1fzNhfAvjuzTZ786bsvuCS2txMhkKScK9mewV9SUikNXxXkwwQtVCgfegKJngavUKGUwjFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ttk36NMcZbBPYWrMd9QESfqXNbzrd1saYcJmghuZEE9fSqeNXxf2nyknJsRhjtrqMfoBf7GUKGpQVVbT22ekj3J",
  "key1": "5GkNm2Ztnu7yg1iiV47BAxiYtD7JA2BNfbj6xCLbyrini3ZGC7ULYt65Gut6r6LPn1vvZgwuTBdtV4aZKtRBHkpR",
  "key2": "5fWc96Hp5Tnq1NzqEbFyXRTU5wPeTx7aEkV9oJ5bcxPF1ep2C7Xr1pDjTBJvgcS7drit9P1kaRt5YTGiTQ2KmDTN",
  "key3": "5B6mpbs7PbzJ225xBanRVW93Sr4SGBgyX8DGAjqdwmt4bnqJRSqYfN9YZBqfDY3KQ3jFZrVLFPkNNiZVrMoiWyBz",
  "key4": "yWwzW8cJUBGVgvrW65DizLzUFnopikWVEEiTnPHhVyodVbjHEzhc5Qk3YsskgfeVePoC2fRQLbgF8dn7L5j8MGf",
  "key5": "5xGyxWhk1umq7umneTkpDSsoKKZk5nSQ36PNKn9Wpj4mz5iPuGopPbUiPTe72KWNN2ZUN4wRQ5VpTe3hUf2CRh9C",
  "key6": "5rZ1Ds2yFFb43oeBsgPuN6GHwATtnMVgkGpX8XD42iJUcUBYGTK7rSotJyfZGUmouTQpeWcLKRuFASmTDZyanNsw",
  "key7": "34jCNam2P5QYwewiZ2fYevbK6uk5vse8CXsGhhakWH8dJoJPEEFiq8EJh6gTRKgo58y13CZsoZpK2sApPXkCHNkw",
  "key8": "4DfAmgEzTTC44dzEjLctHKyTMrSpTGKNBYwT3oj4FUuR6TkKmNaWXUCyi6omomWVnwcKjSagcWhtaRRtprLQd2KB",
  "key9": "fRM3nSdbkwpzRgHYt7oukRUYt1jzibiT3sm4WUNRXe8hnygRz1WsBUot5LKHdevdgnwe7S9cutc5i5pgedUakqf",
  "key10": "Xja8t4EobMyy26jJL5QqdPybXvpFFvEDo83Fnk3wVrLjmsLBBUDLkHu4vGARxuxFaBRLuskQG5H57ZJiJZmKjhf",
  "key11": "3THuDx6gud35JdLwK8mHYCoax3bAAGHZL8AevGPvVCgMsA5ij21HesKWQG16t8x96yDH8YFj8BNEb6fc9LpYmxZV",
  "key12": "3KZc7vkMnYjCUuRxzghNhohQWk8e65f5CuM6vNZ6tnCvimzEYvQi3UGmxpXJX1WAn3bnUAxJoaYAvQUPxC82ZqBQ",
  "key13": "5eQHisE5AV4WkSbsXGM5mWVGFRVJMLDDxzRUCgBKoK5yHVUfDc6xsw1yscWgX3tLo4jjNHFoViAHNHEeCzfHoJAx",
  "key14": "4hdSgGBN82tDPzX8tqNrBNWzKXBBJtBxyoe5BYqg5oxQCiWXf8NEL2W86a2k18TZCZENiyf2zC8FjobPFraouRWR",
  "key15": "2RjJLCbFDw51o2x9ixTmv25NLRnPd45dyYj45G5ezYmkubR7Z3VKUESJ3ZW9zcnL4wjSGSNibtheBuFv6xBJYvKD",
  "key16": "5emExBgbFcJoUEMESHkdYbxsRbZToeFm4N4Zd9SgLLqwXuM3Zf4QSBkbJuT5yqJfkjWFZvMczacLkeyqhAogQ9f1",
  "key17": "4X2FETpfSRr5MNidNJskmgF2GLU6ixbP6WoVACHQtsni6qxKEjvBMqf2nZ8WstBWFm2D6hQcbqgcE554QwLFmTu4",
  "key18": "4UjmeqSAwXrj2FSTFMAXBizmuJEdToDDqNzCszRgTLcL6mjoWC5yExtPbgbsM7xv4SL2bMQW7xgXyfLXdtv3KJF",
  "key19": "4fbtM11yWD6wZXkUQmqePjW1ea21LnCJQ8jKgTttLwqmP4cgRBNTqNPiT1eqdEowXdaeNikkVqzbkRU81aeKrdd3",
  "key20": "4ycDyumsAYAsQuhKj3HXGsYFMqSdPg4vAC3JzSiM81r6DqsP95GBPXZJggq98UMJqGrEBHLCioBHkoN2P98KzanQ",
  "key21": "2CgrugJ1T3AhDG9wyV9D6KtVpWg8DmUQESzQyCv1pHovRY2zVZA6h3BiknHsD8vB2XE6DG5gni3SkTW7WgU6NwLi",
  "key22": "4oay3sL4fgEwCkG5tVrbFow2R7xtxd1w2TumJVLasgvT9mbWd3NrVZEhNCLQ5FocQVmithyXjmtST2uqa6aL8aN8",
  "key23": "5d3xkEp6f89DfWCJZHYYnwXan2AQwuPHmpZMWqHQrAx51s7XJMZ5xbQLYjkixp4XfxxH2mcANWrdhSp4Rnm7taij",
  "key24": "L4QGxGF96yJvCESsS2ogzfwNJ1Ngk3zk3ud4mgTjWC5ryJhP8s4Rco3TusPxw5w8PY9vC9y6eL8UovkBffUgET7",
  "key25": "4tujnf1Nn7bLLpYsBpNgXBMzbYWXxHZmauAkU5jvKqz1zRGQzqYE31UrxNeoewUUyxAeZyTm8i3b7uMbR6nBex7D",
  "key26": "3mDuMHcCPaXDyKRD6Yo3QJRFfJTGB1gjALb1oYDuhnBY6o2qQBNZwBMkwMBWcKMTXFQ438eAerTUavw1da15tqKy",
  "key27": "5dZ1Gt62CANJtS5zXWqX8zE46FFU51z13YxxbXd8bkEZrKqWQj6NK2jXAPCatDLvxLWMni6bWfMtWMCc1uNU4Hmq",
  "key28": "Yo6h4DPk9m4rxzvNRfBKp461nvBBdAXY4vcETkrxkWaEakb2SyGDYHE1Eh5U7HNptk8uD2SdUM3K5AdekAkxE7n",
  "key29": "5DTFrySKyazaKMrA2QaELhsVaKbNVwtEkqvu9ijeLRQc9am9j9LVGayBsonVi6MyLTXzwzDjtv79ZUXiNcacUAa2",
  "key30": "7ZhpRvDr8NjNoQnHBUFytLbMX2FtGhQb6RgzMcNS3Jb5dckU9NbW1YTMVgX6FSsY2DKHWMHF7fa65DTsThRNStF",
  "key31": "5mvhuyTFz3YYeM5iuQxTPxPQnYp9f78QnYjhn9brpqaPiKR1E9AsQseF4hDMghDDyWsJnETBPPjxwbE1tVa4ad8P",
  "key32": "5jPbibW5F87dno2cZC4iy2VQuq9fLZpjq3f9zmiPZQUyxNGNJ8ZonjHrdykbdmffNWuvBHw3MaBEdehEjvLXizvT",
  "key33": "3Fgm2Rgmee4wJssLKTHU6phJumKeTXmKHtHENbZqxPewMYcWmSRfXXGVbVP5F3mU7f6oqGTwcUywX9T9szs1pdwS",
  "key34": "4twoEYiCUsBnKAAdaBFFoB7LF7cwJvpbgJi5uJ3mPEPM3HKHKXE8CvHzKm1vm65j8MXfHq8rNvhPg91A2GYrQURs",
  "key35": "2FKDFxBRozz23boJY9uXNjgmUUU89p7Ff64wcXJ9dWfjvmXd7Bo5ttWQgdAmdmdSpRYykhK5MkcAJfNm3AU6aGrz",
  "key36": "3oJypbF62PJQFB53ndgqifH2Hcww8uyUK7xC1LSgWxUDa6p1FJmjjzYbSw7KB2TFWGRkX5bLqo9dAd9BPHBZKKpb"
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
