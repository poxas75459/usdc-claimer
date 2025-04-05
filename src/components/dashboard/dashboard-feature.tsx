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
    "2gkgbcwv33uBWXWVj6GvvZivtA1SefpiZJk3VkSAP8b9kYwoopRGZYEQKdWwG551dkHnSwGovKPq6XppdWaA98DV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YC4q9vxMkoXFQSanyuz4uPhxmNb2moM8ZaNT1KCdV74dXpSTc6HSQJpCh7aGw96JvopigeNaeMMyi7opx6usNEB",
  "key1": "43tAKSYSHPsmNQ1tcFr91jGGSaBZHW3kv3ibk5Cvo4KfuLa6yazU4fZ91TGF1equaSSn4sAmBrA5jA4U9xoXPfRF",
  "key2": "4uSiBFgrHs8hyNAR9ZJERBgMNADS5tn5WUWXEWeohL6gs5qcLg8fWE8dqn2BAijmfhzWcKJt3VgJvFBCa1U5ypkr",
  "key3": "5xi8C5zgcQCMA5ArFsVk5PBWviHMjuoNLQvGcSkuB23XaXk1oMm5SK2eigMR6SqpzUr9a8xZ4o38Rcy6Vek56CRQ",
  "key4": "4LL5wB9AJMLH6LviojuTBMcuQPctVpaPNSrSs79CzpC6q7NrMSnoEkk3FCphHveHY3ksFNp4WyCKUEoxctcKZT1Y",
  "key5": "24tAhfibsMAMxvMi2KgRFQqqnK1AECDdwEJGmUcwsm5Kqam9zdJPkP8coXYBuDR4RQYmwPFzedDMay512qpxXRed",
  "key6": "5HFp4ko3HpKt6bHDxbeR3uzhQrhcUSKiM7uCunAMrJUET6WCMSob76eoQNeTUZMY9BjXn3uWYmwvapZCRFt14WvB",
  "key7": "4h2pD31da29CiQsAgVxc9wnBMNCVxEyxEcQmkx4dy4LsUdJ74EbVxcg5Ei5XHUca51XMQ95oxqsYWMLfexBLHAXN",
  "key8": "arMbjsjHJv4TtS9J8KD7hheXqCFUXX7BNuJQaKnwPfjmSMBu3dRczAKeFk3ETTz2JKXiSyuXckYpMRgRmQbUXMv",
  "key9": "4DUBVtFGFCLEwyzgVV4joQ5xSbcyN6jnitnfRrNa4hcatjT82VeyGoc1dFJsvuzysdogg9LcM7uMwXsCu4Koq4sg",
  "key10": "52sGcY4FHyRMNrQPvzKEV6hGoqFoSXMpLbT1DCMKhfLc2bdNYAadQBeqisx9Pga88VN2FmdicD26KS2xEHBBtrUi",
  "key11": "4U6qNSd9wYLHdpMAvZd5CuPRTaRjBjBEMKbHdsPicCK7EU3HSQYeV2uoknKRBsiyD53DCcwLUu1u1yMW9jDVtKuv",
  "key12": "28P4FdZmjrJXZVX3Cw9vpcjhcEAaVFqBoMQNRJDjYkPJZ1N9NAdQSzSdC4uH3PbiFo5JBQeKV2kcQAS3uphNLS1M",
  "key13": "5LqLy8uA63qpGw3511BEp9bNY7oZ8eb1jbskdLypKkNbKicRPuR6s6hfgW8ACvHiv1cF1V6pndgjmnEvUi3PzUGp",
  "key14": "2XVX66MF4rb9xbZuLbiByPuXH5uoGMBqtTV7tKMDD3JhyAzPH822F13GkLUbAZPb31bmb8u1MLNPAdxWdNtsD4PD",
  "key15": "5Ceaja6wAMc6jWmp83h8A91tA67SAumkHQP5D73VmNFge19DgBBpD8ao2gSQt8BwTLNSS57zxnVZJReiXrR4yGqk",
  "key16": "9XfHeG4AGfTb55eRCM57Vbo5YGWi6paqoxvvsCJHuKE3fSPgJkszwtHn2yHMjdkEgB9SzfKNXjR235WdAJMya6W",
  "key17": "eYcR1EpsUypZBckTd9Jbc15aNj1GMHADNog5k96Q6tymtKGi4WPwyQqe5pf7JnLWxjt52CrJdyYTw9VPpNihx6v",
  "key18": "5NcsieEKzz4wyAvQcCv3HSLwNdJMLYkAbWZZLyRTBP9CBK7cVjvsyEE8uUC7pvLhPdVRRhw5nUPsH8JRf82tG9Vx",
  "key19": "zdviBGut94pEBGLxiYJakme5MhuuTX74EePufTyGiTUAi2ChKHF1rF5bBaMxUBXt5MBfAyjMufWJH2NRCTcGR54",
  "key20": "4oFBtubqbmZiFNB3xoJUBj1kASPsFhgST6kjfvvumZFskda85qhi2d6ZHCMrUtC3mUuFSAQdzoiznRVALmFhDeBA",
  "key21": "5nkmxFW3XAPLD7it52oDwVLLmKPwQjpwChGTvsUTVzgnMU4egbJs4StatEBTrJqrP8XEL9vYUfh1b5qo6A1VtxzK",
  "key22": "3cFy331ksyXrUbSLhxhC1fGaAwmmG9ByLxvop3zDFNFo2B2dU8b6MmAfeyJrrkFa35o5V14vncKMkVxrSJn9perX",
  "key23": "4yppn8nKvCxwtLCXNquJqatPMTT4X6KTXTRCAnWTuaFtY8npS5C33w8Y7gMNNBzfqBfZJMVdL6bxgPXkyMCDDLHC",
  "key24": "2GoCniPWhLq31Xq23WpbuzpiyaBaMXYP6DXypsoUbJEdbVhC4vt1THNCxd7RTBrK7ugVKRLBL8Ab14v6fmPB9AjH",
  "key25": "3yFBqDY5eAPnsGzss4wAg5pqUXuroWLG6anH8dtW21Jv5WGBuK4iH86W49bP9GS6pm73uaSVDwx8DdfvXCrj6NpL",
  "key26": "DQappuxeAgbSojBjNNBjTpV5T5Gqfi2HnLvTvYhPCsS1TrwFd92iZFgzAwTXoWm9QPd7QH6zPxvyZdPXn7DyiLs",
  "key27": "5kyHmAaTzS1VaywpbL8CGRAGyziWXgUqBM35wGoEpXwne4x1w7qQV2b4tPfkDhCk9CocddShkBvdZMcQuuTcfPdb",
  "key28": "3j8qxJhNjefZRGmmuaCWbubyCZQZuqLWHHkYiisPYP8KZPLen7NKuUruBvS8xjuVqECdPi1j4C15oBdRpJEphXEU",
  "key29": "3jAiCJrSc5JwtpVDMoeSTpxfer5bA5vagGFfyGeXrwkDVUrgnMtRdWw3J2aSA7iDZ7cNo4pGUB7fCAUpfWB49JBE",
  "key30": "4pPHYwT4S21WquCRUDeHuz5cdtBScNgghi4u3c8cFmJge9cQrVuW2rhehmMLGhefp4iLhTeifXdBrJ1LyZyjGnmP",
  "key31": "4VqMrtDcc1NLYtDjSmEPCAig4YAPSKQ32dHSMzH1YZwNQoe7zkRUCzaZoLWca6e5z3AxyMPucKn479CbiVgXpZkR",
  "key32": "2NdreAA4v2tirtqPcsQQHTMTsx5jeVvjrHQuF1DxgirUcrQjAttV5m8eaD4FKvhBoT4pmhKMG174F7xwYcZn4PA7",
  "key33": "4tVyuCF8dCZxWQZ4wwEBzQ8xPXBzpABD7nvCnHevYN5UvL7Xx7k9CzdMh8jX6UhpP3chzrrKcV6Jf3vU4kASqkAg",
  "key34": "3jfTKVxYtMTX1dutsmfLk3AZicmQoiK4gtuH5Lt9M2MWD2j8QsBXw8YG4ZdKxsGVa4zxnzqhiEKJv7TDrryh2uLB",
  "key35": "3C5RHQPP7YEhAhDodHPBf3CU8oPmi92BGSLVNv7sw1mTukwuPptRzP7ybnGc1uhBmNL1VVhZzZDmrxfrm8rrRhHQ"
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
