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
    "5HPDNAtYcft9hrQZ7ZNFPExyWcDiJCidAcUf8eRxiGJ79baMx867eZsYbFmRCZhcujxv9ajHnjF1WfAS24Tc9SYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jUfTLUQfUgL88KkX3mkgPsVVMY3PQ3KRz8DQpN8v4UEr8snfcY4icijWe9eZ2gpraWxGYKwgKP2AGmfMahQbMu8",
  "key1": "2NZhC1hwJK54ZMMgW5xU4G74ScJrNErvmHs56UeegBDfEH6rApvMTQ6LU3TeErCWRrTpnxtPh1tVExaK342EpbJ",
  "key2": "5Vuac1T2sdb4AFZimieLg3HYAPjzQ3AZfa1fivXYeVh2hghiuUB6cup6iPvLRqWFLqGW4amYxdeAi9jb7G9tfPnt",
  "key3": "3amekqcv6ZePik9FfaR6Dg4mVJ4tqYtSHkL2w4qNcWHwPUKhNpqqiiWMhgYjoPfURkaWtYWwEKtz5aR41eGXf2mP",
  "key4": "3nE3XTjXgQHHXPFFPRxeDwqn8hZPdppU3bwETqxxSTQ3NVkXZojRHkheZtdLZ32K6kLTrDXYqT15EmW3LX2nFq9z",
  "key5": "iAYtYSCobBbNxedRfWBHnhuskzabjoBrAFEPSgZ92sop5U2QJLCXmEZnx8ZeiiRPdzizTxbAwGGJ1B2VHc7rUf9",
  "key6": "4yruXkYggY2AUEwE2dKEivo8ToEmEBq5R39aDTJGjnXkpL7DCtugzEttuDHn7gFfSb4QS1hFqTaR3bCtyQU6JsMz",
  "key7": "4k9A7jUbuZUHDme3EBWZy9uQyvumVCY7Bj5jtCVUEsjjRnBzSWFbjSAhimicuoCH4c5o3diG85Ksf1nttSwpQ2hU",
  "key8": "m4onv2QS5ZE663yjs7XhdyptkAnb5iwT7SyUmYwizEQSW8MoH5J7doV99AP2mtmCB51YBrPC13mZNWss8exZSR3",
  "key9": "3YHGPKsntZcGSRU8SgwDPELcyZJLsQT31Ub1Z5GkTbTxgjyyrRVoBJUojE8bENJw7sjUddCEDGVh2rSW2Q8fnkJm",
  "key10": "4dBJkK5Pe8weNuPPjDsuF48A7xS7np2FgdQdiMo9hh75vxfPmQ85uhwZqUnSXNR6mf4Bt2XMXutFwquoVMV8FKHW",
  "key11": "4AVKmfZdX3m3yBhrncg9fTqBXZg1vvfxVX1gqHPwUeoDuCAyH3PeKSngtnjAys4nP951Qr4YCoJXYTBL8Y1H8KCt",
  "key12": "WcW6VP8iSeDuSLpYDtmD65VxTFcu8rt2AC9kSyxhZJ4U4Mum2dyyWxzCrNayMr3kFN1i6b9Gi4DZbQjw1M7SYtZ",
  "key13": "5sGgBbD1qa4A5JvUkig85vnXQbWyAWHYhm7bt9TzEmQUGSm1iDT2EVfFtCnFGeYtcgVvUHL554t5MWzzMCGUwgqa",
  "key14": "32wsjbwvxFWeftbMr2PHpArjq6drHyTW16uxCFrnJ6Ea4xwqBaNJpe2n3u9REgjQNJocRQTFQm7o4EDKoEBtiecX",
  "key15": "QbS8Fao4n5pjuMbnvStdDVruqcYX7CgtkPjPCRULHpanvC3tbABK8ZezcQSX77vpcdifMRpHdFPYAjTE3TjzuBY",
  "key16": "39h3k1JUR6mxuQjXufZogPvaLXwEjrkP9BmvekkFJcAsuoRMPAjRRiTZeabbP89diptJX4hLiF4seFH9KCV3YKr",
  "key17": "5wouG7mexRUdbueZj2TfcmmTK4MVXVghDT2Q27Sfhc2poJdfJ9pwF1V24n7CZ1G1Lt21mH2gwz1CVDLX4dwxFRY4",
  "key18": "5npdSpiuN4FFf4fR69RAZnFbNaMfSWUk2XGMoHVrk2N72jzcgApQzxk78jZbQmbWwX76mCvq2trL7TTav4QLYqb4",
  "key19": "2gf6FUoY3awXvy1iMgDudhJb3ZhpKiJJzQ2pEVLZcXhWYnTB4Su5QxjJcrgobUrJzW2eCQWSP3NKiLwUcND5g5VM",
  "key20": "3u641BuT83BwCaubrDWrNbPRtzYDkmWdyQZopuWssvivgw8JA8vw1WQKchTVz5PuAZ7qGSkDVDARQXTxBEhW6Uc5",
  "key21": "33F4HxvguihsXuzNz9dWmggF45Jqf16skUzYFWTc2rxiD6xbsqQz3X1u8Rby9humtqEimja1342ysVWz7SfC4qFR",
  "key22": "ZDyCFG8DEc2mrgpxeaF1GS8VW6L8EAsVz4zcJTgJv4wd7KcrE6TmY4SPugeJvGJ4BuGFZ2bx6G64Qw5puexPKGq",
  "key23": "5PnYoMgVJQTyVwiX4PzVy3FkMbNY5j3zyEhh6QqnPDuRMT3Fnubnb9bW3oEnvuaCnxSVv2nCE9JfSzVusw4EmU6j",
  "key24": "cugbkQfK7DD2rYtiN2wesSm3Yc3ja4M5YYbaBSyH8gnh8MUB7zzC49DwniwiLiy2fLGJsgWgMT1DT6BJ2gTedHt",
  "key25": "4aniyE7EDhmWnZSrBxN7EHDrL2vHtJYL5itjhXDYxCce2fXa26N4TwNhKbUT8hBoY257AK4YsWZmyjy6paqKCzmG",
  "key26": "5UTTDfDYmHkAoejAh6RX53jKpk9rYAvggSgdvWW81aKUStbhg346vVXeCnH1uvwfdvqyJtSvfwZVDzxKeKNHaumo",
  "key27": "5qw8Eg4gmVmExGnbi4QUVWAPHw5poUWzD9KZiEtyh7ZxAbba8kCPw75mWWPPfZZ1imxb3QGczMKsPkLA1tr9VYZd",
  "key28": "5LPXGv1imHTCWubz2XJJUG1SwZthj5RQurgYiymsGARL6bdrikrPaM85mJvDuEtZPfQeya3MRkW68joeY3bGDUjW",
  "key29": "3drCJ5dfC5tw6vBN7YhMJVKsAMHGeP6WDEMtvEmB6QeJBY4oBYijs4RvSQJXNv4ejCXf8V57HHsCnunAJBYbfujg",
  "key30": "3onbLPVM4yPW5XHZqRLqbaciYSfM3JXbda5MwNDfQUscSxXYtF6CGiwvP6kVTXxS4v3Z2UqiBc99q62dJg4JPfGJ",
  "key31": "2xyyuJF15ScJ9jjx6HZAaHEAmkqe3vZmXeALu1xwcySvTNmM4KY7D3NabjcriMMU7GzaHn9tYjdowDH45fSvXv8v",
  "key32": "2tVjVbHcbYqL5HkyE1F7khubDrT3DVPdmunawa6fETDtzhxewPMVmay87CZeymBypgFA5T8HKsUjByfZWR5Zt3yS",
  "key33": "47BDmvpY4fx76WxTqBdAk3hH5qP7RwvAqRMXzHz1SSit5X9FhxaUAd2LcpdR8cPHynrTPtaX2vgD5iPpqRfnnkLy",
  "key34": "4R2nekcrbH4UVxgCkMXsvPAsFGP7uDuiVYNN5QK72rW4dQaCrkgPHud3fmM16h4toAdkpZAHohi5PSLpigdD7p45",
  "key35": "57XokPHh39nirhjgtEyURTFTt9waoRhjQbUxrb8N7VtY47q5i9dJiFkEPvJfEtnhdvgJFQMy2xdeoMWBEULhTNUm",
  "key36": "3rp4RBoXQd7XNyPYg8xWAR6xDaWo7ZR1ejCfT4Sa1ykYF59RTncVZDpWPhX9WCZAEit398ptKYAwmer3moFc5v2T",
  "key37": "4B8T51CyYALpg5JA4xBtHMKhRoTTLvJN5VHAkV7NVbmFjRWYN5PsFum4wb2qERqNDDbD9FLJtAFLLhufGV7KKePr",
  "key38": "5W6NfTCQJX9azVeK5NAR1GEUk6pVTek8gLMZKBJato2vjUVS6G5UudLiE1MXGQ8qpv1ZpuicztMhBUTn7N2zJzF",
  "key39": "WV9JRLvaqe5pjhw1fB2DCjQehZJr3Y5ydW7YCvVhXnoZQqtW36SNsaJjga31uXCs216edLaGf6NQawedXH2UXch",
  "key40": "3dzzV8Lvf3qDfQbPGKiMLCsNNPPu99WJFy7jGF8iAjUdSrA2WYJkhD4RmUo4nHfskLgwwiUSyAuXad5xo7irsqXz",
  "key41": "2d8nVKGtVtBqjQa4iSQ4dPwk7TxRyHy81GEByFQYjPDrzNikJs6kBS8nV9LqxbSu86WHkZZk5bDEnXeLm1hCsenZ",
  "key42": "9izppBnYixKu3e4Bj42ALpV1gQ5KGtYDf695dydnGmrRAyYjbE7MnTTFbG6nJsQeMQ65uEixqVgrmmAC3K3x1CP",
  "key43": "2J4LCn8mWLs6D4woSZRqhKbA9xw6g3HYpXZ1vmYeKMSgYWiaGrz7sZs5WmeE9vLdcHbEtogTaohU5PQZ9eV7yUdb"
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
