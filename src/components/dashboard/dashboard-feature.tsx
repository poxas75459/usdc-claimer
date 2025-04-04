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
    "MJu1MZYbGZ4C8WDEd1MN6nzSECGAWUm6Mq7NbMVyFJPnuyViAH4XEUeySVVafYhLUGjr5ZSv9QN4apqHNzUmAY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BaaqqdmQTQDoVPnmYabKEtnXeLAd4y3NrzDFeDCmwjvBviTqD73twTANqXURhs7oGWKXKoosrkctaQuPujhjAKU",
  "key1": "VnBvzCExWMN1oRYoR1C7gWob4up8vfkSTA7js4xnHw8Vw5JZD12dMVbfuhR6XN6YRHRmS4WAoZNKJqTcXHs1QB2",
  "key2": "34HN6QZKjxjuSaza4yve7HcpDxbuNW5x81n5uxzFfWrL3EH3BfX7K28pW1V7RGsJ9zAzc5jJBhDQgJjmxEmcpuPs",
  "key3": "vQV9gT6tKSpbKHqeviGMRYZLTbhv96pbk34tdGZaAs2Aj5AeMVC4bmM6opnoXhFPPk3F4FYh3hB39rdP5h81v9i",
  "key4": "2zJnJHonwcCKGPZxPydK24htTafx3hZWh3cCfRVMkLDEsT9hGix5YrDQcTWT3pgStmVfM9Hks2n8Xjj8xMqqaKEs",
  "key5": "4HpM6ueoD7pUkbrXJK2fFgqhV4Ri4ToQr71YcCeNb7aB6pNqECe2VdQgqagyEkq7MPX7Pi8axGk2wANYr79Ct1bM",
  "key6": "ucFpeaQxUYhQYrtieG6ABXwMfbXJ4F7ZLVgu5z36ohcHMByNuh48cE3G9qaHjpR54E5vFU6KeVPLN5cepyM7pFy",
  "key7": "4J2DSjbfDEU64iJyd3AXQ1uJbciBMMWHgLpGdbzCYPN3g5MowFxWtZd3GJfLnLaRQda65ZGTfvcEC7EbvvpeW6HC",
  "key8": "4JaVTdPC8G7J5j2qTBkP4ghgj7DSszMoqr1cSvfHrzwLJvxsgkcidxUWH5N9TDqnYtRafYvzjZWX5k5qCuwjGUoC",
  "key9": "2wFDaVqo1jFrAYQCVrBxQeeBjsjkcBRDN9keRC4aM8D3oYAh94EXmK1m2EZB1Bkjc2wk35gR3kpxrWjSa6NJNGFj",
  "key10": "5x1txkjkSbS4U3oG1HSMGAcfeYoT5wF8teC1iiEiqxKai361fKdj7bif51S25r5RoRZkLoH7uQkyAAtWvhxDTkg2",
  "key11": "5LfrWMU2Rf7HdUkmV4HXUQQKKwxzvnF9Kqv7Zotou7uB6pSJDbkCFZ8G3j7WYVBpXsHjgo1SNY62fzmW2Xh8BH5Z",
  "key12": "XNJnK4waWsxigYaWFsQRbixn4kBo62QXEu2jpN6N9MD5zJJY2bKMiq4HX3MAPPDDeyFUg87K4DirBKTCWyXiJ1x",
  "key13": "5khXb9MbhMeQ7E5BVDWH4BAjZKLERZ8Fh952DXsccpqkz4GayGwgyWPZ6zyt2vGyg621tdtauSdFrcD7Y7eTJSwG",
  "key14": "5CWWXi7jYmLqw4UrTXzs1KRSL7Q7mqeHtwErfgdSgmnYCFdzepuQ25ngF5qWx1724Ut6EgciraDDXjHqqTnNwwZN",
  "key15": "3DYrB9KsP497fbwp9f63AMAsf9N1MeGPBynJRJwLAY1aURtMotztNZJ2hsb8Pth3kMAHmXmHk6T2rszwV8HfTdYy",
  "key16": "5zvTDx6JxgBDZZSLPVDjtGrfqScpgxgQNn4Lhr2GFSDw54qJkbT5a6Tmerwae2UBKdsKcYNYC2B9Zp1WtnnSvARw",
  "key17": "2UfujsayCYzZf8X79Kmemnyk2X2QULxx9qR1Qd28k4Vmx3fyTGdKPXQenqvMsJ1iMt1yC8nYe2g7v4tXyG176sd2",
  "key18": "WtmkP15VrAiWeVGBU9aejHTjQSJV1XvTeTv8T8XpuFNmaQTz8j1AqK1ZsCjeGDrJUQJdbnaYpHzYRVdDu19FTpv",
  "key19": "4WJQXrg59bwj5Qnrz4FffcrkEvGi46xBfpu4k16cfKq7qRiGkFaesNZtRH6eSkosgSxSa4XWjXJF4fL9bbqWjWbk",
  "key20": "2n2NU9H5DL2n2bD3AmtcetuEJDpkQ8ExpcpkpSBawbp5WgnxLjVmCprwNuASaFmRAVEeqE6viv1CJeAHC2ZvJLmJ",
  "key21": "2pxtXzDhvUsCswoHeZFn2pazoTTXe5QohtKZYabUwBRWtCws3YJJLko6FqNfanVf6y6MCrSpZDTZxP8wfjbPRHpn",
  "key22": "qQgtfykAgni56rhQbpMTHbESE6MSD1UfacUKcCcSZ2mdWuYLv1eJJ2iEj8LfqdGY1deBBhhV3nidHmkfbGaZWSW",
  "key23": "31HA2cH4sUCNsQEJ3FojE7RqMTgEcJdvLaftLcQkZnxnz7B7mx7193JBwGKJButfwaC4iXoKerjM3Jg8XbhECigA",
  "key24": "4vnyZi3f8pQ4qZxmzQQZEg8XcU7sfHFEAa8sRPmVpVG5iP6Xv3fNACV3wzQJxCVNsK61u49iNK6jrB21fCN1KiH",
  "key25": "asoMim1xGKZT25rBuEs8aJUXzw8yAPJC3e2fioy293K6w5Q5GTZLnoExE3X8ZzsTj8JaQen4iRNDAY5oypmhHzX",
  "key26": "3Gav8WRvVEptfagATx5oirtCJVrUnfeYS8bh4QCk8ZJCKQgf63j8hbJopG79aXa4bjnmRHJTqSrqJS9Ftx2pdeC3",
  "key27": "5e1eMPFbo6FbxmNUCQ8i6nSNwabtizBmxVmZLBi6x6NFMqwcDEM8dCGCN9sr9fJ2FZmf2JG4CG5eSdwN2fBikgZv",
  "key28": "4TLiqRC3n1jr2ZQtVzn7vz656LJXfimmcf7myF9pA5rWNLmznuQRrc68Aom2um8h6piSVAzhZSpyF5bx1CLyxX4N",
  "key29": "4qX4dzuMDQgp2UCf1imeQtVsRzEsNTf444JbcWFE8LFH8Ns1h9n3LXCoLqdeM4XDgeAFEmaNwGJwUqLQkjg1Z8AH",
  "key30": "34VxcssEJ12X7PGQENBt7BaioDXH3anNjXS1JnhmMLZaD3JAqVs4p2EHaFWCgEiwreQEpvTq8SxzfNxmCmpJgyXm",
  "key31": "brJnAqkRebPvhwaQiHHQb7zsoiFxbQCc2ZmDqW2WVjFEjLWjSTNSUsr7uj8u6qk2eg5iPaBpVpQ4fmc8t3WU5Vs",
  "key32": "4TGVWzGYJp3jtbbrcxGgZ1R36cmRX66w5URb764wcAZrdW8dH9cLhbVjZu2vXNckCvDDkJLGcy54h7ZiLZgzC7rz",
  "key33": "67mHMKWbDr6HuhFgorwdKVXwKuyhffE55QXgBTg3DjrAfuAtx6hNixh4EMM29GEEBb9oHmp3XcZn3aGvXWDYaa3k",
  "key34": "55WyE2X76KELNJD5fBFw3thEKmjX4NotySkj3dPAbSUfobUqEiXynA2m8smPai876vpkaAN9UgL9wkfZASzWRD4D",
  "key35": "5F44AsQtJ7j8YYkQ4juR7HvnJkzNZ68rQF9apzd9E61nUy1xcVynYcMPgzu8umb6NVLAqngbS3SJG88hNQ3hRvCe",
  "key36": "4trToWo3umACrxs4mk8aBX9zGwNfkSShnwAfmcWFaECk9a9LSmgXpeW5mtmbxnfZbMY1JLRQpbtwX5RFCNXzcyb8",
  "key37": "41UhnNncBJYDtitzQk7aPSTuHgpKFSM5AEVmhhukEiniGhGC6LtX8RFuSPpWRG5bt1XzGc9hkWSMp9h9PCspxWQU",
  "key38": "2idaYTpWXXWo43pbbA9QfjwHX6pjKKfEd13XB7TQcALyNj6TeMcUpD5DLvhkoFSjZU4gmwen1SxmPgScxGBvzfmp",
  "key39": "4RAUXDM1tPGhHE3w9qEAvj1suYNhbfpmu2EP97p4FFDhAfGCTF39Yiy6KWY1UNTUyjUjkftWbPi14zNsQRsYFcJy",
  "key40": "4XYYqwno4vQSyGuqpa9ptfnSLJpgHBpp4FJVwznUtyTHTp2T9HshB6CfUmCc4Uz4kKnwtw1NwvDMsAxdzHNfUcQy",
  "key41": "4XAXWSEyDockcuto3zCS8EgmmrbVbmjeofFHRfzc3VYK9Dt31QD6aVZcKdX6SeAKWN6FrngNBt43ABLijTq6st3N",
  "key42": "46n8qDQzvowBgT4bdeGvqgc7YA3SvVToqoLs8qLe66WsXWMx6bsBaYfNw8jrHXECdgrySYfctsS4oYsxQcLSNZCh",
  "key43": "31vWQ3haM2jamGqCEPdTbA4ZquDqDDQChX985ZMNwKSGoRXBstkhRqcqs1Vqr29KsKHLVYUNczu2A5EM8xxBQ2tn",
  "key44": "3HNLQCRqRAotAvG5PD3MxwdbtMJNYwvPPAHqizwJnrMr19mqETUPXiNwx4qRFTzdvyUW2nYN3tZu7KKhG1Bcgq7L",
  "key45": "3CyT8tQv2PmfMec6nE2AABCFajZdWA4MD7PzFA73NYh8xr8xW5z7wo8r1ECfPL4JT4R87Gtcis7wbNeTUfA8japV",
  "key46": "2Zt5CFLdawGo6gFLcJL3rCboLew7uekpgSgqDJq5cd7vegNUnpLe3jgSo2YqWpZcB26Wgd13LBrvrmKS43eZuaNz",
  "key47": "TuMn9KP7p8wGKKPn9GDuRaG9y4Zzwj12ub326We5ico29qmhNapusJ3gPGcKCkH3BvuNQxT3FMvtgMYxUt6Q74k",
  "key48": "2FezfDFPdW53nev6w1v6CAcHSgDYX81HVYUAmRKr6ccjr2sZQqRYqGJ94LtF8QwH1DdrARGZr5CQ4eXFuYMomn9m",
  "key49": "5Zk5QMXrx9N9ztofdsBxjjvKUELT1BRoB8GWL8CTJMso552QAaDJcVE9gxrJmdJHns8heB9rbQ4E38izqBhrv5qt"
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
