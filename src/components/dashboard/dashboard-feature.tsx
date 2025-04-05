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
    "3BY2QU58ZnU6CcaZv9BLNtwTz79qXJhkatQcrLntsSMoJqnmxs1DKccsJAXsvGmBbUDkTZVb6962K71G1uncBVs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44zrruxcuGko2YXCoj9AgEmTzyHkiwXHwXVgv5pynGtghceRD1rRW2jbZEXyVfVCwXN6SriXScBZ3cUWWcuBhL2K",
  "key1": "4xeSKvoqB88rJRNB9r7F591ZYkVozth9VoXhA7vGs1WTQ3gnNJs1MaRWCZJUusDius7YMXsuvQu9mUuNj4HxGy66",
  "key2": "2oNyrU4cGoefG9fP3xMX7Cb8Bk2Ak1FJbjubbxSjrGdMFFHYFqtbqRdPG9R6T4KDQySfa9BQqcnRzcqTwBpGbjM",
  "key3": "4zadazAV1USGYkEeHFYqqKD3tE4AqquiJRAehfFZs6qs4WugEkHr6McKhgsopNiSKFwTkXxpDPWRJya98mj8bXeN",
  "key4": "hSa4eGkRtGkiQWv9zGEFd47cVroTwecyWGaB8dqkFPQ6cJ4Q44rA376hkiio7LiE7N74zXozKPZCbffQLZdsZEV",
  "key5": "2cLSyfhc5wvP5CQ3c9p2FdeCTWW4Uqk8jmHKBbkQVXVAoZGhRJUmksM12JVJYENJmvuUyLyzG51g8WsHfP5mnxJW",
  "key6": "8at5ioQjinLxDP2mE1wToXMQ9TUfhxA2UYEqst64bUGHM6Pp2WiG8a3NztZ9DAPw4ZtBhJzLiqaN6L9EyCVcwKE",
  "key7": "1DMbC8UFCPK3gkqzxFtJ1MHn5H7d4HEShXFwtP1jGsP8p1xsTGZyPip3dpHGEH81oSrumbWnB9y3LxqCbcDsRQM",
  "key8": "nkYpDxoEuH5byXrUS3cQVe67xMCUQ32wiAqDLGSVFqcP2zb88yqjo34YqFksySe3APVMQM8DYCU4wWtU3WxtkPk",
  "key9": "2BrMMAp9n2GS2thV7P5hpwrF88XTKJfaAkqLRWFwMuMHmW6gTjnCSBrasex41TGEjGof8YDhCagpx62u7CuRv2h7",
  "key10": "23rMf3KUsmsvmi5tmLi8dqt5veGsY2qZPcRUBYj5nsSwLNt8tkEGyg1v8epA46f16dqPT2nmja6D45vwDUfhrfuT",
  "key11": "5i61ERKr2DDjPJDnw4zByEmACwNtYvEKCpMdLDhgqjm5otLLwgfrNh13pG1ZN9JN35gQwQUTkLTnSxWxchXeDYQR",
  "key12": "yjSAMu5qEySUfm8gQ63op11cag2NJ784sQYnaZ9S4XJGLuipuBopvKz1ERwm9JbGfiJiWpANqqD35XUTcX237Xk",
  "key13": "nuPucRogHxL2rz29jZobgJuUpaSP5zK6YX8u1jPfBpcmm7aMZr7dS19D3KebJEgqEB3SeSUsPgPDBBKzRLSKbr9",
  "key14": "4jvDX4HVJrj1GpknnjAud3NBzJQXnrA8TxrkNMKdtLrvuSXEV4HcBTZY3ssCp8zqCD1TkuKdLHroyTXACZLABj4x",
  "key15": "2JLb9wVNqL1pBTHRzg7aRsVX3gpuLcxkacn2TqW3MWGiaVS3qGkAu5QUfxvh1ZuEJ9WXkRyvc8ocAeSaEhBDBrPd",
  "key16": "3Y2Vv39XeM2NmctAU6By8T8SqaSYsDMRSeg6JyZH3X81cdPhSf1YuUJjkCtuxErTvceyauDu26r9t7X3umjoFcc",
  "key17": "5HgNmNeBAtkaVisZYeg9MC1mpKLBcksNhJ9YNnCw1f7iXyXbQSDDiQQFphdmH23T5EKKEfM2fbqnBfpx19xmAAcE",
  "key18": "i5nF2MmCGKfZJciLiv9T5NfCRDafrVVo7HFBpuyDqrrqH1hPvwSHHC3BKzsUzEjUCRjKmPoCPE4zeTu8R9Nat7Z",
  "key19": "3f7TwoVSZdvBsTGRmC1FVmX2kgJBKsccmQiYt4v2hWNaqhtdpQMnHWwFrzHRJkX5JSWXeg96dezfeArjw8sxXX3T",
  "key20": "2iqsAUsyZ1k8jjZxHyPrGLBPK8WDgRcgivwhRSemnU9YpUmBZk3Ufy1yn3XbYtYRLBZ7m8j7A7kRGS7DaVoh3Mfy",
  "key21": "3nQAtBidtipc4xbGwvqaDdEmZsGKXBP8ZZv2nkD2C2WCkPv5k5nSD76m5xHuawbBh2rANvhqqc2AHBsjy1JquUPM",
  "key22": "62BSbzghhRdoWqUa11H31CAVkd5JGSpBuSJNYYGkZvWsbK4Jb8HM8GFhnYivUiMJiHdHE2mnEa6oToFiHfX7pg9G",
  "key23": "3TPjMyHqkxeeHwebN3eChWPNJMYRYoBw6rTtavf7jp9j51Zqqa9GXGXDuH5xxsxa57VhQdSfZ6pnWkhdu8QLMUvP",
  "key24": "P17xdJg8a8h5bZUUcTjgrmJZL671B1YbmNDpzq1v5uDMs9fJCZHjhTmQmeMeEyrNiZQhhrUeKkwrR3kWr6FNqrQ",
  "key25": "CBoawJBgEXthyaQWoxsAmPkSdJYRbbp5PaqWHZCVqLeptjpA55m6en3d3krCcP95CRpZc5iaZ76UsedNWXGFGeC",
  "key26": "4HWpctsm8yM3jWBN9nCB6Jbydgynw7TRTSV8x1zcL5mFZaQNiotgVYPCMCAbM2CeK82fJDi2TcEx5c6U4e2x4fiz",
  "key27": "3cYnk33soZfE7wys3RZ1WETVs72b7AvYgHKUtAKb93xypQqhYuKj3LBed6KPFaLNeTEWaj6KPteBmcUFDeeLkPbY",
  "key28": "2Kp2ksRnHu5CEjVtm4pLxEdsUUvXUDThzENsCSEZXWSZtnUrXiaTPxy58qNfbctqnH4NT5ZXoTNuZdviMsjg3pKW",
  "key29": "4GtsbGkm7T28b2woms1XYr7DNVu91uFrZ5ZNJ7nmZ9cGv3seG9YaCCjPtigTix1AJ92RvqMKMGGJ3dukopqGLfDP",
  "key30": "56Fz2Dtb7Uk44wKNseirWBQjADxq4jW81LPgPWHvFvCAGQgXucNpSyPgYg1nhn4599t4xHyLmcR7EGcqjLeJH2JM",
  "key31": "4C64ffmk7u1UM2ji6qqufeR4qtmrFE1ziKj5QgokUKidBMbWVtYSrTknrYAAcnaDGee6mdfprqSVyv93HPQ55Fpt",
  "key32": "vU5Jn3VnP59NnuARpktgjhPb13wXZzb3ymk534uF3RGzf2DLfsBC389UCtKBqCiSbJDMWCcEwwMohxHJDmraR6x"
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
