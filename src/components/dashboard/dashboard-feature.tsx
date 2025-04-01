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
    "i8orUyS8bvYwLcrebdsPEWmtUSeWDDPQSkfExB2QTjawtmBSa81HpRqXVN6tErgiAb2xTGkKcB4n4svFDTNcaYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nYufVf5fFuU5mdFN8Sc7y7Cu1okvnEGBk4Fqzdo5xBdjb4fZZTGkUhTJTM4iGdbjiLwTxMQmydzBBpF6Rpjtxua",
  "key1": "2fvNu6N4ZeQwJ4LrcszE4HJNGih1aWLtx69LAu6X11MkhfNFFsNXEZHmvJYSxiudnxGVGB9ehGCa5nXRtuvV6ucq",
  "key2": "2sxVW8dwxx6eKXWNbFe5as9mYoHcGXmcwBngWnxUGhUfeH5yKGcVTGxp1Dd7UohFE87dQQHGymzpdQ3jSf7e39hv",
  "key3": "2xcJcLu2HZhsRSz84p9gnr9zJY4FEsPuVqsye9s1wACLmhN1srszzc8dBut1t3dAiU2VX2yHZb1wtZc8BYiQXBRJ",
  "key4": "54yzHKDoKJ79BR8UyEXLwM44pp9etEMgetAfzK5wgC1DAhVZnZyAbsWSs8oWKmW32CUxdhqTDshZG46pxuTdUK4M",
  "key5": "4eanF2t5gFgN4uMthMDuiMixoTVgVE1fHE2qUsDDJtU1Zau7kBRcxusbdTdD6BySnHnFbCGvCkxp12STfZGFWJTr",
  "key6": "3CsGPb1cKdwdWaQ55ArrM5Zuy3fEaePLx2jXgHHnsCHw9SAsFmTgaH5DWAXuVfGy71z6SzSaPS3kEdG33wLJMhjH",
  "key7": "5mYH1gHBNtWXKPWYEaS9CG2FSif7N69wDEggDtCBQ7gq2ciUDS5RfJPqyDicJiRYwpvJYc4Lu8gb6YmevkkEopto",
  "key8": "5rkCzjWZiw4bMjvFQzWSFZyjY3MPe5UvWjdB5jLTuNVC5WyTdzsAmybyhRmte35i8wD47vRDYyDVwsFicPdbSwZn",
  "key9": "pUss3F5n2AYaZ8dnsApcJ9dqhiLno1NJ3LiiSHcsR3YVP51JpB63Bp7xqrEKV1jDn4XgMKAbUKoPctwRJZNu4t3",
  "key10": "5xfHfLUvcoa5MxsJjqtXkKRn4G9VqkdhweGikd4HuHShF7irBgw3uRYKj8cU1QNTk1hevamhdQ1mNLgp6qrQHmyq",
  "key11": "3hJg3ZYsBysaP3EymwSymnH3dTRef7ynmoCRyFFoXnXpceexbUFoCTMVu7iYYR3Jt9pE6eX4cgiUg3gYgukogwEk",
  "key12": "jufhT43fZgRASJaUwh75g2iyDMjcihMmyEKfSpw3XU73Ak27bNNvsJRUH4NAzBqs1aS3LrdfaSD4HpLYF4QPxQC",
  "key13": "4Uu9uQiAPj3BNLpRZyTUhMjQmsqzBxdLPReqEKeH5LLxSHCUJ4NYN8cVcVLfN2az6oWXurSUjYTbrHYj23Dh1Gxv",
  "key14": "3BATdHdpDvfKdNnJbbzckrPHNWLpG3crwnT7gisXnSj1yMRmdCbJE5SPXLyktBaoQDYzqcjJ75FSazhuTKHgZN2j",
  "key15": "3TAFjXb9a4uF92dxptMeRFHFxVjGCWVMouTGk4pKmcVNvcLTyzFxPGp9K3SxHxE4aftxjo9mywagfqJUKxbkVzTH",
  "key16": "YbgzoMSYrh2S6o67QZDkHuUtSWPKJWhvtZfasfnQZMWwt9z7vbU4A7pjaXVoerVEDXAQjECAHyWWuZtsesE6Zmp",
  "key17": "VcAjBZRazJ51hDTGUA96F59fpfPvKwbj3YLHm5wj18UhQtmzDdGtUY8pazTfAYtpTxyvJGhSFES4yUsZ59QCXDS",
  "key18": "dYf1kdskcEeEHQPFec8ahcGB6Kkdj82TWVDjVbe6X1KS5YXiaASLFno8ui7tQLD4LeQZoNK6n4BLcPG14Z3hHWU",
  "key19": "37Cfp17MV2o8YusbTRa1zkcFuApWhT2M8RM3oBV36PYpywFbuyn2nQdgaNbhzoicjBnqj3nwqYxzMz36uV5qmNMo",
  "key20": "3GTx5MxyFpGwcerRxkeK5eveRrXthtiGHkCdk1Q3aaFQ7imVBzUjbRf5CoUfVUSgTbL1HSxNsF4tAk1jqopWvzUZ",
  "key21": "5kW4u1GQgNk8H6MiTH1tzVqoZvGJe48RCnTMD5xC1PUPfP4oeUXw949vaczRJzb4vAeDgCupJLzAZixK3uhXPQps",
  "key22": "5gfYEVLQq5GsWmZjR3pa9P9pbb3eVkDcukFYwx3hVW1BVarq7V2i1hUtrCsVps9HwKSx7k4razvSViRkCduCFV8P",
  "key23": "5eXFDVZ7PfiYA2yPUQweSZRRs85yk7ZmeMAfTkTTuXHSoFHnYSbwPT4JsjuXJfnwpopTCmJ3GpL111UkxbWW2VrL",
  "key24": "4mMRedLf8cdw6nUPm4cqX3tZagSLZboL4b8a6NTCQuhtSLcHaNZDuSYSusphtN9heABaonbmgZUWqg4isBKAT45F",
  "key25": "4Ryikok5xgoqxDLVudB1WJD1dMst5NFJjnvh5jGcqpZKqCpqE57ThTYyDo5XeQLgCrJUceMoP4SKtEonUHppeyAz",
  "key26": "28iUckBcqNLzpCBkC13oChzvjwdqYMABQjZB9qNyi4kncXW5mW1chbGo4TcMZaBz5TqLTVpfwjwbYwyfjqtQAqs6",
  "key27": "3GKwBTv8gmQh6mXjAh5ohHrLRqqoubXnWRZBdvMpFABQDd9S5DpRKEDBuSkM79Sj9Lc8uVtb8g7nV5Cu8jtJTBJj",
  "key28": "5KHpqCWKQCtAj1EBuCRKiHJXnq3HzgL8ykxm4pAVUUubnsmai2qjpBCRMcEagMT8tFGwnxP24NJGw8gaR2PBuqzX",
  "key29": "4erB8xiixbvo6bj3H7ePwJDbzvSamBpYpD5z7m5TCiCPJEirnwLCMWyzPKtk6im6AfDSpwrBcRERDNukU1pfsTPs",
  "key30": "589pC5fFygC4crhdJYnjpwwjZCkzJDHiVbfsZ6cKvvYFb2s2Ja4JpyCdFBLU7JQcWv8drN9QHN21kConPfpBVEDy",
  "key31": "tdcG2JkyagpzWKAdUgUF6cqqApyNUabuf5fTcDSE8guWfdRhCGpiR3yRgRRqvfEHRzUtK5yKvBtuMhpmQHvUksw",
  "key32": "2Xm3TqVLFwD4wqGcRi2CR4dFpbZKvqqe8jTUmSYctqCa6Diafh5qjadtJXxRFmwspfcUc8h1ivSU2MwhvJKwVmhr",
  "key33": "u9bFJxaPUAuMvd1MuMxFnZJF2LRVbGHyXJJ87UispCpScRah4dko7ELzAB8jLeiEZn5psvbu9LUsZxAThkhmnGA",
  "key34": "3yionUZkBRsgqRHxJLYDCFd1hdtVZkPwpn284h8uNiiX7iySbWWzQHZwTzDLazhmv5etbDNXvqpRFjq17kFamGrf",
  "key35": "Cd6YPoJtg3yS7PtTh9sznGUwt5A6Pv7VGmPdzmRuNrMz51Tc2usm3iTZR6zHUJMqz1YzigyeLREKQYk2G9b1Mso",
  "key36": "cQJxztA3HqHP3J9MBijqWJPmxbZR4o8Tfar4oS3ts9t7Zc2JtBq3KfZMHyUBowXDRCgEQ1iWeQg6wJ3c1WhNsKY",
  "key37": "5hHhuzwfHjWHgcUU8Bwnt1JVrejVm87YhV6zUnhySWzCAjm6TzvqM3J7prUP5kJK12JMwqfZfi1WW2oh6kviErFY",
  "key38": "xskUGGbyUypS4YVLacb55zf2syfG1tWjN8hNbT6iR7fpoAD3fhnVtE98wxKbimM2vVYjDeSMZzibHFrcCN74Knj",
  "key39": "3zj7hjnk85UpcKxXYh1sWfPZjHmb4q2Avzshfr3Af2wVp2PwDMy2uucFNSyP6WZde5qezWoNxSUnMYtMktPnxntD",
  "key40": "4i3XrdvRRkkmnPDpxVPwCy6MybWL75WEyCJBYxRvMMsR1NmzyxUZnbyBpnjw7PJB93FB5sv5N6wjao8ebHqCCS85",
  "key41": "4gr7uSu4JsFjYkWspiTAbjsDjrKYzENXmunnr7RChP6ysnkW2bLPCzgsku5DuR7HZfwafdJM353UCLhiStaSrAwt",
  "key42": "3LsgMXTmRgd6QGcLFVxQN1VcW6UuRtEWHXeN7iCba59Ba79dgYqo5nZCcPuY7Bf2cvE4JBfguqBECMiEu45iPq5C",
  "key43": "2US1LgDCpxrzWVVZS3C2HPvnAsG7F1CeHQgRLFnW1XZVGYp2Y3qJgbx8ZwNKN5t68gaKZWfKQYzorXxifNPigNkE",
  "key44": "4SRqHNkktqvXAxZWprmY7bLEUvb43UqLnsryTFekRkS4QLKGFHSRoAzwFhpHcxc4WwFfHzPMZZvXRW5DgcDgL5VF",
  "key45": "3CVBAmEiTZwQEvT88ehKpkBmErypRNNWr8bCehmEnVXvsrctMqyY6rfHdfk4Box166FHE7tvQsR6HEHtbyAekfhN"
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
