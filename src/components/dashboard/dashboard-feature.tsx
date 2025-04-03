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
    "5KwryHVzhzHKEG8kT81nhqbTZZScmSEP9Ahb5L3SgvyJPis6TP666q9wxqvHcH5R6k5ensrxFDqLUPEFyx6m7vth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iCywKr8JPXHCmLZbM3bqh5bLKV1UazVHn6QY7nE6AqusQSFbSLZdEBHtZmFwJij88L9EuJL1RZUhgRffAmms1FC",
  "key1": "5nhqfW8Be98mYeB1SKSPoZKXd7J2WXgKZCvQH72z6XZkiCYLCH4XW9GRuf1GN19qbeGbmhWdKMU1NB4MdjXyKWH",
  "key2": "43Wz6X9ZDRzMRySuHZPwtm5kKYv13zS9wBNLNJpRZehXGgC3ZpRxanWcPVpNJ6QfyTbWjbMfcTaM3Kwy2XP4fDnu",
  "key3": "5P4gPdnPG5bKzJYc98TxXPmm6Rnb4mznEapmqyokEQT7yTpKVX1TwHxtnD48PiJUVZpKjRXVhyZxfEEN8WvGVJAx",
  "key4": "3iMsNAnNaFq7suUhsaqZ4bDugbJWrestPehzozZCsrK3zpH1ipSGfQ8yfeNDPjPg4wGmLz5f3ocUh8gVTgDWAHzG",
  "key5": "5ASKCd1nKy79FLgdu7ARPJKct1zRvpMJavbnv83FnDs8K6ZfXwvvUyH4oMbMeG8v3CtXCPWy1i2d36njzoP882nY",
  "key6": "5bVWP5cfLZTkQaMs3hQDRpmUPeBa9A88abD5uixW3XMTWWLCteQRNaH61xbCcVJrK5emPZYUoqjTXb92dvg5vjPd",
  "key7": "4uZzwaZErrjYLH3dYjZaYt23EnEeseT2f7Tsgajwqt2fVDUQvDfABUVnKkpqBM5v7qmrfG8QKnA3C9SejmCtoUjb",
  "key8": "e1wHNb74rpJ9Y6i9oNideuMAdhaq5DGRDMAothXMPH7xdntLdWfNK95BtKYjEMA4kMWeRZr1CoWngwkmpoNP2Jf",
  "key9": "2fBKsgpgr7wUg9p5bpg6tkD7Yf9rQsA6nENz1HoxkShPQ8YdbUARej2HTdcKqsK52BYZfAbFuiPotCWpNnNHJQcj",
  "key10": "2vnYWF9GKmGz8c9d7HyonmdAYVPzayxrd49tEm8f7wS75NYHHVkJVa96wYDgoxKvrwXUb4vXxE2r9uU5yq655UhY",
  "key11": "2juXa8xeTprgsVj2yYQKgEKfvTrfZCmLYkHeACgxZKu9k7FfZ4wTzffZ5N9SWA2aczRNUFevGBcoyBfi62nfY5Qy",
  "key12": "62SrcJ88NGpcB3XXUkz9zsSYMKhLgqaBhT4hJpGcox1WrjDEpmBU9H2rfZvCxKz1phgUrbNBSeGt2FB7eunwNEHU",
  "key13": "4TjWuCkPFp6MvjgBBv5HBq6ZnLk7QAcB37hTocbRdewUojvGBMJ3byRfeAQVhZaYa7nyyodQZLk8DYKMX3gJzwi7",
  "key14": "59ArmZjuGKR1Mv3XW89R9hTidRZ9WPAfckqqwfjeotvmWcmcVVUv4GwH7x8isQrVrXyuoyd6bPnGPbLVFnRD9FTp",
  "key15": "357AFqL54wsN4LZ3YpJ2GgRCLjnpprQui6ayjeD547S96BGhAfrpUHr6GNqSZcCNHapR9uUsbCFzCAsA3EFhf2mU",
  "key16": "2b8ct9R8EA6eR887iSuELY2knhei5RKHGTu2fMPKrLj2Ht8FmvGfXNrb956xvXSAmJ2VDAfJBYR79aK7wguy11W1",
  "key17": "3AonUdbhw5BWA2X74w2zBpdgHBtSf5KFzQ5V53gwaFBhovTGEc3EnU3yj9vxzv6tjKu7SfzafdYgwzUaDVc14msy",
  "key18": "67ZiW1NqmTJzDVDnP1RV3NpDEnQptRYR98J3En8NV7zs2xHm6ELvsCCvZ4cLSrSMpVSjYV57vwTkDancd8vfqwxs",
  "key19": "3Cr6UxPzCJZ3B2B1NSupno39g9B3tA1TKHkHUqkyt2fpCzc2335XWXS29PxRyYjp33PZVZPCttJqXjamQppMNWRF",
  "key20": "2KwfCu4p2WzfC7THSfUAdBbtUQsRShSt8yycctU483hjbSMpaC5HgSs5M2iNupThPC5ifzgG3LcuUokduYnURg1H",
  "key21": "58tD3cZzaqCca71axYbZmdRJWHENJ8cuzeBrAncsXUvhRBupXxp6FiirJE4Kke54kwTLwhuSJ6LmcvVS6qagyRyc",
  "key22": "4vk7tNRqh9Qr518Z55rn4Uu9SvKhSXW1GYnoCLpyLg3ZqXLNbQPhzYHpvwPKnDZgVpTRngbZze7W5SEB5N9SJTKu",
  "key23": "3yZsSmaUy7V6hph3Km8SRaVvGRCsonhfG77Hm8QZ9isbDpJoN8GSSGnu1VemEoq4Jo14KM7u9RUmpnanxsrGfv65",
  "key24": "3x9dqn8F4p5PfxFzZzfmKH2isjB2hACb3zBPh2dGBza2ywy3H2GQ9Wb9CFwyQhweH7jmBY7jJfhGmp1h7zkJkpw9",
  "key25": "4TggX6g14GXUY18ka4AviFUG8cEKskBkY12RZQYwF6BywPH72H9uKQNAmTfNoXHNNMPxs1ELDuD9tsSTzt3YtpHP",
  "key26": "3SVRevqjj6ngBnBbcTNn8R5d9jnSdNUMqGDQZR3zJXRonkWoxjM9Rfvb9yQgpkgquoeYUWky86yRfXswYYfLkU3Z",
  "key27": "3KPfnKzGzZPA54ZMemPHqiWsbsC1t4NqqPsn5bEZ9DfUiQjpULRPC6v6Z8pM995bD3kJ9jGwcPGs496fjbauU2hf",
  "key28": "4jy1eY4q17qTMmouQFASy1AbUUh4GBmz1UUuy99Zwj5FU3skrw5UamW87NSVEydYkMGzGUZ5Aj3ei3h4qFW6Qrr9",
  "key29": "5GHE8nFCawQUUsBx5MntrSN3LVgnsAiLUkyyuCQELT97zhK47UzwfrKQFaNyeZioc32k6ZTBAW3JNMzrmk8yfcfY",
  "key30": "9vxmX6xaqBmsbfUMK3AD8LNTTDe7KYa17hK8EA5ABd1a3rwHFVxVbq7RXEXk79UF7E3GeCvJVxfx3dyJrFVjJNG",
  "key31": "3hTBiGZH8JTzTMs1GwpxnCCR7aDdzSkkJPo3TAwdhtkHDm8c6q6jZHmGcMGiupZCZF6KGytTUbXtAfH1p9atRKRp",
  "key32": "21a8urfL3oY8PZmAb2N7NPjKq7Vjz1tkU5GR5QzSCwsqQWnozxPtrM1mx8z9zmSK3gHctNrmvS5mt19txJpMLuxK",
  "key33": "Yi1E2zktWgQQZ12PeHPbCpA6sqcd4W6qqD3qFEuBNotEd1ZZ6QGEYMfA8BXHX81GhDongHJiLK13GNysgEDmr9g",
  "key34": "2JeYcfAkRiwCiogQU5f3N5DodWtzfLNmHqhZxYGxZWSzfWKV6iuN8H8Nz5xBW2HsRS8dGg1z7iWj2PkvLAcyjpbX",
  "key35": "47e4TDxob7spY2GKmPBjALubKh5np9J61LUdRJDH8rB6RBJpvJ7s34Z9m7U5doiK1GYBWetB3FXKcG676wQwakDF",
  "key36": "5sz2pq6w4RPhQY8C4oUwTsHhKqP71p4FzxbUnYs3PZjv6XZmNLU8pvhWD3TYn1qCeHk6PVLKmvRafwbtYaWqQs5n",
  "key37": "5ayFZnYg6bThKjDmZcDDoMsAkJkwJVbNWtPtdzWaHKfbGeKQNuqo1YSn9PzQ9rBnUkRLUAyEY8BqsHCkLc9LPFp5",
  "key38": "UJ6Du9PhZUbGjsourCgWU6K17Kz6KXYQNooX5q29wSev8fVdZxJzpuGgmoqVkXKYUywZ8TGWkfnBjmy4Sx47NNH",
  "key39": "5kTVqmULkifzjnecALZGTqS17639UP47bdCD9VdX91pvfguhqNyk6yNoCeQ8H1zxKYMN71uHjS1XwMGs8EQGfozD",
  "key40": "4YXVGT7ycwqUwSagScF5CSTcfmK16VS6rU8xRo37BrDP5Sx5oVijYbdUDuBCUEWQcPPkf1XXXZagqoTebyAWvJr6",
  "key41": "3fALi63QHWxDEuUQcjYHgKC9pVEE9E8mJo8ogfMp5h3VdfYLu678dPHj7LD8PM6z1bwtpxcCMwqAehH9J95JoG5L",
  "key42": "2vadHpiTzn8Ev2AaBEY3vTpFtj6gnzhSKW9YKS8XscgQWYgLpjacU1DHAyLBWEi87dZq9MYQ4JDcHv8CSbvqPoHA",
  "key43": "2FPLmh8W5DvWCQHCbyhMTe9hnD2A3PQa2SfwfgtPZFsW6HzngS1vYKhbSRw4QpcK4Mabvqs76cFkPHYpRnV7QSF4",
  "key44": "4oHouMND5k2Xfd16XEBtZLX3rnjhTEy6WyvJkCxhYQrrpM8fKtZjWjfj2cAWfrWK8rc1ZTf8CBXQSSMqjhim9zce",
  "key45": "3HtSFKKt4pPcZNU4JTcmaayvgWcDD1jrwPvoZ4AwmpxZzywedmA1LcUMYrQf5Y6x6ewUqXF4UKUUVppNjws8GsY2",
  "key46": "4NCd2o8ZKLHJonuNKMDG3c1KJKBDHSD8Sy5s279poEPigxYB6WcfsMncApAYqhFShmJP4F8vJRbu8KMQe7JLbQjm",
  "key47": "5VBRVfRfMpwrAiXSWYXMPa2B3kvVuyd36gm1h5mUrmHgqNpvAemgFq8yn4wnMbpt6YbwAJnRy7LBF3uJJzJTpymS",
  "key48": "3oqzhfKT3vz61cNFy7Fjn8CGf5i1VSjtqXZQxECgxHowMoKCX1hJCpXCXNnP8zgHtQSw44d8cq7p3zKcLh7opAtx"
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
