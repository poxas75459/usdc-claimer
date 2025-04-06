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
    "CZbBcfsJ6Yd1ecsEaARssitbQZgtmGvZYVCkYnvE5tvko6X95Xz2QLkycBvkoAWR8oVxievecgfLVwQgoid8PkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cpjhBGmBrNSFcq9oqk8tq2A3V4ooLD46ayVg5Bn7yfvho5pWGdqQpxH5fqd7RFULTcwfMVLMznBSa1VUAxbixpU",
  "key1": "3myGjefBNNKmmB8Ram4vn3zvvdR4VW8FaZqj8KEwigBSM2aDqeUA2PuFU3vfjJX97QwaKyiTGtRMTPDVi8jZ5cpj",
  "key2": "5GPiqNqDZbFcjLbjKqYKWaM7Px4pikzAu4Q8QDv8rDbdSX5yn7CfFLEeeP9Rn6gK7bGx1eALKhkKMxuNDe9pDHyG",
  "key3": "2u3tnphGjChoWdgYrvzZdm49nyKnv2Da7iUKFNLR3Viu5UWaYwpUnZ5SfNkTKcWw9Wtu1KvoAStWcWgH7XT9fg7M",
  "key4": "4YWbPmTPV6mxLuFtvz93zYegCpRg3fqaSfiteCSofdqoajWk1kHE1B3V2QkorzeSqRpN2LiPimMqn6kzYMMu6RT2",
  "key5": "yBJ5x4A3igDVMWHrUxWGC31DZ9gmtKxkzTTJVKmbhXEiucwUAwVF7NburU3dZfy7Yr7NANyFurRfQ3uSEgTofkm",
  "key6": "34pofGoCLsiKLfLPyKWz3Dnbh62KGZ1Tk77f4kYBXLJQusnGQmC1jTZWGDkobiMAwb3xbbNbkbknTePz2dyKiTbN",
  "key7": "3AggftAWb9jaqghnFKHY6LAcL3cJpsT95NdKy5YgBN1QHhLxCxZfCmi776ppj8CtSaQwv8NGGHu8Ap3VtWqzp34p",
  "key8": "5RYHJJbu4fym8qhDgUUuDTB7En7BWDf9moLdPMWL4xk1ukR7qYEVqDajZ4SrgNfznpEfL39swQf8FsroWLr771tR",
  "key9": "3MPKrNGiQTboRad82hjLHG72BH31DTxu85qx5oNYXrQhPvWUJoG3Lj5Wu2ZNeyXhPq6scmrauxX9VUiFJVQ6AyRn",
  "key10": "5TgP7g7sQQ2Zh2sGYbX9tUMJECHLgXeZVKUdStuzMfKKsc5ZBEVpY7PCTFYgjMQ1rF9mU58xqNdttxJf4ex3m9Ry",
  "key11": "24ka2TSWfXxPgPj9SyGrmR53WbwgAxuzzMZstM4kkBQ1jxJXFeNimqqDW3qjG3n5Ga7nF1rrz56DG44DFaJNYjrm",
  "key12": "43c28Vs1yRPyMwUhyFKQapgSH51sxWKrFzDkPJKYZ9TEDC7wBGLKwqx46zMTardc49LGN6Xk93BetAcvnxDxPeyH",
  "key13": "5CPXXyLjmYXnAtxfMDuDjvjxsRq1LrbZ4Mgxjm5E1MnJZoT7bWNijmAGYjJYG6cEHAatZnJEZEpJS76YgstPXjxL",
  "key14": "2GZm63ztv1F4NXBwFn7kGTv5GXBXHxWdwRdozJLFUMDfuLuCWat4Gv7mqxK4W9noPBFZEcTE3tMjm3Tx8pKx5Sii",
  "key15": "dNNfqDq8JkTVzkHEQmKgfPU1PWWwFUkFzqHn4FPnDrVBzwa6eS74213VaQf5ThoceG8GZ2JuofhTuanYB8AjSZm",
  "key16": "4uAfWgPU4DvTsJXcqd5tmDW93HkD3Xc66ye6PBNrwiV6RdgJCuiymaQYZo5bSz4H1afaA1Y179f12yd27Rbk32aW",
  "key17": "4LnmLkzCbewozj8wtK2Y8VPggRr68YbgdVRk6bWeZVN172zd4AnospL3Y64yH6nsxNWCpDtL8BJz1oYpobJd372u",
  "key18": "rE2Kkh26ViMhLZ1YGhaiGrqgkk4H23jQxMxjYKhFxWYiJMKiqyjyvn2bmfpmg59aUyAY794vdoZsbGjWx995t8d",
  "key19": "57kKRuwPMoEJTR2JZtmGEdKRspgpcBvnKsoHygQdnYCvjp271h1KMCQFg3EWQ1hpRtXqq4rRs1Cimo26SLQ1emk4",
  "key20": "2nfAfchfHcPvnXLsRj91REpZDAtYTNQf8mrB8tHnfitdyiDPQK4v2E19VxEiwaLwCfev9zLS4n4VNqxxoSttCPvv",
  "key21": "5XbA2sbiyQMChfJFk1oDtamawfkc2J7yg3ZB3hSPLY3fHm7fj6pLtTmMQBuZj6D1cHc21TmsjDogmwJSvrXbHguq",
  "key22": "2Q61koD1Uqi4thUNBvMUPRKn1owBUjEHn71ZpTz2fNFMw2REpKrjfdbYV9BwNCfruZUpUZNDXoYgXXfTRYq1LuLo",
  "key23": "5sFfn7MkaDvhgmGMDHuyhSiMqzDv9ThBw8Fa3hZUR81CsHoGBzKzQq72JgieGMZbUxDaZWMW2JH8sA9xA3ByC2eC",
  "key24": "gwXktpMVYyka5a9J54dd5SY5aAfZHURfCTbTDw1N2KCkge3drUsEA4qtMBepg99RzhAxpd9Ax1dqC6rW5DA5BfY",
  "key25": "4SyppQgkgR9yCQzNvax6PRmWBKhtrCDHQA854yXbwZhY8sFuRyg2cywYAz2Hzax7ufUnYFCWu4yb8aZBsGKuYy66",
  "key26": "3rj4XZkoqfRif7jUyTP5DibhCzNeM58XybcZhDVfo9zFrV2kfc4UPNbyhkpiDc1Kjoq5Rtwuxv1ALFGRtD92Tvjh",
  "key27": "658RMtpcbkwjxtat33x6VL3iiLwgbgEeQct4etwzrdLvt4ACYW5ZjtDZ8kUqWpgxjoLXzWujX1zV2k5yBjCYNypW",
  "key28": "4ePYnQZKMhV94DxnypKFG7dPUNk7jupXiL1bC3SoGfsmLp2ZXsst1ddUiiUhwRjfhefsZofU6oPexYENHg9eNzqD",
  "key29": "4XigJtEDQoKynMJygwPLFFWAzaynmnX7cZjmiByifu47NScNUCtqKqCZmbHJB3cnMEs6T6P76UKxeFqwhdGeLpbP",
  "key30": "o9bZPqQeQ821JxfLehxW54Qv2qMvCWk8mYLqAoh8LaSiREmDXxa6xQthrXijP5MBeRsq1unbkZFcQ8LbDNzsDb9",
  "key31": "3gGBN3uUxmXEfJdHsrAMXAPQjsH9vovWTZdsyCC5DNxHfUAjyeR8wXXwsVUQik8rAU3zMukJBcg4nSU7kjw6e2kY",
  "key32": "5wXKM3dAxYpWrfqoXKMreaSJMZBrKZuhci2Uou4bM3pk2zDYJtr28DCS1UNCDkqtnXMx7svokv7igXKXYY5zh5Ph",
  "key33": "5Uj6noWkJKXYHYGNi5gj7yLbW6ArGsDKd2Et6jCzM5fNa5eSf4KyjqAWgHb3UDits9ii3LBrYKGPenDpxNRkHHap",
  "key34": "5DCHcJWXarw6D91RJANxYUSX5qHCXD9rHWYfKJTKoTod2UZTqfhVXzBZtQF8q89v35jKxxizK9reTn4JuXdKC43t",
  "key35": "5vBwURd4s8HzffHJmRns1yPFzZTwyjYtQAbHX5Pg4RR9ZW8fzB4fSmLXpK4RfoGo1yCLLrYEo2i3QzHK7bRWmn3U",
  "key36": "56wohNfgUL5Jxy3ahTxxtLS2fAwBcJYToPwxeUnNwmFjYVKcnWSdTAQbCVengcxkTVbTPgbE1wQ1uPpZYYMd2CL",
  "key37": "4NnVGruiVWqNnwrp8NpDmM4cAmpPJ5WTycyiiMC7CBagvD2yyuUCgqffNkB59Qy6osnyysfrUXCvXgHLEvLsF4uQ"
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
