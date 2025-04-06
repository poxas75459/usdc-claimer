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
    "47bCJMJPGXQBw6sdiVGjWRH3XdGuH5dGdJ9d5vxeibbupWauFvvbFiG4ymgb2iLjRsj8sqLCHcCVgRnkiAnAV3Xh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w7V8f31wyF7Z6drjsgARikQK8gc9yQXVxNuWEJv8cBi6VCHc751ojB6jqBUoABrDaqPbq2nmiZrzfebFbAPG8hy",
  "key1": "2nH9Xwn9Kndz15PNeaqSWmowTKG2gzpy54EsrPQx8vbc5A5dbc7dFwvtYi5jP6TQRMZqHwFRB9rYmud24vSECVBb",
  "key2": "4DhZW5ZuPTcnLKvkVWTtUENJRrA47KzSPuHk2n3FfFg2yRC9Xwvwp9JTFVcFjSM3VBqdRddmJ4nHxSNu9Rjx2gaA",
  "key3": "6QKiwpQEyLjM5eoTSVgPdCcM9DQwD3Lf8hokKvLDYvZunWpSHbax2PTF7WuS9pTvEWVcszhYp9BvJ7QrKnMZ1Hw",
  "key4": "29WfEupwwuxc1V1wm4VwXnD2KsVh3iy7BpspVLHQPzJgxe5WSBxMSmEBswbZ2TdDXpM1Xeg5qkfgbNp2sqQuKztL",
  "key5": "5d9JxKd7tfXHgCVbZEhmKFAWP2a3b4d76ThDcoDSGKYwSbXDKLLiiVaGT7UrB7Cb2hRsZpS6GE7USCJ9F6pXt3Yz",
  "key6": "5iSxr1gs4GjN7qj1gySuVceZiW73UJPSvNuazrRt6LpKyxJum4F5jR6gzDtX4rEgsgxATq3hhggp8d5ZsLMnHfFe",
  "key7": "5hRtcciMWUEkQTToSgzmALU6J9U9HySpVYfCNQYFDJuUrP2LbTfLZvCfi1AkTyg3fhhUACU43scD8dpQAPqrrxPr",
  "key8": "32CozdJB8GLHsdRQeAtXJYQ3x7q6ojo6rxGD1Rq7PCMk1LEF7oPauDeWWyjQ5niEEQqMBGMEDGFxZbEQYbdmLWqP",
  "key9": "3W7AUuhYsSs91PMYWBki5p2Wj99FSzwEC3JhNaG3iwo6eM7vx4s9MAYqALZpUxKTieAZL9dS1i8DAsuf3ghBJ1FZ",
  "key10": "5PbYT2CaXbvPpV7ziYX2W3cpS6uMt3NiP8mQgNyFokGBSUw4YwpzV2GuTgPp91MyhvfCJbm5kx36PjUiDD7fSfEV",
  "key11": "5Zb2Hd4XkqQvG6V8eeonq6mjdCPq6WeAcLwKXCB1C22UgqboXNsB4gnrJ3cTu84ETJTZDJ47yL62peViDuQBVaxa",
  "key12": "2uMJdaRbKbw6eVouAs3gWSQUfXvUpwbu89aoeCjUuyM3WVnZnJziek33DLSwgED4pAXRbMXN3vcY6XGEa94V2GXK",
  "key13": "3EJzG3nm9HTgijcWXQUgyzZtQ6KuozNrV1eNHRmFLokdPuhvEyePYfEBy9yJ84t1p5Ps7nK7VmY38Coc3WKp2Cby",
  "key14": "qbvdXv73mr6w7MzbKei5gfqWRRTPwZUaHWzetYjDZ2HFY2BwLHXKgv4gwzemNTnPypYJYrsamfNVvizJ1bELkQx",
  "key15": "2h5G5QxfcYaYwprpbacX73XTD4uKboFWtBUsc25pxUC713tYAG7W3rSjpEhvsQ8EfWtmUc6CyppBCZKxHaMKyuEP",
  "key16": "5gxha37BNxKu4HGTpMJfiPHRMJiC1hEZ2asiP1hKKfknHp41VoSwWTU85w37wHk2jotEGc7KwEWyj3Jvb9VevvkQ",
  "key17": "oYbBtaZPyDnv3rQifBS7GZKmKaXWrDQy8oVEe4erqRe7Cb4WW9NQWcnHvia5sdUv6b6U3NhjyWw5tYP29sAgKcn",
  "key18": "4kG9HEkj1c3trcCKgXVaCqNxeC8P8aYGcVq6f94rUMnUfRwDFT5ZoAiG7DkCKBdeHQVhokLxLhqqQme6c7DXgJr6",
  "key19": "5hxxNG5Q36bGNsFRykypNirZXGpsYE4VLUL5FqZn3m3BTSbLBHbaiLsj6apHR6UbkEfNqr44A4FuNWUJDA8FVJ9o",
  "key20": "5gjmjFG29wuHpKceAH9a1K19JcXA8CvvNS25bdxTtik3FBR45x4UxbmtydCe2FFNXTHmofcsrSa5P5noKLJb2Pv6",
  "key21": "3PSLbhQdDQjT57WVmFrnm89DLFzXh1M62pbUuigp7HhzsjLVH3qRtqkRHV4WJAE7b3ThQ2WyEx2Nqg3GUa7rZQcV",
  "key22": "3KYDkmEHVKK89zAbAMCgdfAaPkoRjrTkZNx37Vb4gN4fH8bMPyfAmi6cjXCxdDdN7XkcTiVLNLG9c66hU9T7F4UQ",
  "key23": "3i1vj2kuGzWiKo7YL9MzjMZuMSYEbHpwLeQtbzsJVyGH7nifDytXQ4ed3i6ZAAC9XH8Gy628wkYpVgHNgq3M3iQg",
  "key24": "35DBFXV6YarXd4g8vpMy8zDu3N7yTu2L7Cy9eWp1rLFjfTB4DQyLJg1ucjA9YTU53g7CcM1xothbgVus6xnr2B6i",
  "key25": "47P4D94oHjwPgWaYoYNQgAeTDqCmaEjwYiFGoaMwG5xJF3wYPxwsBKMPRV7zPQjf3C4JgCYwXsE4GURGcfRXmc4a",
  "key26": "3Feb9YhP9jqMHUvyNL4DA49rdcfXonYMHD8WWMmkacjo3hKYBTPcHTvxYbTuXXVcYuRXGMh5PDQVk2jpWFJcgVDV",
  "key27": "53Y8HHoYUVXaoS5QUUqZ8AmwoKbmDnV936QWBr2bmWM76Nocw8SYA4LSE778zETt48X2NQ29Ji1TzgFd5fK8QjWN",
  "key28": "2EVnjJD9UfX2od5NXELRe92qJ5rfe2YB9LdwHZktdrskdh5Zq8YiJns31WfB851XEAxitZybTdWXgDBVhVFdExsc",
  "key29": "GxmjH5W22QKWmaLebLEaXFpRRabcsYibyZ9aQFi5C2Bp3TMhiVPBgR8KRL1REvkowm7gp1hi8WmtoiGjd9UZbC5",
  "key30": "2BmsQPEPd8brTypmEmCjDQm9SXGA439igb4EvXL1ZYNYRR47j6hzUN8bnptUHcP7c6T4E9oKzYnAZaipBNuwi8UP",
  "key31": "2kzA1tf7ExmFMgUEA4cHLQsDpa8jEFWvSqUEB7tNvDsxrs9BpmweJnRkkTCgCTK1BSd1moQAEEH7NBR392pkTcKo",
  "key32": "3jGP6xWSiMYmdCVuTfFyhdRcExKVLsh1N8rkbwoqM8WSY7cMBrDennSet7vKeT6sbCdyz51misBwSGtiP9rURzTb",
  "key33": "41z48MMLQEuXU9c8RWS7R6Vyyycg1JfLhsmJFpwQMk9Ar85HuENqaTLFiNk2A88fFcmaViNj1si1eK7g9CPxZjuS",
  "key34": "3YUBcmE7PFyrpjZs2eqMfuA5W1roFH8hd1yn9xs8pj1o9Tu4L3rZp7cNuS2xGtmjpuxEbPF5HnYmwumEZAw9ScLB",
  "key35": "4Xg2HpKwGjQhK5pTMxd5WhFXukeLDWmGpCs6JiBTEDm4A6m3fvf89ami3uYhFea5Uwqj2UcBFmpQahRDEgjST9UG",
  "key36": "bbpGB2WSFJPq653MQas8d5BnkEL2MHfcgYoJfScvy2uasa3M3fxie2gZqUMaZey58DAQ5ixPjcwf82UgNxgsEr8",
  "key37": "WZKQKstK5YS4g2A6F2AkVNv2aRRbGcRhrf1zjECtjUKgkRQESztxYKm9wtv1CVB119HDFphLoB7bJShmB7r6tbh",
  "key38": "4YWKpRRdnxin5NWTuyF8VFSJyJXfnRu4CYhA3XRV2o5yvJxWN1sRc88AXJH4d7F9FagCwdSxvCYtAkLh46MFE1VT",
  "key39": "4f3HMgxUd4qHSfMPngi1Kjafd8Egg4htR2o4mWGe15WuT8zAMVvffhmmonFU6fE7eHWRsa5iH12UsJUvaoXfjniw",
  "key40": "5Q3Gcf93dPp4YKtPyxuHPruXKCYNWYrRxkUkY9c4wdPviikZA72kF1eKUuNMUjtGhe34wtgtBpASzB5Fqz5UdRrc",
  "key41": "ACtt5YtJqooDfhvwVMo6xN6pQXvZTMYwxjGJrJhuGRTcD3o9QUzK9DK348xmHH2Sq5jqxWxZaAXY8a3pW4NAuf5"
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
