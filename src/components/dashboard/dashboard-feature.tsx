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
    "5hDGAJB9KJC42LiNu9FMwggZrLUcSHz4q7A7M2fvxN84GjS3wi8zGZTgFCgRpa8zz7DF4MFBYDEBnUdHeDaPFS1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rN5juuVzvXDjRnewywfpVJLX5CSHeFCqqvzc3PChUdhbyode2hpQtyVR5DAxyoUyyV3Gs2wAieYHG4wZoJWT4My",
  "key1": "2NtRnpSrxy1vJCTuBh1eFcEJMVQLotj5wV8QXTuGE7PhZ95a5HDUpLspLLCAFt8JeBfw2jH4AScwWBbYATq9E1a3",
  "key2": "4L4wwYa3BvLwYxDA32KwPHK7aSAQgmi3Engoa6R7aaFsiXc8Ci9ZFDmhSXqqbQzvCW1SJkDFsYLR6eNNmSrSzFab",
  "key3": "5BbJb3kQW4m16CdKX6uW2CNiWmnotTUymRxvgpkNHn1Cu2xkabYSor8bY9HTVzDQrwYmtKDicMKjYirE4zbv4UgG",
  "key4": "612YGWhYu6WUD1JQRNXgTXxJTt5C2f67ua1HC11REmekqDfdRoNB3cfX3czd7xASk9FyHWJ6xmMrsED2iSwPgcsN",
  "key5": "5EWLYyK87Roc3jCucNYk1Sq3w5ggcbivzpToVnxYv9xvaHQNoMyuAr4w1MgXY6ZVne9LDsJ6FSDhs1zi5y3wNMfg",
  "key6": "2nJo1tZakauKEQNBnK16fzYw5b7buxrQeFwtZJj2nJGJ7egCJ1YHBZ5rzbQnLUNtEav7VxPGpUS5qJfHbHXMf55S",
  "key7": "3VDx1yufSfjqUKW4L85SeUJrhGDuufz2f513D3Kfasz7i6mHjmLYF9R4ceQUBv7d2knXo4kZ5yr15ZjQTsArSNsK",
  "key8": "pcSGjk6MPzpck9mKp6LbtZz4hQyX4TfFvY3YjPjB4kN8j4653hALgv2cQJhbPpyhiZR38dE53Dge1r8nUHLxZfw",
  "key9": "3xyCArCG53r3aMyfe57LAi7gb57W2sz5ciPFH5SfwzxDfvGYVrxeq9tZq3Uyp1tKVXdgaZiFwuAgKhAKE77R6jaU",
  "key10": "2CuRG6pFWnYF6kFY2XcAfCTUWYpyQa6cynp3FEvnKqem9CDHdY46KEUNYa8y1C9q34yJpvpi4HAbWz9d2zmnrcWN",
  "key11": "3jtxB1NbBCavdhLRpzbpcP9b96NkfTnsBpWFRwNSeMkvcFNp5SahoNc3XLbpFEs5t7aa6eSgCc5US7bkRcyeGUkG",
  "key12": "2ngkWYm1vqYSTmQ7AEjZ5bqUYWGdXotTQBgNEzWQNrdTMmkJCLkGxxeABJZZtrzesTUapMyuCGvahuWx1TPsbGuw",
  "key13": "5bcPqGnrC722JgAdKLYniX4AnJF4w7zSSwcBX6axpXNZSuAcwG49q1EXowzowyb2r4z68qefEuffUngVAYhVD8tz",
  "key14": "3bM7n8f2CbyWevuwRtk3pz64uhxcMfo1hVvUfv9RMcovQ3ju6oLa78nmwah2tNMidvmhkmU8gX54b39XYGEmm4kw",
  "key15": "4prrGQDUKgJiDshxMs3A5k374YZLosSHaW1KkewqGhzkMKW7MiDPg6xUAwfuBrDRY7x5pvxyhFqV7R4YjJnVFV3t",
  "key16": "499KeQWaVMCeQMRJp5yM1mdY1gJbZrU1p9qs6uGF83XSMfTppJndL35T2ydUDajq2k13tbh7BC5ZEHEJg8QehmFR",
  "key17": "2jzMmLjPqNFnbSyFeGGV31z7fViuzNoUE2qWXLkNggE1vSTTfMgGnJPoYpfSyjcdcLH3ESCZym59hssXcqbUKXUx",
  "key18": "4toEiVsSthkukP9LcJiwknZZa8GZKoamdANSVvJjrkXNar5smKJTw8Cu1MMyLaB2YvAki9CUTWmLHiRfoBZkUvno",
  "key19": "3TzTJJERFrdL3kAQs6JtJB2jgcfGmbP7C4c29YSHnb9orpALSwY4n1tmercDQqgtX8HXXNH7vR1DSaY7CRTSmGFe",
  "key20": "4ZJhQ2ZBojJ3xBx8ugHF35H4aWWF3VmZpkUEwNEZ82RC4v7nWujwvcNUXVyYNwBuSoUc31GydFFskQ6jwfgYF7FF",
  "key21": "MH1CuioM6W56C7Du2LF4cHPJPGcM9XvXPXYsZ6HQT28VovuNFP1PhxpVKZdBm4vQSMrWAgAdKzs1mi8UjZVLDF5",
  "key22": "3tMybLEXfdQqnrDvteSgGL1DRhs9iJ3N4vEpb11rz7JiGtfPmW49GB6YG4akmmdaE6W7c68sCCCZyh1M6t9RytdK",
  "key23": "4s5xs2hWYQng8tKRQDfLKv8PWRzaWjJmioqMhEk9xn3dTEnLJwhoDeZHoLW3kHPQ9b4VZka1orm919EG67BRdyWM",
  "key24": "3CcXiTU4A3FVtnBqH35Asg2hEPwhNRNQRqevkFQLo3JHYHGttwg6aDVo6um8JFbBbTVnTmsz5ocJWrsjL8fSAed5",
  "key25": "4q9y4MJwhpS7zs42qTDk6UNuuqekWRKnsKBKeDBm3cjKhfsiVZRCFpDBLEWAJKKrx1hjLiD21zTchKWCDqnYEtHT",
  "key26": "6eczzfWPQQmvHSvHmhMHj9Q9uFdTZyXcnM1ksrXmgPBTLFabWuy7fYpMt3WoYiS7eB4tzNJ7Ka1xx9ZvXgB9SGM",
  "key27": "5PpUhe4o9NshUDZZxPJsMvkfsPBgBDsVxbRSQVU8VyLd3jwoBLnbkdXABstJLULYYxmGVBMoraCvSaUH5QKp6EdL",
  "key28": "3oXYj9omU8yGcs18TKmDLyueFgARS8CZSFVLDWHsnCWk5fsiPBjh6QzdA2NxrB7QwkyqShAfWhFK1yk1D243MUw2",
  "key29": "53zb3hvLg9dMV2ZTnwmVb23F8WGZsGqJcZxrnB7CSQd8TfUE3haMeGAA8sZARWLg9x4THqGzAPDyfheoP947oZQQ",
  "key30": "5MJS9dXTozyEkjkdxrp7b6L2pfMhnQkyZd8va5tEf19MrYwWWNmS4GG21v7UiPcKLg2CiF3qf77JNwjQDqQUnYzG",
  "key31": "3ZNboFYASzwCrygXg1bdVwQHBWcUaWm6YfYwqyy2eHC8PcM2PTe35HYdDoQweWijNWQsE4j3u5gapHYWoV97hNr1",
  "key32": "yP5cT6RpR4FdVkPvcLfzPcYVja376h8nEeD5DEe6xj7kQZo13yoS2j1x7oDmMhX2TEaVJj4wFKnavFeMcL9YQLH",
  "key33": "2jDb9JFkACAkF4eTJe5LFwQ574r1GoHeyqN96PKPTdoFx8kiZLVTPRH3g3MJFHAg7yG7mTobP1jHbzMKXFYX4AG1",
  "key34": "tSY5bKZnaPNrvcmwfApy2ywsxedADy3rxu4gszBzUc9L1f89wkQjb3Utm1fJchJ2P2BpyqytbHFzUC9D7vNLd5X",
  "key35": "26SkkSTC7q2QeN4vNhbeRbfaWG8aBBZXGvz26bVy1jHSAD7qSpKypgB8E2Aoc7S5GCWGBD8g3DPtKHSydBd8AmXF",
  "key36": "2LvQSc8waY1UcbvNSyQCHgkSXaQX3JfTTafsKPCJxQSdUY5qLgxrTVRV79HfaUrGtP6M77hHNazop41c2PKER3EK",
  "key37": "UHmnxwqTjdhDzc5yGCx5drQmqjfVfx76prKBSracjx9HuSp7fdLkYjXcHTJ4LDoNKt4SdwQPVSxUke1ajCDvV72",
  "key38": "4Nr47ALcCnHyjS6HiAQoRWyjqom56EHMk8XuJRsp2W9hTcfcK6sdB5CcpiFzKzJJsfGwRDM6YhTVd7FUvxaDAQTB",
  "key39": "3zjxqQGirADqEPEQLSz7JQC3kwv1QJjdp9jRHnSiXrSErWRnR4U5knox9R33obDu5KM2geeUUVSb19buULgsUA73",
  "key40": "3GuWpqqUHQb52QTz5S4yG3nn3X5ox81EpmKpwPpgx8GDngv6bPUokAMT3WSqNYf57G6SA8oeyaZKG1S63TbMSkVs",
  "key41": "5kmBEVM8t8Ti2ax7W2LRKo5gK2MQmMqEcPwHbrmYVRdLH83KdrxEMQKhHthuKYnSyUaQww1dBvRJCNC5zHPj8hEa",
  "key42": "2UPXGZbpKzPwZ55jh6JKrvXsjJK9opFZCXVGXFdraUfbgHgvoS3yqGiHgeFmvQx7oPG6Z2yeLDNx3N279QvaQ64f",
  "key43": "2hcVqabfSwpeifkLwUWLkCEg6SxvCdVyiLNNYkB9n3ngGQ9MT28Hipndam4sEj7BAoFScHo7pixk4xnknR4zsRRn",
  "key44": "5FC5DijQDxp2S27NNTSXJEmuiJ55QseyF5ggA62hJELu31BHZBMXb4nfwsJGuDzBsTeeCLkZqjogh4VBAhFdApPA",
  "key45": "3ktXDaUMoSBohETsGFg8iqxYaRmc7kqEDfG7eKuGxLNNhmsWnAxpW7qNahfu7Lpdo9JJQUVwtrK21pUFWhAqM9vw",
  "key46": "pFqWjsZrzbvW5VdwWcDUwyKQvZ58L9Xfv9nQvsj1mvPhYaT4nH23F9wVPtqLJup75bB3uLLzUSmWtcPHG3ghKuP",
  "key47": "4EQjpVLQJRRnZGyXdhmbDSeepyXkBDtPWnJisSNVDBCfUpMiKCpw4R7KyYHh5ENMq8qxyGw58wt1feq3RgL7W3NB",
  "key48": "CdbWoEhimS1REmekyu4PMmXaMFS5wF5saQ65SD2kJhXUs3f3rERoW9tb6yfFRAwHFixBbqJsEC9xJ52HFB3Bgio"
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
