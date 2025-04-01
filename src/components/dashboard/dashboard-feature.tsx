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
    "4FrpMHeCjqJGnF1S4mAGCjagqwQoYQcq66ZSpUyeTcWPx726Fq7xmZFQPtQFvnaY7oW5ksiFa2vd3zqU6EvXNUb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51h3FnJT8Dg2CmamD1qTG2X9NNvLpVorBSffKpzSH3iWtQdNSC732QUr6X74RhBe1qtq23FhyiCrVaf151Bg6DRX",
  "key1": "4nFhfbBzfTA9BLPhKsvTaevtTdaWHMFHSYZGnP9kkkjRYmZ6dBriJ79pWxA3PwPwUYYpft7LkuKChfNjoPhwJByJ",
  "key2": "5FnjTEFnEBNKfajAszzsSkQK4ejqojg75KG5rJiRz9948issBwnbPqDiDhE2QNZQqZbMw5y6VtQ2xayLxqNoeoxA",
  "key3": "2vXWiKU4rB86BjfgTm5JJv7L2B8465Bmgj4DiSL6yuEtHDpGQ2okHKBvuh2Jw6rxJdbMsqDGu9r9o9xFz9C8wGh2",
  "key4": "5nWaQvZkfey6bcj91oC7tP8Midmdrza56RDy3oaAQNQwd8upiDSgLEFfC7edz7iKFWQS4X97dE3DrCzqnySXUQex",
  "key5": "4QjuT2xQdpQTGh26fZVgvcjBGQhmHcMxui1fmaPu55Uezc6xoHTD9NZVXQTJYGcVQNJ3eDm15Pes544NPvxi2krw",
  "key6": "5uNNmcmqKNXyA1NGCG8vuoMyG5UcKnFbGMzyG2hvdWsdqr6QruaHeiEXz3XozG5zoN5sAf1ABgLvzYxYXXaWvts6",
  "key7": "4w6uQMBhtnjc2oP1Ft4oqVm92aRz6hgbGqfSiTxus9go9MLTuBSVZdctGWzU6pZS2ovSrLKeWCja5QF1prXL3XBF",
  "key8": "63GfG9HCjVUCKKiusNYGBY3bm1q5Vgkvsq5nnyuWgwApfgs9STdFFJob8Rx8VqpSkmwpNP7hTrEGCmbZ1yBsafUw",
  "key9": "3aKdt2qecbiroLdw1uASRk41ibDmeGD7zQK8uwKy5X7DPCzQyu5fjFcgFXKHkD7jtha74fypbnaPTXi3opRpp3RD",
  "key10": "36nK3zqmrzb5dcSiR1M52iDFWTiRyvuwt1EDpNcFyV52QuhpqFuuD1L8mLRGvfKoQwvKjdZn3mwMb4HoP9wpAuNy",
  "key11": "8seQtWr3dErVxkaR1fQUbVsH4sTE22NL6KvAtfw3q65KDKGJoAskty2i5Ksm3qLCtg8gTGQk6dvSWXWoDGQEGFv",
  "key12": "5MhzFQDsJCDauhBqrNocw8DHnHfce4C9iZpme71zun6L8EssZbf99RKNL33Q4gHE8LHpFJDBRWmtYQHnGbZZCphv",
  "key13": "4ZSUNFk4kyNktrD1z3ZpDUCQ6geeGhyUGwcZpL1Tt6Zz2naVbCzN7mZ3BjtWrLoiPP12PuYeuhV5DPWSEgHkQqW1",
  "key14": "4XSddx4EP2rQ7g1LUJYPZqWP3DQCjkermk8bn6sjmouzrWtPfFuV1m8xp6DgzHMPQ1PduERiCbsiN8uGLAR2oDFV",
  "key15": "2zuHLP33fMhCw9E1kbQfFSezjQ8ERDxeKnaQBw7evgpRDAAA9gWioZdcedncq1kQP3yekitHHsS7X7XZamMrpbGt",
  "key16": "vDoYMbBQinE21Q94JhecTVwhyhxAQ8nT8jT8HtkqiHgvdgU2BGP6dHZ1Qpat8o4NXus9PNmnfp2bmjpZh9GbNwz",
  "key17": "2hWSjPDYppzrihVoJNkgRLQxtKwfh2FJ15SPNSdnR39duC1euiK3SK2jvR6FrSmC5zpWP32FNFUaXpVYj1PyE7Dq",
  "key18": "3XG3nfFLxQL6L2UFFYeLKwxtcttHH9PKdpb1AQqc3xRzW1Wmqaeeuo5raiQW1F5yAn42tPM6gyehrpbeyS66mo42",
  "key19": "3tPWk9ANrq2JZ7wDaeyhQdwAErwTwQAjjisrqvwabfkjRqnJTHqzcQw3ovuDta5LSmZxKwGcDZDy3rwDfr4xrarv",
  "key20": "4UgEaw8i8X4mQaFa4gX7GVxazy15UZaY5wdTkr5Fe1fQDB2PKcG42LNXhsfW6qFHt4aoLU9ZGnkchDUM9htN32N4",
  "key21": "dpLMeVgHhM1DWSXd2xtVsuvTynRU2yUJX1aN2aHxZqXH6zSYnCtfG7booUnFfKsKbc9zibeSV4gUX5vxUFppt7i",
  "key22": "HccYs1g2FWDEiHV4u6UkZFxcG118gQnoFsZfHoyKJSY1FKVSGapoC3J7F5iUEGvavPuStPjFQF5mqaNa2wJeuE2",
  "key23": "5nqVHkfyBZv853PHhoWpzvFkT74XzN5zMd5FNf7TJXDa21MfD3jWfWzkTRxjEPFqST6RQ3BikG77CtjpEDbJrNPF",
  "key24": "2Lw9vGG24EDFDGw5Mir45cM4wNKnZ21n3SEzQtSQqXAP9KEQ4PZZ3s2ZNNoYZuiA9KXhdorUQeasN9vM9tamJCw",
  "key25": "3Ckg7DDKZrb3C1KMTb1XqqsQoeVPuhuS1wyDWHJmQwuD5iVHnPrnUyifzNipHywmjfWXsH227QcnWX85paofwYfN",
  "key26": "5kBQgN2mBaopWSpRi6VBjXpbKgDcfgSBwBfQeU5xWCCp7YHXzn4fke5ocoTq1gPtFWNfB55SJQVL1shJUp134yrZ",
  "key27": "3NsDQT3mXdhq7FABis7GLEeJ4yJdtGfRYAre8s52r3DjtP1Lmr2ZPqMJ2SmxAH1Nc3KSLKN67eTEihijePF85RFq",
  "key28": "sBtfJjburpUCQJG8SpwSmpHXKvdgs7LTnH277xD48voKmQibF6ZGgnfAXd56Nc3n3CJoEGaCXj3XFVa7pfAYmHe",
  "key29": "2MAri1R69XCoKBsFConP7rrMsUyX8XWKfdNWyWVEVFi7fJz5otTkdbfnirQLcpDBrLh6PQb5GLGrbvY5HzG3rtKM",
  "key30": "4pGyiC3qfsr9vFKhvg3SzH9pce7xqtAzyHb5cE5B87ie6tyq7GiM5xapmhrLENUqqzo3AkxnFsRDsqzgG868Cemd",
  "key31": "5nfiJUjrmCwemuKfNNDEKxNPkepUaGAfnXxa3XWdqXreSwYnCjCZLQQ2sbHeM6Dhsyx2BcjHLJvwwcKjTzatnnFL",
  "key32": "FGGJzXxbpdgKQc16AWavMRnvqjiMgs8vD63iMpPgGBr2Sro6UTFAGaRUC8kztUqZvYpZVhoxx2rdBtJjbzDwFRW",
  "key33": "4chMuqQBhCfWxeSBaQwhh14tvqea3CrjAMEF8Rm4VgAYYfYQTmL5gWNmLDHhfnv3y8JHXEjjBJW7WFVcPGZs8oa4",
  "key34": "36LiCzbxzuFBNxhhUsPNwVMfDz5tEySDK7Vn8SaBFAkGFxzKtSUpiWWQmPzKyVG2cVMk3ZpCB2SF7farVzFuqhN7",
  "key35": "46DkSuxmH5AxhMRVebjD37rZ89vuCLtAxguxnZxpk9VTu33m7en9sSVniJL73jJwmeeqiBuwqr1faBLswp8XMCtm"
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
