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
    "3tg982LxBPewXrpv58wJAnNw9o5UwDWmMP9qMNt7hxpj1us6CeWXwKtTdkXbqqiTKp2o9oUJBw2dBPeS7b83qUP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FjdGd72dBfEwFkT6LyzSDWmFHDC2oNjcZerzbd4gXX2rAFdjzEszDiCHtNwgunfeZb7a7WVhjS26SECmSRfueTS",
  "key1": "4SQftNUdEdqDMdRCbev7BdwE6ZZZ191g3BHRpjuYJXPQAyJsvLWjMccFp7cw2gZb1DLe7EgGYB2egbcBnQMEEBNd",
  "key2": "2FpTgrTzQieP9WnwbivzwDU3avDbu2hk6qjFrPVYP8qwEx78hUvS9fwZn3RFqKVQLkAvhz1m2i2MDLYT63hRN44w",
  "key3": "2evsAbadXQ45JDFHutA2WcQMKJScf8WyPbQKK1PK82ihJcM7DPeks3tehTFxgRFw7vhUC1XQToW31xucdfhktSkm",
  "key4": "5ravFZccwTQVnwyYG5yayTb83MivGbNgcsVcW96r1BsFr1MunoBbsBmETvr2PSEGA1WyeAXZpQ2b3pDmTqNuRkKV",
  "key5": "5pgZEeNLDGpfFf5nu9cTAXMp7VJw99e18SUJ4SdpoaeZ7sy3gLzhgaAQHBYq3fJHqwnmwP65ySSyYyAQ9rHuRcUD",
  "key6": "2FEM9BraspmSCyaGJCPicKc9NkKmXLN38JQg5rRU7yueZ8cBJX5b6c9VaniVksAjdkynN835eCgR8wc5yZzuMaYK",
  "key7": "4QWNK5Dcn5dyCQSeEa6mdfPtNHzNB9uHZDgH8gtTHTnQFis3zKi94ZX8FCPTFGUj8wE5ksYRPVVF7FU4XvnsGyfy",
  "key8": "3HdYzkaKnpYLtSAq76bwhKhoUsAqKyPpsvwSpTaFpv5hGbnD4NSkySUqjR5s7D7brZaQC8H3TU8p5Pbu61EYaocZ",
  "key9": "3m2tnAJsrRU1pg3CuPju4YHEpADiyBRL2TJ4xoYVydpjUWRw6e4obdmvtMZuAx9Q9yr3BXVygnQor68S47CNE7tA",
  "key10": "5ZcjAhkmoCEUP1D8CxjZysSnnrip9uhNCk2KwaX3zSYGHPLLEGVFoX5cd1pbE77XqmaSK1Tu58x5Abmcb9qdAprh",
  "key11": "4jLUbnedYU9pGGCNWMonAmP6BNAzMWWNyDX2ych2uQoKjEYRpXGhAqTtV6bR1k2WRbSwaPyg77Rx9rairAZJ9mZo",
  "key12": "4LdXHFMs7Ej9AkKcq8TeJT67DMhPpxFFZABpz8KnNKNYLm8mcpeyN6qdDcCxzESQ6URyhS8HCzMkm4uGY2VbRjA1",
  "key13": "5H3s5mcUXQD2Km7WCLQXU5737fvdMoMVJzXhtCQP5qsv4y9AA6xu7DcdFhuvgDakrBYjkY5pwKa28J4GaLioA4my",
  "key14": "3hnBCn3KekTKt6xPGBH5APXwaL7Ai8ochdb7nQpE9BMqDMvD5hRkwTRHQGCxXvRNEz2a9B94sFseGNfeP4ZzR3rS",
  "key15": "3HWPJQotKmRrT7K3wWVmEDY3ZpCxezn21WwvqRVBfC5NPZFSWHpgkYyTmX8J44Ttgwg9FNrTojJLk1QD8kpyMBjy",
  "key16": "4grQzTaT43M37GYEh5t7fUds4D4nAKjCv7r3ysU1MUeu32MFgHCGeprJ8i9yENG6jxbDANLuHZvg5m176j6NaTQh",
  "key17": "5pGYNjxBh9u3fBGRm49KBhhSdmfSMZ6ibGCduFNsnU5voAs6rzB8M3GQsQr6UN1SnSG1mbk6qaMb22t4UXm7wD2h",
  "key18": "2zeUvwmNEvGfNmt99o4LDivmxtUV6pGtCU2riHA3xfpgdBxer8yu1wD6Fvfv6tR7EXqKZFUbwRovWf8fviU9YYmK",
  "key19": "csfH5gfWsmQSGsK19W3YBMsA3YSiM8L1fwNAEuT99BdHRfvjjKM8JV5ovMcRewk8fUZaJmoJkCYny35NrJbvkrA",
  "key20": "3twtE5fa9KXYdKcMdVgf6R4ou7GvUg1aFs8GPQPgyexCZHnskuEKeZBXK2T1NUJ8ryqbMFs6oCsGJXpmPjkiHJmx",
  "key21": "2ejRgsQy9gvCywh828yLHKfT9jc1kq8Nx3gEndVDGBGPUSSmJgLvTrjPRw9YfDPpJLrPae3gscdHP5yZKF1LdLS1",
  "key22": "4sH4vWUnKSSv4namLmHdAqg9k65r7eu8fpxpYs7kzoQj21h1jQjL3gxiPUtSGidJSoHLKKGmpaC1WNgQCALXUxuk",
  "key23": "4vdVCQyhUDcyhknvBsHWJQxqQgc93RW9D3aBHc1fdzjpzjRdTDSzHcXvpvysDXBmogJBGWEMHmzG6wwMfkV2K23R",
  "key24": "3jfX5AjJVVmQ9kGCGQznzmvHuyWMb3htCawEhgMq8ycTw1wgQcfFmQh8P6czcTGwWNmWvm2JczotB8UCLhR5iVXC",
  "key25": "4FyfnY9gTkcZ3iuTSPmCrCSoh4TfbfaMsLkKkaBUFsDLHQj956yCpHYsLKsuT6ZgmDKyps16NKkw2oqmxM3zs7nR",
  "key26": "4UUVqWpgWnstQURCVEGywrbjjezabPsRk1p4pTRPhJiN3xSUXcu8K8MM3PW6d6aGGPFKFT6ojAd9ZV7DQAQ57555",
  "key27": "yQu7gPScqXK4WfLSJ7L2LSS4RMtv5RpQjBUkxK2Akeoe7zvN5ccWPWqcBsLqQKM1JNUwqzkEQHQGJSGvi7JtY28",
  "key28": "CmwVq2uZ7QHLtyeEwgBQceEJQSeRHH3awkwAdvRRBxihraLEw66Z4dGk5ZCx5HTHq7AinibgbAE453amnbYQZUb",
  "key29": "5iJ3UoSmcsq5r8dmawhFFcJnm6uRo3aRGzzycGLjLe3TS16hbNXgN5hPGLbjinWZT8dDZFJQ8rHdMkafZ3GMWJAK",
  "key30": "2UgDmKsTkq3z3qkYBCaEgd61uWGDt7VygiB9iCtrL4U3Grz1CzVbPWowxpSExKr8pHq5DGGPJoAAKpZJzWFYcWE7",
  "key31": "2N1UvgPVBSUUFeWW5tWbgDoFccJ5Z2EEzSs2snKZigFnXJZdWe14Xp19MaDkzjCLvTsDjy7k3mNju1puSGDFKa3t",
  "key32": "4qFrzAK7fAvknhBmyoV3NozTAvTobULqk7gHUeJsJiaLwhsT8Fkvvx8KjmA6gcpwqJCTeJT6DDu6GpGZb9oSrGJG",
  "key33": "2vuBbV2JgRdx5R7DVmALdsQ2mo5Wd3naWqD9ixaww7E4QozchgD3K9nM9qmk7FBG9R6PqaRBez9MLz3KXCqKfd3H",
  "key34": "2upJDnnbciHUNNLQhjoiRndqwZM5cvpL12kDrSxiH4atdt8GL64kpTYvAWPX55CiMPqaxG64A71BkQeAwRipvi9k",
  "key35": "L6J867hDjDaFMxdyZK8k5MqcvP3gKt3CaUvZvnUYHxdSHFf3R4k3Fa9Enpke92fNrGo63sszhFgoGwT55UY4Fdn",
  "key36": "5S5bC6UwUL52RS2zgu1Sf8kAPYLyvFkbQDZhUXQd7K1YYqHZdPBXZ41EAin2Konyu9DNcedDqUyqKr944vuPtjG8",
  "key37": "47MTv62RPBLP4awbgh63vdDV6H5ipR5K92Cwh4JwDvLPRJKV58vUCbe7mRzLVJ85xa59Bm63jeE8sJc6a6CEGPGH",
  "key38": "2o7uKxUXkk4jmxVc8fCDxXZjXcwb59Q2XZPV95fjoGTjD4hpNDUkT1LD2vpcfRAYDTQ5vqXar9r2eZpDahHwiovV",
  "key39": "2SZSjBo4eqKnATREtrsZZe5i6iL85ireimGbweFFEQk7nFmQe59kzHc5r7brGhzQcF1YtXT6S174Q7uePSVe5fWF"
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
