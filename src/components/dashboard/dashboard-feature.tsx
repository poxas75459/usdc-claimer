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
    "2J4mW5Goq9qFGNE9FnCTgmbhuG9aAukLMu5oa9vDGCatFXueNzP9kXEfJwJT5tJzJctbJkQJnrEcc48MtkysyXoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZqWpLdxae63dEZxganqqv7bYg94ZXjN7Bc8uUsPbVZowhPVDdN3NKT5538xsnrDKyQ5hVkARfbDWZYTm9hXGym4",
  "key1": "65agjFBJMp5AVpab7ZuknNXuWMqVQGpJhgsjwLBC2AtLvyP1E915ejE62zTDWTa5wKPSofMyuJw87chyxwfWx8Ps",
  "key2": "3KpDsi6dVQ4CcYFnwrNgN55tTEt51qrQsBBqfuUnE1SDQDL1mURxacfLYD8dvrXQC8Aiz7qgR7PGE9s1teskFygJ",
  "key3": "5AUZ4L3YiwmrX4tYT6qiF6pUeS9XJd3xNDEvPupKSMUTcnxkYwjCRvW2nLkeF6M3i7Ajmaio6giA6vbtRJR4TGb1",
  "key4": "34XJbc5uS6Wwyxd46FUPZQbDQ96P1YRKhdwP8WkzqQKgp1JUFxrQxZAJVeWdPadJdYTULE7Dj2FLVDZo5GyZD3sz",
  "key5": "2SYT4LStgxsjTRra5yhf3T84BVLm7YcpVzqsrdpeHnw4bD1WGri86EgvsJATwtMxqf6syhE5F7JfkEs661eyohe",
  "key6": "5uVdTXyEnV1JoDR1A75CeSzVAkkahbyBYwLTzSn3fCabm3amT922TxxM4KV57svvo73mTMHmZW8H7E9qigaeBd4N",
  "key7": "2hEVEA7t8mDa64GyKifUk6aSeko68RoXJpuNpcGkwqrJYwjf57Y5U1pXQUQGsop55njuJF5KTwFdFAb9GYDETHp3",
  "key8": "57FURuDfnAXsmBHhp4TJZpHWnjPCk7j4pyr5TPzEM7mb8zFJAzgGvPb4H21RbBMm6LdkzGACFUny8A5um1VT7MQh",
  "key9": "62yQs6WQawghTbJo3AQWwTjxPbT36cNoSD9DoxvnsDguy3BwMnkrA9TxawGmLAPsCELXWQohyqFAZZESMAmxaADC",
  "key10": "nGZjGWocFGLBJVw9vofc1auAA1RaKrYm1B2T71D4dy9MM2BButJiqtSwYDtHYJ7WpvypwQciZEcqGFUvNNH4r9X",
  "key11": "3n3h3TsGLdqnJUGeChWcPqbgeqj1Ee4b9CNNq4wTpRztrLFNGcnCgAMQRzKSPxYTH9qocHbN98kibawDF9anjkdG",
  "key12": "4JByXcFzoyRAX9AYP5FUcAPuRo7DtPqhqrXHBj7i8GwBtaasVPAR8VfYcikZeh7Q9djqraMHj3G1kmGomJJ3cdjw",
  "key13": "6778pFyxo3xYVW16kCoN3JwMnR4n8rRwYva4WZPz8j32VcuBwqBN3K3NtdBjXqVKjo37eJztb3W5VuLozXFyycmC",
  "key14": "5iAy4RMtGVPCfQiVVUh3HfHe7oBsV5DmjCPU4Pj35NaeUNkszXxYitM6ihqkEqg3QtVKCv1G1EMCcmiX3K8C4BoZ",
  "key15": "27CzmZY3vTCCJLxVnAPU9jg5RZ1DeBJT8icHTt6q4ZmV48QjP6DFU69B6gwVfN1baioac5t5ZPjsJB6YrsprT4uA",
  "key16": "4BDoLnpreP4884EeYB1MeTKJuKZTiXiVbwoqvEibJg7EU9PyNzpV77qwupEV7r85aS32m4izmPhNcpxEycbX1MRd",
  "key17": "2YqFdRTW6c3ZVzxuVvDVhVjFGDKoJJtPGuA4Adk2P5N58nti767nfjJ15mBhet9tYfPSKkCfGEZ2xxhvyV39aUFe",
  "key18": "46eWsUYvA1f5xHHFGZZ1FgbuwxeXy1UXiUs7sk2EXtnhQeTbL28wPxgV8FGSa6doNuPmxjXDBiBtAWhoqjSiMUpy",
  "key19": "2b3KqUu3wEd1hFugMgJypuxNrCyNoHLLMHLzF4Eiq1DSpNdTyR12v316sUW1mYps6Zd5YCnfAq67jrUQFCgrUodj",
  "key20": "zywnf83QQWLHD7vFLmCnXwT6Yjg1DTqu2B5Adk7i1ccjySPnKVT7xUwkYeE22mMYvTM37PYeXzEQn7eRd4iDxFw",
  "key21": "5nZ2GeNuDaFFHnqKe4meLysdHM9ThoySVft5JyE1c2Rm3sKkAmG4fn6jXpqyxFd1gqVbbHfQf6TXKNBoCUBf7mag",
  "key22": "2ju6ZFu3P7hs2NbG6TxeZ41jxfnCSeMtjuG37PJqdytPXBZ5FjpK1PH1zc4iaWLVafpubWL66fQNUHBWSRZo7erP",
  "key23": "2RoRt411woaUfJ3MZ6FbEDWyTCZFW44CFTMfWndsGkd9xvw3cGJCRRxrJjMGdSDS3nTQbMjkqLLmS7jjvXLAf5Cc",
  "key24": "2NEUNufwWGbYJLNdAFW7tu6pBTMT4JcQzWtNpzvxjxnaqf4iKgEUQH3Vw8AXSmFTnGKpuptVmTtdk25TcK8cwCxH",
  "key25": "6cYuEnn1RMLA14exNgZ5STZ8G5Kbg24sPkVsV13UDuucWX2gBnAZeAPTQeGdxH81SVFbWQRSHuSXKkCHjvBcGfu",
  "key26": "353vzCpWrekwE51ihvNUsKUQ8ZQb62iFjeeDjBSCGzgFhmMQuCrpJ88avSxoVnS8gA77LgQccBV3n5f8BdAWDL56",
  "key27": "5q7wzCXkh43fLKMpPX5sUBnmuzvRqo7cTinaseN3Xnd5Tii2tshCQSe8ayxWVF8CYW9bwX58CrF7HwRxejNQNEXD",
  "key28": "4D4QUWJgqo8xHibanjAJX5sFpFNFqyNybUsw7ywcvbndbBGVXnEaFPEriGW8LTz3EKXTD9G5ZvhnFw3rPpyvuHD4",
  "key29": "eLJnRoud6Bo2GQ9dfgS7NQ4UgnVbPr9utZztFiKM5RRBSrrVv6XG9dKyaAoPNZ2wzoyyt6M6qWDEqU6rvLf1ftz",
  "key30": "8vht6m4HmGEqVCNCfnn9LXkztFuuzsTWVGZZFNg2vmBqAc6ys9JovMNV6fi4zzqbJQYWp2oWdq7YZxS3VhRMwfE",
  "key31": "2p96aSEDqrPUDeTDz8AtqkRVCpV8QcU5YRfrjUJQGKDcCwQBwn8SyD1MxzXaebiLo69FMJ3McrQxXmHbS6dLyGH4",
  "key32": "4UGJMBFZERsS8yFvi4o53A2rmxgbWkcsEAAzZfAK1vAmZ7YQVDVgt4Mtu2YMWtGgKcW6CNsPmXQ867kEWYaSxug3",
  "key33": "3X5Re5a19VUSMFaw3zAovXaF3z6EQa6hiGRWuxnMk3iwZqgBdATB59okYBPPyc73hWV6DEURjgmFqZ5nH21wSiMm",
  "key34": "2bo6ocDJkd5P6qmt9o9dHx2dgRkNJ9gPoMpqT5W4rVnvk5StdiH6NX76mWA5wgcb5f7ZmMiVJF8c5iTudxzWrscz",
  "key35": "5wNE2ToAE458XqDv1Go5VzhPYxaCB2yVu1JwmcCFtGLGU417zbKbVzedQ5CdUHVUrZyPvCkt52RFi6ZXu4tYYDwe",
  "key36": "2VWdsKzAQt3MoHdVVfxvqERRiaM2HVM2SBYfhaoUvao2h9hQB1fFawekXL55qxcygdbzkKGkLR2BtpGQWN7RuWtG",
  "key37": "3zqPmjVzcsSHVahVzMbmvKCXhz7NME2sdp568yVHbbrK15a1TgSkhHr5pXnVLY9APRGadpKQPKVfdusjA7vjuMmN",
  "key38": "4joyu3WUTyR2R1eYqwvfv42sskTJTNbsCe6bGvok1N1eFCiBZtT9kDFDPDztB2ywqRCRNTaHa3r4djh4FvBePhYo",
  "key39": "31qzTLmXYdTxqzskVDNw8E6F9Eib3fjmRMGAvgTW6Mzv8iw1T5XuyeodFf47aqfJpq7kszoyNwi2PCTaxBYycBBd",
  "key40": "3zLopzLrB2Ji5KTKZCLsBytArB9JernDtqeJxf6Yyvftz8TTGxrbmWAebdjVDTnyE5bj7wYeYKvpEbUd9NDRofHE",
  "key41": "2SsKgji7Yx7Fm9z8KGW3Ku66PPyCMFRi8x1VtYBJrmVgnBht9DuKMJ86KSvWk1etLEJUJCsz9AdFFRiYvUwHj3mm",
  "key42": "5pMvyqhvcBrBmRifADc1mdESzGBzBvGateoXAYp3t8FZ2xYw61Eej9gsEJidquFVd15bD78CqUZnKny4dmia6Toj",
  "key43": "26G7McMniE7RxUjxEeW2qWctzVUyYpiMVYvF7WDawkKNccXtcRdw46L4pbStjMy1SGNc7aEQhQR87FvY8estnAe9",
  "key44": "5T5gUnTX8KKrkm52SgrFzSLvqcP7EGQdWRfg6gTMTeyt61BtTvec8kUt51S7rPv9XfnMsDyUsKW1wWMhxAwQVaz6"
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
