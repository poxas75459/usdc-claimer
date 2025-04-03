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
    "3J2zEeVtNEecpmSsY1CN7ac9hnWtG1Sx1ep51HztbWz6c7Z1d1hZkLQwVDe7WfDknHqYPopya1pNsmxJvBVK8YWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Cv3G9YfBqZUqnNybpFbkpDMSniqzdpPqiPngMkg9RCs6pafcfW4SqTsxZHWhCUvVVPvYgK64CQcWt97Ue9sMPA",
  "key1": "4w6EZ1B59Fe4c8yEhvYyJWZuEwNaLoZBc1tLqNsbJVusYkDFpJRApRdz7uxhcdCy1nCWgceH9SYGFGeqcGtS2mu3",
  "key2": "2nAx5CZLQYnzw2N4LgNeGh6qmtiqbBFeyfEGFDyhnjZAiwgZyLK61jvwrB9NXS4uWK9zwjc3GDVHJhGnMQpULgTi",
  "key3": "4iauH3jRiNW9FFdBUeEnmjT31F6mGLF7ejFVHTdnHqA4krzv5avX8VE4YH3Hx8ij791WnaTHpKLQD4moKqQQxCJh",
  "key4": "2NKhqY4LVhfWEjt9zAgwNB644Jn7zKhKs2t2X7KFL1WAmm6EEfxcts1eyBkW5vAD2r2M69ov2GYczmd8nMX5F6gw",
  "key5": "PAfPf76EWhY8F3oWHkaeV52E6TmcVJjobH2i1boPJy6dTWq6qA5Kht4akMME1XL41iUQmWoCcCrjbaxBrwFxHWn",
  "key6": "47eEsBkTQnfeK2PfrDtHA6WCD8tEeMxEsUSUthq9ZUFYzkELgtVGhv9Bifs3HD71NbUwmHQPL8LQzkvmsoJFZhuS",
  "key7": "67Z7ftZ6ToRMZ2doQnVULrDRr54sCX77MBdeoYWqv9cqisSxeaAxBnE5VidCCPuS3ctcN4sv9mtKkyeYGCZBL51d",
  "key8": "4YZ5z6sdqaXtgnXTmUADJL1aX3gE8Dc68LXDQdF6cqfxGNXxiJ531qMNUJSgYXnLW83VjSe649i1mfE99sor4zAH",
  "key9": "2k6NrRh6mmtYbeNtmMWMT3SzWtTWEuQe5mHaUKJjkCGg2rNab9KBinXNhN41LHmb92Dqs12xNt6U5eLF7RT1t3Td",
  "key10": "WTdW4ahP3xarTNtqARHW3VUNhM5GdgTxpwmdKa1fXjJorVNw8jf8dFNzuKWz7yBaSyEPXw4XM3m4wSBZzcfjPjq",
  "key11": "3SLMrQ3RKaK36GMteWNPHe7W9fkj3PV2cD1hmAJn3aXbAXMTdsN799Xhe2gaNACdxoFxAzfhRUcNd1oChyMMsJn",
  "key12": "MC8cmFe95GtX4SZf2BSPAZ6p7Z8ibiVgkQPfNP2XdamDbinXfLFuFBFGp5d4BDTueGGo4bFYPtTRZitYqFpgTqj",
  "key13": "3dgDMMiFmM1j5uApqoGXZkrPrU36vapuTfUDEhHgBeAdq1pkayhTeMNHcyRfYJGA4ftyi3Qx3u3iAysavTsD1B1k",
  "key14": "5di1FyPGu8nU18KWumUSuvLWMHw9WqQfpg4xifoLTkpjpEFiV5KhVjkCabKbqf7fXAKd41qdCmKwiH4kUQQ6JZNd",
  "key15": "5JJo6C8MUyr3ZxyUpyDtxvquuvB6KTmHeNr9pZBeYH78qmBDi38ESZHhSb296eFF5FfCzq5Fc3MsT7gprU17uJYv",
  "key16": "3fgBjLMVe9oA7RHNNLeymb6mEVwB5m2SNTbei6tBmgBiQ4zNCCXcSAMvds7mBo8cRNzZDmbqNuQCH3Yy3hbuPrZ3",
  "key17": "ePsgSfuepcw5Hp1KQzyzMMFWBy3pDWHHMhxTjJJUNhRrNb29rDDj2Q4Kgz6PhQ7hLgGCghWU3QGM9Sq3TYLRdX7",
  "key18": "3FLorgtiMtUpuc7FAADaBzvFsqRnFmXe8run7V9ZKouXMmxFaEG4GsWGFM1VoTAP8C7iPUa85UGsDtJL8T8DpXrz",
  "key19": "3w9WsfA2NytRBYBs5Wpn3pVyGMnGzmSnLsLC7kyobspKsJBsLJSJFQsSQToZ1BfQpSCEcmqJw5SUDtwMRTyd1DVj",
  "key20": "85mHGxB5F3E1NGtBcdsb8dGD29Yyfh3gm29hYjCSFUt85jbajovq1sua2SfjEXG1ZUsfCP3JTrj1U1A9AEkh5jq",
  "key21": "2cR23ay4UfVi3mz7SLKAAYP3m2jvZEbj1GrR8UcBWtLKeZyFb8RMwKP64n7ZbUYokiFetG18jnzad5PE2kpTxkZN",
  "key22": "5R2G8TgviXespTwWXcWVCKrFdQfoxrFKndkFNc1eueLLCG1P2KpMMUvXU8gxZh4wKmrJZJGC7m37KawtUPYuxikn",
  "key23": "4YLAhJTqDdoXTh6SySpbXBuoHAUmWSMvLgY4iyqvxf7yp5JPjVfh86mdr4VfANtmAsacP6yJXFrYvcERGmq1uHiz",
  "key24": "21CHcGku8qabYxocoGsCzXuQhpHSG2WSwkQYm6Hm7cL8uiUm2HLSnZKcxmL9jdyXG6kpbqJbhxydR1EHrdw7x2RF",
  "key25": "37xdECX7mehbV95jqameyMfYny9nQYy5W3n1FsDVCUAwZDosEdQgi1iKWhuo2cci8U3MA7r7jvaJqZwG36g38UjK",
  "key26": "5JUdXyNqVqoake6YS9T4uemNgiR4axaiUczk6rn6Swq8NLMyiEdsM3jAakskmWKHQRMhNfrgGqihMihAAKLJyWy5",
  "key27": "3i4hGwnkd4gpnKeBJWxHpsZGP1mE6JghiSbGvGJ4KNKwGERxKMAPWVgoWKcY2Hj1MCuVkmRMybcj3JD3eD9K3pVN",
  "key28": "26mPDMUdvETFpGuuwYYpJBwVXQr4Bqdk7hvBeync7grin1wcho34sojzHnKz8GMNySTFsgWQ4rTVTNJJ4xe8yfTw",
  "key29": "3xe3Kp6rHW2oQtFUPXAKVEhoWzSiZum5775YyE18VvF5pvB8zys1ATHEByuCYxPk9XEsgoRaUVSTJdoRSTc8KyMZ",
  "key30": "2eo81aocUcZzqyHk3bLfD4sCc9o8McmCygtF6HgfpqTZLZPv1cvCQabJERDFzSHSURbCwA2v2iKa1Y2twM4Fz8f4",
  "key31": "3jVYDJyA3yf6zpJM4PVLiMvAD3STMBXLCxXPZWorB4nbzuSE1spq1Pt8fAixFRKsBcoK9fUWSiuBDdRWuWwqJNqM",
  "key32": "PFnjzJs5mZv9r7ozVzyKWp3igGUWvEy6rjHfTHMLrVZFV5vwVhqv5QxZ9y1ENtiQDQxDiqizyh1H6vQejnUXt1N",
  "key33": "4BubDSd5UxfPKpJX6h8M6egDe49yJAWgGbJgEnbQny77huNQtTvU3vHAyoXSc6z4AWCnk1CRaoGesbfbPnb5WLBy",
  "key34": "4RCddobq8GfSGJget5uWvV2au7Z84pLPgZNLMYDyttJA1Ew4Az1VKdnXbcbas2E4F2kuUnRDdTcyUf1M5aWy1apu",
  "key35": "57WyKqZs2tfgriNQKuLD8kjWJPYzoAQ8P3Q8m9rPxXHpkBnUeSpsp9nA4DJE8TbePiYtC5gYoW1Sj21CyfNfuY1L",
  "key36": "2jsRXhqELuwMgq3uiD9LexiC9dNajUqxD6Ncvjji23RnhPnYGBXxZFn7ygYtexkYTrDZZ7dVGCLp4ecECuhnFh5y",
  "key37": "5cnD64ZTKB9KM98irk9g25QdsvbMak5LWKZREsFMbg1HiM8wZ9v1HZ518EMjt5u6ykj833cotbiU1jvuL4XhDDZe",
  "key38": "318XDujU5FwJ31YHDDZ1Xxsox8AMqPn6aYVjMM4N7TuLJcssfHPDntsWH8nDWVYNa8HckmaZhS7P23ZU6SQiedRi",
  "key39": "3XETtoAYnzifaKG1w43Nj4McNQq6wkbLqFV1SLVjt4MUM7L3dbKY9eVujm33Q2xu53GhkE2ExP8qGMQozW3zPZFw",
  "key40": "2zuSsuwrKRgqchB78D8xDTSXKHdW9mK5Xiev5bKzndA1QNvz9caxXSCfeh12vfhKHyGrohn3pYioi44CdTDtu3EA",
  "key41": "3fub15grrngem3A82CkVcY9PRLJv2rZX98KmvtMcUnWxvqTzv8V55YzUybi6rWv89GzKtufDeHLSMg8vbZ5KbEnY",
  "key42": "5mwwsV4ipWgRSYELoV28ZHfLEzmZa4C1aU1sYTrxh6LtxPaQFSA4CfRN6qsiYP11dTBrunZjpEwZ3rWBWzxFz75",
  "key43": "5bT3nEiFztYE1YEnnpePbSCYTroG1Qm2ndMhMa8B3tk3opdzygs41ZfYDJx9knMkpp3qCoRGsagdc5oPQyzAKLar"
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
