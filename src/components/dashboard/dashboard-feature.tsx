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
    "hA7Zyv9QYFW6bU6iC3vrEPraimFaVDFeXEe6kNcJ2ScN9vpzV8883XQ6BUnN2BVygkuJhjyR2toMdHrHg9X94vi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q9pjtdyoUDioDZtd1G5mcoAq7EAQPLTP1yvpQca3khpxBj72NZchjC951oex5Hnmw1pp6bjv7anMS3Qe2XSQBcg",
  "key1": "AaJe5boR9E12iViYPpSQn8xYofGaBAKHaUzNB8mvzsYMFPr6bRDDJ9aJHUk7ZHSb2DaBZuM1CY6vB7ZL8MgT4wu",
  "key2": "2MhGEx1jTFYMQMpUV4kWYNsvCf8t8aTwUKNBsL5Fy6QWcBDWQJxgJFR9P3jsxF6JSEzWgwUjcSJdLAMfELX39vM4",
  "key3": "3qgGuZdFBUmBv7jF2KfgqEdLxyraZ7nwq66MH8YTXoxtoBV3smM4ohjE8jjocvoGkXVcDCUfVMz1Lc2KoUBk8gTT",
  "key4": "5M1qRZGb5CfArjkaffkGdvieTVfX9YsBCPxJCsQ99N2j1nwTdrZ1x1CvyYHqNMWsctiEkji4R5w3AdADjaWq2szf",
  "key5": "3HuBahL2PVfPS2aWXJAfZZLubbXdd9WxF622UzAgBToK1Xy1DFqD8qQkvCHzEDXfEvW1wtbzrdFj8LEbaeD2x5Qz",
  "key6": "1Vkyjdf2LvHUCMj2t73wVRtVXJmSF5TXmEM6Bfxfg4Vrc5RTHddhrKt95ohajt2MYnndE9Rjea6NmsVeRWARd9q",
  "key7": "4EvTxwdsc6tXiY832zwgrqErhfD1QByrgpEqrE4shZeztSwaavjTMy27kDNnvFJgmK7spsgzYsXRGRnojS38Ryxv",
  "key8": "t1gZ8o9AZF6Ac5xJCApkqPVDYkHorrM9srACoETMhNGmrwWLLmdYn8ZFGUi9EYCp7vPMJrR8RVQhxKXCzUdXX7c",
  "key9": "7J3Fw8AyAhPKTs2Xt38v7jtc3u9phEfWBBbE3mB4SAmWKMGeWw6kHsYzUSVybxecvKNbiz9EFpGvEXJRhzRB8Lo",
  "key10": "WJcxfAoUwgkPvDSJ6yeAyuyhWqW2ERAFKjHc2Vcp8NuX26UT9AdQhRPeuHmeD5oZtKYR8fH7HaL4RvPRQc5BWhb",
  "key11": "337YLEwZHHgUpnZ4HJ9JHc6f7wFQ6EurL844JYRfXSVWvV3CMV5ATicSADyrVcctUjMjV91LzfsFVwvU8yCDuB1y",
  "key12": "2WDpokqRnFqhcHmL9oKzrojTD66XMTzrUSVsDp3xMJqgx1np4Rj5oaquWGkjpQnpGozfkAbvp6PYP1cRXjUNuyh1",
  "key13": "3fCsiN3YzC7aYUDFxcig6VtmgiKRkZp8vMtvB91ZMbXeA6yQ5sTGDhPCp8gDufDesj7x7tT1istewoxJMEkzFHBC",
  "key14": "47uvhwyQqxQPmTgjkmsFo9BqsHHmQ2y2nf8jFLbjgXeNAz4Zx1GCHhm1ZqVmtiYrth5VCUnFsPXcfiNwNVUjAv8p",
  "key15": "5EWnLHyRqXfCusD2crwJqirFfNqvHx4AdKdWCbD4NgKBLdtSE8yyESTTFVSoZujypm2bkE4QTUZubeNmvKMP7SoW",
  "key16": "5mU7LFbuZJvxKZqfUFrw1z4UYaFcJGmgAEi4GMSYw9uyNaiLPXuSXaY6v3dBmYyXDZjUfLEmw37XiPC3ovrixYGg",
  "key17": "4AcWhr9v4QrTos5R9P248m7MJRsQ6qCc1mZzp9jcj7HKToovqcxAMpuR1FgydeZFonUMjYY2yddn1r57ovohkoSz",
  "key18": "4ozZBin9wSG9ihSsYekJ8JFzyZ5T8McgmyAnBabqTJhFNcinJFu8GT9yNh1xN2aGr6dN75E7UuGrmxfHJL2LS1Y2",
  "key19": "3JGBZ81wANXdNDTtF7DbPxQ4h5UhKpZqrerDuq97ayiKtDCcuTGRncUmzKcUZxo1cLj6cPqsfgBD6oy4egR6QLAb",
  "key20": "5MyQURXTGttPX8QodX4RRU83asFXJigjDdmoh5oWCXYd45Zbfr6565Ufgz2WJims4CoCGeKpzr8b2BnhZ74sTDSt",
  "key21": "2FGiERHEej9T538BqTd6BstEXbTTFJncd5UCPJFRiZ4PJ4ufrJaeXqJ8rHgpCmFwQdFkR5beAYy5usDBsTG4uDUF",
  "key22": "44v5kqUwmHvG522HYTVTUzXxQvU5SzyNqcismxE9R3Z3j25Mqt23c33bGY5SxVZ1CbKnfDhBerifcNpSP2cMTJeS",
  "key23": "3jrKkZUbu11Zf9WDmf8xqRyyHbBBJdQ6GXS2446xBcFttSYxrFVCBoCsMhQL5BF68fKHMAZJkMfM6ZFuvQFbXnTc",
  "key24": "FYQRgRbD2UkTDbKkXLSXcLtucf4HRoyTXPjhjUMBrUtobezWH6smEDzLRfUgamXUTRELYHi9uwBewxSHQfRLish",
  "key25": "66ATt3QuZSoEo2CxuVSVopd7efpPSz2igpWaed6iGmHNCfzyT1t491ZRqxVTmFKgsPKTbNbNtECuzisoRtz3doLQ",
  "key26": "RXaN8PUPsNpor5c1uGGxt29L9Ws3WXEWVdb3VcKDDTxjASKDf7LEB9PbG1uAKuFVX4m218P2Hba6UQPGGqTG99K",
  "key27": "5jmyUXviMdmmkzDbogAYQDBKEdWbQZgHNJokCNXJAQqnC2y2HfqvkkkWCm2WTi8hYjEhGUFQwTBZU4JwDHfp17Fv",
  "key28": "43z5j3o8KjJmSfahHVxDZ88sUZKg88si3JVbv2Twg6u1pYBHZ5kso4FkfTuBNES5xpjrMKBVPc1vgodZhJN2AjGV",
  "key29": "2fgr35D8VamnUNXmJaVdJr5JjBjS5cKJkTFKVUqPqRQsAqtQtRGHKPUS3U8UUShM4nyhY8AqAmzWgeLjEuznMFsA",
  "key30": "Z2xzhFVA1BidQTfi5QuZCMyC3Wrze928AZSVy8S4BuCh8TWsKBf1vckrR2BGEYrzqpxcZ7wpr2pUC3q7Cw7YHF5",
  "key31": "ryEx9onwBcCYyww1RdfCZaPkH4qAi42iNfQxtw44gXtDcjQxoqiY2ArMXiWTcrXDwvM8EQw9EMn8sWQg2xNPnGA",
  "key32": "5jSsszH7PuPrv2Us6EcjmxdLFi3cFDWUZpV537DZmW62U6NF1DXqYhfba9czFp4cdqRKj3N7U8hG6CkLvUnCZuXA",
  "key33": "3bUm8wHe8FR8wu9UZWfsKgTDPuY5wJuBxfwBosbxxWHWkVsoghRybYKtLryDJEDJNjZcokXYu9NgfcCWrx2iEi4F",
  "key34": "kWaebDmpUqsSAYFNrAbgByEyJKJxT6LtnMhDG4pUyN63wCmf6oPTT5ETvPhATwcGMGVdZv1BsSTpRK79y1mXHvv",
  "key35": "Cid8AU7V2noLz12TpZGi2SAx37T3DLL3ie5tDncYvvxgu5G6QyCRNyKxJss6dbknKS4pgXdjCxjKhiJibusnrTv",
  "key36": "122n5VLDw5muvAmFJ2cTFURJwzYQPJ93EQ7QETr2dpgpGgfaQrEeLmXP6M2VYheXMCN7eHdM9TGenj8qMt3xToRv",
  "key37": "2oqDirhnPbro4J2aTayUiVwkK4z8sZ2aqffFgLk6EhNfmxh79k4rgfffwVYKHuCWGuN7iWeqBQs73ie7DPBy1cvp",
  "key38": "34bCiyDjcz8p4SVHnCXKGTTwLhvgt62ZaGtwbvNh5fr2t36xxCku2JUTZ8g14DnsJQni7bgbaAf1VvRfv6eYpMYP",
  "key39": "4dcfSHEqH9GfDoHkzdrSsuG7xyoeJZzq6DB2TjDAbwck5t8FQ5vUM6K9sGUheRBXYrt1zeiRjbB5YdBrg3447KGx",
  "key40": "mApUd6LB2WNNK9o9FwaCBYcPyX1VPn4uvjfLyFFQ787BgSatPrAGAMJ8E7bmjtuyUhVixtvdoZJdgkfcLE5M6D7"
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
