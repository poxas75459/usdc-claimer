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
    "61Qo5pd7gfoFTtRjQtieVj81ACbA4ohJ4xZGoDrqLMFkfKWnsoWn4t4EAQxAxuWD4Jy9dmVUqn2PUJEj5ucjA6bT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24mQsgXWjPKRwHSM8t2eQCDbwSSzE5xvreSJMJPywPH5APUAnS9bYUxEhrxJpzqgtfN6YvX5VnGXCTfWw5AL8DVV",
  "key1": "2o1CnVM52ArmmoEikbaVoKjnqVQVd49LPmhPVziyTEsFAC6WMhwQ7KJxasMj5c4fGNjSWXYGxMmzbzpe4PpMQoBU",
  "key2": "WLqMioZQmAejA4noTbnfc2DRbegGBfM59TKgTUt9DBp6SyQ3ssEL6LETJebQPaSc1t7kNx9s4CArY6JXvZGimqH",
  "key3": "cuDrC5PQTjKyMk7um1cUYTWAVMk4ZHpFLPnAjXDhdYvice7v179UvPzR6Cbqd3EMkMkbJGf6gLAmYnDbKsiogzx",
  "key4": "22zE2Csk1xLWo1ZBrAQhhFPnXuABBrRts1TxbHfxWy2Q29LsVf4TyTdZCcwyEe2HUVxDEwRPt1sEGxQakBYhrVd5",
  "key5": "mp2vZxjdyosWHXT37wkR4NQYFa1M8UMMYfGt7PvmZ6ajFL1zpx9W6QVoYVr64SUUHmDV8pr1t1JQrTwzDwwEip7",
  "key6": "4TuH9DTKRwSEFV4bfhzDbypgbqd3vTAkUKkNcywi1Qg3nw2K4yZVwkoPrbEMjcPmaThLYD3Ppr1bwdk3FMRqoRhp",
  "key7": "5GBmMdJKqp9Dj6YxgERMc4UGwiJovTM99PNYoPgvtWntkhfjPFUJZBeULFCQoZvZjcoQo3gsnY6s4SXM9AmLdtjA",
  "key8": "3HAziMUnX2E4Ezj3cbPTHNQeyRzTWanwrnJ9whFAa1XSxdhed8XCiyFXozf2waGJhvTFCT3WgtkeSgGqLoTsovmU",
  "key9": "2cEVnAiMtfU5UuiYXj4QTszJaBmJZo7VhgsY1menyyTkFDogPWb9Hv3femWsChEdzbo4DPNpjjNedFBfQL9LnFHx",
  "key10": "2NEc1zNo4v585xFBAAcw5Tdh1LjPqqUprzKSiSeMdwoUnWogEhUcxAvxCFoRBxbWhkmigMQS5MmsXDTb7rwfDDgy",
  "key11": "5Buy76pnyHvVz71C9njEHBLD5rY7BwUGQFA4W2Gq642ezxD5D2i7LKwtEeVG92aXvyP7jvqvZAzLDewp7iCtJtLT",
  "key12": "2HtbZLYeD4mhs12Qbwu7K47x3YrWyEubFWtbeM9N4vVhz591ewNS4dTdADqS7fBoSgZjuNKZ9pXLYGFhzX1Bk8Fc",
  "key13": "5tHihGyv4qreqQPYj57AdH7Qm5Cjao6inr9TXWCSXomM88vc1L3JiafZs3p2ciMKEYytUEU96VbrB4CQRtPBKEUm",
  "key14": "568CKC9uEYvTPPLiRKf1Xa2kABDm3XXgvimek4bwZdGQfeYry7jRDeGFzgBiv7NqyWcs39dS1yFJNPPsrRxhEfc",
  "key15": "4NA8vQHc26Ddk3J82uLBdGek9SWcXrmrYtSf9fn5VpEx4ii9AdYHFSRfgr3Nh2nJww1mUQ7ihr7QcL56q7ajHMun",
  "key16": "2CtEKG1ngJvUt78SfusP16vqZv1V8JK2J7tGubJ67o9H2tjykH3mtb7TeSJLvqvibPimJbD98mLMA7HzYf9KY22T",
  "key17": "4Rrscmsjhyj8ckGFpG2UZ4RBM9E8u6FganmD4ZupqzhzAhKEeshWZbQrHm6DCW4RS627ZVCc4MBTrfYrmarrwrxV",
  "key18": "5NN9e3zwUtnephLCmJK17oe12q9MeQa7bghDcUKDhjg9dXikmxx4G9Anx9z9bUzSfG5gSK7Zop9f4dACpfhwF1MW",
  "key19": "59dGzwhHYTmo1FU8YXHtZiWZzqfkeNQL46L65eCgG3qeL99xJ5gPiyvB5FpMDBSPbyf7fefUXvaUU4BY9dYS4DcT",
  "key20": "5WbzKdbPeBRXXctpA1jpiWVSvypvKshe7xvrE9qmAyvLtpY5K6BBYr1QoL9L469qvj4ZkzzbngdEdT2dE4p86TeC",
  "key21": "3spCFiabg3j6gsyCVgyjMjqkahChNeMttDrpzszHbvxPCb9n4RzmUEsDa5PWksUVoyA9qnUWePp9uetAYuiQqqqT",
  "key22": "47s1RDXNU5fLPqpnFWM7PLywCTAS1dZz5tuTGVkUN4RvWtCQ4FQGGpuAqWuEA1C2DwubpPUzJRpn6mVFv5vZAvT9",
  "key23": "441hctDax2rbat83FwE2siKUVj33rNYRA1x7ZHb8eUC45Mb7wqLbVEGHZchs8v36kcub67uzVH1oBpkTTBwDpgQC",
  "key24": "8DkwEzhb73gAor73tnAHSgZGEHkmeJEUKcpbpSmW5PVCCFKgZDewoemzEAJPp6puEzgAxF6XZqpNJakfkfrjye9",
  "key25": "5yBxs6BU412gsWkcAYMGaHZkUV9kT4SRJGbKmbMcY8XgyU8S9U9jUDwjYrUHLDusHMaQLbgTAWU9KjfzJQ77vGNQ",
  "key26": "2iaQYcksNVcpo4DU5UDMVTpZkxV6FezSTtW3nRABtZ2LVxN1zvUfnYU7T7jSBw5FMxxTEsXUvtvZFYEnXsNTgz3W",
  "key27": "5QGhuPm6C5GHcofkyww71nwXdvMwpRZCBseLHwKvHnkTS5ChwQDcMy7J7RvgnNDmKoi54GB2MqQCAXDMjBUNjswa",
  "key28": "4HxR4zz8KiHmZaq7a1g5A6fxyNetJkt3QsNCSEYhbHYjdaXCySy1p7yX6SsPmtHiEquxSJjkuiK8s4W3CsfMYdPi",
  "key29": "3ewjxioC45pB6ZK5SpbFhQgovzK4Ew1NmwoDJGAh4tPKDknjSSrKjRk3W4pYuUdZAsT6nnEs1PV2vfLVh9w7HRic",
  "key30": "3NCuMkDtL9tQVco53mXKzCcJEkpxZqS7hN2bmjSxLjHGLqyvzeLfXeQh8bGuFUXYRZYg4SwiE7yXCAC3vSbkdJdC",
  "key31": "39byWvcihpjCTERjQiMpPNBCXDyfXXUAdEZLZj5LgbuQUP3mjKHFRvPkrXdKVFwdQMrkZZxbfQiihXaZvjKdXg9z",
  "key32": "7qHYufShWNEq54ormRqTfdF3byoZbuYCgUhVPiP4sr89YEwMypCiuTugRwyh9LtS7Crk73Maou8xXyFZwTfAhym"
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
