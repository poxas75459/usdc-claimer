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
    "3p6v3TWAJ3pZfNEB6msddCtj9PPn2UQcENAFracsCUzWtEKW9LASuHZ92MMSzA71N4kKULpRRFupdM7uUtqFrvwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ivkZMGg3CPxoYYBSN9C565Rqv9UvfJTdGNrTrwptt1bH8e3bQrnVPLPbomK71gQBAtAsTR8LMh4taHrRSvQxtS9",
  "key1": "3dXXPY1B2BkcDMyrqXxMRz27YKrZ6bxXpbj9X3a2cMikv6a19CkEJkiGU4GLrqtDJAMrUQZnRY9LCqM9VXQNQiNG",
  "key2": "4wGM8f1d4MpFxHEMZEBMWShjmukRNzvknq2Nqc99p66zkFJk8bguqKE92ZBgX7VCgcC7i1JJ3ggABs6SPJmsAd9G",
  "key3": "2SRi2Q6LcA6zt4XLHLZ75Qv3NeGruFBtL47wFCRqo5kNANdmbegrk5x72YyM686s5omsc2rNAxwsoM7zbsz1ySRp",
  "key4": "4kWFYjtzt93h1wYggfwjvPGfUYNBEZxUdwaDn9D6wkPPbpu1zsp29f8Nsu949ak34WM1uL2uups1HmpBD6b7GrRa",
  "key5": "4PCANKi621nBvacP1QLCufH78sXP6v2ZP9eC9Tghp1jcQDpsuTuTqeysx97VGGrVWeiRMwCBuqykQg44LuLszRHL",
  "key6": "5ZDhmoNWir33c4PfLoSUkVD12S5SFfuk226xWahYGCjNTz8fYGQJu4nxxAHRi85QfuPWATL85gninCyBqbBkhXGP",
  "key7": "3RZgj6T3Tz8t6ieKFeH8Rx2jUmTkuE8o3d3hC3VJbLGTV3qQRr81EDwtpYwgFjPNAtm48p9LuL8MNiZcRqiscpt2",
  "key8": "47FRNMguYcdrNyuEQ34C2cTJfCXp4Nc62pZGZQPUWbE3AkhhyyjG7Pa4ZZCmdsJ8wLUd1qmPMz5Guv2xrm6xcxC2",
  "key9": "2xwP34W7dm1qFUntaKvQgkDpipRjxqxbV57esahJ268Y6E4bAuweVvN9TNZVczYxb9vCA2wmVraCQFRNJccNNVmq",
  "key10": "bbjhmrdYCPEMijfgTwGi8zgzLBBLfu1NUQkHTRMCSYyZMdXZJRfi6GDa5Lm9vMwtcMH52vGgSnstoQZBqwyRgL7",
  "key11": "2ruCrNS6Xd3cJSi1MYe4k4DxTqJQAnemRsfExaCuhds6YnfdbQd5sZGKKG4Sg68sMzWaA3mQk9H3DNDzXd1GpD4Y",
  "key12": "5hKQAFr8ezkvE5z6pefwV1W1SdfZ86cHadXbCzsUB9b4STobpFaQKqpJNWRtpYQAGfzPKQ2cZ9ZtF4n6EC2ptezU",
  "key13": "376KGXZVJBg7UZvj3SXepzF5suYF1Kaz1c8pR1FVbwbcYwsM5UK7kcS15776bpg9eBiFDkG9jKUWPo53EP13Enpk",
  "key14": "2aWVrJwbvr6ciVs9APsAoCiF3UQEx4nLESVHoJxypubkhethqyZ9Pb4ymeM6eDR5nXaqvaW2xSPWSN8tKdJvQvQu",
  "key15": "2jcP4k2dBZGDAsboiZpacfqAoKygHob1GAnyLz7CVrUsxKsgxxj5dZKkGpN8osNzPvVpz1ddkvABnBNTxo2iSfZK",
  "key16": "3Dmeapzch3wg9mwAgpZ9CLyafBm7s3oDQLWXrYS54Q3BxyUZAZHWtQN7jf2hnKGPhvCYuRopMtX2FrHfVqmPDyKm",
  "key17": "3xtXaqLZFsm5X8XNWq6h9Tj8wgZYA9FFX8T9h6gtE1k6bw2Hq6CGA2wRcAN4KwWPAoqM8tYGtMuKpD6pAtUhULxR",
  "key18": "3aYkM1PDk6Hmpmgnt6mVxiCHR8kML5D5ALbCXythQwxEkfvessMDFqyDMW5E7xmgp5UTodTnUdewvuwzHCnGRNKp",
  "key19": "3oHLYKDCNbfPsohmzQvHbbJLurMJiAkGAJzRytEveTAFMiTn5MpANrg7fgpJeeo4YWYtUvuDGDcA73ML3iWPAunB",
  "key20": "4LAMwSXCZF36yn4ct5YPQjcVjgkaWoaQEDhfzRYqipvUrcZA1dpHnC4QU5j5KLzX9NEtsdJcFWZx6bRQnVbM8nUL",
  "key21": "4m2tBcfCaQ1sVfpNxuLHBuvhiXSZcHRZbL8HVkv92sYRSRdGcyvEN5GAv9fQyzm7eBEZQcVfLaHLgF6xjVLmGWEm",
  "key22": "31FjXmYCsfmZe2HmN89EhcK6oDrPt6mNKSkdDwvZCgu5ekgfhk3xZx3XrSC4KmjN1ZbsUGanze76YnGpqJpmDLCq",
  "key23": "4vLJuurxgHgUL6S48UioKvbYWJjVJNop8HS7kyoqhuPdhLP1ooM8K2ZUp1wPYLFj8QPPYL335Dwgtqfd5XNLZ1xr",
  "key24": "3D4NBAvSEXAu5TUQynt1prTHNbAy4iEGFDQiA6dEvyqnR9qWo8CTg2TAdaSkHTkAdjiZS33RopKzdojjLdrv6FN3",
  "key25": "b13rF7xHQrW3WkBWS2wF2RiNEFKHSnQWnbokC1HNBgQg2BvkbTKeVLSWoLEZbKFBVXudci6aCSgFg8EpzjiTG8T",
  "key26": "3cNYK1f1W8mTBhDN2yHxioy99reK2sEw6fuJHFLNqPNVrPWj4twoE3q7kuhqrfessx8wRP3TSWt2XdvLoGZGGUFG",
  "key27": "3uqraPrCZD3np2GyDupmYt6sdCWR1fEx7Gynnc6qEsKEd4StsCFyTLxnbqjzCK4dqhwRxa9ncWJ78CcTGKEXAAsi",
  "key28": "57RWTeCcQiYoh6CMdkGnxRnmpLgyMUb8ycN6nfBCQ7bP3dGhyAxWVW9Aeukm8fPFd98xJP38ebEsveExx8Uo4bTX",
  "key29": "62TvrgMbQ5gV236pknKKTa66oRXm4Go6fWghTP7wuPe15Lm3rYE9RsR4xeBsvNoKVYwGzKPkse1YTGd86azF3pvd",
  "key30": "4g5zXhwAcUWDZMJjRP2m1cZUCcqh6WKxRxWaF4bxsTtW3HDrsewdpJrtUm9MwBygCQuybQMFbAugS5FtPQSbPy3H",
  "key31": "4n4FLmTTTCkT9u6WJAycnwg4i3jyzwatCLC87FutuuNkKBeHzVfKiGUiuxrvqZAdSVLf9P3ngPxCFozRGqNr6zMk",
  "key32": "3VYsgQsi71pNAQnKpr1pYkxP61z8kUUgUaxXMp7buFL73p8j3dzg8KD29WLRb9GHaGs1bVPV85Q5Wi51bj7UAJ9C",
  "key33": "KhnjUvoEtXxxoqPq3GbMMsz7BxLviGxDSkF9zN4Yg6ChnqepWaa22VaADh5jeGbJCF9oQUcyGFuTHMso9RUR9Go",
  "key34": "29VYs1ihLCzYszNkFYp21KizN2C3eT9fPAYdMEm4XyqKdUvQKJEfMVUgbtgZZFSy2fLKVBaYv4299kV9nRMfzCGK",
  "key35": "2wR7MJRu8xfV9tymvzvhjDzjgmsJmNsCPLw6gBgJ4EGdChe4GU435j2ZZcCQbeUwktvpKFYvt8713ezMLBAXPKMH",
  "key36": "67gWmAvqaFGSqmjYUPiwgr1ifxw8EYku36YG5Yok1csUQ26WTKA1y3hiuLQJkbt2EHLh7pusrsFc9YcfzACzqr7C",
  "key37": "4iArABXezemvTPLp7inj4NpthhRL4cTr6yDWfC6QQStyaWkuijo2HboBDg3GR4zsGj2d9obkrfArNZppPWNmAfqW",
  "key38": "1psXejZipiZNi3H2UV1ep4MWviQU5CS7JikEJrmcSLk989BxBWEqVUDphBVVYvLSknaBzRiFx6gyKpQecn6iHZs",
  "key39": "4V3de7wM4gahWrVzC3FgwPthVvTd9Uw1YvEHMtf5VXpNdrtNLM1gGjzq5yz9BrPoLJQBBSU7uR8a7hdT7UpwgKGz",
  "key40": "s5ucWdBBoVYvoYK8zYxmTckeXiiQdphuiQdiKGe221kRc9XPDAVtwwUPdME6rEU9NoH6er2XvCBNwUGC9CW5WBX"
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
