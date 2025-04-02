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
    "2CTStMa8W127X5V9Ms9d8Goetn2NP6KUufFKzMv3Y8ShSuMiM6EMnhZvYktRMwsfeZuBVzU8zuu3FEFTRiVerEJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VA1YwddJpnaSsozcvf4LcV2FLomuS8jS8bmo7vbxTjcTbp2wvjKD7AXwBZuUtiznXdAsU1RkRU1NfHoZGYk2ytF",
  "key1": "3CXc8QCNyBL25o89xZMyEDn38HV953CxFEGzWLs739J5Kt9A9prL9kkkzmsTUKPBEb2JCQTSnzqnmC61MWXPrrnH",
  "key2": "3YVcF1JdRsqQzi5eiNhxXYFfrtjoasp3QVTVjXTHkxscsAe6BykeucShGNtjtp9snUKNvQyxkpbBiHzDDFWLknns",
  "key3": "bBY2D6Y5NHSQ46JccwLZHSToch9gr7Wo9QgbrFTZGHMLFFRtDJM2xcsqhfaQKa8cKCpuvi747r3RXRj3NFJjpNt",
  "key4": "g5jz8sqnUKuSmzzxZHUuMVdp9LRY5E3WE8oFbMVQu4KTx2HjULZaoqzPrgQPXGABJh9u7jGEA65sK9PGp6xgCVq",
  "key5": "vUnxrrfYXDfUxows4irJD6gt3bJLaGpb9TekWcuJCs6yH9i1zt38aimYJWHALCEDp4JiZHHe6bpWiH8yFtF9pht",
  "key6": "5QsZsAkhTbBWBFAJ8QoW244JKCuvZoorhLZbP1TxRyMUbsJgUeaHwPu7bMWVpYxrPrJqstkrztSDgUYbKusVPnEC",
  "key7": "4xmquk2wRYMc2AENzKRxjyj2T4mssS1pV6D5FdvrxtwaCNcqfykueQrMfujKLX5H28MQpJpu7qje5cSVJBGq5YMn",
  "key8": "4cWa4V2e7xh4YGJhXyeZzRJ2kZ92PQ9p1d9Qbc6eunNoG4duS3cGWpyHCFbaMrmbbNrHJZ3aAKe1t5N1ywjUzPqa",
  "key9": "62mhyeQcBXGsXBqBnervHoxXQpGkXxF161taaYbQL5Kdkiz38qjXTCdhqUTv5efPTz445GJrTCvyxR7rT5P1c6DY",
  "key10": "43X8oV8L9KEUA8bYeBE9WeZ5YAJq6KAt8huW9TJWqrCFPfcWzr65cqWXL3ufdDPnMoRumEDhbjabs5UD2hy7nVS7",
  "key11": "xpwitfGs3B3WkYF3koZsFChCijp3ijygVamjECmfMh44rGvHACVht3aBEJXraqu3j25xA85qJKZEoi84sXuSgQW",
  "key12": "YJDNb72EUv7aXeVx5Ayh94gu5pxWGYHe2D9rJLvuPvP48KTWLEUU3LpAf4LR82HYcaW16NJ9UDA3RuZerhWfWGz",
  "key13": "5CsbGTikD5FdFgQYidyTaCf3KdE8CoNN3mr4M4Nq4Xq8BmGtGFU4aR3WHkA5AkgEby8eMN4yfZyp8Ps56dg2JxBn",
  "key14": "BjvSHrgrmvGYhS2EjPTYfCur5U67CnJVr8ur78ccEJBUwCwVDjjLXQvZLetcyuvhSBBvZdYmisEtRMCFji4663b",
  "key15": "9652Qm4xiMHcG8mumxipyvnx4mvJsq5wobDG4GBuqAcAo435EhJ7h7iXyGoh47hKKcrKFcgLKj8p4PCmu5GiFn7",
  "key16": "2wopEVDkyJHGtQ95ZALB9FYGUci4gCcNjjUg186eZVw1DpzWESa4KDQG19V3AfRrZET2bPQvDuEdNprcbZ6u1bXE",
  "key17": "2JwKPBRMQLWq1Yr5cbBRwmiViEnbhKNUf1nihdcZQkoFaj97Bk6K3ENVwrFdy7CE4A8wLbR7SJSq6ZnJQKjuc94Q",
  "key18": "4wWehxQzBRNh8aBNL6sM85jLSauUkJ54EYjNHzgszCfdcEMc1xMNKiq3MbBQNCxfwJPMxaWJMmXUmuy9MtcixxDK",
  "key19": "2FtqHs1bf7U7v9amEGjuv968YtpD2FfnYq7jVQXXFcgrJJnd29V8crGwFajiKcQgyMWRSHJ4oqqaxxAxaRqeNH6F",
  "key20": "8grNg6iPvNpSeET3DRjPG63H2vR6Fc98occBoSz1p8gfMsAxJiACDNjLBRst7M5237KdTZ9kaxBau33vynuCnJp",
  "key21": "3rUXivEEaQHofeXrAbkfRprCh4gfaucoY5xFs1siiyS8FPP3D29EnMMd92LNiVLtCfVtQnaN2hw5HdB1r2CyekEv",
  "key22": "3PVU6J3x1nwE1BA54LikBcEuQtjcLEWWVaA2G9DRugjcugnvEBEwqkCtQrqHBxrNQHrzuqMs5DTwaYYgpjTcRgnt",
  "key23": "238qLR1ceMj7rcCSVmW9ZMVJzL7GyyZjZ1mPL1G6J8HFj9T9d6BptStLRrXnozdAxZaSmPVdWPxFMpKcjvbLBEGm",
  "key24": "2JgGQfXVHo5SN9qm2Brxtgh9j3AvYVhYunCjAJQa5TTwBWD49Zz7kJFVrHpKZTsLnzsBxVsBJft2ecWqNgvvWMrB",
  "key25": "3w8mGVadpU79Z9nPMZXaz8hLFgo4Wuv7PTDk137ztqrzjtUQ3z3hCbdWi3wQfYuXn7Rn4SSWnTfqsptYwJLPq3nW",
  "key26": "26Qo58YkruaMctPddw167rVTu8nibK7Rc1c1nmQCtuWvbxJJyNHiZKF9iMqaVoRDAXZ7uj1JfowZg9iLQasqusAm",
  "key27": "2xtDxKtfhoM2mGUNpUgq9nLxMJdc4zQk3c6wzutZnSLx7sQDxKZv9C8asVSXtovhWaagHpdPn5tJ8cq6ja7NdcwA",
  "key28": "5mcg2hokEQStRnttmZUDViWoxmvtDMtEEMSsjiwc7qrWgRCjkEbwCqbst5tha1y8UrXhTtS9kYLeccgwCsKHiUqt",
  "key29": "2gjC5warN31PQ9R1PZyf9eFSy5rhR5NYjo4xaDVy4LJ32DPqMU6MkWgVSJKwjb9vGKHr9zCRrcNBEifaH25WREgD",
  "key30": "RDGdvFH78GdXEXJjoV4k8ozmpYp5jokDBLXZY8foZWC3HxFSB1hdxSM88fgGJZvSkwxFB5if6fdBsuKjZaSq6EV",
  "key31": "5QaGV2CaT4GL2DKP4fKZkrm7yL6rSiU2jMjdSYEmcSEZ9HcQU6LLgJJLYgU5rbXJNWoJvYr8QBLo9VzhNBpPovb5",
  "key32": "2WnPWMQfP4B7pe9Czz7Geak1yMDMKEBhJwNiVNXkttpXVYWNoYcTTREsKqrsDRuxP17KCfWdnMTs3zbVqipCEjh7",
  "key33": "YdQM4FDPAPrNgeE8DR8tkoTBAQ5kjg578eGmqSxYGWo5WyUr3dERv4dWKTRim34p5ZtPyWGNGhC8kSKbX3zXT7N",
  "key34": "4ptKBhWAnczRP2wL5ibYk2XKMxb1CLCGmg4wu8CtTdJ9V973Wfvw5XkdnJXi9nHjb3QBfUonegG8TbZXJGXk1hLT",
  "key35": "4mBuL7Kj7xcpqAfyuLYyJtLcPG6trvcnfu4z4obatJsJcqhUaZMZ46YjXrruxR66mKxAS2aJb9bGe15ayLXmmVB3",
  "key36": "5qfiwYiUkYmJY51XtNr43xoSn3v2mCyYEwTcLmmMgDVGESuqEwKF9sEBvphY6Ka2eL7ALVgvUQipr7dvp6yKPpbR",
  "key37": "373QgqNmxMJGrXDCnVoRwz9EYaZeobiyUFoQzVyiGPk2MmF2e3VSrfRdXzA3F9PZ52nskSGraCTkZR2MQmd2u5CS",
  "key38": "2fVL4sQz4YoJmRHKddSEbN8kKoj4b54FC8mT5BmsRXHnFruGQmKcVUtDSgARAoabA2RcCjDgApx4YwHLk8oqe5vY",
  "key39": "2c8Lkmp7zL2mPd3Yi2QxSsDg2LW4Hwj53xgtJASF1kWZLRhFcWths6kTcFXzSs6uKQcJtHKcJjkqxDtGaEhhJxzo",
  "key40": "2J7t7nNyEC6rPUuYVMBEobhLjGffF7yGeSAnHtojjc91Q64yDscgQVN5TbCbswky17MXU9GQAQuSkzL2Vqq91b54",
  "key41": "2APs1hECApBneBos4RmWeP6QRFZnwrvrNLe2Cqxgrr9MYdeSmZSoG7ChHrQJPpCcEGB9KTH2XPxvLF9M6QFWjrut",
  "key42": "2iX1rZHwN6nBayrV3GKcdYB8zkAatrgVtj6LfDrBy9jrTgYFEFzUG7qPRkEDDjakdJpTgdn2cm1UWpt3bAFjL59"
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
