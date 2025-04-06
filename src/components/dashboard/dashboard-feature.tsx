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
    "3ZX2H86J5z7ydNqQ2EFunmUEDUy9TPEehW7zQAfQ74998k97AYM7vHyrzvswcFVWhLrKchRVTFZs8ziFmHt2j4xk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B31SgjvTdLM5qKMUWbaGFhD5Yj8XA784EJ8cY4LDRkfneNmciyxThtc8zMNUieprTuch7RnTw8t4Z8nCqEshK57",
  "key1": "3Ak7xsHPW5Ng7ojxH8fbLne4C5oe96maDPqdxTX79ct871RandGo3GiMdvRQ7JK51Wb4mzmg491L3hfeTcQvSkVD",
  "key2": "2bc2oe2HGVrQ3zaP5sak8hnVy4xDQLGfqcdijHrVWiUYr8ZbTyLmzdrPzszj6AA8fHULzo8xyjCLV9ZMZit9BT5V",
  "key3": "4p2KaWmZPtVNT2n4yYhFXMQYaCvTHqpypPo9tD719k5q1KgJqqCJ8mL2pJ5oJ1hFAQ4wEC65XcbpG1vPiN3qKttD",
  "key4": "3s6WcydNjUsRwAEbiNtu32tg4yL6FVj5sgx1mEr7Pc98K8wEKJmAUtr5MSLF3q1EBWeMtAq9mb32xMLHGszKzbGE",
  "key5": "4GN22piPa1oUpEW33VrcS7KYSYcnCur3Gh31xKXMxYk2YaGvSYvzDHLTNHQafvv92n4eLsuKaoMmovuSXuYeii62",
  "key6": "2ByMzVPHwkpJs2hwBnQVimtoZC3FUAMvhXLQQZ9tAE4HxWSTA4GQnRQXPXmHKAFThpBhDFq6ZyGwYsVJfhg4dian",
  "key7": "3XngLE6krcAi3BptsUsVbgCEZoc3WxsKaF7dw1zgGzautzizipEePSwDFcLAnxvS3xZsMxusotTRJb8bR3KeSvpz",
  "key8": "ewE71cWpkpnzBEK8JUqKQqnaaYoFsXthLMrhwyikC98483isj4QwfRARrLmkbP6E8YsKAnWYZEHVxFVxw8ZPHQf",
  "key9": "451sX2R8KbBcvJbsSaW51SMqw6eovekkD1MZrAzCZbP7WpAyfR4VF97mPnUbLMfP2gSWvRp6bGpPgN1Z86D15G3W",
  "key10": "4bx1vtrzKAUXpea4CsD23d4FPoQKWmG4VejgQ4Pj1TMXzuenV86fS4A9DvyUSZYTTUSRvTriRhc5gpkXVYUMQWmo",
  "key11": "44Kvw2kshT3mDiFNF1hVWqfPDgBkhZYvSjcULmTyKnVPEWV7gMTV6xP9Uxgx8UrbGcVc2j768USqiDWT4ntcErmE",
  "key12": "ce1f2QQR8gShXg5RqiMADj5uCpSPdttjVX6pTfM9kkCz4kQPUKgtxWpofhP4rpgXZoo3Zx2xJxS9qVcEtT6hc4T",
  "key13": "32Bo2TDpWGuji9jKdEju8FE2g3XSNYPt8Dd3MFFHD3SKnFztrCyLV8Fvpz1wuKF9dMxfdfUBu6iXQuoJVPQccKBK",
  "key14": "2XfmNouEffGyNbeB9YBk7kscxHALxxUeCZdHAcGqwLB7ypiEcsHXFzqhnyL3YxPmt1Tp5qRqLYYTJR8Vr6swDSJz",
  "key15": "2G7idfaXNGztXz4oit8MJdQ1ZgK3XsEDLRUhM6k2qN7qW4a6PaRyjGnH5JR8ZmhWXhCSPmSRHWsEZ8aNesusMi1J",
  "key16": "BTpNH5rthXV1EmJNAp58Z32eYQcDi9oDZVxJDWWD5Zri3VkbHrVJMhhRDsE5m2jGsQi85ptjc6fANEj5CdWActh",
  "key17": "3hgL2otAz6KLwcCfTntbR7PpScCnEFbJ31AyQ1UYDCGZ1u1M3GqtZga2TF2ZUwDQFgozrzrWrFDAWLp7wBQ3XWDf",
  "key18": "3z1mFiRfwwKhFXpQKoGUAwSr8Wt5CY8Kob7Hm4AuCo4Cx7sM9kBb3D2QmFox7Qj47fg1g764rvjFZ719Gu75zE6F",
  "key19": "2LcR8gFCX2k5hY3Ax4pE9bn1TxZFiwSRcA1TRE39NuUmnaw341z3qoFdPxwL4JVzrK36i2AxyGgTcrPkNXTAK9ps",
  "key20": "5tPPEkNwuxBHGQTQtPWLoU9XPATtSJBFvwc4gjKQMCy21RhkfhNNkLTE99K9j8GUQpKgZxwdmuzrywEHxaf9CTW",
  "key21": "4qENGvMKgzffP5JQsYcGPXBpZ37NrH1pC9uN5t21zD38aPH6bCQatuPJYSbp6JFFpvjXjVoPtaKxzLFSh6CVBRvS",
  "key22": "4QiSdfiLGVKXdRGxb3U9Kdb1zouzr6VkziJvvVescUNQQyArGrNauQwVuYKqAvz2ienK669pun8KrDNaEamd6xw2",
  "key23": "5wAJWGfDragnhayvbRQDyqgJb4yfytJ725ccsP5yAn9HoRa2CyBNBnQzfBHqEb6B4hQgFYa2pMqZX1yH1tskNguX",
  "key24": "4XcCATsH98yjTD3krpGRiPEwQ1Az4vPxPJDFCkAxVNuxCehN7g97NtrXgnXpVi9rLQSmL6pqgPvm6kBQGMs3BpM5",
  "key25": "3LWpQg7Q3mvkbhLCi9jYHhVhP7qQ9GiXotJ54FS7BrH1ZHBSotr31YBdM9Ha8GG6kca727iJeQ18LGzSwMHbH45D",
  "key26": "2tMCmZZJpKhxvQGmABCAkrvqzgAJ3XoGb3BW8Mks2ivuangsi4FB8fiQeJVCVYBXBMeavjTgxZdzj9XMufVjE4ys",
  "key27": "kPmUojyecBzz66qYDRwiRq2oEstBtLNzm28bqdQRQPydMPQZzpjcZity6YTYoh92iWbjEACf4guPn5gmciGrfRY",
  "key28": "56JAkrfP2itAnwa2BufiMpjWtVYqaNnqdhUBLegRseiMooy3XiMtdSygtB9nTATmJAs5URVChxHeHi2PBEjErdD8",
  "key29": "5hTazXcQEjVJhKV9jUnrjG2PkBvCK8oKrkVKg6KdcouSHeSCaKPbAr1ZKCzLfBN66W151gvPRzqTjHtYuQaoS5mD",
  "key30": "2zhSJo7jq6CRLhkiLCoxiBp7rLWskp4DxRaJW2fBBHGFPaxmhXsZp2FEfgVkugYSn1WgE9V6Lo2UnJR585qPXrkk",
  "key31": "3F2Q2Uv9k7qZqqgvCXijLfsDNwMd56qK8qeo7fKQr3ci3FmNC9uXHoVrZ4ww3XYXxMJN2chWAfao5ni8t18KeqUW",
  "key32": "9Hbr1MbNxhmEEFKXGyRBhxn2QqvpE3RPkRaWNmzsd32kH5zTHqPMpuNWkvnP9Zxfa3DvnqEQdTSEwLXPFSzvZvF",
  "key33": "5fQSQwTMjPSVaRGZ1TxRjPkMdxiMrUpxWeoUMecb8UqruCaBcjwNe8Au1GxTvgBa2zCo58EktugfPjrJ34UYTTs6",
  "key34": "2aWwGTNtiC6YDpUyQwhREqvWHzMZdDvTEHhHwWsgtr3iw7sjiQ4LJj17HSVooduRSnShchpFv77YV7mE5hFYV8mh",
  "key35": "34p8EBb5p58aeWVZfG6ips74H7RVFgBQpGNT6DLATQbuTQHRYpZFr1UDKdfDQfzkVdXmQ85B4C9ZWGreqFuFYbT9",
  "key36": "5VuJTSvobdKZHNmZKuZAnd2umU9upUwtastPy1fK5tML6K6CqK9DWNtuhSLi4iKepTxafzEdEdCJZYXgt8QbDnn9",
  "key37": "3TokrjwsuSVxqLipgdXA8rCte1ngL3CoZJp2LoTa55T9KeUfnyBgiearTefnGhbUKEWizDwizhPVfDtQMZA85quD",
  "key38": "4uMvwXp7PaZXEbNs26Zwz4ZuNYgmw32XGooCAfqbn6BCxTXELge9e6dG8uAiwJKbnnW1NNzoGdsWsmXbRxxP9RrB",
  "key39": "4ZhNcVfg6oo5yYNYJWdaPy78zxwx9AVQmuArRSri2LVdJnNnqybdKQ3heXooWxe83YeW8fnvb7QW4mVja1XYhUj1",
  "key40": "23u4CWp7BQkhRLfAXzf2MbxBN22z3qdCNCnzACmGChrP7Roe3qp3BoU4ZJanjg7k1yXTiavqdZNy2gAgxiKEYBfp",
  "key41": "5xoJGdyJn17QDAkSnhjT8DcumyX4dcgWVubT61CaLc29gpJG7M1NaJDJNqK2BNhnr86dK8P9idEXEK38HZySoD2L",
  "key42": "2mZx256ptT64gjWzjVwiDHn1VyiimqP4ogAukk82pXkbvYA2JnBkPfH59x6d5CHMjMvdjKTT9gThc9UAibXieFkU",
  "key43": "YtyTgAjtvw9gbWDEgickeC3uh9FABfQL716htjzuevEDRunHrQBpBBgoPu6nUDUtohdanJvvetw77bKgXXP9zE7",
  "key44": "5MvsgK1GzeUPgPiBV5fB8JKzZNSURuADZu1npWXVnFcPhfPHWc5SHjBzmMQwVbGzstVpuKm35AY3A7UqVbJinY3n",
  "key45": "2XoU771dwGfkLhTmHvFswaHrbAR3GEmGB2RUxxS1DJDfd6CsdRjNyHCXZoh6VtQHSo2PCKR8gqUxpPu9wooDXehJ"
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
