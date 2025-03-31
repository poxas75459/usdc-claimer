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
    "nj9bpKN2DCrSoF8H8u5jctnj3Banho89pW8AaEFNurGF2RQStDe8TXn9jeaD5eKEMqCNxWr8S86ms7CEKUZrbmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g2MVGnshhkxKnGBHAguCN6snNmNrJGkWXT4Ey7DESqDmnTq9F5326a7nMdE2g8AsqH7izgQorQC3pXSKTcxzHWW",
  "key1": "4mEX6mW5nHo5Z1Wqpa7riva2Pc3rHCJdQiJTKMfiKSh2xdfp55GvN8eAfcy12vNcpMiC6jzacQ1AJbB7PLWPoiAE",
  "key2": "2LUDWgTGrg8iQ96F7MSA5YjUzdhjSAsyYjVGKayyMZK7AKQCSgzBadEjjiNCtksXicPmqaGPFEUbdisggVgN7j8C",
  "key3": "4TUyERB4iZQQi5ECgga4bmFu7VfC3Uv5uCAaQ1sxHJvZmnU4eGg5Dr4tJfwL7qiggPovDeehMmqd1PSVehYgwgup",
  "key4": "2j5fZ7kYQMBj9kZVD65BbuK94RtP5jHLMWXzuFpN7qtfKeg1LCDWLDgzrHv7GYeRWxFe8gfDDU8TpJouZ2owvkpa",
  "key5": "3vRLTg2iN6UhdCtjnVCd9FaTSgmAKrR92aFTxKgCiYFzyzBUhb9QDihBX7Bj8nwE3294GAXBm3fzjKi5roH5Lwsj",
  "key6": "vBbFHaoeis6DpBXHGkKjJMVaHBXB5YH7LD2D8c3dnJdBHZH3Lu3Y1jpReZkTANzTXRwKmZUbhGpu5sKspUohgpc",
  "key7": "3Dv19vLoCd48t9uKLhrwaysS5Dinf9RL4x7JRkvkRxRGKduXJx2M5gUX2LppBgxsFUgM3WSXrTSjS1EmAYHZg7N7",
  "key8": "3MqjHhqZhKYZTM57SrpZaX7yzDgyrFrNsk4qYhJWknpB9ajUfGbjxHr4UvBWjmWeUNc9tq3nADYZiDECN9BiXL9D",
  "key9": "4SNghAzGNgMkKmZwvKjKT6gaQZx1jtvpehHAW8oHBjkJajBm9xsvju9aznstgF739pQkrk8dmKLXuQaJkTtEBAeZ",
  "key10": "NQFWPUkeNaSsDSG3whCTuJ7JN1VB6Xua5wVSKj8MqqvrsdUCFut3sdzanzLgNaBeFyabCi5smeKUW5BsD81GLEm",
  "key11": "3hgM3p9yjKFwhRo2LR7NcZfBMrkAi9uJDrMc9a77G9kqM4JMZ1mUFKohW3izxg2qnFZsMRydFnG6pKjua9JsEpdU",
  "key12": "F4uySRXG5qY71EV2k3mRdXX5HAY8aBdrJGfgg6Kndo3H5wyEiwTs5gDHR356db3Dp8HoRWY6BAubh2FqBJVCmxh",
  "key13": "ifSQFnaNDaimuHov2ZDCouFCynGaB1iFxxgWXPbbFMVjxEAhg2E18p5NkkY3Necc3NxvgDi8U7WsNNsw47VHZia",
  "key14": "3ioCSCReojqQWEsuRBH2ohY3Zdz1JZjmkq1QaRWo3LAe5ordxc9pA59gdsfkWRSbWvUh5ZnrzBJUXhn2fEiYigRN",
  "key15": "2EfxorJmwwQuDkRpytRFmw5z6zAhZJZYwnoZVR47nnZus6soL3Nop8uK9zikEzvHCAZ85sxsFokZZmT91xE2AfxM",
  "key16": "XjyHiqFRDycrQC9YxNcaGCfxvuZD4hjXz7qtCaVkD15o1LASWmV5AnqLdmFM67L9kZGSReZgdQAY4vjVBvz5S8p",
  "key17": "31wqvGyVcS99221rQqQytYVfQjSJwyBZPG2vMA3KrZdcHpXd6WXbxKzuuMasHgUEA3zoYSFrLfhxVAQqi7oqps46",
  "key18": "iJWmk8mnFGJPaNVf4NdpFnP6FjBbk9BiQwPBL6AmX9vSn3Wgf9u4zeuY8oUNYuf44k65Ab1JVGrKUxriixpSGVv",
  "key19": "4Tm1ygxxzqcnmwgzb4Bm96sZZzUw4YfSVn4J2J5W9bQTHQb6z7fniyaEdotCyY3uav6DtZA7nw1cjdqAN5hZP5Vc",
  "key20": "3gvCV5xmionCCLprbaRRB8Ls7xC659gFuyti44pGQdELYNYt1euJ3Js25pS339aLbkA29CbdTBHsbpn9VMj1Wick",
  "key21": "4B3xBqjDYjqpdqAefcaSq61xgizwsFpvjX32mHFMPfy6qWcTKfkZs9R6GLAtxUfCCQ6uJRS6zn33d66PUcKdbpBc",
  "key22": "CTcPSZfDNQeWcSfJoGSnsjyHwzEuZd1aoFnNo7VH4hEEp9H9rhdN8N2JNKwH71sWNQMx9dLqwNc8R8nDL22etqV",
  "key23": "3itbkwLrm61PpDcYTqC2us1C3sKZxMHbidUEsfq8iCbHTBqm2SX9w3RM7twde783oh2PWV578Sc3XHRoT1EYCdXf",
  "key24": "51etuZ66U5P8nzM8jiVzd3cPttiQSVwLYDHozeJuuzFvrL4RRZxXeA6bpJ88dTATxNFk4M4zSVm4JWjbKCP5Jky6",
  "key25": "3Tvp92awXFg1hnVVQY9aSCyyTA93EpUkeTX4zj41GjjuSi6zpz5P1nzzA6k2nWbdX7MYduHJusG8H4Ru7JhAAJ6J",
  "key26": "3Fp6rE8icwVPW5e3dezD7UYxon5WQvCoGTFYkEC6FRFd84ZZm17j441ZjaFFuz4KSBFCBtoymnzH676qWtkDC8Uy",
  "key27": "5MWKGXQP3vBPQuRj8jj59e9FwLB7Q4nqEbUEY7SmMkoEL9eFhsw9PSqGKwsPReCJkCCRAytE8Z9zKtgyVf8qVgLD",
  "key28": "26gqqRvdR9Dktw1yTdcL5HAoxjNuXrUfkgwUHyp5EieUoDS6u69Cw6LT76KjXbboxiVgRLPyKjAmpSgnfFjP61Xj",
  "key29": "4md7bWhLG91Cv9sSzEc66C6HncsKsauaS4Bn9UGcaRUZGqWL5nEEprkJ8NR6kVTsqQEU9MqKWiWYxki62HE6oRXL",
  "key30": "iFCjbGF4VoKwSMLFyNaBTV8tnwPria559Z9xA3RQE39u2Jj4QTnJ7o7rc62Ttp31K9fFk7ieguDfkLr5FKycXC5",
  "key31": "5KAP6DGPNCy6wB1WrNBthcndQYnK99FsktQ1jaSNSpj8TuT9MkwpvQbDy1Q4XGHCiXdz8Y2iqS3Qn7887t31KKAB",
  "key32": "36BFcWtMKg315Ekev6bMtPnEyPn5X8RsoN6VgReZLPAR8bdWQySo8LTwnLQ5nunD3ubuYw8fgkfmqNrPb7Dtunp6",
  "key33": "4Tt2Ucfxnk2SUa8d9ctnUbUvgdk59Nvsi4fTb6CvBn8YqRrMG4Lxabg5d7NJXsYGhmxY7FhiVC8M7hEQRbqpg17u",
  "key34": "2Xu2A7xq1NC5NMS9dafm69WCFMKGWtQpteeETng4MASC6TspgEoqVSSJPv37mfz5tdRwSZMDwG28CRAwUh4eFjcr",
  "key35": "4GaaNco5rh1LEufszMBRN8kMzqRbPZHiaffBQ1E81f2YG7iJnhbDc17daJRdUcUGRdbYDkd7GVfWTbRw8573gvJ1",
  "key36": "3RePUxnnzkkrX4BktRdNafrDthDW68hnuXagjdvf8QQMHR94yHxGPnHHxf6D2uWkJtZvUjV5X9oxddeCN6USuBd1",
  "key37": "2rJ12bgxpyBridGRDxrswfNnT6L1WZyiKAWAecfid6F6WafnM22uMT3LvZHGfSaBpKAPsV5cghZhRxXjjdoCphKM",
  "key38": "4tJ4rQC4fqke8y1XXY9GKXnuWiXL8BNRnBEY5kV4BbURDLnkcFK5yQN4hJ2oYzgHoo5M7EsJWibs5JKP4PjUDMo3",
  "key39": "52b5mDTqTCBvuLFJAUzJVxDh1JVnLCPCrScpJriR8vwrp4VDgT4bqRDMF2XEvt33mURDD95BkHgpQKqUaQYZaMvo",
  "key40": "2okiirAzQmSLZbfgHJemZkc6vTT3Nnx4f1K3JwGrYvFkXqC7hZTP1jsaCLuxDUBGkBgUrPT2iqKy8vYJFDMKXv6A",
  "key41": "2n7RFRU9C4xcnThyWtp7zfyFYhf5e2UxmhRrjtzoF6UWjjiXMDTHJ2Prd9T6Zg9Ce6WLgqgCF29X9rQdNr2PGiRb",
  "key42": "GKmUfY5RC1n1aqBijYRJABpEtqTZRgQxZzZe63Ed9JZeV6aeu1ZPSYofW5HXnM869RcAnJ59DG389TwjxLy4Xsz",
  "key43": "cutJsU2rXhuoSf3nHCjeWUmAw9uxeXSLxLTF4kttWZ1bxw8PS6vVXpRYGHGvxbjrVMMsFYmaQrsyEFaQYErLmxZ",
  "key44": "5cWiHMXn3DWKngKSRjyvWBK6M27jpoJqSCq4qosmXWZGkZgyLcrhuq6vpyNSpCnJhnbKES2aSyP7odPaWjKg5P9X",
  "key45": "349h4CmaV45sNVL1Dq3tUuo3VgxdZkofXBEPXTPTBvWevAn6E1xSR6V7Ugk7BkaVrsKvaoPdrPMPfsTcgmgaBgB1",
  "key46": "39egcTSJoKUjLnCMM9VgsMzPZxCXAxdP7ApGrXoGi8ZeFCZa19YmwpqQc46s2H8vxzRy5L8kbQmNydZB1Tv2vQkA",
  "key47": "43fmjxtxhoEDDm9oFozM9SFvKgqZQ6UKPpyVpybrUEHhBkqno8TPJjjSeR1ETbP3L1PAX8aY6fRLENxyADpcy4e5",
  "key48": "398cKzMrQEDMSSG5HFRWLFWBW4hDU1XjYnqrN6N8xcq876UczjqbLaEGnT6zvTGxhBWBX6BFtx93fvxSa6UCfkHz"
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
