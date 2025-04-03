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
    "5uiqDVWz2rq2vqzM2AE8Ca6EgmbzijX1A2gva9fPGyDYZ5UFvYj9TF1h5yGfoKtS7KghHhtnXYjfVyou7GMnGpaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MiiUsNtsJMuhH5fm1ga2p2cfMpEKRrBmU8JbkC2QXXaBNqpWn7BZ2oYofW7ihRNFUkCYBYEG7ydtYC9QPGpQmaL",
  "key1": "4V4SGYtisyF3r6HVg28mppqhf7zehUGCLh85eQVyvLKRuhRxiJxTGBvUY6d94Py2Dc9eNCeZUN7qGaDrURgyz2Kg",
  "key2": "5hzcjRdEz8ztyWQaYkFMoXQ9KY3bSbvJH4Ge1bQbdgExFve93D5VKkS5M32fQemNBjQZovJ26yohY1ssbmJPrMZR",
  "key3": "5aGcvUpm89TMUvxuqertuMuRTZdJg8H1Hj3RCedKGLMJqJdsQEjpgnmNuqJeGxXENe98BhcF52qbKd3B2sE21AAj",
  "key4": "dpbLqPJqvuyf3tzmYLBKo8PF16CucPBEZkh2ZfyB9AwQUtcnmrnKXpCgAYk8BisSaDmtexgkh42kgsYPuVyHGQq",
  "key5": "5cTggKmTV8fecoFz2QreBAPKmVFhJtSrd364prbwB1hLziFd4anj9neWvgVkThVk4g88KfSAnbLBHyPsahYEeLJe",
  "key6": "BhUVg5pP4XsBdNL6hARSSRm8jrTHafXV3suyTR6XQTfpiUYvqXusNhLouPfmmZe6DH6zuP91YF3gv3UkkWa78ej",
  "key7": "5bProajAq4aKwc9kBZDY43bmgQ3WiAXVZZKEY9cYxLLpmxVRgP4YEcTf6cTpAYdpK1kCfHcdHBzLHQMk2VChrbAG",
  "key8": "5VnHLvxAZ4shAjGLjJ76FQB39z4b8X8nNCpGi6v9RE3oMcAVqeyjomtrsDhNuDKwfEPRv76sxoaCvH4SM7WXc9As",
  "key9": "5dxzSt5Vgfgqe8psUXxqPgcxvpBkFkoCm7x1aHF2K6YR211axCqcSNPZLGU9vXzyb99fyvdkoE6gpuo41hv7A3hy",
  "key10": "rqwWSMTDWBt7MKdLiUvV4E5Ro8AY5A5a2jKZwh71YsWpZCmnVhMADYvhAnTU6sVYqMgh7RSacKnXy1opZhefrJe",
  "key11": "21isZWcJYjFbNEjq6EVezpzjzWWYSMB9pbgwzU6uWen7oB7ErNnCW8zeB3ofk4n5XrZksryWnANR3KbcGR2jdbhd",
  "key12": "5ucQXXxkRSqWkWeZB4TcQUSKEWaqwBxshMHx9mN88D198g9ELftTmH99PB6Dg2nxmKdXmdcpyoJ2JxSMtmRSG3ok",
  "key13": "aDeAZynKjkDZTa1zpZbfrDMux7iqcGrKkDXJTir87fCDyQCk852rQJUbueaimc62FMCNNZGvTFzuPSmDWHhbB6C",
  "key14": "5RudAiHyugFWaMDnnjKdZkqgY6kai18PHBmzqC632UDr6NW4qpqGtE8N42VNnMe5oCbZVuye5KTggLS1V9LtdNDt",
  "key15": "3sKRVz7D4cxSXjjYayDswSLizBM129g3rPaHjcZjuY9SAe2bFZSY13KiKaBYC71JH5bYbd6qFJHEJn2h9rvS6Gvk",
  "key16": "5yMz7V36fWP5NM3wu2jpBsKPpYNbobPkQ26wbckKbiwLjkrrRnwCePKP9mSJRMMjTeYB3js6apdQwfWJQghhJgx6",
  "key17": "23mQAURNJ9qdL57joU823ryYBz8QH8EtV1Kmm1K8KfVP2LGEnVbaKk8xwG8Je29TWJYTYU2WkT4WYh35HyyTqJjZ",
  "key18": "5zvoQ9LtrwC5DPQH5L5uC6LUGEBnSapbApdxMptfCepNZY2Y1N33CawjUPgk7ucngmDNAmKxvu37xGUGFFtfgPk8",
  "key19": "PcBWUJw3Kn3EDtMC9g64UYqnZbCSENHoe1YQK97bmZDSQFeJw9Zuw52zo6FqNvHZbU1KFmhHdn1dtvBMAN6WHsn",
  "key20": "2289uyQswuK2DbQD5i1e7MEJa9AcvTQzTHfoCRebZ1Uxf6Wxg2UcqGzo7W3bybWMGrnV42TCchN5mtRikRWRhs1U",
  "key21": "4Y8ZBcGeNC66sr9bR5c7Z6knfGuPceCM2HBsUN14khJY1Nzr8zCmq9pJkJZd8NZN2y2RPgg3Cw4RTy163nWjB9d4",
  "key22": "3sfa1uCVRUGkYr4U1dLrsf1uhoD8jyMRReZrqkdtLvP9oYWUARjj5HwBUsTdEodnS2UTkGirdUvzUPpJ9t8UHPMq",
  "key23": "2fSDnwduNuJkr3wTdVmWTEf3BoEEwLrjAeKAYiENeHvj66Q8a8CaHuecXhW9EmSw7yEwU7G7emRRtFEBbjd6FBPn",
  "key24": "dtojsvosL1vkVpmAXC1ANHCVTZ5Wst1RFsJKrMycCiEeJ7UmCgqouXnsiA6eiC6CJXBuRG9EZCGsR64Ps8GGkYD",
  "key25": "2apYUhUpkWr7e7PsKhr9FXQVSYmYqJGRaVmEiURwurrjqr2adDNXNx9Yi49JEsDKo7Twy2ogGSZuDZnrFksxsXpt",
  "key26": "38VaDZw9oHmcRckZVqae95e5guKjfDSHyXTBcy2koB6wBpHhkrfv4zFGjtsViTvwiXpzNWXUq7LDY7619uBdQT6o",
  "key27": "782u7VxgTTAf9ofHKZbWsXqEUmr6BsbDuTJVpNrFgTSwX1d6xK9sHFit2cV15kdznbmfGARC7fZk9KECoCnSi6m",
  "key28": "5uefRqtqz4FrZiC525p2Vyq4c4CN4rAkQoAL1gjy8r6YAB9DqJLYHAWWqCCSQsGHLUJCMJ6QPSNweAgDhQf8uioc",
  "key29": "4g7CwZ83W6xusHbavxRiwMNQTW29ieFWJUtnduyD2z19boRGHtGUyug7Ga3KdxVeNV8w6e2DHvArGg9Nk8EYRfND",
  "key30": "47ckJucTxMqQ5sFjXtD46wWuXdhSb5DCKNRwfjUJUeg9sUeEUSEpuswPJDDELz4f8JuLu8yR567w26NpN4RqNRJc",
  "key31": "3sq5jJvddwG5MqvavwABEG3RKH6KhtPvE82M1Ky8Z1FjMA2FHuips78AzYax2W1CygKCWWRwP6ntQnYjS3Siqz1m",
  "key32": "KBYMUJgZuHcu98hfZLyMP6xQjLjDyKdXcbhp5aM5gywGBtQQC6xXvSdnkx2WGVJkpxeSZRoMmsSS96qN7UeRQ7B",
  "key33": "4eMbaDGjCqLqWHRHUPNU88xsmpCHSBXP7DcNDbK9f5eL5vXSygLQsQbftB7jZAkfRW5R6HHvDzo6vKSrTYj491DE"
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
