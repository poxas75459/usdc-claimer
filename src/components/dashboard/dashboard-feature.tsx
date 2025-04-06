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
    "2w7iDLmDBz3TNqrSWvNeJAGHqUn8rPMAz1TQtrx6fk6um25TuuEXEhXwZgvgGCq6dthTv5kEcJj4UQ3jbwxjL8Xj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uF4QjxbK5GZxbAo7qsCaEHHytXmFkuVzNui69THBNYdw25qRnbfjfGVqtJsVbSNAaBSMF79UFqPBPn9y8G8Fb8q",
  "key1": "5W3GT8CymZqiNzx6Rm3DMgQ4EZNvRUuZAc4KN8xDCB3SUKD1feeEUHzSUt3QrmMA5gk5P6Y4ihHKu42Y5gPjPh56",
  "key2": "Exsy9MQ7vEtZF7PNyCDned1oLsT1ZPxiHjAe3k3ETJdTpbkQMmJ3qXH9VUQDiwfxQtuzhrSLtagBypj4Y9Weqo6",
  "key3": "3kYGwb9zbnFmEKvvhx62Vm2xGBabZMPxFBdFJ2BT8U6Tv2CEiMCaSATz7rTHiiRVw6RoVrMPtMi6SUaLJYwJg2Gc",
  "key4": "3D2i56tLE9aFMHyeVhx8EUszbC7EXZCoxo91TbgYCmHA1JLhrKtvB9CUw8mGcrk9N2mMGWzUTb1Ww6BK17cZX1zM",
  "key5": "37M3TDxwCwTYYEt3LUmj2rWqS15SR8XQZ6DTTwrWaxGJ11ytuJhqZdVMZgyTVbkqN4qcufaeQkUcFJ2ovdokuytN",
  "key6": "4AXEw6LaFzXcVzNMcX9gBgbSt7azWh82CapKqVZhoRuQC2Nyfv6oP6oF3gAUHLTGqxCyqZEFasLh9bYRcaKPwMTK",
  "key7": "53n7itbz6cbHtkAFFWy3Maw5GmwSgp9XBU9fQgAjbYKqt8Fxfbhd2i6LpbUqGhsvMGezUaYD3pUwR8QyzuhtNS4r",
  "key8": "4D55fiUd8EQqJV7nRotwVXeEtw2qEPXMZfmWFcZ18RVBvSm2mTbQgwEnkZuuP5e5ViYs6gFJCxNd3WwijARNAccQ",
  "key9": "67Bar58qkivdGtjVpA2p6sggoEsZDGp6bMSj2QLwEdXm8qLWHvfdk9ndRYx1aBzxWE5rwAXfK24am3GPh1eMfL4H",
  "key10": "5NGbk67qKcKAs6ZHrDZ9HYDvfc9tFMs3Vg8GJJhLaiDX88MvQEdBtgVE83e9sq414ahGZCxabdkb9YrbPJe5gmp8",
  "key11": "2XjfzyvLhpiADVf5UYVqwpcNEUFHz7stwqCvt4Q5fnNeWonEV8EjYLg5Z4Zv2uruFE8sz418yo2zz7eDFQ8zpsR3",
  "key12": "3UeRawugULgxUqnVtAe7pZXbtiS635UAhnkv8NhyYLEfDBJwKB7nf8fZyhmfXVw48szpxbH6JNktjvfFDhiYoj5g",
  "key13": "5WYGmtn8H2g7izPnib5JEb6srm16NN8p5CU4fZTF565AsQ6XxuSysGY3CsHEyhjMRSLMcovmQLqThhRNpwTo5sRr",
  "key14": "5kVi7ABkAcaxrRrLmaTskN2WTW3CBGNuKfCpeBJxWtvX1mjQLM3pXNQeLfyzMBRJtvV1xhTaw8Gz3cFK6LpJGGhA",
  "key15": "4cj5L5FG9YMidLu8GEBv5j97auy2R95QDjm5wbRCwHRGz7DJgxkye47a69YsFMhX9R6imHkY8icZENyWChagFx3a",
  "key16": "bvdr1er5VAfCtEUCLBMkuWYFNzDPTnyqvCQgGEdGT7gryEVYKLxSDWyECX2KuFyzFt6fAonhzozsy8MGozZ7xbb",
  "key17": "5MqiMi79i21NGdCG5B66wSvUJjSDpKutK7CZP6H9Sx6aut8J6UpGKDTJSDYe3TvcrETkVNikvCdauX6Sqrt6U4iE",
  "key18": "4aVDDodPDKRpCbhNgKDH8eSRo5y3SxfMJrrFB9QzZhvfTFPZzh1NGgPhPZsTzjrx4xG2bAbjw1jscfCcT9Rm5Gge",
  "key19": "4tRBD8bQ6NNxo2bcNGkq4kD2xFHFqEpKNyWzvKBN1t5B3fvWT2fcmikpWJR2QdQZy6Vc4mMGwAoFaqKmbcsggwJM",
  "key20": "3FzombpBpQh4ruqKmqNZCTym5KbfNq3Qcc9ZLRrv5MtRNWmiRPrZxSceafkeyMqXzbZapb77p17Rfg7TpNnEvjpF",
  "key21": "3PHHw87ugJSMPWRRGCQP1WYLUB7GxUcjH2YvU21iAwnUe569HWCtRTHAmwJUm4DYPRoQFxeCXKKLWv4YtHe2oGnS",
  "key22": "4BjiZZXqb9rZyvwsE61MaE2zCEN967ZLJhJwFouye5s4pdVj9wMa4JJAaKHQrT29L3gjm6ZoCn2pVyuzNREw6SAE",
  "key23": "3g4ryQuzMkEBs2Nma8sSoeQBFznYPdMboQbmTDnf5mKRw4LKBPWtPNxgyJTN6XWE61Az6rLmu2XtFFMhNLuaYvtf",
  "key24": "4bpVsPJusQkV85gY2DLZPG3JZQBDV6k4KZdfLkMtvGJCLuE53pKzZo4KXUH37N2j372b4BbUXnrYaUsbWLcQc2v7",
  "key25": "25r3pb4tghcaACots41tZT9skH3TNZufBrEy4FCYdeekudkvCwPGbUgLqKPPupWSZAbncvMe8JvnjrBCANgHzeSL",
  "key26": "3P9mjKqXEetg3ra9JZRtSVEuDndi222vUJoGUDFHNcPnfchYSXjj9xwJLrNKmVaEzXYkkqG453rp958jTzvu8eQf",
  "key27": "HLd7JSbVZNyUy72VqGaNVS9o54mD83UwUyjP1QLVt1kr2TDPWC7nXP4xpnoxiXpJdmVYDsro7czG9J3gs5bWK8S",
  "key28": "XAvczdRZGXCHGhRL6ULHmMP4badKCibV26pTGDiBThXjnTB3wHsdNzNpPaqWZPApZHsV5oboonHaDBMSAr87P7Z",
  "key29": "5LRmVBirqFZN9fB4iP7rafJSo3MpqDjyX4RbDuM3dxQQgdzh9RiMfgX9N2peUK7WfQHF1VTMkqenLgnXzEV9opyd",
  "key30": "2kXeUfe1TXVvUoVT9ZxZyZbbMRzs2tpAZ7Gfa9zZZWUFzNQksVPXzbhqzmkJs3Dg7zbz43KQr7WasJnfoXZztNmU",
  "key31": "2e6uMqyRELaoiK7iEqU39pPQAphcDGUEGuwWKKD2KZmbYTVBiW6NrPECkv5vHEGmzQyHyRYs2AAMcPGDgy3HxZEz",
  "key32": "4kZ3DyrcEfQLDyurdyPXNj1Hsgrtyg9Z8f3mJdCWsDHSvVqexEjcFypGLUC4Te73hvUaxRCBo8VqUL6VvbswgNaP",
  "key33": "63fFnLrpt5xcMJEcEeTBY5PKWnngp9J3qudsPSYpoVuZN4TCzkGEbmed9nsWUCGig5MX5WcbYETuSqjPj5cvWv4P",
  "key34": "2WP7s7jjZN7eNFWZuGMNmVVyyhjQoBGTF89gdiYiEicrntJ1WZtoGMmpPfBikBCGpch2bhyW5T4UqTNe7hCcw7C9",
  "key35": "2kGpZzPyWJS5YPHPsMXKmmHZ1N7o6ZWocDgSRig1tCQ7gYfNbBKoASpsLPPoaEfRb8uBwuxLEApXwBtjbzNDuVyN",
  "key36": "2uXxvbAJSYFyZycPunCQ5FyHaUy2fTcAQw2ZRMpppzxcCVfjzusFFxbdUoinCPSdssTV2wAZzsKbQhbTGtbCYZTD",
  "key37": "QdYkmxuKcKQ9jkSGWP54h5a7niy2BYArSBc6ywVkh1tjPV6hzY3iuhSq1YrtptnUQd6bgT4uBwUhLfE2bWCKNuh",
  "key38": "64j4ZQX94aa8tg7Fqnnpa729UTdAdqkFitFLAJKYNggxSs9huDyJatZthnnEsfsrNyrhtTQS6EFa4A1BV7Cwd6fY",
  "key39": "4wTfz2PGGMTbx7ZcCNpRbMUFV67WcEa75KRhGNhqacWXZmMjetozJbtfeEKrvkUBkRjWiPDZmo8LDy9xfaX6wcJq",
  "key40": "YafoEjwze4xhbXscQr5bfz4ciuP2hojnGjDm75VbowX8dvNNq291TtaQnK4S19xrprjFs8QrK1BT7iMbkRghjcr"
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
