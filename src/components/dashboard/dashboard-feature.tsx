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
    "3bbREuHMb6o8N3vXbySmWyD2bVWAqaJkng2tGvqoScaUxTwiEtRknM7bnBAdJSq5EVYeD9EeVxuC5M6YiibSMed6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xQqoisDVJ68jnNKEApEM4GWt5wsCYYQURcphTiSAzxkzVZomow9fBsbbuVkaBKKv8Yfsg4YYyhN7ZzdSMqawXex",
  "key1": "4AwvQw8xLG8FmoxnmE1x8wnfLaoWnmRbWDfRsrqoPYDrhCwX7W4G7TMZeJwuPKbiFYm2JbWZ7uBkvDUv85Ygjrkb",
  "key2": "VTGWdwfgrKaQRscpQ4BmyoBrH95iJgBfUtVN74yiCEpsgbqLy9YbH2ZmAhXGndWyF56jyqxtuL255ZtZSEWj2rr",
  "key3": "ASU4WWi7c87oLFuRbZtDf75rVx3noHaSnVcvj3AipvV1M2BRVJHzyWWqd9P7F1m6M4krnfYnDgcazRhr5ciwKvZ",
  "key4": "4JHmG7RhbYahao9P6zMaea83FmcTa1CBPCukyiWgAPqxqZaQkdQpM954rF156ERVNZoPFU5ViS3JstNH6pG4G4er",
  "key5": "3UTm9me8yBphKmkfthS9S2XjzMYddeCSPoCTGvRFCx1jDVhc3mskKiDgD7KL4sguMW4sX6fNW6WFEZreTdDMXGd",
  "key6": "5bbJrFFqDsJSc8mDwvLxRFWFaswLCmLsinDFVfSFTDAdpktaKCHfwBrXAvdUi2wKa6hvSrWkbLBHr6KREeo26En9",
  "key7": "JZtwKHB5bf2fYawmxNBjRYSQsjrbDny7ZDbH9xiX2RGDC6eKgBinyepZiCyCAYBqZoGtJiHcbgJ8JmXVNiiThEN",
  "key8": "6RSeLkNfzARk22JcaH2CJ4DSAPYrmZen3iYfwL5Ewk4Va9pp5oNEbDbXuawqvw97KVyEtgaAcRYqkp8eQM861HX",
  "key9": "28awEpMyScgRbUrVYQeuxUS2ApFPKWwD8epKYKW9WrqNxHi356HRQqMbeSWCHcLnuDWiSzDuj2msdHKyt5vJpdNM",
  "key10": "4HVQwjhFeZjqBEEtXc3QHRYGrSHJaLhH3xceFsXDB2KSGQURA1W2DSXemg3fmHuujd6pAtd8t93ZdKmfAzCW1Ni1",
  "key11": "2mvHEUJkRHubjLYcx8w6J5MaJJ9pG6jVivxhkL57KRp81J8WtFu7UyHDJCJTMHcmAfi5S9vzxvkP2edTFGAXiF1",
  "key12": "4fDcPYaH9Xyvsv6hS1RLZBrp3WqS9qChqq34HGUXYSusrhZx7iw2LuUTe65oZUjWXbQerY3bFNt8ujNTUASoYvoQ",
  "key13": "5DhFkJUhR6LW4c8zTA1Cg7Yuqmj6Rwn5Li9mAxeAdhVv5X5qTCY6komuw9Jax2tCQk7ZaaQBcbGuoScPkN2qhyXD",
  "key14": "4pyscckA7oyNyscXzFu3iAJPGBoyCvivZb9nUqNo8NEaTfN6DSrXMoC727J1kxuFQe2yjfHqqi7PnB1zZTMN6hSp",
  "key15": "3YHq1eSBWCTneWy452Fnqe6TtFUGTzySNzkZHtSkjdKCHAf5mpxYDknv2j1sXaVZgDaP7MLR7bYHizhZnViS3ioU",
  "key16": "9jjPnQ7ggX8hkysi9ifTqTPQitTAK31FfHk8PmaNSu5AzTyw7uv71qnJykFmGxd8SReHTXZB9AKLi8fmF8uai2b",
  "key17": "4QovebiXkiRjSkaziYSbqmagPNF5pCvLwDmh31s28iHQotBB4UprYAy8YsrJkmHBGtVCB4HotRKiYXKk5CJSrfXz",
  "key18": "HUdLwj6EENwB5Mit5vpGKvpmDYHA8MeLSEQbCsHKqVfkq8MQdG7igLwRgwTtfTiXYfYS9s6nqu4nbiFw3dM2nK5",
  "key19": "4oVHp438mi4fi8eEcsRViVuEhKZ8khtYrRbAH3c3maCddKcU892PXLrznYQ8RhUzsU47tAGmtnxL5reng7CcPuTx",
  "key20": "4VoyzgEvSiyqxwFr81U96rMdZCASuv4u1yGT9TCCJ8q9r5fJ8JPWUhuxzneALwdc8m4Z3eFLn76Fk7tiJFEsCAmU",
  "key21": "3haSRmP7qLsHKB8m1PauqPVn3wTpH6KYuzgRip4MrCXUc5xqxfUPyGZ6VzBK8a1isTgrju8SBo8fn2XhEVFWCQgz",
  "key22": "4C8DzjMpqMZ4gEvbXeN579yWrac3mKiULHryZomd9un6KiqeomMPjBWihMnh3w3rM6SvEMy2T6HnCAa1n18Vhk6i",
  "key23": "4zXT9Fy1JKdYv33sUoXNKa7xBX2WzuHX47esT18cq9Uozv4afyigzqqDzoGefXF9Mw36z1eVYkB884EpEPVT3KLV",
  "key24": "5ehFnB3oxga7Tfgh3j7C75Fd6hBzDetZP5E2bVnNXcah2aNUP7qeVaQw4shdvo7YJrZ3KAUJsKJSigZuEJz5nvtr",
  "key25": "5ByHHPzWfHBG8Y4amDXgXRMosD4v5cU1rHXCFnkK3DuHPQ4cbj9am5iNwb2yZVADXXeyLQevZtNHXaVbmcRgwpvh",
  "key26": "3frVEPPCQ7SzBoGGLCMN5NZoveKYfAwL2UBrSy2X4kd4zbFtaBvFBdghPaJvZubLrgMBNM4Th4M5pnA9tcQ7h5Gz",
  "key27": "3SRDktRAQ2k8SYXqda8ygs89JGtAEgnUYwoy7K6isz3qGcFznMpmo1bDzHiAaFMCmC6UmnT5FdHHgzdbhJ4UQi5s",
  "key28": "5bAPLX1MxkF8GETzHg42wL9FTBM6pkXvLTe6JL71KKFRSUL7b6nFNT8JfT8Y2aLnk2YAjHkdiaBVaffeWHL9yi34",
  "key29": "5WXn9pfgh7r1CQoy4UXi1HUTY4uDV9FRwZ6EAisLw99nJCARJtkPZxXpE8nStgFMdmMq1fMJaqwSzVeceDnwmYXC",
  "key30": "45ZCXreJC6xEZxEyUpsVbcJz5PEeamVE2gEiNtDUdNrYrHtCjLE3h8ZQpjzp1SPQwQneTaeYwYSTcPE9hUMMuMBM",
  "key31": "2fk4AKFfaQEqLs4PKn3KgYASkE5eamgr6Pxxw1C6DVJDbSRdw8y85JNgz8XGPvUuCbqgGiRefhDLBGSmg6j5i4Qo",
  "key32": "5ZNCJWZLSkx1BD2NpTz96zXYVY83o5tnQURizj2kgUuueuhX8fmRrRVkjvAbEFAj1h2eMYF3iKGEZ5xY3vrpYvcw",
  "key33": "bg3YsDiZSk2syPbokWhW36vZqrYRGMrge678Q3EJTFyrYS6zYUo8iKbkekhfPDuj6HtUuv2xtAazE3us8sLnjCc",
  "key34": "4NHcAKjxW45SQ8GLXQifk5iqfTwnqYTZbWPFd5seng28siY1uP7EcS3xvSp6WB4iwTsfWmHj1Lt2akUWWVE1R7oc",
  "key35": "4Y3eoapE7343AWdbvFphzyFt7fmcmrUt7hNhaxVEgUKLSREfBD8gjWFSk49x7Tf918sBQwrQ4Q4ng2HX8jnV387t",
  "key36": "3J1aGnZPR5RiBpRSuZTrkaEHR99xGAs8dT82msEoMJu4bNsnsiTW1j8W4D5KYwHGzc9JvcZXs9xeewk4SPgaW1XK",
  "key37": "2w2pLea1MLZVTrnx3LZ6UQsUh8RkfooUqdDL6TPETxUuo8NsSJexa2hHxbMpcVzNcMuoBGD98bthYVQv8kPFNTBE",
  "key38": "28YXqVhekPQkFXQexGUQqRGcUKGTbmZAoXkVYw6RvX8CYB6ZSwRekpzkmBH3efFhrT5uyUCxjau73qhFhjj1owKu"
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
