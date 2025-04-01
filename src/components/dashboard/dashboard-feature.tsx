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
    "3EsSnpS1wFvG8yJKYmJrACUtLksapCyLNcHJihuY6NMPZe8sQyV81JGGvayxfxUPJndmnigVHFyXohD2gwk26qtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2835tus495YJKscNZUnSw3t7FHow5or7xjYifVV5NMPzuhLYuLo4QQLWey1y27XPWzK97GiNG3s2z12k3qx4e3UH",
  "key1": "48rBmgqXRZGakhP5j2Mx6k5gKXuyTcFST7L2cSrq6GJmhsEPRWzYThhJEwLL5R4xGGcfc9yYhmJbi9iP4Do3xGt9",
  "key2": "3Geb2Rmb3JxreKaX9j7L6Rf3NLgm4wBBJGuZy9sxLzTdphXRS8RrJH7dDayh6ft3yA4vvFuuoUVVJpbHmsdgTUHe",
  "key3": "9sfYPkAhEJakdPEfTng6nq5W8o95enz5JKTiLdnEn2HZcUJ94dtBQh3z3aq6CStUnPECvzK5oj9LvntmeyNURNi",
  "key4": "3XAh4VxKscXFTKvCkT5uw2h48NgkWg2nxtdusbrBoJVWiNpiqPNjjt4sz33ebBNCaYThyMb9qWdkLyW4Kvcafj8t",
  "key5": "N3n2GZQwLNWP9ZJRhrRpkSQU2Hqp13bviwiNPZEnZ4aRrGp4k4LnqXrHEG85StFQpkB27VzBVGqTHwDgoRQzxvk",
  "key6": "4pPgR3aB6QxkjTRtuadyxro5MezBuYrYrUMA36LcHMYVjimYZSn4JPsYU75MTKPtHykRfifnfD3mU7yDhzWt7uHi",
  "key7": "5YchdPKMveAX1ajTD9N3UVfEqcSnSop6HSTLJorZ7AJFLz1UQmGsuofVTn3CgkpxwhLxT9kgQTUGZ9nPHbsA1aWa",
  "key8": "2Y2iVaWgFMbb9ghRr6TEFmVstEYM1YMxK951LcnhfSJL6ebWorrJ5MNugTe424GqJxWd8xtuFgWCQm76LCCGC2Rr",
  "key9": "oXk9cMmneKRmFy2uUZ2R3D1j445hxTmnHDzwH9BtGTReMJGcWdnhzydQTjAz9uH3pCJsRCyYmAExkP9ZStZGTz3",
  "key10": "qdkV76P7TBveMEiyn9X3v994aZotSnhHS7BWg9nb3NhPviZyiyUX9oRgNi1FL6n1h9HzCQabdNxqdkNEMjpcpsS",
  "key11": "4JURTyiSQJJCLjPth7o6nT3KFP6kZttVPDnx4obsF9AePmQh2gpfrT2Br1QtKjaXJmRHR2qRiixBgboDwDXckqAx",
  "key12": "486MP5HZE7TrPDNs8JmrHftWcotCNMo3tntF1f34a3s7vvZGcVEJTmWwbFQmnAh28M1gxRUBCyfc2ePxNJrwQrQ",
  "key13": "4owpqhEbWUehYFG1L19hDw4omufKLFrUmDzp8GopfSLWTH46uhQr26KQY655Ys5WY8JqN2dc7roXN2SheQ2UfagB",
  "key14": "4TcZydk93eicAt9PZEjC8RdWzdS8JsG5du1fvxZWXpbxt9Za1o9UMdbBoBjXknMfmN7rEUttdaTcGCr9W4HWjpJf",
  "key15": "2BAkiqneWhTEgXhkHqf53QmsNMctDsR2LGfRm8t2ducdputibabVccjBKpGWf1ZS5ZRoert56joHu64rTaEuaPYa",
  "key16": "vUAwstBdK7pTNV4AoNwjncxcyTdKsNfPRJavYpfPr7eUaki6xyv52jpBQUJpHnrcSEbG6UBgsqNCDcfu5GEiyo9",
  "key17": "4VFv9NNoY55BCzpmede1n28HZG6spyrVxr8WWofnx5sjXxEPPjBDosK3sqvEukWbZdggiEYMnLNZoLZYzaAs26Bo",
  "key18": "5ujYtGo2h79REmtg66JuAg3J8pxLhu1SkGbJbd2LnWEYu7kQUSGhYnj7cG3PJmJojXSvajBy9cAFn64XJxF5RqQi",
  "key19": "5Gpz72ZYT5epAwaMitHvu1BdGfL4DAvHSBoyNqG3z486dmJzjGmV5LyT9uPgQJB2Cxse3SAxbbFyqyU1YGmh37Mc",
  "key20": "4TGLYGXYPiCGm1juNGrjVJrANYQbQEVg4goCMH8NZKkF9XWsm8ej4t27aBPL2oTXRAT5HeKr9EgAt2C4tqB2QyF2",
  "key21": "2r7Kk73Gjh49AwEB4ePnW2niBW62kudE1wwLSYPMwfr8BTPAwgr4UrtFWh5ubZidmBBTRWCctNDkiRMierZGebvj",
  "key22": "3SqVprTUQSRoT3mfwqzacGHqRL5zXiY7xKLvcwuP32Z8jXmYp9rvvLPrhiC6Gi3YPkH2QdtJTTMxF4XuFSKU5P4H",
  "key23": "4Fpuit1kaDmWDfFQ4cgHEorE1PVuFsgP7DxUFGSMPeFyUYbcU5otyDZasqtAKGuiGbsC5Xhhoquz7zpc7CNrZypK",
  "key24": "txHGTNZPB2YQxJBsgxZ9bC6qTFspCNFpE1hZxDNPjzFqJBvsdoDarTWk4oezLKeyqU56kJXNtg3qcXEUrgugwft",
  "key25": "DZLvrFKYdhNqMTsszDf8abSc7WW7x1GC45HCSVaNp7kjqoiTcaRtZz6etvy5qJ9JMg48J8VNQ5mrDb6i3ti3k2S",
  "key26": "x7NpaLstSwp22Exdd6xSdym7VXrwXTs29JcY5tyzgWFQBW5s5PLYyayyAc7osyB1Hg1a82bkyEeeXnvqMUx87u3",
  "key27": "56vTux33SRSF94632SGZFKJEgmn9SmJfJBEJbt1e8LEvUkvrbKQZ4q47wdBFWNUeGo1QY9gzoVDtXJ1yZiPWzC3q",
  "key28": "5Fwr2jaT8VkDFtuwW88QxMjhWZwdvSmdET9HoqK3fHTGR9JikYiaC4RR4SQ78HjpVXJJFrSBgGyT9RjMxsPinuJ2",
  "key29": "3g33F5yECyUcoxTHpmjDMtbCApKoBiXgBBGdhAiBCRBunMr5bzoeW7Z8ZMqk8bHZmLUthC6xKWwRFyywKvXVVrcA",
  "key30": "5QSVyWfE2ddwKajMtVWuGxjXNub6vWpUGzopPJFQtLBR9VFwa4yZ6X7imkxsEYmqpjjNNbdd9CFuTvTJUCto2dC8",
  "key31": "2iXx6osVk8VCSW8pqxqXVn7xACTSSUSzAcfXRCgoT15nufj3PCFQLm8jgDu9x2mWGQ9L97Ke1o9KZPtD6TrcrqYk",
  "key32": "5mZw5jd3fD6K4rtHvyD652vxTeeYR2Y7hbSyUWtgYJ1Grch8Wit8uhgFCgdVA9Q7zPf3bXr2guBAeZcWs8QR9qA2",
  "key33": "53yrpxA1Gnw6jwBTZvfHm95X6GKV64kgxc4xTRVmC7Qg3EBx1Qbbba42ojmMVXMrXfpd819Nn9UjsdYqDGZvwruz",
  "key34": "2L1HojBw3Gc3xYN8MBAJgVU8baASVCzV1iTsdkVif6bSYubnpknYvCoHWyyzcxWaH6LyvgK5wkEYQ56Ux1Zzh4SD",
  "key35": "a5cu4MKpiTz2mhpuvGyCh5WTQFZC2HxkvJwU2JJaERdwRQMkQuNFe6SeHB77a3Gq2xYBUmt25YicT9nUMMgMBzD",
  "key36": "2DZuqVuuervj8YNxRBFaWpKpoxvkQsCecbnTWt2LjrwodbMVj61zEX97NXqMVAtAonyRc1XCQRE4trnts3hqigCF",
  "key37": "5QVxSLvBtyFdAtQ76s8EeAovWvSZAfSrQNBZJZHPdt2yj3wGqzLhQKSRWJc8hHyREz9Vcp9kPfcUS1TXeXg2vD8m",
  "key38": "24W7Myp2yTTzTGdhQfuixQyPQ3Nt8vT8H5RFZMHabYjJ5jDp9BGhPWyVZhBkazhBtG6FKVN98sbfVLW1hQa2ioqV",
  "key39": "36hMhAipPbFJ4cFj197vrV3MoWo716GdPY3wrerYeR7zSRUUoJb5b3yMseBTsXHZRPHNfKgYXWee1126L5F154As",
  "key40": "61kWRw9FcqGobUGxmP1xwKbChYrxqgEGgA6jMi34ZrGGeUdaodDypWNG6qUh2NJAvFAv4hLxARqoh86pqt6fHLsU",
  "key41": "3uAmEJbQmjYQsHs4mvfa3UH8GyRLK1TgA7Cj1dfg8GwiN4JkPTkGiubcPsfMajWpdhgwSfrojgpbQ1SameaVLDKG",
  "key42": "5MTZ7b5yz91S7B1M2Dfhe8JdtaT32x84VpeRLFecoBJZwWRGcWUBubvktpszcYou9NjNprd4ojr1tSvnH4UoimHk",
  "key43": "DNzU1DGFWCUfYWrXkCBjSRdGMaWEfwGXhBErVVV7LBErXLqYbfthqMaLnpYiwqF5wptfzTJNpKpa2kF8oEcjVgY",
  "key44": "3rzrxWUHB5br1FESJQ2kiLfgdQNG9hyGKYJSndS7thvfF3sKKjJTztheHP7e24JwFsbpWiGeyqCynfENkUq7coet",
  "key45": "4nb3WgKjjSRnKKkXLzUaoi93R1YATNV6kqkatdDnRdSJmTAu9UXFk4he7N767qJ2Zyou34RDsGEbVSCYvAGQ4j4L",
  "key46": "5H6DexjRnD2RuAHtB5MkYucse71NPcvnxyQXWVuwmmeTKeEKcX5GB42zyEmx5xagDXRYLBpqqwWcavkuZJqytX1v",
  "key47": "QSbZk16W6LB4EBPUpX8BHgJ4QidR2Xficr3FMcDAmdntGAZeoB6nk4JaAQrmnqmFQhe7FGxQAhXcxPbpiSp1KPV",
  "key48": "ZVRK5uoLmDcQR3bKKQpPQs1k6PPV7Dp5p9s5aqsagKUsC1DFFWobhMjVFtxxa4EuTEewhXYnSxpswGrVLRniZ86"
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
