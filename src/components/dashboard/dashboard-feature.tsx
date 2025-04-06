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
    "2VHiMppAyyLkn2a5i7Y7CCxBFMgNo5VZRcFtggShYLMuL4zhy3P7VAgrLPySzAskVpdtfSrbqajuyuH8oG97NXf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DX2i8bJPG9RWw7uKiFNaBHPHMGxDVpanWUta3HU3uqJCLMCjp6LNsPABfB2DfUUqWSn61rtbCmxaGn2tTxmy9vN",
  "key1": "5sETcFR4uq3Ypef6HtRSjgPriH35c58GkBFcf7Djxs1QVf1v9B8X4iKHNKyvEwMPUcvVCfn6hpznT7aechehRydv",
  "key2": "4nQEDKaSz5tYBHABw61dPUvRY3C4CWsU8LwwT7kdBhgVAQVqsY9dNtvEh7UEhWwzL2firWfiBvzoRdrzoxJx7W5V",
  "key3": "2Gqic92Ub4CKChHK3XuQ9JcEwWKxTexKYjf7NoCpXJ5fBb8LwCyWbFgtBZNfzk8GQb65ZxkNC6K5PYEg5cM13peE",
  "key4": "43iKHaYvDv6Ha9P6zVsTHWFJKFPMbt2oWaGxDS17rNAgjJqBkcUHFCgtYLBSapFS1P7CbmeS3z8GuXxVEbVyb3oH",
  "key5": "1FkYvU1kLEgmmJ85z4btMZnNWd3L8eHFYB82VAFZhR3mq4ZcEN9zBA3ugtQ15SydVMhfPQiUcFxrSahRWKU1gQJ",
  "key6": "3KjznbEeimx492S31qNXgAf9Q7VPN3nqwRo2WbrPBqSMaEnbcsgAEWmk1MTj1bTYkvAd4FjxntezKsEGT6sWNhDg",
  "key7": "5wadwoKshoRMTxVd8qJdo2tHLjQhhXs5bfNgie63jgr9WkCT5Pb6uZbKRsadVokmV9MFoS6K68hpJeGDLT6HdEwy",
  "key8": "4w1kFEcFFWJNVqwMHG7hohzrb2u5LbJZHg9LTeGjN2KxMkSkwbGN1nRCrdZac5zy3XDBPzHamZRcrtLrYzBYs1ga",
  "key9": "5CV8i3dCQuFLnAkoxyrEYNniB8w9tr9PcALHLdvZyoQsy1D94jPsAY6oty6JcMp29rUpbjNj8d7tvNjxCmmVEWNb",
  "key10": "2pBTzYFRjGkeyU67Ptw4vAEtbtetyDxSLVkn9RfgTF8tuFqAkxbNNyDQ5aSNfE1Ys1nxLNpZywviaNhHiVfMrKYM",
  "key11": "3JWsn6KfxVwWNy7ehGHiAKmsFGxvJ8RvUsQSUGCRJqEMSekiUmgmn2Pa8cNW5xE56E3EFmeCjmAb4HhCsifNXysj",
  "key12": "5MDy157w2H5FvS6T8usWkPWkbHqZL47e6qptUXNaQjFrEzvSbUvo3e7FqaXBQf4fG6J4DLVxKxQAL3vYPggqnXkx",
  "key13": "5m1S242jQWfACiKEUAQ2C8EZohv6j2rp5C8ngtYB2to1jc5VWEf7QDUviYcYaAUFscSEtRYHs4A3KaXtJ6TZNGym",
  "key14": "48bHdnobZqK855vfrrKT3jsdAzicvYSr1woMdksV5gs8Ka51hSHNkaxSe54KvPAHngAGGTNBDLCoQDViFstrVryX",
  "key15": "53K3i8sXfap554Us9ciet2yMANr6rquZzyongUk813uBqRk2u1X4YN31acbr9Dm3kiU7x2MA8d8SqLsh6qx62sPu",
  "key16": "5q7Tgkp6CxurKFtddqitHUhycya7NzMzQeyvKqPcqqjgxToBK89LQeciaLyFSfciFgHddEGnXrK9nvcPhoRU63fj",
  "key17": "65JHZ5TJbqGfBPgy9z853PAdFQcehYCZWTPKkCXzZJs5pnJ6XwqSnYJRa3zSCc8MN5teuMmoV5bq7VaT2xo9KieC",
  "key18": "5geAsibc4Jh4SVm5NDnsAmp4URjDLpFFkK5f81Akf6hphREYiNg6E7HmQXUA6qsivtqRPjj3LFDYPJspKb2JGpRx",
  "key19": "54aV3ivjU5oZSfoV5iqBFTdSQdpTHdEmFHGHjWACLSNDzRd5PaQSjXjKiz2aiSGUUtiohD33SEvC8i36jfX8s6cC",
  "key20": "61xf8NdkMRNcPaWv42uTaYFPWhuaPVAciw6BWMfYfHTNGpwypzYFPQmgBcVYnu4h1Q63iPy7uSiGyMwD9c571MBz",
  "key21": "4dG9RLXkbPX5WYb9WkKYJepN73T4hVV64XgVZ18BDUAu2ibSvPbkYC4jBq5iV6G47GPQQaZsfUqbSSFk7LLqjivY",
  "key22": "8YKuMA7LdDiZLmDgmAMNGf2SUUwZNyfXprtxs1UgAZzSbrhgmk3eYDAcTSPWd8jiM6cxAagbTCw7aiGbPitJsVT",
  "key23": "44XUoVTAbUJr69k76ppAuEQcxRFZPSRiFRPChKnx6cfmC4Sze3bgULXHfpRcC4FCHhNXYMY9qyCQM8WWzuSkmo9D",
  "key24": "2R12GFnm2FQ9zVywCyzcg6PSNe3diq2v9EPBhzGSwURmSzVwbpkkRiSjXVtsDTpRJGZb7DdJte7zMV4D7krV2v8Y",
  "key25": "2c4FCq2Ra4zGTJT5wE7vT6VerxCKAruoevx6AdaNyg8GVSJQMpsZ7Tyo9fKjQrLjMDTetDk5qPRJhDHcvTCPWucC",
  "key26": "4Ffn4BE1xgnq62JmuN1q7A7SbpgLA2WWbtMPf9xda4dy7q2wetPXqernzZi2hrSpR9UX4XJLLZK6nnyTE3wkzagY",
  "key27": "cVJCfDdHQitMUV4VbhEX9bbBvfAh9qLtsq9u57BXjWKk6Pesnr1sQW5mGqB91iVrmNeAq8yG6AbGTsqf3xXoaBU",
  "key28": "4L9YozQ1WeqZuJ1LosUxgRxau6B9DWEKFcU2EixerwJyJpsXVqFUqTumLCsYnzycUa8FWBqhKJDKH3V7m2ZgzuZy",
  "key29": "TxsYFWxPCUVHiPURkankaqDTkssGnjW7QK2y7xHbaoecUixTUWrqfFKVkcPJSWjGxvtJe2imPocXQYe4TPPt8YC",
  "key30": "5Q3ReWFd4dEzt2ZJmBs45dKEikfw3o2E8jJ4rNciKatKZgcBq4U4FvU8GXZWUC9MZUhXpAzDHpyMYZsJGmq178wQ",
  "key31": "4KxWeqN9nE8KD243dZW7GNJLKs6jH9y4cJTqimMowkKKY9zeFbQw9FJGyaiMTVTTMkLkowbAPgGtTRgX3RxSEgb",
  "key32": "5ZXXjt9FzXcCSoRDTexLynWsNhLz5Pke53sZDuUARiv2KS1AD8BCxPyMceMrqmN7NfeJ3sYTwrdEx8Z2QHjmRcAW",
  "key33": "DdiiBn1UCaFfeDAfa6rZWjVCC6d55zurH5xvHENW4BYoLvoL9Rv2R54f3fKGxhQmbrMUyfNpe6oAMneK31ke6vt",
  "key34": "3mj9McEwMQpK1NByUMVEx4g4j9ou3qVYHtMsAXtHj9TkGjbe9caopwsPmeaMjVcWQ7P9tS5njofpGSrSHV5Ke4Ea",
  "key35": "4Z6CXJmgaht1mjxNdCucXJ6YWBjkKkXHV3wWAHhZVxTgfb29YrLjqWe7TxBGdwBXjGbZnvwXqPQtX4K1eeWJgiqm",
  "key36": "66XsrXiSis5dHT2VmBEvoinmrHkXYu7aKFMi4qibpsJJaRSGdW8nMRkspCpnktFgyU1W9z3bc8bUJ9r5wbvYWxy4",
  "key37": "5ub3SeH85aMv7inTsiPoBT9TzBKX1Sc5KHnLoPQgvs3JdjgqAdtQ6rTtzjig4jddpmrxNKMDmkJcpD618dgGad6h",
  "key38": "3hbtQ8NsFUFxmiyhnPTxCk4wYEkUohFKQXXy55TgTmr4WJhq9a9FqaLzHDMZwP38wC71UVmAG8quAUGV7CjrY3Vb",
  "key39": "SxCC997iDwpsYVwi2itGBeT73FhWMJdiHqbTy31xLnfZaMUJxrLrbUbqXXQ89TFme4sk72RwieQumHYhqUKKZ5T"
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
