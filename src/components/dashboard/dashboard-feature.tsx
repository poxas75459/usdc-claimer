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
    "4QdudRNSK48CrGQG2AuEqpraqs5Y3JmpPWjJgwAzgKdDHJva39zaFe259Johq6Q5euPLqT4YUVRQv4BWFb8omXLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pqh7UaXC7xP1QsGg4j6LswE4MmSMbsYsFuqp6mamzCRpR4XvRjzWduXa71VRNQJUsS975cCLkj2qm5zJcHDGRXo",
  "key1": "4KCLfavF6rHuBLxzbfBZAESy78qgGj6oTjAErgqyVyF5eSFNobqw95B2xsAG8ucJ4Bj4JBkaZRpnNukz4EZ6vVxz",
  "key2": "4Vy8uu2qt9empPxeb3mhJaU7oz871ZaQhSrRPCXT4rGDYLa756nZhnzY4BrCxhmyJjQoSznBLz3gDku3vuDbAjb9",
  "key3": "2x7sghdkqephM5eCa2NAnCMmZxGrgf5zQQCARB2jGsKRG7DuXXzVrtX6FJwpYby7qdEMYQjA4FSvA2hT9kw3qrEq",
  "key4": "3WquJTvjxWjpVi5NZ45VV1Mjaz5QJ4kP4J3zX92QAHy3kksbKB3SwMWfKod7QUfTnq3KmRQmJTHf1XzuT51U87vJ",
  "key5": "3T8vFXdq6GdNhCtTh71WfgVaZaBzzTa7NSfUrohYtnKxgYgFtc2Tx1eFo7MNxcmTUWRPZSZ8DBmhSRAszruDDy5Y",
  "key6": "26GKXCPQGzzpHWteMmXVG4hgUUjuf5jpiHZPrVX1HbdjVLW9hW4sDC2neBaM9EGeG2WRL3ovGsCXtu4984VnVLE2",
  "key7": "NwsYL6fVyy3G5MdX2gd9WyXCzCxS8QBCqwYSzZUY7ZSXPQKTPv8Zxk2ySRv1nNFYC3H1ykPwB29AW24NNGZADrv",
  "key8": "2PbwGcbSKjhNuEaZbn3zMJbjDGhGwBhUTPurdSkbExtx8x1KcccqZLiG9wxNGCHaVg7RMWqv9nRvN7LT4umtmzNN",
  "key9": "2sJkiXfkSkXKnrLfrhFcNeKTR219xchBnSw2gtHVSAvK2TzjVFTWJYTNzBz1StpEuiyBHB4wVZb1Km8WtGyKXPJ6",
  "key10": "4nkVa7vMgD9Dm4E13XgtXPLcz9EUBv1WNCsx6Bfjo1r2sTPCohRpaF233wueUfaSGoCqjJ65n3Kc7iuB7af2d43F",
  "key11": "5FoRGDktips5dQLH4aAH6xg1vR9xHV6GaraaKmV2CkDeXtXaGNCoY25pLGbYiyay1oh5S6ayMd1h34VvYrM7NJ7A",
  "key12": "49EJKfroS4FkYCQaF8Vp9NuDijXYHyZHyrwBYkKRDRAZH7DFrymTcWYcVyENcFokUqYhyMNKHkgD95YQ87JK3hqQ",
  "key13": "ze6HW3ovHS6D9K9FCmKVAodDDuqaupQGCEkMqRmmZ2i6xt3iekecLcyXjnvp5cS8JypugbwsFTcJCswDrt2oTxD",
  "key14": "4aFAun5GYp8rD2KuVNeURbNJzAC5LUqbeQL1mmSzMUuwiP8YXqdVhf2Lgf8S5TCo7tReH9Bsh1TgxfR11hxFAYTM",
  "key15": "2TJE2Scd1dwfJ7qwv2aSt7NDxbm44yFdSTTizs6KKPdBKHvPKsw1DaLK8yMZp8gq7AxGmzCmnzViqDPtV6Bymykr",
  "key16": "4WAr6NcLQtd3J7BZfPC6gcqzS97T5z39qDRQMWKhhtKWktrtwJ7teasu2uizB9C5VXaLXpn244JjReQuHNRZ5ZfT",
  "key17": "TX9biABcJJq3pvzr2dKQVpP8gzmx4KRbhZhLwdi397uFMUfNcMxWfqa1FLoV5XhoTB6utWY97pLWY23BbyvMoi1",
  "key18": "66ET1w1SC1dfBiFh3EHPWAhU9Zp5tA5vxpWRGangVjcf79gRRCKYWws2gaEZpfoUzTsF7ToMrW6Dibdd8Afa2Nwq",
  "key19": "4QCQ1Xh3xP7DeVDFnJB3JxjSn5yhMtp7pAuHvSHd5uuMwTPG1DQZcsYp6zkknwuTy41Yu1DFftQT3QvbvDz1etzk",
  "key20": "642RzxzeVaggPW2KumTcqQ7kfv4YxxnafGsbNn1Wqys7my1cyT8XH1arswNeevbQuMaHcKYfcEBxBTsgJnwjkwD5",
  "key21": "4nmBtKvzMoigdg4jJ4XLm4uTLSFrpWejDAJT7A8xbSXGKcxfqeK2nHx9dPoRbvJzCJSst49ZJU6qdWRUebyGrpLk",
  "key22": "3FrHMmzjETRxHJfRdJeRWia3eDr4KC69qzWrRdHr3bYeK7SM7nthAiM3m5DzppUpPiMVoxws5NCqpbxniWw8RHZg",
  "key23": "3VoqmQkUXXKM73ZE9CEnToduAFgR3NXddTM7LDGpf1arBxw7E5ieE6FZq7RH1x3KkT1jsMDgwsJLoWB5hohgDvgG",
  "key24": "3gXG7PXRBtJNFKYSqw7bRdJS4zz5tGashdgbnnudgY26oxSFHz4XRi9M6VWcehCTuWYviB1YZvqceYUWBuv1TsVa",
  "key25": "4Xeu9daZS8JrNYeC69rDgS7u8iuxYkYQfRb1m8GmkuPp6tuuoF4FeMzHUudNhySnHgySwmj9zi74ynqSrAYkmyo8",
  "key26": "4padohh1ATbPLwX6MNiShVM4UJmcTExzmAaGf3weRLBWSrtvgrpvjqKAHoM45hTRDkMBjHSVrUo72k3M4KDTTn4i",
  "key27": "TFmTeEYqF1Dpz36gLvUYo5woSrrxiXiXKBtyBiMQEvmKdMgxuVYPBiRx41Lq3PwSefxVD7us5Lrx5sbMT9zHKKV",
  "key28": "2XMYKGm5gB7hcNDbrw3QNtJrhtRsxuAFBJq5zdNmzHMGF922RauwpCwJTqg1Wyfb1fWJY97QocfLvygoevj36iAC",
  "key29": "5YGZnJXk3Ze9vsTggmkpKvNxGbqhtNHeufW4HnURHR3FHuo7Gj9je3moqteedH8L1aHcnMofnq8TvKY67N6BBqqa",
  "key30": "5ZEquAhbhB3F14aUXYZCHzzc7DuhzojKtWmZCvfF2BuNiECg3VPoQkZTy8sSo4EDvX7A65P71dQZw19oq5Bh5pPY",
  "key31": "i9csVPc9dP7Rr9bcSF3QDMHyWk4oKU4mkXovufnVFHF6qEoVWWkxr3tA4vskJ4ueUUQKUMofBD2Rh3wHMt8G5aJ",
  "key32": "4FXiZfYm3VMSt6R24h2jkKN4PN4qfN8NacUm6mdhkLqHTRC2xJFT2VFvaCH6XvdR3g8ndxKdB7MXWM6pGm4c9JsY",
  "key33": "5DTNtrspfSVh5TMtnXSWP1epZRQMHgF5jK8fQrafYBqamCjPLdV884UsQSsATzoQpF16L1LXCNwpPmUNwF6b2LLm",
  "key34": "5bHgR4L3jT4rZGUGrT4a2tF2ZiEKLDYrZXFCCvMtZbTodzv1CJM7k2mGZRRakGN5mYe4Pce8ntBXo13b1odPKFWC",
  "key35": "2Vfw4URktYfysatBhMVCEsCRW7myAearf7RBrUe5ipWrSqgk8FSY8ddYUyTw7QdYuA5SrQ7AJH59pVEpQk1KdyBm",
  "key36": "3BYZG6HpmJYk37y2azf7c6HtRs4LpYoBEgSZp86JRSLZztqdEbz2Uy3cPgcU5mqTreoX1UJQcExSUdG9jxahq6yp",
  "key37": "3RMEtT8vkWZESyhFjWJxveYzjEKqA9yktZAL8PsHj37rAUGP5y8adQptHqmtg94RwNF9CjGheTs2hVXtSLvUi3zL",
  "key38": "58URRSejb59RbV9jwiaPGs17dUqnLTA9SoUPamn68QBdjga7SCaUQTmYG9pb73NwHxrEWd5tog3D5aNgyiyoZsPT",
  "key39": "2ZcvWJ8wTnNGhjycF7YTWBdeV96UzLzb8Dyt5NrW9T3PZqztk4PaypyCDYDW2BikrAe8fkxySeqnXgL5ETbo62rE",
  "key40": "37mcPTfPCP7J8kTqYjGfFTAYGbz45F3AaVCPLuiJ95zYENhSZokaiTFLRiWAHXFLrrRu9gYcs5gqzjHwbE1Z9Dj4",
  "key41": "33SkQP6byCReXUiihJMDxFcmETKAbETbUdw1SrsWqLhdvivNm7DeoEza4bZoPDjsY55KncW1KsEnaajYiNHpUamZ",
  "key42": "3TwoK1ksBTDr1AB6szHWRHegPgwojCHLxxACi8jYkekorD8xLP77iP73MFb1gLDB14eTFVodvpi6N8CyBLtA4CmT",
  "key43": "4LdHYMgmtNb9dGMiY8iVkK12CCuvZ8FFcFEHrCDJWcDZTBkPBVizi2kmWWnQE4XwXtfednrFx8i3yKA1xG7XytKy",
  "key44": "5PFaYuJ7983ciuknNB4dykDCD7ZDB9ozAwxXjxVMRAuF81dhNUrR87DmwG7VWLA9nFRbSEenKGRjfa9vEHC6ySNf",
  "key45": "pAPnDEnhdZSSmbqGXx4W7d7gR8Z58CW6BY7ERCc7gCcmWVWpXpYAQs8NyEaVmm1vSzT82vnw2tRrW4PUdJnQkwx"
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
