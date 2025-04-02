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
    "3bzGxyWw1yoADLKhhsUj4wmPcQBJAVNV2trKys9gjPxVWC4u1C8399zZMqdjQmtFAFkMri29KiDpWdvjHJEp8DUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35usQ8cDULEhjPNDEppvyTjxg89qHovEHYRGwPsBGSw6NYXTyFSbHn9Gamn9PjvDvADAY2TLmE5oM4EX6AwATZxs",
  "key1": "6ebqdNVxFSbYQTNPzDT3Wrb1Th7d6rqbWoT2soh4HvmRj3BBawrHpFUut7CHRTs8MMLKQ4REcz686rdbdr3QKkf",
  "key2": "67ktUUpG2aqZRLQNxESqyQvaNsNJRoxY9p23PN9PWCpKmoc54jsbcedHnuYsCWUSmbavUtvcP2UTp4CRPG9n33Ux",
  "key3": "iTG3i7JBnAXMVf7iSjmp3takXsbekuxLobrL983cM2fFdz6K8us8eZuQ1nUKX86oqJHZBUt9K6xF2kHCizB5pZd",
  "key4": "47KqLUCvSQkHcL6X9VnSqditQDKEscx7AS7mqVd5Cch9EaaKa4mhTzSyLR5JupG4ACSfzFQHWy5qif41XamEgqXd",
  "key5": "6q8QeZVJSvPJc5aKY6byiNtSKM4LdbCFsvTywAhFSX8ERBzW77k84H8YGA9TELMWQMY9Aau4YiLDcbdxH4Tsx5A",
  "key6": "5cCsKncD9j3Q4h8osEpKLe2cj6TcjB3GWQLeeu4aSFwFLcXTsLazaQMa46ire8wdvkBX3tM3ZD1aiVVYrVLKh7rV",
  "key7": "5uVMmrPWmC5oDqj3JMaSbL4H8qg6rbtJ6MP8oKEPatedQzPFmR9Tg1TaZtgbMdUipqeAt1SmtiTmRUfE1GjVizos",
  "key8": "2HKs8AKBz5vsorv6qgMcxi3rkgDjmH8TNDxaNoNvbRqxz2khTsGewujxBugAchMLADp27kpE4LBmh2wZ5Wx8yCsL",
  "key9": "4ML32NUrc3sq1KCjxUhfZ8QULvRLWWhETQ2XCtatJp5CWfXdtCah1jBmLCEwyrWWKbMaPzekqmGAXgut2S64RbHy",
  "key10": "3VEq7fGRDCAgRPruuEX4VzpfcMSF8qYvqtuHNcSBrR2DarVPA5cQUh4wdCgxUnpkq2vMnK3je755EG8y5fww5ctq",
  "key11": "5CbMyD3xT1jwCvzzsgvgc22GbRH1YLGkqZa1tmFhfagwUa3RW73cn78ca9GrXmVAiEa8Q6qxUGJu9sPjwTgArQeJ",
  "key12": "2e5twmdzp8au7nE4UkoNeCZKntYE2qvvib3rvUNHxZbtZMBHc1hdY8qKRNXWXtBZF6L9MX26E7qJveA7oh19gMN7",
  "key13": "KXVBbQVnS1Fu1SKjgK5mDFoFmPTgE4HRuTyEigczjV5ipQukRQiGJC9KBGvdnUD1cnnFX3FHjp3Hxd7T1fb9otF",
  "key14": "2HUupxSK92vqnjzMWjQMJbb3cS5qCmjphmgjGZGkokhxtZHdNemCAqTig2LfVx7apc6eRpVe2G9dNq64znx6TWQb",
  "key15": "5LpeVbzrsTACHhoxM3Uu1RM9gDS8JHdFX8gfP7A7FnwAfUH2Sg91zWRPNRS6pGsxcfkVQnwJU4xQQUSsp4K8BPWr",
  "key16": "4xZMphR7Rxk1vUmqyGZDxGk9mSrWmrjmDQGJgX7ahUtdL1mgsxfnpH8NBeTfdjVsgBL5JjQVHvqY6SjdJnfeYiHD",
  "key17": "3j4rVbrgtqjoaHqp5iYfGu3aL1uzqZMSJH6gomeuEtkjZ5uB59t2SAXhbykxtLvK4MCj5cuqMNxtUJpxeScnaPeJ",
  "key18": "2Ge7ey2gicp4mSanRoiLEYusMvbAetsV4TtuvBKysfL9rE3KirWuWFzWSHRUe2jT7V2x5KyXZm4AiP1PJCp9cQim",
  "key19": "4AkgodEcJnhjNEZa9raEz3NaV3danhEgkE85wyDvutEbQZb14MWtnUw89yoxRfkrVCLbANnGwtGMC2Y12fgJnc9D",
  "key20": "3BnxhLZU5iheE9QiPivmzxLkeSqrzyN2kSTx7ZUSofAMb9xcRZ95z6XDUJPFCaWnLf51XSUCPoUDmXBi74ZGbZTB",
  "key21": "4YJxY92W4qamhbrjFhVyWNCVmNW4CxgdEyBC9VtYXTqQ1xnQbHb1UkEwDokZmtdMY1f4m6aXmAhf3vDeVxqz4DC3",
  "key22": "38T1FaefTy58hvXPzZDZs8GKwbExVPnwcAeA1xsTFnXSWowT5xB99HZgmpvZUNyG5yVc9f3aPzSv6bNu4BK5HhWR",
  "key23": "3w21wxruKg7vTWXgr3gQBYuDcoKv7DZjwcC75dDgCc6KDPaC6nQaFUHWK1BEJqah8d7ycv5dziSDxSfjHgyDXH2U",
  "key24": "C2WgNjPFDLQAEjTS5W1LK1pxqNSHLCDKoWwzgJKA5z5bRy9kC6pCqQttwqCy8ddNrkGfCtLsLEPodBCymRwkwBG",
  "key25": "3YbmBve5qQCJBAxAtBtWeYcnZ4kQQt9cBbCxyMZvBsUBnRxsjE4FCajfghEqwkLwu3REM9VgMGDkViWnk6yGLLN4",
  "key26": "2fVqo8fu9p1sCvJzy91WstLS8dqzfCpCa4U2UWBRvefSLqh9cScf2YsenCMu9Upp9Y7wtZ5hLQiZkj4FoXVfwvmC",
  "key27": "7Y6NSV5NU9sfocX7UHFK5QCr8XSZeLXEcLXtPbahYktLU3N7FcNypYn4Agrxpi5HkBwLQaQjPfCEzDKVKfM5tJ8",
  "key28": "6QagY4aKmU1v1MkZRfNk8ApBhdzaH5KaFdw5b4LwkQXD5Njn67ud8yNbqmmnHWswibUjETeAVVGR2DCmL9dWdbV",
  "key29": "42xcssUwhUTSuE3pmF9Rnsttja4qkMsWReZu6xxRWDu9NHGdMDff7KZhuZDL4rYxSi3AXaTv2CmgCJf22XU3TdRP",
  "key30": "3R7tQzw12MiTpHRPR8eFkemvPHiDwTVrTxG2V8QWT52bzgpKDxUDSkeyPFcFYwuwKhNMn4Eom7iF1R8s7rPAVk2e",
  "key31": "AfBYh6GYCDMffoijujxfqWJJ5iPkXJr5Q2pgJ3fggLAaiEAsP6vcoGocMUgS1x9AJmRNNiBpY3ch7wcUELG2j7T",
  "key32": "5zcRnStZJnQB3us4rknKjt5MBdrMAfanNvkyE6RnS2HQYF9n8TmFA6taBn2JDLUUfX54zTfGtwFHxzTFPE7Kjbfk",
  "key33": "2acVy2XkFTwSnC1pUqint83NL6u929p2GdNNxTrsNHHyLM6AYW4hJDABtzDhHqAGjGvzntEpaaxDJm5jqtsoN9Ys",
  "key34": "4fTqL3ajwu2R6LBzJnPH6Ezw2HWgCcbJaCtKVuS5ERpvy11yC16s1LSgABQs7QN8D5SYZJuueypMyfoKTZAxwXwy",
  "key35": "4LVtauqnP9uVDHwJekjkMxifeVgpxshmAM579KJJ4ShoTKdJUNBEHNjdD6aP3tbFxcpfoLSfdcfNzKqzsqX93d4p",
  "key36": "47mWsGwiXe2psvCiruaCq696oTmMUjcEUBN62PJtMKmRUvfaegoWjZ421GhwsSyt6KFked9gTVTvsBvbB15tZ2e"
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
