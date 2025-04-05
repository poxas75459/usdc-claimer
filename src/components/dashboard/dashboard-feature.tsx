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
    "4EriHrvX7qNQ31hFEJxbJJ5bHX1KqCBmoGeT2zrmdQgGx5URCLaGF8tBcB2bfw3tkHAqYso1ZbagTPvEjW4gz437"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jwLREowsvQXcfP2wjJFfQynDicvB7Snz4rVwSVcEtxAFbjFSnzHp5z489HFKLJEwrGWCifqP7nhDEEbpvd9FThV",
  "key1": "zHqsXDnzKd1HzCGELbtwHLmWpxJHuZe5Y8hpHMgTt8GcadfdSkt7co75HMreGvqqA4gNSoXS6sSaqd27kTDSgqC",
  "key2": "3ibESyXaKNoopULYzp91R5RHqfL4Vhyns39Hwe9VmW6nSgkvbM21cQfviF6aTLV7B7SEtWxyivSXpqDn58BNbUTH",
  "key3": "2eaacWPgQCYFEnupQ6Rp1P5rPHPEfzsmtKd1cu5pWG44bYYAo7xHie1qgY51STy2bNZUrZ9HCgPHKLZBe5RoKj1g",
  "key4": "5p3wRr5i26uZkebf8X1AuKfjBnjBYSZx3Ewma4wv4HpaHS6GRwRcApikMBnPv94Aq5duLCjFwgdDBM5FEH5RPdqF",
  "key5": "n2FpbHxoFi4Tt4M7JVKJRgqZrMTLARG1euTqgxaXkugaeeTXmT9dD5LNwS6U8QKGyYAtQ9wiWpynA59PEoLoB8w",
  "key6": "4aKiXMk9eazWfYQ15NBj4Qk4ayDZgXrmXgh16iaXsLd4sq2kL9nXFcM2XRXtnguU66gdNHMmjcjUSiymqVizUqa3",
  "key7": "4TZNenzwLHTTCGtXrjiJFj4LSQBUXaLWmwBCDMcmX4YdyNUqwMkejLZ72B4Jg1bfhgs5y6FW5tYyB5PFvLAHYRKf",
  "key8": "2ySo9DLo6fNunTxLkVQY5Z7Js4GnNQZacECpXby68P9feCK41RJRvv5uyEYYc7ZZKTWJRJYkYt52UsaaiSEV4SmC",
  "key9": "4gN98LBiNJHYsggroTip9su9dELUY8E8WptpAgw4tSdXjpVFoYtpJHN4uhTze7kEzJHiGnhG8JpeN9gBL4ezc5pq",
  "key10": "uZGocPgYX6fhtQpGAVrb5Lkwed5rFw5zoYMuGcFYvC8Q6PMj4LTfqBZkQtZkeUNoNdhDabZEeDRwoRkrmaRYbjf",
  "key11": "3RxdGBh8PSoHjtttLFJTaxh3AhEqQufDg89WrjK9CdXx8CZGY28fKXacXkCzvabYpw6dSrWuVrk92mY14uNg7E7k",
  "key12": "hYq6u6HxjnE6eG6PhDMeGLco3U32ids82Bvf6vWYYb37WCMo7j2sorqNSDa2gMjZ3n1mVyCnjBQBgSVroapv2P4",
  "key13": "5rti7E4XjDAN5LLdxXFVzD3TaL44QoqzvcU4oKcxSp9u7kCNdyGgdvbmeuvNwbGcuovAzcTq216Cq8pNqgvPApLN",
  "key14": "445gWoZLjGhUYWY9sjqRh7Vdf7SuYTkRqZEWc4KbGy6GTz4HLAoK1AiL5E4DbybWxneRxQgEKRyagqoaby3gVPGJ",
  "key15": "5e5x6gZ3qmz1r7P2xD5hWGgfxKFensvc5JKTzcEZJcvDpjpckPdpRQQra5R118QAzak33vG6AZwnv1DCAnduzstd",
  "key16": "3heJTP3365pLAiJud7YxeE8xHuxoSykp8EYNJH6JoqtB4WfR47C4TkKb3WozjSaPjjbqjaeaXYs4qWMbwT6HQEYc",
  "key17": "3MzQEjg8cdoYTE4L1UzNKxNCKptZ7b8Ax2Cj9eQGicuxysvoJHVn6k5SfcWFjh4nDPjWeA9VeGWfsTQREXHBiX9W",
  "key18": "42X7YPB9jbzrKffn6bYtBWgSQPL5dv9LXxkizDu1ZBqLCvi5wEyKeU4EaqbsXqGEvMxYJKxHfGyxMCqxHPsS6zGv",
  "key19": "3kxq83Dx6x3rxSJz5DyqxwePyqv8mpWoQRdrgsSuo8RHJK6HVhG2SRhuA2q7jpVduVbfyVmU9bhnJNAZBGw28Jov",
  "key20": "2EgCWJLz6rbTzwYJB9of76LaFHaWYhLC5eAWJVVutGEUrvbR9WuNX1xguUUnmDa4zg16ByWRiQpm7d8PBTB4XBj6",
  "key21": "3w6ykLpUR6iTzotMCtyAwTU2urrqMd7vUbmnZNiPN88Xm77DMmwfnWfRhU7FJC9ZTXTzzZJC2CTNaGEnpuJavExX",
  "key22": "5GcBFpWamctTsreC9coxtjdx3LMdjmSSmw7UiGjj4KZxnwtj9E8rxA6cSrV7wTMV3BeASjGRkwPvEnmpvHqxuXjT",
  "key23": "jasJvWq8sZyp5MbpAr4gscrLbDvcrKeBxpU1z7m61c4b1uHEMiS33xfs1Gs2YU3yFx2mfS2VfstYdMS9VvkKqkX",
  "key24": "e6jpjg9MaJp5xM2Q27J5kHUb1nqX45CXfKSGA7P5yqdDxMzpsZu8cQjKXeyhnoRP6X2QhXCYWK8boo2Hi3nJHTP",
  "key25": "3pc4WScSWNhmex3eeLx5TC9MEcZUh77QFVrQreH7UG4e1tBft9ktWEU7DdGLTua2gi9joGkZB91uvKhnfTJXgGTA",
  "key26": "3sHCwLKzhL3nzTaNsE4G8HYCesj52kGSz6gWhze1tZNCSCnULM4RYDsojf5aaLQttX9E4oyDFteyeJ3dqC6n2eEt",
  "key27": "4v3M5jRPwBeojw9f4i8sJkTcVJMeyjcGzhyDEFDxRhP3DGBMTjZpGhMKh7spohUP2ApZorBKTEGdPDYyhcWeiVBk",
  "key28": "5AdbLiidqZBxrCd6vj1m4Awgo1GVtqdJUEvZ6YATqGv5jetFGXmusuaouEt4E16VUHXppxbNKDgt8ShMotzrHM2x"
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
