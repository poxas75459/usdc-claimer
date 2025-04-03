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
    "42fHgTMDHuXPUkypzWhD1cnLyKM65SR4c19jM5sX38bvU1sbfGGRF6pcJ69bT52pC6QWFR5o9opPYVEU26c7dwSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C7aQ8pJodKKLzwNoxbJceNVzX3daJX4r2CoQ3YDnk2ud4RQwFoRh8Kdabt5FiMhzmhtQnCtxZQc5BqAUJNTn8RN",
  "key1": "56MdwAbM43hDM3chYDjJNLfKZS2aoPeyuWZbd55raQU8RCZBdnGv6L5e9hbTK84jzqteN9fJUbDTR7ohyLsNuXGV",
  "key2": "4V4GLQ71aVCvibiFur1KxTEZyyRjLQ3zuKzjYDK2syBZNGbYuas32TKP5y8aW1KZFASbS3Eafytu2LnCZ4ruJwG2",
  "key3": "3zKrMmTwQCd3BL83d3F49gMgFA7jaNMUVrwyYrQrgAYPHsDQMnfzqhtEhYqT8ZZcKGBVvgNPozu7D1T8YthUdSUd",
  "key4": "33VLQh78QLWx9gM1ZgPXXzPkEqo7daVXKA94MWqWNRneycojeoWaKCixYpc9WKroaRDbUo1LXVgS5BB5evUUoE8d",
  "key5": "4V1oaFF8uwHZGaG1xGv264ii5x1XwyjJNZn3NRRxJ2Zof4X8KdGY7aqAgu6C4mwqzZZXeR91UTHG9mupDa3ww422",
  "key6": "2juyfpeoY7KVWBkWcp79YzLoM1zDcmapr2QBgmCygtEk79LmtLrXBV99gomb7Z9y2vRikrCenhf4TRR1SBVCERHk",
  "key7": "5ZBA9RCD1Lo4EZ8GNVULVJTgJUs9wFsEthX3opWBQW9h2wvLRfzAMTJ2yMdmH5T7aM6DNWjowS29iAtNCge8X7wK",
  "key8": "4kiUGmLZXkofVUgVzp4vysUHFeaTsqrE4MqgG7vwDFNyQJPNpP1KKJA74dXVD4vM7ZwomMFKPT5iV63BJjFjMEU9",
  "key9": "4dS3mphJL8T3JjUyVxWLVfeDbFQ115GyVAejNRMrj5ACnHRBS6L3fPM58cS2VWR2tbrWBuY4fyr1WTkKbXaWbphe",
  "key10": "4dZxyXdhCx72RHRXFm1jbzDQNZUKrm3nwRhTYABB8dF9mMSq8Tdv42vcDZnvkzhDSDASfPpLq2vHV6R2FgDfcuXt",
  "key11": "3mo5dTWiuXs62dRkGFbc8mDgt3QGzSxneWxVLTqV1GHxn9Na9cSFjY9mjhctfNdR3WeX9NcJCHYC3Cwmq72meMTC",
  "key12": "5a2Dc8wuVvnLU4v6K5pKLM7ibbvuFSbizEuUbs6aWRmW3mz5sebXK9jugYnnSvzwiv8TyZBJxfXtDDLk1ELHiXQv",
  "key13": "2mvdr17t6cd8jpxcTkXR559uE3CmUidNzuW8mM2SU88ro2EGhDyJyz1y2dRTtrfNpRCEv7g72CRJHJLPxAygns1V",
  "key14": "2g3pSgnx23dGSrRX6BSomZFKdhbj5LN5p9e9U2R8mLjodtSMSXQK5LihZffQ5eKEMcHgSz1akxxAzsWymZoa4D8s",
  "key15": "2nPaFQcWfRgLvnePy4DK7BFsk6XpDXHaKRwabitcebrW7yobzbK5akdy6ySsmdZJsD2Tqvv5DAWiWhXFp8UQzFeo",
  "key16": "2qrPo9mG47HCfAmSaC7jegqqnRecYZcGJ3se2VYkpMrSZWdjVgD7wtkhCkS6py7KPn2xhCGDEV6zoesgFUrjppkw",
  "key17": "4UTMW7d5g7wuptSxB22aKGnHd2VNFK9g3L5AU9rKNmp7YQbKp4uCAJg74TnDWJzHfqnfXcXUjiZ6Tv3kyzfHFsnr",
  "key18": "5VooGP5eNr1qt3FQQEqXLJPappE1eytDai89harZ6dyyiV22waEgXCXoqUyL3PtRgnLgVyeXSk4NE85DB2y2aZaC",
  "key19": "XC6DCnM4D7dL1jzKbP4VFZLHoKNLAHE4EXfeNRArU47QhuDSaAjpoMCJuXoCuofR1fk79V5GQasWYEVQfK5KcTH",
  "key20": "2Zh3q486RtpNDghzHwv3W5TxYZSxmjC61Pzp9oFvvxtAjPFa6cQ4bNn6xcrLYxP5NjH7UrM2gT8uwPN9VxHVqmBg",
  "key21": "DpNqcgwh79wcycxYjPDBb74GfHwLuHzPrKdKr1888QxvNoLbxvXXyF7DyRiRkfZDkUrDsXPcKPHe1jz98Zt4PUf",
  "key22": "zwHi83i5sLc2bSELzCCXv2tvQaTt3ddZmkSiFvHcMXCCu77McX3EqPT5A96FuhC3MoJicY2gAyMd6GR5pJogkKZ",
  "key23": "65ukq9wM54eWBSbXAM6R69UjwTHscixWKw1mZKzbA8e9yGsBHq5CMkKr54gzAvgbha2fBcsymDeM8ShLi5gfN77B",
  "key24": "ohEkrbn1ALjPRVZXmZ48jfEh5efCFt73cT5n1wgdGD74j3egBbserLGT9UHxDJCdF7XvbMjrfoLkrVBb4dwQJj1",
  "key25": "33wmtnPy9rpAaX6WBn2rG4dYCJiktg5SDQjHggNBewq3f8tvRzhAcETp2XphNXGWmXjfbKMZ6nFxGnYwCiNyX5F",
  "key26": "ZQVudzL53VrQbSWABTTnoWz3aM5FcWAua9q9YXofPJDpK95m4EKptwkESQv6EqBSnvaUVKkucdqVAuWPqqaoudB",
  "key27": "44HedSKpodiaRBpJ8iJsmQVz9pJt9TG5fUMtGbaAufAwpT5B2GKKNVgCzy9AuoFjiCSpph7MeHusmy1NJJynTzEd",
  "key28": "65LmnpUi88KsRSqn3PKDoT9meA4vTvLsqtFFYMFUWeSoWBUnc3GRWuYmJBWzdKyMTATnYn6ZqpRra42e877cLJo9",
  "key29": "BvrwCoUKBz9aHeMxEcaCoMHJk5EBYm9dc2HWovmETXLn7LTumBfRZzunZTovqbwRr7X2o8B2n3JDAgpUBaTNp1U",
  "key30": "H5ZNjsn15ZLuSmWQbKWLXXBfvhNYWhc3qSYJQ9kgMBnzxUHzxuZJhTxyzBx3xTA5DRVLzHr32UnoGUfjg4p3LTt",
  "key31": "M9XFaZoNdgyYcVMTav5MxDApoS3Fnd8jHeEN3C8L5HFmESSQ3rqFqeojLUvv16cn51F5GMJNFqkmcekXKTCHwCg",
  "key32": "JtVa3iuvRNpTaeZrYxL2XgqAAsKrSVJj7vYcB1M8DGSbnWXz68YJBoH3qNXg1rMN1bMSzTdAbvDa4yn6am4BN6Y",
  "key33": "5z6hfhKYd1X1WX35oKkq2MU5Qmy6qTLV6bcZSGDmXKGCt7Tbt1a2MfrbuLUsqcJHDFLyxzqURty8v8ifhKfEVMgS",
  "key34": "4LUziZUwcFRyL4GZAZCyr9h5opi5wsWhDjsoi56Hu41v7eRBcQrMKzSMyPcwG8XQagVVpw7maZ5RJiViczPfQECc",
  "key35": "4ZR691BCVUAEa7Acck7HKfQ8tFLRRg6CSAjcyfaE4axnonLbKWPZRCz7tctBnC9T4NjioXemT1Xwi2ikr9MYxERq",
  "key36": "4oCj61QeZgrxkcRxAL1TMxwvTTo6tTEU8XNooHMQGkJ3zhEFC7AgUyB5HAQDRsvhKLt1rJEXpxtxnJYj2w6JKJTY",
  "key37": "2EQNWCcKrL83wghhVZiwHHpZFFimtUEqDBPWKQE2GJE2iUVPrWWH8PAXLYXd6iJoRuiHBNnbpeeLBnVPhoXWyvep"
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
