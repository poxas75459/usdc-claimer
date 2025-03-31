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
    "5h9zQjpQV4GuFVhL5HavoPwwQtoJqqUxhtCQ6pCH4SpPc2pX62kSPt9cH29u2P6hWE34MUCQcfgkACtyLVqWgXJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kw9ZSWNwV39VYwRcuxkoBp7HEdzcenTC1SvSsRqTaz8TR1BKpNVADH4562KJdJJHDG23VA8PDDCeuTXjHZhKkiS",
  "key1": "7LmM8VoP4QSxCEAz9JzFHrstHs8CRRZEFQk5kMRjuokQNAYB6DUZGhoqTHz2f1zDoeDdPPpnExKbeEQnxkoURRd",
  "key2": "5hviozjwgRLFzE8iiLQDSupfTFx58squ48AAvthb1tNFKiDYS7RhFfDt72en9fhp5D22kRaNNznRuyXaDAfZssUo",
  "key3": "3eskcyCdVarM8gDiQ56PJhwoYFFKyPBYewqaBa4mfEoDFMRq1RmqgdbE4DFBqqVoBwhfiLvpRktBE3ZfUXqwra7x",
  "key4": "Sdh9eE9vVZRc9uguNW4oy6gPHKtZZxwgXbgoDwZeWNCPhGB5s79modWsc6z6t4Kin6ohnj9uGGTYXo2FwUor1Nu",
  "key5": "4M1gPs1aRNXLNpSz32Nx6Wz5ZVp9cp4dfQQxmxUb7swAmfjpWF716zF7iW2Ntz8RSBCiwMEWyq1t4QpZPoLgmm9P",
  "key6": "3tduv6uoaDQfrwm8LRG977kdn8s56nbReoRz4De3jPiCbV4qn7tc1BQJNjzx1PBJjm8z6JPudPJFkBTpyT448S4",
  "key7": "JPyzzGXJVxqcrvWqFxyJCVtB9EJuzEz7hvhV7ELNRdkYUkvmsuqbU1bpb3SC45kHxFcvbHh2Tz4mCnuUjDvNTMm",
  "key8": "35NvchxibEMHYqHQDtJfeGv5eB3HHjxY7YuMCAwQv5tNG7D9vXCzNv5kjDQWNyESQkRmL4jHj5YxMSJMLsiyvXWW",
  "key9": "2974TpezYX8Y4MmyNQcQeDkLhjwaNQMCz1eMZhYW34378bZ8UGtZ7GRmj2ujMAhK4QKwb3yNrKgKKNjbQGQo9w7L",
  "key10": "3Q95yZzC2a2FSrcaoiPfiXjz1hD5DA859HjRYvD35utgmDSTrZgj5o9FyUNGrcZvbFceTPJ7i93LLFTuxqsqphu8",
  "key11": "58nyKmgUAYrssZPFXBmba5S4o2ztReR67y3WQekGZBq6XcPvaNz8ykYTM2kQNPB1FjES5bovkJyuJk2GE3BmiM5o",
  "key12": "3y5wvqYfTPCFDEYT3ja1Kf4JX6dGZWgwaK1P2fKdBvWtMNMWbK4o5vo6XmeQ77ABiSV9wrivmwzuCwNi5WqDyMY7",
  "key13": "353Q89EPmT7ccMaEm7f6GewXgSnLottQCDSMPkFGtNDW6ACqYN7nc6gjBN9NQT7STPckvu9Rp8R7Fb2U8VP9bs4v",
  "key14": "rdhqJamYJtW5b4qHQYcDZNEdw6Ar7Ds1VWdyRntGWggP5w43DowVB6qDc84vk2BiFxMttAkcPqv2xvB8rCXrmUv",
  "key15": "29DT2EGfrknePSSda7K7biEKUAvPMYwM4sgTSMyLDBzKAe6mi3hFYdc4QQk5PTyvtCgY8oJqkkmVtw3KiesireRE",
  "key16": "N4Mz3VBSwYJ7zaW8ZbX22VSsZjVg995ssnLu2HgjfX1XMFZwcAS2XqKxQ2UH5q5Pau5WCmVxTEhyuky9qsvjbpb",
  "key17": "2PtaCCYe3MzDeXhaELNRugASW22Afw2SYVcG37Mj1EjGXVn6RoK8HoG3RZG3NoBmmHwMNbAZ9c54nw1T2FDyjCFn",
  "key18": "3N3ZRoHwpxkfUguiz8gPuUStQKMm78wCCGgDonzyoKBaMrLvEL5TVM8VD2KnSb9qUGoWfRZCBUSSvCZpk9Q2x5yD",
  "key19": "26wey7UnzPXjRBYmfEPKwyK5HfJhKUx3QvbcSeUSMVJrUxn6QrceoWU9aCNPTVZwFvMzT5zVztzQKpHjUAzxsmtm",
  "key20": "5GV5Ax4n8U7hBncacTPfWtDGGA1zL4oNS7CAFATzgKG6mib2S76iTmkVACWyTF16tYYhXzARKdSqCwym6YREM1mR",
  "key21": "4TGj8GYwnUWgCdMi77eEjDfEDYLiKRSL2NY2AYZjyMQTVExxio17ztZCjQHW9dEBXxvUUpjzG1fTk5iEL86HYkLS",
  "key22": "2Aeun4J1wz16weTmvSEWTBag7VZSBZA667Ai9Kk9cnz65gDjJbgfo2AUG8EdEdYiX459ADFaNeaTXMQZ52biWu87",
  "key23": "LccrEX6owcwdMEHBLp1nVn73krjZioTUrRTwootdVMWzUuuwXoXbnmiaT4MgVpgVm5bBhSaC4Hoxrr3pQTTXSoU",
  "key24": "3MxiBh5NXRqJ8KANmx7zEkfEfFTHEuBHF7f51GVYKwaKA4efBUP2ZMJuEzBtQb9Fs4bLjdwBygZfdNEKoin8ncPd",
  "key25": "5MmoWXBEJ3cXX8cXaEpcg4EKWyqSBhvyAwnmH8m7FDniWLrPAXBAJcTSQBauNX66vmKtkwSXPQFsMemJJSR5hoS"
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
