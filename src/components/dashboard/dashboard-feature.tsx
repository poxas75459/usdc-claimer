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
    "5SNvZawgdeANW3zcAbEjmqAKFuUZwZP41xNTmQ6tt7URyACwChUMmNWXkvh99LqQY3adr6syVqHFgo3pW4nUZ4FV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WStSeeT6v29bXCNf3oio93GSMDvWWDKr4QBHsouKcNqseMjvJYu3FmJLBLMoFS7pnT9fvkV6kQyTnjd9ciaMSsR",
  "key1": "2AjrAZMNSPyqz3V2xYXuZYPHbo1VbwDLaWD91qELExmVcr9Rmqr2pngnUprnXUNRyeUWk2AYZu5P8KqGVi8DqTwA",
  "key2": "3hxjNEjufjuKMdj1UVesPppcofNYSpZoivSDLgpw25b4dDF1Em7Uq5X3Lae4kankbLPDugKfvNvGaABt9sB1j4HE",
  "key3": "4JNqMSHqxyk3bTCvy24prmdGptab9rUa1xA419FmdGTKhenp3SrGBRTvjZWXGeDq3v43ZEKJVzDFaf37Z5qLunWb",
  "key4": "5o4L76g6LbVQQaqqMvMvAuekr9vqnVuLkNqqo3Y7bCuFCqSVSzCNGhr23VQjYzN4twPip6DpdeRDccKZfSmw5GmJ",
  "key5": "7CfKKaiaNbHTZSk1HNzzhxPJRpXyn4v5FshqWqhSKB6pX6LHdDYdYT8m5kt65Yf3mronAq9oLDDFa1WYnzNMQtb",
  "key6": "5Q81RewtLSLX2doPdfSVZDpgwKm3oEpKTvZ3hzXpD8LenfEFmMAB28GREfvn2B13MrFPLBSCBic4476VeNdFcm9Y",
  "key7": "3q8j6pLyaBDQuLbRW9FqNDpMRWmWmPJFyMCpdw3Thabuq5BDkVdKu6KKZnb2LVpuyB1B44RsznYiLy6AYiHpaGsS",
  "key8": "2rwGy3B3JRj4RzHWz43SqQmgf1kkwFhwubXY5s16i23QY6Cdrm1kquoWiovZLkLfnByXQxMubMeiA9qjF75VxZmZ",
  "key9": "5BTpinxjGyvxiwDbcT1fjNExRHChdswEoeZc84mBxjmzYAivrbvAcCMUtTtkXHmrKdSWohUDKKCk9n9Ffg3MbMAp",
  "key10": "2M8aL4meVgCNm61vJPpozti4JjvR9jmKNL22EJJYhbrPcWoWEnKdbGM4EmG6Yc2aji7xcRNJRasfUbwAJCCkaV4C",
  "key11": "2MhiVUyqqPFfAZssfkVMBJw6yAcLx6yZGza17QG979ykLKGDdv2mzwTL5MRKNJj6CQ3uZnr2phJxpVeo8HjWyP4U",
  "key12": "bxuYcBbS5HeKVrfp4MZCojbqNdnuodZVwEaz5yKPCH6iN8EMi2kzEACJwv91MQEhHepRSn8PmCCmtSpgcpAD172",
  "key13": "2eASPyNJFdtREHK3cYj9fkR4B8gkpaUu6Y8o2cZmquGjjKPciSZps3DsmQmSme13GR9oBfE5u8dkZJXPaKAKAv5H",
  "key14": "2mgUS5AdZd6fh1qpv2KwEcEMrQjDgEso3gehagmYYUnk1iucYuu6xTzypdqWpKRcbAW7ZgUtkHaXkMAqvZkcMzU2",
  "key15": "2d2Lx9Z5HKGLgRRQ9aaG6c31hBQKsWxC1v16NBPaAZ8MAnnKNKnxz2cwAL297fEvdChGSrZpTGhERg566eH4mPnD",
  "key16": "3XXSjEcb6mvV9gmSPS3gQ5xtakZ1UrMTQMYUMoqeqfRwXrEJ2nqo5YWAcjt85JBz4WGp8yyRuD6m48txfsyWtCot",
  "key17": "CHMZHg5HvmcuE6eCRTQVkTKHM8hUfTr6eSEnhaAq2t1auWdDRC1ze2jupf63c2sUo6jTWBNJ4EmcnjbXUkq63ho",
  "key18": "3GqhzAPWd3XPPG5oRZ3HnwqYPwJccX5qMeRuit15WR7jRhaDfh4jdJkLf19U1Zb8xMCqqFkh4GcAFBbSZzku9Z1n",
  "key19": "57AMgF7XHv9iqByCnZhEUM13QvczPV9eBVEgAJ4Nivisob1PrEJLhB7nD9u5z1hJvgxb3VjFWrXoGeP5uyXzbGfS",
  "key20": "2ak23wd9TmMMhFZxTpMNnrNYQ4XEUyWboJr1nEnf6aDGGJWwzX1Xd3zuKnsR69LZE5mypvnZ38N1wcNb9PGNQtQN",
  "key21": "2moCkWtLeCDstyDgwijVq4KCBV8iwSn2gtFbgRu63qmDFcWA34JeGv5NsTwbyu2drr3PgEtTU6sQA8hKnW4wjmaq",
  "key22": "u2NsHcGLb29uicn7dYPVSeBRozAbgMc23ng4G4eMPgMzVL23ZLpgqmCvPwLRa49qH7PufW5DZMjSG9kFuRuHfk2",
  "key23": "2R76Ws4UUUwDY5adaC5EGJzDLuah3TYU1LjXoQMbTfXyPfh6EaAJhVEeezj31SEKj9p61dWHGkyHs1Rzvz3srUpa",
  "key24": "RZK2yoCsTu5o2gRH6rZQZw75W5AB1X88CACToQcMx6tA9cDYX7EK99J6mCG8uHkqBkP2V5JkpWHQR5zUJXXHZjZ",
  "key25": "bm7Lgv8a98Ho2JgfX4XQepyukJ3XnKHfftyvdNsENF6xCAar543XpdzPb6cptVgRgMAZoPuzTZsJt3F7GVekJsH",
  "key26": "59Yzj3VhxuvdkULh9o4PCAF5U2ci97BX4T8V4jWYevUAscbm77kUzRejRXUB3jqwH2DYERQbkPRsAgkBeGpfTBtu",
  "key27": "316sE4vKG4mkjMhcdSJq7yDk67zPektXGo7Fv1tjo8581VSq1r66tK86rDeMzax2DqSCqJbqW8KGY4T2Empanz4v",
  "key28": "28Mocy5ULvbiaQ2iBDChoPurV5HU5TTNKq7CqeonfWarzgmTx2nx8m2eiQSQiKRiQ83aLsrCofuJC38QcUt3MBq2"
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
