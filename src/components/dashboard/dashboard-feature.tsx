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
    "2KPnQ3Dk2hj4UoLWkEx64L86USUPaZFkp7ACVCDUCvoik9EJftQX4QQXXgHUCMX2VedQh3tMHwE6tvpyXhNMay45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58UBrsjyXPx5bUzSbVLnTYTVP2wXydD1UdekpRfcu1SKyoidmHTPzXpZZg2b4Xgz9RPFTZ3BYZq7NThfXwGtR1Qw",
  "key1": "joCP12aAg8DjXqgAHF5F51y4hb9FEMaXAEF28RbqaZE3iVWiVzFyrUij5YcqkQBnxwunqmdU3jujsVJSipBgnqe",
  "key2": "2UWuLdiMJMSGdhyXKcCiTYwrDVuNvAyvVkX84VsoTdN9syPRkkMwayQNfUAdroJW1HQDrdo4BphfhgrrV5iZcvQs",
  "key3": "2xogULRfTLzrmQpE4MWBBGRA4TNx7uUEqigoMJGVyUu8TeQ7mLMpYxcwCMWF46spR44T3AMLmZnFJgX47NSbkw1S",
  "key4": "2Am6Fahv3jR6xNPKLQqoNeYVaNNNt534JYWeaw6rshtnNo9Th4ZUqZh8oYBista1xouFSWhGTyXSVd1yrMtMDxi2",
  "key5": "2cUTN22MNY818jjF14oHdcuPXwZ2R1Fz8zPedHJJfzk61FH4E69GLcdCFRPYN8kX1ADc6xKahP1SHHgaNH4GPjRE",
  "key6": "KB8Bv51XHF9JAJ6m61c8P3RRwyiu4FTq7BthJGE98rzAnye2pMD5kGwDfnU9pcWTjGnHqkEbbhVRoSaYpaMCpjK",
  "key7": "crUQi4isjRjHvo1cn5sd1FiYNieg9mEdU1WsAHU6CMEUjzBrRXyTGFts3VWafW2cMTVvRaWt4DrdBJ9TUDjkroP",
  "key8": "hvkiS4Nk24BKbDysNkemAbB6T3NQ6TFp39zVhzvhfDwPymwpoPTzRurjDBA5tckZFUtRLX6PPZbtyfQPLCAX7VW",
  "key9": "54ed2KAvczm51EtkdGN365eEgv4ZXeNnHuwJuCeJfvDciCNaciLkgbuUByVC6q4UCQ6Z8mFWDv3dc6pcUjnR2A9c",
  "key10": "4N53icvFknAeRhPrmuqUehpRB6nPdVQqfRh7UVwxMnEYjhzrUXv7qnvfo2H81Zpqx9j2KFP47EQmqKqSCBxCAcV6",
  "key11": "45FeQ9NLBqQknP4bKc3tXepF8Z6eWYv43kpAw17mr43VcpYgXFBkTNQinrSJmAcRf9XkuYLVS3fUBGepBvV9cCPi",
  "key12": "3csP5DBvz9e8HcS367dVCCkUUhvQejpmq5F8jueMkoBZT2Vd63taPSd9UUAqdUP5XwLAg3aZxtre1mwA9McHTrFt",
  "key13": "2ykMuZbQw2DTdpU9Y2tiYVYacMSveRtkGPMHYCiWcQEKkiVu8gKfUJ6xhpzcLMRQuiW4gmjK1qVqgvEAdThhLut9",
  "key14": "2cH4vEnSKvMPehZZGsBYSAhrjPVL84TrtUohbEyDpwc4rr3pdg1sji6gRGt9DLvxAEVkj7ZhXMcXXepPNFHDyLUE",
  "key15": "3Ru4NhziWUMjLXBegyJV4yF5jmSv6nkXTjbqDBg3vtmA3fYzFRQPnW25pYm9qnapBTJiyJFSH21WwvvAxQSnSyFR",
  "key16": "3PoGCcuX8FtL8SFnEpbVD7NQPnxB2MprXryp4uGEaZgRvsss7LKvfL5aj9w891RXxBkJ26KHHoY8ivZK7BhhGYad",
  "key17": "3ErYASYRNF3EM8BosqzT59CwKme7Qz8q2Kgr2qV89ejphZbFHvGVDtpKxcUNZMpP9xg31BYXQDbEx7ncsb6FrFwo",
  "key18": "3XV1QfTPYz6b6yhhdm2KKtzMBQYKWw89dpzpGHdQe1BvZCaBBoSw8ZkfFUgfiyHKjhYoHGgTsQBqwJBEdyE3BfKH",
  "key19": "3f4E4gVQChqZMfapuEARbuuz9Die85FUFum3DuYrranjshXZxL973mU2D1XzfNtgNy3Va2QnuoTVRSrMi5TAsVHp",
  "key20": "m3e8Z99qM8VLcRsbZHJH575DSCfjgHmJGuqKrgfREVFueRhbnnRtRGXR5uiXhHx7bvRNwzpXqt6yTpMuNZ5mzxS",
  "key21": "4B9xDpHoWzD5fuW4ekM7zPMSgLJWXUfMYNRAxtYi28qohoVNDuvMH2kMetGMhz572KJmJk8GaViWhBuCZBpd35Hu",
  "key22": "2QPCNqisi7mVrKrmbWCAaFsDUuPuPBmCahdFX4xH4RCoYv7j4bFLkCx6PjJyK7QzabyHss7E7aWrrAsrXZqGgfvn",
  "key23": "hHTT5xEjeBgv4S83GjR18tMBJ46tpQJAuD3fn3gmtVpWGZDZNR1QNoRiszNRmtUN1uytcBExTWxdaTcyKS5RedC",
  "key24": "4gTd86TFwXeBvNqrZuUCqHXjRNrJvUKthcT93STzhzvBjiB12VNUKGyp5spPcnkRvEEux7P2EVvBBT7XkVXsFXTv",
  "key25": "44h8eoSDpakWyfRTjumftGh8tixeEh3qxXuKVZfgRx5nrq5ZHwaa1cjPxGoePhNYfVymf9xgfMDjDCxcquWoTrau",
  "key26": "2wHBwEiGCQbsETiYgu6HHcFQ787YWGE2HGNkBMfLwCDBVPNEnTpCf7FwbxQ1CoDME4HZ5PA7XEGsCNW2Jh1FuP4E",
  "key27": "21ybqWMGDtAhRCmmu8TS2hoeTQ2a4YENfktUoNT49BBNVqEoJWG1G5TBF8YjfXkRE9TdUmaLPt8PNMn2KLtEUG2P",
  "key28": "66jxUFURP6Cwu93HPhs7d2avmjFXLtKJN5w1rG96APweV5JQ2a7fEXLbjcsKeZJDQTPgA4Qjvaoz4BsrVFyqxDLV",
  "key29": "5YKFjEQorSR9ntSLsXRiuVQfbvdqSnQPiJqPYkvZZReNsUXmypBLhTMAHr1SnbiRv8qr9VA56YvmAGJG219bFteP",
  "key30": "4vFggNnXmRWiT4rMfdfDdfbpWzsqEKE1zK28mcP1v1jVTCiavpD3G8NyMG8Cpu4cPFV21ByMpbaCVTQsKmaxFKzz",
  "key31": "2NSq4wqCSfPuHQS9WqtDKH2M7ui9xL4x5yjacXkQiDLAubu99TNurKnwpNLxUu2ePtHyb2Hoa2pZ5FsmuW4gUZp5",
  "key32": "4Kxp5UEHspbnHBGKKVuTzYcMZgsucp4cx5ZwMC3AC6GikSWnS6mKeavudmo3aF6cJU7eJbSrfMHcD7uVV6PVpSsd",
  "key33": "4GmYdS94mGGFZ8VBawzK1iFKuacT6Qv6uahvgPSGrPRS7n5XNekUAUKmjDyYoT5nrNiBMQxwC12my8uggPj7EEV5",
  "key34": "5n71jd2CveuiaZUypiXHoaMM8t5wnfTQR2UCrwFjB7uxTJN3KmZQ6jNbK1nG4eb6qo8YxkrX61ftvU7H2cECiTEq"
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
