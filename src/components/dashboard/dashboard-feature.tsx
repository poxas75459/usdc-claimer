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
    "44KUFoG5KvXEwZ6fWTmdPRG7VtF9mWHG4xoK1Mu8VdAuWNC7ULTcmFosjgR9kQtmCbNVfhCCrBtcHusKGwxX65P7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VQLL1CGbwS5NaF2TVGRafA7spwwdjkzagqtujoVVvmPLYzP6PkTg38qSdAQ6hunK58JVMqU4itTKmgXX7srCJL2",
  "key1": "5Mx1qoUaqJr4tAxBpwNw378m1WFpymjXng7V3mxFk5TmTftpwSKpair2ayPzZojKRkPJo17uktxRoa56E2CAFYLS",
  "key2": "1KjaLmXW5ucb8P5gGxBCtgvB79711Dc8eEgr8tVaJtbdNLkS5mmHghDMiAjJnZGw9oHthmPFaGkoCkJwzS54uPY",
  "key3": "3ouVJmwwy24grZmRRQMwKhQArEc1UcJhv35y3mx6TVmZRi3junEJhWZWu7c4RMTfshvJzRAoPduFPeLdAEeQNhM2",
  "key4": "4M2Ktbf2SDThFcvYeKvXjPXUAL7kKqyPqXcaw3V6M9YFEwXBZgTebfbNoxefKWvPik72EZpVudS3kgsaLEwgiaZS",
  "key5": "3nEC9j8RJnXvrY589pcCvfH1PX8L2wcCsFG8ZDRukoiY3iUqWJm7oqTwaXA4ELfpBa8W3gwEAgZtq9q3cXgoUyzL",
  "key6": "2zXAyDz3mE7ruQEXuiFybSWZ6z6YqZBXP7PgcYzBrZ5V9QmXLMELmZorwvh43A95yLQQU5KRRStvvZK1Mh2WUztP",
  "key7": "4kPjZusLbtJyhUHBPeJ3GTr1iv8CYv1Spo2uTriVrommFDN2JRBLAQ6Py6xydhXHDybJoHsYKZQ2DWLuw4wtwGyv",
  "key8": "39zcN8wcHKUcsCkrd56yVnnvFBvccJ26rXWkKzQcYzsparrRBuhs2Da1xTjRN6v7CKmhA4C6sgtsHgBVAMEUcbG6",
  "key9": "2QrSBm5Km7EuyMu476RSCdUk5PtXqgT5mkJNHevj3JGj6nXGxFB3rtrfyq9FC9g4AXCjWgmr62KBFcwXinHv7jW",
  "key10": "nauNLuU8z4wVmEJfZ2bDbGFqjKGTPJUgviT3ZmiH4U8mzPAXb37ebRhdN4kxND3ysUAq6PVUyHcu9emyHcxjqB1",
  "key11": "5RUwRh4hgwH6ekWcmMgPUbTdRWRxnjGXbEjbkj37PNYy7U1XHAGcnPrVPTWG8VpRakDHawtRrcFFTMd4soCzML6i",
  "key12": "2y5zPuajEjHkSKmu3gHyvaAtgHqjLCFGfdRfQvhDfuQymZj4qKt43ywjRd9Wrrnf7HtMMMZgR4ERPsbUASkgegEa",
  "key13": "zcuDyBNX4LXcKXNDpo3ZLtRMXqsTgmKAPEGXM3jsn6zWJziNcP1HYh48LQpfbZEsgAMPSpV2EoLfqBsBBmwkeXz",
  "key14": "3tJZCELBNposdGpmXcdGKnsgi1CXEMi5jVGvccNevoHd9PW4Lz7ogtnwLodc4uuangAUrCbPz8zAnPK1XUYaAdUR",
  "key15": "5LbucA8WPf3PeZxLoaUtXpFN5nxXVpW4qz1qA9QZW5wTHR73NPz9w7JF1Hj8M2avqfLkQq9KrkjzGLXsQBkZgEHu",
  "key16": "5VpnxdXow9dMqwN4NP98tUiEus9BpEes1a1kY7qEbFhe3Xjd7jettBJo9GuBrKuwcXWTdnu3eKeEBozNd6bAZWTW",
  "key17": "4v41DCS3kQwt58UBb23NgUFccPZkbj22edsswCsm9aNdeZuDY5wv78f1KGKtZn39tDsFoJCRxVyHSQswbzhEUPVQ",
  "key18": "2SiVNA2j32hGqDyg7vh7Rn7VXTnji8QM3vzfaahtpMKbGP75LaZ5QpsLkJWwbVJt3L8semGqyxnYLwFMhe7jyq2E",
  "key19": "2Dj3eRzh4nQXgaQuVhPQf5qdCbaPaN9mdN94DsVzkD49eP3ws2jyRNXrmQzjFNoUMQmQmkD6U29Wb4ksZZP7Q8zb",
  "key20": "2qazkpHqRx64a6J5fdQiZsQA24TQK6tUkjm2DQ6jiteCohQB1xsC6Jp35DMtSprjgGcckpyUZ7ZxonUpmM9Jy7rk",
  "key21": "ZDujarJqJyrpqCvbTuRoLCjoGMkD7HgiJ2HsfgTwLhm1cppGsy7aX8fUJX7BUHMAaoAGQJ7kFCXJmUJTwWhmjCH",
  "key22": "Gyzv46U66TBaufYSAT2Rbi9j2828jQBUfiqDWanxVHFSCKAyxkpNXu7csRhaeeuvak2BUKQxKVFwMvDxBT2JAc6",
  "key23": "2Rh7XZzvsJ9jB8ZoWd3nwEWime2P6SvFyAzRyUWiJCExJb7yy2WVPmJZCPMUb2eY7Nu8hV8vEYZpzv9MxRGHBfqK",
  "key24": "4BtAsD7deRhPkvbps86CWNh92KQrrZCxfzzRgdLWZjwygNUpNJiPS7PXovpxPYaxmezMxFyRe39NwD1GtCbQMiqX",
  "key25": "V1A6LWTrSJV3Ra8mCUwH6MoQcDnLX9oaobQavr1wkGqrMLgVLAPWovMd44ydRfzHjhBvM5emP6gB1BAXqRkekis",
  "key26": "2dPXWcoHU2dT5UCwicT2qNU48aKmM1eeipVfTfVLM28vwsL9xedMUS1Jxbg4vwhureLGrCrAY1nrzBSYJp2SjvPF",
  "key27": "oPfH4mVTWUsXqCF3MhBFCRroGsSzs4aZ9CTeaD7C8c8bYfDRqZPRdpBEMF5KJPS9pEzRWNxd8G9Zmxq2zVvCj3n",
  "key28": "wPq5Zt5Tv8jQJc9mjQzdpNAd6bKez3ibpK5kRF2WBUgQU1p5GnoY8nNNtsrSDVi5B7GHzqFsJu8YwZPeL75ePxU",
  "key29": "5Jui2H8ZCdkfCSEA5yMQe4adGcTYZ2qQPVJjsPrVenNcBu1czd3UNHR72LYgnkBGN57P6vxmA7toMJicjdsh278u",
  "key30": "4whKV6nB6MUqG2acyfJajDzdBZA5nXd2FL7Jc7c3hiSNbVDZubnE1vNXqDJyUQQdUxS9RiotCm3aBVGLDvwhGdgL",
  "key31": "3DudW5iTx1AFE65w21SGSYaKArGQLbfc8K3sYddisVmr6eCtebfNq5SJQrnUz6Y7RSyqJTL5Bmy8mnMJMLD4zqjy",
  "key32": "5JKN4F5jRjzutmN9x8ATJa3ezpcemMrJqufCDHyHjV5am7PCh4GNCVbVvWSPLRbLyzuDtDitst1KCcZDSTKf7bct",
  "key33": "4oEi6mNYAGrhdyG1GiFe34aajWmNqyScQd8ttoEBYGmSniKeNCf7Hq9tPhxAUBLCFMJQqo4YatVNrNzotC1VgStf",
  "key34": "4Rh9Gpx7L9N96ZtznVqUUvM9wWtYp6uvLWH3Z1YBzePiVpiNtbMf3GyG22fQtNUhEkpG7Q4C4msLnmGvCCVrHjXm",
  "key35": "PGBbdBYh5sUUiDL9bSobBwHximTPPVD69DdWMKYmYx7zyBvtdhbeKdNLxq2iKw3NeTfMvgzM8nJoe6XSaVh1eTp",
  "key36": "4kcBAxKTZHQBMtZbArPRa7JEEt4bM66YSrnGfLeShu5X2HjKSMw72DqwAA3r3AKMvL8Ri4QWG936dCWK5iZsaYqa",
  "key37": "55CPjwJTftkZZzW1E1CCBJ5oJZ9LR1KzyB6x4jw9oFdnHaU2wdpBNHxZAzgAadM5dEdKvEjyipsB7c7b74i99zH1",
  "key38": "3LiN97yAtq7AXRDCLapMw74QkrUCJYcZjo9JWHHieVsEXMaQ5bzRXgwBoqhJrRqefrj9bkiZQB9qkxMHVJ2FGPYB",
  "key39": "3oHZdHoXopAxom26XYw9DVVXyi17oyjMsqpYZWMNdwHMWYHdBMs83PU1g1NMszG7Nry1G8v5iRCMxGQHR2dQyX7F",
  "key40": "2KZvaSwdZxkjj4tKyheNdPSjq65kmE43A3MZP6W92dXWXDbPcHNHDrWthnFNq4ek4vVXF8W76YwbmuvdEStiXYro",
  "key41": "UxDeyoSU8kc6fx5RmGRjgNk2eFAo4d2FuRtQr3GnQ6s1bAZmUiiegj79ivumDYAugPpVJXKUaYvz82FGVWgmEtM",
  "key42": "2hDvRefkidkzkKjwjTU7WjHyM5cumuTJ2mQcs3LZ1TADH9Az5p5PLR2NvcnimrxQqXJ4RVGjPGGQZcmif14gHC8d",
  "key43": "53KzQCwoD7cxLQ1DyhQMPYi4ydaMesDoZBeExPDErdZT9EzopskmjPcWyPgWnfiN6eCW5FyFjYLCfu9RaLtAn7Kh",
  "key44": "4vZ8f6S117rj7UwZT18fGZyiceWjGUDLu4BUtowptexmkXCNNsq73RSPmMGafVn2msdxYMjVTj293AMhofX9uM8d",
  "key45": "4prk1txq3Tgyx9oXvJXEVBrVwNpS2Ht5wi51cCRxmJCwKB44rPPXke1hwfs6cGaK9z1dFrR3cxMK8YR3FKJtdMtz",
  "key46": "3JQrHy992cqxuUvcGz5mx5LfvCVWyTngrFnv12vmDccMGd8rDNamjb8J6yr4o3NsKojc2BrB6YyyxBEQbmaJrcXv"
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
