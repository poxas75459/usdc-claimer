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
    "2teoFJgNGCviJJNZWRigcw4tXJafpwXSRwfjLpcjNfFEg8KLHCXwJpGHmYHVyWHzyLA8cWsXd6ieMvCNQ3Wmu8id"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39H1gdEiBkh3g51ALb2aYcDcn1j8dr7wVTxW31TVWK5RLpiUzS2zJ2JvHDSqykXjPqRE5o2uwCyPR1az3936U4Xd",
  "key1": "2tKJJBnoPvVw81MAuSkcjdA5GfLoMi1XGLWCUghHGB4oixQcjdWhEz8JrM46T64MKEKnoE63sa4j8XoNMnsR5Kzw",
  "key2": "2Ya7F4x6XgZBJqkTHjr9XUxR5yvQ3Grqkj6NrkZ9Z9vBDRNQarnFc5i847Qbcw3hX3PeuaZfhSjXuRFq1xLGwhQY",
  "key3": "547r36tZibWsfKWsX7acQWxFZtS5FU5CuZjqHHt2RtydGcV8MJajhQDPsTCrAATXZmMj2Un3cnC9niCWhMppPMKd",
  "key4": "3Xecw4sq8yzKFTnXQ5daWjWiiuTEsPr4d1ZRGr8vTeq6KTrKoomuANGuLSxzQwdXpDkzyZJaiHGpmFN94Nhe3tSU",
  "key5": "33B8vvMJZwXm5ssZsZfQrpoEBgrKES89LBsmv273FMTthHLDAxt8QiTuc6PvvyWHpVrzuxvmUdfpy8byfFiQFs2f",
  "key6": "3NNryd8Qk9ciwnmznv4PLjP8tVG5BTvS6V9kkdiSwvun5TW39g5Nnu9UfqNpK3SigWqWtsH91vpaZFFD4TfpPBkH",
  "key7": "2vdxG7LPguTJ23witDzsYrb6ddoVnzicSPthhw2oFCLSAXVnnNAp5MQmnt67qdj2dNCvUt5iZhcuMpaixRYYMyP8",
  "key8": "4yZi13R54K3LtntXWngwDCZr2nAZSceG6BZas8pfuP5gU3sFVpgv7NJv6anw3RriG1GoXnRVdEqU5wK3dpRbQHvh",
  "key9": "4fCAtSLPR6XKiWJJLmaFamsZdi68763XgVd2WwRYZtQco5zgtwtQ4ZRGbh5ukQaVd2VpZERY8E7XDNrK1iLNiYWB",
  "key10": "3qEeH3Uei5E1nzHqLN1hoY2BLKfN98aymSMPzHQ2cwYLMbMbY265yqoYMXUcajTmrzi9n3wAbDEbWgk81CuotE3H",
  "key11": "3BRGGjD7cKSTHqc7dnCZJ8pwyRffYnAaLZr9szWGSrKkoH2VicLnQAoJ3CRP7aB29Tz6t6tBYw9wAymM8pk1FKR1",
  "key12": "4Xdivv1zWahCf1kbWLAci5A2QRgzv6eeVaXJ1iWqJg1jJWT5T2pKGEbN3fxsh6UFrALdyTEbiUQ8PAeyRoxvDSff",
  "key13": "3bia1aGUhyrkQtjiPArqxgrJ96YGtPBmwdBmcGH9DBqefEPNtVyH22Sdb4dDZVccNU7vAFtaK7Syj2fD6vcEcUi4",
  "key14": "2mYhHFCD6PfZNreDfrjgxTN1RudvVfwUCen1evV3Gk9iu2WNZBe92NR1mfqyZNkSdDkNFU9mwYGL7AdjpScPTyhY",
  "key15": "67ZHpo8R7HyDfDAGbSaMk1MSKfvHs2xd5yz1gUJzyB1SLJFBpWP74rHcUTKDdAkMuDqh5Qc6Jp1hrRkKGnFFHVTM",
  "key16": "3L7QvJaWEpmHcLN9ubryGzpnmWFxLZXvtffXgqAyb9nGSTyeCopXmo45o61jTtHQ2jZyUm859GsqH5AVVNaAhRFC",
  "key17": "3jb1iJRRazTyf3fivSLNCPrF3FQ7UTQms39PerV8KuMBjvtM6UWMYqXxer8fkV3UcvqJmHmYveBkzH8DUPiK8jCv",
  "key18": "23Lxq1pFhYtkCMPEGC21wDSjgRXdTpdSyhxG7E8MovsEZsMpFaWP8KLnPnALRoxbW2BCgmXAH1uWJxSMt45n2hxK",
  "key19": "26r95nXMcNcPpz7FryRVrLb1UsWCb8ezZpLG3Kf4MvUh3XrbcfL2FC2VLm2KcbJe8g7uwo1hZ5vgt2qP57Ge4C5A",
  "key20": "5DobBGoMHekEWyHmr22BWQ1Zjgo63uJMZDyryRkXAqRW479bUACKi9DKvdtdyu7Sv26N1mfpHB2NTjGGF5XBm7Ux",
  "key21": "5jLi9p7s5biCttvVQHdfDfE4TnydJB34kNPYSj9wFnHANJybwMv3kC61TxHwEA8foAnjiBX6iNiZYsxeTFwHCEhE",
  "key22": "fDGFLAEf8ZPfiUWBPPpUubDn435BBfsE3dJQybRMzXsoSUqrBqx3DPWSFa52bC39faRDnepGwLzWhWdPXnc1Fhm",
  "key23": "4k4djW4adVFz6jAHMK7WAbCRWncv62ZZ48xhWT5uVPSVHPFMHTFj61zBzjHphQazyYJERJQUC1j2FHymCn5gGhi5",
  "key24": "54EMSe4FV2Jq7bXauiWoG9FkqM8qp53HE4hmMsen1bf8H1tbuJ5HUc2uDYMvUod2PVkhw15yYwtCVAXjUNHDW8mG",
  "key25": "3cjmHEd2BEFUmnCreHT8atYWp34iqqVY9N7x8TErRokemasnDiWGCQiAhpLeCLAhp4UPPUbQceV5Bc5tpNnApSHN",
  "key26": "s4AzePQuc5M5oGwujMUbAXrB82VwSgs9hcSmFqZ8DqSkzbXWvYEW1uB7RhfRE9ZjWhYVpYoBYDvMTBEoK3Wh7Sr",
  "key27": "4YVwZE1Njdwx9htWYUwzmMoz634pbbQHFKHFKmLmdo6LjhQVPmqH5ntDrMPpgTmoXsoLYaVy8XfoMatd2TQrV1jL",
  "key28": "4SuznvwGUJ6mUwVSKc9fwEopHrFNZgGHL6ZxXL4KKFMYYYrqZjgu2vMFr4dEaX4Rh7SuSKSKPgEwy4NG1Cgz7t7o",
  "key29": "53YN5Lh4am5Hg2Qr37MbBpc89ori54tjUroCvDSdP5ootiEcTW5Ed7qonCXCYCEffLMMrmFgLuxnrhKAwd5H2vXB",
  "key30": "4VuszRWXtdc7omNVzxkU1uXNpLeig5mv2odcCi86gQCJEuyT1Evfo8Ucu5Br7x96quZfxqRLF4gAPLL7JKzuNh9o",
  "key31": "4XVw1EsH61JoFLQvrHto3PcvKqp8eEz9RgVDsvv6KJ31vKaj61N2PHqdvrqRUn8L79H2nyUQtm6HRQckCy8UWVXF",
  "key32": "3HHM2pwwYXXN8gh1bfJbpajtuo49A7UKrwMv4UGsY4w1Y3vRusRTqeEA1WtMjjkQq4DnBJPh5KLfCfzio9joEqmf",
  "key33": "3BcWxGGvQQyLS3mRMeEMGz8qu7th9YXfPRN8jZdgTnAm1nHtykLCnpkqQJZ41K2By1G71XNmGkJwcLxdtdwRQ694",
  "key34": "2s8ATKiJa6dMbbnS8eJvFhAMLYAH7DNpb7t8kiYdS2jm2xTJ1Ds2mT1f4zMsTAyEmpi9o25adSao3G2rT97EExB",
  "key35": "4WmmcNnmtyJBirqHeUK8K3zuNkM7kxyQTRxKEZyU3QbfcxjdP4oaBEAodXicirVtnZY5Bt4DYE2MwZbNH8vCZV6C",
  "key36": "sdGuawW1YRFsxrQ5NjuawNnE2tNx7YcoVK5SqhNhboTxG6A1VodVkmNG8tq8Sg2yX3BLx32dELaDc8jW9VXRiCs",
  "key37": "4yoYtTrQKnqBeiCSdnuf9exbXvxQzZwWK5kCUtey9DXTdf8Sipz64zTLTWXaQ7n1r6gfCS1HbRJemM9Rz5Y6u7Mv",
  "key38": "4i1gyhzgGoCisk47UYbDbJqFdjEFiYMyCg55jRNr9BLs5DJSk7eiHS7abH487DYR6pzZvqGemKjrgBDzyniTgYrN",
  "key39": "479e5VqJ5phuGpJqD8egYP1wj4tXM7xnp7giSVwB8uLgF15Jpfg3AMTvTCS72rNWpHkHcjvoWRELKR95tuewNi6g",
  "key40": "4BDzrE5BLe3Xhj3gA8pqkAYCMM6bkUeeXF4CVbxRpuSnWwyCPz1jKAG2ZfSzxSCZ3yMRiArMJS6RW2Tx3fJRPwMB",
  "key41": "E8MTNFFmpouiAGggDf8cm54QK9TeFgzQGn7LzVMu2V192jbLh1PXXC9UBJnY5XKU4WS1FjvNn7AjdyYRt3Dq9PB",
  "key42": "5gFN63gpmLT8rDmHGT2g95wVLsp7iCEjgixv6tnAKRrKuwPzXxvKLgNG4Sv5zVPZS5n7m95wzaEqtbEZX4c1jsxB",
  "key43": "87xrvjbRmJn3T2PZDKuTAT8pHNMp2yoYnKux7UQy27Kuc3spxTiHBPdSLoBT1bVF9NNpVthLXnQ73X3DPbS1mxH",
  "key44": "3GayvaaKPzTpgDEh4SMUPLn2bvBzCemGUwERZeQcEvf5VVY1zBvmCLTBZf8WkrujPSus5HDhXHHSm8UBWN4hC8uM",
  "key45": "2KcRD5ndhd9w8NuhdXz7VNhcWpUnZ4v7spBFxScc8Pu1oRyZcibqPJxzo8LwKSpyiD1QNJnKbSB75pVDYKxWBSj2",
  "key46": "3eSAQSc4giNZNvFZC6AtYEm18CS6rEjpXBn27yZjCQ5mdEyZhJ1KUm8g5uKyskF2znBSgaAcAZXVnVz5BMrVNtJV"
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
