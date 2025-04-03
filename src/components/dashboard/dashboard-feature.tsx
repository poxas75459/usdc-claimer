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
    "26xEg86mYZix37sJCcDcrhQG66ZtdaCoQceEedSvUhRxUkdTHUpAibjQUqaqGDunRG9k2Z7ikscvTkGD1J5vK6CW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B8PHDauHkYBMYKJ9Fz8sQnTE7zWfAbKMynBGB77RMPRcTZcbSpJqutxziLpYbfaNREWYKoHgXGAtYgKZT2d2W8Y",
  "key1": "k8JCazhj3Nu5o544xx5WbQx43MNadaWgnCsyLgfVcxNbPEoH6TVK1Dx6DtH5j4Vz8GRccCQdJLTvz5sAYtWzpNV",
  "key2": "UzZKCzG3xxtUhK1R3qtchKJkpB2DYLCLZkSDv89kj9MpxyyhSEPGHYAHGgJ42evHPE1oiFc3hg3as7f1YCx4tYx",
  "key3": "2eeT94nkbRAWjkVUdSQHcbEBKtnbMwtrtKXdriZ39PYmG1PYFFT7nWEUhTWDoXbNUt5G7CRaudecjigCUpEiz4Dv",
  "key4": "38Jn1HN6xUTAoPXuo7cD2xAy1aVpoPXZKZwWuxuMEowsyP9ojnS7s2GDvHQhhShXn6Ljpo4FhhpCKbCxP12ujSAM",
  "key5": "sHfEMneanjgBaHp87iTHeuvgyTC7aJeMfpDZLzZSLZ8NF7w4rHeWRqWZFkNehLeSP7hBfujBMNcT4G7AeUa7idZ",
  "key6": "RKmsBkEpqUiYFKdpii4y9Cem39xBosw8qQkLSzhnKC9xAge77dgL8dMVnNDz212wBN3D19nqj2PGPX9mC6Da92J",
  "key7": "5mQ7u3MT5mSnGKWAY7JC1qeMogp5ar6PpTWDrVoHvhGZmJn83DwiYVxDMnhMsuvK1ifLH6aXVDJiG1jzUEmwZJzd",
  "key8": "5Y9iJfmu83PYenwYKYSPcNKyNr3dzDhk4YLgQ8bSRM4cNZLids6a2mbkVYmWj67LRwW7Ss9EzVs8Y6yPHEohoxZm",
  "key9": "54kJzpQxySKLMiCH38GzduSS9hJ8GdTVdzwUoCEckaFQJyyRDhAEA1yc4DsxHA5L1NgbxEp84iTP6VAUGHp67B93",
  "key10": "35KFsZbK6ybJZpJguy3EFCDcHx4KxcDhr3oxfv6nFhbEuCSrXSESSV1vzDc9yehRtqd7GwpkZoi1RZEdB6sAgUSy",
  "key11": "4owonXGtEnPogQUqcF9C4uc3wDXgvLDFaUuYTwvubcqY6sejJ54CS5mRy83A9sRWWDupGx6gAwC6uk3VdWNi3bJZ",
  "key12": "5oPU9SUZTTciiym7hsLzHxVMTFRFngwvicdEiKSxuN35Tz5LpnciqBeQoVQKYSWkqAJPGZCTBQzUftWP28vCsEye",
  "key13": "2UA1QqnzDsUekkZacnzerTeEGe5s2d2f69K78FsR9tXhBEg1XLyGZyHCAA4WmXv3EQYuQcMbiwDv2NGHReC8CmdH",
  "key14": "5sANrjhbQk8rroMrqrvxiARPN2s6ph3ZBeWamesYusNFDbAGvCKpwA6qyiq97pYvAyGJajuR7FbFamiyW1jhA9ij",
  "key15": "2qnPWa28EB4tFxAMxCyu1urgWsKwZrsJzM92sdHUHmkQy91a1K639eYizW5G3WPQpoauvFcuw4g9F5aEEA9oPJ3o",
  "key16": "2jCck9AfKLeb1aSJw54GW4G2enWRsjVvc8VX7Fq8PUJNhs4aZhVNo4kbEKBdGXH8nahpCWh3hzh9AzfMA7Lp2Eor",
  "key17": "mtqQFKTQA6nCMjhWmQnSUv9gMtZMtyWNaUuF1w4MEqA8aYjiXUUKTVh25fpAXq5uFrrvqvPrmGkkbyaEKxULrtW",
  "key18": "4H4ZS3cAwv2EDwvcNftS3vmSDBZFCzjuaX4SrZBMu95cRbVe4sCdSCgtK1pW1zLNzDN7Y6DqK1zwyVKdA1TqT13T",
  "key19": "2uihtqxWCZagMQoWGpxx5EZ2kW36aHHEHW1MwyEdtsuDQ4BfhANVqLc8tF8BNQBohkhf9e6j8CXb46VgbabtHV4K",
  "key20": "2a6dqDdFLH4qx7iCLtKnPhymkFya5bn14fX9gUs35baf6wLAwttdJ3NnFNQPQZNGa5835v8WdMobJzXcA9z58fu7",
  "key21": "611Sh2mhUGq1JCfDwnzpz6aX5Q8XWTgwnNAeHzLFHRDXnvWf9bEGYArjNAYpSL3HQGU2BfPTqzkxJgM7nAhfNFtg",
  "key22": "5ADV5yng85Td9yqRABEnrAknsChw1MXJx2mpmwmiYwa9QLfQ5uzgyH51LNQZ45TVt9NUJJFFUqCFSbC3s6jLiE7E",
  "key23": "5ZSexssMz3wfUQfUH3veHHNceUxFLpWRbYcHMBJmar9X9PRSecrU5So2YAFJS38ZLZMArGhqUj19og7uegaGiRP6",
  "key24": "4n9yttC7bhAgfgygAbig5Ab26akhiEBS8pxrMhKw67B3frwVW62GLi6L4dX92ZbqQ8h6VaXvUC4yX5ufvEDLBizW",
  "key25": "4434KQzXtnFfcYEXTWQRM8qawBvvqFQnGHD4STNJFbrFaj6hi9qGTbBxy1TJ3yLd57o5rWYbDQkEfy28H3rC6Pa8",
  "key26": "6ekxVbfNcJwEZNBKdrq4kRSw6Y8YbC8UE3pneXabSsagk7aB13QySrnyoFuqTnHhkKmZGQN6RwXvuNzbMhHiDAc",
  "key27": "pXz4g2z6LMuMDyEU3WqNYhLvfRC7Cc1Crirz8B6VhwWwaeusurVbY32NvFhksVx9Ci6cACY9ye4SNCG6jCJhV1r",
  "key28": "3gmchaDew5XvhXow33ZZHqyfUCKJ1FdVbdRysPDp7GAcHif1R83h8ACRfx7QhimXyb8DTAtJHqXwy4XgwHgHpN9k",
  "key29": "33VjqZP8wHRQsTkoX5U4jJ4TfW6aZWv9H2KZNgJGwtJ7RJkGPJ3DB1kHBVozCfHGLENMPgSx7hzNMpZka4Six4EG",
  "key30": "3A5U11UBx25EGkiTvW1pa5ji67Mex5cHmedLK82UGyBje4Koj845vENgMERR6uf63vXkCASG7ieF4SSjoGuVA5TG",
  "key31": "5sPK9RyTnJcEaXQgE673mhV7QQ8mhfS6XCZeBWnGugFY2k29M934aNCGvSZ6wdFe6ZS37gmDuevCTMVbGBqpoUCa",
  "key32": "59aAGFo6dwGbENNHMbhdyFKQ8B2t4bFaX9afJgFX9eqZKMbx3Y7hZEJQwB2nmHPrfbYtXYUUYAxLNvu9WSSpVNnR",
  "key33": "kzPiFpnCqDKKNEWapnwNrBm6dTeFDbUckykXUq6oUqXMMgdkchH2T64C7dfwFVFuPFi3cEjdXJFH5uVqtrxBKRi",
  "key34": "XaxH5FP5wW9YVDwBDtSzPJVXUxNoQJQd3yM7ZiDg1ZUuZMTA2iUTPToo7HmTytVLCAPtnb2qUVm86xCfDjfyzph",
  "key35": "2t6E9Qrsjh9bsBTHw8T7eCr4vmpCBhWSJgpoDt2QwRZbn9U5ExpjAQ2nek8gfDhMQA38ZsWD9A2Wqh5BmsHyiq9m",
  "key36": "4wiQovFWZyQYJdc6Gejz2QhYHx8Nacqj5aUCXp4rAweEenVyBiLhD6vfEgH6ih6SXmmaXM7vCe7LeBZ9yDzcuzaz",
  "key37": "VkE5DotTb5FjdpDxdNTcoRSs6hbPLJMgr6JQLELetQXSix8ZNBmgvwfLf4rZvQtPN2M3FM9GL3ww22jMaipKa5H",
  "key38": "37eCWF4qwSN5RSpwtVsLWaGUMH8DTXR8gpwTpJkTHeqTjVQycpJJpJnKFQdud22ck8AVGkSZQedRaiPKhcbgCRQs",
  "key39": "51DTeGe4yEnaDoAyzGiMMHYx5Sm7TUVYjaYNKHGHyFGc5ExaE3gAkiunvwpyaj8SkoqdXGiktEH4uxvL114fZLaq",
  "key40": "33XX8ef9MsSSMAtLqW8VwHyNXQo2XW8oe1pGpN61QRoyCQz3E3Qj6MEWTFNV3s2Yw22zTvaQ1y8wAMZBcwMoDPLQ",
  "key41": "4e6qsaHYNy98GQa6Q8eHaGehon3NymrzJTK8mDvJLu8c1MXvMtSd2Mcw2uV1YevhmykV1mGWZABSs93gVXRFYD3A"
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
