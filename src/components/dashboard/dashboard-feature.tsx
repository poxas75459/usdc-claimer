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
    "3KdavprueTeJ8tmtNvP4HK585r9CJY3Zg2RwfSzieg8Z9ckscC65GYvdh6dmT9XAJJCriBR3VoPP6HkAth2BNWF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lznjgv2edE4VvfmymU4eSiMDP1nrVVXL2sGmMToxpTT4fCjA9RQ5ttLxxTC6Q8AL5XnwH8oXeEXP6DbLq86NgJJ",
  "key1": "3NPMnzzc5ikW8XoPxaFwyyLM7t42nFSrrBYPqmd52g21SRecYpqF7VMYFaM1JBXUfj1NaWJC2WjrRqZTJp92zamb",
  "key2": "iJCN9Agj3qCjRYjG1XZ9rFbUzn2W9d6n1E2RKhffs9WT8mJsJ8NHTVwLgQ9aht8mFLQfb28EnaxBnvao6qXxdbk",
  "key3": "21VyP8xuvnR7ZhGqbnAwPQ7674u27xYzsJdeQ6Fi5ttYNjfK6PemBQ8kpKiCdBnSG91CJMtzawg7YAQVsTPy8oL1",
  "key4": "22WX9cSjy5ehVsMt8ozxfngw3uRKjntegDu3Fbe6TVPTLq7G9DyZMh7ZMR8JG714cz3BfQ3aNrCUuytxE5iLSx1Q",
  "key5": "3c9sJ2yKJSzcyoFwwUCiW8eib19DoZSE5wsm3BenZFPjPnxrAr7rUZTnuhjfzVRSr7PnyXcCkNUwuZd4FZrff7WV",
  "key6": "zjFZBP4L8PJ9phScff8M2pWGTsxGoxuwrbhWcQm7qxkLSuK85FPQL9RmyywAotyW9ohiMrmJ5VppCCmVsESmzZx",
  "key7": "29JCdDfoQCBYuE24Prk8drXAbhbj9VTWYgJuQzcbmocBo847ogyhDnNkFKVvsamX5VNK2LfS8keXAdodaxAtEgWN",
  "key8": "387fLaETBBdARkqRmUYs4Z1MoviuQ1xugKtsg3ShZd6FH2XkSUDFLfvyjJjoXQMPRtWuXnmSEm9M5miovDEDnWoN",
  "key9": "38MeMnQGyXE4pgo4s8S471m9Db4ebtxvsBrVvnVeMM5NksSQao2LMTbhFAoEACkodDzJiYf3HLsBDtAbgv6Kbxg2",
  "key10": "2Cwms7kveRAKrPX3sTW8GJAe5irpmMoJFSwTG8PfKcs9SHWAz76L27uUWsQK7NsR7pBsxQEuJgUH7KL4mCwSqE4K",
  "key11": "4wNqksq853R7P8ANXkJwHJMcc7Goa8As5GucJVvQz9k5SrfhhNaRFaAAPN6h6x7QB3uw2jJ1V5odN1S2dhHMNDjC",
  "key12": "2CQuhw21kdRukRrUx5dvvr3rHW6T4itga7KUCLN68R38xPKAGoQTereGCaW8YKT2bdBEJr4iUVzvHZLKPjdbQXWm",
  "key13": "nkmkidyDmtiSQw4EXKUDDF4ARd42RnjVD4YNVrXGgnVQ65CRvakpuDEVFpjTFFfhsj49cUmXdAy3kh71kZweqDS",
  "key14": "3SW2hQFzyAC3KUs39VM33C4eeLGFrXErtyVmgrEmbUMqHmKsaAJi41vDjgszahWTqU8x9EByodvNMcdRa67CJaod",
  "key15": "2e1kKBadVkyztvb5piJ7htVyhCAzGG1yAnNvh2qooTsyd5saJUEq7vmFM3bTx8VjXjqJosrFAphx8xq5oSiZLzLo",
  "key16": "hdqcCM6yXaiA84nraLd9YuDvXQNCv1KzZguq4AMvUVug9X7cLsDvBabekn7nKp22e6XTvK8PypLuLenbwwQD2up",
  "key17": "ribubGNQkEPYs1YCBPjG3UxbBDX8rgkvtJc88MXA5ELECcEA1jpcaeABLHYijdivgbk1JRoZ4EoZZJFkYgdohny",
  "key18": "22z2535pTTSraUxhQskuPFuk6NYMwy81MfFZbu5KwtisJULrK693fouKB2ZqcpmG9vaoHayk4f8gULYozemEBcy4",
  "key19": "2w9rQKmt8J7qmjhvRn614tL7yny8eZQiVo4hzKdoZABpw3cCDbU7NhzqegTqutB49BwBhzX1awwFo7zkVPG4zF3z",
  "key20": "CsuS2CbffRvcp53PH5CgcQZmNVugUULzMSeZPCFX6xVQGffh1eWYmXPWJhY22eFap7ZXYfDvNEfuoULqNQuezSJ",
  "key21": "xu1NChYtHfKeXNCo4kkZGN5ioN7crLedqkffbpLCymYr9StMGAh9RvHvdxjTEJB5MBoXLw7isbb8JeE49cyv7kz",
  "key22": "5XTghDa2D5SudDf2dsH2K482KSpCJyfRSbGAVmQyNndZatWwsFWJysiWgB9DQRt4eBGbtDvAwtyPSEbBmKGs7DRL",
  "key23": "5h3M25MfRoH1PiHk5GU68BajC65d7WfbjBraHJiyrcJPz6bC58xi9xr1jEXPBM1aawPBKCCnfL7zcpbGR7sfrqWh",
  "key24": "4GoQwpW2ejNKbRY55Y71H5nesUFB3AisqDL81DNQzH4BzrLegksNN7cnjzn6cbErR64vfXprTCcKt1JcPNdrPoAc",
  "key25": "2NAaguqjAaLScJ8Rmu1JS8uvXyFJann669dqgtQNqfw9RrkH9yCtsLhTT2daaZA1KGo368KSPep2diszeVRpUuHP",
  "key26": "5qwBW9V7q9EjoaYtcBtcF7chTRvnYhb5pPkmXKAjvPdMhfrrwC8pyWBQyqUHe74WFJgR4osavDUWczmTrnRjsReF",
  "key27": "2Jbe9xTzCxpNtuNAPQJ8YPkoLnzmGeZgVgYQxdd91VnZ89AefAbSwBog9dwgk9sQTKnFct2i89DFzvJZQyrg54gP",
  "key28": "2MuTduTA9E9iNoSJ5QuHm2QaYXe6X1o9pB7eGGCLjsWQWPnoHRFiPtDKE1JfeUqbSWPMdSxM5PVtodWhkfLvX4G5",
  "key29": "5KdrzyQCciXChQR6trZqpY8Lpx4FX5E8QMRDMGN37kxzNNVi72ARGWcpVdVqoJUnrvoXEWu8T4UdiRQVFaC82tLB",
  "key30": "Gu6s9Kz4MvVasC1vC3AU9Fwg5rUXQjC3pGhiL8nnzwTpeUoMUK1HCinH716GCMRfQ7aJD7487oWtgXPGJGLNv7k",
  "key31": "5RLYNyZhoq8jzLyr1KkFw2qUP2QQvKSAtgZmjhziibVSMzdB5MPSFfdM3J2KuyGbxGGdYKQejUfdMfn2KSEvc1iG",
  "key32": "4aEWBq1xiP32qBLXtbWdXdrdZFRFagqfSuy7ft86ygn3byHWRC2YM6RHHpdEQrc68X5pV9CQP2t8jkxHJVEpipG9",
  "key33": "3tRxJdNAZ7ktCNA1Q5HCNGdmQa1jrYBFQthfceV1VFHN3VfNsaEm2tjzdWsyGhwGqKg2sSYFXz8MmJX472JCdGQ9",
  "key34": "5AtL3tRgSzrJC8joisCMzm1nV4kv1fJ8UwypvvAtgRZTByakoooPUkEJ7JxfLc7iSRGMoYvUpR5hrS8XUvQxhahn",
  "key35": "57f8i5wnS9zNy3ARW93baJpF3AKCTCw5uBBYnxJjJkRbXeahRu488VE49DjbUdBvXRTYUHDine9pCH18iVMfxtoh",
  "key36": "3WJuEAEEMmMQKHhdVc72yytMZmX4KkpSMLgLh2NXVyGZ1teup8zZR2ZBtFopwkGgEUUVgpRnFM3pDVDHcqQWBRcb"
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
