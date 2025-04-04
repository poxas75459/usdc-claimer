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
    "218u5VVnxVNuB3F3rymhsQrkGiPFuU7ATNi4gq5DWN98aQX1PrhDoVENWNkAPkEcALmKaF6z3YkLHDSmMc3W2JLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "661uf9oRfunhXi7JGvsW6rAaaAL2HizY1dEEvzjrfoQy2ANx3uai6gyGr4eusqEopKCKuBY5NGQNtkV6k7SRb8kD",
  "key1": "4XBXrXBNcNtQrzjmNE21ScynSWuqur8WxxQaH87jRm2nQK5LW6pUb2QouTNzj6MDGGu11HrLYXXybofxe6sEJoLX",
  "key2": "5CVgUijNY9xr6USnEEZy3CUxumqkX79H64QTAVsTN6Uaw6MULKBqRzph9VihUhxCoLSLWg6VNLA9bkis3XsRkizo",
  "key3": "45VTqvoCzgxFS38TYTWBcnzea8Bj6NnafMoigbzxjRJ2bnnj1RHUyujEd93KbmTrAknABLzCvzwwFDBVNcFcP5iF",
  "key4": "4hxCjPRpKHYZfKAtbeXNSXFy1kUaW5DHr95RcEw7xPL25tdVcLQgeNkt8LhsKyNGM37hTTXVPGZcx6eWKtgGEX2Z",
  "key5": "3rHDSMakbnKRbMYpfLxWnorm5f4cY6eLWmRN5Fv6XZhGVineR6TCHzhr73Qsndd8ENkaRywf4NqvCq3QeuRcTQmj",
  "key6": "3Bkc2j48BJDVJFXS9MDXikeEdactsmdHLXtEzkazQYrCNgPwjVMieRKWaD64wBtJLMDrSw4gjdvscdpEcm3dPwCX",
  "key7": "2tqTFGTFmiv9s6ja8D7ijAYMw7rVKuesBiJE6CpLS36QXhccXcYKHmWPznEvTr1gbb4ntKQxQjXvAQKvXX2fWpNR",
  "key8": "5SpCUHReMK7XiCkGL3N9fMdCHG9fMZpRYbWgshcAhHHf9LeFCThtc9BS2k3G56QoxvuCARrtDDwXcdfGhyzGrK7W",
  "key9": "2g9UJLkd2QmaWJ6dojuFK7q8Dhn8Axjo9MwrgPT7vfc1AHgah5sWodddwDuB9ZG6dNsmmZKPVPRXgRf8Wo7RzRRw",
  "key10": "52Dz6J6GRBe6DvwvtmhwFezP1wky2twH4mPA11smvsee8ZoE9a5ZUwUnqAHwsjGcBWKtRWtn9xj7vzD6Rjp7bQmA",
  "key11": "5SiEr7gJrMawbFvwt91bTNN8MdkemqmSRvF7QCUdH19MLep3FdYy6u42wfb2isY7RqaceVDykD56xAsQoYDVtB1x",
  "key12": "33NRw9xQ5BUWfeXVyN5gM3EKvVdptQ3TyQsjzY6V39bxPhCUkJTRTakDruYkX2JyWtSQYFGKuMYje7DPqDE3aqpP",
  "key13": "5VDx8YbA1MdLpdsbGmaRhF23A8bWKY9U2TbvjH9FUQQUhDbFtMu7LspinTxK4sRNxMCwtqvvxBz3j7tVQEebbTm8",
  "key14": "5GzSdauW4FKNbTfLf9BdAr8momBscNabQyk1x9CpJv9Mffg3gwBhEQxcwmpWDfHaeWi9hdD9k3YuSW7f3JKymDDQ",
  "key15": "BbM1u5Lh5SWUskcyTpq3hUgctf4gDH62t12mviBqsC2GdFXvY61AJqh5nf5kfvGh7c5CqWsXpF8ZzaH4fzhBD4E",
  "key16": "3iGnKqgZXyiLGeJ3JSx5Na239MzPcAaDbUjt7t8Jz4LK6US4AHaKcLTyKDtE9ijxLVkApfbBJV5MvTt1MohzBFwo",
  "key17": "4vq85kMZQxKAYJBteuRUuSGkRwJ8tb1MxLTuV8bvsWdbUSMkfJv68Dh4SaWTE2ikercTMonSubZzXoWmG6v7gtR7",
  "key18": "3yEiHpbr8RhG743e2roSSVFLUDDNa1476PABaXQ62QwA1r8mjwdZzFY9QMkfMSr6NyLBEvK6RBRTU2Z3zWzoe11r",
  "key19": "2ufJ7RzJcdh4JAQNS8ukzyHeDj4ckAp8uZxQP72nmMoZBpN7SgxHhE6CzhzPEzBtW2hTHHDHzXGnR2hh6CVVgQ9M",
  "key20": "4y9gA6uWDfgByb4TLGkG3wLU6bedF3Ew7bg5kojA5EBC2tV1RhvvJJQ6coEUXa1zgsyfz7vvbJHPdHb1t85ENG8D",
  "key21": "3q66aAKpr6Fk5bo89MPiQSzoDMDvVAhzifD9nM7HFKhAdu52UZfU7VcZjyTLL78qRhvHBQJ5UUKNrqzf8qkUfq9d",
  "key22": "4EDps5VWCrrLroVVqJN6GcavYSX1Bqo9DvrCPhtJcuyJn2sPVurBaHPqsGmfBXW6h7wztaBGCav6dYGQ8et7gVzr",
  "key23": "3K7wf2sLp5UkhSJKc5j6rDbtM7gyGKFbSxb9z68PKrCUXuAZGAhafWA1a7U5m3g6JCpnEmY9gVJvv62b5k7zwwYc",
  "key24": "WhkGppVwrdPoT4M7ia9xhm7wnrwF5sortwLMt5eeaDifzXDxndqAqfAkAXcz8znc29KvjhYerX4jbSCyYDrBjHX",
  "key25": "581sBVAivN2ixVUUgAiQvhD5q46J7ipeoyuk1X71eGpAwTEcVVz9wUw7fJ3r9cuDjiwfpZAr3kE7jtV9H5GE64iz",
  "key26": "MBcfHzYZS58XLL2Rb6Kh1KMaSkGnSh6bbtjt6qLsZzySXx9FudUSwhD9iyZbgsxJbKqrUigVHFpqrPwEZfytF7f",
  "key27": "5fmTx7rfbYHj7XDbPo7wLvxNTncnxpSRyG8quWWpMu9YBf7xoKRMHCuSAdTKeEBxB9Kr2vDQjwjC6a3YbxvUVaFp",
  "key28": "3GGMgPCae33EsuLcChdVMEafyLKFfafXfmXwyJ75fKy3XU22fAg75RrZrP3m9CsPaGhMKSgVcJH9T1MyqpYXDouQ",
  "key29": "3xY3zR8A24HM4jFBhXvFFmvd1djKY9pqbYSJvU5GBr36Eb57AvohSShbgNSkjzzHVxBjwgXCagi9UjRadxzjrTXq",
  "key30": "ioetTkRQnqJHKhMo6CASUEc6x8DrUJR3uFBMW27SjyhSPxCUrpfXt5D2ekLuhaaPiyP67fehr8WhHq4maZzHhK6",
  "key31": "PETeiGg3ZEvUNX3QcCaSo2qovxvDTJE1KMKK5tv5JS2zqqTNbhaqXDJ3eoUTCF1C9rZgZFyFV5CEEQcourryvwm",
  "key32": "eWqMzgpZjG17u8WkUMxRWxaFj3Y8B3cZwVZosHGnZRWWEAXyriufpPiA3RsqTdbQyFa8bJHBPFZMeqFGchrZAMQ",
  "key33": "57s5uURd5P5BijYH26a9CtNF67qpVcsiKEh5UpK8BAyEHANPWz7hxBPm2ZMAriFPCLuFePXBX8T2QTDjnBs7XFCw",
  "key34": "2Qa7knKudY8HRT7gQVH9WvBnq2DsdbXaMG4c6PXje9rQeJ9MkTGWXJHAmQ8y8XvDQKgJ9oWMiguQX4iagH1tErrW",
  "key35": "2qim7my2Pm3gx9BNPwSD9Wa3FJeHy1Txb5NjgARU6cSZovk3a4DAf4irkUWUkbnJBHtrDd8v5RfRec6vMh7PdEKK",
  "key36": "2x6f7U4PJoW5mfFWUHefnnRL4qUgutPDMA7JuT6gsWmRbtzvhbx9zbgdn7nDnSfcrxmcu1d5trZ5xvgo6pkHFNNB",
  "key37": "3ggrEHewyj25HPQWwPj1ipRczkjEp5ZcdReNPWj7J4iDcHKg5yhqjT4Yk21B8AiwSeHZ2t2a9csiacN8RNP2hsZX",
  "key38": "262qZq6tCCt6yu4A9RGue6diNgQbTeTxhzYWxtD55DCYxBLbT2hSpuJgApvT5v7rN6tyBzG3yzL1ZG52bE3AdZqm",
  "key39": "3SWsfW3YdAzzjmbDCbbgfTBr8PiNvntuTkEMRzXHyu57YQKvGaMpMEJW9hvDwtDVRAQP3KfXUyfWtoEyqCYW3wpo"
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
