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
    "HgurG4otxJazRubJVqppJk2FCqUhk9DeuyBEAKq2YH8AWFAqGkvAkWeqwKHjQTxWE2s6rvyLb44e2n9N61ykYmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bzJMwZTsbSKVycJtVN5u4yedMpXMFUK74kgi5Ds1gCiQaYnbAQcTkhuiZtqKJT7iZsjsuQG425SQvgnfugjrc4D",
  "key1": "3qNFhxk2TgQmjPLo8mMzMaw85dfSiu7mBK4NEVgj8uYwwEB1yydUWZXU7JJ1VdAAdYwNdCoXCkzRX2Yo2qQePCkd",
  "key2": "j12VZvPgZGGPVNafELdz2FcPScZdVpokRPY2WL3z9fczvCUfvMAPMPTvb55LqwkrAdfx9V9yMByhJWsWkBLvoaM",
  "key3": "dTcg5jG8PoftykuJ34Se5NdhJGvJL7DQmcMdSgb28MnJ7YujNCoeJnVRFszFakqcQPaTHw6iRBrBRQwZy56yLqc",
  "key4": "2rMrLE6yDhLRvi7a4cTf5yytBCpNoFJfhyC2ZjXyJJ7xcLVeT8vXjaePGEEtKa2YmRczHZ11SfMhPQEtyY3QyGiJ",
  "key5": "3yDv1Ge8C7BDNSNcYdF31k2YsQDi4E9LX6f2BBHGektdSnVhTFd5sipQGo7pAzkLcn33RUAR9MNVJ5CfNDBaWZeU",
  "key6": "4pgJegWwcanr9NuKPTKxP82KsAwqhzvLsjNF2ji9VdXXPXZqXht9FwEy1sXEE2JKtyihQj43twKUiDpA5fU4hM9H",
  "key7": "6MWFZe3VNjberdfh11PbtyA3Bz3EV3V8LV1Jw6STZhSD593bhFn5ZWsHRMXKNZYfd2GUS3baXoacJCxHwkG5htF",
  "key8": "3W9MdFF78pipiqxjd576HiRCduymeL9WgNh6ECTQLMAqpgKk11JkzmkCdhGPQAKSvCf4VVrYM2vXFcrQPW7jebbW",
  "key9": "3pHfWX8zy7qpjVSZ2tbYckXacf8rbncv5PKtVwTZH5Z3ivveNMCWLMpsng7FVd81ZnJyQeiHyFPUW8Cub6XY6t9r",
  "key10": "2NxJcZpvqFYeAQ4Y4d4BSsojPjrak3q7v9BHHdS3djGMaMCvhxSs9nPdDCaYKWQZK3oGtJ775S46BZTiRzesPbTT",
  "key11": "611AhTrrzCJCurGoNftxviRCxQWeSb7DUzapZwog5YKTz4VXJ2L8RNNTHbhGW66AoGpx3ggGvujyUJKkjEcL5Yoj",
  "key12": "3V1bdjQ1eTmxan7A9WbcwLgYo8dU5DYUBrnayCsWfHXm96WiTzLBazVChxcgb7EqremX4hxe5mqkhUGRT1CgCFCM",
  "key13": "4LSXMUoqFNuhDaKEUTfrCbdE9T9NyvJUEYVuWdwP9R2ePrN5L8J26z33vZkRDCq14YRKrRSjX2X59wfCuDaGTfuH",
  "key14": "4L2626C3vojDmoTWyUKUkV7xWsbSZJ6Jgcc6yFf56qKiNxLaFL9NrQZdJ3X3Nbk7rBtgJ5k8NzooU7YWcbsNLV99",
  "key15": "3i2dtYjTsPytVchDJwnzhVYgofRfXaRxwPuPKS6hzFaJdBGJbNq1wAehUDBP1DBHZuMxZcLN5J5M7isPcPji8kWc",
  "key16": "5CFcu6NKQzp5vq83Z91TBpQhGc41rpHSQzEgfHNRX3W1f1JR2ZL56vriULbXYe5J1bqUQj6MQ4qcV6Nso85nZn5W",
  "key17": "SqcGoRCcTTGZkmTx9Ty3Bb116xWd9MeTHgfvmwohFun1kpkfmyaJkdBHK6WJbsR8Y2uYYixdFq8g78zL5hEQ28w",
  "key18": "4j7SuURSJuEdz8bFZNuMksfFcSM5QnooSyxaw3zoAvt4dpR7oG3t5ggfHhdggPCyvJGGvU2X8HXbaReN1Q9MHBMq",
  "key19": "QvTfzBsuv6ERoBVmBM95M5JB5Y59qTMnExowErANKMPUrHoSXcBsJRqUPdsMPJjo5qj1opYWpMN6XxMxNkByZT4",
  "key20": "5Hkh5fFuHt8yk9vrp6ySBveMpkRMtHdxmg2QgDJ5eYdAiWViM74ejH7R5r6mAYWmhCp3hWidfbpDkVEsRipgVZDB",
  "key21": "4ekXSgVBNMdHE32gaaH64pH8vkR3XaT7R2h8k6dHbmb7XC474shusDEYyeBsRBRhPWyoenooUxDAAhSEgJy7nck5",
  "key22": "57FYtQTCH543TvofXBuEou5mXK2fw4kS2Vw1XFqwybdRFhJHvruv6K1caVjuHSDCyyGATprCovmrPtd9q78GbXWq",
  "key23": "4Y2vmZxCYEMwGzny9JhdVPs2DqNzkA9kqoFMcZ1F1JWRxFC46RJgnPmSaFiVaiE1hzqf1URT8gZ4825YJkJncV3a",
  "key24": "2A5STb5RoMXkASicjdBcqizWNJugmC5HP6bC8Yp14vhexa9UtuyYjMjZVeGgjDMBmUae5wAp71LyJTDno7Z2TxJy",
  "key25": "3oL8drqjks2JEbgrXu9meEMjmma5MpeGeVfnxJsZJNiMRF91ZR7NZYqVo9i9z6MBS3HBA219yXCSuzgaXSH1jGee",
  "key26": "45nw4xBBDxHC83S3NaRmVRJegXLXFpWJXGqQKe7sdnjFPZh6JEdsASAEpZ7TBfBXS8TdktQHNtDN4DNMxwqBZA3A",
  "key27": "5TkmHjrQmmnCUEbL79ET7kHMnnwjuHY9a5Q6QHvbT8EyNQoegJUabH43sKQxHzhwQX2LHrSE2iy2mtQioJW52F4E",
  "key28": "4zb1bYVjfn2gpxiPM9ySNW4HWFpA1hF3RYKCs8965PcQPJEMEuGzRDQozUdQvxgKUcXCyFak4La3s1RkCEFuTcTL",
  "key29": "5UB272McgTUuLfsdwhzRnHM3SowSVFTND7nTuuuxLM2tAPAqFJMYA6LpCpuEjbWsingDYjuaqcTYDENw83gnpdve",
  "key30": "4WvkzyuHTXUtxzB8R9iZrnrHZXEsjvNLvSAiDtaLcmQhy9ibToug6z1g55Uc2bkDvcpVKr9tQFyTUr1N97FjE8em",
  "key31": "2zAZMpmdPbYVo98DiS5cDBBQ31MBM7FE4ojYFTSCiGjiLUjTCZ9sbSkai9RMPBsfMvenhDJBmwgJCU8DXfoD5owd",
  "key32": "4Nx18HMLaGoDoGFvsAjkamMdnLmqyeDegRgrGjAsrmeVxpaN7ey2dRFoRCRJnFh8bN73PsdLMZ7Tt5G8VmegGDtR"
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
