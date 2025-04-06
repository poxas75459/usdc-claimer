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
    "614ihSiRseoBt7RoY4efKgwiRVC2KrYPeVxAfmKum9tXF6M56jRQWS5G2L2NyobC5iQPouudsXy8NCQ2Ph4R3W75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ENcVjLx6dQe2t5pPBHraKqjXJBkGX4WcRzWbjPZF3mwd9AGp6hfty2pTqLtS5aWnzqpZqEzBWpsPa84bVtaw2aT",
  "key1": "45br6wJzHSEfYzZhiYGi3EegyvGgRxCEZuFXAzicj4XihvsJsUxVasgjEnR3pUR62HU8sham2Tyx3NdkiqwPGQAJ",
  "key2": "29L6GtSNDgPsQyjeaAfug8akFvqEcb1ZbAekAjy7UkarW11nSC5US46RbwJmgApvLAwzezVr6g6ZwUvxigws5fQc",
  "key3": "5kmBrsrz8CV86uwC5pXr9o5MGswvrDq2jXCGDzAqEVw7vmjVdbM7fpauzvbZjJgshYeuWFJLWoVZyfmjxVVBr5nA",
  "key4": "57zW6Ucr1Fv96SSidgCs1yxsK8znE3LgQAFvZvVh3ZmbycCNEZ2XP8K2XSymEXhxxfKoLaEDMtRADetqM32zx86E",
  "key5": "3hRwZpi5uTWkdoe3bWLwBHuHfR2NEWvD9YYu6psSy6jBTqNSGQrD3vcK9qxBqhhrjjVuDTam5pa2Wp6gCPwyBCBg",
  "key6": "2zotHbQVWcHSWnessTp5dNfYMK5hefsVq4aD1HRzkkSA1ak98UPSGbXjkGoYqzyeiJ3freKA2UYaNwdXTj86apAG",
  "key7": "4gxCdRjPyoRbyP75x1Zp6AFUMwxQGUUwSDUY4k5WfA7jR4twkDMG1hy3AWW1gLrTVudd7EP7ceeettur6muTBBuX",
  "key8": "2NTK4zwaLvBcp58Wpun9RuQ2wPyHFj4VWhrxKMQkQiYVN7WM2baGbXm5RMuARN9AbdNyTbVw2Phmz7hMcac1yViH",
  "key9": "YyjomBM7WuUKnSwHxhbXHfPCKPykpbXsmNwm7PmddYmJL2S1a9rTJdLCZsKref6JKUdrozHLmqL4fN4csxpFb8Q",
  "key10": "5r5sAU8YkyfjsPF4iy8PuUvzm1wFpunNv1wa5GPA7gMcSvGHnFwrQwR7ZnwzcFYRpsQeBsBHBT6om1mpAgCFYRLb",
  "key11": "JHSYpvZbLPuXhAFC62g26cig6oAY4sn68nzpQJhyWm4eXSth342EUWBhBApAMnUH3zNyzWChCUB52pUoLU8YKem",
  "key12": "3CkyHGc7emSgz2v3xceC73dhUJeGcup9yKcuuMkBkN7BXaX1n6QbYWbBmLz3RPc5WQG7jWGPhELnkqwGkStXaUpV",
  "key13": "gmk7cQGuNDB5kdn8zy5kGnustbsRX3CEsJW25me6THjMKiLKrBP5wBVu1s5KeD8jzRRnDURtAWdT9abPCvQsjjB",
  "key14": "cSux5cMsm8pqUcerwCkZpS2qvBUyaVbwWBEGvoRSUAF7unrTDvg1ZhM4X83a9EuQHBSafed2NBrBWhDiazyBXdL",
  "key15": "3THqJik4AQ9NGhBs7NiqFxk7P5rEmzFQHmuuG4BzJd1PhZocct4kGmKwf2pzYRafTYCEhig9f9aMZ6JnXz42vWyY",
  "key16": "4MRyPymD8FicUhmAhm8HrHALpVN65856KjeejPRa8qXuNodq7uhPBcEZBpaacKhdow8QNgTnVpGtfxaaBBdB9VQL",
  "key17": "2Y8uHHkAiRYFriRGy1ed4ADYHvaZXMoH2EmpDUdQssvu3kPocL21paVUaUjReTxbnnx869EoyzYGVnViEVwDtUjw",
  "key18": "4R6x2YvCSGSsH46KF7gLoD3wavrT7XjLzZXfD2zGnYniZTK91NV2rtTkFguFvp41igPwKF9kNZEbuxibUg2mXR5W",
  "key19": "2m9j1dasAWAa7tn4N57sYxQ5b9rALvBwEPJFaEejwkycVPE66qGegEhyWCJTTRVg86xVEadfaSjtF4axW5XFe2s7",
  "key20": "4GLg2FfJdyqykag9dGHqHT3Lqc4KQo8GQYanFw1z1f1LA6gvMpurSWKd31xzW9DUkRbUGyTBkzMFHdTkcJCZEVLQ",
  "key21": "5i9by4C37yvCfpWXniqkSMQQPfw1VrGM5w1utpdGMy53xyq1HuysfYzQSgDBmpoH8RAB1Rcv2p4frBR8hpJBPuL9",
  "key22": "2Rhubq2B5rtxUYJNr1Av7tRkwA7hxX2gajegvBkhPAotyDdMA4c2Kbi5XYrw4e8mxe6CLKTD9sEhvHsb1diZmdpZ",
  "key23": "3F4joyNjMSLcqTcTZ7QnvLSYEs7rW1MjQQeQWsqUh5m8muhTgmVPSSfN76z8UwEsUJQcPP7Evs11Lo8UUHNMiZiZ",
  "key24": "3B1XZFEQzksxALpyQZuCrMsG4Jdmv69icwEjHJ3Jj69qs9TZBhqw3quPmuwBQdAAu3MdyxsPqpZFHfYZ6CoXM12",
  "key25": "5MkPFbiwVnuBs1hT4u7DUwNmapYi1Hu1HLmmUTJAdvT9zsi9QcRXNBALNnPVim39ZPe64LXZ1GkkZuQcMKG8UaoZ",
  "key26": "4uPPD5MLNNT6Jz8Cs525fARdsygBRDPrfwGVYwH8f5M28Pv1mTpnXhpVCkyN1tn47HQpgm5E8uh1KtYyCqnVin7",
  "key27": "5cS3NRMTvQ9dTmgZQ84rm4uimFQzVZGELMgTsjd4iGfUYPT6vrQRXUgHEgHc2tqeDVRuwrPw4qK9aDaPwP8Zmikd",
  "key28": "2ibaQrEwytrAyZM1fPM2M6fpU7MMkFE8seKmkUqD8EyXkL7zoNTd66dkTSS8iuJAwAoAHonj4aBtRQ25Udure98X",
  "key29": "4L9VAs7Wbjf7YKd2CgPDHnvcYJYuV7EySdcCcvuU9qDCyykuyC2YbfxnUQxz8JmjruhAYYK7eMuNrDb4UKMa1MZ7",
  "key30": "5qfXF6wjRMwZsxFNS2eygzeWDouvG7WrPUnscpdYjAZL9JejXADivtV2VXhXf4wxhVro8f8ATkqvnXwMFN5ojfhw",
  "key31": "5tEc1evZPMqV6AqcF6y5YPeX9EFQ82ZyKSovcD9t8qfipJMKyrEWGm2TXJESMy8mefmu58cjADEQw2T4KTBEqWJW",
  "key32": "4npMdciYwaJjFvVxoiQ7S1ZX2VSjAoBNNuuPS4FnQxzArcrSMi4jpvsch8U57QV2nNZrsyegQBqKYdaSnEKMgJct",
  "key33": "3TzUxz6sNwYdYK9a2mszsUAcoMz1xpcJ7eF8TBmo8P9u4KYa597LvoNgLwobnkDU4DJtaBVcWXsTC4FSnK1hiczd",
  "key34": "fjyfqRcP4B8MtEUUDMjSGpt7r6kVXd8iC8WKsTqoQkWd1eAGsVPAC92pakT7fwc6gGoorto1uP8fXFVVnwLYyzR",
  "key35": "5B2yq6M82NY13WS3Qx6YbUykKEjLdyxhgSedNLc1jX2SrpiEsYJi471vWYSFGsAFYXJw2ypheub9Latn7MuZfifH",
  "key36": "2rDZijksUYhfLm8Ud1QDdJJMJy43UAVMB46gejuHLwQjv6ttdUNzH14AfuKMemqFq5g7iwB2hUeHZRsk5TybrNNQ",
  "key37": "5EmvuQazdLxPZWKccrZWQTcoWRfM49Sj2c3Rt3pF93GdBvxyTjrNzXJ3S6jN5gntf8BPV77tRpee8eBvyqZd8ZW9",
  "key38": "4VkVvHH2YPSH1HvGTESGUNqknQq1QC1zgVGpbthUew3SFP9qsBAyLNn9dJDkEwgn2xBRAgL7af46EYosBuCMfV9z",
  "key39": "EhEzsFQUxjujFNdUb6mzPQ2CrCr6p66JUrCZecFR6RcyCmJdgDrCADT61sAgEVdByKPsyn6Gzt6EryzPK7f4Rw2",
  "key40": "5MZrNk3ttDxaEKHPS4XrX41zeyCXK1Jfo1cSjiz4JPznohfrCpTtSA1Cc72fscQo3WJKi1rctCPY3psvpPKgrvci",
  "key41": "2L72d38YtAbRxxeCzqedyVFwTLvi2yvvnRHt2aWjXH54WxMQ7Pfze3yUArLVxDMxNrQRe5khCoZEtw7d4yusrowU",
  "key42": "5brVRiEyfkTGSRq1JjSBUoovhDw829u4iW5EZtEgHV3g3JvAK41UKGCnoSWXtqrnA1VTMjFMLvwFMoBohJ9WQ9uR",
  "key43": "5hiJ2AVFjUC6613rtvfMV25szuKpwQzpvnmiKVxNcP6UPtNnLLN8Ws87Mv1QKa9s5VakEjR8fv6repAJf9HKcfVC",
  "key44": "KUgP7ZorFN6xawQteeFY97aYAUStewYZzuFqXUpjtua5XAvknZrMeZjXorp1JDqeaixxdvGKvAF21HGLK4m79ry"
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
