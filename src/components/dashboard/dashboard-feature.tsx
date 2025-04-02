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
    "66P6KXGyxEUGUnivwqRc4VL5X2hEL6NnZuULSCCUt58NFFEp2UAM5VxwbG48wq89m9i5txmtcRa13Ptjb2uR2qP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61fQ9nRsSatiNYeDgrAot3kjcQY7JcEewnM3VzBDbuPrd6P2MdDNDbnGHmqgYWkLwBRCmfDU7npL1JdZy6daTKRw",
  "key1": "2RW5NkwpSAZUKKhciWEc7YLMVYtVMQJojDUNF4xBLbjCZWkcpPxfK4i8JAuv71F5TxsNygh6kMH6F5Qc5LKssq78",
  "key2": "dLimMQA8vyREz1oQFmraL7gpxtRsPh5TTTNp4uDoSuh11PGxyemxbiLjFPL88bxqqssMt3qBoyiQuY1QkPT4cW1",
  "key3": "4HnHf19zZRfpeV1nsoyW4vT3hjzTn1ha7Rb6xtrz5mp9xQqM6PSqGnyLaiz5aBXrW1Ntr6GsMKg2UF8mYfni44Cq",
  "key4": "2Gtp1grPmtW3y3oAKLFx2wWsCG7uRMFJgqcrjwrVA6b9ndjTzNMAs1oqGr8qpUQ6hroV1Kvq2oZZzoCECeFJpiEg",
  "key5": "4e5Jvcrt8T6RLPWF52tZGKuAs9Y6exF1iuqnS2CsTVWjcvGDNAbxgg6H7PERtAaXCqwRbm2yRjhDXQxC4Abbd4pB",
  "key6": "bnoW1CnxtyQuGoR89PUHdKMiA5eSSmRVrfYjyeJC4AVyPh7kZqMrtfsAwvwYYceDuBFJZ7g2PERxax2cx4Hujin",
  "key7": "5kDmid2jWguRtxJqyH3nQQQwE3VUbiFdRjxD3yEZzFmQrA9ardBT9Qa84AJRtcysAqXtC9wqM5ojbhTF7WEMTuYe",
  "key8": "3bVZtZtermMMgbuMvUp9ckuawrBr6FhkwP9V7LCoEbA6XDhtNwbuCi6vuFGkCzktoYPsGMnNHzGYZaWw3c73VVN9",
  "key9": "4Nc3hy3QEKkAxNVDBB5MvS9FzuEWa8BLk5XY3oAc5KcstsfadczjtkDc2BYd1S1MiuX4nmMssgBEgBHz3DXqsQki",
  "key10": "5FXkx287CZt5hFyZWikVqJaLDQX9N18kRJ2s5bAZmqkQYjBHzFTdvYRwPxyv8KuQj6cTtmUpLxZL3bWc6YKwdhqA",
  "key11": "26MdM633FAGMuopSTAVvAdMZ4UK7rFqvkUnoYv6w6hHvYFkGNVCFTpTqACAnv1fbFYAxcs7CQQgJDcx8KBCqMn7R",
  "key12": "3jiS3JuXhkqkmYshKXRZJmGCwiP2RrmCP7i1BPa6hQj47CkNn9ABDTAEzADDVE8PowVYu7jCYDZd6Bjm9tXxT7PS",
  "key13": "4PGCJujvxuFmX3nS6tNirmFiTBdkN1vo89a8vpsdiwKtNW4LUJYgMLwg5or4a7uA6hcS9CWWDxZkn4sAHC2bE13j",
  "key14": "2rUNnxdoJQi6sQv2y91rudx3XEJNBkX5KACx3A3NqeFkpY1xHWW8ZtBxNJAhhjb6qMzrvXATz4bk86qA399xTV3h",
  "key15": "T3D73trjgi5d8SbH9Soh29D523vo5vzgvZMk1qAtqwYpSqHizVtooj9NwsPRojSYJg88JUuMKZVqRdbkB3r7ys8",
  "key16": "3WqVvQUoDvUUhh8bDFat98yALssRjFu23Uvo7118CRdNA4B261JHkUq1UXEZnziUNa6eh6XB4qj4uV6SZfD6gU8F",
  "key17": "3oM1bWJHuTC27UMBib2a66FMWGQ5tLRURHyDadWh6akh2L4eEhZ45tShVzWLBFEsna6N5E8bD19MhRxyh8RoNyqf",
  "key18": "5hqfPSUGXKUhF4XWnYUc2n3c2LQx46LmipZNp5GbBiVC8Gb7w69SUqtXomaYkQdZZh7FxCmDQFvQEH6FbAYJqcdJ",
  "key19": "2Sb5GcH8PFst4SoTn5ftPu48F4QPi9JtwtJD3HKNCYbj5MErqywbSoAvmhRXSKBCL8EyLPLgTb2FTWWb9gQjDguk",
  "key20": "36r8PkpUFPRYMDS7NdgJ9F9tY3v6b1GmhACoPK677jzFN1RNTH7viEqHw5ytFmn22Th3tmJjvGYxBYPcPyZzgYzP",
  "key21": "3Mqh7CSV1bZDjsWVMEr2xMxDgHb9eWg5gN1ame7CzicXkmsqdiGkwEaVWKfadiosXHMA1jXQ9km7MrwzMHasAGze",
  "key22": "5RYuLmdXHRDEtRYVD3HWLHkVQvFZpm6VvBGiP1jFrxJMJAnd5qxKtnBWq3DzzMHCHtbEfa7g5ycBnHGCebvEAMoz",
  "key23": "62iKeXn2M9V1HBD8aKKsjZ7HGhzLJk5DCLWaZbfAi97GBrxaTKLXrWg7G25aZncGUUVe87ZY3YC774VP1xD2N5DP",
  "key24": "1JHAv5W3VhvSFBzwWKUewzqtgc2bw3rSK6X4zP97PA7u3JQ2GueofNLvomSgRWf5Fb2FGcZtNAUBJpi5NfinW3Y",
  "key25": "4cyMW8J9UwR9ugWGNb4gQzggsq7rhks27w38sDjkfBxZg6GhY1yrTLJfxSx2CUv6LBnauWMw55P4FYrDeDQQUNf4",
  "key26": "3kd9uy6nYaaG5MaaPVBzLvM6PUkS5KABnqsMiB7kHhMoChe1kQrFCmKqn8sNvLFGVr9ofQLdiGhTvQYxW72VZmLt",
  "key27": "JJbJi4WLuwhSWMY84VNLETUGxMNzGaaQZ68e4Dz8fYHdZQhZ5AdfvAf8ovLtRtE9kAVwCeVdtjnvLhNbZ5ZPx7s",
  "key28": "Z4JxEJs1YyMpsR9GHRkiKKHRCyqsjfCYrb2hJM5cwtB6uTA8ngqfKsZw5hhdQSyjJK9jVQxezrs167TiGHSaSEv",
  "key29": "44D9nBfdV2haJCUTeTUUU88pmiP62qK6MSrE7dSwaYRVpsWfiUmKCQ9X66i5WEZXipM1rxpb9KWcaoTM3jz3ZDyF",
  "key30": "WAT8pXwNCZcrNSrEcdwLDBhLoXksptQQqr1sG6rUU2eWqPaWQTg6u2eucAWLx17gmhWiM5uJjmYNH396H42Jj5W",
  "key31": "2yGeryLjsuqc8AsFwsWgp7466JH21CaBcYSmDCZU66Z9E5FD5c9aDpYXRa21SeJaYJZBNRhuQtSYZfZMqj6BJdCL",
  "key32": "2exHDAb6xJLRNhSLmKrjrx5C6idMwChguqKvK6F9d3k8rRK3tvBVcZjRg5Vs8vvri3YiFaTmAZz6GpdLmtjWTDCe",
  "key33": "3JuWcn6Muv6n41EqUtBEtS6d9hXzPuGyVxULzUHPrY5QcyuBpo9EiGhBLtzWJWvUKrDpPXZjK4yT9soNUJyZkFBo",
  "key34": "41nxMYhV1qqnQ76TDTSsT91duVudx6oMbGLkjaMhEvtagZToh1kk1MqbvoFmRBDoYsWBExSyBhGmWvey4WJQuNcF",
  "key35": "2abamZ3ysfy8jJf15rF5reFeRvG9FBvkkDydzLGxtxXwAkAt9XmZ8Vhe8KxDAH4QVrx5dLTZwf3diDmN7JD78GHJ",
  "key36": "3XmiNXD3eZKuFFcwQSqNQV6meZnvMcCeJjStUX1EfWKAXJLW6DqxmTM2YyTbApkZuaRz5T121uRk7pChhy9LiCtW",
  "key37": "2eK8nbSSCLZesh1dfHyG8tT1k5bm6skRv4LQmoPcADvtFEApWPQDbMHKwooxCCDA1XUNi8Z8Y1e7hzcgukcCA9Wd"
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
