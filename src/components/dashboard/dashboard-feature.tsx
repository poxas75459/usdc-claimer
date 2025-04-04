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
    "3mcG7EYpy96fMYSBTY5VC1KeFBcjCEVwbSWmDYApthPDmx7GrxLzN4XnfYtj56mvGMoZJzHcKABK1iU5mrK4e62h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sC6PoqnpNCSsmzvfSy1vEkN5f3k2pvGCB9xnAXycMBRxgkM8KAWxLF9coeQa7BYcsFuWSK67Ru2mw5KwZSZXLDE",
  "key1": "5hzteUXd9mWTtD8MaF9LFjdn2EZLxYAiRVLpD4hBkubMXDibDMcMqFAKbV8PZUVfise7RKJEt2PpQyk3hsTrDdPX",
  "key2": "47bEu8sEpSqdvcY5rpaKUhDwX88rTN4ZvDV7tgGYjtxLGrfwHr7tyRmtFY4jnf58fztJihgFFPxqBZzM9QzJcpKy",
  "key3": "XCVLke8X1VS9Cebyn2MXXBvzT8HvdyeGykRk3sH7WU8nnL2oCMDPNiJDu6dUxufGcjt3ARYqWbL32uuL4nRxJpZ",
  "key4": "4n5FyTL6wExR1uSibxELcjttPYmbegKCMjmMLZ12T422DHp6MaUYhCkWSJZ1QE7uf1tBvyoUr6MYQTJrDmMxNREt",
  "key5": "268eyB8VSdLLWxqTt4csMe6u8LDq8AFDU4CwnEtT7Lq7cwsuF9nXwPadv2PFyTHmzbyP94pyTGZTwyRrBZQq7wKF",
  "key6": "mTbPPN58h5UGhc33W1TvXfx4H5NYGwkdugkrafLLoyoFsAHyqwLsKnQqMVu5jgHoCLtUcCg6DNupbhc1dwnkrS9",
  "key7": "hznkhY8wSTjiByfnm6WTGCwKgLowxuAnKugZeQaiwrQ9nTZ9J5oZmGoZu9DNWwfaqm8nhJj3AJkzrYVFiMBCDRm",
  "key8": "M7vbPmfc8fSdFhDo9nfsdttmp7jaPYBZHFiFcDtqkLkNxKr5NssjhAqUWwidFtJbFNHxpqucVLbr5iPq6fkkBvp",
  "key9": "645XrQwS3jdSDSGTa8k7yAShRHWJ2jpWZKFbFoBrdoadzM64as6EZPqBVVRc5cFwvoZ9GNUKZQYzvjRQtPDw4c2r",
  "key10": "4hvhWGmVxqdTBNZvSSxcecic3TmVMz9AcSrDJFuUPfrCEpTnRk68CFV8ZJxy4qpMkToQ3DCuNr4V1VdMehwN6bfB",
  "key11": "5sVQCDbdizBVv5NPTxzQxfBHRzoh93pVNvDWoHfrTsuyaQmjGjL1tYForozWmRphcbETfn5h9JTMf1kMY7gRwiUm",
  "key12": "4WF5GrxQRFQDMtr6tJWbaGuWUpwEZKfYT1uHXx98umfriGyZsax8tGqdzh5bfbRhH1BkcE2qPnRHnmuCRwZvz4Mo",
  "key13": "657X3vBXxJSNci32DMbXsA2bJnTRbDfbKG865TT8c7QpPdSWVTv28WGGkzdgdcHY8jo3xfzsyis5Z8GtUXNfEuGd",
  "key14": "3pAedVzE8V2W2rHkd2pPE6E53WiXwvmQYeiWHva4Ae6eeseqTu7goBeREMxckFbArKQneXQeqbFQuof2WofVpmjc",
  "key15": "2wfFnQTUESyxW7KZqNG7Ce9ap6VJ6aqB4vcbc9pfcV4qKQDCCZsp6kZ8MLtcX5VpoZ54CdNc7tptEVycEXsUexjG",
  "key16": "4ofoXxocc6ChHhiY2j7D2fBr6Jua18BbbUHas1ikL8qJ8TXM4EqNEA3itSCofCD5yJfFy4SyaJjP6hdDgTRPcbWJ",
  "key17": "N25k3TLbxhc96NKwsjLniDxLiUYMnfah7uWMFMCdtm8NYdP8S7NZz3XtgrDae5yNA3gYXm55hkCB7M5929HR9CL",
  "key18": "34PVNUzTCiY7HyNDcFBhDWQLbZoDckRry2ZBm8Zx44PDu8Pd5LWbwZayofFrj6w1nNSG5dm1D7sijTKkN53YY9eo",
  "key19": "2u1UgPuNb3vsKVGkhb6yGBtx2ywVzFSxLTUPDmWrdnRwGxKR3uaMWU7PFzi2tivZch6uJytGYxHSR2hCAsHVs3oS",
  "key20": "35Rhn9R3yzUqkoXbNytQnDq8QGtZ9boxma2NHY6Avbqi4R6XLcsrdfkao2TyJAmLEPyHiX8YhXDhZTpvkEtbPsGT",
  "key21": "vb5a2EXc597t3yYQnttzYK85YEEfvjufBAVUQHxdMoDyUs4gyVzwy4CTZCXpjzLiE2VmPTRTyMY1arev8gTwP6V",
  "key22": "4xdMjANknLECwj1A9T2nLNEQFQJ2UnyteLjc6EQkuAE5mWogvctcUvN5hMKBosBMMbfEG7KypT2C5qTuqeDD7XMj",
  "key23": "5Z92UcNmpu4UzWgrz1e2i3s1xYXkcsXcXU6VEeosJgPdcxqs4h1yGViig8a4cLjuHfj2YKrXKDafzGDpSdc6w3j",
  "key24": "32XAsdCHZo4TmmdEyq6bUp1TuofqPWeQmbcRhZQ9VZ2coXk2h6y52cVGJnuF2uwC4DvWnX4aYTG2kYhmszcEpLRb",
  "key25": "3QmV5pr1t5pGqBDJFMRCE5b1VKcbfyAcmSo6Zeqs2LuQgRxFvWbwhtESJD5g9QFA6GNT1s2GjqNv5eEFpGrxd7uw",
  "key26": "3PVySsphyUTD9HWtmgrRPWmuSrHA8JRU2HZ4k4qo4UquBsx8WJ5uyuZx7uvG9CPnx4DCq2xHUgDHGbfq3adYh12r",
  "key27": "3Cvjnb8n4G32LDwAcEcsuiPdDFv1ip7srQe28jz5v1kRRj1zk4NmqGJ3HoJDsmZ6dvTWunVSxLSnCHk46h1gCMWg",
  "key28": "m1GCe3TMZqS3rrCLrsxCkfPtL7DrwChe3GJqgFF1zsCtGxCXbUgsCyjrJ7pdhHL4za8JxfWLKJz5Xmo6n37uory",
  "key29": "3msx5NfsRhXSmAyQnX2AkAFSVY76Vqf1nK2Q6XfgZyek1jWuHQcNR1AmAtG8HovQPcAcrytVMhu3yZV7MBNUf3in",
  "key30": "2iDUzX25asDTR8zsgqPdPYAnK4bxqHKqVtN8BGGnuFtPAC43JzpWUWCNjUfMbWZ6ucRZrxKQRC7RJZ8jKNh1iF1m",
  "key31": "Zhm9F2JX2RoVbsz4Jrg3b2cg8iYGRuaL2zknUzW6iBkubY1hcDogeCVTw3fBopUDXwQGtfBhkHFCrWpvxupr7sS",
  "key32": "24vXks42ZBzyFXryAy14GsWuPc1akKXqMp9w2usjgF5t8NwXaUfENq6At6V8jv7mfqns2NXLNeDx7LQiUeZH5znC",
  "key33": "63vVwDaHy95rLtU1RrP3SEwWsvW8z9T86CG7TKrDqmBAzRAgNpYycHAp8ECVE3HQ6Mpr1CbxyaFPAgwaRkRVZtnJ",
  "key34": "42HF3KHcm63PzdWw8NrjQCcXBnSuEhUredopbZymVryWQ3gCAbgXM2JHMbDZSzYX5RzwD3MaapmZBsXfpf7Vvvv7",
  "key35": "5jgCEFYU4qavsSQttGTZbeyYYvDwna8uaNtfYakving4pw9BCKWzh5tgyi3fTP38EyDveZUWRAyVyzmc8GAHz8Cn"
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
