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
    "468weEZ9JiG3igT3a5j4DekZuwUYZdTey5WueVBhGVYHrqS2tzHqWWyfPJ1TWnD6gRGYjB77RGXxSQAsk9GcqtdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BVFfEJrwbHynVkVxPkwvXNjmmRDmCSbA3SEpwG8AYKgBNKyJZ43GGsiyC5ZN9F9kgaDxbVQJpx9RRAjDzrsTj5M",
  "key1": "3nuLujKcJ3xt5RFRWtbsof1bRm5Ypy4smYX8eeANK15DY7DSbCo36ygakFbTWBzWUXazgVRVgziw4mDiNraSw4ap",
  "key2": "3Ee5FtgoGuJjiyroGaqB3naft6afarLiEpfvVWTiHWxpaz98HVr7QSLx9dpoq71E7nK1SHCrfcReWKVZ4vk3xmq",
  "key3": "3YBMnLnpuxdm7YPFcY3RweX8mEPff4Byyme2vzCGxCBtUePtbXgqujSJydWFeKjKPp993fzXRS5eeTkfVJLHUcMz",
  "key4": "2r6DCeGzmxLjee2ndToRN8acx9mCi7xY75Dvq9FTNuWmWmw29spJ8Hmci3rc59xBxYfzdiJdrV4zXXZkzw1NYgQf",
  "key5": "zP8ztp1oRx9iGxkFUEfmPUEq2WF5Qu64M7mnwK97gyQvVz6XFgD97jAZxf1viT4ij47Jp3QMYbkj4rbxDAVcHqB",
  "key6": "4wsmup7MRBaKYrZNY9JtthPAX2bUMKQjRh5eVVuqyb7NsDaA2syqpsyMpGopdgSdDk9V7hh61ni3r6bjuD2hdyKa",
  "key7": "MRNGMnGkVv2or8orNP4ir1C6TDTgGFxiVyYAEkuE34kRVBWet6yLmcLTk4JrsuAUmim3CSTS82vsY8HS8WftSpp",
  "key8": "5REQFZrMPvUh1QNzoBgRg926AFHW6jrJhsDTVQnpTYGtxDYjTGG5LnePbGNQCkt1bUt7r46s6UH1iSLzjkUoDPDz",
  "key9": "tS6iPpaV3jmF9AWbN2hAvGT2PRe6nD9SHoKmjubqsUjBe5nd7gERj3aN6UQfpduWDSHnjbbgfQJZvMyVHxxUXEC",
  "key10": "66d3kPfwrheMjP7mjWWDj4pq5NHpmDSvE42s6LmGsj9kdDeMiruXLLHYCYXuLDMtuS2K76GXYLB4gJuwuuzUhWp5",
  "key11": "4d2eavNunYJERgvePcrV1WNEzdgoBUtWFXAqnjzbBqA3CrBjb9i6t79jHTbFXzcJrB42iKfbcS4i8txdD5h3dh97",
  "key12": "N6JjYA15paWtY9EYR79D8ihza6Bemcg15cRPALYgr6c4SHXQamXbaiFYXrTzX325aWwHAkz1LvJnkGoEXPMC5ej",
  "key13": "2xYdfBuEfAhYYPig2nvE76NgHH8PFGvT2fAEfC9mAPpQ6ExYcoHwvZynckD42283TPAG5Lwbz9cN7Tnzkxm6cFjD",
  "key14": "2oyFtUaxzWDvjMKoCc6D9bSB6U3zMqQVtXBEE2x2ZPghWbP2h6FmhSatPDTaKaVKaor8pRmo7mwiGFZbJ8tggUFz",
  "key15": "5sGUw6vbceg7zSKCQpiUDrR4ybs2z67MrvAV83t9QjXi2tUcysdd8yULNBhpE8PhmPC6arWa3GRdkGq2FY4mbpkr",
  "key16": "ARgyX8ryFSAEovyHCSJbjC1JRRzDT9wt4AgqwYH8VYdQub4TuGbgVB3zAB8mmP9MmDFtGW4vAZCkadFTGvBC1HH",
  "key17": "5Y4vrHGgcUrRfVwNCwPVkHogWsD2cdbBumThHTVcBampeDoB2opuGvAJ7wLCx9CvVphoJThNAHVhtYkywJzuYT8s",
  "key18": "4oWpQwQFPgjRwVphX2Bb3tiv4Bh5UpQTkLuR7gXygXW2M8RFFX4FS4dKHWGj7bfkRmeWyMxCqF8nF2SupSeKaMtg",
  "key19": "sS2ju1SjERjhtk642ETAu4rQcWYhXTkxFEmGH5rGxTvwvXWUzUbuzEFcHEPUPd8L3frPjch3Wtc2xDwf1AVJKj3",
  "key20": "2iotwizxA2sJGvN5VgqFFBMKHk5TcGWQz28MjoG72CNKTQfmXd4wvoT5YidZZgATpaNwpUcp9nXPJDrXU8mFnkz3",
  "key21": "4qBAqcN1DYbyUgZhu49ezX1iN81cGJ1bKwoHSSabiSqdw8FQLpQ7F8oYQVHC3oL9JcoFeYjQ8HMQMmjepRuqKzhD",
  "key22": "27Qp75pq4GS12sdLM2r6GLRz4upofNmhk7qDzxVyRvvaxZQuauvvUAQYAw77ELBCsvH7qfyNBYb9tBYuN18NqhMN",
  "key23": "2C4v7DcnMXvUzmYz6oZaonqHJ4MTXL3CpYE1ADhFYkJaeUBqyFrzLBCF8khzAxMXo3riiKb9BPP7WLwC3iQNqbs7",
  "key24": "2r5ExjaUopt1T6ee46Us1r6qNboe5afWB5gqtTNHnQgYTXrqV7S1cJAidreJTancdMGfKzyo9psbW4uXvije5uXB",
  "key25": "4vL7mSTN6aFHg7rKhMfN8WFqDtawTLA6JgfGifFCEQfYHHYrEh3U42ayx5Rk6R6dygy81tGj97f4GMpyEuBXkbwo",
  "key26": "49H1nnzERtZ1zEEod3w9HV2TCaozej22ZYWE7GL7b9daWGMzjsVsnV1e4umztyAeuGwTZ43qLY3T9Be2rPrDNdh",
  "key27": "uW7umPhdF4cNkHmfLSM7f1LftiYGwXLy25Y9ipdRaa1csFThLzEEJheD5tkPpeCWcXzG273TLvj3TuFvp4roXWd",
  "key28": "45Zbhbz82K5PWstG9vv4ifvioTJwxqhEtiBDKLmtDeyU5G9K1jPtCHEWpyrgpTF9gunEUTSjdKvnxaZUd9X5h58A",
  "key29": "3cWadnBwkgQyXTJKCDhD4q9BXrf2Cv8kgBaVMoit6CtrHKkxbP8yVgobBWcaERXsDRUJwdxbnU5a5v6Es1tNYc31",
  "key30": "fQ1YykwujDezXH1ryLqWFLU7STXUxF7Qmm7r8nVMmm1ScSC3EmDEKK1GgYizSQDK3xyf35GregLjh9ggTfh52FA",
  "key31": "3A32JrRjFVvRaufcre1t5fUV87Uqy2ovGvVSCu4VWMKZ9WnFz1vhndnbV7mWbSfmn2FVhUL4FagMQ6ZcRfW7VhHP",
  "key32": "46FbAXFY1i6oxKfz7Go7tthxH7PbfbHnjMqczo6WhYtQrBFGSrztNzpSLyfZfn1jz9rEhHnhAEDxfTmvPCY9SZ12",
  "key33": "KnTT444fd7bbYjywhMFvZWwvXyPxqrfvWWT3h28MVd7FuezTeav37rciczMYyNBXwdx3SB5quUb5wB1ztKNbbNN",
  "key34": "6DY3vj4jyDYqiiM3n4rWzZeJYahNnSuXkmkUyeFxtdRwke4wRyiLi4FQA2dfPfL3k9PLWJMoxF9Fn5kXXszoN4p",
  "key35": "2EhU3tE2WmGn4e9G6FVU7bRNty4GyGSmqcVCd3y1BctCyc4RFZXSchVtxQAh2AXVfDrFutQiRTTVjWcBVGfm5qBX",
  "key36": "2UpsycYh8JXqgaewCvHvfRZRKRhHh1zaGjEP4ip8g8NWm85FePSQqYwPZWGBeZvKJJjXzEEmy4yTdX9wvHusZckc",
  "key37": "2Q4o7zKjC1wJAFiJdBoymnKQHaH1k9DpNvoE6DknymYnRtFHmE5c3vbwUFM7gihbBPRHaoGNYA49CVPi4oR33P8D",
  "key38": "38v4S4D8mAzJeYiVU3XeTCR2Tyh1gKVkwZP1Yrf62RY1cgN5KsJmQKG7Rrqa76hdWZyjsVCWSAUV71QuxZcf63BZ"
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
