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
    "d9EdzqsUHJWgF7ToiznRtLzevqjKDyR3BZMft6wwKWgLG6bvW1PMQjrrwcgET4ux9z9ksbNyj2QZTVKMhEMUq2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YEREVVYjzRqnRRefq7do2STfZ2yVjfjGQMFkVMaU9UG4QmoQhgahdkeMrYsGfPp1CUyMzYEbTWCyFR7Gz4TSpiR",
  "key1": "2DTAHDSnvYQq51PvYgjpAjGnXm3eTgycfod9Q8dWKDiwxnPvjrEp5acXvU4eY2GAgJ2ezkN2HepaFKFRhThEQ4uc",
  "key2": "3Qpqn6WA17xVvxTdZ9sM7q2v1JCEKXw1KNa4cuL5uj7ZFuPUb1HB5jwemxiPAfnRBQonqKaTSKgbauqR3HmFRtGX",
  "key3": "268fQNfPRn9uHLm7SqSdmq6hh53tUHFC23coAt4sZEkvCAshb7F3NGNTqf24vRcvrmEiqwWNFHJdPCotLc179pDJ",
  "key4": "f81TT5ZviY9j65akLj21t2Di9RYcEMA8XmQA9e9SNZCZBBAqvkxZPXSKdbzrsddudQofRdSPx67sPpRyAQTwFud",
  "key5": "qaEJ6RPKvcnvm6K9TPm8GuBkHvkud9eFhRdtWXRQSghzaLfJB6mVUnnzPtxxrTyyVnReEfrdL29U2C6qtys8Lqm",
  "key6": "vfYyhdB9EzfC2Qt4YsSD8MSoJf2VE7h4QpajxLPhtm9MzrWNAqbSMHSaexMyxRrb6Lp4WCgbMwa2KzUfvGrgAmp",
  "key7": "4s5qSb2Adyo59QSuAr4SyPyyhrEo6WSso2ydxntqdvhHmx6FTS5HW7dxBWpaj6SA2EoPrbt94cB86gLQMjT5oPAf",
  "key8": "3aiWdAMKdAvuF2Q1nnNjLJwhSoZDRHYQjbvnraah4yrTrCstWyQdNSm8TuVWiHVp6EH1hGjobtB5MF26yQZXKeoY",
  "key9": "5fPLSSDCuCYG1LfGKAbm7Lcm6VnvwG5RMV8TFqe5sJpYRY7YKYBNbAp8M7Byo2kb4xQzvvwao7dXNuPhnN5v7kct",
  "key10": "3c5pPooi7Cpxx1K9eAcxX6Z1RS7nN33TayZwvFbBbK31yCANaikTTx7WjGBztnxtyXm8yhJCkskFin6VL2sHcumg",
  "key11": "3hwZNbojghK5mLrfZHsfQ5UtpF5DZakQDzYYWWaw2eZthUTf4ikc2bwgrD2FeHVNgKYRZV4Ye5GKwYcj8Woi6sxu",
  "key12": "4bAwfv9akX49i9kt6ySe3aun6oyGeFtdZzX2RhPgZrfs2phmF7Y2nKCzUhexvr5V55UkoSR9zHvzfUJmpCwzKSnW",
  "key13": "3Ayrw3FGNn2gsbKgoVsEkfG6BZ7TDK8DaHiZeg4Wk9myWJdr2KaMvtu3ptXibzp9EnVJd9egwTpYeAjpXpNpSLCc",
  "key14": "zTV6LQWmJgBR3VNkhGHU8JAhfa8hVkJF85ShULA82x7MeWQftAisnBuQad5DhTxPfcBwQcuWdhMBkhEPBgdXBau",
  "key15": "25HyT9WE5nQpw1asFN8ecTfsgG4AzRmVkoyWeaPvzAtFZFcctPfqHJXyxtry15fNPiD9rQsCziEbU5XCL79yFYNk",
  "key16": "4deYhutSQiEa9UKZvi429d31GmDMLHp6Nmc5kRoZRHNvGVp5aS1xy9isbmzQkHAcrVt8JFYN8ZdKEKwiyiTQXMos",
  "key17": "2CajqLjZEMCMo9qsgYJUnFRe2NHwTXAaQ6c3E6WDvvoCvpwRxpWx6Z6n9y6feZ7ENKSoEBP3xkxkPPFxhhB94BCg",
  "key18": "3MzKWfdr97k1G2padAu66xCBNA7ZfyLwFzWV5xsCXGAXbogHqfBMcJ5ih3bGbP7uTyMYBuPAC3Yagm4JUhsKVVCd",
  "key19": "ZEVbRiSYxggrXJ77DJsxWDYij299VyTzomCBin3z86y8h3hzgrw6qqsGAW2WTHmfE2KrSj84veNChEiNN8jczqv",
  "key20": "5b44VM1gYNmXtcLVjEfwH7WH9gAAvxAcrmp6fkAnoh8LBQoFm3JznhdkK6NtXTxzTrigtWY8YeD6kKhkqTuTm3Hc",
  "key21": "4sLeYk76Ra9VR61eQp3swZdJe1pJ5AtWHoRQ9aSmGVnpA3M8ocWxqX7P9YYK5RqC4MTJRLfyDcfiCSSyDfVbCnBt",
  "key22": "AovCcntPK4v46j2HUEEif6A2ZH88gEqpUnUJKsmoJgJs2zraSJWh8XoHfZFU8tWZgETz3PfanZuHtBWcWhXvcog",
  "key23": "3aYdHQZKDsu3D73xdTomxCWB4hEfYvia6tpBn7sqcY769LvD6w3wsuHAhfSLtE7o7BWWKJaqawzPmXc7FPH87v1D",
  "key24": "2qJhk3xKPtmvXF7nRpsrDXomZjyF2QCaMUPsKr6Fvr4U8A34neoYh7PqEEnyr5qBEchW2QGZN8iqyNTPcAHRMrv4",
  "key25": "2wQ5wfPWmNtBoRxxWdphiWVgC6Xa8E51cjBQNHbZ1ParUxkg7jHd2vkAt9WM6o31CzkxqcUJXB19B6o6gen2Q5ay",
  "key26": "5BfArmJLHWkmdeJWs6tjrfE9JT2tEWr7Cd1B2Kcqq12e2sdf8z5NFodQRTJFmboZxpozHwaeHNa5WqWPGcrFTgTB",
  "key27": "4F7CWqpK5EfjPF2fdFXVN51w35qy8L8hyV62GjAw4RitAxYzJ1wrUB8zaXJtwkGDxoQLZTiiEYWkLohQDRgRRQer",
  "key28": "4K6Dxt2HgL6KPy6PTRKLs2cDDE4e2s847LJbF5KCmMub3Bf4im6msoJtMEqnfwwuWYuFhAXVquCwT79uA2bHqdK8",
  "key29": "5QgpTwvf16e9gnyo2Vy2NqSNLgeWQjTq4hzPt3gETzauMACz6e7zUytCVKQpipYevg7yJv8by2CGx1CRfyMCSadj",
  "key30": "5QAGAfZxSJuj8uXqpXDfPCyCxwp26uMGy9Rem29Jr5UCGPVX8J3BjriNm6xJnbRUc5DfimDjRQR2dPHWQNp47TfF",
  "key31": "NR4BsUHdQiyBag94yoBhdPfRHzi8yRXJEyuQoy1y36HwqHfpYAjjA3XxfFZR8RXfN2XqQyG53KKDfKKZhawcTtX",
  "key32": "4gjJaUD1yPgentAS2RdUwX4zefUX5uDgmcQ4tRvAXkFdQ21gnBxkHYpEVAvUraDrsksjXruETCYM3Ldj6snF6TA4",
  "key33": "8ZJnZBwnH5AQPqk3CaRsWVGfZWf1k6dZ7V9nskgK57bhXC2y6Nr27me1t4K8CL3R5yxqxZE43S5TsySY2iNRhZe",
  "key34": "4nhs7WXbmZ56LzgZzkn7rUqEYiLWcNX8EsxkLkjbHTbNgo5g6FHWfMZwamBPugb8V7WCj6cdfooC9jUmQToT3cy8",
  "key35": "3s3r1VF9x6aEdsfgwgqGLjxojtPKVMuKiEMqe9qYSNmG76rFMQMteLDkMmsAe1LYATUPz2JLGWPTTofUfvzB4fDo",
  "key36": "P913rhv89zXWXQXywKUnv6fUGJZBAABGCipsTi4ki4SRV4m1n1fBNNQuQGgh1YaaDJaUw26MSEHHSRrDgw2j5mR",
  "key37": "3nfNCYZKP3fRJm3hSDPUF79J2u9cMawbVMuZqgnVKyVBSqLDpM5Qf8FgooDF7DxgaJx2cNCihhfp9iudizp3cWmN",
  "key38": "55ob1dginniDY7ApNFEdr4HD6kGMSDryUCvL6WYBR6djeNcz7xZewZZYqumrPiAP7PVWzWtmGQ8YM25yXe6x7Cgk",
  "key39": "1ccHdnAGsLzoSTbrgHHFHMG9nDxNQVLvUMezEe2v59xh3SZtUffpC9vwSNrKdM8KBTSHbFepm4yKsrKb1iJ47B6",
  "key40": "52uqkao2ZBcZ5ZWUhFRZXNnbzGWHtg5QkHsjCPAM3bBHXyvQnhevcSUmdo5XxmakX46uhKoVWVgfR9p7szWoij2a",
  "key41": "aMKJMp55omrMNMNQhzumSKZswy5o2rsMwiv6gm7XjzBHxyLDxMb7jiHuwzJk7hiVKyA78rGLdjtdKBnPuus1Uki",
  "key42": "jhZvnpVtzWEQecovv1iHwaUrBRrUPFDyicSqkx3QMuUknugAfJmudAWTKBmJjX7YxULqvJ4Cw7TYEFQeME3VMP1",
  "key43": "2Et1JpHfkuVjtz4Jdz8NK98xGmpmSVQGgES5DMzNdnPUiujWxRtrdYmMv2yiTesG624XXeZmy1ffTdyp5BPJMLuT",
  "key44": "5tAiGKE6UKLWZED1o5MqeRRDAPM1azP8kuABBYJpA97xgsFTdW49dNGAtMrGYA11zudxZSdNzPPtkNx8y3cRqvup",
  "key45": "5NCWLHAVzfmFLDBUzrNJ16EtB7QKseGcgErSbY9RPRiwBEeSe8N5dXUkPqM1gjRTmsikqW6km7s1mgkxeuNqgZP7"
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
