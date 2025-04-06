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
    "STmeJPT1srjYUj3nSMS2LNRw8t9SEgtW8UB6YoeevEV4V9H52BZowG74sPijqFQq1RyKGhYHkAc68qK2Ai3HTbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZZhRcNcy1nQVCSaTUsjAF9Y5w2Wr7q5EyV1k4D6DQuzfhRrNBt5j578uNQen2sYWKpz7pMd1RggExtK6sFW51ZP",
  "key1": "3RjkRqpWEYNBWdmbZbAMo2Ffs8wMfyq4KzRH2mTDn4BUo7MpgRFYhw9u8qyEVkLZywnMjzmti2nYJAaHfnqWzajL",
  "key2": "5LjMNmQwZXDsNvDwwV7m6hJgvfYC9xv2qw3owRxpqx3Rgw4gtsnBtJpLcgxUHtxbkZJ2rTExXYPH6kBTwbRWjB4D",
  "key3": "44grRoWNXeyfSKndW7sW68byDk2c9BojhrJqMKMT72j7Jpq96ScH5b3x6m8AoTGnxQZMdh8RaYWVwL2Bfooi9iUa",
  "key4": "44T8xRNyUhj9UYoFkSTpr9xvaSkMW2Y9wg2YUi1x1F5dFc7ah37StLgC7KNHn3gqo8PZ6vUNeRnmzonvZpgYv2sy",
  "key5": "a1zAt2QdioGLyDy41JySxujUrn79EXSJUHQNM73inieXF1nrZocZxPmLLgbShC28QfNtZGoyxRg5qTvCjNLpaKB",
  "key6": "3WMfwgyCor21nBWmFXrtZQhMJMFRNNB94H3hZ4Vm4UNvBW92rU3M8H8uZgJJ5ozgDV8HgaH8Yb46iLXrcy1XsfYv",
  "key7": "LwwpvggJPXxFLTA4Z5baiCCFTHt6PyHmN1akfFjiVzE36VHYwdPqVaLZk3u8qL2yBHRNNyfAL3dZs2ooPBAVg1n",
  "key8": "2sZdAYVxz2cNUkUVW9tU5QUhJReD4JfhuBGfoDajUTH4KPiif9TNEYiSg9y38pscdFXZLpTugxTbpJpyyRm2Cp9C",
  "key9": "mEZRTjnBFqAjNfFFcFS6NLeXu2fho6J1jzY73ahgWGpVxb5hEMHG5hek4jnq8HDubEPGwrMQH6pwxYedWaj8EcC",
  "key10": "5piQ487mayks69guSdo5zuMngKojrPY8jsUCKrtaCkexiTEfu4QQvqyABU8Ey27LSyC2UfrV3urn7KCVPi7nJADB",
  "key11": "2hCCN3NeVFGzzBpHuJVUfSna1sCUmwK2vRxhYRges4GP7yoVFPkDMv2MovGxXGMGLiHHBDnhaKsLyDUVyhwiXjMt",
  "key12": "4rQm9uM9jvWGeMWpsB3jCwcKq3BvMjy2ntejucFpGcyTBsjoXAaFUMYo2JnkwyoCW3VpAFVzU3N4A1RBdw6Rc9eb",
  "key13": "3vAmBrZpa9LRTUqxWQLgEvnLJzaNB58NTezEjwybEq3iB4PRz9pceHnQuUoVJyRLv16yMFkJkysY58RHC4gTkPzQ",
  "key14": "2QJC4DHCs39X5tb4pf6fvLG9U18d5H1aUf5dgXAY5TLQGKVnj1goghN7cESkhwwVqAAY9WkiDLn179HLFr2UB3dC",
  "key15": "3CseyHpeLx6qQCk6ceK5ws1P6XxgXmRxaGYN7qzrsCYFYCwDjxKvUnhg423Zo3nJY9pZTCjknvvHzYSdd38Z6XWk",
  "key16": "x7aQVgR2X51o2KsUrAnyvAE9rwPb8SKthEb7QyJkos5aTk66PW1G4jnyAjyJNv5o8grX3q6oGeTfhturpbBDsKw",
  "key17": "AtGU53SLdVMpRFhXVS65MAMd2hfnYTudiVeTGYf4D4dbRc1N7ALdnWf12pDnqX7jPMaUtGCZbttobfw5NvUkDqW",
  "key18": "4DdKYSTe1apUMKAF3GYWxCaXfhvExUwBRpzoxh1xTaBW22CZcGLZmCrEEuWWgTrCHEgAnALGQiJHATMfP4qWYVr9",
  "key19": "3cCgiHXmuYidh3o3oFv5SJt7rPciu4chvbztjyHqNvK9ykEthmnWxT3YD4XGDFDo8U6czaXnXZnKCip9b1MseVLc",
  "key20": "5kQpWzLkxD6K2pgVc5q4Q6HCQ7aorPfXk7KptYHgw8MhM71VjPwz2bZyjijKLuZ1fqAznSHNTwCMPdNz4kzac2i9",
  "key21": "5kLo6B9LFVtBP8xrnX6d1WEGmTwmbGQhzaogvhuwSDaHmtJvu4VMtwMaaoTicxC5eb3i1egF6y2bSCHkoRGjAh17",
  "key22": "21jk112Penoi4TXSREAs2xtkkz73kgHbxiwAqLdxtWnQKP1fAEUKQRfyjiPNRDtKBwoozePRcVVRwCTzn58sHBEJ",
  "key23": "4JHmQ3Bh8ToQJb2YmFLU7CFAnBH3s7118DHJQThNUCrhHDK3ZGfzUhkFjSAmeWr9v6jb3okzbjbWrKYD2XTJroyG",
  "key24": "4svonQwnKSkznZrx6G54zGt5GBxxZWVWtWqfSeiQyqUib1qwWXU9vT1g1wvuX9Soyn1N4w51s9d6GXTETth8CrK6",
  "key25": "1tvpnZSkNRQBXKUkyNQFvBcKGj9xcV51H7WzCmWqLSuX6p8H2mwW2iM3vu4FUeiVRRVgY9w8JTqr3t6bG2DCXd8",
  "key26": "41CLNB4mBpGauALpi6dTzTkGaySdQdE2M7SUAzsGTpqe3iaL7Vmf1BGmqD6Ci3tVV478gXvdiuE3wJiCjP59MsVR",
  "key27": "4hN7hB5DE4yecQWaBbrLSma1ST12ayqtPnHfhSfEfecQcnGUS6tn4wqKUSigRDwVujkAEM6uwpkcDBGkLrtpdUDo",
  "key28": "5EjuzvRKTA5fnYFebBHJPzUcGNuaL8KzeX3wQ4zSAfqeF97gD1kj1UPZPwUSnGsVLGmnp1Q47SVDt2FnAEcYJzBR",
  "key29": "27B1qaSyieNvYL4CL3V5MUkiJanvVvDvarbq7MEn3UYDvfmkq92iTbfWDyWo4kGYMtaw2tnENXXv6CcrMYbdycwo",
  "key30": "2UAnbRHxX3rtPYUStA9i8acmveAzo8z3udJiSBy23NrG5uc5M4GZiZnDAVE1LEXrJJhf9ojVzYXP4TDbkhk4LnHs",
  "key31": "2if1233ja6aoGPmjyhg3EDefXjegQiPE2a5pmogQBT2ESa7tZWdgTFuu9wjinPjUjzHLxeisA8BB7rh44dsnPAoL",
  "key32": "5oB2B5oJYC3z7L4FiHfE8CqSAKDKMT3iuGmgTygVCAEJMGnPTtYkXzryq1mV9NNMYZiJhP4tvPUF2zrrzdt7JptF"
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
