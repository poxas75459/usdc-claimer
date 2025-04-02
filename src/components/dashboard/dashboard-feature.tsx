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
    "2cQqiQxruyV61FVcUSupmTGwr6KBgTfrGuvi8j1kRjKhQDCVVP3xRzP1vmYBCJeXs36Mq1kejRscMv87c95opZ3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p2sMEMBHkmthzXp6zAMSnXb4cDz5XQN6QBC1aD7tQPsow2RJ6ZfN8ZR8RpvTF9D5LKfPmaVzc1Xhvp1scLWj2Fo",
  "key1": "6n4zjai32qf84LCV7YjiUH9RY56h1VUSW8z5mEA6y34WXWL6Rk8ambFJyEQuP23tTwnZYrpSD44RsNTnZeSL3Ni",
  "key2": "MYNvzUduPUh4F2t9aq3BaVHiYhiqv3pDXr6vUzFfPrZb4vmDu9ATbYMyG8Fbs7tcpH4GmXT6xiMwMofhJdBWo1u",
  "key3": "zPpBtTG96raRNvKiGqEiMMnh5d6nEkGNH5jECL5mwnbBmVUdpFGDHaj4e4ev7gXKNJr7VErtWWG6dz4tfRS9xfR",
  "key4": "39JQJRw6StR4umcNZymjf8wuRpfoEHSTsPJTAozCe9LHi1aH65xZ1vwocgwDgWCEGxCKKqXfs6FDSzCgTUojxcA4",
  "key5": "45RGnkgo1CPXxpiugYUqiZwtmGBVLGfEshd67ZfLC11ej37fqo52dcu4WWbaBGsjJohh51QGQKtnwBbP5RPYiwM9",
  "key6": "4SJQFrTqyEdqsGrLFDCTWA64EzjYzqNJRGBYhgxdus44iAAesi8H3Y1gfdwcuKaVrAHNKLtxa8jjkapCioigvRD6",
  "key7": "2aSusbbpDaRKL7BErRQrHFJEQo9AmHDYRCoUdDsy8AHaasCVLGYuXd22iX13NhmrVqUmXa7MRbjTtrLpN82azAKY",
  "key8": "3gKzyTkwg3HkFQZHykHjJ4zY9zq8J8UZLPdsFvMz3AeFW2T2BhXBRYMgzi9bV32k1Jz4Ypi6qWZmsrHMfYquGcNr",
  "key9": "3ozNGT8ZhPaJNgdu84uaiouFj5TpYz3tSqNHZDEb5rvVUmfuDME4FggGBhn3xB8MLJaSb7SryuBvQuwkjf9nqrKS",
  "key10": "2b86KCGjxAMp6qU6zXcu25WyQcSyB8yCun6ZdfZKT9oNpfkmu62EGBfaJGNf2vXHDmaiAC5JnyJbYq3TpRSw2jh",
  "key11": "3Y1nM36CMdBsjN596RELJ6kzb7aGES96e8rJSLz5dYS5W5sBEN8A1gVHBpqCybWTkuvjFN84xEmgsE2kt5GEoAUb",
  "key12": "3Gb4RfTmZGLHiwpAGX9HazQVEwvoxQ3jnqXxm8Cif87ZKGPr4CBXEWWUqwo8q5dQjepsayuVCvXq5uiMUw2dgVec",
  "key13": "3GPSgoCTUJgwoY935qUd7mxEaL4K5j1FxFzvZHub7croxMaCCn5c7XobMDNYWEVhuLARaTbmWuFtH6GJkM3gkeYX",
  "key14": "5gLPoUdPigXV4jxJLpn1F3MEAiZqe1Z1kR12w2dxp34KLyq5ezfuCoPntSwM9G2hhsdGG4wz3g4UxmZ8gb6EDCH5",
  "key15": "4MHrMZNVHhCQka2WVYcEYhsh9ak28pGEeDkBH2hxpJ6y9B6CDfA1KfHB1JV1S5EDYVwh1qDgwcX2VnNt9F4S9LD4",
  "key16": "3yvHceZE7ujmUjdEk2WVtxXixcXcRf2hFNXKpCL2U89PpWEmfb2o7eWZnhTGHPzmRsuLd138mARZUH5kHRnC4G3",
  "key17": "2jXJZk41U54ivEGJ5wi4UrbA4j5ZP4xZNqG8SmsvTotHdfndB7QqsqzSycztPfC67TfLfZ3o9AzZEr4j7JB9pet8",
  "key18": "2PJGP8iLz26K9xH9MVxTwsLZUNtNijCjztkqJjJptZHh1e91LsHQaNxAadHn6DyoLFm4T4pVwbJBSRvgYMN6vYyg",
  "key19": "46mRD7eYsLasV54kc88b6ftuUt7qXaMUHYsyscmRiSQBTZY2aZATcR2x4jMatTiJz3Bh5KjzV7yodMBSXdiuDCrP",
  "key20": "4yF39M8vrgD1kbAQ1XthoLpSdkwzQqynax68C4sh9NRFciew1ggFt9GR8MaQWcHx5YkTXqxuco2biwMhQd6cy99",
  "key21": "4JS6pKrPGt158y2xXPSPaXcNEZ72B2av27yyBXwFR9X8V73HEHHZDyWCtxm9pChQtVdPDGfUqo3cqgVT7ok7PumR",
  "key22": "LbPFKCG6t7vkpXDdVp36M5wAkMo6mo8WqpThonwPNqgcbScNexaBur1RReeMU9iZT1V229uN22mjA9gQFjnryfK",
  "key23": "5MvbLVwimf9AvcRw974AQ6qaJjoiaz3kEmwxFsxh6SXJmUZ4kbaD5USDUnyH7CXjccwz38qLM89eaMSnH6qzH28Z",
  "key24": "45sPyLacshwTYh16TFRtKw5JbkeDfvLsxCVA4QXy78SCxHDsyzK52AMa2ZNWXykr3FnsU9QPEKugQaxVJtx3teyD",
  "key25": "Hc1udgYLF24GvoLNwxz6eyZQDXnMoUndccwSkdHsFNNS4eCeGkdfbidMJmeEMpALxE8GJzWErc2Zv9SqDNhDJwN",
  "key26": "2yoQfoJwYNW92Tc8o2u6uLuaQGM9qLw1whDuMjEHCQLnNkAtAMjzX2eJfVBbRLhrVuxEmKTJPXnQmqQQXiLBpnKZ",
  "key27": "f4YQFiU8ah3sZ5LzfLjKKiPUrrsW2UgX7NaRR6wT6tT3zLC9fbahmqsKQ4dpBopLQrppfXRmKdkjLPnhK8eNZ6X",
  "key28": "3qnUL3LqBmZBA9KPsSsNfgjp8naMwiKJdFdLqa4ymmtmzeC8ypDT8SMjjbcjuPdJJdev2DdjcbiwbYZQQJ3dkdXb",
  "key29": "nCKmMtB4ZQ5K9nVSM7zvgWSrJiH6fSpTK96K3SCHzaATh9A94nvpTHgdNGpbGXWJkh5MUgrsCuiTnRZh4tmfQrd",
  "key30": "49JDcESBT2vdC6b6tigRxM5ZdsZMETRyxbzYeeC7bZepLPmCzEb2sK4pMScAoBjJsfVVSK3hQDCnpe8AAxwWA9dx",
  "key31": "5hqkHnrUAgYBiQ4kgVJ2o9HNQWfuEURL74W62eJqCB4bHuxwdDEGdRVNJuJNznCGbDcm6YKCL9QoVoGpv626FMFr",
  "key32": "2BNK8XfEiyP5uF39jdTS7ZfRZTJrCbXNt5AnFmQV7tcpoPab2at9UWNmFFcZxvEMxZGcdUFeJy1YPcNyWyuMJ5NZ",
  "key33": "2Tr7821zDLdzcg1vhYFs913R6KDv7iNYgaReiJ7qUYc5XKi6th7dJVJmdQyvoqX55XCC6rKsQp6v5FVTQMUNX9Vi",
  "key34": "2xXnY3VF2uxBbLQqiQdE9s8XZFcggmV2qtvPtZVP3GeTm3PsHVmoPB47YWXm1VoQAwXnmxUD5FzyD1hM45RGRPLB",
  "key35": "4sFukJVLYqX8na4pt6QegjXoybtLSV4gvEjXtEoPxoAWuTbXyyq5sUHM68u5MEHxFvSPiKBiExKq2xqAHFADsWDe",
  "key36": "LgcJHFHMR6rdoircDcoUi5fpNLhKeQBSmqRSpjmMz7aFM4w8A5ibp2kygGCevYZseTrd66p3FDqEqSiehBAUYiH",
  "key37": "5UwdHKEaRpbdhdHKqid3EjPHcy5Ui8NRViZQ9DDUxrmrSagrEhErW9925pHLMBuGZ8pSkQrz5qn4NVfmULuYCDFH",
  "key38": "36d1MpsM3wEbaM6819xi297kTZhCyRyxz7vcvpnbH5NYLqj5sVLzcRizyU1Gjq1zWTTWD8PEicXzC3uNMpm6s8cL",
  "key39": "2DahYWkv2fdLsyfkViZWVtsAPQuCnYhobZzoBuQjVhioqkSXKxwfm7QpteGMFn7oW7SP7xXUUYGKE7PAmL49wDvx",
  "key40": "523ZNeHiHH4j95GfbDEXqy2SnnZjs1bWPTzy7264adx2y4cSMnEEStoKfGD8hjQB2T5UAGZZ89DQC59HNpRHMsPT",
  "key41": "3eBj9EZZdGm7P1Tojie6Fr71372nsoeGUm5anEnfxMPL9bwjtnBtPgwqcB9nSpu6yrgKVNr6kFkhhzvEUMjYQ5Jz",
  "key42": "2JqrkiCq9gcQ43StrgAm7kZ9vJ8yo3RAX59n7rmdcsFnaZM5zFxSkZt1oBJitrzXD8fFeds7F1hDYGUoi5sUKf4Q",
  "key43": "4rvbxXj3s8a1vSBWJEz2gCpjfaUzCrGgbwiY2G9UUmFWXVLsJst5kGuu9ZtsMsza9HVQSatD5rpJxwXMrq6PaZdJ"
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
