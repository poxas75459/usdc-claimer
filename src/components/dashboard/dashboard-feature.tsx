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
    "8h84peuVpVsBrY1MZ9XWMNq4KYZdFuoEpfDXrUxZqrz8DQaaHoeFfbxU7h5v3DuEDHotQbVne3PtBSTtgNEf57K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FThbcQCPWkE7aSvqm3y15xcaXF2VbTZ5f2B9dTSqtnxePhkrDHKusYRcCqCAxqLkKDvuPNhB5QS96LG8VfY6NoZ",
  "key1": "2BJardxfoHerHRj89YboioRjLEQ4PK5QaApYs61H5AAaTCf2mAu8DnjHhC3CRV3ctDAjkBPBdEVMMXvVre9C1Q8Q",
  "key2": "CpiGF6LWzDENWXKvphGxESqJ21c9HNTrDsgeaAoQ7pG7tENhfLY9no4mfMMTA9ARZPCQwYjqosR5jZY5GPtUy55",
  "key3": "5hptPBxBvowgMH84MgKw5PXcqwFDkWNETGhFMdgqr1NmzmYMeBnxN2NvCEdXpQMqWL4nNSkn21xJAfkxWAM8k4Am",
  "key4": "3uHWT8qktGtxYvuSpUqU8geNvsVTyGB9Sb6hEcLkuHnmpqmMKgwQZamJfTsHLM8SDTsEVwfLGTgKiz5kAZqdn4re",
  "key5": "dNaixegc2ZwvsqPe16udqqzUThgfYz5BQdJkUJbmpnuATMeHPkYky64oG2UyEfHJbTUHfQ6kZ7uw6B9rtpaBRbF",
  "key6": "4kCDynjGt6qSC2h72GN3E6RHQRsP9duww9cjXKbe3FpeDxBQBuhNaMkkCPuqJK2EhTTNRUYo4FDPzuHgsrVxHf7M",
  "key7": "4CqCZo4REA68hwtaFHRapUseEPVxeHWGUMeZC8UyMKgBLciEs4YRFukMqMeCoHMXYoDtgWFhQwpS9jbLL1JLfNQH",
  "key8": "W3GMwSZxDitkrMxpEXvo5xKoxgwXqiG1597GdgTPKZGsKAS94vwGyjzrewG5qqkzJ1J4xMAufS2xtmqXL8zq2tY",
  "key9": "oPJojtvExL6Rk51UbJy21JjVdFqVjeL4v6b3YrcR93W7vFAwDG7GuUif9aG9J7AsZw1tmx3jRNo5HpPGnAiYYHT",
  "key10": "2d3jkgY4MtUsxiQMThoRTvYHQGHR8wLQpayKastKYnuVayWyY4RwudZKsFPxnMM6uy7Mea1yfmweN3zrvro4kRLj",
  "key11": "9cmSt3vYJpFGTgfTe9hX79wprycxuGGngT8Xqz1DgJCiV8soNSD2zJvrkcdiweqsnEJu48cVkd4CyDS7w8afVyo",
  "key12": "a6EByyvmDic6quk8R77purZ3fudgtUTUcwRoPNhRGP9jzykSfW8M625AMJydar8DGjRynBDcCA8Fzxx3HZm7MUL",
  "key13": "sTnK3qDoV1uFXjuboDAR7axrxcuXhAtDBJjMKsN1s24dHjVqJMMe9DpDgBvcZEoaDkq9ayQbVjnyeD7DM2eobFf",
  "key14": "VoQ8zEFBGHo61TuJsyJdURZdU3k8ZYWV9q3pmNswCxYZerh7DRD3JMsJGChGEUWCvtAg35hMnzmZLEt7upGv2Yv",
  "key15": "3hrEZUe4HY5iAGvj4Bzz55WxRe6JMwYCxm1xQBdpu6ZaMZDupqzTUookwHw4M4d5BgvcbPKDeB3YswzwuX6BYeFZ",
  "key16": "4KvnSKWJmF8RkmMmNy3xaMDRzD8vtreUctgPqkGvGCiNkfToepgLijfpHHFJWyQ9ZwYAsyCqTxUhhTFpsYthtnEt",
  "key17": "Pm96qLSx65EymkBstDeRqnEMJmCpT3Q9zQKUVvfSroTCZ5WFsdbrmkiW8RHWu6Q4iqhrr9zBBLvKQgDLSd8dHpY",
  "key18": "254AV8ZJHojr7i7iMr1tVAwQHvfrQ12nFnzkD8FqbosEwozXYxTLUnr6kcnp68kgHCRhKyak9ZmtTd1bfFj1sHp9",
  "key19": "3qtadPqbgF1vxCG8kg8oCkw3jKbQVkcW5X42rcp7qvTTHZnTy5MdqoJntYMNp2zZNy2EWTSPJf4MyLVuhDgfREZH",
  "key20": "67ojZZH4bB9CpUDUdjVQ5zj7RLWbFKJWxoQDEgcpvfWJF6KHNsH1yrf1DpW5h6CWpSZP3mYkLAdhVRiwc3wKPhki",
  "key21": "39RYNzd4BGLFXPRuozxAHyvtwEkzdShneERTGf4GkTG4S74t2koC9Qg2wxyLYwEeEE5M7t7PrCAFbfpPCukLSxJo",
  "key22": "3davJTMtiVqTNdfQFpsdUrU5Bkw1hVvz75D4pqohCLrgwa7Amyo5cJ1Nqsn4hZAk884zK5o4y3hSY1vJr42M9S4g",
  "key23": "5B6LzpC2GTpwAKRhNZbATMcim6oANnsfmqhjHs9wGszVfbf2XM9MYoeXZ4NugAng8JRHydtAnRMwuwRL8p8oeTyx",
  "key24": "3G2opFzPoFnfcVMyhiJzwqErdZjTzEgVqvqK3iY417qZV63tw37rEfcQQf82CRBw5GXMB6h79Cva45x5ccZDpKEK",
  "key25": "4YzErjn88VmDMvN7RKDcU9Cp5tWhqC9qxqDUL3b8A9teTDWNCWroQHKfREMvMdGUYM4DMUJqxXriVrD53D7Vesm3",
  "key26": "2LS39TKTmb6a23MQyEiVWwgsB1dXtbsj7faA32JjVCisLeqG713GsZfot8ZBSMwuGUaLDwRfHPe3UcTYQg4wGcDq",
  "key27": "asPZBbN8QdLJpuR9K953SsM1GM19nuT4E6f7UuC2SBSQ3EKwHDRXmZuqCFjM2rfmhbW4kysK3biZ4qy6BFAuPXt",
  "key28": "5UUw1Vo9BawHFxLvQS8XJSf9dK9ARw7c749bb3hrMwQGVmaT4t1EcfMYX2Hjf2zNEKpWKAq1gQh3NxTeUf6X1ctG",
  "key29": "5JuD1YySxLz7XnmKtSKzGYAQ9n1xokPY8PBK9GoSgMCLC9bBZHEzKddqMEz9d84JXdZMsh72WhWoFm1oLQwJ91Vh",
  "key30": "42WuaN5mUZ3Y47fhYMnMYcugGkSTcN3Cnb9fxSazdkhDA2TxQE8BsfJiM7cMcibZxMV7gkx7qaYBCBWxSpinrKok",
  "key31": "2pAdcDyRfKU9cHoZVuKfX5ucCML1XqvBVyJKRNtHHatoBAzvu39PGh2Ux2yd4er5dSH3uYZ42dcR6aBZjPLUhPMF",
  "key32": "5CT5R1z8xirJTHYm5RQRs17WXtUE4HP1r8sDUxk7AHaRX26YSSqdMc8HYmaTLL3Q1XvQiSc8F2x6MEP1nKepSprW",
  "key33": "4P6y2p4wpCJbiemjMDHPToDGYMkGgeFfzVXPeLwhXd9cbJtwKHRF34dBzfGy6JW2vRQajG3kNDSsTMYf3odt9jxn",
  "key34": "57Cm7xPjJpvTFpbSvM9Y9rUGGHDyAs21T1kzuF5aVdnx6Xv3WAW3ygo9tagDUv6hPJUsx4DT4Gu81VNdcTP9ay38",
  "key35": "5S6RAWFLpSXb8abhfoEWb17THZabrvdqZmGviimNTNWRibm9M1fr2zQR8YGrFEtoN3WCAJNkjEzMxWmYaSFF1yw2",
  "key36": "5N1nYzMcyeZwwkZp7dt417DGsuVMWe3452LiafVsQJ4NDuBhSGEJ3ydRfbJKegRbGtZRzKvHBhAKGMrTSj6Ucas5",
  "key37": "3zAhjFBZqYf9qHeQA5FcaaTZzLNdZ82fHPvMdeGfB7N36PRL76VXDAA876QxA8zQwBedbKwGKstn5tG7BpQbHyyv",
  "key38": "57tGJAkm9C8d77jt3Mw3J9iuX7XgMph1uX6Bw8Q9YnG3bCBsTJG6ttVbwTm57AGEambxGbZo388vbXjMpjSvMtaq",
  "key39": "57dxCP8kNmb4JbGm5qcpTodp6FDBcSrxkmEvxVKGJsA2Q3QSrzr8A9mhj6TEokj3iQvpJVQ5H1256EvcZsUF7sC8",
  "key40": "sGghJ341XgXEnXkWmobKV8AWxKdb3B9KJGsXsScAN1dSNBWDWM5dBFYRqP9VWXPF83EMmQLf26MbVebZzjcY6GT",
  "key41": "UCVrwRA1afdSxNLY5zqWHhNtFNJ98arqwe7uwZ59r3NDekJa6povPX172kj1WEHEa5YRXrjFZPMLGcKrzuTaom8",
  "key42": "e79VzsM6a6xqZrA9hC9XFYuxUkTKXmQ4MGbkhsV4tFUFy6gQ6NjozsomVf3ZY9wmcTxa4j2aRaeU5YsR3BTkQFo"
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
