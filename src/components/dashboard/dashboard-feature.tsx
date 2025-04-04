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
    "4n1P3dZWQ8HUUnDNECP8c5xSfxB8NGsvpMEunpKJMYKUeDLCHpXP6sokwVSGjs3MiouEEixPFZN9FUepWnXj8roj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MMoGgoMQyx6AuPjdgrhuQs7gJgYJtCnkANGNvXquL6KRDQhjeY5f8xf67YXu7mgudStAwrdQSh4SFbhRQbmkj9p",
  "key1": "vwLxsUSJpsT4mwZBb1ACWDG9WJkRQXDFy9n23aTf5pbUz7QCrZcPPkjvNtKET3dB3mrXWDfQmqfhVaAbxK7UjYw",
  "key2": "5ygrWh4TfUST5RtfgbBxSrCWoyW7zYXCDM95cx14hCEnbP4g3fg3zAgUaLEqzgCbnTBu9YNqQXos4tT3nWcKPbFB",
  "key3": "5QMLr55D6PJfHehVLJSdjvrLLAQs6aeRmNca8oVFrD5pH1AGJJUqeWS9hwU4ejBZrJQeYJ67B3UxSWV5h6ioVtvT",
  "key4": "5BSuMxVeSBeVJHDYMNTuakZducKkQq22qfad9nAHUJ1MDvVJ5pzXX14qew5BnjNvN1kecACXYJ96ggsejCsJwDLn",
  "key5": "3s451nz1ozhXNxHxVXLyfFc2mg18MEq3yGuFRJiVvtFgp9RkhwgYfmRoFr6pU7ehvAftpCHryJPBsF61Q271QoKU",
  "key6": "5nnNDrtxbfc19VqDee5dzJpc6QrTPycnhCnw3F9wakv1cht2ErBAyxdYhxWqTkufcy8A2McNJLVQ6D1HdyzuN1hP",
  "key7": "25zUdh7fRCtWPqktQeipVMs7BE32v9QYRUG7oBUnyq3Q6qTsD8JTpMLr4Z9Jvn1BQh9jwTsZQbeMnRpaJR34KTuK",
  "key8": "2u2JkzTQLdZpdbjEdfppqDU7sRu2n4etGxSviYoakcSQyfp6E4N3rzqyf69Wa5RM69wc5YP1kT2JwRw2vW9fQSgQ",
  "key9": "2VVtiDkiXPcuHFjWQx6icbw5S1yA81H54KPKvaW43dAsaYFkgTkqTuePaYWmKzzXVRLYLiD1S41Qzd38gJAs5Kmo",
  "key10": "5k3FHXbFxDZDB2NTWXty95biwEMfYPMcm7VPZqW4gGoQ4v4gYHzSYopUfaitKVtx5Se73RybWaDFMPLH1m7Szq6E",
  "key11": "4xidUXni5xrFBcwwD9Bu6fE3oZvHZvgDAYFVNPY4AXKHMEyEh1B5jK2UBfg9EjJhApnRYs15GYuFLzyjPzux9bWY",
  "key12": "3fZ5kaF6ySmwq7cPVCWTC2EtheF2PfoXQhbasp3ajwE9xHdGVLGTK2sPHgN1tr8TfPL23qcXWpMoJms6AGjb4hBD",
  "key13": "43YNKsPudjbqdXz6umn12Y4ByEaBmN3sV9DNqusb73W4DbGg7i1EVBwEFCLc8NrUCV9G1KBGS6Zv9DaRZnAGcsJ5",
  "key14": "7G6kfrUV59u4ZWL6Jga5CvHv8U1NotDe67CRxdmREezw5hpWaFnHQt2Mzs8Mv7HMkxovvf7P7f6ksCbmf5HidSu",
  "key15": "3rBopY1ibe5Zu6UajMXYSd8ZNvqBjKsRVKrRnWs9n3fQbyBbbHo6Cw115ZEEMPEuQE9JWeMBPpZquDf8hVXkPooQ",
  "key16": "5PMDZr1nq7kXAjGWBSLQWumvkDE9FSJpn62n1VREWCKvwpA56hVqENR7WjdGhvAQqVo2SBKTQijZkpQHwbJLWemz",
  "key17": "3zsqpqdScS4PKrCTncZFBUYt62bXMpFELffYEMXU6A7gr9KpayJkh9yRBpuk8qiQkurbgVxQQkGvkeA4Ye8789WW",
  "key18": "2nqPjhp9oe6Pdv46SAcWinzrJWGSczoWumnixxrjvGctzpmqYRMdYat3ko841XwMpEHu1tPaqoHduxpT7NzkubCp",
  "key19": "4y73pktYqyGs5ZrpyNDDhVP5SsK2yrgBBoLhgqqY7SnAuDn7LMjfT79uhN6DQH1qNwoNmK77YjCQW1gyHMCCSzjq",
  "key20": "4ZCZxHPrkxaPGRd2kPy1NXAcvfWugZQEHdik6pMqFX8tTXtNZiHjwM4nbBpcxZ83ig1bkQX9anhkWufzouXxtoFi",
  "key21": "4uw4NDj5caN14MQua8nFrbggaWSXTJEz1EPunChi4tYNz9qQ2iehjEER3e9yAMKdLRuFo3vakmZHcD1ipLoVCzZB",
  "key22": "4k1MxAoJJz5fhf1LLQFN7D524kuw5462uVhCBdwfkJA7XfSy67twsLXJr3j6ZxYJBVdCS9jyV8vMjswb251zLv8r",
  "key23": "2ks6KB9VyX69AahUigPSdXiHwJ3kAURmri9VsS9q7fPa5V6fBFDXY7egpKBhWRb3iaNMgtFRVo4ds9L1e3FF9n6F",
  "key24": "oSP2Xo773cEKajzsKzW7QxdXsK5izFcSCBVreg8dbbf6oHRKfaHPiLrFjsJEDvLcBhMjPTh6hL7BzAPifg7JeM7",
  "key25": "3YzxbL36m2xEhkdD2bBaxXk9VoBd5g7U3F9dcukFMmnMX6qwaFwsBo4mApuKyx9B8njCnXwWykQUziDLE7znLkLL",
  "key26": "59zTs45z7BvFK2ZkY5hf9oi1gmXmcPvTzuKihKpPGdVtfFCzJpc1LdYzpZyU3PWUEGCHdSQsGrVbZCrTByYyuWNQ",
  "key27": "5DGX3R5GFQ2ZMJSmqsaeWDaNV7jaBuT1MHj2x2LAJC98AwrrPEt22NRyx88K7SFUzoV3K1B33kSAtzvjcFxgNxKL",
  "key28": "uBQAMeyb7wjLgppn5vbphrjiUQtUDCUmEVLKsmdzcC2VWB631tjoYDjKFN4oSgWSJNm9kuUL1KseBQPTrYp9dk6"
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
