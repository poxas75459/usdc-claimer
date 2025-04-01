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
    "38pmuMhGk9tBnejSWb8NPq98Lu2coV28eP1fdWBsjR85CHCN4m3qKoaDiRFsRb5QhcTYqBSdkzCtmpUjcuNK1GsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jfFjaYv5C796T7mTd8ztXASRhhAB2bA4p9Aqe94cVqvu6qf2ApBfoPPDBXDTfgUn4M7CFjVu1XCytqSvoh2zFev",
  "key1": "2P9yCL38M7a9ZfffShqjELE7BZAuFLmi5geRb9QzDk1QpBNW4KEpEm8v2oys5pPK9JfDng5hYqFaU4ELr9G2KRLo",
  "key2": "3zjuvc1MjuXH7T3uHKZtyAZ8svq85F7zmfxoYdqbEz8UuBk9YaJaGXKfP693GufLuqv28Z4jJK4Cs9KZVsUdMwRr",
  "key3": "2nXfbL7qhyzByTf26dmipseqCiFwoEN33w7NvEBmEin7rkSerDagDvvWzzbvW7oZRAMx6tT4PfzgtN1XW9xwWDJM",
  "key4": "5dpajmGek9Ky3VoWN2wBah1Js3LnEKfvztmwRYRrPUgbriYJTBtdSPh5qGuhhLuy73fZQ8V5sex2g1uAC84LqGNb",
  "key5": "2iihsRq1y3ptKsVcCn9GkvmU7dDQBJjByadbjBvru6WKPgKU9FBnuvCrgyTdYdDDKoXeR9c9djpkzkA51NER6Vbt",
  "key6": "2uQs59VgBVPjAe4N3A82HJrZu5eN6iJbrUZ22Cznh83C3roAWWv1antyMrN27jQJFqiTCUCgoWXEsGCof6r6NtWs",
  "key7": "4hBLbwXNcBv7bm1oGKxGbA3UwL5BpuX5FN9Y7rPXdTB9dNNXQdyNqn4LiKa9DTUgVyQKZ27cBti8YsuqE5tBpzNM",
  "key8": "jq8mGxAz6YZ4icQ4w4nQCADmPLCp3JFGcc8WNaGYcC8yGfeAQ9JGsWyeuK8XLiBBkpV7uQjrASNXNbE7Fz4WKWg",
  "key9": "5EvD7AnccS34HML6VeTdezN7cxPgHhF4RUwbuQvU6GicneUc7KA9NAY1eiEVDPkyfgWJ5fw3RYDDevYu24ZemMs2",
  "key10": "4jq2pyWcxt4DAbKzd1h5N5viRDBS5LaPcFsoRq89rezbdjyz3eB9qsAk4YxjdFSt9thz9xzYnfCBicVGZNZCXXnX",
  "key11": "3NpkLbeYpXyAcfNxHq5E8CqyD2mYbjJ3e8YAg7ebPKgwANB66qqzFc9negYf3sgqStELz5y7yuGw4nJQdoA83Twz",
  "key12": "2ptpnT33Y1A8N83gVkJ9SdURzcco8n9j1j9wp8HMcBipcNmuQsZr7q5CdF5vpw4fK2AaPPZbkatbNwSKbNooLnTT",
  "key13": "4yFCTiYDDwsqQSX9Mj4QUyTHe5CrhQJETDXbpz7oXxykkqBTVeDLLKkDZxo8UVwU5BCitMyFdhLG7cwbNi51X6nc",
  "key14": "4JaRZL9gfYUSapyyHW8iXgQNtRYBjoXyVdf7VqmbwU16CAtN6Fchoeop1zNiwaocBGr2bi1gfee5ozAhv1x7mgWx",
  "key15": "5Hdw3pQX37nMVwNDhquioWQDaBqFzANybYMQhbPVeFh9zoWqGeHf3bdeNd3iL6vZVx3x9UyBqcqBQp5Sduf4YADv",
  "key16": "5bBrwkargTgpHCkDCtwC89CCDBj8x7v1omqfCXBY9Hya3qoiqHgZ6v5fr7BG2h3xMbh7CMnv57EYf7ps5jkb5hJ5",
  "key17": "uYWTUYZWR7WSnhCRDAAtCkbUJn7y6ioWmi3PLSmLmMKrAbTLozeW9fe24ETq15E4K97Yd5ud6kUAfcBzKd9LaTs",
  "key18": "556zuYsaCvgKRTqFm2PVihG4yefwkVxQdjivTfu8QJu4gwRAFXeEx2HQGRnN6aq3qvf3ArHUJKFYNou7aPNPgBPg",
  "key19": "CoPyK8hzvSA1N52Mf6nhBQsuYwVtVLz9mFGkLU1zC4mVvVTZ43zFzuaGFBatdH6Qgy1vQaC9vGADks8qP2nBKdx",
  "key20": "4zuggds8NdHhA3Z5hDMvm9y2ot53TZ6hfYisGDGxUtacXQVequSYb9Wy69rLJnGUsu2vmis5H9dUoZ5XA8YGkFnQ",
  "key21": "4gmvbt3f3dF5ynxeRRX6NBA6S6Tx6MtNJVUTx2SAs833f3o15aLVWqCPrMZ3jRypee6CzUUDBx9MZSdiPkAUx1tv",
  "key22": "2YdrFP3Hq1ppg8Vk2EjVUMmTcGpF13wssnMoHmVBNFaYqkcaR21dYxto8FKYdt5cAJA3rk9dJu7RhuyBSLzY6U2J",
  "key23": "5anr4WxMXdyXdT5CmRyamce1qPxemRwc4fVZQZCLrXL9hv9m5AzXeZ6zXrp7SxyTUVtg1PNTUPRMxGJ5CWtYKDA4",
  "key24": "5HUAvnTozTvGt5DwZPXw9yDAjNtbM1JKaszoiDphC7aXbhmt6okM3M6AtnjhpaK59ZwU3q7Po2M4Ff3W9Sco5kPG",
  "key25": "5usys1R1bnuBxeRyyfWK2d5Y16eJaKYn75E1JkrU6SETmk4ugBZtxGpVv8cqq3wXqYe3zwErEWmMBAjEuEFMXBRf",
  "key26": "3PL5SqMnW7yXSH1rrek339BEMeSBMkqmhN2DDWzYn3wEFcx7vHBQkSvnn2djJFsbKK5RtrbvDNLgoQdCCQ49QKpv",
  "key27": "4Y9BN2Vd32LQhZddRuvMh1UvBnhS6JX7ZDf3a7nErKHgupS5fXZtyFFgihbvsoT64sgHjW1wc2LJh65ogmoT2SyJ",
  "key28": "4NdLun5a8ZguXYvgx5uHTL49DtQH2ZW6s5iMfKctGnN7PT4YTxV9DVmq9YGqUY9iaHrW8PpdQZBEtEYJQKhyUGwm",
  "key29": "5gSLD3hoTyk7RTrHFoRoHX5JLpMGGHBTkUdZadeAGhrb2sXkFaA1RxrTv7LSe78KQBJg78krKLwKDWzvZKtEJBuV",
  "key30": "4p1Lrw2dirDi6xXvbC8qhvoitey2FJM7skh1gbG6pswjm2ZJfXSmJbp2aLSotCS2Wi6QMgFLon9yCbFds5GnvBpq",
  "key31": "4qDQ8aVANZT98tsqv2eYudoQ15GLhkwL2dUMz9umb2sxFoBAM9WhPCcVuwwHpm8S8ZWGAp1MnZUDzP6qevZq1rFR",
  "key32": "3iXXgWczGNktvWpgHTxEaTBYLZ6KEb297uX3r13s4SQEiKCacu5DUeLNhum5XL8sAb1GhGhDyrLqHiKcWMLUhQV4",
  "key33": "35fATyLrCALZu3fETvvA6QJHba45M71xQMJzUGkxLbNBSgjgJZLEhcYqCUEWSgTo7bT8afRufmJR4vuR41vpRsoz",
  "key34": "4Jui6vopHRJx16dPC9SeLGeBgLwyEkqvhB41ZB4Cz4YLp2w6x7dfHgDmUNsN1kd7Y3DybFWuT9ErGJJ9zAC5QWJb",
  "key35": "4YDTgXy2eps7w74yha6Btz45YLvUbL5B3TMNFa2CuYGMSizsFrT3yuR2ZGFbAo9TJkKK5feRaFkZZABF3jQRaRzh",
  "key36": "p2zsjGRsNr5gMsX4n3d6Ya2aPER25QK3atWUexrAss6XMxki7aeJ6i8696M2GBPTmduagCqLEPREU9WzddqtgWy",
  "key37": "5LtPZVbNXWRu8jGwd5mzM5t48LWYoCsGN7cVDTe5DVQBzZQaRBH611adb7Ete2sEzQWZuxzsCjhiPmyKgsnoHCDd",
  "key38": "3Q2UAiagotux4SFXHSTGPajAaQWAipmFSi97xEYeNEzRxYxPFqRgxf2ESAApF41Ri98UAy7kFVhVE74r9j9kVQ1A",
  "key39": "21DQK4P2B36CpwNsud3sNaS3PyoswVA4e8iY91uDKnMZxNEAt4S9XGspaLUhPSLj3YxsQesATjtU4tRDQ9EXo1Qn",
  "key40": "3Yo4qZcsmduf6nqnMJi211NvYGHCDPjERCR2cXR6CXdJrdxBFuTxGDYVpZ9fGXgwiYthNEFqigUQqiGBgsW9Wp3p",
  "key41": "3q242HU6rfF5irsBS7172vRBF1Ts1Zvm4qoeNFa6rukfG8EtkevtGYGEHA7TxUkvoKrgXCER5tkDJoxK1UkCmhW5",
  "key42": "54bPVip422TCx63UMHYbNJCP6gdEmEmC4v35QGZcJSfqC1R7JBAssRLd6jXPGsJU189tJRu8h97TjToTG7Lsy2kd",
  "key43": "2yYdF9BipVsGDNZr71Do8DRYTC4DtGkBhbfmcCNkAqPNWLGFfNTCEu6oCmZmihd32Wq1yWsH5NYgwnev9pgcTMbK",
  "key44": "3REM7tfherZHK9rMFvNKkQ7JU8ov8bZAPU3YSHQnZpSigAdwhHrZHuN24vS3u9AC2Ko7mcYicw1DoSL6fXhJNamM"
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
