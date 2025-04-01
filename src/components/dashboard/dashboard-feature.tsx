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
    "2x5xPeYBy56o2wQV4to88axSJAvQEjM1LkvZr25kwVr2zaWp2YqSxcuPg72XvAQtBFwR36J5HgWF1c6AWgdjLC6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fz5535iDXMMFgRiQuHtpJoQaUkRmvRK2cbV9pbA3rxjNKCrGyFazFCqrogYBS2ssChxRuopCS26tifMwpgbC5Ey",
  "key1": "24Ghayp6ZGTc2f7sXR9F4hH5YPosMThAjgfVhcc6DvFrvQHUGGBL9CoM3X7yZ9WnCisDXu8nV8qVPHeiLBbvYGwt",
  "key2": "58Dxk2Hcipj8c6i2RDx2zwLE55a3KUuqzndyjfB8jkCSr9eUB2JwuVnr5su4f7vwRcPSozzpsWaYr4fYQmaqqCpS",
  "key3": "5Z4k2ZgHaXj7KVpioe9SezWi7SUc7bDFS23KvBvf3tEzUwATUUTJqhFy4JBd4TW3yb3N7BRkbQK6qX7meqVsUnsX",
  "key4": "3b8aqqba3kX7q6e4oS7qA1bbWtikMxSnhTp9RqWZKKx23HPgsgJGEYWD6WGFeBe22aNSL74AnvAamVB54qTxYMjS",
  "key5": "2B8VyoKH3x5qPeXA7nsXQsJgrFvXzcNNvNUHto9opVQTGU7UZNj96vpnfgozR79pJGVJ5sFtQxqwGX1fDUb1T7y",
  "key6": "7ZWBfCYkgzrH37P8FNjtwqFVPx1XgYJNnajrdGRqtgtJZtzd6M7eYxUafLavuhY3nZcjXqUbRnJBQC9K5pw5jMJ",
  "key7": "YkpSPSDgQ9pMTNBibku2UjCX4QJbWcupWzkP9TATWyHEpq2YS87pWETz84VFg2YU9kbiWXRPjr5hc2MQsC9Q4GY",
  "key8": "3HiiBEgTGmhDcGAb5SCB9turRMCejBCWKfE2DSwyXo7buDSiF1iHogWnRr6KLe9kVot1YdhS9wQBKMwrDf7HbiWw",
  "key9": "2jiKxaqLcUykPdsj1oZTvwYnF2zzNVQjFchV1V4HK52nHN2FGKViQWmG3Fg8V2SvdqgZPJzNB5Mw2SPQUuTt3yLo",
  "key10": "5sPZd2pEcSdyQbwrua24Y3cNq9eNEvYBi8EcQK27UBwy2pfrbtrba79gqYQLs3xLtWr6GdJ8vh1VP39BtZFsxQqc",
  "key11": "64wfXGrFFFwHgGokyajupmqYKvDbLSk5Mn6PW7SvD7aA4zZybPoT5C7jTmthbBRbYVaCbKtoJtAjiuFSmC7fLGk7",
  "key12": "2i9KvHLk4XJbwLnes4q8JndMoHrHutd9yHDJ4MWcDH1zh6NxuA2Jta7i9CWLUyGHcys1K8mbBkGDGjg4Xx5S1RiQ",
  "key13": "4kKtCMeyU16vh7na8DQGzoJWyHnMbJZFf8usWK5Lo2FcsHHhvg3HRb2YH2w2eniqW5Px3vo4DP124zVo19FDhsHd",
  "key14": "e1n7Fcb5mcGxdBpJXPtMxYeb3QTE8nHvU7iviKMMZytHozm5DZQ8pbrWkTcmAV7A7DUHaoWpbfkvXtQnMpQe1KN",
  "key15": "5JavfRoZVZjBVN4jKS3w4fMKVXNHGsHrbSZUrmYz4YHbDYCz2Dfq5jeHwBYRxyPswQ6P6TLxQ7mYf4fqQrywXnj2",
  "key16": "58sZhyiY5Qj174Ke37CVN47VzBJzDxq5KVV5jNpFWmYQndXJf9MdBoQQ5sCSYPTWzFopWzQKHM1owhNGhKur1X37",
  "key17": "2Gj8mrtmjyApTX6cPARqQD5anTkhEVnxaakxiX4zCeRxkHGKPHwU9TWsZBCZ1iQ69hgwj3cw8wNXuHme9gfA9s2H",
  "key18": "2SSvTYw2tXPScao3KXZNZVrdFet99Hvf8NvCt5RWokwSxkG4b7kTG7kdHKcasM7YH1ZneFXv3Z4ns1S3Q49BvNwt",
  "key19": "aEXakorNyjV6tX4unHWz1Zjd3Kv9P86njrYVEmzo7Xx93YxGMm1h2ivxF18M64EgR4KjN53ShucAZyeygYLR4Q6",
  "key20": "4zfCsQySz7iPog1JGkNkwbKJ7V6MTMbpHm82aiesE7CR1aK72h4U2nZrQdPKK1YQ4ZvmgGzP3prZcr27fmydZu5c",
  "key21": "9CoZ9FDbReGeN7m6jvQhnM9DzxA5qXBRBZjXr9hNVkUny8eyNCBvWmjDYmjF28kqmrDmmJYFCxFQvKnVRcVmBgi",
  "key22": "4KG7SYUXxEazp3jSjsWZuGRYrAdwFJUmzoAq6ViGtthG7WGS3oro7mniwMABWmX7xna6govvgNvnYpvaBHAqkaux",
  "key23": "4wkBxNyW59skv5ssEhpzVpemUgfrg8rM9ctUMFuyitZ8j5wBaiJZgnAHWE15tK94vgVhhndEVfWjTXYEqEgFrHEj",
  "key24": "37nq1VbdSnXH12LeWqeJs8ftdWWmx5xNPMYNEg9oEFiuZEgjAHGXBvAauA9Jj1g48nxvqFSi743sBN9CTVTPTiA7",
  "key25": "21i3E4ZBKTFqQSb1qMPL8SUG3CpA933Zv2bfVFa1u9K62g66VWT2JMo5B1fjWVYze5xGew8fhW3Vwxb2Guw5DmE9",
  "key26": "3CCrgrkSVyFZzXNBonthkwJVZQAm4LZirzr1meQuUnhWpnfiVRoTo8rD1Nr2qjXyJAJuWBtsc3iaFavbdoaA7SCx",
  "key27": "4r4FAo819X5LGMcp8wm94vZNTamc4fSEqgWJFqKFHjw3zGLuSi8qKF636WYaxNHduemBJpRKWnV7iNu4QNsW5WFV",
  "key28": "LBit8WpzZH5UuWMxGCnfxgVdw6xBUe9VGQz385AeyWG6Kz6QMrRsaJT1qraZPUcJBy8mK7RmXto4TiQ8PFLmqXP",
  "key29": "3MForyCL2uXzUYvus2ckpMgxbiyJsH86zGuPdDqWJDSzdhGB9nUrtCTs9YaRYT7XDftKUr4588VLCJMgrAQeZ85s",
  "key30": "wzXuDejTpG1gFerwpSapvjzP1RH9Vnmvf9B3Xfp5manRiFMgD5Q9ZbifKPRbYBQ7rSLxHkbDyaLT7ynYaf57yrU",
  "key31": "62mdtJegWvxQsYYwMfzDyrPfweqdE58pcV3Kzh6zCeaovXpFD3tBu5uBzzBbdh8GYT6nnLL1ucT8YkzQQ2H9vijH",
  "key32": "5dXzSJ6aciuGNho5JNfgiHmaGJg9mC3WdmWfLqQsMcHBnPEo9UAdZEQGK2G12Lk6dLDjuN41yGe2p2oCxQjGy9pC",
  "key33": "3TqeV6uGAPJApAE21VCzKRXmq6u8EoLGVnw8LLyNbZfmitE2H761ae3uhJGUygwSAgpGcDBB48jV3tY99Xxz97vg",
  "key34": "3saLa7y327ACe9Pd2FmQE61WmEnE5zPVRFD1RFJHgPqSDCP4fGAqbfmxtzcxq7mNLYWPSMJaHvd99M6F5czVqKCb",
  "key35": "hcisw538qL1XgJsQYt8UfPxdNT6umr66EZBrazTrNrgiUCswmG1kTZiVX5KBDz1EDiFHuAGTD4jzjfUxrwq6Bb8",
  "key36": "5ayf3XMTY4PQ7s3ZPq7ib1QAeJg5DbugvPUBXJg2ByfLAykUrEuFLQXKwQrdQt7ctTXhZPQweAsp7X5h83tTFYCe",
  "key37": "EPFo447L4aUs2afp5XBQBhG4ZL6S2wAhdb7DmuKmfinvq2rZS6C5WCHbryW2GEV5mVpLxBT8QN5j4GyCcNHNLTf",
  "key38": "4hwyoHavcKSCefJAL84suC4hKNz6XB9aCBtYHryQb7d8Y6DFXBiCVM7eHUNif8SBeKUoGWF7TVHoRgDgqKYUwXWD",
  "key39": "2kyue4Y2C7PwXcEMuMmhK7BiMj3tv18TBU7mihsrrRSKSgGkakPcp7Qb6yDeZErmBkHgrWWgM8cPd163CDB7U6Bt",
  "key40": "2UUT1Qcz44XanqY73bduqWqdHYNjEv6jZVSyoD4jib2oHSUxzw5ASE4G2J9jfwa6achA5fcefhanMihrKGDr4DwL"
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
