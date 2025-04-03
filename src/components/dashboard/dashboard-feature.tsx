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
    "4jKMgDeWDkjKHQnUrURAURo1wf6cJ75u87HfwqBENQTwg1kaU96itdNjAQfy7b5XsccmqRbmsvYT3yAGqxF3rjSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HZuGQ6CtvdRHGgxtxtLsxSY8a1hJJH4AZZpHW6nRXhrxXRti4DM34UngLZ4L8fgXufdpdXBR3xjHgkTguxpWfhU",
  "key1": "LGAFD4Z7NTa2h7mLJ1PERWs7U9xGJaDzy7B5mDf6HknP2N7FZ5rBNEEKD6SHRkoxrqnPhAuXki7fKWRewn8JhGr",
  "key2": "5YXTeb1KoRrmCm7y8DQEZMDsXmVZZCKwc9gR1W6Zqetc34EY2ukzqogf26RtGv6UzArYZdqUNzHXzpEYHUS279Pm",
  "key3": "2HKTFpfJidsgxbCe3rzsT7589LotDzgHFu7WCK12XJKFqa8xKhodc49cxkQbZxh4zaV69hdNksKZNJJ2TDy7zXXd",
  "key4": "5y5tnWj6knuYkWA8ESQND14PFDvRDRZZswmumUnTj1qXfDL9NFSNarsqcLgWqTrkbCdnaiepvdn7piih9pezWDmk",
  "key5": "5qFtNRkp9gZZpDqYgJkf4YuH118fmQBpojT71t3nAhvriMiZ714fXmU3mByQFvTRjWfcSoNmNhNTWeBekb8dobHY",
  "key6": "2vUUoD7Ppip5rexAnNuR5tU7s8MuK6Bh64GMxn1o237yY3X7Ym1qgd6Ba4vQHRiHyt5Lg6JwUYv8wrang2e9J1kU",
  "key7": "2UJta2UZpdJ8hA6g6zHqmqHG8E1BPKp983YKbjjKFGraj8y4Mw1jVYEHTcfMh2oZB5iR7zyGFymiGq4HqBaLCoEi",
  "key8": "5TeEGnnmtngj5EKrfabRR9TJ5Aw28PbVv5XPj14kTEiqtbzXCDBNoCkvpBuQJUjW9h4B8Z2N5KwYD67gCGjX4yQK",
  "key9": "2vHuMP7ec4KmSJqVUTbmEfP5uc9qiobh9AAZu7LxfYx8bHVfLL3DhiauMtrvDuVZaFmvuQH17HtLUXaozhJbb3Q6",
  "key10": "3Z699qqyXcYRy8jbNeSUnEf1Rf5HdebQSE81344fsLkT4FiGEgdz5nh9dv5vRrPnS9Zi81JNnp7yzjMrRMhwK1WE",
  "key11": "35eYsKdmakoV6GR9WtvGhKQzfL9HbRs8XQiYCxaxZfr6dS8ugtM47zKEAP1H4z43sUuwRpCy8VhreyR9GQQYuwr8",
  "key12": "3mDDE9WhhEjD95PDg3stQeXrYavDfmQu5wKd6L2Ld4H6skJrN9c37eJzFukmJQrAYAueeTwr1YwFmdaa9m8AzjNv",
  "key13": "49z4ZhcxcvYstrZgFU7iHWxdj5y43xbfM3D9wCQLFrE89sm9wWpAnVnkgmrm5Kby1VQP8ATSmKdRQJNGC3iu89q3",
  "key14": "cqpyiHiUWm2RTULfGx1p4GT9vbc3emGHyX9hfEx764ScospzGC55GR9RgA91zxHnUPxm12hVNaTMbWCiSABq8iT",
  "key15": "4QRJkqei4PMyJtQfwFjyYcFQDfHPyZvS2RcFrvC1SYPLCXQ89xBQBoCNMyxZjRyeDPEi41FrybezfF4cFR8XM29d",
  "key16": "fMneJwdwVyX8noBePTBfQje8CfGF24jS6GTGhib4uB4Z6pCp5ik7qmM5DKdgf77Ttq8mCkjM7ecyJBpE5ehg9oq",
  "key17": "4tx8adU8zkeJ9uRUUuMeFKgKBGAEpdg3B8BN3aAm96MVLZnaxGTHsfBikgfP1xchwnkue7ake3qSVJgrzBkX1rsH",
  "key18": "3QxV4pXWQYSRhEEoWDApreuEKvgKJsNx66TYg3PQfvn9NaLZ1jMtL2Bwx9dvgQe3WrPWZyfw4r1rEwoRyaKFYGEL",
  "key19": "3ovMWsyANtEca273w7HRHcWgvfvTEBGcwHvjWLBhXbcYyyfYV5JorA95o4w6Rc4qhxVch1hHE6vL3A4vmHE8TMRa",
  "key20": "3KWvogKPynLvrdQfYkheE96rQtZ9bhsD8jvTKaokLrQBqNzEWkxNEdpigzh8sYcuGss2wjjDecRKGMU4vWM8DCxk",
  "key21": "2LZbGZ2sg3eWeSXdEVZFb3ENp2RsohMVXHJdwuVzTxWKx9KRFrsJLR44Ae9fq6Ge5ewHECMR6knpvoUvvs1vKocJ",
  "key22": "3NPE61XDvBpzYFkTh1XU3KR2KX6k4gfrMaspNd5WL2GpJWGZo2Fw9pQm7viP35Z8kPkcjZgzFE1BHGeuHmC2TJcV",
  "key23": "5nY76uB9gCVdrAPbS7D7r8s7XEN8gEn5ouUAd2dXX9Zgo6Prdko7Hz8UhUkFnVknTCVQkpZfMhjEBEq2G2VxF1cY",
  "key24": "4swCm4gReN3WMAWdrxJgiW98Hai5o5a8XtphNd6XRQ1aKfK5C4tfhyEd49zEzsLThJPc7Pv46tTetdgAsaoArZJV",
  "key25": "2JJJgNgy5DWwWNH2WMMg4L21gF83RWDfnzSBVa733GVCEQ7LEsHYGWHNJM8wEHzmromVttCmpuHbAx4gCXWmNX7T",
  "key26": "4t18J7unPEoG9EMJd4gs8efrpfyRPNKCp6PGPZrmoevaf3WpSLf9ipm5GwSyUKEssGrBHrFtX9fguzXdZ5wS9WSt",
  "key27": "44MztiiLqviPfbgd4r3zSEP4yLE7yiyxt1zuZw9iTkbRkdESaArf8c3ELah9b2hQy9dAZDEbFd77S4RmfsRk8KbX",
  "key28": "eQM66Z7qsooPsKpH4YcGSBRpKBnD46fbn76d5hz2m9LorWxP5BPkBrJ8iobmEcKL2sYVbe17szmNVJCUa2rRYas",
  "key29": "4dKXFArfraNmcPGHzcFKV1yvTkmQ7KsZ8porNBnTVEwTMeMuVEwCayiTTs7kasBbJND8zdSDvz9NoPNeBZyhKZsY",
  "key30": "5WAKT3NEUnK4TdsJb6rYXZ1iDeaW2i1vBk5fNqy5k3p7uiswYw6oQY83y5tgqpnyPisZnqS5FAkDcfAUpZLMCuqk",
  "key31": "2XvxBXmdCUEHcE9wDsZQcJE5S9e7KtdC3W9nQckntZtWpRE5nqR7Udixx1gmZNxM7tNo5yDBvasdxRAhqrS5TgHp",
  "key32": "5LVW4scAYbJKFUdQnioZaKRc8vwmqRbX8kvgwgpy8vw93CYJcQqezdq1vt3YL1TJtwz8yTzxiYLrb3v9awALGAKi",
  "key33": "2PNnKq4UjhNbf7SeiiaGvnR66MHEHxRpbcrmSqdWwmFWhQLemzsDcspqkuyJVo1XzznQkbBRage4diWuDYpG5xsW"
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
