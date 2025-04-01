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
    "s1bmW9D7ruodxPSeyFwTV1x8RAcu74xQ1KQNrh1NVfPSBAThZviNgvnqBaKcNJUa1tZqtwyXya8rM4B7WM1JAFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KAp7QdxrYBVMekskXLkqpfFviv8g9hvxbvUTNN8Qu5bmEEXHaJo9rUzj6cQJduqf3ZDEWAGfeq5LR34aoHGck7g",
  "key1": "5tmZdexjPwch6mCCEtL1vkz4zEcCgp8YbkJnVxXFXtaXw4SrBdsmgkEekArxZftmkxH1K6qPoYfmWsnMuGEHBidH",
  "key2": "3kE96EcEwivHRkDBAP8jSGA3hrKWGVkGiqHK7siXTTgVnzXFnHPjZdQWFXB1GFweid2me1V5Zv6gHxFSi9FuEnYf",
  "key3": "637GiF4tzk1m4KUun8cxYX6swD94xc3Zcc8gqQfhzsjHZfJWY2V7bx2yqAFcuW4W6KUCahFJ8kWLjDqzdMn1wLAs",
  "key4": "5Myd83s5R4EvBAZ2qeqJFktES9my2Zsgd16ujEsXoFWFSyASLpPJ8MQrCLbN1Y4qJCqQ4gfLvzN6TQgftUYLBNtu",
  "key5": "pQ2RXep137frdBkQ7ohmW7UnQ8w8vKmuPoRGyzHbR3xxiSiWG1zqX29Zp5TDjLqVy4WVARF5KBBDx8TjrWki2Gh",
  "key6": "z5oEsVpFdZYzoX1ccgNdyGVuQ8dRShnSqFbH6vWWmJTJaNCX2NzXann8q3sHuNGCppVoz7GCUsFceEF3bKqnen9",
  "key7": "5KhWnTqvZHtWxKR5Tmn4UY1NeezKPuNoXaNqcEmytRX7MkfthK4bAVytSD74zUWBKzPq2PzbLu9QkXqg5AzmnVUF",
  "key8": "2LAFeumVuGQenrvEJPazzsWHL98s6D1bfoZtLGiFKEZmbVuAAz5SuJBfnFMoQqjkb2pftQa1YHLd9GQ9xRRHrHhC",
  "key9": "4ERqeerJ3zHdaRGRxF52A2SQD6dcHptBKPMxhH2wGmL6Ce9r8N2b3Qz29gbQorpuapvFUNJApPeafVaX7pr1JqzV",
  "key10": "yHYnEA2xkMo19fj5Cu13UJhNR6x9n9eE8fgkvTH3jyQnnefAQTaWT3jQNSi9NUo9FtqWGQTKWBqeRzmCAD2ebLb",
  "key11": "2aPq5tggLPUMSVc4pdD9sep5wKz2Hq8D6ZGYEiy84sZu15muMiCdEqquaAS449rV3XgN7Zs8CQeqp87f7aL71wzG",
  "key12": "22FJsctL4YGsXpjDeVSXjsyyjZgs6kyTXvYdzUouYuejnM1kJAUAJNGoQAEdJ1vXhCnJ3rGaq1tygZpvWU77Ryk8",
  "key13": "3pqydW7BP4DBxDDUu4qktNe26L5s9fLcPEkSj9W14TbBVuAH4HofviFhHxYK9gG69j4x9fdLcmVSDTR1mjjS2JgN",
  "key14": "5i4Gmrz95V1x4HYWcdywzXGVFNfebUhrRtF2tz5q1iY6y4L6EdaD9M7QSqU7wyyroyo2yy72UFgZhDy62AxELggL",
  "key15": "2SuHmpbkACn69oEbSpeKwXq72xD6KVEwF1nKjmQxqHWtnRRKrDoHgjvbLVBpy4E6YjMkiEcrf976xyArLHrZMBdK",
  "key16": "2MJQCSamryyKBUGr8Dyr1Xs2SUobGr4NL1Xheb8jvAPwVsy9HcCpdqNj9sBAwAGS2TsHCJs2KZ1GDsySWLygqPTc",
  "key17": "3BEsVLTQvypSKww9yxNoi8k1CoMrYjvs5ia2mSSb4SDNYzFxD7wULP7sgkPgDr9CqX54eaocstCVmHaEdgXVCNtw",
  "key18": "4BgnXz5Qaa6m1WzHuk7zVtd15CW9i1Bqonifi77aoJqK6Cx3w9FhG6ddjr6Jhqc4bzqKQuFD73bDhFc5sso9ePxx",
  "key19": "3Yf9Aw5okRY8P2gE2xCVP4L3EiqW1oXFVpnqLDp5YsLcteH8bu8Gr2xewmcphNUor9TUYxf5MBSkbSAedk8FmBxp",
  "key20": "4sCBuuYwTyzL3R6mfcpByuLfmT1eVf9P47fCJQ8V5nU5Xaz7R1P17jhZqd8hmYhBEA7gQDAgyVsxquC37Anh61ui",
  "key21": "61czvDR8zUnt3Bn1UDWjmcRFntqn4yddQVnWwQdQGLQtUuGD8bWH8dgb2aGY5BTtziLYv8KzuWgFqmS88MEKxGUm",
  "key22": "2EfzHFzkYjvTjToPCN25QwKKh2cKXDKnuGqJRnLC44PffuBq9G2jZHNdSkn54k964bqKHgp1fXjuGNVxdPG3v11T",
  "key23": "5Zi8xp6KjkKn5G1Xz9qDrXC7xR41GuHB6F6XPX1DVid9rfiDYLAbJee939o2Mdb5K1GtkcfQ9vE1LfjTHvZrZ27f",
  "key24": "4iotStseDuQr5A3DZDyx4zJNp2adiY7mQWTn2qffiVkYHDJhvh5UndSnbSB2H8PE379ecgNcaQutWJKgLNWFpYgd",
  "key25": "49RYqYquHsbhr9VFgPuPf2GAcS8VRWk7d9CfBKdkFGvCst2PnoJ2iWFRxLpfZn47ZxoZvaXkBEvKL5wAy5tFdppJ",
  "key26": "2Wzf8cpjDNcszhFFKfzgqumN1mXUXGkNGKoekJPaGbKT6EpA1ytvw2bSpxzVYrThzHnQVckYrLPtjGZcPE7x3NKS",
  "key27": "ACiJu1MQLLSU7s1qqWVnorAPTNVfBkiYQUnLHxYjhr5sTFL1svbNjB9csAtgbbGwJRBNSHHpkVH5e3rG4Tfa12J",
  "key28": "3Z8Rrpdr4mEx48kNPig4nLqqeJdx5NC8dbszJ5qdJxiS37p8LZwPtPnXuADavKegqxBUqYVGZY4Vkqg1ExBQaZQr",
  "key29": "3FQzVP36e5gkfzj6h6tJhzMiXkxQMk21ruKWNKffyUTuoy5chgykNQh2qagDVCvPpVsWW82qWFN14z4EwT2YWGBC",
  "key30": "dGY1GWQiJjvh6NPLY3VRCRrd8CRGydLi7LREnENNHYYNd3wPZJbjZE1ppprbwcTqEMGpDuU4Ld6HA7j68Gdqb5Y",
  "key31": "3oFfxHRXw5JmxZGzdWm8EZWJ41mC3MzehvzUStZMDMUmKiNJo5bvfXksWKS27yod6SheGZKTeuKE7wH6NtVvAuAm",
  "key32": "49GhpbrKQfMWJ7HpmtzdToVJohLYibKUwbADJtrTv45tstjMsjxFpMiXvmH6P4MoZKWWP6DLJY1gwEhwugJg9ogd",
  "key33": "2yE7iN2sLTde2PuvFBeFh3RJj2pKsHxAbdrnHUy6iQiSFeDcfZrNVC7i5FqjzHJprKvmDDa3LhyHj65BKJtg55tZ",
  "key34": "2e5QUosnSHK3mfRLGjz8V3AaJAkArSXyVtwF4uHc1vP9BfMqYuUgmZEagnuzJEQxRKp2bmKcDGSFoyk7HUh7yx44",
  "key35": "UJVVopy3ketXQn33fixrLmoT6xMR8hkdZPcdtHGm8KWp6bC7J3sYaxgDgSXvKBFK6D3Fy8dV5tjZ2kP469EpAmm",
  "key36": "2u7fuap53y76fAgpFHnKwE2cvYPpKUcHiGq88nD9ddyusbc65dWTkyaJjkHG7zjDjo2iZ4PDijiDMGipQJwdphxD",
  "key37": "67JhiAquWpuNLjem8MpStiMe43oSXyiXByAvKiRSn78u5HkEwyQXWvnEpNLrv2z6VfcFk2JpjvEsnJ8PR1BTkTi3",
  "key38": "3HN7JR85JbVWSMrpCuQPXbb4pQh2M5nq6kUGYAcsfcFpa1qNhMGDeSwJoKZ2LSk4T6cpiEKQS92KKN64UhHkDNB4",
  "key39": "27WbfZxyUageEzd5XYqdcLzKdfGfAjHwDV8ajxfY4adsagrVM3YPKuAYQdX4SHVA77GVC7xfMfAJYYVRHy9Y4kxK",
  "key40": "4vErGRn6DypUyhGH56zEWDCom9UE7Z5kURskVq3xbGUNTAf8YXUdz2EfyX2mo2vDFfnTnC8FEswDiRD3qRuVcjZ2",
  "key41": "5RhAQAJgAzt2whhTRRE55rggtMcMSmhJ97CsVodGfmgquBSqVsxi2MfNjLtgZEHPAUCEEVGEFtKz4kdAUg5mEyPE",
  "key42": "4Z9iCP1w8YcSHVSBoR3Heer6PBYiX1hBaZTQNgsFuAyvkdF7x13SYvxGGXGZox6jgJuwYocWeBUx1pFf193gnpRX",
  "key43": "3B8LT4mQnVNaeNrxyHeL2B8c4Je7xi2RsxLnNpEbg8REYkAfsa6cqxCWBVBMHXVdCVah2TeBnNV92D1b6awNTK65",
  "key44": "3aQApGLM3BTs7hMuUuAv6QRmQSHcQrAHfGpTiZaHvEjMWjYarhTb7DstL2AooZMkbJT6J1Adzx4sy97iGVkKZpWJ",
  "key45": "4oPEwrAVQ2QECWRfiQgF7JkNH7x2qM2JR41NBmMKum6E1cwEHWint4NPe5pTn7q9rWwoKcUvi5qdgdHgmpPWvyHR",
  "key46": "288K2PevsXK8DYMaKSHTHzCsT7xqtYNL3WkVEaNPxyyQtg7j8sH1VwdcgR4X7EgkHbh9TL6qoGDi5YAUarCvjSvT"
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
