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
    "2PDGzatm95hsd1KPJZxZePtTuNp7ozuens7GteSjAys35w9QYzV6Gseym36oNgc1AWpS4fdZ6dQ9LvrrEJ9cTXzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hMfV6YXe3JQqzmhgW3z7AW2aL6HDtyG6EFm1zok4Fhr9CCwwXyMccf1C7jQ8S2K1gmiSfv2JbkE2xxkKnVRSQ6Q",
  "key1": "2VmquXQNmnFJP1bifA5uo8rvCbTTcXNEFjovm3GLno4qSedYn4vr33TzhUDa6iLbT3AchASNcpBnwZdzBr44ShGT",
  "key2": "2kmBC7EPKqKWEAwGrGQPEF9h2KYyCkzFfaByRZigFA5jqq853QuvTTnDwj3MDGw4juSwqYNNkRWfr5jcPCKU7F66",
  "key3": "41RYi3xMcFpUs18S3xCBmSgNRgMhbLzzL81zS1DdC58YZt4X4jdqAAmoZSMs7ZtQamX9Unrhs6578hXcghLsdow7",
  "key4": "3cg9j6G72ZT3Ee9Bsk3oZxnPisxgrcRYMDvxDyoCJBbqXQvo1Ljox8RGUXgzu2EVhVGoBGsMNt6pVtoDLe46mn4h",
  "key5": "2fL4BSmVF9ACLgzZo93tsvs6PHXKagRkzu6gbcXp7nUWed4RnqE1648TgCsNBCsDiomP76qwYZ55pe7nhi3VsTM3",
  "key6": "348Zdxnk2ZQYmPwsZZmeAQrkwFioaL3neMgXWcKD1NoQLwYAYm69GTvXh3weRWKrFBQKcMAXCjsFryzVB6Jzo2QA",
  "key7": "2U38HDnGNexUbjR4cJ1t1qsyiyRcrsbhCVGsAtmmpYvnBer5deswq2YkV8k2vPWfQMSumGsGmoyKEJrmZRYjWjyz",
  "key8": "5H7iWJ8VSmifYW5ySDhVywpC9Gec98cC7Hn2VzttXiXGHyiVDtsTbPYdLjUszjHh9cEmob4vAMNoUHwR5FkKr8FV",
  "key9": "YbtXMfcQVve39gLEE5GVaPSDCpNLnyu6AaPSSyBch54J1CQMYXEZKXCBJfz7x1RE9WqCuU4BhunPosLqH4eNwGw",
  "key10": "5XWbdW6cSeHWzF6yBrHfe2Vr7N41YVcgo2LWqgFJxGZVHMRHBNcn7rvuPPo7FCPqDfeCPpSHUApMu43siQHrudaH",
  "key11": "2kmuPoEnXpGsLcBhH6DHNJmi8sp2ACfukCwdt57CsTjydwzmS3526gXo8NcvyNvwjzgAbpY8ee4nEe9DN6xZV1iK",
  "key12": "387hYaVrH6EebCukUS4bMsBQGKQkg1aJ2xgFR4DUy3R7eVcNQwVqdLRHTUu55joZ6eDk2feJQHgG2FMiekyEvTbo",
  "key13": "rUsCPbKneFG6eZHBWj8SFMZmxdM1AES4EqWVmkuJ4aZNqqdYpU41FCZMRRJTYJYTaVSxmtxduY349wC96jD13zX",
  "key14": "2NtwTT2rPb3KEEexb6pvxkECYDJnUjBsE2hHTDRypJDqxjXSeWsJkirM8rXbuNKVFktJWRpSzeeLAWxy1YLwMg3X",
  "key15": "5aQSc5JUyg2fgAFi42PxzMBudGsMyYz2J8LXr8x8qMCL9Y2weFk7tbZxmP5bu9Q8eFSAS6ceaeuHK9nefqB8EEsN",
  "key16": "5JVpTqgydGdMxPMThREFgJ5YT8RtMy2UkwftoYWdRF7kp8EYUUTUeswkkdM39v98cBJLHsDw26d8QfQEKBpnEvtT",
  "key17": "3qX1szv4UmnFwrufLxJEERGaqi3NaKmSM5W2RGjQyeriho3f4wpAx5Xj8AnC6jRtmZieaz6xrSDPBgoxqivrGYgt",
  "key18": "HNmWnbbX1dJAeGpkacYjJLdsHiWrq3zfGE87HHoLEsoorHbiX9nsTUXjHZT8V7d6rQrNG7sCD2Qs1CQomLhvTPB",
  "key19": "4gTcrcfZpzZP9Pkky1pgSViULFVBNPbFSmPLuuEi6HUSR9pMeKDDu6frDUpQCaZ1HkSsvW22rQUmCXRhsUXCzNpw",
  "key20": "4dWDZF3vavg4AporyzhSzWBtVXUFeJiQbxSZMMGNdd87qXcNnBCyAMaMXR7djhcw3ateQv9QDuJUjTjAJUe9pYgH",
  "key21": "4qtwkTGXgRB98pChMowCFmbe8Xo8y2axafwyKtRYQJuBfMpZVTwa6vEyb7G2tZk94GGwk6Z94STaQq6itJXGfZxn",
  "key22": "5afwcqLeSFB8e559Je2jPEKm57CmBfdTfmSg7J6uGNjJFSZZ4U4FRkhSG4Ta3KynRh92Qenm9Ej1YR2MqWtcyr5U",
  "key23": "2LKXBGM68xcc1MYwjK85h69eQpWT4TBdpyhCBaHZqMJyfYpFRiR1e2XomZzHMHF3ri7JaALjwYVrujdYwTobWxzE",
  "key24": "2xVs4SiLHThmreYabGxgKCDP45jgBKbSqNu5etXj7sXDsXjs27oLpUW9MJZvzpuZyVNEz6HVQvX8eywizZ8PJy9p",
  "key25": "27XnGXaDgwjaNKUyp1uVq2wtGLmtd2QjXCecrHb2rX2JENck6E6tFBMxvjfhMTTeDNe8sRkLHebzeWcXxBNq34et",
  "key26": "3YGfJcVF7NN7d29Edd3NocRtcNXZLtfqS8Nncaci75YRjir5Dgw6QmRrFLcAQMkMKsEGnEgUd3epQt4bBaHJ88xj",
  "key27": "EDFkToNENqGvCJw9iA9CcvUJvR5Xz64D1BsWFHvhKAnKJsFNFaFRigDhebSHk7GEVdtbGTxjg5wtgHhKGmNhjmx",
  "key28": "9dYQvivudEGN1EWbNywSFBgvjjinSJXNWbCZCBPsP9HEJhkefFDBizFQJTo7ZYsgMfdF6QBPmdDMhmDedVz2LZz",
  "key29": "4jSSjAXtkMYuDAA6oj5oAAyjRLL32ktqKbJasYFFZRd7rA3tp56KQ6o4kcgWomGxy9Gwe2MRPatdqRsCVpebbJwJ",
  "key30": "3QSbduZwghzM7hDKZseLJXGDQmmoBeBCbYUsD2ayuo5NkHRT9jd1mGxNJkNc9EmCvJ2qzvwWFEtJMYjzAprf3ZEn"
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
