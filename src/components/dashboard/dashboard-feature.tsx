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
    "8nTVCZoDtCsBg12kVkhw7Kzr6r2m8rRHyb4XMxuTQAtGrvjZPsVHcoC7WaeE94VLt5a1K8fHNvTYKcdf2YqMW6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F4XwPEHj1rFxc7yY1zVFTCamM67UVX1QFGN2ByDkqWPDJ8LQxQV8FFGPcXb2b2nGLVhnvXjtwqLrvjeDVYUJZot",
  "key1": "64jabXrEoHJbpfje3LA1nobcTLviUx4Ed4CS7N2Y9oX7PEXUGYN44XxaX17L94iZXYPSHp57LmjA2ZgyeVQG6hGz",
  "key2": "5dpHhWhBesz3wJVrSMmoRjy31rHYPMRztRgPS3mtgcdfhiYceRDiS4ZJE3tBV9MG7NHpxQnGMEyMxs2U8MhDSDH2",
  "key3": "P1mG9W3pouvtc9qYqCBU7afEJxTnAnjBnqyR4xVfuo7mMgfQmkZxytgk9uwGpszLCpyai9GeNjVRZKNBKNfqzZt",
  "key4": "pfDtwW9tq6GeDqixSeeZHFpRmS9hpg8wuc1KqPvEfAtZ8NC2nVZzY3A9n9dZG2tVVh64Xi5n7eAchd2e8FMTMh4",
  "key5": "5MqWR15z3aR5mUeXCtPrtE6Vh4zBnws7MVqontry7PF1vbB9bCwracLYWVaVMt6Tvsqh6WnUGtxSciReeZowHMsd",
  "key6": "2A6MZBomGcVAiZANBnuE2Q7tu6AUtcvsTJDYhqxvmoSN9ASURGsrt1HhzvrsBXfdAwgrVW1dGjRQExR6rF4AwfYm",
  "key7": "4RgvRvEh1vcnsvzMtH6RJ5vXurQrKimBJmYEeGMhJ4SN8zJwss6MdzMvkSUCgpbZ41TLLapakLMnyoGbNZuXC8B1",
  "key8": "v8XxTCKZvYJE38kQLFF6Qe8XoPgnDXDTQ1tEUm34fVoxnpoXyZHZoJSsgNqX3MpNg3j5HE1xtu3SV98F7oePNNJ",
  "key9": "ou63HPU2pTRSUMqgdw4A6okNcFLDsdkbdV8vH7yAJTPTqekDp3avqBLanEEKdDt7YDXW5Mw2hzxn7boaQxnwww6",
  "key10": "281R78xptbJdQM9bVZ6bk4NFN2rngenSfjJD21WUYKrRkjhnqHpB4ht3TN7ceU2U8RDJk3Da5niMQsZRw3PiFsAg",
  "key11": "4foUyiiAnDP6wWZRkgPjx7j3Npqp6vDQLoAcQfhREAE9X6N5h2EY9t1SzGQTq2mJmC1RiyrRLrVW4X2iD1R3c8K8",
  "key12": "33WDsBQUM2rytrU9EB4DXj3XJv1CQP2Crnv52ewPPkmWmZU8Am1ResK9aMgGgohZtikQUgCMzoVLrpHwxYqWEapK",
  "key13": "GMnmZ7S55mdYzV9cSVyM5YZYKy7D25b3PgXXTBecDhyG4VaKKe3irNPW52BVFTLNNSP2QFPGGTXBXdE1AoTLYdZ",
  "key14": "4YAQZutJz3AHYRURskvqu8X7dQ6T5atgyby6sXECjTJjh8gwVtt57J2q2dk12CDgLyp4g8H5AFMb66VJnAHQYppG",
  "key15": "4a8JHnBexbxmBAk8KMYtbDFft5Z15fR3Wwfd2CPWP5c4YhyU4kTuScfSZZUsrQULUX8C4DbwZDJaf2HAaZKcGjtm",
  "key16": "4d7oBz9nWQgWj1Lx8QDsjxC46RWfELmXWnJQMaFvpL32WGSudUYDUQPf1RaW1xzMc1JBvt8sdgJEcBzdqZ7knEab",
  "key17": "3KVpoqFSgGLxkDPtQF9TL15gNJ5RqmGC9wP6YDFEPvQZ5cQ9LxDBKrc4Pb5xRDBDxGqBU26Rn9Qye2Q2TYHrogMb",
  "key18": "31nAqJmDrEevQ3FCRWkEMvrUSC3exmzqRLoVziHgdwNYsF8UtxsMzK1Vc7H2kzYh4ywX2KLJHYucgHBrPMG39aK2",
  "key19": "5HKLq2QH3cg2uiZc1XXziPEeGaEitwT8cgvHpHLnqHVjcAMXMNmAh2vwciorMYzk3u2pLgmXKD9Vj5Qo2bUaRQkJ",
  "key20": "56qytyoXfgPbbbccLumf3ApZzMLzTxyLyENC21PHJhQWgVyfvHsweqr2UxgwxV5W85MJNFCxu2jTXxv5BbCtreap",
  "key21": "6rpy6LriEiiJzpDrK96YM35fgE2P5bEXTvzYpcR1ig28FTU4XvbAFPRjo5EnkNnw8QvyhsMtwSpFPuXu8YCuRYd",
  "key22": "4rsdKR4teUeNDkGz1Hctn8DjRJAjfwd9qDSKsv2a4DWzi3y3DVsWWafpCksaF4uD1iSBqXx6gfUURfm4zHhLNEfL",
  "key23": "3cL1wHCWvBpzB2ckvHQc6GMnDWYW4eMnqXmDvGUyijn3KfvxPPAg1kA7CSroB4riudAReK9qcZGdiAZkkAZkdNgJ",
  "key24": "3yqfukB8KCYkXWtesB7TyBfQ7ybMqQwp5n2aPzNRyoZjpW7JjqokKfs5q157yKydFGSbEH6X4DCQ4ZgiyNQSdBFv",
  "key25": "2fuQUoQMyXheq43fYBtSTsP5fQfGmFSi3f1D3yQtaAhiSLGi9Sc7x2dr1mXsfuW63vbCEkdJCE2TJsMC55HYNaiX",
  "key26": "7vrqtADQYfEC7fpc4uZb98JKWghhUVQ4QeG3Ua5HRQ7bzuL5kxVvARbNT1CMQaZrEqEx4sY4hHezDPi5j1fAt5d",
  "key27": "543xCftHQvPgEp1JxkmnzYmVX68qvcSBojCqXrgXcTeMPoNs4vPjENHv1wn1rK4rgZi9hgw5kX1L7GnySXBGUkoL",
  "key28": "5VZhb7ztutuKJbvoWf5nz2C2xFgyHp9vnuMCh4BXLDeyhMwxUQsFtstgtQDigAr28F7qDXhvkCmBcEtdVnXq7DJ8",
  "key29": "3ppngPgR9MFdjBJrKcpmXW8TBgBGqNSG5qeUqToc65iFNFsWkEpigBd8xU1NTtZUv7qZtx5EGnZZtPd8qEG9R7Gf",
  "key30": "4BmwDHtrqHgeZyjyH9DEmANs6pmnKjwMSCo7cZV9w1GvsmPWNZeTsfBSsVrGnzZMSRNx2YCfyz5jcoNHMNTtPSGM",
  "key31": "5VHMvq8Jf8XvEZJXayk1c9NtL9fejLZ5QbSVTuGXuLE9tMzVBdG8jS9wYSai6v5fmRVBdEYz8xH4kuBcymFqt828",
  "key32": "2kvr63pJjv1Ugyq25uZG7Xurj5poqzhat5ao4uR6DbXTD23MosQuqGKHVZKBiZwGDTzWm9bWH3sk1cBA1vtgyPd",
  "key33": "6tRh9TJXPTk8UWinGNe6tPMsESAXJ1BQTztCGvss43V7aJcmqyTNfsqkhhJQaKs53a6eWMjCcH4gNZvkAiaN13y",
  "key34": "5pLZ8we4wizAU8RgKKK4DhvqFLV7h6apqz6Quj5HWZxPiiD6SSTEKKq7uPPAnU6Q6zU7bzf7e3Ni3mnaQxcCV1VA",
  "key35": "3XPEgB5VLMPGD7zZ3DUb4ZDH4DgRxzR4QF7HAKZWQMDEhpyEYzwjockzX5ZEurygwhoVaUKewLgSeMhPyBhi9WPG",
  "key36": "54XT8QFshuzBQcHr48L27dzieoWxhwXd5zYijwgMNFh73NxiUA7gJ8fHPARVoejUZSGzyGggzu1cJyUjufCfTd7g",
  "key37": "W4XtC6cutNAYds3Y8ZMwwidampjc7VLtwrvrAqvCckytDFYHNXh53tLX9TXN9x2HjMpkwKJJruJ7J8MGWGRF9KT",
  "key38": "KbxmpqwVFdg59so9RQhP8VvPMM5zwrwMetDAGHKjrBFJkz83hvnnFA6ks7cyCGHEVADTV66pUrgqsuZSTiFTXuS",
  "key39": "2FvGHdHamnV6xWKSPao3w7u5Qcm1SApbANLrwrkKZbmvyYu8HGvj3Z1vYqSnov3uhuVJMB6uWNp1D6x3xUtrGwzb",
  "key40": "3q74qoLnM9pvjwGXPU9Xw4T625wCYEeegnDR2yx9gPggJtfbzkoEf43knNMjmDBHi5fkqiRirqcnUbCUCvQ9F5v6"
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
