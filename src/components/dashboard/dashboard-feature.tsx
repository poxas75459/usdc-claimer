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
    "2C2UpCKG3dtijni5SE4smw4cG3jw5zoaYkmJo9jo1LxzYwuLsTxrmMkbx15NZEvz3VDka36Q7ZEUU64KQMnQ9QwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27rkCAqbjsQk9S5Xf4HzbLPoEy2akLKBG3za9ywQsMAfiJ9AhHz2sQE9WewZBLMYCY4GUGUnzPUYa5HtoeeGgkwu",
  "key1": "2k4EmEHH5VygTReU7LGXmTCkjxP3gkF5pz2nZ4phzPnm4HaSeFwVDWbXQBweVzHv58KaPVL4424ic2BbSwz5Ch6S",
  "key2": "TrAhr1J76LQFfYqnbFML2BdzkRiGRarMvtLvMxKvEKjwGbnqk9fnCywzXkVdPH7C2oCarNdscq7A3Pbm3xCd6Ta",
  "key3": "V73DHH7YzU4T1UGCXufVeZTtMhFMrRtAC4fKoWHUaGXGenK929L6qpBJRrjxLGZEo53HrZUCaif2GuZbRMNcoFD",
  "key4": "2UTtyhNx6oFcZr8hzHT7VHxyWq4WC2MRT13xVt5U9Fc9a8mdwoUGadTL79GkZrF8rY3kMp6wkaJAnq49u3a6HmdA",
  "key5": "3Uw4aWehGKV6wCcrkaNMLFhB2LfPCG89DKQRdzgApZkTVNKCGQbtojG1sBQZoUqfLyvqpBba3TEEL2dGCWiVPMbw",
  "key6": "3UBPcx3VkJjoenov7H5ZrssMb6EvuYd6Ww4Licr6u7Zn8r1J3bDvZpk1n7nBdKa8cMReazRkFAGp5eo4y4x3QgYe",
  "key7": "LVaMGgBSZY4ALsEde4ponNHA3h47EuJgn23BdNtMQNoK1JQY4boMwWhUmtp4jzP5WboHuj4nAdZEGqMr5Ve4Yrm",
  "key8": "Q6b5kfaaQujhLs4toLGkk4QpSGMmFy3z7mTDuf6mbjNGjKLMowF5A6oLLTyPQnfbRRCceNk2MEpEBjzfcSJRyeq",
  "key9": "nGeZvkwFSRwf9WKuFM1Ap5dMFXWhD2K5rGYLBYoLEY4JUzX2aatNLEE4e4j2LEennwWoNpxxiK9obSADshWRk6U",
  "key10": "2MwvV9hKau2iQ6tzC45zWPLL6Y1jNkf52rnD2rJgabDchxR96RU6Yv88TmSKDLHVQMC98Cor8yuXbBJTzS4kdfYU",
  "key11": "5ihVUgpvYsfRLcYiPVgBxF9iVC6B3Qg76nSVee5YPCa4A6CYE7LhDW9sPq9UHfm7b2U9rvasUk8UpiUhsDFsk5GA",
  "key12": "3mNfXbAYyAs5mptREEL6virnz1QK8QjZNSNbvPq9nHvMMx3duPK7ZqRJsoRd6jPwpG9TAVwVmijCZ5UgMLc2BBKo",
  "key13": "6117vDDLrCKYN9sh1fxQshEpciJsZuM8V7QnGo9VFx3ixHZiXxK3DuxY5t5YHxcprhP9Jv8C2ucwYPHfz6Q8pWtk",
  "key14": "4SeVMQDQ54YCVnp42dFgkbQETgos3Cynam6u9HBpUYtfTHCd7PV6RniY7FJQx9tzHwubBh9zRUtcRexNU1NRckky",
  "key15": "4CNQFTJdnoAyt91T125SsYR1M6zJUpdD6xCJ4XSyEepEuGP7Zq3ts9A7esPnC9sg53uP5zX8ALpBwD9hwU8r49Ma",
  "key16": "5h4pPNaHwrnm2BrPy5vFe4h7gJ2hCVr4yDCwGo8z66hPttWMWCvdeXvxco22LRhgRZTKNYfMkATAKmdwxPUZkk3f",
  "key17": "3x7cZ9WLhv9aGzVoKi3QwWhLmqQSrr9aTxC2iw5FpdKg88TcupXftxKKpKfC42gwaAe81h7d2n1Mu3EXD9sGq1CQ",
  "key18": "AwquPh3W592RWq3mgBAQzNDMsRdip9C6aqmYnf7n2WeVgZp6sqGJS6sTm3SWyrvNKfWKMHFWt6G5QkEuCtmSDPK",
  "key19": "4ufGH25K5r2MLmMsN738JUeYCoPt5atmt2rRSmvXA34U4fwYAfr6TTEenoZHZ3JFicregzsKgUVfNGmxtHHY2mEy",
  "key20": "32PvZP9gznW53bZeJBE71AHkYPWqGN1hciYv5FNUeN8w2HVLGLrNZv6o6tJiKXW3qvBUm7AZkkDzMSzjfDdNnqLe",
  "key21": "4RbndxvYnUZ7Kv2aWEK1LEGaNsrWJfSUCPBGLQZ84iT6JpXQdVrYTHtDJHDcgmD9v1PQzYbHBdDHVuW3pkjLo2rg",
  "key22": "3J5v82JNEyAMCn1TZEbFUp3EBDvfPfyfJRWEhBnFYQ5jDXK29Pmau3KB5yXbFfu1p2UXgN4GsBaj11XSdCa1YPh1",
  "key23": "3DTmGFxGF96YjGRrKNvnymdoS1S6SpKQja1TMVqFYXP6xxFvxXfzFMQYkSsnXpbZuo2CuuJ7tcAWH7DPzxZmcP8D",
  "key24": "m5tzAii5Ugvfpv3K69yv45JVnuqRiydpGuimKrVwpZaFzRZLsYEGmftfmCxqsTEQ1W5Ky3gN3wMbEVzjQXBqfqK",
  "key25": "3ZySF5VunWpg1yaFktEbAskGQ5yG3dh57RZ9u1ez9rZV54o3ezhQM6mXptDW1XUWqmA8Hj3ctxNY2GgVYxjkA2cu",
  "key26": "4ogf5iSD8wU3JLBj4gU27RYyXpxEWS71g3N1MmzwLr62RcaBjWVNFLfz2T5GzCcfJvaGyE2Wxc6FhzF4XWAMdwP4",
  "key27": "21NGFbudQSjCCFb2rzz5zgCmjAc4WC7R9tHFJz5npsRCDc4hUsvbH3zSAi5k1xgfaDXEPt5NLyrKvAsMZ3VJwoSd",
  "key28": "HdLg8W4gwgWuAa8M14yFb8VSf56PevC3bAwAQ4FKYZBV9uYkmTtayzvaVDAS45mtPDBhCRnwKVhVCbhKgEuLcJP",
  "key29": "3SbpJ5dyXqmoApdxVcvN5jJBfZdQ3rmMU8cbwK2WURk25Dxb9fRXSEF7w8ECGsd3cW3h4KktiQrkdzpMCaRC2wmf",
  "key30": "5KcXhJZBNR7WX96CwCGMMK7GpLbDrzdgKkHGCi9ZBUaDcy2RyVGbPNLpUEYNfXkcy3x8iwMmNuSpzsLpp5p6QcdW",
  "key31": "44GC5oA2C8GB7JwAn3KMdepNViRkHUteZGf2QkSUw1gtaH1HvKYhkJYt8H846toKaqkceUfy5533ri8pCqZSmqkP",
  "key32": "2jampuZ5zu5yR9QF7rzi6xaUQxpcw2ZYjFRwgQkUZTLqP4hXLh2Vy38a7c3BdwJrUGSSpJso3BCqx6GHEtfjKLCv",
  "key33": "2NxmbjK8Xtm4DdTn82vrHdvQHi1EKd8iUQMosBes7FJVkGojTjAZ74RHbCSXqAxpZJ2szsJx7UnNieySb97US5SL",
  "key34": "44n85tcUMgQVL4qTMDHxCke6yX1ncLz14Gz1v8FK5HGHW2uauqojZeKLpv4Sac9UFbwv4KvMyPWdF8WYULfcx4BS",
  "key35": "5Z1zFUj5BPyNvVT838Qg7TJxPDokrn8XZHJthVPyaYNzed4AA2BH6SEzHNdTGP7DfCpshhFczyaMimz67KYA93Xx",
  "key36": "HpdBDgYQMaovDd7A8qh6AFYsVcuZPWfL5B8kKJiobw8si8hf5xHuBE8kt6dZVhtWfS6T76VZm43o9tY92w5rbbk",
  "key37": "1vXHsPhGaqJkxouQgeWTYDqdS8aYhN8uVrzbQACFUAnFYSEGZ8wR5SogjYhAXrhEUAHMBuA9qajaajXSDMdxFem",
  "key38": "5guinyprE3raaoNp3qPDPhEVF3XGN4FF8Stp6PrU7XJX8pPqegHPXMzFMBE2nYUnGnzXzkUmpnnV6jhhnuxS5KUP",
  "key39": "5BDGjZGRdc2XcDccj3mpEp7HZSPgmbFMyuKW9XE59StudcW8iUNRZKKKXTbBjJSccGDfBvxP9eMsverVfMrAt8h9",
  "key40": "3aKEkvR2bLEZkX7ZY8UQ4ggtJARgd5aLn4NCxjRixZjj2ewABjQeBAXmDxcFNf9TQuxWzk67wrzoYb5CM6YfYJkX",
  "key41": "2Qo2NcDPpJX8TZFfBoP8t5ReBrGRoQjcedweBny7CKmy7yNrytRoYzWaQcSDUeg58ubmDuyTC7cCkreD79rPwzKP",
  "key42": "4euh7CLUUrhmqnMj9jXQKfP9qbE83T4WRKAhrEoCWugMo14V839M2fzM5uW4U4QNJKjUqstpmSgokeMeWDRHPKz9",
  "key43": "fYbnwWFynrDXBmUoSYhPkX69TQz6dBHgbh2uC4rgSrKKnqq5R9cszEqyqrrxJdSgxaxWB9wyKec7pCZZCpjEogy",
  "key44": "35PM6BqD1mZ5KcE8ZeEppXs9ww1HyMJnfgz9ah4E9ALMJD2RsDimYs5hpiJVkMUZN2ncZpdqojxDU22CDuHt246T",
  "key45": "3z3nTkBPHyYdVP3utNd41W8WA3ZrbQxxgNUcArizi6feVSsecwtQW253aNKxQ54ngxiV3dvNLu9yhPHBW7ug6PwX"
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
