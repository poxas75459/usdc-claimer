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
    "2bmtrbt1fwVgMhdBTRGMNLN76EacGCi7o5dN96pCEWA4DyWiktrLgqkRBh211F5fgr9grGxMTNEvucKbMmoMjW37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WSWdwCMfwPTe56tPsSdAKrqPoiWh7U5KWSdoQEg5yXqmVjmaEhoVciYFhsst6FzFNAf694qfRKJmxPoRGtRWAw7",
  "key1": "51x96uy5CAdWt8vX63jLXDbfMWZP2TLQCSZu29CFZVEzgyCbbD3K7hCo5DM2DQKnqJKNBYSyqvK1m3gHeA3a3S1M",
  "key2": "4Zf4etfPcrRaA7gSBTNiQnEMUXRQDaLSjXay34HJAckPwHoC3RySkcznNBqPgncUw94XkL6VqkzcewdaFuKyV4Df",
  "key3": "4hwZ9XA2airpL2UyNz4bn3c9e8xrgnxLnxCnAGQVaW6VtLXYeuVRxRxFx7aW3y1YEMu3wywQKEDn2rxwvuWzmyKR",
  "key4": "2dYBpLq6bdxqsXmTFZyFEq1sX8v7CZrmHdp9wztH6UyniU4VjvSMMmEGSXTtN9SzfiPdFNV9XWFK4bYGhHzihocF",
  "key5": "5P6nCWVjbRH8PgncMKK2R62Krt9V2t9uFUBv4NWB9Vu1K5SosvM8AGVxvc4Hino3U7YWf9Stkn2t5GvnADXUQA8h",
  "key6": "3qd3QdASXCM3mTcuyAj67a22jd8Pmu52B61cy6P2VAY4CsfHrUZsHx6zSNeK2wH56kWonzu1SGS22bNCr7ZuSAcp",
  "key7": "3GtbnE5Wk968pSwSXg6s6sY16ZqGR86TqjMCYrgwfP9se3RH48PAXYRxWwqkvarbvvWQqLoWRWAu1jYPS8TWLeJn",
  "key8": "5wVc2NpdcFePpzd9LxQKFc6Byh7r5bzhC8KRNsTaDwJ9KXxwxQu23JVSN8jCfsUVDRTZcvnrpC6fscJ3tf2jw7bg",
  "key9": "58th5BaL177Tz82LBEyMYBWCqo8toUSUmfGHpikdB7PjJqswrQU1W7tjHVHEiHwySQexyoZ1zdAsEfmd1jBKvUsV",
  "key10": "5DqrihNt3vcrMhU3vLkqi2LtRxHUumDxPuKJhvrZXq2HzwvqUefSv2nA4SoRpfMvW1qsaqVTV2TB3s3QRyBP4qZP",
  "key11": "LGUptUa2hM6GoTCJbu7fyRF9wRbmp9FnCpJk4J8XPUhq6uwdzz5vsszv18GgFZirsTKCNZ9PZPJ6vPzpd2qkch2",
  "key12": "5AeoRv3F3Tkg7yWC2GshExxrWWjmFAxx86ua7gsMknedg7UhuLEzQU9oKn8ZFd4sRhWR4ccAgxHiS7srPxMrd9dR",
  "key13": "4K4a25NXhfGXa9thyeYXjMMrboEYHgzfsvxQikUpYNGnXR9n8TqZ8bKUNaRkTyTa8VixoRzEGaafZLzFXe16PuYY",
  "key14": "4XcMtqdyBimdPZuGQPFvaycik72SesTAhUEJUia3F76JuGjS3QZvZZ4vy12BncQjypAWD2HquaSgaT11LmA7kzpA",
  "key15": "3T8L5qhz8uhLwTX2j94xi64DrrLxkknhmUjesqN687MR3FLcLHxSBvUGD6ru7HyFHufFgQNFA4usj3M5WkqRMq1C",
  "key16": "26ANHhzpEjPLXhxsQbTyjsJfibxcJVUqzga2WxPsyUCjEoKys4VC8dDVraUMGrBJtnDxfYjSS2LqHrAgcZ3dynZ2",
  "key17": "2suXSNcruho7Z47vvjjxXBu8BAx1NX9JdXKtV6f9bgkW7Gve3FqWYXv6YsbSL55ZLV4WGypv6ArFxt1Xamt5Z9Dy",
  "key18": "65hh7jMUt6Mo3f4FMGTbo64idCJxK3Bcq5NqakSZbWZq1dRY5jUw7HwWo9MUojjpG8JLxzHQhwqFKkoL2hHTo5m6",
  "key19": "3jF8wkFRYxFAg6Wmh3EUh2unbwYsnegtUJ5d65nd3Q45Dp4Hh6L2tPCzdro5N6uEhJWoxBTjUamM8fxemvzQeEqb",
  "key20": "GiCKpCHYRjpiBz6MwEpEA38gTyoFLC91LcuFHVJZXmxzq1avgs6A2kMKYbFaj2NKfg2f76cTd8gFN5cBUep8zgH",
  "key21": "3u5mCBzh8uDH76PQVeWKBpF8H5TwwvjT5vnxh9zyB9AdkdQVF9jmTmbjRteTVGTMkPP3Am7eABdqZv5G9KhHcs97",
  "key22": "2A2oMufUnYFv2Gz68BPVHj7ba8K7KacD78wHyUSM36Zj87QtMnhX7tqfFF3keDzHxoKeYvp1owpJQXjotRUkPXQ5",
  "key23": "57iJYpcStxtNtDPajzuDevm9RF5UhQK3Km6oV4fogWWHqsG4v6z6qJZHfyULxojiGKB4ik1NADQgHCn8afBNjggN",
  "key24": "3pXTTVNFnHNCBRVTZ6NAUS8AUvSjpqW9hgt2xZnG2ZrcrgHJJDrGa4cLspiHXvgHiWbh9nTcMyCNxEywgiWBKthU",
  "key25": "2LPMkwbPGUdYaZ1JbP3yFMAMTHzFAYb2BFHRmGqqa1rrAxMvk8Eqs9kvsAuivw8qQKqHMj5owSGLZUNFZnMqth5y",
  "key26": "3bz49EKULjzUcem9e3kZozrATY3Bgh4GhQptLGToyoopoRnCHRpr1y6jiGLe2y8Qus9ij23n54v5ekunxtYWxz1S",
  "key27": "2cUoNmKPCcXkkE9cY9V3u6a7AM3Btagq4eCUagf2H7d7v7v1rk2NxpMLr4PfqesQrAqCTvakebbDDhm28hU9LGss",
  "key28": "35YLWwzPznUaE62ttYtCvoK4Scj88qqMhCqT47MLNqZTsXbAbzZttuxUgSkC1Zk7Xd3m8548Xkbacdtx4mybRa6L",
  "key29": "4xXFdWrAnz4dv8WTQHU9EiZng8ceFJZeCaHYHetaZeagCALjTpbBW4ukSCvbvGwuU5jREb2eCWHUHfTCCpop44AX",
  "key30": "xxCNVffgku8XedN3Erb1WU4KvrDBPPkobwBrPVd7rwU2yTP7YrduRcdBe7SFA7pCZG25ZMvRU3gevKj9v2kQ3UD",
  "key31": "4ou4BYBmysUBTB1HsWJXkszmvX71cBqqwoXWjeA5vwJhCdqfFpvZLW9SyrcZGsvVBnWV4h3qx2duXdADi5jvwzr7",
  "key32": "2BRyiaN1cwHXkmfhEmKBuAXKMj4i3whPMBRsGTgYge3vnkoixoj57MsiDgnJKEQfXgTdV7gaEBxaYWfZVL4w9MU9",
  "key33": "33VHJj3xZC9HvUJkb8YEf4G41sKhpxLabBeFpKjVDJAoPV126uDdFfz3vid2VqhiapaqCeySYYyfeKeurYxsm3MP",
  "key34": "5Z5W99sCqYnRKVZDwCxJDsaqiRYLhBiiiXARvgANvPn4rq3qTPPUs5Aebz3U33FMEks53fFQ7yparRvK8o4kTibe",
  "key35": "3Eq9M19LDxCXz1Bja5qmSedLL2SATjqCuzSaSBfqTKvnEy41Zue3wZ77fAFw1JET6MRDNVcqYw8tbQVZhACtSLtG",
  "key36": "4UiZr6UEuPvb2TWQ91XhvNmgie58HbUKW9LT6TXb4ngib3H4RqGkMbQwdr3QGHKLRsVMvUmFxgKPQEWziRB7ixNT",
  "key37": "59ozZYNeYXQLinXo4bpF5s8aTKQu7jTtKb61MsdGecsiXLe9opKo44P9213hXGayPi6A1uBgiZJg4zzFBrXLPjGE",
  "key38": "57YJ8c68nB3MFbDYPnFfMNMYgWvDxhobMVzGa7EKkEZqQ11WqefhNUZuQsBREFad7CkPbyzbbMt6LFAQEDN5gMYY",
  "key39": "2gNdMwVp4KEGk8t6XyJNx3apGbm1HmUCxw1yCago3Z4RSqVV4U1AzuKCSvecBPTXiJkmeX3xTRT6MF3Njbp8XGZ5",
  "key40": "5abthQa198nNFAx1AJCju81T6aFSBLEWiP434oSu3Lwk53x5ZKasU81Djb6jaywsMZur5kSeqn2cNSkjHRaw6ujS",
  "key41": "2CVd53Wy1bHX5tmtbZo611J72zh8mQSQn3TBTRSh5ZbKR1j2S11T23Azcz3b8iWzaC9HAYy8x617SR7aRRFRPqFp",
  "key42": "58zER3KeENkn8vcVeqGRAUiNVw2wLk9vkJEo611Wn8xWNR2pBmJ97xuMSk9xHxN8N2qT8Hm1NcPfMoH4s8beVVKy",
  "key43": "3LtYA3nQryAaqowbzMAEDFGo5CX7nVNWACTgwfmS2HZAaBmC1ggf1HBwTGTuN4wYs6g8KBpLQqBDDMDEjRAhFcL5",
  "key44": "3Pk2URSFZipp3FKQCJrkTWARcTNGhs582peqCUWFWbqyRWZnV3G9qgcswMFCtZ6YSJXjvs3a5q68Kmi5pzmmsSrV",
  "key45": "4454iRTT57ZR49h9pbodpXpkJkB3HgAPuETrrPfULHy7PiBmaACjeKj6skFQSHdzByos7LzJjv7MqRmfMC9UcJnh",
  "key46": "54fR3W1YSvaDuhsBsdFe5BuhDoMJgc2V8YypeenuSUqqhv4v5RgcRNoWHupzG3UNc5Rv5aUmXJ6uuyovSUzd6GTZ",
  "key47": "2xqjPgiGt8PWqvCfckxsursQ5DNXsQLYawiRu2Pe8ab3gJZTeLCKxKRk2nLGwUGG2J67uS5jAMrFLHP9Mignom4x",
  "key48": "2vVjW8hgEiARWqUCHy5PQFoKFwy2xG1F6C2ry6ZzvsGAErTWbCwnZF362eS4Fs48PN9it2bmDFmKoRMsQLhnr4LB",
  "key49": "5Zjzb4JxSKKDo2tzB2C5fMLLqA2zsy2zJtDJmx92yFvUqE14yk4Vfhi2Rav8zxvEeo4a9EWJxZRnjQf1Mde5CXTg"
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
